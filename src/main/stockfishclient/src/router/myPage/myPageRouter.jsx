import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
import accountRouter from "./accountRouter.jsx";

const Loading = <div style={{background:'#F00'}}>Loading.........</div>

const ProfitPage = lazy(() => import("../../pages/myPage/ProfitPage.jsx"))
const MemberInfoPage = lazy(() => import("../../pages/myPage/MemberInfoPage.jsx"))
const ModifyPage = lazy(() => import("../../pages/myPage/ModifyPage.jsx"))
const SettingPage = lazy(() => import("../../pages/myPage/SettingPage.jsx"))
const CompanyAddPage = lazy(() => import("../../pages/myPage/CompanyAddPage.jsx"))
const AccountPage = lazy(() => import("../../pages/myPage/account/AccountPage.jsx"))

const myPageRouter = () => {
    return[
        {
            path: '',
            element: <Navigate replace to='profit' />,
        },{
            path: 'profit',
            element: <Suspense fallback={Loading}><ProfitPage/></Suspense>
        },{
            path: 'memberInfo',
            element: <Suspense fallback={Loading}><MemberInfoPage/></Suspense>
        },{
            path:"modify",
            element: <Suspense fallback={Loading}><ModifyPage/></Suspense>,
        },{
            path: 'setting',
            element: <Suspense fallback={Loading}><SettingPage/></Suspense>
        },{
            path: 'company/add',
            element: <Suspense fallback={Loading}><CompanyAddPage/></Suspense>
        },{
            path: "account",
            element: <Suspense fallback={Loading}><AccountPage /></Suspense>,
            children: accountRouter()
        },
    ]
}

export default myPageRouter
