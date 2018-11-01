/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e,d as o,c as n,e as s,f as i,g as r,h as a,i as c,j as l,k as h,l as u,m as p,n as d,o as f,p as y,q as g,r as w,s as m,t as b,u as v,v as T}from"./chunk-1aa45260.js";class P{render(){return t("div",null,t("header",null,t("h1",null,"Stencil App Starter")),t("main",null,t("stencil-router",null,t("stencil-route-switch",{scrollTopOffset:0},t("stencil-route",{url:"/stencil-test/",component:"app-home",exact:!0}),t("stencil-route",{url:"/stencil-test/profile/:name",component:"app-profile"})))))}static get is(){return"app-root"}static get encapsulation(){return"shadow"}static get style(){return".sc-app-root-h{--my-font:24px \"Comic Sans MS\",Helvetica,Arial;--my-color:purple}header.sc-app-root{font:var(--my-font);background:var(--my-color);height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1.sc-app-root, header.sc-app-root{color:#fff}h1.sc-app-root{font-size:1.4rem;font-weight:500;padding:0 12px}"}}var O=function(t,e,o,n){return new(o||(o=Promise))(function(s,i){function r(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?s(t.value):new o(function(e){e(t.value)}).then(r,a)}c((n=n.apply(t,e||[])).next())})};class S{constructor(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const o=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!o)return this.previousMatch=this.match,this.match=e(t.pathname,{path:this.url,exact:this.exact,strict:!0})}componentDidUpdate(){return O(this,void 0,void 0,function*(){let t={};this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!o(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)})}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?t(this.component,Object.assign({},e)):void 0}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}n.injectProps(S,["location","history","historyType","routeViewsUpdated"]);var x=function(t,e,o,n){return new(o||(o=Promise))(function(s,i){function r(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?s(t.value):new o(function(e){e(t.value)}).then(r,a)}c((n=n.apply(t,e||[])).next())})};function k(t){return"stencil-route"===t.tagName.toLocaleLowerCase()}class U{constructor(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[]}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}regenerateSubscribers(t){return x(this,void 0,void 0,function*(){if(null==t)return;let o=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(k).map((n,s)=>{const i=function(o,s,i){return e(t.pathname,{path:n.url,exact:n.exact,strict:!0})}();return i&&-1===o&&(o=s),{el:n,match:i}}),-1===o)return;if(this.activeIndex===o)return void(this.subscribers[o].el.match=this.subscribers[o].match);this.activeIndex=o;const n=this.subscribers[this.activeIndex];this.scrollTopOffset&&(n.el.scrollTopOffset=this.scrollTopOffset),n.el.group=this.group,n.el.match=n.match,n.el.componentUpdated=(t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))})})}render(){return t("slot",null)}static get is(){return"stencil-route-switch"}static get properties(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}}}function A(t,...e){t||console.error(...e)}function L(t,...e){t||console.warn(...e)}n.injectProps(U,["location","routeViewsUpdated"]);const R=()=>{let t,e=[];return{setPrompt:e=>(L(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,o,n,s)=>{if(null!=t){const i="function"==typeof t?t(e,o):t;"string"==typeof i?"function"==typeof n?n(i,s):(L(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),s(!0)):s(!1!==i)}else s(!0)},appendListener:t=>{let o=!0;const n=(...e)=>{o&&t(...e)};return e.push(n),()=>{o=!1,e=e.filter(t=>t!==n)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},j=(t="scrollPositions")=>{let e=new Map;if(s("sessionStorage")){const o=window.sessionStorage.getItem(t);e=o?new Map(JSON.parse(o)):e}function o(t,o){if(e.set(t,o),s("sessionStorage")){const t=[];e.forEach((e,o)=>{t.push([o,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:o,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){o(t,[window.scrollX,window.scrollY])}}},E=()=>{try{return window.history.state||{}}catch(t){return{}}},H={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+v(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:v,decodePath:a},slash:{encodePath:a,decodePath:a}},C=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},M=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var V=function(t,e,o,n){return new(o||(o=Promise))(function(s,i){function r(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?s(t.value):new o(function(e){e(t.value)}).then(r,a)}c((n=n.apply(t,e||[])).next())})};function I(t,e){const o=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:o})}const q={browser:(t={})=>{A(p,"Browser history needs a DOM");const e=window.history,o=g(),n=!w(),s=j(),b=null!=t.forceRefresh&&t.forceRefresh,v=null!=t.getUserConfirmation?t.getUserConfirmation:y,T=null!=t.keyLength?t.keyLength:6,P=t.basename?c(a(t.basename)):"",O=t=>{t=t||{};const{key:e,state:o}=t,{pathname:n,search:s,hash:a}=window.location;let c=n+s+a;return L(!P||l(c,P),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+c+'" to begin with "'+P+'".'),P&&(c=h(c,P)),i(c,o,e||r(T))},S=R(),x=t=>{s.capture(F.location.key),Object.assign(F,t),F.location.scrollPosition=s.get(F.location.key),F.length=e.length,S.notifyListeners(F.location,F.action)},k=t=>{m(t)||C(O(t.state))},U=()=>{C(O(E()))};let H=!1;const C=t=>{if(H)H=!1,x();else{const e="POP";S.confirmTransitionTo(t,e,v,o=>{o?x({action:e,location:t}):M(t)})}},M=t=>{let e=I.indexOf(F.location.key);-1===e&&(e=0);let o=I.indexOf(t.key);-1===o&&(o=0);const n=e-o;n&&(H=!0,N(n))},V=O(E());let I=[V.key];const q=t=>P+u(t),N=t=>{e.go(t)};let B=0;const Y=t=>{1===(B+=t)?(d(window,"popstate",k),n&&d(window,"hashchange",U)):0===B&&(f(window,"popstate",k),n&&f(window,"hashchange",U))};let D=!1;const F={length:e.length,action:"POP",location:V,createHref:q,push:(t,n)=>{L(!("object"==typeof t&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=i(t,n,r(T),F.location);S.confirmTransitionTo(s,"PUSH",v,t=>{if(!t)return;const n=q(s),{key:i,state:r}=s;if(o)if(e.pushState({key:i,state:r},void 0,n),b)window.location.href=n;else{const t=I.indexOf(F.location.key),e=I.slice(0,-1===t?0:t+1);e.push(s.key),I=e,x({action:"PUSH",location:s})}else L(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=n})},replace:(t,n)=>{L(!("object"==typeof t&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=i(t,n,r(T),F.location);S.confirmTransitionTo(s,"REPLACE",v,t=>{if(!t)return;const n=q(s),{key:i,state:r}=s;if(o)if(e.replaceState({key:i,state:r},void 0,n),b)window.location.replace(n);else{const t=I.indexOf(F.location.key);-1!==t&&(I[t]=s.key),x({action:"REPLACE",location:s})}else L(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(n)})},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(t="")=>{const e=S.setPrompt(t);return D||(Y(1),D=!0),()=>(D&&(D=!1,Y(-1)),e())},listen:t=>{const e=S.appendListener(t);return Y(1),()=>{Y(-1),e()}}};return F},hash:(t={})=>{A(p,"Hash history needs a DOM");const e=window.history,o=T(),n=null!=t.keyLength?t.keyLength:6,{getUserConfirmation:s=y,hashType:g="slash"}=t,w=t.basename?c(a(t.basename)):"",{encodePath:m,decodePath:v}=H[g],P=()=>{let t=v(C());return L(!w||l(t,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+w+'".'),w&&(t=h(t,w)),i(t,void 0,r(n))},O=R(),S=t=>{Object.assign(J,t),J.length=e.length,O.notifyListeners(J.location,J.action)};let x=!1,k=null;const U=()=>{const t=C(),e=m(t);if(t!==e)M(e);else{const t=P(),e=J.location;if(!x&&b(e,t))return;if(k===u(t))return;k=null,j(t)}},j=t=>{if(x)x=!1,S();else{const e="POP";O.confirmTransitionTo(t,e,s,o=>{o?S({action:e,location:t}):E(t)})}},E=t=>{let e=N.lastIndexOf(u(J.location));-1===e&&(e=0);let o=N.lastIndexOf(u(t));-1===o&&(o=0);const n=e-o;n&&(x=!0,B(n))},V=C(),I=m(V);V!==I&&M(I);const q=P();let N=[u(q)];const B=t=>{L(o,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let Y=0;const D=t=>{1===(Y+=t)?d(window,"hashchange",U):0===Y&&f(window,"hashchange",U)};let F=!1;const J={length:e.length,action:"POP",location:q,createHref:t=>"#"+m(w+u(t)),push:(t,e)=>{L(void 0===e,"Hash history cannot push state; it is ignored");const o=i(t,void 0,r(n),J.location);O.confirmTransitionTo(o,"PUSH",s,t=>{if(!t)return;const e=u(o),n=m(w+e);if(C()!==n){k=e,(t=>window.location.hash=t)(n);const t=N.lastIndexOf(u(J.location)),s=N.slice(0,-1===t?0:t+1);s.push(e),N=s,S({action:"PUSH",location:o})}else L(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),S()})},replace:(t,e)=>{L(void 0===e,"Hash history cannot replace state; it is ignored");const o=i(t,void 0,r(n),J.location);O.confirmTransitionTo(o,"REPLACE",s,t=>{if(!t)return;const e=u(o),n=m(w+e);C()!==n&&(k=e,M(n));const s=N.indexOf(u(J.location));-1!==s&&(N[s]=e),S({action:"REPLACE",location:o})})},go:B,goBack:()=>B(-1),goForward:()=>B(1),block:(t="")=>{const e=O.setPrompt(t);return F||(D(1),F=!0),()=>(F&&(F=!1,D(-1)),e())},listen:t=>{const e=O.appendListener(t);return D(1),()=>{D(-1),e()}}};return J}};class N{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=((t={})=>{this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)})}componentWillLoad(){this.history=q[this.historyType](),this.history.listen(t=>V(this,void 0,void 0,function*(){t=I(t,this.root),this.location=t})),this.location=I(this.history.location,this.root)}scrollTo(t){if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(()=>{this.history&&this.history.location&&Array.isArray(this.history.location.scrollPosition)&&window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,t)})}render(){if(this.location&&this.history)return t(n.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{P as AppRoot,S as StencilRoute,U as StencilRouteSwitch,N as StencilRouter};