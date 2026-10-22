/* 6.10.0_20261021_ioizec */
import{Gm as e,Hp as r,jh as a,tg as o}from"./av-config.mjs";import{r as s}from"./emoji-reactions.mjs";import{Dc as t,Dg as l,Du as i,Ec as c,Eu as n,Go as m,Ig as p,Lo as d,Og as b,Sa as _,Ta as x,Vf as h,Zo as j,ac as g,do as u,gs as N,kg as k,mA as v,ol as f,wc as y,ws as C,yd as D,yo as T}from"./main-client.mjs";import{n as P,t as w}from"./time-picker.mjs";e();var E=/* @__PURE__ */o(p()),S=/* @__PURE__ */o(_()),V=s(),A=({reportProblemProps:{product:e,problem:o,day:s,setDay:p,time:_,setTime:h,description:E,logCheckbox:A,ticketCheckbox:G,ticket:I,onChange:L}})=>/* @__PURE__ */ /* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile-mobile",children:[
/* @__PURE__ */
/* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__product",children:[/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)("span",{className:"report-problem-container-mobile__title",children:t}),/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(x,{className:"report-problem-container-mobile_product-select country-code-select report-problem-container-mobile__select--dark",classNamePrefix:"react-select",options:b,defaultValue:e,isSearchable:!1,onChange:e=>{L(e,"Product")}})]}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__problemAndTime",children:[/* @__PURE__ */ /* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__problem",children:[/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)("span",{className:"report-problem-container-mobile__title",children:c}),/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(x,{className:"react-select-report country-code-select report-problem-container-mobile__select--dark",classNamePrefix:"react-select",placeholder:f,options:l,defaultValue:o,isSearchable:!1,onChange:e=>{L(e,"Problem")}})]}),/* @__PURE__ */ /* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__time",children:[/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)("span",{className:"report-problem-container-mobile__title",children:n}),/* @__PURE__ */ /* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__time__container report-problem-container-mobile__time__container--dark",children:[/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(w,{style:{marginTop:"10px",marginRight:"-6px",padding:"10px"},selectedStyle:{backgroundColor:"0E72ED"},date:s,setDate:p,dateFormat:"M-D-Y",maxDate:/* @__PURE__ */new Date,minDate:new Date(2022,0,1)}),/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(P,{time:_,setTime:h})]})]})]}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__description",children:[
/* @__PURE__ */
/* @__PURE__ */(0,V.jsx)("span",{className:"report-problem-container-mobile__title",children:j}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsx)("textarea",{value:E,onChange:e=>{e.target.value.length<=500&&L(e.target.value,"Description")},placeholder:T,className:"report-problem-container-mobile__description__text"}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsx)("span",{className:"report-problem-container-mobile__description__number",children:`${E.length}/500`})]}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsx)("div",{className:"report-problem-container-mobile__checkbox1",children:/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(m,{checked:A,onChange:e=>L(e,"LogCheckbox"),children:C})}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__checkbox2",children:[/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(m,{checked:G,onChange:e=>L(e,"TicketCheckbox"),children:N}),G&&/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)("div",{className:"report-problem-container-mobile__ticket",children:/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)("input",{value:I,onChange:e=>{L(e.target.value,"Ticket")}})})]}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsx)("div",{className:"report-problem-container-mobile__tip",children:/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(v,{defaults:k("<a/>"),components:{a:/* @__PURE__ */ /* @__PURE__ */(0,V.jsxs)(D,{link:`${r.baseUrl}/en/privacy/?onlycontent=1`,children:[y,"."]},y)}})}),
/* @__PURE__ */
/* @__PURE__ */(0,V.jsxs)("div",{className:"report-problem-container-mobile__trackingID",children:[i," \xa0 ",a,
/* @__PURE__ */
/* @__PURE__ */(0,V.jsx)(S.default,{text:a,children:/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)("button",{className:"copy__button",onClick:()=>u.toast({messageTip:d,aliveTime:3e3}),children:/* @__PURE__ */ /* @__PURE__ */(0,V.jsx)(g,{})})})]})]});A.propTypes={reportProblemProps:E.default.any};var G=h()(A);export{G as default};