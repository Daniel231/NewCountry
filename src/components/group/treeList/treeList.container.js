import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import List from './';

class TreeListContainer extends Component {
  constructor(props) {
    super(props);
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(event, index) {
    this.props.groupStore.selectGroup(index);
  }

  render() {
    return (
      <List data={this.props.groupStore.groupTree} valueField="id" 
        defaultSelected={this.props.selectedStore.id}
        onChange={this.onItemSelected}
      />
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
