import{s as V,n as O,r as z,c as D,o as F}from"../chunks/scheduler.Buy2oYpz.js";import{S as J,i as R,e as p,s as C,c as m,a as A,k as w,f as x,d as E,v as j,l as t,g as G,h as n,m as T,n as H,p as K}from"../chunks/index.DLdrAx1q.js";import{b as Q}from"../chunks/paths.9w-VUSMU.js";import{u as W}from"../chunks/user.BB-BdgQu.js";function X(h){let r,a,l,L="Logga in",c,e,f,q="E-post address:",k,s,v,d,S="Lösenord:",I,o,M,g,N,b,U=`Har du inget konto? <a href="${Q}/register" style="font-style: oblique;">skapa ett</a>`,P,B;return{c(){r=p("main"),a=p("div"),l=p("h1"),l.textContent=L,c=C(),e=p("form"),f=p("label"),f.textContent=q,k=C(),s=p("input"),v=C(),d=p("label"),d.textContent=S,I=C(),o=p("input"),M=C(),g=p("input"),N=C(),b=p("p"),b.innerHTML=U,this.h()},l(i){r=m(i,"MAIN",{style:!0,class:!0});var _=A(r);a=m(_,"DIV",{class:!0});var y=A(a);l=m(y,"H1",{style:!0,class:!0,"data-svelte-h":!0}),w(l)!=="svelte-1n0t88d"&&(l.textContent=L),c=x(y),e=m(y,"FORM",{action:!0});var u=A(e);f=m(u,"LABEL",{for:!0,"data-svelte-h":!0}),w(f)!=="svelte-c0hlag"&&(f.textContent=q),k=x(u),s=m(u,"INPUT",{type:!0,id:!0,class:!0,minlength:!0}),v=x(u),d=m(u,"LABEL",{for:!0,"data-svelte-h":!0}),w(d)!=="svelte-1weckky"&&(d.textContent=S),I=x(u),o=m(u,"INPUT",{type:!0,id:!0,class:!0,minlength:!0}),M=x(u),g=m(u,"INPUT",{type:!0,id:!0}),u.forEach(E),N=x(y),b=m(y,"P",{"data-svelte-h":!0}),w(b)!=="svelte-1d8irrd"&&(b.innerHTML=U),y.forEach(E),_.forEach(E),this.h()},h(){j(l,"font-size","35px"),t(l,"class","svelte-1q5t3f4"),t(f,"for","username"),t(s,"type","text"),t(s,"id","username"),t(s,"class","smallbox svelte-1q5t3f4"),t(s,"minlength","1"),t(d,"for","password"),t(o,"type","password"),t(o,"id","password"),t(o,"class","smallbox svelte-1q5t3f4"),t(o,"minlength","1"),t(g,"type","submit"),t(g,"id","login"),g.value="Logga in",t(e,"action",""),t(a,"class","container svelte-1q5t3f4"),t(r,"style","--theme-color : "+Y),t(r,"class","svelte-1q5t3f4")},m(i,_){G(i,r,_),n(r,a),n(a,l),n(a,c),n(a,e),n(e,f),n(e,k),n(e,s),T(s,h[0]),n(e,v),n(e,d),n(e,I),n(e,o),T(o,h[1]),n(e,M),n(e,g),n(a,N),n(a,b),P||(B=[H(s,"input",h[3]),H(o,"input",h[4]),H(e,"submit",K(h[2]))],P=!0)},p(i,[_]){_&1&&s.value!==i[0]&&T(s,i[0]),_&2&&o.value!==i[1]&&T(o,i[1])},i:O,o:O,d(i){i&&E(r),P=!1,z(B)}}}let Y="red";function Z(h,r,a){let l;D(h,W,s=>a(6,l=s));let L=[],c="",e="";F(()=>{l.length>2&&(L=JSON.parse(l))});function f(){let s={username:c,password:e},v=L.filter(d=>s.username==d.username);v.length!=0&&v[0].password===s.password?alert("Välkommen tillbaka!!!"):alert("Användarnamn finns inte")}function q(){c=this.value,a(0,c)}function k(){e=this.value,a(1,e)}return[c,e,f,q,k]}class ne extends J{constructor(r){super(),R(this,r,Z,X,V,{})}}export{ne as component};
