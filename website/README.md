# Website (working brand: ComparedRx)

A US telehealth treatment-comparison affiliate site. Built with **Next.js 16
(App Router, Turbopack)**, **React 19**, **TypeScript (strict)** and
**Tailwind CSS v4**.

The brand name in this codebase is a placeholder — see
[`AUDIT-2026-05-26.md`](../AUDIT-2026-05-26.md) § P0-5 for the swap plan.
Every visible brand reference flows through `lib/site.ts`, so the real-brand
swap is a single-file change.

## Run it

```bash
cd website
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

Lint (Next 16 dropped `next lint`; this maps to `eslint .` directly):

```bash
npm run lint
```

## Environment

Copy `.env.example` → `.env.local` and fill in what you have.

| Var                          | Purpose                                            |
| ---------------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_COOKIEBOT_ID`   | Cookiebot CMP Domain Group ID                      |
| `NEXT_PUBLIC_GTM_ID`         | Google Tag Manager container ID (`GTM-XXXXXX`)     |
| `KV_REST_API_URL`            | Upstash / Vercel KV REST endpoint (click logging)  |
| `KV_REST_API_TOKEN`          | Upstash / Vercel KV REST token                     |

All four silently no-op when unset, so the site builds and runs locally
without any provider credentials.

## Routes

46 routes prerendered at build time, plus the one dynamic redirect handler.

| Pattern                            | Description                                          |
| ---------------------------------- | ---------------------------------------------------- |
| `/`                                | Homepage — hero, categories, top-rated, FAQ, trust   |
| `/[category]`                      | Category hub — 9 verticals, ranked offer chart       |
| `/[category]/reviews/[brand]`      | Long-form brand review — 16 currently seeded         |
| `/authors`, `/authors/[slug]`      | Author / medical-reviewer profiles — 4 currently     |
| `/about`, `/contact`, `/how-we-review` | Trust pages                                      |
| `/privacy-policy`, `/terms-of-service`, `/affiliate-disclosure`, `/medical-disclaimer`, `/cookie-policy`, `/accessibility`, `/dmca` | Legal pack |
| `/go/[slug]`                       | Affiliate 302 redirect — `noindex`, click-logged     |
| `/sitemap.xml`, `/robots.txt`      | Generated metadata routes                            |

## Project structure

```
app/                  Routes, root layout, sitemap/robots, /go redirect
components/
  affiliate/          AffiliateButton + DisclosureBanner
  analytics/          GoogleTagManager (consent-gated)
  category/           CategoryGrid + CategoryTile
  comparison/         Card / List / Featured / Ranked / RatingBadge / etc.
  consent/            ConsentModeBootstrap + CookiebotScript
  content/            FAQAccordion + HowWeReviewSteps + SeoBody
  eeat/               AuthorAvatar / AuthorCard / Breadcrumbs / etc.
  hero/               Hero + variants (illustration / photo / stats)
  layout/             Container / Section / Header / MegaNav / Footer / SiteLogo
  review/             AtAGlanceBox / PricingTable / ProsCons / RatingBreakdown / etc.
  seo/                JsonLd renderer
  sidebar/            DrugFactsBox / HowWeRankBox / RecommendedModule / SidebarOfferCard
  trust/              TrustBar + RankingWeightsBar
  ui/                 Badge / BrandLogo / Button / Icon

lib/data/             Typed sample data (no CMS yet)
  authors.ts  brands.ts  categories.ts  faqs.ts
  rankings.ts  reviews.ts  site-content.ts
lib/schema.ts         JSON-LD builders (Org, WebSite, Breadcrumb, ItemList,
                      CollectionPage, FAQ, MedicalWebPage, Review,
                      AggregateRating, ProfilePage)
lib/site.ts           SITE config — single source of truth for brand
lib/tracking.ts       dataLayer.push helpers (GTM-ready)
lib/legal.ts          Markdown loader for legal pages
lib/utils.ts          cn() etc.
types/index.ts        Shared domain types — the future Sanity contract
content/legal/        Markdown source for the 10 legal pages
```

## Notes

- **Sample data only.** Brand names, scores, prices and affiliate URLs are
  illustrative. The audit doc lists what needs to become real before launch.
- **No CMS** — data is plain typed TS in `lib/data/`. Sanity migration is
  scoped in audit P1-7; types/index.ts is the migration contract.
- **No image assets** — brand "logos" are styled wordmark components and the
  hero uses an inline SVG illustration, so nothing is ever broken.
- **SEO** — Metadata API on every route, JSON-LD via the `JsonLd` component:
  Organization + WebSite in the layout; BreadcrumbList + CollectionPage +
  ItemList + FAQPage + MedicalWebPage on category hubs; Review +
  AggregateRating + MedicalWebPage + FAQPage on brand reviews; ProfilePage on
  author pages.
- **Consent + analytics** — `ConsentModeBootstrap` sets Consent Mode v2
  default-denied; `CookiebotScript` (auto-blocking) gates third-party tags
  until the user grants consent; `GoogleTagManager` carries
  `data-cookieconsent="statistics,marketing"` and only fires after consent.
  GA4 is wired inside GTM, not loaded separately.
- **Affiliate redirect** — `/go/[slug]` is `noindex`, `no-store`, mints a
  fresh `crypto.randomUUID()` subid per click, accepts a `?p=placement`
  param, and (when `KV_REST_API_URL`/`TOKEN` are set) fire-and-forgets a
  click log to Upstash via `after()`.
- The design system tokens live in `app/globals.css` (Tailwind v4 `@theme`).
