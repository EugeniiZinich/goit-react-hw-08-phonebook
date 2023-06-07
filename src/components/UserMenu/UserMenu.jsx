import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { logOut } from 'redux/Auth/authOperation';
import { useAuth } from 'components/hooks/useAuth';
import { Container, ProfileDashboard } from './UserMenu.styled';
import { StyledBadge, LogoutBtn } from './UserMenu.mui.styled';
import { getLocation } from 'redux/ContactsSlice/selectors';
import { ModalProfile } from './ModalProfile/ModalProfile';

export const UserMenu = ({ avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useSelector(getLocation);
  const { user } = useAuth();

  const avatar = avatarUrl;

  const variantColor =
    location === '/contacts' || location === '/addcontact' ? '#fff' : '#1976d2';

  return (
    <Container>
      <button className="styledProfileBtn" onClick={() => setIsOpen(!isOpen)}>
        <span
          style={{
            fontFamily: 'Dancing Script',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 20,
            color: variantColor,
          }}
        >
          {user?.name}
        </span>
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt={user?.name} src={user?.avatarURL} />
          </StyledBadge>
        </Stack>
      </button>

      <ProfileDashboard open={isOpen}>
        <ModalProfile />
        <LogoutBtn onClick={() => dispatch(logOut())}>LogOut</LogoutBtn>
      </ProfileDashboard>
    </Container>
  );
};
