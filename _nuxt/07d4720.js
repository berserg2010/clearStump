(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{473:function(e,t,n){e.exports=n.p+"img/09.42ecd90.jpg"},474:function(e,t,n){e.exports=n.p+"img/01.de4d5e8.jpg"},475:function(e,t,n){e.exports=n.p+"img/02.c587502.jpg"},476:function(e,t,n){e.exports=n.p+"img/03.da8fd3d.jpg"},477:function(e,t,n){e.exports=n.p+"img/04.7a1551d.jpg"},478:function(e,t,n){e.exports=n.p+"img/05.6c5e4d9.jpg"},479:function(e,t,n){e.exports=n.p+"img/06.1c3d90a.jpg"},480:function(e,t,n){e.exports=n.p+"img/07.c1361fc.jpg"},481:function(e,t,n){e.exports=n.p+"img/08.f19a904.jpg"},482:function(e,t,n){e.exports=n.p+"img/10.431d2c7.jpg"},483:function(e,t,n){e.exports=n.p+"img/11.867e856.jpg"},484:function(e,t,n){e.exports=n.p+"img/12.73b2a5c.jpg"},485:function(e,t,n){e.exports=n.p+"img/01.d99516c.jpeg"},486:function(e,t,n){e.exports=n.p+"img/02.4b6cba9.jpg"},487:function(e,t,n){e.exports=n.p+"img/03.2b8024d.jpg"},488:function(e,t,n){e.exports=n.p+"img/04.24f7da7.jpg"},489:function(e,t,n){e.exports=n.p+"img/05.7104d50.jpg"},490:function(e,t,n){e.exports=n.p+"img/01.3669bc8.jpg"},491:function(e,t,n){e.exports=n.p+"img/02.a6bf02c.jpg"},492:function(e,t,n){e.exports=n.p+"img/03.9f93a5c.jpg"},493:function(e,t,n){e.exports=n.p+"img/04.c44c796.jpg"},494:function(e,t,n){e.exports=n.p+"img/05.7b6fa76.jpeg"},495:function(e,t,n){e.exports=n.p+"img/01.87efdd8.jpeg"},496:function(e,t,n){e.exports=n.p+"img/02.0c488ca.jpg"},497:function(e,t,n){e.exports=n.p+"img/03.28d1705.jpeg"},498:function(e,t,n){e.exports=n.p+"img/04.e3a75b5.jpeg"},499:function(e,t,n){e.exports=n.p+"img/05.fb23431.jpeg"},500:function(e,t,n){e.exports=n.p+"img/01.b2cc941.jpg"},501:function(e,t,n){e.exports=n.p+"img/02.13c78fd.jpg"},502:function(e,t,n){e.exports=n.p+"img/03.26ce2d2.jpeg"},503:function(e,t,n){e.exports=n.p+"img/04.ccfd3a4.jpeg"},504:function(e,t,n){"use strict";n.r(t),n.d(t,"Gallery",(function(){return r}));n(284),n(20),n(41),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(42);var r,l=n(43);!function(e){e.GOODS="goods",e.COWORKING="coworking",e.MANUFACTURE="manufacture",e.TRAINING="training",e.PLACE="place"}(r||(r={}));var c=[n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(473),n(482),n(483),n(484)],o=[n(485),n(486),n(487),n(488),n(489)],f=[n(490),n(491),n(492),n(493),n(494)],d=[n(495),n(496),n(497),n(498),n(499)],m=[n(500),n(501),n(502),n(503)],j=Object(l.b)({name:"ImageGallery",props:{gallery:{type:String,required:!0}},setup:function(e){var t=Object(l.i)(e).gallery,n=Object(l.g)(!0),j=new Map([[r.GOODS,"Наши изделия"],[r.COWORKING,"Коворкинг"],[r.MANUFACTURE,"Производство"],[r.TRAINING,"Мастер классы и обучение"],[r.PLACE,"Место расположения"]]),v=new Map([[r.GOODS,c],[r.COWORKING,o],[r.MANUFACTURE,f],[r.TRAINING,d],[r.PLACE,m]]);return{titleGallery:Object(l.a)((function(){return(null==t?void 0:t.value)&&j.get(t.value)})),srcListGallery:Object(l.a)((function(){return(null==t?void 0:t.value)&&v.get(t.value)})),loading:n,onLoadImage:function(){return n.value=!1}}}}),v=n(34),component=Object(v.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"gallery__image-wrapper",class:{"fade-in":!e.loading}},[n("el-image",{staticClass:"gallery-item",staticStyle:{"max-width":"536px"},attrs:{fit:"scale",src:e.srcListGallery[0],"preview-src-list":e.srcListGallery,alt:e.titleGallery},on:{load:e.onLoadImage}}),e._v(" "),n("div",{staticClass:"gallery__image-description"},[n("span",[e._v(e._s(e.titleGallery))])])],1)}),[],!1,null,null,null);t.default=component.exports},510:function(e,t,n){"use strict";n.r(t);n(48),n(20),n(299);var r=n(43),l=n(504),c=Object(r.b)({name:"GalleryPage",components:{ImageGallery:l.default},setup:function(){var title=Object(r.g)("Галерея"),e=Object(r.g)(),t=Object(r.g)(1),n=function(){e.value=window.innerWidth,t.value=e.value>696?2:1};return Object(r.e)((function(){n(),window.addEventListener("resize",n)})),Object(r.f)((function(){n(),window.addEventListener("resize",n)})),Object(r.d)((function(){window.removeEventListener("resize",n)})),{title:title,Gallery:l.Gallery,colsGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,col=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object.values(l.Gallery).filter((function(t,n){return n%e==col-1}))},cols:t}},head:function(){return{title:"".concat(this.title," – Ясен Пень")}}}),o=c,f=n(34),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main"},[n("section",{staticClass:"content"},[n("div",{staticClass:"wrapper content__wrapper"},[n("h1",[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"gallery-items"},[n("div",{staticClass:"gallery-col"},e._l(e.colsGallery(e.cols,1),(function(i,e){return n("ImageGallery",{key:e,attrs:{gallery:i}})})),1),e._v(" "),2===e.cols?n("div",{staticClass:"gallery-col"},e._l(e.colsGallery(2,2),(function(i,e){return n("ImageGallery",{key:e,attrs:{gallery:i}})})),1):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ImageGallery:n(504).default})}}]);