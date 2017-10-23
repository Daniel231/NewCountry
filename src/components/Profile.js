import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Style from "../style/profile.css";
import UserAvatar from "./Avatar.js";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    render() {
        function handleOpen() {
            this.setState({open: true});
        }
        
        function handleClose() {
            this.setState({open: false});
        }
        
          const customContentStyle = {
            width: '80%',
            backgroundColor: "black",
            maxWidth: 'none',
            direction: 'rtl'
          };

          const customTitleStyle = {
            backgroundColor: "rgb(228, 234, 234)",
            paddingBottom: "2px"
          };

          const userAvatarStyle = {
            position: "absolute",
            border: "3px solid rgb(145,182, 182)",
            right: "39%",
            bottom: "86%"
            };

          let userDetails = {
              fullJobDesc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיא" +
               "- פוסיליס קוויס, אקווזמן קוואזי במר מודוף." +
               "אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בל" +
               "- וענוף לורם איפסום דולור סיט אמט," +
               "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח." +
               "עמחליף נולום ארווס סאפיאן - פוסיליס קוויס," +
               "אקווזמן קולהע צופעט למרקוח איבן איף," +
               "ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק." +
               "תצטנפל בלינדו למרקל אס לכימפו, דול," +
               "צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש." +
               "קוויז דומור ליאמום בלינך רוגצה. לפמעט",
              name: "דניאל עזרא",
              job: "משוחרר",
              unit: "אזרחות",
              team: "אזרחי",
              jobDesc: "אזרח חופשי ומאושר",
              id: 6861599,
              passport: 6861599,
              rank: "אזרח!!",
              clasification: "מסווג טילים",
              phone: "051111 ואין שם אף אחד",
              mobile: "052222",
              mail: "gamba@gamba.com",
              address: "באר שבע עיר הפשע",
              groups: ["הפרלמנט", "פאור ריינג'רס"]
          }

          const actions = [
            <span style={{color: "white"}}>
               <span style={{fontWeight:"bold", paddingLeft:"2%"}}> הקבוצות שלי: </span>
                {userDetails.groups[0] +" | "+ userDetails.groups[1] }
            </span>
          ];

        return (
            <div style={{position: "relative", top: "32%"}}>
                <MuiThemeProvider>
                <RaisedButton 
                label="לפרופיל המלא"
                buttonStyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25}}
                labelColor={'#FFFFFF'}
                backgroundColor={"rgb(36,156,158)"}
                onClick={handleOpen.bind(this)}/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                <Dialog
                title={userDetails.name + " | " + userDetails.job}
                actions={actions}
                open={this.state.open}
                onRequestClose={handleClose.bind(this)}
                titleStyle={customTitleStyle}
                bodyStyle= {{backgroundColor: "rgb(228, 234, 234)", paddingBottom: "0px", overflowX:"hidden"}}
                actionsContainerStyle={{backgroundColor: "rgb(33, 163, 151)", padding: "18px"}}
                contentStyle={customContentStyle}
                style={{borderRadius: "20px"}}
                >
                <UserAvatar size={150} style={userAvatarStyle}/>
                <span style={{color:"black"}}>
                        {userDetails.unit + " | " + userDetails.team}
                </span>
                <hr/>
                <br/>
                <div className={Style.fullJobDesc} style={{paddingBottom: "20px"}}>
                    <span>
                        {userDetails.fullJobDesc}
                    </span>
                </div>
                <br/>
                <div className={Style.leftDiv}>
                    <div className={Style.leftCol}>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>מס' אישי:</div>
                            <div className={Style.leftDivDetail}>{userDetails.id}</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>תעודת זהות:</div>
                            <div className={Style.leftDivDetail}>{userDetails.passport}</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>דרגה:</div>
                            <div className={Style.leftDivDetail}>{userDetails.rank}</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>סיווג:</div>
                            <div className={Style.leftDivDetail}>{userDetails.clasification}</div>
                        </div>
                    </div>
                    <div className={Style.rightCol}>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>טלפון:</div>
                            <div className={Style.leftDivDetail}>{userDetails.phone}</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>נייד:</div>
                            <div className={Style.leftDivDetail}>{userDetails.mobile}</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>דוא"ל:</div>
                            <div className={Style.leftDivDetail}>{userDetails.mail}</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>כתובת:</div>
                            <div className={Style.leftDivDetail}>{userDetails.address}</div>
                        </div>
                    </div>
                </div>
                </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}