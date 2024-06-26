import {useParams} from "react-router";
import MemberInfoComponent from "../../components/myPage/MemberInfoCompoment.jsx";

function MemberInfoPage() {

    const {tno} = useParams()

    return (
            <MemberInfoComponent tno={tno}/>
    );
}

export default MemberInfoPage;