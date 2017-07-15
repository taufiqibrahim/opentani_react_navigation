/*
 * Service for user signup
 * by sending user data
 * if signup success, server will send OTP
 */

import api from '../../../config/apiServerSetting.json';

const URL = api.dev.url;
const TOKEN = api.dev.unsignedToken;

const apiPostSignup = (data) => {

  return fetch(URL+'/v1/users/signup', {
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
  apiPostSignup,
}