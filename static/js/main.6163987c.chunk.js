(this["webpackJsonpcross-demo"]=this["webpackJsonpcross-demo"]||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(12),r=n.n(c),l=(n(19),n(2)),i=n(13),s=n.n(i);n(37);var u=function(){var e=Object(a.useState)("start"),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),u=i[0],d=i[1],m=window.location.search,h=new URLSearchParams(m),p=h.get("name"),E=h.get("token");return E&&"code"!==n&&(c("code"),s.a.post("https://login.xsolla.com/api/users/account/code",{},{headers:{Authorization:"Bearer ".concat(E)}}).then((function(e){d(e.data.code)}))),o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"xl_auth",style:{height:"100%",display:"widget"===n?"block":"none"}}),"start"===n&&o.a.createElement("div",{className:"Main"},o.a.createElement("div",{style:{fontSize:"30pt"}},o.a.createElement("p",null,"You connecting ",o.a.createElement("b",null,p)," to Xsolla account"),o.a.createElement("p",null,"Sign-in into your account on next page"),o.a.createElement("button",{style:{fontSize:"30pt",width:"80%"},onClick:function(){return c("widget")}},"Start"))),"code"===n&&o.a.createElement("div",{className:"Main"},o.a.createElement("div",{style:{fontSize:"40pt"}},o.a.createElement("p",null,"Your code is"),o.a.createElement("p",null,o.a.createElement("b",null,u)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root2")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6163987c.chunk.js.map