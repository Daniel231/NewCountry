import React, {PropTypes} from 'react';
import Profile from "./Profile.js";
import UserAvatar from "./Avatar.js";
import Style from "../style/style.css";

class ProfHeader extends React.Component {
    render() {
        return (
        <div>
            <div className={Style.userDetails}>
            <div className={Style.GeneralDetails} style={{position: "relative"}}>
                <UserAvatar/>
                <span style={{position: "relative", right: "10%"}}>
                    <h2>ארז עדן | ראש צוות אפיון</h2>
                    <h5>NGSOFT | סטודיו</h5>
                    <p> 
                    <h4> 
                        ראש צוות אפיון בסטודיו בחברת אנג'יסופט
                        <br/>
                        כאן יהיה עוד טקסט של תיאור התפקיד כאן יהיה טקסט נוסף
                    </h4>
                    </p>
                    <Profile/>
                </span>
            </div>
            <div className={Style.specsDetails}>
                <div style={{
                position: "absolute",
                left: "58%" ,
                top: "22%"}}>
                        מס' אישי: 1234567
                        <br/>
                        תעודת זהות: 488995672
                        <br/>
                        דרגה: סרן
                        <br/>
                        סיווג: סודי ביותר
                </div>
            <div className={Style.dotted}></div>
            <div style={{
                position: "absolute",
                right: "53%",
                top: "22%"}}>
                טלפון: <span className={Style.test}> 02-4865379 </span>
                <br/>
                נייד: <span className={Style.test}> 052-4897741 </span>
                <br/>
                דוא"ל: <span className={Style.test}> bla@gmail.com </span>
                <br/>
                כתובת: <span className={Style.test}> שלמה בן יוסף, 16, ירושלים </span>
            </div>
            </div>
            </div>
        </div>
        );
    }
}

export default ProfHeader;