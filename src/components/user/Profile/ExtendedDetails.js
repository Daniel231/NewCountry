import React, { PropTypes } from 'react';
import {ExtendedUserDetails, DetailLeftSide, 
    DetailRightSide, Line as L, Span as S} from './styled/Containers';
import {DetailField as Field} from './styled/Text';

const ExtendedDetails = ({userDetails}) => {
    return (
        <ExtendedUserDetails>
            <DetailRightSide>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
            </DetailRightSide>
            <DetailLeftSide>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
                <L><Field>מס' אישי</Field><S>{userDetails.id}</S></L>
            </DetailLeftSide>
        </ExtendedUserDetails>
    );
};

export default ExtendedDetails;