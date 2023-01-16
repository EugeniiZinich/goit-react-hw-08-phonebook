export const getContacts = state => state.contacts;

export const getFilteredContact = state => state.name;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
