# comparetreatments

A US telehealth **treatment-comparison affiliate site** — research, strategy, a complete legal/compliance page set, and a Next.js web app for launching a site modeled on the competitor `comparetreatments.com` and designed to beat it.

## Repo layout

| Path | Contents |
|---|---|
| `website/` | The Next.js (App Router, TypeScript, Tailwind) application — pages, components, data, and SEO/schema utilities. |
| `strategy/` | Competitor teardown and 2X blueprint, the site architecture and build plan, and the content/SEO/PPC strategy. |
| `compliance/` | Compliance and legal roadmap — LegitScript, Bing/Google ad policy, FTC, FDA, state privacy, accessibility, and a pre-launch checklist. |
| `legal/` | Ten legal-page drafts (privacy policy, terms of service, affiliate disclosure, medical disclaimer, editorial methodology, about, contact, cookie policy, accessibility statement, DMCA policy). |
| `START-HERE.md` | The master index — read this first for an overview of the whole package. |

## Run the website

```bash
cd website
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`.

## Note

The files in `legal/` are **drafts pending review by a licensed attorney** before publication. They use bracketed placeholders for find-and-replace and are not a substitute for qualified legal counsel — this is a heavily enforced YMYL category.
