(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{440:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(163),i=n(28),o=function(e,t){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r.a}))};o.displayName="EditOutlined",t.a=c.forwardRef(o)},441:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(429),i=n(28),o=function(e,t){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r.a}))};o.displayName="DeleteOutlined",t.a=c.forwardRef(o)},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),c=n(4),r=n(8),i=n(0),o=n(5),l=n.n(o),s=n(26),u=n(55),m=n(12),b=n(34),d=n(2);function j(e){return void 0!==e&&null!==e}var p=function(e){var t,n=e.itemPrefixCls,c=e.component,r=e.span,o=e.className,s=e.style,u=e.labelStyle,m=e.contentStyle,b=e.bordered,d=e.label,p=e.content,f=e.colon,O=c;return b?i.createElement(O,{className:l()((t={},Object(a.a)(t,"".concat(n,"-item-label"),j(d)),Object(a.a)(t,"".concat(n,"-item-content"),j(p)),t),o),style:s,colSpan:r},j(d)&&i.createElement("span",{style:u},d),j(p)&&i.createElement("span",{style:m},p)):i.createElement(O,{className:l()("".concat(n,"-item"),o),style:s,colSpan:r},i.createElement("div",{className:"".concat(n,"-item-container")},d&&i.createElement("span",{className:l()("".concat(n,"-item-label"),Object(a.a)({},"".concat(n,"-item-no-colon"),!f)),style:u},d),p&&i.createElement("span",{className:l()("".concat(n,"-item-content")),style:m},p)))};function f(e,t,n){var a=t.colon,c=t.prefixCls,r=t.bordered,o=n.component,l=n.type,s=n.showLabel,u=n.showContent,m=n.labelStyle,b=n.contentStyle;return e.map((function(e,t){var n=e.props,j=n.label,f=n.children,O=n.prefixCls,h=void 0===O?c:O,x=n.className,v=n.style,y=n.labelStyle,g=n.contentStyle,C=n.span,E=void 0===C?1:C,S=e.key;return"string"===typeof o?i.createElement(p,{key:"".concat(l,"-").concat(S||t),className:x,style:v,labelStyle:Object(d.a)(Object(d.a)({},m),y),contentStyle:Object(d.a)(Object(d.a)({},b),g),span:E,colon:a,component:o,itemPrefixCls:h,bordered:r,label:s?j:null,content:u?f:null}):[i.createElement(p,{key:"label-".concat(S||t),className:x,style:Object(d.a)(Object(d.a)(Object(d.a)({},m),v),y),span:1,colon:a,component:o[0],itemPrefixCls:h,bordered:r,label:j}),i.createElement(p,{key:"content-".concat(S||t),className:x,style:Object(d.a)(Object(d.a)(Object(d.a)({},b),v),g),span:2*E-1,component:o[1],itemPrefixCls:h,bordered:r,content:f})]}))}var O=function(e){var t=i.useContext(v),n=e.prefixCls,a=e.vertical,c=e.row,r=e.index,o=e.bordered;return a?i.createElement(i.Fragment,null,i.createElement("tr",{key:"label-".concat(r),className:"".concat(n,"-row")},f(c,e,Object(d.a)({component:"th",type:"label",showLabel:!0},t))),i.createElement("tr",{key:"content-".concat(r),className:"".concat(n,"-row")},f(c,e,Object(d.a)({component:"td",type:"content",showContent:!0},t)))):i.createElement("tr",{key:r,className:"".concat(n,"-row")},f(c,e,Object(d.a)({component:o?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},h=function(e){return e.children},x=n(18),v=i.createContext({}),y={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function g(e,t,n){var a=e;return(void 0===t||t>n)&&(a=Object(x.a)(e,{span:n}),Object(m.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),a}function C(e){var t,n=e.prefixCls,o=e.title,m=e.extra,d=e.column,j=void 0===d?y:d,p=e.colon,f=void 0===p||p,h=e.bordered,x=e.layout,C=e.children,E=e.className,S=e.style,k=e.size,N=e.labelStyle,w=e.contentStyle,F=i.useContext(b.b),P=F.getPrefixCls,T=F.direction,z=P("descriptions",n),D=i.useState({}),K=Object(c.a)(D,2),M=K[0],I=K[1],L=function(e,t){if("number"===typeof e)return e;if("object"===Object(r.a)(e))for(var n=0;n<u.b.length;n++){var a=u.b[n];if(t[a]&&void 0!==e[a])return e[a]||y[a]}return 3}(j,M);i.useEffect((function(){var e=u.a.subscribe((function(e){"object"===Object(r.a)(j)&&I(e)}));return function(){u.a.unsubscribe(e)}}),[]);var A=function(e,t){var n=Object(s.a)(e).filter((function(e){return e})),a=[],c=[],r=t;return n.forEach((function(e,i){var o,l=null===(o=e.props)||void 0===o?void 0:o.span,s=l||1;if(i===n.length-1)return c.push(g(e,l,r)),void a.push(c);s<r?(r-=s,c.push(e)):(c.push(g(e,s,r)),a.push(c),r=t,c=[])})),a}(C,L);return i.createElement(v.Provider,{value:{labelStyle:N,contentStyle:w}},i.createElement("div",{className:l()(z,(t={},Object(a.a)(t,"".concat(z,"-").concat(k),k&&"default"!==k),Object(a.a)(t,"".concat(z,"-bordered"),!!h),Object(a.a)(t,"".concat(z,"-rtl"),"rtl"===T),t),E),style:S},(o||m)&&i.createElement("div",{className:"".concat(z,"-header")},o&&i.createElement("div",{className:"".concat(z,"-title")},o),m&&i.createElement("div",{className:"".concat(z,"-extra")},m)),i.createElement("div",{className:"".concat(z,"-view")},i.createElement("table",null,i.createElement("tbody",null,A.map((function(e,t){return i.createElement(O,{key:t,index:t,colon:f,prefixCls:z,vertical:"vertical"===x,bordered:h,row:e})})))))))}C.Item=h;t.b=C},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a={text:"Teks",number:"Angka",option:"Opsi / Pilihan"},c={administrator:"Administrator",program_chief:"Kepala Program Studi",chief:"Kepala Jurusan",director:"Direktur",vice_director:"Wakil Direktur",head_team:"Tim Akreditasi Institusi",program_team:"Tim Akreditasi Program Studi"}},473:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(7),c=n(2),r=n(3),i=n(4),o=n(8),l=n(0),s=n(5),u=n.n(s),m=n(430),b=n(162),d=n(55),j=n(34),p=n(431),f=n(149),O=n(96),h=n(18),x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},v=function(e){var t=e.prefixCls,n=e.children,a=e.actions,i=e.extra,o=e.className,s=e.colStyle,m=x(e,["prefixCls","children","actions","extra","className","colStyle"]),b=l.useContext(C),d=b.grid,p=b.itemLayout,f=l.useContext(j.b).getPrefixCls,v=f("list",t),y=a&&a.length>0&&l.createElement("ul",{className:"".concat(v,"-item-action"),key:"actions"},a.map((function(e,t){return l.createElement("li",{key:"".concat(v,"-item-action-").concat(t)},e,t!==a.length-1&&l.createElement("em",{className:"".concat(v,"-item-action-split")}))}))),g=d?"div":"li",E=l.createElement(g,Object(c.a)({},m,{className:u()("".concat(v,"-item"),Object(r.a)({},"".concat(v,"-item-no-flex"),!("vertical"===p?i:!function(){var e;return l.Children.forEach(n,(function(t){"string"===typeof t&&(e=!0)})),e&&l.Children.count(n)>1}())),o)}),"vertical"===p&&i?[l.createElement("div",{className:"".concat(v,"-item-main"),key:"content"},n,y),l.createElement("div",{className:"".concat(v,"-item-extra"),key:"extra"},i)]:[n,y,Object(h.a)(i,{key:"extra"})]);return d?l.createElement(O.a,{flex:1,style:s},E):E};v.Meta=function(e){var t=e.prefixCls,n=e.className,a=e.avatar,r=e.title,i=e.description,o=x(e,["prefixCls","className","avatar","title","description"]),s=(0,l.useContext(j.b).getPrefixCls)("list",t),m=u()("".concat(s,"-item-meta"),n),b=l.createElement("div",{className:"".concat(s,"-item-meta-content")},r&&l.createElement("h4",{className:"".concat(s,"-item-meta-title")},r),i&&l.createElement("div",{className:"".concat(s,"-item-meta-description")},i));return l.createElement("div",Object(c.a)({},o,{className:m}),a&&l.createElement("div",{className:"".concat(s,"-item-meta-avatar")},a),(r||i)&&b)};var y=v,g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},C=l.createContext({});C.Consumer;function E(e){var t,n=e.pagination,s=void 0!==n&&n,O=e.prefixCls,h=e.bordered,x=void 0!==h&&h,v=e.split,y=void 0===v||v,E=e.className,S=e.children,k=e.itemLayout,N=e.loadMore,w=e.grid,F=e.dataSource,P=void 0===F?[]:F,T=e.size,z=e.header,D=e.footer,K=e.loading,M=void 0!==K&&K,I=e.rowKey,L=e.renderItem,A=e.locale,B=g(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),_=s&&"object"===Object(o.a)(s)?s:{},q=l.useState(_.defaultCurrent||1),R=Object(i.a)(q,2),H=R[0],J=R[1],V=l.useState(_.defaultPageSize||10),W=Object(i.a)(V,2),G=W[0],Q=W[1],U=l.useContext(j.b),X=U.getPrefixCls,Y=U.renderEmpty,Z=U.direction,$={},ee=function(e){return function(t,n){J(t),Q(n),s&&s[e]&&s[e](t,n)}},te=ee("onChange"),ne=ee("onShowSizeChange"),ae=X("list",O),ce=M;"boolean"===typeof ce&&(ce={spinning:ce});var re=ce&&ce.spinning,ie="";switch(T){case"large":ie="lg";break;case"small":ie="sm"}var oe=u()(ae,(t={},Object(r.a)(t,"".concat(ae,"-vertical"),"vertical"===k),Object(r.a)(t,"".concat(ae,"-").concat(ie),ie),Object(r.a)(t,"".concat(ae,"-split"),y),Object(r.a)(t,"".concat(ae,"-bordered"),x),Object(r.a)(t,"".concat(ae,"-loading"),re),Object(r.a)(t,"".concat(ae,"-grid"),!!w),Object(r.a)(t,"".concat(ae,"-something-after-last-item"),!!(N||s||D)),Object(r.a)(t,"".concat(ae,"-rtl"),"rtl"===Z),t),E),le=Object(c.a)(Object(c.a)(Object(c.a)({},{current:1,total:0}),{total:P.length,current:H,pageSize:G}),s||{}),se=Math.ceil(le.total/le.pageSize);le.current>se&&(le.current=se);var ue=s?l.createElement("div",{className:"".concat(ae,"-pagination")},l.createElement(p.a,Object(c.a)({},le,{onChange:te,onShowSizeChange:ne}))):null,me=Object(a.a)(P);s&&P.length>(le.current-1)*le.pageSize&&(me=Object(a.a)(P).splice((le.current-1)*le.pageSize,le.pageSize));var be=Object(b.a)(),de=l.useMemo((function(){for(var e=0;e<d.b.length;e+=1){var t=d.b[e];if(be[t])return t}}),[be]),je=l.useMemo((function(){if(w){var e=de&&w[de]?w[de]:w.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}}),[null===w||void 0===w?void 0:w.column,de]),pe=re&&l.createElement("div",{style:{minHeight:53}});if(me.length>0){var fe=me.map((function(e,t){return function(e,t){return L?((n="function"===typeof I?I(e):"string"===typeof I?e[I]:e.key)||(n="list-item-".concat(t)),$[t]=n,L(e,t)):null;var n}(e,t)})),Oe=l.Children.map(fe,(function(e,t){return l.createElement("div",{key:$[t],style:je},e)}));pe=w?l.createElement(f.a,{gutter:w.gutter},Oe):l.createElement("ul",{className:"".concat(ae,"-items")},fe)}else S||re||(pe=function(e,t){return l.createElement("div",{className:"".concat(e,"-empty-text")},A&&A.emptyText||t("List"))}(ae,Y));var he=le.position||"bottom";return l.createElement(C.Provider,{value:{grid:w,itemLayout:k}},l.createElement("div",Object(c.a)({className:oe},B),("top"===he||"both"===he)&&ue,z&&l.createElement("div",{className:"".concat(ae,"-header")},z),l.createElement(m.a,ce,pe,S),D&&l.createElement("div",{className:"".concat(ae,"-footer")},D),N||("bottom"===he||"both"===he)&&ue))}E.Item=y;t.b=E},516:function(e,t,n){e.exports=n(231)},520:function(e,t,n){"use strict";n.r(t);var a=n(23),c=n(45),r=n(38),i=n(0),o=n(175),l=n(411),s=n(76),u=n(473),m=n(412),b=n(410),d=n(443),j=n(413),p=n(407),f=n(53),O=n(104),h=n(161),x=n(415),v=n(440),y=n(516),g=n.n(y);function C(e,t,n,a,c,r,i){try{var o=e[r](i),l=o.value}catch(s){return void n(s)}o.done?t(l):Promise.resolve(l).then(a,c)}var E=n(409),S=n(494),k=n(90),N=n(51),w=n(406),F=n(432),P=n(441),T=n(6),z=E.a.useForm,D=E.a.Item,K=E.a.List,M=E.a.ErrorList,I=function(e){var t=e.visible,n=e.onCancel,a=e.onSubmit,c=e.field,o=Object(i.useState)(!1),l=Object(r.a)(o,2),u=l[0],m=l[1],b=z(),d=Object(r.a)(b,1)[0],j=Object(i.useMemo)((function(){return"undefined"!==typeof c}),[c]),p=Object(i.useState)([]),f=Object(r.a)(p,2),O=f[0],h=f[1],v=Object(i.useCallback)((function(){m(!1),d.resetFields(["properties"])}),[d]),y=Object(i.useCallback)((function(e){a(e,v)}),[a,v]);Object(i.useEffect)((function(){"undefined"!==typeof c&&(d.setFieldsValue({properties:c.properties}),h(c.properties))}),[c,d]);var I=Object(i.useCallback)((function(e,t){h(t.properties)}),[]);return Object(T.jsx)(S.a,{visible:t,onCancel:n,footer:null,title:j?"Edit Form":"Tambah field",afterClose:v,confirmLoading:u,width:"60%",children:Object(T.jsxs)(E.a,{onValuesChange:I,onFinish:u?void 0:y,form:d,layout:"vertical",children:[Object(T.jsx)(K,{name:"properties",rules:[{validator:function(){var e,t=(e=g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&!(n.length<1)){e.next=2;break}return e.abrupt("return",Promise.reject(new Error("Tambah form")));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,c){var r=e.apply(t,n);function i(e){C(r,a,c,i,o,"next",e)}function o(e){C(r,a,c,i,o,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()}],children:function(e,t,n){var a=t.add,c=t.remove,r=n.errors;return Object(T.jsxs)(T.Fragment,{children:[e.map((function(e,t){return Object(T.jsxs)(k.a,{align:"middle",gutter:[16,16],children:[Object(T.jsx)(N.a,{md:8,children:Object(T.jsx)(D,{label:"Nama field",name:[e.name,"field"],fieldKey:[e.fieldKey,"field"],rules:[{required:!0,message:"Masukkan nama field"}],children:Object(T.jsx)(w.a,{prefix:u&&Object(T.jsx)(x.a,{}),placeholder:"Nama Field"})})}),Object(T.jsx)(N.a,{md:6,children:Object(T.jsx)(D,{label:"Tipe field",name:[e.name,"type"],fieldKey:[e.fieldKey,"type"],rules:[{required:!0,message:"Pilih tipe field"}],children:Object(T.jsxs)(F.a,{loading:u,placeholder:"Tipe Field",children:[Object(T.jsx)(F.a.Option,{value:"text",children:"Teks"}),Object(T.jsx)(F.a.Option,{value:"number",children:"Numerik"}),Object(T.jsx)(F.a.Option,{value:"option",children:"Pilihan"})]})})}),"option"===O[t].type&&Object(T.jsx)(N.a,{md:8,children:Object(T.jsx)(D,{label:"Nilai Pilihan",name:[e.name,"options"],extra:"Tiap nilai dipisah dengan koma (,)",fieldKey:[e.fieldKey,"options"],rules:[{required:!0,message:"Masukkan nilai pilihan"}],children:Object(T.jsx)(w.a,{placeholder:"Nilai pilihan"})})}),Object(T.jsx)(N.a,{md:2,children:Object(T.jsx)(s.a,{shape:"circle",icon:Object(T.jsx)(P.a,{}),danger:!0,onClick:function(){return c(e.name)}})})]},e.fieldKey)})),Object(T.jsxs)(D,{children:[Object(T.jsx)(s.a,{loading:u,block:!0,onClick:function(){return a({field:"",type:"text"})},children:"Tambah Field"}),Object(T.jsx)(M,{errors:r})]})]})}}),Object(T.jsx)(D,{children:Object(T.jsx)(s.a,{loading:u,type:"primary",htmlType:"submit",children:"Simpan"})})]})})},L=n(457),A=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],y=t[1],g=Object(i.useState)(void 0),C=Object(r.a)(g,2),E=C[0],S=C[1],k=Object(i.useState)(void 0),N=Object(r.a)(k,2),w=N[0],F=N[1],P=Object(i.useState)(!0),z=Object(r.a)(P,2),D=z[0],K=z[1],M=Object(i.useState)(!1),A=Object(r.a)(M,2),B=A[0],_=A[1],q=Object(h.a)().models,R=q.DocumentField,H=q.Document,J=Object(O.a)().errorCatch,V=Object(a.i)().id,W=Object(a.g)().push,G=Object(i.useCallback)((function(){K(!0),R.collection({attributes:["properties"],where:{document_id:V}}).then((function(e){y(e.rows),K(!1)})).catch(J)}),[R,V,J]),Q=Object(i.useCallback)((function(){H.single(V).then((function(e){F(e)})).catch(J)}),[H,V,J]);Object(i.useEffect)((function(){G(),Q()}),[G,Q]);var U=Object(i.useCallback)((function(e,t){R.create(Object(c.a)(Object(c.a)({},e),{},{document_id:V})).then((function(e){o.b.success("Field berhasil ditambah"),console.log(e),G(),t(),_(!1)})).catch(J)}),[R,J,G,V]),X=Object(i.useCallback)((function(e){"undefined"!==typeof E&&E.update(Object(c.a)({},e)).then((function(e){o.b.success("Data field berhasil disimpan"),G(),_(!1)})).catch(J)}),[G,E,J]),Y=Object(i.useMemo)((function(){return"undefined"!==typeof E}),[E]);return Object(T.jsxs)("div",{children:[Object(T.jsx)(l.a,{onBack:function(){return W("/dashboard/pengaturan-form")},title:"undefined"!==typeof w?"Form ".concat(w.name):"Form",extra:n.length>0?[]:Object(T.jsx)(s.a,{onClick:function(){return _(!0)},children:"Tambah Field"})}),Object(T.jsx)(I,{visible:B,field:E,onCancel:function(){_(!1),S(void 0)},onSubmit:Y?X:U}),Object(T.jsx)(u.b,{style:{marginTop:8},loading:{spinning:D,indicator:Object(T.jsx)(x.a,{spin:!0}),size:"large",tip:"Mengambil field form"},dataSource:n,renderItem:function(e){return Object(T.jsxs)(m.a,{size:"small",style:{marginBottom:4,marginTop:4},children:[Object(T.jsxs)(b.a.Title,{level:5,children:["Field ",null===w||void 0===w?void 0:w.name]}),Object(T.jsx)(d.b,{size:"small",column:1,children:e.properties.map((function(e){return Object(T.jsx)(d.b.Item,{label:e.field,children:Object(T.jsxs)(b.a.Text,{type:"secondary",children:[L.a[e.type]," ","option"===L.a[e.type]&&Object(T.jsxs)(T.Fragment,{children:["(",e.options,")"]})]})})}))}),Object(T.jsx)(j.b,{size:2,split:Object(T.jsx)(p.a,{type:"vertical"}),children:Object(T.jsx)(f.a,{placement:"right",title:"Edit Field",children:Object(T.jsx)(s.a,{size:"small",onClick:function(){S(e),_(!0)},icon:Object(T.jsx)(v.a,{})})})})]})},rowKey:function(e){return"".concat(e.id)}})]})},B=function(){return Object(T.jsx)(A,{})},_=n(479),q=n(418),R=n(435),H=E.a.useForm,J=E.a.Item,V=function(e){var t=e.visible,n=e.onCancel,a=e.onSubmit,c=e.onOpen,o=e.document,l=Object(i.useState)(!1),u=Object(r.a)(l,2),m=u[0],b=u[1],d=H(),j=Object(r.a)(d,1)[0],p=Object(i.useMemo)((function(){return"undefined"!==typeof o}),[o]),f=Object(i.useCallback)((function(){j.resetFields(["name"]),b(!1)}),[j]),O=Object(i.useCallback)((function(e){b(!0),a(e,f)}),[a,f]);return Object(i.useEffect)((function(){"undefined"!==typeof o&&j.setFieldsValue({name:o.name,type:o.type})}),[o,j]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(s.a,{style:{marginBottom:12},onClick:c,children:"Tambah Form"}),Object(T.jsx)(S.a,{afterClose:f,visible:t,onCancel:n,title:p?"Edit ".concat(o.name):"Tambah Form",footer:null,children:Object(T.jsxs)(E.a,{onFinish:m?void 0:O,form:j,layout:"vertical",children:[Object(T.jsx)(J,{name:"name",rules:[{required:!0,message:"Masukkan nama form"}],label:"Nama Form",children:Object(T.jsx)(w.a,{prefix:m&&Object(T.jsx)(x.a,{spin:!0}),placeholder:"Nama Form"})}),Object(T.jsx)(J,{name:"type",rules:[{required:!0,message:"Pilih diploma"}],label:"Diploma",children:Object(T.jsxs)(R.a.Group,{children:[Object(T.jsx)(R.a,{value:"D3",children:"Diploma 3"}),Object(T.jsx)(R.a,{value:"D4",children:"Diploma 4"})]})}),Object(T.jsx)(J,{children:p?Object(T.jsx)(s.a,{htmlType:"submit",type:"primary",loading:m,children:"Simpan"}):Object(T.jsx)(s.a,{htmlType:"submit",loading:m,children:"Tambah Form"})})]})})]})},W=document,G=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(i.useState)({rows:[],count:0}),d=Object(r.a)(l,2),p=d[0],y=d[1],g=Object(i.useState)(void 0),C=Object(r.a)(g,2),E=C[0],S=C[1],k=Object(i.useState)(1),N=Object(r.a)(k,2),w=N[0],F=N[1],z=Object(i.useState)(10),D=Object(r.a)(z,2),K=D[0],M=D[1],I=Object(i.useState)(!0),L=Object(r.a)(I,2),A=L[0],B=L[1],R=Object(O.a)().errorCatch,H=Object(h.a)().models.Document,J=Object(a.g)().push,G=Object(a.j)().path;W.title="Dashboard - Pengaturan";var Q=Object(i.useCallback)((function(){var e=(w-1)*K;B(!0),H.collection({limit:K,offset:e,attributes:["name","type"],order:[["id","asc"]]}).then((function(e){y(e),B(!1)})).catch(R)}),[H,K,w,R]);Object(i.useEffect)((function(){Q()}),[Q]);var U=Object(i.useCallback)((function(e,t){H.create(e).then((function(e){o.b.success("Form ".concat(e.name," berhasil dibuat")),Q(),t(),c(!1)})).catch(R)}),[H,Q,R]),X=Object(i.useCallback)((function(e,t){E.update(e).then((function(e){o.b.success("Form ".concat(e.name," berhasil disimpan")),Q(),t(),c(!1)})).catch(R)}),[E,Q,R]),Y=Object(i.useCallback)((function(e){e.delete().then((function(e){o.b.success("Form ".concat(e.name," berhasil dihapus")),Q()})).catch(R)}),[R,Q]);return Object(T.jsxs)("div",{children:[Object(T.jsx)(b.a.Title,{level:5,children:"Pengaturan Form DKPS"}),Object(T.jsx)(V,{visible:n,onCancel:function(){c(!1),S(void 0)},onOpen:function(){return c(!0)},onSubmit:"undefined"!==typeof E?X:U,document:E}),Object(T.jsx)(u.b,{style:{marginTop:12},dataSource:p.rows,rowKey:function(e){return"".concat(e.id)},renderItem:function(e){return Object(T.jsx)(m.a,{size:"small",style:{marginTop:4,marginBottom:4},children:Object(T.jsxs)(u.b.Item,{children:[Object(T.jsxs)(j.b,{children:[Object(T.jsx)("span",{children:e.name}),Object(T.jsx)(b.a.Text,{type:"secondary",children:e.type})]}),Object(T.jsxs)(j.b,{children:[Object(T.jsx)(f.a,{title:"Edit Field Form ".concat(e.name),children:Object(T.jsx)(s.a,{onClick:function(){J("".concat(G,"/").concat(e.id))},type:"primary",size:"small",icon:Object(T.jsx)(q.a,{})})}),Object(T.jsx)(f.a,{title:"Edit ".concat(e.name),children:Object(T.jsx)(s.a,{onClick:function(){S(e),c(!0)},size:"small",icon:Object(T.jsx)(v.a,{})})}),Object(T.jsx)(f.a,{placement:"topRight",title:"Hapus ".concat(e.name),children:Object(T.jsx)(_.a,{title:"Apakah Anda yakin ingin menghapus ".concat(e.name,"?"),placement:"topRight",okButtonProps:{danger:!0,type:"primary"},okText:"Hapus",cancelText:"Batal",onConfirm:function(){return Y(e)},children:Object(T.jsx)(s.a,{size:"small",type:"primary",danger:!0,icon:Object(T.jsx)(P.a,{})})})})]})]})})},loading:{spinning:A,indicator:Object(T.jsx)(x.a,{spin:!0}),size:"large",tip:"Mengambil Data Form"},pagination:{current:w,onChange:F,onShowSizeChange:function(e,t){return M(t)},showSizeChanger:!0,total:p.count}})]})},Q=function(){return Object(T.jsx)(G,{})},U=n(219);t.default=function(){var e=Object(a.j)().path;return Object(T.jsxs)(a.d,{children:[Object(T.jsx)(a.b,{path:"".concat(e),exact:!0,component:Q}),Object(T.jsx)(a.b,{path:"".concat(e,"/:id"),exact:!0,component:B}),Object(T.jsx)(U.a,{})]})}}}]);
//# sourceMappingURL=10.02e0ee3b.chunk.js.map