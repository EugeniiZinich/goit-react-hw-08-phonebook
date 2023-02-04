import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilteredContact,
  getIsLoading,
  getError,
  getSuccess,
} from 'redux/ContactsSlice/selectors';

export const useContact = () => {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const allContacts = useSelector(getContacts);
  const filterContact = useSelector(getFilteredContact);
  const success = useSelector(getSuccess);

  return {
    isLoading,
    isError,
    allContacts,
    filterContact,
    success,
  };
};
