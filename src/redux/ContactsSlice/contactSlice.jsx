import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContacts } from './operation';
import { logOut } from 'redux/Auth/operation';

const handlePending = state => {
  state.isLoading = true;
  state.success = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    success: false,
    location: null,
  },
  reducers: {
    addLocation(state, action) {
      state.location = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected]: handleRejected,

    [logOut.fulfilled](state) {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { addLocation } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
