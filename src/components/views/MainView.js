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
  flex-direction: column;
  vertical-align: top;
  width: 250px;
  box-shadow: -1px 2px 5px 0px #888888;  
  width: ${props => (props.width ? props.width : '')};
  display: flex;
  flex-shrink: 0;
`;

// height: calc(100vh - 260px);

const OtherDiv = styled.div`
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

const TreeHeader = styled.div`
height: auto;
box-shadow: 0px 2px 5px -4px black;
z-index: 1;
`;

const Header = styled.p`
text-align: center;
font-weight: 600;
font-size: 35px;
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
          <InlineDiv>
            <TreeHeader>
              <Header> עץ ארגוני </Header>
            </TreeHeader>
            <TreeList style={{ flexGrow: '1', }} />
          </InlineDiv>
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
