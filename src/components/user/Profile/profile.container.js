import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { observer, inject } from 'mobx-react';
import ProfileComponent from './ProfileHeader';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.props.getMyUser();
    }
    
    render() {
        // const { user } = this.props.store.myUser;
        if(!this.props.userStore.myUser) {
            return (
                <div>LOADING ....</div>
            )
        }
        return (
            <ProfileComponent userDetails={this.props.userStore.myUser} />
        );
    }
}


export default observer(['userStore'], ProfileContainer);

