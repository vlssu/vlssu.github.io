import{_ as e,o as s,c as a,e as n}from"./app-54_SznpJ.js";const l={},t=n(`<p>由于现在新项目都需要3.9，3.8及一下都不支持，然后我由想在win上直接弄，方便，所以需要在Ubuntu 20.04单独安装Python3.9环境教程。</p><blockquote><p>这玩意比win环境的<code>Python</code>好使多了</p></blockquote><h2 id="简洁安装" tabindex="-1"><a class="header-anchor" href="#简洁安装"><span>简洁安装</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">sudo apt update</span>
<span class="line">sudo apt install software-properties-common</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装需要的源，然后我们添加到列表包。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">sudo add-apt-repository ppa:deadsnakes/ppa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下</p></blockquote><blockquote><p>然后我们直接安装</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">sudo apt install python3.9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>然后我们检查版本</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">python3.9 --version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>注意，之后所有指令都是按照这个后面带3.9的</p></blockquote><h3 id="安装pip" tabindex="-1"><a class="header-anchor" href="#安装pip"><span>安装pip</span></a></h3><blockquote><p>记得root一下</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py</span>
<span class="line">python3.9 get-pip.py</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载源码编译安装" tabindex="-1"><a class="header-anchor" href="#下载源码编译安装"><span>下载源码编译安装</span></a></h2><h3 id="一、安装环境编译包" tabindex="-1"><a class="header-anchor" href="#一、安装环境编译包"><span>一、安装环境编译包</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">sudo apt update</span>
<span class="line">sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、下载最新python软件包" tabindex="-1"><a class="header-anchor" href="#二、下载最新python软件包"><span>二、下载最新python软件包</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cd /opt</span>
<span class="line">sudo wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、编译安装" tabindex="-1"><a class="header-anchor" href="#三、编译安装"><span>三、编译安装</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cd Python3.9.6/</span>
<span class="line"></span>
<span class="line">./configure --prefix=/usr/local/python3  # pip3使用ssl</span>
<span class="line"></span>
<span class="line">#编译</span>
<span class="line">make</span>
<span class="line"></span>
<span class="line">#安装</span>
<span class="line">sudo make install</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),i=[t];function d(p,r){return s(),a("div",null,i)}const o=e(l,[["render",d],["__file","python3.9.html.vue"]]),u=JSON.parse('{"path":"/blogs/share/linux/python3.9.html","title":"在Ubuntu如何安装Python3.9（Ubuntu 20.04）","lang":"zh-CN","frontmatter":{"title":"在Ubuntu如何安装Python3.9（Ubuntu 20.04）","date":"2021-08-21T00:00:00.000Z","tags":["Ubuntu","Python"],"categories":["Linux小知识"]},"headers":[{"level":2,"title":"简洁安装","slug":"简洁安装","link":"#简洁安装","children":[{"level":3,"title":"安装pip","slug":"安装pip","link":"#安装pip","children":[]}]},{"level":2,"title":"下载源码编译安装","slug":"下载源码编译安装","link":"#下载源码编译安装","children":[{"level":3,"title":"一、安装环境编译包","slug":"一、安装环境编译包","link":"#一、安装环境编译包","children":[]},{"level":3,"title":"二、下载最新python软件包","slug":"二、下载最新python软件包","link":"#二、下载最新python软件包","children":[]},{"level":3,"title":"三、编译安装","slug":"三、编译安装","link":"#三、编译安装","children":[]}]}],"git":{"createdTime":1664026496000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/share/linux/python3.9.md"}');export{o as comp,u as data};
