"use strict";(self["webpackChunkpocket"]=self["webpackChunkpocket"]||[]).push([[470],{3265:function(e,a,t){t.d(a,{Z:function(){return c}});var l=t(3151),o=t(1989),d=t(9670),n=t(2318);const u=["name","value","checked","disabled","required"],p=(0,l._)("span",{class:"ck-btn"},"✔",-1),r={class:"ck-lb"};var i={__name:"CCheckbox",props:{value:{type:String,required:!1},label:{type:String,required:!1},name:{type:String,required:!1},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},modelValue:{type:[Boolean,Array],required:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,i=a,s=(0,n.iH)(null),c=(0,l.Fl)({get(){return t.modelValue},set(e){i("update:modelValue",e)}});return(e,a)=>((0,l.wg)(),(0,l.iD)("label",{class:(0,o.C_)(["c-ck",{disabled:t.disabled}])},[(0,l.wy)((0,l._)("input",{ref_key:"checkboxInput",ref:s,class:"ck-in",type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),name:t.name,value:t.value,checked:t.checked,disabled:t.disabled,required:t.required},null,8,u),[[d.e8,c.value]]),p,(0,l._)("span",r,(0,o.zw)(t.label),1)],2))}};const s=i;var c=s},9638:function(e,a,t){t.d(a,{Z:function(){return c}});var l=t(3151),o=t(1989),d=t(9670),n=t(2318);const u=["checked","name","value","disabled","required"],p=(0,l._)("span",{class:"rd-btn"},null,-1),r={class:"rd-lb"};var i={__name:"CRadio",props:{value:{type:String,required:!1},label:{type:String,required:!1},name:{type:String,required:!1},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},modelValue:{type:String,required:!1}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,i=a,s=(0,n.iH)(null),c=(0,l.Fl)({get(){return t.modelValue},set(e){i("update:modelValue",e)}});return(e,a)=>((0,l.wg)(),(0,l.iD)("label",{class:(0,o.C_)(["c-rd",{disabled:t.disabled}])},[(0,l.wy)((0,l._)("input",{ref_key:"radioInput",ref:s,class:"rd-in",type:"radio","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),checked:t.checked,name:t.name,value:t.value,disabled:t.disabled,required:t.required},null,8,u),[[d.G2,c.value]]),p,(0,l._)("span",r,(0,o.zw)(t.label),1)],2))}};const s=i;var c=s},2860:function(e,a,t){t.d(a,{Z:function(){return c}});var l=t(3151);const o=e=>((0,l.dD)("data-v-9a07048e"),e=e(),(0,l.Cn)(),e),d={class:"parting-line"},n=o((()=>(0,l._)("div",{class:"line"},null,-1))),u=["innerHTML"],p=o((()=>(0,l._)("div",{class:"line"},null,-1)));var r={__name:"PartingLine",props:{text:{type:String,default:""}},setup(e){const a=e,t=(0,l.Fl)((()=>""!=a.text?"&nbsp;"+a.text+"&nbsp;":""));return(e,a)=>((0,l.wg)(),(0,l.iD)("div",d,[n,(0,l._)("div",{class:"text",innerHTML:t.value},null,8,u),p]))}},i=t(5052);const s=(0,i.Z)(r,[["__scopeId","data-v-9a07048e"]]);var c=s},8470:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var l=t(3151),o=t(2860),d=t(9638),n=t(3265);const u=e=>((0,l.dD)("data-v-5a9068fe"),e=e(),(0,l.Cn)(),e),p={id:"component-preview"},r=(0,l.uE)('<div class="cp-box" data-v-5a9068fe><button data-v-5a9068fe>button</button><button class="error" data-v-5a9068fe>.error</button><button class="success" data-v-5a9068fe>.success</button><button class="outline" data-v-5a9068fe>.outline</button><button class="focus" data-v-5a9068fe>.focus</button><button class="primary" data-v-5a9068fe>.primary</button><span data-v-5a9068fe>|</span><div class="btn" data-v-5a9068fe>div.btn</div><a href="javascript:void(0)" class="btn" data-v-5a9068fe>a.btn</a></div>',1),i=u((()=>(0,l._)("div",{class:"cp-box"},[(0,l._)("button",{disabled:""},"[disabled]"),(0,l._)("span",null,"|"),(0,l._)("button",{class:"load"},".load"),(0,l._)("button",{class:"load_r"},".load_r")],-1))),s={class:"cp-box"},c={class:"cp-box"},v=(0,l.uE)('<label data-v-5a9068fe> 下拉框 <select data-v-5a9068fe><option value="" selected data-v-5a9068fe>--- 请选择 ---</option><option value="A" data-v-5a9068fe>测试文字 A</option><option value="B" data-v-5a9068fe>测试文字 B</option><option value="C" disabled data-v-5a9068fe>测试文字 C 禁用</option></select></label><label data-v-5a9068fe> 分组下拉框 <select data-v-5a9068fe><optgroup label="常见宠物" data-v-5a9068fe><option value="dog" data-v-5a9068fe>狗</option><option value="cat" data-v-5a9068fe>猫</option><option value="hamster" data-v-5a9068fe>仓鼠</option></optgroup><optgroup label="飞宠" disabled data-v-5a9068fe><option value="鹦鹉" data-v-5a9068fe>鹦鹉</option><option value="金刚鹦鹉" data-v-5a9068fe>金刚鹦鹉</option><option value="信天翁" data-v-5a9068fe>信天翁</option></optgroup></select></label><br data-v-5a9068fe><label data-v-5a9068fe> 分组下拉框（多选） <select multiple size="5" data-v-5a9068fe><optgroup label="常见宠物" data-v-5a9068fe><option value="dog" data-v-5a9068fe>狗</option><option value="cat" data-v-5a9068fe>猫</option><option value="hamster" data-v-5a9068fe>仓鼠</option></optgroup><optgroup label="飞宠" data-v-5a9068fe><option value="鹦鹉" data-v-5a9068fe>鹦鹉</option><option value="金刚鹦鹉" data-v-5a9068fe>金刚鹦鹉</option><option value="信天翁" data-v-5a9068fe>信天翁</option></optgroup></select></label>',4),f=(0,l.uE)('<input type="reset" value="重置" data-v-5a9068fe><input type="button" value="按钮" data-v-5a9068fe><input type="range" placeholder="拖动条" data-v-5a9068fe><input type="color" placeholder="颜色选择器" data-v-5a9068fe><input type="text" placeholder="文本" autocomplete="username" data-v-5a9068fe><input type="password" placeholder="密码" autocomplete="current-password" data-v-5a9068fe><input type="search" placeholder="搜索框" data-v-5a9068fe><input type="number" placeholder="数字" data-v-5a9068fe><input type="url" placeholder="url 地址" data-v-5a9068fe><input type="date" placeholder="年月日" data-v-5a9068fe><input type="month" placeholder="年月" data-v-5a9068fe><input type="time" placeholder="时间" data-v-5a9068fe><input type="datetime-local" placeholder="年月日时间" data-v-5a9068fe><input type="hidden" name="hidden" placeholder="这里显示一些隐藏的内容" data-v-5a9068fe><br data-v-5a9068fe><input type="file" placeholder="file" data-v-5a9068fe><textarea cols="30" rows="10" placeholder="多行文本框" data-v-5a9068fe></textarea>',17);var b={__name:"ComponentPreview",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(o.Z,{text:"普通按钮"}),r,(0,l.Wm)(o.Z,{text:"按钮状态"}),i,(0,l.Wm)(o.Z,{text:"选择框"}),(0,l._)("div",s,[(0,l.Wm)(d.Z,{value:"js",label:"前端-组1",name:"text",checked:""}),(0,l.Wm)(d.Z,{value:"java",label:"后端-组1",name:"text"}),(0,l.Wm)(n.Z,{label:"html",value:"html"}),(0,l.Wm)(n.Z,{label:"css",value:"css"}),(0,l.Wm)(n.Z,{label:"js",value:"js"})]),(0,l.Wm)(o.Z,{text:"select 选择器"}),(0,l._)("form",c,[v,(0,l.Wm)(o.Z,{text:"表单"}),f])]))}},m=t(5052);const y=(0,m.Z)(b,[["__scopeId","data-v-5a9068fe"]]);var h=y}}]);