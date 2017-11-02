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
// import Classes from '../styles/usersTable/classes.css';



const Container = styled.div`
  margin: 2%;
  width: 80%
`;

const Styles = {
  avatarColumn: {
    width: '10%'
  }
}

function select(e,v){
console.log("selsct");
}

const UsersTable = ({data, headerCols, dataFields, avatarField, onSelect}) => {
  return (
   <Container>
    <Table onRowSelection={onSelect}>
      <TableHeader displaySelectAll= {false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn style={Styles.avatarColumn}/>
          {headerCols.map((header, i) => 
          <TableHeaderColumn key={i}>
              {header}
          </TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {data.map((dataRow, index) => 
        <TableRow key={index}>
          <TableRowColumn style={Styles.avatarColumn}>
            {avatarField ? 
            <Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"/>:
            <Avatar><DefaultIcon/></Avatar>}      
          </TableRowColumn>
          {dataFields.map((field,i) => 
          <TableRowColumn key={i}>
            {dataRow[field]}
          </TableRowColumn>)}
            
        </TableRow>)}
      </TableBody>
    </Table>
    </Container>
    
  );
};

  export default UsersTable;