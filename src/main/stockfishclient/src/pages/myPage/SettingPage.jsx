import SettingComponent from "../../components/myPage/SettingComponent.jsx";
import {useParams} from "react-router";

function SettingPage() {

    const {tno} = useParams()

    return (
        <div className="p-4 w-full bg-white  ">
            <div className="text-3xl font-extrabold">
                Todo SettingPage {tno}
            </div>
            <SettingComponent tno={tno} />
        </div>
    );
}

export default SettingPage;