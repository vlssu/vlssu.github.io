---
title: 使用CDN后 NGINX 获取访问用户的真实 IP
date: 2022-05-05
cover: https://api.vlssu.com/img/?220505
tags:
 - NGINX
 - CDN
categories: 
 - Linux使用小知识
---

当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 NGINX 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 `X_FORWARDED_FOR` 字段获取访客 IP

修改nginx.conf配置文件

```conf {4,5,6}
http
    {
    …
    log_format  main  '$http_x_forwarded_for - $remote_user [$time_local] "$request" ' 
                    '$status $body_bytes_sent "$http_referer" ' 
                   '"$http_user_agent" ';
    …        
```

```conf {4,5,6}
server
    {
        …
        set_real_ip_from 127.0.0.1; #服务器本地
        real_ip_header    X-Forwarded-For;
        real_ip_recursive on;
        …
    }
```

<!--
https://cloud.tencent.com/developer/article/1050223
-->