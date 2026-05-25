/**
 * Shared domain types for CompareTreatments.com.
 *
 * Based on the architecture doc's data model (§2) but with ALL
 * Sanity-specific concerns removed: no `_id`, `_type`, `Reference<>`,
 * `PortableText`, or `SanityImage`. Plain TS only — sample data lives
 * in `lib/data/*.ts`.
 */

export type ScoreLabel = "Excellent" | "Great" | "Good" | "Fair" | "Poor";

export type BadgeKind =
  | "editors-choice"
  | "best-value"
  | "most-popular"
  | "new"
  | "free-shipping";

export type PayoutModel = "ppc" | "ppl" | "ppcall" | "cpa";

/** Lucide icon key — resolved by the `Icon` component. */
export type IconKey =
  | "weight-loss"
  | "mens-health"
  | "womens-health"
  | "ed"
  | "hair-loss"
  | "skin"
  | "sexual-health"
  | "blood-testing"
  | "wellness"
  | "trt"
  | "hrt";

/** A telehealth company — the reusable "offer". */
export interface Brand {
  slug: string;
  /** Stable short slug used by the `/go/[slug]` redirect. */
  goSlug: string;
  name: string;
  /** One-line wordmark tagline, optional. */
  tagline?: string;
  shortDescription: string;
  website: string;
  foundedYear?: number;
  hqLocation?: string;
  /** Raw partner deeplink (with publisher IDs baked in). */
  affiliateUrl: string;
  affiliateOfferId: string;
  payoutModel: PayoutModel;
  /** Extra query params appended to the affiliate URL. */
  trackingParams?: Record<string, string>;
  /** Tailwind class fragment for the BrandLogo accent color. */
  brandColor: string;
}

/** Long-form editorial review of a Brand (one per brand+category). */
export interface BrandReview {
  brandSlug: string;
  categorySlug: string;
  /** Path-only slug; full URL built from category. */
  slug: string;
  title: string;
  heroSummary: string;
  overallScore: number; // 0–10, one decimal
  starRating: number; // 0–5, half-steps
  scoreLabel: ScoreLabel;
  pros: string[];
  cons: string[];
  datePublished: string; // ISO
  dateModified: string; // ISO
  lastReviewed: string; // ISO
}

/** One entry in a hub's ranked offer chart -> renders one ComparisonCard. */
export interface RankingEntry {
  brandSlug: string;
  rank: number;
  score: number; // 0–10
  starRating: number; // 0–5
  scoreLabel: ScoreLabel;
  offerHeadline: string;
  sellingPoints: string[]; // 3–5 bullets
  badges: BadgeKind[];
  ctaLabel?: string; // default "VISIT SITE"
  /** Optional promo, surfaced on-card and/or in the sidebar offer. */
  promo?: {
    headline: string;
    description: string;
    expiry?: string;
  };
  /** True if a full brand review exists to link to. */
  hasReview: boolean;
}

/** An ordered ranked offer chart that "applies to" a hub. */
export interface RankingTable {
  categorySlug: string;
  entries: RankingEntry[];
  lastUpdated: string; // ISO
}

/** A top-level treatment vertical / category hub. */
export interface TreatmentCategory {
  slug: string;
  title: string; // "Weight Loss"
  shortName: string; // nav label
  icon: IconKey;
  /** Short tagline shown on category tiles. */
  tileDescription: string;
  heroHeadline: string;
  heroIntro: string;
  /** Long-form SEO body — array of paragraph/heading blocks. */
  seoBody: SeoBlock[];
  metaTitle: string;
  metaDescription: string;
  /** Plain-text bullets summarising the ranking methodology. */
  rankingMethodology: string[];
  faqSlugs: string[];
  /** Author slug of the medical reviewer. */
  medicalReviewerSlug: string;
  lastReviewed: string; // ISO
  order: number;
  /** Optional structured drug info block (sub-hub style). */
  drugFacts?: DrugFacts;
}

export interface DrugFacts {
  genericName: string;
  brandNames: string[];
  drugClass: string;
  administration: string;
  commonSideEffects: string[];
}

/** A block in a long-form SEO body (replaces PortableText). */
export type SeoBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface FAQ {
  slug: string;
  question: string;
  answer: string;
}

/** Author / medical reviewer — E-E-A-T signal carrier. */
export interface Author {
  slug: string;
  name: string;
  role: "writer" | "editor" | "medical-reviewer";
  credentials?: string; // "MD", "RD, LDN"
  jobTitle: string;
  shortBio: string;
  /** Initials for the avatar placeholder. */
  initials: string;
  licensure?: string[];
  affiliations?: string[];
  yearsExperience?: number;
  sameAs: string[];
}

/** Editorial "How We Review" / "How We Rank" process step. */
export interface ReviewStep {
  number: number;
  title: string;
  description: string;
  icon: "search" | "scale" | "calculator" | "shield-check" | "send";
}

/** A homepage / trust-bar headline statistic. */
export interface TrustStat {
  value: string;
  label: string;
}
