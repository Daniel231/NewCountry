import styled from 'styled-components';
import {GridContainer, GridRow, GridTile} from '../../../shared/grid';

export const Container = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 1px 2px 5px #888888;
`;
export const BasicDetailsContainer = styled.div`
    /* direction: rtl; */
    flex-basis:50%;
    display: flex;
    justify-content: flex-start;
    background-color: rgb(227, 234, 233);
    /* flex-grow: 1; */
    width: 50%;
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
    /* flex-grow: 1; */
    width: 50%;
    flex-basis:50%;
    background-color: #D1DDDD;
    padding-top: 15px;
    /* padding-right: 50px; */
`;