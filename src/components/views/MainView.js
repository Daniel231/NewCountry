import React from 'react';
import styled from 'styled-components';
import { UsersGrid, UsersTable, Profile, SearchBar } from '../user';
import TreeList from '../group/treeList/treeList.container';
import { tableData } from './mock';
import Divider from 'material-ui/Divider';

const TABLE = 1;
const GRID = 2;

const InlineDiv = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 15%;
  position: absolute;
  width: ${props => (props.width ? props.width : '')};
`;

const OtherDiv = styled.div`
  width: 80%;
  float: right;
  height: calc(100vh - 260px);
  margin-left: 3%;
  margin-right: calc(15%);
  padding-right: 33px;
  min-width: 666px;
`;

const ScreenDiv = styled.div`
  height: calc(100vh - 64px);
  background-color: #e3eae9;
`;

const ToName = styled.div`
  height: calc(100vh - 256px);
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
        <Profile />

        <ToName>
          <InlineDiv width="15%"> <TreeList /> </InlineDiv>
          <OtherDiv >
            <SearchBar onChangeViewType={this.changeViewType} />
            <Divider style={{ height: '2px', backgroundColor: 'rgb(198, 207, 208)', }} />
            {childToRender}
          </OtherDiv>
        </ToName>

      </ScreenDiv>
    );
  }
}

export default MainView;

// export default connect(mapStateToProps)(MainView);
