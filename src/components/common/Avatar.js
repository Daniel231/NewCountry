import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';

const defaultStyles = {
    container: {
        padding:0        
    },
    badge: {
        top: '70%',
        right: '-4%',
        backgroundColor:'#90B7B6',
        width: '30px',
        height: '30px',
        zIndex:2     
    },
    avatar: {
        maxWidth:'100px',
        maxHeight:'100px',
        width:'100%',
        height:'100%'
    }
};



const BadgeAvatar = ({src, children, style, size, badgeStyle, badgeContent}) => {
    const mergedBadgeStyle = Object.assign({}, defaultStyles.badge, badgeStyle);
    const mergedAvatarStyle = Object.assign({}, defaultStyles.avatar, style);
    return (
    <Badge style={defaultStyles.container} badgeStyle= {mergedBadgeStyle} 
        badgeContent={badgeContent}>
        <Avatar src={src} style={mergedAvatarStyle} size={size}>
            {children}
        </Avatar>
    </Badge>);
}

export default BadgeAvatar;