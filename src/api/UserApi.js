import axios from 'axios';
import config from './api.config';
import { myUser } from './mock/mock';
import delay from './mock/delay';

class UserApi {
  static getAllUsers() {
    return axios.get(`${config.root}/getAll`);
  }
  static getMyUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(myUser);
      }, delay);
    });
  }
}

export default UserApi;
