import{s as U,d as j,n as q,r as w,o as F}from"../chunks/scheduler.B_XUYC3I.js";import{S as G,i as H,e as v,s as E,c as g,a as y,d,f as M,k as J,l as p,m as I,g as C,h,n as z,o as A,z as P,u as R,t as K,b as Q}from"../chunks/index.DbUlBx4J.js";import{e as D}from"../chunks/each.D6YF6ztN.js";function L(s,e,n){const t=s.slice();return t[6]=e[n],t[8]=n,t}function W(s,e,n){const t=s.slice();return t[9]=e[n],t[8]=n,t}function X(s){let e,n=D(s[1].slice(0,s[8])),t=[];for(let l=0;l<n.length;l+=1)t[l]=Y(W(s,n,l));return{c(){e=v("li");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=g(l,"LI",{});var o=y(e);for(let r=0;r<t.length;r+=1)t[r].l(o);o.forEach(d)},m(l,o){C(l,e,o);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p:q,d(l){l&&d(e),R(t,l)}}}function Y(s){let e;return{c(){e=K(s[8])},l(n){e=Q(n,s[8])},m(n,t){C(n,e,t)},p:q,d(n){n&&d(e)}}}function O(s){let e,n,t=s[8]>0&&X(s);return{c(){e=v("div"),t&&t.c(),n=E(),this.h()},l(l){e=g(l,"DIV",{class:!0});var o=y(e);t&&t.l(o),n=M(o),o.forEach(d),this.h()},h(){p(e,"class","box svelte-2tyo2q")},m(l,o){C(l,e,o),t&&t.m(e,null),h(e,n)},p(l,o){l[8]>0&&t.p(l,o)},d(l){l&&d(e),t&&t.d()}}}function Z(s){let e,n,t,l,o,r,f,x,m,S="Random",N,_,T,B,V,k=D(s[1]),c=[];for(let a=0;a<k.length;a+=1)c[a]=O(L(s,k,a));return{c(){e=v("main"),n=v("div"),t=E(),l=v("div");for(let a=0;a<c.length;a+=1)c[a].c();o=E(),r=v("form"),f=v("input"),x=E(),m=v("button"),m.textContent=S,N=E(),_=v("img"),this.h()},l(a){e=g(a,"MAIN",{class:!0});var u=y(e);n=g(u,"DIV",{id:!0}),y(n).forEach(d),t=M(u),l=g(u,"DIV",{id:!0,class:!0});var i=y(l);for(let $=0;$<c.length;$+=1)c[$].l(i);i.forEach(d),o=M(u),r=g(u,"FORM",{});var b=y(r);f=g(b,"INPUT",{type:!0,min:!0,max:!0}),x=M(b),m=g(b,"BUTTON",{"data-svelte-h":!0}),J(m)!=="svelte-kiekzi"&&(m.textContent=S),b.forEach(d),N=M(u),_=g(u,"IMG",{src:!0,style:!0}),u.forEach(d),this.h()},h(){p(n,"id","headerBox"),p(l,"id","gridBox"),p(l,"class","svelte-2tyo2q"),p(f,"type","number"),p(f,"min",0),p(f,"max",7),j(_.src,T="photos/Sus.jpg")||p(_,"src",T),I(_,"position","fixed"),I(_,"height","100px"),I(_,"width","100px"),I(_,"left","0"),I(_,"bottom","0"),p(e,"class","svelte-2tyo2q")},m(a,u){C(a,e,u),h(e,n),h(e,t),h(e,l);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(l,null);h(e,o),h(e,r),h(r,f),z(f,s[0]),h(r,x),h(r,m),h(e,N),h(e,_),B||(V=[A(f,"input",s[3]),A(m,"click",s[4])],B=!0)},p(a,[u]){if(u&2){k=D(a[1]);let i;for(i=0;i<k.length;i+=1){const b=L(a,k,i);c[i]?c[i].p(b,u):(c[i]=O(b),c[i].c(),c[i].m(l,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=k.length}u&1&&P(f.value)!==a[0]&&z(f,a[0])},i:q,o:q,d(a){a&&d(e),R(c,a),B=!1,w(V)}}}function ee(s,e,n){let t=7,l=Array(t);console.log(l),F(()=>{setInterval(()=>{document.getElementsByClassName("box")},10)});function o(x){let m=Math.floor(Math.random()*x);return l.slice(0,m)}function r(){t=P(this.value),n(0,t)}return[t,l,o,r,()=>o()]}class se extends G{constructor(e){super(),H(this,e,ee,Z,U,{})}}export{se as component};
