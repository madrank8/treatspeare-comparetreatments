# Competitor Teardown & 2X Blueprint — comparetreatments.com

**Prepared:** May 24, 2026
**Subject:** Reverse-engineering of comparetreatments.com and the blueprint to build a site that beats it.
**Sources:** Live teardown of the competitor's pages, Ahrefs traffic/keyword data, and current (May 2026) FTC/FDA/ad-platform policy research.

---

## 1. Executive summary — the verdict

comparetreatments.com is **not a real publisher. It is a paid-traffic arbitrage machine.** It buys clicks on Bing and Google, funnels them into thin, templated "ranked offer chart" landing pages, and monetizes by selling those clicks onward to telehealth brands (pay-per-click and pay-per-call). It is a tenant site on a lead-generation platform called **LeadsIQ** — every asset loads from `assets.leads-iq.com`.

The single most important fact from the research:

> **comparetreatments.com has almost no organic search presence. Ahrefs shows just 3 organic keywords and ~4 organic visits/month. Its entire business is paid: ~364 paid keywords, ~36,900 paid visits/month, an estimated ~$247,000/month in Google Ads spend across 520 paid landing pages — plus Bing Ads on top of that.**

That changes the competitive picture completely. The competitor looks formidable (huge traffic, polished offer charts, real affiliate deals) but it is renting 100% of its audience. **The moment its ad budget stops, its traffic goes to zero.** It has left the entire organic and AI-search flank completely undefended.

So there are two ways to beat it, and we should do both:

1. **Match it on paid search** — especially Bing, where CPCs are cheaper and the competitor is already proven — with cleaner, more compliant, higher-converting landing pages.
2. **Take the ground it abandoned** — build the organic SEO and AI-citation moat it never bothered with. That traffic compounds, costs nothing per click, and steadily lowers our blended cost of acquisition until we are structurally cheaper to run than they are.

The competitor is also a **compliance liability waiting to happen**: no medical disclaimer, no standalone affiliate disclosure page, no cookie consent, no E-E-A-T, and a "How We Rank" statement that openly admits pay-to-rank. In a YMYL prescription-health category that the FDA and FTC are actively policing (100+ FDA telehealth warning letters in September 2025, 30 more in March 2026), that is not a small gap. A compliant competitor doesn't just rank better — it survives longer.

**Bottom line:** This is a beatable competitor with a fragile, rented model and real legal exposure. The opportunity is to copy what converts, fix what's broken, and build the durable asset they chose not to build.

---

## 2. Competitor DNA

### 2.1 Business model

A **pay-per-click / pay-per-call affiliate arbitrage** play:

- Buy search traffic for high-intent terms (e.g. "semaglutide online," "best weight loss injections," brand terms like "trimrx reviews").
- Land that traffic on a **category "offer chart"** — a ranked list of 10 telehealth brands with scores, badges, and "Visit Site" buttons.
- Every outbound click is cloaked through a first-party redirect (`/click?offerId=…`) that records the click and 302-redirects to the partner. The competitor is paid per click and, where wired up, **per phone call** (an Invoca call-tracking integration is scaffolded).
- Placement and ranking order are influenced by **how much each brand pays** — the site's own "How We Rank" modal admits rankings depend partly on "compensation paid… by the companies presented."

The site is operated on the **LeadsIQ** lead-gen platform (`leads-iq.com`). comparetreatments.com is one branded tenant lander on that platform — which is why the build is templated and shallow.

### 2.2 Traffic profile (Ahrefs, US, May 2026)

| Metric | Value | What it tells us |
|---|---|---|
| Organic keywords | **3** | No SEO program at all |
| Organic traffic | **~4 / month** | Effectively zero organic |
| Organic keywords in top 3 | **0** | They rank for nothing |
| Paid keywords | **364** | A real, funded PPC operation |
| Paid traffic | **~36,862 / month** | This is the whole business |
| Estimated paid spend | **~$246,800 / month** (Google only) | ~$3M/year on Google alone; Bing is additional |
| Paid landing pages | **520** | Heavy landing-page testing at scale |

The only pages Ahrefs sees ranking organically at all are two brand-review pages (`/weight-loss-treatments/reviews/trimrx`, `/.../hers`) sitting at positions 29–42 — i.e. page 3–5 of Google, sending a handful of visits. **There is no organic moat to attack. There is open field.**

### 2.3 Tech stack

A **dated, legacy stack** — not WordPress, not modern JS:

- Custom server-rendered templates on the LeadsIQ platform; hashed CSS/JS in `/static/`.
- **jQuery + Bootstrap + Popper.js + FontAwesome Kit** — a ~2015-era front end.
- Cloudflare (Rocket Loader, CDN), AWS S3 for some images.
- **Google Tag Manager** (`GTM-WMNHWHB8`); **Google Analytics is misconfigured and broken** (`gtag('config','')`, `gtag/js?id=null`) — they are likely flying blind on GA.
- Poptin exit-intent popups; reCAPTCHA v3 on the contact form; Invoca call tracking scaffolded.
- **No cookie consent platform** despite publishing GDPR/CCPA policies.

