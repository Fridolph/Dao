import { defineConfig } from 'vitepress'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.DOCS_BASE || (process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}/` : '/')

export default defineConfig({
  lang: 'zh-CN',
  title: 'Dao',
  description: '一个关于道学、易经与传统智慧的导读型知识站',
  base,
  cleanUrls: true,
  lastUpdated: true,
  vite: {
    server: {
      port: 5049
    },
    preview: {
      port: 5049
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:title', content: 'Dao' }],
    ['meta', { property: 'og:description', content: '一个关于道学、易经与传统智慧的导读型知识站' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '开始', link: '/start/' },
      { text: '阅读地图', link: '/roadmap/' },
      { text: '道家', link: '/daoism/' },
      { text: '易经', link: '/yijing/' },
      { text: '专题', link: '/topics/' },
      { text: '关于', link: '/about/' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/start/': [
        {
          text: '开始',
          items: [
            { text: '站点导览', link: '/start/' },
            { text: '路径与别名索引', link: '/start/path-index' }
          ]
        }
      ],
      '/roadmap/': [
        {
          text: '阅读地图',
          items: [
            { text: '总览', link: '/roadmap/' },
            { text: '学习计划', link: '/roadmap/study-plan' },
            { text: '推荐阅读书单', link: '/roadmap/recommended-reading' }
          ]
        }
      ],
      '/daoism/': [
        {
          text: '道家',
          items: [
            { text: '总览', link: '/daoism/' },
            {
              text: '入门三经',
              collapsed: false,
              items: [
                { text: '总览', link: '/daoism/starter-texts/' },
                { text: '清静经', link: '/daoism/starter-texts/qingjing-jing' },
                { text: '阴符经', link: '/daoism/starter-texts/yinfu-jing' },
                { text: '太上感应篇', link: '/daoism/starter-texts/taishang-ganying-pian' }
              ]
            },
            { text: '原典入口', link: '/daoism/texts/' },
            {
              text: '道德经',
              collapsed: false,
              items: [
                { text: '道德经导读', link: '/daoism/texts/dao-de-jing/' },
                { text: '章节索引', link: '/daoism/texts/dao-de-jing/chapters' },
                { text: '道德经第一章', link: '/daoism/texts/dao-de-jing/chapter-01' }
              ]
            },
            {
              text: '庄子',
              collapsed: false,
              items: [
                { text: '庄子导读', link: '/daoism/texts/zhuang-zi/' },
                { text: '篇章索引', link: '/daoism/texts/zhuang-zi/chapters' }
              ]
            },
            {
              text: '列子',
              collapsed: false,
              items: [
                { text: '列子导读', link: '/daoism/texts/lie-zi/' },
                { text: '篇章索引', link: '/daoism/texts/lie-zi/chapters' }
              ]
            },
            {
              text: '道教经典',
              collapsed: false,
              items: [
                { text: '总览', link: '/daoism/daoist-classics/' },
                { text: '文昌帝君阴骘文', link: '/daoism/daoist-classics/wenchang-yinzhiwen' },
                { text: '坐忘论', link: '/daoism/daoist-classics/zuowang-lun' },
                { text: '天隐子', link: '/daoism/daoist-classics/tianyinzi' }
              ]
            }
          ]
        }
      ],
      '/yijing/': [
        {
          text: '易经',
          items: [
            { text: '总览', link: '/yijing/' },
            { text: '基础入口', link: '/yijing/basics/' },
            { text: '学习方法', link: '/yijing/basics/learning-method' },
            {
              text: '核心概念',
              collapsed: false,
              items: [
                { text: '概念总览', link: '/yijing/basics/core-concepts' },
                { text: '阴阳', link: '/yijing/basics/concepts/yin-yang' },
                { text: '刚柔', link: '/yijing/basics/concepts/gang-rou' },
                { text: '中正', link: '/yijing/basics/concepts/zhong-zheng' },
                { text: '位', link: '/yijing/basics/concepts/wei' },
                { text: '应', link: '/yijing/basics/concepts/ying' },
                { text: '时', link: '/yijing/basics/concepts/shi' },
                { text: '变易', link: '/yijing/basics/concepts/bian-yi' },
                { text: '象理用', link: '/yijing/basics/concepts/xiang-li-yong' }
              ]
            },
            { text: '六十四卦目录', link: '/yijing/hexagrams/' }
          ]
        }
      ],
      '/topics/': [
        {
          text: '专题',
          items: [
            { text: '专题总览', link: '/topics/' },
            { text: '阴阳', link: '/topics/yin-yang' },
            { text: '无为', link: '/topics/wu-wei' },
            { text: '变易', link: '/topics/bian-yi' },
            { text: '象理用', link: '/topics/xiang-li-yong' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '关于 Dao', link: '/about/' },
            { text: '关于我', link: '/about/me' }
          ]
        }
      ],
      '/standards/': [
        {
          text: '规范',
          items: [
            { text: '内容模型', link: '/standards/content-model' },
            { text: '内容原则', link: '/standards/content-policy' },
            { text: '路径与命名规范', link: '/standards/path-conventions' },
            { text: 'RAG 约束', link: '/standards/rag-guidelines' }
          ]
        }
      ]
    },
    footer: {
      message: '先做入口，后长理论。',
      copyright: 'Copyright © Dao'
    }
  }
})
