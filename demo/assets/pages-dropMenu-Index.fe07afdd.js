import{d as e,N as o,r as l,v as a,Q as t,Y as n,q as u,h as s,j as d,o as i,c as r,w as p,a as c,e as m,F as v,f,n as _,b as w,t as b,p as g,x as y,y as h,u as V,J as k,g as x,i as C,E as $,R as K}from"./index-3ce4de40.js";import{g as I,m as S,i as j,l as U,K as z,h as N,c as P,k as O,t as E,b as M,G as Q,H as T,_ as B,a as H}from"./page-wraper.87c317ef.js";import{p as F,r as G,q,c as A,u as L}from"./clickoutside.502c80c0.js";import{u as D}from"./useChildren.4f3696ad.js";import{_ as J}from"./demo-block.0ea55f3c.js";import{_ as R}from"./wd-slider.15f1ded0.js";import{_ as Y}from"./wd-button.93e2fc0b.js";import{_ as W}from"./wd-sort-button.6891859b.js";import"./useTouch.0c8202f8.js";const X=Symbol("wd-drop-menu"),Z={...I,zIndex:S(12),direction:j("down"),modal:U(!0),closeOnClickModal:U(!0),duration:S(200)},ee=M(e({name:"wd-drop-menu-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...I,customTitle:j(""),customIcon:j(""),modelValue:[String,Number],options:z(),disabled:U(!1),iconName:j("check"),title:String,valueKey:j("value"),labelKey:j("label"),tipKey:j("tip")},emits:["change","update:modelValue","open","opened","closed","close"],setup(e,{expose:$,emit:K}){const I=e,S=o(q,null),j=l(!1),U=l(!1),z=l(),M=l(12),Q=l(!0),T=l(!0),B=l(0),{parent:H}=N(X),{proxy:A}=k();function L(){U.value&&(U.value=!1,H&&H.fold())}a((()=>I.modelValue),(e=>{E(e)&&"number"!=typeof e&&"string"!=typeof e&&console.error("[wot-design] warning(wd-drop-menu-item): the type of value should be a number or a string.")}),{deep:!0,immediate:!0}),t((()=>{S&&S.pushToQueue?S.pushToQueue(A):F(A)})),n((()=>{S&&S.removeFromQueue?S.removeFromQueue(A):G(A)}));const D=u((()=>{let e="";return e=j.value&&H?"down"===H.props.direction?`top: calc(var(--window-top) + ${H.offset.value}px); bottom: 0;`:`top: 0; bottom: calc(var(--window-bottom) + ${H.offset.value}px)`:"",e}));function J(){j.value=!1,K("closed")}function R(){K("open")}function Y(){K("opened")}function W(){K("close")}return $({setShowPop:function(e){U.value=e},getShowPop:function(){return U.value},open:function(){j.value=!0,U.value=!0,H&&(Q.value=Boolean(H.props.modal),B.value=Number(H.props.duration),T.value=Boolean(H.props.closeOnClickModal),z.value="down"===H.props.direction?"top":"bottom"),K("open")},close:L}),(e,o)=>{const l=x,a=C,t=s(d("wd-icon"),P),n=s(d("wd-popup"),O);return j.value?(i(),r(a,{key:0,class:_(`wd-drop-item  ${e.customClass}`),style:h(`z-index: ${M.value}; ${V(D)};${e.customStyle}`)},{default:p((()=>[c(n,{modelValue:U.value,"onUpdate:modelValue":o[0]||(o[0]=e=>U.value=e),"z-index":M.value,duration:B.value,position:z.value,"custom-style":"position: absolute; max-height: 80%;","modal-style":"position: absolute;",modal:Q.value,"close-on-click-modal":T.value,onClickModal:L,onBeforeEnter:R,onAfterEnter:Y,onBeforeLeave:W,onAfterLeave:J},{default:p((()=>[e.options.length?(i(),r(a,{key:0},{default:p((()=>[(i(!0),m(v,null,f(e.options,((o,n)=>(i(),r(a,{key:n,onClick:e=>function(e){if(I.disabled)return;const{valueKey:o}=I,l=I.options[e];K("update:modelValue",""!==l[o]&&void 0!==l[o]?l[o]:l),L(),K("change",{value:""!==l[o]&&void 0!==l[o]?l[o]:l,selectedItem:l})}(n),class:_("wd-drop-item__option "+((""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?"is-active":""))},{default:p((()=>[c(a,{class:_(`wd-drop-item__title ${e.customTitle}`)},{default:p((()=>[c(l,null,{default:p((()=>[w(b(o[e.labelKey]?o[e.labelKey]:o),1)])),_:2},1024),o[e.tipKey]?(i(),r(l,{key:0,class:"wd-drop-item__tip"},{default:p((()=>[w(b(o[e.tipKey]),1)])),_:2},1024)):g("",!0)])),_:2},1032,["class"]),(""!==o[e.valueKey]?o[e.valueKey]:o)===e.modelValue?(i(),r(t,{key:0,name:e.iconName,size:"20px",class:_(`wd-drop-item__icon ${e.customIcon}`)},null,8,["name","class"])):g("",!0)])),_:2},1032,["onClick","class"])))),128))])),_:1})):y(e.$slots,"default",{key:1},void 0,!0)])),_:3},8,["modelValue","z-index","duration","position","modal","close-on-click-modal"])])),_:3},8,["class","style"])):g("",!0)}}}),[["__scopeId","data-v-cdc57e78"]]),oe=M(e({name:"wd-drop-menu",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:Z,setup(e){const n=e,u=o(q,null),g=l(`dropMenuId${Q()}`),x=l(null),I=l(0),S=l(0),{proxy:j}=k(),{linkChildren:U,children:z}=D(X);function N(e){e.preventDefault(),e.stopPropagation()}function O(e){const{title:o,modelValue:l,options:a,valueKey:t,labelKey:n}=e;if(o)return o;for(let u=0,s=a.length;u<s;u++)if(l===a[u][t])return a[u][n];console.error("[wot-design] warning(wd-drop-menu-item): no value is matched in the options option.")}function E(e){x.value=e?e.$.uid:null,e?T(`#${g.value}`,!1,j).then((o=>{if(!o)return;const{top:l,bottom:a}=o;"down"===n.direction?I.value=Number(a):I.value=S.value-Number(l);e.$.exposed.getShowPop()?(e.$.exposed.setShowPop(!1),x.value=null):z.forEach((o=>{e.$.uid===o.$.uid?o.$.exposed.open():o.$.exposed.setShowPop(!1)}))})):z.forEach((e=>{e.$.exposed.setShowPop(!1)}))}return U({props:n,fold:E,offset:I}),a((()=>n.direction),(e=>{"up"!==e&&"down"!==e&&console.error("[wot design] warning(wd-drop-menu): direction must be 'up' or 'down'")}),{deep:!0,immediate:!0}),t((()=>{S.value=$().windowHeight})),(e,o)=>{const l=C,a=s(d("wd-icon"),P);return i(),r(l,{style:h(e.customStyle),class:_(`wd-drop-menu ${e.customClass}`),onClick:K(N,["stop"]),id:g.value},{default:p((()=>[c(l,{class:"wd-drop-menu__list"},{default:p((()=>[(i(!0),m(v,null,f(V(z),((e,o)=>(i(),r(l,{key:o,onClick:o=>function(e){e&&!e.disabled&&(u&&u.closeOther?u.closeOther(e):A(e),E(e))}(e),class:_(`wd-drop-menu__item ${e.disabled?"is-disabled":""} ${x.value===e.$.uid?"is-active":""}`)},{default:p((()=>[c(l,{class:"wd-drop-menu__item-title"},{default:p((()=>[c(l,{class:"wd-drop-menu__item-title-text"},{default:p((()=>[w(b(O(e)),1)])),_:2},1024),c(a,{name:"arrow-down",size:"14px","custom-class":"wd-drop-menu__arrow"})])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1}),y(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick","id"])}}}),[["__scopeId","data-v-bedc2f2d"]]),le=M(e({__name:"Index",setup(e){const{closeOutside:o}=L(),a=l(),t=l(),n=l(30);l(!1);const u=l(1),m=l(0),v=l(0),f=l(0),_=l(0),b=l(0),g=l(0),y=l(0),h=l(0),k=l([{label:"全部商品",value:0},{label:"新款商品",value:1,tip:"这是补充信息"},{label:"这是比较长的筛选条件这是比较长的筛选条件",value:2}]),x=l([{label:"综合",value:0},{label:"销量",value:1},{label:"上架时间",value:2}]);function $(){var e;null==(e=t.value)||e.initSlider()}function K({value:e}){console.log(e)}function I({value:e}){console.log(e)}function S({value:e}){console.log(e)}function j({value:e}){console.log(e)}function U({value:e}){console.log(e)}function z({value:e}){console.log(e)}function N({value:e}){console.log(e)}function P({value:e}){console.log(e)}function O({value:e}){console.log(e)}function E(){a.value.close()}return(e,l)=>{const M=s(d("wd-drop-menu-item"),ee),Q=s(d("wd-drop-menu"),oe),T=s(d("demo-block"),J),F=s(d("wd-slider"),R),G=s(d("wd-cell"),B),q=s(d("wd-button"),Y),A=C,L=s(d("wd-sort-button"),W),D=s(d("page-wraper"),H);return i(),r(D,null,{default:p((()=>[c(A,{class:"demo-body",onClick:V(o)},{default:p((()=>[c(T,{title:"基本用法",transparent:""},{default:p((()=>[c(Q,null,{default:p((()=>[c(M,{modelValue:u.value,"onUpdate:modelValue":l[0]||(l[0]=e=>u.value=e),options:k.value,onChange:K},null,8,["modelValue","options"]),c(M,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value=e),options:x.value,onChange:I},null,8,["modelValue","options"])])),_:1})])),_:1}),c(T,{title:"自定义菜单内容",transparent:""},{default:p((()=>[c(Q,null,{default:p((()=>[c(M,{modelValue:v.value,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value=e),options:k.value,onChange:S},null,8,["modelValue","options"]),c(M,{ref_key:"dropMenu",ref:a,title:"筛选",onOpened:$},{default:p((()=>[c(A,null,{default:p((()=>[c(F,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=e=>n.value=e),ref_key:"slider",ref:t},null,8,["modelValue"]),c(G,{title:"标题文字",value:"内容"}),c(G,{title:"标题文字",label:"描述信息",value:"内容"}),c(A,{style:{padding:"0 10px 20px","box-sizing":"border-box"}},{default:p((()=>[c(q,{block:"",size:"large",onClick:E},{default:p((()=>[w("主要按钮")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}),c(T,{title:"自定义菜单选项",transparent:""},{default:p((()=>[c(A,{class:"custom-menu"},{default:p((()=>[c(Q,{"custom-style":"flex: 1; min-width: 0"},{default:p((()=>[c(M,{modelValue:f.value,"onUpdate:modelValue":l[4]||(l[4]=e=>f.value=e),options:k.value,onChange:j},null,8,["modelValue","options"])])),_:1}),c(A,{style:{flex:"1"}},{default:p((()=>[c(L,{modelValue:_.value,"onUpdate:modelValue":l[5]||(l[5]=e=>_.value=e),title:"上架时间",onChange:U},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),c(T,{title:"向上弹出",transparent:""},{default:p((()=>[c(Q,{direction:"up"},{default:p((()=>[c(M,{modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=e=>b.value=e),options:k.value,onChange:z},null,8,["modelValue","options"]),c(M,{modelValue:g.value,"onUpdate:modelValue":l[7]||(l[7]=e=>g.value=e),options:x.value,onChange:N},null,8,["modelValue","options"])])),_:1})])),_:1}),c(T,{title:"禁用",transparent:""},{default:p((()=>[c(Q,{direction:"up"},{default:p((()=>[c(M,{modelValue:y.value,"onUpdate:modelValue":l[8]||(l[8]=e=>y.value=e),disabled:"",options:k.value,onChange:P},null,8,["modelValue","options"]),c(M,{modelValue:h.value,"onUpdate:modelValue":l[9]||(l[9]=e=>h.value=e),options:x.value,onChange:O},null,8,["modelValue","options"])])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-dedfd4ef"]]);export{le as default};
