(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dea5d64"],{"0961":function(e,t,r){"use strict";r.r(t);var c=r("7a23"),s={class:"order"},i=["src"],o={class:"order__inner"},n=["src"],a={class:"order__info"},d={class:"order__film-name"},l={class:"order__info-date"},u={class:"order__info-top"},b={class:"order__info-price"},h={class:"order__info-order"},f=Object(c["j"])("Ваш заказ: "),m={class:"order__info-order-span"},O={class:"order__table"},j={class:"order__table-screen"},I={class:"order__table-items"},_={class:"order__table-row"},v=["onClick"],p={class:"order__info-text"},g={class:"order__info-text"},k={class:"order__info-btns"};function N(e,t,r,N,y,E){var J=Object(c["H"])("my-button");return Object(c["z"])(),Object(c["g"])("div",s,[Object(c["h"])("img",{class:"order__img",src:y.hallImg,alt:""},null,8,i),Object(c["h"])("div",o,[Object(c["h"])("img",{class:"order__film-img",src:y.filmImg,alt:""},null,8,n),Object(c["h"])("div",a,[Object(c["h"])("div",d,Object(c["J"])(y.scheduleItem.film),1),Object(c["h"])("div",l,Object(c["J"])(y.scheduleItem.date+", "+y.scheduleItem.time+", "+y.scheduleItem.hall),1),Object(c["h"])("div",u,[Object(c["h"])("div",b,Object(c["J"])(e.$t("order.price"))+": "+Object(c["J"])(y.scheduleItem.price),1),Object(c["h"])("div",h,[f,Object(c["h"])("span",m,Object(c["J"])(e.$t("order.tickets"))+": "+Object(c["J"])(y.tickets)+", "+Object(c["J"])(e.$t("order.sum"))+" "+Object(c["J"])(y.sum)+" грн.",1)])]),Object(c["h"])("div",O,[Object(c["h"])("div",j,Object(c["J"])(e.$t("order.screen")),1),Object(c["h"])("div",I,[(Object(c["z"])(),Object(c["g"])(c["a"],null,Object(c["F"])(9,(function(e){return Object(c["h"])("div",{class:"order__table-item",key:e},[Object(c["h"])("div",_," Ряд "+Object(c["J"])(e),1),(Object(c["z"])(),Object(c["g"])(c["a"],null,Object(c["F"])(13,(function(t){return Object(c["h"])("div",{class:Object(c["r"])(["order__table-column",{ordered:y.orderItems[e][t],selected:y.selectItems[e][t]}]),key:t,onClick:function(r){return E.order(e,t)}},Object(c["J"])(t),11,v)})),64))])})),64))])]),Object(c["h"])("div",p,Object(c["J"])(e.$t("order.order-rules")),1),Object(c["h"])("div",g,Object(c["J"])(e.$t("order.order-time")),1),Object(c["h"])("div",k,[Object(c["k"])(J,{class:"order__info-btn",onClick:E.submitOrder},{default:Object(c["Q"])((function(){return[Object(c["j"])(Object(c["J"])(e.$t("order.order-btn")),1)]})),_:1},8,["onClick"]),Object(c["k"])(J,{class:"order__info-btn_green",onClick:E.buy},{default:Object(c["Q"])((function(){return[Object(c["j"])(Object(c["J"])(e.$t("order.buy")),1)]})),_:1},8,["onClick"])])])])])}r("a9e3"),r("159b"),r("b64b"),r("b0c0");var y=r("b866"),E=r("66ce"),J=r("ab55"),w={name:"Order",components:{MyButton:y["a"]},props:{id:Number||String},created:function(){for(var e=1;e<=9;e++){this.orderItems[e]||(this.orderItems[e]={},this.selectItems[e]={});for(var t=1;t<=13;t++)this.orderItems[e][t]||(this.orderItems[e][t]=!1,this.selectItems[e][t]=!1)}},mounted:function(){this.setupOrder()},watch:{"$i18n.locale":function(){this.setupOrder()}},data:function(){return{scheduleItem:{},filmImg:"",hallImg:"",tickets:0,sum:0,orderItems:{},selectItems:{}}},methods:{setupOrder:function(){var e=this,t=Object(E["c"])(J["a"],"schedule/".concat(this.id));Object(E["b"])(t,(function(t){e.scheduleItem=t.val()}));var r=Object(E["c"])(J["a"],"films/filmsNow");Object(E["b"])(r,(function(t){Object.keys(t.val()).forEach((function(r){e.scheduleItem.film===t.val()[r].title&&(e.filmImg=t.val()[r].img)}))}));var c=Object(E["c"])(J["a"],"cinemas");Object(E["b"])(c,(function(t){Object.keys(t.val()).forEach((function(r){if(e.scheduleItem.cinema===t.val()[r].title){var c=t.val()[r];Object.keys(c.halls).forEach((function(t){e.scheduleItem.hall===c.halls[t].name&&(e.hallImg=c.halls[t].img)}))}}))}));var s=Object(E["c"])(J["a"],"orders/".concat(this.id,"/rows"));Object(E["b"])(s,(function(t){if(t.val())for(var r=t.val(),c=1;c<=9;c++)for(var s=1;s<=13;s++)r[c][s]&&(e.orderItems[c][s]&&(e.orderItems[c][s]=!1),e.orderItems[c][s]=!0)}))},order:function(e,t){return this.orderItems[e]||(this.orderItems[e]={}),this.selectItems[e]||(this.selectItems[e]={}),this.selectItems[e][t]?(this.tickets--,this.sum=this.tickets*this.scheduleItem.price,this.selectItems[e][t]=!1,this.orderItems[e][t]=!1):this.orderItems[e][t]?alert("Это место занято!"):(this.orderItems[e][t]=!0,this.selectItems[e][t]=!0,this.tickets++,void(this.sum=this.tickets*this.scheduleItem.price))},submitOrder:function(){if(0===this.tickets)return alert("Вы ещё не выбрали мест!");alert("К оплате: "+Number(this.sum+3*this.tickets)+" грн. Выкупите билеты на кассе не раньше чем за полчаса до начала сеанса!"),Object(E["d"])(Object(E["c"])(J["a"],"orders/".concat(this.id)),{rows:this.orderItems}),this.$router.push("/")},buy:function(){if(0===this.tickets)return alert("Вы ещё не выбрали мест!");alert("К оплате: "+this.sum+" грн."),Object(E["d"])(Object(E["c"])(J["a"],"orders/".concat(this.id)),{rows:this.orderItems}),this.$router.push("/")}}},$=(r("7cb9"),r("6b0d")),A=r.n($);const C=A()(w,[["render",N],["__scopeId","data-v-02d55fb8"]]);t["default"]=C},"0dc3":function(e,t,r){"use strict";r("505e")},"25c7":function(e,t,r){},"505e":function(e,t,r){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var c=r("1d80"),s=r("577e"),i=r("5899"),o="["+i+"]",n=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),d=function(e){return function(t){var r=s(c(t));return 1&e&&(r=r.replace(n,"")),2&e&&(r=r.replace(a,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},7156:function(e,t,r){var c=r("1626"),s=r("861d"),i=r("d2bb");e.exports=function(e,t,r){var o,n;return i&&c(o=t.constructor)&&o!==r&&s(n=o.prototype)&&n!==r.prototype&&i(e,n),e}},"7cb9":function(e,t,r){"use strict";r("25c7")},a9e3:function(e,t,r){"use strict";var c=r("83ab"),s=r("da84"),i=r("94ca"),o=r("6eeb"),n=r("5135"),a=r("c6b6"),d=r("7156"),l=r("d9b5"),u=r("c04e"),b=r("d039"),h=r("7c73"),f=r("241c").f,m=r("06cf").f,O=r("9bf2").f,j=r("58a8").trim,I="Number",_=s[I],v=_.prototype,p=a(h(v))==I,g=function(e){if(l(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,c,s,i,o,n,a,d=u(e,"number");if("string"==typeof d&&d.length>2)if(d=j(d),t=d.charCodeAt(0),43===t||45===t){if(r=d.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:c=2,s=49;break;case 79:case 111:c=8,s=55;break;default:return+d}for(i=d.slice(2),o=i.length,n=0;n<o;n++)if(a=i.charCodeAt(n),a<48||a>s)return NaN;return parseInt(i,c)}return+d};if(i(I,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var k,N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(p?b((function(){v.valueOf.call(r)})):a(r)!=I)?d(new _(g(t)),r,N):g(t)},y=c?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;y.length>E;E++)n(_,k=y[E])&&!n(N,k)&&O(N,k,m(_,k));N.prototype=v,v.constructor=N,o(s,I,N)}},b866:function(e,t,r){"use strict";var c=r("7a23"),s={class:"my-btn border-button"};function i(e,t,r,i,o,n){return Object(c["z"])(),Object(c["g"])("button",s,[Object(c["G"])(e.$slots,"default",{},void 0,!0)])}var o={name:"MyButton"},n=(r("0dc3"),r("6b0d")),a=r.n(n);const d=a()(o,[["render",i],["__scopeId","data-v-27e5dabb"]]);t["a"]=d}}]);
//# sourceMappingURL=chunk-0dea5d64.982c9b94.js.map