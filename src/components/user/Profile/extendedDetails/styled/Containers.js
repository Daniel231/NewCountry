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
