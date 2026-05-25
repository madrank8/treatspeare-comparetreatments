# Compliance & Legal Roadmap

**Prepared:** May 24, 2026
**Scope:** Everything required to launch and operate a US telehealth treatment-comparison affiliate site legally and on-platform.
**Status of research:** Current as of May 2026.

> **This is not legal advice.** This roadmap is a thorough, well-researched starting point built by analyzing current FTC, FDA, ad-platform, and state-privacy rules. Before launch, have a healthcare-advertising attorney review the site, the content, and the legal pages. The category you are entering — telehealth, GLP-1/weight loss, prescription drugs — is one of the most actively enforced areas in US consumer protection right now.

---

## 1. The compliance reality — read this first

You are building a **YMYL ("Your Money or Your Life") health website** that promotes **prescription and compounded medications** through **affiliate relationships**, and drives traffic with **paid search ads**. That puts you at the intersection of five regulatory regimes at once:

1. **LegitScript** — the certification that gates your ability to run health ads at all.
2. **Ad-platform policy** — Microsoft (Bing) and Google Ads healthcare rules.
3. **The FTC** — affiliate disclosure, health claims, and the fake-reviews rule.
4. **The FDA** — prescription and compounded-drug advertising, in the middle of an active GLP-1 enforcement wave.
5. **US state privacy law** — CCPA/CPRA and a growing list of other states.

The good news: the competitor (comparetreatments.com) is **weak on almost all of these** — no medical disclaimer, no standalone affiliate disclosure, no cookie consent, no E-E-A-T. Doing compliance properly is therefore not just risk reduction; it is a genuine competitive advantage. Compliant sites rank better in a YMYL category, get approved on ad platforms faster, and don't get taken down.

The bad news: the enforcement environment is the most aggressive it has ever been. The FDA issued **100+ warning letters in September 2025 and 30 more in March 2026** to telehealth companies marketing compounded GLP-1s. The FTC settled with the telehealth weight-loss company **NextMed for $150,000** over deceptive marketing. Civil penalties under the FTC's fake-reviews rule run **up to ~$53,088 per violation.** Treat compliance as a launch prerequisite, not a cleanup task.

---

## 2. Who regulates what — the map

| Regulator / body | Governs | Applies to you because… |
|---|---|---|
| **FTC** | Truthful advertising, affiliate/endorsement disclosure, health claims, reviews | You are an affiliate making endorsements and earning commissions |
| **FDA** | Prescription and compounded drug advertising | Your content discusses Rx drugs and compounded GLP-1s; "common enterprise" theory can extend reach to marketers |
| **LegitScript** | Healthcare merchant certification recognized by Google, Bing, Visa, Mastercard | Required to advertise healthcare on Google/Bing; applies to comparison/affiliate sites |
| **Microsoft Advertising / Google Ads** | What can be advertised and how, on each platform | You will run paid search on both |
| **State privacy regulators** (CA, VA, CO, CT, UT, TX, OR, MT, and more) | Consumer data rights, opt-outs, "do not sell/share" | You collect visitor data and use advertising/analytics cookies |
| **State AGs** | Consumer protection (mini-FTC acts) | They enforce deceptive-practice law in parallel with the FTC |
| **U.S. Copyright Office** | DMCA safe harbor | You publish content and accept the DMCA takedown framework |

---

## 3. LegitScript certification — the gate to paid traffic

**This is task #1. Nothing about the paid-acquisition business works without it.**

### What it is
LegitScript Healthcare Merchant Certification is the industry-standard certification that Google, Bing/Microsoft, Meta, TikTok, Visa, and Mastercard recognize to confirm a healthcare merchant operates legally. **It is a required part of the approval process for advertising healthcare on Google and Bing.** Price-comparison websites and other healthcare merchants fall within scope.

### Cost & timeline
- **One-time application fee: $975 per website** (non-refundable).
- **Annual certification fee: $2,150 per website.**
- Timeline is not guaranteed by LegitScript — it depends on application complexity and your responsiveness. **Budget several weeks to a few months.** Apply as early as possible.
- A wireframe/demo site can be acceptable to *start* the review; notify them when the site goes live for a final check.
- The application is reviewed against **9 certification standards** covering compliance, transparency, business affiliations, and patient best practices.
- All websites your business operates must be disclosed in the application.

