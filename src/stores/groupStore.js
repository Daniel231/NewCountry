import { extendObservable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import GroupApi from '../api/mockGroupApi';

class GroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    extendObservable(this, {
      loading: false,
      groupTree: [],
      fetchGroups: asyncAction(function* fetchGroups() {
        this.loading = true;
        const groups = yield GroupApi.getAllGroups();
        this.groupTree = groups;
        // select default group
        yield this.rootStore.selectedGroupStore.selectGroup(groups[0].id);
        this.loading = false;
      }),
      // getgroupUsers
    });
    this.fetchGroups();
  }
}

// export class Group {
//   constructor(json) {

//   }
// }


// const store = new GroupStore();
export default GroupStore;
