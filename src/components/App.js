import React, {PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './common/header.component';

//configure the theme to work with RTL
const uiTheme = getMuiTheme({
    isRtl: true
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={uiTheme} >
            <div>
                <Header title="הגינה של סלדג"/>
                <div>
                    Nitro The Jello
                </div>
            </div>
            </MuiThemeProvider>
        );
    } 
}

export default App;