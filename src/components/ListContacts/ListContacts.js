import PropTypes from 'prop-types';
import { ListWrap, ContactCard, DeleteBtn } from './ListContacts.style';

const ListContacts = ({ filter, onDeleteContacts }) => {
  return (
    <>
      <ListWrap>
        {filter.map(({ name, id, number }) => {
          return (
            <ContactCard key={id}>
              {name}: {number}
              <DeleteBtn type="button" onClick={() => onDeleteContacts(id)}>
                Delete contact
              </DeleteBtn>
            </ContactCard>
          );
        })}
      </ListWrap>
    </>
  );
};

export default ListContacts;

ListContacts.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
