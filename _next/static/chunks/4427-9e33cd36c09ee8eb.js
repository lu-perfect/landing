(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4427],{20087:function(t,e,s){"use strict";var i=s(67294);e.Z=t=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081Z",clipRule:"evenodd"}))},51693:function(t,e,s){"use strict";var i=s(67294);e.Z=t=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))},44607:function(t,e,s){"use strict";var i=s(67294);e.Z=t=>i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0Z",clipRule:"evenodd"}))},93298:function(t,e,s){"use strict";s.d(e,{y:function(){return v}});var i=s(67294),n=s(73935),o=s(97582),h=s(81387),r=s(25957);const l=(0,s(32782).Ge)("sheet");class a{constructor(t,e){this.x=t,this.y=e,this.timeStamp=Date.now()}}class c{constructor(t=5){this.points=[],this.pointsLen=t,this.clear()}clear(){this.points=new Array(this.pointsLen)}addMovement({x:t,y:e}){this.points.pop(),this.points.unshift(new a(t,e))}getYAcceleration(t=1){const e=this.points[0],s=this.points[t];return e&&s?(e.y-s.y)/Math.pow(e.timeStamp-s.timeStamp,2):0}}s(98140);let d=[];class u extends i.Component{constructor(){super(...arguments),this.veilRef=i.createRef(),this.sheetRef=i.createRef(),this.sheetTopRef=i.createRef(),this.sheetContentRef=i.createRef(),this.sheetInnerContentRef=i.createRef(),this.sheetTitleRef=i.createRef(),this.velocityTracker=new c,this.observer=null,this.transitionDuration="0.3s",this.state={startScrollTop:0,startY:0,deltaY:0,prevInnerContentHeight:0,swipeAreaTouched:!1,contentTouched:!1,veilTouched:!1,isAnimating:!1,inWindowResizeScope:!1},this.setStyles=({status:t,deltaHeight:e=0})=>{if(!this.sheetRef.current||!this.veilRef.current)return;const s=this.sheetHeight-e,i="showing"===t?`translate3d(0, -${s}px, 0)`:"translate3d(0, 0, 0)";let n=0;"showing"===t&&(n=0===e?1:s/this.sheetHeight),this.veilRef.current.style.opacity=String(n),this.sheetRef.current.style.transform=i},this.show=()=>{this.setState({isAnimating:!0},(()=>{this.setStyles({status:"showing"}),this.setHash()}))},this.hide=()=>{this.setState({isAnimating:!0},(()=>{this.setStyles({status:"hiding"}),this.removeHash()}))},this.onSwipeAreaTouchStart=t=>{this.velocityTracker.clear(),this.setState({startY:t.nativeEvent.touches[0].clientY,swipeAreaTouched:!0})},this.onContentTouchStart=t=>{this.props.allowHideOnContentScroll&&!this.state.swipeAreaTouched&&(this.velocityTracker.clear(),this.setState({startY:t.nativeEvent.touches[0].clientY,startScrollTop:this.sheetScrollTop,contentTouched:!0}))},this.onSwipeAriaTouchMove=t=>{const e=t.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:t.nativeEvent.touches[0].clientX,y:t.nativeEvent.touches[0].clientY}),this.setState({deltaY:e}),e<=0||this.setStyles({status:"showing",deltaHeight:e})},this.onContentTouchMove=t=>{if(!this.props.allowHideOnContentScroll)return;const{startScrollTop:e,swipeAreaTouched:s}=this.state;if(s||this.sheetScrollTop>0||e>0&&e!==this.sheetScrollTop)return;const i=t.nativeEvent.touches[0].clientY-this.state.startY;this.velocityTracker.addMovement({x:t.nativeEvent.touches[0].clientX,y:t.nativeEvent.touches[0].clientY}),this.setState({deltaY:i}),i<=0||this.setStyles({status:"showing",deltaHeight:i})},this.onTouchEndAction=t=>{const e=this.velocityTracker.getYAcceleration();this.sheetHeight<=t?this.props.hideSheet():t>50&&e<=.08&&e>=-.02||e>.08?this.hide():t>0&&this.show()},this.onSwipeAriaTouchEnd=()=>{const{deltaY:t}=this.state;this.onTouchEndAction(t),this.setState({startY:0,deltaY:0,swipeAreaTouched:!1})},this.onContentTouchEnd=()=>{const{deltaY:t,swipeAreaTouched:e}=this.state;this.props.allowHideOnContentScroll&&!e&&(this.onTouchEndAction(t),this.setState({startY:0,deltaY:0,contentTouched:!1}))},this.onVeilClick=()=>{this.setState({veilTouched:!0}),this.hide()},this.onVeilTransitionEnd=()=>{this.setState({isAnimating:!1}),"0"===this.veilOpacity&&this.props.hideSheet()},this.onContentTransitionEnd=t=>{"height"===t.propertyName&&this.sheetContentRef.current&&(this.sheetContentRef.current.style.transition="none")},this.onResizeWindow=()=>{this.setState({inWindowResizeScope:!0}),this.onResize(),setTimeout((()=>this.setState({inWindowResizeScope:!1})),0)},this.onResize=()=>{const t=this.state.prevInnerContentHeight!==this.innerContentHeight;if(!this.sheetRef.current||!this.sheetContentRef.current||!t)return;this.sheetContentRef.current.style.transition=this.state.prevInnerContentHeight>this.innerContentHeight?`height 0s ease ${this.transitionDuration}`:"none";const e=this.sheetTitleHeight+this.innerContentHeight,s=window.innerHeight,i=e>=s?.9*s:e;this.sheetContentRef.current.style.height=`${i}px`,this.sheetRef.current.style.transform=`translate3d(0, -${i+this.sheetTopHeight}px, 0)`,this.setState({prevInnerContentHeight:e})}}componentDidMount(){this.addListeners(),this.show(),this.setInitialStyles(),this.setState({prevInnerContentHeight:this.innerContentHeight})}componentDidUpdate(t){const{visible:e,location:s}=this.props;!t.visible&&e&&this.show(),(t.visible&&!e||this.shouldClose(t))&&this.hide(),t.location.pathname!==s.pathname&&(d=[])}componentWillUnmount(){this.removeListeners()}render(){const{content:t,contentClassName:e,swipeAreaClassName:s,hideTopBar:n,title:o}=this.props,{deltaY:h,swipeAreaTouched:r,contentTouched:a,veilTouched:c,isAnimating:d,inWindowResizeScope:u}=this.state,p={"with-transition":!h||c},v={"with-transition":!u&&p["with-transition"]},f={"without-scroll":h>0&&a||r};return i.createElement(i.Fragment,null,i.createElement("div",{ref:this.veilRef,className:l("veil",p),onClick:d?void 0:this.onVeilClick,onTransitionEnd:this.onVeilTransitionEnd}),i.createElement("div",{ref:this.sheetRef,className:l("sheet",v)},!n&&i.createElement("div",{ref:this.sheetTopRef,className:l("sheet-top")},i.createElement("div",{className:l("sheet-top-resizer")})),i.createElement("div",{className:l("sheet-swipe-area",s),onTouchStart:this.onSwipeAreaTouchStart,onTouchMove:this.onSwipeAriaTouchMove,onTouchEnd:this.onSwipeAriaTouchEnd}),i.createElement("div",{ref:this.sheetContentRef,className:l("sheet-content",f,e),onTouchStart:this.onContentTouchStart,onTouchMove:this.onContentTouchMove,onTouchEnd:this.onContentTouchEnd,onTransitionEnd:this.onContentTransitionEnd},o&&i.createElement("div",{ref:this.sheetTitleRef,className:l("sheet-content-title")},o),i.createElement("div",{ref:this.sheetInnerContentRef},t))))}get veilOpacity(){var t;return(null===(t=this.veilRef.current)||void 0===t?void 0:t.style.opacity)||0}get sheetTopHeight(){var t;return(null===(t=this.sheetTopRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get sheetHeight(){var t;return(null===(t=this.sheetRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get innerContentHeight(){var t;return(null===(t=this.sheetInnerContentRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get sheetTitleHeight(){var t;return(null===(t=this.sheetTitleRef.current)||void 0===t?void 0:t.getBoundingClientRect().height)||0}get sheetScrollTop(){var t;return(null===(t=this.sheetContentRef.current)||void 0===t?void 0:t.scrollTop)||0}setInitialStyles(){if(this.sheetContentRef.current&&this.sheetInnerContentRef.current){this.transitionDuration=getComputedStyle(this.sheetContentRef.current).getPropertyValue("--yc-sheet-transition-duration");const t=this.sheetHeight-this.sheetTopHeight;this.sheetContentRef.current.style.height=`${t}px`}}addListeners(){if(window.addEventListener("resize",this.onResizeWindow),this.sheetRef.current){const t={subtree:!0,childList:!0};this.observer=new MutationObserver(this.onResize),this.observer.observe(this.sheetRef.current,t)}}removeListeners(){window.removeEventListener("resize",this.onResizeWindow),this.observer&&this.observer.disconnect()}setHash(){const{id:t,platform:e,location:s,history:i}=this.props;if(e===h.t.BROWSER)return;const n=Object.assign(Object.assign({},s),{hash:t});switch(e){case h.t.IOS:s.hash&&d.push(s.hash),i.replace(n);break;case h.t.ANDROID:i.push(n)}}removeHash(){var t;const{id:e,platform:s,location:i,history:n}=this.props;if(s!==h.t.BROWSER&&i.hash===`#${e}`)switch(s){case h.t.IOS:n.replace(Object.assign(Object.assign({},i),{hash:null!==(t=d.pop())&&void 0!==t?t:""}));break;case h.t.ANDROID:n.goBack()}}shouldClose(t){const{id:e,platform:s,location:i,history:n}=this.props;return s!==h.t.BROWSER&&"POP"===n.action&&t.location.hash!==i.hash&&i.hash!==`#${e}`}}u.defaultProps={id:"sheet",allowHideOnContentScroll:!0};const p=(0,r.z)(function(t){const e=e=>{const{useHistory:s,useLocation:n}=e,h=(0,o.__rest)(e,["useHistory","useLocation"]);return i.createElement(t,Object.assign({},h,{history:s(),location:n()}))},s=t.displayName||t.name||"Component";return e.displayName=`withRouterWrapper(${s})`,e}(u));class v extends i.Component{constructor(){super(...arguments),this.bodyScrollLocked=!1,this.state={visible:!1},this.showSheet=()=>{this.lockBodyScroll(),this.setState({visible:!0})},this.hideSheet=()=>{this.restoreBodyScroll(),this.props.onClose&&this.props.onClose(),this.setState({visible:!1})}}static lockBodyScroll(){1===++v.bodyScrollLocksCount&&(v.bodyInitialOverflow=document.body.style.overflow,document.body.style.overflow="hidden")}static restoreBodyScroll(){0!==v.bodyScrollLocksCount&&0===--v.bodyScrollLocksCount&&(document.body.style.overflow=v.bodyInitialOverflow||"",v.bodyInitialOverflow=void 0)}componentDidMount(){this.props.visible&&this.showSheet()}componentDidUpdate(t){!t.visible&&this.props.visible&&this.showSheet()}componentWillUnmount(){this.restoreBodyScroll()}render(){return this.state.visible?n.createPortal(this.renderSheet(),document.body):null}restoreBodyScroll(){this.bodyScrollLocked&&(v.restoreBodyScroll(),this.bodyScrollLocked=!1)}lockBodyScroll(){v.lockBodyScroll(),this.bodyScrollLocked=!0}renderSheet(){const{id:t,children:e,className:s,contentClassName:n,swipeAreaClassName:o,title:h,visible:r,allowHideOnContentScroll:a,hideTopBar:c,qa:d}=this.props;return i.createElement("div",{"data-qa":d,className:l(null,s)},i.createElement(p,{id:t,content:e,contentClassName:n,swipeAreaClassName:o,title:h,visible:r,allowHideOnContentScroll:a,hideTopBar:c,hideSheet:this.hideSheet}))}}v.bodyScrollLocksCount=0,v.bodyInitialOverflow=void 0},25957:function(t,e,s){"use strict";s.d(e,{z:function(){return h}});var i=s(67294),n=s(73809),o=s(42646);function h(t){var e;const s=(0,n.i)(t);return(e=class extends i.Component{render(){return i.createElement(t,Object.assign({},this.props,{mobile:this.context.mobile,platform:this.context.platform,useHistory:this.context.useHistory,useLocation:this.context.useLocation,setMobile:this.context.setMobile,setPlatform:this.context.setPlatform}))}}).displayName=`withMobile(${s})`,e.contextType=o.z,e}},73809:function(t,e,s){"use strict";function i(t){return t.displayName||t.name||"Component"}s.d(e,{i:function(){return i}})},98140:function(){}}]);