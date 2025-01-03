import {useNavigate} from "react-router-dom";
import {useState} from "react";


//파라미터 값을 통해서 각페이지로 이동하는 함수
function useCustomMove() {
    const navigate = useNavigate()

    //같은 페이지를 다시 호출했을 시 리스트를 다시 로드하기 위해서
    const[refresh, setRefresh] = useState(false)

    //넘어오는 페이지 설정값으로 list로 이동
    const moveToList = () => {
        setRefresh(!refresh)
        navigate({pathname: '/stock/items/entire'})
    }

    const moveToModify = (num) => {
        navigate({pathname:`/stock/article/modify/${num}`})

    }

    const moveToMemberModify = () => {
        navigate({pathname:`/mypage/modify/`})
    }

    const moveToRead = (num) => {
        navigate({pathname:`/stock/article/read/${num}`})
    }

    return {moveToList, moveToModify, moveToRead, moveToMemberModify, refresh}

}

export default useCustomMove;
