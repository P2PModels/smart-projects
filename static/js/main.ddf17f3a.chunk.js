(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t){},366:function(e,t,n){e.exports=n(919)},375:function(e,t,n){},460:function(e,t){},476:function(e,t){},490:function(e,t){},492:function(e,t){},521:function(e,t){},523:function(e,t){},561:function(e,t){},562:function(e,t){},578:function(e,t){},918:function(e,t,n){},919:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(30),l=n(88),u="Kor\xedkoko es el nombre de un **colectivo de creadores y artistas** en todos los \xe1mbitos que creemos en la expresi\xf3n art\xedstica como veh\xedculo fundamental de conocimiento y de crecimiento durante la infancia.\n\nM\xfasicos, artistas pl\xe1sticos, psic\xf3logos y escritores conformamos este equipo de trabajo que comparte la ilusi\xf3n por contribuir al desarrollo integral y feliz del individuo y que apuesta por la infancia como garant\xeda de futuro.",s="Korikoko nace con la ilusi\xf3n y el objetivo de intervenir en la infancia potenciando todas las cualidades propias de este periodo vital como el desarrollo cognitivo, la creatividad y la inteligencia emocional que intervienen en la salud, el crecimiento y la felicidad de los ni\xf1os.\n\nPara un nuevo proyecto en XXXX centro educativo necesitamos:\n*\tUn/a profesor/a de m\xfasica para una escuela en Boadilla.\n*\tUn/a psic\xf3loga infantil\n*\tUn/a musicoterapeuta\n",m=0;function E(e,t,n){return{name:e,organizer:t,areas:n,id:m++,participants:[],imgs:["https://placeimg.com/640/480/any/".concat(e),"https://placeimg.com/640/480/any/".concat(e,"-1"),"https://placeimg.com/640/480/any/".concat(e,"-2")],lookingFor:["Profe de m\xfasica","Psic\xf3loga/o infantil"],summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",description:u,needs:s,url:"http://p2pmodels.eu"}}var p=[E("Carrera 10k","Silvia",["sp\xf2rts","health"]),E("Hackathon Cryptoostrom","David",["commons","work"]),E("Cineforum","Jordi",["culture","cinema"]),E("Karaoke","Sem",["party"]),E("Cumple de Leo","Elena",["party"])];JSON.parse(localStorage.getItem("users")),JSON.parse(localStorage.getItem("projects"));var d=n(84),g=n(340),f=n(341),S={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},h={REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE",DELETE_REQUEST:"USERS_DELETE_REQUEST",DELETE_SUCCESS:"USERS_DELETE_SUCCESS",DELETE_FAILURE:"USERS_DELETE_FAILURE"},b={ADD_REQUEST:"PROJECTS_ADD_REQUEST",ADD_SUCCESS:"PROJECTS_ADD_SUCCESS",ADD_FAILURE:"PROJECTS_ADD_FAILURE",GETALL_REQUEST:"PROJECTS_GETALL_REQUEST",GETALL_SUCCESS:"PROJECTS_GETALL_SUCCESS",GETALL_FAILURE:"PROJECTS_GETALL_FAILURE",REMOVE_REQUEST:"PROJECTS_REMOVE_REQUEST",REMOVE_SUCCESS:"PROJECTS_REMOVE_SUCCESS",REMOVE_FAILURE:"PROJECTS_REMOVE_FAILURE",ADD_PARTICIPANT_REQUEST:"PROJECTS_ADD_PARTICIPANTS_REQUEST",ADD_PARTICIPANT_SUCCESS:"PROJECTS_ADD_PARTICIPANTS_SUCCESS",ADD_PARTICIPANT_FAILURE:"PROJECTS_ADD_PARTICIPANTS_FAILURE",REMOVE_PARTICIPANT_REQUEST:"PROJECTS_REMOVE_PARTICIPANTS_REQUEST",REMOVE_PARTICIPANT_SUCCESS:"PROJECTS_REMOVE_PARTICIPANTS_SUCCESS",REMOVE_PARTICIPANT_FAILURE:"PROJECTS_REMOVE_PARTICIPANTS_FAILURE"},v=JSON.parse(localStorage.getItem("user")),R=v?{loggedIn:!0,user:v}:{};var T=n(89),O=n(15);var C=Object(d.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.LOGIN_REQUEST:return{};case h.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case h.LOGIN_FAILURE:case h.LOGOUT:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case h.REGISTER_REQUEST:return{registering:!0};case h.REGISTER_SUCCESS:case h.REGISTER_FAILURE:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.GETALL_REQUEST:return{loading:!0};case h.GETALL_SUCCESS:return{items:t.users};case h.GETALL_FAILURE:return{error:t.error};case h.DELETE_REQUEST:return Object(O.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(O.a)({},e,{deleting:!0}):e})});case h.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case h.DELETE_FAILURE:return Object(O.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var n=Object(T.a)(e,["deleting"]);return Object(O.a)({},n,{deleteError:t.error})}return e})});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.GETALL_REQUEST:return{loading:!0};case b.GETALL_SUCCESS:return{items:t.projects};case b.GETALL_FAILURE:return{error:t.error};case b.ADD_PARTICIPANT_REQUEST:case b.ADD_PARTICIPANT_SUCCESS:case b.ADD_PARTICIPANT_FAILURE:case b.REMOVE_PARTICIPANT_REQUEST:case b.REMOVE_PARTICIPANT_SUCCESS:case b.REMOVE_PARTICIPANT_FAILURE:return Object(O.a)({},e,{items:e.items.map(function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.ADD_PARTICIPANT_SUCCESS:return Object(O.a)({},e,{participants:[].concat(Object(l.a)(e.participants),[t.user.id])});case b.REMOVE_PARTICIPANT_SUCCESS:return Object(O.a)({},e,{participants:e.participants.filter(function(e){return e!==t.user.id})});default:return e}}(e,t)})});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.SUCCESS:return{type:"alert-success",message:t.message};case S.ERROR:return{type:"alert-danger",message:t.message};case S.CLEAR:return{};default:return e}}}),j=Object(f.createLogger)(),y=Object(d.d)(C,Object(d.a)(g.a,j));function _(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}n(375);var A=n(204),L=n(342),I=n(343),U=n.n(I),P=n(64);A.a.use(L.a).use(U.a).use(P.a).init({fallbackLng:"en",defaultNS:"App",load:"languageOnly",backend:{loadPath:"locale/{{lng}}/{{ns}}.json"},nsSeparator:!1,keySeparator:!1,interpolation:{escapeValue:!1}});A.a;var N=n(353),k=n(982),D={fontFamily:"Helvetica Neue",letterSpacing:"-0.84px"},w=Object(N.a)({palette:{primary:{main:"#FF4B63"},secondary:{main:"#3E979C"}},overrides:{MuiTypography:{h1:Object(O.a)({},D,{fontSize:"60px",letterSpacing:"-1.7px",fontWeight:"bold",marginTop:"35px"}),h2:Object(O.a)({},D,{fontSize:"40px",fontWeight:"bold",marginTop:"35px"}),h3:Object(O.a)({},D,{fontSize:"30px",fontWeight:"bold",marginTop:"35px"}),h4:Object(O.a)({},D,{fontSize:"20px",marginTop:"35px"}),subtitle1:Object(O.a)({},D,{fontSize:"20px",color:"#A7A2A6"})},MuiButton:{root:Object(O.a)({},D,{fontWeight:"bold",textTransform:"none",borderRadius:"24px"}),outlinedPrimary:{borderWidth:"2px !important"},sizeLarge:{fontSize:"1.3rem"}},MuiGridListTileBar:{root:{alignItems:"flex-end",background:"rgba(0,0,0,0.4)"},rootSubtitle:{height:"100%"},titleWrap:{marginBottom:"22px"},title:Object(O.a)({},D,{fontSize:"40px",lineHeight:"45px",fontWeight:"bold"}),subtitle:{color:"#FF4B63"}}},typography:{useNextVariants:!0}}),x=function(e){return Object(O.a)({},e,{palette:Object(O.a)({},e.palette,{type:"dark"}),overrides:Object(O.a)({},e.overrides,{MuiOutlinedInput:{input:{color:"white"}},MuiButton:Object(O.a)({},e.overrides.MuiButton,{outlined:Object(O.a)({},e.overrides.MuiButton.outlined,{color:"white"})})})})},G=function(e){var t=e.children;return r.a.createElement(k.a,{theme:x},t)},F=function(e){var t=e.children;return r.a.createElement(k.a,{theme:w},t)},J=n(83),Q=n(85),z=n(921),M=n(961),B=n(959),W=n(960),V=n(346),q=n.n(V),H="https://gateway.ipfs.technology",X=new URL("https://gateway.ipfs.technology"),K=X.hostname,Y=X.protocol,Z=X.port||"http:"===Y?80:443;console.log(K,Y,Z);var $=q()(K,Z,{protocol:Y.slice(0,-1)}),ee=function(e){return e.map(function(e){return e.hash})};function te(e){return"".concat(H,"/").concat(e)}var ne=Object(z.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"15px",marginLeft:"-7.5px"},gridList:{height:"100%",width:"100%"}}}),ae=function(e){var t=e.history,n=Object(T.a)(e,["history"]);return r.a.createElement(B.a,Object.assign({},n,{onClick:function(){return t.push("/project/new")}}),r.a.createElement("img",{src:"https://placeimg.com/640/480/any/new",alt:"x"}),r.a.createElement(W.a,{title:"New",subtitle:r.a.createElement("span",null)}))};var re=Object(Q.f)(function(e){var t=e.projects,n=e.showNewProjectTile,a=e.history,o=ne();return r.a.createElement("div",{className:o.root},r.a.createElement(M.a,{cellHeight:360,spacing:15,className:o.gridList,cols:3},t.map(function(e){var t=e.id,n=e.name,o=e.areas,i=void 0===o?[]:o,c=e.imgs;return r.a.createElement(B.a,{key:t,onClick:function(){return a.push("/project/".concat(t))}},r.a.createElement("img",{src:te(c[0]),alt:n}),r.a.createElement(W.a,{title:n,subtitle:r.a.createElement("span",null,i.join(", "))}))}),n&&r.a.createElement(ae,{history:a})))}),oe={success:function(e){return{type:S.SUCCESS,message:e}},error:function(e){return{type:S.ERROR,message:e}},clear:function(){return{type:S.CLEAR}}};var ie={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usernameOrEmail:e,password:t})};return fetch("".concat(ce,"/login"),n).then(ue).then(function(e){return localStorage.setItem("user",JSON.stringify(e)),e})},logout:le,register:function(e){e=Object(O.a)({},e,{username:e.email});var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(ce,"/users"),t).then(ue)},getAll:function(){var e={method:"GET",headers:_()};return fetch("".concat(ce,"/users"),e).then(ue)},getById:function(e){var t={method:"GET",headers:_()};return fetch("".concat(ce,"/users/").concat(e),t).then(ue)},update:function(e){var t={method:"PUT",headers:Object(O.a)({},_(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(ce,"/users/").concat(e.id),t).then(ue)},delete:function(e){var t={method:"DELETE",headers:_()};return fetch("".concat(ce,"/users/").concat(e),t).then(ue)}},ce="https://p2pmodels.ipfs.technology";function le(){localStorage.removeItem("user")}function ue(e){return 401===e.status&&le(),e.text().then(function(t){console.log(t,e);var n=t&&JSON.parse(t);if(!e.ok){var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}var se=n(33),me={add:function(e){var t={method:"POST",headers:Object(O.a)({},_(),{"Content-Type":"application/json"}),body:JSON.stringify(pe(e,!1))};return fetch("".concat(Ee,"/projects"),t).then(de)},getAll:function(){return fetch("".concat(Ee,"/projects"),{method:"GET"}).then(de).then(function(e){return e.map(function(e){return pe(e)})})},getById:function(e){return fetch("".concat(Ee,"/projects/").concat(e),{method:"GET"}).then(de).then(function(e){return pe(e)})},update:function(e){var t={method:"PUT",headers:Object(O.a)({},_(),{"Content-Type":"application/json"}),body:JSON.stringify(pe(e,!1))};return fetch("".concat(Ee,"/projects/").concat(e.id),t).then(de)},delete:function(e){var t={method:"DELETE",headers:_()};return fetch("".concat(Ee,"/projects/").concat(e),t).then(de)},addParticipant:function(e,t){var n={method:"PUT",headers:Object(O.a)({},_(),{"Content-Type":"application/json"}),body:JSON.stringify({addParticipants:[t.id]})};return fetch("".concat(Ee,"/projects/").concat(e.id),n).then(de)},removeParticipant:function(e,t){var n={method:"PUT",headers:Object(O.a)({},_(),{"Content-Type":"application/json"}),body:JSON.stringify({delParticipants:[t.id]})};return fetch("".concat(Ee,"/projects/").concat(e.id),n).then(de)}},Ee="https://p2pmodels.ipfs.technology";function pe(e){if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var t=[e.img_bg,e.img1,e.img2],n=Object(O.a)({},e,{imgs:t});return delete n.img_bg,delete n.img1,delete n.img2,n.participants||(n.participants=[]),n}var a=Object(se.a)(e.imgs,3),r=a[0],o=a[1],i=a[2],c=Object(O.a)({},e,{img_bg:r,img1:o,img2:i});return delete c.imgs,c}function de(e){return 401===e.status&&ie.logout(),e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}var ge={login:function(e,t,n){return function(a){var r;a({type:h.LOGIN_REQUEST,user:r}),ie.login(e,t).then(function(e){console.log(e),a(function(e){return{type:h.LOGIN_SUCCESS,user:e}}(e)),n.push("/")},function(e){a(function(e){return{type:h.LOGIN_FAILURE,error:e}}(e.toString())),a(oe.error(e.toString()))})}},logout:function(){return ie.logout(),{type:h.LOGOUT}},register:function(e,t){return function(n){n(function(e){return{type:h.REGISTER_REQUEST,user:e}}(e)),ie.register(e).then(function(e){n(function(e){return{type:h.REGISTER_SUCCESS,user:e}}()),t.push("/login"),n(oe.success("Registration successful"))},function(e){n(function(e){return{type:h.REGISTER_FAILURE,error:e}}(e.toString())),n(oe.error(e.toString()))})}},getAll:function(){return function(e){e({type:h.GETALL_REQUEST}),ie.getAll().then(function(t){return e(function(e){return{type:h.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:h.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:h.DELETE_REQUEST,id:e}}(e)),ie.delete(e).then(function(n){return t(function(e){return{type:h.DELETE_SUCCESS,id:e}}(e))},function(n){return t(function(e,t){return{type:h.DELETE_FAILURE,id:e,error:t}}(e,n.toString()))})}}};var fe={add:function(e,t){return function(n){n(function(e){return{type:b.ADD_REQUEST,project:e}}(e)),me.add(e).then(function(e){n(function(e){return{type:b.ADD_SUCCESS,project:e}}()),console.log(e),t.push("/"),n(oe.success("Your new project rocks!"))},function(e){n(function(e){return{type:b.ADD_FAILURE,error:e}}(e.toString())),n(oe.error(e.toString()))})}},getAll:function(){return function(e){e({type:b.GETALL_REQUEST}),me.getAll().then(function(t){return e(function(e){return{type:b.GETALL_SUCCESS,projects:e}}(t))},function(t){return e(function(e){return{type:b.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:b.DELETE_REQUEST,id:e}}(e)),me.delete(e).then(function(n){return t(function(e){return{type:b.DELETE_SUCCESS,id:e}}(e))},function(n){return t(function(e,t){return{type:b.DELETE_FAILURE,id:e,error:t}}(e,n.toString()))})}},addParticipant:function(e,t){return function(n){n(function(e,t){return{type:b.ADD_PARTICIPANT_REQUEST,project:e,user:t}}(e,t)),me.addParticipant(e,t).then(function(a){n(function(e,t){return{type:b.ADD_PARTICIPANT_SUCCESS,project:e,user:t}}(e,t)),n(oe.success("You will be contacted by the project organizer soon."))},function(e){n(function(e){return{type:b.ADD_PARTICIPANT_FAILURE,error:e}}(e.toString())),n(oe.error(e.toString()))})}},removeParticipant:function(e,t){return function(n){n(function(e,t){return{type:b.REMOVE_PARTICIPANT_REQUEST,project:e,user:t}}(e,t)),me.removeParticipant(e,t).then(function(a){n(function(e,t){return{type:b.REMOVE_PARTICIPANT_SUCCESS,project:e,user:t}}(e,t)),n(oe.success("We hope to see you again soon."))},function(e){n(function(e){return{type:b.REMOVE_PARTICIPANT_FAILURE,error:e}}(e.toString())),n(oe.error(e.toString()))})}}};var Se=n(103),he=n(967),be=n(968),ve=n(970),Re=n(971),Te=n(969),Oe=n(352),Ce=n(984),je=n(202),ye=n(962),_e=n(978),Ae=Object(z.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"row-reverse"},formControl:{margin:e.spacing.unit,minWidth:120,backgroundColor:Object(je.fade)(e.palette.common.white,.55),"&:hover":{backgroundColor:Object(je.fade)(e.palette.common.white,.75)}}}});var Le=function(){var e=Object(P.b)().i18n,t=Object(a.useState)(e.languages[0]),n=Object(se.a)(t,2),o=n[0],i=n[1],c=Ae();return Object(a.useEffect)(function(){e.changeLanguage(o)},[o]),r.a.createElement("form",{className:c.root,autoComplete:"off"},r.a.createElement(ye.a,{className:c.formControl},r.a.createElement(_e.a,{inputProps:{name:"lang",id:"lang"},value:o,onChange:function(e){return i(e.target.value)}},r.a.createElement(Ce.a,{value:"en"},"English"),r.a.createElement(Ce.a,{value:"es"},"Espa\xf1ol"))))},Ie=n(966),Ue=Object(z.a)({avatar:{margin:10,color:"#fff"}});var Pe=["#d73d32","#7e3794","#4285f4","#67ae3f","#d61a7f","#ff4080"];function Ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Pe;return t[function(e,t){for(var n=Object(l.a)(e).map(function(e){return e.charCodeAt(0)}),a=n.length,r=a%(t-1)+1,o=n.reduce(function(e,t){return e+t})%t,i=n[0]%t,c=0;c<a;c++)i=(r*i+o)%t;return i}(e,t.length)]}var ke=function(e){var t=e.user,n=Ue();return r.a.createElement(Ie.a,{alt:t.name,style:{backgroundColor:Ne(t.name)},className:n.avatar},t.name.split(/\s/).map(function(e){return e.substring(0,1).toUpperCase()}).filter(function(e){return!!e}).slice(0,2).join(""))},De=Object(z.a)({root:{flexGrow:1},flex:{display:"flex",alignItems:"center"},grow:{flexGrow:1,alignSelf:"flex-start"},avatar:{margin:10},menuButton:{marginLeft:-12,marginRight:20}});var we=Object(Q.f)(function(e){e.children;var t=e.history,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.b)(),i=Object(a.useState)(null),l=Object(se.a)(i,2),u=l[0],s=l[1],m=De(),E=Boolean(u);return r.a.createElement("div",{className:m.root},r.a.createElement(he.a,{position:"static",color:"default"},r.a.createElement(be.a,null,r.a.createElement(Te.a,{className:m.flex},r.a.createElement("div",{className:m.grow},r.a.createElement(J.b,{to:"/"},r.a.createElement("img",{style:{position:"absolute",zIndex:1},src:"/images/logo.png",alt:"Logo"}))),r.a.createElement("div",{className:m.flex},r.a.createElement(Le,null),n?r.a.createElement("div",null,r.a.createElement(Re.a,{"aria-owns":E?"menu-appbar":void 0,"aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},color:"inherit"},r.a.createElement(ke,{user:n})),r.a.createElement(Oe.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:E,onClose:function(){return s(null)}},r.a.createElement(Ce.a,{onClick:function(){return s(null)}},"Profile"),r.a.createElement(Ce.a,{onClick:function(){s(null),o(ge.logout())}},"Logout"))):r.a.createElement(ve.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/login")}},"Log in"))))))}),xe=n(205),Ge=n(972),Fe=n(983),Je=n(973),Qe=n(349),ze=n.n(Qe),Me=Object(z.a)(function(e){return{root:{color:"white",background:"transparent no-repeat center center",backgroundSize:"cover"},wrapper:Object(Se.a)({minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingLeft:"10%",paddingRight:"10%"},e.breakpoints.up(1800),{paddingLeft:"25%",paddingRight:"25%"}),divider:{background:"white",margin:"20px",height:"3px",width:"150px"},subtitle:{fontWeight:200},footer:{position:"relative",minHeight:48,marginTop:"30px",color:"white",background:"#3A3A3A"},spacer:{width:78},img:{position:"absolute",bottom:0,zIndex:1,width:68}}}),Be=function(e){var t=e.classes;return r.a.createElement(be.a,{className:t.footer},r.a.createElement("a",{href:"http://smart-ib.coop/",className:t.spacer},r.a.createElement("img",{className:t.img,src:"/images/logo.png",alt:"Logo"})),r.a.createElement(xe.a,{color:"inherit"},"Smart Coop in Europe:  Deutschland   France   Iberica   Italia   Magyarorsz\xe1g   Nederland   \xd6sterreich   Sverige"))};var We=Object(z.a)(function(e){return{"alert-success":{backgroundColor:ze.a[600]},"alert-danger":{backgroundColor:e.palette.error.dark},"alert-info":{backgroundColor:e.palette.primary.dark}}});function Ve(e){var t=e.children,n=Object(T.a)(e,["children"]),a=Object(c.c)(function(e){return e.alert}),o=a.type,i=a.message,l=Object(c.b)(),u=We();return r.a.createElement("div",n,t,r.a.createElement(Fe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(e,t){l(oe.clear())},autoHideDuration:4e3,open:!!i},r.a.createElement(Je.a,{message:i,className:u[o]})))}var qe=function(e){var t=e.title,n=e.subtitle,a=e.background,o=e.overlay,i=void 0===o||o,c=e.children,l=Object(T.a)(e,["title","subtitle","background","overlay","children"]),u=i&&"rgba(0,0,0,0.5)";a='#3E979C url("'+a+'")';var s=Me();return r.a.createElement(Ve,l,r.a.createElement(we,null),r.a.createElement(G,null,r.a.createElement("header",{className:s.root,style:{background:a}},r.a.createElement("div",{className:s.wrapper,style:{backgroundColor:u}},r.a.createElement(xe.a,{color:"inherit",variant:"h1",align:"center"},t),r.a.createElement(Ge.a,{variant:"middle",light:!0,className:s.divider}),r.a.createElement(xe.a,{color:"inherit",variant:"h3",align:"center",className:s.subtitle},n)))),c,r.a.createElement(Be,{classes:s}))};var He=function(){var e=Object(c.c)(function(e){return e.authentication.user}),t=Object(c.c)(function(e){return e.projects.items})||[],n=Object(c.b)(),o=Object(P.b)("App").t,i=function(t){return e&&(t.organizer===e.id||t.participants.includes(e.id))},l=t.filter(i),u=t.filter(function(e){return!i(e)}),s=o("Join the SmartIb Community of Creative Workers on Blockchain"),m=o("Support projects, find opportunities");Object(a.useEffect)(function(){n(fe.getAll())},[]);var E=e?"header-2":"header-1";return r.a.createElement(qe,{title:s,subtitle:m,background:"/images/".concat(E,".jpg"),overlay:!1},r.a.createElement(Te.a,null,e&&r.a.createElement("div",null,r.a.createElement(xe.a,{variant:"h3"},o("Your Projects")),r.a.createElement(re,{projects:l,showNewProjectTile:!0})),e&&r.a.createElement(xe.a,{variant:"h3"},o("New Projects")),r.a.createElement(re,{projects:u})))},Xe=n(974),Ke=n(975),Ye=n(350),Ze=n.n(Ye),$e=n(351),et=n.n($e);function tt(e){var t=e.title;return r.a.createElement("li",null,t)}var nt=Object(z.a)(function(e){return{root:{"& img":{display:"block",width:"100%"}},callToAction:{minHeight:"200px"},center:{display:"flex",justifyContent:"center",alignItems:"center"}}});var at=function(e){var t=e.match.params.id,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.c)(function(e){return e.projects.items}),i=Object(c.b)(),l=Object(P.b)("ProjectPage").t,u=nt(),s=o&&o.filter(function(e){return e.id===parseInt(t)})[0]||{},m=s.name,E=s.summary,p=s.url,d=s.description,g=s.needs,f=s.imgs,S=void 0===f?[]:f,h=s.lookingFor,b=void 0===h?[]:h,v=s.participants,R=void 0===v?[]:v;Object(a.useEffect)(function(){i(fe.getAll())},[]);var T=Ze()().use(et.a).processSync,O=T(d).contents,C=T(g).contents;return r.a.createElement(qe,{title:m,subtitle:E,background:te(S[0])},r.a.createElement(Te.a,null,r.a.createElement(xe.a,{variant:"h2"},m),r.a.createElement(Xe.a,{className:u.root,container:!0,spacing:2},r.a.createElement(Xe.a,{item:!0,xs:!0},r.a.createElement(Ke.a,{rel:"noopener",target:"_blank",href:p,variant:"subtitle1",gutterBottom:!0},p),r.a.createElement(xe.a,{variant:"h3",gutterBottom:!0},l("About us")),r.a.createElement(xe.a,{variant:"body1"},O),r.a.createElement(xe.a,{variant:"h3",gutterBottom:!0},l("Our needs")),r.a.createElement(xe.a,{variant:"body1"},C)),r.a.createElement(Xe.a,{item:!0,sm:5,md:4,container:!0,direction:"column",spacing:2},r.a.createElement(Xe.a,{item:!0},r.a.createElement("img",{src:te(S[1]),alt:l("Project image")})),r.a.createElement(Xe.a,{item:!0},r.a.createElement("img",{src:te(S[2]),alt:l("Project image")}))))),r.a.createElement("div",{className:u.callToAction},r.a.createElement(Te.a,null,r.a.createElement(Xe.a,{container:!0,spacing:2},r.a.createElement(Xe.a,{item:!0,xs:!0},r.a.createElement(xe.a,{variant:"h2",color:"primary"},l("Ponte en contacto con nosotras si eres")),r.a.createElement("ul",null,b.map(function(e){return r.a.createElement(tt,{key:e,title:e})}))),r.a.createElement(Xe.a,{item:!0,sm:6,className:u.center},n?R.includes(n.id)?r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return i(fe.removeParticipant(s,n))}},l("Leave")):r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return i(fe.addParticipant(s,n))}},l("Join")):null)))))},rt=n(980),ot=n(203),it=Object(z.a)({largerInputRoot:{fontSize:"1.8rem"},largerLabelRoot:{fontSize:"1.8rem"},smallerInputRoot:{fontSize:"0.7rem"},smallerLabelRoot:{fontSize:"0.7rem"}}),ct=function(e){var t=Object(ot.a)({},e),n=it();return r.a.createElement(rt.a,Object.assign({},t,{InputProps:{classes:{root:n.largerInputRoot}},InputLabelProps:{FormLabelClasses:{root:n.largerLabelRoot}}}))},lt=function(e){var t=Object(ot.a)({},e),n=it();return r.a.createElement(rt.a,Object.assign({},t,{InputProps:{classes:{root:n.smallerInputRoot}},InputLabelProps:{FormLabelClasses:{root:n.smallerLabelRoot}}}))},ut=function(e){var t=e.setImage;return r.a.createElement(ve.a,{variant:"outlined",component:"label"},"Upload Image",r.a.createElement("input",{type:"file",onChange:function(e){return t(e.target.files[0])},accept:"image/x-png,image/gif,image/jpeg",style:{display:"none"}}))},st=Object(z.a)(function(e){return{box:{display:"flex",justifyContent:"center",alignItems:"center",height:200,background:e.palette.secondary.main}}}),mt=function(e){var t=e.image,n=e.setImage,a=st();return r.a.createElement("div",{className:a.box,style:{backgroundImage:"url(".concat(te(t),")")}},r.a.createElement(ut,{setImage:n}))};var Et=Object(Q.f)(function(e){var t=e.history,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.b)(),i=Object(P.b)("ProjectFormPage").t;n||t.push("/");var l=function(e){e.preventDefault(),o(fe.add({name:m,organizer:n.id,summary:g,url:b,description:O,needs:_,imgs:[N,x,Q]},t))},u=Object(a.useState)(""),s=Object(se.a)(u,2),m=s[0],E=s[1],p=Object(a.useState)(""),d=Object(se.a)(p,2),g=d[0],f=d[1],S=Object(a.useState)(""),h=Object(se.a)(S,2),b=h[0],v=h[1],R=Object(a.useState)(""),T=Object(se.a)(R,2),O=T[0],C=T[1],j=Object(a.useState)(""),y=Object(se.a)(j,2),_=y[0],A=y[1],L=function(e){return function(t){(function(e){return $.add(e).then(ee).then(function(e){return $.pin.add(e)}).then(ee).then(function(e){return console.log(e.map(function(e){return"".concat(H,"/ipfs/").concat(e)})),e})})(t).then(function(t){return e("/ipfs/".concat(t[0]))})}},I=Object(a.useState)(),U=Object(se.a)(I,2),N=U[0],k=U[1],D=Object(a.useState)(),w=Object(se.a)(D,2),x=w[0],G=w[1],F=Object(a.useState)(),J=Object(se.a)(F,2),Q=J[0],z=J[1],M=L(k),B=L(G),W=L(z);return r.a.createElement("form",{onSubmit:l},r.a.createElement(qe,{background:te(N),title:r.a.createElement(ct,{inputProps:!0,variant:"outlined",name:"name",value:m,onChange:function(e){return E(e.target.value)},placeholder:"Project Name"}),subtitle:r.a.createElement(r.a.Fragment,null,r.a.createElement(rt.a,{variant:"outlined",name:"summary",value:g,onChange:function(e){return f(e.target.value)},placeholder:"What is your project about?"}),r.a.createElement("br",null),r.a.createElement(ut,{setImage:function(e){return M(e)}}))},r.a.createElement(Te.a,null,r.a.createElement(xe.a,{variant:"h2"},m||"Project Name"),r.a.createElement(Xe.a,{container:!0,spacing:2},r.a.createElement(Xe.a,{item:!0,xs:!0},r.a.createElement(lt,{variant:"outlined",name:"url",value:b,onChange:function(e){return v(e.target.value)},placeholder:"URL"}),r.a.createElement(xe.a,{variant:"h4",gutterBottom:!0},i("Brief project description")),r.a.createElement(rt.a,{fullWidth:!0,variant:"outlined",onChange:function(e){return C(e.target.value)},value:O,multiline:!0,rows:"4",placeholder:i("Add a description")}),r.a.createElement(xe.a,{variant:"h4",gutterBottom:!0},i("What do you need?")),r.a.createElement(rt.a,{fullWidth:!0,variant:"outlined",onChange:function(e){return A(e.target.value)},value:_,multiline:!0,rows:"4",placeholder:i("Add a description")})),r.a.createElement(Xe.a,{item:!0,sm:5,md:4,container:!0,direction:"column",spacing:2},r.a.createElement(Xe.a,{item:!0},r.a.createElement(mt,{image:x,setImage:B})),r.a.createElement(Xe.a,{item:!0},r.a.createElement(mt,{image:Q,setImage:W})))),r.a.createElement("h2",null,i("What kind of profiles are you looking for")),r.a.createElement(xe.a,{align:"center",paragraph:!0},r.a.createElement(ve.a,{color:"primary",variant:"contained",size:"large",align:"center",onClick:l},i("Done!"))),r.a.createElement(xe.a,{variant:"body2",align:"center"},r.a.createElement("span",{role:"img","aria-labelledby":"good-luck"},"\ud83e\udd1e"),r.a.createElement("span",{id:"good-luck"},"Crossing fingers")))))}),pt=n(977),dt=(n(976),n(979),n(963)),gt=n(985),ft=n(354),St=Object(z.a)(function(e){return{background:{background:"#FF4B63 no-repeat center center fixed",backgroundSize:"cover",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},main:Object(Se.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(6*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},marginTop:{marginTop:3*e.spacing.unit}}}),ht={isLogin:!0,title:"Sign in to Smart Projects",subtitle:"Enter your details below",button:"Sign in",otherLink:{question:"Don't you have an account?",button:"Get started",link:"/register"}},bt={isLogin:!1,title:"Get started",subtitle:"Enjoy the Smart Community",button:"Start",otherLink:{question:"Already you have an account?",button:"Sign in",link:"/login"}},vt=function(e){var t=e.name,n=e.setName;return r.a.createElement(ye.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(gt.a,{htmlFor:"email"},"Name"),r.a.createElement(dt.a,{id:"name",name:"name",value:t,onChange:function(e){return n(e.target.value)}}))},Rt=function(e){var t=e.email,n=e.setEmail;return r.a.createElement(ye.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(gt.a,{htmlFor:"email"},"Email Address"),r.a.createElement(dt.a,{id:"email",name:"email",autoComplete:"email",value:t,onChange:function(e){return n(e.target.value)}}))},Tt=function(e){var t=e.password,n=e.setPassword;return r.a.createElement(ye.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(gt.a,{htmlFor:"password"},"Password"),r.a.createElement(dt.a,{name:"password",type:"password",id:"password",value:t,onChange:function(e){return n(e.target.value)},autoComplete:"current-password"}))},Ot=function(e){var t=e.text,n=St();return r.a.createElement(ve.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.marginTop},t)},Ct=function(e){var t=e.question,n=e.button,a=e.onClick,o=St();return r.a.createElement("div",{className:o.marginTop},r.a.createElement(xe.a,{align:"center"},t," ",r.a.createElement(ve.a,{variant:"outlined",color:"primary",onClick:a},n)))};var jt=Object(Q.f)(function(e){var t=e.history,n=e.match.path,o=Object(c.c)(function(e){return e.user}),i=Object(c.b)();o&&t.push("/");var l=St(),u=Object(a.useState)(""),s=Object(se.a)(u,2),m=s[0],E=s[1],p=Object(a.useState)(""),d=Object(se.a)(p,2),g=d[0],f=d[1],S=Object(a.useState)(""),h=Object(se.a)(S,2),b=h[0],v=h[1],R="/register"!==n?ht:bt,T=R.title,O=R.subtitle,C=R.button,j=R.isLogin,y=R.otherLink;return r.a.createElement(Ve,{className:l.background,style:{backgroundImage:"url(/images/"+(j?"login":"register")+"-background.jpg)"}},r.a.createElement("main",{className:l.main},r.a.createElement(pt.a,null),r.a.createElement(ft.a,{className:l.paper},r.a.createElement(xe.a,{component:"h1",variant:"h3",align:"center"},T),r.a.createElement(xe.a,{component:"h2",variant:"subtitle1"},O),r.a.createElement("form",{className:l.form,onSubmit:function(e){e.preventDefault(),i(j?ge.login(g,b,t):ge.register({name:m,email:g,password:b},t))}},!j&&r.a.createElement(vt,{name:m,setName:E}),r.a.createElement(Rt,{email:g,setEmail:f}),r.a.createElement(Tt,{password:b,setPassword:v}),!1,r.a.createElement(Ot,{classes:l,text:C}),r.a.createElement(Ge.a,{className:l.marginTop}),r.a.createElement(Ct,Object.assign({classes:l},y,{onClick:function(){return t.push(y.link)}}))))))});n(918);var yt=function(){return r.a.createElement(J.a,null,r.a.createElement(Q.d,null,r.a.createElement(Q.b,{path:"/",exact:!0,component:He}),r.a.createElement(Q.b,{path:"/login",component:jt}),r.a.createElement(Q.b,{path:"/register",component:jt}),r.a.createElement(Q.b,{path:"/project/new",component:Et}),r.a.createElement(Q.b,{path:"/project/:id",component:at}),r.a.createElement(Q.b,{render:function(){return r.a.createElement(Q.a,{to:"/"})}})))};i.a.render(r.a.createElement(a.Suspense,{fallback:"loading"},r.a.createElement(F,null,r.a.createElement(c.a,{store:y},r.a.createElement(yt,null)))),document.getElementById("root"))}},[[366,1,2]]]);
//# sourceMappingURL=main.ddf17f3a.chunk.js.map