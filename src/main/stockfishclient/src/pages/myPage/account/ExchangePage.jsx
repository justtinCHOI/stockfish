import ExchangeComponent from "../../../components/myPage/account/ExchangeComponent.jsx";
import {useParams} from "react-router";

const ExchangePage = () => {

    const {cashId} = useParams()

    return (
        <ExchangeComponent cashId={cashId}/>
    );
};

export default ExchangePage;