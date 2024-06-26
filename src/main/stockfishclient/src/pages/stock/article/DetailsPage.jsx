import {useParams} from "react-router";
import DetailsComponent from "../../../components/stock/article/DetailsComponent.jsx";

function DetailsPage() {

    const {companyId} = useParams();

    const companyIdNumber = Number(companyId); // 숫자로 변환

    return (
        <DetailsComponent companyId={companyIdNumber}/>
    );
}

export default DetailsPage;