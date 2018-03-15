import * as Config from 'Config';

const config = {
  root: Config.API_URL,
  mock: !(Config.API_URL && true),
  axiosConfig: {
    headers: { 'Access-Control-Allow-Origin': '*', },
    crossdomain: true,
  },
};

export default config;
