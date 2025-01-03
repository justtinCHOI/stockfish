import styled from "styled-components";
import {useEffect, useState} from "react";
import useCompanyData from "../../hooks/useCompanyData.js";
import StockOverview from "./StockOverview.jsx";

const RapidSlider = () => {

    const [sliderIndex, setSliderIndex] = useState(0);

    const {data2: companies, isLoading, isError} = useCompanyData(2, 15);

    useEffect(() => {
        const interval = setInterval(() => {
            setSliderIndex((prevIndex) => (prevIndex + 1) % (companies?.length || 1));
        }, 2000);
        return () => clearInterval(interval);
    }, [companies]);

    return (
        <RapidSliderInfo>
            {companies?.map((company, i) => (
                <SliderItem key={company.companyId} $active={i === sliderIndex}>
                    {/*<p>{company.korName}</p>*/}
                    <StockOverview
                        stockInfo={company}
                        stockInfoLoading={isLoading}
                        stockInfoError={isError}
                    />
                </SliderItem>
            ))}
        </RapidSliderInfo>
    );
}

export default RapidSlider;

const RapidSliderInfo = styled.div`
    background-color: #fff;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #888;
    position: fixed;
    bottom: 50px;
    width: 100%;
    padding : 5px;
`;

const SliderItem = styled.div`
    width : 350px;
    height: 100%;
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    transition: all 0.5s ease;
    
`;
