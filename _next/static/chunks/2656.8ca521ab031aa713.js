"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2656],{53194:function(e,t,a){a.r(t),a.d(t,{PaginationComponent:function(){return u}});var p=a(85893),n=a(64191),o=a(67294);let s=e=>({page:Number(e.page)||1,pageSize:Number(e.pageSize)||10,total:Number(e.total),compact:e.compact,showInput:e.showInput,showPages:e.showPages}),u=e=>{let[t,a]=o.useState(()=>s(e));return o.useEffect(()=>{a(t=>({...t,...s(e)}))},[e]),(0,p.jsx)(n.t,{...t,onUpdate:(e,t)=>a(a=>({...a,page:e,pageSize:t})),pageSizeOptions:[1,5,10]})}}}]);