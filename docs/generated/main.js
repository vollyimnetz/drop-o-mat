!function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;a.push([136,1]),n()}({136:function(t,e,n){n(137),t.exports=n(346)},339:function(t,e){console.log("service worker needed?",-1===["localhost","127"].indexOf(location.hostname)),"serviceWorker"in navigator&&-1===["localhost","127"].indexOf(location.hostname)&&(console.log("service worker setup"),navigator.serviceWorker.register("https://vollyimnetz.github.io/drop-o-mat/service-worker.js",{scope:"/drop-o-mat/"}).then(function(t){console.log("Service Worker registered successfully.")}).catch(function(t){return console.log("Service Worker registration failed:",t)}))},340:function(t,e,n){var r=n(341);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(350).default)("43244d0e",r,!1,{})},341:function(t,e,n){},345:function(t,e,n){"use strict";function r(t,e,n,r,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}n.r(e),n.d(e,"mutationTypes",function(){return u}),n.d(e,"storeModule",function(){return s});var o,a,i,u={ONLINE:"ONLINE"},s={state:{online:navigator.onLine},getters:{online:function(t){return t.online}},mutations:(o={},a=u.ONLINE,i=function(t,e){var n=e.param;t.online=n},a in o?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i,o),actions:{setupOnlineState:function(){var t,e=(t=regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.commit,window.addEventListener("online",function(t){n(u.ONLINE,{param:!0})}),window.addEventListener("offline",function(t){n(u.ONLINE,{param:!1})});case 3:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(o,a){var i=t.apply(e,n);function u(t){r(i,o,a,u,s,"next",t)}function s(t){r(i,o,a,u,s,"throw",t)}u(void 0)})});return function(t){return e.apply(this,arguments)}}()}}},346:function(t,e,n){"use strict";n.r(e);n(339);var r=n(28),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"page"}},[n("navigation"),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view",{key:t.$route.fullPath})],1)],1),t._v(" "),n("v-footer",{staticClass:"pa-3",attrs:{app:""}},[n("v-spacer"),t._v(" "),n("div",{staticClass:"versionInfo"},[n("small",[n("span",{staticClass:"text"},[t._v("Version:")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.versionDate)}})])])],1)],1)])};o._withStripped=!0;var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("drop-o-mat ")])],1),t._v(" "),n("v-toolbar-items",[t.isOnline?t._e():n("small",{staticClass:"badge badge-warning"},[t._v("OFFLINE")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"why"}}},[t._v("why")])],1)],1)],1)};a._withStripped=!0;var i=n(55);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{}},methods:{},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}({},Object(i.b)({isOnline:"online"}))},c=n(27),l=Object(c.a)(s,a,[],!1,null,null,null);l.options.__file="src/components/navigation.vue";var f={components:{navigation:l.exports},computed:{versionDate:function(){var t="2019-04-18T17:49:47.310Z";return"DYNAMIC"!==t&&(t='<span class="date">'+("0"+(t=new Date(t)).getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()+'</span> <span class="time">'+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+"</span>"),t}}},p=Object(c.a)(f,o,[],!1,null,null,null);p.options.__file="src/App.vue";var v=p.exports;n(340);r.default.use(i.a);var d={modules:{}},h=n(345);d.modules.online=h.storeModule,Object.assign({},h.mutationTypes);var m=new i.a.Store(d);m.dispatch("setupOnlineState");var b=m,y=[{path:"/",name:"home",component:n(347).default},{path:"/why",name:"why",component:n(348).default},{path:"*",component:n(349).default,meta:{bodyClass:"page404"}}],g=n(97),w=n(134);function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){O(t,e,n[e])})}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(t,e,n,r,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}function P(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){k(a,r,o,i,u,"next",t)}function u(t){k(a,r,o,i,u,"throw",t)}i(void 0)})}}r.default.use(g.a);var E,S=((E=new g.a({scrollBehavior:R,mode:"history",routes:y})).beforeEach(N),E.afterEach(A),E);r.default.use(S),Object(w.sync)(b,S);var C=[],M=S;function N(t,e,n){return T.apply(this,arguments)}function T(){return(T=P(regeneratorRuntime.mark(function t(e,n,r){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(S.getMatchedComponents(_({},e)));case 2:if(0!==(o=t.sent).length){t.next=5;break}return t.abrupt("return",r());case 5:L(D(o),e,n,function(){r.apply(void 0,arguments)});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function A(t,e,n){return I.apply(this,arguments)}function I(){return(I=P(regeneratorRuntime.mark(function t(e,n,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.app.$nextTick();case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function L(t,e,n,r){var o=t.reverse();!function t(){if(arguments.length>0||0===o.length)return arguments.length,r.apply(void 0,arguments);var a=o.pop();if("function"==typeof a)a(e,n,t);else{if(!routeMiddleware[a])throw Error("Undefined middleware [".concat(a,"]"));routeMiddleware[a](e,n,t)}}()}function $(t){return Promise.all(t.map(function(t){return"function"==typeof t?t():t}))}function D(t){var e=[].concat(C);return t.filter(function(t){return t.middleware}).forEach(function(t){Array.isArray(t.middleware)?e.push.apply(e,x(t.middleware)):e.push(t.middleware)}),e}function R(t,e,n){if(n)return n;if(t.hash)return{selector:t.hash};var r=j(S.getMatchedComponents(_({},t)).slice(-1),1)[0];return r&&!1===r.scrollToTop?{}:{x:0,y:0}}var F,W=n(135),H=n.n(W);function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.use(H.a,{}),r.default.config.productionTip=!1,new r.default((J(F={router:M,el:"#app"},"router",M),J(F,"store",b),J(F,"render",function(t){return t(v)}),F))},347:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.title))]),this._v(" "),e("div",[this._v("das ist ein Test")])])};r._withStripped=!0;var o={data:function(){return{title:"drop-o-mat"}}},a=n(27),i=Object(a.a)(o,r,[],!1,null,null,null);i.options.__file="src/pages/home.vue";e.default=i.exports},348:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var o={layout:"basic",data:function(){return{testdata:[]}},computed:{},methods:{}},a=n(27),i=Object(a.a)(o,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center links"},[e("h1",[this._v("why")])])}],!1,null,null,null);i.options.__file="src/pages/why.vue";e.default=i.exports},349:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("card",{staticClass:"text-center"},[e("h3",{staticClass:"mb-4"},[this._v(this._s(this.$t("page_not_found")))]),this._v(" "),e("div",{staticClass:"links"},[e("router-link",{attrs:{to:"/"}},[this._v("\n      "+this._s(this.$t("go_home"))+"\n    ")])],1)])};r._withStripped=!0;var o={name:"NotFound"},a=n(27),i=Object(a.a)(o,r,[],!1,null,null,null);i.options.__file="src/pages/404.vue";e.default=i.exports}});