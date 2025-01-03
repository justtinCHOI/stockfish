import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import useGetStockInfo from '../../../../hooks/useGetStockInfo.js';
// import useGetStockData from '../../../../hooks/useCustomCash';
// import useCustomCash from "../../../../hooks/useCustomCash.js";
// import useGetStockOrderRecord from '../../../../hooks/useGetStockOrderRecord';
// import useGetHoldingStock from '../../../../hooks/useGetHoldingStock';
// import useGetCompanyList from '../../../../hooks/useGetCompanyList';
// import StockOrder from './StockOrder.jsx';

// import OrderResult from './OrderResult';
// import WaitOrderIndicator from './WaitOrderIndicator';

// import useCustomLogin from "../../../../hooks/useCustomLogin.js";
import {dummyLogo, logoList} from "../../../../util/companyLogos.js"
// import {useEffect, useState} from "react";
import StockOrder from "./StockOrder.jsx";
import LoginRequestIndicator from "../../../common/LoginRequestIndicator.jsx";

// const errorMessage = "정보를 불러올 수 없습니다";
// const errorButtonText = "닫기";
// const moneyRequireText = "현금 충전이 필요한 서비스입니다";
// const moenyRequireBtnText = "현금 충전하러 가기";
// const upperbarTitle = "주식주문";
// const loginBtnText = "StockFish 로그인";
const marketType = "코스피";

const BuyComponent = ({companyId}) => {
    const loginState = useSelector((state) => state.loginSlice);
    // const {moveToManage} = useCustomCash();

    const isLogin = !!loginState.email;

    const {stockInfo} = useGetStockInfo(companyId);
    if (!stockInfo || !stockInfo.korName || !stockInfo.code || !stockInfo.stockInfResponseDto.prdy_ctrt) {
        return null;
    }

    // const { stockPrice} = useGetStockData(companyId);
    // const { cashLoading, cashError } = useGetCash();
    // const { orderRecordLoading, orderRecordError } = useGetStockOrderRecord();
    // const { holdingStockLoading, holdingStockError } = useGetHoldingStock();
    // const { compnayListLoading, companyListError } = useGetCompanyList();

    // const isLoading = stockInfoLoading || stockPriceLoading || cashLoading || orderRecordLoading || holdingStockLoading || compnayListLoading;
    // const isError = stockInfoError || stockPriceError || orderRecordError || holdingStockError || companyListError;

    // if (isLoading) {
    //     return <Container orderSet={stockOrderSet}>로딩 중</Container>;
    // }
    //
    // if (isError || stockPrice.length === 0) {
    //     return (
    //         <Container orderSet={stockOrderSet}>
    //             <div className="ErrorContainer">
    //                 <div className="ErrorMessage">{errorMessage}</div>
    //             </div>
    //         </Container>
    //     );
    // }
    //
    // if (cashError) {
    //     return (
    //         <Container orderSet={stockOrderSet}>
    //             <MoneyRequireContainer>
    //                 <div className="Notification">{moneyRequireText}</div>
    //                 <button className="LoginButton" onClick={moveToManage}>{moenyRequireBtnText}</button>
    //             </MoneyRequireContainer>
    //         </Container>
    //     );
    // }

    const corpName = stockInfo.korName;
    const stockCode = stockInfo.code;
    const stockPrice = parseInt(stockInfo.stockInfResponseDto.stck_prpr, 10).toLocaleString();
    const priceChangeRate = parseFloat(stockInfo.stockInfResponseDto.prdy_ctrt);
    const changeDirection = priceChangeRate > 0 ? "▲" : "▼";
    const priceChangeAmount = Math.abs(parseInt(stockInfo.stockInfResponseDto.prdy_vrss, 10)).toLocaleString();
    const transactionVolume = parseInt(stockInfo.stockInfResponseDto.acml_vol, 10).toLocaleString();
    const logos = {
        ...logoList
    };

    const companyLogo = logos[corpName] || dummyLogo;

    return (
        <Container>
            {isLogin ? (
                <div className="mainContent">
                    <StockName $priceChangeRate={priceChangeRate}>
                        <img className="CorpLogo" src={companyLogo} alt="stock logo"/>
                        <div className="NameContainer">
                            <div className="StockCode">
                                {stockCode} | {marketType}
                            </div>
                            <div className="CorpName">{corpName}</div>
                        </div>
                        <div className="StockPrice">{stockPrice}</div>
                        <div className="PriceChangeAmount">
                            <div className="changeDirection">{changeDirection}</div>
                            {priceChangeAmount}
                        </div>
                        <div className="TransactionVolume ">
                            <div className="PriceChangeRate">{priceChangeRate}%</div>
                            <TransactionVolume>
                                {transactionVolume}주
                            </TransactionVolume>
                        </div>
                    </StockName>
                    <BuyingDiv>
                    <StockOrder corpName={corpName}/>
                    {/*<OrderResult />*/}
                    {/*<WaitOrderIndicator />*/}
                    </BuyingDiv>
                </div>
            ) : (
                <LoginRequestIndicator/>
            )}
        </Container>
    );
};

export default BuyComponent;

BuyComponent.propTypes = {
    companyId: PropTypes.number
};

const Container = styled.aside`
    z-index: 1;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 20px);
    height: 100%;
    background-color: #ffffff;

    .mainContent {
        height: 100%;
    }

    .ErrorContainer {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

        .ErrorMessage {
            font-size: 20px;
            color: #999999;
        }

        .ErrorCloseButton {
            width: 35%;
            height: 32px;
            color: white;
            background-color: #2f4f4f;
            border: none;
            border-radius: 0.5rem;
        }
    }
`;

// const MoneyRequireContainer = styled(LoginRequestContainer)``;

const StockName = styled.section`
    border-bottom: 1px solid #ddd;
    width: calc(100vw - 20px);
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 8px;
    padding-left: 16px;
    gap: 9px;
    justify-content: space-evenly;
    position : fixed;
    background-color: white;
    z-index: 100;

    .CorpLogo {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }

    .NameContainer {
        height: 40px;
        display: flex;
        flex-direction: column;
    }

    .CorpName {
        font-size: 16px;
        font-weight: 500;
        color: #1c1c1c;
    }

    .StockCode {
        font-size: 12px;
        color: #999999;
    }
    .StockPrice {
        font-size: 19px;
        color: ${(props) => (props.$priceChangeRate > 0 ? "#ed2926" : props.$priceChangeRate === 0 ? "black" : "#3177d7")};
        font-weight: 550;
    }
    .PriceChangeRate{
        font-size: 19px;
        color: ${(props) => (props.$priceChangeRate > 0 ? "#ed2926" : props.$priceChangeRate === 0 ? "black" : "#3177d7")};
        display: flex;
        flex-direction: row;
        font-weight: 550;
    }
    .PriceChangeAmount {
        font-size: 14px;
        color: ${(props) => (props.$priceChangeRate > 0 ? "#ed2926" : props.$priceChangeRate === 0 ? "black" : "#3177d7")};
        display: flex;
        flex-direction: row;
        gap: 2px;
        .changeDirection {
            font-size: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const TransactionVolume = styled.div`
    white-space: nowrap;
    min-width: min-content;
    font-size: 11px;
    color: #999;
    font-weight: 400;
`;

const BuyingDiv = styled.div`
    margin-top: 64px;
    padding-bottom: 130px;
`;
