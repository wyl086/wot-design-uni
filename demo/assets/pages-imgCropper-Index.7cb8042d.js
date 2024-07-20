import{d as e,r as a,E as l,v as t,q as u,o,c as s,w as i,a as c,n,y as r,u as v,p as d,b as m,t as p,i as h,l as g,G as f,h as w,j as _,H as x,I as y,J as b,K as S,L as M}from"./index-3ce4de40.js";import{g as T,l as $,i as I,m as k,w as C,p as H,v as N,c as V,b as j,a as q}from"./page-wraper.87c317ef.js";import{_ as W}from"./wd-button.93e2fc0b.js";import{u as X}from"./useTranslate.26b7af52.js";import{_ as Y}from"./wd-img.5971758f.js";import{_ as z}from"./demo-block.0ea55f3c.js";const F=e({name:"wd-img-cropper",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...T,modelValue:$(!1),cancelButtonText:String,confirmButtonText:String,disabledRotate:$(!1),fileType:I("png"),quality:k(1),exportScale:k(2),imgSrc:I(""),imgWidth:C(""),imgHeight:C(""),maxScale:k(3)},emits:["imgloaded","imgloaderror","cancel","confirm","update:modelValue"],setup(e,{expose:M,emit:T}){const $=e;let I=null,k=null,C=!0,j=null,q=null;const Y=.85,{translate:z}=X("img-cropper"),F=a(0),P=a(!1),R=a(0),A=a(0),B=a(0),E=a(0),G=a(20),L=a(0),O=a(0),J=a(""),K=a(""),U=a(2),D=a(1),Q=a(l().windowWidth/2),Z=a(l().windowHeight/2*Y),ee=a(null),ae=a(l()),le=a(!0),te=a([{x:"",y:""},{x:"",y:""}]),ue=a(""),oe=a(null),{proxy:se}=b();t((()=>$.modelValue),(e=>{if(e){j=$.imgWidth,q=$.imgHeight,ae.value=l();const e=ae.value.windowWidth-2*G.value;B.value=e,E.value=e,O.value=(ae.value.windowHeight*Y-e)/2,L.value=G.value,U.value=$.exportScale,K.value=e,J.value=e,function(){if(j&&"string"==typeof j&&-1!==j.indexOf("%")){const e=j.replace("%","");j=ae.value.windowWidth/100*Number(e),R.value=j}else j&&"number"==typeof j&&(R.value=j);if(q&&"string"==typeof q&&-1!==q.indexOf("%")){const e=$.imgHeight.replace("%","");q=ae.value.windowHeight/100*Number(e),R.value=q}else q&&"number"==typeof q&&(R.value=Number(j))}(),oe.value||(oe.value=y("wd-img-cropper-canvas",se)),$.imgSrc&&de()}else ve()}),{deep:!0,immediate:!0}),t((()=>$.imgSrc),(e=>{e&&de()}),{deep:!0,immediate:!0}),t((()=>F.value),(e=>{e%90&&(F.value=90*Math.round(e/90))}),{deep:!0,immediate:!0}),t((()=>P.value),(e=>{I&&clearTimeout(I),e&&(I=setTimeout((()=>{ne(!1),clearTimeout(I)}),300))}),{deep:!0,immediate:!0});const ie=u((()=>H({position:"absolute",right:0,width:"56px","border-radius":"16px","font-size":"16px"}))),ce=u((()=>{const e={width:R.value?N(R.value):"auto",height:A.value?N(A.value):"auto",transform:`translate(${N(Q.value-R.value/2)}, ${N(Z.value-A.value/2)}) scale(${D.value}) rotate(${F.value}deg)`,"transition-duration":(P.value?.4:0)+"s"};return H(e)}));function ne(e){P.value=e}function re(e){e&&!$.disabledRotate&&(ne(!0),F.value=e,me())}function ve(){const{windowHeight:e,windowWidth:a}=l();D.value=1,F.value=0,Q.value=a/2,Z.value=e/2*Y}function de(){$.imgSrc&&x({src:$.imgSrc,success:e=>{ee.value=e,function(){let e=R.value,a=A.value;q||j?q&&!j?e=ee.value.width/ee.value.height*Number(q):(!q&&j||q&&j)&&(a=ee.value.height/ee.value.width*Number(j)):(e=ee.value.width,a=ee.value.height,R.value/A.value>B.value/E.value?(a=E.value,e=ee.value.width/ee.value.height*E.value):(e=B.value,a=ee.value.height/ee.value.width*B.value));R.value=e,A.value=a}(),ve()},fail:()=>{}})}function me(e){const a=e||D.value;let l=Q.value,t=Z.value,u=R.value,o=A.value;F.value/90%2&&(u=A.value,o=R.value),l=u*a/2+L.value>=l?l:u*D.value/2+L.value,l=L.value+B.value-u*a/2<=l?l:L.value+B.value-u*a/2,t=o*a/2+O.value>=t?t:o*a/2+O.value,t=O.value+E.value-o*a/2<=t?t:O.value+E.value-o*a/2,D.value=a,Z.value=t,Q.value=l}function pe(e){if(le.value=!1,1===e.touches.length)te.value[0]={x:e.touches[0].clientX-Q.value,y:e.touches[0].clientY-Z.value};else{const a=Math.abs(e.touches[1].clientX-e.touches[0].clientX),l=Math.abs(e.touches[1].clientY-e.touches[0].clientY);ue.value=Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function he(e){if(!le.value&&C)if("android"===ae.value.platform?(k&&clearTimeout(k),k=setTimeout((()=>{C=!0}),25)):!C&&(C=!0),1===e.touches.length){const{x:a,y:l}=te.value[0],t=e.touches[0].clientX-Number(a),u=e.touches[0].clientY-Number(l);Q.value=t,Z.value=u,me()}else{const a=Math.abs(e.touches[1].clientX-e.touches[0].clientX),l=Math.abs(e.touches[1].clientY-e.touches[0].clientY),t=Math.sqrt(Math.pow(a,2)+Math.pow(l,2)),u=D.value*(t/Number(ue.value));D.value=Math.min(u,$.maxScale),function(){let e=R.value,a=A.value,l=D.value;F.value/90%2&&(e=A.value,a=R.value),e*l<B.value&&(l=B.value/e),a*l<E.value&&(l=E.value/a),me(l)}(),ue.value=Math.sqrt(Math.pow(a,2)+Math.pow(l,2))}}function ge(){le.value=!0}function fe(e){T("imgloaded",e)}function we(e){T("imgloaderror",e)}function _e(){re(F.value-90)}function xe(){T("cancel"),T("update:modelValue",!1)}function ye(){!function(){if(!$.imgSrc)return;const e=()=>{const e=R.value*D.value*$.exportScale,a=A.value*D.value*$.exportScale,l=Q.value-L.value,t=Z.value-O.value;oe.value.translate(l*$.exportScale,t*$.exportScale),$.disabledRotate||oe.value.rotate(F.value*Math.PI/180),oe.value.drawImage($.imgSrc,-e/2,-a/2,e,a),oe.value.restore(),oe.value.draw(!1,(()=>{!function(){const{fileType:e,quality:a,exportScale:l}=$;try{S({width:B.value*l,height:Math.round(E.value*l),destWidth:B.value*l,destHeight:Math.round(E.value*l),fileType:e,quality:a,canvasId:"wd-img-cropper-canvas",success:e=>{const a={tempFilePath:e.tempFilePath,width:B.value*l,height:E.value*l};T("confirm",a)},complete:()=>{T("update:modelValue",!1)}},se)}catch(t){console.log(t)}}()}))};K.value=E.value,J.value=B.value,e()}()}function be(){}return M({revertIsAnimation:ne,setRoate:re,resetImg:ve}),(e,a)=>{const l=h,t=g,u=f,x=w(_("wd-icon"),V),y=w(_("wd-button"),W);return e.modelValue?(o(),s(l,{key:0,class:n(`wd-img-cropper ${e.customClass}`),style:r(e.customStyle),onTouchmove:be},{default:i((()=>[c(l,{class:"wd-img-cropper__wrapper"},{default:i((()=>[c(l,{class:"wd-img-cropper__cut"},{default:i((()=>[c(l,{class:n("wd-img-cropper__cut--top "+(le.value?"":"is-hightlight")),style:r(`height: ${O.value}px;`)},null,8,["class","style"]),c(l,{class:"wd-img-cropper__cut--middle"},{default:i((()=>[c(l,{class:n("wd-img-cropper__cut--left "+(le.value?"":"is-hightlight")),style:r(`width: ${L.value}px; height: ${B.value}px;`)},null,8,["class","style"]),c(l,{class:"wd-img-cropper__cut--body",style:r(`width: ${B.value}px; height: ${E.value}px;`)},{default:i((()=>[c(l,{class:"is-gridlines-x"}),c(l,{class:"is-gridlines-y"}),c(l,{class:"is-left-top"}),c(l,{class:"is-left-bottom"}),c(l,{class:"is-right-top"}),c(l,{class:"is-right-bottom"})])),_:1},8,["style"]),c(l,{class:n("wd-img-cropper__cut--right "+(le.value?"":"is-hightlight"))},null,8,["class"])])),_:1}),c(l,{class:n("wd-img-cropper__cut--bottom "+(le.value?"":"is-hightlight"))},null,8,["class"])])),_:1}),c(t,{prop:P.value,"change:prop":e.animation?e.animation.setAnimation:"",class:"wd-img-cropper__img",src:e.imgSrc,style:r(v(ce)),"lazy-load":!1,onTouchstart:pe,onTouchmove:he,onTouchend:ge,onError:we,onLoad:fe},null,8,["prop","change:prop","src","style"])])),_:1}),c(u,{"canvas-id":"wd-img-cropper-canvas",id:"wd-img-cropper-canvas",class:"wd-img-cropper__canvas","disable-scroll":!0,style:r(`width: ${Number(J.value)*U.value}px; height: ${Number(K.value)*U.value}px;`)},null,8,["style"]),c(l,{class:"wd-img-cropper__footer"},{default:i((()=>[e.disabledRotate?d("",!0):(o(),s(x,{key:0,name:"rotate",size:"24px",color:"#fff","data-eventsync":"true",onClick:_e})),c(l,{class:"wd-img-cropper__footer--button"},{default:i((()=>[c(l,{class:"is-cancel",onClick:xe},{default:i((()=>[m(p(e.cancelButtonText||v(z)("cancel")),1)])),_:1}),c(y,{size:"small","custom-style":v(ie),onClick:ye},{default:i((()=>[m(p(e.confirmButtonText||v(z)("confirm")),1)])),_:1},8,["custom-style"])])),_:1})])),_:1})])),_:1},8,["class","style"])):d("",!0)}}});const P={setAnimation:function(e,a,l){if(e)var t=l.setTimeout((function(){l.callMethod("revertIsAnimation",!1),l.clearTimeout(t)}),300)}},R=e=>{e.$wxs||(e.$wxs=[]),e.$wxs.push("animation"),e.mixins||(e.mixins=[]),e.mixins.push({beforeCreate(){this.animation=P}})};R(F);const A=j(F,[["__scopeId","data-v-2ae6d34b"]]),B=j(e({__name:"Index",setup(e){const l=a(""),t=a(""),u=a(!1);function n(){M({count:1,success:e=>{const a=e.tempFilePaths[0];l.value=a,u.value=!0}})}function r(e){const{tempFilePath:a}=e;t.value=a}function v(e){console.log("加载失败",e)}function p(e){console.log("加载成功",e)}function g(e){console.log("取消",e)}return(e,a)=>{const f=w(_("wd-img-cropper"),A),x=w(_("wd-icon"),V),y=h,b=w(_("wd-img"),Y),S=w(_("demo-block"),z),M=w(_("page-wraper"),q);return o(),s(M,null,{default:i((()=>[c(S,{title:"基本用法",style:{"text-align":"center"}},{default:i((()=>[c(f,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=e=>u.value=e),"img-src":l.value,onConfirm:r,onCancel:g,onImgloaderror:v,onImgloaded:p},null,8,["modelValue","img-src"]),c(y,{class:"profile"},{default:i((()=>[t.value?d("",!0):(o(),s(y,{key:0,class:"img",onClick:n},{default:i((()=>[c(x,{name:"fill-camera","custom-class":"img-icon"})])),_:1})),t.value?(o(),s(b,{key:1,round:"",width:"200px",height:"200px",src:t.value,mode:"aspectFit","custom-class":"profile-img",onClick:n},null,8,["src"])):d("",!0),c(y,{style:{"font-size":"14px"}},{default:i((()=>[m("点击上传头像")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-34a27984"]]);export{B as default};
