import React from 'react';
import styled from 'styled-components';
import { UsersGrid, Profile, SearchBar } from '../user';
import TreeList from '../group/treeList/treeList.container';
import { tableData } from './mock';
import Divider from 'material-ui/Divider';


const InlineDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  width: ${props => (props.width ? props.width : '')}
`;

const ScreenDiv = styled.div`
  height: calc(100vh - 64px);
`;

const MainView = () => (
  <ScreenDiv>
    <div>
      <Profile />
    </div>

    <InlineDiv width="16%"> <TreeList /> </InlineDiv>
    <InlineDiv width="80%">
      <SearchBar />
      <Divider />
      <UsersGrid onAvatarClick={(u) => console.log(u)} />
    </InlineDiv>

  </ScreenDiv>
);

export default MainView;

// export default connect(mapStateToProps)(MainView);
