import AuthSaga from './auth/authSaga';
import {all} from 'redux-saga/effects';
import vendorSaga from './Vendor/vendorSage';
import customerSaga from './Customer/CustomerSaga';

function* rootSaga() {
  yield all([AuthSaga(),vendorSaga(),customerSaga()]);
}
export default rootSaga;
