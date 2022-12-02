import PropTypes from 'prop-types';
import { FilterInput, FilterWrapper } from './SearchContact.style';

const SearchContact = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="name"
        required
        value={value}
        onChange={onChange}
      ></FilterInput>
    </FilterWrapper>
  );
};

export default SearchContact;

SearchContact.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
