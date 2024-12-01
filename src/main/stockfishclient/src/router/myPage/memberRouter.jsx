import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";


const Loading = <div>Loading....</div>

const LoginPage = lazy(() => import("../../pages/member/LoginPage.jsx"))

// const LogoutPage = lazy(() => import("../../pages/member/LogoutPage.jsx"))

const KakaoRedirectPage = lazy(() => import("../../pages/member/KakaoRedirectPage.jsx"))

// const ModifyPage = lazy(() => import("../../pages/myPage/ModifyPage.jsx"))

const memberRouter = () => {

    return [
        {
            path: '',
            element: <Navigate replace={true} to='login' />,
        },
        {
            path: "login",
            element: <Suspense fallback={Loading}><LoginPage/></Suspense>
        },
        {
            path: "kakao",
            element: <Suspense fallback={Loading}><KakaoRedirectPage/></Suspense>,
        },
    ]
}

export default memberRouter
