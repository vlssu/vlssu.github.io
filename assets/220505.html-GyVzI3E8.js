import{_ as e,o as t,c as i,e as n}from"./app-Cgmq3fvS.js";const s={},a=n(`<p>当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 NGINX 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 <code>X_FORWARDED_FOR</code> 字段获取访客 IP</p><p>修改nginx.conf配置文件</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>http
    {
    …
    log_format  main  &#39;$http_x_forwarded_for - $remote_user [$time_local] &quot;$request&quot; &#39; 
                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39; 
                   &#39;&quot;$http_user_agent&quot; &#39;;
    …        
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>server
    {
        …
        set_real_ip_from 127.0.0.1; #服务器本地
        real_ip_header    X-Forwarded-For;
        real_ip_recursive on;
        …
    }
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[a];function l(o,d){return t(),i("div",null,r)}const m=e(s,[["render",l],["__file","220505.html.vue"]]),v=JSON.parse('{"path":"/blogs/notes/220505.html","title":"使用CDN后 NGINX 获取访问用户的真实 IP","lang":"zh-CN","frontmatter":{"title":"使用CDN后 NGINX 获取访问用户的真实 IP","date":"2022-05-05T00:00:00.000Z","tags":["NGINX","CDN"],"categories":["笔记"],"description":"当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 NGINX 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 X_FORWARDED_FOR 字段获取访客 IP 修改nginx.conf配置文件","head":[["meta",{"property":"og:url","content":"https://vlssu.github.io/blogs/notes/220505.html"}],["meta",{"property":"og:site_name","content":"师叔の小窝"}],["meta",{"property":"og:title","content":"使用CDN后 NGINX 获取访问用户的真实 IP"}],["meta",{"property":"og:description","content":"当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 NGINX 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 X_FORWARDED_FOR 字段获取访客 IP 修改nginx.conf配置文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-02T17:17:23.000Z"}],["meta",{"property":"article:tag","content":"NGINX"}],["meta",{"property":"article:tag","content":"CDN"}],["meta",{"property":"article:published_time","content":"2022-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-02T17:17:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用CDN后 NGINX 获取访问用户的真实 IP\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-02T17:17:23.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1693449398000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/notes/220505.md","autoDesc":true}');export{m as comp,v as data};