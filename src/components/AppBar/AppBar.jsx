import { Container, Toolbar } from '@mui/material';
// import styled from '@emotion/styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
// import { NavContainer } from './AppBar.styled';
import { AppBarContainer } from './AppBar.mui.style';

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   width: 400,
//   backgroundColor: 'rgb(169, 186, 217)',
//   alignContent: 'center',
// }));

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Container
        sx={{
          display: 'flex',

          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <AppBarContainer>
          <Toolbar
            sx={{
              display: 'flex',
              gap: '10px',
              color: 'blue',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBarContainer>
      </Container>
    </header>
  );
};
