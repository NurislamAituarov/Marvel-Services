(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{219:function(t,e,n){},224:function(t,e,n){"use strict";n.r(e);var c=n(49),r=n(18),i=n(61),s=(n(219),n(19)),a=n(1),o=n(10),u=n(7),j=n(22),b=n(23),l=n(0);e.default=function(){var t=Object(a.useState)(),e=Object(r.a)(t,2),n=e[0],m=e[1],d=new s.a,f=Object(a.useState)(108),O=Object(r.a)(f,2),h=O[0],x=O[1],p=Object(a.useRef)([]),v=Object(a.useState)(!1),y=Object(r.a)(v,2),g=y[0],w=y[1];Object(a.useEffect)((function(){d.getComics().then((function(t){m(t.data.results)}))}),[]);var C=function(t){p.current.forEach((function(t){return t.classList.remove("showComics")})),p.current[t].classList.add("showComics"),p.current[t].focus()},S=function(t){C(t)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(i.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(l.jsx)("title",{children:"Comics page"})]}),Object(l.jsxs)("div",{className:"wrapperComics",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("img",{src:j.a,alt:"header"}),Object(l.jsx)("div",{style:{width:"270px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:Object(l.jsx)("span",{children:"Comics"})}),Object(l.jsx)("img",{src:b.a,alt:"img"})]}),n?Object(l.jsx)("ul",{className:"block__2",children:n.map((function(t,e){return Object(l.jsx)("li",{onClick:function(){return S(e)},className:"comicsItem",onKeyPress:function(t){"KeyP"!==t.code&&"Enter"!==t.code||(C(e),S(e))},ref:function(t){return p.current[e]=t},tabIndex:0,children:Object(l.jsxs)(u.b,{to:"/Comics/".concat(t.id),children:[Object(l.jsx)("img",{src:t.thumbnail.path+"."+t.thumbnail.extension,alt:"img"}),Object(l.jsx)("span",{children:t.title})]})},e)}))}):Object(l.jsx)("div",{style:{width:"200px",margin:"0 auto",marginTop:"100px",marginBottom:"100px"},children:Object(l.jsx)(o.a,{})}),Object(l.jsx)("button",{onClick:function(){w(!0),x((function(t){return t+8})),d.getComics(h).then((function(t){w(!1),m((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t.data.results))}))}))},className:g?"btn btn__active":"btn",children:"LOAD MORE"})]})]})}},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(13);var r=n(20);function i(t){return function(t){if(Array.isArray(t))return Object(c.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=6.b501e102.chunk.js.map