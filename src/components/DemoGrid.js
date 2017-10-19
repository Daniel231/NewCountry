import React from 'react';
import PropTypes from 'prop-types';
import GridContainer from './common/grid/GridContainer';
import GridRow from './common/grid/GridRow';
import GridTile from './common/grid/GridTile';



const img="https://vignette.wikia.nocookie.net/yugioh/images/7/74/RedEyesBDragon-OW.png/revision/latest/scale-to-width-down/185?cb=20140618033122";
const style = {width:'100%'};

const GridDemo = ({rtl, wrap, justifyContent, children}) => {
    return (
        <GridContainer>
            <GridRow>
                <GridTile><img style={style} src={img}/></GridTile>
                <GridTile><img style={style} src={img}/></GridTile>
                <GridTile><img style={style} src={img}/></GridTile>
                {/* <GridTile><div>dfgdgfdgdfgdfgdfgergerttertre</div></GridTile> */}
                
            </GridRow>
            <GridRow>
            <GridTile><img style={style} src={img}/></GridTile>
            <GridTile><img style={style} src={img}/></GridTile>
            </GridRow>
        </GridContainer>
    );
};


export default GridDemo;