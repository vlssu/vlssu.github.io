import{_ as p,r as e,o as r,c as u,a as n,b as s,d as t,w as o,e as i}from"./app-DiqqWhPP.js";const d="/assets/imgapi_1-sCpZP1W_.png",k="/assets/imgapi_2-DdWoMjhD.png",m="/assets/imgapi_3-BYR3dENc.png",g="/assets/imgapi_4-BUlId-JP.png",v="/assets/imgapi_5-Bwzj1V1S.png",h="/assets/imgapi_6-BIF1NyTr.png",b="/assets/imgapi_7-V2taPOcr.png",_="/assets/imgapi_8-BJynHYsl.png",y="/assets/imgapi_9-59VUKyua.png",w="/assets/imgapi_10-DaTKDTpu.png",f="/assets/imgapi_11-BKAmb4Jf.png",x="/assets/imgapi_12-D9glm-WC.png",E={},T=n("p",null,"我们都希望有个自己的随机图源，但是不会咋办呢，今天我就来教你们",-1),$=n("p",null,"这里我们以宝塔搭建为例",-1),P=n("h2",{id:"建立对象存储桶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#建立对象存储桶"},[n("span",null,"建立对象存储桶")])],-1),C={href:"https://www.upyun.com/products/file-storage",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.upyun.com/league",target:"_blank",rel:"noopener noreferrer"},q={href:"https://console.upyun.com/register/?invite=BJ71n3kxY",target:"_blank",rel:"noopener noreferrer"},A={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},M=i('<p><img src="'+d+'" alt=""></p><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><ul><li>服务器名称随便填，便于你的管理</li><li>应用场景选择<code>网页图片</code></li><li>存储类型<code>标准存储</code></li><li>加速区域按照自己的喜好</li><li>需要创建一个操作员并授权，注意<strong>密码</strong>只显示一次，请妥善保管</li></ul></div><p><img src="'+k+'" alt=""></p><p>完成创建后，系统会自动分配测试加速域名，但！因为只有一个节点并且仅供测试使用，有不稳定的因素，因此不能使用在生产环境 <br>所以我们需要绑定域名 （此域名必须经过IPC备案）才能使用全部节点。点击域名绑定，输入已备案的域名，当然也可以使用二级域名。</p><p><img src="'+m+'" alt=""></p><p>绑定成功后，需要在域名服务商添加一个<code>CNAME</code>解析，线路选择默认就完事了，填入又拍云提供的<code>CNAME</code>。</p><h2 id="配置域名相关" tabindex="-1"><a class="header-anchor" href="#配置域名相关"><span>配置域名相关</span></a></h2><ol><li><p>绑定<code>CNAME</code> 怎么绑定应该会吧？ <img src="'+g+'" alt=""></p></li><li><p>设置HTTPS</p></li></ol><p>功能配置-HTTPS-HTTPS 配置-管理-证书管理</p><p><img src="'+v+'" alt=""></p><p>申请SSL证书 - <strong>Let&#39;s Encrypt</strong> - 创建订单</p><p><img src="'+h+'" alt=""></p><p>支付完成之后会跳转回去，证书类型里面会多出一个单域名证书，补全域名信息（前提是你的域名已经解析了库的域名，就可以开整了</p><p><img src="'+b+'" alt=""></p><h2 id="配置api前置需要" tabindex="-1"><a class="header-anchor" href="#配置api前置需要"><span>配置api前置需要</span></a></h2><ol><li>你需要在库中新建一个目录，来管理你的图片，并上传</li></ol><p><img src="'+_+'" alt=""></p><ol start="2"><li>到宝塔中，安装Python项目管理器并安装版本（这里安装的<code>3.8.5</code>）</li></ol><p><img src="'+y+'" alt=""></p><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><table><thead><tr><th style="text-align:center;">项目名称</th><th style="text-align:center;">随便起</th></tr></thead><tbody><tr><td style="text-align:center;">路径</td><td style="text-align:center;">你的项目文件夹</td></tr><tr><td style="text-align:center;">Python版本</td><td style="text-align:center;">3.8.5</td></tr><tr><td style="text-align:center;">框架</td><td style="text-align:center;">python</td></tr><tr><td style="text-align:center;">启动方式</td><td style="text-align:center;">python</td></tr><tr><td style="text-align:center;">启动文件/文件夹</td><td style="text-align:center;">你的项目文件夹/autoUP.py</td></tr><tr><td style="text-align:center;">端口</td><td style="text-align:center;">空着</td></tr></tbody></table></div><p><img src="'+w+'" alt=""></p><ol start="3"><li>设置模块</li></ol><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>手动添加</p><ul><li>requests</li><li>upyun</li></ul></div><p><img src="'+f+`" alt=""></p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>img
├── index.php
├── autoUP.py
└── img.txt （执行autoUP.py生成文件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),N=n("div",{class:"language-php line-numbers-mode","data-ext":"php","data-title":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`

`),n("span",{class:"token doc-comment comment"},`/**********************************************
* 文件名 : index.php
* 使用方法:
* <img src=img.php>
* <img src=img.php?2>
* ?2 这个2数字随便整，这样一个页面多处应用才能真正随机
***********************************************/`),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"isset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_GET"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'folder'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$folder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword type-casting"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token variable"},"$_GET"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'folder'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$folder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string single-quoted-string"},"'nothumb'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"//存有图片链接的文件名img.txt"),s(`
`),n("span",{class:"token variable"},"$filename"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string double-quoted-string"},'"img.txt"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"file_exists"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"die"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'文件不存在'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
 
`),n("span",{class:"token comment"},"//从文本获取链接"),s(`
`),n("span",{class:"token variable"},"$pics"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$fs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"fopen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string double-quoted-string"},'"r"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"feof"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$fs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$line"),n("span",{class:"token operator"},"="),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"fgets"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$fs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$line"),n("span",{class:"token operator"},"!="),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"array_push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$pics"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$line"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
 
`),n("span",{class:"token comment"},"//从数组随机获取链接"),s(`
`),n("span",{class:"token variable"},"$pic"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$pics"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"array_rand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$pics"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
 
`),n("span",{class:"token comment"},"//返回指定格式"),s(`
`),n("span",{class:"token variable"},"$type"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$_GET"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'type'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"??"),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"switch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$type"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
 
`),n("span",{class:"token comment"},"//JSON返回"),s(`
`),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string single-quoted-string"},"'json'"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'Content-type:text/json'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"die"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"json_encode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'pic'"),n("span",{class:"token operator"},"=>"),n("span",{class:"token variable"},"$pic"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
 
