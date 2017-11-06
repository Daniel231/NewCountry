import React, {PropTypes} from 'react';
import ProfHeader from "./user/ProfHeader";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './common/Header';
import TreeView from './treeList/TreeView';
import Table from './user/UsersTable';
import Grid from './user/UsersGrid';
import Style from "../styles/App.css";
import SortAndSearch from './SortAndSearch';

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


class App extends React.Component {
    render() {
        return (
          
            <MuiThemeProvider muiTheme={uiTheme}>
            <div style={{height:'100vh'}} className={Style.hebrew}>
              <Header title="הגינה של סלדג"/>
              <div  className={Style.mainDiv}>
               <TopProfile/>
               <TreeView data={groups}/>
               <div style={{width:"80%"}}>
               {/* <SortAndSearch/> */}
               <Grid users={tableData.users} onAvatarClick={(u)=>{console.log(u)}}/>
               {/* <Table {...tableData}/>  */}
               </div>
               
               {/* <AvatarGridList data={tableData.data} titleField={'name'} iconFunction = {getUserIcon}/> */}
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
  users: [
    {name:"אלעד",role:"בוס", isGroupAdmin:true},{name:"יונתן",role:"עבד",isAdmin:false},
    {name:"יונתן",role:"עבד",isAdmin:false},{name:"יונתן",role:"עבד",isAdmin:false},
    {name:"יונתן",role:"עבד",isAdmin:false},{name:"יונתן",role:"עבד",isAdmin:true}
  ],
  headerCols: ["שם","תפקיד"],
  dataFields: ["name","role"]

}



export default App;