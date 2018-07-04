import React from 'react';
import styled from 'styled-components';

const SearchButton=styled.button`
    color:white;
    background-color: rgb(0, 165, 146);
    font-size: 15px;
    font-weight: bold;
    width:90px;
    height: 30px;
    margin-top: 10px;
    border-radius: 15px;
    border-width: 0px;
    margin-right: 10px;
    outline:none;
    cursor:pointer;
`;


const KabamButton=styled.button`
    color:white;
    background-color: rgb(0, 165, 146);
    font-size: 15px;
    font-weight: bold;
    width:180px;
    height: 30px;
    border-radius: 15px;
    border-width: 0px;
    margin-right: 10px;
    position:relative;
    right: 500px;
    bottom: 30px;
    outline:none;
    cursor:pointer;
`;

export {SearchButton,KabamButton};