import { NavLink } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { useAuth } from 'components/hooks/useAuth';
import { Title } from './Home.styled';
import { HomeContainer, HomeBtn } from './Home.mui.style';

export const Home = () => {
  const { isLoggedIn } = useAuth();

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
