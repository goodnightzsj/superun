# Progress Log

## Context Recovery Block

- 任务: 审计社区页本地复刻路由与 iframe 路由的本地页与原站差异
- 当前: 审计完成，已确认原站社区页架构已相对本地方案发生漂移
- 文件: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-community-audit/TODO.csv`
- 证据: `.codex-tasks/20260328-superun-fidelity-final-epic/tasks/20260328-community-audit/raw/metrics.md`
- 下一步: 在实现波次中先做 shared shell rebaseline，再决定是否保留旧本地复刻页作为 fallback

## Findings

- This page group is no longer a pure fidelity-polish task. The upstream architecture changed.
- Representative local recreation drift:
  - Local `snapshot-glowmind` is still a handcrafted landing page with local nav links, hero copy, CTA links, and a `Built with superun` badge.
  - Upstream `snapshot-glowmind` is now an iframe-backed preview shell. The audited accessible snapshot showed `新对话`, `查看预览`, `会话不存在`, `复刻创作`, `查看对话`, and an iframe container.
  - Metric difference is decisive: local `iframeCount=0`; upstream `iframeCount=1`.
- Representative iframe route drift:
  - Local `snapshot-health-guide` is an iframe route, but it lacks the upstream shared shell controls.
  - Local iframe source is `https://snapshot--a9628af05d1de701f56fe5805fad58c6.superun.yun`; upstream uses `https://snapshot-health-guide.superun.yun`.
  - Upstream desktop shell exposes `新对话`, `复刻创作`, `手机`, `电脑`; upstream mobile shell exposes `新对话`, `复刻创作`, `查看对话`.
- Shared-system drift remains present here too:
  - Local community pages still use `Inter`.
  - Upstream community shell uses `Camera Plain Variable`.

## Implementation Direction

- Rebaseline community pages to the current upstream shared preview shell instead of trying to cosmetically patch the existing local-recreation strategy.
- Treat local handcrafted pages such as `snapshot-glowmind` as fallback/demo assets, not the primary runtime route, unless there is an explicit product reason to diverge from the upstream site.
- Normalize iframe host naming and device-toggle behavior against the current upstream shell.
