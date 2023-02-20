import{a as c,B as g,A as x,K as h,I as v,o as s,c as k,u,f as _,s as o,w as f,m as d,t as T,i as B,r as b,L as E}from"./entry.25feb9d9.js";import{_ as C}from"./nuxt-link.01514cdd.js";import{_ as y}from"./BaseButton.c2927542.js";import{u as w}from"./config.400a0ce9.js";import{u as S}from"./composables.3f373016.js";import"./Icon.c1509510.js";import"./app.config.8b0baab6.js";var i=(t=>(t.LIGHT="light",t.DARK="dark",t))(i||{});function m(){return localStorage.getItem("theme")??"light"}function L(t){localStorage.setItem("theme",t)}const H=c({__name:"ThemeToggler",setup(t){const e=g(m());x(e,()=>{e.value==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),L(e.value)},{immediate:!0});function n(){e.value=e.value===i.DARK?i.LIGHT:i.DARK}function a(){e.value=m()}return h(()=>{window.addEventListener("storage",a)}),v(()=>{window.removeEventListener("storage",a)}),(l,p)=>{const r=y;return s(),k(r,{variant:"text","icon-name":u(e)==="dark"?"material-symbols:sunny":"material-symbols:dark-mode-rounded",circle:"",onClick:n},null,8,["icon-name"])}}}),I={class:"bg-background-paper dark:bg-dark-background-paper text-primary-main h-app-header flex items-center justify-between px-app-px md:px-app-px-md fixed w-full z-10 shadow-sm"},D={class:"font-bold text-xl md:text-2xl"},K={class:"flex gap-1"},N=c({__name:"AppHeader",props:{appTitle:null},setup(t){const e=g(m());x(e,()=>{e.value==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),L(e.value)},{immediate:!0});function n(){e.value=m()}h(()=>{window.addEventListener("storage",n)}),v(()=>{window.removeEventListener("storage",n)});const a=w();return(l,p)=>{const r=C,$=H,A=y;return s(),_("header",I,[o(r,{to:{name:"index"}},{default:f(()=>[d("h1",D,T(t.appTitle),1)]),_:1}),d("div",K,[o($),o(A,{variant:"text",to:u(a).githubRepoUrl,"is-external-url":"","icon-name":"mdi:github",circle:""},null,8,["to"])])])}}}),R={},V={class:"mt-app-header py-app-py md:py-app-py-md px-app-px md:px-app-px-md bg-background-body dark:bg-dark-background-body"},j={class:"max-w-6xl mx-auto"};function F(t,e){return s(),_("main",V,[d("div",j,[b(t.$slots,"default")])])}const G=B(R,[["render",F]]),U={class:"bg-overlay-light dark:bg-dark-overlay-light flex items-center p-app-px md:p-app-px-md"},z=c({__name:"AppFooter",props:{appTitle:null},setup(t){return(e,n)=>(s(),_("footer",U,T(t.appTitle)+" | Vue.js ",1))}}),M={class:"min-h-screen grid grid-rows-[1fr_auto]"},P=c({__name:"AppLayout",props:{appTitle:null},setup(t){return(e,n)=>{const a=N,l=G,p=z;return s(),_("div",M,[o(a,{"app-title":t.appTitle},null,8,["app-title"]),o(l,null,{default:f(()=>[b(e.$slots,"default")]),_:3}),o(p,{"app-title":t.appTitle},null,8,["app-title"])])}}}),Z=c({__name:"default",setup(t){const n=w().appTitle;return S({title:n,titleTemplate:`%s | ${n}`}),(a,l)=>{const p=E,r=P;return s(),k(r,{"app-title":u(n)},{default:f(()=>[o(p)]),_:1},8,["app-title"])}}});export{Z as default};
