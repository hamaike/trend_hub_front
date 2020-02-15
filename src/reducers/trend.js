import {
  SUCCESS_TWITTER_TRENDS,
  SUCCESS_GOOGLE_TRENDS,
  SUCCESS_QIITA_TRENDS,
  SUCCESS_YOUTUBE_TRENDS
} from '../actions/service'

const initialState = {
  twTrends: [],
  goTrends: [],
  qiTrends: [],
  yoTrends: [],
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
    default:
      return state
  }
};

export default trend