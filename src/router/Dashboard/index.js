import React from 'react';
import { Switch, Redirect, Route } from 'components/Router';
import PropTypes from 'prop-types';
import DashboardLayout from 'layouts/Dashboard';
import Overview from './Overview';
import TableList from './TableList';

function DashboardRouter({ match: { url } }) {
  return (
    <DashboardLayout>
      <Switch>
        <Route
          exact
          name="Overview"
          path={`${url}/overview`}
          component={Overview}
        />
        <Route
          exact
          name="TableList"
          path={`${url}/table-list`}
          component={TableList}
        />
        <Redirect from={`${url}`} to={`${url}/overview`} />
      </Switch>
    </DashboardLayout>
  );
}

DashboardRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardRouter;
