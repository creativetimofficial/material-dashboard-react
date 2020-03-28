import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorNotFound from './ErrorNotFound';

function ErrorRouter({ match: { url } }) {
  return (
    <Switch>
      <Route exact path={`${url}/404`} component={ErrorNotFound} />
    </Switch>
  );
}

ErrorRouter.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorRouter;
