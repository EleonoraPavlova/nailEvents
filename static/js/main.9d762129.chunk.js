(this["webpackJsonpnails-event"]=this["webpackJsonpnails-event"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),i=a.n(n),r=(a(32),a(27)),l=a(12),o=(a(33),a(34),a(65)),j=a(8),b=a(0);function d(e){return Object(b.jsx)("div",{className:"topbar__social-wrap ".concat(e.additionalClasses?e.additionalClasses:""),children:Object(b.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"an",children:Object(b.jsx)("img",{src:"".concat("","/icon/").concat(e.iconName,".png"),alt:e.iconName})})})}var _=[{link:"https://www.instagram.com/nanotech_beauty/",iconName:"insta"},{link:"https://www.facebook.com/Nano-Tech-Beauty-105526615271644/?ref=pages_you_manage",iconName:"facebook"}];function O(){return Object(b.jsx)("div",{className:" flex",children:_.map((function(e){return Object(b.jsx)(d,Object(j.a)({},e),e.link)}))})}a(36);function m(){var e=Object(o.a)().t;return Object(b.jsx)("span",{className:"slogan",children:e("BANNER_SUBTITLE")})}a(42);function u(){return Object(b.jsx)("div",{className:"tel",children:Object(b.jsx)("a",{href:"tel:+380 99 525 4865",className:"text-middle fonts-white",children:"+38 099 525 4865"})})}function N(){var e=Object(o.a)().t;return Object(b.jsx)("header",{className:"topbar",children:Object(b.jsxs)("div",{className:"topbar__bg",children:[Object(b.jsxs)("div",{className:"topbar__main",children:[Object(b.jsx)("div",{className:"topbar__main-h1",children:Object(b.jsx)("h1",{className:"text-title-big topbar__main-title",children:"Nano Tech Beauty"})}),Object(b.jsx)("div",{className:"topbar__main-slogan",children:Object(b.jsx)(m,{})}),Object(b.jsx)("div",{className:"topbar__main-about",children:Object(b.jsx)("h4",{className:"text-title-less",children:e("ABOUT_TITLE")})})]}),Object(b.jsxs)("div",{className:"topbar__footer",children:[Object(b.jsx)("div",{className:"topbar__button flex-center",children:Object(b.jsx)("button",{type:"button",className:"topbar__button-inside text-small",children:e("REGISTRATION")})}),Object(b.jsxs)("div",{className:"topbar__social",children:[Object(b.jsx)("div",{className:"topbar__social-link flex-end",children:Object(b.jsx)(O,{})}),Object(b.jsx)("div",{className:"topbar__social-tel flex-end",children:Object(b.jsx)(u,{})})]})]})]})})}a(43),a(44);function h(e){return Object(b.jsx)("div",{className:"check-mark",children:Object(b.jsxs)("svg",{className:"check-mark__checkmark ".concat(e.additionalClassName),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[Object(b.jsx)("path",{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8",className:"check-mark__check"}),Object(b.jsx)("circle",{cx:"26",cy:"26",r:"25",fill:"none",className:"check-mark__circle"})]})})}function x(){var e=Object(o.a)().t;return Object(b.jsx)("main",{className:"about",id:"about",children:Object(b.jsxs)("div",{className:"about__container",children:[Object(b.jsx)("div",{className:"about__title",children:Object(b.jsx)("p",{className:"text-title uppercase-white",children:e("PROGRAM_TITLE")})}),Object(b.jsxs)("ul",{className:"about__decs",children:[Object(b.jsxs)("li",{className:"about__decs-item",children:[Object(b.jsx)("div",{className:"about__decs-check",children:Object(b.jsx)(h,{})}),Object(b.jsx)("p",{className:"text-normal uppercase-white",children:e("ABOUT_ITEM1")})]}),Object(b.jsxs)("li",{className:"about__decs-item",children:[Object(b.jsx)("div",{className:"about__decs-check",children:Object(b.jsx)(h,{})}),Object(b.jsx)("p",{className:"text-normal uppercase-white",children:e("ABOUT_ITEM3")})]}),Object(b.jsxs)("li",{className:"about__decs-item",children:[Object(b.jsx)("div",{className:"about__decs-check",children:Object(b.jsx)(h,{})}),Object(b.jsx)("p",{className:"text-normal uppercase-white",children:"Nail Fashion Show"})]}),Object(b.jsxs)("li",{className:"about__decs-item",children:[Object(b.jsx)("div",{className:"about__decs-check",children:Object(b.jsx)(h,{})}),Object(b.jsx)("p",{className:"text-normal uppercase-white",children:e("ABOUT_ITEM4")})]}),Object(b.jsxs)("li",{className:"about__decs-item",children:[Object(b.jsx)("div",{className:"about__decs-check",children:Object(b.jsx)(h,{})}),Object(b.jsx)("p",{className:"text-normal uppercase-white",children:e("ABOUT_ITEM5")})]})]})]})})}a(45);var E=a(24),T=a(15);function f(e){var t=e.value/90,a=Object(c.useState)(0),s=Object(T.a)(a,2),n=s[0],i=s[1],r=Object(c.useRef)();return Object(c.useEffect)((function(){r.current=setInterval((function(){i((function(e){return e+1}))}),1e3/30)}),[]),Object(c.useEffect)((function(){90===n&&clearInterval(r.current)}),[n]),Object(b.jsx)("span",{children:Math.floor(n*t)})}a(46);function v(e){var t=Object(o.a)().t,a=Object(E.a)({threshold:0}),c=a.ref,s=a.inView;return Object(b.jsxs)("div",{className:"statistic__wrapper flex-center",children:[Object(b.jsx)("div",{className:"statistic__inner-icon",children:Object(b.jsx)("img",{className:"statistic__icon",src:"".concat("","/icon/").concat(e.iconName,".png"),alt:e.iconName})}),Object(b.jsxs)("div",{ref:c,className:"statistic__num",children:[s?Object(b.jsx)(f,{value:e.number}):null,"+"]}),Object(b.jsx)("div",{className:"statistic__desc",children:t(e.description)})]})}var p=[{description:"STATISTICS_VISITORS",iconName:"visitors",number:1500},{description:"STATISTICS_NAILBUYERS",iconName:"nail-buyers",number:100},{description:"STATISTICS_COMPANY",iconName:"company",number:30},{description:"STATISTICS_EXPERTS",iconName:"experts",number:10}];function R(){return Object(b.jsx)("div",{className:"statistics wrapper",children:Object(b.jsx)("div",{className:"flex-between",children:p.map((function(e){return Object(b.jsx)(v,Object(j.a)({},e),e.iconName)}))})})}a(47);function A(){var e=Object(o.a)().t;return Object(b.jsx)("div",{className:"you-want wrapper",children:Object(b.jsxs)("div",{className:"you-want__left",children:[Object(b.jsx)("div",{className:"you-want__image",children:Object(b.jsx)("img",{src:"/images/horn.jpg",alt:"horn",target:"_blank"})}),Object(b.jsxs)("div",{className:"you-want__offer",children:[Object(b.jsx)("div",{className:"you-want__title",children:Object(b.jsx)("h4",{className:"text-title uppercase",children:e("YOU_WANT")})}),Object(b.jsx)("div",{className:"you-want__subtitle",children:Object(b.jsx)("h6",{className:"uppercase",children:e("YOU_WANT1")})}),Object(b.jsxs)("ul",{className:"you-want__box",children:[Object(b.jsx)("li",{className:"you-want__box-item",children:Object(b.jsxs)("div",{className:"you-want__box-check",children:[Object(b.jsx)("div",{className:"you-want__box-compon",children:Object(b.jsx)(h,{additionalClassName:"black"})}),Object(b.jsx)("p",{className:"text-big uppercase",children:e("YOU_WANT2")})]})}),Object(b.jsx)("li",{className:"you-want__box-item",children:Object(b.jsxs)("div",{className:"you-want__box-check",children:[Object(b.jsx)("div",{className:"you-want__box-compon",children:Object(b.jsx)(h,{additionalClassName:"black"})}),Object(b.jsx)("p",{className:"text-big uppercase",children:e("YOU_WANT3")})]})}),Object(b.jsx)("li",{className:"you-want__box-item",children:Object(b.jsxs)("div",{className:"you-want__box-check",children:[Object(b.jsx)("div",{className:"you-want__box-compon",children:Object(b.jsx)(h,{additionalClassName:"black"})}),Object(b.jsx)("p",{className:"text-big uppercase",children:e("YOU_WANT4")})]})}),Object(b.jsx)("li",{className:"you-want__box-item",children:Object(b.jsxs)("div",{className:"you-want__box-check",children:[Object(b.jsx)("div",{className:"you-want__box-compon",children:Object(b.jsx)(h,{additionalClassName:"black"})}),Object(b.jsx)("p",{className:"text-big uppercase",children:e("YOU_WANT5")})]})})]})]})]})})}a(48),a(49);function I(e){var t=Object(o.a)().t;return Object(b.jsxs)("div",{className:"measure flex-center",children:[Object(b.jsx)("div",{className:"measure__wrapper-icon",children:Object(b.jsx)("img",{className:"measure-icon",src:"".concat("","/icon/").concat(e.iconName,".png"),alt:e.iconName})}),Object(b.jsx)("div",{className:"measure__title",children:t(e.title)}),Object(b.jsx)("div",{className:"measure__subtitle text-regular",children:t(e.subtitle)})]})}var g=[{title:"PROTECTION_MEANS",subtitle:"PROTECTION_MEANS_SUBTITLE",iconName:"masked"},{title:"TEMPERATURE_SCREENING",subtitle:"TEMPERATURE_SCREENING_SUBTITLE",iconName:"scanning"},{title:"FOOD_TITLE",subtitle:"FOOD_SUBTITLE",iconName:"food"},{title:"PASSPORT_TITLE",subtitle:"",iconName:"passport"},{title:"RESTRICTIONS_TITLE",subtitle:"RESTRICTIONS_SUBTITLE",iconName:"restrictions"},{title:"DISTANCE_TITLE",subtitle:"DISTANCE_SUBTITLE",iconName:"distance"}];function S(){return g.map((function(e){return Object(b.jsx)(I,Object(j.a)({},e),e.iconName)}))}function M(){var e=Object(o.a)().t;return Object(b.jsxs)("div",{className:"safety__wrapper",children:[Object(b.jsx)("div",{className:"safety__title",children:Object(b.jsx)("h2",{children:e("SAFETY_MEASURES")})}),Object(b.jsx)("div",{className:"safety__measures",children:Object(b.jsx)(S,{})})]})}function y(){var e=Object(o.a)().t;return Object(b.jsx)("div",{className:"draw",children:Object(b.jsx)("div",{children:Object(b.jsx)("iframe",{title:e("ROAD_MAP"),src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.9340115481375!2d30.49511807773916!3d50.49093318474408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd3205b54bf5%3A0x80adff4aa7e7e5c6!2sPochayna%20Event%20Hall!5e0!3m2!1sru!2sua!4v1636026688456!5m2!1sru!2sua",width:"100%",height:"500",allowFullScreen:"",loading:"lazy"})})})}a(50),a(51),a(52);function w(e){var t=Object(o.a)().t;return Object(b.jsx)("div",{className:"flex-center  button-learn "+e.additionalClasses,children:Object(b.jsx)("button",{type:"button",className:"button-learn__button-inside",children:t(e.textbtn)})})}function L(e){var t=Object(o.a)().t;return Object(b.jsxs)("div",{className:"learn-box flex",children:[Object(b.jsx)("div",{className:"learn-box__title",children:t(e.title)}),Object(b.jsx)(w,{additionalClasses:e.additionalClasses,textbtn:e.textbtn})]})}var U=[{title:"LEARN_MORE",classes:"learn-box__button-blue",textbtn:"LEARN_MORE_WRITE"},{title:"LEARN_MORE1",classes:"learn-box__button-pink",textbtn:"LEARN_MORE_WRITE1"},{title:"LEARN_MORE_US",classes:"learn-box__button-orang",textbtn:"LEARN_MORE_WRITE2"},{title:"LEARN_MORE_MASTER",classes:"learn-box__button-darkblue",textbtn:"LEARN_MORE_WRITE3"},{title:"LEARN_MORE_LOGO",classes:"learn-box__button-green",textbtn:"LEARN_MORE_WRITE4"}];function C(){return Object(b.jsx)("div",{className:"more",children:Object(b.jsx)("div",{className:"flex-between",children:U.map((function(e){return Object(b.jsx)(L,{title:e.title,additionalClasses:e.classes,textbtn:e.textbtn},e.title)}))})})}function k(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{}),Object(b.jsx)(x,{}),Object(b.jsx)(R,{}),Object(b.jsx)(A,{}),Object(b.jsx)(C,{}),Object(b.jsx)(M,{}),Object(b.jsx)(y,{})]})}a(53);function P(){var e=Object(o.a)().t;return Object(b.jsxs)("div",{className:"for-buyers",children:[Object(b.jsx)("div",{className:"for-buyers__image"}),Object(b.jsx)("div",{className:"for-buyers__text"}),Object(b.jsx)("div",{className:"for-buyers",children:Object(b.jsx)("button",{type:"button",className:"for-buyers__button text-normal fonts-white",children:e("BUY_TICKET")})})]})}function B(){return Object(b.jsx)("div",{children:Object(b.jsx)(P,{})})}var W={ua:{translation:{NAV_MENU_PLAN:"\u041fpo \u0437\u0430\u0445i\u0434",NAV_MENU_REGISTER:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f/\u043a\u0432\u0438\u0442\u043a\u0438",NAV_MENU_PARTICIPANTS:"\u0423\u0447\u0430\u0441\u043d\u0438\u043a\u0438",NAV_MENU_SPEAKERS:"\u0421\u043f\u0456\u043a\u0435\u0440\u0438",NAV_MENU_DISCO:"\u041d\u043e\u0432\u043e\u0440\u0456\u0447\u043d\u0430 \u0434\u0438\u0441\u043a\u043e\u0442\u0435\u043a\u0430",BANNER_SUBTITLE:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439 - \u0431\u0435\u0437\u043b\u0456\u0447 \u0456\u043d\u043d\u043e\u0432\u0430\u0446\u0456\u0439 \u2013 \u043c\u043e\u0440\u0435 \u0437\u0430\u0434\u043e\u0432\u043e\u043b\u0435\u043d\u044c",REGISTRATION:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",BANNER_DATE:"15 \u0433\u0440\u0443\u0434\u043d\u044f / \u0441\u0435\u0440\u0435\u0434\u0430",ABOUT_TITLE:"\u041d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0438\u0439 \u0432 \u0404\u0432\u0440\u043e\u043f\u0456, \u041f\u0435\u0440\u0448\u0438\u0439 \u043c\u0456\u0436\u043d\u0430\u0440\u043e\u0434\u043d\u0438\u0439 \u0444\u043e\u0440\u0443\u043c \u043d\u0456\u0433\u0442\u044c\u043e\u0432\u043e\u0457 \u0456\u043d\u0434\u0443\u0441\u0442\u0440\u0456\u0457",ABOUT_ITEM1:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0456\u044f \u043d\u043e\u0432\u0438\u0445 \u043a\u043e\u043b\u0435\u043a\u0446\u0456\u0439 2022 \u0440\u043e\u043a\u0443 \u0432\u0456\u0434 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0445 \u0441\u0432\u0456\u0442\u043e\u0432\u0438\u0445 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432",ABOUT_ITEM3:"\u0412\u0438\u0441\u0442\u0443\u043f\u0438 \u0422\u043e\u043f-\u0441\u043f\u0456\u043a\u0435\u0440\u0456\u0432 \u0456\u043d\u0434\u0443\u0441\u0442\u0440\u0456\u0457 \u043a\u0440\u0430\u0441\u0438",ABOUT_ITEM4:"\u041d\u0430\u0439\u043d\u043e\u0432\u0456\u0448\u0456 \u0442\u0440\u0435\u043d\u0434\u0438 \u0442\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0456\u0457 \u0432\u0456\u0434 \u043c\u0430\u0439\u0441\u0442\u0440\u0456\u0432 \u043d\u0456\u0433\u0442\u044c\u043e\u0432\u043e\u0457 \u0435\u0441\u0442\u0435\u0442\u0438\u043a\u0438",ABOUT_ITEM5:"\u041d\u043e\u0432\u043e\u0440\u0456\u0447\u043d\u0438\u0439 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432 \xabNail New Year\xbb \u043f\u0456\u0434 \u0437\u0430\u043f\u0430\u043b\u044e\u044e\u0447\u0438\u0439 \u0441\u0443\u043f\u0440\u043e\u0432\u0456\u0434 \u043a\u0430\u0432\u0454\u0440-\u0431\u0435\u043d\u0434 \xabWunderkind\xbb",ROAD_MAP:"\u041a\u0430\u0440\u0442\u0430 \u043f\u0440\u043e\u0457\u0437\u0434\u0443",LOCATION:"\u0422\u0426 \xabGorodok Gallery\xbb",STATISTICS_VISITORS:"\u0412\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0447\u0456\u0432 \u043f\u043e\u0432\u044f\u0437\u0430\u043d\u0438\u0445 \u0437 \u043d\u0435\u0439\u043b \u0456\u043d\u0434\u0443\u0441\u0442\u0440\u0456\u0454\u044e",STATISTICS_NAILBUYERS:"\u041d\u0435\u0439\u043b \u0431\u0430\u0439\u0435\u0440\u0456\u0432 \u0432\u0456\u0437\u044c\u043c\u0443\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u044c \u0443 \u0437\u0430\u0445\u043e\u0434\u0456",STATISTICS_COMPANY:"\u041a\u043e\u043c\u043f\u0430\u043d\u0456\u0439 \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 \u0432\u0456\u0437\u044c\u043c\u0443\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u044c \u0443 \u043f\u043e\u0434\u0456\u0457",STATISTICS_EXPERTS:"\u0412\u0441\u0435\u0441\u0432\u0456\u0442\u043d\u044c\u043e \u0432\u0456\u0434\u043e\u043c\u0438\u0445 \u0435\u043a\u0441\u043f\u0435\u0440\u0442\u0456\u0432 \u0441\u0435\u0440\u0435\u0434 \u043d\u0430\u0448\u0438\u0445 \u0441\u043f\u0456\u043a\u0435\u0440\u0456\u0432",PROGRAM_TITLE:"\u041f\u043b\u0430\u043d \u0437\u0430\u0445\u043e\u0434\u0443 ",PROGRAM_ITEM:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",PROGRAM_ITEM1:"\u041f\u0440\u0430\u0446\u044e\u0454 DJ",PROGRAM_ITEM2:"\u0412\u0456\u0442\u0430\u043b\u044c\u043d\u0435 \u0441\u043b\u043e\u0432\u043e \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0430\u0442\u043e\u0440\u0456\u0432",PROGRAM_ITEM3:"\u041f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438",PROGRAM_ITEM4:"\u0428\u043e\u0443 Nail Fashion Day",PROGRAM_ITEM5:"\u041d\u043e\u0432\u043e\u0440\u0456\u0447\u043d\u0438\u0439 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432",PROGRAM_ITEM6:"\u0421\u043f\u0456\u043a\u0435\u0440",BUTTON_CLICK:"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438",BUTTON_ALL:"\u0412\u0441\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0430",SAFETY_MEASURES:"\u0417\u0430\u0445\u043e\u0434\u0438 \u0431\u0435\u0437\u043f\u0435\u043a\u0438",PROTECTION_MEANS:"\u0417\u0430\u0445\u043e\u0434\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0443",PROTECTION_MEANS_SUBTITLE:"\u0412\u0445\u0456\u0434 \u043d\u0430 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0456\u044e \u0442\u0456\u043b\u044c\u043a\u0438 \u0432 \u043c\u0430\u0441\u0446\u0456. \u041d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0430\u043d\u0442\u0438\u0441\u0435\u043f\u0442\u0438\u043a\u0456\u0432 \u043f\u043e \u043f\u0435\u0440\u0438\u043c\u0435\u0442\u0440\u0443 \u043f\u0440\u0438\u043c\u0456\u0449\u0435\u043d\u043d\u044f",TEMPERATURE_SCREENING:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u0438\u0439 \u0441\u043a\u0440\u0456\u043d\u0456\u0433 \u043d\u0430 \u0432\u0445\u043e\u0434\u0456.",TEMPERATURE_SCREENING_SUBTITLE:"\u0412\u0438\u043c\u0456\u0440\u044e\u0432\u0430\u043d\u043d\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0438 \u0442\u0456\u043b\u0430 \u043a\u043e\u0436\u043d\u043e\u043c\u0443 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0447\u0443.",FOOD_TITLE:"\u0411\u0435\u0437\u043f\u0435\u0447\u043d\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f",FOOD_SUBTITLE:"\u041f\u0456\u0434 \u0447\u0430\u0441 \u043a\u0430\u0432\u0430-\u0431\u0440\u0435\u0439\u043a\u0443 \u043a\u043e\u0436\u043d\u0456\u0439 \u043b\u044e\u0434\u0438\u043d\u0456 \u043d\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0456\u043d\u0434\u0456\u0432\u0456\u0434\u0443\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u043e\u0441\u0443\u0434",PASSPORT_TITLE:"\u041f\u041b\u0420-\u0442\u0435\u0441\u0442 \u0430\u0431\u043e \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u0432\u0430\u043a\u0446\u0438\u043d\u0430\u0446\u0456\u0457",RESTRICTIONS_TITLE:"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0456\u0441\u0442\u044c \u0432\u0438\u043c\u043e\u0433\u0430\u043c \u041c\u041e\u0417",RESTRICTIONS_SUBTITLE:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0447\u0456\u0432 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u0430 \u0437\u0433\u0456\u0434\u043d\u043e \u0437 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043c\u0430\u0441\u043e\u0432\u0438\u0445 \u0437\u0430\u0445\u043e\u0434\u0456\u0432.",DISTANCE_TITLE:"\u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0435 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0456\u044e\u0432\u0430\u043d\u043d\u044f",DISTANCE_SUBTITLE:"\u0412\u0456\u0434\u0441\u0442\u0430\u043d\u044c \u043c\u0456\u0436 \u0441\u0442\u0456\u043b\u044c\u0446\u044f\u043c\u0438 \u0443 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446-\u0437\u0430\u043b\u0456 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 1,5 \u043c\u0435\u0442\u0440\u0430.",FOOTER_COL_ADVERTISING:"\u0420\u043e\u0437\u0440\u043e\u0431\u043a\u0430 \u0442\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0441\u0430\u0439\u0442\u0443",STILL:"\u0404 \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f \u0449\u043e\u0434\u043e \u043f\u043e\u0434\u0456\u0457?",STILL_WRITE:"\u041f\u0438\u0448\u0438 \u043d\u0430\u043c!",BUY_TICKET:"\u041a\u0443\u043f\u0438\u0442\u0438 \u043a\u0432\u0438\u0442\u043e\u043a",MASTERS:"\u043c\u0430\u0439\u0441\u0442\u0440\u0430\u043c",MEMBERS:"\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c",BUYERS:"\u0431\u0430\u0439\u0435\u0440\u0430\u043c",LEARN_MORE:"\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u0438\u0441\u044f \u043f\u0438\u0442\u0430\u043d\u043d\u044f? \u041d\u0430\u043f\u0438\u0448\u0438 \u043d\u0430\u043c!",LEARN_MORE_WRITE:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u0438",LEARN_MORE1:"\u0412\u0438\u0440\u043e\u0431\u043d\u0438\u043a? \u0412\u0456\u0437\u044c\u043c\u0438 \u0443\u0447\u0430\u0441\u0442\u044c!",LEARN_MORE_WRITE1:"\u041f\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u044f\u0432\u0443",LEARN_MORE_US:"\u0413\u043e\u0442\u043e\u0432\u0438\u0439 \u043a\u0440\u0443\u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u043f\u0440\u043e \u043d\u0430\u0441? \u0421\u043f\u0456\u0432\u043f\u0440\u0430\u0446\u044e\u0439!",LEARN_MORE_WRITE2:"\u0421\u043f\u0456\u0432\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438",LEARN_MORE_MASTER:"\u0414\u043e\u0441\u0432\u0456\u0434\u0447\u0435\u043d\u0438\u0439 \u043c\u0430\u0439\u0441\u0442\u0435\u0440 \u0430\u0431\u043e \u043d\u043e\u0432\u0430\u0447\u043e\u043a? \u041f\u0440\u0438\u0454\u0434\u043d\u0443\u0439\u0441\u044f!",LEARN_MORE_WRITE3:"\u041f\u0440\u0438\u0454\u0434\u043d\u0430\u0442\u0438\u0441\u044f",LEARN_MORE_LOGO:"\u0425\u043e\u0447\u0435\u0448, \u0449\u043e\u0431 \u0443\u0441\u0456 \u0431\u0430\u0447\u0438\u043b\u0438 \u0442\u0432\u043e\u0454 \u043b\u043e\u0433\u043e? \u0421\u043f\u043e\u043d\u0441\u0443\u0439!",LEARN_MORE_WRITE4:"\u0421\u043f\u043e\u043d\u0441\u043e\u0440\u0443\u0432\u0430\u0442\u0438",YOU_WANT:"\u041d\u0430\u0439\u0441\u0443\u0447\u0430\u0441\u043d\u0456\u0448\u0438\u0439 Fashion Day \u0456\u043d\u0434\u0443\u0441\u0442\u0440\u0456\u0457 \u043a\u0440\u0430\u0441\u0438!",YOU_WANT1:"\u042f\u043a\u0449\u043e \u0432\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435:",YOU_WANT2:"\u0434\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f \u043f\u0435\u0440\u0448\u0438\u043c\u0438 \u043f\u0440\u043e \u0442\u0440\u0435\u043d\u0434\u0438 \u0441\u0435\u0437\u043e\u043d\u0443 2022",YOU_WANT3:"\u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u043d\u043a\u0438 \u0441\u0432\u0456\u0442\u043e\u0432\u0438\u0445 \u0431\u0440\u0435\u043d\u0434\u0456\u0432",YOU_WANT4:"\u043f\u043e\u0447\u0443\u0442\u0438 \u043f\u0440\u043e \u0442\u0435\u043d\u0434\u0435\u043d\u0446\u0456\u0457 \u043d\u0456\u0433\u0442\u044c\u043e\u0432\u043e\u0457 \u0456\u043d\u0434\u0443\u0441\u0442\u0440\u0456\u0457 \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u044c\u043e\u0433\u043e",YOU_WANT5:"\u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043d\u043e\u0432\u0456 \u0456\u0434\u0435\u0457 \u0442\u0430 \u043a\u0440\u0443\u0442\u0456 \u0437\u0432'\u044f\u0437\u043a\u0438"}},en:{translation:{NAV_MENU_PLAN:"About the event",NAV_MENU_REGISTER:"Registration/tickets",NAV_MENU_PARTICIPANTS:"Participants",NAV_MENU_SPEAKERS:"Speakers",NAV_MENU_DISCO:"New Year's disco",BANNER_SUBTITLE:"Maximum opportunities - many innovations - dozens of fun",REGISTRATION:"Registration",BANNER_DATE:"15th of December / Wednesday",ABOUT_TITLE:"The largest in Europe, the first international forum of nail industry",ABOUT_ITEM1:"Presentation of new collections in 2022 from the world's best manufacturers",ABOUT_ITEM3:"Speeches by top speakers of the beauty industry",ABOUT_ITEM4:"The latest trends and technologies from masters of nail aesthetics",ABOUT_ITEM5:'New Year\'s corporate party " Nail New Year" accompanied by an incendiary cover band  " Wunderkind"',ROAD_MAP:"Road map",LOCATION:'Shopping center " Gorodok Gallery" ',STATISTICS_VISITORS:"Visitors associated with the nail industry",STATISTICS_NAILBUYERS:"Nail buyers will take part in the event",STATISTICS_COMPANY:"Manufacturers will take part in the event",STATISTICS_EXPERTS:"World-renowned experts among our speakers",PROGRAM_TITLE:"Event plan",PROGRAM_ITEM:"Registration",PROGRAM_ITEM1:"The DJ works",PROGRAM_ITEM2:"Welcome speech from the organizers",PROGRAM_ITEM3:"Presentations",PROGRAM_ITEM4:"Nail Fashion Day show",PROGRAM_ITEM5:"New Years corporate party",PROGRAM_ITEM6:"Speaker",BUTTON_CLICK:"Collapse",BUTTON_ALL:"All program",SAFETY_MEASURES:"Safety measures",PROTECTION_MEANS:"Means of protection",PROTECTION_MEANS_SUBTITLE:"Admission to the conference is only in a mask. Antiseptics around the perimeter.",TEMPERATURE_SCREENING:"Temperature screening on entrance",TEMPERATURE_SCREENING_SUBTITLE:"Measurement of body temperature for each visitor.",FOOD_TITLE:"Safe food",FOOD_SUBTITLE:"During the coffee break, each person is given individual dishes.",PASSPORT_TITLE:"PCR test or a vaccination certificate",RESTRICTIONS_TITLE:"Compliance with requirements of the Ministry of Healthcare of Ukraine",RESTRICTIONS_SUBTITLE:"The number of attendees is restricted in accordance with the rules of holding mass events.",DISTANCE_TITLE:"Social distancing",DISTANCE_SUBTITLE:"The distance between chairs in the conference hall is not less than 1.5 meters.",FOOTER_COL_ADVERTISING:"Website development and creation",STILL:"Still have questions about the event?",STILL_WRITE:"Write to us!",BUY_TICKET:"buy a ticket",MASTERS:"masters",MEMBERS:"members",BUYERS:"buyers",LEARN_MORE:"Do you still have questions? Write to us!",LEARN_MORE_WRITE:"To write",LEARN_MORE1:"Are you a manufacturer? Take part!",LEARN_MORE_WRITE1:"Apply",LEARN_MORE_US:"Ready to write cool about us? Collaborate!",LEARN_MORE_WRITE2:"Cooperate",LEARN_MORE_MASTER:"Experienced master or beginning? Join us!",LEARN_MORE_WRITE3:"Join",LEARN_MORE_LOGO:"Do you want everyone to see your logo? Sponsor!",LEARN_MORE_WRITE4:"To sponsor",YOU_WANT:"Most modern Fashion Day in beauty industry!",YOU_WANT1:"If you want:",YOU_WANT2:"be the first to know about the trends of the season 2022",YOU_WANT3:"test new items of world brands",YOU_WANT4:"hear about the trends of the nail industry of the future",YOU_WANT5:"get new ideas and cool connections"}}},G=a(10);function Y(e){var t=Object(o.a)().t;return Object(b.jsx)("li",{className:e.additionalClasses,children:Object(b.jsx)(G.b,{to:e.href,children:t(e.localizationKey)})})}var D=[{href:{pathname:"/",hash:"#about"},localizationKey:"NAV_MENU_PLAN"},{href:"/tickets",localizationKey:"NAV_MENU_REGISTER"},{href:"#Participants",localizationKey:"NAV_MENU_PARTICIPANTS"},{href:"#Speakers",localizationKey:"NAV_MENU_SPEAKERS"}];function V(e){return D.map((function(t){return Object(b.jsx)(Y,Object(j.a)({additionalClasses:e.additionalClasses},t),t.localizationKey)}))}var F,z,K;a(62);function J(){return Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(G.b,{to:"/",children:Object(b.jsx)("img",{src:"/icon/logo.png",alt:"logo"})})})}var H=["title","titleId"];function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},q.apply(this,arguments)}function X(e,t){if(null==e)return{};var a,c,s=function(e,t){if(null==e)return{};var a,c,s={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function Z(e,t){var a=e.title,s=e.titleId,n=X(e,H);return c.createElement("svg",q({width:26,height:21,viewBox:"0 0 26 21",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},n),a?c.createElement("title",{id:s},a):null,F||(F=c.createElement("rect",{width:20,height:3,rx:1.5})),z||(z=c.createElement("rect",{x:7,y:9,width:19,height:3,rx:1.5})),K||(K=c.createElement("rect",{y:18,width:20,height:3,rx:1.5})))}var Q,$,ee,te=c.forwardRef(Z),ae=(a.p,["title","titleId"]);function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},ce.apply(this,arguments)}function se(e,t){if(null==e)return{};var a,c,s=function(e,t){if(null==e)return{};var a,c,s={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function ne(e,t){var a=e.title,s=e.titleId,n=se(e,ae);return c.createElement("svg",ce({width:32,height:32,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},n),Q||(Q=c.createElement("defs",null,c.createElement("style",null,".cls-1{fill:none;}"))),a?c.createElement("title",{id:s},a):null,$||($=c.createElement("g",null,c.createElement("title",null,"background"),c.createElement("rect",{fill:"none",id:"canvas_background",height:402,width:582,y:-1,x:-1}))),ee||(ee=c.createElement("g",null,c.createElement("title",null,"Layer 1"),c.createElement("g",{id:"Layer_2"},c.createElement("path",{id:"svg_1",d:"m16,29a13,13 0 1 1 13,-13a13,13 0 0 1 -13,13zm0,-24a11,11 0 1 0 11,11a11,11 0 0 0 -11,-11z"}),c.createElement("path",{id:"svg_2",d:"m11.76,21.24a1,1 0 0 1 -0.71,-0.29a1,1 0 0 1 0,-1.41l8.49,-8.49a1,1 0 0 1 1.46,1.41l-8.54,8.54a1,1 0 0 1 -0.7,0.24z"}),c.createElement("path",{id:"svg_3",d:"m20.24,21.24a1,1 0 0 1 -0.7,-0.29l-8.49,-8.49a1,1 0 0 1 1.41,-1.41l8.54,8.49a1,1 0 0 1 0,1.46a1,1 0 0 1 -0.76,0.24z"})),c.createElement("g",{id:"frame"},c.createElement("rect",{id:"svg_4",width:32,height:32,className:"cls-1"})))))}var ie=c.forwardRef(ne);a.p;function re(){var e=Object(o.a)(),t=e.t,a=e.i18n,s=Object(c.useState)(!1),n=Object(T.a)(s,2),i=n[0],r=n[1],l=a.language;return Object(b.jsxs)("div",{className:"navigationbar__wrapper",children:[Object(b.jsx)("div",{className:"navigationbar__wrapper-buttonlng",children:Object(b.jsx)("button",{className:"navigationbar__button-lng text-middle",onClick:function(){return a.changeLanguage("ua"===l?"en":"ua")},children:"ua"===l?"en":"ua"})}),Object(b.jsxs)("div",{className:"navigationbar__wrapper-nav",children:[Object(b.jsxs)("ul",{className:"navigationbar__box",children:[Object(b.jsx)("li",{className:"navigationbar__logo",children:Object(b.jsx)(J,{})}),Object(b.jsx)("div",{className:"links-wrapper ".concat(i?"visible":null),children:Object(b.jsx)(V,{additionalClasses:"text-middle navigationbar__box-item uppercase"})})]}),Object(b.jsx)("button",{className:"navigationbar__button-mobile",onClick:function(){return r(!i)},children:i?Object(b.jsx)("span",{className:"navigation__button-close",children:Object(b.jsx)(ie,{})}):Object(b.jsx)(te,{})}),Object(b.jsxs)("div",{className:"navigationbar__nav-right",children:[Object(b.jsxs)("div",{className:"navigationbar__nav-date flex",children:[Object(b.jsx)("div",{className:"navigationbar__nav-calendar",children:Object(b.jsx)("img",{src:"/icon/calendar.png",alt:"calendar",target:"_blank"})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"text-normal text-gray ",children:t("BANNER_DATE")})})]}),Object(b.jsxs)("div",{className:"navigationbar__nav-date flex",children:[Object(b.jsx)("div",{className:"navigationbar__nav-time",children:Object(b.jsx)("img",{src:"/icon/time.png",alt:"time",target:"_blank"})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"text-normal text-gray ",children:" 12.00 - 20.00"})})]}),Object(b.jsxs)("div",{className:"navigationbar__nav-local flex",children:[Object(b.jsx)("div",{className:"navigationbar__nav-address",children:Object(b.jsx)("img",{src:"/icon/address.png",alt:"address",target:"_blank"})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"text-normal text-gray",children:"KYIV, Pochayna Event Hall"})})]})]})]})]})}a(63);function le(){var e=Object(o.a)().t;return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsxs)("div",{className:"footer__upper-block",children:[Object(b.jsxs)("div",{className:"footer__col-logo",children:[Object(b.jsx)("div",{className:"footer__logo-wrapper",children:Object(b.jsx)(J,{})}),Object(b.jsx)("div",{className:"footer__desc",children:Object(b.jsx)(m,{})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"footer__site",children:" @ntbeauty.com.ua"})})]}),Object(b.jsx)("div",{className:"footer__col-link",children:Object(b.jsx)(V,{additionalClasses:"footer__col-item"})}),Object(b.jsxs)("div",{className:"footer__col-local",children:[Object(b.jsx)("p",{children:"Pochayna Event Hall"}),Object(b.jsx)("p",{children:e("LOCATION")}),Object(b.jsx)("div",{className:"footer__col-number",children:Object(b.jsx)(u,{})})]}),Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"footer__col-advertising",children:[Object(b.jsx)("div",{className:"footer__col-advertising-text",children:Object(b.jsxs)("p",{children:[e("FOOTER_COL_ADVERTISING")," by Pavlova Eleonora"]})}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("div",{className:"footer__col-advertising-icon",children:Object(b.jsx)("img",{src:"/images/my-foto.png",alt:"foto"})}),Object(b.jsxs)("div",{className:"footer__col-advertising-contact flex",children:[Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("img",{src:"/icon/footer-call.svg",alt:"call",className:"icon-size-little"})}),Object(b.jsxs)("a",{href:"tel:+380687527904",className:"fonts-white",children:["+380687527904",Object(b.jsx)("p",{className:"fonts-white",children:"Viber, Telegram"})]})]})]}),Object(b.jsxs)("div",{className:"footer__col-advertising-box flex-end",children:[Object(b.jsx)("div",{className:"footer__col-advertising-insta",children:Object(b.jsx)("a",{href:"https://www.instagram.com/pavl0vaelen/?hl=ru",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"/icon/my-insta.svg",alt:"insta",className:"icon-size-little"})})}),Object(b.jsx)("div",{className:"footer__col-advertising-mail",children:Object(b.jsx)("a",{href:"mailto:nebrudko18@gmail.com",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"/icon/my-mail.svg",alt:"mail",className:"icon-size-little"})})}),Object(b.jsx)("div",{className:"footer__col-advertising-git",children:Object(b.jsx)("a",{href:"https://github.com/EleonoraPavlova",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"/icon/my-github.svg",alt:"github",className:"icon-size-little"})})}),Object(b.jsx)("div",{className:"footer__col-advertising-skype",children:Object(b.jsx)("a",{href:"https://join.skype.com/invite/Kf7ZnFPrzv6R",target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"/icon/skype.svg",alt:"skype",className:"icon-size-little"})})})]})]})]}),Object(b.jsx)("div",{className:"footer__second-block",children:Object(b.jsx)("p",{children:" \xae 2021 All rights recerved."})})]})}var oe=a(2);function je(){return Object(b.jsx)(G.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(re,{}),Object(b.jsxs)(oe.c,{children:[Object(b.jsx)(oe.a,{exact:!0,path:"/",children:Object(b.jsx)(k,{})}),Object(b.jsx)(oe.a,{path:"/tickets",children:Object(b.jsx)(B,{})})]}),Object(b.jsx)(le,{})]})})}r.a.use(l.e).init({resources:W,lng:"ua",fallbackLng:"en",interpolation:{escapeValue:!1}});var be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(je,{})}),document.getElementById("root")),be()}},[[64,1,2]]]);
//# sourceMappingURL=main.9d762129.chunk.js.map