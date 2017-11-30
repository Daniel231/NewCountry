import { observable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import { getMyUser } from '../api/mockUserApi';

export class UsersStore {
  @observable myUser;

  constructor() {
    this.getMyUser();
  }

  @asyncAction *getMyUser() {
    const profile = yield getMyUser();
    this.myUser = profile;
  }
}