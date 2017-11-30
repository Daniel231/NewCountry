import React from 'react';
import PropTypes from 'prop-types';
import AppBarMui from 'material-ui/AppBar';

const AppBar = ({ title }) => (
  <AppBarMui
    title={title}
    className="hebrew"
  />
);


AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
