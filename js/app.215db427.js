(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],h=0,f=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0ab0":function(t,e,s){"use strict";var n=s("cf0e"),a=s.n(n);a.a},"10ee":function(t,e,s){t.exports=s.p+"img/techs.8ae5d56a.svg"},"133a":function(t,e,s){},1529:function(t,e,s){"use strict";var n=s("7354"),a=s.n(n);a.a},"3c63":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.pageClass,attrs:{id:"app"}},[s("header",[s("div",{staticClass:"container"},[s("app-menu",{attrs:{className:"desk"}}),t.state.subtitle.active?s("h2",{staticClass:"subTitle"},[s("span",[t._v(t._s(t.currSubtitle))]),s("button",{on:{click:t.toggleAttached}},[t._v(t._s(t.nextSubTitle))])]):t._e()],1)]),s("button",{staticClass:"mainMenu__burger",class:t.burgerClass,attrs:{id:"burger"},on:{click:t.toggleMenu}},[t._m(0),s("span",[t._v(t._s(t.mobileMenuTitle))])]),s("div",{staticClass:"backLayer",class:t.layerShowClass},[s("app-menu",{attrs:{className:"mobile"}})],1),s("main",[s("router-view")],1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",{staticClass:"mainMenu__burger_open"},[s("s"),s("s"),s("s")])}],o=(s("b0c0"),s("ac1f"),s("5319"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{class:t.getClass},t._l(t.getRoutes,(function(e,n){return s("li",{key:n},[s("router-link",{attrs:{to:e.path,"active-class":"active",exact:""}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)}),r=[],l={menuOpened:!1,consoleStatus:!0,showVideo:!1,videoEffect:!1,firstLoad:!0,subtitle:{active:!1,pages:["Работы","Знания"],current:0,blocked:!1}},c={data:function(){return{state:l}},props:{className:String},computed:{getRoutes:function(){return this.$router.options.routes},getClass:function(){return["mainMenu mainMenu__"+this.className,{mainMenu__mobile_showed:this.state.menuOpened&&"mobile"===this.className}]}}},u=c,h=s("2877"),f=Object(h["a"])(u,o,r,!1,null,null,null),p=f.exports,d={name:"app",data:function(){return{state:l,subtitle:l.subtitle}},components:{appMenu:p},computed:{pageClass:function(){var t=this.$route.path,e="/"===t?"home":t.replace("/","");return["page__"+e]},burgerClass:function(){return{selected:this.state.menuOpened}},layerShowClass:function(){return{show:this.state.menuOpened}},mobileMenuTitle:function(){return this.state.menuOpened?"Закрыть":this.$route.name},currSubtitle:function(){return this.subtitle.pages[this.subtitle.current]},nextSubTitle:function(){return this.subtitle.pages[this.nextSubIndex]},nextSubIndex:function(){var t=this.subtitle.current===this.subtitle.pages.length-1;return t?0:this.subtitle.current+1}},watch:{$route:function(t){this.toggleMenu("close"),this.subtitle.active="/portfolio"===t.path}},mounted:function(){setTimeout((function(){return window.scrollTo(0,0)}),0),this.recalcWindow(),window.addEventListener("resize",this.recalcWindow)},methods:{toggleAttached:function(){var t=this;this.subtitle.blocked||(this.subtitle.current=this.nextSubIndex,this.subtitle.blocked=!0,setTimeout((function(){t.subtitle.blocked=!1}),1e3))},recalcWindow:function(){var t=this;this.state.showVideo=window.innerWidth>768,setTimeout((function(){t.state.videoEffect=window.innerWidth>768}),0)},toggleMenu:function(t){var e=document.body;this.state.menuOpened="close"!==t&&!this.state.menuOpened,e.style.overflowY=!0===this.state.menuOpened?"hidden":"auto"}}},m=d,v=Object(h["a"])(m,a,i,!1,null,null,null),y=v.exports,b=s("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.state.showVideo?n("video",{class:{show:t.state.videoEffect},attrs:{id:"videoBg",preload:"auto",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:s("97c2"),type:"video/mp4"}})]):n("img",{staticClass:"noVideoLayer",attrs:{src:t.getSrc("/photos/no_video.jpg")}}),n("div",{staticClass:"overlay"},[n("figure",{staticClass:"delayedRect"},[n("div",{staticClass:"delayedRect__bracket top",style:t.bracketPos}),n("figcaption",{staticClass:"delayedRect__info",style:t.bracketPos},[n("h1",[n("console-line"),t._v(" Меня зовут Денис."),n("br"),t._v(" Я — frontend-"),n("br"),t._v(" разработчик ")],1),n("span",[t._v("работаю в IT-сфере более 2-х лет")])]),n("div",{staticClass:"delayedRect__photo"},[n("img",{attrs:{src:t.getSrc("/photos/photo2.jpg"),alt:""}}),n("div",{staticClass:"nextButton"},[n("router-link",{attrs:{tag:"button",to:"/portfolio"}},[t._v(" Мои работы ")]),n("i",{staticClass:"arrow"},[n("svg",{attrs:{width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M39.7071 8.70711C40.0976 8.31659 40.0976 7.68342 39.7071 7.2929L33.3431 0.928935C32.9526 0.538411 32.3195 0.538411 31.9289 0.928935C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM-8.74228e-08 9L39 9L39 7L8.74228e-08 7L-8.74228e-08 9Z",fill:"#D8FFFF"}})])])],1)]),n("div",{staticClass:"delayedRect__bracket bottom",style:t.bracketPos})])])])},_=[],w=(s("99af"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("u",{staticClass:"consoleLine",class:{blinking:t.blinkStatus}},[t._v(t._s(t.helloPrint))])}),k=[],C=(s("a15b"),s("4d63"),s("25f0"),s("466d"),s("1276"),{data:function(){return{helloStack:["npm i -g skills","npm i parse-hh","hello_world","hello.js","Hello, world!","hello.vue","hello.php","Hello.json"],helloPrint:"",helloArr:[],nextMsg:[],blinkStatus:!0}},watch:{helloArr:function(t){this.helloPrint=t.join("")}},mounted:function(){var t=this.getRandFrom(0,this.helloStack.length);this.helloPrint=this.helloStack[t],this.helloScript(3e3)},methods:{getRandFrom:function(t,e){return Math.floor(Math.random()*(e-t))+t},helloScript:function(t){this.helloArr=this.helloPrint.split(""),this.genNext(),setTimeout(this.clearConsole,t)},genNext:function(){var t=this.getRandFrom(0,this.helloStack.length);this.nextMsg=this.helloStack[t].split("")},typeDelay:function(t){var e=this.getRandFrom(50,200);setTimeout(t,e)},clearConsole:function(){var t=this;this.blinkStatus=!1,this.typeDelay((function(){var e=new RegExp("^"+t.helloPrint.toLowerCase()),s=t.nextMsg.join("").match(e),n=s?s[0]:null,a=0===t.helloArr.length;a||t.helloPrint===n?(t.nextMsg=t.nextMsg.join("").replace(e,"").split(""),t.blinkStatus=!0,t.pushToConsole()):(t.helloArr.pop(),t.clearConsole())}))},pushToConsole:function(){var t=this;this.blinkStatus=!1,this.typeDelay((function(){t.nextMsg.length>0?(t.helloArr.push(t.nextMsg.shift()),t.pushToConsole()):(t.blinkStatus=!0,t.helloScript(2e3))}))}}}),x=C,T=(s("1529"),Object(h["a"])(x,w,k,!1,null,null,null)),P=T.exports,S={data:function(){return{rectStep:2,rectRange:{x:40,y:10},brackets:{x:0,y:0},prevCursorPos:{x:0,y:0},state:l}},components:{consoleLine:P},computed:{bracketPos:function(){return{transform:"translate(\n          ".concat(this.brackets.x+"px",",\n          ").concat(this.brackets.y+"px","\n        )")}}},mounted:function(){this.initVideo(),document.addEventListener("mousemove",this.moveRect)},beforeDestroy:function(){this.state.videoEffect=!1},methods:{getSrc:function(t){return""+t},initVideo:function(){var t=this;window.innerWidth>768&&(this.state.showVideo=!0,setTimeout((function(){t.state.videoEffect=!0}),0))},getRandFrom:function(t,e){return Math.floor(Math.random()*(e-t))+t},inRange:function(t,e){return t[e]>=-1*this.rectRange[e]&&t[e]<=this.rectRange[e]},getMax:function(t){return this.brackets[t]<0?-1*this.rectRange[t]:this.rectRange[t]},moveRect:function(t){var e={x:this.prevCursorPos.x>t.clientX?this.brackets.x-this.rectStep:this.brackets.x+this.rectStep,y:this.prevCursorPos.y>t.clientY?this.brackets.y-this.rectStep:this.brackets.y+this.rectStep},s=this.inRange(e,"x"),n=this.inRange(e,"y");this.brackets.x=s?e.x:this.getMax("x"),this.brackets.y=n?e.y:this.getMax("y"),this.prevCursorPos={x:t.clientX,y:t.clientY}}}},L=S,M=(s("0ab0"),Object(h["a"])(L,g,_,!1,null,null,null)),j=M.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container attachPage"},[s("section",{staticClass:"skills changeTab",class:t.showSkills,style:{overflowY:t.addScroll}},[s("div",{staticClass:"wrapper"},[s("h2",[t._v("Знания")]),s("span",[t._v("рассчитываются исходя из частоты использования в проектах")]),t._l(t.skillsList,(function(e,n){return s("figure",{key:n,staticClass:"skills__item"},[s("i",{staticClass:"icon"},[s("svg",{attrs:{width:"100%",height:"100%"}},[s("use",{attrs:{"xlink:href":t.getSkillSVG(e.name),overflow:"visible"}})])]),s("figcaption",[s("span",[t._v(t._s(e.title))]),s("u",{staticClass:"skills__line"},[s("hr",{style:{width:e.level+"%"}})])])])}))],2)]),s("section",{staticClass:"works changeTab attachedBlock",class:t.showWorks},[s("h2",{staticClass:"attachedBlock__head"},[s("div",[t._v(" Работы "),s("span",[t._v("["+t._s(t.works.length)+"]")])])]),s("div",{staticClass:"wrapper"},t._l(t.works,(function(e,n){return s("figure",{key:n,staticClass:"works__item",on:{click:function(e){return t.openPanel(n)}}},[s("img",{attrs:{src:e.img,alt:""}}),s("figcaption",[s("h3",[t._v(t._s(e.title))]),s("span",[t._v(t._s(t.cutUrl(e.url)))]),s("i",{staticClass:"fas fa-search"})])])})),0)]),s("section",{staticClass:"infoPanel",class:{show:t.movePanel}},[s("div",{staticClass:"infoPanel__head"},[s("button",{on:{click:t.closePanel}},[s("i",{staticClass:"arrow"},[s("svg",{attrs:{width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M39.7071 8.70711C40.0976 8.31659 40.0976 7.68342 39.7071 7.2929L33.3431 0.928935C32.9526 0.538411 32.3195 0.538411 31.9289 0.928935C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM-8.74228e-08 9L39 9L39 7L8.74228e-08 7L-8.74228e-08 9Z",fill:"#1D2138"}})])]),s("span",[t._v("Назад")])])]),t.infoPanel?s("div",{staticClass:"infoPanel__info"},[s("h3",[t._v(t._s(t.infoPanelHead))]),t.metaEmpty?t._e():s("p",{staticClass:"infoPanel__meta"},[t.infoPanel.meta.employer?s("span",[s("b",[t._v("Заказчик")]),t._v(": "+t._s(t.infoPanel.meta.employer))]):t._e(),t.infoPanel.meta.year?s("span",[s("b",[t._v("Год")]),t._v(": "+t._s(t.infoPanel.meta.year))]):t._e(),s("span",[s("b",[t._v("Технологии")]),t._v(": "),t._l(t.infoTechList,(function(e,n){return s("i",{key:n,staticClass:"infoPanel__tags"},[t._v(" "+t._s(e)+" ")])}))],2)]),s("p",{staticClass:"infoPanel__text"},[t._v(t._s(t.infoPanel.description))]),s("p",{staticClass:"infoPanel__btns"},[t.infoPanel.demo?s("a",{staticClass:"btnDefault",attrs:{href:t.infoPanel.demo,target:"_blank"}},[s("i",{staticClass:"icon"},[s("svg",{staticClass:"svg-inline--fa fa-eye fa-w-18",attrs:{width:"100%",height:"100%","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"eye",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[s("path",{attrs:{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}})])]),t._v(" Демо ")]):t._e(),t.infoPanel.github?s("a",{staticClass:"btnDefault",attrs:{href:t.infoPanel.github,target:"_blank"}},[s("i",{staticClass:"icon"},[s("svg",{staticClass:"svg-inline--fa fa-github fa-w-16",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[s("path",{attrs:{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])]),t._v(" на GitHub ")]):t._e()])]):t._e()])])},R=[],A=(s("4de4"),s("7db0"),s("4160"),s("c975"),s("d81d"),s("fb6a"),s("d3b7"),s("159b"),{data:function(){return{blockAttached:!1,workActive:!1,addScroll:"unset",displayWorks:"flex",displaySkills:"flex",currentPanel:null,movePanel:!1,works:[],skills:[],state:l}},computed:{infoPanelHead:function(){return this.infoPanel.url?this.cutUrl(this.infoPanel.url):this.infoPanel.title},infoTechList:function(){var t=this;return this.infoPanel.meta.tech.map((function(e){var s=t.skills.find((function(t){return t.name===e}));return s?s.title:null})).filter((function(t){return t}))},showPanel:function(){return null!==this.currentPanel},infoPanel:function(){return this.showPanel?this.works[this.currentPanel]:null},metaEmpty:function(){return 0===this.infoPanel.meta.tech.length},showSkills:function(){return{show:!this.workActive&&!l.firstLoad,hide:this.workActive&&!l.firstLoad,"low-layer":this.state.menuOpened,undisplayed:!this.displaySkills}},showWorks:function(){return{sticked:this.blockAttached,show:this.workActive,hide:!this.workActive&&!l.firstLoad,"low-layer":this.state.menuOpened,undisplayed:!this.displayWorks}},skillsList:function(){var t=this;return this.skills.map((function(e){var s=0;return t.works.forEach((function(t){-1!==t.meta.tech.indexOf(e.name)&&s++})),e.level=s/t.works.length*100,e})).filter((function(t){return 0!==t.level})).sort((function(t,e){return e.level-t.level}))}},watch:{workActive:function(t){var e=this;setTimeout((function(){e.displayWorks=t}),1e3)},showPanel:function(t){var e=this;setTimeout((function(){document.body.style.overflowY=t?"hidden":"auto",e.movePanel=t}),0)},"state.subtitle.current":function(t){this.workActive=0===t,this.state.firstLoad=!1}},mounted:function(){this.getData("skills"),this.getData("works"),this.works.sort((function(t,e){return e.meta.year-t.meta.year})),this.state.subtitle.active=!0,this.state.subtitle.current=0,this.showAttach(),this.state.firstLoad=!0},beforeRouteLeave:function(t,e,s){this.state.firstLoad=!0,s()},methods:{getData:function(t){var e=this;fetch(""+"/data/".concat(t,".data.json")).then((function(t){return t.json()})).then((function(s){e[t]=s}))},getSkillSVG:function(t){return s("10ee")+"#"+t},cutUrl:function(t){if(t)return t=t.replace("https://","").replace("http://",""),t[0].toUpperCase()+t.slice(1)},showAttach:function(){var t=this;setTimeout((function(){t.workActive=!0,t.blockAttached=!0,setTimeout((function(){t.addScroll="auto"}),400)}),300)},openPanel:function(t){this.currentPanel=t},closePanel:function(){this.currentPanel=null}}}),E=A,$=(s("5ee9"),Object(h["a"])(E,O,R,!1,null,null,null)),D=$.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("section",{staticClass:"about__photo"},[s("img",{attrs:{src:t.getSrc("/photos/photo1.jpg"),alt:""}}),s("div",{staticClass:"nextButton"},[s("router-link",{attrs:{tag:"button",to:"/contacts"}},[t._v(" Напишите мне ")]),s("i",{staticClass:"arrow"},[s("svg",{attrs:{width:"40",height:"16",viewBox:"0 0 40 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M39.7071 8.70711C40.0976 8.31659 40.0976 7.68342 39.7071 7.2929L33.3431 0.928935C32.9526 0.538411 32.3195 0.538411 31.9289 0.928935C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM-8.74228e-08 9L39 9L39 7L8.74228e-08 7L-8.74228e-08 9Z",fill:"currentColor"}})])])],1)])])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"about__info"},[s("p",[s("u",[t._v("Начал свое знакомство с IT со школы,")]),t._v(" преимущественно занимаясь вёрсткой и своими небольшими проектами. ")]),s("p",[t._v(" В 2018-2019 году работал на фрилансе в веб-студии, где "),s("u",[t._v("поддерживал корпоративные сайты на ModX")]),t._v(" и верстал landing-page различного уровня сложности. ")]),s("p",[t._v(" С 2019 года живу в Питере, и работаю в строймаркете «Сатурн», где "),s("u",[t._v("занимаюсь вёрсткой, созданием и доработкой модулей на Vue.js")]),t._v(", исправлением багов и оптимизацией страниц интернет-магазина. ")]),s("p",[t._v(" В первую очередь заинтересован в дальнейшем развитии "),s("u",[t._v("в сторону JS-разработки.")]),t._v(" В ближайших планах "),s("u",[t._v("познакомиться с React")]),t._v(" и более углубленно изучить Node.js. Могу верстать "),s("u",[t._v("валидные, кроссбраузерные и адаптивные")]),t._v(" страницы. Обладаю долей здравого перфекционизма, люблю чистоту в коде, адекватно воспринимаю критику. Также нравится принимать участие в обсуждениях и чувствовать персональную "),s("u",[t._v("ответственность за качество продукта.")])])])}],B={methods:{getSrc:function(t){return""+t}}},V=B,W=(s("bc52"),Object(h["a"])(V,z,F,!1,null,null,null)),H=W.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("section",{staticClass:"form-block"},[s("form",{ref:"sendForm",attrs:{action:""}},[s("h2",[t._v("Свяжитесь со мной")]),t._m(0),s("input",{attrs:{type:"text",name:"name",placeholder:"Ваше имя"}}),s("input",{attrs:{type:"email",name:"email",placeholder:"Ваш email"}}),s("textarea",{attrs:{name:"message",id:"",placeholder:"Ваше сообщение"}}),s("button",{ref:"sendBtn"},[t._v("Отправить")]),s("p",{ref:"sendStatus",staticClass:"statusInfo"})])]),s("section",{staticClass:"map-block",attrs:{id:"map"}},[s("GmapMap",{staticStyle:{width:"100%",height:"100%"},attrs:{center:{lat:59.866523,lng:30.321005},zoom:16,"map-type-id":"roadmap",options:{backgroundColor:"#FEBB36",zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!1,styles:t.styleArr}}})],1)])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"form-block__contacts"},[s("a",{attrs:{href:"mailto:denlapt@gmail.com"}},[t._v("denlapt@gmail.com")]),s("br"),s("a",{attrs:{href:"tel:+79536820612"}},[t._v("+7(953)-682-06-12")])])}],Z={data:function(){return{styleArr:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}},mounted:function(){this.$refs.sendForm.addEventListener("submit",this.sendData)},methods:{onSuccess:function(){this.$refs.sendForm.reset(),this.$refs.sendBtn.style="display: none ",this.$refs.sendStatus.innerHTML="Спасибо :)"},onError:function(){this.$refs.sendStatus.innerHTML="Форма не отправилась! Попробуйте позже!"},sendData:function(t){t.preventDefault();var e=new FormData(this.$refs.sendForm);this.ajax(e,this.onSuccess,this.onError)},ajax:function(t,e,s){var n="POST",a="https://formspree.io/xnqgnvbr",i=new XMLHttpRequest;i.open(n,a),i.setRequestHeader("Accept","application/json"),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&(200===i.status?e(i.response,i.responseType):s(i.status,i.response,i.responseType))},i.send(t)}}},G=Z,U=(s("f5fe"),Object(h["a"])(G,N,I,!1,null,null,null)),X=U.exports,Y=[{name:"Главная",path:"/",component:j},{name:"Портфолио",path:"/portfolio",component:D},{name:"Обо мне",path:"/about",component:H},{name:"Контакты",path:"/contacts",component:X}],q=new b["a"]({routes:Y,mode:"history"}),J=s("755e"),K={load:{key:"AIzaSyDS1NrAVdHVvC0xnJO9dbkiGB6ZzFju8W8",libraries:"places"}};n["a"].use(b["a"]),n["a"].config.productionTip=!1,n["a"].use(J,K),new n["a"]({render:function(t){return t(y)},router:q}).$mount("#app")},"5ee9":function(t,e,s){"use strict";var n=s("3c63"),a=s.n(n);a.a},7330:function(t,e,s){},7354:function(t,e,s){},"97c2":function(t,e,s){t.exports=s.p+"media/city.e02e3755.mp4"},bc52:function(t,e,s){"use strict";var n=s("133a"),a=s.n(n);a.a},cf0e:function(t,e,s){},f5fe:function(t,e,s){"use strict";var n=s("7330"),a=s.n(n);a.a}});
//# sourceMappingURL=app.215db427.js.map