(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-021cc8f4"],{"0723":function(e,t,i){"use strict";i("7755")},"0dc3":function(e,t,i){"use strict";i("505e")},"11fa":function(e,t,i){"use strict";i("e1d9")},"505e":function(e,t,i){},"6b23":function(e,t,i){"use strict";var a=i("7a23"),n={class:"close-btn"};function l(e,t,i,l,s,c){return Object(a["z"])(),Object(a["g"])("button",n,"x")}var s={name:"MyCloseButton"},c=(i("e991"),i("6b0d")),u=i.n(c);const r=u()(s,[["render",l],["__scopeId","data-v-7b00fafe"]]);t["a"]=r},7755:function(e,t,i){},"857a":function(e,t,i){var a=i("1d80"),n=i("577e"),l=/"/g;e.exports=function(e,t,i,s){var c=n(a(e)),u="<"+t;return""!==i&&(u+=" "+i+'="'+n(s).replace(l,"&quot;")+'"'),u+">"+c+"</"+t+">"}},9911:function(e,t,i){"use strict";var a=i("23e7"),n=i("857a"),l=i("af03");a({target:"String",proto:!0,forced:l("link")},{link:function(e){return n(this,"a","href",e)}})},af03:function(e,t,i){var a=i("d039");e.exports=function(e){return a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b866:function(e,t,i){"use strict";var a=i("7a23"),n={class:"my-btn border-button"};function l(e,t,i,l,s,c){return Object(a["z"])(),Object(a["g"])("button",n,[Object(a["G"])(e.$slots,"default",{},void 0,!0)])}var s={name:"MyButton"},c=(i("0dc3"),i("6b0d")),u=i.n(c);const r=u()(s,[["render",l],["__scopeId","data-v-27e5dabb"]]);t["a"]=r},e1d9:function(e,t,i){},e991:function(e,t,i){"use strict";i("f42f")},f42f:function(e,t,i){},fd02:function(e,t,i){"use strict";i.r(t);i("b0c0"),i("a4d3"),i("e01a"),i("9911");var a=i("7a23"),n=function(e){return Object(a["C"])("data-v-fb159bdc"),e=e(),Object(a["A"])(),e},l={class:"news-edit"},s={class:"switch__wrapper"},c={class:"switch__language"},u={class:"switch__label"},r=n((function(){return Object(a["h"])("span",{class:"lever"},null,-1)})),o={class:"switch"},d={class:"news-edit__name"},h=n((function(){return Object(a["h"])("span",null,"Название новости",-1)})),g={class:"news-edit__description"},m=n((function(){return Object(a["h"])("span",null,"Описание",-1)})),p={class:"news-edit__main-img"},f=n((function(){return Object(a["h"])("span",null,"Главная картинка",-1)})),b=["src"],y=Object(a["j"])("Удалить"),O={class:"news-edit__gallery"},j=n((function(){return Object(a["h"])("span",null,"Размер: 1000х1900",-1)})),w=Object(a["j"])("+"),k={class:"news-edit__link"},v=n((function(){return Object(a["h"])("span",null,"Ссылка на видео",-1)})),I={class:"news-edit__seo"},_=n((function(){return Object(a["h"])("span",null,"SEO блок:",-1)})),N={class:"news-edit__seo-item"},V=n((function(){return Object(a["h"])("span",null,"URL:",-1)})),x={class:"news-edit__seo-item"},F=n((function(){return Object(a["h"])("span",null,"Title:",-1)})),G={class:"news-edit__seo-item"},S=n((function(){return Object(a["h"])("span",null,"Keywords:",-1)})),D={class:"news-edit__seo-item"},R=n((function(){return Object(a["h"])("span",null,"Description:",-1)})),C=Object(a["j"])("Сохранить");function U(e,t,i,n,U,P){var E=this,z=Object(a["H"])("my-button"),L=Object(a["H"])("news-edit-gallery"),M=Object(a["H"])("router-link");return Object(a["z"])(),Object(a["g"])("div",l,[Object(a["h"])("div",s,[Object(a["h"])("div",c,[Object(a["h"])("label",u,[Object(a["R"])(Object(a["h"])("input",{class:"switch__checkbox",type:"checkbox",onChange:t[0]||(t[0]=function(){return P.setLanguage&&P.setLanguage.apply(P,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return U.ua=e})},null,544),[[a["L"],U.ua]]),r])])]),Object(a["h"])("div",o,[Object(a["R"])(Object(a["h"])("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=function(e){return U.actual=e}),onChange:t[3]||(t[3]=function(){return P.setActual&&P.setActual.apply(P,arguments)})},null,544),[[a["L"],U.actual]])]),Object(a["h"])("div",d,[h,Object(a["R"])(Object(a["h"])("input",{type:"text",placeholder:"Название новости","onUpdate:modelValue":t[4]||(t[4]=function(e){return U.name=e})},null,512),[[a["O"],U.name]])]),Object(a["h"])("div",g,[m,Object(a["R"])(Object(a["h"])("textarea",{placeholder:"Описание","onUpdate:modelValue":t[5]||(t[5]=function(e){return U.description=e})},null,512),[[a["O"],U.description]])]),Object(a["h"])("div",p,[f,Object(a["h"])("img",{src:U.img,alt:"",onClick:t[6]||(t[6]=function(){return P.onPickFile&&P.onPickFile.apply(P,arguments)})},null,8,b),Object(a["h"])("input",{id:"inputFile",type:"file",style:{display:"none"},ref:"fileInput",accept:"image/*",onChange:t[7]||(t[7]=function(){return P.onFilePicked&&P.onFilePicked.apply(P,arguments)})},null,544),Object(a["k"])(z,{onClick:P.deleteMainImg},{default:Object(a["Q"])((function(){return[y]})),_:1},8,["onClick"])]),Object(a["h"])("div",O,[j,(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["F"])(this.gallery,(function(e){return Object(a["z"])(),Object(a["e"])(L,{key:e.id,gallery:e,id:E.id,items:E.gallery,ref:"gallery",onCreate:P.updateGallery,onDelete:P.deleteGalleryItem},null,8,["gallery","id","items","onCreate","onDelete"])})),128)),Object(a["h"])("input",{class:"add-gallery-item",type:"file",style:{display:"none"},ref:"fileInputGallery",accept:"image/*",onChange:t[8]||(t[8]=function(){return P.addNewsGalleryItemPicked&&P.addNewsGalleryItemPicked.apply(P,arguments)})},null,544),Object(a["k"])(z,{class:"add text-success",onClick:P.addNewsGalleryItem},{default:Object(a["Q"])((function(){return[w]})),_:1},8,["onClick"])]),Object(a["h"])("div",k,[v,Object(a["R"])(Object(a["h"])("input",{type:"text",placeholder:"Ссылка на видео в youtube","onUpdate:modelValue":t[9]||(t[9]=function(e){return U.link=e})},null,512),[[a["O"],U.link]])]),Object(a["h"])("div",I,[_,Object(a["h"])("form",null,[Object(a["h"])("div",N,[V,Object(a["R"])(Object(a["h"])("input",{type:"text",placeholder:"URL","onUpdate:modelValue":t[10]||(t[10]=function(e){return U.seo.url=e})},null,512),[[a["O"],U.seo.url]])]),Object(a["h"])("div",x,[F,Object(a["R"])(Object(a["h"])("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[11]||(t[11]=function(e){return U.seo.title=e})},null,512),[[a["O"],U.seo.title]])]),Object(a["h"])("div",G,[S,Object(a["R"])(Object(a["h"])("input",{type:"text",placeholder:"Keywords","onUpdate:modelValue":t[12]||(t[12]=function(e){return U.seo.keywords=e})},null,512),[[a["O"],U.seo.keywords]])]),Object(a["h"])("div",D,[R,Object(a["R"])(Object(a["h"])("textarea",{placeholder:"Description","onUpdate:modelValue":t[13]||(t[13]=function(e){return U.seo.description=e})},null,512),[[a["O"],U.seo.description]])])])]),Object(a["k"])(M,{class:"news-edit__btns",to:"/admin/news"},{default:Object(a["Q"])((function(){return[Object(a["k"])(z,{class:"news-edit__btns-btn",onClick:P.submit},{default:Object(a["Q"])((function(){return[C]})),_:1},8,["onClick"])]})),_:1})])}var P=i("5530"),E=i("ade3"),z=(i("b64b"),i("b866")),L=i("5502"),M=i("66ce"),B=i("ab55"),H={class:"news-edit__gallery-item"},T=["src"];function $(e,t,i,n,l,s){var c=Object(a["H"])("my-close-button");return Object(a["z"])(),Object(a["g"])("div",H,[Object(a["k"])(c,{onClick:s.deleteGalleryItem},null,8,["onClick"]),Object(a["h"])("img",{class:Object(a["r"])(i.gallery.id),src:l.img,alt:"",onClick:t[0]||(t[0]=function(){return s.onPickFileGallery&&s.onPickFileGallery.apply(s,arguments)})},null,10,T),Object(a["h"])("input",{type:"file",style:{display:"none"},ref:"fileInputGallery",accept:"image/*",onChange:t[1]||(t[1]=function(){return s.onFilePickedGallery&&s.onFilePickedGallery.apply(s,arguments)})},null,544)])}var A=i("1da1"),q=(i("96cf"),i("99af"),i("6b23")),Q=i("588e"),X=i("7ac4"),J={name:"NewsEditGallery",components:{MyCloseButton:q["a"]},props:["gallery","id","items"],data:function(){return{img:this.gallery.img}},methods:Object(P["a"])(Object(P["a"])({},Object(L["d"])(["updateNewsGalleryItem","deleteNewsGalleryItem"])),{},{uploadFile:function(){var e="news/".concat(this.id,"/gallery/").concat(this.gallery.id),t=Object(Q["d"])(X["a"],e);Object(Q["e"])(t,this.file)},getFileUrl:function(){var e=this,t="news/".concat(this.id,"/gallery/").concat(this.gallery.id),i=setInterval(Object(A["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(Q["b"])(Object(Q["d"])(X["a"],t)).then((function(t){t&&(e.img=t)}));case 2:e.img&&clearInterval(i);case 3:case"end":return a.stop()}}),a)}))),250)},onPickFileGallery:function(){this.$refs.fileInputGallery.click()},onFilePickedGallery:function(e){var t=this,i=e.target.files,a=new FileReader;if(this.file=i[0],this.filename=i[0].name,this.filename.indexOf(".")<=0)return alert("Please add a valid file");a.readAsDataURL(i[0]),this.img="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g",this.uploadFile(),setTimeout((function(){t.getFileUrl()}),1e3),setTimeout((function(){t.$emit("create",{id:t.gallery.id,img:t.img})}),2e3)},deleteGalleryItem:function(){if(1===Object.keys(this.items).length)return alert("Должна быть хотя бы 1 картинка");this.$emit("delete",{id:this.gallery.id});var e="news/".concat(this.id,"/gallery/").concat(this.gallery.id),t=Object(Q["d"])(X["a"],e);Object(Q["a"])(t)}})},K=(i("11fa"),i("6b0d")),Y=i.n(K);const W=Y()(J,[["render",$],["__scopeId","data-v-16b93a53"]]);var Z=W,ee=new Date,te=ee.getDate()+"."+(ee.getMonth()+1)+"."+ee.getFullYear(),ie={name:"NewsEdit",components:{NewsEditGallery:Z,MyButton:z["a"]},computed:Object(L["c"])(["getStateNews","getStateNewsEdit"]),mounted:function(){var e=this,t=this.getStateNews.database[this.id];if(t)this.actual=t.actual,this.actualValue=t.actualValue,this.name=t.name,this.description=t.description,this.img=t.img,this.gallery=t.gallery,this.link=t.link,this.seo=t.seo,this.uaItem=t.ua;else{var i=Object(M["c"])(B["a"],"news/".concat(this.id));Object(M["b"])(i,(function(i){var a=i.val();a?(e.actual=a.actual,e.actualValue=a.actualValue,e.name=a.name,e.description=a.description,e.img=a.img,e.gallery=a.gallery,e.link=a.link,e.seo=a.seo,e.uaItem=a.ua):(e.getStateNews.database[e.id]={date:te,actual:!1,actualValue:"ВЫКЛ",name:"News",description:"",img:"https://via.placeholder.com/400",gallery:Object(E["a"])({},(+new Date-+new Date%100)/100,{id:(+new Date-+new Date%100)/100,img:"https://via.placeholder.com/200"}),link:"",seo:{url:"",title:"",keywords:"",description:""},ua:{id:e.id,date:te,name:"News",description:"",img:"https://via.placeholder.com/400",gallery:Object(E["a"])({},(+new Date-+new Date%100)/100+5,{id:(+new Date-+new Date%100)/100+5,img:"https://via.placeholder.com/200"}),link:"",seo:{url:"",title:"",keywords:"",description:""}}},t=e.getStateNews.database[e.id],e.actual=t.actual,e.actualValue=t.actualValue,e.name=t.name,e.description=t.description,e.img=t.img,e.gallery=t.gallery,e.link=t.link,e.seo=t.seo,e.uaItem=t.ua)}))}},props:["id"],data:function(){return{date:te,actual:!1,actualValue:"ВЫКЛ",name:"News",description:"",img:"https://via.placeholder.com/400",gallery:{0:{id:0,img:"https://via.placeholder.com/200"}},link:"",seo:{url:"",title:"",keywords:"",description:""},ua:!1,uaItem:{}}},methods:Object(P["a"])(Object(P["a"])({},Object(L["d"])(["uploadFileNewsImg","getDownloadNewsURL","deleteFileNewsImg"])),{},{submit:function(){var e=new Date,t=e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear();if(this.ua){var i=this.getStateNews.database[this.id];this.getStateNews.database[this.id].ua={id:this.id,actual:i.actual,actualValue:i.actualValue,name:this.name,date:this.date,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo}}else this.uaItem.actual=this.actual,this.uaItem.actualValue=this.actualValue,this.getStateNews.database[this.id]={actual:this.actual,actualValue:this.actualValue,name:this.name,date:this.date,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo,ua:this.uaItem};var a=this.getStateNews.database[this.id];Object(M["d"])(Object(M["c"])(B["a"],"news/".concat(this.id)),{id:this.id,date:t,actual:a.actual,actualValue:a.actualValue,name:a.name,description:a.description,img:a.img,gallery:a.gallery,link:a.link,seo:a.seo,ua:a.ua})},updateGallery:function(e){this.gallery[e.id]={id:e.id,img:e.img}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,i=e.target.files,a=new FileReader;if(this.file=i[0],this.filename=i[0].name,this.filename.indexOf(".")<=0)return alert("Please add a valid file");a.readAsDataURL(i[0]),this.uploadFileNewsImg({id:this.id,file:this.file,ua:this.ua}),this.getStateNewsEdit.img="",this.getStateNewsEdit.imgUa="",this.img="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g",setTimeout((function(){var e=setInterval((function(){t.getDownloadNewsURL({id:t.id,ua:t.ua}),t.getStateNewsEdit.img&&clearInterval(e),t.ua&&t.getStateNewsEdit.imgUa&&clearInterval(e)}),250)}),1e3),setTimeout((function(){t.ua?t.img=t.getStateNewsEdit.imgUa:t.img=t.getStateNewsEdit.img}),2e3)},addNewsGalleryItem:function(){if(Object.keys(this.gallery).length>4)return alert("Больше добавить нельзя");this.$refs.fileInputGallery.click()},addNewsGalleryItemPicked:function(e){var t=this;if(0!==Object.keys(e.target.files).length){var i=(+new Date-+new Date%100)/100;this.gallery[i]={id:i,img:"https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g"},setTimeout((function(){t.$refs.gallery.onFilePickedGallery(e)}),200)}},deleteGalleryItem:function(e){delete this.gallery[e.id]},deleteMainImg:function(){this.img="https://via.placeholder.com/400",this.deleteFileNewsImg({id:this.id,ua:this.ua})},setActual:function(){this.actual?this.actualValue="ВКЛ":this.actualValue="ВЫКЛ"},setLanguage:function(){if(this.ua)this.getStateNews.database[this.id]={actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo,ua:this.uaItem},this.name=this.uaItem.name,this.description=this.uaItem.description,this.img=this.uaItem.img,this.gallery=this.uaItem.gallery,this.link=this.uaItem.link,this.seo=this.uaItem.seo;else{var e=this.getStateNews.database[this.id];this.getStateNews.database[this.id].ua={id:this.id,date:te,actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,img:this.img,gallery:this.gallery,link:this.link,seo:this.seo},this.name=e.name,this.description=e.description,this.img=e.img,this.gallery=e.gallery,this.link=e.link,this.seo=e.seo,this.uaItem=e.ua}}})};i("0723");const ae=Y()(ie,[["render",U],["__scopeId","data-v-fb159bdc"]]);t["default"]=ae}}]);
//# sourceMappingURL=chunk-021cc8f4.8d508344.js.map