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
  ValidateOtpFailure,
  ValidateOtpSuccess,
} from './authAction';
import {
  AuthEffect,
  ForgetPasswordEffect,
  RegisterOtpEffect,
  RequestOtpEffect,
  ResendOtpEffect,
  SignUpEffect,
  ValidOtpEffect,
} from './autheffect';
import {
  FORGOT_PASSWORD_IN_PROGRESS,
  REGISTER_OTP_IN_PROGRESS,
  REQUEST_LOGIN_IN_PROGRESS,
  REQUEST_OTP_IN_PROGRESS,
  RESEND_OTP_IN_PROGRESS,
  SIGN_UP_IN_PROGRESS,
  VALIDATE_OTP_IN_PROGRESS,
} from './authTypes';

function* LoginWatcher({ payload }) {
  console.log('SAGA', payload);
  try {
    let {data} = yield call(AuthEffect, payload);
console.log(data); 
const { user, accessToken, refreshToken } = data;
console.log("User:", user);
console.log("Access Token:", accessToken);
console.log("Refresh Token:", refreshToken);
const { 
  address, 
  contact, 
  created_at, 
  email, 
  first_name, 
  last_name, 
  user_type, 
  vendor_id, 
  vendor_serial_no,
  customer_id,
  customer_serial_no
} = user;

console.log("Address:", address);
console.log("Contact:", contact);
console.log("Created At:", created_at);
console.log("Email:", email);
console.log("First Name:", first_name);
console.log("Last Name:", last_name);
console.log("User Type:", user_type);
console.log("Vendor ID:", vendor_id);
console.log("Vendor Serial No:", vendor_serial_no);
console.log("customer Id:", customer_id);
    console.log('User  Data:', user.vendor_id);
    console.log('Access Token:', accessToken);
    console.log('Refresh Token:', refreshToken);
    setAuthHeader(accessToken,refreshToken,user_type,vendor_id,vendor_serial_no,user.customer_id,customer_serial_no,first_name,email);
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
    console.log('SignUp Data:', data);
    yield put(
      signUpInSuccess({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    console.error('SignUp Error:', err);
    yield put(
      signUpInFailure(err),
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
function* ValidOtpWatcher({payload}) {
  try {
    let {data} = yield call(ValidOtpEffect, payload);
    console.log('Validate Otp Data:', data);
    yield put(
      ValidateOtpSuccess  ({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    console.log('Validate Otp Error:', err.message);
    yield put(
      ValidateOtpFailure(err),
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
  yield takeLatest(VALIDATE_OTP_IN_PROGRESS, ValidOtpWatcher);
  yield takeLatest(RESEND_OTP_IN_PROGRESS, ResendOtpWatcher);
}
