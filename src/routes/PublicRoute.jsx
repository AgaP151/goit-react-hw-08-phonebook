import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLogStatus } from './../redux/authSelectors';
import PropTypes from 'prop-types';

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(selectLogStatus);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element.isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
