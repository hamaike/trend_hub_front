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
  requestNpmTrends,
  requestPixivTrends,
  requestHatenaTrends,
  requestAtmarkitTrends
} from '../../actions/service'
import style from './trend.module.scss'
import Alert from '../../components/Alert'
import Blank from '../../components/Blank'


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
    dispatch(requestNpmTrends());
    dispatch(requestPixivTrends());
    dispatch(requestHatenaTrends());
    dispatch(requestAtmarkitTrends());
  }, []);

  const trend = useSelector(trendSelector);

  return (
    <>
      <AppBar/>
      <Blank/>
      <div className={style.superContainer}>
        <div className={style.rootContainer}>
          <div className={style.alertMargin}>
            <Alert msg={"更新は 15 分毎です"}/>
          </div>
          <TrendItems trends={trend.twTrends} name={"Twitter"}/>
          <TrendItems trends={trend.goTrends} name={"Google"}/>
          <TrendItems trends={trend.yoTrends} name={"Youtube"}/>
          <TrendItems trends={trend.spTrends} name={"Spotify"}/>
          <TrendItems trends={trend.prTrends} name={"Prtimes"}/>
          <TrendItems trends={trend.piTrends} name={"Pixiv"}/>
          <TrendItems trends={trend.qiTrends} name={"Qiita"}/>
          <TrendItems trends={trend.giTrends} name={"Github"}/>
          <TrendItems trends={trend.npTrends} name={"Npm"}/>
          <TrendItems trends={trend.haTrends} name={"Hatena"}/>
          <TrendItems trends={trend.atTrends} name={"Atmarkit"}/>
        </div>
      </div>
    </>
  )
};

export default Trend