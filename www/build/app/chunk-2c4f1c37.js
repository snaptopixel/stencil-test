/*! Built with http://stenciljs.com */
const{h:t}=window.App;var e="/",n="./",r=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function a(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function o(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function i(t){return t&&t.sensitive?"":"i"}function s(t,u,c){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,u):Array.isArray(t)?function(t,e,n){for(var r=[],a=0;a<t.length;a++)r.push(s(t[a],e,n).source);return new RegExp("(?:"+r.join("|")+")",i(n))}(t,u,c):function(t,s,u){return function(t,r,o){for(var s=(o=o||{}).strict,u=!1!==o.end,c=a(o.delimiter||e),l=o.delimiters||n,f=[].concat(o.endsWith||[]).map(a).concat("$").join("|"),h="",p=!1,d=0;d<t.length;d++){var v=t[d];if("string"==typeof v)h+=a(v),p=d===t.length-1&&l.indexOf(v[v.length-1])>-1;else{var m=a(v.prefix||""),y=v.repeat?"(?:"+v.pattern+")(?:"+m+"(?:"+v.pattern+"))*":v.pattern;r&&r.push(v),h+=v.optional?v.partial?m+"("+y+")?":"(?:"+m+"("+y+"))?":m+"("+y+")"}}return u?(s||(h+="(?:"+c+")?"),h+="$"===f?"$":"(?="+f+")"):(s||(h+="(?:"+c+"(?="+f+"))?"),p||(h+="(?="+c+"|"+f+")")),new RegExp("^"+h,i(o))}(function(t,i){for(var s,u=[],c=0,l=0,f="",h=i&&i.delimiter||e,p=i&&i.delimiters||n,d=!1;null!==(s=r.exec(t));){var v=s[0],m=s[1],y=s.index;if(f+=t.slice(l,y),l=y+v.length,m)f+=m[1],d=!0;else{var g="",w=t[l],x=s[2],b=s[3],O=s[4],A=s[5];if(!d&&f.length){var E=f.length-1;p.indexOf(f[E])>-1&&(g=f[E],f=f.slice(0,E))}f&&(u.push(f),f="",d=!1);var j=g||h,k=b||O;u.push({name:x||c++,prefix:g,delimiter:j,optional:"?"===A||"*"===A,repeat:"+"===A||"*"===A,partial:""!==g&&void 0!==w&&w!==g,pattern:k?o(k):"[^"+a(j)+"]+?"})}}return(f||l<t.length)&&u.push(f+t.substr(l)),u}(t,u),s,u)}(t,u,c)}function u(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function c(t,e){return u(t,e)?t.substr(e.length):t}function l(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function f(t){return"/"===t.charAt(0)?t:"/"+t}function h(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t){const{pathname:e,search:n,hash:r}=t;let a=e||"/";return n&&"?"!==n&&(a+="?"===n.charAt(0)?n:`?${n}`),r&&"#"!==r&&(a+="#"===r.charAt(0)?r:`#${r}`),a}function d(t){return"/"===t.charAt(0)}function v(t){return Math.random().toString(36).substr(2,t)}function m(t,e){for(let n=e,r=n+1,a=t.length;r<a;n+=1,r+=1)t[n]=t[r];t.pop()}function y(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(Array.isArray(t))return Array.isArray(e)&&t.length===e.length&&t.every(function(t,n){return y(t,e[n])});const n=typeof t;if(n!==typeof e)return!1;if("object"===n){const n=t.valueOf(),r=e.valueOf();if(n!==t||r!==e)return y(n,r);const a=Object.keys(t),o=Object.keys(e);return a.length===o.length&&a.every(function(n){return y(t[n],e[n])})}return!1}function g(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&y(t.state,e.state)}function w(t,e,n,r){let a;"string"==typeof t?void 0!==(a=function(t){let e=t||"/",n="",r="";const a=e.indexOf("#");-1!==a&&(r=e.substr(a),e=e.substr(0,a));const o=e.indexOf("?");return-1!==o&&(n=e.substr(o),e=e.substr(0,o)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r,query:{},key:""}}(t)).state&&(a.state=e):((a=Object.assign({pathname:""},t)).search&&"?"!==a.search.charAt(0)&&(a.search="?"+a.search),a.hash&&"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash),void 0!==e&&void 0===a.state&&(a.state=e));try{a.pathname=decodeURI(a.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var o;return a.key=n,r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=function(t,e=""){const n=t&&t.split("/")||[];let r=e&&e.split("/")||[];const a=t&&d(t),o=e&&d(e),i=a||o;if(t&&d(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";let s;if(r.length){const t=r[r.length-1];s="."===t||".."===t||""===t}else s=!1;let u=0;for(let t=r.length;t>=0;t--){const e=r[t];"."===e?m(r,t):".."===e?(m(r,t),u++):u&&(m(r,t),u--)}if(!i)for(;u--;u)r.unshift("..");!i||""===r[0]||r[0]&&d(r[0])||r.unshift("");let c=r.join("/");return s&&"/"!==c.substr(-1)&&(c+="/"),c}(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a.query=(o=a.search||"")?(/^[?#]/.test(o)?o.slice(1):o).split("&").reduce((t,e)=>{let[n,r]=e.split("=");return t[n]=r?decodeURIComponent(r.replace(/\+/g," ")):"",t},{}):{},a}const x={},b=1e4;let O=0;function A(t,e={}){"string"==typeof e&&(e={path:e});const{path:n="/",exact:r=!1,strict:a=!1}=e,{re:o,keys:i}=function(t,e){const n=`${e.end}${e.strict}`,r=x[n]||(x[n]={}),a=JSON.stringify(t);if(r[a])return r[a];const o=[],i={re:s(t,o,e),keys:o};return O<b&&(r[a]=i,O+=1),i}(n,{end:r,strict:a}),u=o.exec(t);if(!u)return null;const[c,...l]=u,f=t===c;return r&&!f?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:f,params:i.reduce((t,e,n)=>(t[e.name]=l[n],t),{})}}function E(t,e){return null==t&&null==e||null!=e&&t&&e&&t.path===e.path&&t.url===e.url&&y(t.params,e.params)}function j(t,e){for(var n,r,a=null,o=!1,i=!1,s=arguments.length;s-- >2;)R.push(arguments[s]);for(;R.length>0;){var u=R.pop();if(u&&void 0!==u.pop)for(s=u.length;s--;)R.push(u[s]);else"boolean"==typeof u&&(u=null),(i="function"!=typeof t)&&(null==u?u="":"number"==typeof u?u=String(u):"string"!=typeof u&&(i=!1)),i&&o?a[a.length-1].vtext+=u:null===a?a=[i?{vtext:u}:u]:a.push(i?{vtext:u}:u),o=i}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(s in e.class)e.class[s]&&R.push(s);e.class=R.join(" "),R.length=0}null!=e.key&&(n=e.key),null!=e.name&&(r=e.name)}return"function"==typeof t?t(e,a||[],$):{vtag:t,vchildren:a,vtext:void 0,vattrs:e,vkey:n,vname:r,w:void 0,g:!1}}function k(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}Object.setPrototypeOf||Array;var R=[],$={forEach:function(t,e){t.forEach(function(t,n,r){return e(k(t),n,r)})},map:function(t,e){return t.map(function(t,n,r){return function(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}(e(k(t),n,r))})}};function S(t,e){return j("context-consumer",{subscribe:t,renderer:e})}var P=function(t,e){void 0===e&&(e=S);var n=new Map,r={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:()=>{}};function a(t,e){Array.isArray(t)?t.slice().forEach(function(t){e[t]=r[t]}):e[t]=Object.assign({},r),e.forceUpdate()}function o(t){return function(e){n.has(e)||(n.set(e,t),a(t,e))}}function i(t,e){return o(e)(t),function(){n.delete(t)}}return{Provider:function(t,e){return r=t.state,n.forEach(a),e},Consumer:function(t,n){return e(i,n[0])},wrapConsumer:function(t,e){var n=t.is;return function(t){var r=t.children,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&(n[r[a]]=t[r[a]])}return n}(t,["children"]);return j(n,Object.assign({ref:o(e)},a),r)}},injectProps:function(t,e){var n=null,r=Object.keys(t.properties).find(function(e){return 1==t.properties[e].elementRef});if(null==r)throw new Error("Please ensure that your Component "+t.is+' has an attribute with an "@Element" decorator. This is required to be able to inject properties.');var a=t.prototype.componentWillLoad;t.prototype.componentWillLoad=function(){if(n=i(this[r],e),a)return a.bind(this)()};var o=t.prototype.componentDidUnload;t.prototype.componentDidUnload=function(){if(n(),o)return o.bind(this)()}}}}();const U=!("undefined"==typeof window||!window.document||!window.document.createElement),_=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),C=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),I=(t,e)=>e(window.confirm(t)),L=t=>t.metaKey||t.altKey||t.ctrlKey||t.shiftKey,q=()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history},D=()=>-1===window.navigator.userAgent.indexOf("Trident"),M=()=>-1===window.navigator.userAgent.indexOf("Firefox"),T=t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"),K=t=>{var e=window[t],n="__storage_test__";try{return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}};export{A as a,E as b,P as c,K as d,w as e,v as f,f as g,l as h,u as i,c as j,p as k,U as l,_ as m,C as n,I as o,q as p,D as q,T as r,g as s,h as t,M as u,L as v};