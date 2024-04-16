import { commentConfig } from "./commentConfig";
import { bulletin } from "./bulletin";
import { navbar } from "./navbar";

export const themeConfig = {
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: '飒爽师叔',
    authorAvatar: '/head.png',
    gitRepo: 'vlssu/vlssu.github.io',
    gitBranch: 'master',
    sourceDir: '',
    lastUpdatedText: '最后更新时间',
    primaryColor: '#42b983',
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: '师叔の小窝',
        description: 'Share knowledge and stay happy',
      },
    },
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
    autoAddCategoryToNavbars: false,
    // autoAddCategoryToNavbar: {
    //   location: 0, // 默认 0
    //   categoryText: '分类', // 默认 categories
    //   tagText: '标签' // 默认 tags
    // },
    commentConfig: commentConfig,
    navbar: navbar,
    bulletin: bulletin,
    friendshipLinks: [
      /*{
        title: '师叔の小窝', // 站点名称
        desc: '愿你保持初心和善良,笑里尽是温暖与坦荡。', // 站点描述
        link: 'https://blog.vlssu.com', // 站点地址
        logo: "https://blog.vlssu.com/favicon.ico" // 站点图片链接
      },*/
      {
        title: '博主的我的世界公益服', // 站点名称
        desc: '欢迎大家来玩啊，生存创造空岛模组都有哦，玩家素质普遍高（毕竟来个熊封一个）', // 站点描述
        link: 'https://vlssu.cn', // 站点地址
        logo: "https://vlssu.cn/favicon.png" // 站点图片链接
      },
      {
        title: 'NetPlus', // 站点名称
        desc: '一款内网穿透服务，轻松搭建属于您自己的个人网站', // 站点描述
        link: 'https://w.url.cn/s/ARSnlGF', // 站点地址
        logo: 'https://i.loli.net/2020/04/27/qOg4KwoRfZXba7v.png' // 站点图片链接
      },
      {
        title: '小奏博客', // 站点名称
        desc: '分享是一种快乐，而我喜欢分享。', // 站点描述
        link: 'https://www.yuuki-asuna.cn', // 站点地址
        logo: "https://i.loli.net/2020/05/04/DRMmXxkYl4sjrL7.png" // 站点图片链接
      },
      {
        title: "Lazy's Blog", // 站点名称
        desc: 'Share somethings with you', // 站点描述
        link: 'https://blog.imlazy.ink:233', // 站点地址
        logo: "https://i.zerodream.net/86b5133c13a7e7109b89f8d24fc0b746.jpg" // 站点图片链接
      },
      {
        title: '有顶天的茶亭', // 站点名称
        desc: '小祈的个人博客', // 站点描述
        link: 'http://url.vlssu.com/gensou', // 站点地址
        logo: 'https://i2.wp.com/blog.gensou.cc/wp-content/uploads/2020/04/bloglogo.jpg' // 站点图片链接
      },
      {
        title: '上杉夏相の小窝', // 站点名称
        desc: '干啥啥不行，摸鱼第一名', // 站点描述
        link: 'https://blog.ssxx.site/', // 站点地址
        logo: 'https://box.ssxx.site/imgs/header.jpg' // 站点图片链接
      },
      {
        title: '音铃的博客', // 站点名称
        link: 'https://blog.iin0.cn', // 站点地址                                              
        logo: 'https://blog.iin0.cn/author.png' // 站点图片链接
      },
      {
        title: 'Wapriaily', // 站点名称
        desc: '目之所及皆是回忆，心之所想皆是过往，眼之所看皆是遗憾。', // 站点描述
        link: 'https://www.wapriaily.com', // 站点地址
        logo: "https://www.wapriaily.com/photo/wapriaily.jpg" // 站点图片链接
      },
      // ...
    ]
}