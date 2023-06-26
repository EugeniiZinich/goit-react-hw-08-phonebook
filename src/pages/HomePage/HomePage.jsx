import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { HomeContainer } from './HomePage.mui.styled';
import { addLocation } from 'redux/ContactsSlice/contactSlice';
import { fetchCurrentUser } from 'redux/Auth/authOperation';

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCurrentUser());
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
