import{P as N,K as P,p as t,b as D,r as c,u as R,j as e,m as L,n as T}from"./index-DR66x2TL.js";import{u as z}from"./useCustomCash--lqoUHM1.js";const K={cashId:"",accountNumber:"",money:"",dollar:""},f=1386.83,b=({cashId:i})=>{const p=D(n=>n.cashSlice),{doUpdateCash:C}=z(),[s,E]=c.useState(K),[h,v]=c.useState("money"),[l,g]=c.useState(0),[m,w]=c.useState(0),[j,A]=c.useState(0),[x,u]=c.useState(""),S=R();c.useEffect(()=>{const n=p.cashList.find(o=>o.cashId==i);n&&E(n)},[p,i]),c.useEffect(()=>{let n=s.money,o=s.dollar;h==="money"?(n=s.money-l,o=s.dollar+l/f):h==="dollar"&&(n=s.money+l*f,o=s.dollar-l),o>0&&o<1?u("외화량은 1보다 작을 수 없습니다."):n<0||o<0?u("환전 후의 금액은 0보다 작을 수 없습니다."):u(""),w(Math.floor(n)),A(Math.floor(o))},[l,h,s.money,s.dollar]);const M=n=>{g(Number(n.target.value))},B=n=>{v(n.target.value)},k=()=>{S("../manage")},I=()=>{x||C(i,m,j).then(()=>{g(0),alert("환전되었습니다")})};return e.jsxs(V,{children:[e.jsxs($,{children:[e.jsxs(a,{children:[e.jsx(r,{children:"계좌번호:"}),e.jsx(d,{children:s.accountNumber})]}),e.jsxs(a,{children:[e.jsx(r,{children:"원화량:"}),e.jsxs(d,{children:[s.money,"원"]})]}),e.jsxs(a,{children:[e.jsx(r,{children:"외화량:"}),e.jsxs(d,{children:[s.dollar,"달러"]})]}),e.jsxs(a,{children:[e.jsx(r,{children:"환전 금액:"}),e.jsx(q,{type:"number",value:l,onChange:M})]}),x&&e.jsx(F,{children:x}),e.jsxs(a,{children:[e.jsx(r,{children:"환전 화폐:"}),e.jsxs("select",{value:h,onChange:B,children:[e.jsx("option",{value:"money",children:"원화에서 외화로"}),e.jsx("option",{value:"dollar",children:"외화에서 원화로"})]})]}),e.jsxs(a,{children:[e.jsx(r,{children:"환전 후 원화량:"}),e.jsxs(d,{children:[m,"원"]})]}),e.jsxs(a,{children:[e.jsx(r,{children:"환전 후 외화량:"}),e.jsxs(d,{children:[j,"달러"]})]}),e.jsxs(G,{children:[e.jsx(y,{onClick:k,children:"계좌 관리"}),e.jsx(y,{onClick:I,disabled:!!x,children:"환전"})]})]}),e.jsx(L,{})]})};b.propTypes={cashId:N.number};const U=P`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`,V=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`,$=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ccc;
    padding: 10px;
    width: 100%;
    margin: 10px;
    border-radius: 5px;
    animation: ${U} 3s;
`,a=t.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 5px 0;
`,r=t.div`
    font-weight: bold;
    margin-right: 10px;
`,d=t.div`
    margin-left: auto;
`,q=t.input`
    width: 60%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`,F=t.div`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`,G=t.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`,y=t.button`
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
`,O=()=>{const{cashId:i}=T();return e.jsx(b,{cashId:i})};export{O as default};
