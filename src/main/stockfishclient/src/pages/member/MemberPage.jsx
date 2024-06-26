import StockInfoComponent from "../../components/common/StockInfoComponent.jsx";
import {Outlet} from "react-router-dom";

const MemberPage = () => {
    return (
        <div>
            <StockInfoComponent/>
            <Outlet />
        </div>
    );
};

export default MemberPage;