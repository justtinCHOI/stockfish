import{_ as it,J as pe,Y as st,Z as qe,$ as at,G as Q,a0 as ct,a1 as Le,a2 as lt,P as f,r as m,a3 as ne,a4 as dt,n as ie,b as S,D as xe,p as C,y as X,j as o,a5 as ee,a6 as ut,a7 as pt,a8 as A,a9 as Re,aa as ft,ab as gt,ac as mt,ad as ht,ae as xt}from"./index-DR66x2TL.js";import{s as yt,u as ye,l as Be}from"./companyLogos-DJlBou58.js";import{u as vt}from"./useCustomLogin-CjtSUxJM.js";import{d as Me}from"./CentralSectionMenu-dummyImg-CRG5GB_j.js";var bt=function(e){it(t,e);function t(r,i){var s;return s=e.call(this)||this,s.client=r,s.setOptions(i),s.bindMethods(),s.updateResult(),s}var n=t.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(i){this.options=this.client.defaultMutationOptions(i)},n.onUnsubscribe=function(){if(!this.listeners.length){var i;(i=this.currentMutation)==null||i.removeObserver(this)}},n.onMutationUpdate=function(i){this.updateResult();var s={listeners:!0};i.type==="success"?s.onSuccess=!0:i.type==="error"&&(s.onError=!0),this.notify(s)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(i,s){return this.mutateOptions=s,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,pe({},this.options,{variables:typeof i<"u"?i:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var i=this.currentMutation?this.currentMutation.state:st(),s=pe({},i,{isLoading:i.status==="loading",isSuccess:i.status==="success",isError:i.status==="error",isIdle:i.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=s},n.notify=function(i){var s=this;qe.batch(function(){s.mutateOptions&&(i.onSuccess?(s.mutateOptions.onSuccess==null||s.mutateOptions.onSuccess(s.currentResult.data,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(s.currentResult.data,null,s.currentResult.variables,s.currentResult.context)):i.onError&&(s.mutateOptions.onError==null||s.mutateOptions.onError(s.currentResult.error,s.currentResult.variables,s.currentResult.context),s.mutateOptions.onSettled==null||s.mutateOptions.onSettled(void 0,s.currentResult.error,s.currentResult.variables,s.currentResult.context))),i.listeners&&s.listeners.forEach(function(u){u(s.currentResult)})})},t}(at);function Tt(e,t,n){var r=Q.useRef(!1),i=Q.useState(0),s=i[1],u=ct(e,t,n),l=Le(),a=Q.useRef();a.current?a.current.setOptions(u):a.current=new bt(l,u);var g=a.current.getCurrentResult();Q.useEffect(function(){r.current=!0;var T=a.current.subscribe(qe.batchCalls(function(){r.current&&s(function(v){return v+1})}));return function(){r.current=!1,T()}},[]);var p=Q.useCallback(function(T,v){a.current.mutate(T,v).catch(lt)},[]);if(g.error&&yt(void 0,a.current.options.useErrorBoundary,[g.error]))throw g.error;return pe({},g,{mutate:p,mutateAsync:g.mutate})}const le=e=>{const[t,n]=m.useState(!1),r=new Date,[i,s,u,l]=[r.getMonth(),r.getDate(),r.getHours(),r.getMinutes()],a=l===0||l===30?"30 or 60":0<l&&l<30?"1~29":"31~59",g=`${i}월 ${s}일 ${u}시 ${a}`;m.useEffect(()=>{if(l===0||l===30)n(!0);else if(0<l&&l<30){const c=(30-l)*6e4;setTimeout(()=>{R(),n(!0)},c)}else if(30<l&&l<60){const c=(60-l)*6e4;setTimeout(()=>{R(),n(!0)},c)}},[]);const{data:p,isLoading:T,error:v,refetch:R}=ye(`stockInfo${e} ${g}}`,()=>kt(e),{enabled:!0,refetchInterval:t?6e4*10:!1});return{stockInfo:p,stockInfoLoading:T,stockInfoError:v}},kt=async e=>(await ne.get(`http://localhost:8080/api/company/${e}`)).data;le.propTypes={companyId:f.number};function Ve(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ve(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function W(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ve(e))&&(r&&(r+=" "),r+=t);return r}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function Ct(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oe(e){return typeof e=="number"&&!isNaN(e)}function J(e){return typeof e=="boolean"}function re(e){return typeof e=="string"}function L(e){return typeof e=="function"}function ce(e){return re(e)||L(e)?e:null}function fe(e){return e===0||e}function Rt(e,t){return e===!1||oe(e)&&e>0?e:t}var _e=!!(typeof window<"u"&&window.document&&window.document.createElement);function ue(e){return m.isValidElement(e)||re(e)||L(e)||oe(e)}var Ae={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},z={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function wt(e,t,n){n===void 0&&(n=300);var r=e.scrollHeight,i=e.style;requestAnimationFrame(function(){i.minHeight="initial",i.height=r+"px",i.transition="all "+n+"ms",requestAnimationFrame(function(){i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function jt(e){var t=e.enter,n=e.exit,r=e.appendPosition,i=r===void 0?!1:r,s=e.collapse,u=s===void 0?!0:s,l=e.collapseDuration,a=l===void 0?300:l;return function(p){var T=p.children,v=p.position,R=p.preventExitTransition,c=p.done,x=p.nodeRef,y=p.isIn,P=i?t+"--"+v:t,D=i?n+"--"+v:n,$=m.useRef(),h=m.useRef(0);m.useLayoutEffect(function(){k()},[]),m.useEffect(function(){y||(R?d():w())},[y]);function k(){var I=x.current;$.current=I.className,I.className+=" "+P,I.addEventListener("animationend",j)}function j(){var I=x.current;I.removeEventListener("animationend",j),h.current===0&&(I.className=$.current)}function w(){h.current=1;var I=x.current;I.className+=" "+D,I.addEventListener("animationend",d)}function d(){var I=x.current;I.removeEventListener("animationend",d),u?wt(I,c,a):c()}return Q.createElement(Q.Fragment,null,T)}}var M={list:new Map,emitQueue:new Map,on:function(t,n){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(n),this},off:function(t,n){if(n){var r=this.list.get(t).filter(function(i){return i!==n});return this.list.set(t,r),this}return this.list.delete(t),this},cancelEmit:function(t){var n=this.emitQueue.get(t);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){for(var n=this,r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];this.list.has(t)&&this.list.get(t).forEach(function(u){var l=setTimeout(function(){u.apply(void 0,i)},0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(l)})}};function K(e,t){t===void 0&&(t=!1);var n=m.useRef(e);return m.useEffect(function(){t&&(n.current=e)}),n.current}function It(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter(function(n){return n!==t.staleId});case 1:return fe(t.toastId)?e.filter(function(n){return n!==t.toastId}):[]}}function Ot(e){var t=m.useReducer(function(h){return h+1},0),n=t[1],r=m.useReducer(It,[]),i=r[0],s=r[1],u=m.useRef(null),l=K(0),a=K([]),g=K({}),p=K({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:T,getToast:function(k){return g[k]||null}});m.useEffect(function(){return p.containerId=e.containerId,M.cancelEmit(3).on(0,y).on(1,function(h){return u.current&&R(h)}).on(5,v).emit(2,p),function(){return M.emit(3,p)}},[]),m.useEffect(function(){p.isToastActive=T,p.displayedToast=i.length,M.emit(4,i.length,e.containerId)},[i]),m.useEffect(function(){p.props=e});function T(h){return i.indexOf(h)!==-1}function v(h){var k=h.containerId,j=p.props,w=j.limit,d=j.enableMultiContainer;w&&(!k||p.containerId===k&&d)&&(l-=a.length,a=[])}function R(h){s({type:1,toastId:h})}function c(){var h=a.shift(),k=h.toastContent,j=h.toastProps,w=h.staleId;P(k,j,w)}function x(h){var k=h.containerId,j=h.toastId,w=h.updateId;return!!(!u.current||p.props.enableMultiContainer&&k!==p.props.containerId||g[j]&&w==null)}function y(h,k){var j=k.delay,w=k.staleId,d=Ct(k,["delay","staleId"]);if(!(!ue(h)||x(d))){var I=d.toastId,O=d.updateId,b=p.props,_=function(){return R(I)},V=d.updateId==null;V&&l++;var N={toastId:I,updateId:O,isIn:!1,key:d.key||p.toastKey++,type:d.type,closeToast:_,closeButton:d.closeButton,rtl:b.rtl,position:d.position||b.position,transition:d.transition||b.transition,className:ce(d.className||b.toastClassName),bodyClassName:ce(d.bodyClassName||b.bodyClassName),style:d.style||b.toastStyle,bodyStyle:d.bodyStyle||b.bodyStyle,onClick:d.onClick||b.onClick,pauseOnHover:J(d.pauseOnHover)?d.pauseOnHover:b.pauseOnHover,pauseOnFocusLoss:J(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:b.pauseOnFocusLoss,draggable:J(d.draggable)?d.draggable:b.draggable,draggablePercent:oe(d.draggablePercent)?d.draggablePercent:b.draggablePercent,draggableDirection:d.draggableDirection||b.draggableDirection,closeOnClick:J(d.closeOnClick)?d.closeOnClick:b.closeOnClick,progressClassName:ce(d.progressClassName||b.progressClassName),progressStyle:d.progressStyle||b.progressStyle,autoClose:Rt(d.autoClose,b.autoClose),hideProgressBar:J(d.hideProgressBar)?d.hideProgressBar:b.hideProgressBar,progress:d.progress,role:re(d.role)?d.role:b.role,deleteToast:function(){D(I)}};L(d.onOpen)&&(N.onOpen=d.onOpen),L(d.onClose)&&(N.onClose=d.onClose),N.draggableDirection==="y"&&N.draggablePercent===80&&(N.draggablePercent*=1.5);var F=b.closeButton;d.closeButton===!1||ue(d.closeButton)?F=d.closeButton:d.closeButton===!0&&(F=ue(b.closeButton)?b.closeButton:!0),N.closeButton=F;var B=h;m.isValidElement(h)&&!re(h.type)?B=m.cloneElement(h,{closeToast:_,toastProps:N}):L(h)&&(B=h({closeToast:_,toastProps:N})),b.limit&&b.limit>0&&l>b.limit&&V?a.push({toastContent:B,toastProps:N,staleId:w}):oe(j)&&j>0?setTimeout(function(){P(B,N,w)},j):P(B,N,w)}}function P(h,k,j){var w=k.toastId;j&&delete g[j],g[w]={content:h,props:k},s({type:0,toastId:w,staleId:j})}function D(h){delete g[h];var k=a.length;if(l=fe(h)?l-1:l-p.displayedToast,l<0&&(l=0),k>0){var j=fe(h)?1:p.props.limit;if(k===1||j===1)p.displayedToast++,c();else{var w=j>k?k:j;p.displayedToast=w;for(var d=0;d<w;d++)c()}}else n()}function $(h){for(var k={},j=e.newestOnTop?Object.keys(g).reverse():Object.keys(g),w=0;w<j.length;w++){var d=g[j[w]],I=d.props.position;k[I]||(k[I]=[]),k[I].push(d)}return Object.keys(k).map(function(O){return h(O,k[O])})}return{getToastToRender:$,collection:g,containerRef:u,isToastActive:T}}function we(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function je(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function St(e){var t=m.useState(!0),n=t[0],r=t[1],i=m.useState(!1),s=i[0],u=i[1],l=m.useRef(null),a=K({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),g=K(e,!0),p=e.autoClose,T=e.pauseOnHover,v=e.closeToast,R=e.onClick,c=e.closeOnClick;m.useEffect(function(){return L(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),function(){L(g.onClose)&&g.onClose(m.isValidElement(g.children)&&g.children.props)}},[]),m.useEffect(function(){return e.draggable&&k(),function(){e.draggable&&j()}},[e.draggable]),m.useEffect(function(){return e.pauseOnFocusLoss&&$(),function(){e.pauseOnFocusLoss&&h()}},[e.pauseOnFocusLoss]);function x(O){if(e.draggable){var b=l.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=we(O.nativeEvent),a.y=je(O.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent/100))}}function y(){if(a.boundingRect){var O=a.boundingRect,b=O.top,_=O.bottom,V=O.left,N=O.right;e.pauseOnHover&&a.x>=V&&a.x<=N&&a.y>=b&&a.y<=_?D():P()}}function P(){r(!0)}function D(){r(!1)}function $(){document.hasFocus()||D(),window.addEventListener("focus",P),window.addEventListener("blur",D)}function h(){window.removeEventListener("focus",P),window.removeEventListener("blur",D)}function k(){document.addEventListener("mousemove",w),document.addEventListener("mouseup",d),document.addEventListener("touchmove",w),document.addEventListener("touchend",d)}function j(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",d)}function w(O){if(a.canDrag){O.preventDefault();var b=l.current;n&&D(),a.x=we(O),a.y=je(O),e.draggableDirection==="x"?a.delta=a.x-a.start:a.delta=a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform="translate"+e.draggableDirection+"("+a.delta+"px)",b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance))}}function d(){var O=l.current;if(a.canDrag){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){u(!0),e.closeToast();return}O.style.transition="transform 0.2s, opacity 0.2s",O.style.transform="translate"+e.draggableDirection+"(0)",O.style.opacity="1"}}var I={onMouseDown:x,onTouchStart:x,onMouseUp:y,onTouchEnd:y};return p&&T&&(I.onMouseEnter=D,I.onMouseLeave=P),c&&(I.onClick=function(O){R&&R(O),a.canCloseOnClick&&v()}),{playToast:P,pauseToast:D,isRunning:n,preventExitTransition:s,toastRef:l,eventHandlers:I}}function ze(e){var t=e.closeToast,n=e.type,r=e.ariaLabel,i=r===void 0?"close":r;return m.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(u){u.stopPropagation(),t(u)},"aria-label":i},m.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},m.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Fe(e){var t,n,r=e.delay,i=e.isRunning,s=e.closeToast,u=e.type,l=e.hide,a=e.className,g=e.style,p=e.controlledProgress,T=e.progress,v=e.rtl,R=e.isIn,c=G({},g,{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:l?0:1});p&&(c.transform="scaleX("+T+")");var x=W("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,(t={},t["Toastify__progress-bar--rtl"]=v,t)),y=L(a)?a({rtl:v,type:u,defaultClassName:x}):W(x,a),P=(n={},n[p&&T>=1?"onTransitionEnd":"onAnimationEnd"]=p&&T<1?null:function(){R&&s()},n);return m.createElement("div",Object.assign({role:"progressbar",className:y,style:c},P))}Fe.defaultProps={type:z.DEFAULT,hide:!1};var Pt=function(t){var n,r=St(t),i=r.isRunning,s=r.preventExitTransition,u=r.toastRef,l=r.eventHandlers,a=t.closeButton,g=t.children,p=t.autoClose,T=t.onClick,v=t.type,R=t.hideProgressBar,c=t.closeToast,x=t.transition,y=t.position,P=t.className,D=t.style,$=t.bodyClassName,h=t.bodyStyle,k=t.progressClassName,j=t.progressStyle,w=t.updateId,d=t.role,I=t.progress,O=t.rtl,b=t.toastId,_=t.deleteToast,V=t.isIn,N=W("Toastify__toast","Toastify__toast--"+v,(n={},n["Toastify__toast--rtl"]=O,n)),F=L(P)?P({rtl:O,position:y,type:v,defaultClassName:N}):W(N,P),B=!!I;function Z(U){if(U){var de={closeToast:c,type:v};if(L(U))return U(de);if(m.isValidElement(U))return m.cloneElement(U,de)}}return m.createElement(x,{isIn:V,done:_,position:y,preventExitTransition:s,nodeRef:u},m.createElement("div",Object.assign({id:b,onClick:T,className:F},l,{style:D,ref:u}),m.createElement("div",Object.assign({},V&&{role:d},{className:L($)?$({type:v}):W("Toastify__toast-body",$),style:h}),g),Z(a),(p||B)&&m.createElement(Fe,Object.assign({},w&&!B?{key:"pb-"+w}:{},{rtl:O,delay:p,isRunning:i,isIn:V,closeToast:c,hide:R,type:v,style:j,className:k,controlledProgress:B,progress:I}))))},Et=jt({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),Ue=function(t){var n=Ot(t),r=n.getToastToRender,i=n.containerRef,s=n.isToastActive,u=t.className,l=t.style,a=t.rtl,g=t.containerId;function p(T){var v,R=W("Toastify__toast-container","Toastify__toast-container--"+T,(v={},v["Toastify__toast-container--rtl"]=a,v));return L(u)?u({position:T,rtl:a,defaultClassName:R}):W(R,ce(u))}return m.createElement("div",{ref:i,className:"Toastify",id:g},r(function(T,v){var R=v.length===0?G({},l,{pointerEvents:"none"}):G({},l);return m.createElement("div",{className:p(T),style:R,key:"container-"+T},v.map(function(c){var x=c.content,y=c.props;return m.createElement(Pt,Object.assign({},y,{isIn:s(y.toastId),key:"toast-"+y.key,closeButton:y.closeButton===!0?ze:y.closeButton}),x)}))}))};Ue.defaultProps={position:Ae.TOP_RIGHT,transition:Et,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:ze,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var Y=new Map,ge,te,He,me=[],he=!1;function Nt(){return Y.size>0}function $t(e,t){var n=t.containerId,r=Y.get(n||ge);return r?r.getToast(e):null}function Qe(){return Math.random().toString(36).substr(2,9)}function Dt(e){return e&&(re(e.toastId)||oe(e.toastId))?e.toastId:Qe()}function ve(e,t){return Nt()?M.emit(0,e,t):(me.push({content:e,options:t}),he&&_e&&(he=!1,te=document.createElement("div"),document.body.appendChild(te),dt.render(m.createElement(Ue,Object.assign({},He)),te))),t.toastId}function We(e,t){return G({},t,{type:t&&t.type||e,toastId:Dt(t)})}var se=function(t){return function(n,r){return ve(n,We(t,r))}},E=function(t,n){return ve(t,We(z.DEFAULT,n))};E.success=se(z.SUCCESS);E.info=se(z.INFO);E.error=se(z.ERROR);E.warning=se(z.WARNING);E.dark=se(z.DARK);E.warn=E.warning;E.dismiss=function(e){return M.emit(1,e)};E.clearWaitingQueue=function(e){return e===void 0&&(e={}),M.emit(5,e)};E.isActive=function(e){var t=!1;return Y.forEach(function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};E.update=function(e,t){t===void 0&&(t={}),setTimeout(function(){var n=$t(e,t);if(n){var r=n.props,i=n.content,s=G({},r,t,{toastId:t.toastId||e,updateId:Qe()});s.toastId!==e&&(s.staleId=e);var u=s.render||i;delete s.render,ve(u,s)}},0)};E.done=function(e){E.update(e,{progress:1})};E.onChange=function(e){return L(e)&&M.on(4,e),function(){L(e)&&M.off(4,e)}};E.configure=function(e){e===void 0&&(e={}),he=!0,He=e};E.POSITION=Ae;E.TYPE=z;M.on(2,function(e){ge=e.containerId||e,Y.set(ge,e),me.forEach(function(t){M.emit(0,t.content,t.options)}),me=[]}).on(3,function(e){Y.delete(e.containerId||e),Y.size===0&&M.off(0).off(1).off(5),_e&&te&&document.body.removeChild(te)});const Ie=`${xe}/api/stock`,qt=()=>{const{companyId:e}=ie(),t=S(l=>l.stockOrderTypeSlice),n=S(l=>l.stockOrderPriceSlice),r=S(l=>l.stockOrderVolumeSlice),s=S(l=>l.loginSlice).memberId,u=Le();return Tt(()=>Lt(t,e,n,r,s),{onSuccess:()=>{u.invalidateQueries("cash"),u.invalidateQueries("holdingStock"),u.invalidateQueries("orderRecord"),u.invalidateQueries("stockHolds"),u.invalidateQueries("money")}})},Lt=async(e,t,n,r,i)=>e?(await ne.post(`${Ie}/stock/sell?companyId=${t}&price=${n}&stockCount=${r}`)).data:(await ne.post(`${Ie}/buy?companyId=${t}&price=${n}&stockCount=${r}&memberId=${i}`)).data,Bt="%",Ge=e=>{const{index:t,price:n,volume:r,changeRate:i,totalSellingVolume:s,totalBuyingVolume:u}=e,l=X(),a=S(T=>T.stockOrderPriceSlice),g=m.useRef(null),p=()=>{l(ee(n))};return m.useEffect(()=>{t===9&&g.current&&(g.current.focus(),g.current.scrollIntoView({behavior:"smooth",block:"center"}))},[g,t]),o.jsxs(Mt,{$index:t,ref:t===9?g:null,$price:n,$orderPrice:a,onClick:p,children:[o.jsxs(Vt,{$changeRate:parseFloat(i),children:[o.jsx("div",{className:"price",children:n.toLocaleString()}),o.jsxs("div",{className:"changeRate",children:[i,Bt]})]}),o.jsx(_t,{$index:t,children:o.jsx("div",{className:"volume",children:r.toLocaleString()})})]})};Ge.propTypes={index:f.number.isRequired,price:f.number.isRequired,volume:f.number.isRequired,changeRate:f.string.isRequired,totalSellingVolume:f.number.isRequired,totalBuyingVolume:f.number.isRequired};f.number.isRequired,f.number.isRequired,f.number.isRequired,f.number.isRequired;const Mt=C.div`
    width: 100%;
    height: 46px;
    margin-bottom: 2px;
    background-color: ${e=>e.$price===e.$orderPrice?e.$index>9?"#e9c2bf":"#bed1eb":e.$index>9?"#FDE8E7":"#E7F0FD"};
    border-left: ${e=>e.$price===e.$orderPrice?"3px solid red":e.$index>9?"3px solid #FDE8E7":"3px solid #E7F0FD"};
    display: flex;
    flex-direction: row;
    transition: border 0.8s ease, background-color 0.8s ease;

    &:hover {
        cursor: pointer;
    }
`,Vt=C.div`
    width: 50%;
    display: flex;
    padding-right: 11px;
    flex-direction: column;
    align-items: flex-end;

    .price {
        font-size: 14px;
        font-weight: 400;
        padding-top: 1px;
    }

    .changeRate {
        font-size: 12px;
        font-weight: 400;
        color: ${e=>e.$changeRate>0?"#ed2926":e.$changeRate===0?"black":"#3177d7"};
    }
`,_t=C.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 12px;
    color: ${e=>e.$index<10?"#2679ed":"#e22926"};

    .volume {
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: 8px;
    }
`;C.span`
    height: 2px;
    background-color: ${e=>e.$index<10?"#2679ed":"#e22926"};
    transition: width 0.5s ease;
`;const At=()=>{const{companyId:e}=ie(),t=S(c=>c.stockOrderTypeSlice),{stockInfo:n}=le(e);if(!n||!n.stockInfResponseDto||!n.stockAsBiResponseDto)return null;const r=parseInt(n.stockInfResponseDto.stck_prpr,10),i=parseInt(n.stockInfResponseDto.prdy_vrss,10),s=r-i,u=[],l=[];for(let c=1;c<11;c++){const x=`askp${c}`,y=`askp_rsqn${c}`,P=`bidp${c}`,D=`bidp_rsqn${c}`,$={price:parseInt(n.stockAsBiResponseDto[x]),volume:parseInt(n.stockAsBiResponseDto[y])},h={price:parseInt(n.stockAsBiResponseDto[P]),volume:parseInt(n.stockAsBiResponseDto[D])};u.unshift($),l.push(h)}const a=u.filter(c=>c.price!==0),g=l.filter(c=>c.price!==0),p=a[a.length-1].price-g[0].price;for(let c=0;a.length<10;c++){const x={price:a[0].price+p,volume:0};a.unshift(x)}for(let c=0;g.length<10;c++){const x={price:g[g.length-1].price-p,volume:0};g.push(x)}const T=[...a,...g],v=a.reduce((c,x)=>c=c+x.volume,0),R=g.reduce((c,x)=>c=c+x.volume,0);return o.jsx(zt,{$orderType:t,children:o.jsx(Ft,{children:T.map((c,x)=>{const y=((c.price-s)/s*100).toFixed(2);return o.jsx(Ge,{index:x,price:c.price,volume:c.volume,changeRate:y,totalSellingVolume:v,totalBuyingVolume:R},c.price)})})})},zt=C.div`
    width: 40%;
    height: 100%;
    margin-right: 16px;

    .priceIndicator {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 32px;
        font-size: 13px;
        padding-left: 15px;

        & div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`,Ft=C.ul`
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`,Ut="가격",Ht="원",Qt=" [거래량 없음] 주문 시 대기 처리 됩니다",Wt=" [거래량 있음] 주문 시 체결 처리 됩니다",Ke=e=>{const{stockInfo:t,companyId:n}=e,r=X(),i=S(q=>q.stockOrderPriceSlice),[s,u]=m.useState(null),{askp1:l,askp2:a,askp3:g,askp4:p,askp5:T,askp6:v,askp7:R,askp8:c,askp9:x,askp10:y}=t,$=[l,a,g,p,T,v,R,c,x,y].map(q=>parseInt(q)).filter(q=>q!==0),h=$[0],k=$[1]-$[0],j=S(q=>q.stockOrderTypeSlice),[w,d]=m.useState(!0),{bidp1:I,bidp2:O,bidp3:b,bidp4:_,bidp5:V,bidp6:N,bidp7:F,bidp8:B,bidp9:Z,bidp10:U}=t,Je=[I,O,b,_,V,N,F,B,Z,U].map(q=>parseInt(q)).filter(q=>q!==0),be=()=>{j?i!==0&&!Je.includes(i)?d(!1):d(!0):i!==0&&!$.includes(i)?d(!1):d(!0)};m.useEffect(()=>{be()},[i,j]);const Te=()=>{r(ut(k))},ke=()=>{r(pt(k))},et=q=>{q.code==="ArrowUp"?Te():q.code==="ArrowDown"&&ke()},tt=q=>{const Ce=q.target.value,H=parseInt(Ce,10);if(H<0||isNaN(H)){Ce===""&&r(ee(0));return}if(s!==null&&clearTimeout(s),r(ee(H)),H>k&&H%k!==0){const nt=setTimeout(()=>{const ot=H%k,rt=H-ot;r(ee(rt))},800);u(nt)}};return m.useEffect(()=>{r(ee(h))},[n]),o.jsxs(Gt,{children:[o.jsx("div",{className:"PriceCategoryBox",children:o.jsx("div",{className:"Title",children:Ut})}),o.jsxs("div",{className:"PriceSettingBox",children:[o.jsx(Kt,{value:i,onChange:tt,onKeyDown:et,onFocus:be}),o.jsx(Yt,{children:Ht}),o.jsxs("div",{className:"DirectionBox",children:[o.jsx("button",{className:"PriceUp",onClick:Te,children:"⋀"}),o.jsx("button",{className:"PriceDown",onClick:ke,children:"⋁"})]})]}),o.jsx(Xt,{$orderPossibility:w,children:o.jsxs("div",{children:["✔ ",w?`${Wt}`:`${Qt}`]})})]})};Ke.propTypes={stockInfo:f.shape({stockAsBiId:f.number.isRequired,companyId:f.number.isRequired,askp1:f.string.isRequired,askp2:f.string.isRequired,askp3:f.string.isRequired,askp4:f.string.isRequired,askp5:f.string.isRequired,askp6:f.string.isRequired,askp7:f.string.isRequired,askp8:f.string.isRequired,askp9:f.string.isRequired,askp10:f.string.isRequired,askp_rsqn1:f.string.isRequired,askp_rsqn2:f.string.isRequired,askp_rsqn3:f.string.isRequired,askp_rsqn4:f.string.isRequired,askp_rsqn5:f.string.isRequired,askp_rsqn6:f.string.isRequired,askp_rsqn7:f.string.isRequired,askp_rsqn8:f.string.isRequired,askp_rsqn9:f.string.isRequired,askp_rsqn10:f.string.isRequired,bidp1:f.string.isRequired,bidp2:f.string.isRequired,bidp3:f.string.isRequired,bidp4:f.string.isRequired,bidp5:f.string.isRequired,bidp6:f.string.isRequired,bidp7:f.string.isRequired,bidp8:f.string.isRequired,bidp9:f.string.isRequired,bidp10:f.string.isRequired,bidp_rsqn1:f.string.isRequired,bidp_rsqn2:f.string.isRequired,bidp_rsqn3:f.string.isRequired,bidp_rsqn4:f.string.isRequired,bidp_rsqn5:f.string.isRequired,bidp_rsqn6:f.string.isRequired,bidp_rsqn7:f.string.isRequired,bidp_rsqn8:f.string.isRequired,bidp_rsqn9:f.string.isRequired,bidp_rsqn10:f.string.isRequired}).isRequired,companyId:f.number.isRequired};const Gt=C.div`
    position: relative;
    width: 100%;
    margin-top: 21px;
    margin-bottom: 34px;

    .PriceCategoryBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 8px;

        .Title {
            padding-left: 5px;
            font-size: 13px;
            color: #999999;
        }

        .ButtonContainer {
            position: relative;
            width: 100px;
            height: 25px;
            background-color: #f2f2f2;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2px;
        }
    }

    .PriceSettingBox {
        display: flex;
        flex-direction: row;
        

        .DirectionBox {
            display: flex;
            flex-direction: column;

            & button {
                width: 31px;
                height: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                border: 1px solid darkgray;
                border-radius: 0;

                &.PriceUp {
                    border-bottom: none;
                    border-radius: 0 0.2rem 0 0;
                }

                &.PriceDown {
                    border-radius: 0 0 0.2rem 0;
                }
            }
        }
    }
`,Kt=C.input`
    width: 100%;
    flex: 1 0 0;
    height: 30px;
    border: 1px solid darkgray;
    border-right: none;
    border-radius: 0.2rem 0 0 0.2rem;
    font-size: 15px;
    font-weight: 500;
    text-align: right;
    padding-bottom: 3px;
`,Yt=C.div`
    height: 30px;
    color: #999999;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
    border-top: 1px solid darkgray;
    border-bottom: 1px solid darkgray;
    background-color: #ffffff;
`,Xt=C.div`
    position: absolute;
    top: 61px;
    left: 2px;
    font-size: 0.77em;
    color: ${e=>e.$orderPossibility?"#2679ed":"#e22926"};
    transition: color 0.3s ease-in-out;
`,Zt=`${xe}/api/cash`,Jt=async e=>(await ne.get(`${Zt}/one/${e}`)).data.money,Ye=()=>{const e=S(u=>u.loginSlice),t=!!e.email,n=e.memberId,{data:r,isLoading:i,isError:s}=ye(["cash",n],()=>Jt(n),{enabled:t});return{cashData:r,cashLoading:i,cashError:s}},en=`${xe}/api/stock`,tn=async(e,t)=>(await ne.get(`${en}/stockholds/${e}`,{params:{companyId:t}})).data,nn=e=>{const t=S(l=>l.loginSlice),n=!!t.email,r=t.memberId,{data:i,isLoading:s,isError:u}=ye(["holdingStock",r,e],()=>tn(r,e),{enabled:n});return{holdingStockData:i,holdingStockLoading:s,holdingStockError:u}},on="수량",rn="최대",Oe="주",Se=10,Pe=25,Ee=50,Ne=100,ae="%",sn=()=>{const e=X(),{companyId:t}=ie(),n=S(c=>c.stockOrderTypeSlice),r=S(c=>c.stockOrderPriceSlice),i=S(c=>c.stockOrderVolumeSlice);let s=0;const{cashData:u}=Ye(),{holdingStockData:l}=nn(t);let a=0;if(u&&l){a=Math.trunc(r!==0?u/r:u/1);const c=l.filter(x=>x.companyId===t);c.length!==0&&(s=c[0].stockCount)}const g=()=>{n||i<a&&e(Re()),n&&i<s&&e(Re())},p=()=>{0<i&&e(ft())},T=c=>{c.code==="ArrowUp"?g():c.code==="ArrowDown"&&p()},v=c=>{const x=c.target.value,y=parseInt(x,10);if(y<0||isNaN(y)){x===""&&e(A(0));return}if(!n){if(a<y)return;e(A(y))}if(n){if(s<y)return;e(A(y))}},R=c=>{if(!n){const x=Math.trunc(a*(c/100));e(A(x))}if(n){const x=Math.trunc(s*(c/100));e(A(x))}};return m.useEffect(()=>{a<i&&e(A(a))},[a]),m.useEffect(()=>{e(A(0))},[t]),o.jsxs(an,{children:[o.jsxs(cn,{$orderType:n,children:[o.jsx("div",{className:"Title",children:on}),o.jsxs("div",{className:"MaximumVolumeContainer",children:[o.jsx("span",{children:rn}),o.jsx("span",{className:"maximumVolume",children:n?s:a}),o.jsx("span",{children:Oe})]})]}),o.jsxs(ln,{children:[o.jsx(dn,{value:i,onChange:v,onKeyDown:T}),o.jsx(pn,{children:Oe}),o.jsxs("div",{className:"DirectionContainer",children:[o.jsx("button",{className:"VolumeUp",onClick:g,children:"⋀"}),o.jsx("button",{className:"VolumeDown",onClick:p,children:"⋁"})]})]}),o.jsxs(un,{children:[o.jsxs("button",{onClick:()=>R(Se),children:[Se,ae]}),o.jsxs("button",{onClick:()=>R(Pe),children:[Pe,ae]}),o.jsxs("button",{onClick:()=>R(Ee),children:[Ee,ae]}),o.jsxs("button",{onClick:()=>R(Ne),children:[Ne,ae]})]})]})},an=C.div`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 56px;
`,cn=C.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;

    .Title {
        padding-left: 5px;
        font-size: 13px;
        color: #999999;
    }

    .MaximumVolumeContainer {
        display: flex;
        flex-direction: row;
        gap: 3px;

        & span {
            font-size: 14px;
            color: #999999;
        }

        .maximumVolume {
            color: ${e=>e.$orderType?"#3177d7":"#ed2926"};
        }
    }
`,ln=C.div`
    display: flex;
    flex-direction: row;

    .DirectionContainer {
        display: flex;
        flex-direction: column;

        & button {
            width: 31px;
            height: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            border: 1px solid darkgray;
            border-radius: 0;

            &.VolumeUp {
                border-bottom: none;
                border-radius: 0 0.2rem 0 0;
            }

            &.VolumeDown {
                border-radius: 0 0 0.2rem 0;
            }
        }
    }
`,dn=C.input`
    width: 100%;
    flex: 1 0 0;
    height: 30px;
    border: 1px solid darkgray;
    border-right: none;
    border-radius: 0.2rem 0 0 0.2rem;
    font-size: 15px;
    font-weight: 500;
    text-align: right;
    padding-bottom: 3px;
`,un=C.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
    gap: 8px;

    & button {
        width: 56px;
        height: 28px;
        border: none;
        border-radius: 0.2rem;
    }
`,pn=C.div`
    height: 30px;
    color: #999999;
    font-size: 13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
    border-top: 1px solid darkgray;
    border-bottom: 1px solid darkgray;
    background-color: #ffffff;
`,fn="최대",gn="원",mn="주문총액",hn="원",xn=()=>{let e="";const{cashData:t}=Ye();t&&(e=t.toLocaleString());const n=X(),r=S(p=>p.stockOrderTypeSlice),i=S(p=>p.stockOrderPriceSlice),s=S(p=>p.stockOrderVolumeSlice),[u,l]=m.useState(0),a=r?"매도":"매수",g=()=>{n(gt())};return m.useEffect(()=>{l(i*s)},[i,s]),m.useEffect(()=>{n(A(0)),l(0)},[r]),o.jsxs("div",{className:"container",children:[o.jsxs(yn,{$orderType:r,children:[o.jsx("span",{children:fn}),o.jsx("span",{className:"availableMoney",children:e}),o.jsx("span",{children:gn})]}),o.jsxs(vn,{children:[o.jsx("div",{className:"totalAmountText",children:mn}),o.jsx("div",{className:"totalAmount",children:u.toLocaleString()}),o.jsx("div",{children:hn})]}),o.jsx(bn,{$ordertype:r,onClick:g,children:a})]})},yn=C.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 4px;

    & span {
        font-size: 14px;
        color: ${e=>e.$orderType?"white":"#999999"};
    }

    .availableMoney {
        color: ${e=>e.$orderType?"white":"#ed2926"};
    }
`,vn=C.div`
    display: flex;
    flex-direction: row;
    margin-top: 4px;
    gap: 4px;

    & div {
        font-size: 13px;
        color: #999999;
        display: flex;
        align-items: center;
    }

    .totalAmountText {
        flex: 8 0 0;
    }

    .totalAmount {
        color: black;
        font-size: 15.5px;
    }
`,bn=C.button`
    width: 100%;
    height: 32px;
    margin-top: 16px;
    border: none;
    border-radius: 0.25rem;
    background-color: ${e=>e.$ordertype?"#2679ed":"#e22926"};
    transition: background-color 0.5s;
    color: #ffffff;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        background-color: ${e=>e.$ordertype?"#034baf":"#c20d09"};
        transition: background-color 0.5s ease;
    }
`,Tn="매수",kn="매도",Cn=()=>{const e=X(),t=S(a=>a.stockOrderTypeSlice),{companyId:n}=ie(),{stockInfo:r,stockInfoLoading:i,stockInfoError:s}=le(n);if(!r)return null;if(i)return o.jsx(o.Fragment,{});if(s)return o.jsx(o.Fragment,{});const u=()=>{e(mt())},l=()=>{e(ht())};return o.jsxs(wn,{children:[o.jsxs("div",{className:"OrderType",children:[o.jsx(jn,{onClick:u,$ordertype:t,children:Tn}),o.jsx(In,{onClick:l,$ordertype:t,children:kn})]}),o.jsx(Rn,{}),o.jsx(Ke,{stockInfo:r.stockAsBiResponseDto,companyId:Number(n)}),o.jsx(sn,{}),o.jsx(xn,{})]})},Rn=()=>{const e=S(t=>t.stockOrderTypeSlice);return o.jsx(On,{children:o.jsx(Sn,{$ordertype:e,children:o.jsx(Pn,{$ordertype:e})})})},wn=C.div`
    width: 51%;
    height: 100%;

    .OrderType {
        width: 100%;
        height: 31px;
        display: flex;
        flex-direction: row;
        color: #9999;
    }
`,jn=C.div`
    flex: 1 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31px;
    font-size: 14px;
    color: ${e=>!e.$ordertype&&"#e22926"};
    transition: color 0.5s;
`,In=C.div`
    flex: 1 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31px;
    font-size: 14px;
    color: ${e=>e.$ordertype&&"#2679ed"};
    transition: color 0.5s;
`,On=C.div`
    background-color: darkgray;
`,Sn=C.div`
    transform: translateX(${e=>e.$ordertype?"50%":"0"});
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 2px;
`,Pn=C.div`
    width: 50%;
    height: 2px;
    background-color: ${e=>e.$ordertype?"#2679ed":"#e22926"};
`,En="주문 실패",Nn="주문 수량이 없습니다",$n="입력하신 가격이 올바르지 않습니다",Dn="확인",qn="주문단가",Ln="주문수량",Bn="총 주문금액",$e="원",De="주",Mn="취소",Vn="확인",_n="요청이 완료되었습니다",Xe=({corpName:e})=>{const t=X(),n=S(y=>y.stockOrderTypeSlice),r=S(y=>y.stockOrderPriceSlice),i=S(y=>y.stockOrderVolumeSlice),s=S(y=>y.decisionWindowSlice),u=n?"매도":"매수",l=r.toLocaleString(),a=i.toLocaleString(),g=(r*i).toLocaleString(),T={...Be}[e]||Me,v=()=>{t(xt())},R=qt(),c=()=>{R.mutate();const{isLoading:y,isError:P}=R;y&&console.log("주식 주문 진행 중"),P&&console.log("주문 오류 발생"),E(o.jsxs(Un,{orderType:n,children:[o.jsxs("div",{className:"overview",children:[o.jsx("img",{src:T,alt:"stock logo"}),o.jsxs("div",{className:"orderInfo",children:[e," ",a,De]})]}),o.jsxs("div",{children:[o.jsxs("span",{className:"orderType",children:["✓ ",u]}),o.jsx("span",{children:_n})]})]}),{position:E.POSITION.BOTTOM_LEFT,hideProgressBar:!0}),t(A(0)),v()},x=r===0||i===0;return o.jsxs(o.Fragment,{children:[o.jsxs(An,{children:[o.jsx(At,{}),o.jsx(Cn,{})]}),s?x?o.jsx(zn,{children:o.jsxs("div",{className:"Container",children:[o.jsx("div",{className:"message01",children:En}),o.jsx("div",{className:"message02",children:r!==0?`${Nn}`:`${$n}`}),o.jsx("button",{onClick:v,children:Dn})]})}):o.jsx(Fn,{$orderType:n,children:o.jsxs("div",{className:"Container",children:[o.jsx("img",{className:"CorpLogo",src:T,alt:"stock logo"}),o.jsxs("div",{className:"OrderOverview",children:[o.jsx("span",{className:"CorpName",children:e}),o.jsx("span",{className:"OrderType",children:u})]}),o.jsxs("div",{className:"OrderContent",children:[o.jsxs("div",{className:"Price",children:[o.jsx("span",{className:"text",children:qn}),o.jsxs("span",{children:[l," ",$e]})]}),o.jsxs("div",{className:"Volume",children:[o.jsx("span",{className:"text",children:Ln}),o.jsxs("span",{children:[a," ",De]})]}),o.jsxs("div",{className:"TotalOrderAmout",children:[o.jsx("span",{className:"text",children:Bn}),o.jsxs("span",{children:[g," ",$e]})]}),o.jsxs("div",{className:"ButtonContainer",children:[o.jsx("button",{className:"cancel",onClick:v,children:Mn}),o.jsx("button",{className:"confirm",onClick:c,children:Vn})]})]})]})}):null]})};Xe.propTypes={corpName:f.string};const An=C.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`,zn=C.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    .Container {
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;

        width: 360px;
        height: 148px;
        padding: 16px;
        background-color: white;
        border-radius: 0.5rem;

        .message01 {
            font-size: 18.5px;
            font-weight: 500;
        }

        .message02 {
            font-size: 16.5px;
            font-weight: 400;
        }

        & button {
            width: 100%;
            height: 36px;
            border: none;
            border-radius: 0.5rem;
            font-size: 14.5px;
            color: white;
            background-color: #2f4f4f;
            margin-top: 12px;
        }
    }
`,Fn=C.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        z-index: 400;
    }

    .Container {
        z-index: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 328px;
        height: 345px;
        background-color: white;
        border: none;
        border-radius: 0.5rem;

        padding-left: 20px;
        padding-right: 20px;
        padding-top: 24px;

        .CorpLogo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .OrderOverview {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 6px;
            font-size: 18px;
            font-weight: 500;
            padding-top: 18px;
            padding-bottom: 28px;

            .OrderType {
                color: ${e=>e.$orderType?"#2679ed":"#e22926"};
            }
        }

        .OrderContent {
            width: 100%;
            font-size: 15px;

            & div {
                height: 24px;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-bottom: 40px;
            }

            .text {
                color: #292828;
            }

            .Volume {
                border-bottom: 0.1px solid #d3cece99;
            }

            .TotalOrderAmout {
                padding-top: 20px;
                padding-bottom: 45px;
            }
        }

        .ButtonContainer {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-top: 20px;
            gap: 12px;

            & button {
                width: 50%;
                height: 32px;
                border: none;
                border-radius: 0.25rem;
            }

            .cancel {
                color: ${e=>e.$orderType?"#2679ed":"#e22926"};
                background-color: ${e=>e.$orderType?"#dce9fc":"#fcdddb"};
            }

            .confirm {
                color: white;
                background-color: ${e=>e.$orderType?"#2679ed":"#e22926"};
            }
        }
    }
`,Un=C.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 14px;

    .overview {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 700;
        gap: 6px;
    }

    & img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        padding-bottom: 3px;
    }

    .orderType {
        color: ${e=>e.$orderType?"#2679ed":"#e22926"};
    }
`,Hn="로그인이 필요한 서비스입니다",Qn="StockHolm 로그인",Wn="코스피",Ze=({companyId:e})=>{const t=S(c=>c.loginSlice),{moveToLogin:n}=vt(),r=!!t.email,{stockInfo:i}=le(e);if(!i||!i.korName||!i.code||!i.stockInfResponseDto.prdy_ctrt)return null;const s=i.korName,u=i.code,l=parseInt(i.stockInfResponseDto.stck_prpr,10).toLocaleString(),a=parseFloat(i.stockInfResponseDto.prdy_ctrt),g=a>0?"▲":"▼",p=Math.abs(parseInt(i.stockInfResponseDto.prdy_vrss,10)).toLocaleString(),T=parseInt(i.stockInfResponseDto.acml_vol,10).toLocaleString(),R={...Be}[s]||Me;return o.jsx(Gn,{children:r?o.jsxs("div",{className:"mainContent",children:[o.jsxs(Yn,{$priceChangeRate:a,children:[o.jsx("img",{className:"CorpLogo",src:R,alt:"stock logo"}),o.jsxs("div",{className:"NameContainer",children:[o.jsxs("div",{className:"StockCode",children:[u," | ",Wn]}),o.jsx("div",{className:"CorpName",children:s})]}),o.jsx("div",{className:"StockPrice",children:l}),o.jsxs("div",{className:"PriceChangeAmount",children:[o.jsx("div",{className:"changeDirection",children:g}),p]}),o.jsxs("div",{className:"TransactionVolume ",children:[o.jsxs("div",{className:"PriceChangeRate",children:[a,"%"]}),o.jsxs(Xn,{children:[T,"주"]})]})]}),o.jsx(Zn,{children:o.jsx(Xe,{corpName:s})})]}):o.jsxs(Kn,{children:[o.jsx("div",{className:"Notification",children:Hn}),o.jsx("button",{className:"LoginButton",onClick:n,children:Qn})]})})};Ze.propTypes={companyId:f.number};const Gn=C.aside`
    z-index: 1;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 20px);
    height: 100%;
    background-color: #ffffff;

    .mainContent {
        height: 100%;
    }

    .ErrorContainer {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

        .ErrorMessage {
            font-size: 20px;
            color: #999999;
        }

        .ErrorCloseButton {
            width: 35%;
            height: 32px;
            color: white;
            background-color: #2f4f4f;
            border: none;
            border-radius: 0.5rem;
        }
    }
`,Kn=C.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .Notification {
        color: #999999;
    }

    .LoginButton {
        width: 170px;
        height: 32px;
        font-size: 15px;
        font-weight: 400;
        color: white;
        background-color: #2f4f4f;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
    }
`,Yn=C.section`
    border-bottom: 1px solid #ddd;
    width: calc(100vw - 20px);
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 8px;
    padding-left: 16px;
    gap: 9px;
    justify-content: space-evenly;
    position : fixed;
    background-color: white;
    z-index: 100;

    .CorpLogo {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    .NameContainer {
        height: 40px;
        display: flex;
        flex-direction: column;
    }

    .CorpName {
        font-size: 16px;
        font-weight: 500;
        color: #1c1c1c;
    }

    .StockCode {
        font-size: 12px;
        color: #999999;
    }
    .StockPrice {
        font-size: 19px;
        color: ${e=>e.$priceChangeRate>0?"#ed2926":e.$priceChangeRate===0?"black":"#3177d7"};
        font-weight: 550;
    }
    .PriceChangeRate{
        font-size: 19px;
        color: ${e=>e.$priceChangeRate>0?"#ed2926":e.$priceChangeRate===0?"black":"#3177d7"};
        display: flex;
        flex-direction: row;
        font-weight: 550;
    }
    .PriceChangeAmount {
        font-size: 14px;
        color: ${e=>e.$priceChangeRate>0?"#ed2926":e.$priceChangeRate===0?"black":"#3177d7"};
        display: flex;
        flex-direction: row;
        gap: 2px;
        .changeDirection {
            font-size: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`,Xn=C.div`
    white-space: nowrap;
    min-width: min-content;
    font-size: 11px;
    color: #999;
    font-weight: 400;
`,Zn=C.div`
    margin-top: 64px;
    padding-bottom: 130px;
`;function ro(){const{companyId:e}=ie();return o.jsx(Ze,{companyId:Number(e)})}export{ro as default};
