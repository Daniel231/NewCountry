import Dialog from 'material-ui/Dialog';
import styled from 'styled-components';
import { ProfileAvatar } from '../../../styledComponents/avatar';
import E from '../../extendedDetails';



const ProfileDialog = styled(Dialog).attrs({
    bodyStyle: {   
        backgroundColor: "rgb(228, 234, 234)", 
        paddingBottom: "0px", 
        overflowX:"hidden",
        
    },
    titleStyle: {
        backgroundColor: "rgb(228, 234, 234)",
        paddingBottom: "2px"
    },
    contentStyle: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "black",
        maxWidth: 'none', 
        borderRadius: '20px',
        width: 'fit-content',
        maxWidth: '70%'
        
    },
    actionsContainerStyle:{
        backgroundColor: "rgb(33, 163, 151)", 
        padding: "18px",
        display: 'flex'
    },
})`
& * {
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
    width: 108%;
    padding-top: 10px;
    /* padding-right: 26.6%; */
    margin-right: -3%;
    padding-bottom: 10px;
    margin-top: 10px;
    background-color: #D1DDDD;

`;


export default ProfileDialog;