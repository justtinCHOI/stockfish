import SearchCompanyComponent from "../../components/common/SearchCompanyComponent.jsx";
import {Outlet} from "react-router-dom";
import StockInfoComponent from "../../components/common/StockInfoComponent.jsx";

const Items = () => {


    return (
        <>
            <StockInfoComponent/>
            <SearchCompanyComponent/>
             <Outlet />
        </>
    );
}

export default Items;
