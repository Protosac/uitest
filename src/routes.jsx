import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Launches from './views/Launches';
import Rockets from './views/Rockets';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Launches}/>
      <Route name='rocket' path="/:rocketId" render={(props)=> <Rockets {...props} />} />
    </div>
  </Router>
);

export default Routes;
