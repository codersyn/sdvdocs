import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '星露谷物语使用文档',
  description: '一个不太正经的文档',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav: nav(),
    logo: '/logo.png',
    siteTitle: '星露谷物语使用文档',

    sidebar: {
      '/guide/': sidebarGuide()
    },

    editLink: {
      pattern: 'https://github.com/codersyn/docs/edit/main/:path',
      text: '在Github上编辑此页面'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codersyn/sdvdocs' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },

    footer: {
      copyright: 'Copyright © 2023 Syn'
    }
  }
})

function nav() {
  return [
    { text: '使用指南', link: '/guide/online', activeMatch: '/guide/' },
    { text: 'Blog', link: 'https://sysy.su' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'iOS',
      collapsed: true,
      items: [
        { text: '在线安装', link: '/guide/online' },
        { text: '自签安装', link: '/guide/offline' }
      ]
    },
    {
      text: 'Android',
      collapsed: true,
      items: [
        { text: '替换文件', link: '/guide/replace-files' },
        { text: '安装模组', link: '/guide/install-mod' },
        { text: '添加模组', link: '/guide/add-mod' }
      ]
    },
    {
      text: '疑难杂症',
      collapsed: true,
      items: [
        { text: '暂时没有发现', link: '/guide/none' },
      ]
    },
  ]
}