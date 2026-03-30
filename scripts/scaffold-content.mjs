import fs from 'node:fs'
import path from 'node:path'

import { daoDeJingChapters } from '../docs/.vitepress/data/dao-de-jing-chapters.mjs'
import { topicPages } from '../docs/.vitepress/data/topic-pages.mjs'
import { yijingConceptPages } from '../docs/.vitepress/data/yijing-concepts.mjs'

const root = process.cwd()

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function writeIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) {
    return false
  }

  ensureDir(path.dirname(filePath))
  fs.writeFileSync(filePath, content)
  return true
}

function buildDaoDeJingChapterContent(chapter) {
  return `---
title: ${chapter.title}
description: 待整理。
category: guide
aliases:
  - ${chapter.title}
  - ${chapter.aliases[0]}
  - ${chapter.aliases[1]}
source:
  - 通行本《道德经》
  - 王弼注本系统
---

# ${chapter.title}

## 【原典层】原文

待补充。

## 【原典层】注音 / 生僻字

- 待补充

## 【原典层】断句

待补充。

## 【原典层】关键词

- 待补充

## 【解读层】三问解读

### 象：这一章在说什么

待整理。

### 理：为什么这样说

待整理。

### 用：这一章今天怎么用

待整理。

## 【解读层】现代重述

待整理。

## 【解读层】我的理解

待整理。

## 参考来源

- 《道德经》通行本
- 王弼《老子注》相关系统
`
}

function buildTopicContent(topic) {
  return `---
title: ${topic.title}
description: 待整理。
category: guide
aliases:
  - ${topic.title}
  - ${topic.aliases[0]}
  - ${topic.aliases[1]}
---

# ${topic.title}

## 是什么

待整理。

## 为什么重要

待整理。

## 怎么读 / 怎么进入

待整理。

## 相关原典

- 待补充

## 我的理解

待整理。

## 参考来源

- 待补充
`
}

function buildConceptContent(concept) {
  return `---
title: ${concept.title}
description: 待整理。
category: concept
aliases:
  - ${concept.title}
  - ${concept.aliases[0]}
  - ${concept.aliases[1]}
---

# ${concept.title}

## 定义

待整理。

## 常见误解

待整理。

## 在原典中的语境

待整理。

## 我的理解

待整理。

## 关联页面

- 待补充

## 参考来源

- 待补充
`
}

let createdCount = 0

for (const chapter of daoDeJingChapters) {
  if (chapter.number === 1) {
    continue
  }

  const filePath = path.join(root, 'docs', 'daoism', 'texts', 'dao-de-jing', `${chapter.slug}.md`)
  if (writeIfMissing(filePath, buildDaoDeJingChapterContent(chapter))) {
    createdCount += 1
  }
}

for (const topic of topicPages) {
  const filePath = path.join(root, 'docs', ...topic.path.replace(/^\//, '').split('/')) + '.md'
  if (writeIfMissing(filePath, buildTopicContent(topic))) {
    createdCount += 1
  }
}

for (const concept of yijingConceptPages) {
  const filePath = path.join(root, 'docs', ...concept.path.replace(/^\//, '').split('/')) + '.md'
  if (writeIfMissing(filePath, buildConceptContent(concept))) {
    createdCount += 1
  }
}

const zhuangziSections = [
  {
    filePath: path.join(root, 'docs', 'daoism', 'texts', 'zhuang-zi', 'chapters.md'),
    content: `---
title: 庄子篇章索引
description: 待整理庄子内篇、外篇、杂篇的阅读入口。
category: reference
aliases:
  - 庄子篇章
  - 庄子索引
  - zhuangzi chapters
---

# 庄子篇章索引

## 内篇

- 待整理

## 外篇

- 待整理

## 杂篇

- 待整理
`
  },
  {
    filePath: path.join(root, 'docs', 'daoism', 'texts', 'lie-zi', 'chapters.md'),
    content: `---
title: 列子篇章索引
description: 待整理列子各篇阅读入口。
category: reference
aliases:
  - 列子篇章
  - 列子索引
  - liezi chapters
---

# 列子篇章索引

## 当前结构

- 待整理
`
  }
]

for (const item of zhuangziSections) {
  if (writeIfMissing(item.filePath, item.content)) {
    createdCount += 1
  }
}

console.log(`Scaffold complete. Created ${createdCount} files.`)
