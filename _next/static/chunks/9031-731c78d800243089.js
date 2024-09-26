(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9031],{68648:function(){"use strict";(()=>{var e,t,r,n,o,l,a,c,i,s,u,f,d,p=Object.create,h=Object.defineProperty,m=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,b=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,v=(e={"node_modules/get-root-node-polyfill/index.js"(e,t){function r(e){return null!=e.parentNode?r(e.parentNode):e}"object"==typeof t&&t.exports&&(t.exports=function(e){return"object"==typeof e&&e.composed?function e(t){var n=r(t);return"#document-fragment"===n.nodeName&&"ShadowRoot"===n.constructor.name?e(n.host):n}(this):r(this)})}},function(){return t||(0,e[y(e)[0]])((t={exports:{}}).exports,t),t.exports});r="yfm-tab-panel",n="active",o=Symbol.for("diplodocTabs"),l=e=>{let t=e.composedPath();return Array.isArray(t)&&t.length>0?t[0]:e.target},a=e=>{let t=l(e);return!t||!t.matches},c=e=>Math.abs(e.scrollHeight-e.clientHeight)>1?e:e.parentElement?c(e.parentElement):void 0,i=(e,t)=>{let r=e.getBoundingClientRect(),n=t.getBoundingClientRect();return{top:r.top-n.top,left:r.left-n.left,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}},s={TABS:".yfm-tabs",TAB_LIST:".yfm-tab-list",TAB:".yfm-tab",TAB_PANEL:`.${r}`},u=class{constructor(e){this._onSelectTabHandlers=new Set,this._document=e,this._document.addEventListener("click",e=>{let t=l(e);if(a(e)||!this.isValidTabElement(t))return;let r=this.getTabDataFromHTMLElement(t);r&&this._selectTab(r,t)}),this._document.addEventListener("keydown",e=>{let t=null;switch(e.key){case"ArrowLeft":t="left";break;case"ArrowRight":t="right"}if(!t)return;let r=l(e);if(a(e)||!this.isValidTabElement(r))return;let{tabs:n,nodes:o}=this.getTabs(r),c=this.getTabDataFromHTMLElement(r),i=n.findIndex(({key:e})=>(null==c?void 0:c.key)&&e===c.key);if(!c||n.length<=1||-1===i)return;let s=(i+("left"===t?-1:1)+n.length)%n.length;this.selectTab(n[s]),o[s].focus()})}onSelectTab(e){return this._onSelectTabHandlers.add(e),()=>{this._onSelectTabHandlers.delete(e)}}selectTabById(e,t){let r=this._document.querySelector(`${s.TAB}[data-diplodoc-id="${e}"]`);if(!r||!this.isValidTabElement(r))return;let n=this.getTabDataFromHTMLElement(r);n&&this._selectTab(n,r),null!=t&&t.scrollToElement&&r.scrollIntoView()}selectTab(e){this._selectTab(e)}_selectTab(e,t){let{group:r,key:n}=e;if(!r)return;let o=t&&c(t),l=o&&i(t,o);this.updateHTML({group:r,key:n})>0&&(this.fireSelectTabEvent({group:r,key:n},null==t?void 0:t.dataset.diplodocId),l&&this.resetScroll(t,o,l))}updateHTML(e){let{group:t,key:o}=e,l=this._document.querySelectorAll(`${s.TABS}[data-diplodoc-group="${t}"] ${s.TAB}[data-diplodoc-key="${o}"]`),a=0;return l.forEach(e=>{if(!this.isValidTabElement(e)||"true"===e.dataset.diplodocIsActive)return;a++;let t=e.parentNode,o=null==t?void 0:t.parentNode,l=Array.from((null==t?void 0:t.querySelectorAll(s.TAB))||[]),c=Array.from((null==o?void 0:o.children)||[]).filter(e=>e.classList.contains(r)),i=l.indexOf(e);l.forEach((e,t)=>{let r=c[t],o=t===i;e.dataset.diplodocIsActive=o?"true":"false",e.classList.toggle(n,o),e.setAttribute("aria-selected",o.toString()),e.setAttribute("tabindex",o?"0":"-1"),r.classList.toggle(n,o)})}),a}resetScroll(e,t,r){let n=i(e,t),o=n.top-r.top,l=n.left-r.left,a=n.scrollTop-r.scrollTop,c=n.scrollLeft-r.scrollLeft;t.scrollTo(t.scrollLeft+l-c,t.scrollTop+o-a)}fireSelectTabEvent(e,t){let{group:r,key:n}=e,o=r.startsWith("defaultTabsGroup-")?{key:n}:e;this._onSelectTabHandlers.forEach(e=>{e({tab:o,currentTabId:t})})}isValidTabElement(e){let t=e.matches(s.TAB)&&e.dataset.diplodocId?e.closest(s.TAB_LIST):null;return null==t?void 0:t.closest(s.TABS)}getTabDataFromHTMLElement(e){var t;let r=e.dataset.diplodocKey,n=null==(t=e.closest(s.TABS))?void 0:t.dataset.diplodocGroup;return r&&n?{group:n,key:r}:null}getTabs(e){var t,r;let n=null==(t=e.closest(s.TABS))?void 0:t.dataset.diplodocGroup,o=null==(r=e.closest(s.TAB_LIST))?void 0:r.querySelectorAll(s.TAB),l=[];return o.forEach(e=>{let t=null==e?void 0:e.dataset.diplodocKey;t&&l.push({group:n,key:t})}),{tabs:l,nodes:o}}},"undefined"==typeof window||"undefined"==typeof document||window[o]||(window[o]=new u(document));var T=(d=null!=(f=v())?p(b(f)):{},((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of y(t))g.call(e,r)||void 0===r||h(e,r,{get:()=>t[r],enumerable:!(n=m(t,r))||n.enumerable});return e})(f&&f.__esModule?d:h(d,"default",{value:f,enumerable:!0}),f));"undefined"!=typeof document&&function(e){let t=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;t?e.matches=e.matchesSelector=t:e.matches=e.matchesSelector=function(t){let r=(e.getRootNode?e.getRootNode():T.default.call(e)).querySelectorAll(t),n=this;return Array.prototype.some.call(r,e=>e===n)}}(Element.prototype);var A=e=>{let t=e.composedPath();return Array.isArray(t)&&t.length>0?t[0]:e.target},E=e=>{let t=A(e);return!t||!t.matches};"undefined"!=typeof document&&document.addEventListener("click",e=>{let t=A(e);if(E(e)||!t.matches(".yfm-clipboard-button"))return;let r=t.parentNode;if(!r)return;let n=r.querySelector("pre code");n&&(function(e){if(!e)return Promise.resolve();if(navigator.clipboard&&(navigator.clipboard.writeText,1))return navigator.clipboard.writeText(e);let t=document.createElement("textarea");return t.setAttribute("style","position: absolute; left: 1000%"),t.textContent=e,document.body.append(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),Promise.resolve()})(n.innerText).then(()=>{!function(e){if(!e)return;let t=e.getAttribute("data-animation"),r=e.getRootNode().getElementById(`visibileAnimation-${t}`);r&&r.beginElement()}(r.querySelector(".yfm-clipboard-button"))})});var w={TITLE:".yfm .yfm-cut-title"};function x(e){var t;return e instanceof HTMLElement&&(null==(t=null==e?void 0:e.matches)?void 0:t.call(e,w.TITLE))}"undefined"!=typeof document&&document.addEventListener("click",e=>{if(E(e))return;let t=function(e){var t;let r=A(e);if(x(r))return r;let n=null==(t=e.composedPath)?void 0:t.call(e);return null==n?void 0:n.find(x)}(e);t&&function(e){let t=e.parentNode;t instanceof HTMLElement&&t.classList.toggle("open")}(t)});var j={TITLE:".yfm .yfm-term_title",CONTENT:".yfm .yfm-term_dfn"},S="open",L=j.CONTENT.replace(/\./g,"")+" "+S,O=!0;function C(e,t){let{x:r,y:n,right:o,left:l,width:a,height:c}=t.getBoundingClientRect(),i=I(t);if(!i)return;let{right:s,left:u}=i.getBoundingClientRect();if((s<l||u>o)&&!O){k(e);return}O&&i&&(i.addEventListener("scroll",B),O=!1);let f=Number(e.getAttribute("relativeX")),d=Number(e.getAttribute("relativeY"));if(f===r&&d===n)return;e.setAttribute("relativeX",String(r)),e.setAttribute("relativeY",String(n));let p=e.parentElement;if(!p)return;let{width:h}=e.getBoundingClientRect(),{left:m}=p.getBoundingClientRect(),y=Number(R(t).left),b=h+y>document.body.clientWidth||"rtl"===document.dir,g=R(p).top-p.offsetTop;e.style.top=Number(R(t).top+(c+5)-g)+"px",e.style.left=Number(R(t).left-m+p.offsetLeft-(b&&!(y-h<0)?h-a:0))+"px"}function B(){let e=document.getElementsByClassName(L)[0];if(!e)return;let t=e.getAttribute("term-id")||"",r=document.getElementById(t);r&&C(e,r)}function I(e){return e?e.closest("table")||e.closest("code")||e.parentElement:null}function k(e){e.classList.remove(S);let t=e.getAttribute("term-id")||"",r=I(document.getElementById(t));r&&(r.removeEventListener("scroll",B),O=!0)}function R(e){let t=e.getBoundingClientRect(),r=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||r.scrollTop,l=window.pageXOffset||n.scrollLeft||r.scrollLeft,a=n.clientTop||r.clientTop||0,c=n.clientLeft||r.clientLeft||0;return{top:Math.round(t.top+o-a),left:Math.round(t.left+l-c)}}"undefined"!=typeof document&&(document.addEventListener("click",e=>{let t=document.getElementsByClassName(L)[0],r=A(e),n=r.getAttribute("id"),o=r.getAttribute("term-key"),l=document.getElementById(o+"_element");if(o&&!l&&(l=function(e){var t;let r=e.getAttribute("term-key"),n=document.getElementById(`${r}_template`),o=null==n?void 0:n.content.cloneNode(!0).firstChild;return null==(t=null==n?void 0:n.parentElement)||t.appendChild(o),n.remove(),o}(r)),t&&n===t.getAttribute("term-id")){k(t);return}let a=r.closest([j.CONTENT.replace(" ",""),S].join("."));t&&!a&&k(t),!E(e)&&r.matches(j.TITLE)&&l&&(function(e,t){let r=t.getAttribute("id")||Math.random().toString(36).substr(2,8);null==e||e.setAttribute("term-id",r)}(l,r),C(l,r),l.classList.toggle(S))}),document.addEventListener("keydown",e=>{let t=document.getElementsByClassName(L)[0];"Escape"===e.key&&t&&k(t)}),window.addEventListener("resize",()=>{let e=document.getElementsByClassName(L)[0];if(!e)return;let t=e.getAttribute("term-id")||"",r=document.getElementById(t);if(!r){e.classList.toggle(S);return}C(e,r)}))})()},38663:function(e,t,r){"use strict";var n=r(67294);t.Z=e=>n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.75 8a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11A.75.75 0 0 1 1.75 8",clipRule:"evenodd"}))},9996:function(e){"use strict";var t=function(e){var t;return!!e&&"object"==typeof e&&"[object RegExp]"!==(t=Object.prototype.toString.call(e))&&"[object Date]"!==t&&e.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c(Array.isArray(e)?[]:{},e,t):e}function o(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function l(e){return Object.keys(e).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[])}function a(e,t){try{return t in e}catch(e){return!1}}function c(e,r,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||t,i.cloneUnlessOtherwiseSpecified=n;var s,u,f=Array.isArray(r);return f!==Array.isArray(e)?n(r,i):f?i.arrayMerge(e,r,i):(u={},(s=i).isMergeableObject(e)&&l(e).forEach(function(t){u[t]=n(e[t],s)}),l(r).forEach(function(t){(!a(e,t)||Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))&&(a(e,t)&&s.isMergeableObject(r[t])?u[t]=(function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"==typeof r?r:c})(t,s)(e[t],r[t],s):u[t]=n(r[t],s))}),u)}c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce(function(e,r){return c(e,r,t)},{})},e.exports=c},44286:function(e){e.exports=function(e){return e.split("")}},14259:function(e){e.exports=function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var l=Array(o);++n<o;)l[n]=e[n+t];return l}},57406:function(e,t,r){var n=r(71811),o=r(10928),l=r(40292),a=r(40327);e.exports=function(e,t){return t=n(t,e),null==(e=l(e,t))||delete e[a(o(t))]}},40180:function(e,t,r){var n=r(14259);e.exports=function(e,t,r){var o=e.length;return r=void 0===r?o:r,!t&&r>=o?e:n(e,t,r)}},98805:function(e,t,r){var n=r(40180),o=r(62689),l=r(83140),a=r(79833);e.exports=function(e){return function(t){var r=o(t=a(t))?l(t):void 0,c=r?r[0]:t.charAt(0),i=r?n(r,1).join(""):t.slice(1);return c[e]()+i}}},60696:function(e,t,r){var n=r(68630);e.exports=function(e){return n(e)?void 0:e}},62689:function(e){var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},40292:function(e,t,r){var n=r(97786),o=r(14259);e.exports=function(e,t){return t.length<2?e:n(e,o(t,0,-1))}},83140:function(e,t,r){var n=r(44286),o=r(62689),l=r(676);e.exports=function(e){return o(e)?l(e):n(e)}},676:function(e){var t="\ud800-\udfff",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\ud83c[\udffb-\udfff]",o="[^"+t+"]",l="(?:\ud83c[\udde6-\uddff]){2}",a="[\ud800-\udbff][\udc00-\udfff]",c="(?:"+r+"|"+n+")?",i="[\\ufe0e\\ufe0f]?",s="(?:\\u200d(?:"+[o,l,a].join("|")+")"+i+c+")*",u=RegExp(n+"(?="+n+")|(?:"+[o+r+"?",r,l,a,"["+t+"]"].join("|")+")"+(i+c+s),"g");e.exports=function(e){return e.match(u)||[]}},48403:function(e,t,r){var n=r(79833),o=r(11700);e.exports=function(e){return o(n(e).toLowerCase())}},57557:function(e,t,r){var n=r(29932),o=r(85990),l=r(57406),a=r(71811),c=r(98363),i=r(60696),s=r(99021),u=r(46904),f=s(function(e,t){var r={};if(null==e)return r;var s=!1;t=n(t,function(t){return t=a(t,e),s||(s=t.length>1),t}),c(e,u(e),r),s&&(r=o(r,7,i));for(var f=t.length;f--;)l(r,t[f]);return r});e.exports=f},45578:function(e,t,r){var n=r(67206),o=r(45652);e.exports=function(e,t){return e&&e.length?o(e,n(t,2)):[]}},11700:function(e,t,r){var n=r(98805)("toUpperCase");e.exports=n},11987:function(e,t,r){!function(){var t={452:function(e){"use strict";e.exports=r(97334)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}},a=!0;try{t[e](l,l.exports,o),a=!1}finally{a&&delete n[e]}return l.exports}o.ab="//";var l={};!function(){var e,t=(e=o(452))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function n(e){"string"==typeof e&&(e=b(e));var n,o,l,a,c,i,s,u,f,d=(o=(n=e).auth,l=n.hostname,a=n.protocol||"",c=n.pathname||"",i=n.hash||"",s=n.query||"",u=!1,o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",n.host?u=o+n.host:l&&(u=o+(~l.indexOf(":")?"["+l+"]":l),n.port&&(u+=":"+n.port)),s&&"object"==typeof s&&(s=t.encode(s)),f=n.search||s&&"?"+s||"",a&&":"!==a.substr(-1)&&(a+=":"),n.slashes||(!a||r.test(a))&&!1!==u?(u="//"+(u||""),c&&"/"!==c[0]&&(c="/"+c)):u||(u=""),i&&"#"!==i[0]&&(i="#"+i),f&&"?"!==f[0]&&(f="?"+f),{protocol:a,host:u,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:f=f.replace("#","%23"),hash:i});return""+d.protocol+d.host+d.pathname+d.search+d.hash}var a="http://",c=a+"w.w",i=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,s=/https?|ftp|gopher|file/;function u(e,t){var r="string"==typeof e?b(e):e;e="object"==typeof e?n(e):e;var o=b(t),l="";r.protocol&&!r.slashes&&(l=r.protocol,e=e.replace(r.protocol,""),l+="/"===t[0]||"/"===e[0]?"/":""),l&&o.protocol&&(l="",o.slashes||(l=o.protocol,t=t.replace(o.protocol,"")));var u=e.match(i);u&&!o.protocol&&(e=e.substr((l=u[1]+(u[2]||"")).length),/^\/\/[^/]/.test(t)&&(l=l.slice(0,-1)));var f=new URL(e,c+"/"),d=new URL(t,f).toString().replace(c,""),p=o.protocol||r.protocol;return p+=r.slashes||o.slashes?"//":"",!l&&p?d=d.replace(a,p):l&&(d=d.replace(a,"")),s.test(d)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==d.slice(-1)||(d=d.slice(0,-1)),l&&(d=l+("/"===d[0]?d.substr(1):d)),d}function f(){}f.prototype.parse=b,f.prototype.format=n,f.prototype.resolve=u,f.prototype.resolveObject=u;var d=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,h=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,y=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function b(e,r,o){if(void 0===r&&(r=!1),void 0===o&&(o=!1),e&&"object"==typeof e&&e instanceof f)return e;var l=(e=e.trim()).match(p);e=l?l[1].replace(/\\/g,"/")+l[2]:e.replace(/\\/g,"/"),y.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(h),i=m.test(e),s="";a&&(d.test(a[1])||(s=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(i=!1,d.test(a[1])?(s=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(s=a[1],e="/"+a[3]));var u,b=(l?l[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),g=b&&b[1],v=new f,T="",A="";try{u=new URL(e)}catch(t){T=t,s||o||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(A="/",e=e.substr(1));try{u=new URL(e,c)}catch(e){return v.protocol=s,v.href=s,v}}v.slashes=i&&!A,v.host="w.w"===u.host?"":u.host,v.hostname="w.w"===u.hostname?"":u.hostname.replace(/(\[|\])/g,""),v.protocol=T?s||null:u.protocol,v.search=u.search.replace(/\\/g,"%5C"),v.hash=u.hash.replace(/\\/g,"%5C");var E=e.split("#");!v.search&&~E[0].indexOf("?")&&(v.search="?"),v.hash||""!==E[1]||(v.hash="#"),v.query=r?t.decode(u.search.substr(1)):v.search.substr(1),v.pathname=A+(a?u.pathname.replace(/['^|`]/g,function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(e,t){try{return decodeURIComponent(t).split("").map(function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()}).join("")}catch(e){return t}}):u.pathname),"about:"===v.protocol&&"blank"===v.pathname&&(v.protocol="",v.pathname=""),T&&"/"!==e[0]&&(v.pathname=v.pathname.substr(1)),s&&!d.test(s)&&"/"!==e.slice(-1)&&"/"===v.pathname&&(v.pathname=""),v.path=v.pathname+v.search,v.auth=[u.username,u.password].map(decodeURIComponent).filter(Boolean).join(":"),v.port=u.port,g&&!v.host.endsWith(g)&&(v.host+=g,v.port=g.slice(1)),v.href=A?""+v.pathname+v.search+v.hash:n(v);var w=/^(file)/.test(v.href)?["host","hostname"]:[];return Object.keys(v).forEach(function(e){~w.indexOf(e)||(v[e]=v[e]||null)}),v}l.parse=b,l.format=n,l.resolve=u,l.resolveObject=function(e,t){return b(u(e,t))},l.Url=f}(),e.exports=l}()},97334:function(e){!function(){"use strict";var t={815:function(e){e.exports=function(e,r,n,o){r=r||"&",n=n||"=";var l={};if("string"!=typeof e||0===e.length)return l;var a=/\+/g;e=e.split(r);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var i=e.length;c>0&&i>c&&(i=c);for(var s=0;s<i;++s){var u,f,d,p,h=e[s].replace(a,"%20"),m=h.indexOf(n);(m>=0?(u=h.substr(0,m),f=h.substr(m+1)):(u=h,f=""),d=decodeURIComponent(u),p=decodeURIComponent(f),Object.prototype.hasOwnProperty.call(l,d))?t(l[d])?l[d].push(p):l[d]=[l[d],p]:l[d]=p}return l};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,l,a,c){return(l=l||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e)?n(o(e),function(o){var c=encodeURIComponent(t(o))+a;return r(e[o])?n(e[o],function(e){return c+encodeURIComponent(t(e))}).join(l):c+encodeURIComponent(t(e[o]))}).join(l):c?encodeURIComponent(t(c))+a+encodeURIComponent(t(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}},a=!0;try{t[e](l,l.exports,n),a=!1}finally{a&&delete r[e]}return l.exports}n.ab="//";var o={};o.decode=o.parse=n(815),o.encode=o.stringify=n(577),e.exports=o}()}}]);