### 2.4 Information architecture

- **Homepage** → category gateway only (no offers on it).
- **7 category hubs:** ED, Weight Loss, TRT, HRT, Blood Testing, Advanced Wellness, Hair Loss. Clean slugs (`/weight-loss-treatments`).
- **Drug sub-hubs:** `/weight-loss-treatments/semaglutide`, `/tirzepatide`, `/zepbound`, `/glp-1`, `/microdosing`, `/pills`.
- **Brand review pages:** `/weight-loss-treatments/reviews/{brand}`.
- **Category articles:** `/weight-loss-treatments/articles/{slug}`.
- **Legal:** `/privacy-policy.html`, `/terms.html`, `/contact.html` — note the legacy `.html` extensions, a mixed/inconsistent URL scheme.
- Weight Loss is the only deeply built-out category; the other six are comparatively shallow.

### 2.5 The money page — the category "offer chart"

The weight-loss hub (`/weight-loss-treatments`, titled "Compare Weight Loss Injections 2026") is the template that matters. Anatomy:

- Top **advertising-disclosure strip** + "Advertising Disclosure" modal.
- Hero: H1, a one-line subhead, a "Last Updated: May 2026" pill, an "Editor's Choice" label.
- The **ranked offer chart** — 10 brands, ranked 01–10, each card with: rank number, brand logo, a **10-point numeric score + word label** ("9.8 Excellent"), a 5-star widget, an offer/promo headline, 3–5 bullet selling points, a "Visit Site" button, and a mid-list "chart break" promo card.
- **Sidebar modules:** a social-proof counter ("1,804 people found a treatment this week"), a "How We Rank" box, a promoted sidebar offer, "Recommended Reads," "Editorial Reviews."
- Below the chart: ~1,500 words of generic SEO body copy and a 5-question FAQ accordion.

The 10 brands ranked on the weight-loss hub: **TrimRx, AltRx, Sunlight, Noom, BetterMe Rx, Measured, Ro, MEDVi, Fridays, Remedy Meds.** Several carry negotiated, co-branded coupons (Ro: "$100 off"; MEDVi code "CT120") — proof of real affiliate relationships.

---

## 3. What works — worth copying

These elements are effective and we should adopt (and then improve) them:

1. **The ranked offer-chart format.** A numbered list of brands with a clear score, star rating, tight bullets, and one obvious CTA is a genuinely strong conversion layout for high-intent paid traffic. Keep this pattern.
2. **The 10-point score + word label.** "9.8 Excellent" is more scannable and persuasive than stars alone. Keep a numeric score — but ours must be earned by a real, published rubric.
3. **Dedicated PPC landing pages at scale.** 520 paid pages means heavy message-match testing. The discipline of building a specific landing page per ad theme is correct.
4. **First-party affiliate redirect.** Cloaking outbound links through an internal endpoint (their `/click`) is the right pattern for tracking, swapping offers, and keeping `rel` attributes clean. We will build a better version.
5. **"Last updated" freshness signals + an "Editor's Choice."** Good instincts for a comparison page — recency and a clear top pick both convert. We'll make them real and dated.
6. **Sidebar offer + mid-list "chart break."** Extra monetization surfaces without wrecking the page. Worth keeping, used tastefully.
7. **Pay-per-call as a second revenue stream.** Click-to-call (Invoca) monetizes mobile users who won't fill a form. Worth building in.
8. **Category → drug sub-hub → brand review structure.** The IA itself is sound; they just didn't fill it with quality.

---

## 4. What's broken — their weaknesses, our openings

