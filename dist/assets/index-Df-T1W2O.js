(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rd={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function Ty(){if(gv)return Jo;gv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=e,Jo.jsx=i,Jo.jsxs=i,Jo}var vv;function Ay(){return vv||(vv=1,Rd.exports=Ty()),Rd.exports}var O=Ay(),Dd={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function wy(){if(_v)return st;_v=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function S(I,J,xe){this.props=I,this.context=J,this.refs=y,this.updater=xe||E}S.prototype.isReactComponent={},S.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function A(){}A.prototype=S.prototype;function D(I,J,xe){this.props=I,this.context=J,this.refs=y,this.updater=xe||E}var N=D.prototype=new A;N.constructor=D,R(N,S.prototype),N.isPureReactComponent=!0;var V=Array.isArray;function L(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(I,J,xe){var Ae=xe.ref;return{$$typeof:r,type:I,key:J,ref:Ae!==void 0?Ae:null,props:xe}}function q(I,J){return z(I.type,J,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Q(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xe){return J[xe]})}var ue=/\/+/g;function me(I,J){return typeof I=="object"&&I!==null&&I.key!=null?Q(""+I.key):J.toString(36)}function Y(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function P(I,J,xe,Ae,De){var oe=typeof I;(oe==="undefined"||oe==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(oe){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case r:case e:ye=!0;break;case v:return ye=I._init,P(ye(I._payload),J,xe,Ae,De)}}if(ye)return De=De(I),ye=Ae===""?"."+me(I,0):Ae,V(De)?(xe="",ye!=null&&(xe=ye.replace(ue,"$&/")+"/"),P(De,J,xe,"",function($e){return $e})):De!=null&&(G(De)&&(De=q(De,xe+(De.key==null||I&&I.key===De.key?"":(""+De.key).replace(ue,"$&/")+"/")+ye)),J.push(De)),1;ye=0;var Ee=Ae===""?".":Ae+":";if(V(I))for(var He=0;He<I.length;He++)Ae=I[He],oe=Ee+me(Ae,He),ye+=P(Ae,J,xe,oe,De);else if(He=M(I),typeof He=="function")for(I=He.call(I),He=0;!(Ae=I.next()).done;)Ae=Ae.value,oe=Ee+me(Ae,He++),ye+=P(Ae,J,xe,oe,De);else if(oe==="object"){if(typeof I.then=="function")return P(Y(I),J,xe,Ae,De);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ye}function F(I,J,xe){if(I==null)return I;var Ae=[],De=0;return P(I,Ae,"","",function(oe){return J.call(xe,oe,De++)}),Ae}function ee(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(xe){(I._status===0||I._status===-1)&&(I._status=1,I._result=xe)},function(xe){(I._status===0||I._status===-1)&&(I._status=2,I._result=xe)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var he=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Se={map:F,forEach:function(I,J,xe){F(I,function(){J.apply(this,arguments)},xe)},count:function(I){var J=0;return F(I,function(){J++}),J},toArray:function(I){return F(I,function(J){return J})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return st.Activity=_,st.Children=Se,st.Component=S,st.Fragment=i,st.Profiler=l,st.PureComponent=D,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,st.__COMPILER_RUNTIME={__proto__:null,c:function(I){return B.H.useMemoCache(I)}},st.cache=function(I){return function(){return I.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(I,J,xe){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ae=R({},I.props),De=I.key;if(J!=null)for(oe in J.key!==void 0&&(De=""+J.key),J)!T.call(J,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&J.ref===void 0||(Ae[oe]=J[oe]);var oe=arguments.length-2;if(oe===1)Ae.children=xe;else if(1<oe){for(var ye=Array(oe),Ee=0;Ee<oe;Ee++)ye[Ee]=arguments[Ee+2];Ae.children=ye}return z(I.type,De,Ae)},st.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},st.createElement=function(I,J,xe){var Ae,De={},oe=null;if(J!=null)for(Ae in J.key!==void 0&&(oe=""+J.key),J)T.call(J,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(De[Ae]=J[Ae]);var ye=arguments.length-2;if(ye===1)De.children=xe;else if(1<ye){for(var Ee=Array(ye),He=0;He<ye;He++)Ee[He]=arguments[He+2];De.children=Ee}if(I&&I.defaultProps)for(Ae in ye=I.defaultProps,ye)De[Ae]===void 0&&(De[Ae]=ye[Ae]);return z(I,oe,De)},st.createRef=function(){return{current:null}},st.forwardRef=function(I){return{$$typeof:h,render:I}},st.isValidElement=G,st.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:ee}},st.memo=function(I,J){return{$$typeof:p,type:I,compare:J===void 0?null:J}},st.startTransition=function(I){var J=B.T,xe={};B.T=xe;try{var Ae=I(),De=B.S;De!==null&&De(xe,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,he)}catch(oe){he(oe)}finally{J!==null&&xe.types!==null&&(J.types=xe.types),B.T=J}},st.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},st.use=function(I){return B.H.use(I)},st.useActionState=function(I,J,xe){return B.H.useActionState(I,J,xe)},st.useCallback=function(I,J){return B.H.useCallback(I,J)},st.useContext=function(I){return B.H.useContext(I)},st.useDebugValue=function(){},st.useDeferredValue=function(I,J){return B.H.useDeferredValue(I,J)},st.useEffect=function(I,J){return B.H.useEffect(I,J)},st.useEffectEvent=function(I){return B.H.useEffectEvent(I)},st.useId=function(){return B.H.useId()},st.useImperativeHandle=function(I,J,xe){return B.H.useImperativeHandle(I,J,xe)},st.useInsertionEffect=function(I,J){return B.H.useInsertionEffect(I,J)},st.useLayoutEffect=function(I,J){return B.H.useLayoutEffect(I,J)},st.useMemo=function(I,J){return B.H.useMemo(I,J)},st.useOptimistic=function(I,J){return B.H.useOptimistic(I,J)},st.useReducer=function(I,J,xe){return B.H.useReducer(I,J,xe)},st.useRef=function(I){return B.H.useRef(I)},st.useState=function(I){return B.H.useState(I)},st.useSyncExternalStore=function(I,J,xe){return B.H.useSyncExternalStore(I,J,xe)},st.useTransition=function(){return B.H.useTransition()},st.version="19.2.5",st}var xv;function mp(){return xv||(xv=1,Dd.exports=wy()),Dd.exports}var ot=mp(),Ud={exports:{}},$o={},Nd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function Cy(){return Sv||(Sv=1,(function(r){function e(P,F){var ee=P.length;P.push(F);e:for(;0<ee;){var he=ee-1>>>1,Se=P[he];if(0<l(Se,F))P[he]=F,P[ee]=Se,ee=he;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var F=P[0],ee=P.pop();if(ee!==F){P[0]=ee;e:for(var he=0,Se=P.length,I=Se>>>1;he<I;){var J=2*(he+1)-1,xe=P[J],Ae=J+1,De=P[Ae];if(0>l(xe,ee))Ae<Se&&0>l(De,xe)?(P[he]=De,P[Ae]=ee,he=Ae):(P[he]=xe,P[J]=ee,he=J);else if(Ae<Se&&0>l(De,ee))P[he]=De,P[Ae]=ee,he=Ae;else break e}}return F}function l(P,F){var ee=P.sortIndex-F.sortIndex;return ee!==0?ee:P.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,_=null,g=3,M=!1,E=!1,R=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=P)s(p),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(p)}}function V(P){if(R=!1,N(P),!E)if(i(m)!==null)E=!0,L||(L=!0,Q());else{var F=i(p);F!==null&&Y(V,F.startTime-P)}}var L=!1,B=-1,T=5,z=-1;function q(){return y?!0:!(r.unstable_now()-z<T)}function G(){if(y=!1,L){var P=r.unstable_now();z=P;var F=!0;try{e:{E=!1,R&&(R=!1,A(B),B=-1),M=!0;var ee=g;try{t:{for(N(P),_=i(m);_!==null&&!(_.expirationTime>P&&q());){var he=_.callback;if(typeof he=="function"){_.callback=null,g=_.priorityLevel;var Se=he(_.expirationTime<=P);if(P=r.unstable_now(),typeof Se=="function"){_.callback=Se,N(P),F=!0;break t}_===i(m)&&s(m),N(P)}else s(m);_=i(m)}if(_!==null)F=!0;else{var I=i(p);I!==null&&Y(V,I.startTime-P),F=!1}}break e}finally{_=null,g=ee,M=!1}F=void 0}}finally{F?Q():L=!1}}}var Q;if(typeof D=="function")Q=function(){D(G)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,me=ue.port2;ue.port1.onmessage=G,Q=function(){me.postMessage(null)}}else Q=function(){S(G,0)};function Y(P,F){B=S(function(){P(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(P){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ee=g;g=F;try{return P()}finally{g=ee}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ee=g;g=P;try{return F()}finally{g=ee}},r.unstable_scheduleCallback=function(P,F,ee){var he=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?he+ee:he):ee=he,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,P={id:v++,callback:F,priorityLevel:P,startTime:ee,expirationTime:Se,sortIndex:-1},ee>he?(P.sortIndex=ee,e(p,P),i(m)===null&&P===i(p)&&(R?(A(B),B=-1):R=!0,Y(V,ee-he))):(P.sortIndex=Se,e(m,P),E||M||(E=!0,L||(L=!0,Q()))),P},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(P){var F=g;return function(){var ee=g;g=F;try{return P.apply(this,arguments)}finally{g=ee}}}})(Ld)),Ld}var yv;function Ry(){return yv||(yv=1,Nd.exports=Cy()),Nd.exports}var Od={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function Dy(){if(Mv)return Fn;Mv=1;var r=mp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Fn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.5",Fn}var bv;function Uy(){if(bv)return Od.exports;bv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Od.exports=Dy(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function Ny(){if(Ev)return $o;Ev=1;var r=Ry(),e=mp(),i=Uy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,C=u.child;C;){if(C===a){x=!0,a=u,o=d;break}if(C===o){x=!0,o=u,a=d;break}C=C.sibling}if(!x){for(C=d.child;C;){if(C===a){x=!0,a=d,o=u;break}if(C===o){x=!0,o=d,a=u;break}C=C.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case L:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case A:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var Y=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},he=[],Se=-1;function I(t){return{current:t}}function J(t){0>Se||(t.current=he[Se],he[Se]=null,Se--)}function xe(t,n){Se++,he[Se]=t.current,t.current=n}var Ae=I(null),De=I(null),oe=I(null),ye=I(null);function Ee(t,n){switch(xe(oe,n),xe(De,t),xe(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?F0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=F0(n),t=H0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Ae),xe(Ae,t)}function He(){J(Ae),J(De),J(oe)}function $e(t){t.memoizedState!==null&&xe(ye,t);var n=Ae.current,a=H0(n,t.type);n!==a&&(xe(De,t),xe(Ae,a))}function Qe(t){De.current===t&&(J(Ae),J(De)),ye.current===t&&(J(ye),Yo._currentValue=ee)}var jt,pt;function yt(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+pt}var Lt=!1;function ft(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var re=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){re=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){re=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&re&&typeof le.stack=="string")return[le.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],C=d[1];if(x&&C){var H=x.split(`
`),ne=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===ne.length)for(o=H.length-1,u=ne.length-1;1<=o&&0<=u&&H[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==ne[u]){var de=`
`+H[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?yt(a):""}function ln(t,n){switch(t.tag){case 26:case 27:case 5:return yt(t.type);case 16:return yt("Lazy");case 13:return t.child!==n&&n!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return yt("Activity");default:return""}}function Zt(t){try{var n="",a=null;do n+=ln(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tn=Object.prototype.hasOwnProperty,W=r.unstable_scheduleCallback,nn=r.unstable_cancelCallback,mt=r.unstable_shouldYield,Gt=r.unstable_requestPaint,we=r.unstable_now,Jt=r.unstable_getCurrentPriorityLevel,U=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,ve=r.unstable_LowPriority,be=r.unstable_IdlePriority,Ce=r.log,Le=r.unstable_setDisableYieldValue,ce=null,fe=null;function Oe(t){if(typeof Ce=="function"&&Le(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ce,t)}catch{}}var Pe=Math.clz32?Math.clz32:it,Ue=Math.log,Re=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Ue(t)/Re|0)|0}var at=256,gt=262144,k=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=Te(o):(x&=C,x!==0?u=Te(x):a||(a=C&~t,a!==0&&(u=Te(a))))):(C=o&~d,C!==0?u=Te(C):x!==0?u=Te(x):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Fe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function tt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,H=t.expirationTimes,ne=t.hiddenUpdates;for(a=x&~a;0<a;){var de=31-Pe(a),_e=1<<de;C[de]=0,H[de]=-1;var re=ne[de];if(re!==null)for(ne[de]=null,de=0;de<re.length;de++){var le=re[de];le!==null&&(le.lane&=-536870913)}a&=~_e}o!==0&&Dt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Dt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function xi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ii(t,n){var a=n&-n;return a=(a&42)!==0?1:_s(a),(a&(t.suspendedLanes|n))!==0?0:a}function _s(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function so(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ro(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:cv(t.type))}function oo(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var In=Math.random().toString(36).slice(2),cn="__reactFiber$"+In,An="__reactProps$"+In,aa="__reactContainer$"+In,Ua="__reactEvents$"+In,gl="__reactListeners$"+In,Qs="__reactHandles$"+In,lo="__reactResources$"+In,Na="__reactMarker$"+In;function co(t){delete t[cn],delete t[An],delete t[Ua],delete t[gl],delete t[Qs]}function La(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[aa]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=q0(t);t!==null;){if(a=t[cn])return a;t=q0(t)}return n}t=a,a=t.parentNode}return null}function Oa(t){if(t=t[cn]||t[aa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Pa(t){var n=t[lo];return n||(n=t[lo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Na]=!0}var vl=new Set,w={};function Z(t,n){se(t,n),se(t+"Capture",n)}function se(t,n){for(w[t]=n,t=0;t<n.length;t++)vl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Be={};function Ve(t){return Tn.call(Be,t)?!0:Tn.call(ae,t)?!1:ie.test(t)?Be[t]=!0:(ae[t]=!0,!1)}function ze(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function wt(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function $t(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,o,u,d,x,C){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?vt(t,x,Ze(n)):a!=null?vt(t,x,Ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ze(C):t.removeAttribute("name")}function Bn(t,n,a,o,u,d,x,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){wt(t);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),wt(t)}function vt(t,n,a){n==="number"&&Wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ai(t,n,a){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ze(a):""}function Ni(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Y(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),wt(t)}function si(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function en(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Li(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&en(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&en(t,d,n[d])}function Nt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ss(t){return za.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sa(){}var Tu=null;function Au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Js=null,$s=null;function Bp(t){var n=Oa(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&$t(o)}break e;case"textarea":ai(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var wu=!1;function Fp(t,n,a){if(wu)return t(n,a);wu=!0;try{var o=t(n);return o}finally{if(wu=!1,(Js!==null||$s!==null)&&(ac(),Js&&(n=Js,t=$s,$s=Js=null,Bp(n),t)))for(n=0;n<t.length;n++)Bp(t[n])}}function uo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(ra)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Cu=!1}var Ia=null,Ru=null,_l=null;function Hp(){if(_l)return _l;var t,n=Ru,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function Gp(){return!1}function Yn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Sl:Gp,this.isPropagationStopped=Gp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),n}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Yn(ys),ho=_({},ys,{view:0,detail:0}),bx=Yn(ho),Du,Uu,po,Ml=_({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Du=t.screenX-po.screenX,Uu=t.screenY-po.screenY):Uu=Du=0,po=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),Vp=Yn(Ml),Ex=_({},Ml,{dataTransfer:0}),Tx=Yn(Ex),Ax=_({},ho,{relatedTarget:0}),Nu=Yn(Ax),wx=_({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=Yn(wx),Rx=_({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dx=Yn(Rx),Ux=_({},ys,{data:0}),kp=Yn(Ux),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ox[t])?!!n[t]:!1}function Lu(){return Px}var zx=_({},ho,{key:function(t){if(t.key){var n=Nx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ix=Yn(zx),Bx=_({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Yn(Bx),Fx=_({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Hx=Yn(Fx),Gx=_({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=Yn(Gx),kx=_({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=Yn(kx),jx=_({},ys,{newState:0,oldState:0}),Wx=Yn(jx),qx=[9,13,27,32],Ou=ra&&"CompositionEvent"in window,mo=null;ra&&"documentMode"in document&&(mo=document.documentMode);var Yx=ra&&"TextEvent"in window&&!mo,jp=ra&&(!Ou||mo&&8<mo&&11>=mo),Wp=" ",qp=!1;function Yp(t,n){switch(t){case"keyup":return qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var er=!1;function Zx(t,n){switch(t){case"compositionend":return Zp(n);case"keypress":return n.which!==32?null:(qp=!0,Wp);case"textInput":return t=n.data,t===Wp&&qp?null:t;default:return null}}function Kx(t,n){if(er)return t==="compositionend"||!Ou&&Yp(t,n)?(t=Hp(),_l=Ru=Ia=null,er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jp&&n.locale!=="ko"?null:n.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Qx[t.type]:n==="textarea"}function Qp(t,n,a,o){Js?$s?$s.push(o):$s=[o]:Js=o,n=fc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var go=null,vo=null;function Jx(t){L0(t,0)}function bl(t){var n=xs(t);if($t(n))return t}function Jp(t,n){if(t==="change")return n}var $p=!1;if(ra){var Pu;if(ra){var zu="oninput"in document;if(!zu){var em=document.createElement("div");em.setAttribute("oninput","return;"),zu=typeof em.oninput=="function"}Pu=zu}else Pu=!1;$p=Pu&&(!document.documentMode||9<document.documentMode)}function tm(){go&&(go.detachEvent("onpropertychange",nm),vo=go=null)}function nm(t){if(t.propertyName==="value"&&bl(vo)){var n=[];Qp(n,vo,t,Au(t)),Fp(Jx,n)}}function $x(t,n,a){t==="focusin"?(tm(),go=n,vo=a,go.attachEvent("onpropertychange",nm)):t==="focusout"&&tm()}function eS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(vo)}function tS(t,n){if(t==="click")return bl(n)}function nS(t,n){if(t==="input"||t==="change")return bl(n)}function iS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:iS;function _o(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tn.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,n){var a=im(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=im(a)}}function sm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Wt(t.document)}return n}function Iu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var aS=ra&&"documentMode"in document&&11>=document.documentMode,tr=null,Bu=null,xo=null,Fu=!1;function om(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||tr==null||tr!==Wt(o)||(o=tr,"selectionStart"in o&&Iu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&_o(xo,o)||(xo=o,o=fc(Bu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=tr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var nr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Hu={},lm={};ra&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete nr.animationend.animation,delete nr.animationiteration.animation,delete nr.animationstart.animation),"TransitionEvent"in window||delete nr.transitionend.transition);function bs(t){if(Hu[t])return Hu[t];if(!nr[t])return t;var n=nr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in lm)return Hu[t]=n[a];return t}var cm=bs("animationend"),um=bs("animationiteration"),fm=bs("animationstart"),sS=bs("transitionrun"),rS=bs("transitionstart"),oS=bs("transitioncancel"),dm=bs("transitionend"),hm=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Oi(t,n){hm.set(t,n),Z(n,[t])}var El=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],ir=0,Vu=0;function Tl(){for(var t=ir,n=Vu=ir=0;n<t;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var d=Si[n];if(Si[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&pm(a,u,d)}}function Al(t,n,a,o){Si[ir++]=t,Si[ir++]=n,Si[ir++]=a,Si[ir++]=o,Vu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function ku(t,n,a,o){return Al(t,n,a,o),wl(t)}function Es(t,n){return Al(t,null,null,n),wl(t)}function pm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function wl(t){if(50<Go)throw Go=0,$f=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ar={};function lS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,n,a,o){return new lS(t,n,a,o)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=oi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Xu(t)&&(x=1);else if(typeof t=="string")x=hy(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case z:return t=oi(31,a,n,u),t.elementType=z,t.lanes=d,t;case R:return Ts(a.children,u,d,n);case y:x=8,u|=24;break;case S:return t=oi(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case V:return t=oi(13,a,n,u),t.elementType=V,t.lanes=d,t;case L:return t=oi(19,a,n,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:x=10;break e;case A:x=9;break e;case N:x=11;break e;case B:x=14;break e;case T:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=oi(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ts(t,n,a,o){return t=oi(7,t,o,n),t.lanes=a,t}function ju(t,n,a){return t=oi(6,t,null,n),t.lanes=a,t}function gm(t){var n=oi(18,null,null,0);return n.stateNode=t,n}function Wu(t,n,a){return n=oi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vm=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=vm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Zt(n)},vm.set(t,n),n)}return{value:t,source:n,stack:Zt(n)}}var sr=[],rr=0,Rl=null,So=0,Mi=[],bi=0,Ba=null,ki=1,Xi="";function la(t,n){sr[rr++]=So,sr[rr++]=Rl,Rl=t,So=n}function _m(t,n,a){Mi[bi++]=ki,Mi[bi++]=Xi,Mi[bi++]=Ba,Ba=t;var o=ki;t=Xi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var d=32-Pe(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,ki=1<<32-Pe(n)+u|a<<u|o,Xi=d+t}else ki=1<<d|a<<u|o,Xi=t}function qu(t){t.return!==null&&(la(t,1),_m(t,1,0))}function Yu(t){for(;t===Rl;)Rl=sr[--rr],sr[rr]=null,So=sr[--rr],sr[rr]=null;for(;t===Ba;)Ba=Mi[--bi],Mi[bi]=null,Xi=Mi[--bi],Mi[bi]=null,ki=Mi[--bi],Mi[bi]=null}function xm(t,n){Mi[bi++]=ki,Mi[bi++]=Xi,Mi[bi++]=Ba,ki=n.id,Xi=n.overflow,Ba=t}var wn=null,Kt=null,Et=!1,Fa=null,Ei=!1,Zu=Error(s(519));function Ha(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(yi(n,t)),Zu}function Sm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[An]=o,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<ko.length;a++)xt(ko[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||I0(n.textContent,a)?(o.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),o.onScroll!=null&&xt("scroll",n),o.onScrollEnd!=null&&xt("scrollend",n),o.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Ha(t,!0)}function ym(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:wn=wn.return}}function or(t){if(t!==wn)return!1;if(!Et)return ym(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||pd(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ha(t),ym(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=W0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=W0(t)}else n===27?(n=Kt,es(t.type)?(t=xd,xd=null,Kt=t):Kt=n):Kt=wn?Ai(t.stateNode.nextSibling):null;return!0}function As(){Kt=wn=null,Et=!1}function Ku(){var t=Fa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Fa=null),t}function yo(t){Fa===null?Fa=[t]:Fa.push(t)}var Qu=I(null),ws=null,ca=null;function Ga(t,n,a){xe(Qu,n._currentValue),n._currentValue=a}function ua(t){t._currentValue=Qu.current,J(Qu)}function Ju(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function $u(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){d.lanes|=a,C=d.alternate,C!==null&&(C.lanes|=a),Ju(d.return,a,t),o||(x=null);break e}d=C.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Ju(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function lr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var C=u.type;ri(u.pendingProps.value,x.value)||(t!==null?t.push(C):t=[C])}}else if(u===ye.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}u=u.return}t!==null&&$u(n,t,a,o),n.flags|=262144}function Dl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cs(t){ws=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Mm(ws,t)}function Ul(t,n){return ws===null&&Cs(t),Mm(t,n)}function Mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(s(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var cS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},uS=r.unstable_scheduleCallback,fS=r.unstable_NormalPriority,pn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new cS,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&uS(fS,function(){t.controller.abort()})}var bo=null,tf=0,cr=0,ur=null;function dS(t,n){if(bo===null){var a=bo=[];tf=0,cr=sd(),ur={status:"pending",value:void 0,then:function(o){a.push(o)}}}return tf++,n.then(bm,bm),n}function bm(){if(--tf===0&&bo!==null){ur!==null&&(ur.status="fulfilled");var t=bo;bo=null,cr=0,ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function hS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Em=P.S;P.S=function(t,n){o0=we(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dS(t,n),Em!==null&&Em(t,n)};var Rs=I(null);function nf(){var t=Rs.current;return t!==null?t:qt.pooledCache}function Nl(t,n){n===null?xe(Rs,Rs.current):xe(Rs,n.pool)}function Tm(){var t=nf();return t===null?null:{parent:pn._currentValue,pool:t}}var fr=Error(s(460)),af=Error(s(474)),Ll=Error(s(542)),Ol={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rm(t),t;default:if(typeof n.status=="string")n.then(sa,sa);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Rm(t),t}throw Us=n,fr}}function Ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,fr):a}}var Us=null;function Cm(){if(Us===null)throw Error(s(459));var t=Us;return Us=null,t}function Rm(t){if(t===fr||t===Ll)throw Error(s(483))}var dr=null,Eo=0;function Pl(t){var n=Eo;return Eo+=1,dr===null&&(dr=[]),wm(dr,t,n)}function To(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dm(t){function n(K,X){if(t){var te=K.deletions;te===null?(K.deletions=[X],K.flags|=16):te.push(X)}}function a(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=oa(K,X),K.index=0,K.sibling=null,K}function d(K,X,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<X?(K.flags|=67108866,X):te):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function C(K,X,te,ge){return X===null||X.tag!==6?(X=ju(te,K.mode,ge),X.return=K,X):(X=u(X,te),X.return=K,X)}function H(K,X,te,ge){var Ke=te.type;return Ke===R?de(K,X,te.props.children,ge,te.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&Ds(Ke)===X.type)?(X=u(X,te.props),To(X,te),X.return=K,X):(X=Cl(te.type,te.key,te.props,null,K.mode,ge),To(X,te),X.return=K,X)}function ne(K,X,te,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Wu(te,K.mode,ge),X.return=K,X):(X=u(X,te.children||[]),X.return=K,X)}function de(K,X,te,ge,Ke){return X===null||X.tag!==7?(X=Ts(te,K.mode,ge,Ke),X.return=K,X):(X=u(X,te),X.return=K,X)}function _e(K,X,te){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=ju(""+X,K.mode,te),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return te=Cl(X.type,X.key,X.props,null,K.mode,te),To(te,X),te.return=K,te;case E:return X=Wu(X,K.mode,te),X.return=K,X;case T:return X=Ds(X),_e(K,X,te)}if(Y(X)||Q(X))return X=Ts(X,K.mode,te,null),X.return=K,X;if(typeof X.then=="function")return _e(K,Pl(X),te);if(X.$$typeof===D)return _e(K,Ul(K,X),te);zl(K,X)}return null}function re(K,X,te,ge){var Ke=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Ke!==null?null:C(K,X,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case M:return te.key===Ke?H(K,X,te,ge):null;case E:return te.key===Ke?ne(K,X,te,ge):null;case T:return te=Ds(te),re(K,X,te,ge)}if(Y(te)||Q(te))return Ke!==null?null:de(K,X,te,ge,null);if(typeof te.then=="function")return re(K,X,Pl(te),ge);if(te.$$typeof===D)return re(K,X,Ul(K,te),ge);zl(K,te)}return null}function le(K,X,te,ge,Ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return K=K.get(te)||null,C(X,K,""+ge,Ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return K=K.get(ge.key===null?te:ge.key)||null,H(X,K,ge,Ke);case E:return K=K.get(ge.key===null?te:ge.key)||null,ne(X,K,ge,Ke);case T:return ge=Ds(ge),le(K,X,te,ge,Ke)}if(Y(ge)||Q(ge))return K=K.get(te)||null,de(X,K,ge,Ke,null);if(typeof ge.then=="function")return le(K,X,te,Pl(ge),Ke);if(ge.$$typeof===D)return le(K,X,te,Ul(X,ge),Ke);zl(X,ge)}return null}function je(K,X,te,ge){for(var Ke=null,Ct=null,qe=X,dt=X=0,bt=null;qe!==null&&dt<te.length;dt++){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var Rt=re(K,qe,te[dt],ge);if(Rt===null){qe===null&&(qe=bt);break}t&&qe&&Rt.alternate===null&&n(K,qe),X=d(Rt,X,dt),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt,qe=bt}if(dt===te.length)return a(K,qe),Et&&la(K,dt),Ke;if(qe===null){for(;dt<te.length;dt++)qe=_e(K,te[dt],ge),qe!==null&&(X=d(qe,X,dt),Ct===null?Ke=qe:Ct.sibling=qe,Ct=qe);return Et&&la(K,dt),Ke}for(qe=o(qe);dt<te.length;dt++)bt=le(qe,K,dt,te[dt],ge),bt!==null&&(t&&bt.alternate!==null&&qe.delete(bt.key===null?dt:bt.key),X=d(bt,X,dt),Ct===null?Ke=bt:Ct.sibling=bt,Ct=bt);return t&&qe.forEach(function(ss){return n(K,ss)}),Et&&la(K,dt),Ke}function Je(K,X,te,ge){if(te==null)throw Error(s(151));for(var Ke=null,Ct=null,qe=X,dt=X=0,bt=null,Rt=te.next();qe!==null&&!Rt.done;dt++,Rt=te.next()){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var ss=re(K,qe,Rt.value,ge);if(ss===null){qe===null&&(qe=bt);break}t&&qe&&ss.alternate===null&&n(K,qe),X=d(ss,X,dt),Ct===null?Ke=ss:Ct.sibling=ss,Ct=ss,qe=bt}if(Rt.done)return a(K,qe),Et&&la(K,dt),Ke;if(qe===null){for(;!Rt.done;dt++,Rt=te.next())Rt=_e(K,Rt.value,ge),Rt!==null&&(X=d(Rt,X,dt),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt);return Et&&la(K,dt),Ke}for(qe=o(qe);!Rt.done;dt++,Rt=te.next())Rt=le(qe,K,dt,Rt.value,ge),Rt!==null&&(t&&Rt.alternate!==null&&qe.delete(Rt.key===null?dt:Rt.key),X=d(Rt,X,dt),Ct===null?Ke=Rt:Ct.sibling=Rt,Ct=Rt);return t&&qe.forEach(function(Ey){return n(K,Ey)}),Et&&la(K,dt),Ke}function Xt(K,X,te,ge){if(typeof te=="object"&&te!==null&&te.type===R&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case M:e:{for(var Ke=te.key;X!==null;){if(X.key===Ke){if(Ke=te.type,Ke===R){if(X.tag===7){a(K,X.sibling),ge=u(X,te.props.children),ge.return=K,K=ge;break e}}else if(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===T&&Ds(Ke)===X.type){a(K,X.sibling),ge=u(X,te.props),To(ge,te),ge.return=K,K=ge;break e}a(K,X);break}else n(K,X);X=X.sibling}te.type===R?(ge=Ts(te.props.children,K.mode,ge,te.key),ge.return=K,K=ge):(ge=Cl(te.type,te.key,te.props,null,K.mode,ge),To(ge,te),ge.return=K,K=ge)}return x(K);case E:e:{for(Ke=te.key;X!==null;){if(X.key===Ke)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(K,X.sibling),ge=u(X,te.children||[]),ge.return=K,K=ge;break e}else{a(K,X);break}else n(K,X);X=X.sibling}ge=Wu(te,K.mode,ge),ge.return=K,K=ge}return x(K);case T:return te=Ds(te),Xt(K,X,te,ge)}if(Y(te))return je(K,X,te,ge);if(Q(te)){if(Ke=Q(te),typeof Ke!="function")throw Error(s(150));return te=Ke.call(te),Je(K,X,te,ge)}if(typeof te.then=="function")return Xt(K,X,Pl(te),ge);if(te.$$typeof===D)return Xt(K,X,Ul(K,te),ge);zl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,X!==null&&X.tag===6?(a(K,X.sibling),ge=u(X,te),ge.return=K,K=ge):(a(K,X),ge=ju(te,K.mode,ge),ge.return=K,K=ge),x(K)):a(K,X)}return function(K,X,te,ge){try{Eo=0;var Ke=Xt(K,X,te,ge);return dr=null,Ke}catch(qe){if(qe===fr||qe===Ll)throw qe;var Ct=oi(29,qe,null,K.mode);return Ct.lanes=ge,Ct.return=K,Ct}finally{}}}var Ns=Dm(!0),Um=Dm(!1),Va=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=wl(t),pm(t,null,a),n}return Al(t,o,n,a),wl(t)}function Ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,xi(t,a)}}function of(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var lf=!1;function wo(){if(lf){var t=ur;if(t!==null)throw t}}function Co(t,n,a,o){lf=!1;var u=t.updateQueue;Va=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,ne=H.next;H.next=null,x===null?d=ne:x.next=ne,x=H;var de=t.alternate;de!==null&&(de=de.updateQueue,C=de.lastBaseUpdate,C!==x&&(C===null?de.firstBaseUpdate=ne:C.next=ne,de.lastBaseUpdate=H))}if(d!==null){var _e=u.baseState;x=0,de=ne=H=null,C=d;do{var re=C.lane&-536870913,le=re!==C.lane;if(le?(Mt&re)===re:(o&re)===re){re!==0&&re===cr&&(lf=!0),de!==null&&(de=de.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var je=t,Je=C;re=n;var Xt=a;switch(Je.tag){case 1:if(je=Je.payload,typeof je=="function"){_e=je.call(Xt,_e,re);break e}_e=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Je.payload,re=typeof je=="function"?je.call(Xt,_e,re):je,re==null)break e;_e=_({},_e,re);break e;case 2:Va=!0}}re=C.callback,re!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[re]:le.push(re))}else le={lane:re,tag:C.tag,payload:C.payload,callback:C.callback,next:null},de===null?(ne=de=le,H=_e):de=de.next=le,x|=re;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;le=C,C=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=ne,u.lastBaseUpdate=de,d===null&&(u.shared.lanes=0),Za|=x,t.lanes=x,t.memoizedState=_e}}function Nm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Lm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Nm(a[t],n)}var hr=I(null),Il=I(0);function Om(t,n){t=xa,xe(Il,t),xe(hr,n),xa=t|n.baseLanes}function cf(){xe(Il,xa),xe(hr,hr.current)}function uf(){xa=Il.current,J(hr),J(Il)}var li=I(null),Ti=null;function ja(t){var n=t.alternate;xe(un,un.current&1),xe(li,t),Ti===null&&(n===null||hr.current!==null||n.memoizedState!==null)&&(Ti=t)}function ff(t){xe(un,un.current),xe(li,t),Ti===null&&(Ti=t)}function Pm(t){t.tag===22?(xe(un,un.current),xe(li,t),Ti===null&&(Ti=t)):Wa()}function Wa(){xe(un,un.current),xe(li,li.current)}function ci(t){J(li),Ti===t&&(Ti=null),J(un)}var un=I(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vd(a)||_d(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,ct=null,Vt=null,mn=null,Fl=!1,pr=!1,Ls=!1,Hl=0,Ro=0,mr=null,pS=0;function rn(){throw Error(s(321))}function df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function hf(t,n,a,o,u,d){return fa=d,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?_g:Cf,Ls=!1,d=a(o,u),Ls=!1,pr&&(d=Im(n,a,o,u)),zm(t),d}function zm(t){P.H=No;var n=Vt!==null&&Vt.next!==null;if(fa=0,mn=Vt=ct=null,Fl=!1,Ro=0,mr=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&Dl(t)&&(gn=!0))}function Im(t,n,a,o){ct=t;var u=0;do{if(pr&&(mr=null),Ro=0,pr=!1,25<=u)throw Error(s(301));if(u+=1,mn=Vt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=xg,d=n(a,o)}while(pr);return d}function mS(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(ct.flags|=1024),n}function pf(){var t=Hl!==0;return Hl=0,t}function mf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function gf(t){if(Fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Fl=!1}fa=0,mn=Vt=ct=null,pr=!1,Ro=Hl=0,mr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ct.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Vt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=mn===null?ct.memoizedState:mn.next;if(n!==null)mn=n,Vt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},mn===null?ct.memoizedState=mn=t:mn=mn.next=t}return mn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=Ro;return Ro+=1,mr===null&&(mr=[]),t=wm(mr,t,n),n=ct,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?_g:Cf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===D)return Cn(t)}throw Error(s(438,String(t)))}function vf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Gl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function kl(t){var n=fn();return _f(n,Vt,t)}function _f(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var C=x=null,H=null,ne=n,de=!1;do{var _e=ne.lane&-536870913;if(_e!==ne.lane?(Mt&_e)===_e:(fa&_e)===_e){var re=ne.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),_e===cr&&(de=!0);else if((fa&re)===re){ne=ne.next,re===cr&&(de=!0);continue}else _e={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=_e,x=d):H=H.next=_e,ct.lanes|=re,Za|=re;_e=ne.action,Ls&&a(d,_e),d=ne.hasEagerState?ne.eagerState:a(d,_e)}else re={lane:_e,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},H===null?(C=H=re,x=d):H=H.next=re,ct.lanes|=_e,Za|=_e;ne=ne.next}while(ne!==null&&ne!==n);if(H===null?x=d:H.next=C,!ri(d,t.memoizedState)&&(gn=!0,de&&(a=ur,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=H,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);ri(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Bm(t,n,a){var o=ct,u=fn(),d=Et;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ri((Vt||u).memoizedState,a);if(x&&(u.memoizedState=a,gn=!0),u=u.queue,Mf(Gm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,gr(9,{destroy:void 0},Hm.bind(null,o,u,a,n),null),qt===null)throw Error(s(349));d||(fa&127)!==0||Fm(o,n,a)}return a}function Fm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Gl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hm(t,n,a,o){n.value=a,n.getSnapshot=o,Vm(n)&&km(t)}function Gm(t,n,a){return a(function(){Vm(n)&&km(t)})}function Vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function km(t){var n=Es(t,2);n!==null&&$n(n,t,2)}function Sf(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ls){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Xm(t,n,a,o){return t.baseState=a,_f(t,Vt,typeof o=="function"?o:da)}function gS(t,n,a,o,u){if(Wl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,jm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function jm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,x={};P.T=x;try{var C=a(u,o),H=P.S;H!==null&&H(x,C),Wm(t,n,C)}catch(ne){yf(t,n,ne)}finally{d!==null&&x.types!==null&&(d.types=x.types),P.T=d}}else try{d=a(u,o),Wm(t,n,d)}catch(ne){yf(t,n,ne)}}function Wm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){qm(t,n,o)},function(o){return yf(t,n,o)}):qm(t,n,a)}function qm(t,n,a){n.status="fulfilled",n.value=a,Ym(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,jm(t,a)))}function yf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ym(n),n=n.next;while(n!==o)}t.action=null}function Ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zm(t,n){return n}function Km(t,n){if(Et){var a=qt.formState;if(a!==null){e:{var o=ct;if(Et){if(Kt){t:{for(var u=Kt,d=Ei;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ai(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=Ai(u.nextSibling),o=u.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:n},a.queue=o,a=mg.bind(null,ct,o),o.dispatch=a,o=Sf(!1),d=wf.bind(null,ct,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=gS.bind(null,ct,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Qm(t){var n=fn();return Jm(n,Vt,t)}function Jm(t,n,a){if(n=_f(t,n,Zm)[0],t=kl(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Do(n)}catch(x){throw x===fr?Ll:x}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,gr(9,{destroy:void 0},vS.bind(null,u,a),null)),[o,d,t]}function vS(t,n){t.action=n}function $m(t){var n=fn(),a=Vt;if(a!==null)return Jm(n,a,t);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function gr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Gl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function eg(){return fn().memoizedState}function Xl(t,n,a,o){var u=kn();ct.flags|=t,u.memoizedState=gr(1|n,{destroy:void 0},a,o===void 0?null:o)}function jl(t,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Vt!==null&&o!==null&&df(o,Vt.memoizedState.deps)?u.memoizedState=gr(n,d,a,o):(ct.flags|=t,u.memoizedState=gr(1|n,d,a,o))}function tg(t,n){Xl(8390656,8,t,n)}function Mf(t,n){jl(2048,8,t,n)}function _S(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Gl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ng(t){var n=fn().memoizedState;return _S({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ig(t,n){return jl(4,2,t,n)}function ag(t,n){return jl(4,4,t,n)}function sg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rg(t,n,a){a=a!=null?a.concat([t]):null,jl(4,4,sg.bind(null,n,t),a)}function bf(){}function og(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&df(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function lg(t,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&df(n,o[1]))return o[0];if(o=t(),Ls){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function Ef(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Mt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=c0(),ct.lanes|=t,Za|=t,a)}function cg(t,n,a,o){return ri(a,n)?a:hr.current!==null?(t=Ef(t,a,o),ri(t,n)||(gn=!0),t):(fa&42)===0||(fa&1073741824)!==0&&(Mt&261930)===0?(gn=!0,t.memoizedState=a):(t=c0(),ct.lanes|=t,Za|=t,n)}function ug(t,n,a,o,u){var d=F.p;F.p=d!==0&&8>d?d:8;var x=P.T,C={};P.T=C,wf(t,!1,n,a);try{var H=u(),ne=P.S;if(ne!==null&&ne(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=hS(H,o);Uo(t,n,de,di(t))}else Uo(t,n,o,di(t))}catch(_e){Uo(t,n,{then:function(){},status:"rejected",reason:_e},di())}finally{F.p=d,x!==null&&C.types!==null&&(x.types=C.types),P.T=x}}function xS(){}function Tf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=fg(t).queue;ug(t,u,n,ee,a===null?xS:function(){return dg(t),a(o)})}function fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dg(t){var n=fg(t);n.next===null&&(n=t.alternate.memoizedState),Uo(t,n.next.queue,{},di())}function Af(){return Cn(Yo)}function hg(){return fn().memoizedState}function pg(){return fn().memoizedState}function SS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();t=ka(a);var o=Xa(n,t,a);o!==null&&($n(o,n,a),Ao(o,n,a)),n={cache:ef()},t.payload=n;return}n=n.return}}function yS(t,n,a){var o=di();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(t)?gg(n,a):(a=ku(t,n,a,o),a!==null&&($n(a,t,o),vg(a,n,o)))}function mg(t,n,a){var o=di();Uo(t,n,a,o)}function Uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))gg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,C=d(x,a);if(u.hasEagerState=!0,u.eagerState=C,ri(C,x))return Al(t,n,u,0),qt===null&&Tl(),!1}catch{}finally{}if(a=ku(t,n,u,o),a!==null)return $n(a,t,o),vg(a,n,o),!0}return!1}function wf(t,n,a,o){if(o={lane:2,revertLane:sd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(s(479))}else n=ku(t,a,o,2),n!==null&&$n(n,t,2)}function Wl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function gg(t,n){pr=Fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,xi(t,a)}}var No={readContext:Cn,use:Vl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};No.useEffectEvent=rn;var _g={readContext:Cn,use:Vl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:tg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,sg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var o=t();if(Ls){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=kn();if(a!==void 0){var u=a(n);if(Ls){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=yS.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=Sf(t);var n=t.queue,a=mg.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(t,n){var a=kn();return Ef(a,t,n)},useTransition:function(){var t=Sf(!1);return t=ug.bind(null,ct,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=kn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(Mt&127)!==0||Fm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,tg(Gm.bind(null,o,d,t),[t]),o.flags|=2048,gr(9,{destroy:void 0},Hm.bind(null,o,d,a,n),null),a},useId:function(){var t=kn(),n=qt.identifierPrefix;if(Et){var a=Xi,o=ki;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=pS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Af,useFormState:Km,useActionState:Km,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:vf,useCacheRefresh:function(){return kn().memoizedState=SS.bind(null,ct)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:Cn,use:Vl,useCallback:og,useContext:Cn,useEffect:Mf,useImperativeHandle:rg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:kl,useRef:eg,useState:function(){return kl(da)},useDebugValue:bf,useDeferredValue:function(t,n){var a=fn();return cg(a,Vt.memoizedState,t,n)},useTransition:function(){var t=kl(da)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Af,useFormState:Qm,useActionState:Qm,useOptimistic:function(t,n){var a=fn();return Xm(a,Vt,t,n)},useMemoCache:vf,useCacheRefresh:pg};Cf.useEffectEvent=ng;var xg={readContext:Cn,use:Vl,useCallback:og,useContext:Cn,useEffect:Mf,useImperativeHandle:rg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:xf,useRef:eg,useState:function(){return xf(da)},useDebugValue:bf,useDeferredValue:function(t,n){var a=fn();return Vt===null?Ef(a,t,n):cg(a,Vt.memoizedState,t,n)},useTransition:function(){var t=xf(da)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Af,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var a=fn();return Vt!==null?Xm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:pg};xg.useEffectEvent=ng;function Rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Df={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=di(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&($n(n,t,o),Ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=di(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,o),n!==null&&($n(n,t,o),Ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=di(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(t,o,a),n!==null&&($n(n,t,a),Ao(n,t,a))}};function Sg(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!_o(a,o)||!_o(u,d):!0}function yg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Df.enqueueReplaceState(n,n.state,null)}function Os(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Mg(t){El(t)}function bg(t){console.error(t)}function Eg(t){El(t)}function ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Tg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(t,n)},a}function Ag(t){return t=ka(t),t.tag=3,t}function wg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Tg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Tg(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function MS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lr(n,a,u,!0),a=li.current,a!==null){switch(a.tag){case 31:case 13:return Ti===null?sc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),nd(t,o,u)),!1;case 22:return a.flags|=65536,o===Ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),nd(t,o,u)),!1}throw Error(s(435,a.tag))}return nd(t,o,u),sc(),!1}if(Et)return n=li.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Zu&&(t=Error(s(422),{cause:o}),yo(yi(t,a)))):(o!==Zu&&(n=Error(s(423),{cause:o}),yo(yi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=yi(o,a),u=Uf(t.stateNode,o,u),of(t,u),on!==4&&(on=2)),!1;var d=Error(s(520),{cause:o});if(d=yi(d,a),Ho===null?Ho=[d]:Ho.push(d),on!==4&&(on=2),n===null)return!0;o=yi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Uf(a.stateNode,o,t),of(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ka===null||!Ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ag(u),wg(u,t,a,o),of(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(s(461)),gn=!1;function Rn(t,n,a,o){n.child=t===null?Um(n,null,a,o):Ns(n,t.child,a,o)}function Cg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var C in o)C!=="ref"&&(x[C]=o[C])}else x=o;return Cs(n),o=hf(t,n,a,x,d,u),C=pf(),t!==null&&!gn?(mf(t,n,u),ha(t,n,u)):(Et&&C&&qu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Rg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Xu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Dg(t,n,d,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Hf(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(x,o)&&t.ref===n.ref)return ha(t,n,u)}return n.flags|=1,t=oa(d,o),t.ref=n.ref,t.return=n,n.child=t}function Dg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(_o(d,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=d,Hf(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,ha(t,n,u)}return Lf(t,n,a,o,u)}function Ug(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Ng(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Om(n,d):cf(),Pm(n);else return o=n.lanes=536870912,Ng(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Om(n,d),Wa(),n.memoizedState=null):(t!==null&&Nl(n,null),cf(),Wa());return Rn(t,n,u,a),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ng(t,n,a,o,u){var d=nf();return d=d===null?null:{parent:pn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),cf(),Pm(n),t!==null&&lr(t,n,o,!0),n.childLanes=u,null}function Yl(t,n){return n=Kl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lg(t,n,a){return Ns(n,t.child,null,a),t=Yl(n,n.pendingProps),t.flags|=2,ci(n),n.memoizedState=null,t}function bS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=Yl(n,o),n.lanes=536870912,Lo(null,t);if(ff(n),(t=Kt)?(t=j0(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=gm(t),a.return=n,n.child=a,wn=n,Kt=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Yl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(ff(n),u)if(n.flags&256)n.flags&=-257,n=Lg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||lr(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(o=qt,o!==null&&(x=ii(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,Es(t,x),$n(o,t,x),Nf;sc(),n=Lg(t,n,a)}else t=d.treeContext,Kt=Ai(x.nextSibling),wn=n,Et=!0,Fa=null,Ei=!1,t!==null&&xm(n,t),n=Yl(n,o),n.flags|=4096;return n}return t=oa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Lf(t,n,a,o,u){return Cs(n),a=hf(t,n,a,o,void 0,u),o=pf(),t!==null&&!gn?(mf(t,n,u),ha(t,n,u)):(Et&&o&&qu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function Og(t,n,a,o,u,d){return Cs(n),n.updateQueue=null,a=Im(n,o,a,u),zm(t),o=pf(),t!==null&&!gn?(mf(t,n,d),ha(t,n,d)):(Et&&o&&qu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function Pg(t,n,a,o,u){if(Cs(n),n.stateNode===null){var d=ar,x=a.contextType;typeof x=="object"&&x!==null&&(d=Cn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Df,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},sf(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Cn(x):ar,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Rf(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Df.enqueueReplaceState(d,d.state,null),Co(n,o,d,u),wo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var C=n.memoizedProps,H=Os(a,C);d.props=H;var ne=d.context,de=a.contextType;x=ar,typeof de=="object"&&de!==null&&(x=Cn(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,de||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ne!==x)&&yg(n,d,o,x),Va=!1;var re=n.memoizedState;d.state=re,Co(n,o,d,u),wo(),ne=n.memoizedState,C||re!==ne||Va?(typeof _e=="function"&&(Rf(n,a,_e,o),ne=n.memoizedState),(H=Va||Sg(n,a,H,o,re,ne,x))?(de||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=x,o=H):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,rf(t,n),x=n.memoizedProps,de=Os(a,x),d.props=de,_e=n.pendingProps,re=d.context,ne=a.contextType,H=ar,typeof ne=="object"&&ne!==null&&(H=Cn(ne)),C=a.getDerivedStateFromProps,(ne=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==_e||re!==H)&&yg(n,d,o,H),Va=!1,re=n.memoizedState,d.state=re,Co(n,o,d,u),wo();var le=n.memoizedState;x!==_e||re!==le||Va||t!==null&&t.dependencies!==null&&Dl(t.dependencies)?(typeof C=="function"&&(Rf(n,a,C,o),le=n.memoizedState),(de=Va||Sg(n,a,de,o,re,le,H)||t!==null&&t.dependencies!==null&&Dl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,H),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,H)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=H,o=de):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Zl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ns(n,t.child,null,u),n.child=Ns(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ha(t,n,u),t}function zg(t,n,a,o){return As(),n.flags|=256,Rn(t,n,a,o),n.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(t){return{baseLanes:t,cachePool:Tm()}}function zf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function Ig(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?ja(n):Wa(),(t=Kt)?(t=j0(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=gm(t),a.return=n,n.child=a,wn=n,Kt=null)):t=null,t===null)throw Ha(n);return _d(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Wa(),u=n.mode,C=Kl({mode:"hidden",children:C},u),o=Ts(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Pf(a),o.childLanes=zf(t,x,a),n.memoizedState=Of,Lo(null,o)):(ja(n),If(n,C))}var H=t.memoizedState;if(H!==null&&(C=H.dehydrated,C!==null)){if(d)n.flags&256?(ja(n),n.flags&=-257,n=Bf(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),C=o.fallback,u=n.mode,o=Kl({mode:"visible",children:o.children},u),C=Ts(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ns(n,t.child,null,a),o=n.child,o.memoizedState=Pf(a),o.childLanes=zf(t,x,a),n.memoizedState=Of,n=Lo(null,o));else if(ja(n),_d(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var ne=x.dgst;x=ne,o=Error(s(419)),o.stack="",o.digest=x,yo({value:o,source:null,stack:null}),n=Bf(t,n,a)}else if(gn||lr(t,n,a,!1),x=(a&t.childLanes)!==0,gn||x){if(x=qt,x!==null&&(o=ii(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Es(t,o),$n(x,t,o),Nf;vd(C)||sc(),n=Bf(t,n,a)}else vd(C)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,Kt=Ai(C.nextSibling),wn=n,Et=!0,Fa=null,Ei=!1,t!==null&&xm(n,t),n=If(n,o.children),n.flags|=4096);return n}return u?(Wa(),C=o.fallback,u=n.mode,H=t.child,ne=H.sibling,o=oa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ne!==null?C=oa(ne,C):(C=Ts(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Lo(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Pf(a):(u=C.cachePool,u!==null?(H=pn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Tm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=zf(t,x,a),n.memoizedState=Of,Lo(t.child,o)):(ja(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function If(t,n){return n=Kl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Kl(t,n){return t=oi(22,t,null,n),t.lanes=0,t}function Bf(t,n,a){return Ns(n,t.child,null,a),t=If(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ju(t.return,n,a)}function Ff(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function Fg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=un.current,C=(x&2)!==0;if(C?(x=x&1|2,n.flags|=128):x&=1,xe(un,x),Rn(t,n,o,a),o=Et?So:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,a,n);else if(t.tag===19)Bg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Ff(n,!0,a,null,d,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(lr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Dl(t)))}function ES(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ga(n,pn,t.memoizedState.cache),As();break;case 27:case 5:$e(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ff(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ja(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ig(t,n,a):(ja(n),t=ha(t,n,a),t!==null?t.sibling:null);ja(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Fg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(un,un.current),o)break;return null;case 22:return n.lanes=0,Ug(t,n,a,n.pendingProps);case 24:Ga(n,pn,t.memoizedState.cache)}return ha(t,n,a)}function Hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!Hf(t,a)&&(n.flags&128)===0)return gn=!1,ES(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Et&&(n.flags&1048576)!==0&&_m(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ds(n.elementType),n.type=t,typeof t=="function")Xu(t)?(o=Os(t,o),n.tag=1,n=Pg(null,n,t,o,a)):(n.tag=0,n=Lf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Cg(null,n,t,o,a);break e}else if(u===B){n.tag=14,n=Rg(null,n,t,o,a);break e}}throw n=me(t)||t,Error(s(306,n,""))}}return n;case 0:return Lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Os(o,n.pendingProps),Pg(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,rf(t,n),Co(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ga(n,pn,o),o!==d.cache&&$u(n,[pn],a,!0),wo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=zg(t,n,o,a);break e}else if(o!==u){u=yi(Error(s(424)),n),yo(u),n=zg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=Ai(t.firstChild),wn=n,Et=!0,Fa=null,Ei=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(As(),o===u){n=ha(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Zl(t,n),t===null?(a=Q0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=dc(oe.current).createElement(a),o[cn]=n,o[An]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=Q0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&Et&&(o=n.stateNode=Y0(n.type,n.pendingProps,oe.current),wn=n,Ei=!0,u=Kt,es(n.type)?(xd=u,Kt=Ai(o.firstChild)):Kt=u),Rn(t,n,n.pendingProps.children,a),Zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Kt)&&(o=ey(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,wn=n,Kt=Ai(o.firstChild),Ei=!1,u=!0):u=!1),u||Ha(n)),$e(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,pd(u,d)?o=null:x!==null&&pd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=hf(t,n,mS,null,null,a),Yo._currentValue=u),Zl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Kt)&&(a=ty(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,wn=n,Kt=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Ig(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ns(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Cg(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Cs(n),u=Cn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Rg(t,n,n.type,n.pendingProps,a);case 15:return Dg(t,n,n.type,n.pendingProps,a);case 19:return Fg(t,n,a);case 31:return bS(t,n,a);case 22:return Ug(t,n,a,n.pendingProps);case 24:return Cs(n),o=Cn(pn),t===null?(u=nf(),u===null&&(u=qt,d=ef(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},sf(n),Ga(n,pn,u)):((t.lanes&a)!==0&&(rf(t,n),Co(n,null,null,a),wo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,pn,o)):(o=d.cache,Ga(n,pn,o),o!==u.cache&&$u(n,[pn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(t){t.flags|=4}function Gf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(h0())t.flags|=8192;else throw Us=Ol,af}else t.flags&=-16777217}function Gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nv(n))if(h0())t.flags|=8192;else throw Us=Ol,af}function Ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,Sr|=n)}function Oo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function TS(t,n,a){var o=n.pendingProps;switch(Yu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ua(pn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(or(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ku())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(pa(n),d!==null?(Qt(n),Gg(n,d)):(Qt(n),Gf(n,u,null,o,a))):d?d!==t.memoizedState?(pa(n),Qt(n),Gg(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&pa(n),Qt(n),Gf(n,u,t,o,a)),null;case 27:if(Qe(n),a=oe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Ae.current,or(n)?Sm(n):(t=Y0(u,o,a),n.stateNode=t,pa(n))}return Qt(n),null;case 5:if(Qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(d=Ae.current,or(n))Sm(n);else{var x=dc(oe.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[cn]=n,d[An]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Dn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&pa(n)}}return Qt(n),Gf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&pa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=oe.current,or(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||I0(t.nodeValue,a)),t||Ha(n,!0)}else t=dc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=or(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Ku(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=or(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else As(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Ku(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ql(n,n.updateQueue),Qt(n),null);case 4:return He(),t===null&&cd(n.stateNode.containerInfo),Qt(n),null;case 10:return ua(n.type),Qt(n),null;case 19:if(J(un),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Oo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Bl(t),d!==null){for(n.flags|=128,Oo(o,!1),t=d.updateQueue,n.updateQueue=t,Ql(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)mm(a,t),a=a.sibling;return xe(un,un.current&1|2),Et&&la(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&we()>nc&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Bl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ql(n,t),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Et)return Qt(n),null}else 2*we()-o.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,a=un.current,xe(un,u?a&1|2:a&1),Et&&la(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ci(n),uf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Ql(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&J(Rs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(pn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function AS(t,n){switch(Yu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ua(pn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ci(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));As()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(un),null;case 4:return He(),null;case 10:return ua(n.type),null;case 22:case 23:return ci(n),uf(),t!==null&&J(Rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ua(pn),null;case 25:return null;default:return null}}function Vg(t,n){switch(Yu(n),n.tag){case 3:ua(pn),He();break;case 26:case 27:case 5:Qe(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:J(un);break;case 10:ua(n.type);break;case 22:case 23:ci(n),uf(),t!==null&&J(Rs);break;case 24:ua(pn)}}function Po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(C){Bt(n,n.return,C)}}function qa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,u=n;var H=a,ne=C;try{ne()}catch(de){Bt(u,H,de)}}}o=o.next}while(o!==d)}}catch(de){Bt(n,n.return,de)}}function kg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lm(n,a)}catch(o){Bt(t,t.return,o)}}}function Xg(t,n,a){a.props=Os(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function zo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function ji(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function jg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Vf(t,n,a){try{var o=t.stateNode;YS(o,t.type,a,n),o[An]=n}catch(u){Bt(t,t.return,u)}}function Wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Xf(t,n,a),t=t.sibling;t!==null;)Xf(t,n,a),t=t.sibling}function Jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&es(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,n,a),t=t.sibling;t!==null;)Jl(t,n,a),t=t.sibling}function qg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[cn]=t,n[An]=a}catch(d){Bt(t,t.return,d)}}var ma=!1,vn=!1,jf=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function wS(t,n){if(t=t.containerInfo,dd=xc,t=rm(t),Iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,C=-1,H=-1,ne=0,de=0,_e=t,re=null;t:for(;;){for(var le;_e!==a||u!==0&&_e.nodeType!==3||(C=x+u),_e!==d||o!==0&&_e.nodeType!==3||(H=x+o),_e.nodeType===3&&(x+=_e.nodeValue.length),(le=_e.firstChild)!==null;)re=_e,_e=le;for(;;){if(_e===t)break t;if(re===a&&++ne===u&&(C=x),re===d&&++de===o&&(H=x),(le=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=le}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(hd={focusedElem:t,selectionRange:a},xc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var je=Os(a.type,u);t=o.getSnapshotBeforeUpdate(je,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Bt(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)gd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function Zg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:va(t,a),o&4&&Po(5,a);break;case 1:if(va(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Bt(a,a.return,x)}else{var u=Os(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Bt(a,a.return,x)}}o&64&&kg(a),o&512&&zo(a,a.return);break;case 3:if(va(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lm(t,n)}catch(x){Bt(a,a.return,x)}}break;case 27:n===null&&o&4&&qg(a);case 26:case 5:va(t,a),n===null&&o&4&&jg(a),o&512&&zo(a,a.return);break;case 12:va(t,a);break;case 31:va(t,a),o&4&&Jg(t,a);break;case 13:va(t,a),o&4&&$g(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=zS.bind(null,a),ny(t,a))));break;case 22:if(o=a.memoizedState!==null||ma,!o){n=n!==null&&n.memoizedState!==null||vn,u=ma;var d=vn;ma=o,(vn=n)&&!d?_a(t,a,(a.subtreeFlags&8772)!==0):va(t,a),ma=u,vn=d}break;case 30:break;default:va(t,a)}}function Kg(t){var n=t.alternate;n!==null&&(t.alternate=null,Kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&co(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Zn=!1;function ga(t,n,a){for(a=a.child;a!==null;)Qg(t,n,a),a=a.sibling}function Qg(t,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:vn||ji(a,n),ga(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||ji(a,n);var o=tn,u=Zn;es(a.type)&&(tn=a.stateNode,Zn=!1),ga(t,n,a),jo(a.stateNode),tn=o,Zn=u;break;case 5:vn||ji(a,n);case 6:if(o=tn,u=Zn,tn=null,ga(t,n,a),tn=o,Zn=u,tn!==null)if(Zn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{tn.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:tn!==null&&(Zn?(t=tn,k0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Cr(t)):k0(tn,a.stateNode));break;case 4:o=tn,u=Zn,tn=a.stateNode.containerInfo,Zn=!0,ga(t,n,a),tn=o,Zn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),vn||qa(4,a,n),ga(t,n,a);break;case 1:vn||(ji(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Xg(a,n,o)),ga(t,n,a);break;case 21:ga(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ga(t,n,a),vn=o;break;default:ga(t,n,a)}}function Jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Cr(t)}catch(a){Bt(n,n.return,a)}}}function $g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Cr(t)}catch(a){Bt(n,n.return,a)}}function CS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Yg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Yg),n;default:throw Error(s(435,t.tag))}}function $l(t,n){var a=CS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=IS.bind(null,t,o);o.then(u,u)}})}function Kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(es(C.type)){tn=C.stateNode,Zn=!1;break e}break;case 5:tn=C.stateNode,Zn=!1;break e;case 3:case 4:tn=C.stateNode.containerInfo,Zn=!0;break e}C=C.return}if(tn===null)throw Error(s(160));Qg(d,x,u),tn=null,Zn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e0(n,t),n=n.sibling}var Pi=null;function e0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kn(n,t),Qn(t),o&4&&(qa(3,t,t.return),Po(3,t),qa(5,t,t.return));break;case 1:Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),o&64&&ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Pi;if(Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Na]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[cn]=t,hn(d),o=d;break e;case"link":var x=ev("link","href",u).get(o+(a.href||""));if(x){for(var C=0;C<x.length;C++)if(d=x[C],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(C,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=ev("meta","content",u).get(o+(a.content||""))){for(C=0;C<x.length;C++)if(d=x[C],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(C,1);break t}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=t,hn(d),o=d}t.stateNode=o}else tv(u,t.type,t.stateNode);else t.stateNode=$0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?tv(u,t.type,t.stateNode):$0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),a!==null&&o&4&&Vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,t),Qn(t),o&512&&(vn||a===null||ji(a,a.return)),t.flags&32){u=t.stateNode;try{si(u,"")}catch(je){Bt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Vf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(jf=!0);break;case 6:if(Kn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){Bt(t,t.return,je)}}break;case 3:if(mc=null,u=Pi,Pi=hc(n.containerInfo),Kn(n,t),Pi=u,Qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(je){Bt(t,t.return,je)}jf&&(jf=!1,t0(t));break;case 4:o=Pi,Pi=hc(t.stateNode.containerInfo),Kn(n,t),Qn(t),Pi=o;break;case 12:Kn(n,t),Qn(t);break;case 31:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 13:Kn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=we()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ne=ma,de=vn;if(ma=ne||u,vn=de||H,Kn(n,t),vn=de,ma=ne,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ma||vn||Ps(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(d=H.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=H.stateNode;var _e=H.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;C.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(je){Bt(H,H.return,je)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(je){Bt(H,H.return,je)}}}else if(n.tag===18){if(a===null){H=n;try{var le=H.stateNode;u?X0(le,!0):X0(H.stateNode,!1)}catch(je){Bt(H,H.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,$l(t,a))));break;case 19:Kn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,$l(t,o)));break;case 30:break;case 21:break;default:Kn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Wg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=kf(t);Jl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(si(x,""),a.flags&=-33);var C=kf(t);Jl(t,C,x);break;case 3:case 4:var H=a.stateNode.containerInfo,ne=kf(t);Xf(t,ne,H);break;default:throw Error(s(161))}}catch(de){Bt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function va(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zg(t,n.alternate,n),n=n.sibling}function Ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ps(n);break;case 1:ji(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xg(n,n.return,a),Ps(n);break;case 27:jo(n.stateNode);case 26:case 5:ji(n,n.return),Ps(n);break;case 22:n.memoizedState===null&&Ps(n);break;case 30:Ps(n);break;default:Ps(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:_a(u,d,a),Po(4,d);break;case 1:if(_a(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Bt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Nm(H[u],C)}catch(ne){Bt(o,o.return,ne)}}a&&x&64&&kg(d),zo(d,d.return);break;case 27:qg(d);case 26:case 5:_a(u,d,a),a&&o===null&&x&4&&jg(d),zo(d,d.return);break;case 12:_a(u,d,a);break;case 31:_a(u,d,a),a&&x&4&&Jg(u,d);break;case 13:_a(u,d,a),a&&x&4&&$g(u,d);break;case 22:d.memoizedState===null&&_a(u,d,a),zo(d,d.return);break;case 30:break;default:_a(u,d,a)}n=n.sibling}}function Wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function zi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n0(t,n,a,o),n=n.sibling}function n0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(t,n,a,o),u&2048&&Po(9,n);break;case 1:zi(t,n,a,o);break;case 3:zi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){zi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,C=d.onPostCommit;typeof C=="function"&&C(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Bt(n,n.return,H)}}else zi(t,n,a,o);break;case 31:zi(t,n,a,o);break;case 13:zi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?zi(t,n,a,o):Io(t,n):d._visibility&2?zi(t,n,a,o):(d._visibility|=2,vr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Wf(x,n);break;case 24:zi(t,n,a,o),u&2048&&qf(n.alternate,n);break;default:zi(t,n,a,o)}}function vr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,C=a,H=o,ne=x.flags;switch(x.tag){case 0:case 11:case 15:vr(d,x,C,H,u),Po(8,x);break;case 23:break;case 22:var de=x.stateNode;x.memoizedState!==null?de._visibility&2?vr(d,x,C,H,u):Io(d,x):(de._visibility|=2,vr(d,x,C,H,u)),u&&ne&2048&&Wf(x.alternate,x);break;case 24:vr(d,x,C,H,u),u&&ne&2048&&qf(x.alternate,x);break;default:vr(d,x,C,H,u)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Io(a,o),u&2048&&Wf(o.alternate,o);break;case 24:Io(a,o),u&2048&&qf(o.alternate,o);break;default:Io(a,o)}n=n.sibling}}var Bo=8192;function _r(t,n,a){if(t.subtreeFlags&Bo)for(t=t.child;t!==null;)i0(t,n,a),t=t.sibling}function i0(t,n,a){switch(t.tag){case 26:_r(t,n,a),t.flags&Bo&&t.memoizedState!==null&&py(a,Pi,t.memoizedState,t.memoizedProps);break;case 5:_r(t,n,a);break;case 3:case 4:var o=Pi;Pi=hc(t.stateNode.containerInfo),_r(t,n,a),Pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,_r(t,n,a),Bo=o):_r(t,n,a));break;default:_r(t,n,a)}}function a0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,r0(o,t)}a0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)s0(t),t=t.sibling}function s0(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ec(t)):Fo(t);break;default:Fo(t)}}function ec(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,r0(o,t)}a0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),ec(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ec(n));break;default:ec(n)}t=t.sibling}}function r0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,d=o.return;if(Kg(o),o===a){bn=null;break e}if(u!==null){u.return=d,bn=u;break e}bn=d}}}var RS={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},DS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,qt=null,_t=null,Mt=0,It=0,ui=null,Ya=!1,xr=!1,Yf=!1,xa=0,on=0,Za=0,zs=0,Zf=0,fi=0,Sr=0,Ho=null,Jn=null,Kf=!1,tc=0,o0=0,nc=1/0,ic=null,Ka=null,Sn=0,Qa=null,yr=null,Sa=0,Qf=0,Jf=null,l0=null,Go=0,$f=null;function di(){return(Ut&2)!==0&&Mt!==0?Mt&-Mt:P.T!==null?sd():ro()}function c0(){if(fi===0)if((Mt&536870912)===0||Et){var t=gt;gt<<=1,(gt&3932160)===0&&(gt=262144),fi=t}else fi=536870912;return t=li.current,t!==null&&(t.flags|=32),fi}function $n(t,n,a){(t===qt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(Mr(t,0),Ja(t,Mt,fi,!1)),tt(t,a),((Ut&2)===0||t!==qt)&&(t===qt&&((Ut&2)===0&&(zs|=a),on===4&&Ja(t,Mt,fi,!1)),Wi(t))}function u0(t,n,a){if((Ut&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fe(t,n),u=o?LS(t,n):td(t,n,!0),d=o;do{if(u===0){xr&&!o&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!US(a)){u=td(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var C=t;u=Ho;var H=C.current.memoizedState.isDehydrated;if(H&&(Mr(C,x).flags|=256),x=td(C,x,!1),x!==2){if(Yf&&!H){C.errorRecoveryDisabledLanes|=d,zs|=d,u=4;break e}d=Jn,Jn=u,d!==null&&(Jn===null?Jn=d:Jn.push.apply(Jn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){Mr(t,0),Ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,fi,!Ya);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-we(),10<u)){if(Ja(o,n,fi,!Ya),pe(o,0,!0)!==0)break e;Sa=n,o.timeoutHandle=G0(f0.bind(null,o,a,Jn,ic,Kf,n,fi,zs,Sr,Ya,d,"Throttled",-0,0),u);break e}f0(o,a,Jn,ic,Kf,n,fi,zs,Sr,Ya,d,null,-0,0)}}break}while(!0);Wi(t)}function f0(t,n,a,o,u,d,x,C,H,ne,de,_e,re,le){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},i0(n,d,_e);var je=(d&62914560)===d?tc-we():(d&4194048)===d?o0-we():0;if(je=my(_e,je),je!==null){Sa=d,t.cancelPendingCommit=je(x0.bind(null,t,n,d,a,o,u,x,C,H,de,_e,null,re,le)),Ja(t,d,x,!ne);return}}x0(t,n,d,a,o,u,x,C,H)}function US(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ri(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,o){n&=~Zf,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Pe(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&Dt(t,a,n)}function ac(){return(Ut&6)===0?(Vo(0),!1):!0}function ed(){if(_t!==null){if(It===0)var t=_t.return;else t=_t,ca=ws=null,gf(t),dr=null,Eo=0,t=_t;for(;t!==null;)Vg(t.alternate,t),t=t.return;_t=null}}function Mr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,QS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Sa=0,ed(),qt=t,_t=a=oa(t.current,null),Mt=n,It=0,ui=null,Ya=!1,xr=Fe(t,n),Yf=!1,Sr=fi=Zf=zs=Za=on=0,Jn=Ho=null,Kf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),d=1<<u;n|=t[u],o&=~d}return xa=n,Tl(),a}function d0(t,n){ct=null,P.H=No,n===fr||n===Ll?(n=Cm(),It=3):n===af?(n=Cm(),It=4):It=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,_t===null&&(on=1,ql(t,yi(n,t.current)))}function h0(){var t=li.current;return t===null?!0:(Mt&4194048)===Mt?Ti===null:(Mt&62914560)===Mt||(Mt&536870912)!==0?t===Ti:!1}function p0(){var t=P.H;return P.H=No,t===null?No:t}function m0(){var t=P.A;return P.A=RS,t}function sc(){on=4,Ya||(Mt&4194048)!==Mt&&li.current!==null||(xr=!0),(Za&134217727)===0&&(zs&134217727)===0||qt===null||Ja(qt,Mt,fi,!1)}function td(t,n,a){var o=Ut;Ut|=2;var u=p0(),d=m0();(qt!==t||Mt!==n)&&(ic=null,Mr(t,n)),n=!1;var x=on;e:do try{if(It!==0&&_t!==null){var C=_t,H=ui;switch(It){case 8:ed(),x=6;break e;case 3:case 2:case 9:case 6:li.current===null&&(n=!0);var ne=It;if(It=0,ui=null,br(t,C,H,ne),a&&xr){x=0;break e}break;default:ne=It,It=0,ui=null,br(t,C,H,ne)}}NS(),x=on;break}catch(de){d0(t,de)}while(!0);return n&&t.shellSuspendCounter++,ca=ws=null,Ut=o,P.H=u,P.A=d,_t===null&&(qt=null,Mt=0,Tl()),x}function NS(){for(;_t!==null;)g0(_t)}function LS(t,n){var a=Ut;Ut|=2;var o=p0(),u=m0();qt!==t||Mt!==n?(ic=null,nc=we()+500,Mr(t,n)):xr=Fe(t,n);e:do try{if(It!==0&&_t!==null){n=_t;var d=ui;t:switch(It){case 1:It=0,ui=null,br(t,n,d,1);break;case 2:case 9:if(Am(d)){It=0,ui=null,v0(n);break}n=function(){It!==2&&It!==9||qt!==t||(It=7),Wi(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Am(d)?(It=0,ui=null,v0(n)):(It=0,ui=null,br(t,n,d,7));break;case 5:var x=null;switch(_t.tag){case 26:x=_t.memoizedState;case 5:case 27:var C=_t;if(x?nv(x):C.stateNode.complete){It=0,ui=null;var H=C.sibling;if(H!==null)_t=H;else{var ne=C.return;ne!==null?(_t=ne,rc(ne)):_t=null}break t}}It=0,ui=null,br(t,n,d,5);break;case 6:It=0,ui=null,br(t,n,d,6);break;case 8:ed(),on=6;break e;default:throw Error(s(462))}}OS();break}catch(de){d0(t,de)}while(!0);return ca=ws=null,P.H=o,P.A=u,Ut=a,_t!==null?0:(qt=null,Mt=0,Tl(),on)}function OS(){for(;_t!==null&&!mt();)g0(_t)}function g0(t){var n=Hg(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?rc(t):_t=n}function v0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Og(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Og(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:gf(n);default:Vg(a,n),n=_t=mm(n,xa),n=Hg(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?rc(t):_t=n}function br(t,n,a,o){ca=ws=null,gf(n),dr=null,Eo=0;var u=n.return;try{if(MS(t,u,n,a,Mt)){on=1,ql(t,yi(a,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;on=1,ql(t,yi(a,t.current)),_t=null;return}n.flags&32768?(Et||o===1?t=!0:xr||(Mt&536870912)!==0?t=!1:(Ya=t=!0,(o===2||o===9||o===3||o===6)&&(o=li.current,o!==null&&o.tag===13&&(o.flags|=16384))),_0(n,t)):rc(n)}function rc(t){var n=t;do{if((n.flags&32768)!==0){_0(n,Ya);return}t=n.return;var a=TS(n.alternate,n,xa);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);on===0&&(on=5)}function _0(t,n){do{var a=AS(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);on=6,_t=null}function x0(t,n,a,o,u,d,x,C,H){t.cancelPendingCommit=null;do oc();while(Sn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Vu,an(t,a,d,x,C,H),t===qt&&(_t=qt=null,Mt=0),yr=n,Qa=t,Sa=a,Qf=d,Jf=u,l0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,BS($,function(){return E0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=F.p,F.p=2,x=Ut,Ut|=4;try{wS(t,n,a)}finally{Ut=x,F.p=u,P.T=o}}Sn=1,S0(),y0(),M0()}}function S0(){if(Sn===1){Sn=0;var t=Qa,n=yr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=F.p;F.p=2;var u=Ut;Ut|=4;try{e0(n,t);var d=hd,x=rm(t.containerInfo),C=d.focusedElem,H=d.selectionRange;if(x!==C&&C&&C.ownerDocument&&sm(C.ownerDocument.documentElement,C)){if(H!==null&&Iu(C)){var ne=H.start,de=H.end;if(de===void 0&&(de=ne),"selectionStart"in C)C.selectionStart=ne,C.selectionEnd=Math.min(de,C.value.length);else{var _e=C.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var le=re.getSelection(),je=C.textContent.length,Je=Math.min(H.start,je),Xt=H.end===void 0?Je:Math.min(H.end,je);!le.extend&&Je>Xt&&(x=Xt,Xt=Je,Je=x);var K=am(C,Je),X=am(C,Xt);if(K&&X&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var te=_e.createRange();te.setStart(K.node,K.offset),le.removeAllRanges(),Je>Xt?(le.addRange(te),le.extend(X.node,X.offset)):(te.setEnd(X.node,X.offset),le.addRange(te))}}}}for(_e=[],le=C;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_e.length;C++){var ge=_e[C];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}xc=!!dd,hd=dd=null}finally{Ut=u,F.p=o,P.T=a}}t.current=n,Sn=2}}function y0(){if(Sn===2){Sn=0;var t=Qa,n=yr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=F.p;F.p=2;var u=Ut;Ut|=4;try{Zg(t,n.alternate,n)}finally{Ut=u,F.p=o,P.T=a}}Sn=3}}function M0(){if(Sn===4||Sn===3){Sn=0,Gt();var t=Qa,n=yr,a=Sa,o=l0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,yr=Qa=null,b0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),so(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=F.p,F.p=2,P.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var C=o[x];d(C.value,{componentStack:C.stack})}}finally{P.T=n,F.p=u}}(Sa&3)!==0&&oc(),Wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===$f?Go++:(Go=0,$f=t):Go=0,Vo(0)}}function b0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function oc(){return S0(),y0(),M0(),E0()}function E0(){if(Sn!==5)return!1;var t=Qa,n=Qf;Qf=0;var a=so(Sa),o=P.T,u=F.p;try{F.p=32>a?32:a,P.T=null,a=Jf,Jf=null;var d=Qa,x=Sa;if(Sn=0,yr=Qa=null,Sa=0,(Ut&6)!==0)throw Error(s(331));var C=Ut;if(Ut|=4,s0(d.current),n0(d,d.current,x,a),Ut=C,Vo(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ce,d)}catch{}return!0}finally{F.p=u,P.T=o,b0(t,n)}}function T0(t,n,a){n=yi(a,n),n=Uf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(tt(t,2),Wi(t))}function Bt(t,n,a){if(t.tag===3)T0(t,t,a);else for(;n!==null;){if(n.tag===3){T0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){t=yi(a,t),a=Ag(2),o=Xa(n,a,2),o!==null&&(wg(a,o,n,t),tt(o,2),Wi(o));break}}n=n.return}}function nd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new DS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Yf=!0,u.add(a),t=PS.bind(null,t,n,a),n.then(t,t))}function PS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(Mt&a)===a&&(on===4||on===3&&(Mt&62914560)===Mt&&300>we()-tc?(Ut&2)===0&&Mr(t,0):Zf|=a,Sr===Mt&&(Sr=0)),Wi(t)}function A0(t,n){n===0&&(n=Me()),t=Es(t,n),t!==null&&(tt(t,n),Wi(t))}function zS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),A0(t,a)}function IS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),A0(t,a)}function BS(t,n){return W(t,n)}var lc=null,Er=null,id=!1,cc=!1,ad=!1,$a=0;function Wi(t){t!==Er&&t.next===null&&(Er===null?lc=Er=t:Er=Er.next=t),cc=!0,id||(id=!0,HS())}function Vo(t,n){if(!ad&&cc){ad=!0;do for(var a=!1,o=lc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Pe(42|t)+1)-1,d&=u&~(x&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,D0(o,d))}else d=Mt,d=pe(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Fe(o,d)||(a=!0,D0(o,d));o=o.next}while(a);ad=!1}}function FS(){w0()}function w0(){cc=id=!1;var t=0;$a!==0&&KS()&&(t=$a);for(var n=we(),a=null,o=lc;o!==null;){var u=o.next,d=C0(o,n);d===0?(o.next=null,a===null?lc=u:a.next=u,u===null&&(Er=a)):(a=o,(t!==0||(d&3)!==0)&&(cc=!0)),o=u}Sn!==0&&Sn!==5||Vo(t),$a!==0&&($a=0)}function C0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Pe(d),C=1<<x,H=u[x];H===-1?((C&a)===0||(C&o)!==0)&&(u[x]=Ne(C,n)):H<=n&&(t.expiredLanes|=C),d&=~C}if(n=qt,a=Mt,a=pe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&nn(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&nn(o),so(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=be;break;default:a=$}return o=R0.bind(null,t),a=W(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&nn(o),t.callbackPriority=2,t.callbackNode=null,2}function R0(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(oc()&&t.callbackNode!==a)return null;var o=Mt;return o=pe(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(u0(t,o,n),C0(t,we()),t.callbackNode!=null&&t.callbackNode===a?R0.bind(null,t):null)}function D0(t,n){if(oc())return null;u0(t,n,!0)}function HS(){JS(function(){(Ut&6)!==0?W(U,FS):w0()})}function sd(){if($a===0){var t=cr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),$a=t}return $a}function U0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ss(""+t)}function N0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function GS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=U0((u[An]||null).action),x=o.submitter;x&&(n=(n=x[An]||null)?U0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var C=new yl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var H=x?N0(u,x):new FormData(u);Tf(a,{pending:!0,data:H,method:u.method,action:d},null,H)}}else typeof d=="function"&&(C.preventDefault(),H=x?N0(u,x):new FormData(u),Tf(a,{pending:!0,data:H,method:u.method,action:d},d,H))},currentTarget:u}]})}}for(var rd=0;rd<Gu.length;rd++){var od=Gu[rd],VS=od.toLowerCase(),kS=od[0].toUpperCase()+od.slice(1);Oi(VS,"on"+kS)}Oi(cm,"onAnimationEnd"),Oi(um,"onAnimationIteration"),Oi(fm,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(sS,"onTransitionRun"),Oi(rS,"onTransitionStart"),Oi(oS,"onTransitionCancel"),Oi(dm,"onTransitionEnd"),se("onMouseEnter",["mouseout","mouseover"]),se("onMouseLeave",["mouseout","mouseover"]),se("onPointerEnter",["pointerout","pointerover"]),se("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function L0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var C=o[x],H=C.instance,ne=C.currentTarget;if(C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ne;try{d(u)}catch(de){El(de)}u.currentTarget=null,d=H}else for(x=0;x<o.length;x++){if(C=o[x],H=C.instance,ne=C.currentTarget,C=C.listener,H!==d&&u.isPropagationStopped())break e;d=C,u.currentTarget=ne;try{d(u)}catch(de){El(de)}u.currentTarget=null,d=H}}}}function xt(t,n){var a=n[Ua];a===void 0&&(a=n[Ua]=new Set);var o=t+"__bubble";a.has(o)||(O0(n,t,2,!1),a.add(o))}function ld(t,n,a){var o=0;n&&(o|=4),O0(a,t,o,n)}var uc="_reactListening"+Math.random().toString(36).slice(2);function cd(t){if(!t[uc]){t[uc]=!0,vl.forEach(function(a){a!=="selectionchange"&&(XS.has(a)||ld(a,!1,t),ld(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[uc]||(n[uc]=!0,ld("selectionchange",!1,n))}}function O0(t,n,a,o){switch(cv(n)){case 2:var u=_y;break;case 8:u=xy;break;default:u=Ed}a=u.bind(null,n,a,t),u=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ud(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var C=o.stateNode.containerInfo;if(C===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;C!==null;){if(x=La(C),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=d=x;continue e}C=C.parentNode}}o=o.return}Fp(function(){var ne=d,de=Au(a),_e=[];e:{var re=hm.get(t);if(re!==void 0){var le=yl,je=t;switch(t){case"keypress":if(xl(a)===0)break e;case"keydown":case"keyup":le=Ix;break;case"focusin":je="focus",le=Nu;break;case"focusout":je="blur",le=Nu;break;case"beforeblur":case"afterblur":le=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Hx;break;case cm:case um:case fm:le=Cx;break;case dm:le=Vx;break;case"scroll":case"scrollend":le=bx;break;case"wheel":le=Xx;break;case"copy":case"cut":case"paste":le=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Xp;break;case"toggle":case"beforetoggle":le=Wx}var Je=(n&4)!==0,Xt=!Je&&(t==="scroll"||t==="scrollend"),K=Je?re!==null?re+"Capture":null:re;Je=[];for(var X=ne,te;X!==null;){var ge=X;if(te=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||te===null||K===null||(ge=uo(X,K),ge!=null&&Je.push(Xo(X,ge,te))),Xt)break;X=X.return}0<Je.length&&(re=new le(re,je,null,a,de),_e.push({event:re,listeners:Je}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",re&&a!==Tu&&(je=a.relatedTarget||a.fromElement)&&(La(je)||je[aa]))break e;if((le||re)&&(re=de.window===de?de:(re=de.ownerDocument)?re.defaultView||re.parentWindow:window,le?(je=a.relatedTarget||a.toElement,le=ne,je=je?La(je):null,je!==null&&(Xt=c(je),Je=je.tag,je!==Xt||Je!==5&&Je!==27&&Je!==6)&&(je=null)):(le=null,je=ne),le!==je)){if(Je=Vp,ge="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Je=Xp,ge="onPointerLeave",K="onPointerEnter",X="pointer"),Xt=le==null?re:xs(le),te=je==null?re:xs(je),re=new Je(ge,X+"leave",le,a,de),re.target=Xt,re.relatedTarget=te,ge=null,La(de)===ne&&(Je=new Je(K,X+"enter",je,a,de),Je.target=te,Je.relatedTarget=Xt,ge=Je),Xt=ge,le&&je)t:{for(Je=jS,K=le,X=je,te=0,ge=K;ge;ge=Je(ge))te++;ge=0;for(var Ke=X;Ke;Ke=Je(Ke))ge++;for(;0<te-ge;)K=Je(K),te--;for(;0<ge-te;)X=Je(X),ge--;for(;te--;){if(K===X||X!==null&&K===X.alternate){Je=K;break t}K=Je(K),X=Je(X)}Je=null}else Je=null;le!==null&&P0(_e,re,le,Je,!1),je!==null&&Xt!==null&&P0(_e,Xt,je,Je,!0)}}e:{if(re=ne?xs(ne):window,le=re.nodeName&&re.nodeName.toLowerCase(),le==="select"||le==="input"&&re.type==="file")var Ct=Jp;else if(Kp(re))if($p)Ct=nS;else{Ct=eS;var qe=$x}else le=re.nodeName,!le||le.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&Nt(ne.elementType)&&(Ct=Jp):Ct=tS;if(Ct&&(Ct=Ct(t,ne))){Qp(_e,Ct,a,de);break e}qe&&qe(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&vt(re,"number",re.value)}switch(qe=ne?xs(ne):window,t){case"focusin":(Kp(qe)||qe.contentEditable==="true")&&(tr=qe,Bu=ne,xo=null);break;case"focusout":xo=Bu=tr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,om(_e,a,de);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":om(_e,a,de)}var dt;if(Ou)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else er?Yp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(jp&&a.locale!=="ko"&&(er||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&er&&(dt=Hp()):(Ia=de,Ru="value"in Ia?Ia.value:Ia.textContent,er=!0)),qe=fc(ne,bt),0<qe.length&&(bt=new kp(bt,t,null,a,de),_e.push({event:bt,listeners:qe}),dt?bt.data=dt:(dt=Zp(a),dt!==null&&(bt.data=dt)))),(dt=Yx?Zx(t,a):Kx(t,a))&&(bt=fc(ne,"onBeforeInput"),0<bt.length&&(qe=new kp("onBeforeInput","beforeinput",null,a,de),_e.push({event:qe,listeners:bt}),qe.data=dt)),GS(_e,t,ne,a,de)}L0(_e,n)})}function Xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function fc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=uo(t,a),u!=null&&o.unshift(Xo(t,u,d)),u=uo(t,n),u!=null&&o.push(Xo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function jS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P0(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var C=a,H=C.alternate,ne=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||ne===null||(H=ne,u?(ne=uo(a,d),ne!=null&&x.unshift(Xo(a,ne,H))):u||(ne=uo(a,d),ne!=null&&x.push(Xo(a,ne,H)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var WS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function z0(t){return(typeof t=="string"?t:""+t).replace(WS,`
`).replace(qS,"")}function I0(t,n){return n=z0(n),z0(t)===n}function kt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||si(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&si(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Li(t,o,d);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ss(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ss(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=sa);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ss(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vi.get(a)||a,ze(t,a,o))}}function fd(t,n,a,o,u,d){switch(a){case"style":Li(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?si(t,o):(typeof o=="number"||typeof o=="bigint")&&si(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,d,x,a,null)}}u&&kt(t,n,"srcSet",a.srcSet,a,null),o&&kt(t,n,"src",a.src,a,null);return;case"input":xt("invalid",t);var C=d=x=u=null,H=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":x=de;break;case"checked":H=de;break;case"defaultChecked":ne=de;break;case"value":d=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:kt(t,n,o,de,a,null)}}Bn(t,d,C,H,ne,x,u,!1);return;case"select":xt("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":x=C;break;case"multiple":o=C;default:kt(t,n,u,C,a,null)}n=d,a=x,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":xt("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(C=a[x],C!=null))switch(x){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:kt(t,n,x,C,a,null)}Ni(t,o,u,d);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,H,o,a,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)xt(ko[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,ne,o,a,null)}return;default:if(Nt(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&fd(t,n,de,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&kt(t,n,C,o,a,null))}function YS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,C=null,H=null,ne=null,de=null;for(le in a){var _e=a[le];if(a.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":H=_e;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,_e)}}for(var re in o){var le=o[re];if(_e=a[re],o.hasOwnProperty(re)&&(le!=null||_e!=null))switch(re){case"type":d=le;break;case"name":u=le;break;case"checked":ne=le;break;case"defaultChecked":de=le;break;case"value":x=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==_e&&kt(t,n,re,le,o,_e)}}Ge(t,x,C,H,ne,de,d,u);return;case"select":le=x=C=re=null;for(d in a)if(H=a[d],a.hasOwnProperty(d)&&H!=null)switch(d){case"value":break;case"multiple":le=H;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,H)}for(u in o)if(d=o[u],H=a[u],o.hasOwnProperty(u)&&(d!=null||H!=null))switch(u){case"value":re=d;break;case"defaultValue":C=d;break;case"multiple":x=d;default:d!==H&&kt(t,n,u,d,o,H)}n=C,a=x,o=le,re!=null?xn(t,!!a,re,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":le=re=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:kt(t,n,C,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":re=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&kt(t,n,x,u,o,d)}ai(t,re,le);return;case"option":for(var je in a)if(re=a[je],a.hasOwnProperty(je)&&re!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:kt(t,n,je,null,o,re)}for(H in o)if(re=o[H],le=a[H],o.hasOwnProperty(H)&&re!==le&&(re!=null||le!=null))switch(H){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:kt(t,n,H,re,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)re=a[Je],a.hasOwnProperty(Je)&&re!=null&&!o.hasOwnProperty(Je)&&kt(t,n,Je,null,o,re);for(ne in o)if(re=o[ne],le=a[ne],o.hasOwnProperty(ne)&&re!==le&&(re!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:kt(t,n,ne,re,o,le)}return;default:if(Nt(n)){for(var Xt in a)re=a[Xt],a.hasOwnProperty(Xt)&&re!==void 0&&!o.hasOwnProperty(Xt)&&fd(t,n,Xt,void 0,o,re);for(de in o)re=o[de],le=a[de],!o.hasOwnProperty(de)||re===le||re===void 0&&le===void 0||fd(t,n,de,re,o,le);return}}for(var K in a)re=a[K],a.hasOwnProperty(K)&&re!=null&&!o.hasOwnProperty(K)&&kt(t,n,K,null,o,re);for(_e in o)re=o[_e],le=a[_e],!o.hasOwnProperty(_e)||re===le||re==null&&le==null||kt(t,n,_e,re,o,le)}function B0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,C=u.duration;if(d&&C&&B0(x)){for(x=0,C=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],ne=H.startTime;if(ne>C)break;var de=H.transferSize,_e=H.initiatorType;de&&B0(_e)&&(H=H.responseEnd,x+=de*(H<C?1:(C-ne)/(H-ne)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dd=null,hd=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function F0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function pd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var md=null;function KS(){var t=window.event;return t&&t.type==="popstate"?t===md?!1:(md=t,!0):(md=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,QS=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch($S)}:G0;function $S(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function k0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Cr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")jo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,jo(a);for(var d=a.firstChild;d;){var x=d.nextSibling,C=d.nodeName;d[Na]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&jo(t.ownerDocument.body);a=u}while(a);Cr(n)}function X0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function gd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gd(a),co(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ey(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function ty(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function j0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function vd(t){return t.data==="$?"||t.data==="$~"}function _d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ny(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var xd=null;function W0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Y0(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function jo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);co(t)}var wi=new Map,Z0=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ya=F.d;F.d={f:iy,r:ay,D:sy,C:ry,L:oy,m:ly,X:uy,S:cy,M:fy};function iy(){var t=ya.f(),n=ac();return t||n}function ay(t){var n=Oa(t);n!==null&&n.tag===5&&n.type==="form"?dg(n):ya.r(t)}var Tr=typeof document>"u"?null:document;function K0(t,n,a){var o=Tr;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Z0.has(u)||(Z0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function sy(t){ya.D(t),K0("dns-prefetch",t,null)}function ry(t,n){ya.C(t,n),K0("preconnect",t,n)}function oy(t,n,a){ya.L(t,n,a);var o=Tr;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var d=u;switch(n){case"style":d=Ar(t);break;case"script":d=wr(t)}wi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),wi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Wo(d))||n==="script"&&o.querySelector(qo(d))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function ly(t,n){ya.m(t,n);var a=Tr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=wr(t)}if(!wi.has(d)&&(t=_({rel:"modulepreload",href:t},n),wi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qo(d)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function cy(t,n,a){ya.S(t,n,a);var o=Tr;if(o&&t){var u=Pa(o).hoistableStyles,d=Ar(t);n=n||"default";var x=u.get(d);if(!x){var C={loading:0,preload:null};if(x=o.querySelector(Wo(d)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=wi.get(d))&&Sd(t,a);var H=x=o.createElement("link");hn(H),Dn(H,"link",t),H._p=new Promise(function(ne,de){H.onload=ne,H.onerror=de}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,pc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:C},u.set(d,x)}}}function uy(t,n){ya.X(t,n);var a=Tr;if(a&&t){var o=Pa(a).hoistableScripts,u=wr(t),d=o.get(u);d||(d=a.querySelector(qo(u)),d||(t=_({src:t,async:!0},n),(n=wi.get(u))&&yd(t,n),d=a.createElement("script"),hn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function fy(t,n){ya.M(t,n);var a=Tr;if(a&&t){var o=Pa(a).hoistableScripts,u=wr(t),d=o.get(u);d||(d=a.querySelector(qo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=wi.get(u))&&yd(t,n),d=a.createElement("script"),hn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Q0(t,n,a,o){var u=(u=oe.current)?hc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ar(a.href),a=Pa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ar(a.href);var d=Pa(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Wo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),wi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(t,a),d||dy(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wr(a),a=Pa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ar(t){return'href="'+Pt(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function J0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function dy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function wr(t){return'[src="'+Pt(t)+'"]'}function qo(t){return"script[async]"+t}function $0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ar(a.href);var d=t.querySelector(Wo(u));if(d)return n.state.loading|=4,n.instance=d,hn(d),d;o=J0(a),(u=wi.get(u))&&Sd(o,u),d=(t.ownerDocument||t).createElement("link"),hn(d);var x=d;return x._p=new Promise(function(C,H){x.onload=C,x.onerror=H}),Dn(d,"link",o),n.state.loading|=4,pc(d,a.precedence,t),n.instance=d;case"script":return d=wr(a.src),(u=t.querySelector(qo(d)))?(n.instance=u,hn(u),u):(o=a,(u=wi.get(d))&&(o=_({},a),yd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var C=o[x];if(C.dataset.precedence===n)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function ev(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Na]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var C=o.get(x);C?C.push(d):o.set(x,[d])}}return o}function tv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function py(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ar(o.href),d=n.querySelector(Wo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,hn(d);return}d=n.ownerDocument||n,o=J0(o),(u=wi.get(u))&&Sd(o,u),d=d.createElement("link"),hn(d);var x=d;x._p=new Promise(function(C,H){x.onload=C,x.onerror=H}),Dn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Md=0;function my(t,n){return t.stylesheets&&t.count===0&&_c(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Md===0&&(Md=62500*ZS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&_c(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Md?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vc=null;function _c(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vc=new Map,n.forEach(gy,t),vc=null,gc.call(t))}function gy(t,n){if(!(n.state.loading&4)){var a=vc.get(t);if(a)var o=a.get(null);else{a=new Map,vc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Yo={$$typeof:D,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function vy(t,n,a,o,u,d,x,C,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function iv(t,n,a,o,u,d,x,C,H,ne,de,_e){return t=new vy(t,n,a,x,H,ne,de,_e,C),n=1,d===!0&&(n|=24),d=oi(3,null,null,n),t.current=d,d.stateNode=t,n=ef(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},sf(d),t}function av(t){return t?(t=ar,t):ar}function sv(t,n,a,o,u,d){u=av(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Xa(t,o,n),a!==null&&($n(a,t,n),Ao(a,t,n))}function rv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bd(t,n){rv(t,n),(t=t.alternate)&&rv(t,n)}function ov(t){if(t.tag===13||t.tag===31){var n=Es(t,67108864);n!==null&&$n(n,t,67108864),bd(t,67108864)}}function lv(t){if(t.tag===13||t.tag===31){var n=di();n=_s(n);var a=Es(t,n);a!==null&&$n(a,t,n),bd(t,n)}}var xc=!0;function _y(t,n,a,o){var u=P.T;P.T=null;var d=F.p;try{F.p=2,Ed(t,n,a,o)}finally{F.p=d,P.T=u}}function xy(t,n,a,o){var u=P.T;P.T=null;var d=F.p;try{F.p=8,Ed(t,n,a,o)}finally{F.p=d,P.T=u}}function Ed(t,n,a,o){if(xc){var u=Td(o);if(u===null)ud(t,n,o,Sc,a),uv(t,o);else if(yy(u,t,n,a,o))o.stopPropagation();else if(uv(t,o),n&4&&-1<Sy.indexOf(t)){for(;u!==null;){var d=Oa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Te(d.pendingLanes);if(x!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var H=1<<31-Pe(x);C.entanglements[1]|=H,x&=~H}Wi(d),(Ut&6)===0&&(nc=we()+500,Vo(0))}}break;case 31:case 13:C=Es(d,2),C!==null&&$n(C,d,2),ac(),bd(d,2)}if(d=Td(o),d===null&&ud(t,n,o,Sc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ud(t,n,o,null,a)}}function Td(t){return t=Au(t),Ad(t)}var Sc=null;function Ad(t){if(Sc=null,t=La(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Sc=t,null}function cv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jt()){case U:return 2;case b:return 8;case $:case ve:return 32;case be:return 268435456;default:return 32}default:return 32}}var wd=!1,ts=null,ns=null,is=null,Zo=new Map,Ko=new Map,as=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Oa(n),n!==null&&ov(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function yy(t,n,a,o,u){switch(n){case"focusin":return ts=Qo(ts,t,n,a,o,u),!0;case"dragenter":return ns=Qo(ns,t,n,a,o,u),!0;case"mouseover":return is=Qo(is,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Zo.set(d,Qo(Zo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ko.set(d,Qo(Ko.get(d)||null,t,n,a,o,u)),!0}return!1}function fv(t){var n=La(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,oo(t.priority,function(){lv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,oo(t.priority,function(){lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Td(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Tu=o,a.target.dispatchEvent(o),Tu=null}else return n=Oa(a),n!==null&&ov(n),t.blockedOn=a,!1;n.shift()}return!0}function dv(t,n,a){yc(t)&&a.delete(n)}function My(){wd=!1,ts!==null&&yc(ts)&&(ts=null),ns!==null&&yc(ns)&&(ns=null),is!==null&&yc(is)&&(is=null),Zo.forEach(dv),Ko.forEach(dv)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,wd||(wd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,My)))}var bc=null;function hv(t){bc!==t&&(bc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===t&&(bc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ad(o||a)===null)continue;break}var d=Oa(a);d!==null&&(t.splice(n,3),n-=3,Tf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Cr(t){function n(H){return Mc(H,t)}ts!==null&&Mc(ts,t),ns!==null&&Mc(ns,t),is!==null&&Mc(is,t),Zo.forEach(n),Ko.forEach(n);for(var a=0;a<as.length;a++){var o=as[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&as.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[An]||null;if(typeof d=="function")x||hv(a);else if(x){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[An]||null)C=x.formAction;else if(Ad(u)!==null)continue}else C=x.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),hv(a)}}}function pv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Cd(t){this._internalRoot=t}Ec.prototype.render=Cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=di();sv(a,o,t,n,null,null)},Ec.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;sv(t.current,2,null,t,null,null),ac(),n[aa]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=ro();t={blockedOn:null,target:t,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,t),a===0&&fv(t)}};var mv=e.version;if(mv!=="19.2.5")throw Error(s(527,mv,"19.2.5"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var by={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{ce=Tc.inject(by),fe=Tc}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Mg,d=bg,x=Eg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=iv(t,1,!1,null,null,a,o,null,u,d,x,pv),t[aa]=n.current,cd(t),new Cd(n)},$o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Mg,x=bg,C=Eg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=iv(t,1,!0,n,a??null,o,u,H,d,x,C,pv),n.context=av(null),a=n.current,o=di(),o=_s(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,tt(n,a),Wi(n),t[aa]=n.current,cd(t),new Ec(n)},$o.version="19.2.5",$o}var Tv;function Ly(){if(Tv)return Ud.exports;Tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ud.exports=Ny(),Ud.exports}var Oy=Ly();const Py=`
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
`;function zy(r){const[e,i]=ot.useState(r),s=ot.useCallback((l,c)=>{i(f=>({...f,[l]:c})),window.parent.postMessage({type:"__edit_mode_set_keys",edits:{[l]:c}},"*")},[]);return[e,s]}function Iy({title:r="Tweaks",children:e}){const[i,s]=ot.useState(!1),l=ot.useRef(null),c=ot.useRef({x:16,y:16}),f=16,h=ot.useCallback(()=>{const v=l.current;if(!v)return;const _=v.offsetWidth,g=v.offsetHeight,M=Math.max(f,window.innerWidth-_-f),E=Math.max(f,window.innerHeight-g-f);c.current={x:Math.min(M,Math.max(f,c.current.x)),y:Math.min(E,Math.max(f,c.current.y))},v.style.right=c.current.x+"px",v.style.bottom=c.current.y+"px"},[]);ot.useEffect(()=>{if(!i)return;if(h(),typeof ResizeObserver>"u")return window.addEventListener("resize",h),()=>window.removeEventListener("resize",h);const v=new ResizeObserver(h);return v.observe(document.documentElement),()=>v.disconnect()},[i,h]),ot.useEffect(()=>{const v=_=>{var M;const g=(M=_==null?void 0:_.data)==null?void 0:M.type;g==="__activate_edit_mode"?s(!0):g==="__deactivate_edit_mode"&&s(!1)};return window.addEventListener("message",v),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",v)},[]);const m=()=>{s(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},p=v=>{const _=l.current;if(!_)return;const g=_.getBoundingClientRect(),M=v.clientX,E=v.clientY,R=window.innerWidth-g.right,y=window.innerHeight-g.bottom,S=D=>{c.current={x:R-(D.clientX-M),y:y-(D.clientY-E)},h()},A=()=>{window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",A)};window.addEventListener("mousemove",S),window.addEventListener("mouseup",A)};return i?O.jsxs(O.Fragment,{children:[O.jsx("style",{children:Py}),O.jsxs("div",{ref:l,className:"twk-panel",style:{right:c.current.x,bottom:c.current.y},children:[O.jsxs("div",{className:"twk-hd",onMouseDown:p,children:[O.jsx("b",{children:r}),O.jsx("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:v=>v.stopPropagation(),onClick:m,children:"✕"})]}),O.jsx("div",{className:"twk-body",children:e})]})]}):null}function Ac({label:r,children:e}){return O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"twk-sect",children:r}),e]})}function I_({label:r,value:e,children:i,inline:s=!1}){return O.jsxs("div",{className:s?"twk-row twk-row-h":"twk-row",children:[O.jsxs("div",{className:"twk-lbl",children:[O.jsx("span",{children:r}),e!=null&&O.jsx("span",{className:"twk-val",children:e})]}),i]})}function Pd({label:r,value:e,min:i=0,max:s=100,step:l=1,unit:c="",onChange:f}){return O.jsx(I_,{label:r,value:`${e}${c}`,children:O.jsx("input",{type:"range",className:"twk-slider",min:i,max:s,step:l,value:e,onChange:h=>f(Number(h.target.value))})})}function By({label:r,value:e,onChange:i}){return O.jsxs("div",{className:"twk-row twk-row-h",children:[O.jsx("div",{className:"twk-lbl",children:O.jsx("span",{children:r})}),O.jsx("button",{type:"button",className:"twk-toggle","data-on":e?"1":"0",role:"switch","aria-checked":!!e,onClick:()=>i(!e),children:O.jsx("i",{})})]})}function Fy({label:r,value:e,options:i,onChange:s}){const l=ot.useRef(null),[c,f]=ot.useState(!1),h=i.map(M=>typeof M=="object"?M:{value:M,label:M}),m=Math.max(0,h.findIndex(M=>M.value===e)),p=h.length,v=ot.useRef(e);v.current=e;const _=M=>{const E=l.current.getBoundingClientRect(),R=E.width-4,y=Math.floor((M-E.left-2)/R*p);return h[Math.max(0,Math.min(p-1,y))].value},g=M=>{f(!0);const E=_(M.clientX);E!==v.current&&s(E);const R=S=>{if(!l.current)return;const A=_(S.clientX);A!==v.current&&s(A)},y=()=>{f(!1),window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",y)};window.addEventListener("pointermove",R),window.addEventListener("pointerup",y)};return O.jsx(I_,{label:r,children:O.jsxs("div",{ref:l,role:"radiogroup",onPointerDown:g,className:c?"twk-seg dragging":"twk-seg",children:[O.jsx("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${m} * (100% - 4px) / ${p})`,width:`calc((100% - 4px) / ${p})`}}),h.map(M=>O.jsx("button",{type:"button",role:"radio","aria-checked":M.value===e,children:M.label},M.value))]})})}function zd({label:r,value:e,onChange:i}){return O.jsxs("div",{className:"twk-row twk-row-h",children:[O.jsx("div",{className:"twk-lbl",children:O.jsx("span",{children:r})}),O.jsx("input",{type:"color",className:"twk-swatch",value:e,onChange:s=>i(s.target.value)})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gp="184",Hy=0,Av=1,Gy=2,ru=1,Vy=2,ol=3,ms=0,ti=1,Qi=2,ta=0,Wr=1,Sh=2,wv=3,Cv=4,ky=5,ks=100,Xy=101,jy=102,Wy=103,qy=104,Yy=200,Zy=201,Ky=202,Qy=203,yh=204,Mh=205,Jy=206,$y=207,eM=208,tM=209,nM=210,iM=211,aM=212,sM=213,rM=214,bh=0,Eh=1,Th=2,Zr=3,Ah=4,wh=5,Ch=6,Rh=7,vp=0,oM=1,lM=2,na=0,B_=1,F_=2,H_=3,G_=4,V_=5,k_=6,X_=7,j_=300,Ys=301,Kr=302,Id=303,Bd=304,Su=306,Dh=1e3,wa=1001,Uh=1002,On=1003,cM=1004,wc=1005,Vn=1006,Fd=1007,js=1008,gi=1009,W_=1010,q_=1011,ul=1012,_p=1013,ia=1014,$i=1015,vi=1016,xp=1017,Sp=1018,fl=1020,Y_=35902,Z_=35899,K_=1021,Q_=1022,Gi=1023,Da=1026,Ws=1027,J_=1028,yp=1029,Zs=1030,Mp=1031,bp=1033,ou=33776,lu=33777,cu=33778,uu=33779,Nh=35840,Lh=35841,Oh=35842,Ph=35843,zh=36196,Ih=37492,Bh=37496,Fh=37488,Hh=37489,hu=37490,Gh=37491,Vh=37808,kh=37809,Xh=37810,jh=37811,Wh=37812,qh=37813,Yh=37814,Zh=37815,Kh=37816,Qh=37817,Jh=37818,$h=37819,ep=37820,tp=37821,np=36492,ip=36494,ap=36495,sp=36283,rp=36284,pu=36285,op=36286,uM=3200,lp=0,fM=1,ds="",Ri="srgb",mu="srgb-linear",gu="linear",Ft="srgb",Rr=7680,Rv=519,dM=512,hM=513,pM=514,Ep=515,mM=516,gM=517,Tp=518,vM=519,cp=35044,Dv="300 es",ea=2e3,dl=2001;function _M(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xM(){const r=vu("canvas");return r.style.display="block",r}const Uv={};function _u(...r){const e="THREE."+r.shift();console.log(e,...r)}function $_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function et(...r){r=$_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function At(...r){r=$_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function up(...r){const e=r.join(" ");e in Uv||(Uv[e]=!0,et(...r))}function SM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const yM={[bh]:Eh,[Th]:Ch,[Ah]:Rh,[Zr]:wh,[Eh]:bh,[Ch]:Th,[Rh]:Ah,[wh]:Zr};class Ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nv=1234567;const qr=Math.PI/180,hl=180/Math.PI;function Ca(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function ut(r,e,i){return Math.max(e,Math.min(i,r))}function Ap(r,e){return(r%e+e)%e}function MM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function bM(r,e,i){return r!==e?(i-r)/(e-r):0}function cl(r,e,i){return(1-i)*r+i*e}function EM(r,e,i,s){return cl(r,e,1-Math.exp(-i*s))}function TM(r,e=1){return e-Math.abs(Ap(r,e*2)-e)}function AM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function wM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function CM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function RM(r,e){return r+Math.random()*(e-r)}function DM(r){return r*(.5-Math.random())}function UM(r){r!==void 0&&(Nv=r);let e=Nv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function NM(r){return r*qr}function LM(r){return r*hl}function OM(r){return(r&r-1)===0&&r!==0}function PM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function IM(r,e,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+s)/2),v=f((e+s)/2),_=c((e-s)/2),g=f((e-s)/2),M=c((s-e)/2),E=f((s-e)/2);switch(l){case"XYX":r.set(h*v,m*_,m*g,h*p);break;case"YZY":r.set(m*g,h*v,m*_,h*p);break;case"ZXZ":r.set(m*_,m*g,h*v,h*p);break;case"XZX":r.set(h*v,m*E,m*M,h*p);break;case"YXY":r.set(m*M,h*v,m*E,h*p);break;case"ZYZ":r.set(m*E,m*M,h*v,h*p);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ht(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const BM={DEG2RAD:qr,RAD2DEG:hl,generateUUID:Ca,clamp:ut,euclideanModulo:Ap,mapLinear:MM,inverseLerp:bM,lerp:cl,damp:EM,pingpong:TM,smoothstep:AM,smootherstep:wM,randInt:CM,randFloat:RM,randFloatSpread:DM,seededRandom:UM,degToRad:NM,radToDeg:LM,isPowerOfTwo:OM,ceilPowerOfTwo:PM,floorPowerOfTwo:zM,setQuaternionFromProperEuler:IM,normalize:Ht,denormalize:Hi},Lp=class Lp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ut(this.x,e.x,i.x),this.y=ut(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ut(this.x,e,i),this.y=ut(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lp.prototype.isVector2=!0;let nt=Lp;class to{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],g=c[f+0],M=c[f+1],E=c[f+2],R=c[f+3];if(_!==R||m!==g||p!==M||v!==E){let y=m*g+p*M+v*E+_*R;y<0&&(g=-g,M=-M,E=-E,R=-R,y=-y);let S=1-h;if(y<.9995){const A=Math.acos(y),D=Math.sin(A);S=Math.sin(S*A)/D,h=Math.sin(h*A)/D,m=m*S+g*h,p=p*S+M*h,v=v*S+E*h,_=_*S+R*h}else{m=m*S+g*h,p=p*S+M*h,v=v*S+E*h,_=_*S+R*h;const A=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=A,p*=A,v*=A,_*=A}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[f],g=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+v*_+m*M-p*g,e[i+1]=m*E+v*g+p*_-h*M,e[i+2]=p*E+v*M+h*g-m*_,e[i+3]=v*E-h*_-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(l/2),_=h(c/2),g=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=g*v*_+p*M*E,this._y=p*M*_-g*v*E,this._z=p*v*E+g*M*_,this._w=p*v*_-g*M*E;break;case"YXZ":this._x=g*v*_+p*M*E,this._y=p*M*_-g*v*E,this._z=p*v*E-g*M*_,this._w=p*v*_+g*M*E;break;case"ZXY":this._x=g*v*_-p*M*E,this._y=p*M*_+g*v*E,this._z=p*v*E+g*M*_,this._w=p*v*_-g*M*E;break;case"ZYX":this._x=g*v*_-p*M*E,this._y=p*M*_+g*v*E,this._z=p*v*E-g*M*_,this._w=p*v*_+g*M*E;break;case"YZX":this._x=g*v*_+p*M*E,this._y=p*M*_+g*v*E,this._z=p*v*E-g*M*_,this._w=p*v*_-g*M*E;break;case"XZY":this._x=g*v*_-p*M*E,this._y=p*M*_-g*v*E,this._z=p*v*E+g*M*_,this._w=p*v*_+g*M*E;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],g=s+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*h+l*p-c*m,this._y=l*v+f*m+c*h-s*p,this._z=c*v+f*p+s*m-l*h,this._w=f*v-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Op=class Op{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Lv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Lv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),v=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*v,this.y=s+m*v+h*p-c*_,this.z=l+m*_+c*v-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ut(this.x,e.x,i.x),this.y=ut(this.y,e.y,i.y),this.z=ut(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ut(this.x,e,i),this.y=ut(this.y,e,i),this.z=ut(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ut(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Op.prototype.isVector3=!0;let j=Op;const Hd=new j,Lv=new to,Pp=class Pp{constructor(e,i,s,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],v=s[4],_=s[7],g=s[2],M=s[5],E=s[8],R=l[0],y=l[3],S=l[6],A=l[1],D=l[4],N=l[7],V=l[2],L=l[5],B=l[8];return c[0]=f*R+h*A+m*V,c[3]=f*y+h*D+m*L,c[6]=f*S+h*N+m*B,c[1]=p*R+v*A+_*V,c[4]=p*y+v*D+_*L,c[7]=p*S+v*N+_*B,c[2]=g*R+M*A+E*V,c[5]=g*y+M*D+E*L,c[8]=g*S+M*N+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*f*v-i*h*p-s*c*v+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*f-h*p,g=h*m-v*c,M=p*c-f*m,E=i*_+s*g+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(l*p-v*s)*R,e[2]=(h*s-l*f)*R,e[3]=g*R,e[4]=(v*i-l*m)*R,e[5]=(l*c-h*i)*R,e[6]=M*R,e[7]=(s*m-p*i)*R,e[8]=(f*i-s*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Gd.makeScale(e,i)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pp.prototype.isMatrix3=!0;let rt=Pp;const Gd=new rt,Ov=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FM(){const r={enabled:!0,workingColorSpace:mu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Yr(l.r),l.g=Yr(l.g),l.b=Yr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?gu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return up("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return up("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[mu]:{primaries:e,whitePoint:s,transfer:gu,toXYZ:Ov,fromXYZ:Pv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:Ov,fromXYZ:Pv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),r}const Tt=FM();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Yr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dr;class HM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Dr===void 0&&(Dr=vu("canvas")),Dr.width=e.width,Dr.height=e.height;const l=Dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=vu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GM=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Vd(l[f].image)):c.push(Vd(l[f]))}else c=Vd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Vd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?HM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let VM=0;const kd=new j;class Wn extends Ks{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=wa,l=wa,c=Vn,f=js,h=Gi,m=gi,p=Wn.DEFAULT_ANISOTROPY,v=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ca(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){et(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){et(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=j_;Wn.DEFAULT_ANISOTROPY=1;const zp=class zp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],_=m[8],g=m[1],M=m[5],E=m[9],R=m[2],y=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+R)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,N=(M+1)/2,V=(S+1)/2,L=(v+g)/4,B=(_+R)/4,T=(E+y)/4;return D>N&&D>V?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=L/s,c=B/s):N>V?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=L/l,c=T/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=B/c,l=T/c),this.set(s,l,c,i),this}let A=Math.sqrt((y-E)*(y-E)+(_-R)*(_-R)+(g-v)*(g-v));return Math.abs(A)<.001&&(A=1),this.x=(y-E)/A,this.y=(_-R)/A,this.z=(g-v)/A,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ut(this.x,e.x,i.x),this.y=ut(this.y,e.y,i.y),this.z=ut(this.z,e.z,i.z),this.w=ut(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ut(this.x,e,i),this.y=ut(this.y,e,i),this.z=ut(this.z,e,i),this.w=ut(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ut(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;let Yt=zp;class kM extends Ks{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Yt(0,0,e,i),this.scissorTest=!1,this.viewport=new Yt(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Wn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new wp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends kM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class ex extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=class xu{constructor(e,i,s,l,c,f,h,m,p,v,_,g,M,E,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,v,_,g,M,E,R,y)}set(e,i,s,l,c,f,h,m,p,v,_,g,M,E,R,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=v,S[10]=_,S[14]=g,S[3]=M,S[7]=E,S[11]=R,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),f=1/Ur.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=f*v,M=f*_,E=h*v,R=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=g-R*p,i[9]=-h*m,i[2]=R-g*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*v,M=m*_,E=p*v,R=p*_;i[0]=g+R*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*_,i[5]=f*v,i[9]=-h,i[2]=M*h-E,i[6]=R+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*v,M=m*_,E=p*v,R=p*_;i[0]=g-R*h,i[4]=-f*_,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*v,i[9]=R-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*v,M=f*_,E=h*v,R=h*_;i[0]=m*v,i[4]=E*p-M,i[8]=g*p+R,i[1]=m*_,i[5]=R*p+g,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,E=h*m,R=h*p;i[0]=m*v,i[4]=R-g*_,i[8]=E*_+M,i[1]=_,i[5]=f*v,i[9]=-h*v,i[2]=-p*v,i[6]=M*_+E,i[10]=g-R*_}else if(e.order==="XZY"){const g=f*m,M=f*p,E=h*m,R=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=g*_+R,i[5]=f*v,i[9]=M*_-E,i[2]=E*_-M,i[6]=h*v,i[10]=R*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jM,e,WM)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),rs.crossVectors(s,hi),rs.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),rs.crossVectors(s,hi)),rs.normalize(),Cc.crossVectors(hi,rs),l[0]=rs.x,l[4]=Cc.x,l[8]=hi.x,l[1]=rs.y,l[5]=Cc.y,l[9]=hi.y,l[2]=rs.z,l[6]=Cc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],v=s[1],_=s[5],g=s[9],M=s[13],E=s[2],R=s[6],y=s[10],S=s[14],A=s[3],D=s[7],N=s[11],V=s[15],L=l[0],B=l[4],T=l[8],z=l[12],q=l[1],G=l[5],Q=l[9],ue=l[13],me=l[2],Y=l[6],P=l[10],F=l[14],ee=l[3],he=l[7],Se=l[11],I=l[15];return c[0]=f*L+h*q+m*me+p*ee,c[4]=f*B+h*G+m*Y+p*he,c[8]=f*T+h*Q+m*P+p*Se,c[12]=f*z+h*ue+m*F+p*I,c[1]=v*L+_*q+g*me+M*ee,c[5]=v*B+_*G+g*Y+M*he,c[9]=v*T+_*Q+g*P+M*Se,c[13]=v*z+_*ue+g*F+M*I,c[2]=E*L+R*q+y*me+S*ee,c[6]=E*B+R*G+y*Y+S*he,c[10]=E*T+R*Q+y*P+S*Se,c[14]=E*z+R*ue+y*F+S*I,c[3]=A*L+D*q+N*me+V*ee,c[7]=A*B+D*G+N*Y+V*he,c[11]=A*T+D*Q+N*P+V*Se,c[15]=A*z+D*ue+N*F+V*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],g=e[10],M=e[14],E=e[3],R=e[7],y=e[11],S=e[15],A=m*M-p*g,D=h*M-p*_,N=h*g-m*_,V=f*M-p*v,L=f*g-m*v,B=f*_-h*v;return i*(R*A-y*D+S*N)-s*(E*A-y*V+S*L)+l*(E*D-R*V+S*B)-c*(E*N-R*L+y*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],g=e[10],M=e[11],E=e[12],R=e[13],y=e[14],S=e[15],A=i*h-s*f,D=i*m-l*f,N=i*p-c*f,V=s*m-l*h,L=s*p-c*h,B=l*p-c*m,T=v*R-_*E,z=v*y-g*E,q=v*S-M*E,G=_*y-g*R,Q=_*S-M*R,ue=g*S-M*y,me=A*ue-D*Q+N*G+V*q-L*z+B*T;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/me;return e[0]=(h*ue-m*Q+p*G)*Y,e[1]=(l*Q-s*ue-c*G)*Y,e[2]=(R*B-y*L+S*V)*Y,e[3]=(g*L-_*B-M*V)*Y,e[4]=(m*q-f*ue-p*z)*Y,e[5]=(i*ue-l*q+c*z)*Y,e[6]=(y*N-E*B-S*D)*Y,e[7]=(v*B-g*N+M*D)*Y,e[8]=(f*Q-h*q+p*T)*Y,e[9]=(s*q-i*Q-c*T)*Y,e[10]=(E*L-R*N+S*A)*Y,e[11]=(_*N-v*L-M*A)*Y,e[12]=(h*z-f*G-m*T)*Y,e[13]=(i*G-s*z+l*T)*Y,e[14]=(R*D-E*V-y*A)*Y,e[15]=(v*V-_*D+g*A)*Y,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,v=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+s,v*m-l*f,0,p*m-l*h,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,v=f+f,_=h+h,g=c*p,M=c*v,E=c*_,R=f*v,y=f*_,S=h*_,A=m*p,D=m*v,N=m*_,V=s.x,L=s.y,B=s.z;return l[0]=(1-(R+S))*V,l[1]=(M+N)*V,l[2]=(E-D)*V,l[3]=0,l[4]=(M-N)*L,l[5]=(1-(g+S))*L,l[6]=(y+A)*L,l[7]=0,l[8]=(E+D)*B,l[9]=(y-A)*B,l[10]=(1-(g+R))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Ur.set(l[0],l[1],l[2]).length();const h=Ur.set(l[4],l[5],l[6]).length(),m=Ur.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ii.copy(this);const p=1/f,v=1/h,_=1/m;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=v,Ii.elements[5]*=v,Ii.elements[6]*=v,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,i.setFromRotationMatrix(Ii),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,f,h=ea,m=!1){const p=this.elements,v=2*c/(i-e),_=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let E,R;if(m)E=c/(f-c),R=f*c/(f-c);else if(h===ea)E=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(h===dl)E=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=ea,m=!1){const p=this.elements,v=2/(i-e),_=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,R;if(m)E=1/(f-c),R=f/(f-c);else if(h===ea)E=-2/(f-c),R=-(f+c)/(f-c);else if(h===dl)E=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};xu.prototype.isMatrix4=!0;let sn=xu;const Ur=new j,Ii=new sn,jM=new j(0,0,0),WM=new j(1,1,1),rs=new j,Cc=new j,hi=new j,zv=new sn,Iv=new to;class gs{constructor(e=0,i=0,s=0,l=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ut(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ut(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Iv.setFromEuler(this),this.setFromQuaternion(Iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qM=0;const Bv=new j,Nr=new to,Ma=new sn,Rc=new j,el=new j,YM=new j,ZM=new to,Fv=new j(1,0,0),Hv=new j(0,1,0),Gv=new j(0,0,1),Vv={type:"added"},KM={type:"removed"},Lr={type:"childadded",child:null},Xd={type:"childremoved",child:null};class qn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new j,i=new gs,s=new to,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new rt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Hv,e)}rotateZ(e){return this.rotateOnAxis(Gv,e)}translateOnAxis(e,i){return Bv.copy(e).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Hv,e)}translateZ(e){return this.translateOnAxis(Gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Rc.copy(e):Rc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(el,Rc,this.up):Ma.lookAt(Rc,el,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vv),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(KM),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vv),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,e,YM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),v=f(e.images),_=f(e.shapes),g=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new j(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),S=this._getHandJoint(p,R);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&g>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Dc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function Wd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class St{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Tt.workingColorSpace){if(e=Ap(e,1),i=ut(i,0,1),s=ut(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Wd(f,c,e+1/3),this.g=Wd(f,c,e),this.b=Wd(f,c,e-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function s(c){c!==void 0&&parseFloat(c)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:et("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const s=nx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Tt.workingToColorSpace(Gn.copy(this),e),Math.round(ut(Gn.r*255,0,255))*65536+Math.round(ut(Gn.g*255,0,255))*256+Math.round(ut(Gn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=v<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ri){Tt.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,s=Gn.g,l=Gn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(os),this.setHSL(os.h+e,os.s+i,os.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(os),e.getHSL(Uc);const s=cl(os.h,Uc.h,i),l=cl(os.s,Uc.s,i),c=cl(os.l,Uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new St;St.NAMES=nx;class JM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gs,this.environmentIntensity=1,this.environmentRotation=new gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new j,ba=new j,qd=new j,Ea=new j,Or=new j,Pr=new j,kv=new j,Yd=new j,Zd=new j,Kd=new j,Qd=new Yt,Jd=new Yt,$d=new Yt;class Di{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Bi.subVectors(e,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Bi.subVectors(l,i),ba.subVectors(s,i),qd.subVectors(e,i);const f=Bi.dot(Bi),h=Bi.dot(ba),m=Bi.dot(qd),p=ba.dot(ba),v=ba.dot(qd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(p*m-h*v)*g,E=(f*v-h*m)*g;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(f,Ea.y),m.addScaledVector(h,Ea.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Qd.setScalar(0),Jd.setScalar(0),$d.setScalar(0),Qd.fromBufferAttribute(e,i),Jd.fromBufferAttribute(e,s),$d.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Qd,c.x),f.addScaledVector(Jd,c.y),f.addScaledVector($d,c.z),f}static isFrontFacing(e,i,s,l){return Bi.subVectors(s,i),ba.subVectors(e,i),Bi.cross(ba).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Bi.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Or.subVectors(l,s),Pr.subVectors(c,s),Yd.subVectors(e,s);const m=Or.dot(Yd),p=Pr.dot(Yd);if(m<=0&&p<=0)return i.copy(s);Zd.subVectors(e,l);const v=Or.dot(Zd),_=Pr.dot(Zd);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*p;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Or,f);Kd.subVectors(e,c);const M=Or.dot(Kd),E=Pr.dot(Kd);if(E>=0&&M<=E)return i.copy(c);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Pr,h);const y=v*E-M*_;if(y<=0&&_-v>=0&&M-E>=0)return kv.subVectors(c,l),h=(_-v)/(_-v+(M-E)),i.copy(l).addScaledVector(kv,h);const S=1/(y+R+g);return f=R*S,h=g*S,i.copy(s).addScaledVector(Or,f).addScaledVector(Pr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vs{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Fi):Fi.fromBufferAttribute(c,f),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tl),Lc.subVectors(this.max,tl),zr.subVectors(e.a,tl),Ir.subVectors(e.b,tl),Br.subVectors(e.c,tl),ls.subVectors(Ir,zr),cs.subVectors(Br,Ir),Is.subVectors(zr,Br);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Is.z,Is.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Is.z,0,-Is.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Is.y,Is.x,0];return!eh(i,zr,Ir,Br,Lc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,zr,Ir,Br,Lc))?!1:(Oc.crossVectors(ls,cs),i=[Oc.x,Oc.y,Oc.z],eh(i,zr,Ir,Br,Lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ta=[new j,new j,new j,new j,new j,new j,new j,new j],Fi=new j,Nc=new vs,zr=new j,Ir=new j,Br=new j,ls=new j,cs=new j,Is=new j,tl=new j,Lc=new j,Oc=new j,Bs=new j;function eh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Bs.fromArray(r,c);const h=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),m=e.dot(Bs),p=i.dot(Bs),v=s.dot(Bs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const _n=new j,Pc=new nt;let $M=0;class Ui extends Ks{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=cp,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Pc.fromBufferAttribute(this,i),Pc.applyMatrix3(e),this.setXY(i,Pc.x,Pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Hi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ht(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Hi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Hi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Hi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Hi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array),c=Ht(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ix extends Ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ax extends Ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class dn extends Ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}const eb=new vs,nl=new j,th=new j;class no{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):eb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nl.subVectors(e,this.center);const i=nl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(nl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nl.copy(e.center).add(th)),this.expandByPoint(nl.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tb=0;const Ci=new sn,nh=new qn,Fr=new j,pi=new vs,il=new vs,En=new j;class zn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_M(e)?ax:ix)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new rt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,s){return Ci.makeTranslation(e,i,s),this.applyMatrix4(Ci),this}scale(e,i,s){return Ci.makeScale(e,i,s),this.applyMatrix4(Ci),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];il.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(pi.min,il.min),pi.expandByPoint(En),En.addVectors(pi.max,il.max),pi.expandByPoint(En)):(pi.expandByPoint(il.min),pi.expandByPoint(il.max))}pi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),m&&(Fr.fromBufferAttribute(e,p),En.add(Fr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new j,m[T]=new j;const p=new j,v=new j,_=new j,g=new nt,M=new nt,E=new nt,R=new j,y=new j;function S(T,z,q){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,z),_.fromBufferAttribute(s,q),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,z),E.fromBufferAttribute(c,q),v.sub(p),_.sub(p),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(R.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),h[T].add(R),h[z].add(R),h[q].add(R),m[T].add(y),m[z].add(y),m[q].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,z=A.length;T<z;++T){const q=A[T],G=q.start,Q=q.count;for(let ue=G,me=G+Q;ue<me;ue+=3)S(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const D=new j,N=new j,V=new j,L=new j;function B(T){V.fromBufferAttribute(l,T),L.copy(V);const z=h[T];D.copy(z),D.sub(V.multiplyScalar(V.dot(z))).normalize(),N.crossVectors(L,z);const G=N.dot(m[T])<0?-1:1;f.setXYZW(T,D.x,D.y,D.z,G)}for(let T=0,z=A.length;T<z;++T){const q=A[T],G=q.start,Q=q.count;for(let ue=G,me=G+Q;ue<me;ue+=3)B(e.getX(ue+0)),B(e.getX(ue+1)),B(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,f=new j,h=new j,m=new j,p=new j,v=new j,_=new j;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),R=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,g=new p.constructor(m.length*v);let M=0,E=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*v;for(let S=0;S<v;S++)g[E++]=p[M++]}return new Ui(g,v,_)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,_=p.length;v<_;v++){const g=p[v],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,g=p.length;_<g;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],_=c[p];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,v=f.length;p<v;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nb{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=cp,this.updateRanges=[],this.version=0,this.uuid=Ca()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ca()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new j;class hs{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Hi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Ht(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Hi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Hi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Hi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Hi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ht(i,this.array),s=Ht(s,this.array),l=Ht(l,this.array),c=Ht(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){_u("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ui(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_u("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ib=0;class io extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Wr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){et(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){et(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==ms&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==yh&&(s.blendSrc=this.blendSrc),this.blendDst!==Mh&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Aa=new j,ih=new j,zc=new j,us=new j,ah=new j,Ic=new j,sh=new j;class sx{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Aa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Aa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ih.copy(e).add(i).multiplyScalar(.5),zc.copy(i).sub(e).normalize(),us.copy(this.origin).sub(ih);const c=e.distanceTo(i)*.5,f=-this.direction.dot(zc),h=us.dot(this.direction),m=-us.dot(zc),p=us.lengthSq(),v=Math.abs(1-f*f);let _,g,M,E;if(v>0)if(_=f*m-h,g=f*h-m,E=c*v,_>=0)if(g>=-E)if(g<=E){const R=1/v;_*=R,g*=R,M=_*(_+f*g+2*h)+g*(f*_+g+2*m)+p}else g=c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;else g=-c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;else g<=-E?(_=Math.max(0,-(-f*c+h)),g=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p):g<=E?(_=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(_=Math.max(0,-(f*c+h)),g=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p);else g=f>0?-c:c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ih).addScaledVector(zc,g),M}intersectSphere(e,i){Aa.subVectors(e.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),v>=0?(c=(e.min.y-g.y)*v,f=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,f=(e.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Aa)!==null}intersectTriangle(e,i,s,l,c){ah.subVectors(i,e),Ic.subVectors(s,e),sh.crossVectors(ah,Ic);let f=this.direction.dot(sh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;us.subVectors(this.origin,e);const m=h*this.direction.dot(Ic.crossVectors(us,Ic));if(m<0)return null;const p=h*this.direction.dot(ah.cross(us));if(p<0||m+p>f)return null;const v=-h*us.dot(sh);return v<0?null:this.at(v/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yu extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xv=new sn,Fs=new sx,Bc=new no,jv=new j,Fc=new j,Hc=new j,Gc=new j,rh=new j,Vc=new j,Wv=new j,kc=new j;class _i extends qn{constructor(e=new zn,i=new yu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],_=c[m];v!==0&&(rh.fromBufferAttribute(_,e),f?Vc.addScaledVector(rh,v):Vc.addScaledVector(rh.sub(i),v))}i.add(Vc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Fs.copy(e.ray).recast(e.near),!(Bc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Bc,jv)===null||Fs.origin.distanceToSquared(jv)>(e.far-e.near)**2))&&(Xv.copy(c).invert(),Fs.copy(e.ray).applyMatrix4(Xv),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Fs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,R=g.length;E<R;E++){const y=g[E],S=f[y.materialIndex],A=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=A,V=D;N<V;N+=3){const L=h.getX(N),B=h.getX(N+1),T=h.getX(N+2);l=Xc(this,S,e,s,p,v,_,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=E,S=R;y<S;y+=3){const A=h.getX(y),D=h.getX(y+1),N=h.getX(y+2);l=Xc(this,f,e,s,p,v,_,A,D,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,R=g.length;E<R;E++){const y=g[E],S=f[y.materialIndex],A=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=A,V=D;N<V;N+=3){const L=N,B=N+1,T=N+2;l=Xc(this,S,e,s,p,v,_,L,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=E,S=R;y<S;y+=3){const A=y,D=y+1,N=y+2;l=Xc(this,f,e,s,p,v,_,A,D,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ab(r,e,i,s,l,c,f,h){let m;if(e.side===ti?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===ms,h),m===null)return null;kc.copy(h),kc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(kc);return p<i.near||p>i.far?null:{distance:p,point:kc.clone(),object:r}}function Xc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Fc),r.getVertexPosition(m,Hc),r.getVertexPosition(p,Gc);const v=ab(r,e,i,s,Fc,Hc,Gc,Wv);if(v){const _=new j;Di.getBarycoord(Wv,Fc,Hc,Gc,_),l&&(v.uv=Di.getInterpolatedAttribute(l,h,m,p,_,new nt)),c&&(v.uv1=Di.getInterpolatedAttribute(c,h,m,p,_,new nt)),f&&(v.normal=Di.getInterpolatedAttribute(f,h,m,p,_,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new j,materialIndex:0};Di.getNormal(Fc,Hc,Gc,g.normal),v.face=g,v.barycoord=_}return v}class sb extends Wn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=On,v=On,_,g){super(null,f,h,m,p,v,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new j,rb=new j,ob=new rt;class Vs{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=oh.subVectors(s,i).cross(rb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(oh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ob.getNormalMatrix(e),l=this.coplanarPoint(oh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new no,lb=new nt(.5,.5),jc=new j;class Cp{constructor(e=new Vs,i=new Vs,s=new Vs,l=new Vs,c=new Vs,f=new Vs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ea,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],_=c[5],g=c[6],M=c[7],E=c[8],R=c[9],y=c[10],S=c[11],A=c[12],D=c[13],N=c[14],V=c[15];if(l[0].setComponents(p-f,M-v,S-E,V-A).normalize(),l[1].setComponents(p+f,M+v,S+E,V+A).normalize(),l[2].setComponents(p+h,M+_,S+R,V+D).normalize(),l[3].setComponents(p-h,M-_,S-R,V-D).normalize(),s)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(p-m,M-g,S-y,V-N).normalize();else if(l[4].setComponents(p-m,M-g,S-y,V-N).normalize(),i===ea)l[5].setComponents(p+m,M+g,S+y,V+N).normalize();else if(i===dl)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);const i=lb.distanceTo(e.center);return Hs.radius=.7071067811865476+i,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(jc.x=l.normal.x>0?e.max.x:e.min.x,jc.y=l.normal.y>0?e.max.y:e.min.y,jc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rx extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qv=new sn,fp=new sx,Wc=new no,qc=new j;class cb extends qn{constructor(e=new zn,i=new rx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;qv.copy(l).invert(),fp.copy(e.ray).applyMatrix4(qv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const g=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let E=g,R=M;E<R;E++){const y=p.getX(E);qc.fromBufferAttribute(_,y),Yv(qc,y,m,l,e,i,this)}}else{const g=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let E=g,R=M;E<R;E++)qc.fromBufferAttribute(_,E),Yv(qc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Yv(r,e,i,s,l,c,f){const h=fp.distanceSqToPoint(r);if(h<i){const m=new j;fp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class ox extends Wn{constructor(e=[],i=Ys,s,l,c,f,h,m,p,v){super(e,i,s,l,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qr extends Wn{constructor(e,i,s=ia,l,c,f,h=On,m=On,p,v=Da,_=1){if(v!==Da&&v!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,f,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ub extends Qr{constructor(e,i=ia,s=Ys,l,c,f=On,h=On,m,p=Da){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lx extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends zn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],_=[];let g=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2));function E(R,y,S,A,D,N,V,L,B,T,z){const q=N/B,G=V/T,Q=N/2,ue=V/2,me=L/2,Y=B+1,P=T+1;let F=0,ee=0;const he=new j;for(let Se=0;Se<P;Se++){const I=Se*G-ue;for(let J=0;J<Y;J++){const xe=J*q-Q;he[R]=xe*A,he[y]=I*D,he[S]=me,p.push(he.x,he.y,he.z),he[R]=0,he[y]=0,he[S]=L>0?1:-1,v.push(he.x,he.y,he.z),_.push(J/B),_.push(1-Se/T),F+=1}}for(let Se=0;Se<T;Se++)for(let I=0;I<B;I++){const J=g+I+Y*Se,xe=g+I+Y*(Se+1),Ae=g+(I+1)+Y*(Se+1),De=g+(I+1)+Y*Se;m.push(J,xe,De),m.push(xe,Ae,De),ee+=6}h.addGroup(M,ee,z),M+=ee,g+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rp extends zn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],f=[];h(l),p(s),v(),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(c.slice(),3)),this.setAttribute("uv",new dn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(A){const D=new j,N=new j,V=new j;for(let L=0;L<i.length;L+=3)M(i[L+0],D),M(i[L+1],N),M(i[L+2],V),m(D,N,V,A)}function m(A,D,N,V){const L=V+1,B=[];for(let T=0;T<=L;T++){B[T]=[];const z=A.clone().lerp(N,T/L),q=D.clone().lerp(N,T/L),G=L-T;for(let Q=0;Q<=G;Q++)Q===0&&T===L?B[T][Q]=z:B[T][Q]=z.clone().lerp(q,Q/G)}for(let T=0;T<L;T++)for(let z=0;z<2*(L-T)-1;z++){const q=Math.floor(z/2);z%2===0?(g(B[T][q+1]),g(B[T+1][q]),g(B[T][q])):(g(B[T][q+1]),g(B[T+1][q+1]),g(B[T+1][q]))}}function p(A){const D=new j;for(let N=0;N<c.length;N+=3)D.x=c[N+0],D.y=c[N+1],D.z=c[N+2],D.normalize().multiplyScalar(A),c[N+0]=D.x,c[N+1]=D.y,c[N+2]=D.z}function v(){const A=new j;for(let D=0;D<c.length;D+=3){A.x=c[D+0],A.y=c[D+1],A.z=c[D+2];const N=y(A)/2/Math.PI+.5,V=S(A)/Math.PI+.5;f.push(N,1-V)}E(),_()}function _(){for(let A=0;A<f.length;A+=6){const D=f[A+0],N=f[A+2],V=f[A+4],L=Math.max(D,N,V),B=Math.min(D,N,V);L>.9&&B<.1&&(D<.2&&(f[A+0]+=1),N<.2&&(f[A+2]+=1),V<.2&&(f[A+4]+=1))}}function g(A){c.push(A.x,A.y,A.z)}function M(A,D){const N=A*3;D.x=e[N+0],D.y=e[N+1],D.z=e[N+2]}function E(){const A=new j,D=new j,N=new j,V=new j,L=new nt,B=new nt,T=new nt;for(let z=0,q=0;z<c.length;z+=9,q+=6){A.set(c[z+0],c[z+1],c[z+2]),D.set(c[z+3],c[z+4],c[z+5]),N.set(c[z+6],c[z+7],c[z+8]),L.set(f[q+0],f[q+1]),B.set(f[q+2],f[q+3]),T.set(f[q+4],f[q+5]),V.copy(A).add(D).add(N).divideScalar(3);const G=y(V);R(L,q+0,A,G),R(B,q+2,D,G),R(T,q+4,N,G)}}function R(A,D,N,V){V<0&&A.x===1&&(f[D]=A.x-1),N.x===0&&N.z===0&&(f[D]=V/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function S(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rp(e.vertices,e.indices,e.radius,e.detail)}}const Yc=new j,Zc=new j,lh=new j,Kc=new Di;class fb extends zn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(qr*i),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],v=["a","b","c"],_=new Array(3),g={},M=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:R,b:y,c:S}=Kc;if(R.fromBufferAttribute(h,p[0]),y.fromBufferAttribute(h,p[1]),S.fromBufferAttribute(h,p[2]),Kc.getNormal(lh),_[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let A=0;A<3;A++){const D=(A+1)%3,N=_[A],V=_[D],L=Kc[v[A]],B=Kc[v[D]],T=`${N}_${V}`,z=`${V}_${N}`;z in g&&g[z]?(lh.dot(g[z].normal)<=c&&(M.push(L.x,L.y,L.z),M.push(B.x,B.y,B.z)),g[z]=null):T in g||(g[T]={index0:p[A],index1:p[D],normal:lh.clone()})}}for(const E in g)if(g[E]){const{index0:R,index1:y}=g[E];Yc.fromBufferAttribute(h,R),Zc.fromBufferAttribute(h,y),M.push(Yc.x,Yc.y,Yc.z),M.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new dn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Dp extends Rp{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Dp(e.radius,e.detail)}}class Mu extends zn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,v=m+1,_=e/h,g=i/m,M=[],E=[],R=[],y=[];for(let S=0;S<v;S++){const A=S*g-f;for(let D=0;D<p;D++){const N=D*_-c;E.push(N,-A,0),R.push(0,0,1),y.push(D/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let A=0;A<h;A++){const D=A+p*S,N=A+p*(S+1),V=A+1+p*(S+1),L=A+1+p*S;M.push(D,N,L),M.push(N,V,L)}this.setIndex(M),this.setAttribute("position",new dn(E,3)),this.setAttribute("normal",new dn(R,3)),this.setAttribute("uv",new dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Up extends zn{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:h},s=Math.floor(s),l=Math.floor(l);const m=[],p=[],v=[],_=[],g=new j,M=new j,E=new j;for(let R=0;R<=s;R++){const y=f+R/s*h;for(let S=0;S<=l;S++){const A=S/l*c;M.x=(e+i*Math.cos(y))*Math.cos(A),M.y=(e+i*Math.cos(y))*Math.sin(A),M.z=i*Math.sin(y),p.push(M.x,M.y,M.z),g.x=e*Math.cos(A),g.y=e*Math.sin(A),E.subVectors(M,g).normalize(),v.push(E.x,E.y,E.z),_.push(S/l),_.push(R/s)}}for(let R=1;R<=s;R++)for(let y=1;y<=l;y++){const S=(l+1)*R+y-1,A=(l+1)*(R-1)+y-1,D=(l+1)*(R-1)+y,N=(l+1)*R+y;m.push(S,A,N),m.push(A,D,N)}this.setIndex(m),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class db extends zn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const i=[],s=new Set,l=new j,c=new j;if(e.index!==null){const f=e.attributes.position,h=e.index;let m=e.groups;m.length===0&&(m=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,v=m.length;p<v;++p){const _=m[p],g=_.start,M=_.count;for(let E=g,R=g+M;E<R;E+=3)for(let y=0;y<3;y++){const S=h.getX(E+y),A=h.getX(E+(y+1)%3);l.fromBufferAttribute(f,S),c.fromBufferAttribute(f,A),Zv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const f=e.attributes.position;for(let h=0,m=f.count/3;h<m;h++)for(let p=0;p<3;p++){const v=3*h+p,_=3*h+(p+1)%3;l.fromBufferAttribute(f,v),c.fromBufferAttribute(f,_),Zv(l,c,s)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new dn(i,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Zv(r,e,i){const s=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,l=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return i.has(s)===!0||i.has(l)===!0?!1:(i.add(s),i.add(l),!0)}function Jr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Kv(l))l.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Kv(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function jn(r){const e={};for(let i=0;i<r.length;i++){const s=Jr(r[i]);for(const l in s)e[l]=s[l]}return e}function Kv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function hb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function cx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const $r={clone:Jr,merge:jn};var pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class gb extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vb extends io{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new St(16777215),this.specular=new St(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gs,this.combine=vp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _b extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xb extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ux extends qn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ch=new sn,Qv=new j,Jv=new j;class Sb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Qv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qv),Jv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Jv),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===dl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qc=new j,Jc=new to,qi=new j;class fx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,Jc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,Jc,qi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Qc,Jc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,Jc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new j,$v=new nt,e_=new nt;class mi extends fx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,i){return this.getViewBounds(e,$v,e_),i.subVectors(e_,$v)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class yb extends Sb{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}class t_ extends ux{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Np extends fx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Mb extends ux{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bb extends zn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Hr=-90,Gr=1;class Eb extends qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Hr,Gr,e,i);l.layers=this.layers,this.add(l);const c=new mi(Hr,Gr,e,i);c.layers=this.layers,this.add(c);const f=new mi(Hr,Gr,e,i);f.layers=this.layers,this.add(f);const h=new mi(Hr,Gr,e,i);h.layers=this.layers,this.add(h);const m=new mi(Hr,Gr,e,i);m.layers=this.layers,this.add(m);const p=new mi(Hr,Gr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===dl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(_,g,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Tb extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ab{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=wb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function wb(){this._document.hidden===!1&&this.reset()}class dp extends nb{constructor(e,i,s=1){super(e,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const i=super.clone(e);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(e){const i=super.toJSON(e);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}class Cb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,et("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Ip=class Ip{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Ip.prototype.isMatrix2=!0;let n_=Ip;const i_=new j,$c=new j,Vr=new j,kr=new j,uh=new j,Rb=new j,Db=new j;class Ub{constructor(e=new j,i=new j){this.start=e,this.end=i}set(e,i){return this.start.copy(e),this.end.copy(i),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,i){return this.delta(i).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,i){i_.subVectors(e,this.start),$c.subVectors(this.end,this.start);const s=$c.dot($c);if(s===0)return 0;let c=$c.dot(i_)/s;return i&&(c=ut(c,0,1)),c}closestPointToPoint(e,i,s){const l=this.closestPointToPointParameter(e,i);return this.delta(s).multiplyScalar(l).add(this.start)}distanceSqToLine3(e,i=Rb,s=Db){const l=10000000000000001e-32;let c,f;const h=this.start,m=e.start,p=this.end,v=e.end;Vr.subVectors(p,h),kr.subVectors(v,m),uh.subVectors(h,m);const _=Vr.dot(Vr),g=kr.dot(kr),M=kr.dot(uh);if(_<=l&&g<=l)return i.copy(h),s.copy(m),i.sub(s),i.dot(i);if(_<=l)c=0,f=M/g,f=ut(f,0,1);else{const E=Vr.dot(uh);if(g<=l)f=0,c=ut(-E/_,0,1);else{const R=Vr.dot(kr),y=_*g-R*R;y!==0?c=ut((R*M-E*g)/y,0,1):c=0,f=(R*c+M)/g,f<0?(f=0,c=ut(-E/_,0,1)):f>1&&(f=1,c=ut((R-E)/_,0,1))}}return i.copy(h).addScaledVector(Vr,c),s.copy(m).addScaledVector(kr,f),i.distanceToSquared(s)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function a_(r,e,i,s){const l=Nb(s);switch(i){case K_:return r*e;case J_:return r*e/l.components*l.byteLength;case yp:return r*e/l.components*l.byteLength;case Zs:return r*e*2/l.components*l.byteLength;case Mp:return r*e*2/l.components*l.byteLength;case Q_:return r*e*3/l.components*l.byteLength;case Gi:return r*e*4/l.components*l.byteLength;case bp:return r*e*4/l.components*l.byteLength;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Ph:return Math.max(r,16)*Math.max(e,8)/4;case Nh:case Oh:return Math.max(r,8)*Math.max(e,8)/2;case zh:case Ih:case Fh:case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bh:case hu:case Gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ep:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case np:case ip:case ap:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sp:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pu:case op:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nb(r){switch(r){case gi:case W_:return{byteLength:1,components:1};case ul:case q_:case vi:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case ia:case _p:case $i:return{byteLength:4,components:1};case Y_:case Z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Lb(r){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,v);else{_.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<_.length;M++){const E=_[g],R=_[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++g,_[g]=R)}_.length=g+1;for(let M=0,E=_.length;M<E;M++){const R=_[M];r.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
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
#endif`,Gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vb=`#ifdef USE_BATCHING
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
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qb=`#ifdef USE_IRIDESCENCE
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
#endif`,Yb=`#ifdef USE_BUMPMAP
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,iE=`#define PI 3.141592653589793
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
} // validated`,aE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sE=`vec3 transformedNormal = objectNormal;
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
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uE="gl_FragColor = linearToOutputTexel( gl_FragColor );",fE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yE=`#ifdef USE_GRADIENTMAP
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
}`,ME=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,AE=`#ifdef USE_ENVMAP
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
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
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
#endif`,NE=`uniform sampler2D dfgLUT;
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
}`,LE=`
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
#endif`,OE=`#if defined( RE_IndirectDiffuse )
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
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XE=`#if defined( USE_POINTS_UV )
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
#endif`,jE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`#ifdef USE_MORPHTARGETS
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
#endif`,QE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$E=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
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
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,r1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x1=`float getShadowMask() {
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
}`,S1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
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
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
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
}`,G1=`#if DEPTH_PACKING == 3200
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
}`,V1=`#define DISTANCE
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
}`,k1=`#define DISTANCE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,Z1=`uniform vec3 diffuse;
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
}`,K1=`#define LAMBERT
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
}`,Q1=`#define LAMBERT
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
}`,J1=`#define MATCAP
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
}`,$1=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,nT=`#define PHONG
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
}`,iT=`#define PHONG
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
}`,aT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
}`,rT=`#define TOON
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
}`,oT=`#define TOON
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
}`,lT=`uniform float size;
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,fT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Ob,alphahash_pars_fragment:Pb,alphamap_fragment:zb,alphamap_pars_fragment:Ib,alphatest_fragment:Bb,alphatest_pars_fragment:Fb,aomap_fragment:Hb,aomap_pars_fragment:Gb,batching_pars_vertex:Vb,batching_vertex:kb,begin_vertex:Xb,beginnormal_vertex:jb,bsdfs:Wb,iridescence_fragment:qb,bumpmap_pars_fragment:Yb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Kb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:Jb,color_fragment:$b,color_pars_fragment:eE,color_pars_vertex:tE,color_vertex:nE,common:iE,cube_uv_reflection_fragment:aE,defaultnormal_vertex:sE,displacementmap_pars_vertex:rE,displacementmap_vertex:oE,emissivemap_fragment:lE,emissivemap_pars_fragment:cE,colorspace_fragment:uE,colorspace_pars_fragment:fE,envmap_fragment:dE,envmap_common_pars_fragment:hE,envmap_pars_fragment:pE,envmap_pars_vertex:mE,envmap_physical_pars_fragment:AE,envmap_vertex:gE,fog_vertex:vE,fog_pars_vertex:_E,fog_fragment:xE,fog_pars_fragment:SE,gradientmap_pars_fragment:yE,lightmap_pars_fragment:ME,lights_lambert_fragment:bE,lights_lambert_pars_fragment:EE,lights_pars_begin:TE,lights_toon_fragment:wE,lights_toon_pars_fragment:CE,lights_phong_fragment:RE,lights_phong_pars_fragment:DE,lights_physical_fragment:UE,lights_physical_pars_fragment:NE,lights_fragment_begin:LE,lights_fragment_maps:OE,lights_fragment_end:PE,lightprobes_pars_fragment:zE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:BE,logdepthbuf_pars_vertex:FE,logdepthbuf_vertex:HE,map_fragment:GE,map_pars_fragment:VE,map_particle_fragment:kE,map_particle_pars_fragment:XE,metalnessmap_fragment:jE,metalnessmap_pars_fragment:WE,morphinstance_vertex:qE,morphcolor_vertex:YE,morphnormal_vertex:ZE,morphtarget_pars_vertex:KE,morphtarget_vertex:QE,normal_fragment_begin:JE,normal_fragment_maps:$E,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:r1,iridescence_pars_fragment:o1,opaque_fragment:l1,packing:c1,premultiplied_alpha_fragment:u1,project_vertex:f1,dithering_fragment:d1,dithering_pars_fragment:h1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:v1,shadowmap_vertex:_1,shadowmask_pars_fragment:x1,skinbase_vertex:S1,skinning_pars_vertex:y1,skinning_vertex:M1,skinnormal_vertex:b1,specularmap_fragment:E1,specularmap_pars_fragment:T1,tonemapping_fragment:A1,tonemapping_pars_fragment:w1,transmission_fragment:C1,transmission_pars_fragment:R1,uv_pars_fragment:D1,uv_pars_vertex:U1,uv_vertex:N1,worldpos_vertex:L1,background_vert:O1,background_frag:P1,backgroundCube_vert:z1,backgroundCube_frag:I1,cube_vert:B1,cube_frag:F1,depth_vert:H1,depth_frag:G1,distance_vert:V1,distance_frag:k1,equirect_vert:X1,equirect_frag:j1,linedashed_vert:W1,linedashed_frag:q1,meshbasic_vert:Y1,meshbasic_frag:Z1,meshlambert_vert:K1,meshlambert_frag:Q1,meshmatcap_vert:J1,meshmatcap_frag:$1,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:aT,meshphysical_frag:sT,meshtoon_vert:rT,meshtoon_frag:oT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:fT,sprite_vert:dT,sprite_frag:hT},Ie={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},ei={basic:{uniforms:jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:jn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:jn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:jn([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:jn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:jn([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:jn([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:jn([Ie.common,Ie.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:jn([Ie.lights,Ie.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ei.physical={uniforms:jn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const eu={r:0,b:0,g:0},pT=new sn,hx=new rt;hx.set(-1,0,0,0,1,0,0,0,1);function mT(r,e,i,s,l,c){const f=new St(0);let h=l===!0?0:1,m,p,v=null,_=0,g=null;function M(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const N=A.backgroundBlurriness>0;D=e.get(D,N)}return D}function E(A){let D=!1;const N=M(A);N===null?y(f,h):N&&N.isColor&&(y(N,1),D=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(A,D){const N=M(D);N&&(N.isCubeTexture||N.mapping===Su)?(p===void 0&&(p=new _i(new pl(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Jr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(D.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(hx),p.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Ft,(v!==N||_!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=N,_=N.version,g=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new _i(new Mu(2,2),new Pn({name:"BackgroundMaterial",uniforms:Jr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,_=N.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function y(A,D){A.getRGB(eu,cx(r)),i.buffers.color.setClear(eu.r,eu.g,eu.b,D,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,D=1){f.set(A),h=D,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,y(f,h)},render:E,addToRenderList:R,dispose:S}}function gT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(G,Q,ue,me,Y){let P=!1;const F=_(G,me,ue,Q);c!==F&&(c=F,p(c.object)),P=M(G,me,ue,Y),P&&E(G,me,ue,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(P||f)&&(f=!1,N(G,Q,ue,me),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function v(G){return r.deleteVertexArray(G)}function _(G,Q,ue,me){const Y=me.wireframe===!0;let P=s[Q.id];P===void 0&&(P={},s[Q.id]=P);const F=G.isInstancedMesh===!0?G.id:0;let ee=P[F];ee===void 0&&(ee={},P[F]=ee);let he=ee[ue.id];he===void 0&&(he={},ee[ue.id]=he);let Se=he[Y];return Se===void 0&&(Se=g(m()),he[Y]=Se),Se}function g(G){const Q=[],ue=[],me=[];for(let Y=0;Y<i;Y++)Q[Y]=0,ue[Y]=0,me[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ue,attributeDivisors:me,object:G,attributes:{},index:null}}function M(G,Q,ue,me){const Y=c.attributes,P=Q.attributes;let F=0;const ee=ue.getAttributes();for(const he in ee)if(ee[he].location>=0){const I=Y[he];let J=P[he];if(J===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),I===void 0||I.attribute!==J||J&&I.data!==J.data)return!0;F++}return c.attributesNum!==F||c.index!==me}function E(G,Q,ue,me){const Y={},P=Q.attributes;let F=0;const ee=ue.getAttributes();for(const he in ee)if(ee[he].location>=0){let I=P[he];I===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const J={};J.attribute=I,I&&I.data&&(J.data=I.data),Y[he]=J,F++}c.attributes=Y,c.attributesNum=F,c.index=me}function R(){const G=c.newAttributes;for(let Q=0,ue=G.length;Q<ue;Q++)G[Q]=0}function y(G){S(G,0)}function S(G,Q){const ue=c.newAttributes,me=c.enabledAttributes,Y=c.attributeDivisors;ue[G]=1,me[G]===0&&(r.enableVertexAttribArray(G),me[G]=1),Y[G]!==Q&&(r.vertexAttribDivisor(G,Q),Y[G]=Q)}function A(){const G=c.newAttributes,Q=c.enabledAttributes;for(let ue=0,me=Q.length;ue<me;ue++)Q[ue]!==G[ue]&&(r.disableVertexAttribArray(ue),Q[ue]=0)}function D(G,Q,ue,me,Y,P,F){F===!0?r.vertexAttribIPointer(G,Q,ue,Y,P):r.vertexAttribPointer(G,Q,ue,me,Y,P)}function N(G,Q,ue,me){R();const Y=me.attributes,P=ue.getAttributes(),F=Q.defaultAttributeValues;for(const ee in P){const he=P[ee];if(he.location>=0){let Se=Y[ee];if(Se===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),Se!==void 0){const I=Se.normalized,J=Se.itemSize,xe=e.get(Se);if(xe===void 0)continue;const Ae=xe.buffer,De=xe.type,oe=xe.bytesPerElement,ye=De===r.INT||De===r.UNSIGNED_INT||Se.gpuType===_p;if(Se.isInterleavedBufferAttribute){const Ee=Se.data,He=Ee.stride,$e=Se.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<he.locationSize;Qe++)S(he.location+Qe,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<he.locationSize;Qe++)y(he.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Qe=0;Qe<he.locationSize;Qe++)D(he.location+Qe,J/he.locationSize,De,I,He*oe,($e+J/he.locationSize*Qe)*oe,ye)}else{if(Se.isInstancedBufferAttribute){for(let Ee=0;Ee<he.locationSize;Ee++)S(he.location+Ee,Se.meshPerAttribute);G.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ee=0;Ee<he.locationSize;Ee++)y(he.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<he.locationSize;Ee++)D(he.location+Ee,J/he.locationSize,De,I,J*oe,J/he.locationSize*Ee*oe,ye)}}else if(F!==void 0){const I=F[ee];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(he.location,I);break;case 3:r.vertexAttrib3fv(he.location,I);break;case 4:r.vertexAttrib4fv(he.location,I);break;default:r.vertexAttrib1fv(he.location,I)}}}}A()}function V(){z();for(const G in s){const Q=s[G];for(const ue in Q){const me=Q[ue];for(const Y in me){const P=me[Y];for(const F in P)v(P[F].object),delete P[F];delete me[Y]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const ue in Q){const me=Q[ue];for(const Y in me){const P=me[Y];for(const F in P)v(P[F].object),delete P[F];delete me[Y]}}delete s[G.id]}function B(G){for(const Q in s){const ue=s[Q];for(const me in ue){const Y=ue[me];if(Y[G.id]===void 0)continue;const P=Y[G.id];for(const F in P)v(P[F].object),delete P[F];delete Y[G.id]}}}function T(G){for(const Q in s){const ue=s[Q],me=G.isInstancedMesh===!0?G.id:0,Y=ue[me];if(Y!==void 0){for(const P in Y){const F=Y[P];for(const ee in F)v(F[ee].object),delete F[ee];delete Y[P]}delete ue[me],Object.keys(ue).length===0&&delete s[Q]}}}function z(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:q,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:A}}function vT(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function _T(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Gi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const T=B===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==gi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==$i&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(et("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:N,maxSamples:V,samples:L}}function xT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Vs,h=new rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||s!==0||l;return l=g,s=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,M){const E=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,S=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?v(null):p();else{const A=c?0:s,D=A*4;let N=S.clippingState||null;m.value=N,N=v(E,g,D,M);for(let V=0;V!==D;++V)N[V]=i[V];S.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(_,g,M,E){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,E!==!0||y===null){const S=M+R*4,A=g.matrixWorldInverse;h.getNormalMatrix(A),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,N=M;D!==R;++D,N+=4)f.copy(_[D]).applyMatrix4(A,h),f.normal.toArray(y,N),y[N+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const ps=4,s_=[.125,.215,.35,.446,.526,.582],Xs=20,ST=256,al=new Np,r_=new St;let fh=null,dh=0,hh=0,ph=!1;const yT=new j;class o_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=yT}=c;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ys||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:vi,format:Gi,colorSpace:mu,depthBuffer:!1},l=l_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MT(c)),this._blurMaterial=ET(c,e,i),this._ggxMaterial=bT(c,e,i)}return l}_compileMaterial(e){const i=new _i(new zn,e);this._renderer.compile(i,al)}_sceneToCubeUV(e,i,s,l,c){const m=new mi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(r_),_.toneMapping=na,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new pl,new yu({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let S=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,S=!0):(y.color.copy(r_),S=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):N===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const V=this._cubeSize;Xr(l,N*V,D>2?V:0,V,V),_.setRenderTarget(l),S&&_.render(R,m),_.render(e,m)}_.toneMapping=M,_.autoClear=g,e.background=A}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ys||e.mapping===Kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,al)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,M=_*g,{_lodMax:E}=this,R=this._sizeLods[s],y=3*R*(s>E-ps?s-E+ps:0),S=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Xr(c,y,S,3*R,2*R),l.setRenderTarget(c),l.render(h,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Xr(e,y,S,3*R,2*R),l.setRenderTarget(e),l.render(h,al)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Xs-1),R=c/E,y=isFinite(c)?1+Math.floor(v*R):Xs;y>Xs&&et(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xs}`);const S=[];let A=0;for(let B=0;B<Xs;++B){const T=B/R,z=Math.exp(-T*T/2);S.push(z),B===0?A+=z:B<y&&(A+=2*z)}for(let B=0;B<S.length;B++)S[B]=S[B]/A;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:D}=this;g.dTheta.value=E,g.mipInt.value=D-s;const N=this._sizeLods[l],V=3*N*(l>D-ps?l-D+ps:0),L=4*(this._cubeSize-N);Xr(i,V,L,3*N,2*N),m.setRenderTarget(i),m.render(_,al)}}function MT(r){const e=[],i=[],s=[];let l=r;const c=r-ps+1+s_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-ps?m=s_[f-r+ps-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,R=3,y=2,S=1,A=new Float32Array(R*E*M),D=new Float32Array(y*E*M),N=new Float32Array(S*E*M);for(let L=0;L<M;L++){const B=L%3*2/3-1,T=L>2?0:-1,z=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];A.set(z,R*E*L),D.set(g,y*E*L);const q=[L,L,L,L,L,L];N.set(q,S*E*L)}const V=new zn;V.setAttribute("position",new Ui(A,R)),V.setAttribute("uv",new Ui(D,y)),V.setAttribute("faceIndex",new Ui(N,S)),s.push(new _i(V,null)),l>ps&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function l_(r,e,i){const s=new ni(r,e,i);return s.texture.mapping=Su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function bT(r,e,i){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ST,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function ET(r,e,i){const s=new Float32Array(Xs),l=new j(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bu(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function c_(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:ta,depthTest:!1,depthWrite:!1})}function u_(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ta,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}class px extends ni{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ox(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),c=new Pn({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:ta});c.uniforms.tEquirect.value=i;const f=new _i(l,c),h=i.minFilter;return i.minFilter===js&&(i.minFilter=Vn),new Eb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function TT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Id||M===Bd)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const R=new px(E.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",p),h(R.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,E=M===Id||M===Bd,R=M===Ys||M===Kr;if(E||R){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new o_(r)),y=E?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const A=g.image;return E&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new o_(r)),y=E?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function h(g,M){return M===Id?g.mapping=Ys:M===Bd&&(g.mapping=Kr),g}function m(g){let M=0;const E=6;for(let R=0;R<E;R++)g[R]!==void 0&&M++;return M===E}function p(g){const M=g.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=i.get(M);E!==void 0&&(i.delete(M),E.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function AT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&up("WebGLRenderer: "+s+" extension not supported."),l}}}function wT(r,e,i,s){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(_){const g=[],M=_.index,E=_.attributes.position;let R=0;if(E===void 0)return;if(M!==null){const A=M.array;R=M.version;for(let D=0,N=A.length;D<N;D+=3){const V=A[D+0],L=A[D+1],B=A[D+2];g.push(V,L,L,B,B,V)}}else{const A=E.array;R=E.version;for(let D=0,N=A.length/3-1;D<N;D+=3){const V=D+0,L=D+1,B=D+2;g.push(V,L,L,B,B,V)}}const y=new(E.count>=65535?ax:ix)(g,1);y.version=R;const S=c.get(_);S&&e.remove(S),c.set(_,y)}function v(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function CT(r,e,i){let s;function l(_){s=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,g){r.drawElements(s,g,c,_*f),i.update(g,s,1)}function p(_,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,_*f,M),i.update(g,s,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,M);let R=0;for(let y=0;y<M;y++)R+=g[y];i.update(R,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function RT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:At("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function DT(r,e,i){const s=new WeakMap,l=new Yt;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let q=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var M=q;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),R===!0&&(N=2),y===!0&&(N=3);let V=h.attributes.position.count*N,L=1;V>e.maxTextureSize&&(L=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const B=new Float32Array(V*L*4*_),T=new ex(B,V,L,_);T.type=$i,T.needsUpdate=!0;const z=N*4;for(let G=0;G<_;G++){const Q=S[G],ue=A[G],me=D[G],Y=V*L*4*G;for(let P=0;P<Q.count;P++){const F=P*z;E===!0&&(l.fromBufferAttribute(Q,P),B[Y+F+0]=l.x,B[Y+F+1]=l.y,B[Y+F+2]=l.z,B[Y+F+3]=0),R===!0&&(l.fromBufferAttribute(ue,P),B[Y+F+4]=l.x,B[Y+F+5]=l.y,B[Y+F+6]=l.z,B[Y+F+7]=0),y===!0&&(l.fromBufferAttribute(me,P),B[Y+F+8]=l.x,B[Y+F+9]=l.y,B[Y+F+10]=l.z,B[Y+F+11]=me.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new nt(V,L)},s.set(h,g),h.addEventListener("dispose",q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function UT(r,e,i,s,l){let c=new WeakMap;function f(p){const v=l.render.frame,_=p.geometry,g=e.get(p,_);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:h}}const NT={[B_]:"LINEAR_TONE_MAPPING",[F_]:"REINHARD_TONE_MAPPING",[H_]:"CINEON_TONE_MAPPING",[G_]:"ACES_FILMIC_TONE_MAPPING",[k_]:"AGX_TONE_MAPPING",[X_]:"NEUTRAL_TONE_MAPPING",[V_]:"CUSTOM_TONE_MAPPING"};function LT(r,e,i,s,l){const c=new ni(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Qr(e,i):void 0}),f=new ni(e,i,{type:vi,depthBuffer:!1,stencilBuffer:!1}),h=new zn;h.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dn([0,2,0,0,2,0],2));const m=new gb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new _i(h,m),v=new Np(-1,1,1,-1,0,1);let _=null,g=null,M=!1,E,R=null,y=[],S=!1;this.setSize=function(A,D){c.setSize(A,D),f.setSize(A,D);for(let N=0;N<y.length;N++){const V=y[N];V.setSize&&V.setSize(A,D)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const D=c.width,N=c.height;for(let V=0;V<y.length;V++){const L=y[V];L.setSize&&L.setSize(D,N)}},this.begin=function(A,D){if(M||A.toneMapping===na&&y.length===0)return!1;if(R=D,D!==null){const N=D.width,V=D.height;(c.width!==N||c.height!==V)&&this.setSize(N,V)}return S===!1&&A.setRenderTarget(c),E=A.toneMapping,A.toneMapping=na,!0},this.hasRenderPass=function(){return S},this.end=function(A,D){A.toneMapping=E,M=!0;let N=c,V=f;for(let L=0;L<y.length;L++){const B=y[L];if(B.enabled!==!1&&(B.render(A,V,N,D),B.needsSwap!==!1)){const T=N;N=V,V=T}}if(_!==A.outputColorSpace||g!==A.toneMapping){_=A.outputColorSpace,g=A.toneMapping,m.defines={},Tt.getTransfer(_)===Ft&&(m.defines.SRGB_TRANSFER="");const L=NT[g];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(R),A.render(p,v),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const mx=new Wn,hp=new Qr(1,1),gx=new ex,vx=new XM,_x=new ox,f_=[],d_=[],h_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function ao(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=f_[l];if(c===void 0&&(c=new Float32Array(l),f_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Eu(r,e){let i=d_[e];i===void 0&&(i=new Int32Array(e),d_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function OT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function PT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function zT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function IT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function BT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;m_.set(s),r.uniformMatrix2fv(this.addr,!1,m_),Mn(i,s)}}function FT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;p_.set(s),r.uniformMatrix3fv(this.addr,!1,p_),Mn(i,s)}}function HT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;h_.set(s),r.uniformMatrix4fv(this.addr,!1,h_),Mn(i,s)}}function GT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function kT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function jT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function WT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function qT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function ZT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?Tp:Ep,c=hp):c=mx,i.setTexture2D(e||c,l)}function KT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||vx,l)}function QT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||_x,l)}function JT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||gx,l)}function $T(r){switch(r){case 5126:return OT;case 35664:return PT;case 35665:return zT;case 35666:return IT;case 35674:return BT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return jT;case 36294:return WT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function eA(r,e){r.uniform1fv(this.addr,e)}function tA(r,e){const i=ao(e,this.size,2);r.uniform2fv(this.addr,i)}function nA(r,e){const i=ao(e,this.size,3);r.uniform3fv(this.addr,i)}function iA(r,e){const i=ao(e,this.size,4);r.uniform4fv(this.addr,i)}function aA(r,e){const i=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function sA(r,e){const i=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function rA(r,e){const i=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function oA(r,e){r.uniform1iv(this.addr,e)}function lA(r,e){r.uniform2iv(this.addr,e)}function cA(r,e){r.uniform3iv(this.addr,e)}function uA(r,e){r.uniform4iv(this.addr,e)}function fA(r,e){r.uniform1uiv(this.addr,e)}function dA(r,e){r.uniform2uiv(this.addr,e)}function hA(r,e){r.uniform3uiv(this.addr,e)}function pA(r,e){r.uniform4uiv(this.addr,e)}function mA(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=hp:f=mx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function gA(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||vx,c[f])}function vA(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||_x,c[f])}function _A(r,e,i){const s=this.cache,l=e.length,c=Eu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||gx,c[f])}function xA(r){switch(r){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return aA;case 35675:return sA;case 35676:return rA;case 5124:case 35670:return oA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return fA;case 36294:return dA;case 36295:return hA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return _A}}class SA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$T(i.type)}}class yA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xA(i.type)}}class MA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function g_(r,e){r.seq.push(e),r.map[e.id]=e}function bA(r,e,i){const s=r.name,l=s.length;for(mh.lastIndex=0;;){const c=mh.exec(s),f=mh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){g_(i,p===void 0?new SA(h,r,e):new yA(h,r,e));break}else{let _=i.map[h];_===void 0&&(_=new MA(h),g_(i,_)),i=_}}}class fu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);bA(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function v_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const EA=37297;let TA=0;function AA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const __=new rt;function wA(r){Tt._getMatrix(__,Tt.workingColorSpace,r);const e=`mat3( ${__.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(r)){case gu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function x_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+AA(r.getShaderSource(e),h)}else return c}function CA(r,e){const i=wA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const RA={[B_]:"Linear",[F_]:"Reinhard",[H_]:"Cineon",[G_]:"ACESFilmic",[k_]:"AgX",[X_]:"Neutral",[V_]:"Custom"};function DA(r,e){const i=RA[e];return i===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const tu=new j;function UA(){Tt.getLuminanceCoefficients(tu);const r=tu.x.toFixed(4),e=tu.y.toFixed(4),i=tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function LA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function OA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function ll(r){return r!==""}function S_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(r){return r.replace(PA,IA)}const zA=new Map;function IA(r,e){let i=ht[e];if(i===void 0){const s=zA.get(e);if(s!==void 0)i=ht[s],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return pp(i)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(r){return r.replace(BA,FA)}function FA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function b_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const HA={[ru]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function GA(r){return HA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VA={[Ys]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[Su]:"ENVMAP_TYPE_CUBE_UV"};function kA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":VA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const XA={[Kr]:"ENVMAP_MODE_REFRACTION"};function jA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":XA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WA={[vp]:"ENVMAP_BLENDING_MULTIPLY",[oM]:"ENVMAP_BLENDING_MIX",[lM]:"ENVMAP_BLENDING_ADD"};function qA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":WA[r.combine]||"ENVMAP_BLENDING_NONE"}function YA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function ZA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=GA(i),p=kA(i),v=jA(i),_=qA(i),g=YA(i),M=NA(i),E=LA(c),R=l.createProgram();let y,S,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ll).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ll).join(`
`),S.length>0&&(S+=`
`)):(y=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),S=[b_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?ht.tonemapping_pars_fragment:"",i.toneMapping!==na?DA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,CA("linearToOutputTexel",i.outputColorSpace),UA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=pp(f),f=S_(f,i),f=y_(f,i),h=pp(h),h=S_(h,i),h=y_(h,i),f=M_(f),h=M_(h),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=A+y+f,N=A+S+h,V=v_(l,l.VERTEX_SHADER,D),L=v_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,V),l.attachShader(R,L),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(R)||"",ue=l.getShaderInfoLog(V)||"",me=l.getShaderInfoLog(L)||"",Y=Q.trim(),P=ue.trim(),F=me.trim();let ee=!0,he=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,V,L);else{const Se=x_(l,V,"vertex"),I=x_(l,L,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+Se+`
`+I)}else Y!==""?et("WebGLProgram: Program Info Log:",Y):(P===""||F==="")&&(he=!1);he&&(G.diagnostics={runnable:ee,programLog:Y,vertexShader:{log:P,prefix:y},fragmentShader:{log:F,prefix:S}})}l.deleteShader(V),l.deleteShader(L),T=new fu(l,R),z=OA(l,R)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let z;this.getAttributes=function(){return z===void 0&&B(this),z};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(R,EA)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=TA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=L,this}let KA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new JA(e),i.set(e,s)),s}}class JA{constructor(e){this.id=KA++,this.code=e,this.usedTimes=0}}function $A(r){return r===Zs||r===hu||r===pu}function e2(r,e,i,s,l,c){const f=new tx,h=new QA,m=new Set,p=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,z,q,G,Q,ue){const me=G.fog,Y=Q.geometry,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||P,F),he=ee&&ee.mapping===Su?ee.image.height:null,Se=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&et("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=I!==void 0?I.length:0;let xe=0;Y.morphAttributes.position!==void 0&&(xe=1),Y.morphAttributes.normal!==void 0&&(xe=2),Y.morphAttributes.color!==void 0&&(xe=3);let Ae,De,oe,ye;if(Se){const tt=ei[Se];Ae=tt.vertexShader,De=tt.fragmentShader}else Ae=T.vertexShader,De=T.fragmentShader,h.update(T),oe=h.getVertexShaderID(T),ye=h.getFragmentShaderID(T);const Ee=r.getRenderTarget(),He=r.state.buffers.depth.getReversed(),$e=Q.isInstancedMesh===!0,Qe=Q.isBatchedMesh===!0,jt=!!T.map,pt=!!T.matcap,yt=!!ee,Lt=!!T.aoMap,ft=!!T.lightMap,ln=!!T.bumpMap,Zt=!!T.normalMap,Tn=!!T.displacementMap,W=!!T.emissiveMap,nn=!!T.metalnessMap,mt=!!T.roughnessMap,Gt=T.anisotropy>0,we=T.clearcoat>0,Jt=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,$=T.transmission>0,ve=Gt&&!!T.anisotropyMap,be=we&&!!T.clearcoatMap,Ce=we&&!!T.clearcoatNormalMap,Le=we&&!!T.clearcoatRoughnessMap,ce=U&&!!T.iridescenceMap,fe=U&&!!T.iridescenceThicknessMap,Oe=b&&!!T.sheenColorMap,Pe=b&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Re=!!T.specularColorMap,it=!!T.specularIntensityMap,at=$&&!!T.transmissionMap,gt=$&&!!T.thicknessMap,k=!!T.gradientMap,Te=!!T.alphaMap,pe=T.alphaTest>0,Fe=!!T.alphaHash,Ne=!!T.extensions;let Me=na;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Me=r.toneMapping);const We={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:De,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&Q._colorsTexture!==null,instancing:$e,instancingColor:$e&&Q.instanceColor!==null,instancingMorph:$e&&Q.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:jt,matcap:pt,envMap:yt,envMapMode:yt&&ee.mapping,envMapCubeUVHeight:he,aoMap:Lt,lightMap:ft,bumpMap:ln,normalMap:Zt,displacementMap:Tn,emissiveMap:W,normalMapObjectSpace:Zt&&T.normalMapType===fM,normalMapTangentSpace:Zt&&T.normalMapType===lp,packedNormalMap:Zt&&T.normalMapType===lp&&$A(T.normalMap.format),metalnessMap:nn,roughnessMap:mt,anisotropy:Gt,anisotropyMap:ve,clearcoat:we,clearcoatMap:be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Jt,iridescence:U,iridescenceMap:ce,iridescenceThicknessMap:fe,sheen:b,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:Re,specularIntensityMap:it,transmission:$,transmissionMap:at,thicknessMap:gt,gradientMap:k,opaque:T.transparent===!1&&T.blending===Wr&&T.alphaToCoverage===!1,alphaMap:Te,alphaTest:pe,alphaHash:Fe,combine:T.combine,mapUv:jt&&E(T.map.channel),aoMapUv:Lt&&E(T.aoMap.channel),lightMapUv:ft&&E(T.lightMap.channel),bumpMapUv:ln&&E(T.bumpMap.channel),normalMapUv:Zt&&E(T.normalMap.channel),displacementMapUv:Tn&&E(T.displacementMap.channel),emissiveMapUv:W&&E(T.emissiveMap.channel),metalnessMapUv:nn&&E(T.metalnessMap.channel),roughnessMapUv:mt&&E(T.roughnessMap.channel),anisotropyMapUv:ve&&E(T.anisotropyMap.channel),clearcoatMapUv:be&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&E(T.sheenRoughnessMap.channel),specularMapUv:Ue&&E(T.specularMap.channel),specularColorMapUv:Re&&E(T.specularColorMap.channel),specularIntensityMapUv:it&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:gt&&E(T.thicknessMap.channel),alphaMapUv:Te&&E(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Zt||Gt),vertexNormals:!!Y.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Y.attributes.uv&&(jt||Te),fog:!!me,useFog:T.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&Zt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:He,skinning:Q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xe,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:jt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function y(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)z.push(q),z.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(S(z,T),A(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function S(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function A(T,z){f.disableAll(),z.instancing&&f.enable(0),z.instancingColor&&f.enable(1),z.instancingMorph&&f.enable(2),z.matcap&&f.enable(3),z.envMap&&f.enable(4),z.normalMapObjectSpace&&f.enable(5),z.normalMapTangentSpace&&f.enable(6),z.clearcoat&&f.enable(7),z.iridescence&&f.enable(8),z.alphaTest&&f.enable(9),z.vertexColors&&f.enable(10),z.vertexAlphas&&f.enable(11),z.vertexUv1s&&f.enable(12),z.vertexUv2s&&f.enable(13),z.vertexUv3s&&f.enable(14),z.vertexTangents&&f.enable(15),z.anisotropy&&f.enable(16),z.alphaHash&&f.enable(17),z.batching&&f.enable(18),z.dispersion&&f.enable(19),z.batchingColor&&f.enable(20),z.gradientMap&&f.enable(21),z.packedNormalMap&&f.enable(22),z.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),z.fog&&f.enable(0),z.useFog&&f.enable(1),z.flatShading&&f.enable(2),z.logarithmicDepthBuffer&&f.enable(3),z.reversedDepthBuffer&&f.enable(4),z.skinning&&f.enable(5),z.morphTargets&&f.enable(6),z.morphNormals&&f.enable(7),z.morphColors&&f.enable(8),z.premultipliedAlpha&&f.enable(9),z.shadowMapEnabled&&f.enable(10),z.doubleSided&&f.enable(11),z.flipSided&&f.enable(12),z.useDepthPacking&&f.enable(13),z.dithering&&f.enable(14),z.transmission&&f.enable(15),z.sheen&&f.enable(16),z.opaque&&f.enable(17),z.pointsUvs&&f.enable(18),z.decodeVideoTexture&&f.enable(19),z.decodeVideoTextureEmissive&&f.enable(20),z.alphaToCoverage&&f.enable(21),z.numLightProbeGrids>0&&f.enable(22),T.push(f.mask)}function D(T){const z=M[T.type];let q;if(z){const G=ei[z];q=$r.clone(G.uniforms)}else q=T.uniforms;return q}function N(T,z){let q=v.get(z);return q!==void 0?++q.usedTimes:(q=new ZA(r,z,T,l),p.push(q),v.set(z,q)),q}function V(T){if(--T.usedTimes===0){const z=p.indexOf(T);p[z]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function B(){h.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:D,acquireProgram:N,releaseProgram:V,releaseShaderCache:L,programs:p,dispose:B}}function t2(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function n2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function E_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function T_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,R,y,S){let A=r[e];return A===void 0?(A={id:g.id,object:g,geometry:M,material:E,materialVariant:f(g),groupOrder:R,renderOrder:g.renderOrder,z:y,group:S},r[e]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=E,A.materialVariant=f(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=y,A.group=S),e++,A}function m(g,M,E,R,y,S){const A=h(g,M,E,R,y,S);E.transmission>0?s.push(A):E.transparent===!0?l.push(A):i.push(A)}function p(g,M,E,R,y,S){const A=h(g,M,E,R,y,S);E.transmission>0?s.unshift(A):E.transparent===!0?l.unshift(A):i.unshift(A)}function v(g,M){i.length>1&&i.sort(g||n2),s.length>1&&s.sort(M||E_),l.length>1&&l.sort(M||E_)}function _(){for(let g=e,M=r.length;g<M;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:_,sort:v}}function i2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new T_,r.set(s,[f])):l>=c.length?(f=new T_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function a2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new St};break;case"SpotLight":i={position:new j,direction:new j,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new St,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new St,groundColor:new St};break;case"RectAreaLight":i={color:new St,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=i,i}}}function s2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let r2=0;function o2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function l2(r){const e=new a2,i=s2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new sn,f=new sn;function h(p){let v=0,_=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let M=0,E=0,R=0,y=0,S=0,A=0,D=0,N=0,V=0,L=0,B=0;p.sort(o2);for(let z=0,q=p.length;z<q;z++){const G=p[z],Q=G.color,ue=G.intensity,me=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Zs?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Q.r*ue,_+=Q.g*ue,g+=Q.b*ue;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],ue);B++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,ee=i.get(G);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,s.directionalShadow[M]=ee,s.directionalShadowMap[M]=Y,s.directionalShadowMatrix[M]=G.shadow.matrix,A++}s.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(Q).multiplyScalar(ue),P.distance=me,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[R]=P;const F=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,F.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[R]=F.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,s.spotShadow[R]=ee,s.spotShadowMap[R]=Y,N++}R++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(Q).multiplyScalar(ue),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const F=G.shadow,ee=i.get(G);ee.shadowIntensity=F.intensity,ee.shadowBias=F.bias,ee.shadowNormalBias=F.normalBias,ee.shadowRadius=F.radius,ee.shadowMapSize=F.mapSize,ee.shadowCameraNear=F.camera.near,ee.shadowCameraFar=F.camera.far,s.pointShadow[E]=ee,s.pointShadowMap[E]=Y,s.pointShadowMatrix[E]=G.shadow.matrix,D++}s.point[E]=P,E++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ue),P.groundColor.copy(G.groundColor).multiplyScalar(ue),s.hemi[S]=P,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==R||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==A||T.numPointShadows!==D||T.numSpotShadows!==N||T.numSpotMaps!==V||T.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=N+V-L,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=B,T.directionalLength=M,T.pointLength=E,T.spotLength=R,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=A,T.numPointShadows=D,T.numSpotShadows=N,T.numSpotMaps=V,T.numLightProbes=B,s.version=r2++)}function m(p,v){let _=0,g=0,M=0,E=0,R=0;const y=v.matrixWorldInverse;for(let S=0,A=p.length;S<A;S++){const D=p[S];if(D.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(D.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(y),g++}else if(D.isHemisphereLight){const N=s.hemi[R];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:s}}function A_(r){const e=new l2(r),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function v(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:v,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function c2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new A_(r),e.set(l,[h])):c>=f.length?(h=new A_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const u2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f2=`uniform sampler2D shadow_pass;
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
}`,d2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],h2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],w_=new sn,sl=new j,gh=new j;function p2(r,e,i){let s=new Cp;const l=new nt,c=new nt,f=new Yt,h=new _b,m=new xb,p={},v=i.maxTextureSize,_={[ms]:ti,[ti]:ms,[Qi]:Qi},g=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:u2,fragmentShader:f2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new zn;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new _i(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let S=this.type;this.render=function(L,B,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Vy&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const z=r.getRenderTarget(),q=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ta),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ue=S!==this.type;ue&&B.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(Y=>Y.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,Y=L.length;me<Y;me++){const P=L[me],F=P.shadow;if(F===void 0){et("WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ee=F.getFrameExtents();l.multiply(ee),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ee.x),l.x=c.x*ee.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ee.y),l.y=c.y*ee.y,F.mapSize.y=c.y));const he=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=he,F.map===null||ue===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ol){if(P.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ni(l.x,l.y,{format:Zs,type:vi,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),F.map.texture.name=P.name+".shadowMap",F.map.depthTexture=new Qr(l.x,l.y,$i),F.map.depthTexture.name=P.name+".shadowMapDepth",F.map.depthTexture.format=Da,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On}else P.isPointLight?(F.map=new px(l.x),F.map.depthTexture=new ub(l.x,ia)):(F.map=new ni(l.x,l.y),F.map.depthTexture=new Qr(l.x,l.y,ia)),F.map.depthTexture.name=P.name+".shadowMap",F.map.depthTexture.format=Da,this.type===ru?(F.map.depthTexture.compareFunction=he?Tp:Ep,F.map.depthTexture.minFilter=Vn,F.map.depthTexture.magFilter=Vn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=On,F.map.depthTexture.magFilter=On);F.camera.updateProjectionMatrix()}const Se=F.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Se;I++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,I),r.clear();else{I===0&&(r.setRenderTarget(F.map),r.clear());const J=F.getViewport(I);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Q.viewport(f)}if(P.isPointLight){const J=F.camera,xe=F.matrix,Ae=P.distance||J.far;Ae!==J.far&&(J.far=Ae,J.updateProjectionMatrix()),sl.setFromMatrixPosition(P.matrixWorld),J.position.copy(sl),gh.copy(J.position),gh.add(d2[I]),J.up.copy(h2[I]),J.lookAt(gh),J.updateMatrixWorld(),xe.makeTranslation(-sl.x,-sl.y,-sl.z),w_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(w_,J.coordinateSystem,J.reversedDepth)}else F.updateMatrices(P);s=F.getFrustum(),N(B,T,F.camera,P,this.type)}F.isPointLightShadow!==!0&&this.type===ol&&A(F,T),F.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(z,q,G)};function A(L,B){const T=e.update(R);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ni(l.x,l.y,{format:Zs,type:vi})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(B,null,T,M,R,null)}function D(L,B,T,z){let q=null;const G=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)q=G;else if(q=T.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=q.uuid,ue=B.uuid;let me=p[Q];me===void 0&&(me={},p[Q]=me);let Y=me[ue];Y===void 0&&(Y=q.clone(),me[ue]=Y,B.addEventListener("dispose",V)),q=Y}if(q.visible=B.visible,q.wireframe=B.wireframe,z===ol?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:_[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Q=r.properties.get(q);Q.light=T}return q}function N(L,B,T,z,q){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===ol)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ue=e.update(L),me=L.material;if(Array.isArray(me)){const Y=ue.groups;for(let P=0,F=Y.length;P<F;P++){const ee=Y[P],he=me[ee.materialIndex];if(he&&he.visible){const Se=D(L,he,z,q);L.onBeforeShadow(r,L,B,T,ue,Se,ee),r.renderBufferDirect(T,null,ue,Se,L,ee),L.onAfterShadow(r,L,B,T,ue,Se,ee)}}}else if(me.visible){const Y=D(L,me,z,q);L.onBeforeShadow(r,L,B,T,ue,Y,null),r.renderBufferDirect(T,null,ue,Y,L,null),L.onAfterShadow(r,L,B,T,ue,Y,null)}}const Q=L.children;for(let ue=0,me=Q.length;ue<me;ue++)N(Q[ue],B,T,z,q)}function V(L){L.target.removeEventListener("dispose",V);for(const T in p){const z=p[T],q=L.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function m2(r,e){function i(){let k=!1;const Te=new Yt;let pe=null;const Fe=new Yt(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!k&&(r.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,Me,We,tt,an){an===!0&&(Ne*=tt,Me*=tt,We*=tt),Te.set(Ne,Me,We,tt),Fe.equals(Te)===!1&&(r.clearColor(Ne,Me,We,tt),Fe.copy(Te))},reset:function(){k=!1,pe=null,Fe.set(-1,0,0,0)}}}function s(){let k=!1,Te=!1,pe=null,Fe=null,Ne=null;return{setReversed:function(Me){if(Te!==Me){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=Me;const tt=Ne;Ne=null,this.setClear(tt)}},getReversed:function(){return Te},setTest:function(Me){Me?Ee(r.DEPTH_TEST):He(r.DEPTH_TEST)},setMask:function(Me){pe!==Me&&!k&&(r.depthMask(Me),pe=Me)},setFunc:function(Me){if(Te&&(Me=yM[Me]),Fe!==Me){switch(Me){case bh:r.depthFunc(r.NEVER);break;case Eh:r.depthFunc(r.ALWAYS);break;case Th:r.depthFunc(r.LESS);break;case Zr:r.depthFunc(r.LEQUAL);break;case Ah:r.depthFunc(r.EQUAL);break;case wh:r.depthFunc(r.GEQUAL);break;case Ch:r.depthFunc(r.GREATER);break;case Rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Me}},setLocked:function(Me){k=Me},setClear:function(Me){Ne!==Me&&(Ne=Me,Te&&(Me=1-Me),r.clearDepth(Me))},reset:function(){k=!1,pe=null,Fe=null,Ne=null,Te=!1}}}function l(){let k=!1,Te=null,pe=null,Fe=null,Ne=null,Me=null,We=null,tt=null,an=null;return{setTest:function(Dt){k||(Dt?Ee(r.STENCIL_TEST):He(r.STENCIL_TEST))},setMask:function(Dt){Te!==Dt&&!k&&(r.stencilMask(Dt),Te=Dt)},setFunc:function(Dt,xi,ii){(pe!==Dt||Fe!==xi||Ne!==ii)&&(r.stencilFunc(Dt,xi,ii),pe=Dt,Fe=xi,Ne=ii)},setOp:function(Dt,xi,ii){(Me!==Dt||We!==xi||tt!==ii)&&(r.stencilOp(Dt,xi,ii),Me=Dt,We=xi,tt=ii)},setLocked:function(Dt){k=Dt},setClear:function(Dt){an!==Dt&&(r.clearStencil(Dt),an=Dt)},reset:function(){k=!1,Te=null,pe=null,Fe=null,Ne=null,Me=null,We=null,tt=null,an=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let v={},_={},g={},M=new WeakMap,E=[],R=null,y=!1,S=null,A=null,D=null,N=null,V=null,L=null,B=null,T=new St(0,0,0),z=0,q=!1,G=null,Q=null,ue=null,me=null,Y=null;const P=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ee=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(he)[1]),F=ee>=1):he.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),F=ee>=2);let Se=null,I={};const J=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Ae=new Yt().fromArray(J),De=new Yt().fromArray(xe);function oe(k,Te,pe,Fe){const Ne=new Uint8Array(4),Me=r.createTexture();r.bindTexture(k,Me),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let We=0;We<pe;We++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(Te+We,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return Me}const ye={};ye[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(Zr),ln(!1),Zt(Av),Ee(r.CULL_FACE),Lt(ta);function Ee(k){v[k]!==!0&&(r.enable(k),v[k]=!0)}function He(k){v[k]!==!1&&(r.disable(k),v[k]=!1)}function $e(k,Te){return g[k]!==Te?(r.bindFramebuffer(k,Te),g[k]=Te,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function Qe(k,Te){let pe=E,Fe=!1;if(k){pe=M.get(Te),pe===void 0&&(pe=[],M.set(Te,pe));const Ne=k.textures;if(pe.length!==Ne.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,We=Ne.length;Me<We;Me++)pe[Me]=r.COLOR_ATTACHMENT0+Me;pe.length=Ne.length,Fe=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(pe)}function jt(k){return R!==k?(r.useProgram(k),R=k,!0):!1}const pt={[ks]:r.FUNC_ADD,[Xy]:r.FUNC_SUBTRACT,[jy]:r.FUNC_REVERSE_SUBTRACT};pt[Wy]=r.MIN,pt[qy]=r.MAX;const yt={[Yy]:r.ZERO,[Zy]:r.ONE,[Ky]:r.SRC_COLOR,[yh]:r.SRC_ALPHA,[nM]:r.SRC_ALPHA_SATURATE,[eM]:r.DST_COLOR,[Jy]:r.DST_ALPHA,[Qy]:r.ONE_MINUS_SRC_COLOR,[Mh]:r.ONE_MINUS_SRC_ALPHA,[tM]:r.ONE_MINUS_DST_COLOR,[$y]:r.ONE_MINUS_DST_ALPHA,[iM]:r.CONSTANT_COLOR,[aM]:r.ONE_MINUS_CONSTANT_COLOR,[sM]:r.CONSTANT_ALPHA,[rM]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(k,Te,pe,Fe,Ne,Me,We,tt,an,Dt){if(k===ta){y===!0&&(He(r.BLEND),y=!1);return}if(y===!1&&(Ee(r.BLEND),y=!0),k!==ky){if(k!==S||Dt!==q){if((A!==ks||V!==ks)&&(r.blendEquation(r.FUNC_ADD),A=ks,V=ks),Dt)switch(k){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sh:r.blendFunc(r.ONE,r.ONE);break;case wv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",k);break}else switch(k){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case wv:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cv:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",k);break}D=null,N=null,L=null,B=null,T.set(0,0,0),z=0,S=k,q=Dt}return}Ne=Ne||Te,Me=Me||pe,We=We||Fe,(Te!==A||Ne!==V)&&(r.blendEquationSeparate(pt[Te],pt[Ne]),A=Te,V=Ne),(pe!==D||Fe!==N||Me!==L||We!==B)&&(r.blendFuncSeparate(yt[pe],yt[Fe],yt[Me],yt[We]),D=pe,N=Fe,L=Me,B=We),(tt.equals(T)===!1||an!==z)&&(r.blendColor(tt.r,tt.g,tt.b,an),T.copy(tt),z=an),S=k,q=!1}function ft(k,Te){k.side===Qi?He(r.CULL_FACE):Ee(r.CULL_FACE);let pe=k.side===ti;Te&&(pe=!pe),ln(pe),k.blending===Wr&&k.transparent===!1?Lt(ta):Lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const Fe=k.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),W(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):He(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function Zt(k){k!==Hy?(Ee(r.CULL_FACE),k!==Q&&(k===Av?r.cullFace(r.BACK):k===Gy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):He(r.CULL_FACE),Q=k}function Tn(k){k!==ue&&(F&&r.lineWidth(k),ue=k)}function W(k,Te,pe){k?(Ee(r.POLYGON_OFFSET_FILL),(me!==Te||Y!==pe)&&(me=Te,Y=pe,f.getReversed()&&(Te=-Te),r.polygonOffset(Te,pe))):He(r.POLYGON_OFFSET_FILL)}function nn(k){k?Ee(r.SCISSOR_TEST):He(r.SCISSOR_TEST)}function mt(k){k===void 0&&(k=r.TEXTURE0+P-1),Se!==k&&(r.activeTexture(k),Se=k)}function Gt(k,Te,pe){pe===void 0&&(Se===null?pe=r.TEXTURE0+P-1:pe=Se);let Fe=I[pe];Fe===void 0&&(Fe={type:void 0,texture:void 0},I[pe]=Fe),(Fe.type!==k||Fe.texture!==Te)&&(Se!==pe&&(r.activeTexture(pe),Se=pe),r.bindTexture(k,Te||ye[k]),Fe.type=k,Fe.texture=Te)}function we(){const k=I[Se];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Jt(){try{r.compressedTexImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function b(){try{r.texSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function $(){try{r.texSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ve(){try{r.compressedTexSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function be(){try{r.compressedTexSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Ce(){try{r.texStorage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Le(){try{r.texStorage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ce(){try{r.texImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function fe(){try{r.texImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Oe(k){return _[k]!==void 0?_[k]:r.getParameter(k)}function Pe(k,Te){_[k]!==Te&&(r.pixelStorei(k,Te),_[k]=Te)}function Ue(k){Ae.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Re(k){De.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function it(k,Te){let pe=p.get(Te);pe===void 0&&(pe=new WeakMap,p.set(Te,pe));let Fe=pe.get(k);Fe===void 0&&(Fe=r.getUniformBlockIndex(Te,k.name),pe.set(k,Fe))}function at(k,Te){const Fe=p.get(Te).get(k);m.get(Te)!==Fe&&(r.uniformBlockBinding(Te,Fe,k.__bindingPointIndex),m.set(Te,Fe))}function gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},Se=null,I={},g={},M=new WeakMap,E=[],R=null,y=!1,S=null,A=null,D=null,N=null,V=null,L=null,B=null,T=new St(0,0,0),z=0,q=!1,G=null,Q=null,ue=null,me=null,Y=null,Ae.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Ee,disable:He,bindFramebuffer:$e,drawBuffers:Qe,useProgram:jt,setBlending:Lt,setMaterial:ft,setFlipSided:ln,setCullFace:Zt,setLineWidth:Tn,setPolygonOffset:W,setScissorTest:nn,activeTexture:mt,bindTexture:Gt,unbindTexture:we,compressedTexImage2D:Jt,compressedTexImage3D:U,texImage2D:ce,texImage3D:fe,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:ve,compressedTexSubImage3D:be,scissor:Ue,viewport:Re,reset:gt}}function g2(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new nt,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,b){return E?new OffscreenCanvas(U,b):vu("canvas")}function y(U,b,$){let ve=1;const be=Jt(U);if((be.width>$||be.height>$)&&(ve=$/Math.max(be.width,be.height)),ve<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ce=Math.floor(ve*be.width),Le=Math.floor(ve*be.height);g===void 0&&(g=R(Ce,Le));const ce=b?R(Ce,Le):g;return ce.width=Ce,ce.height=Le,ce.getContext("2d").drawImage(U,0,0,Ce,Le),et("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Ce+"x"+Le+")."),ce}else return"data"in U&&et("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),U;return U}function S(U){return U.generateMipmaps}function A(U){r.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,b,$,ve,be,Ce=!1){if(U!==null){if(r[U]!==void 0)return r[U];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Le;ve&&(Le=e.get("EXT_texture_norm16"),Le||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=b;if(b===r.RED&&($===r.FLOAT&&(ce=r.R32F),$===r.HALF_FLOAT&&(ce=r.R16F),$===r.UNSIGNED_BYTE&&(ce=r.R8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.R16_EXT),$===r.SHORT&&Le&&(ce=Le.R16_SNORM_EXT)),b===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.R8UI),$===r.UNSIGNED_SHORT&&(ce=r.R16UI),$===r.UNSIGNED_INT&&(ce=r.R32UI),$===r.BYTE&&(ce=r.R8I),$===r.SHORT&&(ce=r.R16I),$===r.INT&&(ce=r.R32I)),b===r.RG&&($===r.FLOAT&&(ce=r.RG32F),$===r.HALF_FLOAT&&(ce=r.RG16F),$===r.UNSIGNED_BYTE&&(ce=r.RG8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.RG16_EXT),$===r.SHORT&&Le&&(ce=Le.RG16_SNORM_EXT)),b===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RG8UI),$===r.UNSIGNED_SHORT&&(ce=r.RG16UI),$===r.UNSIGNED_INT&&(ce=r.RG32UI),$===r.BYTE&&(ce=r.RG8I),$===r.SHORT&&(ce=r.RG16I),$===r.INT&&(ce=r.RG32I)),b===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),$===r.UNSIGNED_INT&&(ce=r.RGB32UI),$===r.BYTE&&(ce=r.RGB8I),$===r.SHORT&&(ce=r.RGB16I),$===r.INT&&(ce=r.RGB32I)),b===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),$===r.UNSIGNED_INT&&(ce=r.RGBA32UI),$===r.BYTE&&(ce=r.RGBA8I),$===r.SHORT&&(ce=r.RGBA16I),$===r.INT&&(ce=r.RGBA32I)),b===r.RGB&&($===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGB16_EXT),$===r.SHORT&&Le&&(ce=Le.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),b===r.RGBA){const fe=Ce?gu:Tt.getTransfer(be);$===r.FLOAT&&(ce=r.RGBA32F),$===r.HALF_FLOAT&&(ce=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ce=fe===Ft?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Le&&(ce=Le.RGBA16_EXT),$===r.SHORT&&Le&&(ce=Le.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function V(U,b){let $;return U?b===null||b===ia||b===fl?$=r.DEPTH24_STENCIL8:b===$i?$=r.DEPTH32F_STENCIL8:b===ul&&($=r.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ia||b===fl?$=r.DEPTH_COMPONENT24:b===$i?$=r.DEPTH_COMPONENT32F:b===ul&&($=r.DEPTH_COMPONENT16),$}function L(U,b){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==On&&U.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),z(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),G(b)}function z(U){const b=s.get(U);if(b.__webglInit===void 0)return;const $=U.source,ve=M.get($);if(ve){const be=ve[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&q(U),Object.keys(ve).length===0&&M.delete($)}s.remove(U)}function q(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const $=U.source,ve=M.get($);delete ve[b.__cacheKey],f.memory.textures--}function G(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(b.__webglFramebuffer[ve]))for(let be=0;be<b.__webglFramebuffer[ve].length;be++)r.deleteFramebuffer(b.__webglFramebuffer[ve][be]);else r.deleteFramebuffer(b.__webglFramebuffer[ve]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ve])}else{if(Array.isArray(b.__webglFramebuffer))for(let ve=0;ve<b.__webglFramebuffer.length;ve++)r.deleteFramebuffer(b.__webglFramebuffer[ve]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ve=0;ve<b.__webglColorRenderbuffer.length;ve++)b.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ve]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=U.textures;for(let ve=0,be=$.length;ve<be;ve++){const Ce=s.get($[ve]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),f.memory.textures--),s.remove($[ve])}s.remove(U)}let Q=0;function ue(){Q=0}function me(){return Q}function Y(U){Q=U}function P(){const U=Q;return U>=l.maxTextures&&et("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Q+=1,U}function F(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ee(U,b){const $=s.get(U);if(U.isVideoTexture&&Gt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const ve=U.image;if(ve===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{He($,U,b);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+b)}function he(U,b){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){He($,U,b);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+b)}function Se(U,b){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){He($,U,b);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+b)}function I(U,b){const $=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){$e($,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+b)}const J={[Dh]:r.REPEAT,[wa]:r.CLAMP_TO_EDGE,[Uh]:r.MIRRORED_REPEAT},xe={[On]:r.NEAREST,[cM]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Fd]:r.LINEAR_MIPMAP_NEAREST,[js]:r.LINEAR_MIPMAP_LINEAR},Ae={[dM]:r.NEVER,[vM]:r.ALWAYS,[hM]:r.LESS,[Ep]:r.LEQUAL,[pM]:r.EQUAL,[Tp]:r.GEQUAL,[mM]:r.GREATER,[gM]:r.NOTEQUAL};function De(U,b){if(b.type===$i&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===Fd||b.magFilter===wc||b.magFilter===js||b.minFilter===Vn||b.minFilter===Fd||b.minFilter===wc||b.minFilter===js)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,J[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,J[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,J[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,xe[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===On||b.minFilter!==wc&&b.minFilter!==js||b.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function oe(U,b){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const ve=b.source;let be=M.get(ve);be===void 0&&(be={},M.set(ve,be));const Ce=F(b);if(Ce!==U.__cacheKey){be[Ce]===void 0&&(be[Ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),be[Ce].usedTimes++;const Le=be[U.__cacheKey];Le!==void 0&&(be[U.__cacheKey].usedTimes--,Le.usedTimes===0&&q(b)),U.__cacheKey=Ce,U.__webglTexture=be[Ce].texture}return $}function ye(U,b,$){return Math.floor(Math.floor(U/$)/b)}function Ee(U,b,$,ve){const Ce=U.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,$,ve,b.data);else{Ce.sort((Pe,Ue)=>Pe.start-Ue.start);let Le=0;for(let Pe=1;Pe<Ce.length;Pe++){const Ue=Ce[Le],Re=Ce[Pe],it=Ue.start+Ue.count,at=ye(Re.start,b.width,4),gt=ye(Ue.start,b.width,4);Re.start<=it+1&&at===gt&&ye(Re.start+Re.count-1,b.width,4)===at?Ue.count=Math.max(Ue.count,Re.start+Re.count-Ue.start):(++Le,Ce[Le]=Re)}Ce.length=Le+1;const ce=i.getParameter(r.UNPACK_ROW_LENGTH),fe=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,Ue=Ce.length;Pe<Ue;Pe++){const Re=Ce[Pe],it=Math.floor(Re.start/4),at=Math.ceil(Re.count/4),gt=it%b.width,k=Math.floor(it/b.width),Te=at,pe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,gt),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,gt,k,Te,pe,$,ve,b.data)}U.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ce),i.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function He(U,b,$){let ve=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ve=r.TEXTURE_3D);const be=oe(U,b),Ce=b.source;i.bindTexture(ve,U.__webglTexture,r.TEXTURE0+$);const Le=s.get(Ce);if(Ce.version!==Le.__version||be===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pe=Tt.getPrimaries(Tt.workingColorSpace),Fe=b.colorSpace===ds?null:Tt.getPrimaries(b.colorSpace),Ne=b.colorSpace===ds||pe===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let fe=y(b.image,!1,l.maxTextureSize);fe=we(b,fe);const Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type);let Ue=N(b.internalFormat,Oe,Pe,b.normalized,b.colorSpace,b.isVideoTexture);De(ve,b);let Re;const it=b.mipmaps,at=b.isVideoTexture!==!0,gt=Le.__version===void 0||be===!0,k=Ce.dataReady,Te=L(b,fe);if(b.isDepthTexture)Ue=V(b.format===Ws,b.type),gt&&(at?i.texStorage2D(r.TEXTURE_2D,1,Ue,fe.width,fe.height):i.texImage2D(r.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Oe,Pe,null));else if(b.isDataTexture)if(it.length>0){at&&gt&&i.texStorage2D(r.TEXTURE_2D,Te,Ue,it[0].width,it[0].height);for(let pe=0,Fe=it.length;pe<Fe;pe++)Re=it[pe],at?k&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Re.width,Re.height,Oe,Pe,Re.data):i.texImage2D(r.TEXTURE_2D,pe,Ue,Re.width,Re.height,0,Oe,Pe,Re.data);b.generateMipmaps=!1}else at?(gt&&i.texStorage2D(r.TEXTURE_2D,Te,Ue,fe.width,fe.height),k&&Ee(b,fe,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,Ue,fe.width,fe.height,0,Oe,Pe,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){at&&gt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ue,it[0].width,it[0].height,fe.depth);for(let pe=0,Fe=it.length;pe<Fe;pe++)if(Re=it[pe],b.format!==Gi)if(Oe!==null)if(at){if(k)if(b.layerUpdates.size>0){const Ne=a_(Re.width,Re.height,b.format,b.type);for(const Me of b.layerUpdates){const We=Re.data.subarray(Me*Ne/Re.data.BYTES_PER_ELEMENT,(Me+1)*Ne/Re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Me,Re.width,Re.height,1,Oe,We)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,fe.depth,Oe,Re.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Ue,Re.width,Re.height,fe.depth,0,Re.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,fe.depth,Oe,Pe,Re.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pe,Ue,Re.width,Re.height,fe.depth,0,Oe,Pe,Re.data)}else{at&&gt&&i.texStorage2D(r.TEXTURE_2D,Te,Ue,it[0].width,it[0].height);for(let pe=0,Fe=it.length;pe<Fe;pe++)Re=it[pe],b.format!==Gi?Oe!==null?at?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Re.width,Re.height,Oe,Re.data):i.compressedTexImage2D(r.TEXTURE_2D,pe,Ue,Re.width,Re.height,0,Re.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?k&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Re.width,Re.height,Oe,Pe,Re.data):i.texImage2D(r.TEXTURE_2D,pe,Ue,Re.width,Re.height,0,Oe,Pe,Re.data)}else if(b.isDataArrayTexture)if(at){if(gt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ue,fe.width,fe.height,fe.depth),k)if(b.layerUpdates.size>0){const pe=a_(fe.width,fe.height,b.format,b.type);for(const Fe of b.layerUpdates){const Ne=fe.data.subarray(Fe*pe/fe.data.BYTES_PER_ELEMENT,(Fe+1)*pe/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Fe,fe.width,fe.height,1,Oe,Pe,Ne)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(b.isData3DTexture)at?(gt&&i.texStorage3D(r.TEXTURE_3D,Te,Ue,fe.width,fe.height,fe.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Oe,Pe,fe.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,fe.width,fe.height,fe.depth,0,Oe,Pe,fe.data);else if(b.isFramebufferTexture){if(gt)if(at)i.texStorage2D(r.TEXTURE_2D,Te,Ue,fe.width,fe.height);else{let pe=fe.width,Fe=fe.height;for(let Ne=0;Ne<Te;Ne++)i.texImage2D(r.TEXTURE_2D,Ne,Ue,pe,Fe,0,Oe,Pe,null),pe>>=1,Fe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const pe=r.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),fe.parentNode!==pe){pe.appendChild(fe),_.add(b),pe.onpaint=tt=>{const an=tt.changedElements;for(const Dt of _)an.includes(Dt.image)&&(Dt.needsUpdate=!0)},pe.requestPaint();return}const Fe=0,Ne=r.RGBA,Me=r.RGBA,We=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Fe,Ne,Me,We,fe),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&gt){const pe=Jt(it[0]);i.texStorage2D(r.TEXTURE_2D,Te,Ue,pe.width,pe.height)}for(let pe=0,Fe=it.length;pe<Fe;pe++)Re=it[pe],at?k&&i.texSubImage2D(r.TEXTURE_2D,pe,0,0,Oe,Pe,Re):i.texImage2D(r.TEXTURE_2D,pe,Ue,Oe,Pe,Re);b.generateMipmaps=!1}else if(at){if(gt){const pe=Jt(fe);i.texStorage2D(r.TEXTURE_2D,Te,Ue,pe.width,pe.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,fe)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Oe,Pe,fe);S(b)&&A(ve),Le.__version=Ce.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function $e(U,b,$){if(b.image.length!==6)return;const ve=oe(U,b),be=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+$);const Ce=s.get(be);if(be.version!==Ce.__version||ve===!0){i.activeTexture(r.TEXTURE0+$);const Le=Tt.getPrimaries(Tt.workingColorSpace),ce=b.colorSpace===ds?null:Tt.getPrimaries(b.colorSpace),fe=b.colorSpace===ds||Le===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!Oe&&!Pe?Ue[Me]=y(b.image[Me],!0,l.maxCubemapSize):Ue[Me]=Pe?b.image[Me].image:b.image[Me],Ue[Me]=we(b,Ue[Me]);const Re=Ue[0],it=c.convert(b.format,b.colorSpace),at=c.convert(b.type),gt=N(b.internalFormat,it,at,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Te=Ce.__version===void 0||ve===!0,pe=be.dataReady;let Fe=L(b,Re);De(r.TEXTURE_CUBE_MAP,b);let Ne;if(Oe){k&&Te&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,gt,Re.width,Re.height);for(let Me=0;Me<6;Me++){Ne=Ue[Me].mipmaps;for(let We=0;We<Ne.length;We++){const tt=Ne[We];b.format!==Gi?it!==null?k?pe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,tt.width,tt.height,it,tt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,gt,tt.width,tt.height,0,tt.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,tt.width,tt.height,it,at,tt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,gt,tt.width,tt.height,0,it,at,tt.data)}}}else{if(Ne=b.mipmaps,k&&Te){Ne.length>0&&Fe++;const Me=Jt(Ue[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,gt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,it,at,Ue[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,Ue[Me].width,Ue[Me].height,0,it,at,Ue[Me].data);for(let We=0;We<Ne.length;We++){const an=Ne[We].image[Me].image;k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,an.width,an.height,it,at,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,gt,an.width,an.height,0,it,at,an.data)}}else{k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,it,at,Ue[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,it,at,Ue[Me]);for(let We=0;We<Ne.length;We++){const tt=Ne[We];k?pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,it,at,tt.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,gt,it,at,tt.image[Me])}}}S(b)&&A(r.TEXTURE_CUBE_MAP),Ce.__version=be.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Qe(U,b,$,ve,be,Ce){const Le=c.convert($.format,$.colorSpace),ce=c.convert($.type),fe=N($.internalFormat,Le,ce,$.normalized,$.colorSpace),Oe=s.get(b),Pe=s.get($);if(Pe.__renderTarget=b,!Oe.__hasExternalTextures){const Ue=Math.max(1,b.width>>Ce),Re=Math.max(1,b.height>>Ce);be===r.TEXTURE_3D||be===r.TEXTURE_2D_ARRAY?i.texImage3D(be,Ce,fe,Ue,Re,b.depth,0,Le,ce,null):i.texImage2D(be,Ce,fe,Ue,Re,0,Le,ce,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),mt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,be,Pe.__webglTexture,0,nn(b)):(be===r.TEXTURE_2D||be>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,be,Pe.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(U,b,$){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const ve=b.depthTexture,be=ve&&ve.isDepthTexture?ve.type:null,Ce=V(b.stencilBuffer,be),Le=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(b),Ce,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(b),Ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,U)}else{const ve=b.textures;for(let be=0;be<ve.length;be++){const Ce=ve[be],Le=c.convert(Ce.format,Ce.colorSpace),ce=c.convert(Ce.type),fe=N(Ce.internalFormat,Le,ce,Ce.normalized,Ce.colorSpace);mt(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,nn(b),fe,b.width,b.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,nn(b),fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(U,b,$){const ve=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=s.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ve){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),be.__webglTexture===void 0){be.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),De(r.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=c.convert(b.depthTexture.format),Pe=c.convert(b.depthTexture.type);let Ue;b.depthTexture.format===Da?Ue=r.DEPTH_COMPONENT24:b.depthTexture.format===Ws&&(Ue=r.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ue,b.width,b.height,0,Oe,Pe,null)}}else ee(b.depthTexture,0);const Ce=be.__webglTexture,Le=nn(b),ce=ve?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,fe=b.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)mt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,Ce,0);else if(b.depthTexture.format===Ws)mt(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,ce,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,fe,ce,Ce,0);else throw new Error("Unknown depthTexture format")}function yt(U){const b=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ve=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ve){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ve.removeEventListener("dispose",be)};ve.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=ve}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let ve=0;ve<6;ve++)pt(b.__webglFramebuffer[ve],U,ve);else{const ve=U.texture.mipmaps;ve&&ve.length>0?pt(b.__webglFramebuffer[0],U,0):pt(b.__webglFramebuffer,U,0)}else if($){b.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ve]),b.__webglDepthbuffer[ve]===void 0)b.__webglDepthbuffer[ve]=r.createRenderbuffer(),jt(b.__webglDepthbuffer[ve],U,!1);else{const be=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,Ce)}}else{const ve=U.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),jt(b.__webglDepthbuffer,U,!1);else{const be=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(U,b,$){const ve=s.get(U);b!==void 0&&Qe(ve.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&yt(U)}function ft(U){const b=U.texture,$=s.get(U),ve=s.get(b);U.addEventListener("dispose",T);const be=U.textures,Ce=U.isWebGLCubeRenderTarget===!0,Le=be.length>1;if(Le||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=b.version,f.memory.textures++),Ce){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[ce]=[];for(let fe=0;fe<b.mipmaps.length;fe++)$.__webglFramebuffer[ce][fe]=r.createFramebuffer()}else $.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)$.__webglFramebuffer[ce]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ce=0,fe=be.length;ce<fe;ce++){const Oe=s.get(be[ce]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&mt(U)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ce=0;ce<be.length;ce++){const fe=be[ce];$.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ce]);const Oe=c.convert(fe.format,fe.colorSpace),Pe=c.convert(fe.type),Ue=N(fe.internalFormat,Oe,Pe,fe.normalized,fe.colorSpace,U.isXRRenderTarget===!0),Re=nn(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Ue,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,$.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),jt($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),De(r.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Qe($.__webglFramebuffer[ce][fe],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Qe($.__webglFramebuffer[ce],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);S(b)&&A(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ce=0,fe=be.length;ce<fe;ce++){const Oe=be[ce],Pe=s.get(Oe);let Ue=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Pe.__webglTexture),De(Ue,Oe),Qe($.__webglFramebuffer,U,Oe,r.COLOR_ATTACHMENT0+ce,Ue,0),S(Oe)&&A(Ue)}i.unbindTexture()}else{let ce=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ce=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ce,ve.__webglTexture),De(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Qe($.__webglFramebuffer[fe],U,b,r.COLOR_ATTACHMENT0,ce,fe);else Qe($.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,ce,0);S(b)&&A(ce),i.unbindTexture()}U.depthBuffer&&yt(U)}function ln(U){const b=U.textures;for(let $=0,ve=b.length;$<ve;$++){const be=b[$];if(S(be)){const Ce=D(U),Le=s.get(be).__webglTexture;i.bindTexture(Ce,Le),A(Ce),i.unbindTexture()}}}const Zt=[],Tn=[];function W(U){if(U.samples>0){if(mt(U)===!1){const b=U.textures,$=U.width,ve=U.height;let be=r.COLOR_BUFFER_BIT;const Ce=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(U),ce=b.length>1;if(ce)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const fe=U.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(be|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(be|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,$,ve,0,0,$,ve,be,r.NEAREST),m===!0&&(Zt.length=0,Tn.length=0,Zt.push(r.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Zt.push(Ce),Tn.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Tn)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Zt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function nn(U){return Math.min(l.maxSamples,U.samples)}function mt(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Gt(U){const b=f.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function we(U,b){const $=U.colorSpace,ve=U.format,be=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==mu&&$!==ds&&(Tt.getTransfer($)===Ft?(ve!==Gi||be!==gi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",$)),b}function Jt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=P,this.resetTextureUnits=ue,this.getTextureUnits=me,this.setTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=he,this.setTexture3D=Se,this.setTextureCube=I,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function v2(r,e){function i(s,l=ds){let c;const f=Tt.getTransfer(l);if(s===gi)return r.UNSIGNED_BYTE;if(s===xp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Y_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Z_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===W_)return r.BYTE;if(s===q_)return r.SHORT;if(s===ul)return r.UNSIGNED_SHORT;if(s===_p)return r.INT;if(s===ia)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===vi)return r.HALF_FLOAT;if(s===K_)return r.ALPHA;if(s===Q_)return r.RGB;if(s===Gi)return r.RGBA;if(s===Da)return r.DEPTH_COMPONENT;if(s===Ws)return r.DEPTH_STENCIL;if(s===J_)return r.RED;if(s===yp)return r.RED_INTEGER;if(s===Zs)return r.RG;if(s===Mp)return r.RG_INTEGER;if(s===bp)return r.RGBA_INTEGER;if(s===ou||s===lu||s===cu||s===uu)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nh||s===Lh||s===Oh||s===Ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Nh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh||s===Ih||s===Bh||s===Fh||s===Hh||s===hu||s===Gh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zh||s===Ih)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Bh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Fh)return c.COMPRESSED_R11_EAC;if(s===Hh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===hu)return c.COMPRESSED_RG11_EAC;if(s===Gh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Vh||s===kh||s===Xh||s===jh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Vh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$h)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ep)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===np||s===ip||s===ap)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===np)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ap)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sp||s===rp||s===pu||s===op)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===sp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const _2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x2=`
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

}`;class S2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new lx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Pn({vertexShader:_2,fragmentShader:x2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new Mu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends Ks{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,_=null,g=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",y=new S2,S={},A=i.getContextAttributes();let D=null,N=null;const V=[],L=[],B=new nt;let T=null;const z=new mi;z.viewport=new Yt;const q=new mi;q.viewport=new Yt;const G=[z,q],Q=new Tb;let ue=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ye=V[oe];return ye===void 0&&(ye=new jd,V[oe]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(oe){let ye=V[oe];return ye===void 0&&(ye=new jd,V[oe]=ye),ye.getGripSpace()},this.getHand=function(oe){let ye=V[oe];return ye===void 0&&(ye=new jd,V[oe]=ye),ye.getHandSpace()};function Y(oe){const ye=L.indexOf(oe.inputSource);if(ye===-1)return;const Ee=V[ye];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,p||f),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function P(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",F);for(let oe=0;oe<V.length;oe++){const ye=L[oe];ye!==null&&(L[oe]=null,V[oe].disconnect(ye))}ue=null,me=null,y.reset();for(const oe in S)delete S[oe];e.setRenderTarget(D),M=null,g=null,_=null,l=null,N=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){c=oe,s.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){h=oe,s.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(oe){if(l=oe,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",P),l.addEventListener("inputsourceschange",F),A.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,He=null,$e=null;A.depth&&($e=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=A.stencil?Ws:Da,He=A.stencil?fl:ia);const Qe={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ni(g.textureWidth,g.textureHeight,{format:Gi,type:gi,depthTexture:new Qr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new ni(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),De.setContext(l),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function F(oe){for(let ye=0;ye<oe.removed.length;ye++){const Ee=oe.removed[ye],He=L.indexOf(Ee);He>=0&&(L[He]=null,V[He].disconnect(Ee))}for(let ye=0;ye<oe.added.length;ye++){const Ee=oe.added[ye];let He=L.indexOf(Ee);if(He===-1){for(let Qe=0;Qe<V.length;Qe++)if(Qe>=L.length){L.push(Ee),He=Qe;break}else if(L[Qe]===null){L[Qe]=Ee,He=Qe;break}if(He===-1)break}const $e=V[He];$e&&$e.connect(Ee)}}const ee=new j,he=new j;function Se(oe,ye,Ee){ee.setFromMatrixPosition(ye.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const He=ee.distanceTo(he),$e=ye.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,jt=$e[14]/($e[10]-1),pt=$e[14]/($e[10]+1),yt=($e[9]+1)/$e[5],Lt=($e[9]-1)/$e[5],ft=($e[8]-1)/$e[0],ln=(Qe[8]+1)/Qe[0],Zt=jt*ft,Tn=jt*ln,W=He/(-ft+ln),nn=W*-ft;if(ye.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(nn),oe.translateZ(W),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),$e[10]===-1)oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const mt=jt+W,Gt=pt+W,we=Zt-nn,Jt=Tn+(He-nn),U=yt*pt/Gt*mt,b=Lt*pt/Gt*mt;oe.projectionMatrix.makePerspective(we,Jt,U,b,mt,Gt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function I(oe,ye){ye===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ye.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(l===null)return;let ye=oe.near,Ee=oe.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),Q.near=q.near=z.near=ye,Q.far=q.far=z.far=Ee,(ue!==Q.near||me!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ue=Q.near,me=Q.far),Q.layers.mask=oe.layers.mask|6,z.layers.mask=Q.layers.mask&-5,q.layers.mask=Q.layers.mask&-3;const He=oe.parent,$e=Q.cameras;I(Q,He);for(let Qe=0;Qe<$e.length;Qe++)I($e[Qe],He);$e.length===2?Se(Q,z,q):Q.projectionMatrix.copy(z.projectionMatrix),J(oe,Q,He)};function J(oe,ye,Ee){Ee===null?oe.matrix.copy(ye.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ye.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ye.projectionMatrix),oe.projectionMatrixInverse.copy(ye.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=hl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(oe){m=oe,g!==null&&(g.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(oe){return S[oe]};let xe=null;function Ae(oe,ye){if(v=ye.getViewerPose(p||f),E=ye,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let He=!1;Ee.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let pt=0;pt<Ee.length;pt++){const yt=Ee[pt];let Lt=null;if(M!==null)Lt=M.getViewport(yt);else{const ln=_.getViewSubImage(g,yt);Lt=ln.viewport,pt===0&&(e.setRenderTargetTextures(N,ln.colorTexture,ln.depthStencilTexture),e.setRenderTarget(N))}let ft=G[pt];ft===void 0&&(ft=new mi,ft.layers.enable(pt),ft.viewport=new Yt,G[pt]=ft),ft.matrix.fromArray(yt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(yt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(Q.matrix.copy(ft.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(ft)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const pt=_.getDepthInformation(Ee[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,l.renderState)}if($e&&$e.includes("camera-access")&&R){e.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<Ee.length;pt++){const yt=Ee[pt].camera;if(yt){let Lt=S[yt];Lt||(Lt=new lx,S[yt]=Lt);const ft=_.getCameraImage(yt);Lt.sourceTexture=ft}}}}for(let Ee=0;Ee<V.length;Ee++){const He=L[Ee],$e=V[Ee];He!==null&&$e!==void 0&&$e.update(He,ye,p||f)}xe&&xe(oe,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),E=null}const De=new dx;De.setAnimationLoop(Ae),this.setAnimationLoop=function(oe){xe=oe},this.dispose=function(){}}}const M2=new sn,xx=new rt;xx.set(-1,0,0,0,1,0,0,0,1);function b2(r,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,cx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,A,D,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),R(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(f(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,A,D):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ti&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ti&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const A=e.get(S),D=A.envMap,N=A.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(N)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(xx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,A,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*A,y.scale.value=D*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,A){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function R(y,S){const A=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function E2(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,D){const N=D.program;s.uniformBlockBinding(A,N)}function p(A,D){let N=l[A.id];N===void 0&&(E(A),N=v(A),l[A.id]=N,A.addEventListener("dispose",y));const V=D.program;s.updateUBOMapping(A,V);const L=e.render.frame;c[A.id]!==L&&(g(A),c[A.id]=L)}function v(A){const D=_();A.__bindingPointIndex=D;const N=r.createBuffer(),V=A.__size,L=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,V,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,N),N}function _(){for(let A=0;A<h;A++)if(f.indexOf(A)===-1)return f.push(A),A;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=l[A.id],N=A.uniforms,V=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let L=0,B=N.length;L<B;L++){const T=Array.isArray(N[L])?N[L]:[N[L]];for(let z=0,q=T.length;z<q;z++){const G=T[z];if(M(G,L,z,V)===!0){const Q=G.__offset,ue=Array.isArray(G.value)?G.value:[G.value];let me=0;for(let Y=0;Y<ue.length;Y++){const P=ue[Y],F=R(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Q+me,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):ArrayBuffer.isView(P)?G.__data.set(new P.constructor(P.buffer,P.byteOffset,G.__data.length)):(P.toArray(G.__data,me),me+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(A,D,N,V){const L=A.value,B=D+"_"+N;if(V[B]===void 0)return typeof L=="number"||typeof L=="boolean"?V[B]=L:ArrayBuffer.isView(L)?V[B]=L.slice():V[B]=L.clone(),!0;{const T=V[B];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return V[B]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function E(A){const D=A.uniforms;let N=0;const V=16;for(let B=0,T=D.length;B<T;B++){const z=Array.isArray(D[B])?D[B]:[D[B]];for(let q=0,G=z.length;q<G;q++){const Q=z[q],ue=Array.isArray(Q.value)?Q.value:[Q.value];for(let me=0,Y=ue.length;me<Y;me++){const P=ue[me],F=R(P),ee=N%V,he=ee%F.boundary,Se=ee+he;N+=he,Se!==0&&V-Se<F.storage&&(N+=V-Se),Q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=N,N+=F.storage}}}const L=N%V;return L>0&&(N+=V-L),A.__size=N,A.__cache={},this}function R(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):et("WebGLRenderer: Unsupported uniform value type.",A),D}function y(A){const D=A.target;D.removeEventListener("dispose",y);const N=f.indexOf(D.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const A in l)r.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const T2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function A2(){return Yi===null&&(Yi=new sb(T2,16,16,Zs,vi),Yi.name="DFG_LUT",Yi.minFilter=Vn,Yi.magFilter=Vn,Yi.wrapS=wa,Yi.wrapT=wa,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class w2{constructor(e={}){const{canvas:i=xM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=gi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const R=M,y=new Set([bp,Mp,yp]),S=new Set([gi,ia,ul,fl,xp,Sp]),A=new Uint32Array(4),D=new Int32Array(4),N=new j;let V=null,L=null;const B=[],T=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,Q=null;this._outputColorSpace=Ri;let ue=0,me=0,Y=null,P=-1,F=null;const ee=new Yt,he=new Yt;let Se=null;const I=new St(0);let J=0,xe=i.width,Ae=i.height,De=1,oe=null,ye=null;const Ee=new Yt(0,0,xe,Ae),He=new Yt(0,0,xe,Ae);let $e=!1;const Qe=new Cp;let jt=!1,pt=!1;const yt=new sn,Lt=new j,ft=new Yt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Tn(){return Y===null?De:1}let W=s;function nn(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gp}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",tt,!1),W===null){const Z="webgl2";if(W=nn(Z,w),W===null)throw nn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw At("WebGLRenderer: "+w.message),w}let mt,Gt,we,Jt,U,b,$,ve,be,Ce,Le,ce,fe,Oe,Pe,Ue,Re,it,at,gt,k,Te,pe;function Fe(){mt=new AT(W),mt.init(),k=new v2(W,mt),Gt=new _T(W,mt,e,k),we=new m2(W,mt),Gt.reversedDepthBuffer&&g&&we.buffers.depth.setReversed(!0),Jt=new RT(W),U=new t2,b=new g2(W,mt,we,U,Gt,k,Jt),$=new TT(q),ve=new Lb(W),Te=new gT(W,ve),be=new wT(W,ve,Jt,Te),Ce=new UT(W,be,ve,Te,Jt),it=new DT(W,Gt,b),Pe=new xT(U),Le=new e2(q,$,mt,Gt,Te,Pe),ce=new b2(q,U),fe=new i2,Oe=new c2(mt),Re=new mT(q,$,we,Ce,E,m),Ue=new p2(q,Ce,Gt),pe=new E2(W,Jt,Gt,we),at=new vT(W,mt,Jt),gt=new CT(W,mt,Jt),Jt.programs=Le.programs,q.capabilities=Gt,q.extensions=mt,q.properties=U,q.renderLists=fe,q.shadowMap=Ue,q.state=we,q.info=Jt}Fe(),R!==gi&&(z=new LT(R,i.width,i.height,l,c));const Ne=new y2(q,W);this.xr=Ne,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(w){w!==void 0&&(De=w,this.setSize(xe,Ae,!1))},this.getSize=function(w){return w.set(xe,Ae)},this.setSize=function(w,Z,se=!0){if(Ne.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=w,Ae=Z,i.width=Math.floor(w*De),i.height=Math.floor(Z*De),se===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(xe*De,Ae*De).floor()},this.setDrawingBufferSize=function(w,Z,se){xe=w,Ae=Z,De=se,i.width=Math.floor(w*se),i.height=Math.floor(Z*se),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(R===gi){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){et("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(Ee)},this.setViewport=function(w,Z,se,ie){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,Z,se,ie),we.viewport(ee.copy(Ee).multiplyScalar(De).round())},this.getScissor=function(w){return w.copy(He)},this.setScissor=function(w,Z,se,ie){w.isVector4?He.set(w.x,w.y,w.z,w.w):He.set(w,Z,se,ie),we.scissor(he.copy(He).multiplyScalar(De).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){we.setScissorTest($e=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){ye=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,se=!0){let ie=0;if(w){let ae=!1;if(Y!==null){const Be=Y.texture.format;ae=y.has(Be)}if(ae){const Be=Y.texture.type,Ve=S.has(Be),ze=Re.getClearColor(),Xe=Re.getClearAlpha(),ke=ze.r,Ze=ze.g,lt=ze.b;Ve?(A[0]=ke,A[1]=Ze,A[2]=lt,A[3]=Xe,W.clearBufferuiv(W.COLOR,0,A)):(D[0]=ke,D[1]=Ze,D[2]=lt,D[3]=Xe,W.clearBufferiv(W.COLOR,0,D))}else ie|=W.COLOR_BUFFER_BIT}Z&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Q=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",tt,!1),Re.dispose(),fe.dispose(),Oe.dispose(),U.dispose(),$.dispose(),Ce.dispose(),Te.dispose(),pe.dispose(),Le.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",ro),Ne.removeEventListener("sessionend",oo),In.stop()};function Me(w){w.preventDefault(),_u("WebGLRenderer: Context Lost."),G=!0}function We(){_u("WebGLRenderer: Context Restored."),G=!1;const w=Jt.autoReset,Z=Ue.enabled,se=Ue.autoUpdate,ie=Ue.needsUpdate,ae=Ue.type;Fe(),Jt.autoReset=w,Ue.enabled=Z,Ue.autoUpdate=se,Ue.needsUpdate=ie,Ue.type=ae}function tt(w){At("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function an(w){const Z=w.target;Z.removeEventListener("dispose",an),Dt(Z)}function Dt(w){xi(w),U.remove(w)}function xi(w){const Z=U.get(w).programs;Z!==void 0&&(Z.forEach(function(se){Le.releaseProgram(se)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,se,ie,ae,Be){Z===null&&(Z=ln);const Ve=ae.isMesh&&ae.matrixWorld.determinant()<0,ze=La(w,Z,se,ie,ae);we.setMaterial(ie,Ve);let Xe=se.index,ke=1;if(ie.wireframe===!0){if(Xe=be.getWireframeAttribute(se),Xe===void 0)return;ke=2}const Ze=se.drawRange,lt=se.attributes.position;let Ye=Ze.start*ke,wt=(Ze.start+Ze.count)*ke;Be!==null&&(Ye=Math.max(Ye,Be.start*ke),wt=Math.min(wt,(Be.start+Be.count)*ke)),Xe!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,Xe.count)):lt!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,lt.count));const $t=wt-Ye;if($t<0||$t===1/0)return;Te.setup(ae,ie,ze,se,Xe);let Wt,Ot=at;if(Xe!==null&&(Wt=ve.get(Xe),Ot=gt,Ot.setIndex(Wt)),ae.isMesh)ie.wireframe===!0?(we.setLineWidth(ie.wireframeLinewidth*Tn()),Ot.setMode(W.LINES)):Ot.setMode(W.TRIANGLES);else if(ae.isLine){let Pt=ie.linewidth;Pt===void 0&&(Pt=1),we.setLineWidth(Pt*Tn()),ae.isLineSegments?Ot.setMode(W.LINES):ae.isLineLoop?Ot.setMode(W.LINE_LOOP):Ot.setMode(W.LINE_STRIP)}else ae.isPoints?Ot.setMode(W.POINTS):ae.isSprite&&Ot.setMode(W.TRIANGLES);if(ae.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Pt=ae._multiDrawStarts,Ge=ae._multiDrawCounts,Bn=ae._multiDrawCount,vt=Xe?ve.get(Xe).bytesPerElement:1,xn=U.get(ie).currentProgram.getUniforms();for(let ai=0;ai<Bn;ai++)xn.setValue(W,"_gl_DrawID",ai),Ot.render(Pt[ai]/vt,Ge[ai])}else if(ae.isInstancedMesh)Ot.renderInstances(Ye,$t,ae.count);else if(se.isInstancedBufferGeometry){const Pt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,Pt);Ot.renderInstances(Ye,$t,Ge)}else Ot.render(Ye,$t)};function ii(w,Z,se){w.transparent===!0&&w.side===Qi&&w.forceSinglePass===!1?(w.side=ti,w.needsUpdate=!0,Qs(w,Z,se),w.side=ms,w.needsUpdate=!0,Qs(w,Z,se),w.side=Qi):Qs(w,Z,se)}this.compile=function(w,Z,se=null){se===null&&(se=w),L=Oe.get(se),L.init(Z),T.push(L),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),w!==se&&w.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const ie=new Set;return w.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Be=ae.material;if(Be)if(Array.isArray(Be))for(let Ve=0;Ve<Be.length;Ve++){const ze=Be[Ve];ii(ze,se,ae),ie.add(ze)}else ii(Be,se,ae),ie.add(Be)}),L=T.pop(),ie},this.compileAsync=function(w,Z,se=null){const ie=this.compile(w,Z,se);return new Promise(ae=>{function Be(){if(ie.forEach(function(Ve){U.get(Ve).currentProgram.isReady()&&ie.delete(Ve)}),ie.size===0){ae(w);return}setTimeout(Be,10)}mt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let _s=null;function so(w){_s&&_s(w)}function ro(){In.stop()}function oo(){In.start()}const In=new dx;In.setAnimationLoop(so),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(w){_s=w,Ne.setAnimationLoop(w),w===null?In.stop():In.start()},Ne.addEventListener("sessionstart",ro),Ne.addEventListener("sessionend",oo),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(w,Z);const se=Ne.enabled===!0&&Ne.isPresenting===!0,ie=z!==null&&(Y===null||se)&&z.begin(q,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(Z),Z=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(q,w,Z,Y),L=Oe.get(w,T.length),L.init(Z),L.state.textureUnits=b.getTextureUnits(),T.push(L),yt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Qe.setFromProjectionMatrix(yt,ea,Z.reversedDepth),pt=this.localClippingEnabled,jt=Pe.init(this.clippingPlanes,pt),V=fe.get(w,B.length),V.init(),B.push(V),Ne.enabled===!0&&Ne.isPresenting===!0){const Ve=q.xr.getDepthSensingMesh();Ve!==null&&cn(Ve,Z,-1/0,q.sortObjects)}cn(w,Z,0,q.sortObjects),V.finish(),q.sortObjects===!0&&V.sort(oe,ye),Zt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Zt&&Re.addToRenderList(V,w),this.info.render.frame++,jt===!0&&Pe.beginShadows();const ae=L.state.shadowsArray;if(Ue.render(ae,w,Z),jt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&z.hasRenderPass())===!1){const Ve=V.opaque,ze=V.transmissive;if(L.setupLights(),Z.isArrayCamera){const Xe=Z.cameras;if(ze.length>0)for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const lt=Xe[ke];aa(Ve,ze,w,lt)}Zt&&Re.render(w);for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const lt=Xe[ke];An(V,w,lt,lt.viewport)}}else ze.length>0&&aa(Ve,ze,w,Z),Zt&&Re.render(w),An(V,w,Z)}Y!==null&&me===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),ie&&z.end(q),w.isScene===!0&&w.onAfterRender(q,w,Z),Te.resetDefaultState(),P=-1,F=null,T.pop(),T.length>0?(L=T[T.length-1],b.setTextureUnits(L.state.textureUnits),jt===!0&&Pe.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?V=B[B.length-1]:V=null,Q!==null&&Q.renderEnd()};function cn(w,Z,se,ie){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){ie&&ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);const Ve=Ce.update(w),ze=w.material;ze.visible&&V.push(w,Ve,ze,se,ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const Ve=Ce.update(w),ze=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ft.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ft.copy(Ve.boundingSphere.center)),ft.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(ze)){const Xe=Ve.groups;for(let ke=0,Ze=Xe.length;ke<Ze;ke++){const lt=Xe[ke],Ye=ze[lt.materialIndex];Ye&&Ye.visible&&V.push(w,Ve,Ye,se,ft.z,lt)}}else ze.visible&&V.push(w,Ve,ze,se,ft.z,null)}}const Be=w.children;for(let Ve=0,ze=Be.length;Ve<ze;Ve++)cn(Be[Ve],Z,se,ie)}function An(w,Z,se,ie){const{opaque:ae,transmissive:Be,transparent:Ve}=w;L.setupLightsView(se),jt===!0&&Pe.setGlobalState(q.clippingPlanes,se),ie&&we.viewport(ee.copy(ie)),ae.length>0&&Ua(ae,Z,se),Be.length>0&&Ua(Be,Z,se),Ve.length>0&&Ua(Ve,Z,se),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function aa(w,Z,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ye=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new ni(1,1,{generateMipmaps:!0,type:Ye?vi:gi,minFilter:js,samples:Math.max(4,Gt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Be=L.state.transmissionRenderTarget[ie.id],Ve=ie.viewport||ee;Be.setSize(Ve.z*q.transmissionResolutionScale,Ve.w*q.transmissionResolutionScale);const ze=q.getRenderTarget(),Xe=q.getActiveCubeFace(),ke=q.getActiveMipmapLevel();q.setRenderTarget(Be),q.getClearColor(I),J=q.getClearAlpha(),J<1&&q.setClearColor(16777215,.5),q.clear(),Zt&&Re.render(se);const Ze=q.toneMapping;q.toneMapping=na;const lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),jt===!0&&Pe.setGlobalState(q.clippingPlanes,ie),Ua(w,se,ie),b.updateMultisampleRenderTarget(Be),b.updateRenderTargetMipmap(Be),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let wt=0,$t=Z.length;wt<$t;wt++){const Wt=Z[wt],{object:Ot,geometry:Pt,material:Ge,group:Bn}=Wt;if(Ge.side===Qi&&Ot.layers.test(ie.layers)){const vt=Ge.side;Ge.side=ti,Ge.needsUpdate=!0,gl(Ot,se,ie,Pt,Ge,Bn),Ge.side=vt,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(b.updateMultisampleRenderTarget(Be),b.updateRenderTargetMipmap(Be))}q.setRenderTarget(ze,Xe,ke),q.setClearColor(I,J),lt!==void 0&&(ie.viewport=lt),q.toneMapping=Ze}function Ua(w,Z,se){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Be=w.length;ae<Be;ae++){const Ve=w[ae],{object:ze,geometry:Xe,group:ke}=Ve;let Ze=Ve.material;Ze.allowOverride===!0&&ie!==null&&(Ze=ie),ze.layers.test(se.layers)&&gl(ze,Z,se,Xe,Ze,ke)}}function gl(w,Z,se,ie,ae,Be){w.onBeforeRender(q,Z,se,ie,ae,Be),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ae.onBeforeRender(q,Z,se,ie,w,Be),ae.transparent===!0&&ae.side===Qi&&ae.forceSinglePass===!1?(ae.side=ti,ae.needsUpdate=!0,q.renderBufferDirect(se,Z,ie,ae,w,Be),ae.side=ms,ae.needsUpdate=!0,q.renderBufferDirect(se,Z,ie,ae,w,Be),ae.side=Qi):q.renderBufferDirect(se,Z,ie,ae,w,Be),w.onAfterRender(q,Z,se,ie,ae,Be)}function Qs(w,Z,se){Z.isScene!==!0&&(Z=ln);const ie=U.get(w),ae=L.state.lights,Be=L.state.shadowsArray,Ve=ae.state.version,ze=Le.getParameters(w,ae.state,Be,Z,se,L.state.lightProbeGridArray),Xe=Le.getProgramCacheKey(ze);let ke=ie.programs;ie.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,ie.fog=Z.fog;const Ze=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ie.envMap=$.get(w.envMap||ie.environment,Ze),ie.envMapRotation=ie.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",an),ke=new Map,ie.programs=ke);let lt=ke.get(Xe);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===Ve)return Na(w,ze),lt}else ze.uniforms=Le.getUniforms(w),Q!==null&&w.isNodeMaterial&&Q.build(w,se,ze),w.onBeforeCompile(ze,q),lt=Le.acquireProgram(ze,Xe),ke.set(Xe,lt),ie.uniforms=ze.uniforms;const Ye=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Pe.uniform),Na(w,ze),ie.needsLights=xs(w),ie.lightsStateVersion=Ve,ie.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=lt,ie.uniformsList=null,lt}function lo(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=fu.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Na(w,Z){const se=U.get(w);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.batchingColor=Z.batchingColor,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.instancingMorph=Z.instancingMorph,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function co(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;N.setFromMatrixPosition(Z.matrixWorld);for(let se=0,ie=w.length;se<ie;se++){const ae=w[se];if(ae.texture!==null&&ae.boundingBox.containsPoint(N))return ae}return null}function La(w,Z,se,ie,ae){Z.isScene!==!0&&(Z=ln),b.resetTextureUnits();const Be=Z.fog,Ve=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Z.environment:null,ze=Y===null?q.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Tt.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,ke=$.get(ie.envMap||Ve,Xe),Ze=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,$t=!!se.morphAttributes.color;let Wt=na;ie.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Wt=q.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ge=U.get(ie),Bn=L.state.lights;if(jt===!0&&(pt===!0||w!==F)){const Nt=w===F&&ie.id===P;Pe.setState(ie,w,Nt)}let vt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Bn.state.version||Ge.outputColorSpace!==ze||ae.isBatchedMesh&&Ge.batching===!1||!ae.isBatchedMesh&&Ge.batching===!0||ae.isBatchedMesh&&Ge.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ge.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ge.instancing===!1||!ae.isInstancedMesh&&Ge.instancing===!0||ae.isSkinnedMesh&&Ge.skinning===!1||!ae.isSkinnedMesh&&Ge.skinning===!0||ae.isInstancedMesh&&Ge.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ge.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ge.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ge.instancingMorph===!1&&ae.morphTexture!==null||Ge.envMap!==ke||ie.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Pe.numPlanes||Ge.numIntersection!==Pe.numIntersection)||Ge.vertexAlphas!==Ze||Ge.vertexTangents!==lt||Ge.morphTargets!==Ye||Ge.morphNormals!==wt||Ge.morphColors!==$t||Ge.toneMapping!==Wt||Ge.morphTargetsCount!==Pt||!!Ge.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ge.__version=ie.version);let xn=Ge.currentProgram;vt===!0&&(xn=Qs(ie,Z,ae),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,xn,Ge));let ai=!1,Ni=!1,si=!1;const zt=xn.getUniforms(),en=Ge.uniforms;if(we.useProgram(xn.program)&&(ai=!0,Ni=!0,si=!0),ie.id!==P&&(P=ie.id,Ni=!0),Ge.needsLights){const Nt=co(L.state.lightProbeGridArray,ae);Ge.lightProbeGrid!==Nt&&(Ge.lightProbeGrid=Nt,Ni=!0)}if(ai||F!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),zt.setValue(W,"projectionMatrix",w.projectionMatrix),zt.setValue(W,"viewMatrix",w.matrixWorldInverse);const Vi=zt.map.cameraPosition;Vi!==void 0&&Vi.setValue(W,Lt.setFromMatrixPosition(w.matrixWorld)),Gt.logarithmicDepthBuffer&&zt.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Ni=!0,si=!0)}if(Ge.needsLights&&(Bn.state.directionalShadowMap.length>0&&zt.setValue(W,"directionalShadowMap",Bn.state.directionalShadowMap,b),Bn.state.spotShadowMap.length>0&&zt.setValue(W,"spotShadowMap",Bn.state.spotShadowMap,b),Bn.state.pointShadowMap.length>0&&zt.setValue(W,"pointShadowMap",Bn.state.pointShadowMap,b)),ae.isSkinnedMesh){zt.setOptional(W,ae,"bindMatrix"),zt.setOptional(W,ae,"bindMatrixInverse");const Nt=ae.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),zt.setValue(W,"boneTexture",Nt.boneTexture,b))}ae.isBatchedMesh&&(zt.setOptional(W,ae,"batchingTexture"),zt.setValue(W,"batchingTexture",ae._matricesTexture,b),zt.setOptional(W,ae,"batchingIdTexture"),zt.setValue(W,"batchingIdTexture",ae._indirectTexture,b),zt.setOptional(W,ae,"batchingColorTexture"),ae._colorsTexture!==null&&zt.setValue(W,"batchingColorTexture",ae._colorsTexture,b));const Li=se.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&it.update(ae,se,xn),(Ni||Ge.receiveShadow!==ae.receiveShadow)&&(Ge.receiveShadow=ae.receiveShadow,zt.setValue(W,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Z.environment!==null&&(en.envMapIntensity.value=Z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=A2()),Ni){if(zt.setValue(W,"toneMappingExposure",q.toneMappingExposure),Ge.needsLights&&Oa(en,si),Be&&ie.fog===!0&&ce.refreshFogUniforms(en,Be),ce.refreshMaterialUniforms(en,ie,De,Ae,L.state.transmissionRenderTarget[w.id]),Ge.needsLights&&Ge.lightProbeGrid){const Nt=Ge.lightProbeGrid;en.probesSH.value=Nt.texture,en.probesMin.value.copy(Nt.boundingBox.min),en.probesMax.value.copy(Nt.boundingBox.max),en.probesResolution.value.copy(Nt.resolution)}fu.upload(W,lo(Ge),en,b)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(fu.upload(W,lo(Ge),en,b),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(W,"center",ae.center),zt.setValue(W,"modelViewMatrix",ae.modelViewMatrix),zt.setValue(W,"normalMatrix",ae.normalMatrix),zt.setValue(W,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Nt=ie.uniformsGroups;for(let Vi=0,za=Nt.length;Vi<za;Vi++){const Ss=Nt[Vi];pe.update(Ss,xn),pe.bind(Ss,xn)}}return xn}function Oa(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function xs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,Z,se){const ie=U.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),U.get(w.texture).__webglTexture=Z,U.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const se=U.get(w);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0};const Pa=W.createFramebuffer();this.setRenderTarget=function(w,Z=0,se=0){Y=w,ue=Z,me=se;let ie=null,ae=!1,Be=!1;if(w){const ze=U.get(w);if(ze.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(W.FRAMEBUFFER,ze.__webglFramebuffer),ee.copy(w.viewport),he.copy(w.scissor),Se=w.scissorTest,we.viewport(ee),we.scissor(he),we.setScissorTest(Se),P=-1;return}else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(ze.__hasExternalTextures)b.rebindTextures(w,U.get(w.texture).__webglTexture,U.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(ze.__boundDepthTexture!==Ze){if(Ze!==null&&U.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const ke=U.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[Z])?ie=ke[Z][se]:ie=ke[Z],ae=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?ie=U.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?ie=ke[se]:ie=ke,ee.copy(w.viewport),he.copy(w.scissor),Se=w.scissorTest}else ee.copy(Ee).multiplyScalar(De).floor(),he.copy(He).multiplyScalar(De).floor(),Se=$e;if(se!==0&&(ie=Pa),we.bindFramebuffer(W.FRAMEBUFFER,ie)&&we.drawBuffers(w,ie),we.viewport(ee),we.scissor(he),we.setScissorTest(Se),ae){const ze=U.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ze.__webglTexture,se)}else if(Be){const ze=Z;for(let Xe=0;Xe<w.textures.length;Xe++){const ke=U.get(w.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,se,ze)}}else if(w!==null&&se!==0){const ze=U.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ze.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(w,Z,se,ie,ae,Be,Ve,ze=0){if(!(w&&w.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe){we.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const ke=w.textures[ze],Ze=ke.format,lt=ke.type;if(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+ze),!Gt.textureFormatReadable(Ze)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(lt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ie&&se>=0&&se<=w.height-ae&&W.readPixels(Z,se,ie,ae,k.convert(Ze),k.convert(lt),Be)}finally{const ke=Y!==null?U.get(Y).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,Z,se,ie,ae,Be,Ve,ze=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(Xe=Xe[Ve]),Xe)if(Z>=0&&Z<=w.width-ie&&se>=0&&se<=w.height-ae){we.bindFramebuffer(W.FRAMEBUFFER,Xe);const ke=w.textures[ze],Ze=ke.format,lt=ke.type;if(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+ze),!Gt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,Be.byteLength,W.STREAM_READ),W.readPixels(Z,se,ie,ae,k.convert(Ze),k.convert(lt),0);const wt=Y!==null?U.get(Y).__webglFramebuffer:null;we.bindFramebuffer(W.FRAMEBUFFER,wt);const $t=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await SM(W,$t,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Be),W.deleteBuffer(Ye),W.deleteSync($t),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,se=0){const ie=Math.pow(2,-se),ae=Math.floor(w.image.width*ie),Be=Math.floor(w.image.height*ie),Ve=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;b.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,Ve,ze,ae,Be),we.unbindTexture()};const hn=W.createFramebuffer(),vl=W.createFramebuffer();this.copyTextureToTexture=function(w,Z,se=null,ie=null,ae=0,Be=0){let Ve,ze,Xe,ke,Ze,lt,Ye,wt,$t;const Wt=w.isCompressedTexture?w.mipmaps[Be]:w.image;if(se!==null)Ve=se.max.x-se.min.x,ze=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,ke=se.min.x,Ze=se.min.y,lt=se.isBox3?se.min.z:0;else{const en=Math.pow(2,-ae);Ve=Math.floor(Wt.width*en),ze=Math.floor(Wt.height*en),w.isDataArrayTexture?Xe=Wt.depth:w.isData3DTexture?Xe=Math.floor(Wt.depth*en):Xe=1,ke=0,Ze=0,lt=0}ie!==null?(Ye=ie.x,wt=ie.y,$t=ie.z):(Ye=0,wt=0,$t=0);const Ot=k.convert(Z.format),Pt=k.convert(Z.type);let Ge;Z.isData3DTexture?(b.setTexture3D(Z,0),Ge=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(b.setTexture2DArray(Z,0),Ge=W.TEXTURE_2D_ARRAY):(b.setTexture2D(Z,0),Ge=W.TEXTURE_2D),we.activeTexture(W.TEXTURE0),we.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),we.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),we.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const Bn=we.getParameter(W.UNPACK_ROW_LENGTH),vt=we.getParameter(W.UNPACK_IMAGE_HEIGHT),xn=we.getParameter(W.UNPACK_SKIP_PIXELS),ai=we.getParameter(W.UNPACK_SKIP_ROWS),Ni=we.getParameter(W.UNPACK_SKIP_IMAGES);we.pixelStorei(W.UNPACK_ROW_LENGTH,Wt.width),we.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wt.height),we.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),we.pixelStorei(W.UNPACK_SKIP_ROWS,Ze),we.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);const si=w.isDataArrayTexture||w.isData3DTexture,zt=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const en=U.get(w),Li=U.get(Z),Nt=U.get(en.__renderTarget),Vi=U.get(Li.__renderTarget);we.bindFramebuffer(W.READ_FRAMEBUFFER,Nt.__webglFramebuffer),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let za=0;za<Xe;za++)si&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,U.get(w).__webglTexture,ae,lt+za),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,U.get(Z).__webglTexture,Be,$t+za)),W.blitFramebuffer(ke,Ze,Ve,ze,Ye,wt,Ve,ze,W.DEPTH_BUFFER_BIT,W.NEAREST);we.bindFramebuffer(W.READ_FRAMEBUFFER,null),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ae!==0||w.isRenderTargetTexture||U.has(w)){const en=U.get(w),Li=U.get(Z);we.bindFramebuffer(W.READ_FRAMEBUFFER,hn),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,vl);for(let Nt=0;Nt<Xe;Nt++)si?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,en.__webglTexture,ae,lt+Nt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,en.__webglTexture,ae),zt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Li.__webglTexture,Be,$t+Nt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Li.__webglTexture,Be),ae!==0?W.blitFramebuffer(ke,Ze,Ve,ze,Ye,wt,Ve,ze,W.COLOR_BUFFER_BIT,W.NEAREST):zt?W.copyTexSubImage3D(Ge,Be,Ye,wt,$t+Nt,ke,Ze,Ve,ze):W.copyTexSubImage2D(Ge,Be,Ye,wt,ke,Ze,Ve,ze);we.bindFramebuffer(W.READ_FRAMEBUFFER,null),we.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else zt?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Ge,Be,Ye,wt,$t,Ve,ze,Xe,Ot,Pt,Wt.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,Be,Ye,wt,$t,Ve,ze,Xe,Ot,Wt.data):W.texSubImage3D(Ge,Be,Ye,wt,$t,Ve,ze,Xe,Ot,Pt,Wt):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Be,Ye,wt,Ve,ze,Ot,Pt,Wt.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Be,Ye,wt,Wt.width,Wt.height,Ot,Wt.data):W.texSubImage2D(W.TEXTURE_2D,Be,Ye,wt,Ve,ze,Ot,Pt,Wt);we.pixelStorei(W.UNPACK_ROW_LENGTH,Bn),we.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),we.pixelStorei(W.UNPACK_SKIP_PIXELS,xn),we.pixelStorei(W.UNPACK_SKIP_ROWS,ai),we.pixelStorei(W.UNPACK_SKIP_IMAGES,Ni),Be===0&&Z.generateMipmaps&&W.generateMipmap(Ge),we.unbindTexture()},this.initRenderTarget=function(w){U.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){ue=0,me=0,Y=null,we.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const du={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ml{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const C2=new Np(-1,1,1,-1,0,1);class R2 extends zn{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const D2=new R2;class Sx{constructor(e){this._mesh=new _i(D2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,C2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class U2 extends ml{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$r.clone(e.uniforms),this.material=new Pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sx(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class C_ extends ml{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,h;this.inverse?(f=0,h=1):(f=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class N2 extends ml{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class L2{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new nt);this._width=s.width,this._height=s.height,i=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new U2(du),this.copyPass.material.blending=ta,this.timer=new Ab}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),f.needsSwap){if(s){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}C_!==void 0&&(f instanceof C_?s=!0:f instanceof N2&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class O2 extends ml{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new St}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=l}}const P2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class eo extends ml{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new nt(e.x,e.y):new nt(256,256),this.clearColor=new St(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(c,f,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const _=new ni(c,f,{type:vi});_.texture.name="UnrealBloomPass.h"+v,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const g=new ni(c,f,{type:vi});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),f=Math.round(f/2)}const h=P2;this.highPassUniforms=$r.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new nt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$r.clone(du.uniforms),this.blendMaterial=new Pn({uniforms:this.copyUniforms,vertexShader:du.vertexShader,fragmentShader:du.fragmentShader,premultipliedAlpha:!0,blending:Sh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new St,this._oldClearAlpha=1,this._basic=new yu,this._fsQuad=new Sx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new nt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=eo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=eo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=f}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}eo.BlurDirectionX=new nt(1,0);eo.BlurDirectionY=new nt(0,1);const R_=new vs,nu=new j;class yx extends bb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new dn(e,3)),this.setAttribute("uv",new dn(i,2))}applyMatrix4(e){const i=this.attributes.instanceStart,s=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(e),s.applyMatrix4(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const s=new dp(i,6,1);return this.setAttribute("instanceStart",new hs(s,3,0)),this.setAttribute("instanceEnd",new hs(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const s=new dp(i,6,1);return this.setAttribute("instanceColorStart",new hs(s,3,0)),this.setAttribute("instanceColorEnd",new hs(s,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new db(e.geometry)),this}fromLineSegments(e){const i=e.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;e!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(e),R_.setFromBufferAttribute(i),this.boundingBox.union(R_))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(e!==void 0&&i!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)nu.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(nu)),nu.fromBufferAttribute(i,c),l=Math.max(l,s.distanceToSquared(nu));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ie.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new nt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ei.line={uniforms:$r.merge([Ie.common,Ie.fog,Ie.line]),vertexShader:`
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
		`};class Mx extends Pn{constructor(e){super({type:"LineMaterial",uniforms:$r.clone(ei.line.uniforms),vertexShader:ei.line.vertexShader,fragmentShader:ei.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const vh=new Yt,D_=new j,U_=new j,Un=new Yt,Nn=new Yt,Zi=new Yt,_h=new j,xh=new sn,Ln=new Ub,N_=new j,iu=new vs,au=new no,Ki=new Yt;let Ji,qs;function L_(r,e,i){return Ki.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),Ki.multiplyScalar(1/Ki.w),Ki.x=qs/i.width,Ki.y=qs/i.height,Ki.applyMatrix4(r.projectionMatrixInverse),Ki.multiplyScalar(1/Ki.w),Math.abs(Math.max(Ki.x,Ki.y))}function z2(r,e){const i=r.matrixWorld,s=r.geometry,l=s.attributes.instanceStart,c=s.attributes.instanceEnd,f=Math.min(s.instanceCount,l.count);for(let h=0,m=f;h<m;h++){Ln.start.fromBufferAttribute(l,h),Ln.end.fromBufferAttribute(c,h),Ln.applyMatrix4(i);const p=new j,v=new j;Ji.distanceSqToSegment(Ln.start,Ln.end,v,p),v.distanceTo(p)<qs*.5&&e.push({point:v,pointOnLine:p,distance:Ji.origin.distanceTo(v),object:r,face:null,faceIndex:h,uv:null,uv1:null})}}function I2(r,e,i){const s=e.projectionMatrix,c=r.material.resolution,f=r.matrixWorld,h=r.geometry,m=h.attributes.instanceStart,p=h.attributes.instanceEnd,v=Math.min(h.instanceCount,m.count),_=-e.near;Ji.at(1,Zi),Zi.w=1,Zi.applyMatrix4(e.matrixWorldInverse),Zi.applyMatrix4(s),Zi.multiplyScalar(1/Zi.w),Zi.x*=c.x/2,Zi.y*=c.y/2,Zi.z=0,_h.copy(Zi),xh.multiplyMatrices(e.matrixWorldInverse,f);for(let g=0,M=v;g<M;g++){if(Un.fromBufferAttribute(m,g),Nn.fromBufferAttribute(p,g),Un.w=1,Nn.w=1,Un.applyMatrix4(xh),Nn.applyMatrix4(xh),Un.z>_&&Nn.z>_)continue;if(Un.z>_){const D=Un.z-Nn.z,N=(Un.z-_)/D;Un.lerp(Nn,N)}else if(Nn.z>_){const D=Nn.z-Un.z,N=(Nn.z-_)/D;Nn.lerp(Un,N)}Un.applyMatrix4(s),Nn.applyMatrix4(s),Un.multiplyScalar(1/Un.w),Nn.multiplyScalar(1/Nn.w),Un.x*=c.x/2,Un.y*=c.y/2,Nn.x*=c.x/2,Nn.y*=c.y/2,Ln.start.copy(Un),Ln.start.z=0,Ln.end.copy(Nn),Ln.end.z=0;const R=Ln.closestPointToPointParameter(_h,!0);Ln.at(R,N_);const y=BM.lerp(Un.z,Nn.z,R),S=y>=-1&&y<=1,A=_h.distanceTo(N_)<qs*.5;if(S&&A){Ln.start.fromBufferAttribute(m,g),Ln.end.fromBufferAttribute(p,g),Ln.start.applyMatrix4(f),Ln.end.applyMatrix4(f);const D=new j,N=new j;Ji.distanceSqToSegment(Ln.start,Ln.end,N,D),i.push({point:N,pointOnLine:D,distance:Ji.origin.distanceTo(N),object:r,face:null,faceIndex:g,uv:null,uv1:null})}}}class B2 extends _i{constructor(e=new yx,i=new Mx({color:Math.random()*16777215})){super(e,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,i=e.attributes.instanceStart,s=e.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let f=0,h=0,m=i.count;f<m;f++,h+=2)D_.fromBufferAttribute(i,f),U_.fromBufferAttribute(s,f),l[h]=h===0?0:l[h-1],l[h+1]=l[h]+D_.distanceTo(U_);const c=new dp(l,2,1);return e.setAttribute("instanceDistanceStart",new hs(c,1,0)),e.setAttribute("instanceDistanceEnd",new hs(c,1,1)),this}raycast(e,i){const s=this.material.worldUnits,l=e.camera;l===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ji=e.ray;const f=this.matrixWorld,h=this.geometry,m=this.material;qs=m.linewidth+c,h.boundingSphere===null&&h.computeBoundingSphere(),au.copy(h.boundingSphere).applyMatrix4(f);let p;if(s)p=qs*.5;else{const _=Math.max(l.near,au.distanceToPoint(Ji.origin));p=L_(l,_,m.resolution)}if(au.radius+=p,Ji.intersectsSphere(au)===!1)return;h.boundingBox===null&&h.computeBoundingBox(),iu.copy(h.boundingBox).applyMatrix4(f);let v;if(s)v=qs*.5;else{const _=Math.max(l.near,iu.distanceToPoint(Ji.origin));v=L_(l,_,m.resolution)}iu.expandByScalar(v),Ji.intersectsBox(iu)!==!1&&(s?z2(this,i):I2(this,l,i))}onBeforeRender(e){const i=this.material.uniforms;i&&i.resolution&&(e.getViewport(vh),this.material.uniforms.resolution.value.set(vh.z,vh.w))}}const su=[{wireColor:16777215,wireOpacity:.85,linewidth:1.2,solidOpacity:0,solidColor:16777215,torusOpacity:0,bloom:.2,rotSpeed:.12,meshX:-2.4,meshY:.6},{wireColor:16777215,wireOpacity:.75,linewidth:1.8,solidOpacity:.22,solidColor:16777215,torusOpacity:0,bloom:.55,rotSpeed:.22,meshX:2.4,meshY:-.5},{wireColor:16777215,wireOpacity:.55,linewidth:3,solidOpacity:.68,solidColor:16777215,torusOpacity:.65,torusColor:16777215,bloom:1.1,rotSpeed:.38,meshX:0,meshY:0}];function Gs(r,e,i){return r+(e-r)*i}function F2({step:r}){const e=ot.useRef(null),i=ot.useRef({}),s=ot.useRef(r);return ot.useEffect(()=>{s.current=r},[r]),ot.useEffect(()=>{const l=e.current;if(!l)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=l.clientWidth,h=l.clientHeight,m=new w2({antialias:!0,alpha:!0});m.setSize(f,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(m.domElement);const p=new JM,v=new mi(55,f/h,.1,100);v.position.z=5.5,p.add(new Mb(16777215,.3));const _=new t_(13038158,4,30);_.position.set(6,6,6),p.add(_);const g=new t_(16734774,2,20);g.position.set(-6,-4,2),p.add(g);const M=new Dp(1.5,1),E=new fb(M),R=new yx().fromEdgesGeometry(E),y=new Mx({color:13038158,linewidth:1.2,transparent:!0,opacity:.85,resolution:new nt(f,h)}),S=new B2(R,y);S.position.set(-2.4,.6,0),p.add(S);const A=new vb({color:16777215,shininess:80,transparent:!0,opacity:0,depthWrite:!1,side:Qi}),D=new _i(M,A);D.renderOrder=1,S.renderOrder=2,p.add(D);const N=new Up(2.3,.022,8,80),V=new yu({color:16777215,transparent:!0,opacity:0}),L=new _i(N,V);L.rotation.x=Math.PI/4,p.add(L);const B=120,T=new Float32Array(B*3);for(let ee=0;ee<B;ee++)T[ee*3]=(Math.random()-.5)*22,T[ee*3+1]=(Math.random()-.5)*14,T[ee*3+2]=(Math.random()-.5)*8-3;const z=new zn;z.setAttribute("position",new Ui(T,3));const q=new rx({color:13038158,size:.045,transparent:!0,opacity:.35}),G=new cb(z,q);p.add(G);const Q=new L2(m);Q.addPass(new O2(p,v));const ue=new eo(new nt(f,h),.2,.4,.82);Q.addPass(ue),i.current={wireMesh:S,solidMesh:D,torus:L,wireMat:y,solidMat:A,torusMat:V,bloom:ue,composer:Q,renderer:m,particles:G};const me=new Cb;let Y;const P=()=>{Y=requestAnimationFrame(P);const ee=me.getElapsedTime(),he=s.current,Se=su[he]??su[0];if(!c){const I=Se.rotSpeed;S.rotation.x=ee*I*.7,S.rotation.y=ee*I,D.rotation.x=ee*I*.7,D.rotation.y=ee*I,L.rotation.z=ee*I*.45,G.rotation.y=ee*.025;const J=.028;S.position.x=Gs(S.position.x,Se.meshX,J),S.position.y=Gs(S.position.y,Se.meshY,J),D.position.x=S.position.x,D.position.y=S.position.y,L.position.x=S.position.x,L.position.y=S.position.y;const xe=.055;y.opacity=Gs(y.opacity,Se.wireOpacity,xe),y.linewidth=Gs(y.linewidth,Se.linewidth,xe),A.opacity=Gs(A.opacity,Se.solidOpacity,xe),V.opacity=Gs(V.opacity,Se.torusOpacity,xe),ue.strength=Gs(ue.strength,Se.bloom,xe)}Q.render()};P();const F=()=>{const ee=l.clientWidth,he=l.clientHeight;v.aspect=ee/he,v.updateProjectionMatrix(),m.setSize(ee,he),Q.setSize(ee,he),y.resolution.set(ee,he)};return window.addEventListener("resize",F),()=>{cancelAnimationFrame(Y),window.removeEventListener("resize",F),l.contains(m.domElement)&&l.removeChild(m.domElement),m.dispose()}},[]),ot.useEffect(()=>{const{wireMat:l,solidMat:c,torusMat:f}=i.current;if(!l)return;const h=su[r]??su[0];l.color.set(h.wireColor),c.color.setHex(h.solidColor),f&&h.torusColor!=null&&f.color.setHex(h.torusColor)},[r]),O.jsx("div",{ref:e,className:"craft-canvas"})}const H2={primary:"#C6F24E",secondary:"#2D1B69",tertiary:"#FF5A36",borderW:3,shadowOff:6,rot:2,displayWeight:900,dark:!0},G2={en:{nav:{work:"Work",clients:"Clients",stack:"Stack",experience:"Experience",approach:"Approach",contact:"Contact"},hero:{tag:"Available for new projects",title1:"Developer",title2:"building",title3:"seamless",title4:"UX.",sub:"Hi! I'm David — a multi-disciplinary developer and user-experience enthusiast based in Ecuador. I turn rough concepts into shippable, opinionated software.",cta1:"Show my work",cta2:"Email me",sticker:`Let's
build
something`,meta:[{k:"5+",v:"yrs shipping"},{k:"9+",v:"products live"},{k:"1",v:"springer paper"},{k:"EC",v:"based in Ecuador"}]},work:{label:"/ 02 — selected work",title:"A small selection of recent projects.",desc:"From enterprise AI systems to learning platforms — here's what I've been shipping.",filters:["All","AI","LMS","CRM","Web","Paper"]},testimonials:{label:"/ 03 — kind words",title:"Kind words from satisfied clients.",desc:"A few notes from the people I've collaborated with over the years."},stack:{label:"Tools of the trade"},experience:{label:"/ 05 — experience",title:"My work experience.",desc:"Where I've been, what I shipped, what I learned."},approach:{label:"/ 06 — how I work",title:"My approach.",desc:"A transparent, three-phase process from first Zoom to launch day."},scrolly:{label:"/ 04 — how I build",title:"One developer. Every layer.",desc:"Design, code, automation, infra — the same person owns all of it. Here's the process, step by step."},craft:{label:"/ 07 — the craft",title:"Code is just the surface.",desc:"Spirit, mind, body — three pillars I train every day. Each one feeds the others. The code is just where it shows."},contact:{label:"/ 08 — get in touch",title1:"Let's build",title2:"something",title3:"loud.",sub:"Got a project in mind? Drop a line. I reply within 24 hours, usually with a tough question and a lofi recommendation.",emailLabel:"Email",telLabel:"Phone",copyHint:"Click to copy",copied:"Copied!",foot:"Built with React, CSS, and stubborn attention to detail."}},es:{nav:{work:"Proyectos",clients:"Clientes",stack:"Stack",experience:"Experiencia",approach:"Proceso",contact:"Contacto"},hero:{tag:"Disponible para nuevos proyectos",title1:"Developer",title2:"creando",title3:"experiencias",title4:"únicas.",sub:"¡Hola! Soy David — desarrollador multidisciplinario y entusiasta de la experiencia de usuario, radicado en Ecuador. Convierto conceptos difusos en software funcional y con carácter.",cta1:"Ver proyectos",cta2:"Escríbeme",sticker:`Hagamos
algo
juntos`,meta:[{k:"5+",v:"años desarrollando"},{k:"9+",v:"productos en vivo"},{k:"1",v:"paper springer"},{k:"EC",v:"desde Ecuador"}]},work:{label:"/ 02 — proyectos seleccionados",title:"Una selección de proyectos recientes.",desc:"Desde sistemas IA empresariales hasta plataformas de aprendizaje.",filters:["Todos","IA","LMS","CRM","Web","Paper"]},testimonials:{label:"/ 03 — testimonios",title:"Palabras amables de clientes satisfechos.",desc:"Algunas notas de las personas con las que he colaborado."},stack:{label:"Herramientas"},experience:{label:"/ 05 — experiencia",title:"Mi experiencia laboral.",desc:"Dónde he estado, qué envié, qué aprendí."},approach:{label:"/ 06 — cómo trabajo",title:"Mi proceso.",desc:"Un proceso transparente en tres fases, desde la primera llamada al lanzamiento."},scrolly:{label:"/ 04 — cómo construyo",title:"Un desarrollador. Todas las capas.",desc:"Diseño, código, automatización, infra — la misma persona lo dueña todo. Así es el proceso."},craft:{label:"/ 07 — el oficio",title:"El código es solo la superficie.",desc:"Espíritu, mente y cuerpo — tres pilares que entreno cada día. Cada uno alimenta a los demás. El código es solo donde se nota."},contact:{label:"/ 08 — contáctame",title1:"Hagamos",title2:"algo",title3:"fuerte.",sub:"¿Tienes un proyecto en mente? Escríbeme. Respondo en menos de 24 horas, generalmente con una pregunta difícil y una recomendación de lofi.",emailLabel:"Correo",telLabel:"Teléfono",copyHint:"Click para copiar",copied:"¡Copiado!",foot:"Hecho con React, CSS y atención obsesiva al detalle."}}},O_=[{id:1,title:"Benefit Match Center",cat:"Web",desc:{en:"Section 125 benefits platform — React 19 SPA on AWS S3+CloudFront, two serverless Lambda functions for form handling and a streaming AI chat widget, with Resend email delivery.",es:"Plataforma de beneficios Section 125 — SPA React 19 en AWS S3+CloudFront, dos funciones Lambda serverless para formularios y chat IA en streaming, con entrega de email vía Resend."},tech:["React 19","AWS Lambda","SST","CloudFront","Claude API"],color:"#0F1A2E",textColor:"#C49B3C",link:"https://benefitmatchcenter.com/"},{id:2,title:"UMI — Unified Meeting Intel",cat:"AI",desc:{en:"Multi-platform meeting integration for Google Meet, Zoom, and Teams — transcription analysis, third-party transcript uploads, AI chat flows, and real-time statistics.",es:"Integración de reuniones multi-plataforma (Meet, Zoom, Teams) con análisis de transcripciones, carga de transcripts externos, flujos de chat IA y estadísticas en tiempo real."},tech:["NestJS","Next.js","AWS Lambda","OpenAI","PostgreSQL"],color:"#2D1B69",textColor:"#ffffff",link:"#"},{id:3,title:"Commission Tracker (CT)",cat:"AI",desc:{en:"Serverless analyzer for 52 companies with dynamic prompts, PDF OCR, and queue-based flows for commission data validation. Deployed on AWS Lambda with GitHub Actions CI/CD.",es:"Analizador serverless para 52 empresas con prompts dinámicos, OCR de PDF y flujos de cola para validación de comisiones. Desplegado en AWS Lambda con CI/CD en GitHub Actions."},tech:["AWS Lambda","OpenAI","OCR","GitHub Actions","Node.js"],color:"#FF5A36",textColor:"#ffffff",link:"#"},{id:4,title:"N8N Relatividad IA",cat:"AI",desc:{en:"Multiple self-hosted N8N chatbots, one per customer — orchestrating LLM conversations with isolated pipelines and guardrails.",es:"N8N multi-cliente auto-hospedado con chatbots aislados por cliente que orquestan conversaciones LLM."},tech:["N8N","Docker","LangChain","Evolution API"],color:"#2D1B69",textColor:"#ffffff",link:"#"},{id:5,title:"Atiende — CRM WhatsApp",cat:"CRM",desc:{en:"WhatsApp ticketing CRM wired into N8N automations — full customer lifecycle from first message to resolution.",es:"CRM de tickets WhatsApp conectado a N8N — ciclo completo del cliente desde el primer mensaje hasta la resolución."},tech:["Next.js","N8N","Appwrite","WhatsApp API"],color:"#C6F24E",textColor:"#111111",link:"#"},{id:6,title:"Qubex LLM",cat:"AI",desc:{en:"A cutting-edge assistant exposing large language models through a polished chat UI.",es:"Asistente de punta que expone LLMs a través de una UI de chat pulida."},tech:["Next.js","React","OpenAI","Vercel"],color:"#FF5A36",textColor:"#ffffff",link:"https://qubex-global.vercel.app/"},{id:7,title:"Fenix Conocimiento",cat:"LMS",desc:{en:"Learning management system for Fenix's internal knowledge base — custom theme, course catalog, and ChatBot LLM integration.",es:"LMS para la base de conocimiento interna de Fenix — tema personalizado, catálogo de cursos e integración ChatBot LLM."},tech:["Moodle","PHP","MySQL","Grafana"],color:"#F5F3EC",textColor:"#111111",link:"https://conocimiento.mysistemafenix.com"},{id:8,title:"Taurhus Capacitaciones",cat:"LMS",desc:{en:"Full LMS for online courses with custom theme, enrollment flows, certificates, and Laravel Mix Vue.js integrations.",es:"LMS completo para cursos en línea con tema personalizado, flujos de matrícula, certificados e integraciones Laravel Mix Vue.js."},tech:["Moodle","Laravel","Vue.js","MySQL","PHP"],color:"#2D1B69",textColor:"#ffffff",link:"https://taurhus.com.ec"},{id:9,title:"Shooting Range Simulator",cat:"Paper",desc:{en:"Real-time shooting simulator with body tracking — Unity 3D, Kinect 2, OpenCV, and ESP32 hardware integration. Published at BICA 2023 (Springer, Volume 1130).",es:"Simulador de tiro en tiempo real con rastreo corporal — Unity 3D, Kinect 2, OpenCV e integración ESP32. Publicado en BICA 2023 (Springer, Volumen 1130)."},tech:["Unity","OpenCV","Kinect 2","ESP32","Python"],color:"#111111",textColor:"#C6F24E",link:"https://doi.org/10.1007/978-3-031-50381-8_99"}],jr=[{img:"/jorge.jpg",initials:"JA",name:"Jorge Anchatuña",role:"CEO, Fenix Corp",quote:{en:"Collaborating with David was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Together we innovated in enterprise AI systems and knowledge platforms, where his expertise truly shone.",es:"Colaborar con David fue un placer absoluto. Su profesionalismo, puntualidad y dedicación a resultados excepcionales fueron evidentes durante todo el proyecto. Juntos innovamos en sistemas IA empresariales y plataformas de conocimiento."}},{img:"/wendy.jpeg",initials:"WE",name:"Wendy Espósito",role:"CEO, Taurhus Capacitaciones",quote:{en:"Working with David has been an enriching experience. His expertise in full-stack development, coupled with his commitment to meeting deadlines and exceeding expectations, truly set him apart. He was instrumental in building a Learning Management System with Moodle.",es:"Trabajar con David ha sido una experiencia enriquecedora. Su experiencia en full-stack y su compromiso con las fechas lo distinguen. Fue fundamental construyendo un LMS con Moodle."}},{img:"/maritza.png",initials:"MA",name:"Maritza Andrade",role:"Project Manager, Innovar Digital",quote:{en:"David is an exceptional developer and educator with a unique ability to turn ideas into reality. While working at Algoritmics, we taught programming to kids, creating a positive and engaging learning environment. His creativity and technical expertise make him an incredible asset.",es:"David es un desarrollador y educador excepcional con la habilidad única de convertir ideas en realidad. En Algoritmics enseñamos programación a niños creando un ambiente positivo. Su creatividad lo hacen un activo increíble."}},{img:"/shaine.jpeg",initials:"SR",name:"Shaine Rucker",role:"Pinecrest Consulting",quote:{en:"David doesn't wait to be told what to build — he reads the requirements, proposes the architecture, and ships it. He took our product from a set of specs to a live AWS deployment faster than any developer I've worked with. The kind of engineer who owns the whole thing end to end.",es:"David no espera que le digan qué construir — lee los requisitos, propone la arquitectura y lo lanza. Llevó nuestro producto de unas especificaciones a un despliegue en vivo en AWS más rápido que cualquier desarrollador con el que haya trabajado. El tipo de ingeniero que dueña todo de punta a punta."}},{img:"/eli.jpeg",initials:"ET",name:"Eli Tabala",role:"Pinecrest Consulting",quote:{en:"What sets David apart is that he thinks like a product owner and executes like an engineer. Frontend, backend, infrastructure, automations — he handled all of it without ever needing to split the work. Reliable, fast, and genuinely invested in the outcome.",es:"Lo que distingue a David es que piensa como dueño de producto y ejecuta como ingeniero. Frontend, backend, infraestructura, automatizaciones — lo manejó todo sin necesidad de dividir el trabajo. Confiable, rápido y genuinamente comprometido con el resultado."}},{img:"/emilio.jpg",initials:"ER",name:"Emilio Rosado",role:"CEO, Relatividad IA",quote:{en:"David automated processes at Relatividad IA that we thought would require a full team. In weeks he had N8N workflows handling WhatsApp conversations, classifying leads, and routing support tickets — completely hands-off. The system he built became the backbone of our entire operation.",es:"David automatizó procesos en Relatividad IA que pensábamos requerirían un equipo completo. En semanas tenía workflows de N8N manejando conversaciones de WhatsApp, clasificando leads y enrutando tickets — completamente autónomo. El sistema que construyó se convirtió en la columna vertebral de nuestra operación."}}],P_=["AWS Lambda","Docker","GitHub Actions","Next.js","React","Node.js","NestJS","N8N","LangChain","OpenAI","PostgreSQL","Qdrant","MongoDB","Unity","Cursor","Moodle"],V2=[{badge:"PC",title:{en:"Full Stack Developer",es:"Desarrollador Full Stack"},where:"Pinecrest Consulting",location:"United States",period:"Sept. 2025 — Present",desc:{en:"Built CT (Commission Tracker) and UMI (Unified Meeting Integrated) as serverless solutions on AWS Lambda with GitHub Actions CI/CD. CT analyzes 52 companies using dynamic prompts, OCR, and queue-based flows. UMI integrates Meet, Zoom, and Teams with AI transcription and chat. Also implemented automated social media post scheduling via Metricool API.",es:"Desarrollé CT (Commission Tracker) y UMI (Unified Meeting Integrated) como soluciones serverless en AWS Lambda con CI/CD en GitHub Actions. CT analiza 52 empresas con prompts dinámicos, OCR y flujos de cola. UMI integra Meet, Zoom y Teams con transcripción IA y chat. Implementé también publicación automática de redes sociales vía Metricool API."}},{badge:"D2",title:{en:"AI / Web Bot Developer",es:"Desarrollador AI / Web Bot"},where:"D2V",location:"Germany",period:"Aug. 2025 — Oct. 2025",desc:{en:"RAG Voice Chat, Notion–Mistral automations, Oura Ring API integrations, and custom AI tooling. Projects handled under strict NDA.",es:"RAG Voice Chat, automatizaciones Notion–Mistral, integraciones con Oura Ring API y tooling IA personalizado. Proyectos bajo estricta NDA."}},{badge:"RI",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Relatividad IA",location:"Quito, Ecuador",period:"Dec. 2024 — Aug. 2025",desc:{en:"Developed a Logistic Tracker SaaS and WhatsApp CRM platform — N8N orchestration, Evolution API, AWS ECS deployment, and multi-tenant architecture.",es:"Desarrollé un SaaS de rastreo logístico y plataforma CRM WhatsApp — orquestación N8N, Evolution API, despliegue en AWS ECS y arquitectura multi-tenant."}},{badge:"FC",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Fenix Corp",location:"Latacunga, Ecuador",period:"May 2024 — Dec. 2024",desc:{en:"Deployed a ChatBot LLM system, Grafana monitoring dashboards, Apache Guacamole remote access, and Moodle LMS for internal knowledge management.",es:"Desplegué un sistema ChatBot LLM, dashboards de monitoreo en Grafana, acceso remoto con Apache Guacamole y Moodle para gestión del conocimiento interno."}},{badge:"AL",title:{en:"Programming Instructor",es:"Instructor de Programación"},where:"Algorithmics International School",location:"Latacunga, Ecuador",period:"Sept. 2023 — Oct. 2024",desc:{en:"Taught Python, visual programming, and game design to children and teens — building structured curricula and fostering computational thinking in a bilingual environment.",es:"Enseñé Python, programación visual y diseño de videojuegos a niños y adolescentes — diseñando currículos estructurados y fomentando el pensamiento computacional en un entorno bilingüe."}},{badge:"TC",title:{en:"Full Stack / DevOps Developer",es:"Desarrollador Full Stack / DevOps"},where:"Taurhus Capacitaciones",location:"Illuchi, Ecuador",period:"Apr. 2023 — May 2024",desc:{en:"Built and deployed a Moodle-based LMS with Laravel Mix Vue.js integrations, custom enrollment flows, certificates, and API connectors for course management.",es:"Construí y desplegué un LMS basado en Moodle con integraciones Laravel Mix Vue.js, flujos de matrícula personalizados, certificados y conectores API."}},{badge:"ES",title:{en:"Game Engine / AI Developer",es:"Desarrollador Game Engine / IA"},where:"ESPE · Taurhus Capacitaciones",location:"Belisario Quevedo, Ecuador",period:"Aug. 2021 — Apr. 2023",desc:{en:"Designed and built a real-time shooting range simulator using Unity, OpenCV body tracking, Kinect 2, and ESP32 hardware. Research published at BICA 2023 (Springer, Volume 1130).",es:"Diseñé y construí un simulador de polígono de tiro en tiempo real con Unity, rastreo corporal OpenCV, Kinect 2 y hardware ESP32. Investigación publicada en BICA 2023 (Springer, Volumen 1130)."}}],k2=[{label:"Phase 01",labelEs:"Fase 01",title:{en:"Planning & Strategy",es:"Planeación y Estrategia"},desc:{en:"We map out your site's goals, target audience, and key functionality — structure, navigation, content. No surprises.",es:"Mapeamos juntos los objetivos, la audiencia y la funcionalidad clave — estructura, navegación, contenido. Sin sorpresas."}},{label:"Phase 02",labelEs:"Fase 02",title:{en:"Design & Prototype",es:"Diseño y Prototipo"},desc:{en:"I cue my lofi playlist and dive in. From initial sketches to polished components, you see progress every step.",es:"Pongo mi playlist de lofi y me sumerjo. Desde bocetos iniciales hasta componentes pulidos, ves el avance paso a paso."}},{label:"Phase 03",labelEs:"Fase 03",title:{en:"Development & Launch",es:"Desarrollo y Lanzamiento"},desc:{en:"Approved design becomes functional code. I build, test, deploy, and hand off with documentation.",es:"El diseño aprobado se vuelve código funcional. Construyo, pruebo, despliego y entrego con documentación."}}],z_=[{num:"01",title:{en:"Read the brief, own the problem",es:"Lee el brief, dueña el problema"},body:{en:"No PM in the middle. I read the requirements, map the data model, identify edge cases, and propose the stack — before writing a single line.",es:"Sin PM de por medio. Leo los requisitos, mapeo el modelo de datos, identifico casos borde y propongo el stack — antes de escribir una línea."},stat:{en:"3–5 days · discovery",es:"3–5 días · discovery"},project:{en:"↳ BMC — The client delivered a structured requirements doc covering Section 125 benefits logic, the chat widget flow, and the email capture form. I read it, modeled the data, proposed the stack (React + Lambda + SST), and started building the same week.",es:"↳ BMC — El cliente entregó un documento estructurado con la lógica de beneficios Section 125, el flujo del chat widget y el formulario de captura. Lo leí, modelé los datos, propuse el stack (React + Lambda + SST) y empecé a construir esa misma semana."}},{num:"02",title:{en:"Design, build, wire — in parallel",es:"Diseña, construye, conecta — en paralelo"},body:{en:"UI, backend, and API contracts move at the same time. Components are built as the system takes shape — no hand-off, no waiting for approvals.",es:"UI, backend y contratos de API avanzan al mismo tiempo. Los componentes se construyen a medida que el sistema toma forma — sin handoffs ni esperas."},stat:{en:"2–4 weeks · build",es:"2–4 semanas · construcción"},project:{en:"↳ UMI — Next.js frontend, NestJS backend, PostgreSQL, S3, and OpenAI all built in the same sprint. The recording upload UI, the transcription pipeline, and the AI chat interface shipped together — no layer waited for another.",es:"↳ UMI — Frontend en Next.js, backend en NestJS, PostgreSQL, S3 y OpenAI construidos en el mismo sprint. La UI de carga, el pipeline de transcripción y el chat IA salieron juntos — ninguna capa esperó a otra."}},{num:"03",title:{en:"Automate what repeats",es:"Automatiza lo que se repite"},body:{en:"Any manual step that runs more than once gets automated. N8N workflows, AI agents, OCR pipelines, webhooks — if a human is doing it on a schedule, a machine should do it instead.",es:"Cualquier paso manual que se repita más de una vez se automatiza. N8N, agentes IA, pipelines OCR, webhooks — si un humano lo hace con regularidad, una máquina debería hacerlo."},stat:{en:"−80% manual tasks",es:"−80% tareas manuales"},project:{en:"↳ Relatividad IA + CT — At Relatividad IA, N8N workflows replaced a support team's daily repetition: WhatsApp messages classified, routed, and resolved automatically. At CT, PDF commission reports flow through Tesseract OCR → OpenAI normalization → GitHub Actions — what took hours now takes seconds.",es:"↳ Relatividad IA + CT — En Relatividad IA, workflows de N8N reemplazaron la repetición diaria del equipo de soporte: mensajes de WhatsApp clasificados, enrutados y resueltos automáticamente. En CT, los reportes PDF de comisiones pasan por OCR → OpenAI → GitHub Actions — lo que tardaba horas ahora tarda segundos."}},{num:"04",title:{en:"Deploy it. Own it.",es:"Despliégalo. Dueñalo."},body:{en:"The same person who designed and built it ships it to production. SST, GitHub Actions, AWS Lambda — one command, zero downtime, no handoff to a DevOps team.",es:"La misma persona que diseñó y construyó lo despliega a producción. SST, GitHub Actions, AWS Lambda — un comando, cero downtime, sin pasarle el testigo a nadie."},stat:{en:"Live · zero downtime",es:"En vivo · cero downtime"},project:{en:"↳ UMI + BMC — Both run on AWS Lambda via SST v4. One `sst deploy` ships the full stack: API, frontend, database migrations, scheduled jobs. GitHub Actions handles CI. The developer who built it monitors it and fixes it — no tickets, no handoffs.",es:"↳ UMI + BMC — Ambos corren en AWS Lambda con SST v4. Un `sst deploy` lanza todo el stack: API, frontend, migraciones, jobs. GitHub Actions maneja el CI. El mismo desarrollador que lo construyó lo monitorea y lo arregla — sin tickets, sin pasos de mano."}}],rl=[{num:"01",title:{en:"Body — Built for the finish line",es:"Cuerpo — Hecho para la meta"},body:{en:"Triathlon training — swim, bike, run — works the same loop as coding: push hard, recover right, go again. The discipline that gets you to the finish line is the same one that ships clean software.",es:"El triatlón — nada, bici, carrera — corre con el mismo ciclo que el código: empujar fuerte, recuperarse bien, volver. La disciplina que te lleva a la meta es la misma que te lleva al deploy."},stat:{en:"Swim · Bike · Run",es:"Nada · Bici · Carrera"},photo:{type:"embed",permalink:"https://www.instagram.com/p/DWNJlxEjm_3/",pos:"photo-tr"}},{num:"02",title:{en:"Mind — Trained by the craft",es:"Mente — Entrenada por el oficio"},body:{en:"Every hard project is a mental rep. Deep study, hard problems, deliberate practice. Systems thinking and clean architecture aren't talent — they're trained, same as any muscle.",es:"Cada proyecto difícil es una repetición mental. Estudio profundo, problemas duros, práctica deliberada. El pensamiento sistémico y la arquitectura limpia no son talento — se entrenan, como cualquier músculo."},stat:{en:"Study · Build · Reflect",es:"Estudia · Construye · Reflexiona"},photo:{type:"embed",permalink:"https://www.instagram.com/reel/DKuQIPAMqzG/",pos:"photo-bl"}},{num:"03",title:{en:"Spirit — Son of God",es:"Espíritu — Hijo de Dios"},body:{en:"I start every morning knowing who I am. Faith isn't separate from the work — it's what keeps me grounded under deadlines and building from purpose, not pressure.",es:"Comienzo cada mañana sabiendo quién soy. La fe no está separada del trabajo — es lo que me mantiene firme bajo los plazos y que me hace construir desde el propósito, no desde el miedo."},stat:{en:"Faith · Purpose · Peace",es:"Fe · Propósito · Paz"},photo:{type:"embed",permalink:"https://www.instagram.com/p/DJ_FTzWt34-/",pos:"photo-br-adj"}}];function X2(){ot.useEffect(()=>{const r=document.querySelectorAll(".reveal"),e=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),e.unobserve(s.target))})},{threshold:.12});return r.forEach(i=>e.observe(i)),()=>e.disconnect()},[])}function j2({text:r,containerRef:e}){const i=ot.useRef(null);return ot.useEffect(()=>{const s=i.current,l=e.current;if(!s||!l)return;let c=0,f=0,h=0,m=0,p;const v=g=>{const M=l.getBoundingClientRect();h=g.clientX-M.left,m=g.clientY-M.top},_=()=>{c+=(h-c)*.08,f+=(m-f)*.08,s&&(s.style.left=c+"px"),s&&(s.style.top=f+"px"),p=requestAnimationFrame(_)};return l.addEventListener("mousemove",v),h=l.offsetWidth*.78,m=180,_(),()=>{l.removeEventListener("mousemove",v),cancelAnimationFrame(p)}},[e]),O.jsx("div",{ref:i,className:"hero-sticker",children:r.split(`
`).map((s,l)=>O.jsx("div",{children:s},l))})}function W2({lang:r,setLang:e,t:i,theme:s,setTheme:l}){return O.jsxs("nav",{className:"nav",children:[O.jsxs("a",{href:"#top",className:"nav-logo",children:[O.jsx("span",{className:"nav-logo-mark",children:"D"}),O.jsxs("span",{className:"nav-logo-text",children:["David",O.jsx("span",{className:"nav-logo-dot",children:".dev"})]})]}),O.jsxs("div",{className:"nav-links",children:[O.jsx("a",{href:"#work",className:"nav-link",children:i.nav.work}),O.jsx("a",{href:"#scrolly",className:"nav-link",children:"Case"}),O.jsx("a",{href:"#clients",className:"nav-link",children:i.nav.clients}),O.jsx("a",{href:"#stack",className:"nav-link",children:i.nav.stack}),O.jsx("a",{href:"#experience",className:"nav-link",children:i.nav.experience}),O.jsx("a",{href:"#approach",className:"nav-link",children:i.nav.approach}),O.jsx("a",{href:"#contact",className:"nav-link",children:i.nav.contact})]}),O.jsxs("div",{className:"nav-actions",children:[O.jsx("button",{className:"nb-pill",onClick:()=>l(s==="dark"?"light":"dark"),style:{cursor:"pointer",background:"var(--primary)",color:"var(--on-primary)"},title:"Toggle theme",children:s==="dark"?"☾":"☀"}),O.jsxs("div",{className:"lang-toggle",children:[O.jsx("button",{className:r==="en"?"active":"",onClick:()=>e("en"),children:"EN"}),O.jsx("button",{className:r==="es"?"active":"",onClick:()=>e("es"),children:"ES"})]})]})]})}function q2({t:r}){const e=ot.useRef(null);return O.jsxs("section",{id:"top",className:"hero wrap",ref:e,children:[O.jsx("div",{className:"hero-scribble",children:O.jsx("img",{src:"/david.JPG",alt:"David",className:"hero-photo"})}),O.jsx("div",{className:"hero-scribble-2"}),O.jsx(j2,{text:r.hero.sticker,containerRef:e}),O.jsxs("div",{className:"hero-content",children:[O.jsxs("div",{className:"hero-tag",children:[O.jsx("span",{className:"hero-tag-dot"}),r.hero.tag]}),O.jsxs("h1",{className:"display hero-title",children:[r.hero.title1,O.jsx("br",{}),O.jsx("span",{className:"stroke",children:r.hero.title2})," ",O.jsx("span",{className:"violet",children:r.hero.title3}),O.jsx("br",{}),r.hero.title4]}),O.jsx("p",{className:"hero-sub",children:r.hero.sub}),O.jsxs("div",{className:"hero-actions",children:[O.jsxs("a",{href:"#work",className:"nb-btn",children:["→ ",r.hero.cta1]}),O.jsxs("a",{href:"#contact",className:"nb-btn secondary",children:["✉ ",r.hero.cta2]})]}),O.jsx("div",{className:"hero-meta",children:r.hero.meta.map((i,s)=>O.jsxs("div",{className:"hero-meta-cell",children:[O.jsx("div",{className:"k display",children:i.k}),O.jsx("div",{className:"v",children:i.v})]},s))})]})]})}function Y2({t:r,lang:e}){const i=e==="es"?"Todos":"All",[s,l]=ot.useState(i);ot.useEffect(()=>{l(e==="es"?"Todos":"All")},[e]);const c={All:"All",Todos:"All",AI:"AI",IA:"AI",LMS:"LMS",CRM:"CRM",Web:"Web",Paper:"Paper"},f=ot.useMemo(()=>{const h=c[s]||"All";return h==="All"?O_:O_.filter(m=>m.cat===h)},[s]);return ot.useEffect(()=>{let h;const m=requestAnimationFrame(()=>{const p=document.querySelectorAll(".project-row.reveal:not(.in)");p.length&&(h=new IntersectionObserver(v=>{v.forEach(_=>{_.isIntersecting&&(_.target.classList.add("in"),h.unobserve(_.target))})},{threshold:.05}),p.forEach(v=>h.observe(v)))});return()=>{cancelAnimationFrame(m),h==null||h.disconnect()}},[f]),O.jsx("section",{id:"work",className:"work",children:O.jsxs("div",{className:"wrap",children:[O.jsxs("div",{className:"sec-head reveal",children:[O.jsxs("div",{children:[O.jsx("div",{className:"section-label",children:r.work.label}),O.jsx("h2",{className:"display sec-title",children:r.work.title})]}),O.jsx("p",{className:"sec-desc",children:r.work.desc})]}),O.jsx("div",{className:"filter-bar reveal",children:r.work.filters.map(h=>O.jsx("button",{className:`filter-chip ${s===h?"active":""}`,onClick:()=>l(h),children:h},h))}),O.jsx("div",{children:f.map((h,m)=>O.jsxs("div",{className:"project-row reveal",style:{transitionDelay:`${m*60}ms`},children:[O.jsxs("div",{className:"project-num",children:["0",h.id]}),O.jsxs("div",{className:"project-main",children:[O.jsx("h3",{children:h.title}),O.jsx("p",{children:h.desc[e]}),O.jsx("div",{className:"project-tech",children:h.tech.map((p,v)=>O.jsx("span",{className:"nb-pill",children:p},v))})]}),O.jsx("div",{className:"project-visual",style:{background:h.color,color:h.textColor},children:O.jsx("span",{style:{position:"relative",zIndex:2},children:h.title})}),O.jsx("a",{href:h.link,target:"_blank",rel:"noopener noreferrer",className:"project-link","aria-label":`Open ${h.title}`,children:"↗"})]},h.id))})]})})}function Z2({t:r,lang:e}){const[i,s]=ot.useState(0);ot.useEffect(()=>{const f=setInterval(()=>s(h=>(h+1)%jr.length),8e3);return()=>clearInterval(f)},[]);const l=()=>s(f=>(f-1+jr.length)%jr.length),c=()=>s(f=>(f+1)%jr.length);return O.jsx("section",{id:"clients",className:"testimonials",children:O.jsxs("div",{className:"wrap",children:[O.jsxs("div",{className:"sec-head reveal",children:[O.jsxs("div",{children:[O.jsx("div",{className:"section-label",children:r.testimonials.label}),O.jsx("h2",{className:"display sec-title",children:r.testimonials.title})]}),O.jsx("p",{className:"sec-desc",children:r.testimonials.desc})]}),O.jsx("div",{className:"carousel reveal",children:O.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${i*100}%)`},children:jr.map((f,h)=>O.jsx("div",{className:"testimonial",children:O.jsxs("div",{className:"testimonial-card",children:[O.jsx("p",{className:"testimonial-quote",children:f.quote[e]}),O.jsxs("div",{className:"testimonial-person",children:[f.img?O.jsx("img",{src:f.img,alt:f.name,className:"testimonial-avatar testimonial-avatar-photo"}):O.jsx("div",{className:"testimonial-avatar",children:f.initials}),O.jsx("div",{className:"testimonial-name",children:f.name}),O.jsx("div",{className:"testimonial-role mono",children:f.role})]})]})},h))})}),O.jsxs("div",{className:"carousel-controls",children:[O.jsx("button",{className:"carousel-btn",onClick:l,"aria-label":"Previous",children:"←"}),O.jsx("button",{className:"carousel-btn",onClick:c,"aria-label":"Next",children:"→"}),O.jsx("div",{className:"carousel-dots",children:jr.map((f,h)=>O.jsx("button",{className:`carousel-dot ${h===i?"active":""}`,onClick:()=>s(h),"aria-label":`Go to ${h+1}`},h))})]})]})})}function K2(){const r=[...P_,...P_];return O.jsx("section",{id:"stack",className:"tech-strip",children:O.jsx("div",{className:"marquee",children:r.map((e,i)=>O.jsxs("div",{className:"marquee-item",children:[O.jsx("span",{className:"dot"}),e]},i))})})}function Q2({t:r,lang:e}){return O.jsx("section",{id:"experience",className:"experience",children:O.jsxs("div",{className:"wrap",children:[O.jsxs("div",{className:"sec-head reveal",children:[O.jsxs("div",{children:[O.jsx("div",{className:"section-label",children:r.experience.label}),O.jsx("h2",{className:"display sec-title",children:r.experience.title})]}),O.jsx("p",{className:"sec-desc",children:r.experience.desc})]}),O.jsx("div",{className:"exp-grid",children:V2.map((i,s)=>O.jsxs("div",{className:"exp-card reveal",style:{transitionDelay:`${s*80}ms`},children:[O.jsx("div",{className:"exp-badge",children:i.badge}),O.jsxs("div",{children:[O.jsx("h4",{children:i.title[e]}),O.jsxs("div",{className:"meta",children:[i.where,i.location?` · ${i.location}`:""," · ",i.period]}),O.jsx("p",{children:i.desc[e]})]})]},s))})]})})}function J2({t:r,lang:e}){return O.jsx("section",{id:"approach",className:"approach",children:O.jsxs("div",{className:"wrap",children:[O.jsxs("div",{className:"sec-head reveal",children:[O.jsxs("div",{children:[O.jsx("div",{className:"section-label",children:r.approach.label}),O.jsx("h2",{className:"display sec-title",children:r.approach.title})]}),O.jsx("p",{className:"sec-desc",children:r.approach.desc})]}),O.jsx("div",{className:"phases",children:k2.map((i,s)=>O.jsxs("div",{className:"phase reveal",style:{transitionDelay:`${s*100}ms`},children:[O.jsxs("div",{className:"phase-num",children:["0",s+1]}),O.jsx("div",{className:"phase-label mono",children:e==="es"?i.labelEs:i.label}),O.jsx("h4",{children:i.title[e]}),O.jsx("p",{children:i.desc[e]})]},s))})]})})}function $2({t:r,lang:e}){const[i,s]=ot.useState(0),[l,c]=ot.useState(0),f=ot.useRef(null),h=ot.useRef([]);return ot.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s(z_.length-1);return}const p=()=>window.innerWidth<=900,v=()=>p()?window.innerHeight*.73:window.innerHeight*.5,_=()=>p()?"-10% 0px -27% 0px":"-50% 0px -50% 0px",g=new IntersectionObserver(()=>{const R=v();let y={idx:-1,dist:1/0};h.current.forEach((S,A)=>{if(!S)return;const D=S.getBoundingClientRect(),N=D.top+D.height/2,V=Math.abs(N-R);V<y.dist&&(y={idx:A,dist:V})}),y.idx>=0&&s(y.idx)},{rootMargin:_(),threshold:0});h.current.forEach(R=>R&&g.observe(R));let M=!1;const E=()=>{M||(M=!0,requestAnimationFrame(()=>{const R=f.current;if(R){const y=R.getBoundingClientRect(),S=window.innerHeight,A=y.height-S,D=Math.max(0,Math.min(1,-y.top/A));c(D)}M=!1}))};return window.addEventListener("scroll",E,{passive:!0}),E(),()=>{g.disconnect(),window.removeEventListener("scroll",E)}},[]),O.jsx("section",{id:"scrolly",className:"scrolly",children:O.jsxs("div",{className:"wrap",children:[O.jsxs("div",{className:"scrolly-head sec-head reveal",children:[O.jsxs("div",{children:[O.jsx("div",{className:"section-label",children:r.scrolly.label}),O.jsx("h2",{className:"display sec-title",children:r.scrolly.title})]}),O.jsx("p",{className:"sec-desc",children:r.scrolly.desc})]}),O.jsxs("div",{className:"scrolly-stage",ref:f,children:[O.jsx("div",{className:"scrolly-text",children:z_.map((m,p)=>O.jsxs("div",{ref:v=>h.current[p]=v,className:`scrolly-step ${i===p?"active":""}`,children:[O.jsxs("div",{className:"step-num",children:[m.num," / 04"]}),O.jsx("h3",{children:m.title[e]}),O.jsx("p",{children:m.body[e]}),O.jsx("div",{className:"stat",children:m.stat[e]}),m.project&&O.jsx("div",{className:"step-project",children:m.project[e]})]},p))}),O.jsx("div",{className:"scrolly-sticky",children:O.jsxs("div",{className:`scrolly-viz s${i}`,children:[O.jsx("div",{className:"scrolly-progress",style:{transform:`scaleX(${l})`}}),O.jsx("div",{className:`layer ${i===0?"active":""}`,children:O.jsxs("div",{className:"layer-wire",children:[O.jsx("div",{className:"block"}),O.jsxs("div",{className:"block body",children:[O.jsx("div",{}),O.jsx("div",{}),O.jsx("div",{}),O.jsx("div",{})]}),O.jsx("div",{className:"block"})]})}),O.jsx("div",{className:`layer ${i===1?"active":""}`,children:O.jsxs("div",{className:"layer-chat",children:[O.jsx("div",{className:"bubble bot",children:"hola, soy el asistente"}),O.jsx("div",{className:"bubble user",children:"necesito mi factura"}),O.jsx("div",{className:"bubble bot",children:"claro, dame un segundo…"}),O.jsx("div",{className:"bubble bot typing"})]})}),O.jsx("div",{className:`layer ${i===2?"active":""}`,children:O.jsxs("div",{className:"layer-dash",children:[O.jsxs("div",{className:"stat-tile",children:[O.jsx("div",{className:"big",children:"94%"}),O.jsx("div",{className:"lbl",children:"resolved"})]}),O.jsxs("div",{className:"stat-tile",children:[O.jsx("div",{className:"big",children:"1.2s"}),O.jsx("div",{className:"lbl",children:"avg latency"})]}),O.jsxs("div",{className:"stat-tile",children:[O.jsx("div",{className:"big",children:"12k"}),O.jsx("div",{className:"lbl",children:"msgs / wk"})]}),O.jsxs("div",{className:"stat-tile",children:[O.jsx("div",{className:"big",children:"4.8★"}),O.jsx("div",{className:"lbl",children:"csat"})]})]})}),O.jsx("div",{className:`layer ${i===3?"active":""}`,children:O.jsxs("div",{className:"layer-launch",children:[O.jsx("div",{className:"rocket",children:"SHIPPED."}),O.jsx("div",{className:"tag",children:"Live · v1.0"})]})})]})})]})]})})}const ew=["card-bl","card-tr","card-br"];function tw(r){return`<blockquote class="instagram-media" data-instgrm-permalink="${r}" data-instgrm-version="14" style="background:#FFF;border:0;border-radius:0;box-shadow:none;margin:0;padding:0;width:100%;"><div style="padding:16px;"><a href="${r}" style="background:#FFFFFF;line-height:0;padding:0 0;text-align:center;text-decoration:none;width:100%;" target="_blank"><div style="display:flex;flex-direction:row;align-items:center;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:40px;margin-right:14px;width:40px;"></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:100px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:60px;"></div></div></div><div style="padding:19% 0;"></div><div style="display:block;height:50px;margin:0 auto 12px;width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top:8px;"><div style="color:#3897f0;font-family:Arial,sans-serif;font-size:14px;font-style:normal;font-weight:550;line-height:18px;">View this post on Instagram</div></div><div style="padding:12.5% 0;"></div><div style="display:flex;flex-direction:row;margin-bottom:14px;align-items:center;"><div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(0px) translateY(7px);"></div><div style="background-color:#F4F4F4;height:12.5px;transform:rotate(-45deg) translateX(3px) translateY(1px);width:12.5px;flex-grow:0;margin-right:14px;margin-left:2px;"></div><div style="background-color:#F4F4F4;border-radius:50%;height:12.5px;width:12.5px;transform:translateX(9px) translateY(-18px);"></div></div><div style="margin-left:8px;"><div style="background-color:#F4F4F4;border-radius:50%;flex-grow:0;height:20px;width:20px;"></div><div style="width:0;height:0;border-top:2px solid transparent;border-left:6px solid #f4f4f4;border-bottom:2px solid transparent;transform:translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left:auto;"><div style="width:0px;border-top:8px solid #F4F4F4;border-right:8px solid transparent;transform:translateY(16px);"></div><div style="background-color:#F4F4F4;flex-grow:0;height:12px;width:16px;transform:translateY(-4px);"></div><div style="width:0;height:0;border-top:8px solid #F4F4F4;border-left:8px solid transparent;transform:translateY(-4px) translateX(8px);"></div></div></div><div style="display:flex;flex-direction:column;flex-grow:1;justify-content:center;margin-bottom:24px;"><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;margin-bottom:6px;width:224px;"></div><div style="background-color:#F4F4F4;border-radius:4px;flex-grow:0;height:14px;width:144px;"></div></div></a></div></blockquote>`}function nw({permalink:r,posClass:e,visible:i}){return ot.useEffect(()=>{if(window.instgrm)window.instgrm.Embeds.process();else if(!document.getElementById("ig-embed-js")){const s=document.createElement("script");s.id="ig-embed-js",s.src="https://www.instagram.com/embed.js",s.async=!0,document.body.appendChild(s)}},[]),ot.useEffect(()=>{i&&window.instgrm&&window.instgrm.Embeds.process()},[i]),O.jsx("div",{className:`craft-insta ${e} ${i?"visible":""}`,dangerouslySetInnerHTML:{__html:tw(r)}})}function iw({t:r,lang:e}){const[i,s]=ot.useState(0),l=ot.useRef(null);return ot.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const f=()=>{const h=l.current;if(!h)return;const m=h.getBoundingClientRect(),p=Math.max(0,-m.top),v=h.offsetHeight-window.innerHeight,_=v>0?Math.min(1,p/v):0;s(Math.min(rl.length-1,Math.floor(_*rl.length)))};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]),O.jsxs("section",{id:"craft",className:"craft",children:[O.jsx("div",{className:"container",children:O.jsxs("div",{className:"craft-head sec-head reveal",children:[O.jsxs("div",{className:"sec-meta",children:[O.jsx("div",{className:"section-label",children:r.craft.label}),O.jsx("h2",{className:"display sec-title",children:r.craft.title})]}),O.jsx("p",{className:"sec-desc",children:r.craft.desc})]})}),O.jsx("div",{className:"craft-scroll-space",ref:l,children:O.jsxs("div",{className:"craft-sticky-full",children:[O.jsx(F2,{step:i}),rl.map((c,f)=>O.jsxs("div",{className:`craft-card ${ew[f]} ${i===f?"visible":""}`,children:[O.jsxs("div",{className:"craft-card-num",children:[c.num," / 03"]}),O.jsx("h3",{children:c.title[e]}),O.jsx("p",{children:c.body[e]}),O.jsx("div",{className:"craft-card-stat",children:c.stat[e]})]},f)),rl.map((c,f)=>c.photo?c.photo.type==="embed"?O.jsx(nw,{permalink:c.photo.permalink,posClass:c.photo.pos,visible:i===f},`photo-${f}`):O.jsx("div",{className:`craft-photo ${c.photo.pos} ${i===f?"visible":""}`,style:{"--photo-rot":c.photo.rot},children:O.jsx("img",{src:c.photo.src,alt:""})},`photo-${f}`):null),O.jsx("div",{className:"craft-steps-indicator",children:rl.map((c,f)=>O.jsx("div",{className:`craft-dot ${i===f?"active":""}`},f))})]})})]})}function aw({t:r,showToast:e}){const i="albert98.developer@gmail.com",s="+593 992 520 223",l=c=>{navigator.clipboard.writeText(c).then(()=>e(r.contact.copied))};return O.jsx("section",{id:"contact",className:"contact",children:O.jsxs("div",{className:"wrap",children:[O.jsx("div",{className:"section-label contact-label",children:r.contact.label}),O.jsxs("h2",{className:"display contact-title",children:[r.contact.title1,O.jsx("br",{}),O.jsx("span",{className:"accent",children:r.contact.title2})," ",r.contact.title3]}),O.jsx("p",{className:"contact-sub",children:r.contact.sub}),O.jsxs("div",{className:"contact-card",children:[O.jsxs("button",{className:"contact-field",onClick:()=>l(i),children:[O.jsxs("div",{children:[O.jsx("div",{className:"label",children:r.contact.emailLabel}),O.jsx("span",{className:"value",children:i})]}),O.jsxs("span",{className:"copy-hint",children:[r.contact.copyHint," ⎘"]})]}),O.jsxs("button",{className:"contact-field",onClick:()=>l(s),children:[O.jsxs("div",{children:[O.jsx("div",{className:"label",children:r.contact.telLabel}),O.jsx("span",{className:"value",children:s})]}),O.jsxs("span",{className:"copy-hint",children:[r.contact.copyHint," ⎘"]})]})]}),O.jsxs("div",{className:"socials",children:[O.jsx("a",{className:"social-chip",href:"https://github.com/DavidVique1998",target:"_blank",rel:"noreferrer",children:"GitHub ↗"}),O.jsx("a",{className:"social-chip",href:"https://www.linkedin.com/in/david-vique-b29941206",target:"_blank",rel:"noreferrer",children:"LinkedIn ↗"}),O.jsx("a",{className:"social-chip",href:"https://www.instagram.com/david_vique98/",target:"_blank",rel:"noreferrer",children:"Instagram ↗"})]}),O.jsxs("div",{className:"footer-bar",children:[O.jsx("div",{children:"© 2026 David — Ecuador 🇪🇨"}),O.jsx("div",{children:r.contact.foot})]})]})})}function sw(){const[r,e]=ot.useState("en"),[i,s]=ot.useState("light"),[l,c]=ot.useState({show:!1,msg:""}),f=G2[r];X2(),ot.useEffect(()=>{document.documentElement.setAttribute("data-theme",i)},[i]);const h=v=>{c({show:!0,msg:v}),setTimeout(()=>c({show:!1,msg:v}),1800)},[m,p]=zy(H2);return ot.useEffect(()=>{if(!m)return;const v=document.documentElement.style;v.setProperty("--primary",m.primary||"#C6F24E"),v.setProperty("--secondary",m.secondary||"#2D1B69"),v.setProperty("--tertiary",m.tertiary||"#FF5A36"),v.setProperty("--border-w",(m.borderW||3)+"px"),v.setProperty("--shadow-off",(m.shadowOff||6)+"px"),v.setProperty("--rot",(m.rot||2)+"deg"),v.setProperty("--display-weight",m.displayWeight||900),m.dark!==void 0&&s(m.dark?"dark":"light")},[m]),O.jsxs(O.Fragment,{children:[O.jsx(W2,{lang:r,setLang:e,t:f,theme:i,setTheme:s}),O.jsx(q2,{t:f}),O.jsx(Y2,{t:f,lang:r}),O.jsx($2,{t:f,lang:r}),O.jsx(Z2,{t:f,lang:r}),O.jsx(K2,{}),O.jsx(Q2,{t:f,lang:r}),O.jsx(J2,{t:f,lang:r}),O.jsx(iw,{t:f,lang:r}),O.jsx(aw,{t:f,showToast:h}),O.jsx("div",{className:`toast ${l.show?"show":""}`,children:l.msg}),O.jsxs(Iy,{title:"Tweaks",children:[O.jsx(Ac,{label:"Theme"}),O.jsx(By,{label:"Dark mode",value:!!m.dark,onChange:v=>p("dark",v)}),O.jsx(Ac,{label:"Colors"}),O.jsx(zd,{label:"Primary",value:m.primary,onChange:v=>p("primary",v)}),O.jsx(zd,{label:"Secondary",value:m.secondary,onChange:v=>p("secondary",v)}),O.jsx(zd,{label:"Tertiary",value:m.tertiary,onChange:v=>p("tertiary",v)}),O.jsx(Ac,{label:"Brutalism"}),O.jsx(Pd,{label:"Border thickness",value:m.borderW,min:1,max:8,step:1,unit:"px",onChange:v=>p("borderW",v)}),O.jsx(Pd,{label:"Shadow offset",value:m.shadowOff,min:0,max:16,step:1,unit:"px",onChange:v=>p("shadowOff",v)}),O.jsx(Pd,{label:"Rotation",value:m.rot,min:0,max:8,step:.5,unit:"°",onChange:v=>p("rot",v)}),O.jsx(Ac,{label:"Type"}),O.jsx(Fy,{label:"Display weight",value:m.displayWeight,options:[400,600,700,800,900],onChange:v=>p("displayWeight",v)})]})]})}Oy.createRoot(document.getElementById("root")).render(O.jsx(ot.StrictMode,{children:O.jsx(sw,{})}));
