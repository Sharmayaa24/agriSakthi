import { CUSTOMER_ADD_FAILURE, CUSTOMER_ADD_PROGRESS, CUSTOMER_ADD_SUCCESS, CUSTOMER_DELETE_FAILURE, CUSTOMER_DELETE_PROGRESS, CUSTOMER_DELETE_SUCCESS, CUSTOMER_PARTICULAR_VIEW_FAILURE, CUSTOMER_PARTICULAR_VIEW_PROGRESS, CUSTOMER_PARTICULAR_VIEW_SUCCESS, CUSTOMER_UPDATE_FAILURE, CUSTOMER_UPDATE_PROGRESS, CUSTOMER_UPDATE_SUCCESS, CUSTOMER_VIEW_FAILURE, CUSTOMER_VIEW_PROGRESS, CUSTOMER_VIEW_SUCCESS } from "./CustomerType";


export const addCustomerProgress = (payload) => {
    console.log(payload)
    return {
    type: CUSTOMER_ADD_PROGRESS,
    payload,
    };
};

export const addCustomerSuccess = (payload) => {
    console.log(payload)
    return {
    type: CUSTOMER_ADD_SUCCESS,
    payload,
    };
};

export const addCustomerFailure = (payload) => {
    console.log(payload)
    return {
    type: CUSTOMER_ADD_FAILURE,
    payload,
    };
};

export const updateCustomerProgress = (payload) => {
    console.log(payload)
    return {
    type: CUSTOMER_UPDATE_PROGRESS,
    payload,
    };
};

export const updateCustomerSuccess = (payload) => {
    return {
    type: CUSTOMER_UPDATE_SUCCESS,
    payload,
    };
};

export const updateCustomerFailure = (payload) => {
    return {
    type: CUSTOMER_UPDATE_FAILURE,
    payload,
    };
};

export const viewAllCustomerProgress = (payload) => {
    return {
    type: CUSTOMER_VIEW_PROGRESS,
    payload,
    };
};

export const viewAllCustomerSuccess = (payload) => {
    return {
    type: CUSTOMER_VIEW_SUCCESS,
    payload,
    };
};

export const viewAllCustomerFailure = (payload) => {
    return {
    type: CUSTOMER_VIEW_FAILURE,
    payload,
    };
};

export const viewCustomerProgress = (payload) => {
    return {
    type: CUSTOMER_PARTICULAR_VIEW_PROGRESS,
    payload,
    };
};

export const viewCustomerSuccess = (payload) => {
    console.log(payload)
    return {
    type: CUSTOMER_PARTICULAR_VIEW_SUCCESS,
    payload,
    };
};

export const viewCustomerFailure = (payload) => {
    return {
    type: CUSTOMER_PARTICULAR_VIEW_FAILURE,
    payload,
    };
};

export const deleteCustomerProgress = (payload) => {
    return {
    type: CUSTOMER_DELETE_PROGRESS,
    payload,
    };
};

export const deleteCustomerSuccess = (payload) => {
    return {
    type: CUSTOMER_DELETE_SUCCESS,
    payload,
    };
};

export const deleteCustomerFailure = (payload) => {
    return {
    type: CUSTOMER_DELETE_FAILURE,
    payload,
    };
};