import{_ as s,o as n,c as a,e}from"./app-54_SznpJ.js";const l={},i=e(`<ol><li>安装github</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">yum <span class="token function">install</span> <span class="token function">git</span> <span class="token parameter variable">-y</span> <span class="token comment"># (Centos)</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span> <span class="token comment"># (Ubuntu)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装node.js管理器等组件</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">git</span> clone https://github.com/creationix/nvm.git ~/nvm</span>
<span class="line"><span class="token comment"># 设置nvm 自动运行</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;source ~/nvm/nvm.sh&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc</span>
<span class="line"><span class="token builtin class-name">source</span> ~/.bashrc</span>
<span class="line"><span class="token comment"># 查看所有版本(部分环境可能不支持最高版本)</span></span>
<span class="line">nvm list-remote</span>
<span class="line"><span class="token comment"># 安装npm的最新版本</span></span>
<span class="line">nvm <span class="token function">install</span> stable</span>
<span class="line"><span class="token comment"># 使用最新版本</span></span>
<span class="line">nvm use stable</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用国内镜像" tabindex="-1"><a class="header-anchor" href="#使用国内镜像"><span>使用国内镜像</span></a></h2><ul><li>对于国内而言，访问外网是很困难的，这会导致访问速度很慢，而国内镜像就很重要了</li></ul><h3 id="node-国内镜像" tabindex="-1"><a class="header-anchor" href="#node-国内镜像"><span>node 国内镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_NODEJS_ORG_MIRROR</span><span class="token operator">=</span>https://npmmirror.com/mirrors/node</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="npm-国内镜像" tabindex="-1"><a class="header-anchor" href="#npm-国内镜像"><span>npm 国内镜像</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="npm-win-国内镜像源" tabindex="-1"><a class="header-anchor" href="#npm-win-国内镜像源"><span>npm WIN 国内镜像源</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com <span class="token parameter variable">--global</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> disturl https://npmmirror.com/mirrors/node <span class="token parameter variable">--global</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn-安装" tabindex="-1"><a class="header-anchor" href="#yarn-安装"><span>yarn 安装</span></a></h2><h3 id="启用yarn" tabindex="-1"><a class="header-anchor" href="#启用yarn"><span>启用yarn</span></a></h3><p>Node.js &gt;=16.10</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">corepack <span class="token builtin class-name">enable</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Node.js &lt;16.10</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-g</span> corepack</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="安装-yarn" tabindex="-1"><a class="header-anchor" href="#安装-yarn"><span>安装 yarn</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">corepack prepare yarn@stable <span class="token parameter variable">--activate</span></span>
<span class="line"><span class="token comment"># 指定版本安装yarn</span></span>
<span class="line">corepack prepare yarn@<span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> <span class="token parameter variable">--activate</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[i];function r(c,p){return n(),a("div",null,t)}const o=s(l,[["render",r],["__file","node.html.vue"]]),m=JSON.parse('{"path":"/blogs/share/linux/node.html","title":"Linux系统如何安装node管理器","lang":"zh-CN","frontmatter":{"title":"Linux系统如何安装node管理器","date":"2020-05-03T00:00:00.000Z","tags":["Centos","Ubuntu","Node","npm"],"categories":["Linux小知识"]},"headers":[{"level":2,"title":"使用国内镜像","slug":"使用国内镜像","link":"#使用国内镜像","children":[{"level":3,"title":"node 国内镜像","slug":"node-国内镜像","link":"#node-国内镜像","children":[]},{"level":3,"title":"npm 国内镜像","slug":"npm-国内镜像","link":"#npm-国内镜像","children":[]},{"level":3,"title":"npm WIN 国内镜像源","slug":"npm-win-国内镜像源","link":"#npm-win-国内镜像源","children":[]}]},{"level":2,"title":"yarn 安装","slug":"yarn-安装","link":"#yarn-安装","children":[{"level":3,"title":"启用yarn","slug":"启用yarn","link":"#启用yarn","children":[]},{"level":3,"title":"安装 yarn","slug":"安装-yarn","link":"#安装-yarn","children":[]}]}],"git":{"createdTime":1664026496000,"updatedTime":1717228112000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":3}]},"filePathRelative":"blogs/share/linux/node.md"}');export{o as comp,m as data};