`),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},'// die(header("Location: $pic"));'),s(`
    `),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'Content-Type: image/png'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"echo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"file_get_contents"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$pic"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(` upyun
`),n("span",{class:"token keyword"},"import"),s(` os
service `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'upyum-vlssu'"),s(),n("span",{class:"token comment"},"#服务名称"),s(`
username `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'upyum'"),s(),n("span",{class:"token comment"},"#操作员用户名"),s(`
password `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'sdsadasdsagsrgsd'"),s(),n("span",{class:"token comment"},"#操作员密码"),s(`
path `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'/randompics/'"),s(),n("span",{class:"token comment"},"#填写你随机图片在又拍云对象存储里的路径"),s(`
url `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"https://upyum.vlssu.com"'),s(),n("span",{class:"token comment"},"#填写你的cdn域名"),s(`
file_path `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"/www/wwwroot/api.vlssu.com/img.txt"'),s(),n("span",{class:"token comment"},"#填写你img.txt 在服务器里面的路径"),s(`
up `),n("span",{class:"token operator"},"="),s(" upyun"),n("span",{class:"token punctuation"},"."),s("UpYun"),n("span",{class:"token punctuation"},"("),s("service"),n("span",{class:"token punctuation"},","),s(" username"),n("span",{class:"token punctuation"},","),s(" password"),n("span",{class:"token punctuation"},","),s(" timeout"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(" endpoint"),n("span",{class:"token operator"},"="),s("upyun"),n("span",{class:"token punctuation"},"."),s("ED_AUTO"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"#初始化"),s(`
res `),n("span",{class:"token operator"},"="),s(" up"),n("span",{class:"token punctuation"},"."),s("getlist"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"#读取该目录下的图片列表"),s(`
`),n("span",{class:"token keyword"},"with"),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),s("file_path"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'w'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"as"),s(" f"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token keyword"},"in"),s(" res"),n("span",{class:"token punctuation"},":"),s(`
        f`),n("span",{class:"token punctuation"},"."),s("write"),n("span",{class:"token punctuation"},"("),s("url "),n("span",{class:"token operator"},"+"),s(" path "),n("span",{class:"token operator"},"+"),s(" i"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"name"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},"'\\n'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=i('<h3 id="运行脚本并自动化" tabindex="-1"><a class="header-anchor" href="#运行脚本并自动化"><span>运行脚本并自动化</span></a></h3><p>在宝塔的计划任务中设置</p><p><img src="'+x+`" alt=""></p><p>脚本内容</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#管理器默认使用pip安装项目根目录requirements.txt内的模块，如有其他模块需要安装请手动进入虚拟环境安装</span>
