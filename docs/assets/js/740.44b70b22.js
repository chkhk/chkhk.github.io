"use strict";(self["webpackChunkpocket"]=self["webpackChunkpocket"]||[]).push([[740],{9740:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(3151),s=a(1989),n=a(2318);const i={id:"event-keycodes"},c={class:"key-box f-c"},y={key:0,class:"key"},k={key:1,class:"key"},o={key:2,class:"key"},v={class:"key"},r={key:0,class:"small-tip"},d={key:1,class:"small-tip"},u={key:2,class:"small-tip"},w={class:"key-info f-c"},f={class:"key-name"},K={class:"key-value"};var m={__name:"EventKeycodes",setup(e){const t=(0,n.qj)([{name:"key",text:"按键名",value:""},{name:"code",text:"按键对应字符",value:""},{name:"keyCode",text:"按键码",value:""},{name:"location",text:"按键位置",value:""},{name:"altKey",text:"Alt 是否按下",value:""},{name:"ctrlKey",text:"Ctrl 是否按下",value:""},{name:"shiftKey",text:"Shift 是否按下",value:""},{name:"metaKey",text:"Meta 媒体键）是否按下",value:""}]),a=(0,n.qj)({altKey:!1,ctrlKey:!1,shiftKey:!1,key:"",location:0});function m(e){let l="";switch(e.key){case" ":l="空格";break;case"Control":l="Ctrl";break;default:l=e.key;break}a.altKey="Alt"!==e.key&&e.altKey,a.ctrlKey="Control"!==e.key&&e.ctrlKey,a.shiftKey="Shift"!==e.key&&e.shiftKey,a.location=e.location,a.key=l.replace(/\w/,(e=>e.toUpperCase())),t.forEach((t=>{t.value=e[t.name]}))}return(0,l.bv)((()=>{window.addEventListener("keydown",m)})),(0,l.Jd)((()=>{window.removeEventListener("keydown",m)})),(e,n)=>((0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",c,[a.ctrlKey?((0,l.wg)(),(0,l.iD)("div",y,"Ctrl")):(0,l.kq)("",!0),a.altKey?((0,l.wg)(),(0,l.iD)("div",k,"Alt")):(0,l.kq)("",!0),a.shiftKey?((0,l.wg)(),(0,l.iD)("div",o,"Shift")):(0,l.kq)("",!0),(0,l._)("div",v,[1==a.location?((0,l.wg)(),(0,l.iD)("span",r,"L. ")):(0,l.kq)("",!0),2==a.location?((0,l.wg)(),(0,l.iD)("span",d,"R. ")):(0,l.kq)("",!0),3==a.location?((0,l.wg)(),(0,l.iD)("span",u,"Nub. ")):(0,l.kq)("",!0),(0,l._)("span",null,(0,s.zw)(a.key),1)])]),(0,l._)("div",w,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t,class:"f-c"},[(0,l._)("div",f,(0,s.zw)(e.text)+"（"+(0,s.zw)(e.name)+"）：",1),(0,l._)("div",K,(0,s.zw)(e.value),1)])))),128))])]))}},p=a(5052);const h=(0,p.Z)(m,[["__scopeId","data-v-4e8b8704"]]);var x=h}}]);