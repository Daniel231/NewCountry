import delay from './delay';

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