import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import {Navigate} from "react-router-dom";
import myPageRouter from "./myPage/myPageRouter.jsx";
import stockRouter from "./stock/stockRouter.jsx";
import memberRouter from "./myPage/memberRouter.jsx";

const Loading = <div style={{ background: '#F00' }}>Loading.........</div>;
const Stock = lazy(() => import("../pages/stock/Stock.jsx"));
const Home = lazy(() => import("../pages/home/Home.jsx"));
const MyPage = lazy(() => import("../pages/myPage/MyPage.jsx"));
const BasicLayout = lazy(() => import("../layouts/BasicLayout.jsx"));
const MemberPage = lazy(() => import("../pages/member/MemberPage.jsx"));

const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><BasicLayout /></Suspense>,
        errorElement: <div>페이지를 불러오는 중 오류가 발생했습니다.</div>,
        children: [
            {
                path: '',
                element: <Navigate replace to='/home' />,
            },{
                path: 'home',
                element: <Suspense fallback={Loading}><Home /></Suspense>,
            },{
                path: 'stock',
                element: <Suspense fallback={Loading}><Stock /></Suspense>,
                children: stockRouter()
            },{
                path: 'myPage',
                element: <Suspense fallback={Loading}><MyPage /></Suspense>,
                children: myPageRouter()
            },{
                path: "member",
                element: <Suspense fallback={Loading}><MemberPage /></Suspense>,
                children: memberRouter()
            }
        ]
    }
]);

export default root;
