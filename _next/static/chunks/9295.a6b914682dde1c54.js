(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9295],{43671:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(67294),i=n(32782);let o={"aria-hidden":!0};function u(e){return"object"==typeof e}function s(e){return"string"==typeof e}n(4399);let c=(0,i.Ge)("icon"),a=r.forwardRef(({data:e,width:t,height:n,size:i,className:l,fill:f="currentColor",stroke:d="none",qa:p},h)=>{let b,v,m;if(i&&(b=i,v=i),t&&(b=t),n&&(v=n),u(e))({viewBox:m}=e);else if(s(e))m=function(e){let t=e.match(/viewBox=(["']?)([\d\s,-]+)\1/);return t?t[2]:void 0}(e);else if(("object"==typeof e||"function"==typeof e)&&"defaultProps"in e)({viewBox:m}=e.defaultProps);else if("function"==typeof e&&(!e.prototype||!e.prototype.render)){let t=e({});t&&({viewBox:m}=t.props)}if(m&&(!b||!v)){let e=m.split(/\s+|\s*,\s*/);b||(b=e[2]),v||(v=e[3])}let g=Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:b,height:v,className:c(null,l),fill:f,stroke:d,"data-qa":p},o);if(s(e)){let t=e.replace(/<svg[^>]*>/,e=>e.replace(/(width|height)=(["']?)\d+\2/g,"").replace(/(\s){2,}\b/g,"$1").replace(/(\s)+>/g,">"));return r.createElement("svg",Object.assign({},g,{ref:h,dangerouslySetInnerHTML:{__html:t}}))}if(u(e)){let t=a.prefix+(e.url||`#${e.id}`);return r.createElement("svg",Object.assign({},g,{viewBox:m,ref:h}),r.createElement("use",{href:t,xlinkHref:t}))}return e.defaultProps&&(e.defaultProps.width=e.defaultProps.height=void 0),r.createElement("svg",Object.assign({},g,{ref:h}),r.createElement(e,{width:void 0,height:void 0}))});a.displayName="Icon",a.prefix=""},20178:function(e,t,n){"use strict";n.d(t,{E:function(){return c}});var r=n(67294),i=n(62555),o=n(32782),u=n(59290);n(93709);let s=(0,o.Ge)("radio-button"),c=r.forwardRef(function(e,t){let{size:n="m",width:o,style:c,className:a,qa:l,children:f}=e,d=e.options;d||(d=r.Children.toArray(f).map(({props:e})=>({value:e.value,content:e.content||e.children,disabled:e.disabled,title:e.title})));let p=r.useRef(null),h=r.useRef(),b=r.useCallback(e=>{if(!e)return;let t=p.current;if(!t)return;let n=h.current;if(n&&n!==e){let r=e=>{t.style.left=`${e.offsetLeft}px`,t.style.width=`${e.offsetWidth}px`};r(n),t.hidden=!1,r(e)}h.current=e},[]),{containerProps:v,optionsProps:m}=(0,i.a)(Object.assign(Object.assign({},e),{options:d}));return r.createElement("div",Object.assign({},v,{ref:t,style:c,className:s({size:n,width:o},a),"data-qa":l}),r.createElement("div",{ref:p,className:s("plate"),onTransitionEnd:e=>{e.currentTarget.hidden=!0},hidden:!0}),m.map(e=>r.createElement(u.B,Object.assign({},e,{key:e.value,ref:e.checked?b:void 0}))))});c.Option=u.B},59290:function(e,t,n){"use strict";n.d(t,{B:function(){return c}});var r=n(67294),i=n(47684),o=n(32782),u=n(69110);let s=(0,o.Ge)("radio-button"),c=r.forwardRef(function(e,t){let{disabled:n=!1,content:o,children:c,title:a}=e,{checked:l,inputProps:f}=(0,i.x)(e),d=o||c,p=(0,u.yb)(d)||(0,u.Dc)(d);return r.createElement("label",{className:s("option",{disabled:n,checked:l}),ref:t,title:a},r.createElement("input",Object.assign({},f,{className:s("option-control")})),r.createElement("span",{className:s("option-outline")}),d&&r.createElement("span",{className:s("option-text",{icon:p})},d))})},32782:function(e,t,n){"use strict";n.d(t,{A7:function(){return i},Ge:function(){return o},Ui:function(){return u}});var r=n(81504);let i="g-";(0,r.withNaming)({e:"__",m:"_"});let o=(0,r.withNaming)({n:i,e:"__",m:"_"});function u(e){return e.split(/\s(.*)/)[1]}},69110:function(e,t,n){"use strict";n.d(t,{Dc:function(){return c},xA:function(){return s},yb:function(){return a}});var r=n(43671),i=n(32782),o=n(96639);let u=1;function s(){return`${i.A7}uniq-${u++}`}let c=(0,o.s)("svg"),a=(0,o.s)(r.J)},42087:function(e,t,n){"use strict";n.d(t,{P:function(){return u},g:function(){return o}});var r=n(97582),i=n(32782);class o{constructor(e){this.subscriptions=[],this.componentPrefix=e}subscribe(e){this.subscriptions.push(e)}unsubscribe(e){let t=this.subscriptions.indexOf(e);t>-1&&this.subscriptions.splice(t,1)}publish(e){var{componentId:t}=e,n=(0,r._T)(e,["componentId"]);this.subscriptions.forEach(e=>e(Object.assign(Object.assign({},n),{componentId:this.componentPrefix?`${this.componentPrefix}${t}`:t})))}withEventPublisher(e,t){return n=>{this.publish(Object.assign(Object.assign({},n),{componentId:e,qa:t}))}}}let u=new o(i.A7)},47209:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});let r=new Set(["id"]),i=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),o=/^(data-.*)$/;function u(e,t={}){let{labelable:n,propNames:u}=t,s={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r.has(t)||n&&i.has(t)||(null==u?void 0:u.has(t))||o.test(t))&&(s[t]=e[t]);return s}},96639:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(67294);function i(e){return function(t){if(!r.isValidElement(t))return!1;let{type:n}=t;if(n===e)return!0;if("string"==typeof e||"string"==typeof n)return!1;let i=n.displayName;return!!(i&&i===e.displayName)}}},38813:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var r=n(67294);function i({initialValue:e,onReset:t}){let[n,i]=r.useState(null),o=r.useRef(e);return r.useEffect(()=>{if(!n)return;let e=()=>{t(o.current)};return n.addEventListener("reset",e),()=>{n.removeEventListener("reset",e)}},[n,t]),r.useCallback(e=>{var t;i(null!==(t=null==e?void 0:e.form)&&void 0!==t?t:null)},[])}},47684:function(e,t,n){"use strict";n.d(t,{x:function(){return a}});var r=n(67294),i=n(62227),o=n(59505),u=n(77322),s=n(42087),c=n(38813);function a({name:e,value:t,checked:n,defaultChecked:a,disabled:l,controlRef:f,controlProps:d,onUpdate:p,onChange:h,onFocus:b,onBlur:v,id:m}){let g=(0,i.u)(),y=r.useRef(null),[w,O]=(0,o.z)(n,null!=a&&a,p),E=(0,c.q)({initialValue:w,onReset:O}),j=(0,u.c)(f,y,E),x=Object.assign(Object.assign({},d),{name:e||g,value:t,id:m,onFocus:b,onBlur:v,disabled:l,type:"radio",onChange:e=>{O(e.target.checked),h&&h(e)},onChangeCapture:e=>{s.P.publish({componentId:"Radio",eventId:"click",domEvent:e})},checked:n,defaultChecked:a,"aria-checked":w,ref:j});return{checked:w,inputProps:x}}},62555:function(e,t,n){"use strict";n.d(t,{a:function(){return s}});var r=n(62227),i=n(59505),o=n(47209),u=n(38813);function s(e){var t,n;let{name:s,value:c,defaultValue:a,options:l=[],disabled:f,onUpdate:d,onChange:p,onFocus:h,onBlur:b}=e,v=(0,r.u)(),[m,g]=(0,i.z)(c,null!==(n=null!=a?a:null===(t=l[0])||void 0===t?void 0:t.value)&&void 0!==n?n:null,d),y=(0,u.q)({initialValue:m,onReset:g}),w=e=>{g(e.target.value),p&&p(e)};return{containerProps:Object.assign(Object.assign({},(0,o.z)(e,{labelable:!0})),{role:"radiogroup","aria-disabled":f}),optionsProps:l.map(e=>({name:s||v,value:e.value,content:e.content,title:e.title,checked:m===String(e.value),disabled:f||e.disabled,onChange:w,onFocus:h,onBlur:b,ref:y}))}}},59505:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(67294);function i(e,t,n){let[i,o]=r.useState(null!=e?e:t),u=r.useRef(void 0!==e),s=void 0!==e;r.useEffect(()=>{let e=u.current;e!==s&&console.error(`[useControlledState] A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),u.current=s},[s]);let c=s?e:i,a=r.useCallback((e,...t)=>{Object.is(c,e)||null==n||n(e,...t),s||(c=e,o(e))},[s,n,c]);return[c,a]}},52036:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{k:function(){return r}})},77322:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(67294),i=n(52036);function o(...e){return r.useMemo(()=>e.every(e=>null==e)?null:t=>{for(let n of e)(0,i.k)(n,t)},e)}},62227:function(e,t,n){"use strict";n.d(t,{u:function(){return u}});var r=n(67294),i=n(32782),o=n(69110);let u="function"==typeof r.useId?function(){return`${i.A7}${r.useId()}`}:function(){let e=r.useRef();return void 0===e.current&&(e.current=(0,o.xA)()),e.current}},39295:function(e,t,n){"use strict";n.r(t),n.d(t,{RadioButtonComponent:function(){return u}});var r=n(85893),i=n(20178);let o=[{value:"Value 1",content:"Value 1"},{value:"Value 2",content:"Value 2"},{value:"Value 3",content:"Value 3"}],u=e=>{let{size:t,width:n,disabled:u}=e;return(0,r.jsx)(i.E,{size:t,width:n,disabled:u,options:o})}},4399:function(){},93709:function(){},97582:function(e,t,n){"use strict";n.d(t,{Q_:function(){return o},YH:function(){return u},_T:function(){return i},pi:function(){return r}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function o(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function u(e,t,n,r,i){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}"function"==typeof SuppressedError&&SuppressedError}}]);