import{_ as i,r as e,o as u,c as r,b as n,d as s,e as a,w as t,f as k}from"./app-n3PUeXRq.js";const d={},m={class:"custom-container tip"},v=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),b=n("p",{class:"custom-container-title"},"TIP",-1),g=n("br",null,null,-1),h=n("code",null,"txt",-1),_=n("code",null,"txt",-1),$=n("code",null,"url",-1),f=n("h2",{id:"清单列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#清单列表","aria-hidden":"true"},"#"),s(" 清单列表")],-1),y=n("li",null,"Nginx 或 Apache",-1),w={href:"https://www.php.net/manual/zh/install.php",target:"_blank",rel:"noopener noreferrer"},q={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},x=k(`<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><p>通过 shell 执行以下命令。（记得到你网址的目录下）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require upyun/sdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),C=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`

`),n("span",{class:"token comment"},"// 记得在根目录中执行 `composer require upyun/sdk`"),s(`

`),n("span",{class:"token doc-comment comment"},`/**********************************************
* 文件名 : index.php
* 使用方法:
* <img src=img.php>
* <img src=img.php?2>
* ?2 这个2数字随便整，这样一个页面多处应用才能真正随机
* 
* https://api.example.com                   返回图片
* https://api.example.com?type=json         返回JSON参数
***********************************************/`),s(`

`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"isset"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_GET"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'folder'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$folder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword type-casting"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token variable"},"$_GET"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'folder'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token variable"},"$folder"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string single-quoted-string"},"'nothumb'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"require_once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'vendor/autoload.php'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token package"},[s("Upyun"),n("span",{class:"token punctuation"},"\\"),s("Upyun")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"use"),s(),n("span",{class:"token package"},[s("Upyun"),n("span",{class:"token punctuation"},"\\"),s("Config")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},"/**************配置Upyun服务**************/"),s(`
`),n("span",{class:"token variable"},"$serviceConfig"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Config"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string single-quoted-string"},"'服务名称'"),n("span",{class:"token punctuation"},","),s("         "),n("span",{class:"token comment"},"// 服务名称"),s(`
    `),n("span",{class:"token string single-quoted-string"},"'操作员名称'"),n("span",{class:"token punctuation"},","),s("       "),n("span",{class:"token comment"},"// 操作员名称"),s(`
    `),n("span",{class:"token string single-quoted-string"},"'操作员密码'"),s("        "),n("span",{class:"token comment"},"// 操作员密码"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$path"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string single-quoted-string"},"'/path/'"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// 读取路径"),s(`
`),n("span",{class:"token variable"},"$domain"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string single-quoted-string"},"'https://domain.example.com'"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// 加速域名"),s(`
`),n("span",{class:"token variable"},"$value"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string single-quoted-string"},"'!/webp'"),n("span",{class:"token punctuation"},";"),s("    "),n("span",{class:"token comment"},"// 优化参数"),s(`

`),n("span",{class:"token comment"},"// 防盗链参数,没有可不写"),s(`
`),n("span",{class:"token variable"},"$token"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token doc-comment comment"},"/**************以下内容请不要动**************/"),s(`

`),n("span",{class:"token comment"},"// 连接Upyun服务获取文件夹内的文件名"),s(`
`),n("span",{class:"token variable"},"$up"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Upyun"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$serviceConfig"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$files"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$up"),n("span",{class:"token operator"},"->"),n("span",{class:"token function"},"read"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token variable"},"$name"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"array_column"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$files"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'files'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'name'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 判断是否需要防盗链"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$token"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 防盗链参数拼接"),s(`
    `),n("span",{class:"token variable"},"$uri"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$path"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"array_rand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token variable"},"$expires"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"time"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"600"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token variable"},"$md5"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"md5"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string double-quoted-string"},[s('"'),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$token"),n("span",{class:"token punctuation"},"}")]),s("&"),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$expires"),n("span",{class:"token punctuation"},"}")]),s("&"),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$uri"),n("span",{class:"token punctuation"},"}")]),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token variable"},"$upt"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"substr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$md5"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"// 将防盗链参数拼接到图片链接中"),s(`
    `),n("span",{class:"token variable"},"$randomImage"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$domain"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$path"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"array_rand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$value"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token string double-quoted-string"},[s('"?_upt='),n("span",{class:"token interpolation"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$upt"),n("span",{class:"token punctuation"},"}")]),s('"')]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 不需要防盗链，则不拼接防盗链参数"),s(`
    `),n("span",{class:"token variable"},"$randomImage"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$domain"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$path"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},"["),n("span",{class:"token function"},"array_rand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$value"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// 生成随机数作为图片的返回值"),s(`
`),n("span",{class:"token variable"},"$randomValue"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"rand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 在访问链接时添加随机数作为查询参数，以确保同一页面访问多次时返回不同的图片"),s(`
`),n("span",{class:"token variable"},"$randomImage"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$randomImage"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$token"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string single-quoted-string"},"'&rand='"),s(),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string single-quoted-string"},"'?rand='"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"."),s(),n("span",{class:"token variable"},"$randomValue"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 返回指定格式"),s(`
`),n("span",{class:"token variable"},"$type"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$_GET"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'type'"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"??"),s(),n("span",{class:"token string single-quoted-string"},"''"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$type"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// JSON返回"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string single-quoted-string"},"'json'"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'Content-type: application/json'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"die"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"json_encode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string single-quoted-string"},"'image_url'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token variable"},"$randomImage"),n("span",{class:"token punctuation"},","),n("span",{class:"token string single-quoted-string"},"'random_value'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token variable"},"$randomValue"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"default"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token function"},"header"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string single-quoted-string"},"'Content-Type: image/png'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"echo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"file_get_contents"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$randomImage"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function I(G,N){const l=e("RouterLink"),o=e("ExternalLinkIcon"),c=e("CodeGroupItem"),p=e("CodeGroup");return u(),r("div",null,[n("div",m,[v,b,n("p",null,[s("创建又拍云存储会的吧？不会？看看我上一篇"),a(l,{to:"/blogs/deploy/imgapi.html"},{default:t(()=>[s("点击这里")]),_:1}),g,s(" *上一篇中会生成"),h,s("文件，然后读取"),_,s("文件内的"),$,s("，而这篇是拼接后直接输出展示，访问一次随机一次。")])]),f,n("ul",null,[y,n("li",null,[n("a",w,[s("PHP 7.4+"),a(o)])]),n("li",null,[n("a",q,[s("Composer"),a(o)])])]),x,a(p,null,{default:t(()=>[a(c,{title:"index.php"},{default:t(()=>[C]),_:1})]),_:1})])}const E=i(d,[["render",I],["__file","img_upyun_php.html.vue"]]);export{E as default};