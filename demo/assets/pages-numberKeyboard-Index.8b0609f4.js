import{d as e,e as l,_ as t,a as i}from"./page-wraper.87c317ef.js";import{d as o,r as a,o as n,e as s,a as u,w as v,b as r,F as d,h as b,j as p,g as c}from"./index-3ce4de40.js";import{_ as k}from"./wd-cell-group.f1b83f17.js";import{_ as m}from"./demo-block.0ea55f3c.js";import{_ as x}from"./wd-number-keyboard.8cbca6b2.js";import"./useChildren.4f3696ad.js";import"./useTouch.0c8202f8.js";const f=o({__name:"Index",setup(o){const{show:f}=e(),y=a(!1),_=a(!1),w=a(!1),C=a(!1),I=a(!1),U=a(!1),D=a(!1),j=a(!1),g=a(!1),h=[y,_,w,C,I,U,D,j,g],V=a("");function $(e){h.forEach(((l,t)=>l.value=t===e-1))}const q=e=>f(`${e}`),E=()=>f("删除");return(e,o)=>{const a=b(p("wd-toast"),l),f=b(p("wd-cell"),t),h=b(p("wd-cell-group"),k),F=b(p("demo-block"),m),T=b(p("wd-number-keyboard"),x),X=c,z=b(p("page-wraper"),i);return n(),s(d,null,[u(a),u(z,null,{default:v((()=>[u(F,{title:"基本用法",transparent:""},{default:v((()=>[u(h,{border:""},{default:v((()=>[u(f,{title:"默认键盘","is-link":"",onClick:o[0]||(o[0]=e=>$(1))}),u(f,{title:"带右侧栏的键盘","is-link":"",onClick:o[1]||(o[1]=e=>$(2))}),u(f,{title:"身份证键盘","is-link":"",onClick:o[2]||(o[2]=e=>$(3))}),u(f,{title:"带标题的键盘","is-link":"",onClick:o[3]||(o[3]=e=>$(4))}),u(f,{title:"slot自定义标题","is-link":"",onClick:o[4]||(o[4]=e=>$(9))}),u(f,{title:"多个额外按键","is-link":"",onClick:o[5]||(o[5]=e=>$(5))}),u(f,{title:"随机数字键盘","is-link":"",onClick:o[6]||(o[6]=e=>$(6))}),u(f,{title:"双向绑定",clickable:"",value:V.value,onClick:o[7]||(o[7]=e=>$(7))},null,8,["value"]),u(f,{title:"展示蒙层",clickable:"",onClick:o[8]||(o[8]=e=>$(8))})])),_:1})])),_:1}),u(T,{visible:y.value,"onUpdate:visible":o[9]||(o[9]=e=>y.value=e),onInput:q,onDelete:E},null,8,["visible"]),u(T,{visible:_.value,"onUpdate:visible":o[10]||(o[10]=e=>_.value=e),mode:"custom","extra-key":".","close-text":"完成",onInput:q,onDelete:E},null,8,["visible"]),u(T,{visible:w.value,"onUpdate:visible":o[11]||(o[11]=e=>w.value=e),"extra-key":"X","close-text":"完成",onInput:q,onDelete:E},null,8,["visible"]),u(T,{visible:C.value,"onUpdate:visible":o[12]||(o[12]=e=>C.value=e),title:"输入密码","extra-key":".","close-text":"完成",onInput:q,onDelete:E},null,8,["visible"]),u(T,{visible:g.value,"onUpdate:visible":o[13]||(o[13]=e=>g.value=e),"extra-key":".","close-text":"完成",onInput:q,onDelete:E},{title:v((()=>[u(X,{style:{color:"red"}},{default:v((()=>[r("自定义标题")])),_:1})])),_:1},8,["visible"]),u(T,{visible:I.value,"onUpdate:visible":o[14]||(o[14]=e=>I.value=e),mode:"custom","extra-key":["00","."],"close-text":"完成",onInput:q,onDelete:E},null,8,["visible","extra-key"]),u(T,{visible:U.value,"onUpdate:visible":o[15]||(o[15]=e=>U.value=e),"random-key-order":"",onInput:q,onDelete:E},null,8,["visible"]),u(T,{modelValue:V.value,"onUpdate:modelValue":o[16]||(o[16]=e=>V.value=e),maxlength:6,visible:D.value,"onUpdate:visible":o[17]||(o[17]=e=>D.value=e),title:"键盘标题","extra-key":".","close-text":"完成",onInput:q,onDelete:E},null,8,["modelValue","visible"]),u(T,{modal:!0,visible:j.value,"onUpdate:visible":o[18]||(o[18]=e=>j.value=e),onInput:q,onDelete:E},null,8,["visible"])])),_:1})],64)}}});export{f as default};
