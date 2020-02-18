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
import TwitterIcon from "../../assets/twitter_icon.svg";
import GoogleIcon from "../../assets/google_icon.svg";
import YoutubeIcon from "../../assets/youtube_icon.svg";
import QiitaIcon from "../../assets/qiita_icon.svg";
import SpotifyIcon from "../../assets/spotify_icon.svg";
import PrtimesIcon from "../../assets/prtimes_icon.svg";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const pipline = (trend, name) => {
  switch (name) {
    case 'Twitter':
      return trend
    case 'Google':
      return trend
    case 'Youtube':
      return trend
    case 'Qiita':
      return trend
    case 'Spotify':
      return trend
    case 'Prtimes':
      trend.url = "https://prtimes.jp/" + trend.url;
      return trend
    default:
      return trend
  }
}

const handleOnClick = (e, url) => {
  e.preventDefault();
  window.location.href = url
};

const Item = ({trend, rank}) => {
  return (
    <>
      <ListItem button={true} onClick={(e) => handleOnClick(e, trend.url)}>
        <div className={style.detail}>
          <div className={style.rank}>
            <p>
              {rank + 1}.
            </p>
          </div>
          <p>
            {trend.title}
          </p>
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
              trend = pipline(trend, name);
              return <Item trend={trend} key={index} rank={index}/>
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

export default TrendItems