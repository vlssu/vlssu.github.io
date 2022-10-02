import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: '师叔の小窝',
  description: 'Share knowledge and stay happy',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: '飒爽师叔' }],
    ['meta', { name: 'keywords', content: 'vuepress,飒爽师叔,ValiantShishu,vlssu,vuepress-theme-reco,theme,blog,博客' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_vlssu.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_vlssu.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: '飒爽师叔',
    authorAvatar: '/head.png',
    docsRepo: 'https://github.com/vlssu/vlssu.github.io',
    docsBranch: 'master',
    docsDir: '',
    lastUpdatedText: '最后更新时间',
    // series 为原 sidebar
    // series: {
    //   '/docs/theme-reco/': [
    //     {
    //       text: 'module one',
    //       children: ['home', 'theme']
    //     },
    //     {
    //       text: 'module two',
    //       children: ['api', 'plugin']
    //     }
    //   ]
    // },
    // autoSetBlogCategories: true,         // 自动设置分类
    autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签添加至头部导航条
    navbar:
    [
      { text: '订阅', link: 'https://blog.vlssu.com/rss.xml' },
      // { text: '分类', link: '/categories/reco/1/' },
      // { text: '标签', link: '/tags/tag1/1/' },
      // { text: '个人主页', 
      //   children: [
      //     { text: 'GitHub', link: 'https://github.com/vlssu', icon: 'reco-github' },
      //     { text: 'bilibili', link: 'https://space.bilibili.com/22219285/', icon: 'reco-bilibili' },
      //     { text: '邮箱(主)', link: 'mailto:vlssu@vlssu.com', icon: 'reco-mail' },
      //     { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=54xnf9b', icon: 'reco-qq' },
      //     { text: '爱发电', link: 'https://afdian.net/@Vlssu', icon: 'reco-faq' },
      //     { text: 'Discord', link: 'https://discord.gg/wt7DmfY', icon: 'reco-other' },
      //     { text: 'QQ频道', link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=1dpuGF&from=246610&biz=ka', icon: 'reco-qq' },
      //     { text: 'Telegram', link: 'https://t.me/vlssumc', icon: 'fa-telegram' },
      //   ]
      // },
      { text: '链接', 
        children: [
          { text: '公益我的世界服务器', link: 'https://vlssu.cn'},
          { text: '皮肤站', link: 'https://skin.vlssu.com/'},
          { text: '论坛', link: 'https://bbs.vlssu.com/'},
          { text: '云盘', link: 'https://cloud.vlssu.com/'},
        ]
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'QQ 群',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'GitHub',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;'
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'buttongroup',
    //       children: [
    //         {
    //           text: '打赏',
    //           link: '/docs/others/donate.html'
    //         }
    //       ]
    //     }
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'RvrM45f9SVD3qeRUSz1Q7rkx-9Nh9j0Va',
        appKey: 'gpUrlXJ3ISpcmTOqXBzd01gY',
        placeholder: "粘贴图片到此处可以自动上传，填写邮箱可以邮件收到回复哦(●'◡'●)",
        requiredFields: ['nick','mail'], // 必要值
        lang:'zh-CN', // 语言
        notify: true, // 邮件提醒
        verify: false, // 验证码服务
        visitor: true, // 阅读量统计
        recordIP: true, // 记录评论者IP
        enableQQ: true, // 是否开启强制拉取 qq 头像
        // hideComments: true, // 隐藏评论
        background: '/comment.webp'  // 背景图
      },
    },
  }),
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
    // 图片缩放 https://v2.vuepress.vuejs.org/zh/reference/plugin/medium-zoom.html
    mediumZoomPlugin({
      selector: '.page-container img',
      zoomOptions: {
        margin: 16,
        background: '#616161cc',
        scrollOffset: 0
      }
    }),
  ]
  // debug: true,
})
