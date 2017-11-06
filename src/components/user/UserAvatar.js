import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './styledComponents/avatar';
// default Icons
import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import {white, green100} from 'material-ui/styles/colors';
import DefaultUserIcon from './styledComponents/icons/defaultUserIcon';
import {adminIcon as GroupAdminIcon, superAdminIcon as AdminIcon} from './styledComponents/icons/badgeIcons';

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

class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {user, onClick} = this.props;
        if(onClick){
            onClick(user); //maybe user.id??
        }
    }

    render() {
        const {user} = this.props;
        const Badge = user.isGroupAdmin ? <GroupAdminIcon/> : user.isAdmin ? <AdminIcon/> : null;
        return (
        <Container>
            <Avatar badgeContent = {Badge} size ={100} onClick={this.onClick}>
                {<DefaultUserIcon/>}
            </Avatar>
            
            <Title>{user.name}</Title>
            <SubTitle>{user.role}</SubTitle>
            
        </Container>
        );
    }
}

UserAvatar.propTypes = {
    user: PropTypes.object,
    onClick: PropTypes.func
}

export default UserAvatar;