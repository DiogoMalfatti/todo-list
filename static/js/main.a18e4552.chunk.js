(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a,i,o,r,c=t(0),d=t.n(c),u=t(12),p=t.n(u),l=(t(20),t(10)),s=t(7),b=t(3),x=t(2),g=x.a.div(a||(a=Object(b.a)(["\n  background-color: #17181f;\n  color: #797a81;\n  min-height: 100vh;\n"]))),j=x.a.div(i||(i=Object(b.a)(["\n  margin: auto;\n  max-width: 980px;\n  padding: 10px;\n"]))),h=x.a.h1(o||(o=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  border-bottom: 1px solid #444;\n  padding-bottom: 20px;\n"]))),f=t(1),m=function(n){var e=n.item,t=n.onChange;return Object(f.jsxs)(O,{done:e.done,children:[Object(f.jsx)("input",{type:"checkbox",checked:e.done,onChange:function(n){return t(e.id,n.target.checked)}}),Object(f.jsx)("label",{children:e.name})]})},O=x.a.div((function(n){var e=n.done;return"\n  display: flex;\n  background-color: #20212c;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  align-items: center;\n  input {\n    width: 25px;\n    height: 25px;\n    margin-right: 5px;\n  }\n  label {\n    color: #ccc;\n    text-decoration: ".concat(e?"line-through":"initial",";\n  }\n")})),v=function(n){var e=n.onEnter,t=Object(c.useState)(""),a=Object(s.a)(t,2),i=a[0],o=a[1];return Object(f.jsxs)(C,{children:[Object(f.jsx)("div",{className:"image",children:"\u2795"}),Object(f.jsx)("input",{type:"text",placeholder:"Adicione uma tarefa",value:i,onChange:function(n){return o(n.target.value)},onKeyUp:function(n){"Enter"===n.code&&""!==i&&(e(i),o(""))}})]})},C=x.a.div(r||(r=Object(b.a)(["\n  border: 1px solid #555;\n  border-radius: 15px;\n  padding: 10px;\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  .image {\n    margin-right: 5px;\n  }\n  input {\n    border: 0px;\n    background: transparent;\n    outline: 0;\n    color: #fff;\n    font-size: 18px;\n    flex: 1;\n  }\n"]))),k=function(){var n=Object(c.useState)([{id:1,name:"Comprar o p\xe3o na padaria",done:!1},{id:2,name:"Comprar um bolo",done:!0}]),e=Object(s.a)(n,2),t=e[0],a=e[1],i=function(n,e){var i=Object(l.a)(t);for(var o in i)i[o].id===n&&(i[o].done=e);a(i)};return Object(f.jsx)(g,{children:Object(f.jsxs)(j,{children:[Object(f.jsx)(h,{children:"Lista de Tarefas"}),Object(f.jsx)(v,{onEnter:function(n){var e=Object(l.a)(t);e.push({id:t.length+1,name:n,done:!1}),a(e)}}),t.map((function(n,e){return Object(f.jsx)(m,{item:n,onChange:i},e)}))]})})},y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};p.a.render(Object(f.jsx)(d.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),y()}},[[24,1,2]]]);
//# sourceMappingURL=main.a18e4552.chunk.js.map