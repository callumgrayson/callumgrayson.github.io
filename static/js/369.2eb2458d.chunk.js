"use strict";(self.webpackChunkany=self.webpackChunkany||[]).push([[369],{369:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(885),n=r(791),c=r(861),s=r(757),i=r.n(s),o=864e5;var l=function(){var e=(0,n.useState)(null),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,n.useEffect)((function(){(0,c.Z)(i().mark((function e(){var t,a,n,c,l,u,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!r){e.next=5;break}if(t=new Date(r.timeStamp).valueOf(),!(Date.now()-t<o)){e.next=5;break}return e.abrupt("return");case 5:if(!(a=localStorage.getItem("euroRates"))){e.next=12;break}if(n=JSON.parse(a),!((c=new Date(n.timeStamp).valueOf())&&Date.now()-c<o)){e.next=12;break}return s(n),e.abrupt("return");case 12:return e.next=14,fetch("https://api.exchangerate-api.com/v4/latest/EUR");case 14:return l=e.sent,e.next=17,l.json();case 17:return u=e.sent,d={data:u,timeStamp:(new Date).toISOString(),error:null},localStorage.setItem("euroRates",JSON.stringify(d)),s(d),e.abrupt("return");case 24:e.prev=24,e.t0=e.catch(0),s({data:null,timeStamp:(new Date).toISOString(),error:e.t0});case 27:case"end":return e.stop()}}),e,null,[[0,24]])})))()})),r},u=r(184);function d(e){var t=e.ratesObject,r=e.amount,a=e.fromCode,n=e.toCode;return a===n?r:r*(Number(t[n])/Number(t[a]))}function x(e,t){var r=t.reduce((function(r,a,n){return e<=a[0]?e<=(t[n-1]?t[n-1][0]:0)?r:r+(e-(t[n-1]?t[n-1][0]:0))*a[1]/100:e>a[0]?r+(a[0]-(t[n-1]?t[n-1][0]:0))*a[1]/100:r}),0);return{tax:r,effectiveRate:e>0?r/e*100:0}}var h={NL:{currency:"EUR",brackets:[[69399,37.07],[1/0,49.5]],countryTitle:"Netherlands"},NZ:{currency:"NZD",brackets:[[14e3,10.5],[48e3,17.5],[7e4,30],[18e4,33],[1/0,39]],countryTitle:"New Zealand"},SG:{currency:"SGD",brackets:[[2e4,0],[3e4,2],[4e4,3.5],[8e4,7],[12e4,11.5],[16e4,15],[2e5,18],[24e4,19],[28e4,19.5],[32e4,20],[5e5,22],[1e6,23],[1/0,24]],countryTitle:"Singapore"}};var m=function(){var e=(0,n.useState)("SG"),t=(0,a.Z)(e,2),r=t[0],c=t[1],s=(0,n.useState)(1e5),i=(0,a.Z)(s,2),o=i[0],m=i[1],f=(0,n.useState)(x(o,h[r].brackets)),b=(0,a.Z)(f,2),j=b[0],p=b[1],v=l();function S(e){c(e.target.name),p(x(o,h[e.target.name].brackets))}var N=o-j.tax;return(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Tax Calculator"}),Object.entries(h).map((function(e){return(0,u.jsx)("button",{name:e[0],onClick:S,style:{backgroundColor:e[0]===r?"lightgreen":"initial"},children:e[1].countryTitle},e[0])})),(0,u.jsxs)("h4",{children:["Currency: ",h[r].currency]}),(0,u.jsx)("input",{type:"number",name:"income",id:"income",onChange:function(e){var t=Number(e.target.value);m(t),p(x(t,h[r].brackets))},value:o}),(0,u.jsx)("h4",{children:"Tax Brackets"}),(0,u.jsxs)("table",{className:"tax-calculator-table",children:[(0,u.jsx)("thead",{className:"tax-calculator-table-head",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Up to"}),(0,u.jsx)("th",{children:"Rate %"})]})}),(0,u.jsx)("tbody",{children:h[r].brackets.map((function(e,t){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e[0].toLocaleString()}),(0,u.jsx)("td",{children:e[1].toFixed(1)})]},t)}))})]}),(0,u.jsx)("h4",{children:"Tax Details"}),(0,u.jsx)("h5",{children:"Tax to pay"}),(0,u.jsxs)("div",{className:"flex-row",children:[(0,u.jsx)("div",{className:"spaced-box",children:(0,u.jsxs)("p",{children:[j.tax.toLocaleString()," ",h[r].currency]})}),(0,u.jsx)("div",{className:"spaced-box",children:(0,u.jsxs)("p",{children:[j.effectiveRate.toPrecision(4),"% Effective Rate"]})})]}),(0,u.jsx)("h5",{children:"In the hand"}),(0,u.jsxs)("div",{className:"flex-row",children:[(0,u.jsx)("div",{className:"spaced-box",children:(0,u.jsxs)("p",{children:[v&&d({ratesObject:v.data.rates,amount:N,fromCode:h[r].currency,toCode:"EUR"}).toLocaleString()," ","EUR"]})}),(0,u.jsx)("div",{className:"spaced-box",children:(0,u.jsxs)("p",{children:[v&&d({ratesObject:v.data.rates,amount:N,fromCode:h[r].currency,toCode:"SGD"}).toLocaleString()," ","SGD"]})}),(0,u.jsx)("div",{className:"spaced-box",children:(0,u.jsxs)("p",{children:[v&&d({ratesObject:v.data.rates,amount:N,fromCode:h[r].currency,toCode:"NZD"}).toLocaleString()," ","NZD"]})})]})]})}}}]);
//# sourceMappingURL=369.2eb2458d.chunk.js.map