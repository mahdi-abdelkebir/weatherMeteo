(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(208)}])},208:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ue}});var a=t(5893),s=t(9008),i=t.n(s),r=t(7568),o=t(4924),c=t(655),l=[{id:"spring",name:"Spring",start:new Date(2e3,2,21),end:new Date(2e3,5,20)},{id:"summer",name:"Summer",start:new Date(2e3,5,21),end:new Date(2e3,8,20)},{id:"fall",name:"Autumn/Fall",start:new Date(2e3,8,21),end:new Date(2e3,11,20)},{id:"winter",name:"Winter",start:new Date(2e3,11,21),end:new Date(2001,2,20)}];function u(e,n){var t=new Date(2e3,e.start.getMonth(),e.start.getDate()),a=new Date(2e3,n.getMonth(),n.getDate()),s=new Date(2e3,e.end.getMonth(),e.end.getDate());return e.start.getFullYear()===e.end.getFullYear()?t<=a&&a<=s:t<=a&&a<=new Date(2e3,11,31)||new Date(2e3,0,1)<=a&&a<=s}var d=function(){var e=new Date,n=e.getTimezoneOffset();n=Math.abs(n/60),e.setHours(e.getHours()+n);var t=function(e,n){for(var t=0;t<e.length;t++)if(!0===u(e[t],n))return e[t];return null}(l,e);return null===t?{date:e,name:"No season"}:{date:e,id:t.id,name:t.name}},p=t(4883),f=t.n(p),m=t(3781),h=t.n(m),b="cdcc76cae64b4b0c44d0801a5373b09f";function g(){return(g=(0,r.Z)((function(){var e,n;return(0,c.__generator)(this,(function(a){switch(a.label){case 0:return t.g.navigator.geolocation?[3,1]:(alert("Geolocation is not supported by your browser"),[3,4]);case 1:return[4,_().catch((function(e){return console.warn("ERROR LOCATION: (".concat(e.code,"): ").concat(e.message)),null}))];case 2:return null==(e=a.sent())?[3,4]:(n=e.coords,[4,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+n.latitude+"&lon="+n.longitude+"&appid="+b).then((function(e){return e.json()})).catch((function(e){return console.warn("ERROR FETCH: (".concat(e.code,"): ").concat(e.message)),-1}))]);case 3:return[2,a.sent()];case 4:return[2,-1]}}))}))).apply(this,arguments)}function _(){return new Promise((function(e,n){navigator.geolocation.getCurrentPosition(e,n)}))}var v=function(){return g.apply(this,arguments)},y=t(7294),w=t(6502),x=t(1677),j=t(7953),k=t.n(j),S={particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"images",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},images:[{src:"../imgs/rain.png"}]},opacity:{value:1,random:!1,anim:{enable:!0,speed:.25,opacity_min:.4,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:4,size_min:2,sync:!0}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:1,width:20},move:{enable:!0,speed:10,direction:"bottom-right",random:!1,straight:!0,bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:12,speed:6},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},z={particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"images",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},images:[{src:"../imgs/clouds/cloud1.png"},{src:"../imgs/clouds/cloud2.png"},{src:"../imgs/clouds/cloud3.png"}]},opacity:{value:.25,random:!0,anim:{enable:!0,speed:.25,opacity_min:.05,sync:!1}},size:{value:150,random:!0,anim:{enable:!0,speed:3,size_min:50,sync:!0}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:1,width:20},move:{enable:!0,speed:1,direction:"left",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:12,speed:6},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},D={particles:{number:{value:15,density:{enable:!0,value_area:631.3280775270874}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:1.5,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},C={rain:S,snow:D,fall:{particles:{number:{value:10,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"images",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},images:[{src:"../imgs/autumn/autumn1.png"},{src:"../imgs/autumn/autumn2.png"},{src:"../imgs/autumn/autumn3.png"},{src:"../imgs/autumn/autumn4.png"}]},opacity:{value:1,random:!1,anim:{enable:!0,speed:.25,opacity_min:.4,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:4,size_min:2,sync:!0}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:1,width:20},move:{enable:!0,speed:10,direction:"bottom-right",random:!1,straight:!0,bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:12,speed:6},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},spring:{particles:{number:{value:10,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"images",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},images:[{src:"../imgs/spring/spring1.png"},{src:"../imgs/spring/spring2.png"}]},opacity:{value:1,random:!1,anim:{enable:!0,speed:.25,opacity_min:.4,sync:!1}},size:{value:20,random:!0,anim:{enable:!1,speed:4,size_min:2,sync:!0}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:1,width:20},move:{enable:!0,speed:10,direction:"bottom-right",random:!1,straight:!0,bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:12,speed:6},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},N={particles:{number:{value:355,density:{enable:!0,value_area:789.1476416322727}},color:{value:"#ffffff"},shape:{type:"star",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.48927153781200905,random:!1,anim:{enable:!0,speed:.2,opacity_min:0,sync:!1}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:83.91608391608392,size:1,duration:3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};function F(e){var n=e.seasonId,t=e.api,s=e.dayPart,i=(0,y.useState)("Clear"),o=i[0],l=i[1];(0,y.useEffect)((function(){var e=void 0;switch(t.weather.main){case"Rain":switch(e="rain",t.weather.description){case"light rain":S.particles.number.value=15;case"moderate rain":S.particles.number.value=30;default:S.particles.number.value=50}break;case"Snow":switch(e="snow",t.weather.description){case"light snow":D.particles.number.value=15;case"Snow":D.particles.number.value=30;default:D.particles.number.value=50}break;default:"Night"==s||"fall"!=n&&"spring"!=n||(e=n)}void 0!=e&&(C[e].particles.move.direction=-t.wind.deg,C[e].particles.move.speed=5*t.wind.speed,l(e))}),[]);var u=(0,y.useCallback)(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,x.R)(e)];case 1:return n.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),[]),d=(0,y.useCallback)(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){return console.log(e),[2]}))}));return function(n){return e.apply(this,arguments)}}(),[]);return"Clear"!=o?(0,a.jsx)(w.Z,{id:"background",init:u,loaded:d,className:k().particleArea,params:C[o]}):(0,a.jsx)(a.Fragment,{})}function I(e){var n=e.api;(0,y.useEffect)((function(){var e=n.wind.deg,t=n.wind.speed;e>90&&e<270&&(z.particles.move.direction="right"),z.particles.move.speed=t,z.particles.number.value=5+n.clouds.all%10}),[]);var t=(0,y.useCallback)(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,x.R)(e)];case 1:return n.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),[]),s=(0,y.useCallback)(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){return console.log(e),[2]}))}));return function(n){return e.apply(this,arguments)}}(),[]);return(0,a.jsx)(w.Z,{id:"clouds",init:t,loaded:s,className:k().particleArea,params:z})}function Z(){var e=(0,y.useCallback)(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,(0,x.R)(e)];case 1:return n.sent(),[2]}}))}));return function(n){return e.apply(this,arguments)}}(),[]),n=(0,y.useCallback)(function(){var e=(0,r.Z)((function(e){return(0,c.__generator)(this,(function(n){return console.log(e),[2]}))}));return function(n){return e.apply(this,arguments)}}(),[]);return(0,a.jsx)(w.Z,{id:"stars",init:e,loaded:n,className:k().particleArea,params:N})}var A=t(9583),T=t(7297),O=t(3935),R=t(9521);function E(){var e=(0,T.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 20px;\n  position: absolute;\n    right: 18px;\n    top: 5px\n"]);return E=function(){return e},e}function B(){var e=(0,T.Z)(["\nposition: relative;\n  background: #F2F2F2;\n  width: 350px;\n  height: fit-content;\n  border-radius: 15px;\n  padding: 20px;\n"]);return B=function(){return e},e}function P(){var e=(0,T.Z)(["\n  z-index: 100;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: right;\n  align-items: right;\n"]);return P=function(){return e},e}var M,X,Y,H,W,G,L,q,V=R.ZP.div(E()),J=R.ZP.div(B()),K=R.ZP.div(P()),Q=function(e){var n=e.show,t=e.onClose,s=e.children,i=e.title,r=(0,y.useState)(!1),o=r[0],c=r[1];(0,y.useEffect)((function(){c(!0)}),[]);var l=n?(0,a.jsx)(K,{children:(0,a.jsxs)(J,{children:[(0,a.jsx)(V,{children:(0,a.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t()},children:"x"})}),i&&(0,a.jsx)(StyledModalTitle,{children:i}),s]})}):null;return o?O.createPortal(l,document.getElementById("modal-root")):null},U=t(7218),$=t.n(U),ee=function(e){var n=e.degree,t=e.color;return(0,a.jsxs)("div",{className:$().container,children:[(0,a.jsx)("div",{children:(0,a.jsx)(A.x_l,{fontSize:18,style:{transform:"rotateZ("+n+"deg)",color:t}})}),(0,a.jsxs)("p",{style:{color:t},children:[" The wind direction is ",n," degrees "]})]})};function ne(e){var n,t=new Intl.DisplayNames(["en"],{type:"region"});switch(e.weather[0].main){case"Thunderstorm":n="The weather is currently pretty stormy";break;case"Drizzle":n="It's currently raining, but only drizzles.";break;case"Rain":n="It's raining...";break;case"Snow":n="It's snowing...";break;case"Clouds":n="The skies are pretty cloudy";break;case"Clear":n="The skies are clear.";break;case"Misty":n="It's getting a little misty.";break;case"Fog":n="It's getting a little foggy.";break;default:n=e.weather.main}var s=new Date(0);s.setSeconds(G);var i=new Date(0),r=new Date(0),o=new Date(0),c=new Date(0);r.setSeconds(Y),c.setSeconds(W.sunrise),i.setSeconds(H),o.setSeconds(W.sunset);var l=1.8*(e.main.temp-273)+32;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{children:[" ",n,(0,a.jsx)("img",{style:{width:"70px",display:"inline-block"},src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")})]}),(0,a.jsx)("br",{}),(0,a.jsx)("h3",{style:{fontSize:18},children:" Currently, "}),(0,a.jsxs)("p",{children:[" Country: ",t.of(e.sys.country)," "]}),(0,a.jsxs)("p",{children:[" Season : ",q.name]}),(0,a.jsxs)("p",{children:[" Time: ",s.toISOString().substring(11,19)," ( ",L," ) "]}),(0,a.jsxs)("p",{children:[" Sunset/Sunrise Progress : ",(100*X).toFixed(2),"%"]}),(0,a.jsxs)("p",{children:[" Daylight Brightness : ",M.toFixed(2),"%"]}),(0,a.jsx)("br",{}),(0,a.jsx)("h3",{style:{fontSize:18},children:" Weather Conditions: "}),(0,a.jsxs)("p",{children:[" Cloudiness: ",e.clouds.all,"% "]}),(0,a.jsxs)("p",{children:[" Humidity: ",e.main.humidity,"%  ( ",le(e.main.humidity)," ) "]}),(0,a.jsxs)("p",{children:[" Windspeed: ",e.wind.speed,"meter/s ( ",ce(e.wind.speed)," ) "]}),(0,a.jsxs)("p",{children:[" Temperature: ",l.toFixed(2),"\xb0F ( ",oe(l)," ) "]}),(0,a.jsx)("br",{}),(0,a.jsx)("h3",{style:{fontSize:18},children:" Day/Night time: "}),(0,a.jsxs)("p",{children:[" Sunrise: ",r.toISOString().substring(11,19)," (ends at ",c.toISOString().substring(11,19),") "]}),(0,a.jsxs)("p",{children:[" Sunset: ",i.toISOString().substring(11,19),"  (ends at ",o.toISOString().substring(11,19),") "]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:f().info_bottom_bar,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("i",{className:f().details_info,children:" Still in development.. "})," ",(0,a.jsx)("i",{className:f().details_info,children:" Refresh to get the latest updates.."})]}),(0,a.jsx)("button",{className:f().sandboxBtn,disabled:!0,children:" Sandbox Mode "})]})]})}var te=function(e,n){var t,a,s,i,r=function(e,n,t){return h()(e,n,t,"hex")};switch(Y=ie(new Date(1e3*n.sys.sunrise)),H=ie(new Date(1e3*n.sys.sunset)),W={sunrise:Y+7200,sunset:H+7200},G=ie(e),L=re()){case"Day":M=100,X=1,t="#0063a6",a="#0072c0",s="#ffffff";break;case"Sunrise":M=50+50/7200*(G-Y),t=r("#000000","#0063a6",X=(G-Y)/7200),a=r("#000000","#0072c0",X),s=r("#3F3F3F","#ffffff",X);break;case"Sunset":M=100-50/7200*(G-H),t=r("#0063a6","#000000",X=(G-H)/7200),a=r("#0072c0","#000000",X),s=r("#ffffff","#3F3F3F",X);break;case"Night":M=50,X=1,t="#000000",a="#000000",s="#3F3F3F"}return i={filter:"brightness("+M+"%)",backgroundImage:"-webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, "+t+"), color-stop(15%, "+a+"), color-stop(100%, "+s+"))"},(0,o.Z)(i,"backgroundImage","-moz-linear-gradient(top, "+t+" 0%, "+a+" 15%, "+s+" 100%)"),(0,o.Z)(i,"backgroundImage","-webkit-linear-gradient(top, "+t+" 0%, "+a+" 15%, "+s+" 100%)"),(0,o.Z)(i,"backgroundImage","linear-gradient(to bottom, "+t+" 0%, "+a+" 15%, "+s+" 100%)"),i},ae=function(){var e=(0,y.useState)(!1),n=e[0],t=e[1],s=(0,y.useState)(null),i=s[0],o=s[1],l=(0,y.useState)(null),u=l[0],p=l[1],m=(0,y.useState)(!1),b=m[0],g=m[1];return(0,y.useEffect)((0,r.Z)((function(){var e;return(0,c.__generator)(this,(function(n){switch(n.label){case 0:return[4,v()];case 1:return"object"===typeof(e=n.sent())&&null!==e&&(q=d(),p(e),o(te(q.date,e)),t(!0)),[2]}}))})),[]),n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:f().seasonsContainer,style:i,children:[(0,a.jsx)(F,{seasonId:q.id,api:u,dayPart:L}),(0,a.jsx)(I,{api:u}),"Night"==L&&(0,a.jsx)(Z,{}),(0,a.jsx)("a",{href:"#",id:q.id,className:"".concat(f().season," ").concat(se(q.id)," ").concat(f().active)}),(0,a.jsx)("span",{className:f().grass}),b&&(0,a.jsx)(Q,{onClose:function(){return g(!1)},show:b,children:ne(u)}),(0,a.jsxs)("button",{onClick:function(){g(!0)},className:f().optionsBtn,children:[" More details ",(0,a.jsx)(A.DAO,{style:{marginRight:5,display:"inline-block"}})," "]})]}),(0,a.jsx)(ee,{degree:u.wind.deg,color:h()("#A3A3A3","#000000",(M-50)/50,"hex")})]}):(0,a.jsxs)("div",{className:f().seasonsContainer+" "+f().loadingCenter,children:[(0,a.jsx)("p",{children:" Loading... "}),(0,a.jsx)("span",{className:f().grass})]})},se=function(e){switch(e){case"winter":return f().winter;case"fall":return f().fall;case"spring":return f().spring;case"summer":return f().summer}},ie=function(e){return 60*e.getHours()*60+60*e.getMinutes()+e.getSeconds()},re=function(){return G>=W.sunrise&&G<=H?"Day":G>=Y&&G<=W.sunrise?"Sunrise":G>=H&&G<=W.sunset?"Sunset":"Night"},oe=function(e){return e<=40?"Cold":e<=60?"Moderate":e<=91?"Warm":e<=110?"Hot":void 0},ce=function(e){return e<=1.34112?"Light Air":e<=3.12928?"Light Breeze":e<=5.36448?"Gentle Breeze":e<=10.729?"Fresh Breeze":e<=13.4112?"Strong Breeze":"Gale"},le=function(e){return e<40?"Too dry":e<70?"Average":"Too humid"};function ue(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("link",{rel:"stylesheet",href:"https://use.typekit.net/fqp8jsw.css"}),(0,a.jsx)("title",{children:"Weather"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})," "]}),(0,a.jsx)("div",{id:"modal-root"}),(0,a.jsx)(ae,{})]})}},7218:function(e){e.exports={container:"compass_container__r03I0"}},7953:function(e){e.exports={particleArea:"particles_particleArea__dn2OS"}},4883:function(e){e.exports={seasonsContainer:"seasons_seasonsContainer__V2XvF",grass:"seasons_grass__bqC_j",cloud:"seasons_cloud__gr7AR",cloud2:"seasons_cloud2__WjlwD",season:"seasons_season__NMsS8",active:"seasons_active__Y89PS",inactive:"seasons_inactive___Im04",spring:"seasons_spring__6gNrS",summer:"seasons_summer__EHx1r",fall:"seasons_fall__3KIB_",winter:"seasons_winter__VOGhx",loadingCenter:"seasons_loadingCenter__ATsAR",optionsBtn:"seasons_optionsBtn__JPX8l",sandboxBtn:"seasons_sandboxBtn__Fl7Zy",details_info:"seasons_details_info__78jpl",info_bottom_bar:"seasons_info_bottom_bar__wz2vq"}}},function(e){e.O(0,[445,991,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);