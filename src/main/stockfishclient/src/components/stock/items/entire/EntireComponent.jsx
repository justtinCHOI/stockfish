import { useState} from 'react';
import useCustomMove from "../../../../hooks/useCustomMove.jsx";
import {WatchListContainer, StockList} from "../../../../assets/css/item.jsx";
import StockItem from "./StockItem.jsx";
import useCompanyData from "../../../../hooks/useCompanyData.jsx";
import {ContentBottom} from "../../../../assets/css/content.jsx";

// const holdingAmountText = "보유 현금";
// const amountUnit = "원";

function EntireComponent() {

    const [showChangePrice, setShowChangePrice] = useState(false);

    const {moveToRead} = useCustomMove();

    // useCompanyData 훅 사용하여 데이터 가져오기
    const {data: companies, isLoading, isError} = useCompanyData(2, 15);

    const companiesList = companies || [];

    // 로그인 상태 가져오기
    // const {isLogin} = useCustomLogin();

    // const { cashData: holdingsAmount } = useGetCash();

    // const [holdingCash, setHoldingCash] = useState("");

    //보유 주식 가져오기
    // useEffect(() => {
    //     if (holdingsAmount) {
    //         const holdingCash = holdingsAmount.toLocaleString();
    //         setHoldingCash(holdingCash);
    //     }
    // }, [holdingsAmount]);

    ///////////////////////////////////////

    // const {page, size, refresh, moveToList, moveToRead} = useCustomMove();
    // const [serverData, setServerData] = useState(initState);
    //company 들 가져오기
    // useEffect(() => {
    //     getList({page, size}).then(data => {
    //         console.log(data);
    //         setServerData(data);
    //     })
    // }, [page, size, refresh]);

    return (
        <WatchListContainer>
            {/*<Header2Container isLogin={isLogin}>*/}
                {/* {isLogin == 0 ? (<HoldingsAmount>로그인이 필요한 서비스 입니다.</HoldingsAmount>) : (<HoldingsAmount>현금 보유량: {holdingsAmount}원</HoldingsAmount>)} */}

                {/*<HoldingsAmount isLogin={isLogin}>*/}
                {/*    {isLogin && (*/}
                {/*        <>*/}
                {/*            <div className="amountText">{holdingAmountText}</div>*/}
                {/*            <div className="amount">*/}
                {/*                {holdingCash} {amountUnit}*/}
                {/*            </div>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</HoldingsAmount>*/}
            {/*</Header2Container>*/}
            <StockList>
                {isLoading ? (
                    <div></div>
                ) : isError ? (
                    <div>Error fetching data</div>
                ) : (
                    companiesList.map((company) => (
                        <StockItem
                            key={company.companyId}
                            company={company}
                            setShowChangePrice={setShowChangePrice}
                            showChangePrice={showChangePrice}
                            onClick={() => moveToRead(company.companyId)}
                        />
                    ))
                )}
            </StockList>
            <ContentBottom/>
        </WatchListContainer>
    );
}

export default EntireComponent;