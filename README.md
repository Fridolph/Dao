# Dao

`Dao` 是一个以传统文化、道学、易经为入口的导读型知识仓，也是一个持续生长中的内容站项目。

它现在先做的，不是“大而全”的百科，也不是急着抛出一整套成熟理论，而是先把门立起来：

- 帮读者找到进入原典的入口
- 帮学习者建立阅读路径与理解框架
- 把原典、索引、术语、笔记与个人解读慢慢沉淀下来
- 为后续更成熟的 `Dao` 理论表达预留空间

如果你是第一次来到这里，可以先把它理解成：

> 一个帮助现代人进入道学、易经与传统智慧世界的入口站。

站点已部署：

- [https://fridolph.github.io/Dao/](https://fridolph.github.io/Dao/)

## 当前定位

当前阶段，`Dao` 更接近一个：

> 面向现代读者的导读型资料库

所以这里的内容默认遵循这些原则：

- 先帮助进入，再追求完备
- 先建立结构，再持续填充内容
- 先做无版权风险的原典、索引、解读与重述
- 明确区分原典层、解读层与后续理论层

![道可道非常道](./dao-is-dao.png)

## 这个仓怎么用

这个仓并不要求你“先懂了再看”，更像是陪你从门口慢慢往里走。

你可以把这里的内容大致分成几类来看：

- `原典导读`：适合第一次接触一部经典时使用，先建立基本印象
- `路径索引`：适合不知道从哪一篇开始时使用
- `专题页`：适合围绕一个概念持续加深理解
- `个人解读`：适合把原典与现代生活、学习体验连接起来看

这里的默认阅读方式，不是“求快读完”，而是：

- 先进入
- 再熟悉
- 再反复回看
- 最后慢慢长出自己的理解

## 如何开始阅读

如果你是初学者，建议优先从这些入口开始：

1. 先看站点首页，确认这个站在做什么  
   入口：[src/index.md](/Users/fri/Desktop/personal/Dao/src/index.md)
2. 再看阅读地图与学习计划，知道整体路径  
   入口：[roadmap/index.md](/Users/fri/Desktop/personal/Dao/src/roadmap/index.md)  
   入口：[study-plan.md](/Users/fri/Desktop/personal/Dao/src/roadmap/study-plan.md)
3. 然后从短篇原典进入，先建立手感  
   入口：[starter-texts/index.md](/Users/fri/Desktop/personal/Dao/src/daoism/starter-texts/index.md)
4. 若想看更系统的原典主线，再进入《道德经》与道家原典区  
   入口：[daoism/index.md](/Users/fri/Desktop/personal/Dao/src/daoism/index.md)
5. 若你本来就在学《易经》，可以直接从基础概念与学习方法开始  
   入口：[yijing/index.md](/Users/fri/Desktop/personal/Dao/src/yijing/index.md)

一个更简洁的建议顺序是：

- 首页
- 阅读地图
- 入门短篇
- 《道德经》或《易经》主线
- 专题页反复穿插回看

## 适合谁

这个仓当前更适合这些人：

- 对道学、易经、传统文化有兴趣，但不知道从哪里开始的人
- 想慢慢读原典，而不是只看二手总结的人
- 希望一边学习、一边整理、一边形成自己理解的人
- 想做知识沉淀、索引、RAG 或内容站建设的人

如果你期待的是：

- 速成答案
- 单纯神秘化表达
- 纯算命式内容

那这里可能并不是最合适的入口。

## 当前内容主线

当前仓库已开始围绕这些方向推进：

- 道家入门短经
- 道教经典短篇
- 《道德经》章节化整理
- 易经基础概念与学习方法
- 主题卡与阅读地图

当前公开内容与内部计划并行推进：

- 公开内容在 `src/`
- 学习计划、交接日志、模板与决策记录在 `dev/`

## 仓库结构

```text
Dao/
├── src/        # VitePress 站点源码
├── docs/       # 构建后的静态产物（GitHub Pages 发布目录）
├── dev/        # 内部协作、计划、日志、模板
├── scripts/    # 校验与脚手架脚本
├── .github/    # Issue 模板与 GitHub Actions
└── AGENTS.md   # 仓库协作总说明
```

说明：

- `src/` 放公开站点内容与 VitePress 配置
- `docs/` 不作为内容源码目录，只作为打包输出目录
- `dev/` 只放给维护者与协作者看的内部文档

## 工程说明

安装依赖：

```bash
npm install
```

启动本地开发：

```bash
npm run docs:dev
```

内容注册校验：

```bash
npm run docs:validate
```

构建站点：

```bash
npm run docs:build
```

本地预览构建结果：

```bash
npm run docs:preview
```

默认端口为 `5049`。

## 发布方式

当前采用：

- `src/` 作为 VitePress 源码目录
- `docs/` 作为构建输出目录
- GitHub Actions 自动构建并发布到 GitHub Pages

对应配置文件：

- [deploy.yml](/Users/fri/Desktop/personal/Dao/.github/workflows/deploy.yml)
- [package.json](/Users/fri/Desktop/personal/Dao/package.json)
- [config.ts](/Users/fri/Desktop/personal/Dao/src/.vitepress/config.ts)

## 协作入口

如果你是新的协作者，建议按这个顺序进入：

1. [AGENTS.md](/Users/fri/Desktop/personal/Dao/AGENTS.md)
2. [src/index.md](/Users/fri/Desktop/personal/Dao/src/index.md)
3. [dev/README.md](/Users/fri/Desktop/personal/Dao/dev/README.md)
4. [content-model.md](/Users/fri/Desktop/personal/Dao/src/standards/content-model.md)
5. [content-policy.md](/Users/fri/Desktop/personal/Dao/src/standards/content-policy.md)
6. [path-index.md](/Users/fri/Desktop/personal/Dao/src/start/path-index.md)

内容路径与别名注册表位于：

- [content-registry.mjs](/Users/fri/Desktop/personal/Dao/src/.vitepress/content-registry.mjs)

## 额外说明

这里欢迎慢慢来。

这个仓更看重：

- 真实学习
- 结构清晰
- 持续沉淀
- 真诚表达

不急着一次说尽，也不急着一口气做完。

先把门打开，路就会慢慢长出来。
