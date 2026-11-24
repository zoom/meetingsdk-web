/* 6.10.5_20261119_ndym5k */
import{Nm as e,Np as r,Uh as a,bh as o}from"./av-config.mjs";import{r as s}from"./emoji-reactions.mjs";import{Aa as t,Dl as l,Eo as i,Fs as c,Ju as n,Kc as m,Na as p,Po as d,Tc as b,Us as _,Vd as h,Wc as x,Yu as j,Zo as u,a_ as N,as as g,ds as v,i_ as k,lp as f,o_ as C,p_ as y,qA as D,qc as T}from"./main-client.mjs";import{n as P,t as A}from"./time-picker.mjs";e();var E=/* @__PURE__ */a(y()),S=/* @__PURE__ */a(t()),U=s(),V=({reportProblemProps:{product:e,problem:a,day:s,setDay:t,time:f,setTime:y,description:E,logCheckbox:V,ticketCheckbox:q,ticket:w,onChange:F}})=>/* @__PURE__ */ /* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile-mobile",children:[
/* @__PURE__ */
/* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__product",children:[/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)("span",{className:"report-problem-container-mobile__title",children:T}),/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(p,{className:"report-problem-container-mobile_product-select country-code-select report-problem-container-mobile__select--dark",classNamePrefix:"react-select",options:N,defaultValue:e,isSearchable:!1,onChange:e=>{F(e,"Product")}})]}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__problemAndTime",children:[/* @__PURE__ */ /* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__problem",children:[/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)("span",{className:"report-problem-container-mobile__title",children:m}),/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(p,{className:"react-select-report country-code-select report-problem-container-mobile__select--dark",classNamePrefix:"react-select",placeholder:l,options:k,defaultValue:a,isSearchable:!1,onChange:e=>{F(e,"Problem")}})]}),/* @__PURE__ */ /* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__time",children:[/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)("span",{className:"report-problem-container-mobile__title",children:n}),/* @__PURE__ */ /* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__time__container report-problem-container-mobile__time__container--dark",children:[/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(A,{style:{marginTop:"10px",marginRight:"-6px",padding:"10px"},selectedStyle:{backgroundColor:"0E72ED"},date:s,setDate:t,dateFormat:"M-D-Y",maxDate:/* @__PURE__ */new Date,minDate:new Date(2022,0,1)}),/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(P,{time:f,setTime:y})]})]})]}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__description",children:[
/* @__PURE__ */
/* @__PURE__ */(0,U.jsx)("span",{className:"report-problem-container-mobile__title",children:v}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsx)("textarea",{value:E,onChange:e=>{e.target.value.length<=500&&F(e.target.value,"Description")},placeholder:d,className:"report-problem-container-mobile__description__text"}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsx)("span",{className:"report-problem-container-mobile__description__number",children:`${E.length}/500`})]}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsx)("div",{className:"report-problem-container-mobile__checkbox1",children:/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(g,{checked:V,onChange:e=>F(e,"LogCheckbox"),children:_})}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__checkbox2",children:[/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(g,{checked:q,onChange:e=>F(e,"TicketCheckbox"),children:c}),q&&/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)("div",{className:"report-problem-container-mobile__ticket",children:/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)("input",{value:w,onChange:e=>{F(e.target.value,"Ticket")}})})]}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsx)("div",{className:"report-problem-container-mobile__tip",children:/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(D,{defaults:C("<a/>"),components:{a:/* @__PURE__ */ /* @__PURE__ */(0,U.jsxs)(h,{link:`${r.baseUrl}/en/privacy/?onlycontent=1`,children:[x,"."]},x)}})}),
/* @__PURE__ */
/* @__PURE__ */(0,U.jsxs)("div",{className:"report-problem-container-mobile__trackingID",children:[j," \xa0 ",o,
/* @__PURE__ */
/* @__PURE__ */(0,U.jsx)(S.default,{text:o,children:/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)("button",{className:"copy__button",onClick:()=>i.toast({messageTip:u,aliveTime:3e3}),children:/* @__PURE__ */ /* @__PURE__ */(0,U.jsx)(b,{})})})]})]});V.propTypes={reportProblemProps:E.default.any};var q=f()(V);export{q as default};