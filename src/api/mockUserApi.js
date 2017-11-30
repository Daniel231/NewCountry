import delay from './delay';

//abra kadabra
const users = [
    {
        id: "asdsa3453",
        firstName: "elad",
        lastName: "biran"
    },
    {
        id: "asd34534tt",
        firstName: "Nitro",
        lastName: "Jello"
    }
];


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

// let user = {
//     fullJobDesc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיא" +
//      "- פוסיליס קוויס, אקווזמן קוואזי במר מודוף." +
//      "אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בל" +
//      "- וענוף לורם איפסום דולור סיט אמט," +
//      "קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח." +
//      "עמחליף נולום ארווס סאפיאן - פוסיליס קוויס," +
//      "אקווזמן קולהע צופעט למרקוח איבן איף," +
//      "ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק." +
//      "תצטנפל בלינדו למרקל אס לכימפו, דול," +
//      "צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש." +
//      "קוויז דומור ליאמום בלינך רוגצה. לפמעט",
//     name: "דוד",
//     job: "עוקץ",
//     unit: "כלשהי",
//     team: "עיצוב",
//     jobDesc: "אזרח חופשי ומאושר",
//     id: 6861599,
//     passport: 6861599,
//     rank: "אזרח!!",
//     clasification: "מסווג",
//     phone: "051111",
//     mobile: "052222",
//     mail: "gamba@gamba.com",
//     address: "באר שבע",
//     groups: ["הפרלמנט", "פאור ריינג'רס"]
// };

const generateId = (user) => {
    return user.firstName + '-' + user.lastName;
};

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }
    static getMyUser(){
        console.log('Called');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(user);
            }, delay);
        });
    }

    static saveUser(user) {
        user = Object.assign({}, user); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (user.id) {
              const existingUserIndex = users.findIndex(a => a.id == user.id);
              users.splice(existingUserIndex, 1, user);
            } else {
              user.id = generateId(user);
              users.push(user);
            }
    
            resolve(user);
          }, delay);
        });
      }
}

export default UserApi;