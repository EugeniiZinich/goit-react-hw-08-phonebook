import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBar, Container, Toolbar } from '@mui/material';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Container maxWidth="x1">
        <Toolbar
          sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
