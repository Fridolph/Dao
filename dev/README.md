# Dao Development Hub

这里是 `Dao` 仓库的开发与维护文档区。

它不直接面向站点读者，
而是服务于：

- 仓库维护者
- 协作者
- AI 伙伴
- 后续内容运营与开发工作

## 目录说明

- `milestones.md`：里程碑
- `plans/learning-and-development-plan.md`：学习与开发计划
- `changelog.md`：版本更新日志
- `docs-index.md`：内部文档索引
- `contribution-log.md`：贡献日志
- `decisions.md`：关键决策记录
- `backlog.md`：待办与候选池
- `templates/`：内部模板

## 模板体系

当前采用三层模板体系：

1. 顶层抽象模版：`templates/classic-text-commentary-template.md`
2. 领域专用模版：
   - `templates/dao-de-jing-chapter-template.md`
   - `templates/zhuangzi-passage-template.md`
   - `templates/yijing-hexagram-template.md`
3. 页面类型模版：
   - `templates/content-guide-template.md`
   - `templates/concept-page-template.md`

## 使用原则

- 读者内容放 `docs/`
- 内部工作内容放 `dev/`
- 仓库协作与 issue 模板放 `.github/`

## 建议进入顺序

1. `README.md`
2. `AGENTS.md`
3. `dev/docs-index.md`
4. 当前相关计划或日志文档
