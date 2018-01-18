import delay from './delay';
import { groups, tableData, findChildren } from './mock';


class GroupApi {
  static getAllGroups() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const firstLevel = groups.map(g => ({
          title: g.title,
          hasChildren: g.hasChildren,
          id: g.id,
        }));
        resolve(Object.assign([], firstLevel));
      }, 50);
    });
  }
  static getGroupMembers(groupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(groupId == 1) {
          resolve(Object.assign([], tableData.users.slice(0, 2)));
        } else {
          resolve(Object.assign([], tableData.users.slice(2)));
        }
      }, delay);
    });
  }
  static getGroupChildren(groupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const children = findChildren(groupId)
        resolve(children);
      }, delay);
    });
  }
}

export default GroupApi;
