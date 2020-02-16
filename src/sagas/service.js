import {call, put, take, fork} from 'redux-saga/effects'
import {requestGet} from './utils/fetch'
import {
  requestGoogleTrends,
  requestQiitaTrends,
  requestTwitterTrends,
  requestYoutubeTrends,
  requestSpotifyTrends,
  successGoogleTrends,
  successQiitaTrends,
  successTwitterTrends,
  successYoutubeTrends,
  successSpotifyTrends
} from '../actions/service'

export function* getGoogleTrends() {
  while (true) {
    yield take(requestGoogleTrends)
    const [data, err] = yield call(requestGet, `google/`);
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      yield put(successGoogleTrends(parsed.trends))
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
      let parsed = JSON.parse(data.results[0].data);
      yield put(successTwitterTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getYoutubeTrends() {
  while (true) {
    yield take(requestYoutubeTrends)
    const [data, err] = yield call(requestGet, 'youtube/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      yield put(successYoutubeTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getQiitaTrends() {
  while (true) {
    yield take(requestQiitaTrends)
    const [data, err] = yield call(requestGet, 'qiita/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      yield put(successQiitaTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getSpotifyTrends() {
  while (true) {
    yield take(requestSpotifyTrends)
    const [data, err] = yield call(requestGet, 'spotify/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successSpotifyTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

const Service = [
  fork(getGoogleTrends),
  fork(getTwitterTrends),
  fork(getYoutubeTrends),
  fork(getQiitaTrends),
  fork(getSpotifyTrends),
];

export default Service