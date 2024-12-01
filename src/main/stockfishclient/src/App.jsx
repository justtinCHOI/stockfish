import { RouterProvider } from "react-router-dom";
import root from "./router/root.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from "./components/ErrorBoundary/index.jsx";
import { Suspense } from "react";

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <Suspense fallback={<div>로딩 중...</div>}>
                    <RouterProvider router={root} />
                </Suspense>
            </ErrorBoundary>
        </QueryClientProvider>
    );
}

export default App;
