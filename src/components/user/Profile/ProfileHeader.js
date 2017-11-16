import React, { PropTypes } from 'react';
import { ProfileAvatar as UserAvatar } from '../styledComponents/avatar';
import ExtendedDetails from './ExtendedDetails';
import Dialog from './dialog';
//styled components
import { UserDetails, BasicInfo, BasicInfoText, DetailBlock } from './styled/Containers';
import { Title, SubTitle } from './styled/Text';
import { Primary as Button} from './styled/Button';


const img = 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dialogOpen: false};
        this.onDialogClose = this.onDialogClose.bind(this);
        this.onDialogOpen = this.onDialogOpen.bind(this);
    }

    onDialogClose() {
        this.setState({dialogOpen: false});
    }

    onDialogOpen() {
        this.setState({dialogOpen: true});
    }

    render() {
        const {userDetails} = this.props;
        const {dialogOpen }= this.state
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
                        <Button label="לפרופיל המלא" onClick={this.onDialogOpen}/>
                    </DetailBlock>
                </BasicInfo>
                <ExtendedDetails userDetails={userDetails}/>
                <Dialog 
                    userDetails={userDetails} 
                    open = {dialogOpen}
                    onClose = {this.onDialogClose}
                />
            </UserDetails>
        );
    }
}


export default ProfileHeader;