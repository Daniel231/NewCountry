import React from 'react';
import styled from 'styled-components';
import {GridContainer, GridRow, GridTile} from '../shared/grid'
import {UsersGrid, ProfileHeader, UsersTable} from '../user';
import SideMenu from '../group/treeList';


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

const MainView = () => {
    return (
        <Container>
            <GridRow>
                <GridTile basis={'100%'}><ProfileHeader userDetails={userDetails}/></GridTile>
            </GridRow>
            <ScreenRow>
                <GridTile basis={'16%'}><SideMenu data={groups}/></GridTile>
                <Tile basis={'80%'}><UsersGrid users={tableData.users} onAvatarClick={(u)=>{console.log(u)}}/></Tile>
                {/* <Tile basis={'84%'}><UsersTable {...tableData}/></Tile> */}
            </ScreenRow>
        </Container>
    );
}

export default MainView;


let userDetails = {
  name: "דניאל עזרא",
  job: "משוחרר",
  unit: "אזרחות",
  team: "אזרחי",
  jobDesc: "אזרח חופשי ומאושר",
  id: 6861599,
  passport: 6861599,
  rank: "אזרח!!",
  clasification: "מסווג טילים",
  phone: "051111 ואין שם אף אחד",
  mobile: "052222",
  mail: "gamba@gamba.com",
  address: "באר שבע עיר הפשע",
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