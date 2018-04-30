import axios from 'axios';
import config from './api.config';
import fetchData from './fetchData';

const ROOT_GROUP_ID = '5a93fb4d12807920c965b6a7';

class GroupApi {
  static getAllGroups() {
    return fetchData(axios.get(`${config.root}/kartoffel/getAll`, config.axiosConfig));
  }
  static getGroup(groupId) {
    return fetchData(axios.get(`${config.root}/kartoffel/${groupId}?populate=children`, config.axiosConfig));
  }
  static getRootGroup() {
    return GroupApi.getGroup(ROOT_GROUP_ID);
  }
  static getGroupMembers(groupId) {
    return fetchData(axios.get(`${config.root}/kartoffel/${groupId}/members`));
  }
}

export default GroupApi;
