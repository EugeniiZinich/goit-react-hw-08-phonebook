import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: '10px',
          alignContent: 'stretch',
        }}
      >
        {/* <Typography
          variant="h6"
          noWrap
          component="span"
          sx={{
            height: '25%',
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography> */}
        <NavLink to="/">
          <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
            Home
          </Typography>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
              Contacts
            </Typography>
          </NavLink>
        )}
      </Box>
    </nav>
  );
};
