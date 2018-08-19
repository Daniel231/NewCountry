import { extendObservable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import { UserApi } from '../api';

class UserStore {
  // @observable myUser;

  constructor(rootStore) {
    this.rootStore = rootStore;
    extendObservable(this, {
      myUser: null,
      getMyUser: asyncAction(function* getMyUser() {
        const profile = yield UserApi.getMyUser();
        console.log(profile);
        this.myUser = new User(profile);
      }),
    });
    this.getMyUser();
  }
}

export class User {
  constructor(json) {
    this.id = json.id;
    this.name = json.fullName;
    this.role = json.role;
    this.isGroupAdmin = json.isGroupAdmin;
    this.isAdmin = json.isAdmin;
    this.job = json.job;
    this.unit = json.unit;
    this.team = json.team;
    this.jobDesc = json.jobDesc;
    this.passport = json.passport;
    this.rank = json.rank;
    this.clasification = json.clasification;
    this.phone = json.phone;
    this.mobile = json.mobile;
    this.mail = json.mail;
    this.address = json.address;
    this.groups = json.groups;
    this.releaseDate=json.releaseDate;
  }
}

// const store = new UserStore();
export default UserStore;
