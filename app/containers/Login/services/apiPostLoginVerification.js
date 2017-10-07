/*
 * Service for user signup
 * by sending user data
 * if signup success, server will send OTP
 */

import config from '../../../config/config.json';

const URL = config.ApiRootUrl;
const UNSIGNED_TOKEN = config.unsignedToken;

const apiPostLoginVerification = (data) => {
  console.log(data)
  return fetch(URL+'/users/authenticate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Opentani-Access-Token': TOKEN,
      'Opentani-OTP-Token': data.otp,
    },
    body: JSON.stringify({
      userName: data.userName,
    })
  })
  .then((response) => {
    return response.json();
  })
  .catch((error) => {
    return error;
  })
}

export {
  apiPostLoginVerification,
}