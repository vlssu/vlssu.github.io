---
title: Frp搭建与使用
date: 2020-10-28
cover: https://api.vlssu.com/img/?201028
tags:
 - Linux
 - Centos
 - Ubuntu
 - Windows
 - Frp
categories:
 - 教程
---
## 前期需要软件
1. 远程SSH控制台软件（本教程使用 Remote Terminal 此为win10商店软件）[[点我下载(此软件为Xshell)]](https://www.lanzoui.com/i88wyvi)
2. 支持Sftp的FTP软件（本教程使用 FileZilla）[[点我下载]](https://www.lanzoui.com/i88wyqd)
3. 公网IP必须要有
4. Windows、Centos或Ubuntu等主机一台

> frp项目地址 ==> [[点击跳转]](https://github.com/fatedier/frp)

## 项目后缀含义
| **下载名**                         | **含义**                      |
|---------------------------------|-----------------------------|
| frp_x.x.x_darwin_amd64.tar.gz   | MacOs操作系统                   |
| frp_x.x.x_freebsd_386.tar.gz    | UNIX操作系统x86                 |
| frp_x.x.x_freebsd_amd64.tar.gz  | UNIX操作系统x64                 |
| frp_x.x.x_linux_386.tar.gz      | Linux操作系统x86                |
| frp_x.x.x_linux_amd64.tar.gz    | Linux操作系统x64                |
| frp_x.x.x_linux_arm.tar.gz      | ARM架构为硬核的处理器                |
| frp_x.x.x_linux_arm64.tar.gz    | ARM架构为硬核的处理器                |
| frp_x.x.x_linux_mips.tar.gz     | mips是big-endian的mips架构      |
| frp_x.x.x_linux_mips64.tar.gz   | mips是big-endian的mips架构      |
| frp_x.x.x_linux_mips64le.tar.gz | mipsel是little-endian的mips架构 |
| frp_x.x.x_linux_mipsle.tar.gz   | mipsel是little-endian的mips架构 |
| frp_x.x.x_windows_386.zip       | Windows操作系统x86              |
| frp_x.x.x_windows_amd64.zip     | Windows操作系统x64              |


## 使用方法
### 版本我们只需要知道这几个就行
| **下载名**                      | **含义**         |
|------------------------------|----------------|
| frp_x.x.x_linux_386.tar.gz   | Linux操作系统x86   |
| frp_x.x.x_linux_amd64.tar.gz | Linux操作系统x64   |
| frp_x.x.x_windows_386.zip    | Windows操作系统x86 |
| frp_x.x.x_windows_amd64.zip  | Windows操作系统x64 |

- 应用包下载页[[点击跳转]](https://github.com/fatedier/frp/releases)
### 客户端配置文件
- 程序会使用`frpc.ini`配置文件
::: details frpc.ini详细说明
```
[common]
# 远程服务器IP
server_addr = 127.0.0.1
# 远程服务器端口
server_port = 7000

# 映射名称
[ssh]
# 映射协议
type = tcp
# 被映射目标IP
local_ip = 127.0.0.1
# 被映射目标端口
local_port = 22
# 远程服务器映射目标端口
remote_port = 6000
```
:::

::: details frpc_full.ini详细说明
```
# [common] 部分不可缺少
[common]
# server_addr 服务器ip，必须包含IP地址 或者 域名 主机名
# 用方括号括起来，例如 "[::1]:80", "[ipv6-host]:http" 或 "[ipv6-host%zone]:80"
server_addr = 0.0.0.0
server_port = 7000

# 如果您想通过 http 代理或 socks5 代理连接frps，则可以在此处或在全局环境变量中设置 http_proxy
# 仅在协议为tcp时有效
# http_proxy = http://user:passwd@192.168.1.128:8080
# http_proxy = socks5://user:passwd@192.168.1.128:1080
# http_proxy = ntlm://user:passwd@192.168.1.128:2080

# 日志文件 路径，例如./frpc.log
log_file = ./frpc.log

# 跟踪，调试，信息，警告，错误
log_level = info

log_max_days = 3

# 当生成日志文件时，控制台将禁用日志的颜色，默认为false
disable_log_color = false

# FRP 身份验证
token = 12345678

# 通过 http api 设置控制 frpc 管理员地址
admin_addr = 127.0.0.1
admin_port = 7400
admin_user = admin
admin_pwd = admin
# 管理依赖目录。 默认情况下，这些依赖与frpc捆绑在一起。
# assets_dir = ./static

# 提前建立连接，默认值为零
pool_count = 5

# 如果使用tcp流多路复用，则默认为true，它必须与 frps.ini 相同
tcp_mux = true

# 您的代理名称将更改为 {user}.{proxy}
user = your_name

# 决定首次登录失败时是否退出程序，否则继续重新登录到 frps
# 默认为true
login_fail_exit = true

# 用于连接服务器的通信协议
# 现在它支持tcp，kcp和websocket，默认为tcp
protocol = tcp

# 如果 tls_enable 为 true，则 frpc 将通过 tls 连接 frps
tls_enable = true

# tls_cert_file = client.crt
# tls_key_file = client.key
# tls_trusted_ca_file = ca.crt

# 指定一个dns服务器，因此frpc将使用此服务器代替默认服务器
# dns_server = 8.8.8.8

# 您要开始的 # 个代理名称，以 ',' 分隔
# 默认为空，表示所有代理
# 开始 = ssh,dns

# heartbeat configure, 不建议修改默认值
# heartbeat_interval 的默认值为10，heartbeat_timeout 为90
# heartbeat_interval = 30
# heartbeat_timeout = 90

# 客户端的其他信息
meta_var1 = 123
meta_var2 = 234

# 指定 UDP 日志的大小，单位为字节。 如果未设置，则默认值为1500。
# 客户端和服务器之间的此参数应该相同。
# 它会影响udp和sudp代理。
udp_packet_size = 1500

# 'ssh' 是唯一的代理名称
# 如果 [common] 部分里面包含了账户等, 则他将更改为 {user}.{proxy} 列如 'your_name.ssh'
[ssh]
# tcp | udp | http | https | stcp | xtcp, 默认：tcp
type = tcp
local_ip = 127.0.0.1
local_port = 22
# 限制此代理的带宽，单位为KB和MB
bandwidth_limit = 1MB
# true 或 false，如果为 true，则将对 frps 和 frpc 之间的消息进行加密，默认为 false
use_encryption = false
# 如果为 true，则邮件将被压缩
use_compression = false
# 远程端口
remote_port = 6001
# frps将负载均衡同一组中代理的连接
group = test_group
# 可以将多个相同类型的 proxy 加入到同一个 group 中，从而实现负载均衡的功能。
group_key = 123456
# 启用后端服务的运行状况检查，它现在支持'tcp'和'http'
# frpc将连接本地服务的端口以检测其健康状态
health_check_type = tcp
# 检查连接超时
health_check_timeout_s = 3
# 如果连续3次失败，代理将从frps中删除
health_check_max_failed = 3
# 每 10 秒将进行一次检查
health_check_interval_s = 10
# 每个代理的其他信息
meta_var1 = 123
meta_var2 = 234

[ssh_random]
type = tcp
local_ip = 127.0.0.1
local_port = 22
# 如果 remote_port 为0，则 frps 将为您分配一个随机端口
remote_port = 0

# 如果要公开多个端口，请在节名称前添加“ range：”前缀
# frpc 将生成多个代理，例如'tcp_port_6010'，'tcp_port_6011'等。
[range:tcp_port]
type = tcp
local_ip = 127.0.0.1
local_port = 6010-6020,6022,6024-6028
remote_port = 6010-6020,6022,6024-6028
use_encryption = false
use_compression = false

[dns]
type = udp
local_ip = 114.114.114.114
local_port = 53
remote_port = 6002
use_encryption = false
use_compression = false

[range:udp_port]
type = udp
local_ip = 127.0.0.1
local_port = 6010-6020
remote_port = 6010-6020
use_encryption = false
use_compression = false

# 将您的域名解析为[server_addr]，以便可以使用http://web01.yourdomain.com浏览web01、使用http://web02.yourdomain.com浏览web02
[web01]
type = http
local_ip = 127.0.0.1
local_port = 80
use_encryption = false
use_compression = true
# http用户名和密码是http协议的安全认证
# 如果未设置，则无需认证即可访问此custom_domains
http_user = admin
http_pwd = admin
# 如果frps的域是frps.com，则可以通过URL http://test.frps.com 访问[web01]代理
subdomain = web01
# custom_domains域名
custom_domains = web02.yourdomain.com
# 位置仅适用于http类型
locations = /,/pic
host_header_rewrite = example.com
# 带有前缀“ header_”的参数将用于更新http请求标头
header_X-From-Where = frp
health_check_type = http
# frpc 将向本地 http 服务发送 GET http 请求'/ status'
# http 服务在返回 2xx http 响应代码时仍处于活动状态
health_check_url = /status
health_check_interval_s = 10
health_check_max_failed = 3
health_check_timeout_s = 3

[web02]
type = https
local_ip = 127.0.0.1
local_port = 8000
use_encryption = false
use_compression = false
subdomain = web01
custom_domains = web02.yourdomain.com
# 如果不为空，则frpc将使用代理协议将连接信息传输到您的本地服务
# v1或v2或为空
proxy_protocol_version = v2

[plugin_unix_domain_socket]
type = tcp
remote_port = 6003
# 如果定义了插件，则 local_ip 和 local_port 无效
# 插件将处理从 frps 获得的连接
plugin = unix_domain_socket
# 插件需要前缀 “ plugin_” 的参数
plugin_unix_path = /var/run/docker.sock

[plugin_http_proxy]
type = tcp
remote_port = 6004
plugin = http_proxy
plugin_http_user = abc
plugin_http_passwd = abc

[plugin_socks5]
type = tcp
remote_port = 6005
plugin = socks5
plugin_user = abc
plugin_passwd = abc

[plugin_static_file]
type = tcp
remote_port = 6006
plugin = static_file
plugin_local_path = /var/www/blog
plugin_strip_prefix = static
plugin_http_user = abc
plugin_http_passwd = abc

[plugin_https2http]
type = https
custom_domains = test.yourdomain.com
plugin = https2http
plugin_local_addr = 127.0.0.1:80
plugin_crt_path = ./server.crt
plugin_key_path = ./server.key
plugin_host_header_rewrite = 127.0.0.1
plugin_header_X-From-Where = frp

[plugin_http2https]
type = http
custom_domains = test.yourdomain.com
plugin = http2https
plugin_local_addr = 127.0.0.1:443
plugin_host_header_rewrite = 127.0.0.1
plugin_header_X-From-Where = frp

[secret_tcp]
# 如果类型是 secret tcp ，则 remote_port 是无用的
# 想要连接本地端口的用户应使用 stcp 代理部署另一个 frpc，并且角色为 visitor
type = stcp
# 用于访客身份验证的sk
sk = abcdefg
local_ip = 127.0.0.1
local_port = 22
use_encryption = false
use_compression = false

# 在stcp服务器和stcp访客中，frpc的用户应相同
[secret_tcp_visitor]
# frpc角色访问者-> frps-> frpc角色服务器
role = visitor
type = stcp
# 您要访问的服务器名称
server_name = secret_tcp
sk = abcdefg
# 将此地址连接到访客stcp服务器
bind_addr = 127.0.0.1
bind_port = 9000
use_encryption = false
use_compression = false

[p2p_tcp]
type = xtcp
sk = abcdefg
local_ip = 127.0.0.1
local_port = 22
use_encryption = false
use_compression = false

[p2p_tcp_visitor]
role = visitor
type = xtcp
server_name = p2p_tcp
sk = abcdefg
bind_addr = 127.0.0.1
bind_port = 9001
use_encryption = false
use_compression = false

[tcpmuxhttpconnect]
type = tcpmux
multiplexer = httpconnect
local_ip = 127.0.0.1
local_port = 10701
custom_domains = tunnel1

```
:::

### 服务端配置文件
- 程序会使用frps.ini配置文件

::: details frps.ini详细说明
```
[common]
# 映射服务器通信端口
bind_port = 7000

```
:::
::: details frps_full.ini详细说明
```
# [common] 部分不可缺少
[common]
# bind_addr 服务器ip，必须包含IP地址 或者 域名 主机名
# 用方括号括起来，例如 "[::1]:80", "[ipv6-host]:http" 或 "[ipv6-host%zone]:80":80"
bind_addr = 0.0.0.0
bind_port = 7000

# udp端口有助于 udp 内网穿透
bind_udp_port = 7001

# 用于 kcp 协议的 udp 端口，可以与'bind_port'相同
# 如果未设置，则以 frps 禁用 kcp
kcp_bind_port = 7000

# 指定要侦听的地址代理，默认值与 bind_addr 相同，127.0.0.1仅限本地、0.0.0.0为不限地址
# proxy_bind_addr = 127.0.0.1

# 如果要支持虚拟主机，则必须设置用于侦听的http端口（可选）
# 注意：http 端口和 https 端口可以与 bind_port 相同
vhost_http_port = 80
vhost_https_port = 443

# vhost http 服务器的响应标头超时（秒），默认为60s
# vhost_http_timeout = 60

# TcpMuxHttpConnectPort 指定服务器侦听TCP的端口
# HTTP 连接请求。如果值为0，则服务器将不会多路传输TCP
# 一个端口请求。如果不是，它将在此值上监听
# HTTP 连接请求。默认情况下，此值为0。
# tcpmux_httpconnect_port = 1337

# 设置 dashboard_addr 和 dashboard_port 以查看frps的仪表板
# dashboard_addr 的默认值与 bind_addr 相同
# 只有设置了 dashboard_port ，仪表板才可用
dashboard_addr = 0.0.0.0
dashboard_port = 7500

# 指定访问 仪表盘控制界面 Dashboard 的登录用户名、用户密码，如果未设置，则两个默认值均为admin
dashboard_user = admin
dashboard_pwd = admin

# enable_prometheus 将在 /metrics api 中的 {dashboard_addr}:{dashboard_port} 上导出 prometheus 指标.
enable_prometheus = true

# 仪表板资源目录（仅适用于调试模式）
# assets_dir = ./static
# 日志文件 路径，例如./frpc.log
log_file = ./frps.log

# 跟踪，调试，信息，警告，错误
log_level = info

log_max_days = 3

# 当生成日志文件时，控制台将禁用日志的颜色，默认为false
disable_log_color = false

# DetailedErrorsToClient 定义是否将特定错误（带有调试信息）发送到 frpc。默认情况下，此值为true。
detailed_errors_to_client = true

# AuthenticationMethod 指定使用哪种身份验证方法对frps进行frpc身份验证。
# 如果指定了 "token"- 令牌将被读入登录消息。
# 如果指定 "oidc" -将使用OIDC设置发行OIDC（开放ID连接）令牌。默认情况下，此值为 "token"。
authentication_method = token

# AuthenticateHeartBeats 指定是否在发送给frps的心跳中包括身份验证令牌。默认情况下，此值为false。
authenticate_heartbeats = false

# AuthenticateNewWorkConns 指定是否在发送到frps的新工作连接中包括身份验证令牌。默认情况下，此值为false。
authenticate_new_work_conns = false

# FRP 身份验证
token = 12345678

# 如果 AuthenticationMethod == "oidc"，则 OidcClientId 指定用于在OIDC身份验证中获取令牌的客户端ID。
# 默认情况下，此值为 "".
oidc_client_id =

# 如果 AuthenticationMethod == "oidc"，则 OidcClientSecret 指定用于在OIDC身份验证中获取令牌的客户端密钥。
# By default, this value is "".
oidc_client_secret = 

# 如果 AuthenticationMethod == "oidc"，则 OidcAudience 指定OIDC身份验证中令牌的受众。 默认情况下，此值为""。
oidc_audience = 

# OidcTokenEndpointUrl 指定实现OIDC令牌端点的URL。
# 如果 AuthenticationMethod == "oidc"，它将用于获取OIDC令牌。 默认情况下，此值为""。
oidc_token_endpoint_url = 

# 端口白名单
# 为了防止端口被滥用，可以手动指定允许哪些端口被使用，在 frps.ini 中通过 allow_ports 来指定：
# 只允许 frpc 绑定您列出的端口，如果不进行任何设置，则没有任何限制
# allow_ports 可以配置允许使用的某个指定端口或者是一个范围内的所有端口，以 , 分隔，指定的范围以 - 分隔。
allow_ports = 2000-3000,3001,3003,4000-50000

# 每个代理中的 pool_count 超过最大值，最大链接池,每个代理预先与后端服务器建立起指定数量的最大链接数
# frps.ini 中设置每个代理可以创建的连接池上限，避免大量资源占用
max_pool_count = 5

# 每个客户端可以使用的最大端口数，默认值为0表示没有限制
max_ports_per_client = 0

# TlsOnly 指定是否仅接受TLS加密的连接。默认情况下，该值为false。
tls_only = false

# tls_cert_file = server.crt
# tls_key_file = server.key
# tls_trusted_ca_file = ca.crt

# 如果 subdomain_host 不为空，则可以在frpc的配置文件中将类型设置为http或https时设置子域
# subdomain_host 参数来设置  Web 服务增加自定义二级域名
# 当子域时，路由使用的主机是 test.frps.com
subdomain_host = frps.com

# 如果使用 tcp 流多路复用，则默认为true
tcp_mux = true

# 定制 HTTP 请求的 404 页面
# custom_404_page = /path/to/404.html

# 指定udp数据包大小，单位为字节。如果未设置，则默认值为1500。
# 客户端和服务器之间的此参数应该相同。
# 它会影响udp和sudp代理。
udp_packet_size = 1500

[plugin.user-manager]
addr = 127.0.0.1:9000
path = /handler
ops = Login

[plugin.port-manager]
addr = 127.0.0.1:9001
path = /handler
ops = NewProxy
```
:::

## 各个系统使用说明
::: danger
1. 虽说是分系统的程序的，但是两者通信可以互通，所以你是可以使用两个不同的系统来进行
2. 如不会请将配置文件在两者服务器同步更新(都重新写一遍)，但如果你知道咋整。。你可以轻松很多
:::

### Windows
1. 下载我们的应用包[点击跳转](https://github.com/fatedier/frp/releases)
2. 解压后我们会得到他的程序文件，首先我们需要修改他的配置
![](./images/frp_1.png)
- 比如我要映射JAVA版我的世界服务器(当然额外设置你可以看我上面的说明)

:::tip frpc.ini 客户端配置
```
[common]
server_addr = xxxx
server_port = 7000
token = xxxxx

[我的世界服务器]
type = tcp
local_ip = 127.0.0.1
local_port = 25565
remote_port = 25565
```
:::
:::tip frps.ini 服务端配置
```
[common]
bind_port = 7000
token = xxxxx
```
:::
3. 将他们复制到你要映射的服务器和被映射的服务器、电脑。执行相应的指令
- Windows 用户，需要在 `cmd` 终端中执行命令
```bash
./frps.exe -c ./frps.ini
# 服务端执行指令
./frpc.exe -c ./frpc.ini
# 客户端执行指令
```

### Centos Ubuntu Debian
1. 下载我们的应用包[点击跳转](https://github.com/fatedier/frp/releases)
- 比如我会直接复制他的链接使用wget下载并解压
```bash
yum install -y wget
# Centos
apt install wget -y
# Ubuntu Debian
# 安装所需工具
wget https://github.com/fatedier/frp/releases/download/v0.34.1/frp_0.34.1_linux_amd64.tar.gz
# 下载你所需的版本，链接请自行获取
```
2. 解压后我们会得到他的程序文件，首先我们需要修改他的配置
```bash
tar -xzvf frp_0.34.1_linux_amd64.tar.gz
# 解压文件 [文件名请注意，是你上面下载的链接]
cd frp_0.34.1_linux_amd64
# 注意是你上面解压出来的文件目录
```
3. 解压后我们会得到他的程序文件，首先我们需要修改他的配置
![](./images/frp_2.png)
比如我要映射JAVA版我的世界服务器(当然额外设置你可以看我上面的说明)
建议使用 `nano` 来进行编辑
```bash
yum install nano -y
# Centos系统使用
apt install nano -y
# Ubuntu
apt install nano -y
# Debian貌似自带？
nano frpc.ini
nano frps.ini
# 直接就可以编辑，Ctrl+X 退出，它会提示是否需要保存，按 Y 即可，再按回车即可完成
```
:::tip frpc.ini 客户端配置
```
[common]
server_addr = xxxx
server_port = 7000
token = xxxxx

[我的世界服务器]
type = tcp
local_ip = 127.0.0.1
local_port = 25565
remote_port = 25565
```
:::
:::tip frps.ini 服务端配置
```
[common]
bind_port = 7000
token = xxxxx
```
:::
3. 将他们复制到你要映射的服务器和被映射的服务器、电脑。执行相应的指令
```bash
./frps -c ./frps.ini
# 服务端执行指令
./frpc -c ./frpc.ini
# 客户端执行指令
```