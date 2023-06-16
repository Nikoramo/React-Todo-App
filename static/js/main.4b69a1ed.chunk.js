(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n,o=c(0),a=c(25),l=c.n(a),r=(c(30),c(31),c(32),c(13)),s=c(2),i=c(10),d=c(7),u=c(5),j=c(3),b=function(e){var t=e.handleAddTodo,c=Object(o.useState)(""),n=Object(u.a)(c,2),a=n[0],l=n[1];return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"todos"}),Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),a&&(t(a),l(""))},children:Object(j.jsx)("input",{type:"text","data-cy":"createTodo",className:"new-todo",placeholder:"What needs to be done?",value:a,onChange:function(e){l(e.target.value)}})})]})},O=c(22),f=c.n(O),p=function(e){var t=e.todo,c=e.deleteTodo,n=e.updateTodo,a=t.id,l=t.title,r=t.completed,s=Object(o.useState)(!1),d=Object(u.a)(s,2),b=d[0],O=d[1],p=Object(o.useState)(l),m=Object(u.a)(p,2),x=m[0],h=m[1],v=Object(o.useRef)(null);Object(o.useEffect)((function(){v.current&&v.current.focus()}),[b]);var g=function(){O(!1),x!==l&&(x?n(Object(i.a)(Object(i.a)({},t),{},{title:x})):c(a))};return Object(j.jsxs)("li",{className:f()({completed:r,editing:b}),children:[Object(j.jsxs)("div",{className:"view",onDoubleClick:function(){O(!0)},children:[Object(j.jsx)("input",{type:"checkbox",className:"toggle",id:"toggle-view",checked:r,onChange:function(){n(Object(i.a)(Object(i.a)({},t),{},{completed:!r}))}}),Object(j.jsx)("label",{children:l}),Object(j.jsx)("button",{type:"button",className:"destroy","data-cy":"deleteTodo","aria-label":"destroy",onClick:function(){c(a)}})]}),Object(j.jsx)("input",{ref:v,type:"text",className:"edit",onChange:function(e){h(e.target.value)},onBlur:g,onKeyUp:function(e){"Enter"===e.key&&g(),"Escape"===e.key&&(h(l),O(!1))},value:x})]})},m=function(e){var t=e.todos,c=e.deleteTodo,n=e.updateTodo;return Object(j.jsx)("ul",{className:"todo-list","data-cy":"todosList",children:t.map((function(e){return Object(j.jsx)(p,{todo:e,deleteTodo:c,updateTodo:n},e.id)}))})},x=function(e){var t=e.text,c=e.to;return Object(j.jsx)(r.b,{to:c,className:function(e){var t=e.isActive;return f()({selected:t})},children:t})},h=function(e){var t=e.todos,c=e.clearCompleted,n=t.filter((function(e){return!e.completed})).length,o=t.some((function(e){return e.completed}));return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:1===n?"1 item left":"".concat(n," items left")}),Object(j.jsxs)("ul",{className:"filters","data-cy":"todosFilter",children:[Object(j.jsx)("li",{children:Object(j.jsx)(x,{to:"/",text:"All"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x,{to:"/active",text:"Active"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x,{to:"/completed",text:"Completed"})})]}),o&&Object(j.jsx)("button",{type:"button",className:"clear-completed",onClick:c,children:"Clear completed"})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var v=function(){var e=function(e,t){var c=Object(o.useState)((function(){try{var c=localStorage.getItem(e);return c?JSON.parse(c):t}catch(n){return t}})),n=Object(u.a)(c,2),a=n[0],l=n[1];return[a,function(t){l(t),localStorage.setItem(e,JSON.stringify(t))}]}("todos",[]),t=Object(u.a)(e,2),c=t[0],a=t[1],l=Object(s.q)().filter,r=void 0===l?"":l,O=Object(o.useState)(!1),f=Object(u.a)(O,2),p=f[0],x=f[1],v=function(e,t){var c=Object(d.a)(e);switch(t){case n.ACTIVE:return c.filter((function(e){return!e.completed}));case n.COMPLETED:return c.filter((function(e){return e.completed}));default:return c}}(c,r);return Object(j.jsxs)("div",{className:"todoapp",children:[Object(j.jsx)(b,{handleAddTodo:function(e){if(""!==e.trim()){var t={id:+new Date,title:e,completed:!1};a([].concat(Object(d.a)(c),[t]))}}}),c.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{className:"main",children:[Object(j.jsx)("input",{type:"checkbox",id:"toggle-all",className:"toggle-all","data-cy":"toggleAll",onChange:function(){x(!p),function(){var e=c.every((function(e){return e.completed})),t=c.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{completed:!e})}));a(t)}()},checked:p}),Object(j.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(j.jsx)(m,{todos:v,deleteTodo:function(e){a(c.filter((function(t){return t.id!==e})))},updateTodo:function(e){a(c.map((function(t){return t.id===e.id?e:t})))}})]}),Object(j.jsx)(h,{todos:c,clearCompleted:function(){a(c.filter((function(e){return!e.completed})))}})]})]})};l.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(s.c,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.a,{index:!0,element:Object(j.jsx)(v,{})}),Object(j.jsx)(s.a,{path:":filter",element:Object(j.jsx)(v,{})})]})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4b69a1ed.chunk.js.map