import{s as oe,d as A,n as U,o as se}from"../chunks/scheduler.B_XUYC3I.js";import{S as re,i as ae,e as _,s as X,t as R,c as v,a as D,k as Y,f as q,b as F,d as S,l as a,m as d,g as te,h as i,o as ne,p as ie,j as le,u as ce}from"../chunks/index.DbUlBx4J.js";import{e as Z}from"../chunks/each.D6YF6ztN.js";import{b as N}from"../chunks/paths.DsXGNKnB.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXF___uw.js";function $(l,t,o){const g=l.slice();return g[27]=t[o],g}function ee(l){let t,o=l[27].text+"",g;return{c(){t=_("h3"),g=R(o),this.h()},l(h){t=v(h,"H3",{style:!0,id:!0,class:!0});var c=D(t);g=F(c,o),c.forEach(S),this.h()},h(){d(t,"background-color",l[27].color),d(t,"left",l[27].localX+"px"),a(t,"id","popup"),a(t,"class","svelte-173i0dc")},m(h,c){te(h,t,c),i(t,g)},p(h,c){c&16&&o!==(o=h[27].text+"")&&le(g,o),c&16&&d(t,"background-color",h[27].color),c&16&&d(t,"left",h[27].localX+"px")},d(h){h&&S(t)}}}function ue(l){let t,o,g="Whack a Bober!",h,c,k,m,C,b,f,I,K="Stamina",B,x,p,w,P,u,L,V,y,W,j,M,G,O,E=Z(l[4]),n=[];for(let e=0;e<E.length;e+=1)n[e]=ee($(l,E,e));return{c(){t=_("main"),o=_("h1"),o.textContent=g,h=X(),c=_("h2"),k=R("Score: "),m=R(l[2]),C=X(),b=_("div"),f=_("div"),I=_("h3"),I.textContent=K,B=X(),x=_("div"),p=_("img"),P=X(),u=_("img"),V=X(),y=_("img"),j=X(),M=_("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=v(e,"MAIN",{class:!0});var s=D(t);o=v(s,"H1",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-rpr2ue"&&(o.textContent=g),h=q(s),c=v(s,"H2",{class:!0});var r=D(c);k=F(r,"Score: "),m=F(r,l[2]),r.forEach(S),C=q(s),b=v(s,"DIV",{id:!0,class:!0});var H=D(b);f=v(H,"DIV",{id:!0,style:!0,class:!0});var J=D(f);I=v(J,"H3",{style:!0,"data-svelte-h":!0}),Y(I)!=="svelte-uaszsv"&&(I.textContent=K),J.forEach(S),H.forEach(S),B=q(s),x=v(s,"DIV",{style:!0});var z=D(x);p=v(z,"IMG",{src:!0,alt:!0,id:!0,class:!0}),P=q(z),u=v(z,"IMG",{src:!0,alt:!0,id:!0,style:!0,class:!0}),V=q(z),y=v(z,"IMG",{src:!0,alt:!0,id:!0,style:!0,class:!0}),z.forEach(S),j=q(s),M=v(s,"DIV",{id:!0,class:!0});var Q=D(M);for(let T=0;T<n.length;T+=1)n[T].l(Q);Q.forEach(S),s.forEach(S),this.h()},h(){a(o,"class","svelte-173i0dc"),a(c,"class","svelte-173i0dc"),d(I,"rotate","90deg"),d(I,"font-size","larger"),a(f,"id","staminaBar"),d(f,"height",l[3]*2+"px"),a(f,"class","svelte-173i0dc"),a(b,"id","staminaContainer"),a(b,"class","svelte-173i0dc"),A(p.src,w=l[5])||a(p,"src",w),a(p,"alt","Keyboard"),a(p,"id","keyboard"),a(p,"class","svelte-173i0dc"),A(u.src,L=l[7])||a(u,"src",L),a(u,"alt","BOBER"),a(u,"id","bober"),d(u,"top",l[9].y+l[1].y*2-17+"px"),d(u,"left",l[9].x+l[1].x*2-20+"px"),a(u,"class","svelte-173i0dc"),A(y.src,W=l[6])||a(y,"src",W),a(y,"alt","HIT"),a(y,"id","hitMarker"),d(y,"top",l[9].y+l[0].y*2+"px"),d(y,"left",l[9].x+l[0].x*2+"px"),a(y,"class","svelte-173i0dc"),d(x,"width",l[8].x+"px"),d(x,"height",l[8].y+"px"),a(M,"id","popupBox"),a(M,"class","svelte-173i0dc"),a(t,"class","svelte-173i0dc")},m(e,s){te(e,t,s),i(t,o),i(t,h),i(t,c),i(c,k),i(c,m),i(t,C),i(t,b),i(b,f),i(f,I),i(t,B),i(t,x),i(x,p),i(x,P),i(x,u),i(x,V),i(x,y),i(t,j),i(t,M);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(M,null);G||(O=ne(window,"keydown",ie(l[10])),G=!0)},p(e,[s]){if(s&4&&le(m,e[2]),s&8&&d(f,"height",e[3]*2+"px"),s&2&&d(u,"top",e[9].y+e[1].y*2-17+"px"),s&2&&d(u,"left",e[9].x+e[1].x*2-20+"px"),s&1&&d(y,"top",e[9].y+e[0].y*2+"px"),s&1&&d(y,"left",e[9].x+e[0].x*2+"px"),s&16){E=Z(e[4]);let r;for(r=0;r<E.length;r+=1){const H=$(e,E,r);n[r]?n[r].p(H,s):(n[r]=ee(H),n[r].c(),n[r].m(M,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=E.length}},i:U,o:U,d(e){e&&S(t),ce(n,e),G=!1,O()}}}function de(l,t,o){let g=N+"/keyboard.png",h=N+"/betterHitMarker.png",c=N+"/illustration-of-cartoon-beaver-pixel-design-sticker-u8a01-46ff-x240.png",k={x:0,y:0},m={x:0,y:0},C=0,b=0,f=100,I={x:599,y:168},K={x:170,y:280},B={a:{x:18,y:47},b:{x:253,y:88},c:{x:154,y:88},d:{x:117,y:47},e:{x:104,y:6},f:{x:166,y:47},g:{x:216,y:47},h:{x:266,y:47},i:{x:352,y:6},j:{x:315,y:47},k:{x:365,y:47},l:{x:415,y:47},m:{x:352,y:88},n:{x:303,y:88},o:{x:402,y:6},p:{x:452,y:6},q:{x:5,y:6},r:{x:154,y:6},s:{x:67,y:47},t:{x:203,y:6},u:{x:303,y:6},v:{x:203,y:88},w:{x:55,y:6},x:{x:104,y:88},y:{x:253,y:6},z:{x:54,y:88}},x=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],p=null,w=null,P=null,u=[];se(()=>{p=document.getElementById("hitMarker"),w=document.getElementById("bober"),P=document.getElementById("popupBox").offsetWidth,console.log("Popup box width: "+P),setInterval(G,50),setInterval(E,2e3),setInterval(n,20)});function L(e){e.key in B&&V(B[e.key])}function V(e){f>50&&(o(0,k=e),p&&(p.style.display="block"),o(3,f-=50),o(3,f),b=50),w&&(console.log("Beaver: "+m.x,m.y),console.log("Hit: "+k.x,k.y),k.x==m.x&&k.y==m.y&&w.style.display=="block"&&p.style.display=="block"?(W(),w.style.display="none"):p.style.display=="block"&&j())}function y(){return Math.floor(Math.random()*P)}function W(){o(2,C+=1),u.push({color:"greenyellow",text:"+1 HIT",localX:y()}),o(4,u)}function j(){o(2,C-=1),u.push({color:"red",text:"-1 MISS",localX:y()}),o(4,u)}function M(){p&&(p.style.display="none")}function G(){b>0?b-=50:M()}function O(){let e=x.length,s=Math.floor(Math.random()*e),r=x[s];for(let H in B)if(H==r)return B[H];return console.log("no key found"),B.a}function E(){let e=O();e&&(o(1,m.x=e.x,m),o(1,m.y=e.y,m)),w&&(w.style.display="block")}function n(){f<100&&o(3,f+=1),o(3,f)}return[k,m,C,f,u,g,h,c,I,K,L]}class xe extends re{constructor(t){super(),ae(this,t,de,ue,oe,{})}}export{xe as component};
