import{_ as s,o as n,c as e,e as a}from"./app-54_SznpJ.js";const i={},l=a(`<p>我在编译插件时一直在下载<code>fastutil-xxx.jar</code></p><p>原因是需要翻墙(可惜我试过了，没用)。剩下的方法就是改镜像源了，在主要编译文件，如<code>build.gradle</code>，找到主代码组里头将镜像源改了。</p><p>我一改完就好了，不仅不用挂梯子，甚至速度贼快</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">buildscript {</span>
<span class="line">    </span>
<span class="line">    repositories {</span>
<span class="line">        maven{ url = &quot;http://maven.aliyun.com/nexus/content/groups/public/&quot; }</span>
<span class="line">        google()</span>
<span class="line">        jcenter()</span>
<span class="line">    }</span>
<span class="line">    dependencies {</span>
<span class="line">        classpath &#39;com.android.tools.build:gradle:3.1.2&#39;</span>
<span class="line">        </span>
<span class="line"></span>
<span class="line">        // NOTE: Do not place your application dependencies here; they belong</span>
<span class="line">        // in the individual module build.gradle files</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">allprojects {</span>
<span class="line">    repositories {</span>
<span class="line">        maven{ url = &quot;http://maven.aliyun.com/nexus/content/groups/public/&quot; }</span>
<span class="line">        google()</span>
<span class="line">        jcenter()</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[l];function c(t,p){return n(),e("div",null,d)}const o=s(i,[["render",c],["__file","210209.html.vue"]]),u=JSON.parse('{"path":"/blogs/notes/210209.html","title":"android stadio Gradle 编译报错","lang":"zh-CN","frontmatter":{"title":"android stadio Gradle 编译报错","date":"2021-02-09T00:00:00.000Z","tags":["fastutil"],"categories":["笔记"]},"headers":[],"git":{"createdTime":1664026496000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/notes/210209.md"}');export{o as comp,u as data};
