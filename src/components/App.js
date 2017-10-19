import React, {PropTypes} from 'react';
import ProfHeader from "./ProfHeader.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/Header';
import TreeView from './common/TreeView';
import AvatarGridList from './common/AvatarGridList';
import Table from './UserTable';
import MainView from './MainView';
import Demo from './DemoGrid';
import Style from "../styles/App.css";

import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import CakeIcon from 'material-ui/svg-icons/social/cake';



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
               {/* <Table users={tableData.data}/>  */}
               {/* <AvatarGridList data={tableData.data} titleField={'name'} iconFunction = {getUserIcon}/> */}
               <Demo/>
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


function getUserIcon(user) {
  if(user.isAdmin) {
    return CakeIcon;
  } else if (user.isGroupAdmin) {
    return StarIcon;
  }
  return null;
}


let tableData = {
  data: [{name:"אלעד",role:"בוס", isGroupAdmin:true},{name:"יונתן",role:"עבד",isAdmin:false}],
  headerCols: ["שם","תפקיד"],
  dataFields: ["name","role"]

}



export default App;