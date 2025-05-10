import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "师叔の小窝",
  description: "Share knowledge and stay happy",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
