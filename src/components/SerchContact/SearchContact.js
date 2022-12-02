import PropTypes from 'prop-types';

const SearchContact = ({ value, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        required
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default SearchContact;

SearchContact.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
