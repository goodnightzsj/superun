# Raw Metrics

Captured at: 2026-03-28 05:23:33 +0800

Compared URLs:

- local: `http://127.0.0.1:4332/web/login?redirectUrl=https://evil.com/path&prompt=hello`
- upstream: `https://www.superun.com/web/login?redirectUrl=https://evil.com/path&prompt=hello`

## Shared Findings

- Local body font: `Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, "system-ui", system-ui, sans-serif`
- Upstream body font: `"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif`
- Local locale button: `14px`, radius `0px`
- Upstream locale button: `16px`, radius `4px`

## CTA Semantics

- Local submit control: anchor with sanitized `href="/home"`
- Upstream submit control: button
- Local WeChat control: anchor with transparent-looking border
- Upstream WeChat control: button with `1px solid rgb(235, 235, 235)` border

## Interaction Parity

- Before clicking `更多`:
  - local Google visible: `true`
  - upstream Google visible: `false`
- After clicking `更多`:
  - local `更多` hidden: `true`
  - upstream `更多` hidden: `true`
  - local Google visible: `true`
  - upstream Google visible: `true`
- After click, local submit href remains `/home`, so redirect sanitization still holds.

## Control Text Drift

- Local control stack starts with locale choices plus `使用 微信 继续`, `更多`, `使用 Google 继续`, `手机号`, `邮箱`, `发送验证码`, `忘记密码？`, `登录 / 注册`.
- Upstream control stack continues into `创建团队`, `最新内容`, `推荐模板`, and SEO article links below the auth card.

## High-Signal Summary

- `/web/login` is close behaviorally but still drifts in semantics, border treatment, locale chrome, and lower-page shared content.
