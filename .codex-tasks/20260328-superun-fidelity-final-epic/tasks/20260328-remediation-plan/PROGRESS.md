# Progress Log

## Context Recovery Block

- 任务: 统一 `home/login/community` 的高保真整改方案
- 当前: 方案已完成，可直接作为下一波实现的输入
- 文件: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-remediation-plan/TODO.csv`
- 依赖: home/login/community 三个子任务的 `raw/metrics.md` 与 `PROGRESS.md`
- 下一步: 若进入编码，先做 shared-system，再做页面级收口，最后重构 community shared shell

## Plan

### Scope Freeze

- “完全一致”以 2026-03-28 抓到的原站状态为准。
- 若后续原站继续漂移，应新开 capture/task，不要把当前任务 silently 追平到新状态。

### Wave 1: Shared-System Alignment

- Typography:
  - Replace the current public-site font stack with the upstream `Camera Plain Variable` stack and matching fallbacks.
  - Normalize font sizes, radii, and control density for locale buttons, CTA buttons, tabs, and auth controls.
- Global chrome:
  - Extract a shared header treatment with the upstream solid `#f7f7f7` surface and `blur(24px)` backdrop.
  - Reconcile page background and surface colors so home, login, and community shell read from the same tokens.
- Footer / SEO modules:
  - Replace the current local footer-link assembly with an upstream-matching SEO/latest-content module shared by home and login.

### Wave 2: Home Page Reconstruction

- Rebuild the hero composer shell:
  - white rounded textarea surface
  - reduced inner padding
  - icon-only submit control
  - mobile `16px` textarea behavior
- Re-sequence the gallery:
  - align visible ordering to the upstream data/order
  - align tab control treatment and card shell spacing
  - align any `显示更多 / 创建时间 / 复刻` control stack that differs from local
- Rebuild footer spacing and SEO container rhythm from the shared module established in Wave 1.

### Wave 3: Login Page Reconstruction

- Preserve current local redirect sanitization and `更多 -> Google` reveal logic.
- Replace anchor-based auth CTAs with semantic buttons while retaining the current local navigation intent.
- Align top chrome, auth card spacing, borders, tab states, inputs, and bottom SEO/latest stack to the upstream shared system.

### Wave 4: Community Shell Rebaseline

- Replace the old “前三个本地复刻，其余 iframe” runtime strategy with the current upstream target:
  - shared preview shell
  - iframe-backed content
  - shell-level controls such as `新对话`, `查看预览` or `查看对话`, `复刻创作`, and device toggles where applicable
- Normalize iframe source mapping to the current upstream slug-style hosts where available.
- Decide explicitly whether existing handcrafted pages remain:
  - fallback only
  - offline demo only
  - or removed from primary routing
- Do not treat community drift as CSS-only work; it requires a route-shell redesign.

### Wave 5: Verification

- Run `npm run check`
- Run `npm run build`
- Re-compare desktop/mobile on:
  - `/home`
  - `/web/login`
  - `snapshot-glowmind`
  - `snapshot-health-guide`
- Verification criteria:
  - shared font stack matches
  - shared chrome and footer/SEO modules match
  - login behavior still sanitizes untrusted redirects
  - community routes now follow the upstream shell architecture

## Risk Notes

- Upstream snapshot origins currently produce intermittent `404` content inside some iframes; parity here means matching the shell and host behavior, not fixing upstream content availability.
- Community-shell work should be scheduled after shared tokens exist, otherwise the same chrome drift will be reimplemented multiple times.
