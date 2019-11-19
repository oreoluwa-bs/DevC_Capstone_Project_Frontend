(this.webpackJsonpdevc_capstone_project_frontend=this.webpackJsonpdevc_capstone_project_frontend||[]).push([[0],{30:function(e,t,a){},34:function(e,t,a){e.exports=a(52)},39:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(39),a(40),a(6)),s=a(10),m=a(5),i=(a(45),Object(m.b)(null,(function(e){return{signOut:function(){return e({type:"SIGNOUT_SUCCESS"})}}}))((function(e){return r.a.createElement("ul",{className:"nav-links float-md-right"},r.a.createElement("li",{className:"nav-item nav-btn"},r.a.createElement("button",{onClick:function(){e.signOut()},className:"btn-sm"},"Logout")))}))),u=Object(m.b)((function(e){return{auth:e.auth.auth}}))((function(e){var t=e.auth.token?r.a.createElement(i,null):r.a.createElement(d,null);return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav-links float-md-left"},r.a.createElement("li",{className:"nav-item nav-brand"},r.a.createElement(o.b,{to:"/DevC_Capstone_Project_Frontend/",className:"nav-link"},"Teamwork"))),t))})),d=function(){return null},h=a(12),p=a(17),E=a(18),v=a(20),g=a(19),f=a(21),N="http://localhost:5000/api/v1/auth",b=(a(30),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleTextChange=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError,a=e.auth;return console.log(a),a.token?r.a.createElement(s.a,{to:"/DevC_Capstone_Project_Frontend/"}):r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"form"},r.a.createElement("h4",{className:"text-center"},"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Email Address:"),r.a.createElement("input",{type:"text",className:"form-input",id:"email",placeholder:"john.doe@gmail.com",value:this.state.email,onChange:this.handleTextChange,autoFocus:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Password:"),r.a.createElement("input",{type:"password",className:"form-input",id:"password",value:this.state.password,onChange:this.handleTextChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement(o.b,{to:""},"Do not have an account?")),r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary float-md-right"},"Login")))),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component)),C=Object(m.b)((function(e){return{authError:e.auth.authError,auth:e.auth.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t){var n=new Request("".concat(N,"/signin"),{method:"POST",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})});fetch(n).then((function(t){t.json().then((function(t){"error"===t.status?e({type:"LOGIN_FAILED",data:t}):(localStorage.setItem("userId",t.data.userId),localStorage.setItem("userToken",t.data.token),e({type:"LOGIN_SUCCESS",data:t}))})).catch((function(t){e({type:"LOGIN_FAILED",data:t})}))})).catch((function(t){e({type:"LOGIN_FAILED",data:t})}))}));var a}}}))(b),y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={gender:"Male"},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleTextChange=function(e){a.setState(Object(h.a)({},e.target.id,e.target.value))},a.handleSelect=function(e){console.log(e.target.value)},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.userId?r.a.createElement(s.a,{to:"/DevC_Capstone_Project_Frontend/"}):r.a.createElement("div",{className:"container login-container signup-container"},r.a.createElement("div",{className:"form"},r.a.createElement("h4",{className:"text-center"},"Create an account"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement("p",null,"First name:"),r.a.createElement("input",{type:"text",className:"form-input",id:"firstname",placeholder:"John",onChange:this.handleTextChange,required:!0})),r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement("p",null,"Last name:"),r.a.createElement("input",{type:"text",className:"form-input",id:"lastname",placeholder:"Doe",onChange:this.handleTextChange,required:!0})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement("p",null,"Department:"),r.a.createElement("input",{type:"text",className:"form-input",id:"department",placeholder:"Accounting",onChange:this.handleTextChange,required:!0})),r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement("p",null,"Job role:"),r.a.createElement("input",{type:"text",className:"form-input",id:"jobrole",placeholder:"Manager",onChange:this.handleTextChange,required:!0})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-8"},r.a.createElement("p",null,"Address:"),r.a.createElement("input",{type:"text",className:"form-input",id:"address",placeholder:"64th King Street Wisconsin",onChange:this.handleTextChange,required:!0})),r.a.createElement("div",{className:"col-xs-12 col-sm-4 "},r.a.createElement("p",null,"Gender:"),r.a.createElement("select",{className:"form-input",value:this.state.gender,id:"gender",onChange:this.handleTextChange},r.a.createElement("option",{value:"Male"},"Male"),r.a.createElement("option",{value:"Female"},"Female"),r.a.createElement("option",{value:"Other"},"Other"))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Email Address:"),r.a.createElement("input",{type:"email",className:"form-input",id:"email",placeholder:"john.doe@gmail.com",onChange:this.handleTextChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Password:"),r.a.createElement("input",{type:"password",className:"form-input",id:"password",onChange:this.handleTextChange,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement(o.b,{to:"/login"},"Already have an account?")),r.a.createElement("div",{className:"col-xs-12 col-sm-6"},r.a.createElement("button",{type:"submit",className:"btn btn-primary float-md-right"},"Sign Up")))),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),O=Object(m.b)((function(e){return{authError:e.auth.authError,auth:e.auth.auth}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t){var n=new Request("".concat(N,"/create-user"),{method:"POST",body:JSON.stringify(a),headers:new Headers({"Content-Type":"application/json"})});fetch(n).then((function(t){t.json().then((function(t){"error"===t.status?e({type:"SIGNUP_FAILED",data:t}):e({type:"SIGNUP_SUCCESS",data:t})})).catch((function(t){e({type:"SIGNUP_FAILED",data:t})}))})).catch((function(t){e({type:"SIGNUP_FAILED",data:t})}))}));var a}}}))(y),S=(a(47),a(22)),j=a(23),x=Object(m.b)((function(e){return{auth:e.auth.auth}}))((function(e){var t=e.auth;return console.log(t),t.token?r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{display:"",marginTop:"50px"}},r.a.createElement("div",{className:"row dash-row"},r.a.createElement("div",{className:"col-xs-12 col-sm-3 col-md-2 col-lg-2"}),r.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-8 col-lg-8"},r.a.createElement("div",{className:"dashboard-tabbar"},r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"/",className:"nav-link",activeClassName:"activeRoute"},r.a.createElement(S.a,{icon:j.a,size:"2x"}),r.a.createElement("span",null,"My feed"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"",className:"nav-link"},r.a.createElement(S.a,{icon:j.c,size:"2x"}),r.a.createElement("span",null,"Post an article"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.c,{to:"",className:"nav-link"},r.a.createElement(S.a,{icon:j.b,size:"2x"}),r.a.createElement("span",null,"Post a gif")))))),r.a.createElement("div",{className:"dashboard-display"})),r.a.createElement("div",{className:"col-xs-12 col-sm-3 col-md-2 col-lg-2"})))):r.a.createElement(s.a,{to:"/DevC_Capstone_Project_Frontend/login"})}));a(51);var _=function(){return r.a.createElement("div",{className:""},r.a.createElement(o.a,null,r.a.createElement(u,null),r.a.createElement("div",{style:{marginTop:"2rem"}},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/DevC_Capstone_Project_Frontend/",component:x}),r.a.createElement(s.b,{path:"/DevC_Capstone_Project_Frontend/login",component:C}),r.a.createElement(s.b,{path:"/DevC_Capstone_Project_Frontend/signup",component:O})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(33),I=a(11);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=localStorage.getItem("userToken"),T={authError:null,auth:D?{userId:localStorage.getItem("userId"),token:D}:{userId:null,token:null}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILED":return k({},e,{authError:t.data.message});case"LOGIN_SUCCESS":return k({},e,{auth:t.data.data,authError:null});case"SIGNOUT_SUCCESS":return localStorage.removeItem("userToken"),k({},e,{authError:null,auth:{userId:null,token:null}});case"SIGNUP_SUCCESS":return console.log("Signup succesful"),k({},e,{auth:t.data.data,authError:null});case"SIGNUP_FAILED":return console.log("Signup unsuccessful"),k({},e,{authError:t.data.message});default:return e}},L=Object(I.c)({auth:F}),U=Object(I.d)(L,Object(I.a)(w.a));c.a.render(r.a.createElement(m.a,{store:U},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a5e5f730.chunk.js.map