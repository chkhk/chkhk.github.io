"use strict";(self["webpackChunkpocket"]=self["webpackChunkpocket"]||[]).push([[520],{2520:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(3151),l=a(1989),s=a(2318);const i={id:"event-keycodes"},o={class:"key-box f-c"},c={key:0,class:"key"},y={key:1,class:"key"},k={key:2,class:"key"},d={class:"key"},v={key:0,class:"small-tip"},r={key:1,class:"small-tip"},w={key:2,class:"small-tip"},u={class:"key-info f-c"},m={class:"key-name"},f={class:"key-value"};var K={__name:"EventKeycodes",setup(e){const t=(0,s.qj)([{name:"key",text:"按键名",value:""},{name:"code",text:"按键对应字符",value:""},{name:"keyCode",text:"按键码",value:""},{name:"location",text:"按键位置",value:""},{name:"altKey",text:"Alt 是否按下",value:""},{name:"ctrlKey",text:"Ctrl 是否按下",value:""},{name:"shiftKey",text:"Shift 是否按下",value:""},{name:"metaKey",text:"Meta 媒体键）是否按下",value:""}]),a=(0,s.qj)({altKey:!1,ctrlKey:!1,shiftKey:!1,key:"",location:0});function K(e){let n="";switch(e.key){case" ":n="空格";break;case"Control":n="Ctrl";break;default:n=e.key;break}a.altKey="Alt"!==e.key&&e.altKey,a.ctrlKey="Control"!==e.key&&e.ctrlKey,a.shiftKey="Shift"!==e.key&&e.shiftKey,a.location=e.location,a.key=n.replace(/\w/,(e=>e.toUpperCase())),t.forEach((t=>{t.value=e[t.name]}))}function p(e){console.dir(e)}return(0,n.bv)((()=>{window.addEventListener("keydown",K),window.addEventListener("contextmenu",p),window.addEventListener("mousedown",p)})),(0,n.Jd)((()=>{window.removeEventListener("keydown",K),window.removeEventListener("contextmenu",p),window.removeEventListener("mousedown",p)})),(e,s)=>((0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",o,[a.ctrlKey?((0,n.wg)(),(0,n.iD)("div",c,"Ctrl")):(0,n.kq)("",!0),a.altKey?((0,n.wg)(),(0,n.iD)("div",y,"Alt")):(0,n.kq)("",!0),a.shiftKey?((0,n.wg)(),(0,n.iD)("div",k,"Shift")):(0,n.kq)("",!0),(0,n._)("div",d,[1==a.location?((0,n.wg)(),(0,n.iD)("span",v,"L. ")):(0,n.kq)("",!0),2==a.location?((0,n.wg)(),(0,n.iD)("span",r,"R. ")):(0,n.kq)("",!0),3==a.location?((0,n.wg)(),(0,n.iD)("span",w,"Nub. ")):(0,n.kq)("",!0),(0,n._)("span",null,(0,l.zw)(a.key),1)])]),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"f-c"},[(0,n._)("div",m,(0,l.zw)(e.text)+"（"+(0,l.zw)(e.name)+"）：",1),(0,n._)("div",f,(0,l.zw)(e.value),1)])))),128))])]))}},p=a(5052);const h=(0,p.Z)(K,[["__scopeId","data-v-37125556"]]);var x=h}}]);