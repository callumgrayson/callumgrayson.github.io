"use strict";(self.webpackChunkany=self.webpackChunkany||[]).push([[388],{388:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return m}});var o=n(861),s=n(885),u=n(757),i=n.n(u),l=n(791),f=n(982),h=function(e){for(var t=e.length,n={},r={},a=0;a<t;a++){var c=e[a],o=c.length;r=n;for(var s=0;s<o;s++){var u=c[s],i=s===o-1;r.hasOwnProperty(u)?!1===r[u].end&&!0===i&&(r[u].end=!0):r[u]={end:i},r=r[u]}}return n},p=function(){var e=(0,o.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split("\n").map((function(e){return e.toLowerCase()})),r=h(n),e.abrupt("return",[r,n]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)(i().mark((function e(t,n){var r,a,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.trim().toLowerCase(),a=r.length,c=r.split("").sort().join(""),o=[],n.forEach((function(e){e.length===Number(a)&&(e.split("").sort().join("")===c&&o.push(e))})),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(i().mark((function e(t,n){var r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},n.forEach((function(e){if(e.length===Number(t)){var n=e.split("").sort().join("");r.hasOwnProperty(n)?r[n]=[].concat((0,f.Z)(r[n]),[e]):r[n]=[e]}})),a=[],Object.values(r).forEach((function(e){e.length>1&&a.push(e)})),c=a.sort((function(e,t){return t.length-e.length})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=n(184),g=function(e){return(0,x.jsx)("div",{className:"loaderBox",children:e.loading&&"...".concat(e.text,"...")})},b=function(e){var t=(0,l.useState)("small"),n=(0,s.Z)(t,2),a=n[0],u=n[1],f=(0,l.useState)(""),h=(0,s.Z)(f,2),b=h[0],m=h[1],j=(0,l.useState)(""),y=(0,s.Z)(j,2),w=y[0],O=y[1],S=(0,l.useState)([]),Z=(0,s.Z)(S,2),k=Z[0],P=Z[1],E=(0,l.useState)(""),A=(0,s.Z)(E,2),C=A[0],D=A[1],N=(0,l.useState)(""),L=(0,s.Z)(N,2),I=L[0],B=L[1],T=(0,l.useState)([]),q=(0,s.Z)(T,2),F=q[0],z=q[1],G=(0,l.useState)({}),H=(0,s.Z)(G,2),J=H[0],K=H[1],M=(0,l.useState)({}),Q=(0,s.Z)(M,2),R=Q[0],U=Q[1],V=(0,l.useState)(!1),W=(0,s.Z)(V,2),X=W[0],Y=W[1],$=(0,l.useState)(!1),_=(0,s.Z)($,2),ee=_[0],te=_[1],ne=(0,l.useState)(!1),re=(0,s.Z)(ne,2),ae=re[0],ce=re[1];(0,l.useEffect)((function(){var e=function(){switch(a){case"small":return"https://gist.githubusercontent.com/callumgrayson/452618a6cccc79dcfd5bcada74169d8f/raw/e2afcae22e0da19acafe94818fd237da855bbc2c/corncob.txt";case"large":return"https://gist.githubusercontent.com/callumgrayson/caf0f4f67ecbbd13579441a59facfefc/raw/61c2ce99798596bcf2203b91801e64d4ba0545c8/words.txt";default:return""}},t=function(){var t=(0,o.Z)(i().mark((function t(){var n,o,u,l,f,h,d,v,x;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={},!R||!R.hasOwnProperty(a)){t.next=3;break}return t.abrupt("return");case 3:if(localStorage.hasOwnProperty(a)){t.next=15;break}return o=e(),Y(!0),t.next=8,fetch(o);case 8:return u=t.sent,t.next=11,u.text();case 11:n=t.sent,localStorage.setItem(a,n),t.next=16;break;case 15:n=localStorage.getItem(a);case 16:return t.next=18,p(n);case 18:l=t.sent,f=(0,s.Z)(l,2),h=f[0],d=f[1],v=c(c({},J),{},r({},a,h)),x=c(c({},R),{},r({},a,d)),K(v),U(x),Y(!1);case 27:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[a,J,R]),(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te(!0),e.next=3,d(t,R[a]);case 3:n=e.sent,b&&!n.length&&(n=["There are no anagrams"]),P(n),te(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();b&&R.hasOwnProperty(a)&&e(b)}),[b,R,a]),(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce(!0),e.next=3,v(t,R[a]);case 3:n=e.sent,C&&!n.length&&(n=[["There are no anagrams"]]),z(n),ce(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();C&&R.hasOwnProperty(a)&&e(C)}),[C,R,a]);var oe=function(e){e.preventDefault(),m(w)},se=function(e){e.preventDefault(),D(I)};return(0,x.jsxs)("div",{className:"v1",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"Dictionary size: "}),(0,x.jsxs)("select",{value:a,onChange:function(e){u(e.target.value)},children:[(0,x.jsx)("option",{value:"small",children:"Small (58k)"}),(0,x.jsx)("option",{value:"large",children:"Large (230k)"})]}),(0,x.jsx)(g,{loading:X,text:"Loading"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Anagrams by letters"}),(0,x.jsx)("div",{className:"formBox".concat(X&&" isFetching"),children:!X&&(0,x.jsxs)("form",{onSubmit:oe,children:[(0,x.jsx)("input",{type:"text",value:w,onChange:function(e){O(e.target.value)},maxLength:29,placeholder:"enter word/letters",required:!0}),(0,x.jsx)("button",{onClick:oe,children:"Search"})]})}),(0,x.jsx)("div",{children:ee?(0,x.jsx)(g,{loading:ee,text:"Searching"}):(0,x.jsx)("ul",{children:k&&k.map((function(e,t){return(0,x.jsx)("li",{children:e},"".concat(t).concat(e))}))})})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Anagrams by length"}),(0,x.jsx)("div",{className:"formBox".concat(X&&" isFetching"),children:!X&&(0,x.jsxs)("form",{onSubmit:se,children:[(0,x.jsx)("input",{type:"number",min:2,max:29,value:I,onChange:function(e){B(e.target.value)},placeholder:"enter word length",required:!0,style:{width:"173px"}}),(0,x.jsx)("button",{onClick:se,children:"Search"})]})}),(0,x.jsx)("div",{children:ae?(0,x.jsx)(g,{loading:ae,text:"Searching"}):F.length>0&&function(e){if(e.length<1)return[{0:[""]}];var t={};return e.forEach((function(e){var n=e.length;t.hasOwnProperty(n)?t[n].push(e):t[n]=[e]})),Object.keys(t).sort((function(e,t){return t-e})).map((function(e){return r({},e,t[e])}))}(F).map((function(e){var t=e?Object.keys(e)[0]:0;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("h4",{children:["1"===t?0:t," variations"]}),(0,x.jsx)("ul",{children:e[t].map((function(e,t){return Array.isArray(e)&&e.length?(0,x.jsx)("li",{children:e.join(" - ")},"".concat(t).concat(e[0])):e}))})]},t)}))})]})]})};var m=function(){return(0,x.jsxs)("div",{className:"Anagrams",children:[(0,x.jsx)("h2",{children:"Anagrams"}),(0,x.jsx)(b,{})]})}},982:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(907);var a=n(181);function c(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=388.75f3a495.chunk.js.map