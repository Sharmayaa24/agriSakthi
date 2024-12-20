import {combineReducers} from 'redux';
import AuthReducer from './auth/authReducer';
import VendorReducer from './Vendor/vendorReducer';

const rootReducer = combineReducers({
  login: AuthReducer,
  vendor:VendorReducer
});

export default rootReducer;
