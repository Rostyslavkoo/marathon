const t={BUTTONS:{SETTINGS:document.querySelector(".btn-settings"),SENT_MESSAGE:document.querySelector("#send-message"),GET_CODE:document.querySelector("#get-code")},DIALOGS:{TARGET_DIALOGS:document.querySelectorAll("[data-modal-target]"),CLOSE_DIALOGS:document.querySelectorAll("[data-modal-close]"),OVERLAY:document.querySelector(".overlay")},INPUTS:{MESSAGE:document.querySelector("#message"),AUTORISATION_EMAIL:document.querySelector("#autorisation-email"),CONFIRMATION_COD:document.querySelector("#confirmation-cod")},MESSAGE:{MSG_MAIN:document.querySelector("#msg-main"),TEMPLATE:document.querySelector("#msg-block")}},e="https://mighty-cove-31255.herokuapp.com/api/user";function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return n(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function a(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(n(1,arguments),!r(t)&&"number"!=typeof t)return!1;var e=a(t);return!isNaN(Number(e))}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},u=function(t,e,n){var r,a=o[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function s(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var c={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?m(s,(function(t){return t.test(u)})):f(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=e.slice(u.length);return{value:o,rest:d}}}function f(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function m(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var g,w={code:"en-US",formatDistance:u,formatLong:c,formatRelative:function(t,e,n,r){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(g.matchPattern);if(!n)return null;var r=n[0],a=t.match(g.parsePattern);if(!a)return null;var i=g.valueCallback?g.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function y(t,e){n(2,arguments);var r=a(t).getTime(),i=v(e);return new Date(r+i)}function b(t,e){n(2,arguments);var r=v(e);return y(t,-r)}function T(t){n(1,arguments);var e=1,r=a(t),i=r.getUTCDay(),o=(i<e?7:0)+i-e;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function S(t){n(1,arguments);var e=a(t),r=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=T(i),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=T(u);return e.getTime()>=o.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}function p(t){n(1,arguments);var e=S(t),r=new Date(0);r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0);var a=T(r);return a}function M(t,e){n(1,arguments);var r=e||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:v(o),s=null==r.weekStartsOn?u:v(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function C(t,e){n(1,arguments);var r=a(t),i=r.getUTCFullYear(),o=e||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:v(s),d=null==o.firstWeekContainsDate?c:v(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var h=M(l,e),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var m=M(f,e);return r.getTime()>=h.getTime()?i+1:r.getTime()>=m.getTime()?i:i-1}function E(t,e){n(1,arguments);var r=e||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:v(i),u=null==r.firstWeekContainsDate?o:v(r.firstWeekContainsDate),s=C(t,e),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=M(c,e);return d}function D(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var U={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):D(n+1,2)},d:function(t,e){return D(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return D(t.getUTCHours()%12||12,e.length)},H:function(t,e){return D(t.getUTCHours(),e.length)},m:function(t,e){return D(t.getUTCMinutes(),e.length)},s:function(t,e){return D(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),e.length)}},P="midnight",k="noon",x="morning",O="afternoon",A="evening",N="night";function L(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+D(i,2)}function q(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+D(Math.floor(a/60),2)+n+D(a%60,2)}var W={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return U.y(t,e)},Y:function(t,e,n,r){var a=C(t,r),i=a>0?a:1-a;return"YY"===e?D(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):D(i,e.length)},R:function(t,e){return D(S(t),e.length)},u:function(t,e){return D(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return U.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){var o=function(t,e){n(1,arguments);var r=a(t),i=M(r,e).getTime()-E(r,e).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===e?r.ordinalNumber(o,{unit:"week"}):D(o,e.length)},I:function(t,e,r){var i=function(t){n(1,arguments);var e=a(t),r=T(e).getTime()-p(e).getTime();return Math.round(r/6048e5)+1}(t);return"Io"===e?r.ordinalNumber(i,{unit:"week"}):D(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):U.d(t,e)},D:function(t,e,r){var i=function(t){n(1,arguments);var e=a(t),r=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=r-i;return Math.floor(o/864e5)+1}(t);return"Do"===e?r.ordinalNumber(i,{unit:"dayOfYear"}):D(i,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return D(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return D(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?k:0===a?P:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?A:a>=12?O:a>=4?x:N,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return U.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):U.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):U.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):U.s(t,e)},S:function(t,e){return U.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return q(a);case"XXXX":case"XX":return Y(a);default:return Y(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return q(a);case"xxxx":case"xx":return Y(a);default:return Y(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(a,":");default:return"GMT"+Y(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(a,":");default:return"GMT"+Y(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return D(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return D((r._originalDate||t).getTime(),e.length)}};function G(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function I(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var H={p:I,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return G(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",G(a,e)).replace("{{time}}",I(i,e))}};function F(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var R=["D","DD"],j=["YY","YYYY"];function z(t){return-1!==R.indexOf(t)}function _(t){return-1!==j.indexOf(t)}function B(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Q=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function $(t){return t.match(J)[1].replace(V,"'")}function Z(){document.querySelectorAll(".dialog.active").forEach((t=>{et(t)}))}function tt(e){null!==e&&(e.classList.add("active"),t.DIALOGS.OVERLAY.classList.add("active"))}function et(e){null!==e&&(e.classList.remove("active"),t.DIALOGS.OVERLAY.classList.remove("active"))}function nt(){let e=t.INPUTS.MESSAGE.value;if(!e)return;let r=document.createElement("div");r.append(t.MESSAGE.TEMPLATE.content.cloneNode(!0)),r.querySelector("#msg-text").textContent=e,r.querySelector("#author").textContent="me:",r.querySelector("#msg-time").textContent=function(t,e,r){n(2,arguments);var o=String(e),u=r||{},s=u.locale||w,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:v(c),l=null==u.firstWeekContainsDate?d:v(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,f=null==h?0:v(h),m=null==u.weekStartsOn?f:v(u.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=a(t);if(!i(g))throw new RangeError("Invalid time value");var y=F(g),T=b(g,y),S={firstWeekContainsDate:l,weekStartsOn:m,locale:s,_originalDate:g};return o.match(X).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,s.formatLong,S):t})).join("").match(Q).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return $(n);var a=W[r];if(a)return!u.useAdditionalWeekYearTokens&&_(n)&&B(n,e,t),!u.useAdditionalDayOfYearTokens&&z(n)&&B(n,e,t),a(T,n,s.localize,S);if(r.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date,"\tHH:mm"),t.MESSAGE.MSG_MAIN.append(r),t.INPUTS.MESSAGE.value="",rt()}function rt(){document.querySelector(".wrapper").scrollTo(0,document.querySelector(".wrapper").scrollHeight)}async function at(){await async function(t,e){try{if(!e)throw Error("Enter an email");const n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({email:e})},r=await fetch(t,n);if(200!==r.status)throw Error(r.statusText);return await r.json()}catch(t){alert(t)}}(e,t.INPUTS.AUTORISATION_EMAIL.value)&&tt(document.querySelector("#dialog-confirmation"))}rt(),t.DIALOGS.TARGET_DIALOGS.forEach((t=>{t.addEventListener("click",(()=>{const e=document.querySelector(t.dataset.modalTarget);Z(),tt(e)}))})),t.DIALOGS.CLOSE_DIALOGS.forEach((t=>{t.addEventListener("click",(()=>{et(t.closest(".dialog"))}))})),t.DIALOGS.OVERLAY.addEventListener("click",(()=>{t.DIALOGS.OVERLAY.classList.contains("block")||Z()})),t.BUTTONS.SENT_MESSAGE.addEventListener("click",(e=>{nt(),t.INPUTS.MESSAGE.focus()})),t.INPUTS.MESSAGE.addEventListener("keypress",(e=>{13===e.keyCode&&(nt(),t.INPUTS.MESSAGE.focus())})),t.BUTTONS.GET_CODE.addEventListener("click",(()=>{at()})),t.INPUTS.AUTORISATION_EMAIL.addEventListener("keypress",(t=>{13===t.keyCode&&at()}));
//# sourceMappingURL=index.e31c7adf.js.map
