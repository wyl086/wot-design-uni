import{a1 as l,X as s,e as h,O as i,f as a,Z as t,L as n,ar as p,d as k}from"./chunks/framework.D29C4KV_.js";const q=JSON.parse('{"title":"Circle 环形进度条 0.1.19","description":"","frontmatter":{},"headers":[],"relativePath":"component/circle.md","filePath":"component/circle.md","lastUpdated":1721465874000}'),r={name:"component/circle.md"},o={id:"circle-环形进度条-0-1-19",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#circle-环形进度条-0-1-19","aria-label":'Permalink to "Circle 环形进度条 <el-tag text style="vertical-align: middle;margin-left:8px;" effect="plain">0.1.19</el-tag>"'},"​",-1),E=p('<p>圆环形的进度条组件，支持进度渐变动画。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>通过<code>v-model</code>表示进度条的当前进度，<code>text</code>属性控制进度条中间文字内容。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;current&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;`进度：${current}%`&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="宽度控制" tabindex="-1">宽度控制 <a class="header-anchor" href="#宽度控制" aria-label="Permalink to &quot;宽度控制&quot;">​</a></h2><p>通过<code>strokeWidth</code>属性来控制进度条宽度，默认<code>10px</code>。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;current&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :strokeWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;15&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="颜色定制" tabindex="-1">颜色定制 <a class="header-anchor" href="#颜色定制" aria-label="Permalink to &quot;颜色定制&quot;">​</a></h2><p>通过<code>color</code>属性控制进度条颜色，默认<code>#1C64FD</code>，通过<code>layerColor</code>属性控制进度条轨道颜色，默认<code>#EBEEF5</code>。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;current&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#1C64FD&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> layer-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#EBEEF5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="渐变色" tabindex="-1">渐变色 <a class="header-anchor" href="#渐变色" aria-label="Permalink to &quot;渐变色&quot;">​</a></h2><p><code>color</code>属性支持传入对象格式来定义渐变色。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;current&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gradientColor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gradientColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;0%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ffd01e&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;100%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ee0a24&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="进度条展开方向" tabindex="-1">进度条展开方向 <a class="header-anchor" href="#进度条展开方向" aria-label="Permalink to &quot;进度条展开方向&quot;">​</a></h2><p>通过<code>clockwise</code>属性控制进度条展开方向，<code>clockwise</code>为<code>false</code>时，进度会从逆时针方向开始。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;current&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :clockwise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="大小定制" tabindex="-1">大小定制 <a class="header-anchor" href="#大小定制" aria-label="Permalink to &quot;大小定制&quot;">​</a></h2><p>通过<code>size</code>属性控制进度条圆环直径，默认<code>100px</code>。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;current&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">wd-circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td><code>v-model</code> |<code>modelValue</code></td><td>当前进度</td><td>number</td><td>-</td><td><code>0</code></td><td>0.1.19</td></tr><tr><td><code>customClass</code></td><td>自定义class</td><td>string</td><td>-</td><td>-</td><td>0.1.19</td></tr><tr><td><code>customStyle</code></td><td>自定义style</td><td>string</td><td>-</td><td>-</td><td>0.1.19</td></tr><tr><td><code>size</code></td><td>圆环直径，默认单位为 px</td><td>number</td><td>-</td><td><code>100</code></td><td>0.1.19</td></tr><tr><td><code>color</code></td><td>进度条颜色</td><td>string | Record&lt;string, string&gt;</td><td>-</td><td><code>#4d80f0</code></td><td>0.1.19</td></tr><tr><td><code>layerColor</code></td><td>轨道颜色</td><td>string</td><td>-</td><td><code>#EBEEF5</code></td><td>0.1.19</td></tr><tr><td><code>fill</code></td><td>填充颜色</td><td>string</td><td>-</td><td><code>#ffffff</code></td><td>0.1.19</td></tr><tr><td><code>speed</code></td><td>动画速度（单位为 rate/s）</td><td>number</td><td>-</td><td><code>50</code></td><td>0.1.19</td></tr><tr><td><code>text</code></td><td>文字</td><td>string</td><td>-</td><td>-</td><td>0.1.19</td></tr><tr><td><code>strokeWidth</code></td><td>进度条宽度，单位px</td><td>number</td><td>-</td><td><code>10</code></td><td>0.1.19</td></tr><tr><td><code>strokeLinecap</code></td><td>进度条端点的形状</td><td>string</td><td><code>butt</code> | <code>round</code> | <code>square</code></td><td><code>round</code></td><td>0.1.19</td></tr><tr><td><code>clockwise</code></td><td>是否顺时针增加</td><td>boolean</td><td>-</td><td><code>true</code></td><td>0.1.19</td></tr></tbody></table><h2 id="circle-外部样式类" tabindex="-1">Circle 外部样式类 <a class="header-anchor" href="#circle-外部样式类" aria-label="Permalink to &quot;Circle 外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr></tbody></table>',25);function g(y,u,F,m,C,b){const e=s("frame"),d=s("el-tag");return k(),h("div",null,[i(e),a("h1",o,[t("Circle 环形进度条 "),i(d,{text:"",style:{"vertical-align":"middle","margin-left":"8px"},effect:"plain"},{default:n(()=>[t("0.1.19")]),_:1}),t(),c]),E])}const B=l(r,[["render",g]]);export{q as __pageData,B as default};
