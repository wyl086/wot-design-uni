import{d as e,r as a,o as l,c as t,w as o,a as u,b as n,i as d,h as r,j as m}from"./index-3ce4de40.js";import{_ as p,a as s}from"./wd-radio-group.16f55eb1.js";import{_ as i}from"./wd-calendar-view.ea8658d1.js";import{_ as f}from"./demo-block.0ea55f3c.js";import{a as v}from"./page-wraper.87c317ef.js";import"./useChildren.4f3696ad.js";import"./dayjs.d1b68c00.js";import"./useTranslate.26b7af52.js";import"./wd-picker-view.3535a095.js";const w=e({__name:"Index",setup(e){const w=a("date"),V=a("daterange");a(Date.now());const g=a(Date.now()),_=a(null),h=a([Date.now()-28512e5,Date.now()]),y=a(Date.now()),D=a([Date.now()-2592e5,Date.now()-864e5]),c=a([Date.now()-2592e5,Date.now()-864e5]),x=a([Date.now()-2592e5,Date.now()-864e5]),j=a([Date.now()-2592e5,Date.now()-864e5]),U=({type:e,values:a})=>"minute"===e?a.filter((e=>e.value%10==0)):a,b=e=>{const a=new Date(e.date),l=new Date,t=a.getFullYear(),o=a.getMonth(),u=a.getDate(),n=l.getFullYear(),d=l.getMonth(),r=l.getDate();return t===n&&o===d&&u===r&&(e.topInfo="今天"),5===o&&18===u&&(e.topInfo="618大促"),10===o&&11===u&&(e.topInfo="京东双11"),"start"===e.type&&(e.bottomInfo="开始"),"end"===e.type&&(e.bottomInfo="结束"),"same"===e.type&&(e.bottomInfo="开始/结束"),e};function k({value:e}){V.value=e}function I({value:e}){console.log(e)}function C({value:e}){_.value=e}function z({value:e}){h.value=e}return(e,a)=>{const F=d,M=r(m("wd-radio"),p),Y=r(m("wd-radio-group"),s),K=r(m("wd-calendar-view"),i),L=r(m("demo-block"),f),T=r(m("page-wraper"),v);return l(),t(T,null,{default:o((()=>[u(L,{title:"单个日期选择",hor:0},{default:o((()=>[u(F,{style:{margin:"0 15px 10px"}},{default:o((()=>[u(F,{style:{"margin-bottom":"10px","font-size":"13px"}},{default:o((()=>[n("切换类型：")])),_:1}),u(Y,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value=e),shape:"button"},{default:o((()=>[u(M,{value:"date"},{default:o((()=>[n("date")])),_:1}),u(M,{value:"week"},{default:o((()=>[n("week")])),_:1}),u(M,{value:"month"},{default:o((()=>[n("month")])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(K,{type:w.value,modelValue:g.value,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value=e),onChange:I},null,8,["type","modelValue"])])),_:1}),u(L,{title:"多个日期选择",hor:0},{default:o((()=>[u(K,{type:"dates",modelValue:_.value,"onUpdate:modelValue":a[2]||(a[2]=e=>_.value=e),onChange:C},null,8,["modelValue"])])),_:1}),u(L,{title:"日期范围选择",hor:0},{default:o((()=>[u(F,{style:{margin:"0 24rpx 20rpx"}},{default:o((()=>[u(F,{style:{"margin-bottom":"20rpx","font-size":"26rpx"}},{default:o((()=>[n("切换类型：")])),_:1}),u(Y,{modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=e=>V.value=e),shape:"button",onChange:k},{default:o((()=>[u(M,{value:"daterange"},{default:o((()=>[n("daterange")])),_:1}),u(M,{value:"weekrange"},{default:o((()=>[n("weekrange")])),_:1}),u(M,{value:"monthrange"},{default:o((()=>[n("monthrange")])),_:1})])),_:1},8,["modelValue"])])),_:1}),u(K,{type:V.value,"allow-same-day":"",modelValue:h.value,"onUpdate:modelValue":a[4]||(a[4]=e=>h.value=e),onChange:z},null,8,["type","modelValue"])])),_:1}),u(L,{title:"时间类型",hor:0},{default:o((()=>[u(K,{type:"datetime",modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=e=>y.value=e),"time-filter":U},null,8,["modelValue"])])),_:1}),u(L,{title:"时间范围类型",hor:0},{default:o((()=>[u(K,{type:"datetimerange",modelValue:D.value,"onUpdate:modelValue":a[6]||(a[6]=e=>D.value=e)},null,8,["modelValue"])])),_:1}),u(L,{title:"限制最大选择范围",hor:0},{default:o((()=>[u(K,{type:"daterange","max-range":3,modelValue:x.value,"onUpdate:modelValue":a[7]||(a[7]=e=>x.value=e)},null,8,["modelValue"])])),_:1}),u(L,{title:"自定义日期",hor:0},{default:o((()=>[u(K,{type:"daterange","allow-same-day":"",modelValue:c.value,"onUpdate:modelValue":a[8]||(a[8]=e=>c.value=e),formatter:b},null,8,["modelValue"])])),_:1}),u(L,{title:"设置周起始日",hor:0},{default:o((()=>[u(K,{"first-day-of-week":1,modelValue:j.value,"onUpdate:modelValue":a[9]||(a[9]=e=>j.value=e)},null,8,["modelValue"])])),_:1})])),_:1})}}});export{w as default};
