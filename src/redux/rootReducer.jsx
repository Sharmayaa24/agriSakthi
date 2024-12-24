import {combineReducers} from 'redux';
import AuthReducer from './auth/authReducer';
import VendorReducer from './Vendor/vendorReducer';
import  {CustomerReducer}  from './Customer/CustomerReducer';
import { WalletReducer } from './wallet/walletReducer';

const rootReducer = combineReducers({
  login: AuthReducer,
  vendor:VendorReducer,
  customer:CustomerReducer,
  wallet:WalletReducer,
});

export default rootReducer;
