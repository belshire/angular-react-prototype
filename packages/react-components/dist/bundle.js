!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=14)}([function(e,n,t){"use strict";e.exports=t(6)},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,l,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function l(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],u=n.base?a[0]+n.base:a[0],c=t[u]||0,s="".concat(u," ").concat(c);t[u]=c+1;var f=l(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:h(p,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,f=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function d(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,y=0;function h(e,n){var t,r,o;if(n.singleton){var a=y++;t=m||(m=c(n)),r=p.bind(null,t,a,!1),o=p.bind(null,t,a,!0)}else t=c(n),r=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=l(t[r]);i[o].references--}for(var a=u(e,n),c=0;c<t.length;c++){var s=l(t[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=a}}}},function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(this,arguments)}e.exports=t},function(e,n,t){var r=t(5);e.exports=function(e,n){if(null==e)return{};var t,o,a=r(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}},function(e,n,t){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(7),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function x(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}function w(){}function k(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var E=k.prototype=new w;E.constructor=k,r(E,x.prototype),E.isPureReactComponent=!0;var S={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,t){var r,o={},i=null,l=null;if(null!=n)for(r in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,r)&&!O.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,R=[];function A(e,n,t,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function z(e,n,t){return null==e?0:function e(n,t,r,o){var l=typeof n;"undefined"!==l&&"boolean"!==l||(n=null);var u=!1;if(null===n)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(n.$$typeof){case a:case i:u=!0}}if(u)return r(o,n,""===t?"."+$(n,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(n))for(var c=0;c<n.length;c++){var s=t+$(l=n[c],c);u+=e(l,s,r,o)}else if(null===n||"object"!=typeof n?s=null:s="function"==typeof(s=h&&n[h]||n["@@iterator"])?s:null,"function"==typeof s)for(n=s.call(n),c=0;!(l=n.next()).done;)u+=e(l=l.value,s=t+$(l,c++),r,o);else if("object"===l)throw r=""+n,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,""));return u}(e,"",n,t)}function $(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function N(e,n){e.func.call(e.context,n,e.count++)}function L(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?H(e,r,t,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),r.push(e))}function H(e,n,t,r,o){var a="";null!=t&&(a=(""+t).replace(P,"$&/")+"/"),z(e,L,n=A(n,a,r,o)),M(n)}var T={current:null};function I(){var e=T.current;if(null===e)throw Error(v(321));return e}var U={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:function(e,n,t){if(null==e)return e;var r=[];return H(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;z(e,N,n=A(null,null,n,t)),M(n)},count:function(e){return z(e,(function(){return null}),null)},toArray:function(e){var n=[];return H(e,n,null,(function(e){return e})),n},only:function(e){if(!C(e))throw Error(v(143));return e}},n.Component=x,n.Fragment=l,n.Profiler=c,n.PureComponent=k,n.StrictMode=u,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,n.cloneElement=function(e,n,t){if(null==e)throw Error(v(267,e));var o=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,u=S.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in n)j.call(n,s)&&!O.hasOwnProperty(s)&&(o[s]=void 0===n[s]&&void 0!==c?c[s]:n[s])}var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:a,type:e.type,key:i,ref:l,props:o,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:f,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:p,render:e}},n.isValidElement=C,n.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:m,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return I().useCallback(e,n)},n.useContext=function(e,n){return I().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return I().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return I().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return I().useLayoutEffect(e,n)},n.useMemo=function(e,n){return I().useMemo(e,n)},n.useReducer=function(e,n,t){return I().useReducer(e,n,t)},n.useRef=function(e){return I().useRef(e)},n.useState=function(e){return I().useState(e)},n.version="16.13.1"},function(e,n,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,l,u=i(e),c=1;c<arguments.length;c++){for(var s in t=Object(arguments[c]))o.call(t,s)&&(u[s]=t[s]);if(r){l=r(t);for(var f=0;f<l.length;f++)a.call(t,l[f])&&(u[l[f]]=t[l[f]])}}return u}},function(e,n,t){var r=t(2),o=t(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),n.default=o},function(e,n,t){var r=t(2),o=t(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),n.default=o},function(e,n,t){var r=t(2),o=t(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r)()(!1);o.push([e.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),n.default=o},function(e,n,t){"use strict";t.r(n),t.d(n,"ReactComponents",(function(){return p})),t.d(n,"Button",(function(){return c})),t.d(n,"Header",(function(){return s})),t.d(n,"Page",(function(){return f}));var r=t(3),o=t.n(r),a=t(4),i=t.n(a),l=t(0),u=t.n(l),c=(t(8),function(e){var n=e.primary,t=void 0!==n&&n,r=e.size,a=void 0===r?"medium":r,l=e.backgroundColor,c=e.label,s=i()(e,["primary","size","backgroundColor","label"]),f=t?"storybook-button--primary":"storybook-button--secondary";return u.a.createElement("button",o()({type:"button",className:["storybook-button","storybook-button--".concat(a),f].join(" "),style:{backgroundColor:l}},s),c)}),s=(t(10),function(e){var n=e.user,t=e.onLogin,r=e.onLogout,o=e.onCreateAccount;return u.a.createElement("header",null,u.a.createElement("div",{className:"wrapper"},u.a.createElement("div",null,u.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("g",{fill:"none",fillRule:"evenodd"},u.a.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),u.a.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),u.a.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),u.a.createElement("h1",null,"Acme")),u.a.createElement("div",null,n?u.a.createElement(c,{size:"small",onClick:r,label:"Log out"}):u.a.createElement(u.a.Fragment,null,u.a.createElement(c,{size:"small",onClick:t,label:"Log in"}),u.a.createElement(c,{primary:!0,size:"small",onClick:o,label:"Sign up"})))))}),f=(t(12),function(e){var n=e.user,t=e.onLogin,r=e.onLogout,o=e.onCreateAccount;return u.a.createElement("article",null,u.a.createElement(s,{user:n,onLogin:t,onLogout:r,onCreateAccount:o}),u.a.createElement("section",null,u.a.createElement("h2",null,"Pages in Storybook"),u.a.createElement("p",null,"We recommend building UIs with a"," ",u.a.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},u.a.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),u.a.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),u.a.createElement("ul",null,u.a.createElement("li",null,"Use a higher-level connected component. Storybook helps you compose such data from the “args” of child component stories"),u.a.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),u.a.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",u.a.createElement("a",{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer"},"Learn Storybook"),". Read more in the"," ",u.a.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),u.a.createElement("div",{className:"tip-wrapper"},u.a.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",u.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},u.a.createElement("g",{fill:"none",fillRule:"evenodd"},u.a.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))}),p={Button:c,Header:s,Page:f};n.default=p}]);