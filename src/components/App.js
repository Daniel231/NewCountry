import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/AppBar';
import Style from "../styles/App.css";

import MainView from './views/MainView';

injectTapEventPlugin();

//configure the theme to work with RTL
const uiTheme = getMuiTheme({
  isRtl: true,
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={uiTheme}>
        <div style={{minHeight:'100vh'}} className={Style.hebrew}>
          <Header title="לנה"/>
          <MainView/>
        </div>
      </MuiThemeProvider>
    );
    
    // return (
    //   <MuiThemeProvider muiTheme={uiTheme}>
    //     <div style={{ height: '100vh' }} className={Style.hebrew}>
    //       <Header title="הגינה של סלדג" />
    //       <div className={Style.mainDiv}>
    //         <TopProfile />
    //         <TreeView data={groups} />
    //         <div style={{ width: "80%" }}>
    //           {/* <SortAndSearch/> */}
    //           <Grid users={tableData.users} onAvatarClick={(u)=>{console.log(u)}}/>
    //           {/* <Table {...tableData} /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </MuiThemeProvider>
    // );
  }
}


/**
 * only for now
 */




export default App;