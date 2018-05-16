import React from 'react';
import {Tabs,Tab} from 'material-ui';
import styled from 'styled-components';

const activeStyle={
    backgroundColor:'#e3eae9',
    width:115,
    fontWeight: 600,
    fontSize: 30,
    color:'rgb(0, 150, 136)',
    marginRight: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,  
    zIndex: 200,
};
const passiveStyle={
    backgroundColor:'#e3eae9',
    width:115,
    fontWeight: 600,
    fontSize: 30,
    color:'black',
    marginRight: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,  
};


const StyleTabs= styled(Tabs).attrs({
    style:{
        position: 'absolute',
        top: '15%',
        marginLeft: '15%',
        marginRight: '30%',
        width:'60%',    
        zIndex:100,
    },
    inkBarStyle:{
        display:'none',
    },
    tabItemContainerStyle:{
        backgroundColor:'rgba(0, 0, 0, 0)',
    },
    contentContainerStyle:{
        boxShadow:'0px 0px 24px 0px rgba(0,0,0,0.36)', 
        position: 'inherit', 
        width: '-webkit-fill-available', 
        backgroundColor:'#e3eae9', 
        minWidth: 1300, 
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,

    },
})``;

const StyleTab= styled(Tab).attrs({
    style: props => props.selected? activeStyle : passiveStyle,    
})``;



StyleTab.muiName='Tab';

export {StyleTabs,StyleTab};