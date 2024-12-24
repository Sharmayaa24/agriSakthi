import { WALLET_ADD_FAILURE, WALLET_ADD_PROGRESS, WALLET_ADD_SUCCESS, WALLET_DELETE_FAILURE, WALLET_DELETE_PROGRESS, WALLET_DELETE_SUCCESS, WALLET_PARTICULAR_VIEW_FAILURE, WALLET_PARTICULAR_VIEW_PROGRESS, WALLET_PARTICULAR_VIEW_SUCCESS, WALLET_UPDATE_FAILURE, WALLET_UPDATE_PROGRESS, WALLET_UPDATE_SUCCESS, WALLET_VIEW_FAILURE, WALLET_VIEW_PROGRESS, WALLET_VIEW_SUCCESS } from "./walletType";

export const addWalletProgress = (payload) => {
    console.log(payload)
    return {
    type: WALLET_ADD_PROGRESS,
    payload,
    };
};

export const addWalletSuccess = (payload) => {
    console.log(payload)
    return {
    type: WALLET_ADD_SUCCESS,
    payload,
    };
};

export const addWalletFailure = (payload) => {
    console.log(payload)
    return {
    type: WALLET_ADD_FAILURE,
    payload,
    };
};

export const updateWalletProgress = (payload) => {
    console.log(payload)
    return {
    type: WALLET_UPDATE_PROGRESS,
    payload,
    };
};

export const updateWalletSuccess = (payload) => {
    return {
    type: WALLET_UPDATE_SUCCESS,
    payload,
    };
};

export const updateWalletFailure = (payload) => {
    return {
    type: WALLET_UPDATE_FAILURE,
    payload,
    };
};

export const viewAllWalletProgress = (payload) => {
    console.log(payload,"hello")
    return {
    type: WALLET_VIEW_PROGRESS,
    payload,
    };
};

export const viewAllWalletSuccess = (payload) => {
    console.log(payload,"hellos")
    return {
    type: WALLET_VIEW_SUCCESS,
    payload,
    };
};

export const viewAllWalletFailure = (payload) => {
    console.log(payload,"hellof")
    return {
    type: WALLET_VIEW_FAILURE,
    payload,
    };
};

export const viewWalletProgress = (payload) => {
    return {
    type: WALLET_PARTICULAR_VIEW_PROGRESS,
    payload,
    };
};

export const viewWalletSuccess = (payload) => {
    console.log(payload)
    return {
    type: WALLET_PARTICULAR_VIEW_SUCCESS,
    payload,
    };
};

export const viewWalletFailure = (payload) => {
    return {
    type: WALLET_PARTICULAR_VIEW_FAILURE,
    payload,
    };
};

export const deleteWalletProgress = (payload) => {
    return {
    type: WALLET_DELETE_PROGRESS,
    payload,
    };
};

export const deleteWalletSuccess = (payload) => {
    return {
    type: WALLET_DELETE_SUCCESS,
    payload,
    };
};

export const deleteWalletFailure = (payload) => {
    return {
    type: WALLET_DELETE_FAILURE,
    payload,
    };
};