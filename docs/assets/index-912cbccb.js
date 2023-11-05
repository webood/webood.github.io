(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function c6(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const J0={},i1=[],c9=()=>{},vi=()=>!1,xi=/^on[^a-z]/,c4=n=>xi.test(n),u6=n=>n.startsWith("onUpdate:"),x5=Object.assign,f6=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Mi=Object.prototype.hasOwnProperty,j0=(n,e)=>Mi.call(n,e),D0=Array.isArray,r1=n=>u4(n)==="[object Map]",Ct=n=>u4(n)==="[object Set]",H0=n=>typeof n=="function",l5=n=>typeof n=="string",h6=n=>typeof n=="symbol",e5=n=>n!==null&&typeof n=="object",Lt=n=>e5(n)&&H0(n.then)&&H0(n.catch),Ut=Object.prototype.toString,u4=n=>Ut.call(n),Si=n=>u4(n).slice(8,-1),Dt=n=>u4(n)==="[object Object]",d6=n=>l5(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,j7=c6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),f4=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ei=/-(\w)/g,v9=f4(n=>n.replace(Ei,(e,t)=>t?t.toUpperCase():"")),bi=/\B([A-Z])/g,m1=f4(n=>n.replace(bi,"-$1").toLowerCase()),h4=f4(n=>n.charAt(0).toUpperCase()+n.slice(1)),I4=f4(n=>n?`on${h4(n)}`:""),Q7=(n,e)=>!Object.is(n,e),O4=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},e4=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Ti=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $6;const D3=()=>$6||($6=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function p6(n){if(D0(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=l5(i)?Pi(i):p6(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(l5(n))return n;if(e5(n))return n}}const Ai=/;(?![^(]*\))/g,wi=/:([^]+)/,Ri=/\/\*[^]*?\*\//g;function Pi(n){const e={};return n.replace(Ri,"").split(Ai).forEach(t=>{if(t){const i=t.split(wi);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function m6(n){let e="";if(l5(n))e=n;else if(D0(n))for(let t=0;t<n.length;t++){const i=m6(n[t]);i&&(e+=i+" ")}else if(e5(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ci="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Li=c6(Ci);function Nt(n){return!!n||n===""}const Ui=n=>l5(n)?n:n==null?"":D0(n)||e5(n)&&(n.toString===Ut||!H0(n.toString))?JSON.stringify(n,It,2):String(n),It=(n,e)=>e&&e.__v_isRef?It(n,e.value):r1(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Ct(e)?{[`Set(${e.size})`]:[...e.values()]}:e5(e)&&!D0(e)&&!Dt(e)?String(e):e;let i9;class Di{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i9,!e&&i9&&(this.index=(i9.scopes||(i9.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i9;try{return i9=this,e()}finally{i9=t}}}on(){i9=this}off(){i9=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ni(n,e=i9){e&&e.active&&e.effects.push(n)}function Ii(){return i9}const g6=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Ot=n=>(n.w&e2)>0,Ft=n=>(n.n&e2)>0,Oi=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=e2},Fi=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Ot(r)&&!Ft(r)?r.delete(n):e[t++]=r,r.w&=~e2,r.n&=~e2}e.length=t}},N3=new WeakMap;let O1=0,e2=1;const I3=30;let r9;const m2=Symbol(""),O3=Symbol("");class _6{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ni(this,i)}run(){if(!this.active)return this.fn();let e=r9,t=K9;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=r9,r9=this,K9=!0,e2=1<<++O1,O1<=I3?Oi(this):Z6(this),this.fn()}finally{O1<=I3&&Fi(this),e2=1<<--O1,r9=this.parent,K9=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){r9===this?this.deferStop=!0:this.active&&(Z6(this),this.onStop&&this.onStop(),this.active=!1)}}function Z6(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let K9=!0;const Bt=[];function g1(){Bt.push(K9),K9=!1}function _1(){const n=Bt.pop();K9=n===void 0?!0:n}function G5(n,e,t){if(K9&&r9){let i=N3.get(n);i||N3.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=g6()),zt(r)}}function zt(n,e){let t=!1;O1<=I3?Ft(n)||(n.n|=e2,t=!Ot(n)):t=!n.has(r9),t&&(n.add(r9),r9.deps.push(n))}function B9(n,e,t,i,r,s){const a=N3.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&D0(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":D0(n)?d6(t)&&o.push(a.get("length")):(o.push(a.get(m2)),r1(n)&&o.push(a.get(O3)));break;case"delete":D0(n)||(o.push(a.get(m2)),r1(n)&&o.push(a.get(O3)));break;case"set":r1(n)&&o.push(a.get(m2));break}if(o.length===1)o[0]&&F3(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);F3(g6(l))}}function F3(n,e){const t=D0(n)?n:[...n];for(const i of t)i.computed&&J6(i);for(const i of t)i.computed||J6(i)}function J6(n,e){(n!==r9||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Bi=c6("__proto__,__v_isRef,__isVue"),Ht=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(h6)),zi=y6(),Hi=y6(!1,!0),Gi=y6(!0),Q6=ki();function ki(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=K0(this);for(let s=0,a=this.length;s<a;s++)G5(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(K0)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){g1();const i=K0(this)[e].apply(this,t);return _1(),i}}),n}function Vi(n){const e=K0(this);return G5(e,"has",n),e.hasOwnProperty(n)}function y6(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?sr:Xt:e?Wt:Vt).get(i))return i;const a=D0(i);if(!n){if(a&&j0(Q6,r))return Reflect.get(Q6,r,s);if(r==="hasOwnProperty")return Vi}const o=Reflect.get(i,r,s);return(h6(r)?Ht.has(r):Bi(r))||(n||G5(i,"get",r),e)?o:D5(o)?a&&d6(r)?o:o.value:e5(o)?n?qt(o):p4(o):o}}const Wi=Gt(),Xi=Gt(!0);function Gt(n=!1){return function(t,i,r,s){let a=t[i];if(X1(a)&&D5(a)&&!D5(r))return!1;if(!n&&(!B3(r)&&!X1(r)&&(a=K0(a),r=K0(r)),!D0(t)&&D5(a)&&!D5(r)))return a.value=r,!0;const o=D0(t)&&d6(i)?Number(i)<t.length:j0(t,i),l=Reflect.set(t,i,r,s);return t===K0(s)&&(o?Q7(r,a)&&B9(t,"set",i,r):B9(t,"add",i,r)),l}}function qi(n,e){const t=j0(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&B9(n,"delete",e,void 0),i}function ji(n,e){const t=Reflect.has(n,e);return(!h6(e)||!Ht.has(e))&&G5(n,"has",e),t}function Yi(n){return G5(n,"iterate",D0(n)?"length":m2),Reflect.ownKeys(n)}const kt={get:zi,set:Wi,deleteProperty:qi,has:ji,ownKeys:Yi},Ki={get:Gi,set(n,e){return!0},deleteProperty(n,e){return!0}},$i=x5({},kt,{get:Hi,set:Xi}),v6=n=>n,d4=n=>Reflect.getPrototypeOf(n);function u7(n,e,t=!1,i=!1){n=n.__v_raw;const r=K0(n),s=K0(e);t||(e!==s&&G5(r,"get",e),G5(r,"get",s));const{has:a}=d4(r),o=i?v6:t?E6:S6;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function f7(n,e=!1){const t=this.__v_raw,i=K0(t),r=K0(n);return e||(n!==r&&G5(i,"has",n),G5(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function h7(n,e=!1){return n=n.__v_raw,!e&&G5(K0(n),"iterate",m2),Reflect.get(n,"size",n)}function e8(n){n=K0(n);const e=K0(this);return d4(e).has.call(e,n)||(e.add(n),B9(e,"add",n,n)),this}function t8(n,e){e=K0(e);const t=K0(this),{has:i,get:r}=d4(t);let s=i.call(t,n);s||(n=K0(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?Q7(e,a)&&B9(t,"set",n,e):B9(t,"add",n,e),this}function n8(n){const e=K0(this),{has:t,get:i}=d4(e);let r=t.call(e,n);r||(n=K0(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&B9(e,"delete",n,void 0),s}function i8(){const n=K0(this),e=n.size!==0,t=n.clear();return e&&B9(n,"clear",void 0,void 0),t}function d7(n,e){return function(i,r){const s=this,a=s.__v_raw,o=K0(a),l=e?v6:n?E6:S6;return!n&&G5(o,"iterate",m2),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function p7(n,e,t){return function(...i){const r=this.__v_raw,s=K0(r),a=r1(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?v6:e?E6:S6;return!e&&G5(s,"iterate",l?O3:m2),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function H9(n){return function(...e){return n==="delete"?!1:this}}function Zi(){const n={get(s){return u7(this,s)},get size(){return h7(this)},has:f7,add:e8,set:t8,delete:n8,clear:i8,forEach:d7(!1,!1)},e={get(s){return u7(this,s,!1,!0)},get size(){return h7(this)},has:f7,add:e8,set:t8,delete:n8,clear:i8,forEach:d7(!1,!0)},t={get(s){return u7(this,s,!0)},get size(){return h7(this,!0)},has(s){return f7.call(this,s,!0)},add:H9("add"),set:H9("set"),delete:H9("delete"),clear:H9("clear"),forEach:d7(!0,!1)},i={get(s){return u7(this,s,!0,!0)},get size(){return h7(this,!0)},has(s){return f7.call(this,s,!0)},add:H9("add"),set:H9("set"),delete:H9("delete"),clear:H9("clear"),forEach:d7(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=p7(s,!1,!1),t[s]=p7(s,!0,!1),e[s]=p7(s,!1,!0),i[s]=p7(s,!0,!0)}),[n,t,e,i]}const[Ji,Qi,er,tr]=Zi();function x6(n,e){const t=e?n?tr:er:n?Qi:Ji;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(j0(t,r)&&r in i?t:i,r,s)}const nr={get:x6(!1,!1)},ir={get:x6(!1,!0)},rr={get:x6(!0,!1)},Vt=new WeakMap,Wt=new WeakMap,Xt=new WeakMap,sr=new WeakMap;function or(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ar(n){return n.__v_skip||!Object.isExtensible(n)?0:or(Si(n))}function p4(n){return X1(n)?n:M6(n,!1,kt,nr,Vt)}function lr(n){return M6(n,!1,$i,ir,Wt)}function qt(n){return M6(n,!0,Ki,rr,Xt)}function M6(n,e,t,i,r){if(!e5(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=ar(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function s1(n){return X1(n)?s1(n.__v_raw):!!(n&&n.__v_isReactive)}function X1(n){return!!(n&&n.__v_isReadonly)}function B3(n){return!!(n&&n.__v_isShallow)}function jt(n){return s1(n)||X1(n)}function K0(n){const e=n&&n.__v_raw;return e?K0(e):n}function Yt(n){return e4(n,"__v_skip",!0),n}const S6=n=>e5(n)?p4(n):n,E6=n=>e5(n)?qt(n):n;function cr(n){K9&&r9&&(n=K0(n),zt(n.dep||(n.dep=g6())))}function ur(n,e){n=K0(n);const t=n.dep;t&&F3(t)}function D5(n){return!!(n&&n.__v_isRef===!0)}function z3(n){return D5(n)?n.value:n}const fr={get:(n,e,t)=>z3(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return D5(r)&&!D5(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Kt(n){return s1(n)?n:new Proxy(n,fr)}class hr{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _6(e,()=>{this._dirty||(this._dirty=!0,ur(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=K0(this);return cr(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function dr(n,e,t=!1){let i,r;const s=H0(n);return s?(i=n,r=c9):(i=n.get,r=n.set),new hr(i,r,s||!r,t)}function $9(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){m4(s,e,t)}return r}function u9(n,e,t,i){if(H0(n)){const s=$9(n,e,t,i);return s&&Lt(s)&&s.catch(a=>{m4(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(u9(n[s],e,t,i));return r}function m4(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){$9(l,null,10,[n,a,o]);return}}pr(n,t,r,i)}function pr(n,e,t,i=!0){console.error(n)}let q1=!1,H3=!1;const T5=[];let y9=0;const o1=[];let U9=null,h2=0;const $t=Promise.resolve();let b6=null;function Zt(n){const e=b6||$t;return n?e.then(this?n.bind(this):n):e}function mr(n){let e=y9+1,t=T5.length;for(;e<t;){const i=e+t>>>1;j1(T5[i])<n?e=i+1:t=i}return e}function T6(n){(!T5.length||!T5.includes(n,q1&&n.allowRecurse?y9+1:y9))&&(n.id==null?T5.push(n):T5.splice(mr(n.id),0,n),Jt())}function Jt(){!q1&&!H3&&(H3=!0,b6=$t.then(en))}function gr(n){const e=T5.indexOf(n);e>y9&&T5.splice(e,1)}function _r(n){D0(n)?o1.push(...n):(!U9||!U9.includes(n,n.allowRecurse?h2+1:h2))&&o1.push(n),Jt()}function r8(n,e=q1?y9+1:0){for(;e<T5.length;e++){const t=T5[e];t&&t.pre&&(T5.splice(e,1),e--,t())}}function Qt(n){if(o1.length){const e=[...new Set(o1)];if(o1.length=0,U9){U9.push(...e);return}for(U9=e,U9.sort((t,i)=>j1(t)-j1(i)),h2=0;h2<U9.length;h2++)U9[h2]();U9=null,h2=0}}const j1=n=>n.id==null?1/0:n.id,yr=(n,e)=>{const t=j1(n)-j1(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function en(n){H3=!1,q1=!0,T5.sort(yr);const e=c9;try{for(y9=0;y9<T5.length;y9++){const t=T5[y9];t&&t.active!==!1&&$9(t,null,14)}}finally{y9=0,T5.length=0,Qt(),q1=!1,b6=null,(T5.length||o1.length)&&en()}}function vr(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||J0;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||J0;h&&(r=t.map(d=>l5(d)?d.trim():d)),f&&(r=t.map(Ti))}let o,l=i[o=I4(e)]||i[o=I4(v9(e))];!l&&s&&(l=i[o=I4(m1(e))]),l&&u9(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,u9(c,n,6,r)}}function tn(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!H0(n)){const l=c=>{const u=tn(c,e,!0);u&&(o=!0,x5(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(e5(n)&&i.set(n,null),null):(D0(s)?s.forEach(l=>a[l]=null):x5(a,s),e5(n)&&i.set(n,a),a)}function g4(n,e){return!n||!c4(e)?!1:(e=e.slice(2).replace(/Once$/,""),j0(n,e[0].toLowerCase()+e.slice(1))||j0(n,m1(e))||j0(n,e))}let a9=null,_4=null;function t4(n){const e=a9;return a9=n,_4=n&&n.type.__scopeId||null,e}function xr(n){_4=n}function Mr(){_4=null}function Sr(n,e=a9,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&m8(-1);const s=t4(e);let a;try{a=n(...r)}finally{t4(s),i._d&&m8(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function F4(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n;let m,p;const b=t4(n);try{if(t.shapeFlag&4){const T=r||i;m=g9(u.call(T,T,f,s,d,h,g)),p=l}else{const T=e;m=g9(T.length>1?T(s,{attrs:l,slots:o,emit:c}):T(s,null)),p=e.props?l:Er(l)}}catch(T){H1.length=0,m4(T,n,1),m=_5(S2)}let y=m;if(p&&_!==!1){const T=Object.keys(p),{shapeFlag:A}=y;T.length&&A&7&&(a&&T.some(u6)&&(p=br(p,a)),y=c1(y,p))}return t.dirs&&(y=c1(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,t4(b),m}const Er=n=>{let e;for(const t in n)(t==="class"||t==="style"||c4(t))&&((e||(e={}))[t]=n[t]);return e},br=(n,e)=>{const t={};for(const i in n)(!u6(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tr(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?s8(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!g4(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?s8(i,a,c):!0:!!a;return!1}function s8(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!g4(t,s))return!0}return!1}function Ar({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const wr=n=>n.__isSuspense;function Rr(n,e){e&&e.pendingBranch?D0(n)?e.effects.push(...n):e.effects.push(n):_r(n)}const m7={};function B4(n,e,t){return nn(n,e,t)}function nn(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=J0){var o;const l=Ii()===((o=M5)==null?void 0:o.scope)?M5:null;let c,u=!1,f=!1;if(D5(n)?(c=()=>n.value,u=B3(n)):s1(n)?(c=()=>n,i=!0):D0(n)?(f=!0,u=n.some(T=>s1(T)||B3(T)),c=()=>n.map(T=>{if(D5(T))return T.value;if(s1(T))return e1(T);if(H0(T))return $9(T,l,2)})):H0(n)?e?c=()=>$9(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),u9(n,l,3,[d])}:c=c9,e&&i){const T=c;c=()=>e1(T())}let h,d=T=>{h=b.onStop=()=>{$9(T,l,4)}},g;if(K1)if(d=c9,e?t&&u9(e,l,3,[c(),f?[]:void 0,d]):c(),r==="sync"){const T=bs();g=T.__watcherHandles||(T.__watcherHandles=[])}else return c9;let _=f?new Array(n.length).fill(m7):m7;const m=()=>{if(b.active)if(e){const T=b.run();(i||u||(f?T.some((A,P)=>Q7(A,_[P])):Q7(T,_)))&&(h&&h(),u9(e,l,3,[T,_===m7?void 0:f&&_[0]===m7?[]:_,d]),_=T)}else b.run()};m.allowRecurse=!!e;let p;r==="sync"?p=m:r==="post"?p=()=>I5(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),p=()=>T6(m));const b=new _6(c,p);e?t?m():_=b.run():r==="post"?I5(b.run.bind(b),l&&l.suspense):b.run();const y=()=>{b.stop(),l&&l.scope&&f6(l.scope.effects,b)};return g&&g.push(y),y}function Pr(n,e,t){const i=this.proxy,r=l5(n)?n.includes(".")?rn(i,n):()=>i[n]:n.bind(i,i);let s;H0(e)?s=e:(s=e.handler,t=e);const a=M5;u1(this);const o=nn(r,s.bind(i),t);return a?u1(a):_2(),o}function rn(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function e1(n,e){if(!e5(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),D5(n))e1(n.value,e);else if(D0(n))for(let t=0;t<n.length;t++)e1(n[t],e);else if(Ct(n)||r1(n))n.forEach(t=>{e1(t,e)});else if(Dt(n))for(const t in n)e1(n[t],e);return n}function r2(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(g1(),u9(l,t,8,[n.el,o,n,e]),_1())}}function sn(n,e){return H0(n)?(()=>x5({name:n.name},e,{setup:n}))():n}const Y7=n=>!!n.type.__asyncLoader,on=n=>n.type.__isKeepAlive;function Cr(n,e){an(n,"a",e)}function Lr(n,e){an(n,"da",e)}function an(n,e,t=M5){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(y4(e,i,t),t){let r=t.parent;for(;r&&r.parent;)on(r.parent.vnode)&&Ur(i,e,t,r),r=r.parent}}function Ur(n,e,t,i){const r=y4(e,n,i,!0);ln(()=>{f6(i[e],r)},t)}function y4(n,e,t=M5,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;g1(),u1(t);const o=u9(e,t,n,a);return _2(),_1(),o});return i?r.unshift(s):r.push(s),s}}const z9=n=>(e,t=M5)=>(!K1||n==="sp")&&y4(n,(...i)=>e(...i),t),Dr=z9("bm"),A6=z9("m"),Nr=z9("bu"),Ir=z9("u"),Or=z9("bum"),ln=z9("um"),Fr=z9("sp"),Br=z9("rtg"),zr=z9("rtc");function Hr(n,e=M5){y4("ec",n,e)}const cn="components",un=Symbol.for("v-ndc");function Gr(n){return l5(n)?kr(cn,n,!1)||n:n||un}function kr(n,e,t=!0,i=!1){const r=a9||M5;if(r){const s=r.type;if(n===cn){const o=xs(s,!1);if(o&&(o===e||o===v9(e)||o===h4(v9(e))))return s}const a=o8(r[n]||s[n],e)||o8(r.appContext[n],e);return!a&&i?s:a}}function o8(n,e){return n&&(n[e]||n[v9(e)]||n[h4(v9(e))])}function Vr(n,e,t,i){let r;const s=t&&t[i];if(D0(n)||l5(n)){r=new Array(n.length);for(let a=0,o=n.length;a<o;a++)r[a]=e(n[a],a,void 0,s&&s[a])}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(e5(n))if(n[Symbol.iterator])r=Array.from(n,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(n);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(n[c],c,o,s&&s[o])}}else r=[];return t&&(t[i]=r),r}const G3=n=>n?Mn(n)?U6(n)||n.proxy:G3(n.parent):null,z1=x5(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>G3(n.parent),$root:n=>G3(n.root),$emit:n=>n.emit,$options:n=>w6(n),$forceUpdate:n=>n.f||(n.f=()=>T6(n.update)),$nextTick:n=>n.n||(n.n=Zt.bind(n.proxy)),$watch:n=>Pr.bind(n)}),z4=(n,e)=>n!==J0&&!n.__isScriptSetup&&j0(n,e),Wr={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(z4(i,e))return a[e]=1,i[e];if(r!==J0&&j0(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&j0(c,e))return a[e]=3,s[e];if(t!==J0&&j0(t,e))return a[e]=4,t[e];k3&&(a[e]=0)}}const u=z1[e];let f,h;if(u)return e==="$attrs"&&G5(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==J0&&j0(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,j0(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return z4(r,e)?(r[e]=t,!0):i!==J0&&j0(i,e)?(i[e]=t,!0):j0(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==J0&&j0(n,a)||z4(e,a)||(o=s[0])&&j0(o,a)||j0(i,a)||j0(z1,a)||j0(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:j0(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function a8(n){return D0(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let k3=!0;function Xr(n){const e=w6(n),t=n.proxy,i=n.ctx;k3=!1,e.beforeCreate&&l8(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:y,unmounted:T,render:A,renderTracked:P,renderTriggered:C,errorCaptured:I,serverPrefetch:M,expose:S,inheritAttrs:O,components:X,directives:U,filters:F}=e;if(c&&qr(c,i,null),a)for(const H in a){const k=a[H];H0(k)&&(i[H]=k.bind(t))}if(r){const H=r.call(t,t);e5(H)&&(n.data=p4(H))}if(k3=!0,s)for(const H in s){const k=s[H],o0=H0(k)?k.bind(t,t):H0(k.get)?k.get.bind(t,t):c9,a0=!H0(k)&&H0(k.set)?k.set.bind(t):c9,V=Ss({get:o0,set:a0});Object.defineProperty(i,H,{enumerable:!0,configurable:!0,get:()=>V.value,set:Q=>V.value=Q})}if(o)for(const H in o)fn(o[H],i,t,H);if(l){const H=H0(l)?l.call(t):l;Reflect.ownKeys(H).forEach(k=>{Jr(k,H[k])})}u&&l8(u,n,"c");function Z(H,k){D0(k)?k.forEach(o0=>H(o0.bind(t))):k&&H(k.bind(t))}if(Z(Dr,f),Z(A6,h),Z(Nr,d),Z(Ir,g),Z(Cr,_),Z(Lr,m),Z(Hr,I),Z(zr,P),Z(Br,C),Z(Or,b),Z(ln,T),Z(Fr,M),D0(S))if(S.length){const H=n.exposed||(n.exposed={});S.forEach(k=>{Object.defineProperty(H,k,{get:()=>t[k],set:o0=>t[k]=o0})})}else n.exposed||(n.exposed={});A&&n.render===c9&&(n.render=A),O!=null&&(n.inheritAttrs=O),X&&(n.components=X),U&&(n.directives=U)}function qr(n,e,t=c9){D0(n)&&(n=V3(n));for(const i in n){const r=n[i];let s;e5(r)?"default"in r?s=K7(r.from||i,r.default,!0):s=K7(r.from||i):s=K7(r),D5(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function l8(n,e,t){u9(D0(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fn(n,e,t,i){const r=i.includes(".")?rn(t,i):()=>t[i];if(l5(n)){const s=e[n];H0(s)&&B4(r,s)}else if(H0(n))B4(r,n.bind(t));else if(e5(n))if(D0(n))n.forEach(s=>fn(s,e,t,i));else{const s=H0(n.handler)?n.handler.bind(t):e[n.handler];H0(s)&&B4(r,s,n)}}function w6(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>n4(l,c,a,!0)),n4(l,e,a)),e5(e)&&s.set(e,l),l}function n4(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&n4(n,s,t,!0),r&&r.forEach(a=>n4(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=jr[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const jr={data:c8,props:u8,emits:u8,methods:F1,computed:F1,beforeCreate:C5,created:C5,beforeMount:C5,mounted:C5,beforeUpdate:C5,updated:C5,beforeDestroy:C5,beforeUnmount:C5,destroyed:C5,unmounted:C5,activated:C5,deactivated:C5,errorCaptured:C5,serverPrefetch:C5,components:F1,directives:F1,watch:Kr,provide:c8,inject:Yr};function c8(n,e){return e?n?function(){return x5(H0(n)?n.call(this,this):n,H0(e)?e.call(this,this):e)}:e:n}function Yr(n,e){return F1(V3(n),V3(e))}function V3(n){if(D0(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function C5(n,e){return n?[...new Set([].concat(n,e))]:e}function F1(n,e){return n?x5(Object.create(null),n,e):e}function u8(n,e){return n?D0(n)&&D0(e)?[...new Set([...n,...e])]:x5(Object.create(null),a8(n),a8(e??{})):e}function Kr(n,e){if(!n)return e;if(!e)return n;const t=x5(Object.create(null),n);for(const i in e)t[i]=C5(n[i],e[i]);return t}function hn(){return{app:null,config:{isNativeTag:vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $r=0;function Zr(n,e){return function(i,r=null){H0(i)||(i=x5({},i)),r!=null&&!e5(r)&&(r=null);const s=hn(),a=new Set;let o=!1;const l=s.app={_uid:$r++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Ts,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&H0(c.install)?(a.add(c),c.install(l,...u)):H0(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=_5(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,U6(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){i4=l;try{return c()}finally{i4=null}}};return l}}let i4=null;function Jr(n,e){if(M5){let t=M5.provides;const i=M5.parent&&M5.parent.provides;i===t&&(t=M5.provides=Object.create(i)),t[n]=e}}function K7(n,e,t=!1){const i=M5||a9;if(i||i4){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:i4._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&H0(e)?e.call(i&&i.proxy):e}}function Qr(n,e,t,i=!1){const r={},s={};e4(s,x4,1),n.propsDefaults=Object.create(null),dn(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:lr(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function es(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=K0(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(g4(n.emitsOptions,h))continue;const d=e[h];if(l)if(j0(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=v9(h);r[g]=W3(l,o,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{dn(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!j0(e,f)&&((u=m1(f))===f||!j0(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=W3(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!j0(e,f))&&(delete s[f],c=!0)}c&&B9(n,"set","$attrs")}function dn(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(j7(l))continue;const c=e[l];let u;r&&j0(r,u=v9(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:g4(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=K0(t),c=o||J0;for(let u=0;u<s.length;u++){const f=s[u];t[f]=W3(r,l,f,c[f],n,!j0(c,f))}}return a}function W3(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=j0(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&H0(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(u1(r),i=c[t]=l.call(null,e),_2())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===m1(t))&&(i=!0))}return i}function pn(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!H0(n)){const u=f=>{l=!0;const[h,d]=pn(f,e,!0);x5(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return e5(n)&&i.set(n,i1),i1;if(D0(s))for(let u=0;u<s.length;u++){const f=v9(s[u]);f8(f)&&(a[f]=J0)}else if(s)for(const u in s){const f=v9(u);if(f8(f)){const h=s[u],d=a[f]=D0(h)||H0(h)?{type:h}:x5({},h);if(d){const g=p8(Boolean,d.type),_=p8(String,d.type);d[0]=g>-1,d[1]=_<0||g<_,(g>-1||j0(d,"default"))&&o.push(f)}}}const c=[a,o];return e5(n)&&i.set(n,c),c}function f8(n){return n[0]!=="$"}function h8(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function d8(n,e){return h8(n)===h8(e)}function p8(n,e){return D0(e)?e.findIndex(t=>d8(t,n)):H0(e)&&d8(e,n)?0:-1}const mn=n=>n[0]==="_"||n==="$stable",R6=n=>D0(n)?n.map(g9):[g9(n)],ts=(n,e,t)=>{if(e._n)return e;const i=Sr((...r)=>R6(e(...r)),t);return i._c=!1,i},gn=(n,e,t)=>{const i=n._ctx;for(const r in n){if(mn(r))continue;const s=n[r];if(H0(s))e[r]=ts(r,s,i);else if(s!=null){const a=R6(s);e[r]=()=>a}}},_n=(n,e)=>{const t=R6(e);n.slots.default=()=>t},ns=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=K0(e),e4(e,"_",t)):gn(e,n.slots={})}else n.slots={},e&&_n(n,e);e4(n.slots,x4,1)},is=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=J0;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(x5(r,e),!t&&o===1&&delete r._):(s=!e.$stable,gn(e,r)),a=e}else e&&(_n(n,e),a={default:1});if(s)for(const o in r)!mn(o)&&!(o in a)&&delete r[o]};function X3(n,e,t,i,r=!1){if(D0(n)){n.forEach((h,d)=>X3(h,e&&(D0(e)?e[d]:e),t,i,r));return}if(Y7(i)&&!r)return;const s=i.shapeFlag&4?U6(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===J0?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(l5(c)?(u[c]=null,j0(f,c)&&(f[c]=null)):D5(c)&&(c.value=null)),H0(l))$9(l,o,12,[a,u]);else{const h=l5(l),d=D5(l);if(h||d){const g=()=>{if(n.f){const _=h?j0(f,l)?f[l]:u[l]:l.value;r?D0(_)&&f6(_,s):D0(_)?_.includes(s)||_.push(s):h?(u[l]=[s],j0(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,j0(f,l)&&(f[l]=a)):d&&(l.value=a,n.k&&(u[n.k]=a))};a?(g.id=-1,I5(g,t)):g()}}}const I5=Rr;function rs(n){return ss(n)}function ss(n,e){const t=D3();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=c9,insertStaticContent:g}=n,_=(v,D,B,Y=null,W=null,c0=null,u0=!1,J=null,l0=!!D.dynamicChildren)=>{if(v===D)return;v&&!E1(v,D)&&(Y=L0(v),Q(v,W,c0,!0),v=null),D.patchFlag===-2&&(l0=!1,D.dynamicChildren=null);const{type:s0,ref:v0,shapeFlag:E}=D;switch(s0){case v4:m(v,D,B,Y);break;case S2:p(v,D,B,Y);break;case H4:v==null&&b(D,B,Y,u0);break;case m9:X(v,D,B,Y,W,c0,u0,J,l0);break;default:E&1?A(v,D,B,Y,W,c0,u0,J,l0):E&6?U(v,D,B,Y,W,c0,u0,J,l0):(E&64||E&128)&&s0.process(v,D,B,Y,W,c0,u0,J,l0,G0)}v0!=null&&W&&X3(v0,v&&v.ref,c0,D||v,!D)},m=(v,D,B,Y)=>{if(v==null)i(D.el=o(D.children),B,Y);else{const W=D.el=v.el;D.children!==v.children&&c(W,D.children)}},p=(v,D,B,Y)=>{v==null?i(D.el=l(D.children||""),B,Y):D.el=v.el},b=(v,D,B,Y)=>{[v.el,v.anchor]=g(v.children,D,B,Y,v.el,v.anchor)},y=({el:v,anchor:D},B,Y)=>{let W;for(;v&&v!==D;)W=h(v),i(v,B,Y),v=W;i(D,B,Y)},T=({el:v,anchor:D})=>{let B;for(;v&&v!==D;)B=h(v),r(v),v=B;r(D)},A=(v,D,B,Y,W,c0,u0,J,l0)=>{u0=u0||D.type==="svg",v==null?P(D,B,Y,W,c0,u0,J,l0):M(v,D,W,c0,u0,J,l0)},P=(v,D,B,Y,W,c0,u0,J)=>{let l0,s0;const{type:v0,props:E,shapeFlag:x,transition:z,dirs:e0}=v;if(l0=v.el=a(v.type,c0,E&&E.is,E),x&8?u(l0,v.children):x&16&&I(v.children,l0,null,Y,W,c0&&v0!=="foreignObject",u0,J),e0&&r2(v,null,Y,"created"),C(l0,v,v.scopeId,u0,Y),E){for(const R in E)R!=="value"&&!j7(R)&&s(l0,R,null,E[R],c0,v.children,Y,W,b0);"value"in E&&s(l0,"value",null,E.value),(s0=E.onVnodeBeforeMount)&&d9(s0,Y,v)}e0&&r2(v,null,Y,"beforeMount");const r0=(!W||W&&!W.pendingBranch)&&z&&!z.persisted;r0&&z.beforeEnter(l0),i(l0,D,B),((s0=E&&E.onVnodeMounted)||r0||e0)&&I5(()=>{s0&&d9(s0,Y,v),r0&&z.enter(l0),e0&&r2(v,null,Y,"mounted")},W)},C=(v,D,B,Y,W)=>{if(B&&d(v,B),Y)for(let c0=0;c0<Y.length;c0++)d(v,Y[c0]);if(W){let c0=W.subTree;if(D===c0){const u0=W.vnode;C(v,u0,u0.scopeId,u0.slotScopeIds,W.parent)}}},I=(v,D,B,Y,W,c0,u0,J,l0=0)=>{for(let s0=l0;s0<v.length;s0++){const v0=v[s0]=J?X9(v[s0]):g9(v[s0]);_(null,v0,D,B,Y,W,c0,u0,J)}},M=(v,D,B,Y,W,c0,u0)=>{const J=D.el=v.el;let{patchFlag:l0,dynamicChildren:s0,dirs:v0}=D;l0|=v.patchFlag&16;const E=v.props||J0,x=D.props||J0;let z;B&&s2(B,!1),(z=x.onVnodeBeforeUpdate)&&d9(z,B,D,v),v0&&r2(D,v,B,"beforeUpdate"),B&&s2(B,!0);const e0=W&&D.type!=="foreignObject";if(s0?S(v.dynamicChildren,s0,J,B,Y,e0,c0):u0||k(v,D,J,null,B,Y,e0,c0,!1),l0>0){if(l0&16)O(J,D,E,x,B,Y,W);else if(l0&2&&E.class!==x.class&&s(J,"class",null,x.class,W),l0&4&&s(J,"style",E.style,x.style,W),l0&8){const r0=D.dynamicProps;for(let R=0;R<r0.length;R++){const t0=r0[R],f0=E[t0],K=x[t0];(K!==f0||t0==="value")&&s(J,t0,f0,K,W,v.children,B,Y,b0)}}l0&1&&v.children!==D.children&&u(J,D.children)}else!u0&&s0==null&&O(J,D,E,x,B,Y,W);((z=x.onVnodeUpdated)||v0)&&I5(()=>{z&&d9(z,B,D,v),v0&&r2(D,v,B,"updated")},Y)},S=(v,D,B,Y,W,c0,u0)=>{for(let J=0;J<D.length;J++){const l0=v[J],s0=D[J],v0=l0.el&&(l0.type===m9||!E1(l0,s0)||l0.shapeFlag&70)?f(l0.el):B;_(l0,s0,v0,null,Y,W,c0,u0,!0)}},O=(v,D,B,Y,W,c0,u0)=>{if(B!==Y){if(B!==J0)for(const J in B)!j7(J)&&!(J in Y)&&s(v,J,B[J],null,u0,D.children,W,c0,b0);for(const J in Y){if(j7(J))continue;const l0=Y[J],s0=B[J];l0!==s0&&J!=="value"&&s(v,J,s0,l0,u0,D.children,W,c0,b0)}"value"in Y&&s(v,"value",B.value,Y.value)}},X=(v,D,B,Y,W,c0,u0,J,l0)=>{const s0=D.el=v?v.el:o(""),v0=D.anchor=v?v.anchor:o("");let{patchFlag:E,dynamicChildren:x,slotScopeIds:z}=D;z&&(J=J?J.concat(z):z),v==null?(i(s0,B,Y),i(v0,B,Y),I(D.children,B,v0,W,c0,u0,J,l0)):E>0&&E&64&&x&&v.dynamicChildren?(S(v.dynamicChildren,x,B,W,c0,u0,J),(D.key!=null||W&&D===W.subTree)&&yn(v,D,!0)):k(v,D,B,v0,W,c0,u0,J,l0)},U=(v,D,B,Y,W,c0,u0,J,l0)=>{D.slotScopeIds=J,v==null?D.shapeFlag&512?W.ctx.activate(D,B,Y,u0,l0):F(D,B,Y,W,c0,u0,l0):j(v,D,l0)},F=(v,D,B,Y,W,c0,u0)=>{const J=v.component=ms(v,Y,W);if(on(v)&&(J.ctx.renderer=G0),gs(J),J.asyncDep){if(W&&W.registerDep(J,Z),!v.el){const l0=J.subTree=_5(S2);p(null,l0,D,B)}return}Z(J,v,D,B,W,c0,u0)},j=(v,D,B)=>{const Y=D.component=v.component;if(Tr(v,D,B))if(Y.asyncDep&&!Y.asyncResolved){H(Y,D,B);return}else Y.next=D,gr(Y.update),Y.update();else D.el=v.el,Y.vnode=D},Z=(v,D,B,Y,W,c0,u0)=>{const J=()=>{if(v.isMounted){let{next:v0,bu:E,u:x,parent:z,vnode:e0}=v,r0=v0,R;s2(v,!1),v0?(v0.el=e0.el,H(v,v0,u0)):v0=e0,E&&O4(E),(R=v0.props&&v0.props.onVnodeBeforeUpdate)&&d9(R,z,v0,e0),s2(v,!0);const t0=F4(v),f0=v.subTree;v.subTree=t0,_(f0,t0,f(f0.el),L0(f0),v,W,c0),v0.el=t0.el,r0===null&&Ar(v,t0.el),x&&I5(x,W),(R=v0.props&&v0.props.onVnodeUpdated)&&I5(()=>d9(R,z,v0,e0),W)}else{let v0;const{el:E,props:x}=D,{bm:z,m:e0,parent:r0}=v,R=Y7(D);if(s2(v,!1),z&&O4(z),!R&&(v0=x&&x.onVnodeBeforeMount)&&d9(v0,r0,D),s2(v,!0),E&&I0){const t0=()=>{v.subTree=F4(v),I0(E,v.subTree,v,W,null)};R?D.type.__asyncLoader().then(()=>!v.isUnmounted&&t0()):t0()}else{const t0=v.subTree=F4(v);_(null,t0,B,Y,v,W,c0),D.el=t0.el}if(e0&&I5(e0,W),!R&&(v0=x&&x.onVnodeMounted)){const t0=D;I5(()=>d9(v0,r0,t0),W)}(D.shapeFlag&256||r0&&Y7(r0.vnode)&&r0.vnode.shapeFlag&256)&&v.a&&I5(v.a,W),v.isMounted=!0,D=B=Y=null}},l0=v.effect=new _6(J,()=>T6(s0),v.scope),s0=v.update=()=>l0.run();s0.id=v.uid,s2(v,!0),s0()},H=(v,D,B)=>{D.component=v;const Y=v.vnode.props;v.vnode=D,v.next=null,es(v,D.props,Y,B),is(v,D.children,B),g1(),r8(),_1()},k=(v,D,B,Y,W,c0,u0,J,l0=!1)=>{const s0=v&&v.children,v0=v?v.shapeFlag:0,E=D.children,{patchFlag:x,shapeFlag:z}=D;if(x>0){if(x&128){a0(s0,E,B,Y,W,c0,u0,J,l0);return}else if(x&256){o0(s0,E,B,Y,W,c0,u0,J,l0);return}}z&8?(v0&16&&b0(s0,W,c0),E!==s0&&u(B,E)):v0&16?z&16?a0(s0,E,B,Y,W,c0,u0,J,l0):b0(s0,W,c0,!0):(v0&8&&u(B,""),z&16&&I(E,B,Y,W,c0,u0,J,l0))},o0=(v,D,B,Y,W,c0,u0,J,l0)=>{v=v||i1,D=D||i1;const s0=v.length,v0=D.length,E=Math.min(s0,v0);let x;for(x=0;x<E;x++){const z=D[x]=l0?X9(D[x]):g9(D[x]);_(v[x],z,B,null,W,c0,u0,J,l0)}s0>v0?b0(v,W,c0,!0,!1,E):I(D,B,Y,W,c0,u0,J,l0,E)},a0=(v,D,B,Y,W,c0,u0,J,l0)=>{let s0=0;const v0=D.length;let E=v.length-1,x=v0-1;for(;s0<=E&&s0<=x;){const z=v[s0],e0=D[s0]=l0?X9(D[s0]):g9(D[s0]);if(E1(z,e0))_(z,e0,B,null,W,c0,u0,J,l0);else break;s0++}for(;s0<=E&&s0<=x;){const z=v[E],e0=D[x]=l0?X9(D[x]):g9(D[x]);if(E1(z,e0))_(z,e0,B,null,W,c0,u0,J,l0);else break;E--,x--}if(s0>E){if(s0<=x){const z=x+1,e0=z<v0?D[z].el:Y;for(;s0<=x;)_(null,D[s0]=l0?X9(D[s0]):g9(D[s0]),B,e0,W,c0,u0,J,l0),s0++}}else if(s0>x)for(;s0<=E;)Q(v[s0],W,c0,!0),s0++;else{const z=s0,e0=s0,r0=new Map;for(s0=e0;s0<=x;s0++){const g0=D[s0]=l0?X9(D[s0]):g9(D[s0]);g0.key!=null&&r0.set(g0.key,s0)}let R,t0=0;const f0=x-e0+1;let K=!1,S0=0;const T0=new Array(f0);for(s0=0;s0<f0;s0++)T0[s0]=0;for(s0=z;s0<=E;s0++){const g0=v[s0];if(t0>=f0){Q(g0,W,c0,!0);continue}let _0;if(g0.key!=null)_0=r0.get(g0.key);else for(R=e0;R<=x;R++)if(T0[R-e0]===0&&E1(g0,D[R])){_0=R;break}_0===void 0?Q(g0,W,c0,!0):(T0[_0-e0]=s0+1,_0>=S0?S0=_0:K=!0,_(g0,D[_0],B,null,W,c0,u0,J,l0),t0++)}const A0=K?os(T0):i1;for(R=A0.length-1,s0=f0-1;s0>=0;s0--){const g0=e0+s0,_0=D[g0],P0=g0+1<v0?D[g0+1].el:Y;T0[s0]===0?_(null,_0,B,P0,W,c0,u0,J,l0):K&&(R<0||s0!==A0[R]?V(_0,B,P0,2):R--)}}},V=(v,D,B,Y,W=null)=>{const{el:c0,type:u0,transition:J,children:l0,shapeFlag:s0}=v;if(s0&6){V(v.component.subTree,D,B,Y);return}if(s0&128){v.suspense.move(D,B,Y);return}if(s0&64){u0.move(v,D,B,G0);return}if(u0===m9){i(c0,D,B);for(let E=0;E<l0.length;E++)V(l0[E],D,B,Y);i(v.anchor,D,B);return}if(u0===H4){y(v,D,B);return}if(Y!==2&&s0&1&&J)if(Y===0)J.beforeEnter(c0),i(c0,D,B),I5(()=>J.enter(c0),W);else{const{leave:E,delayLeave:x,afterLeave:z}=J,e0=()=>i(c0,D,B),r0=()=>{E(c0,()=>{e0(),z&&z()})};x?x(c0,e0,r0):r0()}else i(c0,D,B)},Q=(v,D,B,Y=!1,W=!1)=>{const{type:c0,props:u0,ref:J,children:l0,dynamicChildren:s0,shapeFlag:v0,patchFlag:E,dirs:x}=v;if(J!=null&&X3(J,null,B,v,!0),v0&256){D.ctx.deactivate(v);return}const z=v0&1&&x,e0=!Y7(v);let r0;if(e0&&(r0=u0&&u0.onVnodeBeforeUnmount)&&d9(r0,D,v),v0&6)x0(v.component,B,Y);else{if(v0&128){v.suspense.unmount(B,Y);return}z&&r2(v,null,D,"beforeUnmount"),v0&64?v.type.remove(v,D,B,W,G0,Y):s0&&(c0!==m9||E>0&&E&64)?b0(s0,D,B,!1,!0):(c0===m9&&E&384||!W&&v0&16)&&b0(l0,D,B),Y&&p0(v)}(e0&&(r0=u0&&u0.onVnodeUnmounted)||z)&&I5(()=>{r0&&d9(r0,D,v),z&&r2(v,null,D,"unmounted")},B)},p0=v=>{const{type:D,el:B,anchor:Y,transition:W}=v;if(D===m9){m0(B,Y);return}if(D===H4){T(v);return}const c0=()=>{r(B),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(v.shapeFlag&1&&W&&!W.persisted){const{leave:u0,delayLeave:J}=W,l0=()=>u0(B,c0);J?J(v.el,c0,l0):l0()}else c0()},m0=(v,D)=>{let B;for(;v!==D;)B=h(v),r(v),v=B;r(D)},x0=(v,D,B)=>{const{bum:Y,scope:W,update:c0,subTree:u0,um:J}=v;Y&&O4(Y),W.stop(),c0&&(c0.active=!1,Q(u0,v,D,B)),J&&I5(J,D),I5(()=>{v.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},b0=(v,D,B,Y=!1,W=!1,c0=0)=>{for(let u0=c0;u0<v.length;u0++)Q(v[u0],D,B,Y,W)},L0=v=>v.shapeFlag&6?L0(v.component.subTree):v.shapeFlag&128?v.suspense.next():h(v.anchor||v.el),R0=(v,D,B)=>{v==null?D._vnode&&Q(D._vnode,null,null,!0):_(D._vnode||null,v,D,null,null,null,B),r8(),Qt(),D._vnode=v},G0={p:_,um:Q,m:V,r:p0,mt:F,mc:I,pc:k,pbc:S,n:L0,o:n};let r5,I0;return e&&([r5,I0]=e(G0)),{render:R0,hydrate:r5,createApp:Zr(R0,r5)}}function s2({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function yn(n,e,t=!1){const i=n.children,r=e.children;if(D0(i)&&D0(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=X9(r[s]),o.el=a.el),t||yn(a,o)),o.type===v4&&(o.el=a.el)}}function os(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const as=n=>n.__isTeleport,m9=Symbol.for("v-fgt"),v4=Symbol.for("v-txt"),S2=Symbol.for("v-cmt"),H4=Symbol.for("v-stc"),H1=[];let l9=null;function q5(n=!1){H1.push(l9=n?null:[])}function ls(){H1.pop(),l9=H1[H1.length-1]||null}let Y1=1;function m8(n){Y1+=n}function vn(n){return n.dynamicChildren=Y1>0?l9||i1:null,ls(),Y1>0&&l9&&l9.push(n),n}function p9(n,e,t,i,r,s){return vn(g2(n,e,t,i,r,s,!0))}function P6(n,e,t,i,r){return vn(_5(n,e,t,i,r,!0))}function q3(n){return n?n.__v_isVNode===!0:!1}function E1(n,e){return n.type===e.type&&n.key===e.key}const x4="__vInternal",xn=({key:n})=>n??null,$7=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?l5(n)||D5(n)||H0(n)?{i:a9,r:n,k:e,f:!!t}:n:null);function g2(n,e=null,t=null,i=0,r=null,s=n===m9?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xn(e),ref:e&&$7(e),scopeId:_4,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:a9};return o?(C6(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=l5(t)?8:16),Y1>0&&!a&&l9&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&l9.push(l),l}const _5=cs;function cs(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===un)&&(n=S2),q3(n)){const o=c1(n,e,!0);return t&&C6(o,t),Y1>0&&!s&&l9&&(o.shapeFlag&6?l9[l9.indexOf(n)]=o:l9.push(o)),o.patchFlag|=-2,o}if(Ms(n)&&(n=n.__vccOpts),e){e=us(e);let{class:o,style:l}=e;o&&!l5(o)&&(e.class=m6(o)),e5(l)&&(jt(l)&&!D0(l)&&(l=x5({},l)),e.style=p6(l))}const a=l5(n)?1:wr(n)?128:as(n)?64:e5(n)?4:H0(n)?2:0;return g2(n,e,t,i,r,a,s,!0)}function us(n){return n?jt(n)||x4 in n?x5({},n):n:null}function c1(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?hs(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&xn(o),ref:e&&e.ref?t&&r?D0(r)?r.concat($7(e)):[r,$7(e)]:$7(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==m9?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&c1(n.ssContent),ssFallback:n.ssFallback&&c1(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function fs(n=" ",e=0){return _5(v4,null,n,e)}function g8(n="",e=!1){return e?(q5(),P6(S2,null,n)):_5(S2,null,n)}function g9(n){return n==null||typeof n=="boolean"?_5(S2):D0(n)?_5(m9,null,n.slice()):typeof n=="object"?X9(n):_5(v4,null,String(n))}function X9(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:c1(n)}function C6(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(D0(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),C6(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(x4 in e)?e._ctx=a9:r===3&&a9&&(a9.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else H0(e)?(e={default:e,_ctx:a9},t=32):(e=String(e),i&64?(t=16,e=[fs(e)]):t=8);n.children=e,n.shapeFlag|=t}function hs(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=m6([e.class,i.class]));else if(r==="style")e.style=p6([e.style,i.style]);else if(c4(r)){const s=e[r],a=i[r];a&&s!==a&&!(D0(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function d9(n,e,t,i=null){u9(n,e,7,[t,i])}const ds=hn();let ps=0;function ms(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||ds,s={uid:ps++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pn(i,r),emitsOptions:tn(i,r),emit:null,emitted:null,propsDefaults:J0,inheritAttrs:i.inheritAttrs,ctx:J0,data:J0,props:J0,attrs:J0,slots:J0,refs:J0,setupState:J0,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=vr.bind(null,s),n.ce&&n.ce(s),s}let M5=null,L6,R2,_8="__VUE_INSTANCE_SETTERS__";(R2=D3()[_8])||(R2=D3()[_8]=[]),R2.push(n=>M5=n),L6=n=>{R2.length>1?R2.forEach(e=>e(n)):R2[0](n)};const u1=n=>{L6(n),n.scope.on()},_2=()=>{M5&&M5.scope.off(),L6(null)};function Mn(n){return n.vnode.shapeFlag&4}let K1=!1;function gs(n,e=!1){K1=e;const{props:t,children:i}=n.vnode,r=Mn(n);Qr(n,t,r,e),ns(n,i);const s=r?_s(n,e):void 0;return K1=!1,s}function _s(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Yt(new Proxy(n.ctx,Wr));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?vs(n):null;u1(n),g1();const s=$9(i,n,0,[n.props,r]);if(_1(),_2(),Lt(s)){if(s.then(_2,_2),e)return s.then(a=>{y8(n,a,e)}).catch(a=>{m4(a,n,0)});n.asyncDep=s}else y8(n,s,e)}else Sn(n,e)}function y8(n,e,t){H0(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:e5(e)&&(n.setupState=Kt(e)),Sn(n,t)}let v8;function Sn(n,e,t){const i=n.type;if(!n.render){if(!e&&v8&&!i.render){const r=i.template||w6(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=x5(x5({isCustomElement:s,delimiters:o},a),l);i.render=v8(r,c)}}n.render=i.render||c9}u1(n),g1(),Xr(n),_1(),_2()}function ys(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return G5(n,"get","$attrs"),e[t]}}))}function vs(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return ys(n)},slots:n.slots,emit:n.emit,expose:e}}function U6(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Kt(Yt(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in z1)return z1[t](n)},has(e,t){return t in e||t in z1}}))}function xs(n,e=!0){return H0(n)?n.displayName||n.name:n.name||e&&n.__name}function Ms(n){return H0(n)&&"__vccOpts"in n}const Ss=(n,e)=>dr(n,e,K1);function x8(n,e,t){const i=arguments.length;return i===2?e5(e)&&!D0(e)?q3(e)?_5(n,null,[e]):_5(n,e):_5(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&q3(t)&&(t=[t]),_5(n,e,t))}const Es=Symbol.for("v-scx"),bs=()=>K7(Es),Ts="3.3.4",As="http://www.w3.org/2000/svg",d2=typeof document<"u"?document:null,M8=d2&&d2.createElement("template"),ws={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?d2.createElementNS(As,n):d2.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>d2.createTextNode(n),createComment:n=>d2.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>d2.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{M8.innerHTML=i?`<svg>${n}</svg>`:n;const o=M8.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Rs(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Ps(n,e,t){const i=n.style,r=l5(t);if(t&&!r){if(e&&!l5(e))for(const s in e)t[s]==null&&j3(i,s,"");for(const s in t)j3(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const S8=/\s*!important$/;function j3(n,e,t){if(D0(t))t.forEach(i=>j3(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Cs(n,e);S8.test(t)?n.setProperty(m1(i),t.replace(S8,""),"important"):n[i]=t}}const E8=["Webkit","Moz","ms"],G4={};function Cs(n,e){const t=G4[e];if(t)return t;let i=v9(e);if(i!=="filter"&&i in n)return G4[e]=i;i=h4(i);for(let r=0;r<E8.length;r++){const s=E8[r]+i;if(s in n)return G4[e]=s}return e}const b8="http://www.w3.org/1999/xlink";function Ls(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(b8,e.slice(6,e.length)):n.setAttributeNS(b8,e,t);else{const s=Li(e);t==null||s&&!Nt(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Us(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=t;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Nt(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Ds(n,e,t,i){n.addEventListener(e,t,i)}function Ns(n,e,t,i){n.removeEventListener(e,t,i)}function Is(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Os(e);if(i){const c=s[e]=zs(i,r);Ds(n,o,c,l)}else a&&(Ns(n,o,a,l),s[e]=void 0)}}const T8=/(?:Once|Passive|Capture)$/;function Os(n){let e;if(T8.test(n)){e={};let i;for(;i=n.match(T8);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):m1(n.slice(2)),e]}let k4=0;const Fs=Promise.resolve(),Bs=()=>k4||(Fs.then(()=>k4=0),k4=Date.now());function zs(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;u9(Hs(i,t.value),e,5,[i])};return t.value=n,t.attached=Bs(),t}function Hs(n,e){if(D0(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const A8=/^on[a-z]/,Gs=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Rs(n,i,r):e==="style"?Ps(n,t,i):c4(e)?u6(e)||Is(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ks(n,e,i,r))?Us(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ls(n,e,i,r))};function ks(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&A8.test(e)&&H0(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||A8.test(e)&&l5(t)?!1:e in n}const Vs=x5({patchProp:Gs},ws);let w8;function Ws(){return w8||(w8=rs(Vs))}const Xs=(...n)=>{const e=Ws().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=qs(i);if(!r)return;const s=e._component;!H0(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function qs(n){return l5(n)?document.querySelector(n):n}function $5(n,e){js(n)&&(n="100%");var t=Ys(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function js(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function Ys(n){return typeof n=="string"&&n.indexOf("%")!==-1}function Ks(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function g7(n){return n<=1?"".concat(Number(n)*100,"%"):n}function V4(n){return n.length===1?"0"+n:String(n)}function $s(n,e,t){return{r:$5(n,255)*255,g:$5(e,255)*255,b:$5(t,255)*255}}function W4(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Zs(n,e,t){var i,r,s;if(n=$5(n,360),e=$5(e,100),t=$5(t,100),e===0)r=t,s=t,i=t;else{var a=t<.5?t*(1+e):t+e-t*e,o=2*t-a;i=W4(o,a,n+1/3),r=W4(o,a,n),s=W4(o,a,n-1/3)}return{r:i*255,g:r*255,b:s*255}}function Js(n,e,t){n=$5(n,255),e=$5(e,255),t=$5(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),s=0,a=i,o=i-r,l=i===0?0:o/i;if(i===r)s=0;else{switch(i){case n:s=(e-t)/o+(e<t?6:0);break;case e:s=(t-n)/o+2;break;case t:s=(n-e)/o+4;break}s/=6}return{h:s,s:l,v:a}}function Qs(n,e,t){n=$5(n,360)*6,e=$5(e,100),t=$5(t,100);var i=Math.floor(n),r=n-i,s=t*(1-e),a=t*(1-r*e),o=t*(1-(1-r)*e),l=i%6,c=[t,a,s,s,o,t][l],u=[o,t,t,a,s,s][l],f=[s,s,o,t,t,a][l];return{r:c*255,g:u*255,b:f*255}}function eo(n,e,t,i){var r=[V4(Math.round(n).toString(16)),V4(Math.round(e).toString(16)),V4(Math.round(t).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function R8(n){return X5(n)/255}function X5(n){return parseInt(n,16)}var P8={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function b1(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,s=null,a=!1,o=!1;return typeof n=="string"&&(n=io(n)),typeof n=="object"&&(E9(n.r)&&E9(n.g)&&E9(n.b)?(e=$s(n.r,n.g,n.b),a=!0,o=String(n.r).substr(-1)==="%"?"prgb":"rgb"):E9(n.h)&&E9(n.s)&&E9(n.v)?(i=g7(n.s),r=g7(n.v),e=Qs(n.h,i,r),a=!0,o="hsv"):E9(n.h)&&E9(n.s)&&E9(n.l)&&(i=g7(n.s),s=g7(n.l),e=Zs(n.h,i,s),a=!0,o="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=Ks(t),{ok:a,format:n.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var to="[-\\+]?\\d+%?",no="[-\\+]?\\d*\\.\\d+%?",q9="(?:".concat(no,")|(?:").concat(to,")"),X4="[\\s|\\(]+(".concat(q9,")[,|\\s]+(").concat(q9,")[,|\\s]+(").concat(q9,")\\s*\\)?"),q4="[\\s|\\(]+(".concat(q9,")[,|\\s]+(").concat(q9,")[,|\\s]+(").concat(q9,")[,|\\s]+(").concat(q9,")\\s*\\)?"),n9={CSS_UNIT:new RegExp(q9),rgb:new RegExp("rgb"+X4),rgba:new RegExp("rgba"+q4),hsl:new RegExp("hsl"+X4),hsla:new RegExp("hsla"+q4),hsv:new RegExp("hsv"+X4),hsva:new RegExp("hsva"+q4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function io(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var e=!1;if(P8[n])n=P8[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=n9.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=n9.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=n9.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=n9.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=n9.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=n9.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=n9.hex8.exec(n),t?{r:X5(t[1]),g:X5(t[2]),b:X5(t[3]),a:R8(t[4]),format:e?"name":"hex8"}:(t=n9.hex6.exec(n),t?{r:X5(t[1]),g:X5(t[2]),b:X5(t[3]),format:e?"name":"hex"}:(t=n9.hex4.exec(n),t?{r:X5(t[1]+t[1]),g:X5(t[2]+t[2]),b:X5(t[3]+t[3]),a:R8(t[4]+t[4]),format:e?"name":"hex8"}:(t=n9.hex3.exec(n),t?{r:X5(t[1]+t[1]),g:X5(t[2]+t[2]),b:X5(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function E9(n){return!!n9.CSS_UNIT.exec(String(n))}var _7=2,C8=.16,ro=.05,so=.05,oo=.15,En=5,bn=4,ao=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function L8(n){var e=n.r,t=n.g,i=n.b,r=Js(e,t,i);return{h:r.h*360,s:r.s,v:r.v}}function y7(n){var e=n.r,t=n.g,i=n.b;return"#".concat(eo(e,t,i,!1))}function lo(n,e,t){var i=t/100,r={r:(e.r-n.r)*i+n.r,g:(e.g-n.g)*i+n.g,b:(e.b-n.b)*i+n.b};return r}function U8(n,e,t){var i;return Math.round(n.h)>=60&&Math.round(n.h)<=240?i=t?Math.round(n.h)-_7*e:Math.round(n.h)+_7*e:i=t?Math.round(n.h)+_7*e:Math.round(n.h)-_7*e,i<0?i+=360:i>=360&&(i-=360),i}function D8(n,e,t){if(n.h===0&&n.s===0)return n.s;var i;return t?i=n.s-C8*e:e===bn?i=n.s+C8:i=n.s+ro*e,i>1&&(i=1),t&&e===En&&i>.1&&(i=.1),i<.06&&(i=.06),Number(i.toFixed(2))}function N8(n,e,t){var i;return t?i=n.v+so*e:i=n.v-oo*e,i>1&&(i=1),Number(i.toFixed(2))}function Y3(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],i=b1(n),r=En;r>0;r-=1){var s=L8(i),a=y7(b1({h:U8(s,r,!0),s:D8(s,r,!0),v:N8(s,r,!0)}));t.push(a)}t.push(y7(i));for(var o=1;o<=bn;o+=1){var l=L8(i),c=y7(b1({h:U8(l,o),s:D8(l,o),v:N8(l,o)}));t.push(c)}return e.theme==="dark"?ao.map(function(u){var f=u.index,h=u.opacity,d=y7(lo(b1(e.backgroundColor||"#141414"),b1(t[f]),h*100));return d}):t}var j4={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Y4={},K4={};Object.keys(j4).forEach(function(n){Y4[n]=Y3(j4[n]),Y4[n].primary=Y4[n][5],K4[n]=Y3(j4[n],{theme:"dark",backgroundColor:"#141414"}),K4[n].primary=K4[n][5]});var I8=[],T1=[],co="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function uo(){var n=document.createElement("style");return n.setAttribute("type","text/css"),n}function fo(n,e){if(e=e||{},n===void 0)throw new Error(co);var t=e.prepend===!0?"prepend":"append",i=e.container!==void 0?e.container:document.querySelector("head"),r=I8.indexOf(i);r===-1&&(r=I8.push(i)-1,T1[r]={});var s;return T1[r]!==void 0&&T1[r][t]!==void 0?s=T1[r][t]:(s=T1[r][t]=uo(),t==="prepend"?i.insertBefore(s,i.childNodes[0]):i.appendChild(s)),n.charCodeAt(0)===65279&&(n=n.substr(1,n.length)),s.styleSheet?s.styleSheet.cssText+=n:s.textContent+=n,s}function O8(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){ho(n,r,t[r])})}return n}function ho(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function F8(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function K3(n,e,t){return t?x8(n.tag,O8({key:e},t,n.attrs),(n.children||[]).map(function(i,r){return K3(i,"".concat(e,"-").concat(n.tag,"-").concat(r))})):x8(n.tag,O8({key:e},n.attrs),(n.children||[]).map(function(i,r){return K3(i,"".concat(e,"-").concat(n.tag,"-").concat(r))}))}function Tn(n){return Y3(n)[0]}function An(n){return n?Array.isArray(n)?n:[n]:[]}var po=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,B8=!1,mo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:po;Zt(function(){B8||(typeof window<"u"&&window.document&&window.document.documentElement&&fo(e,{prepend:!0}),B8=!0)})},go=["icon","primaryColor","secondaryColor"];function _o(n,e){if(n==null)return{};var t=yo(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function yo(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Z7(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){vo(n,r,t[r])})}return n}function vo(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var G1={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function xo(n){var e=n.primaryColor,t=n.secondaryColor;G1.primaryColor=e,G1.secondaryColor=t||Tn(e),G1.calculated=!!t}function Mo(){return Z7({},G1)}var y1=function(e,t){var i=Z7({},e,t.attrs),r=i.icon,s=i.primaryColor,a=i.secondaryColor,o=_o(i,go),l=G1;if(s&&(l={primaryColor:s,secondaryColor:a||Tn(s)}),mo(),F8(r),!F8(r))return null;var c=r;return c&&typeof c.icon=="function"&&(c=Z7({},c,{icon:c.icon(l.primaryColor,l.secondaryColor)})),K3(c.icon,"svg-".concat(c.name),Z7({},o,{"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};y1.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};y1.inheritAttrs=!1;y1.displayName="IconBase";y1.getTwoToneColors=Mo;y1.setTwoToneColors=xo;const D6=y1;function So(n,e){return Ao(n)||To(n,e)||bo(n,e)||Eo()}function Eo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bo(n,e){if(n){if(typeof n=="string")return z8(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z8(n,e)}}function z8(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function To(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,a,o;try{for(t=t.call(n);!(r=(a=t.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return i}}function Ao(n){if(Array.isArray(n))return n}function wn(n){var e=An(n),t=So(e,2),i=t[0],r=t[1];return D6.setTwoToneColors({primaryColor:i,secondaryColor:r})}function wo(){var n=D6.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var Ro=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function Po(n,e){return Do(n)||Uo(n,e)||Lo(n,e)||Co()}function Co(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lo(n,e){if(n){if(typeof n=="string")return H8(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H8(n,e)}}function H8(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Uo(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i=[],r=!0,s=!1,a,o;try{for(t=t.call(n);!(r=(a=t.next()).done)&&(i.push(a.value),!(e&&i.length===e));r=!0);}catch(l){s=!0,o=l}finally{try{!r&&t.return!=null&&t.return()}finally{if(s)throw o}}return i}}function Do(n){if(Array.isArray(n))return n}function G8(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){$3(n,r,t[r])})}return n}function $3(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function No(n,e){if(n==null)return{};var t=Io(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Io(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}wn("#1890ff");var v1=function(e,t){var i,r=G8({},e,t.attrs),s=r.class,a=r.icon,o=r.spin,l=r.rotate,c=r.tabindex,u=r.twoToneColor,f=r.onClick,h=No(r,Ro),d=(i={anticon:!0},$3(i,"anticon-".concat(a.name),!!a.name),$3(i,s,s),i),g=o===""||o||a.name==="loading"?"anticon-spin":"",_=c;_===void 0&&f&&(_=-1,h.tabindex=_);var m=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,p=An(u),b=Po(p,2),y=b[0],T=b[1];return _5("span",G8({role:"img","aria-label":a.name},h,{onClick:f,class:d}),[_5(D6,{class:g,icon:a,primaryColor:y,secondaryColor:T,style:m},null)])};v1.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};v1.displayName="AntdIcon";v1.inheritAttrs=!1;v1.getTwoToneColor=wo;v1.setTwoToneColor=wn;const Oo=v1;var Fo={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 000 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"}}]},name:"rollback",theme:"outlined"};const Bo=Fo;function k8(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){zo(n,r,t[r])})}return n}function zo(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var N6=function(e,t){var i=k8({},e,t.attrs);return _5(Oo,k8({},i,{icon:Bo}),null)};N6.displayName="RollbackOutlined";N6.inheritAttrs=!1;const V8=N6;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const I6="154",P2={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},C2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ho=0,W8=1,Go=2,Rn=1,ko=2,L9=3,t2=0,z5=1,F5=2,Z9=0,a1=1,Z3=2,X8=3,q8=4,Vo=5,Q2=100,Wo=101,Xo=102,j8=103,Y8=104,qo=200,jo=201,Yo=202,Ko=203,Pn=204,Cn=205,$o=206,Zo=207,Jo=208,Qo=209,ea=210,ta=0,na=1,ia=2,J3=3,ra=4,sa=5,oa=6,aa=7,M4=0,la=1,ca=2,I9=0,ua=1,fa=2,ha=3,da=4,pa=5,Ln=300,f1=301,h1=302,Q3=303,e6=304,S4=306,t6=1e3,s9=1001,n6=1002,U5=1003,K8=1004,$4=1005,Y5=1006,ma=1007,$1=1008,J9=1009,ga=1010,_a=1011,O6=1012,Un=1013,j9=1014,Y9=1015,Z1=1016,Dn=1017,Nn=1018,y2=1020,ya=1021,o9=1023,va=1024,xa=1025,v2=1026,d1=1027,Ma=1028,In=1029,Sa=1030,On=1031,Fn=1033,Z4=33776,J4=33777,Q4=33778,e3=33779,$8=35840,Z8=35841,J8=35842,Q8=35843,Ea=36196,ee=37492,te=37496,ne=37808,ie=37809,re=37810,se=37811,oe=37812,ae=37813,le=37814,ce=37815,ue=37816,fe=37817,he=37818,de=37819,pe=37820,me=37821,t3=36492,ba=36283,ge=36284,_e=36285,ye=36286,Bn=3e3,x2=3001,Ta=3200,Aa=3201,E4=0,wa=1,M2="",z0="srgb",x9="srgb-linear",zn="display-p3",n3=7680,Ra=519,Pa=512,Ca=513,La=514,Ua=515,Da=516,Na=517,Ia=518,Oa=519,i6=35044,ve="300 es",r6=1035,D9=2e3,r4=2001;class w2{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const S5=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xe=1234567;const k1=Math.PI/180,J1=180/Math.PI;function O9(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(S5[n&255]+S5[n>>8&255]+S5[n>>16&255]+S5[n>>24&255]+"-"+S5[e&255]+S5[e>>8&255]+"-"+S5[e>>16&15|64]+S5[e>>24&255]+"-"+S5[t&63|128]+S5[t>>8&255]+"-"+S5[t>>16&255]+S5[t>>24&255]+S5[i&255]+S5[i>>8&255]+S5[i>>16&255]+S5[i>>24&255]).toLowerCase()}function g5(n,e,t){return Math.max(e,Math.min(t,n))}function F6(n,e){return(n%e+e)%e}function Fa(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ba(n,e,t){return n!==e?(t-n)/(e-n):0}function V1(n,e,t){return(1-t)*n+t*e}function za(n,e,t,i){return V1(n,e,1-Math.exp(-t*i))}function Ha(n,e=1){return e-Math.abs(F6(n,e*2)-e)}function Ga(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ka(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Va(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wa(n,e){return n+Math.random()*(e-n)}function Xa(n){return n*(.5-Math.random())}function qa(n){n!==void 0&&(xe=n);let e=xe+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ja(n){return n*k1}function Ya(n){return n*J1}function s6(n){return(n&n-1)===0&&n!==0}function Ka(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function s4(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $a(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function N9(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $0(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const i3={DEG2RAD:k1,RAD2DEG:J1,generateUUID:O9,clamp:g5,euclideanModulo:F6,mapLinear:Fa,inverseLerp:Ba,lerp:V1,damp:za,pingpong:Ha,smoothstep:Ga,smootherstep:ka,randInt:Va,randFloat:Wa,randFloatSpread:Xa,seededRandom:qa,degToRad:ja,radToDeg:Ya,isPowerOfTwo:s6,ceilPowerOfTwo:Ka,floorPowerOfTwo:s4,setQuaternionFromProperEuler:$a,normalize:$0,denormalize:N9};class w0{constructor(e=0,t=0){w0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(g5(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class k0{constructor(e,t,i,r,s,a,o,l,c){k0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],b=r[1],y=r[4],T=r[7],A=r[2],P=r[5],C=r[8];return s[0]=a*_+o*b+l*A,s[3]=a*m+o*y+l*P,s[6]=a*p+o*T+l*C,s[1]=c*_+u*b+f*A,s[4]=c*m+u*y+f*P,s[7]=c*p+u*T+f*C,s[2]=h*_+d*b+g*A,s[5]=h*m+d*y+g*P,s[8]=h*p+d*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(r3.makeScale(e,t)),this}rotate(e){return this.premultiply(r3.makeRotation(-e)),this}translate(e,t){return this.premultiply(r3.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const r3=new k0;function Hn(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Q1(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Me={};function W1(n){n in Me||(Me[n]=!0,console.warn(n))}function l1(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function s3(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Za=new k0().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ja=new k0().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Qa(n){return n.convertSRGBToLinear().applyMatrix3(Ja)}function el(n){return n.applyMatrix3(Za).convertLinearToSRGB()}const tl={[x9]:n=>n,[z0]:n=>n.convertSRGBToLinear(),[zn]:Qa},nl={[x9]:n=>n,[z0]:n=>n.convertLinearToSRGB(),[zn]:el},J5={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return x9},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=tl[e],r=nl[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let L2;class Gn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{L2===void 0&&(L2=Q1("canvas")),L2.width=e.width,L2.height=e.height;const i=L2.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=L2}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Q1("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=l1(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(l1(t[i]/255)*255):t[i]=l1(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let il=0;class kn{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=O9(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(o3(r[a].image)):s.push(o3(r[a]))}else s=o3(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function o3(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gn.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rl=0;class H5 extends w2{constructor(e=H5.DEFAULT_IMAGE,t=H5.DEFAULT_MAPPING,i=s9,r=s9,s=Y5,a=$1,o=o9,l=J9,c=H5.DEFAULT_ANISOTROPY,u=M2){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rl++}),this.uuid=O9(),this.name="",this.source=new kn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new w0(0,0),this.repeat=new w0(1,1),this.center=new w0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new k0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(W1("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===x2?z0:M2),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ln)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t6:e.x=e.x-Math.floor(e.x);break;case s9:e.x=e.x<0?0:1;break;case n6:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case t6:e.y=e.y-Math.floor(e.y);break;case s9:e.y=e.y<0?0:1;break;case n6:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return W1("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===z0?x2:Bn}set encoding(e){W1("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===x2?z0:M2}}H5.DEFAULT_IMAGE=null;H5.DEFAULT_MAPPING=Ln;H5.DEFAULT_ANISOTROPY=1;class Q0{constructor(e=0,t=0,i=0,r=1){Q0.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(d+1)/2,A=(p+1)/2,P=(u+h)/4,C=(f+_)/4,I=(g+m)/4;return y>T&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=C/i):T>A?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=P/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=I/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E2 extends w2{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Q0(0,0,e,t),this.scissorTest=!1,this.viewport=new Q0(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(W1("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===x2?z0:M2),this.texture=new H5(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Y5,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends H5{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=U5,this.minFilter=U5,this.wrapR=s9,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl extends H5{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=U5,this.minFilter=U5,this.wrapR=s9,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b2{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),P=Math.atan2(A,p*b);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const T=o*b;if(l=l*m+h*T,c=c*m+d*T,u=u*m+g*T,f=f*m+_*T,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(g5(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Se.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Se.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return a3.copy(this).projectOnVector(e),this.sub(a3)}reflect(e){return this.sub(a3.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(g5(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const a3=new L,Se=new b2;class n7{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(T9.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(T9.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=T9.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),U2.copy(e.boundingBox),U2.applyMatrix4(e.matrixWorld),this.union(U2);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)T9.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(T9)}else r.boundingBox===null&&r.computeBoundingBox(),U2.copy(r.boundingBox),U2.applyMatrix4(e.matrixWorld),this.union(U2)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,T9),T9.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(A1),v7.subVectors(this.max,A1),D2.subVectors(e.a,A1),N2.subVectors(e.b,A1),I2.subVectors(e.c,A1),G9.subVectors(N2,D2),k9.subVectors(I2,N2),o2.subVectors(D2,I2);let t=[0,-G9.z,G9.y,0,-k9.z,k9.y,0,-o2.z,o2.y,G9.z,0,-G9.x,k9.z,0,-k9.x,o2.z,0,-o2.x,-G9.y,G9.x,0,-k9.y,k9.x,0,-o2.y,o2.x,0];return!l3(t,D2,N2,I2,v7)||(t=[1,0,0,0,1,0,0,0,1],!l3(t,D2,N2,I2,v7))?!1:(x7.crossVectors(G9,k9),t=[x7.x,x7.y,x7.z],l3(t,D2,N2,I2,v7))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,T9).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(T9).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(b9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),b9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),b9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),b9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),b9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),b9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),b9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),b9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(b9),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const b9=[new L,new L,new L,new L,new L,new L,new L,new L],T9=new L,U2=new n7,D2=new L,N2=new L,I2=new L,G9=new L,k9=new L,o2=new L,A1=new L,v7=new L,x7=new L,a2=new L;function l3(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){a2.fromArray(n,s);const o=r.x*Math.abs(a2.x)+r.y*Math.abs(a2.y)+r.z*Math.abs(a2.z),l=e.dot(a2),c=t.dot(a2),u=i.dot(a2);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ol=new n7,w1=new L,c3=new L;class i7{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ol.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;w1.subVectors(e,this.center);const t=w1.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(w1,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(c3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(w1.copy(e.center).add(c3)),this.expandByPoint(w1.copy(e.center).sub(c3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const A9=new L,u3=new L,M7=new L,V9=new L,f3=new L,S7=new L,h3=new L;class x1{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,A9)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=A9.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(A9.copy(this.origin).addScaledVector(this.direction,t),A9.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){u3.copy(e).add(t).multiplyScalar(.5),M7.copy(t).sub(e).normalize(),V9.copy(this.origin).sub(u3);const s=e.distanceTo(t)*.5,a=-this.direction.dot(M7),o=V9.dot(this.direction),l=-V9.dot(M7),c=V9.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(u3).addScaledVector(M7,h),d}intersectSphere(e,t){A9.subVectors(e.center,this.origin);const i=A9.dot(this.direction),r=A9.dot(A9)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,A9)!==null}intersectTriangle(e,t,i,r,s){f3.subVectors(t,e),S7.subVectors(i,e),h3.crossVectors(f3,S7);let a=this.direction.dot(h3),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;V9.subVectors(this.origin,e);const l=o*this.direction.dot(S7.crossVectors(V9,S7));if(l<0)return null;const c=o*this.direction.dot(f3.cross(V9));if(c<0||l+c>a)return null;const u=-o*V9.dot(h3);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Z0{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,m){Z0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Z0().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/O2.setFromMatrixColumn(e,0).length(),s=1/O2.setFromMatrixColumn(e,1).length(),a=1/O2.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(al,e,ll)}lookAt(e,t,i){const r=this.elements;return V5.subVectors(e,t),V5.lengthSq()===0&&(V5.z=1),V5.normalize(),W9.crossVectors(i,V5),W9.lengthSq()===0&&(Math.abs(i.z)===1?V5.x+=1e-4:V5.z+=1e-4,V5.normalize(),W9.crossVectors(i,V5)),W9.normalize(),E7.crossVectors(V5,W9),r[0]=W9.x,r[4]=E7.x,r[8]=V5.x,r[1]=W9.y,r[5]=E7.y,r[9]=V5.y,r[2]=W9.z,r[6]=E7.z,r[10]=V5.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],y=i[7],T=i[11],A=i[15],P=r[0],C=r[4],I=r[8],M=r[12],S=r[1],O=r[5],X=r[9],U=r[13],F=r[2],j=r[6],Z=r[10],H=r[14],k=r[3],o0=r[7],a0=r[11],V=r[15];return s[0]=a*P+o*S+l*F+c*k,s[4]=a*C+o*O+l*j+c*o0,s[8]=a*I+o*X+l*Z+c*a0,s[12]=a*M+o*U+l*H+c*V,s[1]=u*P+f*S+h*F+d*k,s[5]=u*C+f*O+h*j+d*o0,s[9]=u*I+f*X+h*Z+d*a0,s[13]=u*M+f*U+h*H+d*V,s[2]=g*P+_*S+m*F+p*k,s[6]=g*C+_*O+m*j+p*o0,s[10]=g*I+_*X+m*Z+p*a0,s[14]=g*M+_*U+m*H+p*V,s[3]=b*P+y*S+T*F+A*k,s[7]=b*C+y*O+T*j+A*o0,s[11]=b*I+y*X+T*Z+A*a0,s[15]=b*M+y*U+T*H+A*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+_*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,y=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,T=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,A=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,P=t*b+i*y+r*T+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=b*C,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*C,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*C,e[4]=y*C,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*C,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*C,e[8]=T*C,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*C,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*C,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*C,e[12]=A*C,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*C,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*C,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,b=l*c,y=l*u,T=l*f,A=i.x,P=i.y,C=i.z;return r[0]=(1-(_+p))*A,r[1]=(d+T)*A,r[2]=(g-y)*A,r[3]=0,r[4]=(d-T)*P,r[5]=(1-(h+p))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(g+y)*C,r[9]=(m-b)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=O2.set(r[0],r[1],r[2]).length();const a=O2.set(r[4],r[5],r[6]).length(),o=O2.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Q5.copy(this);const c=1/s,u=1/a,f=1/o;return Q5.elements[0]*=c,Q5.elements[1]*=c,Q5.elements[2]*=c,Q5.elements[4]*=u,Q5.elements[5]*=u,Q5.elements[6]*=u,Q5.elements[8]*=f,Q5.elements[9]*=f,Q5.elements[10]*=f,t.setFromRotationMatrix(Q5),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=D9){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(o===D9)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===r4)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=D9){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(o===D9)g=(a+s)*f,_=-2*f;else if(o===r4)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const O2=new L,Q5=new Z0,al=new L(0,0,0),ll=new L(1,1,1),W9=new L,E7=new L,V5=new L,Ee=new Z0,be=new b2;class b4{constructor(e=0,t=0,i=0,r=b4.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(g5(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-g5(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(g5(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-g5(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(g5(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-g5(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ee.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ee,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return be.setFromEuler(this),this.setFromQuaternion(be,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}b4.DEFAULT_ORDER="XYZ";class B6{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cl=0;const Te=new L,F2=new b2,w9=new Z0,b7=new L,R1=new L,ul=new L,fl=new b2,Ae=new L(1,0,0),we=new L(0,1,0),Re=new L(0,0,1),hl={type:"added"},Pe={type:"removed"};class v5 extends w2{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=O9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=v5.DEFAULT_UP.clone();const e=new L,t=new b4,i=new b2,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Z0},normalMatrix:{value:new k0}}),this.matrix=new Z0,this.matrixWorld=new Z0,this.matrixAutoUpdate=v5.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=v5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new B6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return F2.setFromAxisAngle(e,t),this.quaternion.multiply(F2),this}rotateOnWorldAxis(e,t){return F2.setFromAxisAngle(e,t),this.quaternion.premultiply(F2),this}rotateX(e){return this.rotateOnAxis(Ae,e)}rotateY(e){return this.rotateOnAxis(we,e)}rotateZ(e){return this.rotateOnAxis(Re,e)}translateOnAxis(e,t){return Te.copy(e).applyQuaternion(this.quaternion),this.position.add(Te.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ae,e)}translateY(e){return this.translateOnAxis(we,e)}translateZ(e){return this.translateOnAxis(Re,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(w9.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?b7.copy(e):b7.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),R1.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?w9.lookAt(R1,b7,this.up):w9.lookAt(b7,R1,this.up),this.quaternion.setFromRotationMatrix(w9),r&&(w9.extractRotation(r.matrixWorld),F2.setFromRotationMatrix(w9),this.quaternion.premultiply(F2.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pe)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pe)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),w9.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),w9.multiply(e.parent.matrixWorld)),e.applyMatrix4(w9),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R1,e,ul),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(R1,fl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}v5.DEFAULT_UP=new L(0,1,0);v5.DEFAULT_MATRIX_AUTO_UPDATE=!0;v5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const e9=new L,R9=new L,d3=new L,P9=new L,B2=new L,z2=new L,Ce=new L,p3=new L,m3=new L,g3=new L;let T7=!1;class K5{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),e9.subVectors(e,t),r.cross(e9);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){e9.subVectors(r,t),R9.subVectors(i,t),d3.subVectors(e,t);const a=e9.dot(e9),o=e9.dot(R9),l=e9.dot(d3),c=R9.dot(R9),u=R9.dot(d3),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,P9),P9.x>=0&&P9.y>=0&&P9.x+P9.y<=1}static getUV(e,t,i,r,s,a,o,l){return T7===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),T7=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,P9),l.setScalar(0),l.addScaledVector(s,P9.x),l.addScaledVector(a,P9.y),l.addScaledVector(o,P9.z),l}static isFrontFacing(e,t,i,r){return e9.subVectors(i,t),R9.subVectors(e,t),e9.cross(R9).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return e9.subVectors(this.c,this.b),R9.subVectors(this.a,this.b),e9.cross(R9).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return K5.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return K5.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return T7===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),T7=!0),K5.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return K5.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return K5.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return K5.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;B2.subVectors(r,i),z2.subVectors(s,i),p3.subVectors(e,i);const l=B2.dot(p3),c=z2.dot(p3);if(l<=0&&c<=0)return t.copy(i);m3.subVectors(e,r);const u=B2.dot(m3),f=z2.dot(m3);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(B2,a);g3.subVectors(e,s);const d=B2.dot(g3),g=z2.dot(g3);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(z2,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Ce.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Ce,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(i).addScaledVector(B2,a).addScaledVector(z2,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let dl=0;class M9 extends w2{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dl++}),this.uuid=O9(),this.name="",this.type="Material",this.blending=a1,this.side=t2,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pn,this.blendDst=Cn,this.blendEquation=Q2,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=J3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=n3,this.stencilZFail=n3,this.stencilZPass=n3,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==a1&&(i.blending=this.blending),this.side!==t2&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},t9={h:0,s:0,l:0},A7={h:0,s:0,l:0};function _3(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class X0{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=z0){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J5.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=J5.workingColorSpace){return this.r=e,this.g=t,this.b=i,J5.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=J5.workingColorSpace){if(e=F6(e,1),t=g5(t,0,1),i=g5(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_3(a,s,e+1/3),this.g=_3(a,s,e),this.b=_3(a,s,e-1/3)}return J5.toWorkingColorSpace(this,r),this}setStyle(e,t=z0){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=z0){const i=Wn[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=l1(e.r),this.g=l1(e.g),this.b=l1(e.b),this}copyLinearToSRGB(e){return this.r=s3(e.r),this.g=s3(e.g),this.b=s3(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=z0){return J5.fromWorkingColorSpace(E5.copy(this),e),Math.round(g5(E5.r*255,0,255))*65536+Math.round(g5(E5.g*255,0,255))*256+Math.round(g5(E5.b*255,0,255))}getHexString(e=z0){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J5.workingColorSpace){J5.fromWorkingColorSpace(E5.copy(this),t);const i=E5.r,r=E5.g,s=E5.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=J5.workingColorSpace){return J5.fromWorkingColorSpace(E5.copy(this),t),e.r=E5.r,e.g=E5.g,e.b=E5.b,e}getStyle(e=z0){J5.fromWorkingColorSpace(E5.copy(this),e);const t=E5.r,i=E5.g,r=E5.b;return e!==z0?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(t9),t9.h+=e,t9.s+=t,t9.l+=i,this.setHSL(t9.h,t9.s,t9.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(t9),e.getHSL(A7);const i=V1(t9.h,A7.h,t),r=V1(t9.s,A7.s,t),s=V1(t9.l,A7.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const E5=new X0;X0.NAMES=Wn;class Q9 extends M9{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new X0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=M4,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a5=new L,w7=new w0;class N5{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=i6,this.updateRange={offset:0,count:-1},this.gpuType=Y9,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)w7.fromBufferAttribute(this,t),w7.applyMatrix3(e),this.setXY(t,w7.x,w7.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)a5.fromBufferAttribute(this,t),a5.applyMatrix3(e),this.setXYZ(t,a5.x,a5.y,a5.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)a5.fromBufferAttribute(this,t),a5.applyMatrix4(e),this.setXYZ(t,a5.x,a5.y,a5.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)a5.fromBufferAttribute(this,t),a5.applyNormalMatrix(e),this.setXYZ(t,a5.x,a5.y,a5.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)a5.fromBufferAttribute(this,t),a5.transformDirection(e),this.setXYZ(t,a5.x,a5.y,a5.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=N9(t,this.array)),t}setX(e,t){return this.normalized&&(t=$0(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=N9(t,this.array)),t}setY(e,t){return this.normalized&&(t=$0(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=N9(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$0(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=N9(t,this.array)),t}setW(e,t){return this.normalized&&(t=$0(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$0(t,this.array),i=$0(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$0(t,this.array),i=$0(i,this.array),r=$0(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$0(t,this.array),i=$0(i,this.array),r=$0(r,this.array),s=$0(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==i6&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xn extends N5{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qn extends N5{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class u5 extends N5{constructor(e,t,i){super(new Float32Array(e),t,i)}}let pl=0;const j5=new Z0,y3=new v5,H2=new L,W5=new n7,P1=new n7,m5=new L;class c5 extends w2{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=O9(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hn(e)?qn:Xn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new k0().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return j5.makeRotationFromQuaternion(e),this.applyMatrix4(j5),this}rotateX(e){return j5.makeRotationX(e),this.applyMatrix4(j5),this}rotateY(e){return j5.makeRotationY(e),this.applyMatrix4(j5),this}rotateZ(e){return j5.makeRotationZ(e),this.applyMatrix4(j5),this}translate(e,t,i){return j5.makeTranslation(e,t,i),this.applyMatrix4(j5),this}scale(e,t,i){return j5.makeScale(e,t,i),this.applyMatrix4(j5),this}lookAt(e){return y3.lookAt(e),y3.updateMatrix(),this.applyMatrix4(y3.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(H2).negate(),this.translate(H2.x,H2.y,H2.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new u5(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new n7);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];W5.setFromBufferAttribute(s),this.morphTargetsRelative?(m5.addVectors(this.boundingBox.min,W5.min),this.boundingBox.expandByPoint(m5),m5.addVectors(this.boundingBox.max,W5.max),this.boundingBox.expandByPoint(m5)):(this.boundingBox.expandByPoint(W5.min),this.boundingBox.expandByPoint(W5.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new i7);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(W5.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];P1.setFromBufferAttribute(o),this.morphTargetsRelative?(m5.addVectors(W5.min,P1.min),W5.expandByPoint(m5),m5.addVectors(W5.max,P1.max),W5.expandByPoint(m5)):(W5.expandByPoint(P1.min),W5.expandByPoint(P1.max))}W5.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)m5.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(m5));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)m5.fromBufferAttribute(o,c),l&&(H2.fromBufferAttribute(e,c),m5.add(H2)),r=Math.max(r,i.distanceToSquared(m5))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new N5(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<o;S++)c[S]=new L,u[S]=new L;const f=new L,h=new L,d=new L,g=new w0,_=new w0,m=new w0,p=new L,b=new L;function y(S,O,X){f.fromArray(r,S*3),h.fromArray(r,O*3),d.fromArray(r,X*3),g.fromArray(a,S*2),_.fromArray(a,O*2),m.fromArray(a,X*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(U),b.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(U),c[S].add(p),c[O].add(p),c[X].add(p),u[S].add(b),u[O].add(b),u[X].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let S=0,O=T.length;S<O;++S){const X=T[S],U=X.start,F=X.count;for(let j=U,Z=U+F;j<Z;j+=3)y(i[j+0],i[j+1],i[j+2])}const A=new L,P=new L,C=new L,I=new L;function M(S){C.fromArray(s,S*3),I.copy(C);const O=c[S];A.copy(O),A.sub(C.multiplyScalar(C.dot(O))).normalize(),P.crossVectors(I,O);const U=P.dot(u[S])<0?-1:1;l[S*4]=A.x,l[S*4+1]=A.y,l[S*4+2]=A.z,l[S*4+3]=U}for(let S=0,O=T.length;S<O;++S){const X=T[S],U=X.start,F=X.count;for(let j=U,Z=U+F;j<Z;j+=3)M(i[j+0]),M(i[j+1]),M(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new N5(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)m5.fromBufferAttribute(e,t),m5.normalize(),e.setXYZ(t,m5.x,m5.y,m5.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new N5(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new c5,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Le=new Z0,l2=new x1,R7=new i7,Ue=new L,G2=new L,k2=new L,V2=new L,v3=new L,P7=new L,C7=new w0,L7=new w0,U7=new w0,De=new L,Ne=new L,Ie=new L,D7=new L,N7=new L;class y5 extends v5{constructor(e=new c5,t=new Q9){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){P7.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(v3.fromBufferAttribute(f,e),a?P7.addScaledVector(v3,u):P7.addScaledVector(v3.sub(t),u))}t.add(P7)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),R7.copy(i.boundingSphere),R7.applyMatrix4(s),l2.copy(e.ray).recast(e.near),!(R7.containsPoint(l2.origin)===!1&&(l2.intersectSphere(R7,Ue)===null||l2.origin.distanceToSquared(Ue)>(e.far-e.near)**2))&&(Le.copy(s).invert(),l2.copy(e.ray).applyMatrix4(Le),!(i.boundingBox!==null&&l2.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,l2)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=b,A=y;T<A;T+=3){const P=o.getX(T),C=o.getX(T+1),I=o.getX(T+2);r=I7(this,p,e,i,c,u,f,P,C,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);r=I7(this,a,e,i,c,u,f,b,y,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=b,A=y;T<A;T+=3){const P=T,C=T+1,I=T+2;r=I7(this,p,e,i,c,u,f,P,C,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,y=m+1,T=m+2;r=I7(this,a,e,i,c,u,f,b,y,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ml(n,e,t,i,r,s,a,o){let l;if(e.side===z5?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===t2,o),l===null)return null;N7.copy(o),N7.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(N7);return c<t.near||c>t.far?null:{distance:c,point:N7.clone(),object:n}}function I7(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,G2),n.getVertexPosition(l,k2),n.getVertexPosition(c,V2);const u=ml(n,e,t,i,G2,k2,V2,D7);if(u){r&&(C7.fromBufferAttribute(r,o),L7.fromBufferAttribute(r,l),U7.fromBufferAttribute(r,c),u.uv=K5.getInterpolation(D7,G2,k2,V2,C7,L7,U7,new w0)),s&&(C7.fromBufferAttribute(s,o),L7.fromBufferAttribute(s,l),U7.fromBufferAttribute(s,c),u.uv1=K5.getInterpolation(D7,G2,k2,V2,C7,L7,U7,new w0),u.uv2=u.uv1),a&&(De.fromBufferAttribute(a,o),Ne.fromBufferAttribute(a,l),Ie.fromBufferAttribute(a,c),u.normal=K5.getInterpolation(D7,G2,k2,V2,De,Ne,Ie,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};K5.getNormal(G2,k2,V2,f.normal),u.face=f}return u}class r7 extends c5{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new u5(c,3)),this.setAttribute("normal",new u5(u,3)),this.setAttribute("uv",new u5(f,2));function g(_,m,p,b,y,T,A,P,C,I,M){const S=T/C,O=A/I,X=T/2,U=A/2,F=P/2,j=C+1,Z=I+1;let H=0,k=0;const o0=new L;for(let a0=0;a0<Z;a0++){const V=a0*O-U;for(let Q=0;Q<j;Q++){const p0=Q*S-X;o0[_]=p0*b,o0[m]=V*y,o0[p]=F,c.push(o0.x,o0.y,o0.z),o0[_]=0,o0[m]=0,o0[p]=P>0?1:-1,u.push(o0.x,o0.y,o0.z),f.push(Q/C),f.push(1-a0/I),H+=1}}for(let a0=0;a0<I;a0++)for(let V=0;V<C;V++){const Q=h+V+j*a0,p0=h+V+j*(a0+1),m0=h+(V+1)+j*(a0+1),x0=h+(V+1)+j*a0;l.push(Q,p0,x0),l.push(p0,m0,x0),k+=6}o.addGroup(d,k,M),d+=k,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r7(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function p1(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function L5(n){const e={};for(let t=0;t<n.length;t++){const i=p1(n[t]);for(const r in i)e[r]=i[r]}return e}function gl(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jn(n){return n.getRenderTarget()===null?n.outputColorSpace:x9}const _l={clone:p1,merge:L5};var yl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class T2 extends M9{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yl,this.fragmentShader=vl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=p1(e.uniforms),this.uniformsGroups=gl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yn extends v5{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Z0,this.projectionMatrix=new Z0,this.projectionMatrixInverse=new Z0,this.coordinateSystem=D9}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class O5 extends Yn{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=J1*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(k1*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return J1*2*Math.atan(Math.tan(k1*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(k1*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const W2=-90,X2=1;class xl extends v5{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new O5(W2,X2,e,t);r.layers=this.layers,this.add(r);const s=new O5(W2,X2,e,t);s.layers=this.layers,this.add(s);const a=new O5(W2,X2,e,t);a.layers=this.layers,this.add(a);const o=new O5(W2,X2,e,t);o.layers=this.layers,this.add(o);const l=new O5(W2,X2,e,t);l.layers=this.layers,this.add(l);const c=new O5(W2,X2,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===D9)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===r4)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=I9,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Kn extends H5{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:f1,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ml extends E2{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(W1("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===x2?z0:M2),this.texture=new Kn(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Y5}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new r7(5,5,5),s=new T2({name:"CubemapFromEquirect",uniforms:p1(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:z5,blending:Z9});s.uniforms.tEquirect.value=t;const a=new y5(r,s),o=t.minFilter;return t.minFilter===$1&&(t.minFilter=Y5),new xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const x3=new L,Sl=new L,El=new k0;class u2{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=x3.subVectors(i,t).cross(Sl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(x3),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||El.getNormalMatrix(e),r=this.coplanarPoint(x3).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const c2=new i7,O7=new L;class z6{constructor(e=new u2,t=new u2,i=new u2,r=new u2,s=new u2,a=new u2){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=D9){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],b=r[13],y=r[14],T=r[15];if(i[0].setComponents(l-s,h-c,m-d,T-p).normalize(),i[1].setComponents(l+s,h+c,m+d,T+p).normalize(),i[2].setComponents(l+a,h+u,m+g,T+b).normalize(),i[3].setComponents(l-a,h-u,m-g,T-b).normalize(),i[4].setComponents(l-o,h-f,m-_,T-y).normalize(),t===D9)i[5].setComponents(l+o,h+f,m+_,T+y).normalize();else if(t===r4)i[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),c2.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),c2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(c2)}intersectsSprite(e){return c2.center.set(0,0,0),c2.radius=.7071067811865476,c2.applyMatrix4(e.matrixWorld),this.intersectsSphere(c2)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(O7.x=r.normal.x>0?e.max.x:e.min.x,O7.y=r.normal.y>0?e.max.y:e.min.y,O7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(O7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $n(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bl(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class s7 extends c5{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*h-a;for(let y=0;y<c;y++){const T=y*f-s;g.push(T,-b,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const y=b+c*p,T=b+c*(p+1),A=b+1+c*(p+1),P=b+1+c*p;d.push(y,T,P),d.push(T,A,P)}this.setIndex(d),this.setAttribute("position",new u5(g,3)),this.setAttribute("normal",new u5(_,3)),this.setAttribute("uv",new u5(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s7(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Al=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ll=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ul=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Il=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ol=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ql=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$l=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ql="gl_FragColor = linearToOutputTexel( gl_FragColor );",ec=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ic=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ac=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_c=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Sc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ec=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ac=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cc=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Lc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ic=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Gc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$c=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,au=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_u=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Su=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ru=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Du=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ou=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ju=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ju=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B0={alphahash_fragment:Tl,alphahash_pars_fragment:Al,alphamap_fragment:wl,alphamap_pars_fragment:Rl,alphatest_fragment:Pl,alphatest_pars_fragment:Cl,aomap_fragment:Ll,aomap_pars_fragment:Ul,begin_vertex:Dl,beginnormal_vertex:Nl,bsdfs:Il,iridescence_fragment:Ol,bumpmap_pars_fragment:Fl,clipping_planes_fragment:Bl,clipping_planes_pars_fragment:zl,clipping_planes_pars_vertex:Hl,clipping_planes_vertex:Gl,color_fragment:kl,color_pars_fragment:Vl,color_pars_vertex:Wl,color_vertex:Xl,common:ql,cube_uv_reflection_fragment:jl,defaultnormal_vertex:Yl,displacementmap_pars_vertex:Kl,displacementmap_vertex:$l,emissivemap_fragment:Zl,emissivemap_pars_fragment:Jl,colorspace_fragment:Ql,colorspace_pars_fragment:ec,envmap_fragment:tc,envmap_common_pars_fragment:nc,envmap_pars_fragment:ic,envmap_pars_vertex:rc,envmap_physical_pars_fragment:gc,envmap_vertex:sc,fog_vertex:oc,fog_pars_vertex:ac,fog_fragment:lc,fog_pars_fragment:cc,gradientmap_pars_fragment:uc,lightmap_fragment:fc,lightmap_pars_fragment:hc,lights_lambert_fragment:dc,lights_lambert_pars_fragment:pc,lights_pars_begin:mc,lights_toon_fragment:_c,lights_toon_pars_fragment:yc,lights_phong_fragment:vc,lights_phong_pars_fragment:xc,lights_physical_fragment:Mc,lights_physical_pars_fragment:Sc,lights_fragment_begin:Ec,lights_fragment_maps:bc,lights_fragment_end:Tc,logdepthbuf_fragment:Ac,logdepthbuf_pars_fragment:wc,logdepthbuf_pars_vertex:Rc,logdepthbuf_vertex:Pc,map_fragment:Cc,map_pars_fragment:Lc,map_particle_fragment:Uc,map_particle_pars_fragment:Dc,metalnessmap_fragment:Nc,metalnessmap_pars_fragment:Ic,morphcolor_vertex:Oc,morphnormal_vertex:Fc,morphtarget_pars_vertex:Bc,morphtarget_vertex:zc,normal_fragment_begin:Hc,normal_fragment_maps:Gc,normal_pars_fragment:kc,normal_pars_vertex:Vc,normal_vertex:Wc,normalmap_pars_fragment:Xc,clearcoat_normal_fragment_begin:qc,clearcoat_normal_fragment_maps:jc,clearcoat_pars_fragment:Yc,iridescence_pars_fragment:Kc,opaque_fragment:$c,packing:Zc,premultiplied_alpha_fragment:Jc,project_vertex:Qc,dithering_fragment:eu,dithering_pars_fragment:tu,roughnessmap_fragment:nu,roughnessmap_pars_fragment:iu,shadowmap_pars_fragment:ru,shadowmap_pars_vertex:su,shadowmap_vertex:ou,shadowmask_pars_fragment:au,skinbase_vertex:lu,skinning_pars_vertex:cu,skinning_vertex:uu,skinnormal_vertex:fu,specularmap_fragment:hu,specularmap_pars_fragment:du,tonemapping_fragment:pu,tonemapping_pars_fragment:mu,transmission_fragment:gu,transmission_pars_fragment:_u,uv_pars_fragment:yu,uv_pars_vertex:vu,uv_vertex:xu,worldpos_vertex:Mu,background_vert:Su,background_frag:Eu,backgroundCube_vert:bu,backgroundCube_frag:Tu,cube_vert:Au,cube_frag:wu,depth_vert:Ru,depth_frag:Pu,distanceRGBA_vert:Cu,distanceRGBA_frag:Lu,equirect_vert:Uu,equirect_frag:Du,linedashed_vert:Nu,linedashed_frag:Iu,meshbasic_vert:Ou,meshbasic_frag:Fu,meshlambert_vert:Bu,meshlambert_frag:zu,meshmatcap_vert:Hu,meshmatcap_frag:Gu,meshnormal_vert:ku,meshnormal_frag:Vu,meshphong_vert:Wu,meshphong_frag:Xu,meshphysical_vert:qu,meshphysical_frag:ju,meshtoon_vert:Yu,meshtoon_frag:Ku,points_vert:$u,points_frag:Zu,shadow_vert:Ju,shadow_frag:Qu,sprite_vert:ef,sprite_frag:tf},d0={common:{diffuse:{value:new X0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k0},alphaMap:{value:null},alphaMapTransform:{value:new k0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k0},normalScale:{value:new w0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new X0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k0},alphaTest:{value:0},uvTransform:{value:new k0}},sprite:{diffuse:{value:new X0(16777215)},opacity:{value:1},center:{value:new w0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k0},alphaMap:{value:null},alphaMapTransform:{value:new k0},alphaTest:{value:0}}},_9={basic:{uniforms:L5([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.fog]),vertexShader:B0.meshbasic_vert,fragmentShader:B0.meshbasic_frag},lambert:{uniforms:L5([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,d0.lights,{emissive:{value:new X0(0)}}]),vertexShader:B0.meshlambert_vert,fragmentShader:B0.meshlambert_frag},phong:{uniforms:L5([d0.common,d0.specularmap,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,d0.lights,{emissive:{value:new X0(0)},specular:{value:new X0(1118481)},shininess:{value:30}}]),vertexShader:B0.meshphong_vert,fragmentShader:B0.meshphong_frag},standard:{uniforms:L5([d0.common,d0.envmap,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.roughnessmap,d0.metalnessmap,d0.fog,d0.lights,{emissive:{value:new X0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:B0.meshphysical_vert,fragmentShader:B0.meshphysical_frag},toon:{uniforms:L5([d0.common,d0.aomap,d0.lightmap,d0.emissivemap,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.gradientmap,d0.fog,d0.lights,{emissive:{value:new X0(0)}}]),vertexShader:B0.meshtoon_vert,fragmentShader:B0.meshtoon_frag},matcap:{uniforms:L5([d0.common,d0.bumpmap,d0.normalmap,d0.displacementmap,d0.fog,{matcap:{value:null}}]),vertexShader:B0.meshmatcap_vert,fragmentShader:B0.meshmatcap_frag},points:{uniforms:L5([d0.points,d0.fog]),vertexShader:B0.points_vert,fragmentShader:B0.points_frag},dashed:{uniforms:L5([d0.common,d0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:B0.linedashed_vert,fragmentShader:B0.linedashed_frag},depth:{uniforms:L5([d0.common,d0.displacementmap]),vertexShader:B0.depth_vert,fragmentShader:B0.depth_frag},normal:{uniforms:L5([d0.common,d0.bumpmap,d0.normalmap,d0.displacementmap,{opacity:{value:1}}]),vertexShader:B0.meshnormal_vert,fragmentShader:B0.meshnormal_frag},sprite:{uniforms:L5([d0.sprite,d0.fog]),vertexShader:B0.sprite_vert,fragmentShader:B0.sprite_frag},background:{uniforms:{uvTransform:{value:new k0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:B0.background_vert,fragmentShader:B0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:B0.backgroundCube_vert,fragmentShader:B0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:B0.cube_vert,fragmentShader:B0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:B0.equirect_vert,fragmentShader:B0.equirect_frag},distanceRGBA:{uniforms:L5([d0.common,d0.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:B0.distanceRGBA_vert,fragmentShader:B0.distanceRGBA_frag},shadow:{uniforms:L5([d0.lights,d0.fog,{color:{value:new X0(0)},opacity:{value:1}}]),vertexShader:B0.shadow_vert,fragmentShader:B0.shadow_frag}};_9.physical={uniforms:L5([_9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k0},clearcoatNormalScale:{value:new w0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k0},sheen:{value:0},sheenColor:{value:new X0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k0},transmissionSamplerSize:{value:new w0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k0},attenuationDistance:{value:0},attenuationColor:{value:new X0(0)},specularColor:{value:new X0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k0},anisotropyVector:{value:new w0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k0}}]),vertexShader:B0.meshphysical_vert,fragmentShader:B0.meshphysical_frag};const F7={r:0,b:0,g:0};function nf(n,e,t,i,r,s,a){const o=new X0(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let b=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),b=!0),n.xr.getEnvironmentBlendMode()){case"opaque":b=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),b=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),b=!0;break}(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===S4)?(u===void 0&&(u=new y5(new r7(1,1,1),new T2({name:"BackgroundCubeMaterial",uniforms:p1(_9.backgroundCube.uniforms),vertexShader:_9.backgroundCube.vertexShader,fragmentShader:_9.backgroundCube.fragmentShader,side:z5,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==z0,(f!==y||h!==y.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new y5(new s7(2,2),new T2({name:"BackgroundMaterial",uniforms:p1(_9.background.uniforms),vertexShader:_9.background.vertexShader,fragmentShader:_9.background.fragmentShader,side:t2,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==z0,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(F7,jn(n)),i.buffers.color.setClear(F7.r,F7.g,F7.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function rf(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(F,j,Z,H,k){let o0=!1;if(a){const a0=_(H,Z,j);c!==a0&&(c=a0,d(c.object)),o0=p(F,H,Z,k),o0&&b(F,H,Z,k)}else{const a0=j.wireframe===!0;(c.geometry!==H.id||c.program!==Z.id||c.wireframe!==a0)&&(c.geometry=H.id,c.program=Z.id,c.wireframe=a0,o0=!0)}k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(o0||u)&&(u=!1,I(F,j,Z,H),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function _(F,j,Z){const H=Z.wireframe===!0;let k=o[F.id];k===void 0&&(k={},o[F.id]=k);let o0=k[j.id];o0===void 0&&(o0={},k[j.id]=o0);let a0=o0[H];return a0===void 0&&(a0=m(h()),o0[H]=a0),a0}function m(F){const j=[],Z=[],H=[];for(let k=0;k<r;k++)j[k]=0,Z[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:H,object:F,attributes:{},index:null}}function p(F,j,Z,H){const k=c.attributes,o0=j.attributes;let a0=0;const V=Z.getAttributes();for(const Q in V)if(V[Q].location>=0){const m0=k[Q];let x0=o0[Q];if(x0===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(x0=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(x0=F.instanceColor)),m0===void 0||m0.attribute!==x0||x0&&m0.data!==x0.data)return!0;a0++}return c.attributesNum!==a0||c.index!==H}function b(F,j,Z,H){const k={},o0=j.attributes;let a0=0;const V=Z.getAttributes();for(const Q in V)if(V[Q].location>=0){let m0=o0[Q];m0===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(m0=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(m0=F.instanceColor));const x0={};x0.attribute=m0,m0&&m0.data&&(x0.data=m0.data),k[Q]=x0,a0++}c.attributes=k,c.attributesNum=a0,c.index=H}function y(){const F=c.newAttributes;for(let j=0,Z=F.length;j<Z;j++)F[j]=0}function T(F){A(F,0)}function A(F,j){const Z=c.newAttributes,H=c.enabledAttributes,k=c.attributeDivisors;Z[F]=1,H[F]===0&&(n.enableVertexAttribArray(F),H[F]=1),k[F]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),k[F]=j)}function P(){const F=c.newAttributes,j=c.enabledAttributes;for(let Z=0,H=j.length;Z<H;Z++)j[Z]!==F[Z]&&(n.disableVertexAttribArray(Z),j[Z]=0)}function C(F,j,Z,H,k,o0,a0){a0===!0?n.vertexAttribIPointer(F,j,Z,k,o0):n.vertexAttribPointer(F,j,Z,H,k,o0)}function I(F,j,Z,H){if(i.isWebGL2===!1&&(F.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const k=H.attributes,o0=Z.getAttributes(),a0=j.defaultAttributeValues;for(const V in o0){const Q=o0[V];if(Q.location>=0){let p0=k[V];if(p0===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(p0=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(p0=F.instanceColor)),p0!==void 0){const m0=p0.normalized,x0=p0.itemSize,b0=t.get(p0);if(b0===void 0)continue;const L0=b0.buffer,R0=b0.type,G0=b0.bytesPerElement,r5=i.isWebGL2===!0&&(R0===n.INT||R0===n.UNSIGNED_INT||p0.gpuType===Un);if(p0.isInterleavedBufferAttribute){const I0=p0.data,v=I0.stride,D=p0.offset;if(I0.isInstancedInterleavedBuffer){for(let B=0;B<Q.locationSize;B++)A(Q.location+B,I0.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=I0.meshPerAttribute*I0.count)}else for(let B=0;B<Q.locationSize;B++)T(Q.location+B);n.bindBuffer(n.ARRAY_BUFFER,L0);for(let B=0;B<Q.locationSize;B++)C(Q.location+B,x0/Q.locationSize,R0,m0,v*G0,(D+x0/Q.locationSize*B)*G0,r5)}else{if(p0.isInstancedBufferAttribute){for(let I0=0;I0<Q.locationSize;I0++)A(Q.location+I0,p0.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=p0.meshPerAttribute*p0.count)}else for(let I0=0;I0<Q.locationSize;I0++)T(Q.location+I0);n.bindBuffer(n.ARRAY_BUFFER,L0);for(let I0=0;I0<Q.locationSize;I0++)C(Q.location+I0,x0/Q.locationSize,R0,m0,x0*G0,x0/Q.locationSize*I0*G0,r5)}}else if(a0!==void 0){const m0=a0[V];if(m0!==void 0)switch(m0.length){case 2:n.vertexAttrib2fv(Q.location,m0);break;case 3:n.vertexAttrib3fv(Q.location,m0);break;case 4:n.vertexAttrib4fv(Q.location,m0);break;default:n.vertexAttrib1fv(Q.location,m0)}}}}P()}function M(){X();for(const F in o){const j=o[F];for(const Z in j){const H=j[Z];for(const k in H)g(H[k].object),delete H[k];delete j[Z]}delete o[F]}}function S(F){if(o[F.id]===void 0)return;const j=o[F.id];for(const Z in j){const H=j[Z];for(const k in H)g(H[k].object),delete H[k];delete j[Z]}delete o[F.id]}function O(F){for(const j in o){const Z=o[j];if(Z[F.id]===void 0)continue;const H=Z[F.id];for(const k in H)g(H[k].object),delete H[k];delete Z[F.id]}}function X(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:X,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:T,disableUnusedAttributes:P}}function sf(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function of(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,T=a||e.has("OES_texture_float"),A=y&&T,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:A,maxSamples:P}}function af(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new u2,o=new k0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,y=b*4;let T=p.clippingState||null;l.value=T,T=u(g,h,y,d);for(let A=0;A!==y;++A)T[A]=t[A];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==_;++y,T+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lf(n){let e=new WeakMap;function t(a,o){return o===Q3?a.mapping=f1:o===e6&&(a.mapping=h1),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Q3||o===e6)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ml(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cf extends Yn{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const t1=4,Oe=[.125,.215,.35,.446,.526,.582],p2=20,M3=new cf,Fe=new X0;let S3=null;const f2=(1+Math.sqrt(5))/2,q2=1/f2,Be=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,f2,q2),new L(0,f2,-q2),new L(q2,0,f2),new L(-q2,0,f2),new L(f2,q2,0),new L(-f2,q2,0)];class ze{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){S3=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ke(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ge(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(S3),e.scissorTest=!1,B7(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===f1||e.mapping===h1?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),S3=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Y5,minFilter:Y5,generateMipmaps:!1,type:Z1,format:o9,colorSpace:x9,depthBuffer:!1},r=He(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=He(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(s)),this._blurMaterial=ff(s,e,t)}return r}_compileMaterial(e){const t=new y5(this._lodPlanes[0],e);this._renderer.compile(t,M3)}_sceneToCubeUV(e,t,i,r){const o=new O5(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Fe),u.toneMapping=I9,u.autoClear=!1;const d=new Q9({name:"PMREM.Background",side:z5,depthWrite:!1,depthTest:!1}),g=new y5(new r7,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Fe),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;B7(r,b*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===f1||e.mapping===h1;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ke()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ge());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new y5(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;B7(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,M3)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Be[(r-1)%Be.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new y5(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*p2-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):p2;m>p2&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${p2}`);const p=[];let b=0;for(let C=0;C<p2;++C){const I=C/_,M=Math.exp(-I*I/2);p.push(M),C===0?b+=M:C<m&&(b+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const T=this._sizeLods[r],A=3*T*(r>y-t1?r-y+t1:0),P=4*(this._cubeSize-T);B7(t,A,P,3*T,2*T),l.setRenderTarget(t),l.render(f,M3)}}function uf(n){const e=[],t=[],i=[];let r=n;const s=n-t1+1+Oe.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-t1?l=Oe[a-n+t1-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),y=new Float32Array(m*g*d),T=new Float32Array(p*g*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,I=P>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(M,_*g*P),y.set(h,m*g*P);const S=[P,P,P,P,P,P];T.set(S,p*g*P)}const A=new c5;A.setAttribute("position",new N5(b,_)),A.setAttribute("uv",new N5(y,m)),A.setAttribute("faceIndex",new N5(T,p)),e.push(A),r>t1&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function He(n,e,t){const i=new E2(n,e,t);return i.texture.mapping=S4,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function B7(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ff(n,e,t){const i=new Float32Array(p2),r=new L(0,1,0);return new T2({name:"SphericalGaussianBlur",defines:{n:p2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:H6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Z9,depthTest:!1,depthWrite:!1})}function Ge(){return new T2({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:H6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Z9,depthTest:!1,depthWrite:!1})}function ke(){return new T2({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:H6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Z9,depthTest:!1,depthWrite:!1})}function H6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Q3||l===e6,u=l===f1||l===h1;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ze(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new ze(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function df(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pf(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let y=0,T=b.length;y<T;y+=3){const A=b[y+0],P=b[y+1],C=b[y+2];h.push(A,P,P,C,C,A)}}else{const b=g.array;_=g.version;for(let y=0,T=b.length/3-1;y<T;y+=3){const A=y+0,P=y+1,C=y+2;h.push(A,P,P,C,C,A)}}const m=new(Hn(h)?qn:Xn)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function mf(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,o,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,o,h*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function gf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function _f(n,e){return n[0]-e[0]}function yf(n,e){return Math.abs(e[1])-Math.abs(n[1])}function vf(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Q0,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let F=function(){X.dispose(),s.delete(u),u.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;b===!0&&(I=1),y===!0&&(I=2),T===!0&&(I=3);let M=u.attributes.position.count*I,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const O=new Float32Array(M*S*4*g),X=new Vn(O,M,S,g);X.type=Y9,X.needsUpdate=!0;const U=I*4;for(let j=0;j<g;j++){const Z=A[j],H=P[j],k=C[j],o0=M*S*4*j;for(let a0=0;a0<Z.count;a0++){const V=a0*U;b===!0&&(a.fromBufferAttribute(Z,a0),O[o0+V+0]=a.x,O[o0+V+1]=a.y,O[o0+V+2]=a.z,O[o0+V+3]=0),y===!0&&(a.fromBufferAttribute(H,a0),O[o0+V+4]=a.x,O[o0+V+5]=a.y,O[o0+V+6]=a.z,O[o0+V+7]=0),T===!0&&(a.fromBufferAttribute(k,a0),O[o0+V+8]=a.x,O[o0+V+9]=a.y,O[o0+V+10]=a.z,O[o0+V+11]=k.itemSize===4?a.w:1)}}_={count:g,texture:X,size:new w0(M,S)},s.set(u,_),u.addEventListener("dispose",F)}let m=0;for(let b=0;b<h.length;b++)m+=h[b];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",p),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let y=0;y<d;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<d;y++){const T=g[y];T[0]=y,T[1]=h[y]}g.sort(yf);for(let y=0;y<8;y++)y<d&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(_f);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const T=o[y],A=T[0],P=T[1];A!==Number.MAX_SAFE_INTEGER&&P?(_&&u.getAttribute("morphTarget"+y)!==_[A]&&u.setAttribute("morphTarget"+y,_[A]),m&&u.getAttribute("morphNormal"+y)!==m[A]&&u.setAttribute("morphNormal"+y,m[A]),r[y]=P,p+=P):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const b=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function xf(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Zn=new H5,Jn=new Vn,Qn=new sl,ei=new Kn,Ve=[],We=[],Xe=new Float32Array(16),qe=new Float32Array(9),je=new Float32Array(4);function M1(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ve[r];if(s===void 0&&(s=new Float32Array(r),Ve[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function f5(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function h5(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function T4(n,e){let t=We[e];t===void 0&&(t=new Int32Array(e),We[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f5(t,e))return;n.uniform2fv(this.addr,e),h5(t,e)}}function Ef(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(f5(t,e))return;n.uniform3fv(this.addr,e),h5(t,e)}}function bf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f5(t,e))return;n.uniform4fv(this.addr,e),h5(t,e)}}function Tf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(f5(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),h5(t,e)}else{if(f5(t,i))return;je.set(i),n.uniformMatrix2fv(this.addr,!1,je),h5(t,i)}}function Af(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(f5(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),h5(t,e)}else{if(f5(t,i))return;qe.set(i),n.uniformMatrix3fv(this.addr,!1,qe),h5(t,i)}}function wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(f5(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),h5(t,e)}else{if(f5(t,i))return;Xe.set(i),n.uniformMatrix4fv(this.addr,!1,Xe),h5(t,i)}}function Rf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f5(t,e))return;n.uniform2iv(this.addr,e),h5(t,e)}}function Cf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(f5(t,e))return;n.uniform3iv(this.addr,e),h5(t,e)}}function Lf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f5(t,e))return;n.uniform4iv(this.addr,e),h5(t,e)}}function Uf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Df(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(f5(t,e))return;n.uniform2uiv(this.addr,e),h5(t,e)}}function Nf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(f5(t,e))return;n.uniform3uiv(this.addr,e),h5(t,e)}}function If(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(f5(t,e))return;n.uniform4uiv(this.addr,e),h5(t,e)}}function Of(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zn,r)}function Ff(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qn,r)}function Bf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ei,r)}function zf(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jn,r)}function Hf(n){switch(n){case 5126:return Mf;case 35664:return Sf;case 35665:return Ef;case 35666:return bf;case 35674:return Tf;case 35675:return Af;case 35676:return wf;case 5124:case 35670:return Rf;case 35667:case 35671:return Pf;case 35668:case 35672:return Cf;case 35669:case 35673:return Lf;case 5125:return Uf;case 36294:return Df;case 36295:return Nf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return zf}}function Gf(n,e){n.uniform1fv(this.addr,e)}function kf(n,e){const t=M1(e,this.size,2);n.uniform2fv(this.addr,t)}function Vf(n,e){const t=M1(e,this.size,3);n.uniform3fv(this.addr,t)}function Wf(n,e){const t=M1(e,this.size,4);n.uniform4fv(this.addr,t)}function Xf(n,e){const t=M1(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qf(n,e){const t=M1(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jf(n,e){const t=M1(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yf(n,e){n.uniform1iv(this.addr,e)}function Kf(n,e){n.uniform2iv(this.addr,e)}function $f(n,e){n.uniform3iv(this.addr,e)}function Zf(n,e){n.uniform4iv(this.addr,e)}function Jf(n,e){n.uniform1uiv(this.addr,e)}function Qf(n,e){n.uniform2uiv(this.addr,e)}function eh(n,e){n.uniform3uiv(this.addr,e)}function th(n,e){n.uniform4uiv(this.addr,e)}function nh(n,e,t){const i=this.cache,r=e.length,s=T4(t,r);f5(i,s)||(n.uniform1iv(this.addr,s),h5(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Zn,s[a])}function ih(n,e,t){const i=this.cache,r=e.length,s=T4(t,r);f5(i,s)||(n.uniform1iv(this.addr,s),h5(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Qn,s[a])}function rh(n,e,t){const i=this.cache,r=e.length,s=T4(t,r);f5(i,s)||(n.uniform1iv(this.addr,s),h5(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ei,s[a])}function sh(n,e,t){const i=this.cache,r=e.length,s=T4(t,r);f5(i,s)||(n.uniform1iv(this.addr,s),h5(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Jn,s[a])}function oh(n){switch(n){case 5126:return Gf;case 35664:return kf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return jf;case 5124:case 35670:return Yf;case 35667:case 35671:return Kf;case 35668:case 35672:return $f;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return eh;case 36296:return th;case 35678:case 36198:case 36298:case 36306:case 35682:return nh;case 35679:case 36299:case 36307:return ih;case 35680:case 36300:case 36308:case 36293:return rh;case 36289:case 36303:case 36311:case 36292:return sh}}class ah{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Hf(t.type)}}class lh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=oh(t.type)}}class ch{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const E3=/(\w+)(\])?(\[|\.)?/g;function Ye(n,e){n.seq.push(e),n.map[e.id]=e}function uh(n,e,t){const i=n.name,r=i.length;for(E3.lastIndex=0;;){const s=E3.exec(i),a=E3.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ye(t,c===void 0?new ah(o,n,e):new lh(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ch(o),Ye(t,f)),t=f}}}class J7{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);uh(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ke(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let fh=0;function hh(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function dh(n){switch(n){case x9:return["Linear","( value )"];case z0:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function $e(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hh(n.getShaderSource(e),a)}else return r}function ph(n,e){const t=dh(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mh(n,e){let t;switch(e){case ua:t="Linear";break;case fa:t="Reinhard";break;case ha:t="OptimizedCineon";break;case da:t="ACESFilmic";break;case pa:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gh(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(B1).join(`
`)}function _h(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yh(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function B1(n){return n!==""}function Ze(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Je(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vh=/^[ \t]*#include +<([\w\d./]+)>/gm;function o6(n){return n.replace(vh,Mh)}const xh=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Mh(n,e){let t=B0[e];if(t===void 0){const i=xh.get(e);if(i!==void 0)t=B0[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return o6(t)}const Sh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qe(n){return n.replace(Sh,Eh)}function Eh(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function et(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bh(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rn?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ko?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===L9&&(e="SHADOWMAP_TYPE_VSM"),e}function Th(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case f1:case h1:e="ENVMAP_TYPE_CUBE";break;case S4:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ah(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case h1:e="ENVMAP_MODE_REFRACTION";break}return e}function wh(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case M4:e="ENVMAP_BLENDING_MULTIPLY";break;case la:e="ENVMAP_BLENDING_MIX";break;case ca:e="ENVMAP_BLENDING_ADD";break}return e}function Rh(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ph(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bh(t),c=Th(t),u=Ah(t),f=wh(t),h=Rh(t),d=t.isWebGL2?"":gh(t),g=_h(s),_=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(B1).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(B1).join(`
`),p.length>0&&(p+=`
`)):(m=[et(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(B1).join(`
`),p=[d,et(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==I9?"#define TONE_MAPPING":"",t.toneMapping!==I9?B0.tonemapping_pars_fragment:"",t.toneMapping!==I9?mh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",B0.colorspace_pars_fragment,ph("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(B1).join(`
`)),a=o6(a),a=Ze(a,t),a=Je(a,t),o=o6(o),o=Ze(o,t),o=Je(o,t),a=Qe(a),o=Qe(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ve?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ve?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+m+a,T=b+p+o,A=Ke(r,r.VERTEX_SHADER,y),P=Ke(r,r.FRAGMENT_SHADER,T);if(r.attachShader(_,A),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),S=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(P).trim();let X=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,P);else{const F=$e(r,A,"vertex"),j=$e(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+F+`
`+j)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||O==="")&&(U=!1);U&&(this.diagnostics={runnable:X,programLog:M,vertexShader:{log:S,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(A),r.deleteShader(P);let C;this.getUniforms=function(){return C===void 0&&(C=new J7(r,_)),C};let I;return this.getAttributes=function(){return I===void 0&&(I=yh(r,_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fh++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=P,this}let Ch=0;class Lh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Uh(e),t.set(e,i)),i}}class Uh{constructor(e){this.id=Ch++,this.code=e,this.usedTimes=0}}function Dh(n,e,t,i,r,s,a){const o=new B6,l=new Lh,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,O,X,U){const F=X.fog,j=U.geometry,Z=M.isMeshStandardMaterial?X.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),k=H&&H.mapping===S4?H.image.height:null,o0=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const a0=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,V=a0!==void 0?a0.length:0;let Q=0;j.morphAttributes.position!==void 0&&(Q=1),j.morphAttributes.normal!==void 0&&(Q=2),j.morphAttributes.color!==void 0&&(Q=3);let p0,m0,x0,b0;if(o0){const f9=_9[o0];p0=f9.vertexShader,m0=f9.fragmentShader}else p0=M.vertexShader,m0=M.fragmentShader,l.update(M),x0=l.getVertexShaderID(M),b0=l.getFragmentShaderID(M);const L0=n.getRenderTarget(),R0=U.isInstancedMesh===!0,G0=!!M.map,r5=!!M.matcap,I0=!!H,v=!!M.aoMap,D=!!M.lightMap,B=!!M.bumpMap,Y=!!M.normalMap,W=!!M.displacementMap,c0=!!M.emissiveMap,u0=!!M.metalnessMap,J=!!M.roughnessMap,l0=M.anisotropy>0,s0=M.clearcoat>0,v0=M.iridescence>0,E=M.sheen>0,x=M.transmission>0,z=l0&&!!M.anisotropyMap,e0=s0&&!!M.clearcoatMap,r0=s0&&!!M.clearcoatNormalMap,R=s0&&!!M.clearcoatRoughnessMap,t0=v0&&!!M.iridescenceMap,f0=v0&&!!M.iridescenceThicknessMap,K=E&&!!M.sheenColorMap,S0=E&&!!M.sheenRoughnessMap,T0=!!M.specularMap,A0=!!M.specularColorMap,g0=!!M.specularIntensityMap,_0=x&&!!M.transmissionMap,P0=x&&!!M.thicknessMap,W0=!!M.gradientMap,N=!!M.alphaMap,y0=M.alphaTest>0,$=!!M.alphaHash,h0=!!M.extensions,M0=!!j.attributes.uv1,Y0=!!j.attributes.uv2,t5=!!j.attributes.uv3;return{isWebGL2:u,shaderID:o0,shaderType:M.type,shaderName:M.name,vertexShader:p0,fragmentShader:m0,defines:M.defines,customVertexShaderID:x0,customFragmentShaderID:b0,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:R0,instancingColor:R0&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:L0===null?n.outputColorSpace:L0.isXRRenderTarget===!0?L0.texture.colorSpace:x9,map:G0,matcap:r5,envMap:I0,envMapMode:I0&&H.mapping,envMapCubeUVHeight:k,aoMap:v,lightMap:D,bumpMap:B,normalMap:Y,displacementMap:h&&W,emissiveMap:c0,normalMapObjectSpace:Y&&M.normalMapType===wa,normalMapTangentSpace:Y&&M.normalMapType===E4,metalnessMap:u0,roughnessMap:J,anisotropy:l0,anisotropyMap:z,clearcoat:s0,clearcoatMap:e0,clearcoatNormalMap:r0,clearcoatRoughnessMap:R,iridescence:v0,iridescenceMap:t0,iridescenceThicknessMap:f0,sheen:E,sheenColorMap:K,sheenRoughnessMap:S0,specularMap:T0,specularColorMap:A0,specularIntensityMap:g0,transmission:x,transmissionMap:_0,thicknessMap:P0,gradientMap:W0,opaque:M.transparent===!1&&M.blending===a1,alphaMap:N,alphaTest:y0,alphaHash:$,combine:M.combine,mapUv:G0&&_(M.map.channel),aoMapUv:v&&_(M.aoMap.channel),lightMapUv:D&&_(M.lightMap.channel),bumpMapUv:B&&_(M.bumpMap.channel),normalMapUv:Y&&_(M.normalMap.channel),displacementMapUv:W&&_(M.displacementMap.channel),emissiveMapUv:c0&&_(M.emissiveMap.channel),metalnessMapUv:u0&&_(M.metalnessMap.channel),roughnessMapUv:J&&_(M.roughnessMap.channel),anisotropyMapUv:z&&_(M.anisotropyMap.channel),clearcoatMapUv:e0&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:r0&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:t0&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:f0&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:S0&&_(M.sheenRoughnessMap.channel),specularMapUv:T0&&_(M.specularMap.channel),specularColorMapUv:A0&&_(M.specularColorMap.channel),specularIntensityMapUv:g0&&_(M.specularIntensityMap.channel),transmissionMapUv:_0&&_(M.transmissionMap.channel),thicknessMapUv:P0&&_(M.thicknessMap.channel),alphaMapUv:N&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Y||l0),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:M0,vertexUv2s:Y0,vertexUv3s:t5,pointsUvs:U.isPoints===!0&&!!j.attributes.uv&&(G0||N),fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:I9,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===F5,flipSided:M.side===z5,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:h0&&M.extensions.derivatives===!0,extensionFragDepth:h0&&M.extensions.fragDepth===!0,extensionDrawBuffers:h0&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:h0&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)S.push(O),S.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(b(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),M.push(o.mask)}function T(M){const S=g[M.type];let O;if(S){const X=_9[S];O=_l.clone(X.uniforms)}else O=M.uniforms;return O}function A(M,S){let O;for(let X=0,U=c.length;X<U;X++){const F=c[X];if(F.cacheKey===S){O=F,++O.usedTimes;break}}return O===void 0&&(O=new Ph(n,S,M,s),c.push(O)),O}function P(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:A,releaseProgram:P,releaseShaderCache:C,programs:c,dispose:I}}function Nh(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ih(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tt(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nt(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Ih),i.length>1&&i.sort(h||tt),r.length>1&&r.sort(h||tt)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Oh(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new nt,n.set(i,[a])):r>=s.length?(a=new nt,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fh(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new X0};break;case"SpotLight":t={position:new L,direction:new L,color:new X0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new X0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new X0,groundColor:new X0};break;case"RectAreaLight":t={color:new X0,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Bh(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new w0,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zh=0;function Hh(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gh(n,e){const t=new Fh,i=Bh(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new L);const s=new L,a=new Z0,o=new Z0;function l(u,f){let h=0,d=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let _=0,m=0,p=0,b=0,y=0,T=0,A=0,P=0,C=0,I=0;u.sort(Hh);const M=f===!0?Math.PI:1;for(let O=0,X=u.length;O<X;O++){const U=u[O],F=U.color,j=U.intensity,Z=U.distance,H=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=F.r*j*M,d+=F.g*j*M,g+=F.b*j*M;else if(U.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(U.sh.coefficients[k],j);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const o0=U.shadow,a0=i.get(U);a0.shadowBias=o0.bias,a0.shadowNormalBias=o0.normalBias,a0.shadowRadius=o0.radius,a0.shadowMapSize=o0.mapSize,r.directionalShadow[_]=a0,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=U.shadow.matrix,T++}r.directional[_]=k,_++}else if(U.isSpotLight){const k=t.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(F).multiplyScalar(j*M),k.distance=Z,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,r.spot[p]=k;const o0=U.shadow;if(U.map&&(r.spotLightMap[C]=U.map,C++,o0.updateMatrices(U),U.castShadow&&I++),r.spotLightMatrix[p]=o0.matrix,U.castShadow){const a0=i.get(U);a0.shadowBias=o0.bias,a0.shadowNormalBias=o0.normalBias,a0.shadowRadius=o0.radius,a0.shadowMapSize=o0.mapSize,r.spotShadow[p]=a0,r.spotShadowMap[p]=H,P++}p++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(F).multiplyScalar(j),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),r.rectArea[b]=k,b++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*M),k.distance=U.distance,k.decay=U.decay,U.castShadow){const o0=U.shadow,a0=i.get(U);a0.shadowBias=o0.bias,a0.shadowNormalBias=o0.normalBias,a0.shadowRadius=o0.radius,a0.shadowMapSize=o0.mapSize,a0.shadowCameraNear=o0.camera.near,a0.shadowCameraFar=o0.camera.far,r.pointShadow[m]=a0,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=U.shadow.matrix,A++}r.point[m]=k,m++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(j*M),k.groundColor.copy(U.groundColor).multiplyScalar(j*M),r.hemi[y]=k,y++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=d0.LTC_FLOAT_1,r.rectAreaLTC2=d0.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=d0.LTC_HALF_1,r.rectAreaLTC2=d0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const S=r.hash;(S.directionalLength!==_||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==b||S.hemiLength!==y||S.numDirectionalShadows!==T||S.numPointShadows!==A||S.numSpotShadows!==P||S.numSpotMaps!==C)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=b,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=P+C-I,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=I,S.directionalLength=_,S.pointLength=m,S.spotLength=p,S.rectAreaLength=b,S.hemiLength=y,S.numDirectionalShadows=T,S.numPointShadows=A,S.numSpotShadows=P,S.numSpotMaps=C,r.version=zh++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const T=u[b];if(T.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(T.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(T.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const A=r.point[d];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function it(n,e){const t=new Gh(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function kh(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new it(n,e),t.set(s,[l])):a>=o.length?(l=new it(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Vh extends M9{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ta,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wh extends M9{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );