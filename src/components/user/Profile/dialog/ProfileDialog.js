import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/RaisedButton';
import Dialog, { Avatar, ExtendedDetails, MoreInfoDiv } from './styled/Dialog';
// import Dialog2 from 'material-ui/Dialog';
import { ActionText } from './styled/Text';
import TextStyles from '../../../shared/styles/text.styles';
import { Primary } from '../../../shared/styles/button.styles';

// import ExtendedDetails from '../ExtendedDetails';
// float: 'left', marginTop: '-20px'

const img = 'http://i.dailymail.co.uk/i/pix/2014/12/10/23F10A9400000578-2862630-image-a-21_1418218720071.jpg';

const ProfileDialog = ({ userDetails, open, onClose }) => {
  const Actions = [
    <span key="a">
      <ActionText>הקבוצות שלי: </ActionText>
      <ActionText bold>{
        userDetails.groups && userDetails.groups.reduce((prev, cur) =>
          (prev ? `${prev} | ${cur}` : `${cur}`), '')}
      </ActionText>
    </span>
  ];
  return (
    <Dialog
      style={{ borderRadius: '20px', }}
      title={userDetails.name + " | " + userDetails.job}
      actions={Actions}
      open={open}
      onRequestClose={onClose}
    >
      <Avatar src={img} />
      <div>
        <span style={TextStyles.mediumText}> {userDetails.unit + " | " + userDetails.team}</span>
      </div>
      <Primary
        primary
        label="שלח בקשה לעדכון פרטים"
        style={{ float: 'right', marginTop: '-40px', borderRadius: '25px', }}
      />
      <hr />
      <div>
        <div style={{ padding: '10px 2px 40px 50px', }}>
          {userDetails.fullJobDesc}
          <span style={TextStyles.mediumText}>
            הוא נתן לנו את זכותו וטבעו בזיעה. החזית והחנית מוכנים לאכול. אמן את הלב שלך מהפה, הבן נעלם, וכך גם העצה של כולם. בתפריט השוקו החם, תוכלו למצוא שפע של תה. איזו חרפה, עד כמה שידוע לך. חושך רגליה מקורו בלבה. ושהוא היה יותר מדי בבחירות, ולבו היה מלא באוזניים של עשר האוזניים של לו ביץ'. אנשים שונים היו קשורים אל פניה ומלונה היתה קנאתם.
    גנן קל הרים את עצמו, ושם שם פתק בלבו. נס קורע לב של נשירת שיער עלה בשקט בגנים, וימי האדמה היו מלאים בדם. מן המנצח, ראיתי. הם רועדים כמו ערבים, ויש כאלה שנפגעו והחלו לחשוב. תה עץ לא קוצצים את זקנו של זקן. רטט הלב הארי שלך חי קצת. אבל המורים צלצלו כמו רצועה.
          </span>
        </div>
        <MoreInfoDiv>
          <div style={{
              width: 0,
              borderTop: '20px solid #e3e9e9',
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              marginRight: '5%',
              marginBottom: '10px',
            }}
          />
          <ExtendedDetails userDetails={userDetails} />
        </MoreInfoDiv>
      </div>
    </Dialog>
    // <Dialog2
    //   title="Dialog With Actions"
    //   actions={Actions}
    //   modal={false}
    //   open={open}
    //   bodyStyle={{ backgroundColor: 'aqua', }}
    //   contentStyle={{ width: '50%', }}
    //   onRequestClose={onClose}
    // >
    //   <Avatar src={img} />
    //   <div>
    //     <span> {userDetails.unit + " | " + userDetails.team}</span>
    //   </div>
    //   <hr />
    //   <div>
    //     {userDetails.fullJobDesc}
    //   </div>
    //   <ExtendedDetails userDetails={userDetails} />
    // </Dialog2>
  );
};

ProfileDialog.propTypes = {
  userDetails: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default ProfileDialog;