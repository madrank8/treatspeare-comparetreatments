# Project Instructions for AI Agents

This file provides instructions and context for AI coding agents working on this project.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->


## Build & Test

```bash
cd website
npm install
npm run dev      # http://localhost:3000
npm run build    # production static export check (46+ routes)
npm run lint
```

## Architecture Overview

Monorepo-style layout: planning docs at repo root, runnable app in `website/`.

- **App:** Next.js App Router, SSG/ISR, Tailwind v4, strict TypeScript
- **Content:** seeded TS data (`website/lib/data/`) + legal markdown (`website/content/legal/`)
- **Brand:** single source of truth in `website/lib/site.ts` (cascades to schema, sitemap, footer)
- **Affiliate:** `/go/[slug]` server route — 302 redirect + optional KV click log
- **Deploy:** Vercel project `comparetreatments`, root directory `website` → treatsphere.com

See `docs/DEPLOYMENTS.md` for the second Vercel project (`comparetreatments-site` static landing).

## Conventions & Patterns

- Rebrand = edit `website/lib/site.ts` + parallel find-and-replace in `legal/` and `website/content/legal/`
- YMYL category: legal pages are drafts pending attorney review
- Issue tracking: `bd` only (no markdown TODO lists)
