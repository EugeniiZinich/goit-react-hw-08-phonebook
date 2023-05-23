import { useSelector } from 'react-redux';
import { ContactList, ContactCard, Container } from './ListContacts.style';
import { getContacts, getFilteredContact } from 'redux/ContactsSlice/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

const ListContacts = ({ children }) => {
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

  const contact = getFilterContact();

  return (
    <Container>
      {children}
      <ContactList>
        {items?.length > 0 &&
          [...contact].reverse().map(({ name, _id, phone }) => {
            return (
              <ContactCard key={_id}>
                <ContactItem name={name} id={_id} phone={phone} />
              </ContactCard>
            );
          })}
      </ContactList>
    </Container>
  );
};

export default ListContacts;
