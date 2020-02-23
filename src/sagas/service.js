import {call, put, take, fork} from 'redux-saga/effects'
import {requestGet} from './utils/fetch'
import {
  requestGoogleTrends,
  requestQiitaTrends,
  requestTwitterTrends,
  requestYoutubeTrends,
  requestSpotifyTrends,
  requestPrtimesTrends,
  requestGithubTrends,
  requestNpmTrends,
  requestPixivTrends,
  requestHatenaTrends,
  requestAtmarkitTrends,
  requestCodezineTrends,
  requestHackernoonTrends,
  requestInfoqTrends,
  successGoogleTrends,
  successQiitaTrends,
  successTwitterTrends,
  successYoutubeTrends,
  successSpotifyTrends,
  successPrtimesTrends,
  successGithubTrends,
  successNpmTrends,
  successPixivTrends,
  successHatenaTrends,
  successAtmarkitTrends,
  successCodezineTrends,
  successHackernoonTrends,
  successInfoqTrends
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

export function* getPrtimesTrends() {
  while (true) {
    yield take(requestPrtimesTrends)
    const [data, err] = yield call(requestGet, 'prtimes/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successPrtimesTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getGithubTrends() {
  while (true) {
    yield take(requestGithubTrends)
    const [data, err] = yield call(requestGet, 'github/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successGithubTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getNpmTrends() {
  while (true) {
    yield take(requestNpmTrends)
    const [data, err] = yield call(requestGet, 'npm/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successNpmTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getPixivTrends() {
  while (true) {
    yield take(requestPixivTrends)
    const [data, err] = yield call(requestGet, 'pixiv/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successPixivTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getHatenaTrends() {
  while (true) {
    yield take(requestHatenaTrends);
    const [data, err] = yield call(requestGet, 'hatena/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successHatenaTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getAtmarkitTrends() {
  while (true) {
    yield take(requestAtmarkitTrends);
    const [data, err] = yield call(requestGet, 'atmarkit/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successAtmarkitTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getCodezineTrends() {
  while (true) {
    yield take(requestCodezineTrends);
    const [data, err] = yield call(requestGet, 'codezine/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successCodezineTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getInfoqTrends() {
  while (true) {
    yield take(requestInfoqTrends);
    const [data, err] = yield call(requestGet, 'infoq/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successInfoqTrends(parsed.trends))
    } else {
      console.log('error!')
    }
  }
}

export function* getHackernoonTrends() {
  while (true) {
    yield take(requestHackernoonTrends);
    const [data, err] = yield call(requestGet, 'hackernoon/');
    if (data && !err) {
      let parsed = JSON.parse(data.results[0].data);
      parsed.trends.splice(20, parsed.trends.length);
      yield put(successHackernoonTrends(parsed.trends))
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
  fork(getPrtimesTrends),
  fork(getGithubTrends),
  fork(getNpmTrends),
  fork(getPixivTrends),
  fork(getAtmarkitTrends),
  fork(getHatenaTrends),
  fork(getHackernoonTrends),
  fork(getCodezineTrends),
  fork(getInfoqTrends)
];

export default Service