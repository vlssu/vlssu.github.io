import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import metingPlugin from "vuepress-plugin-meting2";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "师叔の小窝",
  description: "Share knowledge and stay happy",

  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-PCD2Q5QRXT',
    }),
    metingPlugin({
      metingOptions: {
        global: true, // 开启关闭全局播放器
        server: "netease",
        api: "https://api.vlssu.com/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
        type: "playlist",
        mid: "7216749206",
      },
      aplayerOptions: {
        fixed: false,     //吸底模式
        mini: true,       //mini版
        autoplay: true,   //自动播放
        theme: "#5e86c1", //主题颜色
        volume: 0.4,      //音量
        mutex: true,      //互斥模式
        lrcType: 3,       //歌词解析模式，默认0，想要歌词就推荐3
        listFolded: true, //折叠播放列表
        //可能报错的项
        //loop: "all",    //播放器循环模式'all' | 'one' | 'none'默认all
        order: "random",  //设置播放器的初始顺序模式"list"| "random" 默认list
        preload: "auto",  //设置音频的预加载模式'none' | 'metadata' | 'auto' 默认auto
        //listMaxHeight: 250  //设置播放列表最大高度，单位为像素
      },
    }),
  ],
});
