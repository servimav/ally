import{h as r,o as a,l as o,k as d,t as s,B as i,D as c}from"./index.c12b9b40.js";const m={class:"mb-6"},y={key:0,class:"py-2 text-justify w-full"},f=["for"],h=["id","readonly","value","rows","type","placeholder","required"],v=r({__name:"InputTextarea",props:{modelValue:null,type:{default:"text"},label:null,required:{type:Boolean},idKey:{default:Date.now().toString()},readonly:{type:Boolean},inputClass:{default:"bg-slate-100"},placeholder:null,rows:{default:3}},emits:["update:model-value"],setup(e,{emit:n}){function u(t){var l;n("update:model-value",(l=t.target)==null?void 0:l.value)}return(t,l)=>(a(),o("div",m,[e.label?(a(),o("div",y,[d("label",{for:e.idKey},s(e.label),9,f)])):i("",!0),d("textarea",{id:e.idKey,readonly:e.readonly,value:e.modelValue,rows:e.rows,onInput:u,type:e.type,placeholder:e.placeholder,class:c(["form-input",e.inputClass]),required:e.required},null,42,h)]))}});export{v as _};
