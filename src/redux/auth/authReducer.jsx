import {defaultStatus} from '../../screen/common/Dialogbox';
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
} from './authTypes';

const initialState = {
  user: {authInProgress: false, authSuccess: false, authError: false},
  NewUser: {...defaultStatus},
  registertOtp: {...defaultStatus},
  ForgetPassword: {...defaultStatus},
  requestOtp: {...defaultStatus},
  resendOtp: {...defaultStatus},
};

const AuthReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case REQUEST_LOGIN_IN_PROGRESS:
      return {
        ...state,
        user: {...payload, authInProgress: true},
      };
    case REQUEST_LOGIN_IN_SUCCESS:
      return {
        ...state,
        user: {...payload, authSuccess: true},
      };
    case REQUEST_LOGIN_IN_FAILURE:
      return {
        ...state,
        user: {...payload, authSuccess: false, authError: true},
      };
    case SIGN_UP_IN_PROGRESS:
      return {
        ...state,
        NewUser: {...defaultStatus, ...payload, inProgress: true},
      };
    case SIGN_UP_IN_SUCCESS:
      return {
        ...state,
        NewUser: {...defaultStatus, ...payload, success: true},
      };
    case SIGN_UP_IN_FAILURE:
      return {
        ...state,
        NewUser: {
          ...defaultStatus,
          ...payload,
          error: true,
        },
      };
    case REGISTER_OTP_IN_PROGRESS:
      return {
        ...state,
        registertOtp: {...defaultStatus, ...payload, inProgress: true},
      };
    case REGISTER_OTP_IN_SUCCESS:
      return {
        ...state,
        registertOtp: {...defaultStatus, ...payload, success: true},
      };
    case REGISTER_OTP_IN_FAILURE:
      return {
        ...state,
        registertOtp: {...defaultStatus, ...payload, error: true},
      };
    case FORGOT_PASSWORD_IN_PROGRESS:
      console.log('Forgot pswd REDUCER', payload);
      return {
        ...state,
        ForgetPassword: {...defaultStatus, ...payload, inProgress: true},
      };
    case FORGOT_PASSWORD_IN_SUCCESS:
      return {
        ...state,
        ForgetPassword: {...defaultStatus, ...payload, success: true},
      };
    case FORGOT_PASSWORD_IN_FAILURE:
      return {
        ...state,
        ForgetPassword: {...defaultStatus, ...payload, error: true},
      };
    case REQUEST_OTP_IN_PROGRESS:
      return {
        ...state,
        requestOtp: {...defaultStatus, ...payload, inProgress: true},
      };
    case REQUEST_OTP_IN_SUCCESS:
      return {
        ...state,
        requestOtp: {...defaultStatus, ...payload, success: true},
      };
    case REQUEST_OTP_IN_FAILURE:
      return {
        ...state,
        requestOtp: {...defaultStatus, ...payload, error: true},
      };
    case RESEND_OTP_IN_PROGRESS:
      return {
        ...state,
        resendOtp: {...defaultStatus, ...payload, inProgress: true},
      };
    case RESEND_OTP_IN_SUCCESS:
      return {
        ...state,
        resendOtp: {...defaultStatus, ...payload, success: true},
      };
    case RESEND_OTP_IN_FAILURE:
      return {
        ...state,
        resendOtp: {...defaultStatus, ...payload, error: true},
      };
    default:
      return state;
  }
};
export default AuthReducer;
