(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,n){e.exports=n(345)},168:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),i=n.n(o),c=n(19),l=n(52),u="Kor\xedkoko es el nombre de un **colectivo de creadores y artistas** en todos los \xe1mbitos que creemos en la expresi\xf3n art\xedstica como veh\xedculo fundamental de conocimiento y de crecimiento durante la infancia.\n\nM\xfasicos, artistas pl\xe1sticos, psic\xf3logos y escritores conformamos este equipo de trabajo que comparte la ilusi\xf3n por contribuir al desarrollo integral y feliz del individuo y que apuesta por la infancia como garant\xeda de futuro.",s="Korikoko nace con la ilusi\xf3n y el objetivo de intervenir en la infancia potenciando todas las cualidades propias de este periodo vital como el desarrollo cognitivo, la creatividad y la inteligencia emocional que intervienen en la salud, el crecimiento y la felicidad de los ni\xf1os.\n\nPara un nuevo proyecto en XXXX centro educativo necesitamos:\n*\tUn/a profesor/a de m\xfasica para una escuela en Boadilla.\n*\tUn/a psic\xf3loga infantil\n*\tUn/a musicoterapeuta\n",m=0;function E(e,t,n){return{name:e,organizer:t,areas:n,id:m++,participants:[],imgs:["https://placeimg.com/640/480/any/".concat(e),"https://placeimg.com/640/480/any/".concat(e,"-1"),"https://placeimg.com/640/480/any/".concat(e,"-2")],lookingFor:["Profe de m\xfasica","Psic\xf3loga/o infantil"],summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",description:u,needs:s,url:"http://p2pmodels.eu"}}var p=[E("Carrera 10k","Silvia",["sp\xf2rts","health"]),E("Hackathon Cryptoostrom","David",["commons","work"]),E("Cineforum","Jordi",["culture","cinema"]),E("Karaoke","Sem",["party"]),E("Cumple de Leo","Elena",["party"])],d=JSON.parse(localStorage.getItem("users"))||[],f=JSON.parse(localStorage.getItem("projects"))||p;var g=n(33),S=Object(g.a)(),h=n(48),v=n(137),b=n(138),T={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},R={REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE",DELETE_REQUEST:"USERS_DELETE_REQUEST",DELETE_SUCCESS:"USERS_DELETE_SUCCESS",DELETE_FAILURE:"USERS_DELETE_FAILURE"},O={ADD_REQUEST:"PROJECTS_ADD_REQUEST",ADD_SUCCESS:"PROJECTS_ADD_SUCCESS",ADD_FAILURE:"PROJECTS_ADD_FAILURE",GETALL_REQUEST:"PROJECTS_GETALL_REQUEST",GETALL_SUCCESS:"PROJECTS_GETALL_SUCCESS",GETALL_FAILURE:"PROJECTS_GETALL_FAILURE",REMOVE_REQUEST:"PROJECTS_REMOVE_REQUEST",REMOVE_SUCCESS:"PROJECTS_REMOVE_SUCCESS",REMOVE_FAILURE:"PROJECTS_REMOVE_FAILURE",ADD_PARTICIPANT_REQUEST:"PROJECTS_ADD_PARTICIPANTS_REQUEST",ADD_PARTICIPANT_SUCCESS:"PROJECTS_ADD_PARTICIPANTS_SUCCESS",ADD_PARTICIPANT_FAILURE:"PROJECTS_ADD_PARTICIPANTS_FAILURE",REMOVE_PARTICIPANT_REQUEST:"PROJECTS_REMOVE_PARTICIPANTS_REQUEST",REMOVE_PARTICIPANT_SUCCESS:"PROJECTS_REMOVE_PARTICIPANTS_SUCCESS",REMOVE_PARTICIPANT_FAILURE:"PROJECTS_REMOVE_PARTICIPANTS_FAILURE"},C=JSON.parse(localStorage.getItem("user")),j=C?{loggedIn:!0,user:C}:{};var A=n(75),y=n(13);function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.ADD_PARTICIPANT_REQUEST:return Object(y.a)({},e,{participants:[].concat(Object(l.a)(e.participants),[t.user.id])});case O.REMOVE_PARTICIPANT_REQUEST:return Object(y.a)({},e,{participants:e.participants.filter(function(e){return e!==t.user.id})});default:return e}}var L=Object(h.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.LOGIN_REQUEST:return{};case R.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case R.LOGIN_FAILURE:case R.LOGOUT:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case R.REGISTER_REQUEST:return{registering:!0};case R.REGISTER_SUCCESS:case R.REGISTER_FAILURE:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.GETALL_REQUEST:return{loading:!0};case R.GETALL_SUCCESS:return{items:t.users};case R.GETALL_FAILURE:return{error:t.error};case R.DELETE_REQUEST:return Object(y.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(y.a)({},e,{deleting:!0}):e})});case R.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case R.DELETE_FAILURE:return Object(y.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var n=Object(A.a)(e,["deleting"]);return Object(y.a)({},n,{deleteError:t.error})}return e})});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.GETALL_REQUEST:return{loading:!0};case O.GETALL_SUCCESS:return{items:t.projects};case O.GETALL_FAILURE:return{error:t.error};case O.ADD_PARTICIPANT_REQUEST:return Object(y.a)({},e,{items:e.items.map(function(e){return _(e,t)})});case O.ADD_PARTICIPANT_SUCCESS:return e;case O.ADD_PARTICIPANT_FAILURE:return{error:t.error};case O.REMOVE_PARTICIPANT_REQUEST:return Object(y.a)({},e,{items:e.items.map(function(e){return _(e,t)})});case O.REMOVE_PARTICIPANT_SUCCESS:return e;case O.REMOVE_PARTICIPANT_FAILURE:return{error:t.error};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.SUCCESS:return{type:"alert-success",message:t.message};case T.ERROR:return{type:"alert-danger",message:t.message};case T.CLEAR:return{};default:return e}}}),I=Object(b.createLogger)(),U=Object(h.d)(L,Object(h.a)(v.a,I));function P(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}n(168);var N=n(91),k=n(139),w=n(140),x=n.n(w),D=n(41);N.a.use(k.a).use(x.a).use(D.a).init({fallbackLng:"en",defaultNS:"App",load:"languageOnly",backend:{loadPath:"locale/{{lng}}/{{ns}}.json"},nsSeparator:!1,keySeparator:!1,interpolation:{escapeValue:!1}});N.a;var G=n(148),F=n(385),J={fontFamily:"Helvetica Neue",letterSpacing:"-0.84px"},Q=Object(G.a)({palette:{primary:{main:"#FF4B63"}},overrides:{MuiTypography:{h1:Object(y.a)({},J,{fontSize:"60px",letterSpacing:"-1.7px",fontWeight:"bold",marginTop:"35px"}),h2:Object(y.a)({},J,{fontSize:"40px",fontWeight:"bold",marginTop:"35px"}),h3:Object(y.a)({},J,{fontSize:"30px",fontWeight:"bold",marginTop:"35px"}),h4:Object(y.a)({},J,{fontSize:"20px",marginTop:"35px"}),subtitle1:Object(y.a)({},J,{fontSize:"20px",color:"#A7A2A6"})},MuiButton:{root:Object(y.a)({},J,{fontWeight:"bold",textTransform:"none",borderRadius:"24px"}),outlinedPrimary:{borderWidth:"2px !important"},sizeLarge:{fontSize:"1.3rem"}},MuiGridListTileBar:{root:{alignItems:"flex-end",background:"rgba(0,0,0,0.4)"},rootSubtitle:{height:"100%"},titleWrap:{marginBottom:"22px"},title:Object(y.a)({},J,{fontSize:"40px",lineHeight:"45px",fontWeight:"bold"}),subtitle:{color:"#FF4B63"}}},typography:{useNextVariants:!0}});var z=n(49),M=n(348),W=n(389),B=n(387),V=n(388),q=Object(M.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"15px",marginLeft:"-7.5px"},gridList:{height:"100%",width:"100%"}}}),H=function(e){var t=e.history,n=Object(A.a)(e,["history"]);return a.a.createElement(B.a,Object.assign({},n,{onClick:function(){return t.push("/project/new")}}),a.a.createElement("img",{src:"https://placeimg.com/640/480/any/new",alt:"x"}),a.a.createElement(V.a,{title:"New",subtitle:a.a.createElement("span",null)}))};var X=Object(z.f)(function(e){var t=e.projects,n=e.showNewProjectTile,r=e.history,o=q();return a.a.createElement("div",{className:o.root},a.a.createElement(W.a,{cellHeight:360,spacing:15,className:o.gridList,cols:3},t.map(function(e){var t=e.id,n=e.name,o=e.areas,i=void 0===o?[]:o;return a.a.createElement(B.a,{key:t,onClick:function(){return r.push("/project/".concat(t))}},a.a.createElement("img",{src:"https://placeimg.com/640/480/any/"+n,alt:n}),a.a.createElement(V.a,{title:n,subtitle:a.a.createElement("span",null,i.join(", "))}))}),n&&a.a.createElement(H,{history:r})))}),K={success:function(e){return{type:T.SUCCESS,message:e}},error:function(e){return{type:T.ERROR,message:e}},clear:function(){return{type:T.CLEAR}}};var $={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({usernameOrEmail:e,password:t})};return fetch("".concat(Y,"/login"),n).then(ee).then(function(e){return localStorage.setItem("user",JSON.stringify(e)),e})},logout:Z,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(Y,"/users/register"),t).then(ee)},getAll:function(){var e={method:"GET",headers:P()};return fetch("".concat(Y,"/users"),e).then(ee)},getById:function(e){var t={method:"GET",headers:P()};return fetch("".concat(Y,"/users/").concat(e),t).then(ee)},update:function(e){var t={method:"PUT",headers:Object(y.a)({},P(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(Y,"/users/").concat(e.id),t).then(ee)},delete:function(e){var t={method:"DELETE",headers:P()};return fetch("".concat(Y,"/users/").concat(e),t).then(ee)}},Y="http://localhost:8080/";function Z(){localStorage.removeItem("user")}function ee(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&(Z(),window.location.reload(!0));var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})}var te={add:function(e){var t={method:"POST",headers:Object(y.a)({},P(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(ne,"/projects"),t).then(re)},getAll:function(){return fetch("".concat(ne,"/projects"),{method:"GET"}).then(re)},getById:function(e){return fetch("".concat(ne,"/projects/").concat(e),{method:"GET"}).then(re)},update:function(e){var t={method:"PUT",headers:Object(y.a)({},P(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(ne,"/projects/").concat(e.id),t).then(re)},delete:function(e){var t={method:"DELETE",headers:P()};return fetch("".concat(ne,"/projects/").concat(e),t).then(re)},addParticipant:function(e,t){var n={method:"PUT",headers:Object(y.a)({},P(),{"Content-Type":"application/json"}),body:JSON.stringify({newParticipant:t.id})};return fetch("".concat(ne,"/projects/").concat(e.id),n).then(re)},removeParticipant:function(e,t){var n={method:"PUT",headers:Object(y.a)({},P(),{"Content-Type":"application/json"}),body:JSON.stringify({removeParticipant:t.id})};return fetch("".concat(ne,"/projects/").concat(e.id),n).then(re)}},ne="http://localhost:8080/";function re(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&window.location.reload(!0);var r=n&&n.message||e.statusText;return Promise.reject(r)}return n})}var ae={login:function(e,t){return function(n){var r;n({type:R.LOGIN_REQUEST,user:r}),$.login(e,t).then(function(e){console.log(e),n(function(e){return{type:R.LOGIN_SUCCESS,user:e}}(e)),S.push("/")},function(e){n(function(e){return{type:R.LOGIN_FAILURE,error:e}}(e.toString())),n(K.error(e.toString()))})}},logout:function(){return $.logout(),{type:R.LOGOUT}},register:function(e){return function(t){t(function(e){return{type:R.REGISTER_REQUEST,user:e}}(e)),$.register(e).then(function(e){t(function(e){return{type:R.REGISTER_SUCCESS,user:e}}()),S.push("/login"),t(K.success("Registration successful"))},function(e){t(function(e){return{type:R.REGISTER_FAILURE,error:e}}(e.toString())),t(K.error(e.toString()))})}},getAll:function(){return function(e){e({type:R.GETALL_REQUEST}),$.getAll().then(function(t){return e(function(e){return{type:R.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:R.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:R.DELETE_REQUEST,id:e}}(e)),$.delete(e).then(function(n){return t(function(e){return{type:R.DELETE_SUCCESS,id:e}}(e))},function(n){return t(function(e,t){return{type:R.DELETE_FAILURE,id:e,error:t}}(e,n.toString()))})}}};var oe={add:function(e){return function(t){t(function(e){return{type:O.ADD_REQUEST,project:e}}(e)),te.add(e).then(function(e){t(function(e){return{type:O.ADD_SUCCESS,project:e}}()),t(K.success("Registration successful"))},function(e){t(function(e){return{type:O.ADD_FAILURE,error:e}}(e.toString())),t(K.error(e.toString()))})}},getAll:function(){return function(e){e({type:O.GETALL_REQUEST}),te.getAll().then(function(t){return e(function(e){return{type:O.GETALL_SUCCESS,projects:e}}(t))},function(t){return e(function(e){return{type:O.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:O.DELETE_REQUEST,id:e}}(e)),te.delete(e).then(function(n){return t(function(e){return{type:O.DELETE_SUCCESS,id:e}}(e))},function(n){return t(function(e,t){return{type:O.DELETE_FAILURE,id:e,error:t}}(e,n.toString()))})}},addParticipant:function(e,t){return function(n){n(function(e,t){return{type:O.ADD_PARTICIPANT_REQUEST,project:e,user:t}}(e,t)),te.addParticipant(e,t).then(function(r){n(function(e,t){return{type:O.ADD_PARTICIPANT_SUCCESS,project:e,user:t}}(e,t)),n(K.success("Registration successful"))},function(e){n(function(e){return{type:O.ADD_PARTICIPANT_FAILURE,error:e}}(e.toString())),n(K.error(e.toString()))})}},removeParticipant:function(e,t){return function(n){n(function(e,t){return{type:O.REMOVE_PARTICIPANT_REQUEST,project:e,user:t}}(e,t)),te.removeParticipant(e,t).then(function(r){n(function(e,t){return{type:O.REMOVE_PARTICIPANT_SUCCESS,project:e,user:t}}(e,t)),n(K.success("Registration successful"))},function(e){n(function(e){return{type:O.REMOVE_PARTICIPANT_FAILURE,error:e}}(e.toString())),n(K.error(e.toString()))})}}};var ie=n(59),ce=n(30),le=n(394),ue=n(395),se=n(397),me=n(398),Ee=n(396),pe=n(147),de=n(407),fe=n(89),ge=n(390),Se=n(404),he=Object(M.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"row-reverse"},formControl:{margin:e.spacing.unit,minWidth:120,backgroundColor:Object(fe.fade)(e.palette.common.white,.55),"&:hover":{backgroundColor:Object(fe.fade)(e.palette.common.white,.75)}}}});var ve=function(){var e=Object(D.b)().i18n,t=Object(r.useState)(e.languages[0]),n=Object(ce.a)(t,2),o=n[0],i=n[1],c=he();return Object(r.useEffect)(function(){e.changeLanguage(o)},[o]),a.a.createElement("form",{className:c.root,autoComplete:"off"},a.a.createElement(ge.a,{className:c.formControl},a.a.createElement(Se.a,{inputProps:{name:"lang",id:"lang"},value:o,onChange:function(e){return i(e.target.value)}},a.a.createElement(de.a,{value:"en"},"English"),a.a.createElement(de.a,{value:"es"},"Espa\xf1ol"))))},be=n(58),Te=n(393),Re=Object(M.a)({avatar:{margin:10,color:"#fff"}});var Oe=["#d73d32","#7e3794","#4285f4","#67ae3f","#d61a7f","#ff4080"];function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Oe;return t[function(e,t){for(var n=Object(l.a)(e).map(function(e){return e.charCodeAt(0)}),r=n.length,a=r%(t-1)+1,o=n.reduce(function(e,t){return e+t})%t,i=n[0]%t,c=0;c<r;c++)i=(a*i+o)%t;return i}(e,t.length)]}var je=function(e){var t=e.user,n=Re();return a.a.createElement(Te.a,{alt:t.name,style:{backgroundColor:Ce(t.name)},className:n.avatar},t.name.split(/\s/).map(function(e){return e.substring(0,1).toUpperCase()}).filter(function(e){return!!e}).slice(0,2).join(""))},Ae=Object(M.a)({root:{flexGrow:1},flex:{display:"flex",alignItems:"center"},grow:{flexGrow:1,alignSelf:"flex-start"},avatar:{margin:10},menuButton:{marginLeft:-12,marginRight:20}});var ye=Object(z.f)(function(e){e.children;var t=e.history,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.b)(),i=Object(r.useState)(null),l=Object(ce.a)(i,2),u=l[0],s=l[1],m=Ae(),E=Boolean(u);return a.a.createElement("div",{className:m.root},a.a.createElement(le.a,{position:"static",color:"default"},a.a.createElement(ue.a,null,a.a.createElement(Ee.a,{className:m.flex},a.a.createElement("div",{className:m.grow},a.a.createElement(be.a,{to:"/"},a.a.createElement("img",{style:{position:"absolute",zIndex:1},src:"/images/logo.png",alt:"Logo"}))),a.a.createElement("div",{className:m.flex},a.a.createElement(ve,null),n?a.a.createElement("div",null,a.a.createElement(me.a,{"aria-owns":E?"menu-appbar":void 0,"aria-haspopup":"true",onClick:function(e){return s(e.currentTarget)},color:"inherit"},a.a.createElement(je,{user:n})),a.a.createElement(pe.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:E,onClose:function(){return s(null)}},a.a.createElement(de.a,{onClick:function(){return s(null)}},"Profile"),a.a.createElement(de.a,{onClick:function(){s(null),o(ae.logout())}},"Logout"))):a.a.createElement(se.a,{variant:"contained",color:"primary",onClick:function(){return t.push("/login")}},"Log in"))))))}),_e=n(149),Le=n(399),Ie=n(346),Ue=Object(M.a)(function(e){return{root:{color:"white",background:"transparent no-repeat center center",backgroundSize:"cover"},wrapper:Object(ie.a)({minHeight:"340px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingLeft:"10%",paddingRight:"10%"},e.breakpoints.up(1800),{paddingLeft:"25%",paddingRight:"25%"}),divider:{background:"white",margin:"20px",height:"3px",width:"150px"},subtitle:{fontWeight:200},footer:{position:"relative",minHeight:48,marginTop:"30px",color:"white",background:"#3A3A3A"},spacer:{width:78},img:{position:"absolute",bottom:0,zIndex:1,width:68}}}),Pe=function(e){var t=e.classes;return a.a.createElement(ue.a,{className:t.footer},a.a.createElement("a",{href:"http://smart-ib.coop/",className:t.spacer},a.a.createElement("img",{className:t.img,src:"/images/logo.png",alt:"Logo"})),a.a.createElement(_e.a,{color:"inherit"},"Smart Coop in Europe:  Deutschland   France   Iberica   Italia   Magyarorsz\xe1g   Nederland   \xd6sterreich   Sverige"))};var Ne=function(e){var t=e.title,n=e.subtitle,r=e.background,o=e.overlay,i=void 0===o||o,c=e.children,l=i&&"rgba(0,0,0,0.5)";r='#1E4B4D url("'+r+'")';var u=Ue();return a.a.createElement("div",null,a.a.createElement(ye,null),a.a.createElement(Ie.a,{theme:function(e){return Object(y.a)({},e,{palette:Object(y.a)({},e.palette,{type:"dark"}),overrides:Object(y.a)({},e.overrides,{MuiOutlinedInput:{input:{color:"white"}}})})}},a.a.createElement("header",{className:u.root,style:{background:r}},a.a.createElement("div",{className:u.wrapper,style:{backgroundColor:l}},a.a.createElement(_e.a,{color:"inherit",variant:"h1",align:"center"},t),a.a.createElement(Le.a,{variant:"middle",light:!0,className:u.divider}),a.a.createElement(_e.a,{color:"inherit",variant:"h3",align:"center",className:u.subtitle},n)))),c,a.a.createElement(Pe,{classes:u}))};var ke=function(){var e=Object(c.c)(function(e){return e.authentication.user}),t=Object(c.c)(function(e){return e.projects.items})||[],n=Object(c.b)(),o=Object(D.b)("App").t,i=function(t){return e&&(t.organizer===e.id||t.participants.includes(e.id))},l=t.filter(i),u=t.filter(function(e){return!i(e)}),s=o("Join the SmartIb Community of Creative Workers on Blockchain"),m=o("Support projects, find opportunities");Object(r.useEffect)(function(){n(oe.getAll())},[]);var E=e?"header-2":"header-1";return a.a.createElement(Ne,{title:s,subtitle:m,background:"/images/".concat(E,".jpg"),overlay:!1},a.a.createElement(Ee.a,null,e&&a.a.createElement("div",null,a.a.createElement(_e.a,{variant:"h3"},o("Your Projects")),a.a.createElement(X,{projects:l,showNewProjectTile:!0})),e&&a.a.createElement(_e.a,{variant:"h3"},o("New Projects")),a.a.createElement(X,{projects:u})))},we=n(400),xe=n(401),De=n(145),Ge=n.n(De),Fe=n(146),Je=n.n(Fe);function Qe(e){var t=e.title;return a.a.createElement("li",null,t)}var ze=Object(M.a)(function(e){return{root:{"& img":{display:"block",width:"100%"}},callToAction:{minHeight:"200px"},center:{display:"flex",justifyContent:"center",alignItems:"center"}}});var Me=function(e){var t=e.match.params.id,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.c)(function(e){return e.projects.items}),i=Object(c.b)(),l=Object(D.b)("ProjectPage").t,u=ze(),s=o?o[t]:{},m=s.name,E=s.summary,p=s.url,d=s.description,f=s.needs,g=s.imgs,S=void 0===g?[]:g,h=s.lookingFor,v=void 0===h?[]:h,b=s.participants,T=void 0===b?[]:b;Object(r.useEffect)(function(){i(oe.getAll())},[]);var R=Ge()().use(Je.a).processSync,O=R(d).contents,C=R(f).contents;return a.a.createElement(Ne,{title:m,subtitle:E,background:S[0]},a.a.createElement(Ee.a,null,a.a.createElement(_e.a,{variant:"h2"},m),a.a.createElement(we.a,{className:u.root,container:!0,spacing:2},a.a.createElement(we.a,{item:!0,xs:!0},a.a.createElement(xe.a,{rel:"noopener",target:"_blank",href:p,variant:"subtitle1",gutterBottom:!0},p),a.a.createElement(_e.a,{variant:"h3",gutterBottom:!0},l("About us")),a.a.createElement(_e.a,{variant:"body1"},O),a.a.createElement(_e.a,{variant:"h3",gutterBottom:!0},l("Our needs")),a.a.createElement(_e.a,{variant:"body1"},C)),a.a.createElement(we.a,{item:!0,sm:5,md:4,container:!0,direction:"column",spacing:2},a.a.createElement(we.a,{item:!0},a.a.createElement("img",{src:S[1],alt:l("Project image")})),a.a.createElement(we.a,{item:!0},a.a.createElement("img",{src:S[2],alt:l("Project image")}))))),a.a.createElement("div",{className:u.callToAction},a.a.createElement(Ee.a,null,a.a.createElement(we.a,{container:!0,spacing:2},a.a.createElement(we.a,{item:!0,xs:!0},a.a.createElement(_e.a,{variant:"h2",color:"primary"},l("Ponte en contacto con nosotras si eres")),a.a.createElement("ul",null,v.map(function(e){return a.a.createElement(Qe,{key:e,title:e})}))),a.a.createElement(we.a,{item:!0,sm:6,className:u.center},n?T.includes(n.id)?a.a.createElement(se.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return i(oe.removeParticipant(s,n))}},l("Leave")):a.a.createElement(se.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return i(oe.addParticipant(s,n))}},l("Join")):null)))))},We=n(406),Be=n(90),Ve=Object(M.a)({largerInputRoot:{fontSize:"1.8rem"},largerLabelRoot:{fontSize:"1.8rem"},smallerInputRoot:{fontSize:"0.7rem"},smallerLabelRoot:{fontSize:"0.7rem"}}),qe=function(e){var t=Object(Be.a)({},e),n=Ve();return a.a.createElement(We.a,Object.assign({},t,{InputProps:{classes:{root:n.largerInputRoot}},InputLabelProps:{FormLabelClasses:{root:n.largerLabelRoot}}}))},He=function(e){var t=Object(Be.a)({},e),n=Ve();return a.a.createElement(We.a,Object.assign({},t,{InputProps:{classes:{root:n.smallerInputRoot}},InputLabelProps:{FormLabelClasses:{root:n.smallerLabelRoot}}}))};var Xe=Object(z.f)(function(e){var t=e.history,n=Object(c.c)(function(e){return e.authentication.user}),o=Object(c.b)(),i=Object(D.b)("ProjectFormPage").t;n||t.push("/");var l=function(e){e.preventDefault(),o(oe.add({name:m,organizer:n.id,summary:f,url:v,description:O,needs:y})),t.push("/")},u=Object(r.useState)(""),s=Object(ce.a)(u,2),m=s[0],E=s[1],p=Object(r.useState)(""),d=Object(ce.a)(p,2),f=d[0],g=d[1],S=Object(r.useState)(""),h=Object(ce.a)(S,2),v=h[0],b=h[1],T=Object(r.useState)(""),R=Object(ce.a)(T,2),O=R[0],C=R[1],j=Object(r.useState)(""),A=Object(ce.a)(j,2),y=A[0],_=A[1];return a.a.createElement("form",{onSubmit:l},a.a.createElement(Ne,{title:a.a.createElement(qe,{inputProps:!0,variant:"outlined",name:"name",value:m,onChange:function(e){return E(e.target.value)},placeholder:"Project Name"}),subtitle:a.a.createElement(We.a,{variant:"outlined",name:"summary",value:f,onChange:function(e){return g(e.target.value)},placeholder:"What is your project about?"})},a.a.createElement(Ee.a,null,a.a.createElement(_e.a,{variant:"h2"},m||"Project Name"),a.a.createElement(we.a,{container:!0,spacing:2},a.a.createElement(we.a,{item:!0,xs:!0},a.a.createElement(He,{variant:"outlined",name:"url",value:v,onChange:function(e){return b(e.target.value)},placeholder:"URL"}),a.a.createElement(_e.a,{variant:"h4",gutterBottom:!0},i("Brief project description")),a.a.createElement(We.a,{fullWidth:!0,variant:"outlined",onChange:function(e){return C(e.target.value)},value:O,multiline:!0,rows:"4",placeholder:i("Add a description")}),a.a.createElement(_e.a,{variant:"h4",gutterBottom:!0},i("What do you need?")),a.a.createElement(We.a,{fullWidth:!0,variant:"outlined",onChange:function(e){return _(e.target.value)},value:y,multiline:!0,rows:"4",placeholder:i("Add a description")})),a.a.createElement(we.a,{item:!0,sm:5,md:4,container:!0,direction:"column",spacing:2},a.a.createElement(we.a,{item:!0},a.a.createElement("img",{src:"",alt:i("Project image")})),a.a.createElement(we.a,{item:!0},a.a.createElement("img",{src:"",alt:i("Project image")})))),a.a.createElement("h2",null,i("What kind of profiles are you looking for")),a.a.createElement(_e.a,{align:"center",paragraph:!0},a.a.createElement(se.a,{color:"primary",variant:"contained",size:"large",align:"center",onClick:l},i("Done!"))),a.a.createElement(_e.a,{variant:"body2",align:"center"},a.a.createElement("span",{role:"img","aria-labelledby":"good-luck"},"\ud83e\udd1e"),a.a.createElement("span",{id:"good-luck"},"Crossing fingers")))))}),Ke=n(403),$e=(n(402),n(405),n(391)),Ye=n(408),Ze=n(349),et=Object(M.a)(function(e){return{background:{background:"#FF4B63 no-repeat center center fixed",backgroundSize:"cover",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center"},main:Object(ie.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(6*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},marginTop:{marginTop:3*e.spacing.unit}}}),tt={isLogin:!0,title:"Sign in to Smart Projects",subtitle:"Enter your details below",button:"Sign in",otherLink:{question:"Don't you have an account?",button:"Get started",link:"/register"}},nt={isLogin:!1,title:"Get started",subtitle:"Enjoy the Smart Community",button:"Start",otherLink:{question:"Already you have an account?",button:"Sign in",link:"/login"}},rt=function(e){var t=e.name,n=e.setName;return a.a.createElement(ge.a,{margin:"normal",required:!0,fullWidth:!0},a.a.createElement(Ye.a,{htmlFor:"email"},"Name"),a.a.createElement($e.a,{id:"name",name:"name",value:t,onChange:function(e){return n(e.target.value)}}))},at=function(e){var t=e.email,n=e.setEmail;return a.a.createElement(ge.a,{margin:"normal",required:!0,fullWidth:!0},a.a.createElement(Ye.a,{htmlFor:"email"},"Email Address"),a.a.createElement($e.a,{id:"email",name:"email",autoComplete:"email",value:t,onChange:function(e){return n(e.target.value)}}))},ot=function(e){var t=e.password,n=e.setPassword;return a.a.createElement(ge.a,{margin:"normal",required:!0,fullWidth:!0},a.a.createElement(Ye.a,{htmlFor:"password"},"Password"),a.a.createElement($e.a,{name:"password",type:"password",id:"password",value:t,onChange:function(e){return n(e.target.value)},autoComplete:"current-password"}))},it=function(e){var t=e.text,n=et();return a.a.createElement(se.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.marginTop},t)},ct=function(e){var t=e.question,n=e.button,r=e.onClick,o=et();return a.a.createElement("div",{className:o.marginTop},a.a.createElement(_e.a,{align:"center"},t," ",a.a.createElement(se.a,{variant:"outlined",color:"primary",onClick:r},n)))};var lt=Object(z.f)(function(e){var t=e.history,n=e.match.path,o=Object(c.c)(function(e){return e.user}),i=Object(c.b)();o&&t.push("/");var l=et(),u=Object(r.useState)(""),s=Object(ce.a)(u,2),m=s[0],E=s[1],p=Object(r.useState)(""),d=Object(ce.a)(p,2),f=d[0],g=d[1],S=Object(r.useState)(""),h=Object(ce.a)(S,2),v=h[0],b=h[1],T="/register"!==n?tt:nt,R=T.title,O=T.subtitle,C=T.button,j=T.isLogin,A=T.otherLink;return a.a.createElement("div",{className:l.background,style:{backgroundImage:"url(/images/"+(j?"login":"register")+"-background.jpg)"}},a.a.createElement("main",{className:l.main},a.a.createElement(Ke.a,null),a.a.createElement(Ze.a,{className:l.paper},a.a.createElement(_e.a,{component:"h1",variant:"h3",align:"center"},R),a.a.createElement(_e.a,{component:"h2",variant:"subtitle1"},O),a.a.createElement("form",{className:l.form,onSubmit:function(e){e.preventDefault(),i(j?ae.login(f,v):ae.register({name:m,email:f,password:v}))}},!j&&a.a.createElement(rt,{name:m,setName:E}),a.a.createElement(at,{email:f,setEmail:g}),a.a.createElement(ot,{password:v,setPassword:b}),!1,a.a.createElement(it,{classes:l,text:C}),a.a.createElement(Le.a,{className:l.marginTop}),a.a.createElement(ct,Object.assign({classes:l},A,{onClick:function(){return t.push(A.link)}}))))))});n(344);var ut=function(){return a.a.createElement(z.c,{history:S},a.a.createElement(z.d,null,a.a.createElement(z.b,{path:"/",exact:!0,component:ke}),a.a.createElement(z.b,{path:"/login",component:lt}),a.a.createElement(z.b,{path:"/register",component:lt}),a.a.createElement(z.b,{path:"/project/new",component:Xe}),a.a.createElement(z.b,{path:"/project/:id",component:Me}),a.a.createElement(z.b,{render:function(){return a.a.createElement(z.a,{to:"/"})}})))};!function(){var e=window.fetch;window.fetch=function(t,n){return new Promise(function(r,a){setTimeout(function(){if(t.endsWith("/login")&&"POST"===n.method){var o=JSON.parse(n.body),i=d.filter(function(e){return(e.username===o.usernameOrEmail||e.email===o.usernameOrEmail)&&e.password===o.password});if(i.length){var c=i[0],u={id:c.id,email:c.email,name:c.name,token:"fake-jwt-token"};r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(u))}})}else a(Error("Username or password is incorrect"))}else if(t.endsWith("/users")&&"GET"===n.method)n.headers&&"Bearer fake-jwt-token"===n.headers.Authorization?r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(d))}}):a(Error("Unauthorised"));else if(t.match(/\/users\/\d+$/)&&"GET"===n.method)if(n.headers&&"Bearer fake-jwt-token"===n.headers.Authorization){var s=t.split("/"),m=parseInt(s[s.length-1]),E=d.filter(function(e){return e.id===m}),p=E.length?E[0]:null;r({ok:!0,text:function(){return JSON.stringify(p)}})}else a(Error("Unauthorised"));else{if(t.endsWith("/users/register")&&"POST"===n.method){var g=JSON.parse(n.body);return d.filter(function(e){return e.email===g.email}).length?void a(Error('Username "'+g.email+'" is already taken')):(g.id=d.length?Math.max.apply(Math,Object(l.a)(d.map(function(e){return e.id})))+1:1,d.push(g),localStorage.setItem("users",JSON.stringify(d)),void r({ok:!0,text:function(){return Promise.resolve()}}))}if(t.match(/\/users\/\d+$/)&&"DELETE"===n.method)if(n.headers&&"Bearer fake-jwt-token"===n.headers.Authorization){for(var S=t.split("/"),h=parseInt(S[S.length-1]),v=0;v<d.length;v++)if(d[v].id===h){d.splice(v,1),localStorage.setItem("users",JSON.stringify(d));break}r({ok:!0,text:function(){return Promise.resolve()}})}else a(Error("Unauthorised"));else if(t.endsWith("/projects")&&"GET"===n.method)r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(f))}});else{if(t.endsWith("/projects")&&"POST"===n.method){var b=JSON.parse(n.body);return b.id=d.length?Math.max.apply(Math,Object(l.a)(f.map(function(e){return e.id})))+1:1,f.push(b),localStorage.setItem("users",JSON.stringify(f)),void r({ok:!0,text:function(){return Promise.resolve()}})}t.match(/\/projects\/\d+$/)&&"PUT"===n.method?n.headers&&"Bearer fake-jwt-token"===n.headers.Authorization?function(){for(var e=JSON.parse(n.body),a=t.split("/"),o=parseInt(a[a.length-1]),i=0;i<f.length;i++)if(f[i].id===o){f[i].participants.push(e.newParticipant),f[i].participants=f[i].participants.filter(function(t){return t!==e.removeParticipant}),localStorage.setItem("projects",JSON.stringify(f));break}r({ok:!0,text:function(){return Promise.resolve()}})}():a(Error("Unauthorised")):e(t,n).then(function(e){return r(e)})}}},500)})}}(),i.a.render(a.a.createElement(r.Suspense,{fallback:"loading"},a.a.createElement(function(e){var t=e.children;return a.a.createElement(F.a,{theme:Q},t)},null,a.a.createElement(c.a,{store:U},a.a.createElement(ut,null)))),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.c3ab895e.chunk.js.map