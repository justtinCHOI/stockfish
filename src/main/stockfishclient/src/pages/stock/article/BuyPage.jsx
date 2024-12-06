import {useParams} from "react-router";
import BuyComponent from "../../../components/stock/article/Buy/BuyComponent.jsx";

function BuyPage() {

    const {companyId} = useParams()

    return (
        <BuyComponent companyId={Number(companyId)} />
    );
}

export default BuyPage;
