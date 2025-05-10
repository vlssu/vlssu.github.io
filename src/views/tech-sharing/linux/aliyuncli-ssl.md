---
title: 使用阿里云CLI在1panel申请证书后自动上传阿里云DCDN
date: 2025-05-09
cover: https://api.vlssu.com/img/?250509
tags:
 - 1panel
categories: 
 - Linux使用小知识
---

## 安装 阿里云CLI

```bash
wget https://aliyuncli.alicdn.com/aliyun-cli-linux-latest-amd64.tgz
tar xzvf aliyun-cli-linux-latest-amd64.tgz
cp aliyun /usr/local/bin
```

如果更新阿里云CLI，可以通过重复执行此命令即可更新

## 1Panel设置

安装1Panel需要保证版本 `≥ v1.10.29-lts` ，否则可能没有以下功能

1. 在1panel设置好相关设置后，在证书申请页需要将「推送证书到本地目录」选项打开，并设置一个目录，比如我设置的是 `/etc/letsencrypt/live/vlssu.com` 。

2. 再勾选「申请证书之后执行脚本」设置以下内容：

```bash{2-3}
aliyun configure set \
  --access-key-id <AccessKey Id> \
  --access-key-secret <AccessKey Secret> \
  --region cn-nanjing-a \
  --profile AkProfile \
  --mode AK
```

`<AccessKey Id>`、`<AccessKey Secret>` 获取方式请参见[阿里云创建RAM用户的AccessKey](https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair#section-ynu-63z-ujz)。

换行填写以下部分，多个域名则复制多份并分行组合，因为每段命令只能上传一个域名的证书

```bash{3,6-7}
aliyun dcdn SetDcdnDomainSSLCertificate \
  --region cn-shanghai \
  --DomainName 'vlssu.com' \
  --CertType upload \
  --SSLProtocol on \
  --SSLPub "$(cat /etc/letsencrypt/live/vlssu.com/fullchain.pem)" \
  --SSLPri "$(cat /etc/letsencrypt/live/vlssu.com/privkey.pem)" \
  --endpoint dcdn.aliyuncs.com
```

如果你的加速域名是泛域名则在域名前加 `.` 即可，如下

```bash{3,6-7}
aliyun dcdn SetDcdnDomainSSLCertificate \
  --region cn-shanghai \
  --DomainName '.vlssu.com' \
  --CertType upload \
  --SSLProtocol on \
  --SSLPub "$(cat /etc/letsencrypt/live/vlssu.com/fullchain.pem)" \
  --SSLPri "$(cat /etc/letsencrypt/live/vlssu.com/privkey.pem)" \
  --endpoint dcdn.aliyuncs.com
```
