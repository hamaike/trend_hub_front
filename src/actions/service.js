import {createAction} from 'redux-actions'

export const REQUEST_TWITTER_TRENDS = 'REQUEST_TWITTER_TRENDS';
export const SUCCESS_TWITTER_TRENDS = 'SUCCESS_TWITTER_TRENDS';
export const requestTwitterTrends = createAction(REQUEST_TWITTER_TRENDS);
export const successTwitterTrends = createAction(SUCCESS_TWITTER_TRENDS);

export const REQUEST_YOUTUBE_TRENDS = 'REQUEST_YOUTUBE_TRENDS';
export const SUCCESS_YOUTUBE_TRENDS = 'SUCCESS_YOUTUBE_TRENDS';
export const requestYoutubeTrends = createAction(REQUEST_YOUTUBE_TRENDS);
export const successYoutubeTrends = createAction(SUCCESS_YOUTUBE_TRENDS);

export const REQUEST_GOOGLE_TRENDS = 'REQUEST_GOOGLE_TRENDS';
export const SUCCESS_GOOGLE_TRENDS = 'SUCCESS_GOOGLE_TRENDS';
export const requestGoogleTrends = createAction(REQUEST_GOOGLE_TRENDS);
export const successGoogleTrends = createAction(SUCCESS_GOOGLE_TRENDS);

export const REQUEST_QIITA_TRENDS = 'REQUEST_QIITA_TRENDS';
export const SUCCESS_QIITA_TRENDS = 'SUCCESS_QIITA_TRENDS';
export const requestQiitaTrends = createAction(REQUEST_QIITA_TRENDS);
export const successQiitaTrends = createAction(SUCCESS_QIITA_TRENDS);

export const REQUEST_SPOTIFY_TRENDS = 'REQUEST_SPOTIFY_TRENDS';
export const SUCCESS_SPOTIFY_TRENDS = 'SUCCESS_SPOTIFY_TRENDS';
export const requestSpotifyTrends = createAction(REQUEST_SPOTIFY_TRENDS);
export const successSpotifyTrends = createAction(SUCCESS_SPOTIFY_TRENDS);

export const REQUEST_PRTIMES_TRENDS = 'REQUEST_PRTIMES_TRENDS';
export const SUCCESS_PRTIMES_TRENDS = 'SUCCESS_PRTIMES_TRENDS';
export const requestPrtimesTrends = createAction(REQUEST_PRTIMES_TRENDS);
export const successPrtimesTrends = createAction(SUCCESS_PRTIMES_TRENDS);