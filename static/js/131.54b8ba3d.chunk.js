"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[131],{131:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(861),i=n(439),c=n(757),o=n.n(c),s=n(791),a=n(87),u="MoviesList_list__0Owr9",l="MoviesList_item__eePYv",h="MoviesList_link__8rTGX",v=n(184),f=function(e){var t=e.movies;return(0,v.jsx)("ol",{className:u,children:t.map((function(e){return(0,v.jsx)("li",{className:l,children:(0,v.jsx)(a.rU,{to:"/movies/".concat(e.id),className:h,children:e.title})},e.id)}))})},m="SearchForm_formContainer__npBBh",d="SearchForm_inputField__i8cMu",p="SearchForm_searchButton__AQHxA",_=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,i.Z)(n,2),c=r[0],o=r[1];return(0,v.jsx)("div",{className:m,children:(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c)},children:[(0,v.jsx)("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)},placeholder:"Search movies",className:d}),(0,v.jsx)("button",{type:"submit",className:p,children:"Search"})]})})},x="Movies_container__WJzYR",b="Movies_title__SuBzv",j="a4690865d7bdab2d42080cd491b22b8d",k=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1];return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(j));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)("h2",{className:b,children:"Search Movies"}),(0,v.jsx)(_,{onSubmit:function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(j,"&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return c(e.results)}))}}),(0,v.jsx)(f,{movies:n})]})}},861:function(e,t,n){function r(e,t,n,r,i,c,o){try{var s=e[c](o),a=s.value}catch(u){return void n(u)}s.done?t(a):Promise.resolve(a).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,c){var o=e.apply(t,n);function s(e){r(o,i,c,s,a,"next",e)}function a(e){r(o,i,c,s,a,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=131.54b8ba3d.chunk.js.map