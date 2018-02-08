import config from './api.config';
import MockUserApi from './mock/mockUserApi';
import MockGroupApi from './mock/mockGroupApi';
import userApi from './UserApi';
import groupApi from './groupApi';

const UserApi = config.mock ? MockUserApi : userApi;
const GroupApi = config.mock ? MockGroupApi : groupApi;

// if(config.mock) {
//   UserApi = MockUserApi;
//   GroupApi = MockGroupApi;
// } else {
//   UserApi = userApi;
//   GroupApi = groupApi;
// }

export { UserApi, GroupApi };
