import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '星露谷物语文档',
  description: '一个不太正经的文档',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    [
      'script',
      {
        src: '/script.js',
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
      pattern: 'https://github.com/codersyn/sdvdocs/edit/main/:path',
      text: '在Github上编辑此页面'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codersyn' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Syn'
    }
  }
})

function nav() {
  return [
    { text: '使用指南', link: '/guide/main', activeMatch: '/guide/' },
    { text: 'Blog', link: 'https://sysy.su' },
    { text: '加入QQ群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=EuSGchmu5KCkjAG8kklYglHLQMotDY_w&jump_from=webapi&authKey=76ai5YdBnEfr+UqAC2EZHohW7esM0PL/uZqh/XqPTwnjdo01jSya6A6titFSwLdn' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'iOS',
      collapsed: true,
      items: [
        { text: '在线安装', link: '/guide/online' },
        { text: '自签安装', link: '/guide/offline' },
        { text: '替换文件', link: '/guide/replace-files-ios' }
      ]
    },
    {
      text: 'Android',
      collapsed: true,
      items: [
        { text: '安卓安装', link: '/guide/sdvapk' },
        { text: '替换文件', link: '/guide/replace-files-android' },
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
    {
      text: '买杯咖啡',
      collapsed: true,
      items: [
        { text: 'Buy Me a Coffee', link: '/guide/buy-me-a-coffee' },
      ]
    },
  ]
}