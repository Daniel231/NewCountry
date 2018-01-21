import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  cyan500, cyan700,
  teal500,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import Header from './common/AppBar';

import MainView from './views/MainView';
// #00a197

injectTapEventPlugin();

// configure the theme to work with RTL
const uiTheme = getMuiTheme({
  isRtl: true,
  palette: {
    primary1Color: teal500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: grey300,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={uiTheme}>
    <div>
      <Header title="לנה" />
      <MainView style={{ display: 'flex', }} />
    </div>
  </MuiThemeProvider>
);

export default App;
