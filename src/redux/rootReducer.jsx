import {combineReducers} from 'redux';
import AuthReducer from './auth/authReducer';
import VendorReducer from './Vendor/vendorReducer';
import  {CustomerReducer}  from './Customer/CustomerReducer';
import { WalletReducer } from './wallet/walletReducer';
import TransactionReducer  from './transaction/transactionReducer';

const rootReducer = combineReducers({
  login: AuthReducer,
  vendor:VendorReducer,
  customer:CustomerReducer,
  wallet:WalletReducer,
  transaction:TransactionReducer,
});

export default rootReducer;
