import delay from './delay';
import { groups, tableData } from './mock';


class GroupApi {
  static getAllGroups() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], groups));
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
}

export default GroupApi;
