import{_ as e,o as i,c as n,a as s,f as l}from"./app.6fef3285.js";const d={},r=l(`<p>\u5F53\u7F51\u7AD9\u542F\u7528 CDN \u4F1A\u7ED9\u83B7\u53D6\u8BBF\u5BA2 IP \u5E26\u6765\u969C\u788D\uFF0C\u7531\u4E8E\u591A\u4E86\u4E2A\u4EE3\u7406\u6D41\u7A0B\uFF0C\u6545\u65E5\u5FD7\u8BB0\u5F55 IP \u53D8\u4E3A CDN \u7684 IP\u3002\u57FA\u4E8E NGINX \u7684\u7F51\u7AD9\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u6A21\u5757\u901A\u8FC7 HTTP \u6807\u5934\u91CC\u7684 <code>X_FORWARDED_FOR</code> \u5B57\u6BB5\u83B7\u53D6\u8BBF\u5BA2 IP</p><p>\u4FEE\u6539nginx.conf\u914D\u7F6E\u6587\u4EF6</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>http
    {
    \u2026
    log_format  main  &#39;$http_x_forwarded_for - $remote_user [$time_local] &quot;$request&quot; &#39; 
                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39; 
                   &#39;&quot;$http_user_agent&quot; &#39;;
    \u2026        
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server
    {
        \u2026
        set_real_ip_from 127.0.0.1; #\u670D\u52A1\u5668\u672C\u5730
        real_ip_header    X-Forwarded-For;
        real_ip_recursive on;
        \u2026
    }
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function a(c,t){return i(),n("div",null,[r,s(`
https://cloud.tencent.com/developer/article/1050223
`)])}const o=e(d,[["render",a],["__file","nginx-cdn-ip.html.vue"]]);export{o as default};
