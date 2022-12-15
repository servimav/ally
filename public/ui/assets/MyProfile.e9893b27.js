import{h as k,u as x,J as A,o as y,l as w,k as d,q as I,F as g,E as C,B as E,G as B,j as c,i as O,z as D,D as S,r as V,w as $}from"./index.e54cea81.js";function b(e){return e===void 0}function z(e){return e===null}function M(e){return typeof e=="boolean"}function _(e){return e===Object(e)}function h(e){return Array.isArray(e)}function P(e){return e instanceof Date}function N(e,a){return a?_(e)&&!b(e.uri):_(e)&&typeof e.size=="number"&&typeof e.type=="string"&&typeof e.slice=="function"}function q(e,a){return N(e,a)&&typeof e.name=="string"&&(_(e.lastModifiedDate)||typeof e.lastModified=="number")}function f(e){return b(e)?!1:e}function v(e,a,s,o){a=a||{},s=s||new FormData,a.indices=f(a.indices),a.nullsAsUndefineds=f(a.nullsAsUndefineds),a.booleansAsIntegers=f(a.booleansAsIntegers),a.allowEmptyArrays=f(a.allowEmptyArrays),a.noFilesWithArrayNotation=f(a.noFilesWithArrayNotation),a.dotsForObjectNotation=f(a.dotsForObjectNotation);const m=typeof s.getParts=="function";return b(e)||(z(e)?a.nullsAsUndefineds||s.append(o,""):M(e)?a.booleansAsIntegers?s.append(o,e?1:0):s.append(o,e):h(e)?e.length?e.forEach((n,t)=>{let i=o+"["+(a.indices?t:"")+"]";a.noFilesWithArrayNotation&&q(n,m)&&(i=o),v(n,a,s,i)}):a.allowEmptyArrays&&s.append(o+"[]",""):P(e)?s.append(o,e.toISOString()):_(e)&&!N(e,m)?Object.keys(e).forEach(n=>{const t=e[n];if(h(t))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);const i=o?a.dotsForObjectNotation?o+"."+n:o+"["+n+"]":n;v(t,a,s,i)}):s.append(o,e)),s}var L={serialize:v};const W={class:"shrink-0"},G=["src"],R={class:"block"},T=d("span",{class:"sr-only"},"Seleccionar Avatar",-1),J=k({__name:"InputImage",emits:["update:model-value"],setup(e,{emit:a}){const s=x(),o=A(()=>{var n;return(n=s.profile)==null?void 0:n.avatar});function m(n){var i;n.target;const t=(i=n.target)==null?void 0:i.files;t!=null&&t.length&&a("update:model-value",t[0])}return(n,t)=>(y(),w(g,null,[d("div",W,[d("img",{class:"object-cover w-32 h-32 rounded-full",src:I(o),alt:"profile photo"},null,8,G)]),d("label",R,[T,d("input",{type:"file",accept:"image/x-png,image/gif,image/jpeg",class:"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100",onInput:m},null,32)])],64))}}),H=["onSubmit"],K={class:"space-y-2"},Q=d("div",{class:"my-10"},[d("button",{type:"submit",class:"btn-primary"},"Guardar")],-1),X=k({__name:"ProfileForm",emits:["complete"],setup(e,{emit:a}){const s=x(),{axiosError:o,success:m,error:n}=C(),t=E({email:"",avatar:void 0,password:"",name:"",nick:"",password_confirmation:""}),i=A(()=>s.profile);function U(p){let l=p.replace(" ","-").toLocaleLowerCase();t.value.nick=l}async function F(){try{if(t.value.password!==t.value.password_confirmation)n("La contrase\xF1a no coincide");else{if(t.value.nick){const r=t.value.nick.length-1;r&&t.value.nick[r]==="-"&&(t.value.nick=t.value.nick.slice(0,r))}const p=L.serialize(t.value,{nullsAsUndefineds:!0,booleansAsIntegers:!0});console.log({formData:t.value.nick});const l=await s.update(p);m("Perfil actualizado"),a("complete",l)}}catch(p){o(p)}}return B(async()=>{await s.getProfile(),i.value&&(t.value={email:i.value.email,name:i.value.name,nick:i.value.nick,password:"",password_confirmation:"",avatar:void 0})}),(p,l)=>{const r=V("InputText");return y(),w("form",{onSubmit:S(F,["prevent"])},[d("div",K,[c(J,{"onUpdate:modelValue":l[0]||(l[0]=u=>t.value.avatar=u)}),c(r,{"id-key":"profile-name",modelValue:t.value.name,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value.name=u),label:"Nombre",required:""},null,8,["modelValue"]),c(r,{"id-key":"profile-nick","model-value":t.value.nick,"onUpdate:modelValue":U,label:"Nick",required:""},null,8,["model-value"]),c(r,{"id-key":"profile-email",modelValue:t.value.email,"onUpdate:modelValue":l[2]||(l[2]=u=>t.value.email=u),label:"Email",type:"email",required:""},null,8,["modelValue"]),c(r,{"id-key":"profile-password",modelValue:t.value.password,"onUpdate:modelValue":l[3]||(l[3]=u=>t.value.password=u),label:"Cambiar Contrase\xF1a",type:"password"},null,8,["modelValue"]),t.value.password?(y(),O(r,{key:0,"id-key":"profile-password-confirmation",modelValue:t.value.password_confirmation,"onUpdate:modelValue":l[4]||(l[4]=u=>t.value.password_confirmation=u),label:"Repita Contrase\xF1a",type:"password"},null,8,["modelValue"])):D("",!0)]),Q],40,H)}}}),Y={class:"p-2"},j=k({__name:"MyProfile",setup(e){return(a,s)=>{const o=V("Card");return y(),w("div",Y,[c(o,{class:"p-4"},{default:$(()=>[c(X)]),_:1})])}}});export{j as default};
