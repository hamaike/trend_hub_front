import React from 'react'
// mu
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// my
import style from './trendItems.module.scss'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Item = ({trend, rank}) => {
  console.log(trend)
  return (
    <>
      <ListItem button>
        <div className={style.test}>
          <Typography>
            {rank + 1}.
          </Typography>
          <Typography>
            {trend.title}
          </Typography>
        </div>
      </ListItem>
      <Divider/>
    </>
  )
}


const TrendItems = ({trends, name}) => {
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {name}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List component="nav" className={classes.root} aria-label="mailbox folders">
          {trends.map((trend, index) => {
            return <Item trend={trend} key={index} rank={index}/>
          })}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default TrendItems