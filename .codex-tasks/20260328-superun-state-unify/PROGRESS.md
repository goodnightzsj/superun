# Progress Log

## Context Recovery Block

- 任务: 统一本地代码、llmdoc、codex-task 与当前 live Workers 状态
- 形态: single-full
- 当前: 已完成。docs 真相源已收敛到 `src/data/site.ts`，当前 live version 已更新为 `9a89302d-f18d-4175-ba51-c69b88f01cbe`，旧 pass-9 任务已明确标记其 `cbfb4aff-ab40-4390-a7a5-dc90855f5ad1` 仅为历史 follow-up deploy
- 文件: `.codex-tasks/20260328-superun-state-unify/TODO.csv`
- 下一步: 若继续推进，可考虑提交这些统一修正，或进一步清理历史 task 目录中的过期引用

## Notes

- Current live Workers version observed after the final fidelity deploy is `9a89302d-f18d-4175-ba51-c69b88f01cbe`.
- The latest pass-9 child deploy evidence remains historically valid for `cbfb4aff-ab40-4390-a7a5-dc90855f5ad1`, but it is no longer the current live version.
- The running docs route reads `src/data/site.ts`; the inactive `src/content.config.ts` and `src/content/docs/*.md` mirror path has been removed to avoid dual truth.
- `npm run check` and `npm run build` passed after the cleanup with 0 errors and 0 warnings.
- Representative local build outputs and the live Workers pages matched byte-for-byte for `/home`, `/web/login`, `/web/community-view/snapshot-glowmind`, `/web/community-view/snapshot-health-guide`, `/docs/what-is-superun`, and `/_astro/_slug_.BGDBVYni.css`.
