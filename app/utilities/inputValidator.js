import uiText from '../config/uiLanguage.json';

const URL = 'http://10.0.2.2:3000';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJnaWxhbHVuZHJvaW5pamFuZ2Fuc2FtcGVib2NvciIsImlhdCI6MTQ5NjYwMTYxMCwiZXhwIjozMzA1NDIwMTYxMH0.L9k2b9a5SNqvsUYld7FPk0HcXxhCKuoB69sXY2cpg78';

const apiCheckExist = (method, data) => {
  return fetch('http://10.0.2.2:3000/v1/users/exists', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': TOKEN,
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

const validateEmail = (email) => {

  const validationErrorMessage = uiText.validationErrorMessage;

  let isEmpty = true;
  let isValidEmail = null;
  let isExists = null;
  let details = '';

  return new Promise ((resolve, reject) => {
    // Email empty check
    if (!email || email == '' || email == null) {
      result = {
        isEmpty: true,
        isValidEmail,
        isExists,
        details: 'Email is empty',
        validationErrorMessage: validationErrorMessage.emailIsEmpty,
      }
      resolve(result);
    } 
    else {

      // Email format check
      const rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      isValidEmail = rgx.test(email)

      if (isValidEmail) {

        // Email already used check
        apiCheckExist('email', email)
        .then((res) => {
          result = {
            isEmpty: false,
            isValidEmail,
            isExists: res.exists,
            details: res.details,
            validationErrorMessage: res.exists ? validationErrorMessage.emailAlreadyTaken : null,
          }
          resolve(result);
        })
        .catch((e) => {console.log('error cui')})
      }
      else {
        result = {
          isEmpty: false,
          isValidEmail,
          isExists,
          details: 'Email is invalid',
          validationErrorMessage: validationErrorMessage.emailInvalid,
        }
        resolve(result);
      }
    }
  })
}

const validatePhone = (phone) => {

  const validationErrorMessage = uiText.validationErrorMessage;

  let isEmpty = true;
  let isValidPhone = null;
  let isExists = null;
  let details = '';

  return new Promise ((resolve, reject) => {
    // Email empty check
    if (!phone || phone == '' || phone == null) {
      result = {
        isEmpty: true,
        isValidPhone,
        isExists,
        details: 'Phone number is empty',
        validationErrorMessage: validationErrorMessage.phoneIsEmpty,
      }
      resolve(result);
    } 
    else {

      // Phone format check
      isValidPhone = (phone.length >= 10) ? true : false;

      if (isValidPhone) {

        // Email already used check
        apiCheckExist('phone', phone)
        .then((res) => {
          result = {
            isEmpty: false,
            isValidPhone,
            isExists: res.exists,
            details: res.details,
            validationErrorMessage: res.exists ? validationErrorMessage.phoneAlreadyTaken : null,
          }
          resolve(result);
        });
      }
      else {
        result = {
          isEmpty: false,
          isValidPhone,
          isExists,
          details: 'Phone number is invalid',
          validationErrorMessage: validationErrorMessage.phoneInvalid,
        }
        resolve(result);
      }
    }
  })
}

export { 
  validateEmail,
  validatePhone,
}