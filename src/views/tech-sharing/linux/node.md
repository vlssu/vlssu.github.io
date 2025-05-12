---
title: Linux系统如何安装node管理器
date: 2020-05-03
cover: https://api.vlssu.com/img/?200503
tags:
 - Centos
 - Ubuntu
 - Node
 - npm
categories:
 - Linux使用小知识
---

1. 安装github

::: code-tabs
@tab Centos

```bash
yum install git -y
```

@tab Ubuntu

```bash
apt install git -y
```

:::

2. 安装node.js管理器等组件
```bash
git clone https://github.com/creationix/nvm.git ~/nvm
# 设置nvm 自动运行
echo "source ~/nvm/nvm.sh" >> ~/.bashrc
source ~/.bashrc
# 查看所有版本(部分环境可能不支持最高版本)
nvm list-remote
# 安装npm的最新版本
nvm install stable
# 使用最新版本
nvm use stable
```

## 使用国内镜像

- 对于国内而言，访问外网是很困难的，这会导致访问速度很慢，而国内镜像就很重要了

### node 国内镜像
```bash
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
```
### npm 国内镜像
```bash
npm config set registry https://registry.npmmirror.com
```


### npm WIN 国内镜像源
```bash
npm config set registry https://registry.npmmirror.com --global
npm config set disturl https://npmmirror.com/mirrors/node --global
```

## yarn 安装
### 启用yarn

Node.js >=16.10

```bash
corepack enable
```

Node.js <16.10

```bash
npm i -g corepack
```

### 安装 yarn

```bash
corepack prepare yarn@stable --activate
# 指定版本安装yarn
corepack prepare yarn@<version> --activate
```