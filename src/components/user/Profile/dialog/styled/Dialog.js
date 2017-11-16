import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import { ProfileAvatar } from '../../../styledComponents/avatar';
import E from '../../ExtendedDetails';



const ProfileDialog = styled(Dialog).attrs({
    bodyStyle: {   
        backgroundColor: "rgb(228, 234, 234)", 
        // backgroundColor: "rgb(228, 255, 234)", 
        paddingBottom: "0px", 
        overflowX:"hidden",
        // direction: 'rtl'
    },
    titleStyle: {
        backgroundColor: "rgb(228, 234, 234)",
        paddingBottom: "2px"
    },
    contentStyle: {
        display: 'flex',
        width: '80%',
        backgroundColor: "black",
        maxWidth: 'none',
        // direction: 'rtl'
    },
    actionsContainerStyle:{
        backgroundColor: "rgb(33, 163, 151)", 
        padding: "18px"
    },
    style: {
        // borderBottomLeftRadius: '20%',
        // borderBottomRightRadius: '20%',
        // borderTopLeftRadius: '20%',
        // borderTopRightRadius: '20%',
        borderRadius: '20px'
        
        // width: '70%'
        // direction: 'rtl'
    }
})`
& div {
    borderRadius: 20px;
    direction:rtl;
}
`;

export const Avatar = styled(ProfileAvatar).attrs({
    size: 150,
    style: {
        position: "absolute",
        right: "45%",
        bottom: "86%"
        // flex
    }
})``;

export const ExtendedDetails = styled(E)`
    width: 103%;
    padding-top: 15px;
    /* padding-right: 26.6%; */
    margin-right: -3%;
    padding-bottom: 20px;
`;


export default ProfileDialog;