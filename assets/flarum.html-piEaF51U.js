import{_ as i,r as t,o as r,c,a as e,b as a,d as n,e as l}from"./app-54_SznpJ.js";const d="/assets/flarum_1-CvGMRtQR.png",o={},p=e("ul",null,[e("li",null,"Flarum论坛相对于其他论坛UI更简洁，也相对简单")],-1),u=e("h2",{id:"官方教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方教程"},[e("span",null,"官方教程")])],-1),m={href:"https://docs.flarum.org/install",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"服务器要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#服务器要求"},[e("span",null,"服务器要求")])],-1),v=e("p",null,"在安装Flarum之前，重要的是要检查您的服务器是否符合要求。要运行Flarum，您将需要：",-1),g=e("ul",null,[e("li",null,"Apache (启用mod_rewrite) 或 Nginx"),e("li",null,"PHP 8.1+ 具有以下扩展名: curl, dom, gd, json, mbstring, openssl, pdo_mysql, tokenizer, zip"),e("li",null,"MySQL 5.6+/8.0.23+ 或 MariaDB 10.0.5+"),e("li",null,"SSH（命令行）访问以运行Composer")],-1),b={class:"custom-container tip"},x=l('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">共享主机</p>',2),f={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"这并不一定意味着您需要 VPS。大多数体面的主机都支持 SSH 访问，通过它你应该能够很好地安装 Composer 和 Flarum。",-1),w=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装"},[e("span",null,"安装")])],-1),k={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},y=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">composer create-project flarum/flarum .</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行此命令时，可以配置Web服务器。您需要确保将webroot设置为<code>/path/to/your/forum/public</code>，然后按照以下说明设置URL重写。</p><p>一切准备就绪后，请在网络浏览器中导航至您的论坛，然后按照说明完成安装。</p><h3 id="url重写" tabindex="-1"><a class="header-anchor" href="#url重写"><span>URL重写</span></a></h3><blockquote><p>因为网站文件不在根目录，就需要你URL重写</p></blockquote><h4 id="apache" tabindex="-1"><a class="header-anchor" href="#apache"><span>Apache</span></a></h4><p>Flarum在公共目录中包含<code>.htaccess</code>文件 - 确保已正确上载。 如果您正在使用共享主机，请与您的提供商确认已启用<code>mod_rewrite</code>且允许<code>.htaccess</code>文件。 如果您要管理自己的服务器，则可能需要将以下内容添加到站点配置中：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">&lt;Directory &quot;/path/to/flarum/public&quot;&gt;</span>
<span class="line">    AllowOverride All</span>
<span class="line">&lt;/Directory&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这确保了允许 htaccess 覆盖，因此 Flarum 可以正确地重写 URL。</p><p>启用方法<code>mod_rewrite</code>因您的操作系统而异。您可以通过<code>sudo a2enmod rewrite</code>在 Ubuntu 上运行来启用它。<code>mod_rewrite</code>在 CentOS 上默认启用。修改后不要忘记重启 Apache！</p><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h4><p>Flarum包含<code>.nginx.conf</code>文件 – 确保它已正确上载。 然后，假设您在Nginx中设置了PHP站点，请将以下内容添加到服务器的配置块中：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">include /path/to/flarum/.nginx.conf;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy"><span>Caddy</span></a></h4><p>Caddy需要非常简单的配置才能使Flarum正常工作。请注意，您应该使用自己的URL替换URL，并使用自己的public文件夹的路径替换path 。如果您使用的是其他版本的PHP，则还需要更改fastcgi路径以指向正确的PHP安装套接字或URL。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">www.example.com {</span>
<span class="line">    root * /var/www/flarum/public</span>
<span class="line">    php_fastcgi unix//var/run/php/php7.4-fpm.sock</span>
<span class="line">    header /assets {</span>
<span class="line">        +Cache-Control &quot;public, must-revalidate, proxy-revalidate&quot;</span>
<span class="line">        +Cache-Control &quot;max-age=25000&quot;</span>
<span class="line">        Pragma &quot;public&quot;</span>
<span class="line">    }</span>
<span class="line">    file_server</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件夹所有权" tabindex="-1"><a class="header-anchor" href="#文件夹所有权"><span>文件夹所有权</span></a></h3><p>在安装期间，Flarum 可能会要求您将某些目录设为可写。现代操作系统通常是多用户的，这意味着您登录的用户与运行 FLarum 的用户不同。运行 Flarum 的用户必须具有以下权限：</p><ul><li>根安装目录，因此 Flarum 可以编辑<code>config.php</code>。</li><li>子目录，因此<code>storage</code>Flarum 可以编辑日志和存储缓存数据。</li><li><code>assets</code>子目录，以便可以将徽标和头像上传到文件系统。</li></ul><p>扩展可能需要其他目录，因此您可能希望递归地授予对整个 Flarum 根安装目录的写访问权限。</p><p>您需要运行几个命令才能设置文件权限。请注意，如果您的安装在执行其中一些后没有显示警告，则您不需要运行其余的。</p><p>首先，您需要允许对该目录进行写访问。在 Linux 上</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">chmod 775 -R /path/to/directory</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果这还不够，您可能需要检查您的文件是否属于正确的组和用户。默认情况下，在大多数 Linux 发行版<code>www-data</code>中是 PHP 和 Web 服务器都在其下运行的组和用户。您需要查看您的发行版和网络服务器设置的细节以确保。您可以通过运行以下命令更改大多数 Linux 操作系统中的文件夹所有权：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">chown -R www-data:www-data /path/to/directory</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果您的 Web 服务器使用<code>www-data</code>不同的用户/组，则更改为其他内容。</p><p>此外，您需要确保您的 CLI 用户（您登录终端的用户）拥有所有权，以便您可以通过 CLI 安装扩展和管理 Flarum 安装。为此，请通过将当前用户 (<code>whoami</code>) 添加到 Web 服务器组（通常<code>www-data</code>）<code>usermod -a -G www-data YOUR_USERNAME</code>。您可能需要注销并重新登录才能使此更改生效。</p>`,27),F={href:"https://www.redhat.com/en/topics/linux/what-is-selinux",target:"_blank",rel:"noopener noreferrer"},L=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">chcon -R -t httpd_sys_rw_content_t /path/to/directory</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">环境可能会有所不同</p><p>您的环境可能与所提供的文档有所不同，请向您的Web服务器配置或Web托管提供商咨询有关PHP和Web服务器所使用的正确用户和组的信息。</p></div><div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">切勿使用权限777</p><p>永远不要将任何文件夹或文件设置为权限级别777，因为此权限级别允许任何人访问文件夹和文件的内容，而不管用户或用户组如何。</p></div><h3 id="汉化flarum" tabindex="-1"><a class="header-anchor" href="#汉化flarum"><span>汉化Flarum</span></a></h3><p>没有中文？有中文补丁的（中文语言包也是有版本的哦） 在根目录输入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 简体中文</span>
<span class="line">composer require flarum-lang/chinese-simplified</span>
<span class="line">php flarum cache:clear</span>
<span class="line">//繁体中文</span>
<span class="line">composer require csineneo/lang-traditional-chinese</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好啦，这就是全部了，祝你使用愉快</p><h2 id="使用宝塔搭建" tabindex="-1"><a class="header-anchor" href="#使用宝塔搭建"><span>使用宝塔搭建</span></a></h2><p>宝塔linux7.0版本是基于centos7开发的，务必使用centos7.x 系统</p><h3 id="linux面板7-9-2安装命令" tabindex="-1"><a class="header-anchor" href="#linux面板7-9-2安装命令"><span>Linux面板7.9.2安装命令：</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Centos\\Ubuntu安装命令：</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sSO</span> http://download.bt.cn/install/install_panel.sh <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span> install_panel.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境"><span>安装环境</span></a></h3><ul><li>Apache 2.4</li><li>PHP 8.1+ （需手动安装以下扩展名：pdo_mysql）</li><li>MySQL 5.7</li><li>Pure-Ftpd 1.0.49</li><li>phpMyAdmin 5.1</li><li>PostgreSQL管理器 1.4 （安装最新版本）</li><li>Node.js版本管理器 1.6</li></ul><p>通过<code>Node.js版本管理器 1.6</code>安装<code>Composer</code>(直接安装模块那里输入名字安装即可)</p><p><img src="`+d+'" alt=""></p><h3 id="安装flarum-url重写" tabindex="-1"><a class="header-anchor" href="#安装flarum-url重写"><span>安装Flarum+URL重写</span></a></h3>',16),R={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},C=l(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">composer create-project flarum/flarum .</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="url重写-1" tabindex="-1"><a class="header-anchor" href="#url重写-1"><span>URL重写</span></a></h3><blockquote><p>运行此命令时，可以配置Web服务器。去 网站&gt;站点设置&gt;网站目录&gt;运行目录&gt;<code>/public</code>&gt;保存</p></blockquote><h3 id="汉化flarum-1" tabindex="-1"><a class="header-anchor" href="#汉化flarum-1"><span>汉化Flarum</span></a></h3><p>没有中文？有中文补丁的（中文语言包也是有版本的哦） 在根目录输入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 简体中文</span>
<span class="line">composer require flarum-lang/chinese-simplified</span>
<span class="line">php flarum cache:clear</span>
<span class="line">//繁体中文</span>
<span class="line">composer require csineneo/lang-traditional-chinese</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好啦，这就是全部了，祝你使用愉快</p><h2 id="让flarum支持中文搜索" tabindex="-1"><a class="header-anchor" href="#让flarum支持中文搜索"><span>让Flarum支持中文搜索</span></a></h2><p>MySQL 自5.7 开始支持FULLTEXT中文搜寻，重建索引即可</p><p>修改<code>mysql.cnf</code>，加入：</p><div class="language-cnf line-numbers-mode" data-highlighter="prismjs" data-ext="cnf" data-title="cnf"><pre class="language-cnf"><code><span class="line">[mysqld]</span>
<span class="line">ngram_token_size=2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后需要重建FULLTEXT 索引</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">ALTER TABLE flarum_posts DROP INDEX content;</span>
<span class="line">CREATE FULLTEXT INDEX content ON \`flarum_posts\` (\`content\`) WITH PARSER ngram;</span>
<span class="line"></span>
<span class="line">ALTER TABLE flarum_discussions DROP INDEX title;</span>
<span class="line">CREATE FULLTEXT INDEX title ON \`flarum_discussions\` (\`title\`) WITH PARSER ngram;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function E(P,j){const s=t("ExternalLinkIcon");return r(),c("div",null,[p,u,e("p",null,[e("a",m,[a("原帖地址"),n(s)])]),h,v,g,e("div",b,[x,e("p",null,[a("无法通过下载 ZIP 文件并将文件上传到您的 Web 服务器来安装 Flarum。这是因为 Flarum 使用了一个名为"),e("a",f,[a("Composer"),n(s)]),a("的依赖管理系统，它需要在命令行上运行。")]),_]),w,e("p",null,[a("Flarum使用Composer来管理其依赖项和扩展。在安装Flarum之前，您需要在计算机上"),e("a",k,[a("安装Composer"),n(s)]),a("。然后，在您要安装Flarum的空白位置运行此命令：")]),y,e("p",null,[a("最后，如果这不起作用，您可能需要配置"),e("a",F,[a("SELinux"),n(s)]),a("以允许 Web 服务器写入目录。为此，请运行：")]),L,e("p",null,[a("Flarum使用Composer来管理其依赖项和扩展。在安装Flarum之前，您需要在计算机上"),e("a",R,[a("安装Composer"),n(s)]),a("。然后，在您要安装Flarum的空白位置运行此命令：")]),C])}const q=i(o,[["render",E],["__file","flarum.html.vue"]]),T=JSON.parse('{"path":"/blogs/deploy/flarum.html","title":"Flarum的搭建与部署","lang":"zh-CN","frontmatter":{"title":"Flarum的搭建与部署","date":"2019-12-12T00:00:00.000Z","tags":["Flarum","Centos"],"categories":["教程"]},"headers":[{"level":2,"title":"官方教程","slug":"官方教程","link":"#官方教程","children":[]},{"level":2,"title":"服务器要求","slug":"服务器要求","link":"#服务器要求","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"URL重写","slug":"url重写","link":"#url重写","children":[]},{"level":3,"title":"文件夹所有权","slug":"文件夹所有权","link":"#文件夹所有权","children":[]},{"level":3,"title":"汉化Flarum","slug":"汉化flarum","link":"#汉化flarum","children":[]}]},{"level":2,"title":"使用宝塔搭建","slug":"使用宝塔搭建","link":"#使用宝塔搭建","children":[{"level":3,"title":"Linux面板7.9.2安装命令：","slug":"linux面板7-9-2安装命令","link":"#linux面板7-9-2安装命令","children":[]},{"level":3,"title":"安装环境","slug":"安装环境","link":"#安装环境","children":[]},{"level":3,"title":"安装Flarum+URL重写","slug":"安装flarum-url重写","link":"#安装flarum-url重写","children":[]},{"level":3,"title":"URL重写","slug":"url重写-1","link":"#url重写-1","children":[]},{"level":3,"title":"汉化Flarum","slug":"汉化flarum-1","link":"#汉化flarum-1","children":[]}]},{"level":2,"title":"让Flarum支持中文搜索","slug":"让flarum支持中文搜索","link":"#让flarum支持中文搜索","children":[]}],"git":{"createdTime":1664026496000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/deploy/flarum.md"}');export{q as comp,T as data};
