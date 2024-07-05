import{p as o,P as i,r as p,U as h,j as t,m as k}from"./index-DYQX_Bvf.js";import{l as C}from"./companyLogos-gEX9hSVN.js";import{u as j}from"./useCompanyData-CtnFH_Nx.js";const v=o.div`
  height: calc(100vh - 53px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;o.div`
  width: 100%;
  height: ${e=>e.isLogin===0?"0px":"43.5px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${e=>e.isLogin===0?"":"1px solid black"};
`;o.div`
  width: 100%;
  height: 100%;
  display: ${e=>e.isLogin===0?"none":"flex"};
  flex-direction: row;
  padding-left: 14px;
  align-items: center;
  gap: 6.5px;
  font-size: 0.95em;
  font-weight: 570;
  color: black;
  .amount {
    color: #2f4f4f;
  }
`;const w=o.div`
  height: 100%;
  width: 100%;
  overflow-y: auto; /* 세로 스크롤을 활성화합니다 */

  &::-webkit-scrollbar {
    display: none;
  }
`,y="/assets/StockHolmImage-szcsUAm3.png",x=({company:e})=>{const s=parseFloat(e.stockChangeRate)>0,r={...C}[e.korName]||y,c=s?"#e22926":"#2679ed",a=s?"#e22926":"#2679ed",[l]=p.useState(!1),{moveToRead:n}=h(),f=()=>{n(e.companyId)},m=parseInt(e.stockPrice).toLocaleString(),u=parseInt(e.stockChangeAmount).toLocaleString(),g="원";return t.jsxs(S,{onClick:f,children:[t.jsx(b,{children:t.jsx(R,{src:r,alt:"stock logo"})}),t.jsxs(L,{children:[t.jsx(P,{children:e.korName}),t.jsx(I,{children:e.code})]}),t.jsxs($,{children:[t.jsxs(q,{change:c,children:[m," ",g]}),t.jsx(z,{change:a,children:l?`${u} ${g}`:`${e.stockChangeRate}%`})]})]})};x.propTypes={company:i.shape({companyId:i.number.isRequired,code:i.string.isRequired,korName:i.string.isRequired,stockPrice:i.string.isRequired,stockChangeAmount:i.string.isRequired,stockChangeRate:i.string.isRequired}).isRequired,setShowChangePrice:i.func.isRequired,showChangePrice:i.bool.isRequired};const S=o.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    height: 57px;
    background-color: transparent;

    &:hover {
        background-color: #cee0ff;
        transition: background-color 0.5s ease;
    }
    cursor: pointer;
`,b=o.div`
    height: 100%;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`,R=o.img`
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin-left: 10px;
    margin-right: 10px;
    position: absolute;
    opacity: ${e=>e.$opacity};
`,L=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 3px;
  margin-right: 16px;
`,P=o.span`
  font-size: 15px;
  font-weight: 400;
`,I=o.span`
  color: darkgray;
  font-weight: 400;
  font-size: 13px;
`,$=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-top: 3px;
  margin-left: auto;
  margin-right: 10px;
`,q=o.span`
  font-size: 15px;
  color: ${e=>e.change};
`,z=o.span`
  color: ${e=>e.change};
  cursor: pointer;
  font-size: 13px;
`;function E(){const[e,s]=p.useState(!1),{moveToRead:d}=h(),{data:r,isLoading:c,isError:a}=j(2,15),l=r||[];return t.jsxs(v,{children:[t.jsx(w,{children:c?t.jsx("div",{}):a?t.jsx("div",{children:"Error fetching data"}):l.map(n=>t.jsx(x,{company:n,setShowChangePrice:s,showChangePrice:e,onClick:()=>d(n.companyId)},n.companyId))}),t.jsx(k,{})]})}function U(){return t.jsx(E,{})}export{U as default};
