var Gm=Object.defineProperty,qm=Object.defineProperties;var Km=Object.getOwnPropertyDescriptors;var Yt=Object.getOwnPropertySymbols;var Bi=Object.prototype.hasOwnProperty,Ni=Object.prototype.propertyIsEnumerable;var Pi=(e,t,a)=>t in e?Gm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))Bi.call(t,a)&&Pi(e,a,t[a]);if(Yt)for(var a of Yt(t))Ni.call(t,a)&&Pi(e,a,t[a]);return e},x=(e,t)=>qm(e,Km(t));var L=(e,t)=>{var a={};for(var n in e)Bi.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&Yt)for(var n of Yt(e))t.indexOf(n)<0&&Ni.call(e,n)&&(a[n]=e[n]);return a};import{c as bl,a as Jm,b as Ym,t as Zt,e as o,d as ae,A as Zm,M as Xm,f as P,T as Qm,_ as ep,g as np,h as tp,i as rp,C as gl,j as vr,k as dn,l as ap,m as fl,n as hr,o as op,p as Mo,q as ip,r as lp,s as sp,u as cp,v as dp,w as up,x as mp,y as pp,z as bp,B as gp,D as fp,E as yp,F as vp,G as hp,R as yl,H as Sp,I as vl,J as wp,K as Tp,L as Cp,N as Ip,O as fe,P as xp,Q as kp,S as _p,U as Op,V as Pp,W as l,X as _,Y as N,Z,$ as hl,a0 as ue,a1 as Bp,a2 as rt,a3 as Sl,a4 as Lo,a5 as wl,a6 as Tl,a7 as Je,a8 as un,a9 as Cl,aa as Il,ab as Sr,ac as xl,ad as kl,ae as _l,af as Ol,ag as wr,ah as Ao,ai as Np,aj as Ep,ak as Dp,al as jo,am as Tr,an as Cr,ao as Ir,ap as Rp,aq as Pl,ar as Bl,as as Mp,at as Nl,au as El,av as Dl,aw as Rl,ax as nr,ay as le,az as Lp,aA as be,aB as $n,aC as Ap,aD as jp,aE as Hp,aF as Fp,aG as $p,aH as Ei,aI as Up,aJ as zp,aK as Wp,aL as Vp,aM as Gp,aN as qp,aO as Kp,aP as Jp,aQ as Yp,aR as Zp,aS as Xp,aT as Qp,aU as eb,aV as nb,aW as tb,aX as rb}from"./vendor.e1bd7e99.js";const ab=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}};ab();var ob="/assets/itwin.cbc63c1d.svg",ib="/assets/itwin-dark.272a4d49.svg";const Di=bl.create({base:"light",brandTitle:"iTwinUI",brandImage:ob,colorPrimary:"#008BE1",colorSecondary:"#008BE1",appBg:"#EEF0F3",appContentBg:"#F8F9FB",appBorderColor:"#C7CCD1",appBorderRadius:9,fontBase:'"Open Sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, system-ui, sans-serif',fontCode:'"SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',textColor:"rgba(000,000,000,0.8)",barTextColor:"rgba(000,000,000,0.8)",barSelectedColor:"#008BE1",barBg:"#F8F9FB",inputBg:"#FFFFFF",inputBorder:"rgba(000,000,000,0.4)",inputTextColor:"rgba(000,000,000,0.8)",inputBorderRadius:3}),Ri=bl.create({base:"dark",brandTitle:"iTwinUI",brandImage:ib,colorPrimary:"#A5D7F5",colorSecondary:"#A5D7F5",appBg:"#2D373C",appContentBg:"#5A6973",appBorderColor:"#2D373C",appBorderRadius:9,fontBase:'"Open Sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, system-ui, sans-serif',fontCode:'"SF Mono", SFMono-Regular, ui-monospace, "DejaVu Sans Mono", Menlo, Consolas, monospace',textColor:"rgba(255,255,255,0.85)",barTextColor:"rgba(255,255,255,0.85)",barSelectedColor:"#A5D7F5",barBg:"#4F5D65",inputBg:"#5A6973",inputBorder:"rgba(255,255,255,0.45)",inputTextColor:"rgba(255,255,255,0.85)",inputBorderRadius:3}),lb=Jm.getChannel();lb.on("DARK_MODE",e=>ea(e));var pl;const sb=(pl=window.matchMedia)==null?void 0:pl.call(window,"(prefers-color-scheme: dark)").matches;Ym({darkMode:{dark:f(f({},Zt.dark),Ri),light:f(f({},Zt.light),Di)},docs:{theme:sb?f(f({},Zt.dark),Ri):f(f({},Zt.light),Di)},options:{showPanel:!0}});const ea=e=>{const t=document.documentElement.classList,a=Array.from(t).find(i=>i.startsWith("iui-theme")),r=(a==null?void 0:a.includes("-hc"))?"-hc":"";e?(t.remove(`iui-theme-light${r}`),t.add(`iui-theme-dark${r}`)):(t.remove(`iui-theme-dark${r}`),t.add(`iui-theme-light${r}`))};window.parent!==window&&(ea(window.parent.document.documentElement.classList.contains("iui-theme-dark")),new MutationObserver(([e])=>{e.type==="attributes"&&e.attributeName==="class"&&ea(e.target.classList.contains("iui-theme-dark"))}).observe(window.parent.document.documentElement,{attributes:!0}));const cb={controls:{sort:"requiredFirst"},backgrounds:{grid:{disable:!0},default:"background-2",values:[{name:"background-1",value:"var(--iui-color-background-1)"},{name:"background-2",value:"var(--iui-color-background-2)"}]}},db=[(e,t)=>{const{globals:{hc:a}}=t;return o.useEffect(()=>{const n=document.documentElement.classList,r=Array.from(n).find(i=>i.startsWith("iui-theme"));if(!!r){if(a&&!r.includes("-hc")){n.remove(r),n.add(`${r}-hc`);return}!a&&r.includes("-hc")&&(n.remove(r),n.add(`${r.split("-hc")[0]}`))}},[a]),e()}];var ub=Object.freeze(Object.defineProperty({__proto__:null,parameters:cb,decorators:db},Symbol.toStringTag,{value:"Module"}));const mb={},pb="wrapper";function Ml(a){var n=a,{components:e}=n,t=L(n,["components"]);return ae(pb,x(f(f({},mb),t),{components:e,mdxType:"MDXLayout"}),ae(Xm,{title:"Overview",mdxType:"Meta"}),ae("center",null,ae("h1",null,ae("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/iTwinUI-logo.png",alt:"iTwinUI logo"}))),ae("h2",null,"What is iTwinUI-react?"),ae("p",null,"iTwinUI-react is a library built on top of the ",ae("a",{parentName:"p",href:"https://github.com/iTwin/iTwinUI"},"iTwinUI"),` library.
The goal of this project is to provide React components for using the styles and components from the core `,ae("inlineCode",{parentName:"p"},"iTwinUI")," project."),ae("h2",null,"Installation"),ae("pre",null,ae("code",{parentName:"pre"},`npm install @itwin/itwinui-react
`)),ae("pre",null,ae("code",{parentName:"pre"},`yarn add @itwin/itwinui-react
`)),ae("h2",null,"Usage"),ae("p",null,"Import the component you want and start using it!"),ae("pre",null,ae("code",{parentName:"pre",className:"language-jsx"},`import { Button } from '@itwin/itwinui-react';

const App = () => <Button>Hello!</Button>;
`)),ae("p",null,"Yes, that's really all you need as you can see in this live interactive demo:"),ae("p",null,ae("a",{parentName:"p",href:"https://codesandbox.io/s/itwinui-react-minimal-example-xq2t3"},ae("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit Button"}))),ae("h2",null,"Theming"),ae("p",null,"By default, all components use the light theme but we also provide support for switching to dark theme in two different ways:"),ae("ul",null,ae("li",{parentName:"ul"},"Use ",ae("inlineCode",{parentName:"li"},"ThemeProvider")," in your root component where you can pass one of the following values:",ae("ul",{parentName:"li"},ae("li",{parentName:"ul"},ae("inlineCode",{parentName:"li"},"light")," (default)"),ae("li",{parentName:"ul"},ae("inlineCode",{parentName:"li"},"dark")),ae("li",{parentName:"ul"},ae("inlineCode",{parentName:"li"},"os")," (which respects the color scheme of the operating system)")))),ae("pre",null,ae("code",{parentName:"pre",className:"language-jsx"},`import { ThemeProvider } from '@itwin/itwinui-react';

const App = () => (
  <>
    <ThemeProvider theme='dark' />
    // Your code goes here.
  </>
);
`)),ae("ul",null,ae("li",{parentName:"ul"},"The ",ae("inlineCode",{parentName:"li"},"useTheme")," hook also provides the same functionality as ",ae("inlineCode",{parentName:"li"},"ThemeProvider"),".")),ae("pre",null,ae("code",{parentName:"pre",className:"language-jsx"},`import { useTheme } from '@itwin/itwinui-react';

const App = () => {
  useTheme('dark');
  return <>// Your code goes here.</>;
};
`)),ae("p",null,ae("em",{parentName:"p"},"Note: You only need to use one of these methods, and it only needs to be done once.")),ae("h2",null,"FAQ"),ae("p",null,"For a list of frequently asked questions, visit the ",ae("a",{parentName:"p",href:"https://github.com/iTwin/iTwinUI-react/wiki/FAQ"},"wiki"),"."),ae("h2",null,"Contributing"),ae("p",null,"We welcome you to contribute and make this UI design system better. You can submit feature requests or bugs by creating an ",ae("a",{parentName:"p",href:"https://github.com/iTwin/iTwinUI-react/issues"},"issue"),`.
Please read our `,ae("a",{parentName:"p",href:"https://github.com/iTwin/iTwinUI-react/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md")," for more information."),ae("h2",null,"Changelog"),ae("p",null,"Read our ",ae("a",{parentName:"p",href:"https://github.com/iTwin/iTwinUI-react/blob/main/packages/iTwinUI-react/CHANGELOG.md"},"CHANGELOG.md")," to find recent changes."))}Ml.isMDXComponent=!0;const Ll=()=>{throw new Error("Docs-only story")};Ll.parameters={docsOnly:!0};const nt={title:"Overview",includeStories:["__page"]},bb={};nt.parameters=nt.parameters||{};nt.parameters.docs=x(f({},nt.parameters.docs||{}),{page:()=>ae(Zm,{mdxStoryNameToKey:bb,mdxComponentAnnotations:nt},ae(Ml,null))});var gb=Object.freeze(Object.defineProperty({__proto__:null,__page:Ll,default:nt},Symbol.toStringTag,{value:"Module"})),Al=function(e,t){var a;t===void 0&&(t=xr());var n=(a=t==null?void 0:t.getElementById(e))!==null&&a!==void 0?a:void 0;return n==null&&!!t&&(n=t.createElement("div"),n.setAttribute("id",e),t.body.appendChild(n)),n},xr=function(){return typeof document=="undefined"?void 0:document},He=function(){return typeof window=="undefined"?void 0:window},Ho={skyblue:"hsl(197, 71%, 83%)",celery:"hsl(72, 51%, 66%)",froly:"hsl(2, 90%, 83%)",steelblue:"hsl(207, 44%, 73%)",sunglow:"hsl(42, 100%, 70%)",seabuckthorn:"hsl(29, 92%, 71%)",montecarlo:"hsl(176, 43%, 72%)",poloblue:"hsl(211, 44%, 77%)",bouquet:"hsl(305, 19%, 75%)",ash:"hsl(42, 15%, 85%)",oak:"hsl(27, 32%, 72%)"},fb=function(e){return Object.keys(Ho).includes(e)},Mi=["#6AB9EC","#B1C854","#F7706C","#4585A5","#FFC335","#F7963E","#73C7C1","#85A9CF","#A3779F","#C8C2B4","#A47854"],Oe=function(e){for(var t=e.trim().toLowerCase(),a=0,n=0;n<t.length;n++){var r=t.charCodeAt(n);a=(a+r)%Mi.length}return Mi[a]},Ge=function(e,t,a){return Math.min(a,Math.max(t,e))},jl=function(e){e===void 0&&(e=21);for(var t="_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",a="",n=0;n<e;n++)a+=t[Math.random()*64|0];return a},Hl='a[href], button, input, textarea, select, details, audio[controls], video[controls], [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex="-1"])',Fl=function(e){if(!e)return[];var t=e.querySelectorAll(Hl);return Array.from(t).filter(function(a){return!a.hasAttribute("disabled")&&!a.classList.contains("iui-disabled")&&a.getAttribute("aria-disabled")!=="true"})},tt=function(e){if(!e)return[];var t=e.querySelectorAll("".concat(Hl,', [tabindex="-1"]'));return Array.from(t).filter(function(a){return!a.hasAttribute("disabled")&&!a.classList.contains("iui-disabled")&&a.getAttribute("aria-disabled")!=="true"})},ht=function(e,t,a){var n=o.useRef();o.useEffect(function(){n.current=t},[t]),o.useEffect(function(){if(!!a){var r=function(i){var s;return(s=n.current)===null||s===void 0?void 0:s.call(n,i)};return a.addEventListener(e,r),function(){a.removeEventListener(e,r)}}},[e,a])},yb=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},kr=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(a){e.forEach(function(n){typeof n=="function"?n(a):n&&(n.current=a)})}},he=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.useCallback(kr.apply(void 0,e),yb([],e,!0))},at=function(e){var t=o.useRef(),a=o.useCallback(function(n){var r,i,s;!(!((r=He())===null||r===void 0)&&r.ResizeObserver)||((i=t.current)===null||i===void 0||i.disconnect(),n&&(t.current=new ResizeObserver(function(c){var d=c[0].contentRect;return e(d)}),(s=t.current)===null||s===void 0||s.observe(n)))},[e]);return[a,t.current]},Li=20,_r=function(e,t,a){t===void 0&&(t=!1),a===void 0&&(a="horizontal");var n=o.useRef(null),r=o.useState(function(){return t?e.length:Math.min(e.length,Li)}),i=r[0],s=r[1],c=o.useRef(!0),d=o.useState(0),p=d[0],u=d[1],m=o.useRef(0),b=o.useCallback(function(w){var T=w.width,I=w.height;return u(a==="horizontal"?T:I)},[a]),g=at(b),y=g[0],h=g[1],v=o.useRef(h);o.useLayoutEffect(function(){t?s(e.length):(s(Math.min(e.length,Li)),c.current=!0)},[p,t,e]);var S=he(n,y);return o.useLayoutEffect(function(){var w;if(!n.current||t){(w=v.current)===null||w===void 0||w.disconnect();return}var T=a==="horizontal"?"Width":"Height",I=n.current["offset".concat(T)],E=n.current["scroll".concat(T)];if(I<E){var R=E/i,M=Math.floor(I/R);s(M)}else if(c.current){var j=Array.from(n.current.children).reduce(function(z,V){return z+V["offset".concat(T)]},0),R=j/i,M=Math.floor(I/R);isNaN(M)||s(Math.min(e.length,M*2))}c.current=!1},[p,i,t,e.length,a]),o.useLayoutEffect(function(){m.current=p},[p]),[S,i]},$l=function(e){e===void 0&&(e=!0);var t=o.useState(0),a=t[0],n=t[1],r=o.useCallback(function(u){!u||n(u.getBoundingClientRect().width)},[]),i=o.useCallback(function(u){var m=u.width;return n(m)},[]),s=at(i),c=s[0],d=s[1];e||d==null||d.disconnect();var p=he(r,e?c:void 0);return[p,a]};var vb=function(e){var t=o.useState(),a=t[0],n=t[1];return o.useLayoutEffect(function(){var r,i,s,c=(i=(r=He())===null||r===void 0?void 0:r.matchMedia)===null||i===void 0?void 0:i.call(r,e),d=function(p){var u=p.matches;return n(u)};if(c!=null){n(c.matches);try{c.addEventListener("change",d)}catch{(s=c.addListener)===null||s===void 0||s.call(c,d)}}return function(){var p;try{c==null||c.removeEventListener("change",d)}catch{(p=c==null?void 0:c.removeListener)===null||p===void 0||p.call(c,d)}}},[e]),!!a},$=function(e,t){var a,n=(a=t==null?void 0:t.ownerDocument)!==null&&a!==void 0?a:xr(),r=vb("(prefers-contrast: more)"),i=o.useMemo(function(){var s;return!!((s=t==null?void 0:t.highContrast)!==null&&s!==void 0?s:r)},[r,t==null?void 0:t.highContrast]);o.useLayoutEffect(function(){n!=null&&n.body.classList.contains("iui-body")||n==null||n.body.classList.add("iui-body")},[n]),o.useLayoutEffect(function(){var s,c,d,p,u;if(!!n){var m=(c=(s=He())===null||s===void 0?void 0:s.matchMedia)===null||c===void 0?void 0:c.call(s,"(prefers-color-scheme: dark)"),b=function(g){var y=g.matches;y?Gn("dark",{ownerDocument:n,highContrast:i}):Gn("light",{ownerDocument:n,highContrast:i})};switch(e){case"light":(d=m==null?void 0:m.removeEventListener)===null||d===void 0||d.call(m,"change",b),Gn("light",{ownerDocument:n,highContrast:i});break;case"dark":(p=m==null?void 0:m.removeEventListener)===null||p===void 0||p.call(m,"change",b),Gn("dark",{ownerDocument:n,highContrast:i});break;case"os":m!=null?(b(m),(u=m.addEventListener)===null||u===void 0||u.call(m,"change",b)):Gn("light",{ownerDocument:n,highContrast:i});break;default:n.documentElement.className.indexOf("iui-theme")===-1&&Gn("light",{ownerDocument:n,highContrast:i})}return function(){var g;(g=m==null?void 0:m.removeEventListener)===null||g===void 0||g.call(m,"change",b)}}},[i,n,e])},Gn=function(e,t){var a=t.ownerDocument,n=t.highContrast,r=a.documentElement.classList,i=Array.from(r).find(function(s){return s.startsWith("iui-theme")});i&&r.remove(i),r.add("iui-theme-".concat(e).concat(n?"-hc":""))},Ul=function(e,t,a){t===void 0&&(t={}),a===void 0&&(a=!0);var n=t.root,r=t.rootMargin,i=t.threshold,s=o.useRef(),c=o.useCallback(function(d){var p;!(!((p=He())===null||p===void 0)&&p.IntersectionObserver)||(s.current&&s.current.disconnect(),d&&(s.current=new IntersectionObserver(function(u,m){var b=u[0];b.isIntersecting&&(a&&m.disconnect(),e())},{root:n,rootMargin:r,threshold:i}),s.current.observe(d)))},[e,a,n,r,i]);return o.useEffect(function(){return function(){var d;return(d=s.current)===null||d===void 0?void 0:d.disconnect()}},[]),c},en=function(e){var t=o.useContext(e);if(!t)throw new Error("".concat(e.displayName," is undefined"));return t};var Mn=globalThis&&globalThis.__assign||function(){return Mn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Mn.apply(this,arguments)},Ai=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},hn=o.forwardRef(function(e,t){var a,n=o.useState(!1),r=n[0],i=n[1],s=o.useRef(null),c=he(s,t),d={fn:function(){return{onShow:function(){return i(!0)},onHidden:function(){return i(!1)}}}},p={fn:function(){return{onCreate:function(g){var y;(y=g.popper.firstElementChild)===null||y===void 0||y.removeAttribute("tabindex")}}}},u=Mn(Mn({allowHTML:!0,animation:!1,appendTo:function(g){return g.ownerDocument.body},arrow:!1,duration:0,interactive:!0,role:void 0,offset:[0,0],maxWidth:"",zIndex:99999},e),{className:P("iui-popover",e.className),plugins:Ai([d,p,hb],e.plugins||[],!0),popperOptions:Mn(Mn({strategy:"fixed"},e.popperOptions),{modifiers:Ai([{name:"flip"},{name:"preventOverflow",options:{padding:0}}],((a=e.popperOptions)===null||a===void 0?void 0:a.modifiers)||[],!0)})});if(e.render){var m=e.render;u.render=function(){for(var g=[],y=0;y<arguments.length;y++)g[y]=arguments[y];return r?m.apply(void 0,g):""}}else{var b=o.isValidElement(e.content)?o.cloneElement(e.content,{onClick:function(g){var y,h;g.stopPropagation(),(h=(y=e.content.props).onClick)===null||h===void 0||h.call(y,g)}}):e.content;u.content=r?b:""}return o.createElement(Qm,Mn({},u,{ref:c}))}),hb={fn:function(e){var t=function(){var n=Array.from(e.popper.querySelectorAll("*"));return!n.some(function(r){return(r==null?void 0:r.tabIndex)>=0})},a=function(n){switch(n.key){case"Escape":e.hide();break;case"Tab":t()&&(n.shiftKey&&n.preventDefault(),e.hide());break}};return{onShow:function(){e.popper.addEventListener("keydown",a)},onHide:function(){e.popper.removeEventListener("keydown",a)}}}},Sb=function(e){var t=e.children,a=o.useRef(),n=function(){var s=Fl(a.current),c=s[0],d=s[(s.length||1)-1];return[c,d]},r=function(s){var c=n(),d=c[0],p=c[1];s.relatedTarget===d?p==null||p.focus():d==null||d.focus()},i=function(s){var c=n(),d=c[0],p=c[1];s.relatedTarget===p?d==null||d.focus():p==null||p.focus()};return o.createElement("div",null,o.createElement("div",{tabIndex:0,onFocus:r,"aria-hidden":!0}),o.cloneElement(t,{ref:kr(t.ref,a)}),o.createElement("div",{tabIndex:0,onFocus:i,"aria-hidden":!0}))},na=globalThis&&globalThis.__assign||function(){return na=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},na.apply(this,arguments)},wb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ve=function(e){var t,a,n=e.as,r=n===void 0?"div":n,i=e.label,s=e.disabled,c=e.required,d=e.status,p=e.message,u=e.icon,m=e.isLabelInline,b=e.isIconInline,g=e.children,y=e.className,h=e.style,v=e.statusMessage,S=wb(e,["as","label","disabled","required","status","message","icon","isLabelInline","isIconInline","children","className","style","statusMessage"]);return o.createElement(r,na({className:P("iui-input-container",(t={"iui-disabled":s},t["iui-".concat(d)]=!!d,t["iui-inline-label"]=m,t["iui-inline-icon"]=b,t["iui-with-message"]=(!!p||!!u||!!v)&&!m,t),y),style:h},S),i&&o.createElement("div",{className:P("iui-label",{"iui-required":c})},i),g,v||o.createElement(o.Fragment,null,u&&o.cloneElement(u,{className:P("iui-input-icon",(a=u.props)===null||a===void 0?void 0:a.className)}),p&&!m&&o.createElement("div",{className:"iui-message"},p)))},Jn=globalThis&&globalThis.__assign||function(){return Jn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Jn.apply(this,arguments)},_n={negative:function(e){return o.createElement(ep,Jn({"aria-hidden":!0},e))},positive:function(e){return o.createElement(np,Jn({"aria-hidden":!0},e))},warning:function(e){return o.createElement(tp,Jn({"aria-hidden":!0},e))},informational:function(e){return o.createElement(rp,Jn({"aria-hidden":!0},e))}},ta=globalThis&&globalThis.__assign||function(){return ta=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ta.apply(this,arguments)},Tb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Fo=function(e){var t=e.in,a=e.dimension,n=a===void 0?"height":a,r=e.children,i=Tb(e,["in","dimension","children"]),s=o.useRef(0),c=n==="height"?"Height":"Width";return o.createElement(gl,ta({in:t,timeout:200,unmountOnExit:!0,onEnter:function(d){d.style["min".concat(c)]="initial",d.style[n]="0px"},onEntering:function(d){d.style[n]="".concat(s.current,"px")},onEntered:function(d){d.style["min".concat(c)]="",d.style[n]=""},onExit:function(d){d.style[n]="".concat(s.current,"px")},onExiting:function(d){d.style["min".concat(c)]="initial",d.style[n]="0px"},classNames:"iui"},i),o.cloneElement(r,{ref:function(d){d&&(s.current=d.getBoundingClientRect()[n])}}))},tr=globalThis&&globalThis.__assign||function(){return tr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},tr.apply(this,arguments)},Cb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ji="\u2026",Hi=function(e){var t=e.text,a=e.endCharsCount,n=a===void 0?6:a,r=e.style,i=Cb(e,["text","endCharsCount","style"]),s=_r(t),c=s[0],d=s[1],p=o.useMemo(function(){return d<t.length?"".concat(t.substr(0,d-n-ji.length)).concat(ji).concat(t.substr(t.length-n)):t},[n,t,d]);return o.createElement("span",tr({style:tr({display:"flex",minWidth:0,flexGrow:1,whiteSpace:"nowrap"},r),ref:c},i),p)},rr=globalThis&&globalThis.__assign||function(){return rr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rr.apply(this,arguments)},Ib=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},zl=function(e,t){return t===void 0&&(t=document),!e||e===t.body?t.body:xb(e)?e:zl(e.parentElement,t)},xb=function(e){return/(auto|scroll|overlay)/.test(Fi(e,"overflow")+Fi(e,"overflow-y"))},Fi=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},Wl=function(e){var t;return(t=e==null?void 0:e.getBoundingClientRect().height)!==null&&t!==void 0?t:0},Vl=function(e,t){return e?Math.floor(t/e):0},kb=function(e,t){return e*t},_b=function(e,t,a,n){return Math.min(a-t,Vl(e,Wl(n)))},Ob=o.forwardRef(function(e,t){var a=e.itemsLength,n=e.itemRenderer,r=e.bufferSize,i=r===void 0?10:r,s=e.style,c=Ib(e,["itemsLength","itemRenderer","bufferSize","style"]),d=o.useState(0),p=d[0],u=d[1],m=o.useState(0),b=m[0],g=m[1],y=o.useRef(),h=o.useRef(null),v=o.useRef(0),S=o.useRef(),w=o.useState(0),T=w[0],I=w[1],E=o.useCallback(function(k){var z=k.height;I(z)},[]),R=at(E)[0];o.useLayoutEffect(function(){var k,z=zl(h.current,(k=h.current)===null||k===void 0?void 0:k.ownerDocument);y.current=z,R(z)},[R]);var M=o.useMemo(function(){for(var k=[],z=Math.min(a,p+b+i*2),V=p;V<z;V++)k.push(n(V));return k},[a,n,i,p,b]);o.useLayoutEffect(function(){if(!(!h.current||!M.length)){var k=h.current.children.item(0);v.current=Number(Wl(k).toFixed(2))}},[M.length]);var j=o.useCallback(function(){var k,z,V=(k=y.current)!==null&&k!==void 0?k:(z=h.current)===null||z===void 0?void 0:z.ownerDocument.scrollingElement;if(!!V){var F=Vl(v.current,V.scrollTop),H=Math.max(0,F-i);u(H),g(_b(v.current,F,a,V)),h.current&&(h.current.style.transform="translateY(".concat(kb(v.current,H),"px)"))}},[i,a]),O=o.useCallback(function(){var k,z;!S.current||(!y.current||y.current===((k=h.current)===null||k===void 0?void 0:k.ownerDocument.body)?(z=h.current)===null||z===void 0||z.ownerDocument.removeEventListener("scroll",S.current):y.current.removeEventListener("scroll",S.current))},[]);return o.useLayoutEffect(function(){var k,z;return O(),S.current=j,!y.current||y.current===((k=h.current)===null||k===void 0?void 0:k.ownerDocument.body)?(z=h.current)===null||z===void 0||z.ownerDocument.addEventListener("scroll",j):y.current.addEventListener("scroll",j),O},[j,O]),o.useLayoutEffect(function(){j()},[T,a,j]),o.createElement("div",rr({style:rr({overflow:"hidden",minHeight:a*v.current,width:"100%"},s),ref:t},c),o.createElement("div",{style:{willChange:"transform"},ref:h},M))}),Pb=Ob,Yn=globalThis&&globalThis.__assign||function(){return Yn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yn.apply(this,arguments)},Ae=new Uint8Array(4),qn=new Uint32Array(Ae.buffer),Bb=function(e){return typeof e!="string"&&"r"in e&&"g"in e&&"b"in e},Nb=function(e){return typeof e!="string"&&"h"in e&&"s"in e&&"l"in e},Eb=function(e){return typeof e!="string"&&"h"in e&&"s"in e&&"v"in e},ze=function(){function e(t,a){qn[0]=t,this._tbgr=qn[0],this._hue=a}return e.create=function(t){return t?Bb(t)?e.fromRGB(t):Nb(t)?e.fromHSL(t):Eb(t)?e.fromHSV(t):typeof t=="string"?e.fromString(t,e.fromTbgr(0)):e.fromTbgr(0):e.fromTbgr(0)},e.prototype.toTbgr=function(){return this._tbgr},e.fromTbgr=function(t){return new e(t)},e.fromRgbt=function(t,a,n,r){return this.fromTbgr(this.computeTbgrFromComponents(t,a,n,r))},e.computeTbgrFromComponents=function(t,a,n,r){return Ae[0]=t,Ae[1]=a,Ae[2]=n,Ae[3]=r||0,qn[0]},e.fromString=function(t,a){var n=this.computeTbgrFromString(t,a==null?void 0:a.toTbgr()),r=n[0],i=n[1];return new e(r,i)},e.fromHSL=function(t){var a,n=(a=t.a)!==null&&a!==void 0?a:1;return new e(this.computeTbgrFromHSL(t.h/360,t.s/100,t.l/100,Math.round((1-n)*255)),t.h)},e.fromRGB=function(t){var a,n=(a=t.a)!==null&&a!==void 0?a:1;return e.fromRgbt(t.r,t.g,t.b,Math.round((1-n)*255))},e.fromHSV=function(t){var a,n=(a=t.a)!==null&&a!==void 0?a:1,r=Math.round((1-n)*255);if(!t.s||t.h===-1){var i=255&Math.floor(255*t.v/100+.5+3e-14);return e.fromRgbt(i,i,i,0)}var s=t.h,c=t.s,d=t.v;s===360&&(s=0),s/=60;var p=Math.floor(s),u=s-p;d/=100,c/=100;var m=255&Math.floor(d*(1-c)*255+.5),b=255&Math.floor(d*(1-c*u)*255+.5),g=255&Math.floor(d*(1-c*(1-u))*255+.5),y=255&Math.floor(d*255+.5),h=0,v=0,S=0;switch(p){case 0:h=y,S=g,v=m;break;case 1:h=b,S=y,v=m;break;case 2:h=m,S=y,v=g;break;case 3:h=m,S=b,v=y;break;case 4:h=g,S=m,v=y;break;case 5:h=y,S=m,v=b;break}return new e(e.computeTbgrFromComponents(h,S,v,r),t.h)},e.computeTbgrFromString=function(t,a){t=t.toLowerCase();var n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t);if(n){var r=void 0,i=n[1],s=n[2],c=function(v){return v[v.length-1]==="%"},d=function(v){var S=parseFloat(v);return 255*Ge(c(v)?S/100:S,0,1)},p=function(v){var S=c(v)?parseFloat(v)/100*255:parseInt(v,10);return Ge(S,0,255)};switch(i){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s),r)return[this.computeTbgrFromComponents(p(r[1]),p(r[2]),p(r[3]),typeof r[4]=="string"?255-d(r[4]):0),void 0];break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s),r){var u=parseFloat(r[1]),m=parseInt(r[2],10)/100,b=parseInt(r[3],10)/100,g=typeof r[4]=="string"?255-d(r[4]):0;return[this.computeTbgrFromHSL(u/360,m,b,g),u]}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){var y=n[1],h=y.length;if(h===3)return[this.computeTbgrFromComponents(parseInt(y.charAt(0)+y.charAt(0),16),parseInt(y.charAt(1)+y.charAt(1),16),parseInt(y.charAt(2)+y.charAt(2),16),0),void 0];if(h===6)return[this.computeTbgrFromComponents(parseInt(y.charAt(0)+y.charAt(1),16),parseInt(y.charAt(2)+y.charAt(3),16),parseInt(y.charAt(4)+y.charAt(5),16),0),void 0];if(h===8)return[this.computeTbgrFromComponents(parseInt(y.charAt(0)+y.charAt(1),16),parseInt(y.charAt(2)+y.charAt(3),16),parseInt(y.charAt(4)+y.charAt(5),16),255-parseInt(y.charAt(6)+y.charAt(7),16)),void 0]}if(a)return[a,void 0];throw new Error("unable to parse string into ColorValue")},e.getColors=function(t){return qn[0]=t,{b:Ae[2],g:Ae[1],r:Ae[0],t:Ae[3]}},e.prototype.getRgb=function(t){return qn[0]=this._tbgr,t?(Ae[0]<<24)+(Ae[1]<<16)+(Ae[2]<<8)+(255-Ae[3]):(Ae[0]<<16)+(Ae[1]<<8)+Ae[2]},e.prototype.getAlpha=function(){return e.getAlpha(this._tbgr)},e.getAlpha=function(t){return qn[0]=t,255-Ae[3]},e.prototype.toHexString=function(t){if(t){var a=this.getRgb(t);return a<0&&(a=4294967295+a+1),"#".concat("00000000".concat(a.toString(16)).slice(-8))}return"#".concat("000000".concat(this.getRgb().toString(16)).slice(-6))},e.computeTbgrFromHSL=function(t,a,n,r){r===void 0&&(r=0);var i=function(u,m,b){return b<0&&(b+=1),b>1&&(b-=1),b<1/6?u+(m-u)*6*b:b<1/2?m:b<2/3?u+(m-u)*6*(2/3-b):u},s=function(u,m,b){return Math.round(i(u,m,b)*255)},c=function(u,m){return(u%m+m)%m};if(t=c(t,1),a=Ge(a,0,1),n=Ge(n,0,1),a===0)return n*=255,this.computeTbgrFromComponents(n,n,n,r);var d=n<=.5?n*(1+a):n+a-n*a,p=2*n-d;return this.computeTbgrFromComponents(s(p,d,t+1/3),s(p,d,t),s(p,d,t-1/3),r)},e.prototype.toHslColor=function(){return Yn(Yn({},e.toHsl(this._tbgr)),this._hue!=null&&{h:this._hue})},e.toHsl=function(t){var a=e.getColors(t),n=a.r,r=a.g,i=a.b,s=n/255,c=r/255,d=i/255,p=Math.min(s,c,d),u=Math.max(s,c,d),m=u-p,b=0,g=0;m===0?b=0:s===u?b=(c-d)/m%6:c===u?b=(d-s)/m+2:b=(s-c)/m+4,b=Math.round(b*60),b<0&&(b+=360);var y=(u+p)/2;return g=m===0?0:m/(1-Math.abs(2*y-1)),g=Number((g*100).toFixed(1)),y=Number((y*100).toFixed(1)),{h:b,s:g,l:y,a:this.getAlpha(t)/255}},e.prototype.toRgbColor=function(){var t=e.getColors(this._tbgr),a=t.r,n=t.g,r=t.b;return{r:a,g:n,b:r,a:this.getAlpha()/255}},e.prototype.toHsvColor=function(){return Yn(Yn({},e.toHsv(this._tbgr)),this._hue!=null&&{h:this._hue})},e.toHsv=function(t){var a=e.getColors(t),n=a.r,r=a.g,i=a.b,s=n/255,c=r/255,d=i/255,p=Math.min(s,c,d),u=Math.max(s,c,d),m=u-p,b=0;m===0?b=0:s===u?b=(c-d)/m%6:c===u?b=(d-s)/m+2:b=(s-c)/m+4,b=Math.round(b*60),b<0&&(b+=360);var g=u,y=u===0?0:m/u;return y=Number((y*100).toFixed(1)),g=Number((g*100).toFixed(1)),{h:b,s:y,v:g,a:this.getAlpha(t)/255}},e.prototype.equals=function(t){return this._tbgr===t._tbgr},e.getFormattedColorNumber=function(t,a){return a===void 0&&(a=1),a===0&&Math.round(t).toString(),Number(t.toFixed(a)).toString()},e.prototype.toRgbString=function(t){var a,n=this.toRgbColor(),r="".concat(n.r,", ").concat(n.g,", ").concat(n.b);if(t){var i=(a=n.a)!==null&&a!==void 0?a:1;return"rgba(".concat(r,", ").concat(e.getFormattedColorNumber(i,2),")")}return"rgb(".concat(r,")")},e.prototype.toHslString=function(t){var a,n,r=this.toHslColor(),i="".concat(e.getFormattedColorNumber((a=this._hue)!==null&&a!==void 0?a:r.h),", ").concat(e.getFormattedColorNumber(r.s),"%, ").concat(e.getFormattedColorNumber(r.l),"%");if(t){var s=(n=r.a)!==null&&n!==void 0?n:1;return"hsla(".concat(i,", ").concat(e.getFormattedColorNumber(s,2),")")}return"hsl(".concat(i,")")},e.prototype.toHsvString=function(t){var a,n,r=this.toHsvColor(),i="".concat((a=this._hue)!==null&&a!==void 0?a:r.h,", ").concat(r.s,"%, ").concat(r.v,"%");if(t){var s=(n=r.a)!==null&&n!==void 0?n:1;return"hsva(".concat(i,", ").concat(e.getFormattedColorNumber(s,2),")")}return"hsv(".concat(i,")")},e}();var ra=globalThis&&globalThis.__assign||function(){return ra=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ra.apply(this,arguments)},Db=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},J=o.forwardRef(function(e,t){var a,n=e.isActive,r=e.children,i=e.styleType,s=i===void 0?"default":i,c=e.size,d=e.type,p=d===void 0?"button":d,u=e.className,m=e.as,b=m===void 0?"button":m,g=Db(e,["isActive","children","styleType","size","type","className","as"]);return $(),o.createElement(b,ra({ref:t,className:P("iui-button","iui-".concat(s),(a={},a["iui-".concat(c)]=!!c,a["iui-active"]=n,a),u),type:p},g),o.cloneElement(r,{className:P("iui-button-icon",r.props.className),"aria-hidden":!0}))}),ar=globalThis&&globalThis.__assign||function(){return ar=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ar.apply(this,arguments)},Rb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Un=function(e){var t=e.children,a=e.className,n=e.type,r=n===void 0?"informational":n,i=e.clickableText,s=e.clickableTextProps,c=e.onClick,d=e.onClose,p=e.style,u=e.isSticky,m=u===void 0?!1:u,b=Rb(e,["children","className","type","clickableText","clickableTextProps","onClick","onClose","style","isSticky"]);$();var g=_n[r];return o.createElement("div",ar({className:P("iui-alert","iui-".concat(r),{"iui-sticky":m},a),style:p},b),o.createElement(g,{className:"iui-alert-icon"}),o.createElement("span",{className:"iui-alert-message"},t,i&&o.createElement("a",ar({onClick:c},s,{className:P("iui-alert-link",s==null?void 0:s.className)}),i)),d&&o.createElement(J,{styleType:"borderless",size:"small",onClick:d,"aria-label":"Close"},o.createElement(vr,{"aria-hidden":!0})))};var St=globalThis&&globalThis.__assign||function(){return St=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},St.apply(this,arguments)},Mb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},$i=function(e){if(!e)return"";switch(e){case"primary":return"#A5D7F5";case"positive":return"#C3E1AF";case"negative":return"#EFA9A9";case"warning":return"#F9D7AB";default:return fb(e)?Ho[e]:e}},Cn=function(e){var t,a,n,r=e.backgroundColor,i=e.style,s=e.className,c=e.children,d=Mb(e,["backgroundColor","style","className","children"]);$();var p=r&&((n=(a=(t=He())===null||t===void 0?void 0:t.CSS)===null||a===void 0?void 0:a.supports)===null||n===void 0?void 0:n.call(a,"--iui-badge-background-color: ".concat(r)))?St({"--iui-badge-background-color":$i(r)},i):St({backgroundColor:$i(r)},i);return o.createElement("span",St({className:P("iui-badge",s),style:p},d),c)};var aa=globalThis&&globalThis.__assign||function(){return aa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},aa.apply(this,arguments)},Lb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ot=o.forwardRef(function(e,t){var a=e.children,n=e.currentIndex,r=n===void 0?a.length-1:n,i=e.separator,s=e.className,c=Lb(e,["children","currentIndex","separator","className"]);$();var d=_r(a),p=d[0],u=d[1],m=he(p,t),b=function(){return o.createElement("li",{className:"iui-breadcrumbs-separator","aria-hidden":!0},i!=null?i:o.createElement(dn,null))},g=function(y){var h,v=y.index,S=a[v];return o.createElement("li",{className:P("iui-breadcrumbs-item",{"iui-current":r===v})},o.isValidElement(S)?o.cloneElement(S,{"aria-current":((h=S.props["aria-current"])!==null&&h!==void 0?h:r===v)?"location":void 0}):S)};return o.createElement("nav",aa({className:P("iui-breadcrumbs",s),ref:m,"aria-label":"Breadcrumb"},c),o.createElement("ol",{className:"iui-breadcrumbs-list"},u>1&&o.createElement(o.Fragment,null,o.createElement(g,{index:0}),o.createElement(b,null)),a.length-u>0&&o.createElement(o.Fragment,null,o.createElement("li",{className:"iui-breadcrumbs-item"},o.createElement("span",null,"\u2026")),o.createElement(b,null)),a.slice(u>1?a.length-u+1:a.length-1).map(function(y,h){var v=u>1?1+(a.length-u)+h:a.length-1;return o.createElement(o.Fragment,{key:v},o.createElement(g,{index:v}),v<a.length-1&&o.createElement(b,null))})))}),oa=globalThis&&globalThis.__assign||function(){return oa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},oa.apply(this,arguments)},Ab=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ee=o.forwardRef(function(e,t){var a,n=e.children,r=e.className,i=e.size,s=e.style,c=e.styleType,d=c===void 0?"default":c,p=e.type,u=p===void 0?"button":p,m=e.startIcon,b=e.endIcon,g=e.as,y=g===void 0?"button":g,h=Ab(e,["children","className","size","style","styleType","type","startIcon","endIcon","as"]);return $(),o.createElement(y,oa({ref:t,className:P("iui-button","iui-".concat(d),(a={},a["iui-".concat(i)]=!!i,a),r),style:s,type:u},h),m&&o.cloneElement(m,{className:P("iui-button-icon",m.props.className)}),n&&o.createElement("span",{className:"iui-button-label"},n),b&&o.cloneElement(b,{className:P("iui-button-icon",b.props.className)}))});var ia=globalThis&&globalThis.__assign||function(){return ia=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ia.apply(this,arguments)},jb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},$o=o.forwardRef(function(e,t){var a=e.children,n=e.role,r=n===void 0?"menu":n,i=e.setFocus,s=i===void 0?!0:i,c=e.className,d=e.style,p=jb(e,["children","role","setFocus","className","style"]);$();var u=o.useState(),m=u[0],b=u[1],g=o.useRef(null),y=he(g,t);o.useEffect(function(){b(null)},[a]);var h=o.useCallback(function(){var S=tt(g.current);return S.filter(function(w){return!S.some(function(T){return T.contains(w.parentElement)})})},[]);o.useEffect(function(){var S,w=h();if(m!=null){(S=w==null?void 0:w[m])===null||S===void 0||S.focus();return}var T=w.findIndex(function(I){return I.getAttribute("aria-selected")==="true"});s&&b(T>-1?T:0)},[s,m,h]);var v=function(S){var w=h();if(!!(w!=null&&w.length)){var T=m!=null?m:0;switch(S.key){case"ArrowDown":{b(Math.min(T+1,w.length-1)),S.preventDefault(),S.stopPropagation();break}case"ArrowUp":{b(Math.max(T-1,0)),S.preventDefault(),S.stopPropagation();break}}}};return o.createElement("ul",ia({className:P("iui-menu",c),style:d,role:r,onKeyDown:v,ref:y},p),a)}),la=globalThis&&globalThis.__assign||function(){return la=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},la.apply(this,arguments)},Hb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ui=o.createContext({ref:void 0}),ie=o.forwardRef(function(e,t){var a=e.children,n=e.isSelected,r=e.disabled,i=e.value,s=e.onClick,c=e.sublabel,d=e.size,p=d===void 0?c?"large":"default":d,u=e.icon,m=e.badge,b=e.className,g=e.style,y=e.role,h=y===void 0?"menuitem":y,v=e.subMenuItems,S=v===void 0?[]:v,w=Hb(e,["children","isSelected","disabled","value","onClick","sublabel","size","icon","badge","className","style","role","subMenuItems"]);$();var T=o.useRef(null),I=he(T,t),E=o.useContext(Ui).ref,R=o.useRef(null),M=o.useState(!1),j=M[0],O=M[1],k=function(V){var F;if(!V.altKey)switch(V.key){case"Enter":case" ":case"Spacebar":{!r&&(s==null||s(i)),V.preventDefault();break}case"ArrowRight":{S.length>0&&(O(!0),V.preventDefault(),V.stopPropagation());break}case"ArrowLeft":{(F=E==null?void 0:E.current)===null||F===void 0||F.focus(),V.stopPropagation(),V.preventDefault();break}}},z=o.createElement("li",la({className:P("iui-menu-item",{"iui-large":p==="large","iui-active":n,"iui-disabled":r},b),onClick:function(){return!r&&(s==null?void 0:s(i))},ref:I,style:g,role:h,tabIndex:r||h==="presentation"?void 0:-1,"aria-selected":n,"aria-haspopup":S.length>0,"aria-disabled":r,onKeyDown:k,onMouseEnter:function(){return O(!0)},onMouseLeave:function(V){var F;(!(V.relatedTarget instanceof Node)||!(!((F=R.current)===null||F===void 0)&&F.contains(V.relatedTarget)))&&O(!1)}},w),u&&o.cloneElement(u,{className:P(u.props.className,"iui-icon")}),o.createElement("span",{className:"iui-content"},o.createElement("div",{className:"iui-menu-label"},a),c&&o.createElement("div",{className:"iui-menu-description"},c)),!m&&S.length>0&&o.createElement(ap,{className:"iui-icon"}),m&&o.cloneElement(m,{className:P(m.props.className,"iui-icon")}));return S.length===0?z:o.createElement(Ui.Provider,{value:{ref:T}},o.createElement(hn,{placement:"right-start",visible:j,appendTo:"parent",content:o.createElement("div",{onMouseLeave:function(){return O(!1)},onBlur:function(V){var F,H;V.relatedTarget instanceof Node&&!(!((F=R.current)===null||F===void 0)&&F.contains(V.relatedTarget))&&!(!((H=R.current)===null||H===void 0)&&H.isEqualNode(V.relatedTarget))&&O(!1)}},o.createElement($o,{ref:R},S))},z))}),sa=globalThis&&globalThis.__assign||function(){return sa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sa.apply(this,arguments)},Fb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Or=function(e){var t=e.className,a=Fb(e,["className"]);return $(),o.createElement("li",sa({role:"separator",className:P("iui-menu-divider",t)},a))},ca=globalThis&&globalThis.__assign||function(){return ca=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ca.apply(this,arguments)},$b=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Pr=function(e){var t=e.children,a=e.className,n=$b(e,["children","className"]);return $(),o.createElement("li",ca({className:P("iui-menu-content",a),role:"presentation"},n),t)},da=globalThis&&globalThis.__assign||function(){return da=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},da.apply(this,arguments)},Ub=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Me=function(e){var t=e.menuItems,a=e.children,n=e.className,r=e.style,i=e.role,s=i===void 0?"menu":i,c=e.visible,d=e.placement,p=d===void 0?"bottom-start":d,u=e.onShow,m=e.onHide,b=e.trigger,g=e.id,y=Ub(e,["menuItems","children","className","style","role","visible","placement","onShow","onHide","trigger","id"]),h=o.useState(c!=null?c:!1),v=h[0],S=h[1];o.useEffect(function(){S(c!=null?c:!1)},[c]);var w=o.useCallback(function(){return S(!0)},[]),T=o.useCallback(function(){return S(!1)},[]),I=o.useRef(null),E=o.useCallback(function(M){S(!0),u==null||u(M)},[u]),R=o.useCallback(function(M){var j;S(!1),(j=I.current)===null||j===void 0||j.focus(),m==null||m(M)},[m]);return $(),o.createElement(hn,da({content:o.createElement($o,{className:n,style:r,role:s,id:g},o.useMemo(function(){return t(T)},[t,T])),visible:b===void 0?v:void 0,onClickOutside:T,placement:p,onShow:E,onHide:R,trigger:c===void 0?b:void 0},y),o.cloneElement(a,{ref:kr(I,e.children.ref),onClick:function(M){var j,O;b===void 0&&(v?T():w()),(O=(j=a.props).onClick)===null||O===void 0||O.call(j,M)}}))},ua=globalThis&&globalThis.__assign||function(){return ua=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ua.apply(this,arguments)},zb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Rt=o.forwardRef(function(e,t){var a=e.menuItems,n=e.className,r=e.size,i=e.styleType,s=e.children,c=zb(e,["menuItems","className","size","styleType","children"]);$();var d=o.useState(!1),p=d[0],u=d[1],m=o.useState(0),b=m[0],g=m[1],y=o.useRef(null),h=he(t,y);return o.useEffect(function(){y.current&&g(y.current.offsetWidth)},[s,r,i]),o.createElement(Me,{menuItems:a,style:{minWidth:b},onShow:function(){return u(!0)},onHide:function(){return u(!1)}},o.createElement(ee,ua({className:P("iui-dropdown",n),size:r,styleType:i,endIcon:p?o.createElement(fl,{"aria-hidden":!0}):o.createElement(hr,{"aria-hidden":!0}),ref:h,"aria-label":"Dropdown"},c),s))}),ma=globalThis&&globalThis.__assign||function(){return ma=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ma.apply(this,arguments)},Wb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Uo=o.forwardRef(function(e,t){var a=e.feedbackLabel,n=a===void 0?"Feedback":a,r=e.onClick,i=Wb(e,["feedbackLabel","onClick"]);return $(),o.createElement(ee,ma({ref:t,className:"iui-idea",onClick:r,startIcon:o.createElement(op,{"aria-hidden":!0})},i),n)}),pa=globalThis&&globalThis.__assign||function(){return pa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pa.apply(this,arguments)},Vb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},zo=o.forwardRef(function(e,t){var a=e.onClick,n=e.menuItems,r=e.className,i=e.menuPlacement,s=i===void 0?"bottom-end":i,c=e.styleType,d=c===void 0?"default":c,p=e.size,u=e.children,m=e.style,b=e.title,g=Vb(e,["onClick","menuItems","className","menuPlacement","styleType","size","children","style","title"]);$();var y=o.useState(!1),h=y[0],v=y[1],S=o.useState(0),w=S[0],T=S[1],I=o.useRef(null);return o.useEffect(function(){I.current&&T(I.current.offsetWidth)},[u,p]),o.createElement("span",{className:P(r,"iui-button-split-menu",{"iui-disabled":e.disabled}),style:m,title:b,ref:I},o.createElement("div",null,o.createElement(ee,pa({styleType:d,size:p,onClick:a,ref:t},g),u)),o.createElement("div",null,o.createElement(Me,{placement:s,menuItems:n,style:{minWidth:w},onShow:o.useCallback(function(){return v(!0)},[]),onHide:o.useCallback(function(){return v(!1)},[])},o.createElement(J,{styleType:d,size:p,disabled:e.disabled},h?o.createElement(fl,null):o.createElement(hr,null)))))}),ba=globalThis&&globalThis.__assign||function(){return ba=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ba.apply(this,arguments)},Gb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},On=o.forwardRef(function(e,t){var a=e.children,n=e.className,r=e.overflowButton,i=e.overflowPlacement,s=i===void 0?"end":i,c=e.orientation,d=c===void 0?"horizontal":c,p=Gb(e,["children","className","overflowButton","overflowPlacement","orientation"]),u=o.useMemo(function(){var h;return(h=o.Children.map(a,function(v){return o.createElement("div",null,v)}))!==null&&h!==void 0?h:[]},[a]);$();var m=_r(u,!r,d),b=m[0],g=m[1],y=he(b,t);return o.createElement("div",ba({className:P({"iui-button-group":d==="horizontal","iui-button-group-vertical":d==="vertical","iui-button-group-overflow-x":!!r&&d==="horizontal"},n),"aria-orientation":d,ref:y},p),!!r&&g<u.length?o.createElement(o.Fragment,null,r&&s==="start"&&o.createElement("div",null,r(g)),u.slice(0,g-1),r&&s==="end"&&o.createElement("div",null,r(g))):u)});var it=o.createContext(void 0),ga=globalThis&&globalThis.__assign||function(){return ga=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ga.apply(this,arguments)},qb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Kb=o.forwardRef(function(e,t){var a=e.children,n=e.className,r=qb(e,["children","className"]),i=o.useContext(it);if(!i)throw new Error("CarouselSlider must be used within Carousel");var s=i.currentIndex,c=i.setSlideCount,d=i.idPrefix,p=i.isManuallyUpdating,u=i.scrollInstantly,m=o.useMemo(function(){var I;return(I=o.Children.map(a,function(E,R){return o.isValidElement(E)?o.cloneElement(E,{id:"".concat(d,"--slide-").concat(R),index:R}):E}))!==null&&I!==void 0?I:[]},[a,d]);o.useLayoutEffect(function(){c(m.length)},[m.length,c]);var b=o.useState(),g=b[0],y=b[1],h=at(function(I){var E=I.width;return y(E)})[0],v=o.useRef(null),S=he(v,h,t),w=o.useRef(!0),T=o.useRef();return o.useLayoutEffect(function(){var I,E,R,M=(I=v.current)===null||I===void 0?void 0:I.children.item(s);if(!(!v.current||!M||!p.current&&T.current===g)){w.current&&(u.current=!0,w.current=!1);var j=(R=(E=He())===null||E===void 0?void 0:E.matchMedia("(prefers-reduced-motion: no-preference)"))===null||R===void 0?void 0:R.matches;v.current.scrollTo({left:M.offsetLeft-v.current.offsetLeft,behavior:u.current||!j?"instant":"smooth"}),u.current=!1,T.current=g}},[s,p,u,g]),o.createElement("ol",ga({"aria-live":"polite",className:P("iui-carousel-slider",n),ref:S},r),m)}),fa=globalThis&&globalThis.__assign||function(){return fa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fa.apply(this,arguments)},Jb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Yb=o.forwardRef(function(e,t){var a=e.index,n=e.className,r=e.children,i=Jb(e,["index","className","children"]),s=o.useContext(it);if(!s||a==null)throw new Error("CarouselSlide must be used within Carousel");var c=s.currentIndex,d=s.isManuallyUpdating,p=s.setCurrentIndex,u=o.useCallback(function(){!d.current&&c!==a&&p(a),c===a&&(d.current=!1)},[c,a,d,p]),m=Ul(u,{threshold:.5},!1),b=he(m,t);return o.createElement("li",fa({className:P("iui-carousel-slider-item",n),role:"tabpanel","aria-roledescription":"slide",ref:b},i),r)}),ya=globalThis&&globalThis.__assign||function(){return ya=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ya.apply(this,arguments)},Zb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Gl=o.forwardRef(function(e,t){var a=e.isActive,n=e.isSmaller,r=e.isSmall,i=e.className,s=Zb(e,["isActive","isSmaller","isSmall","className"]);return o.createElement("button",ya({type:"button",role:"tab",tabIndex:-1,className:P("iui-carousel-navigation-dot",{"iui-active":a,"iui-first":n,"iui-second":r},i),"aria-selected":a,ref:t},s))}),va=globalThis&&globalThis.__assign||function(){return va=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},va.apply(this,arguments)},Xb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ql=o.forwardRef(function(e,t){var a,n,r,i=e.currentIndex,s=e.length,c=e.className,d=e.onSlideChange,p=e.children,u=Xb(e,["currentIndex","length","className","onSlideChange","children"]);$();var m=o.useContext(it),b=(a=s!=null?s:m==null?void 0:m.slideCount)!==null&&a!==void 0?a:o.Children.count(p),g=(n=i!=null?i:m==null?void 0:m.currentIndex)!==null&&n!==void 0?n:0,y=(r=e.id)!==null&&r!==void 0?r:m==null?void 0:m.idPrefix,h=o.useCallback(function(W){m&&m.setCurrentIndex(W),d==null||d(W)},[m,d]),v=o.useRef(!0),S=o.useState(b),w=S[0],T=S[1],I=o.useRef(null),E=o.useState(),R=E[0],M=E[1],j=at(function(W){var D=W.width;if(!!I.current){M(D);var se=I.current.children[0].offsetWidth;T(Math.floor(D/se))}}),O=j[0],k=j[1];o.useEffect(function(){return k==null?void 0:k.disconnect()},[k]);var z=he(t,O,I),V=o.useMemo(function(){return Ge(g-Math.ceil(w/2)+1,0,b-w)},[g,b,w]),F=o.useMemo(function(){return Ge(g+Math.floor(w/2),w-1,b-1)},[g,b,w]),H=o.useMemo(function(){return Array(b).fill(null).map(function(W,D){var se=D===V&&D!==0||D===F&&D!==b-1,ne=D===V+1&&D!==1||D===F-1&&D!==b-2,U=D<V||D>F;return o.createElement(Gl,{key:D,"aria-label":"Slide ".concat(D),isActive:D===g,onClick:function(){return h(D)},isSmall:ne,isSmaller:se||U,id:y&&"".concat(y,"--dot-").concat(D),"aria-controls":y&&"".concat(y,"--slide-").concat(D)})})},[b,V,F,g,y,h]);return o.useEffect(function(){var W,D,se,ne=(W=I.current)===null||W===void 0?void 0:W.children[V];if(!(!I.current||!ne)){var U=(se=(D=He())===null||D===void 0?void 0:D.matchMedia("(prefers-reduced-motion: no-preference)"))===null||se===void 0?void 0:se.matches;I.current.scrollTo({left:ne.offsetLeft-I.current.offsetLeft,behavior:U&&!v.current?"smooth":"auto"}),v.current&&(v.current=!1)}},[g,V,b,w,R]),o.createElement(o.Fragment,null,o.createElement("div",va({className:P("iui-carousel-navigation-dots",c),role:"tablist","aria-label":"Slides",ref:z},u),p!=null?p:H))}),Dt=globalThis&&globalThis.__assign||function(){return Dt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Dt.apply(this,arguments)},Qb=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},zi=o.forwardRef(function(e,t){var a=o.useContext(it);if(!a)throw new Error("CarouselNavigation should be used inside Carousel");var n=a.slideCount,r=a.setCurrentIndex,i=a.keysPressed,s=a.scrollInstantly;return o.createElement(J,Dt({styleType:"borderless",size:"small",tabIndex:-1,"data-pressed":i.ArrowLeft||void 0,ref:t},e,{onClick:function(c){var d;c.detail>3&&(s.current=!0),r(function(p){return(n+p-1)%n}),(d=e==null?void 0:e.onClick)===null||d===void 0||d.call(e,c)}}),o.createElement(Mo,null))}),Wi=o.forwardRef(function(e,t){var a=o.useContext(it);if(!a)throw new Error("CarouselNavigation should be used inside Carousel");var n=a.slideCount,r=a.setCurrentIndex,i=a.keysPressed,s=a.scrollInstantly;return o.createElement(J,Dt({styleType:"borderless",size:"small",tabIndex:-1,"data-pressed":i.ArrowRight||void 0,ref:t},e,{onClick:function(c){var d;c.detail>3&&(s.current=!0),r(function(p){return(n+p+1)%n}),(d=e==null?void 0:e.onClick)===null||d===void 0||d.call(e,c)}}),o.createElement(dn,null))}),eg=Object.assign(o.forwardRef(function(e,t){var a=e.className,n=e.children,r=Qb(e,["className","children"]);return o.createElement("nav",Dt({className:P("iui-carousel-navigation",a),ref:t},r),n!=null?n:o.createElement(o.Fragment,null,o.createElement("div",{className:"iui-carousel-navigation-left"},o.createElement(zi,null)),o.createElement(ql,null),o.createElement("div",{className:"iui-carousel-navigation-right"},o.createElement(Wi,null))))}),{PreviousButton:zi,NextButton:Wi}),gn=globalThis&&globalThis.__assign||function(){return gn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},gn.apply(this,arguments)},ng=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ln=Object.assign(o.forwardRef(function(e,t){var a=e.activeSlideIndex,n=a===void 0?0:a,r=e.onSlideChange,i=e.className,s=e.children,c=ng(e,["activeSlideIndex","onSlideChange","className","children"]),d=o.useState(function(){var k;return(k=e.id)!==null&&k!==void 0?k:"iui-carousel-".concat(jl(10))})[0];$();var p=o.useRef(!1),u=o.useRef(!1),m=o.useRef(null),b=he(m,t),g=o.useState(n),y=g[0],h=g[1];o.useEffect(function(){h(n)},[n]);var v=o.useCallback(function(k){var z;h(k),p.current=!0,(z=m.current)===null||z===void 0||z.focus()},[]),S=o.useState(0),w=S[0],T=S[1],I=o.useState({}),E=I[0],R=I[1],M=function(k){k.altKey||k.ctrlKey||k.metaKey||k.shiftKey||(k.key==="ArrowLeft"||k.key==="ArrowRight")&&R(function(z){var V;return gn(gn({},z),(V={},V[k.key]=!0,V))})},j=function(k){switch(k.key){case"ArrowLeft":{R(function(z){return gn(gn({},z),{ArrowLeft:!1})}),v(function(z){return(w+z-1)%w});break}case"ArrowRight":{R(function(z){return gn(gn({},z),{ArrowRight:!1})}),v(function(z){return(w+z+1)%w});break}}},O=o.useRef(r);return o.useEffect(function(){var k;(k=O.current)===null||k===void 0||k.call(O,y)},[y]),o.createElement("section",gn({"aria-roledescription":"carousel",tabIndex:0,onKeyDown:M,onKeyUp:j,ref:b,className:P("iui-carousel",i)},c,{id:d}),o.createElement(it.Provider,{value:{currentIndex:y,setCurrentIndex:v,slideCount:w,setSlideCount:T,keysPressed:E,idPrefix:d,isManuallyUpdating:p,scrollInstantly:u}},s))}),{Slider:Kb,Slide:Yb,Navigation:eg,DotsList:ql,Dot:Gl});var ha=globalThis&&globalThis.__assign||function(){return ha=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ha.apply(this,arguments)},tg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Pn=function(e){var t,a=e.value,n=a===void 0?0:a,r=e.indeterminate,i=r===void 0?!1:r,s=e.labels,c=s===void 0?[]:s,d=e.isAnimated,p=d===void 0?!1:d,u=e.status,m=e.className,b=e.style,g=tg(e,["value","indeterminate","labels","isAnimated","status","className","style"]);$();var y=Math.min(100,Math.max(0,n));return o.createElement("div",ha({className:P("iui-progress-indicator-linear",(t={},t["iui-".concat(u)]=!!u,t),m),style:b},g),o.createElement("div",{className:"iui-track"},o.createElement("div",{className:P("iui-fill",{"iui-determinate":!i&&p,"iui-indeterminate":i}),style:{width:i?"100%":"".concat(y,"%")}})),c.length>0&&o.createElement("div",{className:"iui-label"},c.map(function(h,v){return o.createElement("span",{key:v},h)})))},Sa=globalThis&&globalThis.__assign||function(){return Sa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Sa.apply(this,arguments)},rg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ye=function(e){var t,a=e.value,n=a===void 0?0:a,r=e.indeterminate,i=r===void 0?!1:r,s=e.status,c=e.children,d=e.size,p=d===void 0?"":d,u=e.className,m=e.style,b=rg(e,["value","indeterminate","status","children","size","className","style"]);$();var g={negative:o.createElement(ip,{"aria-hidden":!0}),positive:o.createElement(lp,{"aria-hidden":!0})},y={strokeDashoffset:s==="positive"?0:88-Math.min(88,Math.max(0,i?88:88*n/100))};return o.createElement("div",Sa({className:P("iui-progress-indicator-radial",(t={"iui-determinate":!i,"iui-indeterminate":i},t["iui-".concat(p)]=!!p,t["iui-".concat(s)]=!!s,t),u),style:m},b),o.createElement("svg",{className:"iui-radial",viewBox:"0 0 32 32","aria-hidden":"true"},o.createElement("circle",{className:"iui-track",cx:"16",cy:"16",r:"14"}),o.createElement("circle",{className:"iui-fill",cx:"16",cy:"16",r:"14",style:y})),o.createElement(o.Fragment,null,s&&o.createElement("span",{className:"iui-inner-content"},g[s]),!s&&c&&o.createElement("span",{className:"iui-inner-content"},c)))};var wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wt.apply(this,arguments)},ag=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Re=o.forwardRef(function(e,t){var a,n,r=e.className,i=e.disabled,s=i===void 0?!1:i,c=e.indeterminate,d=c===void 0?!1:c,p=e.label,u=e.status,m=e.variant,b=m===void 0?"default":m,g=e.setFocus,y=e.isLoading,h=y===void 0?!1:y,v=e.style,S=e.checkmarkClassName,w=e.checkmarkStyle,T=ag(e,["className","disabled","indeterminate","label","status","variant","setFocus","isLoading","style","checkmarkClassName","checkmarkStyle"]);$();var I=o.useRef(null),E=he(I,t);o.useEffect(function(){I.current&&g&&I.current.focus()},[g]),o.useEffect(function(){I.current&&(I.current.indeterminate=d,I.current.checked=d?!1:I.current.checked)});var R=o.createElement(o.Fragment,null,o.createElement("input",wt({className:P("iui-checkbox",{"iui-checkbox-visibility":b==="eyeball","iui-loading":h},r&&(a={},a[r]=!p,a),S),style:wt(wt({},!p&&v),w),disabled:s||h,type:"checkbox",ref:E},T)),h&&o.createElement(Ye,{size:"x-small",indeterminate:!0}));return p?o.createElement("label",{className:P("iui-checkbox-wrapper",(n={"iui-disabled":s},n["iui-".concat(u)]=!!u,n["iui-loading"]=h,n),r),style:v},R,p&&o.createElement("span",{className:"iui-checkbox-label"},p)):R});var Kl=o.createContext(void 0),Wo=function(){var e=o.useContext(Kl);if(e==null)throw new Error("useColorPickerContext must be used within a ColorPickerContext.Provider");return e},wa=globalThis&&globalThis.__assign||function(){return wa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wa.apply(this,arguments)},og=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Vo=function(e){return e instanceof ze?e:ze.create(e)},Br=function(e){var t=e.children,a=e.className,n=e.selectedColor,r=e.onChange,i=e.onChangeComplete,s=e.setFocus,c=s===void 0?!1:s,d=e.showAlpha,p=d===void 0?!1:d,u=og(e,["children","className","selectedColor","onChange","onChangeComplete","setFocus","showAlpha"]);$();var m=o.useRef(null);o.useEffect(function(){if(m.current&&c){var E=Fl(m.current);E[0].focus()}},[c]);var b=o.useMemo(function(){return Vo(n)},[n]),g=o.useRef(b.toTbgr()),y=o.useState(b),h=y[0],v=y[1];o.useEffect(function(){v(b)},[b]);var S=o.useState(function(){return h.toHsvColor()}),w=S[0],T=S[1];o.useEffect(function(){b.toTbgr()!==g.current&&(g.current=b.toTbgr(),T(b.toHsvColor()))},[b]);var I=o.useCallback(function(E,R,M){T(E);var j=M!=null?M:ze.create(E);R?i==null||i(j):r==null||r(j),g.current=j.toTbgr(),v(j)},[r,i]);return o.createElement("div",wa({className:P("iui-color-picker",a),ref:m},u),o.createElement(Kl.Provider,{value:{activeColor:h,setActiveColor:v,hsvColor:w,applyHsvColorChange:I,onChangeComplete:i,showAlpha:p}},t))},Tt=globalThis&&globalThis.__assign||function(){return Tt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Tt.apply(this,arguments)},ig=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Mt=o.forwardRef(function(e,t){var a=e.color,n=e.style,r=e.onClick,i=e.isActive,s=e.className,c=ig(e,["color","style","onClick","isActive","className"]);$();var d=o.useMemo(function(){return typeof a=="string"?a:Vo(a).toHslString(!0)},[a]),p=o.useMemo(function(){var u,m,b;return!((b=(m=(u=He())===null||u===void 0?void 0:u.CSS)===null||m===void 0?void 0:m.supports)===null||b===void 0)&&b.call(m,"--iui-color-swatch-background: ".concat(d))?Tt({"--iui-color-swatch-background":d},n):Tt({backgroundColor:d},n)},[d,n]);return o.createElement("div",Tt({className:P("iui-color-swatch",{"iui-active":i},s),style:p,onClick:r,tabIndex:i?0:-1,"aria-selected":i,ref:t},c))}),Ta=globalThis&&globalThis.__assign||function(){return Ta=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ta.apply(this,arguments)},lg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Nr=o.forwardRef(function(e,t){var a=e.colors,n=e.label,r=e.className,i=e.children,s=lg(e,["colors","label","className","children"]);$();var c=Wo(),d=c.activeColor,p=c.setActiveColor,u=c.onChangeComplete,m=o.useState(),b=m[0],g=m[1],y=function(w){var T;w&&!w.querySelector('[tabindex="0"]')&&((T=w.firstElementChild)===null||T===void 0||T.setAttribute("tabindex","0"))},h=o.useRef(null),v=he(h,y),S=function(w){var T=tt(h.current);if(!!T.length){var I=T.findIndex(function(M){var j;return M===((j=h.current)===null||j===void 0?void 0:j.ownerDocument.activeElement)});if(!(I<0)){var E=-1;switch(w.key){case"ArrowDown":{E=T.findIndex(function(M,j){return j>I&&M.offsetLeft===T[I].offsetLeft});break}case"ArrowUp":{for(var R=I-1;R>=0;R--)if(T[R].offsetLeft===T[I].offsetLeft){E=R;break}break}case"ArrowLeft":E=Math.max(I-1,0);break;case"ArrowRight":E=Math.min(I+1,T.length-1);break;case"Enter":case" ":case"Spacebar":T[I].click(),w.preventDefault();return}E>=0&&E<T.length&&(g(E),w.preventDefault())}}};return o.useEffect(function(){var w;if(b!=null){var T=tt(h.current);(w=T[b])===null||w===void 0||w.focus()}},[b]),o.createElement("div",Ta({className:P("iui-color-palette-wrapper",r),ref:t},s),n&&o.createElement("div",{className:"iui-color-picker-section-label"},n),o.createElement("div",{className:"iui-color-palette",onKeyDown:S,ref:v},i,a&&a.map(function(w,T){var I=Vo(w);return o.createElement(Mt,{key:T,color:I,onClick:function(E){E.preventDefault(),u==null||u(I),p(I)},isActive:I.equals(d)})})))});var sg=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))};function cg(e,t){return t==="odd-segments"&&(e+1)%2===0?!0:t==="even-segments"&&e%2===0}function Vi(e,t,a){var n=[],r=sg([],e,!0);if(r.sort(function(c,d){return c-d}),r.length===0||r[0]<t||r[r.length-1]>a||t===a)return[];for(var i=t,s=0;s<r.length;s++)n.push({left:i,right:r[s]}),i=r[s];return n.push({left:i,right:a}),n}var dg=function(e){var t=e.trackDisplayMode,a=e.sliderMin,n=e.sliderMax,r=e.values,i=o.useState(function(){return Vi(r,a,n)}),s=i[0],c=i[1];return o.useEffect(function(){c(Vi(r,a,n))},[r,a,n]),o.createElement(o.Fragment,null,t!=="none"&&s.map(function(d,p){var u=d.left>=a&&n!==a?100*(d.left-a)/(n-a):0,m=d.right>=a&&n!==a?100-100*(d.right-a)/(n-a):100;return o.createElement(o.Fragment,{key:p},cg(p,t)?o.createElement("div",{className:"iui-slider-track",style:{left:"".concat(u,"%"),right:"".concat(m,"%")}}):null)}))};var Ca=globalThis&&globalThis.__assign||function(){return Ca=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ca.apply(this,arguments)},ug=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ze=function(e){var t=e.content,a=e.children,n=e.className,r=e.style,i=e.visible,s=e.ref,c=e.id,d=ug(e,["content","children","className","style","visible","ref","id"]);return $(),o.createElement(hn,Ca({visible:i,interactive:!1,content:o.createElement("div",{className:P("iui-tooltip",n),style:r,role:"tooltip",id:c},t),offset:[0,4],ref:s},d),a&&o.cloneElement(a,{title:void 0}))},Zn=globalThis&&globalThis.__assign||function(){return Zn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Zn.apply(this,arguments)},mg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},pg=function(e){var t=e.value,a=e.index,n=e.minVal,r=e.maxVal,i=e.step,s=e.sliderMin,c=e.sliderMax,d=e.isActive,p=e.onThumbActivated,u=e.onThumbValueChanged,m=e.tooltipProps,b=e.thumbProps,g=e.disabled,y=o.useRef(null),h=o.useCallback(function(F){if(!(g||F.altKey)){switch(F.key){case"ArrowLeft":case"ArrowDown":u(a,Math.max(t-i,n));break;case"ArrowRight":case"ArrowUp":u(a,Math.min(t+i,r));break;case"Home":u(a,n);break;case"End":u(a,r);break;default:return}F.preventDefault()}},[g,u,a,t,i,n,r]),v=o.useCallback(function(){!g&&p(a)},[g,a,p]),S=o.useState(!1),w=S[0],T=S[1],I=o.useState(!1),E=I[0],R=I[1],M=o.useMemo(function(){return t<s?s:t>c?c:t},[c,s,t]),j=o.useMemo(function(){return c===s?0:100*(M-s)/(c-s)},[M,c,s]),O=b||{},k=O.style,z=O.className,V=mg(O,["style","className"]);return o.createElement(Ze,Zn({visible:d||w||E,placement:"top"},m),o.createElement("div",Zn({},V,{"data-index":a,ref:y,style:Zn(Zn({},k),{left:"".concat(j,"%")}),className:P("iui-slider-thumb",{"iui-active":d},z),role:"slider",tabIndex:g?void 0:0,"aria-valuemin":n,"aria-valuenow":t,"aria-valuemax":r,"aria-disabled":g,onPointerDown:v,onKeyDown:h,onFocus:function(){return T(!0)},onBlur:function(){return T(!1)},onMouseEnter:function(){return R(!0)},onMouseLeave:function(){return R(!1)}})))},Xn=globalThis&&globalThis.__assign||function(){return Xn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Xn.apply(this,arguments)},bg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Yr=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},Gi=function(e,t){var a=Ge(t,e.left,e.right);return(a-e.left)/e.width},gg=function(e,t){if(e.length===1)return 0;var a=e.map(function(r){return Math.abs(r-t)}),n=Math.min.apply(Math,a);return a.indexOf(n)},qi=function(e,t){return e!=="auto"?e:t.length%2?"even-segments":"odd-segments"},Ki=function(e,t,a){return Math.round((e-a)/t)*t+a},fg=function(e,t,a){return Number.isInteger(t)?e.toFixed(0):e.toFixed(a)},Ji=function(e,t){var a,n=e.ownerDocument;if(!e.contains(n.activeElement)||Number((a=n.activeElement)===null||a===void 0?void 0:a.getAttribute("data-index"))!==t){var r=e.querySelector('[data-index="'.concat(t,'"]'));r&&r.focus()}},tn=o.forwardRef(function(e,t){var a,n,r=e.min,i=r===void 0?0:r,s=e.max,c=s===void 0?100:s,d=e.values,p=e.step,u=p===void 0?1:p,m=e.setFocus,b=m===void 0?!1:m,g=e.tooltipProps,y=e.disabled,h=y===void 0?!1:y,v=e.tickLabels,S=e.minLabel,w=e.maxLabel,T=e.trackDisplayMode,I=T===void 0?"auto":T,E=e.thumbMode,R=E===void 0?"inhibit-crossing":E,M=e.onChange,j=e.onUpdate,O=e.thumbProps,k=e.className,z=e.railContainerProps,V=bg(e,["min","max","values","step","setFocus","tooltipProps","disabled","tickLabels","minLabel","maxLabel","trackDisplayMode","thumbMode","onChange","onUpdate","thumbProps","className","railContainerProps"]),F=o.useState(d),H=F[0],W=F[1];o.useEffect(function(){W(d)},[d]);var D=o.useState(function(){return S!=null?S:i.toString()}),se=D[0],ne=D[1];o.useEffect(function(){ne(S!=null?S:i.toString())},[S,i]);var U=o.useState(function(){return w!=null?w:c.toString()}),C=U[0],G=U[1];o.useEffect(function(){G(w!=null?w:c.toString())},[w,c]);var oe=o.useState(function(){return qi(I,H)}),te=oe[0],X=oe[1];o.useEffect(function(){X(qi(I,H))},[I,H]),$();var Y=o.useRef(null);o.useEffect(function(){Y.current&&b&&Ji(Y.current,0)},[b]);var Q=o.useMemo(function(){var me=u.toString(),Te=me.indexOf(".");return me.length-(Te+1)},[u]),B=o.useCallback(function(me){if(R==="inhibit-crossing"){var Te=me===0?i:H[me-1]+u,we=me<H.length-1?H[me+1]-u:c;return[Te,we]}return[i,c]},[c,i,u,R,H]),q=o.useState(void 0),re=q[0],Se=q[1],Be=o.useCallback(function(me,Te){if(Y.current&&re!==void 0){var we=Gi(Y.current.getBoundingClientRect(),me.clientX),je=i+(c-i)*we;je=Ki(je,u,i);var mn=B(re),pn=mn[0],Ie=mn[1];if(je=Ge(je,pn,Ie),je!==H[re]){var nn=Yr([],H,!0);nn[re]=je,W(nn),Te==="onChange"?M==null||M(nn):j==null||j(nn)}else Te==="onChange"&&(M==null||M(H))}},[re,i,c,u,B,H,j,M]),Ke=o.useCallback(function(me){re!==void 0&&(me.preventDefault(),me.stopPropagation(),Be(me,"onUpdate"))},[re,Be]),A=o.useCallback(function(me,Te){if(H[me]!==Te){var we=Yr([],H,!0);we[me]=Te,W(we),M==null||M(we)}},[H,M]),K=o.useCallback(function(me){Se(me)},[]),de=o.useCallback(function(me){re!==void 0&&(Be(me,"onChange"),Se(void 0),me.preventDefault(),me.stopPropagation())},[re,Be]),De=o.useCallback(function(me){if(Y.current){var Te=Gi(Y.current.getBoundingClientRect(),me.clientX),we=i+(c-i)*Te;we=Ki(we,u,i);var je=gg(H,we),mn=B(je),pn=mn[0],Ie=mn[1];if(we=Ge(we,pn,Ie),we===H[je])return;var nn=Yr([],H,!0);nn[je]=we,W(nn),M==null||M(nn),j==null||j(nn),Ji(Y.current,je),me.preventDefault(),me.stopPropagation()}},[i,c,u,H,B,M,j]);ht("pointermove",Ke,(a=Y.current)===null||a===void 0?void 0:a.ownerDocument),ht("pointerup",de,(n=Y.current)===null||n===void 0?void 0:n.ownerDocument);var bt=o.useMemo(function(){return v?Array.isArray(v)?o.createElement("div",{className:"iui-slider-ticks"},v.map(function(me,Te){return o.createElement("span",{key:Te,className:"iui-slider-tick"},me)})):v:null},[v]),Dn=o.useCallback(function(me,Te){var we=g?g(me,Te,u):{};return Xn(Xn({},we),{content:we.content?we.content:fg(Te,u,Q)})},[Q,u,g]);return o.createElement("div",Xn({ref:t,className:P("iui-slider-component-container",{"iui-disabled":h},k)},V),se&&o.createElement("span",{className:"iui-slider-min"},se),o.createElement("div",Xn({ref:Y,className:P("iui-slider-container",{"iui-grabbing":re!==void 0}),onPointerDown:De},z),o.createElement("div",{className:"iui-slider-rail"}),H.map(function(me,Te){var we,je=B(Te),mn=je[0],pn=je[1],Ie=O==null?void 0:O(Te);return o.createElement(pg,{key:(we=Ie==null?void 0:Ie.id)!==null&&we!==void 0?we:Te,index:Te,disabled:h,isActive:re===Te,onThumbActivated:K,onThumbValueChanged:A,minVal:mn,maxVal:pn,value:me,tooltipProps:Dn(Te,me),thumbProps:Ie,step:u,sliderMin:i,sliderMax:c})}),o.createElement(dg,{trackDisplayMode:te,sliderMin:i,sliderMax:c,values:H}),bt),C&&o.createElement("span",{className:"iui-slider-max"},C))}),Ia=globalThis&&globalThis.__assign||function(){return Ia=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ia.apply(this,arguments)},yg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},vg=function(e,t){var a=Ge(t,e.top,e.bottom);return(a-e.top)/e.height*100},hg=function(e,t){var a=Ge(t,e.left,e.right);return(a-e.left)/e.width*100},Go=o.forwardRef(function(e,t){var a,n,r,i,s,c,d,p,u,m,b,g,y=e.className,h=yg(e,["className"]),v=o.useRef(),S=he(v,t);$();var w=Wo(),T=w.activeColor,I=w.hsvColor,E=w.onChangeComplete,R=w.applyHsvColorChange,M=w.showAlpha,j=o.useMemo(function(){return ze.create({h:I.h,s:100,v:100})},[I.h]),O=o.useMemo(function(){return I.h},[I]),k=o.useMemo(function(){var A;return M&&(A=I.a)!==null&&A!==void 0?A:1},[I.a,M]),z=o.useMemo(function(){return T.toHexString()},[T]),V=o.useState(!1),F=V[0],H=V[1],W=j.toHexString(),D=!((r=(n=(a=He())===null||a===void 0?void 0:a.CSS)===null||n===void 0?void 0:n.supports)===null||r===void 0)&&r.call(n,"--iui-color-field-hue: ".concat(W))?{"--iui-color-field-hue":W,"--iui-color-picker-selected-color":z}:{backgroundColor:W},se=!((c=(s=(i=He())===null||i===void 0?void 0:i.CSS)===null||s===void 0?void 0:s.supports)===null||c===void 0)&&c.call(s,"--iui-color-picker-selected-color: ".concat(W))?{"--iui-color-picker-selected-color":W}:{backgroundColor:W},ne=100-I.v,U=I.s,C=!((u=(p=(d=He())===null||d===void 0?void 0:d.CSS)===null||p===void 0?void 0:p.supports)===null||u===void 0)&&u.call(p,"--iui-color-dot-inset: 0")?{"--iui-color-dot-inset":"".concat(ne.toString(),"% auto auto ").concat(U.toString(),"%")}:{backgroundColor:z,top:ne.toString()+"%",left:U.toString()+"%"},G=o.useCallback(function(A,K){var de=Number(A.toFixed(2)),De={h:de,s:I.s,v:I.v,a:I.a};R(De,K)},[R,I]),oe=o.useCallback(function(A,K){var de=Number(A.toFixed(2)),De={h:I.h,s:I.s,v:I.v,a:de};R(De,K)},[R,I]),te=o.useRef(null),X=o.useRef(null),Y=o.useCallback(function(A,K,de){var De={h:I.h,s:A,v:100-K,a:I.a};R(De,de)},[R,I]),Q=o.useCallback(function(A,K){if(te.current&&F||te.current&&K==="onClick"){var de=hg(te.current.getBoundingClientRect(),A.clientX),De=vg(te.current.getBoundingClientRect(),A.clientY);K==="onChange"?Y(de,De,!0):Y(de,De,!1)}},[F,Y]),B=o.useCallback(function(A){!F||(Q(A,"onChange"),H(!1),A.preventDefault(),A.stopPropagation())},[F,Q]);ht("pointerup",B,(m=v.current)===null||m===void 0?void 0:m.ownerDocument);var q=o.useCallback(function(A){!F||(A.preventDefault(),A.stopPropagation(),Q(A,"onUpdate"))},[F,Q]);ht("pointermove",q,(b=v.current)===null||b===void 0?void 0:b.ownerDocument);var re=o.useCallback(function(A){!F||(Q(A,"onChange"),H(!1))},[F,Q]);ht("pointerleave",re,(g=v.current)===null||g===void 0?void 0:g.ownerDocument);var Se=o.useRef({}),Be=function(A){var K=U,de=ne;switch(Se.current[A.key]=!0,A.key){case"ArrowDown":{de=Math.min(de+1,100),Y(K,de,!1);break}case"ArrowUp":{de=Math.max(de-1,0),Y(K,de,!1);break}case"ArrowLeft":K=Math.max(K-1,0),Y(K,de,!1);break;case"ArrowRight":K=Math.min(K+1,100),Y(K,de,!1);break}},Ke=function(A){switch(Se.current[A.key]=!1,A.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":if(Se.current.ArrowUp||Se.current.ArrowDown||Se.current.ArrowLeft||Se.current.ArrowRight)return;E==null||E(ze.create(I));break}};return o.createElement("div",Ia({className:P("iui-color-selection-wrapper",y),ref:S},h),o.createElement("div",{className:"iui-color-field",style:D,ref:te,onPointerDown:function(A){var K;A.preventDefault(),Q(A,"onClick"),H(!0),(K=X.current)===null||K===void 0||K.focus()}},o.createElement("div",{className:"iui-color-dot",style:C,onPointerDown:function(){var A;H(!0),(A=X.current)===null||A===void 0||A.focus()},onKeyDown:Be,onKeyUp:Ke,tabIndex:0,ref:X})),o.createElement(tn,{minLabel:"",maxLabel:"",values:[O],className:"iui-hue-slider",trackDisplayMode:"none",tooltipProps:function(){return{visible:!1}},onChange:function(A){G(A[0],!0)},onUpdate:function(A){G(A[0],!1)},min:0,max:359}),M&&o.createElement(tn,{minLabel:"",maxLabel:"",values:[k],className:"iui-opacity-slider",trackDisplayMode:"none",tooltipProps:function(){return{visible:!1}},onChange:function(A){oe(A[0],!0)},onUpdate:function(A){oe(A[0],!1)},min:0,max:1,step:.01,style:se}))}),xa=globalThis&&globalThis.__assign||function(){return xa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xa.apply(this,arguments)},Sg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ye=o.forwardRef(function(e,t){var a,n=e.setFocus,r=n===void 0?!1:n,i=e.size,s=e.className,c=Sg(e,["setFocus","size","className"]);$();var d=o.useRef(null),p=he(d,t);return o.useEffect(function(){d.current&&r&&d.current.focus()},[r]),o.createElement("input",xa({className:P("iui-input",(a={},a["iui-".concat(i)]=!!i,a),s),ref:p},c))}),ka=globalThis&&globalThis.__assign||function(){return ka=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ka.apply(this,arguments)},wg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},qo=o.forwardRef(function(e,t){var a,n,r,i,s,c,d,p,u=e.defaultColorFormat,m=e.allowedColorFormats,b=m===void 0?["hsl","rgb","hex"]:m,g=e.className,y=wg(e,["defaultColorFormat","allowedColorFormats","className"]);$();var h=o.useRef(null),v=Wo(),S=v.activeColor,w=v.applyHsvColorChange,T=v.hsvColor,I=v.showAlpha,E=o.useState(u),R=E[0],M=E[1];o.useEffect(function(){M(u)},[u]);var j=o.useState(["","","",""]),O=j[0],k=j[1];o.useEffect(function(){var C,G;if(R==="hsl"){var oe=S.toHslColor();k([ze.getFormattedColorNumber(T.h),ze.getFormattedColorNumber(oe.s),ze.getFormattedColorNumber(oe.l),ze.getFormattedColorNumber((C=oe.a)!==null&&C!==void 0?C:S.getAlpha()/255,2)])}else if(R==="rgb"){var te=S.toRgbColor();k([te.r.toString(),te.g.toString(),te.b.toString(),ze.getFormattedColorNumber((G=te.a)!==null&&G!==void 0?G:S.getAlpha()/255,2)])}else k([S.toHexString(I)]),F(!0)},[S,T.h,R,I]);var z=o.useState(!0),V=z[0],F=z[1],H=o.useCallback(function(){var C,G=(C=b[(b.indexOf(R)+1)%b.length])!==null&&C!==void 0?C:b[0];M(G)},[R,b]),W=function(C){return!!(C&&h.current&&h.current.contains(C))},D=function(){var C;if(R==="hex")try{var G=O[0].replace(/ /g,"").toLowerCase();if(C=ze.create(G),F(!0),S.toHexString(I).toLowerCase()===G)return}catch{F(!1);return}if(R==="hsl"){var oe=O.map(Number),te=oe[0],X=oe[1],Y=oe[2],Q=oe[3];if(te<0||te>360||X<0||X>100||Y<0||Y>100||Q<0||Q>1)return;var B=S.toHslColor();if(B.h===te&&B.s===X&&B.l===Y&&B.a===Q)return;C=ze.create({h:te,s:X,l:Y,a:Q})}if(R==="rgb"){var q=O.map(Number),re=q[0],Se=q[1],Be=q[2],Q=q[3];if(re<0||re>255||Se<0||Se>255||Be<0||Be>255||Q<0||Q>1)return;var Ke=S.toRgbColor();if(Ke.r===re&&Ke.g===Se&&Ke.b===Be&&Ke.a===Q)return;C=ze.create({r:re,g:Se,b:Be,a:Q})}C&&w(C.toHsvColor(),!0,C)},se=o.createElement(Ve,{status:V?void 0:"negative"},o.createElement(ye,{size:"small",maxLength:I?9:7,minLength:1,placeholder:"HEX",value:O[0],onChange:function(C){var G=C.target.value.startsWith("#")?C.target.value:"#".concat(C.target.value);k([G])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),D()}})),ne=o.createElement(o.Fragment,null,o.createElement(Ve,{status:Number(O[0])<0||Number(O[0])>360?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"359",step:".1",placeholder:"H",value:(a=O[0])!==null&&a!==void 0?a:"",onChange:function(C){k([C.target.value,O[1],O[2],O[3]])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})),o.createElement(Ve,{status:Number(O[1])<0||Number(O[1])>100?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"100",step:".1",placeholder:"S",value:(n=O[1])!==null&&n!==void 0?n:"",onChange:function(C){k([O[0],C.target.value,O[2],O[3]])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})),o.createElement(Ve,{status:Number(O[2])<0||Number(O[2])>100?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"100",step:".1",placeholder:"L",value:(r=O[2])!==null&&r!==void 0?r:"",onChange:function(C){k([O[0],O[1],C.target.value,O[3]])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})),I&&o.createElement(Ve,{status:Number(O[3])<0||Number(O[3])>1?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"1",step:".01",placeholder:"A",value:(i=O[3])!==null&&i!==void 0?i:"",onChange:function(C){k([O[0],O[1],O[2],C.target.value])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}}))),U=o.createElement(o.Fragment,null,o.createElement(Ve,{status:Number(O[0])<0||Number(O[0])>255?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"255",placeholder:"R",value:(s=O[0])!==null&&s!==void 0?s:"",onChange:function(C){k([C.target.value,O[1],O[2],O[3]])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})),o.createElement(Ve,{status:Number(O[1])<0||Number(O[1])>255?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"255",placeholder:"G",value:(c=O[1])!==null&&c!==void 0?c:"",onChange:function(C){k([O[0],C.target.value,O[2],O[3]])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})),o.createElement(Ve,{status:Number(O[2])<0||Number(O[2])>255?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"255",placeholder:"B",value:(d=O[2])!==null&&d!==void 0?d:"",onChange:function(C){k([O[0],O[1],C.target.value,O[3]])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})),I&&o.createElement(Ve,{status:Number(O[3])<0||Number(O[3])>1?"negative":void 0},o.createElement(ye,{size:"small",type:"number",min:"0",max:"1",step:".01",placeholder:"A",value:(p=O[3])!==null&&p!==void 0?p:"",onChange:function(C){k([O[0],O[1],O[2],C.target.value])},onKeyDown:function(C){C.key==="Enter"&&(C.preventDefault(),D())},onBlur:function(C){C.preventDefault(),W(C.relatedTarget)||D()}})));return o.createElement("div",ka({className:P("iui-color-input-wrapper",g),ref:t},y),o.createElement("div",{className:"iui-color-picker-section-label"},I&&R!="hex"?R.toUpperCase()+"A":R.toUpperCase()),o.createElement("div",{className:"iui-color-input"},b.length>1&&o.createElement(J,{styleType:"borderless",onClick:H,size:"small"},o.createElement(sp,null)),o.createElement("div",{ref:h,className:"iui-color-input-fields"},R==="hex"&&se,R==="rgb"&&U,R==="hsl"&&ne)))});var _a=globalThis&&globalThis.__assign||function(){return _a=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_a.apply(this,arguments)},Tg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Le=o.forwardRef(function(e,t){var a=e.className,n=Tg(e,["className"]);return $(),o.createElement("a",_a({className:P("iui-anchor",a),ref:t},n))});var Oa=globalThis&&globalThis.__assign||function(){return Oa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Oa.apply(this,arguments)},Cg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Jl=o.forwardRef(function(e,t){var a=e.className,n=e.isMuted,r=n===void 0?!1:n,i=Cg(e,["className","isMuted"]);return $(),o.createElement("h1",Oa({ref:t,className:P("iui-text-headline","iui-text-spacing",{"iui-text-muted":r},a)},i))}),Pa=globalThis&&globalThis.__assign||function(){return Pa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pa.apply(this,arguments)},Ig=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Yl=o.forwardRef(function(e,t){var a=e.className,n=e.isMuted,r=n===void 0?!1:n,i=Ig(e,["className","isMuted"]);return $(),o.createElement("h2",Pa({ref:t,className:P("iui-text-title","iui-text-spacing",{"iui-text-muted":r},a)},i))}),Ba=globalThis&&globalThis.__assign||function(){return Ba=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ba.apply(this,arguments)},xg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Zl=o.forwardRef(function(e,t){var a=e.className,n=e.isMuted,r=n===void 0?!1:n,i=xg(e,["className","isMuted"]);return $(),o.createElement("h3",Ba({ref:t,className:P("iui-text-subheading","iui-text-spacing",{"iui-text-muted":r},a)},i))}),Na=globalThis&&globalThis.__assign||function(){return Na=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Na.apply(this,arguments)},kg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},lt=o.forwardRef(function(e,t){var a=e.className,n=e.isMuted,r=n===void 0?!1:n,i=kg(e,["className","isMuted"]);return $(),o.createElement("h3",Na({ref:t,className:P("iui-text-leading","iui-text-spacing",{"iui-text-muted":r},a)},i))}),Ea=globalThis&&globalThis.__assign||function(){return Ea=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ea.apply(this,arguments)},_g=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Hn=o.forwardRef(function(e,t){var a=e.className,n=e.isMuted,r=n===void 0?!1:n,i=e.isSkeleton,s=i===void 0?!1:i,c=_g(e,["className","isMuted","isSkeleton"]);return $(),o.createElement("p",Ea({ref:t,className:P("iui-text-block","iui-text-spacing",{"iui-text-muted":r,"iui-skeleton":s},a)},c))}),Da=globalThis&&globalThis.__assign||function(){return Da=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Da.apply(this,arguments)},Og=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Xl=o.forwardRef(function(e,t){var a=e.className,n=e.isMuted,r=n===void 0?!1:n,i=Og(e,["className","isMuted"]);return $(),o.createElement("p",Da({ref:t,className:P("iui-text-small",{"iui-text-muted":r},a)},i))});var Ra=globalThis&&globalThis.__assign||function(){return Ra=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ra.apply(this,arguments)},Pg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ko=o.forwardRef(function(e,t){var a=e.className,n=e.children,r=e.footer,i=Pg(e,["className","children","footer"]);return $(),o.createElement("blockquote",Ra({className:P("iui-blockquote",a),ref:t},i),n,r&&o.createElement("footer",null,r))});var Ma=globalThis&&globalThis.__assign||function(){return Ma=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ma.apply(this,arguments)},Bg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},vn=function(e){var t=e.className,a=e.children,n=Bg(e,["className","children"]);return $(),o.createElement("code",Ma({className:P("iui-code",t)},n),a)};var La=globalThis&&globalThis.__assign||function(){return La=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},La.apply(this,arguments)},Ng=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ql={Command:"\u2318 Cmd",Shift:"\u21E7 Shift",Backspace:"\u232B Backspace",Enter:"\u21B5 Enter",Eject:"\u23CF Eject",Control:"Ctrl",Windows:"\u229E Win",Apple:"\uF8FF",Option:"\u2325 Option",Left:"\u2190",Up:"\u2191",Right:"\u2192",Down:"\u2193"},Fn=function(e){var t=e.className,a=e.children,n=Ng(e,["className","children"]);return $(),o.createElement("kbd",La({className:P("iui-keyboard",t)},n),a)},Aa=globalThis&&globalThis.__assign||function(){return Aa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Aa.apply(this,arguments)},Eg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},xe=o.forwardRef(function(e,t){var a,n=e.variant,r=n===void 0?"body":n,i=e.as,s=i===void 0?"div":i,c=e.className,d=e.isMuted,p=d===void 0?!1:d,u=e.isSkeleton,m=u===void 0?!1:u,b=Eg(e,["variant","as","className","isMuted","isSkeleton"]);return $(),o.createElement(s,Aa({className:P((a={},a["iui-text-".concat(r)]=r!=="body",a["iui-text-block"]=r==="body",a["iui-text-muted"]=p,a["iui-skeleton"]=m,a),c),ref:t},b))});var on=globalThis&&globalThis.__assign||function(){return on=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},on.apply(this,arguments)},Dg=function(e,t){var a,n=t[0],r=t[1];switch(n){case"open":return on(on({},e),{isOpen:!0});case"close":return on(on({},e),{isOpen:!1});case"select":return on(on({},e),{isOpen:!1,selectedIndex:r!=null?r:e.selectedIndex,focusedIndex:r!=null?r:e.focusedIndex});case"focus":return on(on({},e),{focusedIndex:(a=r!=null?r:e.selectedIndex)!==null&&a!==void 0?a:-1});default:return e}},st=o.createContext(void 0);st.displayName="ComboBoxRefsContext";var zn=o.createContext(void 0);zn.displayName="ComboBoxStateContext";var Lt=o.createContext(void 0);Lt.displayName="ComboBoxActionContext";var ja=globalThis&&globalThis.__assign||function(){return ja=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ja.apply(this,arguments)},Rg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},es=o.forwardRef(function(e,t){var a=e.children,n=Rg(e,["children"]),r=en(zn).isOpen,i=en(Lt),s=en(st),c=s.inputRef,d=s.toggleButtonRef;return o.useEffect(function(){e.visible!=null&&i([e.visible?"open":"close"])},[i,e.visible]),o.createElement(hn,ja({placement:"bottom-start",visible:r,onClickOutside:o.useCallback(function(p,u){var m,b=u.target;!((m=d.current)===null||m===void 0)&&m.contains(b)||i(["close"])},[i,d]),animation:"shift-away",duration:200,reference:c,ref:t,content:a},n))});es.displayName="ComboBoxDropdown";var Ha=globalThis&&globalThis.__assign||function(){return Ha=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ha.apply(this,arguments)},Mg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ns=o.forwardRef(function(e,t){var a=e.className,n=e.children,r=e.onClick,i=e.disabled,s=e.isOpen,c=Mg(e,["className","children","onClick","disabled","isOpen"]),d=en(Lt),p=en(st).toggleButtonRef,u=he(p,t);return o.createElement("span",Ha({ref:u,className:P("iui-end-icon",{"iui-actionable":!i,"iui-disabled":i,"iui-open":s},a),onClick:function(m){r==null||r(m),m.isDefaultPrevented()||d([s?"close":"open"])}},c),n!=null?n:o.createElement(hr,{"aria-hidden":!0}))});ns.displayName="ComboBoxEndIcon";var Fa=globalThis&&globalThis.__assign||function(){return Fa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Fa.apply(this,arguments)},Lg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ts=o.forwardRef(function(e,t){var a=e.onKeyDown,n=e.onFocus,r=Lg(e,["onKeyDown","onFocus"]),i=en(zn),s=i.isOpen,c=i.id,d=i.focusedIndex,p=en(Lt),u=en(st),m=u.inputRef,b=u.menuRef,g=u.optionsExtraInfoRef,y=he(m,t),h=o.useRef(d!=null?d:-1);o.useEffect(function(){h.current=d!=null?d:-1},[d]);var v=function(T){var I,E,R;return(R=(E=(I=b.current)===null||I===void 0?void 0:I.querySelector('[data-iui-index="'.concat(T,'"]')))===null||E===void 0?void 0:E.id)!==null&&R!==void 0?R:""},S=o.useCallback(function(T){var I,E,R,M,j,O,k,z,V,F,H;a==null||a(T);var W=(I=Object.keys(g.current).length)!==null&&I!==void 0?I:0;switch(T.key){case"ArrowDown":{if(T.preventDefault(),!s)return p(["open"]);if(W===0)return;if(h.current===-1)return p(["focus",(R=(E=Object.values(g.current))===null||E===void 0?void 0:E[0].__originalIndex)!==null&&R!==void 0?R:-1]);var D=h.current;do{var se=(M=b.current)===null||M===void 0?void 0:M.querySelector('[data-iui-index="'.concat(D,'"]')),ne=(j=se==null?void 0:se.nextElementSibling)!==null&&j!==void 0?j:(O=b.current)===null||O===void 0?void 0:O.querySelector("[data-iui-index]");if(D=Number(ne==null?void 0:ne.getAttribute("data-iui-index")),(ne==null?void 0:ne.ariaDisabled)!=="true")return p(["focus",D])}while(D!==h.current);break}case"ArrowUp":{if(T.preventDefault(),!s)return p(["open"]);if(W===0)return;if(h.current===-1)return p(["focus",(z=(k=Object.values(g.current))===null||k===void 0?void 0:k[W-1].__originalIndex)!==null&&z!==void 0?z:-1]);var U=h.current;do{var se=(V=b.current)===null||V===void 0?void 0:V.querySelector('[data-iui-index="'.concat(U,'"]')),C=(F=se==null?void 0:se.previousElementSibling)!==null&&F!==void 0?F:(H=b.current)===null||H===void 0?void 0:H.querySelector("[data-iui-index]:last-of-type");if(U=Number(C==null?void 0:C.getAttribute("data-iui-index")),(C==null?void 0:C.ariaDisabled)!=="true")return p(["focus",U])}while(U!==h.current);break}case"Enter":{T.preventDefault(),p(s?["select",h.current]:["open"]);break}case"Escape":{T.preventDefault(),p(["close"]);break}case"Tab":p(["close"]);break}},[p,s,b,a,g]),w=o.useCallback(function(T){p(["open"]),n==null||n(T)},[p,n]);return o.createElement(ye,Fa({ref:y,onKeyDown:S,onFocus:w,"aria-activedescendant":s&&d!=null&&d>-1?v(d):void 0,role:"combobox","aria-controls":s?"".concat(c,"-list"):void 0,"aria-autocomplete":"list",spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"},r))});ts.displayName="ComboBoxInput";var Jo=function(e){var t=e.startIcon,a=e.children,n=e.status;$();var r=function(){var i,s=t!=null?t:n&&_n[n]();return s?o.cloneElement(s,{className:P("iui-input-icon",(i=s.props)===null||i===void 0?void 0:i.className),"aria-hidden":!0}):null};return o.createElement(o.Fragment,null,o.createElement(r,null),o.createElement("div",{className:"iui-message"},a))},$a=globalThis&&globalThis.__assign||function(){return $a=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},$a.apply(this,arguments)},Ag=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},rs=function(e){var t=e.className,a=e.status,n=e.message,r=e.children,i=Ag(e,["className","status","message","children"]),s=en(zn).id;return o.createElement(Ve,$a({className:t,status:a,statusMessage:typeof n=="string"?o.createElement(Jo,{status:a},n):o.isValidElement(n)&&o.cloneElement(n,{status:a})},i,{id:s}),o.createElement("div",{className:"iui-input-with-icon"},r))};rs.displayName="ComboBoxInputContainer";var or=globalThis&&globalThis.__assign||function(){return or=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},or.apply(this,arguments)},jg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},as=o.forwardRef(function(e,t){var a=e.className,n=e.style,r=jg(e,["className","style"]),i=en(zn),s=i.minWidth,c=i.id,d=en(st).menuRef,p=he(d,t);return o.createElement($o,or({id:"".concat(c,"-list"),style:o.useMemo(function(){return or({minWidth:s,maxWidth:"min(".concat(s*2,"px, 90vw)"),maxHeight:300},n)},[s,n]),setFocus:!1,role:"listbox",ref:p,className:P("iui-scroll",a)},r))});as.displayName="ComboBoxMenu";var Ua=globalThis&&globalThis.__assign||function(){return Ua=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ua.apply(this,arguments)},Hg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},os=o.memo(o.forwardRef(function(e,t){var a=e.children,n=e.isSelected,r=e.disabled,i=e.value,s=e.onClick,c=e.sublabel,d=e.size,p=d===void 0?c?"large":"default":d,u=e.icon,m=e.badge,b=e.className,g=e.role,y=g===void 0?"menuitem":g,h=e.index,v=Hg(e,["children","isSelected","disabled","value","onClick","sublabel","size","icon","badge","className","role","index"]),S=en(zn).focusedIndex,w=function(I){S===h&&(I==null||I.scrollIntoView({block:"nearest"}))},T=he(t,w);return o.createElement("li",Ua({className:P("iui-menu-item",{"iui-large":p==="large","iui-active":n,"iui-disabled":r,"iui-focused":S===h},b),ref:T,onClick:function(){return!r&&(s==null?void 0:s(i))},role:y,tabIndex:r||y==="presentation"?void 0:-1,"aria-selected":n,"aria-disabled":r,"data-iui-index":h},v),u&&o.cloneElement(u,{className:P(u.props.className,"iui-icon")}),o.createElement("span",{className:"iui-content"},o.createElement("div",{className:"iui-menu-label"},a),c&&o.createElement("div",{className:"iui-menu-description"},c)),m&&o.cloneElement(m,{className:P(m.props.className,"iui-icon")}))}));os.displayName="ComboBoxMenuItem";var Qn=globalThis&&globalThis.__assign||function(){return Qn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qn.apply(this,arguments)},Fg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Yi=function(e,t){var a;return(a=e.id)!==null&&a!==void 0?a:"".concat(t,"-option-").concat(e.label.replace(/\s/g,"-"))},Sn=function(e){var t,a=e.options,n=e.value,r=e.onChange,i=e.filterFunction,s=e.inputProps,c=e.dropdownMenuProps,d=e.emptyStateMessage,p=d===void 0?"No options found":d,u=e.itemRenderer,m=Fg(e,["options","value","onChange","filterFunction","inputProps","dropdownMenuProps","emptyStateMessage","itemRenderer"]),b=o.useState(function(){var U,C;return(C=(U=e.id)!==null&&U!==void 0?U:(s==null?void 0:s.id)&&"".concat(s.id,"-cb"))!==null&&C!==void 0?C:"iui-cb-".concat(jl(10))})[0];$();var g=o.useRef(null),y=o.useRef(null),h=o.useRef(null),v=o.useRef(r);o.useEffect(function(){v.current=r},[r]);var S=o.useRef({});o.useEffect(function(){S.current={}},[a]),a.length>0&&Object.keys(S.current).length===0&&a.forEach(function(U,C){S.current[Yi(U,b)]={__originalIndex:C}});var w=o.useReducer(Dg,{isOpen:!1,selectedIndex:-1,focusedIndex:-1}),T=w[0],I=T.isOpen,E=T.selectedIndex,R=T.focusedIndex,M=w[1];o.useEffect(function(){var U,C;I?((U=g.current)===null||U===void 0||U.focus(),F(a)):(M(["focus"]),D(E!=null&&E>=0?(C=a[E])===null||C===void 0?void 0:C.label:""))},[I,a,E]);var j=o.useState(0),O=j[0],k=j[1];o.useEffect(function(){g.current&&k(g.current.offsetWidth)},[I]);var z=o.useState(a),V=z[0],F=z[1];o.useEffect(function(){F(a)},[a]);var H=o.useState((t=s==null?void 0:s.value)!==null&&t!==void 0?t:""),W=H[0],D=H[1],se=o.useCallback(function(U){var C,G,oe=U.currentTarget.value;D(oe),M(["open"]),F((C=i==null?void 0:i(a,oe))!==null&&C!==void 0?C:a.filter(function(te){return te.label.toLowerCase().includes(oe.toLowerCase())})),(G=s==null?void 0:s.onChange)===null||G===void 0||G.call(s,U)},[i,s,a]);o.useEffect(function(){M(["focus"])},[V]),o.useEffect(function(){M(["select",a.findIndex(function(U){return U.value===n})])},[a,n]),o.useEffect(function(){var U,C;if(E!=null&&E>=0){var G=(U=a[E])===null||U===void 0?void 0:U.value;if(G===n)return;(C=v.current)===null||C===void 0||C.call(v,G)}},[a,E,n]);var ne=o.useCallback(function(U){var C=Yi(U,b),G=S.current[C].__originalIndex,oe=u?u(U,{isFocused:R===G,isSelected:E===G,index:G,id:C}):null;return oe?o.cloneElement(oe,{onClick:function(te){var X,Y;M(["select",G]),(Y=(X=oe.props).onClick)===null||Y===void 0||Y.call(X,te)},className:P(oe.props.className,{"iui-focused":R===G}),"data-iui-index":G,ref:kr(oe.props.ref,function(te){R===G&&(te==null||te.scrollIntoView({block:"nearest"}))})}):o.createElement(os,Qn({key:C,id:C},U,{isSelected:E===G,onClick:function(){return M(["select",G])},index:G}),U.label)},[R,b,u,E]);return o.createElement(st.Provider,{value:{inputRef:g,menuRef:y,toggleButtonRef:h,optionsExtraInfoRef:S}},o.createElement(Lt.Provider,{value:M},o.createElement(zn.Provider,{value:{id:b,minWidth:O,isOpen:I,focusedIndex:R}},o.createElement(rs,Qn({disabled:s==null?void 0:s.disabled},m),o.createElement(ts,Qn({value:W},s,{onChange:se})),o.createElement(ns,{disabled:s==null?void 0:s.disabled,isOpen:I})),o.createElement(es,Qn({},c),o.createElement(as,null,V.length>0?V.map(ne):o.createElement(Pr,null,o.createElement(xe,{isMuted:!0},p)))))))};var za=globalThis&&globalThis.__assign||function(){return za=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},za.apply(this,arguments)},$g=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Zi=function(e,t,a){var n=a?Wa(e.getHours(),a):e.getHours();return a?!!t&&n%12===t.getHours()%12:!!t&&n===t.getHours()},Xi=function(e,t){return!!t&&e.getMinutes()===t.getMinutes()},Qi=function(e,t){return!!t&&e.getSeconds()===t.getSeconds()},el=function(e,t){return!!t&&(e==="AM"?t.getHours()<12:t.getHours()>=12)},Wa=function(e,t){var a=e%12;return t==="PM"?a+12:a},Kn=function(e,t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),e,t.getMinutes(),t.getSeconds())},Er=function(e){var t=e.date,a=e.onChange,n=e.use12Hours,r=n===void 0?!1:n,i=e.precision,s=i===void 0?"minutes":i,c=e.hourStep,d=c===void 0?1:c,p=e.minuteStep,u=p===void 0?1:p,m=e.secondStep,b=m===void 0?1:m,g=e.setFocusHour,y=g===void 0?!1:g,h=e.hourRenderer,v=h===void 0?function(B){return B.getHours().toLocaleString(void 0,{minimumIntegerDigits:2})}:h,S=e.minuteRenderer,w=S===void 0?function(B){return B.getMinutes().toLocaleString(void 0,{minimumIntegerDigits:2})}:S,T=e.secondRenderer,I=T===void 0?function(B){return B.getSeconds().toLocaleString(void 0,{minimumIntegerDigits:2})}:T,E=e.meridiemRenderer,R=E===void 0?function(B){return B}:E,M=e.className,j=$g(e,["date","onChange","use12Hours","precision","hourStep","minuteStep","secondStep","setFocusHour","hourRenderer","minuteRenderer","secondRenderer","meridiemRenderer","className"]);$();var O=o.useState(t),k=O[0],z=O[1],V=o.useState(k!=null?k:new Date),F=V[0],H=V[1],W=o.useState(r?(F==null?void 0:F.getHours())>11?"PM":"AM":void 0),D=W[0],se=W[1];o.useEffect(function(){H(t!=null?t:new Date),z(t)},[t]);var ne=function(B){var q=r?Wa(B.getHours(),D):B.getHours(),re=Kn(q,k!=null?k:new Date);C(re)},U=function(B){var q=k!=null?k:new Date,re=q.getHours();se(B),B==="AM"&&re>11&&(q=Kn(re-12,q)),B==="PM"&&re<=12&&(q=Kn(re+12,q)),C(q)},C=function(B){var q=B;s==="hours"&&(q=new Date(B.getFullYear(),B.getMonth(),B.getDate(),B.getHours(),0,0)),s==="minutes"&&(q=new Date(B.getFullYear(),B.getMonth(),B.getDate(),B.getHours(),B.getMinutes(),0)),H(q),z(q),a==null||a(q)},G=function(B){var q=r?Wa(B.getHours(),D):B.getHours();H(Kn(q,F))},oe=function(B){var q=k!=null?k:new Date,re=q.getHours();B==="AM"&&re>11&&(se(B),q=Kn(re-12,q)),B==="PM"&&re<=12&&(se(B),q=Kn(re+12,q)),H(q)},te=function(B,q,re){for(var Se=[],Be=0;Be<B;++Be)Be%re===0&&Se.push(q(Be));return Se},X=o.useMemo(function(){var B=k!=null?k:new Date;return te(r?12:24,function(q){return new Date(B.getFullYear(),B.getMonth(),B.getDate(),r&&q===0?12:q,B.getMinutes(),B.getSeconds())},d)},[d,k,r]),Y=o.useMemo(function(){var B=k!=null?k:new Date;return te(60,function(q){return new Date(B.getFullYear(),B.getMonth(),B.getDate(),B.getHours(),q,B.getSeconds())},u)},[u,k]),Q=o.useMemo(function(){var B=k!=null?k:new Date;return te(60,function(q){return new Date(B.getFullYear(),B.getMonth(),B.getDate(),B.getHours(),B.getMinutes(),q)},b)},[b,k]);return o.createElement("div",za({className:P("iui-time-picker",M)},j),o.createElement(Xt,{data:X,isSameFocused:function(B){return Zi(B,F,r?D:void 0)},isSameSelected:function(B){return Zi(B,k,r?D:void 0)},onFocusChange:G,onSelectChange:ne,setFocus:y,valueRenderer:v}),s!="hours"&&o.createElement(Xt,{data:Y,isSameFocused:function(B){return Xi(B,F)},isSameSelected:function(B){return Xi(B,k)},onFocusChange:function(B){return H(B)},onSelectChange:function(B){return C(B)},valueRenderer:w}),s=="seconds"&&o.createElement(Xt,{data:Q,isSameFocused:function(B){return Qi(B,F)},isSameSelected:function(B){return Qi(B,k)},onFocusChange:function(B){return H(B)},onSelectChange:function(B){return C(B)},valueRenderer:I}),r&&o.createElement(Xt,{data:["AM","PM"],isSameFocused:function(B){return el(B,F)},isSameSelected:function(B){return el(B,k)},onFocusChange:function(B){return oe(B)},onSelectChange:function(B){return U(B)},valueRenderer:R,className:"iui-period"}))},Xt=function(e){var t=e.data,a=e.onFocusChange,n=e.onSelectChange,r=e.isSameFocused,i=e.isSameSelected,s=e.setFocus,c=s===void 0?!1:s,d=e.valueRenderer,p=e.className,u=p===void 0?"iui-time":p,m=o.useRef(c);o.useEffect(function(){m.current&&(m.current=!1)});var b=function(y,h){h&&(y==null||y.scrollIntoView({block:"nearest",inline:"nearest"}))},g=function(y,h,v,S,w){switch(y.key){case"ArrowDown":if(w+1>h)break;v(w+1),m.current=!0,y.preventDefault();break;case"ArrowUp":if(w-1<0)break;v(w-1),m.current=!0,y.preventDefault();break;case"Enter":case" ":case"Spacebar":S(w),y.preventDefault();break}};return o.createElement("div",{className:u},o.createElement("ol",null,t.map(function(y,h){var v=r(y);return o.createElement("li",{onKeyDown:function(S){g(S,t.length-1,function(w){return a(t[w])},function(w){return n(t[w])},h)},className:P({"iui-selected":i(y)}),key:h,tabIndex:v?0:void 0,ref:function(S){b(S,v),m.current&&v&&(S==null||S.focus())},onClick:function(){n(y)}},d(y))})))},Va=globalThis&&globalThis.__assign||function(){return Va=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Va.apply(this,arguments)},Ug=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Qt=function(e,t){return e&&t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()},zg=["January","February","March","April","May","June","July","August","September","October","November","December"],Wg=["Su","Mo","Tu","We","Th","Fr","Sa"],Vg=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],is=function(e){var t=new Intl.DateTimeFormat(e,{weekday:"short"}),a=new Intl.DateTimeFormat(e,{weekday:"long"}),n=new Intl.DateTimeFormat(e,{month:"long"}),r=[n.format(new Date(2020,0,1)),n.format(new Date(2020,1,1)),n.format(new Date(2020,2,1)),n.format(new Date(2020,3,1)),n.format(new Date(2020,4,1)),n.format(new Date(2020,5,1)),n.format(new Date(2020,6,1)),n.format(new Date(2020,7,1)),n.format(new Date(2020,8,1)),n.format(new Date(2020,9,1)),n.format(new Date(2020,10,1)),n.format(new Date(2020,11,1))],i=[a.format(new Date(2020,10,1)),a.format(new Date(2020,10,2)),a.format(new Date(2020,10,3)),a.format(new Date(2020,10,4)),a.format(new Date(2020,10,5)),a.format(new Date(2020,10,6)),a.format(new Date(2020,10,7))],s=[t.format(new Date(2020,10,1)).slice(0,2),t.format(new Date(2020,10,2)).slice(0,2),t.format(new Date(2020,10,3)).slice(0,2),t.format(new Date(2020,10,4)).slice(0,2),t.format(new Date(2020,10,5)).slice(0,2),t.format(new Date(2020,10,6)).slice(0,2),t.format(new Date(2020,10,7)).slice(0,2)];return{months:r,shortDays:s,days:i}},ct=function(e){var t,a,n,r=e.date,i=e.onChange,s=e.localizedNames,c=e.className,d=e.style,p=e.setFocus,u=p===void 0?!1:p,m=e.showTime,b=m===void 0?!1:m,g=e.use12Hours,y=g===void 0?!1:g,h=e.precision,v=e.hourStep,S=e.minuteStep,w=e.secondStep,T=e.showYearSelection,I=T===void 0?!1:T,E=Ug(e,["date","onChange","localizedNames","className","style","setFocus","showTime","use12Hours","precision","hourStep","minuteStep","secondStep","showYearSelection"]);$();var R=(t=s==null?void 0:s.months)!==null&&t!==void 0?t:zg,M=(a=s==null?void 0:s.shortDays)!==null&&a!==void 0?a:Wg,j=(n=s==null?void 0:s.days)!==null&&n!==void 0?n:Vg,O=o.useState(r),k=O[0],z=O[1],V=o.useState(k!=null?k:new Date),F=V[0],H=V[1],W=o.useState(k?k.getMonth():new Date().getMonth()),D=W[0],se=W[1],ne=o.useState(k?k.getFullYear():new Date().getFullYear()),U=ne[0],C=ne[1],G=o.useRef(u);o.useEffect(function(){G.current&&(G.current=!1)});var oe=o.useCallback(function(A,K){se(A),C(K)},[]);o.useEffect(function(){var A=new Date;z(r),H(r!=null?r:A),oe(r?r.getMonth():A.getMonth(),r?r.getFullYear():A.getFullYear())},[r,oe]);var te=o.useMemo(function(){var A=new Date(U,D,1).getDay();A===0&&(A=7);for(var K=[],de=1;de<=42;de++){var De=de-A;K.push(new Date(U,D,De))}return K},[D,U]),X=o.useMemo(function(){for(var A=[],K=Math.ceil(te.length/7),de=0;de<K;de++)A.push(te.slice(de*7,(de+1)*7));return A},[te]),Y=function(A,K){var de=k!=null?k:new Date,De=new Date(A,K,de.getDate(),de.getHours(),de.getMinutes(),de.getSeconds());return De},Q=function(){var A=U-1;oe(D,A),H(Y(A,D))},B=function(){var A=U+1;oe(D,A),H(Y(A,D))},q=function(){var A=D!==0?D-1:11,K=D!==0?U:U-1;oe(A,K),H(Y(K,A))},re=function(){var A=D!==11?D+1:0,K=D!==11?U:U+1;oe(A,K),H(Y(K,A))},Se=function(A){A.getMonth()!==(k==null?void 0:k.getMonth())&&oe(A.getMonth(),A.getFullYear());var K=k!=null?k:new Date,de=new Date(A.getFullYear(),A.getMonth(),A.getDate(),K.getHours(),K.getMinutes(),K.getSeconds());z(de),H(de),i==null||i(de)},Be=function(A){if(!!F){var K=new Date(F);switch(A.key){case"ArrowDown":K.setDate(F.getDate()+7),K.getMonth()!==D&&re(),H(K),G.current=!0,A.preventDefault();break;case"ArrowUp":K.setDate(F.getDate()-7),K.getMonth()!==D&&q(),H(K),G.current=!0,A.preventDefault();break;case"ArrowLeft":K.setDate(F.getDate()-1),K.getMonth()!==D&&q(),H(K),G.current=!0,A.preventDefault();break;case"ArrowRight":K.setDate(F.getDate()+1),K.getMonth()!==D&&re(),H(K),G.current=!0,A.preventDefault();break;case"Enter":case" ":case"Spacebar":Se(F),A.preventDefault();break}}},Ke=function(A){if(A.getMonth()!==D)return"iui-calendar-day-outside-month";var K="iui-calendar-day";return Qt(A,k)&&(K+="-selected"),Qt(A,new Date)&&(K+="-today"),K};return o.createElement("div",Va({className:P("iui-date-picker",c),style:d},E),o.createElement("div",null,o.createElement("div",{className:"iui-calendar-month-year"},I&&o.createElement(J,{styleType:"borderless",onClick:Q,"aria-label":"Previous year",size:"small"},o.createElement(cp,null)),o.createElement(J,{styleType:"borderless",onClick:q,"aria-label":"Previous month",size:"small"},o.createElement(Mo,null)),o.createElement("span",{"aria-live":"polite"},o.createElement("span",{className:"iui-calendar-month",title:R[D]},R[D]),"\xA0",U),o.createElement(J,{styleType:"borderless",onClick:re,"aria-label":"Next month",size:"small"},o.createElement(dn,null)),I&&o.createElement(J,{styleType:"borderless",onClick:B,"aria-label":"Next year",size:"small"},o.createElement(dp,null))),o.createElement("div",{className:"iui-calendar-weekdays"},M.map(function(A,K){return o.createElement("div",{key:A,title:j[K]},A)})),o.createElement("div",{onKeyDown:Be,role:"listbox"},X.map(function(A,K){return o.createElement("div",{key:"week-".concat(D,"-").concat(K),className:"iui-calendar-week"},A.map(function(de,De){var bt=de.getDate();return o.createElement("div",{key:"day-".concat(D,"-").concat(De),className:Ke(de),onClick:function(){return Se(de)},role:"option",tabIndex:Qt(de,F)?0:-1,ref:function(Dn){return Qt(de,F)&&G.current&&(Dn==null?void 0:Dn.focus())}},bt)}))}))),b&&o.createElement(Er,{date:k,use12Hours:y,precision:h,hourStep:v,minuteStep:S,secondStep:w,onChange:function(A){return i==null?void 0:i(A)}}))};var ir=globalThis&&globalThis.__assign||function(){return ir=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(this,arguments)},Gg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},rn=function(e){var t=e.errorType,a=e.errorName,n=e.errorMessage,r=e.primaryButtonHandle,i=e.primaryButtonLabel,s=e.secondaryButtonHandle,c=e.secondaryButtonLabel,d=e.translatedErrorMessages,p=e.className,u=Gg(e,["errorType","errorName","errorMessage","primaryButtonHandle","primaryButtonLabel","secondaryButtonHandle","secondaryButtonLabel","translatedErrorMessages","className"]);$();var m=ir({badGateway:"Bad gateway",error:"Error",forbidden:"Forbidden",internalServerError:"Internal server error",pageNotFound:"Page not found",serviceUnavailable:"Service unavailable",unauthorized:"Unauthorized"},d);function b(){switch(t){case"401":return o.createElement(yp,{className:"iui-non-ideal-state-illustration"});case"403":return o.createElement(fp,{className:"iui-non-ideal-state-illustration"});case"404":return o.createElement(gp,{className:"iui-non-ideal-state-illustration"});case"500":return o.createElement(bp,{className:"iui-non-ideal-state-illustration"});case"502":return o.createElement(pp,{className:"iui-non-ideal-state-illustration"});case"503":return o.createElement(mp,{className:"iui-non-ideal-state-illustration"});case"generic":default:return o.createElement(up,{className:"iui-non-ideal-state-illustration"})}}function g(){if(a)return a;switch(t){case"401":return m.unauthorized;case"403":return m.forbidden;case"404":return m.pageNotFound;case"500":return m.internalServerError;case"502":return m.badGateway;case"503":return m.serviceUnavailable;case"generic":default:return m.error}}function y(){if(!(!r||!i))return o.createElement(ee,{styleType:"high-visibility",onClick:r},i)}function h(){if(!(!s||!c))return o.createElement(ee,{styleType:"default",onClick:s},c)}function v(){var S=y(),w=h();if(!(!S&&!w))return o.createElement("div",{className:"iui-non-ideal-state-actions"},S,w)}return o.createElement("div",ir({className:P("iui-non-ideal-state",p)},u),b(),o.createElement("div",{className:"iui-non-ideal-state-title"},g()),n&&o.createElement("div",{className:"iui-non-ideal-state-description"},n),v())};var Ga=globalThis&&globalThis.__assign||function(){return Ga=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ga.apply(this,arguments)},qg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Wn=function(e){var t,a=e.caption,n=e.children,r=e.className,i=e.title,s=e.onToggle,c=e.style,d=e.isExpanded,p=d===void 0?!1:d,u=e.endIcon,m=e.status,b=e.size,g=b===void 0?"default":b,y=e.styleType,h=y===void 0?"default":y,v=qg(e,["caption","children","className","title","onToggle","style","isExpanded","endIcon","status","size","styleType"]);$();var S=u!=null?u:m&&_n[m](),w=o.useState(p),T=w[0],I=w[1];o.useEffect(function(){I(p)},[p]);var E=function(){I(!T),s==null||s(!T)},R=function(M){(M.key==="Enter"||M.key===" "||M.key==="Spacebar")&&E()};return o.createElement("div",Ga({className:P("iui-expandable-block",{"iui-with-caption":!!a,"iui-expanded":T,"iui-small":g==="small","iui-borderless":h==="borderless"},r),style:c},v),o.createElement("div",{"aria-expanded":T,className:"iui-header",tabIndex:0,onClick:E,onKeyDown:R},o.createElement(dn,{className:"iui-icon","aria-hidden":!0}),o.createElement("span",{className:"iui-expandable-block-label"},o.createElement("div",{className:"iui-title"},i),a&&o.createElement("div",{className:"iui-caption"},a)),S&&o.cloneElement(S,{className:P("iui-status-icon",(t={},t["iui-".concat(m)]=!!m,t),S.props.className)})),o.createElement(Fo,{in:T},o.createElement("div",{className:"iui-expandable-content"},o.createElement("div",null,n))))};var qa=globalThis&&globalThis.__assign||function(){return qa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qa.apply(this,arguments)},Kg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Yo=function(e){var t=e.children,a=e.className,n=e.disabled,r=e.legend,i=Kg(e,["children","className","disabled","legend"]);return $(),o.createElement("fieldset",qa({className:P("iui-fieldset",a),disabled:n},i),r&&o.createElement("legend",null,r),n?o.Children.map(t,function(s){return o.isValidElement(s)?o.cloneElement(s,{disabled:!0}):s}):t)};var Ka=globalThis&&globalThis.__assign||function(){return Ka=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ka.apply(this,arguments)},Jg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Zo=o.forwardRef(function(e,t){var a=e.dragContent,n=e.children,r=e.onFileDropped,i=e.className,s=Jg(e,["dragContent","children","onFileDropped","className"]);$();var c=o.useState(!1),d=c[0],p=c[1],u=o.useRef(null),m=he(u,t),b=function(v){v.preventDefault(),v.stopPropagation()},g=function(v){var S,w,T;v.preventDefault(),v.stopPropagation(),!d&&((T=(w=(S=v.dataTransfer)===null||S===void 0?void 0:S.items)===null||w===void 0?void 0:w[0])===null||T===void 0?void 0:T.kind)==="file"&&p(!0)},y=function(v){var S;v.preventDefault(),v.stopPropagation(),d&&!(!((S=u.current)===null||S===void 0)&&S.contains(v.relatedTarget))&&p(!1)},h=function(v){var S;v.preventDefault(),v.stopPropagation(),d&&(p(!1),r((S=v.dataTransfer)===null||S===void 0?void 0:S.files))};return o.createElement("div",Ka({className:P("iui-file-upload",{"iui-drag":d},i),onDragEnter:g,onDragOver:b,onDragLeave:y,onDrop:h,ref:m},s),a?n:o.createElement("div",{className:"iui-content"},n),a&&o.createElement("div",{className:"iui-content"},a))}),Yg=function(e){var t=e.onChange,a=e.acceptMultiple,n=a===void 0?!0:a,r=e.acceptType,i=e.label,s=i===void 0?"Choose a file":i,c=e.subtitle,d=c===void 0?"or drag & drop it here.":c,p=e.children;return $(),o.createElement(o.Fragment,null,o.createElement(vp,{className:"iui-icon","aria-hidden":!0}),o.createElement("div",{className:"iui-template-text"},o.createElement("label",{className:"iui-anchor"},o.createElement("input",{className:"iui-browse-input",type:"file",onChange:t,multiple:n,accept:r}),s),o.createElement("div",null,d),p))};var Ct=globalThis&&globalThis.__assign||function(){return Ct=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ct.apply(this,arguments)},Zg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},nl=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},Xg={cookies:"Cookies",legalNotices:"Legal notices",privacy:"Privacy",termsOfService:"Terms of service",termsOfUse:"Terms of use"},dt=function(e){var t=e.customElements,a=e.translatedTitles,n=e.className,r=Zg(e,["customElements","translatedTitles","className"]);$();var i=Ct(Ct({},Xg),a),s=[{key:"copyright",title:"\xA9 ".concat(new Date().getFullYear()," Bentley Systems, Incorporated")},{key:"termsOfService",title:i.termsOfService,url:"https://connect-agreementportal.bentley.com/AgreementApp/Home/Eula/view/readonly/BentleyConnect"},{key:"privacy",title:i.privacy,url:"https://www.bentley.com/en/privacy-policy"},{key:"termsOfUse",title:i.termsOfUse,url:"https://www.bentley.com/en/terms-of-use-and-select-online-agreement"},{key:"cookies",title:i.cookies,url:"https://www.bentley.com/en/cookie-policy"},{key:"legalNotices",title:i.legalNotices,url:"https://connect.bentley.com/Legal"}],c=s;return t&&(c=typeof t=="function"?t(s):nl(nl([],s,!0),t,!0)),o.createElement("footer",Ct({className:P("iui-legal-footer",n)},r),o.createElement("ul",null,c.map(function(d,p){return o.createElement("li",{key:d.key||"".concat(d.title,"-").concat(p)},p>0&&o.createElement("span",{className:"iui-separator"}),d.url?o.createElement("a",{href:d.url,target:"_blank",rel:"noreferrer"},d.title):d.title)})))};var It=globalThis&&globalThis.__assign||function(){return It=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},It.apply(this,arguments)},Qg=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ef={moreOptions:"More options"},Dr=function(e){var t=e.appLogo,a=e.breadcrumbs,n=e.isSlim,r=n===void 0?!1:n,i=e.actions,s=e.userIcon,c=e.menuItems,d=e.translatedStrings,p=e.className,u=e.children,m=Qg(e,["appLogo","breadcrumbs","isSlim","actions","userIcon","menuItems","translatedStrings","className","children"]);$();var b=It(It({},ef),d);return o.createElement("header",It({className:P("iui-page-header",{"iui-slim":r},p)},m),o.createElement("div",{className:"iui-left"},t,a&&o.createElement("div",{className:"iui-divider"}),a),u&&o.createElement("div",{className:"iui-center"},u),o.createElement("div",{className:"iui-right"},i,s,c&&o.createElement(Me,{menuItems:c},o.createElement(J,{styleType:"borderless","aria-label":b.moreOptions},o.createElement(hp,{"aria-hidden":!0})))))},Ln=globalThis&&globalThis.__assign||function(){return Ln=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ln.apply(this,arguments)},nf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},er=function(e){return!!e.menuItems&&!!e.onClick},tl=function(e){return!!e.menuItems},sn=o.forwardRef(function(e,t){var a=e.name,n=e.description,r=e.isActive,i=r===void 0?!1:r,s=e.className,c=e.startIcon,d=e.menuItems,p=nf(e,["name","description","isActive","className","startIcon","menuItems"]);$();var u=Ln(Ln({startIcon:o.isValidElement(c)?o.cloneElement(c,{className:P("iui-header-button-icon",c.props.className)}):void 0,styleType:"borderless",className:P({"iui-header-button":!er(e),"iui-header-split-button":er(e),"iui-header-dropdown-button":!er(e)&&tl(e),"iui-active":i},s),"aria-current":i?"location":void 0,children:o.createElement(o.Fragment,null,o.createElement("div",null,a),n&&o.createElement("div",{className:"iui-description"},n)),ref:t},!!d&&{menuItems:d}),p);return er(u)?o.createElement(zo,Ln({},u)):tl(u)?o.createElement(Rt,Ln({},u)):o.createElement(ee,Ln({},u))}),Ja=globalThis&&globalThis.__assign||function(){return Ja=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ja.apply(this,arguments)},tf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Rr=function(e){var t=e.className,a=e.children,n=e.logo,r=e.onClick,i=tf(e,["className","children","logo","onClick"]),s=function(c){r&&(c.key==="Enter"||c.key===" "||c.key==="Spacebar")&&(c.preventDefault(),r())};return $(),o.createElement("div",Ja({className:P("iui-header-logo",t),role:r&&"button",tabIndex:r&&0,onKeyDown:s,onClick:r},i),o.isValidElement(n)?o.cloneElement(n,{className:P("iui-header-button-icon",n.props.className)}):void 0,a&&o.createElement("span",{className:"iui-label"},a))},Ya=globalThis&&globalThis.__assign||function(){return Ya=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ya.apply(this,arguments)},rf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},rl=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},Mr=function(e){var t=e.items,a=rf(e,["items"]);return $(),o.createElement("nav",Ya({"aria-label":"breadcrumbs"},a),t.reduce(function(n,r,i){return rl(rl([],n,!0),[r,i!==t.length-1&&o.createElement(dn,{key:"chevron".concat(i),"aria-hidden":!0,className:"iui-chevron"})],!1)},[]))};var Za=globalThis&&globalThis.__assign||function(){return Za=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Za.apply(this,arguments)},af=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ee=function(e){var t=e.label,a=e.sublabel,n=e.startIcon,r=e.children,i=e.className,s=af(e,["label","sublabel","startIcon","children","className"]);return $(),o.createElement("button",Za({className:P("iui-tab",i),role:"tab",tabIndex:-1},s),n&&o.cloneElement(n,{className:"iui-tab-icon","aria-hidden":!0}),t&&o.createElement("span",{className:"iui-tab-label"},o.createElement("div",null,t),a&&o.createElement("div",{className:"iui-tab-description"},a)),r)},jn=globalThis&&globalThis.__assign||function(){return jn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},jn.apply(this,arguments)},of=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Xo=function(e){var t,a,n,r=e.labels,i=e.activeIndex,s=e.onTabSelected,c=e.focusActivationMode,d=c===void 0?"auto":c,p=e.type,u=p===void 0?"default":p,m=e.color,b=m===void 0?"blue":m,g=e.orientation,y=g===void 0?"horizontal":g,h=e.tabsClassName,v=e.contentClassName,S=e.wrapperClassName,w=e.children,T=of(e,["labels","activeIndex","onTabSelected","focusActivationMode","type","color","orientation","tabsClassName","contentClassName","wrapperClassName","children"]);$();var I=o.useRef(null),E=$l(u!=="default"),R=E[0],M=E[1],j=he(I,R),O=o.useState(function(){return i!=null?Ge(i,0,r.length-1):0}),k=O[0],z=O[1];o.useLayoutEffect(function(){i!=null&&k!==i&&z(Ge(i,0,r.length-1))},[i,k,r.length]);var V=o.useState({}),F=V[0],H=V[1];o.useLayoutEffect(function(){if(u!=="default"&&I.current!=null){var X=I.current.children[k],Y=X.getBoundingClientRect();H(jn(jn({},y==="horizontal"&&{"--stripe-width":"".concat(Y.width,"px"),"--stripe-left":"".concat(X.offsetLeft,"px")}),y==="vertical"&&{"--stripe-height":"".concat(Y.height,"px"),"--stripe-top":"".concat(X.offsetTop,"px")}))}},[k,u,y,M]);var W=o.useState(),D=W[0],se=W[1];o.useEffect(function(){if(I.current&&D!==void 0){var X=I.current.querySelectorAll(".iui-tab")[D];X==null||X.focus()}},[D]);var ne=o.useState(!1),U=ne[0],C=ne[1];o.useLayoutEffect(function(){var X;C(u!=="pill"&&!!(!((X=I.current)===null||X===void 0)&&X.querySelector(".iui-tab-description")))},[u]);var G=function(X){s&&s(X),z(X)},oe=function(X){if(!X.altKey){var Y=function(q){var re=r[q];return o.isValidElement(re)&&re.props.disabled},Q=D!=null?D:k,B=function(q){q===void 0&&(q=1);do Q=(Q+q+r.length)%r.length;while(Y(Q)&&Q!==D);se(Q),d==="auto"&&G(Q)};switch(X.key){case"ArrowDown":{y==="vertical"&&(B(1),X.preventDefault());break}case"ArrowRight":{y==="horizontal"&&(B(1),X.preventDefault());break}case"ArrowUp":{y==="vertical"&&(B(-1),X.preventDefault());break}case"ArrowLeft":{y==="horizontal"&&(B(-1),X.preventDefault());break}case"Enter":case" ":case"Spacebar":{X.preventDefault(),d==="manual"&&D!==void 0&&G(D);break}}}},te=!(!((n=(a=(t=He())===null||t===void 0?void 0:t.CSS)===null||a===void 0?void 0:a.supports)===null||n===void 0)&&n.call(a,"--stripe-width","100px"));return o.createElement("div",{className:P("iui-tabs-wrapper","iui-".concat(y),S),style:F},o.createElement("ul",jn({className:P("iui-tabs","iui-".concat(u),{"iui-green":b==="green","iui-animated":u!=="default"&&!te,"iui-not-animated":te,"iui-large":U},h),role:"tablist",ref:j,onKeyDown:oe},T),r.map(function(X,Y){var Q=function(){se(Y),G(Y)};return o.createElement("li",{key:Y},o.isValidElement(X)?o.cloneElement(X,{className:P(X.props.className,{"iui-active":Y===k}),"aria-selected":Y===k,tabIndex:Y===k?0:-1,onClick:function(B){var q,re;Q(),(re=(q=X.props).onClick)===null||re===void 0||re.call(q,B)}}):o.createElement(Ee,{label:X,className:P({"iui-active":Y===k}),tabIndex:Y===k?0:-1,onClick:Q,"aria-selected":Y===k}))})),w&&o.createElement("div",{className:P("iui-tabs-content",v),role:"tabpanel"},w))},Lr=function(e){return o.createElement(Xo,jn({orientation:"horizontal"},e))},lf=function(e){return o.createElement(Xo,jn({orientation:"vertical"},e))};var Xa=globalThis&&globalThis.__assign||function(){return Xa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Xa.apply(this,arguments)},sf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},At=o.forwardRef(function(e,t){var a=e.className,n=e.isOpen,r=n===void 0?!1:n,i=e.orientation,s=i===void 0?"vertical":i,c=e.resizable,d=c===void 0?!0:c,p=e.children,u=sf(e,["className","isOpen","orientation","resizable","children"]);$();var m=o.useRef(null),b=he(t,m),g=function(h){!m.current||h.button!=null&&h.button!==0||(h.preventDefault(),h.stopPropagation(),m.current.ownerDocument.addEventListener("pointermove",y),m.current.ownerDocument.addEventListener("pointerup",function(){var v;return(v=m.current)===null||v===void 0?void 0:v.ownerDocument.removeEventListener("pointermove",y)},{once:!0}))},y=o.useCallback(function(h){if(h.preventDefault(),!!m.current){var v=m.current.getBoundingClientRect(),S=v.right,w=v.bottom;s==="vertical"?m.current.style.width="".concat(S-h.clientX,"px"):m.current.style.height="".concat(w-h.clientY,"px")}},[s]);return o.createElement("div",Xa({className:P("iui-information-panel",{"iui-right":s==="vertical","iui-bottom":s==="horizontal","iui-visible":r},a),ref:b},u),d&&o.createElement("div",{className:"iui-resizer",onPointerDown:g},o.createElement("div",{className:"iui-resizer-bar"})),p)}),Qa=globalThis&&globalThis.__assign||function(){return Qa=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Qa.apply(this,arguments)},cf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},jt=function(e){var t=e.className,a=e.children,n=cf(e,["className","children"]);return $(),o.createElement("div",Qa({className:P("iui-information-panel-wrapper",t)},n),a)},eo=globalThis&&globalThis.__assign||function(){return eo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},eo.apply(this,arguments)},df=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ht=function(e){var t=e.children,a=e.onClose,n=e.actions,r=e.className,i=df(e,["children","onClose","actions","className"]);return $(),o.createElement("div",eo({className:P("iui-information-header",r)},i),o.createElement("span",{className:"iui-information-header-label"},t),o.createElement("div",{className:"iui-information-header-actions"},n,a&&o.createElement(J,{styleType:"borderless",onClick:a,"aria-label":"Close"},o.createElement(vr,{"aria-hidden":!0}))))},no=globalThis&&globalThis.__assign||function(){return no=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},no.apply(this,arguments)},uf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ft=function(e){var t=e.className,a=e.children,n=uf(e,["className","children"]);return $(),o.createElement("div",no({className:P("iui-information-body",t)},n),a)},to=globalThis&&globalThis.__assign||function(){return to=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},to.apply(this,arguments)},mf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ar=function(e){var t=e.className,a=e.displayStyle,n=a===void 0?"default":a,r=e.children,i=mf(e,["className","displayStyle","children"]);return $(),o.createElement("div",to({className:P("iui-information-body-content",{"iui-inline":n==="inline"},t)},i),r)},ro=globalThis&&globalThis.__assign||function(){return ro=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ro.apply(this,arguments)},pf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},We=function(e){var t=e.as,a=t===void 0?"label":t,n=e.displayStyle,r=n===void 0?"block":n,i=e.required,s=e.className,c=e.children,d=pf(e,["as","displayStyle","required","className","children"]);return $(),o.createElement(a,ro({className:P("iui-input-label",{"iui-inline":r==="inline","iui-required":i},s)},d),c)},ao=globalThis&&globalThis.__assign||function(){return ao=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ao.apply(this,arguments)},bf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},$e=o.forwardRef(function(e,t){var a=e.className,n=e.disabled,r=n===void 0?!1:n,i=e.label,s=e.message,c=e.status,d=e.svgIcon,p=e.style,u=e.inputClassName,m=e.inputStyle,b=e.displayStyle,g=b===void 0?"default":b,y=e.iconDisplayStyle,h=y===void 0?g==="default"?"block":"inline":y,v=e.required,S=v===void 0?!1:v,w=bf(e,["className","disabled","label","message","status","svgIcon","style","inputClassName","inputStyle","displayStyle","iconDisplayStyle","required"]);$();var T=d!=null?d:c&&_n[c]();return o.createElement(Ve,{as:"label",label:i,disabled:r,required:S,status:c,message:s,icon:T,isLabelInline:g==="inline",isIconInline:h==="inline",className:a,style:p},o.createElement(ye,ao({disabled:r,className:u,style:m,required:S,ref:t},w)))}),oo=globalThis&&globalThis.__assign||function(){return oo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},oo.apply(this,arguments)},gf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},cn=function(e){var t=e.children,a=e.disabled,n=a===void 0?!1:a,r=e.displayStyle,i=r===void 0?"default":r,s=e.label,c=e.message,d=e.status,p=e.svgIcon,u=e.className,m=e.style,b=e.required,g=b===void 0?!1:b,y=gf(e,["children","disabled","displayStyle","label","message","status","svgIcon","className","style","required"]);$();var h=function(){if(p)return o.cloneElement(p,{"aria-hidden":!0});if(d&&c)return o.cloneElement(_n[d](),{"aria-hidden":!0})};return o.createElement(Ve,oo({label:s,disabled:n,required:g,status:d,message:c,icon:h(),isLabelInline:i==="inline",className:u,style:m},y),o.createElement("div",{className:"iui-input-group"},t))},An=globalThis&&globalThis.__assign||function(){return An=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},An.apply(this,arguments)},ff=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Xe=function(e){var t,a,n=e.options,r=e.value,i=e.onChange,s=e.placeholder,c=e.disabled,d=c===void 0?!1:c,p=e.size,u=e.setFocus,m=u===void 0?!1:u,b=e.itemRenderer,g=e.selectedItemRenderer,y=e.className,h=e.style,v=e.menuClassName,S=e.menuStyle,w=e.onShow,T=e.onHide,I=e.popoverProps,E=ff(e,["options","value","onChange","placeholder","disabled","size","setFocus","itemRenderer","selectedItemRenderer","className","style","menuClassName","menuStyle","onShow","onHide","popoverProps"]);$();var R=o.useState((a=I==null?void 0:I.visible)!==null&&a!==void 0?a:!1),M=R[0],j=R[1];o.useEffect(function(){j(function(C){var G;return(G=I==null?void 0:I.visible)!==null&&G!==void 0?G:C})},[I]);var O=o.useState(0),k=O[0],z=O[1],V=function(){return j(function(C){return!C})},F=o.useRef(null),H=o.useRef(null),W=o.useCallback(function(C){j(!0),w==null||w(C)},[w]),D=o.useCallback(function(C){j(!1),T==null||T(C)},[T]);o.useEffect(function(){F.current&&!d&&m&&F.current.focus()},[m,d]),o.useEffect(function(){F.current&&z(F.current.offsetWidth)},[M]);var se=function(C,G){switch(C.key){case"Enter":case" ":case"Spacebar":G(),C.preventDefault();break}},ne=o.useCallback(function(C){return n.map(function(G,oe){var te=r===G.value,X=b?b(G,{close:C,isSelected:te}):o.createElement(ie,null,G.label);return o.cloneElement(X,An(An({key:"".concat(G.label,"-").concat(oe),isSelected:te,onClick:function(){!G.disabled&&(i==null||i(G.value)),C()},ref:function(Y){return te&&(Y==null?void 0:Y.scrollIntoView())},role:"option"},G),X.props))})},[b,i,n,r]),U=o.useMemo(function(){if(r!=null)return n.find(function(C){return C.value===r})},[n,r]);return o.createElement("div",An({className:P("iui-input-with-icon",y),"aria-expanded":M,"aria-haspopup":"listbox",style:h},E),o.createElement(Me,An({menuItems:ne,placement:"bottom-start",className:P("iui-scroll",v),style:An({minWidth:k,maxWidth:"min(".concat(k*2,"px, 90vw)"),maxHeight:"300px"},S),role:"listbox",onShow:W,onHide:D,disabled:d},I,{visible:M,onClickOutside:function(C,G){var oe,te=G.target;!((oe=H.current)===null||oe===void 0)&&oe.contains(te)||j(!1)}}),o.createElement("div",{ref:F,className:P("iui-select-button",(t={"iui-placeholder":!U&&!!s,"iui-disabled":d},t["iui-".concat(p)]=!!p,t)),onClick:function(){return!d&&V()},onKeyDown:function(C){return!d&&se(C,V)},tabIndex:d?void 0:0},!U&&o.createElement("span",{className:"iui-content"},s),U&&g&&g(U),U&&!g&&o.createElement(o.Fragment,null,(U==null?void 0:U.icon)&&o.cloneElement(U.icon,{className:P(U==null?void 0:U.icon.props.className,"iui-icon")}),o.createElement("span",{className:"iui-content"},U.label)))),o.createElement("span",{ref:H,className:P("iui-end-icon",{"iui-actionable":!d,"iui-disabled":d,"iui-open":M}),onClick:function(){return!d&&V()}},o.createElement(hr,{"aria-hidden":!0})))},io=globalThis&&globalThis.__assign||function(){return io=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},io.apply(this,arguments)},yf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Bn=function(e){var t=e.className,a=e.disabled,n=a===void 0?!1:a,r=e.label,i=e.message,s=e.status,c=e.svgIcon,d=e.displayStyle,p=d===void 0?"default":d,u=e.style,m=e.selectClassName,b=e.selectStyle,g=e.required,y=g===void 0?!1:g,h=yf(e,["className","disabled","label","message","status","svgIcon","displayStyle","style","selectClassName","selectStyle","required"]);$();var v=function(){if(c)return o.cloneElement(c,{"aria-hidden":!0});if(s&&i)return _n[s]()};return o.createElement(Ve,{label:r,disabled:n,required:y,status:s,message:i,icon:p==="default"?v():void 0,isLabelInline:p==="inline",className:t,style:u},o.createElement(Xe,io({disabled:n,className:m,style:b},h)))},lo=globalThis&&globalThis.__assign||function(){return lo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lo.apply(this,arguments)},vf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},$t=o.forwardRef(function(e,t){var a=e.className,n=e.rows,r=n===void 0?3:n,i=e.setFocus,s=i===void 0?!1:i,c=vf(e,["className","rows","setFocus"]);$();var d=o.useRef(null),p=he(t,d);return o.useEffect(function(){d.current&&s&&d.current.focus()},[s]),o.createElement("textarea",lo({className:P("iui-textarea",a),rows:r,ref:p},c))}),so=globalThis&&globalThis.__assign||function(){return so=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},so.apply(this,arguments)},hf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Nn=o.forwardRef(function(e,t){var a=e.className,n=e.style,r=e.disabled,i=r===void 0?!1:r,s=e.label,c=e.message,d=e.status,p=e.textareaClassName,u=e.textareaStyle,m=e.displayStyle,b=m===void 0?"default":m,g=e.iconDisplayStyle,y=g===void 0?b==="default"?"block":"inline":g,h=e.svgIcon,v=e.required,S=v===void 0?!1:v,w=hf(e,["className","style","disabled","label","message","status","textareaClassName","textareaStyle","displayStyle","iconDisplayStyle","svgIcon","required"]);$();var T=h!=null?h:d&&_n[d]();return o.createElement(Ve,{as:"label",label:s,disabled:i,required:S,status:d,message:c,icon:T,isLabelInline:b==="inline",isIconInline:y==="inline",className:a,style:n},o.createElement($t,so({disabled:i,className:p,style:u,required:S},w,{ref:t})))});var co=globalThis&&globalThis.__assign||function(){return co=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},co.apply(this,arguments)},Sf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ut=function(e){var t=e.isOpen,a=t===void 0?!1:t,n=e.isDismissible,r=n===void 0?!0:n,i=e.closeOnEsc,s=i===void 0?!0:i,c=e.closeOnExternalClick,d=c===void 0?!0:c,p=e.onClose,u=e.title,m=e.onKeyDown,b=e.id,g=e.className,y=e.style,h=e.children,v=e.styleType,S=v===void 0?"default":v,w=e.modalRootId,T=w===void 0?"iui-react-portal-container":w,I=e.ownerDocument,E=I===void 0?xr():I,R=Sf(e,["isOpen","isDismissible","closeOnEsc","closeOnExternalClick","onClose","title","onKeyDown","id","className","style","children","styleType","modalRootId","ownerDocument"]);$();var M=Al(T,E),j=o.useRef(null),O=o.useRef(""),k=o.useRef();o.useLayoutEffect(function(){var F,H;a?(k.current=document.activeElement,(F=j.current)===null||F===void 0||F.focus()):(H=k.current)===null||H===void 0||H.focus();var W=j.current;return function(){var D;W!=null&&W.contains(document.activeElement)&&((D=k.current)===null||D===void 0||D.focus())}},[a]),o.useEffect(function(){if(!!E)return a?(O.current=E.body.style.overflow,E.body.style.overflow="hidden"):E.body.style.overflow=O.current,function(){E.body.style.overflow=O.current}},[a,E]);var z=function(F){F.persist(),r&&s&&F.key==="Escape"&&p&&p(F),m&&m(F)},V=function(F){F.persist(),F.target===j.current&&r&&d&&p&&p(F)};return M?yl.createPortal(o.createElement(gl,{in:a,classNames:"iui-modal-animation",timeout:{exit:600},unmountOnExit:!0},o.createElement(Sb,null,o.createElement("div",co({className:P("iui-modal",{"iui-modal-full-page":S==="fullPage"},{"iui-modal-visible":a},g),tabIndex:-1,onKeyDown:z,ref:j,onMouseDown:V},R),o.createElement("div",{className:"iui-modal-dialog",id:b,style:y,role:"dialog","aria-modal":"true"},o.createElement("div",{className:"iui-title-bar"},o.createElement("div",{className:"iui-title"},u),r&&o.createElement(J,{size:"small",styleType:"borderless",onClick:p,"aria-label":"Close"},o.createElement(Sp,null))),h)))),M):o.createElement(o.Fragment,null)},uo=globalThis&&globalThis.__assign||function(){return uo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},uo.apply(this,arguments)},wf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},jr=function(e){var t=e.children,a=e.className,n=wf(e,["children","className"]);return $(),o.createElement("div",uo({className:P("iui-button-bar",a)},n),t)},mo=globalThis&&globalThis.__assign||function(){return mo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mo.apply(this,arguments)},Tf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Hr=function(e){var t=e.children,a=e.className,n=Tf(e,["children","className"]);return $(),o.createElement("div",mo({className:P("iui-modal-content",a)},n),t)},xt=globalThis&&globalThis.__assign||function(){return xt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xt.apply(this,arguments)},Cf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},qe=o.forwardRef(function(e,t){var a,n,r=e.className,i=e.disabled,s=i===void 0?!1:i,c=e.label,d=e.status,p=e.style,u=e.checkmarkClassName,m=e.checkmarkStyle,b=e.setFocus,g=b===void 0?!1:b,y=Cf(e,["className","disabled","label","status","style","checkmarkClassName","checkmarkStyle","setFocus"]);$();var h=o.useRef(null),v=he(h,t);o.useEffect(function(){h.current&&g&&h.current.focus()},[g]);var S=o.createElement("input",xt({className:P("iui-radio",r&&(a={},a[r]=!c,a),u),style:xt(xt({},!c&&p),m),disabled:s,type:"radio",ref:v},y));return c?o.createElement("label",{className:P("iui-radio-wrapper",(n={"iui-disabled":s},n["iui-".concat(d)]=!!d,n),r),style:p},S,c&&o.createElement("span",{className:"iui-radio-label"},c)):S}),po=globalThis&&globalThis.__assign||function(){return po=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},po.apply(this,arguments)},If=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Qo=function(e){var t=e.children,a=e.label,n=If(e,["children","label"]);return $(),o.createElement(cn,po({label:a},n),o.createElement("div",{className:"iui-radio-tile-container"},t))},bo=globalThis&&globalThis.__assign||function(){return bo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},bo.apply(this,arguments)},xf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},In=o.forwardRef(function(e,t){var a=e.icon,n=e.label,r=e.description,i=e.setFocus,s=i===void 0?!1:i,c=e.className,d=e.style,p=xf(e,["icon","label","description","setFocus","className","style"]);$();var u=o.useRef(null),m=he(u,t);return o.useEffect(function(){u.current&&s&&u.current.focus()},[s]),o.createElement("label",{className:c,style:d},o.createElement("input",bo({type:"radio",ref:m},p)),o.createElement("div",{className:"iui-radio-tile"},o.createElement(vl,{className:"iui-checkmark","aria-hidden":!0}),a&&o.cloneElement(a,{className:P("iui-icon",a.props.className)}),n&&o.createElement("div",{className:"iui-label"},n),r&&o.createElement("div",{className:"iui-description"},r)))});var go=globalThis&&globalThis.__assign||function(){return go=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},go.apply(this,arguments)},kf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Fr=function(e){var t=e.items,a=e.secondaryItems,n=e.expanderPlacement,r=n===void 0?"top":n,i=e.className,s=e.isExpanded,c=s===void 0?!1:s,d=e.onExpanderClick,p=e.submenu,u=e.isSubmenuOpen,m=u===void 0?!1:u,b=kf(e,["items","secondaryItems","expanderPlacement","className","isExpanded","onExpanderClick","submenu","isSubmenuOpen"]);$();var g=o.useState(c),y=g[0],h=g[1];o.useEffect(function(){h(c)},[c]);var v=o.createElement(J,{className:"iui-sidenav-button iui-expand",onClick:o.useCallback(function(){h(function(S){return!S}),d==null||d()},[d])},o.createElement(dn,null));return o.createElement("div",go({className:P("iui-side-navigation-wrapper",i)},b),o.createElement("div",{className:P("iui-side-navigation",{"iui-expanded":y,"iui-collapsed":!y})},r==="top"&&v,o.createElement("div",{className:"iui-sidenav-content"},o.createElement("div",{className:"iui-top"},t.map(function(S,w){return y?S:o.createElement(Ze,{content:S.props.children,placement:"right",key:w},S)})),o.createElement("div",{className:"iui-bottom"},a==null?void 0:a.map(function(S,w){return y?S:o.createElement(Ze,{content:S.props.children,placement:"right",key:w},S)}))),r==="bottom"&&v),p&&o.createElement(Fo,{in:m,dimension:"width",timeout:200,classNames:"iui"},p))},fo=globalThis&&globalThis.__assign||function(){return fo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fo.apply(this,arguments)},_f=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},xn=o.forwardRef(function(e,t){var a=e.className,n=e.children,r=e.isActive,i=r===void 0?!1:r,s=e.disabled,c=s===void 0?!1:s,d=e.isSubmenuOpen,p=d===void 0?!1:d,u=_f(e,["className","children","isActive","disabled","isSubmenuOpen"]);return $(),o.createElement(ee,fo({className:P("iui-sidenav-button",{"iui-active":i,"iui-submenu-open":p},a),size:"large",disabled:c,ref:t},u),n)}),yo=globalThis&&globalThis.__assign||function(){return yo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yo.apply(this,arguments)},Of=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ls=o.forwardRef(function(e,t){var a=e.children,n=e.className,r=Of(e,["children","className"]);return $(),o.createElement("div",yo({className:P("iui-side-navigation-submenu",n),ref:t},r),o.createElement("div",{className:"iui-side-navigation-submenu-content"},a))}),vo=globalThis&&globalThis.__assign||function(){return vo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},vo.apply(this,arguments)},Pf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ss=function(e){var t=e.children,a=e.actions,n=e.className,r=Pf(e,["children","actions","className"]);return $(),o.createElement("div",vo({className:P("iui-side-navigation-submenu-header",n)},r),o.createElement("div",{className:"iui-side-navigation-submenu-header-label"},t),a&&o.createElement("div",{className:"iui-side-navigation-submenu-header-actions"},a))};var ho=globalThis&&globalThis.__assign||function(){return ho=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ho.apply(this,arguments)},Bf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ei=o.forwardRef(function(e,t){var a=e.children,n=a===void 0?"Skip to main content":a,r=e.className,i=Bf(e,["children","className"]);return $(),o.createElement("a",ho({ref:t,className:P("iui-skip-to-content-link",r)},i),n)});var kt=globalThis&&globalThis.__assign||function(){return kt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},kt.apply(this,arguments)},Nf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Zr=function(e){switch(e){case 1:return"0 1px 5px rgba(0, 0, 0, 0.25)";case 2:return"0 1px 10px rgba(0, 0, 0, 0.25)";case 3:return"0 3px 14px rgba(0, 0, 0, 0.25)";case 4:return"0 6px 30px rgba(0, 0, 0, 0.25)";case 5:return"0 9px 46px rgba(0, 0, 0, 0.25)";default:return"none"}},cs=o.forwardRef(function(e,t){var a,n,r,i=e.elevation,s=i===void 0?0:i,c=e.className,d=e.style,p=e.children,u=Nf(e,["elevation","className","style","children"]);$();var m=!((r=(n=(a=He())===null||a===void 0?void 0:a.CSS)===null||n===void 0?void 0:n.supports)===null||r===void 0)&&r.call(n,"--iui-surface-elevation: ".concat(Zr(s)))?kt({"--iui-surface-elevation":Zr(s)},d):kt({boxShadow:Zr(s)},d);return o.createElement("div",kt({className:P("iui-surface",c),style:m,ref:t},u),p)});var ds=function(e,t){var a={};if(a.flex="1 1 145px",e.width){var n=typeof e.width=="string"?e.width:"".concat(e.width,"px");a.width=n,t&&e.canResize?a.flex="".concat(Number(e.width)," ").concat(Number(e.width)," ").concat(n):a.flex="0 0 ".concat(n)}return e.maxWidth&&(a.maxWidth="".concat(e.maxWidth,"px")),e.minWidth&&(a.minWidth="".concat(e.minWidth,"px")),a},Ef=function(e){var t=e.cell,a=e.isDisabled,n=e.cellProps,r=e.expanderCell;return o.createElement(o.Fragment,null,r?r(n):o.createElement(J,{style:{marginRight:8},className:"iui-row-expander",styleType:"borderless",size:"small",onClick:function(i){i.stopPropagation(),t.row.toggleRowExpanded()},disabled:a},o.createElement(dn,{style:{transform:t.row.isExpanded?"rotate(90deg)":void 0}})))},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_t.apply(this,arguments)},al=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},zt=function(e){var t=e.cellElementProps,a=t.className,n=t.style,r=al(t,["className","style"]),i=e.children,s=e.cellProps,c=e.isDisabled,d=e.className,p=e.style,u=al(e,["cellElementProps","children","cellProps","isDisabled","className","style"]);return o.createElement("div",_t({},r,u,{className:P(a,d,{"iui-disabled":c==null?void 0:c(s.row.original)}),style:_t(_t({},n),p)}),i)},So=globalThis&&globalThis.__assign||function(){return So=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},So.apply(this,arguments)},Df=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Rf=function(e){var t=e.cellElementProps,a=e.cellProps,n=e.onCellEdit,r=e.children;e.isDisabled;var i=Df(e,["cellElementProps","cellProps","onCellEdit","children","isDisabled"]),s=function(g){return g.replace(/(\r\n|\n|\r)+/gm," ")},c=o.useState(function(){return s(a.value)}),d=c[0],p=c[1];o.useEffect(function(){p(s(a.value))},[a.value]);var u=o.useState(!1),m=u[0],b=u[1];return o.createElement("div",So({},t,{contentEditable:!0,suppressContentEditableWarning:!0},i,{onInput:function(g){var y;p(s(g.target.innerText)),b(!0),(y=e.onInput)===null||y===void 0||y.call(e,g)},onBlur:function(g){var y;m&&n(a.column.id,d,a.row.original),(y=e.onBlur)===null||y===void 0||y.call(e,g)},onKeyDown:function(g){var y;g.key==="Enter"&&g.preventDefault(),(y=e.onKeyDown)===null||y===void 0||y.call(e,g)},onPaste:function(g){var y;g.preventDefault(),document.execCommand("inserttext",!1,s(g.clipboardData.getData("text/plain"))),(y=e.onPaste)===null||y===void 0||y.call(e,g)},onDrop:function(g){var y;g.preventDefault(),(y=e.onDrop)===null||y===void 0||y.call(e,g)},onClick:function(g){var y;g.stopPropagation(),(y=e.onClick)===null||y===void 0||y.call(e,g)}}),r)},Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ot.apply(this,arguments)},Wt="iui-table-checkbox-selector",us=function(e){e===void 0&&(e={});var t=e.isDisabled;return{id:Wt,disableResizing:!0,disableGroupBy:!0,disableReordering:!0,minWidth:48,width:48,maxWidth:48,columnClassName:"iui-slot",cellClassName:"iui-slot",Header:function(a){var n=a.getToggleAllRowsSelectedProps,r=a.rows,i=a.initialRows,s=a.state,c=r.every(function(p){return t==null?void 0:t(p.original)}),d=i.every(function(p){return s.selectedRowIds[p.id]||(t==null?void 0:t(p.original))});return o.createElement(Re,Ot({},n(),{style:{},checked:d&&!c,indeterminate:!d&&Object.keys(s.selectedRowIds).length>0,disabled:c}))},Cell:function(a){var n=a.row;return o.createElement(Re,Ot({},n.getToggleRowSelectedProps(),{style:{},disabled:t==null?void 0:t(n.original),onClick:function(r){return r.stopPropagation()}}))},cellRenderer:function(a){return o.createElement(zt,Ot({},a,{isDisabled:function(n){return!!(t!=null&&t(n))}}))}}},wo=globalThis&&globalThis.__assign||function(){return wo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wo.apply(this,arguments)},ni="iui-table-expander",ms=function(e){e===void 0&&(e={});var t=e.subComponent,a=e.isDisabled;return{id:ni,disableResizing:!0,disableGroupBy:!0,disableReordering:!0,minWidth:48,width:48,maxWidth:48,columnClassName:"iui-slot",cellClassName:"iui-slot",Cell:function(n){var r=n.row;return t!=null&&t(r)?o.createElement(J,{className:"iui-row-expander",styleType:"borderless",size:"small",onClick:function(i){i.stopPropagation(),r.toggleRowExpanded()},disabled:a==null?void 0:a(n.row.original)},o.createElement(dn,null)):null},cellRenderer:function(n){return o.createElement(zt,wo({},n,{isDisabled:function(r){return!!(a!=null&&a(r))}}))}}},ol="iui-table-action",ps=function(e){var t=e===void 0?{}:e,a=t.columnManager,n=a===void 0?!1:a;return{id:ol,disableResizing:!0,disableGroupBy:!0,minWidth:48,width:48,maxWidth:48,columnClassName:"iui-slot",cellClassName:"iui-slot",disableReordering:!0,Header:function(r){var i=r.allColumns,s=r.dispatch,c=r.state,d=o.useState(!1),p=d[0],u=d[1];if(!n)return null;var m=[Wt,ni,ol],b=function(){return i.filter(function(g){var y=g.id;return!m.includes(y)}).map(function(g){var y=g.getToggleHiddenProps().checked,h=function(){g.toggleHidden(y),Object.keys(c.columnResizing.columnWidths).length!==0&&s({type:xo})};return o.createElement(ie,{key:g.id,icon:o.createElement(Re,{checked:y,disabled:g.disableToggleVisibility,onClick:function(v){return v.stopPropagation()},onChange:h,"aria-labelledby":"iui-column-".concat(g.id)}),onClick:h,disabled:g.disableToggleVisibility},o.createElement("div",{id:"iui-column-".concat(g.id)},g.render("Header")))})};return o.createElement(Me,{menuItems:b,onHide:function(){return u(!1)},onShow:function(){return u(!0)}},o.createElement(J,{styleType:"borderless",isActive:p},o.createElement(wp,null)))}}},fn=globalThis&&globalThis.__assign||function(){return fn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fn.apply(this,arguments)},Mf=function(e){var t=e.cell,a=e.cellIndex,n=e.isDisabled,r=e.tableHasSubRows,i=e.tableInstance,s=e.expanderCell,c=a===t.row.cells.findIndex(function(g){return g.column.id!==Wt}),d=function(){if(!(!r||!c))return{paddingLeft:16+(t.row.depth+(t.row.canExpand?0:1))*35}},p=t.getCellProps({className:P("iui-cell",t.column.cellClassName),style:fn(fn({},ds(t.column,!!i.state.isTableResizing)),d())}),u=fn(fn({},i),{cell:t,row:t.row,value:t.value,column:t.column}),m=o.createElement(o.Fragment,null,r&&c&&t.row.canExpand&&o.createElement(Ef,{cell:t,isDisabled:n,cellProps:u,expanderCell:s}),t.render("Cell")),b={cellElementProps:p,cellProps:u,children:m};return o.createElement(o.Fragment,null,t.column.cellRenderer?t.column.cellRenderer(fn(fn({},b),{isDisabled:function(){return n}})):o.createElement(zt,fn({},b,{isDisabled:function(){return n}})))},et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},et.apply(this,arguments)},Lf=function(e){var t=e.row,a=e.rowProps,n=e.isLast,r=e.onRowInViewport,i=e.onBottomReached,s=e.intersectionMargin,c=e.onClick,d=e.subComponent,p=e.isDisabled,u=e.tableHasSubRows,m=e.tableInstance,b=e.expanderCell,g=o.useCallback(function(){var w,T;(w=r.current)===null||w===void 0||w.call(r,t.original),n&&((T=i.current)===null||T===void 0||T.call(i))},[n,i,r,t.original]),y=Ul(g,{rootMargin:"".concat(s,"px")}),h=a==null?void 0:a(t),v=et(et(et({},t.getRowProps({style:{flex:"0 0 auto",minWidth:"100%"}})),h),{className:P("iui-row",{"iui-selected":t.isSelected,"iui-row-expanded":t.isExpanded&&d,"iui-disabled":p},h==null?void 0:h.className)}),S=he(y,v.ref);return o.createElement(o.Fragment,null,o.createElement("div",et({},v,{ref:S,onClick:function(w){var T;(T=v==null?void 0:v.onClick)===null||T===void 0||T.call(v,w),c==null||c(w,t)}}),t.cells.map(function(w,T){return o.createElement(Mf,{key:w.getCellProps().key,cell:w,cellIndex:T,isDisabled:p,tableHasSubRows:u,tableInstance:m,expanderCell:b})})),d&&o.createElement(Fo,{in:t.isExpanded},o.createElement("div",{className:P("iui-row","iui-expanded-content",{"iui-disabled":p})},d(t))))},To=function(e,t){return t!=null&&t[e.id]?!0:e.subRows.some(function(a){return To(a,t)})},Af=o.memo(Lf,function(e,t){var a,n,r,i,s,c,d;return e.isLast===t.isLast&&((a=e.state.hiddenColumns)===null||a===void 0?void 0:a.length)===((n=t.state.hiddenColumns)===null||n===void 0?void 0:n.length)&&!!(!((r=e.state.hiddenColumns)===null||r===void 0)&&r.every(function(p,u){var m;return((m=t.state.hiddenColumns)===null||m===void 0?void 0:m[u])===p}))&&e.onRowInViewport===t.onRowInViewport&&e.onBottomReached===t.onBottomReached&&e.onClick===t.onClick&&e.row.original===t.row.original&&((i=e.state.selectedRowIds)===null||i===void 0?void 0:i[e.row.id])===((s=t.state.selectedRowIds)===null||s===void 0?void 0:s[t.row.id])&&e.row.subRows.some(function(p){return To(p,e.state.selectedRowIds)})===t.row.subRows.some(function(p){return To(p,t.state.selectedRowIds)})&&((c=e.state.expanded)===null||c===void 0?void 0:c[e.row.id])===((d=t.state.expanded)===null||d===void 0?void 0:d[t.row.id])&&e.subComponent===t.subComponent&&e.row.cells.every(function(p,u){return t.row.cells[u].column===p.column})&&e.isDisabled===t.isDisabled&&e.rowProps===t.rowProps&&e.expanderCell===t.expanderCell&&e.tableHasSubRows===t.tableHasSubRows&&e.state.columnOrder===t.state.columnOrder&&!t.state.columnResizing.isResizingColumn&&e.state.isTableResizing===t.state.isTableResizing}),ti=function(e){var t=e.children,a=e.className,n=e.style,r=e.id;return $(),o.createElement("div",{className:P("iui-column-filter",a),style:n,onClick:function(i){i.stopPropagation()},id:r},t)},lr=globalThis&&globalThis.__assign||function(){return lr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},lr.apply(this,arguments)},jf={filter:"Filter",clear:"Clear"},ri=function(e){var t=e.children,a=e.setFilter,n=e.clearFilter,r=e.translatedLabels,i=e.className,s=e.style,c=e.id,d=lr(lr({},jf),r);return $(),o.createElement("div",{className:P("iui-button-bar",i),style:s,id:c},t,o.createElement(ee,{styleType:"high-visibility",onClick:a},d.filter),o.createElement(ee,{onClick:n},d.clear))},Co=globalThis&&globalThis.__assign||function(){return Co=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Co.apply(this,arguments)},Hf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ff=function(e){var t=e.onChange,a=e.date,n=e.parseInput,r=e.formatDate,i=Hf(e,["onChange","date","parseInput","formatDate"]),s=o.useRef(null),c=o.useState(""),d=c[0],p=c[1];o.useEffect(function(){a&&!isNaN(a.valueOf())&&p(r(a))},[a,r]);var u=o.useState(!1),m=u[0],b=u[1],g=o.useCallback(function(){return b(!1)},[]),y=o.useCallback(function(v){var S;t(v),g(),(S=s.current)===null||S===void 0||S.focus()},[g,t]),h=o.useCallback(function(v){var S=v.target.value;p(S),S||t(void 0);var w=n(S);w&&!isNaN(w.valueOf())&&t(w)},[t,n]);return o.createElement(hn,{content:o.createElement(ct,{date:a,onChange:y,setFocus:!0}),placement:"bottom",visible:m,onClickOutside:function(v,S){var w;!((w=s.current)===null||w===void 0)&&w.contains(S.target)||g()},appendTo:"parent"},o.createElement($e,Co({displayStyle:"inline",value:d,onChange:h,onClick:g,svgIcon:o.createElement(J,{styleType:"borderless",onClick:function(){return b(function(v){return!v})},ref:s},o.createElement(Tp,null))},i)))},il=Ff,sr=globalThis&&globalThis.__assign||function(){return sr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},sr.apply(this,arguments)},$f={from:"From",to:"To"},Uf=function(e){var t=new Intl.DateTimeFormat("en-us",{month:"short",day:"numeric",year:"numeric"});return t.format(e)},zf=function(e){return/^[a-z]{3}\s\d{1,2},\s\d{4}$/gi.test(e)?new Date(e):new Date("")},Wf=function(e){var t,a,n,r,i=e.column,s=e.translatedLabels,c=e.setFilter,d=e.clearFilter,p=e.formatDate,u=p===void 0?Uf:p,m=e.parseInput,b=m===void 0?zf:m,g=e.placeholder,y=g===void 0?"MMM dd, yyyy":g;$();var h=sr(sr({},$f),s),v=o.useState(!((t=i.filterValue)===null||t===void 0)&&t[0]?new Date((a=i.filterValue)===null||a===void 0?void 0:a[0]):void 0),S=v[0],w=v[1],T=o.useCallback(function(O){w(function(k){return k||!O?O:new Date(O.getFullYear(),O.getMonth(),O.getDate(),0,0,0,0)})},[]),I=o.useState(!((n=i.filterValue)===null||n===void 0)&&n[1]?new Date((r=i.filterValue)===null||r===void 0?void 0:r[1]):void 0),E=I[0],R=I[1],M=o.useCallback(function(O){R(function(k){return k||!O?O:new Date(O.getFullYear(),O.getMonth(),O.getDate(),23,59,59,999)})},[]),j=function(O){O.key==="Enter"&&c([S,E])};return o.createElement(ti,null,o.createElement(il,{label:h.from,date:S,onChange:T,formatDate:u,parseInput:b,onKeyDown:j,placeholder:y,setFocus:!0}),o.createElement(il,{label:h.to,date:E,onChange:M,formatDate:u,parseInput:b,onKeyDown:j,placeholder:y}),o.createElement(ri,{setFilter:function(){return c([S,E])},clearFilter:d,translatedLabels:s}))},cr=globalThis&&globalThis.__assign||function(){return cr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},cr.apply(this,arguments)},Vf={from:"From",to:"To"},Gf=function(e){var t,a,n,r,i=e.column,s=e.translatedLabels,c=e.setFilter,d=e.clearFilter;$();var p=cr(cr({},Vf),s),u=o.useState((a=(t=i.filterValue)===null||t===void 0?void 0:t[0])!==null&&a!==void 0?a:""),m=u[0],b=u[1],g=o.useState((r=(n=i.filterValue)===null||n===void 0?void 0:n[1])!==null&&r!==void 0?r:""),y=g[0],h=g[1],v=function(w){return!w||isNaN(Number(w))?void 0:Number(w)},S=function(w){w.key==="Enter"&&c([v(m),v(y)])};return o.createElement(ti,null,o.createElement($e,{label:p.from,value:m,onChange:function(w){return b(w.target.value)},onKeyDown:S,type:"number",displayStyle:"inline",setFocus:!0}),o.createElement($e,{label:p.to,value:y,onChange:function(w){return h(w.target.value)},type:"number",displayStyle:"inline",onKeyDown:S}),o.createElement(ri,{setFilter:function(){return c([v(m),v(y)])},clearFilter:d,translatedLabels:s}))},qf=function(e){var t,a=e.column,n=e.translatedLabels,r=e.setFilter,i=e.clearFilter;$();var s=o.useState((t=a.filterValue)!==null&&t!==void 0?t:""),c=s[0],d=s[1],p=function(u){u.key==="Enter"&&r(c)};return o.createElement(ti,null,o.createElement(ye,{value:c,onChange:function(u){return d(u.target.value)},onKeyDown:p,setFocus:!0}),o.createElement(ri,{setFilter:function(){return r(c)},clearFilter:i,translatedLabels:n}))},Pt=globalThis&&globalThis.__assign||function(){return Pt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pt.apply(this,arguments)},Ne={TextFilter:function(e){return function(t){return o.createElement(qf,Pt({},t,{translatedLabels:e}))}},DateRangeFilter:function(e){return function(t){return o.createElement(Wf,Pt({},t,e))}},NumberRangeFilter:function(e){return function(t){return o.createElement(Gf,Pt({},t,{translatedLabels:e}))}}},Io=globalThis&&globalThis.__assign||function(){return Io=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Io.apply(this,arguments)},Kf=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Jf=function(e){var t=e.column,a=e.ownerDocument,n=a===void 0?xr():a,r=e.className,i=Kf(e,["column","ownerDocument","className"]);$();var s=o.useState(!1),c=s[0],d=s[1],p=o.useCallback(function(){return d(!1)},[]),u=o.useCallback(function(g){t.setFilter(g),p()},[p,t]),m=o.useCallback(function(){t.setFilter(void 0),p()},[p,t]),b=t.filterValue!=null&&t.filterValue!=="";return o.createElement(o.Fragment,null,t.canFilter&&t.Filter&&o.createElement(hn,{content:t.render("Filter",{close:p,setFilter:u,clearFilter:m}),placement:"bottom-start",visible:c,onClickOutside:p,appendTo:n==null?void 0:n.body},o.createElement(J,Io({styleType:"borderless",isActive:c||b,className:P("iui-filter-button",r),onClick:function(g){d(function(y){return!y}),g.stopPropagation()}},i),b?o.createElement(Cp,null):o.createElement(Ip,null))))},dr=function(e){return!!e&&!isNaN(e.valueOf())},bs=function(e,t,a){var n=a||[],r=n[0],i=n[1],s=864e13,c=dr(r)?r:new Date(-s),d=dr(i)?i:new Date(s);return e.filter(function(p){return t.some(function(u){var m=p.values[u];return m.valueOf()>=c.valueOf()&&m.valueOf()<=d.valueOf()})})};bs.autoRemove=function(e){return!e||!dr(e[0])&&!dr(e[1])};var Yf={betweenDate:bs},ur=globalThis&&globalThis.__assign||function(){return ur=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ur.apply(this,arguments)},Zf=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},Xf=function(e,t,a){return function(n){!e||n.allColumns.push(function(r){var i=r.find(function(c){return c.id===ni});if(i)return r;var s=ms({subComponent:e,isDisabled:a});return Zf([ur(ur({},s),{Cell:t!=null?t:s.Cell})],r,!0)})}},Qf=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},ey=function(e,t,a){return function(n){!e||n.allColumns.push(function(r){return t==="single"||r.find(function(i){return i.id===Wt})?r:Qf([us({isDisabled:a})],r,!0)})}},gs=function(e,t,a){return e=e.filter(function(n){return t.some(function(r){var i=n.values[r];return String(i).toLowerCase().includes(String(a).toLowerCase())})}),e};gs.autoRemove=function(e){return!e};var fs=function(e,t,a){return e.filter(function(n){return t.some(function(r){var i=n.values[r];return i!==void 0?String(i).toLowerCase()===String(a).toLowerCase():!0})})};fs.autoRemove=function(e){return!e};var ys=function(e,t,a){return e.filter(function(n){return t.some(function(r){var i=n.values[r];return i!==void 0?String(i)===String(a):!0})})};ys.autoRemove=function(e){return!e};var vs=function(e,t,a){return e.filter(function(n){return t.some(function(r){var i=n.values[r];return i.includes(a)})})};vs.autoRemove=function(e){return!e||!e.length};var hs=function(e,t,a){return e.filter(function(n){return t.some(function(r){var i=n.values[r];return i&&i.length&&a.every(function(s){return i.includes(s)})})})};hs.autoRemove=function(e){return!e||!e.length};var Ss=function(e,t,a){return e.filter(function(n){return t.some(function(r){var i=n.values[r];return i&&i.length&&a.some(function(s){return i.includes(s)})})})};Ss.autoRemove=function(e){return!e||!e.length};var ws=function(e,t,a){return e.filter(function(n){return t.some(function(r){var i=n.values[r];return a.includes(i)})})};ws.autoRemove=function(e){return!e||!e.length};var Ts=function(e,t,a){var n=a||[],r=n[0],i=n[1];if(r=typeof r=="number"?r:-1/0,i=typeof i=="number"?i:1/0,r>i){var s=r;r=i,i=s}return e.filter(function(c){return t.some(function(d){var p=c.values[d];return p>=r&&p<=i})})};Ts.autoRemove=function(e){return!e||typeof e[0]!="number"&&typeof e[1]!="number"};var ny={text:gs,exactText:fs,exactTextCase:ys,includes:vs,includesAll:hs,includesSome:Ss,includesValue:ws,between:Ts},mr=globalThis&&globalThis.__assign||function(){return mr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},mr.apply(this,arguments)},ty=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},ry=function(e){return function(t){t.useInstance.push(ay.bind({},e))}},ay=function(e,t){var a=function(u){u.forEach(function(m){m.initialSubRows||(m.initialSubRows=m.subRows),a(m.subRows)})};a(t.initialRows);var n=o.useMemo(function(){if(!e)return{};var u=function(v){v.forEach(function(S){var w;S.subRows=(w=S.initialSubRows)!==null&&w!==void 0?w:[],u(S.subRows)})};u(t.initialRows);var m=ty([],t.initialRows,!0);t.state.filters.forEach(function(v){var S,w=v.id,T=v.value,I=t.allColumns.find(function(M){return M.id===w});if(!!I){var E=mr(mr({},ny),t.filterTypes),R=typeof I.filter=="function"?I.filter:E[(S=I.filter)!==null&&S!==void 0?S:"text"];m=m.filter(function(M){return Cs(M,R,w,T)})}});var b=[],g=[],y={},h=function(v){v.depth===0&&b.push(v),g.push(v),y[v.id]=v,v.subRows.length&&v.subRows.forEach(function(S){return h(S)})};return m.forEach(function(v){return h(v)}),{filteredRows:b,filteredFlatRows:g,filteredRowsById:y}},[t.allColumns,t.filterTypes,t.initialRows,t.state.filters,e]),r=n.filteredRows,i=r===void 0?t.filteredRows:r,s=n.filteredFlatRows,c=s===void 0?t.filteredFlatRows:s,d=n.filteredRowsById,p=d===void 0?t.filteredRowsById:d;Object.assign(t,{filteredRows:i,filteredFlatRows:c,filteredRowsById:p,rows:i,flatRows:c,rowsById:p})},Cs=function(e,t,a,n){var r=!1;if(e.subRows=e.initialSubRows.filter(function(s){var c=Cs(s,t,a,n);return c&&(r=!0),c}),r)return!0;var i=t([e],[a],n);return!!i.length},oy=function(e){e.useInstance.push(iy)},iy=function(e){var t=o.useMemo(function(){var a=[],n=function(r,i){var s=!1;r.subRows.forEach(function(c){n(c,i),(c.isSelected||c.isSomeSelected)&&(s=!0)}),i[r.id]?(r.isSelected=!0,r.isSomeSelected=!1,a.push(r)):(r.isSelected=!1,r.isSomeSelected=s)};return e.rows.forEach(function(r){return n(r,e.state.selectedRowIds)}),a},[e.rows,e.state.selectedRowIds]);Object.assign(e,{selectedFlatRows:t})},_e=globalThis&&globalThis.__assign||function(){return _e=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_e.apply(this,arguments)},Is=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},xs=function(e){return function(t){t.getResizerProps=[ly(e)],t.stateReducers.push(sy),t.useInstanceBeforeDimensions.push(cy)}},Xr=function(e){return e.type==="touchstart"},ly=function(e){return function(t,a){var n=a.instance,r=a.header,i=a.nextHeader;if(!e)return t;var s=n.dispatch,c=n.flatHeaders,d=function(p,u){if(!(Xr(p)&&p.touches&&p.touches.length>1)){c.forEach(function(T){T.width||(T.width=T.resizeWidth)});var m=cl(u).map(function(T){return[T.id,T.width]}),b=i?cl(i).map(function(T){return[T.id,T.width]}):[],g=Xr(p)?Math.round(p.touches[0].clientX):p.clientX,y=function(T){return s({type:fe.exports.actions.columnResizing,clientX:T})},h=function(){return s({type:fe.exports.actions.columnDoneResizing})},v={mouse:{moveEvent:"mousemove",moveHandler:function(T){return y(T.clientX)},upEvent:"mouseup",upHandler:function(){e.removeEventListener("mousemove",v.mouse.moveHandler),e.removeEventListener("mouseup",v.mouse.upHandler),h()}},touch:{moveEvent:"touchmove",moveHandler:function(T){T.cancelable&&(T.preventDefault(),T.stopPropagation()),y(T.touches[0].clientX)},upEvent:"touchend",upHandler:function(){e.removeEventListener(v.touch.moveEvent,v.touch.moveHandler),e.removeEventListener(v.touch.upEvent,v.touch.moveHandler),h()}}},S=Xr(p)?v.touch:v.mouse,w=my()?{passive:!1}:!1;e.addEventListener(S.moveEvent,S.moveHandler,w),e.addEventListener(S.upEvent,S.upHandler,w),s({type:fe.exports.actions.columnStartResizing,columnId:u.id,columnWidth:u.width,nextColumnWidth:i==null?void 0:i.width,headerIdWidths:m,nextHeaderIdWidths:b,clientX:g})}};return[t,{onClick:function(p){p.stopPropagation()},onMouseDown:function(p){p.persist(),p.preventDefault(),d(p,r)},onTouchStart:function(p){p.persist(),p.preventDefault(),d(p,r)},style:{cursor:"col-resize"},draggable:!1,role:"separator"}]}};xs.pluginName="useResizeColumns";var sy=function(e,t,a,n){if(t.type===fe.exports.actions.init)return _e(_e({},e),{columnResizing:{columnWidths:{}}});if(t.type===fe.exports.actions.resetResize)return _e(_e({},e),{columnResizing:{columnWidths:{}}});if(t.type===fe.exports.actions.columnStartResizing){var r=t.clientX,i=t.columnId,s=t.columnWidth,c=t.nextColumnWidth,d=t.headerIdWidths,p=t.nextHeaderIdWidths;return _e(_e({},e),{columnResizing:_e(_e({},e.columnResizing),{startX:r,columnWidth:s,nextColumnWidth:c,headerIdWidths:d,nextHeaderIdWidths:p,isResizingColumn:i})})}if(t.type===fe.exports.actions.columnResizing){var r=t.clientX,u=e.columnResizing,m=u.startX,b=m===void 0?0:m,g=u.columnWidth,s=g===void 0?1:g,y=u.nextColumnWidth,c=y===void 0?1:y,h=u.headerIdWidths,d=h===void 0?[]:h,v=u.nextHeaderIdWidths,p=v===void 0?[]:v,S=r-b,w=ll(d,S/s),T=ll(p,-S/c);return!sl(w,n==null?void 0:n.flatHeaders)||!sl(T,n==null?void 0:n.flatHeaders)?e:_e(_e({},e),{columnResizing:_e(_e({},e.columnResizing),{columnWidths:_e(_e(_e({},e.columnResizing.columnWidths),w),T)})})}return t.type===fe.exports.actions.columnDoneResizing?_e(_e({},e),{columnResizing:_e(_e({},e.columnResizing),{startX:void 0,isResizingColumn:void 0})}):e},ll=function(e,t){var a={};return e.forEach(function(n){var r=n[0],i=n[1];a[r]=Math.max(i+i*t,0)}),a},sl=function(e,t){if(Object.values(e).some(function(p){return p<=1}))return!1;for(var a=function(p,u){var m=t==null?void 0:t.find(function(y){return y.id===p});if(!m)return"continue";var b=m.minWidth||0,g=m.maxWidth||1/0;if(u<b||u>g)return{value:!1}},n=0,r=Object.entries(e);n<r.length;n++){var i=r[n],s=i[0],c=i[1],d=a(s,c);if(typeof d=="object")return d.value}return!0},cy=function(e){var t=e.flatHeaders,a=e.getHooks,n=e.state.columnResizing,r=fe.exports.useGetLatest(e);t.forEach(function(i,s){var c,d=n.columnWidths[i.id];i.width=d||i.width||i.originalWidth,i.isResizing=n.isResizingColumn===i.id;var p=i.disableResizing?dy(i,e):i,u=uy(i,e);i.canResize=i.disableResizing!=null?!i.disableResizing:!0,i.isResizerVisible=i.canResize&&!!u||p&&!!(!((c=e.flatHeaders[s+1])===null||c===void 0)&&c.canResize),i.getResizerProps=fe.exports.makePropGetter(a().getResizerProps,{instance:r(),header:p,nextHeader:u})})},dy=function(e,t){var a,n=(((a=e.parent)===null||a===void 0?void 0:a.columns)||t.flatHeaders).filter(function(i){var s=i.isVisible;return s}),r=n.findIndex(function(i){return i.id===e.id});return Is([],n,!0).slice(0,r).reverse().find(function(i){return!i.disableResizing})},uy=function(e,t){var a,n=(((a=e.parent)===null||a===void 0?void 0:a.columns)||t.flatHeaders).filter(function(i){var s=i.isVisible;return s}),r=n.findIndex(function(i){return i.id===e.id});return Is([],n,!0).slice(r+1).find(function(i){return!i.disableResizing})};function cl(e){var t=[],a=function(n){n.columns&&n.columns.length&&n.columns.map(a),t.push(n)};return a(e),t}var vt=null,my=function(){if(vt!=null)return vt;try{var e={once:!0,get passive(){return vt=!0,!1}};window.addEventListener("test",function(){},e)}catch{vt=!1}return vt},wn=globalThis&&globalThis.__assign||function(){return wn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},wn.apply(this,arguments)},py=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},pr={columnDragStart:"columnDragStart",columnDragEnd:"columnDragEnd"},by=function(e){return function(t){t.getDragAndDropProps=[gy(e)],t.stateReducers.push(fy),t.useInstance.push(yy)}},gy=function(e){return function(t,a){var n=a.instance,r=a.header;if(!e||r.disableReordering)return t;var i=function(){n.dispatch({type:pr.columnDragStart,columnIndex:n.flatHeaders.indexOf(r)})},s=function(m,b){var g=m.currentTarget;g.classList.remove("iui-reorder-column-right"),g.classList.remove("iui-reorder-column-left"),b==="left"?g.classList.add("iui-reorder-column-left"):b==="right"&&g.classList.add("iui-reorder-column-right")},c=function(m,b,g){var y=py([],m,!0),h=y.splice(b,1)[0];return y.splice(g,0,h),y},d=function(m){m.preventDefault();var b=n.flatHeaders.indexOf(r);n.state.columnReorderStartIndex!==b&&s(m,n.state.columnReorderStartIndex>b?"left":"right")},p=function(m){s(m)},u=function(m){m.preventDefault(),s(m);var b=n.flatHeaders.map(function(h){return h.id}),g=n.state.columnReorderStartIndex,y=b.findIndex(function(h){return h===r.id});g===y||g===-1||y===-1||(n.setColumnOrder(c(b,g,y)),n.dispatch({type:pr.columnDragEnd,columnIndex:-1}))};return[t,{draggable:!0,onDragStart:i,onDragOver:d,onDragLeave:p,onDrop:u}]}},fy=function(e,t){switch(t.type){case fe.exports.actions.init:return wn(wn({},e),{columnReorderStartIndex:-1});case pr.columnDragStart:return wn(wn({},e),{columnReorderStartIndex:t.columnIndex});case pr.columnDragEnd:return wn(wn({},e),{columnReorderStartIndex:-1});default:return e}},yy=function(e){var t=e.flatHeaders,a=e.getHooks,n=fe.exports.useGetLatest(e);t.forEach(function(r){r.getDragAndDropProps=fe.exports.makePropGetter(a().getDragAndDropProps,{instance:n(),header:r})})},vy=function(e,t,a){if(!(t!=null&&t.preFilteredFlatRows.length)){a==null||a([],e);return}var n=[];t.preFilteredFlatRows.forEach(function(r){e.expanded[r.id]&&n.push(r.original)}),a==null||a(n,e)},hy=function(e,t,a,n,r){var i=a.filters.find(function(c){return c.id===t.columnId});if((i==null?void 0:i.value)!=t.filterValue){var s=e.filters.map(function(c){var d,p,u=n==null?void 0:n.allColumns.find(function(m){return m.id===c.id});return{id:c.id,value:c.value,fieldType:(d=u==null?void 0:u.fieldType)!==null&&d!==void 0?d:"text",filterType:(p=u==null?void 0:u.filter)!==null&&p!==void 0?p:"text"}});r==null||r(s,e)}},br=globalThis&&globalThis.__assign||function(){return br=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},br.apply(this,arguments)},ks=function(e,t,a,n){if(!(t!=null&&t.rows.length)){a==null||a([],e);return}var r={},i=function(c){if(n!=null&&n(c.original))return!1;var d=!0;return c.initialSubRows.forEach(function(p){var u=i(p);u||(d=!1)}),(!t.selectSubRows&&e.selectedRowIds[c.id]||!c.initialSubRows.length&&e.selectedRowIds[c.id]||c.initialSubRows.length&&d)&&(r[c.id]=!0),!!r[c.id]};t.initialRows.forEach(function(c){return i(c)});var s=wy(r,t);e.selectedRowIds=r,a==null||a(s,e)},Sy=function(e,t,a,n,r){var i,s=(i={},i[t.id]=!0,i);if(a!=null&&a.selectSubRows){var c=function(p){s[p.id]=!0,p.subRows.forEach(function(u){return c(u)})};c(a.rowsById[t.id])}var d=br(br({},e),{selectedRowIds:s});return ks(d,a,n,r),d},wy=function(e,t){var a=[],n=function(r){e[r.id]&&a.push(r.original),r.initialSubRows.forEach(function(i){return n(i)})};return t==null||t.initialRows.forEach(function(r){return n(r)}),a},yn=globalThis&&globalThis.__assign||function(){return yn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yn.apply(this,arguments)},Ty=function(e){return yn(yn({},e),{isTableResizing:!0})},Cy=function(e,t){return yn(yn({},e),{isTableResizing:!1,columnResizing:yn(yn({},e.columnResizing),{columnWidths:yn({},t.columnWidths)})})},Ue=globalThis&&globalThis.__assign||function(){return Ue=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ue.apply(this,arguments)},Iy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},dl="singleRowSelected",xo="tableResizeStart",ul="tableResizeEnd",_s=function(e){var t=[];return e.forEach(function(a){t.push(a),a.columns&&t.push.apply(t,_s(a.columns))}),t},ve=function(e){var t,a=e.data,n=e.columns,r=e.isLoading,i=r===void 0?!1:r,s=e.emptyTableContent,c=e.className,d=e.style,p=e.id,u=e.isSelectable,m=u===void 0?!1:u,b=e.onSelect,g=e.onRowClick,y=e.selectionMode,h=y===void 0?"multi":y,v=e.isSortable,S=v===void 0?!1:v,w=e.onSort,T=e.stateReducer,I=e.onBottomReached,E=e.onRowInViewport,R=e.intersectionMargin,M=R===void 0?300:R,j=e.subComponent,O=e.onExpand,k=e.onFilter,z=e.emptyFilteredTableContent,V=e.filterTypes,F=e.expanderCell,H=e.isRowDisabled,W=e.rowProps,D=e.density,se=D===void 0?"default":D,ne=e.selectSubRows,U=ne===void 0?!0:ne,C=e.getSubRows,G=e.selectRowOnClick,oe=G===void 0?!0:G,te=e.paginatorRenderer,X=e.pageSize,Y=X===void 0?25:X,Q=e.isResizable,B=Q===void 0?!1:Q,q=e.styleType,re=q===void 0?"default":q,Se=e.enableVirtualization,Be=Se===void 0?!1:Se,Ke=e.enableColumnReordering,A=Ke===void 0?!1:Ke,K=Iy(e,["data","columns","isLoading","emptyTableContent","className","style","id","isSelectable","onSelect","onRowClick","selectionMode","isSortable","onSort","stateReducer","onBottomReached","onRowInViewport","intersectionMargin","subComponent","onExpand","onFilter","emptyFilteredTableContent","filterTypes","expanderCell","isRowDisabled","rowProps","density","selectSubRows","getSubRows","selectRowOnClick","paginatorRenderer","pageSize","isResizable","styleType","enableVirtualization","enableColumnReordering"]);$();var de=o.useState(),De=de[0],bt=de[1],Dn=o.useMemo(function(){return{maxWidth:0,minWidth:0,width:0}},[]),me=o.useRef(I),Te=o.useRef(E);o.useEffect(function(){me.current=I,Te.current=E},[I,E]);var we=o.useMemo(function(){var ce=_s(n);return ce.some(function(pe){return pe.id===Wt})},[n]),je=o.useCallback(function(ce,pe,ge,bn){switch(pe.type){case fe.exports.actions.toggleSortBy:w==null||w(ce);break;case fe.exports.actions.setFilter:hy(ce,pe,ge,bn,k);break;case fe.exports.actions.toggleRowExpanded:case fe.exports.actions.toggleAllRowsExpanded:vy(ce,bn,O);break;case dl:{ce=Sy(ce,pe,bn,b,we?void 0:H);break}case fe.exports.actions.toggleRowSelected:case fe.exports.actions.toggleAllRowsSelected:case fe.exports.actions.toggleAllPageRowsSelected:{ks(ce,bn,b,we?void 0:H);break}case xo:{ce=Ty(ce);break}case ul:{ce=Cy(ce,pe);break}}return T?T(ce,pe,ge,bn):ce},[we,H,O,k,b,w,T]),mn=o.useMemo(function(){return Ue(Ue({},Yf),V)},[V]),pn=o.useMemo(function(){return a.some(function(ce,pe){return C?C(ce,pe):ce.subRows})},[a,C]),Ie=fe.exports.useTable(Ue(Ue({manualPagination:!te,paginateExpandedRows:!1},e),{columns:n,defaultColumn:Dn,disableSortBy:!S,stateReducer:je,filterTypes:mn,selectSubRows:U,data:a,getSubRows:C,initialState:Ue({pageSize:Y},e.initialState)}),fe.exports.useFlexLayout,xs(De),fe.exports.useFilters,ry(pn),fe.exports.useSortBy,fe.exports.useExpanded,fe.exports.usePagination,fe.exports.useRowSelect,oy,Xf(j,F,H),ey(m,h,H),fe.exports.useColumnOrder,by(A)),nn=Ie.getTableProps,Ci=Ie.rows,Am=Ie.headerGroups,jm=Ie.getTableBodyProps,Ii=Ie.prepareRow,an=Ie.state,Hm=Ie.allColumns,Fm=Ie.filteredFlatRows,gt=Ie.dispatch,ft=Ie.page,xi=Ie.gotoPage,Jt=Ie.setPageSize,Wr=Ie.flatHeaders,$m=Object.entries(K).reduce(function(ce,pe){var ge=pe[0],bn=pe[1];return(ge.startsWith("data-")||ge.startsWith("aria-"))&&(ce[ge]=bn),ce},{}),Vr=Hm.some(function(ce){return ce.filterValue!=null&&ce.filterValue!==""}),ki=o.useCallback(function(ce,pe){var ge=H==null?void 0:H(pe.original);ge||g==null||g(ce,pe),m&&!ge&&oe&&!ce.isDefaultPrevented()&&(!pe.isSelected&&(h==="single"||!ce.ctrlKey)?gt({type:dl,id:pe.id}):pe.toggleRowSelected(!pe.isSelected))},[H,m,oe,h,gt,g]);o.useEffect(function(){Jt(Y)},[Y,Jt]);var Um=o.useMemo(function(){return{currentPage:an.pageIndex,pageSize:an.pageSize,totalRowsCount:Ci.length,size:se!=="default"?"small":"default",isLoading:i,onPageChange:xi,onPageSizeChange:Jt}},[se,xi,i,Ci.length,Jt,an.pageIndex,an.pageSize]),yt=o.useRef({}),_i=o.useRef(0),zm=o.useCallback(function(ce){var pe=ce.width;pe!==_i.current&&(_i.current=pe,Wr.forEach(function(ge){yt.current[ge.id]&&(ge.resizeWidth=yt.current[ge.id].getBoundingClientRect().width)}),Object.keys(an.columnResizing.columnWidths).length!==0&&gt({type:xo}))},[gt,an.columnResizing.columnWidths,Wr]),Wm=at(zm)[0];o.useLayoutEffect(function(){if(an.isTableResizing){var ce={};Wr.forEach(function(pe){yt.current[pe.id]&&(ce[pe.id]=yt.current[pe.id].getBoundingClientRect().width)}),gt({type:ul,columnWidths:ce})}});var Gr=o.useRef(null),qr=o.useRef(null),Kr=o.useCallback(function(ce){var pe=ft[ce];return Ii(pe),o.createElement(Af,{row:pe,rowProps:W,isLast:ce===ft.length-1,onRowInViewport:Te,onBottomReached:me,intersectionMargin:M,state:an,key:pe.getRowProps().key,onClick:ki,subComponent:j,isDisabled:!!(H!=null&&H(pe.original)),tableHasSubRows:pn,tableInstance:Ie,expanderCell:F})},[ft,F,pn,Ie,M,H,ki,Ii,W,an,j]),Vm=o.useCallback(function(ce){return Kr(ce)},[Kr]);return o.createElement(o.Fragment,null,o.createElement("div",Ue({ref:function(ce){bt(ce==null?void 0:ce.ownerDocument),B&&Wm(ce)},id:p},nn({className:P("iui-table",(t={},t["iui-".concat(se)]=se!=="default",t),c),style:d}),$m),o.createElement("div",{className:"iui-table-header",ref:Gr},Am.slice(1).map(function(ce){var pe=ce.getHeaderGroupProps({className:"iui-row"});return o.createElement("div",Ue({},pe,{key:pe.key}),ce.headers.map(function(ge,bn){var Oi=ge.getHeaderProps(Ue(Ue({},ge.getSortByToggleProps()),{className:P("iui-cell",{"iui-actionable":ge.canSort},{"iui-sorted":ge.isSorted},ge.columnClassName),style:Ue({},ds(ge,!!an.isTableResizing))}));return o.createElement("div",Ue({},Oi,ge.getDragAndDropProps(),{key:Oi.key,title:void 0,ref:function(Jr){Jr&&B&&(yt.current[ge.id]=Jr,ge.resizeWidth=Jr.getBoundingClientRect().width)}}),ge.render("Header"),(a.length!==0||Vr)&&o.createElement(Jf,{column:ge,ownerDocument:De}),a.length!==0&&ge.canSort&&o.createElement("div",{className:"iui-cell-end-icon"},ge.isSorted&&ge.isSortedDesc?o.createElement(xp,{className:"iui-icon iui-sort","aria-hidden":!0}):o.createElement(kp,{className:"iui-icon iui-sort","aria-hidden":!0})),B&&ge.isResizerVisible&&bn!==ce.headers.length-1&&o.createElement("div",Ue({},ge.getResizerProps(),{className:"iui-resizer"}),o.createElement("div",{className:"iui-resizer-bar"})),A&&!ge.disableReordering&&o.createElement("div",{className:"iui-reorder-bar"}))}))})),o.createElement("div",Ue({},jm({className:P("iui-table-body",{"iui-zebra-striping":re==="zebra-rows"}),style:{outline:0}}),{ref:qr,onScroll:function(){Gr.current&&qr.current&&(Gr.current.scrollLeft=qr.current.scrollLeft)},tabIndex:-1}),a.length!==0&&o.createElement(o.Fragment,null,Be?o.createElement(Pb,{itemsLength:ft.length,itemRenderer:Vm}):ft.map(function(ce,pe){return Kr(pe)})),i&&a.length===0&&o.createElement("div",{className:"iui-table-empty"},o.createElement(Ye,{indeterminate:!0})),i&&a.length!==0&&o.createElement("div",{className:"iui-row"},o.createElement("div",{className:"iui-cell",style:{justifyContent:"center"}},o.createElement(Ye,{indeterminate:!0,size:"small",style:{float:"none",marginLeft:0}}))),!i&&a.length===0&&!Vr&&o.createElement("div",{className:"iui-table-empty"},o.createElement("div",null,s)),!i&&(a.length===0||Fm.length===0)&&Vr&&o.createElement("div",{className:"iui-table-empty"},o.createElement("div",null,z))),te==null?void 0:te(Um)))},Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bt.apply(this,arguments)},xy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ky={pageSizeLabel:function(e){return"".concat(e," per page")},rangeLabel:function(e,t,a,n){return n?"".concat(e,"-").concat(t,"\u2026"):"".concat(e,"-").concat(t," of ").concat(a)},previousPage:"Previous page",nextPage:"Next page",goToPageLabel:function(e){return"Go to page ".concat(e)},rowsPerPageLabel:"Rows per page"},Os=function(e){var t=e.currentPage,a=e.totalRowsCount,n=e.pageSize,r=e.onPageChange,i=e.focusActivationMode,s=i===void 0?"manual":i,c=e.isLoading,d=c===void 0?!1:c,p=e.size,u=p===void 0?"default":p,m=e.pageSizeList,b=e.onPageSizeChange,g=e.localization,y=e.className,h=xy(e,["currentPage","totalRowsCount","pageSize","onPageChange","focusActivationMode","isLoading","size","pageSizeList","onPageSizeChange","localization","className"]);$();var v=o.useMemo(function(){return Bt(Bt({},ky),g)},[g]),S=o.useRef(null),w=o.useState(t),T=w[0],I=w[1];o.useEffect(function(){I(t)},[t]);var E=o.useRef(!1),R=o.useRef(!1);o.useEffect(function(){var Q,B;if(R.current&&E.current){var q=Array.from((B=(Q=S.current)===null||Q===void 0?void 0:Q.querySelectorAll(".iui-paginator-page-button"))!==null&&B!==void 0?B:[]).find(function(re){var Se;return((Se=re.textContent)===null||Se===void 0?void 0:Se.trim())===(T+1).toString()});q==null||q.focus(),E.current=!1}R.current=!0},[T]);var M=u!="default"?"small":void 0,j=o.useCallback(function(Q,B){return B===void 0&&(B=Q===T?0:-1),o.createElement("button",{key:Q,className:P("iui-paginator-page-button",{"iui-active":Q===t,"iui-paginator-page-button-small":M==="small"}),onClick:function(){return r(Q)},"aria-current":Q===t,"aria-label":v.goToPageLabel(Q+1),tabIndex:B},Q+1)},[T,t,v,M,r]),O=Math.ceil(a/n),k=o.useMemo(function(){return new Array(O).fill(null).map(function(Q,B){return j(B)})},[j,O]),z=_r(k),V=z[0],F=z[1],H=$l(),W=H[0],D=H[1],se=function(Q){if(!Q.altKey){var B=function(q){var re=Ge(T+q,0,O-1);E.current=!0,s==="auto"?r(re):I(re)};switch(Q.key){case"ArrowRight":{B(1),Q.preventDefault();break}case"ArrowLeft":{B(-1),Q.preventDefault();break}case"Enter":case" ":case"Spacebar":{s==="manual"&&r(T);break}}}},ne=Math.floor(F/2),U=T-ne,C=T+ne+1;U<0&&(C=Math.min(O,C+Math.abs(U)),U=0),C>O&&(U=Math.max(0,U-(C-O)),C=O);var G=O===0,oe=O>1||d,te=m&&b&&!!a,X=o.createElement("span",{className:P("iui-paginator-ellipsis",{"iui-paginator-ellipsis-small":u==="small"})},"\u2026"),Y=o.createElement(o.Fragment,null,d?o.createElement(Ye,{indeterminate:!0,size:"small"}):o.createElement(ee,{styleType:"borderless",disabled:!0,size:M},"1"));return!oe&&!te?null:o.createElement("div",Bt({className:P("iui-paginator",y),ref:W},h),o.createElement("div",{className:"iui-left"}),oe&&o.createElement("div",{className:"iui-center",ref:V},o.createElement(J,{styleType:"borderless",disabled:t===0,onClick:function(){return r(t-1)},size:M,"aria-label":v.previousPage},o.createElement(Mo,null)),o.createElement("span",{className:"iui-paginator-pages-group",onKeyDown:se,ref:S},function(){return G?Y:F===1?j(T):o.createElement(o.Fragment,null,U!==0&&o.createElement(o.Fragment,null,j(0,0),X),k.slice(U,C),C!==O&&!d&&o.createElement(o.Fragment,null,X,j(O-1,0)),d&&o.createElement(o.Fragment,null,X,o.createElement(Ye,{indeterminate:!0,size:"small"})))}()),o.createElement(J,{styleType:"borderless",disabled:t===O-1||G,onClick:function(){return r(t+1)},size:M,"aria-label":v.nextPage},o.createElement(dn,null))),o.createElement("div",{className:"iui-right"},te&&o.createElement(o.Fragment,null,v.rowsPerPageLabel!==null&&D>=1024&&o.createElement("span",{className:"iui-paginator-page-size-label"},v.rowsPerPageLabel),o.createElement(Rt,{styleType:"borderless",size:M,menuItems:function(Q){return m.map(function(B){return o.createElement(ie,{key:B,isSelected:B===n,onClick:function(){Q(),b(B)}},v.pageSizeLabel(B))})}},v.rangeLabel(t*n+1,Math.min(a,(t+1)*n),a,d)))))};var ko=globalThis&&globalThis.__assign||function(){return ko=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ko.apply(this,arguments)},_y=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ce=function(e){var t=e.className,a=e.variant,n=a===void 0?"default":a,r=e.children,i=e.onRemove,s=_y(e,["className","variant","children","onRemove"]);return $(),o.createElement("span",ko({className:P({"iui-tag-basic":n==="basic","iui-tag":n==="default"},t)},s),n==="default"?o.createElement("span",{className:"iui-tag-label"},r):r,i&&o.createElement(J,{styleType:"borderless",size:"small",onClick:i,"aria-label":"Delete tag",className:"iui-tag-button"},o.createElement(vr,{"aria-hidden":!0})))},_o=globalThis&&globalThis.__assign||function(){return _o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_o.apply(this,arguments)},Oy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},ut=function(e){var t,a=e.className,n=e.children,r=e.overflow,i=e.background,s=i===void 0?"none":i,c=Oy(e,["className","children","overflow","background"]);return $(),o.createElement("div",_o({className:P("iui-tag-container",(t={},t["iui-".concat(r)]=!!r,t["iui-visible"]=s!=="none",t),a)},c),n)};var Oo=globalThis&&globalThis.__assign||function(){return Oo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Oo.apply(this,arguments)},Py=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Vn=function(e){var t=e.className,a=e.name,n=e.description,r=e.metadata,i=e.thumbnail,s=e.buttons,c=e.leftIcon,d=e.rightIcon,p=e.badge,u=e.isNew,m=e.isSelected,b=e.moreOptions,g=e.variant,y=g===void 0?"default":g,h=e.children,v=e.isActionable,S=Py(e,["className","name","description","metadata","thumbnail","buttons","leftIcon","rightIcon","badge","isNew","isSelected","moreOptions","variant","children","isActionable"]);$();var w=o.useState(!1),T=w[0],I=w[1],E=o.useCallback(function(){return I(!0)},[]),R=o.useCallback(function(){return I(!1)},[]);return o.createElement("div",Oo({className:P("iui-tile",{"iui-folder":y==="folder","iui-new":u,"iui-selected":m,"iui-actionable":v},t),tabIndex:v?0:void 0},S),i&&o.createElement("div",{className:"iui-tile-thumbnail"},typeof i=="string"?o.createElement("div",{className:"iui-tile-thumbnail-picture",style:{backgroundImage:"url(".concat(i,")")}}):i&&i.type==="img"?o.cloneElement(i,{className:"iui-tile-thumbnail-picture"}):o.isValidElement(i)?o.cloneElement(i,{className:P("iui-thumbnail-icon",i.props.className)}):i,c&&o.cloneElement(c,{className:"iui-small iui-tile-thumbnail-type-indicator"}),d&&o.cloneElement(d,{className:"iui-small iui-tile-thumbnail-quick-action"}),p&&o.createElement("div",{className:"iui-tile-thumbnail-badge-container"},p)),o.createElement("div",{className:"iui-tile-content"},o.createElement("div",{className:"iui-tile-name"},m&&o.createElement(vl,{className:P("iui-tile-status-icon","iui-informational"),"aria-hidden":!0}),u&&o.createElement(_p,{className:P("iui-tile-status-icon","iui-positive"),"aria-hidden":!0}),o.createElement("span",{className:"iui-tile-name-label"},a)),n!=null&&o.createElement("div",{className:"iui-tile-description"},n),r!=null&&o.createElement("div",{className:"iui-tile-metadata"},r),b&&o.createElement(Me,{onShow:E,onHide:R,menuItems:function(M){return b.map(function(j){return o.cloneElement(j,{onClick:function(O){var k,z;M(),(z=(k=j.props).onClick)===null||z===void 0||z.call(k,O)}})})}},o.createElement("div",{className:P("iui-tile-more-options",{"iui-visible":T})},o.createElement(J,{styleType:"borderless",size:"small","aria-label":"More options"},o.createElement(Op,null)))),h),s&&o.createElement("div",{className:"iui-tile-buttons"},s))};var gr=globalThis&&globalThis.__assign||function(){return gr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},gr.apply(this,arguments)},By=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Ny=function(e){var t=e.content,a=e.category,n=e.type,r=n===void 0?"temporary":n,i=e.isVisible,s=e.link,c=e.duration,d=c===void 0?7e3:c,p=e.hasCloseButton,u=e.onRemove,m=e.animateOutTo,b=e.placementPosition,g=b===void 0?"top":b;$();var y=o.useRef(0),h=o.useState(i),v=h[0],S=h[1],w=o.useState(0),T=w[0],I=w[1],E=o.useRef(null),R=o.useState(0),M=R[0],j=R[1],O=function(){return g==="top"?{marginBottom:M}:{marginTop:M}};o.useEffect(function(){return r==="temporary"&&z(d),function(){V()}},[d,r]),o.useEffect(function(){S(i)},[i]),o.useEffect(function(){!i&&!m&&j(-T)},[i,m,j,T]);var k=function(){V(),j(-T),S(!1)},z=function(W){var D=He();!D||(y.current=D.setTimeout(function(){k()},W))},V=function(){var W;(W=He())===null||W===void 0||W.clearTimeout(y.current)},F=function(W){if(W){var D=W.getBoundingClientRect().height;I(D)}},H=function(W){var D=0,se=0;if(m&&W){var ne=W.getBoundingClientRect(),U=ne.x,C=ne.y,G=m.getBoundingClientRect(),oe=G.x,te=G.y;D=oe-U,se=te-C}return{translateX:D,translateY:se}};return o.createElement(Pp,{timeout:{enter:240,exit:m?400:120},in:v,appear:!0,unmountOnExit:!0,onEnter:function(W){W.style.transform="translateY(15%)",W.style.transitionTimingFunction="ease"},onEntered:function(W){W.style.transform="translateY(0)"},onExiting:function(W){var D=H(W),se=D.translateX,ne=D.translateY;W.style.transform=m?"scale(0.9) translate(".concat(se,"px,").concat(ne,"px)"):"scale(0.9)",W.style.opacity="0",W.style.transitionDuration=m?"400ms":"120ms",W.style.transitionTimingFunction="cubic-bezier(0.4, 0, 1, 1)"},onExited:u},o.createElement("div",{ref:E,className:"iui-toast-all",style:gr({height:T},O())},o.createElement("div",{ref:F},o.createElement(Ey,{category:a,content:t,link:s,type:r,hasCloseButton:p,onClose:k}))))},Ey=function(e){var t=e.content,a=e.category,n=e.type,r=n===void 0?"temporary":n,i=e.link,s=e.hasCloseButton,c=e.onClose,d=e.className,p=By(e,["content","category","type","link","hasCloseButton","onClose","className"]),u=_n[a];return o.createElement("div",gr({className:P("iui-toast iui-".concat(a),d)},p),o.createElement("div",{className:"iui-status-area"},o.createElement(u,{className:"iui-icon"})),o.createElement("div",{className:"iui-message"},t),i&&o.createElement("a",{className:"iui-toast-anchor",onClick:i.onClick},i.title),(r==="persisting"||s)&&o.createElement(J,{size:"small",styleType:"borderless",onClick:c,"aria-label":"Close"},o.createElement(vr,null)))},Dy=Ny,Po=globalThis&&globalThis.__assign||function(){return Po=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Po.apply(this,arguments)},Ry=o.forwardRef(function(e,t){var a=o.useState([]),n=a[0],r=a[1],i=o.useState("top"),s=i[0],c=i[1],d=s.startsWith("top")?"top":"bottom";return o.useImperativeHandle(t,function(){return{setToasts:r,setPlacement:c}},[]),o.createElement("span",{className:P("iui-toast-wrapper","iui-placement-".concat(s))},n.map(function(p){return o.createElement(Dy,Po({key:p.id,placementPosition:d},p))}))}),Tn=globalThis&&globalThis.__assign||function(){return Tn=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Tn.apply(this,arguments)},Qr=globalThis&&globalThis.__spreadArray||function(e,t,a){if(a||arguments.length===2)for(var n=0,r=t.length,i;n<r;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))},My="iui-toasts-container",Ly=function(){function e(){this.toasts=[],this.lastId=0,this.settings={order:"descending",placement:"top"},this.toastsRef=o.createRef();var t=Al(My);!t||yl.render(o.createElement(Ry,{ref:this.toastsRef}),t)}return e.prototype.setSettings=function(t){var a,n,r,i,s;(a=t.placement)!==null&&a!==void 0||(t.placement=this.settings.placement),(n=t.order)!==null&&n!==void 0||(t.order=!((r=t.placement)===null||r===void 0)&&r.startsWith("bottom")?"ascending":"descending"),this.settings=t,(i=this.toastsRef.current)===null||i===void 0||i.setPlacement((s=this.settings.placement)!==null&&s!==void 0?s:"top")},e.prototype.positive=function(t,a){return this.createToast(t,"positive",a)},e.prototype.informational=function(t,a){return this.createToast(t,"informational",a)},e.prototype.negative=function(t,a){return this.createToast(t,"negative",a)},e.prototype.warning=function(t,a){return this.createToast(t,"warning",a)},e.prototype.createToast=function(t,a,n){var r=this;++this.lastId;var i=this.lastId;return this.toasts=Qr(Qr(Qr([],this.settings.order==="ascending"?this.toasts:[],!0),[Tn(Tn({},n),{content:t,category:a,onRemove:function(){var s;r.removeToast(i),(s=n==null?void 0:n.onRemove)===null||s===void 0||s.call(n)},id:i,isVisible:!0})],!1),this.settings.order==="descending"?this.toasts:[],!0),this.updateView(),{close:function(){return r.closeToast(i)}}},e.prototype.removeToast=function(t){this.toasts=this.toasts.filter(function(a){return a.id!==t}),this.updateView()},e.prototype.updateView=function(){var t;(t=this.toastsRef.current)===null||t===void 0||t.setToasts(this.toasts)},e.prototype.closeToast=function(t){this.toasts=this.toasts.map(function(a){return Tn(Tn({},a),{isVisible:a.id!==t})}),this.updateView()},e.prototype.closeAll=function(){this.toasts=this.toasts.map(function(t){return Tn(Tn({},t),{isVisible:!1})}),this.updateView()},e}(),Ay=Ly,jy=new Ay,Pe=jy;var Bo=globalThis&&globalThis.__assign||function(){return Bo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Bo.apply(this,arguments)},Hy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Fe=o.forwardRef(function(e,t){var a=e.disabled,n=a===void 0?!1:a,r=e.labelPosition,i=r===void 0?"right":r,s=e.icon,c=e.label,d=e.setFocus,p=d===void 0?!1:d,u=e.className,m=e.style,b=Hy(e,["disabled","labelPosition","icon","label","setFocus","className","style"]);$();var g=o.useRef(null),y=he(g,t),h=c?"label":"div";return o.useEffect(function(){g.current&&p&&g.current.focus()},[p]),o.createElement(h,{className:P("iui-toggle-switch-wrapper",{"iui-disabled":n,"iui-label-on-right":c&&i==="right","iui-label-on-left":c&&i==="left"},u),style:m},o.createElement("input",Bo({className:"iui-toggle-switch",type:"checkbox",role:"switch",disabled:n,ref:y},b)),s&&o.cloneElement(s,{className:P("iui-toggle-switch-icon",s.props.className),"aria-hidden":!0}),c&&o.createElement("span",{className:"iui-toggle-switch-label"},c))});var Ps=o.createContext(void 0),Fy=function(){var e=o.useContext(Ps);if(e==null)throw new Error("TreeContext must be used within a TreeContext.Provider");return e},No=globalThis&&globalThis.__assign||function(){return No=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},No.apply(this,arguments)},ml=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Vt=function(e){var t=e.data,a=e.className,n=e.nodeRenderer,r=e.getNode,i=ml(e,["data","className","nodeRenderer","getNode"]);$();var s=o.useRef(null),c=o.useRef(0);o.useEffect(function(){c.current=0},[t]);var d=o.useCallback(function(){var g=tt(s.current);return g.filter(function(y){return!g.some(function(h){return h.contains(y.parentElement)})})},[]),p=function(g){var y=d();if(!!(y!=null&&y.length)){var h=y.findIndex(function(w){var T;return w.contains((T=s.current)===null||T===void 0?void 0:T.ownerDocument.activeElement)}),v=h>-1?h:0;switch(g.key){case"ArrowUp":{g.preventDefault();var S=Math.max(0,v-1);y[S].focus(),c.current=S;break}case"ArrowDown":{g.preventDefault();var S=Math.min(y.length-1,v+1);y[S].focus(),c.current=S;break}}}},u=o.useMemo(function(){var g=[],y=[],h=function(v,S,w){v===void 0&&(v=[]),S===void 0&&(S=0);var T=Array();return v.forEach(function(I,E){var R=r(I),M=R.subNodes,j=ml(R,["subNodes"]),O={nodeProps:j,depth:S,parentNode:w,indexInGroup:E};if(T.push(O.nodeProps.nodeId),g.push(O),S===0&&y.push(O),O.nodeProps.isExpanded){var k=h(M,S+1,O);O.subNodeIds=k}}),T};return h(t),[g,y]},[t,r]),m=u[0],b=u[1];return o.createElement("ul",No({className:P("iui-tree",a),role:"tree",onKeyDown:p,ref:s,tabIndex:0,onFocus:function(){var g,y=d();y.length>0&&((g=y[c.current])===null||g===void 0||g.focus())}},i),m.map(function(g){var y,h,v,S;return o.createElement(Ps.Provider,{key:g.nodeProps.nodeId,value:{nodeDepth:g.depth,subNodeIds:g.subNodeIds,groupSize:g.depth===0?b.length:(v=(h=(y=g.parentNode)===null||y===void 0?void 0:y.subNodeIds)===null||h===void 0?void 0:h.length)!==null&&v!==void 0?v:0,indexInGroup:g.indexInGroup,parentNodeId:(S=g.parentNode)===null||S===void 0?void 0:S.nodeProps.nodeId}},n(g.nodeProps))}))},Eo=globalThis&&globalThis.__assign||function(){return Eo=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Eo.apply(this,arguments)},$y=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Bs=function(e){var t=e.isExpanded,a=$y(e,["isExpanded"]);return o.createElement(J,Eo({styleType:"borderless",size:"small","aria-label":t?"Collapse":"Expand"},a),o.createElement(dn,{className:P("iui-tree-node-content-expander-icon",{"iui-tree-node-content-expander-icon-expanded":t})}))},Do=globalThis&&globalThis.__assign||function(){return Do=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Do.apply(this,arguments)},Uy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},$r=function(e){var t=e.nodeId,a=e.label,n=e.sublabel,r=e.children,i=e.className,s=e.icon,c=e.hasSubNodes,d=c===void 0?!1:c,p=e.isDisabled,u=p===void 0?!1:p,m=e.isExpanded,b=m===void 0?!1:m,g=e.isSelected,y=g===void 0?!1:g,h=e.onSelected,v=e.onExpanded,S=e.checkbox,w=e.expander,T=Uy(e,["nodeId","label","sublabel","children","className","icon","hasSubNodes","isDisabled","isExpanded","isSelected","onSelected","onExpanded","checkbox","expander"]);$();var I=Fy(),E=I.nodeDepth,R=I.subNodeIds,M=R===void 0?[]:R,j=I.parentNodeId,O=I.groupSize,k=I.indexInGroup,z=o.useState(!1),V=z[0],F=z[1],H=o.useRef(null),W=o.useMemo(function(){var ne,U,C;return!((C=(U=(ne=He())===null||ne===void 0?void 0:ne.CSS)===null||U===void 0?void 0:U.supports)===null||C===void 0)&&C.call(U,"--level: ".concat(E))?{"--level":E}:{marginLeft:E?E*28:0}},[E]),D=function(ne){var U,C,G,oe,te,X,Y,Q=H.current===((U=H.current)===null||U===void 0?void 0:U.ownerDocument.activeElement);switch(ne.key){case"ArrowLeft":{if(ne.preventDefault(),Q){if(b){v(t,!1);break}if(j){var B=(C=H.current)===null||C===void 0?void 0:C.ownerDocument.querySelector("#".concat(j));B==null||B.focus();break}break}var q=tt(H.current),re=q.indexOf((G=H.current)===null||G===void 0?void 0:G.ownerDocument.activeElement);re===0?(oe=H.current)===null||oe===void 0||oe.focus():(te=q[re-1])===null||te===void 0||te.focus();break}case"ArrowRight":{ne.preventDefault();var q=tt(H.current);if(Q){if(!b&&d){v(t,!0);break}(X=q[0])===null||X===void 0||X.focus();break}var re=q.indexOf((Y=H.current)===null||Y===void 0?void 0:Y.ownerDocument.activeElement);if(re<q.length-1){q[re+1].focus();break}break}case" ":case"Spacebar":case"Enter":{if(ne.target!==H.current)break;ne.preventDefault(),u||h==null||h(t,!y);break}}},se=o.useCallback(function(ne){v(t,!b),ne.stopPropagation()},[b,t,v]);return o.createElement("li",Do({role:"treeitem",className:P("iui-tree-item",i),id:t,"aria-expanded":d?b:void 0,"aria-disabled":u,"aria-selected":y,"aria-level":E+1,"aria-setsize":O,"aria-posinset":k+1,tabIndex:-1,onFocus:function(ne){F(!0),ne.stopPropagation()},onBlur:function(){F(!1)},ref:H,onKeyDown:D},T),o.createElement("div",{className:P("iui-tree-node",{"iui-active":y,"iui-disabled":u}),style:W,onClick:function(){return!u&&(h==null?void 0:h(t,!y))}},S&&o.isValidElement(S)?o.cloneElement(S,{className:P("iui-tree-node-checkbox",S.props.className),tabIndex:V?0:-1}):S,o.createElement("div",{className:"iui-tree-node-content"},d&&w,d&&!w&&o.createElement(Bs,{isExpanded:b,disabled:u,onClick:se,tabIndex:V?0:-1}),s&&o.cloneElement(s,{className:P("iui-tree-node-content-icon",s.props.className)}),o.createElement("span",{className:"iui-tree-node-content-label"},o.createElement("div",{className:"iui-tree-node-content-title"},a),n&&o.createElement("div",{className:"iui-tree-node-content-caption"},n)),r)),d&&o.createElement("ul",{className:"iui-sub-tree",role:"group","aria-owns":M.join(",")}))};var Nt=globalThis&&globalThis.__assign||function(){return Nt=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Nt.apply(this,arguments)},zy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Wy={away:"Away",busy:"Busy",offline:"Offline",online:"Online"},ke=function(e){var t,a,n=e.size,r=n===void 0?"small":n,i=e.status,s=e.abbreviation,c=e.image,d=e.backgroundColor,p=d===void 0?"white":d,u=e.title,m=e.translatedStatusTitles,b=e.className,g=e.style,y=zy(e,["size","status","abbreviation","image","backgroundColor","title","translatedStatusTitles","className","style"]);$();var h=Nt(Nt({},Wy),m);return o.createElement("span",Nt({className:P("iui-user-icon",(t={},t["iui-".concat(r)]=r!=="medium",t),b),title:u,style:g},y),c!=null?c:o.createElement("abbr",{className:"iui-initials",style:{backgroundColor:p}},s==null?void 0:s.substring(0,2)),o.createElement("span",{className:"iui-stroke"}),i&&o.createElement("span",{title:h[i],className:P("iui-status",(a={},a["iui-".concat(i)]=!!i,a)),"aria-label":h[i]}))},fr=globalThis&&globalThis.__assign||function(){return fr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},fr.apply(this,arguments)},Vy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},mt=function(e){var t,a=99,n=e.children,r=e.animated,i=r===void 0?!1:r,s=e.stacked,c=s===void 0?!0:s,d=e.maxIcons,p=d===void 0?5:d,u=e.iconSize,m=u===void 0?"small":u,b=e.countIconProps,g=e.className,y=Vy(e,["children","animated","stacked","maxIcons","iconSize","countIconProps","className"]),h=o.Children.toArray(n),v=h.length;$();var S=function(w){return h.slice(0,w).map(function(T){return o.cloneElement(T,{status:void 0,size:m})})};return o.createElement(o.Fragment,null,o.createElement("div",fr({className:P("iui-user-icon-list",{"iui-animated":i,"iui-stacked":c},g)},y),h.length<=p+1&&S(p+1),h.length>p+1&&o.createElement(o.Fragment,null,S(p),o.createElement("div",fr({},b,{className:P("iui-user-icon",(t={},t["iui-".concat(m)]=m!=="medium",t),"iui-user-icon-count",b==null?void 0:b.className)}),o.createElement("abbr",{className:"iui-initials"},v<=a?"".concat(v-p):"".concat(a,"+")),o.createElement("span",{className:"iui-stroke"})))))};var yr=globalThis&&globalThis.__assign||function(){return yr=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},yr.apply(this,arguments)},Gy=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},qy=function(e){var t=e.title,a=e.index,n=e.currentStepNumber,r=e.totalSteps,i=e.type,s=e.onClick,c=e.description,d=e.className,p=e.style,u=Gy(e,["title","index","currentStepNumber","totalSteps","type","onClick","description","className","style"]),m=i!=="workflow"&&n>a,b=i!=="workflow"&&n===a,g=i!=="workflow"&&m&&!!s,y=function(){g&&(s==null||s(a))},h=function(S){!g||(S.key==="Enter"||S.key==="Space"||S.key===" ")&&y()},v=o.createElement("li",yr({className:P("iui-wizard-step",{"iui-current":b,"iui-clickable":g},d),style:yr({width:i==="default"?"".concat(100/r,"%"):void 0},p),onClick:y,onKeyDown:h,"aria-current":b?"step":void 0,tabIndex:g?0:void 0},u),o.createElement("div",{className:"iui-wizard-track-content"},o.createElement("span",{className:"iui-wizard-circle"},i==="workflow"?t:a+1)),i==="default"&&o.createElement("span",{className:"iui-wizard-step-name"},t));return c?o.createElement(Ze,{content:c},v):v},Ro=globalThis&&globalThis.__assign||function(){return Ro=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ro.apply(this,arguments)},Ky=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a},Jy={stepsCountLabel:function(e,t){return"Step ".concat(e," of ").concat(t,":")}},pt=o.forwardRef(function(e,t){var a=e.currentStep,n=e.steps,r=e.type,i=r===void 0?"default":r,s=e.localization,c=s===void 0?Jy:s,d=e.onStepClick,p=Ky(e,["currentStep","steps","type","localization","onStepClick"]),u=Math.min(Math.max(0,a!=null?a:0),n.length-1);return $(),o.createElement("div",Ro({className:P("iui-wizard",{"iui-long":i==="long","iui-workflow":i==="workflow"}),ref:t},p),o.createElement("ol",null,n.map(function(m,b){return o.createElement(qy,{key:b,index:b,title:i==="long"?"":m.name,currentStepNumber:u,totalSteps:n.length,type:i,onClick:d,description:m.description})})),i==="long"&&o.createElement("div",{className:"iui-wizard-steps-label"},o.createElement("span",{className:"iui-steps-count"},c.stepsCountLabel(u+1,n.length)),n[u].name))}),Yy={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Alert, AlertProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/Alert',
  component: Alert,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    onClick: { control: { disable: true } },
    onClose: { control: { disable: true } },
    clickableText: { type: 'string' },
  },
} as Meta<AlertProps>;

export const Informational: Story<AlertProps> = (args) => {
  return (
    <Alert
      type='informational'
      clickableText='More Info.'
      onClose={action('Close!')}
      clickableTextProps={{ onClick: action('Clicked more info!') }}
      {...args}
    >
      {args.children}
    </Alert>
  );
};

Informational.args = {
  children: 'This is an informational message.',
  clickableText: 'More Info.',
  type: 'informational',
};

export const Positive: Story<AlertProps> = (args) => {
  return (
    <Alert
      type='positive'
      clickableText='More Info.'
      onClose={action('Close!')}
      clickableTextProps={{ onClick: action('Clicked more info!') }}
      {...args}
    >
      {args.children}
    </Alert>
  );
};

Positive.args = {
  children: 'This is a positive message.',
  clickableText: 'More Info.',
  type: 'positive',
};

export const Warning: Story<AlertProps> = (args) => {
  return (
    <Alert
      type='warning'
      clickableText='More Info.'
      onClose={action('Close!')}
      clickableTextProps={{ onClick: action('Clicked more info!') }}
      {...args}
    >
      {args.children}
    </Alert>
  );
};

Warning.args = {
  children: 'This is a warning message.',
  clickableText: 'More Info.',
  type: 'warning',
};

export const Negative: Story<AlertProps> = (args) => {
  return (
    <Alert
      type='negative'
      clickableText='More Info.'
      onClose={action('Close!')}
      clickableTextProps={{ onClick: action('Clicked more info!') }}
      {...args}
    >
      {args.children}
    </Alert>
  );
};

Negative.args = {
  children: 'This is a negative message.',
  clickableText: 'More Info.',
  type: 'negative',
};

export const Sticky: Story<AlertProps> = (args) => {
  return (
    <Alert
      clickableText='More Info.'
      onClose={action('Close!')}
      clickableTextProps={{ onClick: action('Clicked more info!') }}
      {...args}
    >
      {args.children}
    </Alert>
  );
};

Sticky.args = {
  children: 'This is sticky!',
  clickableText: 'More Info.',
  type: 'informational',
  isSticky: true,
};

export const Empty: Story<AlertProps> = (args) => {
  return (
    <Alert type='informational' {...args}>
      {args.children}
    </Alert>
  );
};

Empty.args = {
  children: 'This is empty info message.',
  type: 'informational',
};
`,locationsMap:{informational:{startLoc:{col:48,line:23},endLoc:{col:1,line:35},startBody:{col:48,line:23},endBody:{col:1,line:35}},positive:{startLoc:{col:43,line:43},endLoc:{col:1,line:55},startBody:{col:43,line:43},endBody:{col:1,line:55}},warning:{startLoc:{col:42,line:63},endLoc:{col:1,line:75},startBody:{col:42,line:63},endBody:{col:1,line:75}},negative:{startLoc:{col:43,line:83},endLoc:{col:1,line:95},startBody:{col:43,line:83},endBody:{col:1,line:95}},sticky:{startLoc:{col:41,line:103},endLoc:{col:1,line:114},startBody:{col:41,line:103},endBody:{col:1,line:114}},empty:{startLoc:{col:40,line:123},endLoc:{col:1,line:129},startBody:{col:40,line:123},endBody:{col:1,line:129}}}}},title:"Core/Alert",component:Un,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},onClick:{control:{disable:!0}},onClose:{control:{disable:!0}},clickableText:{type:"string"}}};const Ns=e=>l(Un,x(f({type:"informational",clickableText:"More Info.",onClose:_("Close!"),clickableTextProps:{onClick:_("Clicked more info!")}},e),{children:e.children}));Ns.args={children:"This is an informational message.",clickableText:"More Info.",type:"informational"};const Es=e=>l(Un,x(f({type:"positive",clickableText:"More Info.",onClose:_("Close!"),clickableTextProps:{onClick:_("Clicked more info!")}},e),{children:e.children}));Es.args={children:"This is a positive message.",clickableText:"More Info.",type:"positive"};const Ds=e=>l(Un,x(f({type:"warning",clickableText:"More Info.",onClose:_("Close!"),clickableTextProps:{onClick:_("Clicked more info!")}},e),{children:e.children}));Ds.args={children:"This is a warning message.",clickableText:"More Info.",type:"warning"};const Rs=e=>l(Un,x(f({type:"negative",clickableText:"More Info.",onClose:_("Close!"),clickableTextProps:{onClick:_("Clicked more info!")}},e),{children:e.children}));Rs.args={children:"This is a negative message.",clickableText:"More Info.",type:"negative"};const Ms=e=>l(Un,x(f({clickableText:"More Info.",onClose:_("Close!"),clickableTextProps:{onClick:_("Clicked more info!")}},e),{children:e.children}));Ms.args={children:"This is sticky!",clickableText:"More Info.",type:"informational",isSticky:!0};const Ls=e=>l(Un,x(f({type:"informational"},e),{children:e.children}));Ls.args={children:"This is empty info message.",type:"informational"};const Zy=["Informational","Positive","Warning","Negative","Sticky","Empty"];var Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Yy,Informational:Ns,Positive:Es,Warning:Ds,Negative:Rs,Sticky:Ms,Empty:Ls,__namedExportsOrder:Zy},Symbol.toStringTag,{value:"Module"})),Qy={title:"Typography/Anchor",component:Le,parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Anchor } from '@itwin/itwinui-react';

export default {
  title: 'Typography/Anchor',
  component: Anchor,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {},
} as Meta;

export const Basic: Story<React.ComponentPropsWithoutRef<'a'>> = (args) => {
  return (
    <Anchor href='https://www.example.com/' {...args}>
      www.example.com
    </Anchor>
  );
};
Basic.args = {
  href: 'https://www.example.com/',
  children: 'www.example.com',
};
`,locationsMap:{basic:{startLoc:{col:65,line:18},endLoc:{col:1,line:24},startBody:{col:65,line:18},endBody:{col:1,line:24}}}},controls:{hideNoControlsWarning:!0}},argTypes:{}};const As=e=>l(Le,x(f({href:"https://www.example.com/"},e),{children:"www.example.com"}));As.args={href:"https://www.example.com/",children:"www.example.com"};const ev=["Basic"];var nv=Object.freeze(Object.defineProperty({__proto__:null,default:Qy,Basic:As,__namedExportsOrder:ev},Symbol.toStringTag,{value:"Module"})),tv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Badge, BadgeProps } from '@itwin/itwinui-react';
import { SoftBackgrounds } from '@itwin/itwinui-react/esm/core/utils';

export default {
  component: Badge,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    title: { control: { disable: true } },
    backgroundColor: {
      options: [
        'primary',
        'positive',
        'negative',
        'warning',
        ...Object.keys(SoftBackgrounds),
      ],
    },
  },
  title: 'Core/Badge',
} as Meta<BadgeProps>;

export const Basic: Story<BadgeProps> = ({ backgroundColor, children }) => {
  return <Badge backgroundColor={backgroundColor}>{children}</Badge>;
};

Basic.args = {
  backgroundColor: 'skyblue',
  children: 'Label',
};

export const LongLabel: Story<BadgeProps> = ({
  backgroundColor,
  title,
  children,
}) => {
  return (
    <Badge backgroundColor={backgroundColor} title={title}>
      {children}
    </Badge>
  );
};

LongLabel.args = {
  backgroundColor: 'skyblue',
  children: 'Long label that gets truncated',
  title: 'Long label that gets truncated',
};

export const Statuses: Story<BadgeProps> = () => {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge backgroundColor='positive'>Success</Badge>
      <Badge backgroundColor='negative'>Error</Badge>
      <Badge backgroundColor='primary'>Informational</Badge>
      <Badge backgroundColor='warning'>Warning</Badge>
    </div>
  );
};

Statuses.parameters = {
  controls: { hideNoControlsWarning: true },
};
`,locationsMap:{basic:{startLoc:{col:40,line:30},endLoc:{col:1,line:32},startBody:{col:40,line:30},endBody:{col:1,line:32}},"long-label":{startLoc:{col:44,line:39},endLoc:{col:1,line:49},startBody:{col:44,line:39},endBody:{col:1,line:49}},statuses:{startLoc:{col:43,line:57},endLoc:{col:1,line:66},startBody:{col:43,line:57},endBody:{col:1,line:66}}}}},component:Cn,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},title:{control:{disable:!0}},backgroundColor:{options:["primary","positive","negative","warning",...Object.keys(Ho)]}},title:"Core/Badge"};const js=({backgroundColor:e,children:t})=>l(Cn,{backgroundColor:e,children:t});js.args={backgroundColor:"skyblue",children:"Label"};const Hs=({backgroundColor:e,title:t,children:a})=>l(Cn,{backgroundColor:e,title:t,children:a});Hs.args={backgroundColor:"skyblue",children:"Long label that gets truncated",title:"Long label that gets truncated"};const Fs=()=>N("div",{style:{display:"flex",gap:8},children:[l(Cn,{backgroundColor:"positive",children:"Success"}),l(Cn,{backgroundColor:"negative",children:"Error"}),l(Cn,{backgroundColor:"primary",children:"Informational"}),l(Cn,{backgroundColor:"warning",children:"Warning"})]});Fs.parameters={controls:{hideNoControlsWarning:!0}};const rv=["Basic","LongLabel","Statuses"];var av=Object.freeze(Object.defineProperty({__proto__:null,default:tv,Basic:js,LongLabel:Hs,Statuses:Fs,__namedExportsOrder:rv},Symbol.toStringTag,{value:"Module"})),ov={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Blockquote, BlockquoteProps } from '@itwin/itwinui-react';

export default {
  title: 'Typography/Blockquote',
  component: Blockquote,
  args: {
    children: 'This is a quote',
    cite: '',
  },
} as Meta<BlockquoteProps>;

export const Basic: Story<BlockquoteProps> = (args) => {
  return <Blockquote {...args}>{args.children}</Blockquote>;
};

export const WithFooter: Story<BlockquoteProps> = (args) => {
  const { children, cite, footer, ...rest } = args;
  return (
    <Blockquote cite={cite} footer={footer} {...rest}>
      {children}
    </Blockquote>
  );
};

WithFooter.args = {
  children: (
    <p>
      For 36 years we have served engineers with our software, passionately
      believing that better performing and more resilient infrastructure is
      essential to improve the quality of life for people everywhere, sustain
      our environment, and grow our economies.
    </p>
  ),
  cite: 'https://www.bentley.com/en',
  footer: (
    <>
      \u2014 Greg Bentley, <cite>NasdaqListed</cite>
    </>
  ),
};
`,locationsMap:{basic:{startLoc:{col:45,line:18},endLoc:{col:1,line:20},startBody:{col:45,line:18},endBody:{col:1,line:20}},"with-footer":{startLoc:{col:50,line:22},endLoc:{col:1,line:29},startBody:{col:50,line:22},endBody:{col:1,line:29}}}}},title:"Typography/Blockquote",component:Ko,args:{children:"This is a quote",cite:""}};const iv=e=>l(Ko,x(f({},e),{children:e.children})),$s=e=>{const i=e,{children:t,cite:a,footer:n}=i,r=L(i,["children","cite","footer"]);return l(Ko,x(f({cite:a,footer:n},r),{children:t}))};$s.args={children:l("p",{children:"For 36 years we have served engineers with our software, passionately believing that better performing and more resilient infrastructure is essential to improve the quality of life for people everywhere, sustain our environment, and grow our economies."}),cite:"https://www.bentley.com/en",footer:N(Z,{children:["\u2014 Greg Bentley, ",l("cite",{children:"NasdaqListed"})]})};const lv=["Basic","WithFooter"];var sv=Object.freeze(Object.defineProperty({__proto__:null,default:ov,Basic:iv,WithFooter:$s,__namedExportsOrder:lv},Symbol.toStringTag,{value:"Module"})),cv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Body, BodyProps } from '@itwin/itwinui-react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Body',
  component: Body,
  args: {
    children: "I'm a Body",
    isMuted: false,
    isSkeleton: false,
  },
} as Meta<BodyProps>;

const BodyStory: Story<BodyProps> = (args) => {
  const { children, ...rest } = args;
  return <Body {...rest}>{children}</Body>;
};

export const Basic: Story<BodyProps> = BodyStory.bind({});
Basic.args = {} as BodyProps;

export const Muted: Story<BodyProps> = BodyStory.bind({});
Muted.args = { isMuted: true } as BodyProps;

export const Skeleton: Story<BodyProps> = BodyStory.bind({});
Skeleton.args = { isSkeleton: true } as BodyProps;
`,locationsMap:{basic:{startLoc:{col:36,line:19},endLoc:{col:1,line:22},startBody:{col:36,line:19},endBody:{col:1,line:22}},muted:{startLoc:{col:36,line:19},endLoc:{col:1,line:22},startBody:{col:36,line:19},endBody:{col:1,line:22}},skeleton:{startLoc:{col:36,line:19},endLoc:{col:1,line:22},startBody:{col:36,line:19},endBody:{col:1,line:22}}}}},title:"Typography/Body",component:Hn,args:{children:"I'm a Body",isMuted:!1,isSkeleton:!1}};const ai=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(Hn,x(f({},a),{children:t}))},Us=ai.bind({});Us.args={};const zs=ai.bind({});zs.args={isMuted:!0};const Ws=ai.bind({});Ws.args={isSkeleton:!0};const dv=["Basic","Muted","Skeleton"];var uv=Object.freeze(Object.defineProperty({__proto__:null,default:cv,Basic:Us,Muted:zs,Skeleton:Ws,__namedExportsOrder:dv},Symbol.toStringTag,{value:"Module"})),mv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from '@storybook/addons';
import React from 'react';
import {
  Button,
  Breadcrumbs,
  BreadcrumbsProps,
  DropdownButton,
  MenuItem,
  Input,
} from '@itwin/itwinui-react';
import { SvgChevronRightDouble, SvgFolder } from '@itwin/itwinui-icons-react';

export default {
  component: Breadcrumbs,
  title: 'Core/Breadcrumbs',
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<BreadcrumbsProps>;

export const Basic: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <Button key={0} onClick={() => action('Root')()}>
        Root
      </Button>
      <Button key={1} onClick={() => action('Item 1')()}>
        Item 1
      </Button>
      <Button key={2} onClick={() => action('Item 2')()}>
        Item 2
      </Button>
    </Breadcrumbs>
  );
};

export const Links: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs {...args}>
      <a key={0} href='/'>
        iTwinUI
      </a>
      <a key={1} href='/?path=/docs/core-breadcrumbs'>
        Breadcrumbs
      </a>
      <span key={2}>Links</span>
    </Breadcrumbs>
  );
};

export const CustomSeparator: Story<BreadcrumbsProps> = (args) => {
  return (
    <Breadcrumbs separator={<SvgChevronRightDouble />} {...args}>
      <Button key={0} onClick={() => action('Root')()}>
        Root
      </Button>
      <Button key={1} onClick={() => action('Item 1')()}>
        Item 1
      </Button>
      <Button key={2} onClick={() => action('Item 2')()}>
        Item 2
      </Button>
    </Breadcrumbs>
  );
};
CustomSeparator.args = {
  separator: <SvgChevronRightDouble />,
};

export const Overflow: Story<BreadcrumbsProps> = (args) => {
  const items = Array(10)
    .fill(null)
    .map((_, index) => <Button key={index}>Item {index}</Button>);

  return (
    <div style={{ maxWidth: '50%', border: '1px solid lightpink', padding: 8 }}>
      <Breadcrumbs {...args}>{items}</Breadcrumbs>
    </div>
  );
};

export const FolderNavigation: Story<BreadcrumbsProps> = (args) => {
  const items = React.useMemo(
    () => ['Root', 'Level 1', 'Level 2', 'Level 3', 'Level 4'],
    [],
  );

  const [lastIndex, setLastIndex] = useState(items.length - 1);
  const [isEditing, setIsEditing] = useState(false);

  const breadcrumbItems = React.useMemo(
    () =>
      items.slice(0, lastIndex + 1).map((item, index) => (
        <Button
          key={\`Breadcrumb\${index}\`}
          onClick={() => {
            if (lastIndex !== index) {
              setLastIndex(index);
            } else {
              setIsEditing(true);
            }
          }}
        >
          {item}
        </Button>
      )),
    [items, lastIndex],
  );

  return (
    <div style={{ display: 'inline-flex', width: 450 }}>
      <DropdownButton
        startIcon={<SvgFolder aria-hidden />}
        styleType='borderless'
        menuItems={(close) =>
          items.map((item, index) => (
            <MenuItem
              key={\`Item\${index}\`}
              onClick={() => {
                setLastIndex(index);
                setIsEditing(false);
                close();
              }}
            >
              {item}
            </MenuItem>
          ))
        }
      />
      {isEditing ? (
        <Input
          setFocus
          defaultValue={items.slice(0, lastIndex + 1).join('/')}
          onChange={({ target: { value } }) => {
            const lastItem = value.substring(
              value.lastIndexOf('/', value.length - 2) + 1,
            );
            setLastIndex(items.findIndex((item) => lastItem.includes(item)));
          }}
          onKeyDown={({ key }) => key === 'Enter' && setIsEditing(false)}
          onBlur={() => setIsEditing(false)}
        />
      ) : (
        <Breadcrumbs {...args}>{breadcrumbItems}</Breadcrumbs>
      )}
    </div>
  );
};
`,locationsMap:{basic:{startLoc:{col:46,line:30},endLoc:{col:1,line:44},startBody:{col:46,line:30},endBody:{col:1,line:44}},links:{startLoc:{col:46,line:46},endLoc:{col:1,line:58},startBody:{col:46,line:46},endBody:{col:1,line:58}},"custom-separator":{startLoc:{col:56,line:60},endLoc:{col:1,line:74},startBody:{col:56,line:60},endBody:{col:1,line:74}},overflow:{startLoc:{col:49,line:79},endLoc:{col:1,line:89},startBody:{col:49,line:79},endBody:{col:1,line:89}},"folder-navigation":{startLoc:{col:57,line:91},endLoc:{col:1,line:157},startBody:{col:57,line:91},endBody:{col:1,line:157}}}}},component:ot,title:"Core/Breadcrumbs",argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},children:{control:{disable:!0}}}};const pv=e=>N(ot,x(f({},e),{children:[l(ee,{onClick:()=>_("Root")(),children:"Root"},0),l(ee,{onClick:()=>_("Item 1")(),children:"Item 1"},1),l(ee,{onClick:()=>_("Item 2")(),children:"Item 2"},2)]})),bv=e=>N(ot,x(f({},e),{children:[l("a",{href:"/",children:"iTwinUI"},0),l("a",{href:"/?path=/docs/core-breadcrumbs",children:"Breadcrumbs"},1),l("span",{children:"Links"},2)]})),Vs=e=>N(ot,x(f({separator:l(hl,{})},e),{children:[l(ee,{onClick:()=>_("Root")(),children:"Root"},0),l(ee,{onClick:()=>_("Item 1")(),children:"Item 1"},1),l(ee,{onClick:()=>_("Item 2")(),children:"Item 2"},2)]}));Vs.args={separator:l(hl,{})};const gv=e=>{const t=Array(10).fill(null).map((a,n)=>N(ee,{children:["Item ",n]},n));return l("div",{style:{maxWidth:"50%",border:"1px solid lightpink",padding:8},children:l(ot,x(f({},e),{children:t}))})},fv=e=>{const t=o.useMemo(()=>["Root","Level 1","Level 2","Level 3","Level 4"],[]),[a,n]=ue(t.length-1),[r,i]=ue(!1),s=o.useMemo(()=>t.slice(0,a+1).map((c,d)=>l(ee,{onClick:()=>{a!==d?n(d):i(!0)},children:c},`Breadcrumb${d}`)),[t,a]);return N("div",{style:{display:"inline-flex",width:450},children:[l(Rt,{startIcon:l(Bp,{"aria-hidden":!0}),styleType:"borderless",menuItems:c=>t.map((d,p)=>l(ie,{onClick:()=>{n(p),i(!1),c()},children:d},`Item${p}`))}),r?l(ye,{setFocus:!0,defaultValue:t.slice(0,a+1).join("/"),onChange:({target:{value:c}})=>{const d=c.substring(c.lastIndexOf("/",c.length-2)+1);n(t.findIndex(p=>d.includes(p)))},onKeyDown:({key:c})=>c==="Enter"&&i(!1),onBlur:()=>i(!1)}):l(ot,x(f({},e),{children:s}))]})},yv=["Basic","Links","CustomSeparator","Overflow","FolderNavigation"];var vv=Object.freeze(Object.defineProperty({__proto__:null,default:mv,Basic:pv,Links:bv,CustomSeparator:Vs,Overflow:gv,FolderNavigation:fv,__namedExportsOrder:yv},Symbol.toStringTag,{value:"Module"})),hv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@itwin/itwinui-react';
import SvgAdd from '@itwin/itwinui-icons-react/cjs/icons/Add';

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    onClick: { control: { disable: true } },
    startIcon: { control: { disable: true } },
    endIcon: { control: { disable: true } },
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    type: { control: { disable: true } },
    as: { type: { name: 'string', required: false } },
  },
  args: {
    as: 'button',
  },
} as Meta<ButtonProps>;

export const CallToAction: Story<ButtonProps> = (args) => {
  return (
    <Button onClick={action('clicked')} styleType='cta' {...args}>
      {args.children}
    </Button>
  );
};

CallToAction.args = {
  children: 'Call To Action Button',
  styleType: 'cta',
};

export const HighVisibility: Story<ButtonProps> = (args) => {
  return (
    <Button onClick={action('clicked')} styleType='high-visibility' {...args}>
      {args.children}
    </Button>
  );
};

HighVisibility.args = {
  children: 'High Visibility Button',
  styleType: 'high-visibility',
};

export const Default: Story<ButtonProps> = (args) => {
  return (
    <Button onClick={action('clicked')} styleType='default' {...args}>
      {args.children}
    </Button>
  );
};

Default.args = {
  children: 'Default Button',
  styleType: 'default',
};

export const WithIcon: Story<ButtonProps> = (args) => {
  return (
    <Button
      onClick={action('clicked')}
      startIcon={<SvgAdd />}
      styleType='high-visibility'
      {...args}
    >
      {args.children}
    </Button>
  );
};

WithIcon.argTypes = {
  children: { control: { disable: true } },
};

WithIcon.args = {
  children: 'New',
  styleType: 'high-visibility',
  startIcon: <SvgAdd />,
};

export const AsLink: Story<ButtonProps<'a'>> = (args) => {
  return (
    <Button
      as='a'
      href={window.location.href}
      target='_blank'
      startIcon={
        <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' aria-hidden>
          <path d='m16 0v5.4l-1.9-2-8.4 8.4-1.5-1.5 8.3-8.4-1.9-1.9m5.4 16v-9h-1v8h-14v-14h8v-1h-9v16z' />
        </svg>
      }
      {...args}
    >
      Open in new tab
    </Button>
  );
};
AsLink.args = {
  styleType: 'default',
  as: 'a',
} as Record<string, unknown>;
`,locationsMap:{"call-to-action":{startLoc:{col:48,line:28},endLoc:{col:1,line:34},startBody:{col:48,line:28},endBody:{col:1,line:34}},"high-visibility":{startLoc:{col:50,line:41},endLoc:{col:1,line:47},startBody:{col:50,line:41},endBody:{col:1,line:47}},default:{startLoc:{col:43,line:54},endLoc:{col:1,line:60},startBody:{col:43,line:54},endBody:{col:1,line:60}},"with-icon":{startLoc:{col:44,line:67},endLoc:{col:1,line:78},startBody:{col:44,line:67},endBody:{col:1,line:78}},"as-link":{startLoc:{col:47,line:90},endLoc:{col:1,line:106},startBody:{col:47,line:90},endBody:{col:1,line:106}}}}},title:"Buttons/Button",component:ee,argTypes:{onClick:{control:{disable:!0}},startIcon:{control:{disable:!0}},endIcon:{control:{disable:!0}},style:{control:{disable:!0}},className:{control:{disable:!0}},type:{control:{disable:!0}},as:{type:{name:"string",required:!1}}},args:{as:"button"}};const Gs=e=>l(ee,x(f({onClick:_("clicked"),styleType:"cta"},e),{children:e.children}));Gs.args={children:"Call To Action Button",styleType:"cta"};const qs=e=>l(ee,x(f({onClick:_("clicked"),styleType:"high-visibility"},e),{children:e.children}));qs.args={children:"High Visibility Button",styleType:"high-visibility"};const Ks=e=>l(ee,x(f({onClick:_("clicked"),styleType:"default"},e),{children:e.children}));Ks.args={children:"Default Button",styleType:"default"};const oi=e=>l(ee,x(f({onClick:_("clicked"),startIcon:l(rt,{}),styleType:"high-visibility"},e),{children:e.children}));oi.argTypes={children:{control:{disable:!0}}};oi.args={children:"New",styleType:"high-visibility",startIcon:l(rt,{})};const Js=e=>l(ee,x(f({as:"a",href:window.location.href,target:"_blank",startIcon:l("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:l("path",{d:"m16 0v5.4l-1.9-2-8.4 8.4-1.5-1.5 8.3-8.4-1.9-1.9m5.4 16v-9h-1v8h-14v-14h8v-1h-9v16z"})})},e),{children:"Open in new tab"}));Js.args={styleType:"default",as:"a"};const Sv=["CallToAction","HighVisibility","Default","WithIcon","AsLink"];var wv=Object.freeze(Object.defineProperty({__proto__:null,default:hv,CallToAction:Gs,HighVisibility:qs,Default:Ks,WithIcon:oi,AsLink:Js,__namedExportsOrder:Sv},Symbol.toStringTag,{value:"Module"})),Tv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  DropdownMenu,
  IconButton,
  Input,
  MenuItem,
  Text,
} from '@itwin/itwinui-react';
import {
  SvgAdd,
  SvgDelete,
  SvgEdit,
  SvgUndo,
  SvgPlaceholder,
  SvgMore,
} from '@itwin/itwinui-icons-react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<ButtonGroupProps>;

export const WithIcons: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <IconButton onClick={action('Clicked add!')}>
        <SvgAdd />
      </IconButton>
      <IconButton onClick={action('Clicked edit!')} isActive>
        <SvgEdit />
      </IconButton>
      <IconButton disabled onClick={action('Clicked delete!')}>
        <SvgDelete />
      </IconButton>
      <IconButton onClick={action('Clicked undo!')}>
        <SvgUndo />
      </IconButton>
    </ButtonGroup>
  );
};

export const Overflow: Story<ButtonGroupProps> = (args) => {
  const buttons = Array(10)
    .fill(null)
    .map((_, index) => (
      <IconButton
        key={index}
        onClick={() => action(\`Clicked on button \${index + 1}\`)()}
      >
        <SvgPlaceholder />
      </IconButton>
    ));

  return (
    <>
      <Text variant='small' as='small' isMuted>
        Resize the viewport to see overflow behavior.
      </Text>
      <div
        style={{
          maxWidth: 'clamp(300px, 50%, 100%)',
          border: '1px solid hotpink',
          padding: 8,
        }}
      >
        <ButtonGroup
          orientation='horizontal'
          overflowButton={(overflowStart) => (
            <DropdownMenu
              menuItems={(close) =>
                Array(buttons.length - overflowStart + 1)
                  .fill(null)
                  .map((_, _index) => {
                    const index = overflowStart + _index;
                    const onClick = () => {
                      action(\`Clicked button \${index} (overflow)\`)();
                      close();
                    };
                    return (
                      <MenuItem
                        key={index}
                        onClick={onClick}
                        icon={<SvgPlaceholder />}
                      >
                        Button #{index}
                      </MenuItem>
                    );
                  })
              }
            >
              <IconButton onClick={() => action('Clicked on overflow icon')()}>
                <SvgMore />
              </IconButton>
            </DropdownMenu>
          )}
          {...args}
        >
          {buttons}
        </ButtonGroup>
      </div>
    </>
  );
};
Overflow.args = {
  overflowPlacement: 'end',
  orientation: 'horizontal',
};

export const InputButtonCombo: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup {...args}>
      <Input
        defaultValue='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ'
        readOnly
        style={{ minWidth: '30ch' }}
      />
      <Button
        styleType='high-visibility'
        onClick={async () => {
          await navigator.clipboard.writeText(
            \`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ\`,
          );
          action('Copied bearer token to clipboard')();
        }}
      >
        Copy
      </Button>
    </ButtonGroup>
  );
};
InputButtonCombo.args = {
  orientation: 'horizontal',
};
InputButtonCombo.parameters = {};

export const Vertical: Story<ButtonGroupProps> = (args) => {
  return (
    <ButtonGroup orientation='vertical' {...args}>
      <IconButton onClick={action('Clicked add!')}>
        <SvgAdd />
      </IconButton>
      <IconButton onClick={action('Clicked edit!')} isActive>
        <SvgEdit />
      </IconButton>
      <IconButton disabled onClick={action('Clicked delete!')}>
        <SvgDelete />
      </IconButton>
      <IconButton onClick={action('Clicked undo!')}>
        <SvgUndo />
      </IconButton>
    </ButtonGroup>
  );
};
Vertical.args = {
  orientation: 'vertical',
};

export const VerticalOverflow: Story<ButtonGroupProps> = (args) => {
  const buttons = Array(10)
    .fill(null)
    .map((_, index) => (
      <IconButton
        key={index}
        onClick={() => action(\`Clicked on button \${index + 1}\`)()}
      >
        <SvgPlaceholder />
      </IconButton>
    ));

  return (
    <ButtonGroup
      orientation='vertical'
      style={{ height: 'clamp(100px, 40vmax, 80vh)' }}
      overflowButton={(overflowStart) => (
        <DropdownMenu
          menuItems={(close) =>
            Array(buttons.length - overflowStart + 1)
              .fill(null)
              .map((_, _index) => {
                const index = overflowStart + _index;
                const onClick = () => {
                  action(\`Clicked button \${index} (overflow)\`)();
                  close();
                };
                return (
                  <MenuItem
                    key={index}
                    onClick={onClick}
                    icon={<SvgPlaceholder />}
                  >
                    Button #{index}
                  </MenuItem>
                );
              })
          }
        >
          <IconButton onClick={() => action('Clicked on overflow icon')()}>
            <SvgMore />
          </IconButton>
        </DropdownMenu>
      )}
      {...args}
    >
      {buttons}
    </ButtonGroup>
  );
};
VerticalOverflow.args = {
  overflowPlacement: 'end',
  orientation: 'vertical',
};
VerticalOverflow.decorators = [
  (Story) => (
    <>
      <Text variant='small' as='small' isMuted>
        Resize the viewport to see overflow behavior.
      </Text>
      <div style={{ border: '1px solid hotpink', padding: 8 }}>
        <Story />
      </div>
    </>
  ),
];
`,locationsMap:{"with-icons":{startLoc:{col:50,line:38},endLoc:{col:1,line:55},startBody:{col:50,line:38},endBody:{col:1,line:55}},overflow:{startLoc:{col:49,line:57},endLoc:{col:1,line:118},startBody:{col:49,line:57},endBody:{col:1,line:118}},"input-button-combo":{startLoc:{col:57,line:124},endLoc:{col:1,line:145},startBody:{col:57,line:124},endBody:{col:1,line:145}},vertical:{startLoc:{col:49,line:151},endLoc:{col:1,line:168},startBody:{col:49,line:151},endBody:{col:1,line:168}},"vertical-overflow":{startLoc:{col:57,line:173},endLoc:{col:1,line:222},startBody:{col:57,line:173},endBody:{col:1,line:222}}}}},title:"Buttons/ButtonGroup",component:On,argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}},id:{control:{disable:!0}},children:{control:{disable:!0}}}};const Cv=e=>N(On,x(f({},e),{children:[l(J,{onClick:_("Clicked add!"),children:l(Sl,{})}),l(J,{onClick:_("Clicked edit!"),isActive:!0,children:l(Lo,{})}),l(J,{disabled:!0,onClick:_("Clicked delete!"),children:l(wl,{})}),l(J,{onClick:_("Clicked undo!"),children:l(Tl,{})})]})),Ys=e=>{const t=Array(10).fill(null).map((a,n)=>l(J,{onClick:()=>_(`Clicked on button ${n+1}`)(),children:l(Je,{})},n));return N(Z,{children:[l(xe,{variant:"small",as:"small",isMuted:!0,children:"Resize the viewport to see overflow behavior."}),l("div",{style:{maxWidth:"clamp(300px, 50%, 100%)",border:"1px solid hotpink",padding:8},children:l(On,x(f({orientation:"horizontal",overflowButton:a=>l(Me,{menuItems:n=>Array(t.length-a+1).fill(null).map((r,i)=>{const s=a+i;return N(ie,{onClick:()=>{_(`Clicked button ${s} (overflow)`)(),n()},icon:l(Je,{}),children:["Button #",s]},s)}),children:l(J,{onClick:()=>_("Clicked on overflow icon")(),children:l(un,{})})})},e),{children:t}))})]})};Ys.args={overflowPlacement:"end",orientation:"horizontal"};const ii=e=>N(On,x(f({},e),{children:[l(ye,{defaultValue:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ",readOnly:!0,style:{minWidth:"30ch"}}),l(ee,{styleType:"high-visibility",onClick:async()=>{await navigator.clipboard.writeText("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"),_("Copied bearer token to clipboard")()},children:"Copy"})]}));ii.args={orientation:"horizontal"};ii.parameters={};const Zs=e=>N(On,x(f({orientation:"vertical"},e),{children:[l(J,{onClick:_("Clicked add!"),children:l(Sl,{})}),l(J,{onClick:_("Clicked edit!"),isActive:!0,children:l(Lo,{})}),l(J,{disabled:!0,onClick:_("Clicked delete!"),children:l(wl,{})}),l(J,{onClick:_("Clicked undo!"),children:l(Tl,{})})]}));Zs.args={orientation:"vertical"};const li=e=>{const t=Array(10).fill(null).map((a,n)=>l(J,{onClick:()=>_(`Clicked on button ${n+1}`)(),children:l(Je,{})},n));return l(On,x(f({orientation:"vertical",style:{height:"clamp(100px, 40vmax, 80vh)"},overflowButton:a=>l(Me,{menuItems:n=>Array(t.length-a+1).fill(null).map((r,i)=>{const s=a+i;return N(ie,{onClick:()=>{_(`Clicked button ${s} (overflow)`)(),n()},icon:l(Je,{}),children:["Button #",s]},s)}),children:l(J,{onClick:()=>_("Clicked on overflow icon")(),children:l(un,{})})})},e),{children:t}))};li.args={overflowPlacement:"end",orientation:"vertical"};li.decorators=[e=>N(Z,{children:[l(xe,{variant:"small",as:"small",isMuted:!0,children:"Resize the viewport to see overflow behavior."}),l("div",{style:{border:"1px solid hotpink",padding:8},children:l(e,{})})]})];const Iv=["WithIcons","Overflow","InputButtonCombo","Vertical","VerticalOverflow"];var xv=Object.freeze(Object.defineProperty({__proto__:null,default:Tv,WithIcons:Cv,Overflow:Ys,InputButtonCombo:ii,Vertical:Zs,VerticalOverflow:li,__namedExportsOrder:Iv},Symbol.toStringTag,{value:"Module"})),kv={component:ln,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}}},title:"Core/Carousel",parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Carousel, CarouselProps, Text, Code } from '@itwin/itwinui-react';

export default {
  component: Carousel,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/Carousel',
  parameters: {
    docs: { source: { excludeDecorators: true } },
  },
} as Meta<CarouselProps>;

export const Basic: Story<CarouselProps> = (args) => {
  const gradients = [
    { from: '#cc2b5e', to: '#753a88' },
    { from: '#00467f', to: '#a5cc82' },
    { from: '#2193b0', to: '#6dd5ed' },
    { from: '#ffe000', to: '#799f0c' },
    { from: '#e65c00', to: '#f9d423' },
    { from: '#1488cc', to: '#2b32b2' },
    { from: '#bbd2c5', to: '#536976' },
    { from: '#9796f0', to: '#fbc7d4' },
    { from: '#b79891', to: '#94716b' },
    { from: '#acb6e5', to: '#86fde8' },
  ];

  return (
    <Carousel style={{ width: 'min(800px, 90vw)' }} {...args}>
      <Carousel.Slider>
        {gradients.map(({ from, to }, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                background: \`linear-gradient(to right, \${from}, \${to})\`,
                height: 350,
                width: '100%',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, color: 'hsl(0deg 0% 100% / 0.7)' }}>
                {index + 1}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Slider>
      <Carousel.Navigation />
    </Carousel>
  );
};

export const Controlled: Story<CarouselProps> = (args) => {
  const gradients = [
    { from: '#cc2b5e', to: '#753a88' },
    { from: '#00467f', to: '#a5cc82' },
    { from: '#2193b0', to: '#6dd5ed' },
    { from: '#ffe000', to: '#799f0c' },
    { from: '#e65c00', to: '#f9d423' },
    { from: '#1488cc', to: '#2b32b2' },
    { from: '#bbd2c5', to: '#536976' },
    { from: '#9796f0', to: '#fbc7d4' },
    { from: '#b79891', to: '#94716b' },
    { from: '#acb6e5', to: '#86fde8' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(5);

  return (
    <Carousel
      {...args}
      style={{ width: 'min(800px, 90vw)' }}
      activeSlideIndex={currentIndex}
      onSlideChange={(index) => setCurrentIndex(index)}
    >
      <Carousel.Slider>
        {gradients.map(({ from, to }, index) => (
          <Carousel.Slide key={index}>
            <div
              style={{
                background: \`linear-gradient(to right, \${from}, \${to})\`,
                height: 350,
                width: '100%',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, color: 'hsl(0deg 0% 100% / 0.7)' }}>
                {index + 1}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel.Slider>
      <Carousel.Navigation />
    </Carousel>
  );
};
Controlled.args = {};
Controlled.argTypes = {
  activeSlideIndex: { control: { disable: true } },
};

const useId = () => 'my-custom-carousel';
export const OnlyDots: Story<CarouselProps> = () => {
  const gradients = [
    { from: '#cc2b5e', to: '#753a88' },
    { from: '#00467f', to: '#a5cc82' },
    { from: '#2193b0', to: '#6dd5ed' },
    { from: '#ffe000', to: '#799f0c' },
    { from: '#e65c00', to: '#f9d423' },
    { from: '#1488cc', to: '#2b32b2' },
    { from: '#bbd2c5', to: '#536976' },
    { from: '#9796f0', to: '#fbc7d4' },
    { from: '#b79891', to: '#94716b' },
    { from: '#acb6e5', to: '#86fde8' },
  ];

  const id = useId();
  const [current, setCurrent] = React.useState(0);

  return (
    <section
      aria-roledescription='carousel'
      tabIndex={0}
      onKeyUp={({ key }) => {
        const diff = key === 'ArrowRight' ? 1 : key === 'ArrowLeft' ? -1 : 0;
        setCurrent(
          (prev) => (gradients.length + prev + diff) % gradients.length,
        );
      }}
      style={{ display: 'inline-grid', width: 'min(90vw, 40vh)' }}
    >
      <ol
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'grid',
          grid: \`[slide] 1fr / [slide] 1fr\`,
        }}
      >
        {gradients.map(({ from, to }, index) => (
          <li
            key={index}
            role='tabpanel'
            id={\`\${id}-slide-\${index}\`}
            onClick={({ currentTarget: { clientWidth }, clientX }) => {
              const diff = clientWidth - clientX > clientWidth / 2 ? -1 : +1;
              setCurrent(
                (prev) => (gradients.length + prev + diff) % gradients.length,
              );
            }}
            style={{
              gridArea: 'slide',
              opacity: current === index ? 1 : 0,
              pointerEvents: current === index ? 'auto' : 'none',
              transition: 'opacity 0.5s',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                background: \`linear-gradient(to right, \${from}, \${to})\`,
                height: 'min(600px, 70vh)',
                display: 'grid',
                placeItems: 'center',
                fontSize: 48,
                color: 'hsl(0deg 0% 100% / 0.7)',
              }}
            >
              {index + 1}
            </div>
          </li>
        ))}
      </ol>
      <Carousel.DotsList
        id={id}
        length={gradients.length}
        currentIndex={current}
        onSlideChange={(_i) => setCurrent(_i)}
        style={{ justifySelf: 'center', maxWidth: 'min(100%, 200px)' }}
      />
    </section>
  );
};
OnlyDots.args = {};
OnlyDots.parameters = { controls: { hideNoControlsWarning: true } };
OnlyDots.argTypes = { activeSlideIndex: { control: { disable: true } } };
OnlyDots.decorators = [
  (Story) => (
    <div style={{ display: 'inline-grid', gap: '1rem' }}>
      <Text isMuted style={{ fontStyle: 'italic' }}>
        This example shows how <Code>Carousel.DotsList</Code> can be used
        outside <Code>Carousel</Code>.
        <br />
        Clicking on the right half of the slide will advance the carousel to the
        next slide, whereas clicking on the left half will go to the previous
        slide.
      </Text>
      <Story />
    </div>
  ),
];
`,locationsMap:{basic:{startLoc:{col:43,line:21},endLoc:{col:1,line:59},startBody:{col:43,line:21},endBody:{col:1,line:59}},controlled:{startLoc:{col:48,line:61},endLoc:{col:1,line:106},startBody:{col:48,line:61},endBody:{col:1,line:106}},"only-dots":{startLoc:{col:46,line:113},endLoc:{col:1,line:194},startBody:{col:46,line:113},endBody:{col:1,line:194}}}},docs:{source:{excludeDecorators:!0}}}};const _v=e=>{const t=[{from:"#cc2b5e",to:"#753a88"},{from:"#00467f",to:"#a5cc82"},{from:"#2193b0",to:"#6dd5ed"},{from:"#ffe000",to:"#799f0c"},{from:"#e65c00",to:"#f9d423"},{from:"#1488cc",to:"#2b32b2"},{from:"#bbd2c5",to:"#536976"},{from:"#9796f0",to:"#fbc7d4"},{from:"#b79891",to:"#94716b"},{from:"#acb6e5",to:"#86fde8"}];return N(ln,x(f({style:{width:"min(800px, 90vw)"}},e),{children:[l(ln.Slider,{children:t.map(({from:a,to:n},r)=>l(ln.Slide,{children:l("div",{style:{background:`linear-gradient(to right, ${a}, ${n})`,height:350,width:"100%",display:"grid",placeItems:"center"},children:l("div",{style:{fontSize:48,color:"hsl(0deg 0% 100% / 0.7)"},children:r+1})})},r))}),l(ln.Navigation,{})]}))},si=e=>{const t=[{from:"#cc2b5e",to:"#753a88"},{from:"#00467f",to:"#a5cc82"},{from:"#2193b0",to:"#6dd5ed"},{from:"#ffe000",to:"#799f0c"},{from:"#e65c00",to:"#f9d423"},{from:"#1488cc",to:"#2b32b2"},{from:"#bbd2c5",to:"#536976"},{from:"#9796f0",to:"#fbc7d4"},{from:"#b79891",to:"#94716b"},{from:"#acb6e5",to:"#86fde8"}],[a,n]=o.useState(5);return N(ln,x(f({},e),{style:{width:"min(800px, 90vw)"},activeSlideIndex:a,onSlideChange:r=>n(r),children:[l(ln.Slider,{children:t.map(({from:r,to:i},s)=>l(ln.Slide,{children:l("div",{style:{background:`linear-gradient(to right, ${r}, ${i})`,height:350,width:"100%",display:"grid",placeItems:"center"},children:l("div",{style:{fontSize:48,color:"hsl(0deg 0% 100% / 0.7)"},children:s+1})})},s))}),l(ln.Navigation,{})]}))};si.args={};si.argTypes={activeSlideIndex:{control:{disable:!0}}};const Ov=()=>"my-custom-carousel",Gt=()=>{const e=[{from:"#cc2b5e",to:"#753a88"},{from:"#00467f",to:"#a5cc82"},{from:"#2193b0",to:"#6dd5ed"},{from:"#ffe000",to:"#799f0c"},{from:"#e65c00",to:"#f9d423"},{from:"#1488cc",to:"#2b32b2"},{from:"#bbd2c5",to:"#536976"},{from:"#9796f0",to:"#fbc7d4"},{from:"#b79891",to:"#94716b"},{from:"#acb6e5",to:"#86fde8"}],t=Ov(),[a,n]=o.useState(0);return N("section",{"aria-roledescription":"carousel",tabIndex:0,onKeyUp:({key:r})=>{const i=r==="ArrowRight"?1:r==="ArrowLeft"?-1:0;n(s=>(e.length+s+i)%e.length)},style:{display:"inline-grid",width:"min(90vw, 40vh)"},children:[l("ol",{style:{listStyle:"none",margin:0,padding:0,display:"grid",grid:"[slide] 1fr / [slide] 1fr"},children:e.map(({from:r,to:i},s)=>l("li",{role:"tabpanel",id:`${t}-slide-${s}`,onClick:({currentTarget:{clientWidth:c},clientX:d})=>{const p=c-d>c/2?-1:1;n(u=>(e.length+u+p)%e.length)},style:{gridArea:"slide",opacity:a===s?1:0,pointerEvents:a===s?"auto":"none",transition:"opacity 0.5s",cursor:"pointer"},children:l("div",{style:{background:`linear-gradient(to right, ${r}, ${i})`,height:"min(600px, 70vh)",display:"grid",placeItems:"center",fontSize:48,color:"hsl(0deg 0% 100% / 0.7)"},children:s+1})},s))}),l(ln.DotsList,{id:t,length:e.length,currentIndex:a,onSlideChange:r=>n(r),style:{justifySelf:"center",maxWidth:"min(100%, 200px)"}})]})};Gt.args={};Gt.parameters={controls:{hideNoControlsWarning:!0}};Gt.argTypes={activeSlideIndex:{control:{disable:!0}}};Gt.decorators=[e=>N("div",{style:{display:"inline-grid",gap:"1rem"},children:[N(xe,{isMuted:!0,style:{fontStyle:"italic"},children:["This example shows how ",l(vn,{children:"Carousel.DotsList"})," can be used outside ",l(vn,{children:"Carousel"}),".",l("br",{}),"Clicking on the right half of the slide will advance the carousel to the next slide, whereas clicking on the left half will go to the previous slide."]}),l(e,{})]})];const Pv=["Basic","Controlled","OnlyDots"];var Bv=Object.freeze(Object.defineProperty({__proto__:null,default:kv,Basic:_v,Controlled:si,OnlyDots:Gt,__namedExportsOrder:Pv},Symbol.toStringTag,{value:"Module"})),Nv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Checkbox, CheckboxProps } from '@itwin/itwinui-react';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
  argTypes: {
    checkmarkClassName: { control: { disable: true } },
    checkmarkStyle: { control: { disable: true } },
  },
} as Meta<CheckboxProps>;

export const Basic: Story<CheckboxProps> = (args) => {
  const { label = 'Basic Checkbox', defaultChecked = true, ...rest } = args;
  return <Checkbox label={label} defaultChecked={defaultChecked} {...rest} />;
};

Basic.args = {
  label: 'Basic Checkbox',
  defaultChecked: true,
};

export const Disabled: Story<CheckboxProps> = (args) => {
  const { label = 'Disabled Checkbox', disabled = true, ...rest } = args;
  return <Checkbox label={label} disabled={disabled} {...rest} />;
};

Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
};

export const Indeterminate: Story<CheckboxProps> = (args) => {
  const {
    label = 'Indeterminate Checkbox',
    indeterminate = true,
    ...rest
  } = args;
  return <Checkbox label={label} indeterminate={indeterminate} {...rest} />;
};

Indeterminate.args = {
  label: 'Indeterminate Checkbox',
  indeterminate: true,
};

export const Positive: Story<CheckboxProps> = (args) => {
  const { label = 'Positive Checkbox', status = 'positive', ...rest } = args;
  return <Checkbox label={label} status={status} {...rest} />;
};

Positive.args = {
  label: 'Positive Checkbox',
  status: 'positive',
};

export const Warning: Story<CheckboxProps> = (args) => {
  const { label = 'Warning Checkbox', status = 'warning', ...rest } = args;
  return <Checkbox label={label} status={status} {...rest} />;
};

Warning.args = {
  label: 'Warning Checkbox',
  status: 'warning',
};

export const Negative: Story<CheckboxProps> = (args) => {
  const { label = 'Negative Checkbox', status = 'negative', ...rest } = args;
  return <Checkbox label={label} status={status} {...rest} />;
};

Negative.args = {
  label: 'Negative Checkbox',
  status: 'negative',
};

export const Loading: Story<CheckboxProps> = (args) => {
  const { label = 'Loading Checkbox', isLoading = true, ...rest } = args;
  return <Checkbox label={label} isLoading={isLoading} {...rest} />;
};

Loading.args = {
  label: 'Loading Checkbox',
  isLoading: true,
};

export const Visibility: Story<CheckboxProps> = (args) => {
  const { label = 'Visibility Checkbox', variant = 'eyeball', ...rest } = args;
  return <Checkbox label={label} variant={variant} {...rest} />;
};

Visibility.args = {
  label: 'Visibility Checkbox',
  variant: 'eyeball',
};
`,locationsMap:{basic:{startLoc:{col:43,line:18},endLoc:{col:1,line:21},startBody:{col:43,line:18},endBody:{col:1,line:21}},disabled:{startLoc:{col:46,line:28},endLoc:{col:1,line:31},startBody:{col:46,line:28},endBody:{col:1,line:31}},indeterminate:{startLoc:{col:51,line:38},endLoc:{col:1,line:45},startBody:{col:51,line:38},endBody:{col:1,line:45}},positive:{startLoc:{col:46,line:52},endLoc:{col:1,line:55},startBody:{col:46,line:52},endBody:{col:1,line:55}},warning:{startLoc:{col:45,line:62},endLoc:{col:1,line:65},startBody:{col:45,line:62},endBody:{col:1,line:65}},negative:{startLoc:{col:46,line:72},endLoc:{col:1,line:75},startBody:{col:46,line:72},endBody:{col:1,line:75}},loading:{startLoc:{col:45,line:82},endLoc:{col:1,line:85},startBody:{col:45,line:82},endBody:{col:1,line:85}},visibility:{startLoc:{col:48,line:92},endLoc:{col:1,line:95},startBody:{col:48,line:92},endBody:{col:1,line:95}}}}},title:"Input/Checkbox",component:Re,argTypes:{checkmarkClassName:{control:{disable:!0}},checkmarkStyle:{control:{disable:!0}}}};const Xs=e=>{const r=e,{label:t="Basic Checkbox",defaultChecked:a=!0}=r,n=L(r,["label","defaultChecked"]);return l(Re,f({label:t,defaultChecked:a},n))};Xs.args={label:"Basic Checkbox",defaultChecked:!0};const Qs=e=>{const r=e,{label:t="Disabled Checkbox",disabled:a=!0}=r,n=L(r,["label","disabled"]);return l(Re,f({label:t,disabled:a},n))};Qs.args={label:"Disabled Checkbox",disabled:!0};const ec=e=>{const r=e,{label:t="Indeterminate Checkbox",indeterminate:a=!0}=r,n=L(r,["label","indeterminate"]);return l(Re,f({label:t,indeterminate:a},n))};ec.args={label:"Indeterminate Checkbox",indeterminate:!0};const nc=e=>{const r=e,{label:t="Positive Checkbox",status:a="positive"}=r,n=L(r,["label","status"]);return l(Re,f({label:t,status:a},n))};nc.args={label:"Positive Checkbox",status:"positive"};const tc=e=>{const r=e,{label:t="Warning Checkbox",status:a="warning"}=r,n=L(r,["label","status"]);return l(Re,f({label:t,status:a},n))};tc.args={label:"Warning Checkbox",status:"warning"};const rc=e=>{const r=e,{label:t="Negative Checkbox",status:a="negative"}=r,n=L(r,["label","status"]);return l(Re,f({label:t,status:a},n))};rc.args={label:"Negative Checkbox",status:"negative"};const ac=e=>{const r=e,{label:t="Loading Checkbox",isLoading:a=!0}=r,n=L(r,["label","isLoading"]);return l(Re,f({label:t,isLoading:a},n))};ac.args={label:"Loading Checkbox",isLoading:!0};const oc=e=>{const r=e,{label:t="Visibility Checkbox",variant:a="eyeball"}=r,n=L(r,["label","variant"]);return l(Re,f({label:t,variant:a},n))};oc.args={label:"Visibility Checkbox",variant:"eyeball"};const Ev=["Basic","Disabled","Indeterminate","Positive","Warning","Negative","Loading","Visibility"];var Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Nv,Basic:Xs,Disabled:Qs,Indeterminate:ec,Positive:nc,Warning:tc,Negative:rc,Loading:ac,Visibility:oc,__namedExportsOrder:Ev},Symbol.toStringTag,{value:"Module"})),Rv={title:"Typography/Code",component:vn,parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Code, CodeProps } from '@itwin/itwinui-react';

export default {
  title: 'Typography/Code',
  component: Code,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    title: { control: { disable: true } },
  },
  args: {
    children: 'push()',
  },
} as Meta<CodeProps>;

export const Basic: Story<CodeProps> = ({ children }) => {
  return (
    <p>
      The <Code>{children}</Code> method adds one or more elements to the end of
      an array and returns the new length of the array.
    </p>
  );
};
`,locationsMap:{basic:{startLoc:{col:39,line:25},endLoc:{col:1,line:32},startBody:{col:39,line:25},endBody:{col:1,line:32}}}},controls:{hideNoControlsWarning:!0}},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},title:{control:{disable:!0}}},args:{children:"push()"}};const Mv=({children:e})=>N("p",{children:["The ",l(vn,{children:e})," method adds one or more elements to the end of an array and returns the new length of the array."]}),Lv=["Basic"];var Av=Object.freeze(Object.defineProperty({__proto__:null,default:Rv,Basic:Mv,__namedExportsOrder:Lv},Symbol.toStringTag,{value:"Module"})),jv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  ColorPicker,
  ColorPickerProps,
  IconButton,
  ColorSwatch,
  Button,
  ButtonGroup,
  ColorValue,
  ColorPalette,
  ColorBuilder,
  ColorInputPanel,
} from '@itwin/itwinui-react';
import { Popover } from '@itwin/itwinui-react/esm/core/utils';
import { action } from '@storybook/addon-actions';
import { SvgSwap } from '@itwin/itwinui-icons-react';

export default {
  component: ColorPicker,
  subcomponents: { ColorBuilder, ColorPalette, ColorInputPanel, ColorSwatch },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    children: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  title: 'Core/ColorPicker',
} as Meta<ColorPickerProps>;

const ColorsList = [
  { color: '#ffffff', name: 'WHITE' },
  { color: '#5a6973', name: 'GREY' },
  { color: '#00121d', name: 'KURETAKE BLACK MANGA' },
  { color: '#002a44', name: 'RHAPSODY IN BLUE' },
  { color: '#00426b', name: 'DARK IMPERIAL BLUE' },
  { color: '#005a92', name: 'JETSKI RACE' },
  { color: '#0073ba', name: 'FRENCH BLUE' },
  { color: '#008be1', name: 'BLUE COLA' },
  { color: '#30b0ff', name: 'FANTASY CONSOLE SKY' },
  { color: '#58bfff', name: 'HELLO SUMMER' },
  { color: '#7fceff', name: 'CHROMIS DAMSEL BLUE' },
  { color: '#a6ddff', name: 'DROPLET' },
  { color: '#cdecff', name: 'LUCID DREAMS' },
  { color: '#e5f5fd', name: 'KODAMA WHITE' },
  { color: '#010200', name: 'REGISTRATION BLACK' },
  { color: '#122306', name: 'YUZU SOY' },
  { color: '#23450b', name: 'FOREST GREEN' },
  { color: '#346711', name: 'TATZELWURM GREEN' },
  { color: '#458816', name: 'CHLOROPHYLL' },
  { color: '#56aa1c', name: 'PLASTIC PINES' },
  { color: '#5fbb1f', name: 'FIELD GREEN' },
  { color: '#67cc22', name: 'GREEN HIGH' },
  { color: '#91e458', name: 'LILLIPUTIAN LIME' },
  { color: '#b2ec8b', name: 'GREEN DAY' },
  { color: '#d4f4bd', name: 'TEA GREEN' },
  { color: '#eef6e8', name: 'VERDE PASTEL' },
  { color: '#9ba5af', name: 'SERYI GREY' },
  { color: '#cf0000', name: 'RED EPIPHYLLUM' },
  { color: '#ff6300', name: 'SAFETY ORANGE' },
  { color: '#ffc335', name: 'RISE-N-SHINE' },
];

export const Basic: Story<ColorPickerProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState(ColorsList[5]);
  const [colorName, setColorName] = React.useState(ColorsList[5].name);

  const onColorChanged = (color: ColorValue) => {
    const hexString = color.toHexString();
    const index = ColorsList.findIndex(
      (swatch) => swatch.color === hexString.toLowerCase(),
    );
    setActiveColor(ColorsList[index]);
    setColorName(ColorsList[index].name);
    action(\`Selected \${ColorsList[index].color}\`)();
  };

  return (
    <>
      <Popover
        content={
          <ColorPicker
            selectedColor={activeColor.color}
            {...args}
            onChangeComplete={onColorChanged}
          >
            <ColorPalette colors={ColorsList.map(({ color }) => color)} />
          </ColorPicker>
        }
        visible={isOpen}
        placement='bottom-start'
      >
        <IconButton onClick={() => setIsOpen((open) => !open)}>
          <ColorSwatch
            style={{ pointerEvents: 'none' }}
            color={activeColor.color}
          />
        </IconButton>
      </Popover>
      <span style={{ marginLeft: 16 }}>{colorName}</span>
    </>
  );
};
Basic.args = {};

export const Advanced: Story<ColorPickerProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<ColorValue>(
    ColorValue.create({ h: 0, s: 100, l: 50 }),
  );

  const formats = ['hsl', 'rgb', 'hex'] as const;
  const [currentFormat, setCurrentFormat] = React.useState<
    typeof formats[number]
  >(formats[0]);

  const onColorChanged = (color: ColorValue) => {
    setSelectedColor(color);
    action(\`Selected \${getDisplayString(color)}\`)();
  };

  const getDisplayString = (color = selectedColor) => {
    switch (currentFormat) {
      case 'hsl':
        return color.toHslString();
      case 'rgb':
        return color.toRgbString();
      case 'hex':
        return color.toHexString().toUpperCase();
    }
  };

  return (
    <>
      <ButtonGroup>
        <Popover
          content={
            <ColorPicker
              selectedColor={selectedColor}
              {...args}
              onChangeComplete={onColorChanged}
            >
              <ColorBuilder />
              <ColorInputPanel defaultColorFormat={currentFormat} />
              <ColorPalette
                label='Saved Colors'
                colors={[
                  { h: 0, s: 100, l: 50 },
                  { r: 255, g: 98, b: 0 },
                  '#fec134',
                  '#5A6973',
                  { h: 95, s: 83, v: 72 },
                  { h: 250, s: 100, l: 59 },
                ]}
              />
            </ColorPicker>
          }
          appendTo={() => document.body}
          visible={isOpen}
          placement='bottom-start'
        >
          <IconButton onClick={() => setIsOpen((open) => !open)}>
            <ColorSwatch
              style={{ pointerEvents: 'none' }}
              color={selectedColor}
            />
          </IconButton>
        </Popover>
        <Button
          onClick={() => {
            setCurrentFormat(
              formats[(formats.indexOf(currentFormat) + 1) % formats.length],
            );
          }}
          endIcon={<SvgSwap />}
        >
          <div style={{ width: 170 }}>
            {getDisplayString() ?? 'No color selected.'}
          </div>
        </Button>
      </ButtonGroup>
    </>
  );
};

Advanced.args = {};

export const WithAlpha: Story<ColorPickerProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState<ColorValue>(
    ColorValue.create({ r: 90, g: 105, b: 115, a: 0.4 }),
  );

  const formats = ['hsl', 'rgb', 'hex'] as const;
  const [currentFormat, setCurrentFormat] = React.useState<
    typeof formats[number]
  >(formats[0]);

  const onColorChanged = (color: ColorValue) => {
    setSelectedColor(color);
    action(\`Selected \${getDisplayString(color)}\`)();
  };

  const getDisplayString = (color = selectedColor) => {
    switch (currentFormat) {
      case 'hsl':
        return color.toHslString(true);
      case 'rgb':
        return color.toRgbString(true);
      case 'hex':
        return color.toHexString(true);
    }
  };

  return (
    <>
      <ButtonGroup>
        <Popover
          content={
            <ColorPicker
              selectedColor={selectedColor}
              {...args}
              onChangeComplete={onColorChanged}
              showAlpha={true}
            >
              <ColorBuilder />
              <ColorInputPanel defaultColorFormat={currentFormat} />
              <ColorPalette
                label='Saved Colors'
                colors={[
                  { r: 90, g: 105, b: 115, a: 1 },
                  { r: 90, g: 105, b: 115, a: 0.81 },
                  { r: 90, g: 105, b: 115, a: 0.4 },
                ]}
              />
            </ColorPicker>
          }
          appendTo={() => document.body}
          visible={isOpen}
          placement='bottom-start'
        >
          <IconButton onClick={() => setIsOpen((open) => !open)}>
            <ColorSwatch
              style={{ pointerEvents: 'none' }}
              color={selectedColor}
            />
          </IconButton>
        </Popover>
        <Button
          onClick={() => {
            setCurrentFormat(
              formats[(formats.indexOf(currentFormat) + 1) % formats.length],
            );
          }}
          endIcon={<SvgSwap />}
        >
          <div style={{ width: 200 }}>
            {getDisplayString() ?? 'No color selected.'}
          </div>
        </Button>
      </ButtonGroup>
    </>
  );
};

WithAlpha.args = {};
`,locationsMap:{basic:{startLoc:{col:46,line:68},endLoc:{col:1,line:108},startBody:{col:46,line:68},endBody:{col:1,line:108}},advanced:{startLoc:{col:49,line:111},endLoc:{col:1,line:189},startBody:{col:49,line:111},endBody:{col:1,line:189}},"with-alpha":{startLoc:{col:50,line:193},endLoc:{col:1,line:269},startBody:{col:50,line:193},endBody:{col:1,line:269}}}}},component:Br,subcomponents:{ColorBuilder:Go,ColorPalette:Nr,ColorInputPanel:qo,ColorSwatch:Mt},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},children:{control:{disable:!0}},id:{control:{disable:!0}}},title:"Core/ColorPicker"};const Rn=[{color:"#ffffff",name:"WHITE"},{color:"#5a6973",name:"GREY"},{color:"#00121d",name:"KURETAKE BLACK MANGA"},{color:"#002a44",name:"RHAPSODY IN BLUE"},{color:"#00426b",name:"DARK IMPERIAL BLUE"},{color:"#005a92",name:"JETSKI RACE"},{color:"#0073ba",name:"FRENCH BLUE"},{color:"#008be1",name:"BLUE COLA"},{color:"#30b0ff",name:"FANTASY CONSOLE SKY"},{color:"#58bfff",name:"HELLO SUMMER"},{color:"#7fceff",name:"CHROMIS DAMSEL BLUE"},{color:"#a6ddff",name:"DROPLET"},{color:"#cdecff",name:"LUCID DREAMS"},{color:"#e5f5fd",name:"KODAMA WHITE"},{color:"#010200",name:"REGISTRATION BLACK"},{color:"#122306",name:"YUZU SOY"},{color:"#23450b",name:"FOREST GREEN"},{color:"#346711",name:"TATZELWURM GREEN"},{color:"#458816",name:"CHLOROPHYLL"},{color:"#56aa1c",name:"PLASTIC PINES"},{color:"#5fbb1f",name:"FIELD GREEN"},{color:"#67cc22",name:"GREEN HIGH"},{color:"#91e458",name:"LILLIPUTIAN LIME"},{color:"#b2ec8b",name:"GREEN DAY"},{color:"#d4f4bd",name:"TEA GREEN"},{color:"#eef6e8",name:"VERDE PASTEL"},{color:"#9ba5af",name:"SERYI GREY"},{color:"#cf0000",name:"RED EPIPHYLLUM"},{color:"#ff6300",name:"SAFETY ORANGE"},{color:"#ffc335",name:"RISE-N-SHINE"}],ic=e=>{const[t,a]=o.useState(!1),[n,r]=o.useState(Rn[5]),[i,s]=o.useState(Rn[5].name),c=d=>{const p=d.toHexString(),u=Rn.findIndex(m=>m.color===p.toLowerCase());r(Rn[u]),s(Rn[u].name),_(`Selected ${Rn[u].color}`)()};return N(Z,{children:[l(hn,{content:l(Br,x(f({selectedColor:n.color},e),{onChangeComplete:c,children:l(Nr,{colors:Rn.map(({color:d})=>d)})})),visible:t,placement:"bottom-start",children:l(J,{onClick:()=>a(d=>!d),children:l(Mt,{style:{pointerEvents:"none"},color:n.color})})}),l("span",{style:{marginLeft:16},children:i})]})};ic.args={};const lc=e=>{var u;const[t,a]=o.useState(!1),[n,r]=o.useState(ze.create({h:0,s:100,l:50})),i=["hsl","rgb","hex"],[s,c]=o.useState(i[0]),d=m=>{r(m),_(`Selected ${p(m)}`)()},p=(m=n)=>{switch(s){case"hsl":return m.toHslString();case"rgb":return m.toRgbString();case"hex":return m.toHexString().toUpperCase()}};return l(Z,{children:N(On,{children:[l(hn,{content:N(Br,x(f({selectedColor:n},e),{onChangeComplete:d,children:[l(Go,{}),l(qo,{defaultColorFormat:s}),l(Nr,{label:"Saved Colors",colors:[{h:0,s:100,l:50},{r:255,g:98,b:0},"#fec134","#5A6973",{h:95,s:83,v:72},{h:250,s:100,l:59}]})]})),appendTo:()=>document.body,visible:t,placement:"bottom-start",children:l(J,{onClick:()=>a(m=>!m),children:l(Mt,{style:{pointerEvents:"none"},color:n})})}),l(ee,{onClick:()=>{c(i[(i.indexOf(s)+1)%i.length])},endIcon:l(Cl,{}),children:l("div",{style:{width:170},children:(u=p())!=null?u:"No color selected."})})]})})};lc.args={};const sc=e=>{var u;const[t,a]=o.useState(!1),[n,r]=o.useState(ze.create({r:90,g:105,b:115,a:.4})),i=["hsl","rgb","hex"],[s,c]=o.useState(i[0]),d=m=>{r(m),_(`Selected ${p(m)}`)()},p=(m=n)=>{switch(s){case"hsl":return m.toHslString(!0);case"rgb":return m.toRgbString(!0);case"hex":return m.toHexString(!0)}};return l(Z,{children:N(On,{children:[l(hn,{content:N(Br,x(f({selectedColor:n},e),{onChangeComplete:d,showAlpha:!0,children:[l(Go,{}),l(qo,{defaultColorFormat:s}),l(Nr,{label:"Saved Colors",colors:[{r:90,g:105,b:115,a:1},{r:90,g:105,b:115,a:.81},{r:90,g:105,b:115,a:.4}]})]})),appendTo:()=>document.body,visible:t,placement:"bottom-start",children:l(J,{onClick:()=>a(m=>!m),children:l(Mt,{style:{pointerEvents:"none"},color:n})})}),l(ee,{onClick:()=>{c(i[(i.indexOf(s)+1)%i.length])},endIcon:l(Cl,{}),children:l("div",{style:{width:200},children:(u=p())!=null?u:"No color selected."})})]})})};sc.args={};const Hv=["Basic","Advanced","WithAlpha"];var Fv=Object.freeze(Object.defineProperty({__proto__:null,default:jv,Basic:ic,Advanced:lc,WithAlpha:sc,__namedExportsOrder:Hv},Symbol.toStringTag,{value:"Module"})),$v={component:Sn,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},options:{control:{disable:!0}},dropdownMenuProps:{control:{disable:!0}}},decorators:[e=>l("div",{style:{maxWidth:"clamp(300px, 50%, 100%)",minHeight:350},children:l(e,{})})],parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  ComboBox,
  ComboBoxProps,
  Label,
  MenuItem,
  StatusMessage,
  SelectOption,
} from '@itwin/itwinui-react';
import { SvgCamera } from '@itwin/itwinui-icons-react';

export default {
  component: ComboBox,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    options: { control: { disable: true } },
    dropdownMenuProps: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 'clamp(300px, 50%, 100%)', minHeight: 350 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: { source: { excludeDecorators: true } },
  },
  title: 'Core/ComboBox',
} as Meta<ComboBoxProps<unknown>>;

const countriesList = [
  { label: 'Afghanistan', value: 'AF' },
  { label: '\xC5land Islands', value: 'AX' },
  { label: 'Albania', value: 'AL' },
  { label: 'Algeria', value: 'DZ' },
  { label: 'American Samoa', value: 'AS' },
  { label: 'AndorrA', value: 'AD' },
  { label: 'Angola', value: 'AO' },
  { label: 'Anguilla', value: 'AI' },
  { label: 'Antarctica', value: 'AQ' },
  { label: 'Antigua and Barbuda', value: 'AG' },
  { label: 'Argentina', value: 'AR' },
  { label: 'Armenia', value: 'AM' },
  { label: 'Aruba', value: 'AW' },
  { label: 'Australia', value: 'AU' },
  { label: 'Austria', value: 'AT' },
  { label: 'Azerbaijan', value: 'AZ' },
  { label: 'Bahamas', value: 'BS' },
  { label: 'Bahrain', value: 'BH' },
  { label: 'Bangladesh', value: 'BD' },
  { label: 'Barbados', value: 'BB' },
  { label: 'Belarus', value: 'BY' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Belize', value: 'BZ' },
  { label: 'Benin', value: 'BJ' },
  { label: 'Bermuda', value: 'BM' },
  { label: 'Bhutan', value: 'BT' },
  { label: 'Bolivia', value: 'BO' },
  { label: 'Bosnia and Herzegovina', value: 'BA' },
  { label: 'Botswana', value: 'BW' },
  { label: 'Bouvet Island', value: 'BV' },
  { label: 'Brazil', value: 'BR' },
  { label: 'British Indian Ocean Territory', value: 'IO' },
  { label: 'Brunei Darussalam', value: 'BN' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Burkina Faso', value: 'BF' },
  { label: 'Burundi', value: 'BI' },
  { label: 'Cambodia', value: 'KH' },
  { label: 'Cameroon', value: 'CM' },
  { label: 'Canada', value: 'CA' },
  { label: 'Cape Verde', value: 'CV' },
  { label: 'Cayman Islands', value: 'KY' },
  { label: 'Central African Republic', value: 'CF' },
  { label: 'Chad', value: 'TD' },
  { label: 'Chile', value: 'CL' },
  { label: 'China', value: 'CN' },
  { label: 'Christmas Island', value: 'CX' },
  { label: 'Cocos (Keeling) Islands', value: 'CC' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Comoros', value: 'KM' },
  { label: 'Congo', value: 'CG' },
  { label: 'Congo, The Democratic Republic of the', value: 'CD' },
  { label: 'Cook Islands', value: 'CK' },
  { label: 'Costa Rica', value: 'CR' },
  { label: "Cote D'Ivoire", value: 'CI' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Cuba', value: 'CU' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Djibouti', value: 'DJ' },
  { label: 'Dominica', value: 'DM' },
  { label: 'Dominican Republic', value: 'DO' },
  { label: 'Ecuador', value: 'EC' },
  { label: 'Egypt', value: 'EG' },
  { label: 'El Salvador', value: 'SV' },
  { label: 'Equatorial Guinea', value: 'GQ' },
  { label: 'Eritrea', value: 'ER' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Ethiopia', value: 'ET' },
  { label: 'Falkland Islands (Malvinas)', value: 'FK' },
  { label: 'Faroe Islands', value: 'FO' },
  { label: 'Fiji', value: 'FJ' },
  { label: 'Finland', value: 'FI' },
  { label: 'France', value: 'FR' },
  { label: 'French Guiana', value: 'GF' },
  { label: 'French Polynesia', value: 'PF' },
  { label: 'French Southern Territories', value: 'TF' },
  { label: 'Gabon', value: 'GA' },
  { label: 'Gambia', value: 'GM' },
  { label: 'Georgia', value: 'GE' },
  { label: 'Germany', value: 'DE' },
  { label: 'Ghana', value: 'GH' },
  { label: 'Gibraltar', value: 'GI' },
  { label: 'Greece', value: 'GR' },
  { label: 'Greenland', value: 'GL' },
  { label: 'Grenada', value: 'GD' },
  { label: 'Guadeloupe', value: 'GP' },
  { label: 'Guam', value: 'GU' },
  { label: 'Guatemala', value: 'GT' },
  { label: 'Guernsey', value: 'GG' },
  { label: 'Guinea', value: 'GN' },
  { label: 'Guinea-Bissau', value: 'GW' },
  { label: 'Guyana', value: 'GY' },
  { label: 'Haiti', value: 'HT' },
  { label: 'Heard Island and Mcdonald Islands', value: 'HM' },
  { label: 'Holy See (Vatican City State)', value: 'VA' },
  { label: 'Honduras', value: 'HN' },
  { label: 'Hong Kong', value: 'HK' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Iceland', value: 'IS' },
  { label: 'India', value: 'IN' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Iran, Islamic Republic Of', value: 'IR' },
  { label: 'Iraq', value: 'IQ' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Isle of Man', value: 'IM' },
  { label: 'Israel', value: 'IL' },
  { label: 'Italy', value: 'IT' },
  { label: 'Jamaica', value: 'JM' },
  { label: 'Japan', value: 'JP' },
  { label: 'Jersey', value: 'JE' },
  { label: 'Jordan', value: 'JO' },
  { label: 'Kazakhstan', value: 'KZ' },
  { label: 'Kenya', value: 'KE' },
  { label: 'Kiribati', value: 'KI' },
  { label: "Korea, Democratic People'S Republic of", value: 'KP' },
  { label: 'Korea, Republic of', value: 'KR' },
  { label: 'Kuwait', value: 'KW' },
  { label: 'Kyrgyzstan', value: 'KG' },
  { label: "Lao People'S Democratic Republic", value: 'LA' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Lebanon', value: 'LB' },
  { label: 'Lesotho', value: 'LS' },
  { label: 'Liberia', value: 'LR' },
  { label: 'Libyan Arab Jamahiriya', value: 'LY' },
  { label: 'Liechtenstein', value: 'LI' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Macao', value: 'MO' },
  { label: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
  { label: 'Madagascar', value: 'MG' },
  { label: 'Malawi', value: 'MW' },
  { label: 'Malaysia', value: 'MY' },
  { label: 'Maldives', value: 'MV' },
  { label: 'Mali', value: 'ML' },
  { label: 'Malta', value: 'MT' },
  { label: 'Marshall Islands', value: 'MH' },
  { label: 'Martinique', value: 'MQ' },
  { label: 'Mauritania', value: 'MR' },
  { label: 'Mauritius', value: 'MU' },
  { label: 'Mayotte', value: 'YT' },
  { label: 'Mexico', value: 'MX' },
  { label: 'Micronesia, Federated States of', value: 'FM' },
  { label: 'Moldova, Republic of', value: 'MD' },
  { label: 'Monaco', value: 'MC' },
  { label: 'Mongolia', value: 'MN' },
  { label: 'Montserrat', value: 'MS' },
  { label: 'Morocco', value: 'MA' },
  { label: 'Mozambique', value: 'MZ' },
  { label: 'Myanmar', value: 'MM' },
  { label: 'Namibia', value: 'NA' },
  { label: 'Nauru', value: 'NR' },
  { label: 'Nepal', value: 'NP' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Netherlands Antilles', value: 'AN' },
  { label: 'New Caledonia', value: 'NC' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'Nicaragua', value: 'NI' },
  { label: 'Niger', value: 'NE' },
  { label: 'Nigeria', value: 'NG' },
  { label: 'Niue', value: 'NU' },
  { label: 'Norfolk Island', value: 'NF' },
  { label: 'Northern Mariana Islands', value: 'MP' },
  { label: 'Norway', value: 'NO' },
  { label: 'Oman', value: 'OM' },
  { label: 'Pakistan', value: 'PK' },
  { label: 'Palau', value: 'PW' },
  { label: 'Palestinian Territory, Occupied', value: 'PS' },
  { label: 'Panama', value: 'PA' },
  { label: 'Papua New Guinea', value: 'PG' },
  { label: 'Paraguay', value: 'PY' },
  { label: 'Peru', value: 'PE' },
  { label: 'Philippines', value: 'PH' },
  { label: 'Pitcairn', value: 'PN' },
  { label: 'Poland', value: 'PL' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Puerto Rico', value: 'PR' },
  { label: 'Qatar', value: 'QA' },
  { label: 'Reunion', value: 'RE' },
  { label: 'Romania', value: 'RO' },
  { label: 'Russian Federation', value: 'RU' },
  { label: 'RWANDA', value: 'RW' },
  { label: 'Saint Helena', value: 'SH' },
  { label: 'Saint Kitts and Nevis', value: 'KN' },
  { label: 'Saint Lucia', value: 'LC' },
  { label: 'Saint Pierre and Miquelon', value: 'PM' },
  { label: 'Saint Vincent and the Grenadines', value: 'VC' },
  { label: 'Samoa', value: 'WS' },
  { label: 'San Marino', value: 'SM' },
  { label: 'Sao Tome and Principe', value: 'ST' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'Senegal', value: 'SN' },
  { label: 'Serbia and Montenegro', value: 'CS' },
  { label: 'Seychelles', value: 'SC' },
  { label: 'Sierra Leone', value: 'SL' },
  { label: 'Singapore', value: 'SG' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Slovenia', value: 'SI' },
  { label: 'Solomon Islands', value: 'SB' },
  { label: 'Somalia', value: 'SO' },
  { label: 'South Africa', value: 'ZA' },
  { label: 'South Georgia and the South Sandwich Islands', value: 'GS' },
  { label: 'Spain', value: 'ES' },
  { label: 'Sri Lanka', value: 'LK' },
  { label: 'Sudan', value: 'SD' },
  { label: 'Surilabel', value: 'SR' },
  { label: 'Svalbard and Jan Mayen', value: 'SJ' },
  { label: 'Swaziland', value: 'SZ' },
  { label: 'Sweden', value: 'SE' },
  { label: 'Switzerland', value: 'CH' },
  { label: 'Syrian Arab Republic', value: 'SY' },
  { label: 'Taiwan, Province of China', value: 'TW' },
  { label: 'Tajikistan', value: 'TJ' },
  { label: 'Tanzania, United Republic of', value: 'TZ' },
  { label: 'Thailand', value: 'TH' },
  { label: 'Timor-Leste', value: 'TL' },
  { label: 'Togo', value: 'TG' },
  { label: 'Tokelau', value: 'TK' },
  { label: 'Tonga', value: 'TO' },
  { label: 'Trinidad and Tobago', value: 'TT' },
  { label: 'Tunisia', value: 'TN' },
  { label: 'Turkey', value: 'TR' },
  { label: 'Turkmenistan', value: 'TM' },
  { label: 'Turks and Caicos Islands', value: 'TC' },
  { label: 'Tuvalu', value: 'TV' },
  { label: 'Uganda', value: 'UG' },
  { label: 'Ukraine', value: 'UA' },
  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'United States', value: 'US' },
  { label: 'United States Minor Outlying Islands', value: 'UM' },
  { label: 'Uruguay', value: 'UY' },
  { label: 'Uzbekistan', value: 'UZ' },
  { label: 'Vanuatu', value: 'VU' },
  { label: 'Venezuela', value: 'VE' },
  { label: 'Viet Nam', value: 'VN' },
  { label: 'Virgin Islands, British', value: 'VG' },
  { label: 'Virgin Islands, U.S.', value: 'VI' },
  { label: 'Wallis and Futuna', value: 'WF' },
  { label: 'Western Sahara', value: 'EH' },
  { label: 'Yemen', value: 'YE' },
  { label: 'Zambia', value: 'ZM' },
  { label: 'Zimbabwe', value: 'ZW' },
];

export const Basic: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(() => countriesList, []);

  return (
    <ComboBox
      options={options}
      inputProps={{ placeholder: 'Select a country' }}
      onChange={(value: string) => action(value ?? '')()}
      {...args}
    />
  );
};
Basic.args = {
  inputProps: { placeholder: 'Select a country' },
} as ComboBoxProps<string>;
Basic.argTypes = {
  value: { control: { disable: true } },
};

export const Controlled: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(() => countriesList, []);
  const [countryValue, setCountryValue] = React.useState('CA');

  return (
    <ComboBox
      options={options}
      inputProps={{ placeholder: 'Select a country' }}
      value={countryValue}
      onChange={(value: string) => {
        action(value)();
        setCountryValue(value);
      }}
      {...args}
    />
  );
};
Controlled.args = { ...Basic.args, value: 'CA' };

export const DisabledItems: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(
    () =>
      countriesList.map(
        (country, index) =>
          ({
            ...country,
            sublabel: \`\${country.value}\${index % 2 ? ' -- disabled' : ''}\`,
            disabled: index % 2 !== 0,
            icon: (
              <img
                loading='lazy'
                style={{ width: 20, height: 15 }}
                src={\`https://flagcdn.com/w20/\${country.value.toLowerCase()}.png\`}
                srcSet={\`https://flagcdn.com/w40/\${country.value.toLowerCase()}.png 2x\`}
                alt=''
              />
            ),
          } as SelectOption<string>),
      ),
    [],
  );
  return (
    <ComboBox
      options={options}
      inputProps={{ placeholder: 'Select a country' }}
      onChange={(value: string) => action(value ?? '')()}
      {...args}
    />
  );
};
DisabledItems.args = { ...Basic.args };

export const WithLabel: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(() => countriesList, []);

  return (
    <>
      <Label htmlFor='combo-input'>Country</Label>
      <ComboBox
        options={options}
        onChange={(value: string) => action(value ?? '')()}
        inputProps={{
          id: 'combo-input', // passing id to inputProps so it can be used in Label htmlFor
          placeholder: 'Select a country',
        }}
        {...args}
      />
    </>
  );
};
WithLabel.args = {
  inputProps: { id: 'combo-input', placeholder: 'Select a country' },
} as ComboBoxProps<string>;

export const WithStatus: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(() => countriesList, []);

  return (
    <ComboBox
      options={options}
      inputProps={{ placeholder: 'Select a country' }}
      onChange={(value: string) => action(value ?? '')()}
      status='negative'
      {...args}
    />
  );
};
WithStatus.args = {
  inputProps: { placeholder: 'Select a country' },
  status: 'negative',
};

export const CustomRenderer: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(() => countriesList, []);
  const [selectedValue, setSelectedValue] = React.useState('AF');

  const onChange = React.useCallback((value: string) => {
    action(value ?? '')();
    setSelectedValue(value);
  }, []);

  const itemRenderer = React.useCallback(
    ({ value, label }, { isSelected, id }) => (
      <MenuItem key={id} id={id} isSelected={isSelected} value={value}>
        <em
          style={{
            textTransform: 'uppercase',
            fontWeight: isSelected ? 'bold' : undefined,
          }}
        >
          {label}
        </em>
      </MenuItem>
    ),
    [],
  ) as NonNullable<ComboBoxProps<string>['itemRenderer']>;

  return (
    <ComboBox
      options={options}
      inputProps={{ placeholder: 'Select a country' }}
      value={selectedValue}
      onChange={onChange}
      itemRenderer={itemRenderer}
      {...args}
    />
  );
};
CustomRenderer.args = {
  inputProps: { placeholder: 'Select a country' },
};

export const WithMessage: Story<Partial<ComboBoxProps<string>>> = (args) => {
  const options = React.useMemo(() => countriesList, []);

  return (
    <ComboBox
      options={options}
      message='This is a message'
      inputProps={{ placeholder: 'Select a country' }}
      onChange={(value: string) => action(value ?? '')()}
      {...args}
    />
  );
};
WithMessage.args = {
  inputProps: { placeholder: 'Select a country' },
  message: 'This is a message',
};

export const WithCustomMessageIcon: Story<Partial<ComboBoxProps<string>>> = (
  args,
) => {
  const options = React.useMemo(() => countriesList, []);

  return (
    <ComboBox
      options={options}
      message={
        <StatusMessage startIcon={<SvgCamera />}>
          This is a message
        </StatusMessage>
      }
      inputProps={{ placeholder: 'Select a country' }}
      onChange={(value: string) => action(value ?? '')()}
      {...args}
    />
  );
};
WithCustomMessageIcon.args = {
  inputProps: { placeholder: 'Select a country' },
  message: (
    <StatusMessage startIcon={<SvgCamera />}>This is a message</StatusMessage>
  ),
};
`,locationsMap:{basic:{startLoc:{col:60,line:286},endLoc:{col:1,line:297},startBody:{col:60,line:286},endBody:{col:1,line:297}},controlled:{startLoc:{col:65,line:305},endLoc:{col:1,line:321},startBody:{col:65,line:305},endBody:{col:1,line:321}},"disabled-items":{startLoc:{col:68,line:324},endLoc:{col:1,line:354},startBody:{col:68,line:324},endBody:{col:1,line:354}},"with-label":{startLoc:{col:64,line:357},endLoc:{col:1,line:374},startBody:{col:64,line:357},endBody:{col:1,line:374}},"with-status":{startLoc:{col:65,line:379},endLoc:{col:1,line:391},startBody:{col:65,line:379},endBody:{col:1,line:391}},"custom-renderer":{startLoc:{col:69,line:397},endLoc:{col:1,line:432},startBody:{col:69,line:397},endBody:{col:1,line:432}},"with-message":{startLoc:{col:66,line:437},endLoc:{col:1,line:449},startBody:{col:66,line:437},endBody:{col:1,line:449}},"with-custom-message-icon":{startLoc:{col:76,line:455},endLoc:{col:1,line:473},startBody:{col:76,line:455},endBody:{col:1,line:473}}}},docs:{source:{excludeDecorators:!0}}},title:"Core/ComboBox"};const En=[{label:"Afghanistan",value:"AF"},{label:"\xC5land Islands",value:"AX"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"American Samoa",value:"AS"},{label:"AndorrA",value:"AD"},{label:"Angola",value:"AO"},{label:"Anguilla",value:"AI"},{label:"Antarctica",value:"AQ"},{label:"Antigua and Barbuda",value:"AG"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Aruba",value:"AW"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH"},{label:"Bangladesh",value:"BD"},{label:"Barbados",value:"BB"},{label:"Belarus",value:"BY"},{label:"Belgium",value:"BE"},{label:"Belize",value:"BZ"},{label:"Benin",value:"BJ"},{label:"Bermuda",value:"BM"},{label:"Bhutan",value:"BT"},{label:"Bolivia",value:"BO"},{label:"Bosnia and Herzegovina",value:"BA"},{label:"Botswana",value:"BW"},{label:"Bouvet Island",value:"BV"},{label:"Brazil",value:"BR"},{label:"British Indian Ocean Territory",value:"IO"},{label:"Brunei Darussalam",value:"BN"},{label:"Bulgaria",value:"BG"},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Cambodia",value:"KH"},{label:"Cameroon",value:"CM"},{label:"Canada",value:"CA"},{label:"Cape Verde",value:"CV"},{label:"Cayman Islands",value:"KY"},{label:"Central African Republic",value:"CF"},{label:"Chad",value:"TD"},{label:"Chile",value:"CL"},{label:"China",value:"CN"},{label:"Christmas Island",value:"CX"},{label:"Cocos (Keeling) Islands",value:"CC"},{label:"Colombia",value:"CO"},{label:"Comoros",value:"KM"},{label:"Congo",value:"CG"},{label:"Congo, The Democratic Republic of the",value:"CD"},{label:"Cook Islands",value:"CK"},{label:"Costa Rica",value:"CR"},{label:"Cote D'Ivoire",value:"CI"},{label:"Croatia",value:"HR"},{label:"Cuba",value:"CU"},{label:"Cyprus",value:"CY"},{label:"Czech Republic",value:"CZ"},{label:"Denmark",value:"DK"},{label:"Djibouti",value:"DJ"},{label:"Dominica",value:"DM"},{label:"Dominican Republic",value:"DO"},{label:"Ecuador",value:"EC"},{label:"Egypt",value:"EG"},{label:"El Salvador",value:"SV"},{label:"Equatorial Guinea",value:"GQ"},{label:"Eritrea",value:"ER"},{label:"Estonia",value:"EE"},{label:"Ethiopia",value:"ET"},{label:"Falkland Islands (Malvinas)",value:"FK"},{label:"Faroe Islands",value:"FO"},{label:"Fiji",value:"FJ"},{label:"Finland",value:"FI"},{label:"France",value:"FR"},{label:"French Guiana",value:"GF"},{label:"French Polynesia",value:"PF"},{label:"French Southern Territories",value:"TF"},{label:"Gabon",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgia",value:"GE"},{label:"Germany",value:"DE"},{label:"Ghana",value:"GH"},{label:"Gibraltar",value:"GI"},{label:"Greece",value:"GR"},{label:"Greenland",value:"GL"},{label:"Grenada",value:"GD"},{label:"Guadeloupe",value:"GP"},{label:"Guam",value:"GU"},{label:"Guatemala",value:"GT"},{label:"Guernsey",value:"GG"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT"},{label:"Heard Island and Mcdonald Islands",value:"HM"},{label:"Holy See (Vatican City State)",value:"VA"},{label:"Honduras",value:"HN"},{label:"Hong Kong",value:"HK"},{label:"Hungary",value:"HU"},{label:"Iceland",value:"IS"},{label:"India",value:"IN"},{label:"Indonesia",value:"ID"},{label:"Iran, Islamic Republic Of",value:"IR"},{label:"Iraq",value:"IQ"},{label:"Ireland",value:"IE"},{label:"Isle of Man",value:"IM"},{label:"Israel",value:"IL"},{label:"Italy",value:"IT"},{label:"Jamaica",value:"JM"},{label:"Japan",value:"JP"},{label:"Jersey",value:"JE"},{label:"Jordan",value:"JO"},{label:"Kazakhstan",value:"KZ"},{label:"Kenya",value:"KE"},{label:"Kiribati",value:"KI"},{label:"Korea, Democratic People'S Republic of",value:"KP"},{label:"Korea, Republic of",value:"KR"},{label:"Kuwait",value:"KW"},{label:"Kyrgyzstan",value:"KG"},{label:"Lao People'S Democratic Republic",value:"LA"},{label:"Latvia",value:"LV"},{label:"Lebanon",value:"LB"},{label:"Lesotho",value:"LS"},{label:"Liberia",value:"LR"},{label:"Libyan Arab Jamahiriya",value:"LY"},{label:"Liechtenstein",value:"LI"},{label:"Lithuania",value:"LT"},{label:"Luxembourg",value:"LU"},{label:"Macao",value:"MO"},{label:"Macedonia, The Former Yugoslav Republic of",value:"MK"},{label:"Madagascar",value:"MG"},{label:"Malawi",value:"MW"},{label:"Malaysia",value:"MY"},{label:"Maldives",value:"MV"},{label:"Mali",value:"ML"},{label:"Malta",value:"MT"},{label:"Marshall Islands",value:"MH"},{label:"Martinique",value:"MQ"},{label:"Mauritania",value:"MR"},{label:"Mauritius",value:"MU"},{label:"Mayotte",value:"YT"},{label:"Mexico",value:"MX"},{label:"Micronesia, Federated States of",value:"FM"},{label:"Moldova, Republic of",value:"MD"},{label:"Monaco",value:"MC"},{label:"Mongolia",value:"MN"},{label:"Montserrat",value:"MS"},{label:"Morocco",value:"MA"},{label:"Mozambique",value:"MZ"},{label:"Myanmar",value:"MM"},{label:"Namibia",value:"NA"},{label:"Nauru",value:"NR"},{label:"Nepal",value:"NP"},{label:"Netherlands",value:"NL"},{label:"Netherlands Antilles",value:"AN"},{label:"New Caledonia",value:"NC"},{label:"New Zealand",value:"NZ"},{label:"Nicaragua",value:"NI"},{label:"Niger",value:"NE"},{label:"Nigeria",value:"NG"},{label:"Niue",value:"NU"},{label:"Norfolk Island",value:"NF"},{label:"Northern Mariana Islands",value:"MP"},{label:"Norway",value:"NO"},{label:"Oman",value:"OM"},{label:"Pakistan",value:"PK"},{label:"Palau",value:"PW"},{label:"Palestinian Territory, Occupied",value:"PS"},{label:"Panama",value:"PA"},{label:"Papua New Guinea",value:"PG"},{label:"Paraguay",value:"PY"},{label:"Peru",value:"PE"},{label:"Philippines",value:"PH"},{label:"Pitcairn",value:"PN"},{label:"Poland",value:"PL"},{label:"Portugal",value:"PT"},{label:"Puerto Rico",value:"PR"},{label:"Qatar",value:"QA"},{label:"Reunion",value:"RE"},{label:"Romania",value:"RO"},{label:"Russian Federation",value:"RU"},{label:"RWANDA",value:"RW"},{label:"Saint Helena",value:"SH"},{label:"Saint Kitts and Nevis",value:"KN"},{label:"Saint Lucia",value:"LC"},{label:"Saint Pierre and Miquelon",value:"PM"},{label:"Saint Vincent and the Grenadines",value:"VC"},{label:"Samoa",value:"WS"},{label:"San Marino",value:"SM"},{label:"Sao Tome and Principe",value:"ST"},{label:"Saudi Arabia",value:"SA"},{label:"Senegal",value:"SN"},{label:"Serbia and Montenegro",value:"CS"},{label:"Seychelles",value:"SC"},{label:"Sierra Leone",value:"SL"},{label:"Singapore",value:"SG"},{label:"Slovakia",value:"SK"},{label:"Slovenia",value:"SI"},{label:"Solomon Islands",value:"SB"},{label:"Somalia",value:"SO"},{label:"South Africa",value:"ZA"},{label:"South Georgia and the South Sandwich Islands",value:"GS"},{label:"Spain",value:"ES"},{label:"Sri Lanka",value:"LK"},{label:"Sudan",value:"SD"},{label:"Surilabel",value:"SR"},{label:"Svalbard and Jan Mayen",value:"SJ"},{label:"Swaziland",value:"SZ"},{label:"Sweden",value:"SE"},{label:"Switzerland",value:"CH"},{label:"Syrian Arab Republic",value:"SY"},{label:"Taiwan, Province of China",value:"TW"},{label:"Tajikistan",value:"TJ"},{label:"Tanzania, United Republic of",value:"TZ"},{label:"Thailand",value:"TH"},{label:"Timor-Leste",value:"TL"},{label:"Togo",value:"TG"},{label:"Tokelau",value:"TK"},{label:"Tonga",value:"TO"},{label:"Trinidad and Tobago",value:"TT"},{label:"Tunisia",value:"TN"},{label:"Turkey",value:"TR"},{label:"Turkmenistan",value:"TM"},{label:"Turks and Caicos Islands",value:"TC"},{label:"Tuvalu",value:"TV"},{label:"Uganda",value:"UG"},{label:"Ukraine",value:"UA"},{label:"United Arab Emirates",value:"AE"},{label:"United Kingdom",value:"GB"},{label:"United States",value:"US"},{label:"United States Minor Outlying Islands",value:"UM"},{label:"Uruguay",value:"UY"},{label:"Uzbekistan",value:"UZ"},{label:"Vanuatu",value:"VU"},{label:"Venezuela",value:"VE"},{label:"Viet Nam",value:"VN"},{label:"Virgin Islands, British",value:"VG"},{label:"Virgin Islands, U.S.",value:"VI"},{label:"Wallis and Futuna",value:"WF"},{label:"Western Sahara",value:"EH"},{label:"Yemen",value:"YE"},{label:"Zambia",value:"ZM"},{label:"Zimbabwe",value:"ZW"}],qt=e=>{const t=o.useMemo(()=>En,[]);return l(Sn,f({options:t,inputProps:{placeholder:"Select a country"},onChange:a=>_(a!=null?a:"")()},e))};qt.args={inputProps:{placeholder:"Select a country"}};qt.argTypes={value:{control:{disable:!0}}};const cc=e=>{const t=o.useMemo(()=>En,[]),[a,n]=o.useState("CA");return l(Sn,f({options:t,inputProps:{placeholder:"Select a country"},value:a,onChange:r=>{_(r)(),n(r)}},e))};cc.args=x(f({},qt.args),{value:"CA"});const dc=e=>{const t=o.useMemo(()=>En.map((a,n)=>x(f({},a),{sublabel:`${a.value}${n%2?" -- disabled":""}`,disabled:n%2!==0,icon:l("img",{loading:"lazy",style:{width:20,height:15},src:`https://flagcdn.com/w20/${a.value.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${a.value.toLowerCase()}.png 2x`,alt:""})})),[]);return l(Sn,f({options:t,inputProps:{placeholder:"Select a country"},onChange:a=>_(a!=null?a:"")()},e))};dc.args=f({},qt.args);const uc=e=>{const t=o.useMemo(()=>En,[]);return N(Z,{children:[l(We,{htmlFor:"combo-input",children:"Country"}),l(Sn,f({options:t,onChange:a=>_(a!=null?a:"")(),inputProps:{id:"combo-input",placeholder:"Select a country"}},e))]})};uc.args={inputProps:{id:"combo-input",placeholder:"Select a country"}};const mc=e=>{const t=o.useMemo(()=>En,[]);return l(Sn,f({options:t,inputProps:{placeholder:"Select a country"},onChange:a=>_(a!=null?a:"")(),status:"negative"},e))};mc.args={inputProps:{placeholder:"Select a country"},status:"negative"};const pc=e=>{const t=o.useMemo(()=>En,[]),[a,n]=o.useState("AF"),r=o.useCallback(s=>{_(s!=null?s:"")(),n(s)},[]),i=o.useCallback(({value:s,label:c},{isSelected:d,id:p})=>l(ie,{id:p,isSelected:d,value:s,children:l("em",{style:{textTransform:"uppercase",fontWeight:d?"bold":void 0},children:c})},p),[]);return l(Sn,f({options:t,inputProps:{placeholder:"Select a country"},value:a,onChange:r,itemRenderer:i},e))};pc.args={inputProps:{placeholder:"Select a country"}};const bc=e=>{const t=o.useMemo(()=>En,[]);return l(Sn,f({options:t,message:"This is a message",inputProps:{placeholder:"Select a country"},onChange:a=>_(a!=null?a:"")()},e))};bc.args={inputProps:{placeholder:"Select a country"},message:"This is a message"};const gc=e=>{const t=o.useMemo(()=>En,[]);return l(Sn,f({options:t,message:l(Jo,{startIcon:l(Il,{}),children:"This is a message"}),inputProps:{placeholder:"Select a country"},onChange:a=>_(a!=null?a:"")()},e))};gc.args={inputProps:{placeholder:"Select a country"},message:l(Jo,{startIcon:l(Il,{}),children:"This is a message"})};const Uv=["Basic","Controlled","DisabledItems","WithLabel","WithStatus","CustomRenderer","WithMessage","WithCustomMessageIcon"];var zv=Object.freeze(Object.defineProperty({__proto__:null,default:$v,Basic:qt,Controlled:cc,DisabledItems:dc,WithLabel:uc,WithStatus:mc,CustomRenderer:pc,WithMessage:bc,WithCustomMessageIcon:gc,__namedExportsOrder:Uv},Symbol.toStringTag,{value:"Module"})),Wv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  DatePicker,
  IconButton,
  TimePicker,
  DatePickerProps,
  generateLocalizedStrings,
} from '@itwin/itwinui-react';
import { SvgCalendar } from '@itwin/itwinui-icons-react';

export default {
  title: 'Core/DatePicker',
  component: DatePicker,
  subcomponents: { TimePicker },
  argTypes: {
    onChange: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    date: { control: 'date' },
  },
  args: {
    setFocus: true,
  },
} as Meta<DatePickerProps>;

export const Basic: Story<DatePickerProps> = (args) => {
  const {
    date = new Date(2021, 4, 11, 14, 55, 22),
    setFocus = true,
    localizedNames,
    ...rest
  } = args;
  const [opened, setOpened] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date(date));
  const onChange = (date: Date) => {
    setCurrentDate(date);
    action(\`New date value: \${date}\`, { clearOnStoryChange: false })();
  };

  React.useEffect(() => {
    setCurrentDate(new Date(date));
    return () => action('', { clearOnStoryChange: true })();
  }, [date]);
  return (
    <>
      <IconButton onClick={() => setOpened(!opened)} id='picker-button'>
        <SvgCalendar />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentDate.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <DatePicker
            {...rest}
            date={currentDate}
            onChange={onChange}
            localizedNames={localizedNames}
            setFocus={setFocus}
          />
        </div>
      )}
    </>
  );
};

Basic.args = {
  date: new Date(2021, 4, 11, 14, 55, 22),
};

export const WithTime: Story<DatePickerProps> = (args) => {
  const {
    date = new Date(2021, 4, 11, 14, 55, 22),
    setFocus = true,
    showTime = true,
    localizedNames,
    ...rest
  } = args;
  const [opened, setOpened] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date(date));
  const onChange = (date: Date) => {
    setCurrentDate(date);
    action(\`New date value: \${date}\`, { clearOnStoryChange: false })();
  };

  React.useEffect(() => {
    setCurrentDate(new Date(date));
    return () => action('', { clearOnStoryChange: true })();
  }, [date]);
  return (
    <>
      <IconButton onClick={() => setOpened(!opened)} id='picker-button'>
        <SvgCalendar />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentDate.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <DatePicker
            {...rest}
            date={currentDate}
            onChange={onChange}
            localizedNames={localizedNames}
            setFocus={setFocus}
            showTime={showTime}
          />
        </div>
      )}
    </>
  );
};

WithTime.args = {
  date: new Date(2021, 4, 11, 14, 55, 22),
  setFocus: true,
  showTime: true,
};

export const Localized: Story<DatePickerProps> = (args) => {
  const {
    date = new Date(2021, 4, 11, 14, 55, 22),
    setFocus = true,
    localizedNames = generateLocalizedStrings('ja'),
    ...rest
  } = args;
  const [opened, setOpened] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date(date));
  const onChange = (date: Date) => {
    setCurrentDate(date);
    action(\`New date value: \${date}\`, { clearOnStoryChange: false })();
  };

  React.useEffect(() => {
    setCurrentDate(new Date(date));
    return () => action('', { clearOnStoryChange: true })();
  }, [date]);
  return (
    <>
      <IconButton onClick={() => setOpened(!opened)} id='picker-button'>
        <SvgCalendar />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentDate.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <DatePicker
            {...rest}
            date={currentDate}
            onChange={onChange}
            localizedNames={localizedNames}
            setFocus={setFocus}
          />
        </div>
      )}
    </>
  );
};

Localized.args = {
  date: new Date(2021, 4, 11, 14, 55, 22),
  localizedNames: generateLocalizedStrings('ja'),
};

export const WithYear: Story<DatePickerProps> = (args) => {
  const {
    date = new Date(2021, 4, 11, 14, 55, 22),
    setFocus = true,
    localizedNames,
    ...rest
  } = args;
  const [opened, setOpened] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date(date));
  const onChange = (date: Date) => {
    setCurrentDate(date);
    action(\`New date value: \${date}\`, { clearOnStoryChange: false })();
  };

  React.useEffect(() => {
    setCurrentDate(new Date(date));
    return () => action('', { clearOnStoryChange: true })();
  }, [date]);
  return (
    <>
      <IconButton onClick={() => setOpened(!opened)} id='picker-button'>
        <SvgCalendar />
      </IconButton>
      <span style={{ marginLeft: 16 }}>{currentDate.toString()}</span>
      {opened && (
        <div style={{ marginTop: 4 }}>
          <DatePicker
            showYearSelection
            {...rest}
            date={currentDate}
            onChange={onChange}
            localizedNames={localizedNames}
            setFocus={setFocus}
          />
        </div>
      )}
    </>
  );
};

WithYear.args = {
  date: new Date(2021, 4, 11, 14, 55, 22),
  showYearSelection: true,
};
`,locationsMap:{basic:{startLoc:{col:45,line:33},endLoc:{col:1,line:70},startBody:{col:45,line:33},endBody:{col:1,line:70}},"with-time":{startLoc:{col:48,line:76},endLoc:{col:1,line:115},startBody:{col:48,line:76},endBody:{col:1,line:115}},localized:{startLoc:{col:49,line:123},endLoc:{col:1,line:160},startBody:{col:49,line:123},endBody:{col:1,line:160}},"with-year":{startLoc:{col:48,line:167},endLoc:{col:1,line:205},startBody:{col:48,line:167},endBody:{col:1,line:205}}}}},title:"Core/DatePicker",component:ct,subcomponents:{TimePicker:Er},argTypes:{onChange:{control:{disable:!0}},className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},date:{control:"date"}},args:{setFocus:!0}};const fc=e=>{const u=e,{date:t=new Date(2021,4,11,14,55,22),setFocus:a=!0,localizedNames:n}=u,r=L(u,["date","setFocus","localizedNames"]),[i,s]=o.useState(!1),[c,d]=o.useState(new Date(t)),p=m=>{d(m),_(`New date value: ${m}`,{clearOnStoryChange:!1})()};return o.useEffect(()=>(d(new Date(t)),()=>_("",{clearOnStoryChange:!0})()),[t]),N(Z,{children:[l(J,{onClick:()=>s(!i),id:"picker-button",children:l(Sr,{})}),l("span",{style:{marginLeft:16},children:c.toString()}),i&&l("div",{style:{marginTop:4},children:l(ct,x(f({},r),{date:c,onChange:p,localizedNames:n,setFocus:a}))})]})};fc.args={date:new Date(2021,4,11,14,55,22)};const yc=e=>{const m=e,{date:t=new Date(2021,4,11,14,55,22),setFocus:a=!0,showTime:n=!0,localizedNames:r}=m,i=L(m,["date","setFocus","showTime","localizedNames"]),[s,c]=o.useState(!1),[d,p]=o.useState(new Date(t)),u=b=>{p(b),_(`New date value: ${b}`,{clearOnStoryChange:!1})()};return o.useEffect(()=>(p(new Date(t)),()=>_("",{clearOnStoryChange:!0})()),[t]),N(Z,{children:[l(J,{onClick:()=>c(!s),id:"picker-button",children:l(Sr,{})}),l("span",{style:{marginLeft:16},children:d.toString()}),s&&l("div",{style:{marginTop:4},children:l(ct,x(f({},i),{date:d,onChange:u,localizedNames:r,setFocus:a,showTime:n}))})]})};yc.args={date:new Date(2021,4,11,14,55,22),setFocus:!0,showTime:!0};const vc=e=>{const u=e,{date:t=new Date(2021,4,11,14,55,22),setFocus:a=!0,localizedNames:n=is("ja")}=u,r=L(u,["date","setFocus","localizedNames"]),[i,s]=o.useState(!1),[c,d]=o.useState(new Date(t)),p=m=>{d(m),_(`New date value: ${m}`,{clearOnStoryChange:!1})()};return o.useEffect(()=>(d(new Date(t)),()=>_("",{clearOnStoryChange:!0})()),[t]),N(Z,{children:[l(J,{onClick:()=>s(!i),id:"picker-button",children:l(Sr,{})}),l("span",{style:{marginLeft:16},children:c.toString()}),i&&l("div",{style:{marginTop:4},children:l(ct,x(f({},r),{date:c,onChange:p,localizedNames:n,setFocus:a}))})]})};vc.args={date:new Date(2021,4,11,14,55,22),localizedNames:is("ja")};const hc=e=>{const u=e,{date:t=new Date(2021,4,11,14,55,22),setFocus:a=!0,localizedNames:n}=u,r=L(u,["date","setFocus","localizedNames"]),[i,s]=o.useState(!1),[c,d]=o.useState(new Date(t)),p=m=>{d(m),_(`New date value: ${m}`,{clearOnStoryChange:!1})()};return o.useEffect(()=>(d(new Date(t)),()=>_("",{clearOnStoryChange:!0})()),[t]),N(Z,{children:[l(J,{onClick:()=>s(!i),id:"picker-button",children:l(Sr,{})}),l("span",{style:{marginLeft:16},children:c.toString()}),i&&l("div",{style:{marginTop:4},children:l(ct,x(f({showYearSelection:!0},r),{date:c,onChange:p,localizedNames:n,setFocus:a}))})]})};hc.args={date:new Date(2021,4,11,14,55,22),showYearSelection:!0};const Vv=["Basic","WithTime","Localized","WithYear"];var Gv=Object.freeze(Object.defineProperty({__proto__:null,default:Wv,Basic:fc,WithTime:yc,Localized:vc,WithYear:hc,__namedExportsOrder:Vv},Symbol.toStringTag,{value:"Module"})),qv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import {
  MenuItem,
  DropdownButton,
  DropdownButtonProps,
} from '@itwin/itwinui-react';

export default {
  title: 'Buttons/DropdownButton',
  component: DropdownButton,
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
  },
} as Meta<DropdownButtonProps>;

export const Basic: Story<DropdownButtonProps> = (args) => {
  const { menuItems, children, ...rest } = args;
  const onClick = (index: number, close: () => void) => () => {
    action(\`Item #\${index} clicked!\`)();
    close();
  };

  const buttonMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onClick(1, close)}>
      Item #1
    </MenuItem>,
    <MenuItem key={2} onClick={onClick(2, close)}>
      Item #2
    </MenuItem>,
    <MenuItem key={3} onClick={onClick(3, close)}>
      Item #3
    </MenuItem>,
  ];

  return (
    <DropdownButton menuItems={menuItems || buttonMenuItems} {...rest}>
      {children}
    </DropdownButton>
  );
};

Basic.args = {
  children: 'Default',
};
`,locationsMap:{basic:{startLoc:{col:49,line:23},endLoc:{col:1,line:47},startBody:{col:49,line:23},endBody:{col:1,line:47}}}}},title:"Buttons/DropdownButton",component:Rt,argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}}}};const Sc=e=>{const s=e,{menuItems:t,children:a}=s,n=L(s,["menuItems","children"]),r=(c,d)=>()=>{_(`Item #${c} clicked!`)(),d()};return l(Rt,x(f({menuItems:t||(c=>[l(ie,{onClick:r(1,c),children:"Item #1"},1),l(ie,{onClick:r(2,c),children:"Item #2"},2),l(ie,{onClick:r(3,c),children:"Item #3"},3)])},n),{children:a}))};Sc.args={children:"Default"};const Kv=["Basic"];var Jv=Object.freeze(Object.defineProperty({__proto__:null,default:qv,Basic:Sc,__namedExportsOrder:Kv},Symbol.toStringTag,{value:"Module"})),Yv={title:"Core/DropdownMenu",component:Me,subcomponents:{MenuItem:ie,MenuDivider:Or,MenuExtraContent:Pr},argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}},id:{control:{disable:!0}}},parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  DropdownMenu,
  DropdownMenuProps,
  IconButton,
  MenuExtraContent,
  MenuDivider,
  MenuItem,
  Select,
  Text,
} from '@itwin/itwinui-react';
import {
  SvgClipboard,
  SvgCrop,
  SvgMore,
  SvgMove,
  SvgPlaceholder,
} from '@itwin/itwinui-icons-react';
import { useState } from '@storybook/addons';

export default {
  title: 'Core/DropdownMenu',
  component: DropdownMenu,
  subcomponents: { MenuItem, MenuDivider, MenuExtraContent },
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
      },
    },
  },
} as Meta<DropdownMenuProps>;

export const Basic: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;
  const onClick = (index: number, close: () => void) => () => {
    action(\`Item #\${index} clicked!\`)();
    close();
  };
  const dropdownMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onClick(1, close)}>
      Item #1
    </MenuItem>,
    <MenuItem key={2} onClick={onClick(2, close)}>
      Item #2
    </MenuItem>,
    <MenuItem key={3} onClick={onClick(3, close)} disabled>
      Item #3
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
      <IconButton>
        <SvgMore />
      </IconButton>
    </DropdownMenu>
  );
};

// Body height is the same as Select component height therefore clicking outside would not close dropdown.
Basic.decorators = [(Story) => <div style={{ minHeight: 150 }}>{Story()}</div>];

export const WithIcons: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;
  const onClick = (actionName: string, close: () => void) => () => {
    action(\`\${actionName} clicked!\`)();
    close();
  };
  const dropdownMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onClick('Crop', close)} icon={<SvgCrop />}>
      Crop
    </MenuItem>,
    <MenuItem key={2} onClick={onClick('Paste', close)} icon={<SvgClipboard />}>
      Paste
    </MenuItem>,
    <MenuItem key={3} onClick={onClick('Move', close)} icon={<SvgMove />}>
      Move
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
      <IconButton>
        <SvgMore />
      </IconButton>
    </DropdownMenu>
  );
};

WithIcons.decorators = [
  (Story) => <div style={{ minHeight: 150 }}>{Story()}</div>,
];

export const WithBadges: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;
  const onClick = (actionName: string, close: () => void) => () => {
    action(\`\${actionName} clicked!\`)();
    close();
  };
  const dropdownMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onClick('Crop', close)} badge={<SvgCrop />}>
      Crop
    </MenuItem>,
    <MenuItem
      key={2}
      onClick={onClick('Paste', close)}
      badge={<SvgClipboard />}
    >
      Paste
    </MenuItem>,
    <MenuItem key={3} onClick={onClick('Move', close)} badge={<SvgMove />}>
      Move
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
      <IconButton>
        <SvgMore />
      </IconButton>
    </DropdownMenu>
  );
};

WithBadges.decorators = [
  (Story) => <div style={{ minHeight: 150 }}>{Story()}</div>,
];

export const WithSublabels: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;
  const onClick = (index: number, close: () => void) => () => {
    action(\`Item #\${index} clicked!\`)();
    close();
  };
  const dropdownMenuItems = (close: () => void) => [
    <MenuItem
      key={1}
      onClick={onClick(1, close)}
      icon={<SvgPlaceholder />}
      sublabel='Sublabel #1'
    >
      Item #1
    </MenuItem>,
    <MenuItem
      key={2}
      onClick={onClick(2, close)}
      icon={<SvgPlaceholder />}
      sublabel='Sublabel #2'
    >
      Item #2
    </MenuItem>,
    <MenuItem
      key={3}
      onClick={onClick(3, close)}
      icon={<SvgPlaceholder />}
      sublabel='Sublabel #3'
    >
      Item #3
    </MenuItem>,
  ];
  return (
    <div style={{ minHeight: 200 }}>
      <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
        <IconButton>
          <SvgMore />
        </IconButton>
      </DropdownMenu>
    </div>
  );
};

WithSublabels.decorators = [
  (Story) => <div style={{ minHeight: 150 }}>{Story()}</div>,
];

export const Submenu: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;
  const onClick = (index: number, close: () => void) => () => {
    action(\`Item #\${index} clicked!\`)();
    close();
  };
  const dropdownMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onClick(1, close)}>
      Item #1
    </MenuItem>,
    <MenuItem key={2} onClick={onClick(2, close)}>
      Item #2
    </MenuItem>,
    <MenuItem
      key={3}
      subMenuItems={[
        <MenuItem
          key={4}
          subMenuItems={[
            <MenuItem key={7} onClick={onClick(7, close)}>
              Item #7
            </MenuItem>,
            <MenuItem key={8} onClick={onClick(8, close)}>
              Item #8
            </MenuItem>,
          ]}
        >
          Item #4
        </MenuItem>,
        <MenuItem key={5} onClick={onClick(5, close)}>
          Item #5
        </MenuItem>,
        <MenuItem
          key={6}
          subMenuItems={[
            <MenuItem key={9} onClick={onClick(9, close)}>
              Item #9
            </MenuItem>,
            <MenuItem key={10} onClick={onClick(10, close)}>
              Item #10
            </MenuItem>,
          ]}
        >
          Item #6
        </MenuItem>,
      ]}
    >
      Item #3
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
      <IconButton>
        <SvgMore />
      </IconButton>
    </DropdownMenu>
  );
};

Submenu.decorators = [
  (Story) => <div style={{ minHeight: 150 }}>{Story()}</div>,
];

export const WithSeparator: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;
  const onClick = (index: number, close: () => void) => () => {
    action(\`Item #\${index} clicked!\`)();
    close();
  };
  const dropdownMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onClick(1, close)}>
      Item #1
    </MenuItem>,
    <MenuItem key={2} onClick={onClick(2, close)}>
      Item #2
    </MenuItem>,
    <MenuDivider key={3} />,
    <MenuItem key={4} onClick={onClick(3, close)} disabled>
      Item #3
    </MenuItem>,
    <MenuItem key={5} onClick={onClick(4, close)}>
      Item #4
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
      <IconButton>
        <SvgMore />
      </IconButton>
    </DropdownMenu>
  );
};

WithSeparator.decorators = [
  (Story) => <div style={{ minHeight: 200 }}>{Story()}</div>,
];

export const WithContent: Story<DropdownMenuProps> = (args) => {
  const { menuItems, ...rest } = args;

  const onClick = (item: string, close: () => void) => () => {
    action(\`'\${item}' clicked!\`)();
    close();
  };

  const [userType, setUserType] = useState('User');

  const dropdownMenuItems = (close: () => void) => [
    <MenuExtraContent key={0}>
      <>
        <Text variant='leading'>Terry Rivers</Text>
        <Text isMuted style={{ marginBottom: 8 }}>
          terry.rivers@email.com
        </Text>
        <Select
          options={[
            { value: 'User', label: 'User' },
            { value: 'Moderator', label: 'Moderator' },
            { value: 'Administrator', label: 'Administrator' },
          ]}
          value={userType}
          onChange={(type) => setUserType(type)}
        />
      </>
    </MenuExtraContent>,
    <MenuDivider key={1} />,
    <MenuItem key={2} onClick={onClick('View profile', close)}>
      View profile
    </MenuItem>,
    <MenuItem key={3} onClick={onClick('Sign out', close)}>
      Sign out
    </MenuItem>,
  ];
  return (
    <DropdownMenu menuItems={menuItems || dropdownMenuItems} {...rest}>
      <IconButton>
        <SvgMore />
      </IconButton>
    </DropdownMenu>
  );
};

WithContent.decorators = [
  (Story) => <div style={{ minHeight: 250 }}>{Story()}</div>,
];
`,locationsMap:{basic:{startLoc:{col:47,line:45},endLoc:{col:1,line:69},startBody:{col:47,line:45},endBody:{col:1,line:69}},"with-icons":{startLoc:{col:51,line:74},endLoc:{col:1,line:98},startBody:{col:51,line:74},endBody:{col:1,line:98}},"with-badges":{startLoc:{col:52,line:104},endLoc:{col:1,line:132},startBody:{col:52,line:104},endBody:{col:1,line:132}},"with-sublabels":{startLoc:{col:55,line:138},endLoc:{col:1,line:179},startBody:{col:55,line:138},endBody:{col:1,line:179}},submenu:{startLoc:{col:49,line:185},endLoc:{col:1,line:242},startBody:{col:49,line:185},endBody:{col:1,line:242}},"with-separator":{startLoc:{col:55,line:248},endLoc:{col:1,line:276},startBody:{col:55,line:248},endBody:{col:1,line:276}},"with-content":{startLoc:{col:53,line:282},endLoc:{col:1,line:325},startBody:{col:53,line:282},endBody:{col:1,line:325}}}},docs:{source:{excludeDecorators:!0}}}};const wc=e=>{const i=e,{menuItems:t}=i,a=L(i,["menuItems"]),n=(s,c)=>()=>{_(`Item #${s} clicked!`)(),c()};return l(Me,x(f({menuItems:t||(s=>[l(ie,{onClick:n(1,s),children:"Item #1"},1),l(ie,{onClick:n(2,s),children:"Item #2"},2),l(ie,{onClick:n(3,s),disabled:!0,children:"Item #3"},3)])},a),{children:l(J,{children:l(un,{})})}))};wc.decorators=[e=>l("div",{style:{minHeight:150},children:e()})];const Tc=e=>{const i=e,{menuItems:t}=i,a=L(i,["menuItems"]),n=(s,c)=>()=>{_(`${s} clicked!`)(),c()};return l(Me,x(f({menuItems:t||(s=>[l(ie,{onClick:n("Crop",s),icon:l(xl,{}),children:"Crop"},1),l(ie,{onClick:n("Paste",s),icon:l(kl,{}),children:"Paste"},2),l(ie,{onClick:n("Move",s),icon:l(_l,{}),children:"Move"},3)])},a),{children:l(J,{children:l(un,{})})}))};Tc.decorators=[e=>l("div",{style:{minHeight:150},children:e()})];const Cc=e=>{const i=e,{menuItems:t}=i,a=L(i,["menuItems"]),n=(s,c)=>()=>{_(`${s} clicked!`)(),c()};return l(Me,x(f({menuItems:t||(s=>[l(ie,{onClick:n("Crop",s),badge:l(xl,{}),children:"Crop"},1),l(ie,{onClick:n("Paste",s),badge:l(kl,{}),children:"Paste"},2),l(ie,{onClick:n("Move",s),badge:l(_l,{}),children:"Move"},3)])},a),{children:l(J,{children:l(un,{})})}))};Cc.decorators=[e=>l("div",{style:{minHeight:150},children:e()})];const Ic=e=>{const i=e,{menuItems:t}=i,a=L(i,["menuItems"]),n=(s,c)=>()=>{_(`Item #${s} clicked!`)(),c()};return l("div",{style:{minHeight:200},children:l(Me,x(f({menuItems:t||(s=>[l(ie,{onClick:n(1,s),icon:l(Je,{}),sublabel:"Sublabel #1",children:"Item #1"},1),l(ie,{onClick:n(2,s),icon:l(Je,{}),sublabel:"Sublabel #2",children:"Item #2"},2),l(ie,{onClick:n(3,s),icon:l(Je,{}),sublabel:"Sublabel #3",children:"Item #3"},3)])},a),{children:l(J,{children:l(un,{})})}))})};Ic.decorators=[e=>l("div",{style:{minHeight:150},children:e()})];const xc=e=>{const i=e,{menuItems:t}=i,a=L(i,["menuItems"]),n=(s,c)=>()=>{_(`Item #${s} clicked!`)(),c()};return l(Me,x(f({menuItems:t||(s=>[l(ie,{onClick:n(1,s),children:"Item #1"},1),l(ie,{onClick:n(2,s),children:"Item #2"},2),l(ie,{subMenuItems:[l(ie,{subMenuItems:[l(ie,{onClick:n(7,s),children:"Item #7"},7),l(ie,{onClick:n(8,s),children:"Item #8"},8)],children:"Item #4"},4),l(ie,{onClick:n(5,s),children:"Item #5"},5),l(ie,{subMenuItems:[l(ie,{onClick:n(9,s),children:"Item #9"},9),l(ie,{onClick:n(10,s),children:"Item #10"},10)],children:"Item #6"},6)],children:"Item #3"},3)])},a),{children:l(J,{children:l(un,{})})}))};xc.decorators=[e=>l("div",{style:{minHeight:150},children:e()})];const kc=e=>{const i=e,{menuItems:t}=i,a=L(i,["menuItems"]),n=(s,c)=>()=>{_(`Item #${s} clicked!`)(),c()};return l(Me,x(f({menuItems:t||(s=>[l(ie,{onClick:n(1,s),children:"Item #1"},1),l(ie,{onClick:n(2,s),children:"Item #2"},2),l(Or,{},3),l(ie,{onClick:n(3,s),disabled:!0,children:"Item #3"},4),l(ie,{onClick:n(4,s),children:"Item #4"},5)])},a),{children:l(J,{children:l(un,{})})}))};kc.decorators=[e=>l("div",{style:{minHeight:200},children:e()})];const _c=e=>{const c=e,{menuItems:t}=c,a=L(c,["menuItems"]),n=(d,p)=>()=>{_(`'${d}' clicked!`)(),p()},[r,i]=ue("User");return l(Me,x(f({menuItems:t||(d=>[l(Pr,{children:N(Z,{children:[l(xe,{variant:"leading",children:"Terry Rivers"}),l(xe,{isMuted:!0,style:{marginBottom:8},children:"terry.rivers@email.com"}),l(Xe,{options:[{value:"User",label:"User"},{value:"Moderator",label:"Moderator"},{value:"Administrator",label:"Administrator"}],value:r,onChange:p=>i(p)})]})},0),l(Or,{},1),l(ie,{onClick:n("View profile",d),children:"View profile"},2),l(ie,{onClick:n("Sign out",d),children:"Sign out"},3)])},a),{children:l(J,{children:l(un,{})})}))};_c.decorators=[e=>l("div",{style:{minHeight:250},children:e()})];const Zv=["Basic","WithIcons","WithBadges","WithSublabels","Submenu","WithSeparator","WithContent"];var Xv=Object.freeze(Object.defineProperty({__proto__:null,default:Yv,Basic:wc,WithIcons:Tc,WithBadges:Cc,WithSublabels:Ic,Submenu:xc,WithSeparator:kc,WithContent:_c,__namedExportsOrder:Zv},Symbol.toStringTag,{value:"Module"})),Qv={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Anchor, ErrorPage, ErrorPageProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/ErrorPage',
  component: ErrorPage,
  argTypes: {
    id: { control: { disable: true } },
    errorType: {
      type: { required: true } as unknown,
    },
    primaryButtonHandle: { action: 'Primary button clicked' },
    secondaryButtonHandle: { action: 'Secondary button clicked' },
  },
  args: {
    primaryButtonLabel: 'Close',
    secondaryButtonLabel: 'Cancel',
  },
} as Meta<ErrorPageProps>;

export const Unauthorized: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
Unauthorized.args = {
  errorType: '401',
  errorMessage: (
    <>
      You do not have permission to access this server.
      <br />
      Unable to fulfill request.
    </>
  ),
};

export const Forbidden: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
Forbidden.args = {
  errorType: '403',
  errorMessage: (
    <>
      You do not have permission to access this server.
      <br />
      Unable to fulfill request.
    </>
  ),
};

export const PageNotFound: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
PageNotFound.args = {
  errorType: '404',
  errorMessage: (
    <>
      We can not find the iModel that you are looking for or it does not exist.
      <br />
      Visit the iModel HUB or contact our support team.
    </>
  ),
};

export const InternalServerError: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
InternalServerError.args = {
  errorType: '500',
  errorMessage:
    'Please retry again. If this continues to happen, please contact our support team or visit the iModel HUB.',
};

export const BadGateway: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
BadGateway.args = {
  errorType: '502',
  errorMessage:
    'The server encountered a temporary error. Please try again in 30 seconds or visit iModel HUB.',
};

export const ServiceUnavailable: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
ServiceUnavailable.args = {
  errorType: '503',
  errorMessage:
    'This service is being worked on. Please come back in a little bit or visit iModel HUB.',
};

export const Generic: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
Generic.args = {
  errorType: 'generic',
  errorMessage:
    "We can't find the iModel that you are looking for or it does not exist. Visit the iModel HUB or contact our support team.",
};

export const CustomHtmlMessage: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
CustomHtmlMessage.args = {
  errorMessage: (
    <>
      A React component with an{' '}
      <Anchor href='https://www.bentley.com' target='_blank' rel='noreferrer'>
        anchor
      </Anchor>{' '}
      may be passed.
    </>
  ),
};

export const WithoutMessageOrButtons: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
WithoutMessageOrButtons.args = {
  primaryButtonLabel: undefined,
  secondaryButtonLabel: undefined,
  primaryButtonHandle: undefined,
  secondaryButtonHandle: undefined,
};

export const TranslatedMessages: Story<ErrorPageProps> = (props) => (
  <ErrorPage {...props} />
);
TranslatedMessages.args = {
  errorType: 'generic',
  errorMessage:
    "We can't find the iModel that you are looking for or it does not exist. Visit the iModel HUB or contact our support team.",
  translatedErrorMessages: {
    unauthorized: 'uNaUtHoRiZeD',
    forbidden: 'fOrBiDdEn',
    pageNotFound: 'pAgE nOt FoUnD',
    internalServerError: 'iNtErNaL sErVeR eRrOr',
    badGateway: 'bAd GaTeWaY',
    serviceUnavailable: 'sErViCe UnAvAiLaBlE',
    error: 'eRrOr',
  },
};
`,locationsMap:{unauthorized:{startLoc:{col:51,line:26},endLoc:{col:1,line:28},startBody:{col:51,line:26},endBody:{col:1,line:28}},forbidden:{startLoc:{col:48,line:40},endLoc:{col:1,line:42},startBody:{col:48,line:40},endBody:{col:1,line:42}},"page-not-found":{startLoc:{col:51,line:54},endLoc:{col:1,line:56},startBody:{col:51,line:54},endBody:{col:1,line:56}},"internal-server-error":{startLoc:{col:58,line:68},endLoc:{col:1,line:70},startBody:{col:58,line:68},endBody:{col:1,line:70}},"bad-gateway":{startLoc:{col:49,line:77},endLoc:{col:1,line:79},startBody:{col:49,line:77},endBody:{col:1,line:79}},"service-unavailable":{startLoc:{col:57,line:86},endLoc:{col:1,line:88},startBody:{col:57,line:86},endBody:{col:1,line:88}},generic:{startLoc:{col:46,line:95},endLoc:{col:1,line:97},startBody:{col:46,line:95},endBody:{col:1,line:97}},"custom-html-message":{startLoc:{col:56,line:104},endLoc:{col:1,line:106},startBody:{col:56,line:104},endBody:{col:1,line:106}},"without-message-or-buttons":{startLoc:{col:62,line:119},endLoc:{col:1,line:121},startBody:{col:62,line:119},endBody:{col:1,line:121}},"translated-messages":{startLoc:{col:57,line:129},endLoc:{col:1,line:131},startBody:{col:57,line:129},endBody:{col:1,line:131}}}}},title:"Core/ErrorPage",component:rn,argTypes:{id:{control:{disable:!0}},errorType:{type:{required:!0}},primaryButtonHandle:{action:"Primary button clicked"},secondaryButtonHandle:{action:"Secondary button clicked"}},args:{primaryButtonLabel:"Close",secondaryButtonLabel:"Cancel"}};const Oc=e=>l(rn,f({},e));Oc.args={errorType:"401",errorMessage:N(Z,{children:["You do not have permission to access this server.",l("br",{}),"Unable to fulfill request."]})};const Pc=e=>l(rn,f({},e));Pc.args={errorType:"403",errorMessage:N(Z,{children:["You do not have permission to access this server.",l("br",{}),"Unable to fulfill request."]})};const Bc=e=>l(rn,f({},e));Bc.args={errorType:"404",errorMessage:N(Z,{children:["We can not find the iModel that you are looking for or it does not exist.",l("br",{}),"Visit the iModel HUB or contact our support team."]})};const Nc=e=>l(rn,f({},e));Nc.args={errorType:"500",errorMessage:"Please retry again. If this continues to happen, please contact our support team or visit the iModel HUB."};const Ec=e=>l(rn,f({},e));Ec.args={errorType:"502",errorMessage:"The server encountered a temporary error. Please try again in 30 seconds or visit iModel HUB."};const Dc=e=>l(rn,f({},e));Dc.args={errorType:"503",errorMessage:"This service is being worked on. Please come back in a little bit or visit iModel HUB."};const Rc=e=>l(rn,f({},e));Rc.args={errorType:"generic",errorMessage:"We can't find the iModel that you are looking for or it does not exist. Visit the iModel HUB or contact our support team."};const Mc=e=>l(rn,f({},e));Mc.args={errorMessage:N(Z,{children:["A React component with an"," ",l(Le,{href:"https://www.bentley.com",target:"_blank",rel:"noreferrer",children:"anchor"})," ","may be passed."]})};const Lc=e=>l(rn,f({},e));Lc.args={primaryButtonLabel:void 0,secondaryButtonLabel:void 0,primaryButtonHandle:void 0,secondaryButtonHandle:void 0};const Ac=e=>l(rn,f({},e));Ac.args={errorType:"generic",errorMessage:"We can't find the iModel that you are looking for or it does not exist. Visit the iModel HUB or contact our support team.",translatedErrorMessages:{unauthorized:"uNaUtHoRiZeD",forbidden:"fOrBiDdEn",pageNotFound:"pAgE nOt FoUnD",internalServerError:"iNtErNaL sErVeR eRrOr",badGateway:"bAd GaTeWaY",serviceUnavailable:"sErViCe UnAvAiLaBlE",error:"eRrOr"}};const eh=["Unauthorized","Forbidden","PageNotFound","InternalServerError","BadGateway","ServiceUnavailable","Generic","CustomHtmlMessage","WithoutMessageOrButtons","TranslatedMessages"];var nh=Object.freeze(Object.defineProperty({__proto__:null,default:Qv,Unauthorized:Oc,Forbidden:Pc,PageNotFound:Bc,InternalServerError:Nc,BadGateway:Ec,ServiceUnavailable:Dc,Generic:Rc,CustomHtmlMessage:Mc,WithoutMessageOrButtons:Lc,TranslatedMessages:Ac,__namedExportsOrder:eh},Symbol.toStringTag,{value:"Module"})),th={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ExpandableBlock, ExpandableBlockProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/ExpandableBlock',
  component: ExpandableBlock,
  argTypes: {
    onToggle: {
      action: 'isExpanding',
    },
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
    endIcon: { control: { disable: true } },
  },
  args: {
    children: 'Content in block!',
  },
} as Meta<ExpandableBlockProps>;

export const Basic: Story<Partial<ExpandableBlockProps>> = (args) => {
  return (
    <ExpandableBlock title='Basic Block' {...args}>
      {args.children}
    </ExpandableBlock>
  );
};

Basic.args = {
  title: 'Basic Block',
  isExpanded: false,
};

export const WithCaption: Story<Partial<ExpandableBlockProps>> = (args) => {
  return (
    <ExpandableBlock title='Basic Block' caption='basic caption' {...args}>
      {args.children}
    </ExpandableBlock>
  );
};

WithCaption.args = {
  title: 'Basic Block',
  isExpanded: false,
  caption: 'basic caption',
};

export const Accordion: Story<Partial<ExpandableBlockProps>> = (args) => {
  const [openedBlock, setOpenedBlock] = useState<number | undefined>(undefined);
  const toggleHandler = (isExpanding: boolean, id: number) => {
    action(\`isExpanding: \${isExpanding}, id: \${id}\`, {
      clearOnStoryChange: false,
    })();
    if (isExpanding) {
      setOpenedBlock(id);
    } else {
      setOpenedBlock(undefined);
    }
  };

  useEffect(() => {
    return () => action('', { clearOnStoryChange: true })();
  }, []);

  return (
    <>
      {[...Array(3).fill(null)].map((_, index) => (
        <ExpandableBlock
          key={index}
          title={\`Basic Block #\${index + 1}\`}
          isExpanded={openedBlock === index}
          onToggle={(isExpanding) => toggleHandler(isExpanding, index)}
          caption={args.caption}
          {...args}
        >
          {args.children}
        </ExpandableBlock>
      ))}
    </>
  );
};

Accordion.argTypes = {
  title: { control: { disable: true } },
  isExpanded: { control: { disable: true } },
  onToggle: { control: { disable: true } },
};

export const StatusIcon: Story<Partial<ExpandableBlockProps>> = (args) => {
  return (
    <ExpandableBlock title='Basic Block' status='positive' {...args}>
      {args.children}
    </ExpandableBlock>
  );
};

StatusIcon.args = {
  title: 'Basic Block With Status',
  isExpanded: false,
  status: 'positive',
};

export const Small: Story<Partial<ExpandableBlockProps>> = (args) => {
  return (
    <ExpandableBlock title='Basic Block' size='small' {...args}>
      {args.children}
    </ExpandableBlock>
  );
};

Small.args = {
  title: 'Basic Block',
  size: 'small',
};

export const Borderless: Story<Partial<ExpandableBlockProps>> = (args) => {
  return (
    <ExpandableBlock title='Basic Block' styleType='borderless' {...args}>
      {args.children}
    </ExpandableBlock>
  );
};

Borderless.args = {
  title: 'Basic Block',
  styleType: 'borderless',
};
`,locationsMap:{basic:{startLoc:{col:59,line:28},endLoc:{col:1,line:34},startBody:{col:59,line:28},endBody:{col:1,line:34}},"with-caption":{startLoc:{col:65,line:41},endLoc:{col:1,line:47},startBody:{col:65,line:41},endBody:{col:1,line:47}},accordion:{startLoc:{col:63,line:55},endLoc:{col:1,line:88},startBody:{col:63,line:55},endBody:{col:1,line:88}},"status-icon":{startLoc:{col:64,line:96},endLoc:{col:1,line:102},startBody:{col:64,line:96},endBody:{col:1,line:102}},small:{startLoc:{col:59,line:110},endLoc:{col:1,line:116},startBody:{col:59,line:110},endBody:{col:1,line:116}},borderless:{startLoc:{col:64,line:123},endLoc:{col:1,line:129},startBody:{col:64,line:123},endBody:{col:1,line:129}}}}},title:"Core/ExpandableBlock",component:Wn,argTypes:{onToggle:{action:"isExpanding"},style:{control:{disable:!0}},className:{control:{disable:!0}},id:{control:{disable:!0}},endIcon:{control:{disable:!0}}},args:{children:"Content in block!"}};const jc=e=>l(Wn,x(f({title:"Basic Block"},e),{children:e.children}));jc.args={title:"Basic Block",isExpanded:!1};const Hc=e=>l(Wn,x(f({title:"Basic Block",caption:"basic caption"},e),{children:e.children}));Hc.args={title:"Basic Block",isExpanded:!1,caption:"basic caption"};const Fc=e=>{const[t,a]=ue(void 0),n=(r,i)=>{_(`isExpanding: ${r}, id: ${i}`,{clearOnStoryChange:!1})(),a(r?i:void 0)};return Ol(()=>()=>_("",{clearOnStoryChange:!0})(),[]),l(Z,{children:[...Array(3).fill(null)].map((r,i)=>l(Wn,x(f({title:`Basic Block #${i+1}`,isExpanded:t===i,onToggle:s=>n(s,i),caption:e.caption},e),{children:e.children}),i))})};Fc.argTypes={title:{control:{disable:!0}},isExpanded:{control:{disable:!0}},onToggle:{control:{disable:!0}}};const $c=e=>l(Wn,x(f({title:"Basic Block",status:"positive"},e),{children:e.children}));$c.args={title:"Basic Block With Status",isExpanded:!1,status:"positive"};const Uc=e=>l(Wn,x(f({title:"Basic Block",size:"small"},e),{children:e.children}));Uc.args={title:"Basic Block",size:"small"};const zc=e=>l(Wn,x(f({title:"Basic Block",styleType:"borderless"},e),{children:e.children}));zc.args={title:"Basic Block",styleType:"borderless"};const rh=["Basic","WithCaption","Accordion","StatusIcon","Small","Borderless"];var ah=Object.freeze(Object.defineProperty({__proto__:null,default:th,Basic:jc,WithCaption:Hc,Accordion:Fc,StatusIcon:$c,Small:Uc,Borderless:zc,__namedExportsOrder:rh},Symbol.toStringTag,{value:"Module"})),oh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { useState } from '@storybook/addons';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  Fieldset,
  FieldsetProps,
  InputGroup,
  LabeledSelect,
  Radio,
  ToggleSwitch,
} from '@itwin/itwinui-react';

export default {
  title: 'Input/Fieldset',
  component: Fieldset,
  argTypes: {
    children: { control: { disable: true } },
  },
} as Meta<FieldsetProps>;

export const Basic: Story<FieldsetProps> = (args) => {
  const [value, setValue] = useState<number | undefined>(undefined);

  return (
    <Fieldset
      legend='General Settings'
      style={{ display: 'flex', flexDirection: 'column', gap: 11 }}
      {...args}
    >
      <LabeledSelect
        label='Resolution'
        options={[
          { value: 1, label: '1200 x 1000' },
          { value: 2, label: '1600 x 1200' },
          { value: 3, label: '2560 x 1600' },
        ]}
        displayStyle='inline'
        value={value}
        onChange={(value) => setValue(value)}
        placeholder='Select'
      />

      <InputGroup label='Color Theme' displayStyle='inline'>
        <Radio name='choice' value='option1' label={'Light'} />
        <Radio name='choice' value='option2' label={'Dark'} />
        <Radio name='choice' value='option3' label={'Match device'} />
      </InputGroup>

      <InputGroup>
        <ToggleSwitch label='Share usage statistics' />
        <ToggleSwitch label='Share crash logs' />
        <ToggleSwitch disabled label='Advanced settings' />
      </InputGroup>
    </Fieldset>
  );
};
Basic.args = { legend: 'General Settings', disabled: false };

export const Disabled: Story<FieldsetProps> = (args) => {
  const [value, setValue] = useState<number | undefined>(undefined);

  return (
    <Fieldset
      legend='General Settings'
      style={{ display: 'flex', flexDirection: 'column', gap: 11 }}
      disabled
      {...args}
    >
      <LabeledSelect
        label='Resolution'
        options={[
          { value: 1, label: '1200 x 1000' },
          { value: 2, label: '1600 x 1200' },
          { value: 3, label: '2560 x 1600' },
        ]}
        displayStyle='inline'
        value={value}
        onChange={(value) => setValue(value)}
        placeholder='Select'
      />

      <InputGroup label='Color Theme' displayStyle='inline'>
        <Radio name='choice' value='option1' label={'Light'} />
        <Radio name='choice' value='option2' label={'Dark'} />
        <Radio name='choice' value='option3' label={'Match device'} />
      </InputGroup>

      <InputGroup>
        <ToggleSwitch label='Share usage statistics' />
        <ToggleSwitch label='Share crash logs' />
        <ToggleSwitch label='Advanced settings' />
      </InputGroup>
    </Fieldset>
  );
};
Disabled.args = { legend: 'General Settings', disabled: true };
`,locationsMap:{basic:{startLoc:{col:43,line:25},endLoc:{col:1,line:60},startBody:{col:43,line:25},endBody:{col:1,line:60}},disabled:{startLoc:{col:46,line:63},endLoc:{col:1,line:99},startBody:{col:46,line:63},endBody:{col:1,line:99}}}}},title:"Input/Fieldset",component:Yo,argTypes:{children:{control:{disable:!0}}}};const Wc=e=>{const[t,a]=ue(void 0);return N(Yo,x(f({legend:"General Settings",style:{display:"flex",flexDirection:"column",gap:11}},e),{children:[l(Bn,{label:"Resolution",options:[{value:1,label:"1200 x 1000"},{value:2,label:"1600 x 1200"},{value:3,label:"2560 x 1600"}],displayStyle:"inline",value:t,onChange:n=>a(n),placeholder:"Select"}),N(cn,{label:"Color Theme",displayStyle:"inline",children:[l(qe,{name:"choice",value:"option1",label:"Light"}),l(qe,{name:"choice",value:"option2",label:"Dark"}),l(qe,{name:"choice",value:"option3",label:"Match device"})]}),N(cn,{children:[l(Fe,{label:"Share usage statistics"}),l(Fe,{label:"Share crash logs"}),l(Fe,{disabled:!0,label:"Advanced settings"})]})]}))};Wc.args={legend:"General Settings",disabled:!1};const Vc=e=>{const[t,a]=ue(void 0);return N(Yo,x(f({legend:"General Settings",style:{display:"flex",flexDirection:"column",gap:11},disabled:!0},e),{children:[l(Bn,{label:"Resolution",options:[{value:1,label:"1200 x 1000"},{value:2,label:"1600 x 1200"},{value:3,label:"2560 x 1600"}],displayStyle:"inline",value:t,onChange:n=>a(n),placeholder:"Select"}),N(cn,{label:"Color Theme",displayStyle:"inline",children:[l(qe,{name:"choice",value:"option1",label:"Light"}),l(qe,{name:"choice",value:"option2",label:"Dark"}),l(qe,{name:"choice",value:"option3",label:"Match device"})]}),N(cn,{children:[l(Fe,{label:"Share usage statistics"}),l(Fe,{label:"Share crash logs"}),l(Fe,{label:"Advanced settings"})]})]}))};Vc.args={legend:"General Settings",disabled:!0};const ih=["Basic","Disabled"];var lh=Object.freeze(Object.defineProperty({__proto__:null,default:oh,Basic:Wc,Disabled:Vc,__namedExportsOrder:ih},Symbol.toStringTag,{value:"Module"})),sh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { useState } from '@storybook/client-api';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  FileUpload,
  FileUploadProps,
  FileUploadTemplate,
  LabeledInput,
} from '@itwin/itwinui-react';

export default {
  component: FileUpload,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    title: { control: { disable: true } },
    id: { control: { disable: true } },
    onFileDropped: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/FileUpload',
} as Meta<FileUploadProps>;

export const Default: Story<FileUploadProps> = (args) => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUpload
      {...args}
      onFileDropped={(files) => {
        setFiles(Array.from(files));
        action(\`\${files.length} files uploaded\`)();
      }}
    >
      <FileUploadTemplate
        onChange={(e) => setFiles(Array.from(e.target.files || []))}
      >
        {files.map((f) => f.name).join(', ')}
      </FileUploadTemplate>
    </FileUpload>
  );
};

export const WrappingInput: Story<FileUploadProps> = (args) => {
  const [files, setFiles] = useState<Array<File>>([]);

  return (
    <FileUpload
      dragContent='Drop file to upload'
      {...args}
      onFileDropped={(files) => {
        setFiles(Array.from(files));
        action(\`\${files.length} files uploaded\`)();
      }}
    >
      <LabeledInput
        placeholder='Type a message'
        style={{ width: '100%' }}
        message={
          files.length
            ? \`Attached: \${files.map((f) => f.name)}\`
            : 'Drag files to attach'
        }
      />
    </FileUpload>
  );
};

WrappingInput.args = {
  dragContent: 'Drop file to upload',
};
`,locationsMap:{default:{startLoc:{col:47,line:29},endLoc:{col:1,line:47},startBody:{col:47,line:29},endBody:{col:1,line:47}},"wrapping-input":{startLoc:{col:53,line:49},endLoc:{col:1,line:72},startBody:{col:53,line:49},endBody:{col:1,line:72}}}}},component:Zo,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},title:{control:{disable:!0}},id:{control:{disable:!0}},onFileDropped:{control:{disable:!0}},children:{control:{disable:!0}}},title:"Core/FileUpload"};const ch=e=>{const[t,a]=ue([]);return l(Zo,x(f({},e),{onFileDropped:n=>{a(Array.from(n)),_(`${n.length} files uploaded`)()},children:l(Yg,{onChange:n=>a(Array.from(n.target.files||[])),children:t.map(n=>n.name).join(", ")})}))},Gc=e=>{const[t,a]=ue([]);return l(Zo,x(f({dragContent:"Drop file to upload"},e),{onFileDropped:n=>{a(Array.from(n)),_(`${n.length} files uploaded`)()},children:l($e,{placeholder:"Type a message",style:{width:"100%"},message:t.length?`Attached: ${t.map(n=>n.name)}`:"Drag files to attach"})}))};Gc.args={dragContent:"Drop file to upload"};const dh=["Default","WrappingInput"];var uh=Object.freeze(Object.defineProperty({__proto__:null,default:sh,Default:ch,WrappingInput:Gc,__namedExportsOrder:dh},Symbol.toStringTag,{value:"Module"})),mh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Footer, FooterElement, FooterProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/Footer',
  component: Footer,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
} as Meta<FooterProps>;

export const Basic: Story<FooterProps> = ({
  translatedTitles,
  ...rest
}: FooterProps) => {
  return <Footer translatedTitles={translatedTitles} {...rest} />;
};

Basic.args = {
  translatedTitles: {
    cookies: 'Cookies translated',
  },
} as FooterProps;

export const AppendedCustomElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  return (
    <Footer
      customElements={[
        {
          title: 'Custom',
          url: 'https://www.bentley.com/',
        },
      ]}
      {...rest}
    />
  );
};

export const OnlyCustomElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  return (
    <Footer
      customElements={() => [
        { title: 'Custom Element 1', url: 'https://www.bentley.com/' },
        { title: 'Custom Element 2' },
        { title: 'Custom Element 3' },
        { title: 'Custom Element 4' },
      ]}
      {...rest}
    />
  );
};

export const CustomizedDefaultAndCustomElements: Story<FooterProps> = ({
  ...rest
}: FooterProps) => {
  const customElements = (defaultElements: FooterElement[]) => {
    const customUrls: Record<string, string> = {
      privacy: 'https://www.bentley.com/',
      cookies: 'https://www.bentley.com/',
      legalNotices: 'https://www.bentley.com/',
    };
    const translatedTitles: Record<string, string> = {
      termsOfService: 'Terms of service translated',
      privacy: 'Privacy translated',
      termsOfUse: 'Terms of use translated',
      cookies: 'Cookies translated',
      legalNotices: 'Legal notices translated',
    };
    const customElements: FooterElement[] = [
      { title: 'Custom Element 1', url: 'https://www.bentley.com/' },
      { title: 'Custom Element 2' },
    ];

    const customizedDefaultElements = defaultElements.map(
      ({ key, title, url }) => ({
        key: key,
        title: key ? translatedTitles[key] ?? title : title,
        url: key ? customUrls[key] ?? url : url,
      }),
    );

    return [...customizedDefaultElements, ...customElements];
  };

  return <Footer customElements={customElements} {...rest} />;
};

export const BottomFixed: Story<FooterProps> = ({ ...rest }: FooterProps) => {
  return (
    <div>
      <Footer style={{ position: 'fixed', bottom: 0 }} {...rest} />
    </div>
  );
};

BottomFixed.parameters = {
  docs: { inlineStories: false },
};
`,locationsMap:{basic:{startLoc:{col:41,line:19},endLoc:{col:1,line:24},startBody:{col:41,line:19},endBody:{col:1,line:24}},"appended-custom-elements":{startLoc:{col:58,line:32},endLoc:{col:1,line:46},startBody:{col:58,line:32},endBody:{col:1,line:46}},"only-custom-elements":{startLoc:{col:54,line:48},endLoc:{col:1,line:62},startBody:{col:54,line:48},endBody:{col:1,line:62}},"customized-default-and-custom-elements":{startLoc:{col:70,line:64},endLoc:{col:1,line:97},startBody:{col:70,line:64},endBody:{col:1,line:97}},"bottom-fixed":{startLoc:{col:47,line:99},endLoc:{col:1,line:105},startBody:{col:47,line:99},endBody:{col:1,line:105}}}}},title:"Core/Footer",component:dt,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}}}};const qc=a=>{var n=a,{translatedTitles:e}=n,t=L(n,["translatedTitles"]);return l(dt,f({translatedTitles:e},t))};qc.args={translatedTitles:{cookies:"Cookies translated"}};const ph=t=>{var e=L(t,[]);return l(dt,f({customElements:[{title:"Custom",url:"https://www.bentley.com/"}]},e))},bh=t=>{var e=L(t,[]);return l(dt,f({customElements:()=>[{title:"Custom Element 1",url:"https://www.bentley.com/"},{title:"Custom Element 2"},{title:"Custom Element 3"},{title:"Custom Element 4"}]},e))},gh=t=>{var e=L(t,[]);return l(dt,f({customElements:n=>{const r={privacy:"https://www.bentley.com/",cookies:"https://www.bentley.com/",legalNotices:"https://www.bentley.com/"},i={termsOfService:"Terms of service translated",privacy:"Privacy translated",termsOfUse:"Terms of use translated",cookies:"Cookies translated",legalNotices:"Legal notices translated"},s=[{title:"Custom Element 1",url:"https://www.bentley.com/"},{title:"Custom Element 2"}];return[...n.map(({key:d,title:p,url:u})=>{var m,b;return{key:d,title:d&&(m=i[d])!=null?m:p,url:d&&(b=r[d])!=null?b:u}}),...s]}},e))},Kc=t=>{var e=L(t,[]);return l("div",{children:l(dt,f({style:{position:"fixed",bottom:0}},e))})};Kc.parameters={docs:{inlineStories:!1}};const fh=["Basic","AppendedCustomElements","OnlyCustomElements","CustomizedDefaultAndCustomElements","BottomFixed"];var yh=Object.freeze(Object.defineProperty({__proto__:null,default:mh,Basic:qc,AppendedCustomElements:ph,OnlyCustomElements:bh,CustomizedDefaultAndCustomElements:gh,BottomFixed:Kc,__namedExportsOrder:fh},Symbol.toStringTag,{value:"Module"})),vh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  DropdownMenu,
  getUserColor,
  Header,
  HeaderBreadcrumbs,
  HeaderButton,
  HeaderLogo,
  HeaderProps,
  IconButton,
  Input,
  MenuExtraContent,
  MenuItem,
  UserIcon,
  Text,
  Select,
  MenuDivider,
} from '@itwin/itwinui-react';
import SvgHelpCircularHollow from '@itwin/itwinui-icons-react/cjs/icons/HelpCircularHollow';
import SvgVersion from '@itwin/itwinui-icons-react/cjs/icons/Pin';
import SvgNetwork from '@itwin/itwinui-icons-react/cjs/icons/Network';
import SvgNotification from '@itwin/itwinui-icons-react/cjs/icons/Notification';
import { SvgImodel } from '@itwin/itwinui-icons-react';
import { useState } from '@storybook/addons';

export default {
  title: 'Core/Header',
  component: Header,
  subcomponents: {
    HeaderBreadcrumbs,
    HeaderLogo,
    HeaderButton,
  },
  argTypes: {
    appLogo: { control: { disable: true } },
    breadcrumbs: { control: { disable: true } },
    actions: { control: { disable: true } },
    userIcon: { control: { disable: true } },
    menuItems: { control: { disable: true } },
    children: { control: { disable: true } },
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
  },
} as Meta<HeaderProps>;

const buildClickHandler = (menu: string, close: () => void) => (
  item: string,
) => {
  action(\`Menu '\${menu}', \${item} clicked!\`)();
  close();
};

const buildMenu = (menu: string) => (close: () => void) => [
  <MenuItem key={1} value={'Item #1'} onClick={buildClickHandler(menu, close)}>
    {menu} item #1
  </MenuItem>,
  <MenuItem key={2} value={'Item #2'} onClick={buildClickHandler(menu, close)}>
    {menu} item #2
  </MenuItem>,
  <MenuItem key={3} value={'Item #3'} onClick={buildClickHandler(menu, close)}>
    {menu} item #3
  </MenuItem>,
];

export const Full: Story<HeaderProps> = (args) => {
  const [userType, setUserType] = useState('User');

  const userIconMenuItems = (close: () => void) => [
    <MenuExtraContent key={0}>
      <>
        <Text variant='leading'>Terry Rivers</Text>
        <Text isMuted style={{ marginBottom: 8 }}>
          terry.rivers@email.com
        </Text>
        <Select
          options={[
            { value: 'User', label: 'User' },
            { value: 'Moderator', label: 'Moderator' },
            { value: 'Administrator', label: 'Administrator' },
          ]}
          value={userType}
          onChange={(type) => setUserType(type)}
        />
      </>
    </MenuExtraContent>,
    <MenuDivider key={1} />,
    <MenuItem
      key={2}
      value='View profile'
      onClick={buildClickHandler('UserIcon', close)}
    >
      View profile
    </MenuItem>,
    <MenuItem
      key={3}
      value='Sign out'
      onClick={buildClickHandler('UserIcon', close)}
    >
      Sign out
    </MenuItem>,
  ];

  return (
    <Header
      {...args}
      appLogo={
        <HeaderLogo
          logo={
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path d='m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1' />
            </svg>
          }
          onClick={() => action('Clicked on the title')()}
        >
          Microstation
        </HeaderLogo>
      }
      breadcrumbs={
        <HeaderBreadcrumbs
          items={[
            <HeaderButton
              key='project'
              onClick={() => action('Clicked on the Project')()}
              menuItems={buildMenu('Project')}
              name='Project A (Super Size Edition)'
              description='YJC-2249'
              startIcon={<SvgNetwork />}
            />,
            <HeaderButton
              key='iModel'
              onClick={() => action('Clicked on the iModel')()}
              menuItems={buildMenu('iModel')}
              name='iModel B'
              startIcon={
                <img
                  src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                  style={{ objectFit: 'cover' }}
                />
              }
              isActive={true}
            />,
            <HeaderButton
              key='version'
              name='Version C'
              onClick={() => action('Clicked on the Version')()}
              startIcon={<SvgVersion />}
            />,
          ]}
        />
      }
      actions={[
        <IconButton
          key='notif'
          onClick={() => action('Clicked on the notification bell')()}
          styleType='borderless'
        >
          <SvgNotification />
        </IconButton>,
        <DropdownMenu key='help' menuItems={buildMenu('Help')}>
          <IconButton styleType='borderless'>
            <SvgHelpCircularHollow />
          </IconButton>
        </DropdownMenu>,
      ]}
      userIcon={
        <DropdownMenu menuItems={userIconMenuItems}>
          <IconButton styleType='borderless'>
            <UserIcon
              size='medium'
              abbreviation='TR'
              backgroundColor={getUserColor('Terry Rivers')}
              image={
                <img src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png' />
              }
              title='Terry Rivers'
            />
          </IconButton>
        </DropdownMenu>
      }
      menuItems={buildMenu('More')}
    />
  );
};

export const Basic: Story<HeaderProps> = (args) => {
  return (
    <Header
      {...args}
      appLogo={
        <HeaderLogo
          logo={
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path d='m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1' />
            </svg>
          }
        />
      }
      breadcrumbs={
        <HeaderBreadcrumbs
          items={[
            <HeaderButton
              key='project'
              name='Project A (Super Size Edition)'
              description='YJC-2249'
              startIcon={<SvgNetwork />}
              onClick={() => action('Clicked on the Project')()}
              menuItems={buildMenu('Project')}
            />,
            <HeaderButton
              key='iModel'
              name='iModel B'
              startIcon={
                <img
                  src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                  style={{ objectFit: 'cover' }}
                />
              }
              onClick={() => action('Clicked on the iModel')()}
            />,
            <HeaderButton
              key='version'
              name='Version C'
              menuItems={buildMenu('Version')}
              startIcon={<SvgVersion />}
              isActive={true}
            />,
          ]}
        />
      }
      userIcon={
        <UserIcon
          size='medium'
          abbreviation='TR'
          backgroundColor={getUserColor('Terry Rivers')}
          title='Terry Rivers'
        />
      }
    />
  );
};

export const CenterContent: Story<HeaderProps> = (args) => {
  const searchBar = (
    <>
      <style>
        {\`.center-input { border-radius: 22px; width: 20vw; transition: all 0.2s ease }\`}
        {\`.iui-slim .iui-center { align-items: unset }\`}
        {\`.iui-slim .center-input { min-height: unset }\`}
        {\`@media (max-width: 768px) { .center-input { display: none; } }\`}
      </style>
      <Input className='center-input' placeholder='Search within Model B...' />
    </>
  );

  return (
    <Header
      {...args}
      appLogo={<HeaderLogo logo={<SvgImodel />} />}
      breadcrumbs={
        <HeaderBreadcrumbs
          items={[
            <HeaderButton
              key='project'
              name='Project A'
              description='YJC-2249'
              startIcon={<SvgNetwork />}
              onClick={() => action('Clicked on the Project')()}
              menuItems={buildMenu('Project')}
            />,
            <HeaderButton
              key='iModel'
              name='iModel B'
              startIcon={
                <img
                  src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                  style={{ objectFit: 'cover' }}
                />
              }
              onClick={() => action('Clicked on the iModel')()}
            />,
            <HeaderButton
              key='version'
              name='Version C'
              onClick={() => action('Clicked on the Version')()}
              startIcon={<SvgVersion />}
              isActive={true}
            />,
          ]}
        />
      }
      userIcon={
        <UserIcon
          size='medium'
          abbreviation='TR'
          backgroundColor={getUserColor('Terry Rivers')}
          title='Terry Rivers'
        />
      }
      menuItems={buildMenu('More')}
    >
      {searchBar}
    </Header>
  );
};
`,locationsMap:{full:{startLoc:{col:40,line:72},endLoc:{col:1,line:194},startBody:{col:40,line:72},endBody:{col:1,line:194}},basic:{startLoc:{col:41,line:196},endLoc:{col:1,line:255},startBody:{col:41,line:196},endBody:{col:1,line:255}},"center-content":{startLoc:{col:49,line:257},endLoc:{col:1,line:319},startBody:{col:49,line:257},endBody:{col:1,line:319}}}}},title:"Core/Header",component:Dr,subcomponents:{HeaderBreadcrumbs:Mr,HeaderLogo:Rr,HeaderButton:sn},argTypes:{appLogo:{control:{disable:!0}},breadcrumbs:{control:{disable:!0}},actions:{control:{disable:!0}},userIcon:{control:{disable:!0}},menuItems:{control:{disable:!0}},children:{control:{disable:!0}},style:{control:{disable:!0}},className:{control:{disable:!0}},id:{control:{disable:!0}}}};const Et=(e,t)=>a=>{_(`Menu '${e}', ${a} clicked!`)(),t()},kn=e=>t=>[N(ie,{value:"Item #1",onClick:Et(e,t),children:[e," item #1"]},1),N(ie,{value:"Item #2",onClick:Et(e,t),children:[e," item #2"]},2),N(ie,{value:"Item #3",onClick:Et(e,t),children:[e," item #3"]},3)],hh=e=>{const[t,a]=ue("User"),n=r=>[l(Pr,{children:N(Z,{children:[l(xe,{variant:"leading",children:"Terry Rivers"}),l(xe,{isMuted:!0,style:{marginBottom:8},children:"terry.rivers@email.com"}),l(Xe,{options:[{value:"User",label:"User"},{value:"Moderator",label:"Moderator"},{value:"Administrator",label:"Administrator"}],value:t,onChange:i=>a(i)})]})},0),l(Or,{},1),l(ie,{value:"View profile",onClick:Et("UserIcon",r),children:"View profile"},2),l(ie,{value:"Sign out",onClick:Et("UserIcon",r),children:"Sign out"},3)];return l(Dr,x(f({},e),{appLogo:l(Rr,{logo:l("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:l("path",{d:"m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1"})}),onClick:()=>_("Clicked on the title")(),children:"Microstation"}),breadcrumbs:l(Mr,{items:[l(sn,{onClick:()=>_("Clicked on the Project")(),menuItems:kn("Project"),name:"Project A (Super Size Edition)",description:"YJC-2249",startIcon:l(wr,{})},"project"),l(sn,{onClick:()=>_("Clicked on the iModel")(),menuItems:kn("iModel"),name:"iModel B",startIcon:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),isActive:!0},"iModel"),l(sn,{name:"Version C",onClick:()=>_("Clicked on the Version")(),startIcon:l(Ao,{})},"version")]}),actions:[l(J,{onClick:()=>_("Clicked on the notification bell")(),styleType:"borderless",children:l(Np,{})},"notif"),l(Me,{menuItems:kn("Help"),children:l(J,{styleType:"borderless",children:l(Ep,{})})},"help")],userIcon:l(Me,{menuItems:n,children:l(J,{styleType:"borderless",children:l(ke,{size:"medium",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),image:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png"}),title:"Terry Rivers"})})}),menuItems:kn("More")}))},Sh=e=>l(Dr,x(f({},e),{appLogo:l(Rr,{logo:l("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:l("path",{d:"m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1"})})}),breadcrumbs:l(Mr,{items:[l(sn,{name:"Project A (Super Size Edition)",description:"YJC-2249",startIcon:l(wr,{}),onClick:()=>_("Clicked on the Project")(),menuItems:kn("Project")},"project"),l(sn,{name:"iModel B",startIcon:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),onClick:()=>_("Clicked on the iModel")()},"iModel"),l(sn,{name:"Version C",menuItems:kn("Version"),startIcon:l(Ao,{}),isActive:!0},"version")]}),userIcon:l(ke,{size:"medium",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"})})),wh=e=>{const t=N(Z,{children:[N("style",{children:[".center-input { border-radius: 22px; width: 20vw; transition: all 0.2s ease }",".iui-slim .iui-center { align-items: unset }",".iui-slim .center-input { min-height: unset }","@media (max-width: 768px) { .center-input { display: none; } }"]}),l(ye,{className:"center-input",placeholder:"Search within Model B..."})]});return l(Dr,x(f({},e),{appLogo:l(Rr,{logo:l(Dp,{})}),breadcrumbs:l(Mr,{items:[l(sn,{name:"Project A",description:"YJC-2249",startIcon:l(wr,{}),onClick:()=>_("Clicked on the Project")(),menuItems:kn("Project")},"project"),l(sn,{name:"iModel B",startIcon:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),onClick:()=>_("Clicked on the iModel")()},"iModel"),l(sn,{name:"Version C",onClick:()=>_("Clicked on the Version")(),startIcon:l(Ao,{}),isActive:!0},"version")]}),userIcon:l(ke,{size:"medium",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"}),menuItems:kn("More"),children:t}))},Th=["Full","Basic","CenterContent"];var Ch=Object.freeze(Object.defineProperty({__proto__:null,default:vh,Full:hh,Basic:Sh,CenterContent:wh,__namedExportsOrder:Th},Symbol.toStringTag,{value:"Module"})),Ih={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Headline, HeadlineProps } from '@itwin/itwinui-react';

export default {
  title: 'Typography/Headline',
  component: Headline,
  args: {
    children: "I'm a Headline",
    isMuted: false,
  },
} as Meta<HeadlineProps>;

const HeadlineStory: Story<HeadlineProps> = (args) => {
  const { children, ...rest } = args;
  return <Headline {...rest}>{children}</Headline>;
};

export const Base: Story<HeadlineProps> = HeadlineStory.bind({});
Base.args = {} as HeadlineProps;

export const Muted: Story<HeadlineProps> = HeadlineStory.bind({});
Muted.args = { isMuted: true } as HeadlineProps;
`,locationsMap:{base:{startLoc:{col:44,line:18},endLoc:{col:1,line:21},startBody:{col:44,line:18},endBody:{col:1,line:21}},muted:{startLoc:{col:44,line:18},endLoc:{col:1,line:21},startBody:{col:44,line:18},endBody:{col:1,line:21}}}}},title:"Typography/Headline",component:Jl,args:{children:"I'm a Headline",isMuted:!1}};const Jc=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(Jl,x(f({},a),{children:t}))},Yc=Jc.bind({});Yc.args={};const Zc=Jc.bind({});Zc.args={isMuted:!0};const xh=["Base","Muted"];var kh=Object.freeze(Object.defineProperty({__proto__:null,default:Ih,Base:Yc,Muted:Zc,__namedExportsOrder:xh},Symbol.toStringTag,{value:"Module"})),_h={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton, IconButtonProps } from '@itwin/itwinui-react';
import { Story, Meta } from '@storybook/react';
import SvgAdd from '@itwin/itwinui-icons-react/cjs/icons/Add';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { control: { disable: true } },
    as: { type: { name: 'string', required: false } },
    styleType: {
      control: 'select',
    },
  },
} as Meta<IconButtonProps>;

export const Add: Story<IconButtonProps> = (args) => {
  return (
    <IconButton onClick={action('clicked')} {...args}>
      <SvgAdd />
    </IconButton>
  );
};

Add.args = {
  isActive: false,
};

export const SmallActiveAdd: Story<IconButtonProps> = (args) => {
  return (
    <IconButton onClick={action('clicked')} isActive {...args}>
      <SvgAdd />
    </IconButton>
  );
};

SmallActiveAdd.args = {
  size: 'small',
  isActive: true,
};

export const HighVisibilityAdd: Story<IconButtonProps> = (args) => {
  return (
    <IconButton onClick={action('clicked')} {...args}>
      <SvgAdd />
    </IconButton>
  );
};

HighVisibilityAdd.args = {
  isActive: false,
  styleType: 'high-visibility',
};

export const Borderless: Story<IconButtonProps> = ({ styleType, ...rest }) => {
  return (
    <IconButton styleType={styleType} onClick={action('clicked')} {...rest}>
      <SvgAdd />
    </IconButton>
  );
};

Borderless.args = { styleType: 'borderless' };
`,locationsMap:{add:{startLoc:{col:43,line:23},endLoc:{col:1,line:29},startBody:{col:43,line:23},endBody:{col:1,line:29}},"small-active-add":{startLoc:{col:54,line:35},endLoc:{col:1,line:41},startBody:{col:54,line:35},endBody:{col:1,line:41}},"high-visibility-add":{startLoc:{col:57,line:48},endLoc:{col:1,line:54},startBody:{col:57,line:48},endBody:{col:1,line:54}},borderless:{startLoc:{col:50,line:61},endLoc:{col:1,line:67},startBody:{col:50,line:61},endBody:{col:1,line:67}}}}},title:"Buttons/IconButton",component:J,argTypes:{onClick:{control:{disable:!0}},as:{type:{name:"string",required:!1}},styleType:{control:"select"}}};const Xc=e=>l(J,x(f({onClick:_("clicked")},e),{children:l(rt,{})}));Xc.args={isActive:!1};const Qc=e=>l(J,x(f({onClick:_("clicked"),isActive:!0},e),{children:l(rt,{})}));Qc.args={size:"small",isActive:!0};const ed=e=>l(J,x(f({onClick:_("clicked")},e),{children:l(rt,{})}));ed.args={isActive:!1,styleType:"high-visibility"};const nd=a=>{var n=a,{styleType:e}=n,t=L(n,["styleType"]);return l(J,x(f({styleType:e,onClick:_("clicked")},t),{children:l(rt,{})}))};nd.args={styleType:"borderless"};const Oh=["Add","SmallActiveAdd","HighVisibilityAdd","Borderless"];var Ph=Object.freeze(Object.defineProperty({__proto__:null,default:_h,Add:Xc,SmallActiveAdd:Qc,HighVisibilityAdd:ed,Borderless:nd,__namedExportsOrder:Oh},Symbol.toStringTag,{value:"Module"})),Bh={title:"Buttons/IdeasButton",component:Uo,parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { IdeasButton, IdeasButtonProps } from '@itwin/itwinui-react';

export default {
  title: 'Buttons/IdeasButton',
  component: IdeasButton,
  parameters: {
    docs: { inlineStories: false },
  },
  argTypes: {
    onClick: { control: { disable: true } },
  },
} as Meta<IdeasButtonProps>;

export const Ideas: Story<IdeasButtonProps> = (args) => {
  return <IdeasButton onClick={action('clicked')} {...args} />;
};

export const LocalizedIdeas: Story<IdeasButtonProps> = (args) => {
  return <IdeasButton onClick={action('clicked')} {...args} />;
};

LocalizedIdeas.args = {
  feedbackLabel: 'Localized feedback',
};
`,locationsMap:{ideas:{startLoc:{col:46,line:21},endLoc:{col:1,line:23},startBody:{col:46,line:21},endBody:{col:1,line:23}},"localized-ideas":{startLoc:{col:55,line:25},endLoc:{col:1,line:27},startBody:{col:55,line:25},endBody:{col:1,line:27}}}},docs:{inlineStories:!1}},argTypes:{onClick:{control:{disable:!0}}}};const Nh=e=>l(Uo,f({onClick:_("clicked")},e)),td=e=>l(Uo,f({onClick:_("clicked")},e));td.args={feedbackLabel:"Localized feedback"};const Eh=["Ideas","LocalizedIdeas"];var Dh=Object.freeze(Object.defineProperty({__proto__:null,default:Bh,Ideas:Nh,LocalizedIdeas:td,__namedExportsOrder:Eh},Symbol.toStringTag,{value:"Module"})),Rh={component:At,subcomponents:{InformationPanelWrapper:jt,InformationPanelHeader:Ht,InformationPanelBody:Ft,InformationPanelContent:Ar},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},children:{control:{disable:!0}}},args:{orientation:"vertical",resizable:!0},title:"Core/InformationPanel",parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { CellProps } from 'react-table';
import { action } from '@storybook/addon-actions';
import { SvgEdit } from '@itwin/itwinui-icons-react';
import {
  InformationPanel,
  InformationPanelProps,
  InformationPanelWrapper,
  InformationPanelHeader,
  InformationPanelBody,
  InformationPanelContent,
  Table,
  Text,
  Button,
  IconButton,
  Input,
  Label,
  Textarea,
} from '@itwin/itwinui-react';

export default {
  component: InformationPanel,
  subcomponents: {
    InformationPanelWrapper,
    InformationPanelHeader,
    InformationPanelBody,
    InformationPanelContent,
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  args: {
    orientation: 'vertical',
    resizable: true,
  },
  title: 'Core/InformationPanel',
  parameters: {
    docs: { source: { excludeDecorators: true } },
  },
} as Meta<InformationPanelProps>;

export const Basic: Story<InformationPanelProps> = (args) => {
  const [openRowIndex, setOpenRowIndex] = React.useState<number>();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          { id: 'name', Header: 'Name', accessor: 'name' },
          {
            Header: 'Details',
            Cell: ({ row: { index } }: CellProps<{ name: string }>) => (
              <Button onClick={() => setOpenRowIndex(index)}>Details</Button>
            ),
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(
    () =>
      [...Array(10).fill(null)].map((_, index) => ({ name: \`Row\${index}\` })),
    [],
  );
  return (
    <InformationPanelWrapper>
      <Table columns={columns} data={data} emptyTableContent='No data.' />
      <InformationPanel
        {...args}
        isOpen={openRowIndex != undefined && openRowIndex !== -1}
      >
        <InformationPanelHeader
          onClose={() => {
            setOpenRowIndex(-1);
            action('Panel closed')();
          }}
        >
          <Text variant='subheading'>Row {openRowIndex ?? 0}</Text>
        </InformationPanelHeader>
        <InformationPanelBody>
          <InformationPanelContent displayStyle='inline'>
            <Label htmlFor='name-input'>File name</Label>
            <Input
              size='small'
              id='name-input'
              defaultValue={\`Row \${openRowIndex ?? 0}\`}
              readOnly
            />

            <Label htmlFor='author-input'>Author</Label>
            <Input
              size='small'
              id='author-input'
              defaultValue='DJ Terry'
              readOnly
            />

            <Label htmlFor='year-input'>Year</Label>
            <Input size='small' id='year-input' defaultValue='2021' readOnly />

            <Label htmlFor='path-input'>Path</Label>
            <Input
              size='small'
              id='path-input'
              defaultValue='/Shared/Music/'
              readOnly
            />
          </InformationPanelContent>
        </InformationPanelBody>
      </InformationPanel>
    </InformationPanelWrapper>
  );
};
Basic.decorators = [
  (Story) => (
    <>
      <Text isMuted style={{ marginBottom: 11 }}>
        <em>Click on Details to open InformationalPanel</em>
      </Text>
      <Story />
    </>
  ),
];

export const Horizontal: Story<InformationPanelProps> = (args) => {
  const [openRowIndex, setOpenRowIndex] = React.useState<number>();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          { id: 'name', Header: 'Name', accessor: 'name' },
          {
            Header: 'Details',
            Cell: ({ row: { index } }: CellProps<{ name: string }>) => (
              <Button onClick={() => setOpenRowIndex(index)}>Details</Button>
            ),
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(
    () =>
      [...Array(10).fill(null)].map((_, index) => ({ name: \`Row\${index}\` })),
    [],
  );
  return (
    <InformationPanelWrapper>
      <Table columns={columns} data={data} emptyTableContent='No data.' />
      <InformationPanel
        orientation='horizontal'
        {...args}
        isOpen={openRowIndex != undefined && openRowIndex !== -1}
      >
        <InformationPanelHeader
          onClose={() => {
            setOpenRowIndex(-1);
            action('Panel closed')();
          }}
        >
          <Text variant='subheading'>Row {openRowIndex ?? 0}</Text>
        </InformationPanelHeader>
        <InformationPanelBody>
          <InformationPanelContent displayStyle='inline'>
            <Label htmlFor='name-input'>File name</Label>
            <Input
              size='small'
              id='name-input'
              defaultValue={\`Row \${openRowIndex ?? 0}\`}
              readOnly
            />

            <Label htmlFor='author-input'>Author</Label>
            <Input
              size='small'
              id='author-input'
              defaultValue='DJ Terry'
              readOnly
            />

            <Label htmlFor='year-input'>Year</Label>
            <Input size='small' id='year-input' defaultValue='2021' readOnly />

            <Label htmlFor='path-input'>Path</Label>
            <Input
              size='small'
              id='path-input'
              defaultValue='/Shared/Music/'
              readOnly
            />
          </InformationPanelContent>
        </InformationPanelBody>
      </InformationPanel>
    </InformationPanelWrapper>
  );
};
Horizontal.args = { orientation: 'horizontal' };
Horizontal.decorators = [...Basic.decorators];

export const CustomActions: Story<InformationPanelProps> = (args) => {
  const [openRowIndex, setOpenRowIndex] = React.useState<number>();
  const [isEditing, setIsEditing] = React.useState(false);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          { id: 'name', Header: 'Name', accessor: 'name' },
          {
            Header: 'Details',
            Cell: ({ row }: CellProps<{ name: string; info: string }>) => (
              <Button onClick={() => setOpenRowIndex(row.index)}>
                Details
              </Button>
            ),
          },
        ],
      },
    ],
    [],
  );

  const [data, setData] = React.useState(() =>
    [...Array(10).fill(null)].map((_, index) => ({
      name: \`Row\${index}\`,
      info: \`Row\${index} description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veniam dicta error doloremque libero sit est. Voluptatum nam modi, ex illum veritatis nobis omnis porro quod harum optio minus magnam tenetur quia dolor quis natus, eius, suscipit hic? Nobis deleniti obcaecati, sequi mollitia vero magnam error quidem, voluptatem asperiores repudiandae, molestias sit et voluptatibus magni. Sequi delectus, sunt eaque corrupti architecto modi suscipit? Quos in itaque dolore voluptas saepe natus repellat ad qui dolores. Incidunt temporibus ut, unde maxime nam explicabo saepe aspernatur molestiae iste libero neque, alias corporis laboriosam fugiat ad. Dicta neque quos fuga odit quae sequi dolore!\`,
    })),
  );

  return (
    <InformationPanelWrapper>
      <Table columns={columns} data={data} emptyTableContent='No data.' />

      <InformationPanel {...args} isOpen={openRowIndex != undefined}>
        <InformationPanelHeader
          onClose={() => {
            setOpenRowIndex(undefined);
            setIsEditing(false);
            action('Panel closed')();
          }}
          actions={
            <IconButton
              styleType='borderless'
              isActive={isEditing}
              onClick={() => setIsEditing((editing) => !editing)}
            >
              <SvgEdit />
            </IconButton>
          }
        >
          <Text variant='subheading'>Row details</Text>
        </InformationPanelHeader>
        <InformationPanelBody>
          {openRowIndex != undefined && (
            <InformationPanelContent>
              <Label htmlFor='name-input'>Name</Label>
              <Input
                id='name-input'
                defaultValue={data[openRowIndex]?.name}
                disabled={!isEditing}
                onChange={({ target: { value } }) => {
                  setData((data) => {
                    const newData = [...data];
                    newData[openRowIndex] = {
                      ...newData[openRowIndex],
                      name: value,
                    };
                    return newData;
                  });
                }}
              />
              <Label htmlFor='description-input'>Description</Label>
              <Textarea
                id='description-input'
                defaultValue={data[openRowIndex]?.info}
                disabled={!isEditing}
                onChange={({ target: { value } }) => {
                  setData((data) => {
                    const newData = [...data];
                    newData[openRowIndex] = {
                      ...newData[openRowIndex],
                      info: value,
                    };
                    return newData;
                  });
                }}
                rows={15}
              />
            </InformationPanelContent>
          )}
        </InformationPanelBody>
      </InformationPanel>
    </InformationPanelWrapper>
  );
};
CustomActions.decorators = [...Basic.decorators];

export const CustomWidth: Story<InformationPanelProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const lorem100 = \`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veniam dicta error doloremque libero sit est. Voluptatum nam modi, ex illum veritatis nobis omnis porro quod harum optio minus magnam tenetur quia dolor quis natus, eius, suscipit hic? Nobis deleniti obcaecati, sequi mollitia vero magnam error quidem, voluptatem asperiores repudiandae, molestias sit et voluptatibus magni. Sequi delectus, sunt eaque corrupti architecto modi suscipit? Quos in itaque dolore voluptas saepe natus repellat ad qui dolores. Incidunt temporibus ut, unde maxime nam explicabo saepe aspernatur molestiae iste libero neque, alias corporis laboriosam fugiat ad. Dicta neque quos fuga odit quae sequi dolore!\`;

  return (
    <InformationPanelWrapper style={{ height: '80vh', width: '90%' }}>
      <div
        style={{
          backgroundColor: 'var(--iui-color-background-4)',
          padding: 16,
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Button onClick={() => setIsOpen((open) => !open)}>Toggle</Button>
      </div>
      <InformationPanel
        style={{ width: '40%', maxWidth: '70%' }} // should be set in CSS using a custom className
        isOpen={isOpen}
        {...args}
        orientation='vertical'
      >
        <InformationPanelHeader
          onClose={() => {
            setIsOpen(false);
            action('Panel closed')();
          }}
        >
          <Text variant='subheading'>Details</Text>
        </InformationPanelHeader>
        <InformationPanelBody>
          <Text>{lorem100}</Text>
        </InformationPanelBody>
      </InformationPanel>
    </InformationPanelWrapper>
  );
};
CustomWidth.decorators = [
  (Story) => (
    <>
      <Text isMuted style={{ marginBottom: 11 }}>
        <em>
          Notice that the panel has an initial width of 40% and can only be
          resized upto 70% of the container width.
        </em>
      </Text>
      <Story />
    </>
  ),
];
`,locationsMap:{basic:{startLoc:{col:51,line:50},endLoc:{col:1,line:124},startBody:{col:51,line:50},endBody:{col:1,line:124}},horizontal:{startLoc:{col:56,line:136},endLoc:{col:1,line:211},startBody:{col:56,line:136},endBody:{col:1,line:211}},"custom-actions":{startLoc:{col:59,line:215},endLoc:{col:1,line:311},startBody:{col:59,line:215},endBody:{col:1,line:311}},"custom-width":{startLoc:{col:57,line:314},endLoc:{col:1,line:351},startBody:{col:57,line:314},endBody:{col:1,line:351}}}},docs:{source:{excludeDecorators:!0}}}};const Ur=e=>{const[t,a]=o.useState(),n=o.useMemo(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{Header:"Details",Cell:({row:{index:i}})=>l(ee,{onClick:()=>a(i),children:"Details"})}]}],[]),r=o.useMemo(()=>[...Array(10).fill(null)].map((i,s)=>({name:`Row${s}`})),[]);return N(jt,{children:[l(ve,{columns:n,data:r,emptyTableContent:"No data."}),N(At,x(f({},e),{isOpen:t!=null&&t!==-1,children:[l(Ht,{onClose:()=>{a(-1),_("Panel closed")()},children:N(xe,{variant:"subheading",children:["Row ",t!=null?t:0]})}),l(Ft,{children:N(Ar,{displayStyle:"inline",children:[l(We,{htmlFor:"name-input",children:"File name"}),l(ye,{size:"small",id:"name-input",defaultValue:`Row ${t!=null?t:0}`,readOnly:!0}),l(We,{htmlFor:"author-input",children:"Author"}),l(ye,{size:"small",id:"author-input",defaultValue:"DJ Terry",readOnly:!0}),l(We,{htmlFor:"year-input",children:"Year"}),l(ye,{size:"small",id:"year-input",defaultValue:"2021",readOnly:!0}),l(We,{htmlFor:"path-input",children:"Path"}),l(ye,{size:"small",id:"path-input",defaultValue:"/Shared/Music/",readOnly:!0})]})})]}))]})};Ur.decorators=[e=>N(Z,{children:[l(xe,{isMuted:!0,style:{marginBottom:11},children:l("em",{children:"Click on Details to open InformationalPanel"})}),l(e,{})]})];const ci=e=>{const[t,a]=o.useState(),n=o.useMemo(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{Header:"Details",Cell:({row:{index:i}})=>l(ee,{onClick:()=>a(i),children:"Details"})}]}],[]),r=o.useMemo(()=>[...Array(10).fill(null)].map((i,s)=>({name:`Row${s}`})),[]);return N(jt,{children:[l(ve,{columns:n,data:r,emptyTableContent:"No data."}),N(At,x(f({orientation:"horizontal"},e),{isOpen:t!=null&&t!==-1,children:[l(Ht,{onClose:()=>{a(-1),_("Panel closed")()},children:N(xe,{variant:"subheading",children:["Row ",t!=null?t:0]})}),l(Ft,{children:N(Ar,{displayStyle:"inline",children:[l(We,{htmlFor:"name-input",children:"File name"}),l(ye,{size:"small",id:"name-input",defaultValue:`Row ${t!=null?t:0}`,readOnly:!0}),l(We,{htmlFor:"author-input",children:"Author"}),l(ye,{size:"small",id:"author-input",defaultValue:"DJ Terry",readOnly:!0}),l(We,{htmlFor:"year-input",children:"Year"}),l(ye,{size:"small",id:"year-input",defaultValue:"2021",readOnly:!0}),l(We,{htmlFor:"path-input",children:"Path"}),l(ye,{size:"small",id:"path-input",defaultValue:"/Shared/Music/",readOnly:!0})]})})]}))]})};ci.args={orientation:"horizontal"};ci.decorators=[...Ur.decorators];const rd=e=>{var d,p;const[t,a]=o.useState(),[n,r]=o.useState(!1),i=o.useMemo(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{Header:"Details",Cell:({row:u})=>l(ee,{onClick:()=>a(u.index),children:"Details"})}]}],[]),[s,c]=o.useState(()=>[...Array(10).fill(null)].map((u,m)=>({name:`Row${m}`,info:`Row${m} description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veniam dicta error doloremque libero sit est. Voluptatum nam modi, ex illum veritatis nobis omnis porro quod harum optio minus magnam tenetur quia dolor quis natus, eius, suscipit hic? Nobis deleniti obcaecati, sequi mollitia vero magnam error quidem, voluptatem asperiores repudiandae, molestias sit et voluptatibus magni. Sequi delectus, sunt eaque corrupti architecto modi suscipit? Quos in itaque dolore voluptas saepe natus repellat ad qui dolores. Incidunt temporibus ut, unde maxime nam explicabo saepe aspernatur molestiae iste libero neque, alias corporis laboriosam fugiat ad. Dicta neque quos fuga odit quae sequi dolore!`})));return N(jt,{children:[l(ve,{columns:i,data:s,emptyTableContent:"No data."}),N(At,x(f({},e),{isOpen:t!=null,children:[l(Ht,{onClose:()=>{a(void 0),r(!1),_("Panel closed")()},actions:l(J,{styleType:"borderless",isActive:n,onClick:()=>r(u=>!u),children:l(Lo,{})}),children:l(xe,{variant:"subheading",children:"Row details"})}),l(Ft,{children:t!=null&&N(Ar,{children:[l(We,{htmlFor:"name-input",children:"Name"}),l(ye,{id:"name-input",defaultValue:(d=s[t])==null?void 0:d.name,disabled:!n,onChange:({target:{value:u}})=>{c(m=>{const b=[...m];return b[t]=x(f({},b[t]),{name:u}),b})}}),l(We,{htmlFor:"description-input",children:"Description"}),l($t,{id:"description-input",defaultValue:(p=s[t])==null?void 0:p.info,disabled:!n,onChange:({target:{value:u}})=>{c(m=>{const b=[...m];return b[t]=x(f({},b[t]),{info:u}),b})},rows:15})]})})]}))]})};rd.decorators=[...Ur.decorators];const ad=e=>{const[t,a]=o.useState(!1),n="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veniam dicta error doloremque libero sit est. Voluptatum nam modi, ex illum veritatis nobis omnis porro quod harum optio minus magnam tenetur quia dolor quis natus, eius, suscipit hic? Nobis deleniti obcaecati, sequi mollitia vero magnam error quidem, voluptatem asperiores repudiandae, molestias sit et voluptatibus magni. Sequi delectus, sunt eaque corrupti architecto modi suscipit? Quos in itaque dolore voluptas saepe natus repellat ad qui dolores. Incidunt temporibus ut, unde maxime nam explicabo saepe aspernatur molestiae iste libero neque, alias corporis laboriosam fugiat ad. Dicta neque quos fuga odit quae sequi dolore!";return N(jt,{style:{height:"80vh",width:"90%"},children:[l("div",{style:{backgroundColor:"var(--iui-color-background-4)",padding:16,height:"100%",boxSizing:"border-box"},children:l(ee,{onClick:()=>a(r=>!r),children:"Toggle"})}),N(At,x(f({style:{width:"40%",maxWidth:"70%"},isOpen:t},e),{orientation:"vertical",children:[l(Ht,{onClose:()=>{a(!1),_("Panel closed")()},children:l(xe,{variant:"subheading",children:"Details"})}),l(Ft,{children:l(xe,{children:n})})]}))]})};ad.decorators=[e=>N(Z,{children:[l(xe,{isMuted:!0,style:{marginBottom:11},children:l("em",{children:"Notice that the panel has an initial width of 40% and can only be resized upto 70% of the container width."})}),l(e,{})]})];const Mh=["Basic","Horizontal","CustomActions","CustomWidth"];var Lh=Object.freeze(Object.defineProperty({__proto__:null,default:Rh,Basic:Ur,Horizontal:ci,CustomActions:rd,CustomWidth:ad,__namedExportsOrder:Mh},Symbol.toStringTag,{value:"Module"})),Ah={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Input, InputProps } from '@itwin/itwinui-react';

export default {
  title: 'Input/Input',
  component: Input,
} as Meta<InputProps>;

export const Basic: Story<InputProps> = (args) => {
  return <Input placeholder='Basic Input' {...args} />;
};

Basic.args = {
  placeholder: 'Basic Input',
  disabled: false,
};

export const Disabled: Story<InputProps> = (args) => {
  return <Input placeholder='Disabled Input' disabled={true} {...args} />;
};

Disabled.args = {
  placeholder: 'Disabled Input',
  disabled: true,
};

export const Small: Story<InputProps> = (args) => {
  return <Input placeholder='Small Input' size='small' {...args} />;
};

Small.args = {
  placeholder: 'Small Input',
  size: 'small',
};
`,locationsMap:{basic:{startLoc:{col:40,line:14},endLoc:{col:1,line:16},startBody:{col:40,line:14},endBody:{col:1,line:16}},disabled:{startLoc:{col:43,line:23},endLoc:{col:1,line:25},startBody:{col:43,line:23},endBody:{col:1,line:25}},small:{startLoc:{col:40,line:32},endLoc:{col:1,line:34},startBody:{col:40,line:32},endBody:{col:1,line:34}}}}},title:"Input/Input",component:ye};const od=e=>l(ye,f({placeholder:"Basic Input"},e));od.args={placeholder:"Basic Input",disabled:!1};const id=e=>l(ye,f({placeholder:"Disabled Input",disabled:!0},e));id.args={placeholder:"Disabled Input",disabled:!0};const ld=e=>l(ye,f({placeholder:"Small Input",size:"small"},e));ld.args={placeholder:"Small Input",size:"small"};const jh=["Basic","Disabled","Small"];var Hh=Object.freeze(Object.defineProperty({__proto__:null,default:Ah,Basic:od,Disabled:id,Small:ld,__namedExportsOrder:jh},Symbol.toStringTag,{value:"Module"})),Fh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgCheckmark from '@itwin/itwinui-icons-react/cjs/icons/Checkmark';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';
import SvgSmileySad from '@itwin/itwinui-icons-react/cjs/icons/SmileySad';
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from '@storybook/addons';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  Checkbox,
  InputGroup,
  InputGroupProps,
  Radio,
  ToggleSwitch,
} from '@itwin/itwinui-react';

export default {
  title: 'Input/InputGroup',
  component: InputGroup,
  args: {
    displayStyle: 'default',
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    svgIcon: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<InputGroupProps>;

export const RadioGroup: Story<InputGroupProps> = (args) => {
  const option1Label = <SvgSmileyHappy />;
  const option2Label = <SvgSmileySad />;
  return (
    <>
      <InputGroup
        label='Radio group'
        message='Tell me how happy you are'
        {...args}
      >
        <Radio
          name='choice'
          value='option1'
          onChange={action('Clicked option 1!')}
          label={option1Label}
          disabled={args.disabled}
          required={args.required}
        />
        <Radio
          name='choice'
          value='option2'
          onChange={action('Clicked option 2!')}
          label={option2Label}
          disabled={args.disabled}
          required={args.required}
        />
      </InputGroup>
    </>
  );
};

RadioGroup.args = {
  label: 'Radio group',
  message: 'Tell me how happy you are',
};

export const CheckboxGroup: Story<InputGroupProps> = (args) => {
  const option1Label = 'Football';
  const option2Label = 'Hockey';
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);
  const [allOptions, setAllOptions] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(true);

  useEffect(() => {
    if (option1 && option2) {
      setAllOptions(true);
      setIsIndeterminate(false);
      return;
    }
    if (option1 || option2) {
      setAllOptions(false);
      setIsIndeterminate(true);
    } else {
      setAllOptions(false);
      setIsIndeterminate(false);
    }
  }, [option1, option2]);

  const onAllChange = (value: boolean) => {
    setAllOptions(value);
    setIsIndeterminate(false);
    setOption1(value);
    setOption2(value);
  };
  return (
    <InputGroup
      label='Select your hobbies'
      message='Choose some hobbies'
      {...args}
    >
      <Checkbox
        onChange={(event) => onAllChange(event.target.checked)}
        label='Select all'
        indeterminate={isIndeterminate}
        checked={allOptions}
        disabled={args.disabled}
        required={args.required}
      />
      <Checkbox
        onChange={(event) => setOption1(event.target.checked)}
        label={option1Label}
        checked={option1}
        disabled={args.disabled}
        required={args.required}
      />
      <Checkbox
        onChange={(event) => setOption2(event.target.checked)}
        label={option2Label}
        checked={option2}
        disabled={args.disabled}
        required={args.required}
      />
    </InputGroup>
  );
};

CheckboxGroup.args = {
  label: 'Select your hobbies',
  message: 'Choose some hobbies',
};

export const ToggleGroup: Story<InputGroupProps> = (args) => {
  const [option1, setOption1] = useState(true);
  const [option2, setOption2] = useState(false);

  return (
    <InputGroup label='Toggle group' {...args}>
      <ToggleSwitch
        onChange={(event) => setOption1(event.target.checked)}
        checked={option1}
        disabled={args.disabled}
        label='Toggle feature No.1'
        icon={<SvgCheckmark />}
      />
      <ToggleSwitch checked={true} disabled label='This you cannot change' />
      <ToggleSwitch
        onChange={(event) => setOption2(event.target.checked)}
        label='Toggle feature No.2'
        checked={option2}
        disabled={args.disabled}
      />
    </InputGroup>
  );
};

ToggleGroup.args = {
  label: 'Toggle group',
};
`,locationsMap:{"radio-group":{startLoc:{col:50,line:35},endLoc:{col:1,line:64},startBody:{col:50,line:35},endBody:{col:1,line:64}},"checkbox-group":{startLoc:{col:53,line:71},endLoc:{col:1,line:130},startBody:{col:53,line:71},endBody:{col:1,line:130}},"toggle-group":{startLoc:{col:51,line:137},endLoc:{col:1,line:159},startBody:{col:51,line:137},endBody:{col:1,line:159}}}}},title:"Input/InputGroup",component:cn,args:{displayStyle:"default"},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},svgIcon:{control:{disable:!0}},children:{control:{disable:!0}}}};const sd=e=>{const t=l(Tr,{}),a=l(Cr,{});return l(Z,{children:N(cn,x(f({label:"Radio group",message:"Tell me how happy you are"},e),{children:[l(qe,{name:"choice",value:"option1",onChange:_("Clicked option 1!"),label:t,disabled:e.disabled,required:e.required}),l(qe,{name:"choice",value:"option2",onChange:_("Clicked option 2!"),label:a,disabled:e.disabled,required:e.required})]}))})};sd.args={label:"Radio group",message:"Tell me how happy you are"};const cd=e=>{const t="Football",a="Hockey",[n,r]=ue(!0),[i,s]=ue(!1),[c,d]=ue(!1),[p,u]=ue(!0);Ol(()=>{if(n&&i){d(!0),u(!1);return}n||i?(d(!1),u(!0)):(d(!1),u(!1))},[n,i]);const m=b=>{d(b),u(!1),r(b),s(b)};return N(cn,x(f({label:"Select your hobbies",message:"Choose some hobbies"},e),{children:[l(Re,{onChange:b=>m(b.target.checked),label:"Select all",indeterminate:p,checked:c,disabled:e.disabled,required:e.required}),l(Re,{onChange:b=>r(b.target.checked),label:t,checked:n,disabled:e.disabled,required:e.required}),l(Re,{onChange:b=>s(b.target.checked),label:a,checked:i,disabled:e.disabled,required:e.required})]}))};cd.args={label:"Select your hobbies",message:"Choose some hobbies"};const dd=e=>{const[t,a]=ue(!0),[n,r]=ue(!1);return N(cn,x(f({label:"Toggle group"},e),{children:[l(Fe,{onChange:i=>a(i.target.checked),checked:t,disabled:e.disabled,label:"Toggle feature No.1",icon:l(jo,{})}),l(Fe,{checked:!0,disabled:!0,label:"This you cannot change"}),l(Fe,{onChange:i=>r(i.target.checked),label:"Toggle feature No.2",checked:n,disabled:e.disabled})]}))};dd.args={label:"Toggle group"};const $h=["RadioGroup","CheckboxGroup","ToggleGroup"];var Uh=Object.freeze(Object.defineProperty({__proto__:null,default:Fh,RadioGroup:sd,CheckboxGroup:cd,ToggleGroup:dd,__namedExportsOrder:$h},Symbol.toStringTag,{value:"Module"})),zh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Kbd, KbdKeys, KbdProps } from '@itwin/itwinui-react';

export default {
  title: 'Typography/Keyboard Key',
  component: Kbd,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    title: { control: { disable: true } },
  },
  args: {
    children: 'A',
  },
} as Meta<KbdProps>;

export const Basic: Story<KbdProps> = ({ children, ...rest }) => {
  return <Kbd {...rest}>{children}</Kbd>;
};

export const PredefinedKey: Story<KbdProps> = ({ children, ...rest }) => {
  return <Kbd {...rest}>{children}</Kbd>;
};

PredefinedKey.argTypes = {
  children: {
    control: { type: 'select', options: KbdKeys },
  },
};
PredefinedKey.args = { children: KbdKeys.Enter };
`,locationsMap:{basic:{startLoc:{col:38,line:22},endLoc:{col:1,line:24},startBody:{col:38,line:22},endBody:{col:1,line:24}},"predefined-key":{startLoc:{col:46,line:26},endLoc:{col:1,line:28},startBody:{col:46,line:26},endBody:{col:1,line:28}}}}},title:"Typography/Keyboard Key",component:Fn,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},title:{control:{disable:!0}}},args:{children:"A"}};const Wh=a=>{var n=a,{children:e}=n,t=L(n,["children"]);return l(Fn,x(f({},t),{children:e}))},di=a=>{var n=a,{children:e}=n,t=L(n,["children"]);return l(Fn,x(f({},t),{children:e}))};di.argTypes={children:{control:{type:"select",options:Ql}}};di.args={children:Ql.Enter};const Vh=["Basic","PredefinedKey"];var Gh=Object.freeze(Object.defineProperty({__proto__:null,default:zh,Basic:Wh,PredefinedKey:di,__namedExportsOrder:Vh},Symbol.toStringTag,{value:"Module"})),qh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Input, Label, LabelProps, Text } from '@itwin/itwinui-react';

export default {
  component: Label,
  args: {
    children: 'Name',
    displayStyle: 'block',
    required: false,
    as: 'label',
  },
  title: 'Typography/Label',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 'clamp(300px, 50%, 100%)' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<LabelProps>;

export const Basic: Story<LabelProps> = (args) => {
  return (
    <>
      <Label htmlFor='text-input' {...args}>
        Name
      </Label>
      <Input id='text-input' placeholder='Enter name' />
    </>
  );
};
Basic.args = {};

export const Inline: Story<LabelProps> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Label htmlFor='text-input' displayStyle='inline' required {...args}>
        Name
      </Label>
      <Input id='text-input' defaultValue='James Bond' required />
    </div>
  );
};
Inline.args = {
  displayStyle: 'inline',
  required: true,
};

export const Polymorphic: Story<LabelProps<'div'>> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Label displayStyle='inline' as='div' {...args}>
        <Text isMuted>Name:</Text>
      </Label>
      <Text>James Bond</Text>
    </div>
  );
};
Polymorphic.args = {
  displayStyle: 'inline',
  as: 'div',
} as LabelProps<'div'>;
`,locationsMap:{basic:{startLoc:{col:40,line:27},endLoc:{col:1,line:36},startBody:{col:40,line:27},endBody:{col:1,line:36}},inline:{startLoc:{col:41,line:39},endLoc:{col:1,line:48},startBody:{col:41,line:39},endBody:{col:1,line:48}},polymorphic:{startLoc:{col:53,line:54},endLoc:{col:1,line:63},startBody:{col:53,line:54},endBody:{col:1,line:63}}}}},component:We,args:{children:"Name",displayStyle:"block",required:!1,as:"label"},title:"Typography/Label",decorators:[e=>l("div",{style:{maxWidth:"clamp(300px, 50%, 100%)"},children:l(e,{})})]};const ud=e=>N(Z,{children:[l(We,x(f({htmlFor:"text-input"},e),{children:"Name"})),l(ye,{id:"text-input",placeholder:"Enter name"})]});ud.args={};const md=e=>N("div",{style:{display:"flex"},children:[l(We,x(f({htmlFor:"text-input",displayStyle:"inline",required:!0},e),{children:"Name"})),l(ye,{id:"text-input",defaultValue:"James Bond",required:!0})]});md.args={displayStyle:"inline",required:!0};const pd=e=>N("div",{style:{display:"flex"},children:[l(We,x(f({displayStyle:"inline",as:"div"},e),{children:l(xe,{isMuted:!0,children:"Name:"})})),l(xe,{children:"James Bond"})]});pd.args={displayStyle:"inline",as:"div"};const Kh=["Basic","Inline","Polymorphic"];var Jh=Object.freeze(Object.defineProperty({__proto__:null,default:qh,Basic:ud,Inline:md,Polymorphic:pd,__namedExportsOrder:Kh},Symbol.toStringTag,{value:"Module"})),Yh={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { SvgCloseSmall, SvgPlaceholder } from '@itwin/itwinui-icons-react';
import SvgCamera from '@itwin/itwinui-icons-react/cjs/icons/Camera';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  LabeledInput,
  Tooltip,
  IconButton,
  LabeledInputProps,
} from '@itwin/itwinui-react';

export default {
  title: 'Input/LabeledInput',
  component: LabeledInput,
  argTypes: {
    inputClassName: { control: { disable: true } },
    inputStyle: { control: { disable: true } },
    svgIcon: { control: { disable: true } },
    required: { type: 'boolean' },
  },
  args: {
    label: 'This is a label',
    placeholder: 'Enter text here...',
    displayStyle: 'default',
    disabled: false,
  },
} as Meta<LabeledInputProps>;

export const Basic: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      label='This is a label'
      {...args}
    />
  );
};

export const WithMessage: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      message='This is a message'
      label='This is a label'
      {...args}
    />
  );
};

WithMessage.args = {
  message: 'This is a message',
};

export const Disabled: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      message='This is a message'
      label='This is a label'
      disabled
      {...args}
    />
  );
};

Disabled.args = {
  message: 'This is a message',
  disabled: true,
};

export const Positive: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      label='This is a label'
      message='This is a message'
      status='positive'
      {...args}
    />
  );
};

Positive.args = {
  status: 'positive',
  message: 'This is a message',
};

export const Warning: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      label='This is a label'
      message='This is a message'
      status='warning'
      {...args}
    />
  );
};

Warning.args = {
  status: 'warning',
  message: 'This is a message',
};

export const Negative: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      label='This is a label'
      message='This is a message'
      status='negative'
      {...args}
    />
  );
};

Negative.args = {
  status: 'negative',
  message: 'This is a message',
};

export const WithCustomIcon: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      label='This is a label'
      message='\u2B05 This is a custom icon'
      svgIcon={<SvgCamera />}
      {...args}
    />
  );
};

export const Inline: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      status='negative'
      label='This is a label'
      displayStyle='inline'
      {...args}
    />
  );
};

Inline.args = {
  status: 'negative',
  displayStyle: 'inline',
};

export const HybridLayout: Story<LabeledInputProps> = (args) => {
  const ref = React.useRef(null);
  return (
    <>
      <LabeledInput
        placeholder='Enter text here...'
        label='This is a label'
        svgIcon={
          <div ref={ref}>
            <SvgPlaceholder />
          </div>
        }
        message='Block layout with inline icon'
        iconDisplayStyle='inline'
        {...args}
      />
      <Tooltip reference={ref} content='Placeholder' />
    </>
  );
};

HybridLayout.args = {
  iconDisplayStyle: 'inline',
  message: 'Block layout with inline icon',
};

export const HybridLayoutWithButton: Story<LabeledInputProps> = (args) => {
  return (
    <LabeledInput
      placeholder='Enter text here...'
      label='This is a label'
      svgIcon={
        <IconButton styleType='borderless'>
          <SvgCloseSmall />
        </IconButton>
      }
      message='Block layout with inline borderless button'
      iconDisplayStyle='inline'
      {...args}
    />
  );
};

HybridLayoutWithButton.args = {
  message: 'Block layout with inline borderless button',
  iconDisplayStyle: 'inline',
};
`,locationsMap:{basic:{startLoc:{col:47,line:33},endLoc:{col:1,line:41},startBody:{col:47,line:33},endBody:{col:1,line:41}},"with-message":{startLoc:{col:53,line:43},endLoc:{col:1,line:52},startBody:{col:53,line:43},endBody:{col:1,line:52}},disabled:{startLoc:{col:50,line:58},endLoc:{col:1,line:68},startBody:{col:50,line:58},endBody:{col:1,line:68}},positive:{startLoc:{col:50,line:75},endLoc:{col:1,line:85},startBody:{col:50,line:75},endBody:{col:1,line:85}},warning:{startLoc:{col:49,line:92},endLoc:{col:1,line:102},startBody:{col:49,line:92},endBody:{col:1,line:102}},negative:{startLoc:{col:50,line:109},endLoc:{col:1,line:119},startBody:{col:50,line:109},endBody:{col:1,line:119}},"with-custom-icon":{startLoc:{col:56,line:126},endLoc:{col:1,line:136},startBody:{col:56,line:126},endBody:{col:1,line:136}},inline:{startLoc:{col:48,line:138},endLoc:{col:1,line:148},startBody:{col:48,line:138},endBody:{col:1,line:148}},"hybrid-layout":{startLoc:{col:54,line:155},endLoc:{col:1,line:174},startBody:{col:54,line:155},endBody:{col:1,line:174}},"hybrid-layout-with-button":{startLoc:{col:64,line:181},endLoc:{col:1,line:196},startBody:{col:64,line:181},endBody:{col:1,line:196}}}}},title:"Input/LabeledInput",component:$e,argTypes:{inputClassName:{control:{disable:!0}},inputStyle:{control:{disable:!0}},svgIcon:{control:{disable:!0}},required:{type:"boolean"}},args:{label:"This is a label",placeholder:"Enter text here...",displayStyle:"default",disabled:!1}};const Zh=e=>l($e,f({placeholder:"Enter text here...",label:"This is a label"},e)),bd=e=>l($e,f({placeholder:"Enter text here...",message:"This is a message",label:"This is a label"},e));bd.args={message:"This is a message"};const gd=e=>l($e,f({placeholder:"Enter text here...",message:"This is a message",label:"This is a label",disabled:!0},e));gd.args={message:"This is a message",disabled:!0};const fd=e=>l($e,f({placeholder:"Enter text here...",label:"This is a label",message:"This is a message",status:"positive"},e));fd.args={status:"positive",message:"This is a message"};const yd=e=>l($e,f({placeholder:"Enter text here...",label:"This is a label",message:"This is a message",status:"warning"},e));yd.args={status:"warning",message:"This is a message"};const vd=e=>l($e,f({placeholder:"Enter text here...",label:"This is a label",message:"This is a message",status:"negative"},e));vd.args={status:"negative",message:"This is a message"};const Xh=e=>l($e,f({placeholder:"Enter text here...",label:"This is a label",message:"\u2B05 This is a custom icon",svgIcon:l(Ir,{})},e)),hd=e=>l($e,f({placeholder:"Enter text here...",status:"negative",label:"This is a label",displayStyle:"inline"},e));hd.args={status:"negative",displayStyle:"inline"};const Sd=e=>{const t=o.useRef(null);return N(Z,{children:[l($e,f({placeholder:"Enter text here...",label:"This is a label",svgIcon:l("div",{ref:t,children:l(Je,{})}),message:"Block layout with inline icon",iconDisplayStyle:"inline"},e)),l(Ze,{reference:t,content:"Placeholder"})]})};Sd.args={iconDisplayStyle:"inline",message:"Block layout with inline icon"};const wd=e=>l($e,f({placeholder:"Enter text here...",label:"This is a label",svgIcon:l(J,{styleType:"borderless",children:l(Rp,{})}),message:"Block layout with inline borderless button",iconDisplayStyle:"inline"},e));wd.args={message:"Block layout with inline borderless button",iconDisplayStyle:"inline"};const Qh=["Basic","WithMessage","Disabled","Positive","Warning","Negative","WithCustomIcon","Inline","HybridLayout","HybridLayoutWithButton"];var e0=Object.freeze(Object.defineProperty({__proto__:null,default:Yh,Basic:Zh,WithMessage:bd,Disabled:gd,Positive:fd,Warning:yd,Negative:vd,WithCustomIcon:Xh,Inline:hd,HybridLayout:Sd,HybridLayoutWithButton:wd,__namedExportsOrder:Qh},Symbol.toStringTag,{value:"Module"})),n0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LabeledSelect, LabeledSelectProps } from '@itwin/itwinui-react';
import SvgCamera from '@itwin/itwinui-icons-react/cjs/icons/Camera';
import { useState } from '@storybook/addons';

export default {
  title: 'Input/LabeledSelect',
  component: LabeledSelect,
  decorators: [
    (Story) => (
      // Body height is the same as Select component height therefore clicking outside would not close dropdown.
      <div style={{ minHeight: 500 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'This is a label',
    message: 'This is a message',
    placeholder: 'Placeholder text',
    displayStyle: 'default',
    options: [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
  },
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    selectStyle: { control: { disable: true } },
    selectClassName: { control: { disable: true } },
    menuStyle: { control: { disable: true } },
    menuClassName: { control: { disable: true } },
    svgIcon: { control: { disable: true } },
  },
} as Meta<LabeledSelectProps<unknown>>;

export const Basic: Story<LabeledSelectProps<number>> = (args) => {
  const {
    label = 'This is a label',
    message = 'This is a message',
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <LabeledSelect<number>
      label={label}
      options={options}
      message={message}
      placeholder={placeholder}
      value={value}
      onChange={(value) => setValue(value)}
      {...rest}
    />
  );
};

export const Positive: Story<LabeledSelectProps<number>> = (args) => {
  const {
    label = 'This is a label',
    message = 'This is a message',
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <LabeledSelect<number>
      label={label}
      options={options}
      message={message}
      placeholder={placeholder}
      value={value}
      onChange={(value) => setValue(value)}
      status='positive'
      {...rest}
    />
  );
};

Positive.args = {
  status: 'positive',
};

export const Warning: Story<LabeledSelectProps<number>> = (args) => {
  const {
    label = 'This is a label',
    message = 'This is a message',
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <LabeledSelect<number>
      label={label}
      options={options}
      message={message}
      placeholder={placeholder}
      value={value}
      onChange={(value) => setValue(value)}
      status='warning'
      {...rest}
    />
  );
};

Warning.args = {
  status: 'warning',
};

export const Negative: Story<LabeledSelectProps<number>> = (args) => {
  const {
    label = 'This is a label',
    message = 'This is a message',
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <LabeledSelect<number>
      label={label}
      options={options}
      message={message}
      placeholder={placeholder}
      value={value}
      onChange={(value) => setValue(value)}
      status='negative'
      {...rest}
    />
  );
};

Negative.args = {
  status: 'negative',
};

export const WithCustomIcon: Story<LabeledSelectProps<number>> = (args) => {
  const {
    label = 'This is a label',
    message = 'This is a message',
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    svgIcon = <SvgCamera />,
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <LabeledSelect<number>
      label={label}
      options={options}
      message={message}
      placeholder={placeholder}
      value={value}
      onChange={(value) => setValue(value)}
      svgIcon={svgIcon}
      {...rest}
    />
  );
};

WithCustomIcon.args = {
  svgIcon: <SvgCamera />,
};
`,locationsMap:{basic:{startLoc:{col:56,line:44},endLoc:{col:1,line:68},startBody:{col:56,line:44},endBody:{col:1,line:68}},positive:{startLoc:{col:59,line:70},endLoc:{col:1,line:95},startBody:{col:59,line:70},endBody:{col:1,line:95}},warning:{startLoc:{col:58,line:101},endLoc:{col:1,line:126},startBody:{col:58,line:101},endBody:{col:1,line:126}},negative:{startLoc:{col:59,line:132},endLoc:{col:1,line:157},startBody:{col:59,line:132},endBody:{col:1,line:157}},"with-custom-icon":{startLoc:{col:65,line:163},endLoc:{col:1,line:189},startBody:{col:65,line:163},endBody:{col:1,line:189}}}}},title:"Input/LabeledSelect",component:Bn,decorators:[e=>l("div",{style:{minHeight:500},children:l(e,{})})],args:{label:"This is a label",message:"This is a message",placeholder:"Placeholder text",displayStyle:"default",options:[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}]},argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}},selectStyle:{control:{disable:!0}},selectClassName:{control:{disable:!0}},menuStyle:{control:{disable:!0}},menuClassName:{control:{disable:!0}},svgIcon:{control:{disable:!0}}}};const t0=e=>{const d=e,{label:t="This is a label",message:a="This is a message",options:n=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:r="Placeholder text"}=d,i=L(d,["label","message","options","placeholder"]),[s,c]=ue(void 0);return l(Bn,f({label:t,options:n,message:a,placeholder:r,value:s,onChange:p=>c(p)},i))},Td=e=>{const d=e,{label:t="This is a label",message:a="This is a message",options:n=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:r="Placeholder text"}=d,i=L(d,["label","message","options","placeholder"]),[s,c]=ue(void 0);return l(Bn,f({label:t,options:n,message:a,placeholder:r,value:s,onChange:p=>c(p),status:"positive"},i))};Td.args={status:"positive"};const Cd=e=>{const d=e,{label:t="This is a label",message:a="This is a message",options:n=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:r="Placeholder text"}=d,i=L(d,["label","message","options","placeholder"]),[s,c]=ue(void 0);return l(Bn,f({label:t,options:n,message:a,placeholder:r,value:s,onChange:p=>c(p),status:"warning"},i))};Cd.args={status:"warning"};const Id=e=>{const d=e,{label:t="This is a label",message:a="This is a message",options:n=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:r="Placeholder text"}=d,i=L(d,["label","message","options","placeholder"]),[s,c]=ue(void 0);return l(Bn,f({label:t,options:n,message:a,placeholder:r,value:s,onChange:p=>c(p),status:"negative"},i))};Id.args={status:"negative"};const xd=e=>{const p=e,{label:t="This is a label",message:a="This is a message",options:n=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:r="Placeholder text",svgIcon:i=l(Ir,{})}=p,s=L(p,["label","message","options","placeholder","svgIcon"]),[c,d]=ue(void 0);return l(Bn,f({label:t,options:n,message:a,placeholder:r,value:c,onChange:u=>d(u),svgIcon:i},s))};xd.args={svgIcon:l(Ir,{})};const r0=["Basic","Positive","Warning","Negative","WithCustomIcon"];var a0=Object.freeze(Object.defineProperty({__proto__:null,default:n0,Basic:t0,Positive:Td,Warning:Cd,Negative:Id,WithCustomIcon:xd,__namedExportsOrder:r0},Symbol.toStringTag,{value:"Module"})),o0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgCamera from '@itwin/itwinui-icons-react/cjs/icons/Camera';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LabeledTextarea, LabeledTextareaProps } from '@itwin/itwinui-react';

export default {
  title: 'Input/LabeledTextarea',
  component: LabeledTextarea,
  argTypes: {
    textareaClassName: { control: { disable: true } },
    textareaStyle: { control: { disable: true } },
    svgIcon: { control: { disable: true } },
  },
  args: {
    placeholder: 'This is a textarea',
    label: 'Textarea Label',
    message: 'Display Message',
    displayStyle: 'default',
    disabled: false,
  },
} as Meta<LabeledTextareaProps>;

export const Basic: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      label='Textarea Label'
      message='Display Message'
      placeholder='This is a textarea'
      {...args}
    />
  );
};

export const Disabled: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      label='Textarea Label'
      message='Display Message'
      placeholder='This is a textarea'
      disabled={true}
      {...args}
    />
  );
};

Disabled.args = {
  disabled: true,
};

export const Positive: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      label='Textarea Label'
      message='Display Message'
      placeholder='This is a textarea'
      status='positive'
      {...args}
    />
  );
};

Positive.args = {
  status: 'positive',
};

export const Warning: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      label='Textarea Label'
      message='Display Message'
      placeholder='This is a textarea'
      status='warning'
      {...args}
    />
  );
};

Warning.args = {
  status: 'warning',
};

export const Negative: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      label='Textarea Label'
      message='Display Message'
      placeholder='This is a textarea'
      status='negative'
      {...args}
    />
  );
};

Negative.args = {
  status: 'negative',
};

export const WithCustomIcon: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      placeholder='Enter text here'
      label='This is a label'
      svgIcon={<SvgCamera />}
      {...args}
    />
  );
};

export const Inline: Story<Partial<LabeledTextareaProps>> = (args) => {
  return (
    <LabeledTextarea
      placeholder='Enter text here'
      status='negative'
      label='This is a label'
      displayStyle='inline'
      {...args}
    />
  );
};

Inline.args = {
  status: 'negative',
  displayStyle: 'inline',
  message: undefined,
};
`,locationsMap:{basic:{startLoc:{col:59,line:27},endLoc:{col:1,line:36},startBody:{col:59,line:27},endBody:{col:1,line:36}},disabled:{startLoc:{col:62,line:38},endLoc:{col:1,line:48},startBody:{col:62,line:38},endBody:{col:1,line:48}},positive:{startLoc:{col:62,line:54},endLoc:{col:1,line:64},startBody:{col:62,line:54},endBody:{col:1,line:64}},warning:{startLoc:{col:61,line:70},endLoc:{col:1,line:80},startBody:{col:61,line:70},endBody:{col:1,line:80}},negative:{startLoc:{col:62,line:86},endLoc:{col:1,line:96},startBody:{col:62,line:86},endBody:{col:1,line:96}},"with-custom-icon":{startLoc:{col:68,line:102},endLoc:{col:1,line:111},startBody:{col:68,line:102},endBody:{col:1,line:111}},inline:{startLoc:{col:60,line:113},endLoc:{col:1,line:123},startBody:{col:60,line:113},endBody:{col:1,line:123}}}}},title:"Input/LabeledTextarea",component:Nn,argTypes:{textareaClassName:{control:{disable:!0}},textareaStyle:{control:{disable:!0}},svgIcon:{control:{disable:!0}}},args:{placeholder:"This is a textarea",label:"Textarea Label",message:"Display Message",displayStyle:"default",disabled:!1}};const i0=e=>l(Nn,f({label:"Textarea Label",message:"Display Message",placeholder:"This is a textarea"},e)),kd=e=>l(Nn,f({label:"Textarea Label",message:"Display Message",placeholder:"This is a textarea",disabled:!0},e));kd.args={disabled:!0};const _d=e=>l(Nn,f({label:"Textarea Label",message:"Display Message",placeholder:"This is a textarea",status:"positive"},e));_d.args={status:"positive"};const Od=e=>l(Nn,f({label:"Textarea Label",message:"Display Message",placeholder:"This is a textarea",status:"warning"},e));Od.args={status:"warning"};const Pd=e=>l(Nn,f({label:"Textarea Label",message:"Display Message",placeholder:"This is a textarea",status:"negative"},e));Pd.args={status:"negative"};const l0=e=>l(Nn,f({placeholder:"Enter text here",label:"This is a label",svgIcon:l(Ir,{})},e)),Bd=e=>l(Nn,f({placeholder:"Enter text here",status:"negative",label:"This is a label",displayStyle:"inline"},e));Bd.args={status:"negative",displayStyle:"inline",message:void 0};const s0=["Basic","Disabled","Positive","Warning","Negative","WithCustomIcon","Inline"];var c0=Object.freeze(Object.defineProperty({__proto__:null,default:o0,Basic:i0,Disabled:kd,Positive:_d,Warning:Od,Negative:Pd,WithCustomIcon:l0,Inline:Bd,__namedExportsOrder:s0},Symbol.toStringTag,{value:"Module"})),d0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Leading, LeadingProps } from '@itwin/itwinui-react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Leading',
  component: Leading,
  args: {
    children: "I'm a Leading",
    isMuted: false,
  },
} as Meta<LeadingProps>;

const LeadingStory: Story<LeadingProps> = (args) => {
  const { children, ...rest } = args;
  return <Leading {...rest}>{children}</Leading>;
};

export const Base: Story<LeadingProps> = LeadingStory.bind({});
Base.args = {} as LeadingProps;

export const Muted: Story<LeadingProps> = LeadingStory.bind({});
Muted.args = { isMuted: true } as LeadingProps;
`,locationsMap:{base:{startLoc:{col:42,line:18},endLoc:{col:1,line:21},startBody:{col:42,line:18},endBody:{col:1,line:21}},muted:{startLoc:{col:42,line:18},endLoc:{col:1,line:21},startBody:{col:42,line:18},endBody:{col:1,line:21}}}}},title:"Typography/Leading",component:lt,args:{children:"I'm a Leading",isMuted:!1}};const Nd=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(lt,x(f({},a),{children:t}))},Ed=Nd.bind({});Ed.args={};const Dd=Nd.bind({});Dd.args={isMuted:!0};const u0=["Base","Muted"];var m0=Object.freeze(Object.defineProperty({__proto__:null,default:d0,Base:Ed,Muted:Dd,__namedExportsOrder:u0},Symbol.toStringTag,{value:"Module"})),p0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  Button,
  Modal,
  ModalProps,
  ModalButtonBar,
  ModalContent,
} from '@itwin/itwinui-react';

export default {
  title: 'Core/Modal',
  component: Modal,
  args: {
    title: 'This is the title',
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    onClose: { control: { disable: true } },
    ownerDocument: { control: { disable: true } },
  },
} as Meta<ModalProps>;

export const Basic: Story<ModalProps> = ({
  isOpen,
  title = 'This is the title',
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeModal();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeModal();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeModal();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        title={title}
        onClose={onClose}
        onKeyDown={action('onKeyDown', { depth: 1 })}
        {...rest}
      >
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalContent>
        <ModalButtonBar>
          <Button styleType='high-visibility' onClick={primaryButtonHandle}>
            Primary
          </Button>
          <Button onClick={secondaryButtonHandle}>Secondary</Button>
        </ModalButtonBar>
      </Modal>
    </>
  );
};

export const NonDismissibleModal: Story<ModalProps> = ({
  isOpen,
  title = 'This is the title',
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeModal();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeModal();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeModal();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        title={title}
        onClose={onClose}
        onKeyDown={action('onKeyDown', { depth: 1 })}
        isDismissible={false}
        {...rest}
      >
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalContent>
        <ModalButtonBar>
          <Button styleType='high-visibility' onClick={primaryButtonHandle}>
            Primary
          </Button>
          <Button onClick={secondaryButtonHandle}>Secondary</Button>
        </ModalButtonBar>
      </Modal>
    </>
  );
};

NonDismissibleModal.args = {
  isDismissible: false,
};

export const OutsideClickAndEscDoesNotClose: Story<ModalProps> = ({
  isOpen,
  title = 'This is the title',
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeModal();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeModal();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeModal();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        title={title}
        onClose={onClose}
        onKeyDown={action('onKeyDown', { depth: 1 })}
        closeOnEsc={false}
        closeOnExternalClick={false}
        {...rest}
      >
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalContent>
        <ModalButtonBar>
          <Button styleType='high-visibility' onClick={primaryButtonHandle}>
            Primary
          </Button>
          <Button onClick={secondaryButtonHandle}>Secondary</Button>
        </ModalButtonBar>
      </Modal>
    </>
  );
};

OutsideClickAndEscDoesNotClose.args = {
  closeOnEsc: false,
  closeOnExternalClick: false,
};

export const FullPageModal: Story<ModalProps> = ({
  isOpen,
  title = 'This is the title',
  ...rest
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClose = (event: React.SyntheticEvent<Element, Event>) => {
    action('onClose', { depth: 1 })(event);
    closeModal();
  };

  const primaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Primary button')(event);
    closeModal();
  };

  const secondaryButtonHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    action('Secondary button')(event);
    closeModal();
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        title={title}
        onClose={onClose}
        onKeyDown={action('onKeyDown', { depth: 1 })}
        styleType='fullPage'
        {...rest}
      >
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalContent>
        <ModalButtonBar>
          <Button styleType='high-visibility' onClick={primaryButtonHandle}>
            Primary
          </Button>
          <Button onClick={secondaryButtonHandle}>Secondary</Button>
        </ModalButtonBar>
      </Modal>
    </>
  );
};

FullPageModal.args = {
  styleType: 'fullPage',
};
`,locationsMap:{basic:{startLoc:{col:40,line:31},endLoc:{col:1,line:95},startBody:{col:40,line:31},endBody:{col:1,line:95}},"non-dismissible-modal":{startLoc:{col:54,line:97},endLoc:{col:1,line:162},startBody:{col:54,line:97},endBody:{col:1,line:162}},"outside-click-and-esc-does-not-close":{startLoc:{col:65,line:168},endLoc:{col:1,line:234},startBody:{col:65,line:168},endBody:{col:1,line:234}},"full-page-modal":{startLoc:{col:48,line:241},endLoc:{col:1,line:306},startBody:{col:48,line:241},endBody:{col:1,line:306}}}}},title:"Core/Modal",component:Ut,args:{title:"This is the title"},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},onClose:{control:{disable:!0}},ownerDocument:{control:{disable:!0}}}};const b0=n=>{var r=n,{isOpen:e,title:t="This is the title"}=r,a=L(r,["isOpen","title"]);const[i,s]=o.useState(e);o.useEffect(()=>{s(e)},[e]);const c=()=>{s(!1)},d=m=>{_("onClose",{depth:1})(m),c()},p=m=>{_("Primary button")(m),c()},u=m=>{_("Secondary button")(m),c()};return N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>s(!0),children:"Open Modal"}),N(Ut,x(f({isOpen:i,title:t,onClose:d,onKeyDown:_("onKeyDown",{depth:1})},a),{children:[l(Hr,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),N(jr,{children:[l(ee,{styleType:"high-visibility",onClick:p,children:"Primary"}),l(ee,{onClick:u,children:"Secondary"})]})]}))]})},Rd=n=>{var r=n,{isOpen:e,title:t="This is the title"}=r,a=L(r,["isOpen","title"]);const[i,s]=o.useState(e);o.useEffect(()=>{s(e)},[e]);const c=()=>{s(!1)},d=m=>{_("onClose",{depth:1})(m),c()},p=m=>{_("Primary button")(m),c()},u=m=>{_("Secondary button")(m),c()};return N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>s(!0),children:"Open Modal"}),N(Ut,x(f({isOpen:i,title:t,onClose:d,onKeyDown:_("onKeyDown",{depth:1}),isDismissible:!1},a),{children:[l(Hr,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),N(jr,{children:[l(ee,{styleType:"high-visibility",onClick:p,children:"Primary"}),l(ee,{onClick:u,children:"Secondary"})]})]}))]})};Rd.args={isDismissible:!1};const Md=n=>{var r=n,{isOpen:e,title:t="This is the title"}=r,a=L(r,["isOpen","title"]);const[i,s]=o.useState(e);o.useEffect(()=>{s(e)},[e]);const c=()=>{s(!1)},d=m=>{_("onClose",{depth:1})(m),c()},p=m=>{_("Primary button")(m),c()},u=m=>{_("Secondary button")(m),c()};return N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>s(!0),children:"Open Modal"}),N(Ut,x(f({isOpen:i,title:t,onClose:d,onKeyDown:_("onKeyDown",{depth:1}),closeOnEsc:!1,closeOnExternalClick:!1},a),{children:[l(Hr,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),N(jr,{children:[l(ee,{styleType:"high-visibility",onClick:p,children:"Primary"}),l(ee,{onClick:u,children:"Secondary"})]})]}))]})};Md.args={closeOnEsc:!1,closeOnExternalClick:!1};const Ld=n=>{var r=n,{isOpen:e,title:t="This is the title"}=r,a=L(r,["isOpen","title"]);const[i,s]=o.useState(e);o.useEffect(()=>{s(e)},[e]);const c=()=>{s(!1)},d=m=>{_("onClose",{depth:1})(m),c()},p=m=>{_("Primary button")(m),c()},u=m=>{_("Secondary button")(m),c()};return N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>s(!0),children:"Open Modal"}),N(Ut,x(f({isOpen:i,title:t,onClose:d,onKeyDown:_("onKeyDown",{depth:1}),styleType:"fullPage"},a),{children:[l(Hr,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),N(jr,{children:[l(ee,{styleType:"high-visibility",onClick:p,children:"Primary"}),l(ee,{onClick:u,children:"Secondary"})]})]}))]})};Ld.args={styleType:"fullPage"};const g0=["Basic","NonDismissibleModal","OutsideClickAndEscDoesNotClose","FullPageModal"];var f0=Object.freeze(Object.defineProperty({__proto__:null,default:p0,Basic:b0,NonDismissibleModal:Rd,OutsideClickAndEscDoesNotClose:Md,FullPageModal:Ld,__namedExportsOrder:g0},Symbol.toStringTag,{value:"Module"})),y0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

import SvgStatusErrorHollow from '@itwin/itwinui-icons-react/cjs/icons/StatusErrorHollow';
import SvgStatusSuccessHollow from '@itwin/itwinui-icons-react/cjs/icons/StatusSuccessHollow';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProgressLinear, ProgressLinearProps } from '@itwin/itwinui-react';

export default {
  title: 'ProgressIndicators/ProgressLinear',
  component: ProgressLinear,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    title: { control: { disable: true } },
    id: { control: { disable: true } },
  },
} as Meta<ProgressLinearProps>;

export const Determinate: Story<ProgressLinearProps> = (args) => {
  const { value = 50, ...rest } = args;
  return <ProgressLinear value={value} {...rest} />;
};

Determinate.args = {
  value: 50,
};

export const DeterminateAnimated: Story<ProgressLinearProps> = (args) => {
  const { value = 50, isAnimated = true, ...rest } = args;
  return <ProgressLinear value={value} isAnimated={isAnimated} {...rest} />;
};

DeterminateAnimated.args = {
  isAnimated: true,
  value: 50,
};

export const Indeterminate: Story<ProgressLinearProps> = (args) => {
  const { indeterminate = true, ...rest } = args;
  return <ProgressLinear indeterminate={indeterminate} {...rest} />;
};

Indeterminate.args = {
  indeterminate: true,
};

export const LabeledCenter: Story<ProgressLinearProps> = (args) => {
  const { value = 50, labels = ['Centered Label'], ...rest } = args;
  return <ProgressLinear value={value} labels={labels} {...rest} />;
};

LabeledCenter.args = {
  labels: ['Centered Label'],
  value: 50,
};

export const LabeledLeftRight: Story<ProgressLinearProps> = (args) => {
  const { value = 50, labels = ['Loading...', '50%'], ...rest } = args;
  return <ProgressLinear value={value} labels={labels} {...rest} />;
};

LabeledLeftRight.args = {
  labels: ['Loading...', '50%'],
  value: 50,
};

export const Positive: Story<ProgressLinearProps> = (args) => {
  const {
    value = 100,
    labels = ['Upload done!', <SvgStatusSuccessHollow />],
    status = 'positive',
    ...rest
  } = args;
  return (
    <ProgressLinear value={value} labels={labels} status={status} {...rest} />
  );
};

Positive.args = {
  labels: ['Upload done!', <SvgStatusSuccessHollow />],
  status: 'positive',
  value: 100,
};

export const Negative: Story<ProgressLinearProps> = (args) => {
  const {
    value = 45,
    labels = ['Upload failed', <SvgStatusErrorHollow />],
    status = 'negative',
    ...rest
  } = args;
  return (
    <ProgressLinear value={value} labels={labels} status={status} {...rest} />
  );
};

Negative.args = {
  labels: ['Upload failed', <SvgStatusErrorHollow />],
  status: 'negative',
  value: 45,
};
`,locationsMap:{determinate:{startLoc:{col:55,line:23},endLoc:{col:1,line:26},startBody:{col:55,line:23},endBody:{col:1,line:26}},"determinate-animated":{startLoc:{col:63,line:32},endLoc:{col:1,line:35},startBody:{col:63,line:32},endBody:{col:1,line:35}},indeterminate:{startLoc:{col:57,line:42},endLoc:{col:1,line:45},startBody:{col:57,line:42},endBody:{col:1,line:45}},"labeled-center":{startLoc:{col:57,line:51},endLoc:{col:1,line:54},startBody:{col:57,line:51},endBody:{col:1,line:54}},"labeled-left-right":{startLoc:{col:60,line:61},endLoc:{col:1,line:64},startBody:{col:60,line:61},endBody:{col:1,line:64}},positive:{startLoc:{col:52,line:71},endLoc:{col:1,line:81},startBody:{col:52,line:71},endBody:{col:1,line:81}},negative:{startLoc:{col:52,line:89},endLoc:{col:1,line:99},startBody:{col:52,line:89},endBody:{col:1,line:99}}}}},title:"ProgressIndicators/ProgressLinear",component:Pn,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},title:{control:{disable:!0}},id:{control:{disable:!0}}}};const Ad=e=>{const n=e,{value:t=50}=n,a=L(n,["value"]);return l(Pn,f({value:t},a))};Ad.args={value:50};const jd=e=>{const r=e,{value:t=50,isAnimated:a=!0}=r,n=L(r,["value","isAnimated"]);return l(Pn,f({value:t,isAnimated:a},n))};jd.args={isAnimated:!0,value:50};const Hd=e=>{const n=e,{indeterminate:t=!0}=n,a=L(n,["indeterminate"]);return l(Pn,f({indeterminate:t},a))};Hd.args={indeterminate:!0};const Fd=e=>{const r=e,{value:t=50,labels:a=["Centered Label"]}=r,n=L(r,["value","labels"]);return l(Pn,f({value:t,labels:a},n))};Fd.args={labels:["Centered Label"],value:50};const $d=e=>{const r=e,{value:t=50,labels:a=["Loading...","50%"]}=r,n=L(r,["value","labels"]);return l(Pn,f({value:t,labels:a},n))};$d.args={labels:["Loading...","50%"],value:50};const Ud=e=>{const i=e,{value:t=100,labels:a=["Upload done!",l(Pl,{})],status:n="positive"}=i,r=L(i,["value","labels","status"]);return l(Pn,f({value:t,labels:a,status:n},r))};Ud.args={labels:["Upload done!",l(Pl,{})],status:"positive",value:100};const zd=e=>{const i=e,{value:t=45,labels:a=["Upload failed",l(Bl,{})],status:n="negative"}=i,r=L(i,["value","labels","status"]);return l(Pn,f({value:t,labels:a,status:n},r))};zd.args={labels:["Upload failed",l(Bl,{})],status:"negative",value:45};const v0=["Determinate","DeterminateAnimated","Indeterminate","LabeledCenter","LabeledLeftRight","Positive","Negative"];var h0=Object.freeze(Object.defineProperty({__proto__:null,default:y0,Determinate:Ad,DeterminateAnimated:jd,Indeterminate:Hd,LabeledCenter:Fd,LabeledLeftRight:$d,Positive:Ud,Negative:zd,__namedExportsOrder:v0},Symbol.toStringTag,{value:"Module"})),S0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ProgressRadial, ProgressRadialProps } from '@itwin/itwinui-react';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'ProgressIndicators/ProgressRadial',
  component: ProgressRadial,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    title: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  args: {
    value: 50,
  },
} as Meta<ProgressRadialProps>;

export const Determinate: Story<ProgressRadialProps> = (args) => {
  const { value = 50, ...rest } = args;
  return <ProgressRadial value={value} {...rest} />;
};

export const Indeterminate: Story<ProgressRadialProps> = (args) => {
  const { indeterminate = true, ...rest } = args;
  return <ProgressRadial indeterminate={indeterminate} {...rest} />;
};

Indeterminate.args = {
  indeterminate: true,
};

export const Positive: Story<ProgressRadialProps> = (args) => {
  const { status = 'positive', ...rest } = args;
  return <ProgressRadial status={status} {...rest} />;
};

Positive.args = {
  status: 'positive',
};

export const Negative: Story<ProgressRadialProps> = (args) => {
  const { status = 'negative', ...rest } = args;
  return <ProgressRadial status={status} {...rest} />;
};

Negative.args = {
  status: 'negative',
};

export const DeterminateWithContent: Story<ProgressRadialProps> = (args) => {
  const { value = 50, ...rest } = args;
  return (
    <ProgressRadial value={value} {...rest}>
      {args.children}
    </ProgressRadial>
  );
};

DeterminateWithContent.args = {
  children: '50',
};
`,locationsMap:{determinate:{startLoc:{col:55,line:23},endLoc:{col:1,line:26},startBody:{col:55,line:23},endBody:{col:1,line:26}},indeterminate:{startLoc:{col:57,line:28},endLoc:{col:1,line:31},startBody:{col:57,line:28},endBody:{col:1,line:31}},positive:{startLoc:{col:52,line:37},endLoc:{col:1,line:40},startBody:{col:52,line:37},endBody:{col:1,line:40}},negative:{startLoc:{col:52,line:46},endLoc:{col:1,line:49},startBody:{col:52,line:46},endBody:{col:1,line:49}},"determinate-with-content":{startLoc:{col:66,line:55},endLoc:{col:1,line:62},startBody:{col:66,line:55},endBody:{col:1,line:62}}}}},title:"ProgressIndicators/ProgressRadial",component:Ye,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},title:{control:{disable:!0}},id:{control:{disable:!0}}},args:{value:50}};const w0=e=>{const n=e,{value:t=50}=n,a=L(n,["value"]);return l(Ye,f({value:t},a))},Wd=e=>{const n=e,{indeterminate:t=!0}=n,a=L(n,["indeterminate"]);return l(Ye,f({indeterminate:t},a))};Wd.args={indeterminate:!0};const Vd=e=>{const n=e,{status:t="positive"}=n,a=L(n,["status"]);return l(Ye,f({status:t},a))};Vd.args={status:"positive"};const Gd=e=>{const n=e,{status:t="negative"}=n,a=L(n,["status"]);return l(Ye,f({status:t},a))};Gd.args={status:"negative"};const qd=e=>{const n=e,{value:t=50}=n,a=L(n,["value"]);return l(Ye,x(f({value:t},a),{children:e.children}))};qd.args={children:"50"};const T0=["Determinate","Indeterminate","Positive","Negative","DeterminateWithContent"];var C0=Object.freeze(Object.defineProperty({__proto__:null,default:S0,Determinate:w0,Indeterminate:Wd,Positive:Vd,Negative:Gd,DeterminateWithContent:qd,__namedExportsOrder:T0},Symbol.toStringTag,{value:"Module"})),I0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Radio, RadioProps } from '@itwin/itwinui-react';
export default {
  title: 'Input/Radio',
  component: Radio,
  argTypes: {
    checkmarkClassName: { control: { disable: true } },
    checkmarkStyle: { control: { disable: true } },
  },
} as Meta<RadioProps>;

export const Basic: Story<RadioProps> = (args) => {
  const { label = 'Choose me!', defaultChecked = true, ...rest } = args;
  return <Radio label={label} defaultChecked={defaultChecked} {...rest} />;
};

Basic.args = {
  label: 'Choose me!',
  defaultChecked: true,
};

export const Disabled: Story<RadioProps> = (args) => {
  const { label = 'Cannot choose me!', disabled = true, ...rest } = args;
  return <Radio disabled={disabled} label={label} {...rest} />;
};

Disabled.args = {
  label: 'Cannot choose me!',
  disabled: true,
};

export const Positive: Story<RadioProps> = (args) => {
  const { label = 'Positive!', status = 'positive', ...rest } = args;
  return <Radio status={status} label={label} {...rest} />;
};

Positive.args = {
  label: 'Positive!',
  status: 'positive',
};

export const Warning: Story<RadioProps> = (args) => {
  const { label = 'Careful!', status = 'warning', ...rest } = args;
  return <Radio status={status} label={label} {...rest} />;
};

Warning.args = {
  label: 'Careful!',
  status: 'warning',
};

export const Negative: Story<RadioProps> = (args) => {
  const { label = 'Bad idea...', status = 'negative', ...rest } = args;
  return <Radio status={status} label={label} {...rest} />;
};

Negative.args = {
  label: 'Bad idea...',
  status: 'negative',
};
`,locationsMap:{basic:{startLoc:{col:40,line:17},endLoc:{col:1,line:20},startBody:{col:40,line:17},endBody:{col:1,line:20}},disabled:{startLoc:{col:43,line:27},endLoc:{col:1,line:30},startBody:{col:43,line:27},endBody:{col:1,line:30}},positive:{startLoc:{col:43,line:37},endLoc:{col:1,line:40},startBody:{col:43,line:37},endBody:{col:1,line:40}},warning:{startLoc:{col:42,line:47},endLoc:{col:1,line:50},startBody:{col:42,line:47},endBody:{col:1,line:50}},negative:{startLoc:{col:43,line:57},endLoc:{col:1,line:60},startBody:{col:43,line:57},endBody:{col:1,line:60}}}}},title:"Input/Radio",component:qe,argTypes:{checkmarkClassName:{control:{disable:!0}},checkmarkStyle:{control:{disable:!0}}}};const Kd=e=>{const r=e,{label:t="Choose me!",defaultChecked:a=!0}=r,n=L(r,["label","defaultChecked"]);return l(qe,f({label:t,defaultChecked:a},n))};Kd.args={label:"Choose me!",defaultChecked:!0};const Jd=e=>{const r=e,{label:t="Cannot choose me!",disabled:a=!0}=r,n=L(r,["label","disabled"]);return l(qe,f({disabled:a,label:t},n))};Jd.args={label:"Cannot choose me!",disabled:!0};const Yd=e=>{const r=e,{label:t="Positive!",status:a="positive"}=r,n=L(r,["label","status"]);return l(qe,f({status:a,label:t},n))};Yd.args={label:"Positive!",status:"positive"};const Zd=e=>{const r=e,{label:t="Careful!",status:a="warning"}=r,n=L(r,["label","status"]);return l(qe,f({status:a,label:t},n))};Zd.args={label:"Careful!",status:"warning"};const Xd=e=>{const r=e,{label:t="Bad idea...",status:a="negative"}=r,n=L(r,["label","status"]);return l(qe,f({status:a,label:t},n))};Xd.args={label:"Bad idea...",status:"negative"};const x0=["Basic","Disabled","Positive","Warning","Negative"];var k0=Object.freeze(Object.defineProperty({__proto__:null,default:I0,Basic:Kd,Disabled:Jd,Positive:Yd,Warning:Zd,Negative:Xd,__namedExportsOrder:x0},Symbol.toStringTag,{value:"Module"})),_0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgNetwork from '@itwin/itwinui-icons-react/cjs/icons/Network';
import SvgWindows from '@itwin/itwinui-icons-react/cjs/icons/Windows';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  RadioTile,
  RadioTileGroup,
  RadioTileGroupProps,
} from '@itwin/itwinui-react';

export default {
  title: 'Input/RadioTileGroup',
  component: RadioTileGroup,
} as Meta<RadioTileGroupProps>;

export const Monochrome: Story<RadioTileGroupProps> = (args) => {
  return (
    <RadioTileGroup {...args}>
      <RadioTile
        label='Web'
        description='Dimensions in px'
        icon={<SvgNetwork />}
        defaultChecked
        name='OS'
        value='Web'
      />
      <RadioTile
        label='iOS'
        description='Dimensions in pt'
        icon={
          <svg aria-hidden='true' viewBox='0 0 16 16'>
            <path d='m14.38732 12.46864a8.67507 8.67507 0 0 1 -.85133 1.54667 7.83909 7.83909 0 0 1 -1.096 1.33933 2.11842 2.11842 0 0 1 -1.40933.62733 3.50824 3.50824 0 0 1 -1.30133-.314 3.7014 3.7014 0 0 0 -1.40133-.31333 3.82728 3.82728 0 0 0 -1.44066.31333 3.84425 3.84425 0 0 1 -1.24467.33067 1.98968 1.98968 0 0 1 -1.44066-.644 8.203 8.203 0 0 1 -1.14667-1.38664 9.61729 9.61729 0 0 1 -1.21266-2.43466 8.99338 8.99338 0 0 1 -.50933-2.90134 5.34287 5.34287 0 0 1 .68865-2.772 4.05969 4.05969 0 0 1 1.44134-1.474 3.84792 3.84792 0 0 1 1.94933-.556 4.55944 4.55944 0 0 1 1.50733.35466 4.79788 4.79788 0 0 0 1.196.35534 7.06478 7.06478 0 0 0 1.326-.41866 4.34039 4.34039 0 0 1 1.802-.32334 3.8146 3.8146 0 0 1 2.99733 1.59533 3.37671 3.37671 0 0 0 -1.768 3.062 3.3911 3.3911 0 0 0 1.09733 2.54467 3.59839 3.59839 0 0 0 1.096.72733q-.132.386-.27933.74133zm-3.05466-12.14864a3.43565 3.43565 0 0 1 -.86533 2.23866 2.93869 2.93869 0 0 1 -2.45 1.22267 2.58687 2.58687 0 0 1 -.018-.30334 3.63848 3.63848 0 0 1 2.03667-3.11132 3.30968 3.30968 0 0 1 1.28-.36667 2.86658 2.86658 0 0 1 .01667.32z' />
          </svg>
        }
        name='OS'
        value='iOS'
      />
      <RadioTile
        label='Android'
        description='Dimensions in dp/sp'
        icon={
          <svg aria-hidden='true' viewBox='0 0 16 16'>
            <path d='m3.28467 6.184v4.122a.97577.97577 0 1 1 -1.95134 0v-4.122a.97576.97576 0 1 1 1.95134 0zm2.58133-4.71533-.688-1.25934a.14184.14184 0 0 1 .054-.19133.13814.13814 0 0 1 .18867.05467l.696 1.27333a4.63366 4.63366 0 0 1 3.76666 0l.696-1.27333a.1368.1368 0 0 1 .18867-.05467.14184.14184 0 0 1 .054.19133l-.688 1.25934a4.03915 4.03915 0 0 1 2.218 3.546h-8.704a4.03915 4.03915 0 0 1 2.218-3.546zm3.77933 1.56266a.36337.36337 0 1 0 .36334-.36866.36621.36621 0 0 0 -.36334.36866zm-4.01733 0a.36337.36337 0 1 0 .36333-.36866.3662.3662 0 0 0 -.36333.36866zm8.06267 2.16334a.98351.98351 0 0 0 -.97534.98933v4.122a.97577.97577 0 1 0 1.95134 0v-4.122a.98365.98365 0 0 0 -.976-.98933zm-10.04267.16933v6.39733a1.05948 1.05948 0 0 0 1.052 1.06667h.69867v2.18267a.97543.97543 0 1 0 1.95066 0v-2.18267h1.30134v2.18267a.97543.97543 0 1 0 1.95066 0v-2.18267h.69867a1.05948 1.05948 0 0 0 1.052-1.06667v-6.39733z' />
          </svg>
        }
        name='OS'
        value='Android'
      />
      <RadioTile
        label='Windows'
        description='Windows phone is no longer supported'
        icon={<SvgWindows />}
        disabled
        name='OS'
        value='Windows'
      />
    </RadioTileGroup>
  );
};

Monochrome.args = {
  label: 'Choose type',
};

export const Colored: Story<RadioTileGroupProps> = (args) => {
  return (
    <RadioTileGroup {...args}>
      <RadioTile
        label='Google Maps'
        icon={
          <svg aria-hidden='true' viewBox='0 0 24 24'>
            <path
              d='m12 0a7.98189 7.98189 0 0 0 -6.9688 11.906c.1079.192.221.381.3438.563l6.625 11.531 6.625-11.531c.102-.151.19-.311.281-.469l.063-.094a7.98217 7.98217 0 0 0 -6.969-11.906zm0 4a4 4 0 1 1 -4 4 4.00011 4.00011 0 0 1 4-4z'
              fill='#e74c3c'
            />
            <path
              d='m12 3a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 2a3 3 0 1 1 -3 3 2.99988 2.99988 0 0 1 3-3z'
              fill='#c0392b'
            />
          </svg>
        }
        name='map'
        value='Google Maps'
      />
      <RadioTile
        label='Bentley Blue'
        icon={
          <svg aria-hidden='true' viewBox='0 0 24 24'>
            <path
              d='m12 0a8.12188 8.12188 0 0 0 -8.18182 7.95c0 1.8 1.235 4.65 3.55066 8.85 1.698 3 4.6311 7.2 4.6311 7.2s2.93308-4.35 4.63122-7.35c2.31571-4.2 3.55066-7.05 3.55066-8.85a8.09618 8.09618 0 0 0 -8.18188-7.8z'
              fill='#fff'
            />
            <path
              d='m12 1.10962a7.05246 7.05246 0 0 0 -7.0722 6.84038c0 1.88313 1.8238 5.43244 3.41275 8.31426 1.06435 1.88039 2.649 4.27827 3.64493 5.75084.99723-1.518 2.60183-4.00688 3.68-5.91171 1.58292-2.87099 3.40672-6.42031 3.40672-8.30339a6.98162 6.98162 0 0 0 -7.0722-6.69038zm.002 9.79947a3.27273 3.27273 0 1 1 3.27272-3.27273 3.27268 3.27268 0 0 1 -3.27272 3.27273z'
              fill='#6ab9ec'
            />
          </svg>
        }
        name='map'
        value='Bentley Blue'
        defaultChecked
      />
      <RadioTile
        label='Bentley Green'
        icon={
          <svg aria-hidden='true' viewBox='0 0 24 24'>
            <path
              d='m12 0a8.12188 8.12188 0 0 0 -8.18182 7.95c0 1.8 1.235 4.65 3.55066 8.85 1.698 3 4.6311 7.2 4.6311 7.2s2.93308-4.35 4.63122-7.35c2.31571-4.2 3.55066-7.05 3.55066-8.85a8.09618 8.09618 0 0 0 -8.18188-7.8z'
              fill='#fff'
            />
            <path
              d='m12 1.10962a7.05246 7.05246 0 0 0 -7.0722 6.84038c0 1.88313 1.8238 5.43244 3.41275 8.31426 1.06435 1.88039 2.649 4.27827 3.64493 5.75084.99723-1.518 2.60183-4.00688 3.68-5.91171 1.58292-2.87099 3.40672-6.42031 3.40672-8.30339a6.98162 6.98162 0 0 0 -7.0722-6.69038zm.002 9.79947a3.27273 3.27273 0 1 1 3.27272-3.27273 3.27268 3.27268 0 0 1 -3.27272 3.27273z'
              fill='#b1c854'
            />
          </svg>
        }
        name='map'
        value='Bentley Green'
      />
      <RadioTile
        label='Bentley Purple'
        icon={
          <svg aria-hidden='true' viewBox='0 0 24 24'>
            <path
              d='m12 0a8.12188 8.12188 0 0 0 -8.18182 7.95c0 1.8 1.235 4.65 3.55066 8.85 1.698 3 4.6311 7.2 4.6311 7.2s2.93308-4.35 4.63122-7.35c2.31571-4.2 3.55066-7.05 3.55066-8.85a8.09618 8.09618 0 0 0 -8.18188-7.8z'
              fill='#fff'
            />
            <path
              d='m12 1.10962a7.05246 7.05246 0 0 0 -7.0722 6.84038c0 1.88313 1.8238 5.43244 3.41275 8.31426 1.06435 1.88039 2.649 4.27827 3.64493 5.75084.99723-1.518 2.60183-4.00688 3.68-5.91171 1.58292-2.87099 3.40672-6.42031 3.40672-8.30339a6.98162 6.98162 0 0 0 -7.0722-6.69038zm.002 9.79947a3.27273 3.27273 0 1 1 3.27272-3.27273 3.27268 3.27268 0 0 1 -3.27272 3.27273z'
              fill='#A3779F'
            />
          </svg>
        }
        disabled
        name='map'
        value='Bentley Purple'
      />
    </RadioTileGroup>
  );
};

Colored.args = {
  label: 'Map indicator type',
};
`,locationsMap:{monochrome:{startLoc:{col:54,line:20},endLoc:{col:1,line:63},startBody:{col:54,line:20},endBody:{col:1,line:63}},colored:{startLoc:{col:51,line:69},endLoc:{col:1,line:144},startBody:{col:51,line:69},endBody:{col:1,line:144}}}}},title:"Input/RadioTileGroup",component:Qo};const Qd=e=>N(Qo,x(f({},e),{children:[l(In,{label:"Web",description:"Dimensions in px",icon:l(wr,{}),defaultChecked:!0,name:"OS",value:"Web"}),l(In,{label:"iOS",description:"Dimensions in pt",icon:l("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",children:l("path",{d:"m14.38732 12.46864a8.67507 8.67507 0 0 1 -.85133 1.54667 7.83909 7.83909 0 0 1 -1.096 1.33933 2.11842 2.11842 0 0 1 -1.40933.62733 3.50824 3.50824 0 0 1 -1.30133-.314 3.7014 3.7014 0 0 0 -1.40133-.31333 3.82728 3.82728 0 0 0 -1.44066.31333 3.84425 3.84425 0 0 1 -1.24467.33067 1.98968 1.98968 0 0 1 -1.44066-.644 8.203 8.203 0 0 1 -1.14667-1.38664 9.61729 9.61729 0 0 1 -1.21266-2.43466 8.99338 8.99338 0 0 1 -.50933-2.90134 5.34287 5.34287 0 0 1 .68865-2.772 4.05969 4.05969 0 0 1 1.44134-1.474 3.84792 3.84792 0 0 1 1.94933-.556 4.55944 4.55944 0 0 1 1.50733.35466 4.79788 4.79788 0 0 0 1.196.35534 7.06478 7.06478 0 0 0 1.326-.41866 4.34039 4.34039 0 0 1 1.802-.32334 3.8146 3.8146 0 0 1 2.99733 1.59533 3.37671 3.37671 0 0 0 -1.768 3.062 3.3911 3.3911 0 0 0 1.09733 2.54467 3.59839 3.59839 0 0 0 1.096.72733q-.132.386-.27933.74133zm-3.05466-12.14864a3.43565 3.43565 0 0 1 -.86533 2.23866 2.93869 2.93869 0 0 1 -2.45 1.22267 2.58687 2.58687 0 0 1 -.018-.30334 3.63848 3.63848 0 0 1 2.03667-3.11132 3.30968 3.30968 0 0 1 1.28-.36667 2.86658 2.86658 0 0 1 .01667.32z"})}),name:"OS",value:"iOS"}),l(In,{label:"Android",description:"Dimensions in dp/sp",icon:l("svg",{"aria-hidden":"true",viewBox:"0 0 16 16",children:l("path",{d:"m3.28467 6.184v4.122a.97577.97577 0 1 1 -1.95134 0v-4.122a.97576.97576 0 1 1 1.95134 0zm2.58133-4.71533-.688-1.25934a.14184.14184 0 0 1 .054-.19133.13814.13814 0 0 1 .18867.05467l.696 1.27333a4.63366 4.63366 0 0 1 3.76666 0l.696-1.27333a.1368.1368 0 0 1 .18867-.05467.14184.14184 0 0 1 .054.19133l-.688 1.25934a4.03915 4.03915 0 0 1 2.218 3.546h-8.704a4.03915 4.03915 0 0 1 2.218-3.546zm3.77933 1.56266a.36337.36337 0 1 0 .36334-.36866.36621.36621 0 0 0 -.36334.36866zm-4.01733 0a.36337.36337 0 1 0 .36333-.36866.3662.3662 0 0 0 -.36333.36866zm8.06267 2.16334a.98351.98351 0 0 0 -.97534.98933v4.122a.97577.97577 0 1 0 1.95134 0v-4.122a.98365.98365 0 0 0 -.976-.98933zm-10.04267.16933v6.39733a1.05948 1.05948 0 0 0 1.052 1.06667h.69867v2.18267a.97543.97543 0 1 0 1.95066 0v-2.18267h1.30134v2.18267a.97543.97543 0 1 0 1.95066 0v-2.18267h.69867a1.05948 1.05948 0 0 0 1.052-1.06667v-6.39733z"})}),name:"OS",value:"Android"}),l(In,{label:"Windows",description:"Windows phone is no longer supported",icon:l(Mp,{}),disabled:!0,name:"OS",value:"Windows"})]}));Qd.args={label:"Choose type"};const eu=e=>N(Qo,x(f({},e),{children:[l(In,{label:"Google Maps",icon:N("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:[l("path",{d:"m12 0a7.98189 7.98189 0 0 0 -6.9688 11.906c.1079.192.221.381.3438.563l6.625 11.531 6.625-11.531c.102-.151.19-.311.281-.469l.063-.094a7.98217 7.98217 0 0 0 -6.969-11.906zm0 4a4 4 0 1 1 -4 4 4.00011 4.00011 0 0 1 4-4z",fill:"#e74c3c"}),l("path",{d:"m12 3a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 2a3 3 0 1 1 -3 3 2.99988 2.99988 0 0 1 3-3z",fill:"#c0392b"})]}),name:"map",value:"Google Maps"}),l(In,{label:"Bentley Blue",icon:N("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:[l("path",{d:"m12 0a8.12188 8.12188 0 0 0 -8.18182 7.95c0 1.8 1.235 4.65 3.55066 8.85 1.698 3 4.6311 7.2 4.6311 7.2s2.93308-4.35 4.63122-7.35c2.31571-4.2 3.55066-7.05 3.55066-8.85a8.09618 8.09618 0 0 0 -8.18188-7.8z",fill:"#fff"}),l("path",{d:"m12 1.10962a7.05246 7.05246 0 0 0 -7.0722 6.84038c0 1.88313 1.8238 5.43244 3.41275 8.31426 1.06435 1.88039 2.649 4.27827 3.64493 5.75084.99723-1.518 2.60183-4.00688 3.68-5.91171 1.58292-2.87099 3.40672-6.42031 3.40672-8.30339a6.98162 6.98162 0 0 0 -7.0722-6.69038zm.002 9.79947a3.27273 3.27273 0 1 1 3.27272-3.27273 3.27268 3.27268 0 0 1 -3.27272 3.27273z",fill:"#6ab9ec"})]}),name:"map",value:"Bentley Blue",defaultChecked:!0}),l(In,{label:"Bentley Green",icon:N("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:[l("path",{d:"m12 0a8.12188 8.12188 0 0 0 -8.18182 7.95c0 1.8 1.235 4.65 3.55066 8.85 1.698 3 4.6311 7.2 4.6311 7.2s2.93308-4.35 4.63122-7.35c2.31571-4.2 3.55066-7.05 3.55066-8.85a8.09618 8.09618 0 0 0 -8.18188-7.8z",fill:"#fff"}),l("path",{d:"m12 1.10962a7.05246 7.05246 0 0 0 -7.0722 6.84038c0 1.88313 1.8238 5.43244 3.41275 8.31426 1.06435 1.88039 2.649 4.27827 3.64493 5.75084.99723-1.518 2.60183-4.00688 3.68-5.91171 1.58292-2.87099 3.40672-6.42031 3.40672-8.30339a6.98162 6.98162 0 0 0 -7.0722-6.69038zm.002 9.79947a3.27273 3.27273 0 1 1 3.27272-3.27273 3.27268 3.27268 0 0 1 -3.27272 3.27273z",fill:"#b1c854"})]}),name:"map",value:"Bentley Green"}),l(In,{label:"Bentley Purple",icon:N("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:[l("path",{d:"m12 0a8.12188 8.12188 0 0 0 -8.18182 7.95c0 1.8 1.235 4.65 3.55066 8.85 1.698 3 4.6311 7.2 4.6311 7.2s2.93308-4.35 4.63122-7.35c2.31571-4.2 3.55066-7.05 3.55066-8.85a8.09618 8.09618 0 0 0 -8.18188-7.8z",fill:"#fff"}),l("path",{d:"m12 1.10962a7.05246 7.05246 0 0 0 -7.0722 6.84038c0 1.88313 1.8238 5.43244 3.41275 8.31426 1.06435 1.88039 2.649 4.27827 3.64493 5.75084.99723-1.518 2.60183-4.00688 3.68-5.91171 1.58292-2.87099 3.40672-6.42031 3.40672-8.30339a6.98162 6.98162 0 0 0 -7.0722-6.69038zm.002 9.79947a3.27273 3.27273 0 1 1 3.27272-3.27273 3.27268 3.27268 0 0 1 -3.27272 3.27273z",fill:"#A3779F"})]}),disabled:!0,name:"map",value:"Bentley Purple"})]}));eu.args={label:"Map indicator type"};const O0=["Monochrome","Colored"];var P0=Object.freeze(Object.defineProperty({__proto__:null,default:_0,Monochrome:Qd,Colored:eu,__namedExportsOrder:O0},Symbol.toStringTag,{value:"Module"})),B0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  MenuItem,
  Select,
  MiddleTextTruncation,
  SelectProps,
} from '@itwin/itwinui-react';
import { useState } from '@storybook/addons';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';
import SvgSmileyNeutral from '@itwin/itwinui-icons-react/cjs/icons/SmileyNeutral';
import SvgSmileySad from '@itwin/itwinui-icons-react/cjs/icons/SmileySad';

export default {
  title: 'Input/Select',
  component: Select,
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
    menuStyle: { control: { disable: true } },
    menuClassName: { control: { disable: true } },
  },
} as Meta<SelectProps<unknown>>;

export const Basic: Story<SelectProps<number>> = (args) => {
  const {
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2', disabled: true },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<number>
        {...rest}
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </div>
  );
};

Basic.args = {
  placeholder: 'Placeholder text',
  options: [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2', disabled: true },
    { value: 3, label: 'Item #3' },
  ],
};

export const WithIcons: Story<SelectProps<string>> = (args) => {
  const {
    options = [
      { value: 'happy', label: 'Happy', icon: <SvgSmileyHappy /> },
      { value: 'neutral', label: 'Neutral', icon: <SvgSmileyNeutral /> },
      { value: 'sad', label: 'Sad', icon: <SvgSmileySad /> },
    ],
    placeholder = 'How are you today?',
    ...rest
  } = args;
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<string>
        {...rest}
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </div>
  );
};

WithIcons.args = {
  placeholder: 'How are you today?',
  options: [
    { value: 'happy', label: 'Happy', icon: <SvgSmileyHappy /> },
    { value: 'neutral', label: 'Neutral', icon: <SvgSmileyNeutral /> },
    { value: 'sad', label: 'Sad', icon: <SvgSmileySad /> },
  ],
};

export const WithSelectedValue: Story<SelectProps<number>> = (args) => {
  const {
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number>(2);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<number>
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        popoverProps={{ visible: true }}
        {...rest}
      />
    </div>
  );
};

WithSelectedValue.args = {
  placeholder: 'Placeholder text',
  options: [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
    { value: 3, label: 'Item #3' },
  ],
  value: 2,
  popoverProps: { visible: true },
};

export const Disabled: Story<SelectProps<number>> = (args) => {
  const {
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<number>
        disabled
        {...rest}
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </div>
  );
};

Disabled.args = {
  disabled: true,
  options: [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
    { value: 3, label: 'Item #3' },
  ],
};

export const DisabledWithSelectedValue: Story<SelectProps<number>> = (args) => {
  const {
    options = [
      { value: 1, label: 'Item #1' },
      { value: 2, label: 'Item #2' },
      { value: 3, label: 'Item #3' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [value, setValue] = useState<number>(2);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<number>
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        popoverProps={{ visible: true }}
        disabled
        {...rest}
      />
    </div>
  );
};

DisabledWithSelectedValue.args = {
  disabled: true,
  options: [
    { value: 1, label: 'Item #1' },
    { value: 2, label: 'Item #2' },
    { value: 3, label: 'Item #3' },
  ],
};

export const ManyItems: Story<SelectProps<number>> = (args) => {
  const { placeholder = 'Placeholder text', options, ...rest } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<number>
        {...rest}
        options={
          options ||
          [...Array(20).fill(null)].map((_, index) => ({
            label: \`Item #\${index}\`,
            value: index,
          }))
        }
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </div>
  );
};

ManyItems.args = {
  placeholder: 'Placeholder text',
};

ManyItems.argTypes = {
  options: { control: { disable: true } },
};

export const Sublabels: Story<SelectProps<number>> = (args) => {
  const {
    options = [
      { value: 1, label: 'Item #1', sublabel: 'Sublabel #1' },
      { value: 2, label: 'Item #2', sublabel: 'Sublabel #2' },
      { value: 3, label: 'Item #3', sublabel: 'Sublabel #3' },
    ],
    placeholder = 'Placeholder text',
    size = 'large',
    ...rest
  } = args;
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <div style={{ minHeight: 350 }}>
      <Select<number>
        {...rest}
        options={options}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
        size={size}
      />
    </div>
  );
};

Sublabels.args = {
  placeholder: 'Placeholder text',
  size: 'large',
  options: [
    { value: 1, label: 'Item #1', sublabel: 'Sublabel #1' },
    { value: 2, label: 'Item #2', sublabel: 'Sublabel #2' },
    { value: 3, label: 'Item #3', sublabel: 'Sublabel #3' },
  ],
};

export const Custom: Story<SelectProps<string>> = (args) => {
  const {
    options = [
      { value: 'yellow', label: 'Yellow' },
      { value: 'green', label: 'Green' },
      { value: 'red', label: 'Red' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );
  return (
    <div style={{ minHeight: 350 }}>
      <Select<string>
        {...rest}
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder={placeholder}
        itemRenderer={(option) => (
          <MenuItem style={{ color: option.value }}>{option.label}</MenuItem>
        )}
        selectedItemRenderer={(option) => (
          <span style={{ backgroundColor: option.value }}>{option.label}</span>
        )}
      />
    </div>
  );
};

Custom.args = {
  placeholder: 'Placeholder text',
  options: [
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'red', label: 'Red' },
  ],
};

export const TruncateMiddleText: Story<SelectProps<string>> = (args) => {
  const {
    options = [
      {
        value:
          'MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html',
        label:
          'MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html',
      },
      { value: 'ShortNameFile.jpg', label: 'ShortNameFile.jpg' },
      { value: 'SomeOtherFile.dgn', label: 'SomeOtherFile.dgn' },
    ],
    placeholder = 'Placeholder text',
    ...rest
  } = args;
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    options[0].value,
  );
  return (
    <div style={{ minHeight: 350, width: 300 }}>
      <Select<string>
        {...rest}
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder={placeholder}
        itemRenderer={(option) => (
          <MenuItem>
            <MiddleTextTruncation text={option.label} />
          </MenuItem>
        )}
        selectedItemRenderer={(option) => (
          <MiddleTextTruncation text={option.label} />
        )}
      />
    </div>
  );
};
`,locationsMap:{basic:{startLoc:{col:49,line:30},endLoc:{col:1,line:52},startBody:{col:49,line:30},endBody:{col:1,line:52}},"with-icons":{startLoc:{col:53,line:63},endLoc:{col:1,line:85},startBody:{col:53,line:63},endBody:{col:1,line:85}},"with-selected-value":{startLoc:{col:61,line:96},endLoc:{col:1,line:119},startBody:{col:61,line:96},endBody:{col:1,line:119}},disabled:{startLoc:{col:52,line:132},endLoc:{col:1,line:155},startBody:{col:52,line:132},endBody:{col:1,line:155}},"disabled-with-selected-value":{startLoc:{col:69,line:166},endLoc:{col:1,line:190},startBody:{col:69,line:166},endBody:{col:1,line:190}},"many-items":{startLoc:{col:53,line:201},endLoc:{col:1,line:221},startBody:{col:53,line:201},endBody:{col:1,line:221}},sublabels:{startLoc:{col:53,line:231},endLoc:{col:1,line:255},startBody:{col:53,line:231},endBody:{col:1,line:255}},custom:{startLoc:{col:50,line:267},endLoc:{col:1,line:297},startBody:{col:50,line:267},endBody:{col:1,line:297}},"truncate-middle-text":{startLoc:{col:62,line:308},endLoc:{col:1,line:345},startBody:{col:62,line:308},endBody:{col:1,line:345}}}}},title:"Input/Select",component:Xe,argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}},id:{control:{disable:!0}},menuStyle:{control:{disable:!0}},menuClassName:{control:{disable:!0}}}};const nu=e=>{const s=e,{options:t=[{value:1,label:"Item #1"},{value:2,label:"Item #2",disabled:!0},{value:3,label:"Item #3"}],placeholder:a="Placeholder text"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(void 0);return l("div",{style:{minHeight:350},children:l(Xe,x(f({},n),{options:t,value:r,onChange:i,placeholder:a}))})};nu.args={placeholder:"Placeholder text",options:[{value:1,label:"Item #1"},{value:2,label:"Item #2",disabled:!0},{value:3,label:"Item #3"}]};const tu=e=>{const s=e,{options:t=[{value:"happy",label:"Happy",icon:l(Tr,{})},{value:"neutral",label:"Neutral",icon:l(Nl,{})},{value:"sad",label:"Sad",icon:l(Cr,{})}],placeholder:a="How are you today?"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(void 0);return l("div",{style:{minHeight:350},children:l(Xe,x(f({},n),{options:t,value:r,onChange:i,placeholder:a}))})};tu.args={placeholder:"How are you today?",options:[{value:"happy",label:"Happy",icon:l(Tr,{})},{value:"neutral",label:"Neutral",icon:l(Nl,{})},{value:"sad",label:"Sad",icon:l(Cr,{})}]};const ru=e=>{const s=e,{options:t=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:a="Placeholder text"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(2);return l("div",{style:{minHeight:350},children:l(Xe,f({options:t,value:r,onChange:i,placeholder:a,popoverProps:{visible:!0}},n))})};ru.args={placeholder:"Placeholder text",options:[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],value:2,popoverProps:{visible:!0}};const au=e=>{const s=e,{options:t=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:a="Placeholder text"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(void 0);return l("div",{style:{minHeight:350},children:l(Xe,x(f({disabled:!0},n),{options:t,value:r,onChange:i,placeholder:a}))})};au.args={disabled:!0,options:[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}]};const ou=e=>{const s=e,{options:t=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],placeholder:a="Placeholder text"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(2);return l("div",{style:{minHeight:350},children:l(Xe,f({options:t,value:r,onChange:i,placeholder:a,popoverProps:{visible:!0},disabled:!0},n))})};ou.args={disabled:!0,options:[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}]};const ui=e=>{const s=e,{placeholder:t="Placeholder text",options:a}=s,n=L(s,["placeholder","options"]),[r,i]=ue(void 0);return l("div",{style:{minHeight:350},children:l(Xe,x(f({},n),{options:a||[...Array(20).fill(null)].map((c,d)=>({label:`Item #${d}`,value:d})),value:r,onChange:i,placeholder:t}))})};ui.args={placeholder:"Placeholder text"};ui.argTypes={options:{control:{disable:!0}}};const iu=e=>{const c=e,{options:t=[{value:1,label:"Item #1",sublabel:"Sublabel #1"},{value:2,label:"Item #2",sublabel:"Sublabel #2"},{value:3,label:"Item #3",sublabel:"Sublabel #3"}],placeholder:a="Placeholder text",size:n="large"}=c,r=L(c,["options","placeholder","size"]),[i,s]=ue(void 0);return l("div",{style:{minHeight:350},children:l(Xe,x(f({},r),{options:t,value:i,onChange:s,placeholder:a,size:n}))})};iu.args={placeholder:"Placeholder text",size:"large",options:[{value:1,label:"Item #1",sublabel:"Sublabel #1"},{value:2,label:"Item #2",sublabel:"Sublabel #2"},{value:3,label:"Item #3",sublabel:"Sublabel #3"}]};const lu=e=>{const s=e,{options:t=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"red",label:"Red"}],placeholder:a="Placeholder text"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(void 0);return l("div",{style:{minHeight:350},children:l(Xe,x(f({},n),{options:t,value:r,onChange:i,placeholder:a,itemRenderer:c=>l(ie,{style:{color:c.value},children:c.label}),selectedItemRenderer:c=>l("span",{style:{backgroundColor:c.value},children:c.label})}))})};lu.args={placeholder:"Placeholder text",options:[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"red",label:"Red"}]};const N0=e=>{const s=e,{options:t=[{value:"MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html",label:"MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html"},{value:"ShortNameFile.jpg",label:"ShortNameFile.jpg"},{value:"SomeOtherFile.dgn",label:"SomeOtherFile.dgn"}],placeholder:a="Placeholder text"}=s,n=L(s,["options","placeholder"]),[r,i]=ue(t[0].value);return l("div",{style:{minHeight:350,width:300},children:l(Xe,x(f({},n),{options:t,value:r,onChange:i,placeholder:a,itemRenderer:c=>l(ie,{children:l(Hi,{text:c.label})}),selectedItemRenderer:c=>l(Hi,{text:c.label})}))})},E0=["Basic","WithIcons","WithSelectedValue","Disabled","DisabledWithSelectedValue","ManyItems","Sublabels","Custom","TruncateMiddleText"];var D0=Object.freeze(Object.defineProperty({__proto__:null,default:B0,Basic:nu,WithIcons:tu,WithSelectedValue:ru,Disabled:au,DisabledWithSelectedValue:ou,ManyItems:ui,Sublabels:iu,Custom:lu,TruncateMiddleText:N0,__namedExportsOrder:E0},Symbol.toStringTag,{value:"Module"})),R0={component:Fr,subcomponents:{SidenavButton:xn,SidenavSubmenu:ls,SidenavSubmenuHeader:ss},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},items:{control:{disable:!0}},secondaryItems:{control:{disable:!0}},submenu:{control:{disable:!0}}},decorators:[e=>l("div",{style:{height:"calc(100vh - 24px)"},children:l(e,{})})],parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import {
  SvgFlag,
  SvgFolderOpened,
  SvgHome,
  SvgPlaceholder,
  SvgSettings,
} from '@itwin/itwinui-icons-react';
import { useState } from '@storybook/addons';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  SideNavigation,
  SidenavButton,
  SidenavSubmenu,
  SidenavSubmenuHeader,
  SideNavigationProps,
  Text,
  IconButton,
  Anchor,
} from '@itwin/itwinui-react';

export default {
  component: SideNavigation,
  subcomponents: { SidenavButton, SidenavSubmenu, SidenavSubmenuHeader },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    items: { control: { disable: true } },
    secondaryItems: { control: { disable: true } },
    submenu: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ height: 'calc(100vh - 24px)' }}>
        <Story />
      </div>
    ),
  ],
  parameters: { docs: { source: { excludeDecorators: true } } },
  title: 'Core/SideNavigation',
} as Meta<SideNavigationProps>;

export const Basic: Story<SideNavigationProps> = (args) => {
  return (
    <SideNavigation
      {...args}
      items={[
        <SidenavButton startIcon={<SvgHome />} key={0}>
          Home
        </SidenavButton>,
        <SidenavButton startIcon={<SvgFlag />} key={1}>
          Issues
        </SidenavButton>,
        <SidenavButton startIcon={<SvgFolderOpened />} key={2} disabled>
          Documents
        </SidenavButton>,
      ]}
      secondaryItems={[
        <SidenavButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidenavButton>,
      ]}
    />
  );
};

export const ActiveItem: Story<SideNavigationProps> = (args) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const mainItems = [...Array(3).fill(null)].map((_, index) => (
    <SidenavButton
      startIcon={<SvgPlaceholder />}
      key={index}
      isActive={activeIndex === index}
      onClick={() => setActiveIndex(index)}
    >
      {\`App \${index}\`}
    </SidenavButton>
  ));

  return (
    <SideNavigation
      {...args}
      items={mainItems}
      secondaryItems={[
        <SidenavButton startIcon={<SvgSettings />} key={3}>
          Settings
        </SidenavButton>,
      ]}
    />
  );
};

export const Submenu: Story<SideNavigationProps> = (args) => {
  const itemsData = [
    { label: 'Home', icon: <SvgHome /> },
    { label: 'Issues', icon: <SvgFlag /> },
    { label: 'Documents', icon: <SvgFolderOpened /> },
    { label: 'Settings', icon: <SvgSettings /> },
  ];

  const [activeItem, setActiveItem] = useState(2);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
  const [activeSubItem, setActiveSubItem] = useState(0);

  const items = itemsData.map(({ label, icon }, index) => (
    <SidenavButton
      key={index}
      startIcon={icon}
      isActive={activeItem === index}
      isSubmenuOpen={label === 'Documents' && isSubmenuOpen} // needed for proper styling when submenu is open but page is not active
      onClick={() => {
        if (label !== 'Documents') {
          setActiveItem(index);
          setActiveSubItem(-1);
          setIsSubmenuOpen(false);
        } else {
          setIsSubmenuOpen((open) => !open);
        }
      }}
    >
      {label}
    </SidenavButton>
  ));

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <SideNavigation
        {...args}
        expanderPlacement='bottom'
        items={items.slice(0, 3)}
        secondaryItems={[items[3]]}
        isSubmenuOpen={isSubmenuOpen}
        submenu={
          <SidenavSubmenu>
            <SidenavSubmenuHeader
              actions={
                <IconButton styleType='borderless'>
                  <SvgSettings />
                </IconButton>
              }
            >
              <span>Documents</span>
            </SidenavSubmenuHeader>
            <Text variant='leading'>All documents</Text>
            <ul>
              {[...Array(10).fill(null)].map((_, index) => (
                <li key={index}>
                  <Anchor
                    onClick={() => {
                      setActiveItem(2);
                      setActiveSubItem(index);
                    }}
                  >
                    Folder {index}
                  </Anchor>
                </li>
              ))}
            </ul>
          </SidenavSubmenu>
        }
      />
      <div
        style={{
          background: 'var(--iui-color-background-5)',
          padding: 16,
          flexGrow: 1,
          display: 'grid',
          placeContent: 'center',
          placeItems: 'center',
        }}
      >
        <Text>{itemsData[activeItem]?.label} page</Text>
        <Text isMuted>
          {activeSubItem >= 0 && \`Contents of Folder \${activeSubItem}\`}
        </Text>
      </div>
    </div>
  );
};
`,locationsMap:{basic:{startLoc:{col:49,line:48},endLoc:{col:1,line:70},startBody:{col:49,line:48},endBody:{col:1,line:70}},"active-item":{startLoc:{col:54,line:72},endLoc:{col:1,line:97},startBody:{col:54,line:72},endBody:{col:1,line:97}},submenu:{startLoc:{col:51,line:99},endLoc:{col:1,line:185},startBody:{col:51,line:99},endBody:{col:1,line:185}}}},docs:{source:{excludeDecorators:!0}}},title:"Core/SideNavigation"};const M0=e=>l(Fr,x(f({},e),{items:[l(xn,{startIcon:l(El,{}),children:"Home"},0),l(xn,{startIcon:l(Dl,{}),children:"Issues"},1),l(xn,{startIcon:l(Rl,{}),disabled:!0,children:"Documents"},2)],secondaryItems:[l(xn,{startIcon:l(nr,{}),children:"Settings"},3)]})),L0=e=>{const[t,a]=ue(0),n=[...Array(3).fill(null)].map((r,i)=>l(xn,{startIcon:l(Je,{}),isActive:t===i,onClick:()=>a(i),children:`App ${i}`},i));return l(Fr,x(f({},e),{items:n,secondaryItems:[l(xn,{startIcon:l(nr,{}),children:"Settings"},3)]}))},A0=e=>{var p;const t=[{label:"Home",icon:l(El,{})},{label:"Issues",icon:l(Dl,{})},{label:"Documents",icon:l(Rl,{})},{label:"Settings",icon:l(nr,{})}],[a,n]=ue(2),[r,i]=ue(!0),[s,c]=ue(0),d=t.map(({label:u,icon:m},b)=>l(xn,{startIcon:m,isActive:a===b,isSubmenuOpen:u==="Documents"&&r,onClick:()=>{u!=="Documents"?(n(b),c(-1),i(!1)):i(g=>!g)},children:u},b));return N("div",{style:{display:"flex",height:"100%"},children:[l(Fr,x(f({},e),{expanderPlacement:"bottom",items:d.slice(0,3),secondaryItems:[d[3]],isSubmenuOpen:r,submenu:N(ls,{children:[l(ss,{actions:l(J,{styleType:"borderless",children:l(nr,{})}),children:l("span",{children:"Documents"})}),l(xe,{variant:"leading",children:"All documents"}),l("ul",{children:[...Array(10).fill(null)].map((u,m)=>l("li",{children:N(Le,{onClick:()=>{n(2),c(m)},children:["Folder ",m]})},m))})]})})),N("div",{style:{background:"var(--iui-color-background-5)",padding:16,flexGrow:1,display:"grid",placeContent:"center",placeItems:"center"},children:[N(xe,{children:[(p=t[a])==null?void 0:p.label," page"]}),l(xe,{isMuted:!0,children:s>=0&&`Contents of Folder ${s}`})]})]})},j0=["Basic","ActiveItem","Submenu"];var H0=Object.freeze(Object.defineProperty({__proto__:null,default:R0,Basic:M0,ActiveItem:L0,Submenu:A0,__namedExportsOrder:j0},Symbol.toStringTag,{value:"Module"})),F0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  SkipToContentLink,
  SkipToContentLinkProps,
  Body,
  Kbd,
  Anchor,
} from '@itwin/itwinui-react';

export default {
  component: SkipToContentLink,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  title: 'Core/SkipToContentLink',
} as Meta<SkipToContentLinkProps>;

export const Basic: Story<SkipToContentLinkProps> = () => {
  return (
    <>
      <SkipToContentLink href='#main-content' />
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <Anchor href='#'>This link will be skipped.</Anchor> <br />
        <em>
          Note that because of constraints with storybook, the link will open a
          new tab.
        </em>
      </Body>
      <div
        style={{
          border: 'solid 1px var(--iui-color-background-border)',
          height: 1000,
          padding: '11px 12px',
        }}
        id='main-content'
      >
        <Body>
          This is the main content. Focus will be directed here from the
          skip-to-content-link component.&nbsp;
          <Anchor href='#'>Tab again to focus on this link.</Anchor>
          &nbsp;
        </Body>
      </div>
    </>
  );
};

export const CustomText: Story<SkipToContentLinkProps> = () => {
  return (
    <>
      <SkipToContentLink href='#main-content'>
        Skip to main content (translated)
      </SkipToContentLink>
      <Body>
        This is not the main content. Press&nbsp;
        <Kbd>tab</Kbd>&nbsp;to see skip-to-content-link component. You might
        need to click on the top of the page or the URL first. Press&nbsp;
        <Kbd>&crarr;</Kbd>
        &nbsp;after focusing on skip-to-content-link to skip to the main content
        below. <Anchor href='#'>This link will be skipped.</Anchor> <br />
        <em>
          Note that because of constraints with storybook, the link will open a
          new tab.
        </em>
      </Body>
      <div
        style={{
          border: 'solid 1px var(--iui-color-background-border)',
          height: 1000,
          padding: '11px 12px',
        }}
        id='main-content'
      >
        <Body>
          This is the main content. Focus will be directed here from the
          skip-to-content-link component.&nbsp;
          <Anchor href='#'>Tab again to focus on this link.</Anchor>
          &nbsp;
        </Body>
      </div>
    </>
  );
};
`,locationsMap:{basic:{startLoc:{col:52,line:24},endLoc:{col:1,line:57},startBody:{col:52,line:24},endBody:{col:1,line:57}},"custom-text":{startLoc:{col:57,line:59},endLoc:{col:1,line:94},startBody:{col:57,line:59},endBody:{col:1,line:94}}}}},component:ei,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}}},title:"Core/SkipToContentLink"};const $0=()=>N(Z,{children:[l(ei,{href:"#main-content"}),N(Hn,{children:["This is not the main content. Press\xA0",l(Fn,{children:"tab"}),"\xA0to see skip-to-content-link component. You might need to click on the top of the page or the URL first. Press\xA0",l(Fn,{children:"\u21B5"}),"\xA0after focusing on skip-to-content-link to skip to the main content below. ",l(Le,{href:"#",children:"This link will be skipped."})," ",l("br",{}),l("em",{children:"Note that because of constraints with storybook, the link will open a new tab."})]}),l("div",{style:{border:"solid 1px var(--iui-color-background-border)",height:1e3,padding:"11px 12px"},id:"main-content",children:N(Hn,{children:["This is the main content. Focus will be directed here from the skip-to-content-link component.\xA0",l(Le,{href:"#",children:"Tab again to focus on this link."}),"\xA0"]})})]}),U0=()=>N(Z,{children:[l(ei,{href:"#main-content",children:"Skip to main content (translated)"}),N(Hn,{children:["This is not the main content. Press\xA0",l(Fn,{children:"tab"}),"\xA0to see skip-to-content-link component. You might need to click on the top of the page or the URL first. Press\xA0",l(Fn,{children:"\u21B5"}),"\xA0after focusing on skip-to-content-link to skip to the main content below. ",l(Le,{href:"#",children:"This link will be skipped."})," ",l("br",{}),l("em",{children:"Note that because of constraints with storybook, the link will open a new tab."})]}),l("div",{style:{border:"solid 1px var(--iui-color-background-border)",height:1e3,padding:"11px 12px"},id:"main-content",children:N(Hn,{children:["This is the main content. Focus will be directed here from the skip-to-content-link component.\xA0",l(Le,{href:"#",children:"Tab again to focus on this link."}),"\xA0"]})})]}),z0=["Basic","CustomText"];var W0=Object.freeze(Object.defineProperty({__proto__:null,default:F0,Basic:$0,CustomText:U0,__namedExportsOrder:z0},Symbol.toStringTag,{value:"Module"})),V0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useMemo, useCallback, useState } from '@storybook/addons';
import { Body, Slider, SliderProps } from '@itwin/itwinui-react';
import SvgSmileyHappy from '@itwin/itwinui-icons-react/cjs/icons/SmileyHappy';
import SvgSmileySad from '@itwin/itwinui-icons-react/cjs/icons/SmileySad';

export default {
  title: 'Input/Slider',
  component: Slider,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  args: {
    thumbMode: 'inhibit-crossing',
    trackDisplayMode: 'auto',
  },
} as Meta<SliderProps>;

export const Basic: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Basic.args = {
  values: [50],
};

export const Range: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Range.args = {
  min: 0,
  max: 100,
  values: [20, 80],
};

export const MultiThumbsAllowCrossing: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

MultiThumbsAllowCrossing.args = {
  thumbProps: (index: number) => {
    const eventsIds = [
      'building-south',
      'building-north',
      'building-west',
      'building-east',
    ];
    const color = 0 == index % 2 ? 'blue' : 'red';
    return {
      style: { backgroundColor: color },
      id: \`\${eventsIds[index]}\`,
    };
  },
  values: [20, 40, 60, 80],
  trackDisplayMode: 'even-segments',
  thumbMode: 'allow-crossing',
};

export const WithCustomThumb: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

WithCustomThumb.args = {
  thumbProps: () => {
    return {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999',
        width: '36px',
        height: '26px',
        borderRadius: '4px',
        transform: 'translateX(-19.2px)',
        top: 0,
      },
      children: (
        <span
          style={{
            pointerEvents: 'none',
            marginBottom: '4px',
          }}
        >
          |||
        </span>
      ),
    };
  },
  values: [50],
  minLabel: <SvgSmileyHappy />,
  maxLabel: <SvgSmileySad />,
  railContainerProps: { style: { margin: '0 8px' } },
};

export const Disabled: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

Disabled.args = {
  min: 0,
  max: 60,
  values: [30],
  disabled: true,
};

export const CustomTooltip: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

CustomTooltip.args = {
  min: 0,
  max: 60,
  values: [20],
  tickLabels: ['0', '20', '40', '60'],
  tooltipProps: (index, val) => {
    return { placement: 'right', content: \`\\$\${val}.00\` };
  },
  setFocus: true,
};

export const CustomTickNoTooltip: Story<SliderProps> = (args) => {
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat('default', {
      month: 'short',
      day: '2-digit',
      timeZone: 'UTC',
    });
  }, []);

  const [currentDate, setCurrentDate] = useState(
    new Date(Date.UTC(2019, 0, 1)),
  );

  const updateDate = useCallback((values: ReadonlyArray<number>) => {
    const newDate = new Date(Date.UTC(2019, 0, values[0]));
    setCurrentDate(newDate);
  }, []);

  return (
    <Slider
      {...args}
      onUpdate={updateDate}
      onChange={updateDate}
      tickLabels={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Body style={{ width: '60px', marginRight: '6px' }}>
            {dateFormatter.format(currentDate)}
          </Body>
        </div>
      }
    />
  );
};

CustomTickNoTooltip.args = {
  style: { width: '50%' },
  min: 1,
  max: 365,
  values: [0],
  tooltipProps: () => {
    return { visible: false };
  },
  minLabel: 'Date',
  maxLabel: '',
};

export const DecimalIncrement: Story<SliderProps> = (args) => {
  return <Slider {...args} />;
};

DecimalIncrement.args = {
  min: 0,
  max: 50,
  step: 2.5,
  values: [25],
};
`,locationsMap:{basic:{startLoc:{col:41,line:26},endLoc:{col:1,line:28},startBody:{col:41,line:26},endBody:{col:1,line:28}},range:{startLoc:{col:41,line:34},endLoc:{col:1,line:36},startBody:{col:41,line:34},endBody:{col:1,line:36}},"multi-thumbs-allow-crossing":{startLoc:{col:60,line:44},endLoc:{col:1,line:46},startBody:{col:60,line:44},endBody:{col:1,line:46}},"with-custom-thumb":{startLoc:{col:51,line:67},endLoc:{col:1,line:69},startBody:{col:51,line:67},endBody:{col:1,line:69}},disabled:{startLoc:{col:44,line:103},endLoc:{col:1,line:105},startBody:{col:44,line:103},endBody:{col:1,line:105}},"custom-tooltip":{startLoc:{col:49,line:114},endLoc:{col:1,line:116},startBody:{col:49,line:114},endBody:{col:1,line:116}},"custom-tick-no-tooltip":{startLoc:{col:55,line:129},endLoc:{col:1,line:168},startBody:{col:55,line:129},endBody:{col:1,line:168}},"decimal-increment":{startLoc:{col:52,line:182},endLoc:{col:1,line:184},startBody:{col:52,line:182},endBody:{col:1,line:184}}}}},title:"Input/Slider",component:tn,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}}},args:{thumbMode:"inhibit-crossing",trackDisplayMode:"auto"}};const su=e=>l(tn,f({},e));su.args={values:[50]};const cu=e=>l(tn,f({},e));cu.args={min:0,max:100,values:[20,80]};const du=e=>l(tn,f({},e));du.args={thumbProps:e=>{const t=["building-south","building-north","building-west","building-east"];return{style:{backgroundColor:e%2==0?"blue":"red"},id:`${t[e]}`}},values:[20,40,60,80],trackDisplayMode:"even-segments",thumbMode:"allow-crossing"};const uu=e=>l(tn,f({},e));uu.args={thumbProps:()=>({style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#999",width:"36px",height:"26px",borderRadius:"4px",transform:"translateX(-19.2px)",top:0},children:l("span",{style:{pointerEvents:"none",marginBottom:"4px"},children:"|||"})}),values:[50],minLabel:l(Tr,{}),maxLabel:l(Cr,{}),railContainerProps:{style:{margin:"0 8px"}}};const mu=e=>l(tn,f({},e));mu.args={min:0,max:60,values:[30],disabled:!0};const pu=e=>l(tn,f({},e));pu.args={min:0,max:60,values:[20],tickLabels:["0","20","40","60"],tooltipProps:(e,t)=>({placement:"right",content:`$${t}.00`}),setFocus:!0};const bu=e=>{const t=le(()=>new Intl.DateTimeFormat("default",{month:"short",day:"2-digit",timeZone:"UTC"}),[]),[a,n]=ue(new Date(Date.UTC(2019,0,1))),r=Lp(i=>{const s=new Date(Date.UTC(2019,0,i[0]));n(s)},[]);return l(tn,x(f({},e),{onUpdate:r,onChange:r,tickLabels:l("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"},children:l(Hn,{style:{width:"60px",marginRight:"6px"},children:t.format(a)})})}))};bu.args={style:{width:"50%"},min:1,max:365,values:[0],tooltipProps:()=>({visible:!1}),minLabel:"Date",maxLabel:""};const gu=e=>l(tn,f({},e));gu.args={min:0,max:50,step:2.5,values:[25]};const G0=["Basic","Range","MultiThumbsAllowCrossing","WithCustomThumb","Disabled","CustomTooltip","CustomTickNoTooltip","DecimalIncrement"];var q0=Object.freeze(Object.defineProperty({__proto__:null,default:V0,Basic:su,Range:cu,MultiThumbsAllowCrossing:du,WithCustomThumb:uu,Disabled:mu,CustomTooltip:pu,CustomTickNoTooltip:bu,DecimalIncrement:gu,__namedExportsOrder:G0},Symbol.toStringTag,{value:"Module"})),K0={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Small, SmallProps } from '@itwin/itwinui-react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Small',
  component: Small,
  args: {
    children: "I'm a Small",
    isMuted: false,
  },
} as Meta<SmallProps>;

const SmallStory: Story<SmallProps> = (args) => {
  const { children, ...rest } = args;
  return <Small {...rest}>{children}</Small>;
};

export const Base: Story<SmallProps> = SmallStory.bind({});
Base.args = {} as SmallProps;

export const Muted: Story<SmallProps> = SmallStory.bind({});
Muted.args = { isMuted: true } as SmallProps;
`,locationsMap:{base:{startLoc:{col:38,line:18},endLoc:{col:1,line:21},startBody:{col:38,line:18},endBody:{col:1,line:21}},muted:{startLoc:{col:38,line:18},endLoc:{col:1,line:21},startBody:{col:38,line:18},endBody:{col:1,line:21}}}}},title:"Typography/Small",component:Xl,args:{children:"I'm a Small",isMuted:!1}};const fu=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(Xl,x(f({},a),{children:t}))},yu=fu.bind({});yu.args={};const vu=fu.bind({});vu.args={isMuted:!0};const J0=["Base","Muted"];var Y0=Object.freeze(Object.defineProperty({__proto__:null,default:K0,Base:yu,Muted:vu,__namedExportsOrder:J0},Symbol.toStringTag,{value:"Module"})),Z0={title:"Buttons/SplitButton",component:zo,argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}},as:{type:{name:"string",required:!1}}},parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { MenuItem, SplitButton, SplitButtonProps } from '@itwin/itwinui-react';

export default {
  title: 'Buttons/SplitButton',
  component: SplitButton,
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    as: { type: { name: 'string', required: false } },
  },
  parameters: {
    docs: {
      source: { excludeDecorators: true },
    },
  },
  decorators: [(Story) => <div style={{ minHeight: 150 }}>{Story()}</div>],
} as Meta<SplitButtonProps>;

export const Basic: Story<SplitButtonProps> = (args) => {
  const { onClick, menuItems, children, ...rest } = args;
  const onMenuItemClick = (index: number, close: () => void) => () => {
    action(\`Item #\${index} clicked!\`)();
    close();
  };

  const buttonMenuItems = (close: () => void) => [
    <MenuItem key={1} onClick={onMenuItemClick(1, close)}>
      Item #1
    </MenuItem>,
    <MenuItem key={2} onClick={onMenuItemClick(2, close)}>
      Item #2
    </MenuItem>,
    <MenuItem key={3} onClick={onMenuItemClick(3, close)}>
      Item #3
    </MenuItem>,
  ];

  return (
    <SplitButton
      onClick={onClick || action('Primary button clicked!')}
      menuItems={menuItems || buttonMenuItems}
      styleType='default'
      {...rest}
    >
      {children}
    </SplitButton>
  );
};

Basic.args = {
  children: 'Default',
  styleType: 'default',
};
`,locationsMap:{basic:{startLoc:{col:46,line:26},endLoc:{col:1,line:55},startBody:{col:46,line:26},endBody:{col:1,line:55}}}},docs:{source:{excludeDecorators:!0}}},decorators:[e=>l("div",{style:{minHeight:150},children:e()})]};const hu=e=>{const c=e,{onClick:t,menuItems:a,children:n}=c,r=L(c,["onClick","menuItems","children"]),i=(d,p)=>()=>{_(`Item #${d} clicked!`)(),p()},s=d=>[l(ie,{onClick:i(1,d),children:"Item #1"},1),l(ie,{onClick:i(2,d),children:"Item #2"},2),l(ie,{onClick:i(3,d),children:"Item #3"},3)];return l(zo,x(f({onClick:t||_("Primary button clicked!"),menuItems:a||s,styleType:"default"},r),{children:n}))};hu.args={children:"Default",styleType:"default"};const X0=["Basic"];var Q0=Object.freeze(Object.defineProperty({__proto__:null,default:Z0,Basic:hu,__namedExportsOrder:X0},Symbol.toStringTag,{value:"Module"})),e1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Subheading, SubheadingProps } from '@itwin/itwinui-react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  args: {
    children: "I'm a Subheading",
    isMuted: false,
  },
} as Meta<SubheadingProps>;

const SubheadingStory: Story<SubheadingProps> = (args) => {
  const { children, ...rest } = args;
  return <Subheading {...rest}>{children}</Subheading>;
};

export const Base: Story<SubheadingProps> = SubheadingStory.bind({});
Base.args = {} as SubheadingProps;

export const Muted: Story<SubheadingProps> = SubheadingStory.bind({});
Muted.args = { isMuted: true } as SubheadingProps;
`,locationsMap:{base:{startLoc:{col:48,line:18},endLoc:{col:1,line:21},startBody:{col:48,line:18},endBody:{col:1,line:21}},muted:{startLoc:{col:48,line:18},endLoc:{col:1,line:21},startBody:{col:48,line:18},endBody:{col:1,line:21}}}}},title:"Typography/Subheading",component:Zl,args:{children:"I'm a Subheading",isMuted:!1}};const Su=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(Zl,x(f({},a),{children:t}))},wu=Su.bind({});wu.args={};const Tu=Su.bind({});Tu.args={isMuted:!0};const n1=["Base","Muted"];var t1=Object.freeze(Object.defineProperty({__proto__:null,default:e1,Base:wu,Muted:Tu,__namedExportsOrder:n1},Symbol.toStringTag,{value:"Module"})),r1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Surface, SurfaceProps, Code } from '@itwin/itwinui-react';

export default {
  component: Surface,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    elevation: {
      options: [0, 1, 2, 3, 4, 5],
    },
  },
  title: 'Core/Surface',
} as Meta<SurfaceProps>;

export const Basic: Story<SurfaceProps> = ({ elevation = 0 }) => {
  const cardStyle = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '11px 12px',
  };
  return (
    <Surface elevation={elevation} style={cardStyle}>
      <p>
        The Surface container allows content to appear elevated through the use
        of a drop shadow. Change the <Code>elevation</Code> property of the
        component to adjust the shadow level.
      </p>
    </Surface>
  );
};

Basic.args = { elevation: 0 };
`,locationsMap:{basic:{startLoc:{col:42,line:22},endLoc:{col:1,line:39},startBody:{col:42,line:22},endBody:{col:1,line:39}}}}},component:cs,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},elevation:{options:[0,1,2,3,4,5]}},title:"Core/Surface"};const Cu=({elevation:e=0})=>l(cs,{elevation:e,style:{height:"100px",display:"flex",justifyContent:"center",alignItems:"center",padding:"11px 12px"},children:N("p",{children:["The Surface container allows content to appear elevated through the use of a drop shadow. Change the ",l(vn,{children:"elevation"})," property of the component to adjust the shadow level."]})});Cu.args={elevation:0};const a1=["Basic"];var o1=Object.freeze(Object.defineProperty({__proto__:null,default:r1,Basic:Cu,__namedExportsOrder:a1},Symbol.toStringTag,{value:"Module"})),i1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React, { useCallback } from 'react';
import {
  actions,
  ActionType,
  CellProps,
  CellRendererProps,
  Column,
  Row,
  TableInstance,
  TableState,
} from 'react-table';
import {
  Checkbox,
  Code,
  InputGroup,
  DropdownMenu,
  MenuItem,
  IconButton,
  Table,
  Leading,
  tableFilters,
  TableFilterValue,
  TableProps,
  Tooltip,
  DefaultCell,
  EditableCell,
  TablePaginator,
  TablePaginatorRendererProps,
  ActionColumn,
  Anchor,
  SelectionColumn,
  ExpanderColumn,
} from '@itwin/itwinui-react';
import { Story, Meta } from '@storybook/react';
import { useMemo, useState } from '@storybook/addons';
import { action } from '@storybook/addon-actions';
import { SvgMore } from '@itwin/itwinui-icons-react';

export default {
  title: 'Core/Table',
  component: Table,
  args: {
    data: [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    emptyTableContent: 'No data.',
    density: 'default',
    emptyFilteredTableContent: 'No results found. Clear or try another filter.',
  },
  argTypes: {
    columns: { control: { disable: true } },
    isSelectable: { control: { disable: true } },
    selectionMode: { control: { disable: true } },
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    id: { control: { disable: true } },
    initialState: { table: { disable: true } },
    stateReducer: { table: { disable: true } },
    useControlledState: { table: { disable: true } },
    defaultColumn: { table: { disable: true } },
    getSubRows: { table: { disable: true } },
    getRowId: { table: { disable: true } },
    manualRowSelectedKey: { table: { disable: true } },
    autoResetSelectedRows: { table: { disable: true } },
    selectSubRows: { table: { disable: true } },
    manualSortBy: { table: { disable: true } },
    defaultCanSort: { table: { disable: true } },
    disableMultiSort: { table: { disable: true } },
    isMultiSortEvent: { table: { disable: true } },
    maxMultiSortColCount: { table: { disable: true } },
    disableSortRemove: { table: { disable: true } },
    disabledMultiRemove: { table: { disable: true } },
    orderByFn: { table: { disable: true } },
    sortTypes: { table: { disable: true } },
    autoResetSortBy: { table: { disable: true } },
    autoResetHiddenColumns: { table: { disable: true } },
    autoResetFilters: { table: { disable: true } },
    filterTypes: { table: { disable: true } },
    defaultCanFilter: { table: { disable: true } },
    manualFilters: { table: { disable: true } },
    paginateExpandedRows: { table: { disable: true } },
    expandSubRows: { table: { disable: true } },
    autoResetExpanded: { table: { disable: true } },
    manualExpandedKey: { table: { disable: true } },
  },
} as Meta<TableProps>;

export const Basic: Story<Partial<TableProps>> = (args) => {
  const onClickHandler = (
    props: CellProps<{ name: string; description: string }>,
  ) => action(props.row.original.name)();

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              const onClick = () => onClickHandler(props);
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      {...args}
    />
  );
};

export const SelectableSingle: Story<Partial<TableProps>> = (args) => {
  const onRowClick = useCallback(
    (event: React.MouseEvent, row: Row) =>
      action(\`Row clicked: \${JSON.stringify(row.original)}\`)(),
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              return (
                <Anchor
                  onClick={(e) => {
                    e.stopPropagation(); // prevent row selection when clicking on link
                    action(props.row.original.name)();
                  }}
                >
                  Click me!
                </Anchor>
              );
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      isSelectable={true}
      onRowClick={onRowClick}
      selectionMode='single'
      {...args}
    />
  );
};

SelectableSingle.args = { isSelectable: true, selectionMode: 'single' };

export const SelectableMulti: Story<Partial<TableProps>> = (args) => {
  const onSelect = useCallback(
    (rows, state) =>
      action(
        \`Selected rows: \${JSON.stringify(rows)}, Table state: \${JSON.stringify(
          state,
        )}\`,
      )(),
    [],
  );

  const onRowClick = useCallback(
    (event: React.MouseEvent, row: Row) =>
      action(\`Row clicked: \${JSON.stringify(row.original)}\`)(),
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              return (
                <Anchor
                  onClick={(e) => {
                    e.stopPropagation(); // prevent row selection when clicking on link
                    action(props.row.original.name)();
                  }}
                >
                  Click me!
                </Anchor>
              );
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      isSelectable={true}
      onSelect={onSelect}
      onRowClick={onRowClick}
      selectionMode='multi'
      {...args}
    />
  );
};

SelectableMulti.args = { isSelectable: true, selectionMode: 'multi' };

export const Sortable: Story<Partial<TableProps>> = (args) => {
  const onClickHandler = (
    props: CellProps<{ name: string; description: string }>,
  ) => action(props.row.original.name)();

  const onSort = useCallback(
    (state) => action(\`Sort changed. Table state: \${JSON.stringify(state)}\`)(),
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description Not Sortable',
            accessor: 'description',
            maxWidth: 200,
            disableSortBy: true,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              const onClick = () => onClickHandler(props);
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name3', description: 'Description3' },
      { name: 'Name2', description: 'Description2' },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      isSortable
      onSort={onSort}
      {...args}
    />
  );
};

Sortable.args = {
  data: [
    { name: 'Name1', description: 'Description1' },
    { name: 'Name3', description: 'Description3' },
    { name: 'Name2', description: 'Description2' },
  ],
  isSortable: true,
};

export const Filters: Story<Partial<TableProps>> = (args) => {
  type TableStoryDataType = {
    index: number;
    name: string;
    description: string;
    ids: number[];
    startDate: Date;
    endDate: string;
  };

  const translatedLabels = useMemo(
    () => ({
      filter: 'Filter',
      clear: 'Clear',
      from: 'From',
      to: 'To',
    }),
    [],
  );

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-us', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    [],
  );

  const formatDate = useCallback(
    (date: Date) => {
      return formatter.format(date);
    },
    [formatter],
  );

  const columns = useMemo(
    (): Column<TableStoryDataType>[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'index',
            Header: '#',
            accessor: 'index',
            width: 80,
            fieldType: 'number',
            Filter: tableFilters.NumberRangeFilter(translatedLabels),
            filter: 'between',
          },
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            fieldType: 'text',
            Filter: tableFilters.TextFilter(translatedLabels),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            fieldType: 'text',
            Filter: tableFilters.TextFilter(translatedLabels),
            maxWidth: 200,
          },
          {
            id: 'ids',
            Header: 'IDs (enter one of the IDs in the filter)',
            accessor: 'ids',
            Cell: (props: CellProps<TableStoryDataType>) => {
              return <>{props.row.original.ids.join(', ')}</>;
            },
            Filter: tableFilters.TextFilter(translatedLabels),
            filter: 'includes',
          },
          {
            id: 'startDate',
            Header: 'Start date',
            accessor: 'startDate',
            Cell: (props: CellProps<TableStoryDataType>) => {
              return <>{formatDate(props.row.original.startDate)}</>;
            },
            Filter: tableFilters.DateRangeFilter({
              translatedLabels,
            }),
            filter: 'betweenDate',
          },
          {
            id: 'endDate',
            Header: 'End date',
            // Converting string to Date for filtering
            accessor: (rowData) => new Date(rowData.endDate),
            Cell: (props: CellProps<TableStoryDataType>) => {
              return <>{formatDate(new Date(props.row.original.endDate))}</>;
            },
            Filter: tableFilters.DateRangeFilter({
              translatedLabels,
            }),
            filter: 'betweenDate',
          },
        ],
      },
    ],
    [formatDate, translatedLabels],
  );

  const data = useMemo(
    () => [
      {
        index: 1,
        name: 'Name1',
        description: 'Description1',
        ids: ['1'],
        startDate: new Date('May 1, 2021'),
        endDate: '2021-05-31T21:00:00.000Z',
      },
      {
        index: 2,
        name: 'Name2',
        description: 'Description2',
        ids: ['2', '3', '4'],
        startDate: new Date('May 2, 2021'),
        endDate: '2021-06-01T21:00:00.000Z',
      },
      {
        index: 3,
        name: 'Name3',
        description: 'Description3',
        ids: ['3', '4'],
        startDate: new Date('May 3, 2021'),
        endDate: '2021-06-02T21:00:00.000Z',
      },
    ],
    [],
  );

  const onFilter = React.useCallback(
    (filters: TableFilterValue<TableStoryDataType>[], state: TableState) => {
      action(
        \`Filter changed. Filters: \${JSON.stringify(
          filters,
        )}, State: \${JSON.stringify(state)}\`,
      )();
    },
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      onFilter={onFilter}
      {...args}
    />
  );
};

Filters.args = {
  data: [
    {
      index: 1,
      name: 'Name1',
      description: 'Description1',
      ids: ['1'],
      startDate: new Date('May 1, 2021'),
      endDate: '2021-05-31T21:00:00.000Z',
    },
    {
      index: 2,
      name: 'Name2',
      description: 'Description2',
      ids: ['2', '3', '4'],
      startDate: new Date('May 2, 2021'),
      endDate: '2021-06-01T21:00:00.000Z',
    },
    {
      index: 3,
      name: 'Name3',
      description: 'Description3',
      ids: ['3', '4'],
      startDate: new Date('May 3, 2021'),
      endDate: '2021-06-02T21:00:00.000Z',
    },
  ],
};

export const Expandable: Story<Partial<TableProps>> = (args) => {
  const onExpand = useCallback(
    (rows, state) =>
      action(
        \`Expanded rows: \${JSON.stringify(rows)}. Table state: \${JSON.stringify(
          state,
        )}\`,
      )(),
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  const expandedSubComponent = useCallback(
    (row: Row) => (
      <div style={{ padding: 16 }}>
        <Leading>Extra information</Leading>
        <pre>
          <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
        </pre>
      </div>
    ),
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      subComponent={expandedSubComponent}
      onExpand={onExpand}
      {...args}
    />
  );
};

Expandable.args = {
  isSelectable: true,
};

export const ExpandableSubrows: Story<Partial<TableProps>> = (args) => {
  const onExpand = useCallback(
    (rows, state) =>
      action(
        \`Expanded rows: \${JSON.stringify(rows)}. Table state: \${JSON.stringify(
          state,
        )}\`,
      )(),
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
          },
        ],
      },
    ],
    [],
  );

  const data = [
    {
      name: 'Row 1',
      description: 'Description 1',
      subRows: [
        { name: 'Row 1.1', description: 'Description 1.1', subRows: [] },
        {
          name: 'Row 1.2',
          description: 'Description 1.2',
          subRows: [
            {
              name: 'Row 1.2.1',
              description: 'Description 1.2.1',
              subRows: [],
            },
            {
              name: 'Row 1.2.2',
              description: 'Description 1.2.2',
              subRows: [],
            },
            {
              name: 'Row 1.2.3',
              description: 'Description 1.2.3',
              subRows: [],
            },
            {
              name: 'Row 1.2.4',
              description: 'Description 1.2.4',
              subRows: [],
            },
          ],
        },
        { name: 'Row 1.3', description: 'Description 1.3', subRows: [] },
        { name: 'Row 1.4', description: 'Description 1.4', subRows: [] },
      ],
    },
    {
      name: 'Row 2',
      description: 'Description 2',
      subRows: [
        { name: 'Row 2.1', description: 'Description 2.1', subRows: [] },
        { name: 'Row 2.2', description: 'Description 2.2', subRows: [] },
        { name: 'Row 2.3', description: 'Description 2.3', subRows: [] },
      ],
    },
    { name: 'Row 3', description: 'Description 3', subRows: [] },
  ];

  return (
    <>
      <div>
        Each data entry should have <Code>subRows</Code> property. If{' '}
        <Code>subRows</Code> has any items, then expander will be shown for that
        row.
      </div>
      <br />
      <Table
        emptyTableContent='No data.'
        isSelectable
        isSortable
        data={data}
        columns={columns}
        {...args}
        onExpand={onExpand}
      />
    </>
  );
};

ExpandableSubrows.args = {
  data: [
    {
      name: 'Row 1',
      description: 'Description 1',
      subRows: [
        { name: 'Row 1.1', description: 'Description 1.1', subRows: [] },
        {
          name: 'Row 1.2',
          description: 'Description 1.2',
          subRows: [
            {
              name: 'Row 1.2.1',
              description: 'Description 1.2.1',
              subRows: [],
            },
            {
              name: 'Row 1.2.2',
              description: 'Description 1.2.2',
              subRows: [],
            },
            {
              name: 'Row 1.2.3',
              description: 'Description 1.2.3',
              subRows: [],
            },
            {
              name: 'Row 1.2.4',
              description: 'Description 1.2.4',
              subRows: [],
            },
          ],
        },
        { name: 'Row 1.3', description: 'Description 1.3', subRows: [] },
        { name: 'Row 1.4', description: 'Description 1.4', subRows: [] },
      ],
    },
    {
      name: 'Row 2',
      description: 'Description 2',
      subRows: [
        { name: 'Row 2.1', description: 'Description 2.1', subRows: [] },
        { name: 'Row 2.2', description: 'Description 2.2', subRows: [] },
        { name: 'Row 2.3', description: 'Description 2.3', subRows: [] },
      ],
    },
    { name: 'Row 3', description: 'Description 3', subRows: [] },
  ],
};

export const LazyLoading: Story<Partial<TableProps>> = (args) => {
  const onClickHandler = (
    props: CellProps<{ name: string; description: string }>,
  ) => action(props.row.original.name)();

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              const onClick = () => onClickHandler(props);
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [],
  );

  const generateData = (start: number, end: number) => {
    return Array(end - start)
      .fill(null)
      .map((_, index) => ({
        name: \`Name\${start + index}\`,
        description: \`Description\${start + index}\`,
      }));
  };

  const [data, setData] = useState(() => generateData(0, 100));

  const [isLoading, setIsLoading] = useState(false);

  const onBottomReached = useCallback(() => {
    action('Bottom reached!')();
    setIsLoading(true);
    // Simulating request
    setTimeout(() => {
      setData(() => [...data, ...generateData(data.length, data.length + 100)]);
      setIsLoading(false);
    }, 1000);
  }, [data]);

  return (
    <Table
      enableVirtualization
      columns={columns}
      emptyTableContent='No data.'
      onBottomReached={onBottomReached}
      isLoading={isLoading}
      isSortable
      {...args}
      style={{ height: 440, maxHeight: '90vh' }}
      data={data}
      // Prevents from resetting filters and sorting when more data is loaded
      autoResetFilters={false}
      autoResetSortBy={false}
    />
  );
};

LazyLoading.args = {
  isSortable: true,
};

LazyLoading.argTypes = {
  isLoading: { control: { disable: true } },
};

export const RowInViewport: Story<Partial<TableProps>> = (args) => {
  const onClickHandler = (
    props: CellProps<{ name: string; description: string }>,
  ) => action(props.row.original.name)();

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              const onClick = () => onClickHandler(props);
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () =>
      Array(100)
        .fill(null)
        .map((_, index) => ({
          name: \`Name\${index}\`,
          description: \`Description\${index}\`,
        })),
    [],
  );

  const onRowInViewport = useCallback((rowData) => {
    action(\`Row in view: \${JSON.stringify(rowData)}\`)();
  }, []);

  return (
    <>
      <div>
        Demo of <Code>IntersectionObserver</Code> hook that triggers{' '}
        <Code>onRowInViewport</Code> callback once the row is visible.
      </div>
      <div>
        Open{' '}
        <Anchor
          onClick={() =>
            (parent.document.querySelector(
              '[id^="tabbutton-actions"]',
            ) as HTMLButtonElement)?.click()
          }
        >
          Actions
        </Anchor>{' '}
        tab to see when callback is called and scroll the table.
      </div>
      <br />
      <Table
        columns={columns}
        emptyTableContent='No data.'
        onRowInViewport={onRowInViewport}
        {...args}
        data={data}
      />
    </>
  );
};

RowInViewport.argTypes = {
  data: { control: { disable: true } },
};

export const DisabledRows: Story<Partial<TableProps>> = (args) => {
  const onRowClick = useCallback(
    (event: React.MouseEvent, row: Row) =>
      action(\`Row clicked: \${JSON.stringify(row.original)}\`)(),
    [],
  );

  const isRowDisabled = useCallback(
    (rowData: { name: string; description: string }) => {
      return rowData.name === 'Name2';
    },
    [],
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
        ],
      },
      {
        id: 'click-me',
        Header: 'Click',
        width: 100,
        // Manually handling disabled state in custom cells
        Cell: (props: CellProps<{ name: string; description: string }>) => (
          <>
            {isRowDisabled(props.row.original) ? (
              <>Click me!</>
            ) : (
              <Anchor onClick={action(props.row.original.name)}>
                Click me!
              </Anchor>
            )}
          </>
        ),
      },
    ],
    [isRowDisabled],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  const expandedSubComponent = useCallback(
    (row: Row) => (
      <div style={{ padding: 16 }}>
        <Leading>Extra information</Leading>
        <pre>
          <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
        </pre>
      </div>
    ),
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      onRowClick={onRowClick}
      subComponent={expandedSubComponent}
      isRowDisabled={isRowDisabled}
      {...args}
    />
  );
};

DisabledRows.args = {
  data: [
    { name: 'Name1', description: 'Description1' },
    { name: 'Name2', description: 'Description2' },
    { name: 'Name3', description: 'Description3' },
  ],
  isSelectable: true,
};

export const Loading: Story<Partial<TableProps>> = (args) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
        ],
      },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={[]}
      isLoading={true}
      emptyTableContent='No data.'
      {...args}
    />
  );
};

Loading.args = {
  data: [],
  isLoading: true,
};

export const NoData: Story<Partial<TableProps>> = (args) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
        ],
      },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={[]}
      isLoading={false}
      emptyTableContent='No data.'
      {...args}
    />
  );
};

NoData.args = {
  data: [],
};

export const ControlledState: Story<Partial<TableProps>> = (args) => {
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  const controlledState = useCallback(
    (state) => {
      return {
        ...state,
        selectedRowIds: { ...selectedRows },
      };
    },
    [selectedRows],
  );

  // When using \`useControlledState\` we are fully responsible for the state part we are modifying.
  // Therefore we want to keep our outside state (\`selectedRows\`) in sync with inside table state (\`state.selectedRowIds\`).
  const tableStateReducer = (
    newState: TableState,
    action: ActionType,
    previousState: TableState,
    instance?: TableInstance,
  ): TableState => {
    switch (action.type) {
      case actions.toggleRowSelected: {
        const newSelectedRows = {
          ...selectedRows,
        };
        if (action.value) {
          newSelectedRows[action.id] = true;
        } else {
          delete newSelectedRows[action.id];
        }
        setSelectedRows(newSelectedRows);
        newState.selectedRowIds = newSelectedRows;
        break;
      }
      case actions.toggleAllRowsSelected: {
        if (!instance?.rowsById) {
          break;
        }
        const newSelectedRows = {} as Record<string, boolean>;
        if (action.value) {
          Object.keys(instance.rowsById).forEach(
            (id) => (newSelectedRows[id] = true),
          );
        }
        setSelectedRows(newSelectedRows);
        newState.selectedRowIds = newSelectedRows;
        break;
      }
      default:
        break;
    }
    return newState;
  };

  return (
    <>
      <InputGroup label='Control selected rows' style={{ marginBottom: 11 }}>
        {data.map((data, index) => (
          <Checkbox
            key={index}
            label={data.name}
            checked={selectedRows[index]}
            onChange={(e) => {
              setSelectedRows((rowIds) => {
                const selectedRowIds = { ...rowIds };
                if (e.target.checked) {
                  selectedRowIds[index] = true;
                } else {
                  delete selectedRowIds[index];
                }
                return selectedRowIds;
              });
            }}
          />
        ))}
      </InputGroup>
      <Table
        columns={columns}
        data={data}
        emptyTableContent='No data.'
        useControlledState={controlledState}
        stateReducer={tableStateReducer}
        isSelectable
        {...args}
      />
    </>
  );
};

ControlledState.args = { isSelectable: true };

export const Full: Story<Partial<TableProps>> = (args) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(0);

  const rowRefMap = React.useRef<Record<number, HTMLDivElement>>({});

  const isRowDisabled = useCallback(
    (rowData: { name: string; description: string }) => {
      return rowData.name === 'Name2';
    },
    [],
  );

  const menuItems = useCallback((close: () => void) => {
    return [
      <MenuItem key={1} onClick={() => close()}>
        Edit
      </MenuItem>,
      <MenuItem key={2} onClick={() => close()}>
        Delete
      </MenuItem>,
    ];
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
            disableToggleVisibility: true,
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
            Filter: tableFilters.TextFilter(),
          },
          {
            ...ActionColumn({ columnManager: true }),
            Cell: () => (
              <DropdownMenu menuItems={menuItems}>
                <IconButton
                  styleType='borderless'
                  onClick={(e) => e.stopPropagation()}
                >
                  <SvgMore />
                </IconButton>
              </DropdownMenu>
            ),
          },
        ],
      },
    ],
    [menuItems],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  const expandedSubComponent = useCallback(
    (row: Row) => (
      <div style={{ padding: 16 }}>
        <Leading>Extra information</Leading>
        <pre>
          <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
        </pre>
      </div>
    ),
    [],
  );

  const rowProps = useCallback(
    (row: Row<{ name: string; description: string }>) => {
      return {
        onMouseEnter: () => {
          action(\`Hovered over \${row.original.name}\`)();
          setHoveredRowIndex(row.index);
        },
        ref: (el: HTMLDivElement | null) => {
          if (el) {
            rowRefMap.current[row.index] = el;
          }
        },
      };
    },
    [],
  );

  return (
    <>
      <Table
        columns={columns}
        data={data}
        emptyTableContent='No data.'
        subComponent={expandedSubComponent}
        isRowDisabled={isRowDisabled}
        rowProps={rowProps}
        isSelectable
        isSortable
        isResizable
        enableColumnReordering
        {...args}
      />
      <Tooltip
        reference={rowRefMap.current[hoveredRowIndex]}
        content={\`Hovered over \${data[hoveredRowIndex].name}.\`}
        placement='bottom'
      />
    </>
  );
};

Full.args = {
  data: [
    { name: 'Name1', description: 'Description1' },
    { name: 'Name2', description: 'Description2' },
    { name: 'Name3', description: 'Description3' },
  ],
  isSelectable: true,
  isSortable: true,
  isResizable: true,
  enableColumnReordering: true,
};

export const Condensed: Story<Partial<TableProps>> = (args) => {
  const onClickHandler = (
    props: CellProps<{ name: string; description: string }>,
  ) => action(props.row.original.name)();

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              const onClick = () => onClickHandler(props);
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      density='condensed'
      {...args}
    />
  );
};
Condensed.args = {
  density: 'condensed',
  data: [
    { name: 'Name1', description: 'Description1' },
    { name: 'Name2', description: 'Description2' },
    { name: 'Name3', description: 'Description3' },
  ],
};

export const Editable: Story<Partial<TableProps>> = (args) => {
  type TableStoryDataType = {
    name: string;
    description: string;
  };

  const [data, setData] = React.useState(() => [
    { name: 'Name1', description: 'Description1' },
    { name: 'Name2', description: 'Description2' },
    { name: 'Name3', description: 'Fetching...' },
  ]);

  const isRowDisabled = useCallback((rowData: TableStoryDataType) => {
    return rowData.name === 'Name2';
  }, []);

  const onCellEdit = useCallback(
    (columnId: string, value: string, rowData: TableStoryDataType) => {
      action('onCellEdit')({ columnId, value, rowData });
      setData((oldData) => {
        const newData = [...oldData];
        const index = oldData.indexOf(rowData);
        const newObject = { ...newData[index] };
        newObject[columnId as keyof TableStoryDataType] = value;
        newData[index] = newObject;
        return newData;
      });
    },
    [],
  );

  const cellRenderer = useCallback(
    (props: CellRendererProps<TableStoryDataType>) => (
      <>
        {!isRowDisabled(props.cellProps.row.original) &&
        props.cellProps.value !== 'Fetching...' ? (
          <EditableCell {...props} onCellEdit={onCellEdit} />
        ) : (
          <DefaultCell {...props} />
        )}
      </>
    ),
    [isRowDisabled, onCellEdit],
  );

  const columns = React.useMemo(
    (): Column<TableStoryDataType>[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            cellRenderer,
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            cellRenderer,
            Filter: tableFilters.TextFilter(),
          },
        ],
      },
    ],
    [cellRenderer],
  );

  return (
    <Table
      emptyTableContent='No data.'
      {...args}
      columns={columns}
      data={data}
      isRowDisabled={isRowDisabled}
      isSortable
      isSelectable
      // These flags prevent filters and sorting from resetting
      autoResetFilters={false}
      autoResetSortBy={false}
    />
  );
};

Editable.argTypes = {
  data: { control: { disable: true } },
};

export const WithPaginator: Story<Partial<TableProps>> = (args) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
            Filter: tableFilters.TextFilter(),
          },
        ],
      },
    ],
    [],
  );

  type TableStoryDataType = {
    name: string;
    description: string;
    subRows: TableStoryDataType[];
  };

  const generateItem = useCallback(
    (index: number, parentRow = '', depth = 0): TableStoryDataType => {
      const keyValue = parentRow ? \`\${parentRow}.\${index}\` : \`\${index}\`;
      return {
        name: \`Name \${keyValue}\`,
        description: \`Description \${keyValue}\`,
        subRows:
          depth < 2
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = useMemo(
    () =>
      Array(5005)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const pageSizeList = useMemo(() => [10, 25, 50], []);
  const paginator = useCallback(
    (props: TablePaginatorRendererProps) => (
      <TablePaginator {...props} pageSizeList={pageSizeList} />
    ),
    [pageSizeList],
  );

  return (
    <>
      <Table
        emptyTableContent='No data.'
        isSelectable
        isSortable
        {...args}
        columns={columns}
        data={data}
        pageSize={25}
        paginatorRenderer={paginator}
        style={{ height: '100%' }}
      />
    </>
  );
};

WithPaginator.args = {
  isSelectable: true,
  isSortable: true,
};

WithPaginator.decorators = [
  (Story) => (
    <div style={{ height: '90vh' }}>
      <Story />
    </div>
  ),
];

WithPaginator.argTypes = {
  data: { control: { disable: true } },
};
WithPaginator.parameters = {
  docs: { source: { excludeDecorators: true } },
};

export const WithManualPaginator: Story<Partial<TableProps>> = (args) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
            Filter: tableFilters.TextFilter(),
          },
        ],
      },
    ],
    [],
  );

  const generateData = (start: number, end: number) => {
    return Array(end - start)
      .fill(null)
      .map((_, index) => ({
        name: \`Name\${start + index}\`,
        description: \`Description\${start + index}\`,
      }));
  };

  const [data, setData] = useState(() => generateData(0, 25));
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pageSizeList = useMemo(() => [10, 25, 50], []);
  const paginator = useCallback(
    (props: TablePaginatorRendererProps) => (
      <TablePaginator
        {...props}
        onPageChange={(page) => {
          setIsLoading(true);
          setData([]);
          setCurrentPage(page);
          // Simulating a request
          setTimeout(() => {
            setIsLoading(false);
            setData(
              generateData(page * props.pageSize, (page + 1) * props.pageSize),
            );
          }, 500);
        }}
        onPageSizeChange={(size) => {
          setData(generateData(currentPage * size, (currentPage + 1) * size));
          props.onPageSizeChange(size);
        }}
        pageSizeList={pageSizeList}
        currentPage={currentPage}
        isLoading={false}
        // Imagining we know the total count of data items
        totalRowsCount={60000}
      />
    ),
    [currentPage, pageSizeList],
  );

  return (
    <>
      <Table
        emptyTableContent='No data.'
        {...args}
        isLoading={isLoading}
        columns={columns}
        data={data}
        pageSize={25}
        paginatorRenderer={paginator}
        style={{ height: '100%' }}
        manualPagination
      />
    </>
  );
};

WithManualPaginator.decorators = [
  (Story) => (
    <div style={{ height: '90vh' }}>
      <Story />
    </div>
  ),
];

WithManualPaginator.argTypes = {
  data: { control: { disable: true } },
};
WithManualPaginator.parameters = {
  docs: { source: { excludeDecorators: true } },
};

export const ResizableColumns: Story<Partial<TableProps>> = (args) => {
  type TableStoryDataType = {
    index: number;
    name: string;
    description: string;
    id: string;
    startDate: Date;
    endDate: Date;
  };

  const columns = useMemo(
    (): Column<TableStoryDataType>[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'index',
            Header: '#',
            accessor: 'index',
            width: 80,
            disableResizing: true,
          },
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            fieldType: 'text',
            minWidth: 100,
          },
          {
            id: 'id',
            Header: 'ID',
            accessor: 'id',
            width: 100,
            disableResizing: true,
          },
          {
            id: 'startDate',
            Header: 'Start date',
            accessor: 'startDate',
            Cell: (props: CellProps<TableStoryDataType>) => {
              return (
                <>{props.row.original.startDate.toLocaleDateString('en-US')}</>
              );
            },
            width: 100,
            disableResizing: true,
          },
          {
            id: 'endDate',
            Header: 'End date',
            Cell: (props: CellProps<TableStoryDataType>) => {
              return (
                <>{props.row.original.endDate.toLocaleDateString('en-US')}</>
              );
            },
            maxWidth: 200,
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        index: 1,
        name: 'Name1',
        description: 'Description1',
        id: '111',
        startDate: new Date('May 1, 2021'),
        endDate: new Date('Jun 1, 2021'),
      },
      {
        index: 2,
        name: 'Name2',
        description: 'Description2',
        id: '222',
        startDate: new Date('May 2, 2021'),
        endDate: new Date('Jun 2, 2021'),
      },
      {
        index: 3,
        name: 'Name3',
        description: 'Description3',
        id: '333',
        startDate: new Date('May 3, 2021'),
        endDate: new Date('Jun 3, 2021'),
      },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      isResizable
      isSortable
      {...args}
    />
  );
};

ResizableColumns.args = {
  isResizable: true,
  data: [
    {
      index: 1,
      name: 'Name1',
      description: 'Description1',
      id: '111',
      startDate: new Date('May 1, 2021'),
      endDate: new Date('Jun 1, 2021'),
    },
    {
      index: 2,
      name: 'Name2',
      description: 'Description2',
      id: '222',
      startDate: new Date('May 2, 2021'),
      endDate: new Date('Jun 2, 2021'),
    },
    {
      index: 3,
      name: 'Name3',
      description: 'Description3',
      id: '333',
      startDate: new Date('May 3, 2021'),
      endDate: new Date('Jun 3, 2021'),
    },
  ],
};

export const ZebraStripedRows: Story<Partial<TableProps>> = (args) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
            Filter: tableFilters.TextFilter(),
          },
        ],
      },
    ],
    [],
  );

  type TableStoryDataType = {
    name: string;
    description: string;
    subRows: TableStoryDataType[];
  };

  const generateItem = useCallback(
    (index: number, parentRow = '', depth = 0): TableStoryDataType => {
      const keyValue = parentRow ? \`\${parentRow}.\${index}\` : \`\${index}\`;
      return {
        name: \`Name \${keyValue}\`,
        description: \`Description \${keyValue}\`,
        subRows:
          depth < 2
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = useMemo(
    () =>
      Array(20)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  return (
    <>
      <Table
        emptyTableContent='No data.'
        isSelectable
        isSortable
        styleType='zebra-rows'
        {...args}
        columns={columns}
        data={data}
        style={{ height: '100%' }}
      />
    </>
  );
};

ZebraStripedRows.args = {
  isSelectable: true,
  isSortable: true,
  styleType: 'zebra-rows',
};

export const HorizontalScroll: Story<Partial<TableProps>> = (args) => {
  const data = useMemo(
    () => [
      {
        product: 'Product 1',
        price: 5,
        quantity: 500,
        rating: '4/5',
        deliveryTime: 5,
      },
      {
        product: 'Product 2',
        price: 12,
        quantity: 1200,
        rating: '1/5',
        deliveryTime: 25,
      },
      {
        product: 'Product 3',
        price: 2.99,
        quantity: 1500,
        rating: '3/5',
        deliveryTime: 7,
      },
      {
        product: 'Product 4',
        price: 20,
        quantity: 50,
        rating: '4/5',
        deliveryTime: 2,
      },
      {
        product: 'Product 5',
        price: 1.99,
        quantity: 700,
        rating: '5/5',
        deliveryTime: 1,
      },
      {
        product: 'Product 6',
        price: 499,
        quantity: 30,
        rating: '5/5',
        deliveryTime: 20,
      },
      {
        product: 'Product 7',
        price: 13.99,
        quantity: 130,
        rating: '1/5',
        deliveryTime: 30,
      },
      {
        product: 'Product 8',
        price: 5.99,
        quantity: 500,
        rating: '4/5',
        deliveryTime: 5,
      },
      {
        product: 'Product 9',
        price: 12,
        quantity: 1200,
        rating: '1/5',
        deliveryTime: 25,
      },
      {
        product: 'Product 10',
        price: 2.99,
        quantity: 200,
        rating: '3/5',
        deliveryTime: 17,
      },
    ],
    [],
  );

  const columns = useMemo(
    (): Column<typeof data[number]>[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'product',
            Header: 'Product',
            accessor: 'product',
            minWidth: 400,
          },
          {
            id: 'price',
            Header: 'Price',
            accessor: 'price',
            width: 400,
            Cell: (props: CellProps<typeof data[0]>) => {
              return <>{\`$\${props.value}\`}</>;
            },
          },
          {
            id: 'quantity',
            Header: 'Quantity',
            accessor: 'quantity',
            width: 400,
          },
          {
            id: 'rating',
            Header: 'Rating',
            accessor: 'rating',
            width: 400,
          },
          {
            id: 'deliveryTime',
            Header: 'Delivery Time',
            accessor: 'deliveryTime',
            width: 400,
            Cell: (props: CellProps<typeof data[0]>) => {
              return <>{\`\${props.value} day(s)\`}</>;
            },
          },
        ],
      },
    ],
    [],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      style={{ height: '100%' }}
      {...args}
    />
  );
};

HorizontalScroll.args = {
  data: [
    {
      product: 'Product 1',
      price: 5,
      quantity: 500,
      rating: '4/5',
      deliveryTime: 5,
    },
    {
      product: 'Product 2',
      price: 12,
      quantity: 1200,
      rating: '1/5',
      deliveryTime: 25,
    },
    {
      product: 'Product 3',
      price: 2.99,
      quantity: 1500,
      rating: '3/5',
      deliveryTime: 7,
    },
    {
      product: 'Product 4',
      price: 20,
      quantity: 50,
      rating: '4/5',
      deliveryTime: 2,
    },
    {
      product: 'Product 5',
      price: 1.99,
      quantity: 700,
      rating: '5/5',
      deliveryTime: 1,
    },
    {
      product: 'Product 6',
      price: 499,
      quantity: 30,
      rating: '5/5',
      deliveryTime: 20,
    },
    {
      product: 'Product 7',
      price: 13.99,
      quantity: 130,
      rating: '1/5',
      deliveryTime: 30,
    },
    {
      product: 'Product 8',
      price: 5.99,
      quantity: 500,
      rating: '4/5',
      deliveryTime: 5,
    },
    {
      product: 'Product 9',
      price: 12,
      quantity: 1200,
      rating: '1/5',
      deliveryTime: 25,
    },
    {
      product: 'Product 10',
      price: 2.99,
      quantity: 200,
      rating: '3/5',
      deliveryTime: 17,
    },
  ],
};

HorizontalScroll.decorators = [
  (Story) => (
    <div
      style={{
        height: '375px',
        maxHeight: '90vh',
        maxWidth: '1000px',
      }}
    >
      <Story />
    </div>
  ),
];

export const Virtualized: Story<Partial<TableProps>> = (args) => {
  const onClickHandler = (
    props: CellProps<{ name: string; description: string }>,
  ) => action(props.row.original.name)();

  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: (props: CellProps<{ name: string; description: string }>) => {
              const onClick = () => onClickHandler(props);
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(() => {
    const size = 100000;
    const arr = new Array(size);
    for (let i = 0; i < size; ++i) {
      arr[i] = {
        name: \`Name\${i}\`,
        description: \`Description\${i}\`,
      };
    }
    return arr;
  }, []);

  return (
    <Table
      enableVirtualization
      columns={columns}
      emptyTableContent='No data.'
      {...args}
      style={{ maxHeight: '90vh' }}
      data={data}
    />
  );
};

Virtualized.argTypes = {
  isLoading: { control: { disable: true } },
  data: { control: { disable: true } },
};

export const VirtualizedSubRows: Story<Partial<TableProps>> = (args) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            Filter: tableFilters.TextFilter(),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
            Filter: tableFilters.TextFilter(),
          },
        ],
      },
    ],
    [],
  );

  type TableStoryDataType = {
    name: string;
    description: string;
    subRows: TableStoryDataType[];
  };

  const generateItem = useCallback(
    (index: number, parentRow = '', depth = 0): TableStoryDataType => {
      const keyValue = parentRow ? \`\${parentRow}.\${index}\` : \`\${index}\`;
      return {
        name: \`Name \${keyValue}\`,
        description: \`Description \${keyValue}\`,
        subRows:
          depth < 2
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = useMemo(
    () =>
      Array(10000)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  return (
    <Table
      enableVirtualization
      columns={columns}
      emptyTableContent='No data.'
      {...args}
      style={{ maxHeight: '90vh' }}
      data={data}
    />
  );
};

VirtualizedSubRows.argTypes = {
  isLoading: { control: { disable: true } },
  data: { control: { disable: true } },
};

export const DraggableColumns: Story<Partial<TableProps>> = (args) => {
  const data = useMemo(
    () => [
      {
        product: 'Product 1',
        price: 5,
        quantity: 500,
        rating: '4/5',
        deliveryTime: 5,
      },
      {
        product: 'Product 2',
        price: 12,
        quantity: 1200,
        rating: '1/5',
        deliveryTime: 25,
      },
      {
        product: 'Product 3',
        price: 2.99,
        quantity: 1500,
        rating: '3/5',
        deliveryTime: 7,
      },
      {
        product: 'Product 4',
        price: 20,
        quantity: 50,
        rating: '4/5',
        deliveryTime: 2,
      },
      {
        product: 'Product 5',
        price: 1.99,
        quantity: 700,
        rating: '5/5',
        deliveryTime: 1,
      },
      {
        product: 'Product 6',
        price: 499,
        quantity: 30,
        rating: '5/5',
        deliveryTime: 20,
      },
      {
        product: 'Product 7',
        price: 13.99,
        quantity: 130,
        rating: '1/5',
        deliveryTime: 30,
      },
      {
        product: 'Product 8',
        price: 5.99,
        quantity: 500,
        rating: '4/5',
        deliveryTime: 5,
      },
      {
        product: 'Product 9',
        price: 12,
        quantity: 1200,
        rating: '1/5',
        deliveryTime: 25,
      },
      {
        product: 'Product 10',
        price: 2.99,
        quantity: 200,
        rating: '3/5',
        deliveryTime: 17,
      },
    ],
    [],
  );

  const columns = useMemo(
    (): Column[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'product',
            Header: 'Product',
            accessor: 'product',
            disableReordering: true,
          },
          {
            id: 'price',
            Header: 'Price',
            accessor: 'price',
            Cell: (props: CellProps<typeof data[0]>) => {
              return <>{\`$\${props.value}\`}</>;
            },
          },
          {
            id: 'quantity',
            Header: 'Quantity',
            accessor: 'quantity',
          },
          {
            id: 'rating',
            Header: 'Rating',
            accessor: 'rating',
          },
          {
            id: 'deliveryTime',
            Header: 'Delivery Time',
            accessor: 'deliveryTime',
            Cell: (props: CellProps<typeof data[0]>) => {
              return <>{\`\${props.value} day(s)\`}</>;
            },
          },
        ],
      },
    ],
    [],
  );

  return (
    <Table
      enableColumnReordering
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      isSelectable
      {...args}
    />
  );
};

DraggableColumns.args = {
  data: [
    {
      product: 'Product 1',
      price: 5,
      quantity: 500,
      rating: '4/5',
      deliveryTime: 5,
    },
    {
      product: 'Product 2',
      price: 12,
      quantity: 1200,
      rating: '1/5',
      deliveryTime: 25,
    },
    {
      product: 'Product 3',
      price: 2.99,
      quantity: 1500,
      rating: '3/5',
      deliveryTime: 7,
    },
    {
      product: 'Product 4',
      price: 20,
      quantity: 50,
      rating: '4/5',
      deliveryTime: 2,
    },
    {
      product: 'Product 5',
      price: 1.99,
      quantity: 700,
      rating: '5/5',
      deliveryTime: 1,
    },
    {
      product: 'Product 6',
      price: 499,
      quantity: 30,
      rating: '5/5',
      deliveryTime: 20,
    },
    {
      product: 'Product 7',
      price: 13.99,
      quantity: 130,
      rating: '1/5',
      deliveryTime: 30,
    },
    {
      product: 'Product 8',
      price: 5.99,
      quantity: 500,
      rating: '4/5',
      deliveryTime: 5,
    },
    {
      product: 'Product 9',
      price: 12,
      quantity: 1200,
      rating: '1/5',
      deliveryTime: 25,
    },
    {
      product: 'Product 10',
      price: 2.99,
      quantity: 200,
      rating: '3/5',
      deliveryTime: 17,
    },
  ],
  enableColumnReordering: true,
  isSelectable: true,
};

export const CustomizedColumns: Story<Partial<TableProps>> = (args) => {
  const onExpand = useCallback(
    (rows, state) =>
      action(
        \`Expanded rows: \${JSON.stringify(rows)}. Table state: \${JSON.stringify(
          state,
        )}\`,
      )(),
    [],
  );

  const data = useMemo(
    () => [
      { name: 'Name1', description: 'Description1' },
      { name: 'Name2', description: 'Description2' },
      { name: 'Name3', description: 'Description3' },
      { name: 'Name4', description: 'Description4' },
    ],
    [],
  );

  const isCheckboxDisabled = useCallback((rowData: typeof data[number]) => {
    return rowData.name === 'Name1';
  }, []);
  const isExpanderDisabled = useCallback((rowData: typeof data[number]) => {
    return rowData.name === 'Name2';
  }, []);
  const isCellDisabled = useCallback((rowData: typeof data[number]) => {
    return rowData.name === 'Name3';
  }, []);
  const isRowDisabled = useCallback((rowData: typeof data[number]) => {
    return rowData.name === 'Name4';
  }, []);

  const subComponent = useCallback(
    (row: Row) => (
      <div style={{ padding: 16 }}>
        <Leading>Extra information</Leading>
        <pre>
          <code>{JSON.stringify({ values: row.values }, null, 2)}</code>
        </pre>
      </div>
    ),
    [],
  );

  const columns = useMemo(
    (): Column<typeof data[number]>[] => [
      {
        Header: 'Table',
        columns: [
          SelectionColumn({ isDisabled: isCheckboxDisabled }),
          ExpanderColumn({ subComponent, isDisabled: isExpanderDisabled }),
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            cellRenderer: (props) => (
              <DefaultCell
                {...props}
                isDisabled={(rowData) =>
                  isCellDisabled(rowData) || isRowDisabled(rowData)
                }
              />
            ),
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            maxWidth: 200,
          },
        ],
      },
    ],
    [
      isCheckboxDisabled,
      subComponent,
      isExpanderDisabled,
      isCellDisabled,
      isRowDisabled,
    ],
  );

  return (
    <Table
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      subComponent={subComponent}
      onExpand={onExpand}
      isSelectable
      isRowDisabled={isRowDisabled}
      rowProps={({ index }) => ({
        onClick: (e) => index === 0 && e.preventDefault(),
      })}
      {...args}
    />
  );
};

CustomizedColumns.args = {
  isSelectable: true,
  data: [
    { name: 'Name1', description: 'Description1' },
    { name: 'Name2', description: 'Description2' },
    { name: 'Name3', description: 'Description3' },
    { name: 'Name4', description: 'Description4' },
  ],
};

export const ColumnManager: Story<Partial<TableProps>> = (args) => {
  type TableStoryDataType = {
    index: number;
    name: string;
    description: string;
    id: string;
    startDate: Date;
    endDate: Date;
  };

  const columns = useMemo(
    (): Column<TableStoryDataType>[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'index',
            Header: '#',
            accessor: 'index',
            disableToggleVisibility: true,
          },
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            fieldType: 'text',
          },
          {
            id: 'id',
            Header: 'ID',
            accessor: 'id',
          },
          {
            id: 'startDate',
            Header: 'Start date',
            accessor: 'startDate',
            Cell: (props: CellProps<TableStoryDataType>) => {
              return (
                <>{props.row.original.startDate.toLocaleDateString('en-US')}</>
              );
            },
          },
          {
            id: 'endDate',
            Header: 'End date',
            accessor: 'endDate',
            Cell: (props: CellProps<TableStoryDataType>) => {
              return (
                <>{props.row.original.endDate.toLocaleDateString('en-US')}</>
              );
            },
          },
          ActionColumn({ columnManager: true }),
        ],
      },
    ],
    [],
  );
  const data = useMemo(
    () => [
      {
        index: 1,
        name: 'Name1',
        description: 'Description1',
        id: '111',
        startDate: new Date('May 1, 2021'),
        endDate: new Date('Jun 1, 2021'),
      },
      {
        index: 2,
        name: 'Name2',
        description: 'Description2',
        id: '222',
        startDate: new Date('May 2, 2021'),
        endDate: new Date('Jun 2, 2021'),
      },
      {
        index: 3,
        name: 'Name3',
        description: 'Description3',
        id: '333',
        startDate: new Date('May 3, 2021'),
        endDate: new Date('Jun 3, 2021'),
      },
      {
        index: 4,
        name: 'Name4',
        description: 'Description4',
        id: '444',
        startDate: new Date('May 4, 2021'),
        endDate: new Date('Jun 4, 2021'),
      },
      {
        index: 5,
        name: 'Name5',
        description: 'Description5',
        id: '555',
        startDate: new Date('May 5, 2021'),
        endDate: new Date('Jun 5, 2021'),
      },
    ],
    [],
  );

  return (
    <Table
      isSelectable
      columns={columns}
      data={data}
      emptyTableContent='No data.'
      {...args}
    />
  );
};

ColumnManager.args = {
  data: [
    {
      index: 1,
      name: 'Name1',
      description: 'Description1',
      id: '111',
      startDate: new Date('May 1, 2021'),
      endDate: new Date('Jun 1, 2021'),
    },
    {
      index: 2,
      name: 'Name2',
      description: 'Description2',
      id: '222',
      startDate: new Date('May 2, 2021'),
      endDate: new Date('Jun 2, 2021'),
    },
    {
      index: 3,
      name: 'Name3',
      description: 'Description3',
      id: '333',
      startDate: new Date('May 3, 2021'),
      endDate: new Date('Jun 3, 2021'),
    },
    {
      index: 4,
      name: 'Name4',
      description: 'Description4',
      id: '444',
      startDate: new Date('May 4, 2021'),
      endDate: new Date('Jun 4, 2021'),
    },
    {
      index: 5,
      name: 'Name5',
      description: 'Description5',
      id: '555',
      startDate: new Date('May 5, 2021'),
      endDate: new Date('Jun 5, 2021'),
    },
  ],
};
`,locationsMap:{basic:{startLoc:{col:49,line:94},endLoc:{col:1,line:147},startBody:{col:49,line:94},endBody:{col:1,line:147}},"selectable-single":{startLoc:{col:60,line:149},endLoc:{col:1,line:215},startBody:{col:60,line:149},endBody:{col:1,line:215}},"selectable-multi":{startLoc:{col:59,line:219},endLoc:{col:1,line:296},startBody:{col:59,line:219},endBody:{col:1,line:296}},sortable:{startLoc:{col:52,line:300},endLoc:{col:1,line:361},startBody:{col:52,line:300},endBody:{col:1,line:361}},filters:{startLoc:{col:51,line:372},endLoc:{col:1,line:529},startBody:{col:51,line:372},endBody:{col:1,line:529}},expandable:{startLoc:{col:54,line:560},endLoc:{col:1,line:624},startBody:{col:54,line:560},endBody:{col:1,line:624}},"expandable-subrows":{startLoc:{col:61,line:630},endLoc:{col:1,line:730},startBody:{col:61,line:630},endBody:{col:1,line:730}},"lazy-loading":{startLoc:{col:55,line:782},endLoc:{col:1,line:858},startBody:{col:55,line:782},endBody:{col:1,line:858}},"row-in-viewport":{startLoc:{col:57,line:868},endLoc:{col:1,line:948},startBody:{col:57,line:868},endBody:{col:1,line:948}},"disabled-rows":{startLoc:{col:56,line:954},endLoc:{col:1,line:1039},startBody:{col:56,line:954},endBody:{col:1,line:1039}},loading:{startLoc:{col:51,line:1050},endLoc:{col:1,line:1082},startBody:{col:51,line:1050},endBody:{col:1,line:1082}},"no-data":{startLoc:{col:50,line:1089},endLoc:{col:1,line:1121},startBody:{col:50,line:1089},endBody:{col:1,line:1121}},"controlled-state":{startLoc:{col:59,line:1127},endLoc:{col:1,line:1245},startBody:{col:59,line:1127},endBody:{col:1,line:1245}},full:{startLoc:{col:48,line:1249},endLoc:{col:1,line:1370},startBody:{col:48,line:1249},endBody:{col:1,line:1370}},condensed:{startLoc:{col:53,line:1384},endLoc:{col:1,line:1438},startBody:{col:53,line:1384},endBody:{col:1,line:1438}},editable:{startLoc:{col:52,line:1448},endLoc:{col:1,line:1532},startBody:{col:52,line:1448},endBody:{col:1,line:1532}},"with-paginator":{startLoc:{col:57,line:1538},endLoc:{col:1,line:1617},startBody:{col:57,line:1538},endBody:{col:1,line:1617}},"with-manual-paginator":{startLoc:{col:63,line:1639},endLoc:{col:1,line:1723},startBody:{col:63,line:1639},endBody:{col:1,line:1723}},"resizable-columns":{startLoc:{col:60,line:1740},endLoc:{col:1,line:1849},startBody:{col:60,line:1740},endBody:{col:1,line:1849}},"zebra-striped-rows":{startLoc:{col:60,line:1881},endLoc:{col:1,line:1951},startBody:{col:60,line:1881},endBody:{col:1,line:1951}},"horizontal-scroll":{startLoc:{col:60,line:1959},endLoc:{col:1,line:2092},startBody:{col:60,line:1959},endBody:{col:1,line:2092}},virtualized:{startLoc:{col:55,line:2183},endLoc:{col:1,line:2240},startBody:{col:55,line:2183},endBody:{col:1,line:2240}},"virtualized-sub-rows":{startLoc:{col:62,line:2247},endLoc:{col:1,line:2313},startBody:{col:62,line:2247},endBody:{col:1,line:2313}},"draggable-columns":{startLoc:{col:60,line:2320},endLoc:{col:1,line:2450},startBody:{col:60,line:2320},endBody:{col:1,line:2450}},"customized-columns":{startLoc:{col:61,line:2529},endLoc:{col:1,line:2628},startBody:{col:61,line:2529},endBody:{col:1,line:2628}},"column-manager":{startLoc:{col:57,line:2640},endLoc:{col:1,line:2758},startBody:{col:57,line:2640},endBody:{col:1,line:2758}}}}},title:"Core/Table",component:ve,args:{data:[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],emptyTableContent:"No data.",density:"default",emptyFilteredTableContent:"No results found. Clear or try another filter."},argTypes:{columns:{control:{disable:!0}},isSelectable:{control:{disable:!0}},selectionMode:{control:{disable:!0}},style:{control:{disable:!0}},className:{control:{disable:!0}},id:{control:{disable:!0}},initialState:{table:{disable:!0}},stateReducer:{table:{disable:!0}},useControlledState:{table:{disable:!0}},defaultColumn:{table:{disable:!0}},getSubRows:{table:{disable:!0}},getRowId:{table:{disable:!0}},manualRowSelectedKey:{table:{disable:!0}},autoResetSelectedRows:{table:{disable:!0}},selectSubRows:{table:{disable:!0}},manualSortBy:{table:{disable:!0}},defaultCanSort:{table:{disable:!0}},disableMultiSort:{table:{disable:!0}},isMultiSortEvent:{table:{disable:!0}},maxMultiSortColCount:{table:{disable:!0}},disableSortRemove:{table:{disable:!0}},disabledMultiRemove:{table:{disable:!0}},orderByFn:{table:{disable:!0}},sortTypes:{table:{disable:!0}},autoResetSortBy:{table:{disable:!0}},autoResetHiddenColumns:{table:{disable:!0}},autoResetFilters:{table:{disable:!0}},filterTypes:{table:{disable:!0}},defaultCanFilter:{table:{disable:!0}},manualFilters:{table:{disable:!0}},paginateExpandedRows:{table:{disable:!0}},expandSubRows:{table:{disable:!0}},autoResetExpanded:{table:{disable:!0}},manualExpandedKey:{table:{disable:!0}}}};const l1=e=>{const t=r=>_(r.row.original.name)(),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200},{id:"click-me",Header:"Click",width:100,Cell:r=>l(Le,{onClick:()=>t(r),children:"Click me!"})}]}],[]),n=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]);return l(ve,f({columns:a,data:n,emptyTableContent:"No data."},e))},Iu=e=>{const t=be.exports.useCallback((r,i)=>_(`Row clicked: ${JSON.stringify(i.original)}`)(),[]),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200},{id:"click-me",Header:"Click",width:100,Cell:r=>l(Le,{onClick:i=>{i.stopPropagation(),_(r.row.original.name)()},children:"Click me!"})}]}],[]),n=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]);return l(ve,f({columns:a,data:n,emptyTableContent:"No data.",isSelectable:!0,onRowClick:t,selectionMode:"single"},e))};Iu.args={isSelectable:!0,selectionMode:"single"};const xu=e=>{const t=be.exports.useCallback((i,s)=>_(`Selected rows: ${JSON.stringify(i)}, Table state: ${JSON.stringify(s)}`)(),[]),a=be.exports.useCallback((i,s)=>_(`Row clicked: ${JSON.stringify(s.original)}`)(),[]),n=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200},{id:"click-me",Header:"Click",width:100,Cell:i=>l(Le,{onClick:s=>{s.stopPropagation(),_(i.row.original.name)()},children:"Click me!"})}]}],[]),r=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]);return l(ve,f({columns:n,data:r,emptyTableContent:"No data.",isSelectable:!0,onSelect:t,onRowClick:a,selectionMode:"multi"},e))};xu.args={isSelectable:!0,selectionMode:"multi"};const ku=e=>{const t=i=>_(i.row.original.name)(),a=be.exports.useCallback(i=>_(`Sort changed. Table state: ${JSON.stringify(i)}`)(),[]),n=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description Not Sortable",accessor:"description",maxWidth:200,disableSortBy:!0},{id:"click-me",Header:"Click",width:100,Cell:i=>l(Le,{onClick:()=>t(i),children:"Click me!"})}]}],[]),r=le(()=>[{name:"Name1",description:"Description1"},{name:"Name3",description:"Description3"},{name:"Name2",description:"Description2"}],[]);return l(ve,f({columns:n,data:r,emptyTableContent:"No data.",isSortable:!0,onSort:a},e))};ku.args={data:[{name:"Name1",description:"Description1"},{name:"Name3",description:"Description3"},{name:"Name2",description:"Description2"}],isSortable:!0};const _u=e=>{const t=le(()=>({filter:"Filter",clear:"Clear",from:"From",to:"To"}),[]),a=le(()=>new Intl.DateTimeFormat("en-us",{month:"short",day:"numeric",year:"numeric"}),[]),n=be.exports.useCallback(c=>a.format(c),[a]),r=le(()=>[{Header:"Table",columns:[{id:"index",Header:"#",accessor:"index",width:80,fieldType:"number",Filter:Ne.NumberRangeFilter(t),filter:"between"},{id:"name",Header:"Name",accessor:"name",fieldType:"text",Filter:Ne.TextFilter(t)},{id:"description",Header:"Description",accessor:"description",fieldType:"text",Filter:Ne.TextFilter(t),maxWidth:200},{id:"ids",Header:"IDs (enter one of the IDs in the filter)",accessor:"ids",Cell:c=>l(Z,{children:c.row.original.ids.join(", ")}),Filter:Ne.TextFilter(t),filter:"includes"},{id:"startDate",Header:"Start date",accessor:"startDate",Cell:c=>l(Z,{children:n(c.row.original.startDate)}),Filter:Ne.DateRangeFilter({translatedLabels:t}),filter:"betweenDate"},{id:"endDate",Header:"End date",accessor:c=>new Date(c.endDate),Cell:c=>l(Z,{children:n(new Date(c.row.original.endDate))}),Filter:Ne.DateRangeFilter({translatedLabels:t}),filter:"betweenDate"}]}],[n,t]),i=le(()=>[{index:1,name:"Name1",description:"Description1",ids:["1"],startDate:new Date("May 1, 2021"),endDate:"2021-05-31T21:00:00.000Z"},{index:2,name:"Name2",description:"Description2",ids:["2","3","4"],startDate:new Date("May 2, 2021"),endDate:"2021-06-01T21:00:00.000Z"},{index:3,name:"Name3",description:"Description3",ids:["3","4"],startDate:new Date("May 3, 2021"),endDate:"2021-06-02T21:00:00.000Z"}],[]),s=o.useCallback((c,d)=>{_(`Filter changed. Filters: ${JSON.stringify(c)}, State: ${JSON.stringify(d)}`)()},[]);return l(ve,f({columns:r,data:i,emptyTableContent:"No data.",onFilter:s},e))};_u.args={data:[{index:1,name:"Name1",description:"Description1",ids:["1"],startDate:new Date("May 1, 2021"),endDate:"2021-05-31T21:00:00.000Z"},{index:2,name:"Name2",description:"Description2",ids:["2","3","4"],startDate:new Date("May 2, 2021"),endDate:"2021-06-01T21:00:00.000Z"},{index:3,name:"Name3",description:"Description3",ids:["3","4"],startDate:new Date("May 3, 2021"),endDate:"2021-06-02T21:00:00.000Z"}]};const Ou=e=>{const t=be.exports.useCallback((i,s)=>_(`Expanded rows: ${JSON.stringify(i)}. Table state: ${JSON.stringify(s)}`)(),[]),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200}]}],[]),n=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]),r=be.exports.useCallback(i=>N("div",{style:{padding:16},children:[l(lt,{children:"Extra information"}),l("pre",{children:l("code",{children:JSON.stringify({values:i.values},null,2)})})]}),[]);return l(ve,f({columns:a,data:n,emptyTableContent:"No data.",subComponent:r,onExpand:t},e))};Ou.args={isSelectable:!0};const Pu=e=>{const t=be.exports.useCallback((r,i)=>_(`Expanded rows: ${JSON.stringify(r)}. Table state: ${JSON.stringify(i)}`)(),[]),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description"}]}],[]);return N(Z,{children:[N("div",{children:["Each data entry should have ",l(vn,{children:"subRows"})," property. If"," ",l(vn,{children:"subRows"})," has any items, then expander will be shown for that row."]}),l("br",{}),l(ve,x(f({emptyTableContent:"No data.",isSelectable:!0,isSortable:!0,data:[{name:"Row 1",description:"Description 1",subRows:[{name:"Row 1.1",description:"Description 1.1",subRows:[]},{name:"Row 1.2",description:"Description 1.2",subRows:[{name:"Row 1.2.1",description:"Description 1.2.1",subRows:[]},{name:"Row 1.2.2",description:"Description 1.2.2",subRows:[]},{name:"Row 1.2.3",description:"Description 1.2.3",subRows:[]},{name:"Row 1.2.4",description:"Description 1.2.4",subRows:[]}]},{name:"Row 1.3",description:"Description 1.3",subRows:[]},{name:"Row 1.4",description:"Description 1.4",subRows:[]}]},{name:"Row 2",description:"Description 2",subRows:[{name:"Row 2.1",description:"Description 2.1",subRows:[]},{name:"Row 2.2",description:"Description 2.2",subRows:[]},{name:"Row 2.3",description:"Description 2.3",subRows:[]}]},{name:"Row 3",description:"Description 3",subRows:[]}],columns:a},e),{onExpand:t}))]})};Pu.args={data:[{name:"Row 1",description:"Description 1",subRows:[{name:"Row 1.1",description:"Description 1.1",subRows:[]},{name:"Row 1.2",description:"Description 1.2",subRows:[{name:"Row 1.2.1",description:"Description 1.2.1",subRows:[]},{name:"Row 1.2.2",description:"Description 1.2.2",subRows:[]},{name:"Row 1.2.3",description:"Description 1.2.3",subRows:[]},{name:"Row 1.2.4",description:"Description 1.2.4",subRows:[]}]},{name:"Row 1.3",description:"Description 1.3",subRows:[]},{name:"Row 1.4",description:"Description 1.4",subRows:[]}]},{name:"Row 2",description:"Description 2",subRows:[{name:"Row 2.1",description:"Description 2.1",subRows:[]},{name:"Row 2.2",description:"Description 2.2",subRows:[]},{name:"Row 2.3",description:"Description 2.3",subRows:[]}]},{name:"Row 3",description:"Description 3",subRows:[]}]};const mi=e=>{const t=p=>_(p.row.original.name)(),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description",maxWidth:200},{id:"click-me",Header:"Click",width:100,Cell:p=>l(Le,{onClick:()=>t(p),children:"Click me!"})}]}],[]),n=(p,u)=>Array(u-p).fill(null).map((m,b)=>({name:`Name${p+b}`,description:`Description${p+b}`})),[r,i]=ue(()=>n(0,100)),[s,c]=ue(!1),d=be.exports.useCallback(()=>{_("Bottom reached!")(),c(!0),setTimeout(()=>{i(()=>[...r,...n(r.length,r.length+100)]),c(!1)},1e3)},[r]);return l(ve,x(f({enableVirtualization:!0,columns:a,emptyTableContent:"No data.",onBottomReached:d,isLoading:s,isSortable:!0},e),{style:{height:440,maxHeight:"90vh"},data:r,autoResetFilters:!1,autoResetSortBy:!1}))};mi.args={isSortable:!0};mi.argTypes={isLoading:{control:{disable:!0}}};const Bu=e=>{const t=i=>_(i.row.original.name)(),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200},{id:"click-me",Header:"Click",width:100,Cell:i=>l(Le,{onClick:()=>t(i),children:"Click me!"})}]}],[]),n=le(()=>Array(100).fill(null).map((i,s)=>({name:`Name${s}`,description:`Description${s}`})),[]),r=be.exports.useCallback(i=>{_(`Row in view: ${JSON.stringify(i)}`)()},[]);return N(Z,{children:[N("div",{children:["Demo of ",l(vn,{children:"IntersectionObserver"})," hook that triggers"," ",l(vn,{children:"onRowInViewport"})," callback once the row is visible."]}),N("div",{children:["Open"," ",l(Le,{onClick:()=>{var i;return(i=parent.document.querySelector('[id^="tabbutton-actions"]'))==null?void 0:i.click()},children:"Actions"})," ","tab to see when callback is called and scroll the table."]}),l("br",{}),l(ve,x(f({columns:a,emptyTableContent:"No data.",onRowInViewport:r},e),{data:n}))]})};Bu.argTypes={data:{control:{disable:!0}}};const Nu=e=>{const t=be.exports.useCallback((s,c)=>_(`Row clicked: ${JSON.stringify(c.original)}`)(),[]),a=be.exports.useCallback(s=>s.name==="Name2",[]),n=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200}]},{id:"click-me",Header:"Click",width:100,Cell:s=>l(Z,{children:a(s.row.original)?l(Z,{children:"Click me!"}):l(Le,{onClick:_(s.row.original.name),children:"Click me!"})})}],[a]),r=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]),i=be.exports.useCallback(s=>N("div",{style:{padding:16},children:[l(lt,{children:"Extra information"}),l("pre",{children:l("code",{children:JSON.stringify({values:s.values},null,2)})})]}),[]);return l(ve,f({columns:n,data:r,emptyTableContent:"No data.",onRowClick:t,subComponent:i,isRowDisabled:a},e))};Nu.args={data:[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],isSelectable:!0};const Eu=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200}]}],[]);return l(ve,f({columns:t,data:[],isLoading:!0,emptyTableContent:"No data."},e))};Eu.args={data:[],isLoading:!0};const Du=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200}]}],[]);return l(ve,f({columns:t,data:[],isLoading:!1,emptyTableContent:"No data."},e))};Du.args={data:[]};const Ru=e=>{const[t,a]=ue({}),n=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description"}]}],[]),r=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]),i=be.exports.useCallback(c=>x(f({},c),{selectedRowIds:f({},t)}),[t]),s=(c,d,p,u)=>{switch(d.type){case fe.exports.actions.toggleRowSelected:{const m=f({},t);d.value?m[d.id]=!0:delete m[d.id],a(m),c.selectedRowIds=m;break}case fe.exports.actions.toggleAllRowsSelected:{if(!(u!=null&&u.rowsById))break;const m={};d.value&&Object.keys(u.rowsById).forEach(b=>m[b]=!0),a(m),c.selectedRowIds=m;break}}return c};return N(Z,{children:[l(cn,{label:"Control selected rows",style:{marginBottom:11},children:r.map((c,d)=>l(Re,{label:c.name,checked:t[d],onChange:p=>{a(u=>{const m=f({},u);return p.target.checked?m[d]=!0:delete m[d],m})}},d))}),l(ve,f({columns:n,data:r,emptyTableContent:"No data.",useControlledState:i,stateReducer:s,isSelectable:!0},e))]})};Ru.args={isSelectable:!0};const Mu=e=>{const[t,a]=ue(0),n=o.useRef({}),r=be.exports.useCallback(u=>u.name==="Name2",[]),i=be.exports.useCallback(u=>[l(ie,{onClick:()=>u(),children:"Edit"},1),l(ie,{onClick:()=>u(),children:"Delete"},2)],[]),s=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter(),disableToggleVisibility:!0},{id:"description",Header:"Description",accessor:"description",maxWidth:200,Filter:Ne.TextFilter()},x(f({},ps({columnManager:!0})),{Cell:()=>l(Me,{menuItems:i,children:l(J,{styleType:"borderless",onClick:u=>u.stopPropagation(),children:l(un,{})})})})]}],[i]),c=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]),d=be.exports.useCallback(u=>N("div",{style:{padding:16},children:[l(lt,{children:"Extra information"}),l("pre",{children:l("code",{children:JSON.stringify({values:u.values},null,2)})})]}),[]),p=be.exports.useCallback(u=>({onMouseEnter:()=>{_(`Hovered over ${u.original.name}`)(),a(u.index)},ref:m=>{m&&(n.current[u.index]=m)}}),[]);return N(Z,{children:[l(ve,f({columns:s,data:c,emptyTableContent:"No data.",subComponent:d,isRowDisabled:r,rowProps:p,isSelectable:!0,isSortable:!0,isResizable:!0,enableColumnReordering:!0},e)),l(Ze,{reference:n.current[t],content:`Hovered over ${c[t].name}.`,placement:"bottom"})]})};Mu.args={data:[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],isSelectable:!0,isSortable:!0,isResizable:!0,enableColumnReordering:!0};const Lu=e=>{const t=r=>_(r.row.original.name)(),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",maxWidth:200},{id:"click-me",Header:"Click",width:100,Cell:r=>l(Le,{onClick:()=>t(r),children:"Click me!"})}]}],[]),n=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}],[]);return l(ve,f({columns:a,data:n,emptyTableContent:"No data.",density:"condensed"},e))};Lu.args={density:"condensed",data:[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"}]};const Au=e=>{const[t,a]=o.useState(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Fetching..."}]),n=be.exports.useCallback(c=>c.name==="Name2",[]),r=be.exports.useCallback((c,d,p)=>{_("onCellEdit")({columnId:c,value:d,rowData:p}),a(u=>{const m=[...u],b=u.indexOf(p),g=f({},m[b]);return g[c]=d,m[b]=g,m})},[]),i=be.exports.useCallback(c=>l(Z,{children:!n(c.cellProps.row.original)&&c.cellProps.value!=="Fetching..."?l(Rf,x(f({},c),{onCellEdit:r})):l(zt,f({},c))}),[n,r]),s=o.useMemo(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",cellRenderer:i,Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description",cellRenderer:i,Filter:Ne.TextFilter()}]}],[i]);return l(ve,x(f({emptyTableContent:"No data."},e),{columns:s,data:t,isRowDisabled:n,isSortable:!0,isSelectable:!0,autoResetFilters:!1,autoResetSortBy:!1}))};Au.argTypes={data:{control:{disable:!0}}};const Kt=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description",maxWidth:200,Filter:Ne.TextFilter()}]}],[]),a=be.exports.useCallback((s,c="",d=0)=>{const p=c?`${c}.${s}`:`${s}`;return{name:`Name ${p}`,description:`Description ${p}`,subRows:d<2?Array(Math.round(s%5)).fill(null).map((u,m)=>a(m,p,d+1)):[]}},[]),n=le(()=>Array(5005).fill(null).map((s,c)=>a(c)),[a]),r=le(()=>[10,25,50],[]),i=be.exports.useCallback(s=>l(Os,x(f({},s),{pageSizeList:r})),[r]);return l(Z,{children:l(ve,x(f({emptyTableContent:"No data.",isSelectable:!0,isSortable:!0},e),{columns:t,data:n,pageSize:25,paginatorRenderer:i,style:{height:"100%"}}))})};Kt.args={isSelectable:!0,isSortable:!0};Kt.decorators=[e=>l("div",{style:{height:"90vh"},children:l(e,{})})];Kt.argTypes={data:{control:{disable:!0}}};Kt.parameters={docs:{source:{excludeDecorators:!0}}};const zr=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description",maxWidth:200,Filter:Ne.TextFilter()}]}],[]),a=(m,b)=>Array(b-m).fill(null).map((g,y)=>({name:`Name${m+y}`,description:`Description${m+y}`})),[n,r]=ue(()=>a(0,25)),[i,s]=ue(!1),[c,d]=ue(0),p=le(()=>[10,25,50],[]),u=be.exports.useCallback(m=>l(Os,x(f({},m),{onPageChange:b=>{s(!0),r([]),d(b),setTimeout(()=>{s(!1),r(a(b*m.pageSize,(b+1)*m.pageSize))},500)},onPageSizeChange:b=>{r(a(c*b,(c+1)*b)),m.onPageSizeChange(b)},pageSizeList:p,currentPage:c,isLoading:!1,totalRowsCount:6e4})),[c,p]);return l(Z,{children:l(ve,x(f({emptyTableContent:"No data."},e),{isLoading:i,columns:t,data:n,pageSize:25,paginatorRenderer:u,style:{height:"100%"},manualPagination:!0}))})};zr.decorators=[e=>l("div",{style:{height:"90vh"},children:l(e,{})})];zr.argTypes={data:{control:{disable:!0}}};zr.parameters={docs:{source:{excludeDecorators:!0}}};const ju=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"index",Header:"#",accessor:"index",width:80,disableResizing:!0},{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",fieldType:"text",minWidth:100},{id:"id",Header:"ID",accessor:"id",width:100,disableResizing:!0},{id:"startDate",Header:"Start date",accessor:"startDate",Cell:n=>l(Z,{children:n.row.original.startDate.toLocaleDateString("en-US")}),width:100,disableResizing:!0},{id:"endDate",Header:"End date",Cell:n=>l(Z,{children:n.row.original.endDate.toLocaleDateString("en-US")}),maxWidth:200}]}],[]),a=le(()=>[{index:1,name:"Name1",description:"Description1",id:"111",startDate:new Date("May 1, 2021"),endDate:new Date("Jun 1, 2021")},{index:2,name:"Name2",description:"Description2",id:"222",startDate:new Date("May 2, 2021"),endDate:new Date("Jun 2, 2021")},{index:3,name:"Name3",description:"Description3",id:"333",startDate:new Date("May 3, 2021"),endDate:new Date("Jun 3, 2021")}],[]);return l(ve,f({columns:t,data:a,emptyTableContent:"No data.",isResizable:!0,isSortable:!0},e))};ju.args={isResizable:!0,data:[{index:1,name:"Name1",description:"Description1",id:"111",startDate:new Date("May 1, 2021"),endDate:new Date("Jun 1, 2021")},{index:2,name:"Name2",description:"Description2",id:"222",startDate:new Date("May 2, 2021"),endDate:new Date("Jun 2, 2021")},{index:3,name:"Name3",description:"Description3",id:"333",startDate:new Date("May 3, 2021"),endDate:new Date("Jun 3, 2021")}]};const Hu=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description",maxWidth:200,Filter:Ne.TextFilter()}]}],[]),a=be.exports.useCallback((r,i="",s=0)=>{const c=i?`${i}.${r}`:`${r}`;return{name:`Name ${c}`,description:`Description ${c}`,subRows:s<2?Array(Math.round(r%5)).fill(null).map((d,p)=>a(p,c,s+1)):[]}},[]),n=le(()=>Array(20).fill(null).map((r,i)=>a(i)),[a]);return l(Z,{children:l(ve,x(f({emptyTableContent:"No data.",isSelectable:!0,isSortable:!0,styleType:"zebra-rows"},e),{columns:t,data:n,style:{height:"100%"}}))})};Hu.args={isSelectable:!0,isSortable:!0,styleType:"zebra-rows"};const pi=e=>{const t=le(()=>[{product:"Product 1",price:5,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 2",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 3",price:2.99,quantity:1500,rating:"3/5",deliveryTime:7},{product:"Product 4",price:20,quantity:50,rating:"4/5",deliveryTime:2},{product:"Product 5",price:1.99,quantity:700,rating:"5/5",deliveryTime:1},{product:"Product 6",price:499,quantity:30,rating:"5/5",deliveryTime:20},{product:"Product 7",price:13.99,quantity:130,rating:"1/5",deliveryTime:30},{product:"Product 8",price:5.99,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 9",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 10",price:2.99,quantity:200,rating:"3/5",deliveryTime:17}],[]),a=le(()=>[{Header:"Table",columns:[{id:"product",Header:"Product",accessor:"product",minWidth:400},{id:"price",Header:"Price",accessor:"price",width:400,Cell:n=>l(Z,{children:`$${n.value}`})},{id:"quantity",Header:"Quantity",accessor:"quantity",width:400},{id:"rating",Header:"Rating",accessor:"rating",width:400},{id:"deliveryTime",Header:"Delivery Time",accessor:"deliveryTime",width:400,Cell:n=>l(Z,{children:`${n.value} day(s)`})}]}],[]);return l(ve,f({columns:a,data:t,emptyTableContent:"No data.",style:{height:"100%"}},e))};pi.args={data:[{product:"Product 1",price:5,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 2",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 3",price:2.99,quantity:1500,rating:"3/5",deliveryTime:7},{product:"Product 4",price:20,quantity:50,rating:"4/5",deliveryTime:2},{product:"Product 5",price:1.99,quantity:700,rating:"5/5",deliveryTime:1},{product:"Product 6",price:499,quantity:30,rating:"5/5",deliveryTime:20},{product:"Product 7",price:13.99,quantity:130,rating:"1/5",deliveryTime:30},{product:"Product 8",price:5.99,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 9",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 10",price:2.99,quantity:200,rating:"3/5",deliveryTime:17}]};pi.decorators=[e=>l("div",{style:{height:"375px",maxHeight:"90vh",maxWidth:"1000px"},children:l(e,{})})];const Fu=e=>{const t=r=>_(r.row.original.name)(),a=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description"},{id:"click-me",Header:"Click",width:100,Cell:r=>l(Le,{onClick:()=>t(r),children:"Click me!"})}]}],[]),n=le(()=>{const i=new Array(1e5);for(let s=0;s<1e5;++s)i[s]={name:`Name${s}`,description:`Description${s}`};return i},[]);return l(ve,x(f({enableVirtualization:!0,columns:a,emptyTableContent:"No data."},e),{style:{maxHeight:"90vh"},data:n}))};Fu.argTypes={isLoading:{control:{disable:!0}},data:{control:{disable:!0}}};const $u=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"name",Header:"Name",accessor:"name",Filter:Ne.TextFilter()},{id:"description",Header:"Description",accessor:"description",maxWidth:200,Filter:Ne.TextFilter()}]}],[]),a=be.exports.useCallback((r,i="",s=0)=>{const c=i?`${i}.${r}`:`${r}`;return{name:`Name ${c}`,description:`Description ${c}`,subRows:s<2?Array(Math.round(r%5)).fill(null).map((d,p)=>a(p,c,s+1)):[]}},[]),n=le(()=>Array(1e4).fill(null).map((r,i)=>a(i)),[a]);return l(ve,x(f({enableVirtualization:!0,columns:t,emptyTableContent:"No data."},e),{style:{maxHeight:"90vh"},data:n}))};$u.argTypes={isLoading:{control:{disable:!0}},data:{control:{disable:!0}}};const Uu=e=>{const t=le(()=>[{product:"Product 1",price:5,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 2",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 3",price:2.99,quantity:1500,rating:"3/5",deliveryTime:7},{product:"Product 4",price:20,quantity:50,rating:"4/5",deliveryTime:2},{product:"Product 5",price:1.99,quantity:700,rating:"5/5",deliveryTime:1},{product:"Product 6",price:499,quantity:30,rating:"5/5",deliveryTime:20},{product:"Product 7",price:13.99,quantity:130,rating:"1/5",deliveryTime:30},{product:"Product 8",price:5.99,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 9",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 10",price:2.99,quantity:200,rating:"3/5",deliveryTime:17}],[]),a=le(()=>[{Header:"Table",columns:[{id:"product",Header:"Product",accessor:"product",disableReordering:!0},{id:"price",Header:"Price",accessor:"price",Cell:n=>l(Z,{children:`$${n.value}`})},{id:"quantity",Header:"Quantity",accessor:"quantity"},{id:"rating",Header:"Rating",accessor:"rating"},{id:"deliveryTime",Header:"Delivery Time",accessor:"deliveryTime",Cell:n=>l(Z,{children:`${n.value} day(s)`})}]}],[]);return l(ve,f({enableColumnReordering:!0,columns:a,data:t,emptyTableContent:"No data.",isSelectable:!0},e))};Uu.args={data:[{product:"Product 1",price:5,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 2",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 3",price:2.99,quantity:1500,rating:"3/5",deliveryTime:7},{product:"Product 4",price:20,quantity:50,rating:"4/5",deliveryTime:2},{product:"Product 5",price:1.99,quantity:700,rating:"5/5",deliveryTime:1},{product:"Product 6",price:499,quantity:30,rating:"5/5",deliveryTime:20},{product:"Product 7",price:13.99,quantity:130,rating:"1/5",deliveryTime:30},{product:"Product 8",price:5.99,quantity:500,rating:"4/5",deliveryTime:5},{product:"Product 9",price:12,quantity:1200,rating:"1/5",deliveryTime:25},{product:"Product 10",price:2.99,quantity:200,rating:"3/5",deliveryTime:17}],enableColumnReordering:!0,isSelectable:!0};const zu=e=>{const t=be.exports.useCallback((p,u)=>_(`Expanded rows: ${JSON.stringify(p)}. Table state: ${JSON.stringify(u)}`)(),[]),a=le(()=>[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"},{name:"Name4",description:"Description4"}],[]),n=be.exports.useCallback(p=>p.name==="Name1",[]),r=be.exports.useCallback(p=>p.name==="Name2",[]),i=be.exports.useCallback(p=>p.name==="Name3",[]),s=be.exports.useCallback(p=>p.name==="Name4",[]),c=be.exports.useCallback(p=>N("div",{style:{padding:16},children:[l(lt,{children:"Extra information"}),l("pre",{children:l("code",{children:JSON.stringify({values:p.values},null,2)})})]}),[]),d=le(()=>[{Header:"Table",columns:[us({isDisabled:n}),ms({subComponent:c,isDisabled:r}),{id:"name",Header:"Name",accessor:"name",cellRenderer:p=>l(zt,x(f({},p),{isDisabled:u=>i(u)||s(u)}))},{id:"description",Header:"Description",accessor:"description",maxWidth:200}]}],[n,c,r,i,s]);return l(ve,f({columns:d,data:a,emptyTableContent:"No data.",subComponent:c,onExpand:t,isSelectable:!0,isRowDisabled:s,rowProps:({index:p})=>({onClick:u=>p===0&&u.preventDefault()})},e))};zu.args={isSelectable:!0,data:[{name:"Name1",description:"Description1"},{name:"Name2",description:"Description2"},{name:"Name3",description:"Description3"},{name:"Name4",description:"Description4"}]};const Wu=e=>{const t=le(()=>[{Header:"Table",columns:[{id:"index",Header:"#",accessor:"index",disableToggleVisibility:!0},{id:"name",Header:"Name",accessor:"name"},{id:"description",Header:"Description",accessor:"description",fieldType:"text"},{id:"id",Header:"ID",accessor:"id"},{id:"startDate",Header:"Start date",accessor:"startDate",Cell:n=>l(Z,{children:n.row.original.startDate.toLocaleDateString("en-US")})},{id:"endDate",Header:"End date",accessor:"endDate",Cell:n=>l(Z,{children:n.row.original.endDate.toLocaleDateString("en-US")})},ps({columnManager:!0})]}],[]),a=le(()=>[{index:1,name:"Name1",description:"Description1",id:"111",startDate:new Date("May 1, 2021"),endDate:new Date("Jun 1, 2021")},{index:2,name:"Name2",description:"Description2",id:"222",startDate:new Date("May 2, 2021"),endDate:new Date("Jun 2, 2021")},{index:3,name:"Name3",description:"Description3",id:"333",startDate:new Date("May 3, 2021"),endDate:new Date("Jun 3, 2021")},{index:4,name:"Name4",description:"Description4",id:"444",startDate:new Date("May 4, 2021"),endDate:new Date("Jun 4, 2021")},{index:5,name:"Name5",description:"Description5",id:"555",startDate:new Date("May 5, 2021"),endDate:new Date("Jun 5, 2021")}],[]);return l(ve,f({isSelectable:!0,columns:t,data:a,emptyTableContent:"No data."},e))};Wu.args={data:[{index:1,name:"Name1",description:"Description1",id:"111",startDate:new Date("May 1, 2021"),endDate:new Date("Jun 1, 2021")},{index:2,name:"Name2",description:"Description2",id:"222",startDate:new Date("May 2, 2021"),endDate:new Date("Jun 2, 2021")},{index:3,name:"Name3",description:"Description3",id:"333",startDate:new Date("May 3, 2021"),endDate:new Date("Jun 3, 2021")},{index:4,name:"Name4",description:"Description4",id:"444",startDate:new Date("May 4, 2021"),endDate:new Date("Jun 4, 2021")},{index:5,name:"Name5",description:"Description5",id:"555",startDate:new Date("May 5, 2021"),endDate:new Date("Jun 5, 2021")}]};const s1=["Basic","SelectableSingle","SelectableMulti","Sortable","Filters","Expandable","ExpandableSubrows","LazyLoading","RowInViewport","DisabledRows","Loading","NoData","ControlledState","Full","Condensed","Editable","WithPaginator","WithManualPaginator","ResizableColumns","ZebraStripedRows","HorizontalScroll","Virtualized","VirtualizedSubRows","DraggableColumns","CustomizedColumns","ColumnManager"];var c1=Object.freeze(Object.defineProperty({__proto__:null,default:i1,Basic:l1,SelectableSingle:Iu,SelectableMulti:xu,Sortable:ku,Filters:_u,Expandable:Ou,ExpandableSubrows:Pu,LazyLoading:mi,RowInViewport:Bu,DisabledRows:Nu,Loading:Eu,NoData:Du,ControlledState:Ru,Full:Mu,Condensed:Lu,Editable:Au,WithPaginator:Kt,WithManualPaginator:zr,ResizableColumns:ju,ZebraStripedRows:Hu,HorizontalScroll:pi,Virtualized:Fu,VirtualizedSubRows:$u,DraggableColumns:Uu,CustomizedColumns:zu,ColumnManager:Wu,__namedExportsOrder:s1},Symbol.toStringTag,{value:"Module"})),d1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgStar from '@itwin/itwinui-icons-react/cjs/icons/Star';
import { Meta, Story } from '@storybook/react/';
import React from 'react';
import {
  VerticalTabs,
  HorizontalTabs,
  HorizontalTabsProps,
  VerticalTabsProps,
  Tab,
} from '@itwin/itwinui-react';
import { Tabs, TabsProps } from '@itwin/itwinui-react/esm/core/Tabs/Tabs';

export default {
  title: 'Core/Tabs',
  component: Tabs,
  subcomponents: { Tab },
  args: {
    focusActivationMode: 'auto',
    color: 'blue',
  },
  argTypes: {
    children: { control: { disable: true } },
    style: { control: { disable: true } },
    orientation: { table: { disable: true } },
  },
} as Meta<TabsProps>;

export const DefaultTabs: Story<Partial<HorizontalTabsProps>> = (args) => {
  const [index, setIndex] = React.useState(0);
  const getContent = () => {
    switch (index) {
      case 0:
        return "Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";
      case 1:
        return 'Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.';
      default:
        return 'Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986.';
    }
  };
  return (
    <HorizontalTabs
      labels={[
        <Tab key={1} label='Item1' />,
        <Tab key={2} label='Item2' />,
        <Tab key={3} label='Item3' />,
      ]}
      {...args}
      onTabSelected={setIndex}
    >
      {getContent()}
    </HorizontalTabs>
  );
};
DefaultTabs.args = {
  type: 'default',
  labels: [
    <Tab key={1} label='Item1' />,
    <Tab key={2} label='Item2' />,
    <Tab key={3} label='Item3' />,
  ],
};

export const BorderlessTabs: Story<Partial<HorizontalTabsProps>> = (args) => {
  const [index, setIndex] = React.useState(0);
  const getContent = () => {
    switch (index) {
      case 0:
        return "Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";
      case 1:
        return 'Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.';
      default:
        return 'Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986.';
    }
  };
  return (
    <HorizontalTabs
      labels={[
        <Tab key={1} label='Item1' />,
        <Tab key={2} label='Item2' />,
        <Tab key={3} label='Item3' />,
      ]}
      type='borderless'
      {...args}
      onTabSelected={setIndex}
    >
      {getContent()}
    </HorizontalTabs>
  );
};
BorderlessTabs.args = {
  labels: [
    <Tab key={1} label='Item1' />,
    <Tab key={2} label='Item2' />,
    <Tab key={3} label='Item3' />,
  ],
  type: 'borderless',
};

export const PillTabs: Story<Partial<HorizontalTabsProps>> = (args) => {
  const [index, setIndex] = React.useState(0);
  const getContent = () => {
    switch (index) {
      case 0:
        return "Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";
      case 1:
        return 'Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.';
      default:
        return 'Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986.';
    }
  };
  return (
    <HorizontalTabs
      labels={Array(3)
        .fill(null)
        .map((_, index) => (
          <Tab key={index} startIcon={<SvgStar />} />
        ))}
      type='pill'
      {...args}
      onTabSelected={setIndex}
    >
      {getContent()}
    </HorizontalTabs>
  );
};
PillTabs.args = {
  labels: Array(3)
    .fill(null)
    .map((_, index) => <Tab key={index} startIcon={<SvgStar />} />),
  type: 'pill',
};

export const SublabelsAndIcons: Story<Partial<HorizontalTabsProps>> = (
  args,
) => {
  const [index, setIndex] = React.useState(0);
  const getContent = () => {
    switch (index) {
      case 0:
        return "Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";
      case 1:
        return 'Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.';
      default:
        return 'Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986.';
    }
  };
  return (
    <HorizontalTabs
      labels={Array(3)
        .fill(null)
        .map((_, index) => (
          <Tab
            key={index}
            label={\`Item\${index}\`}
            sublabel={\`Sublabel \${index}\`}
            startIcon={<SvgStar />}
            disabled={index === 2}
          />
        ))}
      type='borderless'
      {...args}
      onTabSelected={setIndex}
    >
      {getContent()}
    </HorizontalTabs>
  );
};
SublabelsAndIcons.args = {
  labels: Array(3)
    .fill(null)
    .map((_, index) => (
      <Tab
        key={index}
        label={\`Item\${index}\`}
        sublabel={\`Sublabel \${index}\`}
        startIcon={<SvgStar />}
        disabled={index === 2}
      />
    )),
  type: 'borderless',
};

export const Vertical: Story<Partial<VerticalTabsProps>> = (args) => {
  const [index, setIndex] = React.useState(0);
  const getContent = () => {
    switch (index) {
      case 0:
        return "Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";
      case 1:
        return 'Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.';
      default:
        return 'Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986.';
    }
  };
  return (
    <VerticalTabs
      type='borderless'
      labels={Array(3)
        .fill(null)
        .map((_, index) => (
          <Tab
            key={index}
            label={\`Item\${index}\`}
            sublabel={\`Sublabel \${index}\`}
            startIcon={<SvgStar />}
          />
        ))}
      {...args}
      onTabSelected={setIndex}
    >
      {getContent()}
    </VerticalTabs>
  );
};
Vertical.args = {
  labels: Array(3)
    .fill(null)
    .map((_, index) => (
      <Tab
        key={index}
        label={\`Item\${index}\`}
        sublabel={\`Sublabel \${index}\`}
        startIcon={<SvgStar />}
      />
    )),
  type: 'borderless',
};
Vertical.argTypes = { type: { options: ['default', 'borderless'] } };
`,locationsMap:{"default-tabs":{startLoc:{col:64,line:32},endLoc:{col:1,line:57},startBody:{col:64,line:32},endBody:{col:1,line:57}},"borderless-tabs":{startLoc:{col:67,line:67},endLoc:{col:1,line:93},startBody:{col:67,line:67},endBody:{col:1,line:93}},"pill-tabs":{startLoc:{col:61,line:103},endLoc:{col:1,line:129},startBody:{col:61,line:103},endBody:{col:1,line:129}},"sublabels-and-icons":{startLoc:{col:70,line:137},endLoc:{col:1,line:171},startBody:{col:70,line:137},endBody:{col:1,line:171}},vertical:{startLoc:{col:59,line:187},endLoc:{col:1,line:218},startBody:{col:59,line:187},endBody:{col:1,line:218}}}}},title:"Core/Tabs",component:Xo,subcomponents:{Tab:Ee},args:{focusActivationMode:"auto",color:"blue"},argTypes:{children:{control:{disable:!0}},style:{control:{disable:!0}},orientation:{table:{disable:!0}}}};const Vu=e=>{const[t,a]=o.useState(0),n=()=>{switch(t){case 0:return"Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";case 1:return"Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.";default:return"Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986."}};return l(Lr,x(f({labels:[l(Ee,{label:"Item1"},1),l(Ee,{label:"Item2"},2),l(Ee,{label:"Item3"},3)]},e),{onTabSelected:a,children:n()}))};Vu.args={type:"default",labels:[l(Ee,{label:"Item1"},1),l(Ee,{label:"Item2"},2),l(Ee,{label:"Item3"},3)]};const Gu=e=>{const[t,a]=o.useState(0),n=()=>{switch(t){case 0:return"Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";case 1:return"Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.";default:return"Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986."}};return l(Lr,x(f({labels:[l(Ee,{label:"Item1"},1),l(Ee,{label:"Item2"},2),l(Ee,{label:"Item3"},3)],type:"borderless"},e),{onTabSelected:a,children:n()}))};Gu.args={labels:[l(Ee,{label:"Item1"},1),l(Ee,{label:"Item2"},2),l(Ee,{label:"Item3"},3)],type:"borderless"};const qu=e=>{const[t,a]=o.useState(0),n=()=>{switch(t){case 0:return"Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";case 1:return"Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.";default:return"Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986."}};return l(Lr,x(f({labels:Array(3).fill(null).map((r,i)=>l(Ee,{startIcon:l($n,{})},i)),type:"pill"},e),{onTabSelected:a,children:n()}))};qu.args={labels:Array(3).fill(null).map((e,t)=>l(Ee,{startIcon:l($n,{})},t)),type:"pill"};const Ku=e=>{const[t,a]=o.useState(0),n=()=>{switch(t){case 0:return"Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";case 1:return"Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.";default:return"Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986."}};return l(Lr,x(f({labels:Array(3).fill(null).map((r,i)=>l(Ee,{label:`Item${i}`,sublabel:`Sublabel ${i}`,startIcon:l($n,{}),disabled:i===2},i)),type:"borderless"},e),{onTabSelected:a,children:n()}))};Ku.args={labels:Array(3).fill(null).map((e,t)=>l(Ee,{label:`Item${t}`,sublabel:`Sublabel ${t}`,startIcon:l($n,{}),disabled:t===2},t)),type:"borderless"};const bi=e=>{const[t,a]=o.useState(0),n=()=>{switch(t){case 0:return"Bentley Systems, Incorporated, is an American-based software development company that develops, manufactures, licenses, sells and supports computer software and services for the design, construction, and operation of infrastructure. The company's software serves the building, plant, civil, and geospatial markets in the areas of architecture, engineering, construction (AEC) and operations. Their software products are used to design, engineer, build, and operate large constructed assets such as roadways, railways, bridges, buildings, industrial plants, power plants, and utility networks. The company re-invests 20% of their revenues in research and development.";case 1:return"Bentley Systems is headquartered in Exton, Pennsylvania, United States, but has development, sales and other departments in over 50 countries. The company had revenues of $700 million in 2018.";default:return"Keith A. Bentley and Barry J. Bentley founded Bentley Systems in 1984. They introduced the commercial version of PseudoStation in 1985, which allowed users of Intergraphs VAX systems to use low-cost graphics terminals to view and modify the designs on their Intergraph IGDS (Interactive Graphics Design System) installations. Their first product was shown to potential users who were polled as to what they would be willing to pay for it. They averaged the answers, arriving at a price of $7,943. A DOS-based version of MicroStation was introduced in 1986."}};return l(lf,x(f({type:"borderless",labels:Array(3).fill(null).map((r,i)=>l(Ee,{label:`Item${i}`,sublabel:`Sublabel ${i}`,startIcon:l($n,{})},i))},e),{onTabSelected:a,children:n()}))};bi.args={labels:Array(3).fill(null).map((e,t)=>l(Ee,{label:`Item${t}`,sublabel:`Sublabel ${t}`,startIcon:l($n,{})},t)),type:"borderless"};bi.argTypes={type:{options:["default","borderless"]}};const u1=["DefaultTabs","BorderlessTabs","PillTabs","SublabelsAndIcons","Vertical"];var m1=Object.freeze(Object.defineProperty({__proto__:null,default:d1,DefaultTabs:Vu,BorderlessTabs:Gu,PillTabs:qu,SublabelsAndIcons:Ku,Vertical:bi,__namedExportsOrder:u1},Symbol.toStringTag,{value:"Module"})),p1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tag, TagProps } from '@itwin/itwinui-react';

export default {
  component: Tag,
  title: 'Core/Tag',
  argTypes: {
    style: { control: { disable: true } },
    className: { control: { disable: true } },
    title: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  args: {
    variant: 'default',
  },
} as Meta<TagProps>;

export const Default: Story<TagProps> = ({ children, onRemove, ...rest }) => {
  return (
    <Tag onRemove={onRemove} {...rest}>
      {children}
    </Tag>
  );
};

Default.args = {
  children: "I'm a tag",
};

Default.argTypes = {
  onRemove: { action: 'Closed me!' },
};

export const NoClose: Story<TagProps> = ({ children, ...rest }) => {
  return <Tag {...rest}>{children}</Tag>;
};

NoClose.args = {
  children: 'Cannot close me!',
};

NoClose.argTypes = {
  onRemove: { control: { disable: true } },
};
`,locationsMap:{default:{startLoc:{col:40,line:23},endLoc:{col:1,line:29},startBody:{col:40,line:23},endBody:{col:1,line:29}},"no-close":{startLoc:{col:40,line:39},endLoc:{col:1,line:41},startBody:{col:40,line:39},endBody:{col:1,line:41}}}}},component:Ce,title:"Core/Tag",argTypes:{style:{control:{disable:!0}},className:{control:{disable:!0}},title:{control:{disable:!0}},id:{control:{disable:!0}}},args:{variant:"default"}};const gi=n=>{var r=n,{children:e,onRemove:t}=r,a=L(r,["children","onRemove"]);return l(Ce,x(f({onRemove:t},a),{children:e}))};gi.args={children:"I'm a tag"};gi.argTypes={onRemove:{action:"Closed me!"}};const fi=a=>{var n=a,{children:e}=n,t=L(n,["children"]);return l(Ce,x(f({},t),{children:e}))};fi.args={children:"Cannot close me!"};fi.argTypes={onRemove:{control:{disable:!0}}};const b1=["Default","NoClose"];var g1=Object.freeze(Object.defineProperty({__proto__:null,default:p1,Default:gi,NoClose:fi,__namedExportsOrder:b1},Symbol.toStringTag,{value:"Module"})),f1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Tag, TagContainer, TagContainerProps } from '@itwin/itwinui-react';

export default {
  component: TagContainer,
  title: 'Core/TagContainer',
  argTypes: {
    style: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<TagContainerProps>;

export const BasicTagsContainer: Story<TagContainerProps> = ({ ...rest }) => {
  return (
    <TagContainer {...rest}>
      <Tag variant='basic'>Tag 1</Tag>
      <Tag variant='basic'>Tag 2</Tag>
      <Tag variant='basic'>Tag 3</Tag>
    </TagContainer>
  );
};

export const DefaultTagsContainer: Story<TagContainerProps> = ({ ...rest }) => {
  return (
    <TagContainer {...rest}>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
    </TagContainer>
  );
};

export const ScrollableDefaultTagsContainer: Story<TagContainerProps> = ({
  ...rest
}) => {
  return (
    <TagContainer overflow='scroll' {...rest} style={{ maxWidth: 200 }}>
      <Tag>Tag 1</Tag>
      <Tag>Tag 2</Tag>
      <Tag>Tag 3</Tag>
      <Tag>Tag 4</Tag>
      <Tag>Tag 5</Tag>
      <Tag>Tag 6</Tag>
      <Tag>Tag 7</Tag>
    </TagContainer>
  );
};

ScrollableDefaultTagsContainer.args = {
  overflow: 'scroll',
};

export const TruncatedBasicTagsContainer: Story<TagContainerProps> = ({
  ...rest
}) => {
  return (
    <TagContainer overflow='truncate' {...rest} style={{ maxWidth: 200 }}>
      <Tag variant='basic'>Tag 1</Tag>
      <Tag variant='basic'>Tag 2</Tag>
      <Tag variant='basic'>Tag 3</Tag>
      <Tag variant='basic'>Tag 4</Tag>
      <Tag variant='basic'>Tag 5</Tag>
      <Tag variant='basic'>Tag 6</Tag>
      <Tag variant='basic'>Tag 7</Tag>
    </TagContainer>
  );
};

TruncatedBasicTagsContainer.args = {
  overflow: 'truncate',
};
`,locationsMap:{"basic-tags-container":{startLoc:{col:60,line:20},endLoc:{col:1,line:28},startBody:{col:60,line:20},endBody:{col:1,line:28}},"default-tags-container":{startLoc:{col:62,line:30},endLoc:{col:1,line:38},startBody:{col:62,line:30},endBody:{col:1,line:38}},"scrollable-default-tags-container":{startLoc:{col:72,line:40},endLoc:{col:1,line:54},startBody:{col:72,line:40},endBody:{col:1,line:54}},"truncated-basic-tags-container":{startLoc:{col:69,line:60},endLoc:{col:1,line:74},startBody:{col:69,line:60},endBody:{col:1,line:74}}}}},component:ut,title:"Core/TagContainer",argTypes:{style:{table:{disable:!0}},className:{table:{disable:!0}},id:{control:{disable:!0}},children:{control:{disable:!0}}}};const y1=t=>{var e=L(t,[]);return N(ut,x(f({},e),{children:[l(Ce,{variant:"basic",children:"Tag 1"}),l(Ce,{variant:"basic",children:"Tag 2"}),l(Ce,{variant:"basic",children:"Tag 3"})]}))},v1=t=>{var e=L(t,[]);return N(ut,x(f({},e),{children:[l(Ce,{children:"Tag 1"}),l(Ce,{children:"Tag 2"}),l(Ce,{children:"Tag 3"})]}))},Ju=t=>{var e=L(t,[]);return N(ut,x(f({overflow:"scroll"},e),{style:{maxWidth:200},children:[l(Ce,{children:"Tag 1"}),l(Ce,{children:"Tag 2"}),l(Ce,{children:"Tag 3"}),l(Ce,{children:"Tag 4"}),l(Ce,{children:"Tag 5"}),l(Ce,{children:"Tag 6"}),l(Ce,{children:"Tag 7"})]}))};Ju.args={overflow:"scroll"};const Yu=t=>{var e=L(t,[]);return N(ut,x(f({overflow:"truncate"},e),{style:{maxWidth:200},children:[l(Ce,{variant:"basic",children:"Tag 1"}),l(Ce,{variant:"basic",children:"Tag 2"}),l(Ce,{variant:"basic",children:"Tag 3"}),l(Ce,{variant:"basic",children:"Tag 4"}),l(Ce,{variant:"basic",children:"Tag 5"}),l(Ce,{variant:"basic",children:"Tag 6"}),l(Ce,{variant:"basic",children:"Tag 7"})]}))};Yu.args={overflow:"truncate"};const h1=["BasicTagsContainer","DefaultTagsContainer","ScrollableDefaultTagsContainer","TruncatedBasicTagsContainer"];var S1=Object.freeze(Object.defineProperty({__proto__:null,default:f1,BasicTagsContainer:y1,DefaultTagsContainer:v1,ScrollableDefaultTagsContainer:Ju,TruncatedBasicTagsContainer:Yu,__namedExportsOrder:h1},Symbol.toStringTag,{value:"Module"})),w1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Text, TextProps } from '@itwin/itwinui-react/';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "I'm a Text",
    isMuted: false,
    isSkeleton: false,
    as: 'div',
  },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    title: { control: { disable: true } },
  },
} as Meta<TextProps>;

const TextStory: Story<TextProps> = (args) => {
  const { children, ...rest } = args;
  return <Text {...rest}>{children}</Text>;
};

export const Basic: Story<TextProps> = TextStory.bind({});
Basic.args = {} as TextProps;

export const Polymorphic: Story<TextProps<'h4'>> = ({ children, ...rest }) => {
  return (
    <Text variant='headline' as='h4' {...rest}>
      {children}
    </Text>
  );
};
Polymorphic.args = {
  children: "I'm a headline text rendered as an h4 element!",
  variant: 'headline',
  as: 'h4',
} as TextProps<'h4'>; // need this cast because TS is complaining about \`as\`

export const Skeleton: Story<TextProps> = TextStory.bind({});
Skeleton.args = { isSkeleton: true };
`,locationsMap:{basic:{startLoc:{col:36,line:26},endLoc:{col:1,line:29},startBody:{col:36,line:26},endBody:{col:1,line:29}},polymorphic:{startLoc:{col:51,line:34},endLoc:{col:1,line:40},startBody:{col:51,line:34},endBody:{col:1,line:40}},skeleton:{startLoc:{col:36,line:26},endLoc:{col:1,line:29},startBody:{col:36,line:26},endBody:{col:1,line:29}}}}},title:"Typography/Text",component:xe,args:{children:"I'm a Text",isMuted:!1,isSkeleton:!1,as:"div"},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},title:{control:{disable:!0}}}};const Zu=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(xe,x(f({},a),{children:t}))},Xu=Zu.bind({});Xu.args={};const Qu=a=>{var n=a,{children:e}=n,t=L(n,["children"]);return l(xe,x(f({variant:"headline",as:"h4"},t),{children:e}))};Qu.args={children:"I'm a headline text rendered as an h4 element!",variant:"headline",as:"h4"};const em=Zu.bind({});em.args={isSkeleton:!0};const T1=["Basic","Polymorphic","Skeleton"];var C1=Object.freeze(Object.defineProperty({__proto__:null,default:w1,Basic:Xu,Polymorphic:Qu,Skeleton:em,__namedExportsOrder:T1},Symbol.toStringTag,{value:"Module"})),I1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Textarea, TextareaProps } from '@itwin/itwinui-react';

export default {
  title: 'Input/Textarea',
  component: Textarea,
  args: {
    placeholder: 'This is a textarea',
  },
} as Meta<TextareaProps>;

export const Basic: Story<TextareaProps> = (args) => {
  return <Textarea placeholder={'This is a textarea'} {...args} />;
};

export const Disabled: Story<TextareaProps> = (args) => {
  return (
    <Textarea disabled={true} placeholder='This is a textarea' {...args} />
  );
};

Disabled.args = {
  disabled: true,
};
`,locationsMap:{basic:{startLoc:{col:43,line:17},endLoc:{col:1,line:19},startBody:{col:43,line:17},endBody:{col:1,line:19}},disabled:{startLoc:{col:46,line:21},endLoc:{col:1,line:25},startBody:{col:46,line:21},endBody:{col:1,line:25}}}}},title:"Input/Textarea",component:$t,args:{placeholder:"This is a textarea"}};const x1=e=>l($t,f({placeholder:"This is a textarea"},e)),nm=e=>l($t,f({disabled:!0,placeholder:"This is a textarea"},e));nm.args={disabled:!0};const k1=["Basic","Disabled"];var _1=Object.freeze(Object.defineProperty({__proto__:null,default:I1,Basic:x1,Disabled:nm,__namedExportsOrder:k1},Symbol.toStringTag,{value:"Module"})),O1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  Badge,
  Button,
  getUserColor,
  IconButton,
  MenuItem,
  Tag,
  TagContainer,
  Tile,
  TileProps,
  UserIcon,
} from '@itwin/itwinui-react';
import SvgFolder from '@itwin/itwinui-icons-react/cjs/icons/Folder';
import SvgImodelHollow from '@itwin/itwinui-icons-react/cjs/icons/ImodelHollow';
import SvgInfo from '@itwin/itwinui-icons-react/cjs/icons/Info';
import SvgStar from '@itwin/itwinui-icons-react/cjs/icons/Star';
import SvgTag from '@itwin/itwinui-icons-react/cjs/icons/Tag';

export default {
  component: Tile,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
  args: {
    variant: 'default',
  },
  title: 'Core/Tile',
} as Meta<TileProps>;

export const Basic: Story<TileProps> = (props) => {
  const {
    name,
    description,
    metadata,
    badge,
    thumbnail,
    leftIcon,
    rightIcon,
    moreOptions,
    ...rest
  } = props;
  return (
    <Tile
      name={name}
      description={description}
      metadata={metadata}
      badge={badge}
      thumbnail={thumbnail}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      moreOptions={moreOptions}
      {...rest}
    />
  );
};

Basic.args = {
  name: 'Stadium',
  description: \`National stadium in Singapore. Features landscape details and a metro station. This is the largest sample iModel.\`,
  thumbnail: 'https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png',
  metadata: (
    <>
      <SvgTag />
      <TagContainer>
        <Tag variant='basic'>tag 1</Tag>
        <Tag variant='basic'>tag 2</Tag>
      </TagContainer>
    </>
  ),
  badge: <Badge backgroundColor='hsl(197, 71%, 83%)'>Badge</Badge>,
  moreOptions: [
    <MenuItem key={1} onClick={action('clicked item 1')}>
      Item 1
    </MenuItem>,
    <MenuItem key={2} onClick={action('clicked item 2')}>
      Item 2
    </MenuItem>,
  ],
};
Basic.argTypes = {
  metadata: { control: { disable: true } },
  moreOptions: { control: { disable: true } },
  buttons: { control: { disable: true } },
  leftIcon: { control: { disable: true } },
  rightIcon: { control: { disable: true } },
  badge: { control: { disable: true } },
};

export const AllProps: Story<TileProps> = (props) => {
  const {
    name,
    description,
    metadata,
    badge,
    thumbnail,
    buttons,
    leftIcon,
    rightIcon,
    isSelected = true,
    isNew,
    moreOptions,
    isActionable = true,
    ...rest
  } = props;
  return (
    <Tile
      name={name}
      description={description}
      metadata={metadata}
      badge={badge}
      thumbnail={thumbnail}
      buttons={buttons}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isSelected={isSelected}
      isNew={isNew}
      moreOptions={moreOptions}
      isActionable={isActionable}
      {...rest}
    />
  );
};
AllProps.argTypes = { ...Basic.argTypes };
AllProps.args = {
  ...Basic.args,
  isSelected: true,
  isActionable: true,
  leftIcon: (
    <IconButton styleType='borderless' onClick={action('clicked left icon')}>
      <SvgInfo />
    </IconButton>
  ),
  rightIcon: (
    <IconButton styleType='borderless' onClick={action('clicked right icon')}>
      <SvgStar />
    </IconButton>
  ),
  buttons: [
    <Button key={1} onClick={action('clicked left button')}>
      Manage
    </Button>,
    <Button key={2} onClick={action('clicked right button')}>
      Projects
    </Button>,
  ],
};

export const Actionable: Story<TileProps> = (props) => {
  const {
    name,
    description = 'If you click on this stadium, it is going to be selected.',
    metadata,
    badge,
    thumbnail,
    isNew,
    isActionable = true,
    ...rest
  } = props;
  const [selected, setSelected] = React.useState(false);

  return (
    <Tile
      name={name}
      description={description}
      metadata={metadata}
      badge={badge}
      thumbnail={thumbnail}
      isSelected={selected}
      isNew={isNew}
      isActionable={isActionable}
      {...rest}
      onClick={() => setSelected((prev) => !prev)}
    />
  );
};
Actionable.argTypes = { ...Basic.argTypes };
Actionable.args = {
  ...Basic.args,
  description: 'If you click on this stadium, it is going to be selected.',
  isActionable: true,
  moreOptions: undefined,
};

export const Condensed: Story<TileProps> = (props) => {
  const { name, thumbnail, moreOptions, ...rest } = props;
  return (
    <Tile
      name={name}
      thumbnail={thumbnail}
      moreOptions={moreOptions}
      {...rest}
    />
  );
};
Condensed.argTypes = {
  ...Basic.argTypes,
  thumbnail: { control: { disable: true } },
};
Condensed.args = {
  ...Basic.args,
  name: 'Condensed',
  description: undefined,
  metadata: undefined,
  badge: undefined,
  thumbnail: <SvgImodelHollow />,
};

export const WithUserIcon: Story<TileProps> = (props) => {
  const { name, description, badge, thumbnail, moreOptions, ...rest } = props;
  return (
    <Tile
      name={name}
      description={description}
      badge={badge}
      thumbnail={thumbnail}
      moreOptions={moreOptions}
      {...rest}
    />
  );
};
WithUserIcon.argTypes = {
  ...Basic.argTypes,
  thumbnail: { control: { disable: true } },
};
WithUserIcon.args = {
  ...Basic.args,
  name: 'Some User',
  description: 'User description',
  metadata: undefined,
  thumbnail: (
    <UserIcon
      size='x-large'
      status='online'
      abbreviation='TR'
      backgroundColor={getUserColor('Terry Rivers')}
      image={
        <img src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png' />
      }
      title='Terry Rivers'
    />
  ),
};

export const Folder: Story<TileProps> = (props) => {
  const {
    name,
    description,
    metadata,
    thumbnail,
    moreOptions,
    variant,
    ...rest
  } = props;
  return (
    <Tile
      name={name}
      description={description}
      metadata={metadata}
      thumbnail={thumbnail}
      moreOptions={moreOptions}
      variant={variant}
      {...rest}
    />
  );
};
Folder.argTypes = {
  ...Basic.argTypes,
  thumbnail: { control: { disable: true } },
};
Folder.args = {
  ...Basic.args,
  variant: 'folder',
  name: 'Folder name',
  description: 'Folder description',
  metadata: <span>Folder metadata</span>,
  badge: undefined,
  thumbnail: <SvgFolder />,
};
`,locationsMap:{basic:{startLoc:{col:39,line:39},endLoc:{col:1,line:64},startBody:{col:39,line:39},endBody:{col:1,line:64}},"all-props":{startLoc:{col:42,line:98},endLoc:{col:1,line:131},startBody:{col:42,line:98},endBody:{col:1,line:131}},actionable:{startLoc:{col:44,line:157},endLoc:{col:1,line:184},startBody:{col:44,line:157},endBody:{col:1,line:184}},condensed:{startLoc:{col:43,line:193},endLoc:{col:1,line:203},startBody:{col:43,line:193},endBody:{col:1,line:203}},"with-user-icon":{startLoc:{col:46,line:217},endLoc:{col:1,line:229},startBody:{col:46,line:217},endBody:{col:1,line:229}},folder:{startLoc:{col:40,line:253},endLoc:{col:1,line:274},startBody:{col:40,line:253},endBody:{col:1,line:274}}}}},component:Vn,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}}},args:{variant:"default"},title:"Core/Tile"};const Qe=e=>{const u=e,{name:t,description:a,metadata:n,badge:r,thumbnail:i,leftIcon:s,rightIcon:c,moreOptions:d}=u,p=L(u,["name","description","metadata","badge","thumbnail","leftIcon","rightIcon","moreOptions"]);return l(Vn,f({name:t,description:a,metadata:n,badge:r,thumbnail:i,leftIcon:s,rightIcon:c,moreOptions:d},p))};Qe.args={name:"Stadium",description:"National stadium in Singapore. Features landscape details and a metro station. This is the largest sample iModel.",thumbnail:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",metadata:N(Z,{children:[l(Ap,{}),N(ut,{children:[l(Ce,{variant:"basic",children:"tag 1"}),l(Ce,{variant:"basic",children:"tag 2"})]})]}),badge:l(Cn,{backgroundColor:"hsl(197, 71%, 83%)",children:"Badge"}),moreOptions:[l(ie,{onClick:_("clicked item 1"),children:"Item 1"},1),l(ie,{onClick:_("clicked item 2"),children:"Item 2"},2)]};Qe.argTypes={metadata:{control:{disable:!0}},moreOptions:{control:{disable:!0}},buttons:{control:{disable:!0}},leftIcon:{control:{disable:!0}},rightIcon:{control:{disable:!0}},badge:{control:{disable:!0}}};const yi=e=>{const y=e,{name:t,description:a,metadata:n,badge:r,thumbnail:i,buttons:s,leftIcon:c,rightIcon:d,isSelected:p=!0,isNew:u,moreOptions:m,isActionable:b=!0}=y,g=L(y,["name","description","metadata","badge","thumbnail","buttons","leftIcon","rightIcon","isSelected","isNew","moreOptions","isActionable"]);return l(Vn,f({name:t,description:a,metadata:n,badge:r,thumbnail:i,buttons:s,leftIcon:c,rightIcon:d,isSelected:p,isNew:u,moreOptions:m,isActionable:b},g))};yi.argTypes=f({},Qe.argTypes);yi.args=x(f({},Qe.args),{isSelected:!0,isActionable:!0,leftIcon:l(J,{styleType:"borderless",onClick:_("clicked left icon"),children:l(jp,{})}),rightIcon:l(J,{styleType:"borderless",onClick:_("clicked right icon"),children:l($n,{})}),buttons:[l(ee,{onClick:_("clicked left button"),children:"Manage"},1),l(ee,{onClick:_("clicked right button"),children:"Projects"},2)]});const vi=e=>{const m=e,{name:t,description:a="If you click on this stadium, it is going to be selected.",metadata:n,badge:r,thumbnail:i,isNew:s,isActionable:c=!0}=m,d=L(m,["name","description","metadata","badge","thumbnail","isNew","isActionable"]),[p,u]=o.useState(!1);return l(Vn,x(f({name:t,description:a,metadata:n,badge:r,thumbnail:i,isSelected:p,isNew:s,isActionable:c},d),{onClick:()=>u(b=>!b)}))};vi.argTypes=f({},Qe.argTypes);vi.args=x(f({},Qe.args),{description:"If you click on this stadium, it is going to be selected.",isActionable:!0,moreOptions:void 0});const hi=e=>{const i=e,{name:t,thumbnail:a,moreOptions:n}=i,r=L(i,["name","thumbnail","moreOptions"]);return l(Vn,f({name:t,thumbnail:a,moreOptions:n},r))};hi.argTypes=x(f({},Qe.argTypes),{thumbnail:{control:{disable:!0}}});hi.args=x(f({},Qe.args),{name:"Condensed",description:void 0,metadata:void 0,badge:void 0,thumbnail:l(Hp,{})});const Si=e=>{const c=e,{name:t,description:a,badge:n,thumbnail:r,moreOptions:i}=c,s=L(c,["name","description","badge","thumbnail","moreOptions"]);return l(Vn,f({name:t,description:a,badge:n,thumbnail:r,moreOptions:i},s))};Si.argTypes=x(f({},Qe.argTypes),{thumbnail:{control:{disable:!0}}});Si.args=x(f({},Qe.args),{name:"Some User",description:"User description",metadata:void 0,thumbnail:l(ke,{size:"x-large",status:"online",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),image:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png"}),title:"Terry Rivers"})});const wi=e=>{const d=e,{name:t,description:a,metadata:n,thumbnail:r,moreOptions:i,variant:s}=d,c=L(d,["name","description","metadata","thumbnail","moreOptions","variant"]);return l(Vn,f({name:t,description:a,metadata:n,thumbnail:r,moreOptions:i,variant:s},c))};wi.argTypes=x(f({},Qe.argTypes),{thumbnail:{control:{disable:!0}}});wi.args=x(f({},Qe.args),{variant:"folder",name:"Folder name",description:"Folder description",metadata:l("span",{children:"Folder metadata"}),badge:void 0,thumbnail:l(Fp,{})});const P1=["Basic","AllProps","Actionable","Condensed","WithUserIcon","Folder"];var B1=Object.freeze(Object.defineProperty({__proto__:null,default:O1,Basic:Qe,AllProps:yi,Actionable:vi,Condensed:hi,WithUserIcon:Si,Folder:wi,__namedExportsOrder:P1},Symbol.toStringTag,{value:"Module"})),N1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  TimePicker,
  TimePickerProps,
  IconButton,
  LabeledInput,
  MeridiemType,
} from '@itwin/itwinui-react';
import SvgCalendar from '@itwin/itwinui-icons-react/cjs/icons/Calendar';

export default {
  title: 'Core/TimePicker',
  component: TimePicker,
  argTypes: {
    onChange: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    date: { control: { type: 'date' } },
  },
} as Meta<TimePickerProps>;

export const Basic: Story<TimePickerProps> = (args) => {
  const {
    date = new Date(2021, 4, 11, 14, 55, 22),
    setFocusHour = true,
    ...rest
  } = args;
  const [opened, setOpened] = React.useState(false);
  const [currentDate, setCurrentDate] = React.useState(new Date(date));
  const onChange = (date: Date) => {
    setCurrentDate(date);
    action(\`New Time value: \${date}\`, { clearOnStoryChange: false })();
  };

  React.useEffect(() => {
    setCurrentDate(new Date(date));
    return () => action('', { clearOnStoryChange: true })();
  }, [date]);
  return (
    <>
      <LabeledInput
        displayStyle='inline'
        value={currentDate.toLocaleTimeString()}
        svgIcon={
          <IconButton
            styleType='borderless'
            onClick={() => setOpened((v) => !v)}
          >
            <SvgCalendar />
          </IconButton>
        }
        style={{ width: 150 }}
        readOnly
        id='time-input'
      />
      {opened && (
        <div>
          <TimePicker
            {...rest}
            date={currentDate}
            onChange={onChange}
            setFocusHour={setFocusHour}
          />
        </div>
      )}
    </>
  );
};

Basic.args = {
  date: new Date(2021, 4, 11, 14, 55, 22),
  setFocusHour: true,
  hourRenderer: (date: Date) =>
    date.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
  minuteRenderer: (date: Date) =>
    date.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
  secondRenderer: (date: Date) =>
    date.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2 }),
  meridiemRenderer: (meridiem: MeridiemType) => meridiem,
};
`,locationsMap:{basic:{startLoc:{col:45,line:29},endLoc:{col:1,line:75},startBody:{col:45,line:29},endBody:{col:1,line:75}}}}},title:"Core/TimePicker",component:Er,argTypes:{onChange:{control:{disable:!0}},className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},date:{control:{type:"date"}}}};const tm=e=>{const p=e,{date:t=new Date(2021,4,11,14,55,22),setFocusHour:a=!0}=p,n=L(p,["date","setFocusHour"]),[r,i]=o.useState(!1),[s,c]=o.useState(new Date(t)),d=u=>{c(u),_(`New Time value: ${u}`,{clearOnStoryChange:!1})()};return o.useEffect(()=>(c(new Date(t)),()=>_("",{clearOnStoryChange:!0})()),[t]),N(Z,{children:[l($e,{displayStyle:"inline",value:s.toLocaleTimeString(),svgIcon:l(J,{styleType:"borderless",onClick:()=>i(u=>!u),children:l($p,{})}),style:{width:150},readOnly:!0,id:"time-input"}),r&&l("div",{children:l(Er,x(f({},n),{date:s,onChange:d,setFocusHour:a}))})]})};tm.args={date:new Date(2021,4,11,14,55,22),setFocusHour:!0,hourRenderer:e=>e.getHours().toLocaleString(void 0,{minimumIntegerDigits:2}),minuteRenderer:e=>e.getMinutes().toLocaleString(void 0,{minimumIntegerDigits:2}),secondRenderer:e=>e.getSeconds().toLocaleString(void 0,{minimumIntegerDigits:2}),meridiemRenderer:e=>e};const E1=["Basic"];var D1=Object.freeze(Object.defineProperty({__proto__:null,default:N1,Basic:tm,__namedExportsOrder:E1},Symbol.toStringTag,{value:"Module"})),R1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Title, TitleProps } from '@itwin/itwinui-react';
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Typography/Title',
  component: Title,
  args: {
    children: "I'm a Title",
    isMuted: false,
  },
} as Meta<TitleProps>;

const TitleStory: Story<TitleProps> = (args) => {
  const { children, ...rest } = args;
  return <Title {...rest}>{children}</Title>;
};
export const Base: Story<TitleProps> = TitleStory.bind({});
Base.args = {} as TitleProps;

export const Muted: Story<TitleProps> = TitleStory.bind({});
Muted.args = { isMuted: true } as TitleProps;
`,locationsMap:{base:{startLoc:{col:38,line:18},endLoc:{col:1,line:21},startBody:{col:38,line:18},endBody:{col:1,line:21}},muted:{startLoc:{col:38,line:18},endLoc:{col:1,line:21},startBody:{col:38,line:18},endBody:{col:1,line:21}}}}},title:"Typography/Title",component:Yl,args:{children:"I'm a Title",isMuted:!1}};const rm=e=>{const n=e,{children:t}=n,a=L(n,["children"]);return l(Yl,x(f({},a),{children:t}))},am=rm.bind({});am.args={};const om=rm.bind({});om.args={isMuted:!0};const M1=["Base","Muted"];var L1=Object.freeze(Object.defineProperty({__proto__:null,default:R1,Base:am,Muted:om,__namedExportsOrder:M1},Symbol.toStringTag,{value:"Module"})),A1={argTypes:{content:{description:"Content of the Toast message. Can be passed in as a string or a jsx element."},type:{options:["persisting","temporary"],control:{type:"select"},description:"Persisting or Temporary. Persisting Toasts will not be closed automatically, and will contain a close button. Temporary Toasts will automatically close after 7 seconds and will not contain a close button."},duration:{description:"Duration of the toast, in milliseconds."},hasCloseButton:{description:"Boolean indicating when the close button is visible."},link:{description:"Object to display a link on the toast. Has two properties, one for the title of the link, and another for the onClick event."},onRemove:{action:"Toast removed!"},placement:{options:["top","top-start","top-end","bottom","bottom-start","bottom-end"],control:{type:"select"},table:{defaultValue:{summary:"top"}},description:"Changes placement of toasts. *-start indicated left side of viewport. *-end - right side of viewport."},order:{options:["descending","ascending"],control:{type:"select"},description:"Order of toasts. Descending places toasts from newest to oldest (new toasts appear on the top of the list). Ascending - from oldest to newest (new toasts appear on the bottom of the list). When placement is set and order not specified, toasts are ordered by placement. Top placement sets order 'descending', bottom placement sets order 'ascending'."}},args:{duration:7e3,type:"temporary",hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}}},parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, toaster, ProgressRadial } from '@itwin/itwinui-react';
import { ToastProps } from '@itwin/itwinui-react/esm/core/Toast/Toast';
import { ToasterSettings } from '@itwin/itwinui-react/esm/core/Toast/Toaster';

export default {
  argTypes: {
    content: {
      description:
        'Content of the Toast message. Can be passed in as a string or a jsx element.',
    },
    type: {
      options: ['persisting', 'temporary'],
      control: {
        type: 'select',
      },
      description:
        'Persisting or Temporary. Persisting Toasts will not be closed automatically, and will contain a close button. Temporary Toasts will automatically close after 7 seconds and will not contain a close button.',
    },
    duration: {
      description: 'Duration of the toast, in milliseconds.',
    },
    hasCloseButton: {
      description: 'Boolean indicating when the close button is visible.',
    },
    link: {
      description:
        'Object to display a link on the toast. Has two properties, one for the title of the link, and another for the onClick event.',
    },
    onRemove: {
      action: 'Toast removed!',
    },
    placement: {
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
      control: {
        type: 'select',
      },
      table: { defaultValue: { summary: 'top' } },
      description:
        'Changes placement of toasts. *-start indicated left side of viewport. *-end - right side of viewport.',
    },
    order: {
      options: ['descending', 'ascending'],
      control: {
        type: 'select',
      },
      description: \`Order of toasts. Descending places toasts from newest to oldest (new toasts appear on the top of the list). Ascending - from oldest to newest (new toasts appear on the bottom of the list). When placement is set and order not specified, toasts are ordered by placement. Top placement sets order 'descending', bottom placement sets order 'ascending'.\`,
    },
  },
  args: {
    duration: 7000,
    type: 'temporary',
    hasCloseButton: true,
    link: {
      title: 'Link',
      onClick: () => {
        alert('Link was clicked!');
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
  title: 'Core/Toasts',
} as Meta<ToastProps & ToasterSettings>;

export const Positive: Story<ToastProps & ToasterSettings> = ({
  content,
  duration,
  hasCloseButton,
  link,
  type,
  onRemove,
  placement,
  order,
}) => {
  const displayPositiveToast = () => {
    toaster.setSettings({
      placement: placement ?? 'top',
      order: order ?? 'descending',
    });
    toaster.positive(content, {
      duration,
      hasCloseButton,
      link,
      type,
      onRemove,
    });
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={displayPositiveToast}>
        Positive
      </Button>
      <Button
        style={{ display: 'block', marginTop: 16 }}
        onClick={() => toaster.closeAll()}
      >
        Close All
      </Button>
    </>
  );
};

Positive.args = {
  content: 'This is a positive toast message',
};

export const Negative: Story<ToastProps & ToasterSettings> = ({
  duration,
  hasCloseButton,
  content,
  type,
  link,
  onRemove,
  placement,
  order,
}) => {
  const displayNegativeToast = () => {
    toaster.setSettings({
      placement: placement ?? 'top',
      order: order ?? 'descending',
    });
    toaster.negative(content, {
      duration,
      hasCloseButton,
      link,
      type,
      onRemove,
    });
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={displayNegativeToast}>
        Negative
      </Button>
      <Button
        style={{ display: 'block', marginTop: 16 }}
        onClick={() => toaster.closeAll()}
      >
        Close All
      </Button>
    </>
  );
};

Negative.args = {
  content: 'This is a negative toast message',
};

export const Informational: Story<ToastProps & ToasterSettings> = ({
  duration,
  hasCloseButton,
  content,
  type,
  link,
  onRemove,
  placement,
  order,
}) => {
  const displayInformationalToast = () => {
    toaster.setSettings({
      placement: placement ?? 'top',
      order: order ?? 'descending',
    });
    toaster.informational(content, {
      duration,
      hasCloseButton,
      link,
      type,
      onRemove,
    });
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={displayInformationalToast}>
        Informational
      </Button>
      <Button
        style={{ display: 'block', marginTop: 16 }}
        onClick={() => toaster.closeAll()}
      >
        Close All
      </Button>
    </>
  );
};

Informational.args = {
  content: 'This is an informational toast message',
};

export const Warning: Story<ToastProps & ToasterSettings> = ({
  content,
  placement,
  order,
  ...options
}) => {
  const displayWarningToast = () => {
    toaster.setSettings({
      placement: placement ?? 'top',
      order: order ?? 'descending',
    });
    toaster.warning(content, { ...options });
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={displayWarningToast}>
        Warning
      </Button>
      <Button
        style={{ display: 'block', marginTop: 16 }}
        onClick={() => toaster.closeAll()}
      >
        Close All
      </Button>
    </>
  );
};

Warning.args = {
  content: 'This is a warning toast message',
};

export const PositionChanged: Story<ToastProps & ToasterSettings> = ({
  content,
  placement,
  order,
  ...options
}) => {
  const displayPositionChangedToast = () => {
    toaster.setSettings({
      placement: placement ?? 'bottom-end',
      order: order,
    });
    toaster.informational(content, { ...options });
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={displayPositionChangedToast}>
        Toast
      </Button>
      <Button
        style={{ display: 'block', marginTop: 16 }}
        onClick={() => toaster.closeAll()}
      >
        Close All
      </Button>
    </>
  );
};

PositionChanged.args = {
  content: 'This is a toast message',
  placement: 'bottom-end',
};

export const AnchorToButton: Story<ToastProps & ToasterSettings> = ({
  content,
  duration,
  hasCloseButton,
  link,
  type,
  onRemove,
  placement,
  order,
}) => {
  const buttonRef = React.useRef(null);
  const displayPositiveToast = () => {
    toaster.setSettings({
      placement: placement ?? 'top',
      order: order ?? 'descending',
    });
    toaster.positive(content, {
      duration,
      hasCloseButton,
      link,
      type,
      onRemove,
      animateOutTo: buttonRef.current,
    });
  };

  return (
    <>
      <Button
        ref={buttonRef}
        styleType='high-visibility'
        onClick={displayPositiveToast}
      >
        Positive
      </Button>
      <Button
        style={{ display: 'block', marginTop: 16 }}
        onClick={() => toaster.closeAll()}
      >
        Close All
      </Button>
    </>
  );
};

AnchorToButton.args = {
  content: 'This is a positive toast message',
};

export const CloseIndividual: Story<ToastProps & ToasterSettings> = ({
  duration,
  hasCloseButton,
  link,
  type,
  onRemove,
  placement,
  order,
}) => {
  const displayProcessToast = () => {
    toaster.setSettings({
      placement: placement ?? 'top',
      order: order ?? 'descending',
    });
    const { close } = toaster.informational(
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}
      >
        <ProgressRadial
          size={'small'}
          indeterminate
          style={{ marginRight: '8px' }}
        />
        Your process is running...
      </div>,
      {
        duration,
        hasCloseButton,
        link,
        type,
        onRemove,
      },
    );

    setTimeout(() => {
      close();
      toaster.positive('Process completed', {
        duration,
        hasCloseButton,
        link,
        type: 'temporary',
        onRemove,
      });
    }, 3000);
  };

  return (
    <>
      <Button styleType='high-visibility' onClick={displayProcessToast}>
        Start process
      </Button>
    </>
  );
};

CloseIndividual.args = {
  type: 'persisting',
};
`,locationsMap:{positive:{startLoc:{col:61,line:79},endLoc:{col:1,line:116},startBody:{col:61,line:79},endBody:{col:1,line:116}},negative:{startLoc:{col:61,line:122},endLoc:{col:1,line:159},startBody:{col:61,line:122},endBody:{col:1,line:159}},informational:{startLoc:{col:66,line:165},endLoc:{col:1,line:202},startBody:{col:66,line:165},endBody:{col:1,line:202}},warning:{startLoc:{col:60,line:208},endLoc:{col:1,line:235},startBody:{col:60,line:208},endBody:{col:1,line:235}},"position-changed":{startLoc:{col:68,line:241},endLoc:{col:1,line:268},startBody:{col:68,line:241},endBody:{col:1,line:268}},"anchor-to-button":{startLoc:{col:67,line:275},endLoc:{col:1,line:318},startBody:{col:67,line:275},endBody:{col:1,line:318}},"close-individual":{startLoc:{col:68,line:324},endLoc:{col:1,line:381},startBody:{col:68,line:324},endBody:{col:1,line:381}}}},controls:{expanded:!0}},title:"Core/Toasts"};const im=({content:e,duration:t,hasCloseButton:a,link:n,type:r,onRemove:i,placement:s,order:c})=>N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:s!=null?s:"top",order:c!=null?c:"descending"}),Pe.positive(e,{duration:t,hasCloseButton:a,link:n,type:r,onRemove:i})},children:"Positive"}),l(ee,{style:{display:"block",marginTop:16},onClick:()=>Pe.closeAll(),children:"Close All"})]});im.args={content:"This is a positive toast message"};const lm=({duration:e,hasCloseButton:t,content:a,type:n,link:r,onRemove:i,placement:s,order:c})=>N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:s!=null?s:"top",order:c!=null?c:"descending"}),Pe.negative(a,{duration:e,hasCloseButton:t,link:r,type:n,onRemove:i})},children:"Negative"}),l(ee,{style:{display:"block",marginTop:16},onClick:()=>Pe.closeAll(),children:"Close All"})]});lm.args={content:"This is a negative toast message"};const sm=({duration:e,hasCloseButton:t,content:a,type:n,link:r,onRemove:i,placement:s,order:c})=>N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:s!=null?s:"top",order:c!=null?c:"descending"}),Pe.informational(a,{duration:e,hasCloseButton:t,link:r,type:n,onRemove:i})},children:"Informational"}),l(ee,{style:{display:"block",marginTop:16},onClick:()=>Pe.closeAll(),children:"Close All"})]});sm.args={content:"This is an informational toast message"};const cm=r=>{var i=r,{content:e,placement:t,order:a}=i,n=L(i,["content","placement","order"]);return N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:t!=null?t:"top",order:a!=null?a:"descending"}),Pe.warning(e,f({},n))},children:"Warning"}),l(ee,{style:{display:"block",marginTop:16},onClick:()=>Pe.closeAll(),children:"Close All"})]})};cm.args={content:"This is a warning toast message"};const dm=r=>{var i=r,{content:e,placement:t,order:a}=i,n=L(i,["content","placement","order"]);return N(Z,{children:[l(ee,{styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:t!=null?t:"bottom-end",order:a}),Pe.informational(e,f({},n))},children:"Toast"}),l(ee,{style:{display:"block",marginTop:16},onClick:()=>Pe.closeAll(),children:"Close All"})]})};dm.args={content:"This is a toast message",placement:"bottom-end"};const um=({content:e,duration:t,hasCloseButton:a,link:n,type:r,onRemove:i,placement:s,order:c})=>{const d=o.useRef(null);return N(Z,{children:[l(ee,{ref:d,styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:s!=null?s:"top",order:c!=null?c:"descending"}),Pe.positive(e,{duration:t,hasCloseButton:a,link:n,type:r,onRemove:i,animateOutTo:d.current})},children:"Positive"}),l(ee,{style:{display:"block",marginTop:16},onClick:()=>Pe.closeAll(),children:"Close All"})]})};um.args={content:"This is a positive toast message"};const mm=({duration:e,hasCloseButton:t,link:a,type:n,onRemove:r,placement:i,order:s})=>l(Z,{children:l(ee,{styleType:"high-visibility",onClick:()=>{Pe.setSettings({placement:i!=null?i:"top",order:s!=null?s:"descending"});const{close:d}=Pe.informational(N("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[l(Ye,{size:"small",indeterminate:!0,style:{marginRight:"8px"}}),"Your process is running..."]}),{duration:e,hasCloseButton:t,link:a,type:n,onRemove:r});setTimeout(()=>{d(),Pe.positive("Process completed",{duration:e,hasCloseButton:t,link:a,type:"temporary",onRemove:r})},3e3)},children:"Start process"})});mm.args={type:"persisting"};const j1=["Positive","Negative","Informational","Warning","PositionChanged","AnchorToButton","CloseIndividual"];var H1=Object.freeze(Object.defineProperty({__proto__:null,default:A1,Positive:im,Negative:lm,Informational:sm,Warning:cm,PositionChanged:dm,AnchorToButton:um,CloseIndividual:mm,__namedExportsOrder:j1},Symbol.toStringTag,{value:"Module"})),F1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import SvgCheckmark from '@itwin/itwinui-icons-react/cjs/icons/Checkmark';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ToggleSwitch, ToggleSwitchProps } from '@itwin/itwinui-react';

export default {
  title: 'Input/ToggleSwitch',
  component: ToggleSwitch,
  decorators: [
    (Story) => (
      <div style={{ padding: '5.5px 0' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<ToggleSwitchProps>;

export const Basic: Story<ToggleSwitchProps> = (args) => {
  return <ToggleSwitch defaultChecked {...args} />;
};

export const DisabledChecked: Story<ToggleSwitchProps> = (args) => {
  const { disabled = true, ...rest } = args;
  return <ToggleSwitch defaultChecked disabled={disabled} {...rest} />;
};

DisabledChecked.args = {
  disabled: true,
};

export const DisabledUnchecked: Story<ToggleSwitchProps> = (args) => {
  const { disabled = true, ...rest } = args;
  return <ToggleSwitch disabled={disabled} {...rest} />;
};

DisabledUnchecked.args = {
  disabled: true,
};

export const LabelRight: Story<ToggleSwitchProps> = (args) => {
  const {
    label = 'This is a right label',
    labelPosition = 'right',
    ...rest
  } = args;
  return (
    <ToggleSwitch
      defaultChecked
      label={label}
      labelPosition={labelPosition}
      {...rest}
    />
  );
};

LabelRight.args = {
  label: 'This is a right label',
  labelPosition: 'right',
};

export const LabelLeft: Story<ToggleSwitchProps> = (args) => {
  const {
    label = 'This is a left label',
    labelPosition = 'left',
    ...rest
  } = args;
  return <ToggleSwitch label={label} labelPosition={labelPosition} {...rest} />;
};

LabelLeft.args = {
  label: 'This is a left label',
  labelPosition: 'left',
};

export const WithIcon: Story<ToggleSwitchProps> = (args) => {
  const { icon = <SvgCheckmark />, ...rest } = args;
  return <ToggleSwitch defaultChecked icon={icon} {...rest} />;
};

WithIcon.args = {
  icon: <SvgCheckmark />,
};
`,locationsMap:{basic:{startLoc:{col:47,line:22},endLoc:{col:1,line:24},startBody:{col:47,line:22},endBody:{col:1,line:24}},"disabled-checked":{startLoc:{col:57,line:26},endLoc:{col:1,line:29},startBody:{col:57,line:26},endBody:{col:1,line:29}},"disabled-unchecked":{startLoc:{col:59,line:35},endLoc:{col:1,line:38},startBody:{col:59,line:35},endBody:{col:1,line:38}},"label-right":{startLoc:{col:52,line:44},endLoc:{col:1,line:58},startBody:{col:52,line:44},endBody:{col:1,line:58}},"label-left":{startLoc:{col:51,line:65},endLoc:{col:1,line:72},startBody:{col:51,line:65},endBody:{col:1,line:72}},"with-icon":{startLoc:{col:50,line:79},endLoc:{col:1,line:82},startBody:{col:50,line:79},endBody:{col:1,line:82}}}}},title:"Input/ToggleSwitch",component:Fe,decorators:[e=>l("div",{style:{padding:"5.5px 0"},children:l(e,{})})]};const $1=e=>l(Fe,f({defaultChecked:!0},e)),pm=e=>{const n=e,{disabled:t=!0}=n,a=L(n,["disabled"]);return l(Fe,f({defaultChecked:!0,disabled:t},a))};pm.args={disabled:!0};const bm=e=>{const n=e,{disabled:t=!0}=n,a=L(n,["disabled"]);return l(Fe,f({disabled:t},a))};bm.args={disabled:!0};const gm=e=>{const r=e,{label:t="This is a right label",labelPosition:a="right"}=r,n=L(r,["label","labelPosition"]);return l(Fe,f({defaultChecked:!0,label:t,labelPosition:a},n))};gm.args={label:"This is a right label",labelPosition:"right"};const fm=e=>{const r=e,{label:t="This is a left label",labelPosition:a="left"}=r,n=L(r,["label","labelPosition"]);return l(Fe,f({label:t,labelPosition:a},n))};fm.args={label:"This is a left label",labelPosition:"left"};const ym=e=>{const n=e,{icon:t=l(jo,{})}=n,a=L(n,["icon"]);return l(Fe,f({defaultChecked:!0,icon:t},a))};ym.args={icon:l(jo,{})};const U1=["Basic","DisabledChecked","DisabledUnchecked","LabelRight","LabelLeft","WithIcon"];var z1=Object.freeze(Object.defineProperty({__proto__:null,default:F1,Basic:$1,DisabledChecked:pm,DisabledUnchecked:bm,LabelRight:gm,LabelLeft:fm,WithIcon:ym,__namedExportsOrder:U1},Symbol.toStringTag,{value:"Module"})),W1={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Tooltip, TooltipProps } from '@itwin/itwinui-react';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Core/Tooltip',
  component: Tooltip,
  args: {
    content: 'Here I am!',
    children: (
      <div
        id='tooltip-target'
        style={{
          marginTop: 40,
          marginLeft: 100,
          width: 'fit-content',
        }}
      >
        Please, try to hover me!
      </div>
    ),
  },
  argTypes: {
    children: { control: { disable: true } },
    visible: { control: { type: 'boolean' } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
  },
} as Meta<TooltipProps>;

export const Top: Story<TooltipProps> = (args) => {
  const { children, placement, ...rest } = args;
  return (
    <Tooltip placement={placement} {...rest}>
      {children}
    </Tooltip>
  );
};

Top.args = { placement: 'top' };

export const Right: Story<TooltipProps> = (args) => {
  const { children, placement, ...rest } = args;
  return (
    <Tooltip placement={placement} {...rest}>
      {children}
    </Tooltip>
  );
};

Right.args = { placement: 'right' };

export const Bottom: Story<TooltipProps> = (args) => {
  const { children, placement, ...rest } = args;
  return (
    <Tooltip placement={placement} {...rest}>
      {children}
    </Tooltip>
  );
};

Bottom.args = { placement: 'bottom' };

export const Left: Story<TooltipProps> = (args) => {
  const { children, placement, ...rest } = args;
  return (
    <Tooltip placement={placement} {...rest}>
      {children}
    </Tooltip>
  );
};

Left.args = { placement: 'left' };

export const Controlled: Story<TooltipProps> = (args) => {
  const { visible = true, ...rest } = args;
  return (
    <Tooltip visible={visible} {...rest}>
      <div
        style={{
          marginTop: 40,
          marginLeft: 100,
          width: 'fit-content',
        }}
      >
        No need to hover me
      </div>
    </Tooltip>
  );
};

Controlled.args = {
  placement: 'left',
  visible: true,
};
`,locationsMap:{top:{startLoc:{col:40,line:36},endLoc:{col:1,line:43},startBody:{col:40,line:36},endBody:{col:1,line:43}},right:{startLoc:{col:42,line:47},endLoc:{col:1,line:54},startBody:{col:42,line:47},endBody:{col:1,line:54}},bottom:{startLoc:{col:43,line:58},endLoc:{col:1,line:65},startBody:{col:43,line:58},endBody:{col:1,line:65}},left:{startLoc:{col:41,line:69},endLoc:{col:1,line:76},startBody:{col:41,line:69},endBody:{col:1,line:76}},controlled:{startLoc:{col:47,line:80},endLoc:{col:1,line:95},startBody:{col:47,line:80},endBody:{col:1,line:95}}}}},title:"Core/Tooltip",component:Ze,args:{content:"Here I am!",children:l("div",{id:"tooltip-target",style:{marginTop:40,marginLeft:100,width:"fit-content"},children:"Please, try to hover me!"})},argTypes:{children:{control:{disable:!0}},visible:{control:{type:"boolean"}},className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}}}};const vm=e=>{const r=e,{children:t,placement:a}=r,n=L(r,["children","placement"]);return l(Ze,x(f({placement:a},n),{children:t}))};vm.args={placement:"top"};const hm=e=>{const r=e,{children:t,placement:a}=r,n=L(r,["children","placement"]);return l(Ze,x(f({placement:a},n),{children:t}))};hm.args={placement:"right"};const Sm=e=>{const r=e,{children:t,placement:a}=r,n=L(r,["children","placement"]);return l(Ze,x(f({placement:a},n),{children:t}))};Sm.args={placement:"bottom"};const wm=e=>{const r=e,{children:t,placement:a}=r,n=L(r,["children","placement"]);return l(Ze,x(f({placement:a},n),{children:t}))};wm.args={placement:"left"};const Tm=e=>{const n=e,{visible:t=!0}=n,a=L(n,["visible"]);return l(Ze,x(f({visible:t},a),{children:l("div",{style:{marginTop:40,marginLeft:100,width:"fit-content"},children:"No need to hover me"})}))};Tm.args={placement:"left",visible:!0};const V1=["Top","Right","Bottom","Left","Controlled"];var G1=Object.freeze(Object.defineProperty({__proto__:null,default:W1,Top:vm,Right:hm,Bottom:Sm,Left:wm,Controlled:Tm,__namedExportsOrder:V1},Symbol.toStringTag,{value:"Module"})),q1={component:Vt,argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}}},parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  Tree,
  TreeProps,
  TreeNode,
  NodeData,
  Checkbox,
  TreeNodeExpander,
  ProgressRadial,
} from '@itwin/itwinui-react';
import { action } from '@storybook/addon-actions';
import { SvgPlaceholder } from '@itwin/itwinui-icons-react';

export default {
  component: Tree,
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
  },
  parameters: { controls: { hideNoControlsWarning: true } },
  title: 'Core/Tree',
} as Meta<TreeProps<unknown>>;

export const Basic: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    sublabel: string;
    subItems: StoryData[];
  };

  const [expandedNodes, setExpandedNodes] = React.useState<
    Record<string, boolean>
  >({
    'Node-2': true,
    'Node-2-1': true,
    'Node-3': true,
  });
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean) => {
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => ({ ...oldExpanded, [nodeId]: true }));
        action(\`Expanded node \${nodeId}\`)();
      } else {
        setExpandedNodes((oldExpanded) => ({
          ...oldExpanded,
          [nodeId]: false,
        }));
        action(\`Closed node \${nodeId}\`)();
      }
    },
    [],
  );
  const generateItem = React.useCallback(
    (index: number, parentNode = '', depth = 0): StoryData => {
      const keyValue = parentNode ? \`\${parentNode}-\${index}\` : \`\${index}\`;
      return {
        id: \`Node-\${keyValue}\`,
        label: \`Node \${keyValue}\`,
        sublabel: \`Sublabel for Node \${keyValue}\`,
        subItems:
          depth < 10
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = React.useMemo(
    () =>
      Array(50)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes: node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes[node.id],
        hasSubNodes: node.subItems.length > 0,
      };
    },
    [expandedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={node.label}
            sublabel={node.sublabel}
            onExpanded={onNodeExpanded}
            icon={<SvgPlaceholder />}
            {...rest}
          />
        ),
        [onNodeExpanded],
      )}
    />
  );
};

export const Full: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    sublabel: string;
    subItems: StoryData[];
  };

  const [selectedNodes, setSelectedNodes] = React.useState<
    Record<string, boolean>
  >({
    'Node-0': true,
    'Node-3-2': true,
    'Node-22': true,
  });
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, isSelected: boolean) => {
      if (isSelected) {
        setSelectedNodes((oldSelected) => ({ ...oldSelected, [nodeId]: true }));
        action(\`Selected node \${nodeId}\`)();
      } else {
        setSelectedNodes((oldSelected) => ({
          ...oldSelected,
          [nodeId]: false,
        }));
        action(\`Unselected node \${nodeId}\`)();
      }
    },
    [],
  );

  const [expandedNodes, setExpandedNodes] = React.useState<
    Record<string, boolean>
  >({
    'Node-2': true,
    'Node-2-1': true,
    'Node-3': true,
  });
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean) => {
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => ({ ...oldExpanded, [nodeId]: true }));
        action(\`Expanded node \${nodeId}\`)();
      } else {
        setExpandedNodes((oldExpanded) => ({
          ...oldExpanded,
          [nodeId]: false,
        }));
        action(\`Closed node \${nodeId}\`)();
      }
    },
    [],
  );

  const [disabledNodes] = React.useState<Record<string, boolean>>({
    'Node-4': true,
    'Node-3-0': true,
    'Node-6': true,
    'Node-10': true,
  });

  const generateItem = React.useCallback(
    (index: number, parentNode = '', depth = 0): StoryData => {
      const keyValue = parentNode ? \`\${parentNode}-\${index}\` : \`\${index}\`;
      return {
        id: \`Node-\${keyValue}\`,
        label: \`Node \${keyValue}\`,
        sublabel: \`Sublabel for Node \${keyValue}\`,
        subItems:
          depth < 10
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = React.useMemo(
    () =>
      Array(50)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes: node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes[node.id],
        isDisabled: disabledNodes[node.id],
        isSelected: selectedNodes[node.id],
        hasSubNodes: node.subItems.length > 0,
      };
    },
    [disabledNodes, expandedNodes, selectedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={node.label}
            sublabel={node.sublabel}
            onExpanded={onNodeExpanded}
            onSelected={onSelectedNodeChange}
            checkbox={<Checkbox variant='eyeball' disabled={rest.isDisabled} />}
            icon={<SvgPlaceholder />}
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};

export const AsyncLoading: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    subItems: StoryData[];
    hasSubNodes?: boolean;
    isLoading?: boolean;
  };

  const generateItem = React.useCallback((index: number): StoryData => {
    return {
      id: \`Node-\${index}\`,
      label: \`Node \${index}\`,
      subItems: [],
      hasSubNodes: true,
    };
  }, []);

  const [data, setData] = React.useState(() =>
    Array(50)
      .fill(null)
      .map((_, index) => generateItem(index)),
  );

  const [selectedNodes, setSelectedNodes] = React.useState<
    Record<string, boolean>
  >({});
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, isSelected: boolean) => {
      if (isSelected) {
        setSelectedNodes((oldSelected) => ({ ...oldSelected, [nodeId]: true }));
        action(\`Selected node \${nodeId}\`)();
      } else {
        setSelectedNodes((oldSelected) => ({
          ...oldSelected,
          [nodeId]: false,
        }));
        action(\`Unselected node \${nodeId}\`)();
      }
    },
    [],
  );

  const [expandedNodes, setExpandedNodes] = React.useState<
    Record<string, boolean>
  >({});
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean, node: StoryData) => {
      if (isExpanded && !node.subItems.length && node.hasSubNodes) {
        // Mocking API call
        setTimeout(() => {
          setData((oldData) => {
            const newData = [...oldData];
            const newNode = newData.find((item) => item.id === nodeId);
            if (!newNode) {
              return oldData;
            }
            newNode.subItems = [
              { id: \`Async-\${nodeId}\`, label: \`Async \${nodeId}\`, subItems: [] },
            ];
            return newData;
          });
        }, 1000);
      }
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => ({ ...oldExpanded, [nodeId]: true }));
        action(\`Expanded node \${nodeId}\`)();
      } else {
        setExpandedNodes((oldExpanded) => ({
          ...oldExpanded,
          [nodeId]: false,
        }));
        action(\`Closed node \${nodeId}\`)();
      }
    },
    [],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes:
          !node.subItems.length && node.hasSubNodes
            ? [
                {
                  id: \`Async-\${node.id}\`,
                  label: '',
                  subItems: [],
                  isLoading: true,
                },
              ]
            : node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes[node.id],
        isSelected: selectedNodes[node.id],
        hasSubNodes: !!node.hasSubNodes,
      };
    },
    [expandedNodes, selectedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={node.isLoading ? 'Loading...' : node.label}
            onExpanded={(nodeId, isExpanded) =>
              onNodeExpanded(nodeId, isExpanded, node)
            }
            onSelected={onSelectedNodeChange}
            checkbox={<Checkbox variant='eyeball' disabled={rest.isDisabled} />}
            icon={
              node.isLoading ? (
                <ProgressRadial size='x-small' indeterminate />
              ) : (
                <SvgPlaceholder />
              )
            }
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};

export const CustomizedExpander: Story<TreeProps<unknown>> = () => {
  type StoryData = {
    id: string;
    label: string;
    sublabel: string;
    subItems: StoryData[];
  };

  const [selectedNodes, setSelectedNodes] = React.useState<
    Record<string, boolean>
  >({
    'Node-0': true,
    'Node-3-2': true,
    'Node-22': true,
  });
  const onSelectedNodeChange = React.useCallback(
    (nodeId: string, isSelected: boolean) => {
      if (isSelected) {
        setSelectedNodes((oldSelected) => ({ ...oldSelected, [nodeId]: true }));
        action(\`Selected node \${nodeId}\`)();
      } else {
        setSelectedNodes((oldSelected) => ({
          ...oldSelected,
          [nodeId]: false,
        }));
        action(\`Unselected node \${nodeId}\`)();
      }
    },
    [],
  );

  const [expandedNodes, setExpandedNodes] = React.useState<
    Record<string, boolean>
  >({
    'Node-2': true,
    'Node-2-1': true,
    'Node-3': true,
  });
  const onNodeExpanded = React.useCallback(
    (nodeId: string, isExpanded: boolean) => {
      if (isExpanded) {
        setExpandedNodes((oldExpanded) => ({ ...oldExpanded, [nodeId]: true }));
        action(\`Expanded node \${nodeId}\`)();
      } else {
        setExpandedNodes((oldExpanded) => ({
          ...oldExpanded,
          [nodeId]: false,
        }));
        action(\`Closed node \${nodeId}\`)();
      }
    },
    [],
  );

  const [disabledNodes] = React.useState({
    'Node-4': true,
    'Node-3': true,
    'Node-6': true,
    'Node-10': true,
  });

  const isNodeDisabled = React.useCallback(
    (nodeId: string) => {
      return Object.keys(disabledNodes).some(
        (id) => nodeId === id || nodeId.startsWith(\`\${id}-\`),
      );
    },
    [disabledNodes],
  );

  const generateItem = React.useCallback(
    (index: number, parentNode = '', depth = 0): StoryData => {
      const keyValue = parentNode ? \`\${parentNode}-\${index}\` : \`\${index}\`;
      return {
        id: \`Node-\${keyValue}\`,
        label: \`Node \${keyValue}\`,
        sublabel: \`Sublabel for Node \${keyValue}\`,
        subItems:
          depth < 10
            ? Array(Math.round(index % 5))
                .fill(null)
                .map((_, index) => generateItem(index, keyValue, depth + 1))
            : [],
      };
    },
    [],
  );

  const data = React.useMemo(
    () =>
      Array(50)
        .fill(null)
        .map((_, index) => generateItem(index)),
    [generateItem],
  );

  const getNode = React.useCallback(
    (node: StoryData): NodeData<StoryData> => {
      return {
        subNodes: node.subItems,
        nodeId: node.id,
        node: node,
        isExpanded: expandedNodes[node.id],
        isDisabled: isNodeDisabled(node.id),
        isSelected: selectedNodes[node.id],
        hasSubNodes: node.subItems.length > 0,
      };
    },
    [expandedNodes, isNodeDisabled, selectedNodes],
  );

  return (
    <Tree<StoryData>
      data={data}
      getNode={getNode}
      nodeRenderer={React.useCallback(
        ({ node, ...rest }) => (
          <TreeNode
            label={node.label}
            sublabel={node.sublabel}
            onExpanded={onNodeExpanded}
            onSelected={onSelectedNodeChange}
            checkbox={<Checkbox variant='eyeball' disabled={rest.isDisabled} />}
            icon={<SvgPlaceholder />}
            // Allows to expand disabled nodes
            expander={
              <TreeNodeExpander
                isExpanded={rest.isExpanded}
                onClick={(e) => {
                  onNodeExpanded(node.id, !rest.isExpanded);
                  e.stopPropagation();
                }}
              />
            }
            {...rest}
          />
        ),
        [onNodeExpanded, onSelectedNodeChange],
      )}
    />
  );
};
`,locationsMap:{basic:{startLoc:{col:48,line:29},endLoc:{col:1,line:116},startBody:{col:48,line:29},endBody:{col:1,line:116}},full:{startLoc:{col:47,line:118},endLoc:{col:1,line:240},startBody:{col:47,line:118},endBody:{col:1,line:240}},"async-loading":{startLoc:{col:55,line:242},endLoc:{col:1,line:371},startBody:{col:55,line:242},endBody:{col:1,line:371}},"customized-expander":{startLoc:{col:61,line:373},endLoc:{col:1,line:514},startBody:{col:61,line:373},endBody:{col:1,line:514}}}},controls:{hideNoControlsWarning:!0}},title:"Core/Tree"};const K1=()=>{const[e,t]=o.useState({"Node-2":!0,"Node-2-1":!0,"Node-3":!0}),a=o.useCallback((s,c)=>{c?(t(d=>x(f({},d),{[s]:!0})),_(`Expanded node ${s}`)()):(t(d=>x(f({},d),{[s]:!1})),_(`Closed node ${s}`)())},[]),n=o.useCallback((s,c="",d=0)=>{const p=c?`${c}-${s}`:`${s}`;return{id:`Node-${p}`,label:`Node ${p}`,sublabel:`Sublabel for Node ${p}`,subItems:d<10?Array(Math.round(s%5)).fill(null).map((u,m)=>n(m,p,d+1)):[]}},[]),r=o.useMemo(()=>Array(50).fill(null).map((s,c)=>n(c)),[n]),i=o.useCallback(s=>({subNodes:s.subItems,nodeId:s.id,node:s,isExpanded:e[s.id],hasSubNodes:s.subItems.length>0}),[e]);return l(Vt,{data:r,getNode:i,nodeRenderer:o.useCallback(d=>{var p=d,{node:s}=p,c=L(p,["node"]);return l($r,f({label:s.label,sublabel:s.sublabel,onExpanded:a,icon:l(Je,{})},c))},[a])})},J1=()=>{const[e,t]=o.useState({"Node-0":!0,"Node-3-2":!0,"Node-22":!0}),a=o.useCallback((u,m)=>{m?(t(b=>x(f({},b),{[u]:!0})),_(`Selected node ${u}`)()):(t(b=>x(f({},b),{[u]:!1})),_(`Unselected node ${u}`)())},[]),[n,r]=o.useState({"Node-2":!0,"Node-2-1":!0,"Node-3":!0}),i=o.useCallback((u,m)=>{m?(r(b=>x(f({},b),{[u]:!0})),_(`Expanded node ${u}`)()):(r(b=>x(f({},b),{[u]:!1})),_(`Closed node ${u}`)())},[]),[s]=o.useState({"Node-4":!0,"Node-3-0":!0,"Node-6":!0,"Node-10":!0}),c=o.useCallback((u,m="",b=0)=>{const g=m?`${m}-${u}`:`${u}`;return{id:`Node-${g}`,label:`Node ${g}`,sublabel:`Sublabel for Node ${g}`,subItems:b<10?Array(Math.round(u%5)).fill(null).map((y,h)=>c(h,g,b+1)):[]}},[]),d=o.useMemo(()=>Array(50).fill(null).map((u,m)=>c(m)),[c]),p=o.useCallback(u=>({subNodes:u.subItems,nodeId:u.id,node:u,isExpanded:n[u.id],isDisabled:s[u.id],isSelected:e[u.id],hasSubNodes:u.subItems.length>0}),[s,n,e]);return l(Vt,{data:d,getNode:p,nodeRenderer:o.useCallback(b=>{var g=b,{node:u}=g,m=L(g,["node"]);return l($r,f({label:u.label,sublabel:u.sublabel,onExpanded:i,onSelected:a,checkbox:l(Re,{variant:"eyeball",disabled:m.isDisabled}),icon:l(Je,{})},m))},[i,a])})},Y1=()=>{const e=o.useCallback(u=>({id:`Node-${u}`,label:`Node ${u}`,subItems:[],hasSubNodes:!0}),[]),[t,a]=o.useState(()=>Array(50).fill(null).map((u,m)=>e(m))),[n,r]=o.useState({}),i=o.useCallback((u,m)=>{m?(r(b=>x(f({},b),{[u]:!0})),_(`Selected node ${u}`)()):(r(b=>x(f({},b),{[u]:!1})),_(`Unselected node ${u}`)())},[]),[s,c]=o.useState({}),d=o.useCallback((u,m,b)=>{m&&!b.subItems.length&&b.hasSubNodes&&setTimeout(()=>{a(g=>{const y=[...g],h=y.find(v=>v.id===u);return h?(h.subItems=[{id:`Async-${u}`,label:`Async ${u}`,subItems:[]}],y):g})},1e3),m?(c(g=>x(f({},g),{[u]:!0})),_(`Expanded node ${u}`)()):(c(g=>x(f({},g),{[u]:!1})),_(`Closed node ${u}`)())},[]),p=o.useCallback(u=>({subNodes:!u.subItems.length&&u.hasSubNodes?[{id:`Async-${u.id}`,label:"",subItems:[],isLoading:!0}]:u.subItems,nodeId:u.id,node:u,isExpanded:s[u.id],isSelected:n[u.id],hasSubNodes:!!u.hasSubNodes}),[s,n]);return l(Vt,{data:t,getNode:p,nodeRenderer:o.useCallback(b=>{var g=b,{node:u}=g,m=L(g,["node"]);return l($r,f({label:u.isLoading?"Loading...":u.label,onExpanded:(y,h)=>d(y,h,u),onSelected:i,checkbox:l(Re,{variant:"eyeball",disabled:m.isDisabled}),icon:u.isLoading?l(Ye,{size:"x-small",indeterminate:!0}):l(Je,{})},m))},[d,i])})},Z1=()=>{const[e,t]=o.useState({"Node-0":!0,"Node-3-2":!0,"Node-22":!0}),a=o.useCallback((m,b)=>{b?(t(g=>x(f({},g),{[m]:!0})),_(`Selected node ${m}`)()):(t(g=>x(f({},g),{[m]:!1})),_(`Unselected node ${m}`)())},[]),[n,r]=o.useState({"Node-2":!0,"Node-2-1":!0,"Node-3":!0}),i=o.useCallback((m,b)=>{b?(r(g=>x(f({},g),{[m]:!0})),_(`Expanded node ${m}`)()):(r(g=>x(f({},g),{[m]:!1})),_(`Closed node ${m}`)())},[]),[s]=o.useState({"Node-4":!0,"Node-3":!0,"Node-6":!0,"Node-10":!0}),c=o.useCallback(m=>Object.keys(s).some(b=>m===b||m.startsWith(`${b}-`)),[s]),d=o.useCallback((m,b="",g=0)=>{const y=b?`${b}-${m}`:`${m}`;return{id:`Node-${y}`,label:`Node ${y}`,sublabel:`Sublabel for Node ${y}`,subItems:g<10?Array(Math.round(m%5)).fill(null).map((h,v)=>d(v,y,g+1)):[]}},[]),p=o.useMemo(()=>Array(50).fill(null).map((m,b)=>d(b)),[d]),u=o.useCallback(m=>({subNodes:m.subItems,nodeId:m.id,node:m,isExpanded:n[m.id],isDisabled:c(m.id),isSelected:e[m.id],hasSubNodes:m.subItems.length>0}),[n,c,e]);return l(Vt,{data:p,getNode:u,nodeRenderer:o.useCallback(g=>{var y=g,{node:m}=y,b=L(y,["node"]);return l($r,f({label:m.label,sublabel:m.sublabel,onExpanded:i,onSelected:a,checkbox:l(Re,{variant:"eyeball",disabled:b.isDisabled}),icon:l(Je,{}),expander:l(Bs,{isExpanded:b.isExpanded,onClick:h=>{i(m.id,!b.isExpanded),h.stopPropagation()}})},b))},[i,a])})},X1=["Basic","Full","AsyncLoading","CustomizedExpander"];var Q1=Object.freeze(Object.defineProperty({__proto__:null,default:q1,Basic:K1,Full:J1,AsyncLoading:Y1,CustomizedExpander:Z1,__namedExportsOrder:X1},Symbol.toStringTag,{value:"Module"})),eS={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { getUserColor, UserIcon, UserIconProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/UserIcon',
  component: UserIcon,
  args: {
    backgroundColor: getUserColor('Terry Rivers'),
    title: 'Terry Rivers',
    abbreviation: 'TR',
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    image: { control: { disable: true } },
  },
} as Meta<UserIconProps>;

export const Basic: Story<UserIconProps> = (args) => {
  return (
    <UserIcon
      abbreviation='TR'
      backgroundColor={getUserColor('Terry Rivers')}
      title='Terry Rivers'
      {...args}
    />
  );
};

export const WithImage: Story<UserIconProps> = (args) => {
  return (
    <UserIcon
      size='large'
      abbreviation='TR'
      backgroundColor={getUserColor('Terry Rivers')}
      image={
        <img src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png' />
      }
      title='Terry Rivers'
      {...args}
    />
  );
};

WithImage.args = {
  size: 'large',
  image: (
    <img src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png' />
  ),
};

export const Sizes: Story<UserIconProps> = (args) => {
  return (
    <div style={{ display: 'flex', gap: 4, placeItems: 'center' }}>
      <UserIcon
        size='small'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
      <UserIcon
        size='medium'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
      <UserIcon
        size='large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
      <UserIcon
        size='x-large'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
    </div>
  );
};

Sizes.argTypes = {
  size: { control: { disable: true } },
};

export const Statuses: Story<UserIconProps> = (args) => {
  return (
    <div style={{ display: 'flex', gap: 4, placeItems: 'center' }}>
      <UserIcon
        size='large'
        status='online'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
      <UserIcon
        size='large'
        status='offline'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
      <UserIcon
        size='large'
        status='busy'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
      <UserIcon
        size='large'
        status='away'
        abbreviation='TR'
        backgroundColor={getUserColor('Terry Rivers')}
        title='Terry Rivers'
        {...args}
      />
    </div>
  );
};

Statuses.args = {
  size: 'large',
};

Statuses.argTypes = {
  status: { control: { disable: true } },
};

export const CustomStatusTranslation: Story<UserIconProps> = (args) => {
  return (
    <UserIcon
      size='large'
      abbreviation='TR'
      backgroundColor={getUserColor('Terry Rivers')}
      status='away'
      title='Terry Rivers'
      translatedStatusTitles={{
        away: 'AFK',
        busy: 'Do not disturb!',
        offline: 'Disconnected',
        online: 'Available',
      }}
      {...args}
    />
  );
};

CustomStatusTranslation.args = {
  size: 'large',
  status: 'away',
  abbreviation: 'TR',
  translatedStatusTitles: {
    away: 'AFK',
    busy: 'Do not disturb!',
    offline: 'Disconnected',
    online: 'Available',
  },
};
`,locationsMap:{basic:{startLoc:{col:43,line:28},endLoc:{col:1,line:37},startBody:{col:43,line:28},endBody:{col:1,line:37}},"with-image":{startLoc:{col:47,line:39},endLoc:{col:1,line:52},startBody:{col:47,line:39},endBody:{col:1,line:52}},sizes:{startLoc:{col:43,line:61},endLoc:{col:1,line:94},startBody:{col:43,line:61},endBody:{col:1,line:94}},statuses:{startLoc:{col:46,line:100},endLoc:{col:1,line:137},startBody:{col:46,line:100},endBody:{col:1,line:137}},"custom-status-translation":{startLoc:{col:61,line:147},endLoc:{col:1,line:164},startBody:{col:61,line:147},endBody:{col:1,line:164}}}}},title:"Core/UserIcon",component:ke,args:{backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers",abbreviation:"TR"},argTypes:{backgroundColor:{control:"color"},className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},image:{control:{disable:!0}}}};const nS=e=>l(ke,f({abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),Cm=e=>l(ke,f({size:"large",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),image:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png"}),title:"Terry Rivers"},e));Cm.args={size:"large",image:l("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png"})};const Im=e=>N("div",{style:{display:"flex",gap:4,placeItems:"center"},children:[l(ke,f({size:"small",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),l(ke,f({size:"medium",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),l(ke,f({size:"large",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),l(ke,f({size:"x-large",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e))]});Im.argTypes={size:{control:{disable:!0}}};const Ti=e=>N("div",{style:{display:"flex",gap:4,placeItems:"center"},children:[l(ke,f({size:"large",status:"online",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),l(ke,f({size:"large",status:"offline",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),l(ke,f({size:"large",status:"busy",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e)),l(ke,f({size:"large",status:"away",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),title:"Terry Rivers"},e))]});Ti.args={size:"large"};Ti.argTypes={status:{control:{disable:!0}}};const xm=e=>l(ke,f({size:"large",abbreviation:"TR",backgroundColor:Oe("Terry Rivers"),status:"away",title:"Terry Rivers",translatedStatusTitles:{away:"AFK",busy:"Do not disturb!",offline:"Disconnected",online:"Available"}},e));xm.args={size:"large",status:"away",abbreviation:"TR",translatedStatusTitles:{away:"AFK",busy:"Do not disturb!",offline:"Disconnected",online:"Available"}};const tS=["Basic","WithImage","Sizes","Statuses","CustomStatusTranslation"];var rS=Object.freeze(Object.defineProperty({__proto__:null,default:eS,Basic:nS,WithImage:Cm,Sizes:Im,Statuses:Ti,CustomStatusTranslation:xm,__namedExportsOrder:tS},Symbol.toStringTag,{value:"Module"})),aS={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  getUserColor,
  Tooltip,
  UserIcon,
  UserIconGroup,
  UserIconGroupProps,
} from '@itwin/itwinui-react';

export default {
  component: UserIconGroup,
  subcomponents: { UserIcon },
  argTypes: {
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    id: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  title: 'Core/UserIconGroup',
} as Meta<UserIconGroupProps>;

export const Basic: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ace Cash',
    'Tanner Fraser',
    'Ashley Miles',
    'Jean Mullins',
  ];

  return (
    <UserIconGroup {...args}>
      {userNames.map((name, index) => (
        <UserIcon
          key={\`\${name}-\${index}\`}
          abbreviation={name
            .split(' ')
            .map((token) => token[0])
            .join('')}
          backgroundColor={getUserColor(name)}
          title={name}
        />
      ))}
    </UserIconGroup>
  );
};

Basic.args = {
  animated: false,
  iconSize: 'medium',
};

export const Animated: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Jean Mullins',
    'Ashley Miles',
  ];

  return (
    <UserIconGroup animated {...args}>
      {userNames.map((name, index) => (
        <UserIcon
          key={\`\${name}-\${index}\`}
          abbreviation={name
            .split(' ')
            .map((token) => token[0])
            .join('')}
          backgroundColor={getUserColor(name)}
          title={name}
        />
      ))}
    </UserIconGroup>
  );
};

Animated.args = {
  animated: true,
  iconSize: 'medium',
};

export const ManyIcons: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ace Cash',
    'Tanner Fraser',
    'Ashley Miles',
    'Jean Mullins',
    'Nico Triplett',
    'Drew Abel',
    'Kendall Simons',
    'Kennedy Gray',
    'Charlie Mayfield',
    'Peyton Pennington',
    'Justice Harrington',
    'Jessie Dodd',
  ];

  return (
    <>
      <UserIconGroup {...args}>
        {Array(110)
          .fill(null)
          .map((_, index) => userNames[index % userNames.length])
          .map((name, index) => (
            <UserIcon
              key={\`\${name}-\${index}\`}
              abbreviation={name
                .split(' ')
                .map((token) => token[0])
                .join('')}
              backgroundColor={getUserColor(name)}
              title={name}
            />
          ))}
      </UserIconGroup>
    </>
  );
};

ManyIcons.args = {
  animated: false,
  iconSize: 'large',
};

export const NonStacked: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ashley Miles',
    'Jean Mullins',
    'Charlie Mayfield',
    'Peyton Pennington',
    'Justice Harrington',
  ];

  return (
    <UserIconGroup stacked={false} {...args}>
      {userNames.map((name, index) => (
        <UserIcon
          key={\`\${name}-\${index}\`}
          abbreviation={name
            .split(' ')
            .map((token) => token[0])
            .join('')}
          backgroundColor={getUserColor(name)}
          title={name}
        />
      ))}
    </UserIconGroup>
  );
};

NonStacked.args = {
  animated: false,
  stacked: false,
  iconSize: 'medium',
};

export const WithTooltip: Story<UserIconGroupProps> = (args) => {
  const userNames = [
    'Terry Rivers',
    'Robin Mercer',
    'Morgan Vera',
    'Ashley Miles',
    'Jean Mullins',
    'Charlie Mayfield',
    'Peyton Pennington',
    'Justice Harrington',
  ];

  /**
   * Ref is set on the last user icon for tooltip positioning.
   */
  const userIconRef = React.useRef<HTMLDivElement>(null);

  const arrayLength = args.maxIcons;
  const usersSubArray = userNames.slice(arrayLength);
  const tooltipContent = usersSubArray.join(\`\\n\`) as string;

  return (
    <>
      <UserIconGroup {...args} countIconProps={{ ref: userIconRef }}>
        {userNames.map((name, index) => (
          <UserIcon
            key={\`\${name}-\${index}\`}
            abbreviation={name
              .split(' ')
              .map((token) => token[0])
              .join('')}
            backgroundColor={getUserColor(name)}
            title={name}
          />
        ))}
      </UserIconGroup>
      <Tooltip
        reference={userIconRef}
        content={tooltipContent}
        placement='right'
        style={{ whiteSpace: 'pre' }}
      />
    </>
  );
};

WithTooltip.args = {
  animated: false,
  iconSize: 'medium',
};
`,locationsMap:{basic:{startLoc:{col:48,line:27},endLoc:{col:1,line:53},startBody:{col:48,line:27},endBody:{col:1,line:53}},animated:{startLoc:{col:51,line:60},endLoc:{col:1,line:84},startBody:{col:51,line:60},endBody:{col:1,line:84}},"many-icons":{startLoc:{col:52,line:91},endLoc:{col:1,line:130},startBody:{col:52,line:91},endBody:{col:1,line:130}},"non-stacked":{startLoc:{col:53,line:137},endLoc:{col:1,line:164},startBody:{col:53,line:137},endBody:{col:1,line:164}},"with-tooltip":{startLoc:{col:54,line:172},endLoc:{col:1,line:216},startBody:{col:54,line:172},endBody:{col:1,line:216}}}}},component:mt,subcomponents:{UserIcon:ke},argTypes:{className:{control:{disable:!0}},style:{control:{disable:!0}},id:{control:{disable:!0}},children:{control:{disable:!0}}},title:"Core/UserIconGroup"};const km=e=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ace Cash","Tanner Fraser","Ashley Miles","Jean Mullins"];return l(mt,x(f({},e),{children:t.map((a,n)=>l(ke,{abbreviation:a.split(" ").map(r=>r[0]).join(""),backgroundColor:Oe(a),title:a},`${a}-${n}`))}))};km.args={animated:!1,iconSize:"medium"};const _m=e=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Jean Mullins","Ashley Miles"];return l(mt,x(f({animated:!0},e),{children:t.map((a,n)=>l(ke,{abbreviation:a.split(" ").map(r=>r[0]).join(""),backgroundColor:Oe(a),title:a},`${a}-${n}`))}))};_m.args={animated:!0,iconSize:"medium"};const Om=e=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ace Cash","Tanner Fraser","Ashley Miles","Jean Mullins","Nico Triplett","Drew Abel","Kendall Simons","Kennedy Gray","Charlie Mayfield","Peyton Pennington","Justice Harrington","Jessie Dodd"];return l(Z,{children:l(mt,x(f({},e),{children:Array(110).fill(null).map((a,n)=>t[n%t.length]).map((a,n)=>l(ke,{abbreviation:a.split(" ").map(r=>r[0]).join(""),backgroundColor:Oe(a),title:a},`${a}-${n}`))}))})};Om.args={animated:!1,iconSize:"large"};const Pm=e=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ashley Miles","Jean Mullins","Charlie Mayfield","Peyton Pennington","Justice Harrington"];return l(mt,x(f({stacked:!1},e),{children:t.map((a,n)=>l(ke,{abbreviation:a.split(" ").map(r=>r[0]).join(""),backgroundColor:Oe(a),title:a},`${a}-${n}`))}))};Pm.args={animated:!1,stacked:!1,iconSize:"medium"};const Bm=e=>{const t=["Terry Rivers","Robin Mercer","Morgan Vera","Ashley Miles","Jean Mullins","Charlie Mayfield","Peyton Pennington","Justice Harrington"],a=o.useRef(null),n=e.maxIcons,i=t.slice(n).join(`
`);return N(Z,{children:[l(mt,x(f({},e),{countIconProps:{ref:a},children:t.map((s,c)=>l(ke,{abbreviation:s.split(" ").map(d=>d[0]).join(""),backgroundColor:Oe(s),title:s},`${s}-${c}`))})),l(Ze,{reference:a,content:i,placement:"right",style:{whiteSpace:"pre"}})]})};Bm.args={animated:!1,iconSize:"medium"};const oS=["Basic","Animated","ManyIcons","NonStacked","WithTooltip"];var iS=Object.freeze(Object.defineProperty({__proto__:null,default:aS,Basic:km,Animated:_m,ManyIcons:Om,NonStacked:Pm,WithTooltip:Bm,__namedExportsOrder:oS},Symbol.toStringTag,{value:"Module"})),lS={parameters:{storySource:{source:`/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Wizard, WizardLocalization, WizardProps } from '@itwin/itwinui-react';

export default {
  title: 'Core/Wizard',
  component: Wizard,
  argTypes: {
    localization: { control: { disable: true } },
    onStepClick: { control: { disable: true } },
  },
} as Meta<WizardProps>;

export const Basic: Story<WizardProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { name: 'First Step' },
      { name: 'Completed Step' },
      { name: 'Current Step' },
      { name: 'Next Step' },
      { name: 'Last Step' },
    ],
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(\`Clicked index: \${index}\`)();
  };
  return (
    <Wizard
      currentStep={currentStep}
      steps={steps}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

Basic.args = {
  currentStep: 2,
  steps: [
    { name: 'First Step' },
    { name: 'Completed Step' },
    { name: 'Current Step' },
    { name: 'Next Step' },
    { name: 'Last Step' },
  ],
};

export const Long: Story<WizardProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { name: 'First Step' },
      { name: 'Completed Step' },
      { name: 'Current Step' },
      { name: 'Next Step' },
      { name: 'Last Step' },
    ],
    type = 'long',
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(\`Clicked index: \${index}\`)();
  };
  return (
    <Wizard
      type={type}
      currentStep={currentStep}
      steps={steps}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

Long.args = {
  currentStep: 2,
  steps: [
    { name: 'First Step' },
    { name: 'Completed Step' },
    { name: 'Current Step' },
    { name: 'Next Step' },
    { name: 'Last Step' },
  ],
  type: 'long',
};

export const WorkflowDiagram: Story<WizardProps> = (args) => {
  const {
    steps = [
      { name: 'Start' },
      { name: 'Set parameters' },
      { name: 'Invite collaborators' },
      { name: 'Review & Approve' },
      { name: 'Complete' },
    ],
    type = 'workflow',
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(\`Clicked index: \${index}\`)();
  };
  return (
    <Wizard type={type} steps={steps} onStepClick={onStepClick} {...rest} />
  );
};

WorkflowDiagram.args = {
  steps: [
    { name: 'Start' },
    { name: 'Set parameters' },
    { name: 'Invite collaborators' },
    { name: 'Review & Approve' },
    { name: 'Complete' },
  ],
  type: 'workflow',
};

export const LocalizedLong: Story<WizardProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { name: 'First Step' },
      { name: 'Completed Step' },
      { name: 'Current Step' },
      { name: 'Next Step' },
      { name: 'Last Step' },
    ],
    type = 'long',
    ...rest
  } = args;
  const localization: WizardLocalization = {
    stepsCountLabel: (currentStep, totalSteps) =>
      \`Localized step \${currentStep} of \${totalSteps}:\`,
  };
  const onStepClick = (index: number) => {
    action(\`Clicked index: \${index}\`)();
  };
  return (
    <Wizard
      type={type}
      currentStep={currentStep}
      steps={steps}
      localization={localization}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

LocalizedLong.args = {
  currentStep: 2,
  steps: [
    { name: 'First Step' },
    { name: 'Completed Step' },
    { name: 'Current Step' },
    { name: 'Next Step' },
    { name: 'Last Step' },
  ],
  type: 'long',
};

export const WithTooltips: Story<WizardProps> = (args) => {
  const {
    currentStep = 2,
    steps = [
      { name: 'First Step', description: 'First Tooltip' },
      { name: 'Completed Step', description: 'Completed Tooltip' },
      { name: 'Current Step', description: 'Current Tooltip' },
      { name: 'Next Step', description: 'Next Tooltip' },
      { name: 'Last Step', description: 'Last Tooltip' },
    ],
    ...rest
  } = args;
  const onStepClick = (index: number) => {
    action(\`Clicked index: \${index}\`)();
  };
  return (
    <Wizard
      currentStep={currentStep}
      steps={steps}
      onStepClick={onStepClick}
      {...rest}
    />
  );
};

WithTooltips.args = {
  currentStep: 2,
  steps: [
    { name: 'First Step', description: 'First Step Description' },
    { name: 'Completed Step', description: 'Completed Step Description' },
    { name: 'Current Step', description: 'Current Step Description' },
    { name: 'Next Step', description: 'Next Step Description' },
    { name: 'Last Step', description: 'Last Step Description' },
  ],
};
`,locationsMap:{basic:{startLoc:{col:41,line:19},endLoc:{col:1,line:42},startBody:{col:41,line:19},endBody:{col:1,line:42}},long:{startLoc:{col:40,line:55},endLoc:{col:1,line:80},startBody:{col:40,line:55},endBody:{col:1,line:80}},"workflow-diagram":{startLoc:{col:51,line:94},endLoc:{col:1,line:112},startBody:{col:51,line:94},endBody:{col:1,line:112}},"localized-long":{startLoc:{col:49,line:125},endLoc:{col:1,line:155},startBody:{col:49,line:125},endBody:{col:1,line:155}},"with-tooltips":{startLoc:{col:48,line:169},endLoc:{col:1,line:192},startBody:{col:48,line:169},endBody:{col:1,line:192}}}}},title:"Core/Wizard",component:pt,argTypes:{localization:{control:{disable:!0}},onStepClick:{control:{disable:!0}}}};const Nm=e=>{const i=e,{currentStep:t=2,steps:a=[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}]}=i,n=L(i,["currentStep","steps"]);return l(pt,f({currentStep:t,steps:a,onStepClick:s=>{_(`Clicked index: ${s}`)()}},n))};Nm.args={currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}]};const Em=e=>{const s=e,{currentStep:t=2,steps:a=[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],type:n="long"}=s,r=L(s,["currentStep","steps","type"]);return l(pt,f({type:n,currentStep:t,steps:a,onStepClick:c=>{_(`Clicked index: ${c}`)()}},r))};Em.args={currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],type:"long"};const Dm=e=>{const i=e,{steps:t=[{name:"Start"},{name:"Set parameters"},{name:"Invite collaborators"},{name:"Review & Approve"},{name:"Complete"}],type:a="workflow"}=i,n=L(i,["steps","type"]);return l(pt,f({type:a,steps:t,onStepClick:s=>{_(`Clicked index: ${s}`)()}},n))};Dm.args={steps:[{name:"Start"},{name:"Set parameters"},{name:"Invite collaborators"},{name:"Review & Approve"},{name:"Complete"}],type:"workflow"};const Rm=e=>{const c=e,{currentStep:t=2,steps:a=[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],type:n="long"}=c,r=L(c,["currentStep","steps","type"]);return l(pt,f({type:n,currentStep:t,steps:a,localization:{stepsCountLabel:(d,p)=>`Localized step ${d} of ${p}:`},onStepClick:d=>{_(`Clicked index: ${d}`)()}},r))};Rm.args={currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],type:"long"};const Mm=e=>{const i=e,{currentStep:t=2,steps:a=[{name:"First Step",description:"First Tooltip"},{name:"Completed Step",description:"Completed Tooltip"},{name:"Current Step",description:"Current Tooltip"},{name:"Next Step",description:"Next Tooltip"},{name:"Last Step",description:"Last Tooltip"}]}=i,n=L(i,["currentStep","steps"]);return l(pt,f({currentStep:t,steps:a,onStepClick:s=>{_(`Clicked index: ${s}`)()}},n))};Mm.args={currentStep:2,steps:[{name:"First Step",description:"First Step Description"},{name:"Completed Step",description:"Completed Step Description"},{name:"Current Step",description:"Current Step Description"},{name:"Next Step",description:"Next Step Description"},{name:"Last Step",description:"Last Step Description"}]};const sS=["Basic","Long","WorkflowDiagram","LocalizedLong","WithTooltips"];var cS=Object.freeze(Object.defineProperty({__proto__:null,default:lS,Basic:Nm,Long:Em,WorkflowDiagram:Dm,LocalizedLong:Rm,WithTooltips:Mm,__namedExportsOrder:sS},Symbol.toStringTag,{value:"Module"}));function Lm(e){return{"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Overview.stories.mdx":gb,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Alert.stories.tsx":Xy,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Anchor.stories.tsx":nv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Badge.stories.tsx":av,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Blockquote.stories.tsx":sv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Body.stories.tsx":uv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Breadcrumbs.stories.tsx":vv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Button.stories.tsx":wv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ButtonGroup.stories.tsx":xv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Carousel.stories.tsx":Bv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Checkbox.stories.tsx":Dv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Code.stories.tsx":Av,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ColorPicker.stories.tsx":Fv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ComboBox.stories.tsx":zv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DatePicker.stories.tsx":Gv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DropdownButton.stories.tsx":Jv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DropdownMenu.stories.tsx":Xv,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ErrorPage.stories.tsx":nh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ExpandableBlock.stories.tsx":ah,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Fieldset.stories.tsx":lh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/FileUpload.stories.tsx":uh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Footer.stories.tsx":yh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Header.stories.tsx":Ch,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Headline.stories.tsx":kh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/IconButton.stories.tsx":Ph,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/IdeasButton.stories.tsx":Dh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/InformationPanel.stories.tsx":Lh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Input.stories.tsx":Hh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/InputGroup.stories.tsx":Uh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Kbd.stories.tsx":Gh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Label.stories.tsx":Jh,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledInput.stories.tsx":e0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledSelect.stories.tsx":a0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledTextarea.stories.tsx":c0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Leading.stories.tsx":m0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Modal.stories.tsx":f0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ProgressLinear.stories.tsx":h0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ProgressRadial.stories.tsx":C0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Radio.stories.tsx":k0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/RadioTileGroup.stories.tsx":P0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Select.stories.tsx":D0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SideNavigation.stories.tsx":H0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SkipToContentLink.stories.tsx":W0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Slider.stories.tsx":q0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Small.stories.tsx":Y0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SplitButton.stories.tsx":Q0,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Subheading.stories.tsx":t1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Surface.stories.tsx":o1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Table.stories.tsx":c1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tabs.stories.tsx":m1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tag.stories.tsx":g1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/TagContainer.stories.tsx":S1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Text.stories.tsx":C1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Textarea.stories.tsx":_1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tile.stories.tsx":B1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/TimePicker.stories.tsx":D1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Title.stories.tsx":L1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Toasts.stories.tsx":H1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ToggleSwitch.stories.tsx":z1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tooltip.stories.tsx":G1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tree.stories.tsx":Q1,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/UserIcon.stories.tsx":rS,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/UserIconGroup.stories.tsx":iS,"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Wizard.stories.tsx":cS}[e]}Object.assign(Lm,{keys:()=>["/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Overview.stories.mdx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Alert.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Anchor.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Badge.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Blockquote.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Body.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Breadcrumbs.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Button.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ButtonGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Carousel.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Checkbox.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Code.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ColorPicker.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ComboBox.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DatePicker.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DropdownButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DropdownMenu.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ErrorPage.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ExpandableBlock.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Fieldset.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/FileUpload.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Footer.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Header.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Headline.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/IconButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/IdeasButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/InformationPanel.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Input.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/InputGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Kbd.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Label.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledInput.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledSelect.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledTextarea.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Leading.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Modal.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ProgressLinear.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ProgressRadial.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Radio.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/RadioTileGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Select.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SideNavigation.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SkipToContentLink.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Slider.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Small.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SplitButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Subheading.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Surface.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Table.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tabs.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tag.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/TagContainer.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Text.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Textarea.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tile.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/TimePicker.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Title.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Toasts.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ToggleSwitch.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tooltip.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tree.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/UserIcon.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/UserIconGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Wizard.stories.tsx"],resolve:e=>({"/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Overview.stories.mdx":"./src/Overview.stories.mdx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Alert.stories.tsx":"./src/Alert.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Anchor.stories.tsx":"./src/Anchor.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Badge.stories.tsx":"./src/Badge.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Blockquote.stories.tsx":"./src/Blockquote.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Body.stories.tsx":"./src/Body.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Breadcrumbs.stories.tsx":"./src/Breadcrumbs.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Button.stories.tsx":"./src/Button.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ButtonGroup.stories.tsx":"./src/ButtonGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Carousel.stories.tsx":"./src/Carousel.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Checkbox.stories.tsx":"./src/Checkbox.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Code.stories.tsx":"./src/Code.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ColorPicker.stories.tsx":"./src/ColorPicker.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ComboBox.stories.tsx":"./src/ComboBox.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DatePicker.stories.tsx":"./src/DatePicker.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DropdownButton.stories.tsx":"./src/DropdownButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/DropdownMenu.stories.tsx":"./src/DropdownMenu.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ErrorPage.stories.tsx":"./src/ErrorPage.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ExpandableBlock.stories.tsx":"./src/ExpandableBlock.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Fieldset.stories.tsx":"./src/Fieldset.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/FileUpload.stories.tsx":"./src/FileUpload.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Footer.stories.tsx":"./src/Footer.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Header.stories.tsx":"./src/Header.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Headline.stories.tsx":"./src/Headline.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/IconButton.stories.tsx":"./src/IconButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/IdeasButton.stories.tsx":"./src/IdeasButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/InformationPanel.stories.tsx":"./src/InformationPanel.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Input.stories.tsx":"./src/Input.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/InputGroup.stories.tsx":"./src/InputGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Kbd.stories.tsx":"./src/Kbd.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Label.stories.tsx":"./src/Label.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledInput.stories.tsx":"./src/LabeledInput.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledSelect.stories.tsx":"./src/LabeledSelect.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/LabeledTextarea.stories.tsx":"./src/LabeledTextarea.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Leading.stories.tsx":"./src/Leading.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Modal.stories.tsx":"./src/Modal.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ProgressLinear.stories.tsx":"./src/ProgressLinear.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ProgressRadial.stories.tsx":"./src/ProgressRadial.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Radio.stories.tsx":"./src/Radio.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/RadioTileGroup.stories.tsx":"./src/RadioTileGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Select.stories.tsx":"./src/Select.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SideNavigation.stories.tsx":"./src/SideNavigation.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SkipToContentLink.stories.tsx":"./src/SkipToContentLink.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Slider.stories.tsx":"./src/Slider.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Small.stories.tsx":"./src/Small.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/SplitButton.stories.tsx":"./src/SplitButton.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Subheading.stories.tsx":"./src/Subheading.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Surface.stories.tsx":"./src/Surface.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Table.stories.tsx":"./src/Table.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tabs.stories.tsx":"./src/Tabs.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tag.stories.tsx":"./src/Tag.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/TagContainer.stories.tsx":"./src/TagContainer.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Text.stories.tsx":"./src/Text.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Textarea.stories.tsx":"./src/Textarea.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tile.stories.tsx":"./src/Tile.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/TimePicker.stories.tsx":"./src/TimePicker.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Title.stories.tsx":"./src/Title.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Toasts.stories.tsx":"./src/Toasts.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/ToggleSwitch.stories.tsx":"./src/ToggleSwitch.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tooltip.stories.tsx":"./src/Tooltip.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Tree.stories.tsx":"./src/Tree.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/UserIcon.stories.tsx":"./src/UserIcon.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/UserIconGroup.stories.tsx":"./src/UserIconGroup.stories.tsx","/home/runner/work/iTwinUI-react/iTwinUI-react/apps/storybook/src/Wizard.stories.tsx":"./src/Wizard.stories.tsx"})[e]});function dS(e){e(Lm,{hot:!1},!1)}const uS=[Kp,Jp,Yp,Zp,Xp,Qp,eb,nb,tb,ub].filter(Boolean);uS.forEach(e=>{Object.keys(e).forEach(t=>{const a=e[t];switch(t){case"args":case"argTypes":return qp.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(a));case"decorators":return a.forEach(n=>Gp(n,!1));case"loaders":return a.forEach(n=>Vp(n,!1));case"parameters":return Ei(f({},a),!1);case"argTypesEnhancers":return a.forEach(n=>Wp(n));case"argsEnhancers":return a.forEach(n=>zp(n));case"render":return Up(a);case"globals":case"globalTypes":{const n={};return n[t]=a,Ei(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(t+" was not supported :( !")}})});dS(rb);
//# sourceMappingURL=iframe.75c5d47a.js.map
