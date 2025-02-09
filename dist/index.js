"use strict";var p=function(o,q){return function(){return q||o((q={exports:{}}).exports,q),q.exports}};var m=p(function(L,Z){
var k=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/math-base-assert-is-nan/dist');function B(o,q,e,r,w){var f,l,a,g,c,v,n,i,u,h,b;if(f=e.data,l=e.accessors[0],a=e.accessors[1],q<0&&(r*=-1,w-=(o-1)*r),n=w,i=n+(o-1)*r,c=n+r,r<0){for(b=1;b<o;b++)if(u=l(f,c),j(u)){for(v=c;v>i;)a(f,v,l(f,v+r)),v+=r;a(f,i,u)}else{for(g=k(u),v=c-r;v<=n&&(h=l(f,v),!(h<=u&&!(g&&h===u&&k(h)===!1)));)a(f,v+r,h),v-=r;a(f,v+r,u),c+=r}return e}for(b=1;b<o;b++)if(u=l(f,c),j(u)){for(v=c;v<i;)a(f,v,l(f,v+r)),v+=r;a(f,i,u)}else{for(g=k(u),v=c-r;v>=n&&(h=l(f,v),!(h<=u&&!(g&&h===u&&k(h)===!1)));)a(f,v+r,h),v-=r;a(f,v+r,u),c+=r}return e}Z.exports=B
});var s=p(function(M,P){
var C=require('@stdlib/array-base-arraylike2object/dist'),y=require('@stdlib/math-base-assert-is-negative-zero/dist'),O=require('@stdlib/math-base-assert-is-nan/dist'),D=m();function E(o,q,e,r,w){var f,l,a,g,c,v,n,i,u;if(o<=0||q===0)return e;if(v=C(e),v.accessorProtocol)return D(o,q,v,r,w),e;if(q<0&&(r*=-1,w-=(o-1)*r),g=w,c=g+(o-1)*r,l=g+r,r<0){for(u=1;u<o;u++)if(n=e[l],O(n)){for(a=l;a>c;)e[a]=e[a+r],a+=r;e[c]=n}else{for(f=y(n),a=l-r;a<=g&&(i=e[a],!(i<=n&&!(f&&i===n&&y(i)===!1)));)e[a+r]=i,a-=r;e[a+r]=n,l+=r}return e}for(u=1;u<o;u++)if(n=e[l],O(n)){for(a=l;a<c;)e[a]=e[a+r],a+=r;e[c]=n}else{for(f=y(n),a=l-r;a>=g&&(i=e[a],!(i<=n&&!(f&&i===n&&y(i)===!1)));)e[a+r]=i,a-=r;e[a+r]=n,l+=r}return e}P.exports=E
});var z=p(function(Q,R){
var F=require('@stdlib/strided-base-stride2offset/dist'),G=s();function H(o,q,e,r){return G(o,q,e,r,F(o,r))}R.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),J=s();I(A,"ndarray",J);module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
