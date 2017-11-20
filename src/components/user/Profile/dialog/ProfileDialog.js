import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { Avatar, ExtendedDetails } from './styled/Dialog';
import Dialog2 from 'material-ui/Dialog';
import { ActionText } from './styled/Text';

// import ExtendedDetails from '../ExtendedDetails';


const img = 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg';

const ProfileDialog = ({ userDetails, open, onClose }) => {
    const Actions = [
        <span key="a">
            <ActionText>הקבוצות שלי: </ActionText>
            <ActionText bold>{
                userDetails.groups && userDetails.groups.reduce((prev, cur) =>
                    (prev ? `${prev} | ${cur}` : `${cur}`), '')}
            </ActionText>
        </span>
    ];
    return (
       
            <Dialog style={{borderRaduis:'20px'}}
                title={userDetails.name + " | " + userDetails.job}
                actions={Actions}
                open={open}
                onRequestClose={onClose}
            >
                <Avatar src={img} />
                <div>
                    <span> {userDetails.unit + " | " + userDetails.team}</span>
                </div>
                <hr />
                <div>
                    {userDetails.fullJobDesc}
                </div>
                <ExtendedDetails userDetails={userDetails} />
            </Dialog>
        
    );
};

ProfileDialog.propTypes = {
    userDetails: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default ProfileDialog;