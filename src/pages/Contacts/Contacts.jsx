import ContactForm from 'components/ContactForm';
import ListContacts from 'components/ListContacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SearchContact from 'components/SerchContact/SearchContact';
import { fetchContacts } from 'redux/ContactsSlice/operation';

export default function Contacts() {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your Contacts</title>

      <ContactForm />
      <SearchContact />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ListContacts />
    </>
  );
}
