"use strict";(self["webpackChunkpocket"]=self["webpackChunkpocket"]||[]).push([[326],{4326:function(a,e,n){n.r(e),n.d(e,{default:function(){return _}});var c=n(3151),s=n(1989),t=n(2318);const i=a=>((0,c.dD)("data-v-b9711480"),a=a(),(0,c.Cn)(),a),l={id:"dad-jokes",class:"f-c"},o={class:"joke-box f-c-c"},d=i((()=>(0,c._)("h1",null,"不要笑挑战",-1))),u={class:"f-c"},v={key:0,class:"joke-loading font_family icon-loading_line"},r=["disabled"],k="https://icanhazdadjoke.com";var f={__name:"DadJokes",setup(a){const e=new Headers;e.append("Accept","application/json");const n=(0,t.iH)(!0),i=(0,t.iH)("");async function f(){return await fetch(k,{headers:e}).then((a=>a.json())).then((a=>a?.joke))}async function p(){if(n.value)return;i.value="",n.value=!0;const a=await f();i.value=a||"获取随机玩笑失败",n.value=!1}return(0,c.bv)((()=>{n.value=!1,p()})),(a,e)=>((0,c.wg)(),(0,c.iD)("div",l,[(0,c._)("div",o,[d,(0,c._)("div",u,[n.value?((0,c.wg)(),(0,c.iD)("div",v)):(0,c.kq)("",!0),(0,c._)("div",null,(0,s.zw)(i.value),1)]),(0,c._)("div",{class:"another-btn",onClick:p,disabled:n.value}," 再来一个 ",8,r)])]))}},p=n(5052);const h=(0,p.Z)(f,[["__scopeId","data-v-b9711480"]]);var _=h}}]);