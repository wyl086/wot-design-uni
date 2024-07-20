import{d as e,r as t,E as a,v as s,q as l,m as r,a5 as i,h as o,j as d,o as n,c,w as f,a as u,n as _,y as h,u as p,x as b,p as v,b as w,t as x,e as m,F as g,i as k,J as y,ao as $,ab as C}from"./index-3ce4de40.js";import{g as I,l as T,m as z,t as D,v as j,p as A,c as H,H as L,b as S,d as B,e as V,a as G}from"./page-wraper.87c317ef.js";import{_ as q}from"./demo-block.0ea55f3c.js";import{_ as E}from"./wd-search.9a0d75a7.js";import"./useTranslate.26b7af52.js";const F=S(e({name:"wd-navbar",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...I,title:String,leftText:String,rightText:String,leftArrow:T(!1),bordered:T(!0),fixed:T(!1),placeholder:T(!1),zIndex:z(500),safeAreaInsetTop:T(!1),leftDisabled:T(!1),rightDisabled:T(!1)},emits:["click-left","click-right"],setup(e,{emit:$}){const C=e,I=t(""),{statusBarHeight:T}=a();s([()=>C.fixed,()=>C.placeholder],(()=>{G()}),{deep:!0,immediate:!1});const z=l((()=>{const e={};return C.fixed&&D(C.zIndex)&&(e["z-index"]=C.zIndex),C.safeAreaInsetTop&&(e["padding-top"]=j(T||0)),`${A(e)};${C.customStyle}`}));function S(){C.leftDisabled||$("click-left")}function B(){C.rightDisabled||$("click-right")}r((()=>{C.fixed&&C.placeholder&&i((()=>{G()}))}));const{proxy:V}=y();function G(){C.fixed&&C.placeholder&&L(".wd-navbar",!1,V).then((e=>{I.value=e.height}))}return(e,t)=>{const a=k,s=o(d("wd-icon"),H);return n(),c(a,{style:h({height:p(j)(I.value)})},{default:f((()=>[u(a,{class:_(`wd-navbar ${e.customClass} ${e.fixed?"is-fixed":""} ${e.bordered?"is-border":""}`),style:h(p(z))},{default:f((()=>[u(a,{class:"wd-navbar__content"},{default:f((()=>[e.$slots.capsule?(n(),c(a,{key:0,class:"wd-navbar__capsule"},{default:f((()=>[b(e.$slots,"capsule",{},void 0,!0)])),_:3})):e.$slots.left?(n(),c(a,{key:2,class:_("wd-navbar__left "+(e.leftDisabled?"is-disabled":"")),onClick:S},{default:f((()=>[b(e.$slots,"left",{},void 0,!0)])),_:3},8,["class"])):(n(),c(a,{key:1,class:_("wd-navbar__left "+(e.leftDisabled?"is-disabled":"")),"hover-class":e.leftDisabled||e.$slots.left?"":"wd-navbar__left--hover","hover-stay-time":"70",onClick:S},{default:f((()=>[e.leftArrow?(n(),c(s,{key:0,size:"24px",name:"arrow-left","custom-class":"wd-navbar__arrow"})):v("",!0),e.leftText?(n(),c(a,{key:1,class:"wd-navbar__text"},{default:f((()=>[w(x(e.leftText),1)])),_:1})):v("",!0)])),_:1},8,["class","hover-class"])),u(a,{class:"wd-navbar__title"},{default:f((()=>[b(e.$slots,"title",{},void 0,!0),!e.$slots.title&&e.title?(n(),m(g,{key:0},[w(x(e.title),1)],64)):v("",!0)])),_:3}),e.$slots.right||e.rightText?(n(),c(a,{key:3,class:_("wd-navbar__right "+(e.rightDisabled?"is-disabled":"")),onClick:B,"hover-class":e.rightDisabled?"":"wd-navbar__right--hover","hover-stay-time":"70"},{default:f((()=>[b(e.$slots,"right",{},void 0,!0),!e.$slots.right&&e.rightText?(n(),c(a,{key:0,class:"wd-navbar__text","hover-class":"wd-navbar__text--hover","hover-stay-time":"70"},{default:f((()=>[w(x(e.rightText),1)])),_:1})):v("",!0)])),_:3},8,["class","hover-class"])):v("",!0)])),_:3})])),_:3},8,["class","style"])])),_:3},8,["style"])}}}),[["__scopeId","data-v-0d76952e"]]),J=S(e({name:"wd-navbar-capsule",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},emits:["back","back-home"],setup(e,{emit:t}){function a(){t("back")}function s(){t("back-home")}return(e,t)=>{const l=o(d("wd-icon"),H),r=k;return n(),c(r,{class:"wd-navbar-capsule"},{default:f((()=>[u(l,{onClick:a,size:"20px",name:"chevron-left","custom-class":"wd-navbar-capsule__icon"}),u(l,{onClick:s,size:"20px",name:"home","custom-class":"wd-navbar-capsule__icon"})])),_:1})}}}),[["__scopeId","data-v-4ebd957c"]]),N=S(e({__name:"Index",setup(e){const a=t(""),{show:s}=B();function l(){$({})}function r(){s("按钮")}function i(){$({})}function c(){C({url:"/pages/index/Index"})}return(e,t)=>{const s=o(d("wd-toast"),V),_=o(d("wd-navbar"),F),h=o(d("demo-block"),q),p=o(d("wd-icon"),H),b=o(d("wd-navbar-capsule"),J),v=o(d("wd-search"),E),w=k,x=o(d("page-wraper"),G);return n(),m(g,null,[u(s),u(x,null,{default:f((()=>[u(_,{fixed:"",placeholder:"",title:"Navbar 导航条","left-arrow":"",safeAreaInsetTop:"",onClickLeft:l}),u(h,{title:"基础用法",transparent:""},{default:f((()=>[u(_,{title:"标题"})])),_:1}),u(h,{title:"返回上级",transparent:""},{default:f((()=>[u(_,{title:"标题","left-text":"返回","left-arrow":"",onClickLeft:l})])),_:1}),u(h,{title:"右侧按钮",transparent:""},{default:f((()=>[u(_,{title:"标题","left-text":"返回","left-arrow":"","right-text":"按钮",onClickLeft:l,onClickRight:r})])),_:1}),u(h,{title:"使用插槽",transparent:""},{default:f((()=>[u(_,{title:"标题",onClickLeft:l},{left:f((()=>[u(p,{name:"arrow-left",size:"24px",class:"wd-navbar__arrow"})])),right:f((()=>[u(p,{name:"search",size:"18"})])),_:1})])),_:1}),u(h,{title:"禁用按钮",transparent:""},{default:f((()=>[u(_,{title:"标题","left-text":"返回","right-text":"按钮","left-arrow":"","left-disabled":"","right-disabled":""})])),_:1}),u(h,{title:"胶囊样式",transparent:""},{default:f((()=>[u(_,{title:"标题","left-text":"返回","right-text":"设置","left-arrow":""},{capsule:f((()=>[u(b,{onBack:i,onBackHome:c})])),_:1})])),_:1}),u(h,{title:"带搜索栏",transparent:""},{default:f((()=>[u(_,{"left-text":"返回","right-text":"设置","left-arrow":""},{title:f((()=>[u(w,{class:"search-box"},{default:f((()=>[u(v,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),"hide-cancel":"","placeholder-left":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),u(w,{style:{height:"500rpx"}})])),_:1})],64)}}}),[["__scopeId","data-v-fbf05eb5"]]);export{N as default};
