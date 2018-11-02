import React  from 'react';
import history from '../../services/history';
import { Router, Route, Switch } from "react-router-dom";

import LoginScreen from  '../../scenes/LoginScreen/index';
import BeerOverview from '../../scenes/BeerOverview/index';
import NotFound from '../../scenes/NotFound/index';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginScreen} exact />
        <Route path="/beers" component={BeerOverview} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
};

export default App;
