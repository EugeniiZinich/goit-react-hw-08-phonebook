import { createSlice } from '@reduxjs/toolkit';

const modalIsOpen = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    modal: {
      reducer(state, action) {
        state.isOpen = action.payload;
      },
    },
  },
});

export const { modal } = modalIsOpen.actions;
export const modalReducer = modalIsOpen.reducer;
