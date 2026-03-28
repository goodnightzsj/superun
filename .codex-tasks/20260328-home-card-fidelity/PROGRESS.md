# Progress Log

## Context Recovery Block

- 任务: 收口 `/home` 卡片栅格与卡面渲染的剩余 fidelity 差异
- 形态: full-single
- 进度: 3/3
- 当前: 任务完成，已把 upstream 首页卡片区的关键结构和节奏映射回本地
- 文件: `.codex-tasks/20260328-home-card-fidelity/TODO.csv`
- 下一步: 若继续推进，可专门做 `/home` 容器宽度与 tabs/header 的逐像素对比收口

## Findings

- upstream 归档首页模板区显示，真实卡片区不是简单的静态图片网格：
  - grid 使用 `gap-y-[44px] gap-x-6 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`
  - `Show More` 容器使用 `pt-[44px]`
  - hover CTA 是 `56 x 34`、`rounded-[8px]`
  - `description` 使用 `text-[13px]`、`mt-2`、`leading-[1.5]`、`line-clamp-2`、`break-words`
  - `deviceType=mobile` 的卡片不是全幅截图，而是灰底媒体区中的居中手机壳预览
- 本地此前仍有几个显著偏差：
  - `Show More` 间距只有 16px
  - hover CTA 被后置覆盖层压成了 `60 x 32`、圆角 6px
  - mobile template 仍用全幅截图，没有 phone-frame treatment

## Implemented

- 在 `src/components/TemplateCard.astro` 中为 mobile template 渲染专门的 `template-card__device-preview` / `template-card__device-frame` / `template-card__device-screen` 结构
- 在 `src/styles/global.css` 中对齐了首页卡片关键节奏：
  - hover CTA 改回 `56 x 34`、圆角 8px、右上角贴边布局
  - `Show More` 区改成 44px 顶部留白，按钮改成 12px 文案和更接近 upstream 的横向 padding
  - description 增加 `word-break: break-word`
  - mobile template 卡片增加 phone-frame 阴影、圆角和 `translateY(32%)` 的上游式预览效果

## Validation

- `npm run check` 通过
- `npm run build` 通过
- 新的本地首页长截图输出到 `raw/screenshots/home_local_after.png`
- 像素级全页 diff 仍然噪声较大，不适合作为唯一判断依据；但本轮调整的数值和结构都直接来自 upstream 归档 HTML/CSS
