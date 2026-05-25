import type { RankingTable } from "@/types";

/**
 * Ranked offer charts keyed by category slug. The `weight-loss`
 * ranking is the seeded 10-brand semaglutide comparison. Sample data —
 * scores and offers are illustrative.
 */
export const rankingTables: Record<string, RankingTable> = {
  "weight-loss": {
    categorySlug: "weight-loss",
    lastUpdated: "2026-05-18",
    entries: [
      {
        brandSlug: "trimrx",
        rank: 1,
        score: 9.8,
        starRating: 5,
        scoreLabel: "Excellent",
        offerHeadline: "Semaglutide programs from $199/mo — free shipping",
        sellingPoints: [
          "Licensed clinicians and weekly dose monitoring",
          "Brand-name and compounded semaglutide options",
          "Personalized coaching included at no extra cost",
          "Transparent flat pricing — no insurance required",
        ],
        badges: ["editors-choice", "free-shipping"],
        ctaLabel: "VISIT SITE",
        hasReview: true,
        promo: {
          headline: "$140 Off + Free Shipping",
          description:
            "New TrimRx members save $140 on the first three months and get free express shipping on every order.",
          expiry: "2026-06-30",
        },
      },
      {
        brandSlug: "altrx",
        rank: 2,
        score: 9.6,
        starRating: 5,
        scoreLabel: "Excellent",
        offerHeadline: "Compounded semaglutide from $169/mo",
        sellingPoints: [
          "Lowest flat monthly price in our comparison",
          "At-home lab kit included with onboarding",
          "No insurance or referral needed",
          "Cancel anytime with no lock-in",
        ],
        badges: ["best-value"],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "sunlightrx",
        rank: 3,
        score: 9.4,
        starRating: 4.5,
        scoreLabel: "Excellent",
        offerHeadline: "GLP-1 care + dietitian support from $229/mo",
        sellingPoints: [
          "Registered-dietitian nutrition support included",
          "Quarterly metabolic check-ins with a clinician",
          "Brand-name and compounded options available",
        ],
        badges: ["most-popular"],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "remedy-meds",
        rank: 4,
        score: 9.1,
        starRating: 4.5,
        scoreLabel: "Excellent",
        offerHeadline: "Doctor-led semaglutide from $219/mo",
        sellingPoints: [
          "Board-certified clinicians on every plan",
          "Insurance navigation assistance for brand-name GLP-1s",
          "Fast onboarding — most members start within 48 hours",
        ],
        badges: [],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "betterme",
        rank: 5,
        score: 8.9,
        starRating: 4.5,
        scoreLabel: "Great",
        offerHeadline: "Behavioral program + optional GLP-1 from $189/mo",
        sellingPoints: [
          "Habit-first coaching with optional medication add-on",
          "Large, well-established app and member community",
          "Good fit if you want lifestyle support first",
        ],
        badges: [],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "measured",
        rank: 6,
        score: 8.7,
        starRating: 4,
        scoreLabel: "Great",
        offerHeadline: "Data-driven GLP-1 dosing from $239/mo",
        sellingPoints: [
          "Connected scale and lab-based dosing decisions",
          "Ongoing clinician oversight between visits",
          "Detailed progress tracking dashboard",
        ],
        badges: [],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "noom",
        rank: 7,
        score: 8.5,
        starRating: 4,
        scoreLabel: "Great",
        offerHeadline: "Med track + psychology program from $209/mo",
        sellingPoints: [
          "Well-known psychology-based behavior platform",
          "Medication track connects eligible users to prescribers",
          "Strong educational content library",
        ],
        badges: [],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "ro",
        rank: 8,
        score: 8.3,
        starRating: 4,
        scoreLabel: "Great",
        offerHeadline: "Brand-name GLP-1 telehealth from $269/mo",
        sellingPoints: [
          "Established full-service telehealth provider",
          "Brand-name GLP-1 focus with pharmacy fulfillment",
          "Insurance support for eligible members",
        ],
        badges: [],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "medvi",
        rank: 9,
        score: 8.2,
        starRating: 4,
        scoreLabel: "Great",
        offerHeadline: "Membership GLP-1 access from $179/mo",
        sellingPoints: [
          "Membership-style pricing with flat monthly cost",
          "Compounded semaglutide and tirzepatide options",
          "Simple onboarding quiz",
        ],
        badges: [],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
      {
        brandSlug: "fridays",
        rank: 10,
        score: 8.1,
        starRating: 4,
        scoreLabel: "Great",
        offerHeadline: "Streamlined weekly GLP-1 plans from $199/mo",
        sellingPoints: [
          "Direct-to-door compounded GLP-1 plans",
          "Quick quiz-based onboarding",
          "Weekly progress check-ins",
        ],
        badges: ["new"],
        ctaLabel: "VISIT SITE",
        hasReview: true,
      },
    ],
  },
};

/** Get the ranking table for a category, or undefined if none seeded. */
export function getRankingTable(
  categorySlug: string,
): RankingTable | undefined {
  return rankingTables[categorySlug];
}
