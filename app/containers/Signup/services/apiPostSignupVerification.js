/*
 * Service for user signup
 * by sending user data
 * if signup success, server will send OTP
 */

import config from '../../../config/config.json';

const URL = config.ApiRootUrl;
const UNSIGNED_TOKEN = config.unsignedToken;

const apiPostSignupVerification = (data) => {
  
  return fetch(URL+'/users/authenticate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Opentani-Access-Token': UNSIGNED_TOKEN,
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
  apiPostSignupVerification,
}