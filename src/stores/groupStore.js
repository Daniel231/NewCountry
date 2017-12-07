import { extendObservable } from 'mobx';
import { asyncAction } from 'mobx-utils';
import GroupApi from '../api/mockGroupApi';

class GroupStore {
  constructor() {
    extendObservable(this, {
      loading: false,  
      groupTree: [],
      fetchGroups: asyncAction(function*() {
        this.loading = true;
        const groups = yield GroupApi.getAllGroups();
        this.groupTree = groups;
        this.loading = false;
      }),
    });
    this.fetchGroups();
  }
}

const store = new GroupStore();
export default store;