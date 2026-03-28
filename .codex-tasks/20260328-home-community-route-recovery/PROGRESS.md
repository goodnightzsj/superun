# Progress Log

## Context Recovery Block

- 任务: 修正 `home -> community` 真实链路，并收口 `home` 卡片间距漂移
- 形态: full-single
- 进度: 1/5
- 当前: 重新验证原站运行时点击行为，推翻上轮静态 `href -> /templates` 结论
- 文件: `.codex-tasks/20260328-home-community-route-recovery/TODO.csv`
- 下一步: 把真实 preview slug 映射和 spacing metrics 写进实现

## Runtime Findings

- Upstream static HTML still exposes `/templates/...` links, but the live `home` card runtime is not an anchor-based transition.
- Real browser click on the first upstream card opens a new tab at `/web/community-view/snapshot--d84ad43ac3ca73a429f26cece4a3d557`.
- The upstream clicked community page is a detailed preview shell with project title, long-form intro panel, `复刻创作`, device toggles, and iframe preview. It is not the missing-session shell we previously aligned to.
- The upstream `home` gallery grid uses `gap-x: 24px` and `gap-y: 44px` from the runtime DOM/CSS, while the local clone currently uses smaller gaps.

## Correction Direction

- Derive the real preview slug from `visitUrl`, not from the stale `snapshotSlug` alias field.
- Route local `home` cards directly to `/web/community-view/<derived-preview-slug>` and open them in a new tab.
- Rebuild local community preview around the detailed left-panel runtime shell.
- Hide or remove controls that only exist in static markup but are not visible in the runtime page.

## Implementation Summary

- `src/data/template-directory.ts` now derives `previewSlug` from `visitUrl`, exports the route-slug lookup used by `home` and `community`, and parses long-form `websiteIntroduction` copy into renderable narrative blocks.
- `src/components/TemplateCard.astro` now opens the derived `/web/community-view/<preview-slug>` route in a new tab, and its title/description shell now mirrors the upstream card DOM more closely.
- `src/pages/home.astro` keeps the prompt flow intact while restoring the corrected `home -> community` path through `TemplateCard`; the visible `创建时间` control was removed because it is runtime-hidden upstream.
- `src/pages/web/community-view/[slug].astro` now renders the detailed upstream-style project preview shell with the intro panel, preview image, `复刻创作`, `手机` / `电脑`, `主页端`, and the iframe sourced from `visitUrl`.
- `src/styles/global.css` now locks the `home` gallery grid to `44px x 24px`, tightens the card meta spacing, and styles the detailed community preview shell around the iframe canvas.

## Validation

- `npm run check` passes.
- `npm run build` passes.
- Playwright verified that local `/home` cards now point at hashed `/web/community-view/snapshot--...` routes in a new tab rather than `/templates/[slug]`.
- Playwright verified the local first-card shell uses `44px` row gap, `24px` column gap, `12px` media radius, `14px/20px` title typography, `13px/19.5px` description typography, and no visible `创建时间` control.
- Playwright verified the local community page contains `产品简介`, `功能亮点`, `复刻创作`, `手机`, `电脑`, and `主页端`, and no longer shows `会话不存在`.
- Evidence is stored in `.codex-tasks/20260328-home-community-route-recovery/raw/verification-summary.json`.

## Deploy

- `npm run deploy` succeeded and published `https://superun-public-site.sub-store.workers.dev`.
- Live 100% deployment is `bf973d81-9fc3-4e5c-a3d0-c8cb90f44e7f`, version `1c52d8fa-9322-4a42-ad6a-e9841304326d`, created `2026-03-28T13:02:48.970368Z`.
- Live spot checks confirmed `/` still 302s to `/home`, `/home` serves direct `/web/community-view/snapshot--...` card routes with no visible `创建时间` control, and `/web/community-view/snapshot--d84ad43ac3ca73a429f26cece4a3d557` serves the detailed intro shell with `产品简介`, `功能亮点`, `复刻创作`, `主页端`, and the iframe preview.
- Deploy evidence is stored in `.codex-tasks/20260328-home-community-route-recovery/raw/deploy-status.json`.
