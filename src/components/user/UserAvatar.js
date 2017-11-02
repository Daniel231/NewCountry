import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './styledComponents/avatar';
// default Icons
import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import {white, green100} from 'material-ui/styles/colors';
import CakeIcon from 'material-ui/svg-icons/social/cake';
import DefaultUserIcon from './styledComponents/icons/defaultUserIcon';
import {adminIcon as AdminIcon} from './styledComponents/icons/badgeIcons';

/**
 * user: {
 *  id,
 *  name,
 *  role,
 *  avatar?,
 *  isGroupAdmin?,
 *  isAdmin?
 * } 
 */

const Container = styled.div`
    margin: 10px;
`;

const Title = styled.span`
    display: block;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
`;

const SubTitle = Title.extend`
    font-weight: 400;
    color: grey;
`;
const defaultStyles = {
    root: {
        margin: '10px'
    },
    title: {
        fontWeight: 600,
        fontsSize: '14px',
        textAlign:'center'
    },
    subTitle: {
        textAlign:'center',
        color: 'grey'
    }
}


const UserAvatar = ({user,style}) => {
    const Badge = user.isAdmin ? <AdminIcon/> : null;
    const rootStyle = Object.assign({}, defaultStyles.root, style);
    return (
    <div style={rootStyle}>
        <Avatar badgeContent = {Badge} size ={100} onClick={()=>{} }>
            {<DefaultUserIcon/>}
        </Avatar>
        
        <Title>{user.name}</Title>
        <SubTitle>{user.role}</SubTitle>
        
    </div>
    );
};

export default UserAvatar;