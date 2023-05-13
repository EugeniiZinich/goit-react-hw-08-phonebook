import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import ListContacts from 'components/ListContacts';
import SearchContact from 'components/SerchContact/SearchContact';
import { fetchContacts } from 'redux/ContactsSlice/operation';
import { animateOptions } from 'components/AnimateBack/AnimateBack';
import { addLocation } from 'redux/ContactsSlice/contactSlice';

export default function Contacts() {
  const dispatch = useDispatch();
  const location = useLocation();

  dispatch(addLocation(location.pathname));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {}, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={animateOptions}
      />

      <div>
        <ListContacts>
          <SearchContact />
        </ListContacts>
      </div>
    </>
  );
}
