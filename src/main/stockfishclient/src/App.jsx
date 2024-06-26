import {RouterProvider} from "react-router";
import root from "./router/root.jsx";
// import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={root}/>
            {/*<ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>*/}
        </QueryClientProvider>
    );
}

export default App;
