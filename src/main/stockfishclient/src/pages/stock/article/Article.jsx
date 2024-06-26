import MenuComponent from "../../../components/common/MenuComponent.jsx";
import {ContentBelowMenu, IncludeInformationDiv, OutletDiv} from "../../../assets/css/menu.jsx";
import {Outlet} from "react-router-dom";
import {useParams} from "react-router";

const Article = () => {

    const { companyId } = useParams();

    const Menus = ['차트', '매수/매도', '상세정보', '뉴스',  '채팅' ];
    const Urls = ['chart', 'order', 'read', 'news', 'chat', 'sell'].map((url) => `${url}/${companyId}`);

    return (
        <IncludeInformationDiv $top={5} >
            <MenuComponent menus={Menus} urls={Urls}/>
            <ContentBelowMenu >
                <OutletDiv>
                    <Outlet/>
                </OutletDiv>
            </ContentBelowMenu >
        </IncludeInformationDiv>
    );
}

export default Article;

// const navigate = useNavigate();
// const location = useLocation();
// const { companyId } = useParams();
// const [activeMenu, setActiveMenu] = useState('chart');
//
// useEffect(() => {
//     if (location.pathname.includes('chart')) {
//         setActiveMenu('chart');
//     } else if (location.pathname.includes('buy')) {
//         setActiveMenu('buy');
//     } else if (location.pathname.includes('sell')) {
//         setActiveMenu('sell');
//     } else if (location.pathname.includes('read')) {
//         setActiveMenu('read');
//     } else if (location.pathname.includes('news')) {
//         setActiveMenu('news');
//     } else if (location.pathname.includes('chat')) {
//         setActiveMenu('chat');
//     }
// }, [location]);
//
// const handleClick = useCallback((path) => {
//     navigate({ pathname: path + '/' + companyId });
// }, [navigate, companyId]);
