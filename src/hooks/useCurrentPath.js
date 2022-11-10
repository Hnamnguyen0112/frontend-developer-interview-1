import { matchRoutes, useLocation } from 'react-router-dom';
import routes from '@containers/App/routes';

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route;
};

export default useCurrentPath;
