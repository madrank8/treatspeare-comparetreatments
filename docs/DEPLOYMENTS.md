# Deployments

Single reference for what runs where. **This repo is the source of truth** for the Next.js app; the static landing is a separate Vercel project until its source is imported here.

## Vercel projects

| Vercel project | Production URL | Built from | Stack |
|---|---|---|---|
| **comparetreatments** | [treatsphere.com](https://treatsphere.com) | GitHub `madrank8/comparetreatments` → `website/` | Next.js 16 (App Router) |
| **comparetreatments-site** | [comparetreatments-site.vercel.app](https://comparetreatments-site.vercel.app) | Vercel project root `.` → output `site/` | Static HTML (`body.seo-landing-index`) — **source not in this repo** |

Preview aliases on the main project also include `comparetreatments-eight.vercel.app` and branch previews on every push to `main`.

## Local development

```bash
cd website
npm install
npm run dev    # http://localhost:3000
```

Link CLI to the main project (from repo root):

```bash
vercel link --yes --project comparetreatments --cwd website
```

## Brand configuration

The Next.js app reads brand identity from one file:

```
website/lib/site.ts   →   SITE.name, SITE.url, SITE.twitter, etc.
```

Current values: **Treatsphere** / **https://treatsphere.com**. Legal markdown under `legal/` and `website/content/legal/` must be updated in parallel on any rebrand.

The static landing at `comparetreatments-site.vercel.app` uses **comparetreatments.com** branding and different copy — it is not generated from `website/`.

## Environment variables (Next.js app)

Copy `website/.env.example` → `website/.env.local`. All vars are optional for local dev; unset vars no-op gracefully.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_COOKIEBOT_ID` | Cookiebot CMP |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |
| `KV_REST_API_URL` | Click-log store (Upstash / Vercel KV) |
| `KV_REST_API_TOKEN` | Click-log auth token |

Set production values in the **comparetreatments** Vercel project → Settings → Environment Variables.

## Consolidation note

To have one deploy path: either retire `comparetreatments-site` and point preview traffic at the Next.js app, or import the static `site/` source into this repo and document which URL is canonical.

**Tracked in beads:** `comparetreatments-r85` (consolidate deployments), `comparetreatments-2f9` (import static source).
