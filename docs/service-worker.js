// 在 service-worker.js 中
self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('/CNAME')) {
    event.respondWith(new Response('chkhk.cn', {
      headers: {'Content-Type': 'text/plain'}  
    }));
  }
});
if (!self.define) { let e, s = {}; const i = (i, n) => (i = new URL(i + ".js", n).href, s[i] || new Promise((s => { if ("document" in self) { const e = document.createElement("script"); e.src = i, e.onload = s, document.head.appendChild(e) } else e = i, importScripts(i), s() })).then((() => { let e = s[i]; if (!e) throw new Error(`Module ${i} didn’t register its module`); return e }))); self.define = (n, c) => { const o = e || ("document" in self ? document.currentScript.src : "") || location.href; if (s[o]) return; let r = {}; const l = e => i(e, o), f = { module: { uri: o }, exports: r, require: l }; s[o] = Promise.all(n.map((e => f[e] || l(e)))).then((e => (c(...e), r))) } } define(["./workbox-543c38d3"], (function (e) { "use strict"; e.setCacheNameDetails({ prefix: "pocket" }), self.addEventListener("message", (e => { e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting() })), e.precacheAndRoute([{ url: "/404-refresh.html", revision: "fe413d9ee60548e9928f477a1f749629" }, { url: "/CNAME", revision: "6b269c28ca27546820443d5ead33bcbf" }, { url: "/assets/css/131.ed867784.css", revision: null }, { url: "/assets/css/app.f1b33995.css", revision: null }, { url: "/assets/css/chunk-vendors.0037e5be.css", revision: null }, { url: "/assets/img/favicon.e23a92a7.svg", revision: null }, { url: "/assets/js/131.2e7bfd5f.js", revision: null }, { url: "/assets/js/359.cc4a7e84.js", revision: null }, { url: "/assets/js/584.105ebca8.js", revision: null }, { url: "/assets/js/app.60ec76ce.js", revision: null }, { url: "/assets/js/chunk-vendors.e7b14619.js", revision: null }, { url: "/config/icons/apple_touch_icon_x192.png", revision: "00cf3a4a41ff244fc22a96003553bd51" }, { url: "/config/icons/favicon.svg", revision: "1cb67c01cce965082a52a314424f876a" }, { url: "/config/icons/icon_maskable_x192.png", revision: "03e5815260fbec5584ecf9ee6673e1cc" }, { url: "/config/icons/icon_maskable_x512.png", revision: "cd5b862ee991f5efc9798490fa4e9fc5" }, { url: "/config/icons/icon_x192.png", revision: "beffca1ca4bcfd3ee4e6bd5b4ae826ab" }, { url: "/config/icons/icon_x48.png", revision: "0c220db746ab70660cc02b957c8a5c63" }, { url: "/config/icons/icon_x512.png", revision: "aaad40f7035f2bd87c336efb638ee34e" }, { url: "/config/manifest.json", revision: "1189582ba815e450464cf77acc4aefc0" }, { url: "/index.html", revision: "c8a223c3e1d8e1a1f09a76049835a1e2" }, { url: "/robots.txt", revision: "f71d20196d4caf35b6a670db8c70b03d" }], {}) }));
