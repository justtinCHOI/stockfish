import {useParams} from "react-router";
import ChartComponent from "../../../components/stock/article/ChartComponent.jsx";

function ChartPage() {

    const {companyId} = useParams()

    return (
        <div className="p-4 w-full bg-white  ">
            <div className="text-3xl font-extrabold">
                Todo ChartPage {companyId}
            </div>
            <ChartComponent tno={companyId}/>
        </div>
    );
}

export default ChartPage;