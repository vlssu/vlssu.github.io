import{_ as e,o as a,c as i,f as d}from"./app-n3PUeXRq.js";const n={},t=d(`<p>由于现在新项目都需要3.9，3.8及一下都不支持，然后我由想在win上直接弄，方便，所以需要在Ubuntu 20.04单独安装Python3.9环境教程。</p><blockquote><p>这玩意比win环境的<code>Python</code>好使多了</p></blockquote><h2 id="简洁安装" tabindex="-1"><a class="header-anchor" href="#简洁安装" aria-hidden="true">#</a> 简洁安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装需要的源，然后我们添加到列表包。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo add-apt-repository ppa:deadsnakes/ppa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下</p></blockquote><blockquote><p>然后我们直接安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install python3.9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>然后我们检查版本</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3.9 --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意，之后所有指令都是按照这个后面带3.9的</p></blockquote><h3 id="安装pip" tabindex="-1"><a class="header-anchor" href="#安装pip" aria-hidden="true">#</a> 安装pip</h3><blockquote><p>记得root一下</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3.9 get-pip.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载源码编译安装" tabindex="-1"><a class="header-anchor" href="#下载源码编译安装" aria-hidden="true">#</a> 下载源码编译安装</h2><h3 id="一、安装环境编译包" tabindex="-1"><a class="header-anchor" href="#一、安装环境编译包" aria-hidden="true">#</a> 一、安装环境编译包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、下载最新python软件包" tabindex="-1"><a class="header-anchor" href="#二、下载最新python软件包" aria-hidden="true">#</a> 二、下载最新python软件包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
sudo wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、编译安装" tabindex="-1"><a class="header-anchor" href="#三、编译安装" aria-hidden="true">#</a> 三、编译安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd Python3.9.6/

./configure --prefix=/usr/local/python3  # pip3使用ssl

#编译
make

#安装
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),s=[t];function l(r,o){return a(),i("div",null,s)}const u=e(n,[["render",l],["__file","python3.9.html.vue"]]);export{u as default};
