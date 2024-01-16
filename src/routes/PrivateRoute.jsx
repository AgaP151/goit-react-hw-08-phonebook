import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogStatus} from './../redux/authSelectors';

export const PrivateRoute = ({component: Component, path}) => {
  const isLoggedIn = useSelector(selectLogStatus);
  if (isLoggedIn) {
      return <Component />;
  }
  return <Navigate to={path} />;
}