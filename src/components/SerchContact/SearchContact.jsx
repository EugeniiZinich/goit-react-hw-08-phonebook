import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterInput, Container } from './SearchContact.style';

import { filterContact } from 'redux/FilterSlice/filtersSlice';

const SearchContact = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.currentTarget.value;

    setFilter(value);

    dispatch(filterContact(value));
  };

  return (
    <Container>
      <h3>Find contacts by name</h3>
      <label>
        <FilterInput
          type="text"
          name="name"
          required
          value={filter}
          onChange={changeFilter}
        ></FilterInput>
      </label>
    </Container>
  );
};

export default SearchContact;

// SearchContact.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
