import { useContext } from 'react';
import UserContext from 'contexts/User';

function useUserType() {
  const { userType } = useContext(UserContext);
  return userType;
}

export default useUserType;
