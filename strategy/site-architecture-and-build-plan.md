# CompareTreatments.com — Technical Architecture & Build Plan

**Project:** US telehealth treatment-comparison affiliate website
**Type:** Custom-coded Next.js / React site (not WordPress, not a page builder)
**Model:** Beats `comparetreatments.com` (a thin LeadsIQ jQuery/Bootstrap lander) on every axis that matters — structured data, E-E-A-T, performance, IA cleanliness.
**Status:** Greenfield. This document is the blueprint a developer can start from on day one.

---

## 0. Executive summary

We are building a comparison/affiliate property for the US telehealth market across eleven categories (GLP-1 weight loss, men's health, women's health, ED, TRT, HRT, hair loss, skin, sexual health, blood testing, advanced wellness). Revenue comes from affiliate clicks (pay-per-click and pay-per-call) when users click through to telehealth providers.

The competitor we are modeled on, `comparetreatments.com`, ranks today purely on domain age and templated SEO body copy. It is technically negligent: **zero JSON-LD anywhere, empty meta descriptions on every page, no authors or medical reviewers, a dated jQuery/Bootstrap stack, broken internal links, and a mixed `.html`/clean-slug URL scheme.** Each of those is a moat we take from them.

Our build is a **Next.js 15 (App Router) + React 19 + TypeScript** site, statically generated with ISR, styled with **Tailwind CSS v4**, content managed in **Sanity**, deployed on **Vercel**. Every page ships hand-authored JSON-LD; every page has a real medical reviewer byline; the affiliate redirect is a clean first-party `/go/[slug]` route handler. This is a YMYL (Your Money or Your Life) health property, so E-E-A-T is not optional — it is the product.

---

## 1. Recommended stack

| Layer | Choice | Version (as of build) | Why |
|---|---|---|---|
| Framework | Next.js, App Router | 15.x | App Router gives us per-route rendering control, the Metadata API (critical — see §8), React Server Components (less JS shipped), and route handlers for the affiliate redirect. The Pages Router is legacy; do not use it. |
| UI library | React | 19.x | Bundled with Next 15. Server Components by default. |
| Language | TypeScript | 5.x, `strict: true` | The data model (§2) is large and relational. Types catch a whole class of "wrong field on a brand card" bugs at build time. Non-negotiable. |
| Styling | Tailwind CSS | 4.x | Utility-first, zero runtime CSS, design tokens live in one config (§5). The mockups are a tight, token-able design system — Tailwind expresses it cleanly. Pair with a few CVA (`class-variance-authority`) component variants for buttons/cards/badges. |
| Component primitives | Radix UI (headless) | latest | Accessible accordion (FAQ), dropdown (MegaNav), dialog (cookie modal). We style them with Tailwind. Do not hand-roll accessible accordions. |
| CMS | Sanity | latest | See §2. |
| Hosting / CDN | Vercel | — | First-party Next.js host: zero-config ISR, edge network, edge/serverless functions for the redirect route, image optimization, preview deployments per PR (essential for an editorial team reviewing YMYL content). |
| Analytics | GA4 + Google Tag Manager | — | See §10. |
| Consent | Cookiebot (or Osano) CMP | — | See §11. |
| Forms (pay-per-call / contact) | Native route handlers + Invoca tag | — | See §7. |
| Linting / format | ESLint + Prettier + `eslint-plugin-tailwindcss` | — | Enforced in CI. |
| Package manager | pnpm | latest | Faster, stricter, smaller `node_modules`. |

### Why Next.js + Vercel specifically (vs. the competitor's stack)

The competitor runs a server-rendered jQuery/Bootstrap app behind a lead-gen platform. It is slow, ships a large JS payload, and cannot easily emit per-page structured data. Next.js lets us:

- **Render content statically** (HTML is on the CDN, no server round-trip) — wins LCP and TTFB outright.
- **Co-locate JSON-LD with the page component** so structured data is never forgotten.
- **Ship almost no client JS** on content pages because Server Components do the work at build time.
- **Run the affiliate redirect at the edge** — sub-50ms 302s, faster than the competitor's origin-bound `/click`.

### Rendering strategy per page type

| Page type | Strategy | Detail |
|---|---|---|
| Homepage | **SSG + ISR** | `revalidate: 3600`. Content changes rarely; rebuild hourly or on-demand via webhook from Sanity. |
| Category hub (`/weight-loss`) | **SSG + ISR**, `revalidate: 1800` | Rankings/offers change more often. On-demand revalidation when an editor publishes a ranking change in Sanity. |
| Drug sub-hub (`/weight-loss/semaglutide`) | **SSG + ISR**, `revalidate: 1800` | Same as category hub. |
| Brand review (`/weight-loss/reviews/{brand}`) | **SSG + ISR**, `revalidate: 3600` | Pre-render all known brands at build via `generateStaticParams`. |
| Article | **SSG + ISR**, `revalidate: 3600` | `generateStaticParams` over all article slugs. |
| Author page | **SSG + ISR** | Small set, rarely changes. |
| Legal pages | **SSG**, no revalidate needed (or 24h) | Static. |
| `/go/[slug]` affiliate redirect | **Edge runtime route handler, fully dynamic** | `export const runtime = 'edge'`, `export const dynamic = 'force-dynamic'`. Never cached. Logs click, then 302s. |
| `sitemap.xml`, `robots.txt` | Generated routes (`sitemap.ts`, `robots.ts`) | Rebuilt with each deploy + ISR. |

**On-demand ISR:** wire a Sanity webhook → `/api/revalidate` route handler that calls `revalidatePath()` / `revalidateTag()`. Editors publish a ranking change; the affected hub is fresh within seconds without a full rebuild.

---

## 2. Content / data layer

### CMS decision

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| **MDX + git** | Free, versioned, dev-native | Editors must use git/PRs. Unworkable for a non-technical medical reviewer or content editor. Relational data (a brand referenced by 5 hubs) is painful in flat files. | ❌ Rejected — editorial workflow is a hard requirement. |
| **Contentful** | Mature, good roles | Pricier at scale, content model edits are clunkier, weaker for richly relational + portable-text content. | ⚠️ Acceptable, not best. |
| **Sanity** | Real-time **Studio** (great non-dev UX), **Portable Text** (clean rich text → React), **GROQ** (relational queries — "give me all brands ranked in this hub, ordered by rank"), free generous tier, structured content, custom desk structure, draft/publish workflow, embeddable Studio at `/studio`. | Learning curve for GROQ; you host the Studio. | ✅ **Recommended.** |

