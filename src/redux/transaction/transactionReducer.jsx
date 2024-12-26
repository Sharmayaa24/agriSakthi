import {
    TRANSACTION_ADD_SUCCESS,
    TRANSACTION_ADD_FAILURE,
    TRANSACTION_ADD_PROGRESS,
    TRANSACTION_UPDATE_SUCCESS,
    TRANSACTION_UPDATE_FAILURE,
    TRANSACTION_UPDATE_PROGRESS,
    TRANSACTION_DELETE_SUCCESS,
    TRANSACTION_DELETE_FAILURE,
    TRANSACTION_DELETE_PROGRESS,
    TRANSACTION_VIEW_SUCCESS,
    TRANSACTION_VIEW_FAILURE,
    TRANSACTION_VIEW_PROGRESS,
    TRANSACTION_PARTICULAR_VIEW_SUCCESS,
    TRANSACTION_PARTICULAR_VIEW_FAILURE,
    TRANSACTION_PARTICULAR_VIEW_PROGRESS,
    TRANSACTION_RESET_STATE,
  } from './transactionType';
  import {defaultStatus} from '../../screen/common/Dialogbox';
  
  const initialState = {
    addTransaction: {...defaultStatus},
    updateTransaction: {...defaultStatus},
    viewTransactions: {...defaultStatus},
    particularViewTransaction: {...defaultStatus},
    deleteTransaction: {...defaultStatus},
  };
  
  const TransactionReducer = (state = initialState, action) => {
    const {type, payload} = action;
    console.log(type)
    console.log(payload)
    switch (type) {
      case TRANSACTION_ADD_SUCCESS:
        return {
          ...state,
          addTransaction: {
            ...defaultStatus,
            success: true,
            errormessage: '',
            message: payload?.message,
            data: payload.data,
          },
        };      
       case TRANSACTION_ADD_FAILURE:
        return {
          ...state,
          addTransaction: {
            ...defaultStatus,
            success: false,
            error: true,
            errormessage: payload
          },
        };
      case TRANSACTION_ADD_PROGRESS:
        return {
          ...state,
          addTransaction: {
            ...defaultStatus,
            inProgress: true
          }
        };
      case TRANSACTION_UPDATE_SUCCESS:
        return {
          ...state,
          updateTransaction: {
            ...defaultStatus,
            success: true,
            errormessage: '',
            message: payload
          },
        };
      case TRANSACTION_UPDATE_FAILURE:
        return {
          ...state,
          updateTransaction: {
            ...defaultStatus,
            inProgress: false,
            success: false,
            error: true,
            errormessage: payload
          },
        };
      case TRANSACTION_UPDATE_PROGRESS:
        return {
          ...state,
          updateTransaction: {
            ...defaultStatus,
            inProgress: true
          }
        };
      case TRANSACTION_DELETE_SUCCESS:
        return {
          ...state,
          deleteTransaction: {
            ...defaultStatus,
            success: true,
            message: payload
          },
        };
      case TRANSACTION_DELETE_FAILURE:
        return {
          ...state,
          deleteTransaction: {
            ...defaultStatus,
            error: true,
            errormessage: payload
          },
        };
      case TRANSACTION_DELETE_PROGRESS:
        return {
          ...state,
          deleteTransaction: {
            ...defaultStatus,
            inProgress: true
          }
        };
      case TRANSACTION_VIEW_SUCCESS:
        return {
          ...state,
          viewTransactions: {
            ...defaultStatus,
            success: payload.success,
            data: payload.data,
          },
        };
      case TRANSACTION_VIEW_FAILURE:
        return {
          ...state,
          viewTransactions: {
            ...defaultStatus,
            error: true,
            message: payload
          },
        };
      case TRANSACTION_VIEW_PROGRESS:
        return {
          ...state,
          viewTransactions: {
            ...defaultStatus,
            inProgress: true
          }
        };
      case TRANSACTION_PARTICULAR_VIEW_SUCCESS:
        return {
          ...state,
          particularViewTransaction: {
            ...defaultStatus,
            success: true,
            data: payload.data,
          },
        };
      case TRANSACTION_PARTICULAR_VIEW_FAILURE:
        return {
          ...state,
          particularViewTransaction: {
            ...defaultStatus,
            error: true,
            message: payload,
          },
        };
      case TRANSACTION_PARTICULAR_VIEW_PROGRESS:
        return {
          ...state,
          particularViewTransaction: {
            ...defaultStatus,
            inProgress: true
          },
        };
      case TRANSACTION_RESET_STATE:
        return {
          ...state,
          addTransaction: {
            ...defaultStatus,
            success: false,
            error: false,
            message: '',
            errormessage: '',
            inProgress: false,
          },
        };
  
      default:
        return state;
    }
  };
  export default TransactionReducer;