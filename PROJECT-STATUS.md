# comparetreatments — Project Status

> Working tracker for the build. **Last updated: 2026-06-14.**

---

## Overview

A US telehealth **treatment-comparison affiliate site** — modeled on the competitor `comparetreatments.com` and built to beat it on structure, E-E-A-T, performance, and compliance. Revenue model: affiliate commissions + paid placement + pay-per-click / pay-per-call.

**Brand in code: Treatsphere · Production domain: https://treatsphere.com** — configured in `website/lib/site.ts` (2026-05-28). A parallel static landing at `comparetreatments-site.vercel.app` uses comparetreatments.com branding but its source is **not in this repo** (see `docs/DEPLOYMENTS.md`).

## Quick facts

| | |
|---|---|
| GitHub repo | https://github.com/madrank8/comparetreatments (public) |
| Local clone | `~/Documents/GitHub/comparetreatments` |
| Cursor workspace | Same path — treat this repo as the single project home |
| App | `website/` — **Next.js 16**, React 19, TypeScript strict, Tailwind v4 |
| Run locally | `cd website && npm install && npm run dev` → localhost:3000 |
| **Primary deploy** | https://treatsphere.com — Vercel project `comparetreatments` (root dir `website`), auto-deploys on push to `main` |
| Preview alias | https://comparetreatments-eight.vercel.app |
| Secondary deploy | https://comparetreatments-site.vercel.app — Vercel project `comparetreatments-site` (static `site/` output; source TBD) |
| Issue tracking | `bd` (beads) — run `bd ready` for open work |
| Deploy docs | `docs/DEPLOYMENTS.md` |

## Repository layout

| Path | Contents |
|---|---|
| `website/` | The Next.js app (App Router, 46 prerendered routes + dynamic `/go/[slug]`) |
| `strategy/` | Competitor teardown & 2X blueprint, site architecture & build plan, content/SEO/PPC strategy |
| `compliance/` | Compliance & legal roadmap (FTC, FDA, LegitScript, Bing/Google ad policy, state privacy) |
| `legal/` | 10 legal-page drafts (markdown source — the master copy that goes to counsel) |
| `START-HERE.md` | Master index of the strategy/compliance package |
| `PROJECT-STATUS.md` | **This file** — handoff tracker |
| `docs/DEPLOYMENTS.md` | Vercel projects, URLs, env vars, deploy commands |
| `docs/assets/mockups/` | Homepage design reference images |
| `AUDIT-2026-05-26.md` | Full strategy/architecture/compliance vs. codebase gap analysis |
| `LEGAL-PUNCHLIST.md` | What is still unfilled in the 10 legal pages, mapped to who fills it |

---

## Build status — done

**Planning & research**
- [x] Competitor reverse-engineering + 2X blueprint + attack plan
- [x] Telehealth affiliate compliance research (FTC / FDA / LegitScript / Bing Ads)
- [x] Site architecture & Next.js build plan
- [x] Content / SEO / PPC strategy
- [x] Compliance & legal roadmap
- [x] 10 legal/compliance page drafts (placeholder values still pending — see LEGAL-PUNCHLIST)
- [x] **Full gap analysis with prioritized backlog** (AUDIT-2026-05-26.md)

**Website — foundation**
- [x] Next.js 16 + React 19 + TypeScript + Tailwind v4 scaffold, design system
- [x] Layout: header / mega-nav / mobile nav / footer / announcement bar
- [x] Typed sample data layer (no CMS yet)
- [x] `/go/[slug]` affiliate redirect with **fire-and-forget Upstash-REST click logging** via Next 16 `after()`
- [x] `sitemap.ts` (homepage + 9 categories + 16 reviews + authors + 10 legal routes); `robots.ts` (AI crawlers allowed; `/go/`, `/api/`, `/studio/` disallowed)
- [x] JSON-LD: Organization + WebSite in root layout; BreadcrumbList + CollectionPage + ItemList + FAQPage + MedicalWebPage on hubs; Review + AggregateRating + ReviewMedicalWebPage + FAQPage on reviews; ProfilePage on authors
- [x] 301 redirects in `next.config.ts` for the 3 plan-spelled URLs (`/terms-of-use` → `/terms-of-service`, `/accessibility-statement` → `/accessibility`, `/dmca-policy` → `/dmca`)

