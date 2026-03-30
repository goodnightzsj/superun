# Progress Log

## Context Recovery Block
- 任务: 调整社区页策略为“前三个本地复刻，其余优化 iframe”，修复登录 Google/更多交互，并在无明显差异后部署 pass-9
- 形态: epic
- 进度: 4/4
- 当前: pass-9 follow-up 已完成；其原始 follow-up deploy 为 `cbfb4aff-ab40-4390-a7a5-dc90855f5ad1`，但当前 live Workers 已后续推进到 `f20ff594-e748-404f-9162-fa1735f7ebd2`，详见 `.codex-tasks/20260328-superun-state-unify/raw/live-state.json`
- 文件: `.codex-tasks/20260327-superun-ui-fidelity-pass-9-epic/SUBTASKS.csv`
- 下一步: 若继续抽检，则从 live workers 继续对 `/home`、`/web/login`、`/web/community-view/*` 做 spot check

## Notes
- Supersedes the unfinished deploy portion of pass-8 because the user changed community/login requirements before release.
- Core local recreations kept: `snapshot-glowmind`, `snapshot-ai-growth-workbench`, `snapshot-hr-payroll-suite`.
- Non-core community routes now use the flat full-screen iframe shell with a pulse-only loader and reveal only after the iframe `load` event.
- Pass-9 historical follow-up deploy version: `cbfb4aff-ab40-4390-a7a5-dc90855f5ad1`; current live version is later `f20ff594-e748-404f-9162-fa1735f7ebd2`.
- Follow-up public acceptance in this environment used curl plus deployed HTML/CSS marker inspection because Playwright and pinchtab browser sessions were unavailable.
