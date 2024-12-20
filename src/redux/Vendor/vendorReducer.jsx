import {
  VENDOR_ADD_SUCCESS,
  VENDOR_ADD_FAILURE,
  VENDOR_ADD_PROGRESS,
  VENDOR_UPDATE_SUCCESS,
  VENDOR_UPDATE_FAILURE,
  VENDOR_UPDATE_PROGRESS,
  VENDOR_DELETE_SUCCESS,
  VENDOR_DELETE_FAILURE,
  VENDOR_DELETE_PROGRESS,
  VENDOR_VIEW_SUCCESS,
  VENDOR_VIEW_FAILURE,
  VENDOR_VIEW_PROGRESS,
  VENDOR_PARTICULAR_VIEW_SUCCESS,
  VENDOR_PARTICULAR_VIEW_FAILURE,
  VENDOR_PARTICULAR_VIEW_PROGRESS,
  VENDOR_RESET_STATE,
} from "./vendorType";
import { defaultStatus } from "../../screen/common/Dialogbox";

const initialState = {
  addVendor: { ...defaultStatus },
  updateVendor: { ...defaultStatus },
  viewVendors: { ...defaultStatus },
  particularViewVendor: { ...defaultStatus },
  deleteVendor: { ...defaultStatus },
};

const VendorReducer = (state = initialState, action) => {
  const { type, payload } = action;
 
  console.log(`type`);
  console.log(type,payload);

  switch (type) {
    case VENDOR_ADD_SUCCESS:
      return {
        ...state,
        addVendor: { ...defaultStatus, success: true ,errormessage:"", message: payload },
      };
    case VENDOR_ADD_FAILURE:
      return {
        ...state,
        addVendor: { ...defaultStatus, error: true, errormessage: payload },
      };
    case VENDOR_ADD_PROGRESS:
      return { ...state, addVendor: { ...defaultStatus, inProgress: true } };
    case VENDOR_UPDATE_SUCCESS:
      return {
        ...state,
        updateVendor: { ...defaultStatus, success: true, message: payload },
      };
    case VENDOR_UPDATE_FAILURE:
      return {
        ...state,
        updateVendor: { ...defaultStatus, error: true, errormessage: payload  },
      };
    case VENDOR_UPDATE_PROGRESS:
      return { ...state, updateVendor: { ...defaultStatus, inProgress: true, message: payload  } };
    case VENDOR_DELETE_SUCCESS:
      return {
        ...state,
        deleteVendor: { ...defaultStatus, success: true, message: payload },
      };
    case VENDOR_DELETE_FAILURE:
      return {
        ...state,
        deleteVendor: { ...defaultStatus, error: true, errormessage: payload },
      };
    case VENDOR_DELETE_PROGRESS:
      return { ...state, deleteVendor: { ...defaultStatus, inProgress: true } };
    case VENDOR_VIEW_SUCCESS: 
      return {
        ...state,
        viewVendors: {
          ...defaultStatus,
          success: payload.success,
          data: payload.data,
        },
      };
    case VENDOR_VIEW_FAILURE:
      return {
        ...state,
        viewVendor: { ...defaultStatus, error: true, message: payload },
      };
    case VENDOR_VIEW_PROGRESS:
      return { ...state, viewVendor: { ...defaultStatus, inProgress: true } };
    case VENDOR_PARTICULAR_VIEW_SUCCESS:
      return {
        ...state,
        particularViewVendor: {
          ...defaultStatus,
          success: true,
          data: payload.data,
        },
      };
    case VENDOR_PARTICULAR_VIEW_FAILURE:
      return {
        ...state,
        particularViewVendor: {
          ...defaultStatus,
          error: true,
          message: payload,
        },
      };
    case VENDOR_PARTICULAR_VIEW_PROGRESS:
      return {
        ...state,
        particularViewVendor: { ...defaultStatus, inProgress: true },
      };
    case VENDOR_RESET_STATE:
      return {
        ...state,
        addVendor: { ...defaultStatus,success: false,
          error: false,
          message: '',
          errormessage: '',
          inProgress: false },
      };

    default:
      return state;
  }
};
export default VendorReducer;
