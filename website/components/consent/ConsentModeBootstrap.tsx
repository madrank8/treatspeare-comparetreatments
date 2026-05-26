import Script from "next/script";

/**
 * Google Consent Mode v2 default-denied bootstrap.
 *
 * Must execute BEFORE any Google tag (Cookiebot, GTM, GA4, Ads) loads —
 * hence `beforeInteractive`. Sets default consent grants to `denied`
 * for non-essential storage. Cookiebot then updates these grants based
 * on the user's CMP choices, and GTM / GA4 / Ads fire only against the
 * resulting consent state.
 *
 * Why this exists (compliance roadmap §3 — state privacy):
 *   • CCPA / CPRA / VA / CO / CT / UT / TX / OR / MT require opt-out
 *     of sale or sharing, and a default-granted analytics_storage
 *     before opt-out is a violation in several of these states.
 *   • Washington "My Health My Data" Act treats health-adjacent
 *     consumer data as protected, default-denied is the safe posture.
 *   • Google Ads requires Consent Mode v2 for EEA traffic; using
 *     default-denied globally is the simplest compliant pattern.
 *
 * Pairs with `<CookiebotScript />` (the CMP that updates these grants)
 * and `<GoogleTagManager />` (gated behind the resulting consent).
 *
 * The inline script body is intentionally tiny so it ships in the
 * critical render path without measurable LCP cost.
 */
export function ConsentModeBootstrap() {
  return (
    <Script
      id="consent-mode-default"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
`,
      }}
    />
  );
}
