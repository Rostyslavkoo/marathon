function e(e){return e&&e.__esModule?e.default:e}const t={BUTTONS:{SETTINGS:document.querySelector(".btn-settings"),SENT_MESSAGE:document.querySelector("#send-message"),GET_CODE:document.querySelector("#get-code"),ENTER_CODE:document.querySelector("#enter-code"),SEND_USER_NAME:document.querySelector("#send-user-name")},DIALOGS:{TARGET_DIALOGS:document.querySelectorAll("[data-modal-target]"),CLOSE_DIALOGS:document.querySelectorAll("[data-modal-close]"),OVERLAY:document.querySelector(".overlay")},INPUTS:{MESSAGE:document.querySelector("#message"),AUTORISATION_EMAIL:document.querySelector("#autorisation-email"),CONFIRMATION_COD:document.querySelector("#confirmation-cod"),CHAT_NAME:document.querySelector("#settings-chat-name")},MESSAGE:{MSG_MAIN:document.querySelector("#msg-main"),TEMPLATE:document.querySelector("#msg-block")}},n=[],r="https://mighty-cove-31255.herokuapp.com/api/user",a="autorization_token";Math.pow(10,8);function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var c={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){var t,n={},r=e.split(c.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],c.timeZoneDelimiter.test(n.date)&&(n.date=e.split(c.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=c.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function m(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function S(e,t){if(null===t)return new Date(NaN);var n=e.match(u);if(!n)return new Date(NaN);var r=!!n[4],a=f(n[1]),o=f(n[2])-1,i=f(n[3]),c=f(n[4]),s=f(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,o=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}(t,c,s):new Date(NaN);var l=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(p[t]||(h(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,a)?(l.setUTCFullYear(t,o,Math.max(a,i)),l):new Date(NaN)}function f(e){return e?parseInt(e):1}function E(e){var t=e.match(s);if(!t)return NaN;var n=T(t[1]),r=T(t[2]),a=T(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function T(e){return e&&parseFloat(e.replace(",","."))||0}function N(e){if("Z"===e)return 0;var t=e.match(l);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var p=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400==0||e%4==0&&e%100!=0}function v(){document.querySelectorAll(".dialog.active").forEach((e=>{g(e)}))}function y(e){null!==e&&(e.classList.add("active"),t.DIALOGS.OVERLAY.classList.add("active"))}function g(e){null!==e&&(e.classList.remove("active"),t.DIALOGS.OVERLAY.classList.remove("active"))}function A({text:e,createdAt:r,user:{name:a},_id:c}){const u=c===n[0]?._id;console.log(u);let s=document.createElement("div");s.append(t.MESSAGE.TEMPLATE.content.cloneNode(!0)),s.querySelector("#msg-text").textContent=e,s.querySelector("#author").textContent=a,u||s.classList.add("not-author");u||function(e,t){o(1,arguments);var n=t||{},r=null==n.additionalDigits?2:i(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,c=d(e);if(c.date){var u=m(c.date,r);a=S(u.restDateString,u.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var s,l=a.getTime(),f=0;if(c.time&&(f=E(c.time),isNaN(f)))return new Date(NaN);if(!c.timezone){var T=new Date(l+f),p=new Date(0);return p.setFullYear(T.getUTCFullYear(),T.getUTCMonth(),T.getUTCDate()),p.setHours(T.getUTCHours(),T.getUTCMinutes(),T.getUTCSeconds(),T.getUTCMilliseconds()),p}s=N(c.timezone),isNaN(s)?new Date(NaN):new Date(l+f+s)}(r);t.MESSAGE.MSG_MAIN.append(s),t.INPUTS.MESSAGE.value="",I()}function I(){document.querySelector(".wrapper").scrollTo(0,document.querySelector(".wrapper").scrollHeight)}I(),t.DIALOGS.TARGET_DIALOGS.forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(e.dataset.modalTarget);v(),y(t)}))})),t.DIALOGS.CLOSE_DIALOGS.forEach((e=>{e.addEventListener("click",(()=>{g(e.closest(".dialog"))}))})),t.DIALOGS.OVERLAY.addEventListener("click",(()=>{t.DIALOGS.OVERLAY.classList.contains("block")||v()}));var D={};function O(){return t=a,e(D).get(t);var t}D=function(){function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function t(n,r){function a(t,a,o){if("undefined"!=typeof document){"number"==typeof(o=e({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c].split(";")[0]));return document.cookie=t+"="+n.write(a,t)+i}}function o(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},a=0;a<t.length;a++){var o=t[a].split("="),i=o.slice(1).join("=");try{var c=decodeURIComponent(o[0]);if(r[c]=n.read(i,c),e===c)break}catch(e){}}return e?r[e]:r}}return Object.create({set:a,get:o,remove:function(t,n){a(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}();var C={async post(e,t={},n={}){const r={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O()}`},body:JSON.stringify(t)};try{const t=await fetch(e,r);if(200!=t.status)throw Error(t.statusText);return await t.json()}catch(e){return Promise.reject(e)}},async get(e,t={},n={}){const r={method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O()}`}};try{const t=await fetch(e,r);if(200!=t.status)throw Error(t.statusText);return await t.json()}catch(e){return Promise.reject(e)}},async patch(e,t={},n={}){const r={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O()}`},body:JSON.stringify(t)};try{const t=await fetch(e,r);if(200!=t.status)throw Error(t.statusText);return await t.json()}catch(e){return Promise.reject(e)}}};async function w(){try{const e=t.INPUTS.CHAT_NAME.value;if(!e)return void alert("enter a name");const n={name:e};await C.patch(r,n);console.log(await M()),t.INPUTS.CHAT_NAME.value="",v()}catch(e){alert(e)}}async function U(){const e={email:t.INPUTS.AUTORISATION_EMAIL.value};if(e.email)try{await C.post(r,e),y(document.querySelector("#dialog-confirmation"))}catch(e){alert(e)}else alert("Enter an email")}async function L(){try{const n=t.INPUTS.CONFIRMATION_COD.value;if(!n)return void alert("Enter a code");!function(t,n,r={}){e(D).set(t,n,r)}(a,n),console.log(await M()),t.INPUTS.CONFIRMATION_COD.value="",v()}catch(e){alert(e)}}async function M(){try{const e=await C.get("https://mighty-cove-31255.herokuapp.com/api/user/me");return n.push(e),console.log(n[0]),e}catch(e){alert(e)}}async function _(){let e=t.INPUTS.MESSAGE.value;if(!e)return;n.length||await M();A({text:e,createdAt:new Date,user:{name:n[0].name},_id:n[0]?._id})}t.BUTTONS.SENT_MESSAGE.addEventListener("click",(e=>{_(),t.INPUTS.MESSAGE.focus()})),t.INPUTS.MESSAGE.addEventListener("keypress",(e=>{13===e.keyCode&&(_(),t.INPUTS.MESSAGE.focus())})),t.BUTTONS.GET_CODE.addEventListener("click",(()=>{U()})),t.INPUTS.AUTORISATION_EMAIL.addEventListener("keypress",(e=>{13===e.keyCode&&U()})),t.BUTTONS.ENTER_CODE.addEventListener("click",(()=>{L()})),t.INPUTS.CONFIRMATION_COD.addEventListener("keypress",(e=>{13===e.keyCode&&L()})),t.INPUTS.CHAT_NAME.addEventListener("keypress",(e=>{13===e.keyCode&&w()})),t.BUTTONS.SEND_USER_NAME.addEventListener("click",(()=>{w()})),async function(){try{const t=await C.get("https://mighty-cove-31255.herokuapp.com/api/messages");(e=t.messages).splice(10),e.forEach((e=>{A(e)}))}catch(e){alert(e)}var e}();
//# sourceMappingURL=index.9285abcd.js.map
