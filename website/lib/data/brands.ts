import type { Brand } from "@/types";

/**
 * Sample telehealth brand / provider data — illustrative only.
 * Affiliate URLs are placeholders pointing to example.com.
 */
export const brands: Brand[] = [
  {
    slug: "trimrx",
    goSlug: "trimrx",
    name: "TrimRx",
    tagline: "Personalized GLP-1 weight care",
    shortDescription:
      "Physician-supervised semaglutide and tirzepatide programs with monthly coaching and free shipping on every plan.",
    website: "https://example.com/trimrx",
    foundedYear: 2021,
    hqLocation: "Austin, TX",
    affiliateUrl: "https://example.com/partner/trimrx?aff=compare-treatments",
    affiliateOfferId: "off_trimrx_glp1",
    payoutModel: "cpa",
    trackingParams: { utm_source: "comparetreatments" },
    brandColor: "bg-brand-600",
  },
  {
    slug: "altrx",
    goSlug: "altrx",
    name: "AltRx",
    tagline: "Compounded GLP-1, simplified",
    shortDescription:
      "Lower-cost compounded semaglutide with at-home lab kits and a no-insurance-needed flat monthly price.",
    website: "https://example.com/altrx",
    foundedYear: 2022,
    hqLocation: "Denver, CO",
    affiliateUrl: "https://example.com/partner/altrx?aff=compare-treatments",
    affiliateOfferId: "off_altrx_glp1",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "sunlightrx",
    goSlug: "sunlightrx",
    name: "SunlightRx",
    tagline: "Whole-person metabolic health",
    shortDescription:
      "GLP-1 treatment paired with registered-dietitian nutrition support and quarterly metabolic check-ins.",
    website: "https://example.com/sunlightrx",
    foundedYear: 2020,
    hqLocation: "San Diego, CA",
    affiliateUrl:
      "https://example.com/partner/sunlightrx?aff=compare-treatments",
    affiliateOfferId: "off_sunlightrx_glp1",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },
  {
    slug: "remedy-meds",
    goSlug: "remedy-meds",
    name: "Remedy Meds",
    tagline: "Doctor-led weight loss",
    shortDescription:
      "Board-certified clinicians, brand-name and compounded GLP-1 options, and insurance navigation assistance.",
    website: "https://example.com/remedy-meds",
    foundedYear: 2021,
    hqLocation: "Chicago, IL",
    affiliateUrl:
      "https://example.com/partner/remedy-meds?aff=compare-treatments",
    affiliateOfferId: "off_remedymeds_glp1",
    payoutModel: "ppl",
    brandColor: "bg-brand-700",
  },
  {
    slug: "betterme",
    goSlug: "betterme",
    name: "BetterMe",
    tagline: "Habit-first weight programs",
    shortDescription:
      "Behavioral weight-loss coaching with an optional clinician-prescribed GLP-1 add-on for eligible members.",
    website: "https://example.com/betterme",
    foundedYear: 2017,
    hqLocation: "New York, NY",
    affiliateUrl:
      "https://example.com/partner/betterme?aff=compare-treatments",
    affiliateOfferId: "off_betterme_glp1",
    payoutModel: "cpa",
    brandColor: "bg-brand-500",
  },
  {
    slug: "measured",
    goSlug: "measured",
    name: "Measured",
    tagline: "Data-driven metabolic care",
    shortDescription:
      "Connected scales, lab-based dosing decisions, and ongoing clinician oversight for GLP-1 treatment plans.",
    website: "https://example.com/measured",
    foundedYear: 2019,
    hqLocation: "Boston, MA",
    affiliateUrl:
      "https://example.com/partner/measured?aff=compare-treatments",
    affiliateOfferId: "off_measured_glp1",
    payoutModel: "ppl",
    brandColor: "bg-accent-700",
  },
  {
    slug: "noom",
    goSlug: "noom",
    name: "Noom",
    tagline: "Psychology-based weight loss",
    shortDescription:
      "Well-known behavior-change platform with a medication track that connects eligible users to GLP-1 prescribers.",
    website: "https://example.com/noom",
    foundedYear: 2008,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/noom?aff=compare-treatments",
    affiliateOfferId: "off_noom_glp1",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },
  {
    slug: "ro",
    goSlug: "ro-weightloss",
    name: "Ro",
    tagline: "Full-service telehealth",
    shortDescription:
      "Established telehealth provider offering brand-name GLP-1s, pharmacy fulfillment and insurance support.",
    website: "https://example.com/ro",
    foundedYear: 2017,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/ro?aff=compare-treatments",
    affiliateOfferId: "off_ro_glp1",
    payoutModel: "ppl",
    brandColor: "bg-brand-900",
  },
  {
    slug: "medvi",
    goSlug: "medvi",
    name: "MEDVi",
    tagline: "Affordable GLP-1 access",
    shortDescription:
      "Membership-style telehealth with compounded semaglutide and tirzepatide and transparent flat pricing.",
    website: "https://example.com/medvi",
    foundedYear: 2022,
    hqLocation: "Miami, FL",
    affiliateUrl: "https://example.com/partner/medvi?aff=compare-treatments",
    affiliateOfferId: "off_medvi_glp1",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "fridays",
    goSlug: "fridays",
    name: "Fridays",
    tagline: "Streamlined weekly dosing",
    shortDescription:
      "Direct-to-door compounded GLP-1 plans with a simple onboarding quiz and weekly progress check-ins.",
    website: "https://example.com/fridays",
    foundedYear: 2023,
    hqLocation: "Seattle, WA",
    affiliateUrl:
      "https://example.com/partner/fridays?aff=compare-treatments",
    affiliateOfferId: "off_fridays_glp1",
    payoutModel: "ppc",
    brandColor: "bg-accent-600",
  },
];

/** Look up a brand by its public slug. */
export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/** Look up a brand by its `/go/[slug]` redirect slug. */
export function getBrandByGoSlug(goSlug: string): Brand | undefined {
  return brands.find((b) => b.goSlug === goSlug);
}
