import delay from './delay';
import { myUser } from './mock';

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


// let user = {
//   fullJobDesc: 'dfgdfg',
//   name: "h",
//   job: "j",
//   unit: "h",
//   team: "h",
//   jobDesc: "א",
//   id: 6861599,
//   passport: 6861599,
//   rank: "h!!",
//   clasification: "h",
//   phone: "h",
//   mobile: "h",
//   mail: "h@gamba.com",
//   address: "h",
//   groups: ["yy", "jhhkhjk"]
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
                resolve(myUser);
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