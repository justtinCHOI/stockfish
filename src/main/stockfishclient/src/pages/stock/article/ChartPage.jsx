import {useParams} from "react-router";
import ChartComponent from "../../../components/stock/article/Chart/ChartComponent.jsx";

function ChartPage() {

    const {companyId} = useParams()

    return (
        <ChartComponent companyId={Number(companyId)}/>
    );
}

export default ChartPage;
