import {lazy, Suspense} from "react";
import {Navigate} from "react-router";
const Loading = <div style={{background:'#F00'}}>Loading.........</div>


const EntirePage = lazy(() => import("../../pages/stock/items/EntirePage.jsx"));
const HoldPage = lazy(() => import("../../pages/stock/items/HoldPage.jsx"));
const WatchPage = lazy(() => import("../../pages/stock/items/WatchPage.jsx"));

const itemRouter = () => {
    return[
        {
            path: '',
            element: <Navigate replace={true} to='hold'><HoldPage/></Navigate>
        },{
            path: 'entire',
            element: <Suspense fallback={Loading}><EntirePage/></Suspense>,
        },{
            path: 'hold',
            element: <Suspense fallback={Loading}><HoldPage/></Suspense>,
        },{
            path: 'watch',
            element: <Suspense fallback={Loading}><WatchPage/></Suspense>,
        },
    ]
}

export default itemRouter