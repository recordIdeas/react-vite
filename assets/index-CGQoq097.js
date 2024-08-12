import{r as j,j as d}from"./main-DWMysycb.js";const w=15,W=15,g=5,A=[200,400,2e3,1e4],C=[220,420,2200,2e4],[k,q,M]=_(w,W,g),P={currentMove:0,history:[{squares:Array(w).fill(null).map(l=>Array(W).fill(null)),myWin:Array(k).fill(0),AIWin:Array(k).fill(0),nextPlay:"X"}]};function X(){const[l,t]=j.useReducer(G,P),s=j.useDeferredValue(l),h=j.useCallback((i,a)=>{t({type:"added",nextSquares:i,nextPosition:a})},[t]),x=j.useCallback(i=>{t({type:"changeHistory",historyItem:i,nextPlay:i.winner&&i.winner!=="O"?"O":"X"})},[t]),c=j.useCallback(i=>{t({type:"changeCurrentMove",nextMove:i})},[t]);return d.jsxs("div",{className:"game",children:[d.jsx("div",{className:"game-board",children:d.jsx(N,{history:l.currentMove===s.currentMove?s.history:l.history,currentMove:l.currentMove,onPlay:h,autoPlay:x})}),d.jsx("div",{className:"game-info",children:d.jsx(S,{history:l.currentMove===s.currentMove?s.history:l.history,currentMove:l.currentMove,jumpTo:c})})]})}const S=j.memo(function({history:t,currentMove:s,jumpTo:h}){const[x,c]=j.useState(!0),i=t[s].nextPlay,a=t.length===1?null:t.map((o,r)=>{let n;if(r===s){if(n=(i==="X"?"Robot":"You")+" are at ",r===0)n+="game start";else{const[m,p]=o.position;n+="move ("+(m+1)+", "+(p+1)+")"}return d.jsx("li",{children:d.jsx("small",{children:n})},r)}else{if(r===0)n="Go to game start";else{const[m,p]=o.position;n="Go to move ("+(m+1)+", "+(p+1)+")"}return d.jsx("li",{children:d.jsx("button",{onClick:()=>h(r),children:n})},r)}});return d.jsxs(d.Fragment,{children:[a&&d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:x,onChange:o=>{c(o.target.checked)}}),x?"Asc":"Desc"]}),a&&x&&d.jsx("ol",{children:a},"moves"),a&&!x&&d.jsx("ol",{reversed:!0,children:a.reverse()},"moves_reverse")]})}),N=j.memo(function({history:t,currentMove:s,onPlay:h,autoPlay:x}){const c=t[s].squares,i=t[s].line,a=t[s].position,o=t[s].winner,r=t[s].nextPlay,n=o?"Winner: "+o:"Next player: "+r;j.useEffect(()=>{var p=setTimeout(()=>{r==="O"&&x(I(t[s]))});return()=>{clearTimeout(p)}},[t,s,r,x]);function m(p,u){if(o||c[p][u]||r==="O")return;const y=c.map(e=>[...e]);y[p][u]="X",h(y,[p,u])}return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"status",children:n}),c.map((p,u)=>d.jsx("div",{className:"board-row",children:p.map((y,e)=>d.jsx(O,{value:c[e][u],onSquareClick:()=>m(e,u),squareMove:a&&e===a[0]&&u===a[1],lineSucceed:i&&c[e][u]&&i.some(f=>e===f[0]&&u===f[1])},e+u*p.length))},u))]})});function O({value:l,onSquareClick:t,squareMove:s,lineSucceed:h}){return d.jsx("button",{className:"square"+(h?" line":s?" move":""),onClick:t,children:l})}function G(l,t){switch(t.type){case"added":return{currentMove:l.currentMove+1,history:[...l.history.slice(0,l.currentMove+1),{...l.history[l.currentMove],squares:t.nextSquares,position:t.nextPosition,nextPlay:"O"}]};case"changeHistory":return{...l,history:l.history.map((s,h)=>h===l.currentMove?{...s,...t.historyItem,nextPlay:t.nextPlay}:s)};case"changeCurrentMove":return{...l,currentMove:t.nextMove};default:throw Error("Unknown action: "+t.type)}}function I(l){const{squares:t,position:s,myWin:h,AIWin:x}=l,c=t.map(e=>[...e]),[i,a]=s,o=[...h],r=[...x];for(let e=0;e<k;e++)if(q[i][a][e]&&(o[e]++,r[e]=g+1,o[e]===g))return{winner:"X",line:M[e]};let n=c.map(e=>e.map(f=>0)),m=c.map(e=>e.map(f=>0)),p=0,u=0,y=0;for(let e=0;e<c.length;e++)for(let f=0;f<c[e].length;f++)if(!c[e][f]){for(let v=0;v<k;v++)q[e][f][v]&&(o[v]>0&&o[v]<g&&(n[e][f]+=A[o[v]-1]),r[v]>0&&r[v]<g&&(m[e][f]+=C[r[v]-1]));n[e][f]>p?(p=n[e][f],u=e,y=f):n[e][f]===p&&m[e][f]>m[u][y]&&(u=e,y=f),m[e][f]>p?(p=m[e][f],u=e,y=f):m[e][f]===p&&n[e][f]>n[u][y]&&(u=e,y=f)}if(c[u][y])return{winner:"平局"};c[u][y]="O";for(let e=0;e<k;e++)if(q[u][y][e]&&(r[e]++,o[e]=g+1,r[e]===g))return{winner:"O",line:M[e],squares:c,position:[u,y]};return{squares:c,position:[u,y],myWin:o,AIWin:r}}function _(l,t,s){for(var h=[],x=0;x<l;x++){h[x]=[];for(var c=0;c<t;c++)h[x][c]=[]}let i=0,a=[];for(let o=0;o<l;o++)for(let r=0;r<t;r++){if(o<t-(s-1)){a[i]=[];for(let n=0;n<s;n++)h[o+n][r][i]=!0,a[i].push([o+n,r]);i++}if(r<t-(s-1)){a[i]=[];for(let n=0;n<s;n++)h[o][r+n][i]=!0,a[i].push([o,r+n]);i++}if(o<t-(s-1)&&r<t-(s-1)){a[i]=[];for(let n=0;n<s;n++)h[o+n][r+n][i]=!0,a[i].push([o+n,r+n]);i++}if(o<t-(s-1)&&r>s-1-1){a[i]=[];for(let n=0;n<s;n++)h[o+n][r-n][i]=!0,a[i].push([o+n,r-n]);i++}}return[i,h,a]}export{X as default};
