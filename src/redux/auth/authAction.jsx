import {
  FORGOT_PASSWORD_IN_FAILURE,
  FORGOT_PASSWORD_IN_PROGRESS,
  FORGOT_PASSWORD_IN_SUCCESS,
  REGISTER_OTP_IN_FAILURE,
  REGISTER_OTP_IN_PROGRESS,
  REGISTER_OTP_IN_SUCCESS,
  REQUEST_LOGIN_IN_FAILURE,
  REQUEST_LOGIN_IN_PROGRESS,
  REQUEST_LOGIN_IN_SUCCESS,
  REQUEST_OTP_IN_FAILURE,
  REQUEST_OTP_IN_PROGRESS,
  REQUEST_OTP_IN_SUCCESS,
  RESEND_OTP_IN_FAILURE,
  RESEND_OTP_IN_PROGRESS,
  RESEND_OTP_IN_SUCCESS,
  SIGN_UP_IN_FAILURE,
  SIGN_UP_IN_PROGRESS,
  SIGN_UP_IN_SUCCESS,
  RESET_STATE,
} from './authTypes';

export const logInProgress = payload => {
  return {
    type: REQUEST_LOGIN_IN_PROGRESS,
    payload: payload,
  };
};
export const logInSuccess = payload => {
  return {
    type: REQUEST_LOGIN_IN_SUCCESS,
    payload: payload,
  };
};
export const logInFailure = payload => {
  return {
    type: REQUEST_LOGIN_IN_FAILURE,
    payload: payload,
  };
};
export const signUpInProgress = payload => {
  console.log(payload, "process")
  return {
    type: SIGN_UP_IN_PROGRESS,
    payload: payload,
  };
};
export const signUpInSuccess = payload => {
  return {
    type: SIGN_UP_IN_SUCCESS,
    payload: payload,
  };
};
export const signUpInFailure = payload => {
  return {
    type: SIGN_UP_IN_FAILURE,
    payload: payload,
  };
};
export const RegisterOtpInProgress = payload => {
  return {
    type: REGISTER_OTP_IN_PROGRESS,
    payload: payload,
  };
};
export const RegisterOtpSuccess = payload => {
  return {
    type: REGISTER_OTP_IN_SUCCESS,
    payload: payload,
  };
};
export const RegisterOtpFailure = payload => {
  return {
    type: REGISTER_OTP_IN_FAILURE,
    payload: payload,
  };
};
export const ForgetPasswordInProgress = payload => {
  return {
    type: FORGOT_PASSWORD_IN_PROGRESS,
    payload: payload,
  };
};
export const ForgetPasswordSuccess = payload => {
  return {
    type: FORGOT_PASSWORD_IN_SUCCESS,
    payload: payload,
  };
};
export const ForgetPasswordFailure = payload => {
  return {
    type: FORGOT_PASSWORD_IN_FAILURE,
    payload: payload,
  };
};
export const RequestOtpInProgress = payload => {
  return {
    type: REQUEST_OTP_IN_PROGRESS,
    payload: payload,
  };
};
export const RequestOtpSuccess = payload => {
  return {
    type: REQUEST_OTP_IN_SUCCESS,
    payload: payload,
  };
};
export const RequestOtpFailure = payload => {
  return {
    type: REQUEST_OTP_IN_FAILURE,
    payload: payload,
  };
};
export const ResendOtpInProgress = payload => {
  return {
    type: RESEND_OTP_IN_PROGRESS,
    payload: payload,
  };
};
export const ResendOtpSuccess = payload => {
  return {
    type: RESEND_OTP_IN_SUCCESS,
    payload: payload,
  };
};
export const ResendOtpFailure = payload => {
  return {
    type: RESEND_OTP_IN_FAILURE,
    payload: payload,
  };
};

export const ResetState = () => {
  console.log("reset");
  return {
    type: RESET_STATE,
  };
};