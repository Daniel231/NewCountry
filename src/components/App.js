import React, {PropTypes} from 'react';
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

// let items = [
//     {  
//         "depth":0,
//         "children":[],
//         "_shouldRender":false
//     },
//     {
//         "depth": 1,
//         "children": [2,4],
//         "title": "emglis",
//         "parentIndex": 0
//     },
//     {
//         "depth": 2,
//         "children": [3],
//         "title": "בצפון",
//         "parentIndex": 1
//     },
//     {
//         "depth": 3,
//         "title": "דפוק",
//         "parentIndex": 2
//     },
//     {
//         "depth": 2,
//         "title": "בעזעזל",
//         "parentIndex": 1
//     },
//     {
//         "depth": 1,
//         "title": "נו כבר",
//         "parentIndex": 0
//     }
// ];


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

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={uiTheme} >
            <div className="hebrew">
                <Header title="הגינה של סלדג"/>
                <div className="side-menu">
                  <TreeView data={data} />
                </div>
            </div>
            </MuiThemeProvider>
        );
    } 
}

export default App;