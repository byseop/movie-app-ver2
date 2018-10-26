(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){},153:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),i=a.n(o),c=a(22),s=a.n(c),l=(a(87),a(9)),u=a(12),m=a(14),p=a(13),b=a(15),d=a(7),h=Object(d.b)("store")(n=Object(d.c)(n=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMouseEnter=function(){var e=a.props.bg;a.props.store._changeMovieBg(e)},a.handleMovieSelect=function(){var e=a.props.id;a.props.store._movieSelectToggle(),a.props.store._getDetailMovie(e),a.props.store._setRecommendCountRestore(),document.querySelector(".Detail__Info").scrollTo(0,0)},a.handleBgRestore=function(){a.props.store._setBgRestore()},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Movie__Box",onMouseOver:this.handleMouseEnter,onClick:this.handleMovieSelect,onMouseLeave:this.props.store.isMovieSelected?this.handleBgRestore:null},i.a.createElement("div",{className:"Poster__Wrap"},i.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+this.props.poster,alt:this.props.title})),i.a.createElement("div",{className:"Movie__Info"},i.a.createElement("h4",null,this.props.title),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-star"}),this.props.vote_average)))}}]),t}(o.Component))||n)||n,v=a(38),f=a.n(v),g=Object(d.b)("store")(r=Object(d.c)(r=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._renderRecommendMovie=function(){return a.props.store.recommendedMovie.slice(0,a.props.store.recommendCount).map(function(e){return i.a.createElement(h,{key:e.id,id:e.id,title:e.title,poster:e.poster_path,bg:e.backdrop_path,vote_average:e.vote_average,store:a.props.store})})},a.handleRecommendMore=function(){a.props.store._recommendMore()},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.store.selectedMovie.id;f.a.isEmpty(this.props.store.selectedMovie)||this.props.store._getRecommendMovie(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"Recommend"},i.a.createElement("h3",null,"\uc774 \uc601\ud654\uc758 \ucd94\ucc9c \uc601\ud654"),i.a.createElement("div",{className:"Recommend__Wrap"},this.props.store.isMovieSelected?this._renderRecommendMovie():null),i.a.createElement("div",{className:"More",onClick:this.handleRecommendMore},i.a.createElement("i",{className:"fas fa-caret-down"}),"\ub354 \ubcf4\uae30"))}}]),t}(o.Component))||r)||r;function _(e){var t=e.genre;return i.a.createElement("span",{className:"Movie__Genre"},t)}var O,j,M,y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._renderGenre=function(){return a.props&&a.props.genre&&a.props.genre.map(function(e){return i.a.createElement(_,{genre:e.name,key:e.id})})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Poster__Wrap Detail__Poster"},i.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+this.props.poster,alt:this.props.title})),i.a.createElement("div",{className:"Text__Info"},i.a.createElement("h2",null,this.props.title),i.a.createElement("h3",null,this.props.og_title),i.a.createElement("p",null,i.a.createElement("span",{className:"Vote__Average"},i.a.createElement("i",{className:"fas fa-star"}),this.props.vote_average)," ",i.a.createElement("span",{className:"Running__Time"},i.a.createElement("i",{className:"far fa-clock"})," ",this.props.runtime,"\ubd84")),i.a.createElement("div",{className:"Genre__Wrapp"},this._renderGenre()),i.a.createElement("p",{className:"Tagline"},this.props.tagline),i.a.createElement("p",{className:"Summary"},this.props.summary)),i.a.createElement(g,null))}}]),t}(o.Component),E=a(79),k=a.n(E),w=(a(90),a(78)),R=a.n(w),N=Object(d.b)("store")(O=Object(d.c)(O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r))))._renderMovie=function(){return a.props.store.movieList.map(function(e){return i.a.createElement(h,{key:e.id,id:e.id,title:e.title,poster:e.poster_path,bg:e.backdrop_path,vote_average:e.vote_average,store:a.props.store})})},a._renderDetail=function(){var e=a.props.store.selectedMovie;return i.a.createElement(y,{key:e.id,title:e.title,og_title:e.original_title,poster:e.poster_path,runtime:e.runtime,vote_average:e.vote_average,genre:e.genres,summary:e.overview,tagline:e.tagline,store:a.props.store})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.store._getMovies(0)}},{key:"render",value:function(){var e=this.props.store,t={backgroundImage:"url("+R.a+"), url(https://image.tmdb.org/t/p/original"+e.movieBg+")",backgroundSize:"cover",backgroundPosition:"center center",opacity:".5"};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:e.isMovieSelected?"Detail__View on":"Detail__View"},i.a.createElement("div",{className:e.isMovieSelected?"Detail__Info on":"Detail__Info",dir:"rtl"},i.a.createElement("div",{dir:"ltr"},e.isMovieSelected?this._renderDetail():null)),i.a.createElement("div",{className:"Movie__Bg",style:t})),i.a.createElement("div",{className:e.isMovieSelected?"Movie__Section on":"Movie__Section"},i.a.createElement("h3",null,e.sortMethodName),i.a.createElement("div",{className:"Movie__Wrapper"},e.isMovieLoded?this._renderMovie():i.a.createElement("div",{className:"Loading"},i.a.createElement(k.a,null)))))}}]),t}(o.Component))||O)||O,S=(a(151),a(49)),C=a.n(S),z=a(29),B=a.n(z),D=a(81),L=(a(153),Object(d.b)("store")(j=Object(d.c)(j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:0,value2:0},a.handleNowPlaying=function(){a.props.store._getMovies(0)},a.handleTrending=function(){a.props.store._getMovies(1)},a.handleTopRated=function(){a.props.store._getMovies(2)},a.handleUpcoming=function(){a.props.store._getMovies(3)},a.handleChange=function(e,t){a.setState({value:t})},a.handleBackHome=function(){a.props.store._backHome(),a.props.store._setClearSelectedMovie(),a.props.store._setRecommendCountRestore()},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.value,n=t.value2,r=this.props.store;return i.a.createElement("header",{className:r.isMovieSelected?"Header on":"Header"},i.a.createElement("div",{className:"Header__Inner"},i.a.createElement(C.a,{value:a,onChange:this.handleChange,classes:{root:e.tabsRoot,indicator:e.tabsIndicator}},i.a.createElement(B.a,{label:"\ud604\uc7ac \uc0c1\uc601\uc911\uc778 \uc601\ud654",classes:{root:e.tabRoot,selected:e.tabSelected},onClick:this.handleNowPlaying}),i.a.createElement(B.a,{label:"\ucd5c\uadfc \uc778\uae30\uc788\ub294 \uc601\ud654",classes:{root:e.tabRoot,selected:e.tabSelected},onClick:this.handleTrending}),i.a.createElement(B.a,{label:"\ucd5c\uadfc \ud3c9\uc810\ub192\uc740 \uc601\ud654",classes:{root:e.tabRoot,selected:e.tabSelected},onClick:this.handleTopRated}),i.a.createElement(B.a,{label:"\ucd5c\uadfc \uac1c\ubd09 & \uc608\uc815 \uc601\ud654",classes:{root:e.tabRoot,selected:e.tabSelected},onClick:this.handleUpcoming}))),i.a.createElement("div",{className:"Back__Home"},i.a.createElement(C.a,{value:n,onChange:this.handleChange,classes:{root:e.tabsRoot,indicator:e.tabsIndicator}},i.a.createElement(B.a,{label:"\ub4a4\ub85c \uac00\uae30",classes:{root:e.tabRoot},onClick:this.handleBackHome}))))}}]),t}(o.Component))||j)||j),I=Object(D.withStyles)({tabsRoot:{},tabsIndicator:{backgroundColor:"transparent"},tabRoot:{fontSize:"16px",fontWeight:"400",fontFamily:["Noto Sans KR","Roboto","sans-serif"],opacity:"0.6","&:hover":{color:"#fff",opacity:".8"},"&tabSelected":{color:"#fff",opacity:"1"},"&:focus":{color:"#fff"}},tabSelected:{}})(L),x=Object(d.b)("store")(M=Object(d.c)(M=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(I,null),i.a.createElement(N,null))}}]),t}(o.Component))||M)||M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A,T,H,W,P,G,K,F,V,J,U,q,$,Q,X,Y,Z,ee,te,ae,ne,re,oe,ie,ce,se,le,ue,me,pe=a(26),be=a.n(pe),de=a(39),he=a(3),ve=a(4),fe=(a(205),a(1)),ge=a(40),_e=a.n(ge);Object(fe.e)({enforceActions:"observed"});var Oe=new(A=function e(){Object(l.a)(this,e),Object(he.a)(this,"movieList",T,this),Object(he.a)(this,"isMovieLoded",H,this),Object(he.a)(this,"sortMethod",W,this),Object(he.a)(this,"sortMethodName",P,this),Object(he.a)(this,"movieBg",G,this),Object(he.a)(this,"isMovieSelected",K,this),Object(he.a)(this,"selectedMovie",F,this),Object(he.a)(this,"isRecommend",V,this),Object(he.a)(this,"recommendedMovie",J,this),Object(he.a)(this,"recommendCount",U,this),Object(he.a)(this,"_callApi",q,this),Object(he.a)(this,"_checkMovieLoad",$,this),Object(he.a)(this,"_getMovies",Q,this),Object(he.a)(this,"_setMovie",X,this),Object(he.a)(this,"_changeMovieBg",Y,this),Object(he.a)(this,"_movieSelectToggle",Z,this),Object(he.a)(this,"_callDetail",ee,this),Object(he.a)(this,"_getDetailMovie",te,this),Object(he.a)(this,"_setDetailInfo",ae,this),Object(he.a)(this,"_callRecommendMovie",ne,this),Object(he.a)(this,"_getRecommendMovie",re,this),Object(he.a)(this,"_setRecommendMovie",oe,this),Object(he.a)(this,"_toggleRecommend",ie,this),Object(he.a)(this,"_setClearSelectedMovie",ce,this),Object(he.a)(this,"_setBgRestore",se,this),Object(he.a)(this,"_recommendMore",le,this),Object(he.a)(this,"_setRecommendCountRestore",ue,this),Object(he.a)(this,"_backHome",me,this)},T=Object(ve.a)(A.prototype,"movieList",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),H=Object(ve.a)(A.prototype,"isMovieLoded",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),W=Object(ve.a)(A.prototype,"sortMethod",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),P=Object(ve.a)(A.prototype,"sortMethodName",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"\ud604\uc7ac \uc0c1\uc601\uc911\uc778 \uc601\ud654"}}),G=Object(ve.a)(A.prototype,"movieBg",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),K=Object(ve.a)(A.prototype,"isMovieSelected",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),F=Object(ve.a)(A.prototype,"selectedMovie",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),V=Object(ve.a)(A.prototype,"isRecommend",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),J=Object(ve.a)(A.prototype,"recommendedMovie",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=Object(ve.a)(A.prototype,"recommendCount",[fe.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),q=Object(ve.a)(A.prototype,"_callApi",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var a="";return"0"==t?(a="/movie/now_playing",e.sortMethodName="\ud604\uc7ac \uc0c1\uc601\uc911\uc778 \uc601\ud654"):"1"==t?(a="/trending/movie/week",e.sortMethodName="\ucd5c\uadfc \uc778\uae30\uc788\ub294 \uc601\ud654"):"2"==t?(a="/movie/top_rated",e.sortMethodName="\ucd5c\uadfc \ud3c9\uc810\ub192\uc740 \uc601\ud654"):"3"==t&&(a="/movie/upcoming",e.sortMethodName="\ucd5c\uadfc \uac1c\ubd09 & \uc608\uc815 \uc601\ud654"),_e.a.get("https://api.themoviedb.org/3"+a+"?api_key=dc11dbd0605b4d60cc66ce5e8363e063&language=ko-KR").then(function(e){return e.data}).catch(function(e){return console.log(e)})}}}),$=Object(ve.a)(A.prototype,"_checkMovieLoad",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return!f.a.isEmpty(t)&&(e.isMovieLoded=!0)}}}),Q=Object(ve.a)(A.prototype,"_getMovies",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(de.a)(be.a.mark(function t(a){var n;return be.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._callApi(a);case 2:n=t.sent,e._setMovie(n.results),e._checkMovieLoad(e.movieList),e._changeMovieBg(e.movieList[0].backdrop_path);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}),X=Object(ve.a)(A.prototype,"_setMovie",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.movieList=t}}}),Y=Object(ve.a)(A.prototype,"_changeMovieBg",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.movieBg=t}}}),Z=Object(ve.a)(A.prototype,"_movieSelectToggle",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isMovieSelected||(e.isMovieSelected=!e.isMovieSelected)}}}),ee=Object(ve.a)(A.prototype,"_callDetail",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e){var t="/movie/"+e;return _e.a.get("https://api.themoviedb.org/3"+t+"?api_key=dc11dbd0605b4d60cc66ce5e8363e063&language=ko-KR").then(function(e){return e.data}).catch(function(e){return console.log(e)})}}}),te=Object(ve.a)(A.prototype,"_getDetailMovie",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(de.a)(be.a.mark(function t(a){var n;return be.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._callDetail(a);case 2:n=t.sent,e._setDetailInfo(n);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}),ae=Object(ve.a)(A.prototype,"_setDetailInfo",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.selectedMovie=t}}}),ne=Object(ve.a)(A.prototype,"_callRecommendMovie",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e){var t="/movie/"+e+"/recommendations";return _e.a.get("https://api.themoviedb.org/3"+t+"?api_key=dc11dbd0605b4d60cc66ce5e8363e063&language=ko-KR").then(function(e){return e.data}).catch(function(e){return console.log(e)})}}}),re=Object(ve.a)(A.prototype,"_getRecommendMovie",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(de.a)(be.a.mark(function t(a){var n;return be.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._callRecommendMovie(a);case 2:n=t.sent,e._setRecommendMovie(n.results);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}),oe=Object(ve.a)(A.prototype,"_setRecommendMovie",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.recommendedMovie=t}}}),ie=Object(ve.a)(A.prototype,"_toggleRecommend",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isRecommend=!e.isRecommend}}}),ce=Object(ve.a)(A.prototype,"_setClearSelectedMovie",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.selectedMovie={}}}}),se=Object(ve.a)(A.prototype,"_setBgRestore",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e._changeMovieBg(e.selectedMovie.backdrop_path)}}}),le=Object(ve.a)(A.prototype,"_recommendMore",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.recommendCount=e.recommendCount+6}}}),ue=Object(ve.a)(A.prototype,"_setRecommendCountRestore",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.recommendCount=3}}}),me=Object(ve.a)(A.prototype,"_backHome",[fe.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isMovieSelected=!1}}}),A);s.a.render(i.a.createElement(d.a,{store:Oe},i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,a){e.exports=a.p+"static/media/bg.22c3457c.png"},82:function(e,t,a){e.exports=a(224)},87:function(e,t,a){},90:function(e,t,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.10d844ef.chunk.js.map