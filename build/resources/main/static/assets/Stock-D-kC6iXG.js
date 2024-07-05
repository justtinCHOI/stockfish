import{p as e,u as s,j as o,F as a,O as r}from"./index-DYQX_Bvf.js";import{S as c}from"./StockInfoComponent-DiFVdcNJ.js";const p=()=>{const t=s(),n=()=>{t("/stock/search")};return o.jsxs(i,{children:[o.jsx(d,{placeholder:"검색어를 입력하세요",onFocus:n}),o.jsx(x,{})]})},i=e.div`
    position: fixed;
    display: flex;
    align-items: center;
    padding: 15px;
    width: 100%;
    top: 20px;
`,d=e.input`
    width: 100%;
    padding: 8px;
    border: none;
    background-color: #e2e8f0;
    border-radius: 10px;
    &:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
    }
`,x=e(a)`
    position: absolute;
    right: 28px;
    color: #a0aec0;
`,h=()=>o.jsxs(o.Fragment,{children:[o.jsx(c,{}),o.jsx(p,{}),o.jsx(r,{})]});export{h as default};
