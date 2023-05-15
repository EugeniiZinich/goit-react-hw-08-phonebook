import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { getLocation } from 'redux/ContactsSlice/selectors';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useSelector(getLocation);

  const variantColor =
    location === '/contacts' || location === '/addcontact' ? '#fff' : '#1976d2';

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <NavLink to="/">
          <Typography
            sx={{
              my: 2,
              color: variantColor,
              display: 'block',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            Home
          </Typography>
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/contacts">
              <Typography
                sx={{
                  my: 2,
                  color: variantColor,
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                Contacts
              </Typography>
            </NavLink>
            <NavLink to="/addcontact">
              <Typography
                sx={{
                  my: 2,
                  color: variantColor,
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                Add contact
              </Typography>
            </NavLink>
          </>
        )}
      </Box>
    </nav>
  );
};
