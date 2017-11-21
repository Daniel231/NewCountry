import React from 'react';
import styled from 'styled-components';
import {GridContainer, GridRow, GridTile} from '../shared/grid'
import {UsersGrid, ProfileHeader, UsersTable} from '../user';
import SideMenu from '../group/treeList';

import {connect} from 'react-redux';

const Container = styled(GridContainer)`
    min-height: 100%;
`;

const ScreenRow = styled(GridRow)`
    flex-grow: 1
`;

const Tile = styled(GridTile)`
  overflow: auto;
  max-height: 100vh;
`;

const InlineDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${props => props.width ? props.width : ''}
`;

const ScreenDiv = styled.div`
  height: calc(100vh - 64px);
`;

const MainView = ({user}) => {
    return (
      <ScreenDiv>
        <div>
          <ProfileHeader userDetails={userDetails}/>
        </div>
      
        <InlineDiv width="16%"><SideMenu data={groups}/></InlineDiv>
        <InlineDiv width="80%"><UsersGrid users={tableData.users} onAvatarClick={(u)=>{console.log(u)}}/></InlineDiv>
        
      </ScreenDiv>
      
        // <Container>
        //     <GridRow>
        //         {/* <GridTile basis={'100%'}><ProfileHeader userDetails={userDetails}/></GridTile> */}
        //         <div style={{width:'100px'}}>{user.name}</div>
        //     </GridRow>
        //     <ScreenRow>
        //         <GridTile basis={'16%'}><SideMenu data={groups}/></GridTile>
        //         <Tile basis={'80%'}><UsersGrid users={tableData.users} onAvatarClick={(u)=>{console.log(u)}}/></Tile>
        //         {/* <Tile basis={'84%'}><UsersTable {...tableData}/></Tile> */}
        //     </ScreenRow>
        // </Container>
    );
}

function mapStateToProps(state) {
  return {
    user: state
  };
}


export default connect(mapStateToProps)(MainView);


let userDetails = {
  fullJobDesc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיא" +
   "- פוסיליס קוויס, אקווזמן קוואזי במר מודוף." +
   "אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בל" +
   "- וענוף לורם איפסום דולור סיט אמט," +
   "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח." +
   "עמחליף נולום ארווס סאפיאן - פוסיליס קוויס," +
   "אקווזמן קולהע צופעט למרקוח איבן איף," +
   "ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק." +
   "תצטנפל בלינדו למרקל אס לכימפו, דול," +
   "צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש." +
   "קוויז דומור ליאמום בלינך רוגצה. לפמעט",
  name: "דניאל עזרא",
  job: "מעצב",
  unit: "כלשהי",
  team: "עיצוב",
  jobDesc: "אזרח חופשי ומאושר",
  id: 6861599,
  passport: 6861599,
  rank: "אזרח!!",
  clasification: "מסווג",
  phone: "051111",
  mobile: "052222",
  mail: "gamba@gamba.com",
  address: "באר שבע",
  groups: ["הפרלמנט", "פאור ריינג'רס"]
}


let groups = [
    {
      title: "אלעד",
      children: [
        {
          title: "הבוס"
        },
        {
          title: "העייף",
          children: [
            { title: "מאוד" }
          ]
        }
      ]
    },
    {
      title: "יונתן",
      children: [
        {
          title: "האפורי"
        }
      ]
    },
    {
      title: "יונתן",
      children: [
        {
          title: "האפורי"
        }
      ]
    },
    {
      title: "יונתן",
      children: [
        {
          title: "האפורי"
        }
      ]
    },
    {
      title: "יונתן",
      children: [
        {
          title: "האפורי"
        }
      ]
    },
    {
      title: "יונתן",
      children: [
        {
          title: "האפורי"
        }
      ]
    }
  ];
  
  let tableData = {
    users: [
      { name: "אלעד", role: "טיפש", isGroupAdmin: true }, { name: "יונתן", role: "חכם", isAdmin: false },
      { name: "יונתן", role: "חכם", isAdmin: false }, { name: "יונתן", role: "חכם", isAdmin: false },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true },
      { name: "יונתן", role: "היררכיקה", isAdmin: false }, { name: "יונתן", role: "היררכיקה", isAdmin: true }
    ],
    headerCols: ["שם", "תפקיד"],
    dataFields: ["name", "role"]
  
  }