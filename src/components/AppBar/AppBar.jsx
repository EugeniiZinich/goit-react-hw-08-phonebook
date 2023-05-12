import { Container, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarContainer } from './AppBar.mui.style';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false}>
        <AppBarContainer position="absolute">
          <Toolbar
            variant="dense"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBarContainer>
      </Container>
    </ThemeProvider>
  );
};
