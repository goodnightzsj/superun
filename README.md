# superun-public-site

高保真复刻 `superun` 公开站点的一套可运行前端工程。

这个项目不是对页面做静态临摹，而是把 `https://www.superun.com/` 的公开可见部分，重建成一套可开发、可部署、可校验、可持续维护的 Astro + Cloudflare Workers 项目。

## What It Rebuilds

本项目复刻的是 `superun` 的公开站点链路，包括：

- `/home` 首页
- `/web/login` 登录页
- `/web/community-view/[slug]` 模板预览页
- `/templates` 模板目录页
- `/templates/[slug]` 模板详情页
- `/docs/[slug]` 文档页

不包含：

- 登录后的 AI builder 工作区
- 真实用户鉴权
- 生产后端 API
- CMS / 管理后台

## Target Site

复刻目标站点：

- `https://www.superun.com/`

更准确地说，这个仓库复刻的是 `superun` 的公开营销站、公开模板浏览链路和公开文档链路，而不是完整产品后台。

## Built With AI

这个项目主要由 `Codex（基于 GPT-5 系列的编码代理）` 驱动完成，用于：

- 页面结构重建
- 路由与数据模型整理
- 视觉与交互高保真对齐
- 原站逻辑核查
- 部署与验收

## Skills Used

为了把“长任务执行、复刻实现、文档同步”串起来，项目重点使用了这些 Skill：

- `taskmaster`
  - 用于拆解长任务、维护 `.codex-tasks/` 执行链路和验收记录。
- `ui-ux-pro-max`
  - 用于首页、登录页、community 预览页的视觉和交互收口。
- `llmdoc-maintainer`
  - 用于同步 `llmdoc`，保证代码、文档、部署状态一致。

## MCP / Tooling

为了加快复刻速度并提高准确度，项目重点依赖了这些 MCP / 工具链：

- `Playwright MCP`
  - 用于本地页面与原站页面的 DOM、交互和关键行为验证。
- `DOM / CSS 抓取链路`
  - 用于提取原站可观察结构、样式和页面行为，作为复刻基线。
- `Wrangler + Cloudflare Workers`
  - 用于将 Astro 静态产物部署到线上环境。

## Stack

- `Astro`
- `TypeScript`
- `Cloudflare Workers`
- `Wrangler`

## Why This Project Matters

这个项目想展示的不是“AI 生成了一页像样的 HTML”，而是：

- 如何用 AI 编码代理快速重建一个真实在线站点的公开部分
- 如何把复刻结果做成真正可维护的工程项目
- 如何把代码、任务、文档、部署状态统一起来
- 如何把“高保真复刻”变成一条可重复执行的 workflow

## Project Status

当前已完成：

- 公开站路由重建
- 首页、登录页、模板页、文档页实现
- community 预览链路对齐
- 本地构建校验
- Cloudflare Workers 部署
- `llmdoc` 与 `.codex-tasks` 同步

## Local Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## Deploy

```bash
npm run deploy
```

## Live URL

- `https://superun-public-site.sub-store.workers.dev`

## Summary

`superun-public-site` 是一个利用 `Codex + Skill + MCP` 快速完成的公开站高保真复刻项目。

它展示的是一条完整链路：从目标站点分析、页面重建、行为对齐，到文档沉淀和线上部署，而不只是“做出一个看起来差不多的页面”。
