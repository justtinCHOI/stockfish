import{p as o,j as e,L as t}from"./index-BKtiLFc2.js";const c=()=>e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(t,{to:"/home",children:"홈"})," "]}),e.jsx(i,{children:e.jsxs(l,{children:[e.jsxs(n,{children:[e.jsx(t,{to:"/stock/",children:"국내주식"})," "]}),e.jsx(n,{children:e.jsx(t,{to:"/stock/",children:"해외주식"})}),e.jsx(n,{children:e.jsx(t,{to:"/myPage/",children:"마이페이지"})})]})})]}),r=o.footer`
    background-color: #000;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    //justify-content: center;
    padding: 8px;
`,i=o.nav`
    display: flex;
    align-items: center;
    overflow-x: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    &:before {
        content: '';
        position: absolute;
        left: 55px;
        width: 20%;
        height: 95%;
        background: linear-gradient(to left, transparent, #000);
        pointer-events: none;
    }
    &:after {
        content: '';
        position: absolute;
        right: 2px;
        width: 20%;
        height: 100%;
        pointer-events: none;
        flex: 1;
        background: linear-gradient(to right, transparent, #000);
    }
`,s=o.div`
    //border : 4px solid blue;
    flex-shrink: 0;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: bold;
    background-color: #000;
`,l=o.div`
    display: flex;
    flex-shrink: 0;
    &::after {
        content: '';
        flex: 1;
        background: linear-gradient(to right, transparent, #000);
    }
`,n=o.div`
    flex-shrink: 0;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    &:hover {
        background-color: #333;
    }
`;export{c as B};
