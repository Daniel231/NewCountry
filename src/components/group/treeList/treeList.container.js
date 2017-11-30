import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './';
import {selectGroup} from '../group.actions';

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
        const { groups } = this.props;
        return (
            <List data={groups} onChange={this.onItemSelected} valueField="id"/>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectGroup}, dispatch);
}


function mapStateToProps(state) {
    return {
        groups: state.groups
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeListContainer);
