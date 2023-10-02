---
title: 如何关闭Linux里面的SElinux
date: 2020-03-05
tags:
 - Linux
categories: 
 - Linux小知识
---

## 临时生效
命令临时生效：
```bash
setenforce 0 (临时生效可以直接用setenforce 0 )
            1 启用
            0 告警，不启用
```
## 永久生效
### 查看SElinux状态
```bash
getenforce

//Enforcing - 开启模式
//Permissive - 临时关闭模式
//Disabled - 永久关闭模式
```
### 永久关闭
```bash
vi /etc/sysconfig/selinux
SELINUX=enforcing 改为 SELINUX=disabled
:wq    //保存
```
**更改好后重启服务器**