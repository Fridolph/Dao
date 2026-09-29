# Dao

> 一个关于道学、易经与传统智慧的导读型知识站。
> 先做门，后做殿——帮助现代人进入传统智慧，再在真实阅读与沉淀中慢慢长出自己的理论之树。

[![VitePress](https://img.shields.io/badge/VitePress-1.6.3-646cff?logo=vitepress)](https://vitepress.dev)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4fc08d?logo=vuedotjs)](https://vuejs.org)
[![PWA Ready](https://img.shields.io/badge/PWA-ready-5a0fc8?logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-active-222?logo=github)](https://fridolph.github.io/Dao/)

---

## 这是什么

**Dao** 是一个以传统文化、道学、易经为入口的 **导读型资料库**，由 [VitePress](https://vitepress.dev) 驱动，部署于 GitHub Pages。

它不是百科、不是论文仓、也不是现代图书的搬运站。它的核心任务只有一件：

> 帮人找到进入「道 / 易经 / 传统文化」的入口，并提供可追踪的阅读路径。

当前阶段：**首版导读型资料库建设期**。优先搭结构、建阅读入口、沉淀首批导读内容。

---

## 站点结构

```
首页 ─┬─ 开始（站点导览 / 路径索引）
      ├─ 阅读地图（学习计划 / 推荐书单）
      ├─ 道枢典藏（道家）
      │   ├─ 入门三经（清静经 / 阴符经〔通行本 · 出土全本〕/ 太上感应篇）
      │   ├─ 道德经 · 通行本（81 章）
      │   ├─ 道德经 · 帛书甲本（81 章）
      │   ├─ 庄子（33 篇，已上线 14 篇）
      │   ├─ 列子（骨架，待导入原文）
      │   └─ 道教经典（天隐子 / 文昌阴骘文 / 坐忘论）
      ├─ 立志明德
      │   ├─ 四书（大学 / 中庸 / 论语 / 孟子）
      │   ├─ 五经（诗经 / 尚书 / 礼记 / 春秋）
      │   ├─ 千字文
      │   └─ 了凡四训
      ├─ 易经
      │   ├─ 易学基础（基础入口 / 学习方法 / 核心概念 / 读卦框架）
      │   ├─ 文王六十四卦（卦辞 / 彖传 / 象传 / 爻辞）
      │   ├─ 孔子十翼（系辞上下 / 文言 / 说卦 / 序卦 / 杂卦）
      │   ├─ 正易心法（前序 / 正文 42 章 / 后序与跋）
      │   ├─ 义理（总览，待展开）
      │   └─ 卜筮 · 梅花易数（推进中）
      ├─ 专题
      │   ├─ 传统智慧体系（哲学底座 / 符号系统 / 时间坐标系 / 能量状态系统 / 通识）
      │   └─ 传统常识（节气 24 / 生肖 12 / 时辰 / 干支 / 五行）
      ├─ 考据（道德经通行本 vs 帛书本逐章对照）
      ├─ 字词释义字典（跨页统一的字词释义来源）
      ├─ 我的解读（个人笔记与理解）
      └─ 关于（关于我 / 关于 Dao）
```

---

## 内容进度

> 口径：**原典层**＝原文录入；**释义层**＝段级／篇级白话解释；**解读层**＝三问解读、现代重述、我的理解。
> 本站如实标注完成度——**原典上线 ≠ 解读完成**。逐篇细账见 [`dev/content-progress.md`](dev/content-progress.md)。

### 道枢典藏（道家）

| 板块 | 总量 | 原典层 | 释义 / 解读层 | 状态 |
|------|:----:|:------:|:------------:|------|
| 入门三经 | 3 部 | ✅ 3/3 | ✅ 释义 + 解读 | 已完成 |
| 道德经 · 通行本 | 81 章 | ✅ 81/81 | ✅ 逐章三问 + 现代重述 + 我的理解（段级释义 80/81） | 已完成 |
| 道德经 · 帛书甲本 | 81 章 | ✅ 81/81 | ⚠️ 仅有模板化导语，「现代重述」「我的理解」标注「待整理」 | **实质只有原文** |
| 庄子 | 33 篇 | 🔵 14/33 | ⚪ 无 | **已上 14 篇**（内七篇 + 外篇至《天运》），**仅原文层** |
| 列子 | 8 篇 | ⚪ 骨架 | ⚪ 无 | 待导入原文 |
| 道教经典 | 3 部 | ✅ | ✅ 天隐子（逐篇导读）/ 阴骘文（典故 + 导读）/ 坐忘论（7 章精读） | 已完成 |

### 易经

| 板块 | 总量 | 原典层 | 释义 / 解读层 | 状态 |
|------|:----:|:------:|:------------:|------|
| 易学基础 | 3 篇 + 入口 | ✅ | ✅ | 已完成 |
| 文王六十四卦 | 64 卦 | ✅ 64/64（卦辞 / 彖传 / 象传 / 爻辞含小象） | 🔵 **已整理 24 卦，40 卦待完善** | **进行中** |
| 孔子十翼 | 6 篇 · 210 段 | ✅ 6/6 | ✅ 逐段 label + 白话释义 | 已完成 |
| 正易心法 | 前序 + 42 章 + 后序跋 · 263 段 | ✅ | ✅ 逐段 label + 白话释义 + 三问解读 | 已完成 |
| 义理 | — | ⚪ | ⚪ | 仅总览页，待展开 |
| 卜筮 · 梅花易数 | 3 阶段 + 序 | 🔵 | 🔵 | 推进中 |

> 六十四卦的进度口径来自站点 [`hexagram-progress.mjs`](src/.vitepress/data/hexagram-progress.mjs)（🟡 待完善 / ✍️ 已添加我的解读），它同时驱动卦目录页的「整理进度」列。

### 立志明德

| 板块 | 总量 | 原典层 | 释义 / 解读层 | 状态 |
|------|:----:|:------:|:------------:|------|
| 四书（大学 / 中庸 / 论语 / 孟子） | 68 篇 · 章 | ✅ | ✅ 段级释义 + 三问 | 已完成 |
| 五经（诗经 / 尚书 / 礼记 / 春秋） | 424 篇 | ✅ | ⚠️ 仅篇级导读三问，无段级释义 | 原典层完成，释义待补 |
| 千字文 | 一页承载全篇（8 节 125 段） | ✅ | ✅ 段级释义 | 已完成 |
| 了凡四训 | 4 章 | ✅ | ✅ 三问 + 现代重述 + 我的理解 | 已完成 |

### 专题 · 常识 · 考据 · 工具

| 板块 | 总量 | 状态 |
|------|:----:|------|
| 传统智慧体系（哲学底座 / 符号系统 / 时间坐标系 / 能量状态系统 / 通识） | 40 页 | ✅ 已上线 |
| 传统常识（节气 24 / 生肖 12 / 时辰 / 干支 4 / 五行） | 43 页 | ✅ 已上线 |
| 考据（道德经通行本 vs 帛书本逐章对照） | 81 章 + 总览 | ✅ 已上线 |
| 字词释义字典（跨页统一引用） | 单一来源 | ✅ 已上线 |
| 我的解读 / 笔记 | — | ⚪ 空着陆页，学有所感时随时记 |

---

## 里程碑 & 路线图

### M1：站点骨架稳定（4/5）

- [x] 建立 VitePress 基础站点
- [x] 建立公开内容目录
- [x] 建立路径与别名规范
- [x] 建立开发文档区
- [ ] 完成首页第一版设计增强

### M2：首批内容可读（4/4）

- [x] 完成《道德经》逐章解读（通行本 81 章）
- [x] 完成「易学基础」（基础入口 / 学习方法 / 核心概念 / 读卦框架）
- [x] 完成专题收敛——旧单页专题并入「传统智慧体系」
- [x] 完成卦页样板并扩展至 64 卦原典层（解读层 24/64）

### M3：结构化索引成型（2/4）

- [x] 建立六十四卦 slug 对照表（`data/yijing-hexagrams.mjs`）
- [x] 建立内容注册表与字词释义字典（`content-registry.mjs` 122 条 / `data/glossary.mjs`）
- [ ] 建立专题与原典双向链接
- [ ] 建立首批文档交叉索引

### M4：社区与互动准备（0/4）

- [ ] 选型评论系统
- [ ] 设计评论挂载策略
- [ ] 补充贡献说明
- [ ] 建立内容提议与改进 issue 模板

### M5：Dao 理论预留区（0/3）

- [ ] 识别可沉淀的核心命题
- [ ] 区分公共知识与自有理论
- [ ] 形成第一版理论区结构草案

> 详细任务拆解见 [`dev/site-task-board.md`](dev/site-task-board.md)

---

## 技术栈

| 层 | 技术 |
|---|---|
| 站点框架 | [VitePress 1.6.3](https://vitepress.dev) |
| 前端框架 | [Vue 3](https://vuejs.org) + Composition API |
| 样式 | CSS 自定义属性 + VitePress 主题扩展 |
| 图片查看 | [ViewerJS](https://github.com/fengyuanchen/viewerjs) |
| PWA | [vite-plugin-pwa](https://vite-pwa-org.netlify.app) |
| 构建 | Vite + 自定义内容校验脚本 |
| 包管理 | pnpm |
| 部署 | GitHub Actions → GitHub Pages |

## 自定义组件

项目封装了 **48 个** 自定义 Vue 组件，按功能分 7 组：

- **dao-reading（20）**：阅读体验组件，含 `DaoReadingPrelude`（导读序言）、`DaoTextReading`（原文阅读）、`DaoOriginalReading`（竹简/常规双模式原文）、`DaoParallelReading`（逐句对照）、`DaoLineGuide`（原文字句引读）、`DaoKeywordCards`（生僻字/关键词统一卡片）、`DaoPinyinGlossary`（拼音词表）、`DaoTraditionAppendix`（传承附录）等
- **dao-home（10）**：首页组件，含 `DaoHomeHero`、`DaoHomeDoors`、`DaoHomeReading`、`DaoHomeNotes` 等
- **dao-kaoju（8）**：考据组件
- **dao-changshi（5）**：传统常识组件
- **dao-sections（3）**：着陆页组件
- **dao-doc（1）** / **dao-tools（1）**：文档页与工具组件

---

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务（默认 http://localhost:5049）
pnpm run docs:dev

# 内容注册表校验
pnpm run docs:validate

# 生产构建
pnpm run docs:build

# 预览构建产物
pnpm run docs:preview
```

## 项目布局

```
Dao-vitepress/
├── src/                          # 站点源码（VitePress 内容与组件）
│   ├── .vitepress/
│   │   ├── config.ts             # VitePress 配置（导航/侧边栏/PWA）
│   │   ├── content-registry.mjs   # 全局内容注册表（122 条）
│   │   ├── data/                  # 章节/卦序数据定义
│   │   └── theme/
│   │       ├── index.ts           # 主题入口（注册全局组件）
│   │       ├── styles.css         # 全局样式体系
│   │       └── components/        # 自定义组件（48 个）
│   │           ├── dao-home/       # 首页组件（10）
│   │           ├── dao-reading/    # 阅读体验组件（20）
│   │           ├── dao-kaoju/      # 考据组件（8）
│   │           ├── dao-changshi/   # 传统常识组件（5）
│   │           ├── dao-sections/   # 着陆页组件（3）
│   │           ├── dao-doc/        # 文档页组件（1）
│   │           └── dao-tools/      # 工具组件（1）
│   ├── index.md                   # 首页（<DaoHome />）
│   ├── start/                     # 开始与导览
│   ├── roadmap/                   # 阅读地图
│   ├── daoism/                    # 道枢典藏（道家）
│   │   ├── starter-texts/         # 入门三经（清静经 / 阴符经 / 太上感应篇）
│   │   ├── dao-de-jing/           # 道德经·通行本（81 章）
│   │   ├── dao-de-jing-boshu/     # 道德经·帛书甲本（81 章）
│   │   ├── zhuang-zi/             # 庄子（33 篇，已上 14 篇）
│   │   ├── lie-zi/                # 列子（骨架）
│   │   └── daoist-classics/       # 道教经典（天隐子 / 文昌阴骘文 / 坐忘论）
│   ├── yijing/                    # 易经
│   │   ├── basics/                # 易学基础（入口 / 学习方法 / 核心概念 / 读卦框架）
│   │   ├── hexagrams/             # 文王六十四卦（64 页）
│   │   ├── shi-yi/                # 孔子十翼（6 篇 210 段）
│   │   ├── zheng-yi-xin-fa/       # 正易心法（前序 + 42 章 + 后序与跋）
│   │   ├── yi-li/                 # 易理（总览）
│   │   └── meihua-yishu/          # 梅花易数（推进中）
│   ├── lizhimingde/               # 立志明德
│   │   ├── sishu-wujing/          # 四书五经（492 篇·章）
│   │   ├── qianziwen/             # 千字文（一页承载全篇）
│   │   └── liaofan-sixun/         # 了凡四训（4 章）
│   ├── topics/                    # 专题（traditional-wisdom 传统智慧体系）
│   ├── changshi/                  # 传统常识（节气 / 生肖 / 时辰 / 干支 / 五行）
│   ├── kaoju/                     # 考据（道德经通行本 vs 帛书本）
│   ├── reference/glossary/        # 字词释义字典
│   ├── roadmap/                   # 阅读地图
│   ├── notes/                     # 我的解读
│   ├── about/                     # 关于我 / 关于 Dao
│   └── standards/                 # 内部规范
├── dist/                          # VitePress 构建产物（本仓不提交，由 CI 同步至产物仓 docs/）
├── dev/                           # 开发文档（不对读者开放）
│   ├── site-task-board.md         # 全站任务看板
│   ├── milestones.md              # 里程碑
│   ├── changelog.md               # 变更日志
│   ├── contribution-log.md        # 贡献记录
│   ├── decisions.md               # 关键决策记录
│   ├── templates/                 # 文档模板
│   └── logs/                      # 共学交接日志
├── scripts/                       # 脚手架与同步脚本
│   ├── validate-content-registry.mjs
│   ├── scaffold-content.mjs
│   ├── sync-built-site-to-dao.mjs
│   └── lib/                       # 共享工具函数
├── package.json
├── pnpm-lock.yaml
```

> 说明：`AGENTS.md` 早期写的 `docs/` 产物目录已更名实际为 `dist/`；本仓只保留源码，构建产物由 GitHub Actions 构建后通过 `scripts/sync-built-site-to-dao.mjs` 同步到公开产物仓 `Fridolph/Dao` 的 `docs/` 目录。

---

## 内容分层原则

项目始终按三层理解并归位内容：

1. **公共知识层** — 原典导读、阅读顺序、术语解释、学习地图（面向初学者，重在帮助进入）
2. **个人解读层** — 三问解读、学习笔记、专题文章（带有作者视角，与原典层区分清楚）
3. **Dao 理论层** — 成熟方法论与核心命题（暂未开始，需要更高沉淀度后再开放）

---

## 参与贡献

本项目目前以 **个人学习与沉淀** 为主，欢迎通过以下方式参与：

- 提交 [Issue](https://github.com/Fridolph/Dao-vitepress/issues) 反馈内容建议、站点改进意见或发现的问题
- 讨论某个主题、概念或阅读路径的改进方案

> 更详细的协作规范见 `AGENTS.md`。

---

## 相关链接

- 🌐 公开站点：**[fridolph.github.io/Dao](https://fridolph.github.io/Dao/)**
- 📂 公开仓：[Fridolph/Dao](https://github.com/Fridolph/Dao)（构建产物发布仓）
- 🏗 源码仓：[Fridolph/Dao-vitepress](https://github.com/Fridolph/Dao-vitepress)（即本仓）

---

## License

本仓库中的原创内容与代码，默认不设开源许可证。如需引用、转载或二次使用，请先联系作者。

古代原典属于公共领域；现代注释、解读等引用均已标注来源，版权归属原著作权人。

---

<p align="center">先做入口，后长理论。— Dao</p>
