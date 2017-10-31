import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './styledComponents/avatar';
// default Icons
import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import {white, green100} from 'material-ui/styles/colors';
import CakeIcon from 'material-ui/svg-icons/social/cake';
import DefaultUserIcon from 'material-ui/svg-icons/social/person';


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
const DefaultUserAvatar = <DefaultUserIcon color={white} style={{width: '100%', height:'100%',backgroundColor:'#A0B7B6', borderBottomLeftRadius:'50%'}}/>
const Icon = <StarIcon color ={white} />

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
    const Badge = user.isAdmin ? Icon : null;
    const rootStyle = Object.assign({}, defaultStyles.root, style);
    return (
    <div style={rootStyle}>
        <Avatar badgeContent = {Badge} size ={100} onClick={()=>{} }>
            {DefaultUserAvatar}
        </Avatar>
        <div style={defaultStyles.title}>
            {user.name}
        </div>
        <div style={defaultStyles.subTitle}>
            {user.role}
        </div>
    </div>
    );
};

export default UserAvatar;