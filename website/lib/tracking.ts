/**
 * Client-side analytics helpers. In production these push to GTM /
 * GA4 (architecture §10). Here they are lightweight, consent-safe
 * stubs that no-op when no dataLayer is present.
 */

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
};

/** Fire an `affiliate_click` event when a VISIT SITE button is clicked. */
export function trackAffiliateClick(params: {
  brand: string;
  placement: string;
  category?: string;
  score?: number;
}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: "affiliate_click", ...params });
}
