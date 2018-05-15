import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import People from '../pages/People';

const routes = () => (
  <Router>
    <Fragment>
      <Route path="/" component={Home} exact />
      <Route path="/people" component={People} exact />
    </Fragment>
  </Router>
);
routes.displayName = 'Routes';

export default routes;
