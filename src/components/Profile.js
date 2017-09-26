import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    render() {
        function handleOpen() {
            this.setState({open: true});
        }
        
        function handleClose() {
            this.setState({open: false});
        }
        
        const actions = [
            <RaisedButton
              label="Cancel"
              primary={true}
              onClick={handleClose.bind(this)}
            />,
            <RaisedButton
              label="Submit"
              primary={true}
              disabled={true}
              onClick={handleClose.bind(this)}
            />
          ];

          const customContentStyle = {
            width: '80%',
            backgroundColor: "black",
            maxWidth: 'none'
          };

        return (
            <div style={{position: "relative", bottom: "6%"}}>
                <MuiThemeProvider>
                <RaisedButton 
                label="לפרופיל המלא"
                buttonStyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25}}
                labelColor={'#FFFFFF'}
                backgroundColor={"rgb(36,156,158)"}
                onClick={handleOpen.bind(this)}/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                <Dialog
                title="Dialog With Actions"
                actions={actions}
                open={this.state.open}
                bodyStyle={{borderRadius: "100px"}}
                contentStyle={customContentStyle}
                >
                Only actions can close this dialog.
                </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}