import { Container, Toolbar, ThemeProvider } from '@mui/material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarContainer } from './AppBar.mui.style';
import { theme } from 'config/breakpoints/breakpoints';

export const NavBar = () => {
  const { isLoggedIn, avatarUrl } = useAuth();

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
            {isLoggedIn ? <UserMenu avatarUrl={avatarUrl} /> : <AuthNav />}
          </Toolbar>
        </AppBarContainer>
      </ThemeProvider>
    </Container>
  );
};
