(this["webpackJsonpchat-ui"]=this["webpackJsonpchat-ui"]||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(40),r=n.n(i),o=n(51),s=n.n(o),l=n(81),u=n(66),j=n(10),d=n(100),h=n(36),b=n(177),m=n(192),p=n(193),x=n(194),O=n(187),f=n(195),g=n(188),v=n(190),k=n(196),y=n(191),w=n(99),S=n.n(w),C=n(97),F=n.n(C),_=n(98),E=n.n(_),D=n.p+"static/media/gen.f60a9fed.png",T=n.p+"static/media/kohaku.b690fcd4.png",W=n.p+"static/media/senku.de65e8bb.png",B=n.p+"static/media/suika.09055d21.png",L=n.p+"static/media/tsukasa.b4ce7476.png",z="https://ishigami-chat.herokuapp.com/";function P(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(z,{method:"GET"});case 3:if((t=e.sent).ok){e.next=7;break}throw console.debug(JSON.stringify(t)),new Error("Received error from server: ".concat(t.statusText));case 7:e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error connecting to server: ".concat(e.t0)),new Error(e.t0);case 13:console.debug("Server is up.");case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var I=n(94),J=n.n(I),N=n(2),G="https://ishigami-chat.herokuapp.com/",H={gen:D,kohaku:T,senku:W,suika:B,tsukasa:L};var K=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),r=Object(j.a)(i,2),o=r[0],w=r[1],C=Object(a.useState)([]),_=Object(j.a)(C,2),D=_[0],T=_[1],W=Object(a.useState)(null),B=Object(j.a)(W,2),L=B[0],z=B[1],A=Object(a.useState)("none"),I=Object(j.a)(A,2),K=I[0],R=I[1],M=Object(a.useState)(!1),q=Object(j.a)(M,2),Q=q[0],U=q[1],V=Object(h.a)(),X=Object(b.a)(V.breakpoints.up("sm"));Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:(t=Object(d.a)(G,{})).on("user-joined",(function(){T((function(e){return e.concat({message:"Someone joined the chat room.",time:new Date})}))})),t.on("user-left",(function(){T((function(e){return e.concat({message:"Someone left the chat room.",time:new Date})}))})),t.on("chat-message",(function(e){T((function(t){var n;return t.concat(Object(l.a)(Object(l.a)({},e),{},{time:new Date,display_name:null!==(n=e.display_name)&&void 0!==n?n:"Anonymous"}))}))})),c(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var Y=function(){""!==o.trim()&&(w(""),n.emit("chat-message",{message:o,display_name:L,avatar_key:"none"===K?null:K}))};return n?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(m.a,{container:!0,direction:"column",style:{position:"absolute",bottom:0,paddingBottom:25,paddingRight:25,paddingLeft:25},children:[Object(N.jsx)(m.a,{item:!0,children:Object(N.jsx)(m.a,{container:!0,direction:"column",children:D.map((function(e){var t;return Object(N.jsx)(m.a,{item:!0,children:Object(N.jsxs)(m.a,{container:!0,direction:"row",sx:{py:2},wrap:"nowrap",children:[e.display_name?Object(N.jsx)(m.a,{item:!0,children:e.avatar_key?Object(N.jsx)(p.a,{alt:e.display_name,sx:{mr:1},src:H[e.avatar_key]}):Object(N.jsx)(p.a,{alt:e.display_name,sx:{mr:1},children:e.display_name.charAt(0)})}):Object(N.jsx)(m.a,{item:!0,children:Object(N.jsx)(p.a,{variant:"rounded",alt:"Info",sx:{mr:1,backgroundColor:"lightgray"},children:Object(N.jsx)(F.a,{})})}),Object(N.jsx)(m.a,{item:!0,children:Object(N.jsxs)(m.a,{container:!0,direction:"column",children:[Object(N.jsxs)(m.a,{item:!0,children:[Object(N.jsx)(x.a,{fontSize:14,fontWeight:"bold",lineHeight:"1rem",display:"inline",gutterBottom:!0,children:null!==(t=e.display_name)&&void 0!==t?t:"System"}),e.time&&Object(N.jsx)(O.a,{title:e.time.toLocaleString(),placement:"top",arrow:!0,children:Object(N.jsxs)(x.a,{fontSize:10,fontWeight:"light",lineHeight:"1rem",display:"inline",gutterBottom:!0,children:["\xa0 \xa0",e.time.toLocaleTimeString([],{hour:"numeric",minute:"numeric"})]})})]}),Object(N.jsx)(m.a,{item:!0,children:Object(N.jsx)(x.a,{variant:"body2",children:e.message})})]})})]})})}))})}),Object(N.jsx)(m.a,{item:!0,children:Object(N.jsxs)(m.a,{container:!0,direction:"row",children:[Object(N.jsx)(m.a,{item:!0,style:{display:"flex"},children:Object(N.jsx)(O.a,{title:"Edit Profile",placement:"top",arrow:!0,children:Object(N.jsx)(f.a,{onClick:function(){return U(!0)},variant:"outlined",children:Object(N.jsx)(E.a,{})})})}),Object(N.jsx)(m.a,{item:!0,sx:{flex:1,pl:1},children:Object(N.jsx)(g.a,{onChange:function(e){return w(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&Y()},value:o,autoFocus:!0,placeholder:"Chat with the village...",fullWidth:!0})}),Object(N.jsx)(m.a,{item:!0,style:{display:"flex"},children:Object(N.jsx)(f.a,{onClick:Y,variant:"contained",children:Object(N.jsx)(S.a,{})})})]})})]}),Object(N.jsx)(v.a,{open:Q,onClose:function(){return U(!1)},children:Object(N.jsxs)(k.a,{sx:{boxSizing:"border-box",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:X?400:"90%",bgcolor:"background.paper",boxShadow:24,p:4},children:[Object(N.jsx)(x.a,{variant:"h6",sx:{mb:2},children:"Profile"}),Object(N.jsx)(g.a,{label:"Display Name",onChange:function(e){return z(e.target.value)},value:L,fullWidth:!0,variant:"outlined",margin:"normal"}),Object(N.jsxs)(g.a,{label:"Avatar",onChange:function(e){return R(e.target.value)},value:K,fullWidth:!0,variant:"outlined",margin:"normal",select:!0,children:[Object(N.jsx)(y.a,{value:"none",children:"None"},0),Object(N.jsx)(y.a,{value:"senku",children:"Senku"},1),Object(N.jsx)(y.a,{value:"suika",children:"Suika"},2),Object(N.jsx)(y.a,{value:"gen",children:"Gen"},3),Object(N.jsx)(y.a,{value:"kohaku",children:"Kohaku"},4),Object(N.jsx)(y.a,{value:"tsukasa",children:"Tsukasa"},5)]}),Object(N.jsx)(f.a,{onClick:function(){return U(!1)},variant:"contained",size:"large",sx:{mt:2},fullWidth:!0,children:"Confirm"})]})})]}):Object(N.jsx)(J.a,{loading:!0,background:"#FFFFFF",loaderColor:"#3498db"})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(134),n(135),n(136),n(137),n(138);r.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(K,{})}),document.getElementById("root")),R()}},[[139,1,2]]]);
//# sourceMappingURL=main.db316f15.chunk.js.map