import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Home } from 'components/Home/Home';
import { HomeContainer } from './HomePage.styled';
import { addLocation } from 'redux/ContactsSlice/contactSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();

  dispatch(addLocation(location.pathname));
  return (
    <section>
      <HomeContainer disableGutters maxWidth={false}>
        <Home />
      </HomeContainer>
    </section>
  );
}
