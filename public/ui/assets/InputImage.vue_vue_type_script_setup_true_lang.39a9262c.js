import{h as p,o as m,l as y,k as u,B as _,F as b}from"./index.c12b9b40.js";function f(e){return e===void 0}function g(e){return e===null}function k(e){return typeof e=="boolean"}function c(e){return e===Object(e)}function h(e){return Array.isArray(e)}function F(e){return e instanceof Date}function A(e,t){return t?c(e)&&!f(e.uri):c(e)&&typeof e.size=="number"&&typeof e.type=="string"&&typeof e.slice=="function"}function N(e,t){return A(e,t)&&typeof e.name=="string"&&(c(e.lastModifiedDate)||typeof e.lastModified=="number")}function o(e){return f(e)?!1:e}function d(e,t,i,s){t=t||{},i=i||new FormData,t.indices=o(t.indices),t.nullsAsUndefineds=o(t.nullsAsUndefineds),t.booleansAsIntegers=o(t.booleansAsIntegers),t.allowEmptyArrays=o(t.allowEmptyArrays),t.noFilesWithArrayNotation=o(t.noFilesWithArrayNotation),t.dotsForObjectNotation=o(t.dotsForObjectNotation);const l=typeof i.getParts=="function";return f(e)||(g(e)?t.nullsAsUndefineds||i.append(s,""):k(e)?t.booleansAsIntegers?i.append(s,e?1:0):i.append(s,e):h(e)?e.length?e.forEach((n,a)=>{let r=s+"["+(t.indices?a:"")+"]";t.noFilesWithArrayNotation&&N(n,l)&&(r=s),d(n,t,i,r)}):t.allowEmptyArrays&&i.append(s+"[]",""):F(e)?i.append(s,e.toISOString()):c(e)&&!A(e,l)?Object.keys(e).forEach(n=>{const a=e[n];if(h(a))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);const r=s?t.dotsForObjectNotation?s+"."+n:s+"["+n+"]":n;d(a,t,i,r)}):i.append(s,e)),i}var E={serialize:d};const x={key:0,class:"shrink-0"},I=["src"],O={class:"block"},w=u("span",{class:"sr-only"},"Seleccionar Avatar",-1),D=p({__name:"InputImage",props:{img:null},emits:["update:model-value"],setup(e,{emit:t}){function i(s){var n;s.target;const l=(n=s.target)==null?void 0:n.files;l!=null&&l.length&&t("update:model-value",l[0])}return(s,l)=>(m(),y(b,null,[e.img?(m(),y("div",x,[u("img",{class:"object-cover w-32 h-32 rounded-full",src:e.img,alt:"profile photo"},null,8,I)])):_("",!0),u("label",O,[w,u("input",{type:"file",accept:"image/x-png,image/gif,image/jpeg",class:"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100",onInput:i},null,32)])],64))}});export{D as _,E as s};
