import{_ as e,o as n,c as i,f as l}from"./app.53426912.js";const s={},d=l(`<p>\u6211\u5728\u7F16\u8BD1\u63D2\u4EF6\u65F6\u4E00\u76F4\u5728\u4E0B\u8F7D<code>fastutil-xxx.jar</code></p><p>\u539F\u56E0\u662F\u9700\u8981\u7FFB\u5899(\u53EF\u60DC\u6211\u8BD5\u8FC7\u4E86\uFF0C\u6CA1\u7528)\u3002\u5269\u4E0B\u7684\u65B9\u6CD5\u5C31\u662F\u6539\u955C\u50CF\u6E90\u4E86\uFF0C\u5728\u4E3B\u8981\u7F16\u8BD1\u6587\u4EF6\uFF0C\u5982<code>build.gradle</code>\uFF0C\u627E\u5230\u4E3B\u4EE3\u7801\u7EC4\u91CC\u5934\u5C06\u955C\u50CF\u6E90\u6539\u4E86\u3002</p><p>\u6211\u4E00\u6539\u5B8C\u5C31\u597D\u4E86\uFF0C\u4E0D\u4EC5\u4E0D\u7528\u6302\u68AF\u5B50\uFF0C\u751A\u81F3\u901F\u5EA6\u8D3C\u5FEB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>buildscript {
    
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[d];function a(r,v){return n(),i("div",null,c)}const t=e(s,[["render",a],["__file","210209.html.vue"]]);export{t as default};