**Website — pages (~46 routes)**
- [x] Homepage — hero, top-rated picks, category grid, methodology steps, trust band, FAQ
- [x] 9 category hub pages — weight-loss (deeply seeded), men's/women's health, ED, hair loss, skin, sexual health, blood testing, wellness
- [x] 16 brand review pages — 10 weight-loss + 6 ED (rich template: hero, at-a-glance, pros/cons, rating breakdown, body, pricing, verdict + CTA, FAQ, byline, related brands, 4 schemas)
- [x] 10 legal routes
- [x] Author profiles — `/authors` index + 4 author pages

**Website — compliance & analytics scaffolding (2026-05-26)**
- [x] **Consent Mode v2 default-denied bootstrap** in root layout (executes before any tag loads; default-denies ad/analytics storage; `ads_data_redaction` and `url_passthrough` set)
- [x] **Cookiebot CMP loader** in auto-blocking mode (reads `NEXT_PUBLIC_COOKIEBOT_ID`; silent no-op when unset)
- [x] **Google Tag Manager loader** gated by `data-cookieconsent="statistics,marketing"` (reads `NEXT_PUBLIC_GTM_ID`; silent no-op when unset)
- [x] `trackAffiliateClick` pushes to `window.dataLayer` with `event: 'affiliate_click'` + `brand`/`placement`/`category`/`score` — GTM-ready
- [x] `AffiliateButton` rel = `sponsored nofollow noopener noreferrer`, target=`_blank`, routes via `/go/[slug]`
- [x] `DisclosureBanner` rendered above every offer chart on every category hub; brand-aware copy via `SITE.shortName`
- [x] Category-aware affiliate disclaimer next to the verdict CTA on every brand review
- [x] All hardcoded brand strings swept to use `SITE.shortName` template literals (single-file rebrand on next swap)
- [x] **`trustStats` rewritten** to verifiable values; the previously invented "50,000+ Customer Reviews Analyzed" and "10 Expert Reviewers" stats are gone
- [x] Brand swap to **"ComparedRx" placeholder** complete in code, chrome, and legal-page text

**Website — content**
- [x] All 9 category hubs have full SEO body (5-section structure: intro → how it works → key distinction → what to look for → ranking methodology)
- [x] All 16 brand reviews have full body, pricing, pros/cons, ratings, verdicts, FAQ
- [x] Homepage + every hub + every review have proper Metadata API and canonical URLs
- [x] **Legal pages — brand fill complete (2026-05-26)** — 124 substitutions across all 20 markdown files (10 in `legal/` source + 10 in `website/content/legal/` rendered). `Treatibly`→`ComparedRx`, `treatibly.com`→`comparedrx.com`, `[EFFECTIVE DATE]`→`May 26, 2026`

**Website — design**
- [x] Hero rebuilt as an integrated full-bleed composition
- [x] Category section polished — bigger icons, centered grid
- [x] "How we review" steps + trust band redesigned
- [x] Richer 6-hue color palette (blue/green/amber + teal/coral/violet), color-coded categories & steps

---

## Outstanding work

### External — Niro / counsel

These cannot land from a code commit. Each unblocks several internal items downstream.

