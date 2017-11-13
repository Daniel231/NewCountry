import styled from 'styled-components';
import Avatar from '../../shared/avatar';

const StyledAvatar = styled(Avatar).attrs({
    badgeStyle: {
        backgroundColor:'#90B7B6'
    },
    innerStyle: {
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.6)'        
    }
})``;

const profileAvatar = styled(StyledAvatar).attrs({
    innerStyle: props => Object.assign({}, props.innerStyle, 
        {
            border: '3px solid rgb(145,182, 182)', 
            position: 'relative'
        })
})``;

const Small = styled(StyledAvatar).attrs({
    size: 35
})``;

export const smallAvatar = Small;
export const ProfileAvatar = profileAvatar;
export default StyledAvatar;