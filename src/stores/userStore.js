import { extendObservable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import UserApi from '../api/mockUserApi';

class UserStore {
  // @observable myUser;

  constructor() {
    extendObservable(this, {
      myUser: null,
      getMyUser: asyncAction(function*() {
        const profile = yield UserApi.getMyUser();
        this.myUser = profile;
      })
    });
    this.getMyUser();
  }
}

const store = new UserStore();
export default store;