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

    ::placeholder{
        font-size: 15px;
        padding-right: 10px;
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
    border-width: 0px;
    // border-bottom: 1px solid #7B8A8D;
    text-align: center;

    :focus{
        outline:none;
    }
    
    ::placeholder{
        font-size: 15px;
        color:#7B8A8D;
    }
`;

export {Input, FormInput};