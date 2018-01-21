import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import { ProfileAvatar } from '../../../styledComponents/avatar';
import E from '../../extendedDetails';


const ProfileDialog = styled(Dialog).attrs({
  bodyStyle: {
    backgroundColor: '#E3E9E9',
    paddingBottom: '0px',
    overflowY: 'inherit',
    // width: '60vh',
    // paddingBottom: '0px',
    // overflowX: 'hidden',
  },
  titleStyle: {
    backgroundColor: '#E3E9E9',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    fontWeight: 600,
    fontSize: 26,
    paddingBottom: '10px',
    // paddingBottom: '2px',
  },
  contentStyle: {
    // backgroundColor: '#E3E9E9',
    // display: 'flex',
    // justifyContent: 'center',
    // borderRadius: '20px',
    // width: 'fit-content',
    // maxWidth: '70%',
  },
  actionsContainerStyle: {
    backgroundColor: '#00A297',
    padding: '18px',
    display: 'flex',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
})`
& > div > div {
    direction:rtl;
}
& > div > div > div {
  direction:rtl;
  border-radius: 10px !important;
}
`;

export const Avatar = styled(ProfileAvatar).attrs({
  size: 150,
  style: {
    position: 'absolute',
    right: 'calc(50% - 75px)',
    bottom: '86%',
  },
})``;

export const ExtendedDetails = styled(E)`
    // background-color: #D0DCDC;
    // width: calc(100% + 48px);
    // margin-right: -24px;
    // padding-bottom: 24px;

`;

export const MoreInfoDiv = styled.div`
  background-color: #D0DCDC;
  width: calc(100% + 48px);
  margin-right: -24px;
  padding-bottom: 24px;
`;

export default ProfileDialog;
