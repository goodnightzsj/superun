# Task Spec

## Goal

在已有卡片 fidelity 收口的基础上，继续对齐 `/home` 的 shared chrome、hero 和 footer，压缩与 upstream 首页的可见差异。

## Scope

- 修正 `/home` 顶部 header 和 hero 的几何与容器节奏
- 修正首页 gallery 顶部 sticky 区结构
- 移除 upstream 没有的 docs link 区
- 修正 footer 信息结构与排版
- 保持现有模板卡片和分类筛选行为可用

## Non-goals

- 不改动模板数据源本身
- 不改动登录页、community 页、docs 路由
- 不做 llmdoc 同步，除非后续用户要求

## Acceptance

- `npm run check` 通过
- `npm run build` 通过
- 生成本地和 upstream 的同尺寸首页长截图
- 视觉差异从 shared chrome 级别收敛到卡片内容级别
