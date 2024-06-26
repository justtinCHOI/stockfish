import {lazy, Suspense} from "react";
import {Navigate} from "react-router";
const Loading = <div style={{background:'#F00'}}>Loading.........</div>


const SearchListPage = lazy(() => import("../../pages/stock/search/SearchListPage.jsx"));

const itemRouter = () => {
    return[
        {
            path: '',
            element: <Navigate replace={true} to='list'><SearchListPage/></Navigate>
        },{
            path: 'list',
            element: <Suspense fallback={Loading}><SearchListPage/></Suspense>,
        },
    ]
}

export default itemRouter