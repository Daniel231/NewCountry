import React from 'react';
import styled from 'styled-components';
import SelectField from 'material-ui/SelectField';

const styledSelectField = styled(SelectField).attrs({
    hintStyle:{
        color:'#7B8A8D',
        zIndex:1,
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize: 15,
    },
    iconStyle:{
        top: -6,
    },
    menuStyle:{
        backgroundColor:'white',
        borderRadius: 15,
        width: 550,
        height: 35,
    },
    underlineStyle:{
        display:'none'
    },
    style:{
        display:'block',
        marginTop: 10,
        marginBottom: -15,  
    },
})``;

export default styledSelectField;