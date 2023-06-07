import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsRegistered,
  selectUserAvatar,
} from 'redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isRegistered = useSelector(selectIsRegistered);
  const avatarUrl = useSelector(selectUserAvatar);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isRegistered,
    avatarUrl,
  };
};
