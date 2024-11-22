import ChargeComponent from "../../../components/myPage/account/charge/ChargeComponent.jsx";
import {useParams} from "react-router";

const ChargePage = () => {

    const {cashId} = useParams()

    return (
        <ChargeComponent cashId={cashId}/>
    );
};

export default ChargePage;
