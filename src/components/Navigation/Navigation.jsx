import { useSelector, useDispatch } from 'react-redux';
import { Typography, ThemeProvider } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { getLocation, getIsOpen } from 'redux/ContactsSlice/selectors';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { StyledBox } from './Navigation.mui.styled';
import { theme } from 'config/breakpoints/breakpoints';
import { isOpenMenu } from 'redux/ContactsSlice/contactSlice';
import { StyledLink } from './Navigation.styled';

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
            <StyledLink
              to="/"
              onClick={() => dispatch(isOpenMenu(false))}
              variantColor={variantColor}
            >
              <Typography
                sx={{
                  fontFamily: 'Dancing Script cursive',
                  my: 2,
                  color: variantColor,
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                Home
              </Typography>
            </StyledLink>
            {isLoggedIn && (
              <>
                <StyledLink
                  to="/contacts"
                  onClick={() => dispatch(isOpenMenu(false))}
                  variantColor={variantColor}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Dancing Script ',
                      my: 2,
                      color: variantColor,
                      display: 'block',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}
                  >
                    Contacts
                  </Typography>
                </StyledLink>
                <StyledLink
                  to="/addcontact"
                  onClick={() => dispatch(isOpenMenu(false))}
                  variantColor={variantColor}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Dancing Script cursive',
                      my: 2,
                      color: variantColor,
                      display: 'block',
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}
                  >
                    Create contact
                  </Typography>
                </StyledLink>
              </>
            )}
          </div>
        </StyledBox>
      </ThemeProvider>
    </nav>
  );
};
