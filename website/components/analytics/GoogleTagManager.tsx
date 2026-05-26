import Script from "next/script";

/**
 * Google Tag Manager loader — consent-gated.
 *
 * The `data-cookieconsent="statistics,marketing"` attribute tells
 * Cookiebot's auto-blocking mode to delay this script until the user
 * grants consent for those cookie categories. Until consent, the
 * script body is treated as opaque text by the browser and does not
 * execute — which keeps the site compliant with state privacy laws
 * (default-denied) and with Google / Microsoft ad-policy.
 *
 * Required env var:
 *   NEXT_PUBLIC_GTM_ID — GTM container ID (format: `GTM-XXXXXX`).
 *
 * Quiet no-op when the env var is unset, so the site works locally
 * without analytics installed.
 *
 * GA4 is configured INSIDE GTM (as a Google Analytics: GA4
 * Configuration tag firing on All Pages, plus event tags listening
 * for the `affiliate_click` dataLayer event). GA4 is NOT loaded
 * separately — GTM controls consent gating and tag rules.
 *
 * `trackAffiliateClick` in `lib/tracking.ts` already pushes to
 * `dataLayer` with `event: 'affiliate_click'` + `{ brand, placement,
 * category, score }`. Configure a GA4 event tag in GTM to forward
 * those once you have the container connected.
 */
export function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;
  return (
    <Script
      id="gtm-init"
      strategy="afterInteractive"
      data-cookieconsent="statistics,marketing"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
`,
      }}
    />
  );
}
