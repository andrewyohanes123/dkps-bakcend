(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{104:function(e,t,n){"use strict";var a=n(0),c=n(45),s=n(175);var i=n(47);t.a=function(){var e=Object(i.a)(),t=e.auth,n=e.setLogout,r=Object(a.useCallback)((function(e){!function(e,t){var n,a=t.auth,i=t.setLogout,r=function(){a.remove().then((function(e){i(),console.log(e),console.log("object"),s.b.warning("Sesi login Anda sudah habis. Silakan login kembali")})).catch((function(e){return s.b.error(e.toString())}))};console.log(Object(c.a)({},e)),"undefined"!==typeof e.errors?401===(null===(n=e.response)||void 0===n?void 0:n.status)?r():"undefined"!==typeof e.errors.errors?e.errors.errors.forEach((function(e){s.b.error(e.msg)})):"Tidak ada hak akses"===e.errors[0].msg?r():e.errors.forEach((function(e){s.b.error(e.msg)})):s.b.error(e.toString())}(e,{auth:t,setLogout:n})}),[t,n]);return Object(a.useMemo)((function(){return{errorCatch:r}}),[r])}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(45),c=n(38),s=n(0);function i(e,t){var n=t.type,c=t.payload;switch(n){case"LOGIN":return Object(a.a)({},c);case"LOGOUT":case"SET_AUTH":return{login:!1,auth:c.auth,user:null};default:return e}}var r=n(6),o={login:!1,user:null},l=Object(s.createContext)(o),u=function(e){var t=e.children,n=Object(s.useReducer)(i,o),u=Object(c.a)(n,2),j=u[0],d=u[1],b=Object(s.useCallback)((function(e){d({type:"SET_AUTH",payload:{auth:e,login:!1,user:null}})}),[]),O=Object(s.useCallback)((function(e){d({type:"LOGIN",payload:{auth:j.auth,login:!0,user:e}})}),[j]),h=Object(s.useCallback)((function(){d({type:"LOGOUT",payload:{auth:j.auth,login:!1,user:null}})}),[j]);return Object(r.jsx)(l.Provider,{value:Object(a.a)(Object(a.a)({},j),{},{setAuth:b,setLogin:O,setLogout:h}),children:t})}},136:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(45),c=n(38),s=n(0);function i(e,t){var n=t.type,c=t.payload;switch(n){case"SET_MODELS":return Object(a.a)({},c);default:return e}}var r=n(6),o={models:{}},l=Object(s.createContext)(o),u=function(e){var t=e.children,n=Object(s.useReducer)(i,o),u=Object(c.a)(n,2),j=u[0],d=u[1],b=Object(s.useCallback)((function(e){d({type:"SET_MODELS",payload:{models:e}})}),[]);return Object(r.jsx)(l.Provider,{value:Object(a.a)(Object(a.a)({},j),{},{setModels:b}),children:t})}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),c=n(136);function s(){var e=Object(a.useContext)(c.b),t=e.models,n=e.setModels;return Object(a.useMemo)((function(){return{models:t,setModels:n}}),[t,n])}},219:function(e,t,n){"use strict";var a=n(232),c=n(23),s=n(60),i=n(6);t.a=function(){return document.title="404 Page",Object(i.jsx)(c.b,{path:"*",children:Object(i.jsx)(s.a,{children:Object(i.jsx)(a.a,{status:"404",title:"Ooooppppssss.....",subTitle:"Maaf, halaman yang Anda cari tidak ada"})})})}},239:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(27),i=n.n(s),r=n(11),o=n(143),l=n.n(o),u=(n(238),n(229)),j=n.n(u),d=n(66),b=(n(239),n(23)),O=n(225),h=n.n(O),p=n(38),g=n(47),x=n(161),m=n(409),f=n(175),y=n(410),v=n(407),k=n(406),T=n(76),S=n(416),P=n(104),A=n(6),C=m.a.Item,L=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(g.a)(),i=s.auth,r=s.setLogin,o=s.login,l=Object(P.a)().errorCatch;document.title="Login";var u=Object(a.useCallback)((function(e){var t=e.username,n=e.password;c(!0),i.set({username:t,password:n}).then((function(e){c(!1),r(e)})).catch((function(e){c(!1),"response"in e?401===e.response.status&&f.b.error("Username atau password anda salah"):l(e)}))}),[l,i,r]);return o?Object(A.jsx)(b.a,{to:"/dashboard"}):Object(A.jsxs)("div",{style:{maxWidth:615,margin:"auto",padding:15,height:"100%"},children:[Object(A.jsx)(y.a.Title,{level:4,children:"Login"}),Object(A.jsx)(y.a.Text,{type:"secondary",children:"Sistem Akreditasi"}),Object(A.jsx)(v.a,{}),Object(A.jsxs)(m.a,{onFinish:u,layout:"vertical",children:[Object(A.jsx)(C,{name:"username",required:!0,rules:[{required:!0,message:"Masukkan username"}],label:"Username",children:Object(A.jsx)(k.a,{disabled:n,placeholder:"Username"})}),Object(A.jsx)(C,{name:"password",required:!0,rules:[{required:!0,message:"Masukkan password"}],label:"Password",children:Object(A.jsx)(k.a.Password,{disabled:n,placeholder:"Password"})}),Object(A.jsx)(C,{children:Object(A.jsx)(T.a,{loading:n,htmlType:"submit",type:"primary",icon:Object(A.jsx)(S.a,{}),block:!0,children:"Login"})})]})]})},_=function(){return Object(A.jsx)(L,{})},E=n(408),w=n(411),M=n(173),I=n(423),D=n(424),R=n(53),z=n(137),F=n(417),K=n(418),U=n(419),H=n(420),N=n(421),B=n(422),G=n(228),W=n.n(G),q=E.a.Sider,J=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(g.a)().user,i=Object(b.j)().path,r=Object(b.h)().pathname,o=Object(b.g)().push;return Object(A.jsxs)(q,{onCollapse:c,collapsed:n,collapsible:!0,children:[n?Object(A.jsx)("div",{style:{padding:24,paddingBottom:0,overflow:"hidden"},children:Object(A.jsx)(R.a,{placement:"right",title:"".concat(s.name),children:Object(A.jsx)(W.a,{style:{background:"#177ddc"},children:"".concat(s.username).charAt(0).toUpperCase()})})}):Object(A.jsxs)("div",{style:{padding:24,paddingBottom:0,overflow:"hidden"},children:[Object(A.jsx)(y.a.Title,{style:{textOverflow:"ellipsis"},level:5,children:s.name}),Object(A.jsx)(y.a.Text,{type:"secondary",children:s.username})]}),Object(A.jsx)(v.a,{}),Object(A.jsxs)(z.a,{mode:"inline",theme:"dark",onClick:function(e){return o("".concat(e.key))},defaultSelectedKeys:[r],selectedKeys:[r],children:[Object(A.jsx)(z.a.Item,{icon:Object(A.jsx)(F.a,{}),children:"Halaman Utama"},"".concat(i)),["chief","program_chief","program_team","head_team","administrator"].includes(s.type)&&Object(A.jsx)(z.a.Item,{icon:Object(A.jsx)(K.a,{}),children:"DKPS"},"".concat(i,"/dkps")),Object(A.jsx)(z.a.Item,{icon:Object(A.jsx)(U.a,{}),children:"Simulasi Nilai"},"".concat(i,"/simulasi-nilai")),"administrator"===s.type&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(z.a.Item,{icon:Object(A.jsx)(H.a,{}),children:"Jurusan"},"".concat(i,"/jurusan")),Object(A.jsx)(z.a.Item,{icon:Object(A.jsx)(N.a,{}),children:"Pengguna"},"".concat(i,"/pengguna")),Object(A.jsx)(z.a.Item,{icon:Object(A.jsx)(B.a,{}),children:"Pengaturan"},"".concat(i,"/pengaturan-form"))]})]})]})},V=n(232),Y=n(415),Q=n(219),X=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,521))})),Z=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,517))})),$=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,523))})),ee=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,520))})),te=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,522))})),ne=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,519))})),ae=function(){var e=Object(b.j)().path,t=Object(g.a)().user;return Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)(V.a,{icon:Object(A.jsx)(Y.a,{spin:!0}),title:"Loading Halaman",subTitle:"Tunggu sebentar"}),children:Object(A.jsxs)(b.d,{children:[Object(A.jsx)(b.b,{path:"".concat(e),exact:!0,component:Z}),["chief","program_chief","program_team","head_team","administrator"].includes(t.type)&&Object(A.jsx)(b.b,{path:"".concat(e,"/dkps"),component:te}),Object(A.jsx)(b.b,{path:"".concat(e,"/simulasi-nilai"),component:ne}),"administrator"===t.type&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(b.b,{path:"".concat(e,"/pengguna"),component:$}),Object(A.jsx)(b.b,{path:"".concat(e,"/jurusan"),component:X}),Object(A.jsx)(b.b,{path:"".concat(e,"/pengaturan-form"),component:ee})]}),Object(A.jsx)(Q.a,{})]})})},ce=E.a.Footer,se=E.a.Content,ie=function(){var e=Object(g.a)(),t=e.auth,n=e.setLogout,c=e.login,s=Object(P.a)().errorCatch,i=Object(a.useState)(!1),r=Object(p.a)(i,2),o=r[0],l=r[1];Object(a.useEffect)((function(){document.title="Dashboard"}),[]);var u=Object(a.useCallback)((function(){l(!0),t.remove().then((function(e){l(!1),console.log(e),n()})).catch((function(e){l(!1),s(e)}))}),[t,n,s]);return c?Object(A.jsxs)(E.a,{children:[Object(A.jsx)(w.a,{title:"DKPS",style:{background:"#1f1f1f"},extra:Object(A.jsx)(T.a,{loading:o,onClick:u,size:"small",icon:Object(A.jsx)(I.a,{}),danger:!0,type:"primary",children:"Logout"})}),Object(A.jsxs)(E.a,{children:[Object(A.jsx)(J,{}),Object(A.jsxs)(E.a,{children:[Object(A.jsxs)(se,{className:"site-layout",style:{overflow:"auto"},children:[Object(A.jsx)(M.a,{style:{margin:15},children:Object(A.jsxs)(M.a.Item,{children:[Object(A.jsx)(D.a,{}),Object(A.jsx)("span",{children:"Dashboard"})]})}),Object(A.jsx)("div",{className:"site-layout-background",style:{padding:15},children:Object(A.jsx)(ae,{})})]}),Object(A.jsx)(ce,{style:{textAlign:"center"},children:"TagConn"})]})]})]}):Object(A.jsx)(b.a,{to:"/"})},re=function(){return Object(A.jsx)(ie,{})},oe=n(90),le=n(51),ue=n(413),je=n(412),de=n(60),be=n(93).a.img({width:"100%",height:"auto",display:"block"}),Oe=n.p+"static/media/PaymentProcessed.cbcfe4df.png",he=n.p+"static/media/Meeting.3e7a7f6c.png",pe=n.p+"static/media/Coding.b5062ad2.png",ge=n.p+"static/media/deployment.0cc980d2.png",xe=n.p+"static/media/development.a326c9f0.png",me=n.p+"static/media/logo-polimdo.710fb21e.png",fe=(new Date).getFullYear(),ye=function(){var e=Object(b.g)().push;return Object(A.jsx)(de.a,{fluid:!0,children:Object(A.jsx)(de.b,{children:Object(A.jsxs)(oe.a,{children:[Object(A.jsx)(le.a,{span:12,children:Object(A.jsxs)(de.a,{style:{padding:18},fluid:!0,children:[Object(A.jsxs)(ue.b,{split:Object(A.jsx)(v.a,{type:"vertical"}),align:"center",children:[Object(A.jsx)("img",{alt:"logo",src:me,style:{width:100,height:100,display:"inline-block"}}),Object(A.jsxs)(y.a.Title,{level:5,children:["Audit mutu internal ",Object(A.jsx)(y.a.Title,{style:{display:"inline-block",margin:0},level:5,type:"secondary",children:"Polimdo"})]})]}),Object(A.jsx)(be,{alt:"presentation",src:he,style:{width:300,margin:"10px auto"}}),Object(A.jsx)(y.a.Text,{children:"Selamat datang di website Akreditasi Polimdo. Semua kegiatan AMI Polimdo akan melalui website ini. Silakan klik icon sesuai dengan status dalam Audit Internal."}),Object(A.jsx)(y.a.Text,{style:{display:"block"},children:"Jangan lupa tetap selalu berdoa dan berpikir positif, kami doakan bapak/ibu/saudara selalu dalam keadaan sehat, sukses dan bahagia selalu dunia dan akhirat. Amin."}),Object(A.jsx)(y.a.Text,{style:{textAlign:"right",display:"block",marginTop:12},children:"Tuhan selalu beserta kita semua"}),Object(A.jsx)(y.a.Text,{style:{textAlign:"right",display:"block"},children:"Hormat kami,"}),Object(A.jsx)(y.a.Text,{strong:!0,style:{textAlign:"right",display:"block"},children:"Ketua P4M Polimdo"}),Object(A.jsxs)(ue.b,{style:{marginTop:35},children:[Object(A.jsx)(y.a.Text,{children:"Auditor dan Auditi silakan login di sini"}),Object(A.jsx)(T.a,{onClick:function(){return e("/login")},type:"primary",children:"Login di sini"})]})]})}),Object(A.jsx)(le.a,{span:12,children:Object(A.jsxs)(de.a,{fluid:!0,style:{padding:18},children:[Object(A.jsx)(y.a.Title,{style:{textAlign:"center"},level:3,children:"Akreditasi 2021-2022 Semester Ganjil"}),Object(A.jsxs)(oe.a,{gutter:[16,16],children:[Object(A.jsx)(le.a,{span:12,children:Object(A.jsx)(je.a,{hoverable:!0,size:"small",title:"Kepala P4M",children:Object(A.jsx)(be,{alt:"paymentprocessed",src:Oe})})}),Object(A.jsx)(le.a,{span:12,children:Object(A.jsx)(je.a,{hoverable:!0,size:"small",title:"Ketua Autor",children:Object(A.jsx)(be,{alt:"paymentprocessed",src:ge})})}),Object(A.jsx)(le.a,{span:12,children:Object(A.jsx)(je.a,{hoverable:!0,size:"small",title:"Auditor",children:Object(A.jsx)(be,{alt:"paymentprocessed",src:pe})})}),Object(A.jsx)(le.a,{span:12,children:Object(A.jsx)(je.a,{hoverable:!0,size:"small",title:"Auditee",children:Object(A.jsx)(be,{alt:"paymentprocessed",src:xe})})})]})]})}),Object(A.jsx)(le.a,{span:24,children:Object(A.jsx)(de.c,{children:Object(A.jsxs)(y.a.Text,{style:{color:"#313131"},children:["Copyright \xa9 ",fe,", All rights reserved."]})})})]})})})},ve=function(){return Object(A.jsx)(ye,{})},ke=(n(400),n(401),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_ADDRESS:"https://p4m.polimdo.ac.id",REACT_APP_PORT:"443"})),Te=ke.REACT_APP_IP_ADDRESS,Se=ke.REACT_APP_PORT,Pe=new h.a(Te,Se,localStorage),Ae=function(){var e=function(e){var t=Object(a.useState)({}),n=Object(p.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(!1),r=Object(p.a)(i,2),o=r[0],l=r[1],u=Object(a.useState)(!1),j=Object(p.a)(u,2),d=j[0],b=j[1],O=Object(g.a)(),h=O.setAuth,m=O.setLogin,f=O.setLogout,y=O.auth,v=Object(x.a)().setModels,k=Object(a.useCallback)((function(){l(!1),e.connect().then((function(e){s(e),b(!1),console.log("connect")})).catch((function(e){console.log(e),b(!0),document.title="Oops... terjadi kesalahan. Silakan coba lagi"}))}),[b,s,e]);return Object(a.useEffect)((function(){k()}),[k]),Object(a.useEffect)((function(){"undefined"!==typeof y&&e.getAuthProvider().get().then((function(e){m(e),l(!0)})).catch((function(e){console.log(e),f(),l(!0)}))}),[y,e]),Object(a.useEffect)((function(){if(Object.keys(c).length>0){v(c);var t=e.getAuthProvider();h(t)}}),[c,e]),Object(a.useMemo)((function(){return{error:d,ready:o}}),[o,d])}(Pe),t=e.ready,n=e.error;return t?Object(A.jsxs)(b.d,{children:[Object(A.jsx)(b.b,{path:"/",exact:!0,component:ve}),Object(A.jsx)(b.b,{path:"/login",exact:!0,component:_}),Object(A.jsx)(b.b,{path:"/dashboard",component:re})]}):n?Object(A.jsx)(V.a,{status:"500",title:"Terjadi Kesalahan",subTitle:"Tidak dapat terhubung dengan server"}):Object(A.jsx)(V.a,{icon:Object(A.jsx)(Y.a,{}),title:"Loading",subTitle:"Sedang menghubungkan dengan server"})},Ce=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,518)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},Le=n(136),_e=n(135);l.a.locale("id"),i.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(Le.a,{children:Object(A.jsx)(_e.b,{children:Object(A.jsx)(d.a,{children:Object(A.jsx)(r.b,{locale:j.a,children:Object(A.jsx)(Ae,{})})})})})}),document.getElementById("root")),Ce()},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),c=n(135);function s(){var e=Object(a.useContext)(c.a),t=e.auth,n=e.setLogin,s=e.setLogout,i=e.login,r=e.user,o=e.setAuth;return Object(a.useMemo)((function(){return{setAuth:o,user:r,login:i,setLogin:n,setLogout:s,auth:t}}),[o,i,n,s,t,r])}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n(93),c=a.a.div((function(e){return{padding:12,maxWidth:e.fluid?void 0:1e3,margin:"0 auto"}})),s=a.a.div((function(e){e.fluid;return{margin:"0 auto",borderRadius:15,border:"1px solid #303030",overflow:"hidden"}})),i=a.a.footer({background:"#f5f639",padding:18,color:"black"})}},[[405,5,6]]]);
//# sourceMappingURL=main.cadca14c.chunk.js.map