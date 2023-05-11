import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box>
        <NavLink to="/">
          <Typography
            sx={{
              my: 2,
              color: '#1976d2',
              display: 'block',
              fontWeight: 'bold',
              fontSize: 26,
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
