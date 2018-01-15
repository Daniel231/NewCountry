import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const DetailBlock = styled.div`
    // height: 90%;
    border-left: ${props => (props.dashed ? 'dashed 2px #A6B2B2' : '')};
    padding-right: 50px;
    flex: 1 1;
`;

export const Line = styled.div`
line-height: 29px;
display: flex;
`;

export const Triangle = styled.div`
width: 0;
height: 0;
border-top: 25px solid transparent;
border-right: 25px solid #e3eae9;
border-bottom: 25px solid transparent;
margin-top: 55px;
`;
