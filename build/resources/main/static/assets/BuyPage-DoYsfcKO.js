import{_ as it,J as pe,X as st,Y as qe,Z as at,G as Q,$ as ct,a0 as Le,a1 as lt,P as f,r as m,a2 as ne,a3 as dt,n as ie,b as S,D as xe,p as C,y as X,j as r,a4 as ee,a5 as ut,a6 as pt,a7 as A,a8 as Re,a9 as ft,aa as gt,ab as mt,ac as ht,ad as xt}from"./index-DYQX_Bvf.js";import{s as yt,u as ye,l as Be}from"./companyLogos-gEX9hSVN.js";import{d as Me}from"./CentralSectionMenu-dummyImg-CRG5GB_j.js";import{u as vt}from"./useCustomLogin-D-c7Hfbh.js";var bt=function(e){it(t,e);function t(o,s){var i;return i=e.call(this)||this,i.client=o,i.setOptions(s),i.bindMethods(),i.updateResult(),i}var n=t.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(s){this.options=this.client.defaultMutationOptions(s)},n.onUnsubscribe=function(){if(!this.listeners.length){var s;(s=this.currentMutation)==null||s.removeObserver(this)}},n.onMutationUpdate=function(s){this.updateResult();var i={listeners:!0};s.type==="success"?i.onSuccess=!0:s.type==="error"&&(i.onError=!0),this.notify(i)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(s,i){return this.mutateOptions=i,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,pe({},this.options,{variables:typeof s<"u"?s:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var s=this.currentMutation?this.currentMutation.state:st(),i=pe({},s,{isLoading:s.status==="loading",isSuccess:s.status==="success",isError:s.status==="error",isIdle:s.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=i},n.notify=function(s){var i=this;qe.batch(function(){i.mutateOptions&&(s.onSuccess?(i.mutateOptions.onSuccess==null||i.mutateOptions.onSuccess(i.currentResult.data,i.currentResult.variables,i.currentResult.context),i.mutateOptions.onSettled==null||i.mutateOptions.onSettled(i.currentResult.data,null,i.currentResult.variables,i.currentResult.context)):s.onError&&(i.mutateOptions.onError==null||i.mutateOptions.onError(i.currentResult.error,i.currentResult.variables,i.currentResult.context),i.mutateOptions.onSettled==null||i.mutateOptions.onSettled(void 0,i.currentResult.error,i.currentResult.variables,i.currentResult.context))),s.listeners&&i.listeners.forEach(function(u){u(i.currentResult)})})},t}(at);function Tt(e,t,n){var o=Q.useRef(!1),s=Q.useState(0),i=s[1],u=ct(e,t,n),c=Le(),a=Q.useRef();a.current?a.current.setOptions(u):a.current=new bt(c,u);var g=a.current.getCurrentResult();Q.useEffect(function(){o.current=!0;var k=a.current.subscribe(qe.batchCalls(function(){o.current&&i(function(v){return v+1})}));return function(){o.current=!1,k()}},[]);var p=Q.useCallback(function(k,v){a.current.mutate(k,v).catch(lt)},[]);if(g.error&&yt(void 0,a.current.options.useErrorBoundary,[g.error]))throw g.error;return pe({},g,{mutate:p,mutateAsync:g.mutate})}const le=e=>{const[t,n]=m.useState(!1),o=new Date,[s,i,u,c]=[o.getMonth(),o.getDate(),o.getHours(),o.getMinutes()],a=c===0||c===30?"30 or 60":0<c&&c<30?"1~29":"31~59",g=`${s}월 ${i}일 ${u}시 ${a}`;m.useEffect(()=>{if(c===0||c===30)n(!0);else if(0<c&&c<30){const l=(30-c)*6e4;setTimeout(()=>{R(),n(!0)},l)}else if(30<c&&c<60){const l=(60-c)*6e4;setTimeout(()=>{R(),n(!0)},l)}},[]);const{data:p,isLoading:k,error:v,refetch:R}=ye(`stockInfo${e} ${g}}`,()=>kt(e),{enabled:!0,refetchInterval:t?6e4*10:!1});return{stockInfo:p,stockInfoLoading:k,stockInfoError:v}},kt=async e=>(await ne.get(`http://localhost:8080/api/company/${e}`)).data;le.propTypes={companyId:f.number};function Ve(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ve(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function W(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=Ve(e))&&(o&&(o+=" "),o+=t);return o}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},G.apply(this,arguments)}function Ct(e,t){if(e==null)return{};var n={},o=Object.keys(e),s,i;for(i=0;i<o.length;i++)s=o[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function oe(e){return typeof e=="number"&&!isNaN(e)}function J(e){return typeof e=="boolean"}function re(e){return typeof e=="string"}function L(e){return typeof e=="function"}function ce(e){return re(e)||L(e)?e:null}function fe(e){return e===0||e}function Rt(e,t){return e===!1||oe(e)&&e>0?e:t}var _e=!!(typeof window<"u"&&window.document&&window.document.createElement);function ue(e){return m.isValidElement(e)||re(e)||L(e)||oe(e)}var Ae={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},z={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function wt(e,t,n){n===void 0&&(n=300);var o=e.scrollHeight,s=e.style;requestAnimationFrame(function(){s.minHeight="initial",s.height=o+"px",s.transition="all "+n+"ms",requestAnimationFrame(function(){s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function jt(e){var t=e.enter,n=e.exit,o=e.appendPosition,s=o===void 0?!1:o,i=e.collapse,u=i===void 0?!0:i,c=e.collapseDuration,a=c===void 0?300:c;return function(p){var k=p.children,v=p.position,R=p.preventExitTransition,l=p.done,x=p.nodeRef,y=p.isIn,P=s?t+"--"+v:t,D=s?n+"--"+v:n,$=m.useRef(),h=m.useRef(0);m.useLayoutEffect(function(){T()},[]),m.useEffect(function(){y||(R?d():w())},[y]);function T(){var I=x.current;$.current=I.className,I.className+=" "+P,I.addEventListener("animationend",j)}function j(){var I=x.current;I.removeEventListener("animationend",j),h.current===0&&(I.className=$.current)}function w(){h.current=1;var I=x.current;I.className+=" "+D,I.addEventListener("animationend",d)}function d(){var I=x.current;I.removeEventListener("animationend",d),u?wt(I,l,a):l()}return Q.createElement(Q.Fragment,null,k)}}var M={list:new Map,emitQueue:new Map,on:function(t,n){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(n),this},off:function(t,n){if(n){var o=this.list.get(t).filter(function(s){return s!==n});return this.list.set(t,o),this}return this.list.delete(t),this},cancelEmit:function(t){var n=this.emitQueue.get(t);return n&&(n.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){for(var n=this,o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];this.list.has(t)&&this.list.get(t).forEach(function(u){var c=setTimeout(function(){u.apply(void 0,s)},0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(c)})}};function K(e,t){t===void 0&&(t=!1);var n=m.useRef(e);return m.useEffect(function(){t&&(n.current=e)}),n.current}function It(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter(function(n){return n!==t.staleId});case 1:return fe(t.toastId)?e.filter(function(n){return n!==t.toastId}):[]}}function Ot(e){var t=m.useReducer(function(h){return h+1},0),n=t[1],o=m.useReducer(It,[]),s=o[0],i=o[1],u=m.useRef(null),c=K(0),a=K([]),g=K({}),p=K({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:k,getToast:function(T){return g[T]||null}});m.useEffect(function(){return p.containerId=e.containerId,M.cancelEmit(3).on(0,y).on(1,function(h){return u.current&&R(h)}).on(5,v).emit(2,p),function(){return M.emit(3,p)}},[]),m.useEffect(function(){p.isToastActive=k,p.displayedToast=s.length,M.emit(4,s.length,e.containerId)},[s]),m.useEffect(function(){p.props=e});function k(h){return s.indexOf(h)!==-1}function v(h){var T=h.containerId,j=p.props,w=j.limit,d=j.enableMultiContainer;w&&(!T||p.containerId===T&&d)&&(c-=a.length,a=[])}function R(h){i({type:1,toastId:h})}function l(){var h=a.shift(),T=h.toastContent,j=h.toastProps,w=h.staleId;P(T,j,w)}function x(h){var T=h.containerId,j=h.toastId,w=h.updateId;return!!(!u.current||p.props.enableMultiContainer&&T!==p.props.containerId||g[j]&&w==null)}function y(h,T){var j=T.delay,w=T.staleId,d=Ct(T,["delay","staleId"]);if(!(!ue(h)||x(d))){var I=d.toastId,O=d.updateId,b=p.props,_=function(){return R(I)},V=d.updateId==null;V&&c++;var N={toastId:I,updateId:O,isIn:!1,key:d.key||p.toastKey++,type:d.type,closeToast:_,closeButton:d.closeButton,rtl:b.rtl,position:d.position||b.position,transition:d.transition||b.transition,className:ce(d.className||b.toastClassName),bodyClassName:ce(d.bodyClassName||b.bodyClassName),style:d.style||b.toastStyle,bodyStyle:d.bodyStyle||b.bodyStyle,onClick:d.onClick||b.onClick,pauseOnHover:J(d.pauseOnHover)?d.pauseOnHover:b.pauseOnHover,pauseOnFocusLoss:J(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:b.pauseOnFocusLoss,draggable:J(d.draggable)?d.draggable:b.draggable,draggablePercent:oe(d.draggablePercent)?d.draggablePercent:b.draggablePercent,draggableDirection:d.draggableDirection||b.draggableDirection,closeOnClick:J(d.closeOnClick)?d.closeOnClick:b.closeOnClick,progressClassName:ce(d.progressClassName||b.progressClassName),progressStyle:d.progressStyle||b.progressStyle,autoClose:Rt(d.autoClose,b.autoClose),hideProgressBar:J(d.hideProgressBar)?d.hideProgressBar:b.hideProgressBar,progress:d.progress,role:re(d.role)?d.role:b.role,deleteToast:function(){D(I)}};L(d.onOpen)&&(N.onOpen=d.onOpen),L(d.onClose)&&(N.onClose=d.onClose),N.draggableDirection==="y"&&N.draggablePercent===80&&(N.draggablePercent*=1.5);var F=b.closeButton;d.closeButton===!1||ue(d.closeButton)?F=d.closeButton:d.closeButton===!0&&(F=ue(b.closeButton)?b.closeButton:!0),N.closeButton=F;var B=h;m.isValidElement(h)&&!re(h.type)?B=m.cloneElement(h,{closeToast:_,toastProps:N}):L(h)&&(B=h({closeToast:_,toastProps:N})),b.limit&&b.limit>0&&c>b.limit&&V?a.push({toastContent:B,toastProps:N,staleId:w}):oe(j)&&j>0?setTimeout(function(){P(B,N,w)},j):P(B,N,w)}}function P(h,T,j){var w=T.toastId;j&&delete g[j],g[w]={content:h,props:T},i({type:0,toastId:w,staleId:j})}function D(h){delete g[h];var T=a.length;if(c=fe(h)?c-1:c-p.displayedToast,c<0&&(c=0),T>0){var j=fe(h)?1:p.props.limit;if(T===1||j===1)p.displayedToast++,l();else{var w=j>T?T:j;p.displayedToast=w;for(var d=0;d<w;d++)l()}}else n()}function $(h){for(var T={},j=e.newestOnTop?Object.keys(g).reverse():Object.keys(g),w=0;w<j.length;w++){var d=g[j[w]],I=d.props.position;T[I]||(T[I]=[]),T[I].push(d)}return Object.keys(T).map(function(O){return h(O,T[O])})}return{getToastToRender:$,collection:g,containerRef:u,isToastActive:k}}function we(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function je(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function St(e){var t=m.useState(!0),n=t[0],o=t[1],s=m.useState(!1),i=s[0],u=s[1],c=m.useRef(null),a=K({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),g=K(e,!0),p=e.autoClose,k=e.pauseOnHover,v=e.closeToast,R=e.onClick,l=e.closeOnClick;m.useEffect(function(){return L(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),function(){L(g.onClose)&&g.onClose(m.isValidElement(g.children)&&g.children.props)}},[]),m.useEffect(function(){return e.draggable&&T(),function(){e.draggable&&j()}},[e.draggable]),m.useEffect(function(){return e.pauseOnFocusLoss&&$(),function(){e.pauseOnFocusLoss&&h()}},[e.pauseOnFocusLoss]);function x(O){if(e.draggable){var b=c.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=we(O.nativeEvent),a.y=je(O.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent/100))}}function y(){if(a.boundingRect){var O=a.boundingRect,b=O.top,_=O.bottom,V=O.left,N=O.right;e.pauseOnHover&&a.x>=V&&a.x<=N&&a.y>=b&&a.y<=_?D():P()}}function P(){o(!0)}function D(){o(!1)}function $(){document.hasFocus()||D(),window.addEventListener("focus",P),window.addEventListener("blur",D)}function h(){window.removeEventListener("focus",P),window.removeEventListener("blur",D)}function T(){document.addEventListener("mousemove",w),document.addEventListener("mouseup",d),document.addEventListener("touchmove",w),document.addEventListener("touchend",d)}function j(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",d),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",d)}function w(O){if(a.canDrag){O.preventDefault();var b=c.current;n&&D(),a.x=we(O),a.y=je(O),e.draggableDirection==="x"?a.delta=a.x-a.start:a.delta=a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform="translate"+e.draggableDirection+"("+a.delta+"px)",b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance))}}function d(){var O=c.current;if(a.canDrag){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance){u(!0),e.closeToast();return}O.style.transition="transform 0.2s, opacity 0.2s",O.style.transform="translate"+e.draggableDirection+"(0)",O.style.opacity="1"}}var I={onMouseDown:x,onTouchStart:x,onMouseUp:y,onTouchEnd:y};return p&&k&&(I.onMouseEnter=D,I.onMouseLeave=P),l&&(I.onClick=function(O){R&&R(O),a.canCloseOnClick&&v()}),{playToast:P,pauseToast:D,isRunning:n,preventExitTransition:i,toastRef:c,eventHandlers:I}}function ze(e){var t=e.closeToast,n=e.type,o=e.ariaLabel,s=o===void 0?"close":o;return m.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(u){u.stopPropagation(),t(u)},"aria-label":s},m.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},m.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Fe(e){var t,n,o=e.delay,s=e.isRunning,i=e.closeToast,u=e.type,c=e.hide,a=e.className,g=e.style,p=e.controlledProgress,k=e.progress,v=e.rtl,R=e.isIn,l=G({},g,{animationDuration:o+"ms",animationPlayState:s?"running":"paused",opacity:c?0:1});p&&(l.transform="scaleX("+k+")");var x=W("Toastify__progress-bar",p?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,(t={},t["Toastify__progress-bar--rtl"]=v,t)),y=L(a)?a({rtl:v,type:u,defaultClassName:x}):W(x,a),P=(n={},n[p&&k>=1?"onTransitionEnd":"onAnimationEnd"]=p&&k<1?null:function(){R&&i()},n);return m.createElement("div",Object.assign({role:"progressbar",className:y,style:l},P))}Fe.defaultProps={type:z.DEFAULT,hide:!1};var Pt=function(t){var n,o=St(t),s=o.isRunning,i=o.preventExitTransition,u=o.toastRef,c=o.eventHandlers,a=t.closeButton,g=t.children,p=t.autoClose,k=t.onClick,v=t.type,R=t.hideProgressBar,l=t.closeToast,x=t.transition,y=t.position,P=t.className,D=t.style,$=t.bodyClassName,h=t.bodyStyle,T=t.progressClassName,j=t.progressStyle,w=t.updateId,d=t.role,I=t.progress,O=t.rtl,b=t.toastId,_=t.deleteToast,V=t.isIn,N=W("Toastify__toast","Toastify__toast--"+v,(n={},n["Toastify__toast--rtl"]=O,n)),F=L(P)?P({rtl:O,position:y,type:v,defaultClassName:N}):W(N,P),B=!!I;function Z(U){if(U){var de={closeToast:l,type:v};if(L(U))return U(de);if(m.isValidElement(U))return m.cloneElement(U,de)}}return m.createElement(x,{isIn:V,done:_,position:y,preventExitTransition:i,nodeRef:u},m.createElement("div",Object.assign({id:b,onClick:k,className:F},c,{style:D,ref:u}),m.createElement("div",Object.assign({},V&&{role:d},{className:L($)?$({type:v}):W("Toastify__toast-body",$),style:h}),g),Z(a),(p||B)&&m.createElement(Fe,Object.assign({},w&&!B?{key:"pb-"+w}:{},{rtl:O,delay:p,isRunning:s,isIn:V,closeToast:l,hide:R,type:v,style:j,className:T,controlledProgress:B,progress:I}))))},Et=jt({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),Ue=function(t){var n=Ot(t),o=n.getToastToRender,s=n.containerRef,i=n.isToastActive,u=t.className,c=t.style,a=t.rtl,g=t.containerId;function p(k){var v,R=W("Toastify__toast-container","Toastify__toast-container--"+k,(v={},v["Toastify__toast-container--rtl"]=a,v));return L(u)?u({position:k,rtl:a,defaultClassName:R}):W(R,ce(u))}return m.createElement("div",{ref:s,className:"Toastify",id:g},o(function(k,v){var R=v.length===0?G({},c,{pointerEvents:"none"}):G({},c);return m.createElement("div",{className:p(k),style:R,key:"container-"+k},v.map(function(l){var x=l.content,y=l.props;return m.createElement(Pt,Object.assign({},y,{isIn:i(y.toastId),key:"toast-"+y.key,closeButton:y.closeButton===!0?ze:y.closeButton}),x)}))}))};Ue.defaultProps={position:Ae.TOP_RIGHT,transition:Et,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:ze,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var Y=new Map,ge,te,He,me=[],he=!1;function Nt(){return Y.size>0}function $t(e,t){var n=t.containerId,o=Y.get(n||ge);return o?o.getToast(e):null}function Qe(){return Math.random().toString(36).substr(2,9)}function Dt(e){return e&&(re(e.toastId)||oe(e.toastId))?e.toastId:Qe()}function ve(e,t){return Nt()?M.emit(0,e,t):(me.push({content:e,options:t}),he&&_e&&(he=!1,te=document.createElement("div"),document.body.appendChild(te),dt.render(m.createElement(Ue,Object.assign({},He)),te))),t.toastId}function We(e,t){return G({},t,{type:t&&t.type||e,toastId:Dt(t)})}var se=function(t){return function(n,o){return ve(n,We(t,o))}},E=function(t,n){return ve(t,We(z.DEFAULT,n))};E.success=se(z.SUCCESS);E.info=se(z.INFO);E.error=se(z.ERROR);E.warning=se(z.WARNING);E.dark=se(z.DARK);E.warn=E.warning;E.dismiss=function(e){return M.emit(1,e)};E.clearWaitingQueue=function(e){return e===void 0&&(e={}),M.emit(5,e)};E.isActive=function(e){var t=!1;return Y.forEach(function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t};E.update=function(e,t){t===void 0&&(t={}),setTimeout(function(){var n=$t(e,t);if(n){var o=n.props,s=n.content,i=G({},o,t,{toastId:t.toastId||e,updateId:Qe()});i.toastId!==e&&(i.staleId=e);var u=i.render||s;delete i.render,ve(u,i)}},0)};E.done=function(e){E.update(e,{progress:1})};E.onChange=function(e){return L(e)&&M.on(4,e),function(){L(e)&&M.off(4,e)}};E.configure=function(e){e===void 0&&(e={}),he=!0,He=e};E.POSITION=Ae;E.TYPE=z;M.on(2,function(e){ge=e.containerId||e,Y.set(ge,e),me.forEach(function(t){M.emit(0,t.content,t.options)}),me=[]}).on(3,function(e){Y.delete(e.containerId||e),Y.size===0&&M.off(0).off(1).off(5),_e&&te&&document.body.removeChild(te)});const Ie=`${xe}/api/stock`,qt=()=>{const{companyId:e}=ie(),t=S(c=>c.stockOrderTypeSlice),n=S(c=>c.stockOrderPriceSlice),o=S(c=>c.stockOrderVolumeSlice),i=S(c=>c.loginSlice).memberId,u=Le();return Tt(()=>Lt(t,e,n,o,i),{onSuccess:()=>{u.invalidateQueries("cash"),u.invalidateQueries("holdingStock"),u.invalidateQueries("orderRecord"),u.invalidateQueries("stockHolds"),u.invalidateQueries("money")}})},Lt=async(e,t,n,o,s)=>e?(await ne.post(`${Ie}/stock/sell?companyId=${t}&price=${n}&stockCount=${o}`)).data:(await ne.post(`${Ie}/buy?companyId=${t}&price=${n}&stockCount=${o}&memberId=${s}`)).data,Bt="%",Ge=e=>{const{index:t,price:n,volume:o,changeRate:s,totalSellingVolume:i,totalBuyingVolume:u}=e,c=X(),a=S(k=>k.stockOrderPriceSlice),g=m.useRef(null),p=()=>{c(ee(n))};return m.useEffect(()=>{t===9&&g.current&&(g.current.focus(),g.current.scrollIntoView({behavior:"smooth",block:"center"}))},[g,t]),r.jsxs(Mt,{$index:t,ref:t===9?g:null,$price:n,$orderPrice:a,onClick:p,children:[r.jsxs(Vt,{$changeRate:parseFloat(s),children:[r.jsx("div",{className:"price",children:n.toLocaleString()}),r.jsxs("div",{className:"changeRate",children:[s,Bt]})]}),r.jsx(_t,{$index:t,children:r.jsx("div",{className:"volume",children:o.toLocaleString()})})]})};Ge.propTypes={index:f.number.isRequired,price:f.number.isRequired,volume:f.number.isRequired,changeRate:f.string.isRequired,totalSellingVolume:f.number.isRequired,totalBuyingVolume:f.number.isRequired};f.number.isRequired,f.number.isRequired,f.number.isRequired,f.number.isRequired;const Mt=C.div`
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
`;const At=()=>{const{companyId:e}=ie(),t=S(l=>l.stockOrderTypeSlice),{stockInfo:n}=le(e);if(!n||!n.stockInfResponseDto||!n.stockAsBiResponseDto)return null;const o=parseInt(n.stockInfResponseDto.stck_prpr,10),s=parseInt(n.stockInfResponseDto.prdy_vrss,10),i=o-s,u=[],c=[];for(let l=1;l<11;l++){const x=`askp${l}`,y=`askp_rsqn${l}`,P=`bidp${l}`,D=`bidp_rsqn${l}`,$={price:parseInt(n.stockAsBiResponseDto[x]),volume:parseInt(n.stockAsBiResponseDto[y])},h={price:parseInt(n.stockAsBiResponseDto[P]),volume:parseInt(n.stockAsBiResponseDto[D])};u.unshift($),c.push(h)}const a=u.filter(l=>l.price!==0),g=c.filter(l=>l.price!==0),p=a[a.length-1].price-g[0].price;for(let l=0;a.length<10;l++){const x={price:a[0].price+p,volume:0};a.unshift(x)}for(let l=0;g.length<10;l++){const x={price:g[g.length-1].price-p,volume:0};g.push(x)}const k=[...a,...g],v=a.reduce((l,x)=>l=l+x.volume,0),R=g.reduce((l,x)=>l=l+x.volume,0);return r.jsx(zt,{$orderType:t,children:r.jsx(Ft,{children:k.map((l,x)=>{const y=((l.price-i)/i*100).toFixed(2);return r.jsx(Ge,{index:x,price:l.price,volume:l.volume,changeRate:y,totalSellingVolume:v,totalBuyingVolume:R},l.price)})})})},zt=C.div`
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
`,Ut="가격",Ht="원",Qt=" [거래량 없음] 주문 시 대기 처리 됩니다",Wt=" [거래량 있음] 주문 시 체결 처리 됩니다",Ke=e=>{const{stockInfo:t,companyId:n}=e,o=X(),s=S(q=>q.stockOrderPriceSlice),[i,u]=m.useState(null),{askp1:c,askp2:a,askp3:g,askp4:p,askp5:k,askp6:v,askp7:R,askp8:l,askp9:x,askp10:y}=t,$=[c,a,g,p,k,v,R,l,x,y].map(q=>parseInt(q)).filter(q=>q!==0),h=$[0],T=$[1]-$[0],j=S(q=>q.stockOrderTypeSlice),[w,d]=m.useState(!0),{bidp1:I,bidp2:O,bidp3:b,bidp4:_,bidp5:V,bidp6:N,bidp7:F,bidp8:B,bidp9:Z,bidp10:U}=t,Je=[I,O,b,_,V,N,F,B,Z,U].map(q=>parseInt(q)).filter(q=>q!==0),be=()=>{j?s!==0&&!Je.includes(s)?d(!1):d(!0):s!==0&&!$.includes(s)?d(!1):d(!0)};m.useEffect(()=>{be()},[s,j]);const Te=()=>{o(ut(T))},ke=()=>{o(pt(T))},et=q=>{q.code==="ArrowUp"?Te():q.code==="ArrowDown"&&ke()},tt=q=>{const Ce=q.target.value,H=parseInt(Ce,10);if(H<0||isNaN(H)){Ce===""&&o(ee(0));return}if(i!==null&&clearTimeout(i),o(ee(H)),H>T&&H%T!==0){const nt=setTimeout(()=>{const ot=H%T,rt=H-ot;o(ee(rt))},800);u(nt)}};return m.useEffect(()=>{o(ee(h))},[n]),r.jsxs(Gt,{children:[r.jsx("div",{className:"PriceCategoryBox",children:r.jsx("div",{className:"Title",children:Ut})}),r.jsxs("div",{className:"PriceSettingBox",children:[r.jsx(Kt,{value:s,onChange:tt,onKeyDown:et,onFocus:be}),r.jsx(Yt,{children:Ht}),r.jsxs("div",{className:"DirectionBox",children:[r.jsx("button",{className:"PriceUp",onClick:Te,children:"⋀"}),r.jsx("button",{className:"PriceDown",onClick:ke,children:"⋁"})]})]}),r.jsx(Xt,{$orderPossibility:w,children:r.jsxs("div",{children:["✔ ",w?`${Wt}`:`${Qt}`]})})]})};Ke.propTypes={stockInfo:f.shape({stockAsBiId:f.number.isRequired,companyId:f.number.isRequired,askp1:f.string.isRequired,askp2:f.string.isRequired,askp3:f.string.isRequired,askp4:f.string.isRequired,askp5:f.string.isRequired,askp6:f.string.isRequired,askp7:f.string.isRequired,askp8:f.string.isRequired,askp9:f.string.isRequired,askp10:f.string.isRequired,askp_rsqn1:f.string.isRequired,askp_rsqn2:f.string.isRequired,askp_rsqn3:f.string.isRequired,askp_rsqn4:f.string.isRequired,askp_rsqn5:f.string.isRequired,askp_rsqn6:f.string.isRequired,askp_rsqn7:f.string.isRequired,askp_rsqn8:f.string.isRequired,askp_rsqn9:f.string.isRequired,askp_rsqn10:f.string.isRequired,bidp1:f.string.isRequired,bidp2:f.string.isRequired,bidp3:f.string.isRequired,bidp4:f.string.isRequired,bidp5:f.string.isRequired,bidp6:f.string.isRequired,bidp7:f.string.isRequired,bidp8:f.string.isRequired,bidp9:f.string.isRequired,bidp10:f.string.isRequired,bidp_rsqn1:f.string.isRequired,bidp_rsqn2:f.string.isRequired,bidp_rsqn3:f.string.isRequired,bidp_rsqn4:f.string.isRequired,bidp_rsqn5:f.string.isRequired,bidp_rsqn6:f.string.isRequired,bidp_rsqn7:f.string.isRequired,bidp_rsqn8:f.string.isRequired,bidp_rsqn9:f.string.isRequired,bidp_rsqn10:f.string.isRequired}).isRequired,companyId:f.number.isRequired};const Gt=C.div`
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
`,Zt=`${xe}/api/cash`,Jt=async e=>(await ne.get(`${Zt}/one/${e}`)).data.money,Ye=()=>{const e=S(u=>u.loginSlice),t=!!e.email,n=e.memberId,{data:o,isLoading:s,isError:i}=ye(["cash",n],()=>Jt(n),{enabled:t});return{cashData:o,cashLoading:s,cashError:i}},en=`${xe}/api/stock`,tn=async(e,t)=>(await ne.get(`${en}/stockholds/${e}`,{params:{companyId:t}})).data,nn=e=>{const t=S(c=>c.loginSlice),n=!!t.email,o=t.memberId,{data:s,isLoading:i,isError:u}=ye(["holdingStock",o,e],()=>tn(o,e),{enabled:n});return{holdingStockData:s,holdingStockLoading:i,holdingStockError:u}},on="수량",rn="최대",Oe="주",Se=10,Pe=25,Ee=50,Ne=100,ae="%",sn=()=>{const e=X(),{companyId:t}=ie(),n=S(l=>l.stockOrderTypeSlice),o=S(l=>l.stockOrderPriceSlice),s=S(l=>l.stockOrderVolumeSlice);let i=0;const{cashData:u}=Ye(),{holdingStockData:c}=nn(t);let a=0;if(u&&c){a=Math.trunc(o!==0?u/o:u/1);const l=c.filter(x=>x.companyId===t);l.length!==0&&(i=l[0].stockCount)}const g=()=>{n||s<a&&e(Re()),n&&s<i&&e(Re())},p=()=>{0<s&&e(ft())},k=l=>{l.code==="ArrowUp"?g():l.code==="ArrowDown"&&p()},v=l=>{const x=l.target.value,y=parseInt(x,10);if(y<0||isNaN(y)){x===""&&e(A(0));return}if(!n){if(a<y)return;e(A(y))}if(n){if(i<y)return;e(A(y))}},R=l=>{if(!n){const x=Math.trunc(a*(l/100));e(A(x))}if(n){const x=Math.trunc(i*(l/100));e(A(x))}};return m.useEffect(()=>{a<s&&e(A(a))},[a]),m.useEffect(()=>{e(A(0))},[t]),r.jsxs(an,{children:[r.jsxs(cn,{$orderType:n,children:[r.jsx("div",{className:"Title",children:on}),r.jsxs("div",{className:"MaximumVolumeContainer",children:[r.jsx("span",{children:rn}),r.jsx("span",{className:"maximumVolume",children:n?i:a}),r.jsx("span",{children:Oe})]})]}),r.jsxs(ln,{children:[r.jsx(dn,{value:s,onChange:v,onKeyDown:k}),r.jsx(pn,{children:Oe}),r.jsxs("div",{className:"DirectionContainer",children:[r.jsx("button",{className:"VolumeUp",onClick:g,children:"⋀"}),r.jsx("button",{className:"VolumeDown",onClick:p,children:"⋁"})]})]}),r.jsxs(un,{children:[r.jsxs("button",{onClick:()=>R(Se),children:[Se,ae]}),r.jsxs("button",{onClick:()=>R(Pe),children:[Pe,ae]}),r.jsxs("button",{onClick:()=>R(Ee),children:[Ee,ae]}),r.jsxs("button",{onClick:()=>R(Ne),children:[Ne,ae]})]})]})},an=C.div`
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
`,fn="최대",gn="원",mn="주문총액",hn="원",xn=()=>{let e="";const{cashData:t}=Ye();t&&(e=t.toLocaleString());const n=X(),o=S(p=>p.stockOrderTypeSlice),s=S(p=>p.stockOrderPriceSlice),i=S(p=>p.stockOrderVolumeSlice),[u,c]=m.useState(0),a=o?"매도":"매수",g=()=>{n(gt())};return m.useEffect(()=>{c(s*i)},[s,i]),m.useEffect(()=>{n(A(0)),c(0)},[o]),r.jsxs("div",{className:"container",children:[r.jsxs(yn,{$orderType:o,children:[r.jsx("span",{children:fn}),r.jsx("span",{className:"availableMoney",children:e}),r.jsx("span",{children:gn})]}),r.jsxs(vn,{children:[r.jsx("div",{className:"totalAmountText",children:mn}),r.jsx("div",{className:"totalAmount",children:u.toLocaleString()}),r.jsx("div",{children:hn})]}),r.jsx(bn,{$ordertype:o,onClick:g,children:a})]})},yn=C.div`
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
`,Tn="매수",kn="매도",Cn=()=>{const e=X(),t=S(a=>a.stockOrderTypeSlice),{companyId:n}=ie(),{stockInfo:o,stockInfoLoading:s,stockInfoError:i}=le(n);if(!o)return null;if(s)return r.jsx(r.Fragment,{});if(i)return r.jsx(r.Fragment,{});const u=()=>{e(mt())},c=()=>{e(ht())};return r.jsxs(wn,{children:[r.jsxs("div",{className:"OrderType",children:[r.jsx(jn,{onClick:u,$ordertype:t,children:Tn}),r.jsx(In,{onClick:c,$ordertype:t,children:kn})]}),r.jsx(Rn,{}),r.jsx(Ke,{stockInfo:o.stockAsBiResponseDto,companyId:Number(n)}),r.jsx(sn,{}),r.jsx(xn,{})]})},Rn=()=>{const e=S(t=>t.stockOrderTypeSlice);return r.jsx(On,{children:r.jsx(Sn,{$ordertype:e,children:r.jsx(Pn,{$ordertype:e})})})},wn=C.div`
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
`,En="주문 실패",Nn="주문 수량이 없습니다",$n="입력하신 가격이 올바르지 않습니다",Dn="확인",qn="주문단가",Ln="주문수량",Bn="총 주문금액",$e="원",De="주",Mn="취소",Vn="확인",_n="요청이 완료되었습니다",Xe=({corpName:e})=>{const t=X(),n=S(y=>y.stockOrderTypeSlice),o=S(y=>y.stockOrderPriceSlice),s=S(y=>y.stockOrderVolumeSlice),i=S(y=>y.decisionWindowSlice),u=n?"매도":"매수",c=o.toLocaleString(),a=s.toLocaleString(),g=(o*s).toLocaleString(),k={...Be}[e]||Me,v=()=>{t(xt())},R=qt(),l=()=>{R.mutate();const{isLoading:y,isError:P}=R;y&&console.log("주식 주문 진행 중"),P&&console.log("주문 오류 발생"),E(r.jsxs(Un,{orderType:n,children:[r.jsxs("div",{className:"overview",children:[r.jsx("img",{src:k,alt:"stock logo"}),r.jsxs("div",{className:"orderInfo",children:[e," ",a,De]})]}),r.jsxs("div",{children:[r.jsxs("span",{className:"orderType",children:["✓ ",u]}),r.jsx("span",{children:_n})]})]}),{position:E.POSITION.BOTTOM_LEFT,hideProgressBar:!0}),t(A(0)),v()},x=o===0||s===0;return r.jsxs(r.Fragment,{children:[r.jsxs(An,{children:[r.jsx(At,{}),r.jsx(Cn,{})]}),i?x?r.jsx(zn,{children:r.jsxs("div",{className:"Container",children:[r.jsx("div",{className:"message01",children:En}),r.jsx("div",{className:"message02",children:o!==0?`${Nn}`:`${$n}`}),r.jsx("button",{onClick:v,children:Dn})]})}):r.jsx(Fn,{$orderType:n,children:r.jsxs("div",{className:"Container",children:[r.jsx("img",{className:"CorpLogo",src:k,alt:"stock logo"}),r.jsxs("div",{className:"OrderOverview",children:[r.jsx("span",{className:"CorpName",children:e}),r.jsx("span",{className:"OrderType",children:u})]}),r.jsxs("div",{className:"OrderContent",children:[r.jsxs("div",{className:"Price",children:[r.jsx("span",{className:"text",children:qn}),r.jsxs("span",{children:[c," ",$e]})]}),r.jsxs("div",{className:"Volume",children:[r.jsx("span",{className:"text",children:Ln}),r.jsxs("span",{children:[a," ",De]})]}),r.jsxs("div",{className:"TotalOrderAmout",children:[r.jsx("span",{className:"text",children:Bn}),r.jsxs("span",{children:[g," ",$e]})]}),r.jsxs("div",{className:"ButtonContainer",children:[r.jsx("button",{className:"cancel",onClick:v,children:Mn}),r.jsx("button",{className:"confirm",onClick:l,children:Vn})]})]})]})}):null]})};Xe.propTypes={corpName:f.string};const An=C.div`
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
`,Hn="로그인이 필요한 서비스입니다",Qn=()=>{const{moveToLogin:e}=vt();return r.jsxs(Wn,{children:[r.jsx("div",{className:"Notification",children:Hn}),r.jsx("button",{className:"LoginButton",onClick:e,children:loginBtnText})]})},Wn=C.div`
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
`,Gn="코스피",Ze=({companyId:e})=>{const n=!!S(R=>R.loginSlice).email,{stockInfo:o}=le(e);if(!o||!o.korName||!o.code||!o.stockInfResponseDto.prdy_ctrt)return null;const s=o.korName,i=o.code,u=parseInt(o.stockInfResponseDto.stck_prpr,10).toLocaleString(),c=parseFloat(o.stockInfResponseDto.prdy_ctrt),a=c>0?"▲":"▼",g=Math.abs(parseInt(o.stockInfResponseDto.prdy_vrss,10)).toLocaleString(),p=parseInt(o.stockInfResponseDto.acml_vol,10).toLocaleString(),v={...Be}[s]||Me;return r.jsx(Kn,{children:n?r.jsxs("div",{className:"mainContent",children:[r.jsxs(Yn,{$priceChangeRate:c,children:[r.jsx("img",{className:"CorpLogo",src:v,alt:"stock logo"}),r.jsxs("div",{className:"NameContainer",children:[r.jsxs("div",{className:"StockCode",children:[i," | ",Gn]}),r.jsx("div",{className:"CorpName",children:s})]}),r.jsx("div",{className:"StockPrice",children:u}),r.jsxs("div",{className:"PriceChangeAmount",children:[r.jsx("div",{className:"changeDirection",children:a}),g]}),r.jsxs("div",{className:"TransactionVolume ",children:[r.jsxs("div",{className:"PriceChangeRate",children:[c,"%"]}),r.jsxs(Xn,{children:[p,"주"]})]})]}),r.jsx(Zn,{children:r.jsx(Xe,{corpName:s})})]}):r.jsx(Qn,{})})};Ze.propTypes={companyId:f.number};const Kn=C.aside`
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
`;function ro(){const{companyId:e}=ie();return r.jsx(Ze,{companyId:Number(e)})}export{ro as default};
