import {call, put, takeLatest} from 'redux-saga/effects';
import {
  addVendorSuccess,
    addVendorFailure,
    updateVendor,
    updateVendorFailure,
    deleteVendor,
    deleteVendorFailure,
    viewVendor,
    viewVendorFailure,
    viewParticularVendor

} from './vendorAction'
import {
    vendorAddEffect,
    vendorUpdateEffect,
    vendorDeleteEffect,
    vendorViewEffect,
    vendorParticularViewEffect,
    
} from './vendoreffect'
import {
    VENDOR_ADD_PROGRESS,
    VENDOR_VIEW_PROGRESS,
    VENDOR_DELETE_PROGRESS,
    VENDOR_UPDATE_PROGRESS,
    VENDOR_PARTICULAR_VIEW_PROGRESS,
} from './vendorType';

function* VendorAdd({ payload }) {
  
  try {
      const { data } = yield call(vendorAddEffect, payload);
      console.log(data);
      yield put(addVendorSuccess({
        data: data,
        message: data['message'],
        success: true,
      }))
  } catch (err) {
    console.log(err,"error")
      yield put(addVendorFailure(err)); 
  }
}

function* VendorUpdate({payload}) {

    try {
      let {data} = yield call(vendorUpdateEffect, payload.id,payload.data);
      console.log(data);
      yield put(
        updateVendor({
          data: data,
          message: data['message'],
          success: true,
        }),
      );
    } catch (err) {
      console.log(err,"error")
      yield put(
        updateVendorFailure({
          err
        }),
      );
    }
}

function* VendorDelete({payload}) {
  console.log(payload)
    try {
     let {data} = yield call(vendorDeleteEffect, payload);
      let message = data.message;
      console.log(message);
      yield put(
        deleteVendor({
          data: data,
          message: message,
          success: true,
        }),
      );
    } catch (err) {
      yield put(
        deleteVendorFailure({
          error: true,
          message: err['message'],
        }),
      );
    }
}

function* VendorView({ payload }) {
  try {
      let { data } = yield call(vendorViewEffect, payload);
      yield put(
          viewVendor({
              data,
              success: true,
          }),
      );
  } catch (err) {
      console.error(err); // Log the error
      yield put(
          viewVendorFailure({
              error: true,
              message: err['message'],
          }),
      );
  }
}

function* VendorParticularView({payload}) {
    try {
      let {data} = yield call(vendorParticularViewEffect, payload);

      yield put(
        viewParticularVendor({
          data: data,
          message: data['message'],
          success: true,
        }),
      );
    } catch (err) {
      yield put(
        viewVendorFailure({
          error: true,
          message: err['message'],
        }),
      );
    }
}

export default function* vendorSaga() {
    yield takeLatest(VENDOR_ADD_PROGRESS, VendorAdd);
    yield takeLatest(VENDOR_UPDATE_PROGRESS, VendorUpdate);
    yield takeLatest(VENDOR_DELETE_PROGRESS, VendorDelete);
    yield takeLatest(VENDOR_VIEW_PROGRESS, VendorView);
    yield takeLatest(VENDOR_PARTICULAR_VIEW_PROGRESS, VendorParticularView);
}