import {createStore, applyMiddleware} from 'redux'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()


let store = createStore(
  createRootReducer(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store

