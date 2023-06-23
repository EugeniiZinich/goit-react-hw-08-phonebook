import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { HomeContainer } from './HomePage.mui.styled';
import { addLocation } from 'redux/ContactsSlice/contactSlice';
import { setAuthHeader } from 'redux/Auth/authOperation';
import { updateToken } from 'redux/Auth/authSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const newToken = params.token;

    if (newToken) {
      setAuthHeader(newToken);
      dispatch(updateToken(newToken));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(addLocation(location.pathname));
  }, [dispatch, location.pathname]);

  return (
    <section>
      <HomeContainer disableGutters maxWidth={false}>
        <Home />
      </HomeContainer>
    </section>
  );
}
