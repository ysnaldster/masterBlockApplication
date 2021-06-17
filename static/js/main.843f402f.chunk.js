(this["webpackJsonpblock-master"]=this["webpackJsonpblock-master"]||[]).push([[0],{232:function(e,t,n){"use strict";n.r(t);var a=n(63),c={login:"Login",logout:"Logout",uiSetError:"Set Error,",uiRemoveError:"Remove Error",uiStartLoading:"UI start loading",uiFinishLoading:"UI finish loading"},r=n(18),o={loading:!1,msjError:null},i=n(120),s=Object(a.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.login:return{uid:t.payload.uid,name:t.payload.displayName,email:t.payload.email,image:t.payload.image};case c.logout:return{};default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.uiSetError:return Object(r.a)(Object(r.a)({},e),{},{msjError:t.payload});case c.uiRemoveError:return Object(r.a)(Object(r.a)({},e),{},{msjError:null});case c.uiStartLoading:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case c.uiFinishLoading:return Object(r.a)(Object(r.a)({},e),{},{loading:!1});default:return e}}}),l="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.c,j=Object(a.d)(s,l(Object(a.a)(i.a))),u=n(28),b=n(3),d=n(65),p=n.n(d),h=n(25),x=n.n(h),O=n(41),g=n(8),f=n(252),m=n(80),v=n(54);n(148),n(149);v.a.initializeApp({apiKey:"AIzaSyDc19Qda8T3qdq7nRSSSep04QQ6POK7JXQ",authDomain:"block-master-7f1c3.firebaseapp.com",projectId:"block-master-7f1c3",storageBucket:"block-master-7f1c3.appspot.com",messagingSenderId:"67844887054",appId:"1:67844887054:web:ae5bca9d39e0f192b2a25f"});v.a.firestore();var y,w,E,k,S,A,C,L,D,z,I,N,R,P,U,F,W,T,_=new v.a.auth.GoogleAuthProvider,M=new v.a.auth.FacebookAuthProvider,B=function(e){return{type:c.uiSetError,payload:e}},H=function(){return{type:c.uiFinishLoading}},Q=function(e,t){return function(n){v.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(J(t.uid,t.displayName,t.email,t.photoURL)),n(H()),n({type:c.uiStarLoading})})).catch((function(e){n(H()),console.log(e)}))}},J=function(e,t,n,a){return{type:c.login,payload:{uid:e,displayName:t,email:n,image:a}}},X=function(){return{type:c.logout}},q=n(32),G=n(19),K=n(20),V=n(246),Y=n(255),Z=n(247),$=n(253),ee=n(254),te=n(76),ne=n(75),ae=n(11),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(b.useState)(e),n=Object(g.a)(t,2),a=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(r.a)(Object(r.a)({},a),{},Object(ae.a)({},t.name,t.value)))};return[a,i,o]},re=n(21),oe=n(126),ie=n(51),se=n(5),le=re.a.div(y||(y=Object(K.a)(['\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-image: url("https://i.ibb.co/D91DzpB/dolby.jpg");\n    background-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n']))),je=re.a.form(w||(w=Object(K.a)(["\n    padding: 70px 20px 20px 20px;\n"]))),ue=re.a.img(E||(E=Object(K.a)(["\n    position: absolute;\n    margin-bottom: 460px;\n"]))),be=re.a.div(k||(k=Object(K.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: #282623;\n    color: black !important;\n    border-radius: 15px;\n    border: none;\n"]))),de=re.a.p(S||(S=Object(K.a)(["\n    text-align: center;\n    padding: 20px 0px;\n    font-size: 20px;\n    font-weight: bold;\n    color: white;\n"]))),pe=re.a.div(A||(A=Object(K.a)(["\n    text-align: center;\n    width: 100%;\n    background: #0e3fa9;\n    color: white;\n    margin-top: 20px;\n    padding: 7px;\n    border-radius: 10px;\n"]))),he=Object(re.a)(V.a)(C||(C=Object(K.a)(["\n    width: 85% !important;\n    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;\n    font-weight: bold;\n    font-size: 15px;\n"]))),xe=(re.a.button(L||(L=Object(K.a)(["\n &&hover {\n    background-color: #eea10f;\n }\n"]))),function(){var e=Object(u.b)(),t=ce({email:"",password:""}),n=Object(g.a)(t,2),a=n[0],c=n[1],r=a.email,o=a.password,i=(Object(u.c)((function(e){return e.ui})),Object(b.useState)(!1)),s=Object(g.a)(i,2),l=s[0],j=s[1];return Object(se.jsx)(le,{children:Object(se.jsxs)(be,{children:[Object(se.jsx)(ue,{src:"https://i.ibb.co/2jHtsTf/logo-block-master.png",width:"200px"}),Object(se.jsxs)(je,{onSubmit:function(t){t.preventDefault(),e(Q(r,o))},children:[Object(se.jsx)(de,{children:"Iniciar Sesi\xf3n"}),Object(se.jsxs)(Y.a,{spacing:4,children:[Object(se.jsxs)(V.a,{style:{color:"white"},children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(ne.a,{color:"gray.300"})}),Object(se.jsx)($.a,{type:"email",placeholder:"Correo Electr\xf3nico",name:"email",value:r,onChange:c})]}),Object(se.jsxs)(V.a,{children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(te.a,{color:"gray.300"}),style:{color:"white"}}),Object(se.jsx)($.a,{type:l?"text":"password",name:"password",value:o,placeholder:"Contrase\xf1a",onChange:c,style:{color:"white"}}),Object(se.jsx)(Z.b,{width:"5.0rem",children:Object(se.jsx)(ee.a,{h:"1.75rem",size:"sm",onClick:function(){return j(!l)},children:l?"Ocultar":"Mostrar"})})]})]}),Object(se.jsx)(pe,{children:Object(se.jsx)("button",{children:"Enviar"})})]}),Object(se.jsxs)(he,{style:{width:"80%"},onClick:function(){e((function(e){v.a.auth().signInWithPopup(_).then(function(){var t=Object(O.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.user,e(J(a.uid,a.displayName,a.email,a.photoURL));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}))},children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(oe.a,{color:"gray.300"}),style:{marginLeft:"8px"}}),Object(se.jsx)($.a,{name:"email",value:"Continuar con Google",pointerEvents:"none",style:{textAlign:"center",fontWeight:"bold",color:"white"}})]}),Object(se.jsxs)(he,{style:{width:"80%",margin:"10px"},onClick:function(){e((function(e){v.a.auth().signInWithPopup(M).then(function(){var t=Object(O.a)(x.a.mark((function t(n){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.user,console.log(a),e(J(a.uid,a.displayName,a.email,a.photoURL));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}))},children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(ie.a,{color:"gray.300"}),style:{marginLeft:"8px",color:"white"}}),Object(se.jsx)($.a,{name:"email",value:"Continuar con Facebook",pointerEvents:"none",style:{textAlign:"center",fontWeight:"bold",color:"white"}})]}),Object(se.jsx)(q.b,{to:"/auth/registro",style:{textDecoration:"none",color:"white"},children:Object(se.jsx)("div",{style:{margin:"15px",fontWeight:"bold"},children:"No tengo una cuenta"})})]})})}),Oe=n(127),ge=n.n(Oe),fe=n(256),me=re.a.div(D||(D=Object(K.a)(['\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-image: url("https://i.ibb.co/D91DzpB/dolby.jpg");\n    background-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n']))),ve=re.a.form(z||(z=Object(K.a)(["\n    padding: 70px 20px 20px 20px;\n"]))),ye=re.a.img(I||(I=Object(K.a)(["\n    position: absolute;\n    margin-bottom: 460px;\n"]))),we=re.a.div(N||(N=Object(K.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: #282623;\n    color: white;\n    border-radius: 15px;\n    border: none;\n"]))),Ee=re.a.p(R||(R=Object(K.a)(["\n    text-align: center;\n    padding: 20px 0px;\n    font-size: 20px;\n    font-weight: bold;\n"]))),ke=re.a.div(P||(P=Object(K.a)(["\n    text-align: center;\n    width: 100%;\n    background: #0e3fa9;\n    color: white;\n    margin-top: 20px;\n    padding: 7px;\n    border-radius: 10px;\n"]))),Se=(Object(re.a)(V.a)(U||(U=Object(K.a)(["\n    width: 85% !important;\n    box-shadow: 0px 4px 8px rgb(89 73 30 / 16%) !important;\n    font-weight: bold;\n    font-size: 15px;\n"]))),function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.error})).msjError,n=ce({name:"",email:"",password:""}),a=Object(g.a)(n,2),r=a[0],o=a[1],i=r.name,s=r.email,l=r.password,j=function(){return 0===i.trim().length?(e(B("")),!1):ge.a.isEmail(s)?0===l.trim().length?(e(B("")),!1):(e({type:c.uiRemoveError}),!0):(e(B("")),!1)},d=Object(b.useState)(!1),p=Object(g.a)(d,2),h=p[0],f=p[1];return Object(se.jsx)(me,{children:Object(se.jsxs)(we,{children:[Object(se.jsx)(ye,{src:"https://i.ibb.co/2jHtsTf/logo-block-master.png",width:"200px"}),Object(se.jsxs)(ve,{onSubmit:function(t){t.preventDefault(),j()&&e(function(e,t,n){return function(a){v.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(O.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(J(c.uid,c.displayName,c.email,c.photoURL));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}}(s,l,i))},children:[t&&Object(se.jsxs)(fe.a,{status:"error",mt:5,children:[Object(se.jsx)(fe.b,{}),t]}),Object(se.jsx)(Ee,{children:"Registrarme"}),Object(se.jsxs)(Y.a,{spacing:4,children:[Object(se.jsxs)(V.a,{children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(ie.b,{color:"gray.300"})}),Object(se.jsx)($.a,{type:"text",placeholder:"Nombre de Usuario",name:"name",value:i,onChange:o})]}),Object(se.jsxs)(V.a,{children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(ne.a,{color:"gray.300"})}),Object(se.jsx)($.a,{type:"email",placeholder:"Correo Electr\xf3nico",name:"email",value:s,onChange:o})]}),Object(se.jsxs)(V.a,{children:[Object(se.jsx)(Z.a,{pointerEvents:"none",children:Object(se.jsx)(te.a,{color:"gray.300"})}),Object(se.jsx)($.a,{type:h?"text":"password",name:"password",value:l,placeholder:"Contrase\xf1a",onChange:o}),Object(se.jsx)("div",{style:{color:"#000000 !important"},children:Object(se.jsx)(Z.b,{width:"5.0rem",children:Object(se.jsx)(ee.a,{h:"1.75rem",size:"sm",onClick:function(){return f(!h)},children:h?"Ocultar":"Mostrar"})})})]})]}),Object(se.jsx)(ke,{children:Object(se.jsx)("button",{type:"submit",children:"Enviar"})})]}),Object(se.jsx)(q.b,{to:"/login",style:{textDecoration:"none"},children:Object(se.jsx)("div",{style:{margin:"15px",fontWeight:"bold"},children:"Ya tengo una cuenta"})})]})})}),Ae=function(){return Object(se.jsx)("div",{children:Object(se.jsx)("p",{children:"Aca ira el Perfil del usuario"})})},Ce=n(249),Le=n(250),De=n(251),ze=n(257),Ie=Object(re.a)(Ce.a)(F||(F=Object(K.a)(["\n    /* margin: 24px 83px; */\n    padding: 24px 83px;\n    background-color: #0F0E17;\n    color: #ffffff;\n"]))),Ne=Object(re.a)(Le.a)(W||(W=Object(K.a)(["\n    display: flex;\n    align-items: center;\n\n"]))),Re=re.a.input(T||(T=Object(K.a)(["\n    width: 100%; \n    padding: 10px; \n    border-radius: 8px;\n"]))),Pe=function(){var e=Object(u.b)(),t=(Object(u.c)((function(e){return e.auth})),Object(b.useState)(!1)),n=Object(g.a)(t,2),a=n[0],c=n[1];return Object(b.useEffect)((function(){m.a.auth().onAuthStateChanged(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(null===t||void 0===t?void 0:t.uid)?c(!0):c(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(se.jsxs)("div",{children:[Object(se.jsx)(De.a,{fluid:!0,children:Object(se.jsxs)(Ie,{children:[Object(se.jsx)(Le.a,{xs:2,children:Object(se.jsx)("img",{src:"https://i.ibb.co/2jHtsTf/logo-block-master.png",width:"106px",height:"64px"})}),Object(se.jsx)(Ne,{xs:2,style:{color:"#FED941"},children:Object(se.jsx)("a",{style:{textDecoration:"underline"},children:"Todas"})}),Object(se.jsx)(Ne,{xs:2,children:Object(se.jsx)("p",{children:"M\xe1s valoradas"})}),Object(se.jsx)(Ne,{xs:2,children:Object(se.jsx)("p",{children:"Menos Valoradas"})}),Object(se.jsx)(Ne,{xs:3,children:Object(se.jsx)(Re,{type:"search",placeholder:"buscar "})}),Object(se.jsx)(Le.a,{xs:1,children:Object(se.jsx)(ze.a,{size:"2xs",name:"Dan Abrahmov",src:"https://bit.ly/dan-abramov",style:{width:"50px",height:"50px"}})})]})}),Object(se.jsx)("h1",{children:"Finalizar Sesion"}),a&&Object(se.jsx)(Ae,{}),a?Object(se.jsx)("div",{onClick:function(){e(function(){var e=Object(O.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.auth().signOut();case 2:t(X());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Salir"}):Object(se.jsx)(q.b,{to:"/auth/login",children:Object(se.jsx)("div",{children:"Entrar"})})]})},Ue=function(){return Object(se.jsxs)("div",{children:[Object(se.jsx)(Pe,{}),Object(se.jsx)("h1",{children:"Aca la seccion de Home"})]})},Fe=n(81),We=["isAuthenticated","component"],Te=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Fe.a)(e,We);return Object(se.jsx)(G.b,Object(r.a)(Object(r.a)({},a),{},{component:function(e){return t?Object(se.jsx)(n,Object(r.a)({},e)):Object(se.jsx)(G.a,{to:"/auth/login"})}}))},_e=["isAuthenticated","component"],Me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(Fe.a)(e,_e);return Object(se.jsx)(G.b,Object(r.a)(Object(r.a)({},a),{},{component:function(e){return t?Object(se.jsx)(G.a,{to:"/home"}):Object(se.jsx)(n,Object(r.a)({},e))}}))},Be=function(){return Object(se.jsx)(q.a,{children:Object(se.jsxs)(G.d,{children:[Object(se.jsx)(G.b,{exact:!0,path:"/auth/login",component:xe}),Object(se.jsx)(G.b,{exact:!0,path:"/auth/registro",component:Se}),Object(se.jsx)(G.a,{to:"/auth/login"})]})})};var He=function(){var e=Object(u.b)(),t=Object(b.useState)(!0),n=Object(g.a)(t,2),a=(n[0],n[1]),c=Object(b.useState)(!1),r=Object(g.a)(c,2),o=r[0],i=r[1];return Object(b.useEffect)((function(){m.a.auth().onAuthStateChanged(function(){var t=Object(O.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(J(n.uid,n.displayName,n.email,n.photoURL)),console.log(n),i(!0)):i(!1),a(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,a,i]),Object(se.jsx)(f.a,{children:Object(se.jsx)(q.a,{children:Object(se.jsxs)(G.d,{children:[Object(se.jsx)(G.b,{exact:!0,path:"/home",component:Ue}),Object(se.jsx)(Me,{path:"/auth",component:Be,isAuthenticated:o}),Object(se.jsx)(Te,{path:"/perfil",component:Ae,isAuthenticated:o}),Object(se.jsx)(G.a,{to:"/home"})]})})})};n(231);p.a.render(Object(se.jsx)(u.a,{store:j,children:Object(se.jsx)(He,{})}),document.getElementById("root"))}},[[232,1,2]]]);
//# sourceMappingURL=main.843f402f.chunk.js.map