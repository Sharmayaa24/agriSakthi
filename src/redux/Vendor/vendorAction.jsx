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
    VENDOR_RESET_STATE
} from './vendorType';

export const addVendorProgress = (payload) => {
    return {
    type: VENDOR_ADD_PROGRESS,
    payload,
    };
};

export const addVendorSuccess = (payload) => {
    return {
    type: VENDOR_ADD_SUCCESS,
    payload,
    };
};

export const addVendorFailure = (payload) => {
    return {
    type: VENDOR_ADD_FAILURE,
    payload,
    };
};

export const updateVendor = (payload) => {
    console.log(payload,"success")
    return {
        type: VENDOR_UPDATE_SUCCESS,
        payload: payload
    };
};

export const updateVendorProgress = (payload) => {
    console.log(payload,"process")
    return {
        type: VENDOR_UPDATE_PROGRESS,
        payload: payload
    };
};

export const updateVendorFailure = (payload) => {
    console.log(payload,"failure")
    return {
        type: VENDOR_UPDATE_FAILURE,
        payload: payload
    };
};

export const deleteVendor = (payload) => {
    console.log(payload,"success")
    return {
        type: VENDOR_DELETE_SUCCESS,
        payload: payload
    };
};

export const deleteVendorProgress = (payload) => {
    
    return {
        type: VENDOR_DELETE_PROGRESS,
        payload: payload
    };
};

export const deleteVendorFailure = (payload) => {
    return {
        type: VENDOR_DELETE_FAILURE,
        payload: payload
    };
};

export const viewVendor = (payload) => {
    return {
        type: VENDOR_VIEW_SUCCESS,
        payload: payload
    };
};

export const viewVendorProgress = (payload) => {
    return {
        type: VENDOR_VIEW_PROGRESS,
        payload: payload
    };
};

export const viewVendorFailure = (payload) => {    
    return {
        type: VENDOR_VIEW_FAILURE,
        payload: payload
    };
};

export const viewParticularVendor = (payload) => {
    return {
        type: VENDOR_PARTICULAR_VIEW_SUCCESS,
        payload: payload
    };
};

export const viewParticularVendorProgress = (payload) => {
    return {
        type: VENDOR_PARTICULAR_VIEW_PROGRESS,
        payload: payload
    };
};

export const viewParticularVendorFailure = (payload) => {
    return {
        type: VENDOR_PARTICULAR_VIEW_FAILURE,
        payload: payload
    };
};

export const resetVendorState = () => ({
    type: VENDOR_RESET_STATE,
  });
  