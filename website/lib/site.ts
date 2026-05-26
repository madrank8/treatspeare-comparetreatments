/**
 * Global site constants.
 *
 * NOTE — `name`, `shortName`, `url`, and `twitter` are TEMPORARY
 * placeholders ("ComparedRx" / `comparedrx.com`) until the real brand
 * and domain are locked. The previous value `CompareTreatments.com`
 * was the literal competitor's name and carries trademark + ad-policy
 * risk; see AUDIT-2026-05-26.md § P0-5 and § Risk 1.
 *
 * When the real brand is decided, swap these four fields in this
 * file — the change cascades through the footer, every JSON-LD
 * builder in `lib/schema.ts`, `DisclosureBanner`, root layout
 * OpenGraph, robots.ts, and sitemap.ts automatically. The only
 * place the brand is *also* present is the hardcoded URL strings in
 * `lib/data/categories.ts` (none today) and the legal-page markdown
 * placeholders.
 */
export const SITE = {
  name: "ComparedRx",
  shortName: "ComparedRx",
  /** Canonical production origin — no trailing slash. Placeholder. */
  url: "https://comparedrx.com",
  description:
    "Compare trusted US telehealth treatments side by side. Independent, evidence-based reviews and rankings across weight loss, men's & women's health, ED, hair loss and more.",
  tagline: "Compare trusted treatments. Choose what's right.",
  /** Used in the announcement bar and disclosure banner. */
  disclosure:
    "We only review and recommend trusted partners. When you click through to a provider, we may earn a commission — this never affects our rankings or scores.",
  twitter: "@comparedrx",
} as const;
