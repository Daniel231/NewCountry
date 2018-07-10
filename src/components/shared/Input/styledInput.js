import styled from 'styled-components';

const Input=styled.input.attrs({
    type:'text',
})`
    display: flex;
    width: 350px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 15px;
    border-width: 0px;
    font-size: 16px;
    padding-right: 10px;

    ::placeholder{
        font-size: 15px;  
        color:#7B8A8D;
    }

    :focus{
        outline:none;
    }

`;

const FormInput = styled.input.attrs({
    type:'text',
})`
    background-color: inherit;
    // background-color: yellow;
    border-width: 0px;
    text-align: center;
    font-size: 16px;
    width:100%;
    // position: absolute;

    :focus{
        outline:none;
    }
    
    ::placeholder{
        font-size: 15px;
        color:#7B8A8D;
    }
`;

export {Input, FormInput};