| # | Competitor weakness | Why it matters | Our opening |
|---|---|---|---|
| 1 | **Zero structured data** — no JSON-LD anywhere | Forfeits star-rating rich results, FAQ rich results, and AI-citation eligibility | Implement full schema (Organization, Product/Review/AggregateRating, ItemList, FAQ, MedicalWebPage, BreadcrumbList) on day one |
| 2 | **Empty meta descriptions on 100% of pages**; inconsistent/empty titles | Terrible SERP CTR; trivial to out-click | Dynamic, written titles + descriptions on every page |
| 3 | **No E-E-A-T whatsoever** — no authors, no "medically reviewed by," no bios, no About page | Fatal for a YMYL health site under Google's Quality Rater Guidelines | Named authors + credentialed medical reviewers, real bios, real About page |
| 4 | **"How We Rank" admits pay-to-rank** and "subjective" ordering | Actively destroys trust with users and Google | Publish a genuine, weighted, transparent methodology; label paid placement separately |
| 5 | **No medical disclaimer, no compounded-drug language** | Legal + ad-platform risk on a site pushing GLP-1s and Rx | Full medical disclaimer + correct compounded-semaglutide language (see compliance roadmap) |
| 6 | **No standalone affiliate disclosure page**; disclosure is only a modal | Weak FTC posture; not crawlable | Standalone disclosure page + inline disclosure near every affiliate link |
| 7 | **Broken nav** — `/articles.html` 404s, `/reviews.html` is an empty stub, both linked sitewide | Wastes crawl budget, signals neglect | Clean, complete IA with no broken links |
| 8 | **Thin, templated review pages** — no score shown, no first-hand testing, no images, FAQ copy-pasted across pages | Easy to out-depth and out-rank | Genuinely deep, first-hand, original reviews with unique FAQs |
| 9 | **Dated jQuery/Bootstrap stack**; per-page inline-style hacks | Slower, weaker Core Web Vitals, hard to maintain | Modern Next.js build — faster, cleaner, better CWV |
| 10 | **Broken analytics** (GA id is `null`) | They are likely optimizing partly blind | Proper GA4 + GTM + server-side click tracking from launch |
| 11 | **No cookie consent** despite GDPR/CCPA policies | Compliance gap and legal risk | Real consent management platform + Google Consent Mode v2 |
| 12 | **Fake-feeling social proof** — a static "1,804 this week," unverifiable "200+ hours" claims | Erodes trust; risky under the FTC's 2024 reviews rule | Real, dated, sourced data; honest trust signals only |
| 13 | **Unresolved `[1]`–`[4]` citations** with no reference list | Inaccurate, un-citable by AI engines | Cite real primary sources (FDA, NIH, peer-reviewed) with a visible reference list |
| 14 | **Only Weight Loss is deeply built**; 6 other categories are shallow | Whole categories sit open | Out-cover them on TRT, HRT, hair loss, blood testing, ED, advanced wellness, and women's health |
| 15 | **100% paid traffic, 0% organic** | The entire model is rented and undefended | Build the compounding organic + AI-search moat they ignored |

---

## 5. The 2X Blueprint — how to be twice as good

Five pillars. Each one is a direct answer to a competitor weakness, and each one compounds.

### Pillar 1 — Win the trust war (E-E-A-T as the core product)

The competitor asserts authority ("our experts," "200+ hours") but substantiates none of it. We make trust the actual product:

- **Real named authors and credentialed medical reviewers**, with bios, photos, and author pages — and a visible "Medically reviewed by [Name, credentials] on [date]" byline on every health page.
- **A published, weighted review methodology** (see the editorial methodology page) — real criteria, real weights, real scoring. Paid placement, if used at all, is clearly *labeled* and explicitly does **not** buy a higher score.
- **Honest trust signals only** — dated "last updated" stamps that are true, real aggregated customer-review data, primary-source citations with a visible reference list. No invented "1,804 this week" counters.
- **Full legal/compliance footprint** — the 10 legal pages already drafted, plus an inline affiliate disclosure near every link.

This is the single biggest, cheapest, most durable advantage. It wins Google's YMYL trust assessment, wins AI-engine citations, and wins the user — and the competitor structurally cannot copy it without rebuilding their business.

### Pillar 2 — Out-build the product (modern, fast, schema-rich site)

- Custom **Next.js** build: fast, modern, excellent Core Web Vitals (full spec in `site-architecture-and-build-plan.md`).
- **Comprehensive JSON-LD schema** on every page type — the competitor's single largest SEO gap. This wins rich results and AI-Overview eligibility outright.
- **Better comparison UX** than the offer chart: keep the ranked-card pattern, but add a genuine sortable/filterable comparison **table**, real per-brand data, and an honest score that links to the methodology.
- **Genuinely deep review pages** — first-hand findings, screenshots, real pricing, pros/cons, unique FAQs — not copy-paste templates.
- Clean URL scheme, no broken links, dynamic metadata, proper sitemap/robots.

### Pillar 3 — Match them on paid, beat them on the landing page

- Get **LegitScript Healthcare Merchant Certification** first — it is the non-negotiable prerequisite to advertise health offers on Bing and Google ($975 application + $2,150/year). The competitor has it; we cannot run paid health traffic without it.
- **Lead with Bing/Microsoft Ads** — cheaper CPCs, the competitor is already proven there, less auction pressure than Google.
- Build **dedicated, compliant, high-converting PPC landing pages** with tight message match — and beat the competitor's landers on speed, clarity, trust signals, and compliant copy.
- Wire up **pay-per-click and pay-per-call** monetization from launch.
- Full detail in `content-seo-and-ppc-strategy.md`.

### Pillar 4 — Take the abandoned ground (the organic + AI-search moat)

