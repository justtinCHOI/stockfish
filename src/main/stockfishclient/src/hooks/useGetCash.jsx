import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import jwtAxios from "../util/jwtUtil.jsx";
import { API_SERVER_HOST } from "../api/memberApi.jsx";

const host = `${API_SERVER_HOST}/api/cash`;

const getCashData = async (memberId) => {
    const response = await jwtAxios.get(`${host}/one/${memberId}`);
    return response.data.money;
};

const useGetCash = () => {
    const loginState = useSelector((state) => state.loginSlice);
    const isLogin = !!loginState.email;
    const memberId = loginState.memberId;

    const { data, isLoading, isError } = useQuery(
        ["cash", memberId],
        () => getCashData(memberId),
        {
            enabled: isLogin,
        }
    );

    return { cashData: data, cashLoading: isLoading, cashError: isError };
};

export default useGetCash;
