# Raw Metrics

Captured at: 2026-03-28 05:23:33 +0800

Compared URLs:

- local: `http://127.0.0.1:4332/home`
- upstream: `https://www.superun.com/home`

## Desktop

- Local body font: `Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, "system-ui", system-ui, sans-serif`
- Upstream body font: `"Camera Plain Variable", ui-sans-serif, system-ui, sans-serif`
- Local header: transparent, no blur, class `site-header`
- Upstream header: `rgb(247, 247, 247)`, `blur(24px)`, class `fixed inset-x-0 z-[20] bg-background-new backdrop-blur-[24px]`
- Local locale button: `14px`, radius `0px`
- Upstream locale button: `16px`, radius `4px`
- Local textarea: transparent, `padding 14px 18px 0`, radius `0px`, no min-height
- Upstream textarea: white, `padding 2px 4px 4px`, radius `6px`, `min-height 64px`
- Local submit affordance: anchor, `28x32`, full opacity
- Upstream submit affordance: button, `24x24`, `opacity 0.5`
- Local footer: top `3259.25`, height `150`, margin-top `48px`, transparent background
- Upstream footer: top `3800.5`, height `358`, margin-top `80px`, white background

Local first 6 gallery cards:

1. `薪擎 - 业绩提成绩效管理平台`
2. `绩效星`
3. `招聘流程管理`
4. `养生之道：每日健康手册`
5. `AI 私域增长工作台`
6. `GlowMind：面向美妆电商的 AI 客服与客户分层运营平台`

Upstream visible control/card text begins with:

1. `养生之道：每日健康手册`
2. `销售拜访助手`
3. `智能招聘管理平台`
4. `薪擎 - 业绩提成绩效管理平台`
5. `客户管理系统`
6. `番茄钟`

## Mobile

- Local header stays transparent; upstream keeps the same blurred solid header.
- Local textarea stays `14px`; upstream mobile textarea is `16px`.
- Local submit affordance is still anchor-like; upstream mobile submit button grows to `28x28`.
- Local mobile footer height is about `268px`; upstream mobile footer height is about `489.5px`.
- Upstream mobile SEO/footer container starts at `x=16` with a denser content stack; local footer-link panel remains a narrow isolated block.

## High-Signal Summary

- `/home` drift is not cosmetic only. It spans font system, shared chrome, composer shell, gallery data ordering, and footer architecture.
