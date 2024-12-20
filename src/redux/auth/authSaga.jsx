import {call, put, takeLatest} from 'redux-saga/effects';
import { setAuthHeader } from "../../Styles/ComponentStyles/formStyles"
import {
  ForgetPasswordFailure,
  ForgetPasswordSuccess,
  logInFailure,
  logInSuccess,
  RegisterOtpFailure,
  RegisterOtpSuccess,
  RequestOtpFailure,
  RequestOtpSuccess,
  ResendOtpFailure,
  ResendOtpSuccess,
  signUpInFailure,
  signUpInSuccess,
} from './authAction';
import {
  AuthEffect,
  ForgetPasswordEffect,
  RegisterOtpEffect,
  RequestOtpEffect,
  ResendOtpEffect,
  SignUpEffect,
} from './autheffect';
import {
  FORGOT_PASSWORD_IN_PROGRESS,
  REGISTER_OTP_IN_PROGRESS,
  REQUEST_LOGIN_IN_PROGRESS,
  REQUEST_OTP_IN_PROGRESS,
  RESEND_OTP_IN_PROGRESS,
  SIGN_UP_IN_PROGRESS,
} from './authTypes';

function* LoginWatcher({ payload }) {
  console.log('SAGA', payload);
  try {
    let {data} = yield call(AuthEffect, payload);
   console.log(data); 
    const { user, accessToken, refreshToken } = data; 
    console.log('User  Data:', user);
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);
    setAuthHeader(accessToken,refreshToken);
    yield put(
      logInSuccess({
        data: data,
        message: data['message'],
        authSuccess: true,
      }),
    );
  } catch (error) {
    console.error('Login error:', error);
    yield put(
      logInFailure({
        authError: true,
        message: error.message || 'An error occurred during login.',
      }),
    );
  }
}

function* SignUpWatcher({payload}) {
  try {
    let {data} = yield call(SignUpEffect, payload);
    yield put(
      signUpInSuccess({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      signUpInFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}
function* RegisterOtpWatcher({payload}) {
  try {
    let {data} = yield call(RegisterOtpEffect, payload);
    yield put(
      RegisterOtpSuccess({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      RegisterOtpFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}
function* ForgetPasswordWatcher({payload}) {
  console.log('Forgot pswd Saga', payload);
  try {
    let {data} = yield call(ForgetPasswordEffect, payload);
    console.log("")
    yield put(
      ForgetPasswordSuccess({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      ForgetPasswordFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}
function* RequestOtpWatcher({payload}) {
  try {
    let {data} = yield call(RequestOtpEffect, payload);
    yield put(
      RequestOtpSuccess({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      RequestOtpFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}
function* ResendOtpWatcher({payload}) {
  try {
    let {data} = yield call(ResendOtpEffect, payload);
    yield put(
      ResendOtpSuccess({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      ResendOtpFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}
export default function* AuthSaga() {
  yield takeLatest(REQUEST_LOGIN_IN_PROGRESS, LoginWatcher);
  yield takeLatest(SIGN_UP_IN_PROGRESS, SignUpWatcher);
  yield takeLatest(REGISTER_OTP_IN_PROGRESS, RegisterOtpWatcher);
  yield takeLatest(FORGOT_PASSWORD_IN_PROGRESS, ForgetPasswordWatcher);
  yield takeLatest(REQUEST_OTP_IN_PROGRESS, RequestOtpWatcher);
  yield takeLatest(RESEND_OTP_IN_PROGRESS, ResendOtpWatcher);
}
