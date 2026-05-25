import { NextResponse, type NextRequest } from "next/server";
import { getBrandByGoSlug } from "@/lib/data/brands";

/**
 * Affiliate redirect — `/go/[slug]`.
 *
 * Reads the brand from local sample data, appends our tracking
 * sub-IDs, then 302-redirects to the partner deeplink. Never cached
 * and never indexed (architecture §7). A standard Node route handler.
 */
export const dynamic = "force-dynamic";

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
  dest.searchParams.set("subid", clickId);
  dest.searchParams.set(
    "placement",
    req.nextUrl.searchParams.get("p") ?? "unknown",
  );
  for (const [key, value] of Object.entries(brand.trackingParams ?? {})) {
    dest.searchParams.set(key, value);
  }

  // In production this is where a fire-and-forget click log would run
  // (architecture §7 — Vercel KV / durable store). Omitted here.

  const res = NextResponse.redirect(dest.toString(), 302);
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Cache-Control", "no-store, max-age=0");
  return res;
}
