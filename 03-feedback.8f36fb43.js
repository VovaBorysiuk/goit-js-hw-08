!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function h(e){return c=e,f=setTimeout(S,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=p();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var h="feedback-form-state",O=document.querySelector(".feedback-form"),S=O.elements,w=S.email,T=S.message,x={};!function(){var e=null,t=localStorage.getItem(h);if(t){try{e=JSON.parse(t)}catch(e){return void console.error("Set state error: ",e.message)}w.value=e.email,T.value=e.message}}(),O.addEventListener("submit",(function(e){e.preventDefault();var t=w.value,n=T.value;if(!t||!n)return alert("Please enter your email address and message !"),!1;console.log(x),O.reset(),localStorage.removeItem(h)})),O.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(x))}),500))}();
//# sourceMappingURL=03-feedback.8f36fb43.js.map
