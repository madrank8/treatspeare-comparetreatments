# Treatment-Comparison Affiliate Site — Project Package

**Prepared:** May 24, 2026
**What this is:** The research, strategy, build plan, and complete legal/compliance page set for launching a US telehealth treatment-comparison affiliate website — modeled on the competitor **comparetreatments.com** and designed to beat it.

---

## The one finding that shapes everything

The competitor, **comparetreatments.com, runs almost entirely on paid search.** Ahrefs data: just **3 organic keywords (~4 organic visits/month)** versus **~36,900 paid visits/month and ~$247K/month in Google Ads spend across 520 landing pages** — plus Bing Ads on top.

It is a polished but **fragile, rented business.** It has left the entire organic and AI-search flank undefended, and it carries real compliance exposure (no medical disclaimer, no real affiliate disclosure page, no cookie consent, no E-E-A-T).

**The winning play: match it on paid search, and take the organic ground it abandoned.** Full reasoning in the teardown.

---

## What's in this package

### Strategy — `strategy/`
| File | What it gives you |
|---|---|
| `competitor-teardown-and-2X-blueprint.md` | Full reverse-engineering of comparetreatments.com, its weaknesses, the 5-pillar "2X" blueprint, and a phased attack plan |
| `site-architecture-and-build-plan.md` | The Next.js build: stack, data model, page templates mapped to your mockups, design system, components, affiliate-redirect system, schema, repo structure |
| `content-seo-and-ppc-strategy.md` | The dual-engine plan — Bing/Google PPC campaigns + the organic SEO/AI-search moat, topical map, content production plan, KPIs |

### Compliance — `compliance/`
| File | What it gives you |
|---|---|
| `compliance-and-legal-roadmap.md` | Every legal/regulatory requirement: LegitScript, Bing/Google ad policy, FTC, FDA, state privacy, accessibility — plus a pre-launch checklist |

### Legal pages — `legal/` (10 publish-ready drafts)
`privacy-policy.md` · `terms-of-service.md` · `affiliate-and-advertising-disclosure.md` · `medical-disclaimer.md` · `editorial-and-review-methodology.md` · `about-us.md` · `contact.md` · `cookie-policy.md` · `accessibility-statement.md` · `dmca-policy.md`

Every legal page uses bracketed placeholders for find-and-replace, and each opens with a note that a licensed attorney should review it before publication.

---

## What I need from you (to finalize the legal pages)

The legal pages use these placeholders. Send me the values and I'll do a find-and-replace across all 10 files:

- `[COMPANY LEGAL NAME]` — your registered business entity
- `[BRAND NAME]` — the site/brand name
- `[SITE_DOMAIN]` — your actual domain (you said it's *not* comparetreatments.com)
- `[BUSINESS MAILING ADDRESS]` — a business address for legal notices
- `[STATE OF FORMATION]` — the state your entity is formed in (governing law)
- `[GENERAL CONTACT EMAIL]`, `[PRIVACY EMAIL]`, `[LEGAL/DMCA EMAIL]` — contact addresses
- `[PHONE NUMBER]` — a business phone (optional)
- `[EFFECTIVE DATE]` — the date the pages go live
- A few content placeholders in About / Methodology / Accessibility (`[MEDICAL REVIEWER NAME, CREDENTIALS]`, `[EDITORIAL TEAM DESCRIPTION]`, `[KNOWN LIMITATIONS]`) — fill once your team is set.

---

## Recommended first moves

1. **Lock the entity, brand, and domain.** Everything else depends on these.
2. **Start the LegitScript application now.** It gates your ability to run health ads on Bing and Google, costs $975 + $2,150/year, and can take weeks to months. It is the critical-path item.
3. **Have a healthcare-advertising attorney review the 10 legal pages** before publishing. They are strong drafts, not a substitute for counsel — and this is a heavily enforced category.
4. **Begin the Next.js build** from `site-architecture-and-build-plan.md` — homepage and the weight-loss/GLP-1 category hub first.
5. **Don't run paid health ads until LegitScript clears and the legal pages are live.**

---

## Important note

This package is a thorough, well-researched starting point — not legal advice. You are entering a YMYL category (telehealth, GLP-1/weight loss, prescription drugs) that the FDA and FTC are policing aggressively right now. Treat the compliance roadmap as a launch prerequisite, and get the legal pages reviewed by qualified counsel before going live.

*The two mockup images in this folder were used to extract the design system and page layouts in the build plan.*
