import React, { PropTypes } from 'react';
import Dialog, { Avatar, ExtendedDetails } from './styled/Dialog';
import { ActionText } from './styled/Text';

// import ExtendedDetails from '../ExtendedDetails';


const img = 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg';

const ProfileDialog = ({ userDetails, open, onClose }) => {
    const Actions = [
        <span>
            <ActionText>הקבוצות שלי: </ActionText>
            <ActionText bold>{
                userDetails.groups && userDetails.groups.reduce((prev, cur) =>
                    (prev ? `${prev} | ${cur}` : `${cur}`), '')}
            </ActionText>
        </span>
    ];
    return (
        <div style={{float:'right'}}>
            <Dialog
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
        </div>
    );
};

export default ProfileDialog;