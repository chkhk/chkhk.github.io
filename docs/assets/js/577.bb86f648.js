"use strict";(self["webpackChunkpocket"]=self["webpackChunkpocket"]||[]).push([[577],{2577:function(e,l,t){t.r(l),t.d(l,{default:function(){return _}});var a=t(3151),n=t(9670),c=t(1989),o=t(2318),s=t(5250);const i=e=>((0,a.dD)("data-v-53bba65c"),e=e(),(0,a.Cn)(),e),u={id:"random-choice",class:"f-c-c"},r=i((()=>(0,a._)("h3",null,"选项使用逗号隔开，按下回车开始随机选择",-1))),v={class:"text-box"},d=["onKeydown"],w={class:"box f-c"};var f={__name:"RandomChoicePicker",setup(e){const l=(0,o.iH)(""),t=(0,o.iH)(null);let i,f,m=0;function h(){if(b(),t.value.length<1)return;const e=[...t.value];i=window.setInterval((()=>{if(1===e.length){const l=e[0].classList;l.contains("active")?l.remove("active"):l.add("active")}else{let l=_(e.length-1);e[l].classList.add("active"),e[m].classList.remove("active"),m=l}}),100),f=window.setTimeout((()=>{window.clearInterval(i)}),2e3)}function _(e){let l=(0,s.MH)(0,e);return l===m&&(l=_(e)),l}function b(){window.clearInterval(i),window.clearTimeout(f),t.value&&t.value.length>0&&t.value[m]?.classList.remove("active")}(0,a.YP)(l,(()=>{b()}));const k=(0,a.Fl)((()=>l.value.match(/^\s*$/)?[]:l.value.split(/[,，]/).filter((e=>!e.match(/^\s*$/)))));return(0,a.Jd)((()=>{t.value=null,b()})),console.log(1),(e,o)=>((0,a.wg)(),(0,a.iD)("div",u,[r,(0,a._)("div",v,[(0,a._)("button",{class:"outline small",onClick:o[0]||(o[0]=e=>l.value="")},"重置"),(0,a._)("button",{class:"outline small",onClick:h},"随机"),(0,a.wy)((0,a._)("textarea",{cols:"30",rows:"5","onUpdate:modelValue":o[1]||(o[1]=e=>l.value=e),onKeydown:(0,n.D2)((0,n.iM)(h,["prevent"]),["enter"])},null,40,d),[[n.nr,l.value]])]),(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.value,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{key:l,ref_for:!0,ref_key:"allStr",ref:t,class:"str-box"},(0,c.zw)(e),1)))),128))])]))}},m=t(5052);const h=(0,m.Z)(f,[["__scopeId","data-v-53bba65c"]]);var _=h}}]);