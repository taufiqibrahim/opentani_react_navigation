/*
 * Service for user signup
 * by sending user data
 * if signup success, server will send OTP
 */

import api from '../../../config/apiServerSetting.json';

const URL = api.dev.url;
const TOKEN = api.dev.unsignedToken;

const apiPostSignupVerification = (data) => {
  console.log(data)
  return fetch(URL+'/v1/users/authenticate', {
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
  apiPostSignupVerification,
}