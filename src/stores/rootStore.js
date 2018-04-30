import UserStore from './userStore';
import GroupStore from './groupStore';
import SelectedGroupStore from './selectedGroupStore';

class RootStore {
  constructor() {
    this.groupStore = new GroupStore(this);
    this.userStore = new UserStore(this);
    this.selectedGroupStore = new SelectedGroupStore(this);
  }
}

export default RootStore;
