/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};App.loadBundle("ypon7jpl",["exports","./chunk-c1cd1154.js"],function(t,e){var n=window.App.h,o=function(){function t(){}return t.prototype.render=function(){return n("div",null,n("header",null,n("h1",null,"Stencil App Starter")),n("main",null,n("stencil-router",null,n("stencil-route-switch",{scrollTopOffset:0},n("stencil-route",{url:"/",component:"app-home",exact:!0}),n("stencil-route",{url:"/profile/:name",component:"app-profile"})))))},Object.defineProperty(t,"is",{get:function(){return"app-root"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-app-root-h{font:var(--my-font)}header.sc-app-root{background:var(--my-color);height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1.sc-app-root, header.sc-app-root{color:#fff}h1.sc-app-root{font-size:1.4rem;font-weight:500;padding:0 12px}"},enumerable:!0,configurable:!0}),t}(),r=function(){function t(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}return t.prototype.computeMatch=function(t){var n=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!n)return this.previousMatch=this.match,this.match=e.matchPath(t.pathname,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentDidUpdate=function(){return t=this,n=void 0,r=function(){var t;return __generator(this,function(n){return t={},this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!e.matchesAreEqual(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t),[2]})},new((o=void 0)||(o=Promise))(function(e,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?e(t.value):new o(function(e){e(t.value)}).then(a,s)}c((r=r.apply(t,n||[])).next())});var t,n,o,r},t.prototype.render=function(){if(!this.match||!this.history)return null;var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?n(this.component,Object.assign({},t)):void 0},Object.defineProperty(t,"is",{get:function(){return"stencil-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:!0,configurable:!0}),t}();e.ActiveRouter.injectProps(r,["location","history","historyType","routeViewsUpdated"]);function i(t){return"stencil-route"===t.tagName.toLocaleLowerCase()}var a=function(){function t(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[]}return t.prototype.componentWillLoad=function(){null!=this.location&&this.regenerateSubscribers(this.location)},t.prototype.regenerateSubscribers=function(t){return n=this,o=void 0,a=function(){var n,o,r=this;return __generator(this,function(a){return null==t?[2]:(n=-1,this.subscribers=Array.prototype.slice.call(this.el.children).filter(i).map(function(o,r){var i=e.matchPath(t.pathname,{path:o.url,exact:o.exact,strict:!0});return i&&-1===n&&(n=r),{el:o,match:i}}),-1===n?[2]:this.activeIndex===n?(this.subscribers[n].el.match=this.subscribers[n].match,[2]):(this.activeIndex=n,o=this.subscribers[this.activeIndex],this.scrollTopOffset&&(o.el.scrollTopOffset=this.scrollTopOffset),o.el.group=this.group,o.el.match=o.match,o.el.componentUpdated=function(t){r.queue.write(function(){r.subscribers.forEach(function(t,e){if(t.el.componentUpdated=void 0,e===r.activeIndex)return t.el.style.display="";r.scrollTopOffset&&(t.el.scrollTopOffset=r.scrollTopOffset),t.el.group=r.group,t.el.match=null,t.el.style.display="none"})}),r.routeViewsUpdated&&r.routeViewsUpdated(Object.assign({scrollTopOffset:r.scrollTopOffset},t))},[2]))})},new((r=void 0)||(r=Promise))(function(t,e){function i(t){try{c(a.next(t))}catch(t){e(t)}}function s(t){try{c(a.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(i,s)}c((a=a.apply(n,o||[])).next())});var n,o,r,a},t.prototype.render=function(){return n("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stencil-route-switch"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}},enumerable:!0,configurable:!0}),t}();function s(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function c(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}e.ActiveRouter.injectProps(a,["location","routeViewsUpdated"]);var l=function(){var t,e=[];return{setPrompt:function(e){return c(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(c(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:function(t){var n=!0,o=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n&&t.apply(void 0,e)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},u=function(t){void 0===t&&(t="scrollPositions");var n=new Map;if(e.storageAvailable("sessionStorage")){var o=window.sessionStorage.getItem(t);n=o?new Map(JSON.parse(o)):n}function r(t,o){if(n.set(t,o),e.storageAvailable("sessionStorage")){var r=[];n.forEach(function(t,e){r.push([e,t])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(r))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:r,get:function(t){return n.get(t)},has:function(t){return n.has(t)},capture:function(t){r(t,[window.scrollX,window.scrollY])}}},h=function(){try{return window.history.state||{}}catch(t){return{}}},p={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+e.stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:e.stripLeadingSlash,decodePath:e.addLeadingSlash},slash:{encodePath:e.addLeadingSlash,decodePath:e.addLeadingSlash}},f=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},d=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};function y(t,e){var n=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})}var g={browser:function(t){void 0===t&&(t={}),s(e.canUseDOM,"Browser history needs a DOM");var n=window.history,o=e.supportsHistory(),r=!e.supportsPopStateOnHashChange(),i=u(),a=null!=t.forceRefresh&&t.forceRefresh,p=null!=t.getUserConfirmation?t.getUserConfirmation:e.getConfirmation,f=null!=t.keyLength?t.keyLength:6,d=t.basename?e.stripTrailingSlash(e.addLeadingSlash(t.basename)):"",y=function(t){var n=(t=t||{}).key,o=t.state,r=window.location,i=r.pathname+r.search+r.hash;return c(!d||e.hasBasename(i,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+d+'".'),d&&(i=e.stripBasename(i,d)),e.createLocation(i,o,n||e.createKey(f))},g=l(),v=function(t){i.capture(j.location.key),Object.assign(j,t),j.location.scrollPosition=i.get(j.location.key),j.length=n.length,g.notifyListeners(j.location,j.action)},m=function(t){e.isExtraneousPopstateEvent(t)||P(y(t.state))},w=function(){P(y(h()))},b=!1,P=function(t){b?(b=!1,v()):g.confirmTransitionTo(t,"POP",p,function(e){e?v({action:"POP",location:t}):O(t)})},O=function(t){var e=T.indexOf(j.location.key);-1===e&&(e=0);var n=T.indexOf(t.key);-1===n&&(n=0);var o=e-n;o&&(b=!0,L(o))},S=y(h()),T=[S.key],x=function(t){return d+e.createPath(t)},L=function(t){n.go(t)},A=0,k=function(t){1===(A+=t)?(e.addEventListener(window,"popstate",m),r&&e.addEventListener(window,"hashchange",w)):0===A&&(e.removeEventListener(window,"popstate",m),r&&e.removeEventListener(window,"hashchange",w))},U=!1,j={length:n.length,action:"POP",location:S,createHref:x,push:function(t,r){c(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=e.createLocation(t,r,e.createKey(f),j.location);g.confirmTransitionTo(i,"PUSH",p,function(t){if(t){var e=x(i),r=i.state;if(o)if(n.pushState({key:i.key,state:r},void 0,e),a)window.location.href=e;else{var s=T.indexOf(j.location.key),l=T.slice(0,-1===s?0:s+1);l.push(i.key),T=l,v({action:"PUSH",location:i})}else c(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=e}})},replace:function(t,r){c(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=e.createLocation(t,r,e.createKey(f),j.location);g.confirmTransitionTo(i,"REPLACE",p,function(t){if(t){var e=x(i),r=i.state;if(o)if(n.replaceState({key:i.key,state:r},void 0,e),a)window.location.replace(e);else{var s=T.indexOf(j.location.key);-1!==s&&(T[s]=i.key),v({action:"REPLACE",location:i})}else c(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(e)}})},go:L,goBack:function(){return L(-1)},goForward:function(){return L(1)},block:function(t){void 0===t&&(t="");var e=g.setPrompt(t);return U||(k(1),U=!0),function(){return U&&(U=!1,k(-1)),e()}},listen:function(t){var e=g.appendListener(t);return k(1),function(){k(-1),e()}}};return j},hash:function(t){void 0===t&&(t={}),s(a.canUseDOM,"Hash history needs a DOM");var e=window.history,n=a.supportsGoWithoutReloadUsingHash(),o=null!=t.keyLength?t.keyLength:6,r=t.getUserConfirmation,i=void 0===r?u:r,a=t.__chunk_1,u=t.getConfirmation,h=t.hashType,y=void 0===h?"slash":h,g=t.basename?a.stripTrailingSlash(a.addLeadingSlash(t.basename)):"",v=p[y],m=v.encodePath,w=v.decodePath,b=function(){var t=w(f());return c(!g||a.hasBasename(t,g),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+g+'".'),g&&(t=a.stripBasename(t,g)),a.createLocation(t,void 0,a.createKey(o))},P=l(),O=function(t){Object.assign(_,t),_.length=e.length,P.notifyListeners(_.location,_.action)},S=!1,T=null,x=function(){var t=f(),e=m(t);if(t!==e)d(e);else{var n=b();if(!S&&a.locationsAreEqual(_.location,n))return;if(T===a.createPath(n))return;T=null,L(n)}},L=function(t){S?(S=!1,O()):P.confirmTransitionTo(t,"POP",i,function(e){e?O({action:"POP",location:t}):A(t)})},A=function(t){var e=E.lastIndexOf(a.createPath(_.location));-1===e&&(e=0);var n=E.lastIndexOf(a.createPath(t));-1===n&&(n=0);var o=e-n;o&&(S=!0,R(o))},k=f(),U=m(k);k!==U&&d(U);var j=b(),E=[a.createPath(j)],R=function(t){c(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},H=0,C=function(t){1===(H+=t)?a.addEventListener(window,"hashchange",x):0===H&&a.removeEventListener(window,"hashchange",x)},M=!1,_={length:e.length,action:"POP",location:j,createHref:function(t){return"#"+m(g+a.createPath(t))},push:function(t,e){c(void 0===e,"Hash history cannot push state; it is ignored");var n=a.createLocation(t,void 0,a.createKey(o),_.location);P.confirmTransitionTo(n,"PUSH",i,function(t){if(t){var e=a.createPath(n),o=m(g+e);if(f()!==o){T=e,window.location.hash=o;var r=E.lastIndexOf(a.createPath(_.location)),i=E.slice(0,-1===r?0:r+1);i.push(e),E=i,O({action:"PUSH",location:n})}else c(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),O()}})},replace:function(t,e){c(void 0===e,"Hash history cannot replace state; it is ignored");var n=a.createLocation(t,void 0,a.createKey(o),_.location);P.confirmTransitionTo(n,"REPLACE",i,function(t){if(t){var e=a.createPath(n),o=m(g+e);f()!==o&&(T=e,d(o));var r=E.indexOf(a.createPath(_.location));-1!==r&&(E[r]=e),O({action:"REPLACE",location:n})}})},go:R,goBack:function(){return R(-1)},goForward:function(){return R(1)},block:function(t){void 0===t&&(t="");var e=P.setPrompt(t);return M||(C(1),M=!0),function(){return M&&(M=!1,C(-1)),e()}},listen:function(t){var e=P.appendListener(t);return C(1),function(){C(-1),e()}}};return _}},v=function(){function t(){var t=this;this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=function(e){void 0===e&&(e={}),t.scrollTo(e.scrollTopOffset||t.scrollTopOffset)}}return t.prototype.componentWillLoad=function(){var t=this;this.history=g[this.historyType](),this.history.listen(function(e){return n=t,o=void 0,i=function(){return __generator(this,function(t){return e=y(e,this.root),this.location=e,[2]})},new((r=void 0)||(r=Promise))(function(t,e){function a(t){try{c(i.next(t))}catch(t){e(t)}}function s(t){try{c(i.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new r(function(t){t(e.value)}).then(a,s)}c((i=i.apply(n,o||[])).next())});var n,o,r,i}),this.location=y(this.history.location,this.root)},t.prototype.scrollTo=function(t){var e=this;if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(function(){e.history&&e.history.location&&Array.isArray(e.history.location.scrollPosition)&&window.scrollTo(e.history.location.scrollPosition[0],e.history.location.scrollPosition[1])}):this.queue.write(function(){window.scrollTo(0,t)})},t.prototype.render=function(){if(this.location&&this.history)return n(e.ActiveRouter.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}},enumerable:!0,configurable:!0}),t}();t.AppRoot=o,t.StencilRoute=r,t.StencilRouteSwitch=a,t.StencilRouter=v,Object.defineProperty(t,"__esModule",{value:!0})});