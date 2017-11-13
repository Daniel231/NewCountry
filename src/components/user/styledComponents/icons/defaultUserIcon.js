import styled from 'styled-components';
import Person from 'material-ui/svg-icons/social/person';
import {white, green100} from 'material-ui/styles/colors';

const defaultUserIcon = styled(Person).attrs({
    color: white,
    style: p => ({
        width: p.size || '100%',
        height: p.size || '100%'
    })
})`
    background-color: #9dc7c6;
    border-radius: 50%;`;

export default defaultUserIcon;
