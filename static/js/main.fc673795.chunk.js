(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t){},366:function(e,t,n){e.exports=n(919)},375:function(e,t,n){},460:function(e,t){},476:function(e,t){},490:function(e,t){},492:function(e,t){},521:function(e,t){},523:function(e,t){},561:function(e,t){},562:function(e,t){},578:function(e,t){},918:function(e,t,n){},919:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(30),l=n(88),u="Kor\xedkoko es el nombre de un **colectivo de creadores y artistas** en todos los \xe1mbitos que creemos en la expresi\xf3n art\xedstica como veh\xedculo fundamental de conocimiento y de crecimiento durante la infancia.\n\nM\xfasicos, artistas pl\xe1sticos, psic\xf3logos y escritores conformamos este equipo de trabajo que comparte la ilusi\xf3n por contribuir al desarrollo integral y feliz del individuo y que apuesta por la infancia como garant\xeda de futuro.",s="Korikoko nace con la ilusi\xf3n y el objetivo de intervenir en la infancia potenciando todas las cualidades propias de este periodo vital como el desarrollo cognitivo, la creatividad y la inteligencia emocional que intervienen en la salud, el crecimiento y la felicidad de los ni\xf1os.\n\nPara un nuevo proyecto en XXXX centro educativo necesitamos:\n*\tUn/a profesor/a de m\xfasica para una escuela en Boadilla.\n*\tUn/a psic\xf3loga infantil\n*\tUn/a musicoterapeuta\n",m=0;function E(e,t,n){return{name:e,organizer:t,areas:n,id:m++,participants:[],imgs:["https://placeimg.com/640/480/any/".concat(e),"https://placeimg.com/640/480/any/".concat(e,"-1"),"https://placeimg.com/640/480/any/".concat(e,"-2")],lookingFor:["Profe de m\xfasica","Psic\xf3loga/o infantil"],summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",description:u,needs:s,url:"http://p2pmodels.eu"}}var p=[E("Carrera 10k","Silvia",["sp\xf2rts","health"]),E("Hackathon Cryptoostrom","David",["commons","work"]),E("Cineforum","Jordi",["culture","cinema"]),E("Karaoke","Sem",["party"]),E("Cumple de Leo","Elena",["party"])];JSON.parse(localStorage.getItem("users")),JSON.parse(localStorage.getItem("projects"));var d=n(48),g=Object(d.a)({basename:""}),f=n(84),S=n(340),h=n(341),b={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},v={REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE",DELETE_REQUEST:"USERS_DELETE_REQUEST",DELETE_SUCCESS:"USERS_DELETE_SUCCESS",DELETE_FAILURE:"USERS_DELETE_FAILURE"},R={ADD_REQUEST:"PROJECTS_ADD_REQUEST",ADD_SUCCESS:"PROJECTS_ADD_SUCCESS",ADD_FAILURE:"PROJECTS_ADD_FAILURE",GETALL_REQUEST:"PROJECTS_GETALL_REQUEST",GETALL_SUCCESS:"PROJECTS_GETALL_SUCCESS",GETALL_FAILURE:"PROJECTS_GETALL_FAILURE",REMOVE_REQUEST:"PROJECTS_REMOVE_REQUEST",REMOVE_SUCCESS:"PROJECTS_REMOVE_SUCCESS",REMOVE_FAILURE:"PROJECTS_REMOVE_FAILURE",ADD_PARTICIPANT_REQUEST:"PROJECTS_ADD_PARTICIPANTS_REQUEST",ADD_PARTICIPANT_SUCCESS:"PROJECTS_ADD_PARTICIPANTS_SUCCESS",ADD_PARTICIPANT_FAILURE:"PROJECTS_ADD_PARTICIPANTS_FAILURE",REMOVE_PARTICIPANT_REQUEST:"PROJECTS_REMOVE_PARTICIPANTS_REQUEST",REMOVE_PARTICIPANT_SUCCESS:"PROJECTS_REMOVE_PARTICIPANTS_SUCCESS",REMOVE_PARTICIPANT_FAILURE:"PROJECTS_REMOVE_PARTICIPANTS_FAILURE"},T=JSON.parse(localStorage.getItem("user")),O=T?{loggedIn:!0,user:T}:{};var C=n(89),j=n(15);var y=Object(f.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.LOGIN_REQUEST:return{};case v.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case v.LOGIN_FAILURE:case v.LOGOUT:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case v.REGISTER_REQUEST:return{registering:!0};case v.REGISTER_SUCCESS:case v.REGISTER_FAILURE:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GETALL_REQUEST:return{loading:!0};case v.GETALL_SUCCESS:return{items:t.users};case v.GETALL_FAILURE:return{error:t.error};case v.DELETE_REQUEST:return Object(j.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(j.a)({},e,{deleting:!0}):e})});case v.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case v.DELETE_FAILURE:return Object(j.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var n=Object(C.a)(e,["deleting"]);return Object(j.a)({},n,{deleteError:t.error})}return e})});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.GETALL_REQUEST:return{loading:!0};case R.GETALL_SUCCESS:return{items:t.projects};case R.GETALL_FAILURE:return{error:t.error};case R.ADD_PARTICIPANT_REQUEST:case R.ADD_PARTICIPANT_SUCCESS:case R.ADD_PARTICIPANT_FAILURE:case R.REMOVE_PARTICIPANT_REQUEST:case R.REMOVE_PARTICIPANT_SUCCESS:case R.REMOVE_PARTICIPANT_FAILURE:return Object(j.a)({},e,{items:e.items.map(function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.ADD_PARTICIPANT_SUCCESS:return Object(j.a)({},e,{participants:[].concat(Object(l.a)(e.participants),[t.user.id])});case R.REMOVE_PARTICIPANT_SUCCESS:return Object(j.a)({},e,{participants:e.participants.filter(function(e){return e!==t.user.id})});default:return e}}(e,t)})});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SUCCESS:return{type:"alert-success",message:t.message};case b.ERROR:return{type:"alert-danger",message:t.message};case b.CLEAR:return{};default:return e}}}),_=Object(h.createLogger)(),A=Object(f.d)(y,Object(f.a)(S.a,_));function L(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}n(375);var I=n(204),U=n(342),P=n(343),N=n.n(P),k=n(64);I.a.use(U.a).use(N.a).use(k.a).init({fallbackLng:"en",defaultNS:"App",load:"languageOnly",backend:{loadPath:"locale/{{lng}}/{{ns}}.json"},nsSeparator:!1,keySeparator:!1,interpolation:{escapeValue:!1}});I.a;var D=n(353),w=n(984),x={fontFamily:"Helvetica Neue",letterSpacing:"-0.84px"},G=Object(D.a)({palette:{primary:{main:"#FF4B63"},secondary:{main:"#3E979C"}},overrides:{MuiTypography:{h1:Object(j.a)({},x,{fontSize:"60px",letterSpacing:"-1.7px",fontWeight:"bold",marginTop:"35px"}),h2:Object(j.a)({},x,{fontSize:"40px",fontWeight:"bold",marginTop:"35px"}),h3:Object(j.a)({},x,{fontSize:"30px",fontWeight:"bold",marginTop:"35px"}),h4:Object(j.a)({},x,{fontSize:"20px",marginTop:"35px"}),subtitle1:Object(j.a)({},x,{fontSize:"20px",color:"#A7A2A6"})},MuiButton:{root:Object(j.a)({},x,{fontWeight:"bold",textTransform:"none",borderRadius:"24px"}),outlinedPrimary:{borderWidth:"2px !important"},sizeLarge:{fontSize:"1.3rem"}},MuiGridListTileBar:{root:{alignItems:"flex-end",background:"rgba(0,0,0,0.4)"},rootSubtitle:{height:"100%"},titleWrap:{marginBottom:"22px"},title:Object(j.a)({},x,{fontSize:"40px",lineHeight:"45px",fontWeight:"bold"}),subtitle:{color:"#FF4B63"}}},typography:{useNextVariants:!0}}),F=function(e){return Object(j.a)({},e,{palette:Object(j.a)({},e.palette,{type:"dark"}),overrides:Object(j.a)({},e.overrides,{MuiOutlinedInput:{input:{color:"white"}},MuiButton:Object(j.a)({},e.overrides.MuiButton,{outlined:Object(j.a)({},e.overrides.MuiButton.outlined,{color:"white"})})})})},J=function(e){var t=e.children;return r.a.createElement(w.a,{theme:F},t)},Q=function(e){var t=e.children;return r.a.createElement(w.a,{theme:G},t)},z=n(83),M=n(85),B=n(921),W=n(961),V=n(959),q=n(960),H=n(346),X=n.n(H),K="https://gateway.ipfs.technology",Y=new URL("https://gateway.ipfs.technology"),Z=Y.hostname,$=Y.protocol,ee=Y.port||"http:"===$?80:443;console.log(Z,$,ee);var te=X()(Z,ee,{protocol:$.slice(0,-1)}),ne=function(e){return e.map(function(e){return e.hash})};function ae(e){return"".concat(K,"/").concat(e)}var re=Object(B.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"15px",marginLeft:"-7.5px"},gridList:{height:"100%",width:"100%"}}}),oe=function(e){var t=e.history,n=Object(C.a)(e,["history"]);return r.a.createElement(V.a,Object.assign({},n,{onClick:function(){return t.push("/project/new")}}),r.a.createElement("img",{src:"https://placeimg.com/640/480/any/new",alt:"x"}),r.a.createElement(q.a,{title:"New",subtitle:r.a.createElement("span",null)}))};var ie=Object(M.f)(function(e){var t=e.projects,n=e.showNewProjectTile,a=e.history,o=re();return r.a.createElement("div",{className:o.root},r.a.createElement(W.a,{cellHeight:360,spacing:15,className:o.gridList,cols:3},t.map(function(e){var t=e.id,n=e.name,o=e.areas,i=void 0===o?[]:o,c=e.imgs;return r.a.createElement(V.a,{key:t,onClick:function(){return a.push("/project/".concat(t))}},r.a.createElement("img",{src:ae(c[0]),alt:n}),r.a.createElement(q.a,{title:n,subtitle:r.a.createElement("span",null,i.join(", "))}))}),n&&r.a.createElement(oe,{history:a})))}),ce={success:function(e){return{type:b.SUCCESS,message:e}},error:function(e){return{type:b.ERROR,message:e}},clear:function(){return{type:b.CLEAR}}};var le={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usernameOrEmail:e,password:t})};return fetch("".concat(ue,"/login"),n).then(me).then(function(e){return localStorage.setItem("user",JSON.stringify(e)),e})},logout:se,register:function(e){e=Object(j.a)({},e,{username:e.email});var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(ue,"/users"),t).then(me)},getAll:function(){var e={method:"GET",headers:L()};return fetch("".concat(ue,"/users"),e).then(me)},getById:function(e){var t={method:"GET",headers:L()};return fetch("".concat(ue,"/users/").concat(e),t).then(me)},update:function(e){var t={method:"PUT",headers:Object(j.a)({},L(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(ue,"/users/").concat(e.id),t).then(me)},delete:function(e){var t={method:"DELETE",headers:L()};return fetch("".concat(ue,"/users/").concat(e),t).then(me)}},ue="https://p2pmodels.ipfs.technology";function se(){localStorage.removeItem("user")}function me(e){return 401===e.status&&se(),e.text().then(function(t){console.log(t,e);var n=t&&JSON.parse(t);if(!e.ok){var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}var Ee=n(33),pe={add:function(e){var t={method:"POST",headers:Object(j.a)({},L(),{"Content-Type":"application/json"}),body:JSON.stringify(ge(e,!0))};return fetch("".concat(de,"/projects"),t).then(fe)},getAll:function(){return fetch("".concat(de,"/projects"),{method:"GET"}).then(fe).then(function(e){return e.map(function(e){return ge(e)})})},getById:function(e){return fetch("".concat(de,"/projects/").concat(e),{method:"GET"}).then(fe).then(function(e){return ge(e)})},update:function(e){var t={method:"PUT",headers:Object(j.a)({},L(),{"Content-Type":"application/json"}),body:JSON.stringify(ge(e,!0))};return fetch("".concat(de,"/projects/").concat(e.id),t).then(fe)},delete:function(e){var t={method:"DELETE",headers:L()};return fetch("".concat(de,"/projects/").concat(e),t).then(fe)},addParticipant:function(e,t){var n={method:"PUT",headers:Object(j.a)({},L(),{"Content-Type":"application/json"}),body:JSON.stringify({addParticipants:[t.id]})};return fetch("".concat(de,"/projects/").concat(e.id),n).then(fe)},removeParticipant:function(e,t){var n={method:"PUT",headers:Object(j.a)({},L(),{"Content-Type":"application/json"}),body:JSON.stringify({delParticipants:[t.id]})};return fetch("".concat(de,"/projects/").concat(e.id),n).then(fe)}},de="https://p2pmodels.ipfs.technology";function ge(e){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]){var t=Object(Ee.a)(e.imgs,3),n=t[0],a=t[1],r=t[2],o=Object(j.a)({},e,{img_bg:n,img1:a,img2:r});return delete o.imgs,o}var i=[e.img_bg,e.img1,e.img2],c=Object(j.a)({},e,{imgs:i});return delete c.img_bg,delete c.img1,delete c.img2,c}function fe(e){return 401===e.status&&le.logout(),e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}var Se={login:function(e,t){return function(n){var a;n({type:v.LOGIN_REQUEST,user:a}),le.login(e,t).then(function(e){console.log(e),n(function(e){return{type:v.LOGIN_SUCCESS,user:e}}(e)),g.push("/")},function(e){n(function(e){return{type:v.LOGIN_FAILURE,error:e}}(e.toString())),n(ce.error(e.toString()))})}},logout:function(){return le.logout(),{type:v.LOGOUT}},register:function(e){return function(t){t(function(e){return{type:v.REGISTER_REQUEST,user:e}}(e)),le.register(e).then(function(e){t(function(e){return{type:v.REGISTER_SUCCESS,user:e}}()),g.push("/login"),t(ce.success("Registration successful"))},function(e){t(function(e){return{type:v.REGISTER_FAILURE,error:e}}(e.toString())),t(ce.error(e.toString()))})}},getAll:function(){return function(e){e({type:v.GETALL_REQUEST}),le.getAll().then(function(t){return e(function(e){return{type:v.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:v.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:v.DELETE_REQUEST,id:e}}(e)),le.delete(e).then(function(n){return t(function(e){return{type:v.DELETE_SUCCESS,id:e}}(e))},function(n){return t(function(e,t){return{type:v.DELETE_FAILURE,id:e,error:t}}(e,n.toString()))})}}};var he={add:function(e){return function(t){t(function(e){return{type:R.ADD_REQUEST,project:e}}(e)),pe.add(e).then(function(e){t(function(e){return{type:R.ADD_SUCCESS,project:e}}()),t(ce.success("Your new project rocks!"))},function(e){t(function(e){return{type:R.ADD_FAILURE,error:e}}(e.toString())),t(ce.error(e.toString()))})}},getAll:function(){return function(e){e({type:R.GETALL_REQUEST}),pe.getAll().then(function(t){return e(function(e){return{type:R.GETALL_SUCCESS,projects:e}}(t))},function(t){return e(function(e){return{type:R.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:R.DELETE_REQUEST,id:e}}(e)),pe.delete(e).then(function(n){return t(function(e){return{type:R.DELETE_SUCCESS,id:e}}(e))},function(n){return t(function(e,t){return{type:R.DELETE_FAILURE,id:e,error:t}}(e,n.toString()))})}},addParticipant:function(e,t){return function(n){n(function(e,t){return{type:R.ADD_PARTICIPANT_REQUEST,project:e,user:t}}(e,t)),pe.addParticipant(e,t).then(function(a){n(function(e,t){return{type:R.ADD_PARTICIPANT_SUCCESS,project:e,user:t}}(e,t)),n(ce.success("You will be contacted by the project organizer soon."))},function(e){n(function(e){return{type:R.ADD_PARTICIPANT_FAILURE,error:e}}(e.toString())),n(ce.error(e.toString()))})}},removeParticipant:function(e,t){return function(n){n(function(e,t){return{type:R.REMOVE_PARTICIPANT_REQUEST,project:e,user:t}}(e,t)),pe.removeParticipant(e,t).then(function(a){n(function(e,t){return{type:R.REMOVE_PARTICIPANT_SUCCESS,project:e,user:t}}(e,t)),n(ce.success("We hope to see you again soon."))},function(e){n(function(e){return{type:R.REMOVE_PARTICIPANT_FAILURE,error:e}}(e.toString())),n(ce.error(e.toString()))})}}};var be=n(103),ve=n(967),Re=n(968),Te=n(970),Oe=n(971),Ce=n(969),je=n(352),ye=n(985),_e=n(202),Ae=n(962),Le=n(980),Ie=Object(B.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"row-reverse"},formControl:{margin:e.spacing.unit,minWidth:120,backgroundColor:Object(_e.fade)(e.palette.common.white,.55),"&:hover":{backgroundColor:Object(_e.fade)(e.palette.common.white,.75)}}}});var Ue=function(){var e=Object(k.b)().i18n,t=Object(a.useState)(e.languages[0]),n=Object(Ee.a)(t,2),o=n[0],i=n[1],c=Ie();return Object(a.useEffect)(function(){e.changeLanguage(o)},[o]),r.a.createElement("form",{className:c.root,autoComplete:"off"},r.a.createElement(Ae.a,{className:c.formControl},r.a.createElement(Le.a,{inputProps:{name:"lang",id:"lang"},value:o,onChange:function(e){return i(e.target.value)}},r.a.createElement(ye.a,{value:"en"},"English"),r.a.createElement(ye.a,{value:"es"},"Espa\xf1ol"))))},Pe=n(966),Ne=Object(B.a)({avatar:{margin:10,color:"#fff"}});var ke=["#d73d32","#7e3794","#4285f4","#67ae3f","#d61a7f","#ff4080"];function De(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ke;return t[function(e,t){for(var n=Object(l.a)(e).map(function(e){return e.charCodeAt(0)}),a=n.length,r=a%(t-1)+1,o=n.reduce(function(e,t){return e+t})%t,i=n[0]%t,c=0;c<a;c++)i=(r*i+o)%t;return i}(e,t.length)]}var we=function(e){var t=e.user,n=Ne();return r.a.createElement(Pe.a,{alt:t.name,style:{backgroundColor:De(t.name)},className:n.avatar},t.name.split(/\s/).map(function(e){return e.substring(0,1).toUpperCase()}).filter(function(e){return!!e}).slice(0,2).join(""))},xe=Object(B.a)({root:{flexGrow:1},flex:{display:"flex",alignItems:"center"},grow:{flexGrow:1,alignSelf:"flex-start"},avatar:{margin:10},menuButton:{marginLeft:-12,marginRight:20}});var Ge=Object(M.f)(function(e){e.children;var t=e.history,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.b)(),i=Object(a.useState)(null),l=Object(Ee.a)(i,2),u=l[0],s=l[1],m=xe(),E=Boolean(u);return r.a.createElement("div",{className:m.root},r.a.createElement(ve.a,{position:"static",color:"default"},r.a.createElement(Re.a,null,r.a.createElement(Ce.a,{className:m.flex},r.a.createElement("div",{className:m.grow},r.a.createElement(z.b,{to:"/"},r.a.createElement("img",{style:{position:"absolute",zIndex:1},src:"/images/logo.png",alt:"Logo"}))),r.a.createElement("div",{className:m.flex},r.a.createElement(Ue,null),n?r.a.createElement("div",null,r.a.createElement(Oe.a,{"aria-owns":E?"menu-appbar":void 0,"aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},color:"inherit"},r.a.createElement(we,{user:n})),r.a.createElement(je.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:E,onClose:function(){return s(null)}},r.a.createElement(ye.a,{onClick:function(){return s(null)}},"Profile"),r.a.createElement(ye.a,{onClick:function(){s(null),o(Se.logout())}},"Logout"))):r.a.createElement(Te.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/login")}},"Log in"))))))}),Fe=n(205),Je=n(972),Qe=n(983),ze=n(973),Me=n(349),Be=n.n(Me),We=Object(B.a)(function(e){return{root:{color:"white",background:"transparent no-repeat center center",backgroundSize:"cover"},wrapper:Object(be.a)({minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingLeft:"10%",paddingRight:"10%"},e.breakpoints.up(1800),{paddingLeft:"25%",paddingRight:"25%"}),divider:{background:"white",margin:"20px",height:"3px",width:"150px"},subtitle:{fontWeight:200},footer:{position:"relative",minHeight:48,marginTop:"30px",color:"white",background:"#3A3A3A"},spacer:{width:78},img:{position:"absolute",bottom:0,zIndex:1,width:68}}}),Ve=function(e){var t=e.classes;return r.a.createElement(Re.a,{className:t.footer},r.a.createElement("a",{href:"http://smart-ib.coop/",className:t.spacer},r.a.createElement("img",{className:t.img,src:"/images/logo.png",alt:"Logo"})),r.a.createElement(Fe.a,{color:"inherit"},"Smart Coop in Europe:  Deutschland   France   Iberica   Italia   Magyarorsz\xe1g   Nederland   \xd6sterreich   Sverige"))};var qe=Object(B.a)(function(e){return{"alert-success":{backgroundColor:Be.a[600]},"alert-danger":{backgroundColor:e.palette.error.dark},"alert-info":{backgroundColor:e.palette.primary.dark}}});function He(e){var t=e.children,n=Object(C.a)(e,["children"]),a=Object(c.c)(function(e){return e.alert}),o=a.type,i=a.message,l=Object(c.b)(),u=qe();return r.a.createElement("div",n,t,r.a.createElement(Qe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:function(e,t){l(ce.clear())},autoHideDuration:4e3,open:!!i},r.a.createElement(ze.a,{message:i,className:u[o]})))}var Xe=function(e){var t=e.title,n=e.subtitle,a=e.background,o=e.overlay,i=void 0===o||o,c=e.children,l=Object(C.a)(e,["title","subtitle","background","overlay","children"]),u=i&&"rgba(0,0,0,0.5)";a='#3E979C url("'+a+'")';var s=We();return r.a.createElement(He,l,r.a.createElement(Ge,null),r.a.createElement(J,null,r.a.createElement("header",{className:s.root,style:{background:a}},r.a.createElement("div",{className:s.wrapper,style:{backgroundColor:u}},r.a.createElement(Fe.a,{color:"inherit",variant:"h1",align:"center"},t),r.a.createElement(Je.a,{variant:"middle",light:!0,className:s.divider}),r.a.createElement(Fe.a,{color:"inherit",variant:"h3",align:"center",className:s.subtitle},n)))),c,r.a.createElement(Ve,{classes:s}))};var Ke=function(){var e=Object(c.c)(function(e){return e.authentication.user}),t=Object(c.c)(function(e){return e.projects.items})||[],n=Object(c.b)(),o=Object(k.b)("App").t,i=function(t){return e&&(t.organizer===e.id||t.participants.includes(e.id))},l=t.filter(i),u=t.filter(function(e){return!i(e)}),s=o("Join the SmartIb Community of Creative Workers on Blockchain"),m=o("Support projects, find opportunities");Object(a.useEffect)(function(){n(he.getAll())},[]);var E=e?"header-2":"header-1";return r.a.createElement(Xe,{title:s,subtitle:m,background:"/images/".concat(E,".jpg"),overlay:!1},r.a.createElement(Ce.a,null,e&&r.a.createElement("div",null,r.a.createElement(Fe.a,{variant:"h3"},o("Your Projects")),r.a.createElement(ie,{projects:l,showNewProjectTile:!0})),e&&r.a.createElement(Fe.a,{variant:"h3"},o("New Projects")),r.a.createElement(ie,{projects:u})))},Ye=n(974),Ze=n(975),$e=n(350),et=n.n($e),tt=n(351),nt=n.n(tt);function at(e){var t=e.title;return r.a.createElement("li",null,t)}var rt=Object(B.a)(function(e){return{root:{"& img":{display:"block",width:"100%"}},callToAction:{minHeight:"200px"},center:{display:"flex",justifyContent:"center",alignItems:"center"}}});var ot=function(e){var t=e.match.params.id,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.c)(function(e){return e.projects.items}),i=Object(c.b)(),l=Object(k.b)("ProjectPage").t,u=rt(),s=o&&o.filter(function(e){return e.id===parseInt(t)})[0]||{},m=s.name,E=s.summary,p=s.url,d=s.description,g=s.needs,f=s.imgs,S=void 0===f?[]:f,h=s.lookingFor,b=void 0===h?[]:h,v=s.participants,R=void 0===v?[]:v;Object(a.useEffect)(function(){i(he.getAll())},[]);var T=et()().use(nt.a).processSync,O=T(d).contents,C=T(g).contents;return r.a.createElement(Xe,{title:m,subtitle:E,background:ae(S[0])},r.a.createElement(Ce.a,null,r.a.createElement(Fe.a,{variant:"h2"},m),r.a.createElement(Ye.a,{className:u.root,container:!0,spacing:2},r.a.createElement(Ye.a,{item:!0,xs:!0},r.a.createElement(Ze.a,{rel:"noopener",target:"_blank",href:p,variant:"subtitle1",gutterBottom:!0},p),r.a.createElement(Fe.a,{variant:"h3",gutterBottom:!0},l("About us")),r.a.createElement(Fe.a,{variant:"body1"},O),r.a.createElement(Fe.a,{variant:"h3",gutterBottom:!0},l("Our needs")),r.a.createElement(Fe.a,{variant:"body1"},C)),r.a.createElement(Ye.a,{item:!0,sm:5,md:4,container:!0,direction:"column",spacing:2},r.a.createElement(Ye.a,{item:!0},r.a.createElement("img",{src:ae(S[1]),alt:l("Project image")})),r.a.createElement(Ye.a,{item:!0},r.a.createElement("img",{src:ae(S[2]),alt:l("Project image")}))))),r.a.createElement("div",{className:u.callToAction},r.a.createElement(Ce.a,null,r.a.createElement(Ye.a,{container:!0,spacing:2},r.a.createElement(Ye.a,{item:!0,xs:!0},r.a.createElement(Fe.a,{variant:"h2",color:"primary"},l("Ponte en contacto con nosotras si eres")),r.a.createElement("ul",null,b.map(function(e){return r.a.createElement(at,{key:e,title:e})}))),r.a.createElement(Ye.a,{item:!0,sm:6,className:u.center},n?R.includes(n.id)?r.a.createElement(Te.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return i(he.removeParticipant(s,n))}},l("Leave")):r.a.createElement(Te.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return i(he.addParticipant(s,n))}},l("Join")):null)))))},it=n(978),ct=n(203),lt=Object(B.a)({largerInputRoot:{fontSize:"1.8rem"},largerLabelRoot:{fontSize:"1.8rem"},smallerInputRoot:{fontSize:"0.7rem"},smallerLabelRoot:{fontSize:"0.7rem"}}),ut=function(e){var t=Object(ct.a)({},e),n=lt();return r.a.createElement(it.a,Object.assign({},t,{InputProps:{classes:{root:n.largerInputRoot}},InputLabelProps:{FormLabelClasses:{root:n.largerLabelRoot}}}))},st=function(e){var t=Object(ct.a)({},e),n=lt();return r.a.createElement(it.a,Object.assign({},t,{InputProps:{classes:{root:n.smallerInputRoot}},InputLabelProps:{FormLabelClasses:{root:n.smallerLabelRoot}}}))},mt=function(e){var t=e.setImage;return r.a.createElement(Te.a,{variant:"outlined",component:"label"},"Upload Image",r.a.createElement("input",{type:"file",onChange:function(e){return t(e.target.files[0])},accept:"image/x-png,image/gif,image/jpeg",style:{display:"none"}}))},Et=Object(B.a)(function(e){return{box:{display:"flex",justifyContent:"center",alignItems:"center",height:200,background:e.palette.secondary.main}}}),pt=function(e){var t=e.image,n=e.setImage,a=Et();return r.a.createElement("div",{className:a.box,style:{backgroundImage:"url(".concat(ae(t),")")}},r.a.createElement(mt,{setImage:n}))};var dt=Object(M.f)(function(e){var t=e.history,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.b)(),i=Object(k.b)("ProjectFormPage").t;n||t.push("/");var l=function(e){e.preventDefault(),o(he.add({name:m,organizer:n.id,summary:g,url:b,description:O,needs:_,imgs:[P,x,Q]})),t.push("/")},u=Object(a.useState)(""),s=Object(Ee.a)(u,2),m=s[0],E=s[1],p=Object(a.useState)(""),d=Object(Ee.a)(p,2),g=d[0],f=d[1],S=Object(a.useState)(""),h=Object(Ee.a)(S,2),b=h[0],v=h[1],R=Object(a.useState)(""),T=Object(Ee.a)(R,2),O=T[0],C=T[1],j=Object(a.useState)(""),y=Object(Ee.a)(j,2),_=y[0],A=y[1],L=function(e){return function(t){(function(e){return te.add(e).then(ne).then(function(e){return te.pin.add(e)}).then(ne).then(function(e){return console.log(e.map(function(e){return"".concat(K,"/ipfs/").concat(e)})),e})})(t).then(function(t){return e("/ipfs/".concat(t[0]))})}},I=Object(a.useState)(),U=Object(Ee.a)(I,2),P=U[0],N=U[1],D=Object(a.useState)(),w=Object(Ee.a)(D,2),x=w[0],G=w[1],F=Object(a.useState)(),J=Object(Ee.a)(F,2),Q=J[0],z=J[1],M=L(N),B=L(G),W=L(z);return r.a.createElement("form",{onSubmit:l},r.a.createElement(Xe,{background:ae(P),title:r.a.createElement(ut,{inputProps:!0,variant:"outlined",name:"name",value:m,onChange:function(e){return E(e.target.value)},placeholder:"Project Name"}),subtitle:r.a.createElement(r.a.Fragment,null,r.a.createElement(it.a,{variant:"outlined",name:"summary",value:g,onChange:function(e){return f(e.target.value)},placeholder:"What is your project about?"}),r.a.createElement("br",null),r.a.createElement(mt,{setImage:function(e){return M(e)}}))},r.a.createElement(Ce.a,null,r.a.createElement(Fe.a,{variant:"h2"},m||"Project Name"),r.a.createElement(Ye.a,{container:!0,spacing:2},r.a.createElement(Ye.a,{item:!0,xs:!0},r.a.createElement(st,{variant:"outlined",name:"url",value:b,onChange:function(e){return v(e.target.value)},placeholder:"URL"}),r.a.createElement(Fe.a,{variant:"h4",gutterBottom:!0},i("Brief project description")),r.a.createElement(it.a,{fullWidth:!0,variant:"outlined",onChange:function(e){return C(e.target.value)},value:O,multiline:!0,rows:"4",placeholder:i("Add a description")}),r.a.createElement(Fe.a,{variant:"h4",gutterBottom:!0},i("What do you need?")),r.a.createElement(it.a,{fullWidth:!0,variant:"outlined",onChange:function(e){return A(e.target.value)},value:_,multiline:!0,rows:"4",placeholder:i("Add a description")})),r.a.createElement(Ye.a,{item:!0,sm:5,md:4,container:!0,direction:"column",spacing:2},r.a.createElement(Ye.a,{item:!0},r.a.createElement(pt,{image:x,setImage:B})),r.a.createElement(Ye.a,{item:!0},r.a.createElement(pt,{image:Q,setImage:W})))),r.a.createElement("h2",null,i("What kind of profiles are you looking for")),r.a.createElement(Fe.a,{align:"center",paragraph:!0},r.a.createElement(Te.a,{color:"primary",variant:"contained",size:"large",align:"center",onClick:l},i("Done!"))),r.a.createElement(Fe.a,{variant:"body2",align:"center"},r.a.createElement("span",{role:"img","aria-labelledby":"good-luck"},"\ud83e\udd1e"),r.a.createElement("span",{id:"good-luck"},"Crossing fingers")))))}),gt=n(977),ft=(n(976),n(979),n(963)),St=n(982),ht=n(354),bt=Object(B.a)(function(e){return{background:{background:"#FF4B63 no-repeat center center fixed",backgroundSize:"cover",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},main:Object(be.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(6*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},marginTop:{marginTop:3*e.spacing.unit}}}),vt={isLogin:!0,title:"Sign in to Smart Projects",subtitle:"Enter your details below",button:"Sign in",otherLink:{question:"Don't you have an account?",button:"Get started",link:"/register"}},Rt={isLogin:!1,title:"Get started",subtitle:"Enjoy the Smart Community",button:"Start",otherLink:{question:"Already you have an account?",button:"Sign in",link:"/login"}},Tt=function(e){var t=e.name,n=e.setName;return r.a.createElement(Ae.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(St.a,{htmlFor:"email"},"Name"),r.a.createElement(ft.a,{id:"name",name:"name",value:t,onChange:function(e){return n(e.target.value)}}))},Ot=function(e){var t=e.email,n=e.setEmail;return r.a.createElement(Ae.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(St.a,{htmlFor:"email"},"Email Address"),r.a.createElement(ft.a,{id:"email",name:"email",autoComplete:"email",value:t,onChange:function(e){return n(e.target.value)}}))},Ct=function(e){var t=e.password,n=e.setPassword;return r.a.createElement(Ae.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(St.a,{htmlFor:"password"},"Password"),r.a.createElement(ft.a,{name:"password",type:"password",id:"password",value:t,onChange:function(e){return n(e.target.value)},autoComplete:"current-password"}))},jt=function(e){var t=e.text,n=bt();return r.a.createElement(Te.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.marginTop},t)},yt=function(e){var t=e.question,n=e.button,a=e.onClick,o=bt();return r.a.createElement("div",{className:o.marginTop},r.a.createElement(Fe.a,{align:"center"},t," ",r.a.createElement(Te.a,{variant:"outlined",color:"primary",onClick:a},n)))};var _t=Object(M.f)(function(e){var t=e.history,n=e.match.path,o=Object(c.c)(function(e){return e.user}),i=Object(c.b)();o&&t.push("/");var l=bt(),u=Object(a.useState)(""),s=Object(Ee.a)(u,2),m=s[0],E=s[1],p=Object(a.useState)(""),d=Object(Ee.a)(p,2),g=d[0],f=d[1],S=Object(a.useState)(""),h=Object(Ee.a)(S,2),b=h[0],v=h[1],R="/register"!==n?vt:Rt,T=R.title,O=R.subtitle,C=R.button,j=R.isLogin,y=R.otherLink;return r.a.createElement(He,{className:l.background,style:{backgroundImage:"url(/images/"+(j?"login":"register")+"-background.jpg)"}},r.a.createElement("main",{className:l.main},r.a.createElement(gt.a,null),r.a.createElement(ht.a,{className:l.paper},r.a.createElement(Fe.a,{component:"h1",variant:"h3",align:"center"},T),r.a.createElement(Fe.a,{component:"h2",variant:"subtitle1"},O),r.a.createElement("form",{className:l.form,onSubmit:function(e){e.preventDefault(),i(j?Se.login(g,b):Se.register({name:m,email:g,password:b}))}},!j&&r.a.createElement(Tt,{name:m,setName:E}),r.a.createElement(Ot,{email:g,setEmail:f}),r.a.createElement(Ct,{password:b,setPassword:v}),!1,r.a.createElement(jt,{classes:l,text:C}),r.a.createElement(Je.a,{className:l.marginTop}),r.a.createElement(yt,Object.assign({classes:l},y,{onClick:function(){return t.push(y.link)}}))))))});n(918);var At=function(){return r.a.createElement(z.a,{history:g},r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/",exact:!0,component:Ke}),r.a.createElement(M.b,{path:"/login",component:_t}),r.a.createElement(M.b,{path:"/register",component:_t}),r.a.createElement(M.b,{path:"/project/new",component:dt}),r.a.createElement(M.b,{path:"/project/:id",component:ot}),r.a.createElement(M.b,{render:function(){return r.a.createElement(M.a,{to:"/"})}})))};i.a.render(r.a.createElement(a.Suspense,{fallback:"loading"},r.a.createElement(Q,null,r.a.createElement(c.a,{store:A},r.a.createElement(At,null)))),document.getElementById("root"))}},[[366,1,2]]]);
//# sourceMappingURL=main.fc673795.chunk.js.map