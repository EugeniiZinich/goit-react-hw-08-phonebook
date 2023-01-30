import { useDispatch } from 'react-redux';
import { DeleteBtn } from 'components/ListContacts/ListContacts.style';
import { deleteContacts } from 'redux/ContactsSlice/operation';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {name}: {number}
      <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete contact
      </DeleteBtn>
    </div>
  );
};
