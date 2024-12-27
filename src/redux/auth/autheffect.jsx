import axios from 'axios';
import { handleApiError } from "../Vendor/vendoreffect";
export const authInstance = axios.create({
  baseURL: 'http://154.61.173.102:3006',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});

const AuthEffect = formData => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/auth/login',
      method: 'POST',
      data: formData,
    })
   .then(response => {
  console.log("hello",response);
  resolve(response);
})
.catch(error => reject(error));
  });
};
const SignUpEffect = data => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/auth/register',
      method: 'POST',
      data: data,
    })
    .then(response =>{
      console.log(response);
      resolve(response);
    }) 
    .catch(error => reject(handleApiError(error)));
  });
};

const RegisterOtpEffect = data => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/auth/otpVerification',
      method: 'POST',
      data: data,
    })
    .then(response => resolve(response))
    .catch(error => reject(handleApiError(error)));
  });
};

const ForgetPasswordEffect = data => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/auth/forgotpassword',
      method: 'POST',
      data: data,
    })
    .then(response => resolve(response))
    .catch(error => reject(error));
  });
};

const RequestOtpEffect = data => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/auth/otpMail',
      method: 'POST',
      data: data,
    })
    .then(response => resolve(response))
    .catch(error => reject(error));
  });
};

const ResendOtpEffect = data => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/auth/otpVerification',
      method: 'POST',
      data: data,
    })
    .then(response => resolve(response))
    .catch(error => reject(error));
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
