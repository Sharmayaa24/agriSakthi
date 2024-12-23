import {combineReducers} from 'redux';
import AuthReducer from './auth/authReducer';
import VendorReducer from './Vendor/vendorReducer';
import  {CustomerReducer}  from './Customer/CustomerReducer';

const rootReducer = combineReducers({
  login: AuthReducer,
  vendor:VendorReducer,
  customer:CustomerReducer,
});

export default rootReducer;
