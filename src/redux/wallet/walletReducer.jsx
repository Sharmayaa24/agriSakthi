import { WALLET_ADD_FAILURE, WALLET_ADD_PROGRESS, WALLET_ADD_SUCCESS, WALLET_DELETE_FAILURE, WALLET_DELETE_PROGRESS, WALLET_DELETE_SUCCESS, WALLET_PARTICULAR_VIEW_FAILURE, WALLET_PARTICULAR_VIEW_PROGRESS, WALLET_PARTICULAR_VIEW_SUCCESS, WALLET_RESET_STATE, WALLET_UPDATE_FAILURE, WALLET_UPDATE_PROGRESS, WALLET_UPDATE_SUCCESS, WALLET_VIEW_FAILURE, WALLET_VIEW_PROGRESS, WALLET_VIEW_SUCCESS } from "./walletType";
import { defaultStatus } from "../../screen/common/Dialogbox";
const initialState = {
  addWallet: { ...defaultStatus },
  updateWallet: { ...defaultStatus },
  viewAllWallet: { ...defaultStatus },
  ViewWallet: { ...defaultStatus },
  deleteWallet    : { ...defaultStatus },
};

export const WalletReducer= (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case WALLET_ADD_PROGRESS:
            return {
                ...state,
                addWallet: { ...defaultStatus,
                    inProgress: true,
                    success: false,
                    error:false,
                }
            }
        case WALLET_ADD_SUCCESS:
            return {
                ...state,
                addWallet:{ ...defaultStatus,
                    inProgress: false,
                    success: true,
                    errormessage: '',
                    message: payload,
                }
            }
            case WALLET_ADD_FAILURE:
                return {
                    ...state,
                    addWallet:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage: payload
                        }
                    }
            case WALLET_UPDATE_PROGRESS:
                return {
                    ...state,
                    updateWallet: { ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case WALLET_UPDATE_SUCCESS:
                return {
                    ...state,
                    updateWallet:{ ...defaultStatus,
                        inProgress: false,
                        success: true,
                        errormessage: false,
                        message: payload
                        }
                }
            case WALLET_UPDATE_FAILURE:
                return {
                    ...state,
                    updateWallet:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage:payload
                        }
                }
            case WALLET_DELETE_PROGRESS:
                return {
                    ...state,
                    deleteWallet: { ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case WALLET_DELETE_SUCCESS:
                return {
                    ...state,
                    deleteWallet:{ ...defaultStatus,
                        inProgress: false,
                        success: true,
                        error:false,
                        message:payload
                        }
                    }
            case WALLET_DELETE_FAILURE:
                return {
                    ...state,
                    deleteWallet:{ ...defaultStatus,
                        inProgress: false,
                        success: false,
                        error:true,
                        errormessage:action.payload
                        }
                    }
            case WALLET_VIEW_PROGRESS:
                return {
                    ...state,
                    viewAllWallet:{ ...defaultStatus,
                        ...defaultStatus,
                        inProgress: true
                    }
                }
            case WALLET_VIEW_SUCCESS:
                return {
                    ...state,
                    viewAllWallet:{ ...defaultStatus,
                        success: payload.success,
                        data: payload.data,
                        }
                    }
            case WALLET_VIEW_FAILURE:
                return {
                    ...state,
                    viewAllWallet:{ ...defaultStatus,
                        error: true, 
                        message: payload
                    }
                }
            case WALLET_PARTICULAR_VIEW_PROGRESS:
                return {
                    ...state,
                    ViewWallet:{ ...defaultStatus,
                        inProgress: true,
                        success: false,
                        error:false,
                        }
                    }
            case WALLET_PARTICULAR_VIEW_SUCCESS:
                return {
                    ...state,
                    ViewWallet:{ ...defaultStatus,
                        inProgress: false,
                        success:true,
                        error:false,
                        data: payload.data
                    }
                }
            case WALLET_PARTICULAR_VIEW_FAILURE:
                return {
                    ...state,
                    ViewWallet:{ ...defaultStatus,
                        inProgress: false,
                        success:false,
                        message:payload
                    }
                }
            case WALLET_RESET_STATE:
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