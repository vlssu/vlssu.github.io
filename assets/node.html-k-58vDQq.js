import{_ as s,r,o as d,c as a,b as t,d as e,e as o,f as i}from"./app-PSzZj354.js";const l={},c=t("p",null,[e("操作之前，请将电脑中的 "),t("strong",null,"Node"),e(" 卸载干净！！！")],-1),m={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"nvm-setup.exe",-1),p=i(`<p>然后直接无脑下一步即可</p><table><thead><tr><th><strong>命令</strong></th><th><strong>功能</strong></th></tr></thead><tbody><tr><td>nvm -v</td><td>查看nvm版本，判断是否安装成功</td></tr><tr><td>nvm ls available</td><td>获取可获取的Node版本</td></tr><tr><td>nvm install 20.10.0</td><td>安装指定版本的Node</td></tr><tr><td>nvm use 20.10.0</td><td>使用指定版本Node</td></tr><tr><td>nvm uninstall 18.19.0</td><td>卸载指定版本Node</td></tr></tbody></table><h3 id="更换国内镜像源" tabindex="-1"><a class="header-anchor" href="#更换国内镜像源" aria-hidden="true">#</a> 更换国内镜像源</h3><p>如果你想切换为国内镜像源，首先得找到nvm的文件位置，如果你不知道他在哪可以通过以下步骤找到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">which</span> nvm
/c/Users/vlssu/AppData/Roaming/nvm/nvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入安装目录，我这里为 <code>/c/Users/vlssu/AppData/Roaming/nvm</code> 对应win资源管理器中的 <code>C:\\Users\\vlssu\\AppData\\Roaming\\nvm</code> ，修改目录下的 <code>setting.txt</code> 文件，有些文件夹可能无法从用户界面直接访问，你可能需要开启资源管理器中的 ⌈显示隐藏的文件、文件夹和驱动器⌋，然后就可以在文件后追加以下参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function u(h,_){const n=r("ExternalLinkIcon");return d(),a("div",null,[c,t("p",null,[e("前往 "),t("a",m,[e("Github：nvm-windows"),o(n)]),e(" 下载最新版本的 "),v]),p])}const g=s(l,[["render",u],["__file","node.html.vue"]]);export{g as default};
