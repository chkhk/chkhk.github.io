"use strict";(self["webpackChunkpocket"]=self["webpackChunkpocket"]||[]).push([[360],{250:function(e,l,t){t.d(l,{Z:function(){return p}});var a=t(3151),d=t(1989),n=t(9670),i=t(2318);const u=["name","value","checked","disabled","required"],s=(0,a._)("span",{class:"ck-btn"},"✔",-1),r={class:"ck-lb"};var o={__name:"CCheckbox",props:{value:{type:String,required:!1},label:{type:String,required:!1},name:{type:String,required:!1},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},modelValue:{type:[Boolean,Array],required:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,o=l,c=(0,i.iH)(null),p=(0,a.Fl)({get(){return t.modelValue},set(e){o("update:modelValue",e)}});return(e,l)=>((0,a.wg)(),(0,a.iD)("label",{class:(0,d.C_)(["c-ck",{disabled:t.disabled}])},[(0,a.wy)((0,a._)("input",{ref_key:"checkboxInput",ref:c,class:"ck-in",type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e),name:t.name,value:t.value,checked:t.checked,disabled:t.disabled,required:t.required},null,8,u),[[n.e8,p.value]]),s,(0,a._)("span",r,[(0,a.Uk)((0,d.zw)(t.label)+" ",1),(0,a.WI)(e.$slots,"default")])],2))}};const c=o;var p=c},5151:function(e,l,t){t.d(l,{Z:function(){return p}});var a=t(3151),d=t(1989),n=t(9670),i=t(2318);const u=["checked","name","value","disabled","required"],s=(0,a._)("span",{class:"rd-btn"},null,-1),r={class:"rd-lb"};var o=Object.assign({inheritAttrs:!0},{__name:"CRadio",props:{value:{type:String,required:!1},label:{type:String,required:!1},name:{type:String,required:!1},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},modelValue:{type:String,required:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,o=l,c=(0,i.iH)(null),p=(0,a.Fl)({get(){return t.modelValue},set(e){o("update:modelValue",e)}});return(e,l)=>((0,a.wg)(),(0,a.iD)("label",{class:(0,d.C_)(["c-rd",{disabled:t.disabled}])},[(0,a.wy)((0,a._)("input",{ref_key:"radioInput",ref:c,class:"rd-in",type:"radio","onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e),checked:t.checked,name:t.name,value:t.value,disabled:t.disabled,required:t.required},null,8,u),[[n.G2,p.value]]),s,(0,a._)("span",r,[(0,a.Uk)((0,d.zw)(t.label)+" ",1),(0,a.WI)(e.$slots,"default")])],2))}});const c=o;var p=c},5165:function(e,l,t){t.d(l,{Z:function(){return p}});var a=t(3151),d=t(1989),n=t(9670),i=t(2318);const u=["checked","name","value","disabled","required"],s=(0,a._)("span",{class:"rd-btn-check"},null,-1),r={class:"rd-lb"};var o=Object.assign({inheritAttrs:!0},{__name:"CRadioButton",props:{value:{type:String,required:!1},label:{type:String,required:!1},name:{type:String,required:!1},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},modelValue:{type:String,required:!1},group:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,o=l,c=(0,i.iH)(null),p=(0,a.Fl)({get(){return t.modelValue},set(e){o("update:modelValue",e)}});return(e,l)=>((0,a.wg)(),(0,a.iD)("label",{class:(0,d.C_)(["c-rd c-rd-btn btn primary",{disabled:t.disabled,"c-rd-btn-group":t.group}])},[(0,a.wy)((0,a._)("input",{ref_key:"radioInput",ref:c,class:"rd-in",type:"radio","onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e),checked:t.checked,name:t.name,value:t.value,disabled:t.disabled,required:t.required},null,8,u),[[n.G2,p.value]]),s,(0,a._)("span",r,[(0,a.Uk)((0,d.zw)(t.label)+" ",1),(0,a.WI)(e.$slots,"default")])],2))}});const c=o;var p=c},9360:function(e,l,t){t.r(l),t.d(l,{default:function(){return T}});t(7495);var a=t(3151),d=t(1989),n=t(9670),i=t(2318);const u={flexDirection:{values:{row:{text:"主轴方向与文本方向相同。",disabled:!1},"row-reverse":{text:"表现和 <code>row</code> 相同，但是颠倒了起点和终点。",disabled:!1},column:{text:"主轴方向与 <code>display: block;</code> 块级元素的方向相同。",disabled:!1},"column-reverse":{text:"表现和 <code>column</code> 相同，但是颠倒了起点和终点。",disabled:!1}},styleName:"flex-direction",text:"主轴排列方向",default:"row",active:"row"},flexWrap:{values:{nowrap:{text:"子元素不允许换行。",disabled:!1},wrap:{text:"子元素可以换行。",disabled:!1},"wrap-reverse":{text:"子元素可以换行，且主轴方向排列顺序不变，但是交叉轴方向颠倒，类似于： <code>flex-wrap: wrap; align-items: flex-end; align-content: flex-end;</code> 时的效果。",disabled:!1}},styleName:"flex-wrap",text:"换行方式",default:"nowrap",active:"nowrap"},justifyContent:{values:{"flex-start":{text:"子元素从主轴开始侧开始紧密地排列。",disabled:!1},"flex-end":{text:"子元素从主轴结束侧开始紧密地排列。",disabled:!1},center:{text:"子元素在每行中点居中排列。",disabled:!1},"space-between":{text:"相邻子元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。",disabled:!1},"space-around":{text:"相邻子元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。",disabled:!1},"space-evenly":{text:"相邻子元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离也与相邻元素之间的距离相等。",disabled:!1}},styleName:"justify-content",text:"主轴方向子元素的分布模式",default:"flex-start",active:"flex-start"},alignItems:{values:{"flex-start":{text:"将子元素与主轴起点或交叉轴起点对齐。",disabled:!1},"flex-end":{text:"将子元素与主轴末端或交叉轴末端对齐。",disabled:!1},center:{text:"将子元素在交叉轴上居中分布。如果子元素可换行，则在所属每一行的交叉轴中点居中分布。",disabled:!1},baseline:{text:"将子元素与它们的容器基线（文字 baseline）对齐。距离其交叉轴起点和基线之间最远的元素与行的交叉轴起点对齐。",disabled:!1},stretch:{text:"如果（多个）子元素的组合大小小于容器的大小，将其中允许自动调整大小的元素将等量增大，以填满容器，同时保持这些子元素的宽高比。",disabled:!1}},styleName:"align-items",text:"交叉轴方向子元素的位置",default:"flex-start",active:"flex-start"},alignContent:{values:{"flex-start":{text:"所有行从垂直轴起点开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。",disabled:!1},"flex-end":{text:"所有行从垂直轴末尾开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。",disabled:!1},center:{text:"所有行朝向容器的中心填充。每行互相紧挨，相对于容器居中对齐。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。",disabled:!1},"space-between":{text:"所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。",disabled:!1},"space-around":{text:"所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。",disabled:!1},"space-evenly":{text:"所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。",disabled:!1}},styleName:"align-content",text:"交叉轴方向子元素的分布模式",default:"flex-start",active:"flex-start"}};var s=t(4831),r=t(8113),o=t(1983),c=()=>{(0,a.wF)((()=>{o.u.emit(o.F.fullWidth,!0)})),(0,a.Jd)((()=>{o.u.emit(o.F.fullWidth,!1)}))},p=(t(5151),t(5165)),v=t(250),x=t(1870);const b=e=>((0,a.dD)("data-v-027e176d"),e=e(),(0,a.Cn)(),e),f={id:"flex-preview"},m={class:"flex-header"},y=b((()=>(0,a._)("div",{class:"f-c"},[(0,a._)("h1",null,"Flex 演示")],-1))),_=["id","idText","onClick"],g={class:"flex-parent-props"},h={class:"props-header"},k=b((()=>(0,a._)("h2",null,"父元素 Style",-1))),w=b((()=>(0,a._)("code",null,"display: flex",-1))),q=b((()=>(0,a._)("div",{class:"f-c"},"|",-1))),V=b((()=>(0,a._)("code",null,"gap: ",-1))),C=["disabled"],H=b((()=>(0,a._)("code",null," px",-1))),S=["value"],B={class:"style-box"},U=["innerHTML"],D=["title"],F={class:"style-item-content"},W=b((()=>(0,a._)("div",{class:"flex-child-props"},[(0,a._)("h2",null,"子元素 Style"),(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("label",{for:"childStyleText"},[(0,a._)("h3",null,"子元素 #1")]),(0,a._)("br"),(0,a._)("input",{type:"text",name:"childStyleText",id:"childStyleText",readonly:""})])])],-1)));var j={__name:"FlexBox",setup(e){c();const l=(0,i.iH)(null),t=(0,i.iH)(!1),o=(0,i.iH)(!1);let b=(0,i.qj)(u);(0,i.iH)({});const j=[50,100,150],Z=(0,i.qj)(M()),I=((0,i.iH)(""),(0,i.iH)({}),(0,i.iH)(""));(0,i.iH)("");(0,a.YP)(b,(e=>{N(e)}));const T=(0,a.YP)(o,(()=>{N(b),(0,a.Y3)((()=>{T()}))}));function N(e){for(const t in e)l.value.style[t]=e[t].active;I.value=l.value.getAttribute("style")}const Y=(0,a.Fl)((()=>{const e="display: flex; "+I.value.replace(/height:[^;]*;{1}|width:[^;]*;{1}/g," ");return o.value?e.replace(/\s{2,}/g," "):""})),z=(0,i.iH)(5),A=(0,a.Fl)({set(e){z.value=e<0?0:e>20?20:e,(0,a.Y3)((()=>{I.value=l.value.getAttribute("style")}))},get(){return z.value}});function $(){return j[Math.floor(Math.random()*j.length)]}function M(){const e=[];for(let l=0;l<10;l++){const t={id:`item${l}`,text:`#${l}`,width:$(),height:$(),color:(0,s.x)()};e.push(t)}return e}const K=(0,i.iH)("");function G(e){const l=e.target,t=l.name,a=l.value;K.value=u[t].text+"："+u[t].values[a].text}function L(){r.Z.go(0)}return(0,a.bv)((()=>{document.getElementsByName("alignContent")})),(e,u)=>{const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",m,[y,(0,a._)("div",null,[(0,a._)("button",{onClick:L,class:"outline"},"重置"),(0,a.Wm)(s,{to:"/",class:"btn outline"},{default:(0,a.w5)((()=>[(0,a.Uk)("首页")])),_:1})])]),(0,a.wy)((0,a._)("div",{ref_key:"flexBox",ref:l,class:(0,d.C_)(["flex-box",{useFlex:o.value}]),style:(0,d.j5)({gap:A.value+"px"})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(Z,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,id:e.id,class:(0,d.C_)(["flex-item",{"flex-item-active":e.active}]),idText:e.text,style:(0,d.j5)({width:e.width+"px",height:e.height+"px",backgroundColor:e.color}),onClick:l=>e.active=!e.active}," 文字 ",14,_)))),128))],6),[[n.F8,!t.value]]),(0,a.Wm)(x.Z),(0,a._)("div",g,[(0,a._)("div",h,[k,(0,a.Wm)(v.Z,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=e=>o.value=e),name:"enable-flex"},{default:(0,a.w5)((()=>[w])),_:1},8,["modelValue"]),q,(0,a._)("div",null,[V,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":u[1]||(u[1]=e=>A.value=e),type:"number",min:"0",max:"20",disabled:!o.value},null,8,C),[[n.nr,A.value]]),H])]),(0,a._)("div",null,[(0,a._)("input",{type:"text",name:"parentStyleText",value:Y.value,readonly:""},null,8,S)]),(0,a._)("div",B,[(0,a._)("p",{class:"parent-tip",innerHTML:K.value},null,8,U),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(b),((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"style-item",key:l},[(0,a._)("h3",{title:e.text},[(0,a._)("code",null,(0,d.zw)(e.styleName)+":",1),(0,a.Uk)("   "),"alignContent"===l?((0,a.wg)(),(0,a.iD)("span",{key:0,class:"align-tips",title:"当 flex-warp 为 nowrap 时，该属性将会被忽略",onClick:u[2]||(u[2]=e=>K.value=e.target.title)},"!")):(0,a.kq)("",!0)],8,D),(0,a._)("div",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.values,((t,n,i)=>((0,a.wg)(),(0,a.j4)(p.Z,{key:n,modelValue:e.active,"onUpdate:modelValue":l=>e.active=l,name:l,value:n,checked:n===e.default,disabled:!o.value||t.disabled,title:t.text,position:0===i?"left":"center",group:!0,onChange:G},{default:(0,a.w5)((()=>[(0,a._)("code",null,(0,d.zw)(n),1)])),_:2},1032,["modelValue","onUpdate:modelValue","name","value","checked","disabled","title","position"])))),128))])])))),128))])]),(0,a.Wm)(x.Z),W])}}},Z=t(5052);const I=(0,Z.Z)(j,[["__scopeId","data-v-027e176d"]]);var T=I}}]);