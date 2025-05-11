import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as i,o as l}from"./app-BM-r7_CI.js";const e="/assets/frp_1-BxhZsG5B.png",p="/assets/frp_2-DXPrcbWL.png",d={};function c(r,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h2 id="前期需要软件" tabindex="-1"><a class="header-anchor" href="#前期需要软件"><span>前期需要软件</span></a></h2><ol><li>远程SSH控制台软件（本教程使用 Remote Terminal 此为win10商店软件）<a href="https://www.lanzoui.com/i88wyvi" target="_blank" rel="noopener noreferrer">[点我下载(此软件为Xshell)]</a></li><li>支持Sftp的FTP软件（本教程使用 FileZilla）<a href="https://www.lanzoui.com/i88wyqd" target="_blank" rel="noopener noreferrer">[点我下载]</a></li><li>公网IP必须要有</li><li>Windows、Centos或Ubuntu等主机一台</li></ol><blockquote><p>frp项目地址 ==&gt; <a href="https://github.com/fatedier/frp" target="_blank" rel="noopener noreferrer">[点击跳转]</a></p></blockquote><h2 id="项目后缀含义" tabindex="-1"><a class="header-anchor" href="#项目后缀含义"><span>项目后缀含义</span></a></h2><table><thead><tr><th><strong>下载名</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td>frp_x.x.x_darwin_amd64.tar.gz</td><td>MacOs操作系统</td></tr><tr><td>frp_x.x.x_freebsd_386.tar.gz</td><td>UNIX操作系统x86</td></tr><tr><td>frp_x.x.x_freebsd_amd64.tar.gz</td><td>UNIX操作系统x64</td></tr><tr><td>frp_x.x.x_linux_386.tar.gz</td><td>Linux操作系统x86</td></tr><tr><td>frp_x.x.x_linux_amd64.tar.gz</td><td>Linux操作系统x64</td></tr><tr><td>frp_x.x.x_linux_arm.tar.gz</td><td>ARM架构为硬核的处理器</td></tr><tr><td>frp_x.x.x_linux_arm64.tar.gz</td><td>ARM架构为硬核的处理器</td></tr><tr><td>frp_x.x.x_linux_mips.tar.gz</td><td>mips是big-endian的mips架构</td></tr><tr><td>frp_x.x.x_linux_mips64.tar.gz</td><td>mips是big-endian的mips架构</td></tr><tr><td>frp_x.x.x_linux_mips64le.tar.gz</td><td>mipsel是little-endian的mips架构</td></tr><tr><td>frp_x.x.x_linux_mipsle.tar.gz</td><td>mipsel是little-endian的mips架构</td></tr><tr><td>frp_x.x.x_windows_386.zip</td><td>Windows操作系统x86</td></tr><tr><td>frp_x.x.x_windows_amd64.zip</td><td>Windows操作系统x64</td></tr></tbody></table><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><h3 id="版本我们只需要知道这几个就行" tabindex="-1"><a class="header-anchor" href="#版本我们只需要知道这几个就行"><span>版本我们只需要知道这几个就行</span></a></h3><table><thead><tr><th><strong>下载名</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td>frp_x.x.x_linux_386.tar.gz</td><td>Linux操作系统x86</td></tr><tr><td>frp_x.x.x_linux_amd64.tar.gz</td><td>Linux操作系统x64</td></tr><tr><td>frp_x.x.x_windows_386.zip</td><td>Windows操作系统x86</td></tr><tr><td>frp_x.x.x_windows_amd64.zip</td><td>Windows操作系统x64</td></tr></tbody></table><ul><li>应用包下载页<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">[点击跳转]</a></li></ul><h3 id="客户端配置文件" tabindex="-1"><a class="header-anchor" href="#客户端配置文件"><span>客户端配置文件</span></a></h3><ul><li>程序会使用<code>frpc.ini</code>配置文件</li></ul><details class="hint-container details"><summary>frpc.ini详细说明</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[common]</span></span>
<span class="line"><span># 远程服务器IP</span></span>
<span class="line"><span>server_addr = 127.0.0.1</span></span>
<span class="line"><span># 远程服务器端口</span></span>
<span class="line"><span>server_port = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 映射名称</span></span>
<span class="line"><span>[ssh]</span></span>
<span class="line"><span># 映射协议</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span># 被映射目标IP</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span># 被映射目标端口</span></span>
<span class="line"><span>local_port = 22</span></span>
<span class="line"><span># 远程服务器映射目标端口</span></span>
<span class="line"><span>remote_port = 6000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>frpc_full.ini详细说明</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># [common] 部分不可缺少</span></span>
<span class="line"><span>[common]</span></span>
<span class="line"><span># server_addr 服务器ip，必须包含IP地址 或者 域名 主机名</span></span>
<span class="line"><span># 用方括号括起来，例如 &quot;[::1]:80&quot;, &quot;[ipv6-host]:http&quot; 或 &quot;[ipv6-host%zone]:80&quot;</span></span>
<span class="line"><span>server_addr = 0.0.0.0</span></span>
<span class="line"><span>server_port = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果您想通过 http 代理或 socks5 代理连接frps，则可以在此处或在全局环境变量中设置 http_proxy</span></span>
<span class="line"><span># 仅在协议为tcp时有效</span></span>
<span class="line"><span># http_proxy = http://user:passwd@192.168.1.128:8080</span></span>
<span class="line"><span># http_proxy = socks5://user:passwd@192.168.1.128:1080</span></span>
<span class="line"><span># http_proxy = ntlm://user:passwd@192.168.1.128:2080</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志文件 路径，例如./frpc.log</span></span>
<span class="line"><span>log_file = ./frpc.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 跟踪，调试，信息，警告，错误</span></span>
<span class="line"><span>log_level = info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log_max_days = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当生成日志文件时，控制台将禁用日志的颜色，默认为false</span></span>
<span class="line"><span>disable_log_color = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># FRP 身份验证</span></span>
<span class="line"><span>token = 12345678</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通过 http api 设置控制 frpc 管理员地址</span></span>
<span class="line"><span>admin_addr = 127.0.0.1</span></span>
<span class="line"><span>admin_port = 7400</span></span>
<span class="line"><span>admin_user = admin</span></span>
<span class="line"><span>admin_pwd = admin</span></span>
<span class="line"><span># 管理依赖目录。 默认情况下，这些依赖与frpc捆绑在一起。</span></span>
<span class="line"><span># assets_dir = ./static</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提前建立连接，默认值为零</span></span>
<span class="line"><span>pool_count = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果使用tcp流多路复用，则默认为true，它必须与 frps.ini 相同</span></span>
<span class="line"><span>tcp_mux = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 您的代理名称将更改为 {user}.{proxy}</span></span>
<span class="line"><span>user = your_name</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 决定首次登录失败时是否退出程序，否则继续重新登录到 frps</span></span>
<span class="line"><span># 默认为true</span></span>
<span class="line"><span>login_fail_exit = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 用于连接服务器的通信协议</span></span>
<span class="line"><span># 现在它支持tcp，kcp和websocket，默认为tcp</span></span>
<span class="line"><span>protocol = tcp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果 tls_enable 为 true，则 frpc 将通过 tls 连接 frps</span></span>
<span class="line"><span>tls_enable = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># tls_cert_file = client.crt</span></span>
<span class="line"><span># tls_key_file = client.key</span></span>
<span class="line"><span># tls_trusted_ca_file = ca.crt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定一个dns服务器，因此frpc将使用此服务器代替默认服务器</span></span>
<span class="line"><span># dns_server = 8.8.8.8</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 您要开始的 # 个代理名称，以 &#39;,&#39; 分隔</span></span>
<span class="line"><span># 默认为空，表示所有代理</span></span>
<span class="line"><span># 开始 = ssh,dns</span></span>
<span class="line"><span></span></span>
<span class="line"><span># heartbeat configure, 不建议修改默认值</span></span>
<span class="line"><span># heartbeat_interval 的默认值为10，heartbeat_timeout 为90</span></span>
<span class="line"><span># heartbeat_interval = 30</span></span>
<span class="line"><span># heartbeat_timeout = 90</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 客户端的其他信息</span></span>
<span class="line"><span>meta_var1 = 123</span></span>
<span class="line"><span>meta_var2 = 234</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定 UDP 日志的大小，单位为字节。 如果未设置，则默认值为1500。</span></span>
<span class="line"><span># 客户端和服务器之间的此参数应该相同。</span></span>
<span class="line"><span># 它会影响udp和sudp代理。</span></span>
<span class="line"><span>udp_packet_size = 1500</span></span>
<span class="line"><span></span></span>
<span class="line"><span># &#39;ssh&#39; 是唯一的代理名称</span></span>
<span class="line"><span># 如果 [common] 部分里面包含了账户等, 则他将更改为 {user}.{proxy} 列如 &#39;your_name.ssh&#39;</span></span>
<span class="line"><span>[ssh]</span></span>
<span class="line"><span># tcp | udp | http | https | stcp | xtcp, 默认：tcp</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 22</span></span>
<span class="line"><span># 限制此代理的带宽，单位为KB和MB</span></span>
<span class="line"><span>bandwidth_limit = 1MB</span></span>
<span class="line"><span># true 或 false，如果为 true，则将对 frps 和 frpc 之间的消息进行加密，默认为 false</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span># 如果为 true，则邮件将被压缩</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span># 远程端口</span></span>
<span class="line"><span>remote_port = 6001</span></span>
<span class="line"><span># frps将负载均衡同一组中代理的连接</span></span>
<span class="line"><span>group = test_group</span></span>
<span class="line"><span># 可以将多个相同类型的 proxy 加入到同一个 group 中，从而实现负载均衡的功能。</span></span>
<span class="line"><span>group_key = 123456</span></span>
<span class="line"><span># 启用后端服务的运行状况检查，它现在支持&#39;tcp&#39;和&#39;http&#39;</span></span>
<span class="line"><span># frpc将连接本地服务的端口以检测其健康状态</span></span>
<span class="line"><span>health_check_type = tcp</span></span>
<span class="line"><span># 检查连接超时</span></span>
<span class="line"><span>health_check_timeout_s = 3</span></span>
<span class="line"><span># 如果连续3次失败，代理将从frps中删除</span></span>
<span class="line"><span>health_check_max_failed = 3</span></span>
<span class="line"><span># 每 10 秒将进行一次检查</span></span>
<span class="line"><span>health_check_interval_s = 10</span></span>
<span class="line"><span># 每个代理的其他信息</span></span>
<span class="line"><span>meta_var1 = 123</span></span>
<span class="line"><span>meta_var2 = 234</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[ssh_random]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 22</span></span>
<span class="line"><span># 如果 remote_port 为0，则 frps 将为您分配一个随机端口</span></span>
<span class="line"><span>remote_port = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果要公开多个端口，请在节名称前添加“ range：”前缀</span></span>
<span class="line"><span># frpc 将生成多个代理，例如&#39;tcp_port_6010&#39;，&#39;tcp_port_6011&#39;等。</span></span>
<span class="line"><span>[range:tcp_port]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 6010-6020,6022,6024-6028</span></span>
<span class="line"><span>remote_port = 6010-6020,6022,6024-6028</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[dns]</span></span>
<span class="line"><span>type = udp</span></span>
<span class="line"><span>local_ip = 114.114.114.114</span></span>
<span class="line"><span>local_port = 53</span></span>
<span class="line"><span>remote_port = 6002</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[range:udp_port]</span></span>
<span class="line"><span>type = udp</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 6010-6020</span></span>
<span class="line"><span>remote_port = 6010-6020</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将您的域名解析为[server_addr]，以便可以使用http://web01.yourdomain.com浏览web01、使用http://web02.yourdomain.com浏览web02</span></span>
<span class="line"><span>[web01]</span></span>
<span class="line"><span>type = http</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 80</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = true</span></span>
<span class="line"><span># http用户名和密码是http协议的安全认证</span></span>
<span class="line"><span># 如果未设置，则无需认证即可访问此custom_domains</span></span>
<span class="line"><span>http_user = admin</span></span>
<span class="line"><span>http_pwd = admin</span></span>
<span class="line"><span># 如果frps的域是frps.com，则可以通过URL http://test.frps.com 访问[web01]代理</span></span>
<span class="line"><span>subdomain = web01</span></span>
<span class="line"><span># custom_domains域名</span></span>
<span class="line"><span>custom_domains = web02.yourdomain.com</span></span>
<span class="line"><span># 位置仅适用于http类型</span></span>
<span class="line"><span>locations = /,/pic</span></span>
<span class="line"><span>host_header_rewrite = example.com</span></span>
<span class="line"><span># 带有前缀“ header_”的参数将用于更新http请求标头</span></span>
<span class="line"><span>header_X-From-Where = frp</span></span>
<span class="line"><span>health_check_type = http</span></span>
<span class="line"><span># frpc 将向本地 http 服务发送 GET http 请求&#39;/ status&#39;</span></span>
<span class="line"><span># http 服务在返回 2xx http 响应代码时仍处于活动状态</span></span>
<span class="line"><span>health_check_url = /status</span></span>
<span class="line"><span>health_check_interval_s = 10</span></span>
<span class="line"><span>health_check_max_failed = 3</span></span>
<span class="line"><span>health_check_timeout_s = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[web02]</span></span>
<span class="line"><span>type = https</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 8000</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span>subdomain = web01</span></span>
<span class="line"><span>custom_domains = web02.yourdomain.com</span></span>
<span class="line"><span># 如果不为空，则frpc将使用代理协议将连接信息传输到您的本地服务</span></span>
<span class="line"><span># v1或v2或为空</span></span>
<span class="line"><span>proxy_protocol_version = v2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin_unix_domain_socket]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>remote_port = 6003</span></span>
<span class="line"><span># 如果定义了插件，则 local_ip 和 local_port 无效</span></span>
<span class="line"><span># 插件将处理从 frps 获得的连接</span></span>
<span class="line"><span>plugin = unix_domain_socket</span></span>
<span class="line"><span># 插件需要前缀 “ plugin_” 的参数</span></span>
<span class="line"><span>plugin_unix_path = /var/run/docker.sock</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin_http_proxy]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>remote_port = 6004</span></span>
<span class="line"><span>plugin = http_proxy</span></span>
<span class="line"><span>plugin_http_user = abc</span></span>
<span class="line"><span>plugin_http_passwd = abc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin_socks5]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>remote_port = 6005</span></span>
<span class="line"><span>plugin = socks5</span></span>
<span class="line"><span>plugin_user = abc</span></span>
<span class="line"><span>plugin_passwd = abc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin_static_file]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>remote_port = 6006</span></span>
<span class="line"><span>plugin = static_file</span></span>
<span class="line"><span>plugin_local_path = /var/www/blog</span></span>
<span class="line"><span>plugin_strip_prefix = static</span></span>
<span class="line"><span>plugin_http_user = abc</span></span>
<span class="line"><span>plugin_http_passwd = abc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin_https2http]</span></span>
<span class="line"><span>type = https</span></span>
<span class="line"><span>custom_domains = test.yourdomain.com</span></span>
<span class="line"><span>plugin = https2http</span></span>
<span class="line"><span>plugin_local_addr = 127.0.0.1:80</span></span>
<span class="line"><span>plugin_crt_path = ./server.crt</span></span>
<span class="line"><span>plugin_key_path = ./server.key</span></span>
<span class="line"><span>plugin_host_header_rewrite = 127.0.0.1</span></span>
<span class="line"><span>plugin_header_X-From-Where = frp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin_http2https]</span></span>
<span class="line"><span>type = http</span></span>
<span class="line"><span>custom_domains = test.yourdomain.com</span></span>
<span class="line"><span>plugin = http2https</span></span>
<span class="line"><span>plugin_local_addr = 127.0.0.1:443</span></span>
<span class="line"><span>plugin_host_header_rewrite = 127.0.0.1</span></span>
<span class="line"><span>plugin_header_X-From-Where = frp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[secret_tcp]</span></span>
<span class="line"><span># 如果类型是 secret tcp ，则 remote_port 是无用的</span></span>
<span class="line"><span># 想要连接本地端口的用户应使用 stcp 代理部署另一个 frpc，并且角色为 visitor</span></span>
<span class="line"><span>type = stcp</span></span>
<span class="line"><span># 用于访客身份验证的sk</span></span>
<span class="line"><span>sk = abcdefg</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 22</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在stcp服务器和stcp访客中，frpc的用户应相同</span></span>
<span class="line"><span>[secret_tcp_visitor]</span></span>
<span class="line"><span># frpc角色访问者-&gt; frps-&gt; frpc角色服务器</span></span>
<span class="line"><span>role = visitor</span></span>
<span class="line"><span>type = stcp</span></span>
<span class="line"><span># 您要访问的服务器名称</span></span>
<span class="line"><span>server_name = secret_tcp</span></span>
<span class="line"><span>sk = abcdefg</span></span>
<span class="line"><span># 将此地址连接到访客stcp服务器</span></span>
<span class="line"><span>bind_addr = 127.0.0.1</span></span>
<span class="line"><span>bind_port = 9000</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[p2p_tcp]</span></span>
<span class="line"><span>type = xtcp</span></span>
<span class="line"><span>sk = abcdefg</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 22</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[p2p_tcp_visitor]</span></span>
<span class="line"><span>role = visitor</span></span>
<span class="line"><span>type = xtcp</span></span>
<span class="line"><span>server_name = p2p_tcp</span></span>
<span class="line"><span>sk = abcdefg</span></span>
<span class="line"><span>bind_addr = 127.0.0.1</span></span>
<span class="line"><span>bind_port = 9001</span></span>
<span class="line"><span>use_encryption = false</span></span>
<span class="line"><span>use_compression = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[tcpmuxhttpconnect]</span></span>
<span class="line"><span>type = tcpmux</span></span>
<span class="line"><span>multiplexer = httpconnect</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 10701</span></span>
<span class="line"><span>custom_domains = tunnel1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="服务端配置文件" tabindex="-1"><a class="header-anchor" href="#服务端配置文件"><span>服务端配置文件</span></a></h3><ul><li>程序会使用frps.ini配置文件</li></ul><details class="hint-container details"><summary>frps.ini详细说明</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[common]</span></span>
<span class="line"><span># 映射服务器通信端口</span></span>
<span class="line"><span>bind_port = 7000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>frps_full.ini详细说明</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># [common] 部分不可缺少</span></span>
<span class="line"><span>[common]</span></span>
<span class="line"><span># bind_addr 服务器ip，必须包含IP地址 或者 域名 主机名</span></span>
<span class="line"><span># 用方括号括起来，例如 &quot;[::1]:80&quot;, &quot;[ipv6-host]:http&quot; 或 &quot;[ipv6-host%zone]:80&quot;:80&quot;</span></span>
<span class="line"><span>bind_addr = 0.0.0.0</span></span>
<span class="line"><span>bind_port = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># udp端口有助于 udp 内网穿透</span></span>
<span class="line"><span>bind_udp_port = 7001</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 用于 kcp 协议的 udp 端口，可以与&#39;bind_port&#39;相同</span></span>
<span class="line"><span># 如果未设置，则以 frps 禁用 kcp</span></span>
<span class="line"><span>kcp_bind_port = 7000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定要侦听的地址代理，默认值与 bind_addr 相同，127.0.0.1仅限本地、0.0.0.0为不限地址</span></span>
<span class="line"><span># proxy_bind_addr = 127.0.0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果要支持虚拟主机，则必须设置用于侦听的http端口（可选）</span></span>
<span class="line"><span># 注意：http 端口和 https 端口可以与 bind_port 相同</span></span>
<span class="line"><span>vhost_http_port = 80</span></span>
<span class="line"><span>vhost_https_port = 443</span></span>
<span class="line"><span></span></span>
<span class="line"><span># vhost http 服务器的响应标头超时（秒），默认为60s</span></span>
<span class="line"><span># vhost_http_timeout = 60</span></span>
<span class="line"><span></span></span>
<span class="line"><span># TcpMuxHttpConnectPort 指定服务器侦听TCP的端口</span></span>
<span class="line"><span># HTTP 连接请求。如果值为0，则服务器将不会多路传输TCP</span></span>
<span class="line"><span># 一个端口请求。如果不是，它将在此值上监听</span></span>
<span class="line"><span># HTTP 连接请求。默认情况下，此值为0。</span></span>
<span class="line"><span># tcpmux_httpconnect_port = 1337</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置 dashboard_addr 和 dashboard_port 以查看frps的仪表板</span></span>
<span class="line"><span># dashboard_addr 的默认值与 bind_addr 相同</span></span>
<span class="line"><span># 只有设置了 dashboard_port ，仪表板才可用</span></span>
<span class="line"><span>dashboard_addr = 0.0.0.0</span></span>
<span class="line"><span>dashboard_port = 7500</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定访问 仪表盘控制界面 Dashboard 的登录用户名、用户密码，如果未设置，则两个默认值均为admin</span></span>
<span class="line"><span>dashboard_user = admin</span></span>
<span class="line"><span>dashboard_pwd = admin</span></span>
<span class="line"><span></span></span>
<span class="line"><span># enable_prometheus 将在 /metrics api 中的 {dashboard_addr}:{dashboard_port} 上导出 prometheus 指标.</span></span>
<span class="line"><span>enable_prometheus = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 仪表板资源目录（仅适用于调试模式）</span></span>
<span class="line"><span># assets_dir = ./static</span></span>
<span class="line"><span># 日志文件 路径，例如./frpc.log</span></span>
<span class="line"><span>log_file = ./frps.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 跟踪，调试，信息，警告，错误</span></span>
<span class="line"><span>log_level = info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>log_max_days = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当生成日志文件时，控制台将禁用日志的颜色，默认为false</span></span>
<span class="line"><span>disable_log_color = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># DetailedErrorsToClient 定义是否将特定错误（带有调试信息）发送到 frpc。默认情况下，此值为true。</span></span>
<span class="line"><span>detailed_errors_to_client = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AuthenticationMethod 指定使用哪种身份验证方法对frps进行frpc身份验证。</span></span>
<span class="line"><span># 如果指定了 &quot;token&quot;- 令牌将被读入登录消息。</span></span>
<span class="line"><span># 如果指定 &quot;oidc&quot; -将使用OIDC设置发行OIDC（开放ID连接）令牌。默认情况下，此值为 &quot;token&quot;。</span></span>
<span class="line"><span>authentication_method = token</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AuthenticateHeartBeats 指定是否在发送给frps的心跳中包括身份验证令牌。默认情况下，此值为false。</span></span>
<span class="line"><span>authenticate_heartbeats = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># AuthenticateNewWorkConns 指定是否在发送到frps的新工作连接中包括身份验证令牌。默认情况下，此值为false。</span></span>
<span class="line"><span>authenticate_new_work_conns = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># FRP 身份验证</span></span>
<span class="line"><span>token = 12345678</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果 AuthenticationMethod == &quot;oidc&quot;，则 OidcClientId 指定用于在OIDC身份验证中获取令牌的客户端ID。</span></span>
<span class="line"><span># 默认情况下，此值为 &quot;&quot;.</span></span>
<span class="line"><span>oidc_client_id =</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果 AuthenticationMethod == &quot;oidc&quot;，则 OidcClientSecret 指定用于在OIDC身份验证中获取令牌的客户端密钥。</span></span>
<span class="line"><span># By default, this value is &quot;&quot;.</span></span>
<span class="line"><span>oidc_client_secret = </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果 AuthenticationMethod == &quot;oidc&quot;，则 OidcAudience 指定OIDC身份验证中令牌的受众。 默认情况下，此值为&quot;&quot;。</span></span>
<span class="line"><span>oidc_audience = </span></span>
<span class="line"><span></span></span>
<span class="line"><span># OidcTokenEndpointUrl 指定实现OIDC令牌端点的URL。</span></span>
<span class="line"><span># 如果 AuthenticationMethod == &quot;oidc&quot;，它将用于获取OIDC令牌。 默认情况下，此值为&quot;&quot;。</span></span>
<span class="line"><span>oidc_token_endpoint_url = </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 端口白名单</span></span>
<span class="line"><span># 为了防止端口被滥用，可以手动指定允许哪些端口被使用，在 frps.ini 中通过 allow_ports 来指定：</span></span>
<span class="line"><span># 只允许 frpc 绑定您列出的端口，如果不进行任何设置，则没有任何限制</span></span>
<span class="line"><span># allow_ports 可以配置允许使用的某个指定端口或者是一个范围内的所有端口，以 , 分隔，指定的范围以 - 分隔。</span></span>
<span class="line"><span>allow_ports = 2000-3000,3001,3003,4000-50000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 每个代理中的 pool_count 超过最大值，最大链接池,每个代理预先与后端服务器建立起指定数量的最大链接数</span></span>
<span class="line"><span># frps.ini 中设置每个代理可以创建的连接池上限，避免大量资源占用</span></span>
<span class="line"><span>max_pool_count = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 每个客户端可以使用的最大端口数，默认值为0表示没有限制</span></span>
<span class="line"><span>max_ports_per_client = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span># TlsOnly 指定是否仅接受TLS加密的连接。默认情况下，该值为false。</span></span>
<span class="line"><span>tls_only = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span># tls_cert_file = server.crt</span></span>
<span class="line"><span># tls_key_file = server.key</span></span>
<span class="line"><span># tls_trusted_ca_file = ca.crt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果 subdomain_host 不为空，则可以在frpc的配置文件中将类型设置为http或https时设置子域</span></span>
<span class="line"><span># subdomain_host 参数来设置  Web 服务增加自定义二级域名</span></span>
<span class="line"><span># 当子域时，路由使用的主机是 test.frps.com</span></span>
<span class="line"><span>subdomain_host = frps.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果使用 tcp 流多路复用，则默认为true</span></span>
<span class="line"><span>tcp_mux = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定制 HTTP 请求的 404 页面</span></span>
<span class="line"><span># custom_404_page = /path/to/404.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定udp数据包大小，单位为字节。如果未设置，则默认值为1500。</span></span>
<span class="line"><span># 客户端和服务器之间的此参数应该相同。</span></span>
<span class="line"><span># 它会影响udp和sudp代理。</span></span>
<span class="line"><span>udp_packet_size = 1500</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin.user-manager]</span></span>
<span class="line"><span>addr = 127.0.0.1:9000</span></span>
<span class="line"><span>path = /handler</span></span>
<span class="line"><span>ops = Login</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[plugin.port-manager]</span></span>
<span class="line"><span>addr = 127.0.0.1:9001</span></span>
<span class="line"><span>path = /handler</span></span>
<span class="line"><span>ops = NewProxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="各个系统使用说明" tabindex="-1"><a class="header-anchor" href="#各个系统使用说明"><span>各个系统使用说明</span></a></h2><div class="hint-container caution"><p class="hint-container-title">警告</p><ol><li>虽说是分系统的程序的，但是两者通信可以互通，所以你是可以使用两个不同的系统来进行</li><li>如不会请将配置文件在两者服务器同步更新(都重新写一遍)，但如果你知道咋整。。你可以轻松很多</li></ol></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><ol><li>下载我们的应用包<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">点击跳转</a></li><li>解压后我们会得到他的程序文件，首先我们需要修改他的配置<br><img src="`+e+`" alt="" loading="lazy"></li></ol><ul><li>比如我要映射JAVA版我的世界服务器(当然额外设置你可以看我上面的说明)</li></ul><div class="hint-container tip"><p class="hint-container-title">frpc.ini 客户端配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[common]</span></span>
<span class="line"><span>server_addr = xxxx</span></span>
<span class="line"><span>server_port = 7000</span></span>
<span class="line"><span>token = xxxxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[我的世界服务器]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 25565</span></span>
<span class="line"><span>remote_port = 25565</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">frps.ini 服务端配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[common]</span></span>
<span class="line"><span>bind_port = 7000</span></span>
<span class="line"><span>token = xxxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ol start="3"><li>将他们复制到你要映射的服务器和被映射的服务器、电脑。执行相应的指令</li></ol><ul><li>Windows 用户，需要在 <code>cmd</code> 终端中执行命令</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./frps.exe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./frps.ini</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 服务端执行指令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./frpc.exe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./frpc.ini</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 客户端执行指令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="centos-ubuntu-debian" tabindex="-1"><a class="header-anchor" href="#centos-ubuntu-debian"><span>Centos Ubuntu Debian</span></a></h3><ol><li>下载我们的应用包<a href="https://github.com/fatedier/frp/releases" target="_blank" rel="noopener noreferrer">点击跳转</a></li></ol><ul><li>比如我会直接复制他的链接使用wget下载并解压</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Centos</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Ubuntu Debian</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装所需工具</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/fatedier/frp/releases/download/v0.34.1/frp_0.34.1_linux_amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载你所需的版本，链接请自行获取</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>解压后我们会得到他的程序文件，首先我们需要修改他的配置</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzvf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frp_0.34.1_linux_amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 解压文件 [文件名请注意，是你上面下载的链接]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frp_0.34.1_linux_amd64</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 注意是你上面解压出来的文件目录</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>解压后我们会得到他的程序文件，首先我们需要修改他的配置<br><img src="`+p+`" alt="" loading="lazy"><br> 比如我要映射JAVA版我的世界服务器(当然额外设置你可以看我上面的说明)<br> 建议使用 <code>nano</code> 来进行编辑</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nano</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Centos系统使用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nano</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Ubuntu</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nano</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Debian貌似自带？</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nano</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frpc.ini</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nano</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> frps.ini</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 直接就可以编辑，Ctrl+X 退出，它会提示是否需要保存，按 Y 即可，再按回车即可完成</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">frpc.ini 客户端配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[common]</span></span>
<span class="line"><span>server_addr = xxxx</span></span>
<span class="line"><span>server_port = 7000</span></span>
<span class="line"><span>token = xxxxx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[我的世界服务器]</span></span>
<span class="line"><span>type = tcp</span></span>
<span class="line"><span>local_ip = 127.0.0.1</span></span>
<span class="line"><span>local_port = 25565</span></span>
<span class="line"><span>remote_port = 25565</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">frps.ini 服务端配置</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[common]</span></span>
<span class="line"><span>bind_port = 7000</span></span>
<span class="line"><span>token = xxxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><ol start="3"><li>将他们复制到你要映射的服务器和被映射的服务器、电脑。执行相应的指令</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./frps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./frps.ini</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 服务端执行指令</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./frpc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./frpc.ini</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 客户端执行指令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39)]))}const u=n(d,[["render",c]]),m=JSON.parse('{"path":"/views/deploy-website/frp.html","title":"Frp搭建与使用","lang":"zh-CN","frontmatter":{"title":"Frp搭建与使用","date":"2020-10-28T00:00:00.000Z","cover":"https://api.vlssu.com/img/?201028","tags":["Linux","Centos","Ubuntu","Windows","Frp"],"categories":["教程"],"description":"前期需要软件 远程SSH控制台软件（本教程使用 Remote Terminal 此为win10商店软件）[点我下载(此软件为Xshell)] 支持Sftp的FTP软件（本教程使用 FileZilla）[点我下载] 公网IP必须要有 Windows、Centos或Ubuntu等主机一台 frp项目地址 ==> [点击跳转] 项目后缀含义 使用方法 版本我...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frp搭建与使用\\",\\"image\\":[\\"https://api.vlssu.com/img/?201028\\"],\\"datePublished\\":\\"2020-10-28T00:00:00.000Z\\",\\"dateModified\\":\\"2025-05-10T13:49:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"飒爽师叔\\",\\"url\\":\\"https://blog.vlssu.com\\"}]}"],["meta",{"property":"og:url","content":"https://blog.vlssu.com/views/deploy-website/frp.html"}],["meta",{"property":"og:site_name","content":"师叔の小窝"}],["meta",{"property":"og:title","content":"Frp搭建与使用"}],["meta",{"property":"og:description","content":"前期需要软件 远程SSH控制台软件（本教程使用 Remote Terminal 此为win10商店软件）[点我下载(此软件为Xshell)] 支持Sftp的FTP软件（本教程使用 FileZilla）[点我下载] 公网IP必须要有 Windows、Centos或Ubuntu等主机一台 frp项目地址 ==> [点击跳转] 项目后缀含义 使用方法 版本我..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://api.vlssu.com/img/?201028"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-05-10T13:49:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://api.vlssu.com/img/?201028"}],["meta",{"name":"twitter:image:alt","content":"Frp搭建与使用"}],["meta",{"property":"article:tag","content":"Frp"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:tag","content":"Centos"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2020-10-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-05-10T13:49:10.000Z"}]]},"git":{"createdTime":1746884950000,"updatedTime":1746884950000,"contributors":[{"name":"vlssu","username":"vlssu","email":"43847794+vlssu@users.noreply.github.com","commits":1,"url":"https://github.com/vlssu"}]},"readingTime":{"minutes":11.88,"words":3565},"filePathRelative":"views/deploy-website/frp.md","excerpt":"<h2>前期需要软件</h2>\\n<ol>\\n<li>远程SSH控制台软件（本教程使用 Remote Terminal 此为win10商店软件）<a href=\\"https://www.lanzoui.com/i88wyvi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">[点我下载(此软件为Xshell)]</a></li>\\n<li>支持Sftp的FTP软件（本教程使用 FileZilla）<a href=\\"https://www.lanzoui.com/i88wyqd\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">[点我下载]</a></li>\\n<li>公网IP必须要有</li>\\n<li>Windows、Centos或Ubuntu等主机一台</li>\\n</ol>","autoDesc":true}');export{u as comp,m as data};
