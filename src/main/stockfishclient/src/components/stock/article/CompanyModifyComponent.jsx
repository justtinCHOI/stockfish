import React, {useEffect} from 'react';
import {deleteOne, getOne, putOne} from "../../../api/companyApi.js";
import useCustomMove from "../../../hooks/useCustomMove.js";
import ResultModal from "../../common/ResultModal.jsx";
import PropTypes from "prop-types";
import {
    Button,
    Container,
    FormRow,
    Input,
    Label,
    ReadOnlyInput,
    ButtonRow, ContentBottom
} from "../../../assets/css/content.jsx"

const initState = {
    companyId: 0,
    code: '',
    korName: '',
    createdAt: '',
};


function CompanyModifyComponent({companyId}) {

    //나중에 값이 바뀐다는 것은 상태처리라는 뜻
    const [company, setCompany] = React.useState(initState)

    const {moveToList, moveToRead} = useCustomMove();

    const [result, setResult] = React.useState(null)

    useEffect(() => {
        getOne(companyId).then(data => {
            setCompany(data);
        }).catch(err => {
            console.error("Failed to fetch DetailComponent article:", err);
            setCompany(initState);
        });
    }, [companyId]);

    const handleChangeCompany = (e) => {
        company[e.target.name] = e.target.value
        setCompany({...company})
        console.log("handleChangeCompany ", company)
    }

    const handleClickDelete = () => {
        deleteOne(companyId).then(data => {
            console.log("delete result : " + data)
            setResult('Deleted')
        })
    }

    const handleClickModify = () => {
        putOne(company).then(data => {
            console.log("modify result : " + data)
            setResult('Modified')
        })
    }

    const closeModal = () => {
        if (result === 'Deleted') {
            moveToList()
        } else if (result === 'Modified') {
            moveToRead(companyId)
        }
        setResult(null)
    }

    return (
        <>
            <Container>

                {result && <ResultModal title={'처리결과'} content={result} callbackFn={closeModal}/>}
                <FormRow>
                    <Label>번호</Label>
                    <ReadOnlyInput value={company.companyId} readOnly/>
                </FormRow>

                <FormRow>
                    <Label>코드</Label>
                    <ReadOnlyInput value={company.code} readOnly/>
                </FormRow>

                <FormRow>
                    <Label>회사명</Label>
                    <Input name="korName" type="text" value={company.korName} onChange={handleChangeCompany}/>
                </FormRow>

                {/*<FormRow>*/}
                {/*    <Label>수정일</Label>*/}
                {/*    <Input name="createdAt" type="date" value={company.createdAt} onChange={handleChangeCompany}/>*/}
                {/*</FormRow>*/}

                <ButtonRow>
                    <Button bgColor="red" onClick={handleClickDelete}>삭제</Button>
                    <Button bgColor="blue" onClick={handleClickModify}>수정</Button>
                </ButtonRow>
            <ContentBottom/>
            </Container>
        </>
    );
}

CompanyModifyComponent.propTypes = {
    companyId: PropTypes.number.isRequired
};
export default CompanyModifyComponent;
