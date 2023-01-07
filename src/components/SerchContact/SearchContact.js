import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FilterInput, FilterWrapper } from './SearchContact.style';
import { filterContact } from 'redux/actions';

const SearchContact = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);

    dispatch(filterContact(value));
  };

  return (
    <FilterWrapper>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="name"
        required
        value={filter}
        onChange={changeFilter}
      ></FilterInput>
    </FilterWrapper>
  );
};

export default SearchContact;

// SearchContact.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
