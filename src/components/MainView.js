import React from 'react';
import TreeView from './common/TreeView';
import UsersTable from './UsersTable';
import {Classes} from '../styles/mainView';


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

class MainView extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={Classes.container}>
        <div className={Classes.sideList}>
          <TreeView data={groups}/>
        </div>
        <div className={Classes.mainView}>
          <div className={Classes.table}>
            <UsersTable data={tableData.data} 
              headerCols={tableData.headerCols} 
              dataFields={tableData.dataFields}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;