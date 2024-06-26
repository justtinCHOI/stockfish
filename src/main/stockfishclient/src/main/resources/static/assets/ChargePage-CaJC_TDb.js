import{P as A,K as S,p as t,b as k,r as a,u as I,j as e,m as B,n as N}from"./index-DR66x2TL.js";import{u as P}from"./useCustomCash--lqoUHM1.js";const E={cashId:"",accountNumber:"",money:"",dollar:""},p=({cashId:s})=>{const d=k(n=>n.cashSlice),{doUpdateCash:g}=P(),[r,m]=a.useState(E),[l,h]=a.useState(0),[j,b]=a.useState(!1),f=I(),u=r.money+l;a.useEffect(()=>{const n=d.cashList.find(v=>v.cashId==s);n&&m(n)},[d,s]);const C=n=>{h(Number(n.target.value))},y=()=>{g(s,u,0).then(()=>{b(!0),h(0),alert("충전되었습니다")})},w=()=>{f("../manage")};return e.jsxs(M,{children:[e.jsxs(R,{children:[e.jsxs(o,{children:[e.jsx(c,{children:"계좌번호:"}),e.jsx(i,{children:r.accountNumber})]}),e.jsxs(o,{children:[e.jsx(c,{children:"원화량:"}),e.jsxs(i,{children:[r.money,"원"]})]}),e.jsxs(o,{children:[e.jsx(c,{children:"외화량:"}),e.jsxs(i,{children:[r.dollar,"달러"]})]}),e.jsxs(o,{children:[e.jsx(c,{children:"충전 금액:"}),e.jsx(T,{type:"number",value:l,onChange:C})]}),e.jsxs(o,{children:[e.jsx(c,{children:"충전 후 금액:"}),e.jsxs(i,{style:{color:j?"black":"gray"},children:[u,"원"]})]}),e.jsxs(K,{children:[e.jsx(x,{onClick:w,children:"계좌 관리"}),e.jsx(x,{onClick:y,children:"충전"})]})]}),e.jsx(B,{})]})};p.propTypes={cashId:A.number};const L=S`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,M=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`,R=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 100%;
    border-radius: 5px;
    animation: ${L} 3s;
`,o=t.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0;
`,c=t.div`
    font-weight: bold;
    margin-right: 10px;
`,i=t.div`
    margin-left: auto;
`,T=t.input`
    width: 60%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`,K=t.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`,x=t.button`
    height: 40px;
    width: 45%;
    margin: 5px;
    padding: 5px;
    border: 2px solid #0056b3;
    color: #0056b3;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: #0056b3;
        color: white;
    }

    &:disabled {
        background-color: gray;
        color: white;
        cursor: not-allowed;
    }
`,$=()=>{const{cashId:s}=N();return e.jsx(p,{cashId:s})};export{$ as default};
