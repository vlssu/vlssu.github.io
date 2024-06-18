import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { recoTheme } from 'vuepress-theme-reco'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { themeConfig } from './config/index'

export default defineUserConfig({
  bundler: viteBundler(),
  shouldPrefetch: false,
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
    pwaPlugin({
      showInstall: true,
      cacheImage: true,
      update: "hint",
    }),
    googleAnalyticsPlugin({
      id: 'G-PCD2Q5QRXT',
    }),
    sitemapPlugin({
      hostname: "https://vlssu.github.io",
    }),
  ]
  // debug: true,
})