import {Suspense, lazy} from "react";
import {Navigate} from "react-router-dom";

const Loading = <div>Loading....</div>

const ManagePage = lazy(() => import("../../pages/myPage/account/ManagePage.jsx"))

const ExchangePage = lazy(() => import("../../pages/myPage/account/ExchangePage.jsx"))

const ChargePage = lazy(() => import("../../pages/myPage/account/ChargePage.jsx"))

const accountRouter = () => {

    return [
        {
            path: '',
            element: <Navigate replace to='manage' />,
        },
        {
            path: "manage",
            element: <Suspense fallback={Loading}><ManagePage/></Suspense>,
        },
        {
            path: "exchange/:cashId",
            element: <Suspense fallback={Loading}><ExchangePage/></Suspense>
        },
        {
            path: "charge/:cashId",
            element: <Suspense fallback={Loading}><ChargePage/></Suspense>,
        },
    ]
}

export default accountRouter;
