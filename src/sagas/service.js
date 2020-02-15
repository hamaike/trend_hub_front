import {call, put, take, fork} from 'redux-saga/effects'
import {requestGet} from './utils/fetch'
import {
  requestGoogleTrends,
  requestQiitaTrends,
  requestTwitterTrends,
  requestYoutubeTrends,
  successGoogleTrends,
  successQiitaTrends,
  successTwitterTrends,
  successYoutubeTrends
} from '../actions/service'

export function* getGoogleTrends() {
  while (true) {
    yield take(requestGoogleTrends)
    const [data, err] = yield call(requestGet, `google/`)
    if (data && !err) {
      yield put(successGoogleTrends(data.results))
    } else {
      console.log('error!')
    }
  }
}

export function* getTwitterTrends() {
  while (true) {
    yield take(requestTwitterTrends);
    console.log('fire!')
    const [data, err] = yield call(requestGet, 'twitter/');
    if (data && !err) {
      yield put(successTwitterTrends(data.results))
    } else {
      console.log('error!')
    }
  }
}

export function* getYoutubeTrends() {
  while (true) {
    yield take(requestYoutubeTrends)
    const [data, err] = yield call(requestGet, 'youtube/')
    if (data && !err) {
      yield put(successYoutubeTrends(data.results))
    } else {
      console.log('error!')
    }
  }
}

export function* getQiitaTrends() {
  while (true) {
    yield take(requestQiitaTrends)
    const [data, err] = yield call(requestGet, 'qiita/')
    if (data && !err) {
      yield put(successQiitaTrends(data.results))
    } else {
      console.log('error!')
    }
  }
}

const Service = [
  fork(getGoogleTrends),
  fork(getTwitterTrends),
  fork(getYoutubeTrends),
  fork(getQiitaTrends)
];

export default Service