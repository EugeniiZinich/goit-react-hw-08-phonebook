import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Container, StyledLink } from './AuthNav.styled';
import { getLocation } from 'redux/ContactsSlice/selectors';

export const AuthNav = () => {
  const location = useSelector(getLocation);
  const variantColor =
    location === '/contacts' || location === '/addcontact' ? '#fff' : '#1976d2';

  return (
    <Container>
      <StyledLink to="/register" variantсolor={variantColor}>
        <Typography
          sx={{
            fontFamily: 'Dancing Script cursive',
            my: 2,
            color: '#1976d2',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          Sign up
        </Typography>
      </StyledLink>
      <StyledLink to="/login" variantсolor={variantColor}>
        <Typography
          sx={{
            fontFamily: 'Dancing Script cursive',
            my: 2,
            color: '#1976d2',
            display: 'block',
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >
          Sign in
        </Typography>
      </StyledLink>
    </Container>
  );
};
