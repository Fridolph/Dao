---
title: 路径与命名规范
description: 统一英文路径、中文标题、别名与内容索引的命名规则。
category: reference
aliases:
  - 路径规范
  - 命名规范
  - path conventions
---

# 路径与命名规范

这份规范专门解决一个问题：

> 路径必须稳定、纯英文、可扩展；标题与理解则可以保持中文语境。

## 一、为什么统一用英文路径

这样做的好处：

- 避免构建、部署、外链和评论挂载中的中文路径兼容问题
- 让路径更稳定，更适合未来做 API、搜索、知识库切片
- 更适合程序化处理和批量生成

## 二、命名四件套

每个文档默认同时拥有四个标识：

1. `title`：中文标题
2. `path`：英文访问路径
3. `id`：稳定机器标识
4. `aliases`：别名集合

例如：

```text
title: 道德经导读
path: /daoism/texts/dao-de-jing/
id: dao-de-jing-guide
aliases: 道德经 / 老子 / dao de jing / ddj
```

## 三、slug 规则

路径 slug 默认遵循：

- 只用小写英文字母、数字和连字符
- 不用空格
- 不用中文
- 不用拼音缩写乱跳层级
- 同级目录保持统一风格

推荐：

- `dao-de-jing`
- `zhuang-zi`
- `core-concepts`
- `learning-method`

不推荐：

- `DaoDeJing`
- `道德经`
- `dddj`
- `study1`

## 四、目录层级规则

默认采用：

```text
section / module / topic / doc
```

例如：

```text
/daoism/texts/dao-de-jing/
/yijing/basics/learning-method
```

## 五、别名规则

别名不是正式路径，而是帮助搜索与理解的辅助索引。

每篇文档建议准备这些别名：

- 中文正式名
- 常见简称
- 常见拼写或拼音写法
- 必要时补英文解释名

例如《道德经导读》可登记：

- 道德经
- 老子
- dao de jing
- laozi
- ddj

## 六、注册顺序

新增文档时，默认按这个顺序操作：

1. 先定 `section`
2. 再定 `module`
3. 再定英文 `slug`
4. 再定中文 `title`
5. 再补 `aliases`
6. 最后写正文

## 七、校验规则

当前仓库已提供注册表校验：

- 路径必须以 `/` 开头
- 路径必须是 ASCII slug
- `id` 不可重复
- 正式路径不可重复
- 别名不可重复
- 注册路径必须能找到对应文档

执行：

```bash
npm run docs:validate
```

当前单一真相源：

```text
docs/.vitepress/content-registry.mjs
```

## 八、当前建议

如果未来要补六十四卦，建议沿用统一规则：

```text
/yijing/hexagrams/qian/
/yijing/hexagrams/kun/
/yijing/hexagrams/zhun/
```

并为每卦登记：

- 中文卦名
- 卦序
- 常见别名
- 对应模板来源
