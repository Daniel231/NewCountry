import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
// import Button from './styledButton';
import FlatButton from 'material-ui/FlatButton';


const basetyles = {
    badge: {
        top: '70%',
        right: '-4%',
        // backgroundColor:'#90B7B6',
        width: '30px',
        height: '30px'  
    },
    root: {     
        padding:0              
    },
    button: {
        borderBottomLeftRadius: '50%' ,
        borderBottomRightRadius: '50%',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        zIndex: 0
    },
    avatar: {
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.6)'
    },
    innerImg: {
        width:'100%' ,height:'100%'
    }
};

const BadgeAvatar = ({src, children, style, size, badgeStyle, innerStyle, badgeContent, onClick}) => {
    let rootStyles = Object.assign({}, basetyles.root, style),
        mergedBadgeStyle = Object.assign({}, basetyles.badge, badgeStyle),
        buttonStyle = Object.assign({},basetyles.button,{width: `${size}px`, height: `${size}px`}, innerStyle),
        avatarStyle = Object.assign({}, innerStyle);
    if(!badgeContent) {
        buttonStyle = Object.assign(buttonStyle, style);
        avatarStyle = Object.assign(avatarStyle, style);
    }

    const avatar = (
        <Avatar src={src} style={avatarStyle} size={size}>
            {children}
        </Avatar>
    );
    const button = (
        <FlatButton rippleColor={'white'} style={buttonStyle} onClick={onClick}>
            {children ? children : <img {...basetyles.innerImg} src={src}/>}
        </FlatButton>
    );
    const innerElem = onClick ? button : avatar;
    return badgeContent ?
    (<Badge style={rootStyles} badgeStyle= {mergedBadgeStyle} 
        badgeContent={badgeContent}>
        {innerElem}
    </Badge>) :
    innerElem;
};

export default BadgeAvatar;