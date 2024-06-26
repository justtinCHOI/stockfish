import {IncludeInformationDiv, OutletDiv} from "../../assets/css/menu.jsx";
import LoginComponent from "../../components/member/LoginComponent.jsx";


const LoginPage = () => {
  return (
      <IncludeInformationDiv $top={2}>
        <OutletDiv>
            <LoginComponent/>
        </OutletDiv>
      </IncludeInformationDiv>
   );
}

export default LoginPage;
