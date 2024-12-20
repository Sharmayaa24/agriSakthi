import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'http://154.61.173.102:3006',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});

const AuthEffect = formData => {

  return authInstance.request({
    url: '/auth/login',
    method: 'POST',
    data: formData,
  });
};

const SignUpEffect = data => {
  return authInstance.request({
    url: '',
    method: 'POST',
    data: data,
  });
};

const RegisterOtpEffect = data => {
  return authInstance.request({
    url: '',
    method: 'PUT',
    data: data,
  });
};
const ForgetPasswordEffect = data => {
  authInstance.request({
    url: '',
    method: 'PUT',
    data: data,
  });
};
const RequestOtpEffect = data => {
  authInstance.request({
    url: '',
    method: 'PUT',
    data: data,
  });
};
const ResendOtpEffect = data => {
  authInstance.request({
    url: '',
    method: 'PUT',
    data: data,
  });
};
export {
  AuthEffect,
  SignUpEffect,
  RegisterOtpEffect,
  ForgetPasswordEffect,
  RequestOtpEffect,
  ResendOtpEffect,
};
