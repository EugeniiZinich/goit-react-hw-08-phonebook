import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, ThemeProvider } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { getLocation, getIsOpen } from 'redux/ContactsSlice/selectors';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { StyledBox } from './Navigation.mui.styled';
import { theme } from 'breakpoints/breakpoints';
import { isOpenMenu } from 'redux/ContactsSlice/contactSlice';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useSelector(getLocation);
  const isOpen = useSelector(getIsOpen);
  const dispatch = useDispatch();

  const variantColor =
    location === '/contacts' || location === '/addcontact' ? '#fff' : '#1976d2';

  return (
    <nav>
      <BurgerMenu />
      <ThemeProvider theme={theme}>
        <StyledBox isopen={isOpen.toString()}>
          <div>
            <NavLink to="/" onClick={() => dispatch(isOpenMenu(false))}>
              <Typography
                sx={{
                  my: 2,
                  color: variantColor,
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                Home
              </Typography>
            </NavLink>
            {isLoggedIn && (
              <>
                <NavLink
                  to="/contacts"
                  onClick={() => dispatch(isOpenMenu(false))}
                >
                  <Typography
                    sx={{
                      my: 2,
                      color: variantColor,
                      display: 'block',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}
                  >
                    Contacts
                  </Typography>
                </NavLink>
                <NavLink
                  to="/addcontact"
                  onClick={() => dispatch(isOpenMenu(false))}
                >
                  <Typography
                    sx={{
                      my: 2,
                      color: variantColor,
                      display: 'block',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}
                  >
                    Add contact
                  </Typography>
                </NavLink>
              </>
            )}
          </div>
        </StyledBox>
      </ThemeProvider>
    </nav>
  );
};
