import{d as e,r as l,q as a,v as s,m as o,Q as t,a5 as n,h as i,j as r,o as u,c,w as d,a as m,x as p,n as f,u as v,y as g,e as y,F as _,b as h,t as b,p as k,i as w,J as C}from"./index-3ce4de40.js";import{g as V,i as S,l as x,m as $,K,M as F,h as I,R as T,r as z,t as j,Q as q,T as A,c as B,k as L,C as M,N as O,b as W}from"./page-wraper.87c317ef.js";import{f as D,_ as H}from"./wd-picker-view.3535a095.js";import{u as P}from"./useTranslate.26b7af52.js";const R=W(e({name:"wd-picker",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...V,customLabelClass:S(""),customValueClass:S(""),customViewClass:S(""),label:String,placeholder:String,disabled:x(!1),readonly:x(!1),loading:x(!1),loadingColor:S("#4D80F0"),title:String,cancelButtonText:String,confirmButtonText:String,required:x(!1),size:String,labelWidth:String,useDefaultSlot:x(!1),useLabelSlot:x(!1),error:x(!1),alignRight:x(!1),beforeConfirm:Function,closeOnClickModal:x(!0),safeAreaInsetBottom:x(!0),ellipsis:x(!1),columnsHeight:$(217),valueKey:S("value"),labelKey:S("label"),modelValue:{type:[String,Number,Array],default:""},columns:{type:Array,default:()=>[]},columnChange:Function,displayFormat:Function,zIndex:$(15),prop:String,rules:K(),immediateChange:x(!1)},emits:["confirm","open","cancel","update:modelValue"],setup(e,{expose:V,emit:S}){const x=e,{translate:$}=P("picker"),K=l(null),W=F(),R=l(!1),N=l(!1),Q=l(""),U=l(""),E=l([]),G=l([]),J=l(!1),X=l(!1),Y=a((()=>x.loading||R.value));s((()=>x.displayFormat),(e=>{e&&!M(e)&&console.error("The type of displayFormat must be Function"),K.value&&0!==K.value.getSelectedIndex().length&&se(x.modelValue)}),{immediate:!0,deep:!0}),s((()=>x.modelValue),(e=>{U.value=e,se(e)}),{deep:!0,immediate:!0}),s((()=>x.columns),(e=>{E.value=T(e),G.value=T(e),se(x.modelValue)}),{deep:!0,immediate:!0}),s((()=>x.columnChange),(e=>{e&&!M(e)&&console.error("The type of columnChange must be Function")}),{deep:!0,immediate:!0});const{parent:Z}=I(O),ee=a((()=>Z&&x.prop&&Z.errorMessages&&Z.errorMessages[x.prop]?Z.errorMessages[x.prop]:"")),le=a((()=>{let e=!1;if(Z&&Z.props.rules){const l=Z.props.rules;for(const a in l)Object.prototype.hasOwnProperty.call(l,a)&&a===x.prop&&Array.isArray(l[a])&&(e=l[a].some((e=>e.required)))}return x.required||x.rules.some((e=>e.required))||e})),{proxy:ae}=C();function se(e){z(e)&&e.length>0||j(e)&&!z(e)&&""!==e?K.value?n((()=>{ue(K.value.getSelects())})):ue(function(e){const l=D(x.columns,x.valueKey,x.labelKey);if(0===x.columns.length)return;if(""===e||!j(e)||z(e)&&0===e.length)return;const a=q(e);if(-1===["string","number","boolean","array"].indexOf(a))return[];e=z(e)?e:[e],e=e.slice(0,l.length),0===e.length&&(e=l.map((()=>0)));let s=[];e.forEach(((e,a)=>{let o=l[a].findIndex((l=>l[x.valueKey].toString()===e.toString()));o=-1===o?0:o,s.push(o)}));const o=s.map(((e,a)=>l[a][e]));if(1===o.length)return o[0];return o}(e)):Q.value=""}function oe(){x.disabled||x.readonly||(S("open"),N.value=!0,U.value=x.modelValue,E.value=G.value)}function te(){N.value=!1,S("cancel")}function ne(){if(Y.value)return;if(J.value)return void(X.value=!0);const{beforeConfirm:e}=x;e&&M(e)?e(U.value,(e=>{e&&ie()}),ae.$.exposed):ie()}function ie(){if(Y.value||x.disabled)return void(N.value=!1);const e=K.value.getSelects(),l=K.value.getValues(),a=K.value.getColumnsData();N.value=!1,G.value=T(a),S("update:modelValue",l),ue(e),S("confirm",{value:l,selectedItems:e})}function re({value:e}){U.value=e}function ue(e){if(z(e)&&!e.length||!e)return;const{valueKey:l,labelKey:a}=x;Q.value=(x.displayFormat||A)(e,{valueKey:l,labelKey:a})}function ce(){}function de(){J.value=!0}function me(){J.value=!1,X.value&&(X.value=!1,ne())}return o((()=>{se(x.modelValue)})),t((()=>{E.value=T(x.columns),G.value=T(x.columns)})),V({close:function(){te()},open:function(){oe()},setLoading:function(e){R.value=e}}),(e,l)=>{const a=w,s=i(r("wd-icon"),B),o=i(r("wd-picker-view"),H),t=i(r("wd-popup"),L);return u(),c(a,{class:f(`wd-picker ${e.disabled?"is-disabled":""} ${e.size?"is-"+e.size:""}  ${v(W).border.value?"is-border":""} ${e.alignRight?"is-align-right":""} ${e.error?"is-error":""} ${e.customClass}`),style:g(e.customStyle)},{default:d((()=>[m(a,{class:"wd-picker__field",onClick:oe},{default:d((()=>[e.useDefaultSlot?p(e.$slots,"default",{key:0},void 0,!0):(u(),c(a,{key:1,class:"wd-picker__cell"},{default:d((()=>[e.label||e.useLabelSlot?(u(),c(a,{key:0,class:f(`wd-picker__label ${e.customLabelClass}  ${v(le)?"is-required":""}`),style:g(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:d((()=>[e.label?(u(),y(_,{key:0},[h(b(e.label),1)],64)):p(e.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):k("",!0),m(a,{class:"wd-picker__body"},{default:d((()=>[m(a,{class:"wd-picker__value-wraper"},{default:d((()=>[m(a,{class:f(`wd-picker__value ${e.ellipsis&&"is-ellipsis"} ${e.customValueClass} ${Q.value?"":"wd-picker__placeholder"}`)},{default:d((()=>[h(b(Q.value?Q.value:e.placeholder||v($)("placeholder")),1)])),_:1},8,["class"]),e.disabled||e.readonly?k("",!0):(u(),c(s,{key:0,"custom-class":"wd-picker__arrow",name:"arrow-right"}))])),_:1}),v(ee)?(u(),c(a,{key:0,class:"wd-picker__error-message"},{default:d((()=>[h(b(v(ee)),1)])),_:1})):k("",!0)])),_:1})])),_:3}))])),_:3}),m(t,{modelValue:N.value,"onUpdate:modelValue":l[1]||(l[1]=e=>N.value=e),position:"bottom","hide-when-close":!1,"close-on-click-modal":e.closeOnClickModal,"z-index":e.zIndex,"safe-area-inset-bottom":e.safeAreaInsetBottom,onClose:te,"custom-class":"wd-picker__popup"},{default:d((()=>[m(a,{class:"wd-picker__wraper"},{default:d((()=>[m(a,{class:"wd-picker__toolbar",onTouchmove:ce},{default:d((()=>[m(a,{class:"wd-picker__action wd-picker__action--cancel",onClick:te},{default:d((()=>[h(b(e.cancelButtonText||v($)("cancel")),1)])),_:1}),e.title?(u(),c(a,{key:0,class:"wd-picker__title"},{default:d((()=>[h(b(e.title),1)])),_:1})):k("",!0),m(a,{class:f("wd-picker__action "+(v(Y)?"is-loading":"")),onClick:ne},{default:d((()=>[h(b(e.confirmButtonText||v($)("done")),1)])),_:1},8,["class"])])),_:1}),m(o,{ref_key:"pickerViewWd",ref:K,"custom-class":e.customViewClass,modelValue:U.value,"onUpdate:modelValue":l[0]||(l[0]=e=>U.value=e),columns:E.value,loading:v(Y),"loading-color":e.loadingColor,"columns-height":e.columnsHeight,"value-key":e.valueKey,"label-key":e.labelKey,"immediate-change":e.immediateChange,onChange:re,onPickstart:de,onPickend:me,"column-change":e.columnChange},null,8,["custom-class","modelValue","columns","loading","loading-color","columns-height","value-key","label-key","immediate-change","column-change"])])),_:1})])),_:1},8,["modelValue","close-on-click-modal","z-index","safe-area-inset-bottom"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-42129065"]]);export{R as _};
