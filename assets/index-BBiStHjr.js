const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodazonFont-TaqP0e5x.css","assets/FontAwesome-B3SF2Ct4.css","assets/Linearicons-6u4I225q.css"])))=>i.map(i=>d[i]);
import{r as m,u as f,j as e,_ as u}from"./main-qlYQVISY.js";const d=(t,s,o)=>{const n=t[s];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,c)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(c.bind(null,new Error("Unknown variable dynamic import: "+s+(s.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})};function x(t){for(var s=[],o=document.styleSheets,n=0;n<o.length;n++){var r=o[n],c=r.cssRules||r.rules;if(c.length>0&&c[0].cssText&&c[0].cssText.indexOf("@font-face")!=-1&&c[0].cssText.indexOf(t)!=-1){for(var i=0;i<c.length;i++){var p=c[i];if(p.selectorText){var a=p.selectorText;a.indexOf(":before")!=-1&&(a=a.split(",")[0],a=a.trim().replace(/^\./,"").replace(/:+before$/,""),s.push(a))}}s.length>0&&s.sort();break}}return s}function j(){const[t,s]=m.useState(""),[o,n]=m.useState([]),[r,c]=m.useState(""),i=f();v(i.family);function p(l){t!==l&&(s(l),n(x(l)))}function a(l){c(l)}return e.jsxs("div",{style:{fontFamily:i.family},children:[e.jsxs("div",{className:"result-icon",children:[e.jsx("label",{className:"select-icon",htmlFor:"popups-1",onClick:()=>{p(i.family)},children:"选择图标"}),e.jsx("span",{className:"f-icon-family "+r}),e.jsx("span",{className:"f-icon-text",onClick:()=>{document.execCommand("copy")},children:r})]}),e.jsxs("div",{className:"popups",children:[e.jsx("input",{type:"checkbox",name:"popups",id:"popups-1",defaultChecked:!0,hidden:!0}),e.jsx("div",{className:"popups-box",children:e.jsxs("div",{className:"popups-content",children:[e.jsx("label",{htmlFor:"popups-1",children:"×"}),e.jsxs("div",{className:"font-icon",children:[e.jsx("input",{className:"f-icon-search",type:"search"}),e.jsx(h,{fontIcons:o,handleClick:a})]})]})})]})]})}function h({fontIcons:t,handleClick:s}){return e.jsx("div",{className:"f-icon-list",children:t.map((o,n)=>e.jsxs("div",{className:"f-icon-item",children:[e.jsx("label",{htmlFor:"popups-1",onClick:()=>{s(o)}}),e.jsx("span",{className:"f-icon-family "+o}),e.jsx("span",{className:"f-icon-text",children:o.replace(/[^-]*(?=-)-/,"").replace(/^fa-/,"").replace(/^theme-/,"").replace(/-/g," ")})]},n))})}function v(t){return d(Object.assign({"./fonts/CodazonFont/CodazonFont.css":()=>u(()=>Promise.resolve({}),__vite__mapDeps([0])),"./fonts/FontAwesome/FontAwesome.css":()=>u(()=>Promise.resolve({}),__vite__mapDeps([1])),"./fonts/Linearicons/Linearicons.css":()=>u(()=>Promise.resolve({}),__vite__mapDeps([2]))}),`./fonts/${t}/${t}.css`,4)}export{j as default};
