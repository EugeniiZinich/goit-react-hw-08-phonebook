import { useSelector } from 'react-redux';
// import { createPortal } from 'react-dom';
import { ContactList, ContactCard, Container } from './ListContacts.style';
import { getContacts, getFilteredContact } from 'redux/ContactsSlice/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

// const modalRoot = document.querySelector('#contact-root');

const ListContacts = () => {
  const { items } = useSelector(getContacts);

  const filter = useSelector(getFilteredContact);

  const getFilterContact = () => {
    if (filter === '') {
      return items;
    } else {
      const toNormalazedFilter = filter.trim().toLowerCase();
      return items.filter(contact =>
        contact.name.trim().toLowerCase().includes(toNormalazedFilter)
      );
    }
  };

  return (
    <Container>
      <ContactList>
        {items.length > 0 &&
          getFilterContact().map(({ name, id, number }) => {
            return (
              <ContactCard key={id}>
                <ContactItem name={name} id={id} number={number} />
              </ContactCard>
            );
          })}
      </ContactList>
    </Container>
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
