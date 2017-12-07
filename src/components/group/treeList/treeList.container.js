import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import List from './';

class TreeListContainer extends Component {
    constructor(props) {
        super(props);
        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onItemSelected(event, index){
        const {groups} = this.props;
        this.props.selectGroup(index);
    }

    render() {
        // const { groups } = this.props.groupStore.groupTree;
        return (
            <List data={this.props.groupStore.groupTree} valueField="id"/>
        );
    }
}

export default observer(['groupStore'], TreeListContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(TreeListContainer);
