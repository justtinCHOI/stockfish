import{P as t,j as e,U as u,r as n,ar as m}from"./index-DYQX_Bvf.js";function o({serverData:s,movePage:l}){return e.jsxs("div",{className:"m-6 flex justify-center",children:[s.prev?e.jsx("div",{className:"m-2 p-2 w-16 text-center font-bold text-blue-400",onClick:()=>l({page:s.prevPage,size:10}),children:"Prev"}):null,s.pageNumList.map(i=>e.jsx("div",{className:`m-2 p-2 w-12 text-center rounded shadow-md text-white ${s.current===i?"bg-gray-500":"bg-blue-400"}`,onClick:()=>l({page:i,size:10}),children:i},i)),s.next?e.jsx("div",{className:"m-2 p-2 w-16 text-center font-bold text-blue-400",onClick:()=>l({page:s.nextPage,size:10}),children:"Next"}):null]})}o.propTypes={serverData:t.shape({prev:t.bool.isRequired,next:t.bool.isRequired,prevPage:t.number.isRequired,nextPage:t.number.isRequired,current:t.number.isRequired,pageNumList:t.arrayOf(t.number).isRequired}).isRequired,movePage:t.func.isRequired};const p={dtoList:[],pageNumList:[],pageRequestDTO:null,prev:!1,next:!1,totalCount:0,prevPage:0,nextPage:0,totalPage:0,current:0};function f(){const{page:s,size:l,refresh:i,moveToList:d,moveToRead:x}=u(),[a,c]=n.useState(p);return n.useEffect(()=>{m().then(r=>{console.log(r),c(r)})},[s,l,i]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-wrap mx-auto justify-center p-1",children:a.dtoList.map(r=>e.jsx("div",{className:"w-full min-w-[400px] p-2 m-2 rounded shadow-md",onClick:()=>x(r.companyId),children:e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"font-extrabold text-2xl p-2 flex-grow",children:r.companyId}),e.jsx("div",{className:"text-1xl m-1 p-2 flex-grow",children:r.korName}),e.jsx("div",{className:"text-1xl m-1 p-2 flex-grow",children:r.created_at})]})},r.companyId))}),e.jsx(o,{serverData:a,movePage:d})]})}function h(){return e.jsxs("div",{className:"p-4 w-full bg-white  ",children:[e.jsx("div",{className:"text-3xl font-extrabold",children:"Todo SearchListPage"}),e.jsx(f,{})]})}export{h as default};