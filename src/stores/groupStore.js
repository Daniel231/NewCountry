import { extendObservable, action } from 'mobx';
import { asyncAction } from 'mobx-utils';
import { User } from './userStore';
import GroupApi from '../api/mockGroupApi';

class GroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.groupsMap = new Map();
    extendObservable(this, {
      loading: false,
      groupTree: [],
      selectedGroup: null,
      fetchGroups: asyncAction(function* fetchGroups() {
        this.loading = true;
        const groups = yield GroupApi.getAllGroups();
        this.groupTree = groups.map(group => new Group(group));
        this.mapGroupTree(this.groupTree);
        // select default group
        yield this.selectGroup(this.groupTree[0].id);
        // this.rootStore.selectedGroupStore.selectGroup(this.getGroup(this.groupTree[0].id));
        this.loading = false;
      }),
      selectGroup: asyncAction(function* selectGroup(groupId) {
        // this.loading = true;
        this.selectedGroup = this.groupsMap.get(groupId);
        yield this.selectedGroup.fetchMembers();
        this.rootStore.selectedGroupStore.selectGroup(this.selectedGroup);
        // this.loading = false;
      }),
      // getgroupUsers
    });
    this.fetchGroups();
  }

  getGroup(groupId) {
    return this.groupsMap.get(groupId);
  }

  mapGroupTree(groupTree) {
    for (const group of groupTree) {
      if(group instanceof Group){
        this.groupsMap.set(group.id, group);
        this.mapGroupTree(group.children);
      }
    }
  }
}


export class Group {
  constructor(json) {
    extendObservable(this, {
      title: json.title,
      id: json.id,
      children: json.children ? json.children.map(group => new Group(group)) : [],
      hasChildren: json.children && true,
      members: [],
      open: false,
      toggleOpen: action.bound(() => {
        this.open = !this.open;
      }),
      fetchMembers: asyncAction(function* select() {
        const members = yield GroupApi.getGroupMembers(this.id);
        this.members = members.map(member => new User(member));
      }),
    });
  }
}


// const store = new GroupStore();
export default GroupStore;
