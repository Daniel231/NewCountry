import React from 'react';
import styled from 'styled-components';
import AccountBalanceIcon from 'material-ui/svg-icons/action/account-balance';
import iconButtonStyles from '../../shared/styles/iconButton.styles';
import TreeList from '../treeList/treeList.container';


const NavBar = styled.div`
  display: inline-block;
  flex-direction: column;
  vertical-align: top;
  width: 250px;
  box-shadow: -1px 2px 5px 0px #888888;  
  width: ${props => (props.width ? props.width : '')};
  display: flex;
  flex-shrink: 0;
`;

const TreeHeader = styled.div`
height: auto;
box-shadow: 0px 2px 5px -4px black;
z-index: 1;
display: inline-flex;
flex-shrink: 0;
padding: 25px;
`;

const Header = styled.p`
text-align: center;
font-weight: 600;
font-size: 35px;
margin: 0px;
padding: 4px;
`;

const SideNav = () => (
  <NavBar>
    <TreeHeader>
      <AccountBalanceIcon style={iconButtonStyles.mediumIcon} />
      <Header> עץ ארגוני </Header>
    </TreeHeader>
    <TreeList style={{ flexGrow: '1', }} />
  </NavBar>
);

export default SideNav;
