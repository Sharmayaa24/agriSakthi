import { call, put, takeLatest } from "redux-saga/effects";
import { addWalletFailure, addWalletSuccess, deleteWalletFailure, deleteWalletSuccess, updateWalletFailure, updateWalletSuccess, viewAllWalletFailure, viewAllWalletSuccess, viewWalletFailure, viewWalletSuccess } from "./walletAction";
import { WALLET_ADD_PROGRESS, WALLET_DELETE_PROGRESS, WALLET_PARTICULAR_VIEW_PROGRESS, WALLET_UPDATE_PROGRESS, WALLET_VIEW_PROGRESS } from "./walletType";
import { walletAddEffect, walletDeleteEffect, walletGetEffect, walletUpdateEffect, walletViewAllEffect } from "./WalletEffects";

function* walletAdd({ payload }){
    console.log(payload)
    try{
        const {data} = yield call(walletAddEffect,payload);
        console.log(data)
        yield put(addWalletSuccess({
            data:data,
            message:data['message'],
            success:true,
        }));
        }catch(error){
            yield put(addWalletFailure(error));
        }   
}

function* walletUpdate({payload}) {
    console.log(payload)
    try{
        const {data} = yield call(walletUpdateEffect,payload.id,payload.data);
        yield put(updateWalletSuccess({
            data:data,
            message:data.message,
            success:true,
        }))
        }catch(error){
            yield put(updateWalletFailure(error));
        }
}

function* walletViewAll({payload}) {
    try{
        const {data} = yield call(walletViewAllEffect,payload);
        yield put(viewAllWalletSuccess({
            data,
            success:true,
            }))
            }catch(error){
                yield put(viewAllWalletFailure(error));
            }
}

function* walletDelete({payload}) {
    try{
        const {data} = yield call(walletDeleteEffect,payload);
        yield put(deleteWalletSuccess({
            data:data,
            message:data.message,
            success:true,
            }))
            }catch(error){
                yield put(deleteWalletFailure(error));
            }
            
}

function* walletView({payload}) {
    try{
        const {data} = yield call(walletGetEffect,payload);
        console.log(data)
        yield put(viewWalletSuccess({
            data:data,
            message:data['message'],
            success:true,
            }))
            }catch(error){
                yield put(viewWalletFailure(error));
            }
}

export default function* walletSage(){
    yield takeLatest(WALLET_ADD_PROGRESS,walletAdd);
    yield takeLatest(WALLET_UPDATE_PROGRESS,walletUpdate);
    yield takeLatest(WALLET_DELETE_PROGRESS,walletDelete);
    yield takeLatest(WALLET_VIEW_PROGRESS,walletViewAll);
    yield takeLatest(WALLET_PARTICULAR_VIEW_PROGRESS,walletView)
}