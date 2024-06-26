import{P as o,p as n,j as e,r as x,L as c,O as v}from"./index-DR66x2TL.js";import{u as b}from"./useCompanyData-BZlSFYo1.js";import{l as w}from"./companyLogos-DJlBou58.js";import{d as g}from"./CentralSectionMenu-dummyImg-CRG5GB_j.js";const k="거래량",f=({stockInfo:t,stockInfoLoading:l,stockInfoError:i})=>{const r=t==null?void 0:t.korName,d={...w},a=r?d[r]||g:g;if(!r)return null;if(l)return e.jsx("p",{children:"로딩 중 입니다"});if(i)return e.jsx("p",{children:"에러 발생"});const s=parseInt(t.stockPrice,10).toLocaleString(),p=parseFloat(t.priceChangeRate),m=p>0?"▲":"▼",u=Math.abs(parseInt(t.priceChangeAmount,10)).toLocaleString(),j=parseInt(t.transactionVolume,10).toLocaleString();return e.jsxs(y,{$priceChangeRate:p,children:[e.jsx("img",{className:"CorpLogo",src:a,alt:"stock logo"}),e.jsx("div",{className:"CorpName",children:r}),e.jsx("div",{className:"StockPrice",children:s}),e.jsxs("div",{className:"PriceChangeRate",children:[p,"%"]}),e.jsxs("div",{className:"PriceChangeAmount",children:[e.jsx("div",{className:"changeDirection",children:m})," ",u]}),e.jsxs(C,{children:[e.jsx("span",{children:k}),j]})]})};f.propTypes={stockInfo:o.shape({korName:o.string,code:o.string,stockPrice:o.string,priceChangeRate:o.string,priceChangeAmount:o.string,transactionVolume:o.string,amount:o.string}),stockInfoLoading:o.bool,stockInfoError:o.bool};const y=n.div`
    flex: 7 0 0;
    overflow-x: scroll;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    gap: 8px;
    justify-content: space-evenly;
    &::-webkit-scrollbar {
        display: none;
    }
    .CorpLogo {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }
    .CorpName {
        white-space: nowrap;
        min-width: min-content;
        font-size: 14px;
        font-weight: 530;
    }
    .StockCode {
        white-space: nowrap;
        min-width: min-content;
        font-size: 11px;
        color: #999999;
    }
    .StockPrice {
        font-size: 14px;
        color: ${t=>t.$priceChangeRate>0?"#ed2926":t.$priceChangeRate===0?"black":"#3177d7"};
        font-weight: 530;
    }
    .PriceChangeRate,
    .PriceChangeAmount {
        font-size: 14px;
        color: ${t=>t.$priceChangeRate>0?"#ed2926":t.$priceChangeRate===0?"black":"#3177d7"};
        display: flex;
        flex-direction: row;
        gap: 2px;
        .changeDirection {
            font-size: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`,C=n.div`
    white-space: nowrap;
    min-width: min-content;
    font-size: 11px;
    color: #4e4d4d;

    & span {
        color: #999999;
        padding-right: 5px;
    }
`,L=()=>{const[t,l]=x.useState(0),{data2:i,isLoading:r,isError:d}=b(2,15);return x.useEffect(()=>{const a=setInterval(()=>{l(s=>(s+1)%((i==null?void 0:i.length)||1))},2e3);return()=>clearInterval(a)},[i]),e.jsx(R,{children:i==null?void 0:i.map((a,s)=>e.jsx(N,{$active:s===t,children:e.jsx(f,{stockInfo:a,stockInfoLoading:r,stockInfoError:d})},a.companyId))})},R=n.div`
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
`,N=n.div`
    width : 350px;
    height: 100%;
    display: ${({$active:t})=>t?"block":"none"};
    transition: all 0.5s ease;
    
`,P=()=>e.jsxs(S,{children:[e.jsxs(I,{children:[e.jsx(c,{to:"/home",children:"홈"})," "]}),e.jsx($,{children:e.jsxs(z,{children:[e.jsxs(h,{children:[e.jsx(c,{to:"/stock/",children:"국내주식"})," "]}),e.jsx(h,{children:e.jsx(c,{to:"/stock/",children:"해외주식"})}),e.jsx(h,{children:e.jsx(c,{to:"/myPage/",children:"마이페이지"})})]})})]}),S=n.footer`
    background-color: #000;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    //justify-content: center;
    padding: 8px;
`,$=n.nav`
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
`,I=n.div`
    //border : 4px solid blue;
    flex-shrink: 0;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: bold;
    background-color: #000;
`,z=n.div`
    display: flex;
    flex-shrink: 0;
    &::after {
        content: '';
        flex: 1;
        background: linear-gradient(to right, transparent, #000);
    }
`,h=n.div`
    flex-shrink: 0;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    &:hover {
        background-color: #333;
    }
`,V=()=>e.jsxs(A,{children:[e.jsx(E,{children:e.jsx(v,{})}),e.jsx(L,{}),e.jsx(P,{})]}),A=n.div`
    background-color: #f7fafc;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0; /* 추가: 기본 여백 제거 */
    padding: 0; /* 추가: 기본 여백 제거 */
    overflow: hidden; /* 추가: 불필요한 스크롤 방지 */
`,E=n.main`
    flex: 1;
    background-color: #fff;
    margin-top: 1rem; /* Adjust this value based on the combined height of fixed components */
    overflow-y: auto;
    overflow-x: hidden;
`;export{V as default};
