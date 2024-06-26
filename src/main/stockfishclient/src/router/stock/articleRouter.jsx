import {lazy, Suspense} from "react";
import {Navigate} from "react-router";
import CompanyModifyPage from "../../pages/stock/article/CompanyModifyPage.jsx";
const Loading = <div style={{background:'#007cff'}}>Loading.........</div>

const ChartPage = lazy(() => import("../../pages/stock/article/ChartPage.jsx"));
const BuyPage = lazy(() => import("../../pages/stock/article/BuyPage.jsx"));
const SellPage = lazy(() => import("../../pages/stock/article/SellPage.jsx"));
const DetailsPage = lazy(() => import("../../pages/stock/article/DetailsPage.jsx"));
const NewsPage = lazy(() => import("../../pages/stock/article/NewsPage.jsx"));
const ChatPage = lazy(() => import("../../pages/stock/article/ChatPage.jsx"));

const articleRouter = () => {
    return[
        {
            path: '',
            element: <Navigate replace={true} to='chart'><ChartPage/></Navigate>
        },{
            path: 'chart/:companyId',
            element: <Suspense fallback={Loading}><ChartPage/></Suspense>,
        },{
            path: 'order/:companyId',
            element: <Suspense fallback={Loading}><BuyPage/></Suspense>,
        },
        // {
        //     path: 'sell/:companyId',
        //     element: <Suspense fallback={Loading}><SellPage/></Suspense>,
        // },
        {
            path: 'read/:companyId',
            element: <Suspense fallback={Loading}><DetailsPage/></Suspense>,
        },{
            path: 'modify/:companyId',
            element: <Suspense fallback={Loading}><CompanyModifyPage/></Suspense>,
        },{
            path: 'news/:companyId',
            element: <Suspense fallback={Loading}><NewsPage/></Suspense>,
        },{
            path: 'chat/:companyId',
            element: <Suspense fallback={Loading}><ChatPage/></Suspense>,
        },
    ]
}

export default articleRouter