import{r as i,j as t}from"./index-CVYQh7d4.js";function e({children:s,isActive:n,onClick:o}){const[r,c]=i.useTransition();return n?t.jsx("b",{children:s}):r?t.jsx("small",{children:t.jsx("i",{children:s})}):t.jsx("button",{onClick:()=>{c(()=>{o()})},children:s})}function a(){return t.jsx("p",{children:"Welcome to my profile!"})}const l=i.memo(function(){console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");let n=[];for(let o=0;o<500;o++)n.push(t.jsx(u,{index:o},o));return t.jsx("ul",{className:"items",children:n})});function u({index:s}){let n=performance.now();for(;performance.now()-n<1;);return t.jsxs("li",{className:"item",children:["Post #",s+1]})}const x=l;function j(){return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"You can find me online here:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"admin@mysite.com"}),t.jsx("li",{children:"+123456789"})]})]})}function d(){const[s,n]=i.useState("about");return t.jsxs(t.Fragment,{children:[t.jsx(e,{isActive:s==="about",onClick:()=>n("about"),children:"About"}),t.jsx(e,{isActive:s==="posts",onClick:()=>n("posts"),children:"Posts (slow)"}),t.jsx(e,{isActive:s==="contact",onClick:()=>n("contact"),children:"Contact"}),t.jsx("hr",{}),s==="about"&&t.jsx(a,{}),s==="posts"&&t.jsx(x,{}),s==="contact"&&t.jsx(j,{})]})}export{d as default};
