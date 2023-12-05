import{_ as u,r as i,o as m,c as p,a as d,b as n,d as e,e as s,w as a,f as r}from"./app-gSifrPb8.js";const h={},v=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("ul",null,[n("li",null,"一个终端控制多台服务器"),n("li",null,"站点服务器不再占用过高")])],-1),b=n("h2",{id:"linux",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),e(" Linux")],-1),g=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"如果你并不想去学习如何自己搭建，可以使用源作者的安装指令（我的脚本没必要了）"),n("details",{class:"custom-container details"},[n("summary",{class:"custom-container-title"},"Linux"),n("p",null,[e("安装成功后，使用 "),n("code",null,"systemctl start mcsm-{(web, daemon)}"),e(" 命令即可启动面板")]),n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`wget -qO- https://gitee.com/mcsmanager/script/raw/master/setup.sh | bash
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])])])],-1),k=n("h2",{id:"前期需要软件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前期需要软件","aria-hidden":"true"},"#"),e(" 前期需要软件")],-1),x={href:"https://vlssu.lanzoui.com/i88wyvi",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.lanzoui.com/i88wyqd",target:"_blank",rel:"noopener noreferrer"},f=n("li",null,"服务端（本教程使用 Spigot）",-1),w=n("li",null,"Centos或Ubuntu主机一台 （教程使用 centos7.9）",-1),j=r('<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ol><li>极力推荐Centos系统，Ubuntu系统未经博主测试</li><li>未标注哪个系统指令则两者都可适用</li><li>若标题注释了哪个系统那只能适用那个系统或另一个系统不需要输此指令</li></ol><h2 id="环境部署" tabindex="-1"><a class="header-anchor" href="#环境部署" aria-hidden="true">#</a> 环境部署</h2><h3 id="系统更新" tabindex="-1"><a class="header-anchor" href="#系统更新" aria-hidden="true">#</a> 系统更新</h3><ul><li>首先你要确保你的系统是最新的</li></ul>',5),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("yum update "),n("span",{class:"token parameter variable"},"-y"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"apt-get"),e(" update "),n("span",{class:"token parameter variable"},"-y"),e(`
`),n("span",{class:"token function"},"apt-get"),e(" upgrade "),n("span",{class:"token parameter variable"},"-y"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h3",{id:"安装node-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装node-js","aria-hidden":"true"},"#"),e(" 安装node.js")],-1),S=n("strong",null,"若发现国内下载很慢可以参考这篇来使用国内镜像部署",-1),D=n("strong",null,"[Linux系统如何安装node管理器]",-1),L=n("ol",null,[n("li",null,"安装Git")],-1),E=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[e("yum "),n("span",{class:"token function"},"install"),e(),n("span",{class:"token function"},"git"),e(),n("span",{class:"token parameter variable"},"-y"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"apt"),e(),n("span",{class:"token function"},"install"),e(),n("span",{class:"token function"},"git"),e(),n("span",{class:"token parameter variable"},"-y"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),P=r(`<ol start="2"><li>安装node.js管理器等组件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/creationix/nvm.git ~/nvm
<span class="token comment"># 设置nvm 自动运行</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;source ~/nvm/nvm.sh&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token comment"># 安装npm的v16版本</span>
nvm <span class="token function">install</span> v16.14.0
<span class="token comment"># 使用v13版本</span>
nvm use v16.14.0
<span class="token comment"># 安装npm最新版本并使用最新版本 //建议使用稳定版而不是最新测试版</span>
<span class="token comment"># nvm install stable &amp;&amp; nvm use stable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="请关闭终端重新打开或重新连接终端-再依次执行以下命令-重要" tabindex="-1"><a class="header-anchor" href="#请关闭终端重新打开或重新连接终端-再依次执行以下命令-重要" aria-hidden="true">#</a> 请关闭终端重新打开或重新连接终端 再依次执行以下命令（重要！）</h4><h3 id="安装java" tabindex="-1"><a class="header-anchor" href="#安装java" aria-hidden="true">#</a> 安装java</h3>`,4),U=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 安装java8 按需安装，建议直接下载用绝对链接来开服"),e(`
`),n("span",{class:"token comment"},"# yum install java-1.8.0-openjdk java-1.8.0-openjdk-devel"),e(`

`),n("span",{class:"token comment"},"# 安装java17"),e(`
yum `),n("span",{class:"token function"},"install"),e(` java-17-openjdk java-17-openjdk-devel
`),n("span",{class:"token comment"},"# 查看java版本"),e(`
`),n("span",{class:"token function"},"java"),e(),n("span",{class:"token parameter variable"},"-version"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# apt install openjdk-8-jdk"),e(`

`),n("span",{class:"token function"},"apt"),e(),n("span",{class:"token function"},"install"),e(` openjdk-17-jdk
`),n("span",{class:"token comment"},"# 如果我们在服务器上安装了多个Java版本，我们可以使用 update-alternatives 来更改系统默认版本"),e(`
`),n("span",{class:"token comment"},"# 要维持当前值[*]请按<回车键>，或者键入选择的编号：<br>"),e(`
`),n("span",{class:"token comment"},"# 在出现提示时输入号码并按Enter键。"),e(`

`),n("span",{class:"token comment"},"# 查看java版本"),e(`
`),n("span",{class:"token function"},"java"),e(),n("span",{class:"token parameter variable"},"-version"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("h3",{id:"安装mcsm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装mcsm","aria-hidden":"true"},"#"),e(" 安装MCSM")],-1),N=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"克隆**MCSManager前端**并安装依赖"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 下载面板端（Web）程序 并重命名为 web"),e(`
`),n("span",{class:"token function"},"git"),e(` clone https://github.com/MCSManager/MCSManager-Web-Production.git web
`),n("span",{class:"token comment"},"# 进入 web 文件夹中"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` web
`),n("span",{class:"token comment"},"# 安装依赖库"),e(`
`),n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(),n("span",{class:"token parameter variable"},"--registry"),n("span",{class:"token operator"},"="),e(`https://registry.npm.taobao.org
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])],-1),T=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"克隆**MCSManager后端**并安装依赖"),n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 下载守护进程（Daemon）程序"),e(`
`),n("span",{class:"token function"},"git"),e(` clone https://github.com/MCSManager/MCSManager-Daemon-Production.git daemon
`),n("span",{class:"token comment"},"# 进入 daemon 文件夹中"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` daemon
`),n("span",{class:"token comment"},"# 安装依赖库"),e(`
`),n("span",{class:"token function"},"npm"),e(),n("span",{class:"token function"},"install"),e(),n("span",{class:"token parameter variable"},"--registry"),n("span",{class:"token operator"},"="),e(`https://registry.npm.taobao.org
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"访问地址"),n("th",{style:{"text-align":"center"}},"localhost:24444")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"访问密钥"),n("td",{style:{"text-align":"center"}},"[你的密钥，是一串16进制数字]")]),n("tr",null,[n("td",{style:{"text-align":"center"}}),n("td",{style:{"text-align":"center"}},"密钥作为守护进程唯一认证手段")])])])],-1),V=r(`<h2 id="保持后台运行" tabindex="-1"><a class="header-anchor" href="#保持后台运行" aria-hidden="true">#</a> 保持后台运行</h2><p>我们使用<code>pm2</code>软件来让面板保持后台运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装pm2</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2

<span class="token comment"># 先启动守护进程</span>
pm2 start daemon/app.js

<span class="token comment"># 然后启动面板端进程</span>
pm2 start web/app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><b>PM2命令：</b></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2
pm2 start app.js        // 启动
pm2 start app.js <span class="token parameter variable">-i</span> max //启动 使用所有CPU核心的集群
pm2 stop app.js         // 停止
pm2 stop all            // 停止所有
pm2 restart app.js      // 重启
pm2 restart all         // 重启所有
pm2 delete  app.js      // 关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端口开放" tabindex="-1"><a class="header-anchor" href="#端口开放" aria-hidden="true">#</a> 端口开放</h2><p>面板需要 23333（主功能） 端口<br> 24444（后端api）端口（可选）</p><p>如果你使用阿里云，腾讯云或者服务商，<b>请进入控制台到防火墙安全组策略，放行以上端口。</b></p><p>如果依然无法访问，请关闭系统自带防火墙：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭防火墙，依次执行</span>
systemctl stop firewalld.service
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改站点配置文件" tabindex="-1"><a class="header-anchor" href="#修改站点配置文件" aria-hidden="true">#</a> 修改站点配置文件</h2><table><thead><tr><th style="text-align:center;">配置文件</th><th style="text-align:center;"><code>data/SystemConfig/config.json</code></th></tr></thead><tbody><tr><td style="text-align:center;">用户数据文件</td><td style="text-align:center;"><code>data/User/*.json</code></td></tr><tr><td style="text-align:center;">远程守护进程配置</td><td style="text-align:center;"><code>data/RemoteServiceConfig/*.json</code></td></tr></tbody></table><h2 id="默认账户" tabindex="-1"><a class="header-anchor" href="#默认账户" aria-hidden="true">#</a> 默认账户</h2><p>现在，访问 http://你的ip:23333/ 即可进入面板。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 最高管理员权限（注意，管理员与管理员之间账号可互删）
默认账号：root
默认密码: 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请及时修改密码。</p><h2 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h2>`,17),q={href:"https://getbukkit.org/download/spigot",target:"_blank",rel:"noopener noreferrer"},O={href:"https://papermc.io/downloads",target:"_blank",rel:"noopener noreferrer"},R={href:"https://files.minecraftforge.net",target:"_blank",rel:"noopener noreferrer"},F=n("h2",{id:"服务器插件-mod",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务器插件-mod","aria-hidden":"true"},"#"),e(" 服务器插件/MOD")],-1),z={href:"https://dev.bukkit.org",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.spigotmc.org",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.curseforge.com/minecraft/modpacks",target:"_blank",rel:"noopener noreferrer"},H=r(`<h2 id="计划任务项目" tabindex="-1"><a class="header-anchor" href="#计划任务项目" aria-hidden="true">#</a> 计划任务项目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>列如设置在每日凌晨3点执行一次：
* * 3 * * *

如果是想每隔3个小时执行一次：
* * */3 * * *

如果设置3月20号凌晨1点10分执行，并将执行次数设置为1。
* 10 1 20 3 *

具体使用方法如下：

* * * * * *
┬ ┬ ┬ ┬ ┬ ┬
│ │ │ │ │ │
│ │ │ │ │ └ 星期几（0-7）（0或7是星期日）
│ │ │ │ └───── 月（1-12）
│ │ │ └────────── 每月的某日（1-31）
│ │ └─────────────── 小时（0-23）
│ └──────────────────── 分钟（0-59）
└───────────────────────── 秒（0-59，可选）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function X(Z,A){const o=i("RouterLink"),l=i("ExternalLinkIcon"),t=i("CodeGroupItem"),c=i("CodeGroup");return m(),p("div",null,[v,d(" more "),n("p",null,[e("::: theorem 过时的MCSManager 8.0 我们以前常用的独立式MCSM面板 ::: right 跳转至MCSManager 8.0文章 "),s(o,{to:"/blogs/share/minecraft/mcsm.html"},{default:a(()=>[e("师叔の小窝")]),_:1}),e(" :::")]),b,g,k,n("ol",null,[n("li",null,[e("远程SSH控制台软件（本教程使用 Remote Terminal 此为win10商店软件）"),n("a",x,[e("[点我下载(此软件为Xshell)]"),s(l)])]),n("li",null,[e("支持Sftp的FTP软件（本教程使用 FileZilla）"),n("a",_,[e("[点我下载]"),s(l)])]),f,w]),j,s(c,null,{default:a(()=>[s(t,{title:"Centos"},{default:a(()=>[y]),_:1}),s(t,{title:"Ubuntu"},{default:a(()=>[M]),_:1})]),_:1}),C,n("ul",null,[n("li",null,[S,s(o,{to:"/blogs/share/linux/node.html"},{default:a(()=>[D]),_:1})])]),L,s(c,null,{default:a(()=>[s(t,{title:"Centos"},{default:a(()=>[E]),_:1}),s(t,{title:"Ubuntu"},{default:a(()=>[B]),_:1})]),_:1}),P,n("ul",null,[n("li",null,[e("如果要看更精细的步骤可以看这个文章 "),s(o,{to:"/blogs/share/linux/java8.html"},{default:a(()=>[e("[如何在Linux系统中安装Java8]")]),_:1})])]),s(c,null,{default:a(()=>[s(t,{title:"Centos"},{default:a(()=>[U]),_:1}),s(t,{title:"Ubuntu"},{default:a(()=>[I]),_:1})]),_:1}),G,N,T,V,n("ul",null,[n("li",null,[n("a",q,[e("Spigot"),s(l)]),e(" [可以装插件]")]),n("li",null,[n("a",O,[e("paper"),s(l)]),e(" [可以装插件]")]),n("li",null,[n("a",R,[e("Forge"),s(l)]),e(" [可以装MOD]")])]),F,n("ul",null,[n("li",null,[n("a",z,[e("bukkit"),s(l)]),e(" [下载插件]")]),n("li",null,[n("a",J,[e("spigotmc"),s(l)]),e(" [下载插件]")]),n("li",null,[n("a",W,[e("curseforge"),s(l)]),e(" [下载MOD]")])]),H,d(`
## Docker 启动 Minecraft 服务端
- 如何安装Docker参考我这篇文章[[在Linux中安装Docker]](../linux/docker.html)
### 关闭SElinux
- 临时关闭SElinux

\`\`\`bash
setenforce 0
\`\`\`

- SElinux系统默认开启，如果不关闭会导致\`Docker\`无法访问项目目录
- 如何关闭Linux里面SElinux参考我这篇文章[[如何关闭Linux里面的SElinux]](../linux/selinux.html)


### 创建Docker

1. 使用\`root\`账号登录
2. 进入 \`服务端管理\`
3. 选择中上方的 \`创建虚拟镜像\` 中创建 Docker 镜像。
4. 默认情况下，无需修改。点击 \`创建镜像\`
5. 最后。等待，速度与你网络有关，\`任务结果列表\` 显示成功则成功。

### 创建服务端

创建服务端十分简单，点击\`新建实例\`即可。

通过里面的指引，创建你的 MC 服务器，稍后可以通过文件在线管理上传你的核心文件。


### 此端的 Docker 配置

1. 创建好服务端之后，点击这个服务器实例的【参数】然后到【docker 配置】
2. 勾上【此服务端启用 Docker 容器】选择框
3. 在【端口限制】中填写\`25565:25565\`即可，此意是开放 25565 端口。冒号两边一般情况下保持一致即可。
4. 保存

### 最后的操作

1. 回到服务端管理界面
2. 点击【管理】进入【文件在线管理】，上传你的核心文件。
3. 你已经给你的 Minecraft 服务端配置好了 Docker，现在只需要上传核心文件，然后启动就行啦！

- 启动时，Docker 容器会自动加载你的 Minecraft 服务端，保证安全性，稳定性。

### 写在最后

Docker 相关命令：

\`\`\`bash
docker ps # 查看当前 Docker 进程
docker images # 查看当前 Docker 有哪些镜像（包括运行和未运行的）
docker kill mcsd # 强制杀死当前 Docker ，包括你的 Minecraft 服务端（失去控制时使用）
\`\`\`
`)])}const Q=u(h,[["render",X],["__file","mcsm9.html.vue"]]);export{Q as default};
