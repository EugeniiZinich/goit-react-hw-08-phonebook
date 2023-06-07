import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { useAuth } from 'components/hooks/useAuth';
import { Title } from './Home.styled';
import { HomeContainer, HomeBtn } from './Home.mui.style';
import { fetchCurrentUser } from 'redux/Auth/authOperation';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isLogin = isLoggedIn ? '/contacts' : '/login';

  return (
    <HomeContainer>
      <Slide cascade>
        <Title>Welcome to ContactBook</Title>
      </Slide>
      <NavLink to={isLogin}>
        <Fade delay={'200'}>
          <HomeBtn variant="contained" type="button">
            Get Started
          </HomeBtn>
        </Fade>
      </NavLink>
    </HomeContainer>
  );
};
