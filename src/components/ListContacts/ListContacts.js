import { useSelector } from 'react-redux';
import { ListWrap, ContactCard } from './ListContacts.style';
import { getContacts, getFilteredContact } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContact);

  const getFilterContact = () => {
    if (filter.name === '') {
      return contacts.contact;
    } else {
      const toNormalazedFilter = filter.trim().toLowerCase();

      return contacts.contact.filter(contact =>
        contact.name.trim().toLowerCase().includes(toNormalazedFilter)
      );
    }
  };

  return (
    <>
      <ListWrap>
        {getFilterContact().map(({ name, id, number }) => {
          return (
            <ContactCard key={id}>
              <ContactItem name={name} id={id} number={number} />
            </ContactCard>
          );
        })}
      </ListWrap>
    </>
  );
};

export default ListContacts;

// ListContacts.propTypes = {
//   onDeleteContacts: PropTypes.func.isRequired,
//   // filter: PropTypes.shape({
//   //   id: PropTypes.string.isRequired,
//   //   name: PropTypes.string.isRequired,
//   //   number: PropTypes.string.isRequired,
//   // }).isRequired,
// };
