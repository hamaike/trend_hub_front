import {all} from 'redux-saga/effects'

import Service from './service'

export default function* rootSaga() {
  yield all([
    ...Service
  ])
}