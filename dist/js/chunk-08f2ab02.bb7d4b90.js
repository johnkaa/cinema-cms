(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f2ab02"],{"0dc3":function(t,e,o){"use strict";o("5771")},5771:function(t,e,o){},9850:function(t,e,o){"use strict";o.r(e);var s=o("7a23"),n={class:"poster-soon__items poster-films__items"},c={class:"poster-soon__type poster-films__type"},i={key:0,class:"type"},a={key:1,class:"type"},b={key:2,class:"type"},r={class:"poster-soon__date poster-films__date"},u=["src"],l={class:"poster-soon__name poster-films__name"};function f(t,e,o,f,j,d){var m=Object(s["H"])("router-link"),p=Object(s["H"])("my-button");return Object(s["z"])(),Object(s["g"])("div",n,[(Object(s["z"])(!0),Object(s["g"])(s["a"],null,Object(s["F"])(j.filmsSoon,(function(e){return Object(s["z"])(),Object(s["g"])("div",{class:"poster-soon__item poster-films__item",key:e.id},[Object(s["h"])("div",c,[e.type.type2D?(Object(s["z"])(),Object(s["g"])("div",i,"2D")):Object(s["f"])("",!0),e.type.type3D?(Object(s["z"])(),Object(s["g"])("div",a,"3D")):Object(s["f"])("",!0),e.type.typeIMAX?(Object(s["z"])(),Object(s["g"])("div",b,"IMAX")):Object(s["f"])("",!0)]),Object(s["h"])("p",r,"С "+Object(s["J"])(j.dateSoon),1),Object(s["k"])(m,{to:"/films/soon/"+e.id},{default:Object(s["Q"])((function(){return[Object(s["h"])("img",{src:e.img,alt:""},null,8,u),Object(s["h"])("p",l,Object(s["J"])(e.title),1)]})),_:2},1032,["to"]),Object(s["k"])(p,{class:"poster-soon__btn poster-films__btn"},{default:Object(s["Q"])((function(){return[Object(s["j"])(Object(s["J"])(t.$t("poster.buy")),1)]})),_:1})])})),128))])}o("159b"),o("b64b");var j=o("b866"),d=o("66ce"),m=o("ab55"),p={name:"PosterSoon",components:{MyButton:j["a"]},mounted:function(){this.setupPosterSoon()},watch:{"$i18n.locale":function(){this.setupPosterSoon()}},data:function(){return{months:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],monthsUA:["Січня","Лютого","Березня","Квітня","Травня","Червня","Липня","Серпня","Вересня","Жовтеня","Листопада","Грудня"],dateSoon:"",filmsSoon:{}}},methods:{setupPosterSoon:function(){var t=this,e=new Date;this.date=e.getDate()+" "+this.months[e.getMonth()],this.dateSoon="1 "+this.months[e.getMonth()+1];var o=Object(d["c"])(m["a"],"films/filmsSoon");Object(d["b"])(o,(function(e){t.filmsSoon=e.val()})),"ua"===this.$i18n.locale&&(this.date=e.getDate()+" "+this.monthsUA[e.getMonth()],this.dateSoon="1 "+this.monthsUA[e.getMonth()+1],Object.keys(this.filmsSoon).forEach((function(e){t.filmsSoon[e]=t.filmsSoon[e].ua})))}}},O=o("d959"),h=o.n(O);const _=h()(p,[["render",f]]);e["default"]=_},b866:function(t,e,o){"use strict";var s=o("7a23"),n={class:"my-btn border-button"};function c(t,e,o,c,i,a){return Object(s["z"])(),Object(s["g"])("button",n,[Object(s["G"])(t.$slots,"default",{},void 0,!0)])}var i={name:"MyButton"},a=(o("0dc3"),o("d959")),b=o.n(a);const r=b()(i,[["render",c],["__scopeId","data-v-27e5dabb"]]);e["a"]=r}}]);
//# sourceMappingURL=chunk-08f2ab02.bb7d4b90.js.map