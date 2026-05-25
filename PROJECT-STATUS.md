# CompareTreatments.com — Project Status

> Working tracker for the build. **Last updated: May 25, 2026.**
> Update this file as work progresses so each session can pick up cleanly.

---

## Overview

A US telehealth **treatment-comparison affiliate site** — modeled on the competitor `comparetreatments.com` and built to beat it on structure, E-E-A-T, performance, and compliance. Revenue model: affiliate commissions + paid placement + pay-per-click / pay-per-call.

## Quick facts

| | |
|---|---|
| GitHub repo | https://github.com/madrank8/comparetreatments (public) |
| Local clone | `~/Documents/GitHub/comparetreatments` |
| App | `website/` — Next.js 15, React 19, TypeScript, Tailwind v4 |
| Run locally | `cd website && npm install && npm run dev` → localhost:3000 |
| Deploy | **Not deployed yet** — see action items |
| Domain | **Not finalized** — `treatibly.com` was a candidate; deferred |

## Repository layout

| Path | Contents |
|---|---|
| `website/` | The Next.js application |
| `strategy/` | Competitor teardown & 2X blueprint, site architecture & build plan, content/SEO/PPC strategy |
| `compliance/` | Compliance & legal roadmap (FTC, FDA, LegitScript, Bing/Google ad policy, state privacy) |
| `legal/` | 10 legal-page drafts (markdown source) |
| `START-HERE.md` | Master index of the strategy/compliance package |
| `PROJECT-STATUS.md` | This file |

---

## Build status — done

**Planning & research**
- [x] Competitor reverse-engineering + 2X blueprint + attack plan
- [x] Telehealth affiliate compliance research (FTC / FDA / LegitScript / Bing Ads)
- [x] Site architecture & Next.js build plan
- [x] Content / SEO / PPC strategy
- [x] Compliance & legal roadmap
- [x] 10 legal/compliance page drafts

**Website — foundation**
- [x] Next.js 15 + TypeScript + Tailwind v4 scaffold, design system
- [x] Layout: header / mega-nav / mobile nav / footer / announcement bar
- [x] Typed sample data layer (no CMS yet)
- [x] `/go/[slug]` affiliate redirect, `sitemap.ts`, `robots.ts`, JSON-LD

**Website — pages** (~46 routes total)
- [x] Homepage — matched to the design mockup, integrated full-bleed hero with real photo
- [x] 9 category hub pages (weight-loss, men's/women's health, ED, hair loss, skin, sexual health, blood testing, wellness)
- [x] 16 brand review pages — 10 weight-loss + 6 ED
- [x] 10 legal routes (`/privacy-policy`, `/terms-of-service`, `/affiliate-disclosure`, `/medical-disclaimer`, `/how-we-review`, `/about`, `/contact`, `/cookie-policy`, `/accessibility`, `/dmca`)
- [x] Author profiles — `/authors` index + 4 author pages

**Website — design**
- [x] Hero rebuilt as an integrated full-bleed composition
- [x] Category section polished — bigger icons, centered grid
- [x] "How we review" steps + trust band redesigned (fixed an invisible-heading bug)
- [x] Richer 6-hue color palette (blue/green/amber + teal/coral/violet), color-coded categories & steps

---

## Pending / next steps

- [ ] **Deploy to Vercel** (see action items)
- [ ] Brand reviews for the remaining 7 categories (only weight-loss & ED have reviews; others show `hasReview: false`)
- [ ] Educational article pages + the `/articles` index
- [ ] Drug sub-hubs (e.g. `/weight-loss/semaglutide` vs `/tirzepatide`)
- [ ] Connect a CMS (Sanity) so content is editable outside code — currently typed sample data
- [ ] Replace remaining sample data with real, verified brand/treatment data
- [ ] Analytics (GA4 + GTM) and a cookie-consent platform
- [ ] Accessibility (WCAG 2.2 AA) pass

---

## Action items — Niro

1. **Domain & brand** — finalize the domain; form the legal entity.
2. **LegitScript Healthcare Merchant Certification** — required before running paid health ads on Bing/Google ($975 application + $2,150/yr). Apply early; it takes weeks.
3. **Legal pages** — the 10 pages use placeholders (`[COMPANY LEGAL NAME]`, `[SITE_DOMAIN]`, `[BUSINESS MAILING ADDRESS]`, contact emails, etc.). Provide real values for a find-and-replace, and have a healthcare-advertising attorney review before publishing.
4. **Deploy to Vercel** — import the repo at **vercel.com/new**, set **Root Directory = `website`**, deploy. After that, every `git push` auto-deploys.
5. **Hero photo** — currently `website/public/hero-home.png`. Fine as-is; `next/image` optimizes it.

---

## Notes

- The legal-page markdown source lives in `legal/`; the live site renders its own copies from `website/content/legal/`.
- Health copy follows compliance rules: no "FDA-approved" claims on compounded drugs, no brand-drug equivalence claims, hedged outcomes, clinician-suitability noted.
- The GitHub connector available in tooling is read-only — commits/pushes are done via GitHub Desktop or git CLI.
