import { configureStore } from '@reduxjs/toolkit'
import companyIdSlice from "./slices/companyIdSlice.jsx";
import loginSlice from "./slices/loginSlice.jsx";
import cashSlice from "./slices/cashSlice.jsx";
import stockOrderTypeSlice from "./slices/stockOrderTypeSlice.jsx";
import stockOrderPriceSlice from "./slices/stockOrderPriceSlice.jsx";
import stockOrderVolumeSlice from "./slices/stockOrderVolumeSlice.jsx";
import decisionWindowSlice from "./slices/decisionWindowSlice.jsx";


export default configureStore({
    reducer: {
        companyIdSlice: companyIdSlice,
        loginSlice: loginSlice,
        cashSlice: cashSlice,
        stockOrderTypeSlice: stockOrderTypeSlice,
        stockOrderPriceSlice: stockOrderPriceSlice,
        stockOrderVolumeSlice: stockOrderVolumeSlice,
        decisionWindowSlice: decisionWindowSlice,
    }
})
