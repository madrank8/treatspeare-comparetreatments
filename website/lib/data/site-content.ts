import type { ReviewStep, TrustStat } from "@/types";

/**
 * Reusable editorial site content: process steps, trust stats and the
 * homepage FAQ set. Sample content only.
 */

/** "How we review every treatment" — homepage process steps. */
export const reviewSteps: ReviewStep[] = [
  {
    number: 1,
    title: "Research",
    description:
      "We map every credible provider in a category and gather their pricing, clinical model and program details from primary sources.",
    icon: "search",
  },
  {
    number: 2,
    title: "Compare",
    description:
      "Each provider is assessed against the same weighted criteria so the comparison is genuinely apples-to-apples.",
    icon: "scale",
  },
  {
    number: 3,
    title: "Score",
    description:
      "We translate the assessment into a transparent 0–10 score covering oversight, options, price and support.",
    icon: "calculator",
  },
  {
    number: 4,
    title: "Verify",
    description:
      "A licensed medical reviewer checks the content for clinical accuracy before anything is published.",
    icon: "shield-check",
  },
  {
    number: 5,
    title: "Publish & update",
    description:
      "We publish, then re-review at least every 90 days — and immediately when a provider changes its offer.",
    icon: "send",
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

/** Dark TrustBar statistics. */
export const trustStats: TrustStat[] = [
  { value: "200+", label: "Treatments reviewed" },
  { value: "50,000+", label: "Readers helped" },
  { value: "10", label: "Expert reviewers" },
  { value: "100%", label: "Editorially independent" },
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
  "how-often-updated",
  "who-reviews-content",
];

/** Featured comparison: which weight-loss brands to surface on the homepage. */
export const featuredBrandSlugs = ["trimrx", "sunlightrx", "noom"];
