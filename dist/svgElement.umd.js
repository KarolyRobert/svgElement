(function(P,E){typeof exports=="object"&&typeof module<"u"?E(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],E):(P=typeof globalThis<"u"?globalThis:P||self,E(P.svgElement={},P.React))})(this,function(P,E){"use strict";var K={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function De(){if(ae)return I;ae=1;var n=E,a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(y,m,w){var _,O={},C=null,D=null;w!==void 0&&(C=""+w),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(D=m.ref);for(_ in m)c.call(m,_)&&!p.hasOwnProperty(_)&&(O[_]=m[_]);if(y&&y.defaultProps)for(_ in m=y.defaultProps,m)O[_]===void 0&&(O[_]=m[_]);return{$$typeof:a,type:y,key:C,ref:D,props:O,_owner:d.current}}return I.Fragment=l,I.jsx=f,I.jsxs=f,I}var W={},ie;function Fe(){if(ie)return W;ie=1;var n={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return n.NODE_ENV!=="production"&&function(){var a=E,l=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),m=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),se=Symbol.iterator,Be="@@iterator";function Ge(e){if(e===null||typeof e!="object")return null;var r=se&&e[se]||e[Be];return typeof r=="function"?r:null}var F=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),i=1;i<r;i++)t[i-1]=arguments[i];Je("error",e,t)}}function Je(e,r,t){{var i=F.ReactDebugCurrentFrame,u=i.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var v=t.map(function(s){return String(s)});v.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,v)}}var Ne=!1,ze=!1,He=!1,Ke=!1,Xe=!1,ue;ue=Symbol.for("react.module.reference");function Ze(e){return!!(typeof e=="string"||typeof e=="function"||e===d||e===f||Xe||e===p||e===_||e===O||Ke||e===Ue||Ne||ze||He||typeof e=="object"&&e!==null&&(e.$$typeof===D||e.$$typeof===C||e.$$typeof===y||e.$$typeof===m||e.$$typeof===w||e.$$typeof===ue||e.getModuleId!==void 0))}function Qe(e,r,t){var i=e.displayName;if(i)return i;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function le(e){return e.displayName||"Context"}function j(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case c:return"Portal";case f:return"Profiler";case p:return"StrictMode";case _:return"Suspense";case O:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return le(r)+".Consumer";case y:var t=e;return le(t._context)+".Provider";case w:return Qe(e,e.render,"ForwardRef");case C:var i=e.displayName||null;return i!==null?i:j(e.type)||"Memo";case D:{var u=e,v=u._payload,s=u._init;try{return j(s(v))}catch{return null}}}return null}var k=Object.assign,L=0,ce,fe,ve,de,pe,ye,ge;function me(){}me.__reactDisabledLog=!0;function qe(){{if(L===0){ce=console.log,fe=console.info,ve=console.warn,de=console.error,pe=console.group,ye=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:me,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}}function er(){{if(L--,L===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:ce}),info:k({},e,{value:fe}),warn:k({},e,{value:ve}),error:k({},e,{value:de}),group:k({},e,{value:pe}),groupCollapsed:k({},e,{value:ye}),groupEnd:k({},e,{value:ge})})}L<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=F.ReactCurrentDispatcher,Z;function G(e,r,t){{if(Z===void 0)try{throw Error()}catch(u){var i=u.stack.trim().match(/\n( *(at )?)/);Z=i&&i[1]||""}return`
`+Z+e}}var Q=!1,J;{var rr=typeof WeakMap=="function"?WeakMap:Map;J=new rr}function he(e,r){if(!e||Q)return"";{var t=J.get(e);if(t!==void 0)return t}var i;Q=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var v;v=X.current,X.current=null,qe();try{if(r){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(S){i=S}Reflect.construct(e,[],s)}else{try{s.call()}catch(S){i=S}e.call(s.prototype)}}else{try{throw Error()}catch(S){i=S}e()}}catch(S){if(S&&i&&typeof S.stack=="string"){for(var o=S.stack.split(`
`),R=i.stack.split(`
`),g=o.length-1,h=R.length-1;g>=1&&h>=0&&o[g]!==R[h];)h--;for(;g>=1&&h>=0;g--,h--)if(o[g]!==R[h]){if(g!==1||h!==1)do if(g--,h--,h<0||o[g]!==R[h]){var T=`
`+o[g].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),typeof e=="function"&&J.set(e,T),T}while(g>=1&&h>=0);break}}}finally{Q=!1,X.current=v,er(),Error.prepareStackTrace=u}var $=e?e.displayName||e.name:"",ke=$?G($):"";return typeof e=="function"&&J.set(e,ke),ke}function tr(e,r,t){return he(e,!1)}function nr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return he(e,nr(e));if(typeof e=="string")return G(e);switch(e){case _:return G("Suspense");case O:return G("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case w:return tr(e.render);case C:return N(e.type,r,t);case D:{var i=e,u=i._payload,v=i._init;try{return N(v(u),r,t)}catch{}}}return""}var z=Object.prototype.hasOwnProperty,Ee={},_e=F.ReactDebugCurrentFrame;function H(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}function ar(e,r,t,i,u){{var v=Function.call.bind(z);for(var s in e)if(v(e,s)){var o=void 0;try{if(typeof e[s]!="function"){var R=Error((i||"React class")+": "+t+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}o=e[s](r,s,i,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){o=g}o&&!(o instanceof Error)&&(H(u),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",t,s,typeof o),H(null)),o instanceof Error&&!(o.message in Ee)&&(Ee[o.message]=!0,H(u),b("Failed %s type: %s",t,o.message),H(null))}}}var ir=Array.isArray;function q(e){return ir(e)}function or(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function sr(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function Re(e){if(sr(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",or(e)),be(e)}var V=F.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0},xe,Te,ee;ee={};function lr(e){if(z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function cr(e){if(z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function fr(e,r){if(typeof e.ref=="string"&&V.current&&r&&V.current.stateNode!==r){var t=j(V.current.type);ee[t]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',j(V.current.type),e.ref),ee[t]=!0)}}function vr(e,r){{var t=function(){xe||(xe=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function dr(e,r){{var t=function(){Te||(Te=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var pr=function(e,r,t,i,u,v,s){var o={$$typeof:l,type:e,key:r,ref:t,props:s,_owner:v};return o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(o,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(o,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o};function yr(e,r,t,i,u){{var v,s={},o=null,R=null;t!==void 0&&(Re(t),o=""+t),cr(r)&&(Re(r.key),o=""+r.key),lr(r)&&(R=r.ref,fr(r,u));for(v in r)z.call(r,v)&&!ur.hasOwnProperty(v)&&(s[v]=r[v]);if(e&&e.defaultProps){var g=e.defaultProps;for(v in g)s[v]===void 0&&(s[v]=g[v])}if(o||R){var h=typeof e=="function"?e.displayName||e.name||"Unknown":e;o&&vr(s,h),R&&dr(s,h)}return pr(e,o,R,u,i,V.current,s)}}var re=F.ReactCurrentOwner,we=F.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);we.setExtraStackFrame(t)}else we.setExtraStackFrame(null)}var te;te=!1;function ne(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function je(){{if(re.current){var e=j(re.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function gr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Se={};function mr(e){{var r=je();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Oe(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=mr(r);if(Se[t])return;Se[t]=!0;var i="";e&&e._owner&&e._owner!==re.current&&(i=" It was passed a child from "+j(e._owner.type)+"."),A(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,i),A(null)}}function Ce(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var i=e[t];ne(i)&&Oe(i,r)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var u=Ge(e);if(typeof u=="function"&&u!==e.entries)for(var v=u.call(e),s;!(s=v.next()).done;)ne(s.value)&&Oe(s.value,r)}}}function hr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===w||r.$$typeof===C))t=r.propTypes;else return;if(t){var i=j(r);ar(t,e.props,"prop",i,e)}else if(r.PropTypes!==void 0&&!te){te=!0;var u=j(r);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Er(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var i=r[t];if(i!=="children"&&i!=="key"){A(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),A(null);break}}e.ref!==null&&(A(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Pe(e,r,t,i,u,v){{var s=Ze(e);if(!s){var o="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=gr(u);R?o+=R:o+=je();var g;e===null?g="null":q(e)?g="array":e!==void 0&&e.$$typeof===l?(g="<"+(j(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,o)}var h=yr(e,r,t,u,v);if(h==null)return h;if(s){var T=r.children;if(T!==void 0)if(i)if(q(T)){for(var $=0;$<T.length;$++)Ce(T[$],e);Object.freeze&&Object.freeze(T)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ce(T,e)}return e===d?Er(h):hr(h),h}}function _r(e,r,t){return Pe(e,r,t,!0)}function br(e,r,t){return Pe(e,r,t,!1)}var Rr=br,xr=_r;W.Fragment=d,W.jsx=Rr,W.jsxs=xr}(),W}var Ae={};Ae.NODE_ENV==="production"?K.exports=De():K.exports=Fe();var x=K.exports;const $e=n=>{let a=`translate(${n.translate.x},${n.translate.y}) rotate(${n.rotate}) scale(${n.scale.x},${n.scale.y}) skewX(${n.skew.x}) skewY(${n.skew.y})`,l=`${n.origin.x} ${n.origin.y}`;return{transform:a,origin:l}},Y=(n,a,l)=>a&&a.map((c,d)=>{let{key:p,type:f,...y}=c;return x.jsx(oe,{type:f,rootRef:n,path:[...l,d],...y},p)}),M=(n,a,l)=>{E.useEffect(()=>(n.current&&(n.current[l.join("_")]=a),()=>{n.current&&delete n.current[l.join("_")]}),[l])},U=n=>E.useMemo(()=>$e(n),[n]),Ie=({rootRef:n,nodeList:a,path:l,props:c})=>{const d=E.useRef(null),p=Y(n,a,l);return M(n,d,l),x.jsxs("svg",{ref:d,...c,style:{overflow:"visible"},children:[x.jsx("rect",{width:"100%",height:"100%",fill:c.background}),p]})},B={translate:{x:0,y:0},scale:{x:1,y:1},skew:{x:0,y:0},rotate:0,origin:{x:0,y:0}},We=({rootRef:n,nodeList:a,path:l,transform:c=B,props:d})=>{const p=E.useRef(null),f=U(c),y=Y(n,a,l);return M(n,p,l),x.jsx("g",{ref:p,transform:f.transform,"transform-origin":f.origin,...d,children:y})},Ye=({id:n,rootRef:a,nodeList:l,path:c,transform:d=B,props:p})=>{const f=E.useRef(null),y=U(d),m=Y(a,l,c);return M(a,f,c),x.jsx("rect",{ref:f,id:n,transform:y.transform,"transform-origin":y.origin,...p,children:m})},Me=({id:n,rootRef:a,nodeList:l,path:c,transform:d=B,props:p})=>{const f=E.useRef(null),y=U(d),m=Y(a,l,c);return M(a,f,c),x.jsx("ellipse",{ref:f,id:n,transform:y.transform,"transform-origin":y.origin,...p,children:m})},Le=(n,a,l,c)=>{const d=(p="")=>{let f=c[l-1];return f.x!==f.x1||f.y!==f.y1||a.x!==a.x0||a.y!==a.y0?f.break||f.type==="startNode"?`${n}C${f.x1},${f.y1} ${a.x0},${a.y0} ${a.x},${a.y}${p}`:`${n}S${a.x0},${a.y0} ${a.x},${a.y}${p}`:`${n}L${a.x},${a.y}${p}`};switch(a.type){case"startNode":return`${n}M${a.x},${a.y}`;case"node":case"endNode":return d();case"endLoopNode":return d("z")}return n},Ve=({id:n,rootRef:a,nodeList:l,path:c,transform:d=B,segments:p=[],props:f})=>{const y=E.useRef(null),m=U(d),w=Y(a,l,c),_=E.useMemo(()=>p.reduce(Le,""),[p]);return M(a,y,c),x.jsx("path",{ref:y,id:n,d:_,transform:m.transform,"transform-origin":m.origin,...f,children:w})},oe=({rootRef:n=E.useRef({}),path:a=[],type:l,...c})=>{switch(l){case"svg":return x.jsx(Ie,{rootRef:n,path:a,...c});case"group":return x.jsx(We,{rootRef:n,path:a,...c});case"rect":return x.jsx(Ye,{rootRef:n,path:a,...c});case"ellipse":return x.jsx(Me,{rootRef:n,path:a,...c});case"path":return x.jsx(Ve,{rootRef:n,path:a,...c})}};P.SVGElement=oe,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
