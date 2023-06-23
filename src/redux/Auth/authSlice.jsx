import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateAvatar,
  updateSubscription,
  updateName,
} from './authOperation';

const handleRefreshing = state => {
  state.isRefreshing = true;
};

const handleRejectedRefreshing = state => {
  state.isRefreshing = false;
};

const handlePendingUpdate = state => {
  state.isPending = true;
};

const handlePendingRejected = state => {
  state.isPending = false;
};

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isPending: false,
  error: null,
  avatarUrl: '',
  subscription: '',
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
    [register.pending]: handleRefreshing,
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.avatarUrl = action.payload.avatarUrl;
    },
    [register.rejected]: handleRejectedRefreshing,

    [logIn.pending]: handleRefreshing,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.avatarUrl = action.payload.avatarURL;
    },
    [logIn.rejected]: handleRejectedRefreshing,

    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },

    [fetchCurrentUser.pending]: handleRefreshing,
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.avatarUrl = action.payload.avatarURL;
    },
    [fetchCurrentUser.rejected]: handleRejectedRefreshing,

    [updateAvatar.pending]: handlePendingUpdate,
    [updateAvatar.fulfilled](state, action) {
      state.avatarUrl = action.payload.avatarURL;
      state.isPending = false;
    },
    [updateAvatar.rejected]: handlePendingRejected,

    [updateSubscription.pending]: handlePendingUpdate,
    [updateSubscription.fulfilled](state, action) {
      state.user.subscription = action.payload.subscription;
      state.isPending = false;
    },
    [updateSubscription.rejected]: handlePendingRejected,

    [updateName.pending]: handlePendingUpdate,
    [updateName.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.isPending = false;
    },
    [updateName.rejected]: handlePendingRejected,
  },
});

export const { updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
