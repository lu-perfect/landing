(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4139],{3725:function(e,t,a){"use strict";a.d(t,{q:function(){return f}});var l=a(67294),r=a(32782),n=a(43671);let s={xs:14,s:16,m:16,l:20,xl:24},i=({icon:e,color:t,size:a,className:r})=>{let i=l.useMemo(()=>({color:t}),[t]);return l.createElement("div",{style:i,className:r},l.createElement(n.J,{data:e,size:s[a]}))};var c=a(37763);let o=({imgUrl:e,fallbackImgUrl:t,sizes:a,srcSet:r,alt:n,loading:s,size:i,className:o})=>{let[u,m]=l.useState(!1),d=l.useCallback(()=>{m(!0)},[]);return l.useEffect(()=>{m(!1)},[e]),l.createElement("img",{className:o,loading:s,width:c.D[i],height:c.D[i],src:t&&u?t:e,sizes:a,srcSet:r,alt:n,onError:d})};var u=a(89495);let m=({text:e,color:t,className:a})=>{let r=l.useMemo(()=>({color:t}),[t]),n=l.useMemo(()=>(0,u._)(e),[e]);return l.createElement("div",{style:r,className:a},n)};a(76227);let d=(0,r.Ge)("avatar"),f=l.forwardRef((e,t)=>{let{size:a=c.e,theme:r="normal",view:n="filled",backgroundColor:s,borderColor:u,title:f,"aria-label":p,"aria-labelledby":g,className:b,style:h,qa:E}=e,v=l.useMemo(()=>Object.assign({backgroundColor:s,color:u},h),[s,u,h]);return l.createElement("div",{className:d({size:a,theme:r,view:n,"with-border":!!u},b),title:f,role:"img","aria-label":p,"aria-labelledby":g,style:v,"data-qa":E,ref:t},"imgUrl"in e&&e.imgUrl?l.createElement(o,{className:d("image"),imgUrl:e.imgUrl,fallbackImgUrl:e.fallbackImgUrl,sizes:e.sizes,srcSet:e.srcSet,alt:e.alt||f,loading:e.loading,size:a}):"icon"in e&&e.icon?l.createElement(i,{className:d("icon"),icon:e.icon,color:e.color,size:a}):"text"in e&&e.text?l.createElement(m,{className:d("text"),text:e.text,color:e.color,size:a}):null)});f.displayName="Avatar"},89495:function(e,t,a){"use strict";a.d(t,{_:function(){return l}});let l=e=>{let t=e.split(" ");return(t.length>1?[t[0][0],t[1][0]].filter(Boolean).join(""):e.slice(0,2)).toUpperCase()}},37763:function(e,t,a){"use strict";a.d(t,{D:function(){return l},e:function(){return r}});let l={xs:24,s:28,m:32,l:42,xl:50},r="m"},43671:function(e,t,a){"use strict";a.d(t,{J:function(){return o}});var l=a(67294),r=a(32782);let n={"aria-hidden":!0};function s(e){return"object"==typeof e}function i(e){return"string"==typeof e}a(4399);let c=(0,r.Ge)("icon"),o=l.forwardRef(({data:e,width:t,height:a,size:r,className:u,fill:m="currentColor",stroke:d="none",qa:f},p)=>{let g,b,h;if(r&&(g=r,b=r),t&&(g=t),a&&(b=a),s(e))({viewBox:h}=e);else if(i(e))h=function(e){let t=e.match(/viewBox=(["']?)([\d\s,-]+)\1/);return t?t[2]:void 0}(e);else if("object"==typeof e&&"defaultProps"in e)({viewBox:h}=e.defaultProps);else if("function"==typeof e&&(!e.prototype||!e.prototype.render)){let t=e({});t&&({viewBox:h}=t.props)}if(h&&(!g||!b)){let e=h.split(/\s+|\s*,\s*/);g||(g=e[2]),b||(b=e[3])}let E=Object.assign({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:g,height:b,className:c(null,u),fill:m,stroke:d,"data-qa":f},n);if(i(e)){let t=e.replace(/<svg[^>]*>/,e=>e.replace(/(width|height)=(["']?)\d+\2/g,"").replace(/(\s){2,}\b/g,"$1").replace(/(\s)+>/g,">"));return l.createElement("svg",Object.assign({},E,{ref:p,dangerouslySetInnerHTML:{__html:t}}))}if(s(e)){let t=o.prefix+(e.url||`#${e.id}`);return l.createElement("svg",Object.assign({},E,{viewBox:h,ref:p}),l.createElement("use",{href:t,xlinkHref:t}))}return e.defaultProps&&(e.defaultProps.width=e.defaultProps.height=void 0),l.createElement("svg",Object.assign({},E,{ref:p}),l.createElement(e,{width:void 0,height:void 0}))});o.displayName="Icon",o.prefix=""},62551:function(e,t,a){"use strict";a.d(t,{n:function(){return c}});var l=a(67294),r=a(3725),n=a(32782);a(64019);let s=(0,n.Ge)("user"),i={NAME:"user-name",DESCRIPTION:"user-description"},c=l.forwardRef(({avatar:e,name:t,description:a,size:n,"aria-label":c,"aria-labelledby":o,className:u,style:m,qa:d},f)=>{let p=!!("xs"!==n&&a);return l.createElement("div",{className:s({size:n},u),"aria-label":c,"aria-labelledby":o,style:m,"data-qa":d,ref:f},e?l.createElement("div",{className:s("avatar")},l.isValidElement(e)?e:l.createElement(r.q,Object.assign({},e,{size:n}))):null,t||p?l.createElement("div",{className:s("info")},t?l.createElement("span",{className:s("name"),"data-qa":i.NAME},t):null,p?l.createElement("span",{className:s("description"),"data-qa":i.DESCRIPTION},a):null):null)});c.displayName="User"},94139:function(e,t,a){"use strict";a.r(t),a.d(t,{UserSandbox:function(){return s}});var l=a(85893),r=a(62551);a(67294);let n={text:"Charles Darwin",theme:"brand"},s=e=>{let{name:t,description:a,size:s}=e;return(0,l.jsx)(r.n,{avatar:n,name:t,description:a,size:s})}},76227:function(){},4399:function(){},64019:function(){}}]);