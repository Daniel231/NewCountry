import React from 'react';
import PropTypes from 'prop-types';
import AppBarMui from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {Link} from 'react-router-dom';

const AppBar = ({ title }) => (
  <AppBarMui
    style={{ background: 'linear-gradient(to left, rgb(0, 165, 146), rgb(70, 149, 165))', }}
    title={title}
    className="hebrew"
    iconElementLeft={ 
      <IconMenu
        iconButtonElement={<IconButton><NavigationMenu /></IconButton>}
        iconStyle={{color: 'rgba(255,255,255, 0.9'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <Link to="/"><MenuItem primaryText="ראשי" /></Link>
        <Link to="/AddUser"><MenuItem primaryText="הוספת משתמש" /></Link>
      </IconMenu>
    }
  >
  </AppBarMui>
);


AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
