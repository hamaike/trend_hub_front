import {
  SUCCESS_TWITTER_TRENDS,
  SUCCESS_GOOGLE_TRENDS,
  SUCCESS_QIITA_TRENDS,
  SUCCESS_YOUTUBE_TRENDS,
  SUCCESS_SPOTIFY_TRENDS,
  SUCCESS_PRTIMES_TRENDS,
  SUCCESS_GITHUB_TRENDS,
  SUCCESS_NPM_TRENDS,
  SUCCESS_PIXIV_TRENDS,
  SUCCESS_ATMARKIT_TRENDS,
  SUCCESS_HATENA_TRENDS,
  SUCCESS_CODEZINE_TRENDS,
  SUCCESS_HACKERNOON_TRENDS,
  SUCCESS_INFOQ_TRENDS
} from '../actions/service'

const initialState = {
  twTrends: [],
  goTrends: [],
  qiTrends: [],
  yoTrends: [],
  spTrends: [],
  prTrends: [],
  giTrends: [],
  npTrends: [],
  piTrends: [],
  haTrends: [],
  atTrends: [],
  coTrends: [],
  hackTrends: [],
  inTrends: []
};

const trend = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_TWITTER_TRENDS:
      return {
        ...state,
        twTrends: action.payload
      }
    case SUCCESS_GOOGLE_TRENDS:
      return {
        ...state,
        goTrends: action.payload
      }
    case SUCCESS_QIITA_TRENDS:
      return {
        ...state,
        qiTrends: action.payload
      }
    case SUCCESS_YOUTUBE_TRENDS:
      return {
        ...state,
        yoTrends: action.payload
      }
    case SUCCESS_SPOTIFY_TRENDS:
      return {
        ...state,
        spTrends: action.payload
      }
    case SUCCESS_PRTIMES_TRENDS:
      return {
        ...state,
        prTrends: action.payload
      }
    case SUCCESS_GITHUB_TRENDS:
      return {
        ...state,
        giTrends: action.payload
      }
    case SUCCESS_NPM_TRENDS:
      return {
        ...state,
        npTrends: action.payload
      }
    case SUCCESS_PIXIV_TRENDS:
      return {
        ...state,
        piTrends: action.payload
      }
    case SUCCESS_HATENA_TRENDS:
      return {
        ...state,
        haTrends: action.payload
      }
    case SUCCESS_ATMARKIT_TRENDS:
      return {
        ...state,
        atTrends: action.payload
      }
    case SUCCESS_INFOQ_TRENDS:
      return {
        ...state,
        inTrends: action.payload
      }
    case SUCCESS_CODEZINE_TRENDS:
      return {
        ...state,
        coTrends: action.payload
      }
    case SUCCESS_HACKERNOON_TRENDS:
      return {
        ...state,
        hackTrends: action.payload
      }
    default:
      return state
  }
};

export default trend