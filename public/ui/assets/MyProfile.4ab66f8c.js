import{h as f,u as x,E as C,z as U,J as g,G as N,o as u,l as v,k as d,j as n,q as z,i as B,B as I,C as h,r as _,w as q}from"./index.c12b9b40.js";import{_ as E,s as F}from"./InputImage.vue_vue_type_script_setup_true_lang.39a9262c.js";const L=["onSubmit"],M={class:"space-y-2"},P=d("div",{class:"my-10"},[d("button",{type:"submit",class:"btn-primary"},"Guardar")],-1),S=f({__name:"ProfileForm",emits:["complete"],setup(k,{emit:m}){const t=x(),{axiosError:r,success:w,error:c}=C(),e=U({email:"",avatar:void 0,password:"",name:"",nick:"",password_confirmation:""}),i=g(()=>t.profile);function y(o){let a=o.replace(" ","-").toLocaleLowerCase();e.value.nick=a}async function V(){try{if(e.value.password!==e.value.password_confirmation)c("La contrase\xF1a no coincide");else{if(e.value.nick){const l=e.value.nick.length-1;l&&e.value.nick[l]==="-"&&(e.value.nick=e.value.nick.slice(0,l))}const o=F.serialize(e.value,{nullsAsUndefineds:!0,booleansAsIntegers:!0}),a=await t.update(o);w("Perfil actualizado"),m("complete",a)}}catch(o){r(o)}}function b(o){o&&(o.size>1e6?c("La imagen debe ser menor de 1Mb"):e.value.avatar=o)}return N(async()=>{await t.getProfile(),i.value&&(e.value={email:i.value.email,name:i.value.name,nick:i.value.nick,password:"",password_confirmation:"",avatar:void 0})}),(o,a)=>{var p;const l=_("InputText");return u(),v("form",{onSubmit:h(V,["prevent"])},[d("div",M,[n(E,{"onUpdate:modelValue":b,img:(p=z(t).profile)==null?void 0:p.avatar},null,8,["img"]),n(l,{"id-key":"profile-name",modelValue:e.value.name,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value.name=s),label:"Nombre",required:""},null,8,["modelValue"]),n(l,{"id-key":"profile-nick","model-value":e.value.nick,"onUpdate:modelValue":y,label:"Nick",required:""},null,8,["model-value"]),n(l,{"id-key":"profile-email",modelValue:e.value.email,"onUpdate:modelValue":a[1]||(a[1]=s=>e.value.email=s),label:"Email",type:"email",required:""},null,8,["modelValue"]),n(l,{"id-key":"profile-password",modelValue:e.value.password,"onUpdate:modelValue":a[2]||(a[2]=s=>e.value.password=s),label:"Cambiar Contrase\xF1a",type:"password"},null,8,["modelValue"]),e.value.password?(u(),B(l,{key:0,"id-key":"profile-password-confirmation",modelValue:e.value.password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=s=>e.value.password_confirmation=s),label:"Repita Contrase\xF1a",type:"password"},null,8,["modelValue"])):I("",!0)]),P],40,L)}}}),$={class:"p-2"},T=f({__name:"MyProfile",setup(k){return(m,t)=>{const r=_("Card");return u(),v("div",$,[n(r,{class:"p-4"},{default:q(()=>[n(S)]),_:1})])}}});export{T as default};