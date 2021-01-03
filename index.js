!function(){"use strict";var e={691:function(e,t,r){t.__esModule=!0;var n=r(270),o=r(966);n.default.component("bond-row",{props:["row"],template:"#bond-row-template",computed:{moexUrl:function(){return"https://www.moex.com/ru/issue.aspx?code="+this.row.isin},sectorBadgeClass:function(){switch(this.row.sector){case 1:case 2:return"badge badge-pill badge-success";case 3:return"badge badge-pill badge-warning"}},sectorName:function(){switch(this.row.sector){case 1:return"ОФЗ";case 2:return"Муни";case 3:return"Корп"}},listLevelBadgeClass:function(){switch(this.row.listLevel){case 1:return"badge badge-pill badge-success";case 2:return"badge badge-pill badge-warning";case 3:return"badge badge-pill badge-danger"}},listLevelName:function(){switch(this.row.listLevel){case 1:return"I";case 2:return"II";case 3:return"III"}},showCouponStar:function(){return o.isVarCoupon(this.row)||o.hasOffer(this.row)}}})},607:function(e,t,r){var n=r(270);r(691);var o=r(871),a=r(966),s=r(310),i=r(403),u=Date.now(),c="vue-root",l="cordova"in window,d="alert-v1",f={collapseForm:window.matchMedia&&window.matchMedia("(max-width: 992px)").matches,showAlert:!i.default.load(d)};function h(){s.save(f.settings);var e=f.settings,t=[e.year,e.month,"01"].join("-"),r=Number(e.maxListLevel),n=Number(e.maxPerYear),o=Number(e.requiredCouponMonth),i=Number(e.maxAmort),u=Number(e.minTotalTradesPerc),c=Number(e.couponType),l=c>0,d=c>1;f.hasFits=!1,f.hasABI=!1,f.hasHighRisk=!1,f.showVarCouponNotice=!1,f.showOfferNotice=!1;for(var h=0,m=f.reportRows;h<m.length;h++){var p=m[h];p.fits=g(p),p.fits&&(f.hasFits=!0,a.isVarCoupon(p)&&(f.showVarCouponNotice=!0),a.hasOffer(p)&&(f.showOfferNotice=!0),f.hasABI=f.hasABI||p.inABI,f.hasHighRisk=f.hasHighRisk||p.isHighRisk)}function g(s){if(s.isHighRisk&&!e.highRisk)return!1;if(t.length<10||s.maturityDate>=t)return!1;if(e.sector1||e.sector2||e.sector3){if(1===s.sector&&!e.sector1)return!1;if(2===s.sector&&!e.sector2)return!1;if(3===s.sector&&!e.sector3)return!1}if(s.listLevel>r)return!1;if(n>-1){if(-12===s.couponMonths[0])return!1;if(s.couponMonths.length>n)return!1}if(o>0&&s.couponMonths.indexOf(o)<0)return!1;if(!l&&a.isVarCoupon(s))return!1;if(!d&&a.hasOffer(s))return!1;if(s.minDaysBetweenAmort>0){if(-1===i)return!1;if(s.minDaysBetweenAmort<i)return!1}return!(s.totalTradesPerc<u)}}function m(){Date.now()-u>1234e3&&location.reload()}l&&document.addEventListener("deviceready",(function(){document.addEventListener("resume",m,!1),window.MobileAccessibility.usePreferredTextZoom(!1)}),!1),o.default((function(e){var t;f.settings=s.load(),f.reportDate=e.date,f.reportRows=e.rows,h(),new n.default({el:"#vue-root",data:f,watch:{settings:{deep:!0,handler:function(){return h()}}},methods:{alertClose:function(){return i.default.save(d,!0)}}}),document.getElementById(c).style.display="",document.getElementById("bond-finder-loading").style.display="none",l||((t=document.documentElement).style.fontSize="medium",t.style.fontSize=1600/parseFloat(getComputedStyle(t).fontSize)+"%")}))},871:function(e,t,r){t.__esModule=!0;var n=r(403),o="https://bond-finder-lab.github.io/backend/report-v1.json?_="+Date.now(),a="report-cache-v1";t.default=function(e){var t=new XMLHttpRequest;function r(t){try{e(function(e){for(var t=e.cols,r=e.rows,n={},o=0,a=t;o<a.length;o++){var s=a[o];n[s]=t.indexOf(s)}return{date:String(e.date),rows:r.map((function(e){return{isin:String(e[n.isin]),name:String(e[n.name]),sector:Number(e[n.sector]),listLevel:Number(e[n.list_level]),totalTradesPerc:Number(e[n.total_trades_perc]),maturityDate:String(e[n.maturity_date]),minDaysBetweenAmort:Number(e[n.min_days_between_amort]),couponMonths:e[n.coupon_months],couponValues:e[n.coupon_values],closeYield:Number(e[n.close_yield]),inABI:Boolean(e[n.in_abi]),isHighRisk:Boolean(e[n.high_risk]),fits:!1}}))}}(JSON.parse(t)))}catch(e){alert("Не удалось загрузить данные. Мож инет отвалился?.."),location.reload()}}t.open("GET",o,!0),t.timeout=1e4,t.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e=this.responseText;n.default.save(a,e),r(e)}else r(n.default.load(a))},t.send()}},966:function(e,t){t.__esModule=!0,t.isVarCoupon=function(e){return e.couponValues.length>1||0===e.name.indexOf("ОФЗ-ПК ")},t.hasOffer=function(e){var t=e.couponValues;return null===t[t.length-1]}},310:function(e,t,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0;var o=r(403),a="settings-v1",s={month:"01",year:String((new Date).getFullYear()+4),sector1:!0,sector2:!0,sector3:!0,highRisk:!0,maxListLevel:"2",maxPerYear:"4",requiredCouponMonth:"0",couponType:"0",maxAmort:"90",minTotalTradesPerc:"50"};t.load=function(){var e=n({},s),t=o.default.load(a,!0);if(t&&"object"==typeof t)for(var r=0,i=Object.keys(s);r<i.length;r++){var u=i[r];u in t&&(e[u]=t[u])}return e},t.save=function(e){o.default.save(a,e,!0)}},403:function(e,t){function r(e){return"bond-finder-"+e}t.__esModule=!0,t.default={load:function(e,t){void 0===t&&(t=!1);try{var n=localStorage.getItem(r(e));return t?JSON.parse(n):n}catch(e){return null}},save:function(e,t,n){void 0===n&&(n=!1);try{localStorage.setItem(r(e),(n?JSON.stringify:String)(t))}catch(e){}}}},270:function(e){e.exports={default:Vue}}},t={};!function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(607)}();
//# sourceMappingURL=index.js.map