import { call, put, takeLatest } from "redux-saga/effects";
import { addCustomerFailure, addCustomerSuccess, deleteCustomerFailure, deleteCustomerSuccess, updateCustomerFailure, updateCustomerSuccess, viewAllCustomerFailure, viewAllCustomerSuccess, viewCustomerFailure, viewCustomerSuccess } from "./customerAction";
import { CUSTOMER_ADD_PROGRESS, CUSTOMER_DELETE_PROGRESS, CUSTOMER_PARTICULAR_VIEW_PROGRESS, CUSTOMER_UPDATE_PROGRESS, CUSTOMER_VIEW_PROGRESS } from "./CustomerType";
import { customerAddEffect, customerDeleteEffect, customerGetEffect, customerUpdateEffect, customerViewAllEffect } from "./CustomerEffects";

function* customerAdd({ payload }){
    console.log(payload)
    try{
        const {data} = yield call(customerAddEffect,payload);
        console.log(data)
        yield put(addCustomerSuccess({
            data:data,
            message:data['message'],
            success:true,
        }));
        }catch(error){
            yield put(addCustomerFailure(error));
        }   
}

function*customerUpdate({payload}){
    console.log(payload)
    try{
        const {data} = yield call(customerUpdateEffect,payload.id,payload.data);
        yield put(updateCustomerSuccess({
            data:data,
            message:data.message,
            success:true,
        }))
        }catch(error){
            yield put(updateCustomerFailure(error));
        }
}
function* customerViewAll({payload}){
    try{
        const {data} = yield call(customerViewAllEffect,payload);
        yield put(viewAllCustomerSuccess({
            data,
            success:true,
            }))
            }catch(error){
                yield put(viewAllCustomerFailure(error));
            }
}
function* customerDelete({payload}){
    try{
        const {data} = yield call(customerDeleteEffect,payload);
        yield put(deleteCustomerSuccess({
            data:data,
            message:data.message,
            success:true,
            }))
            }catch(error){
                yield put(deleteCustomerFailure(error));
            }
            
}

function* customerView({payload}){
    try{
        const {data} = yield call(customerGetEffect,payload);
        console.log(data)
        yield put(viewCustomerSuccess({
            data:data,
            message:data['message'],
            success:true,
            }))
            }catch(error){
                yield put(viewCustomerFailure(error));
            }


        }

export default function* vendorSage(){
    yield takeLatest(CUSTOMER_ADD_PROGRESS,customerAdd);
    yield takeLatest(CUSTOMER_UPDATE_PROGRESS,customerUpdate);
    yield takeLatest(CUSTOMER_DELETE_PROGRESS,customerDelete);
    yield takeLatest(CUSTOMER_VIEW_PROGRESS,customerViewAll);
    yield takeLatest(CUSTOMER_PARTICULAR_VIEW_PROGRESS,customerView)
}