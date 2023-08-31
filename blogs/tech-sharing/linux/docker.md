---
title: 在Linux中安装Docker
date: 2020-03-03
cover: https://api.vlssu.com/img/?200303
tags:
 - Docker
categories: 
 - Linux小知识
---

## 安装 Docker

### Ubuntu 

```bash
sudo apt-get update
sudo apt-get install docker.io
```

启动 Docker 服务（重要）

```bash
sudo service docker start
```
<br />

### Centos
Docker 要求 CentOS 系统的内核版本高于 3.10 ，通过 `uname -r` 命令查看你当前的内核版本。

```bash
yum update -y
yum -y install docker
```

启动 Docker 服务（重要）

```bash
sudo service docker start
```
<br />

### Arch Linux

```bash
# 安装 Docker
pacman -S docker
# 启动 Docker
systemctl start docker
# 开机启动 Docker
systemctl enable docker
# 关掉开机启动 Docker
systemclt disable docker
```

<br /><br />

### 给予当前用户Docker权限 （强烈建议）

```bash
#添加docker用户组
sudo groupadd docker
#将当前用户加入该用户组
sudo usermod -aG docker $USER
```
可能需要重新登陆后生效。

### 检查 Docker 环境是否正确（可选）

查看是否已经安装，配好PATH路径，一般而言自动配好了。MCSManager 需要 Docker 命令必须能够执行，否则无法正确使用。


输出版本号即为正确。

```bash
docker version
```

### 检查 Docker 是否能够运行（可选）

运行 Hello world 程序（需要联网下载）。输出内容包含有 "Hello from Docker!" 则代表运行成功代表无问题。

```bash
docker run hello-world
```


### 配置国内镜像源（可选，强烈建议做）

```bash
vi /etc/docker/daemon.json 

{ 
"registry-mirrors": ["https://registry.docker-cn.com"] 
}
```

重启服务。

```bash
sudo service docker restart
```

### 开机自启docker
```bash
systemctl enable docker.service
# 设置开机自启
systemctl disable docker.service
# 关闭开机自启
```

## 卸载 Docker
1. 卸载docker
```bash
# 搜索已经安装的docker 安装包
yum list installed|grep docker  
# 删除安装包
yum -y remove docker*
# 删除docker 镜像
rm -rf /var/lib/docker
```

2. 再次check docker是否已经卸载成功
```bash
yum list installed|grep docker 或者 rpm -qa|grep docker  
```