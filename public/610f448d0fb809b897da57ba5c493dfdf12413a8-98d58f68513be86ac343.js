(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8o2o":function(t,e,n){"use strict";function o(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return o}))},"8ypT":function(t,e,n){},"9Hrx":function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},Bl7J:function(t,e,n){"use strict";var o=n("q1tI"),a=n.n(o),r=(n("8ypT"),n("Wbzz")),i=n("LbRr"),s=(n("tUrg"),n("pkyv")),l=n.n(s),c=n("33Fu"),u=n("ZMKu"),d=function(){return a.a.createElement("section",{className:"container bg-gray-100  rounded-lg shadow-xl flex flex-col items-center mx-auto py-16 mb-10"},a.a.createElement("img",{src:l.a,style:{width:"250px",margin:"0 auto"}}),a.a.createElement(u.b.a,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"bg-gradient text-white  hover:text-black p-2 rounded-lg font-normal text-xl mb-3 mt-10",href:"tel:+48450021100"},"+48 450 021 100"),a.a.createElement(u.b.a,{whileHover:{scale:1.1},whileTap:{scale:.9},href:"mailto:kontakt@tanie-logo.pl",className:"bg-gradient text-white hover:text-black p-2 rounded-lg font-normal text-xl "},"kontakt@tanie-logo.pl"),a.a.createElement("ul",{className:"flex flex-col  px-4 py-8 gradient-text text-md -ml-1 font-semibold "},a.a.createElement("li",{className:"flex mb-2"},a.a.createElement(c.a,{className:"bg-gradient text-white rounded-full mr-1",style:{padding:"2px",fontSize:"18px"}}),"Najtańsze logo w internecie."),a.a.createElement("li",{className:"flex mb-2"},a.a.createElement(c.a,{className:"bg-gradient text-white rounded-full mr-1",style:{padding:"2px",fontSize:"18px"}}),"Projekt nawet w 12h"),a.a.createElement("li",{className:"flex mb-2"},a.a.createElement(c.a,{className:"bg-gradient text-white rounded-full mr-1",style:{padding:"2px",fontSize:"18px"}}),"Prawa autorskie + poprawki gratis."),a.a.createElement("li",{className:"flex mb-2"},a.a.createElement(c.a,{className:"bg-gradient text-white rounded-full mr-1",style:{padding:"2px",fontSize:"18px"}}),"Ulotki, wizytówki, plakaty, banery, grafiki...")),a.a.createElement("ul",{className:"flex flex-row"},[{title:"Home",link:"/"},{title:"Cennik",link:"/cennik"},{title:"Realizacje",link:"/realizacje"},{title:"Kontakt",link:"/kontakt"}].map((function(t){return a.a.createElement(u.b.li,{key:t.title,whileHover:{scale:1.1},whileTap:{scale:.9}},a.a.createElement(r.Link,{to:t.link,className:"m-1 md:m-3 font-normal  bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-white p-1 rounded-md  md:tracking-wider  "},t.title))}))))},f=(n("eM6i"),n("a1Th"),n("h7Nl"),n("LK8F"),n("bWfx"),n("8+KV"),n("0l/t"),n("XfO3"),n("9AAn"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("i8i4")),p=n.n(f),m=n("8o2o"),g=n("9Hrx"),h=!1,v=a.a.createContext(null),E=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var a,r=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?r?(a="exited",o.appearStatus="entering"):a="entered":a=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:a},o.nextCallback=null,o}Object(g.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!=typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,a=this.props.nodeRef?[o]:[p.a.findDOMNode(this),o],r=a[0],i=a[1],s=this.getTimeouts(),l=o?s.appear:s.enter;!t&&!n||h?this.safeSetState({status:"entered"},(function(){e.props.onEntered(r)})):(this.props.onEnter(r,i),this.safeSetState({status:"entering"},(function(){e.props.onEntering(r,i),e.onTransitionEnd(l,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(r,i)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:p.a.findDOMNode(this);e&&!h?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:p.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=a[0],i=a[1];this.props.addEndListener(r,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(m.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(v.Provider,{value:null},"function"==typeof n?n(t,o):a.a.cloneElement(a.a.Children.only(n),o))},e}(a.a.Component);function b(){}E.contextType=v,E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},E.UNMOUNTED="unmounted",E.EXITED="exited",E.ENTERING="entering",E.ENTERED="entered",E.EXITING="exiting";var y=E,x=n("TSYQ"),O=n.n(x);n("17x9");function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function k(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}var C={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];this.list.has(t)&&this.list.get(t).forEach((function(n){var a=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(a)}))}};function j(t){return"number"==typeof t&&!isNaN(t)}function N(t){return"boolean"==typeof t}function w(t){return"string"==typeof t}function I(t){return"function"==typeof t}function R(t){return"string"==typeof t?t:null}function S(t){return 0===t||t}var L=!("undefined"==typeof window||!window.document||!window.document.createElement);function _(t){return Object(o.isValidElement)(t)||w(t)||I(t)||j(t)}var D={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},P={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function M(t){var e,n,a=t.enter,r=t.exit,i=t.duration,s=void 0===i?750:i,l=t.appendPosition,c=void 0!==l&&l,u=t.collapse,d=void 0===u||u,f=t.collapseDuration,p=void 0===f?300:f;return Array.isArray(s)&&2===s.length?(e=s[0],n=s[1]):e=n=s,function(t){var i=t.children,s=t.position,l=t.preventExitTransition,u=t.done,f=k(t,["children","position","preventExitTransition","done"]),m=c?a+"--"+s:a,g=c?r+"--"+s:r,h=function t(){var e=f.nodeRef.current;e&&(e.removeEventListener("animationend",t),d?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,a=t.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all "+n+"ms",requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout((function(){return e()}),n)}))}))}(e,u,p):u())};return Object(o.createElement)(y,Object.assign({},f,{timeout:l?d?p:50:{enter:e,exit:d?n+p:n+50},onEnter:function(){var t=f.nodeRef.current;t&&(t.classList.add(m),t.style.animationFillMode="forwards",t.style.animationDuration=e+"ms")},onEntered:function(){var t=f.nodeRef.current;t&&(t.classList.remove(m),t.style.cssText="")},onExit:l?h:function(){var t=f.nodeRef.current;t&&(t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=n+"ms",t.addEventListener("animationend",h))},unmountOnExit:!0}),i)}}function B(t){var e=t.closeToast,n=t.type,a=t.ariaLabel,r=void 0===a?"close":a;return Object(o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},Object(o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Object(o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A(t){var e,n,a=t.delay,r=t.isRunning,i=t.closeToast,s=t.type,l=t.hide,c=t.className,u=t.style,d=t.controlledProgress,f=t.progress,p=t.rtl,m=t.isIn,g=T(T({},u),{},{animationDuration:a+"ms",animationPlayState:r?"running":"paused",opacity:l?0:1});d&&(g.transform="scaleX("+f+")");var h=O()("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+s,((e={})["Toastify__progress-bar--rtl"]=p,e),c),v=((n={})[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]=d&&f<1?null:function(){m&&i()},n);return Object(o.createElement)("div",Object.assign({className:h,style:g},v))}A.defaultProps={type:P.DEFAULT,hide:!1};var F=function(t){var e,n=function(t){var e=Object(o.useState)(!0),n=e[0],a=e[1],r=Object(o.useState)(!1),i=r[0],s=r[1],l=Object(o.useRef)(null),c=nt({start:0,x:0,y:0,deltaX:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),u=nt(t,!0),d=t.autoClose,f=t.pauseOnHover,p=t.closeToast,m=t.onClick,g=t.closeOnClick;function h(e){var n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,c.boundingRect=n.getBoundingClientRect(),n.style.transition="",c.start=c.x=at(e.nativeEvent),c.removalDistance=n.offsetWidth*(t.draggablePercent/100)}function v(){if(c.boundingRect){var e=c.boundingRect,n=e.top,o=e.bottom,a=e.left,r=e.right;t.pauseOnHover&&c.x>=a&&c.x<=r&&c.y>=n&&c.y<=o?b():E()}}function E(){a(!0)}function b(){a(!1)}function y(t){var e=l.current;c.canDrag&&(n&&b(),c.x=at(t),c.deltaX=c.x-c.start,c.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),c.start!==c.x&&(c.canCloseOnClick=!1),e.style.transform="translateX("+c.deltaX+"px)",e.style.opacity=""+(1-Math.abs(c.deltaX/c.removalDistance)))}function x(){var e=l.current;if(c.canDrag){if(c.canDrag=!1,Math.abs(c.deltaX)>c.removalDistance)return s(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translateX(0)",e.style.opacity="1"}}Object(o.useEffect)((function(){return I(t.onOpen)&&t.onOpen(Object(o.isValidElement)(t.children)&&t.children.props),function(){I(u.onClose)&&u.onClose(Object(o.isValidElement)(u.children)&&u.children.props)}}),[]),Object(o.useEffect)((function(){return t.draggable&&(document.addEventListener("mousemove",y),document.addEventListener("mouseup",x),document.addEventListener("touchmove",y),document.addEventListener("touchend",x)),function(){t.draggable&&(document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",x))}}),[t.draggable]),Object(o.useEffect)((function(){return t.pauseOnFocusLoss&&(window.addEventListener("focus",E),window.addEventListener("blur",b)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",b))}}),[t.pauseOnFocusLoss]);var O={onMouseDown:h,onTouchStart:h,onMouseUp:v,onTouchEnd:v};d&&f&&(O.onMouseEnter=b,O.onMouseLeave=E);g&&(O.onClick=function(t){m&&m(t),c.canCloseOnClick&&p()});return{playToast:E,pauseToast:b,isRunning:n,preventExitTransition:i,toastRef:l,eventHandlers:O}}(t),a=n.isRunning,r=n.preventExitTransition,i=n.toastRef,s=n.eventHandlers,l=t.closeButton,c=t.children,u=t.autoClose,d=t.onClick,f=t.type,p=t.hideProgressBar,m=t.closeToast,g=t.transition,h=t.position,v=t.className,E=t.style,b=t.bodyClassName,y=t.bodyStyle,x=t.progressClassName,T=t.progressStyle,k=t.updateId,C=t.role,j=t.progress,N=t.rtl,w=t.toastId,R=t.deleteToast,S=O()("Toastify__toast","Toastify__toast--"+f,((e={})["Toastify__toast--rtl"]=N,e),v),L=!!j;return Object(o.createElement)(g,{in:t.in,appear:!0,done:R,position:h,preventExitTransition:r,nodeRef:i},Object(o.createElement)("div",Object.assign({id:w,onClick:d,className:S},s,{style:E,ref:i}),Object(o.createElement)("div",Object.assign({},t.in&&{role:C},{className:O()("Toastify__toast-body",b),style:y}),c),function(t){if(!t)return null;var e={closeToast:m,type:f};return I(t)?t(e):Object(o.isValidElement)(t)?Object(o.cloneElement)(t,e):void 0}(l),(u||L)&&Object(o.createElement)(A,Object.assign({},k&&!L?{key:"pb-"+k}:{},{rtl:N,delay:u,isRunning:a,isIn:t.in,closeToast:m,hide:p,type:f,style:T,className:x,controlledProgress:L,progress:j}))))},z=M({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),H=function(t){var e=t.children,n=t.className,a=t.style,r=k(t,["children","className","style"]);return delete r.in,Object(o.createElement)("div",{className:n,style:a},o.Children.map(e,(function(t){return Object(o.cloneElement)(t,r)})))},X=function(t){var e=function(t){var e=Object(o.useReducer)((function(t){return t+1}),0)[1],n=Object(o.useReducer)(ot,[]),a=n[0],r=n[1],i=Object(o.useRef)(null),s=nt(0),l=nt([]),c=nt({}),u=nt({toastKey:1,displayedToast:0,props:t,containerId:null,isToastActive:d,getToast:function(t){return c[t]||null}});function d(t){return-1!==a.indexOf(t)}function f(t){var e=t.containerId,n=u.props,o=n.limit,a=n.enableMultiContainer;o&&(!e||u.containerId===e&&a)&&(s-=l.length,l=[])}function p(t){var e=l.length;if((s=S(t)?s-1:s-u.displayedToast)<0&&(s=0),e>0){var n=S(t)?1:u.props.limit;if(1===e||1===n)u.displayedToast++,m();else{var o=n>e?e:n;u.displayedToast=o;for(var a=0;a<o;a++)m()}}r({type:"REMOVE",toastId:t})}function m(){var t=l.shift(),e=t.toastContent,n=t.toastProps,o=t.staleId;setTimeout((function(){h(e,n,o)}),500)}function g(t,n){var a=n.delay,r=n.staleId,d=k(n,["delay","staleId"]);if(_(t)&&!function(t){var e=t.containerId,n=t.toastId,o=t.updateId;return!!(!i.current||u.props.enableMultiContainer&&e!==u.props.containerId||u.isToastActive(n)&&null==o)}(d)){var f=d.toastId,m=d.updateId,g=u.props,v=function(){return p(f)},E=!(0,u.isToastActive)(f);E&&s++;var b,y,x={toastId:f,updateId:m,key:d.key||u.toastKey++,type:d.type,closeToast:v,closeButton:d.closeButton,rtl:g.rtl,position:d.position||g.position,transition:d.transition||g.transition,className:R(d.className||g.toastClassName),bodyClassName:R(d.bodyClassName||g.bodyClassName),style:d.style||g.toastStyle,bodyStyle:d.bodyStyle||g.bodyStyle,onClick:d.onClick||g.onClick,pauseOnHover:N(d.pauseOnHover)?d.pauseOnHover:g.pauseOnHover,pauseOnFocusLoss:N(d.pauseOnFocusLoss)?d.pauseOnFocusLoss:g.pauseOnFocusLoss,draggable:N(d.draggable)?d.draggable:g.draggable,draggablePercent:j(d.draggablePercent)?d.draggablePercent:g.draggablePercent,closeOnClick:N(d.closeOnClick)?d.closeOnClick:g.closeOnClick,progressClassName:R(d.progressClassName||g.progressClassName),progressStyle:d.progressStyle||g.progressStyle,autoClose:(b=d.autoClose,y=g.autoClose,!1===b||j(b)&&b>0?b:y),hideProgressBar:N(d.hideProgressBar)?d.hideProgressBar:g.hideProgressBar,progress:d.progress,role:w(d.role)?d.role:g.role,deleteToast:function(){!function(t){delete c[t],e()}(f)}};I(d.onOpen)&&(x.onOpen=d.onOpen),I(d.onClose)&&(x.onClose=d.onClose);var O=g.closeButton;!1===d.closeButton||_(d.closeButton)?O=d.closeButton:!0===d.closeButton&&(O=!_(g.closeButton)||g.closeButton),x.closeButton=O;var T=t;Object(o.isValidElement)(t)&&!w(t.type)?T=Object(o.cloneElement)(t,{closeToast:v}):I(t)&&(T=t({closeToast:v})),g.limit&&g.limit>0&&s>g.limit&&E?l.push({toastContent:T,toastProps:x,staleId:r}):j(a)&&a>0?setTimeout((function(){h(T,x,r)}),a):h(T,x,r)}}function h(t,e,n){var o=e.toastId;c[o]={content:t,props:e},r({type:"ADD",toastId:o,staleId:n})}function v(e){for(var n={},o=t.newestOnTop?Object.keys(c).reverse():Object.keys(c),a=0;a<o.length;a++){var r=c[o[a]],i=r.props.position;n[i]||(n[i]=[]),n[i].push(r)}return Object.keys(n).map((function(t){return e(t,n[t])}))}return Object(o.useEffect)((function(){return u.containerId=t.containerId,C.cancelEmit(3).on(0,g).on(1,(function(t){return i.current&&p(t)})).on(5,f).emit(2,u),function(){return C.emit(3,u)}}),[]),Object(o.useEffect)((function(){u.isToastActive=d,u.displayedToast=a.length,C.emit(4,a.length,t.containerId)}),[a]),Object(o.useEffect)((function(){u.props=t})),{getToastToRender:v,collection:c,containerRef:i,isToastActive:d}}(t),n=e.getToastToRender,a=e.containerRef,r=e.isToastActive,i=t.className,s=t.style,l=t.rtl,c=t.containerId;return Object(o.createElement)("div",{ref:a,className:"Toastify",id:c},n((function(t,e){var n,a={className:O()("Toastify__toast-container","Toastify__toast-container--"+t,(n={},n["Toastify__toast-container--rtl"]=l,n),R(i)),style:0===e.length?T(T({},s),{},{pointerEvents:"none"}):T({},s)};return Object(o.createElement)(H,Object.assign({},a,{key:"container-"+t}),e.map((function(t){var e=t.content,n=t.props;return Object(o.createElement)(F,Object.assign({},n,{in:r(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?B:n.closeButton}),e)})))})))};X.defaultProps={position:D.TOP_RIGHT,transition:z,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:B,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,role:"alert"};var U,G,V,W=new Map,K=[],Q=!1;function Y(){return W.size>0}function q(t,e){var n=function(t){return Y()?W.get(t||U):null}(e.containerId);return n?n.getToast(t):null}function J(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function Z(t){return t&&(w(t.toastId)||j(t.toastId))?t.toastId:J()}function $(t,e){return Y()?C.emit(0,t,e):(K.push({content:t,options:e}),Q&&L&&(Q=!1,G=document.createElement("div"),document.body.appendChild(G),Object(f.render)(Object(o.createElement)(X,Object.assign({},V)),G))),e.toastId}function tt(t,e){return T(T({},e),{},{type:e&&e.type||t,toastId:Z(e)})}var et=function(t,e){return $(t,tt(P.DEFAULT,e))};function nt(t,e){void 0===e&&(e=!1);var n=Object(o.useRef)(t);return Object(o.useEffect)((function(){e&&(n.current=t)})),n.current}function ot(t,e){switch(e.type){case"ADD":return[].concat(t,[e.toastId]).filter((function(t){return t!==e.staleId}));case"REMOVE":return S(e.toastId)?t.filter((function(t){return t!==e.toastId})):[]}}function at(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}et.success=function(t,e){return $(t,tt(P.SUCCESS,e))},et.info=function(t,e){return $(t,tt(P.INFO,e))},et.error=function(t,e){return $(t,tt(P.ERROR,e))},et.warning=function(t,e){return $(t,tt(P.WARNING,e))},et.dark=function(t,e){return $(t,tt(P.DARK,e))},et.warn=et.warning,et.dismiss=function(t){return Y()&&C.emit(1,t)},et.clearWaitingQueue=function(t){return void 0===t&&(t={}),Y()&&C.emit(5,t)},et.isActive=function(t){var e=!1;return W.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},et.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=q(t,e);if(n){var o=n.props,a=n.content,r=T(T(T({},o),e),{},{toastId:e.toastId||t,updateId:J()});r.toastId!==t&&(r.staleId=t);var i=void 0!==r.render?r.render:a;delete r.render,$(i,r)}}),0)},et.done=function(t){et.update(t,{progress:1})},et.onChange=function(t){return I(t)&&C.on(4,t),function(){I(t)&&C.off(4,t)}},et.configure=function(t){void 0===t&&(t={}),Q=!0,V=t},et.POSITION=D,et.TYPE=P,C.on(2,(function(t){U=t.containerId||t,W.set(U,t),K.forEach((function(t){C.emit(0,t.content,t.options)})),K=[]})).on(3,(function(t){W.delete(t.containerId||t),0===W.size&&C.off(0).off(1).off(5),L&&G&&document.body.removeChild(G)}));n("jDDT"),e.a=function(t){var e=t.children;return Object(o.useEffect)((function(){var t=setInterval((function(){var t=["Bardzo szybka realizacja i profesjonalna obsługa klienta","Porządna firma, zleciłem im już kilka projektów. Zawsze zadowolony","Bardzo ładne logo dostałam. Wielkie dzięki","Good job!","W takiej cenie nie spodziewalem się dobrej jakości, ale się myliłem. Nieźle"],e=Math.floor(Math.random()*t.length);et(a.a.createElement("p",{className:"p-2"},t[e]))}),8e3);return function(){return clearInterval(t)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(i.a,null),a.a.createElement("main",null,e),a.a.createElement("footer",null,a.a.createElement(d,null))),a.a.createElement(X,{position:"bottom-left",closeOnClick:!0,pauseOnHover:!0}))}},TSYQ:function(t,e,n){var o;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&t.push(i)}else if("object"===r)for(var s in o)n.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(o=function(){return a}.apply(e,[]))||(t.exports=o)}()},jDDT:function(t,e,n){}}]);
//# sourceMappingURL=610f448d0fb809b897da57ba5c493dfdf12413a8-98d58f68513be86ac343.js.map