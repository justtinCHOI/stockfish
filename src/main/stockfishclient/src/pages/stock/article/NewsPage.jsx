import {useParams} from "react-router";
import NewsComponent from "../../../components/stock/article/NewsComponent.jsx";

function NewsPage() {

    const {tno} = useParams()

    return (
        <div className="p-4 w-full bg-white  ">
            <div className="text-3xl font-extrabold">
                Todo NewsPage {tno}
            </div>
            <NewsComponent tno={tno}/>
        </div>
    );
}

export default NewsPage;