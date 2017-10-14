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
import DefaultUserIcon from 'material-ui/svg-icons/social/person';
// import Classes from '../styles/usersTable/classes.css';
import {Classes, Styles} from '../styles/usersTable';



function select(e,v){
console.log("selsct");
}

const UsersTable = ({data, headerCols, dataFields, avatarField, onSelect}) => {
  return (
    <div className={Classes.container}>
    <Table onRowSelection={onSelect}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn className={Classes.avatarColumn}></TableHeaderColumn>
          {headerCols.map((header, i) => 
          <TableHeaderColumn className={Classes.headerColumn} key={i}>
              {header}
          </TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {data.map((dataRow, index) => 
        <TableRow key={index}>
          <TableRowColumn className={Classes.avatarColumn}>
            {avatarField ? 
            <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"/>:
            <Avatar><DefaultUserIcon/></Avatar>}      
          </TableRowColumn>
          {dataFields.map((field,i) => 
          <TableRowColumn className={Classes.column} key={i}>
            {dataRow[field]}
          </TableRowColumn>)}
            
        </TableRow>)}
      </TableBody>
    </Table>
    </div>
  );
};

  export default UsersTable;