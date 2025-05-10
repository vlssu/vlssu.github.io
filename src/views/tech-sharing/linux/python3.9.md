---
title: 在Ubuntu如何安装Python3.9（Ubuntu 20.04）
date: 2021-08-21
cover: https://api.vlssu.com/img/?210821
tags:
 - Ubuntu
 - Python
categories: 
 - Linux使用小知识
---

由于现在新项目都需要3.9，3.8及一下都不支持，然后我由想在win上直接弄，方便，所以需要在Ubuntu 20.04单独安装Python3.9环境教程。
> 这玩意比win环境的`Python`好使多了

## 简洁安装

```
sudo apt update
sudo apt install software-properties-common
```

> 安装需要的源，然后我们添加到列表包。

```
sudo add-apt-repository ppa:deadsnakes/ppa
```

> 中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下

> 然后我们直接安装

```
sudo apt install python3.9
```

> 然后我们检查版本

```
python3.9 --version
```

> 注意，之后所有指令都是按照这个后面带3.9的

### 安装pip

> 记得root一下

```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3.9 get-pip.py
```

## 下载源码编译安装

### 一、安装环境编译包

```
sudo apt update
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev wget libbz2-dev
```

### 二、下载最新python软件包

```
cd /opt
sudo wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz
```

### 三、编译安装

```
cd Python3.9.6/

./configure --prefix=/usr/local/python3  # pip3使用ssl

#编译
make

#安装
sudo make install
```