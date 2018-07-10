import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import List from './';

const NavContainer = styled.div`
display: flex;
flex-grow: 1;
direction: rtl;
`;

class TreeListContainer extends Component {
  constructor(props) {
    super(props);
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(event, index) {
    this.props.groupStore.selectGroup(index);
  }

  render() {
    if(this.props.groupStore.loading) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <NavContainer>
        <List data={this.props.groupStore.groupTree} valueField="id" 
          defaultSelected={this.props.selectedStore.id}
          onChange={this.onItemSelected}
        />
      </NavContainer>
    );
  }
}

export default inject(
  root => ({
    groupStore: root.store.groupStore,
    selectedStore: root.store.selectedGroupStore,
  })
)(observer(TreeListContainer));

// export default connect(mapStateToProps, mapDispatchToProps)(TreeListContainer);
