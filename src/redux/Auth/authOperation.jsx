import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://contacts-04gv.onrender.com';

export const setAuthHeader = token => {
  if (token === undefined) return;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const ClearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/register', arg);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/login', arg);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/api/auth/logout');
      ClearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/api/auth/current');

      return data.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/avatar',
  async (avatar, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/api/auth/avatars', avatar);
      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSubscription = createAsyncThunk(
  'auth/subscription',
  async (subscription, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        '/api/auth/subscription',
        subscription
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateName = createAsyncThunk(
  'auth/name',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/api/auth/name', name);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
