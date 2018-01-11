import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/AppBar';

import MainView from './views/MainView';

injectTapEventPlugin();

// configure the theme to work with RTL
const uiTheme = getMuiTheme({
  isRtl: true,
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
