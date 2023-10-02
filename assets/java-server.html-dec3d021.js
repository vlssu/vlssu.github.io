import{_ as i,r,o as c,c as d,b as e,d as a,e as s,w as p,f as t}from"./app-5318ea07.js";const u="/assets/java-server_1-db450ab7.png",l="/assets/java-server_2-b87cf313.png",v="/assets/java-server_3-1bdd6abd.png",_="/assets/java-server_4-dda7a766.png",g="/assets/java-server_5-e8862bc8.png",m="/assets/java-server_6-74622aeb.png",h="/assets/java-server_7-c72afba9.png",b="/assets/java-server_8-b3bf7e33.png",f="/assets/java-server_9-a7e0f1b5.png",k="/assets/java-server_10-dd2a3b27.png",x="/assets/java-server_11-cb48176e.png",j="/assets/java-server_12-4659b2c8.png",y="/assets/java-server_13-549e6b2c.png",w="/assets/java-server_14-de2aeefd.png",M="/assets/java-server_15-f4dd4697.png",E="/assets/java-server_16-6497ca0d.png",D="/assets/java-server_17-f42cc980.png",O={},F=e("h2",{id:"本教程所需条件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本教程所需条件","aria-hidden":"true"},"#"),a(" 本教程所需条件")],-1),A=e("h3",{id:"下载对应的服务端核心",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载对应的服务端核心","aria-hidden":"true"},"#"),a(" 下载对应的服务端核心")],-1),B={href:"https://getbukkit.org/download/spigot",target:"_blank",rel:"noopener noreferrer"},C={href:"https://papermc.io/downloads",target:"_blank",rel:"noopener noreferrer"},S={href:"https://files.minecraftforge.net",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"java8下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java8下载","aria-hidden":"true"},"#"),a(" JAVA8下载")],-1),V=e("strong",null,"[我的世界MCSM面板搭建]",-1),L={href:"https://en.vessoft.com/software/windows/download/java",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"配置服务器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置服务器","aria-hidden":"true"},"#"),a(" 配置服务器")],-1),N=e("h3",{id:"插件端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件端","aria-hidden":"true"},"#"),a(" 插件端")],-1),z=e("ul",null,[e("li",null,[a("本教程使用"),e("strong",null,"Spigot"),a("核心，其他核心原理基本一样")])],-1),W=e("ol",null,[e("li",null,"下载服务端核心")],-1),I={href:"https://getbukkit.org/download/spigot",target:"_blank",rel:"noopener noreferrer"},R={href:"https://yivesmirror.com/downloads/paper",target:"_blank",rel:"noopener noreferrer"},T=t(`<ol start="2"><li>新建「记事本」，在记事本中输入以下内容并改名为<code>.bat</code>后缀后启动。</li></ol><ul><li>注意<code>Minecraft_Server.jar</code>换成你下载下来的核心文件名。</li><li>第一次可能会有点慢，他需要加载文件等</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>java -Xmx1024M -jar Minecraft_Server.jar nogui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当他自动关闭窗口文件夹呈现以下<br><img src="`+u+'" alt="文件目录与文本"></p><ol start="3"><li>编辑「eula.txt」文件，将<code>eula=false</code>设置为<code>eula=true</code></li></ol><p><img src="'+l+'" alt="文本视图"></p><ol start="4"><li>在此双击运行<code>.bat</code>文件，但你看到下面的视图，那么就代表你成功了！</li></ol><p><img src="'+v+`" alt="Done (23.356s)! For help, type &quot;help&quot;"></p><ol start="5"><li>在<code>server.properties</code>文件中你可能有些需要改的地方(改完记得重启)</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">gamemode</span><span class="token punctuation">=</span><span class="token value attr-value">survival  //游戏模式 0=生存 1=创造 2=冒险 3=旁观</span>
<span class="token key attr-name">difficulty</span><span class="token punctuation">=</span><span class="token value attr-value">easy  //难度0=和平 1=简单 2=普通 3=困难</span>
<span class="token key attr-name">max-players</span><span class="token punctuation">=</span><span class="token value attr-value">20  //服务器最大玩家数限制</span>
<span class="token key attr-name">server-port</span><span class="token punctuation">=</span><span class="token value attr-value">25565  //服务器端口</span>
<span class="token key attr-name">online-mode</span><span class="token punctuation">=</span><span class="token value attr-value">true  //在线（正版）验证[默认启用]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="给服务器加插件" tabindex="-1"><a class="header-anchor" href="#给服务器加插件" aria-hidden="true">#</a> 给服务器加插件</h4><ol><li>去插件网站下载你需要的插件。</li></ol>`,12),X={href:"https://dev.bukkit.org",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.spigotmc.org",target:"_blank",rel:"noopener noreferrer"},H=e("ol",{start:"2"},[e("li",null,[a("下载你需要的插件放入"),e("code",null,"plugins"),a("，就可以了，对于怎么配置插件，在"),e("code",null,"plugins"),a("文件夹中，会有与插件相同名字的文件夹，那里面的"),e("code",null,"config.yml"),a("文件就是插件的配置文件，这里不过多讲述了，毕竟这个帮不了什么。")])],-1),K=e("h3",{id:"mod端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mod端","aria-hidden":"true"},"#"),a(" MOD端")],-1),P=e("ol",null,[e("li",null,"首先去Forge官网，下载核心，这里以1.12.2版本作为示范。")],-1),Q={href:"https://files.minecraftforge.net",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,[e("img",{src:_,alt:"image.png"}),e("img",{src:g,alt:"image.png"})],-1),Y={start:"2"},Z={href:"https://minecraft-zh.gamepedia.com/Java%E7%89%88%E7%89%88%E6%9C%AC%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},$=t('<p><img src="'+m+'" alt="image.png"><img src="'+h+`" alt="image.png"></p><ol start="3"><li>将下载好的forge和服务端放在同一个目录下，修改服务端的文件名.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>minecraft_server.xxx.jar   //xxx为版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>并新建「记事本」，在记事本中输入以下内容并改名为<code>.bat</code>后缀后启动。</li><li><strong>安装过程中会下载一些依赖库，由于某些原因可能会下载失败，多安装几次就行</strong></li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>java -jar forge安装包文件名.jar --install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+'" alt="image.png"><img src="'+f+'" alt="image.png"></p><p>但他可能直接关闭窗口，查看<code>forge-xxx-installer.jar.log</code>文件日志的最后一行是否是<code>The server installed successfully, you should now be able to run the file forge</code>,是的话，就证明你安装成功了。</p>',7),ee={class:"custom-container tip"},ae=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),se=e("p",{class:"custom-container-title"},"来自博主的热心帮助",-1),ne=e("code",null,"libraries",-1),te={href:"https://vlssu.lanzoui.com/b0f1ate3i",target:"_blank",rel:"noopener noreferrer"},le=e("li",null,"因尝试无法全版本通用，最好挂梯子下（并结合日志将未下载成功的单独下）",-1),re=t(`<ol start="4"><li>编辑「记事本」，在记事本中输入以下内容后启动。</li></ol><ul><li>你可能注意到多出了一个核心将下面的<code>forge-xxx.jar</code>替换成多出来的那个核心文件名。</li><li>注意，一开始下的<strong>installer</strong>文件没有用了，多来的<code>forge-xxx.jar</code>是Forge服务器真正的核心</li><li>第一次可能会有点慢，他需要加载文件等</li></ul><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>java -Xmx3G -jar forge-xxx.jar nogui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当他自动关闭窗口文件夹呈现以下<br><img src="`+k+'" alt="文件目录与文本"></p><ol start="5"><li>编辑「eula.txt」文件，将<code>eula=false</code>设置为<code>eula=true</code></li></ol><p><img src="'+l+'" alt="文本视图"></p><ol start="6"><li>在此双击运行<code>.bat</code>文件，但你看到下面的视图，那么就代表你成功了！</li></ol><p><img src="'+x+`" alt="Done (23.356s)! For help, type &quot;help&quot;"></p><ol start="7"><li>在<code>server.properties</code>文件中你可能有些需要改的地方(改完记得重启)</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">gamemode</span><span class="token punctuation">=</span><span class="token value attr-value">survival  //游戏模式 0=生存 1=创造 2=冒险 3=旁观</span>
<span class="token key attr-name">difficulty</span><span class="token punctuation">=</span><span class="token value attr-value">easy  //难度0=和平 1=简单 2=普通 3=困难</span>
<span class="token key attr-name">max-players</span><span class="token punctuation">=</span><span class="token value attr-value">20  //服务器最大玩家数限制</span>
<span class="token key attr-name">server-port</span><span class="token punctuation">=</span><span class="token value attr-value">25565  //服务器端口</span>
<span class="token key attr-name">online-mode</span><span class="token punctuation">=</span><span class="token value attr-value">true  //在线（正版）验证[默认启用]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="给服务器加mod" tabindex="-1"><a class="header-anchor" href="#给服务器加mod" aria-hidden="true">#</a> 给服务器加MOD</h4><ol><li>去MOD网站下载你需要的MOD。</li></ol>`,12),oe={href:"https://www.curseforge.com/minecraft/modpacks",target:"_blank",rel:"noopener noreferrer"},ie=e("ol",{start:"2"},[e("li",null,[a("下载你需要的插件放入"),e("code",null,"mods"),a("，就可以了，对于怎么配置"),e("strong",null,"MOD"),a("呢，在"),e("code",null,"config"),a("文件夹中，会有与MOD相同名字的文件或文件夹，当然你也可以不用配置默认即可，这里不过多讲述了，毕竟这个帮不了什么。")])],-1),ce=e("h3",{id:"fabric端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fabric端","aria-hidden":"true"},"#"),a(" Fabric端")],-1),de=e("ol",null,[e("li",null,"首先去Fabric官网，下载核心，这里以1.15.2版本作为示范。")],-1),pe={href:"https://fabricmc.net/use/",target:"_blank",rel:"noopener noreferrer"},ue=e("p",null,[e("img",{src:j,alt:"image.png"})],-1),ve={start:"2"},_e={href:"https://minecraft-zh.gamepedia.com/Java%E7%89%88%E7%89%88%E6%9C%AC%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"},ge=t('<p><img src="'+y+'" alt="image.png"><img src="'+w+'" alt="image.png"></p><ol start="3"><li>将下载好的Fabric和服务端放在同一个目录下，<strong>服务端的文件名不可修改</strong>.</li></ol><ul><li>双击<strong>fabric-installer-xxx.jar</strong> //xxx为版本号</li><li>选择服务端并点击「安装」</li></ul><p><img src="'+M+'" alt="image.png"></p><ul><li>他会下载所需依赖，安装完成后他会弹出窗口 <ul><li>第一个是下载纯净服务端(由于网络问题不可能会下载成功，这就是为什么之前让你们提前下载服务端)</li><li>第二个是生成启动的bat或sh文件(这就舍去你的麻烦事了)</li></ul></li></ul><p><img src="'+E+'" alt="image.png"></p><ol start="4"><li><p>启动服务器，对于说一句他启动的是<code>fabric-server-launch.jar</code>，面板用户启动这个这个核心。</p></li><li><p>编辑「eula.txt」文件，将<code>eula=false</code>设置为<code>eula=true</code></p></li></ol><p><img src="'+l+'" alt="文本视图"></p><ol start="6"><li>在此双击运行<code>.bat</code>文件，但你看到下面的视图，那么就代表你成功了！</li></ol><p><img src="'+D+`" alt="Done (xxx)! For help, type &quot;help&quot;"></p><ol start="7"><li>在<code>server.properties</code>文件中你可能有些需要改的地方(改完记得重启)</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">gamemode</span><span class="token punctuation">=</span><span class="token value attr-value">survival  //游戏模式 0=生存 1=创造 2=冒险 3=旁观</span>
<span class="token key attr-name">difficulty</span><span class="token punctuation">=</span><span class="token value attr-value">easy  //难度0=和平 1=简单 2=普通 3=困难</span>
<span class="token key attr-name">max-players</span><span class="token punctuation">=</span><span class="token value attr-value">20  //服务器最大玩家数限制</span>
<span class="token key attr-name">server-port</span><span class="token punctuation">=</span><span class="token value attr-value">25565  //服务器端口</span>
<span class="token key attr-name">online-mode</span><span class="token punctuation">=</span><span class="token value attr-value">true  //在线（正版）验证[默认启用]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="给服务器加mod-1" tabindex="-1"><a class="header-anchor" href="#给服务器加mod-1" aria-hidden="true">#</a> 给服务器加MOD</h4><ol><li>去MOD网站下载你需要的MOD。</li></ol>`,14),me={href:"https://www.curseforge.com/minecraft/modpacks",target:"_blank",rel:"noopener noreferrer"},he=e("ol",{start:"2"},[e("li",null,[a("下载你需要的插件放入"),e("code",null,"mods"),a("，就可以了，对于怎么配置"),e("strong",null,"MOD"),a("呢，在"),e("code",null,"config"),a("文件夹中，会有与MOD相同名字的文件或文件夹，当然你也可以不用配置默认即可，这里不过多讲述了，毕竟这个帮不了什么。")])],-1);function be(fe,ke){const n=r("ExternalLinkIcon"),o=r("RouterLink");return c(),d("div",null,[F,A,e("ul",null,[e("li",null,[e("a",B,[a("Spigot"),s(n)]),a(" [可以装插件]")]),e("li",null,[e("a",C,[a("paper"),s(n)]),a(" [可以装插件]")]),e("li",null,[e("a",S,[a("Forge"),s(n)]),a(" [可以装MOD]")])]),q,e("ul",null,[e("li",null,[a("Linux系统可以参考我的上期教程"),s(o,{to:"/blogs/share/linux/node.html#%E5%AE%89%E8%A3%85java8"},{default:p(()=>[V]),_:1})]),e("li",null,[a("Win系统下载最新的JAVA8地址 "),e("a",L,[a("[点我下载]"),s(n)])])]),J,N,z,W,e("ul",null,[e("li",null,[e("a",I,[a("Spigot"),s(n)])]),e("li",null,[e("a",R,[a("paper"),s(n)])])]),T,e("ul",null,[e("li",null,[e("a",X,[a("bukkit"),s(n)])]),e("li",null,[e("a",G,[a("spigotmc"),s(n)])])]),H,K,P,e("ul",null,[e("li",null,[e("a",Q,[a("Forge"),s(n)])])]),U,e("ol",Y,[e("li",null,[a("下载官方核心去"),e("a",Z,[a("我的世界Wiki百科"),s(n)]),a("中选择你的想要的版本点击他后右侧下载服务端")])]),$,e("div",ee,[ae,se,e("ul",null,[e("li",null,[e("strong",null,[a("在这里"),ne,a("依赖库可以下载我下载好的"),e("a",te,[a("[蓝奏云下载地址]"),s(n)]),a("（可省去大把时间）【注意这个只支持20年4月12日左右的依赖】")])]),le])]),re,e("ul",null,[e("li",null,[e("a",oe,[a("curseforge"),s(n)])])]),ie,ce,de,e("ul",null,[e("li",null,[e("a",pe,[a("Fabric"),s(n)])])]),ue,e("ol",ve,[e("li",null,[a("下载官方核心去"),e("a",_e,[a("我的世界Wiki百科"),s(n)]),a("中选择你的想要的版本点击他后右侧下载服务端")])]),ge,e("ul",null,[e("li",null,[e("a",me,[a("curseforge"),s(n)])])]),he])}const je=i(O,[["render",be],["__file","java-server.html.vue"]]);export{je as default};
