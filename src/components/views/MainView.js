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
  width: ${props => (props.width ? props.width : '')}
`;

const ScreenDiv = styled.div`
  height: calc(100vh - 64px);
  background-color: #e3eae9;
`;

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: TABLE,
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
        <div>
          <Profile />
        </div>

        <InlineDiv width="15%"> <TreeList /> </InlineDiv>
        <InlineDiv style={{ width: '80%', marginRight: '2%', height: 'calc(100% - 195px)', }} >
          <SearchBar onChangeViewType={this.changeViewType} />
          <Divider />
          {childToRender}
        </InlineDiv>

      </ScreenDiv>
    );
  }
}

export default MainView;

// export default connect(mapStateToProps)(MainView);
