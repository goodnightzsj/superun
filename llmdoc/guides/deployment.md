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
- Latest verified deploy: deployment `bf973d81-9fc3-4e5c-a3d0-c8cb90f44e7f`, version `1c52d8fa-9322-4a42-ad6a-e9841304326d`, created on `2026-03-28T13:02:48.970368Z`; this rollout serves the corrected `/home -> /web/community-view/<preview-slug>` chain, the hidden runtime-only sort control state, and the detailed community intro shell on Workers

## Validation
- `npm run check`
- `npm run build`
- `npx wrangler deployments status --json --name superun-public-site --cwd "/Users/zsj/code/program/superun" -c "/Users/zsj/code/program/superun/wrangler.jsonc"`
- Local DOM/CSS fidelity evidence: `.codex-tasks/20260328-home-community-route-recovery/raw/verification-summary.json`
- Latest live acceptance evidence: `.codex-tasks/20260328-home-community-route-recovery/raw/deploy-status.json`
- Current live-state mirror: `.codex-tasks/20260328-superun-state-unify/raw/live-state.json`
- Historical pass-9 deploy evidence remains in `.codex-tasks/20260327-superun-ui-fidelity-pass-9-epic/tasks/20260327-deploy-docs/raw/pass9-deploy-status.json` for the earlier `cbfb4aff-ab40-4390-a7a5-dc90855f5ad1` rollout
- For local fidelity checks, rebuild with `npm run build`, then validate `/home`, `/web/login`, `/web/community-view/snapshot--d84ad43ac3ca73a429f26cece4a3d557`, and `/web/community-view/snapshot-health-guide` against the upstream scrape pack under `.codex-tasks/20260328-superun-dom-css-fidelity/raw/upstream/`
- For public deploy acceptance, verify the root Workers URL 302s to `/home`, `/home` does not expose a visible `创建时间` control, `/home` card links open hashed `/web/community-view/snapshot--...` routes in a new tab, `/web/login` keeps the `更多 -> Google` reveal plus external `redirectUrl` fallback, and `/web/community-view/[slug]` renders the detailed project-intro shell with `复刻创作`, `手机`, `电脑`, `主页端`, and the iframe sourced from `visitUrl` (`src/pages/home.astro:46`, `src/pages/home.astro:76`, `src/components/TemplateCard.astro:14`, `src/pages/web/login.astro:99`, `src/pages/web/login.astro:142`, `src/pages/web/community-view/[slug].astro:21`, `src/pages/web/community-view/[slug].astro:33`, `src/pages/web/community-view/[slug].astro:83`, `src/pages/web/community-view/[slug].astro:92`, `src/pages/web/community-view/[slug].astro:111`)
- For login acceptance, an external `redirectUrl` must be ignored and fall back to `/home` (`src/pages/web/login.astro:97`)
