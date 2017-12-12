import { extendObservable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import GroupApi from '../api/mockGroupApi';

class SelectedGroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    extendObservable(this, {
      loading: false,
      selectedGroup: {
        id: '',
        members: [],
      },
      selectGroup: asyncAction(function* selectGroup(groupId) {
        this.loading = true;
        const members = yield GroupApi.getGroupMembers(groupId);
        this.selectedGroup = {
          id: groupId,
          members,
        };
        this.loading = false;
      }),
    });
  }
}

// const store = new GroupStore();
export default SelectedGroupStore;
