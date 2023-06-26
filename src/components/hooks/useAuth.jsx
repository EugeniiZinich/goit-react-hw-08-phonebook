import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectIsRegistered,
  selectUserAvatar,
  selectUserSubscr,
  selectIsPending,
} from 'redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isRegistered = useSelector(selectIsRegistered);
  const avatarUrl = useSelector(selectUserAvatar);
  const subscription = useSelector(selectUserSubscr);
  const isPending = useSelector(selectIsPending);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isRegistered,
    avatarUrl,
    subscription,
    isPending,
  };
};
