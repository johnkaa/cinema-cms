(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2691a71b"],{"0dc3":function(t,e,i){"use strict";i("505e")},"2dc7":function(t,e,i){"use strict";i("72bb")},3309:function(t,e,i){"use strict";i.r(e);i("a4d3"),i("e01a"),i("9911");var l=i("7a23"),s=function(t){return Object(l["C"])("data-v-16ab27f8"),t=t(),Object(l["A"])(),t},a={class:"films-editor"},n={class:"switch__wrapper"},c={class:"switch"},o={class:"switch__label"},r=s((function(){return Object(l["h"])("span",{class:"lever"},null,-1)})),h={class:"films-editor__name"},d=s((function(){return Object(l["h"])("span",null,"Название фильма",-1)})),u={class:"films-editor__description"},p=s((function(){return Object(l["h"])("span",null,"Описание",-1)})),m={class:"films-editor__main-img"},f=s((function(){return Object(l["h"])("span",null,"Главная картинка",-1)})),g=["src"],y=Object(l["j"])("Удалить"),b={class:"films-editor__gallery"},O=s((function(){return Object(l["h"])("span",null,"Размер: 1000х1900",-1)})),j=Object(l["j"])("+"),k={class:"films-editor__link"},I=s((function(){return Object(l["h"])("span",null,"Ссылка на трейлер",-1)})),v={class:"films-editor__type"},F=s((function(){return Object(l["h"])("span",null,"Тип кино",-1)})),_={class:"films-editor__type-item"},w=s((function(){return Object(l["h"])("label",{for:"3d"},"3D",-1)})),x={class:"films-editor__type-item"},S=s((function(){return Object(l["h"])("label",{for:"2d"},"2D",-1)})),P={class:"films-editor__type-item"},D=s((function(){return Object(l["h"])("label",{for:"IMAX"},"IMAX",-1)})),G={class:"films-editor__seo"},C=s((function(){return Object(l["h"])("span",null,"SEO блок:",-1)})),U={class:"films-editor__seo-item"},R=s((function(){return Object(l["h"])("span",null,"URL:",-1)})),A={class:"films-editor__seo-item"},M=s((function(){return Object(l["h"])("span",null,"Title:",-1)})),E={class:"films-editor__seo-item"},z=s((function(){return Object(l["h"])("span",null,"Keywords:",-1)})),X={class:"films-editor__seo-item"},L=s((function(){return Object(l["h"])("span",null,"Description:",-1)})),V={class:"films-editor__btns"},$=Object(l["j"])("Сохранить"),N=Object(l["j"])("Назад"),B={key:0,class:"info text-success"};function T(t,e,i,s,T,H){var q=this,Q=Object(l["H"])("my-button"),J=Object(l["H"])("films-editor-gallery");return Object(l["z"])(),Object(l["g"])("div",a,[Object(l["h"])("div",n,[Object(l["h"])("div",c,[Object(l["h"])("label",o,[Object(l["R"])(Object(l["h"])("input",{class:"switch__checkbox",type:"checkbox",onChange:e[0]||(e[0]=function(){return H.setLanguage&&H.setLanguage.apply(H,arguments)}),"onUpdate:modelValue":e[1]||(e[1]=function(t){return T.ua=t})},null,544),[[l["L"],T.ua]]),r])])]),Object(l["h"])("div",h,[d,Object(l["R"])(Object(l["h"])("input",{type:"text",placeholder:"Название фильма","onUpdate:modelValue":e[2]||(e[2]=function(t){return T.title=t})},null,512),[[l["O"],T.title]])]),Object(l["h"])("div",u,[p,Object(l["R"])(Object(l["h"])("textarea",{placeholder:"Описание","onUpdate:modelValue":e[3]||(e[3]=function(t){return T.description=t})},null,512),[[l["O"],T.description]])]),Object(l["h"])("div",m,[f,Object(l["h"])("img",{src:T.img,alt:"",onClick:e[4]||(e[4]=function(){return H.onPickFile&&H.onPickFile.apply(H,arguments)})},null,8,g),Object(l["h"])("input",{id:"inputFile",type:"file",style:{display:"none"},ref:"fileInput",accept:"image/*",onChange:e[5]||(e[5]=function(){return H.onFilePicked&&H.onFilePicked.apply(H,arguments)})},null,544),Object(l["k"])(Q,{onClick:H.deleteMainImg},{default:Object(l["Q"])((function(){return[y]})),_:1},8,["onClick"])]),Object(l["h"])("div",b,[O,(Object(l["z"])(!0),Object(l["g"])(l["a"],null,Object(l["F"])(this.gallery,(function(t){return Object(l["z"])(),Object(l["e"])(J,{key:t.id,gallery:t,path:q.path,pathID:q.id,items:q.gallery,ref:"gallery",onCreate:H.updateGallery,onDelete:H.deleteGalleryItem},null,8,["gallery","path","pathID","items","onCreate","onDelete"])})),128)),Object(l["k"])(Q,{class:"add text-success",onClick:H.addFilmGalleryItem},{default:Object(l["Q"])((function(){return[j]})),_:1},8,["onClick"]),Object(l["h"])("input",{class:"add-gallery-item",type:"file",style:{display:"none"},ref:"fileInputGallery",accept:"image/*",onChange:e[6]||(e[6]=function(){return H.addFilmGalleryItemPicked&&H.addFilmGalleryItemPicked.apply(H,arguments)})},null,544)]),Object(l["h"])("div",k,[I,Object(l["R"])(Object(l["h"])("input",{type:"text",placeholder:"Ссылка на видео в youtube","onUpdate:modelValue":e[7]||(e[7]=function(t){return T.link=t})},null,512),[[l["O"],T.link]])]),Object(l["h"])("div",v,[F,Object(l["h"])("div",_,[Object(l["R"])(Object(l["h"])("input",{type:"checkbox",id:"3d",name:"3d","onUpdate:modelValue":e[8]||(e[8]=function(t){return T.type.type3D=t})},null,512),[[l["L"],T.type.type3D]]),w]),Object(l["h"])("div",x,[Object(l["R"])(Object(l["h"])("input",{type:"checkbox",id:"2d",name:"2d","onUpdate:modelValue":e[9]||(e[9]=function(t){return T.type.type2D=t})},null,512),[[l["L"],T.type.type2D]]),S]),Object(l["h"])("div",P,[Object(l["R"])(Object(l["h"])("input",{type:"checkbox",id:"IMAX",name:"IMAX","onUpdate:modelValue":e[10]||(e[10]=function(t){return T.type.typeIMAX=t})},null,512),[[l["L"],T.type.typeIMAX]]),D])]),Object(l["h"])("div",G,[C,Object(l["h"])("form",null,[Object(l["h"])("div",U,[R,Object(l["R"])(Object(l["h"])("input",{type:"text",placeholder:"URL","onUpdate:modelValue":e[11]||(e[11]=function(t){return T.seo.url=t})},null,512),[[l["O"],T.seo.url]])]),Object(l["h"])("div",A,[M,Object(l["R"])(Object(l["h"])("input",{type:"text",placeholder:"Title","onUpdate:modelValue":e[12]||(e[12]=function(t){return T.seo.title=t})},null,512),[[l["O"],T.seo.title]])]),Object(l["h"])("div",E,[z,Object(l["R"])(Object(l["h"])("input",{type:"text",placeholder:"Keywords","onUpdate:modelValue":e[13]||(e[13]=function(t){return T.seo.keywords=t})},null,512),[[l["O"],T.seo.keywords]])]),Object(l["h"])("div",X,[L,Object(l["R"])(Object(l["h"])("textarea",{placeholder:"Description","onUpdate:modelValue":e[14]||(e[14]=function(t){return T.seo.description=t})},null,512),[[l["O"],T.seo.description]])])])]),Object(l["h"])("div",V,[Object(l["k"])(Q,{class:"films-editor__btns-btn",onClick:H.submit},{default:Object(l["Q"])((function(){return[$]})),_:1},8,["onClick"]),Object(l["k"])(Q,{class:"films-editor__btns-btn",onClick:H.back},{default:Object(l["Q"])((function(){return[N]})),_:1},8,["onClick"])]),this.uploaded?(Object(l["z"])(),Object(l["g"])("p",B,"Изменения сохранены")):Object(l["f"])("",!0)])}var H=i("5530"),q=(i("fb6a"),i("99af"),i("b0c0"),i("b64b"),i("b866")),Q={class:"films-editor__gallery-item"},J=["src"];function K(t,e,i,s,a,n){var c=Object(l["H"])("my-close-button");return Object(l["z"])(),Object(l["g"])("div",Q,[Object(l["k"])(c,{onClick:n.deleteGalleryItem},null,8,["onClick"]),Object(l["h"])("img",{class:Object(l["r"])(i.gallery.id),src:a.img,alt:"",onClick:e[0]||(e[0]=function(){return n.onPickFileGallery&&n.onPickFileGallery.apply(n,arguments)})},null,10,J),Object(l["h"])("input",{type:"file",style:{display:"none"},ref:"fileInputGallery",accept:"image/*",onChange:e[1]||(e[1]=function(){return n.onFilePickedGallery&&n.onFilePickedGallery.apply(n,arguments)})},null,544)])}var W=i("1da1"),Y=(i("96cf"),i("6b23")),Z=i("5502"),tt=i("588e"),et=i("7ac4"),it={name:"FilmsEditorGallery",components:{MyCloseButton:Y["a"]},props:["gallery","path","pathID","items"],data:function(){return{img:this.gallery.img}},methods:Object(H["a"])(Object(H["a"])({},Object(Z["d"])(["updateGalleryItem","deleteFilmGalleryItem"])),{},{uploadFile:function(){var t="films/films".concat(this.path[0].toUpperCase()+this.path.slice(1)+"/"+this.pathID,"/gallery/").concat(this.gallery.id),e=Object(tt["d"])(et["a"],t);Object(tt["e"])(e,this.file)},getFileUrl:function(){var t=this,e="films/films".concat(this.path[0].toUpperCase()+this.path.slice(1)+"/"+this.pathID,"/gallery/").concat(this.gallery.id),i=setInterval(Object(W["a"])(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,Object(tt["b"])(Object(tt["d"])(et["a"],e)).then((function(e){e&&(t.img=e)}));case 2:t.img&&clearInterval(i);case 3:case"end":return l.stop()}}),l)}))),250)},onPickFileGallery:function(){this.$refs.fileInputGallery.click()},onFilePickedGallery:function(t){var e=this,i=t.target.files,l=new FileReader;if(this.file=i[0],this.filename=i[0].name,this.filename.indexOf(".")<=0)return alert("Please add a valid file");l.readAsDataURL(i[0]),this.img="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g",this.uploadFile(),setTimeout((function(){e.getFileUrl()}),1e3),setTimeout((function(){e.$emit("create",{id:e.gallery.id,img:e.img})}),2e3)},deleteGalleryItem:function(){if(1===Object.keys(this.items).length)return alert("Должна быть хотя бы 1 картинка");this.$emit("delete",{id:this.gallery.id});var t="films/films".concat(this.path[0].toUpperCase()+this.path.slice(1)+"/"+this.pathID,"/gallery/").concat(this.gallery.id),e=Object(tt["d"])(et["a"],t);Object(tt["a"])(e)}})},lt=(i("b52d"),i("6b0d")),st=i.n(lt);const at=st()(it,[["render",K],["__scopeId","data-v-640f85f5"]]);var nt=at,ct=i("66ce"),ot=i("ab55"),rt={name:"FilmsEditor",components:{FilmsEditorGallery:nt,MyButton:q["a"]},computed:Object(Z["c"])(["getStateFilmsEditor","getStateFilmsNow","getStateFilmsSoon"]),mounted:function(){if(this.fullPath=this.path[0].toUpperCase()+this.path.slice(1),"Soon"===this.fullPath){this.soon=!0;var t=this.getStateFilmsSoon.database[this.id];t?(this.title=t.title,this.description=t.description,this.img=t.img,this.gallery=t.gallery,this.link=t.link,this.type=t.type,this.seo=t.seo,this.uaItem=t.ua):(this.title="Фильм",this.description="",this.img="https://via.placeholder.com/400",this.gallery={999:{id:"999",img:"https://via.placeholder.com/200"}},this.link="",this.type={type2D:!1,type3D:!1,typeIMAX:!1},this.seo={title:"",description:"",keywords:"",url:""},this.uaItem={title:"Фiльм",description:"",img:"https://via.placeholder.com/400",gallery:{9999:{id:"9999",img:"https://via.placeholder.com/200"}},link:"",type:{type2D:!1,type3D:!1,typeIMAX:!1},seo:{title:"",description:"",keywords:"",url:""}})}else{var e=this.getStateFilmsNow.database[this.id];e?(this.title=e.title,this.description=e.description,this.img=e.img,this.gallery=e.gallery,this.link=e.link,this.type=e.type,this.seo=e.seo,this.uaItem=e.ua):(this.title="Фильм",this.description="",this.img="https://via.placeholder.com/400",this.gallery={999:{id:"999",img:"https://via.placeholder.com/200"}},this.link="",this.type={type2D:!1,type3D:!1,typeIMAX:!1},this.seo={title:"",description:"",keywords:"",url:""},this.uaItem={title:"Фiльм",description:"",img:"https://via.placeholder.com/400",gallery:{9999:{id:"9999",img:"https://via.placeholder.com/200"}},link:"",type:{type2D:!1,type3D:!1,typeIMAX:!1},seo:{title:"",description:"",keywords:"",url:""}})}},props:["path","id"],data:function(){return{title:"",description:"",img:"",gallery:{},addGalleryImg:"",link:"",type:{},seo:{},uploaded:!1,ua:!1,uaItem:{},soon:!1,fullPath:""}},methods:Object(H["a"])(Object(H["a"])({},Object(Z["d"])(["uploadFileFilmImg","getFileFilmUrl","deleteFileFilmImg"])),{},{submit:function(){if(this.ua)if("Soon"===this.fullPath){this.getStateFilmsSoon.database[this.id].ua={id:this.id,soon:this.soon,title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo};var t=this.getStateFilmsSoon.database[this.id];Object(ct["d"])(Object(ct["c"])(ot["a"],"films/films".concat(this.fullPath,"/").concat(this.id)),{id:this.id,soon:this.soon,title:t.title,description:t.description,img:t.img,gallery:t.gallery,link:t.link,type:t.type,seo:t.seo,ua:t.ua})}else{this.getStateFilmsNow.database[this.id].ua={id:this.id,soon:this.soon,title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo};var e=this.getStateFilmsNow.database[this.id];Object(ct["d"])(Object(ct["c"])(ot["a"],"films/films".concat(this.fullPath,"/").concat(this.id)),{id:this.id,soon:this.soon,title:e.title,description:e.description,img:e.img,gallery:e.gallery,link:e.link,type:e.type,seo:e.seo,ua:e.ua})}else Object(ct["d"])(Object(ct["c"])(ot["a"],"films/films".concat(this.fullPath,"/").concat(this.id)),{id:this.id,soon:this.soon,title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo,ua:this.uaItem});this.$router.push({path:"/admin/films"})},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,i=t.target.files,l=new FileReader;if(this.file=i[0],this.filename=i[0].name,this.filename.indexOf(".")<=0)return alert("Please add a valid file");l.readAsDataURL(i[0]),this.uploadFileFilmImg({path:this.fullPath,id:this.id,file:this.file,ua:this.ua}),this.getStateFilmsEditor.img="",this.getStateFilmsEditor.imgUa="",this.img="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g",setTimeout((function(){var t=setInterval((function(){e.getFileFilmUrl({path:e.fullPath,id:e.id,ua:e.ua}),e.getStateFilmsEditor.img&&clearInterval(t),e.ua&&e.getStateFilmsEditor.imgUa&&clearInterval(t)}),250)}),1e3),setTimeout((function(){e.img=e.getStateFilmsEditor.img,e.ua&&(e.img=e.getStateFilmsEditor.imgUa)}),2e3)},addFilmGalleryItem:function(){if(Object.keys(this.gallery).length>4)return alert("Больше добавить нельзя");this.$refs.fileInputGallery.click()},addFilmGalleryItemPicked:function(t){var e=this;if(0!==Object.keys(t.target.files).length){var i=(+new Date-+new Date%100)/100;this.gallery[i]={id:i,img:"https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47on66p48qsf04xv9no0it5htgx7uzbpa4wx0kd1zg&rid=giphy.gif&ct=g"},setTimeout((function(){e.$refs.gallery.onFilePickedGallery(t)}),200)}},updateGallery:function(t){this.gallery[t.id]={id:t.id,img:t.img}},deleteGalleryItem:function(t){delete this.gallery[t.id]},deleteMainImg:function(){Object(ct["d"])(Object(ct["c"])(ot["a"],"films/films".concat(this.fullPath,"/").concat(this.id)),{id:this.id,title:this.title,description:this.description,img:"https://via.placeholder.com/400x400",gallery:this.gallery,link:this.link,type:this.type,seo:this.seo}),this.deleteFileFilmImg({path:this.fullPath,id:this.id})},back:function(){this.$router.push({path:"/admin/films"})},setLanguage:function(){if("Now"===this.fullPath)if(this.ua)this.getStateFilmsNow.database[this.id]={title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo,ua:this.uaItem},this.title=this.uaItem.title,this.description=this.uaItem.description,this.img=this.uaItem.img,this.gallery=this.uaItem.gallery,this.link=this.uaItem.link,this.type=this.uaItem.type,this.seo=this.uaItem.seo;else{var t=this.getStateFilmsNow.database[this.id];this.getStateFilmsNow.database[this.id].ua={id:this.id,title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo},this.title=t.title,this.description=t.description,this.img=t.img,this.gallery=t.gallery,this.link=t.link,this.type=t.type,this.seo=t.seo,this.uaItem=t.ua}else if(this.ua)this.getStateFilmsSoon.database[this.id]={title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo,ua:this.uaItem},this.title=this.uaItem.title,this.description=this.uaItem.description,this.img=this.uaItem.img,this.gallery=this.uaItem.gallery,this.link=this.uaItem.link,this.type=this.uaItem.type,this.seo=this.uaItem.seo;else{var e=this.getStateFilmsSoon.database[this.id];this.getStateFilmsSoon.database[this.id].ua={id:this.id,title:this.title,description:this.description,img:this.img,gallery:this.gallery,link:this.link,type:this.type,seo:this.seo},this.title=e.title,this.description=e.description,this.img=e.img,this.gallery=e.gallery,this.link=e.link,this.type=e.type,this.seo=e.seo,this.uaItem=e.ua}}})};i("2dc7");const ht=st()(rt,[["render",T],["__scopeId","data-v-16ab27f8"]]);e["default"]=ht},"505e":function(t,e,i){},"6b23":function(t,e,i){"use strict";var l=i("7a23"),s={class:"close-btn"};function a(t,e,i,a,n,c){return Object(l["z"])(),Object(l["g"])("button",s,"x")}var n={name:"MyCloseButton"},c=(i("e991"),i("6b0d")),o=i.n(c);const r=o()(n,[["render",a],["__scopeId","data-v-7b00fafe"]]);e["a"]=r},"72bb":function(t,e,i){},"857a":function(t,e,i){var l=i("1d80"),s=i("577e"),a=/"/g;t.exports=function(t,e,i,n){var c=s(l(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+s(n).replace(a,"&quot;")+'"'),o+">"+c+"</"+e+">"}},"8c38":function(t,e,i){},9911:function(t,e,i){"use strict";var l=i("23e7"),s=i("857a"),a=i("af03");l({target:"String",proto:!0,forced:a("link")},{link:function(t){return s(this,"a","href",t)}})},af03:function(t,e,i){var l=i("d039");t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b52d:function(t,e,i){"use strict";i("8c38")},b866:function(t,e,i){"use strict";var l=i("7a23"),s={class:"my-btn border-button"};function a(t,e,i,a,n,c){return Object(l["z"])(),Object(l["g"])("button",s,[Object(l["G"])(t.$slots,"default",{},void 0,!0)])}var n={name:"MyButton"},c=(i("0dc3"),i("6b0d")),o=i.n(c);const r=o()(n,[["render",a],["__scopeId","data-v-27e5dabb"]]);e["a"]=r},e991:function(t,e,i){"use strict";i("f42f")},f42f:function(t,e,i){},fb6a:function(t,e,i){"use strict";var l=i("23e7"),s=i("e8b5"),a=i("68ee"),n=i("861d"),c=i("23cb"),o=i("50c4"),r=i("fc6a"),h=i("8418"),d=i("b622"),u=i("1dde"),p=u("slice"),m=d("species"),f=[].slice,g=Math.max;l({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var i,l,d,u=r(this),p=o(u.length),y=c(t,p),b=c(void 0===e?p:e,p);if(s(u)&&(i=u.constructor,a(i)&&(i===Array||s(i.prototype))?i=void 0:n(i)&&(i=i[m],null===i&&(i=void 0)),i===Array||void 0===i))return f.call(u,y,b);for(l=new(void 0===i?Array:i)(g(b-y,0)),d=0;y<b;y++,d++)y in u&&h(l,d,u[y]);return l.length=d,l}})}}]);
//# sourceMappingURL=chunk-2691a71b.cf00e05d.js.map