import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { observer } from 'mobx-react';
import { getMyUser } from '../user.actions';
import ProfileComponent from './ProfileHeader';

@observer
class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getMyUser();
    }
    
    render() {
        // const { user } = this.props.store.myUser;
        return (
            <ProfileComponent userDetails={this.props.store.myUser} />
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

export default ProfileContainer;

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
