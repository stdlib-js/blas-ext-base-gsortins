// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,i=n.toString,f=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&f&&f.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var c=r,_=Number.NEGATIVE_INFINITY;function p(e){return 0===e&&1/e===_}function s(e){return e!=e}function d(e,r,t,o){var n,i,f,a,u,l,c,_;if(e<=0||0===r)return t;if(r<0&&(o*=-1),o<0){for(u=0,i=(a=(1-e)*o)+o,_=1;_<e;_++)if(s(l=t[i])){for(f=i;f>u;)t[f]=t[f+o],f+=o;t[u]=l}else{for(n=p(l),f=i-o;f<=a&&(!((c=t[f])<=l)||n&&c===l&&!1===p(c));)t[f+o]=c,f-=o;t[f+o]=l,i+=o}return t}for(u=(e-1)*o,i=(a=0)+o,_=1;_<e;_++)if(s(l=t[i])){for(f=i;f<u;)t[f]=t[f+o],f+=o;t[u]=l}else{for(n=p(l),f=i-o;f>=a&&(!((c=t[f])<=l)||n&&c===l&&!1===p(c));)t[f+o]=c,f-=o;t[f+o]=l,i+=o}return t}function b(e,r,t,o,n){var i,f,a,u,l,c,_,d;if(e<=0||0===r)return t;if(r<0&&(n-=(e-1)*(o*=-1)),l=(u=n)+(e-1)*o,f=u+o,o<0){for(d=1;d<e;d++)if(s(c=t[f])){for(a=f;a>l;)t[a]=t[a+o],a+=o;t[l]=c}else{for(i=p(c),a=f-o;a<=u&&(!((_=t[a])<=c)||i&&_===c&&!1===p(_));)t[a+o]=_,a-=o;t[a+o]=c,f+=o}return t}for(d=1;d<e;d++)if(s(c=t[f])){for(a=f;a<l;)t[a]=t[a+o],a+=o;t[l]=c}else{for(i=p(c),a=f-o;a>=u&&(!((_=t[a])<=c)||i&&_===c&&!1===p(_));)t[a+o]=_,a-=o;t[a+o]=c,f+=o}return t}c(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:b}),e.default=d,e.ndarray=b,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).gsortins={});
//# sourceMappingURL=browser.js.map
