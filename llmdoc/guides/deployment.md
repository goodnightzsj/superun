# Deployment Guide

## Local workflow
1. `npm install`
2. `npm run dev`
3. Run type and build checks before shipping

## Cloudflare Workers
- Use Astro static output
- Build to `dist`
- `wrangler.jsonc:1` binds `dist` as `ASSETS`, enables `workers.dev`, and routes HTML paths without trailing slashes
- `src/worker.ts:8` forwards public requests to `env.ASSETS.fetch(...)` and `src/worker.ts:10` immediately redirects `/` to `/home` on Workers
- Command: `npm run deploy`
- Current live workers.dev URL: `https://superun-public-site.sub-store.workers.dev`
- Latest verified deploy: version `f20ff594-e748-404f-9162-fa1735f7ebd2` with immediate root redirect, pass-9 login Google/more parity, immersive full-screen community previews, and `Built with superun` badges visible on the local GlowMind/Nexus recreations live on Workers

## Validation
- `npm run check`
- `npm run build`
- `npx wrangler deployments status --json --name superun-public-site --cwd "/Users/zsj/code/program/superun" -c "/Users/zsj/code/program/superun/wrangler.jsonc"`
- Latest live acceptance evidence: `.codex-tasks/20260327-superun-ui-fidelity-pass-9-epic/tasks/20260327-deploy-docs/raw/pass9-deploy-status.json`
- For local/community fidelity checks, rebuild with `npm run build`, then validate in Chrome or Playwright against the locally served `dist` output: `/home`, `/web/community-view/snapshot-glowmind`, `/web/community-view/snapshot-glowmind?device=mobile`, `/web/community-view/snapshot-ai-growth-workbench`, `/web/community-view/snapshot-ai-growth-workbench?device=mobile`, `/web/community-view/snapshot-hr-payroll-suite`, `/web/community-view/snapshot-hr-payroll-suite?device=mobile`, plus a non-local iframe-backed route such as `/web/community-view/snapshot-performance-center`
- For public deploy acceptance, verify the root Workers URL 302s to `/home`, `/web/login` keeps the Google action parity fix, `/home` keeps the softer hero reveal plus tighter first-screen spacing, the three local community recreations keep their tightened page-level fidelity adjustments, and non-core community routes keep the pulse-only loader plus load-gated iframe reveal without losing the immersive shell split (`src/pages/home.astro:165`, `src/pages/home.astro:197`, `src/pages/home.astro:204`, `src/pages/web/community-view/[slug].astro:294`, `src/pages/web/community-view/[slug].astro:295`, `src/pages/web/community-view/[slug].astro:296`, `src/styles/global.css:221`, `src/styles/global.css:1786`, `src/styles/global.css:2187`, `src/styles/global.css:2856`, `src/styles/global.css:1381`, `src/styles/global.css:1391`, `src/styles/global.css:1397`, `src/styles/global.css:1412`)
- For login acceptance, an external `redirectUrl` must be ignored and fall back to `/home` (`src/pages/web/login.astro:97`)
