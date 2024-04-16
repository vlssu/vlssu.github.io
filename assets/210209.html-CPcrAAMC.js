import{_ as e,o as t,c as i,e as n}from"./app-Cgmq3fvS.js";const a={},l=n(`<p>我在编译插件时一直在下载<code>fastutil-xxx.jar</code></p><p>原因是需要翻墙(可惜我试过了，没用)。剩下的方法就是改镜像源了，在主要编译文件，如<code>build.gradle</code>，找到主代码组里头将镜像源改了。</p><p>我一改完就好了，不仅不用挂梯子，甚至速度贼快</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>buildscript {
    
    repositories {
        maven{ url = &quot;http://maven.aliyun.com/nexus/content/groups/public/&quot; }
        google()
        jcenter()
    }
    dependencies {
        classpath &#39;com.android.tools.build:gradle:3.1.2&#39;
        

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        maven{ url = &quot;http://maven.aliyun.com/nexus/content/groups/public/&quot; }
        google()
        jcenter()
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[l];function s(o,r){return t(),i("div",null,d)}const u=e(a,[["render",s],["__file","210209.html.vue"]]),m=JSON.parse('{"path":"/blogs/notes/210209.html","title":"android stadio Gradle 编译报错","lang":"zh-CN","frontmatter":{"title":"android stadio Gradle 编译报错","date":"2021-02-09T00:00:00.000Z","tags":["fastutil"],"categories":["笔记"],"description":"我在编译插件时一直在下载fastutil-xxx.jar 原因是需要翻墙(可惜我试过了，没用)。剩下的方法就是改镜像源了，在主要编译文件，如build.gradle，找到主代码组里头将镜像源改了。 我一改完就好了，不仅不用挂梯子，甚至速度贼快","head":[["meta",{"property":"og:url","content":"https://vlssu.github.io/blogs/notes/210209.html"}],["meta",{"property":"og:site_name","content":"师叔の小窝"}],["meta",{"property":"og:title","content":"android stadio Gradle 编译报错"}],["meta",{"property":"og:description","content":"我在编译插件时一直在下载fastutil-xxx.jar 原因是需要翻墙(可惜我试过了，没用)。剩下的方法就是改镜像源了，在主要编译文件，如build.gradle，找到主代码组里头将镜像源改了。 我一改完就好了，不仅不用挂梯子，甚至速度贼快"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-02T17:17:23.000Z"}],["meta",{"property":"article:tag","content":"fastutil"}],["meta",{"property":"article:published_time","content":"2021-02-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-02T17:17:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"android stadio Gradle 编译报错\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-09T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-02T17:17:23.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1664026496000,"updatedTime":1696267043000,"contributors":[{"name":"飒爽师叔","email":"43847794+vlssu@users.noreply.github.com","commits":2}]},"filePathRelative":"blogs/notes/210209.md","autoDesc":true}');export{u as comp,m as data};
