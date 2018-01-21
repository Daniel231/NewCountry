import React from 'react';
import PropTypes from 'prop-types';
import AppBarMui from 'material-ui/AppBar';

const AppBar = ({ title }) => (
  <AppBarMui
    style={{ background: 'linear-gradient(to left, rgb(0, 165, 146), rgb(70, 149, 165))', }}
    title={title}
    className="hebrew"
  />
);


AppBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppBar;
