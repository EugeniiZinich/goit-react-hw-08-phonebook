import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box
        sx={{
          display: { xs: '1', md: 'flex' },
          gap: '10px',
          alignContent: 'stretch',
        }}
      >
        <NavLink to="/">
          <Typography
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
            }}
          >
            Home
          </Typography>
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink to="/contacts">
              <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
                Contacts
              </Typography>
            </NavLink>
            <NavLink to="/addcontact">
              <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
                Add contact
              </Typography>
            </NavLink>
          </>
        )}
      </Box>
    </nav>
  );
};
