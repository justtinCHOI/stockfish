import {lazy, Suspense} from "react";
import {Navigate} from "react-router";
import itemsRouter from "./itemsRouter.jsx";
import articleRouter from "./articleRouter.jsx";
import Article from "../../pages/stock/article/Article.jsx";
import searchRouter from "./searchRouter.jsx";

const Loading = <div style={{background:'#F00'}}>Loading.........</div>

const Items = lazy(() => import("../../pages/stock/items/Items.jsx"));
const Search = lazy(() => import("../../pages/stock/search/Search.jsx"));

const stockRouter = () => {
    return[
        {
            path: '',
            element: <Navigate replace={true} to='items' />,
        },{
            path: 'items',
            element: <Suspense fallback={Loading}><Items/></Suspense>,
            children: itemsRouter()
        },{
            path: 'search',
            element: <Suspense fallback={Loading}><Search/></Suspense>,
            children: searchRouter()
        },{
            path: 'article',
            element: <Suspense fallback={Loading}><Article/></Suspense>,
            children: articleRouter()
        },
    ]
}

export default stockRouter
