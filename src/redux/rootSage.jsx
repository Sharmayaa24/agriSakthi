import AuthSaga from './auth/authSaga';
import {all} from 'redux-saga/effects';
import vendorSaga from './Vendor/vendorSage';
import customerSaga from './Customer/CustomerSaga';
import walletSage from './wallet/walletSage';
import transactionSaga from './transaction/transactionSaga';

function* rootSaga() {
  yield all(
    [AuthSaga(),
    vendorSaga(),
    customerSaga(),
    walletSage(),
    transactionSaga()]);
}
export default rootSaga;
