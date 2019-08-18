!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports={default:Vue}},function(e,t,n){"use strict";t.__esModule=!0,t.isVarCoupon=function(e){return e.couponValues.length>1||0===e.name.indexOf("ОФЗ-ПК ")},t.hasOffer=function(e){var t=e.couponValues;return null===t[t.length-1]}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);n(3);var o=n(4),a=n(1),i=n(5),s=n(6),u=n(7),c=Date.now(),l={collapseForm:window.matchMedia&&window.matchMedia("(max-width: 992px)").matches};function d(){i.save(l.settings);var e=l.settings,t=[e.year,e.month,"01"].join("-"),n=Number(e.maxListLevel),r=Number(e.maxPerYear),o=Number(e.requiredCouponMonth),s=Number(e.maxAmort),u=Number(e.minTotalTradesPerc),c=Number(e.couponType),d=c>0,f=c>1;l.hasFits=!1,l.hasABI=!1,l.showVarCouponNotice=!1,l.showOfferNotice=!1;for(var m=0,p=l.reportRows;m<p.length;m++){var h=p[m];h.fits=g(h),h.fits&&(l.hasFits=!0,a.isVarCoupon(h)&&(l.showVarCouponNotice=!0),a.hasOffer(h)&&(l.showOfferNotice=!0),l.hasABI=l.hasABI||h.inABI)}function g(i){if(t.length<10||i.maturityDate>=t)return!1;if(e.sector1||e.sector2||e.sector3){if(1===i.sector&&!e.sector1)return!1;if(2===i.sector&&!e.sector2)return!1;if(3===i.sector&&!e.sector3)return!1}if(i.listLevel>n)return!1;if(r>-1){if(-12===i.couponMonths[0])return!1;if(i.couponMonths.length>r)return!1}if(o>0&&i.couponMonths.indexOf(o)<0)return!1;if(!d&&a.isVarCoupon(i))return!1;if(!f&&a.hasOffer(i))return!1;if(i.minDaysBetweenAmort>0){if(-1===s)return!1;if(i.minDaysBetweenAmort<s)return!1}return!(i.totalTradesPerc<u)}}function f(){Date.now()-c>1234e3&&location.reload()}"cordova"in window&&document.addEventListener("deviceready",function(){document.addEventListener("resume",f,!1)},!1),o.default(function(e){l.settings=i.load(),l.reportDate=e.date,l.reportRows=e.rows,d(),new r.default({el:"#vue-root",data:l,watch:{settings:{deep:!0,handler:function(){return d()}}}}),document.getElementById("vue-root").style.display="",document.getElementById("bond-finder-loading").style.display="none",s.default(),u.default(s.default)})},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=n(1);r.default.component("bond-row",{props:["row"],template:"#bond-row-template",computed:{moexUrl:function(){return"https://www.moex.com/ru/issue.aspx?code="+this.row.isin},sectorBadgeClass:function(){switch(this.row.sector){case 1:case 2:return"badge badge-pill badge-success";case 3:return"badge badge-pill badge-warning"}},sectorName:function(){switch(this.row.sector){case 1:return"ОФЗ";case 2:return"Муни";case 3:return"Корп"}},listLevelBadgeClass:function(){switch(this.row.listLevel){case 1:return"badge badge-pill badge-success";case 2:return"badge badge-pill badge-warning";case 3:return"badge badge-pill badge-danger"}},listLevelName:function(){switch(this.row.listLevel){case 1:return"I";case 2:return"II";case 3:return"III"}},showCouponStar:function(){return o.isVarCoupon(this.row)||o.hasOffer(this.row)}}})},function(e,t,n){"use strict";t.__esModule=!0;var r="https://bond-finder-lab.github.io/backend/report-v1.json?_="+Date.now();t.default=function(e){var t=new XMLHttpRequest;function n(){alert("Не удалось загрузить данные. Мож инет отвалился?.."),location.reload()}t.open("GET",r,!0),t.timeout=1e4,t.onreadystatechange=function(){if(4===this.readyState)if(200===this.status)try{e(function(e){for(var t=e.cols,n=e.rows,r={},o=0,a=t;o<a.length;o++){var i=a[o];r[i]=t.indexOf(i)}return{date:String(e.date),rows:n.map(function(e){return{isin:String(e[r.isin]),name:String(e[r.name]),sector:Number(e[r.sector]),listLevel:Number(e[r.list_level]),totalTradesPerc:Number(e[r.total_trades_perc]),maturityDate:String(e[r.maturity_date]),minDaysBetweenAmort:Number(e[r.min_days_between_amort]),couponMonths:e[r.coupon_months],couponValues:e[r.coupon_values],closeYield:Number(e[r.close_yield]),inABI:Boolean(e[r.in_abi]),fits:!1}})}}(JSON.parse(this.responseText)))}catch(e){n()}else n()},t.send()}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0;var o="bond-finder-settings-v1",a={month:"01",year:String((new Date).getFullYear()+4),sector1:!0,sector2:!0,sector3:!0,maxListLevel:"2",maxPerYear:"4",requiredCouponMonth:"0",couponType:"0",maxAmort:"90",minTotalTradesPerc:"50"};t.load=function(){var e,t=r({},a);try{e=JSON.parse(localStorage.getItem(o))}catch(e){}if(e&&"object"==typeof e)for(var n=0,i=Object.keys(a);n<i.length;n++){var s=i[n];s in e&&(t[s]=e[s])}return t},t.save=function(e){localStorage.setItem(o,JSON.stringify(e))}},function(e,t,n){"use strict";t.__esModule=!0;var r=document.documentElement,o=40;t.default=function(){var e=document.getElementById("adjust-font-helper");r.style.fontSize="100%";var t=e.parentElement.clientWidth-o,n=e.scrollWidth;t<n&&(r.style.fontSize=100*t/n+"%")}},function(e,t,n){"use strict";t.__esModule=!0;var r=document.documentElement,o=[],a=r.clientWidth;addEventListener("resize",function(){var e=r.clientWidth;if(e!==a){a=e;for(var t=0,n=o;t<n.length;t++)(0,n[t])()}}),t.default=function(e){o.push(e)}}]);
//# sourceMappingURL=index.js.map