import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register" sx={{}}>
        <Typography
          sx={{
            my: 2,
            color: '#1976d2',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 26,
          }}
        >
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography
          sx={{
            my: 2,
            color: '#1976d2',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 26,
          }}
        >
          Log In
        </Typography>
      </NavLink>
    </Container>
  );
};
