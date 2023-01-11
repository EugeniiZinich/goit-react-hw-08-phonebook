import { nanoid } from 'nanoid';

const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};
const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: {
      contactId,
    },
  };
};

const filterContact = name => {
  return {
    type: 'contact/filterContact',
    payload: {
      name,
    },
  };
};