**Recommendation: Sanity.** It gives a non-technical editor a polished CMS for a relational, YMYL content set, supports a draft → review → publish workflow (so a medical reviewer can approve before publish), and GROQ makes the "ranked comparison list" query trivial. Embed the Studio at `comparetreatments.com/studio` (or a subdomain) so it deploys with the site.

### Data model / schema

Below is the full content model. Each is a Sanity document or object type; the TypeScript interfaces are what the frontend consumes after a typed GROQ query (use `sanity-typegen` or `@sanity/codegen` to generate these automatically — do not hand-maintain them).

```ts
// ── Treatment Category ──────────────────────────────────────────
// Top-level vertical. e.g. "GLP-1 Weight Loss", "Men's Health".
interface TreatmentCategory {
  _id: string;
  _type: 'category';
  title: string;                 // "Weight Loss"
  slug: string;                  // "weight-loss"
  shortName: string;             // nav label, e.g. "Weight Loss"
  icon: string;                  // icon key for CategoryGrid
  heroHeadline: string;          // "Compare Weight Loss Treatments 2026"
  heroIntro: PortableText;       // 1–2 sentence dek
  seoBody: PortableText;         // the ~1,500-word SEO body (we write better)
  metaTitle: string;
  metaDescription: string;       // NEVER empty — validated in Sanity
  subcategories: Reference<Subcategory>[];
  faqs: Reference<FAQ>[];
  rankingMethodology: PortableText; // feeds the "How We Rank" sidebar box
  medicalReviewer: Reference<Author>;
  lastReviewed: string;          // ISO date — drives "Medically reviewed" line
  order: number;
}

// ── Subcategory / Drug ──────────────────────────────────────────
// A drug or sub-topic inside a category. e.g. "Semaglutide" under Weight Loss.
interface Subcategory {
  _id: string;
  _type: 'subcategory';
  title: string;                 // "Semaglutide Weight Loss Injections"
  slug: string;                  // "semaglutide"
  parentCategory: Reference<TreatmentCategory>;
  heroHeadline: string;          // "Compare Semaglutide Weight Loss Injections 2026"
  heroIntro: PortableText;
  seoBody: PortableText;
  metaTitle: string;
  metaDescription: string;
  faqs: Reference<FAQ>[];
  medicalReviewer: Reference<Author>;
  lastReviewed: string;
  drugFacts?: {                  // optional structured drug info block
    genericName: string;
    brandNames: string[];
    drugClass: string;
    administration: string;      // "Subcutaneous injection, weekly"
    commonSideEffects: string[];
  };
}

// ── Brand / Provider ────────────────────────────────────────────
// A telehealth company. The reusable "offer". One Brand, many rankings.
interface Brand {
  _id: string;
  _type: 'brand';
  name: string;                  // "Hims", "Ro", "Noom"
  slug: string;                  // "hims"
  logo: SanityImage;             // transparent-bg, used in cards
  website: string;               // public site (NOT the affiliate URL)
  shortDescription: string;
  foundedYear?: number;
  hqLocation?: string;
  // Affiliate plumbing — see §7
  affiliateOfferId: string;      // maps to the network's offer ID
  affiliateUrl: string;          // raw partner deeplink (with our subIDs)
  payoutModel: 'ppc' | 'ppl' | 'ppcall' | 'cpa';
  invocaCampaignId?: string;     // for pay-per-call brands
  trackingParams?: Record<string,string>;
}

// ── Brand Review ────────────────────────────────────────────────
// The long-form editorial review of a Brand. One per Brand.
interface BrandReview {
  _id: string;
  _type: 'brandReview';
  brand: Reference<Brand>;
  slug: string;                  // "hims" -> /weight-loss/reviews/hims (path built from category)
  primaryCategory: Reference<TreatmentCategory>;
  title: string;                 // "Hims Weight Loss Review 2026"
  heroSummary: PortableText;
  overallScore: number;          // 0–10, one decimal, e.g. 9.8
  starRating: number;            // 0–5, half-steps
  scoreLabel: 'Excellent'|'Great'|'Good'|'Fair'|'Poor';
  ratingBreakdown: {             // sub-scores -> AggregateRating + RatingBadge detail
    label: string;               // "Value", "Ease of Use", "Support"
    score: number;               // 0–10
  }[];
  pros: string[];
  cons: string[];
  pricing: PricingTier[];
  body: PortableText;            // the real review — we make this NOT thin
  verdict: PortableText;
  author: Reference<Author>;
  medicalReviewer: Reference<Author>;
  datePublished: string;
  dateModified: string;
  lastReviewed: string;
  faqs: Reference<FAQ>[];
}

interface PricingTier {
  planName: string;              // "Monthly", "3-Month"
  price: number;
  currency: 'USD';
  billingPeriod: string;         // "per month"
  notes?: string;
}

// ── Comparison / Ranking Entry ──────────────────────────────────
// The join between a hub (Category OR Subcategory) and a Brand.
// This is what renders one ComparisonCard. An ordered array of these
// IS the ranked offer chart.
interface RankingEntry {
  _key: string;
  _type: 'rankingEntry';
  brand: Reference<Brand>;
  rank: number;                  // 1, 2, 3...
  score: number;                 // 0–10, e.g. 9.8 (may differ per hub)
  starRating: number;            // 0–5
  scoreLabel: 'Excellent'|'Great'|'Good'|'Fair'|'Poor';
  offerHeadline: string;         // "Semaglutide from $199/mo"
  sellingPoints: string[];       // 3–5 bullets shown on the card
  badges: ('editors-choice'|'best-value'|'most-popular'|'new'|'free-shipping')[];
  promo?: {                      // optional -> SidebarOfferCard / on-card flag
    headline: string;            // "$140 Off + Free Shipping"
    description: string;
    expiry?: string;
  };
  ctaLabel: string;              // default "VISIT SITE"
  reviewLink: Reference<BrandReview>; // "Read full review"
}

// A hub embeds an ordered RankingEntry[]:
interface RankingTable {
  _type: 'rankingTable';
  appliesTo: Reference<TreatmentCategory | Subcategory>;
  entries: RankingEntry[];       // ordered by editor; rank field authoritative
  lastUpdated: string;
}

// ── Article ─────────────────────────────────────────────────────
interface Article {
  _id: string;
  _type: 'article';
  title: string;
  slug: string;
  excerpt: string;
  heroImage: SanityImage;
  body: PortableText;
  category: Reference<TreatmentCategory>;
  relatedBrands?: Reference<Brand>[];
  author: Reference<Author>;
  medicalReviewer?: Reference<Author>;
  datePublished: string;
  dateModified: string;
  metaTitle: string;
  metaDescription: string;
  faqs?: Reference<FAQ>[];
}

// ── Author / Medical Reviewer ───────────────────────────────────
interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: string;
  role: 'writer' | 'editor' | 'medical-reviewer';
  credentials?: string;          // "MD", "MPH", "RD, LDN"
  jobTitle: string;              // "Board-Certified Family Physician"
  photo: SanityImage;
  bio: PortableText;
  shortBio: string;              // for bylines
  // E-E-A-T signal fields — the competitor has NONE of these
  licensure?: string[];          // "Licensed in CA, NY, TX"
  education?: string[];
  affiliations?: string[];       // professional bodies
  yearsExperience?: number;
  sameAs: string[];              // LinkedIn, NPI registry, hospital profile — for Person schema
}

// ── FAQ ─────────────────────────────────────────────────────────
interface FAQ {
  _id: string;
  _type: 'faq';
  question: string;
  answer: PortableText;
  category?: Reference<TreatmentCategory>;
}

// ── Legal Page ──────────────────────────────────────────────────
interface LegalPage {
  _id: string;
  _type: 'legalPage';
  title: string;
  slug: string;                  // "privacy-policy", "affiliate-disclosure"
  body: PortableText;
  lastUpdated: string;
  metaTitle: string;
  metaDescription: string;
  noIndex?: boolean;
}
```

