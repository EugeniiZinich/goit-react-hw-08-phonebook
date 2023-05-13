export const getContacts = state => state.contacts;

export const getFilteredContact = state => state.filter.value;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getSuccess = state => state.contacts.success;

export const getLocation = state => state.contacts.location;
