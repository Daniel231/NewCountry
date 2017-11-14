import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import { ProfileAvatar as UserAvatar } from '../styledComponents/avatar';


const ProfileDialog = ({userDetails, isOpen, onClose}) => {
    return (
        <Dialog
            title={userDetails.name + " | " + userDetails.job}
        ></Dialog>
    );
}