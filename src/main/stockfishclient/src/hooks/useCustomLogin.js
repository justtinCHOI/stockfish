import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router";
import {loginPostAsync, logout} from "../slices/loginSlice.js";
import {useDispatch, useSelector} from "react-redux";

const useCustomLogin = ( ) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginState = useSelector(state => state.loginSlice)

  const isLogin = !!loginState.email //----------로그인 여부

  const doLogin = async (loginParam) => { //----------로그인 함수
    const action = await dispatch(loginPostAsync(loginParam))
    return action.payload
  }

  const doLogout = () => { //---------------로그아웃 함수
    dispatch(logout())
  }

  const moveToPath = (path) => {  //----------------페이지 이동
    navigate({pathname: path}, {replace:true})
  }

  const moveToLogin = () => { //----------------------로그인 페이지로 이동 // 이벤트 기반
    navigate({pathname: '/member/login'}, {replace:true})
  }

  const moveToLoginReturn = () => { //----------------------로그인 페이지로 이동 컴포넌트 // 조건부 기반
    return <Navigate replace to="/member/login"/>
  }

  return  {loginState, isLogin, doLogin, doLogout, moveToPath, moveToLogin, moveToLoginReturn}

}

export default useCustomLogin
