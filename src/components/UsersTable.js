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
import Style from '../styles/usersTable/style.css';



function select(e,v){
console.log("selsct");
}

const UsersTable = ({data, headerCols, dataFields, onSelect}) => {
    return (
      <div className={Style.usersTable}>
        <Table onRowSelection={select}>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                {headerCols.map((header, i) => <TableHeaderColumn key={i}>{header}</TableHeaderColumn>)}
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {data.map((dataRow, index) => 
                <TableRow key={index}>
                <TableRowColumn style={{width:'10%', paddingLeft:'4px'}}><Avatar  src="https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"/></TableRowColumn>
                  {dataFields.map((field,i) => <TableRowColumn key={i}>{dataRow[field]}</TableRowColumn>)}
                  
                </TableRow>)}
            </TableBody>
        </Table>
      </div>
    );
  };

  export default UsersTable;