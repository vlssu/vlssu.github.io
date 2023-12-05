import{_ as e,o as i,c as n,a as s,f as l}from"./app-gSifrPb8.js";const d={},r=l(`<p>当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 NGINX 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 <code>X_FORWARDED_FOR</code> 字段获取访客 IP</p><p>修改nginx.conf配置文件</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http
    {
    …
    log_format  main  &#39;$http_x_forwarded_for - $remote_user [$time_local] &quot;$request&quot; &#39; 
                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39; 
                   &#39;&quot;$http_user_agent&quot; &#39;;
    …        
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server
    {
        …
        set_real_ip_from 127.0.0.1; #服务器本地
        real_ip_header    X-Forwarded-For;
        real_ip_recursive on;
        …
    }
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function a(c,t){return i(),n("div",null,[r,s(`
https://cloud.tencent.com/developer/article/1050223
`)])}const o=e(d,[["render",a],["__file","220505.html.vue"]]);export{o as default};
