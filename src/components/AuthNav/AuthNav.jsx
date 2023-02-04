import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register">
        <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography sx={{ my: 2, color: 'white', display: 'block' }}>
          Log In
        </Typography>
      </NavLink>
    </Container>
  );
};
