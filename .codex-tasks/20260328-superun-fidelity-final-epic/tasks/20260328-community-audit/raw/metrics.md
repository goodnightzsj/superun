# Raw Metrics

Captured at: 2026-03-28 05:23:33 +0800

Compared URLs:

- local GlowMind: `http://127.0.0.1:4332/web/community-view/snapshot-glowmind`
- upstream GlowMind: `https://www.superun.com/web/community-view/snapshot-glowmind`
- local Health Guide: `http://127.0.0.1:4332/web/community-view/snapshot-health-guide`
- upstream Health Guide: `https://www.superun.com/web/community-view/snapshot-health-guide`

## GlowMind

- Local body font: `Inter`
- Upstream body font: `Camera Plain Variable`
- Local iframe count: `0`
- Upstream iframe count: `1`
- Local hero heading: `赋予美感 以智能的 灵魂`
- Upstream hero heading: none exposed; the route is framed by a shared preview shell instead
- Local top navigation: `功能`, `场景`, `数据价值`, `客户分层`, `进入后台`
- Upstream shell controls from metrics: `新对话`, `复刻创作`, `手机`, `电脑`
- Upstream accessible snapshot additionally exposed:
  - `查看预览`
  - `会话不存在`
  - `查看对话`

## Health Guide

- Local iframe count: `1`
- Upstream iframe count: `1`
- Local iframe source: `https://snapshot--a9628af05d1de701f56fe5805fad58c6.superun.yun`
- Upstream iframe source: `https://snapshot-health-guide.superun.yun`
- Local shared shell controls: none exposed
- Upstream desktop controls: `新对话`, `复刻创作`, `手机`, `电脑`
- Upstream mobile controls: `新对话`, `复刻创作`, `查看对话`

## High-Signal Summary

- The upstream community layer is now a shared preview shell with iframe-backed content, even for `snapshot-glowmind`.
- This invalidates the old local assumption that the first few community routes should remain bespoke recreations.
