"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{370:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(861),c=t(439),i=t(757),o=t.n(i),a=t(791),s=t(87),u="Home_container__rdxHF",d="Home_title__34wa5",l="Home_list__4mx-j",f="Home_item__3+Nfx",m="Home_link__KUon9",h=t(184),p=function(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1];return(0,a.useEffect)((function(){function e(){return(e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"a4690865d7bdab2d42080cd491b22b8d",e.next=4,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("a4690865d7bdab2d42080cd491b22b8d"));case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,i(t.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("h2",{className:d,children:"Trending Movies"}),(0,h.jsx)("ol",{className:l,children:t.map((function(e){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)(s.rU,{to:"/movies/".concat(e.id),className:m,children:e.title})},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,c,i,o){try{var a=e[i](o),s=a.value}catch(u){return void t(u)}a.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function a(e){r(o,c,i,a,s,"next",e)}function s(e){r(o,c,i,a,s,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=370.e41de5b6.chunk.js.map