/*! For license information please see ckv.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CKV",[],e):"object"==typeof exports?exports.CKV=e():t.CKV=e()}(self,(()=>(()=>{var t={337:(t,e,n)=>{var r=n(501).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d={};function v(){}function p(){}function m(){}var y={};l(y,s,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(_([])));w&&w!==n&&i.call(w,s)&&(y=w);var b=m.prototype=v.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,a,s,u){var c=f(t[o],t,a);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==r(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,u)}),(function(t){n("throw",t,s,u)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,u)}))}u(c.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=m,l(b,"constructor",m),l(m,"constructor",p),p.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new x(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(b),l(b,c,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},501:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},824:(t,e,n)=>{var r=n(337)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};return(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function s(e){t(a,o,i,s,u,"next",e)}function u(e){t(a,o,i,s,u,"throw",e)}s(void 0)}))}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(r,{default:()=>b});var u=n(824),c=n.n(u),l=function(){function t(){o(this,t),s(this,"memory",[])}return a(t,[{key:"remember",value:function(t,e,n){this.memory.push({elem:t,event:e,callback:n})}},{key:"getAll",value:function(){return this.memory}},{key:"forgetAll",value:function(){this.memory=[]}}]),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(t,e){if(e){if(!t)throw new Error("Argument is required");for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(r.length){for(var i=!1,a=0;a<r.length;a++)h(t)===r[a]&&(i=!0);if(!i)throw new Error("Argument must be of type: ".concat(r.join(", ")))}}}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var m={Green:new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return v(this,t)});function i(){return o(this,i),r.apply(this,arguments)}return a(i,[{key:"filter",value:function(t,e){var n=t,r=0,o=n.length;null!=e&&e.gap&&(r=e.gap<o?e.gap:0),null!=e&&e.length&&(o=o-r>=e.length?e.length:o-r);for(var i=r,a=0;a<o;i+=4,a+=4){var s={R:i+0,G:i+1,B:i+2,A:i+3};n[s.G]>80&&n[s.R]<=.6875*n[s.G]&&n[s.B]<=.71428*n[s.G]||n[s.G]>=50&&n[s.G]<=130&&n[s.R]<=.76*n[s.G]&&n[s.B]<=.4*n[s.G]?n[s.A]=0:(n[s.G]<80&&n[s.R]<=.6875*n[s.G]&&n[s.B]<=.5*n[s.G]||n[s.G]>80&&n[s.R]>=.6875*n[s.G]&&n[s.R]<=.75*n[s.G]&&n[s.B]>=.5*n[s.G]&&n[s.B]<=.6875*n[s.G])&&(n[s.R]=n[s.G]=n[s.B]=Math.round((n[s.R]+n[s.G]+n[s.B])/3))}return n}}]),i}(a((function t(){o(this,t)}))))},y=function(){function t(e){o(this,t),s(this,"canvasElement",void 0),s(this,"ctx",void 0),s(this,"defaultTypeFilter","Green"),s(this,"filterer",null),s(this,"videoElement",null),s(this,"videoCoords",{ratioY:0,height:0,width:0,dy:0}),s(this,"requestId",null),s(this,"prevImageData",null),f(e,!0,"object"),this.canvasElement=e,this.ctx=this.canvasElement.getContext("2d"),this.setFilter(this.defaultTypeFilter),this.filterPixels=this.filterPixels.bind(this)}var n;return a(t,[{key:"setFilter",value:function(t){if(f(t,!0,"string"),!m[t])throw new Error("There is no such filter.");this.filterer=m[t]}},{key:"filter",value:function(t){f(t,!0,"object"),this.videoElement=t,this.calcVideoPlacement(),this.filterPixels()}},{key:"stop",value:function(){null!==this.requestId&&cancelAnimationFrame(this.requestId)}},{key:"updateMetric",value:function(){this.calcVideoPlacement()}},{key:"filterPixels",value:(n=e(c().mark((function t(){var e,n,r=this;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.videoElement){t.next=2;break}throw new Error("Video not found");case 2:if(this.ctx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height),this.ctx.drawImage(this.videoElement,0,this.videoCoords.dy,this.videoCoords.width,this.videoCoords.height),!((e=this.ctx.getImageData(0,this.videoCoords.dy,this.videoCoords.width,this.videoCoords.height)).data.length>8294400)){t.next=13;break}return this.prevImageData&&this.ctx.putImageData(this.prevImageData,0,this.videoCoords.dy),t.next=9,this.filterLoop(e);case 9:this.prevImageData=e,this.requestId=requestAnimationFrame((function(){r.ctx.putImageData(e,0,r.videoCoords.dy),setTimeout(r.filterPixels,0)})),t.next=16;break;case 13:null===(n=this.filterer)||void 0===n||n.filter(e.data),this.ctx.putImageData(e,0,this.videoCoords.dy),this.requestId=requestAnimationFrame(this.filterPixels);case 16:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"filterLoop",value:function(t){var e=this;f(t,!0,"object");var n=t.data,r=4147200,o=Math.ceil(n.length/r);return new Promise((function(i,a){try{for(var s=function(a){setTimeout((function(){var s;null===(s=e.filterer)||void 0===s||s.filter(n,{gap:a*r?a*r:0,length:r}),a+1===o&&i(t)}),0)},u=0;u<o;u++)s(u)}catch(t){a(t)}}))}},{key:"calcVideoPlacement",value:function(){this.videoElement&&(this.videoCoords.ratioY=this.videoElement.videoWidth/this.videoElement.videoHeight,this.videoCoords.height=Math.round(this.canvasElement.width/this.videoCoords.ratioY),this.videoCoords.width=this.canvasElement.width,this.videoCoords.dy=Math.round((this.canvasElement.height-this.videoCoords.height)/2))}}]),t}(),g=function(){function t(e,n){if(o(this,t),s(this,"rootElement",void 0),s(this,"canvasElement",document.createElement("canvas")),s(this,"worker",void 0),s(this,"eventMemory",new l),f(e,!0,"string"),f(n,!1,"object"),this.rootElement=document.querySelector(e),null===this.rootElement)throw new Error("Element with this selector not found");this.rootElement.append(this.canvasElement),this.updateCanvas(),this.worker=new y(this.canvasElement),n&&this.setOptions(n),this.update=this.update.bind(this);var r,i,a=(r=this.update,250,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];clearTimeout(i),i=setTimeout((function(){i=void 0,r.apply(void 0,e)}),250)});window.addEventListener("resize",a),this.eventMemory.remember(window,"resize",a)}return a(t,[{key:"draw",value:function(t){f(t,!0),this.worker.filter(t)}},{key:"stop",value:function(){this.worker.stop()}},{key:"destroy",value:function(){this.eventMemory.getAll().forEach((function(t){var e=t.elem,n=t.event,r=t.callback;e.removeEventListener(n,r)})),this.eventMemory.forgetAll(),this.removeCanvasElement()}},{key:"setOptions",value:function(t){f(t,!0,"object"),t.filter&&this.worker.setFilter(t.filter)}},{key:"removeCanvasElement",value:function(){this.canvasElement.remove()}},{key:"update",value:function(){this.updateCanvas(),this.worker.updateMetric()}},{key:"updateCanvas",value:function(){this.canvasElement.style.width=this.rootElement.clientWidth+"px",this.canvasElement.style.height=this.rootElement.clientHeight+"px",this.canvasElement.width=this.rootElement.clientWidth,this.canvasElement.height=this.rootElement.clientHeight}}]),t}(),w=function(){function t(e,n){o(this,t),s(this,"videoElement",document.createElement("video")),s(this,"loaded",!1),s(this,"options",{loop:!1,mute:!1,showOriginalIn:null}),f(e,!0,"string"),f(n,!1,"object"),this.init(),this.newVideo(e,n)}return a(t,[{key:"newVideo",value:function(t,e){var n=this;f(t,!0,"string"),f(e,!1,"object"),this.loaded=!1,this.videoElement.addEventListener("loadeddata",(function(){n.loaded=!0}),{once:!0}),e&&(this.mergeOptions(e),this.setOptions(this.options)),this.videoElement.src=t,this.videoElement.load()}},{key:"play",value:function(){this.videoElement.play()}},{key:"stop",value:function(){this.videoElement.pause()}},{key:"setVolume",value:function(t){f(t,!0,"number"),this.videoElement.volume=t}},{key:"seek",value:function(t){f(t,!0,"number"),t>1?t=1:t<0&&(t=0);var e=this.videoElement.duration*t;this.videoElement.currentTime=e}},{key:"destroy",value:function(){this.removeVideoElement()}},{key:"removeVideoElement",value:function(){this.videoElement.remove()}},{key:"init",value:function(){this.initVideo()}},{key:"initVideo",value:function(){this.videoElement.crossOrigin="anonymous",this.videoElement.setAttribute("preload","auto"),this.videoElement.setAttribute("playsinline",""),this.videoElement.className="CKVVideo"}},{key:"mergeOptions",value:function(t){f(t,!0,"object");for(var e=Object.keys(this.options),n=0;n<e.length;n++){var r=e[n];r in t&&(this.options[r]=t[r])}}},{key:"setOptions",value:function(t){if(f(t,!0,"object"),t.loop?this.videoElement.setAttribute("loop",""):this.videoElement.removeAttribute("loop"),t.showOriginalIn){if("string"!=typeof t.showOriginalIn)throw new TypeError("showOriginalIn parametr should be string");var e=document.querySelector(t.showOriginalIn);if(!e)throw new Error("Element not found");this.videoElement.style.cssText="width: 100%; height: 100%; object-fit: contain;",e.append(this.videoElement)}else this.removeVideoElement();t.mute?(this.videoElement.muted=!0,this.videoElement.setAttribute("muted","")):(this.videoElement.muted=!1,this.videoElement.removeAttribute("muted"))}}]),t}();const b=function(){function t(e,n,r){o(this,t),s(this,"canvas",void 0),s(this,"video",void 0),this.canvas=new g(e,r),this.video=new w(n,r)}var n;return a(t,[{key:"play",value:(n=e(c().mark((function t(){var e,n=this;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.video.videoElement.paused){t.next=3;break}return console.log("Already running"),t.abrupt("return");case 3:if(e=function(){n.video.play(),n.canvas.draw(n.video.videoElement)},t.prev=4,!this.video.loaded){t.next=9;break}e(),t.next=11;break;case 9:return t.next=11,new Promise((function(t){n.video.videoElement.addEventListener("loadeddata",(function(){e(),t()}),{once:!0})}));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.error(t.t0);case 16:return t.abrupt("return");case 17:case"end":return t.stop()}}),t,this,[[4,13]])}))),function(){return n.apply(this,arguments)})},{key:"stop",value:function(){this.canvas.stop(),this.video.stop()}},{key:"setVolume",value:function(t){f(t,!0,"number"),this.video.setVolume(t)}},{key:"seek",value:function(t){f(t,!0,"number"),this.video.seek(t)}},{key:"newVideo",value:function(t,e){f(t,!0,"string"),f(e,!1,"object"),this.video.videoElement.paused||this.stop(),this.video.newVideo(t,e),e&&this.canvas.setOptions(e)}},{key:"destroy",value:function(){this.stop(),this.canvas.destroy(),this.video.destroy()}}]),t}()})(),r.default})()));