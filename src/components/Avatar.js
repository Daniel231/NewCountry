import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';


const UserAvatar = function (props) {
    const style = {position: "relative",
    border: "3px solid rgb(145,182, 182)"};

    return (
      <div>
        <MuiThemeProvider>
            <Avatar
            src="https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg"
            size={170}
            style={style}
            />
        </MuiThemeProvider>
      </div>
    );
  };

export default UserAvatar;