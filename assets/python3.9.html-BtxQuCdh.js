import{_ as e,o as t,c as n,e as a}from"./app-CHmId3RF.js";const i={},l=a(`<p>由于现在新项目都需要3.9，3.8及一下都不支持，然后我由想在win上直接弄，方便，所以需要在Ubuntu 20.04单独安装Python3.9环境教程。</p><blockquote><p>这玩意比win环境的<code>Python</code>好使多了</p></blockquote><h2 id="简洁安装" tabindex="-1"><a class="header-anchor" href="#简洁安装"><span>简洁安装</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt update
sudo apt install software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装需要的源，然后我们添加到列表包。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo add-apt-repository ppa:deadsnakes/ppa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下</p></blockquote><blockquote><p>然后我们直接安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt install python3.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>然后我们检查版本</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>python3.9 --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意，之后所有指令都是按照这个后面带3.9的</p></blockquote><h3 id="安装pip" tabindex="-1"><a class="header-anchor" href="#安装pip"><span>安装pip</span></a></h3><blockquote><p>记得root一下</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3.9 get-pip.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载源码编译安装" tabindex="-1"><a class="header-anchor" href="#下载源码编译安装"><span>下载源码编译安装</span></a></h2><h3 id="一、安装环境编译包" tabindex="-1"><a class="header-anchor" href="#一、安装环境编译包"><span>一、安装环境编译包</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt update
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、下载最新python软件包" tabindex="-1"><a class="header-anchor" href="#二、下载最新python软件包"><span>二、下载最新python软件包</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd /opt
sudo wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、编译安装" tabindex="-1"><a class="header-anchor" href="#三、编译安装"><span>三、编译安装</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd Python3.9.6/

./configure --prefix=/usr/local/python3  # pip3使用ssl

#编译
make

#安装
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),s=[l];function d(o,r){return t(),n("div",null,s)}const p=e(i,[["render",d],["__file","python3.9.html.vue"]]),u=JSON.parse('{"path":"/blogs/share/linux/python3.9.html","title":"在Ubuntu如何安装Python3.9（Ubuntu 20.04）","lang":"zh-CN","frontmatter":{"title":"在Ubuntu如何安装Python3.9（Ubuntu 20.04）","date":"2021-08-21T00:00:00.000Z","tags":["Ubuntu","Python"],"categories":["Linux小知识"],"description":"由于现在新项目都需要3.9，3.8及一下都不支持，然后我由想在win上直接弄，方便，所以需要在Ubuntu 20.04单独安装Python3.9环境教程。 这玩意比win环境的Python好使多了 简洁安装 安装需要的源，然后我们添加到列表包。 中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下 然后我们直接安装 然后我们检查版本 注意...","head":[["meta",{"property":"og:url","content":"https://vlssu.github.io/blogs/share/linux/python3.9.html"}],["meta",{"property":"og:site_name","content":"师叔の小窝"}],["meta",{"property":"og:title","content":"在Ubuntu如何安装Python3.9（Ubuntu 20.04）"}],["meta",{"property":"og:description","content":"由于现在新项目都需要3.9，3.8及一下都不支持，然后我由想在win上直接弄，方便，所以需要在Ubuntu 20.04单独安装Python3.9环境教程。 这玩意比win环境的Python好使多了 简洁安装 安装需要的源，然后我们添加到列表包。 中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下 然后我们直接安装 然后我们检查版本 注意..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-02T17:17:23.000Z"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2021-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-02T17:17:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在Ubuntu如何安装Python3.9（Ubuntu 20.04）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-02T17:17:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简洁安装","slug":"简洁安装","link":"#简洁安装","children":[{"level":3,"title":"安装pip","slug":"安装pip","link":"#安装pip","children":[]}]},{"level":2,"title":"下载源码编译安装","slug":"下载源码编译安装","link":"#下载源码编译安装","children":[{"level":3,"title":"一、安装环境编译包","slug":"一、安装环境编译包","link":"#一、安装环境编译包","children":[]},{"level":3,"title":"二、下载最新python软件包","slug":"二、下载最新python软件包","link":"#二、下载最新python软件包","children":[]},{"level":3,"title":"三、编译安装","slug":"三、编译安装","link":"#三、编译安装","children":[]}]}],"git":{"createdTime":1696266247000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/share/linux/python3.9.md","autoDesc":true}');export{p as comp,u as data};
