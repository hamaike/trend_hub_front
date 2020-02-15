import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TrendItems from '../../components/TrendItems'
import AppBar from '../../components/AppBar'
import {
  requestTwitterTrends,
  requestGoogleTrends,
  requestQiitaTrends,
  requestYoutubeTrends
} from '../../actions/service'
import style from './trend.module.scss'

const trendSelector = state => state.trend;

const Trend = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTwitterTrends());
    dispatch(requestGoogleTrends());
    dispatch(requestYoutubeTrends());
    dispatch(requestQiitaTrends());
  }, []);

  const trend = useSelector(trendSelector);

  console.log(trend);
  return (
    <>
      <AppBar/>
      <div className={style.rootContainer}>
        <TrendItems trends={trend.twTrends} name={"Twitter"}/>
        <TrendItems trends={trend.goTrends} name={"Google"}/>
        <TrendItems trends={trend.yoTrends} name={"Youtube"}/>
        <TrendItems trends={trend.qiTrends} name={"Qiita"}/>
      </div>
    </>
  )
};

export default Trend