- Build **topical authority** across every category the competitor left shallow — deep, E-E-A-T-strong content clusters: category hubs, drug sub-hubs, brand reviews, "vs" pages, "best X for Y" pages, and informational article clusters.
- Optimize for **AI search / GEO** — extractable answers, structured data, primary-source citations, real first-hand experience — so we get cited in AI Overviews, ChatGPT, and Perplexity.
- This traffic **compounds and costs nothing per click.** Over 12 months it structurally lowers our blended CAC below the competitor's pure-paid model. They cannot match this without a multi-year content investment they have shown no interest in making.

### Pillar 5 — Run a real business, not an arbitrage lander

- Working analytics and server-side click tracking from day one (they're partly blind).
- Diversified monetization: affiliate clicks + pay-per-call + direct brand deals + (later) an email program.
- An email-capture and nurture program — own the audience instead of renting every visit.
- Cover **all the mockup categories** — men's health, women's health, weight loss, hair loss, skin, sexual health — properly, not just one.

### The 2X scorecard

| Dimension | comparetreatments.com | Our site |
|---|---|---|
| Traffic model | 100% rented (paid) | Paid **+** compounding organic/AI |
| Structured data | None | Full JSON-LD everywhere |
| E-E-A-T | None | Named authors + medical reviewers |
| Review methodology | "Pay to rank," admitted | Published, weighted, honest |
| Review depth | Thin, templated | Deep, first-hand, original |
| Tech stack | Legacy jQuery/Bootstrap | Modern Next.js, strong CWV |
| Compliance | Major gaps, real risk | Full legal set + LegitScript |
| Analytics | Broken | GA4 + GTM + server-side |
| Categories built out | 1 of 7 deep | All categories, properly |
| Durability | Collapses if ad budget stops | Asset that appreciates |

---

## 6. Strategic attack plan

A sequenced plan. Detailed versions live in the architecture, content/SEO/PPC, and compliance documents — this is the order of operations.

**Phase 0 — Foundation (Weeks 1–4)**
1. Lock the legal entity, brand name, and domain.
2. **Start the LegitScript application immediately** — it gates all paid traffic and takes time to clear.
3. Publish the 10 legal/compliance pages (drafts already prepared).
4. Stand up the Next.js skeleton, design system, and data model.
5. Decide the brand's editorial team and recruit at least one credentialed medical reviewer.

**Phase 1 — MVP launch (Weeks 5–10)**
6. Build the homepage, the weight-loss/GLP-1 category hub, drug sub-hubs, and the first set of brand review pages.
7. Implement the affiliate redirect system, schema, analytics, and consent management.
8. Sign initial affiliate/partner deals (target the brands already on the competitor's chart).
9. Launch — with the legal footprint and disclosures live before any ad spend.

**Phase 2 — Paid ramp (Weeks 8–16, once LegitScript clears)**
10. Launch Bing Ads on the weight-loss category with tight, compliant landing pages.
11. Add Google Ads as a secondary channel; expand to ED and hair loss.
12. Test, measure EPC/ROAS, and scale the winners. Build out dedicated landers per ad theme.

**Phase 3 — Organic moat (Months 3–12, in parallel)**
13. Publish the topical-authority content clusters, starting with weight loss/GLP-1.
14. Build out the remaining categories (TRT, HRT, hair loss, blood testing, women's/men's health, skin, sexual health).
15. Pursue AI-search visibility and earned links; expand the email program.

**Phase 4 — Compound (Month 12+)**
16. Organic share of traffic rises, blended CAC falls, and the business becomes structurally cheaper and more defensible than the competitor's pure-paid model.

---

## 7. Risks and watch-outs

- **Regulatory risk is real.** The FDA sent 100+ warning letters to telehealth GLP-1 marketers in September 2025 and 30 more in March 2026. We must keep all content and ad copy compliant — no "FDA-approved" claims for compounded drugs, no equivalence claims, conservative health language. See the compliance roadmap.
- **Ad-account risk.** Health is a restricted category on Bing and Google. Without LegitScript and clean landing pages, accounts get suspended. Treat compliance as a prerequisite, not an afterthought.
- **Affiliate concentration.** Don't depend on one or two brands. Diversify partners and revenue types (click, call, direct deals).
- **The competitor can outspend us short-term.** We will not win a pure budget war on day one — which is exactly why the organic moat (Pillar 4) matters. Compete on paid where it pays back; win long-term on the asset they refuse to build.
- **Brand/trademark care.** Use competitor and drug trademarks (Ozempic®, Wegovy®, etc.) only descriptively and for identification; never imply affiliation or equivalence.

---

*Companion documents: `site-architecture-and-build-plan.md`, `content-seo-and-ppc-strategy.md`, and `../compliance/compliance-and-legal-roadmap.md`.*
