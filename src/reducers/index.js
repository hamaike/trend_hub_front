import {combineReducers} from 'redux'

import trend from './trend'
import user from './user'

export default () => combineReducers({
  trend,
  user
})