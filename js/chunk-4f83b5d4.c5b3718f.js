(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f83b5d4"],{"0dc3":function(t,e,a){"use strict";a("505e")},"151e":function(t,e,a){"use strict";a.r(e);a("a4d3"),a("e01a");var s=a("7a23"),i=function(t){return Object(s["C"])("data-v-5a492a7a"),t=t(),Object(s["A"])(),t},n={class:"pages-edit"},c={class:"switch__wrapper"},u={class:"switch"},o={class:"switch__label"},d=i((function(){return Object(s["h"])("span",{class:"lever"},null,-1)})),l={class:"pages-edit__phone"},h=i((function(){return Object(s["h"])("span",null,"Телефон",-1)})),r={class:"pages-edit__seo-text"},p=i((function(){return Object(s["h"])("span",null,"SEO текст:",-1)})),b={class:"pages-edit__seo"},O=i((function(){return Object(s["h"])("span",null,"SEO блок:",-1)})),j={class:"pages-edit__seo-item"},g=i((function(){return Object(s["h"])("span",null,"URL:",-1)})),m={class:"pages-edit__seo-item"},f=i((function(){return Object(s["h"])("span",null,"Title:",-1)})),_={class:"pages-edit__seo-item"},v=i((function(){return Object(s["h"])("span",null,"Keywords:",-1)})),w={class:"pages-edit__seo-item"},V=i((function(){return Object(s["h"])("span",null,"Description:",-1)})),y={class:"pages-edit__btns"},k=Object(s["j"])("Сохранить");function S(t,e,a,i,S,P){var x=Object(s["H"])("my-button");return Object(s["z"])(),Object(s["g"])("div",n,[Object(s["h"])("div",c,[Object(s["h"])("div",u,[Object(s["h"])("label",o,[Object(s["R"])(Object(s["h"])("input",{class:"switch__checkbox",type:"checkbox",onChange:e[0]||(e[0]=function(){return P.setLanguage&&P.setLanguage.apply(P,arguments)}),"onUpdate:modelValue":e[1]||(e[1]=function(t){return S.ua=t})},null,544),[[s["L"],S.ua]]),d])])]),Object(s["h"])("div",l,[h,Object(s["R"])(Object(s["h"])("input",{type:"text",placeholder:"777 85 89","onUpdate:modelValue":e[2]||(e[2]=function(t){return S.phone=t})},null,512),[[s["O"],S.phone]])]),Object(s["h"])("div",r,[p,Object(s["R"])(Object(s["h"])("textarea",{placeholder:"текст","onUpdate:modelValue":e[3]||(e[3]=function(t){return S.description=t})},null,512),[[s["O"],S.description]])]),Object(s["h"])("div",b,[O,Object(s["h"])("form",null,[Object(s["h"])("div",j,[g,Object(s["R"])(Object(s["h"])("input",{type:"text",placeholder:"URL","onUpdate:modelValue":e[4]||(e[4]=function(t){return S.seo.url=t})},null,512),[[s["O"],S.seo.url]])]),Object(s["h"])("div",m,[f,Object(s["R"])(Object(s["h"])("input",{type:"text",placeholder:"Title","onUpdate:modelValue":e[5]||(e[5]=function(t){return S.seo.title=t})},null,512),[[s["O"],S.seo.title]])]),Object(s["h"])("div",_,[v,Object(s["R"])(Object(s["h"])("input",{type:"text",placeholder:"Keywords","onUpdate:modelValue":e[6]||(e[6]=function(t){return S.seo.keywords=t})},null,512),[[s["O"],S.seo.keywords]])]),Object(s["h"])("div",w,[V,Object(s["R"])(Object(s["h"])("textarea",{placeholder:"Description","onUpdate:modelValue":e[7]||(e[7]=function(t){return S.seo.description=t})},null,512),[[s["O"],S.seo.description]])])])]),Object(s["h"])("div",y,[Object(s["k"])(x,{class:"pages-edit__btns-btn",onClick:P.submit},{default:Object(s["Q"])((function(){return[k]})),_:1},8,["onClick"])])])}a("b0c0");var P=a("b866"),x=a("66ce"),R=a("ab55"),U=a("5502"),I=new Date,D=I.getDate()+"."+(I.getMonth()+1)+"."+I.getFullYear(),L={name:"PagesEdit",components:{MyButton:P["a"]},computed:Object(U["c"])(["getStatePages"]),mounted:function(){var t=this.getStatePages.database[this.id];if(!t)return this.getStateNews.database[this.id]={date:D,actual:!0,actualValue:"ВКЛ",phone:"777 85 89",description:"",seo:{url:"",title:"",keywords:"",description:""},ua:{date:D,actual:!0,actualValue:"ВКЛ",phone:"777 85 89",description:"",seo:{url:"",title:"",keywords:"",description:""}}};this.date=t.date,this.phone=t.phone,this.description=t.description,this.seo=t.seo,this.uaItem=t.ua},data:function(){return{id:0,actual:!0,actualValue:"ВКЛ",name:"Главная страница",date:"",phone:"",description:"",seo:{},ua:!1,uaItem:{}}},methods:{submit:function(){var t=new Date,e=t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear();this.ua?this.getStatePages.database[this.id].ua={id:this.id,actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,phone:this.phone,date:this.date,seo:this.seo}:this.getStatePages.database[this.id]={id:this.id,actual:this.actual,actualValue:this.actualValue,name:this.name,description:this.description,phone:this.phone,date:this.date,seo:this.seo,ua:this.uaItem};var a=this.getStatePages.database[this.id];Object(x["d"])(Object(x["c"])(R["a"],"pages/".concat(this.id)),{id:a.id,date:e,actual:a.actual,actualValue:a.actualValue,name:a.name,phone:a.phone,description:a.description,seo:a.seo,ua:a.ua}),this.$router.push({path:"/admin/pages"})},setLanguage:function(){if(this.ua){var t=this.getStatePages.database[this.id].ua;this.getStatePages.database[this.id]={id:this.id,actual:this.actual,actualValue:this.actualValue,date:this.date,name:this.name,phone:this.phone,description:this.description,seo:this.seo,ua:this.uaItem},this.phone=t.phone,this.description=t.description,this.seo=t.seo,this.uaItem=t.ua}else{var e=this.getStatePages.database[this.id];this.getStatePages.database[this.id].ua={id:this.id,actual:this.actual,actualValue:this.actualValue,date:this.date,name:this.name,phone:this.phone,description:this.description,seo:this.seo},this.phone=e.phone,this.description=e.description,this.seo=e.seo,this.uaItem=e.ua}}}},C=(a("9355"),a("6b0d")),M=a.n(C);const E=M()(L,[["render",S],["__scopeId","data-v-5a492a7a"]]);e["default"]=E},"505e":function(t,e,a){},9355:function(t,e,a){"use strict";a("ee88")},b866:function(t,e,a){"use strict";var s=a("7a23"),i={class:"my-btn border-button"};function n(t,e,a,n,c,u){return Object(s["z"])(),Object(s["g"])("button",i,[Object(s["G"])(t.$slots,"default",{},void 0,!0)])}var c={name:"MyButton"},u=(a("0dc3"),a("6b0d")),o=a.n(u);const d=o()(c,[["render",n],["__scopeId","data-v-27e5dabb"]]);e["a"]=d},ee88:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4f83b5d4.c5b3718f.js.map