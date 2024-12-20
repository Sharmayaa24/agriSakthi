import {applyMiddleware, createStore} from 'redux';
import reduxSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSage';

const sagaMiddleware = reduxSagaMiddleware();

const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
