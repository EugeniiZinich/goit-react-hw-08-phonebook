import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { TextField, Button } from '@mui/material';
import { getContacts } from 'redux/ContactsSlice/selectors';
import { addContact } from 'redux/ContactsSlice/operation';
import { FormSubmit, Container } from './ContactForm.style';
import { useContact } from 'components/hooks/useContact';
import { Loader } from 'Loader/Loader';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const { isLoading } = useContact();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return null;
    }
  };

  const formSubmit = e => {
    e.preventDefault();

    const addedNumber = contacts.items.some(
      contact => contact.number === number
    );

    if (addedNumber) {
      toast.error(`Contact with number ${number} is already exist! `);
      return;
    } else {
      toast.success(`The contact was added`);
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Container>
      <FormSubmit onSubmit={formSubmit}>
        <h2 style={{ padding: '0 0 10px' }}>Add yours contact</h2>
        <label>
          <TextField
            type="text"
            name="name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: '25ch' }}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <TextField
            type="tel"
            name="number"
            id="outlined-basic"
            label="Number"
            variant="outlined"
            sx={{ width: '25ch' }}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <br />
        {isLoading ? (
          <Loader />
        ) : (
          <Button variant="contained" type="submit">
            Add contact
          </Button>
        )}
      </FormSubmit>
    </Container>
  );
};

export default ContactForm;
