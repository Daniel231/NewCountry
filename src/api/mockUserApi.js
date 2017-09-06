const delay = 1000;
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

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }
}