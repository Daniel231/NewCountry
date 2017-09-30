import classes from './classes.css';

const styles = {
    selectedItem: {
        backgroundColor:'#009688', 
        color: '#FFFFFF'
    },
    listItem: {
        // width: '100%',
        // height: '38px',
        // paddingRight: '18px',
        // paddingTop: '8px',
        backgroundColor: '#FAFCFB',
        borderBottom: 'solid 1px #CCD1D5',
        fontSize: '14px',
        color: '#1F3A41',
        fontWeight: '600',
        padding: 0 
    },
    nestedList: {
        padding: 0
        // backgroundColor: '#D1DDDD',
        // fontWeight: '600',
        // // borderBottom: 'solid 1px #CCD1D5',
        // fontSize: '14px'        
    },
    openItem: {
        padding: 0,
        backgroundColor: '#D1DDDD',
        fontWeight: '600',
        // borderBottom: 'solid 1px #CCD1D5',
        fontSize: '14px'        
    }
};

export const Styles = styles;
export const Classes = classes;