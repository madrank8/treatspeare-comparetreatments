# CompareTreatments.com — Website

A US telehealth treatment-comparison affiliate site. Built with **Next.js 15
(App Router)**, **React 19**, **TypeScript (strict)** and **Tailwind CSS v4**.

This build covers the foundation plus the first two pages: the **homepage**, the
**category comparison page** (dynamic `[category]` route, seeded with a
semaglutide-focused weight-loss comparison), and the `/go/[slug]` affiliate
redirect.

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

Lint:

```bash
npm run lint
```

## Routes

| Route            | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `/`              | Homepage — hero, category grid, featured cards, FAQ, trust bar |
| `/[category]`    | Category comparison hub (e.g. `/weight-loss`) — 10-brand list  |
| `/go/[slug]`     | Affiliate redirect — 302 to the partner URL, `noindex`         |
| `/sitemap.xml`   | Generated sitemap                                              |
| `/robots.txt`    | Generated robots (disallows `/go/`)                            |

All 9 category routes are pre-rendered via `generateStaticParams`. Only
`weight-loss` has a seeded ranking table and SEO body; the other categories
render their hero/grid metadata.

## Project structure

```
app/                  Routes, root layout, sitemap/robots, /go redirect
components/            Reusable, typed components (layout, hero, comparison,
                       category, affiliate, sidebar, content, eeat, trust, seo)
lib/data/              Typed sample data — NO CMS
  authors.ts  brands.ts  categories.ts  rankings.ts  faqs.ts  site-content.ts
lib/schema.ts          JSON-LD builders (Organization, WebSite, ItemList, etc.)
lib/utils.ts  lib/site.ts  lib/tracking.ts
types/index.ts         Shared domain types
```

## Notes

- **Sample data only.** Brand names, scores, prices and affiliate URLs
  (`example.com`) are illustrative.
- **No CMS** — data is plain typed TS in `lib/data/`. The shapes mirror the
  architecture doc's data model with all Sanity-specific fields removed.
- **No image assets** — brand "logos" are styled wordmark components and the
  hero uses an inline SVG illustration, so nothing is ever broken.
- **SEO** — Metadata API on every route, JSON-LD via the `JsonLd` component
  (Organization + WebSite in the layout; BreadcrumbList + ItemList + FAQPage +
  MedicalWebPage on the comparison page; FAQPage on the homepage).
- The design system tokens live in `app/globals.css` (Tailwind v4 `@theme`).
