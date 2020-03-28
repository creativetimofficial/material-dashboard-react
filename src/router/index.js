import React from 'react';
import { Route, Switch, Redirect } from 'components/Router';
import { RouteProvider } from 'contexts/Router';
import Error from './Error';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

function RootRouter() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Redirect to="/error/404" />
    </Switch>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/error" component={Error} />
      <Route path="/" component={RootRouter} />
    </Switch>
  );
}

export default function RouterWrapper(props) {
  return (
    <RouteProvider>
      <Router {...props} />
    </RouteProvider>
  );
}
