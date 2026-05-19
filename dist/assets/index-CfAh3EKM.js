(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Td={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function by(){if(lv)return Ko;lv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Ko.Fragment=e,Ko.jsx=i,Ko.jsxs=i,Ko}var cv;function Ey(){return cv||(cv=1,Td.exports=by()),Td.exports}var U=Ey(),Ad={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function Ty(){if(uv)return st;uv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(P,Q,xe){this.props=P,this.context=Q,this.refs=S,this.updater=xe||E}y.prototype.isReactComponent={},y.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=y.prototype;function L(P,Q,xe){this.props=P,this.context=Q,this.refs=S,this.updater=xe||E}var O=L.prototype=new R;O.constructor=L,C(O,y.prototype),O.isPureReactComponent=!0;var j=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(P,Q,xe){var Te=xe.ref;return{$$typeof:r,type:P,key:Q,ref:Te!==void 0?Te:null,props:xe}}function K(P,Q){return I(P.type,Q,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function $(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return Q[xe]})}var ue=/\/+/g;function pe(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):Q.toString(36)}function V(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function N(P,Q,xe,Te,De){var oe=typeof P;(oe==="undefined"||oe==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(oe){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case r:case e:ye=!0;break;case v:return ye=P._init,N(ye(P._payload),Q,xe,Te,De)}}if(ye)return De=De(P),ye=Te===""?"."+pe(P,0):Te,j(De)?(xe="",ye!=null&&(xe=ye.replace(ue,"$&/")+"/"),N(De,Q,xe,"",function($e){return $e})):De!=null&&(G(De)&&(De=K(De,xe+(De.key==null||P&&P.key===De.key?"":(""+De.key).replace(ue,"$&/")+"/")+ye)),Q.push(De)),1;ye=0;var Ee=Te===""?".":Te+":";if(j(P))for(var He=0;He<P.length;He++)Te=P[He],oe=Ee+pe(Te,He),ye+=N(Te,Q,xe,oe,De);else if(He=M(P),typeof He=="function")for(P=He.call(P),He=0;!(Te=P.next()).done;)Te=Te.value,oe=Ee+pe(Te,He++),ye+=N(Te,Q,xe,oe,De);else if(oe==="object"){if(typeof P.then=="function")return N(V(P),Q,xe,Te,De);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ye}function B(P,Q,xe){if(P==null)return P;var Te=[],De=0;return N(P,Te,"","",function(oe){return Q.call(xe,oe,De++)}),Te}function re(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},Se={map:B,forEach:function(P,Q,xe){B(P,function(){Q.apply(this,arguments)},xe)},count:function(P){var Q=0;return B(P,function(){Q++}),Q},toArray:function(P){return B(P,function(Q){return Q})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return st.Activity=x,st.Children=Se,st.Component=y,st.Fragment=i,st.Profiler=l,st.PureComponent=L,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},st.cache=function(P){return function(){return P.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(P,Q,xe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Te=C({},P.props),De=P.key;if(Q!=null)for(oe in Q.key!==void 0&&(De=""+Q.key),Q)!T.call(Q,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Q.ref===void 0||(Te[oe]=Q[oe]);var oe=arguments.length-2;if(oe===1)Te.children=xe;else if(1<oe){for(var ye=Array(oe),Ee=0;Ee<oe;Ee++)ye[Ee]=arguments[Ee+2];Te.children=ye}return I(P.type,De,Te)},st.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},st.createElement=function(P,Q,xe){var Te,De={},oe=null;if(Q!=null)for(Te in Q.key!==void 0&&(oe=""+Q.key),Q)T.call(Q,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(De[Te]=Q[Te]);var ye=arguments.length-2;if(ye===1)De.children=xe;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];De.children=Ee}if(P&&P.defaultProps)for(Te in ye=P.defaultProps,ye)De[Te]===void 0&&(De[Te]=ye[Te]);return I(P,oe,De)},st.createRef=function(){return{current:null}},st.forwardRef=function(P){return{$$typeof:h,render:P}},st.isValidElement=G,st.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:re}},st.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},st.startTransition=function(P){var Q=F.T,xe={};F.T=xe;try{var Te=P(),De=F.S;De!==null&&De(xe,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(z,me)}catch(oe){me(oe)}finally{Q!==null&&xe.types!==null&&(Q.types=xe.types),F.T=Q}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(P){return F.H.use(P)},st.useActionState=function(P,Q,xe){return F.H.useActionState(P,Q,xe)},st.useCallback=function(P,Q){return F.H.useCallback(P,Q)},st.useContext=function(P){return F.H.useContext(P)},st.useDebugValue=function(){},st.useDeferredValue=function(P,Q){return F.H.useDeferredValue(P,Q)},st.useEffect=function(P,Q){return F.H.useEffect(P,Q)},st.useEffectEvent=function(P){return F.H.useEffectEvent(P)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(P,Q,xe){return F.H.useImperativeHandle(P,Q,xe)},st.useInsertionEffect=function(P,Q){return F.H.useInsertionEffect(P,Q)},st.useLayoutEffect=function(P,Q){return F.H.useLayoutEffect(P,Q)},st.useMemo=function(P,Q){return F.H.useMemo(P,Q)},st.useOptimistic=function(P,Q){return F.H.useOptimistic(P,Q)},st.useReducer=function(P,Q,xe){return F.H.useReducer(P,Q,xe)},st.useRef=function(P){return F.H.useRef(P)},st.useState=function(P){return F.H.useState(P)},st.useSyncExternalStore=function(P,Q,xe){return F.H.useSyncExternalStore(P,Q,xe)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.5",st}var fv;function up(){return fv||(fv=1,Ad.exports=Ty()),Ad.exports}var nt=up(),wd={exports:{}},Qo={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function Ay(){return dv||(dv=1,(function(r){function e(N,B){var re=N.length;N.push(B);e:for(;0<re;){var me=re-1>>>1,Se=N[me];if(0<l(Se,B))N[me]=B,N[re]=Se,re=me;else break e}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var B=N[0],re=N.pop();if(re!==B){N[0]=re;e:for(var me=0,Se=N.length,P=Se>>>1;me<P;){var Q=2*(me+1)-1,xe=N[Q],Te=Q+1,De=N[Te];if(0>l(xe,re))Te<Se&&0>l(De,xe)?(N[me]=De,N[Te]=re,me=Te):(N[me]=xe,N[Q]=re,me=Q);else if(Te<Se&&0>l(De,re))N[me]=De,N[Te]=re,me=Te;else break e}}return B}function l(N,B){var re=N.sortIndex-B.sortIndex;return re!==0?re:N.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,x=null,g=3,M=!1,E=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function O(N){for(var B=i(p);B!==null;){if(B.callback===null)s(p);else if(B.startTime<=N)s(p),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(p)}}function j(N){if(C=!1,O(N),!E)if(i(m)!==null)E=!0,z||(z=!0,$());else{var B=i(p);B!==null&&V(j,B.startTime-N)}}var z=!1,F=-1,T=5,I=-1;function K(){return S?!0:!(r.unstable_now()-I<T)}function G(){if(S=!1,z){var N=r.unstable_now();I=N;var B=!0;try{e:{E=!1,C&&(C=!1,R(F),F=-1),M=!0;var re=g;try{t:{for(O(N),x=i(m);x!==null&&!(x.expirationTime>N&&K());){var me=x.callback;if(typeof me=="function"){x.callback=null,g=x.priorityLevel;var Se=me(x.expirationTime<=N);if(N=r.unstable_now(),typeof Se=="function"){x.callback=Se,O(N),B=!0;break t}x===i(m)&&s(m),O(N)}else s(m);x=i(m)}if(x!==null)B=!0;else{var P=i(p);P!==null&&V(j,P.startTime-N),B=!1}}break e}finally{x=null,g=re,M=!1}B=void 0}}finally{B?$():z=!1}}}var $;if(typeof L=="function")$=function(){L(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,pe=ue.port2;ue.port1.onmessage=G,$=function(){pe.postMessage(null)}}else $=function(){y(G,0)};function V(N,B){F=y(function(){N(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var re=g;g=B;try{return N()}finally{g=re}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var re=g;g=N;try{return B()}finally{g=re}},r.unstable_scheduleCallback=function(N,B,re){var me=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?me+re:me):re=me,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=re+Se,N={id:v++,callback:B,priorityLevel:N,startTime:re,expirationTime:Se,sortIndex:-1},re>me?(N.sortIndex=re,e(p,N),i(m)===null&&N===i(p)&&(C?(R(F),F=-1):C=!0,V(j,re-me))):(N.sortIndex=Se,e(m,N),E||M||(E=!0,z||(z=!0,$()))),N},r.unstable_shouldYield=K,r.unstable_wrapCallback=function(N){var B=g;return function(){var re=g;g=B;try{return N.apply(this,arguments)}finally{g=re}}}})(Rd)),Rd}var hv;function wy(){return hv||(hv=1,Cd.exports=Ay()),Cd.exports}var Dd={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function Cy(){if(pv)return Bn;pv=1;var r=up();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Bn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.5",Bn}var mv;function Ry(){if(mv)return Dd.exports;mv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=Cy(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function Dy(){if(gv)return Qo;gv=1;var r=wy(),e=up(),i=Ry();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var _=!1,w=u.child;w;){if(w===a){_=!0,a=u,o=d;break}if(w===o){_=!0,o=u,a=d;break}w=w.sibling}if(!_){for(w=d.child;w;){if(w===a){_=!0,a=d,o=u;break}if(w===o){_=!0,o=d,a=u;break}w=w.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),K=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case z:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var V=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},me=[],Se=-1;function P(t){return{current:t}}function Q(t){0>Se||(t.current=me[Se],me[Se]=null,Se--)}function xe(t,n){Se++,me[Se]=t.current,t.current=n}var Te=P(null),De=P(null),oe=P(null),ye=P(null);function Ee(t,n){switch(xe(oe,n),xe(De,t),xe(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?U0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=U0(n),t=N0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Te),xe(Te,t)}function He(){Q(Te),Q(De),Q(oe)}function $e(t){t.memoizedState!==null&&xe(ye,t);var n=Te.current,a=N0(n,t.type);n!==a&&(xe(De,t),xe(Te,a))}function Qe(t){De.current===t&&(Q(Te),Q(De)),ye.current===t&&(Q(ye),Wo._currentValue=re)}var jt,pt;function St(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+pt}var Lt=!1;function ft(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var se=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){se=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){se=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],w=d[1];if(_&&w){var H=_.split(`
`),te=w.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===te.length)for(o=H.length-1,u=te.length-1;1<=o&&0<=u&&H[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==te[u]){var de=`
`+H[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?St(a):""}function ln(t,n){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return St("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=ln(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var En=Object.prototype.hasOwnProperty,W=r.unstable_scheduleCallback,nn=r.unstable_cancelCallback,mt=r.unstable_shouldYield,Gt=r.unstable_requestPaint,we=r.unstable_now,Jt=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,ve=r.unstable_LowPriority,be=r.unstable_IdlePriority,Ce=r.log,Le=r.unstable_setDisableYieldValue,ce=null,fe=null;function Oe(t){if(typeof Ce=="function"&&Le(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ce,t)}catch{}}var Pe=Math.clz32?Math.clz32:it,Ue=Math.log,Re=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ue(t)/Re|0)|0}var at=256,gt=262144,k=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Ae(o):(_&=w,_!==0?u=Ae(_):a||(a=w&~t,a!==0&&(u=Ae(a))))):(w=o&~d,w!==0?u=Ae(w):_!==0?u=Ae(_):a||(a=o&~t,a!==0&&(u=Ae(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,a,o,u,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Pe(a),_e=1<<de;w[de]=0,H[de]=-1;var se=te[de];if(se!==null)for(te[de]=null,de=0;de<se.length;de++){var le=se[de];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&Dt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~n))}function Dt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function _i(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ii(t,n){var a=n&-n;return a=(a&42)!==0?1:vs(a),(a&(t.suspendedLanes|n))!==0?0:a}function vs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ao(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:tv(t.type))}function so(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+zn,Tn="__reactProps$"+zn,ia="__reactContainer$"+zn,Ua="__reactEvents$"+zn,gl="__reactListeners$"+zn,Ks="__reactHandles$"+zn,ro="__reactResources$"+zn,Na="__reactMarker$"+zn;function oo(t){delete t[cn],delete t[Tn],delete t[Ua],delete t[gl],delete t[Ks]}function La(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ia]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F0(t);t!==null;){if(a=t[cn])return a;t=F0(t)}return n}t=a,a=t.parentNode}return null}function Oa(t){if(t=t[cn]||t[ia]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function _s(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Pa(t){var n=t[ro];return n||(n=t[ro]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(t){t[Na]=!0}var vl=new Set,A={};function q(t,n){ae(t,n),ae(t+"Capture",n)}function ae(t,n){for(A[t]=n,t=0;t<n.length;t++)vl.add(n[t])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},Be={};function Ve(t){return En.call(Be,t)?!0:En.call(ie,t)?!1:ne.test(t)?Be[t]=!0:(ie[t]=!0,!1)}function ze(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function $t(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,d,_,w){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?vt(t,_,Ze(n)):a!=null?vt(t,_,Ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Ze(w):t.removeAttribute("name")}function In(t,n,a,o,u,d,_,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){wt(t);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),wt(t)}function vt(t,n,a){n==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ai(t,n,a){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ze(a):""}function Ui(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(V(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),wt(t)}function si(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function en(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ni(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&en(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&en(t,d,n[d])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(t){return za.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var yu=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qs=null,Js=null;function Dp(t){var n=Oa(t);if(n&&(t=n.stateNode)){var a=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&$t(o)}break e;case"textarea":ai(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var bu=!1;function Up(t,n,a){if(bu)return t(n,a);bu=!0;try{var o=t(n);return o}finally{if(bu=!1,(Qs!==null||Js!==null)&&(ac(),Qs&&(n=Qs,t=Js,Js=Qs=null,Dp(n),t)))for(n=0;n<t.length;n++)Dp(t[n])}}function lo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Tn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(sa)try{var co={};Object.defineProperty(co,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Eu=!1}var Ia=null,Tu=null,_l=null;function Np(){if(_l)return _l;var t,n=Tu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[d-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Lp(){return!1}function Yn(t){function n(a,o,u,d,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:Lp,this.isPropagationStopped=Lp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Yn(Ss),uo=x({},Ss,{view:0,detail:0}),yx=Yn(uo),Au,wu,fo,Ml=x({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Au=t.screenX-fo.screenX,wu=t.screenY-fo.screenY):wu=Au=0,fo=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),Op=Yn(Ml),Mx=x({},Ml,{dataTransfer:0}),bx=Yn(Mx),Ex=x({},uo,{relatedTarget:0}),Cu=Yn(Ex),Tx=x({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Yn(Tx),wx=x({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cx=Yn(wx),Rx=x({},Ss,{data:0}),Pp=Yn(Rx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Nx[t])?!!n[t]:!1}function Ru(){return Lx}var Ox=x({},uo,{key:function(t){if(t.key){var n=Dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=Yn(Ox),zx=x({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Yn(zx),Ix=x({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Bx=Yn(Ix),Fx=x({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Yn(Fx),Gx=x({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Yn(Gx),kx=x({},Ss,{newState:0,oldState:0}),Xx=Yn(kx),jx=[9,13,27,32],Du=sa&&"CompositionEvent"in window,ho=null;sa&&"documentMode"in document&&(ho=document.documentMode);var Wx=sa&&"TextEvent"in window&&!ho,Ip=sa&&(!Du||ho&&8<ho&&11>=ho),Bp=" ",Fp=!1;function Hp(t,n){switch(t){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function qx(t,n){switch(t){case"compositionend":return Gp(n);case"keypress":return n.which!==32?null:(Fp=!0,Bp);case"textInput":return t=n.data,t===Bp&&Fp?null:t;default:return null}}function Yx(t,n){if($s)return t==="compositionend"||!Du&&Hp(t,n)?(t=Np(),_l=Tu=Ia=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zx[t.type]:n==="textarea"}function kp(t,n,a,o){Qs?Js?Js.push(o):Js=[o]:Qs=o,n=fc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var po=null,mo=null;function Kx(t){T0(t,0)}function bl(t){var n=_s(t);if($t(n))return t}function Xp(t,n){if(t==="change")return n}var jp=!1;if(sa){var Uu;if(sa){var Nu="oninput"in document;if(!Nu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Nu=typeof Wp.oninput=="function"}Uu=Nu}else Uu=!1;jp=Uu&&(!document.documentMode||9<document.documentMode)}function qp(){po&&(po.detachEvent("onpropertychange",Yp),mo=po=null)}function Yp(t){if(t.propertyName==="value"&&bl(mo)){var n=[];kp(n,mo,t,Mu(t)),Up(Kx,n)}}function Qx(t,n,a){t==="focusin"?(qp(),po=n,mo=a,po.attachEvent("onpropertychange",Yp)):t==="focusout"&&qp()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(mo)}function $x(t,n){if(t==="click")return bl(n)}function eS(t,n){if(t==="input"||t==="change")return bl(n)}function tS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:tS;function go(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!En.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,n){var a=Zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Qp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wt(t.document)}return n}function Lu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nS=sa&&"documentMode"in document&&11>=document.documentMode,er=null,Ou=null,vo=null,Pu=!1;function $p(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||er==null||er!==Wt(o)||(o=er,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&go(vo,o)||(vo=o,o=fc(Ou,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=er)))}function ys(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var tr={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},zu={},em={};sa&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Ms(t){if(zu[t])return zu[t];if(!tr[t])return t;var n=tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return zu[t]=n[a];return t}var tm=Ms("animationend"),nm=Ms("animationiteration"),im=Ms("animationstart"),iS=Ms("transitionrun"),aS=Ms("transitionstart"),sS=Ms("transitioncancel"),am=Ms("transitionend"),sm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Li(t,n){sm.set(t,n),q(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],nr=0,Bu=0;function Tl(){for(var t=nr,n=Bu=nr=0;n<t;){var a=xi[n];xi[n++]=null;var o=xi[n];xi[n++]=null;var u=xi[n];xi[n++]=null;var d=xi[n];if(xi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function Al(t,n,a,o){xi[nr++]=t,xi[nr++]=n,xi[nr++]=a,xi[nr++]=o,Bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Fu(t,n,a,o){return Al(t,n,a,o),wl(t)}function bs(t,n){return Al(t,null,null,n),wl(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function wl(t){if(50<Fo)throw Fo=0,Zf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ir={};function rS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,n,a,o){return new rS(t,n,a,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=oi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function om(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,d){var _=0;if(o=t,typeof t=="function")Hu(t)&&(_=1);else if(typeof t=="string")_=fy(t,a,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=oi(31,a,n,u),t.elementType=I,t.lanes=d,t;case C:return Es(a.children,u,d,n);case S:_=8,u|=24;break;case y:return t=oi(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case j:return t=oi(13,a,n,u),t.elementType=j,t.lanes=d,t;case z:return t=oi(19,a,n,u),t.elementType=z,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:_=10;break e;case R:_=9;break e;case O:_=11;break e;case F:_=14;break e;case T:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=oi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Es(t,n,a,o){return t=oi(7,t,o,n),t.lanes=a,t}function Gu(t,n,a){return t=oi(6,t,null,n),t.lanes=a,t}function lm(t){var n=oi(18,null,null,0);return n.stateNode=t,n}function Vu(t,n,a){return n=oi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cm=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=cm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},cm.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var ar=[],sr=0,Rl=null,_o=0,yi=[],Mi=0,Ba=null,ki=1,Xi="";function oa(t,n){ar[sr++]=_o,ar[sr++]=Rl,Rl=t,_o=n}function um(t,n,a){yi[Mi++]=ki,yi[Mi++]=Xi,yi[Mi++]=Ba,Ba=t;var o=ki;t=Xi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var d=32-Pe(n)+u;if(30<d){var _=u-u%5;d=(o&(1<<_)-1).toString(32),o>>=_,u-=_,ki=1<<32-Pe(n)+u|a<<u|o,Xi=d+t}else ki=1<<d|a<<u|o,Xi=t}function ku(t){t.return!==null&&(oa(t,1),um(t,1,0))}function Xu(t){for(;t===Rl;)Rl=ar[--sr],ar[sr]=null,_o=ar[--sr],ar[sr]=null;for(;t===Ba;)Ba=yi[--Mi],yi[Mi]=null,Xi=yi[--Mi],yi[Mi]=null,ki=yi[--Mi],yi[Mi]=null}function fm(t,n){yi[Mi++]=ki,yi[Mi++]=Xi,yi[Mi++]=Ba,ki=n.id,Xi=n.overflow,Ba=t}var An=null,Kt=null,bt=!1,Fa=null,bi=!1,ju=Error(s(519));function Ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(Si(n,t)),ju}function dm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[Tn]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)xt(Go[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Ui(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||R0(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Ha(t,!0)}function hm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:An=An.return}}function rr(t){if(t!==An)return!1;if(!bt)return hm(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ha(t),hm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=B0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=B0(t)}else n===27?(n=Kt,es(t.type)?(t=md,md=null,Kt=t):Kt=n):Kt=An?Ti(t.stateNode.nextSibling):null;return!0}function Ts(){Kt=An=null,bt=!1}function Wu(){var t=Fa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Fa=null),t}function xo(t){Fa===null?Fa=[t]:Fa.push(t)}var qu=P(null),As=null,la=null;function Ga(t,n,a){xe(qu,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=qu.current,Q(qu)}function Yu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Zu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var _=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var H=0;H<n.length;H++)if(w.context===n[H]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Yu(d.return,a,t),o||(_=null);break e}d=w.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Yu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function or(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var w=u.type;ri(u.pendingProps.value,_.value)||(t!==null?t.push(w):t=[w])}}else if(u===ye.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}u=u.return}t!==null&&Zu(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){As=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return pm(As,t)}function Ul(t,n){return As===null&&ws(t),pm(t,n)}function pm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(t===null)throw Error(s(308));la=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else la=la.next=n;return a}var oS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lS=r.unstable_scheduleCallback,cS=r.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new oS,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&lS(cS,function(){t.controller.abort()})}var yo=null,Qu=0,lr=0,cr=null;function uS(t,n){if(yo===null){var a=yo=[];Qu=0,lr=td(),cr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qu++,n.then(mm,mm),n}function mm(){if(--Qu===0&&yo!==null){cr!==null&&(cr.status="fulfilled");var t=yo;yo=null,lr=0,cr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=N.S;N.S=function(t,n){$g=we(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(t,n),gm!==null&&gm(t,n)};var Cs=P(null);function Ju(){var t=Cs.current;return t!==null?t:qt.pooledCache}function Nl(t,n){n===null?xe(Cs,Cs.current):xe(Cs,n.pool)}function vm(){var t=Ju();return t===null?null:{parent:hn._currentValue,pool:t}}var ur=Error(s(460)),$u=Error(s(474)),Ll=Error(s(542)),Ol={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(aa,aa);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw Ds=n,ur}}function Rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,ur):a}}var Ds=null;function Sm(){if(Ds===null)throw Error(s(459));var t=Ds;return Ds=null,t}function ym(t){if(t===ur||t===Ll)throw Error(s(483))}var fr=null,Mo=0;function Pl(t){var n=Mo;return Mo+=1,fr===null&&(fr=[]),xm(fr,t,n)}function bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Mm(t){function n(Z,X){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[X],Z.flags|=16):ee.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=ra(Z,X),Z.index=0,Z.sibling=null,Z}function d(Z,X,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<X?(Z.flags|=67108866,X):ee):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,X,ee,ge){return X===null||X.tag!==6?(X=Gu(ee,Z.mode,ge),X.return=Z,X):(X=u(X,ee),X.return=Z,X)}function H(Z,X,ee,ge){var Ke=ee.type;return Ke===C?de(Z,X,ee.props.children,ge,ee.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&Rs(Ke)===X.type)?(X=u(X,ee.props),bo(X,ee),X.return=Z,X):(X=Cl(ee.type,ee.key,ee.props,null,Z.mode,ge),bo(X,ee),X.return=Z,X)}function te(Z,X,ee,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==ee.containerInfo||X.stateNode.implementation!==ee.implementation?(X=Vu(ee,Z.mode,ge),X.return=Z,X):(X=u(X,ee.children||[]),X.return=Z,X)}function de(Z,X,ee,ge,Ke){return X===null||X.tag!==7?(X=Es(ee,Z.mode,ge,Ke),X.return=Z,X):(X=u(X,ee),X.return=Z,X)}function _e(Z,X,ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Gu(""+X,Z.mode,ee),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return ee=Cl(X.type,X.key,X.props,null,Z.mode,ee),bo(ee,X),ee.return=Z,ee;case E:return X=Vu(X,Z.mode,ee),X.return=Z,X;case T:return X=Rs(X),_e(Z,X,ee)}if(V(X)||$(X))return X=Es(X,Z.mode,ee,null),X.return=Z,X;if(typeof X.then=="function")return _e(Z,Pl(X),ee);if(X.$$typeof===L)return _e(Z,Ul(Z,X),ee);zl(Z,X)}return null}function se(Z,X,ee,ge){var Ke=X!==null?X.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Ke!==null?null:w(Z,X,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===Ke?H(Z,X,ee,ge):null;case E:return ee.key===Ke?te(Z,X,ee,ge):null;case T:return ee=Rs(ee),se(Z,X,ee,ge)}if(V(ee)||$(ee))return Ke!==null?null:de(Z,X,ee,ge,null);if(typeof ee.then=="function")return se(Z,X,Pl(ee),ge);if(ee.$$typeof===L)return se(Z,X,Ul(Z,ee),ge);zl(Z,ee)}return null}function le(Z,X,ee,ge,Ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(ee)||null,w(X,Z,""+ge,Ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return Z=Z.get(ge.key===null?ee:ge.key)||null,H(X,Z,ge,Ke);case E:return Z=Z.get(ge.key===null?ee:ge.key)||null,te(X,Z,ge,Ke);case T:return ge=Rs(ge),le(Z,X,ee,ge,Ke)}if(V(ge)||$(ge))return Z=Z.get(ee)||null,de(X,Z,ge,Ke,null);if(typeof ge.then=="function")return le(Z,X,ee,Pl(ge),Ke);if(ge.$$typeof===L)return le(Z,X,ee,Ul(X,ge),Ke);zl(X,ge)}return null}function je(Z,X,ee,ge){for(var Ke=null,Ct=null,qe=X,dt=X=0,Mt=null;qe!==null&&dt<ee.length;dt++){qe.index>dt?(Mt=qe,qe=null):Mt=qe.sibling;var Rt=se(Z,qe,ee[dt],ge);if(Rt===null){qe===null&&(qe=Mt);break}t&&qe&&Rt.alternate===null&&n(Z,qe),X=d(Rt,X,dt),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt,qe=Mt}if(dt===ee.length)return a(Z,qe),bt&&oa(Z,dt),Ke;if(qe===null){for(;dt<ee.length;dt++)qe=_e(Z,ee[dt],ge),qe!==null&&(X=d(qe,X,dt),Ct===null?Ke=qe:Ct.sibling=qe,Ct=qe);return bt&&oa(Z,dt),Ke}for(qe=o(qe);dt<ee.length;dt++)Mt=le(qe,Z,dt,ee[dt],ge),Mt!==null&&(t&&Mt.alternate!==null&&qe.delete(Mt.key===null?dt:Mt.key),X=d(Mt,X,dt),Ct===null?Ke=Mt:Ct.sibling=Mt,Ct=Mt);return t&&qe.forEach(function(ss){return n(Z,ss)}),bt&&oa(Z,dt),Ke}function Je(Z,X,ee,ge){if(ee==null)throw Error(s(151));for(var Ke=null,Ct=null,qe=X,dt=X=0,Mt=null,Rt=ee.next();qe!==null&&!Rt.done;dt++,Rt=ee.next()){qe.index>dt?(Mt=qe,qe=null):Mt=qe.sibling;var ss=se(Z,qe,Rt.value,ge);if(ss===null){qe===null&&(qe=Mt);break}t&&qe&&ss.alternate===null&&n(Z,qe),X=d(ss,X,dt),Ct===null?Ke=ss:Ct.sibling=ss,Ct=ss,qe=Mt}if(Rt.done)return a(Z,qe),bt&&oa(Z,dt),Ke;if(qe===null){for(;!Rt.done;dt++,Rt=ee.next())Rt=_e(Z,Rt.value,ge),Rt!==null&&(X=d(Rt,X,dt),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt);return bt&&oa(Z,dt),Ke}for(qe=o(qe);!Rt.done;dt++,Rt=ee.next())Rt=le(qe,Z,dt,Rt.value,ge),Rt!==null&&(t&&Rt.alternate!==null&&qe.delete(Rt.key===null?dt:Rt.key),X=d(Rt,X,dt),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt);return t&&qe.forEach(function(My){return n(Z,My)}),bt&&oa(Z,dt),Ke}function Xt(Z,X,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var Ke=ee.key;X!==null;){if(X.key===Ke){if(Ke=ee.type,Ke===C){if(X.tag===7){a(Z,X.sibling),ge=u(X,ee.props.children),ge.return=Z,Z=ge;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&Rs(Ke)===X.type){a(Z,X.sibling),ge=u(X,ee.props),bo(ge,ee),ge.return=Z,Z=ge;break e}a(Z,X);break}else n(Z,X);X=X.sibling}ee.type===C?(ge=Es(ee.props.children,Z.mode,ge,ee.key),ge.return=Z,Z=ge):(ge=Cl(ee.type,ee.key,ee.props,null,Z.mode,ge),bo(ge,ee),ge.return=Z,Z=ge)}return _(Z);case E:e:{for(Ke=ee.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===ee.containerInfo&&X.stateNode.implementation===ee.implementation){a(Z,X.sibling),ge=u(X,ee.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}ge=Vu(ee,Z.mode,ge),ge.return=Z,Z=ge}return _(Z);case T:return ee=Rs(ee),Xt(Z,X,ee,ge)}if(V(ee))return je(Z,X,ee,ge);if($(ee)){if(Ke=$(ee),typeof Ke!="function")throw Error(s(150));return ee=Ke.call(ee),Je(Z,X,ee,ge)}if(typeof ee.then=="function")return Xt(Z,X,Pl(ee),ge);if(ee.$$typeof===L)return Xt(Z,X,Ul(Z,ee),ge);zl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,X!==null&&X.tag===6?(a(Z,X.sibling),ge=u(X,ee),ge.return=Z,Z=ge):(a(Z,X),ge=Gu(ee,Z.mode,ge),ge.return=Z,Z=ge),_(Z)):a(Z,X)}return function(Z,X,ee,ge){try{Mo=0;var Ke=Xt(Z,X,ee,ge);return fr=null,Ke}catch(qe){if(qe===ur||qe===Ll)throw qe;var Ct=oi(29,qe,null,Z.mode);return Ct.lanes=ge,Ct.return=Z,Ct}finally{}}}var Us=Mm(!0),bm=Mm(!1),Va=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=wl(t),rm(t,null,a),n}return Al(t,o,n,a),wl(t)}function Eo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,_i(t,a)}}function nf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var af=!1;function To(){if(af){var t=cr;if(t!==null)throw t}}function Ao(t,n,a,o){af=!1;var u=t.updateQueue;Va=!1;var d=u.firstBaseUpdate,_=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var H=w,te=H.next;H.next=null,_===null?d=te:_.next=te,_=H;var de=t.alternate;de!==null&&(de=de.updateQueue,w=de.lastBaseUpdate,w!==_&&(w===null?de.firstBaseUpdate=te:w.next=te,de.lastBaseUpdate=H))}if(d!==null){var _e=u.baseState;_=0,de=te=H=null,w=d;do{var se=w.lane&-536870913,le=se!==w.lane;if(le?(yt&se)===se:(o&se)===se){se!==0&&se===lr&&(af=!0),de!==null&&(de=de.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var je=t,Je=w;se=n;var Xt=a;switch(Je.tag){case 1:if(je=Je.payload,typeof je=="function"){_e=je.call(Xt,_e,se);break e}_e=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Je.payload,se=typeof je=="function"?je.call(Xt,_e,se):je,se==null)break e;_e=x({},_e,se);break e;case 2:Va=!0}}se=w.callback,se!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[se]:le.push(se))}else le={lane:se,tag:w.tag,payload:w.payload,callback:w.callback,next:null},de===null?(te=de=le,H=_e):de=de.next=le,_|=se;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;le=w,w=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=de,d===null&&(u.shared.lanes=0),Za|=_,t.lanes=_,t.memoizedState=_e}}function Em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Em(a[t],n)}var dr=P(null),Il=P(0);function Am(t,n){t=_a,xe(Il,t),xe(dr,n),_a=t|n.baseLanes}function sf(){xe(Il,_a),xe(dr,dr.current)}function rf(){_a=Il.current,Q(dr),Q(Il)}var li=P(null),Ei=null;function ja(t){var n=t.alternate;xe(un,un.current&1),xe(li,t),Ei===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(Ei=t)}function of(t){xe(un,un.current),xe(li,t),Ei===null&&(Ei=t)}function wm(t){t.tag===22?(xe(un,un.current),xe(li,t),Ei===null&&(Ei=t)):Wa()}function Wa(){xe(un,un.current),xe(li,li.current)}function ci(t){Q(li),Ei===t&&(Ei=null),Q(un)}var un=P(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||pd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,ct=null,Vt=null,pn=null,Fl=!1,hr=!1,Ns=!1,Hl=0,wo=0,pr=null,dS=0;function rn(){throw Error(s(321))}function lf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function cf(t,n,a,o,u,d){return ua=d,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?ug:Ef,Ns=!1,d=a(o,u),Ns=!1,hr&&(d=Rm(n,a,o,u)),Cm(t),d}function Cm(t){N.H=Do;var n=Vt!==null&&Vt.next!==null;if(ua=0,pn=Vt=ct=null,Fl=!1,wo=0,pr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Dl(t)&&(mn=!0))}function Rm(t,n,a,o){ct=t;var u=0;do{if(hr&&(pr=null),wo=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,pn=Vt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}N.H=fg,d=n(a,o)}while(hr);return d}function hS(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Co(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(ct.flags|=1024),n}function uf(){var t=Hl!==0;return Hl=0,t}function ff(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function df(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}ua=0,pn=Vt=ct=null,hr=!1,wo=Hl=0,pr=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ct.memoizedState=pn=t:pn=pn.next=t,pn}function fn(){if(Vt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=pn===null?ct.memoizedState:pn.next;if(n!==null)pn=n,Vt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},pn===null?ct.memoizedState=pn=t:pn=pn.next=t}return pn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var n=wo;return wo+=1,pr===null&&(pr=[]),t=xm(pr,t,n),n=ct,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?ug:Ef),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===L)return wn(t)}throw Error(s(438,String(t)))}function hf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=K;return n.index++,a}function fa(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=fn();return pf(n,Vt,t)}function pf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var _=u.next;u.next=d.next,d.next=_}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=_=null,H=null,te=n,de=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(yt&_e)===_e:(ua&_e)===_e){var se=te.revertLane;if(se===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===lr&&(de=!0);else if((ua&se)===se){te=te.next,se===lr&&(de=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(w=H=_e,_=d):H=H.next=_e,ct.lanes|=se,Za|=se;_e=te.action,Ns&&a(d,_e),d=te.hasEagerState?te.eagerState:a(d,_e)}else se={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(w=H=se,_=d):H=H.next=se,ct.lanes|=_e,Za|=_e;te=te.next}while(te!==null&&te!==n);if(H===null?_=d:H.next=w,!ri(d,t.memoizedState)&&(mn=!0,de&&(a=cr,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function mf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do d=t(d,_.action),_=_.next;while(_!==u);ri(d,n.memoizedState)||(mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Dm(t,n,a){var o=ct,u=fn(),d=bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ri((Vt||u).memoizedState,a);if(_&&(u.memoizedState=a,mn=!0),u=u.queue,_f(Lm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,mr(9,{destroy:void 0},Nm.bind(null,o,u,a,n),null),qt===null)throw Error(s(349));d||(ua&127)!==0||Um(o,n,a)}return a}function Um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Gl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,o){n.value=a,n.getSnapshot=o,Om(n)&&Pm(t)}function Lm(t,n,a){return a(function(){Om(n)&&Pm(t)})}function Om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function Pm(t){var n=bs(t,2);n!==null&&$n(n,t,2)}function gf(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Ns){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},n}function zm(t,n,a,o){return t.baseState=a,pf(t,Vt,typeof o=="function"?o:fa)}function pS(t,n,a,o,u){if(Wl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};N.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Im(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Im(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=N.T,_={};N.T=_;try{var w=a(u,o),H=N.S;H!==null&&H(_,w),Bm(t,n,w)}catch(te){vf(t,n,te)}finally{d!==null&&_.types!==null&&(d.types=_.types),N.T=d}}else try{d=a(u,o),Bm(t,n,d)}catch(te){vf(t,n,te)}}function Bm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(t,n,o)},function(o){return vf(t,n,o)}):Fm(t,n,a)}function Fm(t,n,a){n.status="fulfilled",n.value=a,Hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function vf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==o)}t.action=null}function Hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Gm(t,n){return n}function Vm(t,n){if(bt){var a=qt.formState;if(a!==null){e:{var o=ct;if(bt){if(Kt){t:{for(var u=Kt,d=bi;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ti(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=Ti(u.nextSibling),o=u.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=o,a=og.bind(null,ct,o),o.dispatch=a,o=gf(!1),d=bf.bind(null,ct,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=pS.bind(null,ct,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function km(t){var n=fn();return Xm(n,Vt,t)}function Xm(t,n,a){if(n=pf(t,n,Gm)[0],t=kl(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(_){throw _===ur?Ll:_}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,mr(9,{destroy:void 0},mS.bind(null,u,a),null)),[o,d,t]}function mS(t,n){t.action=n}function jm(t){var n=fn(),a=Vt;if(a!==null)return Xm(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function mr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Gl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return fn().memoizedState}function Xl(t,n,a,o){var u=Vn();ct.flags|=t,u.memoizedState=mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Vt!==null&&o!==null&&lf(o,Vt.memoizedState.deps)?u.memoizedState=mr(n,d,a,o):(ct.flags|=t,u.memoizedState=mr(1|n,d,a,o))}function qm(t,n){Xl(8390656,8,t,n)}function _f(t,n){jl(2048,8,t,n)}function gS(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Gl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ym(t){var n=fn().memoizedState;return gS({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(t,n){return jl(4,2,t,n)}function Km(t,n){return jl(4,4,t,n)}function Qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Jm(t,n,a){a=a!=null?a.concat([t]):null,jl(4,4,Qm.bind(null,n,t),a)}function xf(){}function $m(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function eg(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lf(n,o[1]))return o[0];if(o=t(),Ns){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function Sf(t,n,a){return a===void 0||(ua&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=t0(),ct.lanes|=t,Za|=t,a)}function tg(t,n,a,o){return ri(a,n)?a:dr.current!==null?(t=Sf(t,a,o),ri(t,n)||(mn=!0),t):(ua&42)===0||(ua&1073741824)!==0&&(yt&261930)===0?(mn=!0,t.memoizedState=a):(t=t0(),ct.lanes|=t,Za|=t,n)}function ng(t,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var _=N.T,w={};N.T=w,bf(t,!1,n,a);try{var H=u(),te=N.S;if(te!==null&&te(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=fS(H,o);Ro(t,n,de,di(t))}else Ro(t,n,o,di(t))}catch(_e){Ro(t,n,{then:function(){},status:"rejected",reason:_e},di())}finally{B.p=d,_!==null&&w.types!==null&&(_.types=w.types),N.T=_}}function vS(){}function yf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=ig(t).queue;ng(t,u,n,re,a===null?vS:function(){return ag(t),a(o)})}function ig(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function ag(t){var n=ig(t);n.next===null&&(n=t.alternate.memoizedState),Ro(t,n.next.queue,{},di())}function Mf(){return wn(Wo)}function sg(){return fn().memoizedState}function rg(){return fn().memoizedState}function _S(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=ka(a);var o=Xa(n,t,a);o!==null&&($n(o,n,a),Eo(o,n,a)),n={cache:Ku()},t.payload=n;return}n=n.return}}function xS(t,n,a){var o=di();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(t)?lg(n,a):(a=Fu(t,n,a,o),a!==null&&($n(a,t,o),cg(a,n,o)))}function og(t,n,a){var o=di();Ro(t,n,a,o)}function Ro(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))lg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var _=n.lastRenderedState,w=d(_,a);if(u.hasEagerState=!0,u.eagerState=w,ri(w,_))return Al(t,n,u,0),qt===null&&Tl(),!1}catch{}finally{}if(a=Fu(t,n,u,o),a!==null)return $n(a,t,o),cg(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:td(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(s(479))}else n=Fu(t,a,o,2),n!==null&&$n(n,t,2)}function Wl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function lg(t,n){hr=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function cg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,_i(t,a)}}var Do={readContext:wn,use:Vl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Do.useEffectEvent=rn;var ug={readContext:wn,use:Vl,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,Qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var o=t();if(Ns){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(Ns){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=xS.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=gf(t);var n=t.queue,a=og.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(t,n){var a=Vn();return Sf(a,t,n)},useTransition:function(){var t=gf(!1);return t=ng.bind(null,ct,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Vn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(yt&127)!==0||Um(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,qm(Lm.bind(null,o,d,t),[t]),o.flags|=2048,mr(9,{destroy:void 0},Nm.bind(null,o,d,a,n),null),a},useId:function(){var t=Vn(),n=qt.identifierPrefix;if(bt){var a=Xi,o=ki;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:hf,useCacheRefresh:function(){return Vn().memoizedState=_S.bind(null,ct)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:wn,use:Vl,useCallback:$m,useContext:wn,useEffect:_f,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:eg,useReducer:kl,useRef:Wm,useState:function(){return kl(fa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=fn();return tg(a,Vt.memoizedState,t,n)},useTransition:function(){var t=kl(fa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:Dm,useId:sg,useHostTransitionStatus:Mf,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=fn();return zm(a,Vt,t,n)},useMemoCache:hf,useCacheRefresh:rg};Ef.useEffectEvent=Ym;var fg={readContext:wn,use:Vl,useCallback:$m,useContext:wn,useEffect:_f,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:eg,useReducer:mf,useRef:Wm,useState:function(){return mf(fa)},useDebugValue:xf,useDeferredValue:function(t,n){var a=fn();return Vt===null?Sf(a,t,n):tg(a,Vt.memoizedState,t,n)},useTransition:function(){var t=mf(fa)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:Dm,useId:sg,useHostTransitionStatus:Mf,useFormState:jm,useActionState:jm,useOptimistic:function(t,n){var a=fn();return Vt!==null?zm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:rg};fg.useEffectEvent=Ym;function Tf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Af={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=di(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&($n(n,t,o),Eo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=di(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&($n(n,t,o),Eo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(t,o,a),n!==null&&($n(n,t,a),Eo(n,t,a))}};function dg(t,n,a,o,u,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,_):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(u,d):!0}function hg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Af.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function pg(t){El(t)}function mg(t){console.error(t)}function gg(t){El(t)}function ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function vg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(t,n)},a}function _g(t){return t=ka(t),t.tag=3,t}function xg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){vg(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){vg(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function SS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&or(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 31:case 13:return Ei===null?sc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Jf(t,o,u)),!1}throw Error(s(435,a.tag))}return Jf(t,o,u),sc(),!1}if(bt)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ju&&(t=Error(s(422),{cause:o}),xo(Si(t,a)))):(o!==ju&&(n=Error(s(423),{cause:o}),xo(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Si(o,a),u=wf(t.stateNode,o,u),nf(t,u),on!==4&&(on=2)),!1;var d=Error(s(520),{cause:o});if(d=Si(d,a),Bo===null?Bo=[d]:Bo.push(d),on!==4&&(on=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=wf(a.stateNode,o,t),nf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ka===null||!Ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),xg(u,t,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),mn=!1;function Cn(t,n,a,o){n.child=t===null?bm(n,null,a,o):Us(n,t.child,a,o)}function Sg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var _={};for(var w in o)w!=="ref"&&(_[w]=o[w])}else _=o;return ws(n),o=cf(t,n,a,_,d,u),w=uf(),t!==null&&!mn?(ff(t,n,u),da(t,n,u)):(bt&&w&&ku(n),n.flags|=1,Cn(t,n,o,u),n.child)}function yg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Hu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Mg(t,n,d,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!zf(t,u)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(_,o)&&t.ref===n.ref)return da(t,n,u)}return n.flags|=1,t=ra(d,o),t.ref=n.ref,t.return=n,n.child=t}function Mg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(go(d,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=d,zf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,da(t,n,u)}return Rf(t,n,a,o,u)}function bg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Eg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Am(n,d):sf(),wm(n);else return o=n.lanes=536870912,Eg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Am(n,d),Wa(),n.memoizedState=null):(t!==null&&Nl(n,null),sf(),Wa());return Cn(t,n,u,a),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(t,n,a,o,u){var d=Ju();return d=d===null?null:{parent:hn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),sf(),wm(n),t!==null&&or(t,n,o,!0),n.childLanes=u,null}function Yl(t,n){return n=Kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Tg(t,n,a){return Us(n,t.child,null,a),t=Yl(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function yS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Yl(n,o),n.lanes=536870912,Uo(null,t);if(of(n),(t=Kt)?(t=I0(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Yl(n,o)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(of(n),u)if(n.flags&256)n.flags&=-257,n=Tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||or(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=qt,o!==null&&(_=ii(o,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,bs(t,_),$n(o,t,_),Cf;sc(),n=Tg(t,n,a)}else t=d.treeContext,Kt=Ti(_.nextSibling),An=n,bt=!0,Fa=null,bi=!1,t!==null&&fm(n,t),n=Yl(n,o),n.flags|=4096;return n}return t=ra(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rf(t,n,a,o,u){return ws(n),a=cf(t,n,a,o,void 0,u),o=uf(),t!==null&&!mn?(ff(t,n,u),da(t,n,u)):(bt&&o&&ku(n),n.flags|=1,Cn(t,n,a,u),n.child)}function Ag(t,n,a,o,u,d){return ws(n),n.updateQueue=null,a=Rm(n,o,a,u),Cm(t),o=uf(),t!==null&&!mn?(ff(t,n,d),da(t,n,d)):(bt&&o&&ku(n),n.flags|=1,Cn(t,n,a,d),n.child)}function wg(t,n,a,o,u){if(ws(n),n.stateNode===null){var d=ir,_=a.contextType;typeof _=="object"&&_!==null&&(d=wn(_)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Af,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},ef(n),_=a.contextType,d.context=typeof _=="object"&&_!==null?wn(_):ir,d.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Tf(n,a,_,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Af.enqueueReplaceState(d,d.state,null),Ao(n,o,d,u),To(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,H=Ls(a,w);d.props=H;var te=d.context,de=a.contextType;_=ir,typeof de=="object"&&de!==null&&(_=wn(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,de||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||te!==_)&&hg(n,d,o,_),Va=!1;var se=n.memoizedState;d.state=se,Ao(n,o,d,u),To(),te=n.memoizedState,w||se!==te||Va?(typeof _e=="function"&&(Tf(n,a,_e,o),te=n.memoizedState),(H=Va||dg(n,a,H,o,se,te,_))?(de||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=_,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,tf(t,n),_=n.memoizedProps,de=Ls(a,_),d.props=de,_e=n.pendingProps,se=d.context,te=a.contextType,H=ir,typeof te=="object"&&te!==null&&(H=wn(te)),w=a.getDerivedStateFromProps,(te=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==_e||se!==H)&&hg(n,d,o,H),Va=!1,se=n.memoizedState,d.state=se,Ao(n,o,d,u),To();var le=n.memoizedState;_!==_e||se!==le||Va||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof w=="function"&&(Tf(n,a,w,o),le=n.memoizedState),(de=Va||dg(n,a,de,o,se,le,H)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=H,o=de):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Us(n,t.child,null,u),n.child=Us(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=da(t,n,u),t}function Cg(t,n,a,o){return Ts(),n.flags|=256,Cn(t,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:vm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function Rg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?ja(n):Wa(),(t=Kt)?(t=I0(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=lm(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Ha(n);return pd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Wa(),u=n.mode,w=Kl({mode:"hidden",children:w},u),o=Es(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Uf(a),o.childLanes=Nf(t,_,a),n.memoizedState=Df,Uo(null,o)):(ja(n),Lf(n,w))}var H=t.memoizedState;if(H!==null&&(w=H.dehydrated,w!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Of(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),w=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),w=Es(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Us(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Nf(t,_,a),n.memoizedState=Df,n=Uo(null,o));else if(ja(n),pd(w)){if(_=w.nextSibling&&w.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(s(419)),o.stack="",o.digest=_,xo({value:o,source:null,stack:null}),n=Of(t,n,a)}else if(mn||or(t,n,a,!1),_=(a&t.childLanes)!==0,mn||_){if(_=qt,_!==null&&(o=ii(_,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,bs(t,o),$n(_,t,o),Cf;hd(w)||sc(),n=Of(t,n,a)}else hd(w)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Kt=Ti(w.nextSibling),An=n,bt=!0,Fa=null,bi=!1,t!==null&&fm(n,t),n=Lf(n,o.children),n.flags|=4096);return n}return u?(Wa(),w=o.fallback,u=n.mode,H=t.child,te=H.sibling,o=ra(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,te!==null?w=ra(te,w):(w=Es(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Uo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Uf(a):(u=w.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=vm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=Nf(t,_,a),n.memoizedState=Df,Uo(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Lf(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=oi(22,t,null,n),t.lanes=0,t}function Of(t,n,a){return Us(n,t.child,null,a),t=Lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Dg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Yu(t.return,n,a)}function Pf(t,n,a,o,u,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=d)}function Ug(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var _=un.current,w=(_&2)!==0;if(w?(_=_&1|2,n.flags|=128):_&=1,xe(un,_),Cn(t,n,o,a),o=bt?_o:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,a,n);else if(t.tag===19)Dg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Pf(n,!0,a,null,d,o);break;case"together":Pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function MS(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ga(n,hn,t.memoizedState.cache),Ts();break;case 27:case 5:$e(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rg(t,n,a):(ja(n),t=da(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(or(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ug(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(un,un.current),o)break;return null;case 22:return n.lanes=0,bg(t,n,a,n.pendingProps);case 24:Ga(n,hn,t.memoizedState.cache)}return da(t,n,a)}function Ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!zf(t,a)&&(n.flags&128)===0)return mn=!1,MS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,bt&&(n.flags&1048576)!==0&&um(n,_o,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Rs(n.elementType),n.type=t,typeof t=="function")Hu(t)?(o=Ls(t,o),n.tag=1,n=wg(null,n,t,o,a)):(n.tag=0,n=Rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=Sg(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=yg(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),wg(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,tf(t,n),Ao(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ga(n,hn,o),o!==d.cache&&Zu(n,[hn],a,!0),To(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Cg(t,n,o,a);break e}else if(o!==u){u=Si(Error(s(424)),n),xo(u),n=Cg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Ti(t.firstChild),An=n,bt=!0,Fa=null,bi=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ts(),o===u){n=da(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Zl(t,n),t===null?(a=k0(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=dc(oe.current).createElement(a),o[cn]=n,o[Tn]=t,Rn(o,a,t),dn(o),n.stateNode=o):n.memoizedState=k0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&bt&&(o=n.stateNode=H0(n.type,n.pendingProps,oe.current),An=n,bi=!0,u=Kt,es(n.type)?(md=u,Kt=Ti(o.firstChild)):Kt=u),Cn(t,n,n.pendingProps.children,a),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=Kt)&&(o=JS(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,An=n,Kt=Ti(o.firstChild),bi=!1,u=!0):u=!1),u||Ha(n)),$e(n),u=n.type,d=n.pendingProps,_=t!==null?t.memoizedProps:null,o=d.children,ud(u,d)?o=null:_!==null&&ud(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=cf(t,n,hS,null,null,a),Wo._currentValue=u),Zl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=Kt)&&(a=$S(a,n.pendingProps,bi),a!==null?(n.stateNode=a,An=n,Kt=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Rg(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Us(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return Sg(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ws(n),u=wn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return yg(t,n,n.type,n.pendingProps,a);case 15:return Mg(t,n,n.type,n.pendingProps,a);case 19:return Ug(t,n,a);case 31:return yS(t,n,a);case 22:return bg(t,n,a,n.pendingProps);case 24:return ws(n),o=wn(hn),t===null?(u=Ju(),u===null&&(u=qt,d=Ku(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},ef(n),Ga(n,hn,u)):((t.lanes&a)!==0&&(tf(t,n),Ao(n,null,null,a),To()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,hn,o)):(o=d.cache,Ga(n,hn,o),o!==u.cache&&Zu(n,[hn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function If(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(s0())t.flags|=8192;else throw Ds=Ol,$u}else t.flags&=-16777217}function Lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(s0())t.flags|=8192;else throw Ds=Ol,$u}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,xr|=n)}function No(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function bS(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(hn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(rr(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ha(n),d!==null?(Qt(n),Lg(n,d)):(Qt(n),If(n,u,null,o,a))):d?d!==t.memoizedState?(ha(n),Qt(n),Lg(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ha(n),Qt(n),If(n,u,t,o,a)),null;case 27:if(Qe(n),a=oe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Te.current,rr(n)?dm(n):(t=H0(u,o,a),n.stateNode=t,ha(n))}return Qt(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(d=Te.current,rr(n))dm(n);else{var _=dc(oe.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}d[cn]=n,d[Tn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=d;e:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ha(n)}}return Qt(n),If(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=oe.current,rr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||R0(t.nodeValue,a)),t||Ha(n,!0)}else t=dc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=rr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=rr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Qt(n),null);case 4:return He(),t===null&&sd(n.stateNode.containerInfo),Qt(n),null;case 10:return ca(n.type),Qt(n),null;case 19:if(Q(un),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)No(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Bl(t),d!==null){for(n.flags|=128,No(o,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)om(a,t),a=a.sibling;return xe(un,un.current&1|2),bt&&oa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&we()>nc&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=Bl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!bt)return Qt(n),null}else 2*we()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,a=un.current,xe(un,u?a&1|2:a&1),bt&&oa(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ci(n),rf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(hn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ES(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(hn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(un),null;case 4:return He(),null;case 10:return ca(n.type),null;case 22:case 23:return ci(n),rf(),t!==null&&Q(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(hn),null;case 25:return null;default:return null}}function Og(t,n){switch(Xu(n),n.tag){case 3:ca(hn),He();break;case 26:case 27:case 5:Qe(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:Q(un);break;case 10:ca(n.type);break;case 22:case 23:ci(n),rf(),t!==null&&Q(Cs);break;case 24:ca(hn)}}function Lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==u)}}catch(w){Bt(n,n.return,w)}}function qa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var _=o.inst,w=_.destroy;if(w!==void 0){_.destroy=void 0,u=n;var H=a,te=w;try{te()}catch(de){Bt(u,H,de)}}}o=o.next}while(o!==d)}}catch(de){Bt(n,n.return,de)}}function Pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Tm(n,a)}catch(o){Bt(t,t.return,o)}}}function zg(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function Oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function ji(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Bf(t,n,a){try{var o=t.stateNode;WS(o,t.type,a,n),o[Tn]=n}catch(u){Bt(t,t.return,u)}}function Bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Hf(t,n,a),t=t.sibling;t!==null;)Hf(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function Fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=t,n[Tn]=a}catch(d){Bt(t,t.return,d)}}var pa=!1,gn=!1,Gf=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function TS(t,n){if(t=t.containerInfo,ld=xc,t=Jp(t),Lu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,w=-1,H=-1,te=0,de=0,_e=t,se=null;t:for(;;){for(var le;_e!==a||u!==0&&_e.nodeType!==3||(w=_+u),_e!==d||o!==0&&_e.nodeType!==3||(H=_+o),_e.nodeType===3&&(_+=_e.nodeValue.length),(le=_e.firstChild)!==null;)se=_e,_e=le;for(;;){if(_e===t)break t;if(se===a&&++te===u&&(w=_),se===d&&++de===o&&(H=_),(le=_e.nextSibling)!==null)break;_e=se,se=_e.parentNode}_e=le}a=w===-1||H===-1?null:{start:w,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:t,selectionRange:a},xc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=Ls(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Bt(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)dd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function Gg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),o&4&&Lo(5,a);break;case 1:if(ga(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Bt(a,a.return,_)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Bt(a,a.return,_)}}o&64&&Pg(a),o&512&&Oo(a,a.return);break;case 3:if(ga(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(t,n)}catch(_){Bt(a,a.return,_)}}break;case 27:n===null&&o&4&&Fg(a);case 26:case 5:ga(t,a),n===null&&o&4&&Ig(a),o&512&&Oo(a,a.return);break;case 12:ga(t,a);break;case 31:ga(t,a),o&4&&Xg(t,a);break;case 13:ga(t,a),o&4&&jg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=OS.bind(null,a),ey(t,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||gn,u=pa;var d=gn;pa=o,(gn=n)&&!d?va(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),pa=u,gn=d}break;case 30:break;default:ga(t,a)}}function Vg(t){var n=t.alternate;n!==null&&(t.alternate=null,Vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&oo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Zn=!1;function ma(t,n,a){for(a=a.child;a!==null;)kg(t,n,a),a=a.sibling}function kg(t,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:gn||ji(a,n),ma(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||ji(a,n);var o=tn,u=Zn;es(a.type)&&(tn=a.stateNode,Zn=!1),ma(t,n,a),ko(a.stateNode),tn=o,Zn=u;break;case 5:gn||ji(a,n);case 6:if(o=tn,u=Zn,tn=null,ma(t,n,a),tn=o,Zn=u,tn!==null)if(Zn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{tn.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:tn!==null&&(Zn?(t=tn,P0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wr(t)):P0(tn,a.stateNode));break;case 4:o=tn,u=Zn,tn=a.stateNode.containerInfo,Zn=!0,ma(t,n,a),tn=o,Zn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),gn||qa(4,a,n),ma(t,n,a);break;case 1:gn||(ji(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&zg(a,n,o)),ma(t,n,a);break;case 21:ma(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ma(t,n,a),gn=o;break;default:ma(t,n,a)}}function Xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{wr(t)}catch(a){Bt(n,n.return,a)}}}function jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wr(t)}catch(a){Bt(n,n.return,a)}}function AS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hg),n;default:throw Error(s(435,t.tag))}}function $l(t,n){var a=AS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=PS.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,_=n,w=_;e:for(;w!==null;){switch(w.tag){case 27:if(es(w.type)){tn=w.stateNode,Zn=!1;break e}break;case 5:tn=w.stateNode,Zn=!1;break e;case 3:case 4:tn=w.stateNode.containerInfo,Zn=!0;break e}w=w.return}if(tn===null)throw Error(s(160));kg(d,_,u),tn=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,t),n=n.sibling}var Oi=null;function Wg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(qa(3,t,t.return),Lo(3,t),qa(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(gn||a===null||ji(a,a.return)),o&64&&pa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(Kn(n,t),Qn(t),o&512&&(gn||a===null||ji(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Na]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[cn]=t,dn(d),o=d;break e;case"link":var _=W0("link","href",u).get(o+(a.href||""));if(_){for(var w=0;w<_.length;w++)if(d=_[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(w,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(_=W0("meta","content",u).get(o+(a.content||""))){for(w=0;w<_.length;w++)if(d=_[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(w,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=t,dn(d),o=d}t.stateNode=o}else q0(u,t.type,t.stateNode);else t.stateNode=j0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?q0(u,t.type,t.stateNode):j0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(gn||a===null||ji(a,a.return)),a!==null&&o&4&&Bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(gn||a===null||ji(a,a.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(je){Bt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Bf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){Bt(t,t.return,je)}}break;case 3:if(mc=null,u=Oi,Oi=hc(n.containerInfo),Kn(n,t),Oi=u,Qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(n.containerInfo)}catch(je){Bt(t,t.return,je)}Gf&&(Gf=!1,qg(t));break;case 4:o=Oi,Oi=hc(t.stateNode.containerInfo),Kn(n,t),Qn(t),Oi=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=we()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=pa,de=gn;if(pa=te||u,gn=de||H,Kn(n,t),gn=de,pa=te,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||pa||gn||Os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{w=H.stateNode;var _e=H.memoizedProps.style,se=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;w.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(je){Bt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){Bt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?z0(le,!0):z0(H.stateNode,!1)}catch(je){Bt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Bg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Ff(t);Jl(t,d,u);break;case 5:var _=a.stateNode;a.flags&32&&(si(_,""),a.flags&=-33);var w=Ff(t);Jl(t,w,_);break;case 3:case 4:var H=a.stateNode.containerInfo,te=Ff(t);Hf(t,te,H);break;default:throw Error(s(161))}}catch(de){Bt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;qg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gg(t,n.alternate,n),n=n.sibling}function Os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Os(n);break;case 1:ji(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zg(n,n.return,a),Os(n);break;case 27:ko(n.stateNode);case 26:case 5:ji(n,n.return),Os(n);break;case 22:n.memoizedState===null&&Os(n);break;case 30:Os(n);break;default:Os(n)}t=t.sibling}}function va(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,_=d.flags;switch(d.tag){case 0:case 11:case 15:va(u,d,a),Lo(4,d);break;case 1:if(va(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Bt(o,o.return,te)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Em(H[u],w)}catch(te){Bt(o,o.return,te)}}a&&_&64&&Pg(d),Oo(d,d.return);break;case 27:Fg(d);case 26:case 5:va(u,d,a),a&&o===null&&_&4&&Ig(d),Oo(d,d.return);break;case 12:va(u,d,a);break;case 31:va(u,d,a),a&&_&4&&Xg(u,d);break;case 13:va(u,d,a),a&&_&4&&jg(u,d);break;case 22:d.memoizedState===null&&va(u,d,a),Oo(d,d.return);break;case 30:break;default:va(u,d,a)}n=n.sibling}}function Vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&So(a))}function kf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t))}function Pi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yg(t,n,a,o),n=n.sibling}function Yg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n,a,o),u&2048&&Lo(9,n);break;case 1:Pi(t,n,a,o);break;case 3:Pi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t)));break;case 12:if(u&2048){Pi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,_=d.id,w=d.onPostCommit;typeof w=="function"&&w(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else Pi(t,n,a,o);break;case 31:Pi(t,n,a,o);break;case 13:Pi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,_=n.alternate,n.memoizedState!==null?d._visibility&2?Pi(t,n,a,o):Po(t,n):d._visibility&2?Pi(t,n,a,o):(d._visibility|=2,gr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(_,n);break;case 24:Pi(t,n,a,o),u&2048&&kf(n.alternate,n);break;default:Pi(t,n,a,o)}}function gr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,_=n,w=a,H=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:gr(d,_,w,H,u),Lo(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?gr(d,_,w,H,u):Po(d,_):(de._visibility|=2,gr(d,_,w,H,u)),u&&te&2048&&Vf(_.alternate,_);break;case 24:gr(d,_,w,H,u),u&&te&2048&&kf(_.alternate,_);break;default:gr(d,_,w,H,u)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Po(a,o),u&2048&&Vf(o.alternate,o);break;case 24:Po(a,o),u&2048&&kf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var zo=8192;function vr(t,n,a){if(t.subtreeFlags&zo)for(t=t.child;t!==null;)Zg(t,n,a),t=t.sibling}function Zg(t,n,a){switch(t.tag){case 26:vr(t,n,a),t.flags&zo&&t.memoizedState!==null&&dy(a,Oi,t.memoizedState,t.memoizedProps);break;case 5:vr(t,n,a);break;case 3:case 4:var o=Oi;Oi=hc(t.stateNode.containerInfo),vr(t,n,a),Oi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=zo,zo=16777216,vr(t,n,a),zo=o):vr(t,n,a));break;default:vr(t,n,a)}}function Kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Jg(o,t)}Kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qg(t),t=t.sibling}function Qg(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&qa(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Io(t);break;default:Io(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Jg(o,t)}Kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function Jg(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(Vg(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var wS={getCacheForType:function(t){var n=wn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(hn).controller.signal}},CS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,qt=null,_t=null,yt=0,It=0,ui=null,Ya=!1,_r=!1,Xf=!1,_a=0,on=0,Za=0,Ps=0,jf=0,fi=0,xr=0,Bo=null,Jn=null,Wf=!1,tc=0,$g=0,nc=1/0,ic=null,Ka=null,xn=0,Qa=null,Sr=null,xa=0,qf=0,Yf=null,e0=null,Fo=0,Zf=null;function di(){return(Ut&2)!==0&&yt!==0?yt&-yt:N.T!==null?td():ao()}function t0(){if(fi===0)if((yt&536870912)===0||bt){var t=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function $n(t,n,a){(t===qt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Ja(t,yt,fi,!1)),tt(t,a),((Ut&2)===0||t!==qt)&&(t===qt&&((Ut&2)===0&&(Ps|=a),on===4&&Ja(t,yt,fi,!1)),Wi(t))}function n0(t,n,a){if((Ut&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=o?US(t,n):Qf(t,n,!0),d=o;do{if(u===0){_r&&!o&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!RS(a)){u=Qf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var w=t;u=Bo;var H=w.current.memoizedState.isDehydrated;if(H&&(yr(w,_).flags|=256),_=Qf(w,_,!1),_!==2){if(Xf&&!H){w.errorRecoveryDisabledLanes|=d,Ps|=d,u=4;break e}d=Jn,Jn=u,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}u=_}if(d=!1,u!==2)continue}}if(u===1){yr(t,0),Ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,fi,!Ya);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-we(),10<u)){if(Ja(o,n,fi,!Ya),he(o,0,!0)!==0)break e;xa=n,o.timeoutHandle=L0(i0.bind(null,o,a,Jn,ic,Wf,n,fi,Ps,xr,Ya,d,"Throttled",-0,0),u);break e}i0(o,a,Jn,ic,Wf,n,fi,Ps,xr,Ya,d,null,-0,0)}}break}while(!0);Wi(t)}function i0(t,n,a,o,u,d,_,w,H,te,de,_e,se,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Zg(n,d,_e);var je=(d&62914560)===d?tc-we():(d&4194048)===d?$g-we():0;if(je=hy(_e,je),je!==null){xa=d,t.cancelPendingCommit=je(f0.bind(null,t,n,d,a,o,u,_,w,H,de,_e,null,se,le)),Ja(t,d,_,!te);return}}f0(t,n,d,a,o,u,_,w,H)}function RS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ri(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,o){n&=~jf,n&=~Ps,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Pe(u),_=1<<d;o[d]=-1,u&=~_}a!==0&&Dt(t,a,n)}function ac(){return(Ut&6)===0?(Ho(0),!1):!0}function Kf(){if(_t!==null){if(It===0)var t=_t.return;else t=_t,la=As=null,df(t),fr=null,Mo=0,t=_t;for(;t!==null;)Og(t.alternate,t),t=t.return;_t=null}}function yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ZS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xa=0,Kf(),qt=t,_t=a=ra(t.current,null),yt=n,It=0,ui=null,Ya=!1,_r=Fe(t,n),Xf=!1,xr=fi=jf=Ps=Za=on=0,Jn=Bo=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),d=1<<u;n|=t[u],o&=~d}return _a=n,Tl(),a}function a0(t,n){ct=null,N.H=Do,n===ur||n===Ll?(n=Sm(),It=3):n===$u?(n=Sm(),It=4):It=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,_t===null&&(on=1,ql(t,Si(n,t.current)))}function s0(){var t=li.current;return t===null?!0:(yt&4194048)===yt?Ei===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Ei:!1}function r0(){var t=N.H;return N.H=Do,t===null?Do:t}function o0(){var t=N.A;return N.A=wS,t}function sc(){on=4,Ya||(yt&4194048)!==yt&&li.current!==null||(_r=!0),(Za&134217727)===0&&(Ps&134217727)===0||qt===null||Ja(qt,yt,fi,!1)}function Qf(t,n,a){var o=Ut;Ut|=2;var u=r0(),d=o0();(qt!==t||yt!==n)&&(ic=null,yr(t,n)),n=!1;var _=on;e:do try{if(It!==0&&_t!==null){var w=_t,H=ui;switch(It){case 8:Kf(),_=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var te=It;if(It=0,ui=null,Mr(t,w,H,te),a&&_r){_=0;break e}break;default:te=It,It=0,ui=null,Mr(t,w,H,te)}}DS(),_=on;break}catch(de){a0(t,de)}while(!0);return n&&t.shellSuspendCounter++,la=As=null,Ut=o,N.H=u,N.A=d,_t===null&&(qt=null,yt=0,Tl()),_}function DS(){for(;_t!==null;)l0(_t)}function US(t,n){var a=Ut;Ut|=2;var o=r0(),u=o0();qt!==t||yt!==n?(ic=null,nc=we()+500,yr(t,n)):_r=Fe(t,n);e:do try{if(It!==0&&_t!==null){n=_t;var d=ui;t:switch(It){case 1:It=0,ui=null,Mr(t,n,d,1);break;case 2:case 9:if(_m(d)){It=0,ui=null,c0(n);break}n=function(){It!==2&&It!==9||qt!==t||(It=7),Wi(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:_m(d)?(It=0,ui=null,c0(n)):(It=0,ui=null,Mr(t,n,d,7));break;case 5:var _=null;switch(_t.tag){case 26:_=_t.memoizedState;case 5:case 27:var w=_t;if(_?Y0(_):w.stateNode.complete){It=0,ui=null;var H=w.sibling;if(H!==null)_t=H;else{var te=w.return;te!==null?(_t=te,rc(te)):_t=null}break t}}It=0,ui=null,Mr(t,n,d,5);break;case 6:It=0,ui=null,Mr(t,n,d,6);break;case 8:Kf(),on=6;break e;default:throw Error(s(462))}}NS();break}catch(de){a0(t,de)}while(!0);return la=As=null,N.H=o,N.A=u,Ut=a,_t!==null?0:(qt=null,yt=0,Tl(),on)}function NS(){for(;_t!==null&&!mt();)l0(_t)}function l0(t){var n=Ng(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?rc(t):_t=n}function c0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ag(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Ag(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:df(n);default:Og(a,n),n=_t=om(n,_a),n=Ng(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?rc(t):_t=n}function Mr(t,n,a,o){la=As=null,df(n),fr=null,Mo=0;var u=n.return;try{if(SS(t,u,n,a,yt)){on=1,ql(t,Si(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;on=1,ql(t,Si(a,t.current)),_t=null;return}n.flags&32768?(bt||o===1?t=!0:_r||(yt&536870912)!==0?t=!1:(Ya=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),u0(n,t)):rc(n)}function rc(t){var n=t;do{if((n.flags&32768)!==0){u0(n,Ya);return}t=n.return;var a=bS(n.alternate,n,_a);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);on===0&&(on=5)}function u0(t,n){do{var a=ES(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);on=6,_t=null}function f0(t,n,a,o,u,d,_,w,H){t.cancelPendingCommit=null;do oc();while(xn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Bu,an(t,a,d,_,w,H),t===qt&&(_t=qt=null,yt=0),Sr=n,Qa=t,xa=a,qf=d,Yf=u,e0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zS(J,function(){return g0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=B.p,B.p=2,_=Ut,Ut|=4;try{TS(t,n,a)}finally{Ut=_,B.p=u,N.T=o}}xn=1,d0(),h0(),p0()}}function d0(){if(xn===1){xn=0;var t=Qa,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var u=Ut;Ut|=4;try{Wg(n,t);var d=cd,_=Jp(t.containerInfo),w=d.focusedElem,H=d.selectionRange;if(_!==w&&w&&w.ownerDocument&&Qp(w.ownerDocument.documentElement,w)){if(H!==null&&Lu(w)){var te=H.start,de=H.end;if(de===void 0&&(de=te),"selectionStart"in w)w.selectionStart=te,w.selectionEnd=Math.min(de,w.value.length);else{var _e=w.ownerDocument||document,se=_e&&_e.defaultView||window;if(se.getSelection){var le=se.getSelection(),je=w.textContent.length,Je=Math.min(H.start,je),Xt=H.end===void 0?Je:Math.min(H.end,je);!le.extend&&Je>Xt&&(_=Xt,Xt=Je,Je=_);var Z=Kp(w,Je),X=Kp(w,Xt);if(Z&&X&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var ee=_e.createRange();ee.setStart(Z.node,Z.offset),le.removeAllRanges(),Je>Xt?(le.addRange(ee),le.extend(X.node,X.offset)):(ee.setEnd(X.node,X.offset),le.addRange(ee))}}}}for(_e=[],le=w;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<_e.length;w++){var ge=_e[w];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}xc=!!ld,cd=ld=null}finally{Ut=u,B.p=o,N.T=a}}t.current=n,xn=2}}function h0(){if(xn===2){xn=0;var t=Qa,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var u=Ut;Ut|=4;try{Gg(t,n.alternate,n)}finally{Ut=u,B.p=o,N.T=a}}xn=3}}function p0(){if(xn===4||xn===3){xn=0,Gt();var t=Qa,n=Sr,a=xa,o=e0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Qa=null,m0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),io(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=B.p,B.p=2,N.T=null;try{for(var d=t.onRecoverableError,_=0;_<o.length;_++){var w=o[_];d(w.value,{componentStack:w.stack})}}finally{N.T=n,B.p=u}}(xa&3)!==0&&oc(),Wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Zf?Fo++:(Fo=0,Zf=t):Fo=0,Ho(0)}}function m0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,So(n)))}function oc(){return d0(),h0(),p0(),g0()}function g0(){if(xn!==5)return!1;var t=Qa,n=qf;qf=0;var a=io(xa),o=N.T,u=B.p;try{B.p=32>a?32:a,N.T=null,a=Yf,Yf=null;var d=Qa,_=xa;if(xn=0,Sr=Qa=null,xa=0,(Ut&6)!==0)throw Error(s(331));var w=Ut;if(Ut|=4,Qg(d.current),Yg(d,d.current,_,a),Ut=w,Ho(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ce,d)}catch{}return!0}finally{B.p=u,N.T=o,m0(t,n)}}function v0(t,n,a){n=Si(a,n),n=wf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(tt(t,2),Wi(t))}function Bt(t,n,a){if(t.tag===3)v0(t,t,a);else for(;n!==null;){if(n.tag===3){v0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){t=Si(a,t),a=_g(2),o=Xa(n,a,2),o!==null&&(xg(a,o,n,t),tt(o,2),Wi(o));break}}n=n.return}}function Jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new CS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=LS.bind(null,t,n,a),n.then(t,t))}function LS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(yt&a)===a&&(on===4||on===3&&(yt&62914560)===yt&&300>we()-tc?(Ut&2)===0&&yr(t,0):jf|=a,xr===yt&&(xr=0)),Wi(t)}function _0(t,n){n===0&&(n=Me()),t=bs(t,n),t!==null&&(tt(t,n),Wi(t))}function OS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_0(t,a)}function PS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),_0(t,a)}function zS(t,n){return W(t,n)}var lc=null,br=null,$f=!1,cc=!1,ed=!1,$a=0;function Wi(t){t!==br&&t.next===null&&(br===null?lc=br=t:br=br.next=t),cc=!0,$f||($f=!0,BS())}function Ho(t,n){if(!ed&&cc){ed=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var _=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Pe(42|t)+1)-1,d&=u&~(_&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,M0(o,d))}else d=yt,d=he(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Fe(o,d)||(a=!0,M0(o,d));o=o.next}while(a);ed=!1}}function IS(){x0()}function x0(){cc=$f=!1;var t=0;$a!==0&&YS()&&(t=$a);for(var n=we(),a=null,o=lc;o!==null;){var u=o.next,d=S0(o,n);d===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=u}xn!==0&&xn!==5||Ho(t),$a!==0&&($a=0)}function S0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-Pe(d),w=1<<_,H=u[_];H===-1?((w&a)===0||(w&o)!==0)&&(u[_]=Ne(w,n)):H<=n&&(t.expiredLanes|=w),d&=~w}if(n=qt,a=yt,a=he(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&nn(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&nn(o),io(a)){case 2:case 8:a=b;break;case 32:a=J;break;case 268435456:a=be;break;default:a=J}return o=y0.bind(null,t),a=W(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&nn(o),t.callbackPriority=2,t.callbackNode=null,2}function y0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=yt;return o=he(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(n0(t,o,n),S0(t,we()),t.callbackNode!=null&&t.callbackNode===a?y0.bind(null,t):null)}function M0(t,n){if(oc())return null;n0(t,n,!0)}function BS(){KS(function(){(Ut&6)!==0?W(D,IS):x0()})}function td(){if($a===0){var t=lr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),$a=t}return $a}function b0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xs(""+t)}function E0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function FS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=b0((u[Tn]||null).action),_=o.submitter;_&&(n=(n=_[Tn]||null)?b0(n.formAction):_.getAttribute("formAction"),n!==null&&(d=n,_=null));var w=new yl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var H=_?E0(u,_):new FormData(u);yf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(w.preventDefault(),H=_?E0(u,_):new FormData(u),yf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var nd=0;nd<Iu.length;nd++){var id=Iu[nd],HS=id.toLowerCase(),GS=id[0].toUpperCase()+id.slice(1);Li(HS,"on"+GS)}Li(tm,"onAnimationEnd"),Li(nm,"onAnimationIteration"),Li(im,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(iS,"onTransitionRun"),Li(aS,"onTransitionStart"),Li(sS,"onTransitionCancel"),Li(am,"onTransitionEnd"),ae("onMouseEnter",["mouseout","mouseover"]),ae("onMouseLeave",["mouseout","mouseover"]),ae("onPointerEnter",["pointerout","pointerover"]),ae("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function T0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var _=o.length-1;0<=_;_--){var w=o[_],H=w.instance,te=w.currentTarget;if(w=w.listener,H!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=te;try{d(u)}catch(de){El(de)}u.currentTarget=null,d=H}else for(_=0;_<o.length;_++){if(w=o[_],H=w.instance,te=w.currentTarget,w=w.listener,H!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=te;try{d(u)}catch(de){El(de)}u.currentTarget=null,d=H}}}}function xt(t,n){var a=n[Ua];a===void 0&&(a=n[Ua]=new Set);var o=t+"__bubble";a.has(o)||(A0(n,t,2,!1),a.add(o))}function ad(t,n,a){var o=0;n&&(o|=4),A0(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function sd(t){if(!t[uc]){t[uc]=!0,vl.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||ad(a,!1,t),ad(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,ad("selectionchange",!1,n))}}function A0(t,n,a,o){switch(tv(n)){case 2:var u=gy;break;case 8:u=vy;break;default:u=Sd}a=u.bind(null,n,a,t),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function rd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var w=o.stateNode.containerInfo;if(w===u)break;if(_===4)for(_=o.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;w!==null;){if(_=La(w),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){o=d=_;continue e}w=w.parentNode}}o=o.return}Up(function(){var te=d,de=Mu(a),_e=[];e:{var se=sm.get(t);if(se!==void 0){var le=yl,je=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":le=Px;break;case"focusin":je="focus",le=Cu;break;case"focusout":je="blur",le=Cu;break;case"beforeblur":case"afterblur":le=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Bx;break;case tm:case nm:case im:le=Ax;break;case am:le=Hx;break;case"scroll":case"scrollend":le=yx;break;case"wheel":le=Vx;break;case"copy":case"cut":case"paste":le=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=zp;break;case"toggle":case"beforetoggle":le=Xx}var Je=(n&4)!==0,Xt=!Je&&(t==="scroll"||t==="scrollend"),Z=Je?se!==null?se+"Capture":null:se;Je=[];for(var X=te,ee;X!==null;){var ge=X;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||Z===null||(ge=lo(X,Z),ge!=null&&Je.push(Vo(X,ge,ee))),Xt)break;X=X.return}0<Je.length&&(se=new le(se,je,null,a,de),_e.push({event:se,listeners:Je}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",se&&a!==yu&&(je=a.relatedTarget||a.fromElement)&&(La(je)||je[ia]))break e;if((le||se)&&(se=de.window===de?de:(se=de.ownerDocument)?se.defaultView||se.parentWindow:window,le?(je=a.relatedTarget||a.toElement,le=te,je=je?La(je):null,je!==null&&(Xt=c(je),Je=je.tag,je!==Xt||Je!==5&&Je!==27&&Je!==6)&&(je=null)):(le=null,je=te),le!==je)){if(Je=Op,ge="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Je=zp,ge="onPointerLeave",Z="onPointerEnter",X="pointer"),Xt=le==null?se:_s(le),ee=je==null?se:_s(je),se=new Je(ge,X+"leave",le,a,de),se.target=Xt,se.relatedTarget=ee,ge=null,La(de)===te&&(Je=new Je(Z,X+"enter",je,a,de),Je.target=ee,Je.relatedTarget=Xt,ge=Je),Xt=ge,le&&je)t:{for(Je=kS,Z=le,X=je,ee=0,ge=Z;ge;ge=Je(ge))ee++;ge=0;for(var Ke=X;Ke;Ke=Je(Ke))ge++;for(;0<ee-ge;)Z=Je(Z),ee--;for(;0<ge-ee;)X=Je(X),ge--;for(;ee--;){if(Z===X||X!==null&&Z===X.alternate){Je=Z;break t}Z=Je(Z),X=Je(X)}Je=null}else Je=null;le!==null&&w0(_e,se,le,Je,!1),je!==null&&Xt!==null&&w0(_e,Xt,je,Je,!0)}}e:{if(se=te?_s(te):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var Ct=Xp;else if(Vp(se))if(jp)Ct=eS;else{Ct=Jx;var qe=Qx}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&Nt(te.elementType)&&(Ct=Xp):Ct=$x;if(Ct&&(Ct=Ct(t,te))){kp(_e,Ct,a,de);break e}qe&&qe(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&vt(se,"number",se.value)}switch(qe=te?_s(te):window,t){case"focusin":(Vp(qe)||qe.contentEditable==="true")&&(er=qe,Ou=te,vo=null);break;case"focusout":vo=Ou=er=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,$p(_e,a,de);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":$p(_e,a,de)}var dt;if(Du)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else $s?Hp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Ip&&a.locale!=="ko"&&($s||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&$s&&(dt=Np()):(Ia=de,Tu="value"in Ia?Ia.value:Ia.textContent,$s=!0)),qe=fc(te,Mt),0<qe.length&&(Mt=new Pp(Mt,t,null,a,de),_e.push({event:Mt,listeners:qe}),dt?Mt.data=dt:(dt=Gp(a),dt!==null&&(Mt.data=dt)))),(dt=Wx?qx(t,a):Yx(t,a))&&(Mt=fc(te,"onBeforeInput"),0<Mt.length&&(qe=new Pp("onBeforeInput","beforeinput",null,a,de),_e.push({event:qe,listeners:Mt}),qe.data=dt)),FS(_e,t,te,a,de)}T0(_e,n)})}function Vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=lo(t,a),u!=null&&o.unshift(Vo(t,u,d)),u=lo(t,n),u!=null&&o.push(Vo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function kS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function w0(t,n,a,o,u){for(var d=n._reactName,_=[];a!==null&&a!==o;){var w=a,H=w.alternate,te=w.stateNode;if(w=w.tag,H!==null&&H===o)break;w!==5&&w!==26&&w!==27||te===null||(H=te,u?(te=lo(a,d),te!=null&&_.unshift(Vo(a,te,H))):u||(te=lo(a,d),te!=null&&_.push(Vo(a,te,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var XS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function C0(t){return(typeof t=="string"?t:""+t).replace(XS,`
`).replace(jS,"")}function R0(t,n){return n=C0(n),C0(t)===n}function kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&si(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ni(t,o,d);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=aa);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vi.get(a)||a,ze(t,a,o))}}function od(t,n,a,o,u,d){switch(a){case"style":Ni(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Tn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,d,_,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var w=d=_=u=null,H=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":_=de;break;case"checked":H=de;break;case"defaultChecked":te=de;break;case"value":d=de;break;case"defaultValue":w=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:kt(t,n,o,de,a,null)}}In(t,d,w,H,te,_,u,!1);return;case"select":xt("invalid",t),o=_=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":_=w;break;case"multiple":o=w;default:kt(t,n,u,w,a,null)}n=d,a=_,t.multiple=!!o,n!=null?_n(t,!!o,n,!1):a!=null&&_n(t,!!o,a,!0);return;case"textarea":xt("invalid",t),d=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(w=a[_],w!=null))switch(_){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:kt(t,n,_,w,a,null)}Ui(t,o,u,d);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,H,o,a,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<Go.length;o++)xt(Go[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,te,o,a,null)}return;default:if(Nt(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&od(t,n,de,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&kt(t,n,w,o,a,null))}function WS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,_=null,w=null,H=null,te=null,de=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=_e;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,_e)}}for(var se in o){var le=o[se];if(_e=a[se],o.hasOwnProperty(se)&&(le!=null||_e!=null))switch(se){case"type":d=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":de=le;break;case"value":_=le;break;case"defaultValue":w=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==_e&&kt(t,n,se,le,o,_e)}}Ge(t,_,w,H,te,de,d,u);return;case"select":le=_=w=se=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":se=d;break;case"defaultValue":w=d;break;case"multiple":_=d;default:d!==H&&kt(t,n,u,d,o,H)}n=w,a=_,o=le,se!=null?_n(t,!!a,se,!1):!!o!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:kt(t,n,w,null,o,u)}for(_ in o)if(u=o[_],d=a[_],o.hasOwnProperty(_)&&(u!=null||d!=null))switch(_){case"value":se=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&kt(t,n,_,u,o,d)}ai(t,se,le);return;case"option":for(var je in a)if(se=a[je],a.hasOwnProperty(je)&&se!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:kt(t,n,je,null,o,se)}for(H in o)if(se=o[H],le=a[H],o.hasOwnProperty(H)&&se!==le&&(se!=null||le!=null))switch(H){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:kt(t,n,H,se,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)se=a[Je],a.hasOwnProperty(Je)&&se!=null&&!o.hasOwnProperty(Je)&&kt(t,n,Je,null,o,se);for(te in o)if(se=o[te],le=a[te],o.hasOwnProperty(te)&&se!==le&&(se!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:kt(t,n,te,se,o,le)}return;default:if(Nt(n)){for(var Xt in a)se=a[Xt],a.hasOwnProperty(Xt)&&se!==void 0&&!o.hasOwnProperty(Xt)&&od(t,n,Xt,void 0,o,se);for(de in o)se=o[de],le=a[de],!o.hasOwnProperty(de)||se===le||se===void 0&&le===void 0||od(t,n,de,se,o,le);return}}for(var Z in a)se=a[Z],a.hasOwnProperty(Z)&&se!=null&&!o.hasOwnProperty(Z)&&kt(t,n,Z,null,o,se);for(_e in o)se=o[_e],le=a[_e],!o.hasOwnProperty(_e)||se===le||se==null&&le==null||kt(t,n,_e,se,o,le)}function D0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,_=u.initiatorType,w=u.duration;if(d&&w&&D0(_)){for(_=0,w=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],te=H.startTime;if(te>w)break;var de=H.transferSize,_e=H.initiatorType;de&&D0(_e)&&(H=H.responseEnd,_+=de*(H<w?1:(w-te)/(H-te)))}if(--o,n+=8*(d+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ld=null,cd=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function U0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function YS(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,KS=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(t){return O0.resolve(null).then(t).catch(QS)}:L0;function QS(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function P0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),wr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ko(a);for(var d=a.firstChild;d;){var _=d.nextSibling,w=d.nodeName;d[Na]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&ko(t.ownerDocument.body);a=u}while(a);wr(n)}function z0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function dd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),oo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function JS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function $S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function hd(t){return t.data==="$?"||t.data==="$~"}function pd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ey(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var md=null;function B0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function H0(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);oo(t)}var Ai=new Map,G0=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=B.d;B.d={f:ty,r:ny,D:iy,C:ay,L:sy,m:ry,X:ly,S:oy,M:cy};function ty(){var t=Sa.f(),n=ac();return t||n}function ny(t){var n=Oa(t);n!==null&&n.tag===5&&n.type==="form"?ag(n):Sa.r(t)}var Er=typeof document>"u"?null:document;function V0(t,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),G0.has(u)||(G0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),dn(n),o.head.appendChild(n)))}}function iy(t){Sa.D(t),V0("dns-prefetch",t,null)}function ay(t,n){Sa.C(t,n),V0("preconnect",t,n)}function sy(t,n,a){Sa.L(t,n,a);var o=Er;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var d=u;switch(n){case"style":d=Tr(t);break;case"script":d=Ar(t)}Ai.has(d)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Xo(d))||n==="script"&&o.querySelector(jo(d))||(n=o.createElement("link"),Rn(n,"link",t),dn(n),o.head.appendChild(n)))}}function ry(t,n){Sa.m(t,n);var a=Er;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ar(t)}if(!Ai.has(d)&&(t=x({rel:"modulepreload",href:t},n),Ai.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(d)))return}o=a.createElement("link"),Rn(o,"link",t),dn(o),a.head.appendChild(o)}}}function oy(t,n,a){Sa.S(t,n,a);var o=Er;if(o&&t){var u=Pa(o).hoistableStyles,d=Tr(t);n=n||"default";var _=u.get(d);if(!_){var w={loading:0,preload:null};if(_=o.querySelector(Xo(d)))w.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(d))&&gd(t,a);var H=_=o.createElement("link");dn(H),Rn(H,"link",t),H._p=new Promise(function(te,de){H.onload=te,H.onerror=de}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,pc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:w},u.set(d,_)}}}function ly(t,n){Sa.X(t,n);var a=Er;if(a&&t){var o=Pa(a).hoistableScripts,u=Ar(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=x({src:t,async:!0},n),(n=Ai.get(u))&&vd(t,n),d=a.createElement("script"),dn(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function cy(t,n){Sa.M(t,n);var a=Er;if(a&&t){var o=Pa(a).hoistableScripts,u=Ar(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=x({src:t,async:!0,type:"module"},n),(n=Ai.get(u))&&vd(t,n),d=a.createElement("script"),dn(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function k0(t,n,a,o){var u=(u=oe.current)?hc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=Pa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Tr(a.href);var d=Pa(u).hoistableStyles,_=d.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=u.querySelector(Xo(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,a),d||uy(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ar(a),a=Pa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Tr(t){return'href="'+Pt(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function X0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function uy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),dn(n),t.head.appendChild(n))}function Ar(t){return'[src="'+Pt(t)+'"]'}function jo(t){return"script[async]"+t}function j0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),dn(o),Rn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Tr(a.href);var d=t.querySelector(Xo(u));if(d)return n.state.loading|=4,n.instance=d,dn(d),d;o=X0(a),(u=Ai.get(u))&&gd(o,u),d=(t.ownerDocument||t).createElement("link"),dn(d);var _=d;return _._p=new Promise(function(w,H){_.onload=w,_.onerror=H}),Rn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=Ar(a.src),(u=t.querySelector(jo(d)))?(n.instance=u,dn(u),u):(o=a,(u=Ai.get(d))&&(o=x({},a),vd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),dn(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,_=0;_<o.length;_++){var w=o[_];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function W0(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Na]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(n)||"";_=t+_;var w=o.get(_);w?w.push(d):o.set(_,[d])}}return o}function q0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function dy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Tr(o.href),d=n.querySelector(Xo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,dn(d);return}d=n.ownerDocument||n,o=X0(o),(u=Ai.get(u))&&gd(o,u),d=d.createElement("link"),dn(d);var _=d;_._p=new Promise(function(w,H){_.onload=w,_.onerror=H}),Rn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var _d=0;function hy(t,n){return t.stylesheets&&t.count===0&&_c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&_d===0&&(_d=62500*qS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>_d?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function _c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(py,t),vc=null,gc.call(t))}function py(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var _=u[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,u),a.set(_,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function my(t,n,a,o,u,d,_,w,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Z0(t,n,a,o,u,d,_,w,H,te,de,_e){return t=new my(t,n,a,_,H,te,de,_e,w),n=1,d===!0&&(n|=24),d=oi(3,null,null,n),t.current=d,d.stateNode=t,n=Ku(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},ef(d),t}function K0(t){return t?(t=ir,t):ir}function Q0(t,n,a,o,u,d){u=K0(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Xa(t,o,n),a!==null&&($n(a,t,n),Eo(a,t,n))}function J0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xd(t,n){J0(t,n),(t=t.alternate)&&J0(t,n)}function $0(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&$n(n,t,67108864),xd(t,67108864)}}function ev(t){if(t.tag===13||t.tag===31){var n=di();n=vs(n);var a=bs(t,n);a!==null&&$n(a,t,n),xd(t,n)}}var xc=!0;function gy(t,n,a,o){var u=N.T;N.T=null;var d=B.p;try{B.p=2,Sd(t,n,a,o)}finally{B.p=d,N.T=u}}function vy(t,n,a,o){var u=N.T;N.T=null;var d=B.p;try{B.p=8,Sd(t,n,a,o)}finally{B.p=d,N.T=u}}function Sd(t,n,a,o){if(xc){var u=yd(o);if(u===null)rd(t,n,o,Sc,a),nv(t,o);else if(xy(u,t,n,a,o))o.stopPropagation();else if(nv(t,o),n&4&&-1<_y.indexOf(t)){for(;u!==null;){var d=Oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Ae(d.pendingLanes);if(_!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;_;){var H=1<<31-Pe(_);w.entanglements[1]|=H,_&=~H}Wi(d),(Ut&6)===0&&(nc=we()+500,Ho(0))}}break;case 31:case 13:w=bs(d,2),w!==null&&$n(w,d,2),ac(),xd(d,2)}if(d=yd(o),d===null&&rd(t,n,o,Sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else rd(t,n,o,null,a)}}function yd(t){return t=Mu(t),Md(t)}var Sc=null;function Md(t){if(Sc=null,t=La(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function tv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jt()){case D:return 2;case b:return 8;case J:case ve:return 32;case be:return 268435456;default:return 32}default:return 32}}var bd=!1,ts=null,ns=null,is=null,qo=new Map,Yo=new Map,as=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nv(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function Zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Oa(n),n!==null&&$0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function xy(t,n,a,o,u){switch(n){case"focusin":return ts=Zo(ts,t,n,a,o,u),!0;case"dragenter":return ns=Zo(ns,t,n,a,o,u),!0;case"mouseover":return is=Zo(is,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return qo.set(d,Zo(qo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Yo.set(d,Zo(Yo.get(d)||null,t,n,a,o,u)),!0}return!1}function iv(t){var n=La(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,so(t.priority,function(){ev(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,so(t.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Oa(a),n!==null&&$0(n),t.blockedOn=a,!1;n.shift()}return!0}function av(t,n,a){yc(t)&&a.delete(n)}function Sy(){bd=!1,ts!==null&&yc(ts)&&(ts=null),ns!==null&&yc(ns)&&(ns=null),is!==null&&yc(is)&&(is=null),qo.forEach(av),Yo.forEach(av)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sy)))}var bc=null;function sv(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var d=Oa(a);d!==null&&(t.splice(n,3),n-=3,yf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wr(t){function n(H){return Mc(H,t)}ts!==null&&Mc(ts,t),ns!==null&&Mc(ns,t),is!==null&&Mc(is,t),qo.forEach(n),Yo.forEach(n);for(var a=0;a<as.length;a++){var o=as[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)iv(a),a.blockedOn===null&&as.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],_=u[Tn]||null;if(typeof d=="function")_||sv(a);else if(_){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,_=d[Tn]||null)w=_.formAction;else if(Md(u)!==null)continue}else w=_.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),sv(a)}}}function rv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ed(t){this._internalRoot=t}Ec.prototype.render=Ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=di();Q0(a,o,t,n,null,null)},Ec.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Q0(t.current,2,null,t,null,null),ac(),n[ia]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=ao();t={blockedOn:null,target:t,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,t),a===0&&iv(t)}};var ov=e.version;if(ov!=="19.2.5")throw Error(s(527,ov,"19.2.5"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var yy={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{ce=Tc.inject(yy),fe=Tc}catch{}}return Qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=pg,d=mg,_=gg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Z0(t,1,!1,null,null,a,o,null,u,d,_,rv),t[ia]=n.current,sd(t),new Ed(n)},Qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=pg,_=mg,w=gg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Z0(t,1,!0,n,a??null,o,u,H,d,_,w,rv),n.context=K0(null),a=n.current,o=di(),o=vs(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,tt(n,a),Wi(n),t[ia]=n.current,sd(t),new Ec(n)},Qo.version="19.2.5",Qo}var vv;function Uy(){if(vv)return wd.exports;vv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wd.exports=Dy(),wd.exports}var Ny=Uy();const Ly=`
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
`;function Oy(r){const[e,i]=nt.useState(r),s=nt.useCallback((l,c)=>{i(f=>({...f,[l]:c})),window.parent.postMessage({type:"__edit_mode_set_keys",edits:{[l]:c}},"*")},[]);return[e,s]}function Py({title:r="Tweaks",children:e}){const[i,s]=nt.useState(!1),l=nt.useRef(null),c=nt.useRef({x:16,y:16}),f=16,h=nt.useCallback(()=>{const v=l.current;if(!v)return;const x=v.offsetWidth,g=v.offsetHeight,M=Math.max(f,window.innerWidth-x-f),E=Math.max(f,window.innerHeight-g-f);c.current={x:Math.min(M,Math.max(f,c.current.x)),y:Math.min(E,Math.max(f,c.current.y))},v.style.right=c.current.x+"px",v.style.bottom=c.current.y+"px"},[]);nt.useEffect(()=>{if(!i)return;if(h(),typeof ResizeObserver>"u")return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h);const v=new ResizeObserver(h);return v.observe(document.documentElement),()=>v.disconnect()},[i,h]),nt.useEffect(()=>{const v=x=>{var M;const g=(M=x==null?void 0:x.data)==null?void 0:M.type;g==="__activate_edit_mode"?s(!0):g==="__deactivate_edit_mode"&&s(!1)};return window.addEventListener("message",v),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",v)},[]);const m=()=>{s(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},p=v=>{const x=l.current;if(!x)return;const g=x.getBoundingClientRect(),M=v.clientX,E=v.clientY,C=window.innerWidth-g.right,S=window.innerHeight-g.bottom,y=L=>{c.current={x:C-(L.clientX-M),y:S-(L.clientY-E)},h()},R=()=>{window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",R)};window.addEventListener("mousemove",y),window.addEventListener("mouseup",R)};return i?U.jsxs(U.Fragment,{children:[U.jsx("style",{children:Ly}),U.jsxs("div",{ref:l,className:"twk-panel",style:{right:c.current.x,bottom:c.current.y},children:[U.jsxs("div",{className:"twk-hd",onMouseDown:p,children:[U.jsx("b",{children:r}),U.jsx("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:v=>v.stopPropagation(),onClick:m,children:"✕"})]}),U.jsx("div",{className:"twk-body",children:e})]})]}):null}function Ac({label:r,children:e}){return U.jsxs(U.Fragment,{children:[U.jsx("div",{className:"twk-sect",children:r}),e]})}function O_({label:r,value:e,children:i,inline:s=!1}){return U.jsxs("div",{className:s?"twk-row twk-row-h":"twk-row",children:[U.jsxs("div",{className:"twk-lbl",children:[U.jsx("span",{children:r}),e!=null&&U.jsx("span",{className:"twk-val",children:e})]}),i]})}function Ud({label:r,value:e,min:i=0,max:s=100,step:l=1,unit:c="",onChange:f}){return U.jsx(O_,{label:r,value:`${e}${c}`,children:U.jsx("input",{type:"range",className:"twk-slider",min:i,max:s,step:l,value:e,onChange:h=>f(Number(h.target.value))})})}function zy({label:r,value:e,onChange:i}){return U.jsxs("div",{className:"twk-row twk-row-h",children:[U.jsx("div",{className:"twk-lbl",children:U.jsx("span",{children:r})}),U.jsx("button",{type:"button",className:"twk-toggle","data-on":e?"1":"0",role:"switch","aria-checked":!!e,onClick:()=>i(!e),children:U.jsx("i",{})})]})}function Iy({label:r,value:e,options:i,onChange:s}){const l=nt.useRef(null),[c,f]=nt.useState(!1),h=i.map(M=>typeof M=="object"?M:{value:M,label:M}),m=Math.max(0,h.findIndex(M=>M.value===e)),p=h.length,v=nt.useRef(e);v.current=e;const x=M=>{const E=l.current.getBoundingClientRect(),C=E.width-4,S=Math.floor((M-E.left-2)/C*p);return h[Math.max(0,Math.min(p-1,S))].value},g=M=>{f(!0);const E=x(M.clientX);E!==v.current&&s(E);const C=y=>{if(!l.current)return;const R=x(y.clientX);R!==v.current&&s(R)},S=()=>{f(!1),window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",S)};window.addEventListener("pointermove",C),window.addEventListener("pointerup",S)};return U.jsx(O_,{label:r,children:U.jsxs("div",{ref:l,role:"radiogroup",onPointerDown:g,className:c?"twk-seg dragging":"twk-seg",children:[U.jsx("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${m} * (100% - 4px) / ${p})`,width:`calc((100% - 4px) / ${p})`}}),h.map(M=>U.jsx("button",{type:"button",role:"radio","aria-checked":M.value===e,children:M.label},M.value))]})})}function Nd({label:r,value:e,onChange:i}){return U.jsxs("div",{className:"twk-row twk-row-h",children:[U.jsx("div",{className:"twk-lbl",children:U.jsx("span",{children:r})}),U.jsx("input",{type:"color",className:"twk-swatch",value:e,onChange:s=>i(s.target.value)})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fp="184",By=0,_v=1,Fy=2,nu=1,Hy=2,sl=3,ms=0,ti=1,Aa=2,ea=0,Wr=1,mh=2,xv=3,Sv=4,Gy=5,Gs=100,Vy=101,ky=102,Xy=103,jy=104,Wy=200,qy=201,Yy=202,Zy=203,gh=204,vh=205,Ky=206,Qy=207,Jy=208,$y=209,eM=210,tM=211,nM=212,iM=213,aM=214,_h=0,xh=1,Sh=2,Yr=3,yh=4,Mh=5,bh=6,Eh=7,P_=0,sM=1,rM=2,ta=0,z_=1,I_=2,B_=3,F_=4,H_=5,G_=6,V_=7,k_=300,Ws=301,Zr=302,Ld=303,Od=304,gu=306,Th=1e3,wa=1001,Ah=1002,Ln=1003,oM=1004,wc=1005,Gn=1006,Pd=1007,ks=1008,gi=1009,X_=1010,j_=1011,cl=1012,dp=1013,na=1014,Ji=1015,vi=1016,hp=1017,pp=1018,ul=1020,W_=35902,q_=35899,Y_=1021,Z_=1022,Gi=1023,Da=1026,Xs=1027,K_=1028,mp=1029,qs=1030,gp=1031,vp=1033,iu=33776,au=33777,su=33778,ru=33779,wh=35840,Ch=35841,Rh=35842,Dh=35843,Uh=36196,Nh=37492,Lh=37496,Oh=37488,Ph=37489,cu=37490,zh=37491,Ih=37808,Bh=37809,Fh=37810,Hh=37811,Gh=37812,Vh=37813,kh=37814,Xh=37815,jh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,ep=36283,tp=36284,uu=36285,np=36286,lM=3200,yv=0,cM=1,ds="",Ci="srgb",fu="srgb-linear",du="linear",Ft="srgb",Cr=7680,Mv=519,uM=512,fM=513,dM=514,_p=515,hM=516,pM=517,xp=518,mM=519,ip=35044,bv="300 es",$i=2e3,fl=2001;function gM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vM(){const r=hu("canvas");return r.style.display="block",r}const Ev={};function pu(...r){const e="THREE."+r.shift();console.log(e,...r)}function Q_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function et(...r){r=Q_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function At(...r){r=Q_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function ap(...r){const e=r.join(" ");e in Ev||(Ev[e]=!0,et(...r))}function _M(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const xM={[_h]:xh,[Sh]:bh,[yh]:Eh,[Yr]:Mh,[xh]:_h,[bh]:Sh,[Eh]:yh,[Mh]:Yr};class Zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tv=1234567;const ol=Math.PI/180,dl=180/Math.PI;function Ca(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function ut(r,e,i){return Math.max(e,Math.min(i,r))}function Sp(r,e){return(r%e+e)%e}function SM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function yM(r,e,i){return r!==e?(i-r)/(e-r):0}function ll(r,e,i){return(1-i)*r+i*e}function MM(r,e,i,s){return ll(r,e,1-Math.exp(-i*s))}function bM(r,e=1){return e-Math.abs(Sp(r,e*2)-e)}function EM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function TM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function AM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function wM(r,e){return r+Math.random()*(e-r)}function CM(r){return r*(.5-Math.random())}function RM(r){r!==void 0&&(Tv=r);let e=Tv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function DM(r){return r*ol}function UM(r){return r*dl}function NM(r){return(r&r-1)===0&&r!==0}function LM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function OM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function PM(r,e,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+s)/2),v=f((e+s)/2),x=c((e-s)/2),g=f((e-s)/2),M=c((s-e)/2),E=f((s-e)/2);switch(l){case"XYX":r.set(h*v,m*x,m*g,h*p);break;case"YZY":r.set(m*g,h*v,m*x,h*p);break;case"ZXZ":r.set(m*x,m*g,h*v,h*p);break;case"XZX":r.set(h*v,m*E,m*M,h*p);break;case"YXY":r.set(m*M,h*v,m*E,h*p);break;case"ZYZ":r.set(m*E,m*M,h*v,h*p);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Fi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zM={DEG2RAD:ol,RAD2DEG:dl,generateUUID:Ca,clamp:ut,euclideanModulo:Sp,mapLinear:SM,inverseLerp:yM,lerp:ll,damp:MM,pingpong:bM,smoothstep:EM,smootherstep:TM,randInt:AM,randFloat:wM,randFloatSpread:CM,seededRandom:RM,degToRad:DM,radToDeg:UM,isPowerOfTwo:NM,ceilPowerOfTwo:LM,floorPowerOfTwo:OM,setQuaternionFromProperEuler:PM,normalize:Ht,denormalize:Fi},Tp=class Tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ut(this.x,e.x,i.x),this.y=ut(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ut(this.x,e,i),this.y=ut(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tp.prototype.isVector2=!0;let ot=Tp;class eo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],v=s[l+2],x=s[l+3],g=c[f+0],M=c[f+1],E=c[f+2],C=c[f+3];if(x!==C||m!==g||p!==M||v!==E){let S=m*g+p*M+v*E+x*C;S<0&&(g=-g,M=-M,E=-E,C=-C,S=-S);let y=1-h;if(S<.9995){const R=Math.acos(S),L=Math.sin(R);y=Math.sin(y*R)/L,h=Math.sin(h*R)/L,m=m*y+g*h,p=p*y+M*h,v=v*y+E*h,x=x*y+C*h}else{m=m*y+g*h,p=p*y+M*h,v=v*y+E*h,x=x*y+C*h;const R=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=R,p*=R,v*=R,x*=R}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],x=c[f],g=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+v*x+m*M-p*g,e[i+1]=m*E+v*g+p*x-h*M,e[i+2]=p*E+v*M+h*g-m*x,e[i+3]=v*E-h*x-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),x=h(c/2),g=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*v*x+p*M*E,this._y=p*M*x-g*v*E,this._z=p*v*E+g*M*x,this._w=p*v*x-g*M*E;break;case"YXZ":this._x=g*v*x+p*M*E,this._y=p*M*x-g*v*E,this._z=p*v*E-g*M*x,this._w=p*v*x+g*M*E;break;case"ZXY":this._x=g*v*x-p*M*E,this._y=p*M*x+g*v*E,this._z=p*v*E+g*M*x,this._w=p*v*x-g*M*E;break;case"ZYX":this._x=g*v*x-p*M*E,this._y=p*M*x+g*v*E,this._z=p*v*E-g*M*x,this._w=p*v*x+g*M*E;break;case"YZX":this._x=g*v*x+p*M*E,this._y=p*M*x+g*v*E,this._z=p*v*E-g*M*x,this._w=p*v*x-g*M*E;break;case"XZY":this._x=g*v*x-p*M*E,this._y=p*M*x-g*v*E,this._z=p*v*E+g*M*x,this._w=p*v*x+g*M*E;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],x=i[10],g=s+h+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-s*p,this._z=c*v+f*p+s*m-l*h,this._w=f*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ap=class Ap{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Av.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Av.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),v=2*(h*i-c*l),x=2*(c*s-f*i);return this.x=i+m*p+f*x-h*v,this.y=s+m*v+h*p-c*x,this.z=l+m*x+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ut(this.x,e.x,i.x),this.y=ut(this.y,e.y,i.y),this.z=ut(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ut(this.x,e,i),this.y=ut(this.y,e,i),this.z=ut(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ap.prototype.isVector3=!0;let Y=Ap;const zd=new Y,Av=new eo,wp=class wp{constructor(e,i,s,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],v=s[4],x=s[7],g=s[2],M=s[5],E=s[8],C=l[0],S=l[3],y=l[6],R=l[1],L=l[4],O=l[7],j=l[2],z=l[5],F=l[8];return c[0]=f*C+h*R+m*j,c[3]=f*S+h*L+m*z,c[6]=f*y+h*O+m*F,c[1]=p*C+v*R+x*j,c[4]=p*S+v*L+x*z,c[7]=p*y+v*O+x*F,c[2]=g*C+M*R+E*j,c[5]=g*S+M*L+E*z,c[8]=g*y+M*O+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-s*c*v+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],x=v*f-h*p,g=h*m-v*c,M=p*c-f*m,E=i*x+s*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=x*C,e[1]=(l*p-v*s)*C,e[2]=(h*s-l*f)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Id.makeScale(e,i)),this}rotate(e){return this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let rt=wp;const Id=new rt,wv=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IM(){const r={enabled:!0,workingColorSpace:fu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=qr(l.r),l.g=qr(l.g),l.b=qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?du:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ap("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ap("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[fu]:{primaries:e,whitePoint:s,transfer:du,toXYZ:wv,fromXYZ:Cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:wv,fromXYZ:Cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),r}const Et=IM();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class BM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Rr===void 0&&(Rr=hu("canvas")),Rr.width=e.width,Rr.height=e.height;const l=Rr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Rr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=hu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FM=0;class yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Bd(l[f].image)):c.push(Bd(l[f]))}else c=Bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?BM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let HM=0;const Fd=new Y;class jn extends Zs{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=wa,l=wa,c=Gn,f=ks,h=Gi,m=gi,p=jn.DEFAULT_ANISOTROPY,v=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Ca(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){et(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){et(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=k_;jn.DEFAULT_ANISOTROPY=1;const Cp=class Cp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],x=m[8],g=m[1],M=m[5],E=m[9],C=m[2],S=m[6],y=m[10];if(Math.abs(v-g)<.01&&Math.abs(x-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+C)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,O=(M+1)/2,j=(y+1)/2,z=(v+g)/4,F=(x+C)/4,T=(E+S)/4;return L>O&&L>j?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=F/s):O>j?O<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),s=z/l,c=T/l):j<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),s=F/c,l=T/c),this.set(s,l,c,i),this}let R=Math.sqrt((S-E)*(S-E)+(x-C)*(x-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(x-C)/R,this.z=(g-v)/R,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ut(this.x,e.x,i.x),this.y=ut(this.y,e.y,i.y),this.z=ut(this.z,e.z,i.z),this.w=ut(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ut(this.x,e,i),this.y=ut(this.y,e,i),this.z=ut(this.z,e,i),this.w=ut(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cp.prototype.isVector4=!0;let Yt=Cp;class GM extends Zs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Yt(0,0,e,i),this.scissorTest=!1,this.viewport=new Yt(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new jn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new yp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends GM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class J_ extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VM extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mu=class mu{constructor(e,i,s,l,c,f,h,m,p,v,x,g,M,E,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,v,x,g,M,E,C,S)}set(e,i,s,l,c,f,h,m,p,v,x,g,M,E,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=v,y[10]=x,y[14]=g,y[3]=M,y[7]=E,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Dr.setFromMatrixColumn(e,0).length(),c=1/Dr.setFromMatrixColumn(e,1).length(),f=1/Dr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=f*v,M=f*x,E=h*v,C=h*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=g-C*p,i[9]=-h*m,i[2]=C-g*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,M=m*x,E=p*v,C=p*x;i[0]=g+C*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*x,i[5]=f*v,i[9]=-h,i[2]=M*h-E,i[6]=C+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,M=m*x,E=p*v,C=p*x;i[0]=g-C*h,i[4]=-f*x,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*v,i[9]=C-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,M=f*x,E=h*v,C=h*x;i[0]=m*v,i[4]=E*p-M,i[8]=g*p+C,i[1]=m*x,i[5]=C*p+g,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,E=h*m,C=h*p;i[0]=m*v,i[4]=C-g*x,i[8]=E*x+M,i[1]=x,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*x+E,i[10]=g-C*x}else if(e.order==="XZY"){const g=f*m,M=f*p,E=h*m,C=h*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=g*x+C,i[5]=f*v,i[9]=M*x-E,i[2]=E*x-M,i[6]=h*v,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,XM)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),rs.crossVectors(s,hi),rs.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),rs.crossVectors(s,hi)),rs.normalize(),Cc.crossVectors(hi,rs),l[0]=rs.x,l[4]=Cc.x,l[8]=hi.x,l[1]=rs.y,l[5]=Cc.y,l[9]=hi.y,l[2]=rs.z,l[6]=Cc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],v=s[1],x=s[5],g=s[9],M=s[13],E=s[2],C=s[6],S=s[10],y=s[14],R=s[3],L=s[7],O=s[11],j=s[15],z=l[0],F=l[4],T=l[8],I=l[12],K=l[1],G=l[5],$=l[9],ue=l[13],pe=l[2],V=l[6],N=l[10],B=l[14],re=l[3],me=l[7],Se=l[11],P=l[15];return c[0]=f*z+h*K+m*pe+p*re,c[4]=f*F+h*G+m*V+p*me,c[8]=f*T+h*$+m*N+p*Se,c[12]=f*I+h*ue+m*B+p*P,c[1]=v*z+x*K+g*pe+M*re,c[5]=v*F+x*G+g*V+M*me,c[9]=v*T+x*$+g*N+M*Se,c[13]=v*I+x*ue+g*B+M*P,c[2]=E*z+C*K+S*pe+y*re,c[6]=E*F+C*G+S*V+y*me,c[10]=E*T+C*$+S*N+y*Se,c[14]=E*I+C*ue+S*B+y*P,c[3]=R*z+L*K+O*pe+j*re,c[7]=R*F+L*G+O*V+j*me,c[11]=R*T+L*$+O*N+j*Se,c[15]=R*I+L*ue+O*B+j*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],x=e[6],g=e[10],M=e[14],E=e[3],C=e[7],S=e[11],y=e[15],R=m*M-p*g,L=h*M-p*x,O=h*g-m*x,j=f*M-p*v,z=f*g-m*v,F=f*x-h*v;return i*(C*R-S*L+y*O)-s*(E*R-S*j+y*z)+l*(E*L-C*j+y*F)-c*(E*O-C*z+S*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],x=e[9],g=e[10],M=e[11],E=e[12],C=e[13],S=e[14],y=e[15],R=i*h-s*f,L=i*m-l*f,O=i*p-c*f,j=s*m-l*h,z=s*p-c*h,F=l*p-c*m,T=v*C-x*E,I=v*S-g*E,K=v*y-M*E,G=x*S-g*C,$=x*y-M*C,ue=g*y-M*S,pe=R*ue-L*$+O*G+j*K-z*I+F*T;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/pe;return e[0]=(h*ue-m*$+p*G)*V,e[1]=(l*$-s*ue-c*G)*V,e[2]=(C*F-S*z+y*j)*V,e[3]=(g*z-x*F-M*j)*V,e[4]=(m*K-f*ue-p*I)*V,e[5]=(i*ue-l*K+c*I)*V,e[6]=(S*O-E*F-y*L)*V,e[7]=(v*F-g*O+M*L)*V,e[8]=(f*$-h*K+p*T)*V,e[9]=(s*K-i*$-c*T)*V,e[10]=(E*z-C*O+y*R)*V,e[11]=(x*O-v*z-M*R)*V,e[12]=(h*I-f*G-m*T)*V,e[13]=(i*G-s*I+l*T)*V,e[14]=(C*L-E*j-S*R)*V,e[15]=(v*j-x*L+g*R)*V,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,x=h+h,g=c*p,M=c*v,E=c*x,C=f*v,S=f*x,y=h*x,R=m*p,L=m*v,O=m*x,j=s.x,z=s.y,F=s.z;return l[0]=(1-(C+y))*j,l[1]=(M+O)*j,l[2]=(E-L)*j,l[3]=0,l[4]=(M-O)*z,l[5]=(1-(g+y))*z,l[6]=(S+R)*z,l[7]=0,l[8]=(E+L)*F,l[9]=(S-R)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Dr.set(l[0],l[1],l[2]).length();const h=Dr.set(l[4],l[5],l[6]).length(),m=Dr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),zi.copy(this);const p=1/f,v=1/h,x=1/m;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=v,zi.elements[5]*=v,zi.elements[6]*=v,zi.elements[8]*=x,zi.elements[9]*=x,zi.elements[10]*=x,i.setFromRotationMatrix(zi),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,f,h=$i,m=!1){const p=this.elements,v=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(h===$i)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(h===fl)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=$i,m=!1){const p=this.elements,v=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(h===$i)E=-2/(f-c),C=-(f+c)/(f-c);else if(h===fl)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};mu.prototype.isMatrix4=!0;let sn=mu;const Dr=new Y,zi=new sn,kM=new Y(0,0,0),XM=new Y(1,1,1),rs=new Y,Cc=new Y,hi=new Y,Rv=new sn,Dv=new eo;class Ys{constructor(e=0,i=0,s=0,l=Ys.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ut(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ys.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jM=0;const Uv=new Y,Ur=new eo,ya=new sn,Rc=new Y,Jo=new Y,WM=new Y,qM=new eo,Nv=new Y(1,0,0),Lv=new Y(0,1,0),Ov=new Y(0,0,1),Pv={type:"added"},YM={type:"removed"},Nr={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Wn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new Y,i=new Ys,s=new eo,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new rt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ur.setFromAxisAngle(e,i),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,i){return Ur.setFromAxisAngle(e,i),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Nv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,i){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Nv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Rc.copy(e):Rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Jo,Rc,this.up):ya.lookAt(Rc,Jo,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Ur.setFromRotationMatrix(ya),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(YM),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),x=f(e.shapes),g=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new Y(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),y=this._getHandJoint(p,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Dc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Vd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Tt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Et.workingColorSpace){return this.r=e,this.g=i,this.b=s,Et.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Et.workingColorSpace){if(e=Sp(e,1),i=ut(i,0,1),s=ut(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Vd(f,c,e+1/3),this.g=Vd(f,c,e),this.b=Vd(f,c,e-1/3)}return Et.colorSpaceToWorking(this,l),this}setStyle(e,i=Ci){function s(c){c!==void 0&&parseFloat(c)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:et("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ci){const s=ex[e.toLowerCase()];return s!==void 0?this.setHex(s,i):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Et.workingToColorSpace(Hn.copy(this),e),Math.round(ut(Hn.r*255,0,255))*65536+Math.round(ut(Hn.g*255,0,255))*256+Math.round(ut(Hn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Et.workingColorSpace){Et.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,c=Hn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const x=f-h;switch(p=v<=.5?x/(f+h):x/(2-f-h),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Et.workingColorSpace){return Et.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ci){Et.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==Ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(Uc);const s=ll(os.h,Uc.h,i),l=ll(os.s,Uc.s,i),c=ll(os.l,Uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Tt;Tt.NAMES=ex;class KM extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ys,this.environmentIntensity=1,this.environmentRotation=new Ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new Y,Ma=new Y,kd=new Y,ba=new Y,Lr=new Y,Or=new Y,zv=new Y,Xd=new Y,jd=new Y,Wd=new Y,qd=new Yt,Yd=new Yt,Zd=new Yt;class Hi{constructor(e=new Y,i=new Y,s=new Y){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),Ma.subVectors(s,i),kd.subVectors(e,i);const f=Ii.dot(Ii),h=Ii.dot(Ma),m=Ii.dot(kd),p=Ma.dot(Ma),v=Ma.dot(kd),x=f*p-h*h;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(p*m-h*v)*g,E=(f*v-h*m)*g;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(f,ba.y),m.addScaledVector(h,ba.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,s),Zd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qd,c.x),f.addScaledVector(Yd,c.y),f.addScaledVector(Zd,c.z),f}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),Ma.subVectors(e,i),Ii.cross(Ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Ii.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Lr.subVectors(l,s),Or.subVectors(c,s),Xd.subVectors(e,s);const m=Lr.dot(Xd),p=Or.dot(Xd);if(m<=0&&p<=0)return i.copy(s);jd.subVectors(e,l);const v=Lr.dot(jd),x=Or.dot(jd);if(v>=0&&x<=v)return i.copy(l);const g=m*x-v*p;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Lr,f);Wd.subVectors(e,c);const M=Lr.dot(Wd),E=Or.dot(Wd);if(E>=0&&M<=E)return i.copy(c);const C=M*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Or,h);const S=v*E-M*x;if(S<=0&&x-v>=0&&M-E>=0)return zv.subVectors(c,l),h=(x-v)/(x-v+(M-E)),i.copy(l).addScaledVector(zv,h);const y=1/(S+C+g);return f=C*y,h=g*y,i.copy(s).addScaledVector(Lr,f).addScaledVector(Or,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gs{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Bi):Bi.fromBufferAttribute(c,f),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Lc.subVectors(this.max,$o),Pr.subVectors(e.a,$o),zr.subVectors(e.b,$o),Ir.subVectors(e.c,$o),ls.subVectors(zr,Pr),cs.subVectors(Ir,zr),zs.subVectors(Pr,Ir);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-zs.z,zs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,zs.z,0,-zs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-zs.y,zs.x,0];return!Kd(i,Pr,zr,Ir,Lc)||(i=[1,0,0,0,1,0,0,0,1],!Kd(i,Pr,zr,Ir,Lc))?!1:(Oc.crossVectors(ls,cs),i=[Oc.x,Oc.y,Oc.z],Kd(i,Pr,zr,Ir,Lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Bi=new Y,Nc=new gs,Pr=new Y,zr=new Y,Ir=new Y,ls=new Y,cs=new Y,zs=new Y,$o=new Y,Lc=new Y,Oc=new Y,Is=new Y;function Kd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Is.fromArray(r,c);const h=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=e.dot(Is),p=i.dot(Is),v=s.dot(Is);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const vn=new Y,Pc=new ot;let QM=0;class Ri extends Zs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ip,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(e),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ht(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array),c=Ht(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tx extends Ri{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class nx extends Ri{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Pn extends Ri{constructor(e,i,s){super(new Float32Array(e),i,s)}}const JM=new gs,el=new Y,Qd=new Y;class to{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):JM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(el,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Qd)),this.expandByPoint(el.copy(e.center).sub(Qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $M=0;const wi=new sn,Jd=new Wn,Br=new Y,pi=new gs,tl=new gs,bn=new Y;class qn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gM(e)?nx:tx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new rt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,s){return wi.makeTranslation(e,i,s),this.applyMatrix4(wi),this}scale(e,i,s){return wi.makeScale(e,i,s),this.applyMatrix4(wi),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Pn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(pi.min,tl.min),pi.expandByPoint(bn),bn.addVectors(pi.max,tl.max),pi.expandByPoint(bn)):(pi.expandByPoint(tl.min),pi.expandByPoint(tl.max))}pi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)bn.fromBufferAttribute(h,p),m&&(Br.fromBufferAttribute(e,p),bn.add(Br)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new Y,m[T]=new Y;const p=new Y,v=new Y,x=new Y,g=new ot,M=new ot,E=new ot,C=new Y,S=new Y;function y(T,I,K){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,I),x.fromBufferAttribute(s,K),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,I),E.fromBufferAttribute(c,K),v.sub(p),x.sub(p),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),h[T].add(C),h[I].add(C),h[K].add(C),m[T].add(S),m[I].add(S),m[K].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,I=R.length;T<I;++T){const K=R[T],G=K.start,$=K.count;for(let ue=G,pe=G+$;ue<pe;ue+=3)y(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new Y,O=new Y,j=new Y,z=new Y;function F(T){j.fromBufferAttribute(l,T),z.copy(j);const I=h[T];L.copy(I),L.sub(j.multiplyScalar(j.dot(I))).normalize(),O.crossVectors(z,I);const G=O.dot(m[T])<0?-1:1;f.setXYZW(T,L.x,L.y,L.z,G)}for(let T=0,I=R.length;T<I;++T){const K=R[T],G=K.start,$=K.count;for(let ue=G,pe=G+$;ue<pe;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ri(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new Y,c=new Y,f=new Y,h=new Y,m=new Y,p=new Y,v=new Y,x=new Y;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),v.subVectors(f,c),x.subVectors(l,c),v.cross(x),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),x.subVectors(l,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,x=h.normalized,g=new p.constructor(m.length*v);let M=0,E=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*v;for(let y=0;y<v;y++)g[E++]=p[M++]}return new Ri(g,v,x)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,x=p.length;v<x;v++){const g=p[v],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,g=p.length;x<g;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],x=c[p];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const x=f[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eb{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=ip,this.updateRanges=[],this.version=0,this.uuid=Ca()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new Y;class hs{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(e),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(e),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(e),this.setXYZ(i,kn.x,kn.y,kn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Fi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ht(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Fi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Fi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Fi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Fi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array),c=Ht(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){pu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ri(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let tb=0;class hl extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Wr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=vh,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){et(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){et(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==vh&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ta=new Y,$d=new Y,zc=new Y,us=new Y,eh=new Y,Ic=new Y,th=new Y;class ix{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){$d.copy(e).add(i).multiplyScalar(.5),zc.copy(i).sub(e).normalize(),us.copy(this.origin).sub($d);const c=e.distanceTo(i)*.5,f=-this.direction.dot(zc),h=us.dot(this.direction),m=-us.dot(zc),p=us.lengthSq(),v=Math.abs(1-f*f);let x,g,M,E;if(v>0)if(x=f*m-h,g=f*h-m,E=c*v,x>=0)if(g>=-E)if(g<=E){const C=1/v;x*=C,g*=C,M=x*(x+f*g+2*h)+g*(f*x+g+2*m)+p}else g=c,x=Math.max(0,-(f*g+h)),M=-x*x+g*(g+2*m)+p;else g=-c,x=Math.max(0,-(f*g+h)),M=-x*x+g*(g+2*m)+p;else g<=-E?(x=Math.max(0,-(-f*c+h)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p):g<=E?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(x=Math.max(0,-(f*c+h)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+p);else g=f>0?-c:c,x=Math.max(0,-(f*g+h)),M=-x*x+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy($d).addScaledVector(zc,g),M}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(h=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,c){eh.subVectors(i,e),Ic.subVectors(s,e),th.crossVectors(eh,Ic);let f=this.direction.dot(th),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;us.subVectors(this.origin,e);const m=h*this.direction.dot(Ic.crossVectors(us,Ic));if(m<0)return null;const p=h*this.direction.dot(eh.cross(us));if(p<0||m+p>f)return null;const v=-h*us.dot(th);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vu extends hl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ys,this.combine=P_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iv=new sn,Bs=new ix,Bc=new to,Bv=new Y,Fc=new Y,Hc=new Y,Gc=new Y,nh=new Y,Vc=new Y,Fv=new Y,kc=new Y;class Di extends Wn{constructor(e=new qn,i=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],x=c[m];v!==0&&(nh.fromBufferAttribute(x,e),f?Vc.addScaledVector(nh,v):Vc.addScaledVector(nh.sub(i),v))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Bs.copy(e.ray).recast(e.near),!(Bc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Bc,Bv)===null||Bs.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(Iv.copy(c).invert(),Bs.copy(e.ray).applyMatrix4(Iv),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Bs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const S=g[E],y=f[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let O=R,j=L;O<j;O+=3){const z=h.getX(O),F=h.getX(O+1),T=h.getX(O+2);l=Xc(this,y,e,s,p,v,x,z,F,T),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=E,y=C;S<y;S+=3){const R=h.getX(S),L=h.getX(S+1),O=h.getX(S+2);l=Xc(this,f,e,s,p,v,x,R,L,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=g.length;E<C;E++){const S=g[E],y=f[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let O=R,j=L;O<j;O+=3){const z=O,F=O+1,T=O+2;l=Xc(this,y,e,s,p,v,x,z,F,T),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=E,y=C;S<y;S+=3){const R=S,L=S+1,O=S+2;l=Xc(this,f,e,s,p,v,x,R,L,O),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function nb(r,e,i,s,l,c,f,h){let m;if(e.side===ti?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===ms,h),m===null)return null;kc.copy(h),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Fc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const v=nb(r,e,i,s,Fc,Hc,Gc,Fv);if(v){const x=new Y;Hi.getBarycoord(Fv,Fc,Hc,Gc,x),l&&(v.uv=Hi.getInterpolatedAttribute(l,h,m,p,x,new ot)),c&&(v.uv1=Hi.getInterpolatedAttribute(c,h,m,p,x,new ot)),f&&(v.normal=Hi.getInterpolatedAttribute(f,h,m,p,x,new Y),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new Y,materialIndex:0};Hi.getNormal(Fc,Hc,Gc,g.normal),v.face=g,v.barycoord=x}return v}class ib extends jn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=Ln,v=Ln,x,g){super(null,f,h,m,p,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new Y,ab=new Y,sb=new rt;class Hs{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=ih.subVectors(s,i).cross(ab.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(ih),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||sb.getNormalMatrix(e),l=this.coplanarPoint(ih).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new to,rb=new ot(.5,.5),jc=new Y;class Mp{constructor(e=new Hs,i=new Hs,s=new Hs,l=new Hs,c=new Hs,f=new Hs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=$i,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],x=c[5],g=c[6],M=c[7],E=c[8],C=c[9],S=c[10],y=c[11],R=c[12],L=c[13],O=c[14],j=c[15];if(l[0].setComponents(p-f,M-v,y-E,j-R).normalize(),l[1].setComponents(p+f,M+v,y+E,j+R).normalize(),l[2].setComponents(p+h,M+x,y+C,j+L).normalize(),l[3].setComponents(p-h,M-x,y-C,j-L).normalize(),s)l[4].setComponents(m,g,S,O).normalize(),l[5].setComponents(p-m,M-g,y-S,j-O).normalize();else if(l[4].setComponents(p-m,M-g,y-S,j-O).normalize(),i===$i)l[5].setComponents(p+m,M+g,y+S,j+O).normalize();else if(i===fl)l[5].setComponents(m,g,S,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const i=rb.distanceTo(e.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?e.max.x:e.min.x,jc.y=l.normal.y>0?e.max.y:e.min.y,jc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ax extends hl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hv=new sn,sp=new ix,Wc=new to,qc=new Y;class ob extends Wn{constructor(e=new qn,i=new ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Hv.copy(l).invert(),sp.copy(e.ray).applyMatrix4(Hv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,x=s.attributes.position;if(p!==null){const g=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=g,C=M;E<C;E++){const S=p.getX(E);qc.fromBufferAttribute(x,S),Gv(qc,S,m,l,e,i,this)}}else{const g=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let E=g,C=M;E<C;E++)qc.fromBufferAttribute(x,E),Gv(qc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gv(r,e,i,s,l,c,f){const h=sp.distanceSqToPoint(r);if(h<i){const m=new Y;sp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class sx extends jn{constructor(e=[],i=Ws,s,l,c,f,h,m,p,v){super(e,i,s,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kr extends jn{constructor(e,i,s=na,l,c,f,h=Ln,m=Ln,p,v=Da,x=1){if(v!==Da&&v!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,f,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lb extends Kr{constructor(e,i=na,s=Ws,l,c,f=Ln,h=Ln,m,p=Da){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,h,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rx extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends qn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],x=[];let g=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(x,2));function E(C,S,y,R,L,O,j,z,F,T,I){const K=O/F,G=j/T,$=O/2,ue=j/2,pe=z/2,V=F+1,N=T+1;let B=0,re=0;const me=new Y;for(let Se=0;Se<N;Se++){const P=Se*G-ue;for(let Q=0;Q<V;Q++){const xe=Q*K-$;me[C]=xe*R,me[S]=P*L,me[y]=pe,p.push(me.x,me.y,me.z),me[C]=0,me[S]=0,me[y]=z>0?1:-1,v.push(me.x,me.y,me.z),x.push(Q/F),x.push(1-Se/T),B+=1}}for(let Se=0;Se<T;Se++)for(let P=0;P<F;P++){const Q=g+P+V*Se,xe=g+P+V*(Se+1),Te=g+(P+1)+V*(Se+1),De=g+(P+1)+V*Se;m.push(Q,xe,De),m.push(xe,Te,De),re+=6}h.addGroup(M,re,I),M+=re,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _u extends qn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,x=e/h,g=i/m,M=[],E=[],C=[],S=[];for(let y=0;y<v;y++){const R=y*g-f;for(let L=0;L<p;L++){const O=L*x-c;E.push(O,-R,0),C.push(0,0,1),S.push(L/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let R=0;R<h;R++){const L=R+p*y,O=R+p*(y+1),j=R+1+p*(y+1),z=R+1+p*y;M.push(L,O,z),M.push(O,j,z)}this.setIndex(M),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(C,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.width,e.height,e.widthSegments,e.heightSegments)}}class bp extends qn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],x=[],g=new Y,M=new Y,E=new Y;for(let C=0;C<=s;C++){const S=f+C/s*h;for(let y=0;y<=l;y++){const R=y/l*c;M.x=(e+i*Math.cos(S))*Math.cos(R),M.y=(e+i*Math.cos(S))*Math.sin(R),M.z=i*Math.sin(S),p.push(M.x,M.y,M.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),E.subVectors(M,g).normalize(),v.push(E.x,E.y,E.z),x.push(y/l),x.push(C/s)}}for(let C=1;C<=s;C++)for(let S=1;S<=l;S++){const y=(l+1)*C+S-1,R=(l+1)*(C-1)+S-1,L=(l+1)*(C-1)+S,O=(l+1)*C+S;m.push(y,R,O),m.push(R,L,O)}this.setIndex(m),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class cb extends qn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],s=new Set,l=new Y,c=new Y;if(e.index!==null){const f=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const x=m[p],g=x.start,M=x.count;for(let E=g,C=g+M;E<C;E+=3)for(let S=0;S<3;S++){const y=h.getX(E+S),R=h.getX(E+(S+1)%3);l.fromBufferAttribute(f,y),c.fromBufferAttribute(f,R),Vv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,m=f.count/3;h<m;h++)for(let p=0;p<3;p++){const v=3*h+p,x=3*h+(p+1)%3;l.fromBufferAttribute(f,v),c.fromBufferAttribute(f,x),Vv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new Pn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Vv(r,e,i){const s=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}function Qr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(kv(l))l.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(kv(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const s=Qr(r[i]);for(const l in s)e[l]=s[l]}return e}function kv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ub(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function ox(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Jr={clone:Qr,merge:Xn};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends hl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=ub(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hb extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pb extends hl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mb extends hl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lx extends Wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ah=new sn,Xv=new Y,jv=new Y;class gb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Xv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xv),jv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(jv),i.updateMatrixWorld(),ah.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yc=new Y,Zc=new eo,qi=new Y;class cx extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,Zc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Yc,Zc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new Y,Wv=new ot,qv=new ot;class mi extends cx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,i){return this.getViewBounds(e,Wv,qv),i.subVectors(qv,Wv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ol*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class vb extends gb{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class Yv extends lx{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new vb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ep extends cx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _b extends lx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xb extends qn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Fr=-90,Hr=1;class Sb extends Wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Fr,Hr,e,i);l.layers=this.layers,this.add(l);const c=new mi(Fr,Hr,e,i);c.layers=this.layers,this.add(c);const f=new mi(Fr,Hr,e,i);f.layers=this.layers,this.add(f);const h=new mi(Fr,Hr,e,i);h.layers=this.layers,this.add(h);const m=new mi(Fr,Hr,e,i);m.layers=this.layers,this.add(m);const p=new mi(Fr,Hr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===$i)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class yb extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Mb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=bb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function bb(){this._document.hidden===!1&&this.reset()}class rp extends eb{constructor(e,i,s=1){super(e,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const i=super.clone(e);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(e){const i=super.toJSON(e);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}class Eb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,et("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Rp=class Rp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Rp.prototype.isMatrix2=!0;let Zv=Rp;const Kv=new Y,Kc=new Y,Gr=new Y,Vr=new Y,sh=new Y,Tb=new Y,Ab=new Y;class wb{constructor(e=new Y,i=new Y){this.start=e,this.end=i}set(e,i){return this.start.copy(e),this.end.copy(i),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,i){return this.delta(i).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,i){Kv.subVectors(e,this.start),Kc.subVectors(this.end,this.start);const s=Kc.dot(Kc);if(s===0)return 0;let c=Kc.dot(Kv)/s;return i&&(c=ut(c,0,1)),c}closestPointToPoint(e,i,s){const l=this.closestPointToPointParameter(e,i);return this.delta(s).multiplyScalar(l).add(this.start)}distanceSqToLine3(e,i=Tb,s=Ab){const l=10000000000000001e-32;let c,f;const h=this.start,m=e.start,p=this.end,v=e.end;Gr.subVectors(p,h),Vr.subVectors(v,m),sh.subVectors(h,m);const x=Gr.dot(Gr),g=Vr.dot(Vr),M=Vr.dot(sh);if(x<=l&&g<=l)return i.copy(h),s.copy(m),i.sub(s),i.dot(i);if(x<=l)c=0,f=M/g,f=ut(f,0,1);else{const E=Gr.dot(sh);if(g<=l)f=0,c=ut(-E/x,0,1);else{const C=Gr.dot(Vr),S=x*g-C*C;S!==0?c=ut((C*M-E*g)/S,0,1):c=0,f=(C*c+M)/g,f<0?(f=0,c=ut(-E/x,0,1)):f>1&&(f=1,c=ut((C-E)/x,0,1))}}return i.copy(h).addScaledVector(Gr,c),s.copy(m).addScaledVector(Vr,f),i.distanceToSquared(s)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Qv(r,e,i,s){const l=Cb(s);switch(i){case Y_:return r*e;case K_:return r*e/l.components*l.byteLength;case mp:return r*e/l.components*l.byteLength;case qs:return r*e*2/l.components*l.byteLength;case gp:return r*e*2/l.components*l.byteLength;case Z_:return r*e*3/l.components*l.byteLength;case Gi:return r*e*4/l.components*l.byteLength;case vp:return r*e*4/l.components*l.byteLength;case iu:case au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case su:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ch:case Dh:return Math.max(r,16)*Math.max(e,8)/4;case wh:case Rh:return Math.max(r,8)*Math.max(e,8)/2;case Uh:case Nh:case Oh:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lh:case cu:case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uu:case np:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Cb(r){switch(r){case gi:case X_:return{byteLength:1,components:1};case cl:case j_:case vi:return{byteLength:2,components:1};case hp:case pp:return{byteLength:2,components:4};case na:case dp:case Ji:return{byteLength:4,components:1};case W_:case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ux(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Rb(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const v=m.array,x=m.updateRanges;if(r.bindBuffer(p,h),x.length===0)r.bufferSubData(p,0,v);else{x.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<x.length;M++){const E=x[g],C=x[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,E=x.length;M<E;M++){const C=x[M];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
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
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zb=`#ifdef USE_AOMAP
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
#endif`,Ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
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
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Xb=`#ifdef USE_BUMPMAP
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$b=`#define PI 3.141592653589793
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
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tE=`vec3 transformedNormal = objectNormal;
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
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vE=`#ifdef USE_GRADIENTMAP
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
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ME=`#ifdef USE_ENVMAP
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
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
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
#endif`,CE=`uniform sampler2D dfgLUT;
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
}`,RE=`
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
#endif`,DE=`#if defined( RE_IndirectDiffuse )
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
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,LE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HE=`#if defined( USE_POINTS_UV )
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
#endif`,GE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
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
#endif`,qE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m1=`float getShadowMask() {
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
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v1=`#ifdef USE_SKINNING
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
#endif`,_1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,S1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
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
}`,I1=`#if DEPTH_PACKING == 3200
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
}`,B1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`uniform float scale;
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
}`,k1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,j1=`uniform vec3 diffuse;
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
}`,W1=`#define LAMBERT
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define MATCAP
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
}`,Z1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,J1=`#define PHONG
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
}`,$1=`#define PHONG
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
}`,eT=`#define STANDARD
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
}`,tT=`#define STANDARD
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
}`,nT=`#define TOON
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
}`,iT=`#define TOON
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
}`,aT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,rT=`#include <common>
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
}`,oT=`uniform vec3 color;
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
}`,lT=`uniform float rotation;
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
}`,cT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Nb,alphamap_pars_fragment:Lb,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:zb,aomap_pars_fragment:Ib,batching_pars_vertex:Bb,batching_vertex:Fb,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:jb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:eE,defaultnormal_vertex:tE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:aE,emissivemap_pars_fragment:sE,colorspace_fragment:rE,colorspace_pars_fragment:oE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:ME,envmap_vertex:dE,fog_vertex:hE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:vE,lightmap_pars_fragment:_E,lights_lambert_fragment:xE,lights_lambert_pars_fragment:SE,lights_pars_begin:yE,lights_toon_fragment:bE,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:AE,lights_physical_fragment:wE,lights_physical_pars_fragment:CE,lights_fragment_begin:RE,lights_fragment_maps:DE,lights_fragment_end:UE,lightprobes_pars_fragment:NE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:OE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:zE,map_fragment:IE,map_pars_fragment:BE,map_particle_fragment:FE,map_particle_pars_fragment:HE,metalnessmap_fragment:GE,metalnessmap_pars_fragment:VE,morphinstance_vertex:kE,morphcolor_vertex:XE,morphnormal_vertex:jE,morphtarget_pars_vertex:WE,morphtarget_vertex:qE,normal_fragment_begin:YE,normal_fragment_maps:ZE,normal_pars_fragment:KE,normal_pars_vertex:QE,normal_vertex:JE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:a1,packing:s1,premultiplied_alpha_fragment:r1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:d1,shadowmap_pars_vertex:h1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:v1,skinning_vertex:_1,skinnormal_vertex:x1,specularmap_fragment:S1,specularmap_pars_fragment:y1,tonemapping_fragment:M1,tonemapping_pars_fragment:b1,transmission_fragment:E1,transmission_pars_fragment:T1,uv_pars_fragment:A1,uv_pars_vertex:w1,uv_vertex:C1,worldpos_vertex:R1,background_vert:D1,background_frag:U1,backgroundCube_vert:N1,backgroundCube_frag:L1,cube_vert:O1,cube_frag:P1,depth_vert:z1,depth_frag:I1,distance_vert:B1,distance_frag:F1,equirect_vert:H1,equirect_frag:G1,linedashed_vert:V1,linedashed_frag:k1,meshbasic_vert:X1,meshbasic_frag:j1,meshlambert_vert:W1,meshlambert_frag:q1,meshmatcap_vert:Y1,meshmatcap_frag:Z1,meshnormal_vert:K1,meshnormal_frag:Q1,meshphong_vert:J1,meshphong_frag:$1,meshphysical_vert:eT,meshphysical_frag:tT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:aT,points_frag:sT,shadow_vert:rT,shadow_frag:oT,sprite_vert:lT,sprite_frag:cT},Ie={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ei={basic:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Xn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Xn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Xn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Xn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Xn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Xn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Xn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Xn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Xn([Ie.common,Ie.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Xn([Ie.lights,Ie.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ei.physical={uniforms:Xn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Qc={r:0,b:0,g:0},uT=new sn,fx=new rt;fx.set(-1,0,0,0,1,0,0,0,1);function fT(r,e,i,s,l,c){const f=new Tt(0);let h=l===!0?0:1,m,p,v=null,x=0,g=null;function M(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const O=R.backgroundBlurriness>0;L=e.get(L,O)}return L}function E(R){let L=!1;const O=M(R);O===null?S(f,h):O&&O.isColor&&(S(O,1),L=!0);const j=r.xr.getEnvironmentBlendMode();j==="additive"?i.buffers.color.setClear(0,0,0,1,c):j==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(R,L){const O=M(L);O&&(O.isCubeTexture||O.mapping===gu)?(p===void 0&&(p=new Di(new pl(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Qr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(j,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=O,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(L.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(fx),p.material.toneMapped=Et.getTransfer(O.colorSpace)!==Ft,(v!==O||x!==O.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,g=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new Di(new _u(2,2),new On({name:"BackgroundMaterial",uniforms:Qr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Et.getTransfer(O.colorSpace)!==Ft,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=O,x=O.version,g=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function S(R,L){R.getRGB(Qc,ox(r)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,L,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,L=1){f.set(R),h=L,S(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,S(f,h)},render:E,addToRenderList:C,dispose:y}}function dT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,$,ue,pe,V){let N=!1;const B=x(G,pe,ue,$);c!==B&&(c=B,p(c.object)),N=M(G,pe,ue,V),N&&E(G,pe,ue,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(N||f)&&(f=!1,O(G,$,ue,pe),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function v(G){return r.deleteVertexArray(G)}function x(G,$,ue,pe){const V=pe.wireframe===!0;let N=s[$.id];N===void 0&&(N={},s[$.id]=N);const B=G.isInstancedMesh===!0?G.id:0;let re=N[B];re===void 0&&(re={},N[B]=re);let me=re[ue.id];me===void 0&&(me={},re[ue.id]=me);let Se=me[V];return Se===void 0&&(Se=g(m()),me[V]=Se),Se}function g(G){const $=[],ue=[],pe=[];for(let V=0;V<i;V++)$[V]=0,ue[V]=0,pe[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ue,attributeDivisors:pe,object:G,attributes:{},index:null}}function M(G,$,ue,pe){const V=c.attributes,N=$.attributes;let B=0;const re=ue.getAttributes();for(const me in re)if(re[me].location>=0){const P=V[me];let Q=N[me];if(Q===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;B++}return c.attributesNum!==B||c.index!==pe}function E(G,$,ue,pe){const V={},N=$.attributes;let B=0;const re=ue.getAttributes();for(const me in re)if(re[me].location>=0){let P=N[me];P===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),V[me]=Q,B++}c.attributes=V,c.attributesNum=B,c.index=pe}function C(){const G=c.newAttributes;for(let $=0,ue=G.length;$<ue;$++)G[$]=0}function S(G){y(G,0)}function y(G,$){const ue=c.newAttributes,pe=c.enabledAttributes,V=c.attributeDivisors;ue[G]=1,pe[G]===0&&(r.enableVertexAttribArray(G),pe[G]=1),V[G]!==$&&(r.vertexAttribDivisor(G,$),V[G]=$)}function R(){const G=c.newAttributes,$=c.enabledAttributes;for(let ue=0,pe=$.length;ue<pe;ue++)$[ue]!==G[ue]&&(r.disableVertexAttribArray(ue),$[ue]=0)}function L(G,$,ue,pe,V,N,B){B===!0?r.vertexAttribIPointer(G,$,ue,V,N):r.vertexAttribPointer(G,$,ue,pe,V,N)}function O(G,$,ue,pe){C();const V=pe.attributes,N=ue.getAttributes(),B=$.defaultAttributeValues;for(const re in N){const me=N[re];if(me.location>=0){let Se=V[re];if(Se===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const P=Se.normalized,Q=Se.itemSize,xe=e.get(Se);if(xe===void 0)continue;const Te=xe.buffer,De=xe.type,oe=xe.bytesPerElement,ye=De===r.INT||De===r.UNSIGNED_INT||Se.gpuType===dp;if(Se.isInterleavedBufferAttribute){const Ee=Se.data,He=Ee.stride,$e=Se.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<me.locationSize;Qe++)y(me.location+Qe,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<me.locationSize;Qe++)S(me.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Qe=0;Qe<me.locationSize;Qe++)L(me.location+Qe,Q/me.locationSize,De,P,He*oe,($e+Q/me.locationSize*Qe)*oe,ye)}else{if(Se.isInstancedBufferAttribute){for(let Ee=0;Ee<me.locationSize;Ee++)y(me.location+Ee,Se.meshPerAttribute);G.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<me.locationSize;Ee++)S(me.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Ee=0;Ee<me.locationSize;Ee++)L(me.location+Ee,Q/me.locationSize,De,P,Q*oe,Q/me.locationSize*Ee*oe,ye)}}else if(B!==void 0){const P=B[re];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(me.location,P);break;case 3:r.vertexAttrib3fv(me.location,P);break;case 4:r.vertexAttrib4fv(me.location,P);break;default:r.vertexAttrib1fv(me.location,P)}}}}R()}function j(){I();for(const G in s){const $=s[G];for(const ue in $){const pe=$[ue];for(const V in pe){const N=pe[V];for(const B in N)v(N[B].object),delete N[B];delete pe[V]}}delete s[G]}}function z(G){if(s[G.id]===void 0)return;const $=s[G.id];for(const ue in $){const pe=$[ue];for(const V in pe){const N=pe[V];for(const B in N)v(N[B].object),delete N[B];delete pe[V]}}delete s[G.id]}function F(G){for(const $ in s){const ue=s[$];for(const pe in ue){const V=ue[pe];if(V[G.id]===void 0)continue;const N=V[G.id];for(const B in N)v(N[B].object),delete N[B];delete V[G.id]}}}function T(G){for(const $ in s){const ue=s[$],pe=G.isInstancedMesh===!0?G.id:0,V=ue[pe];if(V!==void 0){for(const N in V){const B=V[N];for(const re in B)v(B[re].object),delete B[re];delete V[N]}delete ue[pe],Object.keys(ue).length===0&&delete s[$]}}}function I(){K(),f=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:K,dispose:j,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:R}}function hT(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function pT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Gi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==gi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ji&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(et("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),O=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:O,maxSamples:j,samples:z}}function mT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Hs,h=new rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,M){const E=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,y=r.get(x);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const R=c?0:s,L=R*4;let O=y.clippingState||null;m.value=O,O=v(E,g,L,M);for(let j=0;j!==L;++j)O[j]=i[j];y.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,g,M,E){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=m.value,E!==!0||S===null){const y=M+C*4,R=g.matrixWorldInverse;h.getNormalMatrix(R),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,O=M;L!==C;++L,O+=4)f.copy(x[L]).applyMatrix4(R,h),f.normal.toArray(S,O),S[O+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const ps=4,Jv=[.125,.215,.35,.446,.526,.582],Vs=20,gT=256,nl=new Ep,$v=new Tt;let rh=null,oh=0,lh=0,ch=!1;const vT=new Y;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=vT}=c;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ws||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:vi,format:Gi,colorSpace:fu,depthBuffer:!1},l=t_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_T(c)),this._blurMaterial=ST(c,e,i),this._ggxMaterial=xT(c,e,i)}return l}_compileMaterial(e){const i=new Di(new qn,e);this._renderer.compile(i,nl)}_sceneToCubeUV(e,i,s,l,c){const m=new mi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor($v),x.toneMapping=ta,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new pl,new vu({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,y=!0):(S.color.copy($v),y=!0);for(let L=0;L<6;L++){const O=L%3;O===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[L],c.y,c.z)):O===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[L]));const j=this._cubeSize;kr(l,O*j,L>2?j:0,j,j),x.setRenderTarget(l),y&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=R}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ws||e.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,nl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,M=x*g,{_lodMax:E}=this,C=this._sizeLods[s],S=3*C*(s>E-ps?s-E+ps:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,kr(c,S,y,3*C,2*C),l.setRenderTarget(c),l.render(h,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,kr(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(h,nl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Vs-1),C=c/E,S=isFinite(c)?1+Math.floor(v*C):Vs;S>Vs&&et(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Vs}`);const y=[];let R=0;for(let F=0;F<Vs;++F){const T=F/C,I=Math.exp(-T*T/2);y.push(I),F===0?R+=I:F<S&&(R+=2*I)}for(let F=0;F<y.length;F++)y[F]=y[F]/R;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-s;const O=this._sizeLods[l],j=3*O*(l>L-ps?l-L+ps:0),z=4*(this._cubeSize-O);kr(i,j,z,3*O,2*O),m.setRenderTarget(i),m.render(x,nl)}}function _T(r){const e=[],i=[],s=[];let l=r;const c=r-ps+1+Jv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-ps?m=Jv[f-r+ps-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,E=6,C=3,S=2,y=1,R=new Float32Array(C*E*M),L=new Float32Array(S*E*M),O=new Float32Array(y*E*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,T=z>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];R.set(I,C*E*z),L.set(g,S*E*z);const K=[z,z,z,z,z,z];O.set(K,y*E*z)}const j=new qn;j.setAttribute("position",new Ri(R,C)),j.setAttribute("uv",new Ri(L,S)),j.setAttribute("faceIndex",new Ri(O,y)),s.push(new Di(j,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function t_(r,e,i){const s=new ni(r,e,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function xT(r,e,i){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ea,depthTest:!1,depthWrite:!1})}function ST(r,e,i){const s=new Float32Array(Vs),l=new Y(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ea,depthTest:!1,depthWrite:!1})}function n_(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:ea,depthTest:!1,depthWrite:!1})}function i_(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ea,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}class dx extends ni{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new sx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new On({name:"CubemapFromEquirect",uniforms:Qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:ea});c.uniforms.tEquirect.value=i;const f=new Di(l,c),h=i.minFilter;return i.minFilter===ks&&(i.minFilter=Gn),new Sb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function yT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ld||M===Od)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new dx(E.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,E=M===Ld||M===Od,C=M===Ws||M===Zr;if(E||C){let S=i.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return s===null&&(s=new e_(r)),S=E?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const R=g.image;return E&&R&&R.height>0||C&&R&&m(R)?(s===null&&(s=new e_(r)),S=E?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function h(g,M){return M===Ld?g.mapping=Ws:M===Od&&(g.mapping=Zr),g}function m(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function MT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ap("WebGLRenderer: "+s+" extension not supported."),l}}}function bT(r,e,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(x){const g=[],M=x.index,E=x.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let L=0,O=R.length;L<O;L+=3){const j=R[L+0],z=R[L+1],F=R[L+2];g.push(j,z,z,F,F,j)}}else{const R=E.array;C=E.version;for(let L=0,O=R.length/3-1;L<O;L+=3){const j=L+0,z=L+1,F=L+2;g.push(j,z,z,F,F,j)}}const S=new(E.count>=65535?nx:tx)(g,1);S.version=C;const y=c.get(x);y&&e.remove(y),c.set(x,S)}function v(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:v}}function ET(r,e,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function p(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*f,M),i.update(g,s,M))}function v(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function TT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:At("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function AT(r,e,i){const s=new WeakMap,l=new Yt;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==x){let K=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",K)};var M=K;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),C===!0&&(O=2),S===!0&&(O=3);let j=h.attributes.position.count*O,z=1;j>e.maxTextureSize&&(z=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const F=new Float32Array(j*z*4*x),T=new J_(F,j,z,x);T.type=Ji,T.needsUpdate=!0;const I=O*4;for(let G=0;G<x;G++){const $=y[G],ue=R[G],pe=L[G],V=j*z*4*G;for(let N=0;N<$.count;N++){const B=N*I;E===!0&&(l.fromBufferAttribute($,N),F[V+B+0]=l.x,F[V+B+1]=l.y,F[V+B+2]=l.z,F[V+B+3]=0),C===!0&&(l.fromBufferAttribute(ue,N),F[V+B+4]=l.x,F[V+B+5]=l.y,F[V+B+6]=l.z,F[V+B+7]=0),S===!0&&(l.fromBufferAttribute(pe,N),F[V+B+8]=l.x,F[V+B+9]=l.y,F[V+B+10]=l.z,F[V+B+11]=pe.itemSize===4?l.w:1)}}g={count:x,texture:T,size:new ot(j,z)},s.set(h,g),h.addEventListener("dispose",K)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function wT(r,e,i,s,l){let c=new WeakMap;function f(p){const v=l.render.frame,x=p.geometry,g=e.get(p,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:h}}const CT={[z_]:"LINEAR_TONE_MAPPING",[I_]:"REINHARD_TONE_MAPPING",[B_]:"CINEON_TONE_MAPPING",[F_]:"ACES_FILMIC_TONE_MAPPING",[G_]:"AGX_TONE_MAPPING",[V_]:"NEUTRAL_TONE_MAPPING",[H_]:"CUSTOM_TONE_MAPPING"};function RT(r,e,i,s,l){const c=new ni(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Kr(e,i):void 0}),f=new ni(e,i,{type:vi,depthBuffer:!1,stencilBuffer:!1}),h=new qn;h.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const m=new hb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Di(h,m),v=new Ep(-1,1,1,-1,0,1);let x=null,g=null,M=!1,E,C=null,S=[],y=!1;this.setSize=function(R,L){c.setSize(R,L),f.setSize(R,L);for(let O=0;O<S.length;O++){const j=S[O];j.setSize&&j.setSize(R,L)}},this.setEffects=function(R){S=R,y=S.length>0&&S[0].isRenderPass===!0;const L=c.width,O=c.height;for(let j=0;j<S.length;j++){const z=S[j];z.setSize&&z.setSize(L,O)}},this.begin=function(R,L){if(M||R.toneMapping===ta&&S.length===0)return!1;if(C=L,L!==null){const O=L.width,j=L.height;(c.width!==O||c.height!==j)&&this.setSize(O,j)}return y===!1&&R.setRenderTarget(c),E=R.toneMapping,R.toneMapping=ta,!0},this.hasRenderPass=function(){return y},this.end=function(R,L){R.toneMapping=E,M=!0;let O=c,j=f;for(let z=0;z<S.length;z++){const F=S[z];if(F.enabled!==!1&&(F.render(R,j,O,L),F.needsSwap!==!1)){const T=O;O=j,j=T}}if(x!==R.outputColorSpace||g!==R.toneMapping){x=R.outputColorSpace,g=R.toneMapping,m.defines={},Et.getTransfer(x)===Ft&&(m.defines.SRGB_TRANSFER="");const z=CT[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,R.setRenderTarget(C),R.render(p,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const hx=new jn,op=new Kr(1,1),px=new J_,mx=new VM,gx=new sx,a_=[],s_=[],r_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function no(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=a_[l];if(c===void 0&&(c=new Float32Array(l),a_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function Sn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function yn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Su(r,e){let i=s_[e];i===void 0&&(i=new Int32Array(e),s_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function DT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function UT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2fv(this.addr,e),yn(i,e)}}function NT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;r.uniform3fv(this.addr,e),yn(i,e)}}function LT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4fv(this.addr,e),yn(i,e)}}function OT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;l_.set(s),r.uniformMatrix2fv(this.addr,!1,l_),yn(i,s)}}function PT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;o_.set(s),r.uniformMatrix3fv(this.addr,!1,o_),yn(i,s)}}function zT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;r_.set(s),r.uniformMatrix4fv(this.addr,!1,r_),yn(i,s)}}function IT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function BT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2iv(this.addr,e),yn(i,e)}}function FT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3iv(this.addr,e),yn(i,e)}}function HT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4iv(this.addr,e),yn(i,e)}}function GT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2uiv(this.addr,e),yn(i,e)}}function kT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3uiv(this.addr,e),yn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4uiv(this.addr,e),yn(i,e)}}function jT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(op.compareFunction=i.isReversedDepthBuffer()?xp:_p,c=op):c=hx,i.setTexture2D(e||c,l)}function WT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||mx,l)}function qT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||gx,l)}function YT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||px,l)}function ZT(r){switch(r){case 5126:return DT;case 35664:return UT;case 35665:return NT;case 35666:return LT;case 35674:return OT;case 35675:return PT;case 35676:return zT;case 5124:case 35670:return IT;case 35667:case 35671:return BT;case 35668:case 35672:return FT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return kT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function KT(r,e){r.uniform1fv(this.addr,e)}function QT(r,e){const i=no(e,this.size,2);r.uniform2fv(this.addr,i)}function JT(r,e){const i=no(e,this.size,3);r.uniform3fv(this.addr,i)}function $T(r,e){const i=no(e,this.size,4);r.uniform4fv(this.addr,i)}function eA(r,e){const i=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function tA(r,e){const i=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function nA(r,e){const i=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function iA(r,e){r.uniform1iv(this.addr,e)}function aA(r,e){r.uniform2iv(this.addr,e)}function sA(r,e){r.uniform3iv(this.addr,e)}function rA(r,e){r.uniform4iv(this.addr,e)}function oA(r,e){r.uniform1uiv(this.addr,e)}function lA(r,e){r.uniform2uiv(this.addr,e)}function cA(r,e){r.uniform3uiv(this.addr,e)}function uA(r,e){r.uniform4uiv(this.addr,e)}function fA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=op:f=hx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function dA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||mx,c[f])}function hA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||gx,c[f])}function pA(r,e,i){const s=this.cache,l=e.length,c=Su(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||px,c[f])}function mA(r){switch(r){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class vA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mA(i.type)}}class _A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function c_(r,e){r.seq.push(e),r.map[e.id]=e}function xA(r,e,i){const s=r.name,l=s.length;for(uh.lastIndex=0;;){const c=uh.exec(s),f=uh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){c_(i,p===void 0?new gA(h,r,e):new vA(h,r,e));break}else{let x=i.map[h];x===void 0&&(x=new _A(h),c_(i,x)),i=x}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);xA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function u_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const SA=37297;let yA=0;function MA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const f_=new rt;function bA(r){Et._getMatrix(f_,Et.workingColorSpace,r);const e=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(Et.getTransfer(r)){case du:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function d_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+MA(r.getShaderSource(e),h)}else return c}function EA(r,e){const i=bA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TA={[z_]:"Linear",[I_]:"Reinhard",[B_]:"Cineon",[F_]:"ACESFilmic",[G_]:"AgX",[V_]:"Neutral",[H_]:"Custom"};function AA(r,e){const i=TA[e];return i===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Jc=new Y;function wA(){Et.getLuminanceCoefficients(Jc);const r=Jc.x.toFixed(4),e=Jc.y.toFixed(4),i=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function RA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function DA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function rl(r){return r!==""}function h_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(UA,LA)}const NA=new Map;function LA(r,e){let i=ht[e];if(i===void 0){const s=NA.get(e);if(s!==void 0)i=ht[s],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lp(i)}const OA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(r){return r.replace(OA,PA)}function PA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function g_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const zA={[nu]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function IA(r){return zA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BA={[Ws]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function FA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":BA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const HA={[Zr]:"ENVMAP_MODE_REFRACTION"};function GA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":HA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VA={[P_]:"ENVMAP_BLENDING_MULTIPLY",[sM]:"ENVMAP_BLENDING_MIX",[rM]:"ENVMAP_BLENDING_ADD"};function kA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":VA[r.combine]||"ENVMAP_BLENDING_NONE"}function XA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function jA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=IA(i),p=FA(i),v=GA(i),x=kA(i),g=XA(i),M=CA(i),E=RA(c),C=l.createProgram();let S,y,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(rl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(rl).join(`
`),y.length>0&&(y+=`
`)):(S=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),y=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ta?"#define TONE_MAPPING":"",i.toneMapping!==ta?ht.tonemapping_pars_fragment:"",i.toneMapping!==ta?AA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,EA("linearToOutputTexel",i.outputColorSpace),wA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),f=lp(f),f=h_(f,i),f=p_(f,i),h=lp(h),h=h_(h,i),h=p_(h,i),f=m_(f),h=m_(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=R+S+f,O=R+y+h,j=u_(l,l.VERTEX_SHADER,L),z=u_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,j),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(G){if(r.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",ue=l.getShaderInfoLog(j)||"",pe=l.getShaderInfoLog(z)||"",V=$.trim(),N=ue.trim(),B=pe.trim();let re=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(re=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,j,z);else{const Se=d_(l,j,"vertex"),P=d_(l,z,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+V+`
`+Se+`
`+P)}else V!==""?et("WebGLProgram: Program Info Log:",V):(N===""||B==="")&&(me=!1);me&&(G.diagnostics={runnable:re,programLog:V,vertexShader:{log:N,prefix:S},fragmentShader:{log:B,prefix:y}})}l.deleteShader(j),l.deleteShader(z),T=new ou(l,C),I=DA(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let K=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=l.getProgramParameter(C,SA)),K},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=j,this.fragmentShader=z,this}let WA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new YA(e),i.set(e,s)),s}}class YA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function ZA(r){return r===qs||r===cu||r===uu}function KA(r,e,i,s,l,c){const f=new $_,h=new qA,m=new Set,p=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,I,K,G,$,ue){const pe=G.fog,V=$.geometry,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,re=e.get(T.envMap||N,B),me=re&&re.mapping===gu?re.image.height:null,Se=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&et("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Q=P!==void 0?P.length:0;let xe=0;V.morphAttributes.position!==void 0&&(xe=1),V.morphAttributes.normal!==void 0&&(xe=2),V.morphAttributes.color!==void 0&&(xe=3);let Te,De,oe,ye;if(Se){const tt=ei[Se];Te=tt.vertexShader,De=tt.fragmentShader}else Te=T.vertexShader,De=T.fragmentShader,h.update(T),oe=h.getVertexShaderID(T),ye=h.getFragmentShaderID(T);const Ee=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),$e=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,jt=!!T.map,pt=!!T.matcap,St=!!re,Lt=!!T.aoMap,ft=!!T.lightMap,ln=!!T.bumpMap,Zt=!!T.normalMap,En=!!T.displacementMap,W=!!T.emissiveMap,nn=!!T.metalnessMap,mt=!!T.roughnessMap,Gt=T.anisotropy>0,we=T.clearcoat>0,Jt=T.dispersion>0,D=T.iridescence>0,b=T.sheen>0,J=T.transmission>0,ve=Gt&&!!T.anisotropyMap,be=we&&!!T.clearcoatMap,Ce=we&&!!T.clearcoatNormalMap,Le=we&&!!T.clearcoatRoughnessMap,ce=D&&!!T.iridescenceMap,fe=D&&!!T.iridescenceThicknessMap,Oe=b&&!!T.sheenColorMap,Pe=b&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Re=!!T.specularColorMap,it=!!T.specularIntensityMap,at=J&&!!T.transmissionMap,gt=J&&!!T.thicknessMap,k=!!T.gradientMap,Ae=!!T.alphaMap,he=T.alphaTest>0,Fe=!!T.alphaHash,Ne=!!T.extensions;let Me=ta;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=r.toneMapping);const We={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:De,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:$e,instancingColor:$e&&$.instanceColor!==null,instancingMorph:$e&&$.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:jt,matcap:pt,envMap:St,envMapMode:St&&re.mapping,envMapCubeUVHeight:me,aoMap:Lt,lightMap:ft,bumpMap:ln,normalMap:Zt,displacementMap:En,emissiveMap:W,normalMapObjectSpace:Zt&&T.normalMapType===cM,normalMapTangentSpace:Zt&&T.normalMapType===yv,packedNormalMap:Zt&&T.normalMapType===yv&&ZA(T.normalMap.format),metalnessMap:nn,roughnessMap:mt,anisotropy:Gt,anisotropyMap:ve,clearcoat:we,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Jt,iridescence:D,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:b,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:Re,specularIntensityMap:it,transmission:J,transmissionMap:at,thicknessMap:gt,gradientMap:k,opaque:T.transparent===!1&&T.blending===Wr&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:Fe,combine:T.combine,mapUv:jt&&E(T.map.channel),aoMapUv:Lt&&E(T.aoMap.channel),lightMapUv:ft&&E(T.lightMap.channel),bumpMapUv:ln&&E(T.bumpMap.channel),normalMapUv:Zt&&E(T.normalMap.channel),displacementMapUv:En&&E(T.displacementMap.channel),emissiveMapUv:W&&E(T.emissiveMap.channel),metalnessMapUv:nn&&E(T.metalnessMap.channel),roughnessMapUv:mt&&E(T.roughnessMap.channel),anisotropyMapUv:ve&&E(T.anisotropyMap.channel),clearcoatMapUv:be&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(T.sheenRoughnessMap.channel),specularMapUv:Ue&&E(T.specularMap.channel),specularColorMapUv:Re&&E(T.specularColorMap.channel),specularIntensityMapUv:it&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:gt&&E(T.thicknessMap.channel),alphaMapUv:Ae&&E(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Zt||Gt),vertexNormals:!!V.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(jt||Ae),fog:!!pe,useFog:T.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||V.attributes.normal===void 0&&Zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:He,skinning:$.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&K.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:jt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Aa,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function S(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const K in T.defines)I.push(K),I.push(T.defines[K]);return T.isRawShaderMaterial===!1&&(y(I,T),R(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function y(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function R(T,I){f.disableAll(),I.instancing&&f.enable(0),I.instancingColor&&f.enable(1),I.instancingMorph&&f.enable(2),I.matcap&&f.enable(3),I.envMap&&f.enable(4),I.normalMapObjectSpace&&f.enable(5),I.normalMapTangentSpace&&f.enable(6),I.clearcoat&&f.enable(7),I.iridescence&&f.enable(8),I.alphaTest&&f.enable(9),I.vertexColors&&f.enable(10),I.vertexAlphas&&f.enable(11),I.vertexUv1s&&f.enable(12),I.vertexUv2s&&f.enable(13),I.vertexUv3s&&f.enable(14),I.vertexTangents&&f.enable(15),I.anisotropy&&f.enable(16),I.alphaHash&&f.enable(17),I.batching&&f.enable(18),I.dispersion&&f.enable(19),I.batchingColor&&f.enable(20),I.gradientMap&&f.enable(21),I.packedNormalMap&&f.enable(22),I.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),I.fog&&f.enable(0),I.useFog&&f.enable(1),I.flatShading&&f.enable(2),I.logarithmicDepthBuffer&&f.enable(3),I.reversedDepthBuffer&&f.enable(4),I.skinning&&f.enable(5),I.morphTargets&&f.enable(6),I.morphNormals&&f.enable(7),I.morphColors&&f.enable(8),I.premultipliedAlpha&&f.enable(9),I.shadowMapEnabled&&f.enable(10),I.doubleSided&&f.enable(11),I.flipSided&&f.enable(12),I.useDepthPacking&&f.enable(13),I.dithering&&f.enable(14),I.transmission&&f.enable(15),I.sheen&&f.enable(16),I.opaque&&f.enable(17),I.pointsUvs&&f.enable(18),I.decodeVideoTexture&&f.enable(19),I.decodeVideoTextureEmissive&&f.enable(20),I.alphaToCoverage&&f.enable(21),I.numLightProbeGrids>0&&f.enable(22),T.push(f.mask)}function L(T){const I=M[T.type];let K;if(I){const G=ei[I];K=Jr.clone(G.uniforms)}else K=T.uniforms;return K}function O(T,I){let K=v.get(I);return K!==void 0?++K.usedTimes:(K=new jA(r,I,T,l),p.push(K),v.set(I,K)),K}function j(T){if(--T.usedTimes===0){const I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function z(T){h.remove(T)}function F(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:L,acquireProgram:O,releaseProgram:j,releaseShaderCache:z,programs:p,dispose:F}}function QA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function JA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function v_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function __(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,C,S,y){let R=r[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:E,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:y},r[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=E,R.materialVariant=f(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=S,R.group=y),e++,R}function m(g,M,E,C,S,y){const R=h(g,M,E,C,S,y);E.transmission>0?s.push(R):E.transparent===!0?l.push(R):i.push(R)}function p(g,M,E,C,S,y){const R=h(g,M,E,C,S,y);E.transmission>0?s.unshift(R):E.transparent===!0?l.unshift(R):i.unshift(R)}function v(g,M){i.length>1&&i.sort(g||JA),s.length>1&&s.sort(M||v_),l.length>1&&l.sort(M||v_)}function x(){for(let g=e,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:x,sort:v}}function $A(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new __,r.set(s,[f])):l>=c.length?(f=new __,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function e2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Y,color:new Tt};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=i,i}}}function t2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let n2=0;function i2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function a2(r){const e=new e2,i=t2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new sn,f=new sn;function h(p){let v=0,x=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let M=0,E=0,C=0,S=0,y=0,R=0,L=0,O=0,j=0,z=0,F=0;p.sort(i2);for(let I=0,K=p.length;I<K;I++){const G=p[I],$=G.color,ue=G.intensity,pe=G.distance;let V=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===qs?V=G.shadow.map.texture:V=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=$.r*ue,x+=$.g*ue,g+=$.b*ue;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],ue);F++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,re=i.get(G);re.shadowIntensity=B.intensity,re.shadowBias=B.bias,re.shadowNormalBias=B.normalBias,re.shadowRadius=B.radius,re.shadowMapSize=B.mapSize,s.directionalShadow[M]=re,s.directionalShadowMap[M]=V,s.directionalShadowMatrix[M]=G.shadow.matrix,R++}s.directional[M]=N,M++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy($).multiplyScalar(ue),N.distance=pe,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[C]=N;const B=G.shadow;if(G.map&&(s.spotLightMap[j]=G.map,j++,B.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[C]=B.matrix,G.castShadow){const re=i.get(G);re.shadowIntensity=B.intensity,re.shadowBias=B.bias,re.shadowNormalBias=B.normalBias,re.shadowRadius=B.radius,re.shadowMapSize=B.mapSize,s.spotShadow[C]=re,s.spotShadowMap[C]=V,O++}C++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy($).multiplyScalar(ue),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=N,S++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const B=G.shadow,re=i.get(G);re.shadowIntensity=B.intensity,re.shadowBias=B.bias,re.shadowNormalBias=B.normalBias,re.shadowRadius=B.radius,re.shadowMapSize=B.mapSize,re.shadowCameraNear=B.camera.near,re.shadowCameraFar=B.camera.far,s.pointShadow[E]=re,s.pointShadowMap[E]=V,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=N,E++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(ue),N.groundColor.copy(G.groundColor).multiplyScalar(ue),s.hemi[y]=N,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==R||T.numPointShadows!==L||T.numSpotShadows!==O||T.numSpotMaps!==j||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=S,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=O+j-z,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,T.directionalLength=M,T.pointLength=E,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=R,T.numPointShadows=L,T.numSpotShadows=O,T.numSpotMaps=j,T.numLightProbes=F,s.version=n2++)}function m(p,v){let x=0,g=0,M=0,E=0,C=0;const S=v.matrixWorldInverse;for(let y=0,R=p.length;y<R;y++){const L=p[y];if(L.isDirectionalLight){const O=s.directional[x];O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),x++}else if(L.isSpotLight){const O=s.spot[M];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const O=s.rectArea[E];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const O=s.point[g];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(S),g++}else if(L.isHemisphereLight){const O=s.hemi[C];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:s}}function x_(r){const e=new a2(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:p,setupLightsView:v,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function s2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new x_(r),e.set(l,[h])):c>=f.length?(h=new x_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const r2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
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
}`,l2=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],c2=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],S_=new sn,il=new Y,fh=new Y;function u2(r,e,i){let s=new Mp;const l=new ot,c=new ot,f=new Yt,h=new pb,m=new mb,p={},v=i.maxTextureSize,x={[ms]:ti,[ti]:ms,[Aa]:Aa},g=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:r2,fragmentShader:o2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let y=this.type;this.render=function(z,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===Hy&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nu);const I=r.getRenderTarget(),K=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ea),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ue=y!==this.type;ue&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(V=>V.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,V=z.length;pe<V;pe++){const N=z[pe],B=N.shadow;if(B===void 0){et("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const re=B.getFrameExtents();l.multiply(re),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/re.x),l.x=c.x*re.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/re.y),l.y=c.y*re.y,B.mapSize.y=c.y));const me=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||ue===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===sl){if(N.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ni(l.x,l.y,{format:qs,type:vi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Kr(l.x,l.y,Ji),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=Da,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln}else N.isPointLight?(B.map=new dx(l.x),B.map.depthTexture=new lb(l.x,na)):(B.map=new ni(l.x,l.y),B.map.depthTexture=new Kr(l.x,l.y,na)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=Da,this.type===nu?(B.map.depthTexture.compareFunction=me?xp:_p,B.map.depthTexture.minFilter=Gn,B.map.depthTexture.magFilter=Gn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln);B.camera.updateProjectionMatrix()}const Se=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<Se;P++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,P),r.clear();else{P===0&&(r.setRenderTarget(B.map),r.clear());const Q=B.getViewport(P);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),$.viewport(f)}if(N.isPointLight){const Q=B.camera,xe=B.matrix,Te=N.distance||Q.far;Te!==Q.far&&(Q.far=Te,Q.updateProjectionMatrix()),il.setFromMatrixPosition(N.matrixWorld),Q.position.copy(il),fh.copy(Q.position),fh.add(l2[P]),Q.up.copy(c2[P]),Q.lookAt(fh),Q.updateMatrixWorld(),xe.makeTranslation(-il.x,-il.y,-il.z),S_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(S_,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(N);s=B.getFrustum(),O(F,T,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===sl&&R(B,T),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(I,K,G)};function R(z,F){const T=e.update(C);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ni(l.x,l.y,{format:qs,type:vi})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,C,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(F,null,T,M,C,null)}function L(z,F,T,I){let K=null;const G=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)K=G;else if(K=T.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=K.uuid,ue=F.uuid;let pe=p[$];pe===void 0&&(pe={},p[$]=pe);let V=pe[ue];V===void 0&&(V=K.clone(),pe[ue]=V,F.addEventListener("dispose",j)),K=V}if(K.visible=F.visible,K.wireframe=F.wireframe,I===sl?K.side=F.shadowSide!==null?F.shadowSide:F.side:K.side=F.shadowSide!==null?F.shadowSide:x[F.side],K.alphaMap=F.alphaMap,K.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,K.map=F.map,K.clipShadows=F.clipShadows,K.clippingPlanes=F.clippingPlanes,K.clipIntersection=F.clipIntersection,K.displacementMap=F.displacementMap,K.displacementScale=F.displacementScale,K.displacementBias=F.displacementBias,K.wireframeLinewidth=F.wireframeLinewidth,K.linewidth=F.linewidth,T.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const $=r.properties.get(K);$.light=T}return K}function O(z,F,T,I,K){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&K===sl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const ue=e.update(z),pe=z.material;if(Array.isArray(pe)){const V=ue.groups;for(let N=0,B=V.length;N<B;N++){const re=V[N],me=pe[re.materialIndex];if(me&&me.visible){const Se=L(z,me,I,K);z.onBeforeShadow(r,z,F,T,ue,Se,re),r.renderBufferDirect(T,null,ue,Se,z,re),z.onAfterShadow(r,z,F,T,ue,Se,re)}}}else if(pe.visible){const V=L(z,pe,I,K);z.onBeforeShadow(r,z,F,T,ue,V,null),r.renderBufferDirect(T,null,ue,V,z,null),z.onAfterShadow(r,z,F,T,ue,V,null)}}const $=z.children;for(let ue=0,pe=$.length;ue<pe;ue++)O($[ue],F,T,I,K)}function j(z){z.target.removeEventListener("dispose",j);for(const T in p){const I=p[T],K=z.target.uuid;K in I&&(I[K].dispose(),delete I[K])}}}function f2(r,e){function i(){let k=!1;const Ae=new Yt;let he=null;const Fe=new Yt(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!k&&(r.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,Me,We,tt,an){an===!0&&(Ne*=tt,Me*=tt,We*=tt),Ae.set(Ne,Me,We,tt),Fe.equals(Ae)===!1&&(r.clearColor(Ne,Me,We,tt),Fe.copy(Ae))},reset:function(){k=!1,he=null,Fe.set(-1,0,0,0)}}}function s(){let k=!1,Ae=!1,he=null,Fe=null,Ne=null;return{setReversed:function(Me){if(Ae!==Me){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=Me;const tt=Ne;Ne=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(Me){Me?Ee(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Me){he!==Me&&!k&&(r.depthMask(Me),he=Me)},setFunc:function(Me){if(Ae&&(Me=xM[Me]),Fe!==Me){switch(Me){case _h:r.depthFunc(r.NEVER);break;case xh:r.depthFunc(r.ALWAYS);break;case Sh:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Mh:r.depthFunc(r.GEQUAL);break;case bh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ne!==Me&&(Ne=Me,Ae&&(Me=1-Me),r.clearDepth(Me))},reset:function(){k=!1,he=null,Fe=null,Ne=null,Ae=!1}}}function l(){let k=!1,Ae=null,he=null,Fe=null,Ne=null,Me=null,We=null,tt=null,an=null;return{setTest:function(Dt){k||(Dt?Ee(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Dt){Ae!==Dt&&!k&&(r.stencilMask(Dt),Ae=Dt)},setFunc:function(Dt,_i,ii){(he!==Dt||Fe!==_i||Ne!==ii)&&(r.stencilFunc(Dt,_i,ii),he=Dt,Fe=_i,Ne=ii)},setOp:function(Dt,_i,ii){(Me!==Dt||We!==_i||tt!==ii)&&(r.stencilOp(Dt,_i,ii),Me=Dt,We=_i,tt=ii)},setLocked:function(Dt){k=Dt},setClear:function(Dt){an!==Dt&&(r.clearStencil(Dt),an=Dt)},reset:function(){k=!1,Ae=null,he=null,Fe=null,Ne=null,Me=null,We=null,tt=null,an=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},x={},g={},M=new WeakMap,E=[],C=null,S=!1,y=null,R=null,L=null,O=null,j=null,z=null,F=null,T=new Tt(0,0,0),I=0,K=!1,G=null,$=null,ue=null,pe=null,V=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,re=0;const me=r.getParameter(r.VERSION);me.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(me)[1]),B=re>=1):me.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),B=re>=2);let Se=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Te=new Yt().fromArray(Q),De=new Yt().fromArray(xe);function oe(k,Ae,he,Fe){const Ne=new Uint8Array(4),Me=r.createTexture();r.bindTexture(k,Me),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<he;We++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Ae+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return Me}const ye={};ye[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(Yr),ln(!1),Zt(_v),Ee(r.CULL_FACE),Lt(ea);function Ee(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function He(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function $e(k,Ae){return g[k]!==Ae?(r.bindFramebuffer(k,Ae),g[k]=Ae,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(k,Ae){let he=E,Fe=!1;if(k){he=M.get(Ae),he===void 0&&(he=[],M.set(Ae,he));const Ne=k.textures;if(he.length!==Ne.length||he[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,We=Ne.length;Me<We;Me++)he[Me]=r.COLOR_ATTACHMENT0+Me;he.length=Ne.length,Fe=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(he)}function jt(k){return C!==k?(r.useProgram(k),C=k,!0):!1}const pt={[Gs]:r.FUNC_ADD,[Vy]:r.FUNC_SUBTRACT,[ky]:r.FUNC_REVERSE_SUBTRACT};pt[Xy]=r.MIN,pt[jy]=r.MAX;const St={[Wy]:r.ZERO,[qy]:r.ONE,[Yy]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[eM]:r.SRC_ALPHA_SATURATE,[Jy]:r.DST_COLOR,[Ky]:r.DST_ALPHA,[Zy]:r.ONE_MINUS_SRC_COLOR,[vh]:r.ONE_MINUS_SRC_ALPHA,[$y]:r.ONE_MINUS_DST_COLOR,[Qy]:r.ONE_MINUS_DST_ALPHA,[tM]:r.CONSTANT_COLOR,[nM]:r.ONE_MINUS_CONSTANT_COLOR,[iM]:r.CONSTANT_ALPHA,[aM]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(k,Ae,he,Fe,Ne,Me,We,tt,an,Dt){if(k===ea){S===!0&&(He(r.BLEND),S=!1);return}if(S===!1&&(Ee(r.BLEND),S=!0),k!==Gy){if(k!==y||Dt!==K){if((R!==Gs||j!==Gs)&&(r.blendEquation(r.FUNC_ADD),R=Gs,j=Gs),Dt)switch(k){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mh:r.blendFunc(r.ONE,r.ONE);break;case xv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",k);break}else switch(k){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xv:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sv:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",k);break}L=null,O=null,z=null,F=null,T.set(0,0,0),I=0,y=k,K=Dt}return}Ne=Ne||Ae,Me=Me||he,We=We||Fe,(Ae!==R||Ne!==j)&&(r.blendEquationSeparate(pt[Ae],pt[Ne]),R=Ae,j=Ne),(he!==L||Fe!==O||Me!==z||We!==F)&&(r.blendFuncSeparate(St[he],St[Fe],St[Me],St[We]),L=he,O=Fe,z=Me,F=We),(tt.equals(T)===!1||an!==I)&&(r.blendColor(tt.r,tt.g,tt.b,an),T.copy(tt),I=an),y=k,K=!1}function ft(k,Ae){k.side===Aa?He(r.CULL_FACE):Ee(r.CULL_FACE);let he=k.side===ti;Ae&&(he=!he),ln(he),k.blending===Wr&&k.transparent===!1?Lt(ea):Lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Fe=k.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),W(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function Zt(k){k!==By?(Ee(r.CULL_FACE),k!==$&&(k===_v?r.cullFace(r.BACK):k===Fy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),$=k}function En(k){k!==ue&&(B&&r.lineWidth(k),ue=k)}function W(k,Ae,he){k?(Ee(r.POLYGON_OFFSET_FILL),(pe!==Ae||V!==he)&&(pe=Ae,V=he,f.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,he))):He(r.POLYGON_OFFSET_FILL)}function nn(k){k?Ee(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function mt(k){k===void 0&&(k=r.TEXTURE0+N-1),Se!==k&&(r.activeTexture(k),Se=k)}function Gt(k,Ae,he){he===void 0&&(Se===null?he=r.TEXTURE0+N-1:he=Se);let Fe=P[he];Fe===void 0&&(Fe={type:void 0,texture:void 0},P[he]=Fe),(Fe.type!==k||Fe.texture!==Ae)&&(Se!==he&&(r.activeTexture(he),Se=he),r.bindTexture(k,Ae||ye[k]),Fe.type=k,Fe.texture=Ae)}function we(){const k=P[Se];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Jt(){try{r.compressedTexImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function J(){try{r.texSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ve(){try{r.compressedTexSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Ce(){try{r.texStorage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Le(){try{r.texStorage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ce(){try{r.texImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function fe(){try{r.texImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Oe(k){return x[k]!==void 0?x[k]:r.getParameter(k)}function Pe(k,Ae){x[k]!==Ae&&(r.pixelStorei(k,Ae),x[k]=Ae)}function Ue(k){Te.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Te.copy(k))}function Re(k){De.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function it(k,Ae){let he=p.get(Ae);he===void 0&&(he=new WeakMap,p.set(Ae,he));let Fe=he.get(k);Fe===void 0&&(Fe=r.getUniformBlockIndex(Ae,k.name),he.set(k,Fe))}function at(k,Ae){const Fe=p.get(Ae).get(k);m.get(Ae)!==Fe&&(r.uniformBlockBinding(Ae,Fe,k.__bindingPointIndex),m.set(Ae,Fe))}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},x={},Se=null,P={},g={},M=new WeakMap,E=[],C=null,S=!1,y=null,R=null,L=null,O=null,j=null,z=null,F=null,T=new Tt(0,0,0),I=0,K=!1,G=null,$=null,ue=null,pe=null,V=null,Te.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ee,disable:He,bindFramebuffer:$e,drawBuffers:Qe,useProgram:jt,setBlending:Lt,setMaterial:ft,setFlipSided:ln,setCullFace:Zt,setLineWidth:En,setPolygonOffset:W,setScissorTest:nn,activeTexture:mt,bindTexture:Gt,unbindTexture:we,compressedTexImage2D:Jt,compressedTexImage3D:D,texImage2D:ce,texImage3D:fe,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:ve,compressedTexSubImage3D:be,scissor:Ue,viewport:Re,reset:gt}}function d2(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):hu("canvas")}function S(D,b,J){let ve=1;const be=Jt(D);if((be.width>J||be.height>J)&&(ve=J/Math.max(be.width,be.height)),ve<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ce=Math.floor(ve*be.width),Le=Math.floor(ve*be.height);g===void 0&&(g=C(Ce,Le));const ce=b?C(Ce,Le):g;return ce.width=Ce,ce.height=Le,ce.getContext("2d").drawImage(D,0,0,Ce,Le),et("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Ce+"x"+Le+")."),ce}else return"data"in D&&et("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function y(D){return D.generateMipmaps}function R(D){r.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(D,b,J,ve,be,Ce=!1){if(D!==null){if(r[D]!==void 0)return r[D];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Le;ve&&(Le=e.get("EXT_texture_norm16"),Le||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=b;if(b===r.RED&&(J===r.FLOAT&&(ce=r.R32F),J===r.HALF_FLOAT&&(ce=r.R16F),J===r.UNSIGNED_BYTE&&(ce=r.R8),J===r.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),J===r.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),b===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.R8UI),J===r.UNSIGNED_SHORT&&(ce=r.R16UI),J===r.UNSIGNED_INT&&(ce=r.R32UI),J===r.BYTE&&(ce=r.R8I),J===r.SHORT&&(ce=r.R16I),J===r.INT&&(ce=r.R32I)),b===r.RG&&(J===r.FLOAT&&(ce=r.RG32F),J===r.HALF_FLOAT&&(ce=r.RG16F),J===r.UNSIGNED_BYTE&&(ce=r.RG8),J===r.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),J===r.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RG8UI),J===r.UNSIGNED_SHORT&&(ce=r.RG16UI),J===r.UNSIGNED_INT&&(ce=r.RG32UI),J===r.BYTE&&(ce=r.RG8I),J===r.SHORT&&(ce=r.RG16I),J===r.INT&&(ce=r.RG32I)),b===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),J===r.UNSIGNED_INT&&(ce=r.RGB32UI),J===r.BYTE&&(ce=r.RGB8I),J===r.SHORT&&(ce=r.RGB16I),J===r.INT&&(ce=r.RGB32I)),b===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),J===r.UNSIGNED_INT&&(ce=r.RGBA32UI),J===r.BYTE&&(ce=r.RGBA8I),J===r.SHORT&&(ce=r.RGBA16I),J===r.INT&&(ce=r.RGBA32I)),b===r.RGB&&(J===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),J===r.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),b===r.RGBA){const fe=Ce?du:Et.getTransfer(be);J===r.FLOAT&&(ce=r.RGBA32F),J===r.HALF_FLOAT&&(ce=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ce=fe===Ft?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),J===r.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function j(D,b){let J;return D?b===null||b===na||b===ul?J=r.DEPTH24_STENCIL8:b===Ji?J=r.DEPTH32F_STENCIL8:b===cl&&(J=r.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===na||b===ul?J=r.DEPTH_COMPONENT24:b===Ji?J=r.DEPTH_COMPONENT32F:b===cl&&(J=r.DEPTH_COMPONENT16),J}function z(D,b){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function F(D){const b=D.target;b.removeEventListener("dispose",F),I(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&x.delete(b)}function T(D){const b=D.target;b.removeEventListener("dispose",T),G(b)}function I(D){const b=s.get(D);if(b.__webglInit===void 0)return;const J=D.source,ve=M.get(J);if(ve){const be=ve[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&K(D),Object.keys(ve).length===0&&M.delete(J)}s.remove(D)}function K(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const J=D.source,ve=M.get(J);delete ve[b.__cacheKey],f.memory.textures--}function G(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(b.__webglFramebuffer[ve]))for(let be=0;be<b.__webglFramebuffer[ve].length;be++)r.deleteFramebuffer(b.__webglFramebuffer[ve][be]);else r.deleteFramebuffer(b.__webglFramebuffer[ve]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ve])}else{if(Array.isArray(b.__webglFramebuffer))for(let ve=0;ve<b.__webglFramebuffer.length;ve++)r.deleteFramebuffer(b.__webglFramebuffer[ve]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ve=0;ve<b.__webglColorRenderbuffer.length;ve++)b.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ve]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=D.textures;for(let ve=0,be=J.length;ve<be;ve++){const Ce=s.get(J[ve]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),f.memory.textures--),s.remove(J[ve])}s.remove(D)}let $=0;function ue(){$=0}function pe(){return $}function V(D){$=D}function N(){const D=$;return D>=l.maxTextures&&et("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),$+=1,D}function B(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function re(D,b){const J=s.get(D);if(D.isVideoTexture&&Gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const ve=D.image;if(ve===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{He(J,D,b);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+b)}function me(D,b){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){He(J,D,b);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+b)}function Se(D,b){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){He(J,D,b);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+b)}function P(D,b){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){$e(J,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+b)}const Q={[Th]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[Ah]:r.MIRRORED_REPEAT},xe={[Ln]:r.NEAREST,[oM]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[Pd]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},Te={[uM]:r.NEVER,[mM]:r.ALWAYS,[fM]:r.LESS,[_p]:r.LEQUAL,[dM]:r.EQUAL,[xp]:r.GEQUAL,[hM]:r.GREATER,[pM]:r.NOTEQUAL};function De(D,b){if(b.type===Ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===Pd||b.magFilter===wc||b.magFilter===ks||b.minFilter===Gn||b.minFilter===Pd||b.minFilter===wc||b.minFilter===ks)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Q[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,xe[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==wc&&b.minFilter!==ks||b.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function oe(D,b){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",F));const ve=b.source;let be=M.get(ve);be===void 0&&(be={},M.set(ve,be));const Ce=B(b);if(Ce!==D.__cacheKey){be[Ce]===void 0&&(be[Ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,J=!0),be[Ce].usedTimes++;const Le=be[D.__cacheKey];Le!==void 0&&(be[D.__cacheKey].usedTimes--,Le.usedTimes===0&&K(b)),D.__cacheKey=Ce,D.__webglTexture=be[Ce].texture}return J}function ye(D,b,J){return Math.floor(Math.floor(D/J)/b)}function Ee(D,b,J,ve){const Ce=D.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,J,ve,b.data);else{Ce.sort((Pe,Ue)=>Pe.start-Ue.start);let Le=0;for(let Pe=1;Pe<Ce.length;Pe++){const Ue=Ce[Le],Re=Ce[Pe],it=Ue.start+Ue.count,at=ye(Re.start,b.width,4),gt=ye(Ue.start,b.width,4);Re.start<=it+1&&at===gt&&ye(Re.start+Re.count-1,b.width,4)===at?Ue.count=Math.max(Ue.count,Re.start+Re.count-Ue.start):(++Le,Ce[Le]=Re)}Ce.length=Le+1;const ce=i.getParameter(r.UNPACK_ROW_LENGTH),fe=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,Ue=Ce.length;Pe<Ue;Pe++){const Re=Ce[Pe],it=Math.floor(Re.start/4),at=Math.ceil(Re.count/4),gt=it%b.width,k=Math.floor(it/b.width),Ae=at,he=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,gt,k,Ae,he,J,ve,b.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ce),i.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function He(D,b,J){let ve=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=r.TEXTURE_3D);const be=oe(D,b),Ce=b.source;i.bindTexture(ve,D.__webglTexture,r.TEXTURE0+J);const Le=s.get(Ce);if(Ce.version!==Le.__version||be===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const he=Et.getPrimaries(Et.workingColorSpace),Fe=b.colorSpace===ds?null:Et.getPrimaries(b.colorSpace),Ne=b.colorSpace===ds||he===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let fe=S(b.image,!1,l.maxTextureSize);fe=we(b,fe);const Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type);let Ue=O(b.internalFormat,Oe,Pe,b.normalized,b.colorSpace,b.isVideoTexture);De(ve,b);let Re;const it=b.mipmaps,at=b.isVideoTexture!==!0,gt=Le.__version===void 0||be===!0,k=Ce.dataReady,Ae=z(b,fe);if(b.isDepthTexture)Ue=j(b.format===Xs,b.type),gt&&(at?i.texStorage2D(r.TEXTURE_2D,1,Ue,fe.width,fe.height):i.texImage2D(r.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Oe,Pe,null));else if(b.isDataTexture)if(it.length>0){at&&gt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ue,it[0].width,it[0].height);for(let he=0,Fe=it.length;he<Fe;he++)Re=it[he],at?k&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Re.width,Re.height,Oe,Pe,Re.data):i.texImage2D(r.TEXTURE_2D,he,Ue,Re.width,Re.height,0,Oe,Pe,Re.data);b.generateMipmaps=!1}else at?(gt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ue,fe.width,fe.height),k&&Ee(b,fe,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Oe,Pe,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&gt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ue,it[0].width,it[0].height,fe.depth);for(let he=0,Fe=it.length;he<Fe;he++)if(Re=it[he],b.format!==Gi)if(Oe!==null)if(at){if(k)if(b.layerUpdates.size>0){const Ne=Qv(Re.width,Re.height,b.format,b.type);for(const Me of b.layerUpdates){const We=Re.data.subarray(Me*Ne/Re.data.BYTES_PER_ELEMENT,(Me+1)*Ne/Re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,Me,Re.width,Re.height,1,Oe,We)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,fe.depth,Oe,Re.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,Ue,Re.width,Re.height,fe.depth,0,Re.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,fe.depth,Oe,Pe,Re.data):i.texImage3D(r.TEXTURE_2D_ARRAY,he,Ue,Re.width,Re.height,fe.depth,0,Oe,Pe,Re.data)}else{at&&gt&&i.texStorage2D(r.TEXTURE_2D,Ae,Ue,it[0].width,it[0].height);for(let he=0,Fe=it.length;he<Fe;he++)Re=it[he],b.format!==Gi?Oe!==null?at?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Re.width,Re.height,Oe,Re.data):i.compressedTexImage2D(r.TEXTURE_2D,he,Ue,Re.width,Re.height,0,Re.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Re.width,Re.height,Oe,Pe,Re.data):i.texImage2D(r.TEXTURE_2D,he,Ue,Re.width,Re.height,0,Oe,Pe,Re.data)}else if(b.isDataArrayTexture)if(at){if(gt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Ue,fe.width,fe.height,fe.depth),k)if(b.layerUpdates.size>0){const he=Qv(fe.width,fe.height,b.format,b.type);for(const Fe of b.layerUpdates){const Ne=fe.data.subarray(Fe*he/fe.data.BYTES_PER_ELEMENT,(Fe+1)*he/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,fe.width,fe.height,1,Oe,Pe,Ne)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(b.isData3DTexture)at?(gt&&i.texStorage3D(r.TEXTURE_3D,Ae,Ue,fe.width,fe.height,fe.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(b.isFramebufferTexture){if(gt)if(at)i.texStorage2D(r.TEXTURE_2D,Ae,Ue,fe.width,fe.height);else{let he=fe.width,Fe=fe.height;for(let Ne=0;Ne<Ae;Ne++)i.texImage2D(r.TEXTURE_2D,Ne,Ue,he,Fe,0,Oe,Pe,null),he>>=1,Fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const he=r.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),fe.parentNode!==he){he.appendChild(fe),x.add(b),he.onpaint=tt=>{const an=tt.changedElements;for(const Dt of x)an.includes(Dt.image)&&(Dt.needsUpdate=!0)},he.requestPaint();return}const Fe=0,Ne=r.RGBA,Me=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Fe,Ne,Me,We,fe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&gt){const he=Jt(it[0]);i.texStorage2D(r.TEXTURE_2D,Ae,Ue,he.width,he.height)}for(let he=0,Fe=it.length;he<Fe;he++)Re=it[he],at?k&&i.texSubImage2D(r.TEXTURE_2D,he,0,0,Oe,Pe,Re):i.texImage2D(r.TEXTURE_2D,he,Ue,Oe,Pe,Re);b.generateMipmaps=!1}else if(at){if(gt){const he=Jt(fe);i.texStorage2D(r.TEXTURE_2D,Ae,Ue,he.width,he.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,fe)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Oe,Pe,fe);y(b)&&R(ve),Le.__version=Ce.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function $e(D,b,J){if(b.image.length!==6)return;const ve=oe(D,b),be=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);const Ce=s.get(be);if(be.version!==Ce.__version||ve===!0){i.activeTexture(r.TEXTURE0+J);const Le=Et.getPrimaries(Et.workingColorSpace),ce=b.colorSpace===ds?null:Et.getPrimaries(b.colorSpace),fe=b.colorSpace===ds||Le===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ue[Me]=S(b.image[Me],!0,l.maxCubemapSize):Ue[Me]=Pe?b.image[Me].image:b.image[Me],Ue[Me]=we(b,Ue[Me]);const Re=Ue[0],it=c.convert(b.format,b.colorSpace),at=c.convert(b.type),gt=O(b.internalFormat,it,at,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Ae=Ce.__version===void 0||ve===!0,he=be.dataReady;let Fe=z(b,Re);De(r.TEXTURE_CUBE_MAP,b);let Ne;if(Oe){k&&Ae&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,gt,Re.width,Re.height);for(let Me=0;Me<6;Me++){Ne=Ue[Me].mipmaps;for(let We=0;We<Ne.length;We++){const tt=Ne[We];b.format!==Gi?it!==null?k?he&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,gt,tt.width,tt.height,0,tt.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,gt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Ne=b.mipmaps,k&&Ae){Ne.length>0&&Fe++;const Me=Jt(Ue[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,gt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,it,at,Ue[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,Ue[Me].width,Ue[Me].height,0,it,at,Ue[Me].data);for(let We=0;We<Ne.length;We++){const an=Ne[We].image[Me].image;k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,an.width,an.height,it,at,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,gt,an.width,an.height,0,it,at,an.data)}}else{k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,it,at,Ue[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,it,at,Ue[Me]);for(let We=0;We<Ne.length;We++){const tt=Ne[We];k?he&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,it,at,tt.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,gt,it,at,tt.image[Me])}}}y(b)&&R(r.TEXTURE_CUBE_MAP),Ce.__version=be.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Qe(D,b,J,ve,be,Ce){const Le=c.convert(J.format,J.colorSpace),ce=c.convert(J.type),fe=O(J.internalFormat,Le,ce,J.normalized,J.colorSpace),Oe=s.get(b),Pe=s.get(J);if(Pe.__renderTarget=b,!Oe.__hasExternalTextures){const Ue=Math.max(1,b.width>>Ce),Re=Math.max(1,b.height>>Ce);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,Ce,fe,Ue,Re,b.depth,0,Le,ce,null):i.texImage2D(be,Ce,fe,Ue,Re,0,Le,ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),mt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,be,Pe.__webglTexture,0,nn(b)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,be,Pe.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(D,b,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const ve=b.depthTexture,be=ve&&ve.isDepthTexture?ve.type:null,Ce=j(b.stencilBuffer,be),Le=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(b),Ce,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(b),Ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,D)}else{const ve=b.textures;for(let be=0;be<ve.length;be++){const Ce=ve[be],Le=c.convert(Ce.format,Ce.colorSpace),ce=c.convert(Ce.type),fe=O(Ce.internalFormat,Le,ce,Ce.normalized,Ce.colorSpace);mt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(b),fe,b.width,b.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(b),fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(D,b,J){const ve=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=s.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ve){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),De(r.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=c.convert(b.depthTexture.format),Pe=c.convert(b.depthTexture.type);let Ue;b.depthTexture.format===Da?Ue=r.DEPTH_COMPONENT24:b.depthTexture.format===Xs&&(Ue=r.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ue,b.width,b.height,0,Oe,Pe,null)}}else re(b.depthTexture,0);const Ce=be.__webglTexture,Le=nn(b),ce=ve?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,fe=b.depthTexture.format===Xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)mt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,Ce,0);else if(b.depthTexture.format===Xs)mt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,Ce,0);else throw new Error("Unknown depthTexture format")}function St(D){const b=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const ve=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ve){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ve.removeEventListener("dispose",be)};ve.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=ve}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let ve=0;ve<6;ve++)pt(b.__webglFramebuffer[ve],D,ve);else{const ve=D.texture.mipmaps;ve&&ve.length>0?pt(b.__webglFramebuffer[0],D,0):pt(b.__webglFramebuffer,D,0)}else if(J){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]===void 0)b.__webglDepthbuffer[ve]=r.createRenderbuffer(),jt(b.__webglDepthbuffer[ve],D,!1);else{const be=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,Ce)}}else{const ve=D.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),jt(b.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(D,b,J){const ve=s.get(D);b!==void 0&&Qe(ve.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&St(D)}function ft(D){const b=D.texture,J=s.get(D),ve=s.get(b);D.addEventListener("dispose",T);const be=D.textures,Ce=D.isWebGLCubeRenderTarget===!0,Le=be.length>1;if(Le||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=b.version,f.memory.textures++),Ce){J.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ce]=[];for(let fe=0;fe<b.mipmaps.length;fe++)J.__webglFramebuffer[ce][fe]=r.createFramebuffer()}else J.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)J.__webglFramebuffer[ce]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ce=0,fe=be.length;ce<fe;ce++){const Oe=s.get(be[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(D.samples>0&&mt(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ce=0;ce<be.length;ce++){const fe=be[ce];J.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);const Oe=c.convert(fe.format,fe.colorSpace),Pe=c.convert(fe.type),Ue=O(fe.internalFormat,Oe,Pe,fe.normalized,fe.colorSpace,D.isXRRenderTarget===!0),Re=nn(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Ue,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,J.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),jt(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),De(r.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Qe(J.__webglFramebuffer[ce][fe],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Qe(J.__webglFramebuffer[ce],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(b)&&R(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ce=0,fe=be.length;ce<fe;ce++){const Oe=be[ce],Pe=s.get(Oe);let Ue=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Pe.__webglTexture),De(Ue,Oe),Qe(J.__webglFramebuffer,D,Oe,r.COLOR_ATTACHMENT0+ce,Ue,0),y(Oe)&&R(Ue)}i.unbindTexture()}else{let ce=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ce,ve.__webglTexture),De(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Qe(J.__webglFramebuffer[fe],D,b,r.COLOR_ATTACHMENT0,ce,fe);else Qe(J.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,ce,0);y(b)&&R(ce),i.unbindTexture()}D.depthBuffer&&St(D)}function ln(D){const b=D.textures;for(let J=0,ve=b.length;J<ve;J++){const be=b[J];if(y(be)){const Ce=L(D),Le=s.get(be).__webglTexture;i.bindTexture(Ce,Le),R(Ce),i.unbindTexture()}}}const Zt=[],En=[];function W(D){if(D.samples>0){if(mt(D)===!1){const b=D.textures,J=D.width,ve=D.height;let be=r.COLOR_BUFFER_BIT;const Ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(D),ce=b.length>1;if(ce)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const fe=D.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,J,ve,0,0,J,ve,be,r.NEAREST),m===!0&&(Zt.length=0,En.length=0,Zt.push(r.COLOR_ATTACHMENT0+Oe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Zt.push(Ce),En.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,En)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function nn(D){return Math.min(l.maxSamples,D.samples)}function mt(D){const b=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Gt(D){const b=f.render.frame;v.get(D)!==b&&(v.set(D,b),D.update())}function we(D,b){const J=D.colorSpace,ve=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==fu&&J!==ds&&(Et.getTransfer(J)===Ft?(ve!==Gi||be!==gi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",J)),b}function Jt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=N,this.resetTextureUnits=ue,this.getTextureUnits=pe,this.setTextureUnits=V,this.setTexture2D=re,this.setTexture2DArray=me,this.setTexture3D=Se,this.setTextureCube=P,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function h2(r,e){function i(s,l=ds){let c;const f=Et.getTransfer(l);if(s===gi)return r.UNSIGNED_BYTE;if(s===hp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===W_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===q_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===X_)return r.BYTE;if(s===j_)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===dp)return r.INT;if(s===na)return r.UNSIGNED_INT;if(s===Ji)return r.FLOAT;if(s===vi)return r.HALF_FLOAT;if(s===Y_)return r.ALPHA;if(s===Z_)return r.RGB;if(s===Gi)return r.RGBA;if(s===Da)return r.DEPTH_COMPONENT;if(s===Xs)return r.DEPTH_STENCIL;if(s===K_)return r.RED;if(s===mp)return r.RED_INTEGER;if(s===qs)return r.RG;if(s===gp)return r.RG_INTEGER;if(s===vp)return r.RGBA_INTEGER;if(s===iu||s===au||s===su||s===ru)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wh||s===Ch||s===Rh||s===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Nh||s===Lh||s===Oh||s===Ph||s===cu||s===zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Uh||s===Nh)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Lh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Oh)return c.COMPRESSED_R11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(s===cu)return c.COMPRESSED_RG11_EAC;if(s===zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ih||s===Bh||s===Fh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===jh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ih)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===kh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qh||s===Jh||s===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Qh)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ep||s===tp||s===uu||s===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
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

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new rx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new On({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new _u(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends Zs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,x=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",S=new g2,y={},R=i.getContextAttributes();let L=null,O=null;const j=[],z=[],F=new ot;let T=null;const I=new mi;I.viewport=new Yt;const K=new mi;K.viewport=new Yt;const G=[I,K],$=new yb;let ue=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=j[oe];return ye===void 0&&(ye=new Gd,j[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=j[oe];return ye===void 0&&(ye=new Gd,j[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=j[oe];return ye===void 0&&(ye=new Gd,j[oe]=ye),ye.getHandSpace()};function V(oe){const ye=z.indexOf(oe.inputSource);if(ye===-1)return;const Ee=j[ye];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,p||f),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function N(){l.removeEventListener("select",V),l.removeEventListener("selectstart",V),l.removeEventListener("selectend",V),l.removeEventListener("squeeze",V),l.removeEventListener("squeezestart",V),l.removeEventListener("squeezeend",V),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",B);for(let oe=0;oe<j.length;oe++){const ye=z[oe];ye!==null&&(z[oe]=null,j[oe].disconnect(ye))}ue=null,pe=null,S.reset();for(const oe in y)delete y[oe];e.setRenderTarget(L),M=null,g=null,x=null,l=null,O=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,s.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,s.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",V),l.addEventListener("selectstart",V),l.addEventListener("selectend",V),l.addEventListener("squeeze",V),l.addEventListener("squeezestart",V),l.addEventListener("squeezeend",V),l.addEventListener("end",N),l.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,$e=null;R.depth&&($e=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=R.stencil?Xs:Da,He=R.stencil?ul:na);const Qe={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),O=new ni(g.textureWidth,g.textureHeight,{format:Gi,type:gi,depthTexture:new Kr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new ni(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(oe){for(let ye=0;ye<oe.removed.length;ye++){const Ee=oe.removed[ye],He=z.indexOf(Ee);He>=0&&(z[He]=null,j[He].disconnect(Ee))}for(let ye=0;ye<oe.added.length;ye++){const Ee=oe.added[ye];let He=z.indexOf(Ee);if(He===-1){for(let Qe=0;Qe<j.length;Qe++)if(Qe>=z.length){z.push(Ee),He=Qe;break}else if(z[Qe]===null){z[Qe]=Ee,He=Qe;break}if(He===-1)break}const $e=j[He];$e&&$e.connect(Ee)}}const re=new Y,me=new Y;function Se(oe,ye,Ee){re.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const He=re.distanceTo(me),$e=ye.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,jt=$e[14]/($e[10]-1),pt=$e[14]/($e[10]+1),St=($e[9]+1)/$e[5],Lt=($e[9]-1)/$e[5],ft=($e[8]-1)/$e[0],ln=(Qe[8]+1)/Qe[0],Zt=jt*ft,En=jt*ln,W=He/(-ft+ln),nn=W*-ft;if(ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(nn),oe.translateZ(W),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),$e[10]===-1)oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const mt=jt+W,Gt=pt+W,we=Zt-nn,Jt=En+(He-nn),D=St*pt/Gt*mt,b=Lt*pt/Gt*mt;oe.projectionMatrix.makePerspective(we,Jt,D,b,mt,Gt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function P(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let ye=oe.near,Ee=oe.far;S.texture!==null&&(S.depthNear>0&&(ye=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),$.near=K.near=I.near=ye,$.far=K.far=I.far=Ee,(ue!==$.near||pe!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ue=$.near,pe=$.far),$.layers.mask=oe.layers.mask|6,I.layers.mask=$.layers.mask&-5,K.layers.mask=$.layers.mask&-3;const He=oe.parent,$e=$.cameras;P($,He);for(let Qe=0;Qe<$e.length;Qe++)P($e[Qe],He);$e.length===2?Se($,I,K):$.projectionMatrix.copy(I.projectionMatrix),Q(oe,$,He)};function Q(oe,ye,Ee){Ee===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=dl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(oe){return y[oe]};let xe=null;function Te(oe,ye){if(v=ye.getViewerPose(p||f),E=ye,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let He=!1;Ee.length!==$.cameras.length&&($.cameras.length=0,He=!0);for(let pt=0;pt<Ee.length;pt++){const St=Ee[pt];let Lt=null;if(M!==null)Lt=M.getViewport(St);else{const ln=x.getViewSubImage(g,St);Lt=ln.viewport,pt===0&&(e.setRenderTargetTextures(O,ln.colorTexture,ln.depthStencilTexture),e.setRenderTarget(O))}let ft=G[pt];ft===void 0&&(ft=new mi,ft.layers.enable(pt),ft.viewport=new Yt,G[pt]=ft),ft.matrix.fromArray(St.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(St.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&($.matrix.copy(ft.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),He===!0&&$.cameras.push(ft)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const pt=x.getDepthInformation(Ee[0]);pt&&pt.isValid&&pt.texture&&S.init(pt,l.renderState)}if($e&&$e.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let pt=0;pt<Ee.length;pt++){const St=Ee[pt].camera;if(St){let Lt=y[St];Lt||(Lt=new rx,y[St]=Lt);const ft=x.getCameraImage(St);Lt.sourceTexture=ft}}}}for(let Ee=0;Ee<j.length;Ee++){const He=z[Ee],$e=j[Ee];He!==null&&$e!==void 0&&$e.update(He,ye,p||f)}xe&&xe(oe,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),E=null}const De=new ux;De.setAnimationLoop(Te),this.setAnimationLoop=function(oe){xe=oe},this.dispose=function(){}}}const _2=new sn,vx=new rt;vx.set(-1,0,0,0,1,0,0,0,1);function x2(r,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function s(S,y){y.color.getRGB(S.fogColor.value,ox(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,R,L,O){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(S,y):y.isMeshLambertMaterial?(c(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(S,y),x(S,y)):y.isMeshPhongMaterial?(c(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(S,y),g(S,y),y.isMeshPhysicalMaterial&&M(S,y,O)):y.isMeshMatcapMaterial?(c(S,y),E(S,y)):y.isMeshDepthMaterial?c(S,y):y.isMeshDistanceMaterial?(c(S,y),C(S,y)):y.isMeshNormalMaterial?c(S,y):y.isLineBasicMaterial?(f(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,R,L):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ti&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ti&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const R=e.get(y),L=R.envMap,O=R.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler(O)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(vx),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,R,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*R,S.scale.value=L*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function x(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,R){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ti&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const R=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function S2(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const O=L.program;s.uniformBlockBinding(R,O)}function p(R,L){let O=l[R.id];O===void 0&&(E(R),O=v(R),l[R.id]=O,R.addEventListener("dispose",S));const j=L.program;s.updateUBOMapping(R,j);const z=e.render.frame;c[R.id]!==z&&(g(R),c[R.id]=z)}function v(R){const L=x();R.__bindingPointIndex=L;const O=r.createBuffer(),j=R.__size,z=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,j,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,O),O}function x(){for(let R=0;R<h;R++)if(f.indexOf(R)===-1)return f.push(R),R;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=l[R.id],O=R.uniforms,j=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,F=O.length;z<F;z++){const T=Array.isArray(O[z])?O[z]:[O[z]];for(let I=0,K=T.length;I<K;I++){const G=T[I];if(M(G,z,I,j)===!0){const $=G.__offset,ue=Array.isArray(G.value)?G.value:[G.value];let pe=0;for(let V=0;V<ue.length;V++){const N=ue[V],B=C(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,$+pe,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):ArrayBuffer.isView(N)?G.__data.set(new N.constructor(N.buffer,N.byteOffset,G.__data.length)):(N.toArray(G.__data,pe),pe+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(R,L,O,j){const z=R.value,F=L+"_"+O;if(j[F]===void 0)return typeof z=="number"||typeof z=="boolean"?j[F]=z:ArrayBuffer.isView(z)?j[F]=z.slice():j[F]=z.clone(),!0;{const T=j[F];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return j[F]=z,!0}else{if(ArrayBuffer.isView(z))return!0;if(T.equals(z)===!1)return T.copy(z),!0}}return!1}function E(R){const L=R.uniforms;let O=0;const j=16;for(let F=0,T=L.length;F<T;F++){const I=Array.isArray(L[F])?L[F]:[L[F]];for(let K=0,G=I.length;K<G;K++){const $=I[K],ue=Array.isArray($.value)?$.value:[$.value];for(let pe=0,V=ue.length;pe<V;pe++){const N=ue[pe],B=C(N),re=O%j,me=re%B.boundary,Se=re+me;O+=me,Se!==0&&j-Se<B.storage&&(O+=j-Se),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=O,O+=B.storage}}}const z=O%j;return z>0&&(O+=j-z),R.__size=O,R.__cache={},this}function C(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):et("WebGLRenderer: Unsupported uniform value type.",R),L}function S(R){const L=R.target;L.removeEventListener("dispose",S);const O=f.indexOf(L.__bindingPointIndex);f.splice(O,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}const y2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function M2(){return Yi===null&&(Yi=new ib(y2,16,16,qs,vi),Yi.name="DFG_LUT",Yi.minFilter=Gn,Yi.magFilter=Gn,Yi.wrapS=wa,Yi.wrapT=wa,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class b2{constructor(e={}){const{canvas:i=vM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=M,S=new Set([vp,gp,mp]),y=new Set([gi,na,cl,ul,hp,pp]),R=new Uint32Array(4),L=new Int32Array(4),O=new Y;let j=null,z=null;const F=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const K=this;let G=!1,$=null;this._outputColorSpace=Ci;let ue=0,pe=0,V=null,N=-1,B=null;const re=new Yt,me=new Yt;let Se=null;const P=new Tt(0);let Q=0,xe=i.width,Te=i.height,De=1,oe=null,ye=null;const Ee=new Yt(0,0,xe,Te),He=new Yt(0,0,xe,Te);let $e=!1;const Qe=new Mp;let jt=!1,pt=!1;const St=new sn,Lt=new Y,ft=new Yt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function En(){return V===null?De:1}let W=s;function nn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fp}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",tt,!1),W===null){const q="webgl2";if(W=nn(q,A),W===null)throw nn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let mt,Gt,we,Jt,D,b,J,ve,be,Ce,Le,ce,fe,Oe,Pe,Ue,Re,it,at,gt,k,Ae,he;function Fe(){mt=new MT(W),mt.init(),k=new h2(W,mt),Gt=new pT(W,mt,e,k),we=new f2(W,mt),Gt.reversedDepthBuffer&&g&&we.buffers.depth.setReversed(!0),Jt=new TT(W),D=new QA,b=new d2(W,mt,we,D,Gt,k,Jt),J=new yT(K),ve=new Rb(W),Ae=new dT(W,ve),be=new bT(W,ve,Jt,Ae),Ce=new wT(W,be,ve,Ae,Jt),it=new AT(W,Gt,b),Pe=new mT(D),Le=new KA(K,J,mt,Gt,Ae,Pe),ce=new x2(K,D),fe=new $A,Oe=new s2(mt),Re=new fT(K,J,we,Ce,E,m),Ue=new u2(K,Ce,Gt),he=new S2(W,Jt,Gt,we),at=new hT(W,mt,Jt),gt=new ET(W,mt,Jt),Jt.programs=Le.programs,K.capabilities=Gt,K.extensions=mt,K.properties=D,K.renderLists=fe,K.shadowMap=Ue,K.state=we,K.info=Jt}Fe(),C!==gi&&(I=new RT(C,i.width,i.height,l,c));const Ne=new v2(K,W);this.xr=Ne,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(A){A!==void 0&&(De=A,this.setSize(xe,Te,!1))},this.getSize=function(A){return A.set(xe,Te)},this.setSize=function(A,q,ae=!0){if(Ne.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=A,Te=q,i.width=Math.floor(A*De),i.height=Math.floor(q*De),ae===!0&&(i.style.width=A+"px",i.style.height=q+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(xe*De,Te*De).floor()},this.setDrawingBufferSize=function(A,q,ae){xe=A,Te=q,De=ae,i.width=Math.floor(A*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===gi){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){et("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(re)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,q,ae,ne){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,q,ae,ne),we.viewport(re.copy(Ee).multiplyScalar(De).round())},this.getScissor=function(A){return A.copy(He)},this.setScissor=function(A,q,ae,ne){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,q,ae,ne),we.scissor(me.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){we.setScissorTest($e=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ae=!0){let ne=0;if(A){let ie=!1;if(V!==null){const Be=V.texture.format;ie=S.has(Be)}if(ie){const Be=V.texture.type,Ve=y.has(Be),ze=Re.getClearColor(),Xe=Re.getClearAlpha(),ke=ze.r,Ze=ze.g,lt=ze.b;Ve?(R[0]=ke,R[1]=Ze,R[2]=lt,R[3]=Xe,W.clearBufferuiv(W.COLOR,0,R)):(L[0]=ke,L[1]=Ze,L[2]=lt,L[3]=Xe,W.clearBufferiv(W.COLOR,0,L))}else ne|=W.COLOR_BUFFER_BIT}q&&(ne|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&W.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),Re.dispose(),fe.dispose(),Oe.dispose(),D.dispose(),J.dispose(),Ce.dispose(),Ae.dispose(),he.dispose(),Le.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",ao),Ne.removeEventListener("sessionend",so),zn.stop()};function Me(A){A.preventDefault(),pu("WebGLRenderer: Context Lost."),G=!0}function We(){pu("WebGLRenderer: Context Restored."),G=!1;const A=Jt.autoReset,q=Ue.enabled,ae=Ue.autoUpdate,ne=Ue.needsUpdate,ie=Ue.type;Fe(),Jt.autoReset=A,Ue.enabled=q,Ue.autoUpdate=ae,Ue.needsUpdate=ne,Ue.type=ie}function tt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){const q=A.target;q.removeEventListener("dispose",an),Dt(q)}function Dt(A){_i(A),D.remove(A)}function _i(A){const q=D.get(A).programs;q!==void 0&&(q.forEach(function(ae){Le.releaseProgram(ae)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ae,ne,ie,Be){q===null&&(q=ln);const Ve=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=La(A,q,ae,ne,ie);we.setMaterial(ne,Ve);let Xe=ae.index,ke=1;if(ne.wireframe===!0){if(Xe=be.getWireframeAttribute(ae),Xe===void 0)return;ke=2}const Ze=ae.drawRange,lt=ae.attributes.position;let Ye=Ze.start*ke,wt=(Ze.start+Ze.count)*ke;Be!==null&&(Ye=Math.max(Ye,Be.start*ke),wt=Math.min(wt,(Be.start+Be.count)*ke)),Xe!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,Xe.count)):lt!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,lt.count));const $t=wt-Ye;if($t<0||$t===1/0)return;Ae.setup(ie,ne,ze,ae,Xe);let Wt,Ot=at;if(Xe!==null&&(Wt=ve.get(Xe),Ot=gt,Ot.setIndex(Wt)),ie.isMesh)ne.wireframe===!0?(we.setLineWidth(ne.wireframeLinewidth*En()),Ot.setMode(W.LINES)):Ot.setMode(W.TRIANGLES);else if(ie.isLine){let Pt=ne.linewidth;Pt===void 0&&(Pt=1),we.setLineWidth(Pt*En()),ie.isLineSegments?Ot.setMode(W.LINES):ie.isLineLoop?Ot.setMode(W.LINE_LOOP):Ot.setMode(W.LINE_STRIP)}else ie.isPoints?Ot.setMode(W.POINTS):ie.isSprite&&Ot.setMode(W.TRIANGLES);if(ie.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Pt=ie._multiDrawStarts,Ge=ie._multiDrawCounts,In=ie._multiDrawCount,vt=Xe?ve.get(Xe).bytesPerElement:1,_n=D.get(ne).currentProgram.getUniforms();for(let ai=0;ai<In;ai++)_n.setValue(W,"_gl_DrawID",ai),Ot.render(Pt[ai]/vt,Ge[ai])}else if(ie.isInstancedMesh)Ot.renderInstances(Ye,$t,ie.count);else if(ae.isInstancedBufferGeometry){const Pt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ge=Math.min(ae.instanceCount,Pt);Ot.renderInstances(Ye,$t,Ge)}else Ot.render(Ye,$t)};function ii(A,q,ae){A.transparent===!0&&A.side===Aa&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Ks(A,q,ae),A.side=ms,A.needsUpdate=!0,Ks(A,q,ae),A.side=Aa):Ks(A,q,ae)}this.compile=function(A,q,ae=null){ae===null&&(ae=A),z=Oe.get(ae),z.init(q),T.push(z),ae.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(z.pushLight(ie),ie.castShadow&&z.pushShadow(ie))}),A!==ae&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(z.pushLight(ie),ie.castShadow&&z.pushShadow(ie))}),z.setupLights();const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Be=ie.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const ze=Be[Ve];ii(ze,ae,ie),ne.add(ze)}else ii(Be,ae,ie),ne.add(Be)}),z=T.pop(),ne},this.compileAsync=function(A,q,ae=null){const ne=this.compile(A,q,ae);return new Promise(ie=>{function Be(){if(ne.forEach(function(Ve){D.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){ie(A);return}setTimeout(Be,10)}mt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let vs=null;function io(A){vs&&vs(A)}function ao(){zn.stop()}function so(){zn.start()}const zn=new ux;zn.setAnimationLoop(io),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){vs=A,Ne.setAnimationLoop(A),A===null?zn.stop():zn.start()},Ne.addEventListener("sessionstart",ao),Ne.addEventListener("sessionend",so),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;$!==null&&$.renderStart(A,q);const ae=Ne.enabled===!0&&Ne.isPresenting===!0,ne=I!==null&&(V===null||ae)&&I.begin(K,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(q),q=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(K,A,q,V),z=Oe.get(A,T.length),z.init(q),z.state.textureUnits=b.getTextureUnits(),T.push(z),St.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qe.setFromProjectionMatrix(St,$i,q.reversedDepth),pt=this.localClippingEnabled,jt=Pe.init(this.clippingPlanes,pt),j=fe.get(A,F.length),j.init(),F.push(j),Ne.enabled===!0&&Ne.isPresenting===!0){const Ve=K.xr.getDepthSensingMesh();Ve!==null&&cn(Ve,q,-1/0,K.sortObjects)}cn(A,q,0,K.sortObjects),j.finish(),K.sortObjects===!0&&j.sort(oe,ye),Zt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Zt&&Re.addToRenderList(j,A),this.info.render.frame++,jt===!0&&Pe.beginShadows();const ie=z.state.shadowsArray;if(Ue.render(ie,A,q),jt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&I.hasRenderPass())===!1){const Ve=j.opaque,ze=j.transmissive;if(z.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(ze.length>0)for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const lt=Xe[ke];ia(Ve,ze,A,lt)}Zt&&Re.render(A);for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const lt=Xe[ke];Tn(j,A,lt,lt.viewport)}}else ze.length>0&&ia(Ve,ze,A,q),Zt&&Re.render(A),Tn(j,A,q)}V!==null&&pe===0&&(b.updateMultisampleRenderTarget(V),b.updateRenderTargetMipmap(V)),ne&&I.end(K),A.isScene===!0&&A.onAfterRender(K,A,q),Ae.resetDefaultState(),N=-1,B=null,T.pop(),T.length>0?(z=T[T.length-1],b.setTextureUnits(z.state.textureUnits),jt===!0&&Pe.setGlobalState(K.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?j=F[F.length-1]:j=null,$!==null&&$.renderEnd()};function cn(A,q,ae,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)z.pushLightProbeGrid(A);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){ne&&ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const Ve=Ce.update(A),ze=A.material;ze.visible&&j.push(A,Ve,ze,ae,ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const Ve=Ce.update(A),ze=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ft.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ft.copy(Ve.boundingSphere.center)),ft.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(ze)){const Xe=Ve.groups;for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const lt=Xe[ke],Ye=ze[lt.materialIndex];Ye&&Ye.visible&&j.push(A,Ve,Ye,ae,ft.z,lt)}}else ze.visible&&j.push(A,Ve,ze,ae,ft.z,null)}}const Be=A.children;for(let Ve=0,ze=Be.length;Ve<ze;Ve++)cn(Be[Ve],q,ae,ne)}function Tn(A,q,ae,ne){const{opaque:ie,transmissive:Be,transparent:Ve}=A;z.setupLightsView(ae),jt===!0&&Pe.setGlobalState(K.clippingPlanes,ae),ne&&we.viewport(re.copy(ne)),ie.length>0&&Ua(ie,q,ae),Be.length>0&&Ua(Be,q,ae),Ve.length>0&&Ua(Ve,q,ae),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ia(A,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ne.id]===void 0){const Ye=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ne.id]=new ni(1,1,{generateMipmaps:!0,type:Ye?vi:gi,minFilter:ks,samples:Math.max(4,Gt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Be=z.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||re;Be.setSize(Ve.z*K.transmissionResolutionScale,Ve.w*K.transmissionResolutionScale);const ze=K.getRenderTarget(),Xe=K.getActiveCubeFace(),ke=K.getActiveMipmapLevel();K.setRenderTarget(Be),K.getClearColor(P),Q=K.getClearAlpha(),Q<1&&K.setClearColor(16777215,.5),K.clear(),Zt&&Re.render(ae);const Ze=K.toneMapping;K.toneMapping=ta;const lt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),z.setupLightsView(ne),jt===!0&&Pe.setGlobalState(K.clippingPlanes,ne),Ua(A,ae,ne),b.updateMultisampleRenderTarget(Be),b.updateRenderTargetMipmap(Be),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let wt=0,$t=q.length;wt<$t;wt++){const Wt=q[wt],{object:Ot,geometry:Pt,material:Ge,group:In}=Wt;if(Ge.side===Aa&&Ot.layers.test(ne.layers)){const vt=Ge.side;Ge.side=ti,Ge.needsUpdate=!0,gl(Ot,ae,ne,Pt,Ge,In),Ge.side=vt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(Be),b.updateRenderTargetMipmap(Be))}K.setRenderTarget(ze,Xe,ke),K.setClearColor(P,Q),lt!==void 0&&(ne.viewport=lt),K.toneMapping=Ze}function Ua(A,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Be=A.length;ie<Be;ie++){const Ve=A[ie],{object:ze,geometry:Xe,group:ke}=Ve;let Ze=Ve.material;Ze.allowOverride===!0&&ne!==null&&(Ze=ne),ze.layers.test(ae.layers)&&gl(ze,q,ae,Xe,Ze,ke)}}function gl(A,q,ae,ne,ie,Be){A.onBeforeRender(K,q,ae,ne,ie,Be),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(K,q,ae,ne,A,Be),ie.transparent===!0&&ie.side===Aa&&ie.forceSinglePass===!1?(ie.side=ti,ie.needsUpdate=!0,K.renderBufferDirect(ae,q,ne,ie,A,Be),ie.side=ms,ie.needsUpdate=!0,K.renderBufferDirect(ae,q,ne,ie,A,Be),ie.side=Aa):K.renderBufferDirect(ae,q,ne,ie,A,Be),A.onAfterRender(K,q,ae,ne,ie,Be)}function Ks(A,q,ae){q.isScene!==!0&&(q=ln);const ne=D.get(A),ie=z.state.lights,Be=z.state.shadowsArray,Ve=ie.state.version,ze=Le.getParameters(A,ie.state,Be,q,ae,z.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(ze);let ke=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=J.get(A.envMap||ne.environment,Ze),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",an),ke=new Map,ne.programs=ke);let lt=ke.get(Xe);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Ve)return Na(A,ze),lt}else ze.uniforms=Le.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,ae,ze),A.onBeforeCompile(ze,K),lt=Le.acquireProgram(ze,Xe),ke.set(Xe,lt),ne.uniforms=ze.uniforms;const Ye=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Pe.uniform),Na(A,ze),ne.needsLights=_s(A),ne.lightsStateVersion=Ve,ne.needsLights&&(Ye.ambientLightColor.value=ie.state.ambient,Ye.lightProbe.value=ie.state.probe,Ye.directionalLights.value=ie.state.directional,Ye.directionalLightShadows.value=ie.state.directionalShadow,Ye.spotLights.value=ie.state.spot,Ye.spotLightShadows.value=ie.state.spotShadow,Ye.rectAreaLights.value=ie.state.rectArea,Ye.ltc_1.value=ie.state.rectAreaLTC1,Ye.ltc_2.value=ie.state.rectAreaLTC2,Ye.pointLights.value=ie.state.point,Ye.pointLightShadows.value=ie.state.pointShadow,Ye.hemisphereLights.value=ie.state.hemi,Ye.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ie.state.spotLightMatrix,Ye.spotLightMap.value=ie.state.spotLightMap,Ye.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=z.state.lightProbeGridArray.length>0,ne.currentProgram=lt,ne.uniformsList=null,lt}function ro(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=ou.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Na(A,q){const ae=D.get(A);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function oo(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(q.matrixWorld);for(let ae=0,ne=A.length;ae<ne;ae++){const ie=A[ae];if(ie.texture!==null&&ie.boundingBox.containsPoint(O))return ie}return null}function La(A,q,ae,ne,ie){q.isScene!==!0&&(q=ln),b.resetTextureUnits();const Be=q.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,ze=V===null?K.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Et.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ke=J.get(ne.envMap||Ve,Xe),Ze=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!ae.morphAttributes.position,wt=!!ae.morphAttributes.normal,$t=!!ae.morphAttributes.color;let Wt=ta;ne.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Wt=K.toneMapping);const Ot=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ge=D.get(ne),In=z.state.lights;if(jt===!0&&(pt===!0||A!==B)){const Nt=A===B&&ne.id===N;Pe.setState(ne,A,Nt)}let vt=!1;ne.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==In.state.version||Ge.outputColorSpace!==ze||ie.isBatchedMesh&&Ge.batching===!1||!ie.isBatchedMesh&&Ge.batching===!0||ie.isBatchedMesh&&Ge.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ge.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ge.instancing===!1||!ie.isInstancedMesh&&Ge.instancing===!0||ie.isSkinnedMesh&&Ge.skinning===!1||!ie.isSkinnedMesh&&Ge.skinning===!0||ie.isInstancedMesh&&Ge.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ge.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ge.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ge.instancingMorph===!1&&ie.morphTexture!==null||Ge.envMap!==ke||ne.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==lt||Ge.morphTargets!==Ye||Ge.morphNormals!==wt||Ge.morphColors!==$t||Ge.toneMapping!==Wt||Ge.morphTargetsCount!==Pt||!!Ge.lightProbeGrid!=z.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ge.__version=ne.version);let _n=Ge.currentProgram;vt===!0&&(_n=Ks(ne,q,ie),$&&ne.isNodeMaterial&&$.onUpdateProgram(ne,_n,Ge));let ai=!1,Ui=!1,si=!1;const zt=_n.getUniforms(),en=Ge.uniforms;if(we.useProgram(_n.program)&&(ai=!0,Ui=!0,si=!0),ne.id!==N&&(N=ne.id,Ui=!0),Ge.needsLights){const Nt=oo(z.state.lightProbeGridArray,ie);Ge.lightProbeGrid!==Nt&&(Ge.lightProbeGrid=Nt,Ui=!0)}if(ai||B!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(W,"projectionMatrix",A.projectionMatrix),zt.setValue(W,"viewMatrix",A.matrixWorldInverse);const Vi=zt.map.cameraPosition;Vi!==void 0&&Vi.setValue(W,Lt.setFromMatrixPosition(A.matrixWorld)),Gt.logarithmicDepthBuffer&&zt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&zt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,Ui=!0,si=!0)}if(Ge.needsLights&&(In.state.directionalShadowMap.length>0&&zt.setValue(W,"directionalShadowMap",In.state.directionalShadowMap,b),In.state.spotShadowMap.length>0&&zt.setValue(W,"spotShadowMap",In.state.spotShadowMap,b),In.state.pointShadowMap.length>0&&zt.setValue(W,"pointShadowMap",In.state.pointShadowMap,b)),ie.isSkinnedMesh){zt.setOptional(W,ie,"bindMatrix"),zt.setOptional(W,ie,"bindMatrixInverse");const Nt=ie.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),zt.setValue(W,"boneTexture",Nt.boneTexture,b))}ie.isBatchedMesh&&(zt.setOptional(W,ie,"batchingTexture"),zt.setValue(W,"batchingTexture",ie._matricesTexture,b),zt.setOptional(W,ie,"batchingIdTexture"),zt.setValue(W,"batchingIdTexture",ie._indirectTexture,b),zt.setOptional(W,ie,"batchingColorTexture"),ie._colorsTexture!==null&&zt.setValue(W,"batchingColorTexture",ie._colorsTexture,b));const Ni=ae.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&it.update(ie,ae,_n),(Ui||Ge.receiveShadow!==ie.receiveShadow)&&(Ge.receiveShadow=ie.receiveShadow,zt.setValue(W,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(en.envMapIntensity.value=q.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=M2()),Ui){if(zt.setValue(W,"toneMappingExposure",K.toneMappingExposure),Ge.needsLights&&Oa(en,si),Be&&ne.fog===!0&&ce.refreshFogUniforms(en,Be),ce.refreshMaterialUniforms(en,ne,De,Te,z.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Nt=Ge.lightProbeGrid;en.probesSH.value=Nt.texture,en.probesMin.value.copy(Nt.boundingBox.min),en.probesMax.value.copy(Nt.boundingBox.max),en.probesResolution.value.copy(Nt.resolution)}ou.upload(W,ro(Ge),en,b)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ou.upload(W,ro(Ge),en,b),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&zt.setValue(W,"center",ie.center),zt.setValue(W,"modelViewMatrix",ie.modelViewMatrix),zt.setValue(W,"normalMatrix",ie.normalMatrix),zt.setValue(W,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Nt=ne.uniformsGroups;for(let Vi=0,za=Nt.length;Vi<za;Vi++){const xs=Nt[Vi];he.update(xs,_n),he.bind(xs,_n)}}return _n}function Oa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function _s(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return pe},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,q,ae){const ne=D.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=q,D.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ae=D.get(A);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const Pa=W.createFramebuffer();this.setRenderTarget=function(A,q=0,ae=0){V=A,ue=q,pe=ae;let ne=null,ie=!1,Be=!1;if(A){const ze=D.get(A);if(ze.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(W.FRAMEBUFFER,ze.__webglFramebuffer),re.copy(A.viewport),me.copy(A.scissor),Se=A.scissorTest,we.viewport(re),we.scissor(me),we.setScissorTest(Se),N=-1;return}else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(ze.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(ze.__boundDepthTexture!==Ze){if(Ze!==null&&D.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const ke=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[q])?ne=ke[q][ae]:ne=ke[q],ie=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?ne=D.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?ne=ke[ae]:ne=ke,re.copy(A.viewport),me.copy(A.scissor),Se=A.scissorTest}else re.copy(Ee).multiplyScalar(De).floor(),me.copy(He).multiplyScalar(De).floor(),Se=$e;if(ae!==0&&(ne=Pa),we.bindFramebuffer(W.FRAMEBUFFER,ne)&&we.drawBuffers(A,ne),we.viewport(re),we.scissor(me),we.setScissorTest(Se),ie){const ze=D.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,ze.__webglTexture,ae)}else if(Be){const ze=q;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=D.get(A.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,ae,ze)}}else if(A!==null&&ae!==0){const ze=D.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ze.__webglTexture,ae)}N=-1},this.readRenderTargetPixels=function(A,q,ae,ne,ie,Be,Ve,ze=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){we.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const ke=A.textures[ze],Ze=ke.format,lt=ke.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+ze),!Gt.textureFormatReadable(Ze)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(lt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&ae>=0&&ae<=A.height-ie&&W.readPixels(q,ae,ne,ie,k.convert(Ze),k.convert(lt),Be)}finally{const ke=V!==null?D.get(V).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,q,ae,ne,ie,Be,Ve,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(q>=0&&q<=A.width-ne&&ae>=0&&ae<=A.height-ie){we.bindFramebuffer(W.FRAMEBUFFER,Xe);const ke=A.textures[ze],Ze=ke.format,lt=ke.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+ze),!Gt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),W.readPixels(q,ae,ne,ie,k.convert(Ze),k.convert(lt),0);const wt=V!==null?D.get(V).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,wt);const $t=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await _M(W,$t,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.deleteBuffer(Ye),W.deleteSync($t),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ae=0){const ne=Math.pow(2,-ae),ie=Math.floor(A.image.width*ne),Be=Math.floor(A.image.height*ne),Ve=q!==null?q.x:0,ze=q!==null?q.y:0;b.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ae,0,0,Ve,ze,ie,Be),we.unbindTexture()};const dn=W.createFramebuffer(),vl=W.createFramebuffer();this.copyTextureToTexture=function(A,q,ae=null,ne=null,ie=0,Be=0){let Ve,ze,Xe,ke,Ze,lt,Ye,wt,$t;const Wt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(ae!==null)Ve=ae.max.x-ae.min.x,ze=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,ke=ae.min.x,Ze=ae.min.y,lt=ae.isBox3?ae.min.z:0;else{const en=Math.pow(2,-ie);Ve=Math.floor(Wt.width*en),ze=Math.floor(Wt.height*en),A.isDataArrayTexture?Xe=Wt.depth:A.isData3DTexture?Xe=Math.floor(Wt.depth*en):Xe=1,ke=0,Ze=0,lt=0}ne!==null?(Ye=ne.x,wt=ne.y,$t=ne.z):(Ye=0,wt=0,$t=0);const Ot=k.convert(q.format),Pt=k.convert(q.type);let Ge;q.isData3DTexture?(b.setTexture3D(q,0),Ge=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(b.setTexture2DArray(q,0),Ge=W.TEXTURE_2D_ARRAY):(b.setTexture2D(q,0),Ge=W.TEXTURE_2D),we.activeTexture(W.TEXTURE0),we.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),we.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),we.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const In=we.getParameter(W.UNPACK_ROW_LENGTH),vt=we.getParameter(W.UNPACK_IMAGE_HEIGHT),_n=we.getParameter(W.UNPACK_SKIP_PIXELS),ai=we.getParameter(W.UNPACK_SKIP_ROWS),Ui=we.getParameter(W.UNPACK_SKIP_IMAGES);we.pixelStorei(W.UNPACK_ROW_LENGTH,Wt.width),we.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wt.height),we.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),we.pixelStorei(W.UNPACK_SKIP_ROWS,Ze),we.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const si=A.isDataArrayTexture||A.isData3DTexture,zt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const en=D.get(A),Ni=D.get(q),Nt=D.get(en.__renderTarget),Vi=D.get(Ni.__renderTarget);we.bindFramebuffer(W.READ_FRAMEBUFFER,Nt.__webglFramebuffer),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let za=0;za<Xe;za++)si&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,D.get(A).__webglTexture,ie,lt+za),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,D.get(q).__webglTexture,Be,$t+za)),W.blitFramebuffer(ke,Ze,Ve,ze,Ye,wt,Ve,ze,W.DEPTH_BUFFER_BIT,W.NEAREST);we.bindFramebuffer(W.READ_FRAMEBUFFER,null),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||D.has(A)){const en=D.get(A),Ni=D.get(q);we.bindFramebuffer(W.READ_FRAMEBUFFER,dn),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,vl);for(let Nt=0;Nt<Xe;Nt++)si?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,en.__webglTexture,ie,lt+Nt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,en.__webglTexture,ie),zt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ni.__webglTexture,Be,$t+Nt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ni.__webglTexture,Be),ie!==0?W.blitFramebuffer(ke,Ze,Ve,ze,Ye,wt,Ve,ze,W.COLOR_BUFFER_BIT,W.NEAREST):zt?W.copyTexSubImage3D(Ge,Be,Ye,wt,$t+Nt,ke,Ze,Ve,ze):W.copyTexSubImage2D(Ge,Be,Ye,wt,ke,Ze,Ve,ze);we.bindFramebuffer(W.READ_FRAMEBUFFER,null),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ge,Be,Ye,wt,$t,Ve,ze,Xe,Ot,Pt,Wt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,Be,Ye,wt,$t,Ve,ze,Xe,Ot,Wt.data):W.texSubImage3D(Ge,Be,Ye,wt,$t,Ve,ze,Xe,Ot,Pt,Wt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,Ye,wt,Ve,ze,Ot,Pt,Wt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,Ye,wt,Wt.width,Wt.height,Ot,Wt.data):W.texSubImage2D(W.TEXTURE_2D,Be,Ye,wt,Ve,ze,Ot,Pt,Wt);we.pixelStorei(W.UNPACK_ROW_LENGTH,In),we.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),we.pixelStorei(W.UNPACK_SKIP_PIXELS,_n),we.pixelStorei(W.UNPACK_SKIP_ROWS,ai),we.pixelStorei(W.UNPACK_SKIP_IMAGES,Ui),Be===0&&q.generateMipmaps&&W.generateMipmap(Ge),we.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){ue=0,pe=0,V=null,we.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),i.unpackColorSpace=Et._getUnpackColorSpace()}}const lu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ml{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E2=new Ep(-1,1,1,-1,0,1);class T2 extends qn{constructor(){super(),this.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pn([0,2,0,0,2,0],2))}}const A2=new T2;class _x{constructor(e){this._mesh=new Di(A2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class w2 extends ml{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof On?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jr.clone(e.uniforms),this.material=new On({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new _x(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class y_ extends ml{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class C2 extends ml{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class R2{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new ot);this._width=s.width,this._height=s.height,i=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new w2(lu),this.copyPass.material.blending=ea,this.timer=new Mb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),f.needsSwap){if(s){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}y_!==void 0&&(f instanceof y_?s=!0:f instanceof C2&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class D2 extends ml{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Tt}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=l}}const U2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $r extends ml{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new Tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(c,f,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new ni(c,f,{type:vi});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const g=new ni(c,f,{type:vi});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),f=Math.round(f/2)}const h=U2;this.highPassUniforms=Jr.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new On({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new ot(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jr.clone(lu.uniforms),this.blendMaterial=new On({uniforms:this.copyUniforms,vertexShader:lu.vertexShader,fragmentShader:lu.fragmentShader,premultipliedAlpha:!0,blending:mh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Tt,this._oldClearAlpha=1,this._basic=new vu,this._fsQuad=new _x(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ot(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=$r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=$r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=f}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new On({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new On({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}$r.BlurDirectionX=new ot(1,0);$r.BlurDirectionY=new ot(0,1);const M_=new gs,$c=new Y;class xx extends xb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new Pn(e,3)),this.setAttribute("uv",new Pn(i,2))}applyMatrix4(e){const i=this.attributes.instanceStart,s=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(e),s.applyMatrix4(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const s=new rp(i,6,1);return this.setAttribute("instanceStart",new hs(s,3,0)),this.setAttribute("instanceEnd",new hs(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const s=new rp(i,6,1);return this.setAttribute("instanceColorStart",new hs(s,3,0)),this.setAttribute("instanceColorEnd",new hs(s,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cb(e.geometry)),this}fromLineSegments(e){const i=e.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;e!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(e),M_.setFromBufferAttribute(i),this.boundingBox.union(M_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(e!==void 0&&i!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)$c.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared($c)),$c.fromBufferAttribute(i,c),l=Math.max(l,s.distanceToSquared($c));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ie.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ot(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ei.line={uniforms:Jr.merge([Ie.common,Ie.fog,Ie.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Sx extends On{constructor(e){super({type:"LineMaterial",uniforms:Jr.clone(ei.line.uniforms),vertexShader:ei.line.vertexShader,fragmentShader:ei.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const dh=new Yt,b_=new Y,E_=new Y,Dn=new Yt,Un=new Yt,Zi=new Yt,hh=new Y,ph=new sn,Nn=new wb,T_=new Y,eu=new gs,tu=new to,Ki=new Yt;let Qi,js;function A_(r,e,i){return Ki.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Ki.multiplyScalar(1/Ki.w),Ki.x=js/i.width,Ki.y=js/i.height,Ki.applyMatrix4(r.projectionMatrixInverse),Ki.multiplyScalar(1/Ki.w),Math.abs(Math.max(Ki.x,Ki.y))}function N2(r,e){const i=r.matrixWorld,s=r.geometry,l=s.attributes.instanceStart,c=s.attributes.instanceEnd,f=Math.min(s.instanceCount,l.count);for(let h=0,m=f;h<m;h++){Nn.start.fromBufferAttribute(l,h),Nn.end.fromBufferAttribute(c,h),Nn.applyMatrix4(i);const p=new Y,v=new Y;Qi.distanceSqToSegment(Nn.start,Nn.end,v,p),v.distanceTo(p)<js*.5&&e.push({point:v,pointOnLine:p,distance:Qi.origin.distanceTo(v),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function L2(r,e,i){const s=e.projectionMatrix,c=r.material.resolution,f=r.matrixWorld,h=r.geometry,m=h.attributes.instanceStart,p=h.attributes.instanceEnd,v=Math.min(h.instanceCount,m.count),x=-e.near;Qi.at(1,Zi),Zi.w=1,Zi.applyMatrix4(e.matrixWorldInverse),Zi.applyMatrix4(s),Zi.multiplyScalar(1/Zi.w),Zi.x*=c.x/2,Zi.y*=c.y/2,Zi.z=0,hh.copy(Zi),ph.multiplyMatrices(e.matrixWorldInverse,f);for(let g=0,M=v;g<M;g++){if(Dn.fromBufferAttribute(m,g),Un.fromBufferAttribute(p,g),Dn.w=1,Un.w=1,Dn.applyMatrix4(ph),Un.applyMatrix4(ph),Dn.z>x&&Un.z>x)continue;if(Dn.z>x){const L=Dn.z-Un.z,O=(Dn.z-x)/L;Dn.lerp(Un,O)}else if(Un.z>x){const L=Un.z-Dn.z,O=(Un.z-x)/L;Un.lerp(Dn,O)}Dn.applyMatrix4(s),Un.applyMatrix4(s),Dn.multiplyScalar(1/Dn.w),Un.multiplyScalar(1/Un.w),Dn.x*=c.x/2,Dn.y*=c.y/2,Un.x*=c.x/2,Un.y*=c.y/2,Nn.start.copy(Dn),Nn.start.z=0,Nn.end.copy(Un),Nn.end.z=0;const C=Nn.closestPointToPointParameter(hh,!0);Nn.at(C,T_);const S=zM.lerp(Dn.z,Un.z,C),y=S>=-1&&S<=1,R=hh.distanceTo(T_)<js*.5;if(y&&R){Nn.start.fromBufferAttribute(m,g),Nn.end.fromBufferAttribute(p,g),Nn.start.applyMatrix4(f),Nn.end.applyMatrix4(f);const L=new Y,O=new Y;Qi.distanceSqToSegment(Nn.start,Nn.end,O,L),i.push({point:O,pointOnLine:L,distance:Qi.origin.distanceTo(O),object:r,face:null,faceIndex:g,uv:null,uv1:null})}}}class O2 extends Di{constructor(e=new xx,i=new Sx({color:Math.random()*16777215})){super(e,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,i=e.attributes.instanceStart,s=e.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let f=0,h=0,m=i.count;f<m;f++,h+=2)b_.fromBufferAttribute(i,f),E_.fromBufferAttribute(s,f),l[h]=h===0?0:l[h-1],l[h+1]=l[h]+b_.distanceTo(E_);const c=new rp(l,2,1);return e.setAttribute("instanceDistanceStart",new hs(c,1,0)),e.setAttribute("instanceDistanceEnd",new hs(c,1,1)),this}raycast(e,i){const s=this.material.worldUnits,l=e.camera;l===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Qi=e.ray;const f=this.matrixWorld,h=this.geometry,m=this.material;js=m.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),tu.copy(h.boundingSphere).applyMatrix4(f);let p;if(s)p=js*.5;else{const x=Math.max(l.near,tu.distanceToPoint(Qi.origin));p=A_(l,x,m.resolution)}if(tu.radius+=p,Qi.intersectsSphere(tu)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),eu.copy(h.boundingBox).applyMatrix4(f);let v;if(s)v=js*.5;else{const x=Math.max(l.near,eu.distanceToPoint(Qi.origin));v=A_(l,x,m.resolution)}eu.expandByScalar(v),Qi.intersectsBox(eu)!==!1&&(s?N2(this,i):L2(this,l,i))}onBeforeRender(e){const i=this.material.uniforms;i&&i.resolution&&(e.getViewport(dh),this.material.uniforms.resolution.value.set(dh.z,dh.w))}}function P2(){const r=[];for(let e=-1;e<=1;e+=2)for(let i=-1;i<=1;i+=2)for(let s=-1;s<=1;s+=2)for(let l=-1;l<=1;l+=2)r.push([e,i,s,l]);return r}function z2(r){const e=[];for(let i=0;i<r.length;i++)for(let s=i+1;s<r.length;s++){let l=0;for(let c=0;c<4;c++)r[i][c]!==r[s][c]&&l++;l===1&&e.push([i,s])}return e}function w_(r,e,i,s){let[l,c,f,h]=r,m;return m=l*Math.cos(e)-h*Math.sin(e),h=l*Math.sin(e)+h*Math.cos(e),l=m,m=f*Math.cos(i)-h*Math.sin(i),h=f*Math.sin(i)+h*Math.cos(i),f=m,m=c*Math.cos(s)-h*Math.sin(s),h=c*Math.sin(s)+h*Math.cos(s),c=m,[l,c,f,h]}function C_([r,e,i,s],l=2.5,c=1.5){const f=c/(l-s);return[r*f,e*f,i*f]}const cp=P2(),R_=z2(cp),D_=[{wireOpacity:.7,linewidth:1,torusOpacity:0,bloom:.1,meshX:-2,meshY:.4},{wireOpacity:.85,linewidth:1.8,torusOpacity:0,bloom:.3,meshX:2,meshY:-.4},{wireOpacity:.95,linewidth:2.8,torusOpacity:.65,bloom:.65,meshX:0,meshY:0}];function Xr(r,e,i){return r+(e-r)*i}function I2({step:r}){const e=nt.useRef(null),i=nt.useRef({}),s=nt.useRef(r);return nt.useEffect(()=>{s.current=r},[r]),nt.useEffect(()=>{const l=e.current;if(!l)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=l.clientWidth,h=l.clientHeight,m=new b2({antialias:!0,alpha:!0});m.setSize(f,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(m.domElement);const p=new KM,v=new mi(55,f/h,.1,100);v.position.z=5.5,p.add(new _b(16777215,.3));const x=new Yv(13038158,4,30);x.position.set(6,6,6),p.add(x);const g=new Yv(16734774,2,20);g.position.set(-6,-4,2),p.add(g);const M=new Float32Array(R_.length*6),E=new xx;E.setPositions(M);const C=new Sx({color:16777215,linewidth:1,transparent:!0,opacity:.7,resolution:new ot(f,h)}),S=new O2(E,C);S.position.set(-2,.4,0),p.add(S);const y=new bp(2.3,.022,8,80),R=new vu({color:16777215,transparent:!0,opacity:0}),L=new Di(y,R);L.rotation.x=Math.PI/4,p.add(L);const O=420,j=new Float32Array(O*3);for(let V=0;V<O;V++)j[V*3]=(Math.random()-.5)*36,j[V*3+1]=(Math.random()-.5)*22,j[V*3+2]=(Math.random()-.5)*14-3;const z=new qn;z.setAttribute("position",new Ri(j,3));const F=new ax({color:13038158,size:.038,transparent:!0,opacity:.45}),T=new ob(z,F);p.add(T);const I=new R2(m);I.addPass(new D2(p,v));const K=new $r(new ot(f,h),.1,.4,.82);I.addPass(K),i.current={wireMesh:S,lineGeo:E,torus:L,wireMat:C,torusMat:R,bloom:K,composer:I,renderer:m,particles:T};const G=new Eb;let $;const ue=()=>{$=requestAnimationFrame(ue);const V=G.getElapsedTime(),N=s.current,B=D_[N]??D_[0],re=V*.5,me=V*.31,Se=V*.19,P=[];for(const[Q,xe]of R_){const Te=C_(w_(cp[Q],re,me,Se)),De=C_(w_(cp[xe],re,me,Se));P.push(...Te,...De)}if(E.setPositions(P),!c){T.rotation.y=V*.025,L.rotation.z=V*.18;const Q=.028;S.position.x=Xr(S.position.x,B.meshX,Q),S.position.y=Xr(S.position.y,B.meshY,Q),L.position.x=S.position.x,L.position.y=S.position.y;const xe=.055;C.opacity=Xr(C.opacity,B.wireOpacity,xe),C.linewidth=Xr(C.linewidth,B.linewidth,xe),R.opacity=Xr(R.opacity,B.torusOpacity,xe),K.strength=Xr(K.strength,B.bloom,xe)}I.render()};ue();const pe=()=>{const V=l.clientWidth,N=l.clientHeight;v.aspect=V/N,v.updateProjectionMatrix(),m.setSize(V,N),I.setSize(V,N),C.resolution.set(V,N)};return window.addEventListener("resize",pe),()=>{cancelAnimationFrame($),window.removeEventListener("resize",pe),l.contains(m.domElement)&&l.removeChild(m.domElement),m.dispose()}},[]),U.jsx("div",{ref:e,className:"craft-canvas"})}const B2={primary:"#C6F24E",secondary:"#2D1B69",tertiary:"#FF5A36",borderW:3,shadowOff:6,rot:2,displayWeight:900,dark:!0},F2={en:{nav:{work:"Work",clients:"Clients",stack:"Stack",experience:"Experience",contact:"Contact"},hero:{tag:"Available for new projects",title1:"Developer",title2:"building",title3:"seamless",title4:"UX.",sub:"Hi! I'm David — a multi-disciplinary developer and user-experience enthusiast based in Ecuador. I turn rough concepts into shippable, opinionated software.",cta1:"Show my work",cta2:"Email me",sticker:`Let's
build
something`,meta:[{k:"5+",v:"yrs shipping"},{k:"9+",v:"products live"},{k:"1",v:"springer paper"},{k:"EC",v:"based in Ecuador"}]},work:{label:"/ 02 — selected work",title:"A small selection of recent projects.",desc:"From enterprise AI systems to learning platforms — here's what I've been shipping.",filters:["All","AI","LMS","CRM","Web","Paper"],showMore:"Show more",showLess:"Show less"},testimonials:{label:"/ 03 — kind words",title:"Kind words from satisfied clients.",desc:"A few notes from the people I've collaborated with over the years."},stack:{label:"Tools of the trade"},experience:{label:"/ 05 — experience",title:"My work experience.",desc:"Where I've been, what I shipped, what I learned."},scrolly:{label:"/ 04 — how I build",title:"One developer. Every layer.",desc:"Design, code, automation, infra — the same person owns all of it. Here's the process, step by step."},craft:{label:"/ 06 — the craft",title:"Code is just the surface.",desc:"Spirit, mind, body — three pillars I train every day. Each one feeds the others. The code is just where it shows.",tesseract:"Below: a tesseract — the 4D equivalent of a cube. What you see is its shadow projected into 3D, rotating through a fourth dimension you can't look at directly.",showMedia:"Show media",hideMedia:"Hide media"},paper:{label:"/ 07 — published research",title:"Shooting Range Simulator.",venue:"BICA 2023 · Springer, Vol. 1130",desc:"Real-time shooting simulator with full-body motion tracking — built with Unity 3D, Microsoft Kinect 2, OpenCV, and a custom ESP32 hardware target. Presented at the 12th Annual International Conference on Biologically Inspired Cognitive Architectures.",cta:"Read the paper ↗",slides:[{src:"/shooter1.png",caption:"Game view — real-time shooting simulation interface."},{src:"/shooter2.png",caption:"Hardware placement — Kinect 2 and ESP32 target position in the physical scene."},{src:"/shooter3.png",caption:"Algorithm — visual graph of the motion-tracking and shot-detection pipeline."}]},contact:{label:"/ 08 — get in touch",title1:"Let's build",title2:"something",title3:"loud.",sub:"Got a project in mind? Drop a line. I reply within 24 hours, usually with a tough question and a lofi recommendation.",emailLabel:"Email",telLabel:"Phone",copyHint:"Click to copy",copied:"Copied!",foot:"Built with React, CSS, and stubborn attention to detail."}},es:{nav:{work:"Proyectos",clients:"Clientes",stack:"Stack",experience:"Experiencia",contact:"Contacto"},hero:{tag:"Disponible para nuevos proyectos",title1:"Developer",title2:"creando",title3:"experiencias",title4:"únicas.",sub:"¡Hola! Soy David — desarrollador multidisciplinario y entusiasta de la experiencia de usuario, radicado en Ecuador. Convierto conceptos difusos en software funcional y con carácter.",cta1:"Ver proyectos",cta2:"Escríbeme",sticker:`Hagamos
algo
juntos`,meta:[{k:"5+",v:"años desarrollando"},{k:"9+",v:"productos en vivo"},{k:"1",v:"paper springer"},{k:"EC",v:"desde Ecuador"}]},work:{label:"/ 02 — proyectos seleccionados",title:"Una selección de proyectos recientes.",desc:"Desde sistemas IA empresariales hasta plataformas de aprendizaje.",filters:["Todos","IA","LMS","CRM","Web","Paper"],showMore:"Ver más",showLess:"Ver menos"},testimonials:{label:"/ 03 — testimonios",title:"Palabras amables de clientes satisfechos.",desc:"Algunas notas de las personas con las que he colaborado."},stack:{label:"Herramientas"},experience:{label:"/ 05 — experiencia",title:"Mi experiencia laboral.",desc:"Dónde he estado, qué envié, qué aprendí."},scrolly:{label:"/ 04 — cómo construyo",title:"Un desarrollador. Todas las capas.",desc:"Diseño, código, automatización, infra — la misma persona lo dueña todo. Así es el proceso."},craft:{label:"/ 06 — el oficio",title:"El código es solo la superficie.",desc:"Espíritu, mente y cuerpo — tres pilares que entreno cada día. Cada uno alimenta a los demás. El código es solo donde se nota.",tesseract:"Abajo: un teseracto — el equivalente 4D de un cubo. Lo que ves es su sombra proyectada en 3D, girando en una cuarta dimensión que no puedes mirar directamente.",showMedia:"Mostrar media",hideMedia:"Ocultar media"},paper:{label:"/ 07 — investigación publicada",title:"Simulador de campo de tiro.",venue:"BICA 2023 · Springer, Vol. 1130",desc:"Simulador de tiro en tiempo real con rastreo corporal completo — construido con Unity 3D, Microsoft Kinect 2, OpenCV y hardware ESP32 personalizado. Presentado en la 12ª Conferencia Internacional Anual de Arquitecturas Cognitivas de Inspiración Biológica.",cta:"Leer el paper ↗",slides:[{src:"/shooter1.png",caption:"Vista del juego — interfaz del simulador de tiro en tiempo real."},{src:"/shooter2.png",caption:"Ubicación del hardware — posición del Kinect 2 y el objetivo ESP32 en la escena física."},{src:"/shooter3.png",caption:"Algoritmo — gráfica visual del pipeline de rastreo de movimiento y detección de disparo."}]},contact:{label:"/ 08 — contáctame",title1:"Hagamos",title2:"algo",title3:"fuerte.",sub:"¿Tienes un proyecto en mente? Escríbeme. Respondo en menos de 24 horas, generalmente con una pregunta difícil y una recomendación de lofi.",emailLabel:"Correo",telLabel:"Teléfono",copyHint:"Click para copiar",copied:"¡Copiado!",foot:"Hecho con React, CSS y atención obsesiva al detalle."}}},U_=[{id:1,title:"Benefit Match Center",cat:"Web",desc:{en:"Section 125 benefits platform — React 19 SPA on AWS S3+CloudFront, two serverless Lambda functions for form handling and a streaming AI chat widget, with Resend email delivery.",es:"Plataforma de beneficios Section 125 — SPA React 19 en AWS S3+CloudFront, dos funciones Lambda serverless para formularios y chat IA en streaming, con entrega de email vía Resend."},tech:["React 19","AWS Lambda","SST","CloudFront","Claude API"],color:"#0F1A2E",textColor:"#C49B3C",link:"https://benefitmatchcenter.com/"},{id:2,title:"UMI — Unified Meeting Intel",cat:"AI",desc:{en:"Multi-platform meeting integration for Google Meet, Zoom, and Teams — transcription analysis, third-party transcript uploads, AI chat flows, and real-time statistics.",es:"Integración de reuniones multi-plataforma (Meet, Zoom, Teams) con análisis de transcripciones, carga de transcripts externos, flujos de chat IA y estadísticas en tiempo real."},tech:["NestJS","Next.js","AWS Lambda","OpenAI","PostgreSQL"],color:"#1C1D20",textColor:"#6366F1",link:"#"},{id:3,title:"Commission Tracker (CT)",cat:"AI",desc:{en:"Serverless analyzer for 52 companies with dynamic prompts, PDF OCR, and queue-based flows for commission data validation. Deployed on AWS Lambda with GitHub Actions CI/CD.",es:"Analizador serverless para 52 empresas con prompts dinámicos, OCR de PDF y flujos de cola para validación de comisiones. Desplegado en AWS Lambda con CI/CD en GitHub Actions."},tech:["AWS Lambda","OpenAI","OCR","GitHub Actions","Node.js"],color:"#121315",textColor:"#0EA5E9",link:"#"},{id:4,title:"N8N Relatividad IA",cat:"AI",desc:{en:"Multiple self-hosted N8N chatbots, one per customer — orchestrating LLM conversations with isolated pipelines and guardrails.",es:"N8N multi-cliente auto-hospedado con chatbots aislados por cliente que orquestan conversaciones LLM."},tech:["N8N","Docker","LangChain","Evolution API"],color:"#000000",textColor:"#ffffff",link:"#"},{id:5,title:"Atiende — CRM WhatsApp",cat:"CRM",desc:{en:"WhatsApp ticketing CRM wired into N8N automations — full customer lifecycle from first message to resolution.",es:"CRM de tickets WhatsApp conectado a N8N — ciclo completo del cliente desde el primer mensaje hasta la resolución."},tech:["Next.js","N8N","Appwrite","WhatsApp API"],color:"#C6F24E",textColor:"#111111",link:"#"},{id:6,title:"Qubex LLM",cat:"AI",desc:{en:"A cutting-edge assistant exposing large language models through a polished chat UI.",es:"Asistente de punta que expone LLMs a través de una UI de chat pulida."},tech:["Next.js","React","OpenAI","Vercel"],color:"#0B1121",textColor:"#A78BFA",link:"https://qubex-global.vercel.app/"},{id:7,title:"Fenix Conocimiento",cat:"LMS",desc:{en:"Learning management system for Fenix's internal knowledge base — custom theme, course catalog, and ChatBot LLM integration.",es:"LMS para la base de conocimiento interna de Fenix — tema personalizado, catálogo de cursos e integración ChatBot LLM."},tech:["Moodle","PHP","MySQL","Grafana"],color:"#111111",textColor:"#ffffff",link:"https://conocimiento.mysistemafenix.com"},{id:8,title:"Taurhus Capacitaciones",cat:"LMS",desc:{en:"Full LMS for online courses with custom theme, enrollment flows, certificates, and Laravel Mix Vue.js integrations.",es:"LMS completo para cursos en línea con tema personalizado, flujos de matrícula, certificados e integraciones Laravel Mix Vue.js."},tech:["Moodle","Laravel","Vue.js","MySQL","PHP"],color:"#2D1B69",textColor:"#ffffff",link:"https://taurhus.com.ec"},{id:9,title:"Shooting Range Simulator",cat:"Paper",desc:{en:"Real-time shooting simulator with body tracking — Unity 3D, Kinect 2, OpenCV, and ESP32 hardware integration. Published at BICA 2023 (Springer, Volume 1130).",es:"Simulador de tiro en tiempo real con rastreo corporal — Unity 3D, Kinect 2, OpenCV e integración ESP32. Publicado en BICA 2023 (Springer, Volumen 1130)."},tech:["Unity","OpenCV","Kinect 2","ESP32","Python"],color:"#111111",textColor:"#C6F24E",link:"#paper"}],jr=[{img:"/eli.jpeg",initials:"ET",name:"Eli Tabala",role:"Pinecrest Consulting",quote:{en:"What sets David apart is that he thinks like a product owner and executes like an engineer. Frontend, backend, infrastructure, automations — he handled all of it without ever needing to split the work. Reliable, fast, and genuinely invested in the outcome.",es:"Lo que distingue a David es que piensa como dueño de producto y ejecuta como ingeniero. Frontend, backend, infraestructura, automatizaciones — lo manejó todo sin necesidad de dividir el trabajo. Confiable, rápido y genuinamente comprometido con el resultado."}},{img:"/shaine.jpeg",initials:"SR",name:"Shaine Rucker",role:"Pinecrest Consulting",quote:{en:"David doesn't wait to be told what to build — he reads the requirements, proposes the architecture, and ships it. He took our product from a set of specs to a live AWS deployment faster than any developer I've worked with. The kind of engineer who owns the whole thing end to end.",es:"David no espera que le digan qué construir — lee los requisitos, propone la arquitectura y lo lanza. Llevó nuestro producto de unas especificaciones a un despliegue en vivo en AWS más rápido que cualquier desarrollador con el que haya trabajado. El tipo de ingeniero que dueña todo de punta a punta."}},{img:"/emilio.jpg",initials:"ER",name:"Emilio Rosado",role:"CEO, Relatividad IA",quote:{en:"David automated processes at Relatividad IA that we thought would require a full team. In weeks he had N8N workflows handling WhatsApp conversations, classifying leads, and routing support tickets — completely hands-off. The system he built became the backbone of our entire operation.",es:"David automatizó procesos en Relatividad IA que pensábamos requerirían un equipo completo. En semanas tenía workflows de N8N manejando conversaciones de WhatsApp, clasificando leads y enrutando tickets — completamente autónomo. El sistema que construyó se convirtió en la columna vertebral de nuestra operación."}},{img:"/wendy.jpeg",initials:"WE",name:"Wendy Espósito",role:"CEO, Taurhus Capacitaciones",quote:{en:"Working with David has been an enriching experience. His expertise in full-stack development, coupled with his commitment to meeting deadlines and exceeding expectations, truly set him apart. He was instrumental in building a Learning Management System with Moodle.",es:"Trabajar con David ha sido una experiencia enriquecedora. Su experiencia en full-stack y su compromiso con las fechas lo distinguen. Fue fundamental construyendo un LMS con Moodle."}},{img:"/maritza.png",initials:"MA",name:"Maritza Andrade",role:"Project Manager, Innovar Digital",quote:{en:"David is an exceptional developer and educator with a unique ability to turn ideas into reality. While working at Algoritmics, we taught programming to kids, creating a positive and engaging learning environment. His creativity and technical expertise make him an incredible asset.",es:"David es un desarrollador y educador excepcional con la habilidad única de convertir ideas en realidad. En Algoritmics enseñamos programación a niños creando un ambiente positivo. Su creatividad lo hacen un activo increíble."}},{img:"/jorge.jpg",initials:"JA",name:"Jorge Anchatuña",role:"CEO, Fenix Corp",quote:{en:"Collaborating with David was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Together we innovated in enterprise AI systems and knowledge platforms, where his expertise truly shone.",es:"Colaborar con David fue un placer absoluto. Su profesionalismo, puntualidad y dedicación a resultados excepcionales fueron evidentes durante todo el proyecto. Juntos innovamos en sistemas IA empresariales y plataformas de conocimiento."}}],N_=["AWS Lambda","Docker","GitHub Actions","Next.js","React","Node.js","NestJS","N8N","LangChain","OpenAI","PostgreSQL","Qdrant","MongoDB","Unity","Cursor","Moodle"],H2=[{badge:"EN",category:"freelancing",title:{en:"AI Automation Founder",es:"Fundador de Automatización IA"},where:"Entropía N8N Studio",location:"Ecuador",period:"2025 — Present",link:"https://entropia-n8n-studio.vercel.app/es",desc:{en:"AI chatbot automation agency. Build N8N flows connected to WhatsApp, CRMs, and business APIs for lead capture, client management, and support automation.",es:"Agencia de automatización con chatbots IA. Construyo flujos N8N conectados a WhatsApp, CRMs y APIs de negocio para captura de leads, gestión de clientes y automatización de soporte."}},{badge:"PC",category:"work",title:{en:"Full Stack Developer",es:"Desarrollador Full Stack"},where:"Pinecrest Consulting",location:"United States",period:"Sept. 2025 — Present",desc:{en:"Built CT (Commission Tracker) and UMI (Unified Meeting Integrated) as serverless solutions on AWS Lambda with GitHub Actions CI/CD. CT analyzes 52 companies using dynamic prompts, OCR, and queue-based flows. UMI integrates Meet, Zoom, and Teams with AI transcription and chat. Also implemented automated social media post scheduling via Metricool API.",es:"Desarrollé CT (Commission Tracker) y UMI (Unified Meeting Integrated) como soluciones serverless en AWS Lambda con CI/CD en GitHub Actions. CT analiza 52 empresas con prompts dinámicos, OCR y flujos de cola. UMI integra Meet, Zoom y Teams con transcripción IA y chat. Implementé también publicación automática de redes sociales vía Metricool API."}},{badge:"D2",category:"work",title:{en:"AI / Web Bot Developer",es:"Desarrollador AI / Web Bot"},where:"D2V",location:"Germany",period:"Aug. 2025 — Oct. 2025",desc:{en:"RAG Voice Chat, Notion–Mistral automations, Oura Ring API integrations, and custom AI tooling. Projects handled under strict NDA.",es:"RAG Voice Chat, automatizaciones Notion–Mistral, integraciones con Oura Ring API y tooling IA personalizado. Proyectos bajo estricta NDA."}},{badge:"RI",category:"work",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Relatividad IA",location:"Quito, Ecuador",period:"Dec. 2024 — Aug. 2025",desc:{en:"Developed a Logistic Tracker SaaS and WhatsApp CRM platform — N8N orchestration, Evolution API, AWS ECS deployment, and multi-tenant architecture.",es:"Desarrollé un SaaS de rastreo logístico y plataforma CRM WhatsApp — orquestación N8N, Evolution API, despliegue en AWS ECS y arquitectura multi-tenant."}},{badge:"FC",category:"work",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Fenix Corp",location:"Latacunga, Ecuador",period:"May 2024 — Dec. 2024",desc:{en:"Deployed a ChatBot LLM system, Grafana monitoring dashboards, Apache Guacamole remote access, and Moodle LMS for internal knowledge management.",es:"Desplegué un sistema ChatBot LLM, dashboards de monitoreo en Grafana, acceso remoto con Apache Guacamole y Moodle para gestión del conocimiento interno."}},{badge:"AL",category:"work",title:{en:"Programming Instructor",es:"Instructor de Programación"},where:"Algorithmics International School",location:"Latacunga, Ecuador",period:"Sept. 2023 — Oct. 2024",desc:{en:"Taught Python, visual programming, and game design to children and teens — building structured curricula and fostering computational thinking in a bilingual environment.",es:"Enseñé Python, programación visual y diseño de videojuegos a niños y adolescentes — diseñando currículos estructurados y fomentando el pensamiento computacional en un entorno bilingüe."}},{badge:"TC",category:"work",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Taurhus Capacitaciones",location:"Illuchi, Ecuador",period:"Apr. 2023 — May 2024",desc:{en:"Built and deployed a Moodle-based LMS with Laravel Mix Vue.js integrations, custom enrollment flows, certificates, and API connectors for course management.",es:"Construí y desplegué un LMS basado en Moodle con integraciones Laravel Mix Vue.js, flujos de matrícula personalizados, certificados y conectores API."}},{badge:"ES",category:"work",title:{en:"Game Engine / AI Developer",es:"Desarrollador Game Engine / IA"},where:"ESPE · Taurhus Capacitaciones",location:"Belisario Quevedo, Ecuador",period:"Aug. 2021 — Apr. 2023",desc:{en:"Designed and built a real-time shooting range simulator using Unity, OpenCV body tracking, Kinect 2, and ESP32 hardware. Research published at BICA 2023 (Springer, Volume 1130).",es:"Diseñé y construí un simulador de polígono de tiro en tiempo real con Unity, rastreo corporal OpenCV, Kinect 2 y hardware ESP32. Investigación publicada en BICA 2023 (Springer, Volumen 1130)."}}],L_=[{num:"01",title:{en:"Read the brief, own the problem",es:"Lee el brief, dueña el problema"},body:{en:"No PM in the middle. I read the requirements, map the data model, identify edge cases, and propose the stack — before writing a single line.",es:"Sin PM de por medio. Leo los requisitos, mapeo el modelo de datos, identifico casos borde y propongo el stack — antes de escribir una línea."},stat:{en:"3–5 days · discovery",es:"3–5 días · discovery"},project:{en:"↳ BMC — The client delivered a structured requirements doc covering Section 125 benefits logic, the chat widget flow, and the email capture form. I read it, modeled the data, proposed the stack (React + Lambda + SST), and started building the same week.",es:"↳ BMC — El cliente entregó un documento estructurado con la lógica de beneficios Section 125, el flujo del chat widget y el formulario de captura. Lo leí, modelé los datos, propuse el stack (React + Lambda + SST) y empecé a construir esa misma semana."}},{num:"02",title:{en:"Design, build, wire — in parallel",es:"Diseña, construye, conecta — en paralelo"},body:{en:"UI, backend, and API contracts move at the same time. Components are built as the system takes shape — no hand-off, no waiting for approvals.",es:"UI, backend y contratos de API avanzan al mismo tiempo. Los componentes se construyen a medida que el sistema toma forma — sin handoffs ni esperas."},stat:{en:"2–4 weeks · build",es:"2–4 semanas · construcción"},project:{en:"↳ UMI — Next.js frontend, NestJS backend, PostgreSQL, S3, and OpenAI all built in the same sprint. The recording upload UI, the transcription pipeline, and the AI chat interface shipped together — no layer waited for another.",es:"↳ UMI — Frontend en Next.js, backend en NestJS, PostgreSQL, S3 y OpenAI construidos en el mismo sprint. La UI de carga, el pipeline de transcripción y el chat IA salieron juntos — ninguna capa esperó a otra."}},{num:"03",title:{en:"Automate what repeats",es:"Automatiza lo que se repite"},body:{en:"Any manual step that runs more than once gets automated. N8N workflows, AI agents, OCR pipelines, webhooks — if a human is doing it on a schedule, a machine should do it instead.",es:"Cualquier paso manual que se repita más de una vez se automatiza. N8N, agentes IA, pipelines OCR, webhooks — si un humano lo hace con regularidad, una máquina debería hacerlo."},stat:{en:"−80% manual tasks",es:"−80% tareas manuales"},project:{en:"↳ Relatividad IA + CT — At Relatividad IA, N8N workflows replaced a support team's daily repetition: WhatsApp messages classified, routed, and resolved automatically. At CT, PDF commission reports flow through Tesseract OCR → OpenAI normalization → GitHub Actions — what took hours now takes seconds.",es:"↳ Relatividad IA + CT — En Relatividad IA, workflows de N8N reemplazaron la repetición diaria del equipo de soporte: mensajes de WhatsApp clasificados, enrutados y resueltos automáticamente. En CT, los reportes PDF de comisiones pasan por OCR → OpenAI → GitHub Actions — lo que tardaba horas ahora tarda segundos."}},{num:"04",title:{en:"Deploy it. Own it.",es:"Despliégalo. Dueñalo."},body:{en:"The same person who designed and built it ships it to production. SST, GitHub Actions, AWS Lambda — one command, zero downtime, no handoff to a DevOps team.",es:"La misma persona que diseñó y construyó lo despliega a producción. SST, GitHub Actions, AWS Lambda — un comando, cero downtime, sin pasarle el testigo a nadie."},stat:{en:"Live · zero downtime",es:"En vivo · cero downtime"},project:{en:"↳ UMI + BMC — Both run on AWS Lambda via SST v4. One `sst deploy` ships the full stack: API, frontend, database migrations, scheduled jobs. GitHub Actions handles CI. The developer who built it monitors it and fixes it — no tickets, no handoffs.",es:"↳ UMI + BMC — Ambos corren en AWS Lambda con SST v4. Un `sst deploy` lanza todo el stack: API, frontend, migraciones, jobs. GitHub Actions maneja el CI. El mismo desarrollador que lo construyó lo monitorea y lo arregla — sin tickets, sin pasos de mano."}}],al=[{num:"01",title:{en:"Body — Built for the finish line",es:"Cuerpo — Hecho para la meta"},body:{en:"Triathlon training — swim, bike, run — works the same loop as coding: push hard, recover right, go again. The discipline that gets you to the finish line is the same one that ships clean software.",es:"El triatlón — nada, bici, carrera — corre con el mismo ciclo que el código: empujar fuerte, recuperarse bien, volver. La disciplina que te lleva a la meta es la misma que te lleva al deploy."},stat:{en:"Swim · Bike · Run",es:"Nada · Bici · Carrera"},photo:{type:"embed",permalink:"https://www.instagram.com/p/DWNJlxEjm_3/",pos:"photo-tr"}},{num:"02",title:{en:"Mind — Trained by the craft",es:"Mente — Entrenada por el oficio"},body:{en:"Every hard project is a mental rep. Deep study, hard problems, deliberate practice. Systems thinking and clean architecture aren't talent — they're trained, same as any muscle.",es:"Cada proyecto difícil es una repetición mental. Estudio profundo, problemas duros, práctica deliberada. El pensamiento sistémico y la arquitectura limpia no son talento — se entrenan, como cualquier músculo."},stat:{en:"Study · Build · Reflect",es:"Estudia · Construye · Reflexiona"},photo:{type:"embed",permalink:"https://www.instagram.com/reel/DKuQIPAMqzG/",pos:"photo-bl"}},{num:"03",title:{en:"Spirit — Son of God",es:"Espíritu — Hijo de Dios"},body:{en:"I start every morning knowing who I am. Faith isn't separate from the work — it's what keeps me grounded under deadlines and building from purpose, not pressure.",es:"Comienzo cada mañana sabiendo quién soy. La fe no está separada del trabajo — es lo que me mantiene firme bajo los plazos y que me hace construir desde el propósito, no desde el miedo."},stat:{en:"Faith · Purpose · Peace",es:"Fe · Propósito · Paz"},photo:{type:"embed",permalink:"https://www.instagram.com/p/DJ_FTzWt34-/",pos:"photo-br-adj"}}];function G2(){nt.useEffect(()=>{const r=document.querySelectorAll(".reveal"),e=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),e.unobserve(s.target))})},{threshold:.12});return r.forEach(i=>e.observe(i)),()=>e.disconnect()},[])}function V2({text:r,containerRef:e}){const i=nt.useRef(null);return nt.useEffect(()=>{const s=i.current,l=e.current;if(!s||!l)return;let c=0,f=0,h=0,m=0,p;const v=g=>{const M=l.getBoundingClientRect();h=g.clientX-M.left,m=g.clientY-M.top},x=()=>{c+=(h-c)*.08,f+=(m-f)*.08,s&&(s.style.left=c+"px"),s&&(s.style.top=f+"px"),p=requestAnimationFrame(x)};return l.addEventListener("mousemove",v),h=l.offsetWidth*.78,m=180,x(),()=>{l.removeEventListener("mousemove",v),cancelAnimationFrame(p)}},[e]),U.jsx("div",{ref:i,className:"hero-sticker",children:r.split(`
`).map((s,l)=>U.jsx("div",{children:s},l))})}function k2({lang:r,setLang:e,t:i,theme:s,setTheme:l}){return U.jsxs("nav",{className:"nav",children:[U.jsxs("a",{href:"#top",className:"nav-logo",children:[U.jsx("span",{className:"nav-logo-mark",children:"D"}),U.jsxs("span",{className:"nav-logo-text",children:["David",U.jsx("span",{className:"nav-logo-dot",children:".dev"})]})]}),U.jsxs("div",{className:"nav-links",children:[U.jsx("a",{href:"#work",className:"nav-link",children:i.nav.work}),U.jsx("a",{href:"#scrolly",className:"nav-link",children:"Case"}),U.jsx("a",{href:"#clients",className:"nav-link",children:i.nav.clients}),U.jsx("a",{href:"#stack",className:"nav-link",children:i.nav.stack}),U.jsx("a",{href:"#experience",className:"nav-link",children:i.nav.experience}),U.jsx("a",{href:"#contact",className:"nav-link",children:i.nav.contact})]}),U.jsxs("div",{className:"nav-actions",children:[U.jsx("button",{className:"nb-pill",onClick:()=>l(s==="dark"?"light":"dark"),style:{cursor:"pointer",background:"var(--primary)",color:"var(--on-primary)"},title:"Toggle theme",children:s==="dark"?"☾":"☀"}),U.jsxs("div",{className:"lang-toggle",children:[U.jsx("button",{className:r==="en"?"active":"",onClick:()=>e("en"),children:"EN"}),U.jsx("button",{className:r==="es"?"active":"",onClick:()=>e("es"),children:"ES"})]})]})]})}function X2({t:r}){const e=nt.useRef(null);return U.jsxs("section",{id:"top",className:"hero wrap",ref:e,children:[U.jsx("div",{className:"hero-scribble",children:U.jsx("img",{src:"/david.JPG",alt:"David",className:"hero-photo"})}),U.jsx("div",{className:"hero-scribble-2"}),U.jsx(V2,{text:r.hero.sticker,containerRef:e}),U.jsxs("div",{className:"hero-content",children:[U.jsxs("div",{className:"hero-tag",children:[U.jsx("span",{className:"hero-tag-dot"}),r.hero.tag]}),U.jsxs("h1",{className:"display hero-title",children:[r.hero.title1,U.jsx("br",{}),U.jsx("span",{className:"stroke",children:r.hero.title2})," ",U.jsx("span",{className:"violet",children:r.hero.title3}),U.jsx("br",{}),r.hero.title4]}),U.jsx("p",{className:"hero-sub",children:r.hero.sub}),U.jsxs("div",{className:"hero-actions",children:[U.jsxs("a",{href:"#work",className:"nb-btn",children:["→ ",r.hero.cta1]}),U.jsxs("a",{href:"#contact",className:"nb-btn secondary",children:["✉ ",r.hero.cta2]})]}),U.jsx("div",{className:"hero-meta",children:r.hero.meta.map((i,s)=>U.jsxs("div",{className:"hero-meta-cell",children:[U.jsx("div",{className:"k display",children:i.k}),U.jsx("div",{className:"v",children:i.v})]},s))})]})]})}function j2({t:r,lang:e}){const i=e==="es"?"Todos":"All",[s,l]=nt.useState(i),[c,f]=nt.useState(4);nt.useEffect(()=>{l(e==="es"?"Todos":"All")},[e]);const h={All:"All",Todos:"All",AI:"AI",IA:"AI",LMS:"LMS",CRM:"CRM",Web:"Web",Paper:"Paper"},m=nt.useMemo(()=>{const g=h[s]||"All";return g==="All"?U_:U_.filter(M=>M.cat===g)},[s]),p=g=>{l(g),f(4)},v=m.slice(0,c),x=c<m.length;return nt.useEffect(()=>{let g;const M=requestAnimationFrame(()=>{const E=document.querySelectorAll(".project-row.reveal:not(.in)");E.length&&(g=new IntersectionObserver(C=>{C.forEach(S=>{S.isIntersecting&&(S.target.classList.add("in"),g.unobserve(S.target))})},{threshold:.05}),E.forEach(C=>g.observe(C)))});return()=>{cancelAnimationFrame(M),g==null||g.disconnect()}},[m,c]),U.jsx("section",{id:"work",className:"work",children:U.jsxs("div",{className:"wrap",children:[U.jsxs("div",{className:"sec-head reveal",children:[U.jsxs("div",{children:[U.jsx("div",{className:"section-label",children:r.work.label}),U.jsx("h2",{className:"display sec-title",children:r.work.title})]}),U.jsx("p",{className:"sec-desc",children:r.work.desc})]}),U.jsx("div",{className:"filter-bar reveal",children:r.work.filters.map(g=>U.jsx("button",{className:`filter-chip ${s===g?"active":""}`,onClick:()=>p(g),children:g},g))}),U.jsx("div",{children:v.map((g,M)=>U.jsxs("div",{className:"project-row reveal",style:{transitionDelay:`${M*60}ms`},children:[U.jsxs("div",{className:"project-num",children:["0",g.id]}),U.jsxs("div",{className:"project-main",children:[U.jsx("h3",{children:g.title}),U.jsx("p",{children:g.desc[e]}),U.jsx("div",{className:"project-tech",children:g.tech.map((E,C)=>U.jsx("span",{className:"nb-pill",children:E},C))})]}),U.jsx("div",{className:"project-visual",style:{background:g.color,color:g.textColor},children:U.jsx("span",{style:{position:"relative",zIndex:2},children:g.title})}),U.jsx("a",{href:g.link,target:g.link.startsWith("#")?"_self":"_blank",rel:"noopener noreferrer",className:"project-link","aria-label":`Open ${g.title}`,children:"↗"})]},g.id))}),x&&U.jsx("div",{className:"show-more-wrap",children:U.jsxs("button",{className:"nb-btn show-more-btn",onClick:()=>f(g=>g+4),children:["↓ ",r.work.showMore]})})]})})}function W2({t:r,lang:e}){const[i,s]=nt.useState(0);nt.useEffect(()=>{const f=setInterval(()=>s(h=>(h+1)%jr.length),8e3);return()=>clearInterval(f)},[]);const l=()=>s(f=>(f-1+jr.length)%jr.length),c=()=>s(f=>(f+1)%jr.length);return U.jsx("section",{id:"clients",className:"testimonials",children:U.jsxs("div",{className:"wrap",children:[U.jsxs("div",{className:"sec-head reveal",children:[U.jsxs("div",{children:[U.jsx("div",{className:"section-label",children:r.testimonials.label}),U.jsx("h2",{className:"display sec-title",children:r.testimonials.title})]}),U.jsx("p",{className:"sec-desc",children:r.testimonials.desc})]}),U.jsx("div",{className:"carousel reveal",children:U.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${i*100}%)`},children:jr.map((f,h)=>U.jsx("div",{className:"testimonial",children:U.jsxs("div",{className:"testimonial-card",children:[U.jsx("p",{className:"testimonial-quote",children:f.quote[e]}),U.jsxs("div",{className:"testimonial-person",children:[f.img?U.jsx("img",{src:f.img,alt:f.name,className:"testimonial-avatar testimonial-avatar-photo"}):U.jsx("div",{className:"testimonial-avatar",children:f.initials}),U.jsx("div",{className:"testimonial-name",children:f.name}),U.jsx("div",{className:"testimonial-role mono",children:f.role})]})]})},h))})}),U.jsxs("div",{className:"carousel-controls",children:[U.jsx("button",{className:"carousel-btn",onClick:l,"aria-label":"Previous",children:"←"}),U.jsx("button",{className:"carousel-btn",onClick:c,"aria-label":"Next",children:"→"}),U.jsx("div",{className:"carousel-dots",children:jr.map((f,h)=>U.jsx("button",{className:`carousel-dot ${h===i?"active":""}`,onClick:()=>s(h),"aria-label":`Go to ${h+1}`},h))})]})]})})}function q2(){const r=[...N_,...N_];return U.jsx("section",{id:"stack",className:"tech-strip",children:U.jsx("div",{className:"marquee",children:r.map((e,i)=>U.jsxs("div",{className:"marquee-item",children:[U.jsx("span",{className:"dot"}),e]},i))})})}function Y2({t:r,lang:e}){const i=[{key:"freelancing",label:{en:"Freelancing",es:"Freelancing"}},{key:"work",label:{en:"Work Experience",es:"Experiencia Laboral"}}];return U.jsx("section",{id:"experience",className:"experience",children:U.jsxs("div",{className:"wrap",children:[U.jsxs("div",{className:"sec-head reveal",children:[U.jsxs("div",{children:[U.jsx("div",{className:"section-label",children:r.experience.label}),U.jsx("h2",{className:"display sec-title",children:r.experience.title})]}),U.jsx("p",{className:"sec-desc",children:r.experience.desc})]}),i.map(s=>{const l=H2.filter(c=>c.category===s.key);return l.length?U.jsxs("div",{className:"exp-group",children:[U.jsx("div",{className:"exp-group-label",children:s.label[e]}),U.jsx("div",{className:"exp-grid",children:l.map((c,f)=>U.jsxs("div",{className:"exp-card reveal",style:{transitionDelay:`${f*80}ms`},children:[U.jsx("div",{className:"exp-badge",children:c.badge}),U.jsxs("div",{children:[U.jsx("h4",{children:c.title[e]}),U.jsxs("div",{className:"meta",children:[c.where,c.location?` · ${c.location}`:""," · ",c.period]}),U.jsx("p",{children:c.desc[e]}),c.link&&U.jsxs("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"exp-link",children:[c.link.replace(/^https?:\/\//,"")," ↗"]})]})]},f))})]},s.key):null})]})})}function Z2({t:r,lang:e}){const[i,s]=nt.useState(0),[l,c]=nt.useState(0),f=nt.useRef(null),h=nt.useRef([]);return nt.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(L_.length-1);return}const p=()=>window.innerWidth<=900,v=()=>p()?window.innerHeight*.73:window.innerHeight*.5,x=()=>p()?"-10% 0px -27% 0px":"-50% 0px -50% 0px",g=new IntersectionObserver(()=>{const C=v();let S={idx:-1,dist:1/0};h.current.forEach((y,R)=>{if(!y)return;const L=y.getBoundingClientRect(),O=L.top+L.height/2,j=Math.abs(O-C);j<S.dist&&(S={idx:R,dist:j})}),S.idx>=0&&s(S.idx)},{rootMargin:x(),threshold:0});h.current.forEach(C=>C&&g.observe(C));let M=!1;const E=()=>{M||(M=!0,requestAnimationFrame(()=>{const C=f.current;if(C){const S=C.getBoundingClientRect(),y=window.innerHeight,R=S.height-y,L=Math.max(0,Math.min(1,-S.top/R));c(L)}M=!1}))};return window.addEventListener("scroll",E,{passive:!0}),E(),()=>{g.disconnect(),window.removeEventListener("scroll",E)}},[]),U.jsx("section",{id:"scrolly",className:"scrolly",children:U.jsxs("div",{className:"wrap",children:[U.jsxs("div",{className:"scrolly-head sec-head reveal",children:[U.jsxs("div",{children:[U.jsx("div",{className:"section-label",children:r.scrolly.label}),U.jsx("h2",{className:"display sec-title",children:r.scrolly.title})]}),U.jsx("p",{className:"sec-desc",children:r.scrolly.desc})]}),U.jsxs("div",{className:"scrolly-stage",ref:f,children:[U.jsx("div",{className:"scrolly-text",children:L_.map((m,p)=>U.jsxs("div",{ref:v=>h.current[p]=v,className:`scrolly-step ${i===p?"active":""}`,children:[U.jsxs("div",{className:"step-num",children:[m.num," / 04"]}),U.jsx("h3",{children:m.title[e]}),U.jsx("p",{children:m.body[e]}),U.jsx("div",{className:"stat",children:m.stat[e]}),m.project&&U.jsx("div",{className:"step-project",children:m.project[e]})]},p))}),U.jsx("div",{className:"scrolly-sticky",children:U.jsxs("div",{className:`scrolly-viz s${i}`,children:[U.jsx("div",{className:"scrolly-progress",style:{transform:`scaleX(${l})`}}),U.jsx("div",{className:`layer ${i===0?"active":""}`,children:U.jsxs("div",{className:"layer-wire",children:[U.jsx("div",{className:"block"}),U.jsxs("div",{className:"block body",children:[U.jsx("div",{}),U.jsx("div",{}),U.jsx("div",{}),U.jsx("div",{})]}),U.jsx("div",{className:"block"})]})}),U.jsx("div",{className:`layer ${i===1?"active":""}`,children:U.jsxs("div",{className:"layer-chat",children:[U.jsx("div",{className:"bubble bot",children:"hola, soy el asistente"}),U.jsx("div",{className:"bubble user",children:"necesito mi factura"}),U.jsx("div",{className:"bubble bot",children:"claro, dame un segundo…"}),U.jsx("div",{className:"bubble bot typing"})]})}),U.jsx("div",{className:`layer ${i===2?"active":""}`,children:U.jsxs("div",{className:"layer-dash",children:[U.jsxs("div",{className:"stat-tile",children:[U.jsx("div",{className:"big",children:"94%"}),U.jsx("div",{className:"lbl",children:"resolved"})]}),U.jsxs("div",{className:"stat-tile",children:[U.jsx("div",{className:"big",children:"1.2s"}),U.jsx("div",{className:"lbl",children:"avg latency"})]}),U.jsxs("div",{className:"stat-tile",children:[U.jsx("div",{className:"big",children:"12k"}),U.jsx("div",{className:"lbl",children:"msgs / wk"})]}),U.jsxs("div",{className:"stat-tile",children:[U.jsx("div",{className:"big",children:"4.8★"}),U.jsx("div",{className:"lbl",children:"csat"})]})]})}),U.jsx("div",{className:`layer ${i===3?"active":""}`,children:U.jsxs("div",{className:"layer-launch",children:[U.jsx("div",{className:"rocket",children:"SHIPPED."}),U.jsx("div",{className:"tag",children:"Live · v1.0"})]})})]})})]})]})})}const K2=["card-bl","card-tr","card-br"];function Q2(r){return`<blockquote class="instagram-media" data-instgrm-permalink="${r}" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:0;box-shadow:none;margin:0;padding:0;width:100%;"><div style="padding:16px;"><a href="${r}" style="background:#FFFFFF;line-height:0;padding:0 0;text-align:center;text-decoration:none;width:100%;" target="_blank"><div style="display:flex;flex-direction:row;align-items:center;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:40px;margin-right:14px;width:40px;"></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:100px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:60px;"></div></div></div><div style="padding:19% 0;"></div><div style="display:block;height:50px;margin:0 auto 12px;width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top:8px;"><div style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;font-style:normal;font-weight:550;line-height:18px;">View this post on Instagram</div></div><div style="padding:12.5% 0;"></div><div style="display:flex;flex-direction:row;margin-bottom:14px;align-items:center;"><div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(0px) translateY(7px);"></div><div style="background-color:#F4F4F4;height:12.5px;transform:rotate(-45deg) translateX(3px) translateY(1px);width:12.5px;flex-grow:0;margin-right:14px;margin-left:2px;"></div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(9px) translateY(-18px);"></div></div><div style="margin-left:8px;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:20px;width:20px;"></div><div style="width:0;height:0;border-top:2px solid transparent;border-left:6px solid #f4f4f4;border-bottom:2px solid transparent;transform:translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left:auto;"><div style="width:0px;border-top:8px solid #F4F4F4;border-right:8px solid transparent;transform:translateY(16px);"></div><div style="background-color:#F4F4F4;flex-grow:0;height:12px;width:16px;transform:translateY(-4px);"></div><div style="width:0;height:0;border-top:8px solid #F4F4F4;border-left:8px solid transparent;transform:translateY(-4px) translateX(8px);"></div></div></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;margin-bottom:24px;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:224px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:144px;"></div></div></a></div></blockquote>`}function J2({permalink:r,posClass:e,visible:i}){const s=nt.useRef(null);return nt.useEffect(()=>{if(!document.getElementById("ig-embed-js")){const l=document.createElement("script");l.id="ig-embed-js",l.src="https://www.instagram.com/embed.js",l.async=!0,document.body.appendChild(l)}},[]),nt.useEffect(()=>{if(!i||!s.current)return;s.current.innerHTML=Q2(r);const l=()=>{window.instgrm?window.instgrm.Embeds.process():setTimeout(l,250)};l()},[i,r]),U.jsx("div",{ref:s,className:`craft-insta ${e} ${i?"visible":""}`})}function $2({t:r,lang:e}){const[i,s]=nt.useState(0),[l,c]=nt.useState(0),[f,h]=nt.useState(!0),m=nt.useRef(null);return nt.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const v=()=>{const x=m.current;if(!x)return;const g=x.getBoundingClientRect(),M=Math.max(0,-g.top),E=x.offsetHeight-window.innerHeight,C=E>0?Math.min(1,M/E):0;c(C),s(Math.min(al.length-1,Math.floor(C*al.length)))};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>window.removeEventListener("scroll",v)},[]),U.jsxs("section",{id:"craft",className:"craft",children:[U.jsx("div",{className:"wrap",children:U.jsxs("div",{className:"craft-head sec-head reveal",children:[U.jsxs("div",{children:[U.jsx("div",{className:"section-label",children:r.craft.label}),U.jsx("h2",{className:"display sec-title",children:r.craft.title})]}),U.jsx("p",{className:"sec-desc",children:r.craft.desc}),U.jsx("p",{className:"craft-tesseract-hint",children:r.craft.tesseract})]})}),U.jsx("div",{className:"wrap craft-scroll-space",ref:m,children:U.jsxs("div",{className:"craft-sticky-full",children:[U.jsx("div",{className:"craft-scroll-bar",children:U.jsx("div",{className:"craft-scroll-fill",style:{transform:`scaleX(${l})`}})}),U.jsx("img",{src:"/signature.png",alt:"",className:"craft-signature","aria-hidden":"true"}),U.jsx(I2,{step:i}),al.map((p,v)=>U.jsxs("div",{className:`craft-card ${K2[v]} ${i===v?"visible":""}`,children:[U.jsxs("div",{className:"craft-card-num",children:[p.num," / 03"]}),U.jsx("h3",{children:p.title[e]}),U.jsx("p",{children:p.body[e]}),U.jsx("div",{className:"craft-card-stat",children:p.stat[e]})]},v)),al.map((p,v)=>p.photo?p.photo.type==="embed"?U.jsx(J2,{permalink:p.photo.permalink,posClass:p.photo.pos,visible:f&&i===v},`photo-${v}`):U.jsx("div",{className:`craft-photo ${p.photo.pos} ${f&&i===v?"visible":""}`,style:{"--photo-rot":p.photo.rot},children:U.jsx("img",{src:p.photo.src,alt:""})},`photo-${v}`):null),U.jsx("div",{className:"craft-steps-indicator",children:al.map((p,v)=>U.jsx("div",{className:`craft-dot ${i===v?"active":""}`},v))}),U.jsx("button",{className:"craft-media-btn nb-btn",onClick:()=>h(p=>!p),children:f?r.craft.hideMedia:r.craft.showMedia})]})})]})}function e3({t:r}){const[e,i]=nt.useState(0),s=r.paper.slides,l=()=>i(f=>(f-1+s.length)%s.length),c=()=>i(f=>(f+1)%s.length);return U.jsx("section",{id:"paper",className:"paper-section",children:U.jsxs("div",{className:"wrap",children:[U.jsxs("div",{className:"paper-top reveal",children:[U.jsxs("div",{className:"paper-top-text",children:[U.jsx("div",{className:"section-label",children:r.paper.label}),U.jsx("h2",{className:"display sec-title",children:r.paper.title}),U.jsx("p",{className:"sec-desc",children:r.paper.desc})]}),U.jsxs("div",{className:"paper-carousel",children:[U.jsx("div",{className:"paper-carousel-img-wrap",children:U.jsx("img",{src:s[e].src,alt:s[e].caption,className:"paper-carousel-img"},e)}),U.jsx("p",{className:"paper-carousel-caption",children:s[e].caption}),U.jsxs("div",{className:"paper-carousel-nav",children:[U.jsx("button",{className:"paper-nav-btn",onClick:l,"aria-label":"Previous",children:"←"}),U.jsx("div",{className:"paper-carousel-dots",children:s.map((f,h)=>U.jsx("button",{className:`paper-dot${h===e?" active":""}`,onClick:()=>i(h),"aria-label":`Slide ${h+1}`},h))}),U.jsx("button",{className:"paper-nav-btn",onClick:c,"aria-label":"Next",children:"→"})]})]})]}),U.jsxs("div",{className:"paper-card reveal",children:[U.jsxs("div",{className:"paper-card-inner",children:[U.jsx("div",{className:"paper-meta",children:U.jsx("span",{className:"paper-venue nb-pill",children:r.paper.venue})}),U.jsx("div",{className:"paper-tech",children:["Unity 3D","Kinect 2","OpenCV","ESP32","Python"].map((f,h)=>U.jsx("span",{className:"nb-pill",children:f},h))}),U.jsx("a",{href:"https://doi.org/10.1007/978-3-031-50381-8_99",target:"_blank",rel:"noopener noreferrer",className:"nb-btn paper-cta",children:r.paper.cta})]}),U.jsx("div",{className:"paper-visual",children:U.jsxs("div",{className:"paper-visual-inner",children:[U.jsx("div",{className:"paper-doi mono",children:"DOI: 10.1007/978-3-031-50381-8_99"}),U.jsx("div",{className:"paper-year",children:"2023"})]})})]})]})})}function t3({t:r,showToast:e}){const i="albert98.developer@gmail.com",s="+593 992 520 223",l=c=>{navigator.clipboard.writeText(c).then(()=>e(r.contact.copied))};return U.jsx("section",{id:"contact",className:"contact",children:U.jsxs("div",{className:"wrap",children:[U.jsx("div",{className:"section-label contact-label",children:r.contact.label}),U.jsxs("h2",{className:"display contact-title",children:[r.contact.title1,U.jsx("br",{}),U.jsx("span",{className:"accent",children:r.contact.title2})," ",r.contact.title3]}),U.jsx("p",{className:"contact-sub",children:r.contact.sub}),U.jsxs("div",{className:"contact-card",children:[U.jsxs("button",{className:"contact-field",onClick:()=>l(i),children:[U.jsxs("div",{children:[U.jsx("div",{className:"label",children:r.contact.emailLabel}),U.jsx("span",{className:"value",children:i})]}),U.jsxs("span",{className:"copy-hint",children:[r.contact.copyHint," ⎘"]})]}),U.jsxs("button",{className:"contact-field",onClick:()=>l(s),children:[U.jsxs("div",{children:[U.jsx("div",{className:"label",children:r.contact.telLabel}),U.jsx("span",{className:"value",children:s})]}),U.jsxs("span",{className:"copy-hint",children:[r.contact.copyHint," ⎘"]})]})]}),U.jsxs("div",{className:"socials",children:[U.jsx("a",{className:"social-chip",href:"https://github.com/DavidVique1998",target:"_blank",rel:"noreferrer",children:"GitHub ↗"}),U.jsx("a",{className:"social-chip",href:"https://www.linkedin.com/in/david-vique-b29941206",target:"_blank",rel:"noreferrer",children:"LinkedIn ↗"}),U.jsx("a",{className:"social-chip",href:"https://www.instagram.com/david_vique98/",target:"_blank",rel:"noreferrer",children:"Instagram ↗"})]}),U.jsxs("div",{className:"footer-bar",children:[U.jsx("div",{children:"© 2026 David — Ecuador 🇪🇨"}),U.jsx("div",{children:r.contact.foot})]})]})})}function n3(){const[r,e]=nt.useState("en"),[i,s]=nt.useState("light"),[l,c]=nt.useState({show:!1,msg:""}),f=F2[r];G2(),nt.useEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]);const h=v=>{c({show:!0,msg:v}),setTimeout(()=>c({show:!1,msg:v}),1800)},[m,p]=Oy(B2);return nt.useEffect(()=>{if(!m)return;const v=document.documentElement.style;v.setProperty("--primary",m.primary||"#C6F24E"),v.setProperty("--secondary",m.secondary||"#2D1B69"),v.setProperty("--tertiary",m.tertiary||"#FF5A36"),v.setProperty("--border-w",(m.borderW||3)+"px"),v.setProperty("--shadow-off",(m.shadowOff||6)+"px"),v.setProperty("--rot",(m.rot||2)+"deg"),v.setProperty("--display-weight",m.displayWeight||900),m.dark!==void 0&&s(m.dark?"dark":"light")},[m]),U.jsxs(U.Fragment,{children:[U.jsx(k2,{lang:r,setLang:e,t:f,theme:i,setTheme:s}),U.jsx(X2,{t:f}),U.jsx(j2,{t:f,lang:r}),U.jsx(Z2,{t:f,lang:r}),U.jsx(W2,{t:f,lang:r}),U.jsx(q2,{}),U.jsx(Y2,{t:f,lang:r}),U.jsx($2,{t:f,lang:r}),U.jsx(e3,{t:f}),U.jsx(t3,{t:f,showToast:h}),U.jsx("div",{className:`toast ${l.show?"show":""}`,children:l.msg}),U.jsxs(Py,{title:"Tweaks",children:[U.jsx(Ac,{label:"Theme"}),U.jsx(zy,{label:"Dark mode",value:!!m.dark,onChange:v=>p("dark",v)}),U.jsx(Ac,{label:"Colors"}),U.jsx(Nd,{label:"Primary",value:m.primary,onChange:v=>p("primary",v)}),U.jsx(Nd,{label:"Secondary",value:m.secondary,onChange:v=>p("secondary",v)}),U.jsx(Nd,{label:"Tertiary",value:m.tertiary,onChange:v=>p("tertiary",v)}),U.jsx(Ac,{label:"Brutalism"}),U.jsx(Ud,{label:"Border thickness",value:m.borderW,min:1,max:8,step:1,unit:"px",onChange:v=>p("borderW",v)}),U.jsx(Ud,{label:"Shadow offset",value:m.shadowOff,min:0,max:16,step:1,unit:"px",onChange:v=>p("shadowOff",v)}),U.jsx(Ud,{label:"Rotation",value:m.rot,min:0,max:8,step:.5,unit:"°",onChange:v=>p("rot",v)}),U.jsx(Ac,{label:"Type"}),U.jsx(Iy,{label:"Display weight",value:m.displayWeight,options:[400,600,700,800,900],onChange:v=>p("displayWeight",v)})]})]})}Ny.createRoot(document.getElementById("root")).render(U.jsx(nt.StrictMode,{children:U.jsx(n3,{})}));
