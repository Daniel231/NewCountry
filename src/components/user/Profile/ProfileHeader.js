import React from 'react';
import PropTypes from 'prop-types';
import { ProfileAvatar as UserAvatar } from '../styledComponents/avatar';
import ExtendedDetails from './extendedDetails';
import Dialog from './dialog';

// styled components
import { Container, BasicDetailsContainer, InfoBlock, ExtendedDetailsContainer } from './styled/Containers';
import { Title, SubTitle } from './styled/Text';
import { Primary as Button } from './styled/Button';


const img = 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dialogOpen: false, };
    this.onDialogClose = this.onDialogClose.bind(this);
    this.onDialogOpen = this.onDialogOpen.bind(this);
  }

  onDialogClose() {
    this.setState({ dialogOpen: false, });
  }

  onDialogOpen() {
    this.setState({ dialogOpen: true, });
  }

  render() {
    const { userDetails, } = this.props;
    const { dialogOpen, } = this.state;
    return (
      <Container>
        <BasicDetailsContainer style={{ minWidth: '350px', }}>
          <UserAvatar src={img} />
          <InfoBlock>
            <div>
              <Title><span>{userDetails.name} | {userDetails.job}</span></Title>
              <SubTitle><span> {userDetails.unit} | {userDetails.team} </span></SubTitle>
              <SubTitle><span> {userDetails.jobDesc} </span></SubTitle>
            </div>
            <Button label="לפרופיל המלא" onClick={this.onDialogOpen} />
          </InfoBlock>
        </BasicDetailsContainer>
        <ExtendedDetailsContainer>
          <ExtendedDetails userDetails={userDetails} />
        </ExtendedDetailsContainer>
        <Dialog
          userDetails={userDetails}
          open={dialogOpen}
          onClose={this.onDialogClose}
        />
      </Container>
    );
  }
}

ProfileHeader.propTypes = {
  userDetails: PropTypes.object.isRequired
};


export default ProfileHeader;
