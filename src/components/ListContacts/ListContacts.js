import PropTypes from 'prop-types';

const ListContacts = ({ filter, onDeleteContacts }) => {
  return (
    <>
      <ul>
        {filter.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button type="button" onClick={() => onDeleteContacts(id)}>
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
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
