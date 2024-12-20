import AuthSaga from './auth/authSaga';
import {all} from 'redux-saga/effects';
import vendorSaga from './Vendor/vendorSage';

function* rootSaga() {
  yield all([AuthSaga(),vendorSaga()]);
}
export default rootSaga;
