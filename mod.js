// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,f=o.__lookupGetter__,u=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(r,e)||u.call(r,e)?(l=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r};var l=e;var c=Number.NEGATIVE_INFINITY;function _(r){return 0===r&&1/r===c}function p(r){return r!=r}function b(r,e,t,o){var n,a,i,f,u,l,c,b;if(r<=0||0===e)return t;if(e<0&&(o*=-1),o<0){for(u=0,a=(f=(1-r)*o)+o,b=1;b<r;b++)if(p(l=t[a])){for(i=a;i>u;)t[i]=t[i+o],i+=o;t[u]=l}else{for(n=_(l),i=a-o;i<=f&&(!((c=t[i])<=l)||n&&c===l&&!1===_(c));)t[i+o]=c,i-=o;t[i+o]=l,a+=o}return t}for(u=(r-1)*o,a=(f=0)+o,b=1;b<r;b++)if(p(l=t[a])){for(i=a;i<u;)t[i]=t[i+o],i+=o;t[u]=l}else{for(n=_(l),i=a-o;i>=f&&(!((c=t[i])<=l)||n&&c===l&&!1===_(c));)t[i+o]=c,i-=o;t[i+o]=l,a+=o}return t}function s(r,e,t,o,n){var a,i,f,u,l,c,b,s;if(r<=0||0===e)return t;if(e<0&&(n-=(r-1)*(o*=-1)),l=(u=n)+(r-1)*o,i=u+o,o<0){for(s=1;s<r;s++)if(p(c=t[i])){for(f=i;f>l;)t[f]=t[f+o],f+=o;t[l]=c}else{for(a=_(c),f=i-o;f<=u&&(!((b=t[f])<=c)||a&&b===c&&!1===_(b));)t[f+o]=b,f-=o;t[f+o]=c,i+=o}return t}for(s=1;s<r;s++)if(p(c=t[i])){for(f=i;f<l;)t[f]=t[f+o],f+=o;t[l]=c}else{for(a=_(c),f=i-o;f>=u&&(!((b=t[f])<=c)||a&&b===c&&!1===_(b));)t[f+o]=b,f-=o;t[f+o]=c,i+=o}return t}l(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:s});export{b as default,s as ndarray};
//# sourceMappingURL=mod.js.map
