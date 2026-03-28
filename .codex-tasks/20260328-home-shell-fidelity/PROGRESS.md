# Progress Log

## Context Recovery Block

- 任务: 收口 `/home` shared chrome、hero 和 footer 的剩余 fidelity 差异
- 形态: full-single
- 前置: `.codex-tasks/20260328-home-card-fidelity/`
- 进度: 3/3
- 当前: 已完成实现与截图验证
- 下一步: 若继续，可专门处理卡片内容数据和个别缩略图素材差异

## Findings

- 本地上一轮最大的偏差已经不是卡片 gap，而是 page shell:
  - hero composer 比 upstream 更矮、更窄
  - `/home` 额外挂了 docs bottom-links，upstream 没有
  - footer 仍是旧的分栏/法律信息排版，不是 upstream 的两段式结构
  - header 还残留旧的 52px override，而 upstream 当前首页是 64px fixed bar
- upstream 当前首页关键结构来自归档 `page.html`:
  - `main` 使用 `container mx-auto`
  - hero section 使用 `pt-[150px] pb-[80px]`
  - input 容器使用 `max-w-[min(600px,100%)]`、`min-h-[132px]`、`rounded-xl`
  - gallery 顶部是 `top:64px` 的 sticky 壳层
  - footer 是 `mt-20` + `container mx-auto py-[68px] px-[68px]`

## Implemented

- `src/pages/home.astro`
  - 移除了 `BottomLinks` 和其对应 docs 数据计算
  - 将 gallery 顶部改成 upstream 风格的 sticky header 壳层
  - 增加 desktop/mobile tabs 的分离结构，并保留现有筛选脚本兼容
- `src/components/Header.astro`
  - 增加中间 spacer，使登录按钮位置更接近 upstream
- `src/components/Footer.astro`
  - 改成两段式 footer 结构
  - footer logo 改回非 compact 版本
  - `企微` 以纯文本呈现，非假链接
- `src/styles/global.css`
  - 将 shared header 改回 64px fixed chrome
  - 将 home hero/composer 几何改回 upstream 当前值
  - 将 home gallery 调整为 sticky topbar + `pt:48 / pb:48`
  - 将 footer 改成 `68px` 内边距、两组 240px link panel 和无分隔线 legal 区

## Validation

- `npm run check` 通过
- `npm run build` 通过
- 生成截图:
  - `raw/screenshots/home_local_after.png`
  - `raw/screenshots/home_upstream_live.png`
- 同尺寸像素差异:
  - `full_mean_abs_diff = 11.82`
  - `hero = 2.12`
  - `gallery = 17.17`
  - `footer = 1.64`
- 对比上一轮 `full_mean_abs_diff ≈ 40.39`，shared chrome 级差异已经显著收敛
