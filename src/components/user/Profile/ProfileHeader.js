import React, { PropTypes } from 'react';
import { ProfileAvatar as UserAvatar } from '../styledComponents/avatar';
import ExtendedDetails from './ExtendedDetails';
//styled components
import { UserDetails, BasicInfo, BasicInfoText, DetailBlock } from './styled/Containers';
import { Title, SubTitle } from './styled/Text';
import { Primary as Button} from './styled/Button';


const img = 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg';

const ProfileHeader = ({userDetails}) => {
    return (
        <UserDetails>
            <BasicInfo>
                <UserAvatar src={img}/>
                <DetailBlock>
                    <BasicInfoText>
                        <Title><span>{userDetails.name} | {userDetails.job}</span></Title>
                        <SubTitle><span> {userDetails.unit} | {userDetails.team} </span></SubTitle>
                        <SubTitle><span> {userDetails.jobDesc} </span></SubTitle>
                    </BasicInfoText>
                    <Button label="לפרופיל המלא"/>
                </DetailBlock>
            </BasicInfo>
            <ExtendedDetails userDetails={userDetails}/>
        </UserDetails>
    );
};

export default ProfileHeader;