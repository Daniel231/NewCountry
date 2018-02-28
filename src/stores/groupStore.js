import { extendObservable, action } from 'mobx';
import { asyncAction } from 'mobx-utils';
import { User } from './userStore';
import { GroupApi } from '../api';

class GroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.groupsMap = new Map();
    extendObservable(this, {
      rootGroup: null,
      loading: false,
      groupTree: [],
      selectedGroup: null,
      fetchGroups: asyncAction(function* fetchGroups() {
        this.loading = true;
        const root = yield GroupApi.getRootGroup();
        this.rootGroup = new Group(root);
        this.groupTree = this.rootGroup.children;
        this.mapGroupTree(this.rootGroup);
        // select default group
        yield this.selectGroup(this.groupTree[0].id);
        // this.rootStore.selectedGroupStore.selectGroup(this.getGroup(this.groupTree[0].id));
        this.loading = false;
      }),
      selectGroup: asyncAction(function* selectGroup(groupId) {
        // this.loading = true;
        this.selectedGroup = this.groupsMap.get(groupId);
        if(this.selectedGroup.hasChildren && !this.selectedGroup.children) {
          const g = yield GroupApi.getGroup(groupId);
          const children = g.children.map(child => new Group(child));
          this.selectedGroup.children = children;
          this.mapGroupTree(this.selectedGroup);
        }
        yield this.selectedGroup.fetchMembers();
        this.rootStore.selectedGroupStore.selectGroup(this.selectedGroup);
        // this.loading = false;
      }),
    });
    this.fetchGroups();
  }

  getGroup(groupId) {
    return this.groupsMap.get(groupId);
  }

  mapGroupTree(root) {
    this.groupsMap.set(root.id, root);
    if(root.children) {
      root.children.map(g => this.mapGroupTree(g));
    }
  }
}


export class Group {
  constructor(json) {
    const parsedChildren = Group.parseChildren(json.children);
    extendObservable(this, {
      title: json.title,
      id: json.id,
      children: parsedChildren,
      hasChildren: !json.isAleaf,
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
  static parseChildren(children) {
    if (children && children.length !== 0 && typeof children[0] === 'object') {
      return children.map(group => new Group(group));  
    }
    return null;
  }
}


// const store = new GroupStore();
export default GroupStore;