**Sanity validation rules to enforce (this is how we beat the competitor's empty metas):**
- `metaDescription` — `required()`, `min(70).max(160)`.
- `metaTitle` — `required()`, `max(60)`.
- Every hub, review, and article — `medicalReviewer` or `author` **required**.
- `lastReviewed` — required on all YMYL pages; surface a Studio warning when older than 12 months.

---

## 3. URL / IA architecture

**Principles:** lowercase, hyphenated, no `.html`, no trailing slash, no IDs in URLs, stable forever (301 if anything must move). One canonical scheme — the competitor's mixed `.html`/clean-slug mess is a credibility and crawl-budget leak.

```
/                                          Homepage
/weight-loss                               Category hub
/weight-loss/semaglutide                   Drug sub-hub
/weight-loss/tirzepatide                    Drug sub-hub
/weight-loss/reviews/hims                   Brand review (scoped to category)
/weight-loss/reviews/ro                     Brand review
/articles/how-semaglutide-works            Article  (flat /articles namespace)
/weight-loss/guides/glp-1-side-effects     (optional category-scoped guide alias)
/authors/dr-jane-smith                      Author / medical reviewer page
/about                                      About us  (E-E-A-T)
/how-we-review                              Methodology page (E-E-A-T)
/privacy-policy                             Legal
/terms-of-use                               Legal
/affiliate-disclosure                       Legal
/advertising-disclosure                     Legal
/medical-disclaimer                         Legal
/contact                                    Legal/utility
/go/[slug]                                  Affiliate redirect (noindex, see §7)
/studio                                     Sanity Studio (noindex, auth-gated)
```

**Notes:**
- Brand reviews are **category-scoped** (`/weight-loss/reviews/hims`) because the same brand can be reviewed in multiple verticals (Hims does weight loss, ED, hair). `primaryCategory` on `BrandReview` decides the canonical path; cross-links from other hubs point to it.
- Articles live in a flat `/articles/*` namespace for editorial flexibility; they are tagged to a category for breadcrumbs and internal linking, not nested in the URL.
- The eleven categories: `/weight-loss`, `/mens-health`, `/womens-health`, `/ed`, `/trt`, `/hrt`, `/hair-loss`, `/skin`, `/sexual-health`, `/blood-testing`, `/wellness`.

**Breadcrumbs** (rendered + emitted as `BreadcrumbList` JSON-LD):

| Page | Breadcrumb |
|---|---|
| Category hub | Home › Weight Loss |
| Drug sub-hub | Home › Weight Loss › Semaglutide |
| Brand review | Home › Weight Loss › Reviews › Hims |
| Article | Home › Articles › How Semaglutide Works |
| Author | Home › Authors › Dr. Jane Smith |
| Legal | Home › Privacy Policy |

---

## 4. Page templates

Each template below lists component sections **top to bottom**, mapped to the mockups.

### 4.1 Homepage  (`app/page.tsx`) — mockup 1

1. **Announcement bar** — thin slate strip: "We only review and recommend trusted partners" + advertising-disclosure link.
2. **Header / MegaNav** — logo left; nav (Categories ▾, Treatments ▾, Reviews, Articles); the dropdowns are the mega-nav category grid.
3. **Hero** — split layout: left = H1 "Compare trusted treatments. Choose what's right." + dek + two CTAs ("Browse all treatments" primary, "How we review" secondary) + a small trust micro-row (e.g. "Independent · Evidence-based · Updated 2026"); right = couple lifestyle photo; floating **trust-stat chip** ("1,804 treatments reviewed").
4. **CategoryGrid** — "Explore treatments by category": responsive icon grid, one tile per `TreatmentCategory` (icon, label, link). "View all categories" link.
5. **Featured comparison cards** — "Top-rated treatments, carefully reviewed": a row of 3 `ComparisonCard`s pulled from a curated/editorial list (logo, score badge, stars, selling points, AffiliateButton).
6. **HowWeReview** — "How we review every treatment": 4–5 numbered steps with icons (Research → Compare → Score → Verify → Publish).
7. **TrustBar** — dark band with stat columns ("200+ treatments", "50,000+ readers", "10 expert reviewers", "100% independent").
8. **FAQAccordion** — "Frequently asked questions".
9. **Footer** — link columns (Categories, Company, Legal), disclosure text, social.

### 4.2 Category Hub  (`app/[category]/page.tsx`) — mockup 2

1. Announcement bar + Header/MegaNav.
2. **Breadcrumbs**.
3. **Hub hero** — H1 "Compare Semaglutide Weight Loss Injections 2026"-style, dek, a 3-icon trust strip ("Expert reviewed / Independent & unbiased / Updated [month] 2026"), trust-stat chip, small product image.
4. **Two-column body** begins:
   - **Main column:** the **ranked ComparisonList** — vertical stack of `ComparisonCard`s, each: rank number, brand logo, star rating + numeric score + label, offer headline, 3–5 selling-point bullets, optional badge, green **AffiliateButton ("VISIT SITE")**, "Read full review" link. Below the list, a "Show more" expander, then the **ComparisonTable** (compact side-by-side spec view of the same brands — see §6), then the **SEO body** (`seoBody` PortableText — our longer, better-than-1,500-word content with proper H2s), then **FAQAccordion**.
   - **Sidebar (sticky):** `HowWeRank` box (methodology summary + link), `SidebarOfferCard` promo ("$140 Off + Free Shipping"), `RecommendedModule` (editor's pick), `RelatedArticles` / `EditorialModule`.
5. **MedicalReviewerByline** — "Medically reviewed by [Author], [credentials] · Last reviewed [date]".
6. Footer.

### 4.3 Drug Sub-hub  (`app/[category]/[subcategory]/page.tsx`)

Same template as the Category Hub (it *is* mockup 2 — that mockup is literally a semaglutide sub-hub). Differences: breadcrumb has the extra level; optional `DrugFactsBox` (structured drug info) rendered above or in the sidebar; rankings filtered to brands offering that drug.

### 4.4 Brand Review  (`app/[category]/reviews/[brand]/page.tsx`)

1. Header + Breadcrumbs.
2. **Review hero** — brand logo, "Hims Weight Loss Review 2026", `RatingBadge` (large), star rating, one-line verdict, a primary AffiliateButton.
3. **At-a-glance box** — pricing-from, score, payout-relevant facts, "Visit Site".
4. **ProsCons** — two-column pros/cons.
5. **RatingBreakdown** — sub-scores (Value, Ease of Use, Support…) as labeled bars.
6. **Review body** — `PortableText`, real depth (this is where we beat the competitor's thin templated reviews): how it works, who it's for, pricing detail, the telehealth/prescribing experience, shipping, support, complaints.
7. **PricingTable**.
8. **Verdict** + final AffiliateButton.
9. **FAQAccordion** (brand-specific).
10. **Byline block** — author + medical reviewer, datePublished / dateModified / lastReviewed.
11. **RelatedBrands** — "Compare alternatives" mini comparison strip.
12. Footer.

### 4.5 Article  (`app/articles/[slug]/page.tsx`)

Header + Breadcrumbs → hero (title, byline, hero image) → two-column (article `PortableText` + sticky sidebar with ToC, related comparison CTA, related articles) → byline block → FAQ (optional) → Footer.

### 4.6 Author page  (`app/authors/[slug]/page.tsx`)

Header + Breadcrumbs → author header (photo, name, credentials, job title, licensure/affiliations chips) → bio (`PortableText`) → "Reviewed/written by [name]" lists of pages → `sameAs` social/NPI links → Footer. Emits `Person` + `ProfilePage` JSON-LD.

### 4.7 Legal page  (`app/(legal)/[slug]/page.tsx`)

Header + Breadcrumbs → page title + "Last updated" → single-column `PortableText` → Footer. Some `noIndex`.

---

## 5. Design system (extracted from the mockups)

The mockups read as a **clean clinical-trust aesthetic**: white canvas, a deep navy primary, a single bright **green** for affiliate CTAs (deliberately the only loud color so the click target is unmistakable), an **amber** for rating stars, generous whitespace, soft rounded cards with subtle shadows, restrained sans-serif type.

### Color palette

| Token | Hex | Use |
|---|---|---|
| `brand.900` | `#0B1F3A` | Announcement bar, footer, trust-bar background (deep navy) |
| `brand.700` | `#13345C` | Headings, dark UI |
| `brand.600` | `#1E4D8C` | Primary brand blue, links, secondary buttons |
| `brand.500` | `#2563EB` | Interactive accent / focus |
| `brand.100` | `#DCE8F7` | Tinted panels, sidebar boxes |
| `brand.50`  | `#F1F6FC` | Section background wash |
| `accent.600` | `#16A34A` | **Affiliate CTA button** ("VISIT SITE") |
| `accent.700` | `#15803D` | CTA hover |
| `accent.50`  | `#E9F8EF` | Promo-card tint, "free shipping" badge bg |
| `rating.500` | `#F5A623` | Star fill, score highlights |
| `rating.50`  | `#FEF3E0` | Score-badge background |
| `ink.900` | `#0F172A` | Body headings |
| `ink.700` | `#334155` | Body text |
| `ink.500` | `#64748B` | Muted text, captions |
| `line.200` | `#E2E8F0` | Borders, card outlines, table rules |
| `surface.0` | `#FFFFFF` | Cards, page surface |
| `surface.50` | `#F8FAFC` | Page background |
| `danger.600` | `#DC2626` | "Cons" icons, error states |
| `success.600` | `#16A34A` | "Pros" check icons |

### Typography

- **Font family:** `Inter` (UI + body) and `Inter` for headings too — or pair with a slightly more editorial heading face like `Sora` for H1/H2. Loaded via `next/font/google` (self-hosted, zero layout shift, `display: swap`).
- **Scale (clamped, fluid):**

| Token | Size | Weight | Use |
|---|---|---|---|
| `display` | clamp(2.25rem, 4vw, 3.25rem) | 700 | Homepage / hub H1 |
| `h1` | 2.25rem / 36px | 700 | Page H1 |
| `h2` | 1.75rem / 28px | 700 | Section heads |
| `h3` | 1.375rem / 22px | 600 | Card titles, sub-sections |
| `h4` | 1.125rem / 18px | 600 | Small headings |
| `body-lg` | 1.125rem / 18px | 400 | Hero dek, intros |
| `body` | 1rem / 16px | 400 | Default body, line-height 1.65 |
| `small` | 0.875rem / 14px | 400 | Captions, byline, disclosure |
| `score` | 2rem / 32px | 800 | The big "9.8" numeral |

### Spacing scale

4px base: `1=4 · 2=8 · 3=12 · 4=16 · 6=24 · 8=32 · 12=48 · 16=64 · 24=96`. Section vertical rhythm: `py-16` mobile, `py-24` desktop.

### Border radius

| Token | Value | Use |
|---|---|---|
| `sm` | 6px | Badges, chips, inputs |
| `md` | 10px | Buttons |
| `lg` | 16px | Cards, comparison cards |
| `xl` | 24px | Hero image frame, promo card |
| `full` | 9999px | Pills, star widget container |

### Shadows

| Token | Value | Use |
|---|---|---|
| `card` | `0 1px 3px rgba(15,23,42,.08), 0 1px 2px rgba(15,23,42,.04)` | Resting cards |
| `card-hover` | `0 8px 24px rgba(15,23,42,.12)` | Hover lift on ComparisonCard |
| `float` | `0 12px 32px rgba(11,31,58,.18)` | Floating trust-stat chip |

### Button variants

| Variant | Style |
|---|---|
| `affiliate` | bg `accent.600`, white text, `radius.md`, bold uppercase-ish, full-width on cards, hover `accent.700`, subtle lift. The single loudest element. |
| `primary` | bg `brand.600`, white text. Site CTAs ("Browse all treatments"). |
| `secondary` | white bg, `brand.600` text + `line.200` border. ("How we review"). |
| `ghost` | transparent, `brand.600` text. ("Read full review", "Show more"). |

### Card variants

- **comparison** — `radius.lg`, white, `shadow.card`, `line.200` border, internal padding 24px, hover `shadow.card-hover`. Holds rank badge, logo, rating cluster, bullets, AffiliateButton.
- **category** — square-ish tile, icon + label, hover tint `brand.50`.
- **sidebar-offer** — `radius.xl`, `accent.50` background, accent border, promo headline.
- **stat** — borderless, used inside the dark TrustBar.

### Starter Tailwind theme config

```ts
// tailwind.config.ts  (Tailwind v4 — also expressible as @theme in CSS)
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#F1F6FC',100:'#DCE8F7',500:'#2563EB',
          600:'#1E4D8C',700:'#13345C',900:'#0B1F3A',
        },
        accent: { 50:'#E9F8EF',600:'#16A34A',700:'#15803D' },
        rating: { 50:'#FEF3E0',500:'#F5A623' },
        ink:    { 500:'#64748B',700:'#334155',900:'#0F172A' },
        line:   { 200:'#E2E8F0' },
        surface:{ 0:'#FFFFFF',50:'#F8FAFC' },
        danger: { 600:'#DC2626' },
        success:{ 600:'#16A34A' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'sans-serif'],
      },
      borderRadius: { sm:'6px', md:'10px', lg:'16px', xl:'24px' },
      boxShadow: {
        card:'0 1px 3px rgba(15,23,42,.08), 0 1px 2px rgba(15,23,42,.04)',
        'card-hover':'0 8px 24px rgba(15,23,42,.12)',
        float:'0 12px 32px rgba(11,31,58,.18)',
      },
      maxWidth: { content: '1200px' },
    },
  },
} satisfies Config;
```

**Layout grid:** 12-column, `max-w-content` (1200px) centered, 24px gutters. Hub/article body = 8/4 split (main/sidebar) on `lg+`, single column below. Homepage sections are full-bleed bands with a centered inner container.

---

## 6. Component inventory

Reusable React components. **S** = Server Component (default, no client JS), **C** = Client Component (`'use client'`, needs interactivity).

| Component | Type | Notes |
|---|---|---|
| `AnnouncementBar` | S | Thin disclosure strip. |
| `Header` | S | Logo + nav shell. |
| `MegaNav` | C | Dropdown category mega-menu (Radix). |
| `MobileNav` | C | Drawer for mobile. |
| `Hero` | S | Variant prop: `home` \| `hub` \| `review` \| `article`. |
| `TrustStatChip` | S | Floating "1,804 reviewed" chip. |
| `TrustMicroRow` | S | "Independent · Evidence-based · Updated 2026". |
| `CategoryGrid` | S | Icon tiles from `TreatmentCategory[]`. |
| `CategoryTile` | S | One tile. |
| `ComparisonCard` | S | The core ranked card. AffiliateButton inside. |
| `ComparisonList` | S | Ordered `ComparisonCard`s + "Show more" expander. |
| `ComparisonTable` | C | Side-by-side spec table; sticky header, horizontal scroll on mobile, optional column-pin. |
| `RatingBadge` | S | The big numeric "9.8" + label chip. |
| `StarRating` | S | 5-star widget, half-star support, amber fill. |
| `RatingBreakdown` | S | Labeled sub-score bars. |
| `ScoreLabelTag` | S | "Excellent" / "Great" pill. |
| `Badge` | S | "Editor's Choice", "Best Value", "Free Shipping". |
| `ProsCons` | S | Two-column check/cross lists. |
| `AffiliateButton` | C | Green "VISIT SITE"; fires click event then navigates `/go/[slug]`. See §7/§10. |
| `SidebarOfferCard` | C | Promo card ("$140 Off"); contains AffiliateButton. |
| `HowWeRankBox` | S | Methodology summary sidebar module. |
| `RecommendedModule` | S | Editor's-pick sidebar block. |
| `EditorialModule` / `RelatedArticles` | S | Sidebar/related content. |
| `TrustBar` | S | Dark stats band. |
| `HowWeReviewSteps` | S | Numbered process steps. |
| `FAQAccordion` | C | Radix Accordion; also emits FAQPage JSON-LD. |
| `MedicalReviewerByline` | S | "Medically reviewed by … · Last reviewed …". |
| `AuthorByline` | S | Compact author chip. |
| `AuthorCard` | S | Full author block for author pages / bios. |
| `Breadcrumbs` | S | Renders trail + `BreadcrumbList` JSON-LD. |
| `DrugFactsBox` | S | Structured drug info for sub-hubs. |
| `PricingTable` | S | Brand pricing tiers. |
| `Footer` | S | Link columns + disclosure. |
| `DisclosureBanner` | S | Affiliate/advertising disclosure (above offer charts — FTC requirement). |
| `CookieConsent` | C | CMP loader/wrapper — see §11. |
| `PortableTextRenderer` | S | Maps Sanity Portable Text → styled React. |
| `JsonLd` | S | Tiny helper that renders a `<script type="application/ld+json">`. |
| `Container` / `Section` / `Prose` | S | Layout primitives. |
| `Icon` | S | Icon system (lucide-react or a custom set keyed by category). |

**FTC note:** an affiliate disclosure must appear **before** any offer chart and be clearly worded. `DisclosureBanner` renders at the top of hub main columns and homepage featured cards.

---

## 7. Affiliate link / redirect system

The competitor cloaks links through `/click?offerId=...&offerLocation=...` → 302. We do the same pattern but **cleaner, faster, typed, and logged** — a first-party route handler at the edge.

### Route: `/go/[slug]`

`app/go/[slug]/route.ts`

```ts
import { NextRequest, NextResponse } from 'next/server';
import { getBrandByGoSlug } from '@/lib/sanity/queries';
import { logClick } from '@/lib/tracking/click';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';   // never cache a redirect

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const brand = await getBrandByGoSlug(slug);          // slug -> Brand

  if (!brand?.affiliateUrl) {
    return NextResponse.redirect(new URL('/', req.url), 302);
  }

  // Build the partner deeplink: base affiliate URL + our sub-IDs
  const dest = new URL(brand.affiliateUrl);
  const click = crypto.randomUUID();
  dest.searchParams.set('subid', click);                // attribution back to us
  dest.searchParams.set('placement', req.nextUrl.searchParams.get('p') ?? 'unknown');
  for (const [k, v] of Object.entries(brand.trackingParams ?? {})) {
    dest.searchParams.set(k, v);
  }

  // Fire-and-forget server-side click log (don't block the redirect)
  logClick({
    clickId: click,
    brandId: brand._id,
    offerId: brand.affiliateOfferId,
    payoutModel: brand.payoutModel,
    placement: req.nextUrl.searchParams.get('p') ?? null,
    referer: req.headers.get('referer'),
    ua: req.headers.get('user-agent'),
    country: req.headers.get('x-vercel-ip-country'),
    ts: Date.now(),
  });

  const res = NextResponse.redirect(dest.toString(), 302);
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  res.headers.set('Cache-Control', 'no-store');
  return res;
}
```

### Link rendering (`AffiliateButton`)

```tsx
<a
  href={`/go/${brand.goSlug}?p=${placement}`}   // placement = "hub-card" | "sidebar" | "review-hero"...
  target="_blank"
  rel="sponsored nofollow noopener noreferrer"
  data-brand={brand.slug}
  onClick={() => trackAffiliateClick(brand.slug, placement)}  // GA4 event, §10
>
  {ctaLabel ?? 'VISIT SITE'}
</a>
```

- `rel="sponsored nofollow noopener noreferrer"` — `sponsored` is the correct modern token for paid links; the competitor only uses `nofollow noopener`. We add `sponsored` and `noreferrer`.
- `target="_blank"` — keeps our tab alive (better return-to-compare behavior).
- The href is a real first-party path (`/go/...`) — crawlable as a link, but the route itself returns `X-Robots-Tag: noindex`, and `/go/` is `Disallow`-ed in `robots.txt`.

### Offer / affiliate ID mapping

Each `Brand` carries `affiliateOfferId`, `affiliateUrl` (raw partner deeplink with our publisher IDs already baked in), `payoutModel`, and optional `trackingParams`. The `goSlug` is a stable short slug (`hims`, `ro-weightloss`). Editors never touch raw affiliate URLs in templates — they live once on the `Brand` document. Changing a payout link is a one-field CMS edit, instantly live (the route reads fresh from Sanity / a short-TTL cache).

### Pay-per-call (Invoca)

For `payoutModel: 'ppcall'` brands, render an Invoca-tracked phone number instead of (or alongside) the VISIT SITE button. The Invoca tag is loaded via GTM and `invocaCampaignId` selects the right number pool. The number is swapped client-side by Invoca's script; the displayed-number element gets `data-invoca-campaign={brand.invocaCampaignId}`.

### Click logging backend

`logClick` writes to a lightweight store — recommend **Vercel KV / Upstash Redis** for hot counts plus an append to a durable table (Vercel Postgres or a logging pipeline). Minimum captured: `clickId`, `brandId`, `offerId`, `payoutModel`, `placement`, page path, country, timestamp, UA hash. This gives us first-party click analytics independent of GA4 and a reconciliation source against network postbacks (the `subid` round-trips).

---

## 8. SEO & schema architecture

**This is the competitor's single biggest weakness and our single biggest opportunity.** They emit zero JSON-LD and have empty meta descriptions sitewide. We make structured data a first-class output of every page.

### JSON-LD plan per page type

| Page type | Schema emitted |
|---|---|
| **All pages** | `Organization` + `WebSite` (with `SearchAction`) in the root layout. |
| Homepage | `Organization`, `WebSite`. |
| Category hub | `BreadcrumbList`, `CollectionPage` or `MedicalWebPage`, `ItemList` (the ranked offer chart, each item → `ListItem` referencing the brand review), `FAQPage`. |
| Drug sub-hub | `BreadcrumbList`, `MedicalWebPage`, `ItemList`, optionally `Drug`, `FAQPage`. |
| Brand review | `BreadcrumbList`, `Review` with `itemReviewed` (`Product` or `Service`/`MedicalBusiness`), `aggregateRating` (`AggregateRating` from `overallScore`/`ratingBreakdown`), `author` → `Person`, `MedicalWebPage`, `FAQPage`. |
| Article | `BreadcrumbList`, `Article` (or `MedicalWebPage` for clinical pieces), `author`/`reviewedBy` → `Person`, `FAQPage` if FAQs present. |
| Author page | `ProfilePage` + `Person` (with `sameAs`, `knowsAbout`, `hasCredential`). |
| Legal page | `BreadcrumbList`, `WebPage`. |

`MedicalWebPage` with `lastReviewed` and `reviewedBy` is the YMYL-specific signal Google's medical content guidance rewards — the competitor emits none of it.

Implementation: a `JsonLd` server component plus typed builder functions in `lib/schema/*.ts` (`buildBrandReviewSchema(review)`, `buildHubItemList(hub)`, etc.). Schema is generated from the same typed data the page renders, so it can never drift from on-page content (a Google requirement).

### Metadata strategy

Use the Next.js **Metadata API** — every route exports `generateMetadata()` that pulls `metaTitle` / `metaDescription` from Sanity (both CMS-validated as required, §2):

```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  const hub = await getCategory((await params).category);
  return {
    title: hub.metaTitle,
    description: hub.metaDescription,
    alternates: { canonical: `https://comparetreatments.com/${hub.slug}` },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: `https://comparetreatments.com/${hub.slug}`,
      type: 'website',
      images: [{ url: hub.ogImage ?? '/og-default.png' }],
    },
    twitter: { card: 'summary_large_image' },
  };
}
```

- **Canonical tags** on every page (self-referencing; brand reviews canonicalize to their `primaryCategory` path).
- **Open Graph + Twitter** cards everywhere; a dynamic OG image route (`app/og/route.tsx` with `@vercel/og`) for hubs and reviews (logo + score + headline) so shared links look credible.
- **`sitemap.xml`** — generated via `app/sitemap.ts`, enumerating all categories, sub-hubs, reviews, articles, authors, legal pages with `lastModified` from `dateModified`/`lastReviewed`.
- **`robots.txt`** — `app/robots.ts`: allow all content, `Disallow: /go/`, `Disallow: /studio/`, `Disallow: /api/`, point to the sitemap.
- **Internal linking:** every hub links to its sub-hubs and the brand reviews it ranks; every review links back to its hubs and to alternatives; articles link to relevant hubs. Run a build-time link checker (e.g. a CI step) so we never ship the broken internal links the competitor has.

---

## 9. Performance & Core Web Vitals

Target: green CWV on mobile (LCP < 2.0s, INP < 200ms, CLS < 0.05).

- **Images:** `next/image` everywhere. Brand logos and category icons as SVG where possible. Hero couple photo: `priority`, explicit `width`/`height` (no CLS), modern formats (AVIF/WebP via Vercel's optimizer), responsive `sizes`. Sanity images served through `@sanity/image-url` with width params + Vercel optimization.
- **Fonts:** `next/font` self-hosts Inter/Sora — no FOUT, no layout shift, `font-display: swap`, subset to Latin.
- **JS budget:** Server Components by default; only `MegaNav`, `MobileNav`, `ComparisonTable`, `FAQAccordion`, `AffiliateButton`, `SidebarOfferCard`, `CookieConsent` are client components. Keep total first-load JS well under ~120KB gzipped.
- **Off the main thread / deferred:** GTM, GA4, Invoca, and the CMP load `afterInteractive` (or lazily, gated by consent). The CMP banner itself must not block render.
- **Static HTML:** all content pages are pre-rendered (SSG/ISR) and served from Vercel's edge — fast TTFB with no origin compute.
- **CLS guards:** reserve space for the trust-stat chip, sticky sidebar, star widgets, and any ad/promo slot. The cookie banner is a bottom sheet that does not push layout.
- **`ComparisonTable`** virtualizes only if a hub exceeds ~20 brands; otherwise plain semantic `<table>`.

---

## 10. Analytics & tracking

The competitor's analytics is broken; ours is deliberate and consent-aware.

- **GA4 via Google Tag Manager.** GTM container loaded once in the root layout (`afterInteractive`). All tags (GA4 config, Invoca, future pixels) managed in GTM, not hard-coded.
- **Key events:**
  - `affiliate_click` — params: `brand`, `placement`, `category`, `offer_id`, `payout_model`, `score`. Fired from `AffiliateButton.onClick` *and* corroborated by the server-side `/go` log.
  - `view_offer_chart`, `faq_open`, `compare_table_interact`, `category_tile_click`, `phone_reveal` (pay-per-call).
- **Server-side click tracking** (§7): the `/go` route is the source of truth for clicks and feeds reconciliation against network postbacks via `subid`. GA4 client events can be lost to ad-blockers — the server log cannot.
- **Optional GA4 Measurement Protocol:** mirror server `affiliate_click` events to GA4 server-side so reporting is complete even when the client tag is blocked.
- **Dashboards:** GA4 for behavior; a small internal report (from the click log) for per-brand revenue-relevant click volume and EPC once postbacks are wired.

---

## 11. Consent / privacy tech

The competitor has no CMP despite running trackers on US health-adjacent traffic — a real CCPA/state-privacy and ad-platform exposure. We ship a proper one.

- **CMP:** **Cookiebot** (or Osano) — a Google-certified CMP. Renders a US-appropriate notice (CCPA/CPRA "Do Not Sell or Share" link in the footer, plus state-specific behavior).
- **Google Consent Mode v2:** GTM configured so GA4 and any future ad tags respect granted/denied signals; default state is `denied` for analytics/ads storage until the user acts (and region-appropriate defaults). Consent updates flow to GTM, which gates tag firing.
- **Loading order:** the CMP script loads first (`beforeInteractive`/early), sets default consent, then GTM loads and reads consent state. Non-essential tags (GA4 in regions requiring opt-in, Invoca, pixels) only fire on consent.
- **Footer links:** Privacy Policy, Advertising Disclosure, Affiliate Disclosure, Do Not Sell or Share My Personal Information, Cookie Settings (re-opens the CMP).
- **YMYL caution:** treat any health-topic browsing as sensitive — do not pass page topics into ad audiences without consent; document data flows in the Privacy Policy.

---

## 12. Build phases

### Phase 0 — Foundations (week 1)
Repo, Next.js 15 + TS + Tailwind scaffold, design tokens in Tailwind config, layout primitives (`Container`, `Section`, `Prose`), `Header`/`Footer`/`AnnouncementBar` shells, fonts, ESLint/Prettier/CI, Vercel project + preview deploys.

### Phase 1 — MVP (weeks 2–5)
**Goal: a publishable, monetizable, indexable site for the weight-loss vertical.**
- Sanity project + full schema (§2) + validation rules + Studio at `/studio`.
- Typed GROQ data layer + generated types.
- Templates: Homepage, Category Hub, Drug Sub-hub, Brand Review, Legal pages.
- Core components: `Hero`, `CategoryGrid`, `ComparisonCard`, `ComparisonList`, `RatingBadge`, `StarRating`, `ProsCons`, `AffiliateButton`, `SidebarOfferCard`, `HowWeRankBox`, `TrustBar`, `FAQAccordion`, `MedicalReviewerByline`, `Breadcrumbs`, `DisclosureBanner`, `PortableTextRenderer`, `JsonLd`.
- Affiliate redirect `/go/[slug]` + server click logging.
- SEO baseline: Metadata API on every route, JSON-LD for Organization/WebSite/BreadcrumbList/ItemList/Review/AggregateRating/FAQPage/MedicalWebPage, `sitemap.ts`, `robots.ts`, canonicals.
- CMP + Consent Mode v2 + GTM/GA4.
- Content: full weight-loss category + semaglutide & tirzepatide sub-hubs + 6–10 brand reviews + all legal pages + 2 author profiles.
- **Launch criterion:** green CWV, valid Rich Results test on hub + review, working redirects, CMP live.

### Phase 2 — Full category rollout (weeks 6–10)
- Remaining ten categories with hubs, sub-hubs, brand reviews.
- `ComparisonTable` component, `DrugFactsBox`, `RatingBreakdown`, `MegaNav` full category mega-menu.
- Articles template + `/articles` index + author pages template + `/about` + `/how-we-review`.
- Dynamic OG images.
- Pay-per-call (Invoca) integration for relevant brands.
- On-demand ISR via Sanity webhooks.

### Phase 3 — Optimization & scale (weeks 11+)
- Internal-link build-time checker in CI.
- Server-side GA4 Measurement Protocol mirroring; internal click/EPC dashboard.
- A/B testing on `AffiliateButton` copy/placement (Vercel flags or Edge Config).
- Search across the site, related-content recommendations, comparison "vs" pages (`/weight-loss/hims-vs-ro`).
- Schema enrichment, performance hardening, accessibility audit (WCAG 2.2 AA).

---

## 13. Repo structure

```
comparetreatments/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx                       # Homepage
│  │  ├─ about/page.tsx
│  │  └─ how-we-review/page.tsx
│  ├─ (legal)/
│  │  └─ [slug]/page.tsx                # Privacy, Terms, Disclosures...
│  ├─ [category]/
│  │  ├─ page.tsx                       # Category hub
│  │  ├─ generateMetadata.ts
│  │  ├─ [subcategory]/
│  │  │  └─ page.tsx                    # Drug sub-hub
│  │  └─ reviews/
│  │     └─ [brand]/page.tsx            # Brand review
│  ├─ articles/
│  │  ├─ page.tsx                       # Article index
│  │  └─ [slug]/page.tsx
│  ├─ authors/
│  │  └─ [slug]/page.tsx
│  ├─ go/
│  │  └─ [slug]/route.ts                # Affiliate redirect (edge)
│  ├─ api/
│  │  └─ revalidate/route.ts            # Sanity webhook -> ISR
│  ├─ og/route.tsx                      # Dynamic OG images
│  ├─ studio/[[...tool]]/page.tsx       # Embedded Sanity Studio
│  ├─ sitemap.ts
│  ├─ robots.ts
│  ├─ layout.tsx                        # Root: Org+WebSite JSON-LD, fonts, GTM, CMP
│  └─ globals.css
├─ components/
│  ├─ layout/      # Header, MegaNav, MobileNav, Footer, AnnouncementBar, Container, Section
│  ├─ hero/        # Hero, TrustStatChip, TrustMicroRow
│  ├─ comparison/  # ComparisonCard, ComparisonList, ComparisonTable, RatingBadge,
│  │               # StarRating, RatingBreakdown, ScoreLabelTag, Badge, ProsCons, PricingTable
│  ├─ category/    # CategoryGrid, CategoryTile
│  ├─ affiliate/   # AffiliateButton, SidebarOfferCard, DisclosureBanner
│  ├─ sidebar/     # HowWeRankBox, RecommendedModule, EditorialModule, RelatedArticles
│  ├─ content/     # PortableTextRenderer, FAQAccordion, HowWeReviewSteps, Prose
│  ├─ eeat/        # MedicalReviewerByline, AuthorByline, AuthorCard, Breadcrumbs
│  ├─ trust/       # TrustBar
│  ├─ seo/         # JsonLd
│  └─ consent/     # CookieConsent
├─ lib/
│  ├─ sanity/      # client.ts, queries.ts (GROQ), image.ts
│  ├─ schema/      # JSON-LD builders per page type
│  ├─ tracking/    # click.ts (server log), analytics.ts (GA4 events)
│  └─ utils/
├─ sanity/
│  ├─ schemaTypes/ # category, subcategory, brand, brandReview, rankingEntry,
│  │               # article, author, faq, legalPage, objects/...
│  ├─ desk.ts      # custom Studio structure
│  └─ sanity.config.ts
├─ types/          # generated Sanity types + shared types
├─ public/         # static assets, og-default.png, icons
├─ tailwind.config.ts
├─ next.config.ts
├─ tsconfig.json   # strict: true
├─ .env.local      # SANITY_*, GTM_ID, affiliate config, REVALIDATE_SECRET
└─ package.json
```

---

## 14. How this beats comparetreatments.com — scorecard

| Dimension | Competitor | This build |
|---|---|---|
| Stack | jQuery/Bootstrap, server-rendered, heavy | Next.js 15 RSC, static + edge, light |
| Structured data | **None** | Full JSON-LD per page type, YMYL `MedicalWebPage` |
| Meta descriptions | **Empty sitewide** | CMS-validated required, 70–160 chars |
| E-E-A-T | No authors, no reviewers, no About | Medical reviewers, bylines, `lastReviewed`, author pages, `/about`, `/how-we-review` |
| URLs | Mixed `.html` + clean slugs | One clean, consistent scheme |
| Internal links | Broken | Build-time link checker in CI |
| Reviews | Thin, templated | Deep, structured, schema-backed |
| Affiliate redirect | `/click?offerId=` origin 302, `nofollow noopener` | `/go/[slug]` edge 302, `sponsored nofollow noopener noreferrer`, server-logged |
| Consent / privacy | **No CMP** | Cookiebot + Consent Mode v2 |
| Analytics | Broken | GA4 + GTM + server-side click truth |
| Performance | Slow legacy bundle | Green CWV, static HTML, RSC |

---

*End of build plan. A developer can scaffold Phase 0 and Phase 1 directly from sections 5, 6, 7, and 13.*
