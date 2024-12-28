import {call, put, takeLatest} from 'redux-saga/effects';
import {
  addTransactionSuccess,
  addTransactionFailure,
  updateTransaction,
  updateTransactionFailure,
  deleteTransaction,
  deleteTransactionFailure,
  viewTransaction,
  viewTransactionFailure,
  viewParticularTransaction,
  viewParticularCustomerTransaction,
  viewParticularCustomerTransactionFailure
} from './transactionAction'
import {
  transactionAddEffect,
  transactionUpdateEffect,
  transactionDeleteEffect,
  transactionViewEffect,
  transactionParticularViewEffect,
  CustomerTransactionParticularViewEffect,
} from './transactionEffect'
import {
  TRANSACTION_ADD_PROGRESS,
  TRANSACTION_VIEW_PROGRESS,
  TRANSACTION_DELETE_PROGRESS,
  TRANSACTION_UPDATE_PROGRESS,
  TRANSACTION_PARTICULAR_VIEW_PROGRESS,
  TRANSACTION_CUSTOMER_PARTICULAR_VIEW_PROGRESS,
} from './transactionType';

function* TransactionAdd({ payload }) {
  try {
    const { data } = yield call(transactionAddEffect, payload);
    console.log(data)
    yield put(addTransactionSuccess({
      data: data,
      message: data['message'],
      success: true,
    }))
  } catch (err) {
    yield put(addTransactionFailure(err));
  }
}

function* TransactionUpdate({payload}) {
  try {
    let {data} = yield call(transactionUpdateEffect, payload.id, payload.data);
    yield put(
      updateTransaction({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      updateTransactionFailure({
        err
      }),
    );
  }
}

function* TransactionDelete({payload}) {
  try {
    let {data} = yield call(transactionDeleteEffect, payload);
    let message = data.message;
    yield put(
      deleteTransaction({
        data: data,
        message: message,
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      deleteTransactionFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}

function* TransactionView({ payload }) {
  try {
    let { data } = yield call(transactionViewEffect, payload);
    yield put(
      viewTransaction({
        data,
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      viewTransactionFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}

function* TransactionParticularView({payload}) {
  try {
    let {data} = yield call(transactionParticularViewEffect, payload);
    yield put(
      viewParticularTransaction({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      viewTransactionFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}

function* customerTransactionParticularView({payload}) {
  try {
    let {data} = yield call(CustomerTransactionParticularViewEffect, payload);
    yield put(
      viewParticularCustomerTransaction({
        data: data,
        message: data['message'],
        success: true,
      }),
    );
  } catch (err) {
    yield put(
      viewParticularCustomerTransactionFailure({
        error: true,
        message: err['message'],
      }),
    );
  }
}
export default function* transactionSaga() {
  yield takeLatest(TRANSACTION_ADD_PROGRESS, TransactionAdd);
  yield takeLatest(TRANSACTION_UPDATE_PROGRESS, TransactionUpdate);
  yield takeLatest(TRANSACTION_DELETE_PROGRESS, TransactionDelete);
  yield takeLatest(TRANSACTION_VIEW_PROGRESS, TransactionView);
  yield takeLatest(TRANSACTION_PARTICULAR_VIEW_PROGRESS, TransactionParticularView);
  yield takeLatest(TRANSACTION_CUSTOMER_PARTICULAR_VIEW_PROGRESS, customerTransactionParticularView);
}