<span class="token comment">#进入虚拟环境方法：</span>
<span class="token comment">#在命令行输入 source 项目路径/项目名_venv/bin/activate</span>
<span class="token comment">#如：source /data/python/project1_venv/bin/activate</span>

<span class="token comment"># 根据Python项目管理器中的提示修改</span>

<span class="token builtin class-name">source</span> /www/wwwroot/api.vlssu.com/img_venv/bin/activate

<span class="token comment"># 更换为你python文件的路径</span>

python /www/wwwroot/api.vlssu.com/autoUP.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),I={href:"https://ioalzx.site/ioalzx/tech/12/%E4%BD%BF%E7%94%A8%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E5%92%8Ccdn%E5%8A%A0%E9%80%9F%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api/",target:"_blank",rel:"noopener noreferrer"};function D(S,G){const a=e("ExternalLinkIcon"),l=e("CodeGroupItem"),c=e("CodeGroup");return r(),u("div",null,[T,$,P,n("p",null,[s("我使用"),n("a",C,[s("又拍云对象存储"),t(a)]),s("来进行演示,原因也简单，可以获得10g免费容量和每月15g免费流量，当然得参加"),n("a",B,[s("加入又拍云联盟"),t(a)]),s("。你也可以使用腾讯云cos以及阿里云oss，也有一定的免费额度，但是没有这个持久啊，不能永久白嫖多不好。")]),n("p",null,[s("如果注册的话使用我的邀请码哈，"),n("a",q,[s("[点击我前往注册]"),t(a)])]),n("p",null,[s("建立好账号后进入"),n("a",A,[s("[又拍云云存储控制台]"),t(a)]),s("，点击创建服务。")]),M,t(c,null,{default:o(()=>[t(l,{title:"index.php"},{default:o(()=>[N]),_:1}),t(l,{title:"autoUP.py"},{default:o(()=>[U]),_:1})]),_:1}),j,n("p",null,[s("脚本借鉴 "),n("a",I,[s("ioalzx"),t(a)]),s(" 并加以修改")])])}const Z=p(E,[["render",D],["__file","imgapi.html.vue"]]),z=JSON.parse('{"path":"/blogs/deploy/imgapi.html","title":"自建图片api","lang":"zh-CN","frontmatter":{"title":"自建图片api","date":"2021-08-10T00:00:00.000Z","tags":["UPYUM"],"categories":["教程"],"description":"我们都希望有个自己的随机图源，但是不会咋办呢，今天我就来教你们 这里我们以宝塔搭建为例 建立对象存储桶 我使用又拍云对象存储来进行演示,原因也简单，可以获得10g免费容量和每月15g免费流量，当然得参加加入又拍云联盟。你也可以使用腾讯云cos以及阿里云oss，也有一定的免费额度，但是没有这个持久啊，不能永久白嫖多不好。 如果注册的话使用我的邀请码哈，[...","head":[["meta",{"property":"og:url","content":"https://vlssu.github.io/blogs/deploy/imgapi.html"}],["meta",{"property":"og:site_name","content":"师叔の小窝"}],["meta",{"property":"og:title","content":"自建图片api"}],["meta",{"property":"og:description","content":"我们都希望有个自己的随机图源，但是不会咋办呢，今天我就来教你们 这里我们以宝塔搭建为例 建立对象存储桶 我使用又拍云对象存储来进行演示,原因也简单，可以获得10g免费容量和每月15g免费流量，当然得参加加入又拍云联盟。你也可以使用腾讯云cos以及阿里云oss，也有一定的免费额度，但是没有这个持久啊，不能永久白嫖多不好。 如果注册的话使用我的邀请码哈，[..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-02T17:17:23.000Z"}],["meta",{"property":"article:tag","content":"UPYUM"}],["meta",{"property":"article:published_time","content":"2021-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-02T17:17:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自建图片api\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-02T17:17:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"建立对象存储桶","slug":"建立对象存储桶","link":"#建立对象存储桶","children":[]},{"level":2,"title":"配置域名相关","slug":"配置域名相关","link":"#配置域名相关","children":[]},{"level":2,"title":"配置api前置需要","slug":"配置api前置需要","link":"#配置api前置需要","children":[{"level":3,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":3,"title":"运行脚本并自动化","slug":"运行脚本并自动化","link":"#运行脚本并自动化","children":[]}]}],"git":{"createdTime":1696266247000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/deploy/imgapi.md","autoDesc":true}');export{Z as comp,z as data};