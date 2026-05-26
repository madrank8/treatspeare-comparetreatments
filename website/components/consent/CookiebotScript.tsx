import Script from "next/script";

/**
 * Cookiebot Consent Management Platform loader.
 *
 * Loads `consent.cookiebot.com/uc.js` in `data-blockingmode="auto"`,
 * which makes Cookiebot intercept and gate every tagged third-party
 * script (GTM, GA4, Invoca, etc.) until the user grants consent per
 * cookie category. The CMP UI is rendered by Cookiebot itself —
 * configure region rules, languages, and category copy in the
 * Cookiebot console.
 *
 * Required env var:
 *   NEXT_PUBLIC_COOKIEBOT_ID
 *     Cookiebot Domain Group ID — a UUID from the Cookiebot console
 *     (Manage → Settings → Your scripts). One ID covers all matching
 *     subdomains.
 *
 * Quiet no-op when the env var is unset so local previews don't
 * render a broken banner. Production deploys will fail-loud during
 * QA because the banner won't appear — that's the right signal.
 *
 * Compliance roadmap §3.
 */
export function CookiebotScript() {
  const cbid = process.env.NEXT_PUBLIC_COOKIEBOT_ID;
  if (!cbid) return null;
  return (
    <Script
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      data-cbid={cbid}
      data-blockingmode="auto"
      strategy="beforeInteractive"
    />
  );
}
