(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6687],{20087:function(e,t,r){"use strict";var l=r(67294);t.Z=e=>l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},e),l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081",clipRule:"evenodd"}))},46209:function(e,t,r){"use strict";r.d(t,{X:function(){return u}});var l=r(67294),n=r(65395),s=r(34925),o=r(76657);function a(e){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 17",width:"16",height:"16",fill:"currentColor"},e),l.createElement("path",{d:"M4 7h9v3H4z"}))}function i(e){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 10",width:"16",height:"16",fill:"currentColor"},e),l.createElement("path",{d:"M.49 5.385l1.644-1.644 4.385 4.385L4.874 9.77.49 5.385zm4.384 1.096L10.356 1 12 2.644 6.519 8.126 4.874 6.48v.001z"}))}r(22118);let c=(0,o.Ge)("checkbox"),u=l.forwardRef(function(e,t){let{size:r="m",indeterminate:o,disabled:u=!1,content:h,children:d,title:m,style:f,className:p,qa:v}=e,{checked:y,inputProps:b}=(0,n.O)(e),R=l.createElement("span",{className:c("indicator")},l.createElement("span",{className:c("icon"),"aria-hidden":!0},o?l.createElement(a,{className:c("icon-svg",{type:"dash"})}):l.createElement(i,{className:c("icon-svg",{type:"tick"})})),l.createElement("input",Object.assign({},b,{className:c("control")})),l.createElement("span",{className:c("outline")}));return l.createElement(s.J,{ref:t,title:m,style:f,size:r,disabled:u,className:c({size:r,disabled:u,indeterminate:o,checked:y},p),qa:v,control:R},h||d)})},5432:function(e,t,r){"use strict";r.d(t,{E:function(){return h}});var l=r(67294),n=r(21485),s=r(40164),o=r(34925),a=r(76657);r(1791);let i=(0,a.Ge)("radio"),c=l.forwardRef(function(e,t){let{size:r="m",disabled:n=!1,content:a,children:c,title:u,style:h,className:d,qa:m}=e,{checked:f,inputProps:p}=(0,s.x)(e),v=l.createElement("span",{className:i("indicator")},l.createElement("span",{className:i("disc")}),l.createElement("input",Object.assign({},p,{className:i("control")})),l.createElement("span",{className:i("outline")}));return l.createElement(o.J,{ref:t,title:u,style:h,size:r,disabled:n,className:i({size:r,disabled:n,checked:f},d),qa:m,control:v},a||c)});r(56323);let u=(0,a.Ge)("radio-group"),h=l.forwardRef(function(e,t){let{size:r="m",direction:s="horizontal",style:o,className:a,optionClassName:i,qa:h,children:d}=e,m=e.options;m||(m=l.Children.toArray(d).map(({props:e})=>({value:e.value,content:e.content||e.children,disabled:e.disabled})));let{containerProps:f,optionsProps:p}=(0,n.a)(Object.assign(Object.assign({},e),{options:m}));return l.createElement("div",Object.assign({},f,{ref:t,style:o,className:u({size:r,direction:s},a),"data-qa":h}),p.map(e=>l.createElement(c,Object.assign({},e,{key:e.value,className:u("option",i),size:r}))))});h.Option=c},68283:function(e,t,r){"use strict";r.d(t,{i:function(){return v}});var l=r(67294),n=r(27361),s=r.n(n),o=r(18721),a=r.n(o),i=r(81763),c=r.n(i),u=r(76657),h=r(53237),d=r(19186);function m(e){(0,h.O)(`[Table] Physical values (left, right) of "${e}" property are deprecated. Use logical values (start, end) instead.`)}function f(e,t){return"left"===e?(m(t),"start"):"right"===e?(m(t),"end"):e}r(95221);let p=(0,u.Ge)("table");class v extends l.Component{constructor(){super(...arguments),this.state={activeScrollElement:"scrollContainer",columnsStyles:Array.from(this.props.columns,()=>({})),columnHeaderRefs:Array.from(this.props.columns,()=>l.createRef())},this.tableRef=l.createRef(),this.scrollContainerRef=l.createRef(),this.horizontalScrollBarRef=l.createRef(),this.horizontalScrollBarInnerRef=l.createRef(),this.renderRow=(e,t)=>{let{columns:r,isRowDisabled:n,onRowClick:s,onRowMouseEnter:o,onRowMouseLeave:a,onRowMouseDown:i,getRowClassNames:c,verticalAlign:u,edgePadding:h,wordWrap:d,getRowDescriptor:m}=this.props,{columnsStyles:y}=this.state,b=null==m?void 0:m(e,t),R=(null==b?void 0:b.disabled)||(null==n?void 0:n(e,t))||!1,g=(null==b?void 0:b.classNames)||(null==c?void 0:c(e,t))||[];return l.createElement("tr",{key:v.getRowId(this.props,e,t),onClick:!R&&s?s.bind(null,e,t):void 0,onMouseEnter:!R&&o?o.bind(null,e,t):void 0,onMouseLeave:!R&&a?a.bind(null,e,t):void 0,onMouseDown:!R&&i?i.bind(null,e,t):void 0,className:p("row",{disabled:R,interactive:!!(!R&&s),"vertical-align":u},g.join(" "))},r.map((r,n)=>{let{id:s,align:o,primary:a,className:i,sticky:c}=r,u=v.getBodyCellContent(r,e,t),m=f(o,"column.align"),b=f(c,"column.sticky");return l.createElement("td",{key:s,style:y[n],className:p("cell",{align:m,primary:a,sticky:b,"edge-padding":h,"word-wrap":d},i)},u)}))},this.handleScrollContainerMouseenter=()=>{this.setState({activeScrollElement:"scrollContainer"})},this.handleScrollContainerScroll=()=>{"scrollContainer"===this.state.activeScrollElement&&this.horizontalScrollBarRef.current&&this.scrollContainerRef.current&&(this.horizontalScrollBarRef.current.scrollLeft=this.scrollContainerRef.current.scrollLeft)},this.handleHorizontalScrollBarMouseenter=()=>{this.setState({activeScrollElement:"scrollBar"})},this.handleHorizontalScrollBarScroll=()=>{"scrollBar"===this.state.activeScrollElement&&this.horizontalScrollBarRef.current&&this.scrollContainerRef.current&&(this.scrollContainerRef.current.scrollLeft=this.horizontalScrollBarRef.current.scrollLeft)}}static getRowId(e,t,r){let{data:l,getRowId:n,getRowDescriptor:s}=e,o=null!=r?r:l.indexOf(t),a=null==s?void 0:s(t,o);return(null==a?void 0:a.id)!==void 0?a.id:"function"==typeof n?n(t,o):n&&n in t?String(t[n]):String(o)}static getHeadCellContent(e){let{id:t,name:r}=e;return"function"==typeof r?r():"string"==typeof r?r:t}static getBodyCellContent(e,t,r){let l,n;let{id:o,template:i,placeholder:c}=e;return(l="function"==typeof c?c(t,r):null!=c?c:"—","function"==typeof i?n=i(t,r):"string"==typeof i?n=s()(t,i):a()(t,o)&&(n=s()(t,o)),[void 0,null,""].includes(n)&&l)?l:n}static getDerivedStateFromProps(e,t){return e.columns.length===t.columnHeaderRefs.length?null:{columnHeaderRefs:Array.from(e.columns,()=>l.createRef())}}componentDidMount(){this.props.stickyHorizontalScroll&&(this.tableResizeObserver=new ResizeObserver(e=>{var t;let{contentRect:r}=e[0];null===(t=this.horizontalScrollBarInnerRef.current)||void 0===t||t.style.setProperty("width",`${r.width}px`)}),this.tableRef.current&&this.tableResizeObserver.observe(this.tableRef.current),this.scrollContainerRef.current&&(this.scrollContainerRef.current.addEventListener("scroll",this.handleScrollContainerScroll),this.scrollContainerRef.current.addEventListener("mouseenter",this.handleScrollContainerMouseenter)),this.horizontalScrollBarRef.current&&(this.horizontalScrollBarRef.current.addEventListener("scroll",this.handleHorizontalScrollBarScroll),this.horizontalScrollBarRef.current.addEventListener("mouseenter",this.handleHorizontalScrollBarMouseenter))),this.columnsResizeObserver=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{Array.isArray(e)&&e.length&&this.updateColumnStyles()})}),this.tableRef.current&&this.columnsResizeObserver.observe(this.tableRef.current),this.updateColumnStyles()}componentDidUpdate(e){this.props.columns!==e.columns&&this.updateColumnStyles()}componentWillUnmount(){this.props.stickyHorizontalScroll&&(this.tableResizeObserver&&this.tableResizeObserver.disconnect(),this.scrollContainerRef.current&&(this.scrollContainerRef.current.removeEventListener("scroll",this.handleScrollContainerScroll),this.scrollContainerRef.current.removeEventListener("mouseenter",this.handleScrollContainerMouseenter)),this.horizontalScrollBarRef.current&&(this.horizontalScrollBarRef.current.removeEventListener("scroll",this.handleHorizontalScrollBarScroll),this.horizontalScrollBarRef.current.removeEventListener("mouseenter",this.handleHorizontalScrollBarMouseenter))),this.columnsResizeObserver&&this.columnsResizeObserver.disconnect()}render(){let{columns:e,stickyHorizontalScroll:t,className:r,qa:n}=this.props,s=e.some(({primary:e})=>e);return l.createElement("div",{className:p({"with-primary":s,"with-sticky-scroll":t},r),"data-qa":n},t?l.createElement(l.Fragment,null,l.createElement("div",{ref:this.scrollContainerRef,className:p("scroll-container")},this.renderTable()),this.renderHorizontalScrollBar()):this.renderTable())}renderHead(){let{columns:e,edgePadding:t,wordWrap:r}=this.props,{columnsStyles:n}=this.state;return l.createElement("thead",{className:p("head")},l.createElement("tr",{className:p("row")},e.map((e,s)=>{let{id:o,align:a,primary:i,sticky:c,className:u}=e,h=f(a,"column.align"),d=f(c,"column.sticky"),m=v.getHeadCellContent(e);return l.createElement("th",{key:o,ref:this.state.columnHeaderRefs[s],style:n[s],className:p("cell",{align:h,primary:i,sticky:d,"edge-padding":t,"word-wrap":r},u)},m)})))}renderBody(){let{data:e}=this.props;return l.createElement("tbody",{className:p("body")},e.length>0?e.map(this.renderRow):this.renderEmptyRow())}renderTable(){return l.createElement("table",{ref:this.tableRef,className:p("table")},this.renderHead(),this.renderBody())}renderEmptyRow(){let{columns:e,emptyMessage:t}=this.props;return l.createElement("tr",{className:p("row",{empty:!0})},l.createElement("td",{className:p("cell"),colSpan:e.length},t||(0,d.Z)("label_empty")))}renderHorizontalScrollBar(){let{stickyHorizontalScroll:e,stickyHorizontalScrollBreakpoint:t=0}=this.props;return l.createElement("div",{ref:this.horizontalScrollBarRef,className:p("horizontal-scroll-bar",{"sticky-horizontal-scroll":e}),style:{bottom:`${t}px`},"data-qa":"sticky-horizontal-scroll-breakpoint-qa"},l.createElement("div",{ref:this.horizontalScrollBarInnerRef,className:p("horizontal-scroll-bar-inner")}))}updateColumnStyles(){this.setState(e=>{let t=e.columnHeaderRefs.map(e=>null===e.current?void 0:e.current.getBoundingClientRect().width);return{columnsStyles:this.props.columns.map((e,r)=>this.getColumnStyles(r,t))}})}getColumnStyles(e,t){let{columns:r}=this.props,l=r[e],n={};if("string"==typeof l.width)return{maxWidth:0,width:l.width};if(void 0!==l.width&&(n.width=l.width),!l.sticky)return n;let s="left"===l.sticky||"start"===l.sticky?t.slice(0,e):t.slice(e+1);return n["left"===l.sticky||"start"===l.sticky?"insetInlineStart":"insetInlineEnd"]=s.reduce((e,t)=>c()(t)?e+t:e,0),n}}v.defaultProps={edgePadding:!0}},19186:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var l=r(53263),n=JSON.parse('{"label_empty":"No data","label-actions":"Actions","label-row-select":"Select"}'),s=JSON.parse('{"label_empty":"Нет данных","label-actions":"Действия","label-row-select":"Выбрать"}'),o=(0,l.e)({en:n,ru:s},"Table")},41609:function(e,t,r){var l=r(280),n=r(64160),s=r(35694),o=r(1469),a=r(98612),i=r(44144),c=r(25726),u=r(36719),h=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(a(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||u(e)||s(e)))return!e.length;var t=n(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(c(e))return!l(e).length;for(var r in e)if(h.call(e,r))return!1;return!0}},22118:function(){},1791:function(){},56323:function(){},95221:function(){}}]);