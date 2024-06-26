import{p as t,j as o,L as h,r as f,u as j,w as b,I as k,c as L}from"./index-DR66x2TL.js";import{u as w}from"./useCustomLogin-CjtSUxJM.js";import{g as v}from"./kakaoApi-D3D-0y3-.js";const C="/assets/KakaoLogo-DnWmZtu9.svg",y=()=>{const n=v();return o.jsx(h,{to:n,children:o.jsxs(I,{children:[o.jsx(K,{src:C,alt:"Kakao Logo"}),"KAKAO LOGIN"]})})},I=t.div`
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f2f2f2; // 호버 시 밝은 회색 배경 적용
    }
`,K=t.img`
    margin-right: 30px;
    width: 60px;
    height: auto;
`,F={email:"",password:""},B=()=>{const[n,d]=f.useState({...F}),{doLogin:l}=w(),g=j(),m=b(),{from:p}=m.state||{from:{pathname:"/"}},r=e=>{n[e.target.name]=e.target.value,d({...n})},x=()=>{l(n).then(e=>{e.error?alert("이메일과 패스워드를 다시 확인하세요"):(alert("로그인 성공"),g(p.pathname,{replace:!0}))})},u=()=>{};return o.jsxs(D,{children:[o.jsxs(a,{children:[o.jsx(i,{children:"이메일"}),o.jsx(s,{name:"email",type:"text",value:n.email,onChange:r})]}),o.jsxs(a,{children:[o.jsx(i,{children:"비밀번호"}),o.jsx(s,{name:"password",type:"password",value:n.password,onChange:r})]}),o.jsxs(O,{children:[o.jsx(c,{onClick:x,children:"로그인"}),o.jsx(c,{onClick:u,children:"회원가입"})]}),o.jsx(y,{})]})},D=t.div`
    margin-top: 6rem;
  .flex {
    display: flex;
    justify-content: center;
  }
`,a=t.div`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`,i=t.div`
  width: 100%;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
`,s=t.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #999;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`,O=t.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
`,c=t.div`
    padding: 0.8rem;
    width: 8rem;
    margin: 0 1rem;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #0056b3;
    }
`,E=()=>o.jsx(k,{$top:2,children:o.jsx(L,{children:o.jsx(B,{})})});export{E as default};
