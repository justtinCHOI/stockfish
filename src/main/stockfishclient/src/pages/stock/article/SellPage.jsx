import {useParams} from "react-router";
import SellComponent from "../../../components/stock/article/SellComponent.jsx";

function SellPage() {

    const {tno} = useParams()

    return (
        <div className="p-4 w-full bg-white  ">
            <div className="text-3xl font-extrabold">
                Todo SellPage {tno}
            </div>
            <SellComponent tno={tno}t/>
        </div>
    );
}

export default SellPage;