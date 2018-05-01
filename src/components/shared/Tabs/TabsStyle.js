import React from 'react';
import {Tabs,Tab} from 'material-ui';
import styled from 'styled-components';
import { black } from 'material-ui/styles/colors';

const styleTab= styled(Tab).attrs({
    style:{
        backgroundColor:'#e3eae9',
        width:150,
        fontWeight: 600,
        fontSize: 30,
        color:'black',
        marginRight: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        // -webkit-box-shadow: 0px 0px 24px 0px #000000, 
        // boxShadow: 'inset 0px 0px 24px 0px #000000',

        },
    })``;

const styleTabs= styled(Tabs).attrs({
    style:{
        backgroundColor:'#e3eae9',
        width:'60%',
        marginTop: 100,
        marginLeft: 250,
        // boxShadow: 'inset 0px 0px 24px 0px #000000',
    },
    inkBarStyle:{
        display:'none'
    },
    tabItemContainerStyle:{
        backgroundColor:'rgba(255, 255, 255, 1)',
    }
})``;

export {styleTabs,styleTab};