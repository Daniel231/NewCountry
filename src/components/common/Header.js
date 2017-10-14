import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const Header = ({title}) => {
  return (
    <AppBar
      title={title}
      className="hebrew"
    />
  );
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;