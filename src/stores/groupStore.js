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
        const res = yield Promise.all([this.selectedGroup.fetchMembers(),
          this.selectedGroup.fetchChildren()]);
        this.mapGroupTree(res[1]);
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
    if (!groupTree){
      return;
    }
    for (const group of groupTree) {
      this.groupsMap.set(group.id, group);
      this.mapGroupTree(group.children);
    }
  }
}


export class Group {
  constructor(json) {
    extendObservable(this, {
      title: json.title,
      id: json.id,
      children: json.children ? json.children.map(group => new Group(group)) : [],
      hasChildren: json.hasChildren && true,
      members: [],
      loading: false,
      toggleOpen: action.bound(() => {
        this.open = !this.open;
      }),
      // Todo: move action outside of the class - for perfomance 
      fetchMembers: asyncAction(function* fetchMembers() {
        const members = yield GroupApi.getGroupMembers(this.id);
        this.members = members.map(member => new User(member));
      }),
      fetchChildren: asyncAction(function* fetchChildren() {
        this.loading = true;
        const children = yield GroupApi.getGroupChildren(this.id);
        this.children = children.map(g => new Group(g));
        this.loading = false;
        return this.children;
      }),
    });
  }
}


// const store = new GroupStore();
export default GroupStore;
