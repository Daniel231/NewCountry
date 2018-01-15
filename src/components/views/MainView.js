import React from 'react';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import { UsersGrid, UsersTable, Profile, SearchBar } from '../user';
import SideNav from '../group/sideNav';
import { tableData } from './mock';

const TABLE = 1;
const GRID = 2;

// height: calc(100vh - 260px);

const MainDiv = styled.div`
  width: 80%;
  margin-left: 3%;
  padding-right: 33px;
  min-width: 666px;
  display: flex;
  flex-direction: column;
`;

// height: calc(100vh - 64px);

const ScreenDiv = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  background-color: #e3eae9;
`;

// height: calc(100vh - 256px);

const ToName = styled.div`
  display: flex;
  flex-grow: 1;
`;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: GRID,
    };
    this.changeViewType = this.changeViewType.bind(this);
  }

  changeViewType (viewType) {
    return () => this.setState({ viewType, });
  }

  render() {
    const childToRender = this.state.viewType === TABLE ? <UsersTable headerCols={tableData.headerCols} dataFields={tableData.dataFields} users={tableData.users} /> : <UsersGrid />;
    return (
      <ScreenDiv>
        <Profile style={{ height: '200px', flexShrink: '0', }} />
        <ToName>
          <SideNav />
          <MainDiv >
            <SearchBar onChangeViewType={this.changeViewType} />
            <Divider style={{ height: '2px', backgroundColor: 'rgb(198, 207, 208)', }} />
            {childToRender}
          </MainDiv>
        </ToName>
      </ScreenDiv>
    );
  }
}

export default MainView;

// export default connect(mapStateToProps)(MainView);
