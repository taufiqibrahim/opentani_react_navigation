/*
 * Service for user signup
 * by sending user data
 * if signup success, server will send OTP
 */

import config from '../../../config/config.json';

const URL = config.ApiRootUrl;
const UNSIGNED_TOKEN = config.unsignedToken;

const apiPostLogin = (data) => {

  return fetch(URL+'/users/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Opentani-Access-Token': TOKEN,
      'Opentani-OTP-Transport': data.otpTransport.toLowerCase(),
    },
    body: JSON.stringify({
      citizen_id: null,
      userName: data.userName,
      email: data.email,
      phone: data.phone,
      fullName: data.name,
      nickName: null,
      password: null,
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
  apiPostLogin,
}