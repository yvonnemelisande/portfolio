Object.freeze({initialize:function({modulePath:t=".",importFunctionName:e="__import__"}={}){try{self[e]=new Function("u","return import(u)")}catch(o){const n=new URL(t,location),i=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise((o,r)=>{const s=new URL(t,n);if(self[e].moduleMap[s])return o(self[e].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${e}.moduleMap['${s}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${t}`)),i(a)},onload(){o(self[e].moduleMap[s]),i(a)}});document.head.appendChild(a)}),self[e].moduleMap={}}}}).initialize({modulePath:"scripts/"}),function(){if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document;o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(n(window,"resize",this._checkForIntersections,!0),n(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),o=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(n){var i=n.element,s=r(i),c=this._rootContainsTarget(i),a=n.entry,h=t&&c&&this._computeTargetAndRootIntersection(i,o),u=n.entry=new e({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:o,intersectionRect:h});a?t&&c?this._hasCrossedThreshold(a,u)&&this._queuedEntries.push(u):a&&a.isIntersecting&&this._queuedEntries.push(u):this._queuedEntries.push(u)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,o){if("none"!=window.getComputedStyle(e).display){for(var n,i,s,a,h,u,l,d,p=r(e),f=c(e),m=!1;!m;){var g=null,v=1==f.nodeType?window.getComputedStyle(f):{};if("none"==v.display)return;if(f==this.root||f==t?(m=!0,g=o):f!=t.body&&f!=t.documentElement&&"visible"!=v.overflow&&(g=r(f)),g&&(n=g,i=p,s=void 0,a=void 0,h=void 0,u=void 0,l=void 0,d=void 0,s=Math.max(n.top,i.top),a=Math.min(n.bottom,i.bottom),h=Math.max(n.left,i.left),u=Math.min(n.right,i.right),d=a-s,!(p=(l=u-h)>=0&&d>=0&&{top:s,bottom:a,left:h,right:u,width:l,height:d})))break;f=c(f)}return p}},o.prototype._getRootRect=function(){var e;if(this.root)e=r(this.root);else{var o=t.documentElement,n=t.body;e={top:0,left:0,right:o.clientWidth||n.clientWidth,width:o.clientWidth||n.clientWidth,bottom:o.clientHeight||n.clientHeight,height:o.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(e)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100})),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},o.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},o.prototype._rootIsInDom=function(){return!this.root||s(t,this.root)},o.prototype._rootContainsTarget=function(e){return s(this.root||t,e)},o.prototype._registerInstance=function(){},o.prototype._unregisterInstance=function(){},window.IntersectionObserver=o,window.IntersectionObserverEntry=e}function e(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){o(),i=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function n(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function i(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function r(t){var e;try{e=t.getBoundingClientRect()}catch(o){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function s(t,e){for(var o=e;o;){if(o==t)return!0;o=c(o)}return!1}function c(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(),document.addEventListener("DOMContentLoaded",(function(t){const e=(t=t||{}).lazyClass||"lazy",o=t.lazyBackgroundClass||"lazy-bg",n="idleLoadTimeout"in t?t.idleLoadTimeout:200,i=t.observeChanges||!1,r=t.events||{},s=window,c="requestIdleCallback",a="IntersectionObserver",h=["srcset","src","poster"],u=[],l=(t,n)=>u.slice.call((n||document).querySelectorAll(t||`img.${e},video.${e},iframe.${e},.${o}`)),d=e=>{const n=e.parentNode;let i;"PICTURE"==n.nodeName&&(i=n),"VIDEO"==e.nodeName&&(i=e),m(l("source",i),f),f(e),e.autoplay&&e.load();const r=e.classList;r.contains(o)&&(r.remove(o),r.add(t.lazyBackgroundLoaded||"lazy-bg-loaded"))},p=t=>{for(let e in r)t.addEventListener(e,r[e].listener||r[e],r[e].options||void 0)},f=t=>{for(let e in h)h[e]in t.dataset&&s.requestAnimationFrame(()=>{t.setAttribute(h[e],t.dataset[h[e]])})},m=(t,e)=>{for(let o=0;o<t.length;o++)e instanceof s[a]?e.observe(t[o]):e(t[o])},g=t=>{if(t.isIntersecting||t.intersectionRatio){const o=t.target;c in s&&n?s[c](()=>{d(o)},{timeout:n}):d(o),o.classList.remove(e),y.unobserve(o),_=_.filter(t=>t!=o),_.length||i||y.disconnect()}},v=t=>{_.indexOf(t)<0&&(_.push(t),p(t),y.observe(t))},b=e=>{new MutationObserver(()=>{m(l(),v)}).observe(e,t.mutationObserverOptions||{childList:!0,subtree:!0})};let _=l();if(/baidu|(?:google|bing|yandex|duckduck)bot/i.test(navigator.userAgent))m(_,d);else if(a in s&&`${a}Entry`in s){var y=new s[a](t=>{m(t,g)},{rootMargin:`${"threshold"in t?t.threshold:200}px 0%`});m(_,p),m(_,y),i&&m(l(t.observeRootSelector||"body"),b)}})),console.log("Hello, world!");
//# sourceMappingURL=app.4f96ef1d.js.map
