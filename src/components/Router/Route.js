import React, { useEffect, useContext, useMemo } from 'react';
import { Route as RRDRoute, useRouteMatch, Redirect } from 'react-router-dom';
import RouterContext from 'contexts/Router';
import UserContext from 'contexts/User';
import PropTypes from 'prop-types';
import { USER_TYPE } from 'constants/user';

function AwareRoute({ name, path, ...rest }) {
  const match = useRouteMatch(path);
  const { setActiveRouteName } = useContext(RouterContext);
  useEffect(() => {
    if (match) {
      setActiveRouteName(name);
    }
  }, [match, setActiveRouteName, name]);

  return <RRDRoute to={path} {...rest} />;
}

AwareRoute.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

function RedirectBadPermission() {
  return (
    <RRDRoute
      render={({ location }) => (
        <Redirect to={{
          pathname: '/error/404',
          state: { from: location },
        }}
        />
      )}
    />
  );
}

function Route({
  name, allowUserType, ...rest
}) {
  const { userType } = useContext(UserContext);

  const isBadPermission = useMemo(() => {
    if (allowUserType && userType !== USER_TYPE[allowUserType]) return true;
    return false;
  }, [userType, allowUserType]);

  if (isBadPermission) {
    return <RedirectBadPermission {...rest} />;
  }

  if (name) {
    return <AwareRoute name={name} {...rest} />;
  }
  return <RRDRoute {...rest} />;
}

Route.defaultProps = {
  name: null,
  allowUserType: null,
};

Route.propTypes = {
  name: PropTypes.string,
  teacherOnly: PropTypes.bool,
  studentOnly: PropTypes.bool,
  authOnly: PropTypes.bool,
  unAuthOnly: PropTypes.bool,
  allowUserType: PropTypes.oneOf([
    ...Object.values(USER_TYPE),
  ]),
};

export default Route;
