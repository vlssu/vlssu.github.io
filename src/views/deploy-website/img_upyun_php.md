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


## index.php 文件内容

```php
<?php

// 记得在根目录中执行 `composer require upyun/sdk`

/**********************************************
* 文件名 : index.php
* 使用方法:
* <img src=img.php>
* <img src=img.php?2>
* ?2 这个2数字随便整，这样一个页面多处应用才能真正随机
* 
* https://api.example.com                   返回图片
* https://api.example.com?type=json         返回JSON参数
***********************************************/

if (isset($_GET['folder'])) {
    $folder = (string)$_GET['folder'];
} else {
    $folder = 'nothumb';
}

require_once('vendor/autoload.php');
use Upyun\Upyun;
use Upyun\Config;

// 配置Upyun服务
$serviceConfig = new Config(
    '服务名称',         // 服务名称
    '操作员名称',       // 操作员名称
    '操作员密码'        // 操作员密码
);

// 读取路径和加速域名及优化参数
$path = '/path/';
$domain = 'https://domain.example.com';
$value = '!/webp';

// 防盗链参数,没有可不写
$token = '';

// 连接Upyun服务获取文件夹内的文件名
$up = new Upyun($serviceConfig);
$files = $up->read($path);
$name = array_column($files['files'], 'name');

// 判断是否需要防盗链
if ($token != '') {
    // 防盗链参数拼接
    $uri = $path . $name[array_rand($name)];
    $expires = time() + 600;
    $md5 = md5("{$token}&{$expires}&{$uri}");
    $upt = substr($md5,12,8);

    // 将防盗链参数拼接到图片链接中
    $randomImage = $domain . $path . $name[array_rand($name)] . $value . "?_upt={$upt}";
} else {
    // 不需要防盗链，则不拼接防盗链参数
    $randomImage = $domain . $path . $name[array_rand($name)] . $value;
}

// 生成随机数作为图片的返回值
$randomValue = rand();

// 在访问链接时添加随机数作为查询参数，以确保同一页面访问多次时返回不同的图片
$randomImage = $randomImage . (($token != '') ? '&rand=' : '?rand=') . $randomValue;

// 返回指定格式
$type = $_GET['type'] ?? '';
switch ($type) {
    // JSON返回
    case 'json':
        header('Content-type: application/json');
        die(json_encode(['image_url' => $randomImage,'random_value' => $randomValue]));

    default:
        header('Content-Type: image/png');
        echo(file_get_contents($randomImage));
}
?>
```
