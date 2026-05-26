# Legal Pages — Outstanding Placeholders

**Updated:** 2026-05-26
**Status:** brand swap done (`Treatibly`→`ComparedRx`, `treatibly.com`→`comparedrx.com`, effective date filled). 10 placeholder types remain — these need real values from Niro and/or a healthcare-advertising attorney before publication.

This file is the single source of truth for what's still unfilled in the 10 legal pages. Both folders (`legal/` source drafts and `website/content/legal/` rendered copies) carry the same placeholders; updating both keeps them in sync.

---

## The 10 remaining placeholder types

| # | Placeholder | What it needs | Who fills it |
|---|---|---|---|
| 1 | `[COMPANY LEGAL NAME]` | The registered business entity (e.g. `ComparedRx LLC`) | Niro — entity formation |
| 2 | `[BUSINESS MAILING ADDRESS]` | A real address for legal notices, DMCA, privacy requests | Niro |
| 3 | `[STATE OF FORMATION]` | The US state the entity is formed in (governs the contract) | Niro (Delaware is a common default) |
| 4 | `[GENERAL CONTACT EMAIL]` | A monitored inbox (e.g. `hello@<domain>`) | Niro |
| 5 | `[PRIVACY EMAIL]` | Privacy requests inbox (e.g. `privacy@<domain>`) | Niro |
| 6 | `[LEGAL/DMCA EMAIL]` | DMCA + legal notices inbox (e.g. `legal@<domain>`) — must match the address registered with the U.S. Copyright Office DMCA Designated Agent system | Niro |
| 7 | `[PHONE NUMBER]` | Business phone (optional in most pages, required in accessibility statement and DMCA notice) | Niro |
| 8 | `[MEDICAL REVIEWER NAME, CREDENTIALS]` | A real licensed clinician on the medical review board (MD / DO / NP / PharmD / RD). The current sample data in `lib/data/authors.ts` is fictional and must not be cited as real | Niro — appoint reviewer(s) |
| 9 | `[EDITORIAL TEAM DESCRIPTION]` | A short, accurate description of the editorial team's structure and process | Niro / editor |
| 10 | `[KNOWN LIMITATIONS]` | Accessibility issues currently known (could be "none currently known" once a WCAG 2.2 AA audit is complete) | Niro — pending accessibility audit (audit P2-1) |

---

## Where each placeholder lives

| Placeholder | Files (in `legal/` folder; `website/content/legal/` carries the same list under route-slug filenames) |
|---|---|
| `[COMPANY LEGAL NAME]` | about-us, accessibility-statement, affiliate-and-advertising-disclosure, contact, cookie-policy, dmca-policy, editorial-and-review-methodology, medical-disclaimer, privacy-policy, terms-of-service (**all 10**) |
| `[BUSINESS MAILING ADDRESS]` | about-us, accessibility-statement, contact, dmca-policy, privacy-policy, terms-of-service |
| `[STATE OF FORMATION]` | about-us, privacy-policy, terms-of-service |
| `[GENERAL CONTACT EMAIL]` | about-us, accessibility-statement, affiliate-and-advertising-disclosure, contact, editorial-and-review-methodology, medical-disclaimer, privacy-policy, terms-of-service |
| `[PRIVACY EMAIL]` | contact, cookie-policy, privacy-policy |
| `[LEGAL/DMCA EMAIL]` | contact, dmca-policy, editorial-and-review-methodology, terms-of-service |
| `[PHONE NUMBER]` | accessibility-statement, contact, dmca-policy |
| `[MEDICAL REVIEWER NAME, CREDENTIALS]` | about-us, editorial-and-review-methodology |
| `[EDITORIAL TEAM DESCRIPTION]` | about-us |
| `[KNOWN LIMITATIONS]` | accessibility-statement |

---

## Find-and-replace workflow (when values arrive)

The cleanest way to fill these in is one batch find-and-replace across both folders. From the repo root:

```bash
# Confirm the exact set of remaining placeholders first
grep -roh '\[[A-Z][A-Z /,]*\]' legal/ website/content/legal/ | sort -u
```

That should output exactly 10 lines — the 10 placeholder types above. If anything else shows up, it's an artifact and worth investigating before the attorney sees the file.

When filling, do every occurrence in both `legal/<name>.md` AND the matching `website/content/legal/<slug>.md` so the rendered site picks up the same content the attorney signed off on.

---

## What's also outstanding for legal launch readiness (from the audit)

- **P0-3** — healthcare-advertising attorney review of the 10 pages (external).
- **P0-10** — register a DMCA Designated Agent with the U.S. Copyright Office (external; the email above must match what you register).
- **P0-9** — appoint real medical reviewer(s); update `lib/data/authors.ts` to remove the "sample content only" framing and reflect the real people. The legal pages depend on this for `[MEDICAL REVIEWER NAME, CREDENTIALS]`.
- **P0-1** — lock the real brand, entity name, and domain so the `ComparedRx` placeholder swap can happen at the SITE.ts level (one-file change) and the legal pages keep matching the chrome.

See `AUDIT-2026-05-26.md` for the full Option A roadmap.
