/**
 * Global site constants — single source of truth for brand identity.
 *
 * If the brand or domain ever changes, edit the four fields below
 * (`name`, `shortName`, `url`, `twitter`); the change cascades through
 * the footer, every JSON-LD builder in `lib/schema.ts`, the
 * DisclosureBanner, root-layout OpenGraph, robots.ts and sitemap.ts.
 *
 * The legal-page markdown (`legal/` source + `website/content/legal/`)
 * also references the brand by literal name and needs a parallel
 * find-and-replace when this changes.
 */
export const SITE = {
  name: "Treatsphere",
  shortName: "Treatsphere",
  /** Canonical production origin — no trailing slash. */
  url: "https://treatsphere.com",
  description:
    "Compare trusted US telehealth treatments side by side. Independent, evidence-based reviews and rankings across weight loss, men's & women's health, ED, hair loss and more.",
  tagline: "Compare trusted treatments. Choose what's right.",
  /** Used in the announcement bar and disclosure banner. */
  disclosure:
    "We only review and recommend trusted partners. When you click through to a provider, we may earn a commission — this never affects our rankings or scores.",
  twitter: "@treatsphere",
} as const;
