import { useSelector } from "react-redux";
import { styled } from "styled-components";
import EChartsReact from "echarts-for-react";

import useGetStockData from "../../../../hooks/useGetStockData";
import useGetStockChart from "../../../../hooks/useGetStockChart.js";

const loadingText = "로딩 중 입니다...";
const errorText = "화면을 불러올 수 없습니다";

const ChartComponent = () => {
    // const companyId = useSelector((state: StateProps) => state.companyId);

    const companyId = useSelector((state) => state.companyId);

    const { stockPriceLoading, stockPriceError } = useGetStockData(companyId); // 봉 420개를 가져올 수 있는데 왜 안씀
    const { options, chartStyle } = useGetStockChart(companyId);

    if (stockPriceLoading) {
        return <LoadingContainer>{loadingText}</LoadingContainer>;
    }

    if (stockPriceError) {
        return <ErrorContainer>{errorText}</ErrorContainer>;
    }

    return (
        <Container>
            <ChartContainer>
                <EChartsReact option={options} style={chartStyle} />
            </ChartContainer>
            {/*<CompareChartBtn/>*/}
        </Container>
    );
};

export default ChartComponent;

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;

const ChartContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 500;
  color: #999999;
`;

const ErrorContainer = styled(LoadingContainer)``;


// import {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import {getOne} from "../../../api/companyApi.js";
// import useCustomMove from "../../../hooks/useCustomMove.js";
//
// const initState = {
//     tno: 0,
//     title: '',
//     writer: '',
//     dueDate: '',
//     complete: false
// };
//
// function ChartComponent({tno}) {
//     const [todo, setTodo] = useState(initState);
//     const {moveToList, moveToModify} = useCustomMove();
//
//     useEffect(() => {
//         getOne(tno).then(data => {
//             setTodo(data);
//         }).catch(err => {
//             console.error("Failed to fetch myPage article:", err);
//             setTodo(initState); // 초기 상태로 설정
//         });
//     }, [tno]);
//
//     return (
//         <div className="border-2 border-sky-200 mt-10 m-2 p-4">
//             {makeDiv('Tno', todo.tno)}
//             {makeDiv('Writer', todo.writer)}
//             {makeDiv('Title', todo.title)}
//             {makeDiv('Status', todo.complete ? 'Completed' : 'Not Yet')}
//             <div className="flex justify-end p-4">
//                 <button type="button"
//                         className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
//                         onClick={() => moveToList()}>
//                     List
//                 </button>
//             </div>
//             <div className="flex justify-end p-4">
//                 <button type="button"
//                         className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
//                         onClick={() => moveToModify(todo.tno)}>
//                     Modify
//                 </button>
//             </div>
//         </div>
//     );
// }
//
// const makeDiv = (title, value) => (
//     <div className="flex justify-center">
//         <div className="relative mb-4 flex w-full flex-wrap items-stretch">
//             <div className="w-1/5 p-6 text-right font-bold">{title}</div>
//             <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
//                 {value}
//             </div>
//         </div>
//     </div>
// );
//
// ChartComponent.propTypes = {
//     tno: PropTypes.number.isRequired
// };
//
// export default ChartComponent;
