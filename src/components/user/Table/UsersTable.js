import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import shortid from 'shortid';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn } from 'material-ui/Table';
// styled components & styles object
import { smallAvatar as Avatar } from '../styledComponents/avatar';
import DefaultIcon from '../styledComponents/icons/defaultUserIcon';
import { IconContainer } from './styled/Container';
import Styles from './styled/styles';

import { getUserBadgeIcon } from '../helpers';

import './styled/tmp.css';

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
const UsersTable = ({users, headerCols, dataFields, onSelect}) => {
  return (
  //  <Container>
    <Table fixedHeader onRowSelection={onSelect} wrapperStyle={Styles.wrapper}>
      <TableHeader displaySelectAll= {false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn style={Styles.iconColumnHeader} />
          <TableHeaderColumn style={Styles.avatarColumn} />
          {headerCols.map((header, i) => 
          <TableHeaderColumn style={{ color: 'black', }} key={i}>
            {header}
          </TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} >
        {users.map((user, index) => {
          const Badge = getUserBadgeIcon(user);
          const Icon = Badge ? <IconContainer><Badge/></IconContainer> : null;
          return (
            <TableRow key={index} style={{ backgroundColor: '#e3eae9', }}>
              <TableRowColumn style={Styles.iconColumn}>
                {Icon}
              </TableRowColumn>
              <TableRowColumn style={Styles.avatarColumn}>
                {user.avatar ? 
                <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"/>:
                <Avatar><DefaultIcon/></Avatar>}      
              </TableRowColumn>
              {dataFields.map((field,i) => 
              <TableRowColumn key={i}>
                {user[field]}
              </TableRowColumn>)} 
            </TableRow>);})}
      </TableBody>
    </Table>
    // </Container>
    
  );
};

UsersTable.propTypes = {
  users: PropTypes.object.isRequired,
  headerCols: PropTypes.array.isRequired,
  dataFields: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};


export default inject(
  root => ({
    users: root.store
      .selectedGroupStore.filteredMembers,
  })
)(observer(UsersTable));