# Progress Log

## Context Recovery Block

- 任务: 澄清 docs 入口与旧复刻页状态，并继续收口 `/web/login` 和上游之间的剩余视觉漂移
- 形态: full-single
- 进度: 4/4
- 当前: 任务完成，已完成 docs 入口说明、旧复刻代码定位、登录页几何收口与交互校验
- 文件: `.codex-tasks/20260328-login-docs-followup/TODO.csv`
- 下一步: 若继续推进，可单独处理 `home` 卡片栅格与原站之间的剩余细微间距偏差

## Findings

- 当前本地 `/docs/[slug]` 的显式入口在 `/home` 底部的 `BottomLinks` 组件；链接直接指向 `/docs/<slug>`。上游当前公开站没有明显的可见导航入口，更多像是依赖隐藏 SEO footer、搜索引擎收录或直接 URL 访问。
- 旧的本地高保真 community 复刻页面已经不在运行时路由里了；当前 `src/pages/web/community-view/[slug].astro` 只走统一的详情壳层 + iframe 预览。
- 但旧复刻代码没有完全消失，主要残留在 `src/styles/global.css` 的本地页面样式块里，比如 `community-local--glowmind`、`community-local--goose`、`community-local--nexus` 以及成套的 `glowmind-*` 样式。也就是说，运行时 markup 已移除，样式遗留仍在。
- 登录页桌面端已完成高信号几何收口：
  - `brand`、`wechat`、`更多`、`tab`、验证码行、提交按钮和 `创建团队` 的坐标与上游对齐
  - `手机号` 输入行高度、验证码按钮宽度、`更多` 高度和底部 CTA 锚点已回到上游节奏
  - 剩余差异只剩 locale 文本固有宽度和 heading 文字宽度的 2-3px 级别差异，不影响视觉判断

## Implemented

- 调整了 `src/styles/global.css` 中登录页桌面覆盖层：
  - 恢复 `.auth-shell` 的横向 padding，使 brand/lang 起点与上游一致
  - 移除 `.auth-shell__main` 额外横向内边距，避免再次内收
  - 压缩 locale 按钮垂直 padding，使其高度回到 28px
  - 重新校准 `.auth-card` 的顶部偏移与主 gap
  - 调整手机号输入高度、验证码按钮宽度与提交按钮上边距
  - 维持 `创建团队` 使用底部自动撑开，使其固定在页面底部区域

## Validation

- `npm run check` 通过
- `npm run build` 通过
- Playwright 对比 upstream 与 local login 的关键元素几何，结果记录在 `raw/metrics.md`
- Playwright 验证：
  - 点击 `更多` 后会显示 `使用 Google 继续`
  - 访问 `/web/login?redirectUrl=https://evil.com/x&prompt=测试Prompt` 后点击 `登录 / 注册`，会安全回退到 `/home?prompt=测试Prompt`
