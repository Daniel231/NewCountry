import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Profile = function (props) {
    return (
        <div>
            <MuiThemeProvider>
            <RaisedButton 
            label="לפרופיל המלא"
            buttonStyle={{ borderRadius: 25 }}
            style={{ borderRadius: 25 }}
            labelColor={'#FFFFFF'}
            backgroundColor={"rgb(36,156,158)"}/>
            </MuiThemeProvider>
        </div>
    )
}

export default Profile;