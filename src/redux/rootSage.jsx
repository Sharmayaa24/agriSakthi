import AuthSaga from './auth/authSaga';
import {all} from 'redux-saga/effects';
import vendorSaga from './Vendor/vendorSage';
import customerSaga from './Customer/CustomerSaga';
import walletSage from './wallet/walletSage';

function* rootSaga() {
  yield all([AuthSaga(),vendorSaga(),customerSaga(),walletSage()]);
}
export default rootSaga;
