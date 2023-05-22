import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperation';

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  state.isRefreshing = false;
};

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken(state, { payload }) {
      state.token = payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [register.rejected]: handleRejected,

    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: handleRejected,

    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },

    [fetchCurrentUser.pending]: handlePending,
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected]: handleRejected,
  },
});

export const { updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
