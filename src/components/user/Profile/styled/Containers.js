import styled from 'styled-components';
import {GridContainer, GridRow, GridTile} from '../../../shared/grid';

export const Container = styled.div`
    display: flex;
    flex-shrink: 0;
    width: 100%;
    box-shadow: 1px 2px 5px #888888;

`;
export const BasicDetailsContainer = styled.div`
    /* direction: rtl; */
    // flex-basis:50%;
    display: flex;
    justify-content: flex-start;
    background-color: rgb(227, 234, 233);
    flex-grow: 1;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 3%;
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    margin-right: 6%;
`;

export const ExtendedDetailsContainer = styled.div`
    display: flex;
    background-color: #D1DDDD;
    padding-top: 15px;
    flex-grow: 1;
`;

export const Triangle = styled.div`
width: 0;
height: 0;
border-top: 25px solid transparent;
border-right: 25px solid #e3eae9;
border-bottom: 25px solid transparent;
margin-top: 55px;
`;
