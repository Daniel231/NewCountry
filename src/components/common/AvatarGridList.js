import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import DefaultUserIcon from 'material-ui/svg-icons/social/person';
import {Classes} from '../../styles/avatarGridList';
import SortAndSearch from '../SortAndSearch';

const baseStyles = {
  avatarDiv: {
    display:'flex',
    justifyContent:'center'
  },
  avatar: {
    size: 80
  },
  titleDiv: {
    textAlign:'center',
    width:'100%'
  },
  gridTile: {
    marginTop:'10px'
  }
}


function internalOnClick(value, cb){
 if(cb){
   cb(value);
 }
}

const AvatarGridList = ({data, valueField, titleField, cols, onClick}) => (
  <div className={Classes.container}>
    <SortAndSearch/>
    <GridList  cols={cols} cellHeight={'auto'}>
      {data.map(item => (
        <GridTile
          onClick={internalOnClick.bind(null,valueField && item[valueField]? 
            item[valueField]: null, onClick)}
          style = {baseStyles.gridTile}
          key={valueField && item[valueField] ? item[valueField]: shortid.generate()}
         // title = {item[titleField]}
        >
        <div>
          <div style={baseStyles.avatarDiv}>
            <Avatar size={baseStyles.avatar.size}><DefaultUserIcon style={{width:'100%',height:'100%'}}/></Avatar>
          </div>
          <div style={baseStyles.titleDiv} className={Classes.title}>
            {item[titleField]}
          </div>
        </div>
        

        </GridTile>
      ))}
    </GridList>                                                                                                                       
  </div>
);

AvatarGridList.defaultProps = {
  data: [],
  titleField: "title",
  cols: 8
};


AvatarGridList.propTypes = {
  data: PropTypes.array.isRequired,
  titleField: PropTypes.string.isRequired,
  valueField: PropTypes.string,
  cols: PropTypes.number
};

export default AvatarGridList;