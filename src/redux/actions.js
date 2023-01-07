import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: {
      contactId,
    },
  };
};

export const filterContact = name => {
  return {
    type: 'contact/filterContact',
    payload: {
      name,
    },
  };
};
