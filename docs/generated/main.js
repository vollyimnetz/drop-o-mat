!function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],f=0,p=[];f<s.length;f++)a=s[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);p.length;)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([136,1]),n()}({136:function(t,e,n){n(137),t.exports=n(348)},339:function(t,e){console.log("service worker needed?",-1===["localhost","127"].indexOf(location.hostname)),"serviceWorker"in navigator&&-1===["localhost","127"].indexOf(location.hostname)&&(console.log("service worker setup"),navigator.serviceWorker.register("/drop-o-mat/service-worker.js",{scope:"/drop-o-mat/"}).then(function(t){console.log("Service Worker registered successfully.")}).catch(function(t){return console.log("Service Worker registration failed:",t)}))},340:function(t,e,n){var r=n(341);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(351).default)("43244d0e",r,!1,{})},341:function(t,e,n){},345:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}n.r(e),n.d(e,"mutationTypes",function(){return s}),n.d(e,"storeModule",function(){return c});var o,i,a,s={ONLINE:"ONLINE"},c={state:{online:navigator.onLine},getters:{online:function(t){return t.online}},mutations:(o={},i=s.ONLINE,a=function(t,e){var n=e.param;t.online=n},i in o?Object.defineProperty(o,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[i]=a,o),actions:{setupOnlineState:function(){var t,e=(t=regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.commit,window.addEventListener("online",function(t){n(s.ONLINE,{param:!0})}),window.addEventListener("offline",function(t){n(s.ONLINE,{param:!1})});case 3:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)})});return function(t){return e.apply(this,arguments)}}()}}},346:function(t,e,n){"use strict";var r;function o(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"mutationTypes",function(){return a}),n.d(e,"storeModule",function(){return s});var a={LOADHISTORYDATA:"LOADHISTORYDATA",STOREHISTORYDATA:"STOREHISTORYDATA"},s={state:{clockhistory:[]},getters:{clockhistory:function(t){return t.clockhistory}},mutations:(r={},i(r,a.LOADHISTORYDATA,function(t,e){var n=e.param;t.clockhistory=n}),i(r,a.STOREHISTORYDATA,function(t,e){var n=e.data;"undefined"!=typeof Storage&&(t.clockhistory=n,localStorage.setItem("clockhistory",JSON.stringify(n)))}),r),actions:{loadClockHistoryFromStorage:function(){var t,e=(t=regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.commit,"undefined"!=typeof Storage){t.next=3;break}return t.abrupt("return");case 3:r=localStorage.getItem("clockhistory"),n(a.LOADHISTORYDATA,r?{param:JSON.parse(r)}:{param:[]});case 5:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)})});return function(t){return e.apply(this,arguments)}}()}}},347:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("dropomat")],1)};r._withStripped=!0;var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"drop-o-mat-wrap"},[t.startTime?t._e():n("button",{staticClass:"startButton btn btnMain",attrs:{type:"button"},on:{click:t.startClock}},[t._v("drop")]),t._v(" "),t.startTime?n("button",{staticClass:"stopButton btn btnMain",attrs:{type:"button"},on:{click:t.stopClock}},[t._v("land")]):t._e(),t._v(" "),t.startTime?n("clockwatch",{attrs:{time:t.startTime,stop:t.stop},on:{result:t.result}}):t._e(),t._v(" "),t.resultData?n("div",[n("h3",[t._v("Result")]),t._v(" "),n("p",[t._v("\n            The total time in free fall was "),n("span",{staticClass:"timeOutput"},[n("span",{staticClass:"seconds"},[t._v(t._s(t.resultData.seconds))]),n("span",{staticClass:"divider"},[t._v(",")]),n("span",{staticClass:"millis"},[t._v(t._s(("00"+t.resultData.milliseconds).slice(-3)))]),t._v(" "),n("span",{staticClass:"unit"},[t._v("seconds")])]),t._v(".\n        ")]),t._v(" "),n("p",[t._v("\n            That means a height of "),n("span",{staticClass:"resultHeight"},[t._v(t._s(t.resultData.height.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}))+" meter")]),t._v(".\n        ")]),t._v(" "),n("p",[t._v("\n            The resulting velocity on impact is "+t._s(t.resultData.velocity.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" m/s (or "+t._s((3.6*t.resultData.velocity).toLocaleString(void 0,{maximumFractionDigits:0}))+" km/h).\n        ")])]):t._e(),t._v(" "),n("hr"),t._v(" "),t.historyData.length?n("div",[n("table",{staticClass:"v-datatable v-table theme--light"},[n("tbody",t._l(t.historyData,function(e,r){return n("tr",{key:r},[n("td",[n("span",{staticClass:"timeOutput"},[n("span",{staticClass:"seconds"},[t._v(t._s(e.seconds))]),n("span",{staticClass:"divider"},[t._v(",")]),n("span",{staticClass:"millis"},[t._v(t._s(("00"+e.milliseconds).slice(-3)))]),t._v(" "),n("span",{staticClass:"unit"},[t._v("seconds")])])]),t._v(" "),n("td",[n("span",{staticClass:"resultHeight"},[t._v(t._s(e.height.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1}))+" meter")])]),t._v(" "),n("td",[t._v(t._s(e.velocity.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))+" m/s (or "+t._s((3.6*e.velocity).toLocaleString(void 0,{maximumFractionDigits:0}))+" km/h)")])])}),0)]),t._v(" "),n("button",{staticClass:"v-flat v-btn",attrs:{type:"button"},on:{click:t.deleteHistory}},[t._v("delete history")])]):t._e()],1)};o._withStripped=!0;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clockwatch"},[t.offset?n("p",{staticClass:"timeOutput"},[n("span",{staticClass:"seconds"},[t._v(t._s(t.offset.seconds))]),n("span",{staticClass:"divider"},[t._v(":")]),n("span",{staticClass:"millis"},[t._v(t._s(("00"+t.offset.milliseconds).slice(-3)))])]):t._e(),t._v(" "),t.offset?t._e():n("p",{staticClass:"timeOutput"},[n("span",{staticClass:"seconds"},[t._v("0")]),n("span",{staticClass:"divider"},[t._v(":")]),n("span",{staticClass:"millis"},[t._v("000")])])])};i._withStripped=!0;var a={props:{time:{required:!0,type:Date},stop:{required:!0,type:Boolean}},data:function(){return{offset:null,clockInterval:null}},mounted:function(){var t=this;this.clockInterval=setInterval(function(){t.currentOffset()},1e3/30)},beforeDestroy:function(){this.stopTimer()},methods:{stopTimer:function(){this.clockInterval&&clearInterval(this.clockInterval)},currentOffset:function(){!0===this.stop&&this.stopTimer();var t=new Date,e=t.getTime()-this.time.getTime(),n=e%1e3;this.offset={seconds:(e-n)/1e3,milliseconds:n},!0===this.stop&&this.$emit("result",{start:this.time,stop:t,offset:e,seconds:this.offset.seconds,milliseconds:this.offset.milliseconds})}}},s=n(11),c=Object(s.a)(a,i,[],!1,null,null,null);c.options.__file="src/components/clockwatch.vue";var l=c.exports,u=n(45);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p={components:{clockwatch:l},data:function(){return{startTime:null,stop:!1,resultData:null}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}({},Object(u.b)({historyData:"clockhistory"})),methods:{startClock:function(){this.resultData=null,this.startTime=new Date},stopClock:function(){this.stop=!0},result:function(t){this.resultData=t;this.resultData.height=4.905*Math.pow(t.offset/1e3,2),this.resultData.velocity=9.81*t.offset/1e3,this.stop=!1,this.startTime=null;var e=this.historyData.slice();e.splice(0,0,this.resultData),this.$store.commit("STOREHISTORYDATA",{data:e})},deleteHistory:function(){this.$store.commit("STOREHISTORYDATA",{data:[]})}}},v=Object(s.a)(p,o,[],!1,null,null,null);v.options.__file="src/components/drop-o-mat.vue";var d={components:{dropomat:v.exports},data:function(){return{}}},m=Object(s.a)(d,r,[],!1,null,null,null);m.options.__file="src/pages/home.vue";e.default=m.exports},348:function(t,e,n){"use strict";n.r(e);n(339);var r=n(28),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{attrs:{id:"page"}},[n("navigation"),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view",{key:t.$route.fullPath})],1)],1),t._v(" "),n("v-footer",{staticClass:"pa-3",attrs:{app:""}},[n("v-spacer"),t._v(" "),n("div",[n("v-icon",{on:{click:t.doReload}},[t._v("autorenew")])],1),t._v(" "),n("div",{staticClass:"versionInfo"},[n("small",[n("span",{staticClass:"text"},[t._v("Version:")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.versionDate)}})])])],1)],1)])};o._withStripped=!0;var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-items",[n("router-link",{staticClass:"v-toolbar__title v-btn v-btn--flat text-none",attrs:{to:{name:"home"}}},[t._v("drop-o-mat ")])],1),t._v(" "),t.isOnline?t._e():n("v-chip",{attrs:{color:"orange"}},[t._v("OFFLINE")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("router-link",{staticClass:"v-btn v-btn--flat",attrs:{to:{name:"why"}}},[t._v("why")])],1)],1)],1)};i._withStripped=!0;var a=n(45);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{}},methods:{},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}({},Object(a.b)({isOnline:"online"}))},l=n(11),u=Object(l.a)(c,i,[],!1,null,null,null);u.options.__file="src/components/navigation.vue";var f={components:{navigation:u.exports},computed:{versionDate:function(){var t="2019-04-24T06:33:35.450Z";return"DYNAMIC"!==t&&(t='<span class="date">'+("0"+(t=new Date(t)).getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()+'</span> <span class="time">'+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+"</span>"),t}},methods:{doReload:function(){location.reload()}}},p=Object(l.a)(f,o,[],!1,null,null,null);p.options.__file="src/App.vue";var v=p.exports;n(340);r.default.use(a.a);var d={},m={modules:{}},h=n(345);m.modules.online=h.storeModule,Object.assign(d,h.mutationTypes);var _=n(346);m.modules.dropomat=_.storeModule,Object.assign(d,_.mutationTypes);var y=new a.a.Store(m);y.dispatch("setupOnlineState"),y.dispatch("loadClockHistoryFromStorage");var b=y,g=[{path:"/",name:"home",component:n(347).default},{path:"/why",name:"why",component:n(349).default},{path:"*",component:n(350).default,meta:{bodyClass:"page404"}}],w=n(97),O=n(134);function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){T(t,e,n[e])})}return t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function j(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){C(i,r,o,a,s,"next",t)}function s(t){C(i,r,o,a,s,"throw",t)}a(void 0)})}}r.default.use(w.a);var x,A=((x=new w.a({scrollBehavior:$,mode:"history",routes:g})).beforeEach(I),x.afterEach(L),x);r.default.use(A),Object(O.sync)(b,A);var P=[],E=A;function I(t,e,n){return R.apply(this,arguments)}function R(){return(R=j(regeneratorRuntime.mark(function t(e,n,r){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(A.getMatchedComponents(k({},e)));case 2:if(0!==(o=t.sent).length){t.next=5;break}return t.abrupt("return",r());case 5:H(N(o),e,n,function(){r.apply(void 0,arguments)});case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}function L(t,e,n){return M.apply(this,arguments)}function M(){return(M=j(regeneratorRuntime.mark(function t(e,n,r){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.app.$nextTick();case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}function H(t,e,n,r){var o=t.reverse();!function t(){if(arguments.length>0||0===o.length)return arguments.length,r.apply(void 0,arguments);var i=o.pop();if("function"==typeof i)i(e,n,t);else{if(!routeMiddleware[i])throw Error("Undefined middleware [".concat(i,"]"));routeMiddleware[i](e,n,t)}}()}function F(t){return Promise.all(t.map(function(t){return"function"==typeof t?t():t}))}function N(t){var e=[].concat(P);return t.filter(function(t){return t.middleware}).forEach(function(t){Array.isArray(t.middleware)?e.push.apply(e,D(t.middleware)):e.push(t.middleware)}),e}function $(t,e,n){if(n)return n;if(t.hash)return{selector:t.hash};var r=S(A.getMatchedComponents(k({},t)).slice(-1),1)[0];return r&&!1===r.scrollToTop?{}:{x:0,y:0}}var Y,W=n(135),B=n.n(W);function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.use(B.a,{}),r.default.config.productionTip=!1,new r.default((J(Y={router:E,el:"#app"},"router",E),J(Y,"store",b),J(Y,"render",function(t){return t(v)}),Y))},349:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var o={layout:"basic",data:function(){return{testdata:[]}},computed:{},methods:{}},i=n(11),a=Object(i.a)(o,r,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center links"},[n("h1",[t._v("why")]),t._v(" "),n("p",[t._v('The "drop-o-mat" is a proof of concept for a progressive web app (PWA).')]),t._v(" "),n("p",[t._v("The primary focus is on")]),t._v(" "),n("p",[n("ul",[n("li",[t._v('the "add to homescreen" functionality (especially successfull on firefox and chrome)')]),t._v(" "),n("li",[t._v("the caching of the hole web app for offline-usage")])])]),t._v(" "),n("p",[t._v("The idea of the drop-o-mat itself, is inspired [read, stolen ;) ] from a video of Mark Rober where he speak about "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=z68vta3N5kg"}},[t._v("mesure the height with a watch")]),t._v(".")])])}],!1,null,null,null);a.options.__file="src/pages/why.vue";e.default=a.exports},350:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement,e=this._self._c||t;return e("card",{staticClass:"text-center"},[e("h3",{staticClass:"mb-4"},[this._v(this._s(this.$t("page_not_found")))]),this._v(" "),e("div",{staticClass:"links"},[e("router-link",{attrs:{to:"/"}},[this._v("\n      "+this._s(this.$t("go_home"))+"\n    ")])],1)])};r._withStripped=!0;var o={name:"NotFound"},i=n(11),a=Object(i.a)(o,r,[],!1,null,null,null);a.options.__file="src/pages/404.vue";e.default=a.exports}});