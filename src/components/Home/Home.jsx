import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { Container, Inner } from './Home.styled';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  const isLogin = isLoggedIn ? '/contacts' : '/login';

  return (
    <section>
      <Container>
        <Inner>
          <h1>Welcome to Phonebook App Your contacts will be safe!</h1>
          <NavLink to={isLogin}>
            <Button sx={{ w: '25px' }} variant="contained" type="button">
              Get Started
            </Button>
          </NavLink>
        </Inner>
      </Container>
    </section>
  );
};
