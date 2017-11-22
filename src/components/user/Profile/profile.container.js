import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileComponent from './ProfileHeader';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
            <ProfileComponent userDetails={user} />
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(ProfileContainer);
