if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const c=s=>l(s,r),o={module:{uri:r},exports:u,require:c};e[r]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(i(...s),u)))}}define(["./workbox-543c38d3"],(function(s){"use strict";s.setCacheNameDetails({prefix:"pocket"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/404-refresh.html",revision:"e845b273223f11b4fe59b8223bba8807"},{url:"/assets/css/162.edb996ff.css",revision:null},{url:"/assets/css/209.e92086cf.css",revision:null},{url:"/assets/css/214.ed5827e9.css",revision:null},{url:"/assets/css/231.38f194ce.css",revision:null},{url:"/assets/css/242.7ccd7141.css",revision:null},{url:"/assets/css/277.bf5182a4.css",revision:null},{url:"/assets/css/282.060b837d.css",revision:null},{url:"/assets/css/30.fd074c7b.css",revision:null},{url:"/assets/css/509.6d95c7b2.css",revision:null},{url:"/assets/css/539.d2fd3a0d.css",revision:null},{url:"/assets/css/581.47136f56.css",revision:null},{url:"/assets/css/598.c8c927fd.css",revision:null},{url:"/assets/css/613.028a8416.css",revision:null},{url:"/assets/css/654.865fa141.css",revision:null},{url:"/assets/css/677.676a2828.css",revision:null},{url:"/assets/css/702.ec96c6fe.css",revision:null},{url:"/assets/css/876.e01b4267.css",revision:null},{url:"/assets/css/919.2796ff22.css",revision:null},{url:"/assets/css/938.4035fe0b.css",revision:null},{url:"/assets/css/972.0b0d7cb6.css",revision:null},{url:"/assets/css/home.2886baf6.css",revision:null},{url:"/assets/css/index.069fc135.css",revision:null},{url:"/assets/fonts/iconfont.18985fe3.ttf",revision:null},{url:"/assets/fonts/iconfont.63ec8d5f.woff",revision:null},{url:"/assets/fonts/iconfont.69d02115.woff2",revision:null},{url:"/assets/img/wl.be143258.png",revision:null},{url:"/assets/img/wl2.b6ad2683.png",revision:null},{url:"/assets/js/162.5306eb11.js",revision:null},{url:"/assets/js/209.48d61212.js",revision:null},{url:"/assets/js/214.a30af940.js",revision:null},{url:"/assets/js/231.0f6f58c4.js",revision:null},{url:"/assets/js/242.1259cf13.js",revision:null},{url:"/assets/js/277.e409f439.js",revision:null},{url:"/assets/js/282.79163eb4.js",revision:null},{url:"/assets/js/30.00f8028e.js",revision:null},{url:"/assets/js/509.6cde4afb.js",revision:null},{url:"/assets/js/539.de632cd8.js",revision:null},{url:"/assets/js/581.08580b6f.js",revision:null},{url:"/assets/js/598.232b595a.js",revision:null},{url:"/assets/js/613.388852cf.js",revision:null},{url:"/assets/js/654.bb13b023.js",revision:null},{url:"/assets/js/677.00874225.js",revision:null},{url:"/assets/js/702.9f5f5d30.js",revision:null},{url:"/assets/js/876.c50f3af0.js",revision:null},{url:"/assets/js/919.061c94d7.js",revision:null},{url:"/assets/js/938.b0b9cdee.js",revision:null},{url:"/assets/js/972.441e35aa.js",revision:null},{url:"/assets/js/chunk-vendors.25dbf5a8.js",revision:null},{url:"/assets/js/home.9c0e69b6.js",revision:null},{url:"/assets/js/index.65a6e386.js",revision:null},{url:"/config/icons/default.png",revision:"0c220db746ab70660cc02b957c8a5c63"},{url:"/config/icons/default.svg",revision:"c25bf13dc383bdeb0c80506c9660dfbe"},{url:"/config/icons/default192.png",revision:"61f22958c26401c65ee4a8ad434604e7"},{url:"/config/icons/default512.png",revision:"8d3a4751bbb0d76957cbc670c52bfb3a"},{url:"/config/icons/maskable192.png",revision:"c17bdc60467b5fe4ea508724412b6f42"},{url:"/config/icons/maskable512.png",revision:"91cff9575d9047e0e581da9029709daf"},{url:"/config/manifest.json",revision:"2550af8ad70da07d63d628f96235e160"},{url:"/home.html",revision:"e06c7e7024bec9ae90acd5ce4f7b4212"},{url:"/index.html",revision:"401a2f8ee37e267abcf398e1817e4df1"}],{})}));
