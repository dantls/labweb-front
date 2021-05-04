import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';


import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import CreatePoint from '../pages/CreatePoint';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" component={Home} />
    <Route path="/create-point" component={CreatePoint} isPrivate />

  </Switch>
);

export default Routes;