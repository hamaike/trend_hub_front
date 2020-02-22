import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

// function Alert(props) {
//   return (
//     <MuiAlert elevation={6} variant="filled" {...props} />
//   )
// }

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    fontSize: '1.4rem'
  }
}));

export default function Index({msg}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert className={classes.alert} severity="success">{msg}</Alert>
    </div>
  );
}
