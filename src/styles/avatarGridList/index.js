import classes from './classes.css';

const styles = {
    container: {
        width:'80%'
    },
    badgeContainer: {
        padding:0
    },
    badge: {
        top:'70%',
        right:'-4%',
        backgroundColor:'#90B7B6',
        width: '30px',
        height: '30px',
        zIndex:2
    },
    avatarContainer: {
        display:'flex',
        justifyContent:'center',
    },
    avatar: {
        maxWidth:'100px',
        maxHeight:'100px',
        width:'100%',
        height:'100%'
    },
    avatarActionButton: {
        backgroundColor:'transparent', 
        zDepth: 0,
        style: {
            maxWidth:'100px',
            maxHeight:'100px'
        }
    },
    gridTile: {
        marginTop:'10px'   
    },
    mainIcon: {
        height: '100%',
        width: '100%'
    },
    titleDiv: {
        textAlign:'center',
        width:'100%',
        fontWeight: 600,
        fontSize: '14px',
        paddingTop: '10px'
    }

};

export const Styles = styles;
export const Classes = classes;