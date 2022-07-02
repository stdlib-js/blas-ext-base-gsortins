// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,u=o.__lookupGetter__,l=o.__lookupSetter__,a=t,c=function(e,r,t){var a,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(a=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=a):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e},_=r()?a:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},s=Number.NEGATIVE_INFINITY,d=function(e){return 0===e&&1/e===s},b=function(e){return e!=e};function y(e,r,t,o){var n,i,f,u,l,a,c,_;if(e<=0||0===r)return t;if(r<0&&(o*=-1),o<0){for(l=0,i=(u=(1-e)*o)+o,_=1;_<e;_++)if(a=t[i],b(a)){for(f=i;f>l;)t[f]=t[f+o],f+=o;t[l]=a}else{for(n=d(a),f=i-o;f<=u&&(!((c=t[f])<=a)||n&&c===a&&!1===d(c));)t[f+o]=c,f-=o;t[f+o]=a,i+=o}return t}for(l=(e-1)*o,i=(u=0)+o,_=1;_<e;_++)if(a=t[i],b(a)){for(f=i;f<l;)t[f]=t[f+o],f+=o;t[l]=a}else{for(n=d(a),f=i-o;f>=u&&(!((c=t[f])<=a)||n&&c===a&&!1===d(c));)t[f+o]=c,f-=o;t[f+o]=a,i+=o}return t}return p(y,"ndarray",(function(e,r,t,o,n){var i,f,u,l,a,c,_,p;if(e<=0||0===r)return t;if(r<0&&(n-=(e-1)*(o*=-1)),a=(l=n)+(e-1)*o,f=l+o,o<0){for(p=1;p<e;p++)if(c=t[f],b(c)){for(u=f;u>a;)t[u]=t[u+o],u+=o;t[a]=c}else{for(i=d(c),u=f-o;u<=l&&(!((_=t[u])<=c)||i&&_===c&&!1===d(_));)t[u+o]=_,u-=o;t[u+o]=c,f+=o}return t}for(p=1;p<e;p++)if(c=t[f],b(c)){for(u=f;u<a;)t[u]=t[u+o],u+=o;t[a]=c}else{for(i=d(c),u=f-o;u>=l&&(!((_=t[u])<=c)||i&&_===c&&!1===d(_));)t[u+o]=_,u-=o;t[u+o]=c,f+=o}return t})),y},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsortins=r();
//# sourceMappingURL=index.js.map
