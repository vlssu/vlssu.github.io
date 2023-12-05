import{_ as e,o as n,c as i,f as l}from"./app-n3PUeXRq.js";const s={},d=l(`<p>我在编译插件时一直在下载<code>fastutil-xxx.jar</code></p><p>原因是需要翻墙(可惜我试过了，没用)。剩下的方法就是改镜像源了，在主要编译文件，如<code>build.gradle</code>，找到主代码组里头将镜像源改了。</p><p>我一改完就好了，不仅不用挂梯子，甚至速度贼快</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>buildscript {
    
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[d];function a(r,v){return n(),i("div",null,c)}const u=e(s,[["render",a],["__file","210209.html.vue"]]);export{u as default};
