import React, {PropTypes} from 'react';
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