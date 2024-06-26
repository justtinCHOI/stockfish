import{K as f,_ as D,Q as T,S as I,r as h,T as G,p as m,j as d,V as B,n as W}from"./index-BKtiLFc2.js";function y(i,a){if(i==null)return{};var l={};for(var e in i)if({}.hasOwnProperty.call(i,e)){if(a.indexOf(e)>=0)continue;l[e]=i[e]}return l}function X(i,a){return i.classList?!!a&&i.classList.contains(a):(" "+(i.className.baseVal||i.className)+" ").indexOf(" "+a+" ")!==-1}function z(i,a){i.classList?i.classList.add(a):X(i,a)||(typeof i.className=="string"?i.className=i.className+" "+a:i.setAttribute("class",(i.className&&i.className.baseVal||"")+" "+a))}function $(i,a){return i.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function H(i,a){i.classList?i.classList.remove(a):typeof i.className=="string"?i.className=$(i.className,a):i.setAttribute("class",$(i.className&&i.className.baseVal||"",a))}const V={disabled:!1},A=f.createContext(null);var F=function(a){return a.scrollTop},S="unmounted",E="exited",g="entering",N="entered",R="exiting",x=function(i){D(a,i);function a(e,n){var t;t=i.call(this,e,n)||this;var r=n,s=r&&!r.isMounting?e.enter:e.appear,o;return t.appearStatus=null,e.in?s?(o=E,t.appearStatus=g):o=N:e.unmountOnExit||e.mountOnEnter?o=S:o=E,t.state={status:o},t.nextCallback=null,t}a.getDerivedStateFromProps=function(n,t){var r=n.in;return r&&t.status===S?{status:E}:null};var l=a.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(n){var t=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==g&&r!==N&&(t=g):(r===g||r===N)&&(t=R)}this.updateStatus(!1,t)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var n=this.props.timeout,t,r,s;return t=r=s=n,n!=null&&typeof n!="number"&&(t=n.exit,r=n.enter,s=n.appear!==void 0?n.appear:r),{exit:t,enter:r,appear:s}},l.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===g){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this);r&&F(r)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:S})},l.performEnter=function(n){var t=this,r=this.props.enter,s=this.context?this.context.isMounting:n,o=this.props.nodeRef?[s]:[T.findDOMNode(this),s],u=o[0],c=o[1],p=this.getTimeouts(),v=s?p.appear:p.enter;if(!n&&!r||V.disabled){this.safeSetState({status:N},function(){t.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:g},function(){t.props.onEntering(u,c),t.onTransitionEnd(v,function(){t.safeSetState({status:N},function(){t.props.onEntered(u,c)})})})},l.performExit=function(){var n=this,t=this.props.exit,r=this.getTimeouts(),s=this.props.nodeRef?void 0:T.findDOMNode(this);if(!t||V.disabled){this.safeSetState({status:E},function(){n.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:R},function(){n.props.onExiting(s),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(s)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},l.setNextCallback=function(n){var t=this,r=!0;return this.nextCallback=function(s){r&&(r=!1,t.nextCallback=null,n(s))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},l.onTransitionEnd=function(n,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:T.findDOMNode(this),s=n==null&&!this.props.addEndListener;if(!r||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],u=o[0],c=o[1];this.props.addEndListener(u,c)}n!=null&&setTimeout(this.nextCallback,n)},l.render=function(){var n=this.state.status;if(n===S)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var s=y(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f.createElement(A.Provider,{value:null},typeof r=="function"?r(n,s):f.cloneElement(f.Children.only(r),s))},a}(f.Component);x.contextType=A;x.propTypes={};function b(){}x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b};x.UNMOUNTED=S;x.EXITED=E;x.ENTERING=g;x.ENTERED=N;x.EXITING=R;var Q=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return z(a,e)})},j=function(a,l){return a&&l&&l.split(" ").forEach(function(e){return H(a,e)})},_=function(i){D(a,i);function a(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=i.call.apply(i,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(s,o){var u=e.resolveArguments(s,o),c=u[0],p=u[1];e.removeClasses(c,"exit"),e.addClass(c,p?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(s,o)},e.onEntering=function(s,o){var u=e.resolveArguments(s,o),c=u[0],p=u[1],v=p?"appear":"enter";e.addClass(c,v,"active"),e.props.onEntering&&e.props.onEntering(s,o)},e.onEntered=function(s,o){var u=e.resolveArguments(s,o),c=u[0],p=u[1],v=p?"appear":"enter";e.removeClasses(c,v),e.addClass(c,v,"done"),e.props.onEntered&&e.props.onEntered(s,o)},e.onExit=function(s){var o=e.resolveArguments(s),u=o[0];e.removeClasses(u,"appear"),e.removeClasses(u,"enter"),e.addClass(u,"exit","base"),e.props.onExit&&e.props.onExit(s)},e.onExiting=function(s){var o=e.resolveArguments(s),u=o[0];e.addClass(u,"exit","active"),e.props.onExiting&&e.props.onExiting(s)},e.onExited=function(s){var o=e.resolveArguments(s),u=o[0];e.removeClasses(u,"exit"),e.addClass(u,"exit","done"),e.props.onExited&&e.props.onExited(s)},e.resolveArguments=function(s,o){return e.props.nodeRef?[e.props.nodeRef.current,s]:[s,o]},e.getClassNames=function(s){var o=e.props.classNames,u=typeof o=="string",c=u&&o?o+"-":"",p=u?""+c+s:o[s],v=u?p+"-active":o[s+"Active"],U=u?p+"-done":o[s+"Done"];return{baseClassName:p,activeClassName:v,doneClassName:U}},e}var l=a.prototype;return l.addClass=function(n,t,r){var s=this.getClassNames(t)[r+"ClassName"],o=this.getClassNames("enter"),u=o.doneClassName;t==="appear"&&r==="done"&&u&&(s+=" "+u),r==="active"&&n&&F(n),s&&(this.appliedClasses[t][r]=s,Q(n,s))},l.removeClasses=function(n,t){var r=this.appliedClasses[t],s=r.base,o=r.active,u=r.done;this.appliedClasses[t]={},s&&j(n,s),o&&j(n,o),u&&j(n,u)},l.render=function(){var n=this.props;n.classNames;var t=y(n,["classNames"]);return f.createElement(x,I({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(f.Component);_.defaultProps={classNames:""};_.propTypes={};function q(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function k(i,a){var l=function(t){return a&&h.isValidElement(t)?a(t):t},e=Object.create(null);return i&&h.Children.map(i,function(n){return n}).forEach(function(n){e[n.key]=l(n)}),e}function J(i,a){i=i||{},a=a||{};function l(c){return c in a?a[c]:i[c]}var e=Object.create(null),n=[];for(var t in i)t in a?n.length&&(e[t]=n,n=[]):n.push(t);var r,s={};for(var o in a){if(e[o])for(r=0;r<e[o].length;r++){var u=e[o][r];s[e[o][r]]=l(u)}s[o]=l(o)}for(r=0;r<n.length;r++)s[n[r]]=l(n[r]);return s}function C(i,a,l){return l[a]!=null?l[a]:i.props[a]}function Y(i,a){return k(i.children,function(l){return h.cloneElement(l,{onExited:a.bind(null,l),in:!0,appear:C(l,"appear",i),enter:C(l,"enter",i),exit:C(l,"exit",i)})})}function Z(i,a,l){var e=k(i.children),n=J(a,e);return Object.keys(n).forEach(function(t){var r=n[t];if(h.isValidElement(r)){var s=t in a,o=t in e,u=a[t],c=h.isValidElement(u)&&!u.props.in;o&&(!s||c)?n[t]=h.cloneElement(r,{onExited:l.bind(null,r),in:!0,exit:C(r,"exit",i),enter:C(r,"enter",i)}):!o&&s&&!c?n[t]=h.cloneElement(r,{in:!1}):o&&s&&h.isValidElement(u)&&(n[t]=h.cloneElement(r,{onExited:l.bind(null,r),in:u.props.in,exit:C(r,"exit",i),enter:C(r,"enter",i)}))}}),n}var K=Object.values||function(i){return Object.keys(i).map(function(a){return i[a]})},tt={component:"div",childFactory:function(a){return a}},L=function(i){D(a,i);function a(e,n){var t;t=i.call(this,e,n)||this;var r=t.handleExited.bind(q(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}var l=a.prototype;return l.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},l.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(n,t){var r=t.children,s=t.handleExited,o=t.firstRender;return{children:o?Y(n,s):Z(n,r,s),firstRender:!1}},l.handleExited=function(n,t){var r=k(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(s){var o=I({},s.children);return delete o[n.key],{children:o}}))},l.render=function(){var n=this.props,t=n.component,r=n.childFactory,s=y(n,["component","childFactory"]),o=this.state.contextValue,u=K(this.state.children).map(r);return delete s.appear,delete s.enter,delete s.exit,t===null?f.createElement(A.Provider,{value:o},u):f.createElement(A.Provider,{value:o},f.createElement(t,s,u))},a}(f.Component);L.propTypes={};L.defaultProps=tt;const et=()=>{const i=()=>Math.floor(Math.random()*1e4).toString().padStart(4,"0");return`${i()}-${i()}`},nt=()=>{const[i,a]=h.useState([{accountNumber:"123-456-789",wonAmount:1e3,foreignAmount:500},{accountNumber:"987-654-321",wonAmount:2e3,foreignAmount:1e3}]),l=()=>{const n={accountNumber:et(),wonAmount:0,foreignAmount:0};a(t=>[...t,n])},e=n=>{a(t=>t.filter((r,s)=>s!==n))};return d.jsxs(it,{children:[d.jsx(L,{children:i.map((n,t)=>d.jsx(_,{timeout:3e3,classNames:"fade",children:d.jsxs(st,{children:[d.jsxs(O,{children:[d.jsx(M,{children:"계좌번호:"}),d.jsx(w,{children:n.accountNumber})]}),d.jsxs(O,{children:[d.jsx(M,{children:"원화량:"}),d.jsxs(w,{children:[n.wonAmount,"원"]})]}),d.jsxs(O,{children:[d.jsx(M,{children:"외화량:"}),d.jsxs(w,{children:[n.foreignAmount,"달러"]})]}),d.jsxs(at,{children:[d.jsx(P,{children:"환전"}),d.jsx(P,{children:"충전"}),d.jsx(ot,{onClick:()=>e(t),children:d.jsx(B,{})})]})]})},t))}),d.jsx(lt,{onClick:l,children:"계좌 추가"}),d.jsx(W,{})]})},rt=G`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,it=m.div`
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
`,st=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    animation: ${rt} 3s;
`,O=m.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0;
`,M=m.div`
    font-weight: bold;
    margin-right: 10px;
`,w=m.div`
    margin-left: auto;
`,at=m.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`,P=m.button`
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
`,ot=m.button`
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
`,lt=m.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 5px;
    border: 2px solid #0056b3;
    color: #0056b3;
`,ct=()=>d.jsx(nt,{});export{ct as default};
