import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './SearchContact.style';
import { StyledTextField } from './SearchContact.mui.styled';

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
      <label>
        <StyledTextField
          id="outlined-basic"
          label="Find contacts by name"
          variant="outlined"
          type="text"
          name="name"
          value={filter}
          onChange={changeFilter}
        ></StyledTextField>
      </label>
    </Container>
  );
};

export default SearchContact;
