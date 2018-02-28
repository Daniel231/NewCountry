import _ from 'lodash';
import delay from './delay';
import { groups, tableData, flatGroups, ROOT_GROUP_ID } from './mock';

function populateGroup(groupId) {
  const group = _.find(flatGroups, { id: groupId, });
  group.children = group.children.map(id => _.find(flatGroups, { id, }));
  return group;
}

class GroupApi {
  static getAllGroups() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], groups));
      }, 50);
    });
  }
  static getRootGroup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(populateGroup(ROOT_GROUP_ID));
      }, 50);
    });
  }
  static getGroup(groupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(populateGroup(groupId));
      }, 50);
    });
  }
  static getGroupMembers(groupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(groupId == 2) {
          resolve(Object.assign([], tableData.users.slice(0, 2)));
        } else {
          resolve(Object.assign([], tableData.users.slice(2)));
        }
      }, delay);
    });
  }
}

export default GroupApi;
