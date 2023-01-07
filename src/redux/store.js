import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: {
    status: 'all',
  },
};
// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.contactId
        ),
      };
    case 'contact/filterContact':
      return {
        ...state,
        contacts: state.contacts.filter(contacts =>
          contacts.name
            .toLowerCase()
            .includes(action.payload.name.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
// contact.name.toLowerCase().includes(action.payload.name.toLowerCase());
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
