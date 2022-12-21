import{h as w,E as V,z as _,G as $,o as d,l as y,k as c,j as u,C as k,t as N,r as z,N as E,i as x,w as P,F as C,n as B,O as D}from"./index.c12b9b40.js";import{_ as U,s as h}from"./InputImage.vue_vue_type_script_setup_true_lang.39a9262c.js";import{_ as A}from"./InputTextarea.vue_vue_type_script_setup_true_lang.4147aab5.js";import{_ as F}from"./MyLink.vue_vue_type_script_setup_true_lang.f8abde9b.js";const I={class:"space-y-2"},S={class:"my-10"},q=c("button",{type:"submit",class:"btn-primary"},"Guardar",-1),G=w({__name:"ProductForm",props:{update:null},emits:["completed","cancel"],setup(m,{emit:p}){const o=m,{product:l}=E(),{error:f,success:s,axiosError:b}=V(),t=_({description:"",image:void 0,price:0,title:""});async function r(a=!1){try{const e=h.serialize(t.value,{nullsAsUndefineds:!0,booleansAsIntegers:!0});o.update?(a?(await l.remove(o.update.id),s("Producto Eliminado")):(await l.update(o.update.id,e),s("Producto Actualizado")),p("completed")):a?p("cancel"):(await l.store(e),s("Producto Guardado"),p("completed"))}catch(e){b(e)}t.value.image=void 0}function v(a){a&&(a.size>1e6?f("La imagen debe ser menor de 1Mb"):t.value.image=a)}return $(()=>{var a,e,i;o.update&&(t.value={description:(a=o.update)==null?void 0:a.description,price:(e=o.update)==null?void 0:e.price,title:(i=o.update)==null?void 0:i.title})}),(a,e)=>{var g;const i=z("InputText");return d(),y("form",{onSubmit:e[4]||(e[4]=k(n=>r(!1),["prevent"])),autocomplete:"off"},[c("div",I,[u(U,{"onUpdate:modelValue":v,img:(g=m.update)==null?void 0:g.image},null,8,["img"]),u(i,{"id-key":"input-product-title",label:"Nombre",modelValue:t.value.title,"onUpdate:modelValue":e[0]||(e[0]=n=>t.value.title=n),type:"text",placeholder:"Nombre",required:""},null,8,["modelValue"]),u(A,{"id-key":"input-product-description",label:"Detalles",modelValue:t.value.description,"onUpdate:modelValue":e[1]||(e[1]=n=>t.value.description=n),placeholder:"Detalles",required:""},null,8,["modelValue"]),u(i,{"id-key":"input-product-number",label:"Precio",modelValue:t.value.price,"onUpdate:modelValue":e[2]||(e[2]=n=>t.value.price=n),type:"price",required:""},null,8,["modelValue"]),c("div",S,[q,c("button",{class:"btn bg-error text-white mt-2",onClick:e[3]||(e[3]=k(n=>r(!0),["prevent"]))},N(m.update?"Eliminar":"Cancelar"),1)])])],32)}}}),M={class:"p-2"},L={class:"mt-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2"},J=w({__name:"CatalogPage",setup(m){const{product:p}=E(),{axiosError:o}=V(),l=_(!1),f=_([]),s=_();function b(r){s.value=r,l.value=!0}async function t(){s.value=void 0,l.value=!1;try{const r=await p.index();f.value=r.data}catch(r){o(r)}}return $(async()=>{await t()}),(r,v)=>{const a=z("Card");return d(),y("div",M,[u(F,{type:"catalog",class:"mb-2"}),l.value?(d(),x(a,{key:0,class:"p-2 max-w-md"},{default:P(()=>[u(G,{update:s.value,onCompleted:t,onCancel:t},null,8,["update"])]),_:1})):(d(),y(C,{key:1},[c("button",{class:"btn-primary-low dark:bg-primary dark:text-slate-100 dark:border-primary-low",onClick:v[0]||(v[0]=k(()=>{l.value=!0},["prevent"]))},"A\xF1adir Oferta"),c("div",L,[(d(!0),y(C,null,B(f.value,(e,i)=>(d(),x(D,{product:e,key:`prod-${e.id}-${i}`,onClick:g=>b(e)},null,8,["product","onClick"]))),128))])],64))])}}});export{J as default};
