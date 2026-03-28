# Progress Log

## Context Recovery Block

- 任务: 将 `community-view` 从 legacy local recreation 策略重定标到 live shared shell
- 状态: DONE
- 验证: `npm run check` / `npm run build`

## Notes

- `src/pages/web/community-view/[slug].astro` was rewritten to use a unified shared shell.
- The old local handcrafted branches for GlowMind / Goose / Nexus were removed from the route layer.
- The shell now mirrors the current upstream accessibility tree:
  - topbar: `新对话` + `查看预览`
  - body: empty-state sidebar with `会话不存在` + `复刻创作`
  - main preview area: slug-host iframe + trailing `查看对话`
- The iframe source now follows the current upstream slug host pattern, including the current live 404 behavior for `snapshot-glowmind`.
