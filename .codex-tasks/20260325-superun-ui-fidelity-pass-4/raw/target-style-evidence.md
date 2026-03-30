# Target Style Evidence

## Shared baseline
- Primary body font: `"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif`
- Base page background: `rgb(247, 247, 247)`
- Primary text: `rgb(51, 51, 51)`
- Muted text: `rgb(102, 102, 102)` and secondary description text around `rgb(153, 153, 153)`
- Border color repeatedly resolves to `rgb(235, 235, 235)`
- Visual language is neutral and restrained: flat white surfaces, small radii, almost no visible shadow, black/gray typography, green used only in the logo and WeChat accent.

## `/home`
- Viewport capture: `1512x857`
- Main content width: `1400px`
- Hero slogan leaf: `24px / 28.8px`, weight `400`, centered
- Prompt textarea: `566x86`, `14px / 20px`, radius `6px`, white background
- Submit icon button: `24x24`, circular ghost control, muted gray
- Section title `看看其他人的创作`: `20px / 30px`, weight `600`
- Active category tab `全部`: `54x32`, `14px / 20px`, weight `500`, radius `8px`, dark border on neutral background
- First visible card title `AI 私域增长工作台`: `14px / 21px`, weight `400`
- First visible card description: `13px / 19.5px`, muted gray, two-line clamp feel
- Representative evidence sources:
  - `target-home.html`
  - `target-home-dynamic.html`
  - `index-BottBQch.css`

## `/web/login?redirectUrl=%2Fhome`
- Narrow centered auth column width: about `288px`
- Title `欢迎使用 superun`: `20px / 28px`, weight `600`
- WeChat continue button: `288x44`, `14px / 20px`, weight `500`, radius `6px`, light background
- `更多`: `12px / 16px`, weight `400`, muted gray
- Tabs `手机号` / `邮箱`: `14px / 20px`, weight `500`, active tab uses dark underline/border
- Phone prefix `+86`: `14px / 20px`, muted gray
- Phone input: `248x42`, `14px / 20px`
- Code input: `194x44`, `14px / 20px`
- Send code button: `86x44`, `12px / 16px`, weight `500`, radius `6px`
- Submit button `登录 / 注册`: `288x44`, `14px / 20px`, weight `500`, dark fill, radius `6px`
- Agreement line: `12px / 16px`, muted gray
- Bottom `创建团队`: `14px / 20px`, muted gray, anchored near bottom of viewport
- Representative evidence sources:
  - `target-login.html`
  - `target-login-dynamic.html`
  - `index-BottBQch.css`

## `/web/community-view/...`
- Desktop top bar height: `48px`
- Top bar title `AI 私域增长工作台`: `14px / 20px`, weight `500`, muted gray
- Device toggles `手机` / `电脑`: `14px / 18px`, weight `400`; active state flips foreground/background subtly rather than using a heavy pill
- Side description copy: `14px / 24px`, muted-dark body color
- Desktop iframe preview: about `1488x797`, radius `12px`, thin neutral border
- Mobile iframe preview after toggle: about `324x695`, centered in the frame
- The preview page is a real app-like surface, not a static poster. The outer page is mainly a framing shell around the preview.
- Representative evidence sources:
  - `target-community.html`
  - `target-community-dynamic.html`
  - `index-BottBQch.css`
  - browser snapshots showing desktop and mobile iframe states

## High-confidence drift against local implementation
- Local global tokens are still warmer and softer than target (`src/styles/global.css`)
- Local `/home` uses larger radii, softer card styling, and synthetic preview thumbnails instead of target-like screenshot cards (`src/pages/home.astro`, `src/components/TemplateCard.astro`, `src/components/TemplatePreviewGraphic.astro`)
- Local `/web/login` is structurally close but still needs exact spacing, 44px control rhythm, muted typography, and tighter column alignment (`src/pages/web/login.astro`)
- Local `/web/community-view/[slug]` is the largest drift: current page renders an inline static preview component instead of a target-like framed preview shell with true desktop/mobile viewport behavior (`src/pages/web/community-view/[slug].astro`, `src/components/TemplatePreviewGraphic.astro`)
