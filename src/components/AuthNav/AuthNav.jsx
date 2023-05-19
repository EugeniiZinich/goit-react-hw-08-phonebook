import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register" sx={{}}>
        <Typography
          sx={{
            fontFamily: 'Dancing Script cursive',
            my: 2,
            color: '#1976d2',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 26,
          }}
        >
          Sign up
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography
          sx={{
            fontFamily: 'Dancing Script cursive',
            my: 2,
            color: '#1976d2',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 26,
          }}
        >
          Sign in
        </Typography>
      </NavLink>
    </Container>
  );
};
