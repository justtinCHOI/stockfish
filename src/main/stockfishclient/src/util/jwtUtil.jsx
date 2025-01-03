import axios from "axios";
import { getLocalStorage, setLocalStorage } from "./localStorageUtil.jsx"; // localStorage 유틸리티 파일로 변경
import { API_SERVER_HOST } from "../api/memberApi.js";

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {
    const host = API_SERVER_HOST;
    const header = { headers: { "Authorization": `Bearer ${accessToken}` } };

    const res = await axios.get(`${host}/api/member/refresh?refreshToken=${refreshToken}`, header);

    return res.data;
};

const beforeReq = (config) => {
    const memberInfo = getLocalStorage("member");

    if (!memberInfo) {
        return Promise.reject({
            response: {
                data: { error: "REQUIRE_LOGIN" }
            }
        });
    }

    const { accessToken } = memberInfo;

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
};

const requestFail = (err) => {

    console.log("requestFail ",err)

    return Promise.reject(err);

};

const beforeRes = async (res) => {
    const data = res.data;

    if (data && data.error === 'ERROR_ACCESS_TOKEN') {
        const memberLocalStorageValue = getLocalStorage("member");

        const result = await refreshJWT(memberLocalStorageValue.accessToken, memberLocalStorageValue.refreshToken);

        memberLocalStorageValue.accessToken = result.accessToken;
        memberLocalStorageValue.refreshToken = result.refreshToken;

        setLocalStorage("member", memberLocalStorageValue, 1);

        const originalRequest = res.config;

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

        return await axios(originalRequest);
    }

    return res;
};

const responseFail = (err) => {
    return Promise.reject(err);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
