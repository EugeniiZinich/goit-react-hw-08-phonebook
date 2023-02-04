import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsRegistered,
} from 'redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isRegistered = useSelector(selectIsRegistered);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isRegistered,
  };
};
