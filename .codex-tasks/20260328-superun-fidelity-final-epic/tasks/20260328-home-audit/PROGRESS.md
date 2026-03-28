# Progress Log

## Context Recovery Block

- 任务: 审计 `/home` 本地页与原站差异
- 当前: 审计完成，已写入结构化证据与实施向总结
- 文件: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-home-audit/TODO.csv`
- 证据: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-home-audit/raw/metrics.md`
- 下一步: 在实现波次中优先重做共享排版、hero composer、gallery 顺序与 footer/SEO 模块

## Findings

- Typography drift:
  - Local body font is `Inter`; upstream uses `Camera Plain Variable`.
  - Locale button size and radius drift on both desktop and mobile (`14px/0px` locally vs `16px/4px` upstream).
- Header drift:
  - Local header is visually transparent with no blur.
  - Upstream header is a fixed `rgb(247,247,247)` surface with `blur(24px)`.
- Hero composer drift:
  - Local textarea is transparent, square-cornered, and padded like a custom shell.
  - Upstream textarea sits inside a white rounded input surface with `6px` radius, reduced inner padding, and a visible minimum height.
  - Local submit affordance is an anchor/login text; upstream uses an icon-only button with lower opacity.
- Gallery drift:
  - Upstream active tab keeps the page background and border, while local active tab fills white.
  - Visible card order differs. Upstream currently surfaces items such as `养生之道：每日健康手册`, `销售拜访助手`, `智能招聘管理平台`, `薪擎 - 业绩提成绩效管理平台`, `客户管理系统`; local order starts from `薪擎`, `绩效星`, `招聘流程管理`.
  - Upstream card DOM appears richer than the current local link-card implementation.
- Footer / SEO drift:
  - Local desktop footer height is about `150px` with `48px` top margin.
  - Upstream desktop footer height is about `358px` with `80px` top margin and a white footer background.
  - Mobile footer drift is larger; upstream carries a taller SEO stack and a different container rhythm.

## Implementation Direction

- Introduce a shared public-site typography and chrome token pass first; do not fix `/home` in isolation.
- Rebuild the composer shell to match the upstream white input surface, icon submit control, spacing, and mobile `16px` textarea behavior.
- Re-sequence gallery data and card composition to the upstream order and control stack.
- Replace the current footer-link layout with an upstream-matching SEO/footer module shared by home and login.
