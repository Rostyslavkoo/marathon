function e(e){return e&&e.__esModule?e.default:e}const t={BUTTONS:{SETTINGS:document.querySelector(".btn-settings"),SENT_MESSAGE:document.querySelector("#send-message"),GET_CODE:document.querySelector("#get-code"),ENTER_CODE:document.querySelector("#enter-code"),SEND_USER_NAME:document.querySelector("#send-user-name")},DIALOGS:{TARGET_DIALOGS:document.querySelectorAll("[data-modal-target]"),CLOSE_DIALOGS:document.querySelectorAll("[data-modal-close]"),OVERLAY:document.querySelector(".overlay")},INPUTS:{MESSAGE:document.querySelector("#message"),AUTORISATION_EMAIL:document.querySelector("#autorisation-email"),CONFIRMATION_COD:document.querySelector("#confirmation-cod"),CHAT_NAME:document.querySelector("#settings-chat-name")},MESSAGE:{MSG_MAIN:document.querySelector("#msg-main"),TEMPLATE:document.querySelector("#msg-block")}},n={},r="https://mighty-cove-31255.herokuapp.com/api/user",a="autorization_token";function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){return i(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}function u(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e){if(i(1,arguments),!o(e)&&"number"!=typeof e)return!1;var t=u(e);return!isNaN(Number(t))}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},d=function(e,t,n){var r,a=c[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function l(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var f={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function g(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?v(s,(function(e){return e.test(u)})):w(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=t.slice(u.length);return{value:o,rest:d}}}function w(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function v(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var y,p={code:"en-US",formatDistance:d,formatLong:f,formatRelative:function(e,t,n,r){return h[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(y.matchPattern);if(!n)return null;var r=n[0],a=e.match(y.parsePattern);if(!a)return null;var i=y.valueCallback?y.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(r.length);return{value:i,rest:o}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function T(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function b(e,t){i(2,arguments);var n=u(e).getTime(),r=T(t);return new Date(n+r)}function S(e,t){i(2,arguments);var n=T(t);return b(e,-n)}function C(e){i(1,arguments);var t=1,n=u(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function E(e){i(1,arguments);var t=u(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=C(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=C(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function M(e){i(1,arguments);var t=E(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=C(n);return r}function D(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:T(a),s=null==n.weekStartsOn?o:T(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=u(e),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function N(e,t){i(1,arguments);var n=u(e),r=n.getUTCFullYear(),a=t||{},o=a.locale,s=o&&o.options&&o.options.firstWeekContainsDate,c=null==s?1:T(s),d=null==a.firstWeekContainsDate?c:T(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,d),l.setUTCHours(0,0,0,0);var f=D(l,t),h=new Date(0);h.setUTCFullYear(r,0,d),h.setUTCHours(0,0,0,0);var m=D(h,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function U(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:T(a),u=null==n.firstWeekContainsDate?o:T(n.firstWeekContainsDate),s=N(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=D(c,t);return d}function O(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var k={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return O("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):O(n+1,2)},d:function(e,t){return O(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return O(e.getUTCHours()%12||12,t.length)},H:function(e,t){return O(e.getUTCHours(),t.length)},m:function(e,t){return O(e.getUTCMinutes(),t.length)},s:function(e,t){return O(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return O(Math.floor(r*Math.pow(10,n-3)),t.length)}},A="midnight",x="noon",P="morning",I="afternoon",L="evening",q="night";function Y(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+O(i,2)}function W(e,t){return e%60==0?(e>0?"-":"+")+O(Math.abs(e)/60,2):G(e,t)}function G(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+O(Math.floor(a/60),2)+n+O(a%60,2)}var R={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return k.y(e,t)},Y:function(e,t,n,r){var a=N(e,r),i=a>0?a:1-a;return"YY"===t?O(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):O(i,t.length)},R:function(e,t){return O(E(e),t.length)},u:function(e,t){return O(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return O(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return O(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return k.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return O(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){i(1,arguments);var n=u(e),r=D(n,t).getTime()-U(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):O(a,t.length)},I:function(e,t,n){var r=function(e){i(1,arguments);var t=u(e),n=C(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):O(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):k.d(e,t)},D:function(e,t,n){var r=function(e){i(1,arguments);var t=u(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):O(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return O(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return O(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return O(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?x:0===a?A:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?L:a>=12?I:a>=4?P:q,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return k.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):k.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):O(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):k.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):k.s(e,t)},S:function(e,t){return k.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return W(a);case"XXXX":case"XX":return G(a);default:return G(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return W(a);case"xxxx":case"xx":return G(a);default:return G(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Y(a,":");default:return"GMT"+G(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Y(a,":");default:return"GMT"+G(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return O(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return O((r._originalDate||e).getTime(),t.length)}};function j(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function _(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var F={p:_,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return j(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",j(a,t)).replace("{{time}}",_(i,t))}};function H(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var z=["D","DD"],B=["YY","YYYY"];function Q(e){return-1!==z.indexOf(e)}function X(e){return-1!==B.indexOf(e)}function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,K=/''/g,ee=/[a-zA-Z]/;function te(e){return e.match(Z)[1].replace(K,"'")}Math.pow(10,8);var ne={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},re=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ae=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ie=/^([+-])(\d{2})(?::?(\d{2}))?$/;function oe(e){var t,n={},r=e.split(ne.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],ne.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ne.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ne.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function ue(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function se(e,t){if(null===t)return new Date(NaN);var n=e.match(re);if(!n)return new Date(NaN);var r=!!n[4],a=ce(n[1]),i=ce(n[2])-1,o=ce(n[3]),u=ce(n[4]),s=ce(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,u,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(he[t]||(me(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(me(e)?366:365)}(t,a)?(c.setUTCFullYear(t,i,Math.max(a,o)),c):new Date(NaN)}function ce(e){return e?parseInt(e):1}function de(e){var t=e.match(ae);if(!t)return NaN;var n=le(t[1]),r=le(t[2]),a=le(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?36e5*n+6e4*r+1e3*a:NaN}function le(e){return e&&parseFloat(e.replace(",","."))||0}function fe(e){if("Z"===e)return 0;var t=e.match(ie);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(36e5*r+6e4*a):NaN}var he=[31,null,31,30,31,30,31,31,30,31,30,31];function me(e){return e%400==0||e%4==0&&e%100!=0}function ge(){document.querySelectorAll(".dialog.active").forEach((e=>{ve(e)}))}function we(e){null!==e&&(e.classList.add("active"),t.DIALOGS.OVERLAY.classList.add("active"))}function ve(e){null!==e&&(e.classList.remove("active"),t.DIALOGS.OVERLAY.classList.remove("active"))}function ye({text:e,createdAt:r,user:{name:a,email:o}}){const c=o===n?.email;let d=document.createElement("div");d.append(t.MESSAGE.TEMPLATE.content.cloneNode(!0)),d.querySelector("#msg-text").textContent=e,d.querySelector("#author").textContent=`${a}:`,c&&d.querySelector(".msg-block").classList.add("author","sent-msg"),d.querySelector("#msg-time").textContent=function(e,t,n){i(2,arguments);var r=String(t),a=n||{},o=a.locale||p,c=o.options&&o.options.firstWeekContainsDate,d=null==c?1:T(c),l=null==a.firstWeekContainsDate?d:T(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=o.options&&o.options.weekStartsOn,h=null==f?0:T(f),m=null==a.weekStartsOn?h:T(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=u(e);if(!s(g))throw new RangeError("Invalid time value");var w=H(g),v=S(g,w),y={firstWeekContainsDate:l,weekStartsOn:m,locale:o,_originalDate:g};return r.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,F[t])(e,o.formatLong,y):e})).join("").match(J).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return te(n);var i=R[r];if(i)return!a.useAdditionalWeekYearTokens&&X(n)&&$(n,t,e),!a.useAdditionalDayOfYearTokens&&Q(n)&&$(n,t,e),i(v,n,o.localize,y);if(r.match(ee))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(function(e,t){i(1,arguments);var n=t||{},r=null==n.additionalDigits?2:T(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,o=oe(e);if(o.date){var u=ue(o.date,r);a=se(u.restDateString,u.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var s,c=a.getTime(),d=0;if(o.time&&(d=de(o.time),isNaN(d)))return new Date(NaN);if(!o.timezone){var l=new Date(c+d),f=new Date(0);return f.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),f.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),f}return s=fe(o.timezone),isNaN(s)?new Date(NaN):new Date(c+d+s)}(r),"\tHH:mm"),t.MESSAGE.MSG_MAIN.append(d),t.INPUTS.MESSAGE.value="",pe()}function pe(){document.querySelector(".wrapper").scrollTo(0,document.querySelector(".wrapper").scrollHeight)}pe(),t.DIALOGS.TARGET_DIALOGS.forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(e.dataset.modalTarget);ge(),we(t)}))})),t.DIALOGS.CLOSE_DIALOGS.forEach((e=>{e.addEventListener("click",(()=>{ve(e.closest(".dialog"))}))})),t.DIALOGS.OVERLAY.addEventListener("click",(()=>{t.DIALOGS.OVERLAY.classList.contains("block")||ge()}));var Te={};function be(){return Ue(a)}Te=function(){function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function t(n,r){function a(t,a,i){if("undefined"!=typeof document){"number"==typeof(i=e({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var u in i)i[u]&&(o+="; "+u,!0!==i[u]&&(o+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(a,t)+o}}function i(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},a=0;a<t.length;a++){var i=t[a].split("="),o=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(r[u]=n.read(o,u),e===u)break}catch(e){}}return e?r[e]:r}}return Object.create({set:a,get:i,remove:function(t,n){a(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}();var Se={async post(e,t={},n={}){const r={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${be()}`},body:JSON.stringify(t)};try{const t=await fetch(e,r);if(200!=t.status)throw Error(t.statusText);return await t.json()}catch(e){return Promise.reject(e)}},async get(e,t={},n={}){const r={method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${be()}`}};try{const t=await fetch(e,r);if(200!=t.status)throw Error(t.statusText);return await t.json()}catch(e){return Promise.reject(e)}},async patch(e,t={},n={}){const r={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${be()}`},body:JSON.stringify(t)};try{const t=await fetch(e,r);if(200!=t.status)throw Error(t.statusText);return await t.json()}catch(e){return Promise.reject(e)}}};const Ce=new WebSocket(`ws://mighty-cove-31255.herokuapp.com/websockets?${Ue(a)}`);async function Ee(){try{const e=t.INPUTS.CHAT_NAME.value;if(!e)return void alert("enter a name");const n={name:e};await Se.patch(r,n);console.log(await Ne()),t.INPUTS.CHAT_NAME.value="",ge()}catch(e){alert(e)}}async function Me(){const e={email:t.INPUTS.AUTORISATION_EMAIL.value};if(e.email)try{await Se.post(r,e),we(document.querySelector("#dialog-confirmation"))}catch(e){alert(e)}else alert("Enter an email")}async function De(){try{const r=t.INPUTS.CONFIRMATION_COD.value;if(!r)return void alert("Enter a code");!function(t,n,r={}){e(Te).set(t,n,r)}(a,r),await Ne()?(t.INPUTS.CONFIRMATION_COD.value="",ge(),Oe()):(n=a,e(Te).remove(n))}catch(e){alert(e)}var n}async function Ne(){try{const e=await Se.get("https://mighty-cove-31255.herokuapp.com/api/user/me");if(!e)return;return n.name=e?.name,n.id=e?._id,n.email=e?.email,e}catch(e){alert(e)}}function Ue(t){return e(Te).get(t)}async function Oe(){try{!function(e){const t=e.reverse();e.splice(t.length-100,t.length),e.forEach((e=>{ye(e)}))}((await Se.get("https://mighty-cove-31255.herokuapp.com/api/messages")).messages)}catch(e){alert(e)}}async function ke(){let e=t.INPUTS.MESSAGE.value;e&&Ce.send(JSON.stringify({text:e}))}t.BUTTONS.SENT_MESSAGE.addEventListener("click",(e=>{ke(),t.INPUTS.MESSAGE.focus()})),t.INPUTS.MESSAGE.addEventListener("keypress",(e=>{13===e.keyCode&&(ke(),t.INPUTS.MESSAGE.focus())})),t.BUTTONS.GET_CODE.addEventListener("click",(()=>{Me()})),t.INPUTS.AUTORISATION_EMAIL.addEventListener("keypress",(e=>{13===e.keyCode&&Me()})),t.BUTTONS.ENTER_CODE.addEventListener("click",(()=>{De()})),t.INPUTS.CONFIRMATION_COD.addEventListener("keypress",(e=>{13===e.keyCode&&De()})),t.INPUTS.CHAT_NAME.addEventListener("keypress",(e=>{13===e.keyCode&&Ee()})),t.BUTTONS.SEND_USER_NAME.addEventListener("click",(()=>{Ee()})),Ce.onopen=function(e){console.log(e)},Ce.onmessage=function(e){ye(JSON.parse(e.data))},Ce.onerror=function(e){alert(`[error] ${e.message}`)},Ue(a)?(Oe(),Ne()):we(document.querySelector("#dialog-autorisation"));
//# sourceMappingURL=index.7ad0f610.js.map
