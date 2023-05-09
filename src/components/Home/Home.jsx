import { NavLink } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from 'components/hooks/useAuth';
import { Title } from './Home.styled';
import { HomeContainer, HomeBtn } from './Home.mui.style';

const theme = createTheme({
  palette: {
    main: '#d4941f',
  },
});

export const Home = () => {
  const { isLoggedIn } = useAuth();

  const isLogin = isLoggedIn ? '/contacts' : '/login';

  return (
    <ThemeProvider theme={theme}>
      <HomeContainer fixed>
        <Slide cascade>
          <Title>Welcome to ContactBook App</Title>
        </Slide>
        <NavLink to={isLogin}>
          <Fade delay={'200'}>
            <HomeBtn variant="contained" type="button">
              Get Started
            </HomeBtn>
          </Fade>
        </NavLink>
      </HomeContainer>
    </ThemeProvider>
  );
};
