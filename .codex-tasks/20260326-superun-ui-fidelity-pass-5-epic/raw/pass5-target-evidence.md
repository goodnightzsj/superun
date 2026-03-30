# Pass 5 Target Evidence

Captured: 2026-03-26 01:19

## Shared baseline
- Font stack resolves to `"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif`.
- Base body background resolves to `rgb(247, 247, 247)`.
- Primary text resolves to `rgb(51, 51, 51)`.
- Borders repeatedly resolve around `rgb(235, 235, 235)`.
- Visual language remains restrained: flat white surfaces, thin borders, low shadow, product screenshots over decorative mock graphics.

## `/home`
- Header height at desktop/mobile remains `64px`.
- Real brand asset in header is an image, not CSS geometry:
  - `https://b.yzcdn.cn/public_files/3dae31884fc33bf8443f006ccf0c5e37.svg`
  - desktop visible size about `135.8x24`
  - mobile visible size about `113.2x20`
- Prompt composer evidence:
  - desktop composer shell about `566x122`
  - textarea inner field about `566x86`
  - textarea typography `14px / 20px`
  - white background, `6px` radius, border `rgb(235, 235, 235)`
- Placeholder typing/deleting motion is scripted. Observed sequence includes:
  - `你想要做一个什么样的东西？`
  - delete down to `你`
  - type to `你想做的东西是用来干嘛的？`
- Language switcher button label is `简中` by default.
- Observed language options:
  - `简体中文`
  - `繁體中文`
  - `廣東話`
  - `日本語`
  - `한국어`
  - `English`
  - `Global`
- Verified language behavior on home:
  - selecting `English` changes button label to `English`
  - login CTA becomes `Login`
  - placeholder begins switching to English (`What wo...` observed during animated cycle)
- Gallery uses real screenshot thumbnails from `b.ux-cdn.com`, not synthetic preview blocks.
- Observed high-confidence screenshot URLs include:
  - `snapshot-ai-growth-workbench` → `https://b.ux-cdn.com/uxarts/files/t20260317121854/pxzh69hr.png?imageView2/2/w/800/q/80/format/webp`
  - `snapshot-glowmind` → `https://b.ux-cdn.com/uxarts/files/t20260310185501/anxvm1i8.png?imageView2/2/w/800/q/80/format/webp`
  - `snapshot-hr-payroll-suite` → `https://b.ux-cdn.com/uxarts/files/t20260309225929/9fzcd53g.png?imageView2/2/w/800/q/80/format/webp`
  - `snapshot-health-guide` → `https://b.ux-cdn.com/uxarts/files/t20260226112337/woyh84e8.png?imageView2/2/w/800/q/80/format/webp`
  - `snapshot-ai-coworker-platform` → `https://b.ux-cdn.com/uxarts/files/t20260309223354/xpu68e6v.png?imageView2/2/w/800/q/80/format/webp`
  - `snapshot-talentos` → `https://b.ux-cdn.com/uxarts/files/t20260309193600/hja1wts1.png?imageView2/2/w/800/q/80/format/webp`
- Hover evidence on card image:
  - transform resolves to `matrix(1.05, 0, 0, 1.05, 0, 0)`
  - transition resolves to `opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Mobile home evidence at `390px`:
  - body width `390`
  - composer width about `328`
  - first visible landscape cards about `169x94.2`
  - portrait cards remain tall in the same two-column grid

## `/web/login?redirectUrl=%2Fhome`
- Real brand asset is the same header SVG image:
  - `https://b.yzcdn.cn/public_files/3dae31884fc33bf8443f006ccf0c5e37.svg`
- Narrow centered auth column remains the main desktop structure.
- WeChat continue button evidence:
  - desktop about `288x44`
  - mobile about `320x44`
- Real WeChat icon is SVG, not a text glyph. Captured SVG:
  - `<svg width="18" height="18" viewBox="0 0 1024 1024" fill="none" ...><path ... fill="#09BB07"></path></svg>`
- Language options match home page.
- Login page language behavior also switches button label to `English` when selected.
- Mobile evidence at `390px`:
  - body width `390`
  - brand still about `135.8x24`
  - visible inputs/button rhythm is `44px`

## `/web/community-view/...`
- Target page is a framing shell around a real embedded preview surface.
- Observed iframe source for representative page:
  - `https://snapshot--5970b4812267a8197073cf6ea8474a34.superun.yun`
- Desktop evidence:
  - top bar height about `48px`
  - iframe border radius `12px`
  - iframe border color about `rgb(224, 224, 224)`
  - iframe visible size observed around `1416x1020` in a `1440x1080` viewport session
- Device toggle evidence:
  - mobile button label is `手机`
  - active state flips to white background rather than using a heavy pill
  - mobile toggle reduced representative iframe to about `373x800` in desktop viewport session
- Mobile viewport evidence at `390px`:
  - top bar height about `56px`
  - iframe fills width `390`
  - iframe visible height about `732`
  - mobile layout emphasizes title and CTA flow over desktop side-rail framing

## Implementation guidance mapped to Epic subtasks
1. Brand assets: replace synthetic `brand__mark` with the real public SVG across header, login, footer, and community chrome.
2. Responsive/mobile: rework home grid and auth/community shells for true `390px` behavior instead of collapsing to a generic single-column fallback.
3. I18n: implement visible language menu with the captured option list and real copy switching, at minimum for zh/en and menu labels for all observed locales.
4. Home motion: reproduce the observed placeholder type/delete cycle and keep manual prompt entry intact.
5. Gallery thumbnails/interactions: use real screenshot thumbnails and apply target-like hover/touch scale behavior.
6. Login fidelity: swap the fake WeChat glyph for the captured SVG and tighten sizing/rhythm around the `44px` controls.
7. Community fidelity: make the page read like a true framed preview shell; static-safe screenshot/preview surfaces are acceptable, but must visually track the target more closely than the current synthetic inline reconstruction.
