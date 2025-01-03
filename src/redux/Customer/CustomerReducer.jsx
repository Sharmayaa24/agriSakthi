import { CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_PROGRESS, CUSTOMER_ADD_SUCCESS, CUSTOMER_DELETE_FAILURE, CUSTOMER_DELETE_PROGRESS, CUSTOMER_DELETE_SUCCESS, CUSTOMER_PARTICULAR_VIEW_FAILURE, CUSTOMER_PARTICULAR_VIEW_PROGRESS, CUSTOMER_PARTICULAR_VIEW_SUCCESS, CUSTOMER_RESET_STATE, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_PROGRESS, CUSTOMER_UPDATE_SUCCESS, CUSTOMER_VIEW_FAILURE, CUSTOMER_VIEW_PROGRESS, CUSTOMER_VIEW_SUCCESS } from "./CustomerType";
import { defaultStatus } from "../../screen/common/Dialogbox";
const initialState = {
  addCustomer: { ...defaultStatus },
  updateCustomer: { ...defaultStatus },
  viewAllCustomer: { ...defaultStatus },
  ViewCustomer: { ...defaultStatus },
  deleteCustomer    : { ...defaultStatus },
};

export const CustomerReducer= (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CUSTOMER_ADD_PROGRESS:
            return {
                ...state,
                addCustomerState: { ...defaultStatus,
                    inProgress: true,
                    success: false,
                    error:false,
                }
            }
        case CUSTOMER_ADD_SUCCESS:
            return {
                ...state,
                addCustomerState:{ ...defaultStatus,
                    inProgress: false,
                    success: true,
                    errormessage: '',
                    message: payload,
                }
            }
            case CUSTOMER_ADD_FAILURE:
                return {
                    ...state,
                    addCustomerState:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage: payload
                        }
                    }
            case CUSTOMER_UPDATE_PROGRESS:
                return {
                    ...state,
                    updateCustomer: { ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case CUSTOMER_UPDATE_SUCCESS:
                return {
                    ...state,
                    updateCustomer:{ ...defaultStatus,
                        inProgress: false,
                        success: true,
                        errormessage: false,
                        message: payload
                        }
                }
            case CUSTOMER_UPDATE_FAILURE:
                return {
                    ...state,
                    updateCustomer:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage:payload
                        }
                }
            case CUSTOMER_DELETE_PROGRESS:
                return {
                    ...state,
                    deleteCustomerState: { ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case CUSTOMER_DELETE_SUCCESS:
                return {
                    ...state,
                    deleteCustomerState:{ ...defaultStatus,
                        inProgress: false,
                        success: true,
                        error:false,
                        message:payload
                        }
                    }
            case CUSTOMER_DELETE_FAILURE:
                return {
                    ...state,
                    deleteCustomerState:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage:action.payload
                        }
                    }
            case CUSTOMER_VIEW_PROGRESS:
                return {
                    ...state,
                    viewAllCustomer:{ ...defaultStatus,
                        ...defaultStatus,
                        inProgress: true
                    }
                }
            case CUSTOMER_VIEW_SUCCESS:
                return {
                    ...state,
                    viewAllCustomer:{ ...defaultStatus,
                        success: payload.success,
                        data: payload.data,
                        }
                    }
            case CUSTOMER_VIEW_FAILURE:
                return {
                    ...state,
                    viewAllCustomer:{ ...defaultStatus,
                        error: true, 
                        message: payload
                    }
                }
            case CUSTOMER_PARTICULAR_VIEW_PROGRESS:
                return {
                    ...state,
                    ViewCustomer:{ ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case CUSTOMER_PARTICULAR_VIEW_SUCCESS:
                return {
                    ...state,
                    ViewCustomer:{ ...defaultStatus,
                        inProgress: false,
                        success:true,
                        error:false,
                        data: payload.data
                    }
                }
            case CUSTOMER_PARTICULAR_VIEW_FAILURE:
                return {
                    ...state,
                    ViewCustomer:{ ...defaultStatus,
                        inProgress: false,
                        success:false,
                        message:payload
                    }
                }
            case CUSTOMER_RESET_STATE:
                return { ...defaultStatus, 
                    inProgress:false,
                    success:false,
                    error:false,
                    data:[],
                    message:'',
                    
                };
            default:
                return state;
    }
};