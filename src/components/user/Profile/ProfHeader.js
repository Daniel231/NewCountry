import React, {PropTypes} from 'react';
import Profile from './Profile';
import {ProfileAvatar as UserAvatar} from '../styledComponents/avatar';
import Style from "./style.css";

let userDetails = {
    name: "דניאל עזרא",
    job: "מעצב",
    unit: "כלשהי",
    team: "עיצוב",
    jobDesc: "אזרח חופשי ומאושר",
    id: 6861599,
    passport: 6861599,
    rank: "אזרח!!",
    clasification: "מסווג",
    phone: "051111",
    mobile: "052222",
    mail: "gamba@gamba.com",
    address: "באר שבע",
}



const img = 'https://s3.amazonaws.com/uifaces/faces/twitter/gipsy_raf/128.jpg';

class ProfHeader extends React.Component {
    render() {
        return (
        <div style ={{width:'100%'}}>
            <div className={Style.userDetails}>
                <div className={Style.GeneralDetails}>
                    <UserAvatar size={170} src ={img}/>
                    <div className={Style.rightColDiv}>
                        <div className={Style.imgDetails}>
                            <div className={Style.mainJobTitle}>
                                <span> {userDetails.name} | {userDetails.job}</span>
                            </div>
                            <div className={Style.subJobTitle}>
                                <span> {userDetails.unit} | {userDetails.team} </span>
                            </div>
                            <div className={Style.jobDescrption}>
                                <span> {userDetails.jobDesc} </span>
                            </div>
                            <Profile/>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
        );
    }
}

export default ProfHeader;