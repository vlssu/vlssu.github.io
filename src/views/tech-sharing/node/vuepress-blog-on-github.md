---
title: 使用 vuepress 搭建我的博客
date: 2021-08-11
cover: https://api.vlssu.com/img/?210811
tags:
 - Liunx
 - Node.js
 - VuePress
categories:
 - node
article: false
---

::: tip 前言
嗯～, 没错, 博客又迎来一次重大的更新, 采用 vuepress 这一静态博客解决方案，并使用魔改主题。这篇会从搭建博客到部署上线进行较详细的介绍
:::
<!-- more -->
<!--
<video src="https://imguss.vlssu.com/video/Genshin_Ayaka.mp4" 
width="100%" 
controls="controls"></video>
-->

## 开始你的博客

### 前期准备

[VuePress 官方文档](https://vuepress.vuejs.org/zh/plugin/), 不管怎样这份文档多多少少都得阅读一遍吧

[vuepress-theme-reco 博客主题文档](https://vuepress-theme-reco.recoluan.com/), 如果你用的博客主题和我的一样的话, 这份文档也该阅读一遍吧, 如果不是的话或是你找到了更加优秀主题的话请你私信给我

### 安装博客主题 CLI

``` bash
npm i -g vuepress # 如果可以的话, 建议您 vuepress 可以全局安装一下依赖, 当然不装也没啥大问题
npm install @vuepress-reco/theme-cli -g
``` 

### 创建一份基础的 DEMO

命令行会已一问一答的方式指引你创建一份新的博客, 按照提示进行配置即可

``` bash
theme-cli init my-blog
``` 

### 安装依赖

``` bash
cd my-blog
npm install
``` 

### 预览

这一步可分为开发模式预览和线上模式预览。 开发模式预览指未发布前自己个儿边写博文边看效果（PS：可自动刷新浏览器）；线上模式预览指准备发布了,打包之后查看线上的效果

#### 开发模式预览

``` bash
npm dev # 打开浏览器即可浏览, 网址: 127.0.0.1:8080 
yarn dev # 我个人喜欢用 yarn
```

## 定制化魔改主题

这个具体内容可以去[[作者博客参考使用]](https://www.zealsay.com/blogs/tec/2020/20201223.html)

### 安装依赖
```bash
# 先在自己的项目中安装依赖
yarn add -D glob mime path qiniu aos vue-class-component
```

### 迁移文件

下载项目文件
```
https://gitee.com/GodLikeZeal/vuepress_blog
```

目录结构，深色重点观察

```bash {5,14}
.
├── vuepress_blog
│   ├── .vuepress 
│   │   ├── components 
│   │   ├── theme 
│   │   │   └── Layout.vue
│   │   ├── public 
│   │   ├── styles 
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates 
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (重要)
│   │   └── enhanceApp.js 
│   │ 
│   ├── README.md
│   ├── blogs
│   │   └── README.md
│ 
└── package.json
```
### theme
将`vuepress_blog/.vuepress/theme`文件夹放在你的项目文件夹中 列如`./docs/.vuepress/theme`

那么这个文件就好了

### config.js

在原有的基础上添加以下加重部分

```js{2-52}
"themeConfig": {
    "socials":{
        "github": "https://github.com/vlssu", //github
        "gitlub": false, //gitlub
        "gitee": "https://gitee.com/vlssu", //gitee
        "jianshu": false, //简书
        "zhihu": false, //知乎
        "toutiao": false, //知乎
        "juejin": false, //掘金
        "segmentfault": false, //思否
        "csdn": false, //CSDN
        "wechat": false, //微信
        "qq": "1305300729" //QQ 
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
    'https://imguss.vlssu.com/banner/bannerpixiv7.jpg',
    'https://imguss.vlssu.com/banner/bannerpixiv1.jpg',
    'https://imguss.vlssu.com/banner/bannerpixiv2.jpg',
    'https://imguss.vlssu.com/banner/bannerpixiv3.jpg',
    'https://imguss.vlssu.com/banner/bannerpixiv4.jpg',
    'https://imguss.vlssu.com/banner/bannerpixiv5.jpg',
    'https://imguss.vlssu.com/banner/bannerpixiv6.jpg'
    ],
    "info": "随便写写",
    "codeTheme": "tomorrow"
  },
```

### 文章封面设置

cover

封面图片配置，如果不配置，则默认展示首页的背景图片。

```md
---
title: 第一篇博客
date: 2020-08-31
cover: https://pan.zealsay.com/mweb/blog/WechatIMG11.png 
tags:
 - java
categories:
 -  技术笔记
---
```

## 进阶配置-插件

经过上面的一系列折腾, 就能开始使用 VuePress 这个博客了

### 评论组件

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
      valineConfig: {
        appId: '...',
        appKey: '...',
        placeholder: "粘贴图片到此处可以自动上传，填写邮箱可以邮件收到回复哦(●'◡'●)",
        requiredFields: ['nick','mail'], // 必要值 我这设置了必须填写昵称和邮箱
        lang:'zh-CN', // 语言
        notify: true, // 邮件提醒
        verify: false, // 验证码服务
        visitor: true, // 阅读量统计
        recordIP: true, // 记录评论者IP
        enableQQ: true, // 是否开启强制拉取 qq 头像
        background: '/bg.gif'  // 背景图 .vuepress/public/bg.gif
      },
  }  
}
```

### last-updated

::: warning 注意
无需重新按照该插件, 直接进入配置即可, 这个插件也可不进行配置, 至于为啥要在本博文中写出（PS： 默认显示的时间格式可读性比较差, 所以需要进行格式化一下）
:::

显示最后的更新时间插件, 先上插件文档 [@vuepress/last-updated](https://vuepress.vuejs.org/zh/plugin/official/plugin-last-updated.html)

再上配置, `/.vuepress/config.js` 

``` javascript
module.exports = {
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    // moment 时间格式化文档戳这里 http://momentjs.cn/
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ]
    ]
}
```

### medium-zoom

::: warning 注意
无需重新按照该插件, 直接进入配置即可
:::

插件大图预览, 先上插件文档 [@vuepress/medium-zoom](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)

再上配置, `/.vuepress/config.js` 

``` javascript
module.exports = {
    plugins: [
        ['@vuepress/medium-zoom': {
            selector: ".page img",
            options: {
                margin: 16,
                background: "#616161",
                scrollOffset: 0
            }
        }]
    ]
}
```

### pwa

::: warning 注意
你的 VPS 服务器必须支持 HTTPS, 否则 PWA 将会失效, <br>
必须重新依赖该插件, 否则尽管配置了也不会加载 pwa
:::

插件 PWA（PS：关于 PWA 的知识戳这里 [PWA](https://lavas.baidu.com/pwa)）, 先上插件文档 [@vuepress/pwa](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)

按照文档中的步骤来, 第一：在 `.vuepress/public` 提供 `Manifest` 和 `icons` 

一份 `manifest.json` 的例子

``` json
{
  "name": "飒爽师叔|Blog",
  "short_name": "飒爽师叔|Blog",
  "icons": [
    {
      "src": "/icon_vuepress_vlssu.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon_vuepress_vlssu.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#42b983"
}
```

接下来就是 `icons` 了, 根据你配置的 `manifest.json` 进行裁剪图标即可

第二：在 `.vuepress/config.js` 中添加配置（PS：该步骤略过, 文档中已经提供了）

部署之后, 你会神奇的发现在你浏览器地址栏的右边出现了一个 `+` 号的图标, 小主可点击本博客上的 `+` 号的图标查看效果


### cursor-effects

让你鼠标上多些东西，具体看文档[vuepress-plugin-cursor-effects](https://github.com/moefyit/vuepress-plugin-cursor-effects)


再上配置, `/.vuepress/config.js` 

``` javascript
    [
      "cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
```

### dynamic-title

让你有一个动态标题栏，具体看文档[vuepress-plugin-dynamic-title](https://github.com/moefyit/vuepress-plugin-dynamic-title)


再上配置, `/.vuepress/config.js` 

``` javascript
    [
      "dynamic-title",
      {
//        showIcon: "favicon.ico",
        showText: "(ฅ>ω<*ฅ)欢迎回来！",
//        hideIcon: "failure.ico",
        hideText: "( ๑ˊ•̥▵•)੭₎₎不要走呀！",
        recoverTime: 2000
      }
    ],
```

### rss

文档[vuepress-plugin-rss](https://github.com/vuepress-reco/vuepress-plugin-rss)

安装
```bash
yarn add -D vuepress-plugin-rss
yarn add -D vuepress-plugin-feed
```

再上配置, `/.vuepress/config.js` 

``` javascript
    // RSS 插件
    ['@vuepress-reco/rss', {
      site_url: 'https://blog.vlssu.com',
      copyright: ''
    }],
    [
      "feed",
      {
        canonical_base: "https://blog.vlssu.com"
      }
    ],
```
### copyright

::: warning 注意
必须重新依赖该插件, 否则尽管配置了也不会加载
:::

指定页面复制行为的插件, 先上插件文档 [vuepress-plugin-copyright](https://vuepress.github.io/zh/plugins/copyright/#vuepress-plugin-copyright)

再上配置, `/.vuepress/config.js` 

``` javascript
module.exports = {
    plugins: [
        [
          'copyright',
          {
            // 更多配置项以及配置项说明上 https://github.com/vuepress/vuepress-plugin-copyright 查看
            noCopy: false, // 是否禁止复制
            minLength: 150,  // 触发剪贴板组件或noCopy效果的最小文本长度
            disabled: false,  // 是否默认禁用这个插件的功能
            noSelect: false, // 是否禁止选择
            authorName: {
              'zh-CN': ' 飒爽师叔 ',
              'en-US': ' Vlssu ',
            },
          }
        ],
    ]
}
```

### reward

具体可以看文档 [vuepress-plugin-reward](https://github.com/vxhly/vuepress-plugin-reward)

再上配置, `/.vuepress/config.js` 

``` javascript
    // 打赏
//    require('./plugins/DonateSimple/script.js'),
    ['reward', {
      btnText: '打赏', // 奖励按钮文字。
      title: '给作者赏一杯咖啡吧', // 第一个奖励文字。
      subTitle: '您的支持将是我继续更新下去的动力', // 第二奖励文字。
      rewardOption: [ // 您的QR码图片。
        {
          text: '微信赞赏码',
          url: '/WeChat.svg' // ddd 图片到 docs/.vuepress/public
        },
        {
          text: '微信/支付宝/QQ',
          url: '/Alipay.svg' // ddd 图片到 docs/.vuepress/public
        }
      ],
//      showInMobile: true // 是否在移动端显示，默认值：false。
    }],
```
### nuggets-style-copy

::: tip 提示
让代码块中可以直接点击复制来解决版权插件导致的无用字符，也帮助了不会当CV程序员的尴尬余地[vuepress-plugin-nuggets-style-copy](https://www.npmjs.com/package/vuepress-plugin-nuggets-style-copy)
:::

再上配置, `/.vuepress/config.js` 

``` javascript
    ["vuepress-plugin-nuggets-style-copy", 
      {
        copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
        tip: {
          content: "复制成功!"
        }
      }
    ],
```

### nest

页面 canvas-nest 背景插件, 先上插件文档 [vuepress-plugin-nest](https://github.com/vxhly/vuepress-plugin-nest)

再上配置, `/.vuepress/config.js` 

``` javascript
module.exports = {
    plugins: [
        [
            'nest',
            {
              // 更多配置项以及配置项说明上 https://github.com/vxhly/vuepress-plugin-nest 查看
              color: '50,139,98', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
//        pointColor: '255,0,255', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
              opacity: 0.7, // the opacity of line (0~1), default: 0.5.
              count: 300, // the number of lines, default: 99.
              zIndex: -2, // z-index property of the background, default: -1.
              showInMobile: true // whether to display on the mobile side, default: false.
            }
        ],
    ]
}
```

### sitemap

::: warning 注意
如果你的网站希望被搜索引擎搜索到的话, 强烈这个插件需要安装
:::

生成站点地图插件, 先上插件文档 [vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)

再上配置, `/.vuepress/config.js` 

``` javascript
module.exports = {
    plugins: [
        [
            "sitemap",
            {
                hostname: "https://blog.vlssu.com", // 替换成你的地址
                exclude: ['/404.html'],
                  dateFormatter: time => {
                    return time
                }
            }
        ],
    ]
}
```

### meting

:::tip
这个可以让你博客搭载音乐插件，而且特表好

但API有点小问题，需要自己去搭建[meting-api](https://github.com/injahow/meting-api)并设置自己的**cookie**(如果你是黑胶会员，并且歌单中包含VIP音乐)。除此之外都是非常不错的一个

具体也可以看文档去进阶配置，我这里就演示如何去使用。[vuepress-plugin-meting](https://github.com/moefyit/vuepress-plugin-meting)
:::

再上配置, `/.vuepress/config.js` 

``` javascript
    [
      //安装meting: yarn add vuepress-plugin-meting -D
      "meting",{
        metingApi: "https://api.vlssu.com/meting/",  // api地址
        meting:
        {
          //server: "netease",
          //type: "playlist",
          //mid: "6877495415",
          auto: "https://music.163.com/playlist?id=5439532419"
        },
        aplayer:
        {
          fixed: false,     //吸底模式
          mini: true,       //mini版
          autoplay: true,  //自动播放
          theme: "#5e86c1", //主题颜色
          volume: 0.4,      //音量
          mutex: true,      //互斥模式
          lrcType: 3,       //歌词解析模式，默认0，想要歌词就推荐3
          listFolded: true, //折叠播放列表
          //可能报错的项
          //loop: all,    //播放器循环模式'all' | 'one' | 'none'默认all
          //order: "list",    //设置播放器的初始顺序模式"list"| "random" 默认list
          //preload: "auto",   //设置音频的预加载模式'none' | 'metadata' | 'auto' 默认auto
          //listMaxHeight: 250  //设置播放列表最大高度，单位为像素

        },
        mobile:{
          cover: false,
          lrc: true
        }
      }
   ],
```

### musicplayer
:::tip
但是api特别稳定，用了这么长时间从来没有出现问题<br>
当然缺点也有，那就是他没办法控制音量等等、一系列设置，这也就是我为什么抛弃他用不稳定的插件。[vuepress-plugin-musicplayer](https://github.com/qqlcx5/vuepress-plugin-musicplayer)
:::

再上配置, `/.vuepress/config.js` 

``` javascript
    ['vuepress-plugin-musicplayer', {
      showAllRank: true, // 默认 false
      baseUrl: 'https://netease-cloud-music-api-qqlcx5.vercel.app/', // 默认
    }],
```
## 部署上线

::: tip 提示
相对于部署到 Github Page 来说，可以使用 GitHub Actions 来进行自动部署。我们自己拥有服务器的选手，就相对来说比较麻烦。一般的情况就这些：
:::

|方法	|分析|
|:----:|:---:|
|FTP	|FTP 的速度相对来说确实太慢了，上传东西真的是龟速|
|SSH	|通过 SSH 直接连通服务器，大大加快了传输速度。但是还是需要手动操作数据包|
|宝塔面板	|直接打开宝塔页面，找到指定的页面，上传文件即可。但是网速较差的情况下打会很慢|

之前每次更新项目都得上传半天，很烦人。看到[reinness](https://reinness.com/)写了一篇文章，我们这就用这个方式来解决上传。

### 目录结构
首先在根目录创建 `deploy` 文件夹,并创建`config.js`和`index.js`

```
├─ deploy
│  ├─config.js
│  └─index.js
├─ docs
├─ public
```

### config.js

``` js
module.exports = {
	path: "/www/wwwroot/blog.vlssu.com/public.zip", //服务器上这个文件要放在哪里
	host: "xxx.xxx.xx.xx", // 服务器的host地址
	username: "xxxxxxx", // SSH用户名
	password: "xxxxxxxx", // SSH密码
	port: xx, //SSH连接的端口
};
```

### index.js

:::tip
我们需要先安装一些以来否者啥都用不了，当然需要注意版本不要整错了
:::

```bash
npm install archiver@4.0.1 node-ssh@10.0.1 -S
```

:::tip
现在！我们开始写`index.js`内容,**加深内容请仔细看**
:::

```js {9-12,28,42,59,82,97}
// 导入我们的包
const path = require("path");
const archiver = require("archiver");
const fs = require("fs");
const node_ssh = require("node-ssh");
const ssh = new node_ssh();
const configs = require("./config");

const srcPath = path.resolve(__dirname, "../public");
// 为什么是"../public"?
// 因为我的项目设置的打包名称为public,而且从上面的目录树中可以了解到，public与deploy是一级。
// 所以我为了找到public文件夹，就得使用 "../public"


//压缩目录为 public.zip
console.log("开始压缩dist目录...");
startZip();

function startZip() {
    var archive = archiver("zip", {
        zlib: {
            level: 8, // 搜索路径深度
        },
    }).on("error", function (err) {
        throw err; //压缩过程中如果有错误则抛出
    });
    var output = fs
        .createWriteStream(__dirname + "/public.zip")
        .on("close", function (err) {
			/*压缩结束时会触发close事件，然后才能开始上传，
              否则会上传一个内容不全且无法使用的zip包*/
            if (err) {
                console.log("关闭archiver异常:", err);
                return;
            }
            console.log("已生成zip包");
            console.log("开始上传public.zip至远程机器...");
            uploadFile();
        });

    archive.pipe(output); //典型的node流用法
    archive.directory(srcPath, "/public"); //将srcPach路径对应的内容添加到zip包中/public路径
    archive.finalize();
};

// 上传文件到服务器
function uploadFile() {
    ssh
        .connect({
            host: configs.host,
            username: configs.username,
            password: configs.password,
            port: configs.port,
        })
        .then(function () {
            console.log(configs.path);
            //上传网站的发布包至configs中配置的远程服务器的指定地址
            ssh
                .putFile(__dirname + "/public.zip", configs.path)
                .then(function (status) {
                    console.log("上传文件成功");
                    console.log("开始执行远端脚本");
                    startRemoteShell(); //上传成功后触发远端脚本
                })
                .catch((err) => {
                    console.log("文件传输异常:", err);
                    process.exit(0);
                });
        })
        .catch((err) => {
            console.log("ssh连接失败:", err);
            process.exit(0);
        });
};

// 执行远程端部署脚本
// 具体远端部署脚本··· deploy.sh
function startRemoteShell() {
    // 在服务器上cwd配置的路径下执行sh deploy.sh脚本来实现发布
    ssh
        .execCommand("sh deploy.sh", {
            cwd: "/www/wwwroot/blog.vlssu.com",
        })
        .then(function (result) {
            console.log("远程STDOUT输出: " + result.stdout);
            console.log("远程STDERR输出: " + result.stderr);
            if (!result.stderr) {
                console.log("发布成功!");
                removeLocalFile();
                process.exit(0);
            }
        });
};

// 为了不占用本地空间，完成操作后删除本地的打包文件
function removeLocalFile() {
    fs.unlink(__dirname + "/public.zip", function (error) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log("删除文件成功");
    });
};
```

### deploy.sh

以我的项目为例，服务器上面的目录结构如下

```
├─ public
│
└─ deploy.sh
```

**注意！！！deploy.sh需要事先放在服务器网站根目录中，否则无法正常使用**

:::tip
我的站点根节点为 public ,当上传了 public.zip 后，我需要先删除原来的 public 文件夹，然后再解压。然后删除 public.zip
:::

文件内容如下

```bash
rm -rf public
unzip public.zip
rm -rf public.zip
```

### 在 package.json 中添加 scripts 命令
**运行 `yarn auto`来运行指令**

``` js
"scripts": {
    "deploy": "node ./deploy/index.js",  // 一键发布
    "auto": "vuepress build docs && node ./deploy/index.js"  // 一键打包加发布
 }
```