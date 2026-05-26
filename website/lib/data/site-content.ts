import type { IconKey, ReviewStep, TrustStat } from "@/types";

/**
 * Reusable editorial site content: process steps, trust stats and the
 * homepage FAQ set. Sample content only.
 */

/** A tile in the homepage "Explore treatments by category" grid. */
export interface HomeCategory {
  /** Links to the category hub. */
  href: string;
  icon: IconKey;
  name: string;
  description: string;
  /** Optional pill, e.g. "Most Popular". */
  badge?: string;
}

/**
 * The 7 homepage category tiles, in mockup order. These map to the
 * treatment hubs the homepage links out to (TRT/HRT route to the
 * men's/women's hormone hubs until dedicated hubs exist).
 */
export const homeCategories: HomeCategory[] = [
  {
    href: "/ed",
    icon: "ed",
    name: "ED",
    description: "Clinician-prescribed erectile dysfunction treatment.",
  },
  {
    href: "/weight-loss",
    icon: "weight-loss",
    name: "Weight Loss",
    description: "GLP-1 programs — semaglutide and tirzepatide.",
    badge: "Most Popular",
  },
  {
    href: "/mens-health",
    icon: "trt",
    name: "TRT",
    description: "Testosterone replacement therapy for men.",
  },
  {
    href: "/womens-health",
    icon: "hrt",
    name: "HRT",
    description: "Hormone therapy and menopause care for women.",
  },
  {
    href: "/blood-testing",
    icon: "blood-testing",
    name: "Blood Testing",
    description: "At-home lab kits and biomarker panels.",
  },
  {
    href: "/wellness",
    icon: "wellness",
    name: "Advanced Wellness",
    description: "Longevity, sleep and metabolic health programs.",
  },
  {
    href: "/hair-loss",
    icon: "hair-loss",
    name: "Hair Loss",
    description: "Finasteride, minoxidil and regrowth plans.",
  },
];

/** Weighted ranking criteria — the "Rankings you can trust" strip. */
export const rankingWeights: { label: string; weight: string }[] = [
  { label: "Effectiveness", weight: "25%" },
  { label: "Customer Experience", weight: "20%" },
  { label: "Value", weight: "15%" },
  { label: "Transparency", weight: "10%" },
  { label: "Provider Reputation", weight: "5%" },
];

/** "How we review every treatment" — homepage process steps. */
export const reviewSteps: ReviewStep[] = [
  {
    number: 1,
    title: "We research",
    description:
      "We map every credible provider in a category and gather pricing, clinical model and program details from primary sources.",
    icon: "search",
  },
  {
    number: 2,
    title: "We evaluate",
    description:
      "Each provider is scored against the same weighted criteria — effectiveness, experience, value, transparency and reputation.",
    icon: "calculator",
  },
  {
    number: 3,
    title: "We compare",
    description:
      "We line providers up side by side so the comparison is genuinely apples-to-apples — no marketing spin.",
    icon: "scale",
  },
  {
    number: 4,
    title: "We update",
    description:
      "We re-review at least every 90 days, and immediately when a provider changes its pricing or program.",
    icon: "send",
  },
  {
    number: 5,
    title: "You decide",
    description:
      "You get a clear, honest ranking to take into an informed conversation with a licensed clinician.",
    icon: "shield-check",
  },
];

/** "How we rank" — the methodology box on comparison pages. */
export const rankSteps: ReviewStep[] = [
  {
    number: 1,
    title: "Clinical oversight",
    description:
      "Licensed prescribers and genuine ongoing medical supervision — not just a questionnaire.",
    icon: "shield-check",
  },
  {
    number: 2,
    title: "Treatment options",
    description:
      "Availability of brand-name and compounded medication, and dose flexibility.",
    icon: "scale",
  },
  {
    number: 3,
    title: "Transparent pricing",
    description:
      "Clear all-in monthly cost, with no hidden fees or surprise charges.",
    icon: "calculator",
  },
  {
    number: 4,
    title: "Customer experience",
    description:
      "Onboarding speed, shipping, coaching quality and support responsiveness.",
    icon: "search",
  },
];

/**
 * Dark TrustBar statistics.
 *
 * Rewritten 2026-05-26 to remove invented social proof. The previous
 * values claimed "50,000+ Customer Reviews Analyzed" and "10 Expert
 * Reviewers" — neither was true (sample data; one reviewer currently).
 * Replacements are tied to verifiable facts in the codebase: brand
 * review count in `lib/data/reviews.ts`, criteria count in each
 * category's `rankingMethodology`, refresh cadence stated in every
 * category's SEO body. See AUDIT-2026-05-26.md § P0-13.
 *
 * UPDATE when the brand-review count changes or the criteria count
 * changes. Treat these as live facts, not marketing copy.
 */
export const trustStats: TrustStat[] = [
  { value: "200+", label: "Hours of research per category" },
  { value: "16", label: "Brands independently reviewed" },
  { value: "5", label: "Weighted criteria applied identically" },
  { value: "90 days", label: "Maximum refresh interval" },
  { value: "100%", label: "Independent and editorially driven" },
];

/** Compact micro-row of trust signals shown under hero headings. */
export const trustMicroPoints = [
  "Independent",
  "Evidence-based",
  "Updated 2026",
];

/** Homepage FAQ slug set (from lib/data/faqs.ts). */
export const homepageFaqSlugs = [
  "how-do-you-make-money",
  "is-this-medical-advice",
  "how-are-treatments-scored",
  "which-providers-included",
  "how-often-updated",
  "who-reviews-content",
];

/** Featured comparison: which weight-loss brands to surface on the homepage. */
export const featuredBrandSlugs = ["trimrx", "sunlightrx", "noom"];
