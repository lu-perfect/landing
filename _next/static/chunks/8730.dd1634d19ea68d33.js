(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8730],{97387:function(e,t,n){"use strict";n.d(t,{z:function(){return m}});var i=n(67294),s=n(32782),o=n(69110),r=n(42087),h=n(96639),a=n(9042);let l=(0,s.Ge)("button");function c(){(0,a.O)('[Button.Icon] Physical values (left, right) of "side" property are deprecated. Use logical values (start, end) instead.')}let u=({side:e,className:t,children:n})=>{let s=e;return"left"===s&&(c(),s="start"),"right"===s&&(c(),s="end"),i.createElement("span",{className:l("icon",{side:s},t)},i.createElement("span",{className:l("icon-inner")},n))};u.displayName="Button.Icon",n(82801);let d=(0,s.Ge)("button"),p=i.forwardRef(function({view:e="normal",size:t="m",pin:n="round-round",selected:s,disabled:o=!1,loading:h=!1,width:a,title:l,tabIndex:c,type:u="button",component:p,href:m,target:f,rel:g,extraProps:y,onClick:w,onMouseEnter:S,onMouseLeave:T,onFocus:R,onBlur:C,children:E,id:b,style:x,className:H,qa:O},k){let N={title:l,tabIndex:c,onClick:w,onClickCapture:i.useCallback(t=>{r.P.publish({componentId:"Button",eventId:"click",domEvent:t,meta:{content:t.currentTarget.textContent,view:e}})},[e]),onMouseEnter:S,onMouseLeave:T,onFocus:R,onBlur:C,id:b,style:x,className:d({view:e,size:t,pin:n,selected:s,disabled:o||h,loading:h,width:a},H),"data-qa":O};return"string"==typeof m||p?i.createElement(p||"a",Object.assign(Object.assign(Object.assign(Object.assign({},y),N),p?{}:{href:m,target:f,rel:"_blank"!==f||g?g:"noopener noreferrer"}),{ref:k,"aria-disabled":o||h}),v(E)):i.createElement("button",Object.assign({},y,N,{ref:k,type:u,disabled:o||h,"aria-pressed":s}),v(E))});p.displayName="Button";let m=Object.assign(p,{Icon:u}),f=(0,h.s)(u);function v(e){let t=i.Children.toArray(e);if(1===t.length){let e=t[0];return f(e)?e:(0,o.y)(e)?i.createElement(m.Icon,{key:"icon"},e):i.createElement("span",{key:"text",className:d("text")},e)}{let e,n,s;let r=[];for(let s of t){let t=(0,o.y)(s),h=f(s);if(t||h){if(e||0!==r.length)n||0===r.length||(n=t?i.createElement(m.Icon,{key:"icon-end",side:"end"},s):i.cloneElement(s,{side:"end"}));else{let n="start";e=t?i.createElement(m.Icon,{key:"icon-start",side:n},s):i.cloneElement(s,{side:n})}}else r.push(s)}return r.length>0&&(s=i.createElement("span",{key:"text",className:d("text")},r)),[e,n,s]}}},87174:function(e,t,n){"use strict";n.d(t,{h:function(){return r}});var i=n(67294),s=n(73935),o=n(30860);function r({container:e,children:t,disablePortal:n}){let r=(0,o.X)(),h=null!=e?e:r;return n?i.createElement(i.Fragment,null,t):h?s.createPortal(t,h):null}},93298:function(e,t,n){"use strict";n.d(t,{y:function(){return f}});var i=n(67294),s=n(42361),o=n(87174),r=n(97582),h=n(81387),a=n(25957);let l=(0,n(32782).Ge)("sheet");class c{constructor(e,t){this.x=e,this.y=t,this.timeStamp=Date.now()}}class u{constructor(e=5){this.points=[],this.pointsLen=e,this.clear()}clear(){this.points=Array(this.pointsLen)}addMovement({x:e,y:t}){this.points.pop(),this.points.unshift(new c(e,t))}getYAcceleration(e=1){let t=this.points[0],n=this.points[e];return t&&n?(t.y-n.y)/Math.pow(t.timeStamp-n.timeStamp,2):0}}n(51031);let d=[];class p extends i.Component{constructor(){super(...arguments),this.veilRef=i.createRef(),this.sheetRef=i.createRef(),this.sheetTopRef=i.createRef(),this.sheetContentRef=i.createRef(),this.sheetInnerContentRef=i.createRef(),this.sheetTitleRef=i.createRef(),this.velocityTracker=new u,this.observer=null,this.state={startScrollTop:0,startY:0,deltaY:0,prevSheetHeight:0,swipeAreaTouched:!1,contentTouched:!1,veilTouched:!1,isAnimating:!1,inWindowResizeScope:!1},this.setStyles=({status:e,deltaHeight:t=0})=>{if(!this.sheetRef.current||!this.veilRef.current)return;let n=this.sheetHeight-t,i="showing"===e?`translate3d(0, -${n}px, 0)`:"translate3d(0, 0, 0)",s=0;"showing"===e&&(s=0===t?1:n/this.sheetHeight),this.veilRef.current.style.opacity=String(s),this.sheetRef.current.style.transform=i},this.show=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"showing"}),this.setHash()})},this.hide=()=>{this.setState({isAnimating:!0},()=>{this.setStyles({status:"hiding"}),this.removeHash()})},this.onSwipeAreaTouchStart=e=>{this.velocityTracker.clear(),this.setState({startY:e.nativeEvent.touches[0].clientY,swipeAreaTouched:!0})},this.onContentTouchStart=e=>{this.props.allowHideOnContentScroll&&!this.state.swipeAreaTouched&&(this.velocityTracker.clear(),this.setState({startY:e.nativeEvent.touches[0].clientY,startScrollTop:this.sheetScrollTop,contentTouched:!0}))},this.onSwipeAriaTouchMove=e=>{let t=e.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:e.nativeEvent.touches[0].clientX,y:e.nativeEvent.touches[0].clientY}),this.setState({deltaY:t}),t<=0||this.setStyles({status:"showing",deltaHeight:t})},this.onContentTouchMove=e=>{if(!this.props.allowHideOnContentScroll)return;let{startScrollTop:t,swipeAreaTouched:n}=this.state;if(n||this.sheetScrollTop>0||t>0&&t!==this.sheetScrollTop)return;let i=e.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:e.nativeEvent.touches[0].clientX,y:e.nativeEvent.touches[0].clientY}),this.setState({deltaY:i}),i<=0||this.setStyles({status:"showing",deltaHeight:i})},this.onTouchEndAction=e=>{let t=this.velocityTracker.getYAcceleration();this.sheetHeight<=e?this.props.hideSheet():e>50&&t<=.08&&t>=-.02||t>.08?this.hide():0!==e&&this.show()},this.onSwipeAriaTouchEnd=()=>{let{deltaY:e}=this.state;this.onTouchEndAction(e),this.setState({startY:0,deltaY:0,swipeAreaTouched:!1})},this.onContentTouchEnd=()=>{let{deltaY:e,swipeAreaTouched:t}=this.state;this.props.allowHideOnContentScroll&&!t&&(this.onTouchEndAction(e),this.setState({startY:0,deltaY:0,contentTouched:!1}))},this.onVeilClick=()=>{this.setState({veilTouched:!0}),this.hide()},this.onVeilTransitionEnd=()=>{this.setState({isAnimating:!1}),"0"===this.veilOpacity&&this.props.hideSheet()},this.onContentTransitionEnd=e=>{"height"===e.propertyName&&this.sheetContentRef.current&&(this.sheetContentRef.current.style.transition="none")},this.onResizeWindow=()=>{this.setState({inWindowResizeScope:!0}),this.onResize(),setTimeout(()=>this.setState({inWindowResizeScope:!1}),0)},this.onResize=()=>{if(!this.sheetRef.current||!this.sheetContentRef.current)return;let e=this.sheetTitleHeight+this.innerContentHeight+this.sheetTopHeight,t=.9*window.innerHeight,n=e>=t?t:e;this.sheetContentRef.current.style.transition=this.state.prevSheetHeight>e?"height 0s ease 0.3s":"none",this.sheetContentRef.current.style.height=`${n-this.sheetTopHeight}px`,this.sheetRef.current.style.transform=`translate3d(0, -${n}px, 0)`,this.setState({prevSheetHeight:e})}}componentDidMount(){this.addListeners(),this.show(),this.setInitialStyles(),this.setState({prevSheetHeight:this.sheetTitleHeight+this.innerContentHeight+this.sheetTopHeight})}componentDidUpdate(e){let{visible:t,location:n}=this.props;!e.visible&&t&&this.show(),(e.visible&&!t||this.shouldClose(e))&&this.hide(),e.location.pathname!==n.pathname&&(d=[])}componentWillUnmount(){this.removeListeners()}render(){let{content:e,contentClassName:t,swipeAreaClassName:n,hideTopBar:s,title:o}=this.props,{deltaY:r,swipeAreaTouched:h,contentTouched:a,veilTouched:c,isAnimating:u,inWindowResizeScope:d}=this.state,p={"with-transition":!r||c},m={"with-transition":!d&&p["with-transition"]};return i.createElement(i.Fragment,null,i.createElement("div",{ref:this.veilRef,className:l("veil",p),onClick:u?void 0:this.onVeilClick,onTransitionEnd:this.onVeilTransitionEnd}),i.createElement("div",{ref:this.sheetRef,className:l("sheet",m)},!s&&i.createElement("div",{ref:this.sheetTopRef,className:l("sheet-top")},i.createElement("div",{className:l("sheet-top-resizer")})),i.createElement("div",{className:l("sheet-swipe-area",n),onTouchStart:this.onSwipeAreaTouchStart,onTouchMove:this.onSwipeAriaTouchMove,onTouchEnd:this.onSwipeAriaTouchEnd}),i.createElement("div",{ref:this.sheetContentRef,className:l("sheet-content",{"without-scroll":r>0&&a||h},t),onTouchStart:this.onContentTouchStart,onTouchMove:this.onContentTouchMove,onTouchEnd:this.onContentTouchEnd,onTransitionEnd:this.onContentTransitionEnd},o&&i.createElement("div",{ref:this.sheetTitleRef,className:l("sheet-content-title")},o),i.createElement("div",{ref:this.sheetInnerContentRef},e))))}get veilOpacity(){var e;return(null===(e=this.veilRef.current)||void 0===e?void 0:e.style.opacity)||0}get sheetTopHeight(){var e;return(null===(e=this.sheetTopRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetHeight(){var e;return(null===(e=this.sheetRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get innerContentHeight(){var e;return(null===(e=this.sheetInnerContentRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetTitleHeight(){var e;return(null===(e=this.sheetTitleRef.current)||void 0===e?void 0:e.getBoundingClientRect().height)||0}get sheetScrollTop(){var e;return(null===(e=this.sheetContentRef.current)||void 0===e?void 0:e.scrollTop)||0}setInitialStyles(){if(this.sheetContentRef.current&&this.sheetInnerContentRef.current){let e=this.sheetHeight-this.sheetTopHeight;this.sheetContentRef.current.style.height=`${e}px`}}addListeners(){window.addEventListener("resize",this.onResizeWindow),this.sheetRef.current&&(this.observer=new MutationObserver(this.onResize),this.observer.observe(this.sheetRef.current,{subtree:!0,childList:!0}))}removeListeners(){window.removeEventListener("resize",this.onResizeWindow),this.observer&&this.observer.disconnect()}setHash(){let{id:e,platform:t,location:n,history:i}=this.props;if(t===h.t.BROWSER)return;let s=Object.assign(Object.assign({},n),{hash:e});switch(t){case h.t.IOS:n.hash&&d.push(n.hash),i.replace(s);break;case h.t.ANDROID:i.push(s)}}removeHash(){var e;let{id:t,platform:n,location:i,history:s}=this.props;if(n!==h.t.BROWSER&&i.hash===`#${t}`)switch(n){case h.t.IOS:s.replace(Object.assign(Object.assign({},i),{hash:null!==(e=d.pop())&&void 0!==e?e:""}));break;case h.t.ANDROID:s.goBack()}}shouldClose(e){let{id:t,platform:n,location:i,history:s}=this.props;return n!==h.t.BROWSER&&"POP"===s.action&&e.location.hash!==i.hash&&i.hash!==`#${t}`}}p.defaultProps={id:"sheet",allowHideOnContentScroll:!0};let m=(0,a.z)(function(e){let t=t=>{let{useHistory:n,useLocation:s}=t,o=(0,r._T)(t,["useHistory","useLocation"]);return i.createElement(e,Object.assign({},o,{history:n(),location:s()}))},n=e.displayName||e.name||"Component";return t.displayName=`withRouterWrapper(${n})`,t}(p)),f=({children:e,onClose:t,visible:n,id:r,title:h,className:a,contentClassName:c,swipeAreaClassName:u,allowHideOnContentScroll:d,hideTopBar:p,qa:f})=>{let[v,g]=i.useState(n),[y,w]=i.useState(n);return((0,s.y)({enabled:v}),!y&&n&&g(!0),n!==y&&w(n),v)?i.createElement(o.h,null,i.createElement("div",{"data-qa":f,className:l(null,a)},i.createElement(m,{id:r,content:e,contentClassName:c,swipeAreaClassName:u,title:h,visible:n,allowHideOnContentScroll:d,hideTopBar:p,hideSheet:()=>{t&&t(),g(!1)}}))):null}},42646:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var i=n(67294);let s={mobile:!1,platform:n(81387).t.BROWSER,useHistory:()=>({action:"",replace(){},push(){},goBack(){}}),useLocation:()=>({pathname:"",search:"",hash:""})},o=i.createContext(s)},81387:function(e,t,n){"use strict";n.d(t,{P:function(){return r},t:function(){return s}});var i,s,o=n(32782);(i=s||(s={})).IOS="ios",i.ANDROID="android",i.BROWSER="browser";let r=(0,o.Ge)("root")({mobile:!0}).split(/\s+/)[1]},25957:function(e,t,n){"use strict";n.d(t,{z:function(){return r}});var i=n(67294),s=n(73809),o=n(42646);function r(e){var t;let n=(0,s.i)(e);return(t=class extends i.Component{render(){return i.createElement(e,Object.assign({},this.props,{mobile:this.context.mobile,platform:this.context.platform,useHistory:this.context.useHistory,useLocation:this.context.useLocation}))}}).displayName=`withMobile(${n})`,t.contextType=o.z,t}},73809:function(e,t,n){"use strict";function i(e){return e.displayName||e.name||"Component"}n.d(t,{i:function(){return i}})},9042:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});let i=new Map;function s(e){!e||i.has(e)||(console.error(e),i.set(e,!0))}},42361:function(e,t,n){"use strict";let i;n.d(t,{y:function(){return r}});var s=n(67294);let o=0;function r({enabled:e}){s.useLayoutEffect(()=>{if(e)return 1==++o&&function(){let e=window.innerWidth-document.documentElement.clientWidth,t=window.innerHeight-document.documentElement.clientHeight,n=function(){let e=window.getComputedStyle(document.body);return{top:Number.parseFloat(e.paddingTop),right:Number.parseFloat(e.paddingRight),bottom:Number.parseFloat(e.paddingBottom),left:Number.parseFloat(e.paddingLeft)}}();i=document.body.style.cssText,document.body.style.overflow="hidden",e&&(document.body.style.paddingRight=`${n.right+e}px`),t&&(document.body.style.paddingBottom=`${n.bottom+t}px`)}(),()=>{0==--o&&(i?document.body.style.cssText=i:document.body.removeAttribute("style"))}},[e])}},19442:function(e,t,n){"use strict";n.d(t,{X:function(){return o},w:function(){return s}});var i=n(67294);let s=i.createContext({current:null});function o({container:e,children:t}){return i.createElement(s.Provider,{value:e},t)}s.displayName="PortalContext"},30860:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});var i=n(67294),s=n(19442);function o(){var e;let t=i.useContext(s.w),n=null;return"object"==typeof window&&(n=window.document.body),null!==(e=t.current)&&void 0!==e?e:n}},78730:function(e,t,n){"use strict";n.r(t),n.d(t,{SheetComponent:function(){return a}});var i=n(85893),s=n(97387),o=n(93298),r=n(67294);let h=(e=>{let t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<1e3;e++)t+=n.charAt(Math.floor(Math.random()*n.length));return t})(0),a=e=>{let{title:t,hideTopBar:n,allowHideOnContentScroll:a}=e,[l,c]=r.useState(!1),[u,d]=r.useState(!1);return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(s.z,{onClick:()=>c(!0),children:"Show Sheet"}),(0,i.jsx)(o.y,{visible:l,onClose:()=>c(!1),title:t,hideTopBar:n,allowHideOnContentScroll:a,children:(0,i.jsxs)("div",{style:{padding:"15px",display:"flex",flexDirection:"column",gap:"15px"},children:[u&&(0,i.jsx)("div",{style:{wordBreak:"break-word"},children:h}),u?(0,i.jsx)(s.z,{view:"normal",size:"s",width:"max",onClick:()=>d(!1),children:"Remove content"}):(0,i.jsx)(s.z,{view:"action",size:"s",width:"max",onClick:()=>d(!0),children:"Add content"}),(0,i.jsx)(s.z,{view:"outlined",size:"s",width:"max",onClick:()=>c(!1),children:"Close"})]})})]})}},82801:function(){},51031:function(){}}]);