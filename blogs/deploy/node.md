---
title: Windows安装node管理器
date: 2024-01-05
tags:
 - Windows
 - Node
 - npm
categories:
 - 教程
---

操作之前，请将电脑中的 **Node** 卸载干净！！！

前往 [Github：nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 下载最新版本的 [`nvm-setup.exe`](https://github.com/coreybutler/nvm-windows/releases/latest/download/nvm-setup.exe)

然后直接无脑下一步即可

| **命令**                | **功能**           |
|-----------------------|------------------|
| nvm -v                | 查看nvm版本，判断是否安装成功 |
| nvm ls available      | 获取可获取的Node版本     |
| nvm install 20.10.0   | 安装指定版本的Node      |
| nvm use 20.10.0       | 使用指定版本Node       |
| nvm uninstall 18.19.0 | 卸载指定版本Node       |

### 更换国内镜像源

```
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

::: details 如果命令不管用可以用这个方法

如果你想切换为国内镜像源，首先得找到nvm的文件位置，如果你不知道他在哪可以通过以下步骤找到

```bash
$ which nvm
/c/Users/vlssu/AppData/Roaming/nvm/nvm
```

进入安装目录，我这里为 `/c/Users/vlssu/AppData/Roaming/nvm` 对应win资源管理器中的 `C:\Users\vlssu\AppData\Roaming\nvm` ，修改目录下的 `setting.txt` 文件，有些文件夹可能无法从用户界面直接访问，你可能需要开启资源管理器中的 ⌈显示隐藏的文件、文件夹和驱动器⌋，然后就可以在文件后追加以下参数

```
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

:::