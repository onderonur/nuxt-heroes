(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(t,e,r){"use strict";var o=r(2),n=r(24);r(348),r(349),r(350),r(351),r(352),r(353),r(354);o.default.component("VIcon",n.a)},154:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{type:String,to:Object,href:String,iconName:String,iconAlignment:String,circle:Boolean,variant:String,buttonClass:String}}),l=(r(329),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.to?"NuxtLink":t.href?"a":"button",{tag:"component",class:["button",t.circle&&"circle-button","primary"===t.variant&&["solid-button","primary-button"],"secondary"===t.variant&&["solid-button","secondary-button"],"text"===t.variant&&"text-button",t.buttonClass],attrs:{to:t.to,href:t.href,target:t.href?"_blank":void 0,rel:t.href?"noopener noreferrer":void 0,type:t.to?void 0:t.type||"button"},on:{click:function(e){return t.$emit("click",e)}}},["right"===t.iconAlignment?t._t("default"):t._e(),t._v(" "),t.iconName?r("VIcon",{staticClass:"fill-current w-full h-4 md:h-6",attrs:{name:t.iconName}}):t._e(),t._v(" "),"right"!==t.iconAlignment?t._t("default"):t._e()],2)}),[],!1,null,"55e806ed",null);e.default=component.exports},203:function(t,e,r){var content=r(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("20a780ee",content,!0,{sourceMap:!1})},204:function(t,e,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("35d4ea87",content,!0,{sourceMap:!1})},219:function(t,e,r){"use strict";var o=r(12),n=Object(o.b)({head:{},setup:function(){var t="Heroes & Villains";return Object(o.i)({title:t,titleTemplate:"%s | ".concat(t)}),{appTitle:t}}}),l=(r(327),r(21)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AppLayout",{attrs:{"app-title":t.appTitle}},[r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{AppLayout:r(355).default})},221:function(t,e,r){r(222),r(223),t.exports=r(226)},327:function(t,e,r){"use strict";r(203)},328:function(t,e,r){var o=r(75)((function(i){return i[1]}));o.push([t.i,"html.dark{color-scheme:dark}body{--tw-text-opacity:1;color:rgb(23 23 23 / var(--tw-text-opacity))}.dark body{--tw-text-opacity:1;color:rgb(250 250 250 / var(--tw-text-opacity))}a{--tw-text-opacity:1;color:rgb(244 63 94 / var(--tw-text-opacity))}a:hover{--tw-text-opacity:1;color:rgb(20 184 166 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},329:function(t,e,r){"use strict";r(204)},330:function(t,e,r){var o=r(75)((function(i){return i[1]}));o.push([t.i,".button[data-v-55e806ed]{display:flex;align-items:center;gap:0.25rem;border-radius:0.375rem;border-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgb(244 63 94 / var(--tw-border-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-weight:500;--tw-text-opacity:1;color:rgb(244 63 94 / var(--tw-text-opacity))}.button[data-v-55e806ed]:hover{--tw-bg-opacity:1;background-color:rgb(226 232 240 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(20 184 166 / var(--tw-text-opacity))}.dark .button[data-v-55e806ed]:hover{--tw-bg-opacity:1;background-color:rgb(51 65 85 / var(--tw-bg-opacity))}@media (min-width: 768px){.button[data-v-55e806ed]{padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem}}.button.solid-button[data-v-55e806ed]{border-style:none;--tw-text-opacity:1;color:rgb(250 250 250 / var(--tw-text-opacity))}.button.solid-button[data-v-55e806ed]:hover{--tw-text-opacity:1;color:rgb(250 250 250 / var(--tw-text-opacity))}.button.primary-button[data-v-55e806ed]{--tw-bg-opacity:1;background-color:rgb(244 63 94 / var(--tw-bg-opacity))}.button.primary-button[data-v-55e806ed]:hover{--tw-bg-opacity:1;background-color:rgb(251 113 133 / var(--tw-bg-opacity))}.button.secondary-button[data-v-55e806ed]{--tw-bg-opacity:1;background-color:rgb(20 184 166 / var(--tw-bg-opacity))}.button.secondary-button[data-v-55e806ed]:hover{--tw-bg-opacity:1;background-color:rgb(45 212 191 / var(--tw-bg-opacity))}.button.text-button[data-v-55e806ed]{border-style:none}.button.circle-button[data-v-55e806ed]{display:flex;height:2rem;width:2rem;align-items:center;justify-content:space-around;border-radius:9999px;padding:0px}@media (min-width: 768px){.button.circle-button[data-v-55e806ed]{height:2.5rem;width:2.5rem}}",""]),o.locals={},t.exports=o},355:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{appTitle:{type:String,required:!0}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen grid grid-rows-[1fr_auto]"},[r("AppHeader",{attrs:{"app-title":t.appTitle}}),t._v(" "),r("AppContent",[t._t("default")],2),t._v(" "),r("AppFooter",{attrs:{"app-title":t.appTitle}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHeader:r(356).default,AppContent:r(359).default,AppFooter:r(358).default})},356:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{appTitle:{type:String,required:!0}},setup:function(){var t,e=Object(o.f)(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light");function r(){var t;e.value=null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light"}return Object(o.l)(e,(function(){"dark"===e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e.value)}),{immediate:!0}),Object(o.d)((function(){window.addEventListener("storage",r)})),Object(o.e)((function(){window.removeEventListener("storage",r)})),{currentTheme:e,toggleTheme:function(){e.value="dark"===e.value?"light":"dark"},githubRepoUrl:"https://github.com/onderonur/nuxt-heroes-and-villains"}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-background-paper dark:bg-dark-background-paper text-primary-main h-app-header flex items-center justify-between px-app-px md:px-app-px-md fixed w-full z-10 shadow-sm"},[r("NuxtLink",{attrs:{to:{name:"index"}}},[r("h1",{staticClass:"font-bold text-xl md:text-2xl"},[t._v(t._s(t.appTitle))])]),t._v(" "),r("div",{staticClass:"flex gap-1"},[r("ThemeToggler"),t._v(" "),r("BaseButton",{attrs:{variant:"text",href:t.githubRepoUrl,"icon-name":"brands/github",circle:""}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ThemeToggler:r(357).default,BaseButton:r(154).default})},357:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({setup:function(){var t,e=Object(o.f)(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light");function r(){var t;e.value=null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"light"}return Object(o.l)(e,(function(){"dark"===e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e.value)}),{immediate:!0}),Object(o.d)((function(){window.addEventListener("storage",r)})),Object(o.e)((function(){window.removeEventListener("storage",r)})),{currentTheme:e,toggleTheme:function(){e.value="dark"===e.value?"light":"dark"}}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseButton",{attrs:{variant:"text","icon-name":"dark"===t.currentTheme?"sun":"moon",circle:""},on:{click:t.toggleTheme}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:r(154).default})},358:function(t,e,r){"use strict";r.r(e);var o=r(12),n=Object(o.b)({props:{appTitle:{type:String,required:!0}}}),l=r(21),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"bg-overlay-light dark:bg-dark-overlay-light flex items-center p-app-px md:p-app-px-md"},[t._v("\n  "+t._s(t.appTitle)+" | Vue.js\n")])}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,r){"use strict";r.r(e);var o=r(21),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"mt-app-header py-app-py md:py-app-py-md px-app-px md:px-app-px-md bg-background-body dark:bg-dark-background-body"},[r("div",{staticClass:"max-w-6xl mx-auto"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports}},[[221,18,1,19]]]);