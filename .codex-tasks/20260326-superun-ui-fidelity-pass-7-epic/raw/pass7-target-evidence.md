# Pass 7 target/live evidence

## Capture source
- Browser: isolated Google Chrome via CDP
- Target: https://www.superun.com
- Live: https://superun-public-site.sub-store.workers.dev
- Raw JSON: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-chrome-evidence.json`

## Home
### Desktop
- Target screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-target-home-desktop.png`
- Live screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-live-home-desktop.png`
- Shared aligned metrics: composer width `566px`, composer height `122px`, gallery title `20/30`, desktop content gutter `52px`
- Residual gaps:
  - target cards do not show the local `复刻` badge pill
  - target cards do not show the trailing external-link arrow glyph
  - live cards feel slightly busier than target because of those extra chrome details

### Mobile 390px
- Target screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-target-home-mobile.png`
- Live screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-live-home-mobile.png`
- Shared aligned metrics: composer width `328px`, composer height `122px`, gallery title `18px`
- Residual gaps:
  - live cards still show `复刻` badge pills while target cards do not
  - live cards still show arrow glyphs that are absent in target

## Login
### Desktop
- Target screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-target-login-desktop.png`
- Live screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-live-login-desktop.png`
- Residual gaps:
  - overall shell, heading and CTA position are visually close
  - target verification-code input is a bordered field; live left input visually collapses because the inner input border is removed

### Mobile 390px
- Target screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-target-login-mobile.png`
- Live screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-live-login-mobile.png`
- Residual gaps:
  - same verification-code input issue is more obvious on mobile
  - remaining spacing drift is minor compared with the input chrome mismatch

## Community detail / preview
### Desktop
- Target screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-target-community-desktop.png`
- Live screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-live-community-desktop.png`
- Target pattern observed:
  - global detail-page header with site navigation
  - breadcrumb row
  - large title and publish date
  - preview rendered as a document-like showcase inside the detail page
  - follow-up explanatory sections (`介绍`, `模板详情`)
- Live residual gaps:
  - current route still uses an app-style immersive topbar instead of a template-detail shell
  - page lacks breadcrumb, publish date, and explanatory detail sections
  - local preview is presented as a full viewport app surface rather than a detail-page showcase

### Mobile 390px
- Target screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-target-community-mobile.png`
- Live screenshot: `.codex-tasks/20260326-superun-ui-fidelity-pass-7-epic/raw/pass7-live-community-mobile.png`
- Residual gaps:
  - same structural mismatch persists on mobile
  - live mobile still behaves like an internal app view; target behaves like a long template detail page with preview embedded in content flow

## Implementable pass-7 gap list
1. Remove extra badge/arrow chrome from home cards.
2. Restore bordered verification-code input styling on login desktop and mobile.
3. Reframe local community preview pages into a target-like template-detail shell while preserving the local reconstructed preview content.
