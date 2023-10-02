---
title: 纯PHP使用又拍云做随机图API
date: 2023-03-17
cover: https://api.vlssu.com/img/?230317
tags:
 - UPYUM
 - PHP
categories:
 - 教程
---

:::tip
创建又拍云存储会的吧？不会？看看我上一篇[点击这里](./imgapi.md)
:::

## 清单列表
- Nginx 或 Apache
- [PHP 7.4+](https://www.php.net/manual/zh/install.php)
- [Composer](https://getcomposer.org/)

## 安装依赖

通过 shell 执行以下命令。（记得到你网址的目录下）

```bash
composer require upyun/sdk
```

:::: code-group
::: code-group-item index.php
@[code](./file/img_upyun.php)
:::
::::