function dx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function v0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y0={exports:{}},Ml={},x0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),px=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),hx=Symbol.for("react.strict_mode"),gx=Symbol.for("react.profiler"),vx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),wx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),wm=Symbol.iterator;function kx(e){return e===null||typeof e!="object"?null:(e=wm&&e[wm]||e["@@iterator"],typeof e=="function"?e:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b0=Object.assign,S0={};function ea(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||w0}ea.prototype.isReactComponent={};ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function k0(){}k0.prototype=ea.prototype;function Nd(e,t,n){this.props=e,this.context=t,this.refs=S0,this.updater=n||w0}var Ad=Nd.prototype=new k0;Ad.constructor=Nd;b0(Ad,ea.prototype);Ad.isPureReactComponent=!0;var bm=Array.isArray,E0=Object.prototype.hasOwnProperty,Od={current:null},C0={key:!0,ref:!0,__self:!0,__source:!0};function j0(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)E0.call(t,r)&&!C0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:jo,type:e,key:a,ref:o,props:i,_owner:Od.current}}function Ex(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function Cx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Sm=/\/+/g;function Qu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cx(""+e.key):t.toString(36)}function ws(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case jo:case px:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Qu(o,0):r,bm(i)?(n="",e!=null&&(n=e.replace(Sm,"$&/")+"/"),ws(i,t,n,"",function(u){return u})):i!=null&&(Rd(i)&&(i=Ex(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bm(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Qu(a,s);o+=ws(a,t,n,l,i)}else if(l=kx(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Qu(a,s++),o+=ws(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vo(e,t,n){if(e==null)return e;var r=[],i=0;return ws(e,r,"","",function(a){return t.call(n,a,i++)}),r}function jx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pt={current:null},bs={transition:null},Px={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:bs,ReactCurrentOwner:Od};X.Children={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!Rd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ea;X.Fragment=mx;X.Profiler=gx;X.PureComponent=Nd;X.StrictMode=hx;X.Suspense=wx;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Od.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)E0.call(t,l)&&!C0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:jo,type:e.type,key:i,ref:a,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:yx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vx,_context:e},e.Consumer=e};X.createElement=j0;X.createFactory=function(e){var t=j0.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:xx,render:e}};X.isValidElement=Rd;X.lazy=function(e){return{$$typeof:Sx,_payload:{_status:-1,_result:e},_init:jx}};X.memo=function(e,t){return{$$typeof:bx,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return pt.current.useCallback(e,t)};X.useContext=function(e){return pt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return pt.current.useDeferredValue(e)};X.useEffect=function(e,t){return pt.current.useEffect(e,t)};X.useId=function(){return pt.current.useId()};X.useImperativeHandle=function(e,t,n){return pt.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return pt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return pt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return pt.current.useMemo(e,t)};X.useReducer=function(e,t,n){return pt.current.useReducer(e,t,n)};X.useRef=function(e){return pt.current.useRef(e)};X.useState=function(e){return pt.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return pt.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return pt.current.useTransition()};X.version="18.2.0";x0.exports=X;var k=x0.exports;const q=v0(k),Nx=dx({__proto__:null,default:q},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=k,Ox=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Tx=Object.prototype.hasOwnProperty,Lx=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_x={key:!0,ref:!0,__self:!0,__source:!0};function P0(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Tx.call(t,r)&&!_x.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ox,type:e,key:a,ref:o,props:i,_owner:Lx.current}}Ml.Fragment=Rx;Ml.jsx=P0;Ml.jsxs=P0;y0.exports=Ml;var f=y0.exports,Jc={},N0={exports:{}},Tt={},A0={exports:{}},O0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var U=T.length;T.push(D);e:for(;0<U;){var pe=U-1>>>1,Se=T[pe];if(0<i(Se,D))T[pe]=D,T[U]=Se,U=pe;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],U=T.pop();if(U!==D){T[0]=U;e:for(var pe=0,Se=T.length,Yt=Se>>>1;pe<Yt;){var ne=2*(pe+1)-1,gt=T[ne],rt=ne+1,vt=T[rt];if(0>i(gt,U))rt<Se&&0>i(vt,gt)?(T[pe]=vt,T[rt]=U,pe=rt):(T[pe]=gt,T[ne]=U,pe=ne);else if(rt<Se&&0>i(vt,U))T[pe]=vt,T[rt]=U,pe=rt;else break e}}return D}function i(T,D){var U=T.sortIndex-D.sortIndex;return U!==0?U:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,p=3,v=!1,h=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function x(T){if(y=!1,w(T),!h)if(n(l)!==null)h=!0,ie(S);else{var D=n(u);D!==null&&oe(x,D.startTime-T)}}function S(T,D){h=!1,y&&(y=!1,g(O),O=-1),v=!0;var U=p;try{for(w(D),d=n(l);d!==null&&(!(d.expirationTime>D)||T&&!Z());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,p=d.priorityLevel;var Se=pe(d.expirationTime<=D);D=e.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&r(l),w(D)}else r(l);d=n(l)}if(d!==null)var Yt=!0;else{var ne=n(u);ne!==null&&oe(x,ne.startTime-D),Yt=!1}return Yt}finally{d=null,p=U,v=!1}}var P=!1,C=null,O=-1,z=5,L=-1;function Z(){return!(e.unstable_now()-L<z)}function G(){if(C!==null){var T=e.unstable_now();L=T;var D=!0;try{D=C(!0,T)}finally{D?Te():(P=!1,C=null)}}else P=!1}var Te;if(typeof m=="function")Te=function(){m(G)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,qe=be.port2;be.port1.onmessage=G,Te=function(){qe.postMessage(null)}}else Te=function(){b(G,0)};function ie(T){C=T,P||(P=!0,Te())}function oe(T,D){O=b(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,ie(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var U=p;p=D;try{return T()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=p;p=T;try{return D()}finally{p=U}},e.unstable_scheduleCallback=function(T,D,U){var pe=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?pe+U:pe):U=pe,T){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=U+Se,T={id:c++,callback:D,priorityLevel:T,startTime:U,expirationTime:Se,sortIndex:-1},U>pe?(T.sortIndex=U,t(u,T),n(l)===null&&T===n(u)&&(y?(g(O),O=-1):y=!0,oe(x,U-pe))):(T.sortIndex=Se,t(l,T),h||v||(h=!0,ie(S))),T},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(T){var D=p;return function(){var U=p;p=D;try{return T.apply(this,arguments)}finally{p=U}}}})(O0);A0.exports=O0;var Ix=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0=k,Ot=Ix;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T0=new Set,Ka={};function ei(e,t){Mi(e,t),Mi(e+"Capture",t)}function Mi(e,t){for(Ka[e]=t,e=0;e<t.length;e++)T0.add(t[e])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,Mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Em={};function zx(e){return Xc.call(Em,e)?!0:Xc.call(km,e)?!1:Mx.test(e)?Em[e]=!0:(km[e]=!0,!1)}function Dx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $x(e,t,n,r){if(t===null||typeof t>"u"||Dx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function mt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Ld(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Td,Ld);tt[t]=new mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Td,Ld);tt[t]=new mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Td,Ld);tt[t]=new mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new mt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function _d(e,t,n,r){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($x(t,n,i,r)&&(n=null),r||i===null?zx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zn=R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),li=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Cm=Symbol.iterator;function da(e){return e===null||typeof e!="object"?null:(e=Cm&&e[Cm]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Ku;function Ca(e){if(Ku===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ku=t&&t[1]||""}return`
`+Ku+e}var Ju=!1;function Xu(e,t){if(!e||Ju)return"";Ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ju=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ca(e):""}function Fx(e){switch(e.tag){case 5:return Ca(e.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return e=Xu(e.type,!1),e;case 11:return e=Xu(e.type.render,!1),e;case 1:return e=Xu(e.type,!0),e;default:return""}}function nf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ui:return"Fragment";case li:return"Portal";case Zc:return"Profiler";case Id:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _0:return(e.displayName||"Context")+".Consumer";case L0:return(e._context.displayName||"Context")+".Provider";case Md:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zd:return t=e.displayName||null,t!==null?t:nf(e.type)||"Memo";case qn:t=e._payload,e=e._init;try{return nf(e(t))}catch{}}return null}function Ux(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(t);case 8:return t===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bx(e){var t=M0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=Bx(e))}function z0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=M0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rf(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function D0(e,t){t=t.checked,t!=null&&_d(e,"checked",t,!1)}function af(e,t){D0(e,t);var n=mr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?of(e,t.type,n):t.hasOwnProperty("defaultValue")&&of(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function of(e,t,n){(t!=="number"||Js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ja=Array.isArray;function ji(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ja(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mr(n)}}function $0(e,t){var n=mr(t.value),r=mr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Am(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function F0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?F0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yo,U0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hx=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(e){Hx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_a[t]=_a[e]})});function B0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_a.hasOwnProperty(e)&&_a[e]?(""+t).trim():t+"px"}function H0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=B0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uf(e,t){if(t){if(Vx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function cf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function Dd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var df=null,Pi=null,Ni=null;function Om(e){if(e=Ao(e)){if(typeof df!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Ul(t),df(e.stateNode,e.type,t))}}function V0(e){Pi?Ni?Ni.push(e):Ni=[e]:Pi=e}function W0(){if(Pi){var e=Pi,t=Ni;if(Ni=Pi=null,Om(e),t)for(e=0;e<t.length;e++)Om(t[e])}}function G0(e,t){return e(t)}function Y0(){}var Zu=!1;function q0(e,t,n){if(Zu)return e(t,n);Zu=!0;try{return G0(e,t,n)}finally{Zu=!1,(Pi!==null||Ni!==null)&&(Y0(),W0())}}function Xa(e,t){var n=e.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var pf=!1;if(An)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){pf=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{pf=!1}function Wx(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ia=!1,Xs=null,Zs=!1,mf=null,Gx={onError:function(e){Ia=!0,Xs=e}};function Yx(e,t,n,r,i,a,o,s,l){Ia=!1,Xs=null,Wx.apply(Gx,arguments)}function qx(e,t,n,r,i,a,o,s,l){if(Yx.apply(this,arguments),Ia){if(Ia){var u=Xs;Ia=!1,Xs=null}else throw Error(R(198));Zs||(Zs=!0,mf=u)}}function ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Q0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rm(e){if(ti(e)!==e)throw Error(R(188))}function Qx(e){var t=e.alternate;if(!t){if(t=ti(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Rm(i),e;if(a===r)return Rm(i),t;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function K0(e){return e=Qx(e),e!==null?J0(e):null}function J0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=J0(e);if(t!==null)return t;e=e.sibling}return null}var X0=Ot.unstable_scheduleCallback,Tm=Ot.unstable_cancelCallback,Kx=Ot.unstable_shouldYield,Jx=Ot.unstable_requestPaint,ze=Ot.unstable_now,Xx=Ot.unstable_getCurrentPriorityLevel,$d=Ot.unstable_ImmediatePriority,Z0=Ot.unstable_UserBlockingPriority,el=Ot.unstable_NormalPriority,Zx=Ot.unstable_LowPriority,e1=Ot.unstable_IdlePriority,zl=null,hn=null;function ew(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(zl,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:rw,tw=Math.log,nw=Math.LN2;function rw(e){return e>>>=0,e===0?32:31-(tw(e)/nw|0)|0}var qo=64,Qo=4194304;function Pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Pa(s):(a&=o,a!==0&&(r=Pa(a)))}else o=n&~i,o!==0?r=Pa(o):a!==0&&(r=Pa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function iw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-rn(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=iw(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function t1(){var e=qo;return qo<<=1,!(qo&4194240)&&(qo=64),e}function ec(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Po(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function ow(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Fd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function n1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var r1,Ud,i1,a1,o1,gf=!1,Ko=[],rr=null,ir=null,ar=null,Za=new Map,eo=new Map,Kn=[],sw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Za.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(t.pointerId)}}function ma(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ao(t),t!==null&&Ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lw(e,t,n,r,i){switch(t){case"focusin":return rr=ma(rr,e,t,n,r,i),!0;case"dragenter":return ir=ma(ir,e,t,n,r,i),!0;case"mouseover":return ar=ma(ar,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Za.set(a,ma(Za.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,eo.set(a,ma(eo.get(a)||null,e,t,n,r,i)),!0}return!1}function s1(e){var t=Tr(e.target);if(t!==null){var n=ti(t);if(n!==null){if(t=n.tag,t===13){if(t=Q0(n),t!==null){e.blockedOn=t,o1(e.priority,function(){i1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return t=Ao(n),t!==null&&Ud(t),e.blockedOn=n,!1;t.shift()}return!0}function _m(e,t,n){Ss(e)&&n.delete(t)}function uw(){gf=!1,rr!==null&&Ss(rr)&&(rr=null),ir!==null&&Ss(ir)&&(ir=null),ar!==null&&Ss(ar)&&(ar=null),Za.forEach(_m),eo.forEach(_m)}function ha(e,t){e.blockedOn===t&&(e.blockedOn=null,gf||(gf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,uw)))}function to(e){function t(i){return ha(i,e)}if(0<Ko.length){ha(Ko[0],e);for(var n=1;n<Ko.length;n++){var r=Ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rr!==null&&ha(rr,e),ir!==null&&ha(ir,e),ar!==null&&ha(ar,e),Za.forEach(t),eo.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)s1(n),n.blockedOn===null&&Kn.shift()}var Ai=zn.ReactCurrentBatchConfig,nl=!0;function cw(e,t,n,r){var i=se,a=Ai.transition;Ai.transition=null;try{se=1,Bd(e,t,n,r)}finally{se=i,Ai.transition=a}}function fw(e,t,n,r){var i=se,a=Ai.transition;Ai.transition=null;try{se=4,Bd(e,t,n,r)}finally{se=i,Ai.transition=a}}function Bd(e,t,n,r){if(nl){var i=vf(e,t,n,r);if(i===null)cc(e,t,r,rl,n),Lm(e,r);else if(lw(i,e,t,n,r))r.stopPropagation();else if(Lm(e,r),t&4&&-1<sw.indexOf(e)){for(;i!==null;){var a=Ao(i);if(a!==null&&r1(a),a=vf(e,t,n,r),a===null&&cc(e,t,r,rl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else cc(e,t,r,null,n)}}var rl=null;function vf(e,t,n,r){if(rl=null,e=Dd(r),e=Tr(e),e!==null)if(t=ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Q0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function l1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case $d:return 1;case Z0:return 4;case el:case Zx:return 16;case e1:return 536870912;default:return 16}default:return 16}}var Zn=null,Hd=null,ks=null;function u1(){if(ks)return ks;var e,t=Hd,n=t.length,r,i="value"in Zn?Zn.value:Zn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ks=i.slice(e,1<r?1-r:void 0)}function Es(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Im(){return!1}function Lt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Jo:Im,this.isPropagationStopped=Im,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Lt(ta),No=Re({},ta,{view:0,detail:0}),dw=Lt(No),tc,nc,ga,Dl=Re({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ga&&(ga&&e.type==="mousemove"?(tc=e.screenX-ga.screenX,nc=e.screenY-ga.screenY):nc=tc=0,ga=e),tc)},movementY:function(e){return"movementY"in e?e.movementY:nc}}),Mm=Lt(Dl),pw=Re({},Dl,{dataTransfer:0}),mw=Lt(pw),hw=Re({},No,{relatedTarget:0}),rc=Lt(hw),gw=Re({},ta,{animationName:0,elapsedTime:0,pseudoElement:0}),vw=Lt(gw),yw=Re({},ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xw=Lt(yw),ww=Re({},ta,{data:0}),zm=Lt(ww),bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ew(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kw[e])?!!t[e]:!1}function Wd(){return Ew}var Cw=Re({},No,{key:function(e){if(e.key){var t=bw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Es(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(e){return e.type==="keypress"?Es(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Es(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jw=Lt(Cw),Pw=Re({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=Lt(Pw),Nw=Re({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),Aw=Lt(Nw),Ow=Re({},ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rw=Lt(Ow),Tw=Re({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lw=Lt(Tw),_w=[9,13,27,32],Gd=An&&"CompositionEvent"in window,Ma=null;An&&"documentMode"in document&&(Ma=document.documentMode);var Iw=An&&"TextEvent"in window&&!Ma,c1=An&&(!Gd||Ma&&8<Ma&&11>=Ma),$m=String.fromCharCode(32),Fm=!1;function f1(e,t){switch(e){case"keyup":return _w.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function Mw(e,t){switch(e){case"compositionend":return d1(t);case"keypress":return t.which!==32?null:(Fm=!0,$m);case"textInput":return e=t.data,e===$m&&Fm?null:e;default:return null}}function zw(e,t){if(ci)return e==="compositionend"||!Gd&&f1(e,t)?(e=u1(),ks=Hd=Zn=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c1&&t.locale!=="ko"?null:t.data;default:return null}}var Dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dw[e.type]:t==="textarea"}function p1(e,t,n,r){V0(r),t=il(t,"onChange"),0<t.length&&(n=new Vd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var za=null,no=null;function $w(e){E1(e,0)}function $l(e){var t=pi(e);if(z0(t))return e}function Fw(e,t){if(e==="change")return t}var m1=!1;if(An){var ic;if(An){var ac="oninput"in document;if(!ac){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),ac=typeof Bm.oninput=="function"}ic=ac}else ic=!1;m1=ic&&(!document.documentMode||9<document.documentMode)}function Hm(){za&&(za.detachEvent("onpropertychange",h1),no=za=null)}function h1(e){if(e.propertyName==="value"&&$l(no)){var t=[];p1(t,no,e,Dd(e)),q0($w,t)}}function Uw(e,t,n){e==="focusin"?(Hm(),za=t,no=n,za.attachEvent("onpropertychange",h1)):e==="focusout"&&Hm()}function Bw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(no)}function Hw(e,t){if(e==="click")return $l(t)}function Vw(e,t){if(e==="input"||e==="change")return $l(t)}function Ww(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:Ww;function ro(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xc.call(t,i)||!sn(e[i],t[i]))return!1}return!0}function Vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wm(e,t){var n=Vm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vm(n)}}function g1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?g1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function v1(){for(var e=window,t=Js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Js(e.document)}return t}function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gw(e){var t=v1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&g1(n.ownerDocument.documentElement,n)){if(r!==null&&Yd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Wm(n,a);var o=Wm(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yw=An&&"documentMode"in document&&11>=document.documentMode,fi=null,yf=null,Da=null,xf=!1;function Gm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xf||fi==null||fi!==Js(r)||(r=fi,"selectionStart"in r&&Yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Da&&ro(Da,r)||(Da=r,r=il(yf,"onSelect"),0<r.length&&(t=new Vd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fi)))}function Xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},oc={},y1={};An&&(y1=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Fl(e){if(oc[e])return oc[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in y1)return oc[e]=t[n];return e}var x1=Fl("animationend"),w1=Fl("animationiteration"),b1=Fl("animationstart"),S1=Fl("transitionend"),k1=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){k1.set(e,t),ei(t,[e])}for(var sc=0;sc<Ym.length;sc++){var lc=Ym[sc],qw=lc.toLowerCase(),Qw=lc[0].toUpperCase()+lc.slice(1);Sr(qw,"on"+Qw)}Sr(x1,"onAnimationEnd");Sr(w1,"onAnimationIteration");Sr(b1,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(S1,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function qm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qx(r,t,void 0,e),e.currentTarget=null}function E1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;qm(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;qm(i,s,u),a=l}}}if(Zs)throw e=mf,Zs=!1,mf=null,e}function he(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(C1(t,e,2,!1),n.add(r))}function uc(e,t,n){var r=0;t&&(r|=4),C1(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Zo]){e[Zo]=!0,T0.forEach(function(n){n!=="selectionchange"&&(Kw.has(n)||uc(n,!1,e),uc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,uc("selectionchange",!1,t))}}function C1(e,t,n,r){switch(l1(t)){case 1:var i=cw;break;case 4:i=fw;break;default:i=Bd}n=i.bind(null,t,n,e),i=void 0,!pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Tr(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}q0(function(){var u=a,c=Dd(n),d=[];e:{var p=k1.get(e);if(p!==void 0){var v=Vd,h=e;switch(e){case"keypress":if(Es(n)===0)break e;case"keydown":case"keyup":v=jw;break;case"focusin":h="focus",v=rc;break;case"focusout":h="blur",v=rc;break;case"beforeblur":case"afterblur":v=rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Aw;break;case x1:case w1:case b1:v=vw;break;case S1:v=Rw;break;case"scroll":v=dw;break;case"wheel":v=Lw;break;case"copy":case"cut":case"paste":v=xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Dm}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var m=u,w;m!==null;){w=m;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,g!==null&&(x=Xa(m,g),x!=null&&y.push(ao(m,x,w)))),b)break;m=m.return}0<y.length&&(p=new v(p,h,null,n,c),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ff&&(h=n.relatedTarget||n.fromElement)&&(Tr(h)||h[On]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(h=n.relatedTarget||n.toElement,v=u,h=h?Tr(h):null,h!==null&&(b=ti(h),h!==b||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=u),v!==h)){if(y=Mm,x="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Dm,x="onPointerLeave",g="onPointerEnter",m="pointer"),b=v==null?p:pi(v),w=h==null?p:pi(h),p=new y(x,m+"leave",v,n,c),p.target=b,p.relatedTarget=w,x=null,Tr(c)===u&&(y=new y(g,m+"enter",h,n,c),y.target=w,y.relatedTarget=b,x=y),b=x,v&&h)t:{for(y=v,g=h,m=0,w=y;w;w=ai(w))m++;for(w=0,x=g;x;x=ai(x))w++;for(;0<m-w;)y=ai(y),m--;for(;0<w-m;)g=ai(g),w--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=ai(y),g=ai(g)}y=null}else y=null;v!==null&&Qm(d,p,v,y,!1),h!==null&&b!==null&&Qm(d,b,h,y,!0)}}e:{if(p=u?pi(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=Fw;else if(Um(p))if(m1)S=Vw;else{S=Bw;var P=Uw}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Hw);if(S&&(S=S(e,u))){p1(d,S,n,c);break e}P&&P(e,p,u),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&of(p,"number",p.value)}switch(P=u?pi(u):window,e){case"focusin":(Um(P)||P.contentEditable==="true")&&(fi=P,yf=u,Da=null);break;case"focusout":Da=yf=fi=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,Gm(d,n,c);break;case"selectionchange":if(Yw)break;case"keydown":case"keyup":Gm(d,n,c)}var C;if(Gd)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else ci?f1(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(c1&&n.locale!=="ko"&&(ci||O!=="onCompositionStart"?O==="onCompositionEnd"&&ci&&(C=u1()):(Zn=c,Hd="value"in Zn?Zn.value:Zn.textContent,ci=!0)),P=il(u,O),0<P.length&&(O=new zm(O,e,null,n,c),d.push({event:O,listeners:P}),C?O.data=C:(C=d1(n),C!==null&&(O.data=C)))),(C=Iw?Mw(e,n):zw(e,n))&&(u=il(u,"onBeforeInput"),0<u.length&&(c=new zm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}E1(d,t)})}function ao(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Xa(e,n),a!=null&&r.unshift(ao(e,a,i)),a=Xa(e,t),a!=null&&r.push(ao(e,a,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qm(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Xa(n,a),l!=null&&o.unshift(ao(n,l,s))):i||(l=Xa(n,a),l!=null&&o.push(ao(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jw=/\r\n?/g,Xw=/\u0000|\uFFFD/g;function Km(e){return(typeof e=="string"?e:""+e).replace(Jw,`
`).replace(Xw,"")}function es(e,t,n){if(t=Km(t),Km(e)!==t&&n)throw Error(R(425))}function al(){}var wf=null,bf=null;function Sf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kf=typeof setTimeout=="function"?setTimeout:void 0,Zw=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(e){return Jm.resolve(null).then(e).catch(tb)}:kf;function tb(e){setTimeout(function(){throw e})}function fc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),to(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);to(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var na=Math.random().toString(36).slice(2),dn="__reactFiber$"+na,oo="__reactProps$"+na,On="__reactContainer$"+na,Ef="__reactEvents$"+na,nb="__reactListeners$"+na,rb="__reactHandles$"+na;function Tr(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xm(e);e!==null;){if(n=e[dn])return n;e=Xm(e)}return t}e=n,n=e.parentNode}return null}function Ao(e){return e=e[dn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Ul(e){return e[oo]||null}var Cf=[],mi=-1;function kr(e){return{current:e}}function xe(e){0>mi||(e.current=Cf[mi],Cf[mi]=null,mi--)}function me(e,t){mi++,Cf[mi]=e.current,e.current=t}var hr={},ut=kr(hr),St=kr(!1),Vr=hr;function zi(e,t){var n=e.type.contextTypes;if(!n)return hr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function ol(){xe(St),xe(ut)}function Zm(e,t,n){if(ut.current!==hr)throw Error(R(168));me(ut,t),me(St,n)}function j1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Ux(e)||"Unknown",i));return Re({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hr,Vr=ut.current,me(ut,e),me(St,St.current),!0}function eh(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=j1(e,t,Vr),r.__reactInternalMemoizedMergedChildContext=e,xe(St),xe(ut),me(ut,e)):xe(St),me(St,n)}var kn=null,Bl=!1,dc=!1;function P1(e){kn===null?kn=[e]:kn.push(e)}function ib(e){Bl=!0,P1(e)}function Er(){if(!dc&&kn!==null){dc=!0;var e=0,t=se;try{var n=kn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kn=null,Bl=!1}catch(i){throw kn!==null&&(kn=kn.slice(e+1)),X0($d,Er),i}finally{se=t,dc=!1}}return null}var hi=[],gi=0,ll=null,ul=0,Dt=[],$t=0,Wr=null,En=1,Cn="";function Nr(e,t){hi[gi++]=ul,hi[gi++]=ll,ll=e,ul=t}function N1(e,t,n){Dt[$t++]=En,Dt[$t++]=Cn,Dt[$t++]=Wr,Wr=e;var r=En;e=Cn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var a=32-rn(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-rn(t)+i|n<<i|r,Cn=a+e}else En=1<<a|n<<i|r,Cn=e}function qd(e){e.return!==null&&(Nr(e,1),N1(e,1,0))}function Qd(e){for(;e===ll;)ll=hi[--gi],hi[gi]=null,ul=hi[--gi],hi[gi]=null;for(;e===Wr;)Wr=Dt[--$t],Dt[$t]=null,Cn=Dt[--$t],Dt[$t]=null,En=Dt[--$t],Dt[$t]=null}var At=null,Pt=null,Ee=!1,en=null;function A1(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function th(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Pt=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wr!==null?{id:En,overflow:Cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Pt=null,!0):!1;default:return!1}}function jf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pf(e){if(Ee){var t=Pt;if(t){var n=t;if(!th(e,t)){if(jf(e))throw Error(R(418));t=or(n.nextSibling);var r=At;t&&th(e,t)?A1(r,n):(e.flags=e.flags&-4097|2,Ee=!1,At=e)}}else{if(jf(e))throw Error(R(418));e.flags=e.flags&-4097|2,Ee=!1,At=e}}}function nh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function ts(e){if(e!==At)return!1;if(!Ee)return nh(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sf(e.type,e.memoizedProps)),t&&(t=Pt)){if(jf(e))throw O1(),Error(R(418));for(;t;)A1(e,t),t=or(t.nextSibling)}if(nh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pt=or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pt=null}}else Pt=At?or(e.stateNode.nextSibling):null;return!0}function O1(){for(var e=Pt;e;)e=or(e.nextSibling)}function Di(){Pt=At=null,Ee=!1}function Kd(e){en===null?en=[e]:en.push(e)}var ab=zn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var cl=kr(null),fl=null,vi=null,Jd=null;function Xd(){Jd=vi=fl=null}function Zd(e){var t=cl.current;xe(cl),e._currentValue=t}function Nf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oi(e,t){fl=e,Jd=vi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(Jd!==e)if(e={context:e,memoizedValue:t,next:null},vi===null){if(fl===null)throw Error(R(308));vi=e,fl.dependencies={lanes:0,firstContext:e}}else vi=vi.next=e;return t}var Lr=null;function ep(e){Lr===null?Lr=[e]:Lr.push(e)}function R1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ep(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rn(e,r)}function Rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function tp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rn(e,n)}return i=r.interleaved,i===null?(t.next=t,ep(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rn(e,n)}function Cs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fd(e,n)}}function rh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dl(e,t,n,r){var i=e.updateQueue;Qn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var p=s.lane,v=s.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,y=s;switch(p=t,v=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){d=h.call(v,d,p);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,p=typeof h=="function"?h.call(v,d,p):h,p==null)break e;d=Re({},d,p);break e;case 2:Qn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yr|=o,e.lanes=o,e.memoizedState=d}}function ih(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var L1=new R0.Component().refs;function Af(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hl={isMounted:function(e){return(e=e._reactInternals)?ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=dt(),i=ur(e),a=jn(r,i);a.payload=t,n!=null&&(a.callback=n),t=sr(e,a,i),t!==null&&(an(t,e,i,r),Cs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=dt(),i=ur(e),a=jn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=sr(e,a,i),t!==null&&(an(t,e,i,r),Cs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=dt(),r=ur(e),i=jn(n,r);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,r),t!==null&&(an(t,e,r,n),Cs(t,e,r))}};function ah(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ro(n,r)||!ro(i,a):!0}function _1(e,t,n){var r=!1,i=hr,a=t.contextType;return typeof a=="object"&&a!==null?a=Ht(a):(i=kt(t)?Vr:ut.current,r=t.contextTypes,a=(r=r!=null)?zi(e,i):hr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function oh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hl.enqueueReplaceState(t,t.state,null)}function Of(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=L1,tp(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ht(a):(a=kt(t)?Vr:ut.current,i.context=zi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Af(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hl.enqueueReplaceState(i,i.state,null),dl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===L1&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sh(e){var t=e._init;return t(e._payload)}function I1(e){function t(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=cr(g,m),g.index=0,g.sibling=null,g}function a(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,w,x){return m===null||m.tag!==6?(m=xc(w,g.mode,x),m.return=g,m):(m=i(m,w),m.return=g,m)}function l(g,m,w,x){var S=w.type;return S===ui?c(g,m,w.props.children,x,w.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qn&&sh(S)===m.type)?(x=i(m,w.props),x.ref=va(g,m,w),x.return=g,x):(x=Rs(w.type,w.key,w.props,null,g.mode,x),x.ref=va(g,m,w),x.return=g,x)}function u(g,m,w,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=wc(w,g.mode,x),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function c(g,m,w,x,S){return m===null||m.tag!==7?(m=Fr(w,g.mode,x,S),m.return=g,m):(m=i(m,w),m.return=g,m)}function d(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xc(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wo:return w=Rs(m.type,m.key,m.props,null,g.mode,w),w.ref=va(g,null,m),w.return=g,w;case li:return m=wc(m,g.mode,w),m.return=g,m;case qn:var x=m._init;return d(g,x(m._payload),w)}if(ja(m)||da(m))return m=Fr(m,g.mode,w,null),m.return=g,m;ns(g,m)}return null}function p(g,m,w,x){var S=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:s(g,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:return w.key===S?l(g,m,w,x):null;case li:return w.key===S?u(g,m,w,x):null;case qn:return S=w._init,p(g,m,S(w._payload),x)}if(ja(w)||da(w))return S!==null?null:c(g,m,w,x,null);ns(g,w)}return null}function v(g,m,w,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(w)||null,s(m,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wo:return g=g.get(x.key===null?w:x.key)||null,l(m,g,x,S);case li:return g=g.get(x.key===null?w:x.key)||null,u(m,g,x,S);case qn:var P=x._init;return v(g,m,w,P(x._payload),S)}if(ja(x)||da(x))return g=g.get(w)||null,c(m,g,x,S,null);ns(m,x)}return null}function h(g,m,w,x){for(var S=null,P=null,C=m,O=m=0,z=null;C!==null&&O<w.length;O++){C.index>O?(z=C,C=null):z=C.sibling;var L=p(g,C,w[O],x);if(L===null){C===null&&(C=z);break}e&&C&&L.alternate===null&&t(g,C),m=a(L,m,O),P===null?S=L:P.sibling=L,P=L,C=z}if(O===w.length)return n(g,C),Ee&&Nr(g,O),S;if(C===null){for(;O<w.length;O++)C=d(g,w[O],x),C!==null&&(m=a(C,m,O),P===null?S=C:P.sibling=C,P=C);return Ee&&Nr(g,O),S}for(C=r(g,C);O<w.length;O++)z=v(C,g,O,w[O],x),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?O:z.key),m=a(z,m,O),P===null?S=z:P.sibling=z,P=z);return e&&C.forEach(function(Z){return t(g,Z)}),Ee&&Nr(g,O),S}function y(g,m,w,x){var S=da(w);if(typeof S!="function")throw Error(R(150));if(w=S.call(w),w==null)throw Error(R(151));for(var P=S=null,C=m,O=m=0,z=null,L=w.next();C!==null&&!L.done;O++,L=w.next()){C.index>O?(z=C,C=null):z=C.sibling;var Z=p(g,C,L.value,x);if(Z===null){C===null&&(C=z);break}e&&C&&Z.alternate===null&&t(g,C),m=a(Z,m,O),P===null?S=Z:P.sibling=Z,P=Z,C=z}if(L.done)return n(g,C),Ee&&Nr(g,O),S;if(C===null){for(;!L.done;O++,L=w.next())L=d(g,L.value,x),L!==null&&(m=a(L,m,O),P===null?S=L:P.sibling=L,P=L);return Ee&&Nr(g,O),S}for(C=r(g,C);!L.done;O++,L=w.next())L=v(C,g,O,L.value,x),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?O:L.key),m=a(L,m,O),P===null?S=L:P.sibling=L,P=L);return e&&C.forEach(function(G){return t(g,G)}),Ee&&Nr(g,O),S}function b(g,m,w,x){if(typeof w=="object"&&w!==null&&w.type===ui&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:e:{for(var S=w.key,P=m;P!==null;){if(P.key===S){if(S=w.type,S===ui){if(P.tag===7){n(g,P.sibling),m=i(P,w.props.children),m.return=g,g=m;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qn&&sh(S)===P.type){n(g,P.sibling),m=i(P,w.props),m.ref=va(g,P,w),m.return=g,g=m;break e}n(g,P);break}else t(g,P);P=P.sibling}w.type===ui?(m=Fr(w.props.children,g.mode,x,w.key),m.return=g,g=m):(x=Rs(w.type,w.key,w.props,null,g.mode,x),x.ref=va(g,m,w),x.return=g,g=x)}return o(g);case li:e:{for(P=w.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=wc(w,g.mode,x),m.return=g,g=m}return o(g);case qn:return P=w._init,b(g,m,P(w._payload),x)}if(ja(w))return h(g,m,w,x);if(da(w))return y(g,m,w,x);ns(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,w),m.return=g,g=m):(n(g,m),m=xc(w,g.mode,x),m.return=g,g=m),o(g)):n(g,m)}return b}var $i=I1(!0),M1=I1(!1),Oo={},gn=kr(Oo),so=kr(Oo),lo=kr(Oo);function _r(e){if(e===Oo)throw Error(R(174));return e}function np(e,t){switch(me(lo,t),me(so,e),me(gn,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lf(t,e)}xe(gn),me(gn,t)}function Fi(){xe(gn),xe(so),xe(lo)}function z1(e){_r(lo.current);var t=_r(gn.current),n=lf(t,e.type);t!==n&&(me(so,e),me(gn,n))}function rp(e){so.current===e&&(xe(gn),xe(so))}var Pe=kr(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pc=[];function ip(){for(var e=0;e<pc.length;e++)pc[e]._workInProgressVersionPrimary=null;pc.length=0}var js=zn.ReactCurrentDispatcher,mc=zn.ReactCurrentBatchConfig,Gr=0,Oe=null,Ve=null,Qe=null,ml=!1,$a=!1,uo=0,ob=0;function at(){throw Error(R(321))}function ap(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function op(e,t,n,r,i,a){if(Gr=a,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,js.current=e===null||e.memoizedState===null?cb:fb,e=n(r,i),$a){a=0;do{if($a=!1,uo=0,25<=a)throw Error(R(301));a+=1,Qe=Ve=null,t.updateQueue=null,js.current=db,e=n(r,i)}while($a)}if(js.current=hl,t=Ve!==null&&Ve.next!==null,Gr=0,Qe=Ve=Oe=null,ml=!1,t)throw Error(R(300));return e}function sp(){var e=uo!==0;return uo=0,e}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Oe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Vt(){if(Ve===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=Qe===null?Oe.memoizedState:Qe.next;if(t!==null)Qe=t,Ve=e;else{if(e===null)throw Error(R(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Qe===null?Oe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function co(e,t){return typeof t=="function"?t(e):t}function hc(e){var t=Vt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=Ve,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,Oe.lanes|=c,Yr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,sn(r,t.memoizedState)||(xt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Oe.lanes|=a,Yr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gc(e){var t=Vt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);sn(a,t.memoizedState)||(xt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function D1(){}function $1(e,t){var n=Oe,r=Vt(),i=t(),a=!sn(r.memoizedState,i);if(a&&(r.memoizedState=i,xt=!0),r=r.queue,lp(B1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,fo(9,U1.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(R(349));Gr&30||F1(n,t,i)}return i}function F1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function U1(e,t,n,r){t.value=n,t.getSnapshot=r,H1(t)&&V1(e)}function B1(e,t,n){return n(function(){H1(t)&&V1(e)})}function H1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function V1(e){var t=Rn(e,1);t!==null&&an(t,e,1,-1)}function lh(e){var t=cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:e},t.queue=e,e=e.dispatch=ub.bind(null,Oe,e),[t.memoizedState,e]}function fo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function W1(){return Vt().memoizedState}function Ps(e,t,n,r){var i=cn();Oe.flags|=e,i.memoizedState=fo(1|t,n,void 0,r===void 0?null:r)}function Vl(e,t,n,r){var i=Vt();r=r===void 0?null:r;var a=void 0;if(Ve!==null){var o=Ve.memoizedState;if(a=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=fo(t,n,a,r);return}}Oe.flags|=e,i.memoizedState=fo(1|t,n,a,r)}function uh(e,t){return Ps(8390656,8,e,t)}function lp(e,t){return Vl(2048,8,e,t)}function G1(e,t){return Vl(4,2,e,t)}function Y1(e,t){return Vl(4,4,e,t)}function q1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Q1(e,t,n){return n=n!=null?n.concat([e]):null,Vl(4,4,q1.bind(null,t,e),n)}function up(){}function K1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ap(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function J1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ap(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function X1(e,t,n){return Gr&21?(sn(n,t)||(n=t1(),Oe.lanes|=n,Yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xt=!0),e.memoizedState=n)}function sb(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=mc.transition;mc.transition={};try{e(!1),t()}finally{se=n,mc.transition=r}}function Z1(){return Vt().memoizedState}function lb(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ev(e))tv(t,n);else if(n=R1(e,t,n,r),n!==null){var i=dt();an(n,e,r,i),nv(n,t,r)}}function ub(e,t,n){var r=ur(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(e))tv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sn(s,o)){var l=t.interleaved;l===null?(i.next=i,ep(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=R1(e,t,i,r),n!==null&&(i=dt(),an(n,e,r,i),nv(n,t,r))}}function ev(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function tv(e,t){$a=ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fd(e,n)}}var hl={readContext:Ht,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},cb={readContext:Ht,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:uh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4194308,4,q1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var n=cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lb.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:lh,useDebugValue:up,useDeferredValue:function(e){return cn().memoizedState=e},useTransition:function(){var e=lh(!1),t=e[0];return e=sb.bind(null,e[1]),cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,i=cn();if(Ee){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Je===null)throw Error(R(349));Gr&30||F1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,uh(B1.bind(null,r,a,e),[e]),r.flags|=2048,fo(9,U1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=cn(),t=Je.identifierPrefix;if(Ee){var n=Cn,r=En;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=uo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ob++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fb={readContext:Ht,useCallback:K1,useContext:Ht,useEffect:lp,useImperativeHandle:Q1,useInsertionEffect:G1,useLayoutEffect:Y1,useMemo:J1,useReducer:hc,useRef:W1,useState:function(){return hc(co)},useDebugValue:up,useDeferredValue:function(e){var t=Vt();return X1(t,Ve.memoizedState,e)},useTransition:function(){var e=hc(co)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:D1,useSyncExternalStore:$1,useId:Z1,unstable_isNewReconciler:!1},db={readContext:Ht,useCallback:K1,useContext:Ht,useEffect:lp,useImperativeHandle:Q1,useInsertionEffect:G1,useLayoutEffect:Y1,useMemo:J1,useReducer:gc,useRef:W1,useState:function(){return gc(co)},useDebugValue:up,useDeferredValue:function(e){var t=Vt();return Ve===null?t.memoizedState=e:X1(t,Ve.memoizedState,e)},useTransition:function(){var e=gc(co)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:D1,useSyncExternalStore:$1,useId:Z1,unstable_isNewReconciler:!1};function Ui(e,t){try{var n="",r=t;do n+=Fx(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function vc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pb=typeof WeakMap=="function"?WeakMap:Map;function rv(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,Uf=r),Rf(e,t)},n}function iv(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Rf(e,t),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ch(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pb.bind(null,e,t,n),t.then(e,e))}function fh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,sr(n,t,1))),n.lanes|=1),e)}var mb=zn.ReactCurrentOwner,xt=!1;function ct(e,t,n,r){t.child=e===null?M1(t,null,n,r):$i(t,e.child,n,r)}function ph(e,t,n,r,i){n=n.render;var a=t.ref;return Oi(t,i),r=op(e,t,n,r,a,i),n=sp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tn(e,t,i)):(Ee&&n&&qd(t),t.flags|=1,ct(e,t,r,i),t.child)}function mh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!vp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,av(e,t,a,r,i)):(e=Rs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,r)&&e.ref===t.ref)return Tn(e,t,i)}return t.flags|=1,e=cr(a,r),e.ref=t.ref,e.return=t,t.child=e}function av(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ro(a,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(xt=!0);else return t.lanes=e.lanes,Tn(e,t,i)}return Tf(e,t,n,r,i)}function ov(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(xi,jt),jt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(xi,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,me(xi,jt),jt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,me(xi,jt),jt|=r;return ct(e,t,i,n),t.child}function sv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tf(e,t,n,r,i){var a=kt(n)?Vr:ut.current;return a=zi(t,a),Oi(t,i),n=op(e,t,n,r,a,i),r=sp(),e!==null&&!xt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tn(e,t,i)):(Ee&&r&&qd(t),t.flags|=1,ct(e,t,n,i),t.child)}function hh(e,t,n,r,i){if(kt(n)){var a=!0;sl(t)}else a=!1;if(Oi(t,i),t.stateNode===null)Ns(e,t),_1(t,n,r),Of(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=kt(n)?Vr:ut.current,u=zi(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&oh(t,o,r,u),Qn=!1;var p=t.memoizedState;o.state=p,dl(t,r,o,i),l=t.memoizedState,s!==r||p!==l||St.current||Qn?(typeof c=="function"&&(Af(t,n,c,r),l=t.memoizedState),(s=Qn||ah(t,n,s,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,T1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Jt(t.type,s),o.props=u,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=kt(n)?Vr:ut.current,l=zi(t,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&oh(t,o,r,l),Qn=!1,p=t.memoizedState,o.state=p,dl(t,r,o,i);var h=t.memoizedState;s!==d||p!==h||St.current||Qn?(typeof v=="function"&&(Af(t,n,v,r),h=t.memoizedState),(u=Qn||ah(t,n,u,r,p,h,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,h,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,h,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Lf(e,t,n,r,a,i)}function Lf(e,t,n,r,i,a){sv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&eh(t,n,!1),Tn(e,t,a);r=t.stateNode,mb.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=$i(t,e.child,null,a),t.child=$i(t,null,s,a)):ct(e,t,s,a),t.memoizedState=r.state,i&&eh(t,n,!0),t.child}function lv(e){var t=e.stateNode;t.pendingContext?Zm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zm(e,t.context,!1),np(e,t.containerInfo)}function gh(e,t,n,r,i){return Di(),Kd(i),t.flags|=256,ct(e,t,n,r),t.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function If(e){return{baseLanes:e,cachePool:null,transitions:null}}function uv(e,t,n){var r=t.pendingProps,i=Pe.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Pe,i&1),e===null)return Pf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Yl(o,r,0,null),e=Fr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=If(n),t.memoizedState=_f,e):cp(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return hb(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=cr(s,a):(a=Fr(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=_f,r}return a=e.child,e=a.sibling,r=cr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cp(e,t){return t=Yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&Kd(r),$i(t,e.child,null,n),e=cp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hb(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=vc(Error(R(422))),rs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Yl({mode:"visible",children:r.children},i,0,null),a=Fr(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&$i(t,e.child,null,o),t.child.memoizedState=If(o),t.memoizedState=_f,a);if(!(t.mode&1))return rs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(R(419)),r=vc(a,r,void 0),rs(e,t,o,r)}if(s=(o&e.childLanes)!==0,xt||s){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rn(e,i),an(r,e,i,-1))}return gp(),r=vc(Error(R(421))),rs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pt=or(i.nextSibling),At=t,Ee=!0,en=null,e!==null&&(Dt[$t++]=En,Dt[$t++]=Cn,Dt[$t++]=Wr,En=e.id,Cn=e.overflow,Wr=t),t=cp(t,r.children),t.flags|=4096,t)}function vh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nf(e.return,t,n)}function yc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function cv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ct(e,t,r.children,n),r=Pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vh(e,n,t);else if(e.tag===19)vh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Pe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yc(t,!0,n,null,a);break;case"together":yc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=cr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gb(e,t,n){switch(t.tag){case 3:lv(t),Di();break;case 5:z1(t);break;case 1:kt(t.type)&&sl(t);break;case 4:np(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(cl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Pe,Pe.current&1),t.flags|=128,null):n&t.child.childLanes?uv(e,t,n):(me(Pe,Pe.current&1),e=Tn(e,t,n),e!==null?e.sibling:null);me(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,ov(e,t,n)}return Tn(e,t,n)}var fv,Mf,dv,pv;fv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};dv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_r(gn.current);var a=null;switch(n){case"input":i=rf(e,i),r=rf(e,r),a=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),a=[];break;case"textarea":i=sf(e,i),r=sf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}uf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ka.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};pv=function(e,t,n,r){n!==r&&(t.flags|=4)};function ya(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vb(e,t,n){var r=t.pendingProps;switch(Qd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return kt(t.type)&&ol(),ot(t),null;case 3:return r=t.stateNode,Fi(),xe(St),xe(ut),ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,en!==null&&(Vf(en),en=null))),Mf(e,t),ot(t),null;case 5:rp(t);var i=_r(lo.current);if(n=t.type,e!==null&&t.stateNode!=null)dv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ot(t),null}if(e=_r(gn.current),ts(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[dn]=t,r[oo]=a,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Na.length;i++)he(Na[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":jm(r,a),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},he("invalid",r);break;case"textarea":Nm(r,a),he("invalid",r)}uf(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&es(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&es(r.textContent,s,e),i=["children",""+s]):Ka.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Go(r),Pm(r,a,!0);break;case"textarea":Go(r),Am(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=al)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=F0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[dn]=t,e[oo]=r,fv(e,t,!1,!1),t.stateNode=e;e:{switch(o=cf(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<Na.length;i++)he(Na[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":jm(e,r),i=rf(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),he("invalid",e);break;case"textarea":Nm(e,r),i=sf(e,r),he("invalid",e);break;default:i=r}uf(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?H0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&U0(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ja(e,l):typeof l=="number"&&Ja(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ka.hasOwnProperty(a)?l!=null&&a==="onScroll"&&he("scroll",e):l!=null&&_d(e,a,l,o))}switch(n){case"input":Go(e),Pm(e,r,!1);break;case"textarea":Go(e),Am(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ji(e,!!r.multiple,a,!1):r.defaultValue!=null&&ji(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)pv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=_r(lo.current),_r(gn.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(a=r.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return ot(t),null;case 13:if(xe(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Pt!==null&&t.mode&1&&!(t.flags&128))O1(),Di(),t.flags|=98560,a=!1;else if(a=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[dn]=t}else Di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),a=!1}else en!==null&&(Vf(en),en=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?We===0&&(We=3):gp())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Fi(),Mf(e,t),e===null&&io(t.stateNode.containerInfo),ot(t),null;case 10:return Zd(t.type._context),ot(t),null;case 17:return kt(t.type)&&ol(),ot(t),null;case 19:if(xe(Pe),a=t.memoizedState,a===null)return ot(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)ya(a,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pl(e),o!==null){for(t.flags|=128,ya(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Pe,Pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ze()>Bi&&(t.flags|=128,r=!0,ya(a,!1),t.lanes=4194304)}else{if(!r)if(e=pl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ya(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(t),null}else 2*ze()-a.renderingStartTime>Bi&&n!==1073741824&&(t.flags|=128,r=!0,ya(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ze(),t.sibling=null,n=Pe.current,me(Pe,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return hp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function yb(e,t){switch(Qd(t),t.tag){case 1:return kt(t.type)&&ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(),xe(St),xe(ut),ip(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rp(t),null;case 13:if(xe(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Pe),null;case 4:return Fi(),null;case 10:return Zd(t.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var is=!1,lt=!1,xb=typeof WeakSet=="function"?WeakSet:Set,M=null;function yi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function zf(e,t,n){try{n()}catch(r){Le(e,t,r)}}var yh=!1;function wb(e,t){if(wf=nl,e=v1(),Yd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(s=o),p===a&&++c===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:e,selectionRange:n},nl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,b=h.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Jt(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(x){Le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return h=yh,yh=!1,h}function Fa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&zf(t,n,a)}i=i.next}while(i!==r)}}function Wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Df(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mv(e){var t=e.alternate;t!==null&&(e.alternate=null,mv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[oo],delete t[Ef],delete t[nb],delete t[rb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hv(e){return e.tag===5||e.tag===3||e.tag===4}function xh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $f(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=al));else if(r!==4&&(e=e.child,e!==null))for($f(e,t,n),e=e.sibling;e!==null;)$f(e,t,n),e=e.sibling}function Ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}var Ze=null,Xt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)gv(e,t,n),n=n.sibling}function gv(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:lt||yi(n,t);case 6:var r=Ze,i=Xt;Ze=null,Vn(e,t,n),Ze=r,Xt=i,Ze!==null&&(Xt?(e=Ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Xt?(e=Ze,n=n.stateNode,e.nodeType===8?fc(e.parentNode,n):e.nodeType===1&&fc(e,n),to(e)):fc(Ze,n.stateNode));break;case 4:r=Ze,i=Xt,Ze=n.stateNode.containerInfo,Xt=!0,Vn(e,t,n),Ze=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&zf(n,t,o),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!lt&&(yi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Le(n,t,s)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Vn(e,t,n),lt=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function wh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xb),t.forEach(function(r){var i=Ab.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ze=s.stateNode,Xt=!1;break e;case 3:Ze=s.stateNode.containerInfo,Xt=!0;break e;case 4:Ze=s.stateNode.containerInfo,Xt=!0;break e}s=s.return}if(Ze===null)throw Error(R(160));gv(a,o,i),Ze=null,Xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vv(t,e),t=t.sibling}function vv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),un(e),r&4){try{Fa(3,e,e.return),Wl(3,e)}catch(y){Le(e,e.return,y)}try{Fa(5,e,e.return)}catch(y){Le(e,e.return,y)}}break;case 1:Kt(t,e),un(e),r&512&&n!==null&&yi(n,n.return);break;case 5:if(Kt(t,e),un(e),r&512&&n!==null&&yi(n,n.return),e.flags&32){var i=e.stateNode;try{Ja(i,"")}catch(y){Le(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&D0(i,a),cf(s,o);var u=cf(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?H0(i,d):c==="dangerouslySetInnerHTML"?U0(i,d):c==="children"?Ja(i,d):_d(i,c,d,u)}switch(s){case"input":af(i,a);break;case"textarea":$0(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?ji(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?ji(i,!!a.multiple,a.defaultValue,!0):ji(i,!!a.multiple,a.multiple?[]:"",!1))}i[oo]=a}catch(y){Le(e,e.return,y)}}break;case 6:if(Kt(t,e),un(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){Le(e,e.return,y)}}break;case 3:if(Kt(t,e),un(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{to(t.containerInfo)}catch(y){Le(e,e.return,y)}break;case 4:Kt(t,e),un(e);break;case 13:Kt(t,e),un(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(pp=ze())),r&4&&wh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||c,Kt(t,e),lt=u):Kt(t,e),un(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(d=M=c;M!==null;){switch(p=M,v=p.child,p.tag){case 0:case 11:case 14:case 15:Fa(4,p,p.return);break;case 1:yi(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Le(r,n,y)}}break;case 5:yi(p,p.return);break;case 22:if(p.memoizedState!==null){Sh(d);continue}}v!==null?(v.return=p,M=v):Sh(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=B0("display",o))}catch(y){Le(e,e.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Le(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),un(e),r&4&&wh(e);break;case 21:break;default:Kt(t,e),un(e)}}function un(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ja(i,""),r.flags&=-33);var a=xh(e);Ff(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=xh(e);$f(e,s,o);break;default:throw Error(R(161))}}catch(l){Le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bb(e,t,n){M=e,yv(e)}function yv(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||is;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||lt;s=is;var u=lt;if(is=o,(lt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?kh(i):l!==null?(l.return=o,M=l):kh(i);for(;a!==null;)M=a,yv(a),a=a.sibling;M=i,is=s,lt=u}bh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):bh(e)}}function bh(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ih(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ih(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&to(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}lt||t.flags&512&&Df(t)}catch(p){Le(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Sh(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function kh(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wl(4,t)}catch(l){Le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Le(t,i,l)}}var a=t.return;try{Df(t)}catch(l){Le(t,a,l)}break;case 5:var o=t.return;try{Df(t)}catch(l){Le(t,o,l)}}}catch(l){Le(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Sb=Math.ceil,gl=zn.ReactCurrentDispatcher,fp=zn.ReactCurrentOwner,Ut=zn.ReactCurrentBatchConfig,te=0,Je=null,Fe=null,et=0,jt=0,xi=kr(0),We=0,po=null,Yr=0,Gl=0,dp=0,Ua=null,yt=null,pp=0,Bi=1/0,bn=null,vl=!1,Uf=null,lr=null,as=!1,er=null,yl=0,Ba=0,Bf=null,As=-1,Os=0;function dt(){return te&6?ze():As!==-1?As:As=ze()}function ur(e){return e.mode&1?te&2&&et!==0?et&-et:ab.transition!==null?(Os===0&&(Os=t1()),Os):(e=se,e!==0||(e=window.event,e=e===void 0?16:l1(e.type)),e):1}function an(e,t,n,r){if(50<Ba)throw Ba=0,Bf=null,Error(R(185));Po(e,n,r),(!(te&2)||e!==Je)&&(e===Je&&(!(te&2)&&(Gl|=n),We===4&&Jn(e,et)),Et(e,r),n===1&&te===0&&!(t.mode&1)&&(Bi=ze()+500,Bl&&Er()))}function Et(e,t){var n=e.callbackNode;aw(e,t);var r=tl(e,e===Je?et:0);if(r===0)n!==null&&Tm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tm(n),t===1)e.tag===0?ib(Eh.bind(null,e)):P1(Eh.bind(null,e)),eb(function(){!(te&6)&&Er()}),n=null;else{switch(n1(r)){case 1:n=$d;break;case 4:n=Z0;break;case 16:n=el;break;case 536870912:n=e1;break;default:n=el}n=jv(n,xv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xv(e,t){if(As=-1,Os=0,te&6)throw Error(R(327));var n=e.callbackNode;if(Ri()&&e.callbackNode!==n)return null;var r=tl(e,e===Je?et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var i=te;te|=2;var a=bv();(Je!==e||et!==t)&&(bn=null,Bi=ze()+500,$r(e,t));do try{Cb();break}catch(s){wv(e,s)}while(1);Xd(),gl.current=a,te=i,Fe!==null?t=0:(Je=null,et=0,t=We)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(r=i,t=Hf(e,i))),t===1)throw n=po,$r(e,0),Jn(e,r),Et(e,ze()),n;if(t===6)Jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!kb(i)&&(t=xl(e,r),t===2&&(a=hf(e),a!==0&&(r=a,t=Hf(e,a))),t===1))throw n=po,$r(e,0),Jn(e,r),Et(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Ar(e,yt,bn);break;case 3:if(Jn(e,r),(r&130023424)===r&&(t=pp+500-ze(),10<t)){if(tl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kf(Ar.bind(null,e,yt,bn),t);break}Ar(e,yt,bn);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-rn(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sb(r/1960))-r,10<r){e.timeoutHandle=kf(Ar.bind(null,e,yt,bn),r);break}Ar(e,yt,bn);break;case 5:Ar(e,yt,bn);break;default:throw Error(R(329))}}}return Et(e,ze()),e.callbackNode===n?xv.bind(null,e):null}function Hf(e,t){var n=Ua;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=xl(e,t),e!==2&&(t=yt,yt=n,t!==null&&Vf(t)),e}function Vf(e){yt===null?yt=e:yt.push.apply(yt,e)}function kb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t){for(t&=~dp,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Eh(e){if(te&6)throw Error(R(327));Ri();var t=tl(e,0);if(!(t&1))return Et(e,ze()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=hf(e);r!==0&&(t=r,n=Hf(e,r))}if(n===1)throw n=po,$r(e,0),Jn(e,t),Et(e,ze()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,yt,bn),Et(e,ze()),null}function mp(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Bi=ze()+500,Bl&&Er())}}function qr(e){er!==null&&er.tag===0&&!(te&6)&&Ri();var t=te;te|=1;var n=Ut.transition,r=se;try{if(Ut.transition=null,se=1,e)return e()}finally{se=r,Ut.transition=n,te=t,!(te&6)&&Er()}}function hp(){jt=xi.current,xe(xi)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zw(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ol();break;case 3:Fi(),xe(St),xe(ut),ip();break;case 5:rp(r);break;case 4:Fi();break;case 13:xe(Pe);break;case 19:xe(Pe);break;case 10:Zd(r.type._context);break;case 22:case 23:hp()}n=n.return}if(Je=e,Fe=e=cr(e.current,null),et=jt=t,We=0,po=null,dp=Gl=Yr=0,yt=Ua=null,Lr!==null){for(t=0;t<Lr.length;t++)if(n=Lr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Lr=null}return e}function wv(e,t){do{var n=Fe;try{if(Xd(),js.current=hl,ml){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ml=!1}if(Gr=0,Qe=Ve=Oe=null,$a=!1,uo=0,fp.current=null,n===null||n.return===null){We=1,po=t,Fe=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=et,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=fh(o);if(v!==null){v.flags&=-257,dh(v,o,s,a,t),v.mode&1&&ch(a,u,t),t=v,l=u;var h=t.updateQueue;if(h===null){var y=new Set;y.add(l),t.updateQueue=y}else h.add(l);break e}else{if(!(t&1)){ch(a,u,t),gp();break e}l=Error(R(426))}}else if(Ee&&s.mode&1){var b=fh(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),dh(b,o,s,a,t),Kd(Ui(l,s));break e}}a=l=Ui(l,s),We!==4&&(We=2),Ua===null?Ua=[a]:Ua.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=rv(a,l,t);rh(a,g);break e;case 1:s=l;var m=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(lr===null||!lr.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=iv(a,s,t);rh(a,x);break e}}a=a.return}while(a!==null)}kv(n)}catch(S){t=S,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function bv(){var e=gl.current;return gl.current=hl,e===null?hl:e}function gp(){(We===0||We===3||We===2)&&(We=4),Je===null||!(Yr&268435455)&&!(Gl&268435455)||Jn(Je,et)}function xl(e,t){var n=te;te|=2;var r=bv();(Je!==e||et!==t)&&(bn=null,$r(e,t));do try{Eb();break}catch(i){wv(e,i)}while(1);if(Xd(),te=n,gl.current=r,Fe!==null)throw Error(R(261));return Je=null,et=0,We}function Eb(){for(;Fe!==null;)Sv(Fe)}function Cb(){for(;Fe!==null&&!Kx();)Sv(Fe)}function Sv(e){var t=Cv(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?kv(e):Fe=t,fp.current=null}function kv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yb(n,t),n!==null){n.flags&=32767,Fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Fe=null;return}}else if(n=vb(n,t,jt),n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);We===0&&(We=5)}function Ar(e,t,n){var r=se,i=Ut.transition;try{Ut.transition=null,se=1,jb(e,t,n,r)}finally{Ut.transition=i,se=r}return null}function jb(e,t,n,r){do Ri();while(er!==null);if(te&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(ow(e,a),e===Je&&(Fe=Je=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||as||(as=!0,jv(el,function(){return Ri(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ut.transition,Ut.transition=null;var o=se;se=1;var s=te;te|=4,fp.current=null,wb(e,n),vv(n,e),Gw(bf),nl=!!wf,bf=wf=null,e.current=n,bb(n),Jx(),te=s,se=o,Ut.transition=a}else e.current=n;if(as&&(as=!1,er=e,yl=i),a=e.pendingLanes,a===0&&(lr=null),ew(n.stateNode),Et(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,e=Uf,Uf=null,e;return yl&1&&e.tag!==0&&Ri(),a=e.pendingLanes,a&1?e===Bf?Ba++:(Ba=0,Bf=e):Ba=0,Er(),null}function Ri(){if(er!==null){var e=n1(yl),t=Ut.transition,n=se;try{if(Ut.transition=null,se=16>e?16:e,er===null)var r=!1;else{if(e=er,er=null,yl=0,te&6)throw Error(R(331));var i=te;for(te|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Fa(8,c,a)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var p=c.sibling,v=c.return;if(mv(c),c===u){M=null;break}if(p!==null){p.return=v,M=p;break}M=v}}}var h=a.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fa(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,M=g;break e}M=a.return}}var m=e.current;for(M=m;M!==null;){o=M;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,M=w;else e:for(o=m;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wl(9,s)}}catch(S){Le(s,s.return,S)}if(s===o){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(te=i,Er(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(zl,e)}catch{}r=!0}return r}finally{se=n,Ut.transition=t}}return!1}function Ch(e,t,n){t=Ui(n,t),t=rv(e,t,1),e=sr(e,t,1),t=dt(),e!==null&&(Po(e,1,t),Et(e,t))}function Le(e,t,n){if(e.tag===3)Ch(e,e,n);else for(;t!==null;){if(t.tag===3){Ch(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){e=Ui(n,e),e=iv(t,e,1),t=sr(t,e,1),e=dt(),t!==null&&(Po(t,1,e),Et(t,e));break}}t=t.return}}function Pb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=dt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(et&n)===n&&(We===4||We===3&&(et&130023424)===et&&500>ze()-pp?$r(e,0):dp|=n),Et(e,t)}function Ev(e,t){t===0&&(e.mode&1?(t=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):t=1);var n=dt();e=Rn(e,t),e!==null&&(Po(e,t,n),Et(e,n))}function Nb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ev(e,n)}function Ab(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Ev(e,n)}var Cv;Cv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)xt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xt=!1,gb(e,t,n);xt=!!(e.flags&131072)}else xt=!1,Ee&&t.flags&1048576&&N1(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ns(e,t),e=t.pendingProps;var i=zi(t,ut.current);Oi(t,n),i=op(null,t,r,e,i,n);var a=sp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(a=!0,sl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tp(t),i.updater=Hl,t.stateNode=i,i._reactInternals=t,Of(t,r,e,n),t=Lf(null,t,r,!0,a,n)):(t.tag=0,Ee&&a&&qd(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rb(r),e=Jt(r,e),i){case 0:t=Tf(null,t,r,e,n);break e;case 1:t=hh(null,t,r,e,n);break e;case 11:t=ph(null,t,r,e,n);break e;case 14:t=mh(null,t,r,Jt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Tf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),hh(e,t,r,i,n);case 3:e:{if(lv(t),e===null)throw Error(R(387));r=t.pendingProps,a=t.memoizedState,i=a.element,T1(e,t),dl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ui(Error(R(423)),t),t=gh(e,t,r,n,i);break e}else if(r!==i){i=Ui(Error(R(424)),t),t=gh(e,t,r,n,i);break e}else for(Pt=or(t.stateNode.containerInfo.firstChild),At=t,Ee=!0,en=null,n=M1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){t=Tn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return z1(t),e===null&&Pf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Sf(r,i)?o=null:a!==null&&Sf(r,a)&&(t.flags|=32),sv(e,t),ct(e,t,o,n),t.child;case 6:return e===null&&Pf(t),null;case 13:return uv(e,t,n);case 4:return np(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$i(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),ph(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,me(cl,r._currentValue),r._currentValue=o,a!==null)if(sn(a.value,o)){if(a.children===i.children&&!St.current){t=Tn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=jn(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Nf(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(R(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Nf(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Oi(t,n),i=Ht(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),mh(e,t,r,i,n);case 15:return av(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ns(e,t),t.tag=1,kt(r)?(e=!0,sl(t)):e=!1,Oi(t,n),_1(t,r,i),Of(t,r,i,n),Lf(null,t,r,!0,e,n);case 19:return cv(e,t,n);case 22:return ov(e,t,n)}throw Error(R(156,t.tag))};function jv(e,t){return X0(e,t)}function Ob(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new Ob(e,t,n,r)}function vp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rb(e){if(typeof e=="function")return vp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Md)return 11;if(e===zd)return 14}return 2}function cr(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rs(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")vp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ui:return Fr(n.children,i,a,t);case Id:o=8,i|=8;break;case Zc:return e=Ft(12,n,t,i|2),e.elementType=Zc,e.lanes=a,e;case ef:return e=Ft(13,n,t,i),e.elementType=ef,e.lanes=a,e;case tf:return e=Ft(19,n,t,i),e.elementType=tf,e.lanes=a,e;case I0:return Yl(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L0:o=10;break e;case _0:o=9;break e;case Md:o=11;break e;case zd:o=14;break e;case qn:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ft(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Fr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Yl(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=I0,e.lanes=n,e.stateNode={isHidden:!1},e}function xc(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function wc(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yp(e,t,n,r,i,a,o,s,l){return e=new Tb(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(a),e}function Lb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:li,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pv(e){if(!e)return hr;e=e._reactInternals;e:{if(ti(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(kt(n))return j1(e,n,t)}return t}function Nv(e,t,n,r,i,a,o,s,l){return e=yp(n,r,!0,e,i,a,o,s,l),e.context=Pv(null),n=e.current,r=dt(),i=ur(n),a=jn(r,i),a.callback=t??null,sr(n,a,i),e.current.lanes=i,Po(e,i,r),Et(e,r),e}function ql(e,t,n,r){var i=t.current,a=dt(),o=ur(i);return n=Pv(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sr(i,t,o),e!==null&&(an(e,i,o,a),Cs(e,i,o)),o}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xp(e,t){jh(e,t),(e=e.alternate)&&jh(e,t)}function _b(){return null}var Av=typeof reportError=="function"?reportError:function(e){console.error(e)};function wp(e){this._internalRoot=e}Ql.prototype.render=wp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ql(e,t,null,null)};Ql.prototype.unmount=wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qr(function(){ql(null,e,null,null)}),t[On]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=a1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&s1(e)}};function bp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ph(){}function Ib(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=wl(o);a.call(u)}}var o=Nv(t,r,e,0,null,!1,!1,"",Ph);return e._reactRootContainer=o,e[On]=o.current,io(e.nodeType===8?e.parentNode:e),qr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=wl(l);s.call(u)}}var l=yp(e,0,!1,null,null,!1,!1,"",Ph);return e._reactRootContainer=l,e[On]=l.current,io(e.nodeType===8?e.parentNode:e),qr(function(){ql(t,l,n,r)}),l}function Jl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=wl(o);s.call(l)}}ql(t,o,e,i)}else o=Ib(n,t,e,i,r);return wl(o)}r1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pa(t.pendingLanes);n!==0&&(Fd(t,n|1),Et(t,ze()),!(te&6)&&(Bi=ze()+500,Er()))}break;case 13:qr(function(){var r=Rn(e,1);if(r!==null){var i=dt();an(r,e,1,i)}}),xp(e,1)}};Ud=function(e){if(e.tag===13){var t=Rn(e,134217728);if(t!==null){var n=dt();an(t,e,134217728,n)}xp(e,134217728)}};i1=function(e){if(e.tag===13){var t=ur(e),n=Rn(e,t);if(n!==null){var r=dt();an(n,e,t,r)}xp(e,t)}};a1=function(){return se};o1=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};df=function(e,t,n){switch(t){case"input":if(af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ul(r);if(!i)throw Error(R(90));z0(r),af(r,i)}}}break;case"textarea":$0(e,n);break;case"select":t=n.value,t!=null&&ji(e,!!n.multiple,t,!1)}};G0=mp;Y0=qr;var Mb={usingClientEntryPoint:!1,Events:[Ao,pi,Ul,V0,W0,mp]},xa={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zb={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=K0(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||_b,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!os.isDisabled&&os.supportsFiber)try{zl=os.inject(zb),hn=os}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mb;Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(t))throw Error(R(200));return Lb(e,t,null,n)};Tt.createRoot=function(e,t){if(!bp(e))throw Error(R(299));var n=!1,r="",i=Av;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yp(e,1,!1,null,null,n,!1,r,i),e[On]=t.current,io(e.nodeType===8?e.parentNode:e),new wp(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=K0(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return qr(e)};Tt.hydrate=function(e,t,n){if(!Kl(t))throw Error(R(200));return Jl(null,e,t,!0,n)};Tt.hydrateRoot=function(e,t,n){if(!bp(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Nv(t,null,e,1,n??null,i,!1,a,o),e[On]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ql(t)};Tt.render=function(e,t,n){if(!Kl(t))throw Error(R(200));return Jl(null,e,t,!1,n)};Tt.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(R(40));return e._reactRootContainer?(qr(function(){Jl(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Tt.unstable_batchedUpdates=mp;Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Jl(e,t,n,!1,r)};Tt.version="18.2.0-next-9e3b772b8-20220608";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(e){console.error(e)}}Ov(),N0.exports=Tt;var Rv=N0.exports,Nh=Rv;Jc.createRoot=Nh.createRoot,Jc.hydrateRoot=Nh.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function je(){return je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}var De;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(De||(De={}));const Ah="popstate";function Db(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return mo("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qr(i)}return Fb(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $b(){return Math.random().toString(36).substr(2,8)}function Oh(e,t){return{usr:e.state,key:e.key,idx:t}}function mo(e,t,n,r){return n===void 0&&(n=null),je({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dn(t):t,{state:n,key:t&&t.key||r||$b()})}function Qr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=De.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(je({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=De.Pop;let b=c(),g=b==null?null:b-u;u=b,l&&l({action:s,location:y.location,delta:g})}function p(b,g){s=De.Push;let m=mo(y.location,b,g);n&&n(m,b),u=c()+1;let w=Oh(m,u),x=y.createHref(m);try{o.pushState(w,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}a&&l&&l({action:s,location:y.location,delta:1})}function v(b,g){s=De.Replace;let m=mo(y.location,b,g);n&&n(m,b),u=c();let w=Oh(m,u),x=y.createHref(m);o.replaceState(w,"",x),a&&l&&l({action:s,location:y.location,delta:0})}function h(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof b=="string"?b:Qr(b);return Q(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return s},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ah,d),l=b,()=>{i.removeEventListener(Ah,d),l=null}},createHref(b){return t(i,b)},createURL:h,encodeLocation(b){let g=h(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:v,go(b){return o.go(b)}};return y}var Me;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Me||(Me={}));const Ub=new Set(["lazy","caseSensitive","path","id","index","children"]);function Bb(e){return e.index===!0}function Wf(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(Q(i.index!==!0||!i.children,"Cannot specify children on an index route"),Q(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Bb(i)){let l=je({},i,t(i),{id:s});return r[s]=l,l}else{let l=je({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Wf(i.children,t,o,r)),l}})}function wi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Dn(t):t,i=ra(r.pathname||"/",n);if(i==null)return null;let a=Tv(e);Vb(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=Zb(a[s],n4(i));return o}function Hb(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Tv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Q(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pn([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(Q(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tv(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Jb(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Lv(a.path))i(a,o,l)}),t}function Lv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Lv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Vb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wb=/^:\w+$/,Gb=3,Yb=2,qb=1,Qb=10,Kb=-2,Rh=e=>e==="*";function Jb(e,t){let n=e.split("/"),r=n.length;return n.some(Rh)&&(r+=Kb),t&&(r+=Yb),n.filter(i=>!Rh(i)).reduce((i,a)=>i+(Wb.test(a)?Gb:a===""?qb:Qb),r)}function Xb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zb(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=e4({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;a.push({params:r,pathname:Pn([i,c.pathname]),pathnameBase:o4(Pn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Pn([i,c.pathnameBase]))}return a}function e4(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=t4(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=s[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=r4(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function t4(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function n4(e){try{return decodeURI(e)}catch(t){return Hi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function r4(e,t){try{return decodeURIComponent(e)}catch(n){return Hi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ra(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function i4(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dn(e):e;return{pathname:n?n.startsWith("/")?n:a4(n,t):t,search:s4(r),hash:l4(i)}}function a4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ro(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dn(e):(i=je({},e),Q(!i.pathname||!i.pathname.includes("?"),bc("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),bc("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),bc("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=i4(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Pn=e=>e.join("/").replace(/\/\/+/g,"/"),o4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,l4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Sp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function _v(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Iv=["post","put","patch","delete"],u4=new Set(Iv),c4=["get",...Iv],f4=new Set(c4),d4=new Set([301,302,303,307,308]),p4=new Set([307,308]),Sc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},m4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h4=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function g4(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;i=j=>({hasErrorBoundary:E(j)})}else i=h4;let a={},o=Wf(e.routes,i,void 0,a),s,l=e.basename||"/",u=je({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),c=null,d=new Set,p=null,v=null,h=null,y=e.hydrationData!=null,b=wi(o,e.history.location,l),g=null;if(b==null){let E=Mt(404,{pathname:e.history.location.pathname}),{matches:j,route:A}=$h(o);b=j,g={[A.id]:E}}let m=!b.some(E=>E.route.lazy)&&(!b.some(E=>E.route.loader)||e.hydrationData!=null),w,x={historyAction:e.history.action,location:e.history.location,matches:b,initialized:m,navigation:Sc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},S=De.Pop,P=!1,C,O=!1,z=!1,L=[],Z=[],G=new Map,Te=0,be=-1,qe=new Map,ie=new Set,oe=new Map,T=new Map,D=new Map,U=!1;function pe(){return c=e.history.listen(E=>{let{action:j,location:A,delta:I}=E;if(U){U=!1;return}Hi(D.size===0||I!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=gm({currentLocation:x.location,nextLocation:A,historyAction:j});if(V&&I!=null){U=!0,e.history.go(I*-1),Bo(V,{state:"blocked",location:A,proceed(){Bo(V,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),e.history.go(I)},reset(){let H=new Map(x.blockers);H.set(V,wa),ne({blockers:H})}});return}return qt(j,A)}),x.initialized||qt(De.Pop,x.location),w}function Se(){c&&c(),d.clear(),C&&C.abort(),x.fetchers.forEach((E,j)=>Bu(j)),x.blockers.forEach((E,j)=>hm(j))}function Yt(E){return d.add(E),()=>d.delete(E)}function ne(E){x=je({},x,E),d.forEach(j=>j(x))}function gt(E,j){var A,I;let V=x.actionData!=null&&x.navigation.formMethod!=null&&Zt(x.navigation.formMethod)&&x.navigation.state==="loading"&&((A=E.state)==null?void 0:A._isRedirect)!==!0,H;j.actionData?Object.keys(j.actionData).length>0?H=j.actionData:H=null:V?H=x.actionData:H=null;let W=j.loaderData?Dh(x.loaderData,j.loaderData,j.matches||[],j.errors):x.loaderData,B=x.blockers;B.size>0&&(B=new Map(B),B.forEach((Ce,it)=>B.set(it,wa)));let F=P===!0||x.navigation.formMethod!=null&&Zt(x.navigation.formMethod)&&((I=E.state)==null?void 0:I._isRedirect)!==!0;s&&(o=s,s=void 0),O||S===De.Pop||(S===De.Push?e.history.push(E,E.state):S===De.Replace&&e.history.replace(E,E.state)),ne(je({},j,{actionData:H,loaderData:W,historyAction:S,location:E,initialized:!0,navigation:Sc,revalidation:"idle",restoreScrollPosition:ym(E,j.matches||x.matches),preventScrollReset:F,blockers:B})),S=De.Pop,P=!1,O=!1,z=!1,L=[],Z=[]}async function rt(E,j){if(typeof E=="number"){e.history.go(E);return}let A=Gf(x.location,x.matches,l,u.v7_prependBasename,E,j==null?void 0:j.fromRouteId,j==null?void 0:j.relative),{path:I,submission:V,error:H}=Th(u.v7_normalizeFormMethod,!1,A,j),W=x.location,B=mo(x.location,I,j&&j.state);B=je({},B,e.history.encodeLocation(B));let F=j&&j.replace!=null?j.replace:void 0,Ce=De.Push;F===!0?Ce=De.Replace:F===!1||V!=null&&Zt(V.formMethod)&&V.formAction===x.location.pathname+x.location.search&&(Ce=De.Replace);let it=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,re=gm({currentLocation:W,nextLocation:B,historyAction:Ce});if(re){Bo(re,{state:"blocked",location:B,proceed(){Bo(re,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),rt(E,j)},reset(){let de=new Map(x.blockers);de.set(re,wa),ne({blockers:de})}});return}return await qt(Ce,B,{submission:V,pendingError:H,preventScrollReset:it,replace:j&&j.replace})}function vt(){if(Uu(),ne({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){qt(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}qt(S||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function qt(E,j,A){C&&C.abort(),C=null,S=E,O=(A&&A.startUninterruptedRevalidation)===!0,ux(x.location,x.matches),P=(A&&A.preventScrollReset)===!0;let I=s||o,V=A&&A.overrideNavigation,H=wi(I,j,l);if(!H){let de=Mt(404,{pathname:j.pathname}),{matches:Ie,route:jr}=$h(I);Hu(),gt(j,{matches:Ie,loaderData:{},errors:{[jr.id]:de}});return}if(x.initialized&&!z&&b4(x.location,j)&&!(A&&A.submission&&Zt(A.submission.formMethod))){gt(j,{matches:H});return}C=new AbortController;let W=Sa(e.history,j,C.signal,A&&A.submission),B,F;if(A&&A.pendingError)F={[bi(H).route.id]:A.pendingError};else if(A&&A.submission&&Zt(A.submission.formMethod)){let de=await ii(W,j,A.submission,H,{replace:A.replace});if(de.shortCircuited)return;B=de.pendingActionData,F=de.pendingActionError,V=kc(j,A.submission),W=new Request(W.url,{signal:W.signal})}let{shortCircuited:Ce,loaderData:it,errors:re}=await ln(W,j,H,V,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,B,F);Ce||(C=null,gt(j,je({matches:H},B?{actionData:B}:{},{loaderData:it,errors:re})))}async function ii(E,j,A,I,V){V===void 0&&(V={}),Uu();let H=C4(j,A);ne({navigation:H});let W,B=qf(I,j);if(!B.route.action&&!B.route.lazy)W={type:Me.error,error:Mt(405,{method:E.method,pathname:j.pathname,routeId:B.route.id})};else if(W=await ba("action",E,B,I,a,i,l),E.signal.aborted)return{shortCircuited:!0};if(Ti(W)){let F;return V&&V.replace!=null?F=V.replace:F=W.location===x.location.pathname+x.location.search,await ua(x,W,{submission:A,replace:F}),{shortCircuited:!0}}if(Ha(W)){let F=bi(I,B.route.id);return(V&&V.replace)!==!0&&(S=De.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(Ir(W))throw Mt(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:W.data}}}async function ln(E,j,A,I,V,H,W,B,F){let Ce=I||kc(j,V),it=V||H||Bh(Ce),re=s||o,[de,Ie]=Lh(e.history,x,A,it,j,z,L,Z,oe,ie,re,l,B,F);if(Hu(ue=>!(A&&A.some(Qt=>Qt.route.id===ue))||de&&de.some(Qt=>Qt.route.id===ue)),be=++Te,de.length===0&&Ie.length===0){let ue=pm();return gt(j,je({matches:A,loaderData:{},errors:F||null},B?{actionData:B}:{},ue?{fetchers:new Map(x.fetchers)}:{})),{shortCircuited:!0}}if(!O){Ie.forEach(Qt=>{let Hn=x.fetchers.get(Qt.key),qu=ka(void 0,Hn?Hn.data:void 0);x.fetchers.set(Qt.key,qu)});let ue=B||x.actionData;ne(je({navigation:Ce},ue?Object.keys(ue).length===0?{actionData:null}:{actionData:ue}:{},Ie.length>0?{fetchers:new Map(x.fetchers)}:{}))}Ie.forEach(ue=>{G.has(ue.key)&&Bn(ue.key),ue.controller&&G.set(ue.key,ue.controller)});let jr=()=>Ie.forEach(ue=>Bn(ue.key));C&&C.signal.addEventListener("abort",jr);let{results:Pr,loaderResults:ca,fetcherResults:Vu}=await fm(x.matches,A,de,Ie,E);if(E.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",jr),Ie.forEach(ue=>G.delete(ue.key));let xn=Fh(Pr);if(xn){if(xn.idx>=de.length){let ue=Ie[xn.idx-de.length].key;ie.add(ue)}return await ua(x,xn.result,{replace:W}),{shortCircuited:!0}}let{loaderData:wn,errors:Ho}=zh(x,A,de,ca,F,Ie,Vu,T);T.forEach((ue,Qt)=>{ue.subscribe(Hn=>{(Hn||ue.done)&&T.delete(Qt)})});let Wu=pm(),Gu=mm(be),Yu=Wu||Gu||Ie.length>0;return je({loaderData:wn,errors:Ho},Yu?{fetchers:new Map(x.fetchers)}:{})}function cm(E){return x.fetchers.get(E)||m4}function ix(E,j,A,I){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");G.has(E)&&Bn(E);let V=s||o,H=Gf(x.location,x.matches,l,u.v7_prependBasename,A,j,I==null?void 0:I.relative),W=wi(V,H,l);if(!W){Uo(E,j,Mt(404,{pathname:H}));return}let{path:B,submission:F,error:Ce}=Th(u.v7_normalizeFormMethod,!0,H,I);if(Ce){Uo(E,j,Ce);return}let it=qf(W,B);if(P=(I&&I.preventScrollReset)===!0,F&&Zt(F.formMethod)){ax(E,j,B,it,W,F);return}oe.set(E,{routeId:j,path:B}),ox(E,j,B,it,W,F)}async function ax(E,j,A,I,V,H){if(Uu(),oe.delete(E),!I.route.action&&!I.route.lazy){let He=Mt(405,{method:H.formMethod,pathname:A,routeId:j});Uo(E,j,He);return}let W=x.fetchers.get(E),B=j4(H,W);x.fetchers.set(E,B),ne({fetchers:new Map(x.fetchers)});let F=new AbortController,Ce=Sa(e.history,A,F.signal,H);G.set(E,F);let it=Te,re=await ba("action",Ce,I,V,a,i,l);if(Ce.signal.aborted){G.get(E)===F&&G.delete(E);return}if(Ti(re))if(G.delete(E),be>it){let He=si(void 0);x.fetchers.set(E,He),ne({fetchers:new Map(x.fetchers)});return}else{ie.add(E);let He=ka(H);return x.fetchers.set(E,He),ne({fetchers:new Map(x.fetchers)}),ua(x,re,{fetcherSubmission:H})}if(Ha(re)){Uo(E,j,re.error);return}if(Ir(re))throw Mt(400,{type:"defer-action"});let de=x.navigation.location||x.location,Ie=Sa(e.history,de,F.signal),jr=s||o,Pr=x.navigation.state!=="idle"?wi(jr,x.navigation.location,l):x.matches;Q(Pr,"Didn't find any matches after fetcher action");let ca=++Te;qe.set(E,ca);let Vu=ka(H,re.data);x.fetchers.set(E,Vu);let[xn,wn]=Lh(e.history,x,Pr,H,de,z,L,Z,oe,ie,jr,l,{[I.route.id]:re.data},void 0);wn.filter(He=>He.key!==E).forEach(He=>{let fa=He.key,xm=x.fetchers.get(fa),fx=ka(void 0,xm?xm.data:void 0);x.fetchers.set(fa,fx),G.has(fa)&&Bn(fa),He.controller&&G.set(fa,He.controller)}),ne({fetchers:new Map(x.fetchers)});let Ho=()=>wn.forEach(He=>Bn(He.key));F.signal.addEventListener("abort",Ho);let{results:Wu,loaderResults:Gu,fetcherResults:Yu}=await fm(x.matches,Pr,xn,wn,Ie);if(F.signal.aborted)return;F.signal.removeEventListener("abort",Ho),qe.delete(E),G.delete(E),wn.forEach(He=>G.delete(He.key));let ue=Fh(Wu);if(ue){if(ue.idx>=xn.length){let He=wn[ue.idx-xn.length].key;ie.add(He)}return ua(x,ue.result)}let{loaderData:Qt,errors:Hn}=zh(x,x.matches,xn,Gu,void 0,wn,Yu,T);if(x.fetchers.has(E)){let He=si(re.data);x.fetchers.set(E,He)}let qu=mm(ca);x.navigation.state==="loading"&&ca>be?(Q(S,"Expected pending action"),C&&C.abort(),gt(x.navigation.location,{matches:Pr,loaderData:Qt,errors:Hn,fetchers:new Map(x.fetchers)})):(ne(je({errors:Hn,loaderData:Dh(x.loaderData,Qt,Pr,Hn)},qu||wn.length>0?{fetchers:new Map(x.fetchers)}:{})),z=!1)}async function ox(E,j,A,I,V,H){let W=x.fetchers.get(E),B=ka(H,W?W.data:void 0);x.fetchers.set(E,B),ne({fetchers:new Map(x.fetchers)});let F=new AbortController,Ce=Sa(e.history,A,F.signal);G.set(E,F);let it=Te,re=await ba("loader",Ce,I,V,a,i,l);if(Ir(re)&&(re=await $v(re,Ce.signal,!0)||re),G.get(E)===F&&G.delete(E),Ce.signal.aborted)return;if(Ti(re))if(be>it){let Ie=si(void 0);x.fetchers.set(E,Ie),ne({fetchers:new Map(x.fetchers)});return}else{ie.add(E),await ua(x,re);return}if(Ha(re)){let Ie=bi(x.matches,j);x.fetchers.delete(E),ne({fetchers:new Map(x.fetchers),errors:{[Ie.route.id]:re.error}});return}Q(!Ir(re),"Unhandled fetcher deferred data");let de=si(re.data);x.fetchers.set(E,de),ne({fetchers:new Map(x.fetchers)})}async function ua(E,j,A){let{submission:I,fetcherSubmission:V,replace:H}=A===void 0?{}:A;j.revalidate&&(z=!0);let W=mo(E.location,j.location,{_isRedirect:!0});if(Q(W,"Expected a location on the redirect navigation"),n){let de=!1;if(j.reloadDocument)de=!0;else if(Mv.test(j.location)){const Ie=e.history.createURL(j.location);de=Ie.origin!==t.location.origin||ra(Ie.pathname,l)==null}if(de){H?t.location.replace(j.location):t.location.assign(j.location);return}}C=null;let B=H===!0?De.Replace:De.Push,{formMethod:F,formAction:Ce,formEncType:it}=E.navigation;!I&&!V&&F&&Ce&&it&&(I=Bh(E.navigation));let re=I||V;if(p4.has(j.status)&&re&&Zt(re.formMethod))await qt(B,W,{submission:je({},re,{formAction:j.location}),preventScrollReset:P});else{let de=kc(W,I);await qt(B,W,{overrideNavigation:de,fetcherSubmission:V,preventScrollReset:P})}}async function fm(E,j,A,I,V){let H=await Promise.all([...A.map(F=>ba("loader",V,F,j,a,i,l)),...I.map(F=>F.matches&&F.match&&F.controller?ba("loader",Sa(e.history,F.path,F.controller.signal),F.match,F.matches,a,i,l):{type:Me.error,error:Mt(404,{pathname:F.path})})]),W=H.slice(0,A.length),B=H.slice(A.length);return await Promise.all([Uh(E,A,W,W.map(()=>V.signal),!1,x.loaderData),Uh(E,I.map(F=>F.match),B,I.map(F=>F.controller?F.controller.signal:null),!0)]),{results:H,loaderResults:W,fetcherResults:B}}function Uu(){z=!0,L.push(...Hu()),oe.forEach((E,j)=>{G.has(j)&&(Z.push(j),Bn(j))})}function Uo(E,j,A){let I=bi(x.matches,j);Bu(E),ne({errors:{[I.route.id]:A},fetchers:new Map(x.fetchers)})}function Bu(E){let j=x.fetchers.get(E);G.has(E)&&!(j&&j.state==="loading"&&qe.has(E))&&Bn(E),oe.delete(E),qe.delete(E),ie.delete(E),x.fetchers.delete(E)}function Bn(E){let j=G.get(E);Q(j,"Expected fetch controller: "+E),j.abort(),G.delete(E)}function dm(E){for(let j of E){let A=cm(j),I=si(A.data);x.fetchers.set(j,I)}}function pm(){let E=[],j=!1;for(let A of ie){let I=x.fetchers.get(A);Q(I,"Expected fetcher: "+A),I.state==="loading"&&(ie.delete(A),E.push(A),j=!0)}return dm(E),j}function mm(E){let j=[];for(let[A,I]of qe)if(I<E){let V=x.fetchers.get(A);Q(V,"Expected fetcher: "+A),V.state==="loading"&&(Bn(A),qe.delete(A),j.push(A))}return dm(j),j.length>0}function sx(E,j){let A=x.blockers.get(E)||wa;return D.get(E)!==j&&D.set(E,j),A}function hm(E){x.blockers.delete(E),D.delete(E)}function Bo(E,j){let A=x.blockers.get(E)||wa;Q(A.state==="unblocked"&&j.state==="blocked"||A.state==="blocked"&&j.state==="blocked"||A.state==="blocked"&&j.state==="proceeding"||A.state==="blocked"&&j.state==="unblocked"||A.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+j.state);let I=new Map(x.blockers);I.set(E,j),ne({blockers:I})}function gm(E){let{currentLocation:j,nextLocation:A,historyAction:I}=E;if(D.size===0)return;D.size>1&&Hi(!1,"A router only supports one blocker at a time");let V=Array.from(D.entries()),[H,W]=V[V.length-1],B=x.blockers.get(H);if(!(B&&B.state==="proceeding")&&W({currentLocation:j,nextLocation:A,historyAction:I}))return H}function Hu(E){let j=[];return T.forEach((A,I)=>{(!E||E(I))&&(A.cancel(),j.push(I),T.delete(I))}),j}function lx(E,j,A){if(p=E,h=j,v=A||null,!y&&x.navigation===Sc){y=!0;let I=ym(x.location,x.matches);I!=null&&ne({restoreScrollPosition:I})}return()=>{p=null,h=null,v=null}}function vm(E,j){return v&&v(E,j.map(I=>Hb(I,x.loaderData)))||E.key}function ux(E,j){if(p&&h){let A=vm(E,j);p[A]=h()}}function ym(E,j){if(p){let A=vm(E,j),I=p[A];if(typeof I=="number")return I}return null}function cx(E){a={},s=Wf(E,i,void 0,a)}return w={get basename(){return l},get state(){return x},get routes(){return o},initialize:pe,subscribe:Yt,enableScrollRestoration:lx,navigate:rt,fetch:ix,revalidate:vt,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:cm,deleteFetcher:Bu,dispose:Se,getBlocker:sx,deleteBlocker:hm,_internalFetchControllers:G,_internalActiveDeferreds:T,_internalSetRoutes:cx},w}function v4(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Gf(e,t,n,r,i,a,o){let s,l;if(a!=null&&o!=="path"){s=[];for(let c of t)if(s.push(c),c.route.id===a){l=c;break}}else s=t,l=t[t.length-1];let u=Xl(i||".",Ro(s).map(c=>c.pathnameBase),ra(e.pathname,n)||e.pathname,o==="path");return i==null&&(u.search=e.search,u.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!kp(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Pn([n,u.pathname])),Qr(u)}function Th(e,t,n,r){if(!r||!v4(r))return{path:n};if(r.formMethod&&!E4(r.formMethod))return{path:n,error:Mt(405,{method:r.formMethod})};let i=()=>({path:n,error:Mt(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),s=Dv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Zt(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,h)=>{let[y,b]=h;return""+v+y+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Zt(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}Q(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Yf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Yf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Mh(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Mh(l)}catch{return i()}let c={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Zt(c.formMethod))return{path:n,submission:c};let d=Dn(n);return t&&d.search&&kp(d.search)&&l.append("index",""),d.search="?"+l,{path:Qr(d),submission:c}}function y4(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Lh(e,t,n,r,i,a,o,s,l,u,c,d,p,v){let h=v?Object.values(v)[0]:p?Object.values(p)[0]:void 0,y=e.createURL(t.location),b=e.createURL(i),g=v?Object.keys(v)[0]:void 0,w=y4(n,g).filter((S,P)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(x4(t.loaderData,t.matches[P],S)||o.some(z=>z===S.route.id))return!0;let C=t.matches[P],O=S;return _h(S,je({currentUrl:y,currentParams:C.params,nextUrl:b,nextParams:O.params},r,{actionResult:h,defaultShouldRevalidate:a||y.pathname+y.search===b.pathname+b.search||y.search!==b.search||zv(C,O)}))}),x=[];return l.forEach((S,P)=>{if(!n.some(Z=>Z.route.id===S.routeId))return;let C=wi(c,S.path,d);if(!C){x.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(P),z=qf(C,S.path),L=!1;u.has(P)?L=!1:s.includes(P)?L=!0:O&&O.state!=="idle"&&O.data===void 0?L=a:L=_h(z,je({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:h,defaultShouldRevalidate:a})),L&&x.push({key:P,routeId:S.routeId,path:S.path,matches:C,match:z,controller:new AbortController})}),[w,x]}function x4(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function zv(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function _h(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Ih(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Q(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Hi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Ub.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,je({},t(i),{lazy:void 0}))}async function ba(e,t,n,r,i,a,o,s){s===void 0&&(s={});let l,u,c,d=h=>{let y,b=new Promise((g,m)=>y=m);return c=()=>y(),t.signal.addEventListener("abort",c),Promise.race([h({request:t,params:n.params,context:s.requestContext}),b])};try{let h=n.route[e];if(n.route.lazy)if(h){let y,b=await Promise.all([d(h).catch(g=>{y=g}),Ih(n.route,a,i)]);if(y)throw y;u=b[0]}else if(await Ih(n.route,a,i),h=n.route[e],h)u=await d(h);else if(e==="action"){let y=new URL(t.url),b=y.pathname+y.search;throw Mt(405,{method:t.method,pathname:b,routeId:n.route.id})}else return{type:Me.data,data:void 0};else if(h)u=await d(h);else{let y=new URL(t.url),b=y.pathname+y.search;throw Mt(404,{pathname:b})}Q(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(h){l=Me.error,u=h}finally{c&&t.signal.removeEventListener("abort",c)}if(k4(u)){let h=u.status;if(d4.has(h)){let g=u.headers.get("Location");if(Q(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!Mv.test(g))g=Gf(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!s.isStaticRequest){let m=new URL(t.url),w=g.startsWith("//")?new URL(m.protocol+g):new URL(g),x=ra(w.pathname,o)!=null;w.origin===m.origin&&x&&(g=w.pathname+w.search+w.hash)}if(s.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Me.redirect,status:h,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===Me.error?Me.error:Me.data,response:u};let y,b=u.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?y=await u.json():y=await u.text(),l===Me.error?{type:l,error:new Sp(h,u.statusText,y),headers:u.headers}:{type:Me.data,data:y,statusCode:u.status,headers:u.headers}}if(l===Me.error)return{type:l,error:u};if(S4(u)){var p,v;return{type:Me.deferred,deferredData:u,statusCode:(p=u.init)==null?void 0:p.status,headers:((v=u.init)==null?void 0:v.headers)&&new Headers(u.init.headers)}}return{type:Me.data,data:u}}function Sa(e,t,n,r){let i=e.createURL(Dv(t)).toString(),a={signal:n};if(r&&Zt(r.formMethod)){let{formMethod:o,formEncType:s}=r;a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(r.json)):s==="text/plain"?a.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?a.body=Yf(r.formData):a.body=r.formData}return new Request(i,a)}function Yf(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Mh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function w4(e,t,n,r,i){let a={},o=null,s,l=!1,u={};return n.forEach((c,d)=>{let p=t[d].route.id;if(Q(!Ti(c),"Cannot handle redirect results in processLoaderData"),Ha(c)){let v=bi(e,p),h=c.error;r&&(h=Object.values(r)[0],r=void 0),o=o||{},o[v.route.id]==null&&(o[v.route.id]=h),a[p]=void 0,l||(l=!0,s=_v(c.error)?c.error.status:500),c.headers&&(u[p]=c.headers)}else Ir(c)?(i.set(p,c.deferredData),a[p]=c.deferredData.data):a[p]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[p]=c.headers)}),r&&(o=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:u}}function zh(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=w4(t,n,r,i,s);for(let c=0;c<a.length;c++){let{key:d,match:p,controller:v}=a[c];Q(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let h=o[c];if(!(v&&v.signal.aborted))if(Ha(h)){let y=bi(e.matches,p==null?void 0:p.route.id);u&&u[y.route.id]||(u=je({},u,{[y.route.id]:h.error})),e.fetchers.delete(d)}else if(Ti(h))Q(!1,"Unhandled fetcher revalidation redirect");else if(Ir(h))Q(!1,"Unhandled fetcher deferred data");else{let y=si(h.data);e.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function Dh(e,t,n,r){let i=je({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function bi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function $h(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Mt(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Sp(e||500,o,new Error(s),!0)}function Fh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ti(n))return{result:n,idx:t}}}function Dv(e){let t=typeof e=="string"?Dn(e):e;return Qr(je({},t,{hash:""}))}function b4(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ir(e){return e.type===Me.deferred}function Ha(e){return e.type===Me.error}function Ti(e){return(e&&e.type)===Me.redirect}function S4(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function k4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function E4(e){return f4.has(e.toLowerCase())}function Zt(e){return u4.has(e.toLowerCase())}async function Uh(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!zv(u,l)&&(a&&a[l.route.id])!==void 0;if(Ir(s)&&(i||c)){let d=r[o];Q(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await $v(s,d,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function $v(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Me.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Me.error,error:i}}return{type:Me.data,data:e.deferredData.data}}}function kp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function qf(e,t){let n=typeof t=="string"?Dn(t).search:t.search;if(e[e.length-1].route.index&&kp(n||""))return e[e.length-1];let r=Ro(e);return r[r.length-1]}function Bh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function kc(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function C4(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ka(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function j4(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function si(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(this,arguments)}const Zl=k.createContext(null),Ep=k.createContext(null),ni=k.createContext(null),eu=k.createContext(null),$n=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Fv=k.createContext(null);function P4(e,t){let{relative:n}=t===void 0?{}:t;ia()||Q(!1);let{basename:r,navigator:i}=k.useContext(ni),{hash:a,pathname:o,search:s}=Cp(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pn([r,o])),i.createHref({pathname:l,search:s,hash:a})}function ia(){return k.useContext(eu)!=null}function ri(){return ia()||Q(!1),k.useContext(eu).location}function Uv(e){k.useContext(ni).static||k.useLayoutEffect(e)}function To(){let{isDataRoute:e}=k.useContext($n);return e?F4():N4()}function N4(){ia()||Q(!1);let e=k.useContext(Zl),{basename:t,navigator:n}=k.useContext(ni),{matches:r}=k.useContext($n),{pathname:i}=ri(),a=JSON.stringify(Ro(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return Uv(()=>{o.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Xl(l,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Pn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,a,i,e])}const A4=k.createContext(null);function O4(e){let t=k.useContext($n).outlet;return t&&k.createElement(A4.Provider,{value:e},t)}function Cp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext($n),{pathname:i}=ri(),a=JSON.stringify(Ro(r).map(o=>o.pathnameBase));return k.useMemo(()=>Xl(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function R4(e,t,n){ia()||Q(!1);let{navigator:r}=k.useContext(ni),{matches:i}=k.useContext($n),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=ri(),u;if(t){var c;let y=typeof t=="string"?Dn(t):t;s==="/"||(c=y.pathname)!=null&&c.startsWith(s)||Q(!1),u=y}else u=l;let d=u.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",v=wi(e,{pathname:p}),h=M4(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Pn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Pn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&h?k.createElement(eu.Provider,{value:{location:bl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:De.Pop}},h):h}function T4(){let e=Vv(),t=_v(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,a)}const L4=k.createElement(T4,null);class _4 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement($n.Provider,{value:this.props.routeContext},k.createElement(Fv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I4(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Zl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement($n.Provider,{value:t},r)}function M4(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||Q(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||L4);let p=t.concat(a.slice(0,u+1)),v=()=>{let h;return c?h=d:l.route.Component?h=k.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=s,k.createElement(I4,{match:l,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:h})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(_4,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:v(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):v()},null)}var Bv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bv||{}),Sl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sl||{});function z4(e){let t=k.useContext(Zl);return t||Q(!1),t}function D4(e){let t=k.useContext(Ep);return t||Q(!1),t}function $4(e){let t=k.useContext($n);return t||Q(!1),t}function Hv(e){let t=$4(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function Vv(){var e;let t=k.useContext(Fv),n=D4(Sl.UseRouteError),r=Hv(Sl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function F4(){let{router:e}=z4(Bv.UseNavigateStable),t=Hv(Sl.UseNavigateStable),n=k.useRef(!1);return Uv(()=>{n.current=!0}),k.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,bl({fromRouteId:t},a)))},[e,t])}const U4="startTransition",Hh=Nx[U4];function B4(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=k.useState(n.state),{v7_startTransition:o}=r||{},s=k.useCallback(d=>{o&&Hh?Hh(()=>a(d)):a(d)},[a,o]);k.useLayoutEffect(()=>n.subscribe(s),[n,s]);let l=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,p,v)=>n.navigate(d,{state:p,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(d,p,v)=>n.navigate(d,{replace:!0,state:p,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),u=n.basename||"/",c=k.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return k.createElement(k.Fragment,null,k.createElement(Zl.Provider,{value:c},k.createElement(Ep.Provider,{value:i},k.createElement(G4,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?k.createElement(H4,{routes:n.routes,state:i}):t))),null)}function H4(e){let{routes:t,state:n}=e;return R4(t,void 0,n)}function V4(e){let{to:t,replace:n,state:r,relative:i}=e;ia()||Q(!1);let{matches:a}=k.useContext($n),{pathname:o}=ri(),s=To(),l=Xl(t,Ro(a).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return k.useEffect(()=>s(JSON.parse(u),{replace:n,state:r,relative:i}),[s,u,i,n,r]),null}function W4(e){return O4(e.context)}function G4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=De.Pop,navigator:a,static:o=!1}=e;ia()&&Q(!1);let s=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Dn(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:v="default"}=r,h=k.useMemo(()=>{let y=ra(u,s);return y==null?null:{location:{pathname:y,search:c,hash:d,state:p,key:v},navigationType:i}},[s,u,c,d,p,v,i]);return h==null?null:k.createElement(ni.Provider,{value:l},k.createElement(eu.Provider,{children:n,value:h}))}new Promise(()=>{});function Y4(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:k.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:k.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}function Wv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function q4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Q4(e,t){return e.button===0&&(!t||t==="_self")&&!q4(e)}const K4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],J4=["aria-current","caseSensitive","className","end","style","to","children"];function X4(e,t){return g4({basename:t==null?void 0:t.basename,future:Vi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Db({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Z4(),routes:e,mapRouteProperties:Y4}).initialize()}function Z4(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Vi({},t,{errors:e3(t.errors)})),t}function e3(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Sp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const t3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",n3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,d=Wv(t,K4),{basename:p}=k.useContext(ni),v,h=!1;if(typeof u=="string"&&n3.test(u)&&(v=u,t3))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),x=ra(w.pathname,p);w.origin===m.origin&&x!=null?u=x+w.search+w.hash:h=!0}catch{}let y=P4(u,{relative:i}),b=r3(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function g(m){r&&r(m),m.defaultPrevented||b(m)}return k.createElement("a",Vi({},d,{href:v||y,onClick:h||a?r:g,ref:n,target:l}))}),Nt=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,children:u}=t,c=Wv(t,J4),d=Cp(l,{relative:c.relative}),p=ri(),v=k.useContext(Ep),{navigator:h}=k.useContext(ni),y=h.encodeLocation?h.encodeLocation(d).pathname:d.pathname,b=p.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(b=b.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let m=b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/",w=g!=null&&(g===y||!o&&g.startsWith(y)&&g.charAt(y.length)==="/"),x=m?r:void 0,S;typeof a=="function"?S=a({isActive:m,isPending:w}):S=[a,m?"active":null,w?"pending":null].filter(Boolean).join(" ");let P=typeof s=="function"?s({isActive:m,isPending:w}):s;return k.createElement(Ne,Vi({},c,{"aria-current":x,className:S,ref:n,style:P,to:l}),typeof u=="function"?u({isActive:m,isPending:w}):u)});var Vh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Vh||(Vh={}));var Wh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wh||(Wh={}));function r3(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=To(),l=ri(),u=Cp(e,{relative:o});return k.useCallback(c=>{if(Q4(c,n)){c.preventDefault();let d=r!==void 0?r:Qr(l)===Qr(u);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}var wt=function(){return wt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},wt.apply(this,arguments)};function ho(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ge="-ms-",Va="-moz-",ae="-webkit-",Gv="comm",tu="rule",jp="decl",i3="@import",Yv="@keyframes",a3="@layer",o3=Math.abs,Pp=String.fromCharCode,Qf=Object.assign;function s3(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function qv(e){return e.trim()}function Sn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ts(e,t){return e.indexOf(t)}function Ke(e,t){return e.charCodeAt(t)|0}function Wi(e,t,n){return e.slice(t,n)}function fn(e){return e.length}function Qv(e){return e.length}function Aa(e,t){return t.push(e),e}function l3(e,t){return e.map(t).join("")}function Gh(e,t){return e.filter(function(n){return!Sn(n,t)})}var nu=1,Gi=1,Kv=0,Wt=0,$e=0,aa="";function ru(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:nu,column:Gi,length:o,return:"",siblings:s}}function Yn(e,t){return Qf(ru("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function oi(e){for(;e.root;)e=Yn(e.root,{children:[e]});Aa(e,e.siblings)}function u3(){return $e}function c3(){return $e=Wt>0?Ke(aa,--Wt):0,Gi--,$e===10&&(Gi=1,nu--),$e}function on(){return $e=Wt<Kv?Ke(aa,Wt++):0,Gi++,$e===10&&(Gi=1,nu++),$e}function Ur(){return Ke(aa,Wt)}function Ls(){return Wt}function iu(e,t){return Wi(aa,e,t)}function Kf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function f3(e){return nu=Gi=1,Kv=fn(aa=e),Wt=0,[]}function d3(e){return aa="",e}function Ec(e){return qv(iu(Wt-1,Jf(e===91?e+2:e===40?e+1:e)))}function p3(e){for(;($e=Ur())&&$e<33;)on();return Kf(e)>2||Kf($e)>3?"":" "}function m3(e,t){for(;--t&&on()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return iu(e,Ls()+(t<6&&Ur()==32&&on()==32))}function Jf(e){for(;on();)switch($e){case e:return Wt;case 34:case 39:e!==34&&e!==39&&Jf($e);break;case 40:e===41&&Jf(e);break;case 92:on();break}return Wt}function h3(e,t){for(;on()&&e+$e!==47+10;)if(e+$e===42+42&&Ur()===47)break;return"/*"+iu(t,Wt-1)+"*"+Pp(e===47?e:on())}function g3(e){for(;!Kf(Ur());)on();return iu(e,Wt)}function v3(e){return d3(_s("",null,null,null,[""],e=f3(e),0,[0],e))}function _s(e,t,n,r,i,a,o,s,l){for(var u=0,c=0,d=o,p=0,v=0,h=0,y=1,b=1,g=1,m=0,w="",x=i,S=a,P=r,C=w;b;)switch(h=m,m=on()){case 40:if(h!=108&&Ke(C,d-1)==58){Ts(C+=Y(Ec(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Ec(m);break;case 9:case 10:case 13:case 32:C+=p3(h);break;case 92:C+=m3(Ls()-1,7);continue;case 47:switch(Ur()){case 42:case 47:Aa(y3(h3(on(),Ls()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[u++]=fn(C)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+c:g==-1&&(C=Y(C,/\f/g,"")),v>0&&fn(C)-d&&Aa(v>32?qh(C+";",r,n,d-1,l):qh(Y(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(Aa(P=Yh(C,t,n,u,c,i,s,w,x=[],S=[],d,a),a),m===123)if(c===0)_s(C,t,P,P,x,a,d,s,S);else switch(p===99&&Ke(C,3)===110?100:p){case 100:case 108:case 109:case 115:_s(e,P,P,r&&Aa(Yh(e,P,P,0,0,i,s,w,i,x=[],d,S),S),i,S,d,s,r?x:S);break;default:_s(C,P,P,P,[""],S,0,s,S)}}u=c=v=0,y=g=1,w=C="",d=o;break;case 58:d=1+fn(C),v=h;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&c3()==125)continue}switch(C+=Pp(m),m*y){case 38:g=c>0?1:(C+="\f",-1);break;case 44:s[u++]=(fn(C)-1)*g,g=1;break;case 64:Ur()===45&&(C+=Ec(on())),p=Ur(),c=d=fn(w=C+=g3(Ls())),m++;break;case 45:h===45&&fn(C)==2&&(y=0)}}return a}function Yh(e,t,n,r,i,a,o,s,l,u,c,d){for(var p=i-1,v=i===0?a:[""],h=Qv(v),y=0,b=0,g=0;y<r;++y)for(var m=0,w=Wi(e,p+1,p=o3(b=o[y])),x=e;m<h;++m)(x=qv(b>0?v[m]+" "+w:Y(w,/&\f/g,v[m])))&&(l[g++]=x);return ru(e,t,n,i===0?tu:s,l,u,c,d)}function y3(e,t,n,r){return ru(e,t,n,Gv,Pp(u3()),Wi(e,2,-2),0,r)}function qh(e,t,n,r,i){return ru(e,t,n,jp,Wi(e,0,r),Wi(e,r+1,-1),r,i)}function Jv(e,t,n){switch(s3(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 4789:return Va+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+Va+e+ge+e+e;case 5936:switch(Ke(e,t+11)){case 114:return ae+e+ge+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+ge+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+ge+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ae+e+ge+e+e;case 6165:return ae+e+ge+"flex-"+e+e;case 5187:return ae+e+Y(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return ae+e+ge+"flex-item-"+Y(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":ge+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ae+e+ge+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ae+e+ge+Y(e,"shrink","negative")+e;case 5292:return ae+e+ge+Y(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+Y(e,"-grow","")+ae+e+ge+Y(e,"grow","positive")+e;case 4554:return ae+Y(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return ge+"grid-column-align"+Wi(e,t)+e;break;case 2592:case 3360:return ge+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Sn(r.props,/grid-\w+-end/)})?~Ts(e+(n=n[t].value),"span")?e:ge+Y(e,"-start","")+e+ge+"grid-row-span:"+(~Ts(n,"span")?Sn(n,/\d+/):+Sn(n,/\d+/)-+Sn(e,/\d+/))+";":ge+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Sn(r.props,/grid-\w+-start/)})?e:ge+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+Va+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ts(e,"stretch")?Jv(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,u){return ge+i+":"+a+u+(o?ge+i+"-span:"+(s?l:+l-+a)+u:"")+e});case 4949:if(Ke(e,t+6)===121)return Y(e,":",":"+ae)+e;break;case 6444:switch(Ke(e,Ke(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ae+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+ge+"$2box$3")+e;case 100:return Y(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function kl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function x3(e,t,n,r){switch(e.type){case a3:if(e.children.length)break;case i3:case jp:return e.return=e.return||e.value;case Gv:return"";case Yv:return e.return=e.value+"{"+kl(e.children,r)+"}";case tu:if(!fn(e.value=e.props.join(",")))return""}return fn(n=kl(e.children,r))?e.return=e.value+"{"+n+"}":""}function w3(e){var t=Qv(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function b3(e){return function(t){t.root||(t=t.return)&&e(t)}}function S3(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jp:e.return=Jv(e.value,e.length,n);return;case Yv:return kl([Yn(e,{value:Y(e.value,"@","@"+ae)})],r);case tu:if(e.length)return l3(n=e.props,function(i){switch(Sn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oi(Yn(e,{props:[Y(i,/:(read-\w+)/,":"+Va+"$1")]})),oi(Yn(e,{props:[i]})),Qf(e,{props:Gh(n,r)});break;case"::placeholder":oi(Yn(e,{props:[Y(i,/:(plac\w+)/,":"+ae+"input-$1")]})),oi(Yn(e,{props:[Y(i,/:(plac\w+)/,":"+Va+"$1")]})),oi(Yn(e,{props:[Y(i,/:(plac\w+)/,ge+"input-$1")]})),oi(Yn(e,{props:[i]})),Qf(e,{props:Gh(n,r)});break}return""})}}var k3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Np=typeof window<"u"&&"HTMLElement"in window,E3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),au=Object.freeze([]),qi=Object.freeze({});function C3(e,t,n){return n===void 0&&(n=qi),e.theme!==n.theme&&e.theme||t||n.theme}var Xv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),j3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,P3=/(^-|-$)/g;function Qh(e){return e.replace(j3,"-").replace(P3,"")}var N3=/(a)(d)/gi,Kh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kh(t%52)+n;return(Kh(t%52)+n).replace(N3,"$1-$2")}var Cc,Si=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zv=function(e){return Si(5381,e)};function ey(e){return Xf(Zv(e)>>>0)}function A3(e){return e.displayName||e.name||"Component"}function jc(e){return typeof e=="string"&&!0}var ty=typeof Symbol=="function"&&Symbol.for,ny=ty?Symbol.for("react.memo"):60115,O3=ty?Symbol.for("react.forward_ref"):60112,R3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L3=((Cc={})[O3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cc[ny]=ry,Cc);function Jh(e){return("type"in(t=e)&&t.type.$$typeof)===ny?ry:"$$typeof"in e?L3[e.$$typeof]:R3;var t}var _3=Object.defineProperty,I3=Object.getOwnPropertyNames,Xh=Object.getOwnPropertySymbols,M3=Object.getOwnPropertyDescriptor,z3=Object.getPrototypeOf,Zh=Object.prototype;function iy(e,t,n){if(typeof t!="string"){if(Zh){var r=z3(t);r&&r!==Zh&&iy(e,r,n)}var i=I3(t);Xh&&(i=i.concat(Xh(t)));for(var a=Jh(e),o=Jh(t),s=0;s<i.length;++s){var l=i[s];if(!(l in T3||n&&n[l]||o&&l in o||a&&l in a)){var u=M3(t,l);try{_3(e,l,u)}catch{}}}}return e}function Qi(e){return typeof e=="function"}function Ap(e){return typeof e=="object"&&"styledComponentId"in e}function Mr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ed(e,t,n){if(n===void 0&&(n=!1),!n&&!go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ed(e[r],t[r]);else if(go(t))for(var r in t)e[r]=ed(e[r],t[r]);return e}function Op(e,t){Object.defineProperty(e,"toString",{value:t})}function Lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var D3=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw Lo(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Is=new Map,El=new Map,Pc=1,ss=function(e){if(Is.has(e))return Is.get(e);for(;El.has(Pc);)Pc++;var t=Pc++;return Is.set(e,t),El.set(t,e),t},$3=function(e,t){Is.set(e,t),El.set(t,e)},F3="style[".concat(Yi,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),U3=new RegExp("^".concat(Yi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),B3=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},H3=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(U3);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&($3(c,u),B3(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}};function V3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ay=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Yi,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Yi,"active"),r.setAttribute("data-styled-version","6.0.8");var o=V3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},W3=function(){function e(t){this.element=ay(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw Lo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),G3=function(){function e(t){this.element=ay(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Y3=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),eg=Np,q3={isServer:!Np,useCSSOMInjection:!E3},oy=function(){function e(t,n,r){t===void 0&&(t=qi),n===void 0&&(n={});var i=this;this.options=wt(wt({},q3),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Np&&eg&&(eg=!1,function(a){for(var o=document.querySelectorAll(F3),s=0,l=o.length;s<l;s++){var u=o[s];u&&u.getAttribute(Yi)!=="active"&&(H3(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Op(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",u=function(d){var p=function(g){return El.get(g)}(d);if(p===void 0)return"continue";var v=a.names.get(p),h=o.getGroup(d);if(v===void 0||h.length===0)return"continue";var y="".concat(Yi,".g").concat(d,'[id="').concat(p,'"]'),b="";v!==void 0&&v.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(h).concat(y,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},c=0;c<s;c++)u(c);return l}(i)})}return e.registerId=function(t){return ss(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(wt(wt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Y3(i):r?new W3(i):new G3(i)}(this.options),new D3(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ss(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ss(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ss(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Q3=/&/g,K3=/^\s*\/\/.*$/gm;function sy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sy(n.children,t)),n})}function J3(e){var t,n,r,i=e===void 0?qi:e,a=i.options,o=a===void 0?qi:a,s=i.plugins,l=s===void 0?au:s,u=function(p,v,h){return h===n||h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(t):p},c=l.slice();c.push(function(p){p.type===tu&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(Q3,n).replace(r,u))}),o.prefix&&c.push(S3),c.push(x3);var d=function(p,v,h,y){v===void 0&&(v=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(K3,""),g=v3(h||v?"".concat(h," ").concat(v," { ").concat(b," }"):b);o.namespace&&(g=sy(g,o.namespace));var m=[];return kl(g,w3(c.concat(b3(function(w){return m.push(w)})))),m};return d.hash=l.length?l.reduce(function(p,v){return v.name||Lo(15),Si(p,v.name)},5381).toString():"",d}var X3=new oy,td=J3(),ly=q.createContext({shouldForwardProp:void 0,styleSheet:X3,stylis:td});ly.Consumer;q.createContext(void 0);function tg(){return k.useContext(ly)}var uy=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=td);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Op(this,function(){throw Lo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=td),this.name+t.hash},e}(),Z3=function(e){return e>="A"&&e<="Z"};function ng(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Z3(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var cy=function(e){return e==null||e===!1||e===""},fy=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!cy(a)&&(Array.isArray(a)&&a.isCss||Qi(a)?r.push("".concat(ng(i),":"),a,";"):go(a)?r.push.apply(r,ho(ho(["".concat(i," {")],fy(a),!1),["}"],!1)):r.push("".concat(ng(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in k3||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Br(e,t,n,r){if(cy(e))return[];if(Ap(e))return[".".concat(e.styledComponentId)];if(Qi(e)){if(!Qi(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Br(i,t,n,r)}var a;return e instanceof uy?n?(e.inject(n,r),[e.getName(r)]):[e]:go(e)?fy(e):Array.isArray(e)?Array.prototype.concat.apply(au,e.map(function(o){return Br(o,t,n,r)})):[e.toString()]}function eS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qi(n)&&!Ap(n))return!1}return!0}var tS=Zv("6.0.8"),nS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&eS(t),this.componentId=n,this.baseHash=Si(tS,n),this.baseStyle=r,oy.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mr(i,this.staticRulesId);else{var a=Zf(Br(this.rules,t,n,r)),o=Xf(Si(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Mr(i,o),this.staticRulesId=o}else{for(var l=Si(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var p=Zf(Br(d,t,n,r));l=Si(l,p+c),u+=p}}if(u){var v=Xf(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),i=Mr(i,v)}}return i},e}(),dy=q.createContext(void 0);dy.Consumer;var Nc={};function rS(e,t,n){var r=Ap(e),i=e,a=!jc(e),o=t.attrs,s=o===void 0?au:o,l=t.componentId,u=l===void 0?function(w,x){var S=typeof w!="string"?"sc":Qh(w);Nc[S]=(Nc[S]||0)+1;var P="".concat(S,"-").concat(ey("6.0.8"+S+Nc[S]));return x?"".concat(x,"-").concat(P):P}(t.displayName,t.parentComponentId):l,c=t.displayName;c===void 0&&function(w){return jc(w)?"styled.".concat(w):"Styled(".concat(A3(w),")")}(e);var d=t.displayName&&t.componentId?"".concat(Qh(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;v=function(w,x){return h(w,x)&&y(w,x)}}else v=h}var b=new nS(n,d,r?i.componentStyle:void 0);function g(w,x){return function(S,P,C){var O=S.attrs,z=S.componentStyle,L=S.defaultProps,Z=S.foldedComponentIds,G=S.styledComponentId,Te=S.target,be=q.useContext(dy),qe=tg(),ie=S.shouldForwardProp||qe.shouldForwardProp,oe=function(Yt,ne,gt){for(var rt,vt=wt(wt({},ne),{className:void 0,theme:gt}),qt=0;qt<Yt.length;qt+=1){var ii=Qi(rt=Yt[qt])?rt(vt):rt;for(var ln in ii)vt[ln]=ln==="className"?Mr(vt[ln],ii[ln]):ln==="style"?wt(wt({},vt[ln]),ii[ln]):ii[ln]}return ne.className&&(vt.className=Mr(vt.className,ne.className)),vt}(O,P,C3(P,be,L)||qi),T=oe.as||Te,D={};for(var U in oe)oe[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?D.as=oe.forwardedAs:ie&&!ie(U,T)||(D[U]=oe[U]));var pe=function(Yt,ne){var gt=tg(),rt=Yt.generateAndInjectStyles(ne,gt.styleSheet,gt.stylis);return rt}(z,oe),Se=Mr(Z,G);return pe&&(Se+=" "+pe),oe.className&&(Se+=" "+oe.className),D[jc(T)&&!Xv.has(T)?"class":"className"]=Se,D.ref=C,k.createElement(T,D)}(m,w,x)}var m=q.forwardRef(g);return m.attrs=p,m.componentStyle=b,m.shouldForwardProp=v,m.foldedComponentIds=r?Mr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=d,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(x){for(var S=[],P=1;P<arguments.length;P++)S[P-1]=arguments[P];for(var C=0,O=S;C<O.length;C++)ed(x,O[C],!0);return x}({},i.defaultProps,w):w}}),Op(m,function(){return".".concat(m.styledComponentId)}),a&&iy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function rg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ig=function(e){return Object.assign(e,{isCss:!0})};function py(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Qi(e)||go(e)){var r=e;return ig(Br(rg(au,ho([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Br(i):ig(Br(rg(i,t)))}function nd(e,t,n){if(n===void 0&&(n=qi),!t)throw Lo(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,py.apply(void 0,ho([i],a,!1)))};return r.attrs=function(i){return nd(e,t,wt(wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return nd(e,t,wt(wt({},n),i))},r}var my=function(e){return nd(rS,e)},Ye=my;Xv.forEach(function(e){Ye[e]=my(e)});function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zf(py.apply(void 0,ho([e],t,!1))),i=ey(r);return new uy(i,r)}const iS=_o`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,aS=Ye.div`
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .loading-spinner {
    border: 8px solid var(--primary-white);
    border-top: 8px solid var(--primary-Company-red);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${iS} 0.5s linear infinite;
  }
`,Cr=()=>f.jsx(aS,{children:f.jsx("div",{className:"loading-container",children:f.jsx("div",{className:"loading-spinner"})})}),oS=Ye.section`
  .introduction-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .img-container {
    /* height: 60vh; */
  }
  .dots-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .dot {
    border: 1px solid black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-white);
    cursor: pointer;
  }
  .active {
    background: var(--primary-black);
  }
  p {
    padding: 1rem;
    margin-top: 3rem;
  }
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    h2 {
      text-align: center;
    }
    .introduction-img {
      object-fit: cover;
    }
    .img-container {
      min-height: 550px;
      height: calc(100vh - 148px);
    }
  }
`,sS=_o`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`,lS=Ye.img`
  animation:${sS} linear 1.2s;
`;var hy={exports:{}},gy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=k;function uS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cS=typeof Object.is=="function"?Object.is:uS,fS=Ki.useState,dS=Ki.useEffect,pS=Ki.useLayoutEffect,mS=Ki.useDebugValue;function hS(e,t){var n=t(),r=fS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return pS(function(){i.value=n,i.getSnapshot=t,Ac(i)&&a({inst:i})},[e,n,t]),dS(function(){return Ac(i)&&a({inst:i}),e(function(){Ac(i)&&a({inst:i})})},[e]),mS(n),n}function Ac(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cS(e,n)}catch{return!0}}function gS(e,t){return t()}var vS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?gS:hS;gy.useSyncExternalStore=Ki.useSyncExternalStore!==void 0?Ki.useSyncExternalStore:vS;hy.exports=gy;var yS=hy.exports,vy={exports:{}},yy={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=k,xS=yS;function wS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bS=typeof Object.is=="function"?Object.is:wS,SS=xS.useSyncExternalStore,kS=ou.useRef,ES=ou.useEffect,CS=ou.useMemo,jS=ou.useDebugValue;yy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=kS(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=CS(function(){function l(v){if(!u){if(u=!0,c=v,v=r(v),i!==void 0&&o.hasValue){var h=o.value;if(i(h,v))return d=h}return d=v}if(h=d,bS(c,v))return h;var y=r(v);return i!==void 0&&i(h,y)?h:(c=v,d=y)}var u=!1,c,d,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var s=SS(e,a[0],a[1]);return ES(function(){o.hasValue=!0,o.value=s},[s]),jS(s),s};vy.exports=yy;var PS=vy.exports;function NS(e){e()}let xy=NS;const AS=e=>xy=e,OS=()=>xy,ag=Symbol.for("react-redux-context"),og=typeof globalThis<"u"?globalThis:{};function RS(){var e;if(!k.createContext)return{};const t=(e=og[ag])!=null?e:og[ag]=new Map;let n=t.get(k.createContext);return n||(n=k.createContext(null),t.set(k.createContext,n)),n}const gr=RS();function Rp(e=gr){return function(){return k.useContext(e)}}const wy=Rp(),TS=()=>{throw new Error("uSES not initialized!")};let by=TS;const LS=e=>{by=e},_S=(e,t)=>e===t;function IS(e=gr){const t=e===gr?wy:Rp(e);return function(r,i={}){const{equalityFn:a=_S,stabilityCheck:o=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:d,noopCheck:p}=t();k.useRef(!0);const v=k.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,o]),h=by(u.addNestedSub,l.getState,c||l.getState,v,a);return k.useDebugValue(h),h}}const J=IS();var Sy={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=typeof Symbol=="function"&&Symbol.for,Tp=Xe?Symbol.for("react.element"):60103,Lp=Xe?Symbol.for("react.portal"):60106,su=Xe?Symbol.for("react.fragment"):60107,lu=Xe?Symbol.for("react.strict_mode"):60108,uu=Xe?Symbol.for("react.profiler"):60114,cu=Xe?Symbol.for("react.provider"):60109,fu=Xe?Symbol.for("react.context"):60110,_p=Xe?Symbol.for("react.async_mode"):60111,du=Xe?Symbol.for("react.concurrent_mode"):60111,pu=Xe?Symbol.for("react.forward_ref"):60112,mu=Xe?Symbol.for("react.suspense"):60113,MS=Xe?Symbol.for("react.suspense_list"):60120,hu=Xe?Symbol.for("react.memo"):60115,gu=Xe?Symbol.for("react.lazy"):60116,zS=Xe?Symbol.for("react.block"):60121,DS=Xe?Symbol.for("react.fundamental"):60117,$S=Xe?Symbol.for("react.responder"):60118,FS=Xe?Symbol.for("react.scope"):60119;function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tp:switch(e=e.type,e){case _p:case du:case su:case uu:case lu:case mu:return e;default:switch(e=e&&e.$$typeof,e){case fu:case pu:case gu:case hu:case cu:return e;default:return t}}case Lp:return t}}}function ky(e){return _t(e)===du}le.AsyncMode=_p;le.ConcurrentMode=du;le.ContextConsumer=fu;le.ContextProvider=cu;le.Element=Tp;le.ForwardRef=pu;le.Fragment=su;le.Lazy=gu;le.Memo=hu;le.Portal=Lp;le.Profiler=uu;le.StrictMode=lu;le.Suspense=mu;le.isAsyncMode=function(e){return ky(e)||_t(e)===_p};le.isConcurrentMode=ky;le.isContextConsumer=function(e){return _t(e)===fu};le.isContextProvider=function(e){return _t(e)===cu};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tp};le.isForwardRef=function(e){return _t(e)===pu};le.isFragment=function(e){return _t(e)===su};le.isLazy=function(e){return _t(e)===gu};le.isMemo=function(e){return _t(e)===hu};le.isPortal=function(e){return _t(e)===Lp};le.isProfiler=function(e){return _t(e)===uu};le.isStrictMode=function(e){return _t(e)===lu};le.isSuspense=function(e){return _t(e)===mu};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===su||e===du||e===uu||e===lu||e===mu||e===MS||typeof e=="object"&&e!==null&&(e.$$typeof===gu||e.$$typeof===hu||e.$$typeof===cu||e.$$typeof===fu||e.$$typeof===pu||e.$$typeof===DS||e.$$typeof===$S||e.$$typeof===FS||e.$$typeof===zS)};le.typeOf=_t;Sy.exports=le;var US=Sy.exports,Ey=US,BS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},HS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cy={};Cy[Ey.ForwardRef]=BS;Cy[Ey.Memo]=HS;var ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),vu=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),bu=Symbol.for("react.context"),VS=Symbol.for("react.server_context"),Su=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Cu=Symbol.for("react.memo"),ju=Symbol.for("react.lazy"),WS=Symbol.for("react.offscreen"),jy;jy=Symbol.for("react.module.reference");function Gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ip:switch(e=e.type,e){case vu:case xu:case yu:case ku:case Eu:return e;default:switch(e=e&&e.$$typeof,e){case VS:case bu:case Su:case ju:case Cu:case wu:return e;default:return t}}case Mp:return t}}}ce.ContextConsumer=bu;ce.ContextProvider=wu;ce.Element=Ip;ce.ForwardRef=Su;ce.Fragment=vu;ce.Lazy=ju;ce.Memo=Cu;ce.Portal=Mp;ce.Profiler=xu;ce.StrictMode=yu;ce.Suspense=ku;ce.SuspenseList=Eu;ce.isAsyncMode=function(){return!1};ce.isConcurrentMode=function(){return!1};ce.isContextConsumer=function(e){return Gt(e)===bu};ce.isContextProvider=function(e){return Gt(e)===wu};ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ip};ce.isForwardRef=function(e){return Gt(e)===Su};ce.isFragment=function(e){return Gt(e)===vu};ce.isLazy=function(e){return Gt(e)===ju};ce.isMemo=function(e){return Gt(e)===Cu};ce.isPortal=function(e){return Gt(e)===Mp};ce.isProfiler=function(e){return Gt(e)===xu};ce.isStrictMode=function(e){return Gt(e)===yu};ce.isSuspense=function(e){return Gt(e)===ku};ce.isSuspenseList=function(e){return Gt(e)===Eu};ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vu||e===xu||e===yu||e===ku||e===Eu||e===WS||typeof e=="object"&&e!==null&&(e.$$typeof===ju||e.$$typeof===Cu||e.$$typeof===wu||e.$$typeof===bu||e.$$typeof===Su||e.$$typeof===jy||e.getModuleId!==void 0)};ce.typeOf=Gt;function GS(){const e=OS();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const sg={notify(){},get:()=>[]};function YS(e,t){let n,r=sg,i=0,a=!1;function o(y){c();const b=r.subscribe(y);let g=!1;return()=>{g||(g=!0,b(),d())}}function s(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function u(){return a}function c(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=GS())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=sg)}function p(){a||(a=!0,c())}function v(){a&&(a=!1,d())}const h={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:u,trySubscribe:p,tryUnsubscribe:v,getListeners:()=>r};return h}const qS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QS=qS?k.useLayoutEffect:k.useEffect;function KS({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:a="once"}){const o=k.useMemo(()=>{const u=YS(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:a}},[e,r,i,a]),s=k.useMemo(()=>e.getState(),[e]);QS(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,s]);const l=t||gr;return k.createElement(l.Provider,{value:o},n)}function Py(e=gr){const t=e===gr?wy:Rp(e);return function(){const{store:r}=t();return r}}const JS=Py();function XS(e=gr){const t=e===gr?JS:Py(e);return function(){return t().dispatch}}const fe=XS();LS(PS.useSyncExternalStoreWithSelector);AS(Rv.unstable_batchedUpdates);function tn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function vr(e){return!!e&&!!e[ke]}function Ln(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===sk}(e)||Array.isArray(e)||!!e[mg]||!!(!((t=e.constructor)===null||t===void 0)&&t[mg])||zp(e)||Dp(e))}function Kr(e,t,n){n===void 0&&(n=!1),oa(e)===0?(n?Object.keys:_i)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function oa(e){var t=e[ke];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:zp(e)?2:Dp(e)?3:0}function Li(e,t){return oa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ZS(e,t){return oa(e)===2?e.get(t):e[t]}function Ny(e,t,n){var r=oa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ay(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function zp(e){return ak&&e instanceof Map}function Dp(e){return ok&&e instanceof Set}function Or(e){return e.o||e.t}function $p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ry(e);delete t[ke];for(var n=_i(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Fp(e,t){return t===void 0&&(t=!1),Up(e)||vr(e)||!Ln(e)||(oa(e)>1&&(e.set=e.add=e.clear=e.delete=ek),Object.freeze(e),t&&Kr(e,function(n,r){return Fp(r,!0)},!0)),e}function ek(){tn(2)}function Up(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function vn(e){var t=od[e];return t||tn(18,e),t}function tk(e,t){od[e]||(od[e]=t)}function rd(){return vo}function Oc(e,t){t&&(vn("Patches"),e.u=[],e.s=[],e.v=t)}function Cl(e){id(e),e.p.forEach(nk),e.p=null}function id(e){e===vo&&(vo=e.l)}function lg(e){return vo={p:[],l:vo,h:e,m:!0,_:0}}function nk(e){var t=e[ke];t.i===0||t.i===1?t.j():t.g=!0}function Rc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||vn("ES5").S(t,e,r),r?(n[ke].P&&(Cl(t),tn(4)),Ln(e)&&(e=jl(t,e),t.l||Pl(t,e)),t.u&&vn("Patches").M(n[ke].t,e,t.u,t.s)):e=jl(t,n,[]),Cl(t),t.u&&t.v(t.u,t.s),e!==Oy?e:void 0}function jl(e,t,n){if(Up(t))return t;var r=t[ke];if(!r)return Kr(t,function(s,l){return ug(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Pl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=$p(r.k):r.o,a=i,o=!1;r.i===3&&(a=new Set(i),i.clear(),o=!0),Kr(a,function(s,l){return ug(e,r,i,s,l,n,o)}),Pl(e,i,!1),n&&e.u&&vn("Patches").N(r,n,e.u,e.s)}return r.o}function ug(e,t,n,r,i,a,o){if(vr(i)){var s=jl(e,i,a&&t&&t.i!==3&&!Li(t.R,r)?a.concat(r):void 0);if(Ny(n,r,s),!vr(s))return;e.m=!1}else o&&n.add(i);if(Ln(i)&&!Up(i)){if(!e.h.D&&e._<1)return;jl(e,i),t&&t.A.l||Pl(e,i)}}function Pl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Fp(t,n)}function Tc(e,t){var n=e[ke];return(n?Or(n):e)[t]}function cg(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Xn(e){e.P||(e.P=!0,e.l&&Xn(e.l))}function Lc(e){e.o||(e.o=$p(e.t))}function ad(e,t,n){var r=zp(t)?vn("MapSet").F(t,n):Dp(t)?vn("MapSet").T(t,n):e.O?function(i,a){var o=Array.isArray(i),s={i:o?1:0,A:a?a.A:rd(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},l=s,u=yo;o&&(l=[s],u=Oa);var c=Proxy.revocable(l,u),d=c.revoke,p=c.proxy;return s.k=p,s.j=d,p}(t,n):vn("ES5").J(t,n);return(n?n.A:rd()).p.push(r),r}function rk(e){return vr(e)||tn(22,e),function t(n){if(!Ln(n))return n;var r,i=n[ke],a=oa(n);if(i){if(!i.P&&(i.i<4||!vn("ES5").K(i)))return i.t;i.I=!0,r=fg(n,a),i.I=!1}else r=fg(n,a);return Kr(r,function(o,s){i&&ZS(i.t,o)===s||Ny(r,o,t(s))}),a===3?new Set(r):r}(e)}function fg(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return $p(e)}function ik(){function e(a,o){var s=i[a];return s?s.enumerable=o:i[a]=s={configurable:!0,enumerable:o,get:function(){var l=this[ke];return yo.get(l,a)},set:function(l){var u=this[ke];yo.set(u,a,l)}},s}function t(a){for(var o=a.length-1;o>=0;o--){var s=a[o][ke];if(!s.P)switch(s.i){case 5:r(s)&&Xn(s);break;case 4:n(s)&&Xn(s)}}}function n(a){for(var o=a.t,s=a.k,l=_i(s),u=l.length-1;u>=0;u--){var c=l[u];if(c!==ke){var d=o[c];if(d===void 0&&!Li(o,c))return!0;var p=s[c],v=p&&p[ke];if(v?v.t!==d:!Ay(p,d))return!0}}var h=!!o[ke];return l.length!==_i(o).length+(h?0:1)}function r(a){var o=a.k;if(o.length!==a.t.length)return!0;var s=Object.getOwnPropertyDescriptor(o,o.length-1);if(s&&!s.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};tk("ES5",{J:function(a,o){var s=Array.isArray(a),l=function(c,d){if(c){for(var p=Array(d.length),v=0;v<d.length;v++)Object.defineProperty(p,""+v,e(v,!0));return p}var h=Ry(d);delete h[ke];for(var y=_i(h),b=0;b<y.length;b++){var g=y[b];h[g]=e(g,c||!!h[g].enumerable)}return Object.create(Object.getPrototypeOf(d),h)}(s,a),u={i:s?5:4,A:o?o.A:rd(),P:!1,I:!1,R:{},l:o,t:a,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,ke,{value:u,writable:!0}),l},S:function(a,o,s){s?vr(o)&&o[ke].A===a&&t(a.p):(a.u&&function l(u){if(u&&typeof u=="object"){var c=u[ke];if(c){var d=c.t,p=c.k,v=c.R,h=c.i;if(h===4)Kr(p,function(w){w!==ke&&(d[w]!==void 0||Li(d,w)?v[w]||l(p[w]):(v[w]=!0,Xn(c)))}),Kr(d,function(w){p[w]!==void 0||Li(p,w)||(v[w]=!1,Xn(c))});else if(h===5){if(r(c)&&(Xn(c),v.length=!0),p.length<d.length)for(var y=p.length;y<d.length;y++)v[y]=!1;else for(var b=d.length;b<p.length;b++)v[b]=!0;for(var g=Math.min(p.length,d.length),m=0;m<g;m++)p.hasOwnProperty(m)||(v[m]=!0),v[m]===void 0&&l(p[m])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var dg,vo,Bp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ak=typeof Map<"u",ok=typeof Set<"u",pg=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Oy=Bp?Symbol.for("immer-nothing"):((dg={})["immer-nothing"]=!0,dg),mg=Bp?Symbol.for("immer-draftable"):"__$immer_draftable",ke=Bp?Symbol.for("immer-state"):"__$immer_state",sk=""+Object.prototype.constructor,_i=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ry=Object.getOwnPropertyDescriptors||function(e){var t={};return _i(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},od={},yo={get:function(e,t){if(t===ke)return e;var n=Or(e);if(!Li(n,t))return function(i,a,o){var s,l=cg(a,o);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Ln(r)?r:r===Tc(e.t,t)?(Lc(e),e.o[t]=ad(e.A.h,r,e)):r},has:function(e,t){return t in Or(e)},ownKeys:function(e){return Reflect.ownKeys(Or(e))},set:function(e,t,n){var r=cg(Or(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Tc(Or(e),t),a=i==null?void 0:i[ke];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ay(n,i)&&(n!==void 0||Li(e.t,t)))return!0;Lc(e),Xn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Tc(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Lc(e),Xn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Or(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){tn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){tn(12)}},Oa={};Kr(yo,function(e,t){Oa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Oa.deleteProperty=function(e,t){return Oa.set.call(this,e,t,void 0)},Oa.set=function(e,t,n){return yo.set.call(this,e[0],t,n,e[0])};var lk=function(){function e(n){var r=this;this.O=pg,this.D=!0,this.produce=function(i,a,o){if(typeof i=="function"&&typeof a!="function"){var s=a;a=i;var l=r;return function(y){var b=this;y===void 0&&(y=s);for(var g=arguments.length,m=Array(g>1?g-1:0),w=1;w<g;w++)m[w-1]=arguments[w];return l.produce(y,function(x){var S;return(S=a).call.apply(S,[b,x].concat(m))})}}var u;if(typeof a!="function"&&tn(6),o!==void 0&&typeof o!="function"&&tn(7),Ln(i)){var c=lg(r),d=ad(r,i,void 0),p=!0;try{u=a(d),p=!1}finally{p?Cl(c):id(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return Oc(c,o),Rc(y,c)},function(y){throw Cl(c),y}):(Oc(c,o),Rc(u,c))}if(!i||typeof i!="object"){if((u=a(i))===void 0&&(u=i),u===Oy&&(u=void 0),r.D&&Fp(u,!0),o){var v=[],h=[];vn("Patches").M(i,u,v,h),o(v,h)}return u}tn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),p=1;p<c;p++)d[p-1]=arguments[p];return r.produceWithPatches(u,function(v){return i.apply(void 0,[v].concat(d))})};var o,s,l=r.produce(i,a,function(u,c){o=u,s=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,s]}):[l,o,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Ln(n)||tn(8),vr(n)&&(n=rk(n));var r=lg(this),i=ad(this,n,void 0);return i[ke].C=!0,id(r),i},t.finishDraft=function(n,r){var i=n&&n[ke],a=i.A;return Oc(a,r),Rc(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!pg&&tn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var o=vn("Patches").$;return vr(n)?o(n,r):this.produce(n,function(s){return o(s,r)})},e}(),Rt=new lk,Ty=Rt.produce;Rt.produceWithPatches.bind(Rt);Rt.setAutoFreeze.bind(Rt);Rt.setUseProxies.bind(Rt);Rt.applyPatches.bind(Rt);Rt.createDraft.bind(Rt);Rt.finishDraft.bind(Rt);function xo(e){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xo(e)}function uk(e,t){if(xo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ck(e){var t=uk(e,"string");return xo(t)==="symbol"?t:String(t)}function fk(e,t,n){return t=ck(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hg(Object(n),!0).forEach(function(r){fk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function st(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var vg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),_c=function(){return Math.random().toString(36).substring(7).split("").join(".")},Nl={INIT:"@@redux/INIT"+_c(),REPLACE:"@@redux/REPLACE"+_c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+_c()}};function dk(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ly(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(st(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(st(1));return n(Ly)(e,t)}if(typeof e!="function")throw new Error(st(2));var i=e,a=t,o=[],s=o,l=!1;function u(){s===o&&(s=o.slice())}function c(){if(l)throw new Error(st(3));return a}function d(y){if(typeof y!="function")throw new Error(st(4));if(l)throw new Error(st(5));var b=!0;return u(),s.push(y),function(){if(b){if(l)throw new Error(st(6));b=!1,u();var m=s.indexOf(y);s.splice(m,1),o=null}}}function p(y){if(!dk(y))throw new Error(st(7));if(typeof y.type>"u")throw new Error(st(8));if(l)throw new Error(st(9));try{l=!0,a=i(a,y)}finally{l=!1}for(var b=o=s,g=0;g<b.length;g++){var m=b[g];m()}return y}function v(y){if(typeof y!="function")throw new Error(st(10));i=y,p({type:Nl.REPLACE})}function h(){var y,b=d;return y={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(st(11));function w(){m.next&&m.next(c())}w();var x=b(w);return{unsubscribe:x}}},y[vg]=function(){return this},y}return p({type:Nl.INIT}),r={dispatch:p,subscribe:d,getState:c,replaceReducer:v},r[vg]=h,r}function pk(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Nl.INIT});if(typeof r>"u")throw new Error(st(12));if(typeof n(void 0,{type:Nl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(st(13))})}function mk(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),o;try{pk(n)}catch(s){o=s}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,d={},p=0;p<a.length;p++){var v=a[p],h=n[v],y=l[v],b=h(y,u);if(typeof b>"u")throw u&&u.type,new Error(st(14));d[v]=b,c=c||b!==y}return c=c||a.length!==Object.keys(l).length,c?d:l}}function Al(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function hk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(st(15))},o={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=t.map(function(l){return l(o)});return a=Al.apply(void 0,s)(i.dispatch),gg(gg({},i),{},{dispatch:a})}}}function _y(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(o){return function(s){return typeof s=="function"?s(i,a,e):o(s)}}};return t}var Iy=_y();Iy.withExtraArgument=_y;const yg=Iy;var My=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),gk=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=u[0]&2?i.return:u[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;switch(i=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Ji=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},vk=Object.defineProperty,yk=Object.defineProperties,xk=Object.getOwnPropertyDescriptors,xg=Object.getOwnPropertySymbols,wk=Object.prototype.hasOwnProperty,bk=Object.prototype.propertyIsEnumerable,wg=function(e,t,n){return t in e?vk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},fr=function(e,t){for(var n in t||(t={}))wk.call(t,n)&&wg(e,n,t[n]);if(xg)for(var r=0,i=xg(t);r<i.length;r++){var n=i[r];bk.call(t,n)&&wg(e,n,t[n])}return e},Ic=function(e,t){return yk(e,xk(t))},Sk=function(e,t,n){return new Promise(function(r,i){var a=function(l){try{s(n.next(l))}catch(u){i(u)}},o=function(l){try{s(n.throw(l))}catch(u){i(u)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(a,o)};s((n=n.apply(e,t)).next())})},kk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Al:Al.apply(null,arguments)};function Ek(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function dr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return fr(fr({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var Ck=function(e){My(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ji([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ji([void 0],n.concat(this))))},t}(Array),jk=function(e){My(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Ji([void 0],n[0].concat(this)))):new(t.bind.apply(t,Ji([void 0],n.concat(this))))},t}(Array);function sd(e){return Ln(e)?Ty(e,function(){}):e}function Pk(e){return typeof e=="boolean"}function Nk(){return function(t){return Ak(t)}}function Ak(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new Ck;return n&&(Pk(n)?r.push(yg):r.push(yg.withExtraArgument(n.extraArgument))),r}var Ok=!0;function Rk(e){var t=Nk(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,o=a===void 0?t():a,s=n.devTools,l=s===void 0?!0:s,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,p=d===void 0?void 0:d,v;if(typeof i=="function")v=i;else if(Ek(i))v=mk(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=o;typeof h=="function"&&(h=h(t));var y=hk.apply(void 0,h),b=Al;l&&(b=kk(fr({trace:!Ok},typeof l=="object"&&l)));var g=new jk(y),m=g;Array.isArray(p)?m=Ji([y],p):typeof p=="function"&&(m=p(g));var w=b.apply(void 0,m);return Ly(v,c,w)}function zy(e){var t={},n=[],r,i={addCase:function(a,o){var s=typeof a=="string"?a:a.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=o,i},addMatcher:function(a,o){return n.push({matcher:a,reducer:o}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function Tk(e){return typeof e=="function"}function Lk(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?zy(t):[t,n,r],a=i[0],o=i[1],s=i[2],l;if(Tk(e))l=function(){return sd(e())};else{var u=sd(e);l=function(){return u}}function c(d,p){d===void 0&&(d=l());var v=Ji([a[p.type]],o.filter(function(h){var y=h.matcher;return y(p)}).map(function(h){var y=h.reducer;return y}));return v.filter(function(h){return!!h}).length===0&&(v=[s]),v.reduce(function(h,y){if(y)if(vr(h)){var b=h,g=y(b,p);return g===void 0?h:g}else{if(Ln(h))return Ty(h,function(m){return y(m,p)});var g=y(h,p);if(g===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return h},d)}return c.getInitialState=l,c}function _k(e,t){return e+"/"+t}function Pu(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:sd(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},o={},s={};i.forEach(function(c){var d=r[c],p=_k(t,c),v,h;"reducer"in d?(v=d.reducer,h=d.prepare):v=d,a[c]=v,o[p]=v,s[c]=h?dr(p,h):dr(p)});function l(){var c=typeof e.extraReducers=="function"?zy(e.extraReducers):[e.extraReducers],d=c[0],p=d===void 0?{}:d,v=c[1],h=v===void 0?[]:v,y=c[2],b=y===void 0?void 0:y,g=fr(fr({},p),o);return Lk(n,function(m){for(var w in g)m.addCase(w,g[w]);for(var x=0,S=h;x<S.length;x++){var P=S[x];m.addMatcher(P.matcher,P.reducer)}b&&m.addDefaultCase(b)})}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:s,caseReducers:a,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var Ik="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Mk=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Ik[Math.random()*64|0];return t},zk=["name","message","stack","code"],Mc=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),bg=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Dk=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=zk;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},ht=function(){function e(t,n,r){var i=dr(t+"/fulfilled",function(u,c,d,p){return{payload:u,meta:Ic(fr({},p||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),a=dr(t+"/pending",function(u,c,d){return{payload:void 0,meta:Ic(fr({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=dr(t+"/rejected",function(u,c,d,p,v){return{payload:p,error:(r&&r.serializeError||Dk)(u||"Rejected"),meta:Ic(fr({},v||{}),{arg:d,requestId:c,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,p){var v=r!=null&&r.idGenerator?r.idGenerator(u):Mk(),h=new s,y;function b(m){y=m,h.abort()}var g=function(){return Sk(this,null,function(){var m,w,x,S,P,C,O;return gk(this,function(z){switch(z.label){case 0:return z.trys.push([0,4,,5]),S=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,u,{getState:d,extra:p}),Fk(S)?[4,S]:[3,2];case 1:S=z.sent(),z.label=2;case 2:if(S===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(L,Z){return h.signal.addEventListener("abort",function(){return Z({name:"AbortError",message:y||"Aborted"})})}),c(a(v,u,(w=r==null?void 0:r.getPendingMeta)==null?void 0:w.call(r,{requestId:v,arg:u},{getState:d,extra:p}))),[4,Promise.race([P,Promise.resolve(n(u,{dispatch:c,getState:d,extra:p,requestId:v,signal:h.signal,abort:b,rejectWithValue:function(L,Z){return new Mc(L,Z)},fulfillWithValue:function(L,Z){return new bg(L,Z)}})).then(function(L){if(L instanceof Mc)throw L;return L instanceof bg?i(L.payload,v,u,L.meta):i(L,v,u)})])];case 3:return x=z.sent(),[3,5];case 4:return C=z.sent(),x=C instanceof Mc?o(null,v,u,C.payload,C.meta):o(C,v,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(x)&&x.meta.condition,O||c(x),[2,x]}})})}();return Object.assign(g,{abort:b,requestId:v,arg:u,unwrap:function(){return g.then($k)}})}}return Object.assign(l,{pending:a,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function $k(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Fk(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Hp="listenerMiddleware";dr(Hp+"/add");dr(Hp+"/removeAll");dr(Hp+"/remove");var Sg;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ik();const Uk="/assets/vending-machine-1-137865f7.png",Bk="/assets/vending-machine-2-67f0267a.png",Hk="/assets/vending-machine-4-ee4b0cd5.png",Dy=[{id:1,url:"/",text:"home",textGe:"მთავარი"},{id:2,url:"products",text:"products",textGe:"პროდუქტები",hoverTrigger:!0},{id:3,url:"service",text:"service",textGe:"სერვისი"},{id:4,url:"about",text:"about us",textGe:"ჩვენს შესახებ"},{id:5,url:"contacts",text:"contact us",textGe:"კონტაქტი"}],Vk=[{text:"FAQ",textGe:"FAQ",to:"faq"},{text:"vending machines",textGe:"ვენდინგ აპარატები",to:"products/vending"},{text:"coffee machines",textGe:"ყავის აპარატები",to:"products/coffee"},{text:"snacks and ingredients",textGe:"სნექები და ინგრედიენტები",to:"products/snacks-and-ingredients"}],Wk="/assets/company2-26c0cabe.jpg",Gk="/assets/company4-dee4c137.jpg",Yk="/assets/company8-1331edcd.jpg",qk="/assets/company9-182f8689.jpg",Qk="/assets/company10-95c7c218.jpg",Kk=[Wk,Gk,Yk,qk,Qk],Jk="/assets/company1-white-6613f2e0.png",Xk="/assets/company2-white-6c665bcf.png",Zk="/assets/company3-white-71624a57.png",eE="/assets/company4-white-f707e5c8.png",tE="/assets/company5-white-d3fae296.png",nE=[Jk,Zk,Xk,eE,tE];function $y(e,t){return function(){return e.apply(t,arguments)}}const{toString:rE}=Object.prototype,{getPrototypeOf:Vp}=Object,Nu=(e=>t=>{const n=rE.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yn=e=>(e=e.toLowerCase(),t=>Nu(t)===e),Au=e=>t=>typeof t===e,{isArray:sa}=Array,wo=Au("undefined");function iE(e){return e!==null&&!wo(e)&&e.constructor!==null&&!wo(e.constructor)&&Bt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fy=yn("ArrayBuffer");function aE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fy(e.buffer),t}const oE=Au("string"),Bt=Au("function"),Uy=Au("number"),Ou=e=>e!==null&&typeof e=="object",sE=e=>e===!0||e===!1,Ms=e=>{if(Nu(e)!=="object")return!1;const t=Vp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lE=yn("Date"),uE=yn("File"),cE=yn("Blob"),fE=yn("FileList"),dE=e=>Ou(e)&&Bt(e.pipe),pE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Bt(e.append)&&((t=Nu(e))==="formdata"||t==="object"&&Bt(e.toString)&&e.toString()==="[object FormData]"))},mE=yn("URLSearchParams"),hE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Io(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),sa(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let s;for(r=0;r<o;r++)s=a[r],t.call(null,e[s],s,e)}}function By(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Hy=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Vy=e=>!wo(e)&&e!==Hy;function ld(){const{caseless:e}=Vy(this)&&this||{},t={},n=(r,i)=>{const a=e&&By(t,i)||i;Ms(t[a])&&Ms(r)?t[a]=ld(t[a],r):Ms(r)?t[a]=ld({},r):sa(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Io(arguments[r],n);return t}const gE=(e,t,n,{allOwnKeys:r}={})=>(Io(t,(i,a)=>{n&&Bt(i)?e[a]=$y(i,n):e[a]=i},{allOwnKeys:r}),e),vE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xE=(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Vp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},bE=e=>{if(!e)return null;if(sa(e))return e;let t=e.length;if(!Uy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},SE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Vp(Uint8Array)),kE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},EE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},CE=yn("HTMLFormElement"),jE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),kg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),PE=yn("RegExp"),Wy=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Io(n,(i,a)=>{let o;(o=t(i,a,e))!==!1&&(r[a]=o||i)}),Object.defineProperties(e,r)},NE=e=>{Wy(e,(t,n)=>{if(Bt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Bt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},AE=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return sa(e)?r(e):r(String(e).split(t)),n},OE=()=>{},RE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),zc="abcdefghijklmnopqrstuvwxyz",Eg="0123456789",Gy={DIGIT:Eg,ALPHA:zc,ALPHA_DIGIT:zc+zc.toUpperCase()+Eg},TE=(e=16,t=Gy.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function LE(e){return!!(e&&Bt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const _E=e=>{const t=new Array(10),n=(r,i)=>{if(Ou(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=sa(r)?[]:{};return Io(r,(o,s)=>{const l=n(o,i+1);!wo(l)&&(a[s]=l)}),t[i]=void 0,a}}return r};return n(e,0)},IE=yn("AsyncFunction"),ME=e=>e&&(Ou(e)||Bt(e))&&Bt(e.then)&&Bt(e.catch),N={isArray:sa,isArrayBuffer:Fy,isBuffer:iE,isFormData:pE,isArrayBufferView:aE,isString:oE,isNumber:Uy,isBoolean:sE,isObject:Ou,isPlainObject:Ms,isUndefined:wo,isDate:lE,isFile:uE,isBlob:cE,isRegExp:PE,isFunction:Bt,isStream:dE,isURLSearchParams:mE,isTypedArray:SE,isFileList:fE,forEach:Io,merge:ld,extend:gE,trim:hE,stripBOM:vE,inherits:yE,toFlatObject:xE,kindOf:Nu,kindOfTest:yn,endsWith:wE,toArray:bE,forEachEntry:kE,matchAll:EE,isHTMLForm:CE,hasOwnProperty:kg,hasOwnProp:kg,reduceDescriptors:Wy,freezeMethods:NE,toObjectSet:AE,toCamelCase:jE,noop:OE,toFiniteNumber:RE,findKey:By,global:Hy,isContextDefined:Vy,ALPHABET:Gy,generateString:TE,isSpecCompliantForm:LE,toJSONObject:_E,isAsyncFn:IE,isThenable:ME};function ee(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}N.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Yy=ee.prototype,qy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qy[e]={value:e}});Object.defineProperties(ee,qy);Object.defineProperty(Yy,"isAxiosError",{value:!0});ee.from=(e,t,n,r,i,a)=>{const o=Object.create(Yy);return N.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ee.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const zE=null;function ud(e){return N.isPlainObject(e)||N.isArray(e)}function Qy(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function Cg(e,t,n){return e?e.concat(t).map(function(i,a){return i=Qy(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function DE(e){return N.isArray(e)&&!e.some(ud)}const $E=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function Ru(e,t,n){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!N.isUndefined(b[y])});const r=n.metaTokens,i=n.visitor||c,a=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(i))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(N.isDate(h))return h.toISOString();if(!l&&N.isBlob(h))throw new ee("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(h)||N.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,y,b){let g=h;if(h&&!b&&typeof h=="object"){if(N.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(N.isArray(h)&&DE(h)||(N.isFileList(h)||N.endsWith(y,"[]"))&&(g=N.toArray(h)))return y=Qy(y),g.forEach(function(w,x){!(N.isUndefined(w)||w===null)&&t.append(o===!0?Cg([y],x,a):o===null?y:y+"[]",u(w))}),!1}return ud(h)?!0:(t.append(Cg(b,y,a),u(h)),!1)}const d=[],p=Object.assign($E,{defaultVisitor:c,convertValue:u,isVisitable:ud});function v(h,y){if(!N.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(h),N.forEach(h,function(g,m){(!(N.isUndefined(g)||g===null)&&i.call(t,g,N.isString(m)?m.trim():m,y,p))===!0&&v(g,y?y.concat(m):[m])}),d.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return v(e),t}function jg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Wp(e,t){this._pairs=[],e&&Ru(e,this,t)}const Ky=Wp.prototype;Ky.append=function(t,n){this._pairs.push([t,n])};Ky.toString=function(t){const n=t?function(r){return t.call(this,r,jg)}:jg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function FE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jy(e,t,n){if(!t)return e;const r=n&&n.encode||FE,i=n&&n.serialize;let a;if(i?a=i(t,n):a=N.isURLSearchParams(t)?t.toString():new Wp(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class UE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){N.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Pg=UE,Xy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},BE=typeof URLSearchParams<"u"?URLSearchParams:Wp,HE=typeof FormData<"u"?FormData:null,VE=typeof Blob<"u"?Blob:null,WE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),GE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),pn={isBrowser:!0,classes:{URLSearchParams:BE,FormData:HE,Blob:VE},isStandardBrowserEnv:WE,isStandardBrowserWebWorkerEnv:GE,protocols:["http","https","file","blob","url","data"]};function YE(e,t){return Ru(e,new pn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return pn.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function qE(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function QE(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Zy(e){function t(n,r,i,a){let o=n[a++];const s=Number.isFinite(+o),l=a>=n.length;return o=!o&&N.isArray(i)?i.length:o,l?(N.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!s):((!i[o]||!N.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&N.isArray(i[o])&&(i[o]=QE(i[o])),!s)}if(N.isFormData(e)&&N.isFunction(e.entries)){const n={};return N.forEachEntry(e,(r,i)=>{t(qE(r),i,n,0)}),n}return null}function KE(e,t,n){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Gp={transitional:Xy,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=N.isObject(t);if(a&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return i&&i?JSON.stringify(Zy(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return YE(t,this.formSerializer).toString();if((s=N.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ru(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),KE(t)):t}],transformResponse:[function(t){const n=this.transitional||Gp.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&N.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?ee.from(s,ee.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pn.classes.FormData,Blob:pn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],e=>{Gp.headers[e]={}});const Yp=Gp,JE=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&JE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ng=Symbol("internals");function Ea(e){return e&&String(e).trim().toLowerCase()}function zs(e){return e===!1||e==null?e:N.isArray(e)?e.map(zs):String(e)}function ZE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const e5=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Dc(e,t,n,r,i){if(N.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!N.isString(t)){if(N.isString(r))return t.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(t)}}function t5(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function n5(e,t){const n=N.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Tu{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(s,l,u){const c=Ea(l);if(!c)throw new Error("header name must be a non-empty string");const d=N.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=zs(s))}const o=(s,l)=>N.forEach(s,(u,c)=>a(u,c,l));return N.isPlainObject(t)||t instanceof this.constructor?o(t,n):N.isString(t)&&(t=t.trim())&&!e5(t)?o(XE(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Ea(t),t){const r=N.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ZE(i);if(N.isFunction(n))return n.call(this,i,r);if(N.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ea(t),t){const r=N.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Dc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=Ea(o),o){const s=N.findKey(r,o);s&&(!n||Dc(r,r[s],s,n))&&(delete r[s],i=!0)}}return N.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Dc(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return N.forEach(this,(i,a)=>{const o=N.findKey(r,a);if(o){n[o]=zs(i),delete n[a];return}const s=t?t5(a):String(a).trim();s!==a&&delete n[a],n[s]=zs(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return N.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ng]=this[Ng]={accessors:{}}).accessors,i=this.prototype;function a(o){const s=Ea(o);r[s]||(n5(i,o),r[s]=!0)}return N.isArray(t)?t.forEach(a):a(t),this}}Tu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Tu.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});N.freezeMethods(Tu);const Nn=Tu;function $c(e,t){const n=this||Yp,r=t||n,i=Nn.from(r.headers);let a=r.data;return N.forEach(e,function(s){a=s.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function e2(e){return!!(e&&e.__CANCEL__)}function Mo(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}N.inherits(Mo,ee,{__CANCEL__:!0});function r5(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const i5=pn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,s){const l=[];l.push(n+"="+encodeURIComponent(r)),N.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),N.isString(a)&&l.push("path="+a),N.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function a5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function o5(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function t2(e,t){return e&&!a5(t)?o5(e,t):t}const s5=pn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const s=N.isString(o)?i(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function l5(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function u5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[a];o||(o=u),n[i]=l,r[i]=u;let d=a,p=0;for(;d!==i;)p+=n[d++],d=d%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),u-o<t)return;const v=c&&u-c;return v?Math.round(p*1e3/v):void 0}}function Ag(e,t){let n=0;const r=u5(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-n,l=r(s),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&u?(o-a)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const c5=typeof XMLHttpRequest<"u",f5=c5&&function(e){return new Promise(function(n,r){let i=e.data;const a=Nn.from(e.headers).normalize(),o=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let u;N.isFormData(i)&&(pn.isStandardBrowserEnv||pn.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.getContentType(/^\s*multipart\/form-data/)?N.isString(u=a.getContentType())&&a.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):a.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(h+":"+y))}const d=t2(e.baseURL,e.url);c.open(e.method.toUpperCase(),Jy(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const h=Nn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};r5(function(m){n(m),l()},function(m){r(m),l()},b),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new ee("Request aborted",ee.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Xy;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new ee(y,b.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,c)),c=null},pn.isStandardBrowserEnv){const h=(e.withCredentials||s5(d))&&e.xsrfCookieName&&i5.read(e.xsrfCookieName);h&&a.set(e.xsrfHeaderName,h)}i===void 0&&a.setContentType(null),"setRequestHeader"in c&&N.forEach(a.toJSON(),function(y,b){c.setRequestHeader(b,y)}),N.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ag(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ag(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{c&&(r(!h||h.type?new Mo(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const v=l5(d);if(v&&pn.protocols.indexOf(v)===-1){r(new ee("Unsupported protocol "+v+":",ee.ERR_BAD_REQUEST,e));return}c.send(i||null)})},cd={http:zE,xhr:f5};N.forEach(cd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Og=e=>`- ${e}`,d5=e=>N.isFunction(e)||e===null||e===!1,n2={getAdapter:e=>{e=N.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){n=e[a];let o;if(r=n,!d5(n)&&(r=cd[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+a]=r}if(!r){const a=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(Og).join(`
`):" "+Og(a[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:cd};function Fc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Mo(null,e)}function Rg(e){return Fc(e),e.headers=Nn.from(e.headers),e.data=$c.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),n2.getAdapter(e.adapter||Yp.adapter)(e).then(function(r){return Fc(e),r.data=$c.call(e,e.transformResponse,r),r.headers=Nn.from(r.headers),r},function(r){return e2(r)||(Fc(e),r&&r.response&&(r.response.data=$c.call(e,e.transformResponse,r.response),r.response.headers=Nn.from(r.response.headers))),Promise.reject(r)})}const Tg=e=>e instanceof Nn?e.toJSON():e;function Xi(e,t){t=t||{};const n={};function r(u,c,d){return N.isPlainObject(u)&&N.isPlainObject(c)?N.merge.call({caseless:d},u,c):N.isPlainObject(c)?N.merge({},c):N.isArray(c)?c.slice():c}function i(u,c,d){if(N.isUndefined(c)){if(!N.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function a(u,c){if(!N.isUndefined(c))return r(void 0,c)}function o(u,c){if(N.isUndefined(c)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,c)=>i(Tg(u),Tg(c),!0)};return N.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=l[c]||i,p=d(e[c],t[c],c);N.isUndefined(p)&&d!==s||(n[c]=p)}),n}const r2="1.5.1",qp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Lg={};qp.transitional=function(t,n,r){function i(a,o){return"[Axios v"+r2+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,s)=>{if(t===!1)throw new ee(i(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!Lg[o]&&(Lg[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,s):!0}};function p5(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const s=e[a],l=s===void 0||o(s,a,e);if(l!==!0)throw new ee("option "+a+" must be "+l,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+a,ee.ERR_BAD_OPTION)}}const fd={assertOptions:p5,validators:qp},Wn=fd.validators;class Ol{constructor(t){this.defaults=t,this.interceptors={request:new Pg,response:new Pg}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Xi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&fd.assertOptions(r,{silentJSONParsing:Wn.transitional(Wn.boolean),forcedJSONParsing:Wn.transitional(Wn.boolean),clarifyTimeoutError:Wn.transitional(Wn.boolean)},!1),i!=null&&(N.isFunction(i)?n.paramsSerializer={serialize:i}:fd.assertOptions(i,{encode:Wn.function,serialize:Wn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=a&&N.merge(a.common,a[n.method]);a&&N.forEach(["delete","get","head","post","put","patch","common"],h=>{delete a[h]}),n.headers=Nn.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,d=0,p;if(!l){const h=[Rg.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,u),p=h.length,c=Promise.resolve(n);d<p;)c=c.then(h[d++],h[d++]);return c}p=s.length;let v=n;for(d=0;d<p;){const h=s[d++],y=s[d++];try{v=h(v)}catch(b){y.call(this,b);break}}try{c=Rg.call(this,v)}catch(h){return Promise.reject(h)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Xi(this.defaults,t);const n=t2(t.baseURL,t.url);return Jy(n,t.params,t.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(t){Ol.prototype[t]=function(n,r){return this.request(Xi(r||{},{method:t,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,s){return this.request(Xi(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Ol.prototype[t]=n(),Ol.prototype[t+"Form"]=n(!0)});const Ds=Ol;class Qp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(s=>{r.subscribe(s),a=s}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,s){r.reason||(r.reason=new Mo(a,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qp(function(i){t=i}),cancel:t}}}const m5=Qp;function h5(e){return function(n){return e.apply(null,n)}}function g5(e){return N.isObject(e)&&e.isAxiosError===!0}const dd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dd).forEach(([e,t])=>{dd[t]=e});const v5=dd;function i2(e){const t=new Ds(e),n=$y(Ds.prototype.request,t);return N.extend(n,Ds.prototype,t,{allOwnKeys:!0}),N.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return i2(Xi(e,i))},n}const Ue=i2(Yp);Ue.Axios=Ds;Ue.CanceledError=Mo;Ue.CancelToken=m5;Ue.isCancel=e2;Ue.VERSION=r2;Ue.toFormData=Ru;Ue.AxiosError=ee;Ue.Cancel=Ue.CanceledError;Ue.all=function(t){return Promise.all(t)};Ue.spread=h5;Ue.isAxiosError=g5;Ue.mergeConfig=Xi;Ue.AxiosHeaders=Nn;Ue.formToJSON=e=>Zy(N.isHTMLForm(e)?new FormData(e):e);Ue.getAdapter=n2.getAdapter;Ue.HttpStatusCode=v5;Ue.default=Ue;const y5=Ue;function a2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a2(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function tr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a2(e))&&(r&&(r+=" "),r+=t);return r}const Wa=e=>typeof e=="number"&&!isNaN(e),Jr=e=>typeof e=="string",bt=e=>typeof e=="function",$s=e=>Jr(e)||bt(e)?e:null,Uc=e=>k.isValidElement(e)||Jr(e)||bt(e)||Wa(e);function x5(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function Lu(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(o){let{children:s,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:p}=o;const v=r?`${t}--${l}`:t,h=r?`${n}--${l}`:n,y=k.useRef(0);return k.useLayoutEffect(()=>{const b=d.current,g=v.split(" "),m=w=>{w.target===d.current&&(b.dispatchEvent(new Event("d")),b.removeEventListener("animationend",m),b.removeEventListener("animationcancel",m),y.current===0&&w.type!=="animationcancel"&&b.classList.remove(...g))};b.classList.add(...g),b.addEventListener("animationend",m),b.addEventListener("animationcancel",m)},[]),k.useEffect(()=>{const b=d.current,g=()=>{b.removeEventListener("animationend",g),i?x5(b,c,a):c()};p||(u?g():(y.current=1,b.className+=` ${h}`,b.addEventListener("animationend",g)))},[p]),q.createElement(q.Fragment,null,s)}}function _g(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const zt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},ls=e=>{let{theme:t,type:n,...r}=e;return q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Bc={info:function(e){return q.createElement(ls,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return q.createElement(ls,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return q.createElement(ls,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return q.createElement(ls,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return q.createElement("div",{className:"Toastify__spinner"})}};function w5(e){const[,t]=k.useReducer(v=>v+1,0),[n,r]=k.useState([]),i=k.useRef(null),a=k.useRef(new Map).current,o=v=>n.indexOf(v)!==-1,s=k.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:v=>a.get(v)}).current;function l(v){let{containerId:h}=v;const{limit:y}=s.props;!y||h&&s.containerId!==h||(s.count-=s.queue.length,s.queue=[])}function u(v){r(h=>v==null?[]:h.filter(y=>y!==v))}function c(){const{toastContent:v,toastProps:h,staleId:y}=s.queue.shift();p(v,h,y)}function d(v,h){let{delay:y,staleId:b,...g}=h;if(!Uc(v)||function(G){return!i.current||s.props.enableMultiContainer&&G.containerId!==s.props.containerId||a.has(G.toastId)&&G.updateId==null}(g))return;const{toastId:m,updateId:w,data:x}=g,{props:S}=s,P=()=>u(m),C=w==null;C&&s.count++;const O={...S,style:S.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(g).filter(G=>{let[Te,be]=G;return be!=null})),toastId:m,updateId:w,data:x,closeToast:P,isIn:!1,className:$s(g.className||S.toastClassName),bodyClassName:$s(g.bodyClassName||S.bodyClassName),progressClassName:$s(g.progressClassName||S.progressClassName),autoClose:!g.isLoading&&(z=g.autoClose,L=S.autoClose,z===!1||Wa(z)&&z>0?z:L),deleteToast(){const G=_g(a.get(m),"removed");a.delete(m),zt.emit(4,G);const Te=s.queue.length;if(s.count=m==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),Te>0){const be=m==null?s.props.limit:1;if(Te===1||be===1)s.displayedToast++,c();else{const qe=be>Te?Te:be;s.displayedToast=qe;for(let ie=0;ie<qe;ie++)c()}}else t()}};var z,L;O.iconOut=function(G){let{theme:Te,type:be,isLoading:qe,icon:ie}=G,oe=null;const T={theme:Te,type:be};return ie===!1||(bt(ie)?oe=ie(T):k.isValidElement(ie)?oe=k.cloneElement(ie,T):Jr(ie)||Wa(ie)?oe=ie:qe?oe=Bc.spinner():(D=>D in Bc)(be)&&(oe=Bc[be](T))),oe}(O),bt(g.onOpen)&&(O.onOpen=g.onOpen),bt(g.onClose)&&(O.onClose=g.onClose),O.closeButton=S.closeButton,g.closeButton===!1||Uc(g.closeButton)?O.closeButton=g.closeButton:g.closeButton===!0&&(O.closeButton=!Uc(S.closeButton)||S.closeButton);let Z=v;k.isValidElement(v)&&!Jr(v.type)?Z=k.cloneElement(v,{closeToast:P,toastProps:O,data:x}):bt(v)&&(Z=v({closeToast:P,toastProps:O,data:x})),S.limit&&S.limit>0&&s.count>S.limit&&C?s.queue.push({toastContent:Z,toastProps:O,staleId:b}):Wa(y)?setTimeout(()=>{p(Z,O,b)},y):p(Z,O,b)}function p(v,h,y){const{toastId:b}=h;y&&a.delete(y);const g={content:v,props:h};a.set(b,g),r(m=>[...m,b].filter(w=>w!==y)),zt.emit(4,_g(g,g.props.updateId==null?"added":"updated"))}return k.useEffect(()=>(s.containerId=e.containerId,zt.cancelEmit(3).on(0,d).on(1,v=>i.current&&u(v)).on(5,l).emit(2,s),()=>{a.clear(),zt.emit(3,s)}),[]),k.useEffect(()=>{s.props=e,s.isToastActive=o,s.displayedToast=n.length}),{getToastToRender:function(v){const h=new Map,y=Array.from(a.values());return e.newestOnTop&&y.reverse(),y.forEach(b=>{const{position:g}=b.props;h.has(g)||h.set(g,[]),h.get(g).push(b)}),Array.from(h,b=>v(b[0],b[1]))},containerRef:i,isToastActive:o}}function Ig(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Mg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function b5(e){const[t,n]=k.useState(!1),[r,i]=k.useState(!1),a=k.useRef(null),o=k.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=k.useRef(e),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:p}=e;function v(x){if(e.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",g),document.addEventListener("mouseup",m),document.addEventListener("touchmove",g),document.addEventListener("touchend",m);const S=a.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=Ig(x.nativeEvent),o.y=Mg(x.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(x){if(o.boundingRect){const{top:S,bottom:P,left:C,right:O}=o.boundingRect;x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=C&&o.x<=O&&o.y>=S&&o.y<=P?b():y()}}function y(){n(!0)}function b(){n(!1)}function g(x){const S=a.current;o.canDrag&&S&&(o.didMove=!0,t&&b(),o.x=Ig(x),o.y=Mg(x),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function m(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",m);const x=a.current;if(o.canDrag&&o.didMove&&x){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void e.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${e.draggableDirection}(0)`,x.style.opacity="1"}}k.useEffect(()=>{s.current=e}),k.useEffect(()=>(a.current&&a.current.addEventListener("d",y,{once:!0}),bt(e.onOpen)&&e.onOpen(k.isValidElement(e.children)&&e.children.props),()=>{const x=s.current;bt(x.onClose)&&x.onClose(k.isValidElement(x.children)&&x.children.props)}),[]),k.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",y),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))}),[e.pauseOnFocusLoss]);const w={onMouseDown:v,onTouchStart:v,onMouseUp:h,onTouchEnd:h};return l&&u&&(w.onMouseEnter=b,w.onMouseLeave=y),p&&(w.onClick=x=>{d&&d(x),o.canCloseOnClick&&c()}),{playToast:y,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:w}}function o2(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S5(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:a,className:o,style:s,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:p}=e;const v=a||l&&u===0,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(h.transform=`scaleX(${u})`);const y=tr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),b=bt(o)?o({rtl:c,type:i,defaultClassName:y}):tr(y,o);return q.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:b,style:h,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const k5=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=b5(e),{closeButton:a,children:o,autoClose:s,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:p,position:v,className:h,style:y,bodyClassName:b,bodyStyle:g,progressClassName:m,progressStyle:w,updateId:x,role:S,progress:P,rtl:C,toastId:O,deleteToast:z,isIn:L,isLoading:Z,iconOut:G,closeOnClick:Te,theme:be}=e,qe=tr("Toastify__toast",`Toastify__toast-theme--${be}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":Te}),ie=bt(h)?h({rtl:C,position:v,type:u,defaultClassName:qe}):tr(qe,h),oe=!!P||!s,T={closeToast:d,type:u,theme:be};let D=null;return a===!1||(D=bt(a)?a(T):k.isValidElement(a)?k.cloneElement(a,T):o2(T)),q.createElement(p,{isIn:L,done:z,position:v,preventExitTransition:n,nodeRef:r},q.createElement("div",{id:O,onClick:l,className:ie,...i,style:y,ref:r},q.createElement("div",{...L&&{role:S},className:bt(b)?b({type:u}):tr("Toastify__toast-body",b),style:g},G!=null&&q.createElement("div",{className:tr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Z})},G),q.createElement("div",null,o)),D,q.createElement(S5,{...x&&!oe?{key:`pb-${x}`}:{},rtl:C,theme:be,delay:s,isRunning:t,isIn:L,closeToast:d,hide:c,type:u,style:w,className:m,controlledProgress:oe,progress:P||0})))},_u=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},E5=Lu(_u("bounce",!0));Lu(_u("slide",!0));Lu(_u("zoom"));Lu(_u("flip"));const pd=k.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=w5(e),{className:a,style:o,rtl:s,containerId:l}=e;function u(c){const d=tr("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":s});return bt(a)?a({position:c,rtl:s,defaultClassName:d}):tr(d,$s(a))}return k.useEffect(()=>{t&&(t.current=r.current)},[]),q.createElement("div",{ref:r,className:"Toastify",id:l},n((c,d)=>{const p=d.length?{...o}:{...o,pointerEvents:"none"};return q.createElement("div",{className:u(c),style:p,key:`container-${c}`},d.map((v,h)=>{let{content:y,props:b}=v;return q.createElement(k5,{...b,isIn:i(b.toastId),style:{...b.style,"--nth":h+1,"--len":d.length},key:`toast-${b.key}`},y)}))}))});pd.displayName="ToastContainer",pd.defaultProps={position:"top-right",transition:E5,autoClose:5e3,closeButton:o2,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Hc,Rr=new Map,Ra=[],C5=1;function s2(){return""+C5++}function j5(e){return e&&(Jr(e.toastId)||Wa(e.toastId))?e.toastId:s2()}function Ga(e,t){return Rr.size>0?zt.emit(0,e,t):Ra.push({content:e,options:t}),t.toastId}function Rl(e,t){return{...t,type:t&&t.type||e,toastId:j5(t)}}function us(e){return(t,n)=>Ga(t,Rl(e,n))}function ve(e,t){return Ga(e,Rl("default",t))}ve.loading=(e,t)=>Ga(e,Rl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ve.promise=function(e,t,n){let r,{pending:i,error:a,success:o}=t;i&&(r=Jr(i)?ve.loading(i,n):ve.loading(i.render,{...n,...i}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,p)=>{if(d==null)return void ve.dismiss(r);const v={type:c,...s,...n,data:p},h=Jr(d)?{render:d}:d;return r?ve.update(r,{...v,...h}):ve(h.render,{...v,...h}),p},u=bt(e)?e():e;return u.then(c=>l("success",o,c)).catch(c=>l("error",a,c)),u},ve.success=us("success"),ve.info=us("info"),ve.error=us("error"),ve.warning=us("warning"),ve.warn=ve.warning,ve.dark=(e,t)=>Ga(e,Rl("default",{theme:"dark",...t})),ve.dismiss=e=>{Rr.size>0?zt.emit(1,e):Ra=Ra.filter(t=>e!=null&&t.options.toastId!==e)},ve.clearWaitingQueue=function(e){return e===void 0&&(e={}),zt.emit(5,e)},ve.isActive=e=>{let t=!1;return Rr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},ve.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:a}=i;const o=Rr.get(a||Hc);return o&&o.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:s2()};a.toastId!==e&&(a.staleId=e);const o=a.render||i;delete a.render,Ga(o,a)}},0)},ve.done=e=>{ve.update(e,{progress:1})},ve.onChange=e=>(zt.on(4,e),()=>{zt.off(4,e)}),ve.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ve.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},zt.on(2,e=>{Hc=e.containerId||e,Rr.set(Hc,e),Ra.forEach(t=>{zt.emit(0,t.content,t.options)}),Ra=[]}).on(3,e=>{Rr.delete(e.containerId||e),Rr.size===0&&zt.off(0).off(1).off(5)});const P5="http://localhost:5002/api/v1",nt=y5.create({baseURL:P5}),N5=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"gel"}).format((e/100).toFixed(2)),ft=({setProductValues:e,e:t})=>{const{name:n,value:r}=t.target;e(i=>({...i,[n]:r}))},Be=(e,t)=>e?ve.success(t,{style:{borderRadius:"20px",boxShadow:"0 4px 5px rgba(0, 0, 0, 0.6)"}}):ve.error(t,{style:{borderRadius:"20px",boxShadow:"0 4px 5px rgba(0, 0, 0, 0.6)"}}),A5=[{id:1,title:"რა მოხდება, თუ ვინმე დაკარგავს ფულს, პროდუქტი გაიჭედება, თანხა ჩამოიჭრება პროდუქტის გაცემის გარეშე და აპარატი გაფუჭდება?",info:"ყველა ვენდინგ აპარატს აქვს მომხმარებელთა მომსახურების ტელეფონის ნომერი თვალსაჩინოდ გამოსახული. როდესაც ამ ნომერზე შემოვა საჩივარი, საკითხი გადაწყდება პრიორიტეტულად 24 საათის განმავლობაში. ჩვენ გვსურს, რომ მომხმარებელმა შეგვატყობინოს ნებისმიერი ასეთი სიტუაციის შესახებ (პატარა თუ დიდი), რადგან საკითხის რაც შეიძლება მალე გამოსწორება ჩვენთვის ძალიან მნიშვნელოვანია."},{id:2,title:"რა ტიპის პროდუქტი შეიძლება მოთავსდეს ვენდინგ აპარატში?",info:"მზა საჭმელი, სნექი, დესერტი და საკონდიტრო ნაწარმი, მკვებავი წვენები, ენერგეტიკული სასმელები, გაზიანი სასმელები, რძეზე დაფუძნებული სასმელები, სასმელი წყალი (რეგულარული, არომატული, მატონიზირებული), სახის ნიღბები, ხელთათმანები, სადეზინფექციო საშუალებები, სანიტარული ჯანდაცვა, კონტრაცეპტული ჯანდაცვა და სხვა ნებისმიერი რამ რაც არ არის მსხვრევადი შეფუთვით."},{id:3,title:"შესაძლებელია თუ არა პროდუქციის მორგება ჩვენი კომპანიის მოთხოვნების შესაბამისად?",info:"ჯორჯიან ვენდინგ გრუფი თანამშრომლობს 150+ ბრენდთან, შეგიძლიათ აირჩიოთ ჩენი პარტნიორებიდან."},{id:4,title:"აპარატში განთავსებული პროდუქტი უსაფრთხოა მოსახმარად?",info:"ჩვენ ვამაყობთ უსაფრთხოების უმაღლესი ხარისხის სტანდარტების დაცვით. ჯორჯიან ვენიდნგ გრუფი უზრუნველყოფს, რომ მხოლოდ სერტიფიცირებული პროდუქტები ცნობილი ბრენდებიდან იყიდება. დაგეგმილი, პერიოდული აუდიტი ატარებს შემოწმებას ჩვენი მაღალეფექტური ოპერაციების გუნდის მიერ, რათა დავრწმუნდეთ, რომ ვადაგასული პროდუქცია ან ვადის გასვლასთან მიახლოებული პროდუქცია არ გაიყიდოს."},{id:5,title:"რა გადახდებია ხელმისაწვდომი ვენდინგ აპარატებში?",info:"ნაღდი ფული (კუპიურები და მონეტები) სმარტ ბარათები (RFID) უკონტაქტო QR დაფუძნებული ციფრული გადახდები, როგორიცაა Paytm, Phonepe და ა.შ. საკრედიტო/სადებეტო ბარათები "},{id:6,title:"რა იქნება ჩვენი მოვალეობა აპარატის დადგმის შემდეგ?",info:"ყურადღების მიქცევა, გაფრთხილება "},{id:7,title:"რამდენად ხშირად ივსება ვენდინგ აპარატი?",info:"ეს დამოკიდებული იქნება გაყიდვებზე. ჩვენ არ გვაქვს კონკრეტული დრო. ამჟამად განლაგებული ვენდინგ აპარატებიდან გამომდინარე, შევსება შეიძლება განსხვავდებოდეს კვირაში ერთხელ ყოველდღიურად და დღეში რამდენჯერმე. ჩვენ ზოგადად არ გვსურს, რომ ჩვენი აპარატები ცარიელი დარჩეს"},{id:8,title:"რამდენი დრო სჭირდება ვენდინგ აპარატის დაყენებას და რა პროცესია?",info:"მას შემდეგ რაც გამოხატავთ ინტერესს ჩვენი პროდუქტის მიმართ, ეს არის პროცესი, რომელიც საჭიროებს შემდეგს; მოთხოვნა წარდგება გუნდში გაეგზავნება წინადადება კლიენტისთვის სტანდარტული პირობებით ხელშეკრულების ხელმოწერა ინსტალაციისთვის ობიექტის მონახულება მიკრო საცალო ვენდინგ აპარატის განთავსება"},{id:9,title:"რა სივრცეა საჭირო ვენდინგ აპარატისთვის ?",info:"ეს დამოკიდებულია აპარატის ტიპზე, რომლის დაყენებასაც აირჩევთ. ზომები, როგორც წესი, მერყეობს 10-15 კვ. მეტრს შორის."},{id:10,title:"რამდენ ენერგიას მოიხმარს ვენდინგ აპარატი?",info:"საშუალო ენერგიის მოხმარება არის დაახლოებით 3 ერთეული დღეში საშუალო ზომის კიოსკისთვის და დაახლოებით 6 ერთეული დღეში დიდი ზომის აპარატისთვის."},{id:11,title:"რა უპირატესობა აქვს ვენდინგ აპარატს?",info:"პროდუქციის შერჩეული ასორტიმენტი არ არის ადამიანთან კონტაქტი 24 X 7 ხელმისაწვდომობა თანამშრომლის/მომხმარებლის გაზრდილი პროდუქტიულობა თანხის დაზოგვა თანამშრომლების ჩართულობა და შენარჩუნება"},{id:12,title:"რა მოთხოვნებია საჭირო ჩემს დაწესებულებაში აპარატის დასაყენებლად?",info:"პროდუქციის შერჩეული ასორტიმენტი არ არის ადამიანთან კონტაქტი 24 X 7 ხელმისაწვდომობა თანამშრომლის/მომხმარებლის გაზრდილი პროდუქტიულობა თანხის დაზოგვა თანამშრომლების ჩართულობა და შენარჩუნება"},{id:13,title:"სად უნდა დავაყენო ან განვათავსო ვენდინგ აპარატი?",info:"ვინაიდან ვენდინგ აპარატი არის მომხმარებლისთვის დამატებითი კომფორტის მიწოდების კონცეფცია, სასურველია დამონტაჟდეს ხალხმრავალ ადგილებში, სადაც მომხმარებლები მუშაობენ ან ისვენებენ. ჩვეულებრივ, დამონტაჟებულია ტიპურ ადგილებში; საკუჭნაო სართულები, სადაც ჩაის/ყავის აპარატებია დამონტაჟებული, კაფეტერია/სასადილო, შენობის მთავარი ფოიე, საერთო კომუნალური ადგილები, ავტობუსების გაჩერებები, გამყოფი ადგილები…"}],O5=e=>{localStorage.setItem("user",JSON.stringify(e))},l2=()=>localStorage.removeItem("user"),u2=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):""},R5="/assets/1-5a90cda7.png",T5="/assets/2-b2649a3d.png",L5="/assets/3-62335eb2.png",_5="/assets/4-dd03e2a0.png",I5="/assets/5-1df7eb3e.png",M5="/assets/6-0183a3bb.png",z5="/assets/7-20cb7241.png",D5="/assets/8-06caace8.png",$5="/assets/9-23bd6e53.png",F5="/assets/10-3b4c2f69.png",U5="/assets/12-d072272e.png",B5="/assets/13-1fa01e4f.png",H5="/assets/14-230a73d2.png",V5="/assets/15-ba449c3c.png",W5="/assets/17-f4211205.png",G5="/assets/18-c2274c5c.png",Y5="/assets/19-1096f47b.png",q5="/assets/20-43b35a1e.png",Q5="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDw8PDw8PDw8QDw8PDw8PDxEPDw8PGBQZGRgUGBgdIS4lHB8rHxgWJjgnKy8xNTU1GiQ7QDszPzw0NTYBDAwMEA8QHhISHjEhJCE2NDE0MTQ0MTQxMTExNDQ0NDQ0NDQ0NDQxNjQ0NDE0NDQ0NDQ0NDQ0MTE0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAAAQIDBAYHBQj/xAA/EAACAQMBBQMIBwcEAwAAAAAAAQIDBBESBQYhMUETUWEHMnGBkaGxwSIkQlJydKIUY4Kys8LRIzOS8TRDYv/EABsBAQEAAwEBAQAAAAAAAAAAAAABBAUGAwIH/8QAMxEBAAIBAgMFBAkFAAAAAAAAAAECAwQRBSExEkFRYbFxkcHhFBUiMkKBodHwEyMzU2L/2gAMAwEAAhEDEQA/APQQACoASGkVGIBGJaiNRLUQEolKI1E0SCs1EpRNEhpAZ6StJaQ8EEaQ0l4DAEaRYNMBgCNInE0wLSBk4kuJu0S0UYOJLibOJLiEYOJEonIcSHEDBoRpKJDQCAAAAAAAaQkXFAOMTSMQijSKASiWkCRokFJItIEhpEAkCRSRSQEYHgvAYAnAYLwGAIwGC8BgCMCwaYFgDNoTRo0S0Bm0S0aNCaAxaJaN2jNoowaM5RORJGckEYNCNJIhoBAAAXFGkUKKNIoBxRcUEUaJBQkWkCQ0iASKSGkUkAkhpDSKwBOB4HJpJttJLm28JHy77b1vRi5OWVHnLlHPdl8/USZiOr7pjtedqxu+pgMHQNob+z4q2pQS6TqJyl6lw9/sOu3W8V/Wb13VVJ/ZjLs4r0KGPfk8baikdObaYuC6i/O21fb1/T4vYdIYPD3d1nzq1H6ZzfzNKO0rim8wrVk//mrUXzPn6THgyPqG/wDsj3fN7XgWDymy3u2hSf8AvdqvuVoqosenhL3natk78UKrUbmPYSfDWm50m/HhmPr4eJ91z0nyYefhOpxRvEdqPL9uUu1tCwVCSklKLUotJqUWmmu9MMHs1jNolo1aJaAzaJaNGiWgMWiJI3aMpIoxkjKSORJGUkEZYArSMDWKLihRRrFBRFGiQRQ0iBpFpCSLSAEikgSKSAWDibR2hTt4apvMn5kF50n/AI8StpXsbalKpPpwjHrKfRI892ptOUnOrVeqT5R+EV3I8smTs8u9naLRzqJ3n7sfrPhDl7Y3gk1qqPnns6MHhPx9Hi/UdRu7udaWZyzjzUuEYLuS6fExrVpTk5SeW+fcl0S7kZ5MO15l1mn0tMMco5+n8756qAnIZPhkqAnIZAoCchkD7+7u8laymovNSg39OlJ+bl8ZR7n4cn7z1Gxu6dxThWpSUoSWU/imujXceIZOx7nbedpWVOpJ9hVkozXSE3hRqfBPw49D3w5ZrPZnp6NNxTh0Zazlxx9qOv8A18+/zeptEtFiaM1yrNoho1aJaAyaIkjVoloDCSM5I3kjOSKMcAXgAi4o2ijOKNYhVJFJEotEFIpCRSAaKQkcDb9/+yWdevwzCk9GetR/Riva0SZ2fVaza0VjrLo29e8EalzKlGWYUNUI4fCUvty9vD1HVr66dSS+7HkvHqz4sJuc+LbzJttvLfXLOdk102m07y7rDpseCtaU7oVkMk5HFZwlxb4JLm33Eez6WxNkVr6sqVJJYWqc5eZCH3n8l19p6Zs7c+xo09M6MLiTWJTrxUm34R5R9RvurseNlawg0u1klOs+rm15voS4eo+4ZuPDFY59XJa/iWTNea452rHh3+c/zZ0fbnk5srhSlbfVa3NOLlKk33OL5L8ODyvaVldbPrSo1VKE4dH9KEo9JRfVM/Rh07yjbEhdWU66iu2tk6ilji6P/sj7OPpiTLiiY3g0GvvTJFMk71nl5x+bym2ulUXdJc14d6N8nx6eYSyuaf8A2j62e7k0mvQ+KMN1kb96sjTJyLJH09f3M2i7mypuT1VKT7CbfN6UtMn4uLiz7zR575Mbhqd1R6OEKi/EnpfucfYehM2GK29IcRxDDGLU3rHTfePz5pZDRoyWejDZNEtGjIYGckZSRvJGUkUZgUARUTVGcTWJFNGiIiWgKRSEhoBo6V5VrvRYU6Wf964Sf4YJy+Ok7sjrW+O6z2pGjFXDodjreNGuM3LTxfFNYx7z4yRM1mIZGkvWmet79Ind4tYvMm+6PxOdk7JLyb39DU6Ureun+8lSlw7k017z5t1u7tGim6lncYSy3Tiqy/Q2zCnHeO51uLX6e8crx6euz5uT725dkrjaFCLWYQbrTT5aYcV+pwPgTTjJxlGUZLnGUJwkvVJHfPJbb/6l1Va82nTguGPOk2/5UMdd7xBrs0U0t7Vnu29/J6SAwNg4ojjX1NTo1YSScZUqkWu9OLTOUfP2zcdja3FTm40p6VyzJrEV7WiTOy1ibTER1l+eZR4v0/M+hHzIfgXubXyOU9meGTGvFQloX2FGH8SXH35NZEP0O9qzPJGQyTkMlfLufkxl9drLo7Wpn1TpY+LPT2eb+S6g+3uauOEaMYZ8ZSTx+g9IZm4I2o5Di9t9XMeER6JYmNiZ7NYhkM0ZDAzZnI1kZyAzAYFRpEuJES0RVxLRES0BaGhIaAaKQkMBjEMAABgAAAAdO3v2kpYtoPKi1Oq1y1fZj8/YfT27tpUU6VJqVZrDa4qmu9+PgdHuasYRlUqSxFPMpPjKUn0Xe2eGa/4Ybbh2lntRmv0jp5+f7OJe11Rpym8Z5QX3p9PV1Z1dyfNvLfFt82+85F/eyrzy1pSyoQznTH5vvZxcmI6bHXsxvPVWQJyfV3b2TO9uqdGKehPVVljhCimtXrfJeLG287Q+r5K0rN7cojm9J8nmz+xsVOS+lcT7b+DCjH4Z9Z2kVKnGEYwilGMYqMYrkopYSGzY1r2Y2cNmyzmyWyT3zuliY2JleSGQzRkMDNkSLZEgIAoAhxLRES4hVxLRES0BaGhIaApDEhoBjEMAGIYAdd25tlxzSov6fKU19nwXj49Dnbbu3TgoweJzys/dj1Z0++qRoUp1Z+bFZfe30S8WzyyX25Q2Gj08Wnt35+EeLgX91ChFzqN8W9MVxnUl3L5vodOv7+deWqTwlnRFeZTXcv8AL4si/vp3E3Um+L4RivNjH7qONkw5nd1OLF2eduvovIZIyfU2FsS4v6vZ0YvCxqnLPZ0498n39y5skRM8oel71pWbWnaIYbNsK13VjRoxc5z5LpFdZSfRLvPZd2N36Wz6OiOJVpYdarjGp/dXdFdF6zTd/YNDZ9LRSjmbS7SrJLXUa+Xcj7BmYsXY5z1crxDiM6mexTlSPfPnPwj3kJjEezWJYmNiYEshlMhgQyJFsiQCAkAHE1iYxNUBaLRCLQFoaJRSApFIhFAUAhgMAADq+8l4oVlB9KcX7W/8HSN8r5SoU4R5SqZl4qMW172vYfR8oV66d8lng7el/NM6XtK77WMOPmyfvRg5Mn2pq6rQab+1jyfm4GQyTka5r0nm2rse6W7FTaNSTy6dCDSqzxnL4PRHo3j2HsWzdnUbSkqNvBQhHoucn1lJ9W+84W6NpGhs60gkk3RhUnjrOa1SftZ9ozcVIrG/e4/X6y+oyTH4YnlHx9oEwEerADJY2JgJksbEwJZDKZDAmRnItmcgJAQFQ4s1izCLNosKtGiM0ykyDRFozRSAtDRKGgKQxABQCGB5t5Q9hXlxdRrUKE6tNUqcW6eJNNOTf0c56roef3NlXptRnSqQl92cZQl7Gj3XaG3rO1n2dxXjTnpUtLUm9Lzh8F4M+fU342Sud0n6KdWX9pi3w0m2/a9G90vEtRjw1x/0u1ERymN/m8WhZ1pebSqS/DCT+CNY7LunjTbXD4rlRqP+09bl5RNkJ47eq/Rb1sfA+vY7yWFxhUbuhKT5RdRQn/xlhkjDWelnrfiuenOcMxHnv+zmbMTjb0ItNNUaSafBpqC4HKEmBludmdwIYgExMGJgDJY2QwEyGUyGwJbM5MuTMpMAyBOQKgizWLMIsuLCuRFjTM4stMg0TLTMky0wNExohMpMCslEJjyBQxCyB5X5Tn9ej+Xp/GZ0y4prsXPqpqOcccOE38juflP/APNj+Xp/GZ0y5l/oNfvE/wBEzX3/AMku30e/0HH7I9XB4eA4t5Sy+a68CMhF8V6UR7Q/RG7z+o2X5S3/AKaPoHzt339Rsvylv/TifQybCOkOFyffn2yZOQyLJXwBNg2S2ANktg2S2AmyWxtmcmApMzkxyZnJlBkCcgEKLNYs48WaRYG8WapmEWXFhWyZSZkmWmQaJlJmSkUpAapgmZ6h6gNMjyZ6g1AdC3/2Dd3FeNehSlVgqMItQac01KTf0eb5rlk832jCdOOiUXGWtNwnFxa4NcU+KP0L2hlVoUpvVOnTm1wTnCMml6WjwvgiZ3iW503GL4cUYrUiYjp3T8X5yjBy5JP0LJrC1rPGKc3x+zGUvgfomFKlHzacI+iEUaqaPn6P5vT67nux/r8nB3eyrGzTTTVrQTTWGnoXBo+jkz1hqMmGjtO8zPirIZI1CcgimyWxORLYDbJbBslsAbMpMbZEmUKTM5McmZSYQ8jM8gAJlxZmNMDeLLUjBSLiwN1IpSMUxpgbah6zHIZIrXWHaGLJYGzqi7Y47yZyTA5Trj/aPE4MlIzcJAfR/aPEfb+J81Qn3lxjIDnqsUqpwoplrIHL7Qes4yKQG+sNRjkeQNXIhyIyJsobkS2JszbCCTIbHJkgAAAAAAA0y4yMxpgbJlJmMZFqQGqKwZqRaYU8BpBMeSBaBdmWMDLsg7JGwAY9kHZGwAZdmGg0EBOkNI2xNgLAmNslyKBkNg5GcpBDkyWxNiAAAAAAAAAAAAAAGiojAC0UgACkUgABoEAAUgAAoAAAlgwAITJYAAmQwACGQwABAAAAAAAAAB//2Q==",K5="/assets/coin-1-40c49027.png",J5="/assets/coin-2-04db2eab.png",X5="/assets/coin-3-79bab72b.png",Z5="/assets/coin-4-589d7f2b.png",e6="/assets/coin-5-d8552d73.png",t6="/assets/coin-6-71dab5bc.png",n6="/assets/5-lari-cf94bc56.png",r6="/assets/10-lari-ae59ec40.png",i6="/assets/card-reader-c512a5f6.png",a6=[R5,T5,L5,_5,I5,M5,z5,D5,$5,F5,U5,B5,H5,V5,W5,G5,Y5,q5,Q5],o6=[K5,J5,X5,Z5,e6,t6,n6,r6,i6],s6=[Uk,Bk,Hk],l6=[...a6],u6=[...o6],c6={isLoading:!1,editing:!1,isNavbarOpen:!1,isSearchBarOpen:!1,isSubmenuOpen:!1,activeImageIndex:0,images:s6,carouselImages:l6,moneyImages:u6,submenuCenter:0,english:!1,submenuPages:[{name:"vending",nameGe:"ვენდინგი",to:"products/vending"},{name:"coffee",nameGe:"ყავა",to:"products/coffee"},{name:"snacks",nameGe:"სნექები",to:"products/snacks-and-ingredients"}],editingInfo:{}},c2=Pu({name:"firstSlice",initialState:c6,reducers:{toggleNavbar:e=>({...e,isNavbarOpen:!e.isNavbarOpen}),toggleSearchbar:e=>({...e,isSearchBarOpen:!e.isSearchBarOpen}),setSubmenuOpen:(e,t)=>({...e,isSubmenuOpen:!0,submenuCenter:t.payload}),hideSubmenu:e=>({...e,isSubmenuOpen:!1}),setActiveImageIndex:(e,t)=>({...e,activeImageIndex:t.payload}),changeLanguage:e=>({...e,english:!e.english})}}),{toggleNavbar:f6,toggleSearchbar:wP,setSubmenuOpen:f2,hideSubmenu:d2,setActiveImageIndex:p2,changeLanguage:d6}=c2.actions,p6=c2.reducer,m6=()=>{const{images:e,activeImageIndex:t}=J(r=>r.menu),n=fe();return f.jsx("div",{className:"dots-container",children:e.map((r,i)=>f.jsx("button",{className:i===t?"dot active":"dot",onClick:()=>n(p2(i))},i))})},h6=()=>{const{images:e,activeImageIndex:t}=J(r=>r.menu),n=fe();return k.useEffect(()=>{const r=setInterval(()=>{n(p2((t+1)%e.length))},6e3);return()=>clearInterval(r)},[t]),f.jsxs("div",{children:[f.jsx("div",{className:"img-container",children:f.jsx(lS,{srcSet:e[t],alt:"Main Image",className:"introduction-img"},e[t])}),f.jsx(m6,{})]})},g6=Ye.section`
  .slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    /* transition: 1000ms; */
    scale: 0.2;
    opacity: 0;
    z-index: 0.8;
  }
  .download-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    /* height: 100px; */
    /* transition: 1000ms; */
    scale: 0.2;
    opacity: 0;
    z-index: 1;
  }
  .slide-img {
    width: 100%;
    height: 100%;
  }
  .activeSlide {
    opacity: 1;
    scale: 0.9;
    z-index: 90;
    transform: scale(1);
    transition: 1500ms linear;
  }
  .nextSlide {
    transform: translateX(120%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .nextNextSlide {
    transform: translateX(240%);
    scale: 0.9;
    z-index: 0;
    transition: 1500ms linear;
    opacity: 1;
  }
  .threeNextSlide {
    transform: translateX(360%);
    scale: 0.9;
    z-index: 0;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fourNextSlide {
    transform: translateX(480%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .fiveNextSlide {
    transform: translateX(600%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .sixNextSlide {
    transform: translateX(720%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .lastSlide {
    transform: translateX(-120%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .lastLastSlide {
    transform: translateX(-240%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .threeLastSlide {
    transform: translateX(-360%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fourLastSlide {
    transform: translateX(-480%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fiveLastSlide {
    transform: translateX(-600%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .sixLastSlide {
    transform: translateX(-720%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .carousel-container {
    padding-top: 0.5rem;
    width: 90%;
    margin: 0 auto;
    min-height: 110px;
    height: 25vh;
    position: relative;
    overflow: hidden;
  }
  .carousel-container-download {
    overflow: hidden;
    width: 100%;
    height: 150px;
    position: relative;
    border-radius: 3rem;
  }
  .carousel-container {
    height: 100px;
  }
  @media screen and (min-width: 450px) {
    .slide {
      height: 90px;
      width: 113px;
    }
    .download-slide {
      height: 105px;
      width: 125px;
    }
  }
  @media screen and (min-width: 890px) {
    .carousel-container {
      padding-top: 0.5rem;
      width: 90%;
      min-height: 190px;
      height: 25vh;
      position: relative;
      overflow: hidden;
      margin: 0 auto;
    }
    .slide{
      height: 112px;
      width: 141px;
    }
  }
  @media screen and (min-width: 1200px) {
    .slide {
      height: 80%;
      width: 14%;
    }
  }
`,m2=({images:e,atHome:t})=>{const[n,r]=k.useState(0),i=e.length-1;return k.useEffect(()=>{let a=setInterval(()=>{r(o=>o===i?0:o+1)},1450);return()=>{clearInterval(a)}},[e]),f.jsx(g6,{children:f.jsx("div",{className:t?"carousel-container":"carousel-container-download",children:e.map((a,o)=>{let s=t?"slide":"download-slide";return o===n?s=t?"activeSlide slide":"download-slide activeSlide":o===(n+1)%e.length?s=t?"nextSlide slide":"download-slide nextSlide":o===(n+2)%e.length?s=t?"nextNextSlide slide":"download-slide nextNextSlide":o===(n+3)%e.length?s=t?"threeNextSlide slide":"download-slide threeNextSlide":o===(n+4)%e.length?s=t?"fourNextSlide slide":"download-slide fourNextSlide":o===(n-1+e.length)%e.length?s=t?"lastSlide slide":"download-slide lastSlide":o===(n-2+e.length)%e.length?s=t?"lastLastSlide slide":"download-slide lastLastSlide":o===(n-3+e.length)%e.length?s=t?"threeLastSlide slide":"download-slide threeLastSlide":o===(n-4+e.length)%e.length&&(s=t?"fourLastSlide slide":"download-slide fourLastSlide"),f.jsx("img",{className:s,srcSet:a,alt:"carousel-image"},o)})})})},v6=!0,y6=()=>{const{carouselImages:e}=J(t=>t.menu);return f.jsx(oS,{children:f.jsxs("div",{className:"introduction",children:[f.jsx(h6,{}),f.jsx(m2,{images:e,atHome:v6})]})})},x6=Ye.footer`
  background: var(--primary-black);
  margin-top: 3rem;
  .footer-container {
    width: 100%;
    background: var(--primary-black);
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 1rem;
    padding-top: 3rem;
    max-width: 1260px;
    margin: 0 auto;
    gap: 1rem;
  }
  h4 {
    color: var(--primary-white);
  }
  .subscribe-btn {
    background: var(--primary-Company-red);
    padding: 1rem 2rem;
    border-radius: 0;
    &:hover {
      background: var(--primary-white);
    }
  }
  .subscribe-underline {
    width: 100%;
    background: var(--primary-white);
    height: 1px;
    opacity: 0.5;
    margin: 1rem 0;
  }
  .subscribe-input {
    height: 2rem;
    border: none;
    width: 80%;
    border-radius: 5px;
    font-size: 1rem;
    padding-left: 0.1rem;
    outline: none;
    background: none;
    color: var(--primary-white);
  }
  .subscribe-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .letterbox {
    transition: var(--transition);
    color: var(--primary-white);
    opacity: 0.6;
    font-size: 1.5rem;
    &:hover {
      opacity: 1;
    }
  }
  /* company images */
  .company-images {
    margin: 2.5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.3rem;
  }
  .company-images img {
    opacity: 0.6;
    height: 3rem;
    width: 6.4rem;
    border: 2px solid transparent;
    object-fit: contain;
    padding-left: 0.5rem;
  }
  .align-image{
    /* margin-left:1.6rem; */
    margin-right:0.4rem;
  }
  /* end */
  .contacts-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 250px;
  }
  .contact {
    /* display: flex; */
    /* border: 2px solid red; */
  }
  .contact-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.2rem;
    width: 100%;
    opacity: 0.9;
  }
  .animated-contact-text {
    position: relative;
    @media screen and (min-width:890px){
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-Company-red);
        transition: var(--transition);
        visibility: hidden;
        transform-origin: bottom left;
      }
      &:hover::after {
        visibility: visible;
        width: 80%;
      }
    }
  }
  .under-text {
    text-decoration: underline;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  .icon-link {
    font-size: 2rem;
    display: none;
  }
  .subscribe {
    margin-top: 2rem;
    width: 100%;
  }
  .subscribe-btn {
    width: 100%;
    padding: 1.15rem;
  }
  .pages-container {
    color: var(--primary-white);
    width: 100%;
    max-width: 350px;
  }
  .pages-container ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
    max-height: 180px;
  }
  .pages-container a {
    width: 100px;
    max-width: 180px;
    opacity: 0.9;
    transition: all 0.1s linear;
    &:hover {
      opacity: 1;
    }
    position: relative;
    @media screen and (min-width: 980px) {
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-Company-red);
        visibility: hidden;
        transition: var(--transition);
        transform-origin: bottom left;
      }
      &:hover::after {
        visibility: visible;
        width: 70%;
      }
    }
  }
  .logos-container {
    opacity: 0.9;
    width: 70%;
    margin-top: 1.5rem;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
  }
  .logo-icon {
    transition: var(--transition);
    &:hover {
      color: yellow;
    }
  }
  .authorization{
    display: none;
  }
  .footer-img {
    height: 60px;
    width: 120px;
  }
  .copy-text-logo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    width: 100%;
    opacity: 0.9;
  }
  @media screen and (min-width: 880px) {
    padding: 0rem 5rem;
    padding-top: 1rem;
    margin-top: 1rem;
    .company-images {
      display: none;
    }
    .pages-container ul {
      max-height: 140px;
    }
  }
  @media screen and (min-width: 1180px) {
    .subscribe {
      margin-top: 0;
      flex-direction: column;
      width: 255px;
      align-items: flex-end;
    }
    .authorization{
      display: inline;
    }
  }
`,h2=({images:e})=>f.jsx("div",{className:"company-images",children:e.map((t,n)=>f.jsx("img",{className:`${n===1?"align-image":""}`,srcSet:t,alt:""},n))}),w6="/assets/gvg-footer-logo-44e21729.png";function zg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zg(Object(n),!0).forEach(function(r){Ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tl(e){"@babel/helpers - typeof";return Tl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tl(e)}function b6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dg(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S6(e,t,n){return t&&Dg(e.prototype,t),n&&Dg(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kp(e,t){return E6(e)||j6(e,t)||g2(e,t)||N6()}function zo(e){return k6(e)||C6(e)||g2(e)||P6()}function k6(e){if(Array.isArray(e))return md(e)}function E6(e){if(Array.isArray(e))return e}function C6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j6(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function g2(e,t){if(e){if(typeof e=="string")return md(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return md(e,t)}}function md(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var $g=function(){},Jp={},v2={},y2=null,x2={mark:$g,measure:$g};try{typeof window<"u"&&(Jp=window),typeof document<"u"&&(v2=document),typeof MutationObserver<"u"&&(y2=MutationObserver),typeof performance<"u"&&(x2=performance)}catch{}var A6=Jp.navigator||{},Fg=A6.userAgent,Ug=Fg===void 0?"":Fg,yr=Jp,we=v2,Bg=y2,cs=x2;yr.document;var Fn=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",w2=~Ug.indexOf("MSIE")||~Ug.indexOf("Trident/"),fs,ds,ps,ms,hs,_n="___FONT_AWESOME___",hd=16,b2="fa",S2="svg-inline--fa",Xr="data-fa-i2svg",gd="data-fa-pseudo-element",O6="data-fa-pseudo-element-pending",Xp="data-prefix",Zp="data-icon",Hg="fontawesome-i2svg",R6="async",T6=["HTML","HEAD","STYLE","SCRIPT"],k2=function(){try{return!0}catch{return!1}}(),ye="classic",_e="sharp",em=[ye,_e];function Do(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ye]}})}var bo=Do((fs={},Ge(fs,ye,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ge(fs,_e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),fs)),So=Do((ds={},Ge(ds,ye,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ge(ds,_e,{solid:"fass",regular:"fasr",light:"fasl"}),ds)),ko=Do((ps={},Ge(ps,ye,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ge(ps,_e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ps)),L6=Do((ms={},Ge(ms,ye,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ge(ms,_e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ms)),_6=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,E2="fa-layers-text",I6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,M6=Do((hs={},Ge(hs,ye,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ge(hs,_e,{900:"fass",400:"fasr",300:"fasl"}),hs)),C2=[1,2,3,4,5,6,7,8,9,10],z6=C2.concat([11,12,13,14,15,16,17,18,19,20]),D6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Eo=new Set;Object.keys(So[ye]).map(Eo.add.bind(Eo));Object.keys(So[_e]).map(Eo.add.bind(Eo));var $6=[].concat(em,zo(Eo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zr.GROUP,zr.SWAP_OPACITY,zr.PRIMARY,zr.SECONDARY]).concat(C2.map(function(e){return"".concat(e,"x")})).concat(z6.map(function(e){return"w-".concat(e)})),Ya=yr.FontAwesomeConfig||{};function F6(e){var t=we.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function U6(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(we&&typeof we.querySelector=="function"){var B6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];B6.forEach(function(e){var t=Kp(e,2),n=t[0],r=t[1],i=U6(F6(n));i!=null&&(Ya[r]=i)})}var j2={styleDefault:"solid",familyDefault:"classic",cssPrefix:b2,replacementClass:S2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ya.familyPrefix&&(Ya.cssPrefix=Ya.familyPrefix);var Zi=_(_({},j2),Ya);Zi.autoReplaceSvg||(Zi.observeMutations=!1);var $={};Object.keys(j2).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){Zi[e]=n,qa.forEach(function(r){return r($)})},get:function(){return Zi[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){Zi.cssPrefix=t,qa.forEach(function(n){return n($)})},get:function(){return Zi.cssPrefix}});yr.FontAwesomeConfig=$;var qa=[];function H6(e){return qa.push(e),function(){qa.splice(qa.indexOf(e),1)}}var Gn=hd,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V6(e){if(!(!e||!Fn)){var t=we.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=we.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return we.head.insertBefore(t,r),e}}var W6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Co(){for(var e=12,t="";e-- >0;)t+=W6[Math.random()*62|0];return t}function la(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tm(e){return e.classList?la(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function P2(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G6(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(P2(e[n]),'" ')},"").trim()}function Iu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function nm(e){return e.size!==mn.size||e.x!==mn.x||e.y!==mn.y||e.rotate!==mn.rotate||e.flipX||e.flipY}function Y6(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function q6(e){var t=e.transform,n=e.width,r=n===void 0?hd:n,i=e.height,a=i===void 0?hd:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&w2?l+="translate(".concat(t.x/Gn-r/2,"em, ").concat(t.y/Gn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Gn,"em), calc(-50% + ").concat(t.y/Gn,"em)) "):l+="translate(".concat(t.x/Gn,"em, ").concat(t.y/Gn,"em) "),l+="scale(".concat(t.size/Gn*(t.flipX?-1:1),", ").concat(t.size/Gn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Q6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function N2(){var e=b2,t=S2,n=$.cssPrefix,r=$.replacementClass,i=Q6;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Vg=!1;function Vc(){$.autoAddCss&&!Vg&&(V6(N2()),Vg=!0)}var K6={mixout:function(){return{dom:{css:N2,insertCss:Vc}}},hooks:function(){return{beforeDOMElementCreation:function(){Vc()},beforeI2svg:function(){Vc()}}}},In=yr||{};In[_n]||(In[_n]={});In[_n].styles||(In[_n].styles={});In[_n].hooks||(In[_n].hooks={});In[_n].shims||(In[_n].shims=[]);var nn=In[_n],A2=[],J6=function e(){we.removeEventListener("DOMContentLoaded",e),Ll=1,A2.map(function(t){return t()})},Ll=!1;Fn&&(Ll=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),Ll||we.addEventListener("DOMContentLoaded",J6));function X6(e){Fn&&(Ll?setTimeout(e,0):A2.push(e))}function $o(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?P2(e):"<".concat(t," ").concat(G6(r),">").concat(a.map($o).join(""),"</").concat(t,">")}function Wg(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Z6=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Wc=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?Z6(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function eC(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function vd(e){var t=eC(e);return t.length===1?t[0].toString(16):null}function tC(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Gg(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function yd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Gg(t);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(e,Gg(t)):nn.styles[e]=_(_({},nn.styles[e]||{}),a),e==="fas"&&yd("fa",t)}var gs,vs,ys,ki=nn.styles,nC=nn.shims,rC=(gs={},Ge(gs,ye,Object.values(ko[ye])),Ge(gs,_e,Object.values(ko[_e])),gs),rm=null,O2={},R2={},T2={},L2={},_2={},iC=(vs={},Ge(vs,ye,Object.keys(bo[ye])),Ge(vs,_e,Object.keys(bo[_e])),vs);function aC(e){return~$6.indexOf(e)}function oC(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!aC(i)?i:null}var I2=function(){var t=function(a){return Wc(ki,function(o,s,l){return o[l]=Wc(s,a,{}),o},{})};O2=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),R2=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),_2=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in ki||$.autoFetchSvg,r=Wc(nC,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});T2=r.names,L2=r.unicodes,rm=Mu($.styleDefault,{family:$.familyDefault})};H6(function(e){rm=Mu(e.styleDefault,{family:$.familyDefault})});I2();function im(e,t){return(O2[e]||{})[t]}function sC(e,t){return(R2[e]||{})[t]}function Dr(e,t){return(_2[e]||{})[t]}function M2(e){return T2[e]||{prefix:null,iconName:null}}function lC(e){var t=L2[e],n=im("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xr(){return rm}var am=function(){return{prefix:null,iconName:null,rest:[]}};function Mu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ye:n,i=bo[r][e],a=So[r][e]||So[r][i],o=e in nn.styles?e:null;return a||o||null}var Yg=(ys={},Ge(ys,ye,Object.keys(ko[ye])),Ge(ys,_e,Object.keys(ko[_e])),ys);function zu(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ge(t,ye,"".concat($.cssPrefix,"-").concat(ye)),Ge(t,_e,"".concat($.cssPrefix,"-").concat(_e)),t),o=null,s=ye;(e.includes(a[ye])||e.some(function(u){return Yg[ye].includes(u)}))&&(s=ye),(e.includes(a[_e])||e.some(function(u){return Yg[_e].includes(u)}))&&(s=_e);var l=e.reduce(function(u,c){var d=oC($.cssPrefix,c);if(ki[c]?(c=rC[s].includes(c)?L6[s][c]:c,o=c,u.prefix=c):iC[s].indexOf(c)>-1?(o=c,u.prefix=Mu(c,{family:s})):d?u.iconName=d:c!==$.replacementClass&&c!==a[ye]&&c!==a[_e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var p=o==="fa"?M2(u.iconName):{},v=Dr(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!ki.far&&ki.fas&&!$.autoFetchSvg&&(u.prefix="fas")}return u},am());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===_e&&(ki.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=Dr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=xr()||"fas"),l}var uC=function(){function e(){b6(this,e),this.definitions={}}return S6(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=_(_({},n.definitions[s]||{}),o[s]),yd(s,o[s]);var l=ko[ye][s];l&&yd(l,o[s]),I2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),qg=[],Ei={},Ii={},cC=Object.keys(Ii);function fC(e,t){var n=t.mixoutsTo;return qg=e,Ei={},Object.keys(Ii).forEach(function(r){cC.indexOf(r)===-1&&delete Ii[r]}),qg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Tl(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Ei[o]||(Ei[o]=[]),Ei[o].push(a[o])})}r.provides&&r.provides(Ii)}),n}function xd(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ei[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Zr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ei[e]||[];i.forEach(function(a){a.apply(null,n)})}function Mn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ii[e]?Ii[e].apply(null,t):void 0}function wd(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||xr();if(t)return t=Dr(n,t)||t,Wg(z2.definitions,n,t)||Wg(nn.styles,n,t)}var z2=new uC,dC=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Zr("noAuto")},pC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fn?(Zr("beforeI2svg",t),Mn("pseudoElements2svg",t),Mn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,X6(function(){hC({autoReplaceSvgRoot:n}),Zr("watch",t)})}},mC={icon:function(t){if(t===null)return null;if(Tl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Mu(t[0]);return{prefix:r,iconName:Dr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(_6))){var i=zu(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||xr(),iconName:Dr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=xr();return{prefix:a,iconName:Dr(a,t)||t}}}},It={noAuto:dC,config:$,dom:pC,parse:mC,library:z2,findIconDefinition:wd,toHtml:$o},hC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?we:n;(Object.keys(nn.styles).length>0||$.autoFetchSvg)&&Fn&&$.autoReplaceSvg&&It.dom.i2svg({node:r})};function Du(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return $o(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Fn){var r=we.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gC(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(nm(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Iu(_(_({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function vC(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},i),{},{id:o}),children:r}]}]}function om(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,v=p===void 0?!1:p,h=r.found?r:n,y=h.width,b=h.height,g=i==="fak",m=[$.replacementClass,a?"".concat($.cssPrefix,"-").concat(a):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),w={children:[],attributes:_(_({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},x=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};v&&(w.attributes[Xr]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||Co())},children:[l]}),delete w.attributes.title);var S=_(_({},w),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:_(_({},x),d.styles)}),P=r.found&&n.found?Mn("generateAbstractMask",S)||{children:[],attributes:{}}:Mn("generateAbstractIcon",S)||{children:[],attributes:{}},C=P.children,O=P.attributes;return S.children=C,S.attributes=O,s?vC(S):gC(S)}function Qg(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=_(_(_({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Xr]="");var c=_({},o.styles);nm(i)&&(c.transform=q6({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Iu(c);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function yC(e){var t=e.content,n=e.title,r=e.extra,i=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Iu(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gc=nn.styles;function bd(e){var t=e[0],n=e[1],r=e.slice(4),i=Kp(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var xC={found:!1,width:512,height:512};function wC(e,t){!k2&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Sd(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=xr()),new Promise(function(r,i){if(Mn("missingIconAbstract"),n==="fa"){var a=M2(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Gc[t]&&Gc[t][e]){var o=Gc[t][e];return r(bd(o))}wC(e,t),r(_(_({},xC),{},{icon:$.showMissingIcons&&e?Mn("missingIconAbstract")||{}:{}}))})}var Kg=function(){},kd=$.measurePerformance&&cs&&cs.mark&&cs.measure?cs:{mark:Kg,measure:Kg},Ta='FA "6.4.2"',bC=function(t){return kd.mark("".concat(Ta," ").concat(t," begins")),function(){return D2(t)}},D2=function(t){kd.mark("".concat(Ta," ").concat(t," ends")),kd.measure("".concat(Ta," ").concat(t),"".concat(Ta," ").concat(t," begins"),"".concat(Ta," ").concat(t," ends"))},sm={begin:bC,end:D2},Fs=function(){};function Jg(e){var t=e.getAttribute?e.getAttribute(Xr):null;return typeof t=="string"}function SC(e){var t=e.getAttribute?e.getAttribute(Xp):null,n=e.getAttribute?e.getAttribute(Zp):null;return t&&n}function kC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function EC(){if($.autoReplaceSvg===!0)return Us.replace;var e=Us[$.autoReplaceSvg];return e||Us.replace}function CC(e){return we.createElementNS("http://www.w3.org/2000/svg",e)}function jC(e){return we.createElement(e)}function $2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?CC:jC:n;if(typeof e=="string")return we.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild($2(o,{ceFn:r}))}),i}function PC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Us={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore($2(i),n)}),n.getAttribute(Xr)===null&&$.keepOriginalSource){var r=we.createComment(PC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~tm(n).indexOf($.replacementClass))return Us.replace(t);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return $o(s)}).join(`
`);n.setAttribute(Xr,""),n.innerHTML=o}};function Xg(e){e()}function F2(e,t){var n=typeof t=="function"?t:Fs;if(e.length===0)n();else{var r=Xg;$.mutateApproach===R6&&(r=yr.requestAnimationFrame||Xg),r(function(){var i=EC(),a=sm.begin("mutate");e.map(i),a(),n()})}}var lm=!1;function U2(){lm=!0}function Ed(){lm=!1}var _l=null;function Zg(e){if(Bg&&$.observeMutations){var t=e.treeCallback,n=t===void 0?Fs:t,r=e.nodeCallback,i=r===void 0?Fs:r,a=e.pseudoElementsCallback,o=a===void 0?Fs:a,s=e.observeMutationsRoot,l=s===void 0?we:s;_l=new Bg(function(u){if(!lm){var c=xr();la(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Jg(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Jg(d.target)&&~D6.indexOf(d.attributeName))if(d.attributeName==="class"&&SC(d.target)){var p=zu(tm(d.target)),v=p.prefix,h=p.iconName;d.target.setAttribute(Xp,v||c),h&&d.target.setAttribute(Zp,h)}else kC(d.target)&&i(d.target)})}}),Fn&&_l.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function NC(){_l&&_l.disconnect()}function AC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function OC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=zu(tm(e));return i.prefix||(i.prefix=xr()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=sC(i.prefix,e.innerText)||im(i.prefix,vd(e.innerText))),!i.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function RC(e){var t=la(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Co()):(t["aria-hidden"]="true",t.focusable="false")),t}function TC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=OC(e),r=n.iconName,i=n.prefix,a=n.rest,o=RC(e),s=xd("parseNodeAttributes",{},e),l=t.styleParser?AC(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var LC=nn.styles;function B2(e){var t=$.autoReplaceSvg==="nest"?e0(e,{styleParser:!1}):e0(e);return~t.extra.classes.indexOf(E2)?Mn("generateLayersText",e,t):Mn("generateSvgReplacementMutation",e,t)}var wr=new Set;em.map(function(e){wr.add("fa-".concat(e))});Object.keys(bo[ye]).map(wr.add.bind(wr));Object.keys(bo[_e]).map(wr.add.bind(wr));wr=zo(wr);function t0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fn)return Promise.resolve();var n=we.documentElement.classList,r=function(d){return n.add("".concat(Hg,"-").concat(d))},i=function(d){return n.remove("".concat(Hg,"-").concat(d))},a=$.autoFetchSvg?wr:em.map(function(c){return"fa-".concat(c)}).concat(Object.keys(LC));a.includes("fa")||a.push("fa");var o=[".".concat(E2,":not([").concat(Xr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Xr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=la(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=sm.begin("onTree"),u=s.reduce(function(c,d){try{var p=B2(d);p&&c.push(p)}catch(v){k2||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){F2(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function _C(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;B2(e).then(function(n){n&&F2([n],t)})}function IC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wd(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wd(i||{})),e(r,_(_({},n),{},{mask:i}))}}var MC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,h=v===void 0?null:v,y=n.classes,b=y===void 0?[]:y,g=n.attributes,m=g===void 0?{}:g,w=n.styles,x=w===void 0?{}:w;if(t){var S=t.prefix,P=t.iconName,C=t.icon;return Du(_({type:"icon"},t),function(){return Zr("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(p?m["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(h||Co()):(m["aria-hidden"]="true",m.focusable="false")),om({icons:{main:bd(C),mask:l?bd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:P,transform:_(_({},mn),i),symbol:o,title:p,maskId:c,titleId:h,extra:{attributes:m,styles:x,classes:b}})})}},zC={mixout:function(){return{icon:IC(MC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=t0,n.nodeCallback=_C,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?we:r,a=n.callback,o=a===void 0?function(){}:a;return t0(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(v,h){Promise.all([Sd(i,s),c.iconName?Sd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=Kp(y,2),g=b[0],m=b[1];v([n,om({icons:{main:g,mask:m},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Iu(s);l.length>0&&(i.style=l);var u;return nm(o)&&(u=Mn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},DC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Du({type:"layer"},function(){Zr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(zo(a)).join(" ")},children:o}]})}}}},$C={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Du({type:"counter",content:n},function(){return Zr("beforeDOMElementCreation",{content:n,params:r}),yC({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat($.cssPrefix,"-layers-counter")].concat(zo(s))}})})}}}},FC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?mn:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,v=p===void 0?{}:p;return Du({type:"text",content:n},function(){return Zr("beforeDOMElementCreation",{content:n,params:r}),Qg({content:n,transform:_(_({},mn),a),title:s,extra:{attributes:d,styles:v,classes:["".concat($.cssPrefix,"-layers-text")].concat(zo(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(w2){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qg({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},UC=new RegExp('"',"ug"),n0=[1105920,1112319];function BC(e){var t=e.replace(UC,""),n=tC(t,0),r=n>=n0[0]&&n<=n0[1],i=t.length===2?t[0]===t[1]:!1;return{value:vd(i?t[0]:t),isSecondary:r||i}}function r0(e,t){var n="".concat(O6).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=la(e.children),o=a.filter(function(C){return C.getAttribute(gd)===t})[0],s=yr.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(I6),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?_e:ye,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?So[p][l[2].toLowerCase()]:M6[p][u],h=BC(d),y=h.value,b=h.isSecondary,g=l[0].startsWith("FontAwesome"),m=im(v,y),w=m;if(g){var x=lC(y);x.iconName&&x.prefix&&(m=x.iconName,v=x.prefix)}if(m&&!b&&(!o||o.getAttribute(Xp)!==v||o.getAttribute(Zp)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var S=TC(),P=S.extra;P.attributes[gd]=t,Sd(m,v).then(function(C){var O=om(_(_({},S),{},{icons:{main:C,mask:am()},prefix:v,iconName:w,extra:P,watchable:!0})),z=we.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=O.map(function(L){return $o(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function HC(e){return Promise.all([r0(e,"::before"),r0(e,"::after")])}function VC(e){return e.parentNode!==document.head&&!~T6.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function i0(e){if(Fn)return new Promise(function(t,n){var r=la(e.querySelectorAll("*")).filter(VC).map(HC),i=sm.begin("searchPseudoElements");U2(),Promise.all(r).then(function(){i(),Ed(),t()}).catch(function(){i(),Ed(),n()})})}var WC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=i0,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?we:r;$.searchPseudoElements&&i0(i)}}},a0=!1,GC={mixout:function(){return{dom:{unwatch:function(){U2(),a0=!0}}}},hooks:function(){return{bootstrap:function(){Zg(xd("mutationObserverCallbacks",{}))},noAuto:function(){NC()},watch:function(n){var r=n.observeMutationsRoot;a0?Ed():Zg(xd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},o0=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},YC={mixout:function(){return{parse:{transform:function(n){return o0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=o0(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:_({},v.outer),children:[{tag:"g",attributes:_({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),v.path)}]}]}}}},Yc={x:0,y:0,width:"100%",height:"100%"};function s0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qC(e){return e.tag==="g"?e.children:[e]}var QC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?zu(i.split(" ").map(function(o){return o.trim()})):am();return a.prefix||(a.prefix=xr()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,p=o.icon,v=Y6({transform:l,containerWidth:d,iconWidth:u}),h={tag:"rect",attributes:_(_({},Yc),{},{fill:"white"})},y=c.children?{children:c.children.map(s0)}:{},b={tag:"g",attributes:_({},v.inner),children:[s0(_({tag:c.tag,attributes:_(_({},c.attributes),v.path)},y))]},g={tag:"g",attributes:_({},v.outer),children:[b]},m="mask-".concat(s||Co()),w="clip-".concat(s||Co()),x={tag:"mask",attributes:_(_({},Yc),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:qC(p)},x]};return r.push(S,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(m,")")},Yc)}),{children:r,attributes:i}}}},KC={provides:function(t){var n=!1;yr.matchMedia&&(n=yr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:_(_({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:_(_({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:_(_({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:_(_({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},JC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},XC=[K6,zC,DC,$C,FC,WC,GC,YC,QC,KC,JC];fC(XC,{mixoutsTo:It});It.noAuto;It.config;It.library;It.dom;var Cd=It.parse;It.findIconDefinition;It.toHtml;var ZC=It.icon;It.layer;It.text;It.counter;var H2={exports:{}},ej="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",tj=ej,nj=tj;function V2(){}function W2(){}W2.resetWarningCache=V2;var rj=function(){function e(r,i,a,o,s,l){if(l!==nj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W2,resetWarningCache:V2};return n.PropTypes=n,n};H2.exports=rj();var ij=H2.exports;const K=v0(ij);function l0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?l0(Object(n),!0).forEach(function(r){Ci(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Il(e){"@babel/helpers - typeof";return Il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Il(e)}function Ci(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oj(e,t){if(e==null)return{};var n=aj(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jd(e){return sj(e)||lj(e)||uj(e)||cj()}function sj(e){if(Array.isArray(e))return Pd(e)}function lj(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uj(e,t){if(e){if(typeof e=="string")return Pd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pd(e,t)}}function Pd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fj(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,v=e.inverse,h=e.border,y=e.listItem,b=e.flip,g=e.size,m=e.rotation,w=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":h,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Ci(t,"fa-".concat(g),typeof g<"u"&&g!==null),Ci(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),Ci(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Ci(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(S){return x[S]?S:null}).filter(function(S){return S})}function dj(e){return e=e-0,e===e}function G2(e){return dj(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var pj=["style"];function mj(e){return e.charAt(0).toUpperCase()+e.slice(1)}function hj(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=G2(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[mj(i)]=a:t[i]=a,t},{})}function Y2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Y2(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=hj(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[G2(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=oj(n,pj);return i.attrs.style=nr(nr({},i.attrs.style),o),e.apply(void 0,[t.tag,nr(nr({},i.attrs),s)].concat(jd(r)))}var q2=!1;try{q2=!0}catch{}function gj(){if(!q2&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function u0(e){if(e&&Il(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Cd.icon)return Cd.icon(e);if(e===null)return null;if(e&&Il(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function qc(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ci({},e,t):{}}var Ae=q.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,u=u0(n),c=qc("classes",[].concat(jd(fj(e)),jd(a.split(" ")))),d=qc("transform",typeof e.transform=="string"?Cd.transform(e.transform):e.transform),p=qc("mask",u0(r)),v=ZC(u,nr(nr(nr(nr({},c),d),p),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!v)return gj("Could not find icon",u),null;var h=v.abstract,y={ref:t};return Object.keys(e).forEach(function(b){Ae.defaultProps.hasOwnProperty(b)||(y[b]=e[b])}),vj(h[0],y)});Ae.displayName="FontAwesomeIcon";Ae.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};Ae.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var vj=Y2.bind(null,q.createElement),yj={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},xj={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},wj={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},bj={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},Sj={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},kj={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},um={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ej={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Cj={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},jj={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Q2={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const K2=({forContacts:e})=>{const{english:t}=J(n=>n.menu);return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(Ne,{to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",target:"_blank",children:f.jsx(Ae,{icon:jj,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsx("h4",{children:t?"0186 Levan Aleksidze #6":"0186 ლევან ალექსიძის #6"}):f.jsx(Ne,{className:"animated-contact-text",target:"_blank",to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",children:t?"0186 Levan Aleksidze #6":"0186 ლევან ალექსიძის #6"})})]}),f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(Ne,{to:"https://wa.me/995599000041",target:"_blank",children:f.jsx(Ae,{icon:kj,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsxs("h4",{children:["+995 599 00 00 41 ",f.jsx("br",{})," ",t?"Hotline":"ცხელი ხაზი"," +995 591 52 55 25"]}):f.jsx(Ne,{className:"animated-contact-text",target:"_blank",to:"https://wa.me/995599000041",children:"+995 599 00 00 41"})})]}),!e&&f.jsx("div",{className:"contact",children:f.jsxs(Ne,{className:"animated-contact-text",children:[t?"Hotline":"ცხელი ხაზი"," +995 591 52 55 25"]})}),f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(Ne,{to:"/service",children:f.jsx(Ae,{icon:Ej,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsxs("h4",{children:["10:00 - 18:00 ",t?"Daily":"ყოველდღე"]}):f.jsx(Ne,{to:"service",className:!e&&"animated-contact-text",children:f.jsxs("h4",{children:["10:00 - 18:00 ",t?"Daily":"ყოველდღე"]})})})]}),f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(Nt,{to:"/contacts",children:f.jsx(Ae,{icon:um,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsx("h4",{className:"under-text",children:"office@geovending.ge"}):f.jsx(Ne,{className:"animated-contact-text under-text",target:"_blank",to:"https://wa.me/995599000041",children:"office@geovending.ge"})})]})]})};var Pj={prefix:"far",iconName:"file-pdf",icon:[512,512,[],"f1c1","M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"]},Nj={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};const Bs=ht("userSlice/subscribeEmail",async({email:e})=>{try{const t=await nt.post("/user/subscribe-email",{email:e});Be(!0,t.data.msg);return}catch(t){throw Be(!1,"Subscription failed, try again later..."),t}}),Hs=ht("userSlice/sendMessage",async({fullName:e,email:t,message:n})=>{try{const r=await nt.post("/user/user-message",{name:e,email:t,message:n});Be(!0,r.data.msg)}catch{Be(!1,"There was an error try again later...")}}),Vs=ht("userSlice/loginUser",async({email:e,password:t})=>{try{const n=await nt.post("/auth/login",{email:e,password:t});return Be(!0,`Welcome ${n.data.user.name}`),O5(n.data.user),{data:n.data.user}}catch(n){throw Be(!1,n.response.data.msg),n}}),Qa=ht("userSlice/logoutUser",async()=>{try{const e=await nt.delete("/auth/logout");Be(!0,"Logged out"),l2()}catch(e){throw e}}),J2=ht("userSlice/showMeUser",async()=>{try{await nt.get("/auth/showMe");return}catch(e){const t=u2(),n=t.userId;throw t&&(l2(),await nt.delete("/auth/autologout",{userId:n})),e}}),Aj={user:u2().role,name:"",userId:"",isLoading:!1},Oj=Pu({name:"userSlice",initialState:Aj,reducers:{},extraReducers:e=>{e.addCase(Bs.pending,t=>{t.isLoading=!0}),e.addCase(Bs.fulfilled,(t,n)=>{t.isLoading=!1}),e.addCase(Bs.rejected,t=>{t.isLoading=!1}),e.addCase(Hs.pending,t=>{t.isLoading=!0}),e.addCase(Hs.fulfilled,(t,n)=>{t.isLoading=!1}),e.addCase(Hs.rejected,t=>{t.isLoading=!1}),e.addCase(Vs.pending,t=>{t.isLoading=!0}),e.addCase(Vs.fulfilled,(t,n)=>{const{name:r,role:i,userId:a}=n.payload.data;t.user=i,t.name=r,t.userId=a,t.isLoading=!1}),e.addCase(Vs.rejected,t=>{t.isLoading=!1}),e.addCase(Qa.pending,t=>{t.isLoading=!0}),e.addCase(Qa.fulfilled,t=>{t.user="",t.isLoading=!1}),e.addCase(Qa.rejected,t=>{t.isLoading=!1}),e.addCase(J2.rejected,t=>{t.isLoading=!1,t.user=""})}}),Rj=Oj.reducer,Tj=()=>{const{isLoading:e}=J(o=>o.user),{english:t}=J(o=>o.menu),[n,r]=k.useState({email:""}),i=fe(),a=o=>{o.preventDefault(),fbq==null||fbq("track","Purchase",{currency:"USD",value:30}),i(Bs({email:n.email}))};return k.useEffect(()=>{(function(o,s,l,u,c,d,p){o.fbq||(c=o.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},o._fbq||(o._fbq=c),c.push=c,c.loaded=!0,c.version="2.0",c.queue=[],d=s.createElement(l),d.async=!0,d.src=u,p=s.getElementsByTagName(l)[0],p.parentNode.insertBefore(d,p))})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","298056935934320"),fbq("track","PageView")}),f.jsx("div",{className:"subscribe",children:f.jsx("div",{className:"subscribe-container",children:f.jsxs("form",{children:[f.jsxs("div",{className:"subscribe-text ge",children:[f.jsx("input",{placeholder:t?"Email...":"მეილი",className:"subscribe-input",type:"email",required:!0,name:"email",id:"email",onChange:o=>ft({setProductValues:r,e:o})}),f.jsx("label",{htmlFor:"email",children:f.jsx(Ae,{className:"letterbox",icon:Nj})})]}),f.jsx("div",{className:"underline subscribe-underline"}),f.jsx("button",{onClick:a,type:"submit",className:"btn subscribe-btn",disabled:e,children:t?"Subscribe":"გამოწერა"})]})})})};var Lj={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},_j={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ij={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]};const Mj=()=>{const e=fe(),t=To(),{user:n}=J(s=>s.user),{english:r}=J(s=>s.menu),i=new Date().getFullYear(),a=!1,o=()=>{e(Qa()),t("/")};return f.jsx(x6,{children:f.jsxs("div",{className:"footer-container",children:[f.jsxs("div",{className:"contacts-container",children:[f.jsx(K2,{forContacts:a}),f.jsxs("div",{className:"logos-container",children:[f.jsx("div",{className:"logo",children:f.jsx(Ne,{to:"https://www.facebook.com/geovending",className:"logo-icon",target:"_blank",children:f.jsx(Ae,{icon:Ij})})}),f.jsx("div",{className:"logo",children:f.jsx(Ne,{to:"https://www.instagram.com/georgianvendinggroup/",className:"logo-icon",target:"_blank",children:f.jsx(Ae,{icon:_j})})}),f.jsx("div",{className:"logo",children:f.jsx(Ne,{to:"https://ge.linkedin.com/in/georgian-vending-group-9a3126291",className:"logo-icon",target:"_blank",children:f.jsx(Ae,{icon:Lj})})}),f.jsx("div",{className:"logo authorization",children:n?f.jsx(Nt,{className:"logo-icon",onClick:o,children:f.jsx(Ae,{icon:yj})}):f.jsx(Nt,{to:"/login",className:"logo-icon",children:f.jsx(Ae,{icon:Sj})})})]})]}),f.jsx("div",{className:"pages-container",children:f.jsxs("ul",{children:[Dy.map(s=>f.jsx(Nt,{to:s.url,children:r?s.text:s.textGe},s.id)),Vk.map((s,l)=>f.jsx(Nt,{to:s.to,children:r?s.text:s.textGe},l))]})}),f.jsx(Tj,{}),f.jsx("div",{className:"big-underline"}),f.jsxs("div",{className:"copy-text-logo",children:[f.jsx("div",{className:"footer-img",children:f.jsx("img",{srcSet:w6,alt:""})}),f.jsx("div",{className:"footer-copy-text",children:f.jsxs("h4",{children:["© ",i," Georgian Vending Group"]})})]}),f.jsx(h2,{images:nE})]})})},zj=({url:e,text:t})=>{const n=fe(),r=a=>{const o=a.target.getBoundingClientRect(),s=(o.left+o.right)/2;n(f2(s))},i=()=>{n(d2())};return f.jsx(Nt,{onMouseOver:r,onMouseLeave:i,to:e,children:t})},Dj=()=>{const{submenuPages:e,isSubmenuOpen:t,submenuCenter:n,english:r}=J(l=>l.menu),i=n-50,a=fe(),o=l=>{a(f2())},s=()=>{a(d2())};return f.jsx("ul",{className:t?"submenu open-submenu":"submenu",style:{left:i},onMouseOver:o,onMouseLeave:s,children:e.map((l,u)=>{const{name:c,to:d,nameGe:p}=l;return f.jsx(Nt,{to:d,children:r?c:p},u)})})};var X2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c0=q.createContext&&q.createContext(X2),pr=globalThis&&globalThis.__assign||function(){return pr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},pr.apply(this,arguments)},$j=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Z2(e){return e&&e.map(function(t,n){return q.createElement(t.tag,pr({key:n},t.attr),Z2(t.child))})}function Un(e){return function(t){return q.createElement(Fj,pr({attr:pr({},e.attr)},t),Z2(e.child))}}function Fj(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=$j(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),q.createElement("svg",pr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:pr(pr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&q.createElement("title",null,a),e.children)};return c0!==void 0?q.createElement(c0.Consumer,null,function(n){return t(n)}):t(X2)}function Uj(e){return Un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function La(e){return Un({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Bj(e){return Un({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Hj(e){return Un({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Vj(e){return Un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function Wj(e){return Un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function Gj(e){return Un({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const Yj=4,Hr=ht("firstSlice/fetchProducts",async({productsType:e},t)=>{try{const{page:n,search:r,sort:i}=t.getState().products;return{data:(await nt.get(`/products?productsType=${e}&limit=${Yj}&page=${n}&sort=${i}&search=${r}`)).data,productsType:e}}catch(n){throw n}}),Ws=ht("firstSlice/fetchInstagram",async()=>{try{return{data:(await nt.get("/products/instagram")).data}}catch(e){throw e}}),qj=ht("firstSlice/submitLike",async e=>{try{await nt.post(`/products/${e}`),Be(!0,"Submitted");return}catch(t){throw t}}),Qj={backgroundIsActive:!1,activeProduct:{},productsType:"vending",search:"",sort:"newest",numOfPages:0,numOfHits:0,page:1,isLoading:!1,editing:!1,products:[],error:!1,instagramProducts:[],instagramLoading:!1,instagramError:!1},ex=Pu({name:"firstSlice",initialState:Qj,reducers:{setBackgroundIsActive:(e,t)=>({...e,backgroundIsActive:!0}),closeBackgroundIsActive:e=>({...e,backgroundIsActive:!1}),setActiveProduct:(e,t)=>({...e,activeProduct:t.payload}),changePage:(e,t)=>({...e,page:t.payload}),changeSort:(e,t)=>({...e,sort:t.payload,page:1}),searchProduct:(e,t)=>({...e,search:t.payload,page:1})},extraReducers:e=>{e.addCase(Hr.pending,t=>{t.isLoading=!0}),e.addCase(Hr.fulfilled,(t,n)=>{const{data:r,productsType:i}=n.payload,{products:a,numOfHits:o,numOfPages:s}=r;return{...t,error:!1,isLoading:!1,products:a,numOfPages:s,numOfHits:o,productsType:i}}),e.addCase(Hr.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Ws.pending,t=>{t.instagramLoading=!0}),e.addCase(Ws.fulfilled,(t,n)=>{const{instagramData:r}=n.payload.data;t.instagramProducts=r,t.instagramLoading=!1}),e.addCase(Ws.rejected,t=>{t.instagramLoading=!1,t.instagramError=!0})}}),{setBackgroundIsActive:Kj,closeBackgroundIsActive:Jj,setActiveProduct:Xj,changePage:Fo,changeSort:Zj,searchProduct:f0}=ex.actions,e8=ex.reducer,t8=()=>{const[e,t]=k.useState({text:""}),{productsType:n}=J(u=>u.products),r=fe(),i=To();let a;const o=(u,c)=>{clearTimeout(a),a=setTimeout(u,c)},s=()=>{clearTimeout(a),r(f0(e.text)),i(n!=="service"?`/products/${n}`:"/service")},l=u=>{t({text:u.target.value}),o(()=>{r(f0(u.target.value))},1e3)};return f.jsxs("div",{className:"search-bar",children:[f.jsx("input",{type:"text",onChange:l,name:"text",placeholder:`${n}...`,value:e.text}),f.jsx("button",{onClick:s,type:"button",children:f.jsx(Wj,{})})]})},tx=()=>{const{english:e}=J(n=>n.menu),t=fe();return f.jsxs("span",{className:"language",onClick:()=>t(d6()),children:[f.jsx("h5",{className:`${!e&&"active-language"} language-text ge`,children:"ქარ"}),"/",f.jsx("h5",{className:`${e&&"active-language"} language-text`,children:"Eng"})]})},n8=Ye.nav`
  background: var(--primary-white);
  /* Toggler */
  .nav-toggle {
    font-size: 1.7rem;
    color: var(--primary-black);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  /* end */
  /* Logo and Header */
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .logo {
    height: 50px;
    width: 100px;
  }
  .logo img {
    height: 100%;
    width: 100%;
  }
  /* end */
  /* Links small */
  .links a {
    color: var(--primary-black);
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
    text-transform: uppercase;
    font-weight: 600;
  }
  .links a:hover {
    background: var(--primary-Company-blue);
    color: var(--primary-white);
    padding-left: 1.5rem;
    cursor: pointer;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  /* end */
  .nav-contacts {
    display: none;
  }
  @media screen and (min-width: 990px) {
    .nav-contacts {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      background: var(--primary-black);
      padding: 0.5rem;
      color: var(--primary-white);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    /* Adress and info */
    .nav-adress {
      display: flex;
      justify-content: space-around;
      width: 700px;
    }
    .nav-adress a:hover {
      color: yellow;
    }
    /* end */
    /* Social icons and faq*/
    .nav-icons {
      width: 160px;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .faq{
      display: flex;
      align-items: flex-start;
      height: 1.5rem;
      width: 50px;
    }
    .faq p {
      font-size: 0.9rem;
      font-weight: 900;
      &:hover{
        color: yellow;
        transition: var(--transition);
      }
    }
    .social-icon {
      font-size: 1.25rem;
      &:hover {
        cursor: pointer;
        color: yellow;
        transition: var(--transition);
      }
    }

    /* end */
    /* Language */
    .language{ 
      display: flex;
      cursor: pointer;
    }
    .language-text{
      color: var(--primary-white);
    }
    .active-language{
      color: var(--primary-Company-red);
    }
    /* Language end */
    /* Search bar */
    .search-bar {
      overflow: visible;
      height: 3rem;
      display: flex;
      padding-left: 2rem;
      justify-content: center;
      height: 2rem;
      max-width: 25%;
      /* border: 2px solid red; */
    }
    .search-bar button {
      margin-left: 1rem;
      font-size: 1rem;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--primary-white);
      transition: var(--transition);
    }
    .search-bar button:hover {
      color: var(--clr-primary-9);
      scale: 1.2;
      font-family: inherit;
    }
    .search-bar input {
      border: none;
      border-radius: 9px;
      height: 90%;
      width: 70%;
      font-size: 1.2rem;
      font-weight: 300;
      padding-left: 0.5rem;
    }
    /* end */
    /* logo and header */
    .logo {
      height: 100px;
      width: 240px;
    }
    .nav-center {
      max-width: 1700px;
      width: 95%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .nav-header {
      width: 30%;
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    /* end */
    /* Links */
    .links-container {
      height: auto !important;
      overflow: visible;
      width: 70%;
    }
    .links {
      display: flex;
      justify-content: space-evenly;
    }
    .links li {
      font-size: 0.9rem;
      color: var(--primary-Company-red);
    }
    .links a {
      font-size: 1.05rem;
      padding: 0;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: var(--primary-Company-red);
    }
    /* end */
    /* Submenu */
    .submenu {
      height: 0px;
      width: 100px;
      overflow: hidden;
      position: absolute;
      left: 1024px;
      background: var(--primary-black);
      color: var(--primary-white);
      text-transform: capitalize;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      z-index: -1;
      font-size: 1.1rem;
    }
    .submenu a {
      cursor: pointer;
      padding-left: 0.2rem;
    }
    .submenu a:hover {
      background: var(--primary-white);
      color: var(--primary-black);
    }
    .open-submenu {
      height: auto;
      padding: 0.5rem;
      z-index: 10;
    }
    /* end */
  }
  @media screen and (min-width: 1230px) {
    .links a {
      font-size: 1.22rem;
    }
    .links-container {
      width: 60%;
    }
    .links{
      justify-content: space-around;
    }
  }
`,r8="/assets/gvglogo-174f35d2.jpg",i8=()=>{const{isNavbarOpen:e,english:t}=J(s=>s.menu),{user:n}=J(s=>s.user),r=fe(),i=k.useRef(null),a=k.useRef(null),o=()=>{r(f6())};return k.useEffect(()=>{const s=a.current.getBoundingClientRect().height;e?i.current.style.height=`${s}px`:i.current.style.height="0px"},[e]),f.jsxs(n8,{children:[f.jsxs("div",{className:"nav-center",children:[f.jsxs("div",{className:"nav-header",children:[f.jsx("button",{className:"nav-toggle",onClick:o,children:f.jsx(Hj,{})}),f.jsx("div",{className:"logo",children:f.jsx("img",{srcSet:r8,alt:""})})]}),f.jsxs("div",{ref:i,className:e?"links-container show-container":"links-container",children:[f.jsxs("ul",{className:"links",ref:a,children:[Dy.map(s=>{const{id:l,url:u,text:c,textGe:d,hoverTrigger:p}=s;return p?f.jsx("li",{children:f.jsx(zj,{url:u,text:t?c:d},l)}):f.jsx("li",{children:f.jsx(Nt,{to:u,children:t?c:d},l)})}),n&&f.jsx("li",{children:f.jsx(Nt,{to:"admin",children:"Admin"})})]}),f.jsx(Dj,{})]})]}),f.jsxs("div",{className:"nav-contacts",children:[f.jsxs("div",{className:"nav-adress",children:[f.jsx("span",{children:f.jsx(Ne,{to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",target:"_blank",children:t?"0186 Levan Aleksidze #6":"0186 ლევან ალექსიძის #6"})}),f.jsx("span",{className:"number",children:f.jsx(Ne,{target:"_blank",to:"https://wa.me/995599000041",children:"+ 995 599 00 00 41"})}),f.jsx("span",{children:f.jsx(Nt,{to:"contacts",children:"Office@geovending.ge"})})]}),f.jsx(t8,{}),f.jsx("div",{className:"faq",children:f.jsx("span",{children:f.jsx(Nt,{to:"/faq",children:f.jsx("p",{children:"FAQ"})})})}),f.jsxs("div",{className:"nav-icons",children:[f.jsx(tx,{}),f.jsx("span",{children:f.jsx(Ne,{target:"_blank",to:"https://www.facebook.com/geovending",children:f.jsx(Uj,{className:"social-icon"})})}),f.jsx("span",{children:f.jsx(Ne,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",children:f.jsx(La,{className:"social-icon"})})}),f.jsx("span",{children:f.jsx(Ne,{target:"_blank",to:"https://ge.linkedin.com/in/georgian-vending-group-9a3126291",children:f.jsx(Bj,{className:"social-icon"})})})]})]})]})},a8="/assets/snacks-9b41e9ec.jpg",o8="/assets/vending-7bd5e5c5.jpg",s8="/assets/coffee-31fa2dd3.jpg",l8=[{name:"Vending Machines",nameGe:"ვენდინგ აპარატები",url:o8,to:"vending"},{name:"Coffee Machines",nameGe:"ყავის აპარატები",url:s8,to:"coffee"},{name:"Snacks and ingredients",nameGe:"სნექები და ინგრედიენტები",url:a8,to:"snacks-and-ingredients"}],u8=()=>{const{english:e}=J(t=>t.menu);return f.jsx(f.Fragment,{children:f.jsx("div",{className:"categories",children:l8.map((t,n)=>{const{name:r,url:i,to:a,nameGe:o}=t;return f.jsxs("article",{className:"category",children:[f.jsx(Nt,{to:a,children:f.jsx("img",{srcSet:i,alt:r})}),f.jsx("h2",{children:e?r:o})]},n)})})})},$u=({tagsList:e})=>{const t=fe();let{sort:n}=J(i=>i.products),{english:r}=J(i=>i.menu);if(e)return f.jsx("div",{className:"tags",children:e.map(i=>{const{id:a,tag:o,tagGe:s}=i;return f.jsx("button",{className:o===n?"tags-btn btn selected":"tags-btn btn",onClick:()=>{t(Zj(o))},children:f.jsx("h5",{children:r?o:s})},a)})})},Fu=()=>{const{products:e,error:t,numOfPages:n,page:r,productsType:i}=J(s=>s.products),{english:a}=J(s=>s.menu),o=fe();return t?f.jsx(f.Fragment,{children:f.jsx("h2",{className:"product-error",children:"There has been an error, please try again later"})}):f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"products-container",children:[e.map(s=>{const{name:l,image:u,_id:c}=s;return f.jsxs("article",{className:"product",children:[f.jsxs("div",{className:"box",children:[f.jsxs("div",{className:"image-container",children:[f.jsx("img",{srcSet:u,alt:l}),f.jsx("button",{className:"details-button",onClick:()=>{o(Kj()),o(Xj(s))},children:a?"Details":"დეტალები..."})]}),f.jsx("div",{className:"buttons-container",children:i!=="service"&&f.jsx("button",{onClick:()=>o(qj(c)),children:f.jsx(Vj,{})})})]}),f.jsx("h3",{children:i!=="service"&&l})]},c)}),f.jsx(f8,{})]}),f.jsx(nx,{numOfPages:n,changePage:Fo,page:r})]})},c8=Ye.section`
  top: 0;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  visibility: hidden;
  color: var(--primary-white);
  z-index: 100;
  .background {
    /* overflow-y: scroll; */
    position: absolute;
    background: var(--primary-black);
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .background h2,h3 {
    color:var(--primary-white)
  }
  .img-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    object-fit: fill;
    max-height: 600px;
  }
  .close-button{
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 2rem;
    transition: var(--transition);
    color: var(--primary-Company-red);
    &:hover{
        scale: 1.1;
    }
  }
  .text-container {
    padding: 1rem;
  }
  .img-container img {
    object-fit: contain;
  }
  p{
    margin-top: 2rem;
  }
  .active {
    visibility: visible;
    opacity: 0.9;
  }
  @media screen and (min-width: 1180px) {
    .background {
      flex-direction: row;
    }
    .img-container {
      width: 50%;
    }
    .text-container {
      padding: 2rem;
      width: 45%;
      overflow-y: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
`,f8=()=>{const{backgroundIsActive:e,activeProduct:t}=J(i=>i.products),{english:n}=J(i=>i.menu),r=fe();return f.jsx(c8,{children:f.jsxs("div",{className:e?"background active":"background",children:[f.jsx(Gj,{className:"close-button",onClick:()=>{r(Jj())}}),f.jsx("div",{className:"img-container",children:f.jsx("img",{srcSet:t.image,alt:""})}),f.jsxs("div",{className:"text-container",children:[f.jsx("h2",{children:t.category!=="service"&&t.name}),t.price?f.jsxs("h3",{children:[n?"Price :":"ფასი :"," ",N5(t.price)]}):"",t.stock?f.jsxs("h3",{children:[n?"Stock : ":"მარაგშია : ",t.stock]}):"",n?f.jsx("p",{children:t.description}):f.jsx("p",{className:"ge",children:t.descriptionGe}),f.jsx("p",{children:t.additionalInformation})]})]})})},d0=Ye.section`
  margin-top: 3rem;
  .pages-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 450px;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .page-btn {
    font-size: 1rem;
    background: var(--primary-white);
    width: 1.7rem;
    box-shadow: none;
    transition: var(--transition);
    border: none;
    color: var(--primary-black);
    &:hover {
      background: var(--primary-Company-red);
    }
  }
  .active {
    background: var(--primary-Company-red);
  }
  @media screen and (min-width: 980px) {
    display: flex;
    justify-content: right;
    .pages-container {
      margin: 0;
      justify-content: left;
      padding-right: 4.5rem;
    }
  }
`,nx=({numOfPages:e,page:t,changePage:n})=>{const r=fe(),i=Array.from({length:e},(a,o)=>o+1);return e===1?f.jsx(d0,{children:f.jsx("div",{className:"pages-containter"})}):f.jsx(d0,{children:f.jsx("div",{className:"pages-container",children:i.map((a,o)=>f.jsx("button",{className:a===t?"btn page-btn active":"btn page-btn",onClick:()=>{r(n(a))},children:a},o))})})},xs=({labelName:e,name:t,value:n,type:r,onChange:i,className:a})=>f.jsxs(f.Fragment,{children:[f.jsxs("label",{htmlFor:t,children:[e,":"]}),f.jsx("input",{className:a,type:r,id:t,name:t,value:n,onChange:i})]}),p0={name:"",email:"",message:""},d8=()=>{const{english:e}=J(a=>a.menu),t=fe(),[n,r]=k.useState(p0),i=a=>{a.preventDefault(),t(Hs({fullName:n.name,email:n.email,message:n.message})),r(p0)};return f.jsx("div",{className:"contact-form-container",children:f.jsx("div",{children:f.jsxs("form",{className:"contact-form",onSubmit:i,children:[f.jsx("h3",{children:e?"Send us a message":"მოგვწერეთ"}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"fullname",children:f.jsx(Ae,{icon:bj})}),f.jsx("input",{className:"contact-input",type:"text",placeholder:e?"Full name":"სახელი",id:"fullname",name:"name",required:!0,onChange:a=>ft({setProductValues:r,e:a}),value:n.name})]}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"contact-email",children:f.jsx(Ae,{icon:um})}),f.jsx("input",{className:"contact-input",type:"email",name:"email",placeholder:e?"Email":"მეილი",id:"contact-email",required:!0,onChange:a=>ft({setProductValues:r,e:a}),value:n.email})]}),f.jsxs("div",{className:"textarea-container",children:[f.jsx("label",{htmlFor:"textarea",children:f.jsx(Ae,{icon:wj})}),f.jsx("textarea",{id:"textarea",cols:"25",rows:"10",placeholder:e?"Message...":"მესიჯი...",name:"message",required:!0,onChange:a=>ft({setProductValues:r,e:a}),value:n.message})]}),f.jsx("button",{type:"submit",className:"btn submit-btn",children:f.jsx(Ae,{icon:Q2})})]})})})},p8=!1,m8=()=>{const{moneyImages:e,english:t}=J(r=>r.menu),n="/src/assets/files/readme.md";return f.jsxs("div",{className:"download",children:[f.jsxs("div",{className:"money-slides-container",children:[t?f.jsx("h4",{children:" You can use these in our Machines"}):f.jsx("h4",{className:"ge",children:"აპარატში შეგიძლიათ გამოიყენოთ"}),f.jsx(m2,{images:e,atHome:p8})]}),f.jsxs("div",{className:"download-container",children:[f.jsxs("div",{className:"download-text ge",children:[t?f.jsx("h4",{children:"Catalog"}):f.jsx("h4",{children:"კატალოგი"}),f.jsx(Ae,{className:"pdf-icon",icon:Pj})]}),f.jsx("div",{className:"underline text-underline"}),f.jsx("button",{className:"btn download-btn",children:f.jsxs("a",{className:"download-link",href:n,download:"readme.md",children:[f.jsx(Ae,{icon:Cj}),t?"Download":"გადმოწერა"]})})]})]})},h8=_o`
  0%{
    scale: 1;
  }
  50%{
    scale: 0.9;
  }
  100%{
    scale: 1;
  }
`,Qc=Ye.article`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .instagram-button {
    font-size: 3rem;
    color: var(--primary-black);
    animation: ${h8} linear 2.5s infinite;
  }
  .error-instagram-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-images-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 309px;
    overflow: hidden;
    justify-content: center;
    /* gap: 0.5rem; */
  }
  .instagram-images div {
    width: 100%;
    max-width: 309px;
    height: 309px;
    position: relative;
  }
  .instagram-images video{
    width: 309px;
  }
  .instagram-img {
    height: 309px;
    object-fit: cover;
    max-width: 309px;
    cursor: pointer;
  }
  .instagram-icon-small {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    color: var(--primary-white);
    z-index: 2;
    opacity: 0.9;
  }
  .instagram-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-header h2 {
    color: var(--primary-Company-red);
    font-weight: 900;
    font-size: 2.35rem;
  }
  @media screen and (min-width: 980px) {
    margin-top: 0rem;
    .instagram-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 80%;
    }
    .instagram-images-container {
      gap: 1rem;
    }
    .instagram-images {
      justify-content: flex-start;
      gap: 0;
    }
    .instagram-img {
      border-radius: 0;
      object-fit: cover;
      width: 100%;
    }
    .instagram-images div:hover .instagram-icon-small {
      color: var(--primary-Company-red);
      transition: var(--transition);
    }
  }
`,g8=()=>{const{instagramProducts:e,instagramLoading:t,instagramError:n}=J(r=>r.products);return t?f.jsx(Qc,{children:f.jsx(Cr,{})}):e.length<1||n?f.jsx(Qc,{children:f.jsxs("div",{className:"error-instagram-container",children:[f.jsx("h3",{children:"#geovending.ge"}),f.jsx(Ne,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",className:"instagram-button",children:f.jsx(La,{})})]})}):f.jsx(Qc,{children:f.jsxs("div",{className:"instagram-images-container",children:[f.jsxs("div",{className:"instagram-header",children:[f.jsx("h2",{children:"#geovending.ge"}),f.jsx(Ne,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",className:"instagram-button",children:f.jsx(La,{})})]}),f.jsx("div",{className:"instagram-images",children:e.map((r,i)=>{const{id:a,media_url:o,media_type:s}=r;return s==="IMAGE"?f.jsxs("div",{children:[f.jsx(Ne,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",children:f.jsx("img",{className:"instagram-img",srcSet:o},a)}),f.jsx("i",{className:"instagram-icon-small",children:f.jsx(La,{})})]}):f.jsxs("div",{children:[f.jsx(Ne,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",children:f.jsx("video",{className:"instagram-img",autoPlay:i===0,src:o},a)}),f.jsx("i",{className:"instagram-icon-small",children:f.jsx(La,{})})]})})})]})})},v8=()=>{const e=fe(),t={email:"",password:""},[n,r]=k.useState(t),i=a=>{a.preventDefault(),e(Vs({email:n.email,password:n.password})),r(t)};return f.jsx("div",{className:"login-form-container",children:f.jsxs("form",{className:"login-form",onSubmit:i,children:[f.jsx("h3",{children:"User Login"}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"login-email",children:f.jsx(Ae,{icon:um})}),f.jsx("input",{className:"login-input",type:"email",placeholder:"email",id:"login-email",name:"email",value:n.email,required:!0,onChange:a=>ft({setProductValues:r,e:a})})]}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"login-password",children:f.jsx(Ae,{icon:xj})}),f.jsx("input",{className:"login-input",type:"password",name:"password",id:"login-password",placeholder:"password",value:n.password,onChange:a=>ft({setProductValues:r,e:a}),required:!0})]}),f.jsx("div",{className:"forgot-container",children:f.jsx("span",{children:"Georgian Vending Group"})}),f.jsx("button",{type:"submit",className:"btn submit-btn",children:f.jsx(Ae,{icon:Q2})})]})})},y8=3,Gs=ht("adminSlice/fetchProductsAdmin",async(e,t)=>{try{const{page:n,search:r,productsType:i}=t.getState().admin;return{data:(await nt.get(`/products/adminProducts?productsType=${i}&limit=${y8}&page=${n}&search=${r}`)).data}}catch(n){throw n}}),Ys=ht("adminSlice/uploadImage",async(e,t)=>{try{const n=new FormData;n.append("image",e);const r=await nt.post("/products/uploadImage",n,{headers:{"Content-Type":"multipart/form-data"}});return Be(!0,"Image uploaded"),{data:r.data}}catch(n){throw n}}),qs=ht("adminSlice/uploadProduct",async({name:e,category:t,price:n,stock:r,description:i,descriptionGe:a,additionalInfo:o,company:s},l)=>{const{uploadImageURL:u}=l.getState().admin;try{const c=await nt.post("/products",{name:e,category:t,price:n,stock:r,description:i,descriptionGe:a,additionalInfo:o,company:s,image:u});Be(!0,"Product Uploaded, refresh the page to see the change")}catch(c){throw Be(!1,"There has been an error with uploading a product"),c}}),Qs=ht("adminSlice/editProduct",async({name:e,price:t,stock:n,description:r,descriptionGe:i,additionalInfo:a,category:o},s)=>{const{editingInfo:l}=s.getState().admin,{id:u}=l;try{await nt.patch(`/products/${u}`,{name:e,category:o,price:t,stock:n,description:r,descriptionGe:i,additionalInfo:a}),Be(!0,`${e} has been edited, refresh to see the change`)}catch(c){throw Be(!1,"there has been an error with editing"),c}}),x8=ht("adminSlice/deleteProduct",async({id:e})=>{try{await nt.delete(`/products/${e}`),Be(!0,"the product has been deleted, refresh to see the change")}catch(t){throw Be(!1,"there has been an error with deleting"),t}}),Ks=ht("adminSlice/getEmails",async()=>{try{const e=await nt.get("/user/subscribed-emails");return Be(!0,"Emails delieverd"),{data:e.data}}catch(e){throw Be(!1,"Error with getting emails"),e}}),w8=ht("adminSlice/deleteEmail",async({email:e})=>{try{const t=await nt.delete(`/user/subscribed-emails/${e}`);return Be(!0,"Email Deleted"),{data:t.data}}catch(t){throw Be(!1,"Error with Deleting emails"),t}}),b8={name:"",category:"",price:"",stock:"",description:"",descriptionGe:"",additionalInfo:""},S8={activeProduct:{},productsType:"",search:"",uploadImageURL:"",numOfPages:0,numOfHits:0,subscribedEmails:{emails:[],subscriptionCount:0},page:1,isLoading:!1,editing:!1,editingInfo:b8,products:[],error:!1},rx=Pu({name:"adminSlice",initialState:S8,reducers:{changePage:(e,t)=>({...e,page:t.payload}),updateSearch:(e,t)=>({...e,search:t.payload,page:1}),updateSelection:(e,t)=>({...e,productsType:t.payload,page:1}),startEditing:(e,t)=>{const{name:n,price:r,stock:i,description:a,descriptionGe:o,additionalInfo:s,category:l,id:u}=t.payload;return{...e,editing:!0,editingInfo:{name:n,price:r,stock:i,description:a,descriptionGe:o,additionalInfo:s,category:l,id:u}}},cancelEditing:e=>({...e,editing:!1})},extraReducers:e=>{e.addCase(Gs.pending,t=>{t.isLoading=!0}),e.addCase(Gs.fulfilled,(t,n)=>{const{data:r}=n.payload,{products:i,numOfHits:a,numOfPages:o}=r;return{...t,error:!1,isLoading:!1,products:i,numOfPages:o,numOfHits:a}}),e.addCase(Gs.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Ys.pending,t=>{t.isLoading=!0}),e.addCase(Ys.fulfilled,(t,n)=>{const{src:r}=n.payload.data;t.uploadImageURL=r,t.isLoading=!1}),e.addCase(Ys.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(qs.pending,t=>{t.isLoading=!0}),e.addCase(qs.fulfilled,t=>{t.isLoading=!1,t.uploadImageURL=""}),e.addCase(qs.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Qs.pending,t=>{t.isLoading=!0}),e.addCase(Qs.fulfilled,t=>({...t,isLoading:!1,editing:!1,editingInfo:{}})),e.addCase(Qs.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Ks.pending,t=>{t.isLoading=!0}),e.addCase(Ks.fulfilled,(t,n)=>{const{emails:r,subscriptionCount:i}=n.payload.data;t.subscribedEmails={emails:r,subscriptionCount:i},t.isLoading=!1}),e.addCase(Ks.rejected,t=>{t.isLoading=!1,t.error=!0})}}),{changePage:k8,updateSearch:E8,updateSelection:C8,startEditing:j8,cancelEditing:P8}=rx.actions,N8=rx.reducer,A8=()=>{const{products:e,loading:t,editing:n}=J(i=>i.admin),r=fe();return t?f.jsx("div",{className:"all-products",children:f.jsx(Cr,{})}):e?f.jsx("div",{className:"all-products",children:e.map(i=>{const{image:a,category:o,name:s,price:l,likes:u,stock:c,description:d,descriptionGe:p,additionalInfo:v,_id:h}=i;return f.jsxs("article",{className:"product",children:[f.jsx("div",{className:"product-img-container",children:f.jsx("img",{className:"product-img",srcSet:a,alt:""})}),f.jsxs("div",{className:"product-info",children:[f.jsxs("h4",{children:["Name/Service : ",s]}),f.jsxs("h4",{children:["Category: ",o]}),f.jsxs("h4",{children:["Price: ",l]}),u?f.jsxs("h4",{children:["Likes : ",u]}):"",c&&f.jsxs("h4",{children:["Stock : ",c]}),f.jsxs("p",{className:"shortened",children:["Description: ",d]}),f.jsxs("p",{className:"shortened",children:["DescriptionGe: ",p]}),f.jsxs("p",{className:"shortened",children:["Addition Info: ",v]})]}),n?f.jsx("button",{className:"btn",onClick:()=>r(P8()),children:"Cancel Editing"}):f.jsx("button",{onClick:()=>r(j8({name:s,category:o,price:l,stock:c,description:d,id:h,descriptionGe:p,additionalInfo:v})),className:"btn",children:"Edit"}),f.jsx("button",{onClick:()=>r(x8({id:h})),className:"btn delete-btn",children:"Delete"})]},h)})}):f.jsx("div",{className:"all-products",children:f.jsx("h2",{children:"No Products available"})})},O8=()=>{const{numOfPages:e,page:t}=J(l=>l.admin),n=fe(),r={search:"",selection:""},[i,a]=k.useState(r),o=l=>{const{name:u,value:c}=l.target;a(d=>({...d,[u]:c}))},s=l=>{l.preventDefault(),n(E8(i.search)),n(C8(i.selection))};return f.jsxs("section",{className:"admin-filters",children:[f.jsx("div",{className:"pagination",children:f.jsx(nx,{numOfPages:e,page:t,changePage:k8})}),f.jsx("div",{className:"search-and-type",children:f.jsxs("form",{onSubmit:s,children:[f.jsx("input",{type:"text",placeholder:"Search...",name:"search",value:i.search,onChange:o}),f.jsxs("select",{name:"selection",value:i.selection,onChange:o,children:[f.jsx("option",{value:"",children:"All"}),f.jsx("option",{value:"vending",children:"Vending"}),f.jsx("option",{value:"coffee",children:"Coffee"}),f.jsx("option",{value:"snacks-and-ingredients",children:"Snacks and Ingredients"}),f.jsx("option",{value:"service",children:"Service"})]}),f.jsx("button",{className:"btn",type:"submit",children:"Submit"})]})})]})},R8=()=>{const{editing:e,editingInfo:t}=J(u=>u.admin),n=fe(),r={name:"",company:"",category:"vending",price:"",stock:"",description:"",descriptionGe:"",additionalInfo:"",image:{}},[i,a]=k.useState(r);k.useEffect(()=>{if(!e)return a(r);a(u=>({...u,...t}))},[e]);const o=u=>{a(c=>({...c,image:u.target.files[0]}))},s=u=>{u.preventDefault();const{name:c,category:d,description:p,descriptionGe:v,additionalInfo:h,price:y,stock:b}=i;n(Qs({name:c,category:d,description:p,price:y,stock:b,descriptionGe:v,additionalInfo:h}))},l=u=>{u.preventDefault();const{name:c,category:d,description:p,descriptionGe:v,additionalInfo:h,price:y,company:b}=i;n(qs({name:c,category:d,description:p,descriptionGe:v,additionalInfo:h,price:y,company:b})),a(r)};return f.jsxs("div",{className:"edit-products",children:[f.jsx("h2",{children:e?"Edit Product":"Upload product"}),f.jsxs("form",{children:[f.jsx("div",{children:f.jsx(xs,{labelName:"name",name:"name",type:"text",value:i.name,onChange:u=>ft({setProductValues:a,e:u})})}),!e&&f.jsx("div",{children:f.jsx(xs,{labelName:"Company",name:"company",type:"text",value:i.company,onChange:u=>ft({setProductValues:a,e:u})})}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"category",children:"Category:"}),f.jsxs("select",{type:"text",id:"category",name:"category",value:i.category,onChange:u=>ft({setProductValues:a,e:u}),children:[f.jsx("option",{value:"vending",children:"Vending machines"}),f.jsx("option",{value:"coffee",children:"Coffee machines"}),f.jsx("option",{value:"snacks-and-ingredients",children:"Snacks and ingredients"}),f.jsx("option",{value:"service",children:"Service"})]})]}),!e&&f.jsxs("div",{children:[f.jsx("input",{type:"file",name:"image",onChange:o}),f.jsx("button",{onClick:()=>n(Ys(i.image)),className:"btn",type:"button",children:"Upload Image"})]}),f.jsx("div",{children:f.jsx(xs,{labelName:"Price",name:"price",type:"number",value:i.price?i.price:"",onChange:u=>ft({setProductValues:a,e:u})})}),f.jsx("div",{children:f.jsx(xs,{labelName:"Stock",name:"stock",type:"number",value:i.stock?i.stock:"",onChange:u=>ft({setProductValues:a,e:u})})}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"description",children:"Description:"}),f.jsx("textarea",{className:"edit-description",id:"description",name:"description",value:i.description,onChange:u=>ft({setProductValues:a,e:u})})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"descriptionGe",children:"DescriptionGe:"}),f.jsx("textarea",{className:"edit-description",id:"descriptionGe",name:"descriptionGe",value:i.descriptionGe,onChange:u=>ft({setProductValues:a,e:u})})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"additionalInfo",children:"Additional Information:"}),f.jsx("textarea",{className:"edit-description",id:"additionalInfo",name:"additionalInfo",value:i.additionalInfo,onChange:u=>ft({setProductValues:a,e:u})})]}),e?f.jsx("button",{className:"btn",type:"submit",onClick:s,children:"Save Changes"}):f.jsx("button",{className:"btn",type:"submit",onClick:l,children:"Upload product"})]})]})},T8=()=>{const e=fe(),{subscribedEmails:t,isLoading:n}=J(o=>o.admin);if(n)return f.jsx("section",{className:"all-emails",children:f.jsx(Cr,{})});const{emails:r,subscriptionCount:i}=t,a=()=>{const o=r.map(s=>s).join(", ");navigator.clipboard.writeText(o).then(()=>{Be(!0,"Emails copied")}).catch(s=>{console.error("Error copying to clipboard:",s)})};return f.jsx("section",{className:"all-emails",children:f.jsxs("div",{className:"emails-container",children:[f.jsx("button",{className:"btn",onClick:()=>{e(Ks())},children:"Generate Emails"}),f.jsx("p",{className:"emails-info",onClick:a,children:r.map(o=>o).join(", ")}),f.jsxs("h4",{children:["Total Subscriptions : ",i]})]})})};function L8(e){return Un({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(e)}function _8(e){return Un({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(e)}const I8=({title:e,info:t})=>{const[n,r]=k.useState(!1);return f.jsxs("article",{className:"question",children:[f.jsxs("header",{children:[f.jsx("h4",{children:e}),f.jsx("button",{className:"question-btn",onClick:()=>r(!n),children:n?f.jsx(L8,{}):f.jsx(_8,{})})]}),n&&f.jsx("p",{className:"active",children:t})]})},M8=()=>{const e=fe(),{subscribedEmails:t}=J(a=>a.admin),{emails:n}=t,[r,i]=k.useState({email:""});return k.useEffect(()=>{n.length>0&&i({email:n[0]})},[n]),n.length<1?f.jsx("section",{className:"delete-email",children:f.jsx("h3",{children:"Generate The emails first"})}):f.jsxs("section",{className:"delete-email",children:[f.jsx("h2",{children:"Delete Email"}),f.jsx("select",{type:"text",name:"email",value:r.email,onChange:a=>ft({setProductValues:i,e:a}),id:"email",children:n.map((a,o)=>f.jsx("option",{value:a,children:a},o))}),f.jsx("button",{className:"btn",type:"submit",onClick:()=>e(w8({email:r.email})),children:"Delete"})]})},z8=()=>{J(t=>t.user);const e=fe();return k.useEffect(()=>{(function(t,n,r,i,a,o,s){t.fbq||(a=t.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},t._fbq||(t._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],o=n.createElement(r),o.async=!0,o.src=i,s=n.getElementsByTagName(r)[0],s.parentNode.insertBefore(o,s))})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js"),fbq("init","298056935934320"),fbq("track","PageView"),e(J2())},[]),f.jsxs(f.Fragment,{children:[f.jsx(i8,{}),f.jsxs("section",{className:"section-center",children:[f.jsx(tx,{}),f.jsx(W4,{})]}),f.jsx(Mj,{})]})},D8=Ye.section`
margin: 0 auto;
width: 90%;
.error-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80vh;
    min-height: 700px;
    }
    .img-container{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img-container img{
        margin-top: 2rem;
        cursor: pointer;
        height: 300px;
        width: 140px;
        transition: var(--transition);
        &:hover{
            scale: 1.1;
        }
    }
`,$8="/assets/Error-vending-9a6c8656.png",Ct=()=>(Vv(),f.jsx(D8,{children:f.jsxs("div",{className:"error-container",children:[f.jsx("h2",{children:"There has been an error in locating the page :("}),f.jsxs("div",{className:"img-container",children:[f.jsx("h5",{children:"click on the vending machine to navigate to the home page"}),f.jsx(Nt,{to:"/",children:f.jsx("img",{srcSet:$8,alt:""})})]})]})})),m0=Ye.section`
  min-height: 700px;
  height: 105vh;
  padding: 1rem;
  .login-form-container {
    width: 40%;
    min-width: 300px;
    border-radius: 2rem;
    position: relative;
    height: 35%;
    min-height: 300px;
    margin: 4rem auto;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    transition:var(--transition);
    &:hover {
      box-shadow: 0 2px 10px var(--primary-black);
    }
  }
  .login-form h3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
    color: var(--primary-black);
  }
  .input-container {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;
    border: 0.3px solid rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-radius: 10px;
    width: 90%;
  }
  .submit-btn {
    font-size: 1.6rem;
    width: 70px;
    padding: 1rem 0;
    color: var(--primary-white);
    background: var(--primary-Company-red);
    transition: var(--transition);
    position: absolute;
    &:hover {
      opacity: 0.9;
      transform: translateY(45%);
    }
    bottom: 0;
    transform: translateY(50%);
    z-index: 2;
  }
  .login-input {
    font-weight: 600;
    height: 1.5rem;
    color: var(--primary-black);
    font-size: 1rem;
    padding-left: 0.5rem;
    border-radius: 2px;
    border: none;
    outline: none;
    width: 90%;
    background: transparent;
  }
  .logged-in-container{
    text-align: center;
    margin-top: 7rem;
  }
  .logout-btn{
    background: var(--primary-Company-red);
    margin-top: 2rem;
    transition: var(--transition);
    &:hover{
      background: var(--primary-white);
    }
  }
`,F8=()=>{const{user:e}=J(i=>i.user),t=fe(),n=To();k.useEffect(()=>{window.innerWidth<1180&&n("/")},[n]);const r=()=>{t(Qa()),n("/")};return e?f.jsx(m0,{children:f.jsxs("div",{className:"logged-in-container",children:[f.jsxs("h2",{children:[e," is logged in"]}),f.jsx("button",{onClick:r,className:"btn logout-btn",children:"Log Out"})]})}):f.jsx(m0,{children:f.jsx(v8,{})})},U8=()=>{fbq("track","PageViewHome")},B8=()=>{fbq("track","PageViewVending")},H8=()=>(k.useEffect(()=>{U8()},[]),f.jsx(f.Fragment,{children:f.jsx(y6,{})})),V8=Ye.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* numeric stats */
  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .big {
    font-family: var(--number-font);
  }
  .info {
    text-align: center;
  }
  .underline {
    margin-top: 1rem;
  }
  /* end */
  /* paragraph and image */
  .about-paragraph {
    margin-top: 1rem;
    padding: 1rem;
  }
  .about-box {
    display: flex;
    flex-direction: column;
  }
  .about-img {
    padding: 1rem;
    width: 100%;
  }
  .about-img img {
    border-radius: 1rem;
  }
  /* end */
  /* instagram */
  /* end */
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    padding-top: 1rem;
    /* padding-bottom: 3rem; */
    /* numeric stats */
    .about-stats {
      height: calc(100vh - 660px);
      padding: 4rem;
      /* padding-top: 1rem; */
      flex-direction: row;
      justify-content: center;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 1rem;
    }
    h1 {
      margin-right: 1rem;
    }
    .underline {
      width: 2px;
      height: 100%;
      margin: 1rem;
    }
    .big {
      font-family: var(--number-font);
      font-size: 4.5rem;
    }
    /* end */
    /* paragraph and image */
    .about-paragraph {
      width: 50%;
    }
    .about-img {
      width: 50%;
    }
    .about-img img {
      border-radius: 10rem;
    }
    .about-box {
      flex-direction: row;
      align-items: center;
    }
    /* end */
    /* instagram */

    /* end  */
  }
`,W8="/assets/vending-machine-3-30ac4ddc.png",G8=()=>{const{english:e}=J(n=>n.menu),t=fe();return k.useEffect(()=>{t(Ws())},[]),f.jsxs(V8,{children:[f.jsxs("div",{className:"about-box",children:[f.jsx("div",{className:"about-paragraph ge",children:e?f.jsx("p",{children:"Georgian Vending Group is the official representative of the Spanish company Azykoen in Georgia. (Azykoen is a leading manufacturer of vending machines worldwide) Our mission is to provide daily comfort and accessibility to local businesses, large and public offices, by delivering high-quality, multifunctional vending machines for their business and operations. We assist partners in establishing vibrant communities that create positive relationships, build, and enhance comfort, increase product diversity, and contribute to the efficiency of their business and production. We value creating partnerships with dynamic organizations that focus on establishing positive connections, generating growth, and promoting comfort. We believe that we can quickly and easily deliver food, beverages, and other related product categories to any sector, meaning that we can serve both large and small organizations"}):f.jsxs("p",{children:["Georgian Vending Group ესპანური კომპანია Azykoen-ის ოფიციალური წარმომადგენელია საქართველოში. (Azykoen - სავაჭრო აპარატების ერთ-ერთი უძლიერესი მწარმოებელი მსოფლიოში) ",f.jsx("br",{})," ჩვენი მისიაა ყოველდღიური კომფორტის ხელმისაწვდომობის მიზნით ადგილობრივ ბიზნესებს, კერძო და სახელმწიფო ოფისებს, მივაწოდოთ საუკეთესო ხარისხის, მრავალფუნქციური, მათ ბიზნესზე და საქმისწარმოებაზე მორგებული სავაჭრო აპარატები. ",f.jsx("br",{})," ჩვენ ვეხმარებით პარტნიორებს ისეთი ცოცხალი კუთხეების მოწყობაში, რომლებიც ქმნის პოზიტიურ კავშირებს, ამყარებს და აძლიერებს კომფორტს, ზრდის პროდუქტიულობას და იწვევს კმაყოფილებას ",f.jsx("br",{})," ჩვენ ვამაყობთ რომ შეგვიძლია სწრაფად და მარტივად მივაწოდოთ საკვები, სასმელი და სხვა დაკავშირებული კატეგორიების პროდუქტი ნებისმიერ სექტორს, რაც ნიშნავს რომ შეგვიძლია მოვუაროთ როგორც მსხვილ, ისე მცირე ორგანიზაციებს."]})}),f.jsx("div",{className:"about-img",children:f.jsx("img",{srcSet:W8,alt:""})})]}),f.jsxs("div",{className:"about-stats ge",children:[f.jsxs("div",{className:"info",children:[f.jsx("h1",{className:"big",children:"450"}),e?f.jsx("h2",{children:"Machines"}):f.jsxs("span",{children:[f.jsx("h4",{children:"- მდე "})," ",f.jsx("h2",{children:"აპარატი"})]}),f.jsx("div",{className:"underline"})]}),f.jsxs("div",{className:"info",children:[f.jsx("h1",{className:"big",children:"180"}),e?f.jsx("h2",{children:"Partners"}):f.jsxs("span",{children:[f.jsx("h4",{children:"- მდე "})," ",f.jsx("h2",{children:"პარტნიორი"})]}),f.jsx("div",{className:"underline"})]}),f.jsxs("div",{className:"info",children:[f.jsx("h1",{className:"big",children:"6"}),e?f.jsx("h2",{children:"Cities"}):f.jsx("span",{children:f.jsx("h2",{children:"ქალაქი"})}),f.jsx("div",{className:"underline"})]})]}),f.jsx(g8,{})]})},Y8=Ye.section`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact-form-container {
    margin-top: 3rem;
    width: 100%;
    max-width: 450px;
    padding: 0.5rem;
    padding-bottom: 3rem;
    border-radius: 20px;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
    position: relative;
    &:hover {
      box-shadow: 0 2px 10px var(--primary-black);
    }
  }
  .map-aligner-container {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .contact-form h3 {
    margin-bottom: 1rem;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
    color: var(--primary-black);
  }
  .input-container,
  .textarea-container {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;
    border: 0.3px solid rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-radius: 10px;
    width: 90%;
  }
  .contact-form textarea {
    padding-left: 0.5rem;
    border: none;
    font-size: 1rem;
    border-radius: 8px;
    font-weight: 600;
    outline: none;
    width: 90%;
    padding-top: 0.2rem;
    background: transparent;
    color: var(--primary-black);
  }
  .submit-btn {
    font-size: 1.6rem;
    width: 70px;
    padding: 1rem 0;
    color: var(--primary-white);
    background: var(--primary-Company-red);
    transition: var(--transition);
    position: absolute;
    &:hover {
      opacity: 0.9;
      transform: translateY(45%);
    }
    bottom: 0;
    transform: translateY(50%);
    z-index: 2;
  }
  .contact-input {
    font-weight: 600;
    height: 1.5rem;
    color: var(--primary-black);
    font-size: 1rem;
    padding-left: 0.5rem;
    border-radius: 2px;
    border: none;
    outline: none;
    width: 90%;
    background: transparent;
  }
  .contacts-information {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 0.5rem;
  }
  .contact-info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .contact {
    width: 100%;
    min-height: 70px;
    display: flex;
    max-width: 360px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    overflow: hidden;
    border-top-left-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
  }
  .contacts-img {
    margin-top: 3rem;
    border-radius: 2rem;
    overflow: hidden;
  }
  .contact-info {
    text-align: right;
  }
  .icon-link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    min-height: 60px;
    color: var(--primary-white);
    text-align: center;
    background: var(--primary-black);
    font-size: 1.5rem;
  }
  @media screen and (min-width: 980px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem;
    margin-top: 2rem;
    min-height: 105vh;
    .contacts-information {
      width: 60%;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 2rem;
    }
    .contact-info-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }
    .contact-form-container {
      min-height: 480px;
      margin-top: 1rem;
    }
    .map-aligner-container {
      width: 40%;
      min-height: 550px;
      height: calc(100vh - 210px);
      padding-bottom: calc(33.7px + 1rem);
    }
    .contacts-img img {
      border-radius: 5rem;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1300px) {
    .contacts-img{
      cursor: pointer;
      display: inline-block;
      max-width: 80%;
      transition: var(--transition);
      &:hover {
        scale: 1.06;
      }
    }
    .contacts-information {
      padding-bottom: 1rem;
      min-height: 500px;
      height: calc(100vh - 210px);
    }
    .map-aligner-container {
      width: 45%;
      align-items: flex-end;
      padding-bottom: 3.5rem;
    }
    .contact-form-container {
      max-height: 500px;
      max-width: 450px;
    }
  }
`,q8="/assets/map-6d9fe64d.png",Q8=()=>f.jsxs(Y8,{children:[f.jsxs("div",{className:"contacts-information",children:[f.jsx("div",{className:"contact-info-container",children:f.jsx(K2,{forContacts:!0})}),f.jsx("div",{className:"contacts-img",children:f.jsx(Ne,{target:"_blank",to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",children:f.jsx("img",{srcSet:q8,alt:""})})})]}),f.jsx("div",{className:"map-aligner-container",children:f.jsx(d8,{})})]}),K8=_o`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`,br=Ye.section`
  /* tags */
  .tags-btn{
    background: var(--clr-grey-100);
    transition: var(--transition);
    color: var(--primary-black);
    font-size: 0.9rem;
    border-radius: 15px;
    cursor: pointer;
    margin-left: 0.3rem;
  }
  .tags button:hover {
    background: var(--primary-Company-red);
  }
  .tags {
    text-align: center;
    margin: 2rem;
    padding: 1rem;
  }
  .tags h2 {
    margin-top: 3rem;
    text-align: center;
  }
  .selected {
    background: var(--primary-Company-red);
  }
  /* end */
  /* products Error */
  .product-error{
    color: var(--primary-black);
    text-align: center;
    margin-top: 4rem;
    padding: 1rem;
  }
  /* products Error end */
  /* products */
  .products-container {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .product {
    width: 90%;
    max-width: 300px;
    border-radius: 1rem;
    background: var(--vending-catalog-blue);
    animation: ${K8} linear 1.2s;
    color: var(--primary-black);
  }
  .box {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .image-container {
    position: relative;
    margin-left: 2.5rem;
    width: 100%;
    height: 400px;
    transition: var(--transition);
    &:hover .details-button {
      opacity: 0.75;
    }
  }
  .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .buttons-container {
    width: 20%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background: var(--primary-white);
    height: fit-content;
    border-radius: 9px;
    color: var(--primary-black);
  }
  .buttons-container button {
    transition: var(--transition);
    min-width: 60px;
    border-radius: 9px;
    background: var(--primary-white);
    cursor: pointer;
    &:hover {
      background: var(--primary-Company-red);
    }
    border: none;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    font-size: 1rem;
  }
  .details-button {
    opacity: 0;
    border: none;
    transition: var(--transition);
    background: var(--primary-white);
    top: 50%;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    text-decoration: none;
    font-size: 1rem;
    transition: var(--transition);
    border-radius: 9px;
    cursor: pointer;
    &:hover {
      background: var(--primary-Company-red);
    }
    position: absolute;
  }
  .product h3 {
    margin-top: 2rem;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
  }
  /* end */
  @media screen and (min-width: 980px) {
    /* tags */
    .tags button {
      font-size: 1rem;
    }
    .products-container {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
    /* end */
  }
  @media screen and (min-width: 1400px) {
    min-height: 105vh;
  }
`,J8="service",X8=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],Z8=()=>{const{isLoading:e,sort:t,search:n,page:r}=J(a=>a.products),i=fe();return k.useEffect(()=>{i(Fo(1))},[]),k.useEffect(()=>{i(Hr({productsType:J8}))},[t,n,r]),e?f.jsx(br,{children:f.jsx(Cr,{})}):f.jsxs(br,{children:[f.jsx($u,{tagsList:X8}),f.jsx(Fu,{})]})},eP=_o`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`,tP=Ye.section`
  /* Category  */
  .categories {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }
  .category {
    height: 55vh;
    text-align: center;
    position: relative;
    font-size: 0.9rem;
    animation: ${eP} linear 1.2s;
  }
  .category img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .category h2 {
    box-shadow: 0 5px 5px 1;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: var(--primary-white);
  }
  /* end */
  /* company images */
  .company-images {
    display: none;
  }
  /* end */
  /* Download */
  .download {
    padding: 1rem 1rem;
    padding-top: 4rem;
    max-width: 1260px;
    margin: 0 auto;
  }
  .download-link {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
  }
  .download-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 255px;
  }
  .download-btn {
    font-size: 1rem;
    border-radius: 0;
    width: 255px;
    padding: 1.3rem;
    transition: var(--transition);
    background: var(--primary-Company-red);
    &:hover {
      background: var(--primary-white);
    }
    border: none;
  }
  .download-btn a {
    color: var(--primary-black);
  }
  .download-text {
    display: flex;
    justify-content: space-between;
  }
  .text-underline {
    width: 100%;
    max-width: 255px;
    margin: 1rem 0;
  }
  /* End */
  @media screen and (min-width: 990px) {
    /* company images */
    .company-images {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      gap: 1rem;
      width: 100%;
      height: 180px;
      padding: 20px 0;
      padding-top: 70px;
      justify-content: space-around;
      align-items: center;
    }
    .company-images img {
      opacity: 0.5;
      object-fit: contain;
      height: 6rem;
      width: 12rem;
    }
    /* end */
    /* Category */
    .categories {
      flex-direction: row;
    }
    .category {
      margin-top: 0;
      min-height: 300px;
      height: calc(100vh - 376px);
      width: 100%;
    }
    .category:hover {
      transition: var(--transition);
      transform: translateY(1%);
    }
    /* end */
    /* Money Slides Container */
    .money-slides-container {
      width: 80%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
    }
    /* end  */
    /* Downloads */
    .download {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      padding-top: 3rem;
    }
    .download-text {
      display: flex;
      justify-content: space-between;
    }
    .pdf-icon {
      font-size: 1.5rem;
    }
    /* end */
  }
`,nP=()=>f.jsx(f.Fragment,{children:f.jsxs(tP,{children:[f.jsx(h2,{images:Kk}),f.jsx(u8,{}),f.jsx(m8,{})]})}),rP="coffee",iP=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],aP=()=>{const{isLoading:e,sort:t,search:n,page:r}=J(a=>a.products),i=fe();return k.useEffect(()=>{i(Fo(1))},[]),k.useEffect(()=>{i(Hr({productsType:rP}))},[t,n,r]),e?f.jsx(br,{children:f.jsx(Cr,{})}):f.jsxs(br,{children:[f.jsx($u,{tagsList:iP}),f.jsx(Fu,{})]})},h0="vending",oP=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],sP=()=>{const{isLoading:e,sort:t,page:n,search:r}=J(a=>a.products),i=fe();return k.useEffect(()=>{i(Fo(1)),B8()},[]),k.useEffect(()=>{i(Hr({productsType:h0,sort:t,page:n,search:r}))},[n,r,t]),e?f.jsx(br,{children:f.jsx(Cr,{})}):f.jsxs(br,{children:[f.jsx($u,{tagsList:oP}),f.jsx(Fu,{productsType:h0})]})},g0="snacks-and-ingredients",lP=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],uP=()=>{const{isLoading:e,sort:t,page:n,search:r}=J(a=>a.products),i=fe();return k.useEffect(()=>{i(Fo(1))},[]),k.useEffect(()=>{i(Hr({productsType:g0}))},[n,t,r]),e?f.jsx(br,{children:f.jsx(Cr,{})}):f.jsxs(br,{children:[f.jsx($u,{tagsList:lP}),f.jsx(Fu,{productsType:g0})]})},cP=Ye.main`
  margin-top: 3rem;
  min-height: 105vh;
  .all-products {
    width: 80%;
    min-height: 500px;
    border-radius: 2rem;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .product {
    width: 20%;
    min-width: 300px;
    min-height: 800px;
    display: flex;
    flex-direction: column;
  }
  .product-img-container {
    height: 500px;
    width: 100%;
  }
  .product-info {
    height: 40%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .shortened {
    max-height: 70px;
    overflow: hidden;
  }
  .delete-btn {
    background: #d54d4d;
    width: 20%;
    margin: 0.5rem auto;
  }
  .pagination {
    height: 100px;
  }
  .search-and-type {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-and-type input,
  select {
    height: 2rem;
    font-size: 1.3rem;
  }
  .edit-products {
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: var(--clr-grey-200);
    align-items: center;
    font-size: 1.2rem;
  }
  .edit-products form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }
  .edit-products input {
    height: 2rem;
    font-size: 1.2rem;
  }
  .edit-description {
    height: 130px;
    width: 300px;
    overflow: scroll;
    font-size: 1rem;
  }
  .all-emails {
    min-height: 330px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .emails-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
  .emails-container button {
    width: 100px;
    min-width: 20%;
  }
  .emails-container p {
    border: 2px solid var(--clr-grey-200);
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  .delete-email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    margin: 0 auto;
    width: 300px;
    height: 300px;
  }
  .delete-email button {
    background: #d54d4d;
  }
`,fP=()=>{const{search:e,productsType:t,page:n}=J(i=>i.admin),r=fe();return k.useEffect(()=>{r(Gs())},[e,t,n]),f.jsx(cP,{children:f.jsxs("section",{className:"all-products-section",children:[f.jsx(A8,{}),f.jsx(O8,{}),f.jsx(R8,{}),f.jsx(T8,{}),f.jsx(M8,{})]})})},dP=Ye.main`
  min-height: 800px;
  padding: 1rem;
  padding-bottom: 3rem;
  /* margin-top: 2rem; */
  /* margin-bottom: 3rem; */
  margin-bottom: -3rem;
  background: var(--clr-grey-200);
  .questions-section{
    padding: 2rem 0;
    /* max-width: 800px; */
    margin: 0 auto;
    border-radius: 1.5rem;
  }
  .questions-header{
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .question {
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    margin-bottom: 2rem;
  }

  .question p {
    line-height: 2;
    margin-top: 1rem;
    background: var(--primary-white);
    padding: 1rem;
    border-radius: 1rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .question h4 {
    font-weight: 500;
    line-height: 1.5;
  }
  .question-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-Company-red);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    align-self: flex-start;
    min-width: 2rem;
  }
`,pP=()=>f.jsx(dP,{children:f.jsxs("section",{className:"questions-section",children:[f.jsx("div",{className:"questions-header",children:f.jsx("h2",{className:"ge",children:"ხშირად დასმული კითხვები"})}),f.jsx("div",{className:"questions",children:A5.map(e=>f.jsx(I8,{...e},e.id))})]})}),mP=({children:e})=>{const{user:t}=J(n=>n.user);return t?e:f.jsx(V4,{to:"/"})},Kc=Ye.section`
  height: 700px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  a {
    background: var(--primary-lighter-blackish-grey);
    transition: var(--transition);
    &:hover{
        scale: 1.07;
    }
  }
`;function hP(){return new URLSearchParams(ri().search)}const gP=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(!1),i=hP(),a=async()=>{r(!0);try{const{data:o}=await nt.post("/auth/verify-email",{verificationToken:i.get("token"),email:i.get("email")})}catch{t(!0)}r(!1)};return k.useEffect(()=>{a()},[]),n?f.jsx(Kc,{children:f.jsx(Cr,{})}):e?f.jsx(Kc,{children:f.jsx("h2",{children:"There has been an error with verifying"})}):f.jsxs(Kc,{children:[f.jsx("h2",{children:"Account Confirmed"}),f.jsx(Ne,{to:"/login",className:"btn",children:"Please login"})]})},vP=X4([{path:"/",element:f.jsx(z8,{}),errorElement:f.jsx(Ct,{}),children:[{index:!0,element:f.jsx(H8,{}),errorElement:f.jsx(Ct,{})},{path:"about",element:f.jsx(G8,{}),errorElement:f.jsx(Ct,{})},{path:"contacts",element:f.jsx(Q8,{}),errorElement:f.jsx(Ct,{})},{path:"service",element:f.jsx(Z8,{}),errorElement:f.jsx(Ct,{})},{path:"products",children:[{index:!0,element:f.jsx(nP,{}),errorElement:f.jsx(Ct,{})},{path:"vending",element:f.jsx(sP,{}),errorElement:f.jsx(Ct,{})},{path:"coffee",element:f.jsx(aP,{}),errorElement:f.jsx(Ct,{})},{path:"snacks-and-ingredients",element:f.jsx(uP,{}),errorElement:f.jsx(Ct,{})}]},{path:"login",element:f.jsx(F8,{}),errorElement:f.jsx(Ct,{})},{path:"faq",element:f.jsx(pP,{}),errorElement:f.jsx(Ct,{})},{path:"admin",element:f.jsx(mP,{children:f.jsx(fP,{})}),errorElement:f.jsx(Ct,{})},{path:"verify-email",element:f.jsx(gP,{}),errorElement:f.jsx(Ct,{})}]}]),yP=()=>f.jsx(B4,{router:vP});const xP=Rk({reducer:{products:e8,menu:p6,user:Rj,admin:N8}});Jc.createRoot(document.getElementById("root")).render(f.jsxs(KS,{store:xP,children:[f.jsx(pd,{position:"top-center",autoClose:2e3}),f.jsx(yP,{})]}));
