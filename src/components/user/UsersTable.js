import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn} from 'material-ui/Table';
import {smallAvatar as Avatar} from './styledComponents/avatar';
import DefaultIcon from './styledComponents/icons/defaultUserIcon';
import {getUserBadgeIcon} from './helpers';

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
  margin: 2%;
  width: 80%
`;

const IconContainer = styled.div`
  display: flex;
  background-color: #90B7B6;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Styles = {
  wrapper: {
    width: '80%',
    maxHeight:'440px',
    margin: '2%',
    overflow: 'auto'
  },
  avatarColumn: {
    width: '6%',
    minWidth: '0'
  },
  iconColumn: {
    width: '3%',
    // backgroundColor:'#90B7B6',
    padding:0,
    minWidth: '0'
  },
  iconColumnHeader: {
    width: '3%',
    padding:0    
  }
}


const UsersTable = ({users, headerCols, dataFields, onSelect}) => {
  return (
  //  <Container>
    <Table fixedHeader onRowSelection={onSelect} wrapperStyle={Styles.wrapper}>
      <TableHeader displaySelectAll= {false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn style={Styles.iconColumnHeader}/>
          <TableHeaderColumn style={Styles.avatarColumn}/>
          {headerCols.map((header, i) => 
          <TableHeaderColumn key={i}>
              {header}
          </TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {users.map((user, index) => {
          const Badge = getUserBadgeIcon(user);
          const Icon = Badge ? <IconContainer><Badge/></IconContainer> : null;
          return (
          <TableRow key={index}>
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

  export default UsersTable;