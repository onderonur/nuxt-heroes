import{_ as s}from"./nuxt-link.01514cdd.js";import m from"./Icon.c1509510.js";import{a as d,o as a,c as l,w as y,r as i,y as n,q as f,M as v,u as b,i as x}from"./entry.25feb9d9.js";const k=d({__name:"BaseButton",props:{type:null,to:null,isExternalUrl:{type:Boolean},iconName:null,iconAlignment:null,circle:{type:Boolean},variant:{default:"default"},buttonClass:null},emits:["click"],setup(t){const r=s;return(e,o)=>{const u=m;return a(),l(v(t.to?b(r):"button"),{class:f(["button",t.circle&&"circle-button",t.variant==="primary"&&["solid-button","primary-button"],t.variant==="secondary"&&["solid-button","secondary-button"],t.variant==="text"&&"text-button",t.buttonClass]),to:t.to,target:t.isExternalUrl?"_blank":void 0,rel:t.isExternalUrl?"noopener noreferrer":void 0,type:t.to?void 0:t.type||"button",onClick:o[0]||(o[0]=c=>e.$emit("click",c))},{default:y(()=>[t.iconAlignment==="right"?i(e.$slots,"default",{key:0},void 0,!0):n("",!0),t.iconName?(a(),l(u,{key:1,name:t.iconName,class:"fill-current w-full h-4 md:h-6"},null,8,["name"])):n("",!0),t.iconAlignment!=="right"?i(e.$slots,"default",{key:2},void 0,!0):n("",!0)]),_:3},8,["class","to","target","rel","type"])}}});const N=x(k,[["__scopeId","data-v-209c655e"]]);export{N as _};