### What to do
1. Lock your legal entity and domain (LegitScript certifies a specific domain).
2. Have the full legal-page set and disclosures live (this roadmap's `legal/` folder gives you all 10).
3. Create an account at `my.legitscript.com`, pay the application fee, submit with supporting documentation.
4. Build certification time into the launch schedule — **do not plan to run paid health ads before it clears.**

### Microsoft's alternative
Microsoft also accepts accreditation from the **National Association of Boards of Pharmacy (NABP)** in lieu of LegitScript for pharmacy advertisers. LegitScript is the broader, more widely recognized path and works for both Google and Bing — recommended.

---

## 4. Ad-platform policy — Microsoft (Bing) & Google Ads

You will run paid search. Each platform polices health advertising tightly, and **a policy violation can suspend the whole ad account.** The strategy doc recommends leading with Bing; note that **Microsoft's health policy is generally *more* restrictive than Google's.**

### Microsoft Advertising (Bing Ads) — key rules
- **"Ads related to sensitive health conditions targeting consumers are not allowed."** This is broad — copy must stay general and educational, not condition-targeted.
- **Weight-loss product claims and content are heavily restricted.** Be conservative; avoid outcome promises.
- **No language that implies direct health targeting** — do not use "your condition," "your symptoms," "do you suffer from…" framing.
- **Pharmacy/healthcare advertisers must be LegitScript certified** (or NABP accredited).
- Microsoft publishes a list of disapproved healthcare products and supplements — review it before building campaigns.
- Clinical-trial recruitment advertising is **entirely prohibited** on Microsoft (Google allows it in the US — Microsoft does not).

### Google Ads — key rules
- **LegitScript certification required** for online pharmacies and telemedicine providers to advertise.
- Monitored **prescription-drug terms**: you may use drug terms in ads/landing pages without certification, but you **may not bid on them** without it.
- Promotion of speculative/experimental treatments is prohibited.
- **Personalized advertising / "Health in Personalized Advertising"** forbids targeting users based on physical/mental health conditions, treatments for chronic conditions, or health issues tied to intimate body parts/functions — and this extends to targeting *caretakers*. It also forbids ads that body-shame or imply negative outcomes if the user doesn't act. This directly constrains weight-loss and ED ad creative.
- **Sexual health products:** 18+ targeting only; cannot be promoted on themes of pleasure/enhancement or in sexually suggestive ways.

### Ad-copy & landing-page guardrails (both platforms)
- No "FDA-approved" claims for compounded medications.
- No equivalence claims between a compounded drug and a brand drug ("same as Ozempic").
- No guaranteed results, no specific outcome claims ("lose 20 lbs in a month").
- No condition-targeting language ("your symptoms").
- Landing pages must carry risk/safety information and the affiliate disclosure.
- Message match: the ad's promise must match the landing page.

---

## 5. FTC — affiliate & advertising disclosure

**Governing rule:** FTC Endorsement Guides, 16 CFR Part 255 (revised 2023).

### The core requirement
Any **material connection** between you and a brand you feature — affiliate commission, paid placement, pay-per-click, pay-per-call, free product, equity — must be disclosed **clearly and conspicuously**, in plain English, **every time** an endorsement or affiliate link appears.

### Placement rules (this is where most sites fail)
- The disclosure must appear **on the same screen as, and near, the endorsement/affiliate link** — not only on a separate "Disclosure" page, not only in the footer, not only behind a "more" click.
- A standalone disclosure page is **necessary but not sufficient.** You need inline disclosure too.
- Each page is treated as a separate advertisement requiring its own disclosure.
- Use plain language. "We may earn a commission" is clear; "affiliate link" alone may not be.

### What this means for the site
- Keep the **standalone disclosure page** (`legal/affiliate-and-advertising-disclosure.md`).
- Add a **short inline disclosure** at the top of every comparison hub and brand review page, visible without scrolling, near the first "Visit Site" button. The disclosure page includes ready-to-use full and short snippets.
- Because compensation can influence ranking order, the disclosure must say so — **and** the editorial methodology page must explain how scoring stays honest despite that. (This is exactly where the competitor fails: it admits pay-to-rank with no credible methodology to balance it.)

### The 2024 Consumer Reviews & Testimonials Rule
- **Fake, AI-generated, or incentivized-without-disclosure reviews are illegal.** Civil penalties apply.
- You may not **suppress or selectively hide negative reviews.**
- If you aggregate or display customer reviews/ratings, they must be genuine and representative.
- Do not buy fake reviews and do not invent social proof (the competitor's static "1,804 people this week" counter is the kind of thing to avoid).

---

## 6. FTC — health claims & truthful advertising

**Governing material:** FTC Health Products Compliance Guidance; FTC Act Section 5.

### Substantiation standard
Health-benefit claims require **competent and reliable scientific evidence** — for most health claims, well-designed controlled human clinical studies — **in hand before the claim is made.** Testimonials and anecdotes are not sufficient substantiation.

### Safe vs unsafe claims

**You CAN:**
- Describe how a treatment category works mechanistically, if accurate.
- Cite published research with proper attribution and a visible reference list.
- Report prevalence statistics from published studies.
- Describe a brand's process (questionnaire → clinician review → prescription).
- State pricing and what is included.
- Report customer experiences with hedging ("many users report…") — provided reviews are genuine.

**You CANNOT:**
- Make specific outcome claims without substantiation ("lose 15% of body weight").
- Use "clinically proven" without the clinical evidence.
- Use fake/incentivized testimonials or before/after results without typicality disclosure.
- Use "results not typical" disclaimers without stating what *is* typical.
- Guarantee results.
- Discuss benefits while omitting that risks/side effects exist.

### The NextMed precedent
The FTC's $150,000 settlement with telehealth weight-loss company **NextMed** (2025) is the template for future enforcement. NextMed was penalized for: undisclosed costs and membership commitments, unsubstantiated weight-loss claims, fake testimonials, suppressed negative reviews, slow cancellations/refunds, and billing without informed consent. **Every one of those practices must be avoided** — including how you describe the brands you feature.

---

## 7. FDA — prescription & compounded-drug advertising

This is the highest-risk area, because many featured brands sell **compounded** semaglutide/tirzepatide, and the FDA is mid-enforcement-wave.

### The GLP-1 enforcement wave (2025–2026)
- **September 2025:** FDA posted 100+ warning letters to drugmakers and telehealth companies (including Hims & Hers).
- **March 3, 2026:** FDA issued **30 more warning letters** to telehealth companies marketing compounded GLP-1s.
- The semaglutide shortage was declared resolved in February 2025 — which **narrowed the legal basis for mass-marketed compounding.**
- The FDA is now using AI tools to **proactively monitor** direct-to-consumer drug advertising.
- The National Advertising Division (NAD) is also scrutinizing compounded GLP-1 advertising.

### What the warning letters consistently flag
1. Marketing language implying the **telehealth company itself compounds** the drug when it actually buys it from a separate compounder.
2. Claims of **equivalence to FDA-approved drugs** ("same active ingredient as Ozempic").
3. Claims or implications that a compounded product is **FDA-approved** or FDA-evaluated.
4. **Omitting risk information** — promoting benefits with no mention of side effects.

### Compounded-drug rules for your content

**Do NOT:**
- Call any compounded drug "FDA-approved."
- Claim a compounded drug is "the same as" or "equivalent to" a brand drug.
- Use a brand drug name to sell a compounded version comparatively.
- Imply the FDA has reviewed a compounded product for safety/efficacy.

**You CAN:**
- State a medication is "prescribed by licensed physicians" and "prepared by licensed/state-licensed pharmacies."
- Describe the drug class ("GLP-1 receptor agonist") and intended use.
- Note when a brand or its pharmacy is LegitScript-certified or NABP-verified.
- Use brand drug names (Ozempic®, Wegovy®, Zepbound®) **descriptively, for identification only**, with the ® and a trademark-ownership note.

### Fair balance
When your content discusses a drug's benefits, it should also reference that **side effects, contraindications, and risks exist**, and that **only a licensed clinician can assess suitability.** Risk information should not be buried. The `medical-disclaimer.md` page carries the site-wide version of this; individual review/article pages should also include it contextually.

### A note on FDA jurisdiction over affiliates
Whether FDA advertising rules apply *directly* to an affiliate/publisher is a gray area still being litigated. But: (a) the **FTC rules clearly apply to you**; (b) the FDA has used a **"common enterprise"** theory to reach marketers; and (c) pending bipartisan legislation (the *Protecting Patients from Deceptive Drug Ads Act*) would explicitly extend FDA reach to financially-interested promoters. **Behave as if FDA fair-balance principles already apply to you.** It is also the best defense against FTC scrutiny.

---

## 8. Privacy & data law

You collect visitor data and run advertising/analytics cookies, so US state privacy law applies. The competitor publishes privacy policies but **has no cookie consent mechanism at all** — don't repeat that mistake.

### What applies
- **California (CCPA/CPRA):** rights to know, delete, correct, and opt out of "sale"/"sharing"; sensitive-PI limits; a **"Do Not Sell or Share My Personal Information"** link; honor the **Global Privacy Control (GPC)** browser signal; financial-incentive disclosure if you run any rewards program.
- **Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana** (and a growing list): access, deletion, correction, portability, opt-out of targeted advertising/sale/profiling, and an **appeal process**.
- **COPPA / children's privacy:** the site is for adults (18+); do not knowingly collect data from anyone under 13.
- **HIPAA:** you are **not** a HIPAA covered entity, and you should say so — and instruct users not to send protected health information through the site.
- **Health-data sensitivity:** even though you're not under HIPAA, browsing behavior on a health site can be treated as sensitive. Configure analytics and ad pixels carefully; use **Google Consent Mode v2**; consider Washington's **"My Health My Data" Act** if you ever target Washington consumers.

### What to implement
- A real **cookie consent platform (CMP)** with opt-in/opt-out by category, Consent Mode v2 wired in.
- A working **"Do Not Sell or Share"** link and a **GPC signal handler** — the privacy/cookie pages now promise both, so they must actually function.
- The `privacy-policy.md` and `cookie-policy.md` drafts cover the disclosures; the **engineering** of consent and opt-out must match the text before launch.

---

## 9. Accessibility

- Commit to **WCAG 2.1 / 2.2 Level AA.** ADA web-accessibility lawsuits are common, and accessibility also helps SEO.
- Publish the **`accessibility-statement.md`** page with a way to report barriers.
- Build accessibility in from the start: semantic HTML, color contrast, keyboard navigation, alt text, focus states, accessible forms.

---

## 10. The legal & compliance page set

Ten publish-ready drafts are in the **`legal/`** folder. The competitor has only three thin pages (privacy, terms, contact) and a couple of modals — this set is a direct, deliberate upgrade.

| File | Purpose | Fixes competitor gap |
|---|---|---|
| `privacy-policy.md` | Data practices + full US state-privacy rights | Theirs has no cookie consent backing it |
| `terms-of-service.md` | Site terms, liability, no doctor-patient relationship | Theirs has a copy-paste error in the contact section |
| `affiliate-and-advertising-disclosure.md` | Standalone FTC disclosure + inline snippets | They have **no** standalone page (modal only) |
| `medical-disclaimer.md` | Not-medical-advice + compounded-GLP-1 language | They have **no medical disclaimer at all** |
| `editorial-and-review-methodology.md` | Transparent, weighted scoring methodology | Their "How We Rank" admits pay-to-rank |
| `about-us.md` | Real About page, mission, how the site earns | They have **no About page** |
| `contact.md` | Routed contact information | — |
| `cookie-policy.md` | Cookie categories + controls | They have no cookie policy page |
| `accessibility-statement.md` | WCAG AA commitment | They have none |
| `dmca-policy.md` | Copyright takedown / safe harbor | They have none |

**All ten use bracketed placeholders** (`[COMPANY LEGAL NAME]`, `[SITE_DOMAIN]`, `[BUSINESS MAILING ADDRESS]`, etc.) for find-and-replace once your entity details are finalized. **Have a licensed attorney review all ten before publishing.**

### Attorney attention points
- **Terms — arbitration / class-action waiver:** marked optional; counsel decides whether to keep it and confirms enforceability.
- **DMCA — designated agent:** safe-harbor protection requires registering the agent with the **U.S. Copyright Office** (`dmca.copyright.gov`) — a separate action item, not just page text.
- **GLP-1 / compounded-drug language:** counsel should confirm the disclaimer language matches actual on-site content, and that no review copy anywhere claims a compounded drug is "FDA-approved" or "the same as" a brand drug.
- **Privacy "sale/sharing" admission:** the policies state advertising cookies may be a "sale/share" — confirm a working GPC handler and "Do Not Sell or Share" link exist before publishing.
- **Liability cap & governing law:** review the cap and chosen state's venue against that state's consumer-protection law.

---

## 11. Per-page compliance requirements

What each page type must carry:

**Every page (global)**
- Footer links to: Privacy Policy, Terms, Affiliate & Advertising Disclosure, Medical Disclaimer, Editorial & Review Methodology, Cookie Policy, Accessibility, DMCA, About, Contact.
- Cookie consent banner (first visit) + a persistent "Do Not Sell or Share My Personal Information" link.
- GPC signal honored.

**Homepage**
- Brief, honest trust framing — no invented statistics.
- Clear path to the editorial methodology.

**Category hubs & comparison pages (the money pages)**
- **Inline affiliate disclosure** at the top, visible without scrolling, near the first affiliate link.
- A visible link to the **review methodology**; any paid placement clearly **labeled**.
- A "Last updated: [date]" stamp that is **true**.
- Affiliate links: `rel="sponsored nofollow noopener"`, opening in a new tab.
- Conservative, compliant claims; no condition-targeting language; no guaranteed outcomes.
- A contextual link to the **medical disclaimer**.

**Brand review pages**
- Inline affiliate disclosure near the affiliate links.
- Compounded-drug language where the brand sells compounded medication — no "FDA-approved"/equivalence claims.
- Named author + "medically reviewed by" byline + dates.
- Primary-source citations with a visible reference list.
- Genuine pros and cons; no suppression of negatives.

**Articles / educational content**
- Author + medical-reviewer byline.
- Citations to primary sources (FDA, NIH, peer-reviewed).
- Affiliate disclosure if affiliate links are present.
- Fair balance — mention risks alongside benefits.

**PPC landing pages**
- Everything the comparison pages require, plus strict message match to the ad.
- Risk/safety information present.
- Built to the **stricter Bing standard** so the same page passes both platforms.

---

## 12. Pre-launch compliance checklist

**Entity & certification**
- [ ] Legal entity formed; domain secured; entity details filled into all 10 legal pages.
- [ ] LegitScript application submitted; certification obtained **before** any paid health ads.
- [ ] DMCA designated agent registered with the U.S. Copyright Office.

**Legal pages**
- [ ] All 10 legal pages reviewed by a healthcare-advertising attorney.
- [ ] All placeholders replaced; effective dates set.
- [ ] All 10 linked in the global footer and live before launch.

**Disclosures**
- [ ] Inline affiliate disclosure on every comparison and review page, near the links.
- [ ] Affiliate links use `rel="sponsored nofollow noopener"`.
- [ ] Editorial methodology published; any paid placement labeled.

**Privacy & data**
- [ ] Cookie consent platform live; Consent Mode v2 wired.
- [ ] "Do Not Sell or Share" link functional; GPC signal honored.
- [ ] State-privacy rights request channel (email/form) working, with an appeals process.
- [ ] Analytics/ad pixels configured to respect consent.

**Content**
- [ ] No "FDA-approved" or equivalence claims for compounded drugs anywhere.
- [ ] No unsubstantiated health/outcome claims; risks referenced alongside benefits.
- [ ] No fake or suppressed reviews; any displayed reviews genuine.
- [ ] Drug trademarks used descriptively, with ® and ownership notes.
- [ ] Named authors + medical reviewers + citations on health content.

**Accessibility**
- [ ] WCAG 2.1/2.2 AA pass; accessibility statement published.

**Ad accounts**
- [ ] Bing & Google ad accounts set up; LegitScript linked.
- [ ] Ad copy and landing pages reviewed against the stricter Bing health standard.

---

## 13. Ongoing compliance

- **Renew LegitScript annually** ($2,150/website).
- **Review FDA & FTC enforcement quarterly** — the telehealth/GLP-1 space is moving fast.
- **Keep "last updated" dates honest** and refresh YMYL content regularly.
- **Audit affiliate disclosures** whenever templates change.
- **Monitor featured brands** — if a partner brand receives an FDA warning letter, review how you present it.
- **Keep records** — save dated copies of your disclosure language and any compliance reviews.
- **Re-paper as laws change** — more US states pass privacy laws each year; the pending *Protecting Patients from Deceptive Drug Ads Act* may add federal obligations for financially-interested promoters.

---

*Companion documents: `../strategy/competitor-teardown-and-2X-blueprint.md`, `../strategy/content-seo-and-ppc-strategy.md`, `../strategy/site-architecture-and-build-plan.md`, and the 10 drafts in `../legal/`.*
