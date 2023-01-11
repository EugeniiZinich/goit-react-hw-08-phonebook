import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'contact',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
