import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userType, setUserType] = useState();

  return (
    <UserContext.Provider value={{
      userType,
      setUserType,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
