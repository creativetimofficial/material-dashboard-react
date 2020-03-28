import { useContext } from 'react';
import RouterContext from 'contexts/Router';

export default function useActiveRouteName() {
  const { activeRouteName } = useContext(RouterContext);
  return activeRouteName;
}
