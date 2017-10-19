import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Badge from 'material-ui/Badge';
import DefaultUserIcon from 'material-ui/svg-icons/social/person';
import StarIcon from 'material-ui/svg-icons/toggle/star-border';
import {white, green100} from 'material-ui/styles/colors';
import {Classes, Styles as DefaultStyles} from '../../styles/avatarGridList';

const Styles ={};

// const baseStyles = {
//   avatarDiv: {
//     display:'flex',
//     justifyContent:'center'
//   },
//   avatar: {
//     size: 100
//   },
//   titleDiv: {
//     textAlign:'center',
//     width:'100%'
//   },
//   gridTile: {
//     marginTop:'10px'
//   },
//   defaultUserIcon: {
//     height: '100%',
//     width: '100%'
//   },
// };



/**
 * user: {
 *  name,
 *  role,
 *  avatar?,
 *  isGroupAdmin?,
 *  isAdmin?
 * } 
 */


const img="https://vignette.wikia.nocookie.net/yugioh/images/7/74/RedEyesBDragon-OW.png/revision/latest/scale-to-width-down/185?cb=20140618033122";

class AvatarGridList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(val){
    if(this.props.onClick){
      this.props.onClick(val);
    }
  }

  render() {
    const {data, valueField, titleField, cols, onClick, iconFunction, styles} = this.props;
    const Styles = styles;
    return (
    <div style={Styles.container}>
      <GridList cols={cols} cellHeight={'auto'}>
        {data.map(item => {
          const Icon = iconFunction ? iconFunction(item): null;
          return (
          <GridTile
            onClick={this.onClick.bind(this,valueField && item[valueField]? 
              item[valueField]: null)}
            style = {Styles.gridTile}
            key={valueField && item[valueField] ? item[valueField]: shortid.generate()}
          // title = {item[titleField]}
          >
          <div >
            <div style={Styles.avatarContainer}>
             {
               Icon ? 
                <Badge style={Styles.badgeContainer} badgeStyle={Styles.badge} badgeContent={<Icon color={white}/>}  >
                  {/* <Avatar src={img} style={Styles.avatar} ></Avatar>   */}
                  <IconButton className={Classes.button} iconStyle={Styles.mainIcon} {...Styles.avatarActionButton}>      
                    {/* <DefaultUserIcon/> */}
                    <img src={img}/>
                  </IconButton>
                </Badge> :
                <FloatingActionButton iconStyle={Styles.mainIcon} {...Styles.avatarActionButton}>      
                    <DefaultUserIcon/>
                </FloatingActionButton>
                

             }
              {/* <Badge badgeStyle={Styles.badge} badgeContent={<StarIcon color style color={white}/>}  >
                <Avatar size={baseStyles.avatar.size}><DefaultUserIcon style={baseStyles.defaultUserIcon}/></Avatar>  
              </Badge> */}
              {/* <Avatar size={baseStyles.avatar.size}><DefaultUserIcon style={baseStyles.defaultUserIcon}/></Avatar> */}
              {/* <Avatar size={baseStyles.avatar.size} src={"images/empty-pic.png"}/> */}
            </div>
            <div style={Styles.titleDiv} >
              {item[titleField]}
            </div>
          </div>
        </GridTile>
        )})}
      </GridList>                                                                                                                       
    </div>);
  }
}
AvatarGridList.defaultProps = {
  data: [],
  titleField: "title",
  cols: 8,
  styles: DefaultStyles
};


AvatarGridList.propTypes = {
  data: PropTypes.array.isRequired,
  titleField: PropTypes.string.isRequired,
  valueField: PropTypes.string,
  cols: PropTypes.number,
  onClick: PropTypes.func,
  iconFunction: PropTypes.func,
  styles: PropTypes.object
};

export default AvatarGridList;