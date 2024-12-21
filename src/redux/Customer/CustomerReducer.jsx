import { CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_PROGRESS, CUSTOMER_ADD_SUCCESS, CUSTOMER_DELETE_FAILURE, CUSTOMER_DELETE_PROGRESS, CUSTOMER_DELETE_SUCCESS, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_PROGRESS, CUSTOMER_UPDATE_SUCCESS } from "./CustomerType";
import { defaultStatus } from "../../screen/common/Dialogbox";
const initialState = {
  addCustomer: { ...defaultStatus },
  updateCustomer: { ...defaultStatus },
  viewAllCustomer: { ...defaultStatus },
  ViewCustomer: { ...defaultStatus },
  deleteCustomer    : { ...defaultStatus },
};

export const CustomerReducer= (state = initialState, action) => {
    switch (action.type) {
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
                    error:false,
                    data:action.payload
                }
            }
            case CUSTOMER_ADD_FAILURE:
                return {
                    ...state,
                    addCustomerState:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        }
                    }
            case CUSTOMER_UPDATE_PROGRESS:
                return {
                    ...state,
                    updateCustomerState: { ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case CUSTOMER_UPDATE_SUCCESS:
                return {
                    ...state,
                    updateCustomerState:{ ...defaultStatus,
                        inProgress: false,
                        success: true,
                        error:false,
                        data:action.payload
                        }
                }
            case CUSTOMER_UPDATE_FAILURE:
                return {
                    ...state,
                    updateCustomerState:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage:action.payload
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
                        data:action.payload
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
            default:
                return state;
    }
};