import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';


const defaultStyles = {
    container: {
        padding:0     
    },
    badge: {
        top: '70%',
        right: '-4%',
        backgroundColor:'#90B7B6',
        width: '30px',
        height: '30px'
        // zIndex:2     
    },
    root: {
        margin: '10px',
        padding:0        
        // maxWidth:'100px',
        // maxHeight:'100px',
        // width:'100%',
        // height:'100%'
    },
    avatar: {
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.6)',          
    },
    button : {
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.6)',  
        borderBottomLeftRadius: '50%' ,
        borderBottomRightRadius: '50%',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        zIndex: 0
    }
};

const innerImgProps = {width:'100%' ,height:'100%'};

const BadgeAvatar = ({src, children, style, size, badgeStyle, badgeContent, onClick}) => {
    const mergedRootStyle = Object.assign({}, defaultStyles.root, style)
    const mergedBadgeStyle = Object.assign({}, defaultStyles.badge, badgeStyle);
    const mergedAvatarStyle = Object.assign({}, defaultStyles.avatar, mergedRootStyle);
    // const mergedAvatarStyle = Object.assign({}, defaultStyles.avatar, style);
    const defaultButtonStyle = Object.assign({}, defaultStyles.button, 
        { width:`${size}px`, height:`${size}px`});
    
   
    const avatar = (
        <Avatar src={src} style={badgeContent? defaultStyles.avatar: mergedAvatarStyle} size={size}>
            {children}
        </Avatar>
    );
    const buttonStyle = badgeContent? defaultButtonStyle : 
        Object.assign(defaultButtonStyle, defaultStyles.root, style)
    const button = (
        <FlatButton style={buttonStyle} onClick={onClick} rippleColor ="white">
            {children ? children : <img {...innerImgProps} src={src}/>}
        </FlatButton>
    );
    const innerElem = onClick ? button : avatar;
    return badgeContent ?
    (<Badge style={mergedRootStyle} badgeStyle= {mergedBadgeStyle} 
        badgeContent={badgeContent}>
        {innerElem}
    </Badge>) :
    innerElem;
};

export default BadgeAvatar;