import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';


const UserAvatar = function (props) {
    const image = "https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg";

    return (
      <div>
        <MuiThemeProvider>
            <Avatar
            src= {image}
            size={props.size}
            style={props.style}
            />
        </MuiThemeProvider>
      </div>
    );
  };

export default UserAvatar;