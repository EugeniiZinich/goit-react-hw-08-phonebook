import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contactApi = axios.create({
  baseURL: 'https://contacts-04gv.onrender.com/',
});

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const ClearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await contactApi.post('api/auth/register', arg);

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
      const { data } = await contactApi.post('api/auth/login', arg);
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
      await axios.post('https://contacts-04gv.onrender.com/api/auth/logout');
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
      const { data } = await axios.get(
        'https://contacts-04gv.onrender.com/api/auth/current'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
