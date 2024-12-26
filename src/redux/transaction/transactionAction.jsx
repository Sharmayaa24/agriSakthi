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
    TRANSACTION_RESET_STATE
  } from './transactionType';
  
  export const addTransactionProgress = (payload) => {
  
    return {
      type: TRANSACTION_ADD_PROGRESS,
      payload,
    };
  };
  
  export const addTransactionSuccess = (payload) => {
    console.log(payload)
    return {
      type: TRANSACTION_ADD_SUCCESS,
      payload,
    };
  };
  
  export const addTransactionFailure = (payload) => {
    return {
      type: TRANSACTION_ADD_FAILURE,
      payload,
    };
  };
  
  export const updateTransaction = (payload) => {
    return {
      type: TRANSACTION_UPDATE_SUCCESS,
      payload: payload
    };
  };
  
  export const updateTransactionProgress = (payload) => {
    return {
      type: TRANSACTION_UPDATE_PROGRESS,
      payload: payload
    };
  };
  
  export const updateTransactionFailure = (payload) => {
    return {
      type: TRANSACTION_UPDATE_FAILURE,
      payload: payload
    };
  };
  
  export const deleteTransaction = (payload) => {
    console.log(payload, "success")
    return {
      type: TRANSACTION_DELETE_SUCCESS,
      payload: payload
    };
  };
  
  export const deleteTransactionProgress = (payload) => {
    return {
      type: TRANSACTION_DELETE_PROGRESS,
      payload: payload
    };
  };
  
  export const deleteTransactionFailure = (payload) => {
    return {
      type: TRANSACTION_DELETE_FAILURE,
      payload: payload
    };
  };
  
  export const viewTransaction = (payload) => {
    return {
      type: TRANSACTION_VIEW_SUCCESS,
      payload: payload
    };
  };
  
  export const viewTransactionProgress = (payload) => {
    return {
      type: TRANSACTION_VIEW_PROGRESS,
      payload: payload
    };
  };
  
  export const viewTransactionFailure = (payload) => {
    return {
      type: TRANSACTION_VIEW_FAILURE,
      payload: payload
    };
  };
  
  export const viewParticularTransaction = (payload) => {
    return {
      type: TRANSACTION_PARTICULAR_VIEW_SUCCESS,
      payload: payload
    };
  };
  
  export const viewParticularTransactionProgress = (payload) => {
    return {
      type: TRANSACTION_PARTICULAR_VIEW_PROGRESS,
      payload: payload
    };
  };
  
  export const viewParticularTransactionFailure = (payload) => {
    return {
      type: TRANSACTION_PARTICULAR_VIEW_FAILURE,
      payload: payload
    };
  };
  
  export const resetTransactionState = () => ({
    type: TRANSACTION_RESET_STATE,
  });