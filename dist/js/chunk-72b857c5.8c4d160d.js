(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72b857c5"],{"0644":function(e,t,a){},"0dc3":function(e,t,a){"use strict";a("5771")},"3e70":function(e,t,a){"use strict";a("e72e")},5771:function(e,t,a){},"5b43":function(e,t,a){"use strict";a("fda6")},"6b23":function(e,t,a){"use strict";var i=a("7a23"),l={class:"close-btn"};function n(e,t,a,n,s,c){return Object(i["z"])(),Object(i["g"])("button",l,"x")}var s={name:"MyCloseButton"},c=(a("e991"),a("d959")),u=a.n(c);const r=u()(s,[["render",n],["__scopeId","data-v-7b00fafe"]]);t["a"]=r},"857a":function(e,t,a){var i=a("1d80"),l=a("577e"),n=/"/g;e.exports=function(e,t,a,s){var c=l(i(e)),u="<"+t;return""!==a&&(u+=" "+a+'="'+l(s).replace(n,"&quot;")+'"'),u+">"+c+"</"+t+">"}},9911:function(e,t,a){"use strict";var i=a("23e7"),l=a("857a"),n=a("af03");i({target:"String",proto:!0,forced:n("link")},{link:function(e){return l(this,"a","href",e)}})},af03:function(e,t,a){var i=a("d039");e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b866:function(e,t,a){"use strict";var i=a("7a23"),l={class:"my-btn border-button"};function n(e,t,a,n,s,c){return Object(i["z"])(),Object(i["g"])("button",l,[Object(i["G"])(e.$slots,"default",{},void 0,!0)])}var s={name:"MyButton"},c=(a("0dc3"),a("d959")),u=a.n(c);const r=u()(s,[["render",n],["__scopeId","data-v-27e5dabb"]]);t["a"]=r},d429:function(e,t,a){"use strict";a.r(t);a("b0c0"),a("a4d3"),a("e01a"),a("9911");var i=a("7a23"),l=function(e){return Object(i["C"])("data-v-e103a7be"),e=e(),Object(i["A"])(),e},n={class:"sales-edit"},s={class:"switch__wrapper"},c={class:"switch__language"},u={class:"switch__label"},r=l((function(){return Object(i["h"])("span",{class:"lever"},null,-1)})),o={class:"switch"},d={class:"sales-edit__name"},h=l((function(){return Object(i["h"])("span",null,"Название акции",-1)})),g={class:"sales-edit__description"},m=l((function(){return Object(i["h"])("span",null,"Описание",-1)})),p={class:"sales-edit__main-img"},b=l((function(){return Object(i["h"])("span",null,"Главная картинка",-1)})),f=["src"],O=Object(i["j"])("Удалить"),j={class:"sales-edit__gallery"},y=l((function(){return Object(i["h"])("span",null,"Размер: 1000х1900",-1)})),k=Object(i["j"])("+"),v={class:"sales-edit__link"},S=l((function(){return Object(i["h"])("span",null,"Ссылка на видео",-1)})),_={class:"sales-edit__seo"},I=l((function(){return Object(i["h"])("span",null,"SEO блок:",-1)})),w={class:"sales-edit__seo-item"},V=l((function(){return Object(i["h"])("span",null,"URL:",-1)})),F={class:"sales-edit__seo-item"},x=l((function(){return Object(i["h"])("span",null,"Title:",-1)})),R={class:"sales-edit__seo-item"},U=l((function(){return Object(i["h"])("span",null,"Keywords:",-1)})),G={class:"sales-edit__seo-item"},C=l((function(){return Object(i["h"])("span",null,"Description:",-1)})),D=Object(i["j"])("Сохранить");function P(e,t,a,l,P,E){var L=this,z=Object(i["H"])("my-button"),M=Object(i["H"])("sales-edit-gallery"),A=Object(i["H"])("router-link");return Object(i["z"])(),Object(i["g"])("div",n,[Object(i["h"])("div",s,[Object(i["h"])("div",c,[Object(i["h"])("label",u,[Object(i["R"])(Object(i["h"])("input",{class:"switch__checkbox",type:"checkbox",onChange:t[0]||(t[0]=function(){return E.setLanguage&&E.setLanguage.apply(E,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return P.ua=e})},null,544),[[i["L"],P.ua]]),r])])]),Object(i["h"])("div",o,[Object(i["R"])(Object(i["h"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return P.actual=e}),onChange:t[3]||(t[3]=function(){return E.setActual&&E.setActual.apply(E,arguments)})},null,544),[[i["L"],P.actual]])]),Object(i["h"])("div",d,[h,Object(i["R"])(Object(i["h"])("input",{type:"text",placeholder:"Название акции","onUpdate:modelValue":t[4]||(t[4]=function(e){return P.name=e})},null,512),[[i["O"],P.name]])]),Object(i["h"])("div",g,[m,Object(i["R"])(Object(i["h"])("textarea",{placeholder:"Описание","onUpdate:modelValue":t[5]||(t[5]=function(e){return P.description=e})},null,512),[[i["O"],P.description]])]),Object(i["h"])("div",p,[b,Object(i["h"])("img",{src:P.img,alt:"",onClick:t[6]||(t[6]=function(){return E.onPickFile&&E.onPickFile.apply(E,arguments)})},null,8,f),Object(i["h"])("input",{id:"inputFile",type:"file",style:{display:"none"},ref:"fileInput",accept:"image/*",onChange:t[7]||(t[7]=function(){return E.onFilePicked&&E.onFilePicked.apply(E,arguments)})},null,544),Object(i["k"])(z,{onClick:E.deleteMainImg},{default:Object(i["Q"])((function(){return[O]})),_:1},8,["onClick"])]),Object(i["h"])("div",j,[y,(Object(i["z"])(!0),Object(i["g"])(i["a"],null,Object(i["F"])(this.gallery,(function(e){return Object(i["z"])(),Object(i["e"])(M,{key:e.id,gallery:e,id:L.id,items:L.gallery,onUpdate:E.updateGallery,onDelete:E.deleteGalleryItem},null,8,["gallery","id","items","onUpdate","onDelete"])})),128)),Object(i["k"])(z,{class:"add text-success",onClick:E.addSalesGalleryItem},{default:Object(i["Q"])((function(){return[k]})),_:1},8,["onClick"])]),Object(i["h"])("div",v,[S,Object(i["R"])(Object(i["h"])("input",{type:"text",placeholder:"Ссылка на видео в youtube","onUpdate:modelValue":t[8]||(t[8]=function(e){return P.link=e})},null,512),[[i["O"],P.link]])]),Object(i["h"])("div",_,[I,Object(i["h"])("form",null,[Object(i["h"])("div",w,[V,Object(i["R"])(Object(i["h"])("input",{type:"text",placeholder:"URL","onUpdate:modelValue":t[9]||(t[9]=function(e){return P.seo.url=e})},null,512),[[i["O"],P.seo.url]])]),Object(i["h"])("div",F,[x,Object(i["R"])(Object(i["h"])("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[10]||(t[10]=function(e){return P.seo.title=e})},null,512),[[i["O"],P.seo.title]])]),Object(i["h"])("div",R,[U,Object(i["R"])(Object(i["h"])("input",{type:"text",placeholder:"Keywords","onUpdate:modelValue":t[11]||(t[11]=function(e){return P.seo.keywords=e})},null,512),[[i["O"],P.seo.keywords]])]),Object(i["h"])("div",G,[C,Object(i["R"])(Object(i["h"])("textarea",{placeholder:"Description","onUpdate:modelValue":t[12]||(t[12]=function(e){return P.seo.description=e})},null,512),[[i["O"],P.seo.description]])])])]),Object(i["k"])(A,{class:"sales-edit__btns",to:"/admin/sales"},{default:Object(i["Q"])((function(){return[Object(i["k"])(z,{class:"sales-edit__btns-btn",onClick:E.submit},{default:Object(i["Q"])((function(){return[D]})),_:1},8,["onClick"])]})),_:1})])}var E=a("5530"),L=(a("b64b"),a("b866")),z=a("5502"),M=a("66ce"),A=a("ab55"),B={class:"sales-edit__gallery-item"},H=["src"];function $(e,t,a,l,n,s){var c=Object(i["H"])("my-close-button");return Object(i["z"])(),Object(i["g"])("div",B,[Object(i["k"])(c,{onClick:s.deleteGalleryItem},null,8,["onClick"]),Object(i["h"])("img",{class:Object(i["r"])(a.gallery.id),src:n.img,alt:"",onClick:t[0]||(t[0]=function(){return s.onPickFileGallery&&s.onPickFileGallery.apply(s,arguments)})},null,10,H),Object(i["h"])("input",{type:"file",style:{display:"none"},ref:"fileInputGallery",accept:"image/*",onChange:t[1]||(t[1]=function(){return s.onFilePickedGallery&&s.onFilePickedGallery.apply(s,arguments)})},null,544)])}var Q=a("1da1"),T=(a("96cf"),a("99af"),a("6b23")),q=a("588e"),J=a("7ac4"),K={name:"SalesEditGallery",components:{MyCloseButton:T["a"]},props:["gallery","id","items"],data:function(){return{img:this.gallery.img}},methods:{uploadFile:function(){var e=this;return Object(Q["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="sales/".concat(e.id,"/gallery/").concat(e.gallery.id),i=Object(q["d"])(J["a"],a),t.next=4,Object(q["e"])(i,e.file);case 4:return t.next=6,Object(q["b"])(Object(q["d"])(J["a"],a));case 6:e.img=t.sent;case 7:case"end":return t.stop()}}),t)})))()},onPickFileGallery:function(){this.$refs.fileInputGallery.click()},onFilePickedGallery:function(e){var t=this,a=e.target.files,i=new FileReader;if(this.file=a[0],this.filename=a[0].name,this.filename.indexOf(".")<=0)return alert("Please add a valid file");i.readAsDataURL(a[0]),this.uploadFile(),setTimeout((function(){t.$emit("update",{id:t.gallery.id,img:t.img})}),1500)},deleteGalleryItem:function(){if(1===Object.keys(this.items).length)return alert("Должна быть хотя бы 1 картинка");this.$emit("delete",{id:this.gallery.id});var e="sales/".concat(this.id,"/gallery/").concat(this.gallery.id),t=Object(q["d"])(J["a"],e);Object(q["a"])(t)}}},Y=(a("3e70"),a("d959")),X=a.n(Y);const N=X()(K,[["render",$],["__scopeId","data-v-703bd312"]]);var W=N,Z=new Date,ee=Z.getDate()+"."+(Z.getMonth()+1)+"."+Z.getFullYear(),te={name:"SalesEdit",components:{SalesEditGallery:W,MyButton:L["a"]},computed:Object(z["c"])(["getStateSales","getStateSalesEdit"]),mounted:function(){var e=this,t=this.getStateSales.database[this.id];if(t)this.actual=t.actual,this.actualValue=t.actualValue,this.name=t.name,this.description=t.description,this.img=t.img,this.gallery=t.gallery,this.link=t.link,this.seo=t.seo,this.uaItem=t.ua;else{var a=Object(M["c"])(A["a"],"sales/".concat(this.id));Object(M["b"])(a,(function(t){var a=t.val();a?(e.actual=a.actual,e.actualValue=a.actualValue,e.name=a.name,e.description=a.description,e.img=a.img,e.gallery=a.gallery,e.link=a.link,e.seo=a.seo,e.uaItem=a.ua):e.getStateSales.database[e.id]={date:ee,actual:!1,actualValue:"ВЫКЛ",name:"Sales",description:"",img:"https://via.placeholder.com/400",gallery:{999:{id:999,img:"https://via.placeholder.com/200"}},link:"",seo:{url:"",title:"",keywords:"",description:""},ua:{id:e.id,date:ee,name:"Sales",description:"",img:"https://via.placeholder.com/400",gallery:{9999:{id:9999,img:"https://via.placeholder.com/200"}},link:"",seo:{url:"",title:"",keywords:"",description:""}}}}))}},props:["id"],data:function(){return{date:ee,actual:!1,actualValue:"ВЫКЛ",name:"Sales",description:"",img:"https://via.placeholder.com/400",gallery:{999:{id:999,img:"https://via.placeholder.com/200"}},link:"",seo:{url:"",title:"",keywords:"",description:""},ua:!1,uaItem:{}}},methods:Object(E["a"])(Object(E["a"])({},Object(z["d"])(["uploadFileSalesImg","getDownloadSalesURL","deleteFileSalesImg"])),{},{submit:function(){var e=new Date,t=e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear();this.ua?this.getStateSales.database[this.id].ua={id:this.id,actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo}:this.getStateSales.database[this.id]={id:this.id,actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo,ua:this.uaItem};var a=this.getStateSales.database[this.id];Object(M["d"])(Object(M["c"])(A["a"],"sales/".concat(this.id)),{id:this.id,date:t,actual:a.actual,actualValue:a.actualValue,name:a.name,description:a.description,img:a.img,gallery:a.gallery,link:a.link,seo:a.seo,ua:a.ua})},addSalesGalleryItem:function(){var e=(+new Date-+new Date%100)/100;if(Object.keys(this.gallery).length>4)return alert("Больше добавить нельзя");this.gallery[e]={id:e,img:"https://via.placeholder.com/200"}},updateGallery:function(e){this.getStateSales.database[this.id].gallery[e.id]={id:e.id,img:e.img},this.gallery=this.getStateSales.database[this.id].gallery},deleteGalleryItem:function(e){delete this.gallery[e.id]},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,a=e.target.files,i=new FileReader;if(this.file=a[0],this.filename=a[0].name,this.filename.indexOf(".")<=0)return alert("Please add a valid file");i.readAsDataURL(a[0]),this.uploadFileSalesImg({id:this.id,file:this.file,ua:this.ua}),this.getStateSalesEdit.img="",this.getStateSalesEdit.imgUa="",this.img="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g";var l=setInterval((function(){t.getDownloadSalesURL({id:t.id,ua:t.ua}),t.getStateSalesEdit.img&&clearInterval(l),t.ua&&t.getStateSalesEdit.imgUa&&clearInterval(l)}),250);setTimeout((function(){t.ua?t.img=t.getStateSalesEdit.imgUa:t.img=t.getStateSalesEdit.img}),1500)},deleteMainImg:function(){this.img="https://via.placeholder.com/400",this.deleteFileSalesImg({id:this.id})},setActual:function(){this.actual?this.actualValue="ВКЛ":this.actualValue="ВЫКЛ"},setLanguage:function(){if(this.ua)this.getStateSales.database[this.id]={actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo,ua:this.uaItem},this.name=this.uaItem.name,this.description=this.uaItem.description,this.img=this.uaItem.img,this.gallery=this.uaItem.gallery,this.link=this.uaItem.link,this.seo=this.uaItem.seo;else{var e=this.getStateSales.database[this.id];this.getStateSales.database[this.id].ua={id:this.id,actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo},this.name=e.name,this.description=e.description,this.img=e.img,this.gallery=e.gallery,this.link=e.link,this.seo=e.seo,this.uaItem=e.ua}}})};a("5b43");const ae=X()(te,[["render",P],["__scopeId","data-v-e103a7be"]]);t["default"]=ae},e72e:function(e,t,a){},e991:function(e,t,a){"use strict";a("0644")},fda6:function(e,t,a){}}]);
//# sourceMappingURL=chunk-72b857c5.8c4d160d.js.map