import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import People from '../pages/People';
import Header from '../components/Header';

const Routes = () => (
  <Router>
    <Fragment>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/people" component={People} exact />
    </Fragment>
  </Router>
);
Routes.displayName = 'Routes';

export default Routes;
