(this["webpackJsonpemployee-dir"]=this["webpackJsonpemployee-dir"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(28),s=n.n(r),o=(n(35),n(12)),l=n(2),i=(n(36),n(0)),j=function(e){return Object(i.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})},u=function(e){return Object(i.jsx)("div",{className:"container",style:e.style,children:e.children})},b=function(e){return Object(i.jsx)("div",{className:"row",children:e.children})},d=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(i.jsx)("div",{className:t,children:e.children})},m=n.p+"static/media/workplace.ba9d0e96.jpg",h=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)(j,{backgroundImage:m,children:[Object(i.jsx)("h1",{children:"TEAM"}),Object(i.jsx)("h2",{children:"\u201cIf you can laugh together, you can work together.\u201d Robert Orben"})]}),Object(i.jsx)(u,{children:Object(i.jsx)(b,{children:Object(i.jsxs)(d,{size:"md-12",children:[Object(i.jsx)("h1",{children:"Welcome to Employee Directory!"}),Object(i.jsx)("p",{children:"As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information."}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name."})]})})})]})},O=n(8),f=n(14),x=function(e){return Object(i.jsx)("form",{className:"search",onChange:e.handleFormSubmit,children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(i.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"name",list:"employees",type:"text",className:"form-control",placeholder:"Search for a User by Name.",id:"employee"}),Object(i.jsx)("label",{htmlFor:"sort",children:"Sort:"}),Object(i.jsxs)("select",{className:"form-control",name:"sort",id:"sort",onChange:function(){return e.handleSort(document.querySelector("#sort").value)},children:[Object(i.jsx)("option",{value:"First Name",children:"First Name A-Z"}),Object(i.jsx)("option",{value:"Last Name",children:"Last Name A-Z"}),Object(i.jsx)("option",{value:"Age",children:"Age"}),Object(i.jsx)("option",{value:"Email",children:"Email"})]}),Object(i.jsx)("datalist",{id:"employees",children:e.employees.map((function(e){return Object(i.jsx)("option",{value:"".concat(e.name.first," ").concat(e.name.last)},e.login.uuid)}))})]})})},p=function(e){var t=e.results;return Object(i.jsx)("ul",{className:"list-group search-results",children:t.map((function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("li",{className:"list-group-item",children:[Object(i.jsx)("img",{alt:"".concat(e.name.first," ").concat(e.name.last),src:e.picture.large,className:"img-fluid"}),Object(i.jsx)("h2",{children:"".concat(e.name.first," ").concat(e.name.last)}),Object(i.jsxs)("p",{children:["Age: ",e.dob.age]}),Object(i.jsxs)("p",{children:["Email: ",e.email]}),Object(i.jsxs)("p",{children:["Phone: ",e.phone]}),Object(i.jsxs)("p",{children:["Preferred Title: ",e.name.title]})]})},e.login.uuid)}))})},g=n(29),v=n.n(g),y={getEmployees:function(e){return v.a.get("https://randomuser.me/api/"+"?results=".concat(e))}},N=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(f.a)(r,2),o=s[0],l=s[1],j=Object(c.useState)(""),b=Object(f.a)(j,2),d=b[0],m=b[1];Object(c.useEffect)((function(){try{y.getEmployees(25).then((function(e){a(Object(O.a)(e.data.results));var t=Object(O.a)(e.data.results).sort((function(e,t){return e.name.first>t.name.first?1:-1}));l(Object(O.a)(t))}))}catch(e){console.log(e)}}),[]);return Object(i.jsx)("div",{children:Object(i.jsxs)(u,{style:{minHeight:"80%"},children:[Object(i.jsx)(x,{handleFormSubmit:function(e){e.preventDefault();try{var t=n.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(document.querySelector("#employee").value.toLowerCase())}));l(Object(O.a)(t))}catch(c){m(c.message),console.log(d)}},handleInputChange:function(e){l(e.target.value)},handleSort:function(e){var t;switch(console.log(e),e){case"First Name":t=n.sort((function(e,t){return e.name.first>t.name.first?1:-1})),console.log(t),l(Object(O.a)(t));break;case"Last Name":t=n.sort((function(e,t){return e.name.last>t.name.last?1:-1})),l(Object(O.a)(t)),console.log(t);break;case"Age":t=n.sort((function(e,t){return e.dob.age>t.dob.age?1:-1})),l(Object(O.a)(t)),console.log(t);break;case"Email":t=n.sort((function(e,t){return e.email>t.email?1:-1})),l(Object(O.a)(t)),console.log(t);break;default:t=n.sort((function(e,t){return e.name.first>t.name.first?1:-1})),l(Object(O.a)(t))}},employees:n}),Object(i.jsx)(p,{results:o})]})})},w=(n(56),function(){return Object(i.jsxs)(o.a,{children:[Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Orlando's Team Directory"}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{to:"/directory",className:"/directory"===window.location.pathname?"nav-link active":"nav-link",children:"Search Team"})})]})})]}),Object(i.jsx)("div",{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{})}),Object(i.jsx)(l.a,{path:"/Directory",children:Object(i.jsx)(N,{})})]})})]})}),k=(n(62),function(){var e=window.pageYOffset;return window.onscroll=function(){var t=window.pageYOffset;document.querySelector(".footer").style.bottom=e>t?"0":"-50px",e=t},Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("span",{children:"\xa9 Orlando Baello 2021"})})}),S=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(w,{}),Object(i.jsx)(k,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(63);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),F()}},[[64,1,2]]]);
//# sourceMappingURL=main.10204748.chunk.js.map