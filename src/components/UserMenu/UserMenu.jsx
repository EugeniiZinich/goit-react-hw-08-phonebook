import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from 'redux/Auth/operation';
import { useAuth } from 'components/hooks/useAuth';
import { Container } from './UserMenu.styled';
import { StyledBadge } from './UserMenu.mui.styled';
import { getLocation } from 'redux/ContactsSlice/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const { user } = useAuth();

  const variantColor =
    location === '/contacts' || location === '/addcontact' ? '#fff' : '#1976d2';

  return (
    <Container>
      <span
        style={{
          fontFamily: 'Dancing Script',
          display: 'block',
          fontWeight: 'bold',
          fontSize: 20,
          color: variantColor,
        }}
      >
        {user.name}
      </span>
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            alt={user.name}
            src="https://res.cloudinary.com/dzqzq9kcl/image/upload/v1681319550/avatars/esil2u7j3s3l35zabps2.jpg"
          />
        </StyledBadge>
      </Stack>

      <LogoutIcon
        onClick={() => dispatch(logOut())}
        sx={{
          cursor: 'pointer',
          color: variantColor,
        }}
      />
    </Container>
  );
};
