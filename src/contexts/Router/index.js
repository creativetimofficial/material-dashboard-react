import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const RouterContext = createContext();

export function RouteProvider({ children }) {
  const [activeRouteName, setActiveRouteName] = useState();

  return (
    <RouterContext.Provider
      value={{
        activeRouteName,
        setActiveRouteName,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

RouteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterContext;
