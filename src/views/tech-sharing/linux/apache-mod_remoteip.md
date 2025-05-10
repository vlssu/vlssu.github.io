---
title: 使用CDN后 Apache 获取访问用户的真实 IP
date: 2022-03-01
cover: https://api.vlssu.com/img/?220301
tags:
 - Apache
 - CDN
categories: 
 - Linux使用小知识
---

当网站启用 CDN 会给获取访客 IP 带来障碍，由于多了个代理流程，故日志记录 IP 变为 CDN 的 IP。基于 Apache 的网站要解决这个问题，需要使用以下模块通过 HTTP 标头里的 `X_FORWARDED_FOR` 字段获取访客 IP

- mod_remoteip
- mod_rpaf

## mod_remoteip 模块

### Apache 2.4

`Apache 2.4` 开始自带此模块，可用下面命令检查。
```httpd
# 查询 Apache 版本
/etc/init.d/httpd -v

# 查询 Apache 编译信息（可查看 httpd.conf 配置文件等路径，之后修改要知道）
/etc/init.d/httpd -V

# 列出 Apache 加载模块（里面有 remoteip_module 就说明已启用 mod_remoteip 模块）
/etc/init.d/httpd -t -D DUMP_MODULES

# 查看 Apache 选项帮助
/etc/init.d/httpd -h
```
::: tip
有些情况可能是安装了模块，但默认没有启用。这样可以通过查看 `httpd.conf` 配置文件确认，里面有下面这行则表示已安装 `mod_remoteip` 模块，取消行注释即可使之启用。
```
#LoadModule remoteip_module modules/mod_remoteip.so
```
:::

### Apache 2.2.x
`Apache 2.2.x` 版本没有自带该模块，需要手动安装。首先下载这个基于 `Apache 2.4.1` 移植的 `mod_remoteip` 模块文件。如果是 `Apache` 高版本安装则下载对应版本（版本不同安装可能会报错）。
```
wget <https://raw.githubusercontent.com/ttkzw/mod_remoteip-httpd22/master/mod_remoteip.c>
```
安装 `httpd-devel` 和 `gcc` 编译器以便稍后可以通过 `apxs` 扩展工具安装 `Apache` 模块。
```
yum -y install httpd-devel gcc gcc-c++
```
运行下面命令安装 `mod_remoteip` 模块（其中参数选项含义可查阅此文档）。
```
apxs -i -a -c mod_remoteip.c
```

## 创建 httpd-remoteip.conf 配置文件
在 `Apache` 扩展目录下创建 `remoteip` 配置文件。之前有介绍如何查看 `Apache` 目录路径。
```
vi /www/server/apache/conf/extra/httpd-remoteip.conf
```
使用 `RemoteIPProxiesHeader` 从指定字段获取信任 CDN IP，这样不用设置指定代理 IP。更多 `Apache mod_remoteip` 选项参数介绍可参考[[这个文档]](https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html)

```
RemoteIPHeader X-Forwarded-For
RemoteIPProxiesHeader X-Forwarded-By
```

### 编辑 httpd.conf 配置文件

先确认 `httpd.conf` 里已设置加载 `mod_remoteip` 模块，参数如下。
```
LoadModule remoteip_module modules/mod_remoteip.so
```
在其下面添加一句，以链接上步创建的 `mod_remoteip` 配置文件。
```
Include conf/extra/httpd-remoteip.conf
```
再在文件里修改记录日志格式，使之记录访客 IP。搜索下面两行内容。
```
LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
LogFormat "%h %l %u %t \"%r\" %>s %b" common
```
将里面的 %h 改为 %a（完整格式选项可查看此文档），修改后的内容如下。
```
LogFormat "%a %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
LogFormat "%a %l %u %t \"%r\" %>s %b" common
```
保存文件修改，`/etc/init.d/httpd restart` 重启服务生效。



## CloudFlare
在 `Apache` 扩展目录下创建 `remoteip` 配置文件。之前有介绍如何查看 `Apache` 目录路径。
```
vi /www/server/apache/conf/extra/httpd-remoteip.conf
```
内容如下。首行指定代理 IP `Header`名，次行设置信任的 IP 地址和范围（多个用空格隔开。CloudFlare CDN IP 列表可[在这获取](https://www.cloudflare.com/ips/)）
```
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 173.245.48.0/20 103.21.244.0/22 ...
```
如果要添加的 CDN IP 太多，可用 `RemoteIPInternalProxyList` 指向一个 IP 列表文件（里面用空格或换行分隔）。
```
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxyList conf/cloudflare_ip.lst
```
如果用这种方式可以使用下面的脚本

::: details 自动更新 CloudFlare CDN IP 脚本
```
# !/usr/bin/env bash

echo "# CloudFlare Proxy IP;" > /usr/local/apache/conf/cloudflare_ip.lst;
for i in `curl https://www.cloudflare.com/ips-v4`; do
    echo "$i" >> /usr/local/apache/conf/cloudflare_ip.lst;
done
for i in `curl https://www.cloudflare.com/ips-v6`; do
    echo "$i" >> /usr/local/apache/conf/cloudflare_ip.lst;
done
echo "# End;" >> /usr/local/apache/conf/cloudflare_ip.lst;
```
创建后 `chmod +x ./update_cloudflare_ip.sh` 赋予脚本可执行权限。然后 `crontab -e` 添加定期任务，例如每月 1 号凌晨 5 点 30 运行更新。
```
30 5 1 ** /bin/bash /root/update_cloudflare_ip.sh 2>&1 > /dev/null
```
:::

::: right
参考 [主机指南](https://www.hostarr.com/apache-mod_remoteip/)
:::
