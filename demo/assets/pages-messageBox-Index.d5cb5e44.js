import{u as t,_ as e}from"./wd-message-box.c952f253.js";import{d as o,r as l,o as a,c as s,w as n,a as r,b as i,h as u,j as c}from"./index-3ce4de40.js";import{_ as m}from"./wd-rate.320d1138.js";import{_ as d}from"./wd-button.93e2fc0b.js";import{_ as f}from"./demo-block.0ea55f3c.js";import{d as p,a as _,b as g}from"./page-wraper.87c317ef.js";import"./wd-input.d39236fe.js";import"./useTranslate.26b7af52.js";const b=g(o({__name:"Index",setup(o){const g=l(1),b=l(""),w=p(),C=t(),j=t("wd-message-box-slot");function k(){C.alert("操作成功")}function h(){C.alert({msg:"提示文案",title:"标题"})}function x(){C.confirm({msg:"是否删除",title:"提示"}).catch((t=>{console.log(t)}))}function v(){C.prompt({title:"请输入邮箱",inputValue:b.value,inputPattern:/.+@.+\..+/i}).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))}function V(){C.alert({msg:"以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文字是示意以上文",title:"标题"})}function I(){C.confirm({msg:"是否删除",title:"提示",beforeConfirm:({resolve:t})=>{w.loading("删除中..."),setTimeout((()=>{w.close(),t(!0),w.success("删除成功")}),3e3)}}).then((()=>{})).catch((t=>{console.log(t)}))}function T(){j.confirm({title:"评分"}).then((()=>{C.alert(`你的评分为：${g.value}分`)})).catch((t=>{console.log(t)}))}return(t,o)=>{const l=u(c("wd-message-box"),e),p=u(c("wd-rate"),m),b=u(c("wd-button"),d),w=u(c("demo-block"),f),C=u(c("page-wraper"),_);return a(),s(C,null,{default:n((()=>[r(l),r(l,{selector:"wd-message-box-slot"},{default:n((()=>[r(p,{"custom-class":"custom-rate-class",modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=t=>g.value=t)},null,8,["modelValue"])])),_:1}),r(w,{title:"alert"},{default:n((()=>[r(b,{onClick:k},{default:n((()=>[i("alert")])),_:1})])),_:1}),r(w,{title:"显示标题"},{default:n((()=>[r(b,{onClick:h},{default:n((()=>[i("alert")])),_:1})])),_:1}),r(w,{title:"confirm"},{default:n((()=>[r(b,{onClick:x},{default:n((()=>[i("confirm")])),_:1})])),_:1}),r(w,{title:"prompt"},{default:n((()=>[r(b,{onClick:v},{default:n((()=>[i("prompt")])),_:1})])),_:1}),r(w,{title:"当文案过长时，弹框的高度不再增加，而是将文案内容设置成滚动"},{default:n((()=>[r(b,{onClick:V},{default:n((()=>[i("alert")])),_:1})])),_:1}),r(w,{title:"使用wd-message-box组件，通过slot插入其他组件内容"},{default:n((()=>[r(b,{onClick:T},{default:n((()=>[i("custom")])),_:1})])),_:1}),r(w,{title:"使用beforeConfirm钩子，在弹框确认前，可以进行一些操作"},{default:n((()=>[r(b,{onClick:I},{default:n((()=>[i("beforeConfirm")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-4909d8df"]]);export{b as default};
