!function(){"use strict";const e=["client/client.4ac5d908.js","client/markmap.a4357258.js","client/index.fa5f3592.js","client/about.4e06a14e.js","client/usage.84dd8203.js","client/repl.7e5af1c3.js","client/codemirror.b489d986.js","client/markdown.ddd8275a.js","client/client.84f9da83.js"].concat(["service-worker-index.html","donate/alipay.svg","donate/paypal.svg","donate/qr_alipay.png","donate/qr_wechat.png","donate/wechat.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586924925372").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586924925372"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&t.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586924925372").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const n=await t.match(e.request);if(n)return n;throw a}}))))})}();
