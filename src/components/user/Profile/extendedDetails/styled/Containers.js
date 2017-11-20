import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const DetailBlock = styled.div`
    height: 90%;
    width: 380px;
    /* flex-grow: 1; */
    /* min-width: 300px; */
    /* max-width: 400px; */
    border-left: ${props => props.dashed ? 'dashed 2px #A6B2B2' : ''};
    padding-right: 50px;
`;

export const Line = styled.div`
line-height: 29px;
`;