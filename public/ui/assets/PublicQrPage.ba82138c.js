import{h as w,Z as T,$ as E,E as N,B as d,J as m,T as q,G as P,o as v,i as _,w as f,N as A,I,r as y,k as a,t as s,j as h,q as r,H as L,U as R}from"./index.21a815f3.js";const $={class:"text-center"},j={class:"text-2xl mt-4"},D={class:"mt-4 bg-amber-300 border text-primary p-2"},G={class:"mt-4 text-justify text-sm font-light p-2 text-primary"},H=a("div",{class:"text-center text-xl"}," No hay datos para mostrar",-1),M={class:"text-center text-md mt-4"},z=w({__name:"PublicQrPage",setup(U){const x=T(E),o=N(),g=A(),n=I(),c=d(""),t=d(),l=m(()=>t.value?t.value.type==="TEL"?t.value.data.split(":").length>1?t.value.data.split(":")[1]:t.value.data:(t.value.type==="TELEGRAM"||t.value.type==="WHATSAPP"||t.value.type==="URL")&&t.value.data.split("//").length>1?t.value.data.split(":")[1]:t.value.data:""),C=m(()=>x.md?10:15),{copy:b,copied:k,isSupported:B}=q({source:l.value});async function S(){B.value?(await b(),k.value&&o.success("Copiado correctamente")):o.error("Su dispositivo no soporta la funci\xF3n")}return P(async()=>{const i=n.params.name.toString(),u=n.params.slug.toString();try{const e=await g.qr.public(i,u)}catch(e){c.value=o.axiosError(e)}}),(i,u)=>{const e=y("BaseIcon"),p=y("Card");return t.value?(v(),_(p,{key:0},{default:f(()=>[a("div",$,[a("div",j,s(t.value.title),1),h(L,{data:t.value.data,scale:r(C),downloadable:""},null,8,["data","scale"]),a("div",D,[a("span",null,s(r(l)),1),a("span",{class:"float-right mt-1 cursor-pointer",onClick:S},[h(e,{path:r(R),size:"16",class:"fill-primary"},null,8,["path"])])]),a("div",G,s(t.value.description),1)])]),_:1})):(v(),_(p,{key:1,class:"p-4"},{default:f(()=>[H,a("div",M,s(c.value),1)]),_:1}))}}});export{z as default};
