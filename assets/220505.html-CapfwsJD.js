import{_ as e,o as s,c as n,e as a}from"./app-54_SznpJ.js";const i={},l=a(`<p>当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 NGINX 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 <code>X_FORWARDED_FOR</code> 字段获取访客 IP</p><p>修改nginx.conf配置文件</p><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre class="language-conf"><code><span class="line">http</span>
<span class="line">    {</span>
<span class="line">    …</span>
<span class="line highlighted">    log_format  main  &#39;$http_x_forwarded_for - $remote_user [$time_local] &quot;$request&quot; &#39; </span>
<span class="line highlighted">                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39; </span>
<span class="line highlighted">                   &#39;&quot;$http_user_agent&quot; &#39;;</span>
<span class="line">    …        </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-conf line-numbers-mode" data-highlighter="prismjs" data-ext="conf" data-title="conf"><pre class="language-conf"><code><span class="line">server</span>
<span class="line">    {</span>
<span class="line">        …</span>
<span class="line highlighted">        set_real_ip_from 127.0.0.1; #服务器本地</span>
<span class="line highlighted">        real_ip_header    X-Forwarded-For;</span>
<span class="line highlighted">        real_ip_recursive on;</span>
<span class="line">        …</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function r(c,d){return s(),n("div",null,t)}const p=e(i,[["render",r],["__file","220505.html.vue"]]),u=JSON.parse('{"path":"/blogs/notes/220505.html","title":"使用CDN后 NGINX 获取访问用户的真实 IP","lang":"zh-CN","frontmatter":{"title":"使用CDN后 NGINX 获取访问用户的真实 IP","date":"2022-05-05T00:00:00.000Z","tags":["NGINX","CDN"],"categories":["笔记"]},"headers":[],"git":{"createdTime":1664026496000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/notes/220505.md"}');export{p as comp,u as data};
