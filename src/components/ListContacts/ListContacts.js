// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ListWrap, ContactCard } from './ListContacts.style';
import { getContacts } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

const ListContacts = () => {
  const { contacts, filter } = useSelector(getContacts);

  const getFilterContact = () => {
    if (filter.name === '') {
      return contacts;
    } else {
      const toNormalazedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(toNormalazedFilter)
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
