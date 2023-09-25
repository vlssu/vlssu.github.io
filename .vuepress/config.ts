import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { themeConfig } from './config/index'

export default defineUserConfig({
  lang: 'zh-CN',
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
  theme: recoTheme(themeConfig),
  plugins: [
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
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