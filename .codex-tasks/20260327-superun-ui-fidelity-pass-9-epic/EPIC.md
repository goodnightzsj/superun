# Pass-9 Epic

## Goal
在 pass-8 基础上调整策略：保留最初三个社区页面的本地真实复刻，其余社区页面改回优化后的 iframe 原页加载；修复登录页 Google 按钮图标与“更多”展开行为；完成本地与目标站 UI/交互对比，确认无明显差异后再部署远端并同步文档。

## Scope
- 保留本地复刻：`snapshot-glowmind`、`snapshot-ai-growth-workbench`、`snapshot-hr-payroll-suite`
- 其余社区详情页恢复为 iframe 加载 `communityPreviewSrc` / `templatePageSrc`
- iframe 必须限制在视口内，隐藏宿主痕迹，降低加载卡顿感
- 登录页修复：Google icon 显示；展开 Google 后“更多”按钮消失
- 全量复验 home / login / community 的 UI 精度与交互
- 通过后部署 Cloudflare Workers，并最小同步 llmdoc

## Constraints
- 仅在浏览器复验确认无明显差异后部署
- truth-source 以本 epic 目录为准
- 若远端尚未部署，不得把本轮标记为完成
