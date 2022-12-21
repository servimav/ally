import{z as V,A as U,h as q,o as d,i as n,w as $,r as b,k as c,q as o,B as r,t as k,C as S,l as f,D as T,F as E,n as C,j as w,u as I,E as L,G as A,H as h,I as M}from"./index.c12b9b40.js";import{_ as B}from"./InputTextarea.vue_vue_type_script_setup_true_lang.4147aab5.js";const x=(l,y)=>{const i=V({data:"",description:"",title:"",type:"TEXT",public:!1,slug:"mi-texto"});return l.type&&(i.value.type=l.type),U(()=>i.value.title,e=>{e&&(i.value.slug=e.replaceAll(" ","-").toLocaleLowerCase())}),{form:i}},F=["onSubmit"],G={class:"mt-4"},R={class:"btn-primary dark:bg-primary-low",type:"submit"},W=q({__name:"QrForm",props:{type:{default:"TEXT"},save:{type:Boolean}},emits:["complete"],setup(l,{emit:y}){const i=l,{form:e}=x(i);function s(){let a=e.value.data;e.value.type==="TEL"?a=`tel:${e.value.data}`:e.value.type==="SMS"?a=`smsto:${e.value.data}`:e.value.type==="EMAIL"?a=`mailto:${e.value.data}`:e.value.type==="WHATSAPP"?a=`https://wa.me/${e.value.data}`:e.value.type==="TELEGRAM"&&(a=`https://t.me/${e.value.data}`),y("complete","create",{...e.value,data:a})}return(a,t)=>{const m=b("InputText"),p=b("Card");return d(),n(p,{class:"p-4"},{default:$(()=>[c("form",{class:"space-y-2 text-primary-low dark:text-slate-200",onSubmit:S(s,["prevent"])},[l.save?(d(),n(m,{key:0,modelValue:o(e).title,"onUpdate:modelValue":t[0]||(t[0]=u=>o(e).title=u),"id-key":"input-qr-title",label:"Titulo",placeholder:"Mi Titulo",required:""},null,8,["modelValue"])):r("",!0),l.type==="TEXT"?(d(),n(B,{key:1,modelValue:o(e).data,"onUpdate:modelValue":t[1]||(t[1]=u=>o(e).data=u),"id-key":"input-qr-data-text",label:"Texto",placeholder:"Su texto aqui",required:"",rows:2},null,8,["modelValue"])):r("",!0),l.type==="URL"?(d(),n(m,{key:2,placeholder:"https://www.example.com",modelValue:o(e).data,"onUpdate:modelValue":t[2]||(t[2]=u=>o(e).data=u),"id-key":"input-qr-data-url",label:"URL",required:""},null,8,["modelValue"])):r("",!0),l.type==="TEL"?(d(),n(m,{key:3,type:"tel",placeholder:"55555555",modelValue:o(e).data,"onUpdate:modelValue":t[3]||(t[3]=u=>o(e).data=u),"id-key":"input-qr-data-tel",label:"Telefono",required:""},null,8,["modelValue"])):r("",!0),l.type==="SMS"?(d(),n(m,{key:4,type:"tel",placeholder:"55555555",modelValue:o(e).data,"onUpdate:modelValue":t[4]||(t[4]=u=>o(e).data=u),"id-key":"input-qr-data-sms",label:"Telefono",required:""},null,8,["modelValue"])):r("",!0),l.type==="WHATSAPP"?(d(),n(m,{key:5,type:"tel",placeholder:"55555555",modelValue:o(e).data,"onUpdate:modelValue":t[5]||(t[5]=u=>o(e).data=u),"id-key":"input-qr-data-whatsapp",label:"Telefono",required:""},null,8,["modelValue"])):r("",!0),l.type==="TELEGRAM"?(d(),n(m,{key:6,type:"text",placeholder:"MyUser",modelValue:o(e).data,"onUpdate:modelValue":t[6]||(t[6]=u=>o(e).data=u),"id-key":"input-qr-data-telegram",label:"Usuario",required:""},null,8,["modelValue"])):r("",!0),l.type==="EMAIL"?(d(),n(m,{key:7,type:"email",placeholder:"myemail@email.com",modelValue:o(e).data,"onUpdate:modelValue":t[7]||(t[7]=u=>o(e).data=u),"id-key":"input-qr-data-email",label:"Email",required:""},null,8,["modelValue"])):r("",!0),l.type==="WALLET"?(d(),n(m,{key:8,type:"text",modelValue:o(e).data,"onUpdate:modelValue":t[8]||(t[8]=u=>o(e).data=u),"id-key":"input-qr-data-wallet",label:"Wallet",required:""},null,8,["modelValue"])):r("",!0),l.save?(d(),n(m,{key:9,modelValue:o(e).slug,"onUpdate:modelValue":t[9]||(t[9]=u=>o(e).slug=u),"id-key":"input-qr-slug",label:"Slug",required:""},null,8,["modelValue"])):r("",!0),c("div",G,[c("button",R,k(l.save?"Guardar":"Generar QR"),1)])],40,F)]),_:1})}}}),P={class:"mb-6"},Q=["for"],X=["id","readonly","value","placeholder","required"],D=["value"],H=q({__name:"InputSelect",props:{modelValue:null,options:null,label:null,required:{type:Boolean},idKey:{default:Date.now().toString()},readonly:{type:Boolean},inputClass:{default:"bg-slate-100"},labelClass:null,placeholder:null},emits:["update:model-value"],setup(l,{emit:y}){function i(e){var s;y("update:model-value",(s=e.target)==null?void 0:s.value)}return(e,s)=>(d(),f("div",P,[l.label?(d(),f("div",{key:0,class:T(["py-2 text-justify w-full",l.labelClass])},[c("label",{for:l.idKey},k(l.label),9,Q)],2)):r("",!0),c("select",{id:l.idKey,readonly:l.readonly,value:l.modelValue,onInput:i,placeholder:l.placeholder,class:T(["form-input",l.inputClass]),required:l.required},[(d(!0),f(E,null,C(l.options,(a,t)=>(d(),f("option",{key:`option-${t}`,value:a.value,class:"py-2"},k(a.label),9,D))),128))],42,X)]))}}),N=["onSubmit"],K={class:"mt-4"},j={class:"btn-primary dark:bg-primary-low",type:"submit"},z=q({__name:"QrFormWifi",props:{type:{default:"TEXT"},save:{type:Boolean}},emits:["complete"],setup(l,{emit:y}){const i=l,e=[{label:"Abierta",value:"blank"}],{form:s}=x(i),a=V({hidden:!1,password:"",ssid:"",type:"blank"});function t(){s.value.data=`WIFI:S:${a.value.ssid};T:${a.value.type};P:${a.value.password};H:${a.value.hidden?"true":"false"};;`,y("complete","create",s.value)}return(m,p)=>{const u=b("InputText"),g=b("Card");return d(),n(g,{class:"p-4"},{default:$(()=>[c("form",{class:"space-y-2 text-primary-low dark:text-slate-200",onSubmit:S(t,["prevent"])},[l.save?(d(),n(u,{key:0,modelValue:o(s).title,"onUpdate:modelValue":p[0]||(p[0]=v=>o(s).title=v),"id-key":"input-qr-title",label:"Titulo",placeholder:"Mi Titulo",required:""},null,8,["modelValue"])):r("",!0),w(u,{modelValue:a.value.ssid,"onUpdate:modelValue":p[1]||(p[1]=v=>a.value.ssid=v),"id-key":"input-qr-wifi-ssid",label:"SSID",required:""},null,8,["modelValue"]),w(H,{modelValue:a.value.type,"onUpdate:modelValue":p[2]||(p[2]=v=>a.value.type=v),"id-key":"input-qr-wifi-type",label:"Security",required:"",options:e},null,8,["modelValue"]),w(u,{modelValue:a.value.password,"onUpdate:modelValue":p[3]||(p[3]=v=>a.value.password=v),"id-key":"input-qr-wifi-password",label:"Password",required:""},null,8,["modelValue"]),l.save?(d(),n(u,{key:1,modelValue:o(s).slug,"onUpdate:modelValue":p[4]||(p[4]=v=>o(s).slug=v),"id-key":"input-qr-slug",label:"Slug",required:""},null,8,["modelValue"])):r("",!0),c("div",K,[c("button",j,k(l.save?"Guardar":"Generar QR"),1)])],40,N)]),_:1})}}}),J={class:"p-2"},O={key:0,class:"max-w-md"},Y={class:"text-center mt-4 p-2 max-w-md"},ee=q({__name:"GenerateQr",setup(l){const y=M();I(),L();const i=V("TEXT"),e=V(),s=V(!0);async function a(t,m,p){e.value=m.data,s.value=!1}return A(()=>{i.value=y.params.type.toString()?y.params.type.toString():"TEXT"}),(t,m)=>(d(),f("div",J,[s.value?(d(),f("div",O,[i.value==="WIFI"?(d(),n(z,{key:0,onComplete:a})):(d(),n(W,{key:1,type:i.value,onComplete:a},null,8,["type"]))])):r("",!0),c("div",Y,[e.value?(d(),n(h,{key:0,data:e.value,scale:10,downloadable:""},null,8,["data"])):r("",!0)])]))}});export{ee as default};
