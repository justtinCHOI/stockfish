import {lazy, Suspense} from "react";
import {Navigate} from "react-router-dom";
const Loading = <div style={{background:'#F00'}}>Loading.........</div>


const SearchListPage = lazy(() => import("../../pages/stock/search/SearchListPage.jsx"));

const searchRouter = () => {
    return[
        {
            path: '',
            element: <Navigate replace={true} to='list' />,
        },{
            path: 'list',
            element: <Suspense fallback={Loading}><SearchListPage/></Suspense>,
        },
    ]
}

export default searchRouter
