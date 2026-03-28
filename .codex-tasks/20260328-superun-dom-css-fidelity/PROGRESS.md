# Progress Log

## Context Recovery Block

- 任务: 以 upstream 抓取的 DOM/CSS 为真相源，重做 `home/login/templates/community` 高保真对齐
- 形态: full-single
- 进度: 1/5
- 当前: 正在抓取 upstream HTML/CSS 基线并锁定入口链路
- 文件: `.codex-tasks/20260328-superun-dom-css-fidelity/TODO.csv`
- 下一步: 根据抓取结果确认页面骨架、链接链路和共享样式来源

## Notes

- This task starts from the current local repo state, which already contains prior fidelity work and documentation unification changes.
- The immediate purpose of the scrape pass is to stop relying on accessibility-tree inference alone and to capture upstream HTML/CSS evidence directly.

## Root Cause

- Upstream `home` cards route into `/templates/[slug]`, not directly into `/web/community-view/[slug]`.
- The local clone had preserved an older shortcut from home cards to local community routes, so even a visually closer community page still sat behind the wrong entry chain.
- Upstream `community` is currently a shared preview shell with `会话不存在` state, device toggles, and slug-host iframe URLs such as `https://snapshot-health-guide.superun.yun/`.
- The local community remix action was looping users back into the missing-session shell instead of handing them into a useful create flow.

## Target Route Structure

- `/home` card click -> local `/templates/[slug]`
- `/templates/[slug]` -> `访问模板` points to upstream hashed preview URL when known
- `/web/community-view/[snapshotSlug]` keeps the current upstream shell structure for preview-only parity
- local `community` remix action -> local `/web/login?...` -> local `/home?prompt=复刻 ...`

## Implementation Summary

- Captured upstream DOM/CSS under `.codex-tasks/20260328-superun-dom-css-fidelity/raw/upstream/`.
- Generated `src/data/template-directory.json` from upstream home feed and `src/data/template-index.json` from upstream template index HTML, then merged them via `src/data/template-directory.ts`.
- Switched `src/components/TemplateCard.astro` and `src/pages/home.astro` to the upstream-aligned `/templates/[slug]` chain.
- Added local `src/pages/templates/index.astro` and `src/pages/templates/[slug].astro` using the current upstream structure and copy.
- Rebuilt `src/pages/web/community-view/[slug].astro` as the current split preview shell and changed remix to land on local create flow instead of returning to missing-session.
- Added the visible home sort control (`创建时间`) and kept the current upstream category rail.

## Validation

- `npm run check` passes.
- `npm run build` passes.
- Playwright comparison summary is saved at `.codex-tasks/20260328-superun-dom-css-fidelity/raw/verification/summary.json`.
- Full-page screenshots are saved at `.codex-tasks/20260328-superun-dom-css-fidelity/raw/verification/screenshots/`.
- `llmdoc/architecture/public-site-architecture.md` and `llmdoc/reference/routes.md` now reflect the `/home -> /templates` route chain and the current split-shell community preview flow.
- `npm run deploy` completed, and Cloudflare now serves deployment `39e61e9a-ac43-43b6-971a-a6faa51edd74` with version `0f0c9d74-b11f-4d1f-b98f-6bd589bf2884` created on `2026-03-28T12:01:35.67384Z`; live evidence is saved at `.codex-tasks/20260328-superun-dom-css-fidelity/raw/deploy-status.json`.
- High-signal parity results:
  - `home`: title and template detail route chain now match upstream; visible sort control was restored.
  - `login`: title, heading, tab labels, CTA labels, and redirect entry remain aligned.
  - `template detail`: title, heading, `介绍` / `模板详情` headings, and CTA stack align with upstream.
  - `community`: title, `新对话`, `复刻创作`, `手机`, `电脑`, missing-session state, and iframe src align with upstream shell.
  - local community remix flow now reaches `/home?prompt=复刻 ...` after login instead of bouncing back to missing-session.
