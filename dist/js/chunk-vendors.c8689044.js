(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var r=n("59ed");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):i(r(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),l=n("0cfb"),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=s(e),t=a(t),l)try{return u(e,t)}catch(n){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},"0b42":function(e,t,n){var r=n("e8b5"),i=n("68ee"),o=n("861d"),s=n("b622"),a=s("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===Array||r(t.prototype))?t=void 0:o(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),s=n("1d80"),a=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("577e"),h=n("dc4a"),d=n("14c3"),f=n("9263"),p=n("9f7f"),m=n("d039"),g=p.UNSUPPORTED_Y,_=[].push,v=Math.min,b=4294967295,y=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=u(s(this)),o=void 0===n?b:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var a,c,l,h=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,d+"g");while(a=f.call(m,r)){if(c=m.lastIndex,c>p&&(h.push(r.slice(p,a.index)),a.length>1&&a.index<r.length&&_.apply(h,a.slice(1)),l=a[0].length,p=c,h.length>=o))break;m.lastIndex===a.index&&m.lastIndex++}return p===r.length?!l&&m.test("")||h.push(""):h.push(r.slice(p)),h.length>o?h.slice(0,o):h}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=s(this),o=void 0==t?void 0:h(t,e);return o?o.call(t,i,n):r.call(u(i),t,n)},function(e,i){var s=o(this),h=u(e),f=n(r,s,h,i,r!==t);if(f.done)return f.value;var p=a(s,RegExp),m=s.unicode,_=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"g":"y"),y=new p(g?"^(?:"+s.source+")":s,_),w=void 0===i?b:i>>>0;if(0===w)return[];if(0===h.length)return null===d(y,h)?[h]:[];var O=0,k=0,C=[];while(k<h.length){y.lastIndex=g?0:k;var I,j=d(y,g?h.slice(k):h);if(null===j||(I=v(l(y.lastIndex+(g?k:0)),h.length))===O)k=c(h,k,m);else{if(C.push(h.slice(O,k)),C.length===w)return C;for(var T=1;T<=j.length-1;T++)if(C.push(j[T]),C.length===w)return C;k=O=I}}return C.push(h.slice(O)),C}]}),!y,g)},"14c3":function(e,t,n){var r=n("825a"),i=n("1626"),o=n("c6b6"),s=n("9263");e.exports=function(e,t){var n=e.exec;if(i(n)){var a=n.call(e,t);return null!==a&&r(a),a}if("RegExp"===o(e))return s.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var l in i)c(r[l]&&r[l].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"===typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t){e.exports=function(e,t,n){if(e instanceof t)return e;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return V})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return N})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return $})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return D})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return W})),n.d(t,"q",(function(){return J})),n.d(t,"r",(function(){return _})),n.d(t,"s",(function(){return R})),n.d(t,"t",(function(){return b})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return w})),n.d(t,"w",(function(){return v})),n.d(t,"x",(function(){return O})),n.d(t,"y",(function(){return y})),n.d(t,"z",(function(){return P})),n.d(t,"A",(function(){return E})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return U})),n.d(t,"D",(function(){return q})),n.d(t,"E",(function(){return A})),n.d(t,"F",(function(){return Y})),n.d(t,"G",(function(){return K})),n.d(t,"H",(function(){return S}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==u)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},l=function(e){const t=s(e);return c.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const k="FirebaseError";class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?j(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new C(r,s,n);return a}}function j(e,t){return e.replace(T,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return JSON.parse(e)}function S(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=E(h(o[0])||""),n=E(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},P=function(e){const t=x(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},R=function(e){const t=x(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(F(n)&&F(o)){if(!D(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function W(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let u=0;u<16;u++)n[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)n[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const e=n[u-3]^n[u-8]^n[u-14]^n[u-16];n[u]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let u=0;u<80;u++){u<40?u<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):u<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+l+i+n[u]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function $(e,t){const n=new H(e,t);return n.subscribe.bind(n)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const K=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},Y=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("9a1f"),c=n("35a1"),l=n("2a62"),u=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var h,d,f,p,m,g,_,v=n&&n.that,b=!(!n||!n.AS_ENTRIES),y=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),O=s(t,v,1+b+w),k=function(e){return h&&l(h,"normal",e),new u(!0,e)},C=function(e){return b?(r(e),w?O(e[0],e[1],k):O(e[0],e[1])):w?O(e,k):O(e)};if(y)h=e;else{if(d=c(e),!d)throw TypeError(String(e)+" is not iterable");if(i(d)){for(f=0,p=o(e.length);p>f;f++)if(m=C(e[f]),m&&m instanceof u)return m;return new u(!1)}h=a(e,d)}g=h.next;while(!(_=g.call(h)).done){try{m=C(_.value)}catch(I){l(h,"throw",I)}if("object"==typeof m&&m&&m instanceof u)return m}return new u(!1)}},"23cb":function(e,t,n){var r=n("a691"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),l=n("94ca");e.exports=function(e,t){var n,u,h,d,f,p,m=e.target,g=e.global,_=e.stat;if(u=g?r:_?r[m]||a(m,{}):(r[m]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(_?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(u,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"260b":function(e,t,n){"use strict";var r=n("5606");n.d(t,"a",(function(){return r["e"]}));var i="firebase",o="9.1.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var o,s;r(e);try{if(o=i(e,"return"),!o){if("throw"===t)throw n;return n}o=o.call(e)}catch(a){s=!0,o=a}if("throw"===t)throw n;if(s)throw o;return r(o),n}},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("1626"),l=n("d039"),u=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),m=a.setImmediate,g=a.clearImmediate,_=a.process,v=a.MessageChannel,b=a.Dispatch,y=0,w={},O="onreadystatechange";try{r=a.location}catch(T){}var k=function(e){if(w.hasOwnProperty(e)){var t=w[e];delete w[e],t()}},C=function(e){return function(){k(e)}},I=function(e){k(e.data)},j=function(e){a.postMessage(String(e),r.protocol+"//"+r.host)};m&&g||(m=function(e){var t=[],n=arguments.length,r=1;while(n>r)t.push(arguments[r++]);return w[++y]=function(){(c(e)?e:Function(e)).apply(void 0,t)},i(y),y},g=function(e){delete w[e]},p?i=function(e){_.nextTick(C(e))}:b&&b.now?i=function(e){b.now(C(e))}:v&&!f?(o=new v,s=o.port2,o.port1.onmessage=I,i=u(s.postMessage,s,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!l(j)?(i=j,a.addEventListener("message",I,!1)):i=O in d("script")?function(e){h.appendChild(d("script"))[O]=function(){h.removeChild(this),k(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:m,clear:g}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u?(r=u.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),a=r.length,c=0;while(a>c)i.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("1626");e.exports=function(e){if("object"===typeof e||r(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,l=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=l(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"setupDevtoolsPlugin",(function(){return s}));var r=n("abc5"),i=n("b774"),o=n("f30a");function s(e,t){const n=Object(r["b"])(),s=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new o["a"](e,s):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else s.emit(i["b"],e,t)}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},"466d":function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),o=n("50c4"),s=n("577e"),a=n("1d80"),c=n("dc4a"),l=n("8aa5"),u=n("14c3");r("match",(function(e,t,n){return[function(t){var n=a(this),r=void 0==t?void 0:c(t,e);return r?r.call(t,n):new RegExp(t)[e](s(n))},function(e){var r=i(this),a=s(e),c=n(t,r,a);if(c.done)return c.value;if(!r.global)return u(r,a);var h=r.unicode;r.lastIndex=0;var d,f=[],p=0;while(null!==(d=u(r,a))){var m=s(d[0]);f[p]=m,""===m&&(r.lastIndex=l(a,o(r.lastIndex),h)),p++}return 0===p?null:f}]}))},"47e2":function(e,t,n){"use strict";n.d(t,"a",(function(){return Tt}));var r=n("f83d");
/*!
  * @intlify/message-compiler v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function i(e,t,n={}){const{domain:r,messages:i,args:o}=n,s=e,a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=r,a}function o(e){throw e}function s(e,t,n){return{line:e,column:t,offset:n}}function a(e,t,n){const r={start:e,end:t};return null!=n&&(r.source=n),r}const c=" ",l="\r",u="\n",h=String.fromCharCode(8232),d=String.fromCharCode(8233);function f(e){const t=e;let n=0,r=1,i=1,o=0;const s=e=>t[e]===l&&t[e+1]===u,a=e=>t[e]===u,c=e=>t[e]===d,f=e=>t[e]===h,p=e=>s(e)||a(e)||c(e)||f(e),m=()=>n,g=()=>r,_=()=>i,v=()=>o,b=e=>s(e)||c(e)||f(e)?u:t[e],y=()=>b(n),w=()=>b(n+o);function O(){return o=0,p(n)&&(r++,i=0),s(n)&&n++,n++,i++,t[n]}function k(){return s(n+o)&&o++,o++,t[n+o]}function C(){n=0,r=1,i=1,o=0}function I(e=0){o=e}function j(){const e=n+o;while(e!==n)O();o=0}return{index:m,line:g,column:_,peekOffset:v,charAt:b,currentChar:y,currentPeek:w,next:O,peek:k,reset:C,resetPeek:I,skipToPeek:j}}const p=void 0,m="'",g="tokenizer";function _(e,t={}){const n=!1!==t.location,r=f(e),o=()=>r.index(),l=()=>s(r.line(),r.column(),r.index()),h=l(),d=o(),_={currentType:14,offset:d,startLoc:h,endLoc:h,lastType:14,lastOffset:d,lastStartLoc:h,lastEndLoc:h,braceNest:0,inLinked:!1,text:""},v=()=>_,{onError:b}=t;function y(e,t,n,...r){const o=v();if(t.column+=n,t.offset+=n,b){const n=a(o.startLoc,t),s=i(e,n,{domain:g,args:r});b(s)}}function w(e,t,r){e.endLoc=l(),e.currentType=t;const i={type:t};return n&&(i.loc=a(e.startLoc,e.endLoc)),null!=r&&(i.value=r),i}const O=e=>w(e,14);function k(e,t){return e.currentChar()===t?(e.next(),t):(y(0,l(),0,t),"")}function C(e){let t="";while(e.currentPeek()===c||e.currentPeek()===u)t+=e.currentPeek(),e.peek();return t}function I(e){const t=C(e);return e.skipToPeek(),t}function j(e){if(e===p)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function T(e){if(e===p)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function E(e,t){const{currentType:n}=t;if(2!==n)return!1;C(e);const r=j(e.currentPeek());return e.resetPeek(),r}function S(e,t){const{currentType:n}=t;if(2!==n)return!1;C(e);const r="-"===e.currentPeek()?e.peek():e.currentPeek(),i=T(r);return e.resetPeek(),i}function x(e,t){const{currentType:n}=t;if(2!==n)return!1;C(e);const r=e.currentPeek()===m;return e.resetPeek(),r}function P(e,t){const{currentType:n}=t;if(8!==n)return!1;C(e);const r="."===e.currentPeek();return e.resetPeek(),r}function R(e,t){const{currentType:n}=t;if(9!==n)return!1;C(e);const r=j(e.currentPeek());return e.resetPeek(),r}function N(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;C(e);const r=":"===e.currentPeek();return e.resetPeek(),r}function A(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?j(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===c||!t)&&(t===u?(e.peek(),r()):j(t))},i=r();return e.resetPeek(),i}function L(e){C(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function M(e,t=!0){const n=(t=!1,r="",i=!1)=>{const o=e.currentPeek();return"{"===o?"%"!==r&&t:"@"!==o&&o?"%"===o?(e.peek(),n(t,"%",!0)):"|"===o?!("%"!==r&&!i)||!(r===c||r===u):o===c?(e.peek(),n(!0,c,i)):o!==u||(e.peek(),n(!0,u,i)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function D(e,t){const n=e.currentChar();return n===p?p:t(n)?(e.next(),n):null}function F(e){const t=e=>{const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t};return D(e,t)}function U(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57};return D(e,t)}function q(e){const t=e=>{const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102};return D(e,t)}function W(e){let t="",n="";while(t=U(e))n+=t;return n}function V(e){let t="";while(1){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!M(e))break;t+=n,e.next()}else if(n===c||n===u)if(M(e))t+=n,e.next();else{if(L(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function $(e){I(e);let t="",n="";while(t=F(e))n+=t;return e.currentChar()===p&&y(6,l(),0),n}function H(e){I(e);let t="";return"-"===e.currentChar()?(e.next(),t+="-"+W(e)):t+=W(e),e.currentChar()===p&&y(6,l(),0),t}function B(e){I(e),k(e,"'");let t="",n="";const r=e=>e!==m&&e!==u;while(t=D(e,r))n+="\\"===t?z(e):t;const i=e.currentChar();return i===u||i===p?(y(2,l(),0),i===u&&(e.next(),k(e,"'")),n):(k(e,"'"),n)}function z(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),"\\"+t;case"u":return G(e,t,4);case"U":return G(e,t,6);default:return y(3,l(),0,t),""}}function G(e,t,n){k(e,t);let r="";for(let i=0;i<n;i++){const n=q(e);if(!n){y(4,l(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function K(e){I(e);let t="",n="";const r=e=>"{"!==e&&"}"!==e&&e!==c&&e!==u;while(t=D(e,r))n+=t;return n}function Y(e){let t="",n="";while(t=F(e))n+=t;return n}function J(e){const t=(n=!1,r)=>{const i=e.currentChar();return"{"!==i&&"%"!==i&&"@"!==i&&"|"!==i&&i?i===c?r:i===u?(r+=i,e.next(),t(n,r)):(r+=i,e.next(),t(!0,r)):r};return t(!1,"")}function Q(e){I(e);const t=k(e,"|");return I(e),t}function X(e,t){let n=null;const r=e.currentChar();switch(r){case"{":return t.braceNest>=1&&y(8,l(),0),e.next(),n=w(t,2,"{"),I(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&y(7,l(),0),e.next(),n=w(t,3,"}"),t.braceNest--,t.braceNest>0&&I(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&y(6,l(),0),n=Z(e,t)||O(t),t.braceNest=0,n;default:let r=!0,i=!0,o=!0;if(L(e))return t.braceNest>0&&y(6,l(),0),n=w(t,1,Q(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return y(6,l(),0),t.braceNest=0,ee(e,t);if(r=E(e,t))return n=w(t,5,$(e)),I(e),n;if(i=S(e,t))return n=w(t,6,H(e)),I(e),n;if(o=x(e,t))return n=w(t,7,B(e)),I(e),n;if(!r&&!i&&!o)return n=w(t,13,K(e)),y(1,l(),0,n.value),I(e),n;break}return n}function Z(e,t){const{currentType:n}=t;let r=null;const i=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||i!==u&&i!==c||y(9,l(),0),i){case"@":return e.next(),r=w(t,8,"@"),t.inLinked=!0,r;case".":return I(e),e.next(),w(t,9,".");case":":return I(e),e.next(),w(t,10,":");default:return L(e)?(r=w(t,1,Q(e)),t.braceNest=0,t.inLinked=!1,r):P(e,t)||N(e,t)?(I(e),Z(e,t)):R(e,t)?(I(e),w(t,12,Y(e))):A(e,t)?(I(e),"{"===i?X(e,t)||r:w(t,11,J(e))):(8===n&&y(9,l(),0),t.braceNest=0,t.inLinked=!1,ee(e,t))}}function ee(e,t){let n={type:14};if(t.braceNest>0)return X(e,t)||O(t);if(t.inLinked)return Z(e,t)||O(t);const r=e.currentChar();switch(r){case"{":return X(e,t)||O(t);case"}":return y(5,l(),0),e.next(),w(t,3,"}");case"@":return Z(e,t)||O(t);default:if(L(e))return n=w(t,1,Q(e)),t.braceNest=0,t.inLinked=!1,n;if(M(e))return w(t,0,V(e));if("%"===r)return e.next(),w(t,4,"%");break}return n}function te(){const{currentType:e,offset:t,startLoc:n,endLoc:i}=_;return _.lastType=e,_.lastOffset=t,_.lastStartLoc=n,_.lastEndLoc=i,_.offset=o(),_.startLoc=l(),r.currentChar()===p?w(_,14):ee(r,_)}return{nextToken:te,currentOffset:o,currentPosition:l,context:v}}const v="parser",b=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function y(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function w(e={}){const t=!1!==e.location,{onError:n}=e;function o(e,t,r,o,...s){const c=e.currentPosition();if(c.offset+=o,c.column+=o,n){const e=a(r,c),o=i(t,e,{domain:v,args:s});n(o)}}function s(e,n,r){const i={type:e,start:n,end:n};return t&&(i.loc={start:r,end:r}),i}function c(e,n,r,i){e.end=n,i&&(e.type=i),t&&e.loc&&(e.loc.end=r)}function l(e,t){const n=e.context(),r=s(3,n.offset,n.startLoc);return r.value=t,c(r,e.currentOffset(),e.currentPosition()),r}function u(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,o=s(5,r,i);return o.index=parseInt(t,10),e.nextToken(),c(o,e.currentOffset(),e.currentPosition()),o}function h(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,o=s(4,r,i);return o.key=t,e.nextToken(),c(o,e.currentOffset(),e.currentPosition()),o}function d(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:i}=n,o=s(9,r,i);return o.value=t.replace(b,y),e.nextToken(),c(o,e.currentOffset(),e.currentPosition()),o}function f(e){const t=e.nextToken(),n=e.context(),{lastOffset:r,lastStartLoc:i}=n,a=s(8,r,i);return 12!==t.type?(o(e,11,n.lastStartLoc,0),a.value="",c(a,r,i),{nextConsumeToken:t,node:a}):(null==t.value&&o(e,13,n.lastStartLoc,0,O(t)),a.value=t.value||"",c(a,e.currentOffset(),e.currentPosition()),{node:a})}function p(e,t){const n=e.context(),r=s(7,n.offset,n.startLoc);return r.value=t,c(r,e.currentOffset(),e.currentPosition()),r}function m(e){const t=e.context(),n=s(6,t.offset,t.startLoc);let r=e.nextToken();if(9===r.type){const t=f(e);n.modifier=t.node,r=t.nextConsumeToken||e.nextToken()}switch(10!==r.type&&o(e,13,t.lastStartLoc,0,O(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&o(e,13,t.lastStartLoc,0,O(r)),n.key=p(e,r.value||"");break;case 5:null==r.value&&o(e,13,t.lastStartLoc,0,O(r)),n.key=h(e,r.value||"");break;case 6:null==r.value&&o(e,13,t.lastStartLoc,0,O(r)),n.key=u(e,r.value||"");break;case 7:null==r.value&&o(e,13,t.lastStartLoc,0,O(r)),n.key=d(e,r.value||"");break;default:o(e,12,t.lastStartLoc,0);const i=e.context(),a=s(7,i.offset,i.startLoc);return a.value="",c(a,i.offset,i.startLoc),n.key=a,c(n,i.offset,i.startLoc),{nextConsumeToken:r,node:n}}return c(n,e.currentOffset(),e.currentPosition()),{node:n}}function g(e){const t=e.context(),n=1===t.currentType?e.currentOffset():t.offset,r=1===t.currentType?t.endLoc:t.startLoc,i=s(2,n,r);i.items=[];let a=null;do{const n=a||e.nextToken();switch(a=null,n.type){case 0:null==n.value&&o(e,13,t.lastStartLoc,0,O(n)),i.items.push(l(e,n.value||""));break;case 6:null==n.value&&o(e,13,t.lastStartLoc,0,O(n)),i.items.push(u(e,n.value||""));break;case 5:null==n.value&&o(e,13,t.lastStartLoc,0,O(n)),i.items.push(h(e,n.value||""));break;case 7:null==n.value&&o(e,13,t.lastStartLoc,0,O(n)),i.items.push(d(e,n.value||""));break;case 8:const r=m(e);i.items.push(r.node),a=r.nextConsumeToken||null;break}}while(14!==t.currentType&&1!==t.currentType);const f=1===t.currentType?t.lastOffset:e.currentOffset(),p=1===t.currentType?t.lastEndLoc:e.currentPosition();return c(i,f,p),i}function w(e,t,n,r){const i=e.context();let a=0===r.items.length;const l=s(1,t,n);l.cases=[],l.cases.push(r);do{const t=g(e);a||(a=0===t.items.length),l.cases.push(t)}while(14!==i.currentType);return a&&o(e,10,n,0),c(l,e.currentOffset(),e.currentPosition()),l}function k(e){const t=e.context(),{offset:n,startLoc:r}=t,i=g(e);return 14===t.currentType?i:w(e,n,r,i)}function C(n){const i=_(n,Object(r["a"])({},e)),a=i.context(),l=s(0,a.offset,a.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=k(i),14!==a.currentType&&o(i,13,a.lastStartLoc,0,n[a.offset]||""),c(l,i.currentOffset(),i.currentPosition()),l}return{parse:C}}function O(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function k(e,t={}){const n={ast:e,helpers:new Set},r=()=>n,i=e=>(n.helpers.add(e),e);return{context:r,helper:i}}function C(e,t){for(let n=0;n<e.length;n++)I(e[n],t)}function I(e,t){switch(e.type){case 1:C(e.cases,t),t.helper("plural");break;case 2:C(e.items,t);break;case 6:const n=e;I(n.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function j(e,t={}){const n=k(e);n.helper("normalize"),e.body&&I(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function T(e,t){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:o}=t,s={source:e.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:o,indentLevel:0},a=()=>s;function c(e,t){s.code+=e}function l(e,t=!0){const n=t?i:"";c(o?n+"  ".repeat(e):n)}function u(e=!0){const t=++s.indentLevel;e&&l(t)}function h(e=!0){const t=--s.indentLevel;e&&l(t)}function d(){l(s.indentLevel)}const f=e=>"_"+e,p=()=>s.needIndent;return{context:a,push:c,indent:u,deindent:h,newline:d,helper:f,needIndent:p}}function E(e,t){const{helper:n}=e;e.push(n("linked")+"("),R(e,t.key),t.modifier&&(e.push(", "),R(e,t.modifier)),e.push(")")}function S(e,t){const{helper:n,needIndent:r}=e;e.push(n("normalize")+"(["),e.indent(r());const i=t.items.length;for(let o=0;o<i;o++){if(R(e,t.items[o]),o===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}function x(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(n("plural")+"(["),e.indent(r());const i=t.cases.length;for(let n=0;n<i;n++){if(R(e,t.cases[n]),n===i-1)break;e.push(", ")}e.deindent(r()),e.push("])")}}function P(e,t){t.body?R(e,t.body):e.push("null")}function R(e,t){const{helper:n}=e;switch(t.type){case 0:P(e,t);break;case 1:x(e,t);break;case 2:S(e,t);break;case 6:E(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break;default:0}}const N=(e,t={})=>{const n=Object(r["p"])(t.mode)?t.mode:"normal",i=Object(r["p"])(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,s=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",a=t.needIndent?t.needIndent:"arrow"!==n,c=e.helpers||[],l=T(e,{mode:n,filename:i,sourceMap:o,breakLineCode:s,needIndent:a});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(a),c.length>0&&(l.push(`const { ${c.map(e=>`${e}: _${e}`).join(", ")} } = ctx`),l.newline()),l.push("return "),R(l,e),l.deindent(a),l.push("}");const{code:u,map:h}=l.context();return{ast:e,code:u,map:h?h.toJSON():void 0}};function A(e,t={}){const n=Object(r["a"])({},t),i=w(n),o=i.parse(e);return j(o,n),N(o,n)}
/*!
  * @intlify/message-resolver v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const L=Object.prototype.hasOwnProperty;function M(e,t){return L.call(e,t)}const D=e=>null!==e&&"object"===typeof e,F=[];F[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},F[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},F[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},F[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},F[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},F[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},F[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const U=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function q(e){return U.test(e)}function W(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}function V(e){if(void 0===e||null===e)return"o";const t=e.charCodeAt(0);switch(t){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function $(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(q(t)?W(t):"*"+t)}function H(e){const t=[];let n,r,i,o,s,a,c,l=-1,u=0,h=0;const d=[];function f(){const t=e[l+1];if(5===u&&"'"===t||6===u&&'"'===t)return l++,i="\\"+t,d[0](),!0}d[0]=()=>{void 0===r?r=i:r+=i},d[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2]=()=>{d[0](),h++},d[3]=()=>{if(h>0)h--,u=4,d[0]();else{if(h=0,void 0===r)return!1;if(r=$(r),!1===r)return!1;d[1]()}};while(null!==u)if(l++,n=e[l],"\\"!==n||!f()){if(o=V(n),c=F[u],s=c[o]||c["l"]||8,8===s)return;if(u=s[0],void 0!==s[1]&&(a=d[s[1]],a&&(i=n,!1===a())))return;if(7===u)return t}}const B=new Map;function z(e,t){if(!D(e))return null;let n=B.get(t);if(n||(n=H(t),n&&B.set(t,n)),!n)return null;const r=n.length;let i=e,o=0;while(o<r){const e=i[n[o]];if(void 0===e)return null;i=e,o++}return i}function G(e){if(!D(e))return e;for(const t in e)if(M(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let i=e;for(let e=0;e<r;e++)n[e]in i||(i[n[e]]={}),i=i[n[e]];i[n[r]]=e[t],delete e[t],D(i[n[r]])&&G(i[n[r]])}else D(e[t])&&G(e[t]);return e}
/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const K=e=>e,Y=e=>"",J="text",Q=e=>0===e.length?"":e.join(""),X=r["r"];function Z(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function ee(e){const t=Object(r["l"])(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Object(r["l"])(e.named.count)||Object(r["l"])(e.named.n))?Object(r["l"])(e.named.count)?e.named.count:Object(r["l"])(e.named.n)?e.named.n:t:t}function te(e,t){t.count||(t.count=e),t.n||(t.n=e)}function ne(e={}){const t=e.locale,n=ee(e),i=Object(r["m"])(e.pluralRules)&&Object(r["p"])(t)&&Object(r["k"])(e.pluralRules[t])?e.pluralRules[t]:Z,o=Object(r["m"])(e.pluralRules)&&Object(r["p"])(t)&&Object(r["k"])(e.pluralRules[t])?Z:void 0,s=e=>e[i(n,e.length,o)],a=e.list||[],c=e=>a[e],l=e.named||{};Object(r["l"])(e.pluralIndex)&&te(n,l);const u=e=>l[e];function h(t){const n=Object(r["k"])(e.messages)?e.messages(t):!!Object(r["m"])(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):Y)}const d=t=>e.modifiers?e.modifiers[t]:K,f=Object(r["n"])(e.processor)&&Object(r["k"])(e.processor.normalize)?e.processor.normalize:Q,p=Object(r["n"])(e.processor)&&Object(r["k"])(e.processor.interpolate)?e.processor.interpolate:X,m=Object(r["n"])(e.processor)&&Object(r["p"])(e.processor.type)?e.processor.type:J,g={["list"]:c,["named"]:u,["plural"]:s,["linked"]:(e,t)=>{const n=h(e)(g);return Object(r["p"])(t)?d(t)(n):n},["message"]:h,["type"]:m,["interpolate"]:p,["normalize"]:f};return g}
/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const re={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};
/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */let ie=null;function oe(e){ie=e}function se(e,t,n){ie&&ie.emit(re.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:n})}const ae=ce(re.FunctionTranslate);function ce(e){return t=>ie&&ie.emit(e,t)}const le="9.1.9",ue=-1,he="";function de(){return{upper:e=>Object(r["p"])(e)?e.toUpperCase():e,lower:e=>Object(r["p"])(e)?e.toLowerCase():e,capitalize:e=>Object(r["p"])(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let fe;function pe(e){fe=e}let me=null;const ge=e=>{me=e},_e=()=>me;let ve=0;function be(e={}){const t=Object(r["p"])(e.version)?e.version:le,n=Object(r["p"])(e.locale)?e.locale:"en-US",i=Object(r["g"])(e.fallbackLocale)||Object(r["n"])(e.fallbackLocale)||Object(r["p"])(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,o=Object(r["n"])(e.messages)?e.messages:{[n]:{}},s=Object(r["n"])(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},a=Object(r["n"])(e.numberFormats)?e.numberFormats:{[n]:{}},c=Object(r["a"])({},e.modifiers||{},de()),l=e.pluralRules||{},u=Object(r["k"])(e.missing)?e.missing:null,h=!Object(r["h"])(e.missingWarn)&&!Object(r["o"])(e.missingWarn)||e.missingWarn,d=!Object(r["h"])(e.fallbackWarn)&&!Object(r["o"])(e.fallbackWarn)||e.fallbackWarn,f=!!e.fallbackFormat,p=!!e.unresolving,m=Object(r["k"])(e.postTranslation)?e.postTranslation:null,g=Object(r["n"])(e.processor)?e.processor:null,_=!Object(r["h"])(e.warnHtmlMessage)||e.warnHtmlMessage,v=!!e.escapeParameter,b=Object(r["k"])(e.messageCompiler)?e.messageCompiler:fe,y=Object(r["k"])(e.onWarn)?e.onWarn:r["s"],w=e,O=Object(r["m"])(w.__datetimeFormatters)?w.__datetimeFormatters:new Map,k=Object(r["m"])(w.__numberFormatters)?w.__numberFormatters:new Map,C=Object(r["m"])(w.__meta)?w.__meta:{};ve++;const I={version:t,cid:ve,locale:n,fallbackLocale:i,messages:o,datetimeFormats:s,numberFormats:a,modifiers:c,pluralRules:l,missing:u,missingWarn:h,fallbackWarn:d,fallbackFormat:f,unresolving:p,postTranslation:m,processor:g,warnHtmlMessage:_,escapeParameter:v,messageCompiler:b,onWarn:y,__datetimeFormatters:O,__numberFormatters:k,__meta:C};return __INTLIFY_PROD_DEVTOOLS__&&se(I,t,C),I}function ye(e,t,n,i,o){const{missing:s,onWarn:a}=e;if(null!==s){const i=s(e,n,t,o);return Object(r["p"])(i)?i:t}return t}function we(e,t,n){const i=e;i.__localeChainCache||(i.__localeChainCache=new Map);let o=i.__localeChainCache.get(n);if(!o){o=[];let e=[n];while(Object(r["g"])(e))e=Oe(o,e,t);const s=Object(r["g"])(t)?t:Object(r["n"])(t)?t["default"]?t["default"]:null:t;e=Object(r["p"])(s)?[s]:s,Object(r["g"])(e)&&Oe(o,e,!1),i.__localeChainCache.set(n,o)}return o}function Oe(e,t,n){let i=!0;for(let o=0;o<t.length&&Object(r["h"])(i);o++){const s=t[o];Object(r["p"])(s)&&(i=ke(e,t[o],n))}return i}function ke(e,t,n){let r;const i=t.split("-");do{const t=i.join("-");r=Ce(e,t,n),i.splice(-1,1)}while(i.length&&!0===r);return r}function Ce(e,t,n){let i=!1;if(!e.includes(t)&&(i=!0,t)){i="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(Object(r["g"])(n)||Object(r["n"])(n))&&n[o]&&(i=n[o])}return i}function Ie(e,t,n){const r=e;r.__localeChainCache=new Map,we(e,n,t)}const je=e=>e;let Te=Object.create(null);function Ee(e,t={}){{const n=t.onCacheKey||je,r=n(e),i=Te[r];if(i)return i;let s=!1;const a=t.onError||o;t.onError=e=>{s=!0,a(e)};const{code:c}=A(e,t),l=new Function("return "+c)();return s?l:Te[r]=l}}function Se(e){return i(e,null,void 0)}const xe=()=>"",Pe=e=>Object(r["k"])(e);function Re(e,...t){const{fallbackFormat:n,postTranslation:i,unresolving:o,fallbackLocale:s,messages:a}=e,[c,l]=De(...t),u=Object(r["h"])(l.missingWarn)?l.missingWarn:e.missingWarn,h=Object(r["h"])(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,d=Object(r["h"])(l.escapeParameter)?l.escapeParameter:e.escapeParameter,f=!!l.resolvedMessage,p=Object(r["p"])(l.default)||Object(r["h"])(l.default)?Object(r["h"])(l.default)?c:l.default:n?c:"",m=n||""!==p,g=Object(r["p"])(l.locale)?l.locale:e.locale;d&&Ne(l);let[_,v,b]=f?[c,g,a[g]||{}]:Ae(e,c,g,s,h,u),y=c;if(f||Object(r["p"])(_)||Pe(_)||m&&(_=p,y=_),!f&&(!Object(r["p"])(_)&&!Pe(_)||!Object(r["p"])(v)))return o?ue:c;let w=!1;const O=()=>{w=!0},k=Pe(_)?_:Le(e,c,v,_,y,O);if(w)return _;const C=Ue(e,v,b,l),I=ne(C),j=Me(e,k,I),T=i?i(j):j;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:Object(r["p"])(c)?c:Pe(_)?_.key:"",locale:v||(Pe(_)?_.locale:""),format:Object(r["p"])(_)?_:Pe(_)?_.source:"",message:T};t.meta=Object(r["a"])({},e.__meta,_e()||{}),ae(t)}return T}function Ne(e){Object(r["g"])(e.list)?e.list=e.list.map(e=>Object(r["p"])(e)?Object(r["b"])(e):e):Object(r["m"])(e.named)&&Object.keys(e.named).forEach(t=>{Object(r["p"])(e.named[t])&&(e.named[t]=Object(r["b"])(e.named[t]))})}function Ae(e,t,n,i,o,s){const{messages:a,onWarn:c}=e,l=we(e,i,n);let u,h={},d=null,f=n,p=null;const m="translate";for(let g=0;g<l.length;g++){u=p=l[g],h=a[u]||{};if(null===(d=z(h,t))&&(d=h[t]),Object(r["p"])(d)||Object(r["k"])(d))break;const n=ye(e,t,u,s,m);n!==t&&(d=n),f=p}return[d,u,h]}function Le(e,t,n,r,i,o){const{messageCompiler:s,warnHtmlMessage:a}=e;if(Pe(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}const c=s(r,Fe(e,n,i,r,a,o));return c.locale=n,c.key=t,c.source=r,c}function Me(e,t,n){const r=t(n);return r}function De(...e){const[t,n,i]=e,o={};if(!Object(r["p"])(t)&&!Object(r["l"])(t)&&!Pe(t))throw Se(14);const s=Object(r["l"])(t)?String(t):(Pe(t),t);return Object(r["l"])(n)?o.plural=n:Object(r["p"])(n)?o.default=n:Object(r["n"])(n)&&!Object(r["j"])(n)?o.named=n:Object(r["g"])(n)&&(o.list=n),Object(r["l"])(i)?o.plural=i:Object(r["p"])(i)?o.default=i:Object(r["n"])(i)&&Object(r["a"])(o,i),[s,o]}function Fe(e,t,n,i,o,s){return{warnHtmlMessage:o,onError:e=>{throw s&&s(e),e},onCacheKey:e=>Object(r["d"])(t,n,e)}}function Ue(e,t,n,i){const{modifiers:o,pluralRules:s}=e,a=i=>{const o=z(n,i);if(Object(r["p"])(o)){let n=!1;const r=()=>{n=!0},s=Le(e,i,t,o,i,r);return n?xe:s}return Pe(o)?o:xe},c={locale:t,modifiers:o,pluralRules:s,messages:a};return e.processor&&(c.processor=e.processor),i.list&&(c.list=i.list),i.named&&(c.named=i.named),Object(r["l"])(i.plural)&&(c.pluralIndex=i.plural),c}const qe="undefined"!==typeof Intl;qe&&Intl.DateTimeFormat,qe&&Intl.NumberFormat;function We(e,...t){const{datetimeFormats:n,unresolving:i,fallbackLocale:o,onWarn:s}=e,{__datetimeFormatters:a}=e;const[c,l,u,h]=Ve(...t),d=Object(r["h"])(u.missingWarn)?u.missingWarn:e.missingWarn,f=(Object(r["h"])(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,!!u.part),p=Object(r["p"])(u.locale)?u.locale:e.locale,m=we(e,o,p);if(!Object(r["p"])(c)||""===c)return new Intl.DateTimeFormat(p).format(l);let g,_={},v=null,b=p,y=null;const w="datetime format";for(let C=0;C<m.length;C++){if(g=y=m[C],_=n[g]||{},v=_[c],Object(r["n"])(v))break;ye(e,c,g,d,w),b=y}if(!Object(r["n"])(v)||!Object(r["p"])(g))return i?ue:c;let O=`${g}__${c}`;Object(r["j"])(h)||(O=`${O}__${JSON.stringify(h)}`);let k=a.get(O);return k||(k=new Intl.DateTimeFormat(g,Object(r["a"])({},v,h)),a.set(O,k)),f?k.formatToParts(l):k.format(l)}function Ve(...e){const[t,n,i,o]=e;let s,a={},c={};if(Object(r["p"])(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw Se(16);s=new Date(t);try{s.toISOString()}catch(l){throw Se(16)}}else if(Object(r["i"])(t)){if(isNaN(t.getTime()))throw Se(15);s=t}else{if(!Object(r["l"])(t))throw Se(14);s=t}return Object(r["p"])(n)?a.key=n:Object(r["n"])(n)&&(a=n),Object(r["p"])(i)?a.locale=i:Object(r["n"])(i)&&(c=i),Object(r["n"])(o)&&(c=o),[a.key||"",s,a,c]}function $e(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function He(e,...t){const{numberFormats:n,unresolving:i,fallbackLocale:o,onWarn:s}=e,{__numberFormatters:a}=e;const[c,l,u,h]=Be(...t),d=Object(r["h"])(u.missingWarn)?u.missingWarn:e.missingWarn,f=(Object(r["h"])(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,!!u.part),p=Object(r["p"])(u.locale)?u.locale:e.locale,m=we(e,o,p);if(!Object(r["p"])(c)||""===c)return new Intl.NumberFormat(p).format(l);let g,_={},v=null,b=p,y=null;const w="number format";for(let C=0;C<m.length;C++){if(g=y=m[C],_=n[g]||{},v=_[c],Object(r["n"])(v))break;ye(e,c,g,d,w),b=y}if(!Object(r["n"])(v)||!Object(r["p"])(g))return i?ue:c;let O=`${g}__${c}`;Object(r["j"])(h)||(O=`${O}__${JSON.stringify(h)}`);let k=a.get(O);return k||(k=new Intl.NumberFormat(g,Object(r["a"])({},v,h)),a.set(O,k)),f?k.formatToParts(l):k.format(l)}function Be(...e){const[t,n,i,o]=e;let s={},a={};if(!Object(r["l"])(t))throw Se(14);const c=t;return Object(r["p"])(n)?s.key=n:Object(r["n"])(n)&&(s=n),Object(r["p"])(i)?s.locale=i:Object(r["n"])(i)&&(a=i),Object(r["n"])(o)&&(a=o),[s.key||"",c,s,a]}function ze(e,t,n){const r=e;for(const i in n){const e=`${t}__${i}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(r["e"])().__INTLIFY_PROD_DEVTOOLS__=!1);var Ge=n("7a23");n("3f4e");
/*!
  * @intlify/vue-devtools v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ke="9.1.9";function Ye(){"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(r["e"])().__INTLIFY_PROD_DEVTOOLS__=!1)}function Je(e,...t){return i(e,null,void 0)}const Qe="__INTLIFY_META__",Xe=Object(r["q"])("__transrateVNode"),Ze=Object(r["q"])("__datetimeParts"),et=Object(r["q"])("__numberParts"),tt=(Object(r["q"])("__enableEmitter"),Object(r["q"])("__disableEmitter"),Object(r["q"])("__setPluralRules"));Object(r["q"])("__intlifyMeta");const nt=Object(r["q"])("__injectWithOption");let rt=0;function it(e){return(t,n,r,i)=>e(n,r,Object(Ge["m"])()||void 0,i)}function ot(e,t){const{messages:n,__i18n:i}=t,o=Object(r["n"])(n)?n:Object(r["g"])(i)?{}:{[e]:{}};if(Object(r["g"])(i)&&i.forEach(({locale:e,resource:t})=>{e?(o[e]=o[e]||{},at(t,o[e])):at(t,o)}),t.flatJson)for(const s in o)Object(r["f"])(o,s)&&G(o[s]);return o}const st=e=>!Object(r["m"])(e)||Object(r["g"])(e);function at(e,t){if(st(e)||st(t))throw Je(20);for(const n in e)Object(r["f"])(e,n)&&(st(e[n])||st(t[n])?t[n]=e[n]:at(e[n],t[n]))}const ct=()=>{const e=Object(Ge["m"])();return e&&e.type[Qe]?{[Qe]:e.type[Qe]}:null};function lt(e={}){const{__root:t}=e,n=void 0===t;let i=!Object(r["h"])(e.inheritLocale)||e.inheritLocale;const o=Object(Ge["E"])(t&&i?t.locale.value:Object(r["p"])(e.locale)?e.locale:"en-US"),s=Object(Ge["E"])(t&&i?t.fallbackLocale.value:Object(r["p"])(e.fallbackLocale)||Object(r["g"])(e.fallbackLocale)||Object(r["n"])(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:o.value),a=Object(Ge["E"])(ot(o.value,e)),c=Object(Ge["E"])(Object(r["n"])(e.datetimeFormats)?e.datetimeFormats:{[o.value]:{}}),l=Object(Ge["E"])(Object(r["n"])(e.numberFormats)?e.numberFormats:{[o.value]:{}});let u=t?t.missingWarn:!Object(r["h"])(e.missingWarn)&&!Object(r["o"])(e.missingWarn)||e.missingWarn,h=t?t.fallbackWarn:!Object(r["h"])(e.fallbackWarn)&&!Object(r["o"])(e.fallbackWarn)||e.fallbackWarn,d=t?t.fallbackRoot:!Object(r["h"])(e.fallbackRoot)||e.fallbackRoot,f=!!e.fallbackFormat,p=Object(r["k"])(e.missing)?e.missing:null,m=Object(r["k"])(e.missing)?it(e.missing):null,g=Object(r["k"])(e.postTranslation)?e.postTranslation:null,_=!Object(r["h"])(e.warnHtmlMessage)||e.warnHtmlMessage,v=!!e.escapeParameter;const b=t?t.modifiers:Object(r["n"])(e.modifiers)?e.modifiers:{};let y,w=e.pluralRules||t&&t.pluralRules;function O(){return be({version:Ke,locale:o.value,fallbackLocale:s.value,messages:a.value,datetimeFormats:c.value,numberFormats:l.value,modifiers:b,pluralRules:w,missing:null===m?void 0:m,missingWarn:u,fallbackWarn:h,fallbackFormat:f,unresolving:!0,postTranslation:null===g?void 0:g,warnHtmlMessage:_,escapeParameter:v,__datetimeFormatters:Object(r["n"])(y)?y.__datetimeFormatters:void 0,__numberFormatters:Object(r["n"])(y)?y.__numberFormatters:void 0,__v_emitter:Object(r["n"])(y)?y.__v_emitter:void 0,__meta:{framework:"vue"}})}function k(){return[o.value,s.value,a.value,c.value,l.value]}y=O(),Ie(y,o.value,s.value);const C=Object(Ge["c"])({get:()=>o.value,set:e=>{o.value=e,y.locale=o.value}}),I=Object(Ge["c"])({get:()=>s.value,set:e=>{s.value=e,y.fallbackLocale=s.value,Ie(y,o.value,e)}}),j=Object(Ge["c"])(()=>a.value),T=Object(Ge["c"])(()=>c.value),E=Object(Ge["c"])(()=>l.value);function S(){return Object(r["k"])(g)?g:null}function x(e){g=e,y.postTranslation=e}function P(){return p}function R(e){null!==e&&(m=it(e)),p=e,y.missing=m}function N(e,n,i,o,s,a){let c;if(k(),__INTLIFY_PROD_DEVTOOLS__)try{ge(ct()),c=e(y)}finally{ge(null)}else c=e(y);if(Object(r["l"])(c)&&c===ue){const[e,r]=n();return t&&d?o(t):s(e)}if(a(c))return c;throw Je(14)}function A(...e){return N(t=>Re(t,...e),()=>De(...e),"translate",t=>t.t(...e),e=>e,e=>Object(r["p"])(e))}function L(...e){const[t,n,i]=e;if(i&&!Object(r["m"])(i))throw Je(15);return A(t,n,Object(r["a"])({resolvedMessage:!0},i||{}))}function M(...e){return N(t=>We(t,...e),()=>Ve(...e),"datetime format",t=>t.d(...e),()=>he,e=>Object(r["p"])(e))}function D(...e){return N(t=>He(t,...e),()=>Be(...e),"number format",t=>t.n(...e),()=>he,e=>Object(r["p"])(e))}function F(e){return e.map(e=>Object(r["p"])(e)?Object(Ge["k"])(Ge["b"],null,e,0):e)}const U=e=>e,q={normalize:F,interpolate:U,type:"vnode"};function W(...e){return N(t=>{let n;const r=t;try{r.processor=q,n=Re(r,...e)}finally{r.processor=null}return n},()=>De(...e),"translate",t=>t[Xe](...e),e=>[Object(Ge["k"])(Ge["b"],null,e,0)],e=>Object(r["g"])(e))}function V(...e){return N(t=>He(t,...e),()=>Be(...e),"number format",t=>t[et](...e),()=>[],e=>Object(r["p"])(e)||Object(r["g"])(e))}function $(...e){return N(t=>We(t,...e),()=>Ve(...e),"datetime format",t=>t[Ze](...e),()=>[],e=>Object(r["p"])(e)||Object(r["g"])(e))}function H(e){w=e,y.pluralRules=w}function B(e,t){const n=Object(r["p"])(t)?t:o.value,i=Y(n);return null!==z(i,e)}function G(e){let t=null;const n=we(y,s.value,o.value);for(let r=0;r<n.length;r++){const i=a.value[n[r]]||{},o=z(i,e);if(null!=o){t=o;break}}return t}function K(e){const n=G(e);return null!=n?n:t&&t.tm(e)||{}}function Y(e){return a.value[e]||{}}function J(e,t){a.value[e]=t,y.messages=a.value}function Q(e,t){a.value[e]=a.value[e]||{},at(t,a.value[e]),y.messages=a.value}function X(e){return c.value[e]||{}}function Z(e,t){c.value[e]=t,y.datetimeFormats=c.value,$e(y,e,t)}function ee(e,t){c.value[e]=Object(r["a"])(c.value[e]||{},t),y.datetimeFormats=c.value,$e(y,e,t)}function te(e){return l.value[e]||{}}function ne(e,t){l.value[e]=t,y.numberFormats=l.value,ze(y,e,t)}function re(e,t){l.value[e]=Object(r["a"])(l.value[e]||{},t),y.numberFormats=l.value,ze(y,e,t)}rt++,t&&(Object(Ge["P"])(t.locale,e=>{i&&(o.value=e,y.locale=e,Ie(y,o.value,s.value))}),Object(Ge["P"])(t.fallbackLocale,e=>{i&&(s.value=e,y.fallbackLocale=e,Ie(y,o.value,s.value))}));const ie={id:rt,locale:C,fallbackLocale:I,get inheritLocale(){return i},set inheritLocale(e){i=e,e&&t&&(o.value=t.locale.value,s.value=t.fallbackLocale.value,Ie(y,o.value,s.value))},get availableLocales(){return Object.keys(a.value).sort()},messages:j,datetimeFormats:T,numberFormats:E,get modifiers(){return b},get pluralRules(){return w||{}},get isGlobal(){return n},get missingWarn(){return u},set missingWarn(e){u=e,y.missingWarn=u},get fallbackWarn(){return h},set fallbackWarn(e){h=e,y.fallbackWarn=h},get fallbackRoot(){return d},set fallbackRoot(e){d=e},get fallbackFormat(){return f},set fallbackFormat(e){f=e,y.fallbackFormat=f},get warnHtmlMessage(){return _},set warnHtmlMessage(e){_=e,y.warnHtmlMessage=e},get escapeParameter(){return v},set escapeParameter(e){v=e,y.escapeParameter=e},t:A,rt:L,d:M,n:D,te:B,tm:K,getLocaleMessage:Y,setLocaleMessage:J,mergeLocaleMessage:Q,getDateTimeFormat:X,setDateTimeFormat:Z,mergeDateTimeFormat:ee,getNumberFormat:te,setNumberFormat:ne,mergeNumberFormat:re,getPostTranslationHandler:S,setPostTranslationHandler:x,getMissingHandler:P,setMissingHandler:R,[Xe]:W,[et]:V,[Ze]:$,[tt]:H,[nt]:e.__injectWithOption};return ie}function ut(e){const t=Object(r["p"])(e.locale)?e.locale:"en-US",n=Object(r["p"])(e.fallbackLocale)||Object(r["g"])(e.fallbackLocale)||Object(r["n"])(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,i=Object(r["k"])(e.missing)?e.missing:void 0,o=!Object(r["h"])(e.silentTranslationWarn)&&!Object(r["o"])(e.silentTranslationWarn)||!e.silentTranslationWarn,s=!Object(r["h"])(e.silentFallbackWarn)&&!Object(r["o"])(e.silentFallbackWarn)||!e.silentFallbackWarn,a=!Object(r["h"])(e.fallbackRoot)||e.fallbackRoot,c=!!e.formatFallbackMessages,l=Object(r["n"])(e.modifiers)?e.modifiers:{},u=e.pluralizationRules,h=Object(r["k"])(e.postTranslation)?e.postTranslation:void 0,d=!Object(r["p"])(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,f=!!e.escapeParameterHtml,p=!Object(r["h"])(e.sync)||e.sync;let m=e.messages;if(Object(r["n"])(e.sharedMessages)){const t=e.sharedMessages,n=Object.keys(t);m=n.reduce((e,n)=>{const i=e[n]||(e[n]={});return Object(r["a"])(i,t[n]),e},m||{})}const{__i18n:g,__root:_,__injectWithOption:v}=e,b=e.datetimeFormats,y=e.numberFormats,w=e.flatJson;return{locale:t,fallbackLocale:n,messages:m,flatJson:w,datetimeFormats:b,numberFormats:y,missing:i,missingWarn:o,fallbackWarn:s,fallbackRoot:a,fallbackFormat:c,modifiers:l,pluralRules:u,postTranslation:h,warnHtmlMessage:d,escapeParameter:f,inheritLocale:p,__i18n:g,__root:_,__injectWithOption:v}}function ht(e={}){const t=lt(ut(e)),n={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(e){},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return Object(r["h"])(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=Object(r["h"])(e)?!e:e},get silentFallbackWarn(){return Object(r["h"])(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=Object(r["h"])(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){t.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(e){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...e){const[n,i,o]=e,s={};let a=null,c=null;if(!Object(r["p"])(n))throw Je(15);const l=n;return Object(r["p"])(i)?s.locale=i:Object(r["g"])(i)?a=i:Object(r["n"])(i)&&(c=i),Object(r["g"])(o)?a=o:Object(r["n"])(o)&&(c=o),t.t(l,a||c||{},s)},rt(...e){return t.rt(...e)},tc(...e){const[n,i,o]=e,s={plural:1};let a=null,c=null;if(!Object(r["p"])(n))throw Je(15);const l=n;return Object(r["p"])(i)?s.locale=i:Object(r["l"])(i)?s.plural=i:Object(r["g"])(i)?a=i:Object(r["n"])(i)&&(c=i),Object(r["p"])(o)?s.locale=o:Object(r["g"])(o)?a=o:Object(r["n"])(o)&&(c=o),t.t(l,a||c||{},s)},te(e,n){return t.te(e,n)},tm(e){return t.tm(e)},getLocaleMessage(e){return t.getLocaleMessage(e)},setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d(...e){return t.d(...e)},getDateTimeFormat(e){return t.getDateTimeFormat(e)},setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n(...e){return t.n(...e)},getNumberFormat(e){return t.getNumberFormat(e)},setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)},getChoiceIndex(e,t){return-1},__onComponentInstanceCreated(t){const{componentInstanceCreatedListener:r}=e;r&&r(t,n)}};return n}const dt={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}},ft={name:"i18n-t",props:Object(r["a"])({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Object(r["l"])(e)||!isNaN(e)}},dt),setup(e,t){const{slots:n,attrs:i}=t,o=e.i18n||Et({useScope:e.scope,__useComponent:!0}),s=Object.keys(n).filter(e=>"_"!==e);return()=>{const n={};e.locale&&(n.locale=e.locale),void 0!==e.plural&&(n.plural=Object(r["p"])(e.plural)?+e.plural:e.plural);const a=pt(t,s),c=o[Xe](e.keypath,a,n),l=Object(r["a"])({},i);return Object(r["p"])(e.tag)||Object(r["m"])(e.tag)?Object(Ge["n"])(e.tag,l,c):Object(Ge["n"])(Ge["a"],l,c)}}};function pt({slots:e},t){return 1===t.length&&"default"===t[0]?e.default?e.default():[]:t.reduce((t,n)=>{const r=e[n];return r&&(t[n]=r()),t},{})}function mt(e,t,n,i){const{slots:o,attrs:s}=t;return()=>{const t={part:!0};let a={};e.locale&&(t.locale=e.locale),Object(r["p"])(e.format)?t.key=e.format:Object(r["m"])(e.format)&&(Object(r["p"])(e.format.key)&&(t.key=e.format.key),a=Object.keys(e.format).reduce((t,i)=>n.includes(i)?Object(r["a"])({},t,{[i]:e.format[i]}):t,{}));const c=i(e.value,t,a);let l=[t.key];Object(r["g"])(c)?l=c.map((e,t)=>{const n=o[e.type];return n?n({[e.type]:e.value,index:t,parts:c}):[e.value]}):Object(r["p"])(c)&&(l=[c]);const u=Object(r["a"])({},s);return Object(r["p"])(e.tag)||Object(r["m"])(e.tag)?Object(Ge["n"])(e.tag,u,l):Object(Ge["n"])(Ge["a"],u,l)}}const gt=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],_t={name:"i18n-n",props:Object(r["a"])({value:{type:Number,required:!0},format:{type:[String,Object]}},dt),setup(e,t){const n=e.i18n||Et({useScope:"parent",__useComponent:!0});return mt(e,t,gt,(...e)=>n[et](...e))}},vt=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],bt={name:"i18n-d",props:Object(r["a"])({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},dt),setup(e,t){const n=e.i18n||Et({useScope:"parent",__useComponent:!0});return mt(e,t,vt,(...e)=>n[Ze](...e))}};function yt(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}function wt(e){const t=(t,{instance:n,value:r,modifiers:i})=>{if(!n||!n.$)throw Je(22);const o=yt(e,n.$);const s=Ot(r);t.textContent=o.t(...kt(s))};return{beforeMount:t,beforeUpdate:t}}function Ot(e){if(Object(r["p"])(e))return{path:e};if(Object(r["n"])(e)){if(!("path"in e))throw Je(19,"path");return e}throw Je(20)}function kt(e){const{path:t,locale:n,args:i,choice:o,plural:s}=e,a={},c=i||{};return Object(r["p"])(n)&&(a.locale=n),Object(r["l"])(o)&&(a.plural=o),Object(r["l"])(s)&&(a.plural=s),[t,c,a]}function Ct(e,t,...n){const i=Object(r["n"])(n[0])?n[0]:{},o=!!i.useI18nComponentName,s=!Object(r["h"])(i.globalInstall)||i.globalInstall;s&&(e.component(o?"i18n":ft.name,ft),e.component(_t.name,_t),e.component(bt.name,bt)),e.directive("t",wt(t))}function It(e,t,n){return{beforeCreate(){const r=Object(Ge["m"])();if(!r)throw Je(22);const i=this.$options;if(i.i18n){const n=i.i18n;i.__i18n&&(n.__i18n=i.__i18n),n.__root=t,this===this.$root?this.$i18n=jt(e,n):(n.__injectWithOption=!0,this.$i18n=ht(n))}else i.__i18n?this===this.$root?this.$i18n=jt(e,i):this.$i18n=ht({__i18n:i.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;e.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$tc=(...e)=>this.$i18n.tc(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e)},mounted(){0},beforeUnmount(){const e=Object(Ge["m"])();if(!e)throw Je(22);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(e),delete this.$i18n}}}function jt(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[tt](t.pluralizationRules||e.pluralizationRules);const n=ot(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach(t=>e.mergeLocaleMessage(t,n[t])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n])),t.numberFormats&&Object.keys(t.numberFormats).forEach(n=>e.mergeNumberFormat(n,t.numberFormats[n])),e}function Tt(e={}){const t=!Object(r["h"])(e.legacy)||e.legacy,n=!!e.globalInjection,i=new Map,o=t?ht(e):lt(e),s=Object(r["q"])(""),a={get mode(){return t?"legacy":"composition"},async install(e,...r){e.__VUE_I18N_SYMBOL__=s,e.provide(e.__VUE_I18N_SYMBOL__,a),!t&&n&&Nt(e,a.global),Ct(e,a,...r),t&&e.mixin(It(o,o.__composer,a))},get global(){return o},__instances:i,__getInstance(e){return i.get(e)||null},__setInstance(e,t){i.set(e,t)},__deleteInstance(e){i.delete(e)}};return a}function Et(e={}){const t=Object(Ge["m"])();if(null==t)throw Je(16);if(!t.appContext.app.__VUE_I18N_SYMBOL__)throw Je(17);const n=Object(Ge["o"])(t.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw Je(22);const i="composition"===n.mode?n.global:n.global.__composer,o=Object(r["j"])(e)?"__i18n"in t.type?"local":"global":e.useScope?e.useScope:"local";if("global"===o){let n=Object(r["m"])(e.messages)?e.messages:{};"__i18nGlobal"in t.type&&(n=ot(i.locale.value,{messages:n,__i18n:t.type.__i18nGlobal}));const o=Object.keys(n);if(o.length&&o.forEach(e=>{i.mergeLocaleMessage(e,n[e])}),Object(r["m"])(e.datetimeFormats)){const t=Object.keys(e.datetimeFormats);t.length&&t.forEach(t=>{i.mergeDateTimeFormat(t,e.datetimeFormats[t])})}if(Object(r["m"])(e.numberFormats)){const t=Object.keys(e.numberFormats);t.length&&t.forEach(t=>{i.mergeNumberFormat(t,e.numberFormats[t])})}return i}if("parent"===o){let r=St(n,t,e.__useComponent);return null==r&&(r=i),r}if("legacy"===n.mode)throw Je(18);const s=n;let a=s.__getInstance(t);if(null==a){const n=t.type,o=Object(r["a"])({},e);n.__i18n&&(o.__i18n=n.__i18n),i&&(o.__root=i),a=lt(o),xt(s,t,a),s.__setInstance(t,a)}return a}function St(e,t,n=!1){let r=null;const i=t.root;let o=t.parent;while(null!=o){const t=e;if("composition"===e.mode)r=t.__getInstance(o);else{const e=t.__getInstance(o);null!=e&&(r=e.__composer),n&&r&&!r[nt]&&(r=null)}if(null!=r)break;if(i===o)break;o=o.parent}return r}function xt(e,t,n){Object(Ge["w"])(()=>{0},t),Object(Ge["x"])(()=>{e.__deleteInstance(t)},t)}const Pt=["locale","fallbackLocale","availableLocales"],Rt=["t","rt","d","n","tm"];function Nt(e,t){const n=Object.create(null);Pt.forEach(e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw Je(22);const i=Object(Ge["p"])(r.value)?{get(){return r.value.value},set(e){r.value.value=e}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,e,i)}),e.config.globalProperties.$i18n=n,Rt.forEach(n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw Je(22);Object.defineProperty(e.config.globalProperties,"$"+n,r)})}if(pe(Ee),Ye(),__INTLIFY_PROD_DEVTOOLS__){const e=Object(r["e"])();e.__INTLIFY__=!0,oe(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("1626"),i=n("861d");e.exports=function(e,t){var n,o;if("string"===t&&r(n=e.toString)&&!i(o=n.call(e)))return o;if(r(n=e.valueOf)&&!i(o=n.call(e)))return o;if("string"!==t&&r(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(e){return function(t,n,s){var a,c=r(t),l=i(c.length),u=o(s,l);if(e&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4fc1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},5087:function(e,t,n){var r=n("68ee"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("a691"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5135:function(e,t,n){var r=n("7b0b"),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Xs})),n.d(t,"b",(function(){return Hs})),n.d(t,"c",(function(){return Fs})),n.d(t,"d",(function(){return qs}));var r=n("5606"),i=n("ffa6"),o=n("1fd5"),s=n("4fc1");const a="@firebase/database",c="0.12.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="";function u(e){l=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["H"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["A"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),m=f("sessionStorage"),g=new s["b"]("@firebase/database"),_=function(){let e=1;return function(){return e++}}(),v=function(e){const t=Object(o["G"])(e),n=new o["d"];n.update(t);const r=n.digest();return o["g"].encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?Object(o["H"])(r):r,t+=" "}return t};let y=null,w=!0;const O=function(e,t){Object(o["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=s["a"].VERBOSE,y=g.log.bind(g),t&&m.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,m.remove("logging_enabled"))},k=function(...e){if(!0===w&&(w=!1,null===y&&!0===m.get("logging_enabled")&&O(!0)),y){const t=b.apply(null,e);y(t)}},C=function(e){return function(...t){k(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);g.error(t)},j=function(...e){const t="FIREBASE FATAL ERROR: "+b(...e);throw g.error(t),new Error(t)},T=function(...e){const t="FIREBASE WARNING: "+b(...e);g.warn(t)},E=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&T("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},x=function(e){if(Object(o["x"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",R="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=z(e),r=z(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["H"])(t))},M=function(e){if("object"!==typeof e||null===e)return Object(o["H"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o["H"])(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},D=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const U=function(e){Object(o["e"])(!S(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,l;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(a%2?1:0),a=Math.floor(a/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(h.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},q=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},W=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const $=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,B=2147483647,z=function(e){if($.test(e)){const t=Number(e);if(t>=H&&t<=B)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw T("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){T(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(k("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',T(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",le="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(o["e"])("string"===typeof t,"typeof type must == string"),Object(o["e"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==le)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},me={};function ge(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function _e(e,t){const n=e.toString();return me[n]||(me[n]=t()),me[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="start",ye="close",we="pLPCommand",Oe="pRTLPCB",ke="id",Ce="pw",Ie="ser",je="cb",Te="seg",Ee="ts",Se="d",xe="dframe",Pe=1870,Re=30,Ne=Pe-Re,Ae=25e3,Le=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=C(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,le,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ve(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),x(()=>{if(this.isClosed_)return;this.scriptTagHolder=new De((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[be]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[je]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!Object(o["x"])()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!q()&&!W())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o["i"])(t),r=D(n,Ne);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o["x"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[xe]="t",n[ke]=e,n[Ce]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o["H"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class De{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["x"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=_(),window[we+this.uniqueCallbackIdentifier]=e,window[Oe+this.uniqueCallbackIdentifier]=t,this.myIFrame=De.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){k("frame writing exception"),i.stack&&k(i.stack),k(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||k("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ke]=this.myID,e[Ce]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+Te+r+"="+e.seg+"&"+Ee+r+"="+e.ts+"&"+Se+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(o["x"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{k("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=16384,Ue=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class We{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=C(this.connId),this.stats_=ge(t),this.connURL=We.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[ee]=Z,!Object(o["x"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(i[ne]=re),t&&(i[te]=t),n&&(i[oe]=n),r&&(i[ae]=r),de(e,ce,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["x"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${l}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",VUE_APP_I18N_FALLBACK_LOCALE:"ua",VUE_APP_I18N_LOCALE:"ru",VUE_APP_I18N_SUPPORTED_LOCALE:"ru,ua",BASE_URL:"/cinema-cms/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new qe(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qe(this.connURL,[],e)}}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!We.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o["A"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o["H"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=D(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ue))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,We]}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||T("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=6e4,He=5e3,Be=10240,ze=102400,Ge="t",Ke="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=C("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ze?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Be?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?I("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&T("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($e))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(o["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["w"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(o["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,ct=768;class lt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ut(){return new lt("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lt(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function _t(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lt(t,0)}function vt(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof lt)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lt(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return yt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ot(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["F"])(this.parts_[n]);jt(this)}}function Ct(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["F"])(t),jt(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=Object(o["F"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function jt(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Tt(e))}function Tt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Et}getInitialEvent(e){return Object(o["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1e3,xt=3e5,Pt=3e3,Rt=3e4,Nt=1.3,At=3e4,Lt="server_kill",Mt=3;class Dt extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Dt.nextPersistentConnectionId_++,this.log_=C("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=St,this.maxReconnectDelay_=xt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["x"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Et.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["H"])(i)),Object(o["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},Pt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["e"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Dt.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(o["j"])(e,"w")){const n=Object(o["E"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();T(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(o["s"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o["z"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o["H"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+Object(o["H"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>At&&(this.reconnectDelay_=St),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Nt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Dt.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},l=function(e){Object(o["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);s?k("getToken() completed but was canceled"):(k("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{T(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Lt)},i))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&T(I),c())}}}interrupt(e){k("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){k("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["u"])(this.interruptReasons_)&&(this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new lt(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){k("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mt&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){k("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o["x"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+l.replace(/\./g,"-")]=1,Object(o["w"])()?e["framework.cordova"]=1:Object(o["y"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(o["u"])(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0,Dt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ft{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ft(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Ft(P,e),r=new Ft(P,t);return 0!==this.compare(n,r)}minPost(){return Ft.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Wt extends Ut{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(o["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ft.MIN}maxPost(){return new Ft(R,qt)}makePost(e,t){return Object(o["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Ft(e,qt)}toString(){return".key"}}const Vt=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=r?r:zt.EMPTY_NODE,this.right=null!=i?i:zt.EMPTY_NODE}copy(e,t,n,r,i){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class Bt{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,t=zt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $t(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e,t){return N(e.name,t.name)}function Kt(e,t){return N(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt;function Jt(e){Yt=e}zt.EMPTY_NODE=new Bt;const Qt=function(e){return"number"===typeof e?"number:"+U(e):"string:"+e},Xt=function(e){if(e.isLeafNode()){const t=e.val();Object(o["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["j"])(t,".sv"),"Priority must be a string or number.")}else Object(o["e"])(e===Yt||e.isEmpty(),"priority of unexpected type.");Object(o["e"])(e===Yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ht(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?U(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(o["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nn.VALUE_TYPE_ORDER.indexOf(t),i=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["e"])(r>=0,"Unknown leaf type: "+t),Object(o["e"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function rn(e){en=e}function on(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class sn extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ft.MIN}maxPost(){return new Ft(R,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Ft(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new sn,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=i(t,c),u=i(c+1,r);return s=e[c],a=n?n(s):s,new Ht(a,s.node,Ht.BLACK,l,u)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const l=i(o+1,a),u=e[o],h=n?n(u):u;c(new Ht(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ht.BLACK):(a(r,Ht.BLACK),a(r,Ht.RED))}return o},s=new ln(e.length),a=o(s);return new zt(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;const dn={};class fn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),hn=hn||new fn({".priority":dn},{".priority":an}),hn}get(e){const t=Object(o["E"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zt?t:null}hasIndex(e){return Object(o["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(o["e"])(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Ft.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?un(n,e.getCompare()):dn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=s,new fn(u,l)}addToIndexes(e,t){const n=Object(o["B"])(this.indexes_,(n,r)=>{const i=Object(o["E"])(this.indexSet_,r);if(Object(o["e"])(i,"Missing index implementation for "+r),n===dn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Ft.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),un(n,i.getCompare())}return dn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Ft(e.name,r))),i.insert(e,e.node)}});return new fn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o["B"])(this.indexes_,n=>{if(n===dn)return n;{const r=t.get(e.name);return r?n.remove(new Ft(e.name,r)):n}});return new fn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xt(this.priorityNode_),this.children_.isEmpty()&&Object(o["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new mn(new zt(Kt),null,fn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Ft(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?pn:this.priorityNode_;return new mn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(o["e"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(an,(o,s)=>{t[o]=s.val(e),n++,i&&mn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Ft(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ft(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ft(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Ft.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends mn{constructor(){super(new zt(Kt),mn.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mn.EMPTY_NODE}isEmpty(){return!1}}const _n=new gn;Object.defineProperties(Ft,{MIN:{value:new Ft(P,mn.EMPTY_NODE)},MAX:{value:new Ft(R,_n)}}),Wt.__EMPTY_NODE=mn.EMPTY_NODE,nn.__childrenNodeConstructor=mn,Jt(_n),on(_n);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function bn(e,t=null){if(null===e)return mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,bn(t))}if(e instanceof Array||!vn){let n=mn.EMPTY_NODE;return F(e,(t,r)=>{if(Object(o["j"])(e,t)&&"."!==t.substring(0,1)){const e=bn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let r=!1;const i=e;if(F(i,(e,t)=>{if("."!==e.substring(0,1)){const i=bn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Ft(e,i)))}}),0===n.length)return mn.EMPTY_NODE;const o=un(n,Gt,e=>e.name,Kt);if(r){const e=un(n,an.getCompare());return new mn(o,bn(t),new fn({".priority":e},{".priority":an}))}return new mn(o,bn(t),fn.Default)}}rn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends Ut{constructor(e){super(),this.indexPath_=e,Object(o["e"])(!bt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=bn(e),r=mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ft(t,r)}maxPost(){const e=mn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new Ft(R,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ft.MIN}maxPost(){return Ft.MAX}makePost(e,t){const n=bn(e);return new Ft(t,n)}toString(){return".value"}}const On=new wn,kn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cn(e){return{type:"value",snapshotNode:e}}function In(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function jn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function En(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(jn(t,a)):Object(o["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(In(t,n)):s.trackChildChange(Tn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,r)=>{t.hasChild(e)||n.trackChildChange(jn(e,r))}),t.isLeafNode()||t.forEachChild(an,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Tn(t,r,i))}else n.trackChildChange(In(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.indexedFilter_=new Sn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xn.getStartPost_(e),this.endPost_=xn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(mn.EMPTY_NODE);const i=this;return t.forEachChild(an,(e,t)=>{i.matches(new Ft(e,t))||(r=r.updateImmediateChild(e,mn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.rangedFilter_=new xn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new Ft(t,n))||(n=mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(mn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;Object(o["e"])(a.numChildren()===this.limit_,"");const c=new Ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,l,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=u&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(Tn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(jn(t,e));const n=a.updateImmediateChild(t,mn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(In(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:u&&s(l,c)>=0?(null!=i&&(i.trackChildChange(jn(l.name,l.node)),i.trackChildChange(In(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,mn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nn(e){return e.loadsAllData()?new Sn(e.getIndex()):e.hasLimit()?new Pn(e):new xn(e)}function An(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===On?n="$value":e.index_===Vt?n="$key":(Object(o["e"])(e.index_ instanceof yn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(o["H"])(n),e.startSet_&&(t["startAt"]=Object(o["H"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(o["H"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(o["H"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(o["H"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ln(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=C("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Mn.getListenId_(e,n),a={};this.listens_[s]=a;const c=An(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(o["E"])(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Mn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=An(e._queryParams),n=e._path.toString(),r=new o["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o["C"])(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(o["A"])(a.responseText)}catch(e){T("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&T("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.rootNode_=mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return{value:null,children:new Map}}function Un(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Fn());const i=e.children.get(r);t=ft(t),Un(i,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):Wn(e,(e,r)=>{const i=new lt(t.toString()+"/"+e);qn(r,i,n)})}function Wn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=1e4,Hn=3e4,Bn=3e5;class zn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Vn(e);const n=$n+(Hn-$n)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,r)=>{r>0&&Object(o["j"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Bn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn;function Kn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gn||(Gn={}));class Qn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gn.ACK_USER_WRITE,this.source=Kn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return Object(o["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lt(e));return new Qn(ut(),t,this.revert)}}return Object(o["e"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Qn(ft(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.source=e,this.path=t,this.type=Gn.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new Xn(this.source,ut()):new Xn(this.source,ft(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gn.OVERWRITE}operationForChild(e){return bt(this.path)?new Zn(this.source,ut(),this.snap.getImmediateChild(e)):new Zn(this.source,ft(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gn.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new lt(e));return t.isEmpty()?null:t.value?new Zn(this.source,ut(),t.value):new er(this.source,ut(),t)}return Object(o["e"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new er(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rr(e,t,n,r){const i=[],o=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(En(t.childName,t.snapshotNode))}),ir(e,i,"child_removed",t,r,n),ir(e,i,"child_added",t,r,n),ir(e,i,"child_moved",o,r,n),ir(e,i,"child_changed",t,r,n),ir(e,i,"value",t,r,n),i}function ir(e,t,n,r,i,o){const s=r.filter(e=>e.type===n);s.sort((t,n)=>sr(e,t,n)),s.forEach(n=>{const r=or(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function or(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function sr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["f"])("Should only compare child_ events.");const r=new Ft(t.childName,t.snapshotNode),i=new Ft(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e,t){return{eventCache:e,serverCache:t}}function cr(e,t,n,r){return ar(new tr(t,n,r),e.serverCache)}function lr(e,t,n,r){return ar(e.eventCache,new tr(t,n,r))}function ur(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const fr=()=>(dr||(dr=new zt(A)),dr);class pr{constructor(e,t=fr()){this.value=e,this.children=t}static fromObject(e){let t=new pr(null);return F(e,(e,n)=>{t=t.set(new lt(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ut(),value:this.value};if(bt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=vt(new lt(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(bt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new pr(null)}}set(e,t){if(bt(e))return new pr(t,this.children);{const n=ht(e),r=this.children.get(n)||new pr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new pr(this.value,o)}}remove(e){if(bt(e))return this.children.isEmpty()?new pr(null):new pr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new pr(null):new pr(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ht(e),r=this.children.get(n)||new pr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new pr(this.value,o)}}fold(e){return this.fold_(ut(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(vt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ut(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),vt(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ut(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),vt(t,r),n):new pr(null)}}foreach(e){this.foreach_(ut(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(vt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.writeTree_=e}static empty(){return new mr(new pr(null))}}function gr(e,t,n){if(bt(t))return new mr(new pr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=yt(i,t);return o=o.updateChild(s,n),new mr(e.writeTree_.set(i,o))}{const r=new pr(n),i=e.writeTree_.setTree(t,r);return new mr(i)}}}function _r(e,t,n){let r=e;return F(n,(e,n)=>{r=gr(r,vt(t,e),n)}),r}function vr(e,t){if(bt(t))return mr.empty();{const n=e.writeTree_.setTree(t,new pr(null));return new mr(n)}}function br(e,t){return null!=yr(e,t)}function yr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function wr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new Ft(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Ft(e,n.value))}),t}function Or(e,t){if(bt(t))return e;{const n=yr(e,t);return new mr(null!=n?new pr(n):e.writeTree_.subtree(t))}}function kr(e){return e.writeTree_.isEmpty()}function Cr(e,t){return Ir(ut(),e.writeTree_,t)}function Ir(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(o["e"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ir(vt(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(vt(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t){return Kr(t,e)}function Tr(e,t,n,r,i){Object(o["e"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=gr(e.visibleWrites,t,n)),e.lastWriteId=r}function Er(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Sr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o["e"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&xr(t,r.path)?i=!1:Ot(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Pr(e),!0;if(r.snap)e.visibleWrites=vr(e.visibleWrites,r.path);else{const t=r.children;F(t,t=>{e.visibleWrites=vr(e.visibleWrites,vt(r.path,t))})}return!0}return!1}function xr(e,t){if(e.snap)return Ot(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ot(vt(e.path,n),t))return!0;return!1}function Pr(e){e.visibleWrites=Nr(e.allWrites,Rr,ut()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Rr(e){return e.visible}function Nr(e,t,n){let r=mr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ot(n,e)?(t=yt(n,e),r=gr(r,t,s.snap)):Ot(e,n)&&(t=yt(e,n),r=gr(r,ut(),s.snap.getChild(t)));else{if(!s.children)throw Object(o["f"])("WriteRecord should have .snap or .children");if(Ot(n,e))t=yt(n,e),r=_r(r,t,s.children);else if(Ot(e,n))if(t=yt(e,n),bt(t))r=_r(r,ut(),s.children);else{const e=Object(o["E"])(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=gr(r,ut(),n)}}}}}return r}function Ar(e,t,n,r,i){if(r||i){const o=Or(e.visibleWrites,t);if(!i&&kr(o))return n;if(i||null!=n||br(o,ut())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ot(e.path,t)||Ot(t,e.path))},s=Nr(e.allWrites,o,t),a=n||mn.EMPTY_NODE;return Cr(s,a)}return null}{const r=yr(e.visibleWrites,t);if(null!=r)return r;{const r=Or(e.visibleWrites,t);if(kr(r))return n;if(null!=n||br(r,ut())){const e=n||mn.EMPTY_NODE;return Cr(r,e)}return null}}}function Lr(e,t,n){let r=mn.EMPTY_NODE;const i=yr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(an,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=Or(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=Cr(Or(i,new lt(e)),t);r=r.updateImmediateChild(e,n)}),wr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=Or(e.visibleWrites,t);return wr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function Mr(e,t,n,r,i){Object(o["e"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=vt(t,n);if(br(e.visibleWrites,s))return null;{const t=Or(e.visibleWrites,s);return kr(t)?i.getChild(n):Cr(t,i.getChild(n))}}function Dr(e,t,n,r){const i=vt(t,n),o=yr(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=Or(e.visibleWrites,i);return Cr(t,r.getNode().getImmediateChild(n))}return null}function Fr(e,t){return yr(e.visibleWrites,t)}function Ur(e,t,n,r,i,o,s){let a;const c=Or(e.visibleWrites,t),l=yr(c,ut());if(null!=l)a=l;else{if(null==n)return[];a=Cr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function qr(){return{visibleWrites:mr.empty(),allWrites:[],lastWriteId:-1}}function Wr(e,t,n,r){return Ar(e.writeTree,e.treePath,t,n,r)}function Vr(e,t){return Lr(e.writeTree,e.treePath,t)}function $r(e,t,n,r){return Mr(e.writeTree,e.treePath,t,n,r)}function Hr(e,t){return Fr(e.writeTree,vt(e.treePath,t))}function Br(e,t,n,r,i,o){return Ur(e.writeTree,e.treePath,t,n,r,i,o)}function zr(e,t,n){return Dr(e.writeTree,e.treePath,t,n)}function Gr(e,t){return Kr(vt(e.treePath,t),e.writeTree)}function Kr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,jn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,In(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["f"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qr=new Jr;class Xr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hr(this.viewCache_),i=Br(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){return{filter:e}}function ei(e,t){Object(o["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ti(e,t,n,r,i){const s=new Yr;let a,c;if(n.type===Gn.OVERWRITE){const l=n;l.source.fromUser?a=oi(e,t,l.path,l.snap,r,i,s):(Object(o["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered()&&!bt(l.path),a=ii(e,t,l.path,l.snap,r,i,c,s))}else if(n.type===Gn.MERGE){const l=n;l.source.fromUser?a=ai(e,t,l.path,l.children,r,i,s):(Object(o["e"])(l.source.fromServer,"Unknown source."),c=l.source.tagged||t.serverCache.isFiltered(),a=li(e,t,l.path,l.children,r,i,c,s))}else if(n.type===Gn.ACK_USER_WRITE){const o=n;a=o.revert?di(e,t,o.path,r,i,s):ui(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Gn.LISTEN_COMPLETE)throw Object(o["f"])("Unknown operation type: "+n.type);a=hi(e,t,n.path,r,s)}const l=s.getChanges();return ni(t,a,l),{viewCache:a,changes:l}}function ni(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=ur(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(Cn(ur(t)))}}function ri(e,t,n,r,i,s){const a=t.eventCache;if(null!=Hr(r,n))return t;{let c,l;if(bt(n))if(Object(o["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=hr(t),i=n instanceof mn?n:mn.EMPTY_NODE,o=Vr(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Wr(r,hr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const u=ht(n);if(".priority"===u){Object(o["e"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();l=t.serverCache.getNode();const s=$r(r,n,i,l);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(u)){l=t.serverCache.getNode();const e=$r(r,n,a.getNode(),l);h=null!=e?a.getNode().getImmediateChild(u).updateChild(o,e):a.getNode().getImmediateChild(u)}else h=zr(r,u,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),u,h,o,i,s):a.getNode()}}return cr(t,c,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function ii(e,t,n,r,i,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(bt(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,Qr,null)}const h=lr(t,l,c.isFullyInitialized()||bt(n),u.filtersNodes()),d=new Xr(i,h,o);return ri(e,h,n,i,d,a)}function oi(e,t,n,r,i,o,s){const a=t.eventCache;let c,l;const u=new Xr(i,t,o);if(bt(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=cr(t,l,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=cr(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),l=a.getNode().getImmediateChild(i);let h;if(bt(o))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(_t(o)).isEmpty()?e:e.updateChild(o,r):mn.EMPTY_NODE}if(l.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,u,s);c=cr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function si(e,t){return e.eventCache.isCompleteForChild(t)}function ai(e,t,n,r,i,o,s){let a=t;return r.foreach((r,c)=>{const l=vt(n,r);si(t,ht(l))&&(a=oi(e,a,l,c,i,o,s))}),r.foreach((r,c)=>{const l=vt(n,r);si(t,ht(l))||(a=oi(e,a,l,c,i,o,s))}),a}function ci(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function li(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=bt(n)?r:new pr(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(u.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),u=ci(e,c,r);l=ii(e,l,new lt(n),u,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),u=ci(e,c,r);l=ii(e,l,new lt(n),u,i,o,s,a)}}),l}function ui(e,t,n,r,i,o,s){if(null!=Hr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(bt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ii(e,t,n,c.getNode().getChild(n),i,o,a,s);if(bt(n)){let r=new pr(null);return c.getNode().forEachChild(Vt,(e,t)=>{r=r.set(new lt(e),t)}),li(e,t,n,r,i,o,a,s)}return t}{let l=new pr(null);return r.foreach((e,t)=>{const r=vt(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))}),li(e,t,n,l,i,o,a,s)}}function hi(e,t,n,r,i){const o=t.serverCache,s=lr(t,o.getNode(),o.isFullyInitialized()||bt(n),o.isFiltered());return ri(e,s,n,r,Qr,i)}function di(e,t,n,r,i,s){let a;if(null!=Hr(r,n))return t;{const c=new Xr(r,t,i),l=t.eventCache.getNode();let u;if(bt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wr(r,hr(t));else{const e=t.serverCache.getNode();Object(o["e"])(e instanceof mn,"serverChildren would be complete if leaf node"),n=Vr(r,e)}n=n,u=e.filter.updateFullNode(l,n,s)}else{const i=ht(n);let o=zr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=l.getImmediateChild(i)),u=null!=o?e.filter.updateChild(l,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,mn.EMPTY_NODE,ft(n),c,s):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wr(r,hr(t)),a.isLeafNode()&&(u=e.filter.updateFullNode(u,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Hr(r,ut()),cr(t,u,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Sn(n.getIndex()),i=Nn(n);this.processor_=Zr(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(mn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(mn.EMPTY_NODE,s.getNode(),null),l=new tr(a,o.isFullyInitialized(),r.filtersNodes()),u=new tr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ar(u,l),this.eventGenerator_=new nr(this.query_)}get query(){return this.query_}}function pi(e){return e.viewCache_.serverCache.getNode()}function mi(e,t){const n=hr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function gi(e){return 0===e.eventRegistrations_.length}function _i(e,t){e.eventRegistrations_.push(t)}function vi(e,t,n){const r=[];if(n){Object(o["e"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function bi(e,t,n,r){t.type===Gn.MERGE&&null!==t.source.queryId&&(Object(o["e"])(hr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["e"])(ur(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ti(e.processor_,i,t,n,r);return ei(e.processor_,s.viewCache),Object(o["e"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,wi(e,s.changes,s.viewCache.eventCache.getNode(),null)}function yi(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,(e,t)=>{r.push(In(e,t))})}return n.isFullyInitialized()&&r.push(Cn(n.getNode())),wi(e,r,n.getNode(),t)}function wi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return rr(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi,ki;class Ci{constructor(){this.views=new Map}}function Ii(e){Object(o["e"])(!Oi,"__referenceConstructor has already been defined"),Oi=e}function ji(){return Object(o["e"])(Oi,"Reference.ts has not been loaded"),Oi}function Ti(e){return 0===e.views.size}function Ei(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o["e"])(null!=s,"SyncTree gave us an op for an invalid query."),bi(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(bi(o,t,n,r));return i}}function Si(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Wr(n,i?r:null),o=!1;e?o=!0:r instanceof mn?(e=Vr(n,r),o=!1):(e=mn.EMPTY_NODE,o=!1);const s=ar(new tr(e,o,!1),new tr(r,i,!1));return new fi(t,s)}return s}function xi(e,t,n,r,i,o){const s=Si(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),_i(s,n),yi(s,n)}function Pi(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Mi(e);if("default"===i)for(const[c,l]of e.views.entries())s=s.concat(vi(l,n,r)),gi(l)&&(e.views.delete(c),l.query._queryParams.loadsAllData()||o.push(l.query));else{const t=e.views.get(i);t&&(s=s.concat(vi(t,n,r)),gi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Mi(e)&&o.push(new(ji())(t._repo,t._path)),{removed:o,events:s}}function Ri(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ni(e,t){let n=null;for(const r of e.views.values())n=n||mi(r,t);return n}function Ai(e,t){const n=t._queryParams;if(n.loadsAllData())return Di(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Li(e,t){return null!=Ai(e,t)}function Mi(e){return null!=Di(e)}function Di(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){Object(o["e"])(!ki,"__referenceConstructor has already been defined"),ki=e}function Ui(){return Object(o["e"])(ki,"Reference.ts has not been loaded"),ki}let qi=1;class Wi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pr(null),this.pendingWriteTree_=qr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vi(e,t,n,r,i){return Tr(e.pendingWriteTree_,t,n,r,i),i?Zi(e,new Zn(Kn(),t,n)):[]}function $i(e,t,n=!1){const r=Er(e.pendingWriteTree_,t),i=Sr(e.pendingWriteTree_,t);if(i){let t=new pr(null);return null!=r.snap?t=t.set(ut(),!0):F(r.children,e=>{t=t.set(new lt(e),!0)}),Zi(e,new Qn(r.path,t,n))}return[]}function Hi(e,t,n){return Zi(e,new Zn(Yn(),t,n))}function Bi(e,t,n){const r=pr.fromObject(n);return Zi(e,new er(Yn(),t,r))}function zi(e,t){return Zi(e,new Xn(Yn(),t))}function Gi(e,t,n){const r=oo(e,n);if(r){const n=so(r),i=n.path,o=n.queryId,s=yt(i,t),a=new Xn(Jn(o),s);return ao(e,i,a)}return[]}function Ki(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||Li(o,t))){const a=Pi(o,t,n,r);Ti(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;s=a.events;const l=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),u=e.syncPointTree_.findOnPath(i,(e,t)=>Mi(t));if(l&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=co(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=no(e,r);e.listenProvider_.startListening(lo(i),ro(e,i),o.hashFn,o.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const n=null;e.listenProvider_.stopListening(lo(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(io(t));e.listenProvider_.stopListening(lo(t),n)});uo(e,c)}return s}function Yi(e,t,n,r){const i=oo(e,r);if(null!=i){const r=so(i),o=r.path,s=r.queryId,a=yt(o,t),c=new Zn(Jn(s),a,n);return ao(e,o,c)}return[]}function Ji(e,t,n,r){const i=oo(e,r);if(i){const r=so(i),o=r.path,s=r.queryId,a=yt(o,t),c=pr.fromObject(n),l=new er(Jn(s),a,c);return ao(e,o,l)}return[]}function Qi(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=yt(e,r);i=i||Ni(t,n),s=s||Mi(t)});let a,c=e.syncPointTree_.get(r);if(c?(s=s||Mi(c),i=i||Ni(c,ut())):(c=new Ci,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=mn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Ni(t,ut());n&&(i=i.updateImmediateChild(e,n))})}const l=Li(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=io(t);Object(o["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ho();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const u=jr(e.pendingWriteTree_,r);let h=xi(c,t,n,u,i,a);if(!l&&!s){const n=Ai(c,t);h=h.concat(fo(e,t,n))}return h}function Xi(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=yt(e,t),i=Ni(n,r);if(i)return i});return Ar(i,t,o,n,r)}function Zi(e,t){return eo(t,e.syncPointTree_,null,jr(e.pendingWriteTree_,ut()))}function eo(e,t,n,r){if(bt(e.path))return to(e,t,n,r);{const i=t.get(ut());null==n&&null!=i&&(n=Ni(i,ut()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Gr(r,s);o=o.concat(eo(a,c,e,t))}return i&&(o=o.concat(Ei(i,e,r,n))),o}}function to(e,t,n,r){const i=t.get(ut());null==n&&null!=i&&(n=Ni(i,ut()));let o=[];return t.children.inorderTraversal((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Gr(r,t),c=e.operationForChild(t);c&&(o=o.concat(to(c,i,s,a)))}),i&&(o=o.concat(Ei(i,e,r,n))),o}function no(e,t){const n=t.query,r=ro(e,n);return{hashFn:()=>{const e=pi(t)||mn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Gi(e,n._path,r):zi(e,n._path);{const r=V(t,n);return Ki(e,n,null,r)}}}}function ro(e,t){const n=io(t);return e.queryToTagMap.get(n)}function io(e){return e._path.toString()+"$"+e._queryIdentifier}function oo(e,t){return e.tagToQueryMap.get(t)}function so(e){const t=e.indexOf("$");return Object(o["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lt(e.substr(0,t))}}function ao(e,t,n){const r=e.syncPointTree_.get(t);Object(o["e"])(r,"Missing sync point for query tag that we're tracking");const i=jr(e.pendingWriteTree_,t);return Ei(r,n,i,null)}function co(e){return e.fold((e,t,n)=>{if(t&&Mi(t)){const e=Di(t);return[e]}{let e=[];return t&&(e=Ri(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function lo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ui())(e._repo,e._path):e}function uo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=io(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ho(){return qi++}function fo(e,t,n){const r=t._path,i=ro(e,t),s=no(e,n),a=e.listenProvider_.startListening(lo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(o["e"])(!Mi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!bt(e)&&t&&Mi(t))return[Di(t).query];{let e=[];return t&&(e=e.concat(Ri(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(lo(r),ro(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new po(t)}node(){return this.node_}}class mo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vt(this.path_,e);return new mo(this.syncTree_,t)}node(){return Xi(this.syncTree_,this.path_)}}const go=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},_o=function(e,t,n){return e&&"object"===typeof e?(Object(o["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?vo(e[".sv"],t,n):"object"===typeof e[".sv"]?bo(e[".sv"],t):void Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},vo=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["e"])(!1,"Unexpected server value: "+e)}},bo=function(e,t,n){e.hasOwnProperty("increment")||Object(o["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(o["e"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o["e"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},yo=function(e,t,n,r){return Oo(t,new mo(n,e),r)},wo=function(e,t,n){return Oo(e,new po(t),n)};function Oo(e,t,n){const r=e.getPriority().val(),i=_o(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=_o(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new nn(o,bn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new nn(i))),r.forEachChild(an,(e,r)=>{const i=Oo(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Co(e,t){let n=t instanceof lt?t:new lt(t),r=e,i=ht(n);while(null!==i){const e=Object(o["E"])(r.node.children,i)||{children:{},childCount:0};r=new ko(i,r,e),n=ft(n),i=ht(n)}return r}function Io(e){return e.node.value}function jo(e,t){e.node.value=t,No(e)}function To(e){return e.node.childCount>0}function Eo(e){return void 0===Io(e)&&!To(e)}function So(e,t){F(e.node.children,(n,r)=>{t(new ko(n,e,r))})}function xo(e,t,n,r){n&&!r&&t(e),So(e,e=>{xo(e,t,!0,r)}),n&&r&&t(e)}function Po(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ro(e){return new lt(null===e.parent?e.name:Ro(e.parent)+"/"+e.name)}function No(e){null!==e.parent&&Ao(e.parent,e.name,e)}function Ao(e,t,n){const r=Eo(n),i=Object(o["j"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,No(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,No(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=/[\[\].#$\/\u0000-\u001F\u007F]/,Mo=/[\[\].#$\u0000-\u001F\u007F]/,Do=10485760,Fo=function(e){return"string"===typeof e&&0!==e.length&&!Lo.test(e)},Uo=function(e){return"string"===typeof e&&0!==e.length&&!Mo.test(e)},qo=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Uo(e)},Wo=function(e,t,n,r){r&&void 0===t||Vo(Object(o["o"])(e,"value"),t,n)},Vo=function(e,t,n){const r=n instanceof lt?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Tt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Tt(r)+" with contents = "+t.toString());if(S(t))throw new Error(e+"contains "+t.toString()+" "+Tt(r));if("string"===typeof t&&t.length>Do/3&&Object(o["F"])(t)>Do)throw new Error(e+"contains a string greater than "+Do+" utf8 bytes "+Tt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Fo(t)))throw new Error(e+" contains an invalid key ("+t+") "+Tt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Ct(r,t),Vo(e,o,r),It(r)}),n&&i)throw new Error(e+' contains ".value" child '+Tt(r)+" in addition to actual children.")}},$o=function(e,t,n,r){if((!r||void 0!==n)&&!Uo(n))throw new Error(Object(o["o"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ho=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$o(e,t,n,r)},Bo=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},zo=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Fo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!qo(n))throw new Error(Object(o["o"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ko(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||wt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Yo(e,t,n){Ko(e,n),Qo(e,e=>wt(e,t))}function Jo(e,t,n){Ko(e,n),Qo(e,e=>Ot(e,t)||Ot(t,e))}function Qo(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(Xo(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Xo(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();y&&k("event: "+n.toString()),G(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="repo_interrupt",es=25;class ts{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Go,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fn(),this.transactionQueueTree_=new ko,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ns(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||K())e.server_=new Mn(e.repoInfo_,(t,n,r,i)=>{os(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>ss(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["H"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Dt(e.repoInfo_,t,(t,n,r,i)=>{os(e,t,n,r,i)},t=>{ss(e,t)},t=>{as(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=_e(e.repoInfo_,()=>new zn(e.stats_,e.server_)),e.infoData_=new Dn,e.infoSyncTree_=new Wi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Hi(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),cs(e,"connected",!1),e.serverSyncTree_=new Wi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);Jo(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function rs(e){const t=e.infoData_.getNode(new lt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function is(e){return go({timestamp:rs(e)})}function os(e,t,n,r,i){e.dataUpdateCount++;const s=new lt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(o["B"])(n,e=>bn(e));a=Ji(e.serverSyncTree_,s,t,i)}else{const t=bn(n);a=Yi(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o["B"])(n,e=>bn(e));a=Bi(e.serverSyncTree_,s,t)}else{const t=bn(n);a=Hi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=ys(e,s)),Jo(e.eventQueue_,c,a)}function ss(e,t){cs(e,"connected",t),!1===t&&hs(e)}function as(e,t){F(t,(t,n)=>{cs(e,t,n)})}function cs(e,t,n){const r=new lt("/.info/"+t),i=bn(n);e.infoData_.updateSnapshot(r,i);const o=Hi(e.infoSyncTree_,r,i);Jo(e.eventQueue_,r,o)}function ls(e){return e.nextWriteId_++}function us(e,t,n,r,i){ms(e,"set",{path:t.toString(),value:n,priority:r});const o=is(e),s=bn(n,r),a=Xi(e.serverSyncTree_,t),c=wo(s,a,o),l=ls(e),u=Vi(e.serverSyncTree_,t,c,l,!0);Ko(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||T("set at "+t+" failed: "+n);const s=$i(e.serverSyncTree_,l,!o);Jo(e.eventQueue_,t,s),gs(e,i,n,r)});const h=js(e,t);ys(e,h),Jo(e.eventQueue_,h,[])}function hs(e){ms(e,"onDisconnectEvents");const t=is(e),n=Fn();qn(e.onDisconnect_,ut(),(r,i)=>{const o=yo(r,i,e.serverSyncTree_,t);Un(n,r,o)});let r=[];qn(n,ut(),(t,n)=>{r=r.concat(Hi(e.serverSyncTree_,t,n));const i=js(e,t);ys(e,i)}),e.onDisconnect_=Fn(),Jo(e.eventQueue_,ut(),r)}function ds(e,t,n){let r;r=".info"===ht(t._path)?Qi(e.infoSyncTree_,t,n):Qi(e.serverSyncTree_,t,n),Yo(e.eventQueue_,t._path,r)}function fs(e,t,n){let r;r=".info"===ht(t._path)?Ki(e.infoSyncTree_,t,n):Ki(e.serverSyncTree_,t,n),Yo(e.eventQueue_,t._path,r)}function ps(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Zo)}function ms(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),k(n,...t)}function gs(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function _s(e,t,n){return Xi(e.serverSyncTree_,t,n)||mn.EMPTY_NODE}function vs(e,t=e.transactionQueueTree_){if(t||Is(e,t),Io(t)){const n=ks(e,t);Object(o["e"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&bs(e,Ro(t),n)}else To(t)&&So(t,t=>{vs(e,t)})}function bs(e,t,n){const r=n.map(e=>e.currentWriteId),i=_s(e,t,r);let s=i;const a=i.hash();for(let u=0;u<n.length;u++){const e=n[u];Object(o["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=yt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),l=t;e.server_.put(l.toString(),c,r=>{ms(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat($i(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Is(e,Co(e.transactionQueueTree_,t)),vs(e,e.transactionQueueTree_),Jo(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{T("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ys(e,t)}},a)}function ys(e,t){const n=Os(e,t),r=Ro(n),i=ks(e,n);return ws(e,i,r),r}function ws(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),a=s.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const s=t[c],l=yt(n,s.path);let u,h=!1;if(Object(o["e"])(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,u=s.abortReason,i=i.concat($i(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=es)h=!0,u="maxretry",i=i.concat($i(e.serverSyncTree_,s.currentWriteId,!0));else{const n=_s(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Vo("transaction failed: Data returned ",r,s.path);let t=bn(r);const c="object"===typeof r&&null!=r&&Object(o["j"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const l=s.currentWriteId,u=is(e),h=wo(t,n,u);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=ls(e),a.splice(a.indexOf(l),1),i=i.concat(Vi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat($i(e.serverSyncTree_,l,!0))}else h=!0,u="nodata",i=i.concat($i(e.serverSyncTree_,s.currentWriteId,!0))}Jo(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===u?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(u),!1,null))))}Is(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);vs(e,e.transactionQueueTree_)}function Os(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Io(r))r=Co(r,n),t=ft(t),n=ht(t);return r}function ks(e,t){const n=[];return Cs(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Cs(e,t,n){const r=Io(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);So(t,t=>{Cs(e,t,n)})}function Is(e,t){const n=Io(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,jo(t,n.length>0?n:void 0)}So(t,t=>{Is(e,t)})}function js(e,t){const n=Ro(Os(e,t)),r=Co(e.transactionQueueTree_,t);return Po(r,t=>{Ts(e,t)}),Ts(e,r),xo(r,t=>{Ts(e,t)}),n}function Ts(e,t){const n=Io(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o["e"])(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat($i(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?jo(t,void 0):n.length=s+1,Jo(e.eventQueue_,Ro(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Ss(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):T(`Invalid query segment '${n}' in query '${e}'`)}return t}const xs=function(e,t){const n=Ps(e),r=n.namespace;"firebase.com"===n.domain&&j(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||j("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||E();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ue(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new lt(n.pathString)}},Ps=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=Es(e.substring(u,h)));const d=Ss(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["H"])(this.snapshot.exportVal())}}class Ns{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:pt(this._path)}get ref(){return new Ms(this._repo,this._path)}get _queryIdentifier(){const e=Ln(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Ln(this._queryParams)}isEqual(e){if(e=Object(o["q"])(e),!(e instanceof Ls))return!1;const t=this._repo===e._repo,n=wt(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mt(this._path)}}class Ms extends Ls{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=_t(this._path);return null===e?null:new Ms(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ds{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lt(e),n=Us(this.ref,e);return new Ds(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Ds(n,Us(this.ref,t),an)))}hasChild(e){const t=new lt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fs(e,t){return e=Object(o["q"])(e),e._checkNotDeleted("ref"),void 0!==t?Us(e._root,t):e._root}function Us(e,t){return e=Object(o["q"])(e),null===ht(e._path)?Ho("child","path",t,!1):$o("child","path",t,!1),new Ms(e._repo,vt(e._path,t))}function qs(e,t){e=Object(o["q"])(e),Bo("set",e._path),Wo("set",t,e._path,!1);const n=new o["a"];return us(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class Ws{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Rs("value",this,new Ds(e.snapshotNode,new Ms(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ns(this,e,t):null}matches(e){return e instanceof Ws&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Vs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ns(this,e,t):null}createEvent(e,t){Object(o["e"])(null!=e.childName,"Child events should have a childName.");const n=Us(new Ms(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Rs(e.type,this,new Ds(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Vs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function $s(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{fs(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new As(n,o||void 0),a="value"===t?new Ws(s):new Vs(t,s);return ds(e._repo,e,a),()=>fs(e._repo,e,a)}function Hs(e,t,n,r){return $s(e,"value",t,n,r)}Ii(Ms),Fi(Ms);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bs="FIREBASE_DATABASE_EMULATOR_HOST",zs={};let Gs=!1;function Ks(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||j("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),k("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=xs(s,o),l=c.repoInfo,u=void 0;"undefined"!==typeof e&&(u=Object({NODE_ENV:"production",VUE_APP_I18N_FALLBACK_LOCALE:"ua",VUE_APP_I18N_LOCALE:"ru",VUE_APP_I18N_SUPPORTED_LOCALE:"ru,ua",BASE_URL:"/cinema-cms/"})[Bs]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,c=xs(s,o),l=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new X(X.OWNER):new Q(t.name,t.options,n);zo("Invalid Firebase Database URL",c),bt(c.path)||j("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Js(l,t,h,new J(t.name,r));return new Qs(d,t)}function Ys(e,t){const n=zs[t];n&&n[e.key]===e||j(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ps(e),delete n[e.key]}function Js(e,t,n,r){let i=zs[t.name];i||(i={},zs[t.name]=i);let o=i[e.toURLString()];return o&&j("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ts(e,Gs,n,r),i[e.toURLString()]=o,o}class Qs{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ns(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ms(this._repo,ut())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ys(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&j("Cannot call "+e+" on a deleted database.")}}function Xs(e=Object(r["d"])(),t){return Object(r["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zs(e){u(r["a"]),Object(r["c"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Ks(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Dt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Zs()}).call(this,n("4362"))},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return ee})),n.d(t,"c",(function(){return Z})),n.d(t,"d",(function(){return X}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function u(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=u(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["D"])({data:t}),e.strict&&y(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var l=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;_(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;v(e,r,i,l)})),r.forEachGetter((function(t,n){var r=s+n;b(e,r,t,l)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function _(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function v(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function b(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function y(e){Object(r["P"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var k="vuex bindings",C="vuex:mutations",I="vuex:actions",j="vuex",T=0;function E(e,t){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[k]},(function(n){n.addTimelineLayer({id:C,label:"Vuex Mutations",color:S}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:S}),n.addInspector({id:j,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===j)if(n.filter){var r=[];L(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[A(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId;g(t,r),n.state=M(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(j),n.sendInspectorState(j),n.addTimelineEvent({layerId:C,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=T++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var S=8702998,x=6710886,P=16777215,R={label:"namespaced",textColor:P,backgroundColor:x};function N(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function A(e,t){return{id:t||"root",label:N(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return A(e._children[n],t+n+"/")}))}}function L(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(i){L(e,t._children[i],n,r+i+"/")}))}function M(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=D(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?N(e):e,editable:!1,value:U((function(){return o[e]}))}}))}return i}function D(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=U((function(){return e[n]}))}else t[n]=U((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function U(e){try{return e()}catch(t){return t}}var q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},W={namespaced:{configurable:!0}};W.namespaced.get=function(){return!!this._rawModule.namespaced},q.prototype.addChild=function(e,t){this._children[e]=t},q.prototype.removeChild=function(e){delete this._children[e]},q.prototype.getChild=function(e){return this._children[e]},q.prototype.hasChild=function(e){return e in this._children},q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},q.prototype.forEachChild=function(e){s(this._children,e)},q.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},q.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},q.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(q.prototype,W);var V=function(e){this.register([],e,!1)};function $(e,t,n){if(G(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");$(e.concat(r),t.getChild(r),n.modules[r])}}V.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},V.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},V.prototype.update=function(e){$([],this.root,e)},V.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),G(e,t);var i=new q(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},V.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},V.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var H={assert:function(e){return"function"===typeof e},expected:"function"},B={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},z={getters:H,mutations:H,actions:B};function G(e,t){Object.keys(z).forEach((function(n){if(t[n]){var r=z[n];s(t[n],(function(t,i){l(r.assert(t),K(e,n,i,t,r.expected))}))}}))}function K(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function Y(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new V(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return u.call(s,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&E(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},l=this._mutations[o];l?(this._withCommit((function(){l.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},J.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(l){console.warn("[vuex] error in before action subscribers: "),console.error(l)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(l){console.warn("[vuex] error in after action subscribers: "),console.error(l)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(l){console.warn("[vuex] error in error action subscribers: "),console.error(l)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var i=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["P"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,Q);re((function(e,t){var n={};return ne(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),te(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ie(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n}));var X=re((function(e,t){var n={};return ne(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),te(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=ie(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),Z=re((function(e,t){var n={};return ne(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),te(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ie(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),ee=re((function(e,t){var n={};return ne(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),te(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=ie(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function te(e){return ne(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ne(e){return Array.isArray(e)||a(e)}function re(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ie(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5606:function(e,t,n){"use strict";n.d(t,"a",(function(){return z})),n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return W})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return Y}));var r=n("ffa6"),i=n("4fc1"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",l="0.7.2",u=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",_="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",k="@firebase/installations-compat",C="@firebase/messaging",I="@firebase/messaging-compat",j="@firebase/performance",T="@firebase/performance-compat",E="@firebase/remote-config",S="@firebase/remote-config-compat",x="@firebase/storage",P="@firebase/storage-compat",R="@firebase/firestore",N="@firebase/firestore-compat",A="firebase",L="9.1.1",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[_]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[k]:"fire-iid-compat",[C]:"fire-fcm",[I]:"fire-fcm-compat",[j]:"fire-perf",[T]:"fire-perf-compat",[E]:"fire-rc",[S]:"fire-rc-compat",[x]:"fire-gcs",[P]:"fire-gcs-compat",[R]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[A]:"fire-js-all"},F=new Map,U=new Map;function q(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(U.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())q(n,e);return!0}function V(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new o["b"]("app","Firebase",$);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=L;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["n"])(e,s.options)&&Object(o["n"])(n,s.config))return s;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new B(e,n,a);return F.set(i,c),c}function K(e=M){const t=F.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function Y(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}W(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){W(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),Y(c,l,e),Y("fire-js","")}J()},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},"577e":function(e,t,n){var r=n("f5df");e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},"588e":function(e,t,n){"use strict";n.d(t,"a",(function(){return tt})),n.d(t,"b",(function(){return et})),n.d(t,"c",(function(){return rt})),n.d(t,"d",(function(){return nt})),n.d(t,"e",(function(){return Ze}));var r,i=n("5606"),o=n("1fd5"),s=n("ffa6");(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(r||(r={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",l=12e4,u=6e5;class h extends o["c"]{constructor(e,t){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function f(){const e="An unknown error occurred, please check the error payload for server response.";return new h("unknown",e)}function p(e){return new h("object-not-found","Object '"+e+"' does not exist.")}function m(e){return new h("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",e)}function _(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new h("unauthorized","User does not have permission to access '"+e+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function y(){return new h("canceled","User canceled the upload/download.")}function w(e){return new h("invalid-url","Invalid URL '"+e+"'.")}function O(e){return new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function k(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function C(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function I(){return new h("no-download-url","The given file does not have any download URLs.")}function j(e){return new h("invalid-argument",e)}function T(){return new h("app-deleted","The Firebase app was deleted.")}function E(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function x(e){throw new h("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw x("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function R(){return new P}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{createConnection(){return R()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=A.makeFromUrl(e,t)}catch(r){return new A(e,"")}if(""===n.path)return n;throw O(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",s=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",_=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},b=[{regex:s,indices:c,postModify:i},{regex:f,indices:p,postModify:l},{regex:_,indices:v,postModify:l}];for(let a=0;a<b.length;a++){const t=b[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new A(e,i),t.postModify(n);break}}if(null==n)throw w(e);return n}}class L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t,n){let r=1,i=null,o=!1,s=0;function a(){return 2===s}let c=!1;function l(...e){c||(c=!0,t.apply(null,e))}function u(t){i=setTimeout(()=>{i=null,e(h,a())},t)}function h(e,...t){if(c)return;if(e)return void l.call(null,e,...t);const n=a()||o;if(n)return void l.call(null,e,...t);let i;r<64&&(r*=2),1===s?(s=2,i=0):i=1e3*(r+Math.random()),u(i)}let d=!1;function f(e){d||(d=!0,c||(null!==i?(e||(s=2),clearTimeout(i),u(0)):e||(s=1)))}return u(0),setTimeout(()=>{o=!0,f(!0)},n),f}function D(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return void 0!==e}function U(e){return"object"===typeof e&&!Array.isArray(e)}function q(e){return"string"===typeof e||e instanceof String}function W(e){return V()&&e instanceof Blob}function V(){return"undefined"!==typeof Blob}function $(e,t,n,r){if(r<t)throw j(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw j(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,n,r,i,o,s,a,c,l,u){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=s,this.errorCallback_=a,this.progressCallback_=l,this.timeout_=c,this.pool_=u,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=this;function t(t,n){if(n)return void t(!1,new G(!1,null,!0));const i=e.pool_.createConnection();function o(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=i,null!==e.progressCallback_&&i.addUploadProgressListener(o),i.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{null!==e.progressCallback_&&i.removeUploadProgressListener(o),e.pendingConnection_=null;const n=i.getErrorCode()===r.NO_ERROR,s=i.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=i.getErrorCode()===r.ABORT;return void t(!1,new G(!1,null,e))}const a=-1!==e.successCodes_.indexOf(s);t(!0,new G(a,i))})}function n(t,n){const r=e.resolve_,i=e.reject_,o=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(o,o.getResponseText());F(t)?r(t):r()}catch(s){i(s)}else if(null!==o){const t=f();t.serverResponse=o.getResponseText(),e.errorCallback_?i(e.errorCallback_(o,t)):i(t)}else if(n.canceled){const t=e.appDelete_?T():y();i(t)}else{const e=b();i(e)}}this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=M(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class G{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function K(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Y(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Q(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,i,o){const s=B(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return J(c,t),K(c,n),Y(c,o),Q(c,r),new z(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Z();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(V())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function te(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ie{constructor(e,t){this.data=e,this.contentType=t||null}}function oe(e,t){switch(e){case re.RAW:return new ie(se(t));case re.BASE64:case re.BASE64URL:return new ie(ce(e,t));case re.DATA_URL:return new ie(ue(t),he(t))}throw f()}function se(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ae(e){let t;try{t=decodeURIComponent(e)}catch(n){throw S(re.DATA_URL,"Malformed data URL.")}return se(t)}function ce(e,t){switch(e){case re.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw S(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw S(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ne(t)}catch(i){throw S(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class le{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw S(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=de(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ue(e){const t=new le(e);return t.base64?ce(re.BASE64,t.rest):ae(t.rest)}function he(e){const t=new le(e);return t.contentType}function de(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){let n=0,r="";W(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(W(this.data_)){const n=this.data_,r=te(n,e,t);return null===r?null:new fe(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new fe(n,!0)}}static getBlob(...e){if(V()){const t=e.map(e=>e instanceof fe?e.data_:e);return new fe(ee.apply(null,t))}{const t=e.map(e=>q(e)?oe(re.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new fe(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return U(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ge(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function _e(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){return t}class be{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ve}}let ye=null;function we(e){return!q(e)||e.length<2?e:_e(e)}function Oe(){if(ye)return ye;const e=[];function t(e,t){return we(t)}e.push(new be("bucket")),e.push(new be("generation")),e.push(new be("metageneration")),e.push(new be("name","fullPath",!0));const n=new be("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new be("size");return i.xform=r,e.push(i),e.push(new be("timeCreated")),e.push(new be("updated")),e.push(new be("md5Hash",null,!0)),e.push(new be("cacheControl",null,!0)),e.push(new be("contentDisposition",null,!0)),e.push(new be("contentEncoding",null,!0)),e.push(new be("contentLanguage",null,!0)),e.push(new be("contentType",null,!0)),e.push(new be("metadata","customMetadata",!0)),ye=e,ye}function ke(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new A(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ce(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return ke(r,e),r}function Ie(e,t,n){const r=pe(t);if(null===r)return null;const i=r;return Ce(e,i,n)}function je(e,t,n,r){const i=pe(t);if(null===i)return null;if(!q(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=H(a,n,r),l=B({alt:"media",token:t});return c+l});return c[0]}function Te(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e){if(!e)throw f()}function xe(e,t){function n(n,r){const i=Ie(e,r,t);return Se(null!==i),i}return n}function Pe(e,t){function n(n,r){const i=Ie(e,r,t);return Se(null!==i),je(i,r,e.host,e._protocol)}return n}function Re(e){function t(t,n){let r;return r=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?_():g():402===t.getStatus()?m(e.bucket):403===t.getStatus()?v(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Ne(e){const t=Re(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=p(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ae(e,t,n){const r=t.fullServerUrl(),i=H(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Ee(i,o,Pe(e,n),s);return a.errorHandler=Ne(t),a}function Le(e,t){const n=t.fullServerUrl(),r=H(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(e,t){}const a=new Ee(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=Ne(t),a}function Me(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function De(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Me(null,t)),r}function Fe(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const l=De(t,r,i),u=Te(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=fe.getBlob(h,r,d);if(null===f)throw C();const p={name:l["fullPath"]},m=H(o,e.host,e._protocol),g="POST",_=e.maxUploadRetryTime,v=new Ee(m,g,xe(e,n),_);return v.urlParams=p,v.headers=s,v.body=f.uploadData(),v.errorHandler=Re(t),v}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e,t){this._service=e,this._location=t instanceof A?t:A.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ue(e,t)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _e(this._location.path)}get storage(){return this._service}get parent(){const e=me(this._location.path);if(null===e)return null;const t=new A(this._location.bucket,e);return new Ue(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw E(e)}}function qe(e,t,n){e._throwIfRoot("uploadBytes");const r=Fe(e.storage,e._location,Oe(),new fe(t,!0),n);return e.storage.makeRequestWithTokens(r).then(e=>e.getPromise()).then(t=>({metadata:t,ref:e}))}async function We(e){e._throwIfRoot("getDownloadURL");const t=Ae(e.storage,e._location,Oe());return(await e.storage.makeRequestWithTokens(t)).getPromise().then(e=>{if(null===e)throw I();return e})}async function Ve(e){e._throwIfRoot("deleteObject");const t=Le(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function $e(e,t){const n=ge(e._location.path,t),r=new A(e._location.bucket,n);return new Ue(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return/^[A-Za-z]+:\/\//.test(e)}function Be(e,t){return new Ue(e,t)}function ze(e,t){if(e instanceof Ye){const n=e;if(null==n._bucket)throw k();const r=new Ue(n,n._bucket);return null!=t?ze(r,t):r}return void 0!==t?$e(e,t):e}function Ge(e,t){if(t&&He(t)){if(e instanceof Ye)return Be(e,t);throw j("To use ref(service, url), the first argument must be a Storage instance.")}return ze(e,t)}function Ke(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:A.makeFromBucketSpec(n,e)}class Ye{constructor(e,t,n,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=i?A.makeFromBucketSpec(i,this._host):Ke(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=Ke(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ue(this,e)}_makeRequest(e,t,n){if(this._deleted)return new L(T());{const r=X(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}const Je="@firebase/storage",Qe="0.8.3",Xe="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(e,t,n){return e=Object(o["q"])(e),qe(e,t,n)}function et(e){return e=Object(o["q"])(e),We(e)}function tt(e){return e=Object(o["q"])(e),Ve(e)}function nt(e,t){return e=Object(o["q"])(e),Ge(e,t)}function rt(e=Object(i["d"])(),t){e=Object(o["q"])(e);const n=Object(i["b"])(e,Xe),r=n.getImmediate({identifier:t});return r}function it(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Ye(n,r,o,new N,t,i["a"])}function ot(){Object(i["c"])(new s["a"](Xe,it,"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(Je,Qe)}ot()},"59ed":function(e,t,n){var r=n("1626"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("5135"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),l=n("44ad"),u=Object.assign,h=Object.defineProperty;e.exports=!u||i((function(){if(r&&1!==u({b:1},u(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=u({},e)[n]||o(u({},t)).join("")!=i}))?function(e,t){var n=c(e),i=arguments.length,u=1,h=s.f,d=a.f;while(i>u){var f,p=l(arguments[u++]),m=h?o(p).concat(h(p)):o(p),g=m.length,_=0;while(g>_)f=m[_++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:u},6547:function(e,t,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(e){return function(t,n){var s,a,c=i(o(t)),l=r(n),u=c.length;return l<0||l>=u?e?"":void 0:(s=c.charCodeAt(l),s<55296||s>56319||l+1===u||(a=c.charCodeAt(l+1))<56320||a>57343?e?c.charAt(l):s:e?c.slice(l,l+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var r=n("51b0");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]}))},"68ee":function(e,t,n){var r=n("d039"),i=n("1626"),o=n("f5df"),s=n("d066"),a=n("8925"),c=[],l=s("Reflect","construct"),u=/^\s*(?:class|function)\b/,h=u.exec,d=!u.exec((function(){})),f=function(e){if(!i(e))return!1;try{return l(Object,c,e),!0}catch(t){return!1}},p=function(e){if(!i(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(u,a(e))};e.exports=!l||r((function(){var e;return f(f.call)||!f(Object)||!f((function(){e=!0}))||e}))?p:f},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),l=n("9112"),u=n("5135"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},_=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var v=h.state||(h.state=new m),b=v.get,y=v.has,w=v.set;r=function(e,t){if(y.call(v,e))throw new TypeError(p);return t.facade=e,w.call(v,e,t),t},i=function(e){return b.call(v,e)||{}},o=function(e){return y.call(v,e)}}else{var O=d("state");f[O]=!0,r=function(e,t){if(u(e,O))throw new TypeError(p);return t.facade=e,l(e,O,t),t},i=function(e){return u(e,O)?e[O]:{}},o=function(e){return u(e,O)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:_}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return H}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),l=o("rl"),u=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const g=/\/$/,_=e=>e.replace(g,"");function v(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=j(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function y(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&k(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function k(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!C(e[n],t[n]))return!1;return!0}function C(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function j(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var T,E;(function(e){e["pop"]="pop",e["push"]="push"})(T||(T={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function S(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),_(e)}const x=/^[^#]+#/;function P(e,t){return e.replace(x,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function F(e){const t=M.get(e);return M.delete(e),t}let U=()=>location.protocol+"//"+location.host;function q(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),y(n,"")}const s=y(n,e);return s+r+i}function W(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=q(e,location),c=n.value,l=t.value;let u=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);u=l?o.position-l.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:u,type:T.pop,direction:u?u>0?E.forward:E.back:E.unknown})})};function c(){s=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:N()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function V(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function $(e){const{history:t,location:n}=window,r={value:q(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,V(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:N()});o(s.current,s,!0);const a=f({},V(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function H(e){e=S(e);const t=$(e),n=W(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:P.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return"string"===typeof e||e&&"object"===typeof e}function z(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function J(e,t){return f(new Error,{type:e,[K]:!0},t)}function Q(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const o=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){s+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,l="",u="";function h(){l&&(0===n?o.push({type:0,value:l}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),s(),i}function ae(e,t,n){const r=te(se(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=ue(e);a.aliasOf=r&&r.record;const l=pe(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=ae(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:m}function s(e){if(z(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function l(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw J(1,{location:e});s=i.record.name,a=f(le(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw J(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:l,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ue(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ge=/&/g,_e=/\//g,ve=/=/g,be=/\?/g,ye=/\+/g,we=/%5B/g,Oe=/%5D/g,ke=/%5E/g,Ce=/%60/g,Ie=/%7B/g,je=/%7C/g,Te=/%7D/g,Ee=/%20/g;function Se(e){return encodeURI(""+e).replace(je,"|").replace(we,"[").replace(Oe,"]")}function xe(e){return Se(e).replace(Ie,"{").replace(Te,"}").replace(ke,"^")}function Pe(e){return Se(e).replace(ye,"%2B").replace(Ee,"+").replace(me,"%23").replace(ge,"%26").replace(Ce,"`").replace(Ie,"{").replace(Te,"}").replace(ke,"^")}function Re(e){return Pe(e).replace(ve,"%3D")}function Ne(e){return Se(e).replace(me,"%23").replace(be,"%3F")}function Ae(e){return null==e?"":Ne(e).replace(_e,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),o=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Pe(e)):[r&&Pe(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(J(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(J(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(e=>a(e))})}function We(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(Ve(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(qe(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&qe(c,n,r,o,e)()}))}}return i}function Ve(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function $e(e){const t=Object(r["o"])(c),n=Object(r["o"])(l),i=Object(r["c"])(()=>t.resolve(Object(r["K"])(e.to))),o=Object(r["c"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["c"])(()=>o.value>-1&&Ge(n.params,i.value.params)),a=Object(r["c"])(()=>o.value>-1&&o.value===n.matched.length-1&&k(n.params,i.value.params));function u(n={}){return ze(n)?t[Object(r["K"])(e.replace)?"replace":"push"](Object(r["K"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["c"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:u}}const He=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$e,setup(e,{slots:t}){const n=Object(r["D"])($e(e)),{options:i}=Object(r["o"])(c),o=Object(r["c"])(()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["n"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Be=He;function ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["o"])(u),o=Object(r["c"])(()=>e.route||i.value),c=Object(r["o"])(a,0),l=Object(r["c"])(()=>o.value.matched[c]);Object(r["B"])(a,c+1),Object(r["B"])(s,l),Object(r["B"])(u,o);const h=Object(r["E"])();return Object(r["P"])(()=>[h.value,l.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const u=s.props[e.name],d=u?!0===u?i.params:"function"===typeof u?u(i):u:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["n"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Qe(n.default,{Component:m,route:i})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Xe=Je;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||De,o=e.history;const s=Ue(),a=Ue(),d=Ue(),g=Object(r["I"])(G);let _=G;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=p.bind(null,e=>""+e),O=p.bind(null,Ae),k=p.bind(null,Le);function C(e,n){let r,i;return z(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function j(){return t.getRoutes().map(e=>e.record)}function E(e){return!!t.getRecordMatcher(e)}function S(e,r){if(r=f({},r||g.value),"string"===typeof e){const i=v(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:k(s.params),hash:Le(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:v(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=y(k(a.params));const l=b(i,f({},e,{hash:xe(c),path:a.path})),u=o.createHref(l);return f({fullPath:l,hash:c,query:i===De?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function x(e){return"string"===typeof e?v(n,e,g.value.path):f({},e)}function P(e,t){if(_!==e)return J(8,{from:t,to:e})}function R(e){return q(e)}function M(e){return R(f(x(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=x(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function q(e,t){const n=_=S(e),r=g.value,o=e.state,s=e.force,a=!0===e.replace,c=U(n);if(c)return q(f(x(c),{state:o,force:s,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!s&&w(i,r,n)&&(u=J(16,{to:l,from:r}),re(r,r,!0,!1)),(u?Promise.resolve(u):V(l,r)).catch(e=>Q(e)?e:ee(e,l,r)).then(e=>{if(e){if(Q(e,2))return q(f(x(e.to),{state:o,force:s,replace:a}),t||l)}else e=H(l,r,!0,a,o);return $(l,r,e),e})}function W(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,i,o]=tt(e,t);n=We(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(qe(r,e,t))});const c=W.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(qe(r,e,t));return n.push(c),et(n)}).then(()=>{n=We(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(qe(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=We(o,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(qe(r,e,t));return n.push(c),et(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function $(e,t,n){for(const r of d.list())r(e,t,n)}function H(e,t,n,r,i){const s=P(e,t);if(s)return s;const a=t===G,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),g.value=e,re(e,t,n,a),ne()}let B;function K(){B=o.listen((e,t,n)=>{const r=S(e),i=U(r);if(i)return void q(f(i,{replace:!0}),r).catch(m);_=r;const s=g.value;h&&D(L(s.fullPath,n.delta),N()),V(r,s).catch(e=>Q(e,12)?e:Q(e,2)?(q(e.to,r).then(e=>{Q(e,20)&&!n.delta&&n.type===T.pop&&o.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||H(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===T.pop&&Q(e,20)&&o.go(-1,!1)),$(r,s,e)}).catch(m)})}let Y,X=Ue(),Z=Ue();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Y&&g.value!==G?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){Y||(Y=!0,K(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();const a=!i&&F(L(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["q"])().then(()=>s(t,n,a)).then(e=>e&&A(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:g,addRoute:C,removeRoute:I,hasRoute:E,getRoutes:j,resolve:S,options:e,push:R,replace:M,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",Be),e.component("RouterView",Xe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["K"])(g)}),h&&!oe&&g.value===G&&(oe=!0,R(o.location).catch(e=>{0}));const n={};for(const o in G)n[o]=Object(r["c"])(()=>g.value[o]);e.provide(c,t),e.provide(l,Object(r["D"])(n)),e.provide(u,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(_=G,B&&B(),g.value=G,oe=!1,Y=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("5135"),s=n("9112"),a=n("ce4e"),c=n("8925"),l=n("69f3"),u=n("5e77").CONFIGURABLE,h=l.get,d=l.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var l,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||u&&n.name!==g)&&s(n,"name",g),l=d(n),l.source||(l.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"c",(function(){return Be})),n.d(t,"p",(function(){return Me})),n.d(t,"D",(function(){return ke})),n.d(t,"E",(function(){return De})),n.d(t,"I",(function(){return Fe})),n.d(t,"K",(function(){return We})),n.d(t,"r",(function(){return r["I"]})),n.d(t,"J",(function(){return r["L"]})),n.d(t,"a",(function(){return Un})),n.d(t,"b",(function(){return qn})),n.d(t,"e",(function(){return Qn})),n.d(t,"f",(function(){return ur})),n.d(t,"g",(function(){return Jn})),n.d(t,"h",(function(){return rr})),n.d(t,"i",(function(){return lr})),n.d(t,"j",(function(){return cr})),n.d(t,"k",(function(){return ir})),n.d(t,"l",(function(){return wt})),n.d(t,"m",(function(){return Ir})),n.d(t,"n",(function(){return Oi})),n.d(t,"o",(function(){return ut})),n.d(t,"q",(function(){return ii})),n.d(t,"s",(function(){return It})),n.d(t,"t",(function(){return Dt})),n.d(t,"u",(function(){return Lt})),n.d(t,"v",(function(){return jt})),n.d(t,"w",(function(){return At})),n.d(t,"x",(function(){return Ft})),n.d(t,"y",(function(){return Mt})),n.d(t,"z",(function(){return Bn})),n.d(t,"A",(function(){return Ze})),n.d(t,"B",(function(){return lt})),n.d(t,"C",(function(){return Xe})),n.d(t,"F",(function(){return mr})),n.d(t,"G",(function(){return gr})),n.d(t,"H",(function(){return Ln})),n.d(t,"P",(function(){return _i})),n.d(t,"Q",(function(){return et})),n.d(t,"R",(function(){return yn})),n.d(t,"d",(function(){return Do})),n.d(t,"L",(function(){return Co})),n.d(t,"M",(function(){return jo})),n.d(t,"N",(function(){return To})),n.d(t,"O",(function(){return ko})),n.d(t,"S",(function(){return No}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,_=[];let v;const b=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!_.includes(this))try{return _.push(v=this),j(),m=1<<++p,p<=g?h(this):O(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,T(),_.pop();const e=_.length;v=e>0?_[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let k=!0;const C=[];function I(){C.push(k),k=!1}function j(){C.push(k),k=!0}function T(){const e=C.pop();k=void 0===e||e}function E(e,t,n){if(!S())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;x(i,o)}function S(){return k&&void 0!==v}function x(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function P(e,t,n,i,o,s){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&l.push(e)});else switch(void 0!==n&&l.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&l.push(a.get("length")):(l.push(a.get(b)),Object(r["t"])(e)&&l.push(a.get(y)));break;case"delete":Object(r["o"])(e)||(l.push(a.get(b)),Object(r["t"])(e)&&l.push(a.get(y)));break;case"set":Object(r["t"])(e)&&l.push(a.get(b));break}if(1===l.length)l[0]&&R(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=Object(r["H"])("__proto__,__v_isRef,__isVue"),A=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),L=q(),M=q(!1,!0),D=q(!0),F=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)E(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){I();const n=xe(this)[t].apply(this,e);return T(),n}}),e}function q(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?ye:be:t?ve:_e).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(F,i))return Reflect.get(F,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?A.has(i):N(i))return a;if(e||E(n,"get",i),t)return a;if(Me(a)){const e=!s||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Ie(a):ke(a):a}}const W=$(),V=$(!0);function $(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&(i=xe(i),s=xe(s),!Object(r["o"])(t)&&Me(s)&&!Me(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===xe(o)&&(a?Object(r["j"])(i,s)&&P(t,"set",n,i,s):P(t,"add",n,i)),c}}function H(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&P(e,"delete",t,void 0,i),o}function B(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&A.has(t)||E(e,"has",t),n}function z(e){return E(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const G={get:L,set:W,deleteProperty:H,has:B,ownKeys:z},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},Y=Object(r["h"])({},G,{get:M,set:V}),J=e=>e,Q=e=>Reflect.getPrototypeOf(e);function X(e,t,n=!1,r=!1){e=e["__v_raw"];const i=xe(e),o=xe(t);t!==o&&!n&&E(i,"get",t),!n&&E(i,"get",o);const{has:s}=Q(i),a=r?J:n?Ne:Re;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=xe(n),i=xe(e);return e!==i&&!t&&E(r,"has",e),!t&&E(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&E(xe(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=xe(e);const t=xe(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),P(t,"add",e,e)),this}function ne(e,t){t=xe(t);const n=xe(this),{has:i,get:o}=Q(n);let s=i.call(n,e);s||(e=xe(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&P(n,"set",e,t,a):P(n,"add",e,t),this}function re(e){const t=xe(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&P(t,"delete",e,void 0,o),s}function ie(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&P(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=xe(o),a=t?J:e?Ne:Re;return!e&&E(s,"iterate",b),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=xe(o),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=o[e](...i),h=n?J:t?Ne:Re;return!t&&E(s,"iterate",l?y:b),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return X(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return X(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return X(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!1)},r={get(e){return X(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)}),[e,n,t,r]}const[le,ue,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?ue:le;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const _e=new WeakMap,ve=new WeakMap,be=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["O"])(e))}function ke(e){return e&&e["__v_isReadonly"]?e:je(e,!1,G,pe,_e)}function Ce(e){return je(e,!1,Y,me,ve)}function Ie(e){return je(e,!0,K,ge,be)}function je(e,t,n,i,o){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Te(e){return Ee(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ee(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return Te(e)||Ee(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Pe(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["v"])(e)?ke(e):e,Ne=e=>Object(r["v"])(e)?Ie(e):e;function Ae(e){S()&&(e=xe(e),e.dep||(e.dep=c()),x(e.dep))}function Le(e,t){e=xe(e),e.dep&&R(e.dep)}function Me(e){return Boolean(e&&!0===e.__v_isRef)}function De(e){return Ue(e,!1)}function Fe(e){return Ue(e,!0)}function Ue(e,t){return Me(e)?e:new qe(e,t)}class qe{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:Re(e)}get value(){return Ae(this),this._value}set value(e){e=this._shallow?e:xe(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Re(e),Le(this,e))}}function We(e){return Me(e)?e.value:e}const Ve={get:(e,t,n)=>We(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return Te(e)?e:new Proxy(e,Ve)}class He{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Le(this))}),this["__v_isReadonly"]=n}get value(){const e=xe(this);return Ae(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Be(e,t){let n,i;const o=Object(r["p"])(e);o?(n=e,i=r["d"]):(n=e.get,i=e.set);const s=new He(n,i,o||!i);return s}Promise.resolve();new Set;new Map;function ze(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["N"]))}let c;let l=i[c=Object(r["M"])(t)]||i[c=Object(r["M"])(Object(r["e"])(t))];!l&&s&&(l=i[c=Object(r["M"])(Object(r["l"])(t))]),l&&Vr(l,e,6,o);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Vr(u,e,6,o)}}function Ge(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=Ge(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Ye=null,Je=null;function Qe(e){const t=Ye;return Ye=e,Je=e&&e.type.__scopeId||null,t}function Xe(e){Je=e}function Ze(){Je=null}function et(e,t=Ye,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Kn(-1);const i=Qe(t),o=e(...n);return Qe(i),r._d&&Kn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function tt(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:l,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let _,v;const b=Qe(e);try{if(4&n.shapeFlag){const e=o||i;_=hr(h.call(e,e,d,s,p,f,m)),v=l}else{const e=t;0,_=hr(e.length>1?e(s,{attrs:l,slots:c,emit:u}):e(s,null)),v=t.props?l:nt(l)}}catch(w){$n.length=0,$r(w,e,1),_=ir(Wn)}let y=_;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=y;e.length&&7&t&&(a&&e.some(r["u"])&&(v=rt(v,a)),y=ar(y,v))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),_=y,Qe(b),_}const nt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},rt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function it(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||ot(r,s,l):!!s);if(1024&c)return!0;if(16&c)return r?ot(r,s,l):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ke(l,n))return!0}}return!1}function ot(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ke(n,o))return!0}return!1}function st({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const at=e=>e.__isSuspense;function ct(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):hi(e)}function lt(e,t){if(Cr){let n=Cr.provides;const r=Cr.parent&&Cr.parent.provides;r===n&&(n=Cr.provides=Object.create(r)),n[e]=t}else 0}function ut(e,t,n=!1){const i=Cr||Ye;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function ht(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return At(()=>{e.isMounted=!0}),Dt(()=>{e.isUnmounting=!0}),e}const dt=[Function,Array],ft={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},setup(e,{slots:t}){const n=Ir(),r=ht();let i;return()=>{const o=t.default&&yt(t.default(),!0);if(!o||!o.length)return;const s=xe(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return _t(c);const l=vt(c);if(!l)return _t(c);const u=gt(l,s,r,n);bt(l,u);const h=n.subTree,d=h&&vt(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==Wn&&(!Zn(l,d)||f)){const e=gt(d,s,r,n);if(bt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},_t(c);"in-out"===a&&l.type!==Wn&&(e.delayLeave=(e,t,n)=>{const i=mt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return c}}},pt=ft;function mt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function gt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,b=String(e.key),y=mt(n,e),w=(e,t)=>{e&&Vr(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=y[b];o&&Zn(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=l,o=u;if(!n.isMounted){if(!i)return;t=g||c,r=_||l,o=v||u}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,y[i]===e&&delete y[i])};y[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return gt(e,t,n,r)}};return O}function _t(e){if(kt(e))return e=ar(e),e.children=null,e}function vt(e){return kt(e)?e.children?e.children[0]:void 0:e}function bt(e,t){6&e.shapeFlag&&e.component?bt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function yt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Un?(128&o.patchFlag&&r++,n=n.concat(yt(o.children,t))):(t||o.type!==Wn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function wt(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const Ot=e=>!!e.type.__asyncLoader;const kt=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ct(e,t){return Object(r["o"])(e)?e.some(e=>Ct(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function It(e,t){Tt(e,"a",t)}function jt(e,t){Tt(e,"da",t)}function Tt(e,t,n=Cr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(Pt(t,r,n),n){let e=n.parent;while(e&&e.parent)kt(e.parent.vnode)&&Et(r,t,n,e),e=e.parent}}function Et(e,t,n,i){const o=Pt(t,e,i,!0);Ft(()=>{Object(r["K"])(i[t],o)},n)}function St(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function xt(e){return 128&e.shapeFlag?e.ssContent:e}function Pt(e,t,n=Cr,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;I(),jr(n);const i=Vr(t,n,e,r);return Tr(),T(),i});return r?i.unshift(o):i.push(o),o}}const Rt=e=>(t,n=Cr)=>(!Pr||"sp"===e)&&Pt(e,t,n),Nt=Rt("bm"),At=Rt("m"),Lt=Rt("bu"),Mt=Rt("u"),Dt=Rt("bum"),Ft=Rt("um"),Ut=Rt("sp"),qt=Rt("rtg"),Wt=Rt("rtc");function Vt(e,t=Cr){Pt("ec",e,t)}let $t=!0;function Ht(e){const t=Kt(e),n=e.proxy,i=e.ctx;$t=!1,t.beforeCreate&&zt(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:b,destroyed:y,unmounted:w,render:O,renderTracked:k,renderTriggered:C,errorCaptured:I,serverPrefetch:j,expose:T,inheritAttrs:E,components:S,directives:x,filters:P}=t,R=null;if(u&&Bt(u,i,R,e.appContext.config.unwrapInjectedRef),a)for(const A in a){const e=a[A];Object(r["p"])(e)&&(i[A]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["v"])(t)&&(e.data=ke(t))}if($t=!0,s)for(const A in s){const e=s[A],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=Be({get:t,set:o});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Gt(c[r],i,n,r);if(l){const e=Object(r["p"])(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{lt(t,e[t])})}function N(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&zt(h,e,"c"),N(Nt,d),N(At,f),N(Lt,p),N(Mt,m),N(It,g),N(jt,_),N(Vt,I),N(Wt,k),N(qt,C),N(Dt,b),N(Ft,w),N(Ut,j),Object(r["o"])(T))if(T.length){const t=e.exposed||(e.exposed={});T.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=E&&(e.inheritAttrs=E),S&&(e.components=S),x&&(e.directives=x)}function Bt(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Zt(e));for(const o in e){const n=e[o];let s;s=Object(r["v"])(n)?"default"in n?ut(n.from||o,n.default,!0):ut(n.from||o):ut(n),Me(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function zt(e,t,n){Vr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gt(e,t,n,i){const o=i.includes(".")?yi(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&_i(o,n)}else if(Object(r["p"])(e))_i(o,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Gt(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&_i(o,i,e)}else 0}function Kt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Yt(c,e,s,!0)),Yt(c,t,s)):c=t,o.set(t,c),c}function Yt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Yt(e,o,n,!0),i&&i.forEach(t=>Yt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Jt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Jt={data:Qt,props:tn,emits:tn,methods:tn,computed:tn,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:tn,directives:tn,watch:nn,provide:Qt,inject:Xt};function Qt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Xt(e,t){return tn(Zt(e),Zt(t))}function Zt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function en(e,t){return e?[...new Set([].concat(e,t))]:t}function tn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function nn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=en(e[r],t[r]);return n}function rn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,er,1),e.propsDefaults=Object.create(null),sn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Ce(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function on(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=xe(o),[l]=e.propsOptions;let u=!1;if(!(i||a>0)||16&a){let i;sn(e,t,o,s)&&(u=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(o[s]=an(l,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],u=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(l)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,u=!0);else{const t=Object(r["e"])(a);o[t]=an(l,c,t,h,e,!1)}else h!==s[a]&&(s[a]=h,u=!0)}}u&&P(e,"set","$attrs")}function sn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let l in t){if(Object(r["z"])(l))continue;const u=t[l];let h;o&&Object(r["k"])(o,h=Object(r["e"])(l))?s&&s.includes(h)?(a||(a={}))[h]=u:n[h]=u:Ke(e.emitsOptions,l)||u!==i[l]&&(i[l]=u,c=!0)}if(s){const t=xe(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=an(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function an(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(jr(o),i=r[n]=e.call(null,t),Tr())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function cn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let l=!1;if(!Object(r["p"])(e)){const i=e=>{l=!0;const[n,i]=cn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!l)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);ln(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(ln(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=dn(Boolean,i.type),n=dn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const u=[a,c];return i.set(e,u),u}function ln(e){return"$"!==e[0]}function un(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function hn(e,t){return un(e)===un(t)}function dn(e,t){return Object(r["o"])(t)?t.findIndex(t=>hn(t,e)):Object(r["p"])(t)&&hn(t,e)?0:-1}const fn=e=>"_"===e[0]||"$stable"===e,pn=e=>Object(r["o"])(e)?e.map(hr):[hr(e)],mn=(e,t,n)=>{const r=et((...e)=>pn(t(...e)),n);return r._c=!1,r},gn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(fn(o))continue;const n=e[o];if(Object(r["p"])(n))t[o]=mn(o,n,i);else if(null!=n){0;const e=pn(n);t[o]=()=>e}}},_n=(e,t)=>{const n=pn(t);e.slots.default=()=>n},vn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=xe(t),Object(r["g"])(t,"_",n)):gn(t,e.slots={})}else e.slots={},t&&_n(e,t);Object(r["g"])(e.slots,er,1)},bn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,gn(t,o)),a=t}else t&&(_n(e,t),a={default:1});if(s)for(const r in o)fn(r)||r in a||delete o[r]};function yn(e,t){const n=Ye;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&wi(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function wn(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(I(),Vr(c,n,8,[e.el,a,e,t]),T())}}function On(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kn=0;function Cn(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=On(),s=new Set;let a=!1;const c=o.app={_uid:kn++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:ki,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,l){if(!a){const u=ir(n,i);return u.appContext=o,s&&t?t(u,r):e(u,r,l),a=!0,c._container=r,r.__vue_app__=c,Fr(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function In(){}const jn=ct;function Tn(e){return En(e)}function En(e,t){In();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=e,_=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Zn(e,t)&&(r=K(e),$(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case qn:v(e,t,n,r);break;case Wn:b(e,t,n,r);break;case Vn:null==e&&y(t,n,r,s);break;case Un:N(e,t,n,r,i,o,s,a,c);break;default:1&h?C(e,t,n,r,i,o,s,a,c):6&h?A(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,o,s,a,c,J)}null!=u&&i&&Sn(u,e&&e.ref,o,t||e,!t)},v=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&u(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=l(t.children||""),n,r):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},C=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?j(t,n,r,i,o,s,a,c):x(e,t,i,o,s,a,c)},j=(e,t,n,o,c,l,u,d)=>{let f,p;const{type:g,props:_,shapeFlag:v,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==m&&-1===y)f=e.el=m(e.el);else{if(f=e.el=a(e.type,l,_&&_.is,_),8&v?h(f,e.children):16&v&&S(e.children,f,null,o,c,l&&"foreignObject"!==g,u,d),w&&wn(e,null,o,"created"),_){for(const t in _)"value"===t||Object(r["z"])(t)||s(f,t,null,_[t],l,e.children,o,c,G);"value"in _&&s(f,"value",null,_.value),(p=_.onVnodeBeforeMount)&&xn(p,o,e)}E(f,e,e.scopeId,u,o)}w&&wn(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),i(f,t,n),((p=_&&_.onVnodeMounted)||O||w)&&jn(()=>{p&&xn(p,o,e),O&&b.enter(f),w&&wn(e,null,o,"mounted")},c)},E=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},S=(e,t,n,r,i,o,s,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?dr(e[l]):hr(e[l]);_(null,c,t,n,r,i,o,s,a)}},x=(e,t,n,i,o,a,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;(g=m.onVnodeBeforeUpdate)&&xn(g,n,t,e),f&&wn(t,e,n,"beforeUpdate");const _=o&&"foreignObject"!==t.type;if(d?P(e.dynamicChildren,d,l,n,i,_,a):c||U(e,t,l,null,n,i,_,a,!1),u>0){if(16&u)R(l,t,p,m,n,i,o);else if(2&u&&p.class!==m.class&&s(l,"class",null,m.class,o),4&u&&s(l,"style",p.style,m.style,o),8&u){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],u=m[a];u===c&&"value"!==a||s(l,a,c,u,o,e.children,n,i,G)}}1&u&&e.children!==t.children&&h(l,t.children)}else c||null!=d||R(l,t,p,m,n,i,o);((g=m.onVnodeUpdated)||f)&&jn(()=>{g&&xn(g,n,t,e),f&&wn(t,e,n,"updated")},i)},P=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Un||!Zn(c,l)||70&c.shapeFlag)?d(c.el):n;_(c,l,u,null,r,i,o,s,!0)}},R=(e,t,n,i,o,a,c)=>{if(n!==i){for(const l in i){if(Object(r["z"])(l))continue;const u=i[l],h=n[l];u!==h&&"value"!==l&&s(e,l,h,u,c,t.children,o,a,G)}if(n!==r["b"])for(const l in n)Object(r["z"])(l)||l in i||s(e,l,n[l],null,c,t.children,o,a,G);"value"in i&&s(e,"value",n.value,i.value)}},N=(e,t,n,r,o,s,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(i(h,n,r),i(d,n,r),S(t.children,n,d,o,s,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,o,s,a,l),(null!=t.key||o&&t===o.subTree)&&Pn(e,t,!0)):U(e,t,n,d,o,s,a,l,u)},A=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):M(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=kr(e,r,i);if(kt(e)&&(a.ctx.renderer=J),Rr(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=ir(Wn);b(null,e,t,n)}}else D(a,e,t,n,i,o,s)},M=(e,t,n)=>{const r=t.component=e.component;if(it(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,ci(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:h}=e,f=n;0,l.allowRecurse=!1,n?(n.el=h.el,F(e,n,a)):n=h,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&xn(t,u,n,h),l.allowRecurse=!0;const p=tt(e);0;const m=e.subTree;e.subTree=p,_(m,p,d(m.el),K(m),e,o,s),n.el=p.el,null===f&&st(e,p.el),c&&jn(c,o),(t=n.props&&n.props.onVnodeUpdated)&&jn(()=>xn(t,u,n,h),o)}else{let a;const{el:c,props:u}=t,{bm:h,m:d,parent:f}=e,p=Ot(t);if(l.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=u&&u.onVnodeBeforeMount)&&xn(a,f,t),l.allowRecurse=!0,c&&X){const n=()=>{e.subTree=tt(e),X(c,e.subTree,e,o,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=tt(e);0,_(null,r,n,i,e,o,s),t.el=r.el}if(d&&jn(d,o),!p&&(a=u&&u.onVnodeMounted)){const e=t;jn(()=>xn(a,f,e),o)}256&t.shapeFlag&&e.a&&jn(e.a,o),e.isMounted=!0,t=n=i=null}},l=new w(c,()=>si(e.update),e.scope),u=e.update=l.run.bind(l);u.id=e.uid,l.allowRecurse=u.allowRecurse=!0,u()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,on(e,t.props,r,n),bn(e,t.children,n),I(),di(void 0,e.update),T()},U=(e,t,n,r,i,o,s,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,d,n,r,i,o,s,a,c);if(256&f)return void q(l,d,n,r,i,o,s,a,c)}8&p?(16&u&&G(l,i,o),d!==l&&h(n,d)):16&u?16&p?W(l,d,n,r,i,o,s,a,c):G(l,i,o,!0):(8&u&&h(n,""),16&p&&S(d,n,r,i,o,s,a,c))},q=(e,t,n,i,o,s,a,c,l)=>{e=e||r["a"],t=t||r["a"];const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?dr(t[f]):hr(t[f]);_(e[f],r,n,null,o,s,a,c,l)}u>h?G(e,o,s,!0,!1,d):S(t,n,i,o,s,a,c,l,d)},W=(e,t,n,i,o,s,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?dr(t[u]):hr(t[u]);if(!Zn(r,i))break;_(r,i,n,null,o,s,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?dr(t[f]):hr(t[f]);if(!Zn(r,i))break;_(r,i,n,null,o,s,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)_(null,t[u]=l?dr(t[u]):hr(t[u]),n,r,o,s,a,c,l),u++}}else if(u>f)while(u<=d)$(e[u],o,s,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?dr(t[u]):hr(t[u]);null!=e.key&&g.set(e.key,u)}let v,b=0;const y=f-m+1;let w=!1,O=0;const k=new Array(y);for(u=0;u<y;u++)k[u]=0;for(u=p;u<=d;u++){const r=e[u];if(b>=y){$(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(v=m;v<=f;v++)if(0===k[v-m]&&Zn(r,t[v])){i=v;break}void 0===i?$(r,o,s,!0):(k[i-m]=u+1,i>=O?O=i:w=!0,_(r,t[i],n,null,o,s,a,c,l),b++)}const C=w?Rn(k):r["a"];for(v=C.length-1,u=y-1;u>=0;u--){const e=m+u,r=t[e],d=e+1<h?t[e+1].el:i;0===k[u]?_(null,r,n,d,o,s,a,c,l):w&&(v<0||u!==C[v]?V(r,n,d,2):v--)}}},V=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void V(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,J);if(a===Un){i(s,t,n);for(let e=0;e<l.length;e++)V(l[e],t,n,r);return void i(e.anchor,t,n)}if(a===Vn)return void O(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(s),i(s,t,n),jn(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),l=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,l):l()}else i(s,t,n)},$=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Sn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!Ot(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&xn(m,t,e),6&u)z(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&wn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,J,r):l&&(o!==Un||h>0&&64&h)?G(l,t,n,!1,!0):(o===Un&&384&h||!i&&16&u)&&G(c,t,n),r&&H(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&jn(()=>{m&&xn(m,t,e),f&&wn(e,null,t,"unmounted")},n)},H=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Un)return void B(n,r);if(t===Vn)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},B=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},z=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,$(a,e,t,n)),c&&jn(c,t),jn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)$(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Y=(e,t,n)=>{null==e?t._vnode&&$(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),fi(),t._vnode=e},J={p:_,um:$,m:V,r:H,mt:L,mc:S,pc:U,pbc:P,n:K,o:e};let Q,X;return t&&([Q,X]=t(J)),{render:Y,hydrate:Q,createApp:Cn(Y,Q)}}function Sn(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>Sn(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(Ot(i)&&!o)return;const s=4&i.shapeFlag?Fr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:l}=e;const u=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=u&&u!==l&&(Object(r["D"])(u)?(h[u]=null,Object(r["k"])(d,u)&&(d[u]=null)):Me(u)&&(u.value=null)),Object(r["D"])(l)){const e=()=>{h[l]=a,Object(r["k"])(d,l)&&(d[l]=a)};a?(e.id=-1,jn(e,n)):e()}else if(Me(l)){const e=()=>{l.value=a};a?(e.id=-1,jn(e,n)):e()}else Object(r["p"])(l)&&Wr(l,c,12,[a,h])}function xn(e,t,n,r=null){Vr(e,t,7,[n,r])}function Pn(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=dr(o[r]),t.el=e.el),n||Pn(e,t))}}function Rn(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Nn=e=>e.__isTeleport;const An="components";function Ln(e,t){return Dn(An,e,!0,t)||e}const Mn=Symbol();function Dn(e,t,n=!0,i=!1){const o=Ye||Cr;if(o){const n=o.type;if(e===An){const e=Ur(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Fn(o[e]||n[e],t)||Fn(o.appContext[e],t);return!s&&i?n:s}}function Fn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Un=Symbol(void 0),qn=Symbol(void 0),Wn=Symbol(void 0),Vn=Symbol(void 0),$n=[];let Hn=null;function Bn(e=!1){$n.push(Hn=e?null:[])}function zn(){$n.pop(),Hn=$n[$n.length-1]||null}let Gn=1;function Kn(e){Gn+=e}function Yn(e){return e.dynamicChildren=Gn>0?Hn||r["a"]:null,zn(),Gn>0&&Hn&&Hn.push(e),e}function Jn(e,t,n,r,i,o){return Yn(rr(e,t,n,r,i,o,!0))}function Qn(e,t,n,r,i){return Yn(ir(e,t,n,r,i,!0))}function Xn(e){return!!e&&!0===e.__v_isVNode}function Zn(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",tr=({key:e})=>null!=e?e:null,nr=({ref:e})=>null!=e?Object(r["D"])(e)||Me(e)||Object(r["p"])(e)?{i:Ye,r:e}:e:null;function rr(e,t=null,n=null,i=0,o=null,s=(e===Un?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tr(t),ref:t&&nr(t),scopeId:Je,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(fr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=Object(r["D"])(n)?8:16),Gn>0&&!a&&Hn&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Hn.push(l),l}const ir=or;function or(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Mn||(e=Wn),Xn(e)){const r=ar(e,t,!0);return n&&fr(r,n),r}if(qr(e)&&(e=e.__vccOpts),t){t=sr(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(Se(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:at(e)?128:Nn(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return rr(e,t,n,i,o,a,s,!0)}function sr(e){return e?Se(e)||er in e?Object(r["h"])({},e):e:null}function ar(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?pr(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&tr(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(nr(t)):[o,nr(t)]:nr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Un?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ar(e.ssContent),ssFallback:e.ssFallback&&ar(e.ssFallback),el:e.el,anchor:e.anchor};return l}function cr(e=" ",t=0){return ir(qn,null,e,t)}function lr(e,t){const n=ir(Vn,null,e);return n.staticCount=t,n}function ur(e="",t=!1){return t?(Bn(),Qn(Wn,null,e)):ir(Wn,null,e)}function hr(e){return null==e||"boolean"===typeof e?ir(Wn):Object(r["o"])(e)?ir(Un,null,e.slice()):"object"===typeof e?dr(e):ir(qn,null,String(e))}function dr(e){return null===e.el||e.memo?e:ar(e)}function fr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),fr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||er in t?3===r&&Ye&&(1===Ye.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Ye}}else Object(r["p"])(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),64&i?(n=16,t=[cr(t)]):n=8);e.children=t,e.shapeFlag|=n}function pr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}function mr(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}function gr(e,t,n={},r,i){if(Ye.isCE)return ir("slot","default"===t?null:{name:t},r&&r());let o=e[t];o&&o._c&&(o._d=!1),Bn();const s=o&&_r(o(n)),a=Qn(Un,{key:n.key||"_"+t},s||(r?r():[]),s&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function _r(e){return e.some(e=>!Xn(e)||e.type!==Wn&&!(e.type===Un&&!_r(e.children)))?e:null}const vr=e=>e?Er(e)?Fr(e)||e.proxy:vr(e.parent):null,br=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vr(e.parent),$root:e=>vr(e.root),$emit:e=>e.emit,$options:e=>Kt(e),$forceUpdate:e=>()=>si(e.update),$nextTick:e=>ii.bind(e.proxy),$watch:e=>bi.bind(e)}),yr={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 0:return i[t];case 1:return o[t];case 3:return n[t];case 2:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=0,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=1,o[t];if((u=e.propsOptions[0])&&Object(r["k"])(u,t))return a[t]=2,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=3,n[t];$t&&(a[t]=4)}}const h=br[t];let d,f;return h?("$attrs"===t&&E(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=3,n[t]):(f=l.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(br,a)||Object(r["k"])(o.config.globalProperties,a)}};const wr=On();let Or=0;function kr(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||wr,a={uid:Or++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(i,o),emitsOptions:Ge(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=ze.bind(null,a),e.ce&&e.ce(a),a}let Cr=null;const Ir=()=>Cr||Ye,jr=e=>{Cr=e,e.scope.on()},Tr=()=>{Cr&&Cr.scope.off(),Cr=null};function Er(e){return 4&e.vnode.shapeFlag}let Sr,xr,Pr=!1;function Rr(e,t=!1){Pr=t;const{props:n,children:r}=e.vnode,i=Er(e);rn(e,n,i,t),vn(e,r);const o=i?Nr(e,t):void 0;return Pr=!1,o}function Nr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pe(new Proxy(e.ctx,yr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Dr(e):null;jr(e),I();const o=Wr(i,e,0,[e.props,n]);if(T(),Tr(),Object(r["y"])(o)){if(o.then(Tr,Tr),t)return o.then(n=>{Ar(e,n,t)}).catch(t=>{$r(t,e,0)});e.asyncDep=o}else Ar(e,o,t)}else Lr(e,t)}function Ar(e,t,n){Object(r["p"])(t)?e.render=t:Object(r["v"])(t)&&(e.setupState=$e(t)),Lr(e,n)}function Lr(e,t,n){const i=e.type;if(!e.render){if(Sr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=Sr(t,c)}}e.render=i.render||r["d"],xr&&xr(e)}jr(e),I(),Ht(e),T(),Tr()}function Mr(e){return new Proxy(e.attrs,{get(t,n){return E(e,"get","$attrs"),t[n]}})}function Dr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Mr(e))},slots:e.slots,emit:e.emit,expose:t}}function Fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($e(Pe(e.exposed)),{get(t,n){return n in t?t[n]:n in br?br[n](e):void 0}}))}function Ur(e){return Object(r["p"])(e)&&e.displayName||e.name}function qr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Wr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){$r(o,t,n)}return i}function Vr(e,t,n,i){if(Object(r["p"])(e)){const o=Wr(e,t,n,i);return o&&Object(r["y"])(o)&&o.catch(e=>{$r(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Vr(e[r],t,n,i));return o}function $r(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Wr(s,null,10,[e,i,o])}Hr(e,n,i,r)}function Hr(e,t,n,r=!0){console.error(e)}let Br=!1,zr=!1;const Gr=[];let Kr=0;const Yr=[];let Jr=null,Qr=0;const Xr=[];let Zr=null,ei=0;const ti=Promise.resolve();let ni=null,ri=null;function ii(e){const t=ni||ti;return e?t.then(this?e.bind(this):e):t}function oi(e){let t=Kr+1,n=Gr.length;while(t<n){const r=t+n>>>1,i=pi(Gr[r]);i<e?t=r+1:n=r}return t}function si(e){Gr.length&&Gr.includes(e,Br&&e.allowRecurse?Kr+1:Kr)||e===ri||(null==e.id?Gr.push(e):Gr.splice(oi(e.id),0,e),ai())}function ai(){Br||zr||(zr=!0,ni=ti.then(mi))}function ci(e){const t=Gr.indexOf(e);t>Kr&&Gr.splice(t,1)}function li(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ai()}function ui(e){li(e,Jr,Yr,Qr)}function hi(e){li(e,Zr,Xr,ei)}function di(e,t=null){if(Yr.length){for(ri=t,Jr=[...new Set(Yr)],Yr.length=0,Qr=0;Qr<Jr.length;Qr++)Jr[Qr]();Jr=null,Qr=0,ri=null,di(e,t)}}function fi(e){if(Xr.length){const e=[...new Set(Xr)];if(Xr.length=0,Zr)return void Zr.push(...e);for(Zr=e,Zr.sort((e,t)=>pi(e)-pi(t)),ei=0;ei<Zr.length;ei++)Zr[ei]();Zr=null,ei=0}}const pi=e=>null==e.id?1/0:e.id;function mi(e){zr=!1,Br=!0,di(e),Gr.sort((e,t)=>pi(e)-pi(t));r["d"];try{for(Kr=0;Kr<Gr.length;Kr++){const e=Gr[Kr];e&&!1!==e.active&&Wr(e,null,14)}}finally{Kr=0,Gr.length=0,fi(e),Br=!1,ni=null,(Gr.length||Yr.length||Xr.length)&&mi(e)}}const gi={};function _i(e,t,n){return vi(e,t,n)}function vi(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=Cr;let l,u,h=!1,d=!1;if(Me(e)?(l=()=>e.value,h=!!e._shallow):Te(e)?(l=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Te),l=()=>e.map(e=>Me(e)?e.value:Te(e)?wi(e):Object(r["p"])(e)?Wr(e,c,2):void 0)):l=Object(r["p"])(e)?t?()=>Wr(e,c,2):()=>{if(!c||!c.isUnmounted)return u&&u(),Vr(e,c,3,[f])}:r["d"],t&&i){const e=l;l=()=>wi(e())}let f=e=>{u=_.onStop=()=>{Wr(e,c,4)}},p=d?[]:gi;const m=()=>{if(_.active)if(t){const e=_.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(u&&u(),Vr(t,c,3,[e,p===gi?void 0:p,f]),p=e)}else _.run()};let g;m.allowRecurse=!!t,g="sync"===o?m:"post"===o?()=>jn(m,c&&c.suspense):()=>{!c||c.isMounted?ui(m):m()};const _=new w(l,g);return t?n?m():p=_.run():"post"===o?jn(_.run.bind(_),c&&c.suspense):_.run(),()=>{_.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,_)}}function bi(e,t,n){const i=this.proxy,o=Object(r["D"])(e)?e.includes(".")?yi(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=Cr;jr(this);const c=vi(o,s.bind(i),n);return a?jr(a):Tr(),c}function yi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function wi(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Me(e))wi(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)wi(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{wi(e,t)});else if(Object(r["x"])(e))for(const n in e)wi(e[n],t);return e}function Oi(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?Xn(t)?ir(e,null,[t]):ir(e,t):ir(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Xn(n)&&(n=[n]),ir(e,t,n))}Symbol("");const ki="3.2.16",Ci="http://www.w3.org/2000/svg",Ii="undefined"!==typeof document?document:null,ji=new Map,Ti={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Ii.createElementNS(Ci,e):Ii.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Ii.createTextNode(e),createComment:e=>Ii.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ii.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=ji.get(e);if(!o){const t=Ii.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}ji.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ei(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Si(e,t,n){const i=e.style,o=i.display;if(n)if(Object(r["D"])(n))t!==n&&(i.cssText=n);else{for(const e in n)Pi(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Pi(i,e,"")}else e.removeAttribute("style");"_vod"in e&&(i.display=o)}const xi=/\s*!important$/;function Pi(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Pi(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Ai(e,t);xi.test(n)?e.setProperty(Object(r["l"])(i),n.replace(xi,""),"important"):e[i]=n}}const Ri=["Webkit","Moz","ms"],Ni={};function Ai(e,t){const n=Ni[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Ni[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ri.length;r++){const n=Ri[r]+i;if(n in e)return Ni[t]=n}return t}const Li="http://www.w3.org/1999/xlink";function Mi(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Li,t.slice(6,t.length)):e.setAttributeNS(Li,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Di(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let Fi=Date.now,Ui=!1;if("undefined"!==typeof window){Fi()>document.createEvent("Event").timeStamp&&(Fi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Ui=!!(e&&Number(e[1])<=53)}let qi=0;const Wi=Promise.resolve(),Vi=()=>{qi=0},$i=()=>qi||(Wi.then(Vi),qi=Fi());function Hi(e,t,n,r){e.addEventListener(t,n,r)}function Bi(e,t,n,r){e.removeEventListener(t,n,r)}function zi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Ki(t);if(r){const s=o[t]=Yi(r,i);Hi(e,n,s,a)}else s&&(Bi(e,n,s,a),o[t]=void 0)}}const Gi=/(?:Once|Passive|Capture)$/;function Ki(e){let t;if(Gi.test(e)){let n;t={};while(n=e.match(Gi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Yi(e,t){const n=e=>{const r=e.timeStamp||Fi();(Ui||r>=n.attached-1)&&Vr(Ji(e,n.value),t,5,[e])};return n.value=e,n.attached=$i(),n}function Ji(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Qi=/^on[a-z]/,Xi=(e,t,n,i,o=!1,s,a,c,l)=>{"class"===t?Ei(e,i,o):"style"===t?Si(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||zi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Zi(e,t,i,o))?Di(e,t,i,s,a,c,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Mi(e,t,i,o))};function Zi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Qi.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Qi.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const eo="transition",to="animation",no=(e,{slots:t})=>Oi(pt,so(e),t);no.displayName="Transition";const ro={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},io=(no.props=Object(r["h"])({},pt.props,ro),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),oo=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function so(e){const t={};for(const r in e)r in ro||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:l=s,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=ao(o),g=m&&m[0],_=m&&m[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:y,onLeave:w,onLeaveCancelled:O,onBeforeAppear:k=v,onAppear:C=b,onAppearCancelled:I=y}=t,j=(e,t,n)=>{uo(e,t?h:c),uo(e,t?u:a),n&&n()},T=(e,t)=>{uo(e,p),uo(e,f),t&&t()},E=e=>(t,n)=>{const r=e?C:b,o=()=>j(t,e,n);io(r,[t,o]),ho(()=>{uo(t,e?l:s),lo(t,e?h:c),oo(r)||po(t,i,g,o)})};return Object(r["h"])(t,{onBeforeEnter(e){io(v,[e]),lo(e,s),lo(e,a)},onBeforeAppear(e){io(k,[e]),lo(e,l),lo(e,u)},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){const n=()=>T(e,t);lo(e,d),vo(),lo(e,f),ho(()=>{uo(e,d),lo(e,p),oo(w)||po(e,i,_,n)}),io(w,[e,n])},onEnterCancelled(e){j(e,!1),io(y,[e])},onAppearCancelled(e){j(e,!0),io(I,[e])},onLeaveCancelled(e){T(e),io(O,[e])}})}function ao(e){if(null==e)return null;if(Object(r["v"])(e))return[co(e.enter),co(e.leave)];{const t=co(e);return[t,t]}}function co(e){const t=Object(r["N"])(e);return t}function lo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function uo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ho(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fo=0;function po(e,t,n,r){const i=e._endId=++fo,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=mo(e,t);if(!s)return r();const l=s+"end";let u=0;const h=()=>{e.removeEventListener(l,d),o()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),e.addEventListener(l,d)}function mo(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(eo+"Delay"),o=r(eo+"Duration"),s=go(i,o),a=r(to+"Delay"),c=r(to+"Duration"),l=go(a,c);let u=null,h=0,d=0;t===eo?s>0&&(u=eo,h=s,d=o.length):t===to?l>0&&(u=to,h=l,d=c.length):(h=Math.max(s,l),u=h>0?s>l?eo:to:null,d=u?u===eo?o.length:c.length:0);const f=u===eo&&/\b(transform|all)(,|$)/.test(n[eo+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function go(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>_o(t)+_o(e[n])))}function _o(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function vo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const bo=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function yo(e){e.target.composing=!0}function wo(e){const t=e.target;t.composing&&(t.composing=!1,Oo(t,"input"))}function Oo(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const ko={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=bo(o);const s=i||o.props&&"number"===o.props.type;Hi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["N"])(i)),e._assign(i)}),n&&Hi(e,"change",()=>{e.value=e.value.trim()}),t||(Hi(e,"compositionstart",yo),Hi(e,"compositionend",wo),Hi(e,"change",wo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=bo(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},Co={deep:!0,created(e,t,n){e._assign=bo(n),Hi(e,"change",()=>{const t=e._modelValue,n=So(e),i=e.checked,o=e._assign;if(Object(r["o"])(t)){const e=Object(r["G"])(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if(Object(r["B"])(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(xo(e,i))})},mounted:Io,beforeUpdate(e,t,n){e._assign=bo(n),Io(e,t,n)}};function Io(e,{value:t,oldValue:n},i){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["G"])(t,i.props.value)>-1:Object(r["B"])(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=Object(r["F"])(t,xo(e,!0)))}const jo={created(e,{value:t},n){e.checked=Object(r["F"])(t,n.props.value),e._assign=bo(n),Hi(e,"change",()=>{e._assign(So(e))})},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=bo(i),t!==n&&(e.checked=Object(r["F"])(t,i.props.value))}},To={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const o=Object(r["B"])(t);Hi(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?Object(r["N"])(So(e)):So(e));e._assign(e.multiple?o?new Set(t):t:t[0])}),e._assign=bo(i)},mounted(e,{value:t}){Eo(e,t)},beforeUpdate(e,t,n){e._assign=bo(n)},updated(e,{value:t}){Eo(e,t)}};function Eo(e,t){const n=e.multiple;if(!n||Object(r["o"])(t)||Object(r["B"])(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],s=So(o);if(n)Object(r["o"])(t)?o.selected=Object(r["G"])(t,s)>-1:o.selected=t.has(s);else if(Object(r["F"])(So(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function So(e){return"_value"in e?e._value:e.value}function xo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Po=["ctrl","shift","alt","meta"],Ro={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Po.some(n=>e[n+"Key"]&&!t.includes(n))},No=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ro[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Ao=Object(r["h"])({patchProp:Xi},Ti);let Lo;function Mo(){return Lo||(Lo=Tn(Ao))}const Do=(...e)=>{const t=Mo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Fo(e);if(!i)return;const o=t._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Fo(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),h=">",d="<",f="prototype",p="script",m=u("IE_PROTO"),g=function(){},_=function(e){return d+p+h+e+d+"/"+p+h},v=function(e){e.write(_("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=l("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(_("document.F=Object")),e.close(),e.F},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&r?v(r):b():v(r);var e=s.length;while(e--)delete y[f][s[e]];return y()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=y(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("5e77"),s=n("1626"),a=n("9ed3"),c=n("e163"),l=n("d2bb"),u=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),m=n("ae93"),g=o.PROPER,_=o.CONFIGURABLE,v=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,y=f("iterator"),w="keys",O="values",k="entries",C=function(){return this};e.exports=function(e,t,n,o,f,m,I){a(n,t,o);var j,T,E,S=function(e){if(e===f&&A)return A;if(!b&&e in R)return R[e];switch(e){case w:return function(){return new n(this,e)};case O:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},x=t+" Iterator",P=!1,R=e.prototype,N=R[y]||R["@@iterator"]||f&&R[f],A=!b&&N||S(f),L="Array"==t&&R.entries||N;if(L&&(j=c(L.call(new e)),j!==Object.prototype&&j.next&&(i||c(j)===v||(l?l(j,v):s(j[y])||d(j,y,C)),u(j,x,!0,!0),i&&(p[x]=C))),g&&f==O&&N&&N.name!==O&&(!i&&_?h(R,"name",O):(P=!0,A=function(){return N.call(this)})),f)if(T={values:S(O),keys:m?A:S(w),entries:S(k)},I)for(E in T)(b||P||!(E in R))&&d(R,E,T[E]);else r({target:t,proto:!0,forced:b||P},T);return i&&!I||R[y]===A||d(R,y,A,{name:f}),p[t]=A,T}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"===typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("1626"),i=n("c6cd"),o=Function.toString;r(i.inspectSource)||(i.inspectSource=function(e){return o.call(e)}),e.exports=i.inspectSource},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("577e"),i=n("ad6d"),o=n("9f7f"),s=n("5692"),a=n("7c73"),c=n("69f3").get,l=n("fce3"),u=n("107c"),h=RegExp.prototype.exec,d=s("native-string-replace",String.prototype.replace),f=h,p=function(){var e=/a/,t=/b*/g;return h.call(e,"a"),h.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=o.UNSUPPORTED_Y||o.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],_=p||g||m||l||u;_&&(f=function(e){var t,n,o,s,l,u,_,v=this,b=c(v),y=r(e),w=b.raw;if(w)return w.lastIndex=v.lastIndex,t=f.call(w,y),v.lastIndex=w.lastIndex,t;var O=b.groups,k=m&&v.sticky,C=i.call(v),I=v.source,j=0,T=y;if(k&&(C=C.replace("y",""),-1===C.indexOf("g")&&(C+="g"),T=y.slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==y.charAt(v.lastIndex-1))&&(I="(?: "+I+")",T=" "+T,j++),n=new RegExp("^(?:"+I+")",C)),g&&(n=new RegExp("^"+I+"$(?!\\s)",C)),p&&(o=v.lastIndex),s=h.call(k?n:v,T),k?s?(s.input=s.input.slice(j),s[0]=s[0].slice(j),s.index=v.lastIndex,v.lastIndex+=s[0].length):v.lastIndex=0:p&&s&&(v.lastIndex=v.global?s.index+s[0].length:o),g&&s&&s.length>1&&d.call(s[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)})),s&&O)for(s.groups=u=a(null),l=0;l<O.length;l++)_=O[l],u[_[0]]=s[_[1]];return s}),e.exports=f},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==u||n!=l&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),s=new S(r||[]);return o._invoke=I(e,n,s),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function _(){}function v(){}var b={};c(b,o,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var O=v.prototype=g.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(i,o,s,a){var c=u(e[i],e,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(h).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function I(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return P()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=j(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function x(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:P}}function P(){return{value:t,done:!0}}return _.prototype=v,c(O,"constructor",v),c(v,"constructor",_),_.displayName=c(v,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},k(C.prototype),c(C.prototype,s,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new C(l(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},k(O),c(O,a,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("d039"),o=n("e8b5"),s=n("861d"),a=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),h=n("1dde"),d=n("b622"),f=n("2d00"),p=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",_=f>=51||!i((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=h("concat"),b=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},y=!_||!v;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,i,o,s=a(this),h=u(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],b(o)){if(i=c(o.length),d+i>m)throw TypeError(g);for(n=0;n<i;n++,d++)n in o&&l(h,d,o[n])}else{if(d>=m)throw TypeError(g);l(h,d++,o)}return h.length=d,h}})},"9a1f":function(e,t,n){var r=n("59ed"),i=n("825a"),o=n("35a1");e.exports=function(e,t){var n=arguments.length<2?o(e):t;if(r(n))return i(n.call(e));throw TypeError(String(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=s(t),o(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var l=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),s(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Q})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return x})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return S})),n.d(t,"v",(function(){return W})),n.d(t,"w",(function(){return E})),n.d(t,"x",(function(){return z})),n.d(t,"y",(function(){return V})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return _})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return U})),n.d(t,"E",(function(){return q})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return l})),n.d(t,"K",(function(){return P})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return oe})),n.d(t,"O",(function(){return B}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function l(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||W(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),_=r(m);function v(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=A(e),r=A(t),n||r)return!(!n||!r)&&v(e,t);if(n=W(e),r=W(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":A(e)||W(e)&&(e.toString===$||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!W(t)||A(t)||z(t)?t:String(t),k={},C=[],I=()=>{},j=()=>!1,T=/^on[^a-z]/,E=e=>T.test(e),S=e=>e.startsWith("onUpdate:"),x=Object.assign,P=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,N=(e,t)=>R.call(e,t),A=Array.isArray,L=e=>"[object Map]"===H(e),M=e=>"[object Set]"===H(e),D=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,q=e=>"symbol"===typeof e,W=e=>null!==e&&"object"===typeof e,V=e=>W(e)&&F(e.then)&&F(e.catch),$=Object.prototype.toString,H=e=>$.call(e),B=e=>H(e).slice(8,-1),z=e=>"[object Object]"===H(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Y=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,Q=Y(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Z=Y(e=>e.replace(X,"-$1").toLowerCase()),ee=Y(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=Y(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ae=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},a15b:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),o=n("fc6a"),s=n("a640"),a=[].join,c=i!=Object,l=s("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(e){return a.call(o(this),void 0===e?",":e)}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),l=n("d039"),u=n("5135"),h=n("e8b5"),d=n("1626"),f=n("861d"),p=n("d9b5"),m=n("825a"),g=n("7b0b"),_=n("fc6a"),v=n("a04b"),b=n("577e"),y=n("5c6c"),w=n("7c73"),O=n("df75"),k=n("241c"),C=n("057f"),I=n("7418"),j=n("06cf"),T=n("9bf2"),E=n("d1e7"),S=n("6eeb"),x=n("5692"),P=n("f772"),R=n("d012"),N=n("90e3"),A=n("b622"),L=n("e538"),M=n("746f"),D=n("d44e"),F=n("69f3"),U=n("b727").forEach,q=P("hidden"),W="Symbol",V="prototype",$=A("toPrimitive"),H=F.set,B=F.getterFor(W),z=Object[V],G=i.Symbol,K=o("JSON","stringify"),Y=j.f,J=T.f,Q=C.f,X=E.f,Z=x("symbols"),ee=x("op-symbols"),te=x("string-to-symbol-registry"),ne=x("symbol-to-string-registry"),re=x("wks"),ie=i.QObject,oe=!ie||!ie[V]||!ie[V].findChild,se=a&&l((function(){return 7!=w(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Y(z,t);r&&delete z[t],J(e,t,n),r&&e!==z&&J(z,t,r)}:J,ae=function(e,t){var n=Z[e]=w(G[V]);return H(n,{type:W,tag:e,description:t}),a||(n.description=t),n},ce=function(e,t,n){e===z&&ce(ee,t,n),m(e);var r=v(t);return m(n),u(Z,r)?(n.enumerable?(u(e,q)&&e[q][r]&&(e[q][r]=!1),n=w(n,{enumerable:y(0,!1)})):(u(e,q)||J(e,q,y(1,{})),e[q][r]=!0),se(e,r,n)):J(e,r,n)},le=function(e,t){m(e);var n=_(t),r=O(n).concat(pe(n));return U(r,(function(t){a&&!he.call(n,t)||ce(e,t,n[t])})),e},ue=function(e,t){return void 0===t?w(e):le(w(e),t)},he=function(e){var t=v(e),n=X.call(this,t);return!(this===z&&u(Z,t)&&!u(ee,t))&&(!(n||!u(this,t)||!u(Z,t)||u(this,q)&&this[q][t])||n)},de=function(e,t){var n=_(e),r=v(t);if(n!==z||!u(Z,r)||u(ee,r)){var i=Y(n,r);return!i||!u(Z,r)||u(n,q)&&n[q][r]||(i.enumerable=!0),i}},fe=function(e){var t=Q(_(e)),n=[];return U(t,(function(e){u(Z,e)||u(R,e)||n.push(e)})),n},pe=function(e){var t=e===z,n=Q(t?ee:_(e)),r=[];return U(n,(function(e){!u(Z,e)||t&&!u(z,e)||r.push(Z[e])})),r};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,t=N(e),n=function(e){this===z&&n.call(ee,e),u(this,q)&&u(this[q],t)&&(this[q][t]=!1),se(this,t,y(1,e))};return a&&oe&&se(z,t,{configurable:!0,set:n}),ae(t,e)},S(G[V],"toString",(function(){return B(this).tag})),S(G,"withoutSetter",(function(e){return ae(N(e),e)})),E.f=he,T.f=ce,j.f=de,k.f=C.f=fe,I.f=pe,L.f=function(e){return ae(A(e),e)},a&&(J(G[V],"description",{configurable:!0,get:function(){return B(this).description}}),s||S(z,"propertyIsEnumerable",he,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),U(O(re),(function(e){M(e)})),r({target:W,stat:!0,forced:!c},{for:function(e){var t=b(e);if(u(te,t))return te[t];var n=G(t);return te[t]=n,ne[n]=t,n},keyFor:function(e){if(!p(e))throw TypeError(e+" is not a symbol");if(u(ne,e))return ne[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:ue,defineProperty:ce,defineProperties:le,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:l((function(){I.f(1)}))},{getOwnPropertySymbols:function(e){return I.f(g(e))}}),K){var me=!c||l((function(){var e=G();return"[null]"!=K([e])||"{}"!=K({a:e})||"{}"!=K(Object(e))}));r({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(f(t)||void 0!==e)&&!p(e))return h(t)||(t=function(e,t){if(d(r)&&(t=r.call(this,e,t)),!p(t))return t}),i[1]=t,K.apply(null,i)}})}if(!G[V][$]){var ge=G[V].valueOf;S(G[V],$,(function(){return ge.apply(this,arguments)}))}D(G,W),R[q]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),l=n("4840"),u=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=l(this,a("Promise")),n=c(e);return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),l=n("e163"),u=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=l(l(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("9bf2").f,s=Function.prototype,a=s.toString,c=/^\s*function ([^ (]*)/,l="name";r&&!i&&o(s,l,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},b575:function(e,t,n){var r,i,o,s,a,c,l,u,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),m=n("d4c3"),g=n("a4b4"),_=n("605d"),v=h.MutationObserver||h.WebKitMutationObserver,b=h.document,y=h.process,w=h.Promise,O=d(h,"queueMicrotask"),k=O&&O.value;k||(r=function(){var e,t;_&&(e=y.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},p||_||g||!v||!b?!m&&w&&w.resolve?(l=w.resolve(void 0),l.constructor=w,u=l.then,s=function(){u.call(l,r)}):s=_?function(){y.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=b.createTextNode(""),new v(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=k||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),l=i("wks"),u=r.Symbol,h=c?u:u&&u.withoutSetter||s;e.exports=function(e){return o(l,e)&&(a||"string"==typeof l[e])||(a&&o(u,e)?l[e]=u[e]:l[e]=h("Symbol."+e)),l[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,_){for(var v,b,y=o(p),w=i(y),O=r(m,g,3),k=s(w.length),C=0,I=_||a,j=t?I(p,k):n||d?I(p,0):void 0;k>C;C++)if((f||C in w)&&(v=w[C],b=O(v,C,y),e))if(t)j[C]=b;else if(b)switch(e){case 3:return!0;case 5:return v;case 6:return C;case 2:c.call(j,v)}else switch(e){case 4:return!1;case 7:c.call(j,v)}return h?-1:l||u?u:j}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b774:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="devtools-plugin:setup",i="plugin:settings:set"},c04e:function(e,t,n){var r=n("861d"),i=n("d9b5"),o=n("dc4a"),s=n("485a"),a=n("b622"),c=a("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,a=o(e,c);if(a){if(void 0===t&&(t="default"),n=a.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");e.exports=function(e,t){var n,a=i(e),c=0,l=[];for(n in a)!r(s,n)&&r(a,n)&&l.push(n);while(t.length>c)r(a,n=t[c++])&&(~o(l,n)||l.push(n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84");e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),o=n("d039"),s=n("b622"),a=n("9112"),c=s("species"),l=RegExp.prototype;e.exports=function(e,t,n,u){var h=s(e),d=!o((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),f=d&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!d||!f||n){var p=/./[h],m=t(h,""[e],(function(e,t,n,r,o){var s=t.exec;return s===i||s===l.exec?d&&!o?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,m[0]),r(l,h,m[1])}u&&a(l[h],"sham",!0)}},d959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{for(const[n,r]of t)e[n]=r;return e}},d9b5:function(e,t,n){var r=n("1626"),i=n("d066"),o=n("fdbf");e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&Object(e)instanceof t}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,l=o(r),u={},h=0;while(l.length>h)n=i(r,t=l[h++]),void 0!==n&&c(u,t,n);return u}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),l=c("iterator"),u=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[l]!==h)try{a(e,l,h)}catch(r){e[l]=h}if(e[u]||a(e,u,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var l=[];for(c=a;c<i.length;c++)l.push("..");return l=l.concat(o.slice(a)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("5135"),a=n("1626"),c=n("861d"),l=n("9bf2").f,u=n("e893"),h=o.Symbol;if(i&&a(h)&&(!("description"in h.prototype)||void 0!==h().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new h(e):void 0===e?h():h(e);return""===e&&(d[t]=!0),t};u(f,h);var p=f.prototype=h.prototype;p.constructor=f;var m=p.toString,g="Symbol(test)"==String(h("test")),_=/^Symbol\((.*)\)[^)]+$/;l(p,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=m.call(e);if(s(d,e))return"";var n=g?t.slice(7,-1):t.replace(_,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e163:function(e,t,n){var r=n("5135"),i=n("1626"),o=n("7b0b"),s=n("f772"),a=n("e177"),c=s("IE_PROTO"),l=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof Object?l:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",l=s.set,u=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){l(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),l=!a||c;r({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),l=n("da84"),u=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),m=n("d44e"),g=n("2626"),_=n("59ed"),v=n("1626"),b=n("861d"),y=n("19aa"),w=n("8925"),O=n("2266"),k=n("1c7e"),C=n("4840"),I=n("2cf4").set,j=n("b575"),T=n("cdf9"),E=n("44de"),S=n("f069"),x=n("e667"),P=n("69f3"),R=n("94ca"),N=n("b622"),A=n("6069"),L=n("605d"),M=n("2d00"),D=N("species"),F="Promise",U=P.get,q=P.set,W=P.getterFor(F),V=h&&h.prototype,$=h,H=V,B=l.TypeError,z=l.document,G=l.process,K=S.f,Y=K,J=!!(z&&z.createEvent&&l.dispatchEvent),Q=v(l.PromiseRejectionEvent),X="unhandledrejection",Z="rejectionhandled",ee=0,te=1,ne=2,re=1,ie=2,oe=!1,se=R(F,(function(){var e=w($),t=e!==String($);if(!t&&66===M)return!0;if(c&&!H["finally"])return!0;if(M>=51&&/native code/.test(e))return!1;var n=new $((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[D]=r,oe=n.then((function(){}))instanceof r,!oe||!t&&A&&!Q})),ae=se||!k((function(e){$.all(e)["catch"]((function(){}))})),ce=function(e){var t;return!(!b(e)||!v(t=e.then))&&t},le=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;j((function(){var r=e.value,i=e.state==te,o=0;while(n.length>o){var s,a,c,l=n[o++],u=i?l.ok:l.fail,h=l.resolve,d=l.reject,f=l.domain;try{u?(i||(e.rejection===ie&&fe(e),e.rejection=re),!0===u?s=r:(f&&f.enter(),s=u(r),f&&(f.exit(),c=!0)),s===l.promise?d(B("Promise-chain cycle")):(a=ce(s))?a.call(s,h,d):h(s)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&he(e)}))}},ue=function(e,t,n){var r,i;J?(r=z.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!Q&&(i=l["on"+e])?i(r):e===X&&E("Unhandled promise rejection",n)},he=function(e){I.call(l,(function(){var t,n=e.facade,r=e.value,i=de(e);if(i&&(t=x((function(){L?G.emit("unhandledRejection",r,n):ue(X,n,r)})),e.rejection=L||de(e)?ie:re,t.error))throw t.value}))},de=function(e){return e.rejection!==re&&!e.parent},fe=function(e){I.call(l,(function(){var t=e.facade;L?G.emit("rejectionHandled",t):ue(Z,t,e.value)}))},pe=function(e,t,n){return function(r){e(t,r,n)}},me=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ne,le(e,!0))},ge=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw B("Promise can't be resolved itself");var r=ce(t);r?j((function(){var n={done:!1};try{r.call(t,pe(ge,n,e),pe(me,n,e))}catch(i){me(n,i,e)}})):(e.value=t,e.state=te,le(e,!1))}catch(i){me({done:!1},i,e)}}};if(se&&($=function(e){y(this,$,F),_(e),r.call(this);var t=U(this);try{e(pe(ge,t),pe(me,t))}catch(n){me(t,n)}},H=$.prototype,r=function(e){q(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:ee,value:void 0})},r.prototype=f(H,{then:function(e,t){var n=W(this),r=K(C(this,$));return r.ok=!v(e)||e,r.fail=v(t)&&t,r.domain=L?G.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=ee&&le(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=U(e);this.promise=e,this.resolve=pe(ge,t),this.reject=pe(me,t)},S.f=K=function(e){return e===$||e===o?new i(e):Y(e)},!c&&v(h)&&V!==Object.prototype)){s=V.then,oe||(d(V,"then",(function(e,t){var n=this;return new $((function(e,t){s.call(n,e,t)})).then(e,t)}),{unsafe:!0}),d(V,"catch",H["catch"],{unsafe:!0}));try{delete V.constructor}catch(_e){}p&&p(V,H)}a({global:!0,wrap:!0,forced:se},{Promise:$}),m($,F,!1,!0),g(F),o=u(F),a({target:F,stat:!0,forced:se},{reject:function(e){var t=K(this);return t.reject.call(void 0,e),t.promise}}),a({target:F,stat:!0,forced:c||se},{resolve:function(e){return T(c&&this===o?$:this,e)}}),a({target:F,stat:!0,forced:ae},{all:function(e){var t=this,n=K(t),r=n.resolve,i=n.reject,o=x((function(){var n=_(t.resolve),o=[],s=0,a=1;O(e,(function(e){var c=s++,l=!1;o.push(void 0),a++,n.call(t,e).then((function(e){l||(l=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=K(t),r=n.reject,i=x((function(){var i=_(t.resolve);O(e,(function(e){i.call(t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=s.f,c=o.f,l=0;l<n.length;l++){var u=n[l];r(e,u)||a(e,u,c(t,u))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return ht})),n.d(t,"b",(function(){return dr})),n.d(t,"c",(function(){return ft})),n.d(t,"d",(function(){return ut})),n.d(t,"e",(function(){return dt})),n.d(t,"f",(function(){return pt}));var r=n("1fd5"),i=n("5606");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("4fc1"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function _(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["n"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["t"])()||"connection"in navigator))||navigator.onLine}function E(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["w"])()||Object(r["y"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["C"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=new(P.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),P.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw q(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?x(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"timeout")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t=!1){const n=Object(r["q"])(e),i=await n.getIdToken(t),o=z(i);_(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:$(B(o.auth_time)),issuedAtTime:$(B(o.iat)),expirationTime:$(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function z(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["h"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(e){const t=z(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,V(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=Object(r["q"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},()=>{const n=Object(r["C"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o);return P.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(_("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:k}=t;_(b&&k,e,"internal-error");const C=re.fromJSON(this.name,k);_("string"===typeof b,e,"internal-error"),ie(u,e.name),ie(h,e.name),_("boolean"===typeof y,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(v,e.name);const I=new oe({uid:b,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:g,lastLoginAt:v});return O&&Array.isArray(O)&&(I.providerData=O.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const l of t)try{const t=await l._get(o);if(t){const n=oe._fromJSON(e,t);l!==i&&(s=n),i=l;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(_e(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["r"])()){return/firefox\//i.test(e)}function de(e=Object(r["r"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["r"])()){return/crios\//i.test(e)}function pe(e=Object(r["r"])()){return/iemobile/i.test(e)}function me(e=Object(r["r"])()){return/android/i.test(e)}function ge(e=Object(r["r"])()){return/blackberry/i.test(e)}function _e(e=Object(r["r"])()){return/webos/i.test(e)}function ve(e=Object(r["r"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(r["r"])()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(r["v"])()&&10===document.documentMode}function we(e=Object(r["r"])()){return ve(e)||me(e)||_e(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=ue(Object(r["r"])());break;case"Worker":n=`${ue(Object(r["r"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await le.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["q"])(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ie(e){return Object(r["q"])(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["l"])(e=>this.observer=e)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}async function xe(e,t){return L(e,"POST","/v1/accounts:sendOobCode",A(e,t))}async function Pe(e,t){return xe(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Ne(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ae(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Se(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="http://localhost";class De extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new De(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Me,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["C"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function Ue(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function qe(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}const We={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),We)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ue(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Be(e){const t=Object(r["D"])(Object(r["p"])(e))["link"],n=t?Object(r["D"])(Object(r["p"])(t))["deep_link_id"]:null,i=Object(r["D"])(Object(r["p"])(e))["deep_link_id"],o=i?Object(r["D"])(Object(r["p"])(i))["link"]:null;return o||i||n||t||e}class ze{constructor(e){var t,n,i,o,s,a;const c=Object(r["D"])(Object(r["p"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=He(null!==(i=c["mode"])&&void 0!==i?i:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Be(e);try{return new ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return _(n,"argument-error"),Ae._fromEmailAndCode(e,n.code,n.tenantId)}}Ge.PROVIDER_ID="password",Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ye{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.FACEBOOK_SIGN_IN_METHOD="facebook.com",Je.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ye{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com",Qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ye{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Ye{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ze.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function et(e,t){return D(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.TWITTER_SIGN_IN_METHOD="twitter.com",Ze.PROVIDER_ID="twitter.com";class tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=nt(n),s=new tt({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=nt(n);return new tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function nt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,rt.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new rt(e,t,n,r)}}function it(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw rt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return tt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,it(r,i,t,e),n);_(o.idToken,r,"internal-error");const s=z(o.idToken);_(s,r,"internal-error");const{sub:a}=s;return _(e.uid===a,r,"user-mismatch"),tt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(e,t,n=!1){const r="signIn",i=await it(e,r,t),o=await tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function ct(e,t){return at(Ie(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t,n){const i=Object(r["q"])(e),o={requestType:"PASSWORD_RESET",email:t};n&&lt(i,o,n),await Pe(i,o)}async function ht(e,t,n){const r=Ie(e),i=await et(r,{returnSecureToken:!0,email:t,password:n}),o=await tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function dt(e,t,n){return ct(Object(r["q"])(e),Ge.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t,n,i){return Object(r["q"])(e).onAuthStateChanged(t,n,i)}function pt(e){return Object(r["q"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function gt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const _t="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(_t,"1"),this.storage.removeItem(_t),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){const e=Object(r["r"])();return de(e)||ve(e)}const yt=1e3,wt=10;class Ot extends vt{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,wt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ot.type="LOCAL";const kt=Ot;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends vt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ct.type="SESSION";const It=Ct;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Tt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await jt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.receivers=[];class St{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Et("",20);r.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function Pt(e){xt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return"undefined"!==typeof xt()["WorkerGlobalScope"]&&"function"===typeof xt()["importScripts"]}async function Nt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function At(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Lt(){return Rt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="firebaseLocalStorageDb",Dt=1,Ft="firebaseLocalStorage",Ut="fbase_key";class qt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wt(e,t){return e.transaction([Ft],t?"readwrite":"readonly").objectStore(Ft)}function Vt(){const e=indexedDB.deleteDatabase(Mt);return new qt(e).toPromise()}function $t(){const e=indexedDB.open(Mt,Dt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ft,{keyPath:Ut})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Ft)?t(n):(n.close(),await Vt(),t(await $t()))})})}async function Ht(e,t,n){const r=Wt(e,!0).put({[Ut]:t,value:n});return new qt(r).toPromise()}async function Bt(e,t){const n=Wt(e,!1).get(t),r=await new qt(n).toPromise();return void 0===r?null:r.value}function zt(e,t){const n=Wt(e,!0).delete(t);return new qt(n).toPromise()}const Gt=800,Kt=3;class Yt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await $t()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Kt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(Lt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nt(),!this.activeServiceWorker)return;this.sender=new St(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&At()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $t();return await Ht(e,_t,"1"),await zt(e,_t),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ht(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Bt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Wt(e,!1).getAll();return new qt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Yt.type="LOCAL";const Jt=Yt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function Xt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function en(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Zt().appendChild(r)})}function tn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
tn("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nn="recaptcha";async function rn(e,t,n){var r;const i=await n.verify();try{let o;if(_("string"===typeof i,e,"argument-error"),_(n.type===nn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){_("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;_(n,e,"missing-multi-factor-info");const s=await Qt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Fe(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(e){this.providerId=on.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return rn(this.auth,e,Object(r["q"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return on.credentialFromTaggedObject(t)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e,t){return t?w(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.PROVIDER_ID="phone",on.PHONE_SIGN_IN_METHOD="phone";class an extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cn(e){return at(e.auth,new an(e),e.bypassAuthState)}function ln(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),st(n,new an(e),e.bypassAuthState)}async function un(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),ot(n,new an(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cn;case"linkViaPopup":case"linkViaRedirect":return un;case"reauthViaPopup":case"reauthViaRedirect":return ln;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new S(2e3,1e4);class fn extends hn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,dn.get())};e()}}fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pn="pendingRedirect",mn=new Map;class gn extends hn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const t=await _n(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function _n(e,t){const n=bn(t),r="true"===await vn(e)._get(n);return await vn(e)._remove(n),r}function vn(e){return w(e._redirectPersistence)}function bn(e){return ce(pn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(e,t,n=!1){const r=Ie(e),i=sn(r,t),o=new gn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn=6e5;class On{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!In(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Cn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wn&&this.cachedEventUids.clear(),this.cachedEventUids.has(kn(e))}saveEventToCache(e){this.cachedEventUids.add(kn(e)),this.lastProcessedEventTime=Date.now()}}function kn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Cn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function In(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,En=/^https?/;async function Sn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jn(e);for(const r of t)try{if(xn(r))return}catch(n){}f(e,"unauthorized-domain")}function xn(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!En.test(n))return!1;if(Tn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new S(3e4,6e4);function Rn(){const e=xt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Nn(e){return new Promise((t,n)=>{var r,i,o;function s(){Rn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Rn(),n(p(e,"network-request-failed"))},timeout:Pn.get()})}if(null===(i=null===(r=xt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=xt().gapi)||void 0===o?void 0:o.load)){const t=tn("iframefcb");return xt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},en("https://apis.google.com/js/api.js?onload="+t)}s()}}).catch(e=>{throw An=null,e})}let An=null;function Ln(e){return An=An||Nn(e),An}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new S(5e3,15e3),Dn="__/auth/iframe",Fn="emulator/auth/iframe",Un={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},qn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,Fn):`https://${e.config.authDomain}/${Dn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=qn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["C"])(o).slice(1)}`}async function Vn(e){const t=await Ln(e),n=xt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:Wn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Un,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=xt().setTimeout(()=>{r(i)},Mn.get());function s(){xt().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hn=500,Bn=600,zn="_blank",Gn="http://localhost";class Kn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Yn(e,t,n,i=Hn,o=Bn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},$n),{width:i.toString(),height:o.toString(),top:s,left:a}),u=Object(r["r"])().toLowerCase();n&&(c=fe(u)?zn:n),he(u)&&(t=t||Gn,l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(be(u)&&"_self"!==c)return Jn(t||"",c),new Kn(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Kn(d)}function Jn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="__/auth/handler",Xn="emulator/auth/handler";function Zn(e,t,n,o,s,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof Ke){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["u"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ye){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${er(e)}?${Object(r["C"])(l).slice(1)}`}function er({config:e}){return e.emulator?x(e,Xn):`https://${e.authDomain}/${Qn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="webStorageSupport";class nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=It,this._completeRedirectFn=yn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zn(e,t,n,C(),r);return Yn(e,o,Et())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Pt(Zn(e,t,n,C(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Vn(e),n=new On(e);return t.register("authEvent",t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(tr,{type:tr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[tr];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ve()}}const rr=nr;class ir{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class or extends ir{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new or(e)}_finalizeEnroll(e,t,n){return gt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Xt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sr{constructor(){}static assertion(e){return or._fromCredential(e)}}sr.FACTOR_ID="phone";var ar="@firebase/auth",cr="0.18.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},s=new Ce(t,r);return k(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new lr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(ar,cr,ur(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e=Object(i["d"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:rr,persistence:[Jt,kt,It]})}hr("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f30a:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("b774");class i{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const r in e.settings){const t=e.settings[r];n[r]=t.defaultValue}const i="__vue-devtools-plugin-settings__"+e.id;let o={...n};try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(o,t)}catch(s){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(s){}o=e}},t.on(r["a"],(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}},f5df:function(e,t,n){var r=n("00ee"),i=n("1626"),o=n("c6b6"),s=n("b622"),a=s("toStringTag"),c="Arguments"==o(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=Object(e),a))?n:c?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},f83d:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return k})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return w})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return C})),n.d(t,"n",(function(){return T})),n.d(t,"o",(function(){return h})),n.d(t,"p",(function(){return O})),n.d(t,"q",(function(){return s})),n.d(t,"r",(function(){return E})),n.d(t,"s",(function(){return f}));const r=/\{([0-9a-zA-Z]+)\}/g;function i(e,...t){return 1===t.length&&C(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(r,(e,n)=>t.hasOwnProperty(n)?t[n]:"")}const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=e=>o?Symbol(e):e,a=(e,t,n)=>c({l:e,k:t,s:n}),c=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),l=e=>"number"===typeof e&&isFinite(e),u=e=>"[object Date]"===j(e),h=e=>"[object RegExp]"===j(e),d=e=>T(e)&&0===Object.keys(e).length;function f(e,t){"undefined"!==typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const p=Object.assign;let m;const g=()=>m||(m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{});function _(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const v=Object.prototype.hasOwnProperty;function b(e,t){return v.call(e,t)}const y=Array.isArray,w=e=>"function"===typeof e,O=e=>"string"===typeof e,k=e=>"boolean"===typeof e,C=e=>null!==e&&"object"===typeof e,I=Object.prototype.toString,j=e=>I.call(e),T=e=>"[object Object]"===j(e),E=e=>null==e?"":y(e)||T(e)&&e.toString===I?JSON.stringify(e,null,2):String(e)}).call(this,n("c8ba"))},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise},ffa6:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));function r(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function o(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function a(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var c=n("1fd5"),l=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),u="[DEFAULT]",h=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(f(e))try{this.getOrInitializeService({instanceIdentifier:u})}catch(p){}try{for(var r=o(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var a=s(i.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(p){}}}catch(m){t={error:m}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=u),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(a(a([],s(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),s(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=u),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=u),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:i});try{for(var l=o(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var h=s(u.value,2),d=h[0],f=h[1],p=this.normalizeInstanceIdentifier(d);a===p&&f.resolve(c)}}catch(m){t={error:m}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=o(i),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(e,t)}catch(l){}}}catch(u){n={error:u}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:d(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=u),this.component?this.component.multipleInstances?e:u:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function d(e){return e===u?void 0:e}function f(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
//# sourceMappingURL=chunk-vendors.c8689044.js.map