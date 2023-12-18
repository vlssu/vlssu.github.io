import{_ as e,o as n,c as s,f as a}from"./app-hvWlO71C.js";const i={},d=a(`<h2 id="临时生效" tabindex="-1"><a class="header-anchor" href="#临时生效" aria-hidden="true">#</a> 临时生效</h2><p>命令临时生效：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span> <span class="token punctuation">(</span>临时生效可以直接用setenforce <span class="token number">0</span> <span class="token punctuation">)</span>
            <span class="token number">1</span> 启用
            <span class="token number">0</span> 告警，不启用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="永久生效" tabindex="-1"><a class="header-anchor" href="#永久生效" aria-hidden="true">#</a> 永久生效</h2><h3 id="查看selinux状态" tabindex="-1"><a class="header-anchor" href="#查看selinux状态" aria-hidden="true">#</a> 查看SElinux状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>getenforce

//Enforcing - 开启模式
//Permissive - 临时关闭模式
//Disabled - 永久关闭模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="永久关闭" tabindex="-1"><a class="header-anchor" href="#永久关闭" aria-hidden="true">#</a> 永久关闭</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sysconfig/selinux
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>enforcing 改为 <span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
:wq    //保存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>更改好后重启服务器</strong></p>`,9),l=[d];function r(c,t){return n(),s("div",null,l)}const u=e(i,[["render",r],["__file","selinux.html.vue"]]);export{u as default};
