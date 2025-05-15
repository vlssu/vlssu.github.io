---
title: 在Ubuntu如何安装Python3.10
date: 2025-05-15
cover: https://api.vlssu.com/img/?250515
tags:
 - Ubuntu
 - Python
categories: 
 - Linux使用小知识
---

## 安装 Python3.10

1. 更新系统安装需要的源（所有步骤前请先ROOT）

```bash
apt update && sudo apt upgrade -y
apt install software-properties-common
```

::: tip
中途会提示你要按键盘上的回车键，然后你需要等会一会，他可能会卡一下

```bash
add-apt-repository ppa:deadsnakes/ppa
```

:::

2. 安装3.10版本

```bash
apt install python3.10
```

3. 检查版本

```bash
python3.10 --version
```

::: warning
之后所有指令都是按照这个后面带3.10的
:::

### 安装 pip

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3.10 get-pip.py
```