| Item | Audit ref | Blocks |
|---|---|---|
| Lock real brand + domain + legal entity name + state of formation | P0-1 | Final SITE.ts swap, `[COMPANY LEGAL NAME]` + `[STATE OF FORMATION]` in legal pages, LegitScript app, Vercel domain |
| Apply for LegitScript Healthcare Merchant Certification | P0-2 | Any paid spend on Bing/Google (weeks-to-months wait, ~$3,125 sunk cost) |
| Healthcare-advertising attorney review of the 10 legal pages | P0-3 | Publishing the legal pack |
| Fill the 10 remaining placeholder types in legal pages (see LEGAL-PUNCHLIST.md) | P0-4 | Publishing the legal pack; some items chain off P0-1 and P0-9 |
| Appoint real medical reviewer(s), ideally ≥2 specialties | P0-9 | `[MEDICAL REVIEWER NAME, CREDENTIALS]` in legal pages; replacing fictional reviewers in `lib/data/authors.ts`; full E-E-A-T credibility |
| Register DMCA designated agent with U.S. Copyright Office | P0-10 | The `[LEGAL/DMCA EMAIL]` must match what is registered |
| Create Cookiebot account; set `NEXT_PUBLIC_COOKIEBOT_ID` in Vercel env | P0-6 | Cookie banner rendering; consent-gated tag firing |
| Create GA4 property + GTM container; set `NEXT_PUBLIC_GTM_ID` in Vercel env; configure GA4 event tag for `affiliate_click` inside GTM | P0-8 | Any analytics measurement; ROAS calc |
| Provision Vercel KV via Vercel Marketplace → Storage (auto-sets `KV_REST_API_URL` + `KV_REST_API_TOKEN`) | P0-11 | Server-side click log writes (handler already wired; silent no-op until env vars present) |

### Code — next session

Items I can land without waiting on external inputs.

| Item | Audit ref | Notes |
|---|---|---|
| Validate rendered JSON-LD on a live hub + review + author with Google Rich Results Test | P0-12 | Quick QA pass; do once env vars are set so the page is "final" |
| `/articles` index + `Article` JSON-LD + sidebar layout | P1-1 | The organic moat — target 8–15 well-researched pieces/month |
| First 6 weight-loss informational articles (GLP-1 mechanism, side effects, cost, eligibility, dosing, stopping) | P1-2 | Cluster 1; editorial draft + medical-reviewer pass |
| Drug sub-hub template `/[category]/[subcategory]` + `Drug` JSON-LD | P1-3 | |
| `/weight-loss/semaglutide`, `/weight-loss/tirzepatide`, `/weight-loss/compounded-glp-1` content | P1-4 | |
| Brand reviews for the 7 thin categories (hair-loss, mens-health, womens-health, skin, sexual-health, blood-testing, wellness) | P1-5 | 3+ brands per category; ~30 reviews total |
| Add `/trt` and `/hrt` category hubs + rankings | P1-6 | The plan calls for 11 verticals, we have 9 |
| Sanity install + schema migration + `/studio` + `/api/revalidate` ISR webhook | P1-7 | Types in `types/index.ts` are the migration contract |
| Dynamic OG image route at `/og` via `@vercel/og` | P1-9 | |
| Build-time internal link checker in CI | P1-12 | |
| WCAG 2.2 AA accessibility audit | P2-1 | Unblocks `[KNOWN LIMITATIONS]` in accessibility statement |
| Invoca pay-per-call tag in GTM | P2-2 | After Cookiebot + GTM live |

See `AUDIT-2026-05-26.md` for the full prioritized backlog with effort estimates.

---

## 2026-05-26 — Option A compliance sprint

Compliance hardening pass per `AUDIT-2026-05-26.md`. Two pushes to `main`; both deployed cleanly on Vercel; **46-route static build remained green throughout**.

| Area | What landed | In commit |
|---|---|---|
| Audit | Full Plan-vs-Built gap analysis with P0/P1/P2 backlog | "upgrades" |
| §5 small fixes | sitemap legal routes; drop broken `SearchAction`; `package.json` lint script for Next 16; `buildCollectionPageSchema` wrapper on hub JSON-LD | "upgrades" |
| trustStats (P0-13) | rewrote to 5 verifiable values (was: 2 invented stats) | "upgrades" |
| Brand swap (P0-5) | `SITE.*` → "ComparedRx" placeholder; 7 files swept to use `SITE.shortName` template literals; future real-brand swap = one file change | "upgrades" |
| CMP + GA4 scaffold (P0-6/7/8) | `ConsentModeBootstrap` + `CookiebotScript` + `GoogleTagManager` components wired into root layout; `.env.example` documents the 4 env vars | "upgrades" |
| `/go` click logging (P0-11) | Upstash REST pipeline write via Next 16 `after()`; fire-and-forget; 2-second `AbortSignal` ceiling; silent no-op on missing env | "upgrades" |
| Cleanup | 301 redirects in `next.config.ts` for plan-spelled URLs; comment-only brand refs neutralized in TrustBar / globals.css / types / README | "upgrades" |
| Legal pages (P0-4 partial) | 124 substitutions across all 20 legal MDs (10 source + 10 rendered) — brand swap + domain swap + effective date filled; entity fields deliberately left bracketed | "t" |
| Handoff | `LEGAL-PUNCHLIST.md` deliverable at repo root for counsel | "t" |

