import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import DefaultUserAvatar from 'material-ui/svg-icons/social/person';
import {white} from 'material-ui/styles/colors';
import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import CakeIcon from 'material-ui/svg-icons/social/cake';
// import Classes from '../styles/usersTable/classes.css';
import {Classes, Styles} from '../styles/usersTable';




/**
 * user: {
 *  name,
 *  role,
 *  avatar?,
 *  isGroupAdmin?,
 *  isAdmin?
 * } 
 */

const Headers = ["שם","תפקיד"]

const UserTable = ({users, onSelect}) => {
  return (
    <div className={Classes.container}>
    <Table onRowSelection={onSelect}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn className={Classes.iconHeader}></TableHeaderColumn>
          <TableHeaderColumn className={Classes.avatarColumn}></TableHeaderColumn>
          {Headers.map((header, i) => 
          <TableHeaderColumn className={Classes.headerColumn} key={i}>
              {header}
          </TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {users.map((user, index) => 
        <TableRow key={index}>

          <TableRowColumn style={user.isAdmin || user.isGroupAdmin ? 
            Styles.iconColumn : Styles.emptyIconColumn}>
            {user.isAdmin ? <CakeIcon color={white} style={Styles.icon}/> : 
              user.isGroupAdmin ? <StarIcon color={white} style={Styles.icon}/> : null}
          </TableRowColumn>

          <TableRowColumn className={Classes.avatarColumn}>
            {user.avatar ? 
            <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"/>:
            <Avatar><DefaultUserAvatar /></Avatar>}      
          </TableRowColumn>

          <TableRowColumn className={Classes.column}>{user.name}</TableRowColumn>

          <TableRowColumn className={Classes.column}>{user.role}</TableRowColumn>)
            
        </TableRow>)}
      </TableBody>
    </Table>
    </div>
  );
};

  export default UserTable;