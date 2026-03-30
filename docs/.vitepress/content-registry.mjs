import { daoDeJingChapters } from './data/dao-de-jing-chapters.mjs'
import { topicPages } from './data/topic-pages.mjs'
import { yijingConceptPages } from './data/yijing-concepts.mjs'

export const contentRegistry = [
  {
    id: 'home',
    title: 'Dao',
    path: '/',
    section: 'site',
    module: 'home',
    category: 'landing',
    aliases: ['首页', '主页', 'home', 'dao home']
  },
  {
    id: 'start-home',
    title: '站点导览',
    path: '/start/',
    section: 'start',
    module: 'guide',
    category: 'landing',
    aliases: ['开始', '导览', '站点导览', 'getting started']
  },
  {
    id: 'start-path-index',
    title: '路径与别名索引',
    path: '/start/path-index',
    section: 'start',
    module: 'guide',
    category: 'reference',
    aliases: ['路径索引', '别名索引', 'path index', 'alias index']
  },
  {
    id: 'roadmap-home',
    title: '阅读地图',
    path: '/roadmap/',
    section: 'roadmap',
    module: 'overview',
    category: 'landing',
    aliases: ['阅读路径', '路线图', 'roadmap']
  },
  {
    id: 'study-plan',
    title: '学习计划',
    path: '/roadmap/study-plan',
    section: 'roadmap',
    module: 'plan',
    category: 'guide',
    aliases: ['学习路径', '学习规划', 'study plan']
  },
  {
    id: 'recommended-reading',
    title: '推荐阅读书单',
    path: '/roadmap/recommended-reading',
    section: 'roadmap',
    module: 'plan',
    category: 'reference',
    aliases: ['书目推荐', '推荐书单', 'reading list']
  },
  {
    id: 'daoism-home',
    title: '道家',
    path: '/daoism/',
    section: 'daoism',
    module: 'overview',
    category: 'landing',
    aliases: ['道家总览', '道学', 'daoism']
  },
  {
    id: 'starter-texts-home',
    title: '入门三经',
    path: '/daoism/starter-texts/',
    section: 'daoism',
    module: 'starter-texts',
    category: 'landing',
    aliases: ['道家入门三经', 'starter texts']
  },
  {
    id: 'qingjing-jing',
    title: '太上老君说常清静经',
    path: '/daoism/starter-texts/qingjing-jing',
    section: 'daoism',
    module: 'starter-texts',
    category: 'guide',
    aliases: ['清静经', '常清静经', 'qingjing jing']
  },
  {
    id: 'yinfu-jing',
    title: '阴符经',
    path: '/daoism/starter-texts/yinfu-jing',
    section: 'daoism',
    module: 'starter-texts',
    category: 'guide',
    aliases: ['阴符经', 'yinfu jing', '阴符']
  },
  {
    id: 'taishang-ganying-pian',
    title: '太上感应篇',
    path: '/daoism/starter-texts/taishang-ganying-pian',
    section: 'daoism',
    module: 'starter-texts',
    category: 'guide',
    aliases: ['太上感应篇', '感应篇', 'taishang ganying pian']
  },
  {
    id: 'wenchang-yinzhiwen',
    title: '文昌帝君阴骘文',
    path: '/daoism/starter-texts/wenchang-yinzhiwen',
    section: 'daoism',
    module: 'starter-texts',
    category: 'guide',
    aliases: ['阴骘文', '文昌帝君阴骘文', 'wenchang yinzhiwen']
  },
  {
    id: 'daoist-texts',
    title: '原典入口',
    path: '/daoism/texts/',
    section: 'daoism',
    module: 'texts',
    category: 'landing',
    aliases: ['原典', '道家原典', 'texts']
  },
  {
    id: 'dao-de-jing-guide',
    title: '道德经导读',
    path: '/daoism/texts/dao-de-jing/',
    section: 'daoism',
    module: 'texts',
    category: 'guide',
    aliases: ['道德经', '老子', 'dao de jing', 'laozi', 'ddj']
  },
  {
    id: 'dao-de-jing-chapters',
    title: '道德经章节索引',
    path: '/daoism/texts/dao-de-jing/chapters',
    section: 'daoism',
    module: 'texts',
    category: 'reference',
    aliases: ['道德经章节', '道德经索引', 'dao de jing chapters']
  },
  {
    id: 'zhuang-zi-guide',
    title: '庄子导读',
    path: '/daoism/texts/zhuang-zi/',
    section: 'daoism',
    module: 'texts',
    category: 'guide',
    aliases: ['庄子', 'zhuangzi', 'zhuang zi']
  },
  {
    id: 'zhuang-zi-chapters',
    title: '庄子篇章索引',
    path: '/daoism/texts/zhuang-zi/chapters',
    section: 'daoism',
    module: 'texts',
    category: 'reference',
    aliases: ['庄子篇章', '庄子索引', 'zhuangzi chapters']
  },
  {
    id: 'lie-zi-guide',
    title: '列子导读',
    path: '/daoism/texts/lie-zi/',
    section: 'daoism',
    module: 'texts',
    category: 'guide',
    aliases: ['列子', 'liezi', 'lie zi']
  },
  {
    id: 'lie-zi-chapters',
    title: '列子篇章索引',
    path: '/daoism/texts/lie-zi/chapters',
    section: 'daoism',
    module: 'texts',
    category: 'reference',
    aliases: ['列子篇章', '列子索引', 'liezi chapters']
  },
  {
    id: 'daoist-classics-home',
    title: '道教经典',
    path: '/daoism/daoist-classics/',
    section: 'daoism',
    module: 'daoist-classics',
    category: 'landing',
    aliases: ['道教经典', 'daoist classics', '道教入口']
  },
  {
    id: 'zuowang-lun',
    title: '坐忘论',
    path: '/daoism/daoist-classics/zuowang-lun',
    section: 'daoism',
    module: 'daoist-classics',
    category: 'guide',
    aliases: ['坐忘论', 'zuowang lun']
  },
  {
    id: 'tianyinzi',
    title: '天隐子',
    path: '/daoism/daoist-classics/tianyinzi',
    section: 'daoism',
    module: 'daoist-classics',
    category: 'guide',
    aliases: ['天隐子', 'tianyinzi']
  },
  {
    id: 'yijing-home',
    title: '易经',
    path: '/yijing/',
    section: 'yijing',
    module: 'overview',
    category: 'landing',
    aliases: ['周易', '易经总览', 'yijing', 'zhouyi']
  },
  {
    id: 'yijing-basics',
    title: '基础入口',
    path: '/yijing/basics/',
    section: 'yijing',
    module: 'basics',
    category: 'landing',
    aliases: ['易经基础', '基础', 'basics']
  },
  {
    id: 'yijing-learning-method',
    title: '学习方法',
    path: '/yijing/basics/learning-method',
    section: 'yijing',
    module: 'basics',
    category: 'guide',
    aliases: ['易经学习方法', '卦序学习', 'learning method']
  },
  {
    id: 'yijing-core-concepts',
    title: '核心概念',
    path: '/yijing/basics/core-concepts',
    section: 'yijing',
    module: 'basics',
    category: 'concept',
    aliases: ['易经概念', '核心术语', 'core concepts']
  },
  {
    id: 'hexagrams-index',
    title: '六十四卦目录',
    path: '/yijing/hexagrams/',
    section: 'yijing',
    module: 'hexagrams',
    category: 'reference',
    aliases: ['六十四卦', '卦目录', 'hexagrams', '64 gua']
  },
  {
    id: 'topics-home',
    title: '专题总览',
    path: '/topics/',
    section: 'topics',
    module: 'overview',
    category: 'landing',
    aliases: ['专题', '主题', 'topics']
  },
  {
    id: 'notes-home',
    title: '我的解读',
    path: '/notes/',
    section: 'notes',
    module: 'overview',
    category: 'landing',
    aliases: ['解读', '笔记', '我的笔记', 'notes']
  },
  {
    id: 'about-home',
    title: '关于 Dao',
    path: '/about/',
    section: 'about',
    module: 'overview',
    category: 'landing',
    aliases: ['关于', '关于本站', 'about dao']
  },
  {
    id: 'about-me',
    title: '关于我',
    path: '/about/me',
    section: 'about',
    module: 'overview',
    category: 'note',
    aliases: ['关于作者', '我是谁', 'about me']
  },
  {
    id: 'content-model',
    title: '内容模型',
    path: '/standards/content-model',
    section: 'standards',
    module: 'rules',
    category: 'reference',
    aliases: ['内容规范', '文档模型', 'content model']
  },
  {
    id: 'content-policy',
    title: '内容原则',
    path: '/standards/content-policy',
    section: 'standards',
    module: 'rules',
    category: 'reference',
    aliases: ['内容原则', '收录原则', 'content policy']
  },
  {
    id: 'path-conventions',
    title: '路径与命名规范',
    path: '/standards/path-conventions',
    section: 'standards',
    module: 'rules',
    category: 'reference',
    aliases: ['路径规范', '命名规范', 'path conventions']
  },
  {
    id: 'rag-guidelines',
    title: 'RAG 约束',
    path: '/standards/rag-guidelines',
    section: 'standards',
    module: 'rules',
    category: 'reference',
    aliases: ['知识库约束', '检索约束', 'rag']
  },
  ...daoDeJingChapters.map((chapter) => ({
    id: `dao-de-jing-${chapter.slug}`,
    title: chapter.title,
    path: chapter.path,
    section: 'daoism',
    module: 'texts',
    category: 'guide',
    aliases: [chapter.title, ...chapter.aliases]
  })),
  ...topicPages.map((topic) => ({
    id: topic.id,
    title: topic.title,
    path: topic.path,
    section: 'topics',
    module: 'overview',
    category: 'guide',
    aliases: [topic.title, ...topic.aliases]
  })),
  ...yijingConceptPages.map((concept) => ({
    id: concept.id,
    title: concept.title,
    path: concept.path,
    section: 'yijing',
    module: 'basics',
    category: 'concept',
    aliases: concept.aliases
  }))
]
