import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {GridContainer, GridTile, GridRow } from '../../shared/grid';
import Avatar from './DetailAvatar';

const Container = styled(GridContainer)`
    width: 100%;
`;
const Tile = styled(GridTile)`
    margin: 30px;
`;

const UsersGridView = ({users, onAvatarClick}) => {
    return (
        <Container>
            <GridRow wrap>
                {users.map((user, i) => 
                <Tile key = {i}>
                    <Avatar user = {user} onClick = {onAvatarClick}/>
                </Tile>)}
            </GridRow>
        </Container>
    );
};

UsersGridView.propTypes = {
    users: PropTypes.array,
    onAvatarClick: PropTypes.func
}

export default inject(
  root => ({
    users: root.store
      .selectedGroupStore.filteredMembers,
  })
)(observer(UsersGridView));
