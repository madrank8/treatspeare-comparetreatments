# comparetreatments

A US telehealth **treatment-comparison affiliate site** — research, strategy, legal/compliance drafts, and a Next.js app. Competitor benchmark: [comparetreatments.com](https://comparetreatments.com). Production app: [treatsphere.com](https://treatsphere.com).

**This repo is the single project home** — code, strategy, legal, and agent docs all live here. Issue tracking: `bd` (run `bd ready`).

## Repo layout

| Path | Contents |
|---|---|
| `website/` | Next.js app (App Router, TypeScript, Tailwind) — **start here for code** |
| `strategy/` | Competitor teardown, architecture plan, SEO/PPC strategy |
| `compliance/` | LegitScript, FTC/FDA, ad-policy roadmap |
| `legal/` | Ten legal-page drafts (attorney review required) |
| `docs/DEPLOYMENTS.md` | Vercel URLs, env vars, deploy setup |
| `PROJECT-STATUS.md` | Build tracker / session handoff |
| `START-HERE.md` | Strategy package index |
| `AGENTS.md` | Agent + project map (read first in Cursor) |

## Run the website

```bash
cd website
npm install
cp .env.example .env.local   # optional — all vars no-op when unset
npm run dev
```

Dev server: http://localhost:3000

## Deployments

| URL | Source |
|---|---|
| [treatsphere.com](https://treatsphere.com) | This repo → `website/` → Vercel `comparetreatments` |
| [comparetreatments-site.vercel.app](https://comparetreatments-site.vercel.app) | Separate static Vercel project — source not in repo yet |

Details: `docs/DEPLOYMENTS.md`

## Note

The files in `legal/` are **drafts pending review by a licensed attorney** before publication. They use bracketed placeholders for find-and-replace and are not a substitute for qualified legal counsel — this is a heavily enforced YMYL category.
