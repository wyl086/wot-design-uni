import{d as e,r as a,q as n,m as t,o,c as s,w as d,x as i,b as c,t as r,n as l,u,y as p,i as x,J as h,T as f,a as _,R as v,e as T,F as b,f as m,a5 as w,a3 as g,h as y,j as I}from"./index-3ce4de40.js";import{g as k,x as L,l as S,h as $,G as C,t as H,H as j,b as B,z as M,d as F,_ as G,a as Y}from"./page-wraper.87c317ef.js";import{u as q}from"./useChildren.4f3696ad.js";const z={...k,index:L([String,Number])},A={sticky:S(!1)},D=Symbol("wd-index-bar"),E=B(e({__name:"wd-index-anchor",props:z,setup(e){const f=e,{parent:_}=$(D),v=a(`indexBar${C()}`),{proxy:T}=h(),b=n((()=>_&&_.props.sticky&&_.anchorState.activeIndex===f.index));return t((()=>{H(_)&&_.anchorState.anchorList.push({top:0,index:f.index}),j(`#${v.value}`,!1,T).then((e=>{H(_)&&(_.anchorState.anchorList.find((e=>e.index===f.index)).top=Math.floor(e.top))}))})),(e,a)=>{const n=x;return o(),s(n,{class:l(`wd-index-anchor ${u(b)?"is-sticky":""} ${e.customClass}`),style:p(e.customStyle),id:v.value},{default:d((()=>[i(e.$slots,"default",{},(()=>[c(r(e.index),1)]),!0)])),_:3},8,["class","style","id"])}}}),[["__scopeId","data-v-38e6a771"]]),J=B(e({__name:"wd-index-bar",props:A,setup(e){const n=e,u=a(`indexBar${C()}`),{proxy:p}=h(),y=f({activeIndex:null,anchorList:[]}),{linkChildren:I}=q(D);I({props:n,anchorState:y});const k=f({scrollTop:0,prevScrollTop:0,touching:!1});let L=0,S={offsetTop:0,indexHeight:24};function $(e){if(k.touching)return;const{detail:a}=e,n=Math.floor(a.scrollTop),t=y.anchorList.find(((e,a)=>!H(y.anchorList[a+1])||e.top-L<=n&&y.anchorList[a+1].top-L>n));y.activeIndex!==t.index&&(y.activeIndex=t.index),k.prevScrollTop=n}function B(e){const a=e-S.offsetTop;let n=Math.floor(a/S.indexHeight);return n<0?n=0:n>y.anchorList.length-1&&(n=y.anchorList.length-1),y.anchorList[n]}function F(){k.touching=!0}function G(e){const a=e.touches[0].pageY;y.activeIndex!==B(a).index&&(y.activeIndex=B(a).index,z(B(a).top-L))}function Y(e){const a=e.changedTouches[0].pageY;y.activeIndex=B(a).index,z(B(a).top-L),M((()=>{k.touching=!1}))}function z(e){k.scrollTop===e?(k.scrollTop=k.prevScrollTop,w((()=>{k.scrollTop=e}))):k.scrollTop=e}return t((()=>{setTimeout((()=>{var e;y.activeIndex=null==(e=y.anchorList[0])?void 0:e.index,Promise.all([j(`#${u.value}`,!1,p),j(".wd-index-bar__sidebar",!1,p),j(".wd-index-bar__index",!1,p)]).then((([e,a,n])=>{L=e.top,S.offsetTop=a.top,S.indexHeight=n.height}))}),100)})),(e,a)=>{const n=g,t=x;return o(),s(t,{class:"wd-index-bar",id:u.value},{default:d((()=>[_(n,{scrollTop:k.scrollTop,"scroll-y":!0,class:"wd-index-bar__content",onScroll:$},{default:d((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["scrollTop"]),_(t,{class:"wd-index-bar__sidebar",onTouchstart:v(F,["stop","prevent"]),onTouchmove:v(G,["stop","prevent"]),onTouchend:v(Y,["stop","prevent"]),onTouchcancel:v(Y,["stop","prevent"])},{default:d((()=>[(o(!0),T(b,null,m(y.anchorList,(e=>(o(),s(t,{class:l(["wd-index-bar__index",{"is-active":e.index===y.activeIndex}]),key:e.index},{default:d((()=>[c(r(e.index),1)])),_:2},1032,["class"])))),128))])),_:1},8,["onTouchstart","onTouchmove","onTouchend","onTouchcancel"])])),_:3},8,["id"])}}}),[["__scopeId","data-v-f962a9f3"]]),N=B(e({__name:"Index",setup(e){const{show:n}=F(),t=a([{index:"A",data:["阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"]},{index:"B",data:["北京","白银","保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"]},{index:"C",data:["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德","郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"]},{index:"D",data:["大连","东莞","大理","丹东","大庆","大同","大兴安岭","德宏","德阳","德州","定西","迪庆","东营"]},{index:"E",data:["鄂尔多斯","恩施","鄂州"]},{index:"F",data:["福州","防城港","佛山","抚顺","抚州","阜新","阜阳"]},{index:"G",data:["广州","桂林","贵阳","甘南","赣州","甘孜","广安","广元","贵港","果洛"]},{index:"H",data:["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳","河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"]}]);return(e,a)=>{const i=y(I("wd-index-anchor"),E),c=y(I("wd-cell"),G),r=x,l=y(I("wd-index-bar"),J),u=y(I("page-wraper"),Y);return o(),s(u,null,{default:d((()=>[_(r,{class:"wraper"},{default:d((()=>[_(l,{sticky:""},{default:d((()=>[(o(!0),T(b,null,m(t.value,(e=>(o(),s(r,{key:e.index},{default:d((()=>[_(i,{index:e.index},null,8,["index"]),(o(!0),T(b,null,m(e.data,(a=>(o(),s(c,{border:"",clickable:"",key:a,title:a,onClick:t=>function(e,a){n(`当前点击项：${e}，城市：${a}`)}(e.index,a)},null,8,["title","onClick"])))),128))])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-b7f3c8d3"]]);export{N as default};
