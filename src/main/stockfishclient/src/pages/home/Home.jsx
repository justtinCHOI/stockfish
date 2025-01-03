import {IncludeInformationDiv, OutletDiv} from "../../assets/css/menu.jsx";
import Main from "../../components/home/main/Main.jsx";
import Footer from "../../components/home/Footer.jsx";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin.js";

const Home = () => {

    const loginState = useSelector((state) => state.loginSlice);
    const {doLogout, moveToPath} = useCustomLogin()
    const handleClickLogout = () => {
        doLogout()
        alert("로그아웃되었습니다.")
        moveToPath("/home")
    }

    return (
        <>
            <StockInfoHomeDiv>
                <WelcomeMessage>반가워요! StockFish 입니다.</WelcomeMessage>
                    { ! loginState.email ?
                        <WelcomeLogin>
                            <Link to={'/member/login'}>Login</Link>
                        </WelcomeLogin>
                        :
                        <WelcomeLogin
                            onClick={handleClickLogout}>
                            Logout
                        </WelcomeLogin>
                    }
                <WelcomeSearchIcon />
            </StockInfoHomeDiv>
            <IncludeInformationDiv $top={3}>
                    <OutletDiv>
                        <Main/>
                        <Footer/>
                    </OutletDiv>
            </IncludeInformationDiv>
        </>
    );
}

export default Home;

const StockInfoHomeDiv = styled.div`
    background-color: royalblue;
    height: 4rem;
    display: flex;
    align-items: center;
    //justify-content: center;
    justify-content: space-around;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
`;

const WelcomeMessage = styled.div`
    font-size: 1rem;
    text-decoration-color: white;
    color: white;
    display : flex;
    left : 0;
`;

const WelcomeLogin = styled.div`
    font-size: 1rem;
    text-decoration-line: underline;
    color: white;
    display : flex;
    padding-right : 35px;
`;

const WelcomeSearchIcon = styled(FaSearch)`
    position: absolute;
    color: white;
    display : flex;
    right: 28px;
`;
