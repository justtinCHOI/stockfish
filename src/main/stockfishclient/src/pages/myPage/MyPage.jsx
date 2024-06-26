import { Outlet} from "react-router-dom";
import {ContentBelowMenu, IncludeInformationDiv, OutletDiv} from "../../assets/css/menu.jsx";
import MenuComponent from "../../components/common/MenuComponent.jsx";
import StockInfoComponent from "../../components/common/StockInfoComponent.jsx";

const MyPage = () => {

    const Menus = ['손익', '회원정보', '회사추가',  '설정' , '계좌'];
    const Urls = ['profit', 'memberInfo', 'company/add', 'setting', 'account'];
    return (
        <>
            <StockInfoComponent/>
            <IncludeInformationDiv $top={2}>
                <MenuComponent menus={Menus} urls={Urls}/>
                <ContentBelowMenu >
                    <OutletDiv>
                        <Outlet/>
                    </OutletDiv>
                </ContentBelowMenu >
            </IncludeInformationDiv>
        </>
    );
}

export default MyPage;

// const navigate = useNavigate();
// const location = useLocation();
// const [activeMenu, setActiveMenu] = useState('profit');
//
// useEffect(() => {
//     if (location.pathname.includes('profit')) {
//         setActiveMenu('profit');
//     } else if (location.pathname.includes('memberInfo')) {
//         setActiveMenu('memberInfo');
//     } else if (location.pathname.includes('company/add')) {
//         setActiveMenu('companyAdd');
//     } else if (location.pathname.includes('setting')) {
//         setActiveMenu('setting');
//     }
// }, [location]);
//
// const handleClick = useCallback((path) => {
//     navigate({ pathname: path });
// }, [navigate]);