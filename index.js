!function(){"use strict";var e={691:function(e,t,n){t.__esModule=!0;var r=n(270),o=n(966);r.default.component("bond-row",{props:["row"],template:"#bond-row-template",computed:{moexUrl:function(){return"https://www.moex.com/ru/issue.aspx?code="+this.row.isin},sectorBadgeClass:function(){switch(this.row.sector){case 1:case 2:return"badge badge-pill badge-success";case 3:return"badge badge-pill badge-warning"}},sectorName:function(){switch(this.row.sector){case 1:return"ОФЗ";case 2:return"Муни";case 3:return"Корп"}},listLevelBadgeClass:function(){var e=this.row;switch(e.listLevel){case 1:return"badge badge-pill badge-success";case 2:return"badge badge-pill badge-warning";case 3:return e.isHighRisk?"badge badge-pill badge-dark bond-finder-ir-badge":"badge badge-pill badge-danger"}},listLevelName:function(){var e=this.row;switch(e.listLevel){case 1:return"I";case 2:return"II";case 3:return e.isHighRisk?" ":"III"}},showCouponStar:function(){return o.isVarCoupon(this.row)||o.hasOffer(this.row)}}})},607:function(e,t,n){var r=n(270);n(691);var o=n(871),a=n(829),i=n(966),s=n(310),u=n(403),c=Date.now(),l="vue-root",d="cordova"in window,f="alert-v1",m={nightMode:a.default.getMode(),collapseForm:window.matchMedia&&window.matchMedia("(max-width: 992px)").matches};function h(){s.save(m.settings);for(var e=m.settings,t=[e.year,e.month,"01"].join("-"),n=Number(e.maxListLevel),r=Number(e.maxPerYear),o=Number(e.requiredCouponMonth),a=Number(e.maxAmort),u=Number(e.minTotalTradesPerc),c=Number(e.couponType),l=c>0,d=c>1,f=0,h=!1,p=!1,g=!1,v=!1,w=!1,b=!1,y=0,_=m.reportRows;y<_.length;y++){var M=_[y];if(x(M)?(f++,M.fits=!0,M.top=f<=20,w=w||i.isVarCoupon(M),b=b||i.hasOffer(M),h=h||M.inABI,p=p||M.inCBHY,g=g||M.isHighRisk,v=v||M.isQualOnly):M.fits=M.top=!1,f>=1e3)break}function x(s){if(s.isHighRisk&&!e.highRisk)return!1;if(t.length<10||s.maturityDate>=t)return!1;if(e.sector1||e.sector2||e.sector3){if(1===s.sector&&!e.sector1)return!1;if(2===s.sector&&!e.sector2)return!1;if(3===s.sector&&!e.sector3)return!1}if(s.listLevel>n)return!1;if(r>-1){if(-12===s.couponMonths[0])return!1;if(s.couponMonths.length>r)return!1}if(o>0&&s.couponMonths.indexOf(o)<0)return!1;if(!l&&i.isVarCoupon(s))return!1;if(!d&&i.hasOffer(s))return!1;if(s.minDaysBetweenAmort>0){if(-1===a)return!1;if(s.minDaysBetweenAmort<a)return!1}return!(s.totalTradesPerc<u)}m.totalFits=f,m.showAll=f/20<1.5,m.hasABI=h,m.hasCBHY=p,m.hasHighRisk=g,m.hasQualOnly=v,m.showVarCouponNotice=w,m.showOfferNotice=b}function p(){Date.now()-c>1234e3&&location.reload()}a.default.updateMarkup(),d&&(document.addEventListener("deviceready",(function(){document.addEventListener("resume",p,!1)}),!1),document.addEventListener("deviceconfigchange",(function(){a.default.updateMarkup()}),!1),document.addEventListener("click",(function(e){var t=e.target;"A"!==t.tagName||function(e){if(!e)return!0;var t=e.indexOf("moex.com/")>-1?"moex":"other",n="confirm-external-link-"+t;if(!u.default.load(n)){if(!confirm("Пожалуйста, подтвердите переход на "+("moex"===t?"сайт Московской Биржи":"внешний сайт")))return!1;u.default.save(n,"1")}return!0}(t.href)||(e.preventDefault(),e.stopPropagation())}),!1)),o.default((function(e){m.settings=s.load(),m.reportDate=e.date,m.reportRows=e.rows;var t,n=e.error;m.reportError=n,m.showAlert=!n&&!u.default.load(f),h(),new r.default({el:"#vue-root",data:m,watch:{nightMode:{handler:function(e){return a.default.setMode(e)}},settings:{deep:!0,handler:function(){return h()}}},methods:{alertClose:function(){return u.default.save(f,!0)}}}),document.getElementById(l).style.display="",document.getElementById("bond-finder-loading").style.display="none",d||((t=document.documentElement).style.fontSize="medium",t.style.fontSize=1600/parseFloat(getComputedStyle(t).fontSize)+"%")}))},871:function(e,t,n){t.__esModule=!0;var r=n(403),o="https://bond-finder-lab.github.io/backend/report-v1.json?_="+Date.now(),a="report-cache-v1";t.default=function(e){var t=new XMLHttpRequest;function n(t){try{e(function(e){for(var t=e.cols,n=e.rows,r={},o=0,a=t;o<a.length;o++){var i=a[o];r[i]=t.indexOf(i)}return{date:String(e.date),rows:n.map((function(e){return{isin:String(e[r.isin]),name:String(e[r.name]),sector:Number(e[r.sector]),listLevel:Number(e[r.list_level]),totalTradesPerc:Number(e[r.total_trades_perc]),maturityDate:String(e[r.maturity_date]),minDaysBetweenAmort:Number(e[r.min_days_between_amort]),couponMonths:e[r.coupon_months],couponValues:e[r.coupon_values],closeYield:Number(e[r.close_yield]),inABI:Boolean(e[r.in_abi]),inCBHY:Boolean(e[r.in_cbhy]),isHighRisk:Boolean(e[r.high_risk]),isQualOnly:Boolean(e[r.qual]),fits:!1,top:!1}}))}}(JSON.parse(t)))}catch(t){e({error:!0,date:null,rows:[]})}}t.open("GET",o,!0),t.timeout=1e4,t.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e=this.responseText;r.default.save(a,e),n(e)}else n(r.default.load(a))},t.send()}},829:function(e,t,n){t.__esModule=!0;var r,o,a=n(403),i="night",s=!1;function u(){return r<0?function(){try{return window.matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches}catch(e){return!1}}():r>0}function c(e,t,n){var r=e.classList;n?r.add(t):r.remove(t)}function l(){c(document.documentElement,"night",u())}o=a.default.load(i),r=null==o?-1:Number(o),document.addEventListener("scroll",(function(){var e=window.pageYOffset>0;s!==e&&(c(document.documentElement,"scrolled",e),s=e)}),!1),t.default={getMode:function(){return r},setMode:function(e){r=e,a.default.save(i,e),l()},updateMarkup:l}},966:function(e,t){function n(e){return 1===e.sector&&"ОФЗ-ПК "===e.name.substr(0,7)}t.__esModule=!0,t.isVarCoupon=function(e){return e.couponValues.length>1||n(e)},t.hasOffer=function(e){var t=e.couponValues;return null===t[t.length-1]&&!n(e)}},310:function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0;var o=n(403),a="settings-v1",i={month:"01",year:String((new Date).getFullYear()+4),sector1:!0,sector2:!0,sector3:!0,highRisk:!0,maxListLevel:"2",maxPerYear:"4",requiredCouponMonth:"0",couponType:"0",maxAmort:"90",minTotalTradesPerc:"50"};t.load=function(){var e=r({},i),t=o.default.load(a,!0);if(t&&"object"==typeof t)for(var n=0,s=Object.keys(i);n<s.length;n++){var u=s[n];u in t&&(e[u]=t[u])}return e},t.save=function(e){o.default.save(a,e,!0)}},403:function(e,t){function n(e){return"bond-finder-"+e}t.__esModule=!0,t.default={load:function(e,t){void 0===t&&(t=!1);try{var r=localStorage.getItem(n(e));return t?JSON.parse(r):r}catch(e){return null}},save:function(e,t,r){void 0===r&&(r=!1);try{localStorage.setItem(n(e),(r?JSON.stringify:String)(t))}catch(e){}}}},270:function(e){e.exports={default:Vue}}},t={};!function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}(607)}();
//# sourceMappingURL=index.js.map