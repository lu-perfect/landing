(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9178],{47674:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75",clipRule:"evenodd"}))},51693:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))},852:function(e,t,n){"use strict";var r=n(67294);t.Z=e=>r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.2.2 0 0 1 .271.073l.802 1.388a.2.2 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.2.2 0 0 1 .073.271l-.802 1.388a.2.2 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.2.2 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.2.2 0 0 1-.272-.073l-.8-1.388a.2.2 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.2.2 0 0 1-.073-.27l.801-1.389a.2.2 0 0 1 .272-.072C5.042 5.138 7 4.007 7 2.199c0-.11.089-.199.199-.199M5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.7 1.7 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.7 1.7 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.7 1.7 0 0 1-2.32-.622l-.802-1.388a1.7 1.7 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.7 1.7 0 0 1-.622-2.32l.801-1.389a1.7 1.7 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2m4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0",clipRule:"evenodd"}))},49179:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(67294),o=n(51693),i=n(43671),a=n(32782);n(42554);let c=(0,a.Ge)("arrow-toggle");function l({size:e=16,direction:t="bottom",className:n,qa:a}){return r.createElement("span",{style:{width:e,height:e},className:c({direction:t},n),"data-qa":a},r.createElement(i.J,{data:o.Z,size:e}))}},7696:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(97582),o=n(67294),i=n(1063),a=n(69178),c=n(37105),l=n(43671);function s(e){var{status:t}=e,n=(0,r._T)(e,["status"]);return"error"===t?o.createElement(l.J,Object.assign({data:i.Z},n)):"success"===t?o.createElement(l.J,Object.assign({data:a.Z},n)):o.createElement(l.J,Object.assign({data:c.Z},n))}},48696:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var r=n(67294),o=n(74855),i=n.n(o);let a="pending";function c(e){let{children:t,text:n,options:o,timeout:c,onCopy:l}=e,[s,u]=r.useState(a),f=r.useRef(),d=r.useMemo(()=>t(s),[t,s]),p=r.useCallback((e,t)=>{u(t?"success":"error"),window.clearTimeout(f.current),f.current=window.setTimeout(()=>u(a),c),null==l||l(e,t)},[l,c]);if(r.useEffect(()=>()=>window.clearTimeout(f.current),[]),!r.isValidElement(d))throw Error("Content must be a valid react element");return r.createElement(i(),{text:n,onCopy:p,options:o},d)}},52010:function(e,t,n){"use strict";n.d(t,{_:function(){return f}});var r=n(67294),o=n(58405),i=n(7696),a=n(48696),c=n(43671),l=n(32782);n(67502);let s=(0,l.Ge)("label"),u={xs:{copyIconSize:12,closeIconSize:12},s:{copyIconSize:14,closeIconSize:14},m:{copyIconSize:16,closeIconSize:16}},f=r.forwardRef(function(e,t){let{type:n="default",theme:l="normal",size:f="xs",title:d,icon:p,children:v,onCloseClick:m,className:y,disabled:b,copyText:h,closeButtonLabel:w,copyButtonLabel:g,interactive:x=!1,value:E,onCopy:O,onClick:j,qa:N}=e,C=!!(""!==v&&r.Children.count(v)>0),k="close"===n&&C,S="copy"===n&&C,_="function"==typeof j,R=!!(S&&h),T=(_||R||x)&&!b,{copyIconSize:P,closeIconSize:G}=u[f],I=p&&r.createElement("div",{className:s("addon",{side:C?"start":void 0,type:"icon"})},p),H=C&&r.createElement("div",{className:s("text")},r.createElement("div",{className:s("content")},v),!!E&&r.createElement("div",{className:s("value")},r.createElement("div",{className:s("separator")},":"),r.createElement("div",{className:s("key")},E))),z=e=>{let n;return S?n=r.createElement("button",{type:"button","aria-label":g||void 0,onClick:_?j:void 0,disabled:b,className:s("addon",{side:"end",type:"button"})},r.createElement(i.K,{status:e||"pending",size:P})):k&&(n=r.createElement("button",{type:"button",onClick:m,"aria-label":w||void 0,disabled:b,className:s("addon",{side:"end",type:"button"})},r.createElement(c.J,{size:G,data:o.Z}))),r.createElement("div",{ref:t,className:s({theme:l,size:f,interactive:T,disabled:b},y),title:d,"data-qa":N},I,_?r.createElement("button",{disabled:b,type:"button",onClick:j,className:s("main-button")},H):H,n)};return R&&h&&!_?r.createElement(a.h,{text:h,onCopy:O,timeout:1e3},e=>z(e)):z()})},95172:function(e,t,n){"use strict";n.d(t,{u:function(){return p}});var r=n(67294),o=n(5031),i=n(42361),a=n(86758),c=n(87174),l=n(98484),s=n(32782),u=n(44562),f=n(35860);n(8719);let d=(0,s.Ge)("modal");function p({open:e=!1,keepMounted:t=!1,disableBodyScrollLock:n=!1,disableEscapeKeyDown:s,disableOutsideClick:p,disableFocusTrap:v,disableAutoFocus:m,focusTrap:y=!0,autoFocus:b=!0,restoreFocusRef:h,onEscapeKeyDown:w,onEnterKeyDown:g,onOutsideClick:x,onClose:E,onTransitionEnter:O,onTransitionEntered:j,onTransitionExit:N,onTransitionExited:C,children:k,style:S,contentOverflow:_="visible",className:R,contentClassName:T,"aria-labelledby":P,"aria-label":G,container:I,qa:H}){let z=r.useRef(null),L=r.useRef(null),[M,Z]=r.useState(!1);(0,i.y)({enabled:!n&&(e||M)});let q=(0,a.H)({enabled:e||M,restoreFocusRef:h,focusTrapped:!0});return(0,u.s)({open:e,disableEscapeKeyDown:s,disableOutsideClick:p,onEscapeKeyDown:w,onEnterKeyDown:g,onOutsideClick:x,onClose:E,contentRefs:[L],type:"modal"}),r.createElement(o.Z,{nodeRef:z,in:e,addEndListener:e=>{var t;return null===(t=z.current)||void 0===t?void 0:t.addEventListener("animationend",e)},classNames:(0,f.Y)(d),mountOnEnter:!t,unmountOnExit:!t,appear:!0,onEnter:()=>{Z(!0),null==O||O()},onExit:()=>{Z(!0),null==N||N()},onEntered:()=>{Z(!1),null==j||j()},onExited:()=>{Z(!1),null==C||C()}},r.createElement(c.h,{container:I},r.createElement("div",{ref:z,style:S,className:d({open:e},R),"data-qa":H},r.createElement("div",{className:d("content-aligner")},r.createElement("div",{className:d("content-wrapper")},r.createElement(l.i,{enabled:!v&&y&&e&&!M,autoFocus:!m&&b},r.createElement("div",Object.assign({ref:L,tabIndex:-1,role:"dialog","aria-modal":e,"aria-label":G,"aria-labelledby":P,className:d("content",{"has-scroll":"auto"===_},T)},q),k)))))))}},95395:function(e,t,n){"use strict";n.d(t,{y:function(){return a}});var r=n(67294),o=n(32782);n(71988);let i=(0,o.Ge)("spin"),a=r.forwardRef(function(e,t){let{size:n="m",style:o,className:a,qa:c}=e;return r.createElement("div",{ref:t,style:o,className:i({size:n},a),"data-qa":c},r.createElement("div",{className:i("inner")}))})},48323:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(97582),o=n(67294),i=n(35930),a=n(74200);let c=o.forwardRef(function(e,t){var{as:n,children:c,variant:l,className:s,ellipsis:u,color:f,whiteSpace:d,wordBreak:p,ellipsisLines:v,style:m,qa:y}=e,b=(0,r._T)(e,["as","children","variant","className","ellipsis","color","whiteSpace","wordBreak","ellipsisLines","style","qa"]);let h=Object.assign({},m);return"number"==typeof v&&(h.WebkitLineClamp=v),o.createElement(n||"span",Object.assign({ref:t,className:(0,a.f)({variant:l,ellipsis:u,whiteSpace:d,wordBreak:p,ellipsisLines:"number"==typeof v},f?(0,i.V)({color:f},s):s),style:h,"data-qa":y},b),c)});c.displayName="Text"},35930:function(e,t,n){"use strict";n.d(t,{V:function(){return a},b:function(){return i}});var r=n(32782);n(30178);let o=(0,r.Ge)("color-text"),i=["primary","complementary","secondary","hint","info","info-heavy","positive","positive-heavy","warning","warning-heavy","danger","danger-heavy","utility","utility-heavy","misc","misc-heavy","brand","link","link-hover","link-visited","link-visited-hover","dark-primary","dark-complementary","dark-secondary","light-primary","light-complementary","light-secondary","light-hint","inverted-primary","inverted-complementary","inverted-secondary","inverted-hint"],a=({color:e},t)=>o({color:e},t)},74200:function(e,t,n){"use strict";n.d(t,{S:function(){return i},f:function(){return a}});var r=n(32782);n(99125);let o=(0,r.Ge)("text"),i=["display-4","display-3","display-2","display-1","header-2","header-1","subheader-3","subheader-2","subheader-1","body-3","body-2","body-1","body-short","caption-2","caption-1","code-3","code-inline-3","code-2","code-inline-2","code-1","code-inline-1"],a=({variant:e="body-1",ellipsis:t,ellipsisLines:n,whiteSpace:r,wordBreak:i},a)=>o({variant:e,ellipsis:t,ws:r,wb:i,"ellipsis-lines":n},a)},16730:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(97582),o=n(67294),i=n(32782),a=n(88267);n(26154);let c=(0,i.Ge)("box"),l=o.forwardRef(function(e,t){var{as:n,children:i,qa:l,className:s,width:u,height:f,minWidth:d,minHeight:p,maxHeight:v,maxWidth:m,position:y,style:b,spacing:h,overflow:w}=e,g=(0,r._T)(e,["as","children","qa","className","width","height","minWidth","minHeight","maxHeight","maxWidth","position","style","spacing","overflow"]);let x=Object.assign({width:u,height:f,minWidth:d,minHeight:p,maxHeight:v,maxWidth:m,position:y},b);return o.createElement(n||"div",Object.assign({},g,{"data-qa":l,style:x,ref:t,className:c({overflow:w},h?(0,a.sp)(h,s):s)}),i)})},16468:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var r=n(97582),o=n(67294),i=n(32782),a=n(16730),c=n(23507),l=n(21245);n(69589);let s=(0,i.Ge)("flex"),u=o.forwardRef(function(e,t){let{as:n,direction:i,grow:u,basis:f,children:d,style:p,alignContent:v,alignItems:m,alignSelf:y,justifyContent:b,justifyItems:h,justifySelf:w,shrink:g,wrap:x,inline:E,gap:O,gapRow:j,className:N,space:C,centerContent:k}=e,S=(0,r._T)(e,["as","direction","grow","basis","children","style","alignContent","alignItems","alignSelf","justifyContent","justifyItems","justifySelf","shrink","wrap","inline","gap","gapRow","className","space","centerContent"]),{getClosestMediaProps:_,theme:{spaceBaseSize:R}}=(0,c.l)(),T=e=>"object"==typeof e&&null!==e?_(e):e,P=T(O),G=P?R*Number(P):void 0,I=T(j)||P,H=I?R*Number(I):void 0,z=T(C),L=O||j||!z?void 0:(0,l.cA)(z);return o.createElement(a.x,Object.assign({as:n||"div",className:s({"center-content":k,inline:E,s:L},N),ref:t,style:Object.assign({flexDirection:T(i),flexGrow:!0===u?1:u,flexWrap:!0===x?"wrap":x,flexBasis:f,flexShrink:g,columnGap:G,rowGap:H,alignContent:T(v),alignItems:T(m),alignSelf:T(y),justifyContent:T(b),justifyItems:T(h),justifySelf:T(w)},p)},S),C?o.Children.map(d,e=>e?o.createElement("div",{className:s("wr")},e):e):d)})},23507:function(e,t,n){"use strict";n.d(t,{l:function(){return a}});var r=n(67294),o=n(47989),i=n(21245);let a=()=>{let{activeMediaQuery:e,theme:t}=r.useContext(o.V),{isMediaActive:n,getClosestMediaProps:a}=r.useMemo(()=>({isMediaActive:(0,i.ur)(e),getClosestMediaProps:(0,i.GD)(e)}),[e]);return{theme:t,activeMediaQuery:e,isMediaActive:n,getClosestMediaProps:a}}},88267:function(e,t,n){"use strict";n.d(t,{W:function(){return a},sp:function(){return c}});var r=n(32782),o=n(21245);n(4676);let i=(0,r.Ge)("s"),a=(e,t)=>{let n=[];for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)){let r=e[t];void 0!==r&&n.push(i(`${t}_${(0,o.cA)(r)}`))}return t&&n.push(t),n.join(" ")},c=a},21245:function(e,t,n){"use strict";n.d(t,{GD:function(){return c},cA:function(){return l},ur:function(){return i}});var r=n(76820);let o={s:0,m:1,l:2,xl:3,xxl:4,xxxl:5},i=e=>t=>e in o&&o[e]-o[t]>=0,a=["s","m","l","xl","xxl","xxxl"],c=e=>(t={})=>{if(!e)return;let n=e;for(;n;){if(t[n])return t[n];n=a[o[n]-1]}},l=e=>e in r.Q?r.Q[e]:String(e)},3528:function(e,t,n){"use strict";var r,o;n.d(t,{Pe:function(){return l},Uo:function(){return r},iE:function(){return s},jQ:function(){return c}}),(o=r||(r={})).Ru="ru",o.En="en";let i=[],a={lang:r.En,fallbackLang:r.En},c=e=>{Object.assign(a,e),i.forEach(e=>{e(a)})},l=e=>(i.push(e),()=>{i=i.filter(t=>t!==e)}),s=()=>a},86556:function(e,t,n){var r=n(89465),o=n(77813);e.exports=function(e,t,n){(void 0===n||o(e[t],n))&&(void 0!==n||t in e)||r(e,t,n)}},34865:function(e,t,n){var r=n(89465),o=n(77813),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var a=e[t];i.call(e,t)&&o(a,n)&&(void 0!==n||t in e)||r(e,t,n)}},89465:function(e,t,n){var r=n(38777);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},3118:function(e,t,n){var r=n(13218),o=Object.create,i=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=i},10313:function(e,t,n){var r=n(13218),o=n(25726),i=n(33498),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return i(e);var t=o(e),n=[];for(var c in e)"constructor"==c&&(t||!a.call(e,c))||n.push(c);return n}},42980:function(e,t,n){var r=n(46384),o=n(86556),i=n(28483),a=n(59783),c=n(13218),l=n(81704),s=n(36390);e.exports=function e(t,n,u,f,d){t!==n&&i(n,function(i,l){if(d||(d=new r),c(i))a(t,n,l,u,e,f,d);else{var p=f?f(s(t,l),i,l+"",t,n,d):void 0;void 0===p&&(p=i),o(t,l,p)}},l)}},59783:function(e,t,n){var r=n(86556),o=n(64626),i=n(77133),a=n(6450),c=n(38517),l=n(35694),s=n(1469),u=n(29246),f=n(44144),d=n(23560),p=n(13218),v=n(68630),m=n(36719),y=n(36390),b=n(59881);e.exports=function(e,t,n,h,w,g,x){var E=y(e,n),O=y(t,n),j=x.get(O);if(j){r(e,n,j);return}var N=g?g(E,O,n+"",e,t,x):void 0,C=void 0===N;if(C){var k=s(O),S=!k&&f(O),_=!k&&!S&&m(O);N=O,k||S||_?s(E)?N=E:u(E)?N=a(E):S?(C=!1,N=o(O,!0)):_?(C=!1,N=i(O,!0)):N=[]:v(O)||l(O)?(N=E,l(E)?N=b(E):(!p(E)||d(E))&&(N=c(O))):C=!1}C&&(x.set(O,N),w(N,O,h,g,x),x.delete(O)),r(e,n,N)}},74318:function(e,t,n){var r=n(11149);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},64626:function(e,t,n){e=n.nmd(e);var r=n(55639),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,c=a?a.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=c?c(n):new e.constructor(n);return e.copy(r),r}},77133:function(e,t,n){var r=n(74318);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},6450:function(e){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},98363:function(e,t,n){var r=n(34865),o=n(89465);e.exports=function(e,t,n,i){var a=!n;n||(n={});for(var c=-1,l=t.length;++c<l;){var s=t[c],u=i?i(n[s],e[s],s,n,e):void 0;void 0===u&&(u=e[s]),a?o(n,s,u):r(n,s,u)}return n}},21463:function(e,t,n){var r=n(5976),o=n(16612);e.exports=function(e){return r(function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,c=i>2?n[2]:void 0;for(a=e.length>3&&"function"==typeof a?(i--,a):void 0,c&&o(n[0],n[1],c)&&(a=i<3?void 0:a,i=1),t=Object(t);++r<i;){var l=n[r];l&&e(t,l,r,a)}return t})}},85924:function(e,t,n){var r=n(5569)(Object.getPrototypeOf,Object);e.exports=r},38517:function(e,t,n){var r=n(3118),o=n(85924),i=n(25726);e.exports=function(e){return"function"!=typeof e.constructor||i(e)?{}:r(o(e))}},33498:function(e){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},36390:function(e){e.exports=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}},29246:function(e,t,n){var r=n(98612),o=n(37005);e.exports=function(e){return o(e)&&r(e)}},68630:function(e,t,n){var r=n(44239),o=n(85924),i=n(37005),a=Object.prototype,c=Function.prototype.toString,l=a.hasOwnProperty,s=c.call(Object);e.exports=function(e){if(!i(e)||"[object Object]"!=r(e))return!1;var t=o(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==s}},81704:function(e,t,n){var r=n(14636),o=n(10313),i=n(98612);e.exports=function(e){return i(e)?r(e,!0):o(e)}},10928:function(e){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},82492:function(e,t,n){var r=n(42980),o=n(21463)(function(e,t,n){r(e,t,n)});e.exports=o},59881:function(e,t,n){var r=n(98363),o=n(81704);e.exports=function(e){return r(e,o(e))}},42554:function(){},67502:function(){},8719:function(){},71988:function(){},30178:function(){},99125:function(){},26154:function(){},69589:function(){},4676:function(){},97582:function(e,t,n){"use strict";n.d(t,{Q_:function(){return i},YH:function(){return a},_T:function(){return o},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function i(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function a(e,t,n,r,o){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!o)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}"function"==typeof SuppressedError&&SuppressedError}}]);