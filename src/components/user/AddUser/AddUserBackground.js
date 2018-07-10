import React from 'react';
import styled from 'styled-components';
import img from '../../../images/AddUser_background.jpg';

const AddUserBackground = styled.div`

    background: url(${img});
    position: fixed; 
    top: 0; 
    left: 0;
    min-width: 100%;
    min-height: 100%;
    background-repeat:no-repeat;  
    background-size:cover;
   
`;

export default AddUserBackground;
