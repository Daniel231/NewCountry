import React from 'react';
import styled from 'styled-components';
import Avatar from '../../shared/avatar';
import CameraIcon from 'material-ui/svg-icons/image/camera-alt';

const StyledAvatar = styled(Avatar).attrs({
  badgeStyle: {
    backgroundColor: '#90B7B6',
  },
  innerStyle: {
    boxShadow: '0 0 10px 1px rgba(0,0,0,0.6)',
  }
})``;

const profileAvatar = styled(StyledAvatar).attrs({
  size: 170,
  innerStyle: props => Object.assign({}, props.innerStyle,
    {
      border: '3px solid rgb(145,182, 182)',
      position: 'relative',
      flexShrink: '0',
    }),
})``;



const StyleAddUserAvatar = styled(Avatar).attrs({
  size: 170,
  icon: {CameraIcon},
  style:{
      zIndex: 140,
      border: 'none',
      backgroundColor: 'rgb(0, 165, 146)',
      position: 'relative',
      left: 1200,
      top: 110,
      fontSize:0,
      boxShadow:'0px 0px 24px 0px rgba(0,0,0,0.36)',
  }
})``;

const AddUserAvatar = ()=> (
      <StyleAddUserAvatar>
          <div>
              <img 
                  src={require('../styledComponents/icons/icons8-google-images.svg')}
                  style={{
                      position: 'relative',
                      right: '28%',
                      width: 60,
                      bottom: 13,
                  }}/>
              <p
                  style={{
                      fontSize:25,
                      bottom: 10, 
                      position: 'relative',
                      margin: 0,
                  }}
              >
                  <strong>העלה תמונה</strong>
              </p>
              <p
                  style={{
                    fontSize:15,
                    borderBottom: '2px solid',
                    display: 'initial',
                    position: 'relative',
                    right: '25%',
                  }}>
                  שנה דמות
              </p>
          </div>
        </StyleAddUserAvatar> 
);




const Small = styled(StyledAvatar).attrs({
  size: 35,
})``;

export {AddUserAvatar};
export const smallAvatar = Small;
export const ProfileAvatar = profileAvatar;
export default StyledAvatar;
