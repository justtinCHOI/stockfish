import{p as n,r,j as e,O as a}from"./index-BKtiLFc2.js";import{B as d}from"./BasicMenu-B6kYTbTL.js";const l=()=>{const[o,s]=r.useState(0);return r.useEffect(()=>{const i=setInterval(()=>{s(t=>(t+1)%10)},3e3);return()=>clearInterval(i)},[]),e.jsx(c,{children:Array.from({length:10},(i,t)=>e.jsxs(f,{$active:t===o,children:["실시간 정보 ",t+1]},t))})},c=n.div`
    background-color: #fff;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #888;
    position: fixed;
    bottom: 50px;
    width: 100%;
    padding : 5px;
`,f=n.div`
    height: 100%;
    display: ${({$active:o})=>o?"block":"none"};
    transition: all 0.5s ease;
`,u=()=>e.jsxs(x,{children:[e.jsx(p,{children:e.jsx(a,{})}),e.jsx(l,{}),e.jsx(d,{})]}),x=n.div`
    background-color: #f7fafc;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0; /* 추가: 기본 여백 제거 */
    padding: 0; /* 추가: 기본 여백 제거 */
    overflow: hidden; /* 추가: 불필요한 스크롤 방지 */
`,p=n.main`
    flex: 1;
    background-color: #fff;
    margin-top: 1rem; /* Adjust this value based on the combined height of fixed components */
    overflow-y: auto;
    overflow-x: hidden;
`;export{u as default};
