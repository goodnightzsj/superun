# Progress Log

## Context Recovery Block

- 任务: 审计 `/web/login` 本地页与原站差异
- 当前: 审计完成，已写入结构化证据与实施向总结
- 文件: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-login-audit/TODO.csv`
- 证据: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-login-audit/raw/metrics.md`
- 下一步: 在实现波次中保留当前 redirect sanitization 逻辑，同时重做 CTA 语义与视觉系统

## Findings

- Behavior parity is already good:
  - Local malicious `redirectUrl=https://evil.com/path` still resolves submit navigation to `/home`.
  - Local and upstream both hide `更多` after click and reveal Google continuation.
- Typography and chrome drift:
  - Local body font is `Inter`; upstream uses `Camera Plain Variable`.
  - Locale button still drifts at `14px/0px` locally vs `16px/4px` upstream.
- CTA semantics drift:
  - Local WeChat CTA is an anchor; upstream uses a button.
  - Local submit affordance is an anchor; upstream uses a button-styled control.
  - Local WeChat border is effectively transparent; upstream uses a visible `1px solid rgb(235,235,235)` border.
- Structure drift:
  - Upstream login shell exposes a top-left back-home brand button, then locale, then the auth card.
  - Upstream also renders bottom `最新内容 / 推荐模板 / SEO` content under the auth card; local currently lacks that matching stack.
- Mobile and desktop are aligned in drift direction: the issue is not breakpoint-specific logic, but shared component semantics and tokens.

## Implementation Direction

- Keep the existing redirect whitelist and `更多 -> Google` behavior because they already match the upstream interaction outcome.
- Replace anchor-based auth CTAs with semantic button controls while preserving current local navigation wiring in JS.
- Align brand/back-home chrome, locale button, auth card spacing, input styling, and bottom SEO/latest modules with the upstream shared system.
