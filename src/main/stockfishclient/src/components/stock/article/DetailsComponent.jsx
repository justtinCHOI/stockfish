import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getOne} from "../../../api/companyApi.js";
import useCustomMove from "../../../hooks/useCustomMove.js";
import {
    Button,
    ButtonRow,
    Container,
    ContentBottom,
    FormRow,
    Label, ReadOnlyInput,
} from "../../../assets/css/content.jsx";

const initState = {
    companyId: 0,
    code: '',
    korName: '',
    createdAt: '',
};

function DetailComponent({companyId}) {
    const [company, setCompany] = useState(initState);
    const {moveToModify} = useCustomMove();

    useEffect(() => {
        getOne(companyId).then(data => {
            setCompany(data);
        }).catch(err => {
            console.error("Failed to fetch DetailComponent article:", err);
            setCompany(initState);
        });
    }, [companyId]);

    return (
        <Container>
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
                <ReadOnlyInput value={company.korName} />
            </FormRow>
            {/*<FormRow>*/}
            {/*    <Label>상장일</Label>*/}
            {/*    <ReadOnlyInput value={company.createdAt} />*/}
            {/*</FormRow>*/}
            <ButtonRow>
                <Button onClick={() => moveToModify(company.companyId)}>Modify</Button>
            </ButtonRow>
            <ContentBottom/>
        </Container>
    );
}


DetailComponent.propTypes = {
    companyId: PropTypes.number.isRequired
};

export default DetailComponent;

