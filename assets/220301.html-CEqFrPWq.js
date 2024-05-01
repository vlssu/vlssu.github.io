import{_ as o,r as n,o as l,c,a as t,b as e,d,e as i}from"./app-Cam0cJ4g.js";const r={},s=i(`<p>当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 Apache 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 <code>X_FORWARDED_FOR</code> 字段获取访客 IP</p><ul><li>mod_remoteip</li><li>mod_rpaf</li></ul><h2 id="mod-remoteip-模块" tabindex="-1"><a class="header-anchor" href="#mod-remoteip-模块"><span>mod_remoteip 模块</span></a></h2><h3 id="apache-2-4" tabindex="-1"><a class="header-anchor" href="#apache-2-4"><span>Apache 2.4</span></a></h3><p><code>Apache 2.4</code> 开始自带此模块，可用下面命令检查。</p><div class="language-httpd line-numbers-mode" data-ext="httpd" data-title="httpd"><pre class="language-httpd"><code># 查询 Apache 版本
/etc/init.d/httpd -v

# 查询 Apache 编译信息（可查看 httpd.conf 配置文件等路径，之后修改要知道）
/etc/init.d/httpd -V

# 列出 Apache 加载模块（里面有 remoteip_module 就说明已启用 mod_remoteip 模块）
/etc/init.d/httpd -t -D DUMP_MODULES

# 查看 Apache 选项帮助
/etc/init.d/httpd -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>有些情况可能是安装了模块，但默认没有启用。这样可以通过查看 <code>httpd.conf</code> 配置文件确认，里面有下面这行则表示已安装 <code>mod_remoteip</code> 模块，取消行注释即可使之启用。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#LoadModule remoteip_module modules/mod_remoteip.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="apache-2-2-x" tabindex="-1"><a class="header-anchor" href="#apache-2-2-x"><span>Apache 2.2.x</span></a></h3><p><code>Apache 2.2.x</code> 版本没有自带该模块，需要手动安装。首先下载这个基于 <code>Apache 2.4.1</code> 移植的 <code>mod_remoteip</code> 模块文件。如果是 <code>Apache</code> 高版本安装则下载对应版本（版本不同安装可能会报错）。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget &lt;https://raw.githubusercontent.com/ttkzw/mod_remoteip-httpd22/master/mod_remoteip.c&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 <code>httpd-devel</code> 和 <code>gcc</code> 编译器以便稍后可以通过 <code>apxs</code> 扩展工具安装 <code>Apache</code> 模块。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>yum -y install httpd-devel gcc gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行下面命令安装 <code>mod_remoteip</code> 模块（其中参数选项含义可查阅此文档）。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apxs -i -a -c mod_remoteip.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-httpd-remoteip-conf-配置文件" tabindex="-1"><a class="header-anchor" href="#创建-httpd-remoteip-conf-配置文件"><span>创建 httpd-remoteip.conf 配置文件</span></a></h2><p>在 <code>Apache</code> 扩展目录下创建 <code>remoteip</code> 配置文件。之前有介绍如何查看 <code>Apache</code> 目录路径。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vi /www/server/apache/conf/extra/httpd-remoteip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),p=t("code",null,"RemoteIPProxiesHeader",-1),m=t("code",null,"Apache mod_remoteip",-1),u={href:"https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RemoteIPHeader X-Forwarded-For
RemoteIPProxiesHeader X-Forwarded-By
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编辑-httpd-conf-配置文件" tabindex="-1"><a class="header-anchor" href="#编辑-httpd-conf-配置文件"><span>编辑 httpd.conf 配置文件</span></a></h3><p>先确认 <code>httpd.conf</code> 里已设置加载 <code>mod_remoteip</code> 模块，参数如下。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LoadModule remoteip_module modules/mod_remoteip.so
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在其下面添加一句，以链接上步创建的 <code>mod_remoteip</code> 配置文件。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Include conf/extra/httpd-remoteip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再在文件里修改记录日志格式，使之记录访客 IP。搜索下面两行内容。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{Referer}i\\&quot; \\&quot;%{User-Agent}i\\&quot;&quot; combined
LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b&quot; common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将里面的 %h 改为 %a（完整格式选项可查看此文档），修改后的内容如下。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LogFormat &quot;%a %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{Referer}i\\&quot; \\&quot;%{User-Agent}i\\&quot;&quot; combined
LogFormat &quot;%a %l %u %t \\&quot;%r\\&quot; %&gt;s %b&quot; common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>保存文件修改，<code>/etc/init.d/httpd restart</code> 重启服务生效。</p><h2 id="cloudflare" tabindex="-1"><a class="header-anchor" href="#cloudflare"><span>CloudFlare</span></a></h2><p>在 <code>Apache</code> 扩展目录下创建 <code>remoteip</code> 配置文件。之前有介绍如何查看 <code>Apache</code> 目录路径。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>vi /www/server/apache/conf/extra/httpd-remoteip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),v=t("code",null,"Header",-1),g={href:"https://www.cloudflare.com/ips/",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 173.245.48.0/20 103.21.244.0/22 ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要添加的 CDN IP 太多，可用 <code>RemoteIPInternalProxyList</code> 指向一个 IP 列表文件（里面用空格或换行分隔）。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxyList conf/cloudflare_ip.lst
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用这种方式可以使用下面的脚本</p><details class="custom-container details"><summary class="custom-container-title">自动更新</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># !/usr/bin/env bash

echo &quot;# CloudFlare Proxy IP;&quot; &gt; /usr/local/apache/conf/cloudflare_ip.lst;
for i in \`curl https://www.cloudflare.com/ips-v4\`; do
    echo &quot;$i&quot; &gt;&gt; /usr/local/apache/conf/cloudflare_ip.lst;
done
for i in \`curl https://www.cloudflare.com/ips-v6\`; do
    echo &quot;$i&quot; &gt;&gt; /usr/local/apache/conf/cloudflare_ip.lst;
done
echo &quot;# End;&quot; &gt;&gt; /usr/local/apache/conf/cloudflare_ip.lst;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建后 <code>chmod +x ./update_cloudflare_ip.sh</code> 赋予脚本可执行权限。然后 <code>crontab -e</code> 添加定期任务，例如每月 1 号凌晨 5 点 30 运行更新。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>30 5 1 ** /bin/bash /root/update_cloudflare_ip.sh 2&gt;&amp;1 &gt; /dev/null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>`,5),b={href:"https://www.hostarr.com/apache-mod_remoteip/",target:"_blank",rel:"noopener noreferrer"};function _(f,P){const a=n("ExternalLinkIcon");return l(),c("div",null,[s,t("p",null,[e("使用 "),p,e(" 从指定字段获取信任 CDN IP，这样不用设置指定代理 IP。更多 "),m,e(" 选项参数介绍可参考"),t("a",u,[e("[这个文档]"),d(a)])]),h,t("p",null,[e("内容如下。首行指定代理 IP "),v,e("名，次行设置信任的 IP 地址和范围（多个用空格隔开。CloudFlare CDN IP 列表可"),t("a",g,[e("在这获取"),d(a)]),e("）")]),x,t("p",null,[e("::: right 参考 "),t("a",b,[e("主机指南"),d(a)]),e(" :::")])])}const A=o(r,[["render",_],["__file","220301.html.vue"]]),w=JSON.parse('{"path":"/blogs/notes/220301.html","title":"使用CDN后 Apache 获取访问用户的真实 IP","lang":"zh-CN","frontmatter":{"title":"使用CDN后 Apache 获取访问用户的真实 IP","date":"2022-03-01T00:00:00.000Z","tags":["Apache","CDN"],"categories":["笔记"],"description":"当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 Apache 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 X_FORWARDED_FOR 字段获取访客 IP mod_remoteip mod_rpaf mod_remoteip 模块 Apache 2.4 Apac...","head":[["meta",{"property":"og:url","content":"https://vlssu.github.io/blogs/notes/220301.html"}],["meta",{"property":"og:site_name","content":"师叔の小窝"}],["meta",{"property":"og:title","content":"使用CDN后 Apache 获取访问用户的真实 IP"}],["meta",{"property":"og:description","content":"当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 Apache 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 X_FORWARDED_FOR 字段获取访客 IP mod_remoteip mod_rpaf mod_remoteip 模块 Apache 2.4 Apac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-02T17:17:23.000Z"}],["meta",{"property":"article:tag","content":"Apache"}],["meta",{"property":"article:tag","content":"CDN"}],["meta",{"property":"article:published_time","content":"2022-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-02T17:17:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用CDN后 Apache 获取访问用户的真实 IP\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-02T17:17:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"mod_remoteip 模块","slug":"mod-remoteip-模块","link":"#mod-remoteip-模块","children":[{"level":3,"title":"Apache 2.4","slug":"apache-2-4","link":"#apache-2-4","children":[]},{"level":3,"title":"Apache 2.2.x","slug":"apache-2-2-x","link":"#apache-2-2-x","children":[]}]},{"level":2,"title":"创建 httpd-remoteip.conf 配置文件","slug":"创建-httpd-remoteip-conf-配置文件","link":"#创建-httpd-remoteip-conf-配置文件","children":[{"level":3,"title":"编辑 httpd.conf 配置文件","slug":"编辑-httpd-conf-配置文件","link":"#编辑-httpd-conf-配置文件","children":[]}]},{"level":2,"title":"CloudFlare","slug":"cloudflare","link":"#cloudflare","children":[]}],"git":{"createdTime":1693449398000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/notes/220301.md","autoDesc":true}');export{A as comp,w as data};