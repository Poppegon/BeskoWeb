import{s as X,a as Y,u as Z,g as $,b as ee,r as te,c as se,o as ae}from"../chunks/scheduler.DB8j8Okt.js";import{S as le,i as ne,e as v,s as I,c as g,a as C,d as b,f as y,k as B,l as _,m as re,g as L,h as u,n as R,o as F,p as oe,q as ce,r as ie,u as he,t as ue,b as fe,j as _e}from"../chunks/index.CmNzzoaj.js";import{e as U}from"../chunks/each.D6YF6ztN.js";import{g as G}from"../chunks/entry.sWDFku_b.js";import{b as N}from"../chunks/paths.C7BXfhuU.js";import{s as de}from"../chunks/user.C4KVOs4Z.js";function K(l,s,r){const t=l.slice();return t[1]=s[r],t}function Q(l){let s,r,t,f=W(l[1].name)+"",k,d,c;return{c(){s=v("a"),r=v("div"),t=v("h2"),k=ue(f),d=I(),this.h()},l(i){s=g(i,"A",{href:!0});var n=C(s);r=g(n,"DIV",{class:!0});var S=C(r);t=g(S,"H2",{class:!0});var m=C(t);k=fe(m,f),m.forEach(b),S.forEach(b),d=y(n),n.forEach(b),this.h()},h(){_(t,"class","svelte-1mw8dx4"),_(r,"class","recentSearch svelte-1mw8dx4"),_(s,"href",c=N+"/search/"+l[1].name)},m(i,n){L(i,s,n),u(s,r),u(r,t),u(t,k),u(s,d)},p(i,n){n&1&&f!==(f=W(i[1].name)+"")&&_e(k,f),n&1&&c!==(c=N+"/search/"+i[1].name)&&_(s,"href",c)},d(i){i&&b(s)}}}function me(l){let s,r,t,f,k="Pokedex",d,c,i,n,S,m,E='<h1 class="svelte-1mw8dx4">Sök</h1>',j,A,w,x,J="Senaste Sökningar:",O,D,T,P;const q=l[3].default,p=Y(q,l,l[2],null);let H=U(l[0]),h=[];for(let e=0;e<H.length;e+=1)h[e]=Q(K(l,H,e));return{c(){s=v("div"),r=I(),t=v("main"),f=v("h1"),f.textContent=k,d=I(),c=v("div"),i=v("form"),n=v("input"),S=I(),m=v("div"),m.innerHTML=E,j=I(),p&&p.c(),A=I(),w=v("div"),x=v("h1"),x.textContent=J,O=I();for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){s=g(e,"DIV",{class:!0}),C(s).forEach(b),r=y(e),t=g(e,"MAIN",{class:!0});var o=C(t);f=g(o,"H1",{class:!0,"data-svelte-h":!0}),B(f)!=="svelte-1z0hoow"&&(f.textContent=k),d=y(o),c=g(o,"DIV",{class:!0});var a=C(c);i=g(a,"FORM",{});var M=C(i);n=g(M,"INPUT",{type:!0,placeholder:!0,class:!0}),M.forEach(b),S=y(a),m=g(a,"DIV",{class:!0,"data-svelte-h":!0}),B(m)!=="svelte-1tdjvpp"&&(m.innerHTML=E),a.forEach(b),j=y(o),p&&p.l(o),A=y(o),w=g(o,"DIV",{class:!0});var V=C(w);x=g(V,"H1",{style:!0,class:!0,"data-svelte-h":!0}),B(x)!=="svelte-cjsi6n"&&(x.textContent=J),O=y(V);for(let z=0;z<h.length;z+=1)h[z].l(V);V.forEach(b),o.forEach(b),this.h()},h(){_(s,"class","backdrop svelte-1mw8dx4"),_(f,"class","svelte-1mw8dx4"),_(n,"type","text"),_(n,"placeholder","Sök upp en annan pokemon"),_(n,"class","searchBar svelte-1mw8dx4"),_(m,"class","button svelte-1mw8dx4"),_(c,"class","navBar svelte-1mw8dx4"),re(x,"font-size","large"),_(x,"class","svelte-1mw8dx4"),_(w,"class","recentSearches svelte-1mw8dx4"),_(t,"class","main svelte-1mw8dx4")},m(e,o){L(e,s,o),L(e,r,o),L(e,t,o),u(t,f),u(t,d),u(t,c),u(c,i),u(i,n),R(n,l[1]),u(c,S),u(c,m),u(t,j),p&&p.m(t,null),u(t,A),u(t,w),u(w,x),u(w,O);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(w,null);D=!0,T||(P=[F(n,"input",l[4]),F(i,"submit",oe(l[5])),F(m,"click",l[6])],T=!0)},p(e,[o]){if(o&2&&n.value!==e[1]&&R(n,e[1]),p&&p.p&&(!D||o&4)&&Z(p,q,e,e[2],D?ee(q,e[2],o,null):$(e[2]),null),o&1){H=U(e[0]);let a;for(a=0;a<H.length;a+=1){const M=K(e,H,a);h[a]?h[a].p(M,o):(h[a]=Q(M),h[a].c(),h[a].m(w,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=H.length}},i(e){D||(ce(p,e),D=!0)},o(e){ie(p,e),D=!1},d(e){e&&(b(s),b(r),b(t)),p&&p.d(e),he(h,e),T=!1,te(P)}}}function W(l){return l.charAt(0).toUpperCase()+l.slice(1)}function pe(l,s,r){let t;se(l,de,E=>r(7,t=E));let{$$slots:f={},$$scope:k}=s,d="",c=[];function i(){console.log(JSON.parse(t)),r(0,c=t.length>2?JSON.parse(t):[]),r(0,c)}ae(()=>{i()});function n(){d=this.value,r(1,d)}const S=()=>G(N+"/search/"+d),m=()=>G(N+"/search/"+d);return l.$$set=E=>{"$$scope"in E&&r(2,k=E.$$scope)},[c,d,k,f,n,S,m]}class xe extends le{constructor(s){super(),ne(this,s,pe,me,X,{})}}export{xe as component};
