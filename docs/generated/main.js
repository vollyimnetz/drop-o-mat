!function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;a.push([136,1]),n()}({136:function(e,t,n){n(137),e.exports=n(346)},339:function(e,t){console.log("service worker needed?",-1===["localhost","127"].indexOf(location.hostname)),"serviceWorker"in navigator&&-1===["localhost","127"].indexOf(location.hostname)&&(console.log("service worker setup"),navigator.serviceWorker.register(window.mywebapp.plugin_url+"/service-worker.js",{scope:"/"}).then(function(e){console.log("Service Worker registered successfully.")}).catch(function(e){return console.log("Service Worker registration failed:",e)}))},340:function(e,t,n){var r=n(341);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(350).default)("43244d0e",r,!1,{})},341:function(e,t,n){},345:function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}n.r(t),n.d(t,"mutationTypes",function(){return u}),n.d(t,"storeModule",function(){return s});var o,a,i,u={ONLINE:"ONLINE"},s={state:{online:navigator.onLine},getters:{online:function(e){return e.online}},mutations:(o={},a=u.ONLINE,i=function(e,t){var n=t.param;e.online=n},a in o?Object.defineProperty(o,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[a]=i,o),actions:{setupOnlineState:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.commit,window.addEventListener("online",function(e){n(u.ONLINE,{param:!0})}),window.addEventListener("offline",function(e){n(u.ONLINE,{param:!1})});case 3:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,s,"next",e)}function s(e){r(i,o,a,u,s,"throw",e)}u(void 0)})});return function(e){return t.apply(this,arguments)}}()}}},346:function(e,t,n){"use strict";n.r(t);n(339);var r=n(28),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{attrs:{id:"page"}},[n("navigation"),e._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view",{key:e.$route.fullPath})],1)],1),e._v(" "),n("v-footer",{staticClass:"pa-3",attrs:{app:""}},[n("v-spacer"),e._v(" "),n("div",{staticClass:"versionInfo"},[n("small",[n("span",{staticClass:"text"},[e._v("Version:")]),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.versionDate)}})])])],1)],1)])};o._withStripped=!0;var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("drop-o-mat ")])],1),e._v(" "),n("v-toolbar-items",[e.isOnline?e._e():n("small",{staticClass:"badge badge-warning"},[e._v("OFFLINE")])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-items",[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"why"}}},[e._v("why")])],1)],1)],1)};a._withStripped=!0;var i=n(55);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{}},methods:{},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},Object(i.b)({isOnline:"online"}))},c=n(27),l=Object(c.a)(s,a,[],!1,null,null,null);l.options.__file="src/components/navigation.vue";var f={components:{navigation:l.exports},computed:{versionDate:function(){var e="2019-04-18T06:34:48.496Z";return"DYNAMIC"!==e&&(e='<span class="date">'+("0"+(e=new Date(e)).getDate()).slice(-2)+"."+("0"+(e.getMonth()+1)).slice(-2)+"."+e.getFullYear()+'</span> <span class="time">'+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+"</span>"),e}}},p=Object(c.a)(f,o,[],!1,null,null,null);p.options.__file="src/App.vue";var v=p.exports;n(340);r.default.use(i.a);var d={modules:{}},h=n(345);d.modules.online=h.storeModule,Object.assign({},h.mutationTypes);var m=new i.a.Store(d);m.dispatch("setupOnlineState");var b=m,y=[{path:"/",name:"home",component:n(347).default},{path:"/why",name:"why",component:n(348).default},{path:"*",component:n(349).default,meta:{bodyClass:"page404"}}],g=n(97),w=n(134);function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function P(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){k(a,r,o,i,u,"next",e)}function u(e){k(a,r,o,i,u,"throw",e)}i(void 0)})}}r.default.use(g.a);var E,S=((E=new g.a({scrollBehavior:R,mode:"history",routes:y})).beforeEach(N),E.afterEach(A),E);r.default.use(S),Object(w.sync)(b,S);var C=[],M=S;function N(e,t,n){return T.apply(this,arguments)}function T(){return(T=P(regeneratorRuntime.mark(function e(t,n,r){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(S.getMatchedComponents(_({},t)));case 2:if(0!==(o=e.sent).length){e.next=5;break}return e.abrupt("return",r());case 5:L(D(o),t,n,function(){r.apply(void 0,arguments)});case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t,n){return I.apply(this,arguments)}function I(){return(I=P(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.app.$nextTick();case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e,t,n,r){var o=e.reverse();!function e(){if(arguments.length>0||0===o.length)return arguments.length,r.apply(void 0,arguments);var a=o.pop();if("function"==typeof a)a(t,n,e);else{if(!routeMiddleware[a])throw Error("Undefined middleware [".concat(a,"]"));routeMiddleware[a](t,n,e)}}()}function $(e){return Promise.all(e.map(function(e){return"function"==typeof e?e():e}))}function D(e){var t=[].concat(C);return e.filter(function(e){return e.middleware}).forEach(function(e){Array.isArray(e.middleware)?t.push.apply(t,x(e.middleware)):t.push(e.middleware)}),t}function R(e,t,n){if(n)return n;if(e.hash)return{selector:e.hash};var r=j(S.getMatchedComponents(_({},e)).slice(-1),1)[0];return r&&!1===r.scrollToTop?{}:{x:0,y:0}}var F,W=n(135),H=n.n(W);function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.default.use(H.a,{}),r.default.config.productionTip=!1,new r.default((J(F={router:M,el:"#app"},"router",M),J(F,"store",b),J(F,"render",function(e){return e(v)}),F))},347:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v(this._s(this.title))]),this._v(" "),t("div",[this._v("das ist ein Test")])])};r._withStripped=!0;var o={data:function(){return{title:"drop-o-mat"}}},a=n(27),i=Object(a.a)(o,r,[],!1,null,null,null);i.options.__file="src/pages/home.vue";t.default=i.exports},348:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var o={layout:"basic",data:function(){return{testdata:[]}},computed:{},methods:{}},a=n(27),i=Object(a.a)(o,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center links"},[t("h1",[this._v("why")])])}],!1,null,null,null);i.options.__file="src/pages/why.vue";t.default=i.exports},349:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this.$createElement,t=this._self._c||e;return t("card",{staticClass:"text-center"},[t("h3",{staticClass:"mb-4"},[this._v(this._s(this.$t("page_not_found")))]),this._v(" "),t("div",{staticClass:"links"},[t("router-link",{attrs:{to:"/"}},[this._v("\n      "+this._s(this.$t("go_home"))+"\n    ")])],1)])};r._withStripped=!0;var o={name:"NotFound"},a=n(27),i=Object(a.a)(o,r,[],!1,null,null,null);i.options.__file="src/pages/404.vue";t.default=i.exports}});