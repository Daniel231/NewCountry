import { extendObservable, computed,  action} from 'mobx';
import { asyncAction } from 'mobx-utils';
import GroupApi from '../api/mockGroupApi';
import { Group } from './groupStore';
import { User } from './userStore';

class SelectedGroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    extendObservable(this, {
      loading: false,
      id: '',
      name: '',
      members: [],
      filterTerm: '',
      filteredMembers: computed(function filteredMembers() {
        return this.members.filter(user =>
          user.name.indexOf(this.filterTerm) !== -1);
      }),
      filter: action.bound(function filter (term) {
        this.filterTerm = term;
      }),
      selectGroup: action.bound(function selectGroup(group) {
        // this.loading = true;
        this.id = group.id;
        this.name = group.title;
        this.members = group.members;
        this.filterTerm = '';
        // extendObservable(this, group);
        // this.loading = false;
      }),
    });
  }
}

// const store = new GroupStore();
export default SelectedGroupStore;
