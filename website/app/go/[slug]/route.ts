import { NextResponse, after, type NextRequest } from "next/server";
import { getBrandByGoSlug } from "@/lib/data/brands";

/**
 * Affiliate redirect — `/go/[slug]`.
 *
 * Reads the brand from local sample data, appends our tracking
 * sub-IDs, then 302-redirects to the partner deeplink. Never cached
 * and never indexed (architecture §7). A standard Node route handler.
 *
 * Click logging is fire-and-forget via `after()`, so a slow or failing
 * log call never delays the redirect. Logging writes to an
 * Upstash-compatible Redis (Vercel KV via the Vercel Marketplace
 * integration) over the REST API, controlled by env vars
 * `KV_REST_API_URL` and `KV_REST_API_TOKEN`. With either unset, logging
 * silently no-ops — the redirect still works. See `.env.example` and
 * AUDIT-2026-05-26.md § P0-11.
 *
 * Each click writes three Redis ops in a single pipeline:
 *   1. LPUSH the full click payload onto `clicks:YYYY-MM-DD`
 *   2. INCR a per-brand counter (`clicks:total:<brand>`)
 *   3. INCR a per-brand-per-placement counter
 *      (`clicks:total:<brand>:<placement>`)
 * The list gives full reconciliation against partner-reported clicks;
 * the counters give cheap dashboarding without scanning the list.
 */
export const dynamic = "force-dynamic";

type ClickPayload = {
  ts: string;
  clickId: string;
  brand: string;
  goSlug: string;
  placement: string;
  ip: string | null;
  country: string | null;
  ua: string | null;
  referer: string | null;
};

async function logAffiliateClick(payload: ClickPayload): Promise<void> {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return;

  const day = payload.ts.slice(0, 10); // YYYY-MM-DD
  try {
    await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        ["LPUSH", `clicks:${day}`, JSON.stringify(payload)],
        ["INCR", `clicks:total:${payload.brand}`],
        ["INCR", `clicks:total:${payload.brand}:${payload.placement}`],
      ]),
      // Hard ceiling so a slow Redis never holds the handler open.
      signal: AbortSignal.timeout(2000),
    });
  } catch {
    // A click-log failure must never break the redirect or surface to
    // the user. Re-add structured error reporting (Sentry / log drain)
    // when one is wired.
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const brand = getBrandByGoSlug(slug);

  // Unknown / missing brand → bounce to the homepage.
  if (!brand?.affiliateUrl) {
    return NextResponse.redirect(new URL("/", req.url), 302);
  }

  // Build the partner deeplink with our attribution sub-IDs.
  const dest = new URL(brand.affiliateUrl);
  const clickId = crypto.randomUUID();
  const placement = req.nextUrl.searchParams.get("p") ?? "unknown";
  dest.searchParams.set("subid", clickId);
  dest.searchParams.set("placement", placement);
  for (const [key, value] of Object.entries(brand.trackingParams ?? {})) {
    dest.searchParams.set(key, value);
  }

  // Fire-and-forget click log. `after()` runs the promise after the
  // response has been streamed, so the user's redirect is never delayed.
  after(
    logAffiliateClick({
      ts: new Date().toISOString(),
      clickId,
      brand: brand.slug,
      goSlug: slug,
      placement,
      ip:
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        req.headers.get("x-real-ip"),
      country: req.headers.get("x-vercel-ip-country"),
      ua: req.headers.get("user-agent"),
      referer: req.headers.get("referer"),
    }),
  );

  const res = NextResponse.redirect(dest.toString(), 302);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Cache-Control", "no-store, max-age=0");
  return res;
}
