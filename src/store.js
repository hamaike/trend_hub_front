import {createStore} from 'redux'
import createRootReducer from './reducers'

let store = createStore(
  createRootReducer()
);

export default store
