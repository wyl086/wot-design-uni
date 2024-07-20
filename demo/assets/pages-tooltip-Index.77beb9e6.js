import{g as t,i as e,l as o,m as l,c as n,j as a,b as s,d as u,e as c,a as d}from"./page-wraper.87c317ef.js";import{d as i,N as r,r as f,v as p,m as _,Q as m,Y as g,h,j as w,o as C,c as b,w as v,a as y,b as k,t as S,p as j,u as x,n as V,y as A,x as Q,R as $,J as I,i as O}from"./index-3ce4de40.js";import{_ as F}from"./wd-button.93e2fc0b.js";import{u as P}from"./usePopover.cc19e85f.js";import{p as T,r as q,q as z,c as G,u as H}from"./clickoutside.502c80c0.js";import{_ as J}from"./demo-block.0ea55f3c.js";const N=s(i({name:"wd-tooltip",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...t,customArrow:e(""),customPop:e(""),visibleArrow:o(!0),content:{type:[String,Array]},placement:e("bottom"),offset:l(0),useContentSlot:o(!1),disabled:o(!1),showClose:o(!1),modelValue:o(!1)},emits:["update:modelValue","menuclick","change","open","close"],setup(t,{expose:e,emit:o}){const l=t,s=P(),u=r(z,null),c="tooltip",{proxy:d}=I(),i=f(!1);function F(){l.disabled||H(!i.value)}function H(t){i.value=t,o("update:modelValue",t)}return p((()=>l.content),(t=>{null==t&&console.error("[wot-design] warning(wd-tooltip): content can't be null or undefined")})),p((()=>l.placement),(()=>{s.init(l.placement,l.visibleArrow,c)})),p((()=>l.modelValue),(t=>{i.value=t})),p((()=>i.value),(t=>{t&&(s.control(l.placement,l.offset),u&&u.closeOther?u.closeOther(d):G(d)),s.showStyle.value=t?"display: inline-block;":"display: none;",o("change",{show:t}),o(""+(t?"open":"close"))})),_((()=>{s.init(l.placement,l.visibleArrow,c)})),m((()=>{u&&u.pushToQueue?u.pushToQueue(d):T(d),s.showStyle.value=l.modelValue?"opacity: 1;":"opacity: 0;"})),g((()=>{u&&u.removeFromQueue?u.removeFromQueue(d):q(d)})),e({open:function(){H(!0)},close:function(){H(!1)}}),(t,e)=>{const o=O,l=h(w("wd-icon"),n),u=h(w("wd-transition"),a);return C(),b(o,{class:V(`wd-tooltip ${t.customClass}`),style:A(t.customStyle),id:"tooltip",onClick:$(x(s).noop,["stop"])},{default:v((()=>[y(o,{class:"wd-tooltip__pos wd-tooltip__hidden",id:"pos"},{default:v((()=>[y(o,{class:"wd-tooltip__container custom-pop"},{default:v((()=>[t.useContentSlot?j("",!0):(C(),b(o,{key:0,class:"wd-tooltip__inner"},{default:v((()=>[k(S(t.content),1)])),_:1}))])),_:1})])),_:1}),y(u,{"custom-class":"wd-tooltip__pos","custom-style":x(s).popStyle.value,show:i.value,name:"fade",duration:200},{default:v((()=>[y(o,{class:"wd-tooltip__container custom-pop"},{default:v((()=>[t.visibleArrow?(C(),b(o,{key:0,class:V(`wd-tooltip__arrow ${x(s).arrowClass.value} ${t.customArrow}`),style:A(x(s).arrowStyle.value)},null,8,["class","style"])):j("",!0),t.useContentSlot?Q(t.$slots,"content",{key:2},void 0,!0):(C(),b(o,{key:1,class:"wd-tooltip__inner"},{default:v((()=>[k(S(t.content),1)])),_:1}))])),_:3}),t.showClose?(C(),b(l,{key:0,name:"close","custom-class":"wd-tooltip__close-icon",onClick:F})):j("",!0)])),_:3},8,["custom-style","show"]),y(o,{onClick:F,class:"wd-tooltip__target",id:"target"},{default:v((()=>[Q(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-fbd12920"]]),R=s(i({__name:"Index",setup(t){f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1),f(!1);const e=f(!1);f(!1),f(!1);const o=f("显示内容"),l=u(),{closeOutside:a}=H();function s(){e.value=!e.value}function i(){console.log("显示")}function r(){l.show("文字提示关闭")}function p(t){console.log(t)}function _(t){console.log(t)}function m(t){console.log(t)}function g(t){console.log(t)}function j(t){console.log(t)}function V(t){console.log(t)}function A(t){console.log(t)}function Q(t){console.log(t)}function I(t){console.log(t)}function P(t){console.log(t)}function T(t){console.log(t)}function q(t){console.log(t)}function z(t){console.log(t)}function G(t){console.log(t)}function R(t){console.log(t)}function U(t){console.log(t)}return(t,l)=>{const u=h(w("wd-toast"),c),f=h(w("wd-button"),F),H=h(w("wd-tooltip"),N),Y=O,B=h(w("wd-icon"),n),D=h(w("demo-block"),J),E=h(w("page-wraper"),d);return C(),b(E,null,{default:v((()=>[y(u),y(Y,{style:{overflow:"hidden"},onClick:$(x(a),["stop"])},{default:v((()=>[y(D,{title:"基本用法"},{default:v((()=>[y(Y,{class:"top"},{default:v((()=>[y(H,{placement:"bottom-start",content:"bottom-start 提示文字",onChange:p},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("bottom-start")])),_:1})])),_:1}),y(H,{placement:"bottom",content:"bottom 提示文字",onChange:_},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("bottom")])),_:1})])),_:1}),y(H,{placement:"bottom-end",content:"bottom-end 提示文字",onChange:m},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("bottom-end")])),_:1})])),_:1})])),_:1}),y(Y,{class:"left"},{default:v((()=>[y(H,{placement:"right-start",content:"right-start 提示文字",onChange:g},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("right-start")])),_:1})])),_:1}),y(H,{placement:"right",content:"right 提示文字",customStyle:"margin: 20px 0",onChange:j},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("right")])),_:1})])),_:1}),y(H,{placement:"right-end",content:"right-end 提示文字",onChange:V},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("right-end")])),_:1})])),_:1})])),_:1}),y(Y,{class:"right"},{default:v((()=>[y(H,{placement:"left-start",content:"left-start 提示文字",onChange:A},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k(" left-start "),y(B,{name:"setting"})])),_:1})])),_:1}),y(H,{placement:"left",content:"left 提示文字",customStyle:"margin: 20px 0",onChange:Q},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("left")])),_:1})])),_:1}),y(H,{placement:"left-end",content:"left-end 提示文字",onChange:I},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("left-end")])),_:1})])),_:1})])),_:1}),y(Y,{class:"bottom"},{default:v((()=>[y(H,{placement:"top-start",content:"top-start 提示文字",onChange:P},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("top-start")])),_:1})])),_:1}),y(H,{placement:"top",content:"top 提示文字",onChange:T},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("top")])),_:1})])),_:1}),y(H,{placement:"top-end",content:"top-end 提示文字",onChange:q},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("top-end")])),_:1})])),_:1})])),_:1})])),_:1}),y(D,{title:"显示关闭按钮"},{default:v((()=>[y(Y,{class:"demo-left"},{default:v((()=>[y(H,{content:"显示关闭按钮",placement:"right","show-close":"",onChange:z},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("显示关闭按钮")])),_:1})])),_:1})])),_:1})])),_:1}),y(D,{title:"多行文本"},{default:v((()=>[y(Y,{class:"demo-left lines-demo"},{default:v((()=>[y(H,{placement:"right","use-content-slot":"",onChange:G},{content:v((()=>[y(Y,{class:"lines-content"},{default:v((()=>[y(Y,null,{default:v((()=>[k("多行文本1")])),_:1}),y(Y,null,{default:v((()=>[k("多行文本2")])),_:1}),y(Y,null,{default:v((()=>[k("多行文本3")])),_:1})])),_:1})])),default:v((()=>[y(f,{round:!1},{default:v((()=>[k("多行文本")])),_:1})])),_:1})])),_:1})])),_:1}),y(D,{title:"控制显隐"},{default:v((()=>[y(Y,{onClick:$(s,["stop"])},{default:v((()=>[y(f,{plain:"",size:"small",class:"button-control"},{default:v((()=>[k(S(e.value?"关闭":"打开"),1)])),_:1})])),_:1},8,["onClick"]),y(Y,{class:"demo-left demo-control"},{default:v((()=>[y(H,{placement:"top",content:"控制显隐",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t)},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("top")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),y(D,{title:"绑定change事件"},{default:v((()=>[y(Y,{class:"demo-left"},{default:v((()=>[y(H,{placement:"right-end",content:o.value,onOpen:i,onClose:r,onChange:R},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("事件")])),_:1})])),_:1},8,["content"])])),_:1})])),_:1}),y(D,{title:"禁用"},{default:v((()=>[y(Y,{class:"demo-left"},{default:v((()=>[y(H,{placement:"right-end",content:"禁用",disabled:"",onChange:U},{default:v((()=>[y(f,{round:!1},{default:v((()=>[k("禁用")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-51db966c"]]);export{R as default};
