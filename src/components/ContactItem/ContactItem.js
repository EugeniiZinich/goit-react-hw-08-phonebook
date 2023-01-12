import { useDispatch } from 'react-redux';
import { DeleteBtn } from 'components/ListContacts/ListContacts.style';
import { deleteContact } from 'redux/tasksSlice';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {name}: {number}
      <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </DeleteBtn>
    </div>
  );
};
