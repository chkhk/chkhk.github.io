if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,c)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const l=s=>i(s,r),a={module:{uri:r},exports:o,require:l};e[r]=Promise.all(n.map((s=>a[s]||l(s)))).then((s=>(c(...s),o)))}}define(["./workbox-543c38d3"],(function(s){"use strict";s.setCacheNameDetails({prefix:"pocket"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/404-refresh.html",revision:"fe413d9ee60548e9928f477a1f749629"},{url:"/assets/css/538.efc80b3d.css",revision:null},{url:"/assets/css/app.dd964f74.css",revision:null},{url:"/assets/css/chunk-vendors.0037e5be.css",revision:null},{url:"/assets/js/359.cc4a7e84.js",revision:null},{url:"/assets/js/538.cacc8060.js",revision:null},{url:"/assets/js/584.105ebca8.js",revision:null},{url:"/assets/js/app.6d7def90.js",revision:null},{url:"/assets/js/chunk-vendors.e7b14619.js",revision:null},{url:"/config/icons/default.png",revision:"0c220db746ab70660cc02b957c8a5c63"},{url:"/config/icons/default.svg",revision:"1cb67c01cce965082a52a314424f876a"},{url:"/config/icons/maskable192.png",revision:"8070676cf8f466a3c97195ea467b1ca5"},{url:"/config/icons/maskable512.png",revision:"6b5b7244abb0c580142e2c2affa09d39"},{url:"/config/manifest.json",revision:"bd3ab2f692529587a0deebab276c3f29"},{url:"/index.html",revision:"8047bffdbc441c56a7a627fb73faba54"},{url:"/robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"}],{})}));