**Live verification** — fetched `https://comparetreatments-eight.vercel.app/privacy-policy` after the final push: `ComparedRx` + `comparedrx.com` each appear 40+ times in the rendered page; zero `Treatibly` or `treatibly.com`; `[EFFECTIVE DATE]` is replaced with `May 26, 2026`; the lawyer-fill brackets (`[COMPANY LEGAL NAME]` × 3, `[PRIVACY EMAIL]` × 5, `[STATE OF FORMATION]` × 1) intact as designed.

---

## Action items — Niro

In rough sequencing order, because some unblock others:

1. **Brand + domain locked — Treatsphere / `treatsphere.com` (2026-05-28).** ✓ Still needed: legal entity name + state of formation to fill the remaining two placeholders in the legal pages.
2. **Apply for LegitScript Healthcare Merchant Certification.** Critical-path gate for paid spend; takes weeks. `$975 application + $2,150/yr per domain.`
3. **Healthcare-advertising attorney review** of the 10 legal pages, using `LEGAL-PUNCHLIST.md` as the punch list.
4. **Create Cookiebot + GA4 + GTM accounts** and set `NEXT_PUBLIC_COOKIEBOT_ID` + `NEXT_PUBLIC_GTM_ID` in Vercel project settings. Trigger a redeploy.
5. **Provision Vercel KV** via Vercel Marketplace → Storage. `KV_REST_API_URL` + `KV_REST_API_TOKEN` are set automatically on the project.
6. **Register DMCA designated agent** with the U.S. Copyright Office (DMCA Designated Agent Directory). Use the same email that ends up as `[LEGAL/DMCA EMAIL]` in the legal pages.
7. **Appoint real medical reviewer(s)** with verifiable credentials (MD/DO/NP/PharmD/RD). Provide names, credentials, NPI lookup link, licensure states. `lib/data/authors.ts` then loses its "sample content only" framing and reflects real people.

---

## Notes

- **Stack version** — Next.js **16.2.6** (not 15 as the previous status noted; `AGENTS.md` is correct that any new code must consult `node_modules/next/dist/docs/` rather than training data — Next 16 has API breaks).
- **Health copy compliance** — every compounded-medication mention says "not an FDA-approved finished product" and "not the same as Ozempic®/Wegovy®/Zepbound®"; outcomes are hedged; clinician suitability noted. Audit confirmed this discipline is consistent across all 16 brand reviews. Protect it when filling in the 7 thin categories.
- **Affiliate redirect** — `/go/[slug]` is `force-dynamic`, 302, `X-Robots-Tag: noindex, nofollow`, `Cache-Control: no-store`, fresh `crypto.randomUUID()` subid, placement param, fire-and-forget Upstash click log.
- **The GitHub connector available in tooling is read-only** — commits/pushes are done via GitHub Desktop or git CLI. Claude can read any file or commit on any branch via the API, but cannot write to the repo directly.
- **OneDrive sync caveat** — the repo lives under `~/OneDrive/Documents/GitHub/...`. Occasionally GitHub Desktop misses recently-written files until OneDrive has finished syncing them. If you see fewer changed files than expected, refresh GitHub Desktop or run `git status` from a terminal. The same lag occasionally hits the sandbox bash mount, but Claude works around it via the Read tool + heredoc reconstruction.
- **CRLF vs LF** — Windows + `core.autocrlf=true` produces benign "line endings changed" diff warnings. Safe to commit; git normalizes on commit. Add a `.gitattributes` with `* text=auto eol=lf` if the warnings become annoying.
- **The legal-page markdown source lives in `legal/`**; the live site renders its own copies from `website/content/legal/`. Both folders must be updated in lockstep when filling placeholders (the LEGAL-PUNCHLIST gives a one-command grep to verify).
