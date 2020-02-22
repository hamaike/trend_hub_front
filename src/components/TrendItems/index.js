import React from 'react'
// mu
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// my
import style from './trendItems.module.scss'
import ChooseIcon from '../../components/ChooseIcon'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


const pipline = (trend, name) => {
  let sub = null;
  let url = ''
  switch (name) {
    case 'Twitter':
      if (trend.tweet_volume === 0) trend.tweet_volume = 'データ無し';
      sub = '勢い: ' + trend.tweet_volume
      return [trend, sub]
    case 'Google':
      return [trend, sub]
    case 'Youtube':
      sub = 'channel: ' + trend.channel_title + ' / ' + 'view: ' + trend.view_count
      return [trend, sub]
    case 'Qiita':
      sub = 'good: ' + trend.good
      return [trend, sub]
    case 'Spotify':
      sub = 'artist: ' + trend.artist + ' / ' + 'streams: ' + trend.streams
      return [trend, sub]
    case 'Prtimes':
      if (trend.url.match(/https:\/\/prtimes.jp/)) {
        return [trend, sub]
      }
      trend.url = "https://prtimes.jp" + trend.url
      return [trend, sub]
    case 'Github':
      trend.title = trend.name
      sub = 'author: ' + trend.author + ' / ' + trend.currentPeriodStars + ' stars today'
      return [trend, sub]
    case 'Npm':
      sub = 'last day downloads: ' + trend.downloads
      trend.title = trend.package
      return [trend, sub]
    case 'Pixiv':
      sub = '作者: ' + trend.author
      return [trend, sub]
    default:
      return [trend, 'subDetail']
  }
}

const handleOnClick = (e, url) => {
  e.preventDefault();
  window.open(url, '_blank')
};

const Item = ({trend, rank, subDetail}) => {
  return (
    <>
      <ListItem button={true} onClick={(e) => handleOnClick(e, trend.url)}>
        <div className={style.rank}>
          <p>
            {rank + 1}.
          </p>
        </div>
        <div>
          <div className={style.detail}>
            <p className={subDetail ? style.title: style.nonSubDetail}>
              {trend.title}
            </p>
          </div>
          {subDetail ? <div className={style.subDetail}>{subDetail}</div> : null}
        </div>
      </ListItem>
      <Divider/>
    </>
  )
}


const TrendItems = ({trends, name}) => {
  const classes = useStyles();
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={style.titleContainer}>
            <p className={style.titleIconContainer}>
              <ChooseIcon name={name}/>
            </p>
            <p>{name}</p>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            {trends.map((trend, index) => {
              let subDetail;
              [trend, subDetail] = pipline(trend, name);
              return <Item trend={trend} key={index} rank={index} subDetail={subDetail}/>
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default TrendItems