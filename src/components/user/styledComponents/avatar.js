import styled from 'styled-components';
import Avatar from '../../common/avatar/Avatar';

const StyledAvatar = styled(Avatar).attrs({
    badgeStyle: {
        backgroundColor:'#90B7B6'
    },
    innerStyle: {
        boxShadow: '0 0 10px 1px rgba(0,0,0,0.6)'        
    }
})``;

export default StyledAvatar;