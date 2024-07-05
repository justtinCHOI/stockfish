import{G as x,_ as w,H as j,J as B,r as h,K as J,p as m,b as V,u as q,j as p,N as Q,m as Y}from"./index-DYQX_Bvf.js";import{u as Z}from"./useCustomCash-tZdJfiX_.js";function y(i,a){if(i==null)return{};var l={};for(var e in i)if({}.hasOwnProperty.call(i,e)){if(a.indexOf(e)>=0)continue;l[e]=i[e]}return l}function K(i,a){return i.classList?!!a&&i.classList.contains(a):(" "+(i.className.baseVal||i.className)+" ").indexOf(" "+a+" ")!==-1}function tt(i,a){i.classList?i.classList.add(a):K(i,a)||(typeof i.className=="string"?i.className=i.className+" "+a:i.setAttribute("class",(i.className&&i.className.baseVal||"")+" "+a))}function U(i,a){return i.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function et(i,a){i.classList?i.classList.remove(a):typeof i.className=="string"?i.className=U(i.className,a):i.setAttribute("class",U(i.className&&i.className.baseVal||"",a))}const F={disabled:!1},A=x.createContext(null);var W=function(a){return a.scrollTop},T="unmounted",g="exited",C="entering",S="entered",L="exiting",E=function(i){w(a,i);function a(e,n){var t;t=i.call(this,e,n)||this;var s=n,r=s&&!s.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?r?(o=g,t.appearStatus=C):o=S:e.unmountOnExit||e.mountOnEnter?o=T:o=g,t.state={status:o},t.nextCallback=null,t}a.getDerivedStateFromProps=function(n,t){var s=n.in;return s&&t.status===T?{status:g}:null};var l=a.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var t=null;if(n!==this.props){var s=this.state.status;this.props.in?s!==C&&s!==S&&(t=C):(s===C||s===S)&&(t=L)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,t,s,r;return t=s=r=n,n!=null&&typeof n!="number"&&(t=n.exit,s=n.enter,r=n.appear!==void 0?n.appear:s),{exit:t,enter:s,appear:r}},l.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===C){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:j.findDOMNode(this);s&&W(s)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===g&&this.setState({status:T})},l.performEnter=function(n){var t=this,s=this.props.enter,r=this.context?this.context.isMounting:n,o=this.props.nodeRef?[r]:[j.findDOMNode(this),r],c=o[0],u=o[1],f=this.getTimeouts(),v=r?f.appear:f.enter;if(!n&&!s||F.disabled){this.safeSetState({status:S},function(){t.props.onEntered(c)});return}this.props.onEnter(c,u),this.safeSetState({status:C},function(){t.props.onEntering(c,u),t.onTransitionEnd(v,function(){t.safeSetState({status:S},function(){t.props.onEntered(c,u)})})})},l.performExit=function(){var n=this,t=this.props.exit,s=this.getTimeouts(),r=this.props.nodeRef?void 0:j.findDOMNode(this);if(!t||F.disabled){this.safeSetState({status:g},function(){n.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:L},function(){n.props.onExiting(r),n.onTransitionEnd(s.exit,function(){n.safeSetState({status:g},function(){n.props.onExited(r)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},l.setNextCallback=function(n){var t=this,s=!0;return this.nextCallback=function(r){s&&(s=!1,t.nextCallback=null,n(r))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},l.onTransitionEnd=function(n,t){this.setNextCallback(t);var s=this.props.nodeRef?this.props.nodeRef.current:j.findDOMNode(this),r=n==null&&!this.props.addEndListener;if(!s||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=o[0],u=o[1];this.props.addEndListener(c,u)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===T)return null;var t=this.props,s=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=y(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(A.Provider,{value:null},typeof s=="function"?s(n,r):x.cloneElement(x.Children.only(s),r))},a}(x.Component);E.contextType=A;E.propTypes={};function N(){}E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:N,onEntering:N,onEntered:N,onExit:N,onExiting:N,onExited:N};E.UNMOUNTED=T;E.EXITED=g;E.ENTERING=C;E.ENTERED=S;E.EXITING=L;var nt=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return tt(a,e)})},D=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return et(a,e)})},_=function(i){w(a,i);function a(){for(var e,n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];return e=i.call.apply(i,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(r,o){var c=e.resolveArguments(r,o),u=c[0],f=c[1];e.removeClasses(u,"exit"),e.addClass(u,f?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(r,o)},e.onEntering=function(r,o){var c=e.resolveArguments(r,o),u=c[0],f=c[1],v=f?"appear":"enter";e.addClass(u,v,"active"),e.props.onEntering&&e.props.onEntering(r,o)},e.onEntered=function(r,o){var c=e.resolveArguments(r,o),u=c[0],f=c[1],v=f?"appear":"enter";e.removeClasses(u,v),e.addClass(u,v,"done"),e.props.onEntered&&e.props.onEntered(r,o)},e.onExit=function(r){var o=e.resolveArguments(r),c=o[0];e.removeClasses(c,"appear"),e.removeClasses(c,"enter"),e.addClass(c,"exit","base"),e.props.onExit&&e.props.onExit(r)},e.onExiting=function(r){var o=e.resolveArguments(r),c=o[0];e.addClass(c,"exit","active"),e.props.onExiting&&e.props.onExiting(r)},e.onExited=function(r){var o=e.resolveArguments(r),c=o[0];e.removeClasses(c,"exit"),e.addClass(c,"exit","done"),e.props.onExited&&e.props.onExited(r)},e.resolveArguments=function(r,o){return e.props.nodeRef?[e.props.nodeRef.current,r]:[r,o]},e.getClassNames=function(r){var o=e.props.classNames,c=typeof o=="string",u=c&&o?o+"-":"",f=c?""+u+r:o[r],v=c?f+"-active":o[r+"Active"],O=c?f+"-done":o[r+"Done"];return{baseClassName:f,activeClassName:v,doneClassName:O}},e}var l=a.prototype;return l.addClass=function(n,t,s){var r=this.getClassNames(t)[s+"ClassName"],o=this.getClassNames("enter"),c=o.doneClassName;t==="appear"&&s==="done"&&c&&(r+=" "+c),s==="active"&&n&&W(n),r&&(this.appliedClasses[t][s]=r,nt(n,r))},l.removeClasses=function(n,t){var s=this.appliedClasses[t],r=s.base,o=s.active,c=s.done;this.appliedClasses[t]={},r&&D(n,r),o&&D(n,o),c&&D(n,c)},l.render=function(){var n=this.props;n.classNames;var t=y(n,["classNames"]);return x.createElement(E,B({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(x.Component);_.defaultProps={classNames:""};_.propTypes={};function st(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function $(i,a){var l=function(t){return a&&h.isValidElement(t)?a(t):t},e=Object.create(null);return i&&h.Children.map(i,function(n){return n}).forEach(function(n){e[n.key]=l(n)}),e}function it(i,a){i=i||{},a=a||{};function l(u){return u in a?a[u]:i[u]}var e=Object.create(null),n=[];for(var t in i)t in a?n.length&&(e[t]=n,n=[]):n.push(t);var s,r={};for(var o in a){if(e[o])for(s=0;s<e[o].length;s++){var c=e[o][s];r[e[o][s]]=l(c)}r[o]=l(o)}for(s=0;s<n.length;s++)r[n[s]]=l(n[s]);return r}function b(i,a,l){return l[a]!=null?l[a]:i.props[a]}function rt(i,a){return $(i.children,function(l){return h.cloneElement(l,{onExited:a.bind(null,l),in:!0,appear:b(l,"appear",i),enter:b(l,"enter",i),exit:b(l,"exit",i)})})}function at(i,a,l){var e=$(i.children),n=it(a,e);return Object.keys(n).forEach(function(t){var s=n[t];if(h.isValidElement(s)){var r=t in a,o=t in e,c=a[t],u=h.isValidElement(c)&&!c.props.in;o&&(!r||u)?n[t]=h.cloneElement(s,{onExited:l.bind(null,s),in:!0,exit:b(s,"exit",i),enter:b(s,"enter",i)}):!o&&r&&!u?n[t]=h.cloneElement(s,{in:!1}):o&&r&&h.isValidElement(c)&&(n[t]=h.cloneElement(s,{onExited:l.bind(null,s),in:c.props.in,exit:b(s,"exit",i),enter:b(s,"enter",i)}))}}),n}var ot=Object.values||function(i){return Object.keys(i).map(function(a){return i[a]})},lt={component:"div",childFactory:function(a){return a}},P=function(i){w(a,i);function a(e,n){var t;t=i.call(this,e,n)||this;var s=t.handleExited.bind(st(t));return t.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},t}var l=a.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(n,t){var s=t.children,r=t.handleExited,o=t.firstRender;return{children:o?rt(n,r):at(n,s,r),firstRender:!1}},l.handleExited=function(n,t){var s=$(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(r){var o=B({},r.children);return delete o[n.key],{children:o}}))},l.render=function(){var n=this.props,t=n.component,s=n.childFactory,r=y(n,["component","childFactory"]),o=this.state.contextValue,c=ot(this.state.children).map(s);return delete r.appear,delete r.enter,delete r.exit,t===null?x.createElement(A.Provider,{value:o},c):x.createElement(A.Provider,{value:o},x.createElement(t,r,c))},a}(x.Component);P.propTypes={};P.defaultProps=lt;const ct=[{cashId:"",accountNumber:"",money:"",dollar:""}],ut="",dt=()=>{const i=V(d=>d.cashSlice),{doCreateCash:a,doGetCashList:l,doDeleteCash:e,doUpdateCashId:n}=Z(),[t,s]=h.useState(ct),[r,o]=h.useState(ut),c=V(d=>d.loginSlice),u=c.memberId,f=q();h.useEffect(()=>{l(u).then(d=>{console.log("cashList : ",d)})},[c.email]),h.useEffect(()=>{s(i.cashList),o(i.cashId)},[i]);const v=d=>{e(d).then(I=>{console.log("cashList : ",I)})},O=()=>{a(u).then(d=>{console.log("created Cash",d)})},X=d=>{n(d)},H=d=>{f(`../charge/${d}`)},z=d=>{f(`../exchange/${d}`)};return p.jsxs(ft,{children:[p.jsx(P,{children:t.map((d,I)=>p.jsx(_,{timeout:3e3,classNames:"fade",children:p.jsxs(ht,{$active:d.cashId===r,onClick:()=>X(d.cashId),children:[p.jsxs(M,{children:[p.jsx(R,{children:"계좌번호:"}),p.jsx(k,{children:d.accountNumber})]}),p.jsxs(M,{children:[p.jsx(R,{children:"원화량:"}),p.jsxs(k,{children:[d.money,"원"]})]}),p.jsxs(M,{children:[p.jsx(R,{children:"외화량:"}),p.jsxs(k,{children:[d.dollar,"달러"]})]}),p.jsxs(xt,{children:[p.jsx(G,{onClick:()=>z(d.cashId),children:"환전"}),p.jsx(G,{onClick:()=>H(d.cashId),children:"충전"}),p.jsx(vt,{onClick:()=>v(d.cashId),children:p.jsx(Q,{})})]})]})},I))}),p.jsx(mt,{onClick:O,children:"계좌 추가"}),p.jsx(Y,{})]})},pt=J`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,ft=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  
    .fade-enter {
        opacity: 0;
        transform: scale(0.9);
    }
    .fade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: opacity 3000ms, transform 3000ms;
    }
    .fade-exit {
        opacity: 1;
        transform: scale(1);
    }
    .fade-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: opacity 3000ms, transform 3000ms;
    }
`,ht=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${({$active:i})=>i?"#83b9f4":"#ccc"};
    padding: 10px;
    margin: 10px;
    width: 100%;
    border-radius: 5px;
    animation: ${pt} 3s;
    cursor: pointer; // 클릭 가능한 영역 표시
`,M=m.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0;
`,R=m.div`
    font-weight: bold;
    margin-right: 10px;
`,k=m.div`
    margin-left: auto;
`,xt=m.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`,G=m.button`
    height: 40px;
    width: 40%;
    margin: 5px;
    padding: 5px;
    border: 2px solid #0056b3;
    color: #0056b3;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #0056b3;
        color: white;
    }
`,vt=m.button`
    width: 40px;
    margin: 5px;
    padding: 5px;
    border: 2px solid red;
    color: red;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: red;
        color: white;
    }
`,mt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    border: 2px solid #0056b3;
    color: #0056b3;
    cursor: pointer;
`,Ct=()=>p.jsx(dt,{});export{Ct as default};
