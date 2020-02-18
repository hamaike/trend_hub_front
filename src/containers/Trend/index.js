import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// mu
import TrendItems from '../../components/TrendItems'
import AppBar from '../../components/AppBar'
import {
  requestTwitterTrends,
  requestGoogleTrends,
  requestQiitaTrends,
  requestYoutubeTrends,
  requestSpotifyTrends,
  requestPrtimesTrends,
  requestGithubTrends,
  requestNpmTrends
} from '../../actions/service'
import style from './trend.module.scss'
import Alert from '../../components/Alert'


const trendSelector = state => state.trend;

const Trend = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTwitterTrends());
    dispatch(requestGoogleTrends());
    dispatch(requestYoutubeTrends());
    dispatch(requestQiitaTrends());
    dispatch(requestSpotifyTrends());
    dispatch(requestPrtimesTrends());
    dispatch(requestGithubTrends());
    dispatch(requestNpmTrends())
  }, []);

  const trend = useSelector(trendSelector);

  console.log(trend);
  return (
    <>
      <AppBar/>
      <div className={style.superContainer}>
        <div className={style.rootContainer}>
          <div className={style.alertMargin}>
            <Alert msg={"更新は 15 分毎です"}/>
          </div>
          <TrendItems trends={trend.twTrends} name={"Twitter"}/>
          <TrendItems trends={trend.goTrends} name={"Google"}/>
          <TrendItems trends={trend.yoTrends} name={"Youtube"}/>
          <TrendItems trends={trend.qiTrends} name={"Qiita"}/>
          <TrendItems trends={trend.spTrends} name={"Spotify"}/>
          <TrendItems trends={trend.prTrends} name={"Prtimes"}/>
          <TrendItems trends={trend.giTrends} name={"Github"}/>
          <TrendItems trends={trend.npTrends} name={"Npm"}/>
        </div>
      </div>
    </>
  )
};

export default Trend