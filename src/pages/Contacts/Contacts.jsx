import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListContacts from 'components/ListContacts';
import SearchContact from 'components/SerchContact/SearchContact';
import { fetchContacts } from 'redux/ContactsSlice/operation';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ListContacts>
          <SearchContact />
        </ListContacts>
      </div>
    </>
  );
}
