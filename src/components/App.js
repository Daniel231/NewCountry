import React, {PropTypes} from 'react';
import ProfHeader from "./ProfHeader.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/header.component';
import TreeView from './common/treeView.component';
import Style from "../styles/App.css";



injectTapEventPlugin();
//configure the theme to work with RTL
const uiTheme = getMuiTheme({
    isRtl: true
});

let data = [
    {
      title: "אלעד",
      children: [
        {
          title: "הבוס"
        },
        {
          title:"העייף",
          children: [
            {title:"מאוד"}
          ]
        }
      ]
    },
    {
      title:"יונתן",
      children:[
        {
          title: "האפורי"
        }
      ]
    },
    {
      title:"יונתן",
      children:[
        {
          title: "האפורי"
        }
      ]
    },
    {
      title:"יונתן",
      children:[
        {
          title: "האפורי"
        }
      ]
    },
    {
      title:"יונתן",
      children:[
        {
          title: "האפורי"
        }
      ]
    },
    {
      title:"יונתן",
      children:[
        {
          title: "האפורי"
        }
      ]
    }
  ];

const MainView = () => {
  return (
    <div className={Style.main_view}>
      <ProfHeader/>
    </div>
  );
}

class App extends React.Component {
    render() {
        return (
         
            <MuiThemeProvider muiTheme={uiTheme}>
            <div className={Style.hebrew}>
              <Header title="הגינה של סלדג"/>
              <div>
                <MainView/>
                <TreeView data={data}/>
              </div>
            </div>
            </MuiThemeProvider>
          




        // <div className={Style.hebrew}>
        //   <MuiThemeProvider muiTheme={uiTheme} >
        //     <Header title="הגינה של סלדג" className="hebrew"/>
        //   </MuiThemeProvider>
        //   <ProfHeader/>
        //   <Sidebar/>
        // </div>
        );
      }
}

export default App;