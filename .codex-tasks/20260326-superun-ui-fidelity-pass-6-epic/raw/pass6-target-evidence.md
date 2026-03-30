# Pass 6 Target Evidence

Captured: 2026-03-26

## Shared baseline
- Continue from pass-5 evidence in `.codex-tasks/20260326-superun-ui-fidelity-pass-5-epic/raw/pass5-target-evidence.md`.
- Target remains visually restrained: flat white surfaces, `rgb(247, 247, 247)` page background, low-shadow product cards, real screenshot media, and thin gray borders.
- Some target console errors are unrelated analytics / remote snapshot failures and are not product UI regressions.

## `/home`
### Target
- Desktop header height remains `64px`.
- Brand image still renders at about `135.8x24`.
- Gallery heading sits around `x=52`, indicating the desktop content gutter is closer to `52px` per side than the current local `56px`.
- Pass-5 evidence remains valid for the hero composer shell (`566x122`) and `390px` mobile composer width (~`328px`).
- Gallery hover evidence from pass 5 shows image scale around `1.05` and a shorter transition than current local CSS.

### Local pass-5 state
- Desktop home content starts at `x=56` because shared width uses `calc(100% - 112px)`.
- Desktop composer is still too tall at about `566x130.5`.
- Mobile composer is too wide at about `358px` on a `390px` viewport.
- Desktop gallery card image hover uses `scale(1.06)` and a longer `0.38s` transition.

### Concrete pass-6 gaps
1. Tighten the shared desktop gutter from `56px` to `52px` so home spacing matches target more closely.
2. Reduce hero composer height toward the captured `122px` target.
3. Narrow the mobile home composer toward the captured `328px` width while keeping the two-column gallery.
4. Tone card hover timing/scale down to the target-like `1.05` / `0.3s` feel.

## `/web/login?redirectUrl=%2Fhome`
### Target
- WeChat button remains `288x44` on desktop and `320x44` on `390px` mobile.
- Mobile auth column begins higher on the page than the current local implementation.
- Desktop auth chrome uses a tighter left gutter; language button placement is slightly closer to the brand than current local.

### Local pass-5 state
- Desktop brand starts at `x=24`; target-like spacing is closer to `x=18`.
- Desktop auth card starts around `y=118`, reading slightly too low.
- Mobile auth card starts around `y=132`; target evidence reads closer to `y=100`.
- Control widths and 44px rhythm are already correct.

### Concrete pass-6 gaps
1. Tighten desktop login shell left/right padding to align brand and language control with target.
2. Move the auth card upward on desktop and mobile.
3. Keep existing 44px control rhythm and real brand / locale assets unchanged.

## `/web/community-view/...`
### Target
- The target experience is still a framed preview shell around a remote surface.
- Desktop preview uses a fixed-height shell feeling like an embedded browser surface.
- Mobile shell keeps a `56px` topbar and a constrained preview area rather than letting the entire page grow in the outer document.

### Local pass-5 state
- Local reconstructed community pages render as full document content inside the shell.
- On `390px` mobile, the local preview frame grows to ~`2294px` tall instead of behaving like a framed viewport.
- This makes the local community pages feel less like embedded previews and more like standalone routes.

### Concrete pass-6 gaps
1. Constrain local reconstructed community pages inside a viewport-like frame with internal scrolling.
2. Preserve the separate topbar while making local previews feel like embedded surfaces on desktop and mobile.
3. Keep current local reconstructions for Goose / GlowMind / Nexus, but present them in a more target-like framed way.

## Pass-6 execution plan
1. Shared / home polish via `src/styles/global.css` desktop gutter and hero composer tuning.
2. Login polish via `src/styles/global.css` auth shell padding and card offset tuning.
3. Community polish via `src/styles/global.css` framed local-preview viewport behavior.
4. Responsive/mobile follow-up for `390px` composer and auth offsets.
5. Motion polish by reducing card hover scale and shortening transitions.
