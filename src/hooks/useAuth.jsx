import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectLoadingStatus,
  selectLogStatus,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLogStatus);
  const isRefreshing = useSelector(selectLoadingStatus);
  const user = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
