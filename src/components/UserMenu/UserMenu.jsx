import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operation';
import { useAuth } from 'components/hooks/useAuth';
import { Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <span>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Sign Out
      </button>
    </Container>
  );
};
