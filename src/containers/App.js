import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Trend from './Trend'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/trends" component={Trend}/>
      </Switch>
    </div>
  );
}

export default App;
