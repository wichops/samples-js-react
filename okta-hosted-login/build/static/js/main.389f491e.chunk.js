(this["webpackJsonpsamples-js-react"]=this["webpackJsonpsamples-js-react"]||[]).push([[0],{311:function(e,t,a){e.exports=a(547)},546:function(e,t,a){},547:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),l=(a(316),a(280));"undefined"===typeof window.TextEncoder&&(window.TextEncoder=l.TextEncoder);var i=a(182),s=a(59),u=a(27),h=a(12),d={oidc:{clientId:"0oaen6xss2KFN4QC44x6",issuer:"https://dev-962067.okta.com/oauth2/default",redirectUri:"https://adoring-joliot-242a3b.netlify.app/implicit/callback",scopes:["openid","profile","email"],pkce:!0,disableHttpsCheck:"false"},apiUrl:"https://dry-cliffs-97591.herokuapp.com"},m=a(60),p=a.n(m),f=a(106),E=a(38),g=function(){var e=Object(u.useOktaAuth)(),t=e.authState,a=e.authService,c=Object(n.useState)(null),o=Object(E.a)(c,2),l=o[0],i=o[1];Object(n.useEffect)((function(){t.isAuthenticated?a.getUser().then((function(e){i(e)})):i(null)}),[t,a]);var s=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.login("/");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t.isPending?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h.d,{as:"h1"},"PKCE Flow w/ Okta Hosted Login Page"),t.isAuthenticated&&!l&&r.a.createElement("div",null,"Loading user information..."),t.isAuthenticated&&l&&r.a.createElement("div",null,r.a.createElement("p",null,"Welcome back,",l.name,"!"),r.a.createElement("p",null,"You have successfully authenticated against your Okta org, and have been redirected back to this application.  You now have an ID token and access token in local storage. Visit the"," ",r.a.createElement("a",{href:"/profile"},"My Profile")," ","page to take a look inside the ID token."),r.a.createElement("p",null,"Visit"," ",r.a.createElement("a",{href:"/server"},"Server Test")," ","to test communicating to a secure server route.")),!t.isAuthenticated&&r.a.createElement("div",null,r.a.createElement("p",null,"If you\u2018re viewing this page then you have successfully started this React application."),r.a.createElement("p",null,r.a.createElement("span",null,"This example shows you how to use the "),r.a.createElement("a",{href:"https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react"},"Okta React Library"),r.a.createElement("span",null," to add the "),r.a.createElement("a",{href:"https://developer.okta.com/docs/guides/implement-auth-code-pkce"},"PKCE Flow"),r.a.createElement("span",null," to your application.")),r.a.createElement("p",null,"When you click the login button below, you will be redirected to the login page on your Okta org. After you authenticate, you will be returned to this application with an ID token and access token.  These tokens will be stored in local storage and can be retrieved at a later time."),r.a.createElement(h.a,{id:"login-button",primary:!0,onClick:s},"Login"))))},v=function(){var e=Object(u.useOktaAuth)().authState,t=Object(n.useState)(null),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),i=Object(E.a)(l,2),s=i[0],m=i[1];Object(n.useEffect)((function(){if(e.isAuthenticated){var t=e.accessToken;fetch(d.apiUrl+"/api/messages",{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject()})).then((function(e){var t=0,a=e.map((function(e){var a=new Date(e.date),n=a.toLocaleDateString(),r=a.toLocaleTimeString();return t+=1,{date:"".concat(n," ").concat(r),text:e.text,id:"message-".concat(t)}}));o(a),m(!1)})).catch((function(e){m(!0),console.error(e)}))}}),[e]);return r.a.createElement("div",null,r.a.createElement(h.d,{as:"h1"},r.a.createElement(h.e,{name:"mail outline"}),"My Messages"),s&&r.a.createElement(h.h,{error:!0,header:"Failed to fetch messages.  Please verify the following:",list:["You've downloaded one of our resource server examples, and it's running on port 8000.","Your resource server example is using the same Okta authorization server (issuer) that you have configured this React application to use."]}),!c&&!s&&r.a.createElement("p",null,"Fetching Messages.."),c&&r.a.createElement("div",null,r.a.createElement("p",null,"This component makes a GET request to the resource server example, which must be running at",r.a.createElement("code",null,"localhost:8000/api/messages")),r.a.createElement("p",null,"It attaches your current access token in the"," ",r.a.createElement("code",null,"Authorization")," ","header on the request, and the resource server will attempt to authenticate this access token. If the token is valid the server will return a list of messages.  If the token is not valid or the resource server is incorrectly configured, you will see a 401"," ",r.a.createElement("code",null,"Unauthorized response"),"."),r.a.createElement("p",null,"This route is protected with the"," ",r.a.createElement("code",null,"<SecureRoute>")," ","component, which will ensure that this page cannot be accessed until you have authenticated and have an access token in local storage."),r.a.createElement(h.i,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Message"))),r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement("tr",{id:e.id,key:e.id},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.text))}))))))},k=function(){var e=Object(u.useOktaAuth)(),t=e.authState,a=e.authService,n=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.login("/"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.logout("/"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.g,{fixed:"top",inverted:!0},r.a.createElement(h.c,null,r.a.createElement(h.g.Item,{as:"a",header:!0,href:"/"},r.a.createElement(h.f,{size:"mini",src:"/react.svg"}),"\xa0 Okta-React Sample Project"),t.isAuthenticated&&r.a.createElement(h.g.Item,{id:"messages-button",as:"a",href:"/messages"},r.a.createElement(h.e,{name:"mail outline"}),"Messages"),r.a.createElement(h.g.Item,{as:"a",href:"/server"},"Test Server"),t.isAuthenticated&&r.a.createElement(h.g.Item,{id:"profile-button",as:"a",href:"/profile"},"Profile"),t.isAuthenticated&&r.a.createElement(h.g.Item,{id:"logout-button",as:"a",onClick:c},"Logout"),!t.isPending&&!t.isAuthenticated&&r.a.createElement(h.g.Item,{as:"a",onClick:n},"Login"))))},w=function(){var e=Object(u.useOktaAuth)(),t=e.authState,a=e.authService,c=Object(n.useState)(null),o=Object(E.a)(c,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){t.isAuthenticated?a.getUser().then((function(e){i(e)})).then((function(){var e=new Headers;e.append("Authorization","Bearer ".concat(t.accessToken)),fetch(".netlify/functions/secure",{headers:e}).then((function(e){return e.json()})).then((function(e){return console.info("AAH SI O QUE",e)}))})):i(null)}),[t,a]),l?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h.d,{as:"h1"},r.a.createElement(h.e,{name:"drivers license outline"})," ","My User Profile (ID Token Claims)"," "),r.a.createElement("p",null,"Below is the information from your ID token which was obtained during the \xa0",r.a.createElement("a",{href:"https://developer.okta.com/docs/guides/implement-auth-code-pkce"},"PKCE Flow")," ","and is now stored in local storage."),r.a.createElement("p",null,"This route is protected with the",r.a.createElement("code",null,"<SecureRoute>")," ","component, which will ensure that this page cannot be accessed until you have authenticated."),r.a.createElement(h.i,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Claim"),r.a.createElement("th",null,"Value"))),r.a.createElement("tbody",null,Object.entries(l).map((function(e){var t=e[0],a=e[1],n="claim-".concat(t);return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",{id:n},a))})))))):r.a.createElement("div",null,r.a.createElement("p",null,"Fetching user profile..."))},b=function(){var e=Object(u.useOktaAuth)().authState,t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(0),i=Object(E.a)(l,2),s=i[0],m=i[1],p=Object(n.useState)("{}"),f=Object(E.a)(p,2),g=f[0],v=f[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h.d,{as:"h1"},"Test your token on the server-side"),r.a.createElement(h.d,{as:"h2"},e.isAuthenticated?"Authenticated":"Not Authenticated")),r.a.createElement("div",{className:"ui divider"}),r.a.createElement("div",null,r.a.createElement(h.b,null,r.a.createElement(h.b.Content,null,r.a.createElement(h.b.Header,null,s),r.a.createElement(h.b.Description,null,r.a.createElement("code",null,g))),r.a.createElement(h.b.Content,null,r.a.createElement(h.a,{secondary:!0,loading:c,onClick:function(){o(!0);var t=new Headers;t.append("Authorization","Bearer ".concat(e.accessToken)),fetch("".concat(d.apiUrl,"/secure"),{headers:t}).then((function(e){return o(!1),m(e.status),e.text()})).then(v).catch(console.error)}},"Fetch secure endpoint")))))},y=function(){return r.a.createElement(i.BrowserRouter,null,r.a.createElement(u.Security,d.oidc,r.a.createElement(k,null),r.a.createElement(h.c,{text:!0,style:{marginTop:"7em"}},r.a.createElement(s.d,{path:"/",component:g}),r.a.createElement(s.d,{path:"/server",component:b}),r.a.createElement(s.d,{path:"/implicit/callback",component:u.LoginCallback}),r.a.createElement(u.SecureRoute,{path:"/messages",component:v}),r.a.createElement(u.SecureRoute,{path:"/profile",component:w}))))},O=(a(546),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[311,1,2]]]);
//# sourceMappingURL=main.389f491e.chunk.js.map