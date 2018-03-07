const config = {
  root: 'http://104.42.105.220/api',
  mock: false,
  axiosConfig: {
    headers: { 'Access-Control-Allow-Origin': '*', },
    crossdomain: true,
  },
};

export default config;
