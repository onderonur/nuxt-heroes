import{f as K,o as b,c as F,m as Ae,h as V,w as j,a as S,b as P,q as de,_ as fe,t as $e,p as ke,e as Le,s as pe,j as Re,v as O,x as Ne,g as Ce,u as Te,k as v,y as Oe,F as Fe,i as Pe,d as ie,l as oe}from"./entry.353090c6.js";import{_ as me}from"./BaseButton.c0fb07f4.js";import{_ as Be,u as je,a as Ve}from"./LoadingContainer.vue.0f983099.js";import{_ as Ke}from"./nuxt-link.62cacd79.js";import"./Icon.2f6a38b7.js";import"./config.b463591c.js";const De=["name","value","placeholder"],We=K({__name:"BaseInput",props:{placeholder:{},name:{},modelValue:{}},emits:["update:modelValue"],setup(t){return(e,s)=>(b(),F("input",{class:"h-11 w-full rounded-l-md bg-background-paper px-3 text-text-main placeholder-text-lighter shadow-md dark:bg-dark-background-paper dark:text-dark-text-main dark:placeholder-dark-text-lighter md:h-12 md:px-4 md:text-lg",name:e.name,value:e.modelValue,placeholder:e.placeholder,onInput:s[0]||(s[0]=r=>e.$emit("update:modelValue",r.target.value))},null,40,De))}}),ze=K({__name:"SearchForm",props:{searchTerm:{}},emits:["update:searchTerm","submit"],setup(t){return(e,s)=>{const r=We,n=me,i=Ae("search");return b(),V(i,null,{default:j(()=>[S("form",{class:"mx-auto mb-app-py flex max-w-xl items-center md:mb-app-py-md",autocomplete:"off",onSubmit:s[1]||(s[1]=de(o=>e.$emit("submit",o),["prevent"]))},[P(r,{type:"search",name:"searchTerm","model-value":e.searchTerm,placeholder:"Search...","onUpdate:modelValue":s[0]||(s[0]=o=>e.$emit("update:searchTerm",o))},null,8,["model-value"]),P(n,{"icon-name":"material-symbols:search","button-class":"search-button",type:"submit",variant:"primary"})],32)]),_:1})}}});const He=fe(ze,[["__scopeId","data-v-82e0cabb"]]),ge=t=>(ke("data-v-18e49f3e"),t=t(),Le(),t),Ue={class:"group relative rounded-bl-md rounded-tr-md bg-secondary-main"},Ye=ge(()=>S("div",{class:"image-border has-transition top-left"},null,-1)),Ge=ge(()=>S("div",{class:"image-border has-transition bottom-right"},null,-1)),Qe={class:"has-transition relative z-10 mb-2 overflow-hidden rounded-bl-md rounded-tr-md bg-background-paper shadow-md group-hover:-translate-y-2 group-hover:translate-x-2"},Xe={class:"font-semibold uppercase md:text-lg"},Je=K({__name:"BaseCard",props:{to:{},imgSrc:{},imgAlt:{},title:{}},setup(t){return(e,s)=>{const r=Be,n=Ke;return b(),V(n,{to:e.to},{default:j(()=>[S("div",Ue,[Ye,Ge,S("div",Qe,[P(r,{src:e.imgSrc,alt:e.imgAlt},null,8,["src","alt"])])]),S("h2",Xe,$e(e.title),1)]),_:1},8,["to"])}}});const qe=fe(Je,[["__scopeId","data-v-18e49f3e"]]),Ze=K({__name:"CharacterCard",props:{character:{}},setup(t){return(e,s)=>{const r=qe;return b(),V(r,{to:{name:"characters-characterId",params:{characterId:e.character.id}},"img-src":e.character.images.sm,"img-alt":`${e.character.name} image`,title:e.character.name},null,8,["to","img-src","img-alt","title"])}}});function et(t){pe(t,()=>{window.scrollTo({top:0})})}function k(t){return Array.isArray?Array.isArray(t):xe(t)==="[object Array]"}const tt=1/0;function st(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-tt?"-0":e}function rt(t){return t==null?"":st(t)}function I(t){return typeof t=="string"}function _e(t){return typeof t=="number"}function nt(t){return t===!0||t===!1||it(t)&&xe(t)=="[object Boolean]"}function ye(t){return typeof t=="object"}function it(t){return ye(t)&&t!==null}function _(t){return t!=null}function Y(t){return!t.trim().length}function xe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ot="Incorrect 'index' type",ct=t=>`Invalid value for key ${t}`,at=t=>`Pattern length exceeds max of ${t}.`,lt=t=>`Missing ${t} property in key`,ht=t=>`Property 'weight' in key '${t}' must be a positive integer`,ce=Object.prototype.hasOwnProperty;class ut{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=Me(r);this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Me(t){let e=null,s=null,r=null,n=1,i=null;if(I(t)||k(t))r=t,e=ae(t),s=X(t);else{if(!ce.call(t,"name"))throw new Error(lt("name"));const o=t.name;if(r=o,ce.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(ht(o));e=ae(o),s=X(o),i=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:i}}function ae(t){return k(t)?t:t.split(".")}function X(t){return k(t)?t.join("."):t}function dt(t,e){let s=[],r=!1;const n=(i,o,c)=>{if(_(i))if(!o[c])s.push(i);else{let a=o[c];const l=i[a];if(!_(l))return;if(c===o.length-1&&(I(l)||_e(l)||nt(l)))s.push(rt(l));else if(k(l)){r=!0;for(let h=0,u=l.length;h<u;h+=1)n(l[h],o,c+1)}else o.length&&n(l,o,c+1)}};return n(t,I(e)?e.split("."):e,0),r?s:s[0]}const ft={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},pt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},mt={location:0,threshold:.6,distance:100},gt={useExtendedSearch:!1,getFn:dt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var f={...pt,...ft,...mt,...gt};const _t=/[^ ]+/g;function yt(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(n){const i=n.match(_t).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*t),c=parseFloat(Math.round(o*r)/r);return s.set(i,c),c},clear(){s.clear()}}}class se{constructor({getFn:e=f.getFn,fieldNormWeight:s=f.fieldNormWeight}={}){this.norm=yt(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,I(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();I(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!_(e)||Y(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,i)=>{let o=n.getFn?n.getFn(e):this.getFn(e,n.path);if(_(o)){if(k(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(_(h))if(I(h)&&!Y(h)){let u={v:h,i:l,n:this.norm.get(h)};c.push(u)}else k(h)&&h.forEach((u,p)=>{a.push({nestedArrIndex:p,value:u})})}r.$[i]=c}else if(I(o)&&!Y(o)){let c={v:o,n:this.norm.get(o)};r.$[i]=c}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function be(t,e,{getFn:s=f.getFn,fieldNormWeight:r=f.fieldNormWeight}={}){const n=new se({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(Me)),n.setSources(e),n.create(),n}function xt(t,{getFn:e=f.getFn,fieldNormWeight:s=f.fieldNormWeight}={}){const{keys:r,records:n}=t,i=new se({getFn:e,fieldNormWeight:s});return i.setKeys(r),i.setIndexRecords(n),i}function W(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=f.distance,ignoreLocation:i=f.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(r-s);return n?o+c/n:c?1:o}function Mt(t=[],e=f.minMatchCharLength){let s=[],r=-1,n=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&r===-1?r=i:!c&&r!==-1&&(n=i-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[i-1]&&i-r>=e&&s.push([r,i-1]),s}const C=32;function bt(t,e,s,{location:r=f.location,distance:n=f.distance,threshold:i=f.threshold,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,includeMatches:a=f.includeMatches,ignoreLocation:l=f.ignoreLocation}={}){if(e.length>C)throw new Error(at(C));const h=e.length,u=t.length,p=Math.max(0,Math.min(r,u));let m=i,d=p;const g=c>1||a,E=g?Array(u):[];let x;for(;(x=t.indexOf(e,d))>-1;){let y=W(e,{currentLocation:x,expectedLocation:p,distance:n,ignoreLocation:l});if(m=Math.min(y,m),d=x+h,g){let L=0;for(;L<h;)E[x+L]=1,L+=1}}d=-1;let w=[],A=1,$=h+u;const we=1<<h-1;for(let y=0;y<h;y+=1){let L=0,R=$;for(;L<R;)W(e,{errors:y,currentLocation:p+R,expectedLocation:p,distance:n,ignoreLocation:l})<=m?L=R:$=R,R=Math.floor(($-L)/2+L);$=R;let re=Math.max(1,p-R+1),U=o?u:Math.min(p+R,u)+h,T=Array(U+2);T[U+1]=(1<<y)-1;for(let M=U;M>=re;M-=1){let D=M-1,ne=s[t.charAt(D)];if(g&&(E[D]=+!!ne),T[M]=(T[M+1]<<1|1)&ne,y&&(T[M]|=(w[M+1]|w[M])<<1|1|w[M+1]),T[M]&we&&(A=W(e,{errors:y,currentLocation:D,expectedLocation:p,distance:n,ignoreLocation:l}),A<=m)){if(m=A,d=D,d<=p)break;re=Math.max(1,2*p-d)}}if(W(e,{errors:y+1,currentLocation:p,expectedLocation:p,distance:n,ignoreLocation:l})>m)break;w=T}const H={isMatch:d>=0,score:Math.max(.001,A)};if(g){const y=Mt(E,c);y.length?a&&(H.indices=y):H.isMatch=!1}return H}function vt(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}class ve{constructor(e,{location:s=f.location,threshold:r=f.threshold,distance:n=f.distance,includeMatches:i=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(p,m)=>{this.chunks.push({pattern:p,alphabet:vt(p),startIndex:m})},u=this.pattern.length;if(u>C){let p=0;const m=u%C,d=u-m;for(;p<d;)h(this.pattern.substr(p,C),p),p+=C;if(m){const g=u-C;h(this.pattern.substr(g),g)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let d={isMatch:!0,score:0};return r&&(d.indices=[[0,e.length-1]]),d}const{location:n,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],u=0,p=!1;this.chunks.forEach(({pattern:d,alphabet:g,startIndex:E})=>{const{isMatch:x,score:w,indices:A}=bt(e,d,g,{location:n+E,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:r,ignoreLocation:l});x&&(p=!0),u+=w,x&&A&&(h=[...h,...A])});let m={isMatch:p,score:p?u/this.chunks.length:1};return p&&r&&(m.indices=h),m}}class N{constructor(e){this.pattern=e}static isMultiMatch(e){return le(e,this.multiRegex)}static isSingleMatch(e){return le(e,this.singleRegex)}search(){}}function le(t,e){const s=t.match(e);return s?s[1]:null}class It extends N{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class St extends N{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Et extends N{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class wt extends N{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class At extends N{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class $t extends N{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ie extends N{constructor(e,{location:s=f.location,threshold:r=f.threshold,distance:n=f.distance,includeMatches:i=f.includeMatches,findAllMatches:o=f.findAllMatches,minMatchCharLength:c=f.minMatchCharLength,isCaseSensitive:a=f.isCaseSensitive,ignoreLocation:l=f.ignoreLocation}={}){super(e),this._bitapSearch=new ve(e,{location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Se extends N{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const n=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+i,n.push([r,s-1]);const o=!!n.length;return{isMatch:o,score:o?0:1,indices:n}}}const J=[It,Se,Et,wt,$t,At,St,Ie],he=J.length,kt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Lt="|";function Rt(t,e={}){return t.split(Lt).map(s=>{let r=s.trim().split(kt).filter(i=>i&&!!i.trim()),n=[];for(let i=0,o=r.length;i<o;i+=1){const c=r[i];let a=!1,l=-1;for(;!a&&++l<he;){const h=J[l];let u=h.isMultiMatch(c);u&&(n.push(new h(u,e)),a=!0)}if(!a)for(l=-1;++l<he;){const h=J[l];let u=h.isSingleMatch(c);if(u){n.push(new h(u,e));break}}}return n})}const Nt=new Set([Ie.type,Se.type]);class Ct{constructor(e,{isCaseSensitive:s=f.isCaseSensitive,includeMatches:r=f.includeMatches,minMatchCharLength:n=f.minMatchCharLength,ignoreLocation:i=f.ignoreLocation,findAllMatches:o=f.findAllMatches,location:c=f.location,threshold:a=f.threshold,distance:l=f.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=Rt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];o.length=0,i=0;for(let u=0,p=h.length;u<p;u+=1){const m=h[u],{isMatch:d,indices:g,score:E}=m.search(e);if(d){if(i+=1,c+=E,r){const x=m.constructor.type;Nt.has(x)?o=[...o,...g]:o.push(g)}}else{c=0,i=0,o.length=0;break}}if(i){let u={isMatch:!0,score:c/i};return r&&(u.indices=o),u}}return{isMatch:!1,score:1}}}const q=[];function Tt(...t){q.push(...t)}function Z(t,e){for(let s=0,r=q.length;s<r;s+=1){let n=q[s];if(n.condition(t,e))return new n(t,e)}return new ve(t,e)}const z={AND:"$and",OR:"$or"},ee={PATH:"$path",PATTERN:"$val"},te=t=>!!(t[z.AND]||t[z.OR]),Ot=t=>!!t[ee.PATH],Ft=t=>!k(t)&&ye(t)&&!te(t),ue=t=>({[z.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ee(t,e,{auto:s=!0}={}){const r=n=>{let i=Object.keys(n);const o=Ot(n);if(!o&&i.length>1&&!te(n))return r(ue(n));if(Ft(n)){const a=o?n[ee.PATH]:i[0],l=o?n[ee.PATTERN]:n[a];if(!I(l))throw new Error(ct(a));const h={keyId:X(a),pattern:l};return s&&(h.searcher=Z(l,e)),h}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=n[a];k(l)&&l.forEach(h=>{c.children.push(r(h))})}),c};return te(t)||(t=ue(t)),r(t)}function Pt(t,{ignoreFieldNorm:e=f.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:i,score:o})=>{const c=n?n.weight:null;r*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),s.score=r})}function Bt(t,e){const s=t.matches;e.matches=[],_(s)&&s.forEach(r=>{if(!_(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let o={indices:n,value:i};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function jt(t,e){e.score=t.score}function Vt(t,e,{includeMatches:s=f.includeMatches,includeScore:r=f.includeScore}={}){const n=[];return s&&n.push(Bt),r&&n.push(jt),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return n.length&&n.forEach(a=>{a(i,c)}),c})}class B{constructor(e,s={},r){this.options={...f,...s},this.options.useExtendedSearch,this._keyStore=new ut(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof se))throw new Error(ot);this._myIndex=s||be(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){_(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,n-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=I(e)?I(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Pt(a,{ignoreFieldNorm:c}),i&&a.sort(o),_e(s)&&s>-1&&(a=a.slice(0,s)),Vt(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const s=Z(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:o,n:c})=>{if(!_(i))return;const{isMatch:a,score:l,indices:h}=s.searchIn(i);a&&n.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:h}]})}),n}_searchLogical(e){const s=Ee(e,this.options),r=(c,a,l)=>{if(!c.children){const{keyId:u,searcher:p}=c,m=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:p});return m&&m.length?[{idx:l,item:a,matches:m}]:[]}const h=[];for(let u=0,p=c.children.length;u<p;u+=1){const m=c.children[u],d=r(m,a,l);if(d.length)h.push(...d);else if(c.operator===z.AND)return[]}return h},n=this._myIndex.records,i={},o=[];return n.forEach(({$:c,i:a})=>{if(_(c)){let l=r(s,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:h})=>{i[a].matches.push(...h)}))}}),o}_searchObjectList(e){const s=Z(e,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:o,i:c})=>{if(!_(o))return;let a=[];r.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:o[h],searcher:s}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:s,searcher:r}){if(!_(s))return[];let n=[];if(k(s))s.forEach(({v:i,i:o,n:c})=>{if(!_(i))return;const{isMatch:a,score:l,indices:h}=r.searchIn(i);a&&n.push({score:l,key:e,value:i,idx:o,norm:c,indices:h})});else{const{v:i,n:o}=s,{isMatch:c,score:a,indices:l}=r.searchIn(i);c&&n.push({score:a,key:e,value:i,norm:o,indices:l})}return n}}B.version="7.0.0";B.createIndex=be;B.parseIndex=xt;B.config=f;B.parseQuery=Ee;Tt(Ct);const Kt={key:0},Dt={class:"grid grid-cols-autofill-min-8 gap-2 md:grid-cols-autofill-min-10 md:gap-4"},Wt={key:1},zt=S("h3",{class:"text-lg font-bold"},"No result...",-1),Ht=[zt],Ut={class:"flex py-4"},Yt=S("div",{class:"flex-grow"},null,-1),G=24,Q=1,ts=K({__name:"index",setup(t){const{data:e,pending:s,error:r}=je(()=>"https://akabab.github.io/superhero-api/api/all.json","$pqtWcjQkdb"),n=Re(),i=O(()=>{const d=parseInt(n.query.page);return Number.isInteger(d)?d:Q}),o=O(()=>new B(e.value??[],{keys:[{name:"name",getFn:d=>d.name}]})),c=O(()=>{const{term:d}=n.query;return typeof d!="string"||!d?e.value??[]:o.value.search(d).map(g=>g.item)}),a=O(()=>{const d=(i.value-Q)*G;return c.value.slice(d,d+G)}),l=O(()=>i.value>Q?i.value-1:void 0),h=O(()=>{const d=Math.ceil((c.value??[]).length/G);return i.value<d?i.value+1:void 0}),u=Ne("");pe(()=>n.query.term,d=>{const g=typeof d=="string"?d:"";u.value=g},{immediate:!0});const p=Ce();function m(){const d={};u.value&&(d.term=u.value),p.push({name:"index",query:d})}return et(a),Te({title:()=>{const{term:d}=n.query;return`Search${d?` for '${d}'`:""}`}}),(d,g)=>{const E=He,x=Ze,w=me,A=Ve;return b(),F("div",null,[P(E,{"search-term":v(u),"onUpdate:searchTerm":g[0]||(g[0]=$=>Oe(u)?u.value=$:null),onSubmit:de(m,["prevent"])},null,8,["search-term","onSubmit"]),P(A,{loading:v(s),error:v(r)},{default:j(()=>[v(a)&&v(a).length?(b(),F("div",Kt,[S("ul",Dt,[(b(!0),F(Fe,null,Pe(v(a),$=>(b(),F("li",{key:$.id},[P(x,{character:$},null,8,["character"])]))),128))])])):(b(),F("div",Wt,Ht)),S("div",Ut,[typeof v(l)=="number"?(b(),V(w,{key:0,to:{name:"index",query:{...d.$route.query,page:v(l)}},"icon-name":"material-symbols:chevron-left"},{default:j(()=>[ie(" Previous ")]),_:1},8,["to"])):oe("",!0),Yt,typeof v(h)=="number"?(b(),V(w,{key:1,to:{name:"index",query:{...d.$route.query,page:v(h)}},"icon-name":"material-symbols:chevron-right","icon-alignment":"right"},{default:j(()=>[ie(" Next ")]),_:1},8,["to"])):oe("",!0)])]),_:1},8,["loading","error"])])}}});export{ts as default};