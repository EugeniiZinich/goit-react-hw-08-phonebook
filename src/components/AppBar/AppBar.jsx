import { Container, Toolbar, ThemeProvider } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarContainer } from './AppBar.mui.style';
import { theme } from 'breakpoints/breakpoints';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container disableGutters maxWidth={false}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Container>
  );
};
