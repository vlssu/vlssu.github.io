import{_ as i,r as o,o as r,c as t,b as s,e as n,w as e,d as a,f as d}from"./app-jWkSduDP.js";const p={},u=s("h2",{id:"安装-docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装-docker","aria-hidden":"true"},"#"),a(" 安装 Docker")],-1),m={class:"custom-container tip"},k=s("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[s("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[s("circle",{cx:"12",cy:"12",r:"9"}),s("path",{d:"M12 8h.01"}),s("path",{d:"M11 12h1v4h1"})])],-1),v=s("p",{class:"custom-container-title"},"官方的一键脚本安装法",-1),b=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"curl"),a(),s("span",{class:"token parameter variable"},"-sSL"),a(" https://get.docker.com/ "),s("span",{class:"token operator"},"|"),a(),s("span",{class:"token assign-left variable"},"CHANNEL"),s("span",{class:"token operator"},"="),a("stable "),s("span",{class:"token function"},"bash"),a(),s("span",{class:"token parameter variable"},"-s"),a(),s("span",{class:"token function"},"docker"),a(),s("span",{class:"token parameter variable"},"--mirror"),a(` Aliyun
systemctl `),s("span",{class:"token builtin class-name"},"enable"),a(),s("span",{class:"token parameter variable"},"--now"),a(),s("span",{class:"token function"},"docker"),a(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"curl"),a(),s("span",{class:"token parameter variable"},"-L"),a(),s("span",{class:"token string"},[a('"https://github.com/docker/compose/releases/latest/download/docker-compose-'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"uname"),a(),s("span",{class:"token parameter variable"},"-s"),s("span",{class:"token variable"},")")]),a("-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"uname"),a(),s("span",{class:"token parameter variable"},"-m"),s("span",{class:"token variable"},")")]),a('"')]),a(),s("span",{class:"token parameter variable"},"-o"),a(` /usr/local/bin/docker-compose
`),s("span",{class:"token comment"},"# 若阁下在上条指令上无法正常拉取压缩包或者拉取缓慢 可使用 gh-proxy 提供的CF反向代理来拉取"),a(`
`),s("span",{class:"token function"},"curl"),a(),s("span",{class:"token parameter variable"},"-L"),a(),s("span",{class:"token string"},[a('"https://mirror.ghproxy.com/https://github.com/docker/compose/releases/latest/download/docker-compose-'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"uname"),a(),s("span",{class:"token parameter variable"},"-s"),s("span",{class:"token variable"},")")]),a("-"),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"uname"),a(),s("span",{class:"token parameter variable"},"-m"),s("span",{class:"token variable"},")")]),a('"')]),a(),s("span",{class:"token parameter variable"},"-o"),a(` /usr/local/bin/docker-compose
`),s("span",{class:"token comment"},"# 将可执行权限应用于二进制文件并创建软链"),a(`
`),s("span",{class:"token function"},"chmod"),a(` +x /usr/local/bin/docker-compose
`),s("span",{class:"token function"},"ln"),a(),s("span",{class:"token parameter variable"},"-s"),a(` /usr/local/bin/docker-compose /usr/bin/docker-compose
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=d(`<h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> docker.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 Docker 服务（重要）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> Centos</h3><p>Docker 要求 CentOS 系统的内核版本高于 3.10 ，通过 <code>uname -r</code> 命令查看你当前的内核版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum update <span class="token parameter variable">-y</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 Docker 服务（重要）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 Docker</span>
pacman <span class="token parameter variable">-S</span> <span class="token function">docker</span>
<span class="token comment"># 启动 Docker</span>
systemctl start <span class="token function">docker</span>
<span class="token comment"># 开机启动 Docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token comment"># 关掉开机启动 Docker</span>
systemclt disable <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br></p><h3 id="给予当前用户docker权限-强烈建议" tabindex="-1"><a class="header-anchor" href="#给予当前用户docker权限-强烈建议" aria-hidden="true">#</a> 给予当前用户Docker权限 （强烈建议）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#添加docker用户组</span>
<span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
<span class="token comment">#将当前用户加入该用户组</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可能需要重新登陆后生效。</p><h3 id="检查-docker-环境是否正确-可选" tabindex="-1"><a class="header-anchor" href="#检查-docker-环境是否正确-可选" aria-hidden="true">#</a> 检查 Docker 环境是否正确（可选）</h3><p>查看是否已经安装，配好PATH路径，一般而言自动配好了。MCSManager 需要 Docker 命令必须能够执行，否则无法正确使用。</p><p>输出版本号即为正确。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检查-docker-是否能够运行-可选" tabindex="-1"><a class="header-anchor" href="#检查-docker-是否能够运行-可选" aria-hidden="true">#</a> 检查 Docker 是否能够运行（可选）</h3><p>运行 Hello world 程序（需要联网下载）。输出内容包含有 &quot;Hello from Docker!&quot; 则代表运行成功代表无问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置国内镜像源-可选-强烈建议做" tabindex="-1"><a class="header-anchor" href="#配置国内镜像源-可选-强烈建议做" aria-hidden="true">#</a> 配置国内镜像源（可选，强烈建议做）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/docker/daemon.json 

<span class="token punctuation">{</span> 
<span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://registry.docker-cn.com&quot;</span><span class="token punctuation">]</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="开机自启docker" tabindex="-1"><a class="header-anchor" href="#开机自启docker" aria-hidden="true">#</a> 开机自启docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> docker.service
<span class="token comment"># 设置开机自启</span>
systemctl disable docker.service
<span class="token comment"># 关闭开机自启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-docker" tabindex="-1"><a class="header-anchor" href="#卸载-docker" aria-hidden="true">#</a> 卸载 Docker</h2><ol><li>卸载docker</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索已经安装的docker 安装包</span>
yum list installed<span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>  
<span class="token comment"># 删除安装包</span>
yum <span class="token parameter variable">-y</span> remove docker*
<span class="token comment"># 删除docker 镜像</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>再次check docker是否已经卸载成功</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum list installed<span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span> 或者 <span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35);function f(x,_){const c=o("CodeGroupItem"),l=o("CodeGroup");return r(),t("div",null,[u,s("div",m,[k,v,n(l,null,{default:e(()=>[n(c,{title:"Docker"},{default:e(()=>[b]),_:1}),n(c,{title:"Docker Compose"},{default:e(()=>[h]),_:1})]),_:1})]),g])}const w=i(p,[["render",f],["__file","docker.html.vue"]]);export{w as default};