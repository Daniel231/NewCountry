import axios from 'axios';
import config from './api.config';


class GroupApi {
  static getAllGroups() {
    return axios.get(`${config.root}/kartoffel/getAll`);
  }
  static getGroup(groupId) {

  }
  static getRootGroup() {
    
  }
  static getGroupMembers(groupId) {
    return axios.get(`${config.root}/user/in/${groupId}`);
  }
}

export default GroupApi;
