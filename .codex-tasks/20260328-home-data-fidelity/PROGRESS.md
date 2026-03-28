# Progress Log

## Context Recovery Block

- 任务: `/home` data fidelity 收口
- 形态: full-single
- 前置: `.codex-tasks/20260328-home-shell-fidelity/`
- 进度: 4/4
- 当前: 已继续收口空图卡 DOM，并完成 llmdoc 同步
- 下一步: 若继续，可专门处理 live 页尾外链 docs 区与本地直链 docs 区的语义差别，以及低位卡片区的极小灰阶差异

## Findings

- `/home` desktop 版主要剩余差异不在 shell，而在卡片数据层:
  - `AI虚拟同事平台`、`HR决策驾驶舱`、`大客户跟进系统`、`聚才云`、`客满中心` 在 live desktop 中应为 `mobile`
  - 第 25 到 40 张卡在 live desktop 中没有实际 preview image，呈现为空媒体位
- live 当前底部有第二层 docs 导流区，包含 `最新内容 / 推荐模板` tabs 和 15 条帮助文档链接
- 这一层结构在仓库里已有 `BottomLinks.astro` 与对应样式，只是此前从 `/home` 移除了

## Implemented

- `src/data/template-directory.json`
  - 将第 9、15、21、22、23 张卡片的 `deviceType` 改为 `mobile`
  - 将第 25 到 40 张卡片的 `previewImage` 置空，改为占位媒体区
- `src/pages/home.astro`
  - 重新接回 `BottomLinks`
  - 恢复 live 使用的底部文档排序 `homeDocOrder`
- `src/components/TemplateCard.astro`
  - 对无 `previewImage` 的 desktop/mobile 卡片改为渲染 placeholder 壳层，而非空 `img`
- `src/styles/global.css`
  - 新增 empty-card placeholder 样式
  - pulse 动画改为对齐 live `animate-pulse` 的 2s cubic-bezier 节奏
- `llmdoc/architecture/public-site-architecture.md`
  - 补 `/home` 底部 docs 直链与 empty-card placeholder 壳层的运行时事实
- `llmdoc/reference/routes.md`
  - 补 `/home` 当前直达 `/docs/[slug]` 的 bottom-links 入口与空图卡占位策略

## Validation

- `npm run check` 通过
- `npm run build` 通过
- Playwright 截图:
  - `raw/screenshots/home_local_after.png`
  - `raw/screenshots/home_upstream_live.png`
- 同口径 desktop diff:
  - `full_mean_abs_diff = 7.96`
  - `hero = 0.56`
  - `cards = 10.08`
  - `footer = 7.29`
- 对比上一轮 data pass `full_mean_abs_diff = 8.67`，整体差异继续下降
- 对比 shell 收口阶段 `full_mean_abs_diff = 11.82`，累计差异继续下降
