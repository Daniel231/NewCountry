import React, {PropTypes} from 'react';
import Profile from "./Profile.js";
import UserAvatar from "./Avatar.js";
import Style from "../style/style.css";

class ProfHeader extends React.Component {
    render() {
        return (
        <div>
            <div className={Style.userDetails}>
                <div className={Style.GeneralDetails}>
                    <UserAvatar/>
                    <div className={Style.rightColDiv}>
                        <div className={Style.imgDetails}>
                            <div className={Style.mainJobTitle}>
                                <span>שם מלא | תפקיד בחברה</span>
                            </div>
                            <div className={Style.subJobTitle}>
                                <span>חברה | מחלקה </span>
                            </div>
                            <div className={Style.jobDescrption}>
                                <span>ראש צוות איפיון בחברה וכאן יהיה כל מיני תיאורים על העבודה עצמה והאופי שלה וכולי וכולי וכולי כל מיני
                                    דברים
                                </span>
                            </div>
                            <Profile/>
                        </div>
                    </div>
                </div>
                <div className={Style.leftDiv}>
                    <div className={Style.leftCol}>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>מס' אישי:</div>
                            <div className={Style.leftDivDetail}>6861599</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>תעודת זהות:</div>
                            <div className={Style.leftDivDetail}>6861599</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>דרגה:</div>
                            <div className={Style.leftDivDetail}>סרן</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.leftDivTitle}>סיווג:</div>
                            <div className={Style.leftDivDetail}>סודי ביותר</div>
                        </div>
                    </div>
                    <div className={Style.rightCol}>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>טלפון:</div>
                            <div className={Style.leftDivDetail}>6861599</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>נייד:</div>
                            <div className={Style.leftDivDetail}>6861599</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>דוא"ל:</div>
                            <div className={Style.leftDivDetail}>Tomer.i@ngsoft.com</div>
                        </div>
                        <div className={Style.leftDivLine}>
                            <div className={Style.rightDivTitle}>כתובת:</div>
                            <div className={Style.leftDivDetail}>כתובת המגורים של העובד</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ProfHeader;