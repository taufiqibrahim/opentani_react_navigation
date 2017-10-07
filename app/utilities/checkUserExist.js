import config from '../config/config.json';

const URL = config.ApiRootUrl;
const UNSIGNED_TOKEN = config.unsignedToken;

const checkUserExist = (method, data) => {
  
  return fetch(URL+'/users/exists', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': UNSIGNED_TOKEN,
      'method': method,
      'email': data,
      'phone': data,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((err) => {
    console.log(err.message);
    return err;
  })
}

export {
  checkUserExist
}