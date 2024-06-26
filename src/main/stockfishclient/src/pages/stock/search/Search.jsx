import {Outlet} from "react-router-dom";
import {IncludeInformationDiv, OutletDiv} from "../../../assets/css/menu.jsx";
const Search = () => {

    return (
        <IncludeInformationDiv $top={5}>
            <OutletDiv>
                <Outlet/>
            </OutletDiv>
        </IncludeInformationDiv>
    );
}
export default Search;