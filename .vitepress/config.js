import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI训练平台",
  description: "A VitePress Site",
  base:'/vite-press-demo/',
  // outDir:'../public',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '帮助指南', link: '/docs/产品简介' }
    ],

    sidebar: [
      {
        text: '产品简介',
        link: '/docs/产品简介'
      },
      {
        text: '专业术语',
        link: '/docs/统计类专业名词'
      },
      {
        text: '说明文档',
        // collapsed: false,
        items: [
          {
            text: '数据模块',
            collapsed: true,
            items:[
              { text: '功能介绍', link: 'docs/数据模块/功能介绍' },
              { text: '算子介绍', link: 'docs/数据模块/算子介绍' },
            ]
          },
          {
            text: '图像模块',
            collapsed: true,
            items:[
              { text: '功能介绍', link: 'docs/图像模块/功能介绍' },
            ]
          },
        ]
      },
      {
        text: '案例库',
        // collapsed: false,
        items: [
          {
            text: '机器学习',
            collapsed: true,
            items:[
              { text: 'iris多分类模型', link: 'docs/案例库/机器学习/iris多分类模型' },
              { text: 'titanic二分类模型', link: 'docs/案例库/机器学习/titanic二分类模型' },
            ]
          },
        ]
      },
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
