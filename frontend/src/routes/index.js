import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import Home from '../pages/Home';
import People from '../pages/People';
import Header from '../components/Header';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/people" component={People} exact />
    </Fragment>
  </ConnectedRouter>
);
Routes.displayName = 'Routes';

export default Routes;
