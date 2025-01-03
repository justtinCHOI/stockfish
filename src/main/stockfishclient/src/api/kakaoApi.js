import axios from "axios";
import {API_SERVER_HOST} from "./memberApi.js";

const rest_api_key =`8f46337bde852c2d39573c6c60acfd65` //REST키값

const redirect_uri =`http://localhost:5173/member/kakao`

const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

const access_token_url =`https://kauth.kakao.com/oauth/token` //추가

//1. 인가코드 얻기
export const getKakaoLoginLink = () => {

  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  return kakaoURL

}

//2. accessToken 받기
export const getAccessToken = async (authCode) => {

  const header = {
   headers: {
     "Content-Type": "application/x-www-form-urlencoded",
   }
  }
  const params = {
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code:authCode
  }

  const res = await axios.post(access_token_url, params , header)

  return res.data.access_token
}

//3. 사용자 정보 얻기
export const getMemberWithAccessToken = async(accessToken) => {

  const res = await axios.get(`${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`)

  return res.data

}
