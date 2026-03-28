# Task Spec

## Goal

对齐 `/home` 的 live desktop 卡片数据与底部导流区，缩小本地与原站的可见差异。

## Scope

- 校正 `src/data/template-directory.json` 中与 live desktop 不一致的 `deviceType` 与 `previewImage`
- 恢复 `/home` 底部第二层 docs 导流区，并按 live 顺序排列
- 通过 Playwright 截图与像素 diff 复核结果

## Non-goals

- 不重做 `/home` 的 hero/header 基础结构
- 不处理移动端 masonry 版式
- 不同步 `llmdoc`

## Acceptance

- `npm run check` 通过
- `npm run build` 通过
- Playwright 能拿到本地与原站 `/home` 的同口径 desktop 截图
- 本地卡片设备形态与尾部占位图策略和 live desktop 一致
