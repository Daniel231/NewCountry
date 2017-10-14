import React, {PropTypes} from 'react';
import ProfHeader from "./ProfHeader.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/Header';
import TreeView from './common/TreeView';
import GridList from './common/AvatarGridList';
import Table from './UsersTable';
import MainView from './MainView';
import Style from "../styles/App.css";



injectTapEventPlugin();
//configure the theme to work with RTL
const uiTheme = getMuiTheme({
    isRtl: true
});



const TopProfile = () => {
  return (
    <div className={Style.profile}>
      <ProfHeader/>
    </div>
  );
};

// const MainView = () => {
//   return (
//     <div className= {Style.main_view}>
//       <div style={{marginRight:"2%",marginTop:"2%"}}><Table data={[{name:"אלעד",role:"בוס"},{name:"יונתן",role:"עבד"}]} headerCols={["שם","תפקיד"]} dataFields={["name","role"]} /></div>
      
//     </div>
//   )
// }

class App extends React.Component {
    render() {
        return (
          
            <MuiThemeProvider muiTheme={uiTheme}>
            <div className={Style.hebrew}>
              <Header title="הגינה של סלדג"/>
              <div className={Style.mainDiv}>
               <TopProfile/>
               <TreeView data={groups}/>
               {/* <Table {...tableData}/>  */}
               <GridList data={groups} titleField={'title'}/>
                
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


/**
 * only for now
 */
let groups = [
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


let tableData = {
  data: [{name:"אלעד",role:"בוס"},{name:"יונתן",role:"עבד"}],
  headerCols: ["שם","תפקיד"],
  dataFields: ["name","role"]

}



export default App;