import React, {PropTypes} from 'react';
import Style from "../style/sortAndsearch.css";
import GroupIcon from 'material-ui/svg-icons/social/group';
import ListIcon from 'material-ui/svg-icons/action/list';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ModuleIcon from 'material-ui/svg-icons/action/view-module';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {black, white, blueGrey200} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

let object = {
    groupName: "צוות אפיון",
    memberNumber: 22
}

class SortAndSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <div className={Style.sortAndSearchDiv}>
                    <div className={Style.teamDiv}>
                        <GroupIcon color={black}/>
                        <span>{object.groupName}</span>
                        <span className={Style.numberOf}> ({object.memberNumber}) </span>
                    </div>
                    <div id="CLASS" className={Style.wrapperDropdown1} tabIndex="1">
                        <span>מחלקה:</span>
                        <ExpandMoreIcon color={white}/>
                        <ul className={Style.dropdown} tabIndex="1">
                            <li><a id=""  href="#">WEB</a></li>
                            <li><a id=""  href="#">R&D</a></li>
                        </ul>
                    </div>
                    <div className={Style.textDiv}>
                        <SearchIcon color={white}/>
                        <input type="text" placeholder="חפש כאן שם עובד או תפקיד"/>
                    </div>
                    <div id="dd" className={Style.wrapperDropdown1} tabIndex="1">
                        <span>מיין לפי:</span>
                        <ExpandMoreIcon color={white}/>
                        <ul className={Style.dropdown} tabIndex="1">
                            <li><a id="employee-id" onClick="changeDiv(this.id)" href="#">עובדים</a></li>
                            <li><a id="job-id" onClick="changeDiv(this.id)" href="#">תפקידים</a></li>
                        </ul>
                    </div>
                    <ModuleIcon color= {blueGrey200}/>
                    <ListIcon color = {blueGrey200}/>
                </div>
        );
    }
}


export default SortAndSearch;


// <div className={Style.sortAndSearchDiv}>
// <div className={Style.teamDiv}>
//     <GroupIcon color={black}/>
//     <span>צוות אפיון</span>
//     <span className={Style.numberOf}>(22)</span>
// </div>
// <div id="CLASS" className={Style.wrapperDropdown1} tabIndex="1">
//     <span>מחלקה:</span>
//     <ExpandMoreIcon color={white}/>
//     <ul className={Style.dropdown} tabIndex="1">
//         <li><a id=""  href="#">WEB</a></li>
//         <li><a id=""  href="#">R&D</a></li>
//     </ul>
// </div>
// <div className={Style.textDiv}>
//     <SearchIcon color={white}/>
//     <input type="text" placeholder="חפש כאן שם עובד או תפקיד"/>
// </div>
// <div id="dd" className={Style.wrapperDropdown1} tabIndex="1">
//     <span>מיין לפי:</span>
//     <ExpandMoreIcon color={white}/>
//     <ul className={Style.dropdown} tabIndex="1">
//         <li><a id="employee-id" onClick="changeDiv(this.id)" href="#">עובדים</a></li>
//         <li><a id="job-id" onClick="changeDiv(this.id)" href="#">תפקידים</a></li>
//     </ul>
// </div>
// <ModuleIcon color= {blueGrey200}/>
// <ListIcon color = {blueGrey200}/>
// </div>