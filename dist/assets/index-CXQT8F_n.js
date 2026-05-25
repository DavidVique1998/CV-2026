(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var cd={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function XS(){if(G0)return Po;G0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var V0;function WS(){return V0||(V0=1,cd.exports=XS()),cd.exports}var C=WS(),ud={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function qS(){if(k0)return st;k0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,x={};function M(I,K,Se){this.props=I,this.context=K,this.refs=x,this.updater=Se||T}M.prototype.isReactComponent={},M.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=M.prototype;function U(I,K,Se){this.props=I,this.context=K,this.refs=x,this.updater=Se||T}var L=U.prototype=new w;L.constructor=U,D(L,M.prototype),L.isPureReactComponent=!0;var V=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function F(I,K,Se){var Te=Se.ref;return{$$typeof:r,type:I,key:K,ref:Te!==void 0?Te:null,props:Se}}function X(I,K){return F(I.type,K,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Q(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Se){return K[Se]})}var ue=/\/+/g;function he(I,K){return typeof I=="object"&&I!==null&&I.key!=null?Q(""+I.key):K.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,K,Se,Te,De){var oe=typeof I;(oe==="undefined"||oe==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(oe){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case r:case e:ye=!0;break;case v:return ye=I._init,P(ye(I._payload),K,Se,Te,De)}}if(ye)return De=De(I),ye=Te===""?"."+he(I,0):Te,V(De)?(Se="",ye!=null&&(Se=ye.replace(ue,"$&/")+"/"),P(De,K,Se,"",function(et){return et})):De!=null&&(G(De)&&(De=X(De,Se+(De.key==null||I&&I.key===De.key?"":(""+De.key).replace(ue,"$&/")+"/")+ye)),K.push(De)),1;ye=0;var Ee=Te===""?".":Te+":";if(V(I))for(var He=0;He<I.length;He++)Te=I[He],oe=Ee+he(Te,He),ye+=P(Te,K,Se,oe,De);else if(He=y(I),typeof He=="function")for(I=He.call(I),He=0;!(Te=I.next()).done;)Te=Te.value,oe=Ee+he(Te,He++),ye+=P(Te,K,Se,oe,De);else if(oe==="object"){if(typeof I.then=="function")return P(W(I),K,Se,Te,De);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return ye}function B(I,K,Se){if(I==null)return I;var Te=[],De=0;return P(I,Te,"","",function(oe){return K.call(Se,oe,De++)}),Te}function re(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(Se){(I._status===0||I._status===-1)&&(I._status=1,I._result=Se)},function(Se){(I._status===0||I._status===-1)&&(I._status=2,I._result=Se)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var me=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ve={map:B,forEach:function(I,K,Se){B(I,function(){K.apply(this,arguments)},Se)},count:function(I){var K=0;return B(I,function(){K++}),K},toArray:function(I){return B(I,function(K){return K})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return st.Activity=S,st.Children=ve,st.Component=M,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,st.__COMPILER_RUNTIME={__proto__:null,c:function(I){return z.H.useMemoCache(I)}},st.cache=function(I){return function(){return I.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(I,K,Se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Te=D({},I.props),De=I.key;if(K!=null)for(oe in K.key!==void 0&&(De=""+K.key),K)!E.call(K,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&K.ref===void 0||(Te[oe]=K[oe]);var oe=arguments.length-2;if(oe===1)Te.children=Se;else if(1<oe){for(var ye=Array(oe),Ee=0;Ee<oe;Ee++)ye[Ee]=arguments[Ee+2];Te.children=ye}return F(I.type,De,Te)},st.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},st.createElement=function(I,K,Se){var Te,De={},oe=null;if(K!=null)for(Te in K.key!==void 0&&(oe=""+K.key),K)E.call(K,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(De[Te]=K[Te]);var ye=arguments.length-2;if(ye===1)De.children=Se;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];De.children=Ee}if(I&&I.defaultProps)for(Te in ye=I.defaultProps,ye)De[Te]===void 0&&(De[Te]=ye[Te]);return F(I,oe,De)},st.createRef=function(){return{current:null}},st.forwardRef=function(I){return{$$typeof:h,render:I}},st.isValidElement=G,st.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:re}},st.memo=function(I,K){return{$$typeof:p,type:I,compare:K===void 0?null:K}},st.startTransition=function(I){var K=z.T,Se={};z.T=Se;try{var Te=I(),De=z.S;De!==null&&De(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(O,me)}catch(oe){me(oe)}finally{K!==null&&Se.types!==null&&(K.types=Se.types),z.T=K}},st.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},st.use=function(I){return z.H.use(I)},st.useActionState=function(I,K,Se){return z.H.useActionState(I,K,Se)},st.useCallback=function(I,K){return z.H.useCallback(I,K)},st.useContext=function(I){return z.H.useContext(I)},st.useDebugValue=function(){},st.useDeferredValue=function(I,K){return z.H.useDeferredValue(I,K)},st.useEffect=function(I,K){return z.H.useEffect(I,K)},st.useEffectEvent=function(I){return z.H.useEffectEvent(I)},st.useId=function(){return z.H.useId()},st.useImperativeHandle=function(I,K,Se){return z.H.useImperativeHandle(I,K,Se)},st.useInsertionEffect=function(I,K){return z.H.useInsertionEffect(I,K)},st.useLayoutEffect=function(I,K){return z.H.useLayoutEffect(I,K)},st.useMemo=function(I,K){return z.H.useMemo(I,K)},st.useOptimistic=function(I,K){return z.H.useOptimistic(I,K)},st.useReducer=function(I,K,Se){return z.H.useReducer(I,K,Se)},st.useRef=function(I){return z.H.useRef(I)},st.useState=function(I){return z.H.useState(I)},st.useSyncExternalStore=function(I,K,Se){return z.H.useSyncExternalStore(I,K,Se)},st.useTransition=function(){return z.H.useTransition()},st.version="19.2.5",st}var j0;function jh(){return j0||(j0=1,ud.exports=qS()),ud.exports}var Ze=jh(),fd={exports:{}},Io={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function YS(){return X0||(X0=1,(function(r){function e(P,B){var re=P.length;P.push(B);e:for(;0<re;){var me=re-1>>>1,ve=P[me];if(0<l(ve,B))P[me]=B,P[re]=ve,re=me;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var B=P[0],re=P.pop();if(re!==B){P[0]=re;e:for(var me=0,ve=P.length,I=ve>>>1;me<I;){var K=2*(me+1)-1,Se=P[K],Te=K+1,De=P[Te];if(0>l(Se,re))Te<ve&&0>l(De,Se)?(P[me]=De,P[Te]=re,me=Te):(P[me]=Se,P[K]=re,me=K);else if(Te<ve&&0>l(De,re))P[me]=De,P[Te]=re,me=Te;else break e}}return B}function l(P,B){var re=P.sortIndex-B.sortIndex;return re!==0?re:P.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,S=null,g=3,y=!1,T=!1,D=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=P)s(p),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(p)}}function V(P){if(D=!1,L(P),!T)if(i(m)!==null)T=!0,O||(O=!0,Q());else{var B=i(p);B!==null&&W(V,B.startTime-P)}}var O=!1,z=-1,E=5,F=-1;function X(){return x?!0:!(r.unstable_now()-F<E)}function G(){if(x=!1,O){var P=r.unstable_now();F=P;var B=!0;try{e:{T=!1,D&&(D=!1,w(z),z=-1),y=!0;var re=g;try{t:{for(L(P),S=i(m);S!==null&&!(S.expirationTime>P&&X());){var me=S.callback;if(typeof me=="function"){S.callback=null,g=S.priorityLevel;var ve=me(S.expirationTime<=P);if(P=r.unstable_now(),typeof ve=="function"){S.callback=ve,L(P),B=!0;break t}S===i(m)&&s(m),L(P)}else s(m);S=i(m)}if(S!==null)B=!0;else{var I=i(p);I!==null&&W(V,I.startTime-P),B=!1}}break e}finally{S=null,g=re,y=!1}B=void 0}}finally{B?Q():O=!1}}}var Q;if(typeof U=="function")Q=function(){U(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=G,Q=function(){he.postMessage(null)}}else Q=function(){M(G,0)};function W(P,B){z=M(function(){P(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var re=g;g=B;try{return P()}finally{g=re}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var re=g;g=P;try{return B()}finally{g=re}},r.unstable_scheduleCallback=function(P,B,re){var me=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?me+re:me):re=me,P){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=re+ve,P={id:v++,callback:B,priorityLevel:P,startTime:re,expirationTime:ve,sortIndex:-1},re>me?(P.sortIndex=re,e(p,P),i(m)===null&&P===i(p)&&(D?(w(z),z=-1):D=!0,W(V,re-me))):(P.sortIndex=ve,e(m,P),T||y||(T=!0,O||(O=!0,Q()))),P},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(P){var B=g;return function(){var re=g;g=B;try{return P.apply(this,arguments)}finally{g=re}}}})(hd)),hd}var W0;function ZS(){return W0||(W0=1,dd.exports=YS()),dd.exports}var pd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function KS(){if(q0)return Ln;q0=1;var r=jh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:v}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Ln.flushSync=function(m){var p=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=v,s.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,S=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,S=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ln.requestFormReset=function(m){s.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.5",Ln}var Y0;function QS(){if(Y0)return pd.exports;Y0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=KS(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function JS(){if(Z0)return Io;Z0=1;var r=ZS(),e=jh(),i=QS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=f;break}if(R===o){_=!0,o=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=u;break}if(R===o){_=!0,o=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case M:return"Profiler";case x:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case F:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var W=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},me=[],ve=-1;function I(t){return{current:t}}function K(t){0>ve||(t.current=me[ve],me[ve]=null,ve--)}function Se(t,n){ve++,me[ve]=t.current,t.current=n}var Te=I(null),De=I(null),oe=I(null),ye=I(null);function Ee(t,n){switch(Se(oe,n),Se(De,t),Se(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u0(n),t=f0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Te),Se(Te,t)}function He(){K(Te),K(De),K(oe)}function et(t){t.memoizedState!==null&&Se(ye,t);var n=Te.current,a=f0(n,t.type);n!==a&&(Se(De,t),Se(Te,a))}function Je(t){De.current===t&&(K(Te),K(De)),ye.current===t&&(K(ye),No._currentValue=re)}var jt,ht;function xt(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+ht}var Lt=!1;function ut(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var se=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){se=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){se=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),te=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===te.length)for(o=H.length-1,u=te.length-1;1<=o&&0<=u&&H[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==te[u]){var de=`
`+H[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function on(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ut(t.type,!1);case 11:return ut(t.type.render,!1);case 1:return ut(t.type,!0);case 31:return xt("Activity");default:return""}}function qt(t){try{var n="",a=null;do n+=on(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var bn=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,pt=r.unstable_shouldYield,Ht=r.unstable_requestPaint,Ce=r.unstable_now,Kt=r.unstable_getCurrentPriorityLevel,N=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,_e=r.unstable_LowPriority,be=r.unstable_IdlePriority,we=r.log,Le=r.unstable_setDisableYieldValue,ce=null,fe=null;function Oe(t){if(typeof we=="function"&&Le(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ce,t)}catch{}}var Pe=Math.clz32?Math.clz32:it,Ne=Math.log,Re=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ne(t)/Re|0)|0}var at=256,mt=262144,k=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Ae(o):(_&=R,_!==0?u=Ae(_):a||(a=R&~t,a!==0&&(u=Ae(a))))):(R=o&~f,R!==0?u=Ae(R):_!==0?u=Ae(_):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tn(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Pe(a),xe=1<<de;R[de]=0,H[de]=-1;var se=te[de];if(se!==null)for(te[de]=null,de=0;de<se.length;de++){var le=se[de];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&Dt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Dt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function pi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function $n(t,n){var a=n&-n;return a=(a&42)!==0?1:rs(a),(a&(t.suspendedLanes|n))!==0?0:a}function rs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kr(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:O0(t.type))}function jr(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var Nn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Nn,En="__reactProps$"+Nn,Zi="__reactContainer$"+Nn,Ma="__reactEvents$"+Nn,nl="__reactListeners$"+Nn,Bs="__reactHandles$"+Nn,Xr="__reactResources$"+Nn,ba="__reactMarker$"+Nn;function Wr(t){delete t[ln],delete t[En],delete t[Ma],delete t[nl],delete t[Bs]}function Ea(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Zi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_0(t);t!==null;){if(a=t[ln])return a;t=_0(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[ln]||t[Zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function os(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Aa(t){var n=t[Xr];return n||(n=t[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[ba]=!0}var il=new Set,A={};function Y(t,n){ae(t,n),ae(t+"Capture",n)}function ae(t,n){for(A[t]=n,t=0;t<n.length;t++)il.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Fe={};function Ve(t){return bn.call(Fe,t)?!0:bn.call(ie,t)?!1:ne.test(t)?Fe[t]=!0:(ie[t]=!0,!1)}function Ie(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ke(n)):t.value!==""+Ke(n)&&(t.value=""+Ke(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?gt(t,_,Ke(n)):a!=null?gt(t,_,Ke(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Ke(R):t.removeAttribute("name")}function Un(t,n,a,o,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ct(t);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ct(t)}function gt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+Ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ke(a):""}function Ti(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ke(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ct(t)}function ti(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var It=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||It.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ai(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Jt(t,f,n[f])}function Ut(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ls(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var su=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function cp(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":ei(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var ou=!1;function up(t,n,a){if(ou)return t(n,a);ou=!0;try{var o=t(n);return o}finally{if(ou=!1,(Hs!==null||Gs!==null)&&(jl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,cp(n),t)))for(n=0;n<t.length;n++)cp(t[n])}}function qr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Qi)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{lu=!1}var wa=null,cu=null,al=null;function fp(){if(al)return al;var t,n=cu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return al=u.slice(t,1<o?1-o:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function dp(){return!1}function Vn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:dp,this.isPropagationStopped=dp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Vn(cs),Zr=S({},cs,{view:0,detail:0}),k_=Vn(Zr),uu,fu,Kr,ll=S({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(uu=t.screenX-Kr.screenX,fu=t.screenY-Kr.screenY):fu=uu=0,Kr=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),hp=Vn(ll),j_=S({},ll,{dataTransfer:0}),X_=Vn(j_),W_=S({},Zr,{relatedTarget:0}),du=Vn(W_),q_=S({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Vn(q_),Z_=S({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K_=Vn(Z_),Q_=S({},cs,{data:0}),pp=Vn(Q_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ex[t])?!!n[t]:!1}function hu(){return tx}var nx=S({},Zr,{key:function(t){if(t.key){var n=J_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Vn(nx),ax=S({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Vn(ax),sx=S({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),rx=Vn(sx),ox=S({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Vn(ox),cx=S({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Vn(cx),fx=S({},cs,{newState:0,oldState:0}),dx=Vn(fx),hx=[9,13,27,32],pu=Qi&&"CompositionEvent"in window,Qr=null;Qi&&"documentMode"in document&&(Qr=document.documentMode);var px=Qi&&"TextEvent"in window&&!Qr,gp=Qi&&(!pu||Qr&&8<Qr&&11>=Qr),vp=" ",_p=!1;function xp(t,n){switch(t){case"keyup":return hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function mx(t,n){switch(t){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(_p=!0,vp);case"textInput":return t=n.data,t===vp&&_p?null:t;default:return null}}function gx(t,n){if(Vs)return t==="compositionend"||!pu&&xp(t,n)?(t=fp(),al=cu=wa=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vx[t.type]:n==="textarea"}function Mp(t,n,a,o){Hs?Gs?Gs.push(o):Gs=[o]:Hs=o,n=Ql(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Jr=null,$r=null;function _x(t){a0(t,0)}function cl(t){var n=os(t);if(Qt(n))return t}function bp(t,n){if(t==="change")return n}var Ep=!1;if(Qi){var mu;if(Qi){var gu="oninput"in document;if(!gu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),gu=typeof Tp.oninput=="function"}mu=gu}else mu=!1;Ep=mu&&(!document.documentMode||9<document.documentMode)}function Ap(){Jr&&(Jr.detachEvent("onpropertychange",Cp),$r=Jr=null)}function Cp(t){if(t.propertyName==="value"&&cl($r)){var n=[];Mp(n,$r,t,ru(t)),up(_x,n)}}function xx(t,n,a){t==="focusin"?(Ap(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",Cp)):t==="focusout"&&Ap()}function Sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cl($r)}function yx(t,n){if(t==="click")return cl(n)}function Mx(t,n){if(t==="input"||t==="change")return cl(n)}function bx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:bx;function eo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!bn.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,n){var a=wp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wp(a)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ex=Qi&&"documentMode"in document&&11>=document.documentMode,ks=null,_u=null,to=null,xu=!1;function Up(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||ks==null||ks!==Xt(o)||(o=ks,"selectionStart"in o&&vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=Ql(_u,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=ks)))}function us(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Su={},Lp={};Qi&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function fs(t){if(Su[t])return Su[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return Su[t]=n[a];return t}var Op=fs("animationend"),Pp=fs("animationiteration"),Ip=fs("animationstart"),Tx=fs("transitionrun"),Ax=fs("transitionstart"),Cx=fs("transitioncancel"),Fp=fs("transitionend"),zp=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Ci(t,n){zp.set(t,n),Y(n,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],Xs=0,Mu=0;function fl(){for(var t=Xs,n=Mu=Xs=0;n<t;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var f=mi[n];if(mi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Bp(a,u,f)}}function dl(t,n,a,o){mi[Xs++]=t,mi[Xs++]=n,mi[Xs++]=a,mi[Xs++]=o,Mu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bu(t,n,a,o){return dl(t,n,a,o),hl(t)}function ds(t,n){return dl(t,null,null,n),hl(t)}function Bp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<Eo)throw Eo=0,Lf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ws={};function wx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new wx(t,n,a,o)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Eu(t)&&(_=1);else if(typeof t=="string")_=LS(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case F:return t=ii(31,a,n,u),t.elementType=F,t.lanes=f,t;case D:return hs(a.children,u,f,n);case x:_=8,u|=24;break;case M:return t=ii(12,a,n,u|2),t.elementType=M,t.lanes=f,t;case V:return t=ii(13,a,n,u),t.elementType=V,t.lanes=f,t;case O:return t=ii(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break e;case w:_=9;break e;case L:_=11;break e;case z:_=14;break e;case E:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ii(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function hs(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function Tu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function Gp(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function Au(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vp=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:qt(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:qt(n)}}var qs=[],Ys=0,ml=null,no=0,vi=[],_i=0,Ra=null,Fi=1,zi="";function $i(t,n){qs[Ys++]=no,qs[Ys++]=ml,ml=t,no=n}function kp(t,n,a){vi[_i++]=Fi,vi[_i++]=zi,vi[_i++]=Ra,Ra=t;var o=Fi;t=zi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Fi=1<<32-Pe(n)+u|a<<u|o,zi=f+t}else Fi=1<<f|a<<u|o,zi=t}function Cu(t){t.return!==null&&($i(t,1),kp(t,1,0))}function wu(t){for(;t===ml;)ml=qs[--Ys],qs[Ys]=null,no=qs[--Ys],qs[Ys]=null;for(;t===Ra;)Ra=vi[--_i],vi[_i]=null,zi=vi[--_i],vi[_i]=null,Fi=vi[--_i],vi[_i]=null}function jp(t,n){vi[_i++]=Fi,vi[_i++]=zi,vi[_i++]=Ra,Fi=n.id,zi=n.overflow,Ra=t}var Tn=null,Yt=null,Mt=!1,Da=null,xi=!1,Ru=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(gi(n,t)),Ru}function Xp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[En]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)_t(Ao[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ti(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||l0(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Na(t,!0)}function Wp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Tn=Tn.return}}function Zs(t){if(t!==Tn)return!1;if(!Mt)return Wp(t),Mt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&Yt&&Na(t),Wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=v0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=v0(t)}else n===27?(n=Yt,Xa(t.type)?(t=$f,$f=null,Yt=t):Yt=n):Yt=Tn?yi(t.stateNode.nextSibling):null;return!0}function ps(){Yt=Tn=null,Mt=!1}function Du(){var t=Da;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Da=null),t}function io(t){Da===null?Da=[t]:Da.push(t)}var Nu=I(null),ms=null,ea=null;function Ua(t,n,a){Se(Nu,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Nu.current,K(Nu)}function Uu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Uu(f.return,a,t),o||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Uu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ks(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ni(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Lu(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ms=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return qp(ms,t)}function vl(t,n){return ms===null&&gs(t),qp(t,n)}function qp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(s(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Dx=r.unstable_scheduleCallback,Nx=r.unstable_NormalPriority,dn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Rx,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&Dx(Nx,function(){t.controller.abort()})}var so=null,Pu=0,Qs=0,Js=null;function Ux(t,n){if(so===null){var a=so=[];Pu=0,Qs=Bf(),Js={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pu++,n.then(Yp,Yp),n}function Yp(){if(--Pu===0&&so!==null){Js!==null&&(Js.status="fulfilled");var t=so;so=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Lx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=P.S;P.S=function(t,n){Ug=Ce(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ux(t,n),Zp!==null&&Zp(t,n)};var vs=I(null);function Iu(){var t=vs.current;return t!==null?t:Wt.pooledCache}function _l(t,n){n===null?Se(vs,vs.current):Se(vs,n.pool)}function Kp(){var t=Iu();return t===null?null:{parent:dn._currentValue,pool:t}}var $s=Error(s(460)),Fu=Error(s(474)),xl=Error(s(542)),Sl={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t}throw xs=n,$s}}function _s(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,$s):a}}var xs=null;function $p(){if(xs===null)throw Error(s(459));var t=xs;return xs=null,t}function em(t){if(t===$s||t===xl)throw Error(s(483))}var er=null,ro=0;function yl(t){var n=ro;return ro+=1,er===null&&(er=[]),Jp(er,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ml(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){function n(Z,j){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[j],Z.flags|=16):ee.push(j)}}function a(Z,j){if(!t)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function o(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function u(Z,j){return Z=Ji(Z,j),Z.index=0,Z.sibling=null,Z}function f(Z,j,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<j?(Z.flags|=67108866,j):ee):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,j,ee,ge){return j===null||j.tag!==6?(j=Tu(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function H(Z,j,ee,ge){var Qe=ee.type;return Qe===D?de(Z,j,ee.props.children,ge,ee.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===E&&_s(Qe)===j.type)?(j=u(j,ee.props),oo(j,ee),j.return=Z,j):(j=pl(ee.type,ee.key,ee.props,null,Z.mode,ge),oo(j,ee),j.return=Z,j)}function te(Z,j,ee,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Au(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee.children||[]),j.return=Z,j)}function de(Z,j,ee,ge,Qe){return j===null||j.tag!==7?(j=hs(ee,Z.mode,ge,Qe),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function xe(Z,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Tu(""+j,Z.mode,ee),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ee=pl(j.type,j.key,j.props,null,Z.mode,ee),oo(ee,j),ee.return=Z,ee;case T:return j=Au(j,Z.mode,ee),j.return=Z,j;case E:return j=_s(j),xe(Z,j,ee)}if(W(j)||Q(j))return j=hs(j,Z.mode,ee,null),j.return=Z,j;if(typeof j.then=="function")return xe(Z,yl(j),ee);if(j.$$typeof===U)return xe(Z,vl(Z,j),ee);Ml(Z,j)}return null}function se(Z,j,ee,ge){var Qe=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Qe!==null?null:R(Z,j,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===Qe?H(Z,j,ee,ge):null;case T:return ee.key===Qe?te(Z,j,ee,ge):null;case E:return ee=_s(ee),se(Z,j,ee,ge)}if(W(ee)||Q(ee))return Qe!==null?null:de(Z,j,ee,ge,null);if(typeof ee.then=="function")return se(Z,j,yl(ee),ge);if(ee.$$typeof===U)return se(Z,j,vl(Z,ee),ge);Ml(Z,ee)}return null}function le(Z,j,ee,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(ee)||null,R(j,Z,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Z=Z.get(ge.key===null?ee:ge.key)||null,H(j,Z,ge,Qe);case T:return Z=Z.get(ge.key===null?ee:ge.key)||null,te(j,Z,ge,Qe);case E:return ge=_s(ge),le(Z,j,ee,ge,Qe)}if(W(ge)||Q(ge))return Z=Z.get(ee)||null,de(j,Z,ge,Qe,null);if(typeof ge.then=="function")return le(Z,j,ee,yl(ge),Qe);if(ge.$$typeof===U)return le(Z,j,ee,vl(j,ge),Qe);Ml(j,ge)}return null}function Xe(Z,j,ee,ge){for(var Qe=null,wt=null,qe=j,ft=j=0,yt=null;qe!==null&&ft<ee.length;ft++){qe.index>ft?(yt=qe,qe=null):yt=qe.sibling;var Rt=se(Z,qe,ee[ft],ge);if(Rt===null){qe===null&&(qe=yt);break}t&&qe&&Rt.alternate===null&&n(Z,qe),j=f(Rt,j,ft),wt===null?Qe=Rt:wt.sibling=Rt,wt=Rt,qe=yt}if(ft===ee.length)return a(Z,qe),Mt&&$i(Z,ft),Qe;if(qe===null){for(;ft<ee.length;ft++)qe=xe(Z,ee[ft],ge),qe!==null&&(j=f(qe,j,ft),wt===null?Qe=qe:wt.sibling=qe,wt=qe);return Mt&&$i(Z,ft),Qe}for(qe=o(qe);ft<ee.length;ft++)yt=le(qe,Z,ft,ee[ft],ge),yt!==null&&(t&&yt.alternate!==null&&qe.delete(yt.key===null?ft:yt.key),j=f(yt,j,ft),wt===null?Qe=yt:wt.sibling=yt,wt=yt);return t&&qe.forEach(function(Ka){return n(Z,Ka)}),Mt&&$i(Z,ft),Qe}function $e(Z,j,ee,ge){if(ee==null)throw Error(s(151));for(var Qe=null,wt=null,qe=j,ft=j=0,yt=null,Rt=ee.next();qe!==null&&!Rt.done;ft++,Rt=ee.next()){qe.index>ft?(yt=qe,qe=null):yt=qe.sibling;var Ka=se(Z,qe,Rt.value,ge);if(Ka===null){qe===null&&(qe=yt);break}t&&qe&&Ka.alternate===null&&n(Z,qe),j=f(Ka,j,ft),wt===null?Qe=Ka:wt.sibling=Ka,wt=Ka,qe=yt}if(Rt.done)return a(Z,qe),Mt&&$i(Z,ft),Qe;if(qe===null){for(;!Rt.done;ft++,Rt=ee.next())Rt=xe(Z,Rt.value,ge),Rt!==null&&(j=f(Rt,j,ft),wt===null?Qe=Rt:wt.sibling=Rt,wt=Rt);return Mt&&$i(Z,ft),Qe}for(qe=o(qe);!Rt.done;ft++,Rt=ee.next())Rt=le(qe,Z,ft,Rt.value,ge),Rt!==null&&(t&&Rt.alternate!==null&&qe.delete(Rt.key===null?ft:Rt.key),j=f(Rt,j,ft),wt===null?Qe=Rt:wt.sibling=Rt,wt=Rt);return t&&qe.forEach(function(jS){return n(Z,jS)}),Mt&&$i(Z,ft),Qe}function kt(Z,j,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===D&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var Qe=ee.key;j!==null;){if(j.key===Qe){if(Qe=ee.type,Qe===D){if(j.tag===7){a(Z,j.sibling),ge=u(j,ee.props.children),ge.return=Z,Z=ge;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===E&&_s(Qe)===j.type){a(Z,j.sibling),ge=u(j,ee.props),oo(ge,ee),ge.return=Z,Z=ge;break e}a(Z,j);break}else n(Z,j);j=j.sibling}ee.type===D?(ge=hs(ee.props.children,Z.mode,ge,ee.key),ge.return=Z,Z=ge):(ge=pl(ee.type,ee.key,ee.props,null,Z.mode,ge),oo(ge,ee),ge.return=Z,Z=ge)}return _(Z);case T:e:{for(Qe=ee.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(Z,j.sibling),ge=u(j,ee.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,j);break}else n(Z,j);j=j.sibling}ge=Au(ee,Z.mode,ge),ge.return=Z,Z=ge}return _(Z);case E:return ee=_s(ee),kt(Z,j,ee,ge)}if(W(ee))return Xe(Z,j,ee,ge);if(Q(ee)){if(Qe=Q(ee),typeof Qe!="function")throw Error(s(150));return ee=Qe.call(ee),$e(Z,j,ee,ge)}if(typeof ee.then=="function")return kt(Z,j,yl(ee),ge);if(ee.$$typeof===U)return kt(Z,j,vl(Z,ee),ge);Ml(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(a(Z,j.sibling),ge=u(j,ee),ge.return=Z,Z=ge):(a(Z,j),ge=Tu(ee,Z.mode,ge),ge.return=Z,Z=ge),_(Z)):a(Z,j)}return function(Z,j,ee,ge){try{ro=0;var Qe=kt(Z,j,ee,ge);return er=null,Qe}catch(qe){if(qe===$s||qe===xl)throw qe;var wt=ii(29,qe,null,Z.mode);return wt.lanes=ge,wt.return=Z,wt}finally{}}}var Ss=tm(!0),nm=tm(!1),La=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Nt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(t),Bp(t,null,a),n}return dl(t,o,n,a),hl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,pi(t,a)}}function Hu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function co(){if(Gu){var t=Js;if(t!==null)throw t}}function uo(t,n,a,o){Gu=!1;var u=t.updateQueue;La=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,te=H.next;H.next=null,_===null?f=te:_.next=te,_=H;var de=t.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==_&&(R===null?de.firstBaseUpdate=te:R.next=te,de.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;_=0,de=te=H=null,R=f;do{var se=R.lane&-536870913,le=se!==R.lane;if(le?(St&se)===se:(o&se)===se){se!==0&&se===Qs&&(Gu=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Xe=t,$e=R;se=n;var kt=a;switch($e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){xe=Xe.call(kt,xe,se);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,se=typeof Xe=="function"?Xe.call(kt,xe,se):Xe,se==null)break e;xe=S({},xe,se);break e;case 2:La=!0}}se=R.callback,se!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[se]:le.push(se))}else le={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(te=de=le,H=xe):de=de.next=le,_|=se;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),Ha|=_,t.lanes=_,t.memoizedState=xe}}function im(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)im(a[t],n)}var tr=I(null),bl=I(0);function sm(t,n){t=ua,Se(bl,t),Se(tr,n),ua=t|n.baseLanes}function Vu(){Se(bl,ua),Se(tr,tr.current)}function ku(){ua=bl.current,K(tr),K(bl)}var ai=I(null),Si=null;function Ia(t){var n=t.alternate;Se(cn,cn.current&1),Se(ai,t),Si===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(Si=t)}function ju(t){Se(cn,cn.current),Se(ai,t),Si===null&&(Si=t)}function rm(t){t.tag===22?(Se(cn,cn.current),Se(ai,t),Si===null&&(Si=t)):Fa()}function Fa(){Se(cn,cn.current),Se(ai,ai.current)}function si(t){K(ai),Si===t&&(Si=null),K(cn)}var cn=I(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ct=null,Gt=null,hn=null,Tl=!1,nr=!1,ys=!1,Al=0,fo=0,ir=null,Ox=0;function nn(){throw Error(s(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Wu(t,n,a,o,u,f){return na=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?km:lf,ys=!1,f=a(o,u),ys=!1,nr&&(f=lm(n,a,o,u)),om(t),f}function om(t){P.H=mo;var n=Gt!==null&&Gt.next!==null;if(na=0,hn=Gt=ct=null,Tl=!1,fo=0,ir=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&gl(t)&&(pn=!0))}function lm(t,n,a,o){ct=t;var u=0;do{if(nr&&(ir=null),fo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,hn=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=jm,f=n(a,o)}while(nr);return f}function Px(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),n}function qu(){var t=Al!==0;return Al=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}na=0,hn=Gt=ct=null,nr=!1,fo=Al=0,ir=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ct.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=hn===null?ct.memoizedState:hn.next;if(n!==null)hn=n,Gt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},hn===null?ct.memoizedState=hn=t:hn=hn.next=t}return hn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ir===null&&(ir=[]),t=Jp(ir,t,n),n=ct,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?km:lf),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===U)return An(t)}throw Error(s(438,String(t)))}function Ku(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=un();return Qu(n,Gt,t)}function Qu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,H=null,te=n,de=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(St&xe)===xe:(na&xe)===xe){var se=te.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Qs&&(de=!0);else if((na&se)===se){te=te.next,se===Qs&&(de=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=xe,_=f):H=H.next=xe,ct.lanes|=se,Ha|=se;xe=te.action,ys&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else se={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(R=H=se,_=f):H=H.next=se,ct.lanes|=xe,Ha|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?_=f:H.next=R,!ni(f,t.memoizedState)&&(pn=!0,de&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ju(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ni(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function cm(t,n,a){var o=ct,u=un(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ni((Gt||u).memoizedState,a);if(_&&(u.memoizedState=a,pn=!0),u=u.queue,tf(dm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ar(9,{destroy:void 0},fm.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));f||(na&127)!==0||um(o,n,a)}return a}function um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Cl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fm(t,n,a,o){n.value=a,n.getSnapshot=o,hm(n)&&pm(t)}function dm(t,n,a){return a(function(){hm(n)&&pm(t)})}function hm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function pm(t){var n=ds(t,2);n!==null&&qn(n,t,2)}function $u(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),ys){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function mm(t,n,a,o){return t.baseState=a,Qu(t,Gt,typeof o=="function"?o:ia)}function Ix(t,n,a,o,u){if(Ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var R=a(u,o),H=P.S;H!==null&&H(_,R),vm(t,n,R)}catch(te){ef(t,n,te)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,o),vm(t,n,f)}catch(te){ef(t,n,te)}}function vm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_m(t,n,o)},function(o){return ef(t,n,o)}):_m(t,n,a)}function _m(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gm(t,a)))}function ef(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sm(t,n){return n}function ym(t,n){if(Mt){var a=Wt.formState;if(a!==null){e:{var o=ct;if(Mt){if(Yt){t:{for(var u=Yt,f=xi;u.nodeType!==8;){if(!f){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Yt=yi(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,ct,o),o.dispatch=a,o=$u(!1),f=of.bind(null,ct,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ix.bind(null,ct,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Mm(t){var n=un();return bm(n,Gt,t)}function bm(t,n,a){if(n=Qu(t,n,Sm)[0],t=Rl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(_){throw _===$s?xl:_}else o=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,ar(9,{destroy:void 0},Fx.bind(null,u,a),null)),[o,f,t]}function Fx(t,n){t.action=n}function Em(t){var n=un(),a=Gt;if(a!==null)return bm(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ar(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Cl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Tm(){return un().memoizedState}function Dl(t,n,a,o){var u=zn();ct.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nl(t,n,a,o){var u=un();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&Xu(o,Gt.memoizedState.deps)?u.memoizedState=ar(n,f,a,o):(ct.flags|=t,u.memoizedState=ar(1|n,f,a,o))}function Am(t,n){Dl(8390656,8,t,n)}function tf(t,n){Nl(2048,8,t,n)}function zx(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Cl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Cm(t){var n=un().memoizedState;return zx({ref:n,nextImpl:t}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function wm(t,n){return Nl(4,2,t,n)}function Rm(t,n){return Nl(4,4,t,n)}function Dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Nm(t,n,a){a=a!=null?a.concat([t]):null,Nl(4,4,Dm.bind(null,n,t),a)}function nf(){}function Um(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Xu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Xu(n,o[1]))return o[0];if(o=t(),ys){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function af(t,n,a){return a===void 0||(na&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Og(),ct.lanes|=t,Ha|=t,a)}function Om(t,n,a,o){return ni(a,n)?a:tr.current!==null?(t=af(t,a,o),ni(t,n)||(pn=!0),t):(na&42)===0||(na&1073741824)!==0&&(St&261930)===0?(pn=!0,t.memoizedState=a):(t=Og(),ct.lanes|=t,Ha|=t,n)}function Pm(t,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=P.T,R={};P.T=R,of(t,!1,n,a);try{var H=u(),te=P.S;if(te!==null&&te(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=Lx(H,o);po(t,n,de,li(t))}else po(t,n,o,li(t))}catch(xe){po(t,n,{then:function(){},status:"rejected",reason:xe},li())}finally{B.p=f,_!==null&&R.types!==null&&(_.types=R.types),P.T=_}}function Bx(){}function sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Im(t).queue;Pm(t,u,n,re,a===null?Bx:function(){return Fm(t),a(o)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fm(t){var n=Im(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},li())}function rf(){return An(No)}function zm(){return un().memoizedState}function Bm(){return un().memoizedState}function Hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Oa(a);var o=Pa(n,t,a);o!==null&&(qn(o,n,a),lo(o,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function Gx(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Gm(n,a):(a=bu(t,n,a,o),a!==null&&(qn(a,t,o),Vm(a,n,o)))}function Hm(t,n,a){var o=li();po(t,n,a,o)}function po(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Gm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,_))return dl(t,n,u,0),Wt===null&&fl(),!1}catch{}finally{}if(a=bu(t,n,u,o),a!==null)return qn(a,t,o),Vm(a,n,o),!0}return!1}function of(t,n,a,o){if(o={lane:2,revertLane:Bf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(s(479))}else n=bu(t,a,o,2),n!==null&&qn(n,t,2)}function Ul(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Gm(t,n){nr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,pi(t,a)}}var mo={readContext:An,use:wl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};mo.useEffectEvent=nn;var km={readContext:An,use:wl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(ys){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(ys){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Gx.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=Hm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=zn();return af(a,t,n)},useTransition:function(){var t=$u(!1);return t=Pm.bind(null,ct,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=zn();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(St&127)!==0||um(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(dm.bind(null,o,f,t),[t]),o.flags|=2048,ar(9,{destroy:void 0},fm.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=Wt.identifierPrefix;if(Mt){var a=zi,o=Fi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:ym,useActionState:ym,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return zn().memoizedState=Hx.bind(null,ct)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:An,use:wl,useCallback:Um,useContext:An,useEffect:tf,useImperativeHandle:Nm,useInsertionEffect:wm,useLayoutEffect:Rm,useMemo:Lm,useReducer:Rl,useRef:Tm,useState:function(){return Rl(ia)},useDebugValue:nf,useDeferredValue:function(t,n){var a=un();return Om(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Rl(ia)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:cm,useId:zm,useHostTransitionStatus:rf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=un();return mm(a,Gt,t,n)},useMemoCache:Ku,useCacheRefresh:Bm};lf.useEffectEvent=Cm;var jm={readContext:An,use:wl,useCallback:Um,useContext:An,useEffect:tf,useImperativeHandle:Nm,useInsertionEffect:wm,useLayoutEffect:Rm,useMemo:Lm,useReducer:Ju,useRef:Tm,useState:function(){return Ju(ia)},useDebugValue:nf,useDeferredValue:function(t,n){var a=un();return Gt===null?af(a,t,n):Om(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Ju(ia)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:cm,useId:zm,useHostTransitionStatus:rf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=un();return Gt!==null?mm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Bm};jm.useEffectEvent=Cm;function cf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(qn(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(qn(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(qn(n,t,a),lo(n,t,a))}};function Xm(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!eo(a,o)||!eo(u,f):!0}function Wm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function Ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function qm(t){ul(t)}function Ym(t){console.error(t)}function Zm(t){ul(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Qm(t){return t=Oa(t),t.tag=3,t}function Jm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Km(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Km(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Vx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?Xl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(t,o,u)),!1;case 22:return a.flags|=65536,o===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(t,o,u)),!1}throw Error(s(435,a.tag))}return If(t,o,u),Xl(),!1}if(Mt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ru&&(t=Error(s(422),{cause:o}),io(gi(t,a)))):(o!==Ru&&(n=Error(s(423),{cause:o}),io(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,a),u=ff(t.stateNode,o,u),Hu(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=gi(f,a),bo===null?bo=[f]:bo.push(f),an!==4&&(an=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,o,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,t,a,o),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var df=Error(s(461)),pn=!1;function Cn(t,n,a,o){n.child=t===null?nm(n,null,a,o):Ss(n,t.child,a,o)}function $m(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return gs(n),o=Wu(t,n,a,_,f,u),R=qu(),t!==null&&!pn?(Yu(t,n,u),aa(t,n,u)):(Mt&&R&&Cu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function eg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,tg(t,n,f,o,u)):(t=pl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Sf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:eo,a(_,o)&&t.ref===n.ref)return aa(t,n,u)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function tg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(eo(f,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=f,Sf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,aa(t,n,u)}return hf(t,n,a,o,u)}function ng(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return ig(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Vu(),rm(n);else return o=n.lanes=536870912,ig(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(_l(n,f.cachePool),sm(n,f),Fa(),n.memoizedState=null):(t!==null&&_l(n,null),Vu(),Fa());return Cn(t,n,u,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(t,n,a,o,u){var f=Iu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&_l(n,null),Vu(),rm(n),t!==null&&Ks(t,n,o,!0),n.childLanes=u,null}function Ol(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ag(t,n,a){return Ss(n,t.child,null,a),t=Ol(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function kx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Mt){if(o.mode==="hidden")return t=Ol(n,o),n.lanes=536870912,go(null,t);if(ju(n),(t=Yt)?(t=g0(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Ol(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=ag(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(o=Wt,o!==null&&(_=$n(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ds(t,_),qn(o,t,_),df;Xl(),n=ag(t,n,a)}else t=f.treeContext,Yt=yi(_.nextSibling),Tn=n,Mt=!0,Da=null,xi=!1,t!==null&&jp(n,t),n=Ol(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,o,u){return gs(n),a=Wu(t,n,a,o,void 0,u),o=qu(),t!==null&&!pn?(Yu(t,n,u),aa(t,n,u)):(Mt&&o&&Cu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function sg(t,n,a,o,u,f){return gs(n),n.updateQueue=null,a=lm(n,o,a,u),om(t),o=qu(),t!==null&&!pn?(Yu(t,n,f),aa(t,n,f)):(Mt&&o&&Cu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function rg(t,n,a,o,u){if(gs(n),n.stateNode===null){var f=Ws,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},zu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Ws,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(cf(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&uf.enqueueReplaceState(f,f.state,null),uo(n,o,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Ms(a,R);f.props=H;var te=f.context,de=a.contextType;_=Ws,typeof de=="object"&&de!==null&&(_=An(de));var xe=a.getDerivedStateFromProps;de=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==_)&&Wm(n,f,o,_),La=!1;var se=n.memoizedState;f.state=se,uo(n,o,f,u),co(),te=n.memoizedState,R||se!==te||La?(typeof xe=="function"&&(cf(n,a,xe,o),te=n.memoizedState),(H=La||Xm(n,a,H,o,se,te,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=_,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bu(t,n),_=n.memoizedProps,de=Ms(a,_),f.props=de,xe=n.pendingProps,se=f.context,te=a.contextType,H=Ws,typeof te=="object"&&te!==null&&(H=An(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||se!==H)&&Wm(n,f,o,H),La=!1,se=n.memoizedState,f.state=se,uo(n,o,f,u),co();var le=n.memoizedState;_!==xe||se!==le||La||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof R=="function"&&(cf(n,a,R,o),le=n.memoizedState),(de=La||Xm(n,a,de,o,se,le,H)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=H,o=de):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Pl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ss(n,t.child,null,u),n.child=Ss(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=aa(t,n,u),t}function og(t,n,a,o){return ps(),n.flags|=256,Cn(t,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:Kp()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function lg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Mt){if(u?Ia(n):Fa(),(t=Yt)?(t=g0(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ra!==null?{id:Fi,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,Tn=n,Yt=null)):t=null,t===null)throw Na(n);return Jf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Fa(),u=n.mode,R=Il({mode:"hidden",children:R},u),o=hs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=mf(a),o.childLanes=gf(t,_,a),n.memoizedState=pf,go(null,o)):(Ia(n),vf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,n=null):(Fa(),R=o.fallback,u=n.mode,o=Il({mode:"visible",children:o.children},u),R=hs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ss(n,t.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=gf(t,_,a),n.memoizedState=pf,n=go(null,o));else if(Ia(n),Jf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(s(419)),o.stack="",o.digest=_,io({value:o,source:null,stack:null}),n=_f(t,n,a)}else if(pn||Ks(t,n,a,!1),_=(a&t.childLanes)!==0,pn||_){if(_=Wt,_!==null&&(o=$n(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,ds(t,o),qn(_,t,o),df;Qf(R)||Xl(),n=_f(t,n,a)}else Qf(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Yt=yi(R.nextSibling),Tn=n,Mt=!0,Da=null,xi=!1,t!==null&&jp(n,t),n=vf(n,o.children),n.flags|=4096);return n}return u?(Fa(),R=o.fallback,u=n.mode,H=t.child,te=H.sibling,o=Ji(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,te!==null?R=Ji(te,R):(R=hs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,go(null,o),o=n.child,R=t.child.memoizedState,R===null?R=mf(a):(u=R.cachePool,u!==null?(H=dn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Kp(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=gf(t,_,a),n.memoizedState=pf,go(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return Ss(n,t.child,null,a),t=vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Uu(t.return,n,a)}function xf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function ug(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=cn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Se(cn,_),Cn(t,n,o,a),o=Mt?no:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,a,n);else if(t.tag===19)cg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&El(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f,o);break;case"together":xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Sf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function jx(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ua(n,dn,t.memoizedState.cache),ps();break;case 27:case 5:et(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(t,n,a):(Ia(n),t=aa(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ks(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ug(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Se(cn,cn.current),o)break;return null;case 22:return n.lanes=0,ng(t,n,a,n.pendingProps);case 24:Ua(n,dn,t.memoizedState.cache)}return aa(t,n,a)}function fg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Sf(t,a)&&(n.flags&128)===0)return pn=!1,jx(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Mt&&(n.flags&1048576)!==0&&kp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_s(n.elementType),n.type=t,typeof t=="function")Eu(t)?(o=Ms(t,o),n.tag=1,n=rg(null,n,t,o,a)):(n.tag=0,n=hf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=$m(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=eg(null,n,t,o,a);break e}}throw n=he(t)||t,Error(s(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),rg(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(t,n),uo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ua(n,dn,o),o!==f.cache&&Lu(n,[dn],a,!0),co(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(t,n,o,a);break e}else if(o!==u){u=gi(Error(s(424)),n),io(u),n=og(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Yt=yi(t.firstChild),Tn=n,Mt=!0,Da=null,xi=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ps(),o===u){n=aa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=M0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,t=n.pendingProps,o=Jl(oe.current).createElement(a),o[ln]=n,o[En]=t,wn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=M0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&Mt&&(o=n.stateNode=x0(n.type,n.pendingProps,oe.current),Tn=n,xi=!0,u=Yt,Xa(n.type)?($f=u,Yt=yi(o.firstChild)):Yt=u),Cn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Mt&&((u=o=Yt)&&(o=SS(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Tn=n,Yt=yi(o.firstChild),xi=!1,u=!0):u=!1),u||Na(n)),et(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Yf(u,f)?o=null:_!==null&&Yf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,Px,null,null,a),No._currentValue=u),Pl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&Mt&&((t=a=Yt)&&(a=yS(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Tn=n,Yt=null,t=!0):t=!1),t||Na(n)),null;case 13:return lg(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ss(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return $m(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=An(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return eg(t,n,n.type,n.pendingProps,a);case 15:return tg(t,n,n.type,n.pendingProps,a);case 19:return ug(t,n,a);case 31:return kx(t,n,a);case 22:return ng(t,n,a,n.pendingProps);case 24:return gs(n),o=An(dn),t===null?(u=Iu(),u===null&&(u=Wt,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},zu(n),Ua(n,dn,u)):((t.lanes&a)!==0&&(Bu(t,n),uo(n,null,null,a),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,dn,o)):(o=f.cache,Ua(n,dn,o),o!==u.cache&&Lu(n,[dn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(t){t.flags|=4}function yf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(zg())t.flags|=8192;else throw xs=Sl,Fu}else t.flags&=-16777217}function dg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C0(n))if(zg())t.flags|=8192;else throw xs=Sl,Fu}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,lr|=n)}function vo(t,n){if(!Mt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Xx(t,n,a){var o=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(dn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),Zt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Zt(n),dg(n,f)):(Zt(n),yf(n,u,null,o,a))):f?f!==t.memoizedState?(sa(n),Zt(n),dg(n,f)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Zt(n),yf(n,u,t,o,a)),null;case 27:if(Je(n),a=oe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Te.current,Zs(n)?Xp(n):(t=x0(u,o,a),n.stateNode=t,sa(n))}return Zt(n),null;case 5:if(Je(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(f=Te.current,Zs(n))Xp(n);else{var _=Jl(oe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[ln]=n,f[En]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Zt(n),yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=oe.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||l0(t.nodeValue,a)),t||Na(n,!0)}else t=Jl(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Zs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Zt(n),null);case 4:return He(),t===null&&kf(n.stateNode.containerInfo),Zt(n),null;case 10:return ta(n.type),Zt(n),null;case 19:if(K(cn),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,vo(o,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hp(a,t),a=a.sibling;return Se(cn,cn.current&1|2),Mt&&$i(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ce()>Vl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(t=El(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Mt)return Zt(n),null}else 2*Ce()-o.renderingStartTime>Vl&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,a=cn.current,Se(cn,u?a&1|2:a&1),Mt&&$i(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return si(n),ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(dn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(dn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(cn),null;case 4:return He(),null;case 10:return ta(n.type),null;case 22:case 23:return si(n),ku(),t!==null&&K(vs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(dn),null;case 25:return null;default:return null}}function hg(t,n){switch(wu(n),n.tag){case 3:ta(dn),He();break;case 26:case 27:case 5:Je(n);break;case 4:He();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:K(cn);break;case 10:ta(n.type);break;case 22:case 23:si(n),ku(),t!==null&&K(vs);break;case 24:ta(dn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){zt(n,n.return,R)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var H=a,te=R;try{te()}catch(de){zt(u,H,de)}}}o=o.next}while(o!==f)}}catch(de){zt(n,n.return,de)}}function pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{am(n,a)}catch(o){zt(t,t.return,o)}}}function mg(t,n,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function gg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Mf(t,n,a){try{var o=t.stateNode;pS(o,t.type,a,n),o[En]=n}catch(u){zt(t,t.return,u)}}function vg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function _g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[ln]=t,n[En]=a}catch(f){zt(t,t.return,f)}}var ra=!1,mn=!1,Tf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function qx(t,n){if(t=t.containerInfo,Wf=sc,t=Np(t),vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,H=-1,te=0,de=0,xe=t,se=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(R=_+u),xe!==f||o!==0&&xe.nodeType!==3||(H=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(le=xe.firstChild)!==null;)se=xe,xe=le;for(;;){if(xe===t)break t;if(se===a&&++te===u&&(R=_),se===f&&++de===o&&(H=_),(le=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=le}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},sc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Xe=Ms(a.type,u);t=o.getSnapshotBeforeUpdate(Xe,f),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){zt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function Sg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(t,a),o&4&&_o(5,a);break;case 1:if(la(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){zt(a,a.return,_)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){zt(a,a.return,_)}}o&64&&pg(a),o&512&&xo(a,a.return);break;case 3:if(la(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(t,n)}catch(_){zt(a,a.return,_)}}break;case 27:n===null&&o&4&&_g(a);case 26:case 5:la(t,a),n===null&&o&4&&gg(a),o&512&&xo(a,a.return);break;case 12:la(t,a);break;case 31:la(t,a),o&4&&bg(t,a);break;case 13:la(t,a),o&4&&Eg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=nS.bind(null,a),MS(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||mn,u=ra;var f=mn;ra=o,(mn=n)&&!f?ca(t,a,(a.subtreeFlags&8772)!==0):la(t,a),ra=u,mn=f}break;case 30:break;default:la(t,a)}}function yg(t){var n=t.alternate;n!==null&&(t.alternate=null,yg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,kn=!1;function oa(t,n,a){for(a=a.child;a!==null;)Mg(t,n,a),a=a.sibling}function Mg(t,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:mn||Bi(a,n),oa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Bi(a,n);var o=$t,u=kn;Xa(a.type)&&($t=a.stateNode,kn=!1),oa(t,n,a),wo(a.stateNode),$t=o,kn=u;break;case 5:mn||Bi(a,n);case 6:if(o=$t,u=kn,$t=null,oa(t,n,a),$t=o,kn=u,$t!==null)if(kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:$t!==null&&(kn?(t=$t,p0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):p0($t,a.stateNode));break;case 4:o=$t,u=kn,$t=a.stateNode.containerInfo,kn=!0,oa(t,n,a),$t=o,kn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),mn||za(4,a,n),oa(t,n,a);break;case 1:mn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),oa(t,n,a);break;case 21:oa(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,oa(t,n,a),mn=o;break;default:oa(t,n,a)}}function bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){zt(n,n.return,a)}}}function Eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){zt(n,n.return,a)}}function Yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xg),n;default:throw Error(s(435,t.tag))}}function Bl(t,n){var a=Yx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=iS.bind(null,t,o);o.then(u,u)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Xa(R.type)){$t=R.stateNode,kn=!1;break e}break;case 5:$t=R.stateNode,kn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if($t===null)throw Error(s(160));Mg(f,_,u),$t=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,t),n=n.sibling}var wi=null;function Tg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Xn(t),o&4&&(za(3,t,t.return),_o(3,t),za(5,t,t.return));break;case 1:jn(n,t),Xn(t),o&512&&(mn||a===null||Bi(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(jn(n,t),Xn(t),o&512&&(mn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ba]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[ln]=t,fn(f),o=f;break e;case"link":var _=T0("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=T0("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=t,fn(f),o=f}t.stateNode=o}else A0(u,t.type,t.stateNode);else t.stateNode=E0(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?A0(u,t.type,t.stateNode):E0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),Xn(t),o&512&&(mn||a===null||Bi(a,a.return)),a!==null&&o&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),Xn(t),o&512&&(mn||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{ti(u,"")}catch(Xe){zt(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(jn(n,t),Xn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){zt(t,t.return,Xe)}}break;case 3:if(tc=null,u=wi,wi=$l(n.containerInfo),jn(n,t),wi=u,Xn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Xe){zt(t,t.return,Xe)}Tf&&(Tf=!1,Ag(t));break;case 4:o=wi,wi=$l(t.stateNode.containerInfo),jn(n,t),Xn(t),wi=o;break;case 12:jn(n,t),Xn(t);break;case 31:jn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 13:jn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gl=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=ra,de=mn;if(ra=te||u,mn=de||H,jn(n,t),mn=de,ra=te,Xn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ra||mn||bs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=H.stateNode;var xe=H.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Xe){zt(H,H.return,Xe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xe){zt(H,H.return,Xe)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?m0(le,!0):m0(H.stateNode,!1)}catch(Xe){zt(H,H.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Bl(t,a))));break;case 19:jn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Bl(t,o)));break;case 30:break;case 21:break;default:jn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(vg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(t);zl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ti(_,""),a.flags&=-33);var R=bf(t);zl(t,R,_);break;case 3:case 4:var H=a.stateNode.containerInfo,te=bf(t);Ef(t,te,H);break;default:throw Error(s(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function la(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(t,n.alternate,n),n=n.sibling}function bs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),bs(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),bs(n);break;case 27:wo(n.stateNode);case 26:case 5:Bi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}t=t.sibling}}function ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),_o(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){zt(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)im(H[u],R)}catch(te){zt(o,o.return,te)}}a&&_&64&&pg(f),xo(f,f.return);break;case 27:_g(f);case 26:case 5:ca(u,f,a),a&&o===null&&_&4&&gg(f),xo(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&_&4&&bg(u,f);break;case 13:ca(u,f,a),a&&_&4&&Eg(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),xo(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ri(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Cg(t,n,a,o),n=n.sibling}function Cg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ri(t,n,a,o);break;case 3:Ri(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){Ri(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){zt(n,n.return,H)}}else Ri(t,n,a,o);break;case 31:Ri(t,n,a,o);break;case 13:Ri(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,o):So(t,n):f._visibility&2?Ri(t,n,a,o):(f._visibility|=2,sr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(_,n);break;case 24:Ri(t,n,a,o),u&2048&&Cf(n.alternate,n);break;default:Ri(t,n,a,o)}}function sr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,H=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:sr(f,_,R,H,u),_o(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?sr(f,_,R,H,u):So(f,_):(de._visibility|=2,sr(f,_,R,H,u)),u&&te&2048&&Af(_.alternate,_);break;case 24:sr(f,_,R,H,u),u&&te&2048&&Cf(_.alternate,_);break;default:sr(f,_,R,H,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:So(a,o),u&2048&&Af(o.alternate,o);break;case 24:So(a,o),u&2048&&Cf(o.alternate,o);break;default:So(a,o)}n=n.sibling}}var yo=8192;function rr(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)wg(t,n,a),t=t.sibling}function wg(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&yo&&t.memoizedState!==null&&OS(a,wi,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var o=wi;wi=$l(t.stateNode.containerInfo),rr(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,rr(t,n,a),yo=o):rr(t,n,a));break;default:rr(t,n,a)}}function Rg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Ng(o,t)}Rg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&za(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):Mo(t);break;default:Mo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,Ng(o,t)}Rg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function Ng(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(yg(o),o===a){yn=null;break e}if(u!==null){u.return=f,yn=u;break e}yn=f}}}var Zx={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Wt=null,vt=null,St=0,Ft=0,ri=null,Ba=!1,or=!1,wf=!1,ua=0,an=0,Ha=0,Es=0,Rf=0,oi=0,lr=0,bo=null,Wn=null,Df=!1,Gl=0,Ug=0,Vl=1/0,kl=null,Ga=null,_n=0,Va=null,cr=null,fa=0,Nf=0,Uf=null,Lg=null,Eo=0,Lf=null;function li(){return(Nt&2)!==0&&St!==0?St&-St:P.T!==null?Bf():kr()}function Og(){if(oi===0)if((St&536870912)===0||Mt){var t=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function qn(t,n,a){(t===Wt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ur(t,0),ka(t,St,oi,!1)),tt(t,a),((Nt&2)===0||t!==Wt)&&(t===Wt&&((Nt&2)===0&&(Es|=a),an===4&&ka(t,St,oi,!1)),Hi(t))}function Pg(t,n,a){if((Nt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||ze(t,n),u=o?$x(t,n):Pf(t,n,!0),f=o;do{if(u===0){or&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qx(a)){u=Pf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=bo;var H=R.current.memoizedState.isDehydrated;if(H&&(ur(R,_).flags|=256),_=Pf(R,_,!1),_!==2){if(wf&&!H){R.errorRecoveryDisabledLanes|=f,Es|=f,u=4;break e}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),ka(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,oi,!Ba);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Gl+300-Ce(),10<u)){if(ka(o,n,oi,!Ba),pe(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=d0(Ig.bind(null,o,a,Wn,kl,Df,n,oi,Es,lr,Ba,f,"Throttled",-0,0),u);break e}Ig(o,a,Wn,kl,Df,n,oi,Es,lr,Ba,f,null,-0,0)}}break}while(!0);Hi(t)}function Ig(t,n,a,o,u,f,_,R,H,te,de,xe,se,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},wg(n,f,xe);var Xe=(f&62914560)===f?Gl-Ce():(f&4194048)===f?Ug-Ce():0;if(Xe=PS(xe,Xe),Xe!==null){fa=f,t.cancelPendingCommit=Xe(jg.bind(null,t,n,f,a,o,u,_,R,H,de,xe,null,se,le)),ka(t,f,_,!te);return}}jg(t,n,f,a,o,u,_,R,H)}function Qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~Rf,n&=~Es,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Dt(t,a,n)}function jl(){return(Nt&6)===0?(To(0),!1):!0}function Of(){if(vt!==null){if(Ft===0)var t=vt.return;else t=vt,ea=ms=null,Zu(t),er=null,ro=0,t=vt;for(;t!==null;)hg(t.alternate,t),t=t.return;vt=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,vS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,Of(),Wt=t,vt=a=Ji(t.current,null),St=n,Ft=0,ri=null,Ba=!1,or=ze(t,n),wf=!1,lr=oi=Rf=Es=Ha=an=0,Wn=bo=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),f=1<<u;n|=t[u],o&=~f}return ua=n,fl(),a}function Fg(t,n){ct=null,P.H=mo,n===$s||n===xl?(n=$p(),Ft=3):n===Fu?(n=$p(),Ft=4):Ft=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,vt===null&&(an=1,Ll(t,gi(n,t.current)))}function zg(){var t=ai.current;return t===null?!0:(St&4194048)===St?Si===null:(St&62914560)===St||(St&536870912)!==0?t===Si:!1}function Bg(){var t=P.H;return P.H=mo,t===null?mo:t}function Hg(){var t=P.A;return P.A=Zx,t}function Xl(){an=4,Ba||(St&4194048)!==St&&ai.current!==null||(or=!0),(Ha&134217727)===0&&(Es&134217727)===0||Wt===null||ka(Wt,St,oi,!1)}function Pf(t,n,a){var o=Nt;Nt|=2;var u=Bg(),f=Hg();(Wt!==t||St!==n)&&(kl=null,ur(t,n)),n=!1;var _=an;e:do try{if(Ft!==0&&vt!==null){var R=vt,H=ri;switch(Ft){case 8:Of(),_=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var te=Ft;if(Ft=0,ri=null,fr(t,R,H,te),a&&or){_=0;break e}break;default:te=Ft,Ft=0,ri=null,fr(t,R,H,te)}}Jx(),_=an;break}catch(de){Fg(t,de)}while(!0);return n&&t.shellSuspendCounter++,ea=ms=null,Nt=o,P.H=u,P.A=f,vt===null&&(Wt=null,St=0,fl()),_}function Jx(){for(;vt!==null;)Gg(vt)}function $x(t,n){var a=Nt;Nt|=2;var o=Bg(),u=Hg();Wt!==t||St!==n?(kl=null,Vl=Ce()+500,ur(t,n)):or=ze(t,n);e:do try{if(Ft!==0&&vt!==null){n=vt;var f=ri;t:switch(Ft){case 1:Ft=0,ri=null,fr(t,n,f,1);break;case 2:case 9:if(Qp(f)){Ft=0,ri=null,Vg(n);break}n=function(){Ft!==2&&Ft!==9||Wt!==t||(Ft=7),Hi(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Qp(f)?(Ft=0,ri=null,Vg(n)):(Ft=0,ri=null,fr(t,n,f,7));break;case 5:var _=null;switch(vt.tag){case 26:_=vt.memoizedState;case 5:case 27:var R=vt;if(_?C0(_):R.stateNode.complete){Ft=0,ri=null;var H=R.sibling;if(H!==null)vt=H;else{var te=R.return;te!==null?(vt=te,Wl(te)):vt=null}break t}}Ft=0,ri=null,fr(t,n,f,5);break;case 6:Ft=0,ri=null,fr(t,n,f,6);break;case 8:Of(),an=6;break e;default:throw Error(s(462))}}eS();break}catch(de){Fg(t,de)}while(!0);return ea=ms=null,P.H=o,P.A=u,Nt=a,vt!==null?0:(Wt=null,St=0,fl(),an)}function eS(){for(;vt!==null&&!pt();)Gg(vt)}function Gg(t){var n=fg(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?Wl(t):vt=n}function Vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Zu(n);default:hg(a,n),n=vt=Hp(n,ua),n=fg(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?Wl(t):vt=n}function fr(t,n,a,o){ea=ms=null,Zu(n),er=null,ro=0;var u=n.return;try{if(Vx(t,u,n,a,St)){an=1,Ll(t,gi(a,t.current)),vt=null;return}}catch(f){if(u!==null)throw vt=u,f;an=1,Ll(t,gi(a,t.current)),vt=null;return}n.flags&32768?(Mt||o===1?t=!0:or||(St&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){kg(n,Ba);return}t=n.return;var a=Xx(n.alternate,n,ua);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);an===0&&(an=5)}function kg(t,n){do{var a=Wx(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);an=6,vt=null}function jg(t,n,a,o,u,f,_,R,H){t.cancelPendingCommit=null;do ql();while(_n!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Mu,tn(t,a,f,_,R,H),t===Wt&&(vt=Wt=null,St=0),cr=n,Va=t,fa=a,Nf=f,Uf=u,Lg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,aS($,function(){return Zg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=B.p,B.p=2,_=Nt,Nt|=4;try{qx(t,n,a)}finally{Nt=_,B.p=u,P.T=o}}_n=1,Xg(),Wg(),qg()}}function Xg(){if(_n===1){_n=0;var t=Va,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=Nt;Nt|=4;try{Tg(n,t);var f=qf,_=Np(t.containerInfo),R=f.focusedElem,H=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Dp(R.ownerDocument.documentElement,R)){if(H!==null&&vu(R)){var te=H.start,de=H.end;if(de===void 0&&(de=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(de,R.value.length);else{var xe=R.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var le=se.getSelection(),Xe=R.textContent.length,$e=Math.min(H.start,Xe),kt=H.end===void 0?$e:Math.min(H.end,Xe);!le.extend&&$e>kt&&(_=kt,kt=$e,$e=_);var Z=Rp(R,$e),j=Rp(R,kt);if(Z&&j&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var ee=xe.createRange();ee.setStart(Z.node,Z.offset),le.removeAllRanges(),$e>kt?(le.addRange(ee),le.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),le.addRange(ee))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ge=xe[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}sc=!!Wf,qf=Wf=null}finally{Nt=u,B.p=o,P.T=a}}t.current=n,_n=2}}function Wg(){if(_n===2){_n=0;var t=Va,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=B.p;B.p=2;var u=Nt;Nt|=4;try{Sg(t,n.alternate,n)}finally{Nt=u,B.p=o,P.T=a}}_n=3}}function qg(){if(_n===4||_n===3){_n=0,Ht();var t=Va,n=cr,a=fa,o=Lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,cr=Va=null,Yg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Vr(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=B.p,B.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{P.T=n,B.p=u}}(fa&3)!==0&&ql(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?Eo++:(Eo=0,Lf=t):Eo=0,To(0)}}function Yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function ql(){return Xg(),Wg(),qg(),Zg()}function Zg(){if(_n!==5)return!1;var t=Va,n=Nf;Nf=0;var a=Vr(fa),o=P.T,u=B.p;try{B.p=32>a?32:a,P.T=null,a=Uf,Uf=null;var f=Va,_=fa;if(_n=0,cr=Va=null,fa=0,(Nt&6)!==0)throw Error(s(331));var R=Nt;if(Nt|=4,Dg(f.current),Cg(f,f.current,_,a),Nt=R,To(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{B.p=u,P.T=o,Yg(t,n)}}function Kg(t,n,a){n=gi(a,n),n=ff(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(tt(t,2),Hi(t))}function zt(t,n,a){if(t.tag===3)Kg(t,t,a);else for(;n!==null;){if(n.tag===3){Kg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=gi(a,t),a=Qm(2),o=Pa(n,a,2),o!==null&&(Jm(a,o,n,t),tt(o,2),Hi(o));break}}n=n.return}}function If(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(wf=!0,u.add(a),t=tS.bind(null,t,n,a),n.then(t,t))}function tS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(St&a)===a&&(an===4||an===3&&(St&62914560)===St&&300>Ce()-Gl?(Nt&2)===0&&ur(t,0):Rf|=a,lr===St&&(lr=0)),Hi(t)}function Qg(t,n){n===0&&(n=Me()),t=ds(t,n),t!==null&&(tt(t,n),Hi(t))}function nS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function iS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Qg(t,a)}function aS(t,n){return q(t,n)}var Yl=null,dr=null,Ff=!1,Zl=!1,zf=!1,ja=0;function Hi(t){t!==dr&&t.next===null&&(dr===null?Yl=dr=t:dr=dr.next=t),Zl=!0,Ff||(Ff=!0,rS())}function To(t,n){if(!zf&&Zl){zf=!0;do for(var a=!1,o=Yl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Pe(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,t0(o,f))}else f=St,f=pe(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ze(o,f)||(a=!0,t0(o,f));o=o.next}while(a);zf=!1}}function sS(){Jg()}function Jg(){Zl=Ff=!1;var t=0;ja!==0&&gS()&&(t=ja);for(var n=Ce(),a=null,o=Yl;o!==null;){var u=o.next,f=$g(o,n);f===0?(o.next=null,a===null?Yl=u:a.next=u,u===null&&(dr=a)):(a=o,(t!==0||(f&3)!==0)&&(Zl=!0)),o=u}_n!==0&&_n!==5||To(t),ja!==0&&(ja=0)}function $g(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Pe(f),R=1<<_,H=u[_];H===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Ue(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=Wt,a=St,a=pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ze(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&en(o),Vr(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=be;break;default:a=$}return o=e0.bind(null,t),a=q(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&en(o),t.callbackPriority=2,t.callbackNode=null,2}function e0(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var o=St;return o=pe(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Pg(t,o,n),$g(t,Ce()),t.callbackNode!=null&&t.callbackNode===a?e0.bind(null,t):null)}function t0(t,n){if(ql())return null;Pg(t,n,!0)}function rS(){_S(function(){(Nt&6)!==0?q(N,sS):Jg()})}function Bf(){if(ja===0){var t=Qs;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),ja=t}return ja}function n0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ls(""+t)}function i0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=n0((u[En]||null).action),_=o.submitter;_&&(n=(n=_[En]||null)?n0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new ol("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var H=_?i0(u,_):new FormData(u);sf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=_?i0(u,_):new FormData(u),sf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Hf=0;Hf<yu.length;Hf++){var Gf=yu[Hf],lS=Gf.toLowerCase(),cS=Gf[0].toUpperCase()+Gf.slice(1);Ci(lS,"on"+cS)}Ci(Op,"onAnimationEnd"),Ci(Pp,"onAnimationIteration"),Ci(Ip,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(Tx,"onTransitionRun"),Ci(Ax,"onTransitionStart"),Ci(Cx,"onTransitionCancel"),Ci(Fp,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function a0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],H=R.instance,te=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(de){ul(de)}u.currentTarget=null,f=H}else for(_=0;_<o.length;_++){if(R=o[_],H=R.instance,te=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(de){ul(de)}u.currentTarget=null,f=H}}}}function _t(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var o=t+"__bubble";a.has(o)||(s0(n,t,2,!1),a.add(o))}function Vf(t,n,a){var o=0;n&&(o|=4),s0(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Kl]){t[Kl]=!0,il.forEach(function(a){a!=="selectionchange"&&(uS.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Vf("selectionchange",!1,n))}}function s0(t,n,a,o){switch(O0(n)){case 2:var u=zS;break;case 8:u=BS;break;default:u=ad}a=u.bind(null,n,a,t),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ea(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=f=_;continue e}R=R.parentNode}}o=o.return}up(function(){var te=f,de=ru(a),xe=[];e:{var se=zp.get(t);if(se!==void 0){var le=ol,Xe=t;switch(t){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":le=ix;break;case"focusin":Xe="focus",le=du;break;case"focusout":Xe="blur",le=du;break;case"beforeblur":case"afterblur":le=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=rx;break;case Op:case Pp:case Ip:le=Y_;break;case Fp:le=lx;break;case"scroll":case"scrollend":le=k_;break;case"wheel":le=ux;break;case"copy":case"cut":case"paste":le=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=mp;break;case"toggle":case"beforetoggle":le=dx}var $e=(n&4)!==0,kt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?se!==null?se+"Capture":null:se;$e=[];for(var j=te,ee;j!==null;){var ge=j;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||Z===null||(ge=qr(j,Z),ge!=null&&$e.push(Co(j,ge,ee))),kt)break;j=j.return}0<$e.length&&(se=new le(se,Xe,null,a,de),xe.push({event:se,listeners:$e}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",se&&a!==su&&(Xe=a.relatedTarget||a.fromElement)&&(Ea(Xe)||Xe[Zi]))break e;if((le||se)&&(se=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,le?(Xe=a.relatedTarget||a.toElement,le=te,Xe=Xe?Ea(Xe):null,Xe!==null&&(kt=c(Xe),$e=Xe.tag,Xe!==kt||$e!==5&&$e!==27&&$e!==6)&&(Xe=null)):(le=null,Xe=te),le!==Xe)){if($e=hp,ge="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&($e=mp,ge="onPointerLeave",Z="onPointerEnter",j="pointer"),kt=le==null?se:os(le),ee=Xe==null?se:os(Xe),se=new $e(ge,j+"leave",le,a,de),se.target=kt,se.relatedTarget=ee,ge=null,Ea(de)===te&&($e=new $e(Z,j+"enter",Xe,a,de),$e.target=ee,$e.relatedTarget=kt,ge=$e),kt=ge,le&&Xe)t:{for($e=fS,Z=le,j=Xe,ee=0,ge=Z;ge;ge=$e(ge))ee++;ge=0;for(var Qe=j;Qe;Qe=$e(Qe))ge++;for(;0<ee-ge;)Z=$e(Z),ee--;for(;0<ge-ee;)j=$e(j),ge--;for(;ee--;){if(Z===j||j!==null&&Z===j.alternate){$e=Z;break t}Z=$e(Z),j=$e(j)}$e=null}else $e=null;le!==null&&r0(xe,se,le,$e,!1),Xe!==null&&kt!==null&&r0(xe,kt,Xe,$e,!0)}}e:{if(se=te?os(te):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var wt=bp;else if(yp(se))if(Ep)wt=Mx;else{wt=Sx;var qe=xx}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Ut(te.elementType)&&(wt=bp):wt=yx;if(wt&&(wt=wt(t,te))){Mp(xe,wt,a,de);break e}qe&&qe(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&gt(se,"number",se.value)}switch(qe=te?os(te):window,t){case"focusin":(yp(qe)||qe.contentEditable==="true")&&(ks=qe,_u=te,to=null);break;case"focusout":to=_u=ks=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Up(xe,a,de);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Up(xe,a,de)}var ft;if(pu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Vs?xp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(gp&&a.locale!=="ko"&&(Vs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Vs&&(ft=fp()):(wa=de,cu="value"in wa?wa.value:wa.textContent,Vs=!0)),qe=Ql(te,yt),0<qe.length&&(yt=new pp(yt,t,null,a,de),xe.push({event:yt,listeners:qe}),ft?yt.data=ft:(ft=Sp(a),ft!==null&&(yt.data=ft)))),(ft=px?mx(t,a):gx(t,a))&&(yt=Ql(te,"onBeforeInput"),0<yt.length&&(qe=new pp("onBeforeInput","beforeinput",null,a,de),xe.push({event:qe,listeners:yt}),qe.data=ft)),oS(xe,t,te,a,de)}a0(xe,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qr(t,a),u!=null&&o.unshift(Co(t,u,f)),u=qr(t,n),u!=null&&o.push(Co(t,u,f))),t.tag===3)return o;t=t.return}return[]}function fS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function r0(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,H=R.alternate,te=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||te===null||(H=te,u?(te=qr(a,f),te!=null&&_.unshift(Co(a,te,H))):u||(te=qr(a,f),te!=null&&_.push(Co(a,te,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var dS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(hS,"")}function l0(t,n){return n=o0(n),o0(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ti(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ti(t,""+o);break;case"className":je(t,"class",o);break;case"tabIndex":je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":je(t,a,o);break;case"style":Ai(t,o,f);break;case"data":if(n!=="object"){je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ls(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=ls(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=ls(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ii.get(a)||a,Ie(t,a,o))}}function Xf(t,n,a,o,u,f){switch(a){case"style":Ai(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ti(t,o):(typeof o=="number"||typeof o=="bigint")&&ti(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[En]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ie(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,f,_,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=f=_=u=null,H=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":_=de;break;case"checked":H=de;break;case"defaultChecked":te=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Vt(t,n,o,de,a,null)}}Un(t,f,R,H,te,_,u,!1);return;case"select":_t("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Vt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":_t("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Vt(t,n,_,R,a,null)}Ti(t,o,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,n,H,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<Ao.length;o++)_t(Ao[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,te,o,a,null)}return;default:if(Ut(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&Xf(t,n,de,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function pS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,H=null,te=null,de=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=xe;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,xe)}}for(var se in o){var le=o[se];if(xe=a[se],o.hasOwnProperty(se)&&(le!=null||xe!=null))switch(se){case"type":f=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==xe&&Vt(t,n,se,le,o,xe)}}Ge(t,_,R,H,te,de,f,u);return;case"select":le=_=R=se=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":se=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==H&&Vt(t,n,u,f,o,H)}n=R,a=_,o=le,se!=null?vn(t,!!a,se,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":se=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(t,n,_,u,o,f)}ei(t,se,le);return;case"option":for(var Xe in a)if(se=a[Xe],a.hasOwnProperty(Xe)&&se!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Vt(t,n,Xe,null,o,se)}for(H in o)if(se=o[H],le=a[H],o.hasOwnProperty(H)&&se!==le&&(se!=null||le!=null))switch(H){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Vt(t,n,H,se,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)se=a[$e],a.hasOwnProperty($e)&&se!=null&&!o.hasOwnProperty($e)&&Vt(t,n,$e,null,o,se);for(te in o)if(se=o[te],le=a[te],o.hasOwnProperty(te)&&se!==le&&(se!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Vt(t,n,te,se,o,le)}return;default:if(Ut(n)){for(var kt in a)se=a[kt],a.hasOwnProperty(kt)&&se!==void 0&&!o.hasOwnProperty(kt)&&Xf(t,n,kt,void 0,o,se);for(de in o)se=o[de],le=a[de],!o.hasOwnProperty(de)||se===le||se===void 0&&le===void 0||Xf(t,n,de,se,o,le);return}}for(var Z in a)se=a[Z],a.hasOwnProperty(Z)&&se!=null&&!o.hasOwnProperty(Z)&&Vt(t,n,Z,null,o,se);for(xe in o)se=o[xe],le=a[xe],!o.hasOwnProperty(xe)||se===le||se==null&&le==null||Vt(t,n,xe,se,o,le)}function c0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&c0(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],te=H.startTime;if(te>R)break;var de=H.transferSize,xe=H.initiatorType;de&&c0(xe)&&(H=H.responseEnd,_+=de*(H<R?1:(R-te)/(H-te)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wf=null,qf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function u0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gS(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var d0=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,h0=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof h0<"u"?function(t){return h0.resolve(null).then(t).catch(xS)}:d0;function xS(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function p0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),gr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);gr(n)}function m0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function SS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function yS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function g0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$?"||t.data==="$~"}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function MS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $f=null;function v0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function _0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function x0(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Wr(t)}var Mi=new Map,S0=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=B.d;B.d={f:bS,r:ES,D:TS,C:AS,L:CS,m:wS,X:DS,S:RS,M:NS};function bS(){var t=da.f(),n=jl();return t||n}function ES(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?Fm(n):da.r(t)}var hr=typeof document>"u"?null:document;function y0(t,n,a){var o=hr;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),S0.has(u)||(S0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),fn(n),o.head.appendChild(n)))}}function TS(t){da.D(t),y0("dns-prefetch",t,null)}function AS(t,n){da.C(t,n),y0("preconnect",t,n)}function CS(t,n,a){da.L(t,n,a);var o=hr;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}Mi.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),wn(n,"link",t),fn(n),o.head.appendChild(n)))}}function wS(t,n){da.m(t,n);var a=hr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!Mi.has(f)&&(t=S({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}o=a.createElement("link"),wn(o,"link",t),fn(o),a.head.appendChild(o)}}}function RS(t,n,a){da.S(t,n,a);var o=hr;if(o&&t){var u=Aa(o).hoistableStyles,f=pr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Ro(f)))R.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&ed(t,a);var H=_=o.createElement("link");fn(H),wn(H,"link",t),H._p=new Promise(function(te,de){H.onload=te,H.onerror=de}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ec(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function DS(t,n){da.X(t,n);var a=hr;if(a&&t){var o=Aa(a).hoistableScripts,u=mr(t),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(t=S({src:t,async:!0},n),(n=Mi.get(u))&&td(t,n),f=a.createElement("script"),fn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function NS(t,n){da.M(t,n);var a=hr;if(a&&t){var o=Aa(a).hoistableScripts,u=mr(t),f=o.get(u);f||(f=a.querySelector(Do(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&td(t,n),f=a.createElement("script"),fn(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function M0(t,n,a,o){var u=(u=oe.current)?$l(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Aa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Aa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Ro(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),f||US(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Aa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Pt(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function b0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function US(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),fn(n),t.head.appendChild(n))}function mr(t){return'[src="'+Pt(t)+'"]'}function Do(t){return"script[async]"+t}function E0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),wn(o,"style",u),ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=pr(a.href);var f=t.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;o=b0(a),(u=Mi.get(u))&&ed(o,u),f=(t.ownerDocument||t).createElement("link"),fn(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),wn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Do(f)))?(n.instance=u,fn(u),u):(o=a,(u=Mi.get(f))&&(o=S({},a),td(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),fn(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function T0(t,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ba]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function A0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function LS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function C0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function OS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(o.href),f=n.querySelector(Ro(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,o=b0(o),(u=Mi.get(u))&&ed(o,u),f=f.createElement("link"),fn(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nd=0;function PS(t,n){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nd===0&&(nd=62500*mS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function nc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ac(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(IS,t),ic=null,nc.call(t))}function IS(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:U,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function FS(t,n,a,o,u,f,_,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function w0(t,n,a,o,u,f,_,R,H,te,de,xe){return t=new FS(t,n,a,_,H,te,de,xe,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},zu(f),t}function R0(t){return t?(t=Ws,t):Ws}function D0(t,n,a,o,u,f){u=R0(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(t,o,n),a!==null&&(qn(a,t,n),lo(a,t,n))}function N0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function id(t,n){N0(t,n),(t=t.alternate)&&N0(t,n)}function U0(t){if(t.tag===13||t.tag===31){var n=ds(t,67108864);n!==null&&qn(n,t,67108864),id(t,67108864)}}function L0(t){if(t.tag===13||t.tag===31){var n=li();n=rs(n);var a=ds(t,n);a!==null&&qn(a,t,n),id(t,n)}}var sc=!0;function zS(t,n,a,o){var u=P.T;P.T=null;var f=B.p;try{B.p=2,ad(t,n,a,o)}finally{B.p=f,P.T=u}}function BS(t,n,a,o){var u=P.T;P.T=null;var f=B.p;try{B.p=8,ad(t,n,a,o)}finally{B.p=f,P.T=u}}function ad(t,n,a,o){if(sc){var u=sd(o);if(u===null)jf(t,n,o,rc,a),P0(t,o);else if(GS(u,t,n,a,o))o.stopPropagation();else if(P0(t,o),n&4&&-1<HS.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ae(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-Pe(_);R.entanglements[1]|=H,_&=~H}Hi(f),(Nt&6)===0&&(Vl=Ce()+500,To(0))}}break;case 31:case 13:R=ds(f,2),R!==null&&qn(R,f,2),jl(),id(f,2)}if(f=sd(o),f===null&&jf(t,n,o,rc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jf(t,n,o,null,a)}}function sd(t){return t=ru(t),rd(t)}var rc=null;function rd(t){if(rc=null,t=Ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function O0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kt()){case N:return 2;case b:return 8;case $:case _e:return 32;case be:return 268435456;default:return 32}default:return 32}}var od=!1,Wa=null,qa=null,Ya=null,Uo=new Map,Lo=new Map,Za=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&U0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GS(t,n,a,o,u){switch(n){case"focusin":return Wa=Oo(Wa,t,n,a,o,u),!0;case"dragenter":return qa=Oo(qa,t,n,a,o,u),!0;case"mouseover":return Ya=Oo(Ya,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Oo(Uo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,Oo(Lo.get(f)||null,t,n,a,o,u)),!0}return!1}function I0(t){var n=Ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,jr(t.priority,function(){L0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,jr(t.priority,function(){L0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);su=o,a.target.dispatchEvent(o),su=null}else return n=Ta(a),n!==null&&U0(n),t.blockedOn=a,!1;n.shift()}return!0}function F0(t,n,a){oc(t)&&a.delete(n)}function VS(){od=!1,Wa!==null&&oc(Wa)&&(Wa=null),qa!==null&&oc(qa)&&(qa=null),Ya!==null&&oc(Ya)&&(Ya=null),Uo.forEach(F0),Lo.forEach(F0)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,od||(od=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,VS)))}var cc=null;function z0(t){cc!==t&&(cc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rd(o||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function gr(t){function n(H){return lc(H,t)}Wa!==null&&lc(Wa,t),qa!==null&&lc(qa,t),Ya!==null&&lc(Ya,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)I0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[En]||null;if(typeof f=="function")_||z0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[En]||null)R=_.formAction;else if(rd(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),z0(a)}}}function B0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ld(t){this._internalRoot=t}uc.prototype.render=ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();D0(a,o,t,n,null,null)},uc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;D0(t.current,2,null,t,null,null),jl(),n[Zi]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var n=kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&I0(t)}};var H0=e.version;if(H0!=="19.2.5")throw Error(s(527,H0,"19.2.5"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var kS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ce=fc.inject(kS),fe=fc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=qm,f=Ym,_=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=w0(t,1,!1,null,null,a,o,null,u,f,_,B0),t[Zi]=n.current,kf(t),new ld(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=qm,_=Ym,R=Zm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=w0(t,1,!0,n,a??null,o,u,H,f,_,R,B0),n.context=R0(null),a=n.current,o=li(),o=rs(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,tt(n,a),Hi(n),t[Zi]=n.current,kf(t),new uc(n)},Io.version="19.2.5",Io}var K0;function $S(){if(K0)return fd.exports;K0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fd.exports=JS(),fd.exports}var ey=$S();const ty=`
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}
  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}
  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;height:22px;
    border-radius:6px;cursor:default;padding:0}
  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}
  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}
  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}
  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;function ny(r){const[e,i]=Ze.useState(r),s=Ze.useCallback((l,c)=>{i(d=>({...d,[l]:c})),window.parent.postMessage({type:"__edit_mode_set_keys",edits:{[l]:c}},"*")},[]);return[e,s]}function iy({title:r="Tweaks",children:e}){const[i,s]=Ze.useState(!1),l=Ze.useRef(null),c=Ze.useRef({x:16,y:16}),d=16,h=Ze.useCallback(()=>{const v=l.current;if(!v)return;const S=v.offsetWidth,g=v.offsetHeight,y=Math.max(d,window.innerWidth-S-d),T=Math.max(d,window.innerHeight-g-d);c.current={x:Math.min(y,Math.max(d,c.current.x)),y:Math.min(T,Math.max(d,c.current.y))},v.style.right=c.current.x+"px",v.style.bottom=c.current.y+"px"},[]);Ze.useEffect(()=>{if(!i)return;if(h(),typeof ResizeObserver>"u")return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h);const v=new ResizeObserver(h);return v.observe(document.documentElement),()=>v.disconnect()},[i,h]),Ze.useEffect(()=>{const v=S=>{var y;const g=(y=S==null?void 0:S.data)==null?void 0:y.type;g==="__activate_edit_mode"?s(!0):g==="__deactivate_edit_mode"&&s(!1)};return window.addEventListener("message",v),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",v)},[]);const m=()=>{s(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},p=v=>{const S=l.current;if(!S)return;const g=S.getBoundingClientRect(),y=v.clientX,T=v.clientY,D=window.innerWidth-g.right,x=window.innerHeight-g.bottom,M=U=>{c.current={x:D-(U.clientX-y),y:x-(U.clientY-T)},h()},w=()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",w)};window.addEventListener("mousemove",M),window.addEventListener("mouseup",w)};return i?C.jsxs(C.Fragment,{children:[C.jsx("style",{children:ty}),C.jsxs("div",{ref:l,className:"twk-panel",style:{right:c.current.x,bottom:c.current.y},children:[C.jsxs("div",{className:"twk-hd",onMouseDown:p,children:[C.jsx("b",{children:r}),C.jsx("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:v=>v.stopPropagation(),onClick:m,children:"✕"})]}),C.jsx("div",{className:"twk-body",children:e})]})]}):null}function dc({label:r,children:e}){return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"twk-sect",children:r}),e]})}function a_({label:r,value:e,children:i,inline:s=!1}){return C.jsxs("div",{className:s?"twk-row twk-row-h":"twk-row",children:[C.jsxs("div",{className:"twk-lbl",children:[C.jsx("span",{children:r}),e!=null&&C.jsx("span",{className:"twk-val",children:e})]}),i]})}function md({label:r,value:e,min:i=0,max:s=100,step:l=1,unit:c="",onChange:d}){return C.jsx(a_,{label:r,value:`${e}${c}`,children:C.jsx("input",{type:"range",className:"twk-slider",min:i,max:s,step:l,value:e,onChange:h=>d(Number(h.target.value))})})}function ay({label:r,value:e,onChange:i}){return C.jsxs("div",{className:"twk-row twk-row-h",children:[C.jsx("div",{className:"twk-lbl",children:C.jsx("span",{children:r})}),C.jsx("button",{type:"button",className:"twk-toggle","data-on":e?"1":"0",role:"switch","aria-checked":!!e,onClick:()=>i(!e),children:C.jsx("i",{})})]})}function sy({label:r,value:e,options:i,onChange:s}){const l=Ze.useRef(null),[c,d]=Ze.useState(!1),h=i.map(y=>typeof y=="object"?y:{value:y,label:y}),m=Math.max(0,h.findIndex(y=>y.value===e)),p=h.length,v=Ze.useRef(e);v.current=e;const S=y=>{const T=l.current.getBoundingClientRect(),D=T.width-4,x=Math.floor((y-T.left-2)/D*p);return h[Math.max(0,Math.min(p-1,x))].value},g=y=>{d(!0);const T=S(y.clientX);T!==v.current&&s(T);const D=M=>{if(!l.current)return;const w=S(M.clientX);w!==v.current&&s(w)},x=()=>{d(!1),window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",x)};window.addEventListener("pointermove",D),window.addEventListener("pointerup",x)};return C.jsx(a_,{label:r,children:C.jsxs("div",{ref:l,role:"radiogroup",onPointerDown:g,className:c?"twk-seg dragging":"twk-seg",children:[C.jsx("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${m} * (100% - 4px) / ${p})`,width:`calc((100% - 4px) / ${p})`}}),h.map(y=>C.jsx("button",{type:"button",role:"radio","aria-checked":y.value===e,children:y.label},y.value))]})})}function gd({label:r,value:e,onChange:i}){return C.jsxs("div",{className:"twk-row twk-row-h",children:[C.jsx("div",{className:"twk-lbl",children:C.jsx("span",{children:r})}),C.jsx("input",{type:"color",className:"twk-swatch",value:e,onChange:s=>i(s.target.value)})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="184",ry=0,Q0=1,oy=2,zc=1,ly=2,Wo=3,ss=0,Kn=1,_a=2,Wi=0,Lr=1,Qd=2,J0=3,$0=4,cy=5,Ds=100,uy=101,fy=102,dy=103,hy=104,py=200,my=201,gy=202,vy=203,Jd=204,$d=205,_y=206,xy=207,Sy=208,yy=209,My=210,by=211,Ey=212,Ty=213,Ay=214,eh=0,th=1,nh=2,Pr=3,ih=4,ah=5,sh=6,rh=7,s_=0,Cy=1,wy=2,qi=0,r_=1,o_=2,l_=3,c_=4,u_=5,f_=6,d_=7,h_=300,Ps=301,Ir=302,vd=303,_d=304,eu=306,oh=1e3,xa=1001,lh=1002,Rn=1003,Ry=1004,hc=1005,In=1006,xd=1007,Us=1008,di=1009,p_=1010,m_=1011,Yo=1012,Wh=1013,Yi=1014,ji=1015,hi=1016,qh=1017,Yh=1018,Zo=1020,g_=35902,v_=35899,__=1021,x_=1022,Oi=1023,ya=1026,Ls=1027,S_=1028,Zh=1029,Is=1030,Kh=1031,Qh=1033,Bc=33776,Hc=33777,Gc=33778,Vc=33779,ch=35840,uh=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,gh=37488,vh=37489,Xc=37490,_h=37491,xh=37808,Sh=37809,yh=37810,Mh=37811,bh=37812,Eh=37813,Th=37814,Ah=37815,Ch=37816,wh=37817,Rh=37818,Dh=37819,Nh=37820,Uh=37821,Lh=36492,Oh=36494,Ph=36495,Ih=36283,Fh=36284,Wc=36285,zh=36286,Dy=3200,ev=0,Ny=1,is="",Ei="srgb",qc="srgb-linear",Yc="linear",Bt="srgb",vr=7680,tv=519,Uy=512,Ly=513,Oy=514,Jh=515,Py=516,Iy=517,$h=518,Fy=519,nv=35044,iv="300 es",Xi=2e3,Ko=2001;function zy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function By(){const r=Zc("canvas");return r.style.display="block",r}const av={};function sv(...r){const e="THREE."+r.shift();console.log(e,...r)}function y_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=y_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function At(...r){r=y_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Bh(...r){const e=r.join(" ");e in av||(av[e]=!0,nt(...r))}function Hy(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Gy={[eh]:th,[nh]:sh,[ih]:rh,[Pr]:ah,[th]:eh,[sh]:nh,[rh]:ih,[ah]:Pr};class zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=Math.PI/180,Hh=180/Math.PI;function Qo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function Vy(r,e){return(r%e+e)%e}function yd(r,e,i){return(1-i)*r+i*e}function Fo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ap=class ap{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ap.prototype.isVector2=!0;let rt=ap;class Hr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],v=s[l+2],S=s[l+3],g=c[d+0],y=c[d+1],T=c[d+2],D=c[d+3];if(S!==D||m!==g||p!==y||v!==T){let x=m*g+p*y+v*T+S*D;x<0&&(g=-g,y=-y,T=-T,D=-D,x=-x);let M=1-h;if(x<.9995){const w=Math.acos(x),U=Math.sin(w);M=Math.sin(M*w)/U,h=Math.sin(h*w)/U,m=m*M+g*h,p=p*M+y*h,v=v*M+T*h,S=S*M+D*h}else{m=m*M+g*h,p=p*M+y*h,v=v*M+T*h,S=S*M+D*h;const w=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=w,p*=w,v*=w,S*=w}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],S=c[d],g=c[d+1],y=c[d+2],T=c[d+3];return e[i]=h*T+v*S+m*y-p*g,e[i+1]=m*T+v*g+p*S-h*y,e[i+2]=p*T+v*y+h*g-m*S,e[i+3]=v*T-h*S-m*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),S=h(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*v*S+p*y*T,this._y=p*y*S-g*v*T,this._z=p*v*T+g*y*S,this._w=p*v*S-g*y*T;break;case"YXZ":this._x=g*v*S+p*y*T,this._y=p*y*S-g*v*T,this._z=p*v*T-g*y*S,this._w=p*v*S+g*y*T;break;case"ZXY":this._x=g*v*S-p*y*T,this._y=p*y*S+g*v*T,this._z=p*v*T+g*y*S,this._w=p*v*S-g*y*T;break;case"ZYX":this._x=g*v*S-p*y*T,this._y=p*y*S+g*v*T,this._z=p*v*T-g*y*S,this._w=p*v*S+g*y*T;break;case"YZX":this._x=g*v*S+p*y*T,this._y=p*y*S+g*v*T,this._z=p*v*T-g*y*S,this._w=p*v*S-g*y*T;break;case"XZY":this._x=g*v*S-p*y*T,this._y=p*y*S-g*v*T,this._z=p*v*T+g*y*S,this._w=p*v*S+g*y*T;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],S=i[10],g=s+h+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>S){const y=2*Math.sqrt(1+s-h-S);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>S){const y=2*Math.sqrt(1+h-s-S);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+S-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-s*p,this._z=c*v+d*p+s*m-l*h,this._w=d*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(rv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(rv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),v=2*(h*i-c*l),S=2*(c*s-d*i);return this.x=i+m*p+d*S-h*v,this.y=s+m*v+h*p-c*S,this.z=l+m*S+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let J=sp;const Md=new J,rv=new Hr,rp=class rp{constructor(e,i,s,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],v=s[4],S=s[7],g=s[2],y=s[5],T=s[8],D=l[0],x=l[3],M=l[6],w=l[1],U=l[4],L=l[7],V=l[2],O=l[5],z=l[8];return c[0]=d*D+h*w+m*V,c[3]=d*x+h*U+m*O,c[6]=d*M+h*L+m*z,c[1]=p*D+v*w+S*V,c[4]=p*x+v*U+S*O,c[7]=p*M+v*L+S*z,c[2]=g*D+y*w+T*V,c[5]=g*x+y*U+T*O,c[8]=g*M+y*L+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-s*c*v+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],S=v*d-h*p,g=h*m-v*c,y=p*c-d*m,T=i*S+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=S*D,e[1]=(l*p-v*s)*D,e[2]=(h*s-l*d)*D,e[3]=g*D,e[4]=(v*i-l*m)*D,e[5]=(l*c-h*i)*D,e[6]=y*D,e[7]=(s*m-p*i)*D,e[8]=(d*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(bd.makeScale(e,i)),this}rotate(e){return this.premultiply(bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rp.prototype.isMatrix3=!0;let ot=rp;const bd=new ot,ov=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lv=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ky(){const r={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Bt&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Bh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Bh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qc]:{primaries:e,whitePoint:s,transfer:Yc,toXYZ:ov,fromXYZ:lv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:s,transfer:Bt,toXYZ:ov,fromXYZ:lv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),r}const bt=ky();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _r;class jy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{_r===void 0&&(_r=Zc("canvas")),_r.width=e.width,_r.height=e.height;const l=_r.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=_r}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Sa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Sa(i[s]/255)*255):i[s]=Sa(i[s]);return{data:i,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xy=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ed(l[d].image)):c.push(Ed(l[d]))}else c=Ed(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ed(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let Wy=0;const Td=new J;class Hn extends zs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=xa,l=xa,c=In,d=Us,h=Oi,m=di,p=Hn.DEFAULT_ANISOTROPY,v=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Qo(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){nt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oh:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oh:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=h_;Hn.DEFAULT_ANISOTROPY=1;const op=class op{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],S=m[8],g=m[1],y=m[5],T=m[9],D=m[2],x=m[6],M=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-D)<.01&&Math.abs(T-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+D)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(y+1)/2,V=(M+1)/2,O=(v+g)/4,z=(S+D)/4,E=(T+x)/4;return U>L&&U>V?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=z/s):L>V?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=O/l,c=E/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=z/c,l=E/c),this.set(s,l,c,i),this}let w=Math.sqrt((x-T)*(x-T)+(S-D)*(S-D)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(x-T)/w,this.y=(S-D)/w,this.z=(g-v)/w,this.w=Math.acos((p+y+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;let sn=op;class qy extends zs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Hn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends qy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class M_ extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yy extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(e,i,s,l,c,d,h,m,p,v,S,g,y,T,D,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,v,S,g,y,T,D,x)}set(e,i,s,l,c,d,h,m,p,v,S,g,y,T,D,x){const M=this.elements;return M[0]=e,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=d,M[9]=h,M[13]=m,M[2]=p,M[6]=v,M[10]=S,M[14]=g,M[3]=y,M[7]=T,M[11]=D,M[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),d=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=d*v,y=d*S,T=h*v,D=h*S;i[0]=m*v,i[4]=-m*S,i[8]=p,i[1]=y+T*p,i[5]=g-D*p,i[9]=-h*m,i[2]=D-g*p,i[6]=T+y*p,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,y=m*S,T=p*v,D=p*S;i[0]=g+D*h,i[4]=T*h-y,i[8]=d*p,i[1]=d*S,i[5]=d*v,i[9]=-h,i[2]=y*h-T,i[6]=D+g*h,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,y=m*S,T=p*v,D=p*S;i[0]=g-D*h,i[4]=-d*S,i[8]=T+y*h,i[1]=y+T*h,i[5]=d*v,i[9]=D-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,y=d*S,T=h*v,D=h*S;i[0]=m*v,i[4]=T*p-y,i[8]=g*p+D,i[1]=m*S,i[5]=D*p+g,i[9]=y*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,y=d*p,T=h*m,D=h*p;i[0]=m*v,i[4]=D-g*S,i[8]=T*S+y,i[1]=S,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=y*S+T,i[10]=g-D*S}else if(e.order==="XZY"){const g=d*m,y=d*p,T=h*m,D=h*p;i[0]=m*v,i[4]=-S,i[8]=p*v,i[1]=g*S+D,i[5]=d*v,i[9]=y*S-T,i[2]=T*S-y,i[6]=h*v,i[10]=D*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zy,e,Ky)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Qa.crossVectors(s,ci),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Qa.crossVectors(s,ci)),Qa.normalize(),pc.crossVectors(ci,Qa),l[0]=Qa.x,l[4]=pc.x,l[8]=ci.x,l[1]=Qa.y,l[5]=pc.y,l[9]=ci.y,l[2]=Qa.z,l[6]=pc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],v=s[1],S=s[5],g=s[9],y=s[13],T=s[2],D=s[6],x=s[10],M=s[14],w=s[3],U=s[7],L=s[11],V=s[15],O=l[0],z=l[4],E=l[8],F=l[12],X=l[1],G=l[5],Q=l[9],ue=l[13],he=l[2],W=l[6],P=l[10],B=l[14],re=l[3],me=l[7],ve=l[11],I=l[15];return c[0]=d*O+h*X+m*he+p*re,c[4]=d*z+h*G+m*W+p*me,c[8]=d*E+h*Q+m*P+p*ve,c[12]=d*F+h*ue+m*B+p*I,c[1]=v*O+S*X+g*he+y*re,c[5]=v*z+S*G+g*W+y*me,c[9]=v*E+S*Q+g*P+y*ve,c[13]=v*F+S*ue+g*B+y*I,c[2]=T*O+D*X+x*he+M*re,c[6]=T*z+D*G+x*W+M*me,c[10]=T*E+D*Q+x*P+M*ve,c[14]=T*F+D*ue+x*B+M*I,c[3]=w*O+U*X+L*he+V*re,c[7]=w*z+U*G+L*W+V*me,c[11]=w*E+U*Q+L*P+V*ve,c[15]=w*F+U*ue+L*B+V*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],S=e[6],g=e[10],y=e[14],T=e[3],D=e[7],x=e[11],M=e[15],w=m*y-p*g,U=h*y-p*S,L=h*g-m*S,V=d*y-p*v,O=d*g-m*v,z=d*S-h*v;return i*(D*w-x*U+M*L)-s*(T*w-x*V+M*O)+l*(T*U-D*V+M*z)-c*(T*L-D*O+x*z)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],S=e[9],g=e[10],y=e[11],T=e[12],D=e[13],x=e[14],M=e[15],w=i*h-s*d,U=i*m-l*d,L=i*p-c*d,V=s*m-l*h,O=s*p-c*h,z=l*p-c*m,E=v*D-S*T,F=v*x-g*T,X=v*M-y*T,G=S*x-g*D,Q=S*M-y*D,ue=g*M-y*x,he=w*ue-U*Q+L*G+V*X-O*F+z*E;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/he;return e[0]=(h*ue-m*Q+p*G)*W,e[1]=(l*Q-s*ue-c*G)*W,e[2]=(D*z-x*O+M*V)*W,e[3]=(g*O-S*z-y*V)*W,e[4]=(m*X-d*ue-p*F)*W,e[5]=(i*ue-l*X+c*F)*W,e[6]=(x*L-T*z-M*U)*W,e[7]=(v*z-g*L+y*U)*W,e[8]=(d*Q-h*X+p*E)*W,e[9]=(s*X-i*Q-c*E)*W,e[10]=(T*O-D*L+M*w)*W,e[11]=(S*L-v*O-y*w)*W,e[12]=(h*F-d*G-m*E)*W,e[13]=(i*G-s*F+l*E)*W,e[14]=(D*U-T*V-x*w)*W,e[15]=(v*V-S*U+g*w)*W,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,v=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,S=h+h,g=c*p,y=c*v,T=c*S,D=d*v,x=d*S,M=h*S,w=m*p,U=m*v,L=m*S,V=s.x,O=s.y,z=s.z;return l[0]=(1-(D+M))*V,l[1]=(y+L)*V,l[2]=(T-U)*V,l[3]=0,l[4]=(y-L)*O,l[5]=(1-(g+M))*O,l[6]=(x+w)*O,l[7]=0,l[8]=(T+U)*z,l[9]=(x-w)*z,l[10]=(1-(g+D))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=xr.set(l[0],l[1],l[2]).length();const h=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Di.copy(this);const p=1/d,v=1/h,S=1/m;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=S,Di.elements[9]*=S,Di.elements[10]*=S,i.setFromRotationMatrix(Di),s.x=d,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,d,h=Xi,m=!1){const p=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),y=(s+l)/(s-l);let T,D;if(m)T=c/(d-c),D=d*c/(d-c);else if(h===Xi)T=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(h===Ko)T=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Xi,m=!1){const p=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),y=-(s+l)/(s-l);let T,D;if(m)T=1/(d-c),D=d/(d-c);else if(h===Xi)T=-2/(d-c),D=-(d+c)/(d-c);else if(h===Ko)T=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=T,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};$c.prototype.isMatrix4=!0;let rn=$c;const xr=new J,Di=new rn,Zy=new J(0,0,0),Ky=new J(1,1,1),Qa=new J,pc=new J,ci=new J,cv=new rn,uv=new Hr;class Fs{constructor(e=0,i=0,s=0,l=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],S=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return uv.setFromEuler(this),this.setFromQuaternion(uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class b_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qy=0;const fv=new J,Sr=new Hr,ha=new rn,mc=new J,zo=new J,Jy=new J,$y=new Hr,dv=new J(1,0,0),hv=new J(0,1,0),pv=new J(0,0,1),mv={type:"added"},eM={type:"removed"},yr={type:"childadded",child:null},Ad={type:"childremoved",child:null};class Gn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new J,i=new Fs,s=new Hr,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ot}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(dv,e)}rotateY(e){return this.rotateOnAxis(hv,e)}rotateZ(e){return this.rotateOnAxis(pv,e)}translateOnAxis(e,i){return fv.copy(e).applyQuaternion(this.quaternion),this.position.add(fv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(dv,e)}translateY(e){return this.translateOnAxis(hv,e)}translateZ(e){return this.translateOnAxis(pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?mc.copy(e):mc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(zo,mc,this.up):ha.lookAt(mc,zo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(ha),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mv),yr.child=e,this.dispatchEvent(yr),yr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eM),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mv),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,$y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),S=d(e.shapes),g=d(e.skeletons),y=d(e.animations),T=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new J(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gc extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const D of e.hand.values()){const x=i.getJointPose(D,s),M=this._getHandJoint(p,D);x!==null&&(M.matrix.fromArray(x.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=x.radius),M.visible=x!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=v.position.distanceTo(S.position),y=.02,T=.005;p.inputState.pinching&&g>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new gc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const E_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},vc={h:0,s:0,l:0};function wd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Tt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=bt.workingColorSpace){if(e=Vy(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=wd(d,c,e+1/3),this.g=wd(d,c,e),this.b=wd(d,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:nt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const s=E_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return bt.workingToColorSpace(Pn.copy(this),e),Math.round(Et(Pn.r*255,0,255))*65536+Math.round(Et(Pn.g*255,0,255))*256+Math.round(Et(Pn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=v<=.5?S/(d+h):S/(2-d-h),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Ei){bt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(vc);const s=yd(Ja.h,vc.h,i),l=yd(Ja.s,vc.s,i),c=yd(Ja.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Tt;Tt.NAMES=E_;class nM extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new J,pa=new J,Rd=new J,ma=new J,Mr=new J,br=new J,gv=new J,Dd=new J,Nd=new J,Ud=new J,Ld=new sn,Od=new sn,Pd=new sn;class Li{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ni.subVectors(l,i),pa.subVectors(s,i),Rd.subVectors(e,i);const d=Ni.dot(Ni),h=Ni.dot(pa),m=Ni.dot(Rd),p=pa.dot(pa),v=pa.dot(Rd),S=d*p-h*h;if(S===0)return c.set(0,0,0),null;const g=1/S,y=(p*m-h*v)*g,T=(d*v-h*m)*g;return c.set(1-y-T,T,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(d,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Ld.setScalar(0),Od.setScalar(0),Pd.setScalar(0),Ld.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,s),Pd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Od,c.y),d.addScaledVector(Pd,c.z),d}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),pa.subVectors(e,i),Ni.cross(pa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ni.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Mr.subVectors(l,s),br.subVectors(c,s),Dd.subVectors(e,s);const m=Mr.dot(Dd),p=br.dot(Dd);if(m<=0&&p<=0)return i.copy(s);Nd.subVectors(e,l);const v=Mr.dot(Nd),S=br.dot(Nd);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*p;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Mr,d);Ud.subVectors(e,c);const y=Mr.dot(Ud),T=br.dot(Ud);if(T>=0&&y<=T)return i.copy(c);const D=y*p-m*T;if(D<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(br,h);const x=v*T-y*S;if(x<=0&&S-v>=0&&y-T>=0)return gv.subVectors(c,l),h=(S-v)/(S-v+(y-T)),i.copy(l).addScaledVector(gv,h);const M=1/(x+D+g);return d=D*M,h=g*M,i.copy(s).addScaledVector(Mr,d).addScaledVector(br,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jo{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),xc.subVectors(this.max,Bo),Er.subVectors(e.a,Bo),Tr.subVectors(e.b,Bo),Ar.subVectors(e.c,Bo),$a.subVectors(Tr,Er),es.subVectors(Ar,Tr),Ts.subVectors(Er,Ar);let i=[0,-$a.z,$a.y,0,-es.z,es.y,0,-Ts.z,Ts.y,$a.z,0,-$a.x,es.z,0,-es.x,Ts.z,0,-Ts.x,-$a.y,$a.x,0,-es.y,es.x,0,-Ts.y,Ts.x,0];return!Id(i,Er,Tr,Ar,xc)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,Er,Tr,Ar,xc))?!1:(Sc.crossVectors($a,es),i=[Sc.x,Sc.y,Sc.z],Id(i,Er,Tr,Ar,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new J,new J,new J,new J,new J,new J,new J,new J],Ui=new J,_c=new Jo,Er=new J,Tr=new J,Ar=new J,$a=new J,es=new J,Ts=new J,Bo=new J,xc=new J,Sc=new J,As=new J;function Id(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){As.fromArray(r,c);const h=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=e.dot(As),p=i.dot(As),v=s.dot(As);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const gn=new J,yc=new rt;let iM=0;class Pi extends zs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=nv,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends Pi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class A_ extends Pi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Dn extends Pi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const aM=new Jo,Ho=new J,Fd=new J;class tu{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):aM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Fd)),this.expandByPoint(Ho.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sM=0;const bi=new rn,zd=new Gn,Cr=new J,ui=new Jo,Go=new Jo,Mn=new J;class Jn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zy(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ot().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Dn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ui.min,Go.min),ui.expandByPoint(Mn),Mn.addVectors(ui.max,Go.max),ui.expandByPoint(Mn)):(ui.expandByPoint(Go.min),ui.expandByPoint(Go.max))}ui.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)Mn.fromBufferAttribute(h,p),m&&(Cr.fromBufferAttribute(e,p),Mn.add(Cr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let E=0;E<s.count;E++)h[E]=new J,m[E]=new J;const p=new J,v=new J,S=new J,g=new rt,y=new rt,T=new rt,D=new J,x=new J;function M(E,F,X){p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,F),S.fromBufferAttribute(s,X),g.fromBufferAttribute(c,E),y.fromBufferAttribute(c,F),T.fromBufferAttribute(c,X),v.sub(p),S.sub(p),y.sub(g),T.sub(g);const G=1/(y.x*T.y-T.x*y.y);isFinite(G)&&(D.copy(v).multiplyScalar(T.y).addScaledVector(S,-y.y).multiplyScalar(G),x.copy(S).multiplyScalar(y.x).addScaledVector(v,-T.x).multiplyScalar(G),h[E].add(D),h[F].add(D),h[X].add(D),m[E].add(x),m[F].add(x),m[X].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,F=w.length;E<F;++E){const X=w[E],G=X.start,Q=X.count;for(let ue=G,he=G+Q;ue<he;ue+=3)M(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const U=new J,L=new J,V=new J,O=new J;function z(E){V.fromBufferAttribute(l,E),O.copy(V);const F=h[E];U.copy(F),U.sub(V.multiplyScalar(V.dot(F))).normalize(),L.crossVectors(O,F);const G=L.dot(m[E])<0?-1:1;d.setXYZW(E,U.x,U.y,U.z,G)}for(let E=0,F=w.length;E<F;++E){const X=w[E],G=X.start,Q=X.count;for(let ue=G,he=G+Q;ue<he;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new J,c=new J,d=new J,h=new J,m=new J,p=new J,v=new J,S=new J;if(e)for(let g=0,y=e.count;g<y;g+=3){const T=e.getX(g+0),D=e.getX(g+1),x=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,x),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,D),p.fromBufferAttribute(s,x),h.add(v),m.add(v),p.add(v),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,S=h.normalized,g=new p.constructor(m.length*v);let y=0,T=0;for(let D=0,x=m.length;D<x;D++){h.isInterleavedBufferAttribute?y=m[D]*h.data.stride+h.offset:y=m[D]*v;for(let M=0;M<v;M++)g[T++]=p[y++]}return new Pi(g,v,S)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Jn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,S=p.length;v<S;v++){const g=p[v],y=e(g,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,g=p.length;S<g;S++){const y=p[S];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],S=c[p];for(let g=0,y=S.length;g<y;g++)v.push(S[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rM=0;class $o extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Qo(),this.name="",this.type="Material",this.blending=Lr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=$d,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){nt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){nt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==ss&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jd&&(s.blendSrc=this.blendSrc),this.blendDst!==$d&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const va=new J,Bd=new J,Mc=new J,ts=new J,Hd=new J,bc=new J,Gd=new J;class C_{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Bd.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),ts.copy(this.origin).sub(Bd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Mc),h=ts.dot(this.direction),m=-ts.dot(Mc),p=ts.lengthSq(),v=Math.abs(1-d*d);let S,g,y,T;if(v>0)if(S=d*m-h,g=d*h-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const D=1/v;S*=D,g*=D,y=S*(S+d*g+2*h)+g*(d*S+g+2*m)+p}else g=c,S=Math.max(0,-(d*g+h)),y=-S*S+g*(g+2*m)+p;else g=-c,S=Math.max(0,-(d*g+h)),y=-S*S+g*(g+2*m)+p;else g<=-T?(S=Math.max(0,-(-d*c+h)),g=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+g*(g+2*m)+p):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(S=Math.max(0,-(d*c+h)),g=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+g*(g+2*m)+p);else g=d>0?-c:c,S=Math.max(0,-(d*g+h)),y=-S*S+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Bd).addScaledVector(Mc,g),y}intersectSphere(e,i){va.subVectors(e.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(h=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,s,l,c){Hd.subVectors(i,e),bc.subVectors(s,e),Gd.crossVectors(Hd,bc);let d=this.direction.dot(Gd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ts.subVectors(this.origin,e);const m=h*this.direction.dot(bc.crossVectors(ts,bc));if(m<0)return null;const p=h*this.direction.dot(Hd.cross(ts));if(p<0||m+p>d)return null;const v=-h*ts.dot(Gd);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Os extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vv=new rn,Cs=new C_,Ec=new tu,_v=new J,Tc=new J,Ac=new J,Cc=new J,Vd=new J,wc=new J,xv=new J,Rc=new J;class Zn extends Gn{constructor(e=new Jn,i=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],S=c[m];v!==0&&(Vd.fromBufferAttribute(S,e),d?wc.addScaledVector(Vd,v):wc.addScaledVector(Vd.sub(i),v))}i.add(wc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(c),Cs.copy(e.ray).recast(e.near),!(Ec.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Ec,_v)===null||Cs.origin.distanceToSquared(_v)>(e.far-e.near)**2))&&(vv.copy(c).invert(),Cs.copy(e.ray).applyMatrix4(vv),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Cs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const x=g[T],M=d[x.materialIndex],w=Math.max(x.start,y.start),U=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let L=w,V=U;L<V;L+=3){const O=h.getX(L),z=h.getX(L+1),E=h.getX(L+2);l=Dc(this,M,e,s,p,v,S,O,z,E),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),D=Math.min(h.count,y.start+y.count);for(let x=T,M=D;x<M;x+=3){const w=h.getX(x),U=h.getX(x+1),L=h.getX(x+2);l=Dc(this,d,e,s,p,v,S,w,U,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,D=g.length;T<D;T++){const x=g[T],M=d[x.materialIndex],w=Math.max(x.start,y.start),U=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let L=w,V=U;L<V;L+=3){const O=L,z=L+1,E=L+2;l=Dc(this,M,e,s,p,v,S,O,z,E),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let x=T,M=D;x<M;x+=3){const w=x,U=x+1,L=x+2;l=Dc(this,d,e,s,p,v,S,w,U,L),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function oM(r,e,i,s,l,c,d,h){let m;if(e.side===Kn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===ss,h),m===null)return null;Rc.copy(h),Rc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Rc);return p<i.near||p>i.far?null:{distance:p,point:Rc.clone(),object:r}}function Dc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Tc),r.getVertexPosition(m,Ac),r.getVertexPosition(p,Cc);const v=oM(r,e,i,s,Tc,Ac,Cc,xv);if(v){const S=new J;Li.getBarycoord(xv,Tc,Ac,Cc,S),l&&(v.uv=Li.getInterpolatedAttribute(l,h,m,p,S,new rt)),c&&(v.uv1=Li.getInterpolatedAttribute(c,h,m,p,S,new rt)),d&&(v.normal=Li.getInterpolatedAttribute(d,h,m,p,S,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new J,materialIndex:0};Li.getNormal(Tc,Ac,Cc,g.normal),v.face=g,v.barycoord=S}return v}class lM extends Hn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=Rn,v=Rn,S,g){super(null,d,h,m,p,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kd=new J,cM=new J,uM=new ot;class Rs{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=kd.subVectors(s,i).cross(cM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(kd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||uM.getNormalMatrix(e),l=this.coplanarPoint(kd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new tu,fM=new rt(.5,.5),Nc=new J;class tp{constructor(e=new Rs,i=new Rs,s=new Rs,l=new Rs,c=new Rs,d=new Rs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Xi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],S=c[5],g=c[6],y=c[7],T=c[8],D=c[9],x=c[10],M=c[11],w=c[12],U=c[13],L=c[14],V=c[15];if(l[0].setComponents(p-d,y-v,M-T,V-w).normalize(),l[1].setComponents(p+d,y+v,M+T,V+w).normalize(),l[2].setComponents(p+h,y+S,M+D,V+U).normalize(),l[3].setComponents(p-h,y-S,M-D,V-U).normalize(),s)l[4].setComponents(m,g,x,L).normalize(),l[5].setComponents(p-m,y-g,M-x,V-L).normalize();else if(l[4].setComponents(p-m,y-g,M-x,V-L).normalize(),i===Xi)l[5].setComponents(p+m,y+g,M+x,V+L).normalize();else if(i===Ko)l[5].setComponents(m,g,x,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const i=fM.distanceTo(e.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class w_ extends $o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sv=new rn,Gh=new C_,Uc=new tu,Lc=new J;class dM extends Gn{constructor(e=new Jn,i=new w_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,e.ray.intersectsSphere(Uc)===!1)return;Sv.copy(l).invert(),Gh.copy(e.ray).applyMatrix4(Sv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,S=s.attributes.position;if(p!==null){const g=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let T=g,D=y;T<D;T++){const x=p.getX(T);Lc.fromBufferAttribute(S,x),yv(Lc,x,m,l,e,i,this)}}else{const g=Math.max(0,d.start),y=Math.min(S.count,d.start+d.count);for(let T=g,D=y;T<D;T++)Lc.fromBufferAttribute(S,T),yv(Lc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function yv(r,e,i,s,l,c,d){const h=Gh.distanceSqToPoint(r);if(h<i){const m=new J;Gh.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class R_ extends Hn{constructor(e=[],i=Ps,s,l,c,d,h,m,p,v){super(e,i,s,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fr extends Hn{constructor(e,i,s=Yi,l,c,d,h=Rn,m=Rn,p,v=ya,S=1){if(v!==ya&&v!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,d,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hM extends Fr{constructor(e,i=Yi,s=Ps,l,c,d=Rn,h=Rn,m,p=ya){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,d,h,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class D_ extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends Jn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],S=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(S,2));function T(D,x,M,w,U,L,V,O,z,E,F){const X=L/z,G=V/E,Q=L/2,ue=V/2,he=O/2,W=z+1,P=E+1;let B=0,re=0;const me=new J;for(let ve=0;ve<P;ve++){const I=ve*G-ue;for(let K=0;K<W;K++){const Se=K*X-Q;me[D]=Se*w,me[x]=I*U,me[M]=he,p.push(me.x,me.y,me.z),me[D]=0,me[x]=0,me[M]=O>0?1:-1,v.push(me.x,me.y,me.z),S.push(K/z),S.push(1-ve/E),B+=1}}for(let ve=0;ve<E;ve++)for(let I=0;I<z;I++){const K=g+I+W*ve,Se=g+I+W*(ve+1),Te=g+(I+1)+W*(ve+1),De=g+(I+1)+W*ve;m.push(K,Se,De),m.push(Se,Te,De),re+=6}h.addGroup(y,re,F),y+=re,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class np extends Jn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],d=[];h(l),p(s),v(),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(c.slice(),3)),this.setAttribute("uv",new Dn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(w){const U=new J,L=new J,V=new J;for(let O=0;O<i.length;O+=3)y(i[O+0],U),y(i[O+1],L),y(i[O+2],V),m(U,L,V,w)}function m(w,U,L,V){const O=V+1,z=[];for(let E=0;E<=O;E++){z[E]=[];const F=w.clone().lerp(L,E/O),X=U.clone().lerp(L,E/O),G=O-E;for(let Q=0;Q<=G;Q++)Q===0&&E===O?z[E][Q]=F:z[E][Q]=F.clone().lerp(X,Q/G)}for(let E=0;E<O;E++)for(let F=0;F<2*(O-E)-1;F++){const X=Math.floor(F/2);F%2===0?(g(z[E][X+1]),g(z[E+1][X]),g(z[E][X])):(g(z[E][X+1]),g(z[E+1][X+1]),g(z[E+1][X]))}}function p(w){const U=new J;for(let L=0;L<c.length;L+=3)U.x=c[L+0],U.y=c[L+1],U.z=c[L+2],U.normalize().multiplyScalar(w),c[L+0]=U.x,c[L+1]=U.y,c[L+2]=U.z}function v(){const w=new J;for(let U=0;U<c.length;U+=3){w.x=c[U+0],w.y=c[U+1],w.z=c[U+2];const L=x(w)/2/Math.PI+.5,V=M(w)/Math.PI+.5;d.push(L,1-V)}T(),S()}function S(){for(let w=0;w<d.length;w+=6){const U=d[w+0],L=d[w+2],V=d[w+4],O=Math.max(U,L,V),z=Math.min(U,L,V);O>.9&&z<.1&&(U<.2&&(d[w+0]+=1),L<.2&&(d[w+2]+=1),V<.2&&(d[w+4]+=1))}}function g(w){c.push(w.x,w.y,w.z)}function y(w,U){const L=w*3;U.x=e[L+0],U.y=e[L+1],U.z=e[L+2]}function T(){const w=new J,U=new J,L=new J,V=new J,O=new rt,z=new rt,E=new rt;for(let F=0,X=0;F<c.length;F+=9,X+=6){w.set(c[F+0],c[F+1],c[F+2]),U.set(c[F+3],c[F+4],c[F+5]),L.set(c[F+6],c[F+7],c[F+8]),O.set(d[X+0],d[X+1]),z.set(d[X+2],d[X+3]),E.set(d[X+4],d[X+5]),V.copy(w).add(U).add(L).divideScalar(3);const G=x(V);D(O,X+0,w,G),D(z,X+2,U,G),D(E,X+4,L,G)}}function D(w,U,L,V){V<0&&w.x===1&&(d[U]=w.x-1),L.x===0&&L.z===0&&(d[U]=V/2/Math.PI+.5)}function x(w){return Math.atan2(w.z,-w.x)}function M(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new np(e.vertices,e.indices,e.radius,e.detail)}}class Kc extends np{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Kc(e.radius,e.detail)}}class nu extends Jn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,S=e/h,g=i/m,y=[],T=[],D=[],x=[];for(let M=0;M<v;M++){const w=M*g-d;for(let U=0;U<p;U++){const L=U*S-c;T.push(L,-w,0),D.push(0,0,1),x.push(U/h),x.push(1-M/m)}}for(let M=0;M<m;M++)for(let w=0;w<h;w++){const U=w+p*M,L=w+p*(M+1),V=w+1+p*(M+1),O=w+1+p*M;y.push(U,L,O),y.push(L,V,O)}this.setIndex(y),this.setAttribute("position",new Dn(T,3)),this.setAttribute("normal",new Dn(D,3)),this.setAttribute("uv",new Dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qc extends Jn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,d=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:d,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],S=[],g=new J,y=new J,T=new J;for(let D=0;D<=s;D++){const x=d+D/s*h;for(let M=0;M<=l;M++){const w=M/l*c;y.x=(e+i*Math.cos(x))*Math.cos(w),y.y=(e+i*Math.cos(x))*Math.sin(w),y.z=i*Math.sin(x),p.push(y.x,y.y,y.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),T.subVectors(y,g).normalize(),v.push(T.x,T.y,T.z),S.push(M/l),S.push(D/s)}}for(let D=1;D<=s;D++)for(let x=1;x<=l;x++){const M=(l+1)*D+x-1,w=(l+1)*(D-1)+x-1,U=(l+1)*(D-1)+x,L=(l+1)*D+x;m.push(M,w,L),m.push(w,U,L)}this.setIndex(m),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Mv(l))l.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Mv(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(r){const e={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)e[l]=s[l]}return e}function Mv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function pM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function N_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Jc={clone:zr,merge:Bn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class vM extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _M extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xM extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class U_ extends Gn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jd=new rn,bv=new J,Ev=new J;class SM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;bv.setFromMatrixPosition(e.matrixWorld),i.position.copy(bv),Ev.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ev),i.updateMatrixWorld(),jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Ko||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Oc=new J,Pc=new Hr,Gi=new J;class L_ extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Pc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Oc,Pc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new J,Tv=new rt,Av=new rt;class fi extends L_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,Tv,Av),i.subVectors(Av,Tv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Sd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class yM extends SM{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class Cv extends U_{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ip extends L_{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MM extends U_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const wr=-90,Rr=1;class bM extends Gn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(wr,Rr,e,i);l.layers=this.layers,this.add(l);const c=new fi(wr,Rr,e,i);c.layers=this.layers,this.add(c);const d=new fi(wr,Rr,e,i);d.layers=this.layers,this.add(d);const h=new fi(wr,Rr,e,i);h.layers=this.layers,this.add(h);const m=new fi(wr,Rr,e,i);m.layers=this.layers,this.add(m);const p=new fi(wr,Rr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ko)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class EM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class TM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=AM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function AM(){this._document.hidden===!1&&this.reset()}class CM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const lp=class lp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};lp.prototype.isMatrix2=!0;let wv=lp;function Rv(r,e,i,s){const l=wM(s);switch(i){case __:return r*e;case S_:return r*e/l.components*l.byteLength;case Zh:return r*e/l.components*l.byteLength;case Is:return r*e*2/l.components*l.byteLength;case Kh:return r*e*2/l.components*l.byteLength;case x_:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case Qh:return r*e*4/l.components*l.byteLength;case Bc:case Hc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uh:case dh:return Math.max(r,16)*Math.max(e,8)/4;case ch:case fh:return Math.max(r,8)*Math.max(e,8)/2;case hh:case ph:case gh:case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mh:case Xc:case _h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Oh:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ih:case Fh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Wc:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wM(r){switch(r){case di:case p_:return{byteLength:1,components:1};case Yo:case m_:case hi:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Yi:case Wh:case ji:return{byteLength:4,components:1};case g_:case v_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O_(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function RM(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,S=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function s(h,m,p){const v=m.array,S=m.updateRanges;if(r.bindBuffer(p,h),S.length===0)r.bufferSubData(p,0,v);else{S.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<S.length;y++){const T=S[g],D=S[y];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,S[g]=D)}S.length=g+1;for(let y=0,T=S.length;y<T;y++){const D=S[y];r.bufferSubData(p,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,jM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,eb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hb=`#if defined( USE_POINTS_UV )
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
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$b=`#ifdef USE_NORMALMAP
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
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,mE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,XE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,YE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ZE=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$E=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,e1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,t1=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,i1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,a1=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,s1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,o1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,l1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,c1=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,dt={alphahash_fragment:DM,alphahash_pars_fragment:NM,alphamap_fragment:UM,alphamap_pars_fragment:LM,alphatest_fragment:OM,alphatest_pars_fragment:PM,aomap_fragment:IM,aomap_pars_fragment:FM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:kM,bumpmap_pars_fragment:jM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:eb,defaultnormal_vertex:tb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:ab,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ob,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:hb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:vb,lightmap_pars_fragment:_b,lights_lambert_fragment:xb,lights_lambert_pars_fragment:Sb,lights_pars_begin:yb,lights_toon_fragment:bb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Tb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Cb,lights_physical_pars_fragment:wb,lights_fragment_begin:Rb,lights_fragment_maps:Db,lights_fragment_end:Nb,lightprobes_pars_fragment:Ub,logdepthbuf_fragment:Lb,logdepthbuf_pars_fragment:Ob,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Ib,map_fragment:Fb,map_pars_fragment:zb,map_particle_fragment:Bb,map_particle_pars_fragment:Hb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Vb,morphinstance_vertex:kb,morphcolor_vertex:jb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Wb,morphtarget_vertex:qb,normal_fragment_begin:Yb,normal_fragment_maps:Zb,normal_pars_fragment:Kb,normal_pars_vertex:Qb,normal_vertex:Jb,normalmap_pars_fragment:$b,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:aE,packing:sE,premultiplied_alpha_fragment:rE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:hE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:xE,specularmap_fragment:SE,specularmap_pars_fragment:yE,tonemapping_fragment:ME,tonemapping_pars_fragment:bE,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:AE,uv_pars_vertex:CE,uv_vertex:wE,worldpos_vertex:RE,background_vert:DE,background_frag:NE,backgroundCube_vert:UE,backgroundCube_frag:LE,cube_vert:OE,cube_frag:PE,depth_vert:IE,depth_frag:FE,distance_vert:zE,distance_frag:BE,equirect_vert:HE,equirect_frag:GE,linedashed_vert:VE,linedashed_frag:kE,meshbasic_vert:jE,meshbasic_frag:XE,meshlambert_vert:WE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:ZE,meshnormal_vert:KE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:$E,meshphysical_vert:e1,meshphysical_frag:t1,meshtoon_vert:n1,meshtoon_frag:i1,points_vert:a1,points_frag:s1,shadow_vert:r1,shadow_frag:o1,sprite_vert:l1,sprite_frag:c1},Be={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Bn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Bn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Bn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Bn([Be.common,Be.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Bn([Be.lights,Be.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ic={r:0,b:0,g:0},u1=new rn,P_=new ot;P_.set(-1,0,0,0,1,0,0,0,1);function f1(r,e,i,s,l,c){const d=new Tt(0);let h=l===!0?0:1,m,p,v=null,S=0,g=null;function y(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const L=w.backgroundBlurriness>0;U=e.get(U,L)}return U}function T(w){let U=!1;const L=y(w);L===null?x(d,h):L&&L.isColor&&(x(L,1),U=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(w,U){const L=y(U);L&&(L.isCubeTexture||L.mapping===eu)?(p===void 0&&(p=new Zn(new el(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:zr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(u1.makeRotationFromEuler(U.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(P_),p.material.toneMapped=bt.getTransfer(L.colorSpace)!==Bt,(v!==L||S!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,S=L.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Zn(new nu(2,2),new Fn({name:"BackgroundMaterial",uniforms:zr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=bt.getTransfer(L.colorSpace)!==Bt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||S!==L.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=L,S=L.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function x(w,U){w.getRGB(Ic,N_(r)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,U,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,U=1){d.set(w),h=U,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,x(d,h)},render:T,addToRenderList:D,dispose:M}}function d1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(G,Q,ue,he,W){let P=!1;const B=S(G,he,ue,Q);c!==B&&(c=B,p(c.object)),P=y(G,he,ue,W),P&&T(G,he,ue,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,L(G,Q,ue,he),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function v(G){return r.deleteVertexArray(G)}function S(G,Q,ue,he){const W=he.wireframe===!0;let P=s[Q.id];P===void 0&&(P={},s[Q.id]=P);const B=G.isInstancedMesh===!0?G.id:0;let re=P[B];re===void 0&&(re={},P[B]=re);let me=re[ue.id];me===void 0&&(me={},re[ue.id]=me);let ve=me[W];return ve===void 0&&(ve=g(m()),me[W]=ve),ve}function g(G){const Q=[],ue=[],he=[];for(let W=0;W<i;W++)Q[W]=0,ue[W]=0,he[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ue,attributeDivisors:he,object:G,attributes:{},index:null}}function y(G,Q,ue,he){const W=c.attributes,P=Q.attributes;let B=0;const re=ue.getAttributes();for(const me in re)if(re[me].location>=0){const I=W[me];let K=P[me];if(K===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;B++}return c.attributesNum!==B||c.index!==he}function T(G,Q,ue,he){const W={},P=Q.attributes;let B=0;const re=ue.getAttributes();for(const me in re)if(re[me].location>=0){let I=P[me];I===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),W[me]=K,B++}c.attributes=W,c.attributesNum=B,c.index=he}function D(){const G=c.newAttributes;for(let Q=0,ue=G.length;Q<ue;Q++)G[Q]=0}function x(G){M(G,0)}function M(G,Q){const ue=c.newAttributes,he=c.enabledAttributes,W=c.attributeDivisors;ue[G]=1,he[G]===0&&(r.enableVertexAttribArray(G),he[G]=1),W[G]!==Q&&(r.vertexAttribDivisor(G,Q),W[G]=Q)}function w(){const G=c.newAttributes,Q=c.enabledAttributes;for(let ue=0,he=Q.length;ue<he;ue++)Q[ue]!==G[ue]&&(r.disableVertexAttribArray(ue),Q[ue]=0)}function U(G,Q,ue,he,W,P,B){B===!0?r.vertexAttribIPointer(G,Q,ue,W,P):r.vertexAttribPointer(G,Q,ue,he,W,P)}function L(G,Q,ue,he){D();const W=he.attributes,P=ue.getAttributes(),B=Q.defaultAttributeValues;for(const re in P){const me=P[re];if(me.location>=0){let ve=W[re];if(ve===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(ve=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(ve=G.instanceColor)),ve!==void 0){const I=ve.normalized,K=ve.itemSize,Se=e.get(ve);if(Se===void 0)continue;const Te=Se.buffer,De=Se.type,oe=Se.bytesPerElement,ye=De===r.INT||De===r.UNSIGNED_INT||ve.gpuType===Wh;if(ve.isInterleavedBufferAttribute){const Ee=ve.data,He=Ee.stride,et=ve.offset;if(Ee.isInstancedInterleavedBuffer){for(let Je=0;Je<me.locationSize;Je++)M(me.location+Je,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Je=0;Je<me.locationSize;Je++)x(me.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Je=0;Je<me.locationSize;Je++)U(me.location+Je,K/me.locationSize,De,I,He*oe,(et+K/me.locationSize*Je)*oe,ye)}else{if(ve.isInstancedBufferAttribute){for(let Ee=0;Ee<me.locationSize;Ee++)M(me.location+Ee,ve.meshPerAttribute);G.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ee=0;Ee<me.locationSize;Ee++)x(me.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Ee=0;Ee<me.locationSize;Ee++)U(me.location+Ee,K/me.locationSize,De,I,K*oe,K/me.locationSize*Ee*oe,ye)}}else if(B!==void 0){const I=B[re];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(me.location,I);break;case 3:r.vertexAttrib3fv(me.location,I);break;case 4:r.vertexAttrib4fv(me.location,I);break;default:r.vertexAttrib1fv(me.location,I)}}}}w()}function V(){F();for(const G in s){const Q=s[G];for(const ue in Q){const he=Q[ue];for(const W in he){const P=he[W];for(const B in P)v(P[B].object),delete P[B];delete he[W]}}delete s[G]}}function O(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const ue in Q){const he=Q[ue];for(const W in he){const P=he[W];for(const B in P)v(P[B].object),delete P[B];delete he[W]}}delete s[G.id]}function z(G){for(const Q in s){const ue=s[Q];for(const he in ue){const W=ue[he];if(W[G.id]===void 0)continue;const P=W[G.id];for(const B in P)v(P[B].object),delete P[B];delete W[G.id]}}}function E(G){for(const Q in s){const ue=s[Q],he=G.isInstancedMesh===!0?G.id:0,W=ue[he];if(W!==void 0){for(const P in W){const B=W[P];for(const re in B)v(B[re].object),delete B[re];delete W[P]}delete ue[he],Object.keys(ue).length===0&&delete s[Q]}}}function F(){X(),d=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:X,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:D,enableAttribute:x,disableUnusedAttributes:w}}function h1(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let y=0;y<v;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function p1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Oi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const E=z===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==di&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ji&&!E)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(nt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),M=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:L,maxSamples:V,samples:O}}function m1(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Rs,h=new ot,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||s!==0||l;return l=g,s=S.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,y){const T=S.clippingPlanes,D=S.clipIntersection,x=S.clipShadows,M=r.get(S);if(!l||T===null||T.length===0||c&&!x)c?v(null):p();else{const w=c?0:s,U=w*4;let L=M.clippingState||null;m.value=L,L=v(T,g,U,y);for(let V=0;V!==U;++V)L[V]=i[V];M.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,y,T){const D=S!==null?S.length:0;let x=null;if(D!==0){if(x=m.value,T!==!0||x===null){const M=y+D*4,w=g.matrixWorldInverse;h.getNormalMatrix(w),(x===null||x.length<M)&&(x=new Float32Array(M));for(let U=0,L=y;U!==D;++U,L+=4)d.copy(S[U]).applyMatrix4(w,h),d.normal.toArray(x,L),x[L+3]=d.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,x}}const as=4,Dv=[.125,.215,.35,.446,.526,.582],Ns=20,g1=256,Vo=new ip,Nv=new Tt;let Xd=null,Wd=0,qd=0,Yd=!1;const v1=new J;class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=v1}=c;Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Wd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ps||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:hi,format:Oi,colorSpace:qc,depthBuffer:!1},l=Lv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_1(c)),this._blurMaterial=S1(c,e,i),this._ggxMaterial=x1(c,e,i)}return l}_compileMaterial(e){const i=new Zn(new Jn,e);this._renderer.compile(i,Vo)}_sceneToCubeUV(e,i,s,l,c){const m=new fi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(Nv),S.toneMapping=qi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new el,new Os({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,x=D.material;let M=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,M=!0):(x.color.copy(Nv),M=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const V=this._cubeSize;Dr(l,L*V,U>2?V:0,V,V),S.setRenderTarget(l),M&&S.render(D,m),S.render(e,m)}S.toneMapping=y,S.autoClear=g,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ps||e.mapping===Ir;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ov());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Vo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),g=0+p*1.25,y=S*g,{_lodMax:T}=this,D=this._sizeLods[s],x=3*D*(s>T-as?s-T+as:0),M=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,Dr(c,x,M,3*D,2*D),l.setRenderTarget(c),l.render(h,Vo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Dr(e,x,M,3*D,2*D),l.setRenderTarget(e),l.render(h,Vo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),D=c/T,x=isFinite(c)?1+Math.floor(v*D):Ns;x>Ns&&nt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ns}`);const M=[];let w=0;for(let z=0;z<Ns;++z){const E=z/D,F=Math.exp(-E*E/2);M.push(F),z===0?w+=F:z<x&&(w+=2*F)}for(let z=0;z<M.length;z++)M[z]=M[z]/w;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=M,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:U}=this;g.dTheta.value=T,g.mipInt.value=U-s;const L=this._sizeLods[l],V=3*L*(l>U-as?l-U+as:0),O=4*(this._cubeSize-L);Dr(i,V,O,3*L,2*L),m.setRenderTarget(i),m.render(S,Vo)}}function _1(r){const e=[],i=[],s=[];let l=r;const c=r-as+1+Dv.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-as?m=Dv[d-r+as-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,S=1+p,g=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,T=6,D=3,x=2,M=1,w=new Float32Array(D*T*y),U=new Float32Array(x*T*y),L=new Float32Array(M*T*y);for(let O=0;O<y;O++){const z=O%3*2/3-1,E=O>2?0:-1,F=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];w.set(F,D*T*O),U.set(g,x*T*O);const X=[O,O,O,O,O,O];L.set(X,M*T*O)}const V=new Jn;V.setAttribute("position",new Pi(w,D)),V.setAttribute("uv",new Pi(U,x)),V.setAttribute("faceIndex",new Pi(L,M)),s.push(new Zn(V,null)),l>as&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Lv(r,e,i){const s=new Qn(r,e,i);return s.texture.mapping=eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function x1(r,e,i){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function S1(r,e,i){const s=new Float32Array(Ns),l=new J(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ov(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Pv(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}class I_ extends Qn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new R_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new el(5,5,5),c=new Fn({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Wi});c.uniforms.tEquirect.value=i;const d=new Zn(l,c),h=i.minFilter;return i.minFilter===Us&&(i.minFilter=In),new bM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function y1(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===vd||y===_d)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new I_(T.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",p),h(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,T=y===vd||y===_d,D=y===Ps||y===Ir;if(T||D){let x=i.get(g);const M=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return s===null&&(s=new Uv(r)),x=T?s.fromEquirectangular(g,x):s.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const w=g.image;return T&&w&&w.height>0||D&&w&&m(w)?(s===null&&(s=new Uv(r)),x=T?s.fromEquirectangular(g):s.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function h(g,y){return y===vd?g.mapping=Ps:y===_d&&(g.mapping=Ir),g}function m(g){let y=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&y++;return y===T}function p(g){const y=g.target;y.removeEventListener("dispose",p);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function M1(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Bh("WebGLRenderer: "+s+" extension not supported."),l}}}function b1(r,e,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const y=c.get(g);y&&(e.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const y in g)e.update(g[y],r.ARRAY_BUFFER)}function p(S){const g=[],y=S.index,T=S.attributes.position;let D=0;if(T===void 0)return;if(y!==null){const w=y.array;D=y.version;for(let U=0,L=w.length;U<L;U+=3){const V=w[U+0],O=w[U+1],z=w[U+2];g.push(V,O,O,z,z,V)}}else{const w=T.array;D=T.version;for(let U=0,L=w.length/3-1;U<L;U+=3){const V=U+0,O=U+1,z=U+2;g.push(V,O,O,z,z,V)}}const x=new(T.count>=65535?A_:T_)(g,1);x.version=D;const M=c.get(S);M&&e.remove(M),c.set(S,x)}function v(S){const g=c.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&p(S)}else p(S);return c.get(S)}return{get:h,update:m,getWireframeAttribute:v}}function E1(r,e,i){let s;function l(S){s=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,g){r.drawElements(s,g,c,S*d),i.update(g,s,1)}function p(S,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,S*d,y),i.update(g,s,y))}function v(S,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,y);let D=0;for(let x=0;x<y;x++)D+=g[x];i.update(D,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function T1(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function A1(r,e,i){const s=new WeakMap,l=new sn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==S){let X=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",X)};var y=X;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;T===!0&&(L=1),D===!0&&(L=2),x===!0&&(L=3);let V=h.attributes.position.count*L,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*O*4*S),E=new M_(z,V,O,S);E.type=ji,E.needsUpdate=!0;const F=L*4;for(let G=0;G<S;G++){const Q=M[G],ue=w[G],he=U[G],W=V*O*4*G;for(let P=0;P<Q.count;P++){const B=P*F;T===!0&&(l.fromBufferAttribute(Q,P),z[W+B+0]=l.x,z[W+B+1]=l.y,z[W+B+2]=l.z,z[W+B+3]=0),D===!0&&(l.fromBufferAttribute(ue,P),z[W+B+4]=l.x,z[W+B+5]=l.y,z[W+B+6]=l.z,z[W+B+7]=0),x===!0&&(l.fromBufferAttribute(he,P),z[W+B+8]=l.x,z[W+B+9]=l.y,z[W+B+10]=l.z,z[W+B+11]=he.itemSize===4?l.w:1)}}g={count:S,texture:E,size:new rt(V,O)},s.set(h,g),h.addEventListener("dispose",X)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const D=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function C1(r,e,i,s,l){let c=new WeakMap;function d(p){const v=l.render.frame,S=p.geometry,g=e.get(p,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:h}}const w1={[r_]:"LINEAR_TONE_MAPPING",[o_]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[c_]:"ACES_FILMIC_TONE_MAPPING",[f_]:"AGX_TONE_MAPPING",[d_]:"NEUTRAL_TONE_MAPPING",[u_]:"CUSTOM_TONE_MAPPING"};function R1(r,e,i,s,l){const c=new Qn(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Fr(e,i):void 0}),d=new Qn(e,i,{type:hi,depthBuffer:!1,stencilBuffer:!1}),h=new Jn;h.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const m=new vM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Zn(h,m),v=new ip(-1,1,1,-1,0,1);let S=null,g=null,y=!1,T,D=null,x=[],M=!1;this.setSize=function(w,U){c.setSize(w,U),d.setSize(w,U);for(let L=0;L<x.length;L++){const V=x[L];V.setSize&&V.setSize(w,U)}},this.setEffects=function(w){x=w,M=x.length>0&&x[0].isRenderPass===!0;const U=c.width,L=c.height;for(let V=0;V<x.length;V++){const O=x[V];O.setSize&&O.setSize(U,L)}},this.begin=function(w,U){if(y||w.toneMapping===qi&&x.length===0)return!1;if(D=U,U!==null){const L=U.width,V=U.height;(c.width!==L||c.height!==V)&&this.setSize(L,V)}return M===!1&&w.setRenderTarget(c),T=w.toneMapping,w.toneMapping=qi,!0},this.hasRenderPass=function(){return M},this.end=function(w,U){w.toneMapping=T,y=!0;let L=c,V=d;for(let O=0;O<x.length;O++){const z=x[O];if(z.enabled!==!1&&(z.render(w,V,L,U),z.needsSwap!==!1)){const E=L;L=V,V=E}}if(S!==w.outputColorSpace||g!==w.toneMapping){S=w.outputColorSpace,g=w.toneMapping,m.defines={},bt.getTransfer(S)===Bt&&(m.defines.SRGB_TRANSFER="");const O=w1[g];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(D),w.render(p,v),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const F_=new Hn,Vh=new Fr(1,1),z_=new M_,B_=new Yy,H_=new R_,Iv=[],Fv=[],zv=new Float32Array(16),Bv=new Float32Array(9),Hv=new Float32Array(4);function Gr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Iv[l];if(c===void 0&&(c=new Float32Array(l),Iv[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function xn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Sn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function au(r,e){let i=Fv[e];i===void 0&&(i=new Int32Array(e),Fv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function D1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function N1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2fv(this.addr,e),Sn(i,e)}}function U1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;r.uniform3fv(this.addr,e),Sn(i,e)}}function L1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4fv(this.addr,e),Sn(i,e)}}function O1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Hv.set(s),r.uniformMatrix2fv(this.addr,!1,Hv),Sn(i,s)}}function P1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Bv.set(s),r.uniformMatrix3fv(this.addr,!1,Bv),Sn(i,s)}}function I1(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;zv.set(s),r.uniformMatrix4fv(this.addr,!1,zv),Sn(i,s)}}function F1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function z1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2iv(this.addr,e),Sn(i,e)}}function B1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;r.uniform3iv(this.addr,e),Sn(i,e)}}function H1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4iv(this.addr,e),Sn(i,e)}}function G1(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function V1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;r.uniform2uiv(this.addr,e),Sn(i,e)}}function k1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;r.uniform3uiv(this.addr,e),Sn(i,e)}}function j1(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;r.uniform4uiv(this.addr,e),Sn(i,e)}}function X1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Vh.compareFunction=i.isReversedDepthBuffer()?$h:Jh,c=Vh):c=F_,i.setTexture2D(e||c,l)}function W1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||B_,l)}function q1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||H_,l)}function Y1(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||z_,l)}function Z1(r){switch(r){case 5126:return D1;case 35664:return N1;case 35665:return U1;case 35666:return L1;case 35674:return O1;case 35675:return P1;case 35676:return I1;case 5124:case 35670:return F1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return H1;case 5125:return G1;case 36294:return V1;case 36295:return k1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}function K1(r,e){r.uniform1fv(this.addr,e)}function Q1(r,e){const i=Gr(e,this.size,2);r.uniform2fv(this.addr,i)}function J1(r,e){const i=Gr(e,this.size,3);r.uniform3fv(this.addr,i)}function $1(r,e){const i=Gr(e,this.size,4);r.uniform4fv(this.addr,i)}function eT(r,e){const i=Gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function tT(r,e){const i=Gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function nT(r,e){const i=Gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function iT(r,e){r.uniform1iv(this.addr,e)}function aT(r,e){r.uniform2iv(this.addr,e)}function sT(r,e){r.uniform3iv(this.addr,e)}function rT(r,e){r.uniform4iv(this.addr,e)}function oT(r,e){r.uniform1uiv(this.addr,e)}function lT(r,e){r.uniform2uiv(this.addr,e)}function cT(r,e){r.uniform3uiv(this.addr,e)}function uT(r,e){r.uniform4uiv(this.addr,e)}function fT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Vh:d=F_;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function dT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||B_,c[d])}function hT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||H_,c[d])}function pT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||z_,c[d])}function mT(r){switch(r){case 5126:return K1;case 35664:return Q1;case 35665:return J1;case 35666:return $1;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return aT;case 35668:case 35672:return sT;case 35669:case 35673:return rT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Z1(i.type)}}class vT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mT(i.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Gv(r,e){r.seq.push(e),r.map[e.id]=e}function xT(r,e,i){const s=r.name,l=s.length;for(Zd.lastIndex=0;;){const c=Zd.exec(s),d=Zd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Gv(i,p===void 0?new gT(h,r,e):new vT(h,r,e));break}else{let S=i.map[h];S===void 0&&(S=new _T(h),Gv(i,S)),i=S}}}class kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);xT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Vv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const ST=37297;let yT=0;function MT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const kv=new ot;function bT(r){bt._getMatrix(kv,bt.workingColorSpace,r);const e=`mat3( ${kv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(r)){case Yc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function jv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+MT(r.getShaderSource(e),h)}else return c}function ET(r,e){const i=bT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TT={[r_]:"Linear",[o_]:"Reinhard",[l_]:"Cineon",[c_]:"ACESFilmic",[f_]:"AgX",[d_]:"Neutral",[u_]:"Custom"};function AT(r,e){const i=TT[e];return i===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new J;function CT(){bt.getLuminanceCoefficients(Fc);const r=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function RT(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function DT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function qo(r){return r!==""}function Xv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(r){return r.replace(NT,LT)}const UT=new Map;function LT(r,e){let i=dt[e];if(i===void 0){const s=UT.get(e);if(s!==void 0)i=dt[s],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kh(i)}const OT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(r){return r.replace(OT,PT)}function PT(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Yv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IT={[zc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function FT(r){return IT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zT={[Ps]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function BT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const HT={[Ir]:"ENVMAP_MODE_REFRACTION"};function GT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":HT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VT={[s_]:"ENVMAP_BLENDING_MULTIPLY",[Cy]:"ENVMAP_BLENDING_MIX",[wy]:"ENVMAP_BLENDING_ADD"};function kT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":VT[r.combine]||"ENVMAP_BLENDING_NONE"}function jT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function XT(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=FT(i),p=BT(i),v=GT(i),S=kT(i),g=jT(i),y=wT(i),T=RT(c),D=l.createProgram();let x,M,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),x.length>0&&(x+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(qo).join(`
`),M.length>0&&(M+=`
`)):(x=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),M=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?dt.tonemapping_pars_fragment:"",i.toneMapping!==qi?AT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,ET("linearToOutputTexel",i.outputColorSpace),CT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=kh(d),d=Xv(d,i),d=Wv(d,i),h=kh(h),h=Xv(h,i),h=Wv(h,i),d=qv(d),h=qv(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,M=["#define varying in",i.glslVersion===iv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===iv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const U=w+x+d,L=w+M+h,V=Vv(l,l.VERTEX_SHADER,U),O=Vv(l,l.FRAGMENT_SHADER,L);l.attachShader(D,V),l.attachShader(D,O),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function z(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(D)||"",ue=l.getShaderInfoLog(V)||"",he=l.getShaderInfoLog(O)||"",W=Q.trim(),P=ue.trim(),B=he.trim();let re=!0,me=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,V,O);else{const ve=jv(l,V,"vertex"),I=jv(l,O,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+W+`
`+ve+`
`+I)}else W!==""?nt("WebGLProgram: Program Info Log:",W):(P===""||B==="")&&(me=!1);me&&(G.diagnostics={runnable:re,programLog:W,vertexShader:{log:P,prefix:x},fragmentShader:{log:B,prefix:M}})}l.deleteShader(V),l.deleteShader(O),E=new kc(l,D),F=DT(l,D)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let F;this.getAttributes=function(){return F===void 0&&z(this),F};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(D,ST)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=O,this}let WT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new YT(e),i.set(e,s)),s}}class YT{constructor(e){this.id=WT++,this.code=e,this.usedTimes=0}}function ZT(r){return r===Is||r===Xc||r===Wc}function KT(r,e,i,s,l,c){const d=new b_,h=new qT,m=new Set,p=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function D(E,F,X,G,Q,ue){const he=G.fog,W=Q.geometry,P=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,B=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,re=e.get(E.envMap||P,B),me=re&&re.mapping===eu?re.image.height:null,ve=y[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&nt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,K=I!==void 0?I.length:0;let Se=0;W.morphAttributes.position!==void 0&&(Se=1),W.morphAttributes.normal!==void 0&&(Se=2),W.morphAttributes.color!==void 0&&(Se=3);let Te,De,oe,ye;if(ve){const tt=ki[ve];Te=tt.vertexShader,De=tt.fragmentShader}else Te=E.vertexShader,De=E.fragmentShader,h.update(E),oe=h.getVertexShaderID(E),ye=h.getFragmentShaderID(E);const Ee=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),et=Q.isInstancedMesh===!0,Je=Q.isBatchedMesh===!0,jt=!!E.map,ht=!!E.matcap,xt=!!re,Lt=!!E.aoMap,ut=!!E.lightMap,on=!!E.bumpMap,qt=!!E.normalMap,bn=!!E.displacementMap,q=!!E.emissiveMap,en=!!E.metalnessMap,pt=!!E.roughnessMap,Ht=E.anisotropy>0,Ce=E.clearcoat>0,Kt=E.dispersion>0,N=E.iridescence>0,b=E.sheen>0,$=E.transmission>0,_e=Ht&&!!E.anisotropyMap,be=Ce&&!!E.clearcoatMap,we=Ce&&!!E.clearcoatNormalMap,Le=Ce&&!!E.clearcoatRoughnessMap,ce=N&&!!E.iridescenceMap,fe=N&&!!E.iridescenceThicknessMap,Oe=b&&!!E.sheenColorMap,Pe=b&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,Re=!!E.specularColorMap,it=!!E.specularIntensityMap,at=$&&!!E.transmissionMap,mt=$&&!!E.thicknessMap,k=!!E.gradientMap,Ae=!!E.alphaMap,pe=E.alphaTest>0,ze=!!E.alphaHash,Ue=!!E.extensions;let Me=qi;E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=r.toneMapping);const We={shaderID:ve,shaderType:E.type,shaderName:E.name,vertexShader:Te,fragmentShader:De,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Je,batchingColor:Je&&Q._colorsTexture!==null,instancing:et,instancingColor:et&&Q.instanceColor!==null,instancingMorph:et&&Q.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:jt,matcap:ht,envMap:xt,envMapMode:xt&&re.mapping,envMapCubeUVHeight:me,aoMap:Lt,lightMap:ut,bumpMap:on,normalMap:qt,displacementMap:bn,emissiveMap:q,normalMapObjectSpace:qt&&E.normalMapType===Ny,normalMapTangentSpace:qt&&E.normalMapType===ev,packedNormalMap:qt&&E.normalMapType===ev&&ZT(E.normalMap.format),metalnessMap:en,roughnessMap:pt,anisotropy:Ht,anisotropyMap:_e,clearcoat:Ce,clearcoatMap:be,clearcoatNormalMap:we,clearcoatRoughnessMap:Le,dispersion:Kt,iridescence:N,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:b,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:Re,specularIntensityMap:it,transmission:$,transmissionMap:at,thicknessMap:mt,gradientMap:k,opaque:E.transparent===!1&&E.blending===Lr&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:ze,combine:E.combine,mapUv:jt&&T(E.map.channel),aoMapUv:Lt&&T(E.aoMap.channel),lightMapUv:ut&&T(E.lightMap.channel),bumpMapUv:on&&T(E.bumpMap.channel),normalMapUv:qt&&T(E.normalMap.channel),displacementMapUv:bn&&T(E.displacementMap.channel),emissiveMapUv:q&&T(E.emissiveMap.channel),metalnessMapUv:en&&T(E.metalnessMap.channel),roughnessMapUv:pt&&T(E.roughnessMap.channel),anisotropyMapUv:_e&&T(E.anisotropyMap.channel),clearcoatMapUv:be&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(E.sheenRoughnessMap.channel),specularMapUv:Ne&&T(E.specularMap.channel),specularColorMapUv:Re&&T(E.specularColorMap.channel),specularIntensityMapUv:it&&T(E.specularIntensityMap.channel),transmissionMapUv:at&&T(E.transmissionMap.channel),thicknessMapUv:mt&&T(E.thicknessMap.channel),alphaMapUv:Ae&&T(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(qt||Ht),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!W.attributes.uv&&(jt||Ae),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&qt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:He,skinning:Q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Se,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:jt&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===Bt,decodeVideoTextureEmissive:q&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_a,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function x(E){const F=[];if(E.shaderID?F.push(E.shaderID):(F.push(E.customVertexShaderID),F.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)F.push(X),F.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(M(F,E),w(F,E),F.push(r.outputColorSpace)),F.push(E.customProgramCacheKey),F.join()}function M(E,F){E.push(F.precision),E.push(F.outputColorSpace),E.push(F.envMapMode),E.push(F.envMapCubeUVHeight),E.push(F.mapUv),E.push(F.alphaMapUv),E.push(F.lightMapUv),E.push(F.aoMapUv),E.push(F.bumpMapUv),E.push(F.normalMapUv),E.push(F.displacementMapUv),E.push(F.emissiveMapUv),E.push(F.metalnessMapUv),E.push(F.roughnessMapUv),E.push(F.anisotropyMapUv),E.push(F.clearcoatMapUv),E.push(F.clearcoatNormalMapUv),E.push(F.clearcoatRoughnessMapUv),E.push(F.iridescenceMapUv),E.push(F.iridescenceThicknessMapUv),E.push(F.sheenColorMapUv),E.push(F.sheenRoughnessMapUv),E.push(F.specularMapUv),E.push(F.specularColorMapUv),E.push(F.specularIntensityMapUv),E.push(F.transmissionMapUv),E.push(F.thicknessMapUv),E.push(F.combine),E.push(F.fogExp2),E.push(F.sizeAttenuation),E.push(F.morphTargetsCount),E.push(F.morphAttributeCount),E.push(F.numDirLights),E.push(F.numPointLights),E.push(F.numSpotLights),E.push(F.numSpotLightMaps),E.push(F.numHemiLights),E.push(F.numRectAreaLights),E.push(F.numDirLightShadows),E.push(F.numPointLightShadows),E.push(F.numSpotLightShadows),E.push(F.numSpotLightShadowsWithMaps),E.push(F.numLightProbes),E.push(F.shadowMapType),E.push(F.toneMapping),E.push(F.numClippingPlanes),E.push(F.numClipIntersection),E.push(F.depthPacking)}function w(E,F){d.disableAll(),F.instancing&&d.enable(0),F.instancingColor&&d.enable(1),F.instancingMorph&&d.enable(2),F.matcap&&d.enable(3),F.envMap&&d.enable(4),F.normalMapObjectSpace&&d.enable(5),F.normalMapTangentSpace&&d.enable(6),F.clearcoat&&d.enable(7),F.iridescence&&d.enable(8),F.alphaTest&&d.enable(9),F.vertexColors&&d.enable(10),F.vertexAlphas&&d.enable(11),F.vertexUv1s&&d.enable(12),F.vertexUv2s&&d.enable(13),F.vertexUv3s&&d.enable(14),F.vertexTangents&&d.enable(15),F.anisotropy&&d.enable(16),F.alphaHash&&d.enable(17),F.batching&&d.enable(18),F.dispersion&&d.enable(19),F.batchingColor&&d.enable(20),F.gradientMap&&d.enable(21),F.packedNormalMap&&d.enable(22),F.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.reversedDepthBuffer&&d.enable(4),F.skinning&&d.enable(5),F.morphTargets&&d.enable(6),F.morphNormals&&d.enable(7),F.morphColors&&d.enable(8),F.premultipliedAlpha&&d.enable(9),F.shadowMapEnabled&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.decodeVideoTextureEmissive&&d.enable(20),F.alphaToCoverage&&d.enable(21),F.numLightProbeGrids>0&&d.enable(22),E.push(d.mask)}function U(E){const F=y[E.type];let X;if(F){const G=ki[F];X=Jc.clone(G.uniforms)}else X=E.uniforms;return X}function L(E,F){let X=v.get(F);return X!==void 0?++X.usedTimes:(X=new XT(r,F,E,l),p.push(X),v.set(F,X)),X}function V(E){if(--E.usedTimes===0){const F=p.indexOf(E);p[F]=p[p.length-1],p.pop(),v.delete(E.cacheKey),E.destroy()}}function O(E){h.remove(E)}function z(){h.dispose()}return{getParameters:D,getProgramCacheKey:x,getUniforms:U,acquireProgram:L,releaseProgram:V,releaseShaderCache:O,programs:p,dispose:z}}function QT(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function JT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Zv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function h(g,y,T,D,x,M){let w=r[e];return w===void 0?(w={id:g.id,object:g,geometry:y,material:T,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:x,group:M},r[e]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=T,w.materialVariant=d(g),w.groupOrder=D,w.renderOrder=g.renderOrder,w.z=x,w.group=M),e++,w}function m(g,y,T,D,x,M){const w=h(g,y,T,D,x,M);T.transmission>0?s.push(w):T.transparent===!0?l.push(w):i.push(w)}function p(g,y,T,D,x,M){const w=h(g,y,T,D,x,M);T.transmission>0?s.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function v(g,y){i.length>1&&i.sort(g||JT),s.length>1&&s.sort(y||Zv),l.length>1&&l.sort(y||Zv)}function S(){for(let g=e,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:S,sort:v}}function $T(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Kv,r.set(s,[d])):l>=c.length?(d=new Kv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function eA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Tt};break;case"SpotLight":i={position:new J,direction:new J,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=i,i}}}function tA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let nA=0;function iA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aA(r){const e=new eA,i=tA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new rn,d=new rn;function h(p){let v=0,S=0,g=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let y=0,T=0,D=0,x=0,M=0,w=0,U=0,L=0,V=0,O=0,z=0;p.sort(iA);for(let F=0,X=p.length;F<X;F++){const G=p[F],Q=G.color,ue=G.intensity,he=G.distance;let W=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Is?W=G.shadow.map.texture:W=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Q.r*ue,S+=Q.g*ue,g+=Q.b*ue;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],ue);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,re=i.get(G);re.shadowIntensity=B.intensity,re.shadowBias=B.bias,re.shadowNormalBias=B.normalBias,re.shadowRadius=B.radius,re.shadowMapSize=B.mapSize,s.directionalShadow[y]=re,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=G.shadow.matrix,w++}s.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(Q).multiplyScalar(ue),P.distance=he,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[D]=P;const B=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,B.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[D]=B.matrix,G.castShadow){const re=i.get(G);re.shadowIntensity=B.intensity,re.shadowBias=B.bias,re.shadowNormalBias=B.normalBias,re.shadowRadius=B.radius,re.shadowMapSize=B.mapSize,s.spotShadow[D]=re,s.spotShadowMap[D]=W,L++}D++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(Q).multiplyScalar(ue),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[x]=P,x++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const B=G.shadow,re=i.get(G);re.shadowIntensity=B.intensity,re.shadowBias=B.bias,re.shadowNormalBias=B.normalBias,re.shadowRadius=B.radius,re.shadowMapSize=B.mapSize,re.shadowCameraNear=B.camera.near,re.shadowCameraFar=B.camera.far,s.pointShadow[T]=re,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=G.shadow.matrix,U++}s.point[T]=P,T++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ue),P.groundColor.copy(G.groundColor).multiplyScalar(ue),s.hemi[M]=P,M++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==y||E.pointLength!==T||E.spotLength!==D||E.rectAreaLength!==x||E.hemiLength!==M||E.numDirectionalShadows!==w||E.numPointShadows!==U||E.numSpotShadows!==L||E.numSpotMaps!==V||E.numLightProbes!==z)&&(s.directional.length=y,s.spot.length=D,s.rectArea.length=x,s.point.length=T,s.hemi.length=M,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=L+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=z,E.directionalLength=y,E.pointLength=T,E.spotLength=D,E.rectAreaLength=x,E.hemiLength=M,E.numDirectionalShadows=w,E.numPointShadows=U,E.numSpotShadows=L,E.numSpotMaps=V,E.numLightProbes=z,s.version=nA++)}function m(p,v){let S=0,g=0,y=0,T=0,D=0;const x=v.matrixWorldInverse;for(let M=0,w=p.length;M<w;M++){const U=p[M];if(U.isDirectionalLight){const L=s.directional[S];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),S++}else if(U.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),y++}else if(U.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),d.identity(),c.copy(U.matrixWorld),c.premultiply(x),d.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(U.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(x),g++}else if(U.isHemisphereLight){const L=s.hemi[D];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(x),D++}}}return{setup:h,setupView:m,state:s}}function Qv(r){const e=new aA(r),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:p,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function sA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Qv(r),e.set(l,[h])):c>=d.length?(h=new Qv(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],cA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Jv=new rn,ko=new J,Kd=new J;function uA(r,e,i){let s=new tp;const l=new rt,c=new rt,d=new sn,h=new _M,m=new xM,p={},v=i.maxTextureSize,S={[ss]:Kn,[Kn]:ss,[_a]:_a},g=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:rA,fragmentShader:oA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new Jn;T.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Zn(T,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let M=this.type;this.render=function(O,z,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===ly&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const F=r.getRenderTarget(),X=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Wi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ue=M!==this.type;ue&&z.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(W=>W.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,W=O.length;he<W;he++){const P=O[he],B=P.shadow;if(B===void 0){nt("WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const re=B.getFrameExtents();l.multiply(re),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/re.x),l.x=c.x*re.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/re.y),l.y=c.y*re.y,B.mapSize.y=c.y));const me=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||ue===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Wo){if(P.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Qn(l.x,l.y,{format:Is,type:hi,minFilter:In,magFilter:In,generateMipmaps:!1}),B.map.texture.name=P.name+".shadowMap",B.map.depthTexture=new Fr(l.x,l.y,ji),B.map.depthTexture.name=P.name+".shadowMapDepth",B.map.depthTexture.format=ya,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}else P.isPointLight?(B.map=new I_(l.x),B.map.depthTexture=new hM(l.x,Yi)):(B.map=new Qn(l.x,l.y),B.map.depthTexture=new Fr(l.x,l.y,Yi)),B.map.depthTexture.name=P.name+".shadowMap",B.map.depthTexture.format=ya,this.type===zc?(B.map.depthTexture.compareFunction=me?$h:Jh,B.map.depthTexture.minFilter=In,B.map.depthTexture.magFilter=In):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn);B.camera.updateProjectionMatrix()}const ve=B.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ve;I++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,I),r.clear();else{I===0&&(r.setRenderTarget(B.map),r.clear());const K=B.getViewport(I);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Q.viewport(d)}if(P.isPointLight){const K=B.camera,Se=B.matrix,Te=P.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),ko.setFromMatrixPosition(P.matrixWorld),K.position.copy(ko),Kd.copy(K.position),Kd.add(lA[I]),K.up.copy(cA[I]),K.lookAt(Kd),K.updateMatrixWorld(),Se.makeTranslation(-ko.x,-ko.y,-ko.z),Jv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Jv,K.coordinateSystem,K.reversedDepth)}else B.updateMatrices(P);s=B.getFrustum(),L(z,E,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===Wo&&w(B,E),B.needsUpdate=!1}M=this.type,x.needsUpdate=!1,r.setRenderTarget(F,X,G)};function w(O,z){const E=e.update(D);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qn(l.x,l.y,{format:Is,type:hi})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(z,null,E,g,D,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(z,null,E,y,D,null)}function U(O,z,E,F){let X=null;const G=E.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)X=G;else if(X=E.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=X.uuid,ue=z.uuid;let he=p[Q];he===void 0&&(he={},p[Q]=he);let W=he[ue];W===void 0&&(W=X.clone(),he[ue]=W,z.addEventListener("dispose",V)),X=W}if(X.visible=z.visible,X.wireframe=z.wireframe,F===Wo?X.side=z.shadowSide!==null?z.shadowSide:z.side:X.side=z.shadowSide!==null?z.shadowSide:S[z.side],X.alphaMap=z.alphaMap,X.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,X.map=z.map,X.clipShadows=z.clipShadows,X.clippingPlanes=z.clippingPlanes,X.clipIntersection=z.clipIntersection,X.displacementMap=z.displacementMap,X.displacementScale=z.displacementScale,X.displacementBias=z.displacementBias,X.wireframeLinewidth=z.wireframeLinewidth,X.linewidth=z.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Q=r.properties.get(X);Q.light=E}return X}function L(O,z,E,F,X){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&X===Wo)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,O.matrixWorld);const ue=e.update(O),he=O.material;if(Array.isArray(he)){const W=ue.groups;for(let P=0,B=W.length;P<B;P++){const re=W[P],me=he[re.materialIndex];if(me&&me.visible){const ve=U(O,me,F,X);O.onBeforeShadow(r,O,z,E,ue,ve,re),r.renderBufferDirect(E,null,ue,ve,O,re),O.onAfterShadow(r,O,z,E,ue,ve,re)}}}else if(he.visible){const W=U(O,he,F,X);O.onBeforeShadow(r,O,z,E,ue,W,null),r.renderBufferDirect(E,null,ue,W,O,null),O.onAfterShadow(r,O,z,E,ue,W,null)}}const Q=O.children;for(let ue=0,he=Q.length;ue<he;ue++)L(Q[ue],z,E,F,X)}function V(O){O.target.removeEventListener("dispose",V);for(const E in p){const F=p[E],X=O.target.uuid;X in F&&(F[X].dispose(),delete F[X])}}}function fA(r,e){function i(){let k=!1;const Ae=new sn;let pe=null;const ze=new sn(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!k&&(r.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){k=Ue},setClear:function(Ue,Me,We,tt,tn){tn===!0&&(Ue*=tt,Me*=tt,We*=tt),Ae.set(Ue,Me,We,tt),ze.equals(Ae)===!1&&(r.clearColor(Ue,Me,We,tt),ze.copy(Ae))},reset:function(){k=!1,pe=null,ze.set(-1,0,0,0)}}}function s(){let k=!1,Ae=!1,pe=null,ze=null,Ue=null;return{setReversed:function(Me){if(Ae!==Me){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const tt=Ue;Ue=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(Me){Me?Ee(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Me){pe!==Me&&!k&&(r.depthMask(Me),pe=Me)},setFunc:function(Me){if(Ae&&(Me=Gy[Me]),ze!==Me){switch(Me){case eh:r.depthFunc(r.NEVER);break;case th:r.depthFunc(r.ALWAYS);break;case nh:r.depthFunc(r.LESS);break;case Pr:r.depthFunc(r.LEQUAL);break;case ih:r.depthFunc(r.EQUAL);break;case ah:r.depthFunc(r.GEQUAL);break;case sh:r.depthFunc(r.GREATER);break;case rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ze=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ue!==Me&&(Ue=Me,Ae&&(Me=1-Me),r.clearDepth(Me))},reset:function(){k=!1,pe=null,ze=null,Ue=null,Ae=!1}}}function l(){let k=!1,Ae=null,pe=null,ze=null,Ue=null,Me=null,We=null,tt=null,tn=null;return{setTest:function(Dt){k||(Dt?Ee(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Dt){Ae!==Dt&&!k&&(r.stencilMask(Dt),Ae=Dt)},setFunc:function(Dt,pi,$n){(pe!==Dt||ze!==pi||Ue!==$n)&&(r.stencilFunc(Dt,pi,$n),pe=Dt,ze=pi,Ue=$n)},setOp:function(Dt,pi,$n){(Me!==Dt||We!==pi||tt!==$n)&&(r.stencilOp(Dt,pi,$n),Me=Dt,We=pi,tt=$n)},setLocked:function(Dt){k=Dt},setClear:function(Dt){tn!==Dt&&(r.clearStencil(Dt),tn=Dt)},reset:function(){k=!1,Ae=null,pe=null,ze=null,Ue=null,Me=null,We=null,tt=null,tn=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},S={},g={},y=new WeakMap,T=[],D=null,x=!1,M=null,w=null,U=null,L=null,V=null,O=null,z=null,E=new Tt(0,0,0),F=0,X=!1,G=null,Q=null,ue=null,he=null,W=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,re=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(me)[1]),B=re>=1):me.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),B=re>=2);let ve=null,I={};const K=r.getParameter(r.SCISSOR_BOX),Se=r.getParameter(r.VIEWPORT),Te=new sn().fromArray(K),De=new sn().fromArray(Se);function oe(k,Ae,pe,ze){const Ue=new Uint8Array(4),Me=r.createTexture();r.bindTexture(k,Me),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<pe;We++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,ze,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Ae+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Me}const ye={};ye[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Ee(r.DEPTH_TEST),d.setFunc(Pr),on(!1),qt(Q0),Ee(r.CULL_FACE),Lt(Wi);function Ee(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function He(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function et(k,Ae){return g[k]!==Ae?(r.bindFramebuffer(k,Ae),g[k]=Ae,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(k,Ae){let pe=T,ze=!1;if(k){pe=y.get(Ae),pe===void 0&&(pe=[],y.set(Ae,pe));const Ue=k.textures;if(pe.length!==Ue.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,We=Ue.length;Me<We;Me++)pe[Me]=r.COLOR_ATTACHMENT0+Me;pe.length=Ue.length,ze=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,ze=!0);ze&&r.drawBuffers(pe)}function jt(k){return D!==k?(r.useProgram(k),D=k,!0):!1}const ht={[Ds]:r.FUNC_ADD,[uy]:r.FUNC_SUBTRACT,[fy]:r.FUNC_REVERSE_SUBTRACT};ht[dy]=r.MIN,ht[hy]=r.MAX;const xt={[py]:r.ZERO,[my]:r.ONE,[gy]:r.SRC_COLOR,[Jd]:r.SRC_ALPHA,[My]:r.SRC_ALPHA_SATURATE,[Sy]:r.DST_COLOR,[_y]:r.DST_ALPHA,[vy]:r.ONE_MINUS_SRC_COLOR,[$d]:r.ONE_MINUS_SRC_ALPHA,[yy]:r.ONE_MINUS_DST_COLOR,[xy]:r.ONE_MINUS_DST_ALPHA,[by]:r.CONSTANT_COLOR,[Ey]:r.ONE_MINUS_CONSTANT_COLOR,[Ty]:r.CONSTANT_ALPHA,[Ay]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(k,Ae,pe,ze,Ue,Me,We,tt,tn,Dt){if(k===Wi){x===!0&&(He(r.BLEND),x=!1);return}if(x===!1&&(Ee(r.BLEND),x=!0),k!==cy){if(k!==M||Dt!==X){if((w!==Ds||V!==Ds)&&(r.blendEquation(r.FUNC_ADD),w=Ds,V=Ds),Dt)switch(k){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qd:r.blendFunc(r.ONE,r.ONE);break;case J0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",k);break}else switch(k){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case J0:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",k);break}U=null,L=null,O=null,z=null,E.set(0,0,0),F=0,M=k,X=Dt}return}Ue=Ue||Ae,Me=Me||pe,We=We||ze,(Ae!==w||Ue!==V)&&(r.blendEquationSeparate(ht[Ae],ht[Ue]),w=Ae,V=Ue),(pe!==U||ze!==L||Me!==O||We!==z)&&(r.blendFuncSeparate(xt[pe],xt[ze],xt[Me],xt[We]),U=pe,L=ze,O=Me,z=We),(tt.equals(E)===!1||tn!==F)&&(r.blendColor(tt.r,tt.g,tt.b,tn),E.copy(tt),F=tn),M=k,X=!1}function ut(k,Ae){k.side===_a?He(r.CULL_FACE):Ee(r.CULL_FACE);let pe=k.side===Kn;Ae&&(pe=!pe),on(pe),k.blending===Lr&&k.transparent===!1?Lt(Wi):Lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),c.setMask(k.colorWrite);const ze=k.stencilWrite;h.setTest(ze),ze&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function on(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function qt(k){k!==ry?(Ee(r.CULL_FACE),k!==Q&&(k===Q0?r.cullFace(r.BACK):k===oy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),Q=k}function bn(k){k!==ue&&(B&&r.lineWidth(k),ue=k)}function q(k,Ae,pe){k?(Ee(r.POLYGON_OFFSET_FILL),(he!==Ae||W!==pe)&&(he=Ae,W=pe,d.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,pe))):He(r.POLYGON_OFFSET_FILL)}function en(k){k?Ee(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function pt(k){k===void 0&&(k=r.TEXTURE0+P-1),ve!==k&&(r.activeTexture(k),ve=k)}function Ht(k,Ae,pe){pe===void 0&&(ve===null?pe=r.TEXTURE0+P-1:pe=ve);let ze=I[pe];ze===void 0&&(ze={type:void 0,texture:void 0},I[pe]=ze),(ze.type!==k||ze.texture!==Ae)&&(ve!==pe&&(r.activeTexture(pe),ve=pe),r.bindTexture(k,Ae||ye[k]),ze.type=k,ze.texture=Ae)}function Ce(){const k=I[ve];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Kt(){try{r.compressedTexImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function $(){try{r.texSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function _e(){try{r.compressedTexSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function we(){try{r.texStorage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Le(){try{r.texStorage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ce(){try{r.texImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function fe(){try{r.texImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Oe(k){return S[k]!==void 0?S[k]:r.getParameter(k)}function Pe(k,Ae){S[k]!==Ae&&(r.pixelStorei(k,Ae),S[k]=Ae)}function Ne(k){Te.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Re(k){De.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function it(k,Ae){let pe=p.get(Ae);pe===void 0&&(pe=new WeakMap,p.set(Ae,pe));let ze=pe.get(k);ze===void 0&&(ze=r.getUniformBlockIndex(Ae,k.name),pe.set(k,ze))}function at(k,Ae){const ze=p.get(Ae).get(k);m.get(Ae)!==ze&&(r.uniformBlockBinding(Ae,ze,k.__bindingPointIndex),m.set(Ae,ze))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},S={},ve=null,I={},g={},y=new WeakMap,T=[],D=null,x=!1,M=null,w=null,U=null,L=null,V=null,O=null,z=null,E=new Tt(0,0,0),F=0,X=!1,G=null,Q=null,ue=null,he=null,W=null,Te.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Ee,disable:He,bindFramebuffer:et,drawBuffers:Je,useProgram:jt,setBlending:Lt,setMaterial:ut,setFlipSided:on,setCullFace:qt,setLineWidth:bn,setPolygonOffset:q,setScissorTest:en,activeTexture:pt,bindTexture:Ht,unbindTexture:Ce,compressedTexImage2D:Kt,compressedTexImage3D:N,texImage2D:ce,texImage3D:fe,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:we,texStorage3D:Le,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:Ne,viewport:Re,reset:mt}}function dA(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,v=new WeakMap,S=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(N,b){return T?new OffscreenCanvas(N,b):Zc("canvas")}function x(N,b,$){let _e=1;const be=Kt(N);if((be.width>$||be.height>$)&&(_e=$/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(_e*be.width),Le=Math.floor(_e*be.height);g===void 0&&(g=D(we,Le));const ce=b?D(we,Le):g;return ce.width=we,ce.height=Le,ce.getContext("2d").drawImage(N,0,0,we,Le),nt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+we+"x"+Le+")."),ce}else return"data"in N&&nt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),N;return N}function M(N){return N.generateMipmaps}function w(N){r.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,b,$,_e,be,we=!1){if(N!==null){if(r[N]!==void 0)return r[N];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le;_e&&(Le=e.get("EXT_texture_norm16"),Le||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=b;if(b===r.RED&&($===r.FLOAT&&(ce=r.R32F),$===r.HALF_FLOAT&&(ce=r.R16F),$===r.UNSIGNED_BYTE&&(ce=r.R8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),$===r.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),b===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.R8UI),$===r.UNSIGNED_SHORT&&(ce=r.R16UI),$===r.UNSIGNED_INT&&(ce=r.R32UI),$===r.BYTE&&(ce=r.R8I),$===r.SHORT&&(ce=r.R16I),$===r.INT&&(ce=r.R32I)),b===r.RG&&($===r.FLOAT&&(ce=r.RG32F),$===r.HALF_FLOAT&&(ce=r.RG16F),$===r.UNSIGNED_BYTE&&(ce=r.RG8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),$===r.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),b===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RG8UI),$===r.UNSIGNED_SHORT&&(ce=r.RG16UI),$===r.UNSIGNED_INT&&(ce=r.RG32UI),$===r.BYTE&&(ce=r.RG8I),$===r.SHORT&&(ce=r.RG16I),$===r.INT&&(ce=r.RG32I)),b===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),$===r.UNSIGNED_INT&&(ce=r.RGB32UI),$===r.BYTE&&(ce=r.RGB8I),$===r.SHORT&&(ce=r.RGB16I),$===r.INT&&(ce=r.RGB32I)),b===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),$===r.UNSIGNED_INT&&(ce=r.RGBA32UI),$===r.BYTE&&(ce=r.RGBA8I),$===r.SHORT&&(ce=r.RGBA16I),$===r.INT&&(ce=r.RGBA32I)),b===r.RGB&&($===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),$===r.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),b===r.RGBA){const fe=we?Yc:bt.getTransfer(be);$===r.FLOAT&&(ce=r.RGBA32F),$===r.HALF_FLOAT&&(ce=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ce=fe===Bt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),$===r.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function V(N,b){let $;return N?b===null||b===Yi||b===Zo?$=r.DEPTH24_STENCIL8:b===ji?$=r.DEPTH32F_STENCIL8:b===Yo&&($=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Zo?$=r.DEPTH_COMPONENT24:b===ji?$=r.DEPTH_COMPONENT32F:b===Yo&&($=r.DEPTH_COMPONENT16),$}function O(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Rn&&N.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function z(N){const b=N.target;b.removeEventListener("dispose",z),F(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&S.delete(b)}function E(N){const b=N.target;b.removeEventListener("dispose",E),G(b)}function F(N){const b=s.get(N);if(b.__webglInit===void 0)return;const $=N.source,_e=y.get($);if(_e){const be=_e[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&X(N),Object.keys(_e).length===0&&y.delete($)}s.remove(N)}function X(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const $=N.source,_e=y.get($);delete _e[b.__cacheKey],d.memory.textures--}function G(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(b.__webglFramebuffer[_e]))for(let be=0;be<b.__webglFramebuffer[_e].length;be++)r.deleteFramebuffer(b.__webglFramebuffer[_e][be]);else r.deleteFramebuffer(b.__webglFramebuffer[_e]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[_e])}else{if(Array.isArray(b.__webglFramebuffer))for(let _e=0;_e<b.__webglFramebuffer.length;_e++)r.deleteFramebuffer(b.__webglFramebuffer[_e]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _e=0;_e<b.__webglColorRenderbuffer.length;_e++)b.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[_e]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=N.textures;for(let _e=0,be=$.length;_e<be;_e++){const we=s.get($[_e]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),d.memory.textures--),s.remove($[_e])}s.remove(N)}let Q=0;function ue(){Q=0}function he(){return Q}function W(N){Q=N}function P(){const N=Q;return N>=l.maxTextures&&nt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),Q+=1,N}function B(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function re(N,b){const $=s.get(N);if(N.isVideoTexture&&Ht(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const _e=N.image;if(_e===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{He($,N,b);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+b)}function me(N,b){const $=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){He($,N,b);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+b)}function ve(N,b){const $=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){He($,N,b);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+b)}function I(N,b){const $=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){et($,N,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+b)}const K={[oh]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[lh]:r.MIRRORED_REPEAT},Se={[Rn]:r.NEAREST,[Ry]:r.NEAREST_MIPMAP_NEAREST,[hc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[xd]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},Te={[Uy]:r.NEVER,[Fy]:r.ALWAYS,[Ly]:r.LESS,[Jh]:r.LEQUAL,[Oy]:r.EQUAL,[$h]:r.GEQUAL,[Py]:r.GREATER,[Iy]:r.NOTEQUAL};function De(N,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===xd||b.magFilter===hc||b.magFilter===Us||b.minFilter===In||b.minFilter===xd||b.minFilter===hc||b.minFilter===Us)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,K[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,K[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,K[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Se[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rn||b.minFilter!==hc&&b.minFilter!==Us||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function oe(N,b){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",z));const _e=b.source;let be=y.get(_e);be===void 0&&(be={},y.set(_e,be));const we=B(b);if(we!==N.__cacheKey){be[we]===void 0&&(be[we]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,$=!0),be[we].usedTimes++;const Le=be[N.__cacheKey];Le!==void 0&&(be[N.__cacheKey].usedTimes--,Le.usedTimes===0&&X(b)),N.__cacheKey=we,N.__webglTexture=be[we].texture}return $}function ye(N,b,$){return Math.floor(Math.floor(N/$)/b)}function Ee(N,b,$,_e){const we=N.updateRanges;if(we.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,$,_e,b.data);else{we.sort((Pe,Ne)=>Pe.start-Ne.start);let Le=0;for(let Pe=1;Pe<we.length;Pe++){const Ne=we[Le],Re=we[Pe],it=Ne.start+Ne.count,at=ye(Re.start,b.width,4),mt=ye(Ne.start,b.width,4);Re.start<=it+1&&at===mt&&ye(Re.start+Re.count-1,b.width,4)===at?Ne.count=Math.max(Ne.count,Re.start+Re.count-Ne.start):(++Le,we[Le]=Re)}we.length=Le+1;const ce=i.getParameter(r.UNPACK_ROW_LENGTH),fe=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,Ne=we.length;Pe<Ne;Pe++){const Re=we[Pe],it=Math.floor(Re.start/4),at=Math.ceil(Re.count/4),mt=it%b.width,k=Math.floor(it/b.width),Ae=at,pe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,mt,k,Ae,pe,$,_e,b.data)}N.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ce),i.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function He(N,b,$){let _e=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_e=r.TEXTURE_3D);const be=oe(N,b),we=b.source;i.bindTexture(_e,N.__webglTexture,r.TEXTURE0+$);const Le=s.get(we);if(we.version!==Le.__version||be===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pe=bt.getPrimaries(bt.workingColorSpace),ze=b.colorSpace===is?null:bt.getPrimaries(b.colorSpace),Ue=b.colorSpace===is||pe===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let fe=x(b.image,!1,l.maxTextureSize);fe=Ce(b,fe);const Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type);let Ne=L(b.internalFormat,Oe,Pe,b.normalized,b.colorSpace,b.isVideoTexture);De(_e,b);let Re;const it=b.mipmaps,at=b.isVideoTexture!==!0,mt=Le.__version===void 0||be===!0,k=we.dataReady,Ae=O(b,fe);if(b.isDepthTexture)Ne=V(b.format===Ls,b.type),mt&&(at?i.texStorage2D(r.TEXTURE_2D,1,Ne,fe.width,fe.height):i.texImage2D(r.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Oe,Pe,null));else if(b.isDataTexture)if(it.length>0){at&&mt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ne,it[0].width,it[0].height);for(let pe=0,ze=it.length;pe<ze;pe++)Re=it[pe],at?k&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Re.width,Re.height,Oe,Pe,Re.data):i.texImage2D(r.TEXTURE_2D,pe,Ne,Re.width,Re.height,0,Oe,Pe,Re.data);b.generateMipmaps=!1}else at?(mt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ne,fe.width,fe.height),k&&Ee(b,fe,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Oe,Pe,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ne,it[0].width,it[0].height,fe.depth);for(let pe=0,ze=it.length;pe<ze;pe++)if(Re=it[pe],b.format!==Oi)if(Oe!==null)if(at){if(k)if(b.layerUpdates.size>0){const Ue=Rv(Re.width,Re.height,b.format,b.type);for(const Me of b.layerUpdates){const We=Re.data.subarray(Me*Ue/Re.data.BYTES_PER_ELEMENT,(Me+1)*Ue/Re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Me,Re.width,Re.height,1,Oe,We)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,fe.depth,Oe,Re.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Ne,Re.width,Re.height,fe.depth,0,Re.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,fe.depth,Oe,Pe,Re.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pe,Ne,Re.width,Re.height,fe.depth,0,Oe,Pe,Re.data)}else{at&&mt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ne,it[0].width,it[0].height);for(let pe=0,ze=it.length;pe<ze;pe++)Re=it[pe],b.format!==Oi?Oe!==null?at?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Re.width,Re.height,Oe,Re.data):i.compressedTexImage2D(r.TEXTURE_2D,pe,Ne,Re.width,Re.height,0,Re.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Re.width,Re.height,Oe,Pe,Re.data):i.texImage2D(r.TEXTURE_2D,pe,Ne,Re.width,Re.height,0,Oe,Pe,Re.data)}else if(b.isDataArrayTexture)if(at){if(mt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ne,fe.width,fe.height,fe.depth),k)if(b.layerUpdates.size>0){const pe=Rv(fe.width,fe.height,b.format,b.type);for(const ze of b.layerUpdates){const Ue=fe.data.subarray(ze*pe/fe.data.BYTES_PER_ELEMENT,(ze+1)*pe/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ze,fe.width,fe.height,1,Oe,Pe,Ue)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(b.isData3DTexture)at?(mt&&i.texStorage3D(r.TEXTURE_3D,Ae,Ne,fe.width,fe.height,fe.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)):i.texImage3D(r.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(b.isFramebufferTexture){if(mt)if(at)i.texStorage2D(r.TEXTURE_2D,Ae,Ne,fe.width,fe.height);else{let pe=fe.width,ze=fe.height;for(let Ue=0;Ue<Ae;Ue++)i.texImage2D(r.TEXTURE_2D,Ue,Ne,pe,ze,0,Oe,Pe,null),pe>>=1,ze>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),S.add(b),pe.onpaint=tt=>{const tn=tt.changedElements;for(const Dt of S)tn.includes(Dt.image)&&(Dt.needsUpdate=!0)},pe.requestPaint();return}const ze=0,Ue=r.RGBA,Me=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,ze,Ue,Me,We,fe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&mt){const pe=Kt(it[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Ne,pe.width,pe.height)}for(let pe=0,ze=it.length;pe<ze;pe++)Re=it[pe],at?k&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Oe,Pe,Re):i.texImage2D(r.TEXTURE_2D,pe,Ne,Oe,Pe,Re);b.generateMipmaps=!1}else if(at){if(mt){const pe=Kt(fe);i.texStorage2D(r.TEXTURE_2D,Ae,Ne,pe.width,pe.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,fe)}else i.texImage2D(r.TEXTURE_2D,0,Ne,Oe,Pe,fe);M(b)&&w(_e),Le.__version=we.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function et(N,b,$){if(b.image.length!==6)return;const _e=oe(N,b),be=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+$);const we=s.get(be);if(be.version!==we.__version||_e===!0){i.activeTexture(r.TEXTURE0+$);const Le=bt.getPrimaries(bt.workingColorSpace),ce=b.colorSpace===is?null:bt.getPrimaries(b.colorSpace),fe=b.colorSpace===is||Le===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ne[Me]=x(b.image[Me],!0,l.maxCubemapSize):Ne[Me]=Pe?b.image[Me].image:b.image[Me],Ne[Me]=Ce(b,Ne[Me]);const Re=Ne[0],it=c.convert(b.format,b.colorSpace),at=c.convert(b.type),mt=L(b.internalFormat,it,at,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Ae=we.__version===void 0||_e===!0,pe=be.dataReady;let ze=O(b,Re);De(r.TEXTURE_CUBE_MAP,b);let Ue;if(Oe){k&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ze,mt,Re.width,Re.height);for(let Me=0;Me<6;Me++){Ue=Ne[Me].mipmaps;for(let We=0;We<Ue.length;We++){const tt=Ue[We];b.format!==Oi?it!==null?k?pe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,mt,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,mt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Ue=b.mipmaps,k&&Ae){Ue.length>0&&ze++;const Me=Kt(Ne[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ze,mt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ne[Me].width,Ne[Me].height,it,at,Ne[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,mt,Ne[Me].width,Ne[Me].height,0,it,at,Ne[Me].data);for(let We=0;We<Ue.length;We++){const tn=Ue[We].image[Me].image;k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,tn.width,tn.height,it,at,tn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,mt,tn.width,tn.height,0,it,at,tn.data)}}else{k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,it,at,Ne[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,mt,it,at,Ne[Me]);for(let We=0;We<Ue.length;We++){const tt=Ue[We];k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,it,at,tt.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,mt,it,at,tt.image[Me])}}}M(b)&&w(r.TEXTURE_CUBE_MAP),we.__version=be.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Je(N,b,$,_e,be,we){const Le=c.convert($.format,$.colorSpace),ce=c.convert($.type),fe=L($.internalFormat,Le,ce,$.normalized,$.colorSpace),Oe=s.get(b),Pe=s.get($);if(Pe.__renderTarget=b,!Oe.__hasExternalTextures){const Ne=Math.max(1,b.width>>we),Re=Math.max(1,b.height>>we);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,we,fe,Ne,Re,b.depth,0,Le,ce,null):i.texImage2D(be,we,fe,Ne,Re,0,Le,ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),pt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,be,Pe.__webglTexture,0,en(b)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,be,Pe.__webglTexture,we),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(N,b,$){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const _e=b.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,we=V(b.stencilBuffer,be),Le=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(b),we,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(b),we,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,we,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,N)}else{const _e=b.textures;for(let be=0;be<_e.length;be++){const we=_e[be],Le=c.convert(we.format,we.colorSpace),ce=c.convert(we.type),fe=L(we.internalFormat,Le,ce,we.normalized,we.colorSpace);pt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(b),fe,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(b),fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(N,b,$){const _e=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=s.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_e){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),De(r.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=c.convert(b.depthTexture.format),Pe=c.convert(b.depthTexture.type);let Ne;b.depthTexture.format===ya?Ne=r.DEPTH_COMPONENT24:b.depthTexture.format===Ls&&(Ne=r.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ne,b.width,b.height,0,Oe,Pe,null)}}else re(b.depthTexture,0);const we=be.__webglTexture,Le=en(b),ce=_e?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,fe=b.depthTexture.format===Ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ya)pt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,we,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,we,0);else if(b.depthTexture.format===Ls)pt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,we,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,we,0);else throw new Error("Unknown depthTexture format")}function xt(N){const b=s.get(N),$=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const _e=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_e){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=_e}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let _e=0;_e<6;_e++)ht(b.__webglFramebuffer[_e],N,_e);else{const _e=N.texture.mipmaps;_e&&_e.length>0?ht(b.__webglFramebuffer[0],N,0):ht(b.__webglFramebuffer,N,0)}else if($){b.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[_e]),b.__webglDepthbuffer[_e]===void 0)b.__webglDepthbuffer[_e]=r.createRenderbuffer(),jt(b.__webglDepthbuffer[_e],N,!1);else{const be=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,we)}}else{const _e=N.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),jt(b.__webglDepthbuffer,N,!1);else{const be=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,we)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(N,b,$){const _e=s.get(N);b!==void 0&&Je(_e.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&xt(N)}function ut(N){const b=N.texture,$=s.get(N),_e=s.get(b);N.addEventListener("dispose",E);const be=N.textures,we=N.isWebGLCubeRenderTarget===!0,Le=be.length>1;if(Le||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=b.version,d.memory.textures++),we){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let fe=0;fe<b.mipmaps.length;fe++)$.__webglFramebuffer[ce][fe]=r.createFramebuffer()}else $.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)$.__webglFramebuffer[ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ce=0,fe=be.length;ce<fe;ce++){const Oe=s.get(be[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),d.memory.textures++)}if(N.samples>0&&pt(N)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<be.length;ce++){const fe=be[ce];$.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const Oe=c.convert(fe.format,fe.colorSpace),Pe=c.convert(fe.type),Ne=L(fe.internalFormat,Oe,Pe,fe.normalized,fe.colorSpace,N.isXRRenderTarget===!0),Re=en(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Ne,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),jt($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){i.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),De(r.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Je($.__webglFramebuffer[ce][fe],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Je($.__webglFramebuffer[ce],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(b)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ce=0,fe=be.length;ce<fe;ce++){const Oe=be[ce],Pe=s.get(Oe);let Ne=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Pe.__webglTexture),De(Ne,Oe),Je($.__webglFramebuffer,N,Oe,r.COLOR_ATTACHMENT0+ce,Ne,0),M(Oe)&&w(Ne)}i.unbindTexture()}else{let ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ce,_e.__webglTexture),De(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Je($.__webglFramebuffer[fe],N,b,r.COLOR_ATTACHMENT0,ce,fe);else Je($.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,ce,0);M(b)&&w(ce),i.unbindTexture()}N.depthBuffer&&xt(N)}function on(N){const b=N.textures;for(let $=0,_e=b.length;$<_e;$++){const be=b[$];if(M(be)){const we=U(N),Le=s.get(be).__webglTexture;i.bindTexture(we,Le),w(we),i.unbindTexture()}}}const qt=[],bn=[];function q(N){if(N.samples>0){if(pt(N)===!1){const b=N.textures,$=N.width,_e=N.height;let be=r.COLOR_BUFFER_BIT;const we=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(N),ce=b.length>1;if(ce)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const fe=N.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,$,_e,0,0,$,_e,be,r.NEAREST),m===!0&&(qt.length=0,bn.length=0,qt.push(r.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(qt.push(we),bn.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,bn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function en(N){return Math.min(l.maxSamples,N.samples)}function pt(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(N){const b=d.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function Ce(N,b){const $=N.colorSpace,_e=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==qc&&$!==is&&(bt.getTransfer($)===Bt?(_e!==Oi||be!==di)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",$)),b}function Kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=P,this.resetTextureUnits=ue,this.getTextureUnits=he,this.setTextureUnits=W,this.setTexture2D=re,this.setTexture2DArray=me,this.setTexture3D=ve,this.setTextureCube=I,this.rebindTextures=Lt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hA(r,e){function i(s,l=is){let c;const d=bt.getTransfer(l);if(s===di)return r.UNSIGNED_BYTE;if(s===qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===g_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===v_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===p_)return r.BYTE;if(s===m_)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===Wh)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===hi)return r.HALF_FLOAT;if(s===__)return r.ALPHA;if(s===x_)return r.RGB;if(s===Oi)return r.RGBA;if(s===ya)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===S_)return r.RED;if(s===Zh)return r.RED_INTEGER;if(s===Is)return r.RG;if(s===Kh)return r.RG_INTEGER;if(s===Qh)return r.RGBA_INTEGER;if(s===Bc||s===Hc||s===Gc||s===Vc)if(d===Bt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ch||s===uh||s===fh||s===dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hh||s===ph||s===mh||s===gh||s===vh||s===Xc||s===_h)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hh||s===ph)return d===Bt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gh)return c.COMPRESSED_R11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xc)return c.COMPRESSED_RG11_EAC;if(s===_h)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xh||s===Sh||s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===Ch||s===wh||s===Rh||s===Dh||s===Nh||s===Uh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Eh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Th)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ah)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return d===Bt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lh||s===Oh||s===Ph)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Lh)return d===Bt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ph)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ih||s===Fh||s===Wc||s===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ih)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Fh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new D_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Fn({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new nu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends zs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,S=null,g=null,y=null,T=null;const D=typeof XRWebGLBinding<"u",x=new gA,M={},w=i.getContextAttributes();let U=null,L=null;const V=[],O=[],z=new rt;let E=null;const F=new fi;F.viewport=new sn;const X=new fi;X.viewport=new sn;const G=[F,X],Q=new EM;let ue=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=V[oe];return ye===void 0&&(ye=new Cd,V[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=V[oe];return ye===void 0&&(ye=new Cd,V[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=V[oe];return ye===void 0&&(ye=new Cd,V[oe]=ye),ye.getHandSpace()};function W(oe){const ye=O.indexOf(oe.inputSource);if(ye===-1)return;const Ee=V[ye];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,p||d),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function P(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",B);for(let oe=0;oe<V.length;oe++){const ye=O[oe];ye!==null&&(O[oe]=null,V[oe].disconnect(ye))}ue=null,he=null,x.reset();for(const oe in M)delete M[oe];e.setRenderTarget(U),y=null,g=null,S=null,l=null,L=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,s.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,s.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&D&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",P),l.addEventListener("inputsourceschange",B),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(z),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,et=null;w.depth&&(et=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=w.stencil?Ls:ya,He=w.stencil?Zo:Yi);const Je={colorFormat:i.RGBA8,depthFormat:et,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Je),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Qn(g.textureWidth,g.textureHeight,{format:Oi,type:di,depthTexture:new Fr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Qn(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(oe){for(let ye=0;ye<oe.removed.length;ye++){const Ee=oe.removed[ye],He=O.indexOf(Ee);He>=0&&(O[He]=null,V[He].disconnect(Ee))}for(let ye=0;ye<oe.added.length;ye++){const Ee=oe.added[ye];let He=O.indexOf(Ee);if(He===-1){for(let Je=0;Je<V.length;Je++)if(Je>=O.length){O.push(Ee),He=Je;break}else if(O[Je]===null){O[Je]=Ee,He=Je;break}if(He===-1)break}const et=V[He];et&&et.connect(Ee)}}const re=new J,me=new J;function ve(oe,ye,Ee){re.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const He=re.distanceTo(me),et=ye.projectionMatrix.elements,Je=Ee.projectionMatrix.elements,jt=et[14]/(et[10]-1),ht=et[14]/(et[10]+1),xt=(et[9]+1)/et[5],Lt=(et[9]-1)/et[5],ut=(et[8]-1)/et[0],on=(Je[8]+1)/Je[0],qt=jt*ut,bn=jt*on,q=He/(-ut+on),en=q*-ut;if(ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(en),oe.translateZ(q),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),et[10]===-1)oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const pt=jt+q,Ht=ht+q,Ce=qt-en,Kt=bn+(He-en),N=xt*ht/Ht*pt,b=Lt*ht/Ht*pt;oe.projectionMatrix.makePerspective(Ce,Kt,N,b,pt,Ht),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function I(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let ye=oe.near,Ee=oe.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),Q.near=X.near=F.near=ye,Q.far=X.far=F.far=Ee,(ue!==Q.near||he!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ue=Q.near,he=Q.far),Q.layers.mask=oe.layers.mask|6,F.layers.mask=Q.layers.mask&-5,X.layers.mask=Q.layers.mask&-3;const He=oe.parent,et=Q.cameras;I(Q,He);for(let Je=0;Je<et.length;Je++)I(et[Je],He);et.length===2?ve(Q,F,X):Q.projectionMatrix.copy(F.projectionMatrix),K(oe,Q,He)};function K(oe,ye,Ee){Ee===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Hh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Q)},this.getCameraTexture=function(oe){return M[oe]};let Se=null;function Te(oe,ye){if(v=ye.getViewerPose(p||d),T=ye,v!==null){const Ee=v.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let He=!1;Ee.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let ht=0;ht<Ee.length;ht++){const xt=Ee[ht];let Lt=null;if(y!==null)Lt=y.getViewport(xt);else{const on=S.getViewSubImage(g,xt);Lt=on.viewport,ht===0&&(e.setRenderTargetTextures(L,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(L))}let ut=G[ht];ut===void 0&&(ut=new fi,ut.layers.enable(ht),ut.viewport=new sn,G[ht]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ht===0&&(Q.matrix.copy(ut.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(ut)}const et=l.enabledFeatures;if(et&&et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){S=s.getBinding();const ht=S.getDepthInformation(Ee[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,l.renderState)}if(et&&et.includes("camera-access")&&D){e.state.unbindTexture(),S=s.getBinding();for(let ht=0;ht<Ee.length;ht++){const xt=Ee[ht].camera;if(xt){let Lt=M[xt];Lt||(Lt=new D_,M[xt]=Lt);const ut=S.getCameraImage(xt);Lt.sourceTexture=ut}}}}for(let Ee=0;Ee<V.length;Ee++){const He=O[Ee],et=V[Ee];He!==null&&et!==void 0&&et.update(He,ye,p||d)}Se&&Se(oe,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),T=null}const De=new O_;De.setAnimationLoop(Te),this.setAnimationLoop=function(oe){Se=oe},this.dispose=function(){}}}const _A=new rn,G_=new ot;G_.set(-1,0,0,0,1,0,0,0,1);function xA(r,e){function i(x,M){x.matrixAutoUpdate===!0&&x.updateMatrix(),M.value.copy(x.matrix)}function s(x,M){M.color.getRGB(x.fogColor.value,N_(r)),M.isFog?(x.fogNear.value=M.near,x.fogFar.value=M.far):M.isFogExp2&&(x.fogDensity.value=M.density)}function l(x,M,w,U,L){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(x,M):M.isMeshLambertMaterial?(c(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(x,M),S(x,M)):M.isMeshPhongMaterial?(c(x,M),v(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(x,M),g(x,M),M.isMeshPhysicalMaterial&&y(x,M,L)):M.isMeshMatcapMaterial?(c(x,M),T(x,M)):M.isMeshDepthMaterial?c(x,M):M.isMeshDistanceMaterial?(c(x,M),D(x,M)):M.isMeshNormalMaterial?c(x,M):M.isLineBasicMaterial?(d(x,M),M.isLineDashedMaterial&&h(x,M)):M.isPointsMaterial?m(x,M,w,U):M.isSpriteMaterial?p(x,M):M.isShadowMaterial?(x.color.value.copy(M.color),x.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(x,M){x.opacity.value=M.opacity,M.color&&x.diffuse.value.copy(M.color),M.emissive&&x.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(x.map.value=M.map,i(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,i(M.alphaMap,x.alphaMapTransform)),M.bumpMap&&(x.bumpMap.value=M.bumpMap,i(M.bumpMap,x.bumpMapTransform),x.bumpScale.value=M.bumpScale,M.side===Kn&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,i(M.normalMap,x.normalMapTransform),x.normalScale.value.copy(M.normalScale),M.side===Kn&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,i(M.displacementMap,x.displacementMapTransform),x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,x.emissiveMapTransform)),M.specularMap&&(x.specularMap.value=M.specularMap,i(M.specularMap,x.specularMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest);const w=e.get(M),U=w.envMap,L=w.envMapRotation;U&&(x.envMap.value=U,x.envMapRotation.value.setFromMatrix4(_A.makeRotationFromEuler(L)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(G_),x.reflectivity.value=M.reflectivity,x.ior.value=M.ior,x.refractionRatio.value=M.refractionRatio),M.lightMap&&(x.lightMap.value=M.lightMap,x.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,x.lightMapTransform)),M.aoMap&&(x.aoMap.value=M.aoMap,x.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,x.aoMapTransform))}function d(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,M.map&&(x.map.value=M.map,i(M.map,x.mapTransform))}function h(x,M){x.dashSize.value=M.dashSize,x.totalSize.value=M.dashSize+M.gapSize,x.scale.value=M.scale}function m(x,M,w,U){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.size.value=M.size*w,x.scale.value=U*.5,M.map&&(x.map.value=M.map,i(M.map,x.uvTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,i(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function p(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.rotation.value=M.rotation,M.map&&(x.map.value=M.map,i(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,i(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function v(x,M){x.specular.value.copy(M.specular),x.shininess.value=Math.max(M.shininess,1e-4)}function S(x,M){M.gradientMap&&(x.gradientMap.value=M.gradientMap)}function g(x,M){x.metalness.value=M.metalness,M.metalnessMap&&(x.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,x.metalnessMapTransform)),x.roughness.value=M.roughness,M.roughnessMap&&(x.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,x.roughnessMapTransform)),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)}function y(x,M,w){x.ior.value=M.ior,M.sheen>0&&(x.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),x.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(x.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,x.sheenColorMapTransform)),M.sheenRoughnessMap&&(x.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,x.sheenRoughnessMapTransform))),M.clearcoat>0&&(x.clearcoat.value=M.clearcoat,x.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(x.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,x.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(x.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Kn&&x.clearcoatNormalScale.value.negate())),M.dispersion>0&&(x.dispersion.value=M.dispersion),M.iridescence>0&&(x.iridescence.value=M.iridescence,x.iridescenceIOR.value=M.iridescenceIOR,x.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(x.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,x.iridescenceMapTransform)),M.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),M.transmission>0&&(x.transmission.value=M.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(x.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,x.transmissionMapTransform)),x.thickness.value=M.thickness,M.thicknessMap&&(x.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=M.attenuationDistance,x.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(x.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(x.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=M.specularIntensity,x.specularColor.value.copy(M.specularColor),M.specularColorMap&&(x.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,x.specularColorMapTransform)),M.specularIntensityMap&&(x.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,M){M.matcap&&(x.matcap.value=M.matcap)}function D(x,M){const w=e.get(M).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function SA(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const L=U.program;s.uniformBlockBinding(w,L)}function p(w,U){let L=l[w.id];L===void 0&&(T(w),L=v(w),l[w.id]=L,w.addEventListener("dispose",x));const V=U.program;s.updateUBOMapping(w,V);const O=e.render.frame;c[w.id]!==O&&(g(w),c[w.id]=O)}function v(w){const U=S();w.__bindingPointIndex=U;const L=r.createBuffer(),V=w.__size,O=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,V,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function S(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const U=l[w.id],L=w.uniforms,V=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let O=0,z=L.length;O<z;O++){const E=Array.isArray(L[O])?L[O]:[L[O]];for(let F=0,X=E.length;F<X;F++){const G=E[F];if(y(G,O,F,V)===!0){const Q=G.__offset,ue=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let W=0;W<ue.length;W++){const P=ue[W],B=D(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Q+he,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):ArrayBuffer.isView(P)?G.__data.set(new P.constructor(P.buffer,P.byteOffset,G.__data.length)):(P.toArray(G.__data,he),he+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(w,U,L,V){const O=w.value,z=U+"_"+L;if(V[z]===void 0)return typeof O=="number"||typeof O=="boolean"?V[z]=O:ArrayBuffer.isView(O)?V[z]=O.slice():V[z]=O.clone(),!0;{const E=V[z];if(typeof O=="number"||typeof O=="boolean"){if(E!==O)return V[z]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(E.equals(O)===!1)return E.copy(O),!0}}return!1}function T(w){const U=w.uniforms;let L=0;const V=16;for(let z=0,E=U.length;z<E;z++){const F=Array.isArray(U[z])?U[z]:[U[z]];for(let X=0,G=F.length;X<G;X++){const Q=F[X],ue=Array.isArray(Q.value)?Q.value:[Q.value];for(let he=0,W=ue.length;he<W;he++){const P=ue[he],B=D(P),re=L%V,me=re%B.boundary,ve=re+me;L+=me,ve!==0&&V-ve<B.storage&&(L+=V-ve),Q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=B.storage}}}const O=L%V;return O>0&&(L+=V-O),w.__size=L,w.__cache={},this}function D(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(U.boundary=16,U.storage=w.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",w),U}function x(w){const U=w.target;U.removeEventListener("dispose",x);const L=d.indexOf(U.__bindingPointIndex);d.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function M(){for(const w in l)r.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:p,dispose:M}}const yA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function MA(){return Vi===null&&(Vi=new lM(yA,16,16,Is,hi),Vi.name="DFG_LUT",Vi.minFilter=In,Vi.magFilter=In,Vi.wrapS=xa,Vi.wrapT=xa,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class bA{constructor(e={}){const{canvas:i=By(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=di}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const D=y,x=new Set([Qh,Kh,Zh]),M=new Set([di,Yi,Yo,Zo,qh,Yh]),w=new Uint32Array(4),U=new Int32Array(4),L=new J;let V=null,O=null;const z=[],E=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,Q=null;this._outputColorSpace=Ei;let ue=0,he=0,W=null,P=-1,B=null;const re=new sn,me=new sn;let ve=null;const I=new Tt(0);let K=0,Se=i.width,Te=i.height,De=1,oe=null,ye=null;const Ee=new sn(0,0,Se,Te),He=new sn(0,0,Se,Te);let et=!1;const Je=new tp;let jt=!1,ht=!1;const xt=new rn,Lt=new J,ut=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function bn(){return W===null?De:1}let q=s;function en(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",tt,!1),q===null){const Y="webgl2";if(q=en(Y,A),q===null)throw en(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let pt,Ht,Ce,Kt,N,b,$,_e,be,we,Le,ce,fe,Oe,Pe,Ne,Re,it,at,mt,k,Ae,pe;function ze(){pt=new M1(q),pt.init(),k=new hA(q,pt),Ht=new p1(q,pt,e,k),Ce=new fA(q,pt),Ht.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Kt=new T1(q),N=new QT,b=new dA(q,pt,Ce,N,Ht,k,Kt),$=new y1(X),_e=new RM(q),Ae=new d1(q,_e),be=new b1(q,_e,Kt,Ae),we=new C1(q,be,_e,Ae,Kt),it=new A1(q,Ht,b),Pe=new m1(N),Le=new KT(X,$,pt,Ht,Ae,Pe),ce=new xA(X,N),fe=new $T,Oe=new sA(pt),Re=new f1(X,$,Ce,we,T,m),Ne=new uA(X,we,Ht),pe=new SA(q,Kt,Ht,Ce),at=new h1(q,pt,Kt),mt=new E1(q,pt,Kt),Kt.programs=Le.programs,X.capabilities=Ht,X.extensions=pt,X.properties=N,X.renderLists=fe,X.shadowMap=Ne,X.state=Ce,X.info=Kt}ze(),D!==di&&(F=new R1(D,i.width,i.height,l,c));const Ue=new vA(X,q);this.xr=Ue,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(Se,Te,!1))},this.getSize=function(A){return A.set(Se,Te)},this.setSize=function(A,Y,ae=!0){if(Ue.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=A,Te=Y,i.width=Math.floor(A*De),i.height=Math.floor(Y*De),ae===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Se*De,Te*De).floor()},this.setDrawingBufferSize=function(A,Y,ae){Se=A,Te=Y,De=ae,i.width=Math.floor(A*ae),i.height=Math.floor(Y*ae),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(D===di){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(re)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,Y,ae,ne){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,Y,ae,ne),Ce.viewport(re.copy(Ee).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(He)},this.setScissor=function(A,Y,ae,ne){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,Y,ae,ne),Ce.scissor(me.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Ce.setScissorTest(et=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ae=!0){let ne=0;if(A){let ie=!1;if(W!==null){const Fe=W.texture.format;ie=x.has(Fe)}if(ie){const Fe=W.texture.type,Ve=M.has(Fe),Ie=Re.getClearColor(),je=Re.getClearAlpha(),ke=Ie.r,Ke=Ie.g,lt=Ie.b;Ve?(w[0]=ke,w[1]=Ke,w[2]=lt,w[3]=je,q.clearBufferuiv(q.COLOR,0,w)):(U[0]=ke,U[1]=Ke,U[2]=lt,U[3]=je,q.clearBufferiv(q.COLOR,0,U))}else ne|=q.COLOR_BUFFER_BIT}Y&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),Re.dispose(),fe.dispose(),Oe.dispose(),N.dispose(),$.dispose(),we.dispose(),Ae.dispose(),pe.dispose(),Le.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",kr),Ue.removeEventListener("sessionend",jr),Nn.stop()};function Me(A){A.preventDefault(),sv("WebGLRenderer: Context Lost."),G=!0}function We(){sv("WebGLRenderer: Context Restored."),G=!1;const A=Kt.autoReset,Y=Ne.enabled,ae=Ne.autoUpdate,ne=Ne.needsUpdate,ie=Ne.type;ze(),Kt.autoReset=A,Ne.enabled=Y,Ne.autoUpdate=ae,Ne.needsUpdate=ne,Ne.type=ie}function tt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tn(A){const Y=A.target;Y.removeEventListener("dispose",tn),Dt(Y)}function Dt(A){pi(A),N.remove(A)}function pi(A){const Y=N.get(A).programs;Y!==void 0&&(Y.forEach(function(ae){Le.releaseProgram(ae)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ae,ne,ie,Fe){Y===null&&(Y=on);const Ve=ie.isMesh&&ie.matrixWorld.determinant()<0,Ie=Ea(A,Y,ae,ne,ie);Ce.setMaterial(ne,Ve);let je=ae.index,ke=1;if(ne.wireframe===!0){if(je=be.getWireframeAttribute(ae),je===void 0)return;ke=2}const Ke=ae.drawRange,lt=ae.attributes.position;let Ye=Ke.start*ke,Ct=(Ke.start+Ke.count)*ke;Fe!==null&&(Ye=Math.max(Ye,Fe.start*ke),Ct=Math.min(Ct,(Fe.start+Fe.count)*ke)),je!==null?(Ye=Math.max(Ye,0),Ct=Math.min(Ct,je.count)):lt!=null&&(Ye=Math.max(Ye,0),Ct=Math.min(Ct,lt.count));const Qt=Ct-Ye;if(Qt<0||Qt===1/0)return;Ae.setup(ie,ne,Ie,ae,je);let Xt,Ot=at;if(je!==null&&(Xt=_e.get(je),Ot=mt,Ot.setIndex(Xt)),ie.isMesh)ne.wireframe===!0?(Ce.setLineWidth(ne.wireframeLinewidth*bn()),Ot.setMode(q.LINES)):Ot.setMode(q.TRIANGLES);else if(ie.isLine){let Pt=ne.linewidth;Pt===void 0&&(Pt=1),Ce.setLineWidth(Pt*bn()),ie.isLineSegments?Ot.setMode(q.LINES):ie.isLineLoop?Ot.setMode(q.LINE_LOOP):Ot.setMode(q.LINE_STRIP)}else ie.isPoints?Ot.setMode(q.POINTS):ie.isSprite&&Ot.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Pt=ie._multiDrawStarts,Ge=ie._multiDrawCounts,Un=ie._multiDrawCount,gt=je?_e.get(je).bytesPerElement:1,vn=N.get(ne).currentProgram.getUniforms();for(let ei=0;ei<Un;ei++)vn.setValue(q,"_gl_DrawID",ei),Ot.render(Pt[ei]/gt,Ge[ei])}else if(ie.isInstancedMesh)Ot.renderInstances(Ye,Qt,ie.count);else if(ae.isInstancedBufferGeometry){const Pt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ge=Math.min(ae.instanceCount,Pt);Ot.renderInstances(Ye,Qt,Ge)}else Ot.render(Ye,Qt)};function $n(A,Y,ae){A.transparent===!0&&A.side===_a&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,Bs(A,Y,ae),A.side=ss,A.needsUpdate=!0,Bs(A,Y,ae),A.side=_a):Bs(A,Y,ae)}this.compile=function(A,Y,ae=null){ae===null&&(ae=A),O=Oe.get(ae),O.init(Y),E.push(O),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),A!==ae&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(Y.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),O.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Fe=ie.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Ie=Fe[Ve];$n(Ie,ae,ie),ne.add(Ie)}else $n(Fe,ae,ie),ne.add(Fe)}),O=E.pop(),ne},this.compileAsync=function(A,Y,ae=null){const ne=this.compile(A,Y,ae);return new Promise(ie=>{function Fe(){if(ne.forEach(function(Ve){N.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){ie(A);return}setTimeout(Fe,10)}pt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let rs=null;function Vr(A){rs&&rs(A)}function kr(){Nn.stop()}function jr(){Nn.start()}const Nn=new O_;Nn.setAnimationLoop(Vr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){rs=A,Ue.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Ue.addEventListener("sessionstart",kr),Ue.addEventListener("sessionend",jr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(A,Y);const ae=Ue.enabled===!0&&Ue.isPresenting===!0,ne=F!==null&&(W===null||ae)&&F.begin(X,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Y),Y=Ue.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Y,W),O=Oe.get(A,E.length),O.init(Y),O.state.textureUnits=b.getTextureUnits(),E.push(O),xt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Je.setFromProjectionMatrix(xt,Xi,Y.reversedDepth),ht=this.localClippingEnabled,jt=Pe.init(this.clippingPlanes,ht),V=fe.get(A,z.length),V.init(),z.push(V),Ue.enabled===!0&&Ue.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&ln(Ve,Y,-1/0,X.sortObjects)}ln(A,Y,0,X.sortObjects),V.finish(),X.sortObjects===!0&&V.sort(oe,ye),qt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,qt&&Re.addToRenderList(V,A),this.info.render.frame++,jt===!0&&Pe.beginShadows();const ie=O.state.shadowsArray;if(Ne.render(ie,A,Y),jt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&F.hasRenderPass())===!1){const Ve=V.opaque,Ie=V.transmissive;if(O.setupLights(),Y.isArrayCamera){const je=Y.cameras;if(Ie.length>0)for(let ke=0,Ke=je.length;ke<Ke;ke++){const lt=je[ke];Zi(Ve,Ie,A,lt)}qt&&Re.render(A);for(let ke=0,Ke=je.length;ke<Ke;ke++){const lt=je[ke];En(V,A,lt,lt.viewport)}}else Ie.length>0&&Zi(Ve,Ie,A,Y),qt&&Re.render(A),En(V,A,Y)}W!==null&&he===0&&(b.updateMultisampleRenderTarget(W),b.updateRenderTargetMipmap(W)),ne&&F.end(X),A.isScene===!0&&A.onAfterRender(X,A,Y),Ae.resetDefaultState(),P=-1,B=null,E.pop(),E.length>0?(O=E[E.length-1],b.setTextureUnits(O.state.textureUnits),jt===!0&&Pe.setGlobalState(X.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?V=z[z.length-1]:V=null,Q!==null&&Q.renderEnd()};function ln(A,Y,ae,ne){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){ne&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const Ve=we.update(A),Ie=A.material;Ie.visible&&V.push(A,Ve,Ie,ae,ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const Ve=we.update(A),Ie=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ut.copy(Ve.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(Ie)){const je=Ve.groups;for(let ke=0,Ke=je.length;ke<Ke;ke++){const lt=je[ke],Ye=Ie[lt.materialIndex];Ye&&Ye.visible&&V.push(A,Ve,Ye,ae,ut.z,lt)}}else Ie.visible&&V.push(A,Ve,Ie,ae,ut.z,null)}}const Fe=A.children;for(let Ve=0,Ie=Fe.length;Ve<Ie;Ve++)ln(Fe[Ve],Y,ae,ne)}function En(A,Y,ae,ne){const{opaque:ie,transmissive:Fe,transparent:Ve}=A;O.setupLightsView(ae),jt===!0&&Pe.setGlobalState(X.clippingPlanes,ae),ne&&Ce.viewport(re.copy(ne)),ie.length>0&&Ma(ie,Y,ae),Fe.length>0&&Ma(Fe,Y,ae),Ve.length>0&&Ma(Ve,Y,ae),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Zi(A,Y,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ne.id]===void 0){const Ye=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ne.id]=new Qn(1,1,{generateMipmaps:!0,type:Ye?hi:di,minFilter:Us,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Fe=O.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||re;Fe.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Ie=X.getRenderTarget(),je=X.getActiveCubeFace(),ke=X.getActiveMipmapLevel();X.setRenderTarget(Fe),X.getClearColor(I),K=X.getClearAlpha(),K<1&&X.setClearColor(16777215,.5),X.clear(),qt&&Re.render(ae);const Ke=X.toneMapping;X.toneMapping=qi;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),O.setupLightsView(ne),jt===!0&&Pe.setGlobalState(X.clippingPlanes,ne),Ma(A,ae,ne),b.updateMultisampleRenderTarget(Fe),b.updateRenderTargetMipmap(Fe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ct=0,Qt=Y.length;Ct<Qt;Ct++){const Xt=Y[Ct],{object:Ot,geometry:Pt,material:Ge,group:Un}=Xt;if(Ge.side===_a&&Ot.layers.test(ne.layers)){const gt=Ge.side;Ge.side=Kn,Ge.needsUpdate=!0,nl(Ot,ae,ne,Pt,Ge,Un),Ge.side=gt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(Fe),b.updateRenderTargetMipmap(Fe))}X.setRenderTarget(Ie,je,ke),X.setClearColor(I,K),lt!==void 0&&(ne.viewport=lt),X.toneMapping=Ke}function Ma(A,Y,ae){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Fe=A.length;ie<Fe;ie++){const Ve=A[ie],{object:Ie,geometry:je,group:ke}=Ve;let Ke=Ve.material;Ke.allowOverride===!0&&ne!==null&&(Ke=ne),Ie.layers.test(ae.layers)&&nl(Ie,Y,ae,je,Ke,ke)}}function nl(A,Y,ae,ne,ie,Fe){A.onBeforeRender(X,Y,ae,ne,ie,Fe),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(X,Y,ae,ne,A,Fe),ie.transparent===!0&&ie.side===_a&&ie.forceSinglePass===!1?(ie.side=Kn,ie.needsUpdate=!0,X.renderBufferDirect(ae,Y,ne,ie,A,Fe),ie.side=ss,ie.needsUpdate=!0,X.renderBufferDirect(ae,Y,ne,ie,A,Fe),ie.side=_a):X.renderBufferDirect(ae,Y,ne,ie,A,Fe),A.onAfterRender(X,Y,ae,ne,ie,Fe)}function Bs(A,Y,ae){Y.isScene!==!0&&(Y=on);const ne=N.get(A),ie=O.state.lights,Fe=O.state.shadowsArray,Ve=ie.state.version,Ie=Le.getParameters(A,ie.state,Fe,Y,ae,O.state.lightProbeGridArray),je=Le.getProgramCacheKey(Ie);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=$.get(A.envMap||ne.environment,Ke),ne.envMapRotation=ne.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",tn),ke=new Map,ne.programs=ke);let lt=ke.get(je);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Ve)return ba(A,Ie),lt}else Ie.uniforms=Le.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,ae,Ie),A.onBeforeCompile(Ie,X),lt=Le.acquireProgram(Ie,je),ke.set(je,lt),ne.uniforms=Ie.uniforms;const Ye=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Pe.uniform),ba(A,Ie),ne.needsLights=os(A),ne.lightsStateVersion=Ve,ne.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=O.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function Xr(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ba(A,Y){const ae=N.get(A);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Wr(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,ne=A.length;ae<ne;ae++){const ie=A[ae];if(ie.texture!==null&&ie.boundingBox.containsPoint(L))return ie}return null}function Ea(A,Y,ae,ne,ie){Y.isScene!==!0&&(Y=on),b.resetTextureUnits();const Fe=Y.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Ie=W===null?X.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:bt.workingColorSpace,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=$.get(ne.envMap||Ve,je),Ke=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!ae.morphAttributes.position,Ct=!!ae.morphAttributes.normal,Qt=!!ae.morphAttributes.color;let Xt=qi;ne.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xt=X.toneMapping);const Ot=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ge=N.get(ne),Un=O.state.lights;if(jt===!0&&(ht===!0||A!==B)){const Ut=A===B&&ne.id===P;Pe.setState(ne,A,Ut)}let gt=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Un.state.version||Ge.outputColorSpace!==Ie||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==ke||ne.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ke||Ge.vertexTangents!==lt||Ge.morphTargets!==Ye||Ge.morphNormals!==Ct||Ge.morphColors!==Qt||Ge.toneMapping!==Xt||Ge.morphTargetsCount!==Pt||!!Ge.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ge.__version=ne.version);let vn=Ge.currentProgram;gt===!0&&(vn=Bs(ne,Y,ie),Q&&ne.isNodeMaterial&&Q.onUpdateProgram(ne,vn,Ge));let ei=!1,Ti=!1,ti=!1;const It=vn.getUniforms(),Jt=Ge.uniforms;if(Ce.useProgram(vn.program)&&(ei=!0,Ti=!0,ti=!0),ne.id!==P&&(P=ne.id,Ti=!0),Ge.needsLights){const Ut=Wr(O.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==Ut&&(Ge.lightProbeGrid=Ut,Ti=!0)}if(ei||B!==A){Ce.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(q,"projectionMatrix",A.projectionMatrix),It.setValue(q,"viewMatrix",A.matrixWorldInverse);const Ii=It.map.cameraPosition;Ii!==void 0&&Ii.setValue(q,Lt.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&It.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Ti=!0,ti=!0)}if(Ge.needsLights&&(Un.state.directionalShadowMap.length>0&&It.setValue(q,"directionalShadowMap",Un.state.directionalShadowMap,b),Un.state.spotShadowMap.length>0&&It.setValue(q,"spotShadowMap",Un.state.spotShadowMap,b),Un.state.pointShadowMap.length>0&&It.setValue(q,"pointShadowMap",Un.state.pointShadowMap,b)),ie.isSkinnedMesh){It.setOptional(q,ie,"bindMatrix"),It.setOptional(q,ie,"bindMatrixInverse");const Ut=ie.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),It.setValue(q,"boneTexture",Ut.boneTexture,b))}ie.isBatchedMesh&&(It.setOptional(q,ie,"batchingTexture"),It.setValue(q,"batchingTexture",ie._matricesTexture,b),It.setOptional(q,ie,"batchingIdTexture"),It.setValue(q,"batchingIdTexture",ie._indirectTexture,b),It.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&It.setValue(q,"batchingColorTexture",ie._colorsTexture,b));const Ai=ae.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&it.update(ie,ae,vn),(Ti||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,It.setValue(q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(Jt.envMapIntensity.value=Y.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=MA()),Ti){if(It.setValue(q,"toneMappingExposure",X.toneMappingExposure),Ge.needsLights&&Ta(Jt,ti),Fe&&ne.fog===!0&&ce.refreshFogUniforms(Jt,Fe),ce.refreshMaterialUniforms(Jt,ne,De,Te,O.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ut=Ge.lightProbeGrid;Jt.probesSH.value=Ut.texture,Jt.probesMin.value.copy(Ut.boundingBox.min),Jt.probesMax.value.copy(Ut.boundingBox.max),Jt.probesResolution.value.copy(Ut.resolution)}kc.upload(q,Xr(Ge),Jt,b)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(kc.upload(q,Xr(Ge),Jt,b),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(q,"center",ie.center),It.setValue(q,"modelViewMatrix",ie.modelViewMatrix),It.setValue(q,"normalMatrix",ie.normalMatrix),It.setValue(q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Ut=ne.uniformsGroups;for(let Ii=0,Ca=Ut.length;Ii<Ca;Ii++){const ls=Ut[Ii];pe.update(ls,vn),pe.bind(ls,vn)}}return vn}function Ta(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function os(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,Y,ae){const ne=N.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=Y,N.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ae=N.get(A);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Aa=q.createFramebuffer();this.setRenderTarget=function(A,Y=0,ae=0){W=A,ue=Y,he=ae;let ne=null,ie=!1,Fe=!1;if(A){const Ie=N.get(A);if(Ie.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(q.FRAMEBUFFER,Ie.__webglFramebuffer),re.copy(A.viewport),me.copy(A.scissor),ve=A.scissorTest,Ce.viewport(re),Ce.scissor(me),Ce.setScissorTest(ve),P=-1;return}else if(Ie.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ie.__hasExternalTextures)b.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Ie.__boundDepthTexture!==Ke){if(Ke!==null&&N.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const ke=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[Y])?ne=ke[Y][ae]:ne=ke[Y],ie=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?ne=N.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[ae]:ne=ke,re.copy(A.viewport),me.copy(A.scissor),ve=A.scissorTest}else re.copy(Ee).multiplyScalar(De).floor(),me.copy(He).multiplyScalar(De).floor(),ve=et;if(ae!==0&&(ne=Aa),Ce.bindFramebuffer(q.FRAMEBUFFER,ne)&&Ce.drawBuffers(A,ne),Ce.viewport(re),Ce.scissor(me),Ce.setScissorTest(ve),ie){const Ie=N.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,ae)}else if(Fe){const Ie=Y;for(let je=0;je<A.textures.length;je++){const ke=N.get(A.textures[je]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+je,ke.__webglTexture,ae,Ie)}}else if(A!==null&&ae!==0){const Ie=N.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ie.__webglTexture,ae)}P=-1},this.readRenderTargetPixels=function(A,Y,ae,ne,ie,Fe,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve]),je){Ce.bindFramebuffer(q.FRAMEBUFFER,je);try{const ke=A.textures[Ie],Ke=ke.format,lt=ke.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie),!Ht.textureFormatReadable(Ke)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(lt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ne&&ae>=0&&ae<=A.height-ie&&q.readPixels(Y,ae,ne,ie,k.convert(Ke),k.convert(lt),Fe)}finally{const ke=W!==null?N.get(W).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ae,ne,ie,Fe,Ve,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve]),je)if(Y>=0&&Y<=A.width-ne&&ae>=0&&ae<=A.height-ie){Ce.bindFramebuffer(q.FRAMEBUFFER,je);const ke=A.textures[Ie],Ke=ke.format,lt=ke.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ie),!Ht.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ye),q.bufferData(q.PIXEL_PACK_BUFFER,Fe.byteLength,q.STREAM_READ),q.readPixels(Y,ae,ne,ie,k.convert(Ke),k.convert(lt),0);const Ct=W!==null?N.get(W).__webglFramebuffer:null;Ce.bindFramebuffer(q.FRAMEBUFFER,Ct);const Qt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Hy(q,Qt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ye),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Fe),q.deleteBuffer(Ye),q.deleteSync(Qt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ae=0){const ne=Math.pow(2,-ae),ie=Math.floor(A.image.width*ne),Fe=Math.floor(A.image.height*ne),Ve=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;b.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,Ve,Ie,ie,Fe),Ce.unbindTexture()};const fn=q.createFramebuffer(),il=q.createFramebuffer();this.copyTextureToTexture=function(A,Y,ae=null,ne=null,ie=0,Fe=0){let Ve,Ie,je,ke,Ke,lt,Ye,Ct,Qt;const Xt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Ie=ae.max.y-ae.min.y,je=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,Ke=ae.min.y,lt=ae.isBox3?ae.min.z:0;else{const Jt=Math.pow(2,-ie);Ve=Math.floor(Xt.width*Jt),Ie=Math.floor(Xt.height*Jt),A.isDataArrayTexture?je=Xt.depth:A.isData3DTexture?je=Math.floor(Xt.depth*Jt):je=1,ke=0,Ke=0,lt=0}ne!==null?(Ye=ne.x,Ct=ne.y,Qt=ne.z):(Ye=0,Ct=0,Qt=0);const Ot=k.convert(Y.format),Pt=k.convert(Y.type);let Ge;Y.isData3DTexture?(b.setTexture3D(Y,0),Ge=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Ge=q.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Ge=q.TEXTURE_2D),Ce.activeTexture(q.TEXTURE0),Ce.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ce.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ce.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const Un=Ce.getParameter(q.UNPACK_ROW_LENGTH),gt=Ce.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=Ce.getParameter(q.UNPACK_SKIP_PIXELS),ei=Ce.getParameter(q.UNPACK_SKIP_ROWS),Ti=Ce.getParameter(q.UNPACK_SKIP_IMAGES);Ce.pixelStorei(q.UNPACK_ROW_LENGTH,Xt.width),Ce.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Xt.height),Ce.pixelStorei(q.UNPACK_SKIP_PIXELS,ke),Ce.pixelStorei(q.UNPACK_SKIP_ROWS,Ke),Ce.pixelStorei(q.UNPACK_SKIP_IMAGES,lt);const ti=A.isDataArrayTexture||A.isData3DTexture,It=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Jt=N.get(A),Ai=N.get(Y),Ut=N.get(Jt.__renderTarget),Ii=N.get(Ai.__renderTarget);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ca=0;Ca<je;Ca++)ti&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(A).__webglTexture,ie,lt+Ca),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,N.get(Y).__webglTexture,Fe,Qt+Ca)),q.blitFramebuffer(ke,Ke,Ve,Ie,Ye,Ct,Ve,Ie,q.DEPTH_BUFFER_BIT,q.NEAREST);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||N.has(A)){const Jt=N.get(A),Ai=N.get(Y);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,fn),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,il);for(let Ut=0;Ut<je;Ut++)ti?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Jt.__webglTexture,ie,lt+Ut):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Jt.__webglTexture,ie),It?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ai.__webglTexture,Fe,Qt+Ut):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ai.__webglTexture,Fe),ie!==0?q.blitFramebuffer(ke,Ke,Ve,Ie,Ye,Ct,Ve,Ie,q.COLOR_BUFFER_BIT,q.NEAREST):It?q.copyTexSubImage3D(Ge,Fe,Ye,Ct,Qt+Ut,ke,Ke,Ve,Ie):q.copyTexSubImage2D(Ge,Fe,Ye,Ct,ke,Ke,Ve,Ie);Ce.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ge,Fe,Ye,Ct,Qt,Ve,Ie,je,Ot,Pt,Xt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Fe,Ye,Ct,Qt,Ve,Ie,je,Ot,Xt.data):q.texSubImage3D(Ge,Fe,Ye,Ct,Qt,Ve,Ie,je,Ot,Pt,Xt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Fe,Ye,Ct,Ve,Ie,Ot,Pt,Xt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Fe,Ye,Ct,Xt.width,Xt.height,Ot,Xt.data):q.texSubImage2D(q.TEXTURE_2D,Fe,Ye,Ct,Ve,Ie,Ot,Pt,Xt);Ce.pixelStorei(q.UNPACK_ROW_LENGTH,Un),Ce.pixelStorei(q.UNPACK_IMAGE_HEIGHT,gt),Ce.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),Ce.pixelStorei(q.UNPACK_SKIP_ROWS,ei),Ce.pixelStorei(q.UNPACK_SKIP_IMAGES,Ti),Fe===0&&Y.generateMipmaps&&q.generateMipmap(Ge),Ce.unbindTexture()},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ce.unbindTexture()},this.resetState=function(){ue=0,he=0,W=null,Ce.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class tl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const EA=new ip(-1,1,1,-1,0,1);class TA extends Jn{constructor(){super(),this.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Dn([0,2,0,0,2,0],2))}}const AA=new TA;class V_{constructor(e){this._mesh=new Zn(AA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,EA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class CA extends tl{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jc.clone(e.uniforms),this.material=new Fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new V_(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $v extends tl{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let d,h;this.inverse?(d=0,h=1):(d=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,d,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class wA extends tl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class RA{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new rt);this._width=s.width,this._height=s.height,i=new Qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new CA(jc),this.copyPass.material.blending=Wi,this.timer=new TM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const d=this.passes[l];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),d.needsSwap){if(s){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}$v!==void 0&&(d instanceof $v?s=!0:d instanceof wA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class DA extends tl{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Tt}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,d;this.overrideMaterial!==null&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=d),e.autoClear=l}}const NA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Br extends tl{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new rt(e.x,e.y):new rt(256,256),this.clearColor=new Tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new Qn(c,d,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const S=new Qn(c,d,{type:hi});S.texture.name="UnrealBloomPass.h"+v,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const g=new Qn(c,d,{type:hi});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),d=Math.round(d/2)}const h=NA;this.highPassUniforms=Jc.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new rt(1/c,1/d),c=Math.round(c/2),d=Math.round(d/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jc.clone(jc.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:jc.vertexShader,fragmentShader:jc.fragmentShader,premultipliedAlpha:!0,blending:Qd,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Tt,this._oldClearAlpha=1,this._basic=new Os,this._fsQuad=new V_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new rt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Br.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Br.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=d}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Br.BlurDirectionX=new rt(1,0);Br.BlurDirectionY=new rt(0,1);const e_=[{sphereOpacity:.55,linewidth:.8,ringOpacity:0,bloom:.1,meshX:-1.6,meshY:.3},{sphereOpacity:.75,linewidth:1.2,ringOpacity:0,bloom:.3,meshX:1.6,meshY:-.3},{sphereOpacity:.92,linewidth:1.8,ringOpacity:.55,bloom:.7,meshX:0,meshY:0}];function Nr(r,e,i){return r+(e-r)*i}function UA({step:r}){const e=Ze.useRef(null),i=Ze.useRef({}),s=Ze.useRef(r);return Ze.useEffect(()=>{s.current=r},[r]),Ze.useEffect(()=>{const l=e.current;if(!l)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=l.clientWidth,h=l.clientHeight,m=new bA({antialias:!0,alpha:!0});m.setSize(d,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(m.domElement);const p=new nM,v=new fi(55,d/h,.1,100);v.position.z=5.5,p.add(new MM(16777215,.3));const S=new Cv(13038158,4,30);S.position.set(6,6,6),p.add(S);const g=new Cv(16734774,2,20);g.position.set(-6,-4,2),p.add(g);const y=new Kc(1.55,3),T=new Os({color:16777215,wireframe:!0,transparent:!0,opacity:.55}),D=new Zn(y,T);D.position.set(-1.6,.3,0),p.add(D);const x=new Kc(1.5,3),M=new Os({color:1710638,transparent:!0,opacity:.6}),w=new Zn(x,M);D.add(w);const U=new Qc(2,.018,8,90),L=new Os({color:13038158,transparent:!0,opacity:0}),V=new Zn(U,L);V.rotation.x=Math.PI/3.5,p.add(V);const O=new Qc(2.15,.01,8,90),z=new Os({color:16777215,transparent:!0,opacity:0}),E=new Zn(O,z);E.rotation.x=Math.PI/5,E.rotation.y=Math.PI/4,p.add(E);const F=420,X=new Float32Array(F*3);for(let ve=0;ve<F;ve++)X[ve*3]=(Math.random()-.5)*36,X[ve*3+1]=(Math.random()-.5)*22,X[ve*3+2]=(Math.random()-.5)*14-3;const G=new Jn;G.setAttribute("position",new Pi(X,3));const Q=new w_({color:13038158,size:.038,transparent:!0,opacity:.45}),ue=new dM(G,Q);p.add(ue);const he=new RA(m);he.addPass(new DA(p,v));const W=new Br(new rt(d,h),.1,.4,.82);he.addPass(W),i.current={sphere:D,wireMat:T,ring:V,ring2:E,ringMat:L,ring2Mat:z,bloom:W,composer:he,renderer:m,particles:ue};const P=new CM;let B;const re=()=>{B=requestAnimationFrame(re);const ve=P.getElapsedTime(),I=s.current,K=e_[I]??e_[0];if(!c){D.rotation.y=ve*.18,D.rotation.x=ve*.09,ue.rotation.y=ve*.025,V.rotation.z=ve*.14,E.rotation.z=-ve*.09;const Se=.028;D.position.x=Nr(D.position.x,K.meshX,Se),D.position.y=Nr(D.position.y,K.meshY,Se),V.position.x=D.position.x,V.position.y=D.position.y,E.position.x=D.position.x,E.position.y=D.position.y;const Te=.055;T.opacity=Nr(T.opacity,K.sphereOpacity,Te),L.opacity=Nr(L.opacity,K.ringOpacity,Te),z.opacity=Nr(z.opacity,K.ringOpacity*.5,Te),W.strength=Nr(W.strength,K.bloom,Te)}he.render()};re();const me=()=>{const ve=l.clientWidth,I=l.clientHeight;v.aspect=ve/I,v.updateProjectionMatrix(),m.setSize(ve,I),he.setSize(ve,I)};return window.addEventListener("resize",me),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",me),l.contains(m.domElement)&&l.removeChild(m.domElement),m.dispose()}},[]),C.jsx("div",{ref:e,className:"craft-canvas"})}const LA=["What's your main stack?","Tell me about UMI","Are you available for hire?"];function OA({lang:r="en"}){const[e,i]=Ze.useState(!1),[s,l]=Ze.useState([{role:"assistant",content:r==="es"?"¡Hola! Soy el asistente de David. ¿En qué te puedo ayudar?":"Hi! I'm David's assistant. What would you like to know?"}]),[c,d]=Ze.useState(""),[h,m]=Ze.useState(!1),p=Ze.useRef(null),v=Ze.useRef(null);Ze.useEffect(()=>{var y;(y=p.current)==null||y.scrollIntoView({behavior:"smooth"})},[s]),Ze.useEffect(()=>{e&&setTimeout(()=>{var y;return(y=v.current)==null?void 0:y.focus()},100)},[e]),Ze.useEffect(()=>{const y=T=>{T.key==="Escape"&&i(!1)};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[]);const S=async y=>{const T=y.trim();if(!T||h)return;d("");const D=[...s,{role:"user",content:T}];l(D),m(!0);try{const M=await(await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:D})})).json();l([...D,{role:"assistant",content:M.text}])}catch{l([...D,{role:"assistant",content:"Something went wrong. Try again."}])}finally{m(!1)}},g=y=>{y.preventDefault(),S(c)};return C.jsxs(C.Fragment,{children:[C.jsx("button",{className:"chat-fab",onClick:()=>i(y=>!y),"aria-label":"Open chat",children:e?"✕":"💬"}),e&&C.jsxs("div",{className:"chat-panel",children:[C.jsxs("div",{className:"chat-header",children:[C.jsx("span",{className:"chat-header-dot"}),C.jsx("strong",{children:"Ask David's AI"})]}),C.jsxs("div",{className:"chat-messages",children:[s.map((y,T)=>C.jsx("div",{className:`chat-msg chat-msg--${y.role}`,children:y.content},T)),h&&C.jsxs("div",{className:"chat-msg chat-msg--assistant chat-typing",children:[C.jsx("span",{}),C.jsx("span",{}),C.jsx("span",{})]}),C.jsx("div",{ref:p})]}),s.length===1&&C.jsx("div",{className:"chat-suggestions",children:LA.map(y=>C.jsx("button",{className:"chat-suggestion",onClick:()=>S(y),children:y},y))}),C.jsxs("form",{className:"chat-form",onSubmit:g,children:[C.jsx("input",{ref:v,className:"chat-input",value:c,onChange:y=>d(y.target.value),placeholder:r==="es"?"Escribe aquí...":"Ask anything...",disabled:h}),C.jsx("button",{className:"chat-send",type:"submit",disabled:h||!c.trim(),children:"→"})]})]})]})}const PA={primary:"#C6F24E",secondary:"#2D1B69",tertiary:"#FF5A36",borderW:3,shadowOff:6,rot:2,displayWeight:900,dark:!0},IA=[{year:"2018",skills:"Java · GIMP"},{year:"2019",skills:".NET · C#"},{year:"2021",skills:"Node.js · Angular · MongoDB · Python"},{year:"2022",skills:"Spring Boot · PostgreSQL"},{year:"2023",skills:"Unity · Python · Laravel · Vue.js"},{year:"2024",skills:"React · LangChain · Docker · Cursor"},{year:"2025",skills:"NestJS · Next.js · AWS · OpenAI · N8N"},{year:"2026",skills:"SST · mem0 · MCPs",active:!0}],FA={en:{nav:{work:"Work",clients:"Clients",stack:"Stack",experience:"Experience",contact:"Contact"},hero:{tag:"Available for new projects",title1:"Developer",title2:"building",title3:"seamless",title4:"UX.",sub:"Hi! I'm David — a multi-disciplinary developer and user-experience enthusiast based in Ecuador. I turn rough concepts into shippable, opinionated software.",cta1:"Show my work",cta2:"Email me",cta3:"3D Portfolio ↗",sticker:`Let's
build
something`,meta:[{k:"5+",v:"yrs shipping"},{k:"9+",v:"products live"},{k:"1",v:"springer paper"},{k:"EC",v:"based in Ecuador"}]},work:{label:"/ 02 — selected work",title:"A small selection of recent projects.",desc:"From enterprise AI systems to learning platforms — here's what I've been shipping.",filters:["All","AI","LMS","CRM","Web","Paper","Freelancing"],showMore:"Show more",showLess:"Show less",caseStudy:"Case study ↗",viewDetail:"→ Details",close:"✕ Close",visitSite:"Visit site ↗"},testimonials:{label:"/ 03 — kind words",title:"Kind words from satisfied clients.",desc:"A few notes from the people I've collaborated with over the years."},stack:{label:"Tools of the trade"},experience:{label:"/ 05 — experience",title:"My work experience.",desc:"Where I've been, what I shipped, what I learned."},scrolly:{label:"/ 04 — how I build",title:"One developer. Every layer.",desc:"Design, code, automation, infra — the same person owns all of it. Here's the process, step by step."},craft:{label:"/ 06 — the craft",title:"Code is just the surface.",desc:"Spirit, mind, body — three pillars I train every day. Each one feeds the others. The code is just where it shows.",tesseract:"Below: a tesseract — the 4D equivalent of a cube. What you see is its shadow projected into 3D, rotating through a fourth dimension you can't look at directly."},paper:{label:"/ 07 — published research",title:"Shooting Range Simulator.",venue:"BICA 2023 · Springer, Vol. 1130",desc:"Real-time shooting simulator with full-body motion tracking — built with Unity 3D, Microsoft Kinect 2, OpenCV, and a custom ESP32 hardware target. Presented at the 12th Annual International Conference on Biologically Inspired Cognitive Architectures.",cta:"Read the paper ↗",slides:[{src:"/shooter1.png",caption:"Game view — real-time shooting simulation interface."},{src:"/shooter2.png",caption:"Hardware placement — Kinect 2 and ESP32 target position in the physical scene."},{src:"/shooter3.png",caption:"Algorithm — visual graph of the motion-tracking and shot-detection pipeline."}]},contact:{label:"/ 08 — get in touch",title1:"Let's build",title2:"something",title3:"loud.",sub:"Got a project in mind? Drop a line. I reply within 24 hours, usually with a tough question and a lofi recommendation.",emailLabel:"Email",telLabel:"Phone",copyHint:"Click to copy",copied:"Copied!",foot:"Built with React, CSS, and stubborn attention to detail."}},es:{nav:{work:"Proyectos",clients:"Clientes",stack:"Stack",experience:"Experiencia",contact:"Contacto"},hero:{tag:"Disponible para nuevos proyectos",title1:"Developer",title2:"creando",title3:"experiencias",title4:"únicas.",sub:"¡Hola! Soy David — desarrollador multidisciplinario y entusiasta de la experiencia de usuario, radicado en Ecuador. Convierto conceptos difusos en software funcional y con carácter.",cta1:"Ver proyectos",cta2:"Escríbeme",cta3:"Portfolio 3D ↗",sticker:`Hagamos
algo
juntos`,meta:[{k:"5+",v:"años desarrollando"},{k:"9+",v:"productos en vivo"},{k:"1",v:"paper springer"},{k:"EC",v:"desde Ecuador"}]},work:{label:"/ 02 — proyectos seleccionados",title:"Una selección de proyectos recientes.",desc:"Desde sistemas IA empresariales hasta plataformas de aprendizaje.",filters:["Todos","IA","LMS","CRM","Web","Paper","Freelancing"],showMore:"Ver más",showLess:"Ver menos",caseStudy:"Caso detallado ↗",viewDetail:"→ Detalles",close:"✕ Cerrar",visitSite:"Ver sitio ↗"},testimonials:{label:"/ 03 — testimonios",title:"Palabras amables de clientes satisfechos.",desc:"Algunas notas de las personas con las que he colaborado."},stack:{label:"Herramientas"},experience:{label:"/ 05 — experiencia",title:"Mi experiencia laboral.",desc:"Dónde he estado, qué envié, qué aprendí."},scrolly:{label:"/ 04 — cómo construyo",title:"Un desarrollador. Todas las capas.",desc:"Diseño, código, automatización, infra — la misma persona lo dueña todo. Así es el proceso."},craft:{label:"/ 06 — el oficio",title:"El código es solo la superficie.",desc:"Espíritu, mente y cuerpo — tres pilares que entreno cada día. Cada uno alimenta a los demás. El código es solo donde se nota.",tesseract:"Abajo: un teseracto — el equivalente 4D de un cubo. Lo que ves es su sombra proyectada en 3D, girando en una cuarta dimensión que no puedes mirar directamente."},paper:{label:"/ 07 — investigación publicada",title:"Simulador de campo de tiro.",venue:"BICA 2023 · Springer, Vol. 1130",desc:"Simulador de tiro en tiempo real con rastreo corporal completo — construido con Unity 3D, Microsoft Kinect 2, OpenCV y hardware ESP32 personalizado. Presentado en la 12ª Conferencia Internacional Anual de Arquitecturas Cognitivas de Inspiración Biológica.",cta:"Leer el paper ↗",slides:[{src:"/shooter1.png",caption:"Vista del juego — interfaz del simulador de tiro en tiempo real."},{src:"/shooter2.png",caption:"Ubicación del hardware — posición del Kinect 2 y el objetivo ESP32 en la escena física."},{src:"/shooter3.png",caption:"Algoritmo — gráfica visual del pipeline de rastreo de movimiento y detección de disparo."}]},contact:{label:"/ 08 — contáctame",title1:"Hagamos",title2:"algo",title3:"fuerte.",sub:"¿Tienes un proyecto en mente? Escríbeme. Respondo en menos de 24 horas, generalmente con una pregunta difícil y una recomendación de lofi.",emailLabel:"Correo",telLabel:"Teléfono",copyHint:"Click para copiar",copied:"¡Copiado!",foot:"Hecho con React, CSS y atención obsesiva al detalle."}}},t_=[{id:1,title:"Benefit Match Center",cat:"Web",desc:{en:"Section 125 benefits platform — React 19 SPA on AWS S3+CloudFront, two serverless Lambda functions for form handling and a streaming AI chat widget, with Resend email delivery.",es:"Plataforma de beneficios Section 125 — SPA React 19 en AWS S3+CloudFront, dos funciones Lambda serverless para formularios y chat IA en streaming, con entrega de email vía Resend."},tech:["React 19","AWS Lambda","SST","CloudFront","Claude API"],color:"#0F1A2E",textColor:"#C49B3C",link:"https://benefitmatchcenter.com/",detailSlug:"bmc"},{id:2,title:"UMI — Unified Meeting Intel",cat:"AI",desc:{en:"Multi-platform meeting integration for Google Meet, Zoom, and Teams — transcription analysis, third-party transcript uploads, AI chat flows, and real-time statistics.",es:"Integración de reuniones multi-plataforma (Meet, Zoom, Teams) con análisis de transcripciones, carga de transcripts externos, flujos de chat IA y estadísticas en tiempo real."},tech:["NestJS","Next.js","AWS Lambda","OpenAI","PostgreSQL"],color:"#1C1D20",textColor:"#6366F1",link:"https://d9shobjqv3rms.cloudfront.net/",detailSlug:"umi"},{id:3,title:"Commission Tracker (CT)",cat:"AI",desc:{en:"Serverless analyzer for 52 companies with dynamic prompts, PDF OCR, and queue-based flows for commission data validation. Deployed on AWS Lambda with GitHub Actions CI/CD.",es:"Analizador serverless para 52 empresas con prompts dinámicos, OCR de PDF y flujos de cola para validación de comisiones. Desplegado en AWS Lambda con CI/CD en GitHub Actions."},tech:["AWS Lambda","OpenAI","OCR","GitHub Actions","Node.js"],color:"#121315",textColor:"#0EA5E9",link:"#",detailSlug:"ct"},{id:4,title:"N8N Relatividad IA",cat:"AI",desc:{en:"Multiple self-hosted N8N chatbots, one per customer — orchestrating LLM conversations with isolated pipelines and guardrails.",es:"N8N multi-cliente auto-hospedado con chatbots aislados por cliente que orquestan conversaciones LLM."},tech:["N8N","Docker","LangChain","Evolution API"],color:"#000000",textColor:"#ffffff",link:"https://www.relatividadia.com/",previewImg:"/projects/relatividad/relatividad-0.jpg"},{id:5,title:"Entropía N8N Studio",cat:"Freelancing",desc:{en:"AI automation agency delivering end-to-end voice and chat pipelines. N8N agentic flows, GoHighLevel embedded apps, ElevenLabs voice cloning, Twilio SMS/voice, Retell AI multi-turn voice agents, and WhatsApp lead funnels connected to CRM webhooks.",es:"Agencia de automatización IA con pipelines de voz y chat end-to-end. Flujos agénticos N8N, apps embebidas en GoHighLevel, voz ElevenLabs, SMS/voz Twilio, agentes de voz Retell AI y funnels WhatsApp conectados a CRM."},tech:["N8N","GoHighLevel","ElevenLabs","Twilio","Retell AI","WhatsApp API"],color:"#1a0533",textColor:"#C6F24E",link:"https://entropia-n8n-studio.vercel.app/en",detailSlug:"entropia"},{id:10,title:"Atiende — CRM WhatsApp",cat:"CRM",desc:{en:"WhatsApp ticketing CRM wired into N8N automations — full customer lifecycle from first message to resolution.",es:"CRM de tickets WhatsApp conectado a N8N — ciclo completo del cliente desde el primer mensaje hasta la resolución."},tech:["Next.js","N8N","Appwrite","WhatsApp API"],color:"#C6F24E",textColor:"#111111",link:"#"},{id:6,title:"Qubex LLM",cat:"AI",desc:{en:"A cutting-edge assistant exposing large language models through a polished chat UI.",es:"Asistente de punta que expone LLMs a través de una UI de chat pulida."},tech:["Next.js","React","OpenAI","Vercel"],color:"#0B1121",textColor:"#A78BFA",link:"https://qubex-global.vercel.app/",detailSlug:"qubex"},{id:7,title:"Fenix Conocimiento",cat:"LMS",desc:{en:"Learning management system for Fenix's internal knowledge base — custom theme, course catalog, and ChatBot LLM integration.",es:"LMS para la base de conocimiento interna de Fenix — tema personalizado, catálogo de cursos e integración ChatBot LLM."},tech:["Moodle","PHP","MySQL","Grafana"],color:"#111111",textColor:"#ffffff",link:"https://conocimiento.mysistemafenix.com",previewImg:"/projects/fenix/fenix-0.jpg"},{id:8,title:"Taurhus Capacitaciones",cat:"LMS",desc:{en:"Full LMS for online courses with custom theme, enrollment flows, certificates, and Laravel Mix Vue.js integrations.",es:"LMS completo para cursos en línea con tema personalizado, flujos de matrícula, certificados e integraciones Laravel Mix Vue.js."},tech:["Moodle","Laravel","Vue.js","MySQL","PHP"],color:"#2D1B69",textColor:"#ffffff",link:"https://taurhus.com.ec"},{id:9,title:"Shooting Range Simulator",cat:"Paper",desc:{en:"Real-time shooting simulator with body tracking — Unity 3D, Kinect 2, OpenCV, and ESP32 hardware integration. Published at BICA 2023 (Springer, Volume 1130).",es:"Simulador de tiro en tiempo real con rastreo corporal — Unity 3D, Kinect 2, OpenCV e integración ESP32. Publicado en BICA 2023 (Springer, Volumen 1130)."},tech:["Unity","OpenCV","Kinect 2","ESP32","Python"],color:"#111111",textColor:"#C6F24E",link:"#paper"}],jo={bmc:{en:{description:"Section 125 benefits platform built for US employers. React 19 SPA deployed on AWS S3 + CloudFront, with two serverless Lambda functions handling form submissions and a streaming AI chat widget powered by Claude API.<br/><br/>Email delivery via Resend. Fully managed infrastructure using SST v4 — zero servers, zero idle cost.",images:[{src:"/projects/bmc/bmc-0.jpg",caption:"Hero section"},{src:"/projects/bmc/bmc-1.jpg",caption:"Benefits features"},{src:"/projects/bmc/bmc-2.jpg",caption:"AI chat widget"}]},es:{description:"Plataforma de beneficios Section 125 para empleadores de EE.UU. SPA React 19 en AWS S3 + CloudFront, con dos funciones Lambda serverless para formularios y un chat IA en streaming con Claude API.<br/><br/>Entrega de emails vía Resend. Infraestructura gestionada con SST v4 — sin servidores, sin costo inactivo.",images:[{src:"/projects/bmc/bmc-0.jpg",caption:"Sección hero"},{src:"/projects/bmc/bmc-1.jpg",caption:"Beneficios y características"},{src:"/projects/bmc/bmc-2.jpg",caption:"Chat IA widget"}]}},umi:{en:{description:"Multi-platform meeting intelligence system for Google Meet, Zoom, and Teams. Transcription analysis, third-party transcript uploads, AI chat flows over meeting content, and real-time statistics dashboard.<br/><br/>NestJS API on AWS Lambda, Next.js frontend, OpenAI Whisper for transcription, mem0 for persistent AI memory across sessions. Deployed with SST v4 + GitHub Actions CI/CD.",images:[{src:"/projects/umi/umi-0.jpg",caption:"Landing hero"},{src:"/projects/umi/umi-1.jpg",caption:"Features overview"},{src:"/projects/umi/umi-2.jpg",caption:"Platform details"}]},es:{description:"Sistema de inteligencia de reuniones multi-plataforma para Google Meet, Zoom y Teams. Análisis de transcripciones, carga de transcripts externos, flujos de chat IA sobre el contenido y panel de estadísticas en tiempo real.<br/><br/>API NestJS en AWS Lambda, frontend Next.js, OpenAI Whisper para transcripción, mem0 para memoria IA persistente. Desplegado con SST v4 + GitHub Actions.",images:[{src:"/projects/umi/umi-0.jpg",caption:"Hero del landing"},{src:"/projects/umi/umi-1.jpg",caption:"Resumen de funciones"},{src:"/projects/umi/umi-2.jpg",caption:"Detalles de la plataforma"}]}},ct:{en:{description:"Serverless commission data analyzer for 52 insurance companies. Dynamic prompt templates per company, PDF OCR pipeline with Tesseract, and queue-based flows for batch processing and human-review escalation.<br/><br/>Deployed on AWS Lambda with GitHub Actions CI/CD. Processes hundreds of commission statements per run with structured JSON output for downstream reconciliation.",images:[{src:"/projects/ct/ct-0.jpg",caption:"Landing page"},{src:"/projects/ct/ct-1.jpg",caption:"Features section"}]},es:{description:"Analizador serverless de comisiones para 52 compañías de seguros. Plantillas de prompts dinámicas por empresa, pipeline OCR de PDFs con Tesseract y flujos de cola para procesamiento en lote y escalación a revisión humana.<br/><br/>Desplegado en AWS Lambda con GitHub Actions. Procesa cientos de estados de comisión por ejecución con salida JSON estructurada.",images:[{src:"/projects/ct/ct-0.jpg",caption:"Página principal"},{src:"/projects/ct/ct-1.jpg",caption:"Sección de funciones"}]}},entropia:{en:{description:"AI automation agency delivering end-to-end voice and chat pipelines for SMBs. N8N agentic flows with multi-step tool calls, RAG memory, and fallback routing.<br/><br/>Integrates GoHighLevel embedded apps, ElevenLabs voice cloning for IVR, Twilio SMS/voice, Retell AI multi-turn voice agents, and WhatsApp funnels wired into CRM webhooks.",images:[{src:"/projects/entropia/entropia-0.jpg",caption:"Agency landing"},{src:"/projects/entropia/entropia-1.jpg",caption:"Services section"}]},es:{description:"Agencia de automatización IA con pipelines de voz y chat end-to-end para PYMEs. Flujos agénticos N8N con llamadas a herramientas multi-paso, memoria RAG y enrutamiento de fallback.<br/><br/>Integra apps embebidas en GoHighLevel, clonación de voz ElevenLabs para IVR, Twilio SMS/voz, agentes de voz multi-turno Retell AI y funnels WhatsApp conectados a webhooks de CRM.",images:[{src:"/projects/entropia/entropia-0.jpg",caption:"Landing de la agencia"},{src:"/projects/entropia/entropia-1.jpg",caption:"Sección de servicios"}]}},qubex:{en:{description:"Polished AI chat interface exposing large language models through a clean, fast UI. Built with Next.js and React, deployed on Vercel.<br/><br/>Supports streaming responses, conversation history, and multiple model configurations. Designed for simplicity — no friction between the user and the model.",images:[{src:"/projects/qubex/qubex-0.jpg",caption:"Chat interface"},{src:"/projects/qubex/qubex-1.jpg",caption:"Model features"}]},es:{description:"Interfaz de chat IA pulida que expone grandes modelos de lenguaje a través de una UI limpia y rápida. Construida con Next.js y React, desplegada en Vercel.<br/><br/>Soporta respuestas en streaming, historial de conversación y múltiples configuraciones de modelos. Diseñada para la simplicidad — sin fricción entre el usuario y el modelo.",images:[{src:"/projects/qubex/qubex-0.jpg",caption:"Interfaz de chat"},{src:"/projects/qubex/qubex-1.jpg",caption:"Funciones del modelo"}]}}},Ur=[{img:"/eli.jpeg",initials:"ET",name:"Eli Tabala",role:"Pinecrest Consulting",quote:{en:"What sets David apart is that he thinks like a product owner and executes like an engineer. Frontend, backend, infrastructure, automations — he handled all of it without ever needing to split the work. Reliable, fast, and genuinely invested in the outcome.",es:"Lo que distingue a David es que piensa como dueño de producto y ejecuta como ingeniero. Frontend, backend, infraestructura, automatizaciones — lo manejó todo sin necesidad de dividir el trabajo. Confiable, rápido y genuinamente comprometido con el resultado."}},{img:"/shaine.jpeg",initials:"SR",name:"Shaine Rucker",role:"Pinecrest Consulting",quote:{en:"David doesn't wait to be told what to build — he reads the requirements, proposes the architecture, and ships it. He took our product from a set of specs to a live AWS deployment faster than any developer I've worked with. The kind of engineer who owns the whole thing end to end.",es:"David no espera que le digan qué construir — lee los requisitos, propone la arquitectura y lo lanza. Llevó nuestro producto de unas especificaciones a un despliegue en vivo en AWS más rápido que cualquier desarrollador con el que haya trabajado. El tipo de ingeniero que dueña todo de punta a punta."}},{img:"/emilio.jpg",initials:"ER",name:"Emilio Rosado",role:"CEO, Relatividad IA",quote:{en:"David automated processes at Relatividad IA that we thought would require a full team. In weeks he had N8N workflows handling WhatsApp conversations, classifying leads, and routing support tickets — completely hands-off. The system he built became the backbone of our entire operation.",es:"David automatizó procesos en Relatividad IA que pensábamos requerirían un equipo completo. En semanas tenía workflows de N8N manejando conversaciones de WhatsApp, clasificando leads y enrutando tickets — completamente autónomo. El sistema que construyó se convirtió en la columna vertebral de nuestra operación."}},{img:"/wendy.jpeg",initials:"WE",name:"Wendy Espósito",role:"CEO, Taurhus Capacitaciones",quote:{en:"Working with David has been an enriching experience. His expertise in full-stack development, coupled with his commitment to meeting deadlines and exceeding expectations, truly set him apart. He was instrumental in building a Learning Management System with Moodle.",es:"Trabajar con David ha sido una experiencia enriquecedora. Su experiencia en full-stack y su compromiso con las fechas lo distinguen. Fue fundamental construyendo un LMS con Moodle."}},{img:"/maritza.png",initials:"MA",name:"Maritza Andrade",role:"Project Manager, Innovar Digital",quote:{en:"David is an exceptional developer and educator with a unique ability to turn ideas into reality. While working at Algoritmics, we taught programming to kids, creating a positive and engaging learning environment. His creativity and technical expertise make him an incredible asset.",es:"David es un desarrollador y educador excepcional con la habilidad única de convertir ideas en realidad. En Algoritmics enseñamos programación a niños creando un ambiente positivo. Su creatividad lo hacen un activo increíble."}},{img:"/jorge.jpg",initials:"JA",name:"Jorge Anchatuña",role:"CEO, Fenix Corp",quote:{en:"Collaborating with David was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Together we innovated in enterprise AI systems and knowledge platforms, where his expertise truly shone.",es:"Colaborar con David fue un placer absoluto. Su profesionalismo, puntualidad y dedicación a resultados excepcionales fueron evidentes durante todo el proyecto. Juntos innovamos en sistemas IA empresariales y plataformas de conocimiento."}}],n_=["AWS Lambda","Docker","GitHub Actions","Next.js","React","Node.js","NestJS","N8N","LangChain","OpenAI","PostgreSQL","Qdrant","MongoDB","Unity","Cursor","Moodle"],zA=[{badge:"EN",category:"freelancing",title:{en:"AI Automation Founder",es:"Fundador de Automatización IA"},where:"Entropía N8N Studio",location:"Ecuador",period:"2025 — Present",link:"https://entropia-n8n-studio.vercel.app/en",desc:{en:"AI automation agency delivering end-to-end voice and chat pipelines for SMBs. Build N8N agentic flows with multi-step tool calls, RAG memory, and fallback routing. Develop GoHighLevel embedded apps, Twilio SMS/voice integrations, ElevenLabs voice cloning for IVR, and Retell AI multi-turn voice agents for lead qualification. Automate WhatsApp funnels connected to CRM webhooks.",es:"Agencia de automatización IA con pipelines de voz y chat end-to-end para PYMEs. Flujos agénticos N8N, apps embebidas en GoHighLevel, Twilio SMS/voz, clonación de voz ElevenLabs para IVR y agentes de voz Retell AI para calificación de leads. Funnels WhatsApp conectados a webhooks de CRM."}},{badge:"PC",category:"work",title:{en:"Full Stack Developer",es:"Desarrollador Full Stack"},where:"Pinecrest Consulting",location:"United States",period:"Sept. 2025 — May 2026",desc:{en:"Built CT (Commission Tracker) and UMI (Unified Meeting Integrated) as serverless AWS Lambda products with GitHub Actions CI/CD. CT uses a two-step dynamic prompt architecture — company identification then company-specific extraction — to analyze 52 companies across OCR-parsed PDFs. UMI is a full meeting intelligence platform (Meet, Zoom, Teams) with AI transcription, RAG chat, action-item extraction, and mem0 persistent memory. Implemented social post scheduling via Metricool API and full SEO stack (JSON-LD, GA4, Open Graph, llms.txt) for BMC.",es:"Desarrollé CT y UMI como productos serverless en AWS Lambda con CI/CD en GitHub Actions. CT usa arquitectura de prompts dinámica en dos pasos para analizar 52 empresas en PDFs con OCR. UMI es una plataforma de inteligencia de reuniones (Meet, Zoom, Teams) con transcripción IA, chat RAG, extracción de accionables y memoria persistente mem0. Implementé publicación automática en redes vía Metricool API y stack SEO completo para BMC."}},{badge:"D2",category:"work",title:{en:"AI / Web Bot Developer",es:"Desarrollador AI / Web Bot"},where:"D2V",location:"Germany",period:"Aug. 2025 — Oct. 2025",desc:{en:"RAG Voice Chat, Notion–Mistral automations, Oura Ring API integrations, and custom AI tooling. Projects handled under strict NDA.",es:"RAG Voice Chat, automatizaciones Notion–Mistral, integraciones con Oura Ring API y tooling IA personalizado. Proyectos bajo estricta NDA."}},{badge:"RI",category:"work",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Relatividad IA",location:"Quito, Ecuador",period:"Dec. 2024 — Aug. 2025",desc:{en:"Developed a Logistic Tracker SaaS and WhatsApp CRM platform — N8N orchestration, Evolution API, AWS ECS, multi-tenant architecture. Built AI voice agents with ElevenLabs + Twilio + Retell AI for client-facing IVR flows, and integrated GoHighLevel CRM pipelines for automated lead routing and follow-up sequences.",es:"Desarrollé SaaS de rastreo logístico y CRM WhatsApp — orquestación N8N, Evolution API, AWS ECS, arquitectura multi-tenant. Construí agentes de voz IA con ElevenLabs + Twilio + Retell AI para flujos IVR y pipelines GoHighLevel para enrutamiento y seguimiento automático de leads."}},{badge:"FC",category:"work",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Fenix Corp",location:"Latacunga, Ecuador",period:"May 2024 — Dec. 2024",desc:{en:"Deployed a ChatBot LLM system, Grafana monitoring dashboards, Apache Guacamole remote access, and Moodle LMS for internal knowledge management.",es:"Desplegué un sistema ChatBot LLM, dashboards de monitoreo en Grafana, acceso remoto con Apache Guacamole y Moodle para gestión del conocimiento interno."}},{badge:"AL",category:"work",title:{en:"Programming Instructor",es:"Instructor de Programación"},where:"Algorithmics International School",location:"Latacunga, Ecuador",period:"Sept. 2023 — Oct. 2024",desc:{en:"Taught Python, visual programming, and game design to children and teens — building structured curricula and fostering computational thinking in a bilingual environment.",es:"Enseñé Python, programación visual y diseño de videojuegos a niños y adolescentes — diseñando currículos estructurados y fomentando el pensamiento computacional en un entorno bilingüe."}},{badge:"TC",category:"work",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Taurhus Capacitaciones",location:"Illuchi, Ecuador",period:"Apr. 2023 — May 2024",desc:{en:"Built and deployed a Moodle-based LMS with Laravel Mix Vue.js integrations, custom enrollment flows, certificates, and API connectors for course management.",es:"Construí y desplegué un LMS basado en Moodle con integraciones Laravel Mix Vue.js, flujos de matrícula personalizados, certificados y conectores API."}},{badge:"ES",category:"work",title:{en:"Game Engine / AI Developer",es:"Desarrollador Game Engine / IA"},where:"ESPE · Taurhus Capacitaciones",location:"Belisario Quevedo, Ecuador",period:"Aug. 2021 — Apr. 2023",desc:{en:"Designed and built a real-time shooting range simulator using Unity, OpenCV body tracking, Kinect 2, and ESP32 hardware. Research published at BICA 2023 (Springer, Volume 1130).",es:"Diseñé y construí un simulador de polígono de tiro en tiempo real con Unity, rastreo corporal OpenCV, Kinect 2 y hardware ESP32. Investigación publicada en BICA 2023 (Springer, Volumen 1130)."}}],i_=[{num:"01",title:{en:"Read the brief, own the problem",es:"Lee el brief, dueña el problema"},body:{en:"No PM in the middle. I read the requirements, map the data model, identify edge cases, and propose the stack — before writing a single line.",es:"Sin PM de por medio. Leo los requisitos, mapeo el modelo de datos, identifico casos borde y propongo el stack — antes de escribir una línea."},stat:{en:"3–5 days · discovery",es:"3–5 días · discovery"},project:{en:"↳ BMC — The client delivered a structured requirements doc covering Section 125 benefits logic, the chat widget flow, and the email capture form. I read it, modeled the data, proposed the stack (React + Lambda + SST), and started building the same week.",es:"↳ BMC — El cliente entregó un documento estructurado con la lógica de beneficios Section 125, el flujo del chat widget y el formulario de captura. Lo leí, modelé los datos, propuse el stack (React + Lambda + SST) y empecé a construir esa misma semana."}},{num:"02",title:{en:"Design, build, wire — in parallel",es:"Diseña, construye, conecta — en paralelo"},body:{en:"UI, backend, and API contracts move at the same time. Components are built as the system takes shape — no hand-off, no waiting for approvals.",es:"UI, backend y contratos de API avanzan al mismo tiempo. Los componentes se construyen a medida que el sistema toma forma — sin handoffs ni esperas."},stat:{en:"2–4 weeks · build",es:"2–4 semanas · construcción"},project:{en:"↳ UMI — Next.js frontend, NestJS backend, PostgreSQL, S3, and OpenAI all built in the same sprint. The recording upload UI, the transcription pipeline, and the AI chat interface shipped together — no layer waited for another.",es:"↳ UMI — Frontend en Next.js, backend en NestJS, PostgreSQL, S3 y OpenAI construidos en el mismo sprint. La UI de carga, el pipeline de transcripción y el chat IA salieron juntos — ninguna capa esperó a otra."}},{num:"03",title:{en:"Automate what repeats",es:"Automatiza lo que se repite"},body:{en:"Any manual step that runs more than once gets automated. N8N workflows, AI agents, OCR pipelines, webhooks — if a human is doing it on a schedule, a machine should do it instead.",es:"Cualquier paso manual que se repita más de una vez se automatiza. N8N, agentes IA, pipelines OCR, webhooks — si un humano lo hace con regularidad, una máquina debería hacerlo."},stat:{en:"−80% manual tasks",es:"−80% tareas manuales"},project:{en:"↳ Relatividad IA + CT — At Relatividad IA, N8N workflows replaced a support team's daily repetition: WhatsApp messages classified, routed, and resolved automatically. At CT, PDF commission reports flow through Tesseract OCR → OpenAI normalization → GitHub Actions — what took hours now takes seconds.",es:"↳ Relatividad IA + CT — En Relatividad IA, workflows de N8N reemplazaron la repetición diaria del equipo de soporte: mensajes de WhatsApp clasificados, enrutados y resueltos automáticamente. En CT, los reportes PDF de comisiones pasan por OCR → OpenAI → GitHub Actions — lo que tardaba horas ahora tarda segundos."}},{num:"04",title:{en:"Deploy it. Own it.",es:"Despliégalo. Dueñalo."},body:{en:"The same person who designed and built it ships it to production. SST, GitHub Actions, AWS Lambda — one command, zero downtime, no handoff to a DevOps team.",es:"La misma persona que diseñó y construyó lo despliega a producción. SST, GitHub Actions, AWS Lambda — un comando, cero downtime, sin pasarle el testigo a nadie."},stat:{en:"Live · zero downtime",es:"En vivo · cero downtime"},project:{en:"↳ UMI + BMC — Both run on AWS Lambda via SST v4. One `sst deploy` ships the full stack: API, frontend, database migrations, scheduled jobs. GitHub Actions handles CI. The developer who built it monitors it and fixes it — no tickets, no handoffs.",es:"↳ UMI + BMC — Ambos corren en AWS Lambda con SST v4. Un `sst deploy` lanza todo el stack: API, frontend, migraciones, jobs. GitHub Actions maneja el CI. El mismo desarrollador que lo construyó lo monitorea y lo arregla — sin tickets, sin pasos de mano."}}],Xo=[{num:"01",title:{en:"Body — Built for the finish line",es:"Cuerpo — Hecho para la meta"},body:{en:"Triathlon training — swim, bike, run — works the same loop as coding: push hard, recover right, go again. The discipline that gets you to the finish line is the same one that ships clean software.",es:"El triatlón — nada, bici, carrera — corre con el mismo ciclo que el código: empujar fuerte, recuperarse bien, volver. La disciplina que te lleva a la meta es la misma que te lleva al deploy."},stat:{en:"Swim · Bike · Run",es:"Nada · Bici · Carrera"},photo:{type:"embed",permalink:"https://www.instagram.com/p/DWNJlxEjm_3/",pos:"photo-tr"}},{num:"02",title:{en:"Mind — Trained by the craft",es:"Mente — Entrenada por el oficio"},body:{en:"Every hard project is a mental rep. Deep study, hard problems, deliberate practice. Systems thinking and clean architecture aren't talent — they're trained, same as any muscle.",es:"Cada proyecto difícil es una repetición mental. Estudio profundo, problemas duros, práctica deliberada. El pensamiento sistémico y la arquitectura limpia no son talento — se entrenan, como cualquier músculo."},stat:{en:"Study · Build · Reflect",es:"Estudia · Construye · Reflexiona"},photo:{type:"embed",permalink:"https://www.instagram.com/reel/DKuQIPAMqzG/",pos:"photo-bl"}},{num:"03",title:{en:"Spirit — Son of God",es:"Espíritu — Hijo de Dios"},body:{en:"I start every morning knowing who I am. Faith isn't separate from the work — it's what keeps me grounded under deadlines and building from purpose, not pressure.",es:"Comienzo cada mañana sabiendo quién soy. La fe no está separada del trabajo — es lo que me mantiene firme bajo los plazos y que me hace construir desde el propósito, no desde el miedo."},stat:{en:"Faith · Purpose · Peace",es:"Fe · Propósito · Paz"},photo:{type:"embed",permalink:"https://www.instagram.com/p/DJ_FTzWt34-/",pos:"photo-br-adj"}}];function BA(){Ze.useEffect(()=>{const r=document.querySelectorAll(".reveal"),e=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),e.unobserve(s.target))})},{threshold:.12});return r.forEach(i=>e.observe(i)),()=>e.disconnect()},[])}function HA({text:r,containerRef:e}){const i=Ze.useRef(null);return Ze.useEffect(()=>{const s=i.current,l=e.current;if(!s||!l)return;let c=0,d=0,h=0,m=0,p;const v=g=>{const y=l.getBoundingClientRect();h=g.clientX-y.left,m=g.clientY-y.top},S=()=>{c+=(h-c)*.08,d+=(m-d)*.08,s&&(s.style.left=c+"px"),s&&(s.style.top=d+"px"),p=requestAnimationFrame(S)};return l.addEventListener("mousemove",v),h=l.offsetWidth*.78,m=180,S(),()=>{l.removeEventListener("mousemove",v),cancelAnimationFrame(p)}},[e]),C.jsx("div",{ref:i,className:"hero-sticker",children:r.split(`
`).map((s,l)=>C.jsx("div",{children:s},l))})}function GA({lang:r,setLang:e,t:i,theme:s,setTheme:l}){return C.jsxs("nav",{className:"nav",children:[C.jsxs("a",{href:"#top",className:"nav-logo",children:[C.jsx("span",{className:"nav-logo-mark",children:"D"}),C.jsxs("span",{className:"nav-logo-text",children:["David",C.jsx("span",{className:"nav-logo-dot",children:".dev"})]})]}),C.jsxs("div",{className:"nav-links",children:[C.jsx("a",{href:"#work",className:"nav-link",children:i.nav.work}),C.jsx("a",{href:"#scrolly",className:"nav-link",children:"Case"}),C.jsx("a",{href:"#clients",className:"nav-link",children:i.nav.clients}),C.jsx("a",{href:"#stack",className:"nav-link",children:i.nav.stack}),C.jsx("a",{href:"#experience",className:"nav-link",children:i.nav.experience}),C.jsx("a",{href:"#contact",className:"nav-link",children:i.nav.contact})]}),C.jsxs("div",{className:"nav-actions",children:[C.jsx("button",{className:"nb-pill",onClick:()=>l(s==="dark"?"light":"dark"),style:{cursor:"pointer",background:"var(--primary)",color:"var(--on-primary)"},title:"Toggle theme",children:s==="dark"?"☾":"☀"}),C.jsxs("div",{className:"lang-toggle",children:[C.jsx("button",{className:r==="en"?"active":"",onClick:()=>e("en"),children:"EN"}),C.jsx("button",{className:r==="es"?"active":"",onClick:()=>e("es"),children:"ES"})]})]})]})}function VA({t:r}){const e=Ze.useRef(null);return C.jsxs("section",{id:"top",className:"hero wrap",ref:e,children:[C.jsxs("div",{className:"hero-scribble",children:[C.jsx("img",{src:"/david.JPG",alt:"David",className:"hero-photo"}),C.jsxs("div",{className:"photo-countries",children:[C.jsx("span",{children:"🇪🇨 EC"}),C.jsx("span",{className:"pc-dot",children:"·"}),C.jsx("span",{children:"🇩🇪 DE"}),C.jsx("span",{className:"pc-dot",children:"·"}),C.jsx("span",{children:"🇺🇸 US"})]})]}),C.jsx("div",{className:"hero-scribble-2"}),C.jsx(HA,{text:r.hero.sticker,containerRef:e}),C.jsxs("div",{className:"hero-content",children:[C.jsxs("div",{className:"hero-tag",children:[C.jsx("span",{className:"hero-tag-dot"}),r.hero.tag]}),C.jsxs("h1",{className:"display hero-title",children:[r.hero.title1,C.jsx("br",{}),C.jsx("span",{className:"stroke",children:r.hero.title2})," ",C.jsx("span",{className:"violet",children:r.hero.title3}),C.jsx("br",{}),r.hero.title4]}),C.jsx("p",{className:"hero-sub",children:r.hero.sub}),C.jsxs("div",{className:"hero-actions",children:[C.jsxs("a",{href:"#work",className:"nb-btn",children:["→ ",r.hero.cta1]}),C.jsxs("a",{href:"#contact",className:"nb-btn secondary",children:["✉ ",r.hero.cta2]}),C.jsx("a",{href:"https://david-dev-portfolio-2026-3d.vercel.app",target:"_blank",rel:"noopener noreferrer",className:"nb-btn secondary",children:r.hero.cta3})]}),C.jsx("div",{className:"hero-meta",children:r.hero.meta.map((i,s)=>C.jsxs("div",{className:"hero-meta-cell",children:[C.jsx("div",{className:"k display",children:i.k}),C.jsx("div",{className:"v",children:i.v})]},s))}),C.jsx("div",{className:"hero-timeline",children:IA.flatMap((i,s)=>{const l=[];return s>0&&l.push(C.jsx("div",{className:"ht-connector"},`c-${s}`)),l.push(C.jsxs("div",{className:`ht-node${i.active?" active":""}`,children:[C.jsx("span",{className:"ht-year",children:i.year}),C.jsx("span",{className:"ht-skills",children:i.skills})]},`n-${s}`)),l})})]})]})}function kA({project:r,detail:e,t:i,onClose:s}){const[l,c]=Ze.useState(0);if(Ze.useEffect(()=>{const h=m=>{m.key==="Escape"&&s()};return document.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",h),document.body.style.overflow=""}},[s]),!e)return null;const d=e.images||[];return C.jsx("div",{className:"pm-overlay",onClick:s,children:C.jsxs("div",{className:"pm-panel",onClick:h=>h.stopPropagation(),children:[C.jsxs("div",{className:"pm-header",children:[C.jsxs("div",{className:"pm-title-row",children:[C.jsx("h2",{className:"display pm-title",children:r.title}),C.jsx("button",{className:"pm-close nb-btn secondary",onClick:s,children:i.work.close})]}),C.jsx("div",{className:"pm-tags",children:r.tech.map((h,m)=>C.jsx("span",{className:"nb-pill",children:h},m))})]}),C.jsxs("div",{className:"pm-gallery",children:[C.jsxs("div",{className:"pm-img-main",children:[d[l]&&C.jsx("img",{src:d[l].src,alt:d[l].caption}),d.length>1&&C.jsxs(C.Fragment,{children:[C.jsx("button",{className:"pm-arrow pm-arrow-left",onClick:()=>c(h=>(h-1+d.length)%d.length),children:"←"}),C.jsx("button",{className:"pm-arrow pm-arrow-right",onClick:()=>c(h=>(h+1)%d.length),children:"→"})]})]}),d.length>1&&C.jsx("div",{className:"pm-thumbs",children:d.map((h,m)=>C.jsx("button",{className:`pm-thumb ${m===l?"active":""}`,onClick:()=>c(m),children:C.jsx("img",{src:h.src,alt:h.caption})},m))}),d[l]&&C.jsx("p",{className:"pm-caption",children:d[l].caption})]}),C.jsxs("div",{className:"pm-body",children:[C.jsx("p",{className:"pm-desc",dangerouslySetInnerHTML:{__html:e.description}}),C.jsx("div",{className:"pm-actions",children:r.link&&r.link!=="#"&&C.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"nb-btn",children:i.work.visitSite})})]})]})})}function jA({t:r,lang:e}){var D;const i=e==="es"?"Todos":"All",[s,l]=Ze.useState(i),[c,d]=Ze.useState(4),[h,m]=Ze.useState(null);Ze.useEffect(()=>{l(e==="es"?"Todos":"All")},[e]);const p={All:"All",Todos:"All",AI:"AI",IA:"AI",LMS:"LMS",CRM:"CRM",Web:"Web",Paper:"Paper",Freelancing:"Freelancing"},v=Ze.useMemo(()=>{const x=p[s]||"All";return x==="All"?t_:t_.filter(M=>M.cat===x)},[s]),S=x=>{l(x),d(4)},g=v.slice(0,c),y=c<v.length;Ze.useEffect(()=>{let x;const M=requestAnimationFrame(()=>{const w=document.querySelectorAll(".project-row.reveal:not(.in)");w.length&&(x=new IntersectionObserver(U=>{U.forEach(L=>{L.isIntersecting&&(L.target.classList.add("in"),x.unobserve(L.target))})},{threshold:.05}),w.forEach(U=>x.observe(U)))});return()=>{cancelAnimationFrame(M),x==null||x.disconnect()}},[v,c]);const T=x=>{x.detailSlug&&m(x)};return C.jsxs("section",{id:"work",className:"work",children:[C.jsxs("div",{className:"wrap",children:[C.jsxs("div",{className:"sec-head reveal",children:[C.jsxs("div",{children:[C.jsx("div",{className:"section-label",children:r.work.label}),C.jsx("h2",{className:"display sec-title",children:r.work.title})]}),C.jsx("p",{className:"sec-desc",children:r.work.desc})]}),C.jsx("div",{className:"filter-bar reveal",children:r.work.filters.map(x=>C.jsx("button",{className:`filter-chip ${s===x?"active":""}`,onClick:()=>S(x),children:x},x))}),C.jsx("div",{children:g.map((x,M)=>{var w,U,L,V;return C.jsxs("div",{className:`project-row reveal ${x.detailSlug?"has-detail":""}`,style:{transitionDelay:`${M*60}ms`},children:[C.jsxs("div",{className:"project-num",children:["0",x.id]}),C.jsxs("div",{className:"project-main",children:[C.jsx("h3",{children:x.title}),C.jsx("p",{children:x.desc[e]}),C.jsx("div",{className:"project-tech",children:x.tech.map((O,z)=>C.jsx("span",{className:"nb-pill",children:O},z))}),x.detailSlug&&C.jsx("button",{className:"detail-btn",onClick:()=>T(x),children:r.work.viewDetail})]}),C.jsxs("div",{className:`project-visual ${x.detailSlug?"clickable-visual":""}`,style:{background:x.color,color:x.textColor},onClick:()=>T(x),children:[(x.detailSlug&&jo[x.detailSlug]?(U=(w=jo[x.detailSlug][e])==null?void 0:w.images[0])==null?void 0:U.src:x.previewImg)&&C.jsx("img",{src:x.detailSlug&&jo[x.detailSlug]?(V=(L=jo[x.detailSlug][e])==null?void 0:L.images[0])==null?void 0:V.src:x.previewImg,alt:x.title,className:"visual-preview-img"}),C.jsx("span",{className:"visual-label",style:{position:"relative",zIndex:2},children:x.title})]}),x.link!=="#"&&C.jsx("a",{href:x.link,target:"_blank",rel:"noopener noreferrer",className:"project-link","aria-label":`Open ${x.title}`,children:"↗"})]},x.id)})}),y&&C.jsx("div",{className:"show-more-wrap",children:C.jsxs("button",{className:"nb-btn show-more-btn",onClick:()=>d(x=>x+4),children:["↓ ",r.work.showMore]})})]}),h&&C.jsx(kA,{project:h,detail:(D=jo[h.detailSlug])==null?void 0:D[e],t:r,onClose:()=>m(null)})]})}function XA({t:r,lang:e}){const[i,s]=Ze.useState(0);Ze.useEffect(()=>{const d=setInterval(()=>s(h=>(h+1)%Ur.length),8e3);return()=>clearInterval(d)},[]);const l=()=>s(d=>(d-1+Ur.length)%Ur.length),c=()=>s(d=>(d+1)%Ur.length);return C.jsx("section",{id:"clients",className:"testimonials",children:C.jsxs("div",{className:"wrap",children:[C.jsxs("div",{className:"sec-head reveal",children:[C.jsxs("div",{children:[C.jsx("div",{className:"section-label",children:r.testimonials.label}),C.jsx("h2",{className:"display sec-title",children:r.testimonials.title})]}),C.jsx("p",{className:"sec-desc",children:r.testimonials.desc})]}),C.jsx("div",{className:"carousel reveal",children:C.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${i*100}%)`},children:Ur.map((d,h)=>C.jsx("div",{className:"testimonial",children:C.jsxs("div",{className:"testimonial-card",children:[C.jsx("p",{className:"testimonial-quote",children:d.quote[e]}),C.jsxs("div",{className:"testimonial-person",children:[d.img?C.jsx("img",{src:d.img,alt:d.name,className:"testimonial-avatar testimonial-avatar-photo"}):C.jsx("div",{className:"testimonial-avatar",children:d.initials}),C.jsx("div",{className:"testimonial-name",children:d.name}),C.jsx("div",{className:"testimonial-role mono",children:d.role})]})]})},h))})}),C.jsxs("div",{className:"carousel-controls",children:[C.jsx("button",{className:"carousel-btn",onClick:l,"aria-label":"Previous",children:"←"}),C.jsx("button",{className:"carousel-btn",onClick:c,"aria-label":"Next",children:"→"}),C.jsx("div",{className:"carousel-dots",children:Ur.map((d,h)=>C.jsx("button",{className:`carousel-dot ${h===i?"active":""}`,onClick:()=>s(h),"aria-label":`Go to ${h+1}`},h))})]})]})})}function WA(){const r=[...n_,...n_];return C.jsx("section",{id:"stack",className:"tech-strip",children:C.jsx("div",{className:"marquee",children:r.map((e,i)=>C.jsxs("div",{className:"marquee-item",children:[C.jsx("span",{className:"dot"}),e]},i))})})}function qA({t:r,lang:e}){const i=[{key:"freelancing",label:{en:"Freelancing",es:"Freelancing"}},{key:"work",label:{en:"Work Experience",es:"Experiencia Laboral"}}];return C.jsx("section",{id:"experience",className:"experience",children:C.jsxs("div",{className:"wrap",children:[C.jsxs("div",{className:"sec-head reveal",children:[C.jsxs("div",{children:[C.jsx("div",{className:"section-label",children:r.experience.label}),C.jsx("h2",{className:"display sec-title",children:r.experience.title})]}),C.jsx("p",{className:"sec-desc",children:r.experience.desc})]}),i.map(s=>{const l=zA.filter(c=>c.category===s.key);return l.length?C.jsxs("div",{className:"exp-group",children:[C.jsx("div",{className:"exp-group-label",children:s.label[e]}),C.jsx("div",{className:"exp-grid",children:l.map((c,d)=>C.jsxs("div",{className:"exp-card reveal",style:{transitionDelay:`${d*80}ms`},children:[C.jsx("div",{className:"exp-badge",children:c.badge}),C.jsxs("div",{children:[C.jsx("h4",{children:c.title[e]}),C.jsxs("div",{className:"meta",children:[c.where,c.location?` · ${c.location}`:""," · ",c.period]}),C.jsx("p",{children:c.desc[e]}),c.link&&C.jsxs("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"exp-link",children:[c.link.replace(/^https?:\/\//,"")," ↗"]})]})]},d))})]},s.key):null})]})})}function YA({t:r,lang:e}){const[i,s]=Ze.useState(0),[l,c]=Ze.useState(0),d=Ze.useRef(null),h=Ze.useRef([]);return Ze.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(i_.length-1);return}const p=()=>window.innerWidth<=900,v=()=>p()?window.innerHeight*.73:window.innerHeight*.5,S=()=>p()?"-10% 0px -27% 0px":"-50% 0px -50% 0px",g=new IntersectionObserver(()=>{const D=v();let x={idx:-1,dist:1/0};h.current.forEach((M,w)=>{if(!M)return;const U=M.getBoundingClientRect(),L=U.top+U.height/2,V=Math.abs(L-D);V<x.dist&&(x={idx:w,dist:V})}),x.idx>=0&&s(x.idx)},{rootMargin:S(),threshold:0});h.current.forEach(D=>D&&g.observe(D));let y=!1;const T=()=>{y||(y=!0,requestAnimationFrame(()=>{const D=d.current;if(D){const x=D.getBoundingClientRect(),M=window.innerHeight,w=x.height-M,U=Math.max(0,Math.min(1,-x.top/w));c(U)}y=!1}))};return window.addEventListener("scroll",T,{passive:!0}),T(),()=>{g.disconnect(),window.removeEventListener("scroll",T)}},[]),C.jsx("section",{id:"scrolly",className:"scrolly",children:C.jsxs("div",{className:"wrap",children:[C.jsxs("div",{className:"scrolly-head sec-head reveal",children:[C.jsxs("div",{children:[C.jsx("div",{className:"section-label",children:r.scrolly.label}),C.jsx("h2",{className:"display sec-title",children:r.scrolly.title})]}),C.jsx("p",{className:"sec-desc",children:r.scrolly.desc})]}),C.jsxs("div",{className:"scrolly-stage",ref:d,children:[C.jsx("div",{className:"scrolly-text",children:i_.map((m,p)=>C.jsxs("div",{ref:v=>h.current[p]=v,className:`scrolly-step ${i===p?"active":""}`,children:[C.jsxs("div",{className:"step-num",children:[m.num," / 04"]}),C.jsx("h3",{children:m.title[e]}),C.jsx("p",{children:m.body[e]}),C.jsx("div",{className:"stat",children:m.stat[e]}),m.project&&C.jsx("div",{className:"step-project",children:m.project[e]})]},p))}),C.jsx("div",{className:"scrolly-sticky",children:C.jsxs("div",{className:`scrolly-viz s${i}`,children:[C.jsx("div",{className:"scrolly-progress",style:{transform:`scaleX(${l})`}}),C.jsx("div",{className:`layer ${i===0?"active":""}`,children:C.jsxs("div",{className:"layer-wire",children:[C.jsx("div",{className:"block"}),C.jsxs("div",{className:"block body",children:[C.jsx("div",{}),C.jsx("div",{}),C.jsx("div",{}),C.jsx("div",{})]}),C.jsx("div",{className:"block"})]})}),C.jsx("div",{className:`layer ${i===1?"active":""}`,children:C.jsxs("div",{className:"layer-chat",children:[C.jsx("div",{className:"bubble bot",children:e==="en"?"hi, I'm your assistant":"hola, soy el asistente"}),C.jsx("div",{className:"bubble user",children:e==="en"?"I need my invoice":"necesito mi factura"}),C.jsx("div",{className:"bubble bot",children:e==="en"?"sure, give me a sec…":"claro, dame un segundo…"}),C.jsx("div",{className:"bubble bot typing"})]})}),C.jsx("div",{className:`layer ${i===2?"active":""}`,children:C.jsxs("div",{className:"layer-dash",children:[C.jsxs("div",{className:"stat-tile",children:[C.jsx("div",{className:"big",children:"94%"}),C.jsx("div",{className:"lbl",children:e==="en"?"resolved":"resuelto"})]}),C.jsxs("div",{className:"stat-tile",children:[C.jsx("div",{className:"big",children:"1.2s"}),C.jsx("div",{className:"lbl",children:e==="en"?"avg latency":"lat. prom."})]}),C.jsxs("div",{className:"stat-tile",children:[C.jsx("div",{className:"big",children:"12k"}),C.jsx("div",{className:"lbl",children:e==="en"?"msgs / wk":"msg / sem"})]}),C.jsxs("div",{className:"stat-tile",children:[C.jsx("div",{className:"big",children:"4.8★"}),C.jsx("div",{className:"lbl",children:"csat"})]})]})}),C.jsx("div",{className:`layer ${i===3?"active":""}`,children:C.jsxs("div",{className:"layer-launch",children:[C.jsx("div",{className:"rocket",children:e==="en"?"SHIPPED.":"LANZADO."}),C.jsx("div",{className:"tag",children:"Live · v1.0"})]})})]})})]})]})})}const ZA=["card-bl","card-tr","card-br"];function KA(r){return`<blockquote class="instagram-media" data-instgrm-permalink="${r}" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:0;box-shadow:none;margin:0;padding:0;width:100%;"><div style="padding:16px;"><a href="${r}" style="background:#FFFFFF;line-height:0;padding:0 0;text-align:center;text-decoration:none;width:100%;" target="_blank"><div style="display:flex;flex-direction:row;align-items:center;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:40px;margin-right:14px;width:40px;"></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:100px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:60px;"></div></div></div><div style="padding:19% 0;"></div><div style="display:block;height:50px;margin:0 auto 12px;width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top:8px;"><div style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;font-style:normal;font-weight:550;line-height:18px;">View this post on Instagram</div></div><div style="padding:12.5% 0;"></div><div style="display:flex;flex-direction:row;margin-bottom:14px;align-items:center;"><div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(0px) translateY(7px);"></div><div style="background-color:#F4F4F4;height:12.5px;transform:rotate(-45deg) translateX(3px) translateY(1px);width:12.5px;flex-grow:0;margin-right:14px;margin-left:2px;"></div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(9px) translateY(-18px);"></div></div><div style="margin-left:8px;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:20px;width:20px;"></div><div style="width:0;height:0;border-top:2px solid transparent;border-left:6px solid #f4f4f4;border-bottom:2px solid transparent;transform:translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left:auto;"><div style="width:0px;border-top:8px solid #F4F4F4;border-right:8px solid transparent;transform:translateY(16px);"></div><div style="background-color:#F4F4F4;flex-grow:0;height:12px;width:16px;transform:translateY(-4px);"></div><div style="width:0;height:0;border-top:8px solid #F4F4F4;border-left:8px solid transparent;transform:translateY(-4px) translateX(8px);"></div></div></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;margin-bottom:24px;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:224px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:144px;"></div></div></a></div></blockquote>`}function QA({permalink:r,posClass:e,visible:i}){const s=Ze.useRef(null);return Ze.useEffect(()=>{if(!document.getElementById("ig-embed-js")){const l=document.createElement("script");l.id="ig-embed-js",l.src="https://www.instagram.com/embed.js",l.async=!0,document.body.appendChild(l)}},[]),Ze.useEffect(()=>{if(!i||!s.current)return;s.current.innerHTML=KA(r);const l=()=>{window.instgrm?window.instgrm.Embeds.process():setTimeout(l,250)};l()},[i,r]),C.jsx("div",{ref:s,className:`craft-insta ${e} ${i?"visible":""}`})}function JA({t:r,lang:e}){const[i,s]=Ze.useState(0),[l,c]=Ze.useState(0),d=Ze.useRef(null);return Ze.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const m=()=>{const p=d.current;if(!p)return;const v=p.getBoundingClientRect(),S=Math.max(0,-v.top),g=p.offsetHeight-window.innerHeight,y=g>0?Math.min(1,S/g):0;c(y),s(Math.min(Xo.length-1,Math.floor(y*Xo.length)))};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]),C.jsxs("section",{id:"craft",className:"craft",children:[C.jsx("div",{className:"wrap",children:C.jsxs("div",{className:"craft-head sec-head reveal",children:[C.jsxs("div",{children:[C.jsx("div",{className:"section-label",children:r.craft.label}),C.jsx("h2",{className:"display sec-title",children:r.craft.title})]}),C.jsx("p",{className:"sec-desc",children:r.craft.desc}),C.jsx("p",{className:"craft-tesseract-hint",children:r.craft.tesseract})]})}),C.jsx("div",{className:"wrap craft-scroll-space",ref:d,children:C.jsxs("div",{className:"craft-sticky-full",children:[C.jsx("div",{className:"craft-scroll-bar",children:C.jsx("div",{className:"craft-scroll-fill",style:{transform:`scaleX(${l})`}})}),C.jsx("img",{src:"/signature.png",alt:"",className:"craft-signature","aria-hidden":"true"}),C.jsx(UA,{step:i}),Xo.map((h,m)=>{var p;return C.jsxs("div",{className:`craft-card ${ZA[m]} ${i===m?"visible":""}`,children:[C.jsxs("div",{className:"craft-card-num",children:[h.num," / 03"]}),C.jsx("h3",{children:h.title[e]}),C.jsx("p",{children:h.body[e]}),C.jsx("div",{className:"craft-card-stat",children:h.stat[e]}),((p=h.photo)==null?void 0:p.type)==="embed"&&C.jsx("a",{href:h.photo.permalink,target:"_blank",rel:"noopener noreferrer",className:"craft-ig-link",children:"Instagram ↗"})]},m)}),Xo.map((h,m)=>h.photo?h.photo.type==="embed"?C.jsx(QA,{permalink:h.photo.permalink,posClass:h.photo.pos,visible:i===m},`photo-${m}`):C.jsx("div",{className:`craft-photo ${h.photo.pos} ${i===m?"visible":""}`,style:{"--photo-rot":h.photo.rot},children:C.jsx("img",{src:h.photo.src,alt:""})},`photo-${m}`):null),C.jsx("div",{className:"craft-steps-indicator",children:Xo.map((h,m)=>C.jsx("div",{className:`craft-dot ${i===m?"active":""}`},m))})]})})]})}function $A({t:r}){const[e,i]=Ze.useState(0),s=r.paper.slides,l=()=>i(d=>(d-1+s.length)%s.length),c=()=>i(d=>(d+1)%s.length);return C.jsx("section",{id:"paper",className:"paper-section",children:C.jsxs("div",{className:"wrap",children:[C.jsxs("div",{className:"paper-top reveal",children:[C.jsxs("div",{className:"paper-top-text",children:[C.jsx("div",{className:"section-label",children:r.paper.label}),C.jsx("h2",{className:"display sec-title",children:r.paper.title}),C.jsx("p",{className:"sec-desc",children:r.paper.desc})]}),C.jsxs("div",{className:"paper-carousel",children:[C.jsx("div",{className:"paper-carousel-img-wrap",children:C.jsx("img",{src:s[e].src,alt:s[e].caption,className:"paper-carousel-img"},e)}),C.jsx("p",{className:"paper-carousel-caption",children:s[e].caption}),C.jsxs("div",{className:"paper-carousel-nav",children:[C.jsx("button",{className:"paper-nav-btn",onClick:l,"aria-label":"Previous",children:"←"}),C.jsx("div",{className:"paper-carousel-dots",children:s.map((d,h)=>C.jsx("button",{className:`paper-dot${h===e?" active":""}`,onClick:()=>i(h),"aria-label":`Slide ${h+1}`},h))}),C.jsx("button",{className:"paper-nav-btn",onClick:c,"aria-label":"Next",children:"→"})]})]})]}),C.jsxs("div",{className:"paper-card reveal",children:[C.jsxs("div",{className:"paper-card-inner",children:[C.jsx("div",{className:"paper-meta",children:C.jsx("span",{className:"paper-venue nb-pill",children:r.paper.venue})}),C.jsx("div",{className:"paper-tech",children:["Unity 3D","Kinect 2","OpenCV","ESP32","Python"].map((d,h)=>C.jsx("span",{className:"nb-pill",children:d},h))}),C.jsx("a",{href:"https://doi.org/10.1007/978-3-031-50381-8_99",target:"_blank",rel:"noopener noreferrer",className:"nb-btn paper-cta",children:r.paper.cta})]}),C.jsx("div",{className:"paper-visual",children:C.jsxs("div",{className:"paper-visual-inner",children:[C.jsx("div",{className:"paper-doi mono",children:"DOI: 10.1007/978-3-031-50381-8_99"}),C.jsx("div",{className:"paper-year",children:"2023"})]})})]})]})})}function e2({t:r,showToast:e}){const i="albert98.developer@gmail.com",s="+593 992 520 223",l=c=>{navigator.clipboard.writeText(c).then(()=>e(r.contact.copied))};return C.jsx("section",{id:"contact",className:"contact",children:C.jsxs("div",{className:"wrap",children:[C.jsx("div",{className:"section-label contact-label",children:r.contact.label}),C.jsxs("h2",{className:"display contact-title",children:[r.contact.title1,C.jsx("br",{}),C.jsx("span",{className:"accent",children:r.contact.title2})," ",r.contact.title3]}),C.jsx("p",{className:"contact-sub",children:r.contact.sub}),C.jsxs("div",{className:"contact-card",children:[C.jsxs("button",{className:"contact-field",onClick:()=>l(i),children:[C.jsxs("div",{children:[C.jsx("div",{className:"label",children:r.contact.emailLabel}),C.jsx("span",{className:"value",children:i})]}),C.jsxs("span",{className:"copy-hint",children:[r.contact.copyHint," ⎘"]})]}),C.jsxs("button",{className:"contact-field",onClick:()=>l(s),children:[C.jsxs("div",{children:[C.jsx("div",{className:"label",children:r.contact.telLabel}),C.jsx("span",{className:"value",children:s})]}),C.jsxs("span",{className:"copy-hint",children:[r.contact.copyHint," ⎘"]})]})]}),C.jsxs("div",{className:"socials",children:[C.jsx("a",{className:"social-chip",href:"https://github.com/DavidVique1998",target:"_blank",rel:"noreferrer",children:"GitHub ↗"}),C.jsx("a",{className:"social-chip",href:"https://www.linkedin.com/in/david-vique-b29941206",target:"_blank",rel:"noreferrer",children:"LinkedIn ↗"}),C.jsx("a",{className:"social-chip",href:"https://www.instagram.com/david_vique98/",target:"_blank",rel:"noreferrer",children:"Instagram ↗"})]}),C.jsxs("div",{className:"footer-bar",children:[C.jsx("div",{children:"© 2026 David — Ecuador 🇪🇨"}),C.jsx("div",{children:r.contact.foot})]}),C.jsx("div",{style:{textAlign:"center",fontSize:"0.78em",color:"#666",marginTop:"0.6em",opacity:.7},children:"Triathlete — 1.5 km swim · 40 km bike · 10 km run"})]})})}function t2(){const[r,e]=Ze.useState("en"),[i,s]=Ze.useState("light"),[l,c]=Ze.useState({show:!1,msg:""}),d=FA[r];BA(),Ze.useEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]);const h=v=>{c({show:!0,msg:v}),setTimeout(()=>c({show:!1,msg:v}),1800)},[m,p]=ny(PA);return Ze.useEffect(()=>{if(!m)return;const v=document.documentElement.style;v.setProperty("--primary",m.primary||"#C6F24E"),v.setProperty("--secondary",m.secondary||"#2D1B69"),v.setProperty("--tertiary",m.tertiary||"#FF5A36"),v.setProperty("--border-w",(m.borderW||3)+"px"),v.setProperty("--shadow-off",(m.shadowOff||6)+"px"),v.setProperty("--rot",(m.rot||2)+"deg"),v.setProperty("--display-weight",m.displayWeight||900),m.dark!==void 0&&s(m.dark?"dark":"light")},[m]),C.jsxs(C.Fragment,{children:[C.jsx(GA,{lang:r,setLang:e,t:d,theme:i,setTheme:s}),C.jsx(VA,{t:d}),C.jsx(jA,{t:d,lang:r}),C.jsx(YA,{t:d,lang:r}),C.jsx(XA,{t:d,lang:r}),C.jsx(WA,{}),C.jsx(qA,{t:d,lang:r}),C.jsx(JA,{t:d,lang:r}),C.jsx($A,{t:d}),C.jsx(e2,{t:d,showToast:h}),C.jsx("div",{className:`toast ${l.show?"show":""}`,children:l.msg}),C.jsx(OA,{lang:r}),C.jsxs(iy,{title:"Tweaks",children:[C.jsx(dc,{label:"Theme"}),C.jsx(ay,{label:"Dark mode",value:!!m.dark,onChange:v=>p("dark",v)}),C.jsx(dc,{label:"Colors"}),C.jsx(gd,{label:"Primary",value:m.primary,onChange:v=>p("primary",v)}),C.jsx(gd,{label:"Secondary",value:m.secondary,onChange:v=>p("secondary",v)}),C.jsx(gd,{label:"Tertiary",value:m.tertiary,onChange:v=>p("tertiary",v)}),C.jsx(dc,{label:"Brutalism"}),C.jsx(md,{label:"Border thickness",value:m.borderW,min:1,max:8,step:1,unit:"px",onChange:v=>p("borderW",v)}),C.jsx(md,{label:"Shadow offset",value:m.shadowOff,min:0,max:16,step:1,unit:"px",onChange:v=>p("shadowOff",v)}),C.jsx(md,{label:"Rotation",value:m.rot,min:0,max:8,step:.5,unit:"°",onChange:v=>p("rot",v)}),C.jsx(dc,{label:"Type"}),C.jsx(sy,{label:"Display weight",value:m.displayWeight,options:[400,600,700,800,900],onChange:v=>p("displayWeight",v)})]})]})}ey.createRoot(document.getElementById("root")).render(C.jsx(Ze.StrictMode,{children:C.jsx(t2,{})}));
