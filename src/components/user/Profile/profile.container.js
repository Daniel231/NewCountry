import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMyUser } from '../user.actions';
import ProfileComponent from './ProfileHeader';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getMyUser();
    }
    
    render() {
        const { user } = this.props;
        return (
            <ProfileComponent userDetails={user} />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getMyUser}, dispatch);
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
