"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[416],{416:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var i=s(439),a=s(791),o=s(689),c=s(87),n="MovieDetails_container__GRjPn",l="MovieDetails_backLink__cjRS7",r="MovieDetails_title__7JN98",_="MovieDetails_overview__zK2Cf",v="MovieDetails_poster__u8TSe",d="MovieDetails_link__c-Qn4",m="MovieDetails_linksContainer__Fx7q9",p=s(184),h=function(){var e,t,s=(0,o.UO)().movieId,h=(0,a.useState)({}),u=(0,i.Z)(h,2),f=u[0],k=u[1],j=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(s,"?api_key=a4690865d7bdab2d42080cd491b22b8d")).then((function(e){return e.json()})).then((function(e){return k(e)}))}),[s]),(0,p.jsxs)("div",{className:n,children:[(0,p.jsx)(c.rU,{to:j,className:l,children:"Back"}),(0,p.jsx)("h2",{className:r,children:f.title}),(0,p.jsx)("p",{className:_,children:f.overview}),(0,p.jsx)(c.rU,{to:"/movies/".concat(s,"/cast"),className:d,children:"Cast"}),(0,p.jsx)(c.rU,{to:"/movies/".concat(s,"/reviews"),className:d,children:"Reviews"}),(0,p.jsx)("img",{src:f.poster_path?"https://image.tmdb.org/t/p/w500/".concat(f.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",className:v,alt:"poster"}),(0,p.jsx)("div",{className:m})]})}}}]);
//# sourceMappingURL=416.bc9713b8.chunk.js.map