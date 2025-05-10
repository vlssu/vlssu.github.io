---
title: Centos7上yum安装chrome
date: 2022-04-24
cover: https://api.vlssu.com/img/?20220424
tags:
 - Chrome
categories: 
 - Linux使用小知识
---

1. 配置yum源（root用户）
在目录 `/etc/yum.repos.d/` 下新建文件 `google-chrome.repo`
```
vim /etc/yum.repos.d/google-chrome.repo
```

写入如下内容:

```
[google-chrome]
name=google-chrome
baseurl=<http://dl.google.com/linux/chrome/rpm/stable/$basearch>
enabled=1
gpgcheck=1
gpgkey=<https://dl-ssl.google.com/linux/linux_signing_key.pub>
```

:::tip
1、按ESC退出编辑模式（回到命令模式）
2、输入 :wq!后按回车退出
:::

2. 安装chrome浏览器

```
yum -y install google-chrome-stable --nogpgcheck
```

<https://download-chromium.appspot.com/?platform=Linux_x64&type=snapshots>
