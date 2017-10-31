import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from './common/grid/GridContainer';
import GridRow from './common/grid/GridRow';
import GridTile from './common/grid/GridTile';
import Avatar from './user/UserAvatar';
import ReactGridLayout from 'react-grid-layout';

import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import {white, green100} from 'material-ui/styles/colors';

import CakeIcon from 'material-ui/svg-icons/social/cake';

// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';

// import '../../node_modules/react-grid-layout/css/styles.css';
// import '../../node_modules/react-resizable/css/styles.css';

import '../styles/grid/styles1.css';
import '../styles/grid/styles2.css';

// const Grid = WidthProvider(RGL);


const img="https://vignette.wikia.nocookie.net/yugioh/images/7/74/RedEyesBDragon-OW.png/revision/latest/scale-to-width-down/185?cb=20140618033122";
const style = {margin:'30px', maxWidth:'300px', minWidth:'100px'};

const elad = {name:"אלעד",role:"בוס",isAdmin:true};
const user = {name:"יונתן",role:" מאודעבד",isAdmin:false};

const GridDemo = ({rtl, wrap, justifyContent, children}) => {
    return (
      
        // <RGL width={500} layout={layout} cols={3} className="layout">
        // <div key='a'><Avatar src={img} /></div> 
        // <div key='b'><Avatar src={img} /></div> 
        // <div key='c'><Avatar src={img} /></div> 
        // <div key='d'><Avatar src={img} /></div> 
        // <div key='e'><Avatar src={img} /></div> 

        // </RGL>
    //     <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
    //     <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
    //     <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
    //     <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
    //   </ReactGridLayout>
        
        // <GridContainer>
        //     <GridRow>
        //         <GridTile><Avatar badgeContent={<StarIcon color={white}/>} style={style} size={100} src={img} onClick={()=>{}}/></GridTile>
        //         <GridTile><Avatar style={style} size={100} src={img} onClick={()=>{}}/></GridTile>
        //         <GridTile><Avatar style={style} size={100} src={img}/></GridTile>
        //         <GridTile><Avatar style={style} size={100} src={img}/></GridTile>
        //         <GridTile><Avatar style={style} size={100} src={img}/></GridTile>
        //         <GridTile><Avatar style={style} size={100} src={img}/></GridTile>
        //         {/* <GridTile><div>dfgdgfdgdfgdfgdfgergerttertre</div></GridTile> */}
                
        //     </GridRow>
        //     <GridRow>
        //     <GridTile><Avatar style={style} size={100} src={img}/></GridTile>
        //     <GridTile><Avatar style={style} size={100} src={img}/></GridTile>
        //     </GridRow>
        // </GridContainer>

        <div >
            <GridContainer>
            <GridRow wrap>
            <GridTile><Avatar user={elad}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>
            <GridTile><Avatar user={user}/></GridTile>


            {/* <GridTile><div>dfgdgfdgdfgdfgdfgergerttertre</div></GridTile> */}
            
        </GridRow>
        </GridContainer>
        </div>
    );
};


export default GridDemo;