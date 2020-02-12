import React from 'react'
import {useSelector} from 'react-redux'

const trendSelector = state => state.trend;

const Trend = () => {
  const trend = useSelector(trendSelector);
  console.log(trend);
  return (
    <>
      <div>
        Trends!!
      </div>
    </>
  )
};

export default Trend