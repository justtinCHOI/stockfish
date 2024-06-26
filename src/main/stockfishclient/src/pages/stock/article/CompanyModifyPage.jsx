import CompanyModifyComponent from "../../../components/stock/article/CompanyModifyComponent.jsx";
import {useParams} from "react-router";

function CompanyModifyPage() {

    const {companyId} = useParams()

    const companyIdNumber = Number(companyId); // 숫자로 변환

    return (
        <CompanyModifyComponent companyId={companyIdNumber}/>

    );
}

export default CompanyModifyPage;