import React, {PropTypes} from 'react';
import ProfHeader from "./ProfHeader.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/header.component';
import TreeView from './common/treeView.component';


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

const Sidebar = () => {
  return (
    <div>
      <MuiThemeProvider muiTheme={uiTheme} >
          <div className="hebrew">
              <div className="side-menu">
                <TreeView data={data} />
              </div>
          </div>
      </MuiThemeProvider>
    </div>
  );
};

class App extends React.Component {
    render() {
        return (
        <div>
          <MuiThemeProvider muiTheme={uiTheme} >
            <Header title="הגינה של סלדג" className="hebrew"/>
          </MuiThemeProvider>
          <ProfHeader/>
          <Sidebar/>
        </div>
        );
      }
}

export default App;