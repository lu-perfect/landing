(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4139],{3725:function(e,t,r){"use strict";r.d(t,{q:function(){return m}});var a=r(67294),l=r(32782),n=r(43671);let i={xs:14,s:16,m:16,l:20,xl:24},s=({icon:e,color:t,size:r,className:l})=>a.createElement("div",{style:{color:t},className:l},a.createElement(n.J,{data:e,size:i[r]}));var c=r(37763);let o=({imgUrl:e,fallbackImgUrl:t,sizes:r,srcSet:l,alt:n,loading:i,size:s,className:o})=>{let[u,f]=a.useState(!1),d=a.useCallback(()=>{f(!0)},[]);return a.useEffect(()=>{f(!1)},[e]),a.createElement("img",{className:o,loading:i,width:c.D[s],height:c.D[s],src:t&&u?t:e,sizes:r,srcSet:l,alt:n,onError:d})};var u=r(89495);let f=({text:e,color:t,className:r})=>{let l=(0,u._)(e);return a.createElement("div",{style:{color:t},className:r},l)};r(76227);let d=(0,l.Ge)("avatar"),m=a.forwardRef((e,t)=>{let{size:r=c.e,theme:l="normal",view:n="filled",backgroundColor:i,borderColor:u,title:m,"aria-label":g,"aria-labelledby":p,className:h,style:b,qa:v}=e,E=Object.assign({backgroundColor:i,color:u},b);return a.createElement("div",{className:d({size:r,theme:l,view:n,"with-border":!!u},h),title:m,role:"img","aria-label":g,"aria-labelledby":p,style:E,"data-qa":v,ref:t},"imgUrl"in e&&e.imgUrl?a.createElement(o,{className:d("image"),imgUrl:e.imgUrl,fallbackImgUrl:e.fallbackImgUrl,sizes:e.sizes,srcSet:e.srcSet,alt:e.alt||m,loading:e.loading,size:r}):"icon"in e&&e.icon?a.createElement(s,{className:d("icon"),icon:e.icon,color:e.color,size:r}):"text"in e&&e.text?a.createElement(f,{className:d("text"),text:e.text,color:e.color,size:r}):null)});m.displayName="Avatar"},89495:function(e,t,r){"use strict";r.d(t,{_:function(){return a}});let a=e=>{let t=e.split(/\s+/);return(t.length>1?[t[0][0],t[1][0]].filter(Boolean).join(""):e.slice(0,2)).toUpperCase()}},37763:function(e,t,r){"use strict";r.d(t,{D:function(){return a},e:function(){return l}});let a={xs:24,s:28,m:32,l:42,xl:50},l="m"},43671:function(e,t,r){"use strict";r.d(t,{J:function(){return o}});var a=r(67294),l=r(32782);let n={"aria-hidden":!0};function i(e){return"object"==typeof e}function s(e){return"string"==typeof e}r(4399);let c=(0,l.Ge)("icon"),o=a.forwardRef(({data:e,width:t,height:r,size:l,className:u,fill:f="currentColor",stroke:d="none",qa:m},g)=>{let p,h,b;if(l&&(p=l,h=l),t&&(p=t),r&&(h=r),i(e))({viewBox:b}=e);else if(s(e))b=function(e){let t=e.match(/viewBox=(["']?)([\d\s,-]+)\1/);return t?t[2]:void 0}(e);else if("object"==typeof e&&"defaultProps"in e)({viewBox:b}=e.defaultProps);else if("function"==typeof e&&(!e.prototype||!e.prototype.render)){let t=e({});t&&({viewBox:b}=t.props)}if(b&&(!p||!h)){let e=b.split(/\s+|\s*,\s*/);p||(p=e[2]),h||(h=e[3])}let v=Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:p,height:h,className:c(null,u),fill:f,stroke:d,"data-qa":m},n);if(s(e)){let t=e.replace(/<svg[^>]*>/,e=>e.replace(/(width|height)=(["']?)\d+\2/g,"").replace(/(\s){2,}\b/g,"$1").replace(/(\s)+>/g,">"));return a.createElement("svg",Object.assign({},v,{ref:g,dangerouslySetInnerHTML:{__html:t}}))}if(i(e)){let t=o.prefix+(e.url||`#${e.id}`);return a.createElement("svg",Object.assign({},v,{viewBox:b,ref:g}),a.createElement("use",{href:t,xlinkHref:t}))}return e.defaultProps&&(e.defaultProps.width=e.defaultProps.height=void 0),a.createElement("svg",Object.assign({},v,{ref:g}),a.createElement(e,{width:void 0,height:void 0}))});o.displayName="Icon",o.prefix=""},62551:function(e,t,r){"use strict";r.d(t,{n:function(){return c}});var a=r(67294),l=r(3725),n=r(32782);r(64019);let i=(0,n.Ge)("user"),s={NAME:"user-name",DESCRIPTION:"user-description"},c=a.forwardRef(({avatar:e,name:t,description:r,size:n,"aria-label":c,"aria-labelledby":o,className:u,style:f,qa:d},m)=>{let g=!!("xs"!==n&&r);return a.createElement("div",{className:i({size:n},u),"aria-label":c,"aria-labelledby":o,style:f,"data-qa":d,ref:m},e?a.createElement("div",{className:i("avatar")},a.isValidElement(e)?e:a.createElement(l.q,Object.assign({},e,{size:n}))):null,t||g?a.createElement("div",{className:i("info")},t?a.createElement("span",{className:i("name"),"data-qa":s.NAME},t):null,g?a.createElement("span",{className:i("description"),"data-qa":s.DESCRIPTION},r):null):null)});c.displayName="User"},32782:function(e,t,r){"use strict";r.d(t,{A7:function(){return l},Ge:function(){return n},Ui:function(){return i}});var a=r(81504);let l="g-";(0,a.withNaming)({e:"__",m:"_"});let n=(0,a.withNaming)({n:l,e:"__",m:"_"});function i(e){return e.split(/\s(.*)/)[1]}},94139:function(e,t,r){"use strict";r.r(t),r.d(t,{UserSandbox:function(){return i}});var a=r(85893),l=r(62551);r(67294);let n={text:"Charles Darwin",theme:"brand"},i=e=>{let{name:t,description:r,size:i}=e;return(0,a.jsx)(l.n,{avatar:n,name:t,description:r,size:i})}},76227:function(){},4399:function(){},64019:function(){}}]);