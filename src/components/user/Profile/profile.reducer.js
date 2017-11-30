import { FETCH_USER_SUCCESS } from '../user.actions';

export default function(state = user, action) {
    switch(action.type) {
         case FETCH_USER_SUCCESS:
             return action.user;
         default:
             return state;
    }
}

let user = {
    fullJobDesc: 'dfgdfg',
    name: "h",
    job: "j",
    unit: "h",
    team: "h",
    jobDesc: "א",
    id: 6861599,
    passport: 6861599,
    rank: "h!!",
    clasification: "h",
    phone: "h",
    mobile: "h",
    mail: "h@gamba.com",
    address: "h",
    groups: ["yy", "jhhkhjk"]
};