import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';


const UserAvatar = function (props) {
    const style = {position: "absolute",
    right: "2%",
    top: "5%",
    margin: 5};

    return (
      <div>
        <MuiThemeProvider>
            <Avatar
            src="http://www.material-ui.com/images/uxceo-128.jpg"
            size={170}
            style={style}
            />
        </MuiThemeProvider>
      </div>
    );
  };

export default UserAvatar;