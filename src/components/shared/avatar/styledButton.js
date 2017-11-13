import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const Button = styled(FlatButton).attrs({
    rippleColor: 'blue'
    // style: props => ({
    //     borderBottomLeftRadius: '50%' ,
    //     borderBottomRightRadius: '50%',
    //     borderTopLeftRadius: '50%',
    //     borderTopRightRadius: '50%',
    //     zIndex: 0,
    //     height: `${props.size}px`,
    //     width: `${props.size}px`
    // })
})`
    border-radius: 50% !important;
    width: ${p => p.size}px !important;
    height: ${p=> p.size}px !important;
    zIndex: 0 !important;
    
`;

export default Button;