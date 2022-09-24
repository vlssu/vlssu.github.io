---
title: 在Linux上安装 Go
date: 2022-04-03
cover: https://api.vlssu.com/img/?220403
tags:
 - Go
 - Ubuntu
categories: 
 - Linux使用小知识
---

### 下载 Go 压缩包
在写这篇文章的时候，Go 的最新版为 1.18。在我们下载安装包时，请浏览[Go 官方下载页面](https://yq.aliyun.com/go/articleRenderRedirect?url=https%3A%2F%2Fgolang.org%2Fdl%2F),并且检查一下是否有新的版本可用。

以 root 或者其他 sudo 用户身份运行下面的命令，下载并且解压 Go 二进制文件到`/usr/local`目录：

```bash
wget -c https://dl.google.com/go/go1.18.linux-amd64.tar.gz -O - | sudo tar -xz -C /usr/local
```

### 调整环境变量
通过将 Go 目录添加到`$PATH`环境变量，系统将会知道在哪里可以找到 Go 可执行文件。

这个可以通过添加下面的行到`/etc/profile`文件（系统范围内安装）或者`$HOME/.profile`文件（当前用户安装）：

```bash
export PATH=$PATH:/usr/local/go/bin
# 保存文件，并且重新加载新的PATH 环境变量到当前的 shell 会话：
source ~/.profile
```

### 验证 Go 安装过程
通过打印 Go 版本号，验证安装过程。
```bash
go version
# 输出应该像下面这样：
go version go1.18 linux/amd64
```
