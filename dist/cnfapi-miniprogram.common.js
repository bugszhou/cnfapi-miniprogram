!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("promise"),require("url-parse"),require("events")):"function"==typeof define&&define.amd?define(["promise","url-parse","events"],e):(t=t||self,function(){var r=t["cnfapi-miniprogram"],n=t["cnfapi-miniprogram"]=e(t.Promise,t.urlParse,t.EventEmitter);n.noConflict=function(){return t["cnfapi-miniprogram"]=r,n}}())}(this,function(t,e,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,e=e&&e.hasOwnProperty("default")?e.default:e,r=r&&r.hasOwnProperty("default")?r.default:r;var n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function c(t,e){return t(e={exports:{}},e.exports),e.exports}var u=c(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(t){return e(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r});var s=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var f=function(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?s(t):e},p=c(function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e}),l=c(function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e});var d=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)};var h=function(){this.__data__=[],this.size=0};var v=function(t,e){return t===e||t!=t&&e!=e};var y=function(t,e){for(var r=t.length;r--;)if(v(t[r][0],e))return r;return-1},b=Array.prototype.splice;var g=function(t){var e=this.__data__,r=y(e,t);return!(r<0||(r==e.length-1?e.pop():b.call(e,r,1),--this.size,0))};var m=function(t){var e=this.__data__,r=y(e,t);return r<0?void 0:e[r][1]};var w=function(t){return y(this.__data__,t)>-1};var j=function(t,e){var r=this.__data__,n=y(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function O(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}O.prototype.clear=h,O.prototype.delete=g,O.prototype.get=m,O.prototype.has=w,O.prototype.set=j;var _=O;var S=function(){this.__data__=new _,this.size=0};var E=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var T=function(t){return this.__data__.get(t)};var N=function(t){return this.__data__.has(t)},C="object"==typeof i&&i&&i.Object===Object&&i,P="object"==typeof self&&self&&self.Object===Object&&self,k=C||P||Function("return this")(),x=k.Symbol,A=Object.prototype,q=A.hasOwnProperty,R=A.toString,z=x?x.toStringTag:void 0;var L=function(t){var e=q.call(t,z),r=t[z];try{t[z]=void 0;var n=!0}catch(t){}var o=R.call(t);return n&&(e?t[z]=r:delete t[z]),o},F=Object.prototype.toString;var I=function(t){return F.call(t)},M="[object Null]",U="[object Undefined]",J=x?x.toStringTag:void 0;var D=function(t){return null==t?void 0===t?U:M:J&&J in Object(t)?L(t):I(t)};var G=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},H="[object AsyncFunction]",$="[object Function]",B="[object GeneratorFunction]",K="[object Proxy]";var Z,V=function(t){if(!G(t))return!1;var e=D(t);return e==$||e==B||e==H||e==K},W=k["__core-js_shared__"],Q=(Z=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"";var X=function(t){return!!Q&&Q in t},Y=Function.prototype.toString;var tt=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},et=/^\[object .+?Constructor\]$/,rt=Function.prototype,nt=Object.prototype,ot=rt.toString,at=nt.hasOwnProperty,it=RegExp("^"+ot.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ct=function(t){return!(!G(t)||X(t))&&(V(t)?it:et).test(tt(t))};var ut=function(t,e){return null==t?void 0:t[e]};var st=function(t,e){var r=ut(t,e);return ct(r)?r:void 0},ft=st(k,"Map"),pt=st(Object,"create");var lt=function(){this.__data__=pt?pt(null):{},this.size=0};var dt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ht="__lodash_hash_undefined__",vt=Object.prototype.hasOwnProperty;var yt=function(t){var e=this.__data__;if(pt){var r=e[t];return r===ht?void 0:r}return vt.call(e,t)?e[t]:void 0},bt=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;return pt?void 0!==e[t]:bt.call(e,t)},mt="__lodash_hash_undefined__";var wt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=pt&&void 0===e?mt:e,this};function jt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}jt.prototype.clear=lt,jt.prototype.delete=dt,jt.prototype.get=yt,jt.prototype.has=gt,jt.prototype.set=wt;var Ot=jt;var _t=function(){this.size=0,this.__data__={hash:new Ot,map:new(ft||_),string:new Ot}};var St=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Et=function(t,e){var r=t.__data__;return St(e)?r["string"==typeof e?"string":"hash"]:r.map};var Tt=function(t){var e=Et(this,t).delete(t);return this.size-=e?1:0,e};var Nt=function(t){return Et(this,t).get(t)};var Ct=function(t){return Et(this,t).has(t)};var Pt=function(t,e){var r=Et(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function kt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}kt.prototype.clear=_t,kt.prototype.delete=Tt,kt.prototype.get=Nt,kt.prototype.has=Ct,kt.prototype.set=Pt;var xt=kt,At=200;var qt=function(t,e){var r=this.__data__;if(r instanceof _){var n=r.__data__;if(!ft||n.length<At-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new xt(n)}return r.set(t,e),this.size=r.size,this};function Rt(t){var e=this.__data__=new _(t);this.size=e.size}Rt.prototype.clear=S,Rt.prototype.delete=E,Rt.prototype.get=T,Rt.prototype.has=N,Rt.prototype.set=qt;var zt=Rt,Lt=function(){try{var t=st(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Ft=function(t,e,r){"__proto__"==e&&Lt?Lt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var It=function(t,e,r){(void 0===r||v(t[e],r))&&(void 0!==r||e in t)||Ft(t,e,r)};var Mt=function(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),c=i.length;c--;){var u=i[t?c:++o];if(!1===r(a[u],u,a))break}return e}}(),Ut=c(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?k.Buffer:void 0,a=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=a?a(r):new t.constructor(r);return t.copy(n),n}}),Jt=k.Uint8Array;var Dt=function(t){var e=new t.constructor(t.byteLength);return new Jt(e).set(new Jt(t)),e};var Gt=function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var Ht=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e},$t=Object.create,Bt=function(){function t(){}return function(e){if(!G(e))return{};if($t)return $t(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var Kt=function(t,e){return function(r){return t(e(r))}},Zt=Kt(Object.getPrototypeOf,Object),Vt=Object.prototype;var Wt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Vt)};var Qt=function(t){return"function"!=typeof t.constructor||Wt(t)?{}:Bt(Zt(t))};var Xt=function(t){return null!=t&&"object"==typeof t},Yt="[object Arguments]";var te=function(t){return Xt(t)&&D(t)==Yt},ee=Object.prototype,re=ee.hasOwnProperty,ne=ee.propertyIsEnumerable,oe=te(function(){return arguments}())?te:function(t){return Xt(t)&&re.call(t,"callee")&&!ne.call(t,"callee")},ae=Array.isArray,ie=9007199254740991;var ce=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=ie};var ue=function(t){return null!=t&&ce(t.length)&&!V(t)};var se=function(t){return Xt(t)&&ue(t)};var fe=function(){return!1},pe=c(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?k.Buffer:void 0,a=(o?o.isBuffer:void 0)||fe;t.exports=a}),le="[object Object]",de=Function.prototype,he=Object.prototype,ve=de.toString,ye=he.hasOwnProperty,be=ve.call(Object);var ge=function(t){if(!Xt(t)||D(t)!=le)return!1;var e=Zt(t);if(null===e)return!0;var r=ye.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&ve.call(r)==be},me={};me["[object Float32Array]"]=me["[object Float64Array]"]=me["[object Int8Array]"]=me["[object Int16Array]"]=me["[object Int32Array]"]=me["[object Uint8Array]"]=me["[object Uint8ClampedArray]"]=me["[object Uint16Array]"]=me["[object Uint32Array]"]=!0,me["[object Arguments]"]=me["[object Array]"]=me["[object ArrayBuffer]"]=me["[object Boolean]"]=me["[object DataView]"]=me["[object Date]"]=me["[object Error]"]=me["[object Function]"]=me["[object Map]"]=me["[object Number]"]=me["[object Object]"]=me["[object RegExp]"]=me["[object Set]"]=me["[object String]"]=me["[object WeakMap]"]=!1;var we=function(t){return Xt(t)&&ce(t.length)&&!!me[D(t)]};var je=function(t){return function(e){return t(e)}},Oe=c(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&C.process,a=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a}),_e=Oe&&Oe.isTypedArray,Se=_e?je(_e):we;var Ee=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]},Te=Object.prototype.hasOwnProperty;var Ne=function(t,e,r){var n=t[e];Te.call(t,e)&&v(n,r)&&(void 0!==r||e in t)||Ft(t,e,r)};var Ce=function(t,e,r,n){var o=!r;r||(r={});for(var a=-1,i=e.length;++a<i;){var c=e[a],u=n?n(r[c],t[c],c,r,t):void 0;void 0===u&&(u=t[c]),o?Ft(r,c,u):Ne(r,c,u)}return r};var Pe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},ke=9007199254740991,xe=/^(?:0|[1-9]\d*)$/;var Ae=function(t,e){var r=typeof t;return!!(e=null==e?ke:e)&&("number"==r||"symbol"!=r&&xe.test(t))&&t>-1&&t%1==0&&t<e},qe=Object.prototype.hasOwnProperty;var Re=function(t,e){var r=ae(t),n=!r&&oe(t),o=!r&&!n&&pe(t),a=!r&&!n&&!o&&Se(t),i=r||n||o||a,c=i?Pe(t.length,String):[],u=c.length;for(var s in t)!e&&!qe.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ae(s,u))||c.push(s);return c};var ze=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},Le=Object.prototype.hasOwnProperty;var Fe=function(t){if(!G(t))return ze(t);var e=Wt(t),r=[];for(var n in t)("constructor"!=n||!e&&Le.call(t,n))&&r.push(n);return r};var Ie=function(t){return ue(t)?Re(t,!0):Fe(t)};var Me=function(t){return Ce(t,Ie(t))};var Ue=function(t,e,r,n,o,a,i){var c=Ee(t,r),u=Ee(e,r),s=i.get(u);if(s)It(t,r,s);else{var f=a?a(c,u,r+"",t,e,i):void 0,p=void 0===f;if(p){var l=ae(u),d=!l&&pe(u),h=!l&&!d&&Se(u);f=u,l||d||h?ae(c)?f=c:se(c)?f=Ht(c):d?(p=!1,f=Ut(u,!0)):h?(p=!1,f=Gt(u,!0)):f=[]:ge(u)||oe(u)?(f=c,oe(c)?f=Me(c):G(c)&&!V(c)||(f=Qt(u))):p=!1}p&&(i.set(u,f),o(f,u,n,a,i),i.delete(u)),It(t,r,f)}};var Je=function t(e,r,n,o,a){e!==r&&Mt(r,function(i,c){if(a||(a=new zt),G(i))Ue(e,r,c,n,t,o,a);else{var u=o?o(Ee(e,c),i,c+"",e,r,a):void 0;void 0===u&&(u=i),It(e,c,u)}},Ie)};var De=function(t){return t};var Ge=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},He=Math.max;var $e=function(t,e,r){return e=He(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,a=He(n.length-e,0),i=Array(a);++o<a;)i[o]=n[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=n[o];return c[e]=r(i),Ge(t,this,c)}};var Be=function(t){return function(){return t}},Ke=Lt?function(t,e){return Lt(t,"toString",{configurable:!0,enumerable:!1,value:Be(e),writable:!0})}:De,Ze=800,Ve=16,We=Date.now;var Qe=function(t){var e=0,r=0;return function(){var n=We(),o=Ve-(n-r);if(r=n,o>0){if(++e>=Ze)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Ke);var Xe=function(t,e){return Qe($e(t,e,De),t+"")};var Ye=function(t,e,r){if(!G(r))return!1;var n=typeof e;return!!("number"==n?ue(r)&&Ae(e,r.length):"string"==n&&e in r)&&v(r[e],t)};var tr=function(t){return Xe(function(e,r){var n=-1,o=r.length,a=o>1?r[o-1]:void 0,i=o>2?r[2]:void 0;for(a=t.length>3&&"function"==typeof a?(o--,a):void 0,i&&Ye(r[0],r[1],i)&&(a=o<3?void 0:a,o=1),e=Object(e);++n<o;){var c=r[n];c&&t(e,c,n,a)}return e})},er=tr(function(t,e,r){Je(t,e,r)});var rr=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},nr=Kt(Object.keys,Object),or=Object.prototype.hasOwnProperty;var ar=function(t){if(!Wt(t))return nr(t);var e=[];for(var r in Object(t))or.call(t,r)&&"constructor"!=r&&e.push(r);return e};var ir=function(t){return ue(t)?Re(t):ar(t)},cr=Object.prototype.hasOwnProperty,ur=tr(function(t,e){if(Wt(e)||ue(e))Ce(e,ir(e),t);else for(var r in e)cr.call(e,r)&&Ne(t,r,e[r])});function sr(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length?arguments[2]:void 0;if(!r)throw new Error("arguments[2](schema) is not defined!");if(!e||Array.isArray(e)&&!e.length)return e;var n={object:function(){!function(t,e,r){var n=Object.keys(e),o=r.properties,a=Object.keys(o);0>=n.length||(-1<a.indexOf("any")?n.forEach(function(r){var a=r,i=e[a],c=fr(pr(i));if("object"===c||"array"===c){if(!o.any.properties&&!o.any.items)throw new Error("object array has not sub");return t[r]={},"array"===c&&(t[r]=[]),sr(t[r],i,o.any)}-1<n.indexOf(a)&&(t[r]=i)}):a.forEach(function(r){var a=o[r].serverName,i=e[a],c=fr(pr(i));if(null===i)return t[r]=i,!0;if(o[r].type!==c)throw new Error("server data [".concat(a,"] type not equal jsonSchema [").concat(r,"] type"));if("object"===c||"array"===c){if(!o[r].properties&&!o[r].items)throw new Error("object array has not sub");return t[r]={},"array"===c&&(t[r]=[]),sr(t[r],i,o[r])}-1<n.indexOf(a)&&(t[r]=i)}))}(t,e,r)},array:function(){!function(t,e,r){var n=r.items,o=n.type;e.forEach(function(e,r){var a=fr(pr(e));if(t[r]||("array"===a&&(t[r]=[]),"object"===a&&(t[r]={})),null===e)return t[r]=e,!0;if("none"===a)throw new Error("api key type error");if(o!==a)throw new Error("api key type not match schema key type");return"object"===a||"array"===a?sr(t[r],e,n):void("other"===o&&(t[r]=e))})}(t,e,r)}}[fr(pr(e))];"function"==typeof n&&n()}function fr(t){var e={object:"object",array:"array",other:"other"}[t];return e||(e=function(t){return!!(-1<["number","string","boolean"].indexOf(t))&&"other"}(t)),e||"none"}function pr(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}var lr,dr=null;function hr(t){return!!t&&("object"==u(t)||"function"==typeof t)}(lr=function(t,e){if(!hr(t)||!hr(e))throw new TypeError("Cannot create proxy with a non-object as target or handler");var r=function(){};dr=function(){r=function(t){throw new TypeError("Cannot perform '".concat(t,"' on a proxy that has been revoked"))}};var n=e;for(var o in e={get:null,set:null,apply:null,construct:null},n){if(!(o in e))throw new TypeError("nProxy polyfill does not support trap '".concat(o,"'"));e[o]=n[o]}"function"==typeof n&&(e.apply=n.apply.bind(n));var a=this,i=!1,c="function"==typeof t;(e.apply||e.construct||c)&&(a=function(){var n=this&&this.constructor===a,o=Array.prototype.slice.call(arguments);if(r(n?"construct":"apply"),n&&e.construct)return e.construct.call(this,t,o);if(!n&&e.apply)return e.apply(t,this,o);if(c){if(n){o.unshift(t);var i=t.bind.apply(t,o);return new i}return t.apply(this,o)}throw new TypeError(n?"not a constructor":"not a function")},i=!0);var u=e.get?function(t){return r("get"),e.get(this,t,a)}:function(t){return r("get"),this[t]},s=e.set?function(t,n){r("set");e.set(this,t,n,a)}:function(t,e){r("set"),this[t]=e},f=Object.getOwnPropertyNames(t),p={};f.forEach(function(e){if(!(i&&e in a)){var r={enumerable:!!Object.getOwnPropertyDescriptor(t,e).enumerable,get:u.bind(t,e),set:s.bind(t,e)};Object.defineProperty(a,e,r),p[e]=!0}});var l=!0;if(Object.setPrototypeOf?Object.setPrototypeOf(a,Object.getPrototypeOf(t)):a.__proto__?a.__proto__=t.__proto__:l=!1,e.get||!l)for(var d in t)p[d]||Object.defineProperty(a,d,{get:u.bind(t,d)});return Object.seal(t),Object.seal(a),a}).revocable=lr.revocable=function(t,e){return{proxy:new lr(t,e),revoke:dr}};var vr="undefined"==typeof Proxy?lr:Proxy,yr={url:"",method:"get",params:{},data:{},headers:{},timeout:1e3},br={aliapp:function(e){return new t(function(t,r){var n=e.data,o=Array.isArray(n)?[]:{},a=e.headers,i="";Object.keys(a).forEach(function(t){"content-type"===t.toLowerCase()&&(i=a[t])}),"application/json"===i.toLowerCase()?o=JSON.stringify(n):Object.keys(n).forEach(function(t){o[t]="object"===n[t].toString().slice(1,7).toLowerCase()?JSON.stringify(n[t]):n[t]});var c={url:"".concat(e.url).concat(e.qs?"?".concat(e.qs):""),data:o,headers:e.headers,method:e.method,timeout:e.timeout,success:function(e){t({data:e.data,headers:e.headers,status:e.status,statusText:""})},fail:function(t){r(t)}};"GET"===e.method.toUpperCase()&&delete c.data,gr(e,my.request(c))})},weapp:function(e){return new t(function(t,r){var n=e.data,o=Array.isArray(n)?[]:{},a=e.headers,i="";Object.keys(a).forEach(function(t){"content-type"===t.toLowerCase()&&(i=a[t])}),"application/x-www-form-urlencoded"===i.toLowerCase()?Object.keys(n).forEach(function(t){o[t]="object"===n[t].toString().slice(1,7).toLowerCase()?JSON.stringify(n[t]):n[t]}):o=n;var c={url:"".concat(e.url).concat(e.qs?"?".concat(e.qs):""),data:o,header:e.headers,method:e.method,success:function(e){200!=e.statusCode&&(e.data={retcode:5e3,info:{errCode:e.statusCode,msg:e.data,tip:e.data},data:{}}),t({data:e.data,headers:e.header,status:e.statusCode,statusText:""})},fail:function(t){r(t)},complete:function(){}};"GET"===e.method.toUpperCase()&&delete c.data,gr(e,wx.request(c))})},swan:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(e){return new t(function(t,r){var n=e.data,o=Array.isArray(n)?[]:{},a=e.headers,i="";Object.keys(a).forEach(function(t){"content-type"===t.toLowerCase()&&(i=a[t])}),"application/x-www-form-urlencoded"===i.toLowerCase()?Object.keys(n).forEach(function(t){o[t]="object"===n[t].toString().slice(1,7).toLowerCase()?JSON.stringify(n[t]):n[t]}):o=n;var c={url:"".concat(e.url).concat(e.qs?"?".concat(e.qs):""),data:o,header:e.headers,method:e.method,success:function(e){200!=e.statusCode&&(e.data={retcode:5e3,info:{errCode:e.statusCode,msg:e.data,tip:e.data},data:{}}),t({data:e.data,headers:e.header,status:e.statusCode,statusText:""})},fail:function(t){r(t)},complete:function(){}};"GET"===e.method.toUpperCase()&&delete c.data,gr(e,swan.request(c))})})};function gr(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length?arguments[1]:void 0;t&&t.getRequestTask&&"function"==typeof t.getRequestTask&&t.getRequestTask(e)}function mr(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function wr(t){for(var e,r=1;r<arguments.length;r++)e=null==arguments[r]?{}:arguments[r],r%2?mr(e,!0).forEach(function(r){rr(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):mr(e).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))});return t}var jr={OK:"FE-200",PARAM:"FE-5000",OTHER:"FE-5001",CATCH:"FE-5002"};function Or(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=r,i=Array.isArray(r);return i||(a=Object.keys(r)),o=this||o,a.forEach(function(a){var c,u,s=i?a.name:a,f=i?a:r[a];if(f.name=s,!s)throw new Error("Function name is required!");if(o[s])throw new Error("Duplicate statements in _this: ".concat(s));o[s]=(c=f,function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new vr(e,{get:function(t,e){return r[e]},set:function(){throw new Error("The property is readonly!")},apply:function(e,n,o){return new t(function(t,a){function i(t,e,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){};return function(t,e){return!(isNaN(t)||isNaN(e)||(t=parseInt(t),e=parseInt(e),0>=t||0>=e))}(r,e)&&p<=e?setTimeout(function(){n(t>e)},r):void n(!0)}var c=r,u=c.interval,s=r,f=s.retryTimes,p=0;!function o(c){++p,e(c||{},r,function(e,s){var l=e.data;if(r=er(r,{headers:s.headers,timeout:s.timeout,fnName:s.fnName}),s.err)return n.emit("cnfapi:res:reject",{fnName:s.fnName,retcode:s.err.retcode,msg:s.err.msg,headers:r.headers}),a({retcode:s.err.retcode,msg:s.err.msg,headers:r.headers});if(e.retcode!==jr.OK)return n.emit("cnfapi:res:reject",{fnName:s.fnName,retcode:e.retcode,msg:e.errMsg,headers:r.headers}),a({retcode:e.retcode,msg:e.errMsg,headers:r.headers});var d=r.url;s.restful&&(d=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=/\{(.+?)\}/g,n=null;do{(n=r.exec(t))&&1<n.length&&(t=t.replace(n[0],e[n[1]]||""))}while(n);return t}(d,s.restful)),n.emit("cnfapi:req:before",{fnName:s.fnName,url:d,timeout:r.timeout,env:r.env,method:r.method,headers:r.headers,data:l.postData,qs:l.qs,params:l.getData,getRequestTask:s.getRequestTask}),function(t){if("function"!=typeof br[t.env])throw new Error("http env error!");return br[t.env](ur(yr,t))}({url:d,timeout:r.timeout,env:r.env,method:r.method,headers:r.headers,data:l.postData,qs:l.qs,params:l.getData,getRequestTask:s.getRequestTask}).then(function(e){var i=e.data;r.status=e.status,r.statusText=e.statusText;var u="function"==typeof s.openResInterceptor&&s.openResInterceptor.call(r,i);if(u&&p<f+(f?1:2))return s.resInterceptor.call(r,i,function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t)return n.emit("cnfapi:res:reject",wr({fnName:s.fnName},t)),a(t);var r=er(c.data,e.data),i=er(s.headers,e.headers);c.data=r,s.headers=i,o(c)});if("function"==typeof s.resSuccessCallback)return s.resSuccessCallback(i,function(o,i){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:200;return o?(n.emit("cnfapi:res:reject",wr({fnName:s.fnName},o||Nr({retcode:500,headers:e.headers}))),void a(o||Nr({retcode:500,headers:e.headers}))):(p=0,Pr(r.model)||(i=Cr(r.model,i)),n.emit("cnfapi:res:resolve",wr({fnName:s.fnName},Tr({data:i,headers:e.headers,retcode:c}))),t(Tr({data:i,headers:e.headers,retcode:c})))});if(/^2\d/.test(+i.retcode)){p=0;var l=i.data;return Pr(r.model)||(l=Cr(r.model,l)),n.emit("cnfapi:res:resolve",wr({fnName:s.fnName},Tr({data:l,headers:e.headers,retcode:i.retcode}))),t(Tr({data:l,headers:e.headers,retcode:i.retcode}))}n.emit("cnfapi:res:reject",wr({fnName:s.fnName},Nr({retcode:i.retcode,msg:i.msg,headers:e.headers}))),a(Nr({retcode:i.retcode,msg:i.msg,headers:e.headers}))},function(t){var e=JSON.stringify(t);return e.toLowerCase().includes("abort")?(n.emit("cnfapi:res:reject",wr({fnName:s.fnName},Nr({retcode:jr.OTHER,msg:"error"===kr(t)?t.toString():JSON.stringify(t)}))),a(Nr({retcode:jr.OTHER,msg:"error"===kr(t)?t.toString():JSON.stringify(t)}))):void i(p,f,u,function(e){return e?(p=0,n.emit("cnfapi:res:reject",wr({fnName:s.fnName},Nr({retcode:jr.OTHER,msg:"error"===kr(t)?t.toString():JSON.stringify(t)}))),a(Nr({retcode:jr.OTHER,msg:"error"===kr(t)?t.toString():JSON.stringify(t)}))):void o(c)})}).catch(function(t){p=0,n.emit("cnfapi:res:catch",wr({fnName:s.fnName},Nr({retcode:jr.CATCH,msg:"error"===kr(t)?t.toString():JSON.stringify(t)}))),a(Nr({retcode:jr.CATCH,msg:"error"===kr(t)?t.toString():JSON.stringify(t)}))})})}(o[0]||{})})}})}(u=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length?arguments[1]:void 0,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};return t.fnName=s,t.openResInterceptor=t.openResInterceptor||n.openResInterceptor,t.resInterceptor=t.resInterceptor||n.resInterceptor,t.resSuccessCallback=t.resSuccessCallback||n.resSuccessCallback,o._before=o._before||n._before,e.url=t.url||e.url,"function"==typeof o._before?o._before(t,e,function(n){Sr((t=er(t,n)).data||{},e.params,function(e){r(e,t)})}):void Sr(t.data||{},e.params,function(e){r(e,t)})},JSON.parse(JSON.stringify(function(t,r,n){var o,a={url:"",baseURL:r.baseURL,env:r.env,headers:r.headers,timeout:r.timeout,method:t.method||r.method,model:t.resSchema||{},interval:t.interval||0,retryTimes:t.retryTimes||0,pathname:Er(t.apiName),params:_r(t.params),fnName:t.name,signKey:t.signKey,status:"",statusText:""},i=e(t.apiName);return a.url=a.baseURL+a.pathname,o=t.apiName,(/^((http:\/\/)|(https:\/\/)|(:\/\/))/.test(o)||/^(localhost)/.test(o))&&(a=ur(a,{baseURL:i.origin,pathname:Er(i.pathname),url:i.href})),Object.keys(a).forEach(function(t){if(n[t])throw new Error("Duplicate statements in proxy Function: ".concat(t));n[t]=a[t]}),er({},t,a)}(c,n,u))))),f=null}),o}function _r(t){function e(t,e){return{required:!!t.isNeed,method:e.toUpperCase()}}var r={},n=t.get||t.GET||[],o=t.post||t.POST||[];return n.forEach(function(t){r[t.param]=e(t,"GET")}),o.forEach(function(t){r[t.param]=e(t,"POST")}),r}function Sr(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};setTimeout(function(){var n={retcode:"FE-5000",errMsg:"",data:{}},o=[],a={},i={};Object.keys(e).every(function(r){var c=e[r],u=c.method,s=c.required,f=t[r],p=function(t,e,r){return r&&null==t?{result:!1,errMsg:"param: ".concat(e,". Is Required!")}:{result:!0,errMsg:""}}(f,r,s);return p.result?!(void 0!==f&&null!=f&&("GET"===u.toUpperCase()?(a[r]=f,o.push("".concat(r,"=").concat(encodeURIComponent(f)))):i[r]=f,0)):(n.errMsg=p.errMsg,!1)})?(n.retcode=jr.OK,n.data={qs:o.join("&"),postData:i,getData:a}):n.retcode=jr.PARAM,r(n)},0)}function Er(t){return/^\//.test(t)?t:"/".concat(t)}function Tr(t){return{data:t.data,headers:t.headers,retcode:t.retcode}}function Nr(t){return{retcode:t.retcode||"FE-5001",msg:t.msg||"unknown",headers:t.headers||{}}}function Cr(t,e){var r=Array.isArray(e)?[]:{};return sr(r,e,t),r}function Pr(t){return!t||!Object.keys(t).length}function kr(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}return function(t){function e(){var t,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};n(this,e);var a=(t=f(this,p(e).call(this))).getType(o);if("object"!==t.getType(r)||"object"!==a&&"array"!==a)throw new Error("constructor params require Object type");var i=JSON.parse(JSON.stringify(o));return t.merge=er,t.outConf=r,Object.defineProperty(s(t),"apiList",{get:function(){return i}}),t.init(),t}return d(e,r),a(e,[{key:"init",value:function(){this.mergeConf(this.initConf,this.outConf),Or.apply(this,[JSON.parse(JSON.stringify(this.apiList)),this.defaultOpts])}},{key:"mergeConf",value:function(t,e){var r=this,n={};if("object"!==this.getType(t)||"object"!==this.getType(e))throw new Error("mergeConf argument Not Object");return Object.keys(t).forEach(function(o){var a=t[o],i=null,c=t[o].vaildFn,u="function"==typeof t[o].default&&t[o].default.apply(r)||"";if(a.required&&!u&&!e[o])throw new Error("".concat(a.errMsg));if(n[o]=e[o]||u,"function"==typeof c&&(i=c(n[o])),null!=i&&!i.result)throw new Error("".concat(i.errMsg))}),n}},{key:"openResInterceptor",value:function(){return this.conf.openResInterceptor.apply(this,arguments)}},{key:"_before",value:function(t,e){e(t)}},{key:"getType",value:function(t){return function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}(t)}},{key:"conf",get:function(){return this.mergeConf(this.initConf,this.outConf)}},{key:"initConf",get:function(){return{baseURL:{required:!0,errMsg:"baseURL is required",vaildFn:function(t){return{result:/^((http:\/\/)|(https:\/\/)|(:\/\/))([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)?/.test(t)||/^((http:\/\/)|(https:\/\/)|(:\/\/))(localhost)/.test(t),errMsg:"invalid baseURL"}}},timeout:{required:!0,errMsg:"timeout is required or not 0",default:function(){return 3e3},vaildFn:function(t){return{result:!isNaN(t)&&0!=t,errMsg:"invalid timeout"}}},env:{required:!0,errMsg:"invalid env",default:function(){return"browser"},vaildFn:function(t){var e={result:-1<["browser","aliapp","weapp","swan"].indexOf(t),errMsg:'invalid env, env must in ["browser", "aliapp" ,"weapp", "swan"]'};return("aliapp"===t||"weapp"===t)&&(window=void 0,document=void 0),"browser"===t&&(e={result:window&&document&&"undefined"!=typeof window&&"undefined"!=typeof document,errMsg:'invalid env, env not in browser, env must in ["browser", "aliapp" ,"weapp", "swan"]'}),e}},openResInterceptor:{required:!1,default:function(){return function(){return!1}}},resInterceptor:{required:!1,default:function(){return function(){}}},resSuccessCallback:{required:!1,default:function(){return function(t,e){e(!1,t)}}},resFormat:{description:"接口返回格式",required:!1,default:function(){return{type:"object",properties:{retcode:{type:"string"},msg:{type:"string"},data:{type:"object"}}}}}}}},{key:"defaultOpts",get:function(){return this.merge({method:"GET",headers:{"Content-Type":"application/x-www-form-urlencoded"}},this.outConf,this.conf)}}]),e}()});
//# sourceMappingURL=cnfapi-miniprogram.common.js.map
